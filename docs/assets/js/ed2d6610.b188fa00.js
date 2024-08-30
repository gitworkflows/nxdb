"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[3469],{9222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(4848),r=t(8453);const a={title:"NxDB 12.0.0",slug:"12.0.0.html",description:"NxDB Major Release 12.0.0"},o="NxDB 12.0.0",s={id:"releases/12.0.0",title:"NxDB 12.0.0",description:"NxDB Major Release 12.0.0",source:"@site/docs/releases/12.0.0.md",sourceDirName:"releases",slug:"/releases/12.0.0.html",permalink:"/releases/12.0.0.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NxDB 12.0.0",slug:"12.0.0.html",description:"NxDB Major Release 12.0.0"},sidebar:"tutorialSidebar",previous:{title:"NxDB 13.0.0",permalink:"/releases/13.0.0.html"},next:{title:"NxDB 11.0.0",permalink:"/releases/11.0.0.html"}},d={},l=[{value:"Removed the <code>core</code> plugin",id:"removed-the-core-plugin",level:2},{value:"Unified the replication primitives and the GraphQL replication plugin",id:"unified-the-replication-primitives-and-the-graphql-replication-plugin",level:2},{value:"Added the cleanup plugin",id:"added-the-cleanup-plugin",level:2},{value:"Allow to set a specific index",id:"allow-to-set-a-specific-index",level:2},{value:"Enforce primaryKey in the index",id:"enforce-primarykey-in-the-index",level:2},{value:"Fields that are used in indexes need some meta attributes",id:"fields-that-are-used-in-indexes-need-some-meta-attributes",level:2},{value:"Introduce <code>_meta</code> field",id:"introduce-_meta-field",level:2},{value:"Removed RxStorage RxKeyObjectInstance",id:"removed-rxstorage-rxkeyobjectinstance",level:2},{value:"Refactor plugin hooks",id:"refactor-plugin-hooks",level:2},{value:"Local documents must be activated per RxDatabase/RxCollection",id:"local-documents-must-be-activated-per-rxdatabaserxcollection",level:2},{value:"Added Memory RxStorage",id:"added-memory-rxstorage",level:2},{value:"NxDB Premium \ud83d\udc51",id:"nxdb-premium-",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"You can help!",id:"you-can-help",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"nxdb-1200",children:[(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/",children:"NxDB"})," 12.0.0"]}),"\n",(0,i.jsx)(n.p,{children:"For the last few months, I worked hard on the new NxDB version 12 release. I mostly focused on performance related features and refactored much of the code."}),"\n",(0,i.jsxs)(n.h2,{id:"removed-the-core-plugin",children:["Removed the ",(0,i.jsx)(n.code,{children:"core"})," plugin"]}),"\n",(0,i.jsxs)(n.p,{children:["In the past, NxDB exported all bundled plugins when doing ",(0,i.jsx)(n.code,{children:"import from 'nxdb';"}),".\nThis increased the bundle size, so optionally people could ",(0,i.jsx)(n.code,{children:"import from 'nxdb/plugins/core';"})," to create a custom build that only contains the plugin that they really need.\nBut very often this lead to accidental imports of ",(0,i.jsx)(n.code,{children:"'nxdb'"}),". For example, when the code editor auto imported methods.\nSo now, the default ",(0,i.jsx)(n.code,{children:"import from 'nxdb';"})," only exports NxDB core. Every plugin must be imported afterwards if needed."]}),"\n",(0,i.jsx)(n.h2,{id:"unified-the-replication-primitives-and-the-graphql-replication-plugin",children:"Unified the replication primitives and the GraphQL replication plugin"}),"\n",(0,i.jsx)(n.p,{children:"Most of the GraphQL replication code has been replaced by using the replication primitives plugin internally.\nThis means many bugs and undefined behavior that was already fixed in the replication primitives, are now also fixed in the GraphQL replication."}),"\n",(0,i.jsxs)(n.p,{children:["Also, the GraphQL replication now runs ",(0,i.jsx)(n.code,{children:"push"})," in bulk. This means you either have to update your backend to accept bulk mutations, or set ",(0,i.jsx)(n.code,{children:"push.batchSize: 1"})," and transform the array into a single document inside ",(0,i.jsx)(n.code,{children:"push.queryBuilder()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"added-the-cleanup-plugin",children:"Added the cleanup plugin"}),"\n",(0,i.jsx)(n.p,{children:"To make replication work, and for other reasons, NxDB has to keep deleted documents in storage.\nThis ensures that when a client is offline, the deletion state is still known and can be replicated with the backend when the client goes online again."}),"\n",(0,i.jsxs)(n.p,{children:["Keeping too many deleted documents in the storage can slow down queries or fill up too much disk space.\nWith the ",(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/cleanup.html",children:"cleanup plugin"}),", NxDB will run cleanup cycles that clean up deleted documents when it can be done safely."]}),"\n",(0,i.jsx)(n.h2,{id:"allow-to-set-a-specific-index",children:"Allow to set a specific index"}),"\n",(0,i.jsx)(n.p,{children:"By default, the query will be sent to RxStorage, where a query planner will determine which one of the available indexes must be used.\nBut the query planner cannot know everything and sometimes will not pick the most optimal index.\nTo improve query performance, you can specify which index must be used, when running the query."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const queryResults = await myCollection\n    .find({\n      selector: {\n        age: {\n          $gt: 18\n        },\n        gender: {\n          $eq: 'm'\n        }\n      },\n      /**\n       * Because the developer knows that 50% of the documents are 'male',\n       * but only 20% are below age 18,\n       * it makes sense to enforce using the ['gender', 'age'] index to improve performance.\n       * This could not be known by the query planner which might have chosen ['age', 'gender'] instead.\n       */\n      index: ['gender', 'age']\n    }).exec();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enforce-primarykey-in-the-index",children:"Enforce primaryKey in the index"}),"\n",(0,i.jsxs)(n.p,{children:["For various performance optimizations, like the ",(0,i.jsx)(n.a,{href:"https://github.com/nxpkg/event-reduce",children:"EventReduce"})," algorithm, NxDB needs a ",(0,i.jsx)(n.strong,{children:"deterministic sort order"})," for all query results.\nTo ensure a deterministic sorting, NxDB now automatically adds the primary key as last sort attribute to every query, if it is not there already. This ensures that all documents that have the same attributes on all query relevant fields, still can be sorted in a deterministic way, not depending on which was written first to the database."]}),"\n",(0,i.jsxs)(n.p,{children:["In the past, this often lead to slow queries, because indexes where not constructed with that in mind.\nNow NxDB will add the ",(0,i.jsx)(n.code,{children:"primaryKey"})," to all indexes that do not contain it already.\nIf you have any collection with a custom index set, you need to run a ",(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/migration-schema.html",children:"migration"})," when updating to NxDB version ",(0,i.jsx)(n.code,{children:"12.0.0"})," so that NxDB can rebuild the indexes."]}),"\n",(0,i.jsx)(n.h2,{id:"fields-that-are-used-in-indexes-need-some-meta-attributes",children:"Fields that are used in indexes need some meta attributes"}),"\n",(0,i.jsxs)(n.p,{children:["When using a schema with indexes, depending on the field type, you must have set some meta attributes like ",(0,i.jsx)(n.code,{children:"maxLength"})," or ",(0,i.jsx)(n.code,{children:"minimum"}),". This is required so that NxDB\nis able to know the maximum string representation length of a field, which is needed to craft custom indexes on several ",(0,i.jsx)(n.code,{children:"RxStorage"})," implementations."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const schemaWithIndexes = {\n  version: 0,\n  primaryKey: 'id',\n  type: 'object',\n  properties: {\n      id: {\n          type: 'string',\n          maxLength: 100 // <- the primary key must set `maxLength`\n      },\n      firstName: {\n          type: 'string',\n          maxLength: 100 // <- string-fields that are used as an index, must set `maxLength`.\n      },\n      active: {\n          type: 'boolean'\n      },\n      balance: {\n          type: 'number',\n\n          // number fields that are used in an index, must set `minimum`, `maximum` and `multipleOf`\n          minimum: 0,\n          maximum: 100000,\n          multipleOf: '0.01'\n      }\n  },\n  required: [\n      'active' // <- boolean fields that are used in an index, must be required. \n  ],\n  indexes: [\n    'firstName',\n    ['active', 'firstName']\n  ]\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"introduce-_meta-field",children:["Introduce ",(0,i.jsx)(n.code,{children:"_meta"})," field"]}),"\n",(0,i.jsxs)(n.p,{children:["In the past, NxDB used a hacky way to mark documents as being from the remote instance during replication.\nThis is needed to ensure that pulled documents are not sent to the backend again.\nNxDB crafted a specific revision string and stored the data with that string.\nThis meant that it was not possible to replicate with multiple endpoints at the same time.\nFrom now on, all document data is stored with an ",(0,i.jsx)(n.code,{children:"_meta"})," field that can contain various flags and other values.\nThis makes it easier for plugins to remember stuff that belongs to the document."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"In the future"}),", the other meta fields like ",(0,i.jsx)(n.code,{children:"_rev"}),", ",(0,i.jsx)(n.code,{children:"_deleted"})," and ",(0,i.jsx)(n.code,{children:"_attachments"})," will be moved from the root level\nto the ",(0,i.jsx)(n.code,{children:"_meta"})," field. This is ",(0,i.jsx)(n.strong,{children:"not"})," done in release ",(0,i.jsx)(n.code,{children:"12.0.0"})," to ensure that there is a migration path."]}),"\n",(0,i.jsx)(n.h2,{id:"removed-rxstorage-rxkeyobjectinstance",children:"Removed RxStorage RxKeyObjectInstance"}),"\n",(0,i.jsxs)(n.p,{children:["In the past, we stored local documents and internal data in a ",(0,i.jsx)(n.code,{children:"RxStorageKeyObjectInstance"})," of the ",(0,i.jsx)(n.code,{children:"RxStorage"})," interface.\nIn PouchDB, this has a ",(0,i.jsx)(n.a,{href:"https://pouchdb.com/guides/local-documents.html#advantages-of-local%E2%80%93docs",children:"slight performance"})," improvement compared to storing that data in 'normal' documents because it does not have to handle the revision tree.\nBut this improved performance is only possible because normal document handling on PouchDB is so slow.\nFor every other RxStorage implementation, it does not really mather if documents are stored in a query-able way or not. Therefore, the whole ",(0,i.jsx)(n.code,{children:"RxStorageKeyObjectInstance"})," is removed. Instead, NxDB now stores local documents and internal data in normal storage instances. This removes complexity and makes things easier in the future. For example, we could now migrate local documents or query them in plugins."]}),"\n",(0,i.jsx)(n.h2,{id:"refactor-plugin-hooks",children:"Refactor plugin hooks"}),"\n",(0,i.jsxs)(n.p,{children:["In the past, an ",(0,i.jsx)(n.code,{children:"RxPlugin"})," could add plugins hooks which where always added as last.\nThis meant that some plugins depended on having the correct order when calling ",(0,i.jsx)(n.code,{children:"addRxPlugin()"}),".\nNow each plugin hook can be either defined as ",(0,i.jsx)(n.code,{children:"before"})," or ",(0,i.jsx)(n.code,{children:"after"})," to specify at which position of the current hooks\nthe new hook must be added."]}),"\n",(0,i.jsx)(n.h2,{id:"local-documents-must-be-activated-per-rxdatabaserxcollection",children:"Local documents must be activated per RxDatabase/RxCollection"}),"\n",(0,i.jsxs)(n.p,{children:["For better performance, the local document plugin does not create a storage for every database or collection that is created.\nInstead, you have to set ",(0,i.jsx)(n.code,{children:"localDocuments: true"})," when you want to store local documents in the instance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// activate local documents on a RxDatabase\nconst myDatabase = await createRxDatabase({\n    name: 'mydatabase',\n    storage: getRxStoragePouch('memory'),\n    localDocuments: true // <- activate this to store local documents in the database\n});\n\nmyDatabase.addCollections({\n  messages: {\n    schema: messageSchema,\n    localDocuments: true // <- activate this to store local documents in the collection\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"added-memory-rxstorage",children:"Added Memory RxStorage"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage-memory.html",children:"Memory RxStorage"})," is based on plain in-memory arrays and objects. It can be used in all environments and is made for performance."]}),"\n",(0,i.jsx)(n.h2,{id:"nxdb-premium-",children:"NxDB Premium \ud83d\udc51"}),"\n",(0,i.jsxs)(n.p,{children:["You can now purchase access to additional NxDB plugins that are part of the ",(0,i.jsx)(n.a,{href:"/premium",children:"NxDB Premium \ud83d\udc51"})," package."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["If you have ",(0,i.jsx)(n.a,{href:"https://github.com/sponsors/nxpkg",children:"sponsored"})," NxDB in the past (before the April 2022), you can get free lifetime access to NxDB Premium \ud83d\udc51 by writing me via ",(0,i.jsx)(n.a,{href:"https://twitter.com/nxdbjs",children:"Twitter"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage-indexeddb.html",children:"RxStorage IndexedDB"})," a really fast ",(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage.html",children:"RxStorage"})," implementation based on ",(0,i.jsx)(n.strong,{children:"IndexedDB"}),". Made to be used in browsers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage-sqlite.html",children:"RxStorage SQLite"})," a really fast ",(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage.html",children:"RxStorage"})," implementation based on ",(0,i.jsx)(n.strong,{children:"SQLite"}),". Made to be used on ",(0,i.jsx)(n.strong,{children:"Node.js"}),", ",(0,i.jsx)(n.strong,{children:"Electron"}),", ",(0,i.jsx)(n.strong,{children:"React Native"}),", ",(0,i.jsx)(n.strong,{children:"Cordova"})," or ",(0,i.jsx)(n.strong,{children:"Capacitor"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage-sharding.html",children:"RxStorage Sharding"})," a wrapper around any other ",(0,i.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/rx-storage.html",children:"RxStorage"})," that improves performance by applying the sharding technique."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"migrateNxDBV11ToV12"})," A plugin that migrates data from any NxDB v11 storage to a new NxDB v12 database. Use this when you upgrade from NxDB 11->12 and you have to keep your database state."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Dexie.js RxStorage is no longer in beta mode."}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"RxDocument().toMutableJSON()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"RxCollection().bulkUpsert()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added optional ",(0,i.jsx)(n.code,{children:"init()"})," function to ",(0,i.jsx)(n.code,{children:"RxPlugin"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"dev-mode: Add check to ensure all top-level fields in a query are defined in the schema."}),"\n",(0,i.jsxs)(n.li,{children:["Support for array field based indexes like ",(0,i.jsx)(n.code,{children:"data.[].subfield"})," was removed, as it anyway never really worked."]}),"\n",(0,i.jsx)(n.li,{children:"Refactored the usage of RxCollection.storageInstance to ensure all hooks run properly."}),"\n",(0,i.jsx)(n.li,{children:"Refactored the encryption plugin so no more plugin specific code is in the NxDB core."}),"\n",(0,i.jsx)(n.li,{children:"Removed the encrypted export from the json-import-export plugin. This was barely used and made everything more complex. All exports are now non-encrypted. If you need them encrypted, you can still run by encryption after the export is done."}),"\n",(0,i.jsxs)(n.li,{children:["RxPlugin hooks now can be defined as running ",(0,i.jsx)(n.code,{children:"before"})," or ",(0,i.jsx)(n.code,{children:"after"})," other plugin hooks."]}),"\n",(0,i.jsxs)(n.li,{children:["Attachments are now internally handled as string instead of ",(0,i.jsx)(n.code,{children:"Blob"})," or ",(0,i.jsx)(n.code,{children:"Buffer"})]}),"\n",(0,i.jsx)(n.li,{children:"Fix (replication primitives) only drop pulled documents when a relevant document was changed locally."}),"\n",(0,i.jsxs)(n.li,{children:["Fix dexie.js was not able to query over an index when ",(0,i.jsx)(n.code,{children:"keyCompression: true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Changes to ",(0,i.jsx)(n.code,{children:"RxStorageInterface"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RxStorageInstance"})," must have the ",(0,i.jsx)(n.code,{children:"RxStorage"})," in the ",(0,i.jsx)(n.code,{children:"storage"})," property."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"_deleted"})," field is now required for each data interaction with ",(0,i.jsx)(n.code,{children:"RxStorage"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Removed ",(0,i.jsx)(n.code,{children:"RxStorageInstance.getChangedDocuments()"})," and added ",(0,i.jsx)(n.code,{children:"RxStorageInstance.getChangedDocumentsSince()"})," for better performance."]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"doesBroadcastChangestream()"})," to ",(0,i.jsx)(n.code,{children:"RxStorageStatics"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"withDeleted"})," parameter to ",(0,i.jsx)(n.code,{children:"RxStorageKeyObjectInstance.findLocalDocumentsById()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added internal ",(0,i.jsx)(n.code,{children:"_meta"})," property to stored document data that contains internal document related data like last-write-time and replication checkpoints."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"you-can-help",children:"You can help!"}),"\n",(0,i.jsxs)(n.p,{children:["There are many things that can be done by ",(0,i.jsx)(n.strong,{children:"you"})," to improve NxDB:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/blob/master/orga/BACKLOG.md",children:"BACKLOG"})," for features that would be great to have."]}),"\n",(0,i.jsxs)(n.li,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/blob/master/orga/before-next-major.md",children:"breaking backlog"})," for breaking changes that must be implemented in the future but where I did not have the time yet."]}),"\n",(0,i.jsxs)(n.li,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/search?q=TODO",children:"TODOs"})," in the code. There are many small improvements that can be done for performance and build size."]}),"\n",(0,i.jsx)(n.li,{children:"Review the code and add tests. I am only a single human with a laptop. My code is not perfect and much small improvements can be done when people review the code and help me to clarify undefined behaviors."}),"\n",(0,i.jsx)(n.li,{children:"Improve the documentation. In the last user survey, many users told me that the documentation is not good enough. But I reviewed the docs and could not find clear flaws. The problem is that I am way too deep into NxDB so that I am not able to understand which documentation a newcomer to the project needs. Likely I assume too much knowledge or focus writing about the wrong parts."}),"\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples",children:"example projects"})," many of them are outdated and need updates."]}),"\n",(0,i.jsxs)(n.li,{children:["Help the next ",(0,i.jsx)(n.a,{href:"https://github.com/pouchdb/pouchdb/issues/8408",children:"PouchDB release"})," to improve NxDBs performance."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);