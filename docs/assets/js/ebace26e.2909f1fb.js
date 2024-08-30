"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[4028],{7016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=t(4848),s=t(8453);const a={title:"NxDB 10.0.0",slug:"10.0.0.html",description:"NxDB Major Release 10.0.0"},r="10.0.0",i={id:"releases/10.0.0",title:"NxDB 10.0.0",description:"NxDB Major Release 10.0.0",source:"@site/docs/releases/10.0.0.md",sourceDirName:"releases",slug:"/releases/10.0.0.html",permalink:"/releases/10.0.0.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NxDB 10.0.0",slug:"10.0.0.html",description:"NxDB Major Release 10.0.0"},sidebar:"tutorialSidebar",previous:{title:"NxDB 11.0.0",permalink:"/releases/11.0.0.html"},next:{title:"NxDB 9.0.0",permalink:"/releases/9.0.0.html"}},d={},h=[{value:"The main thing first",id:"the-main-thing-first",level:2},{value:"Other breaking changes",id:"other-breaking-changes",level:2},{value:"Primary key is required",id:"primary-key-is-required",level:3},{value:"Attachment data must be Blob or Buffer",id:"attachment-data-must-be-blob-or-buffer",level:3},{value:"Outgoing data is now readonly and deep-frozen",id:"outgoing-data-is-now-readonly-and-deep-frozen",level:3},{value:"The in-memory plugin does no longer work.",id:"the-in-memory-plugin-does-no-longer-work",level:3},{value:"What else is a breaking change?",id:"what-else-is-a-breaking-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Composite primary key",id:"composite-primary-key",level:3},{value:"For the future",id:"for-the-future",level:2},{value:"You can help!",id:"you-can-help",level:2},{value:"Discuss!",id:"discuss",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"1000",children:"10.0.0"}),"\n",(0,o.jsxs)(n.p,{children:["One year after version ",(0,o.jsx)(n.code,{children:"9.0.0"})," we now have NxDB version ",(0,o.jsx)(n.code,{children:"10.0.0"}),".\nThe main goal of version 10 was to change things that make NxDB ready for the future."]}),"\n",(0,o.jsx)(n.p,{children:"Notice that I use major releases to bundle stuff that breaks the NxDB usage in your project, not to add new features."}),"\n",(0,o.jsx)(n.h2,{id:"the-main-thing-first",children:"The main thing first"}),"\n",(0,o.jsx)(n.p,{children:"In the past, NxDB was build around Pouchdb. Before I started making NxDB I tried to solve the problems of my current project with other existing databases out there. I evaluated all of them and then started using Pouchdb and added many features via plugin. Then I realised it will be easier to create a separate project that wraps around Pouchdb, that was NxDB. Back then pouchdb was the most major browser database out there and it was well maintained and had a big community.\nBut in the last 5 years, things have changed. A big part of the NxDB users do not use couchdb in the backend and do not need the couchdb replication.\nTherefore they do not really need the overhead with revision handling that slows down the performance of pouchdb. Also there where many other problems with using pouchdb. It is not actively developed, many bugs are not fixed and no new features get added. Also there are many unsolved problems like how to finally delete document data or how to replicate more then 6 databases at the same time, how to use replication without attachments data, and so on..."}),"\n",(0,o.jsxs)(n.p,{children:["So for this release, I abstracted all parts that we use from pouchdb into the ",(0,o.jsx)(n.code,{children:"RxStorage"})," interface. NxDB works on top of any implementation of the ",(0,o.jsx)(n.code,{children:"RxStorage"})," interface. This means it is now possible to use NxDB together with other underlying storages like SQLite, PostgreSQL, Minimongo, MongoDB, and so on, as long as someone writes the ",(0,o.jsx)(n.code,{children:"RxStorage"})," class for it."]}),"\n",(0,o.jsxs)(n.p,{children:["This means, to create a ",(0,o.jsx)(n.code,{children:"RxDatabase"})," you have to pass the storage class instead of pouchdb specific settings:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"\n// import pouchdb specific stuff and add pouchdb adapters\nimport {\n    addPouchPlugin,\n    getRxStoragePouch\n} from 'nxdb/plugins/pouchdb';\n\n// IMPORTANT: Do not use addRxPlugin to add pouchdb adapter, instead use addPouchPlugin\naddPouchPlugin(require('pouchdb-adapter-memory'));\n\nimport {\n    addRxPlugin,\n    createRxDatabase,\n    randomCouchString,\n} from 'nxdb/plugins/core';\n\n// create the database with the storage creator.\nconst db = await createRxDatabase({\n    name: 'mydatabase',\n    storage: getRxStoragePouch('memory'),\n});\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To access the internal ",(0,o.jsx)(n.code,{children:"pouch"})," instance of a collection, you have to go over the ",(0,o.jsx)(n.code,{children:"storageInstance"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const pouch = myRxCollection.storageInstance.internals.pouch;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"other-breaking-changes",children:"Other breaking changes"}),"\n",(0,o.jsx)(n.h3,{id:"primary-key-is-required",children:"Primary key is required"}),"\n",(0,o.jsxs)(n.p,{children:["In the past, using a primary key was optional. When no primary key was defined, NxDB filled up the ",(0,o.jsx)(n.code,{children:"_id"})," field with an uuid-like string which was then used as primary. When I researched on github how people use NxDB, I found out that many use a secondary index for what should be the primary key.\nAlso having the primary key optional, caused much confusing when using NxDB with typescript."]}),"\n",(0,o.jsxs)(n.p,{children:["So now the primary key MUST be set when creating a schema for NxDB.\nAlso the primary key is defined with the ",(0,o.jsx)(n.code,{children:"primaryKey"})," property at the top level of the schema. This ensures that typescript will complain if no ",(0,o.jsx)(n.code,{children:"primaryKey"})," is defined."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"\n// when using the type `RxJsonSchema<DocType>` the `DocType` is now required\nconst mySchema: RxJsonSchema<MyDocumentData> = {\n    version: 0,\n    primaryKey: 'passportId',\n    type: 'object',\n    properties: {\n        passportId: {\n            type: 'string'\n        }\n    },\n    // primaryKey is always required\n    required: ['passportId']\n}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"attachment-data-must-be-blob-or-buffer",children:"Attachment data must be Blob or Buffer"}),"\n",(0,o.jsxs)(n.p,{children:["In the past, an ",(0,o.jsx)(n.code,{children:"RxAttachment"})," could be stored with ",(0,o.jsx)(n.code,{children:"Blob"}),", ",(0,o.jsx)(n.code,{children:"Buffer"})," and ",(0,o.jsx)(n.code,{children:"string"})," data. If a ",(0,o.jsx)(n.code,{children:"string"})," was passed, pouchdb internally transformed the data to a ",(0,o.jsx)(n.code,{children:"Blob"})," or ",(0,o.jsx)(n.code,{children:"Buffer"}),", depending on in which environment it is running.\nThis behavior caused much trouble and weird edge cases because of how the data is transformed from and to ",(0,o.jsx)(n.code,{children:"string"}),".\nSo now you can only store ",(0,o.jsx)(n.code,{children:"Blob"})," or ",(0,o.jsx)(n.code,{children:"Buffer"})," as attachment data. ",(0,o.jsx)(n.code,{children:"string"})," is no longer allowed. You can still transform a string to a Blob or Buffer by yourself and then store it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { blobBufferUtil } from 'nxdb';\n\nconst attachment = await myDocument.putAttachment(\n    {\n        id: 'cat.txt',\n        data: blobBufferUtil.createBlobBuffer('miau', 'text/plain')\n        type: 'text/plain'\n    }\n);\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Also ",(0,o.jsx)(n.code,{children:"putAttachment()"})," now defaults to ",(0,o.jsx)(n.code,{children:"skipIfSame=true"}),". This means when you write attachment data that already is exactly the same in the database, no write will be done."]}),"\n",(0,o.jsx)(n.h3,{id:"outgoing-data-is-now-readonly-and-deep-frozen",children:"Outgoing data is now readonly and deep-frozen"}),"\n",(0,o.jsx)(n.p,{children:"NxDB often uses outgoing data also in the internals. For example the result of a query is not only send to the user, but also used inside of NxDB's query-change-detection. To ensure that mutation of the outgoing data is not changing internal stuff, which would cause strange bugs, outgoing data was always deep-cloned before handing it out to the user. This is a common practice on many javascript libraries."}),"\n",(0,o.jsxs)(n.p,{children:["The problem is that deep-cloning big objects can be very CPU/Memory expensive. So instead of doing a deep-clone, NxDB does now assume that outgoing data is ",(0,o.jsx)(n.strong,{children:"immutable"}),". If the users wants to modify that data, it has be be deep-cloned by the user.\nTo ensure immutability, NxDB runs a ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",children:"deep-freeze"})," in the dev-mode (about same expensive as deep clone). Also typescript will throw a build-time error because we use ",(0,o.jsx)(n.code,{children:"ReadonlyArray"})," and ",(0,o.jsx)(n.code,{children:"readonly"})," to define outgoing data immutable. In production-mode, there will be nothing besides typescript that ensures immutability to have best performance."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const data = myRxDocument.toJSON();\ndata.foo = bar; // This does NOT work!\n\n// instead clone the data before changing it\nimport { clone } from 'rxjs';\nconst clonedData = clone(data);\ndata.foo = bar; // This works!\n"})}),"\n",(0,o.jsx)(n.h3,{id:"the-in-memory-plugin-does-no-longer-work",children:"The in-memory plugin does no longer work."}),"\n",(0,o.jsxs)(n.p,{children:["The in-memory plugin was used to spawn in-memory collections on top of a normal ",(0,o.jsx)(n.code,{children:"RxCollection"}),". The benefit is to have the data replicated into the memory of the javascript runtime, which allows for faster queries."]}),"\n",(0,o.jsxs)(n.p,{children:["After doing many tests and observations, I found out that the in-memory plugin was slow. Really slow, even slower then just using the indexeddb adapter in the browser. You can reproduce my observations at the event-reduce testpage. Here you can see that random-writes+query are slower on the ",(0,o.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/event-reduce/?tech=pouchdb:memory",children:"memory-adapter"})," then on ",(0,o.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/event-reduce/?tech=pouchdb:indexeddb",children:"indexeddb"}),".\nThe reason for this are the big abstraction layers. Pouchdb uses the adapter system. The memory adapter uses the ",(0,o.jsx)(n.a,{href:"https://github.com/Level/levelup",children:"leveldown abstraction layer"}),". Each write/read goes to the ",(0,o.jsx)(n.a,{href:"https://github.com/Level/memdown",children:"memdown module"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["So the in-memory plugin is not working for now. In the future it will be reimplemented in a custom memory based ",(0,o.jsx)(n.code,{children:"RxStorage"})," class."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You can of course still use the pouchdb ",(0,o.jsx)(n.code,{children:"memory"})," adapter as usual. It is not affected by this change."]})}),"\n",(0,o.jsx)(n.h2,{id:"what-else-is-a-breaking-change",children:"What else is a breaking change?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Removed the deprecated ",(0,o.jsx)(n.code,{children:"atomicSet()"}),", use ",(0,o.jsx)(n.code,{children:"atomicPatch()"})," instead."]}),"\n",(0,o.jsxs)(n.li,{children:["Removed the deprecated ",(0,o.jsx)(n.code,{children:"RxDatabase.collection()"})," use ",(0,o.jsx)(n.code,{children:"RxDatabase().addCollections()"})," instead."]}),"\n",(0,o.jsxs)(n.li,{children:["Removed plugin hook ",(0,o.jsx)(n.code,{children:"preCreatePouchDb"})," because it is no longer needed."]}),"\n",(0,o.jsxs)(n.li,{children:["Removed the ",(0,o.jsx)(n.code,{children:"watch-for-changes"})," plugin. We now overwrite pouchdbs ",(0,o.jsx)(n.code,{children:"bulkDocs"})," method to generate events. This is faster and more reliable."]}),"\n",(0,o.jsxs)(n.li,{children:["Removed the ",(0,o.jsx)(n.code,{children:"adapter-check"})," plugin. (The function ",(0,o.jsx)(n.code,{children:"adapterCheck"})," is move to the pouchdb plugin)."]}),"\n",(0,o.jsxs)(n.li,{children:["Calling ",(0,o.jsx)(n.code,{children:"RxDatabase.server()"})," now returns a promise that resolves when the server is started up."]}),"\n",(0,o.jsxs)(n.li,{children:["Changed the defaults of ",(0,o.jsx)(n.code,{children:"PouchDBExpressServerOptions"})," from the ",(0,o.jsx)(n.code,{children:"server()"})," method, by default we now store logs in the ",(0,o.jsx)(n.code,{children:"tmp"})," folder and the config is in memory."]}),"\n",(0,o.jsxs)(n.li,{children:["Renamed ",(0,o.jsx)(n.code,{children:"replication"}),"-plugin to ",(0,o.jsx)(n.code,{children:"replication-couchdb"})," to be more consistent in naming like with ",(0,o.jsx)(n.code,{children:"replication-graphql"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For the same reason, renamed ",(0,o.jsx)(n.code,{children:"RxCollection().sync()"})," to ",(0,o.jsx)(n.code,{children:"RxCollection().syncCouchDB()"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Renamed the functions of the json import/export plugin to be less confusing.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dump()"})," is now ",(0,o.jsx)(n.code,{children:"exportJSON()"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"importDump()"})," is now ",(0,o.jsx)(n.code,{children:"importJSON()"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"RxCollection"})," uses a separate pouchdb instance for local documents, so that they can persist during migrations."]}),"\n",(0,o.jsxs)(n.li,{children:["A JsonSchema must have the ",(0,o.jsx)(n.code,{children:"required"})," array at the top level and it must contain the primary key."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,o.jsx)(n.h3,{id:"composite-primary-key",children:"Composite primary key"}),"\n",(0,o.jsx)(n.p,{children:"You can now use a composite primary key for the schema where you can join different properties of the document data to create a primary key."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const mySchema = {\n  keyCompression: true, // set this to true, to enable the keyCompression\n  version: 0,\n  title: 'human schema with composite primary',\n  primaryKey: {\n      // where should the composed string be stored\n      key: 'id',\n      // fields that will be used to create the composed key\n      fields: [\n          'firstName',\n          'lastName'\n      ],\n      // separator which is used to concat the fields values.\n      separator: '|'\n  }\n  type: 'object',\n  properties: {\n      id: {\n          type: 'string'\n      },\n      firstName: {\n          type: 'string'\n      },\n      lastName: {\n          type: 'string'\n      }\n  },\n  required: [\n    'id', \n    'firstName',\n    'lastName'\n  ]\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"for-the-future",children:"For the future"}),"\n",(0,o.jsx)(n.p,{children:"With these changes, NxDB is now ready for the future plans:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["I want to replace the ",(0,o.jsx)(n.code,{children:"revision"})," handling of documents with conflict resolution strategies that can always directly resolve conflicts instead of maintaining the revision tree."]}),"\n",(0,o.jsxs)(n.li,{children:["Implement different implementations for ",(0,o.jsx)(n.code,{children:"RxStorage"}),". I will first work on a memory based version. I am in good hope that the community will create other implementations depending on their needs."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"you-can-help",children:"You can help!"}),"\n",(0,o.jsxs)(n.p,{children:["There are many things that can be done by ",(0,o.jsx)(n.strong,{children:"you"})," to improve NxDB:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Check the ",(0,o.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/blob/master/orga/BACKLOG.md",children:"BACKLOG"})," for features that would be great to have."]}),"\n",(0,o.jsxs)(n.li,{children:["Check the ",(0,o.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/blob/master/orga/before-next-major.md",children:"breaking backlog"})," for breaking changes that must be implemented in the future but where I did not had the time yet."]}),"\n",(0,o.jsxs)(n.li,{children:["Check the ",(0,o.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/search?q=TODO",children:"TODOs"})," in the code. There are many small improvements that can be done for performance and build size."]}),"\n",(0,o.jsx)(n.li,{children:"Review the code and add tests. I am only a single dude with a laptop. My code is not perfect and much small improvements can be done when people review the code and help me to clarify undefined behaviors."}),"\n",(0,o.jsx)(n.li,{children:"Improve the documentation. In the last user survey many users told me that the documentation is not good enough. But I reviewed the docs and could not find clear flaws. The problem is that I am way to deep into NxDB so that I am not able to understand which documentation a newcomer to the project needs. Likely I assume too much knowledge or focus writing about the wrong parts."}),"\n",(0,o.jsxs)(n.li,{children:["Update the ",(0,o.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples",children:"example projects"})," many of them are outdated and need updates."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"discuss",children:"Discuss!"}),"\n",(0,o.jsxs)(n.p,{children:["Please ",(0,o.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/issues/3279",children:"discuss here"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);