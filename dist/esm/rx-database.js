import _createClass from "@babel/runtime/helpers/createClass";
import { IdleQueue } from 'custom-idle-queue';
import { pluginMissing, flatClone, PROMISE_RESOLVE_FALSE, randomCouchString, ensureNotFalsy, getDefaultRevision, getDefaultRxDocumentMeta, defaultHashSha256, NXDB_VERSION } from "./plugins/utils/index.js";
import { newRxError } from "./rx-error.js";
import { createRxSchema } from "./rx-schema.js";
import { runPluginHooks, runAsyncPluginHooks } from "./hooks.js";
import { Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { createRxCollection } from "./rx-collection.js";
import { flatCloneDocWithMeta, getSingleDocument, getWrappedStorageInstance, INTERNAL_STORAGE_NAME } from "./rx-storage-helper.js";
import { ObliviousSet } from 'oblivious-set';
import { ensureStorageTokenDocumentExists, getAllCollectionDocuments, getPrimaryKeyOfInternalDocument, INTERNAL_CONTEXT_COLLECTION, INTERNAL_STORE_SCHEMA, _collectionNamePrimary } from "./rx-database-internal-store.js";
import { removeCollectionStorages } from "./rx-collection-helper.js";
import { overwritable } from "./overwritable.js";
/**
 * stores the used database names+storage names
 * so we can throw when the same database is created more then once.
 */
var USED_DATABASE_NAMES = new Set();
var DB_COUNT = 0;
export var RxDatabaseBase = /*#__PURE__*/function () {
  /**
   * Contains all known non-closed storage instances
   * that belong to this database.
   * Used in plugins and unit tests.
   */

  function RxDatabaseBase(name,
  /**
   * Uniquely identifies the instance
   * of this RxDatabase.
   */
  token, storage, instanceCreationOptions, password, multiInstance, eventReduce = false, options = {},
  /**
   * Stores information documents about the collections of the database
   */
  internalStore, hashFunction, cleanupPolicy, allowSlowCount, reactivity) {
    this.idleQueue = new IdleQueue();
    this.nxdbVersion = NXDB_VERSION;
    this.storageInstances = new Set();
    this._subs = [];
    this.startupErrors = [];
    this.onDestroy = [];
    this.destroyed = false;
    this.collections = {};
    this.states = {};
    this.eventBulks$ = new Subject();
    this.observable$ = this.eventBulks$.pipe(mergeMap(changeEventBulk => changeEventBulk.events));
    this.storageToken = PROMISE_RESOLVE_FALSE;
    this.storageTokenDocument = PROMISE_RESOLVE_FALSE;
    this.emittedEventBulkIds = new ObliviousSet(60 * 1000);
    this.name = name;
    this.token = token;
    this.storage = storage;
    this.instanceCreationOptions = instanceCreationOptions;
    this.password = password;
    this.multiInstance = multiInstance;
    this.eventReduce = eventReduce;
    this.options = options;
    this.internalStore = internalStore;
    this.hashFunction = hashFunction;
    this.cleanupPolicy = cleanupPolicy;
    this.allowSlowCount = allowSlowCount;
    this.reactivity = reactivity;
    DB_COUNT++;

    /**
     * In the dev-mode, we create a pseudoInstance
     * to get all properties of RxDatabase and ensure they do not
     * conflict with the collection names etc.
     * So only if it is not pseudoInstance,
     * we have all values to prepare a real RxDatabase.
     *
     * TODO this is ugly, we should use a different way in the dev-mode
     * so that all non-dev-mode code can be cleaner.
     */
    if (this.name !== 'pseudoInstance') {
      /**
       * Wrap the internal store
       * to ensure that calls to it also end up in
       * calculation of the idle state and the hooks.
       */
      this.internalStore = getWrappedStorageInstance(this.asRxDatabase, internalStore, INTERNAL_STORE_SCHEMA);

      /**
       * Start writing the storage token.
       * Do not await the creation because it would run
       * in a critical path that increases startup time.
       *
       * Writing the token takes about 20 milliseconds
       * even on a fast adapter, so this is worth it.
       */
      this.storageTokenDocument = ensureStorageTokenDocumentExists(this.asRxDatabase).catch(err => this.startupErrors.push(err));
      this.storageToken = this.storageTokenDocument.then(doc => doc.data.token).catch(err => this.startupErrors.push(err));
    }
  }
  var _proto = RxDatabaseBase.prototype;
  _proto.getReactivityFactory = function getReactivityFactory() {
    if (!this.reactivity) {
      throw newRxError('DB14', {
        database: this.name
      });
    }
    return this.reactivity;
  }

  /**
   * Because having unhandled exceptions would fail,
   * we have to store the async errors of the constructor here
   * so we can throw them later.
   */

  /**
   * When the database is destroyed,
   * these functions will be called an awaited.
   * Used to automatically clean up stuff that
   * belongs to this collection.
   */

  /**
   * Unique token that is stored with the data.
   * Used to detect if the dataset has been deleted
   * and if two RxDatabase instances work on the same dataset or not.
   *
   * Because reading and writing the storageToken runs in the hot path
   * of database creation, we do not await the storageWrites but instead
   * work with the promise when we need the value.
   */

  /**
   * Stores the whole state of the internal storage token document.
   * We need this in some plugins.
   */

  /**
   * Contains the ids of all event bulks that have been emitted
   * by the database.
   * Used to detect duplicates that come in again via BroadcastChannel
   * or other streams.
   * TODO instead of having this here, we should add a test to ensure each RxStorage
   * behaves equal and does never emit duplicate eventBulks.
   */;
  /**
   * This is the main handle-point for all change events
   * ChangeEvents created by this instance go:
   * RxDocument -> RxCollection -> RxDatabase.$emit -> MultiInstance
   * ChangeEvents created by other instances go:
   * MultiInstance -> RxDatabase.$emit -> RxCollection -> RxDatabase
   */
  _proto.$emit = function $emit(changeEventBulk) {
    if (this.emittedEventBulkIds.has(changeEventBulk.id)) {
      return;
    }
    this.emittedEventBulkIds.add(changeEventBulk.id);

    // emit into own stream
    this.eventBulks$.next(changeEventBulk);
  }

  /**
   * removes the collection-doc from the internalStore
   */;
  _proto.removeCollectionDoc = async function removeCollectionDoc(name, schema) {
    var doc = await getSingleDocument(this.internalStore, getPrimaryKeyOfInternalDocument(_collectionNamePrimary(name, schema), INTERNAL_CONTEXT_COLLECTION));
    if (!doc) {
      throw newRxError('SNH', {
        name,
        schema
      });
    }
    var writeDoc = flatCloneDocWithMeta(doc);
    writeDoc._deleted = true;
    await this.internalStore.bulkWrite([{
      document: writeDoc,
      previous: doc
    }], 'rx-database-remove-collection');
  }

  /**
   * creates multiple RxCollections at once
   * to be much faster by saving db txs and doing stuff in bulk-operations
   * This function is not called often, but mostly in the critical path at the initial page load
   * So it must be as fast as possible.
   */;
  _proto.addCollections = async function addCollections(collectionCreators) {
    var jsonSchemas = {};
    var schemas = {};
    var bulkPutDocs = [];
    var useArgsByCollectionName = {};
    await Promise.all(Object.entries(collectionCreators).map(async ([name, args]) => {
      var collectionName = name;
      var rxJsonSchema = args.schema;
      jsonSchemas[collectionName] = rxJsonSchema;
      var schema = createRxSchema(rxJsonSchema, this.hashFunction);
      schemas[collectionName] = schema;

      // collection already exists
      if (this.collections[name]) {
        throw newRxError('DB3', {
          name
        });
      }
      var collectionNameWithVersion = _collectionNamePrimary(name, rxJsonSchema);
      var collectionDocData = {
        id: getPrimaryKeyOfInternalDocument(collectionNameWithVersion, INTERNAL_CONTEXT_COLLECTION),
        key: collectionNameWithVersion,
        context: INTERNAL_CONTEXT_COLLECTION,
        data: {
          name: collectionName,
          schemaHash: await schema.hash,
          schema: schema.jsonSchema,
          version: schema.version,
          connectedStorages: []
        },
        _deleted: false,
        _meta: getDefaultRxDocumentMeta(),
        _rev: getDefaultRevision(),
        _attachments: {}
      };
      bulkPutDocs.push({
        document: collectionDocData
      });
      var useArgs = Object.assign({}, args, {
        name: collectionName,
        schema,
        database: this
      });

      // run hooks
      var hookData = flatClone(args);
      hookData.database = this;
      hookData.name = name;
      runPluginHooks('preCreateRxCollection', hookData);
      useArgs.conflictHandler = hookData.conflictHandler;
      useArgsByCollectionName[collectionName] = useArgs;
    }));
    var putDocsResult = await this.internalStore.bulkWrite(bulkPutDocs, 'rx-database-add-collection');
    await ensureNoStartupErrors(this);
    await Promise.all(putDocsResult.error.map(async error => {
      if (error.status !== 409) {
        throw newRxError('DB12', {
          database: this.name,
          writeError: error
        });
      }
      var docInDb = ensureNotFalsy(error.documentInDb);
      var collectionName = docInDb.data.name;
      var schema = schemas[collectionName];
      // collection already exists but has different schema
      if (docInDb.data.schemaHash !== (await schema.hash)) {
        throw newRxError('DB6', {
          database: this.name,
          collection: collectionName,
          previousSchemaHash: docInDb.data.schemaHash,
          schemaHash: await schema.hash,
          previousSchema: docInDb.data.schema,
          schema: ensureNotFalsy(jsonSchemas[collectionName])
        });
      }
    }));
    var ret = {};
    await Promise.all(Object.keys(collectionCreators).map(async collectionName => {
      var useArgs = useArgsByCollectionName[collectionName];
      var collection = await createRxCollection(useArgs);
      ret[collectionName] = collection;

      // set as getter to the database
      this.collections[collectionName] = collection;
      if (!this[collectionName]) {
        Object.defineProperty(this, collectionName, {
          get: () => this.collections[collectionName]
        });
      }
    }));
    return ret;
  }

  /**
   * runs the given function between idleQueue-locking
   */;
  _proto.lockedRun = function lockedRun(fn) {
    return this.idleQueue.wrapCall(fn);
  };
  _proto.requestIdlePromise = function requestIdlePromise() {
    return this.idleQueue.requestIdlePromise();
  }

  /**
   * Export database to a JSON friendly format.
   */;
  _proto.exportJSON = function exportJSON(_collections) {
    throw pluginMissing('json-dump');
  };
  _proto.addState = function addState(_name) {
    throw pluginMissing('state');
  }

  /**
   * Import the parsed JSON export into the collection.
   * @param _exportedJSON The previously exported data from the `<db>.exportJSON()` method.
   * @note When an interface is loaded in this collection all base properties of the type are typed as `any`
   * since data could be encrypted.
   */;
  _proto.importJSON = function importJSON(_exportedJSON) {
    throw pluginMissing('json-dump');
  };
  _proto.backup = function backup(_options) {
    throw pluginMissing('backup');
  };
  _proto.leaderElector = function leaderElector() {
    throw pluginMissing('leader-election');
  };
  _proto.isLeader = function isLeader() {
    throw pluginMissing('leader-election');
  }
  /**
   * returns a promise which resolves when the instance becomes leader
   */;
  _proto.waitForLeadership = function waitForLeadership() {
    throw pluginMissing('leader-election');
  };
  _proto.migrationStates = function migrationStates() {
    throw pluginMissing('migration-schema');
  }

  /**
   * destroys the database-instance and all collections
   */;
  _proto.destroy = async function destroy() {
    if (this.destroyed) {
      return PROMISE_RESOLVE_FALSE;
    }

    // settings destroyed = true must be the first thing to do.
    this.destroyed = true;
    await runAsyncPluginHooks('preDestroyRxDatabase', this);
    /**
     * Complete the event stream
     * to stop all subscribers who forgot to unsubscribe.
     */
    this.eventBulks$.complete();
    DB_COUNT--;
    this._subs.map(sub => sub.unsubscribe());

    /**
     * Destroying the pseudo instance will throw
     * because stuff is missing
     * TODO we should not need the pseudo instance on runtime.
     * we should generate the property list on build time.
     */
    if (this.name === 'pseudoInstance') {
      return PROMISE_RESOLVE_FALSE;
    }

    /**
     * First wait until the database is idle
     */
    return this.requestIdlePromise().then(() => Promise.all(this.onDestroy.map(fn => fn())))
    // destroy all collections
    .then(() => Promise.all(Object.keys(this.collections).map(key => this.collections[key]).map(col => col.destroy())))
    // destroy internal storage instances
    .then(() => this.internalStore.close())
    // remove combination from USED_COMBINATIONS-map
    .then(() => USED_DATABASE_NAMES.delete(this.storage.name + '|' + this.name)).then(() => true);
  }

  /**
   * deletes the database and its stored data.
   * Returns the names of all removed collections.
   */;
  _proto.remove = function remove() {
    return this.destroy().then(() => removeRxDatabase(this.name, this.storage, this.password));
  };
  return _createClass(RxDatabaseBase, [{
    key: "$",
    get: function () {
      return this.observable$;
    }
  }, {
    key: "asRxDatabase",
    get: function () {
      return this;
    }
  }]);
}();

/**
 * checks if an instance with same name and storage already exists
 * @throws {RxError} if used
 */
function throwIfDatabaseNameUsed(name, storage) {
  var key = storage.name + '|' + name;
  if (!USED_DATABASE_NAMES.has(key)) {
    return;
  } else {
    throw newRxError('DB8', {
      name,
      storage: storage.name,
      link: 'https://nxdb.nxpkg.github.io/rx-database.html#ignoreduplicate'
    });
  }
}

/**
 * Creates the storage instances that are used internally in the database
 * to store schemas and other configuration stuff.
 */
export async function createRxDatabaseStorageInstance(databaseInstanceToken, storage, databaseName, options, multiInstance, password) {
  var internalStore = await storage.createStorageInstance({
    databaseInstanceToken,
    databaseName,
    collectionName: INTERNAL_STORAGE_NAME,
    schema: INTERNAL_STORE_SCHEMA,
    options,
    multiInstance,
    password,
    devMode: overwritable.isDevMode()
  });
  return internalStore;
}
export function createRxDatabase({
  storage,
  instanceCreationOptions,
  name,
  password,
  multiInstance = true,
  eventReduce = true,
  ignoreDuplicate = false,
  options = {},
  cleanupPolicy,
  allowSlowCount = false,
  localDocuments = false,
  hashFunction = defaultHashSha256,
  reactivity
}) {
  runPluginHooks('preCreateRxDatabase', {
    storage,
    instanceCreationOptions,
    name,
    password,
    multiInstance,
    eventReduce,
    ignoreDuplicate,
    options,
    localDocuments
  });
  // check if combination already used
  if (!ignoreDuplicate) {
    throwIfDatabaseNameUsed(name, storage);
  }
  USED_DATABASE_NAMES.add(storage.name + '|' + name);
  var databaseInstanceToken = randomCouchString(10);
  return createRxDatabaseStorageInstance(databaseInstanceToken, storage, name, instanceCreationOptions, multiInstance, password)
  /**
   * Creating the internal store might fail
   * if some RxStorage wrapper is used that does some checks
   * and then throw.
   * In that case we have to properly clean up the database.
   */.catch(err => {
    USED_DATABASE_NAMES.delete(storage.name + '|' + name);
    throw err;
  }).then(storageInstance => {
    var rxDatabase = new RxDatabaseBase(name, databaseInstanceToken, storage, instanceCreationOptions, password, multiInstance, eventReduce, options, storageInstance, hashFunction, cleanupPolicy, allowSlowCount, reactivity);
    return runAsyncPluginHooks('createRxDatabase', {
      database: rxDatabase,
      creator: {
        storage,
        instanceCreationOptions,
        name,
        password,
        multiInstance,
        eventReduce,
        ignoreDuplicate,
        options,
        localDocuments
      }
    }).then(() => rxDatabase);
  });
}

/**
 * Removes the database and all its known data
 * with all known collections and all internal meta data.
 *
 * Returns the names of the removed collections.
 */
export async function removeRxDatabase(databaseName, storage, password) {
  var databaseInstanceToken = randomCouchString(10);
  var dbInternalsStorageInstance = await createRxDatabaseStorageInstance(databaseInstanceToken, storage, databaseName, {}, false, password);
  var collectionDocs = await getAllCollectionDocuments(dbInternalsStorageInstance);
  var collectionNames = new Set();
  collectionDocs.forEach(doc => collectionNames.add(doc.data.name));
  var removedCollectionNames = Array.from(collectionNames);
  await Promise.all(removedCollectionNames.map(collectionName => removeCollectionStorages(storage, dbInternalsStorageInstance, databaseInstanceToken, databaseName, collectionName, password)));
  await runAsyncPluginHooks('postRemoveRxDatabase', {
    databaseName,
    storage
  });
  await dbInternalsStorageInstance.remove();
  return removedCollectionNames;
}
export function isRxDatabase(obj) {
  return obj instanceof RxDatabaseBase;
}
export function dbCount() {
  return DB_COUNT;
}

/**
 * Returns true if the given RxDatabase was the first
 * instance that was created on the storage with this name.
 *
 * Can be used for some optimizations because on the first instantiation,
 * we can assume that no data was written before.
 */
export async function isRxDatabaseFirstTimeInstantiated(database) {
  var tokenDoc = await database.storageTokenDocument;
  return tokenDoc.data.instanceToken === database.token;
}

/**
 * For better performance some tasks run async
 * and are awaited later.
 * But we still have to ensure that there have been no errors
 * on database creation.
 */
export async function ensureNoStartupErrors(rxDatabase) {
  await rxDatabase.storageToken;
  if (rxDatabase.startupErrors[0]) {
    throw rxDatabase.startupErrors[0];
  }
}
//# sourceMappingURL=rx-database.js.map