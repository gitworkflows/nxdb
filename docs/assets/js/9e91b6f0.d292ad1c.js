"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[3021],{1844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(4848),o=n(8453);const i={title:"Why NOSQL",slug:"why-nosql.html"},s="Why UI applications need NoSQL",r={id:"why-nosql",title:"Why NOSQL",description:"NxDB, a client side, offline first, JavaScript database, is now several years old.",source:"@site/docs/why-nosql.md",sourceDirName:".",slug:"/why-nosql.html",permalink:"/why-nosql.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Why NOSQL",slug:"why-nosql.html"},sidebar:"tutorialSidebar",previous:{title:"Slow IndexedDB",permalink:"/slow-indexeddb.html"},next:{title:"React Native Database",permalink:"/react-native-database.html"}},l={},h=[{value:"Transactions do not work with humans involved",id:"transactions-do-not-work-with-humans-involved",level:2},{value:"Transactions do not work with offline-first",id:"transactions-do-not-work-with-offline-first",level:2},{value:"Relational queries in NoSQL",id:"relational-queries-in-nosql",level:2},{value:"Reliable replication",id:"reliable-replication",level:2},{value:"Server side validation",id:"server-side-validation",level:2},{value:"Event optimization",id:"event-optimization",level:2},{value:"Migration without relations",id:"migration-without-relations",level:2},{value:"Everything can be downgraded to NoSQL",id:"everything-can-be-downgraded-to-nosql",level:2},{value:"Caching query results",id:"caching-query-results",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"What you lose with NoSQL",id:"what-you-lose-with-nosql",level:2},{value:"But there is database XY",id:"but-there-is-database-xy",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"why-ui-applications-need-nosql",children:"Why UI applications need NoSQL"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://nxpkg.github.io/nxdb",children:"NxDB"}),", a client side, offline first, JavaScript database, is now several years old.\nOften new users appear in the chat and ask for that one simple feature:\nThey want to store and query ",(0,a.jsx)(t.strong,{children:"relational data"}),"."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"So why not just implement SQL?"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["All these client databases out there have on some kind of document based, NoSQL like, storage engine. PouchDB, Firebase, AWS Datastore, RethinkDB's ",(0,a.jsx)(t.a,{href:"https://github.com/rethinkdb/horizon",children:"Horizon"}),", Meteor's ",(0,a.jsx)(t.a,{href:"https://github.com/mWater/minimongo",children:"Minimongo"}),", ",(0,a.jsx)(t.a,{href:"https://parseplatform.org/",children:"Parse"}),", ",(0,a.jsx)(t.a,{href:"https://realm.io/",children:"Realm"}),". They all do not have real relational data."]}),"\n",(0,a.jsxs)(t.p,{children:["They might have some kind of weak relational foreign keys like the ",(0,a.jsx)(t.a,{href:"/population.html",children:"NxDB Population"}),"\nor the ",(0,a.jsx)(t.a,{href:"https://docs.amplify.aws/lib/datastore/relational/q/platform/js/",children:"relational models"})," of AWS Datastore.\nBut these relations are weak. The foreign keys are not enforced to be valid like in PostgreSQL, and you cannot query\nthe rows with complex subqueries over different tables or collections and then make mutations based on the result."]}),"\n",(0,a.jsx)(t.p,{children:"There must be a reason for that. In fact, there are multiple of them and in the following I want to show you why you can neither have, nor want real relational data when you have a client-side database with replication."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./files/no-sql.png",alt:"NoSQL",width:"100"})}),"\n",(0,a.jsx)(t.h2,{id:"transactions-do-not-work-with-humans-involved",children:"Transactions do not work with humans involved"}),"\n",(0,a.jsxs)(t.p,{children:["On the server side, transactions are used to run steps of logic inside of a self contained ",(0,a.jsx)(t.code,{children:"unit of work"}),". The database system ensures that multiple transactions do not run in parallel or interfere with each other.\nThis works well because on the server side you can predict how longer everything takes. It can be ensured that one transactions does not block everything else for too long which would make the system not responding anymore to other requests."]}),"\n",(0,a.jsx)(t.p,{children:"When you build a UI based application that is used by a real human, you can no longer predict how long anything takes.\nThe user clicks the edit button and expects to not have anyone else change the document while the user is in edit mode.\nUsing a transaction to ensure nothing is changed in between, is not an option because the transaction could be open for a long\ntime and other background tasks, like replication, would no longer work."}),"\n",(0,a.jsxs)(t.p,{children:["So whenever a human is involved, this kind of logic has to be implemented using other strategies. Most NoSQL databases like ",(0,a.jsx)(t.a,{href:"./",children:"NxDB"})," or CouchDB use a system based on ",(0,a.jsx)(t.a,{href:"/transactions-conflicts-revisions.html",children:"revision and conflicts"})," to handle these."]}),"\n",(0,a.jsx)(t.h2,{id:"transactions-do-not-work-with-offline-first",children:"Transactions do not work with offline-first"}),"\n",(0,a.jsxs)(t.p,{children:["When you want to build an ",(0,a.jsx)(t.a,{href:"/offline-first.html",children:"offline-first"})," application, it is assumed that the user can also read and write data, even when the device has lost the connection to the backend.\nYou could use database transactions on writes to the client's database state, but enforcing a transaction boundary across other instances like clients or servers, is not possible when there is no connection."]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./files/why-no-transactions.jpg",alt:"offline first vs relational transactions",width:"400"})}),"\n",(0,a.jsxs)(t.p,{children:["On the client you could run an update query where all ",(0,a.jsx)(t.code,{children:"color: red"})," rows are changed to ",(0,a.jsx)(t.code,{children:"color: blue"}),", but this would not guarantee that there will still be other ",(0,a.jsx)(t.code,{children:"red"})," documents when the client goes online again and restarts the replication with the server."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"UPDATE docs\nSET docs.color = 'red'\nWHERE docs.color = 'blue';\n"})}),"\n",(0,a.jsx)(t.h2,{id:"relational-queries-in-nosql",children:"Relational queries in NoSQL"}),"\n",(0,a.jsx)(t.p,{children:"What most people want from a relational database, is to run queries over multiple tables.\nSome people think that they cannot do that with NoSQL, so let me explain."}),"\n",(0,a.jsxs)(t.p,{children:["Let's say you have two tables with ",(0,a.jsx)(t.code,{children:"customers"})," and ",(0,a.jsx)(t.code,{children:"cities"})," where each city has an ",(0,a.jsx)(t.code,{children:"id"})," and each customer has a ",(0,a.jsx)(t.code,{children:"city_id"}),". You want to get every customer that resides in ",(0,a.jsx)(t.code,{children:"Tokyo"}),". With SQL, you would use a query like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT *\nFROM city\nWHERE city.name = 'Tokyo'\nLEFT JOIN customer ON customer.city_id = city.id;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["With ",(0,a.jsx)(t.strong,{children:"NoSQL"})," you can just do the same, but you have to write it manually:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const cityDocument = await db.cities.findOne().where('name').equals('Tokyo').exec();\nconst customerDocuments = await db.customers.find().where('city_id').equals(cityDocument.id).exec();\n"})}),"\n",(0,a.jsx)(t.p,{children:"So what are the differences? The SQL version would run faster on a remote database server because it would aggregate all data there and return only the customers as result set. But when you have a local database, it is not really a difference. Querying the two tables by hand would have about the same performance as a JavaScript implementation of SQL that is running locally."}),"\n",(0,a.jsxs)(t.p,{children:["The main benefit from using SQL is, that the SQL query runs inside of a ",(0,a.jsx)(t.strong,{children:"single transaction"}),". When a change to one of our two tables happens, while our query runs, the SQL database will ensure that the write does not affect the result of the query. This could happen with NoSQL, while you retrieve the city document, the customer table gets changed and your result is not correct for the dataset that was there when you started the querying. As a workaround, you could observe the database for changes and if a change happened in between, you have to re-run everything."]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./files/no-relational-data.png",alt:"no relational data",width:"250"})}),"\n",(0,a.jsx)(t.h2,{id:"reliable-replication",children:"Reliable replication"}),"\n",(0,a.jsxs)(t.p,{children:["In an offline first app, your data is replicated from your backend servers to your users and you want it to be reliable.\nThe replication is ",(0,a.jsx)(t.strong,{children:"reliable"})," when, no matter what happens, every online client is able to run a replication\nand end up with the ",(0,a.jsx)(t.strong,{children:"exact same"})," database state as any other client."]}),"\n",(0,a.jsx)(t.p,{children:"Implementing a reliable replication protocol is hard because of the circumstances of your app:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Your users have unknown devices."}),"\n",(0,a.jsx)(t.li,{children:"They have an unknown internet speed."}),"\n",(0,a.jsx)(t.li,{children:"They can go offline or online at any time."}),"\n",(0,a.jsx)(t.li,{children:"Clients can be offline for a several days with un-synced changes."}),"\n",(0,a.jsx)(t.li,{children:"You can have many users at the same time."}),"\n",(0,a.jsx)(t.li,{children:"The users can do many database writes at the same time to the same entities."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Now lets say you have a SQL database and one of your users, called Alice, runs a query that mutates some rows, based on a condition."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"# mark all items out of stock as inStock=FALSE\nUPDATE\n  Table_A\nSET\n  Table_A.inStock = FALSE\nFROM\n  Table_A\nWHERE\n  Table_A.amountInStock = 0\n"})}),"\n",(0,a.jsx)(t.p,{children:"At first, the query runs on the local database of Alice and everything is fine."}),"\n",(0,a.jsxs)(t.p,{children:["But at the same time Bob, the other client, updates a row and sets ",(0,a.jsx)(t.code,{children:"amountInStock"})," from ",(0,a.jsx)(t.code,{children:"0"})," to ",(0,a.jsx)(t.code,{children:"1"}),".\nNow Bob's client replicates the changes from Alice and runs them. Bob will end up with a different database state than Alice because on one of the rows, the ",(0,a.jsx)(t.code,{children:"WHERE"})," condition was not met. This is not what we want, so our replication protocol should be able to fix it. For that it has to reduce all mutations into a deterministic state."]}),"\n",(0,a.jsx)(t.p,{children:'Let me loosely describe how "many" SQL replications work:'}),"\n",(0,a.jsxs)(t.p,{children:["Instead of just running all replicated queries, we remember a list of all past queries. When a new query comes in that happened ",(0,a.jsx)(t.code,{children:"before"})," our last query, we roll back the previous queries, run the new query, and then re-execute our own queries on top of that. For that to work, all queries need a timestamp so we can order them correctly. But you cannot rely on the clock that is running at the client. Client side clocks drift, they can run in a different speed or even a malicious client modifies the clock on purpose. So instead of a normal timestamp, we have to use a ",(0,a.jsx)(t.a,{href:"https://jaredforsyth.com/posts/hybrid-logical-clocks/",children:"Hybrid Logical Clock"})," that takes a client generated id and the number of the clients query into account. Our timestamp will then look like ",(0,a.jsx)(t.code,{children:"2021-10-04T15:29.40.273Z-0000-eede1195b7d94dd5"}),". These timestamps can be brought into a deterministic order and each client can run the replicated queries in the same order. Watch ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=iEFcmfmdh2w&t=607s",children:"this video"})," to learn how to implement that."]}),"\n",(0,a.jsx)(t.p,{children:"While this sounds easy and realizable, we have some problems:\nThis kind of replication works great when you replicate between multiple SQL servers. It does not work great when you replicate between a single server and many clients."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"As mentioned above, clients can be offline for a long time which could require us to do many and heavy rollbacks on each client when someone comes back after a long time and replicates the change."}),"\n",(0,a.jsx)(t.li,{children:"We have many clients where many changes can appear and our database would have to roll back many times."}),"\n",(0,a.jsx)(t.li,{children:"During the rollback, the database cannot be used for read queries."}),"\n",(0,a.jsx)(t.li,{children:"It is required that each client downloads and keeps the whole query history."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["With ",(0,a.jsx)(t.strong,{children:"NoSQL"}),", replication works different. A new client downloads all current documents and each time a document changes, that document is downloaded again. Instead of replicating the query that leads to a data change, we just replicate the changed data itself. Of course, we could do the same with SQL and just replicate the affected rows of a query, like WatermelonDB ",(0,a.jsx)(t.a,{href:"https://youtu.be/uFvHURTRLxQ?t=1133",children:"does it"}),". This was a clever way to go for WatermelonDB, because it was initially made for React Native and did want to use the fast SQLite instead of the slow ",(0,a.jsx)(t.a,{href:"https://medium.com/@Sendbird/extreme-optimization-of-asyncstorage-in-react-native-b2a1e0107b34",children:"AsyncStorage"}),". But in a more general view, it defeats the whole purpose of having a replicating relational database because you have transactions locally, but these transactions become ",(0,a.jsx)(t.strong,{children:"meaningless"})," as soon as the data goes through the replication layer."]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./files/database-replication.png",alt:"database replication",width:"200"})}),"\n",(0,a.jsx)(t.h2,{id:"server-side-validation",children:"Server side validation"}),"\n",(0,a.jsx)(t.p,{children:"Whenever there is client-side input, it must be validated on the server.\nOn a NoSQL database, validating a changed document is trivial. The client sends the changed document to the server, and the server can then check if the user was allowed to modify that one document and if the applied changes are ok."}),"\n",(0,a.jsx)(t.p,{children:"Safely validating a SQL query is up to impossible."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You first need a way to parse the query with all this complex SQL syntax and keywords."}),"\n",(0,a.jsx)(t.li,{children:"You have to ensure that the query does not DOS your system."}),"\n",(0,a.jsx)(t.li,{children:"Then you check which rows would be affected when running the query and if the user was allowed to change them"}),"\n",(0,a.jsx)(t.li,{children:"Then you check if the mutation to that rows are valid."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["For simple queries like an insert/update/delete to a single row, this might be doable. But a query with 4 ",(0,a.jsx)(t.code,{children:"LEFT JOIN"})," will be hard."]}),"\n",(0,a.jsx)(t.h2,{id:"event-optimization",children:"Event optimization"}),"\n",(0,a.jsx)(t.p,{children:"With NoSQL databases, each write event always affects exactly one document. This makes it easy to optimize the processing of events at the client. For example instead of handling multiple updates to the same document, when the user comes online again, you could skip everything but the last event."}),"\n",(0,a.jsxs)(t.p,{children:["Similar to that you can optimize observable query results. When you query the ",(0,a.jsx)(t.code,{children:"customers"})," table you get a query result of 10 customers. Now a new customer is added to the table and you want to know how the new query results look like. You could analyze the event and now you know that you only have to add the new customer to the previous results set, instead of running the whole query again. These types of optimizations can be run with all NoSQL queries and even work with ",(0,a.jsx)(t.code,{children:"limit"})," and ",(0,a.jsx)(t.code,{children:"skip"})," operators. In NxDB this all happens in the background with the ",(0,a.jsx)(t.a,{href:"https://github.com/nxpkg/event-reduce",children:"EventReduce algorithm"})," that calculates new query results on incoming changes."]}),"\n",(0,a.jsx)(t.p,{children:"These optimizations do not really work with relational data. A change to one table could affect a query to any other tables. and you could not just calculate the new results based on the event. You would always have to re-run the full query to get the updated results."}),"\n",(0,a.jsx)(t.h2,{id:"migration-without-relations",children:"Migration without relations"}),"\n",(0,a.jsx)(t.p,{children:"Sooner or later you change the layout of your data. You update the schema and you also have to migrate the stored rows/documents. In NoSQL this is often not a big deal because all of your documents are modeled as self containing piece of data. There is an old version of the document and you have a function that transforms it into the new version."}),"\n",(0,a.jsx)(t.p,{children:"With relational data, nothing is self-contained. The relevant data for the migration of a single row could be inside any other table. So when changing the schema, it will be important which table to migrate first and how to orchestrate the migration or relations."}),"\n",(0,a.jsx)(t.p,{children:"On client side applications, this is even harder because the client can close the application at any time and the migration must be able to continue."}),"\n",(0,a.jsx)(t.h2,{id:"everything-can-be-downgraded-to-nosql",children:"Everything can be downgraded to NoSQL"}),"\n",(0,a.jsxs)(t.p,{children:["To use an offline first database in the frontend, you have to make it compatible with your backend APIs.\nMaking software things compatible often means you have to find the ",(0,a.jsx)(t.strong,{children:"lowest common denominator"}),".\nWhen you have SQLite in the frontend and want to replicate it with the backend, the backend also has to use SQLite. You cannot even use PostgreSQL because it has a different SQL dialect and some queries might fail. But you do not want to let the frontend dictate which technologies to use in the backend just to make replication work."]}),"\n",(0,a.jsxs)(t.p,{children:["With NoSQL, you just have documents and writes to these documents. You can build a document based layer on top of everything by ",(0,a.jsx)(t.strong,{children:"removing"})," functionality. It can be built on top of SQL, but also on top of a graph database or even on top of a key-value store like ",(0,a.jsx)(t.a,{href:"/adapters.html#leveldown",children:"levelDB"})," or ",(0,a.jsx)(t.a,{href:"/rx-storage-foundationdb.html",children:"FoundationDB"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["With that document layer you can build a ",(0,a.jsx)(t.a,{href:"/replication.html",children:"replication API"})," that serves documents sorted by the last update time and there you have a realtime replication."]}),"\n",(0,a.jsx)(t.h2,{id:"caching-query-results",children:"Caching query results"}),"\n",(0,a.jsx)(t.p,{children:"Memory is limited and this is especially true for client side applications where you never know how much free RAM the device really has. You want to have a fast realtime UI, so your database must be able to cache query results."}),"\n",(0,a.jsxs)(t.p,{children:["When you run a SQL query like ",(0,a.jsx)(t.code,{children:"SELECT .."})," the result of it can be anything. An ",(0,a.jsx)(t.code,{children:"array"}),", a ",(0,a.jsx)(t.code,{children:"number"}),", a ",(0,a.jsx)(t.code,{children:"string"}),", a single row, it depends on how the query goes on. So the caching strategy can only be to keep the result in memory, once for each query.\nThis scales very bad because the more queries you run, the more results you have to store in memory."]}),"\n",(0,a.jsxs)(t.p,{children:["When you make a query to a NoSQL collection, you always know how the result will look like. It is a list of documents, based on the collection's schema (if you have one). The result set is stored in memory, but because you get similar documents for different queries to the same collection, we can de-duplicated the documents. So when multiple queries return the same document, we only have it in the cache ",(0,a.jsx)(t.strong,{children:"once"})," and each query caches point to the same memory object. So no matter how many queries you make, your cache maximum is the collection size."]}),"\n",(0,a.jsx)(t.h2,{id:"typescript-support",children:"TypeScript support"}),"\n",(0,a.jsx)(t.p,{children:"Modern web apps are build with TypeScript and you want the transpiler to know the types of your query result so it can give you build time errors when something does not match. This is quite easy on document based systems. The typings of for each document of a collection can be generated from the schema, and all queries to that collection will always return the given document type. With SQL you have to manually write the typings for each query by hand because it can contain all these aggregate functions that affect the type of the query's result."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./files/typescript.png",alt:"typescript",width:"80"})}),"\n",(0,a.jsx)(t.h2,{id:"what-you-lose-with-nosql",children:"What you lose with NoSQL"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You can not run relational queries across tables inside a single transaction."}),"\n",(0,a.jsxs)(t.li,{children:["You can not mutate documents based on a ",(0,a.jsx)(t.code,{children:"WHERE"})," clause, in a single transaction."]}),"\n",(0,a.jsx)(t.li,{children:"You need to resolve replication conflicts on a per-document basis."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"but-there-is-database-xy",children:"But there is database XY"}),"\n",(0,a.jsx)(t.p,{children:"Yes, there are SQL databases out there that run on the client side or have replication, but not both."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["WebSQL / ",(0,a.jsx)(t.a,{href:"https://github.com/sql-js/sql.js/",children:"sql.js"}),": In the past there was ",(0,a.jsx)(t.strong,{children:"WebSQL"})," in the browser. It was a direct mapping to SQLite because all browsers used the SQLite implementation. You could store relational data in it, but there was no concept of replication at any point in time. ",(0,a.jsx)(t.strong,{children:"sql.js"})," is an SQLite complied to JavaScript. It has not replication and it has (for now) no persistent storage, everything is stored in memory."]}),"\n",(0,a.jsx)(t.li,{children:"WatermelonDB is a SQL databases that runs in the client. WatermelonDB uses a document-based replication that is not able to replicate relational queries."}),"\n",(0,a.jsx)(t.li,{children:"Cockroach / Spanner/ PostgreSQL etc. are SQL databases with replication. But they run on servers, not on clients, so they can make different trade offs."}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"further-read",children:"Further read"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Cockroach Labs: ",(0,a.jsx)(t.a,{href:"https://www.cockroachlabs.com/blog/living-without-atomic-clocks/",children:"Living Without Atomic Clocks"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/transactions-conflicts-revisions.html",children:"Transactions, Conflicts and Revisions in NxDB"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://dbmsmusings.blogspot.com/2015/10/why-mongodb-cassandra-hbase-dynamodb_28.html",children:"Why MongoDB, Cassandra, HBase, DynamoDB, and Riak will only let you perform transactions on a single data item"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"Make a PR to this file if you have more interesting links to that topic"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);