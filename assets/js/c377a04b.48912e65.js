"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[6971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Minder",sidebar_position:1},a=void 0,s={unversionedId:"index",id:"index",title:"Minder",description:"minder logo",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Minder",sidebar_position:1},sidebar:"minder",next:{title:"Install Minder CLI",permalink:"/getting_started/install_cli"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Status",id:"status",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"minder logo",src:r(79430).Z,width:"3334",height:"748"})),(0,o.kt)("h1",{id:"what-is-minder"},"What is Minder?"),(0,o.kt)("p",null,"Minder by Stacklok is an open source platform that helps development teams and open source communities build more secure software, and prove to others that what they\u2019ve built is secure. Minder helps project owners proactively manage their security posture by providing a set of checks and policies to minimize risk along the software supply chain, and attest their security practices to downstream consumers. "),(0,o.kt)("p",null,"Minder allows users to enroll repositories and define policy to ensure repositories and artifacts are configured consistently and securely. Policies can be set to alert only or autoremediate. Minder provides a predefined set of rules and can also be configured to apply custom rules."),(0,o.kt)("p",null,"Minder can be deployed as a Helm chart and provides a CLI tool \u2018minder\u2019. Stacklok, the company behind Minder, also provides a free-to-use hosted version of Minder (for public repositories only). Minder is designed to be extensible, allowing users to integrate with their existing tooling and processes. "),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Repo configuration and security:")," Simplify configuration and management of security settings and policies across repos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proactive security enforcement:")," Continuously enforce best practice security configurations by setting granular policies to alert only or auto-remediate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Artifact attestation:")," Continuously verify that packages are signed to ensure they\u2019re tamper-proof, using the open source project Sigstore."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dependency management:")," Manage dependency security posture by helping developers make better choices and enforcing controls. Minder is integrated with ",(0,o.kt)("a",{parentName:"li",href:"http://trustypkg.dev"},"Trusty by Stacklok")," to enable policy-driven dependency management based on the risk level of dependencies.")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Experimental stage"),(0,o.kt)("p",null,"The public roadmap for Minder is available here: ",(0,o.kt)("a",{parentName:"p",href:"/about/roadmap"},"link")))}d.isMDXComponent=!0},79430:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Minder_darkMode-1a11bf7dfd7d8271dac122e1d08550fc.png"}}]);