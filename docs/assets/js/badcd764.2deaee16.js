"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[8318],{6042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(4848),n=a(8453);const r={title:"NxDB as a Database in a Flutter Application",slug:"flutter-database.html"},s="NxDB as a Database in a Flutter Application",o={id:"articles/flutter-database",title:"NxDB as a Database in a Flutter Application",description:"In the world of mobile application development, Flutter has gained significant popularity due to its cross-platform capabilities and rich UI framework. When it comes to building feature-rich Flutter applications, the choice of a robust and efficient database is crucial. In this article, we will explore NxDB as a database solution for Flutter applications. We'll delve into the core features of NxDB, its benefits over other database options, and how to integrate it into a Flutter app.",source:"@site/docs/articles/flutter-database.md",sourceDirName:"articles",slug:"/articles/flutter-database.html",permalink:"/articles/flutter-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NxDB as a Database in a Flutter Application",slug:"flutter-database.html"},sidebar:"tutorialSidebar",previous:{title:"Using NxDB as an Embedded Database",permalink:"/articles/embedded-database.html"},next:{title:"NxDB JavaScript Frontend Database - Efficient Data Storage in Frontend Applications",permalink:"/articles/frontend-database.html"}},l={},c=[{value:"Overview of Flutter Mobile Applications",id:"overview-of-flutter-mobile-applications",level:3},{value:"Importance of Databases in Flutter Applications",id:"importance-of-databases-in-flutter-applications",level:3},{value:"Introducing NxDB as a Database Solution",id:"introducing-nxdb-as-a-database-solution",level:3},{value:"Getting Started with NxDB",id:"getting-started-with-nxdb",level:2},{value:"What is NxDB?",id:"what-is-nxdb",level:3},{value:"Reactive Data Handling",id:"reactive-data-handling",level:3},{value:"Offline-First Approach",id:"offline-first-approach",level:3},{value:"Data Replication",id:"data-replication",level:3},{value:"Observable Queries",id:"observable-queries",level:3},{value:"NxDB vs. Other Flutter Database Options",id:"nxdb-vs-other-flutter-database-options",level:3},{value:"Using NxDB in a Flutter Application",id:"using-nxdb-in-a-flutter-application",level:2},{value:"How NxDB can run in Flutter",id:"how-nxdb-can-run-in-flutter",level:2},{value:"Different RxStorage layers for NxDB",id:"different-rxstorage-layers-for-nxdb",level:3},{value:"Synchronizing Data with NxDB between Clients and Servers",id:"synchronizing-data-with-nxdb-between-clients-and-servers",level:2},{value:"Offline-First Approach",id:"offline-first-approach-1",level:3},{value:"NxDB Replication Plugins",id:"nxdb-replication-plugins",level:3},{value:"Advanced NxDB Features and Techniques",id:"advanced-nxdb-features-and-techniques",level:2},{value:"Indexing and Performance Optimization",id:"indexing-and-performance-optimization",level:3},{value:"Encryption of Local Data",id:"encryption-of-local-data",level:3},{value:"Change Streams and Event Handling",id:"change-streams-and-event-handling",level:3},{value:"JSON Key Compression",id:"json-key-compression",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"nxdb-as-a-database-in-a-flutter-application",children:"NxDB as a Database in a Flutter Application"}),"\n",(0,i.jsxs)(t.p,{children:["In the world of mobile application development, Flutter has gained significant popularity due to its cross-platform capabilities and rich UI framework. When it comes to building feature-rich Flutter applications, the choice of a robust and efficient database is crucial. In this article, we will explore ",(0,i.jsx)(t.a,{href:"https://nxpkg.github.io/nxdb/",children:"NxDB"})," as a database solution for Flutter applications. We'll delve into the core features of NxDB, its benefits over other database options, and how to integrate it into a Flutter app."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["You can find the source code for an example NxDB Flutter Application ",(0,i.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples/flutter",children:"at the github repo"})]})}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("a",{href:"https://nxpkg.github.io/nxdb/",children:(0,i.jsx)("img",{src:"../files/logo/nxdb_javascript_database.svg",alt:"NxDB Flutter Database",width:"220"})})}),"\n",(0,i.jsx)(t.h3,{id:"overview-of-flutter-mobile-applications",children:"Overview of Flutter Mobile Applications"}),"\n",(0,i.jsxs)(t.p,{children:["Flutter is an open-source UI software development kit created by Google that allows developers to build high-performance ",(0,i.jsx)(t.a,{href:"/articles/mobile-database.html",children:"mobile"})," applications for iOS and Android platforms using a single codebase. Flutter's framework provides a wide range of widgets and tools that enable developers to create visually appealing and responsive applications."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:"../files/icons/flutter.svg",alt:"Flutter",width:"60"})}),"\n",(0,i.jsx)(t.h3,{id:"importance-of-databases-in-flutter-applications",children:"Importance of Databases in Flutter Applications"}),"\n",(0,i.jsx)(t.p,{children:"Databases play a vital role in Flutter applications by providing a persistent and reliable storage solution for storing and retrieving data. Whether it's user profiles, app settings, or complex data structures, a database helps in efficiently managing and organizing the application's data. Choosing the right database for a Flutter application can significantly impact the performance, scalability, and user experience of the app."}),"\n",(0,i.jsx)(t.h3,{id:"introducing-nxdb-as-a-database-solution",children:"Introducing NxDB as a Database Solution"}),"\n",(0,i.jsx)(t.p,{children:"NxDB is a powerful NoSQL database solution that is designed to work seamlessly with JavaScript-based frameworks, such as Flutter. It stands for Reactive Database and offers a variety of features that make it an excellent choice for building Flutter applications. NxDB combines the simplicity of JavaScript's document-based database model with the reactive programming paradigm, enabling developers to build real-time and offline-first applications with ease."}),"\n",(0,i.jsx)(t.h2,{id:"getting-started-with-nxdb",children:"Getting Started with NxDB"}),"\n",(0,i.jsx)(t.p,{children:"To understand how NxDB can be utilized in a Flutter application, let's explore its core features and advantages."}),"\n",(0,i.jsx)(t.h3,{id:"what-is-nxdb",children:"What is NxDB?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://nxpkg.github.io/nxdb/",children:"NxDB"})," is a client-side database built on top of IndexedDB, which is a low-level ",(0,i.jsx)(t.a,{href:"/articles/browser-database.html",children:"browser-based database"})," API. It provides a simple and intuitive API for performing CRUD operations (Create, Read, Update, Delete) on documents. NxDB's underlying architecture allows for efficient handling of data synchronization between multiple clients and servers."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("a",{href:"https://nxpkg.github.io/nxdb/",children:(0,i.jsx)("img",{src:"../files/logo/nxdb_javascript_database.svg",alt:"NxDB Flutter Database",width:"220"})})}),"\n",(0,i.jsx)(t.h3,{id:"reactive-data-handling",children:"Reactive Data Handling"}),"\n",(0,i.jsx)(t.p,{children:"One of the key strengths of NxDB is its reactive data handling. It leverages the power of Observables, a concept from reactive programming, to automatically update the UI in response to data changes. With NxDB, developers can define queries and subscribe to their results, ensuring that the UI is always in sync with the database."}),"\n",(0,i.jsx)(t.h3,{id:"offline-first-approach",children:"Offline-First Approach"}),"\n",(0,i.jsx)(t.p,{children:"NxDB follows an offline-first approach, making it ideal for building Flutter applications that need to function even without an internet connection. It allows data to be stored locally and seamlessly synchronizes it with the server when a connection is available. This ensures that users can access and interact with their data regardless of network availability."}),"\n",(0,i.jsx)(t.h3,{id:"data-replication",children:"Data Replication"}),"\n",(0,i.jsx)(t.p,{children:"Data replication is a critical aspect of building distributed applications. NxDB provides robust replication capabilities that enable synchronization of data between different clients and servers. With its replication plugins, NxDB simplifies the process of setting up real-time data synchronization, ensuring consistency across all connected devices."}),"\n",(0,i.jsx)(t.h3,{id:"observable-queries",children:"Observable Queries"}),"\n",(0,i.jsx)(t.p,{children:"NxDB introduces the concept of observable queries, which are queries that automatically update when the underlying data changes. This feature is particularly useful for keeping the UI up to date with the latest data. By subscribing to an observable query, developers can receive real-time updates and reflect them in the user interface without manual intervention."}),"\n",(0,i.jsx)(t.h3,{id:"nxdb-vs-other-flutter-database-options",children:"NxDB vs. Other Flutter Database Options"}),"\n",(0,i.jsx)(t.p,{children:"When considering database options for Flutter applications, developers often come across alternatives such as SQLite or LokiJS. While these databases have their merits, NxDB offers several advantages over them. NxDB's seamless integration with Flutter, its offline-first approach, reactive data handling, and built-in data replication make it a compelling choice for building feature-rich and scalable Flutter applications."}),"\n",(0,i.jsx)(t.h2,{id:"using-nxdb-in-a-flutter-application",children:"Using NxDB in a Flutter Application"}),"\n",(0,i.jsx)(t.p,{children:"Now that we understand the core features of NxDB, let's explore how to integrate it into a Flutter application."}),"\n",(0,i.jsx)(t.h2,{id:"how-nxdb-can-run-in-flutter",children:"How NxDB can run in Flutter"}),"\n",(0,i.jsxs)(t.p,{children:["NxDB is written in TypeScript and compiled to JavaScript. To run it in a Flutter application, the ",(0,i.jsx)(t.code,{children:"flutter_qjs"})," library is used to spawn a QuickJS JavaScript runtime. NxDB itself runs in that runtime and communicates with the flutter dart runtime. To store data persistent, the ",(0,i.jsx)(t.a,{href:"/rx-storage-lokijs.html",children:"LokiJS RxStorage"})," is used together with a custom storage adapter that persists the database inside of the ",(0,i.jsx)(t.code,{children:"shared_preferences"})," data."]}),"\n",(0,i.jsx)(t.p,{children:"To use NxDB, you have to create a compatible JavaScript file that creates your RxDatabase and starts some connectors which are used by Flutter to communicate with the JavaScript NxDB database via setFlutterRxDatabaseConnector()."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import {\n    createRxDatabase\n} from 'nxdb';\nimport {\n    getRxStorageLoki\n} from 'nxdb/plugins/storage-lokijs';\nimport {\n    setFlutterRxDatabaseConnector,\n    getLokijsAdapterFlutter\n} from 'nxdb/plugins/flutter';\n\n// do all database creation stuff in this method.\nasync function createDB(databaseName) {\n    // create the RxDatabase\n    const db = await createRxDatabase({\n        // the database.name is variable so we can change it on the flutter side\n        name: databaseName,\n        storage: getRxStorageLoki({\n            adapter: getLokijsAdapterFlutter()\n        }),\n        multiInstance: false\n    });\n    await db.addCollections({\n        heroes: {\n            schema: {\n                version: 0,\n                primaryKey: 'id',\n                type: 'object',\n                properties: {\n                    id: {\n                        type: 'string',\n                        maxLength: 100\n                    },\n                    name: {\n                        type: 'string',\n                        maxLength: 100\n                    },\n                    color: {\n                        type: 'string',\n                        maxLength: 30\n                    }\n                },\n                indexes: ['name'],\n                required: ['id', 'name', 'color']\n            }\n        }\n    });\n    return db;\n}\n\n// start the connector so that flutter can communicate with the JavaScript process\nsetFlutterRxDatabaseConnector(\n    createDB\n);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Before you can use the JavaScript code, you have to bundle it into a single .js file. In this example we do that with webpack in a npm script here which bundles everything into the ",(0,i.jsx)(t.code,{children:"javascript/dist/index.js"})," file."]}),"\n",(0,i.jsx)(t.p,{children:"To allow Flutter to access that file during runtime, add it to the assets inside of your pubspec.yaml:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"flutter:\n  assets:\n    - javascript/dist/index.js\n"})}),"\n",(0,i.jsx)(t.p,{children:"Also you need to install NxDB in your flutter part of the application. First you have to use the nxdb dart package as a flutter dependency. Currently the package is not published at the dart pub.dev. Instead you have to install it from the local filesystem inside of your NxDB npm installation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"# inside of pubspec.yaml\ndependencies:\n  nxdb:\n    path: path/to/your/node_modules/nxdb/src/plugins/flutter/dart\n"})}),"\n",(0,i.jsx)(t.p,{children:"Afterwards you can import the nxdb library in your dart code and connect to the JavaScript process from there. For reference, check out the lib/main.dart file."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:'import \'package:nxdb/nxdb.dart\';\n\n// start the javascript process and connect to the database\nRxDatabase database = await getRxDatabase("javascript/dist/index.js", databaseName);\n\n// get a collection\nRxCollection collection = database.getCollection(\'heroes\');\n\n// insert a document\nRxDocument document = await collection.insert({\n    "id": "zflutter-${DateTime.now()}",\n    "name": nameController.text,\n    "color": colorController.text\n});\n\n// create a query\nRxQuery<RxHeroDocType> query = RxDatabaseState.collection.find();\n\n// create list to store query results\nList<RxDocument<RxHeroDocType>> documents = [];\n\n// subscribe to a query\nquery.$().listen((results) {\n    setState(() {\n        documents = results;\n    });\n});\n'})}),"\n",(0,i.jsx)(t.h3,{id:"different-rxstorage-layers-for-nxdb",children:"Different RxStorage layers for NxDB"}),"\n",(0,i.jsx)(t.p,{children:"NxDB offers multiple storage options, known as RxStorage layers, to store data locally. These options include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/rx-storage-lokijs.html",children:"LokiJS RxStorage"}),": LokiJS is an in-memory database that can be used as a ",(0,i.jsx)(t.a,{href:"/articles/browser-storage.html",children:"storage"})," layer for NxDB. It provides fast and efficient in-memory data management capabilities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"}),": SQLite is a popular and widely used ",(0,i.jsx)(t.a,{href:"/articles/embedded-database.html",children:"embedded database"})," that offers robust storage capabilities. NxDB utilizes SQLite as a storage layer to persist data on the device."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"}),": As the name suggests, Memory RxStorage stores data ",(0,i.jsx)(t.a,{href:"/articles/in-memory-nosql-database.html",children:"in memory"}),". While this option does not provide persistence, it can be useful for temporary or cache-based data storage.\nBy choosing the appropriate RxStorage layer based on the specific requirements of the application, developers can optimize performance and storage efficiency."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"synchronizing-data-with-nxdb-between-clients-and-servers",children:"Synchronizing Data with NxDB between Clients and Servers"}),"\n",(0,i.jsx)(t.p,{children:"One of the key strengths of NxDB is its ability to synchronize data between multiple clients and servers seamlessly. Let's explore how this synchronization can be achieved."}),"\n",(0,i.jsx)(t.h3,{id:"offline-first-approach-1",children:"Offline-First Approach"}),"\n",(0,i.jsx)(t.p,{children:"NxDB's offline-first approach ensures that data can be accessed and modified even when there is no internet connection. Changes made offline are automatically synchronized with the server once a connection is reestablished. This ensures data consistency across all devices, providing a seamless user experience."}),"\n",(0,i.jsx)(t.h3,{id:"nxdb-replication-plugins",children:"NxDB Replication Plugins"}),"\n",(0,i.jsxs)(t.p,{children:["NxDB provides replication plugins that simplify the process of setting up data ",(0,i.jsx)(t.a,{href:"/replication.html",children:"synchronization between clients and servers"}),". These plugins offer various synchronization strategies, such as one-way replication, two-way replication, and conflict resolution mechanisms. By configuring the appropriate replication plugin, developers can easily establish real-time data synchronization in their Flutter applications."]}),"\n",(0,i.jsx)(t.h2,{id:"advanced-nxdb-features-and-techniques",children:"Advanced NxDB Features and Techniques"}),"\n",(0,i.jsx)(t.p,{children:"NxDB offers a range of advanced features and techniques that enhance its functionality and performance. Let's explore a few of these features:"}),"\n",(0,i.jsx)(t.h3,{id:"indexing-and-performance-optimization",children:"Indexing and Performance Optimization"}),"\n",(0,i.jsx)(t.p,{children:"Indexing is a technique used to optimize query performance by creating indexes on specific fields. NxDB allows developers to define indexes on document fields, improving the efficiency of queries and data retrieval."}),"\n",(0,i.jsx)(t.h3,{id:"encryption-of-local-data",children:"Encryption of Local Data"}),"\n",(0,i.jsxs)(t.p,{children:["To ensure data privacy and security, NxDB supports ",(0,i.jsx)(t.a,{href:"/encryption.html",children:"encryption of local data"}),". By encrypting the data stored on the device, developers can protect sensitive information and prevent unauthorized access."]}),"\n",(0,i.jsx)(t.h3,{id:"change-streams-and-event-handling",children:"Change Streams and Event Handling"}),"\n",(0,i.jsx)(t.p,{children:"NxDB provides change streams, which emit events whenever data changes occur. By leveraging change streams, developers can implement custom event handling logic, such as updating the UI or triggering background processes, in response to specific data changes."}),"\n",(0,i.jsx)(t.h3,{id:"json-key-compression",children:"JSON Key Compression"}),"\n",(0,i.jsxs)(t.p,{children:["To minimize storage requirements and optimize performance, NxDB offers ",(0,i.jsx)(t.a,{href:"/key-compression.html",children:"JSON key compression"}),". This feature reduces the size of keys used in the database, resulting in more efficient storage and improved query performance."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"NxDB offers a powerful and flexible database solution for Flutter applications. With its offline-first approach, real-time data synchronization, and reactive data handling capabilities, NxDB simplifies the development of feature-rich and scalable Flutter applications. By integrating NxDB into your Flutter projects, you can leverage its advanced features and techniques to build responsive and data-driven applications that provide an exceptional user experience."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["You can find the source code for an example NxDB Flutter Application ",(0,i.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples/flutter",children:"at the github repo"})]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var i=a(6540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);