import { createLokiStorageInstance } from "./rx-storage-instance-loki.js";
import { RX_STORAGE_NAME_LOKIJS } from "./lokijs-helper.js";
import { ensureRxStorageInstanceParamsAreCorrect } from "../../rx-storage-helper.js";
import { NXDB_VERSION } from "../utils/utils-nxdb-version.js";
export var RxStorageLoki = /*#__PURE__*/function () {
  /**
   * Create one leader elector by db name.
   * This is done inside of the storage, not globally
   * to make it easier to test multi-tab behavior.
   */

  function RxStorageLoki(databaseSettings) {
    this.name = RX_STORAGE_NAME_LOKIJS;
    this.nxdbVersion = NXDB_VERSION;
    this.leaderElectorByLokiDbName = new Map();
    this.databaseSettings = databaseSettings;
  }
  var _proto = RxStorageLoki.prototype;
  _proto.createStorageInstance = function createStorageInstance(params) {
    ensureRxStorageInstanceParamsAreCorrect(params);
    return createLokiStorageInstance(this, params, this.databaseSettings);
  };
  return RxStorageLoki;
}();

/**
 * @deprecated The lokijs RxStorage is deprecated, more info at:
 * @link https://nxdb.khulnasoft.com/rx-storage-lokijs.html
 */
export function getRxStorageLoki(databaseSettings = {}) {
  var storage = new RxStorageLoki(databaseSettings);
  return storage;
}
//# sourceMappingURL=rx-storage-lokijs.js.map