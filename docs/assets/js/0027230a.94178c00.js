"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[8382],{2081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(4848),s=n(8453);const o={title:"LokiJS RxStorage",slug:"rx-storage-lokijs.html"},i="RxStorage LokiJS",r={id:"rx-storage-lokijs",title:"LokiJS RxStorage",description:"The LokiJS RxStorage is based on LokiJS which is an in-memory database that processes all data in memory and only saves to disc when the app is closed or an interval is reached. This makes it very fast but you have the possibility to lose semingly persisted writes when the JavaScript process ends before the persistence loop has been done.",source:"@site/docs/rx-storage-lokijs.md",sourceDirName:".",slug:"/rx-storage-lokijs.html",permalink:"/rx-storage-lokijs.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LokiJS RxStorage",slug:"rx-storage-lokijs.html"},sidebar:"tutorialSidebar",previous:{title:"FoundationDB RxStorage",permalink:"/rx-storage-foundationdb.html"},next:{title:"Remote RxStorage",permalink:"/rx-storage-remote.html"}},l={},d=[{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Usage",id:"usage",level:2},{value:"Adapters",id:"adapters",level:2},{value:"Multi-Tab support",id:"multi-tab-support",level:2},{value:"Autosave and autoload",id:"autosave-and-autoload",level:2},{value:"Known problems",id:"known-problems",level:2},{value:"Using the internal LokiJS database",id:"using-the-internal-lokijs-database",level:2},{value:"Disabling the non-premium console log",id:"disabling-the-non-premium-console-log",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"rxstorage-lokijs",children:"RxStorage LokiJS"}),"\n",(0,a.jsxs)(t.p,{children:["The LokiJS RxStorage is based on ",(0,a.jsx)(t.a,{href:"https://github.com/techfort/LokiJS",children:"LokiJS"})," which is an ",(0,a.jsx)(t.strong,{children:"in-memory"})," database that processes all data in memory and only saves to disc when the app is closed or an interval is reached. This makes it very fast but you have the possibility to lose semingly persisted writes when the JavaScript process ends before the persistence loop has been done."]}),"\n",(0,a.jsx)(t.admonition,{title:"LokiJS is deprecated",type:"warning",children:(0,a.jsxs)(t.p,{children:["The LokiJS project itself is no longer in development or maintained and therefore the lokijs RxStorage is ",(0,a.jsx)(t.strong,{children:"deprecated"}),". There are known bugs like having wrong query results of losing data. LokiJS bugs that occur outside of the NxDB layer will not be fixed and the LokiJS RxStorage might be removed in the next major NxDB version. Using LokiJS as storage is only recommended for proof-of-concepts or quick prototype apps. In production it is recommended to use another ",(0,a.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," instead. For browsers better use the ",(0,a.jsx)(t.a,{href:"/rx-storage-dexie.html",children:"Dexie.js"})," or ",(0,a.jsx)(t.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"})," storage. For fast lazy persistend in memory data (similar to how lokijs works) you can use the ",(0,a.jsx)(t.a,{href:"/rx-storage-memory-synced.html",children:"Memory Synced"})," storage."]})}),"\n",(0,a.jsx)(t.h3,{id:"pros",children:"Pros"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Queries can run faster because all data is processed in memory."}),"\n",(0,a.jsx)(t.li,{children:"It has a much faster initial load time because it loads all data from IndexedDB in a single request. But this is only true for small datasets. If much data must is stored, the initial load time can be higher than on other RxStorage implementations."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"cons",children:"Cons"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"It does not support attachments."}),"\n",(0,a.jsx)(t.li,{children:"Data can be lost when the JavaScript process is killed ungracefully like when the browser crashes or the power of the PC is terminated."}),"\n",(0,a.jsx)(t.li,{children:"All data must fit into the memory."}),"\n",(0,a.jsxs)(t.li,{children:["Slow initialisation time when used with ",(0,a.jsx)(t.code,{children:"multiInstance: true"})," because it has to await the leader election process."]}),"\n",(0,a.jsxs)(t.li,{children:["Slow initialisation time when really much data is stored inside of the database because it has to parse a big ",(0,a.jsx)(t.code,{children:"JSON"})," string."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'nxdb';\nimport {\n    getRxStorageLoki\n} from 'nxdb/plugins/storage-lokijs';\n\n// in the browser, we want to persist data in IndexedDB, so we use the indexeddb adapter.\nconst LokiIncrementalIndexedDBAdapter = require('lokijs/src/incremental-indexeddb-adapter');\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageLoki({\n        adapter: new LokiIncrementalIndexedDBAdapter(),\n        /* \n         * Do not set lokiJS persistence options like autoload and autosave,\n         * NxDB will pick proper defaults based on the given adapter\n         */\n    })\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"adapters",children:"Adapters"}),"\n",(0,a.jsxs)(t.p,{children:["LokiJS is based on adapters that determine where to store persistent data. For LokiJS there are adapters for IndexedDB, AWS S3, the NodeJS filesystem or NativeScript.\nFind more about the possible adapters at the ",(0,a.jsx)(t.a,{href:"https://github.com/techfort/LokiJS/blob/master/tutorials/Persistence%20Adapters.md",children:"LokiJS docs"}),". For react native there is also the ",(0,a.jsx)(t.a,{href:"https://github.com/jonnyreeves/loki-async-reference-adapter",children:"loki-async-reference-adapter"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"multi-tab-support",children:"Multi-Tab support"}),"\n",(0,a.jsxs)(t.p,{children:["When you use plain LokiJS, you cannot build an app that can be used in multiple browser tabs. The reason is that LokiJS loads data in bulk and then only regularly persists the in-memory state to disc. When opened in multiple tabs, it would happen that the LokiJS instances overwrite each other and data is lost.\nWith the NxDB LokiJS-plugin, this problem is fixed with the ",(0,a.jsx)(t.a,{href:"https://github.com/nxpkg/broadcast-channel#using-the-leaderelection",children:"LeaderElection"})," module. Between all open tabs, a leading tab is elected and only in this tab a database is created. All other tabs do not run queries against their own database, but instead call the leading tab to send and retrieve data. When the leading tab is closed, a new leader is elected that reopens the database and processes queries. You can disable this by setting ",(0,a.jsx)(t.code,{children:"multiInstance: false"})," when creating the ",(0,a.jsx)(t.code,{children:"RxDatabase"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"autosave-and-autoload",children:"Autosave and autoload"}),"\n",(0,a.jsxs)(t.p,{children:["When using plain LokiJS, you could set the ",(0,a.jsx)(t.code,{children:"autosave"})," option to ",(0,a.jsx)(t.code,{children:"true"})," to make sure that LokiJS persists the database state after each write into the persistence adapter. Same goes to ",(0,a.jsx)(t.code,{children:"autoload"})," which loads the persisted state on database creation.\nBut NxDB knows better when to persist the database state and when to load it, so it has its own autosave logic. This will ensure that running the persistence handler does not affect the performance of more important tasks. Instead NxDB will always wait until the database is idle and then runs the persistence handler.\nA load of the persisted state is done on database or collection creation and it is ensured that multiple load calls do not run in parallel and interfere with each other or with ",(0,a.jsx)(t.code,{children:"saveDatabase()"})," calls."]}),"\n",(0,a.jsx)(t.h2,{id:"known-problems",children:"Known problems"}),"\n",(0,a.jsxs)(t.p,{children:["When you bundle the LokiJS Plugin with webpack, you might get the error ",(0,a.jsx)(t.code,{children:'Cannot find module "fs"'}),". This is because LokiJS uses a ",(0,a.jsx)(t.code,{children:"require('fs')"})," statement that cannot work in the browser.\nYou can fix that by telling webpack to not resolve the ",(0,a.jsx)(t.code,{children:"fs"})," module with the following block in your webpack config:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// in your webpack.config.js\n{\n    /* ... */\n    resolve: {\n        fallback: {\n            fs: false\n        }\n    }\n    /* ... */\n}\n\n// Or if you do not have a webpack.config.js like you do with angular,\n// you might fix it by setting the browser field in the package.json\n{\n  /* ... */\n  "browser": {\n    "fs": false\n  }\n  /* ... */\n}\n\n'})}),"\n",(0,a.jsx)(t.h2,{id:"using-the-internal-lokijs-database",children:"Using the internal LokiJS database"}),"\n",(0,a.jsx)(t.p,{children:"For custom operations, you can access the internal LokiJS database.\nThis is dangerous because you might do changes that are not compatible with NxDB.\nOnly use this when there is no way to achieve your goals via the NxDB API."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"\nconst storageInstance = myRxCollection.storageInstance;\nconst localState = await storageInstance.internals.localState;\nlocalState.collection.insert({\n    key: 'foo',\n    value: 'bar',\n    _deleted: false,\n    _attachments: {},\n    _rev: '1-62080c42d471e3d2625e49dcca3b8e3e',\n    _meta: {\n        lwt: new Date().getTime()\n    }\n});\n\n// manually trigger the save queue because we did a write to the internal loki db. \nawait localState.databaseState.saveQueue.addWrite();\n"})}),"\n",(0,a.jsx)(t.h2,{id:"disabling-the-non-premium-console-log",children:"Disabling the non-premium console log"}),"\n",(0,a.jsxs)(t.p,{children:["We want to be transparent with our community, and you'll notice a console message when using the free Loki.js based RxStorage implementation. This message serves to inform you about the availability of faster storage solutions within our ",(0,a.jsx)(t.a,{href:"/premium",children:"\ud83d\udc51 Premium Plugins"}),". We understand that this might be a minor inconvenience, and we sincerely apologize for that. However, maintaining and improving NxDB requires substantial resources, and our premium users help us ensure its sustainability. If you find value in NxDB and wish to remove this message, we encourage you to explore our premium storage options, which are optimized for professional use and production environments. Thank you for your understanding and support."]}),"\n",(0,a.jsxs)(t.p,{children:["If you already have premium access and want to use the Dexie.js ",(0,a.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," without the log, you can call the ",(0,a.jsx)(t.code,{children:"setPremiumFlag()"})," function to disable the log."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { setPremiumFlag } from 'nxdb-premium/plugins/shared';\nsetPremiumFlag();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);