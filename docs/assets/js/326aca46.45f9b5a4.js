"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[4853],{3142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(4848),a=n(8453);const s={title:"Local First / Offline First",slug:"offline-first.html",description:"Local-First software stores data on client devices for seamless offline and online functionality, enhancing user experience and efficiency."},o="Local First / Offline First",r={id:"offline-first",title:"Local First / Offline First",description:"Local-First software stores data on client devices for seamless offline and online functionality, enhancing user experience and efficiency.",source:"@site/docs/offline-first.md",sourceDirName:".",slug:"/offline-first.html",permalink:"/offline-first.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Local First / Offline First",slug:"offline-first.html",description:"Local-First software stores data on client devices for seamless offline and online functionality, enhancing user experience and efficiency."},sidebar:"tutorialSidebar",previous:{title:"NxDB 8.0.0",permalink:"/releases/8.0.0.html"},next:{title:"Downsides of Local First / Offline First",permalink:"/downsides-of-offline-first.html"}},l={},h=[{value:"UX is better without loading spinners",id:"ux-is-better-without-loading-spinners",level:2},{value:"Multi-tab usage just works",id:"multi-tab-usage-just-works",level:2},{value:"Latency is more important than bandwidth",id:"latency-is-more-important-than-bandwidth",level:2},{value:"Realtime comes for free",id:"realtime-comes-for-free",level:2},{value:"Scales with data size, not with the amount of user interaction",id:"scales-with-data-size-not-with-the-amount-of-user-interaction",level:2},{value:"Modern apps have longer runtimes",id:"modern-apps-have-longer-runtimes",level:2},{value:"You might not need REST",id:"you-might-not-need-rest",level:2},{value:"You might not need Redux",id:"you-might-not-need-redux",level:2},{value:"Follow up",id:"follow-up",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"local-first--offline-first",children:"Local First / Offline First"}),"\n",(0,i.jsxs)(t.p,{children:["Local-First (aka offline first) is a software paradigm where the software stores data locally at the clients device and must work as well offline as it does online.\nTo implement this, you have to store data at the client side, so that your application can still access it when the internet goes away.\nThis can be either done with complex caching strategies, or by using an local-first, offline database (like ",(0,i.jsx)(t.a,{href:"https://nxpkg.github.io/nxdb",children:"NxDB"}),") that stores the data inside of a local database like IndexedDB and replicates it from and to the backend in the background. This makes the local database, not the server, the gateway for all persistent changes in application state."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Offline first is not about having no internet connection"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"While in the past, internet connection was an unstable, things are changing especially for mobile devices.\nMobile networks become better and having no internet becomes less common even in remote locations.\nSo if we did not care about offline first applications in the past, why should we even care now?\nIn the following I will point out why offline first applications are better, not because they support offline usage, but because of other reasons."}),"\n",(0,i.jsx)(t.h2,{id:"ux-is-better-without-loading-spinners",children:"UX is better without loading spinners"}),"\n",(0,i.jsx)(t.p,{children:"In 'normal' web applications, most user interactions like fetching, saving or deleting data, correspond to a request to the backend server. This means that each of these interactions require the user to await the unknown latency to and from a remote server while looking at a loading spinner.\nIn offline-first apps, the operations go directly against the local storage which happens almost instantly. There is no perceptible loading time and so it is not even necessary to implement a loading spinner at all. As soon as the user clicks, the UI represents the new state as if it was already changed in the backend."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/loading-spinner-not-needed.gif",alt:"loading spinner not needed",width:"300"})}),"\n",(0,i.jsx)(t.h2,{id:"multi-tab-usage-just-works",children:"Multi-tab usage just works"}),"\n",(0,i.jsxs)(t.p,{children:["Many, even big websites like amazon, reddit and stack overflow do not handle multi tab usage correctly. When a user has multiple tabs of the website open and does a login on one of these tabs, the state does not change on the other tabs.\nOn offline first applications, there is always exactly one state of the data across all tabs. Offline first databases (like NxDB) store the data inside of IndexedDb and ",(0,i.jsx)(t.strong,{children:"share the state"})," between all tabs of the same origin."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/multiwindow.gif",alt:"NxDB multi tab",width:"450"})}),"\n",(0,i.jsx)(t.h2,{id:"latency-is-more-important-than-bandwidth",children:"Latency is more important than bandwidth"}),"\n",(0,i.jsx)(t.p,{children:"In the past, often the bandwidth was the limiting factor on determining the loading time of an application.\nBut while bandwidth has improved over the years, latency became the limiting factor.\nYou can always increase the bandwidth by setting up more cables or sending more Starlink satellites to space.\nBut reducing the latency is not so easy. It is defined by the physical properties of the transfer medium, the speed of light and the distance to the server. All of these three are hard to optimize."}),"\n",(0,i.jsx)(t.p,{children:"Offline first application benefit from that because sending the initial state to the client can be done much faster with more bandwidth. And once the data is there, we do no longer have to care about the latency to the backend server."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/latency-london-san-franzisco.png",alt:"latency london san franzisco",width:"300"})}),"\n",(0,i.jsx)(t.h2,{id:"realtime-comes-for-free",children:"Realtime comes for free"}),"\n",(0,i.jsxs)(t.p,{children:["Most websites lie to their users. They do not lie because they display wrong data, but because they display ",(0,i.jsx)(t.strong,{children:"old data"})," that was loaded from the backend at the time the user opened the site.\nTo overcome this, you could build a realtime website where you create a websocket that streams updates from the backend to the client. This means work. Your client needs to tell the server which page is currently opened and which updates the client is interested to. Then the server can push updates over the websocket and you can update the UI accordingly."]}),"\n",(0,i.jsxs)(t.p,{children:["With offline first applications, you already have a realtime replication with the backend. Most offline first databases provide some concept of changestream or data subscriptions and with ",(0,i.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb",children:"NxDB"})," you can even directly subscribe to query results or single fields of documents. This makes it easy to have an always updated UI whenever data on the backend changes."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,i.jsx)(t.h2,{id:"scales-with-data-size-not-with-the-amount-of-user-interaction",children:"Scales with data size, not with the amount of user interaction"}),"\n",(0,i.jsx)(t.p,{children:"On normal applications, each user interaction can result in multiple requests to the backend server which increase its load.\nThe more users interact with your application, the more backend resources you have to provide."}),"\n",(0,i.jsx)(t.p,{children:"Offline first applications do not scale up with the amount of user actions but instead they scale up with the amount of data.\nOnce that data is transferred to the client, the user can do as many interactions with it as required without connecting to the server."}),"\n",(0,i.jsx)(t.h2,{id:"modern-apps-have-longer-runtimes",children:"Modern apps have longer runtimes"}),"\n",(0,i.jsx)(t.p,{children:"In the past you used websites only for a short time. You open it, perform some action and then close it again. This made the first load time the important metric when evaluating page speed.\nToday web applications have changed and with it the way we use them. Single page applications are opened once and then used over the whole day. Chat apps, email clients, PWAs and hybrid apps. All of these were made to have long runtimes.\nThis makes the time for user interactions more important than the initial loading time. Offline first applications benefit from that because there is often no loading time on user actions while loading the initial state to the client is not that relevant."}),"\n",(0,i.jsx)(t.h2,{id:"you-might-not-need-rest",children:"You might not need REST"}),"\n",(0,i.jsx)(t.p,{children:"On normal web applications, you make different requests for each kind of data interaction.\nFor that you have to define a swagger route, implement a route handler on the backend and create some client code to send or fetch data from that route. The more complex your application becomes, the more REST routes you have to maintain and implement."}),"\n",(0,i.jsxs)(t.p,{children:["With offline first apps, you have a way to hack around all this cumbersome work. You just replicate the whole state from the server to the client. The replication does not only run once, you have a ",(0,i.jsx)(t.strong,{children:"realtime replication"})," and all changes at one side are automatically there on the other side. On the client, you can access every piece of state with a simple database query.\nWhile this of course only works for amounts of data that the client can load and store, it makes implementing prototypes and simple apps much faster."]}),"\n",(0,i.jsx)(t.h2,{id:"you-might-not-need-redux",children:"You might not need Redux"}),"\n",(0,i.jsx)(t.p,{children:"Data is hard, especially for UI applications where many things can happen at the same time.\nThe user is clicking around. Stuff is loaded from the server. All of these things interact with the global state of the app.\nTo manage this complexity it is common to use state management libraries like Redux or MobX. With them, you write all this lasagna code to wrap the mutation of data and to make the UI react to all these changes."}),"\n",(0,i.jsx)(t.p,{children:"On offline first apps, your global state is already there in a single place stored inside of the local database.\nYou do not have to care whether this data came from the UI, another tab, the backend or another device of the same user. You can just make writes to the database and fetch data out of it."}),"\n",(0,i.jsx)(t.h2,{id:"follow-up",children:"Follow up"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Learn how to store and query data with NxDB in the ",(0,i.jsx)(t.a,{href:"/quickstart.html",children:"NxDB Quickstart"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/downsides-of-offline-first.html",children:"Downsides of Offline First"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);