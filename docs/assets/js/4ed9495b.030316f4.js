"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[1199],{1787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=a(4848),i=a(8453);const n={title:"SQLite RxStorage \ud83d\udc51",slug:"rx-storage-sqlite.html"},r="SQLite RxStorage",o={id:"rx-storage-sqlite",title:"SQLite RxStorage \ud83d\udc51",description:"This RxStorage is based on SQLite and is made to work with Node.js, Electron, React Native and Capacitor or SQLite via webassembly in the browser. It can be used with different so called sqliteBasics adapters to account for the differences in the various SQLite bundles and libraries that exist.",source:"@site/docs/rx-storage-sqlite.md",sourceDirName:".",slug:"/rx-storage-sqlite.html",permalink:"/rx-storage-sqlite.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SQLite RxStorage \ud83d\udc51",slug:"rx-storage-sqlite.html"},sidebar:"tutorialSidebar",previous:{title:"IndexedDB RxStorage \ud83d\udc51",permalink:"/rx-storage-indexeddb.html"},next:{title:"Memory RxStorage",permalink:"/rx-storage-memory.html"}},c={},l=[{value:"Performance comparison with other storages",id:"performance-comparison-with-other-storages",level:2},{value:"Using the SQLite RxStorage",id:"using-the-sqlite-rxstorage",level:2},{value:"Usage with the <strong>sqlite3 npm package</strong>",id:"usage-with-the-sqlite3-npm-package",level:2},{value:"Usage with the <strong>node</strong> package",id:"usage-with-the-node-package",level:2},{value:"Usage with Webassembly in the Browser",id:"usage-with-webassembly-in-the-browser",level:2},{value:"Usage with <strong>React Native</strong>",id:"usage-with-react-native",level:2},{value:"Usage with <strong>SQLite Capacitor</strong>",id:"usage-with-sqlite-capacitor",level:2},{value:"Database Connection",id:"database-connection",level:2},{value:"Known Problems of SQLite in JavaScript apps",id:"known-problems-of-sqlite-in-javascript-apps",level:2},{value:"Related",id:"related",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sqlite-rxstorage",children:"SQLite RxStorage"}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," is based on ",(0,s.jsx)(t.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})," and is made to work with ",(0,s.jsx)(t.strong,{children:"Node.js"}),", ",(0,s.jsx)(t.a,{href:"/electron-database.html",children:"Electron"}),", ",(0,s.jsx)(t.a,{href:"/react-native-database.html",children:"React Native"})," and ",(0,s.jsx)(t.a,{href:"/capacitor-database.html",children:"Capacitor"})," or SQLite via webassembly in the browser. It can be used with different so called ",(0,s.jsx)(t.code,{children:"sqliteBasics"})," adapters to account for the differences in the various SQLite bundles and libraries that exist."]}),"\n",(0,s.jsx)(t.h2,{id:"performance-comparison-with-other-storages",children:"Performance comparison with other storages"}),"\n",(0,s.jsxs)(t.p,{children:["The SQLite storage is a bit slower compared to other Node.js based storages like the ",(0,s.jsx)(t.a,{href:"/rx-storage-filesystem-node.html",children:"Filesystem Storage"})," because wrapping SQLite has a bit of overhead and sending data from the JavaScript process to SQLite and backwards increases the latency. However for most hybrid apps the SQLite storage is the best option because it can leverage the SQLite version that comes already installed on the smartphones OS (iOS and android). Also for desktop electron apps it can be a viable solution because it is easy to ship SQLite together inside of the electron bundle."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/rx-storage-performance-node.png",alt:"SQLite performance - Node.js",width:"700"})}),"\n",(0,s.jsx)(t.h2,{id:"using-the-sqlite-rxstorage",children:"Using the SQLite RxStorage"}),"\n",(0,s.jsxs)(t.p,{children:["To use the SQLite storage you have to import ",(0,s.jsx)(t.code,{children:"getRxStorageSQLite"})," from the ",(0,s.jsx)(t.a,{href:"/premium",children:"NxDB Premium \ud83d\udc51"})," package and then add the correct ",(0,s.jsx)(t.code,{children:"sqliteBasics"})," adapter depending on which sqlite module you want to use. This can then be used as storage when creating the ",(0,s.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),". In the following you can see some examples for some of the most common SQLite packages."]}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-the-sqlite3-npm-package",children:["Usage with the ",(0,s.jsx)(t.strong,{children:"sqlite3 npm package"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'nxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNode\n} from 'nxdb-premium/plugins/storage-sqlite';\n\n/**\n * In Node.js, we use the SQLite database\n * from the 'sqlite' npm module.\n * @link https://www.npmjs.com/package/sqlite3\n */\nimport sqlite3 from 'sqlite3';\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        /**\n         * Different runtimes have different interfaces to SQLite.\n         * For example in node.js we have a callback API,\n         * while in capacitor sqlite we have Promises.\n         * So we need a helper object that is capable of doing the basic\n         * sqlite operations.\n         */\n        sqliteBasics: getSQLiteBasicsNode(sqlite3)\n    })\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-the-node-package",children:["Usage with the ",(0,s.jsxs)(t.strong,{children:["node",":sqlite"]})," package"]}),"\n",(0,s.jsxs)(t.p,{children:['With Node.js version 22 and newer, you can use the "native" ',(0,s.jsx)(t.a,{href:"https://nodejs.org/api/sqlite.html",children:"sqlite module"})," that comes shipped with Node.js."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'nxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNodeNative\n} from 'nxdb-premium/plugins/storage-sqlite';\nimport sqlite from 'node:sqlite';\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsNodeNative(sqlite.DatabaseSync)\n    })\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage-with-webassembly-in-the-browser",children:"Usage with Webassembly in the Browser"}),"\n",(0,s.jsxs)(t.p,{children:["In the browser you can use the ",(0,s.jsx)(t.a,{href:"https://github.com/rhashimoto/wa-sqlite",children:"wa-sqlite"})," package to run sQLite in Webassembly. The wa-sqlite module also allows to use persistence with IndexedDB or OPFS. Notice that in general SQLite via Webassembly is slower compared to other storages like ",(0,s.jsx)(t.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"})," or ",(0,s.jsx)(t.a,{href:"/rx-storage-opfs.html",children:"OPFS"})," because sending data from the main thread to wasm and backwards is slow in the browser. Have a look the ",(0,s.jsx)(t.a,{href:"/rx-storage-performance.html",children:"performance comparison"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'nxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsWasm\n} from 'nxdb-premium/plugins/storage-sqlite';\n\n/**\n * In the Browser, we use the SQLite database\n * from the 'wa-sqlite' npm module. This contains the SQLite library\n * compiled to Webassembly\n * @link https://www.npmjs.com/package/wa-sqlite\n */\nimport SQLiteESMFactory from 'wa-sqlite/dist/wa-sqlite-async.mjs';\nimport SQLite from 'wa-sqlite';\nconst sqliteModule = await SQLiteESMFactory();\nconst sqlite3 = SQLite.Factory(module);\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsWasm(sqlite3)\n    })\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-react-native",children:["Usage with ",(0,s.jsx)(t.strong,{children:"React Native"})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-quick-sqlite",children:"react-native-quick-sqlite npm module"})]}),"\n",(0,s.jsxs)(t.li,{children:["Import ",(0,s.jsx)(t.code,{children:"getSQLiteBasicsQuickSQLite"})," from the SQLite plugin and use it to create a ",(0,s.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'nxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsQuickSQLite\n} from 'nxdb-premium/plugins/storage-sqlite';\nimport { open } from 'react-native-quick-sqlite';\n\n// create database\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    multiInstance: false, // <- Set multiInstance to false when using NxDB in React Native\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsQuickSQLite(open)\n    })\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"react-native-quick-sqlite"})," does not work for you, as alternative you can use the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-sqlite-2",children:"react-native-sqlite-2"})," library instead:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    getRxStorageSQLite,\n    getSQLiteBasicsWebSQL\n} from 'nxdb-premium/plugins/storage-sqlite';\nimport SQLite from 'react-native-sqlite-2';\nconst storage = getRxStorageSQLite({\n  sqliteBasics: getSQLiteBasicsWebSQL(SQLite.openDatabase)\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-sqlite-capacitor",children:["Usage with ",(0,s.jsx)(t.strong,{children:"SQLite Capacitor"})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://github.com/capacitor-community/sqlite",children:"sqlite capacitor npm module"})]}),"\n",(0,s.jsx)(t.li,{children:"Add the iOS database location to your capacitor config"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "plugins": {\n        "CapacitorSQLite": {\n            "iosDatabaseLocation": "Library/CapacitorDatabase"\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Use the function ",(0,s.jsx)(t.code,{children:"getSQLiteBasicsCapacitor"})," to get the capacitor sqlite wrapper."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'nxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsCapacitor\n} from 'nxdb-premium/plugins/storage-sqlite';\n\n/**\n * Import SQLite from the capacitor plugin.\n */\nimport {\n    CapacitorSQLite,\n    SQLiteConnection\n} from '@capacitor-community/sqlite';\nimport { Capacitor } from '@capacitor/core';\n\nconst sqlite = new SQLiteConnection(CapacitorSQLite);\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        /**\n         * Different runtimes have different interfaces to SQLite.\n         * For example in node.js we have a callback API,\n         * while in capacitor sqlite we have Promises.\n         * So we need a helper object that is capable of doing the basic\n         * sqlite operations.\n         */\n        sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor)\n    })\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"database-connection",children:"Database Connection"}),"\n",(0,s.jsxs)(t.p,{children:["If you need to access the database connection for any reason you can use ",(0,s.jsx)(t.code,{children:"getDatabaseConnection"})," to do so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { getDatabaseConnection } from 'nxdb-premium/plugins/storage-sqlite'\n"})}),"\n",(0,s.jsx)(t.p,{children:"It has the following signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"getDatabaseConnection(\n    sqliteBasics: SQLiteBasics<any>,\n    databaseName: string\n): Promise<SQLiteDatabaseClass>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"known-problems-of-sqlite-in-javascript-apps",children:"Known Problems of SQLite in JavaScript apps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Some JavaScript runtimes do not contain a ",(0,s.jsx)(t.code,{children:"Buffer"})," API which is used by SQLite to store binary attachments data as ",(0,s.jsx)(t.code,{children:"BLOB"}),". You can set ",(0,s.jsx)(t.code,{children:"storeAttachmentsAsBase64String: true"})," if you want to store the attachments data as base64 string instead. This increases the database size but makes it work even without having a ",(0,s.jsx)(t.code,{children:"Buffer"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The SQlite RxStorage works on SQLite libraries that use SQLite in version ",(0,s.jsx)(t.code,{children:"3.38.0 (2022-02-22)"})," or newer, because it uses the ",(0,s.jsx)(t.a,{href:"https://www.sqlite.org/json1.html",children:"SQLite JSON"})," methods like ",(0,s.jsx)(t.code,{children:"JSON_EXTRACT"}),". If you get an error like ",(0,s.jsx)(t.code,{children:"[Error: no such function: JSON_EXTRACT (code 1 SQLITE_ERROR[1])"}),", you might have a too old version of SQLite."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/expo-sqlite",children:"expo-sqlite"})," cannot be used on android (but it works on iOS) because it uses an ",(0,s.jsx)(t.a,{href:"https://expo.canny.io/feature-requests/p/expo-sqlite-ship-newer-sqlite3-version-on-android",children:"outdated SQLite version"}),". This is fixed if you use Expo SDK version 50 or never."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To debug all SQL operations, you can pass a log function to ",(0,s.jsx)(t.code,{children:"getRxStorageSQLite()"})," like this:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const storage = getRxStorageSQLite({\n    sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor),\n    // pass log function\n    log: console.log.bind(console)\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/react-native-database.html",children:"React Native Databases"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var s=a(6540);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);