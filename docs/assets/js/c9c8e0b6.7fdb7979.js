"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[7249],{7674:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(4848),n=a(8453);const r={title:"Ionic Storage - NxDB as database for hybrid apps",slug:"ionic-database.html"},s="Ionic Storage - NxDB as database for hybrid apps",o={id:"articles/ionic-database",title:"Ionic Storage - NxDB as database for hybrid apps",description:"In the fast-paced world of mobile app development, hybrid applications have emerged as a versatile solution, offering the best of both worlds - the web and native app experiences. One key challenge these apps face is efficiently storing and querying data on the client's device. Enter NxDB, a powerful client-side database tailored for ionic hybrid applications. In this article, we'll explore how NxDB addresses the requirements of storing and querying data in ionic apps, and why it stands out as a preferred choice.",source:"@site/docs/articles/ionic-database.md",sourceDirName:"articles",slug:"/articles/ionic-database.html",permalink:"/articles/ionic-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Ionic Storage - NxDB as database for hybrid apps",slug:"ionic-database.html"},sidebar:"tutorialSidebar",previous:{title:"NxDB as In-memory NoSQL Database - Empowering Real-Time Applications",permalink:"/articles/in-memory-nosql-database.html"},next:{title:"NxDB - JSON Database for JavaScript",permalink:"/articles/json-database.html"}},l={},c=[{value:"What are Ionic Hybrid Apps?",id:"what-are-ionic-hybrid-apps",level:2},{value:"Storing and Querying Data in an Ionic App",id:"storing-and-querying-data-in-an-ionic-app",level:2},{value:"Introducing NxDB as a Client-Side Database for Ionic Apps",id:"introducing-nxdb-as-a-client-side-database-for-ionic-apps",level:2},{value:"Getting Started with NxDB",id:"getting-started-with-nxdb",level:3},{value:"What is NxDB?",id:"what-is-nxdb",level:3},{value:"Local-First Approach",id:"local-first-approach",level:3},{value:"Observable Queries",id:"observable-queries",level:3},{value:"NoSQL Query Engine",id:"nosql-query-engine",level:3},{value:"Great Observe Performance with EventReduce",id:"great-observe-performance-with-eventreduce",level:3},{value:"Why NoSQL is a Better Fit for Client-Side Applications Compared to relational databases like SQLite",id:"why-nosql-is-a-better-fit-for-client-side-applications-compared-to-relational-databases-like-sqlite",level:2},{value:"Easier Document-Based Replication",id:"easier-document-based-replication",level:3},{value:"Offline Capable",id:"offline-capable",level:3},{value:"NoSQL Has Better TypeScript Support",id:"nosql-has-better-typescript-support",level:3},{value:"Easier Schema Migration with NoSQL Documents",id:"easier-schema-migration-with-nosql-documents",level:3},{value:"Great Performance",id:"great-performance",level:2},{value:"Using NxDB in an Ionic Hybrid App",id:"using-nxdb-in-an-ionic-hybrid-app",level:2},{value:"Setup NxDB",id:"setup-nxdb",level:3},{value:"Using NxDB in Frameworks (React, Angular, Vue.js)",id:"using-nxdb-in-frameworks-react-angular-vuejs",level:3},{value:"Different RxStorage Layers for NxDB",id:"different-rxstorage-layers-for-nxdb",level:3},{value:"Replication of Data with NxDB between Clients and Servers",id:"replication-of-data-with-nxdb-between-clients-and-servers",level:2},{value:"NxDB Replication Algorithm",id:"nxdb-replication-algorithm",level:3},{value:"NxDB as an Alternative for Ionic Secure Storage",id:"nxdb-as-an-alternative-for-ionic-secure-storage",level:2},{value:"NxDB On-Device Encryption Plugin",id:"nxdb-on-device-encryption-plugin",level:3},{value:"Works Offline",id:"works-offline",level:3},{value:"Easy-to-Setup Replication with Your Backend",id:"easy-to-setup-replication-with-your-backend",level:3},{value:"Compression of Client-Side Stored Data",id:"compression-of-client-side-stored-data",level:3},{value:"Cost-Effective Solution",id:"cost-effective-solution",level:3},{value:"Follow Up",id:"follow-up",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"ionic-storage---nxdb-as-database-for-hybrid-apps",children:"Ionic Storage - NxDB as database for hybrid apps"}),"\n",(0,t.jsxs)(i.p,{children:["In the fast-paced world of mobile app development, ",(0,t.jsx)(i.strong,{children:"hybrid applications"})," have emerged as a versatile solution, offering the best of both worlds - the web and native app experiences. One key challenge these apps face is efficiently storing and querying data on the ",(0,t.jsx)(i.strong,{children:"client's device"}),". Enter ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/",children:"NxDB"}),", a powerful client-side database tailored for ionic hybrid applications. In this article, we'll explore how NxDB addresses the requirements of storing and querying data in ionic apps, and why it stands out as a preferred choice."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://nxpkg.github.io/nxdb/",children:(0,t.jsx)("img",{src:"../files/icons/ionic.svg",alt:"Ionic Database Storage",width:"120"})})}),"\n",(0,t.jsx)(i.h2,{id:"what-are-ionic-hybrid-apps",children:"What are Ionic Hybrid Apps?"}),"\n",(0,t.jsx)(i.p,{children:"Ionic (aka Ionic 2 ) hybrid apps combine the strengths of web technologies (HTML, CSS, JavaScript) with native app development to deliver cross-platform applications. They are built using web technologies and then wrapped in a native container to be deployed on various platforms like iOS, Android, and the web. These apps provide a consistent user experience across devices while benefiting from the efficiency and familiarity of web development."}),"\n",(0,t.jsx)(i.h2,{id:"storing-and-querying-data-in-an-ionic-app",children:"Storing and Querying Data in an Ionic App"}),"\n",(0,t.jsx)(i.p,{children:"Storing and querying data is a fundamental aspect of any application, including hybrid apps. These apps often need to operate offline, store user-generated content, and provide responsive user interfaces. Therefore, having a reliable and efficient way to manage data on the client's device is crucial."}),"\n",(0,t.jsx)(i.h2,{id:"introducing-nxdb-as-a-client-side-database-for-ionic-apps",children:"Introducing NxDB as a Client-Side Database for Ionic Apps"}),"\n",(0,t.jsx)(i.p,{children:"NxDB steps in as a powerful solution to address the data management needs of ionic hybrid apps. It's a NoSQL client-side database that offers exceptional performance and features tailored to the unique requirements of client-side applications. Let's delve into the key features of NxDB that make it a great fit for these apps."}),"\n",(0,t.jsx)(i.h3,{id:"getting-started-with-nxdb",children:"Getting Started with NxDB"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://nxpkg.github.io/nxdb/",children:(0,t.jsx)("img",{src:"../files/logo/nxdb_javascript_database.svg",alt:"JavaScript Ionic Database Storage",width:"220"})})}),"\n",(0,t.jsx)(i.h3,{id:"what-is-nxdb",children:"What is NxDB?"}),"\n",(0,t.jsxs)(i.p,{children:["At its core, ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/",children:"NxDB"})," is a ",(0,t.jsx)(i.strong,{children:"NoSQL"})," database that operates with a ",(0,t.jsx)(i.a,{href:"/offline-first.html",children:"local-first"})," approach. This means that your app's data is stored and processed primarily on the client's device, reducing the dependency on constant network connectivity. By doing so, NxDB ensures your app remains responsive and functional, even when offline."]}),"\n",(0,t.jsx)(i.h3,{id:"local-first-approach",children:"Local-First Approach"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/offline-first.html",children:"local-first"})," approach adopted by NxDB is a game-changer for hybrid applications. Storing data locally allows your app to function seamlessly without an internet connection, providing users with uninterrupted access to their data. When connectivity is restored, NxDB handles the synchronization of data, ensuring that any changes made offline are appropriately propagated."]}),"\n",(0,t.jsx)(i.h3,{id:"observable-queries",children:"Observable Queries"}),"\n",(0,t.jsx)(i.p,{children:"One of NxDB's standout features is its implementation of observable queries. This concept allows your app's user interface to be dynamically updated in real time as data changes within the database. NxDB's observables create a bridge between your database and user interface, keeping them in sync effortlessly."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,t.jsx)(i.h3,{id:"nosql-query-engine",children:"NoSQL Query Engine"}),"\n",(0,t.jsx)(i.p,{children:"NxDB's NoSQL query engine empowers you to perform powerful queries on your app's data, without the constraints imposed by traditional relational databases. This flexibility is particularly valuable when dealing with unstructured or semi-structured data. With the NoSQL query engine, you can retrieve, filter, and manipulate data according to your app's unique requirements."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"const foundDocuments = await myDatabase.todos.find({\n    selector: {\n        done: {\n            $eq: false\n        }\n    }\n}).exec();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"great-observe-performance-with-eventreduce",children:"Great Observe Performance with EventReduce"}),"\n",(0,t.jsxs)(i.p,{children:["NxDB introduces a concept called ",(0,t.jsx)(i.a,{href:"https://github.com/nxpkg/event-reduce",children:"EventReduce"}),", which optimizes the observation process. Instead of overwhelming your app's UI with every data change, EventReduce filters and batches these changes to provide a smooth and efficient experience. This leads to enhanced app performance, lower resource usage, and ultimately, happier users."]}),"\n",(0,t.jsx)(i.h2,{id:"why-nosql-is-a-better-fit-for-client-side-applications-compared-to-relational-databases-like-sqlite",children:"Why NoSQL is a Better Fit for Client-Side Applications Compared to relational databases like SQLite"}),"\n",(0,t.jsx)(i.p,{children:"When it comes to choosing the right database solution for your client-side applications, NoSQL NxDB presents compelling advantages over traditional options like SQLite. Let's delve into the key reasons why NoSQL NxDB is a superior fit for your ionic hybrid app development."}),"\n",(0,t.jsx)(i.h3,{id:"easier-document-based-replication",children:"Easier Document-Based Replication"}),"\n",(0,t.jsxs)(i.p,{children:["NoSQL databases, like NxDB, inherently embrace a document-based approach to data storage. This design choice simplifies data ",(0,t.jsx)(i.a,{href:"/replication.html",children:"replication"})," between clients and servers. With documents representing discrete units of data, you can easily synchronize individual pieces of information without the complexity that can arise when dealing with rows and tables in a relational database like SQLite. This document-centric replication model streamlines the synchronization process and ensures that your app's data remains consistent across devices."]}),"\n",(0,t.jsx)(i.h3,{id:"offline-capable",children:"Offline Capable"}),"\n",(0,t.jsx)(i.p,{children:"One of the defining features of client-side applications is the ability to function even when offline. NoSQL NxDB excels in this area by supporting a local-first approach. Data is cached on the client's device, enabling the app to remain fully functional even without an internet connection. As connectivity is restored, NxDB handles data synchronization with the server seamlessly. This offline capability ensures a smooth user experience, critical for ionic hybrid apps catering to users in various network conditions."}),"\n",(0,t.jsx)(i.h3,{id:"nosql-has-better-typescript-support",children:"NoSQL Has Better TypeScript Support"}),"\n",(0,t.jsxs)(i.p,{children:["TypeScript, a popular superset of JavaScript, is renowned for its static typing and enhanced developer experience. NoSQL databases like NxDB are inherently flexible, making them well-suited for TypeScript integration. With well-defined data structures and clear typings, NoSQL NxDB offers ",(0,t.jsx)(i.a,{href:"/tutorials/typescript.html",children:"improved type safety"})," and easier development when compared to traditional SQL databases like SQLite. This results in reduced debugging time and increased code reliability."]}),"\n",(0,t.jsxs)(i.h3,{id:"easier-schema-migration-with-nosql-documents",children:["Easier ",(0,t.jsx)(i.a,{href:"/migration-schema.html",children:"Schema Migration"})," with NoSQL Documents"]}),"\n",(0,t.jsx)(i.p,{children:"Schema changes are a common occurrence in application development, and dealing with them can be challenging. NoSQL databases, including NxDB, are more forgiving in this aspect. Since documents in NoSQL databases don't enforce a rigid structure like tables in relational databases, schema changes are often simpler to manage. This flexibility makes it easier to evolve your app's data structure over time without the need for complex migration scripts, a notable advantage when compared to SQLite."}),"\n",(0,t.jsx)(i.h2,{id:"great-performance",children:"Great Performance"}),"\n",(0,t.jsxs)(i.p,{children:["NxDB's ",(0,t.jsx)(i.a,{href:"/rx-storage-performance.html",children:"excellent performance"})," stems from its advanced indexing capabilities, which streamline data retrieval and ensure swift query execution. Additionally, the ",(0,t.jsx)(i.a,{href:"/key-compression.html",children:"JSON key compression"})," employed by NxDB minimizes storage overhead, enabling efficient data transfer and quicker loading times. The incorporation of real-time updates through change streams and the ",(0,t.jsx)(i.strong,{children:"EventReduce mechanism"})," further enhances NxDB's performance, delivering a responsive user experience even as data changes are propagated seamlessly."]}),"\n",(0,t.jsx)(i.h2,{id:"using-nxdb-in-an-ionic-hybrid-app",children:"Using NxDB in an Ionic Hybrid App"}),"\n",(0,t.jsx)(i.p,{children:"NxDB's integration into your ionic hybrid app opens up a world of possibilities for efficient data management. Let's explore how to set up NxDB, use it with popular JavaScript frameworks, and take advantage of its diverse storage options."}),"\n",(0,t.jsx)(i.h3,{id:"setup-nxdb",children:"Setup NxDB"}),"\n",(0,t.jsxs)(i.p,{children:["Getting started with NxDB is a straightforward process. By including the NxDB library in your project, you can quickly start harnessing its capabilities. Begin by installing the ",(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/nxdb",children:"NxDB package"})," from the npm registry. Then, configure your database instance to suit your app's needs. This setup process paves the way for seamless data management in your ionic hybrid app.\nFor a full instruction, follow the ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/quickstart.html",children:"NxDB Quickstart"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"using-nxdb-in-frameworks-react-angular-vuejs",children:"Using NxDB in Frameworks (React, Angular, Vue.js)"}),"\n",(0,t.jsxs)(i.p,{children:["NxDB seamlessly integrates with various JavaScript frameworks, ensuring compatibility with your preferred development environment. Whether you're building your ionic hybrid app with ",(0,t.jsx)(i.a,{href:"/articles/react-database.html",children:"React"}),", ",(0,t.jsx)(i.a,{href:"/articles/angular-database.html",children:"Angular"}),", or ",(0,t.jsx)(i.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples/vue",children:"Vue.js"}),", NxDB offers bindings and tools that enable you to leverage its features effortlessly. This compatibility allows you to stay within the comfort zone of your chosen framework while benefiting from NxDB's powerful data management capabilities."]}),"\n",(0,t.jsx)(i.h3,{id:"different-rxstorage-layers-for-nxdb",children:"Different RxStorage Layers for NxDB"}),"\n",(0,t.jsx)(i.p,{children:"NxDB doesn't limit you to a single storage solution. Instead, it provides a range of RxStorage layers to accommodate diverse use cases. These storage layers offer flexibility and customization, enabling you to tailor your data management strategy to match your app's requirements. Let's explore some of the available RxStorage options:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"}),": Dexie.js is a popular JavaScript library for indexedDB, and NxDB offers a compatible RxStorage layer. This option leverages indexedDB's capabilities to provide efficient data storage and retrieval."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/rx-storage-lokijs.html",children:"LokiJS RxStorage"}),": LokiJS RxStorage integrates the LokiJS database with NxDB, giving you access to another powerful NoSQL database solution. LokiJS is known for its in-memory storage capabilities and ease of use."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),": Leveraging the native browser storage, IndexedDB RxStorage offers reliable data persistence. This storage option is suitable for a wide range of scenarios and is supported by most modern browsers."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/rx-storage-opfs.html",children:"OPFS RxStorage"}),": Operating within the browser's file system, OPFS RxStorage is a unique choice that can handle larger data volumes efficiently. It's particularly useful for applications that require substantial data storage."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"}),": Memory RxStorage is perfect for temporary or cache-like data storage. It keeps data in memory, which can result in rapid data access but doesn't provide long-term persistence."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"}),": SQLite is the goto database for mobile applications. It is build in on android and iOS devices. The SQLite NxDB storage layer is build upon SQLite and offers the best performance on hybrid apps, like ionic."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"replication-of-data-with-nxdb-between-clients-and-servers",children:"Replication of Data with NxDB between Clients and Servers"}),"\n",(0,t.jsx)(i.p,{children:"Efficient data replication between clients and servers is the backbone of modern application development, ensuring that data remains consistent and up-to-date across various devices and platforms. NxDB provides a suite of replication methods that facilitate seamless communication between clients and servers, ensuring that your data is always in sync."}),"\n",(0,t.jsx)(i.h3,{id:"nxdb-replication-algorithm",children:"NxDB Replication Algorithm"}),"\n",(0,t.jsxs)(i.p,{children:["At the heart of NxDB's replication capabilities lies a sophisticated ",(0,t.jsx)(i.a,{href:"/replication.html",children:"algorithm"})," designed to manage data synchronization between clients and servers. This algorithm intelligently handles data changes, conflict resolution, and network connectivity fluctuations, resulting in reliable and efficient data replication. With the NxDB replication algorithm, your application can maintain data consistency across devices without unnecessary complexities."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/replication-couchdb.html",children:"CouchDB Replication"}),":\nNxDB's integration with CouchDB replication presents a powerful way to synchronize data between clients and servers. CouchDB, a well-established NoSQL database, excels at distributed and decentralized data scenarios. By utilizing NxDB's CouchDB replication, you can establish bidirectional synchronization between your NxDB-powered client and a CouchDB server. This synchronization ensures that data updates made on either end are seamlessly propagated to the other, facilitating collaboration and data sharing."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/replication-firestore.html",children:"Firestore Replication"}),":\nFirestore, Google's cloud-hosted NoSQL database, offers another avenue for data replication in NxDB. With Firestore replication, you can establish a connection between your NxDB-powered app and Firestore's cloud infrastructure. This integration provides real-time updates to data across multiple instances of your application, ensuring that users always have access to the latest information. NxDB's support for Firestore replication empowers you to build dynamic and responsive applications that thrive in today's fast-paced digital landscape."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/replication-webrtc.html",children:"WebRTC Replication"}),":\nPeer-to-peer (P2P) replication via WebRTC introduces a cutting-edge approach to data synchronization in NxDB. P2P replication allows devices to communicate directly with each other, bypassing the need for a central server. This method proves invaluable in scenarios where network connectivity is limited or unreliable. With WebRTC replication, devices can exchange data directly, enabling collaboration and information sharing even in challenging network conditions."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"nxdb-as-an-alternative-for-ionic-secure-storage",children:"NxDB as an Alternative for Ionic Secure Storage"}),"\n",(0,t.jsx)(i.p,{children:"When it comes to securing sensitive data in your Ionic applications, NxDB emerges as a powerful alternative to traditional secure storage solutions. Let's delve into why NxDB is an exceptional choice for safeguarding your data while providing additional benefits."}),"\n",(0,t.jsx)(i.h3,{id:"nxdb-on-device-encryption-plugin",children:"NxDB On-Device Encryption Plugin"}),"\n",(0,t.jsxs)(i.p,{children:["NxDB offers an ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/encryption.html",children:"on-device encryption plugin"}),", adding an extra layer of security to your app's data. This means that data stored within the NxDB database can be encrypted, ensuring that even if the device falls into the wrong hands, the sensitive information remains inaccessible without the proper decryption key. This level of data protection is crucial for applications that deal with personal or confidential information. Encryption runs either with ",(0,t.jsx)(i.code,{children:"AES"})," on ",(0,t.jsx)(i.code,{children:"crypto-js"})," or with the ",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",children:"Web Crypto API"})," which is faster and more secure."]}),"\n",(0,t.jsx)(i.h3,{id:"works-offline",children:"Works Offline"}),"\n",(0,t.jsx)(i.p,{children:"Security should never compromise functionality. NxDB excels in this area by allowing your application to operate seamlessly even when offline. The locally stored encrypted data remains accessible and functional, enabling users to interact with the app's features even without an active internet connection. This offline capability ensures that user data is secure, while the app continues to deliver a responsive and uninterrupted experience."}),"\n",(0,t.jsx)(i.h3,{id:"easy-to-setup-replication-with-your-backend",children:"Easy-to-Setup Replication with Your Backend"}),"\n",(0,t.jsx)(i.p,{children:"Ensuring data consistency between your client-side application and backend is a key concern for developers. NxDB simplifies this process with its straightforward replication setup. You can effortlessly configure data synchronization between your local NxDB instance and your backend server. This replication capability ensures that encrypted data remains up-to-date and aligned with the central database, enhancing data integrity and security."}),"\n",(0,t.jsx)(i.h3,{id:"compression-of-client-side-stored-data",children:"Compression of Client-Side Stored Data"}),"\n",(0,t.jsxs)(i.p,{children:["In addition to security and offline capabilities, NxDB also offers ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/key-compression.html",children:"data compression"}),". This means that the data stored on the client's device is efficiently compressed, reducing storage requirements and improving overall app performance. This compression ensures that your app remains responsive and efficient, even as data volumes grow."]}),"\n",(0,t.jsx)(i.h3,{id:"cost-effective-solution",children:"Cost-Effective Solution"}),"\n",(0,t.jsxs)(i.p,{children:["In addition to its security features, NxDB offers cost-effective benefits. NxDB is ",(0,t.jsx)(i.a,{href:"/premium",children:"priced more affordably"})," compared to some other secure storage solutions, making it an attractive option for developers seeking robust security without breaking the bank. For many users, the free version of NxDB provides ample features to meet their application's security and data management needs."]}),"\n",(0,t.jsx)(i.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Try out the ",(0,t.jsx)(i.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples/ionic2",children:"NxDB ionic example project"})]}),"\n",(0,t.jsxs)(i.li,{children:["Try out the ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/quickstart.html",children:"NxDB Quickstart"})]}),"\n",(0,t.jsxs)(i.li,{children:["Join the ",(0,t.jsx)(i.a,{href:"https://nxpkg.github.io/nxdb/chat",children:"NxDB Chat"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,a)=>{a.d(i,{R:()=>s,x:()=>o});var t=a(6540);const n={},r=t.createContext(n);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);