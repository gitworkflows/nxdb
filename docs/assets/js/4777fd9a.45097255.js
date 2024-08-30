"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[6386],{1600:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const n={title:"Alternatives for realtime offline-first JavaScript applications and local databases",slug:"alternatives.html",description:"Explore real-time, offline-first JS alternatives to NxDB. Compare Firebase, Meteor, AWS, CouchDB, and more for robust, seamless web/mobile app development."},o="Alternatives for realtime offline-first JavaScript applications",r={id:"alternatives",title:"Alternatives for realtime offline-first JavaScript applications and local databases",description:"Explore real-time, offline-first JS alternatives to NxDB. Compare Firebase, Meteor, AWS, CouchDB, and more for robust, seamless web/mobile app development.",source:"@site/docs/alternatives.md",sourceDirName:".",slug:"/alternatives.html",permalink:"/alternatives.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Alternatives for realtime offline-first JavaScript applications and local databases",slug:"alternatives.html",description:"Explore real-time, offline-first JS alternatives to NxDB. Compare Firebase, Meteor, AWS, CouchDB, and more for robust, seamless web/mobile app development."},sidebar:"tutorialSidebar",previous:{title:"React Native Database",permalink:"/react-native-database.html"},next:{title:"NxDB as a Database in an Angular Application",permalink:"/articles/angular-database.html"}},l={},d=[{value:"What to compare with",id:"what-to-compare-with",level:3},{value:"Firebase",id:"firebase",level:3},{value:"Firebase - Realtime Database",id:"firebase---realtime-database",level:4},{value:"Firebase - Cloud Firestore",id:"firebase---cloud-firestore",level:4},{value:"Meteor",id:"meteor",level:3},{value:"Minimongo",id:"minimongo",level:3},{value:"WatermelonDB",id:"watermelondb",level:3},{value:"AWS Amplify",id:"aws-amplify",level:3},{value:"AWS Datastore",id:"aws-datastore",level:3},{value:"RethinkDB",id:"rethinkdb",level:3},{value:"Horizon",id:"horizon",level:3},{value:"Supabase",id:"supabase",level:3},{value:"CouchDB",id:"couchdb",level:3},{value:"PouchDB",id:"pouchdb",level:3},{value:"Couchbase",id:"couchbase",level:3},{value:"Cloudant",id:"cloudant",level:3},{value:"Hoodie",id:"hoodie",level:3},{value:"LokiJS",id:"lokijs",level:3},{value:"Gundb",id:"gundb",level:3},{value:"sql.js",id:"sqljs",level:3},{value:"absurd-sQL",id:"absurd-sql",level:3},{value:"NeDB",id:"nedb",level:3},{value:"Dexie.js",id:"dexiejs",level:3},{value:"LowDB",id:"lowdb",level:3},{value:"MongoDB Realm",id:"mongodb-realm",level:3},{value:"Apollo",id:"apollo",level:3},{value:"Replicache",id:"replicache",level:3}];function c(e){const a={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"alternatives-for-realtime-offline-first-javascript-applications",children:"Alternatives for realtime offline-first JavaScript applications"}),"\n",(0,i.jsxs)(a.p,{children:["To give you an augmented view over the topic of client side JavaScript databases, this page contains all known alternatives to ",(0,i.jsx)(a.strong,{children:"NxDB"}),". Remember that you are reading this inside of the NxDB documentation, so everything is ",(0,i.jsx)(a.strong,{children:"opinionated"}),".\nIf you disagree with anything or think that something is missing, make a pull request to this file."]}),"\n",(0,i.jsx)(a.h3,{id:"what-to-compare-with",children:"What to compare with"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://nxpkg.github.io/nxdb",children:"NxDB"})," is an ",(0,i.jsx)(a.strong,{children:"observable"}),", ",(0,i.jsx)(a.strong,{children:"replicating"}),", ",(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"/offline-first.html",children:"local first"})}),", ",(0,i.jsx)(a.strong,{children:"JavaScript"})," database. So it makes only sense to list similar projects as alternatives, not just any database or JavaScript store library. However, I will list up some projects that NxDB is often compared with, even if it only makes sense for some use cases."]}),"\n",(0,i.jsxs)(a.p,{children:["This list should be seen as an ",(0,i.jsx)(a.strong,{children:"entrypoint"})," for your personal evaluation of which tool could work for your project."]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h3,{id:"firebase",children:"Firebase"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/firebase.svg",alt:"firebase alternative",class:"img-padding",height:"60"})}),"\n",(0,i.jsxs)(a.p,{children:["Firebase is a ",(0,i.jsx)(a.strong,{children:"platform"})," developed by Google for creating mobile and web applications. Firebase has many features and products, two of which are client side databases. The ",(0,i.jsx)(a.code,{children:"Realtime Database"})," and the ",(0,i.jsx)(a.code,{children:"Cloud Firestore"}),"."]}),"\n",(0,i.jsx)(a.h4,{id:"firebase---realtime-database",children:"Firebase - Realtime Database"}),"\n",(0,i.jsxs)(a.p,{children:['The firebase realtime database was the first database in firestore. It has to be mentioned that in this context, "realtime" means ',(0,i.jsx)(a.strong,{children:'"realtime replication"'}),', not "realtime computing". The firebase realtime database stores data as a big unstructured JSON tree that is replicated between clients and the backend.']}),"\n",(0,i.jsx)(a.h4,{id:"firebase---cloud-firestore",children:"Firebase - Cloud Firestore"}),"\n",(0,i.jsxs)(a.p,{children:["The firestore is the successor to the realtime database. The big difference is that it behaves more like a 'normal' database that stores data as documents inside of collections. The conflict resolution strategy of firestore is always ",(0,i.jsx)(a.em,{children:"last-write-wins"})," which might or might not be suitable for your use case."]}),"\n",(0,i.jsxs)(a.p,{children:["The biggest difference to NxDB is that firebase products are only able to be used on top of the Firebase cloud hosted backend, which creates a vendor lock-in. NxDB can replicate with any self hosted CouchDB server or custom GraphQL endpoints. You can even replicate Firestore to NxDB with the ",(0,i.jsx)(a.a,{href:"/replication-firestore.html",children:"Firestore Replication Plugin"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"meteor",children:"Meteor"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/meteor_text.svg",alt:"MeteorJS alternative",class:"img-padding",height:"60"})}),"\n",(0,i.jsxs)(a.p,{children:["Meteor (since 2012) is one of the oldest technologies for JavaScript realtime applications. Meteor is not a library but a whole framework with its own package manager, database management and replication protocol.\nBecause of how it works, it has proven to be hard to integrate it with other modern JavaScript frameworks like ",(0,i.jsx)(a.a,{href:"https://github.com/urigo/angular-meteor",children:"angular"}),", vue.js or svelte."]}),"\n",(0,i.jsxs)(a.p,{children:["Meteor uses MongoDB in the backend and can replicate with a Minimongo database in the frontend.\nWhile testing, it has proven to be impossible to make a meteor app ",(0,i.jsx)(a.strong,{children:"offline first"})," capable. There are ",(0,i.jsx)(a.a,{href:"https://github.com/frozeman/meteor-persistent-minimongo2",children:"some projects"})," that might do this, but all are unmaintained."]}),"\n",(0,i.jsx)(a.h3,{id:"minimongo",children:"Minimongo"}),"\n",(0,i.jsxs)(a.p,{children:["Forked in Jan 2014 from meteorJSs' minimongo package, Minimongo is a client-side, in-memory, JavaScript version of MongoDB with backend replication over HTTP. Similar to MongoDB, it stores data in documents inside of collections and also has the same query syntax. Minimongo has different storage adapters for IndexedDB, WebSQL, ",(0,i.jsx)(a.a,{href:"/articles/localstorage.html",children:"LocalStorage"})," and SQLite.\nCompared to NxDB, Minimongo has no concept of revisions or conflict handling, which might lead to undefined behavior when used with replication or in multiple browser tabs. Minimongo has no observable queries or changestream."]}),"\n",(0,i.jsx)(a.h3,{id:"watermelondb",children:"WatermelonDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/watermelondb.png",alt:"WatermelonDB alternative",height:"60"})}),"\n",(0,i.jsxs)(a.p,{children:["WatermelonDB is a reactive & asynchronous JavaScript database. While originally made for React and React Native, it can also be used with other JavaScript frameworks. The main goal of WatermelonDB is ",(0,i.jsx)(a.strong,{children:"performance"})," within an application with lots of data.\nIn React Native, WatermelonDB uses the provided SQLite database. Also there is an Expo plugin for WatermelonDB. In a browser, WatermelonDB uses the LokiJS in-memory database to store and query data. WatermelonDB is one of the rare projects that support both Flow and Typescript at the same time."]}),"\n",(0,i.jsx)(a.h3,{id:"aws-amplify",children:"AWS Amplify"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/aws-amplify.svg",alt:"AWS Amplify alternative",height:"60",class:"img-padding"})}),"\n",(0,i.jsxs)(a.p,{children:["AWS Amplify is a collection of tools and libraries to develop web- and mobile frontend applications. Similar to firebase, it provides everything needed like authentication, analytics, a REST API, storage and so on. Everything hosted in the AWS Cloud, even when they state that ",(0,i.jsx)(a.em,{children:'"AWS Amplify is designed to be open and pluggable for any custom backend or service"'}),". For realtime replication, AWS Amplify can connect to an AWS App-Sync GraphQL endpoint."]}),"\n",(0,i.jsx)(a.h3,{id:"aws-datastore",children:"AWS Datastore"}),"\n",(0,i.jsxs)(a.p,{children:["Since december 2019 the Amplify library includes the AWS Datastore which is a document-based, client side database that is able to replicate data via AWS AppSync in the background.\nThe main difference to other projects is the complex project configuration via the amplify cli and the bit confusing query syntax that works over functions. Complex Queries with multiple ",(0,i.jsx)(a.code,{children:"OR/AND"})," statements are not possible which might change in the future.\nLocal development is hard because the AWS AppSync mock does not support realtime replication. It also is not really offline-first because a user login is always required."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-ts",children:'// An AWS datastore OR query\nconst posts = await DataStore.query(Post, c => c.or(\n  c => c.rating("gt", 4).status("eq", PostStatus.PUBLISHED)\n));\n\n// An AWS datastore SORT query\nconst posts = await DataStore.query(Post, Predicates.ALL, {\n  sort: s => s.rating(SortDirection.ASCENDING).title(SortDirection.DESCENDING)\n});\n'})}),"\n",(0,i.jsx)(a.p,{children:"The biggest difference to NxDB is that you have to use the AWS cloud backends. This might not be a problem if your data is at AWS anyway."}),"\n",(0,i.jsx)(a.h3,{id:"rethinkdb",children:"RethinkDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/rethinkdb.svg",alt:"RethinkDB alternative",height:"60",class:"img-padding"})}),"\n",(0,i.jsx)(a.p,{children:"RethinkDB is a backend database that pushed dynamic JSON data to the client in realtime. It was founded in 2009 and the company shut down in 2016.\nRethink db is not a client side database, it streams data from the backend to the client which of course does not work while offline."}),"\n",(0,i.jsx)(a.h3,{id:"horizon",children:"Horizon"}),"\n",(0,i.jsxs)(a.p,{children:["Horizon is the client side library for RethinkDB which provides useful functions like authentication, permission management and subscription to a RethinkDB backend. Offline support ",(0,i.jsx)(a.a,{href:"https://github.com/rethinkdb/horizon/issues/58",children:"never made"})," it to horizon."]}),"\n",(0,i.jsx)(a.h3,{id:"supabase",children:"Supabase"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/supabase.svg",alt:"Supabase alternative",height:"60",class:"img-padding"})}),"\n",(0,i.jsxs)(a.p,{children:['Supabase labels itself as "',(0,i.jsx)(a.em,{children:"an open source Firebase alternative"}),'". It is a collection of open source tools that together mimic many Firebase features, most of them by providing a wrapper around a PostgreSQL database. While it has realtime queries that run over the wire, like with RethinkDB, Supabase has no client-side storage or replication feature and therefore is not offline first.']}),"\n",(0,i.jsx)(a.h3,{id:"couchdb",children:"CouchDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/icons/couchdb-text.svg",alt:"CouchDB alternative",height:"60",class:"img-padding"})}),"\n",(0,i.jsx)(a.p,{children:"Apache CouchDB is a server-side, document-oriented database that is mostly known for its multi-master replication feature. Instead of having a master-slave replication, with CouchDB you can run replication in any constellation without having a master server as bottleneck where the server even can go off- and online at any time. This comes with the drawback of having a slow replication with much network overhead.\nCouchDB has a changestream and a query syntax similar to MongoDB."}),"\n",(0,i.jsx)(a.h3,{id:"pouchdb",children:"PouchDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/pouchdb.svg",alt:"PouchDB alternative",height:"60",class:"img-padding"})}),"\n",(0,i.jsxs)(a.p,{children:["PouchDB is a JavaScript database that is compatible with most of the CouchDB API. It has an adapter system that allows you to switch out the underlying storage layer. There are many adapters like for IndexedDB, SQLite, the Filesystem and so on. The main benefit is to be able to replicate data with any CouchDB compatible endpoint.\nBecause of the CouchDB compatibility, PouchDB has to do a lot of overhead in handling the revision tree of document, which is why it can show bad performance for bigger datasets.\nNxDB was originally build around PouchDB until the storage layer was abstracted out in version ",(0,i.jsx)(a.a,{href:"/releases/10.0.0.html",children:"10.0.0"})," so it now allows to use different ",(0,i.jsx)(a.code,{children:"RxStorage"})," implementations. PouchDB has some performance issues because of how it has to store the document revision tree to stay compatible with the CouchDB API."]}),"\n",(0,i.jsx)(a.h3,{id:"couchbase",children:"Couchbase"}),"\n",(0,i.jsxs)(a.p,{children:["Couchbase (originally known as Membase) is another NoSQL document database made for realtime applications.\nIt uses the N1QL query language which is more SQL like compared to other NoSQL query languages. In theory you can achieve replication of a Couchbase with a PouchDB database, but this has shown to be not ",(0,i.jsx)(a.a,{href:"https://github.com/pouchdb/pouchdb/issues/7793#issuecomment-501624297",children:"that easy"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"cloudant",children:"Cloudant"}),"\n",(0,i.jsx)(a.p,{children:"Cloudant is a cloud-based service that is based on CouchDB and has mostly the same features.\nIt was originally designed for cloud computing where data can automatically be distributed between servers. But it can also be used to replicate with frontend PouchDB instances to create scalable web applications.\nIt was bought by IBM in 2014 and since 2018 the Cloudant Shared Plan is retired and migrated to IBM Cloud."}),"\n",(0,i.jsx)(a.h3,{id:"hoodie",children:"Hoodie"}),"\n",(0,i.jsx)(a.p,{children:"Hoodie is a backend solution that enables offline-first JavaScript frontend development without having to write backend code. Its main goal is to abstract away configuration into simple calls to the Hoodie API.\nIt uses CouchDB in the backend and PouchDB in the frontend to enable offline-first capabilities.\nThe last commit for hoodie was one year ago and the website (hood.ie) is offline which indicates it is not an active project anymore."}),"\n",(0,i.jsx)(a.h3,{id:"lokijs",children:"LokiJS"}),"\n",(0,i.jsxs)(a.p,{children:["LokiJS is a JavaScript embeddable, in-memory database. And because everything is handled in-memory, LokiJS has awesome performance when mutating or querying data. You can still persist to a permanent storage (IndexedDB, Filesystem etc.) with one of the provided storage adapters. The persistence happens after a timeout is reached after a write, or before the JavaScript process exits. This also means you could loose data when the JavaScript process exits ungracefully like when the power of the device is shut down or the browser crashes.\nWhile the project is not that active anymore, it is more ",(0,i.jsx)(a.em,{children:"finished"})," than ",(0,i.jsx)(a.em,{children:"unmaintained"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["NxDB supports using ",(0,i.jsx)(a.a,{href:"/rx-storage-lokijs.html",children:"LokiJS as RxStorage"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"gundb",children:"Gundb"}),"\n",(0,i.jsxs)(a.p,{children:["GUN is a JavaScript graph database. While having many features, the ",(0,i.jsx)(a.strong,{children:"decentralized"})," replication is the main unique selling point. You can replicate data Peer-to-Peer without any centralized backend server. GUN has several other features that are useful on top of that, like encryption and authentication."]}),"\n",(0,i.jsxs)(a.p,{children:["While testing it was really hard to get basic things running. GUN is open source, but because of how the source code ",(0,i.jsx)(a.a,{href:"https://github.com/amark/gun/blob/master/src/put.js",children:"is written"}),", it is very difficult to understand what is going wrong."]}),"\n",(0,i.jsx)(a.h3,{id:"sqljs",children:"sql.js"}),"\n",(0,i.jsx)(a.p,{children:"sql.js is a javascript library to run SQLite on the web. It uses a virtual database file stored in memory and does not have any persistence. All data is lost once the JavaScript process exits. sql.js is created by compiling SQLite to WebAssembly so it has about the same features as SQLite. For older browsers there is a JavaScript fallback."}),"\n",(0,i.jsx)(a.h3,{id:"absurd-sql",children:"absurd-sQL"}),"\n",(0,i.jsxs)(a.p,{children:["Absurd-sql is a project that implements an IndexedDB-based persistence for sql.js. Instead of directly writing data into the IndexedDB, it treats IndexedDB like a disk and stores data in blocks there which shows to have a much better performance, mostly because of how ",(0,i.jsx)(a.a,{href:"/slow-indexeddb.html",children:"performance expensive"})," IndexedDB transactions are."]}),"\n",(0,i.jsx)(a.h3,{id:"nedb",children:"NeDB"}),"\n",(0,i.jsxs)(a.p,{children:["NeDB was a embedded persistent or in-memory database for Node.js, nw.js, ",(0,i.jsx)(a.a,{href:"/electron-database.html",children:"Electron"})," and browsers.\nIt is document-oriented and had the same query syntax as MongoDB.\nLike LokiJS it has persistence adapters for IndexedDB etc. to persist the database state on the disc.\nThe last commit to NeDB was in ",(0,i.jsx)(a.strong,{children:"2016"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"dexiejs",children:"Dexie.js"}),"\n",(0,i.jsx)(a.p,{children:"Dexie.js is a minimalistic wrapper for IndexedDB. While providing a better API than plain IndexedDB, Dexie also improves performance by batching transactions and other optimizations. It also adds additional non-IndexedDB features like observable queries or multi tab support or react hooks.\nCompared to NxDB, Dexie.js does not support complex (MongoDB-like) queries and requires a lot of fiddling when a document range of a specific index must be fetched.\nDexie.js is used by Whatsapp Web, Microsoft To Do and Github Desktop."}),"\n",(0,i.jsxs)(a.p,{children:["NxDB supports using ",(0,i.jsx)(a.a,{href:"/rx-storage-dexie.html",children:"Dexie.js as RxStorage"})," which enhances IndexedDB with NxDB features like MongoDB-like queries etc."]}),"\n",(0,i.jsx)(a.h3,{id:"lowdb",children:"LowDB"}),"\n",(0,i.jsx)(a.p,{children:"LowDB is a small, local JSON database powered by the Lodash library. It is designed to be simple, easy to use, and straightforward. LowDB allows you to perform native JavaScript queries and persist data in a flat JSON file. Written in TypeScript, it's particularly well-suited for small projects, prototyping, or when you need a lightweight, file-based database."}),"\n",(0,i.jsxs)(a.p,{children:["As an alternative to LowDB, ",(0,i.jsx)(a.a,{href:"./",children:"NxDB"})," offers real-time reactivity, allowing developers to subscribe to database changes, a feature not natively available in LowDB. Additionally, NxDB provides robust ",(0,i.jsx)(a.a,{href:"/rx-query.html",children:"query capabilities"}),", including the ability to subscribe to query results for automatic UI updates. These features make NxDB a strong alternative to LowDB for more complex and dynamic applications."]}),"\n",(0,i.jsx)(a.h3,{id:"mongodb-realm",children:"MongoDB Realm"}),"\n",(0,i.jsx)(a.p,{children:"Originally Realm was a mobile database for Android and iOS. Later they added support for other languages and runtimes, also for JavaScript.\nIt was meant as replacement for SQLite but is more like an object store than a full SQL database.\nIn 2019 MongoDB bought Realm and changed the projects focus.\nNow Realm is made for replication with the MongoDB Realm Sync based on the MongoDB Atlas Cloud platform. This tight coupling to the MongoDB cloud service is a big downside for most use cases."}),"\n",(0,i.jsx)(a.h3,{id:"apollo",children:"Apollo"}),"\n",(0,i.jsx)(a.p,{children:"The Apollo GraphQL platform is made to transfer data between a server to UI applications over GraphQL endpoints. It contains several tools like GraphQL clients in different languages or libraries to create GraphQL endpoints."}),"\n",(0,i.jsx)(a.p,{children:"While it is has different caching features for offline usage, compared to NxDB it is not fully offline first because caching alone does not mean your application is fully usable when the user is offline."}),"\n",(0,i.jsx)(a.h3,{id:"replicache",children:"Replicache"}),"\n",(0,i.jsxs)(a.p,{children:["Replicache is a client-side sync framework for building realtime, collaborative, local-first web apps. It claims to work with most backend stacks. In contrast to other local first tools, replicache does not work like a local database. Instead it runs on so called ",(0,i.jsx)(a.code,{children:"mutators"})," that unify behavior on the client and server side. So instead of implementing and calling REST routes on both sides of your stack, you will implement mutators that define a specific delta behavior based on the input data. To observe data in replicache, there are ",(0,i.jsx)(a.code,{children:"subscriptions"})," that notify your frontend application about changes to the state.\nReplicache can be used in most frontend technologies like browsers, react/remix, vercle and react native. While replicache can be installed and used from npm, the replicache source code is not open source and the replicache github repo does not allow you to inspect or debug it. Still you can use replicache for in non-commercial projects, or for companies with < $200k revenue (ARR) and < $500k in funding."]}),"\n",(0,i.jsx)(a.h1,{id:"read-further",children:"Read further"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://github.com/nxpkg/client-side-databases",children:"Offline First Database Comparison"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://jaredforsyth.com/tags/local-first/",children:"https://jaredforsyth.com/tags/local-first/"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var i=t(6540);const s={},n=i.createContext(s);function o(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);