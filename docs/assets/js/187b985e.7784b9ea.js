"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[6866],{844:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=i(4848),r=i(8453);const o={title:"WebRTC Replication",slug:"replication-webrtc.html"},a="Peer-to-Peer (P2P) WebRTC Replication with the NxDB JavaScript Database",s={id:"replication-webrtc",title:"WebRTC Replication",description:"In the world of web and mobile development, data synchronization between clients and servers has always been a critical aspect of building real-time JavaScript applications.",source:"@site/docs/replication-webrtc.md",sourceDirName:".",slug:"/replication-webrtc.html",permalink:"/replication-webrtc.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"WebRTC Replication",slug:"replication-webrtc.html"},sidebar:"tutorialSidebar",previous:{title:"CouchDB Replication",permalink:"/replication-couchdb.html"},next:{title:"Firestore Replication",permalink:"/replication-firestore.html"}},l={},c=[{value:"Understanding P2P Replication",id:"understanding-p2p-replication",level:2},{value:"Using the NxDB WebRTC Replication Plugin",id:"using-the-nxdb-webrtc-replication-plugin",level:2},{value:"Polyfill the WebSocket and WebRTC API in Node.js",id:"polyfill-the-websocket-and-webrtc-api-in-nodejs",level:3},{value:"Live replications",id:"live-replications",level:2},{value:"Signaling Server",id:"signaling-server",level:2},{value:"Peer Validation",id:"peer-validation",level:2},{value:"Conflict detection in WebRTC replication",id:"conflict-detection-in-webrtc-replication",level:2},{value:"SimplePeer requires to have <code>process.nextTick()</code>",id:"simplepeer-requires-to-have-processnexttick",level:2},{value:"Storing replicated data encrypted on client device",id:"storing-replicated-data-encrypted-on-client-device",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"peer-to-peer-p2p-webrtc-replication-with-the-nxdb-javascript-database",children:"Peer-to-Peer (P2P) WebRTC Replication with the NxDB JavaScript Database"}),"\n",(0,t.jsxs)(n.p,{children:["In the world of web and mobile development, data synchronization between clients and servers has always been a critical aspect of building real-time JavaScript applications.\nTraditionally, the synchronization process relies on ",(0,t.jsx)(n.strong,{children:"centralized servers"})," to manage and distribute data. However, Peer-to-Peer (P2P) replication with ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",children:"WebRTC"})," is changing the game by allowing data to flow ",(0,t.jsx)(n.strong,{children:"directly between clients"}),", eliminating the need for a central server."]}),"\n",(0,t.jsxs)(n.p,{children:["With the ",(0,t.jsx)(n.strong,{children:"NxDB WebRTC replication plugin"})," you can replicate the database state between your clients devices fully peer2peer over WebRTC.\nThere is no need for a centralized server to store any of the users data like in a ",(0,t.jsx)(n.strong,{children:"master-slave"})," replication.\nOnly a WebRTC signaling server is required to initially exchange the connection data between clients so that they can establish a WebRTC connection.\nThe replication itself then runs with the ",(0,t.jsx)(n.a,{href:"/replication.html",children:"NxDB replication protocol"}),". Because NxDB is a NoSQL database and because of the simplicity of its replication protocol, setting up a robust P2P replication is way easier compared to SQL server- or client databases."]}),"\n",(0,t.jsx)(n.h2,{id:"understanding-p2p-replication",children:"Understanding P2P Replication"}),"\n",(0,t.jsx)(n.p,{children:"P2P replication is a paradigm shift in data synchronization. Instead of relying on a central server to manage data transfers between clients, it leverages the power of direct peer-to-peer connections. This approach offers several advantages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reduced Latency:"})," With no intermediary server, data can move directly between clients, significantly reducing latency and improving real-time interactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved Scalability:"})," P2P networks can easily scale as more clients join, without putting additional load on a central server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enhanced Privacy:"})," Data remains within the client devices, reducing privacy concerns associated with centralized data storage."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-nxdb-webrtc-replication-plugin",children:"Using the NxDB WebRTC Replication Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["Before you use this plugin, make sure that you understand how ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",children:"WebRTC works"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["First you have to add the plugin, then you can call ",(0,t.jsx)(n.code,{children:"RxCollection.syncWebRTC()"})," to start the replication.\nAs options you have to provide a ",(0,t.jsx)(n.code,{children:"topic"})," and a connection handler function that implements the ",(0,t.jsx)(n.code,{children:"P2PConnectionHandlerCreator"})," interface. As default you should start with the ",(0,t.jsx)(n.code,{children:"getConnectionHandlerSimplePeer"})," method which uses the ",(0,t.jsx)(n.a,{href:"https://github.com/feross/simple-peer",children:"simple-peer"})," library."]}),"\n",(0,t.jsxs)(n.p,{children:["In difference to the other replication plugins, the WebRTC replication returns a ",(0,t.jsx)(n.code,{children:"replicationPool"})," instead of a single ",(0,t.jsx)(n.code,{children:"RxReplicationState"}),". The ",(0,t.jsx)(n.code,{children:"replicationPool"})," contains all replication states of the connected peers in the P2P network."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n    replicateWebRTC,\n    getConnectionHandlerSimplePeer\n} from 'nxdb/plugins/replication-webrtc';\n\nconst replicationPool = await replicateWebRTC(\n    {\n        collection: myRxCollection,\n        // The topic is like a 'room-name'. All clients with the same topic\n        // will replicate with each other. In most cases you want to use\n        // a different topic string per user.\n        topic: 'my-users-pool',\n        /**\n         * You need a collection handler to be able to create WebRTC connections.\n         * Here we use the simple peer handler which uses the 'simple-peer' npm library.\n         * To learn how to create a custom connection handler, read the source code,\n         * it is pretty simple.\n         */\n        connectionHandlerCreator: getConnectionHandlerSimplePeer({\n            // Set the signaling server url.\n            // You can use the server provided by NxDB for tryouts,\n            // but in production you should use your own server instead.\n            signalingServerUrl: 'wss://signaling.nxpkg.github.io/nxdb/',\n\n            // only in Node.js, we need the wrtc library\n            // because Node.js does not contain the WebRTC API.\n            wrtc: require('node-datachannel/polyfill'),\n            // only in Node.js, we need the WebSocket library\n            // because Node.js does not contain the WebSocket API.\n            webSocketConstructor: require('ws').WebSocket\n        }),\n        pull: {},\n        push: {}\n    }\n);\nreplicationPool.error$.subscribe(err => { /* ... */ });\nreplicationPool.cancel();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"polyfill-the-websocket-and-webrtc-api-in-nodejs",children:"Polyfill the WebSocket and WebRTC API in Node.js"}),"\n",(0,t.jsxs)(n.p,{children:["While all modern browsers support the WebRTC and WebSocket APIs, they is missing in Node.js which will throw the error ",(0,t.jsx)(n.code,{children:"No WebRTC support: Specify opts.wrtc option in this environment"}),". Therefore you have to polyfill it with a compatible WebRTC and WebSocket polyfill. It is recommended to use the ",(0,t.jsx)(n.a,{href:"https://github.com/murat-dogan/node-datachannel/tree/master/polyfill",children:"node-datachannel package"})," for WebRTC which ",(0,t.jsx)(n.strong,{children:"does not"})," come with NxDB but has to be installed before via ",(0,t.jsx)(n.code,{children:"npm install node-datachannel --save"}),".\nFor the Websocket API use the ",(0,t.jsx)(n.code,{children:"ws"})," package that is included into NxDB."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import nodeDatachannelPolyfill from 'node-datachannel/polyfill';\nimport { WebSocket } from 'ws';\nconst replicationPool = await replicateWebRTC(\n    {\n        /* ... */\n        connectionHandlerCreator: getConnectionHandlerSimplePeer({\n            signalingServerUrl: 'wss://example.com:8080',\n            wrtc: nodeDatachannelPolyfill,\n            webSocketConstructor: WebSocket\n        }),\n        pull: {},\n        push: {}\n        /* ... */\n    }\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"live-replications",children:"Live replications"}),"\n",(0,t.jsxs)(n.p,{children:["The WebRTC replication is ",(0,t.jsx)(n.strong,{children:"always live"})," because there can not be a one-time sync when it is always possible to have new Peers that join the connection pool. Therefore you cannot set the ",(0,t.jsx)(n.code,{children:"live: false"})," option like in the other replication plugins."]}),"\n",(0,t.jsx)(n.h2,{id:"signaling-server",children:"Signaling Server"}),"\n",(0,t.jsxs)(n.p,{children:["For P2P replication to work with the NxDB WebRTC Replication Plugin, a ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling",children:"signaling server"})," is required. The signaling server helps peers discover each other and establish connections."]}),"\n",(0,t.jsx)(n.p,{children:"NxDB ships with a default signaling server that can be used with the simple-peer connection handler. This server is made for demonstration purposes and tryouts. It is not reliable and might be offline at any time.\nIn production you must always use your own signaling server instead!"}),"\n",(0,t.jsx)(n.p,{children:"Creating a basic signaling server is straightforward. The provided example uses 'socket.io' for WebSocket communication. However, in production, you'd want to create a more robust signaling server with authentication and additional logic to suit your application's needs."}),"\n",(0,t.jsxs)(n.p,{children:["Here is a quick example implementation of a signaling server that can be used with the connection handler from ",(0,t.jsx)(n.code,{children:"getConnectionHandlerSimplePeer()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n    startSignalingServerSimplePeer\n} from 'nxdb/plugins/replication-webrtc';\n\nconst serverState = await startSignalingServerSimplePeer({\n    port: 8080 // <- port\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For custom signaling servers with more complex logic, you can check the ",(0,t.jsx)(n.a,{href:"https://github.com/nxpkg/nxdb/blob/master/src/plugins/replication-webrtc/signaling-server.ts",children:"source code of the default one"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"peer-validation",children:"Peer Validation"}),"\n",(0,t.jsxs)(n.p,{children:["By default the replication will replicate with every peer the signaling server tells them about.\nYou can prevent invalid peers from replication by passing a custom ",(0,t.jsx)(n.code,{children:"isPeerValid()"})," function that either returns ",(0,t.jsx)(n.code,{children:"true"})," on valid peers and ",(0,t.jsx)(n.code,{children:"false"})," on invalid peers."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const replicationPool = await replicateWebRTC(\n    {\n        /* ... */\n        isPeerValid: async (peer) => {\n            return true;\n        }\n        pull: {},\n        push: {}\n        /* ... */\n    }\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conflict-detection-in-webrtc-replication",children:"Conflict detection in WebRTC replication"}),"\n",(0,t.jsxs)(n.p,{children:["NxDB's conflict handling works by detecting and resolving conflicts that may arise when multiple clients in a decentralized database system attempt to modify the same data concurrently.\nA ",(0,t.jsx)(n.strong,{children:"custom conflict handler"})," can be set up, which is a plain JavaScript function. The conflict handler is run on each replicated document write and resolves the conflict if required. ",(0,t.jsx)(n.a,{href:"https://nxpkg.github.io/nxdb/transactions-conflicts-revisions.html",children:"Find out more about NxDB conflict handling here"})]}),"\n",(0,t.jsxs)(n.h2,{id:"simplepeer-requires-to-have-processnexttick",children:["SimplePeer requires to have ",(0,t.jsx)(n.code,{children:"process.nextTick()"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the browser you might not have a process variable or process.nextTick() method. But the ",(0,t.jsx)(n.a,{href:"https://github.com/feross/simple-peer",children:"simple peer"})," uses that so you have to polyfill it."]}),"\n",(0,t.jsxs)(n.p,{children:["In webpack you can use the ",(0,t.jsx)(n.code,{children:"process/browser"})," package to polyfill it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const plugins = [\n    /* ... */\n    new webpack.ProvidePlugin({\n        process: 'process/browser',\n    })\n    /* ... */\n];\n"})}),"\n",(0,t.jsx)(n.p,{children:"In angular or other libraries you can add the polyfill manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"window.process = {\n    nextTick: (fn, ...args) => setTimeout(() => fn(...args)),\n};\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"storing-replicated-data-encrypted-on-client-device",children:"Storing replicated data encrypted on client device"}),"\n",(0,t.jsxs)(n.p,{children:["Storing replicated data encrypted on client devices using the NxDB Encryption Plugin is a pivotal step towards bolstering ",(0,t.jsx)(n.strong,{children:"data security"})," and ",(0,t.jsx)(n.strong,{children:"user privacy"}),".\nThe WebRTC replication plugin seamlessly integrates with the ",(0,t.jsx)(n.a,{href:"/encryption.html",children:"NxDB encryption plugins"}),", providing a robust solution for encrypting sensitive information before it's stored locally. By doing so, it ensures that even if unauthorized access to the device occurs, the data remains protected and unintelligible without the encryption key (or password). This approach is particularly vital in scenarios where user-generated content or confidential data is replicated across devices, as it empowers users with control over their own data while adhering to stringent security standards. ",(0,t.jsx)(n.a,{href:"/encryption.html",children:"Read more about the encryption plugins here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);