"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[3148],{755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(4848),r=t(8453);const s={title:"RxQuery",slug:"rx-query.html"},a="RxQuery",i={id:"rx-query",title:"RxQuery",description:"A query allows to find documents in your collection.",source:"@site/docs/rx-query.md",sourceDirName:".",slug:"/rx-query.html",permalink:"/rx-query.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RxQuery",slug:"rx-query.html"},sidebar:"tutorialSidebar",previous:{title:"RxDocument",permalink:"/rx-document.html"},next:{title:"Attachments",permalink:"/rx-attachment.html"}},c={},l=[{value:"find()",id:"find",level:2},{value:"findOne()",id:"findone",level:2},{value:"exec()",id:"exec",level:2},{value:"Query Builder",id:"query-builder",level:2},{value:"Observe $",id:"observe-",level:2},{value:"update()",id:"update",level:2},{value:"patch() / incrementalPatch()",id:"patch--incrementalpatch",level:2},{value:"modify() / incrementalModify()",id:"modify--incrementalmodify",level:2},{value:"remove() / incrementalRemove()",id:"remove--incrementalremove",level:2},{value:"doesDocumentDataMatch()",id:"doesdocumentdatamatch",level:2},{value:"Query Examples",id:"query-examples",level:2},{value:"Setting a specific index",id:"setting-a-specific-index",level:2},{value:"Count",id:"count",level:2},{value:"<code>allowSlowCount</code>",id:"allowslowcount",level:3},{value:"NxDB will always append the primary key to the sort parameters",id:"nxdb-will-always-append-the-primary-key-to-the-sort-parameters",level:2},{value:"RxQuery&#39;s are immutable",id:"rxquerys-are-immutable",level:2},{value:"isRxQuery",id:"isrxquery",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"rxquery",children:"RxQuery"}),"\n",(0,o.jsxs)(n.p,{children:["A query allows to find documents in your collection.\nLike most other noSQL-Databases, NxDB uses the ",(0,o.jsx)(n.a,{href:"https://github.com/cloudant/mango",children:"mango-query-syntax"}),". It is also possible to use ",(0,o.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/method/db.collection.find/#combine-cursor-methods",children:"chained methods"})," with the ",(0,o.jsx)(n.code,{children:"query-builder"})," plugin."]}),"\n",(0,o.jsx)(n.h2,{id:"find",children:"find()"}),"\n",(0,o.jsxs)(n.p,{children:["To create a basic ",(0,o.jsx)(n.code,{children:"RxQuery"}),", call ",(0,o.jsx)(n.code,{children:".find()"})," on a collection and insert selectors. The result-set of normal queries is an array with documents."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// find all that are older then 18\nconst query = myCollection\n    .find({\n      selector: {\n        age: {\n          $gt: 18\n        }\n      }\n    });\n"})}),"\n",(0,o.jsx)(n.h2,{id:"findone",children:"findOne()"}),"\n",(0,o.jsxs)(n.p,{children:["A findOne-query has only a single ",(0,o.jsx)(n.code,{children:"RxDocument"})," or ",(0,o.jsx)(n.code,{children:"null"})," as result-set."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// find alice\nconst query = myCollection\n    .findOne({\n      selector: {\n        name: 'alice'\n      }\n    });\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// find the youngest one\nconst query = myCollection\n    .findOne({\n      selector: {},\n      sort: [\n        {age: 'asc'}\n      ]\n    });\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// find one document by the primary key\nconst query = myCollection.findOne('foobar');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"exec",children:"exec()"}),"\n",(0,o.jsxs)(n.p,{children:["Returns a ",(0,o.jsx)(n.code,{children:"Promise"})," that resolves with the result-set of the query."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const query = myCollection.find();\nconst results = await query.exec();\nconsole.dir(results); // > [RxDocument,RxDocument,RxDocument..]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"query-builder",children:"Query Builder"}),"\n",(0,o.jsxs)(n.p,{children:["To use chained query methods, you can use the ",(0,o.jsx)(n.code,{children:"query-builder"})," plugin."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"\n// add the query builder plugin\nimport { addRxPlugin } from 'nxdb';\nimport { NxDBQueryBuilderPlugin } from 'nxdb/plugins/query-builder';\naddRxPlugin(NxDBQueryBuilderPlugin);\n\n// now you can use chained query methods\n\nconst query = myCollection.find().where('age').gt(18);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"observe-",children:"Observe $"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.code,{children:"BehaviorSubject"})," ",(0,o.jsx)(n.a,{href:"https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0",children:"see"})," that always has the current result-set as value.\nThis is extremely helpful when used together with UIs that should always show the same state as what is written in the database."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const query = myCollection.find();\nconst querySub = query.$.subscribe(results => {\n    console.log('got results: ' + results.length);\n});\n// > 'got results: 5'   // BehaviorSubjects emit on subscription\n\nawait myCollection.insert({/* ... */}); // insert one\n// > 'got results: 6'   // $.subscribe() was called again with the new results\n\n// stop watching this query\nquerySub.unsubscribe()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"update",children:"update()"}),"\n",(0,o.jsxs)(n.p,{children:["Runs an ",(0,o.jsx)(n.a,{href:"/rx-document.html#update",children:"update"})," on every RxDocument of the query-result."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"\n// to use the update() method, you need to add the update plugin.\nimport { NxDBUpdatePlugin } from 'nxdb/plugins/update';\naddRxPlugin(NxDBUpdatePlugin);\n\nconst query = myCollection.find({\n  selector: {\n    age: {\n      $gt: 18\n    }\n  }\n});\nawait query.update({\n    $inc: {\n        age: 1 // increases age of every found document by 1\n    }\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"patch--incrementalpatch",children:"patch() / incrementalPatch()"}),"\n",(0,o.jsxs)(n.p,{children:["Runs the ",(0,o.jsx)(n.a,{href:"/rx-document.html#patch",children:"RxDocument.patch()"})," function on every RxDocument of the query result."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const query = myCollection.find({\n  selector: {\n    age: {\n      $gt: 18\n    }\n  }\n});\nawait query.patch({\n  age: 12 // set the age of every found to 12\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"modify--incrementalmodify",children:"modify() / incrementalModify()"}),"\n",(0,o.jsxs)(n.p,{children:["Runs the ",(0,o.jsx)(n.a,{href:"/rx-document.html#modify",children:"RxDocument.modify()"})," function on every RxDocument of the query result."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const query = myCollection.find({\n  selector: {\n    age: {\n      $gt: 18\n    }\n  }\n});\nawait query.modify((docData) => {\n  docData.age = docData.age + 1; // increases age of every found document by 1\n  return docData;\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"remove--incrementalremove",children:"remove() / incrementalRemove()"}),"\n",(0,o.jsx)(n.p,{children:"Deletes all found documents. Returns a promise which resolves to the deleted documents."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// All documents where the age is less than 18\nconst query = myCollection.find({\n  selector: {\n    age: {\n      $lt: 18\n    }\n  }\n});\n// Remove the documents from the collection\nconst removedDocs = await query.remove();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"doesdocumentdatamatch",children:"doesDocumentDataMatch()"}),"\n",(0,o.jsxs)(n.p,{children:["Returns ",(0,o.jsx)(n.code,{children:"true"})," if the given document data matches the query."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const documentData = {\n  id: 'foobar',\n  age: 19\n};\n\nmyCollection.find({\n  selector: {\n    age: {\n      $gt: 18\n    }\n  }\n}).doesDocumentDataMatch(documentData); // > true\n\nmyCollection.find({\n  selector: {\n    age: {\n      $gt: 20\n    }\n  }\n}).doesDocumentDataMatch(documentData); // > false\n"})}),"\n",(0,o.jsx)(n.h2,{id:"query-examples",children:"Query Examples"}),"\n",(0,o.jsx)(n.p,{children:"Here some examples to fast learn how to write queries without reading the docs."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-find/README.md",children:"Pouch-find-docs"})," - learn how to use mango-queries"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/aheckmann/mquery/blob/master/README.md",children:"mquery-docs"})," - learn how to use chained-queries"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// directly pass search-object\nmyCollection.find({\n  selector: {\n    name: { $eq: 'foo' }\n  }\n})\n.exec().then(documents => console.dir(documents));\n\n/*\n * find by using sql equivalent '%like%' syntax\n * This example will fe: match 'foo' but also 'fifoo' or 'foofa' or 'fifoofa'\n * Notice that in NxDB queries, a regex is represented as a $regex string with the $options parameter for flags.\n * Using a RegExp instance is not allowed because they are not JSON.stringify()-able and also\n * RegExp instances are mutable which could cause undefined behavior when the RegExp is mutated\n * after the query was parsed.\n */\nmyCollection.find({\n  selector: {\n    name: { $regex: '.*foo.*' }\n  }\n})\n.exec().then(documents => console.dir(documents));\n\n// find using a composite statement eg: $or\n// This example checks where name is either foo or if name is not existent on the document\nmyCollection.find({\n  selector: { $or: [ { name: { $eq: 'foo' } }, { name: { $exists: false } }] }\n})\n.exec().then(documents => console.dir(documents));\n\n// do a case insensitive search\n// This example will match 'foo' or 'FOO' or 'FoO' etc...\nmyCollection.find({\n  selector: { name: { $regex: '^foo$', $options: 'i' } }\n})\n.exec().then(documents => console.dir(documents));\n\n// chained queries\nmyCollection.find().where('name').eq('foo')\n.exec().then(documents => console.dir(documents));\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setting-a-specific-index",children:"Setting a specific index"}),"\n",(0,o.jsx)(n.p,{children:"By default, the query will be send to the RxStorage, where a query planner will determine which one of the available indexes must be used.\nBut the query planner cannot know everything and sometimes will not pick the most optimal index.\nTo improve query performance, you can specify which index must be used, when running the query."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const query = myCollection\n    .findOne({\n      selector: {\n        age: {\n          $gt: 18\n        },\n        gender: {\n          $eq: 'm'\n        }\n      },\n      /**\n       * Because the developer knows that 50% of the documents are 'male',\n       * but only 20% are below age 18,\n       * it makes sense to enforce using the ['gender', 'age'] index to improve performance.\n       * This could not be known by the query planer which might have chosen ['age', 'gender'] instead.\n       */\n      index: ['gender', 'age']\n    });\n"})}),"\n",(0,o.jsx)(n.h2,{id:"count",children:"Count"}),"\n",(0,o.jsxs)(n.p,{children:["When you only need the amount of documents that match a query, but you do not need the document data itself, you can use a count query for ",(0,o.jsx)(n.strong,{children:"better performance"}),".\nThe performance difference compared to a normal query differs depending on which ",(0,o.jsx)(n.a,{href:"/rx-storage.html",children:"RxStorage"})," implementation is used."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const query = myCollection.count({\n  selector: {\n    age: {\n      $gt: 18\n    }\n  }\n  // 'limit' and 'skip' MUST NOT be set for count queries.\n});\n\n// get the count result once\nconst matchingAmount = await query.exec(); // > number\n\n// observe the result\nquery.$.subscribe(amount => {\n  console.log('Currently has ' + amount + ' documents');\n});\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Count queries have a better performance than normal queries because they do not have to fetch the full document data out of the storage. Therefore it is ",(0,o.jsx)(n.strong,{children:"not"})," possible to run a ",(0,o.jsx)(n.code,{children:"count()"})," query with a selector that requires to fetch and compare the document data. So if your query selector ",(0,o.jsx)(n.strong,{children:"does not"})," fully match an index of the schema, it is not allowed to run it. These queries would have no performance benefit compared to normal queries but have the tradeoff of not using the fetched document data for caching."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"/**\n * The following will throw an error because\n * the count operation cannot run on any specific index range\n * because the $regex operator is used.\n */\nconst query = myCollection.count({\n  selector: {\n    age: {\n      $regex: 'foobar'\n    }\n  }\n});\n\n/**\n * The following will throw an error because\n * the count operation cannot run on any specific index range\n * because there is no ['age' ,'otherNumber'] index\n * defined in the schema.\n */\nconst query = myCollection.count({\n  selector: {\n    age: {\n      $gt: 20\n    },\n    otherNumber: {\n      $gt: 10\n    }\n  }\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you want to count these kind of queries, you should do a normal query instead and use the length of the result set as counter. This has the same performance as running a non-fully-indexed count which has to fetch all document data from the database and run a query matcher."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// get count manually once\nconst resultSet = await myCollection.find({\n  selector: {\n    age: {\n      $regex: 'foobar'\n    }\n  }\n}).exec();\nconst count = resultSet.length;\n\n// observe count manually\nconst count$ = myCollection.find({\n  selector: {\n    age: {\n      $regex: 'foobar'\n    }\n  }\n}).$.pipe(\n  map(result => result.length)\n);\n\n/**\n * To allow non-fully-indexed count queries,\n * you can also specify that by setting allowSlowCount=true\n * when creating the database.\n */\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    allowSlowCount: true, // set this to true [default=false]\n    /* ... */\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"allowslowcount",children:(0,o.jsx)(n.code,{children:"allowSlowCount"})}),"\n",(0,o.jsxs)(n.p,{children:["To allow non-fully-indexed count queries, you can also specify that by setting ",(0,o.jsx)(n.code,{children:"allowSlowCount: true"})," when creating the database.\nDoing this is mostly not wanted, because it would run the counting on the storage without having the document stored in the NxDB document cache.\nThis is only recommended if the RxStorage is running remotely like in a WebWorker and you not always want to send the document-data between the worker and the main thread. In this case you might only need the count-result instead to save performance."]}),"\n",(0,o.jsx)(n.h2,{id:"nxdb-will-always-append-the-primary-key-to-the-sort-parameters",children:"NxDB will always append the primary key to the sort parameters"}),"\n",(0,o.jsxs)(n.p,{children:["For several performance optimizations, like the ",(0,o.jsx)(n.a,{href:"https://github.com/nxpkg/event-reduce",children:"EventReduce algorithm"}),", NxDB expects all queries to return a deterministic sort order that does not depend on the insert order of the documents. To ensure a deterministic ordering, NxDB will always append the primary key as last sort parameter to all queries and to all indexes.\nThis works in contrast to most other databases where a query without sorting would return the documents in the order in which they had been inserted to the database.\n:::"]}),"\n",(0,o.jsx)(n.h2,{id:"rxquerys-are-immutable",children:"RxQuery's are immutable"}),"\n",(0,o.jsxs)(n.p,{children:["Because NxDB is a reactive database, we can do heavy performance-optimisation on query-results which change over time. To be able to do this, RxQuery's have to be immutable.\nThis means, when you have a ",(0,o.jsx)(n.code,{children:"RxQuery"})," and run a ",(0,o.jsx)(n.code,{children:".where()"})," on it, the original RxQuery-Object is not changed. Instead the where-function returns a new ",(0,o.jsx)(n.code,{children:"RxQuery"}),"-Object with the changed where-field. Keep this in mind if you create RxQuery's and change them afterwards."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const queryObject = myCollection.find().where('age').gt(18);\n// Creates a new RxQuery object, does not modify previous one\nqueryObject.sort('name');\nconst results = await queryObject.exec();\nconsole.dir(results); // result-documents are not sorted by name\n\nconst queryObjectSort = queryObject.sort('name');\nconst results = await queryObjectSort.exec();\nconsole.dir(results); // result-documents are now sorted\n"})}),"\n",(0,o.jsx)(n.h3,{id:"isrxquery",children:"isRxQuery"}),"\n",(0,o.jsx)(n.p,{children:"Returns true if the given object is an instance of RxQuery. Returns false if not."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const is = isRxQuery(myObj);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);