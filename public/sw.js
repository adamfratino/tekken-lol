if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),u={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e79e95447d0f72dfe8032f56b98f888c"},{url:"/_next/static/_331a_Nb09Yue8K5AewIO/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/_331a_Nb09Yue8K5AewIO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/183-ec6fff1387770f00.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/23-bcf4ba1e6ed3e005.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/836-e76896f8cd5ef514.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/all/page-04fef440fb721f96.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/heat/page-259a82b4cdbb561b.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/layout-2f4ebb68dea7b607.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/loading-6359ce85a11980b5.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/page-dcf2a3fbcc3ef210.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/punishers/page-512a69c4e5c4bfda.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/stances/page-0ea650fcab4e0ca7.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/wall/page-1afbf0d20283c59b.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/_not-found/page-9e644956c025afac.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/layout-5ce60f8ccea06de1.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/app/page-2c356d20838f45be.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/fd9d1056-913d569d346ebbcf.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/main-app-c5e9d242c381c0d9.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/main-fb1b9a487838e4b0.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8496f857d681a2b2.js",revision:"_331a_Nb09Yue8K5AewIO"},{url:"/_next/static/css/8e22f4be856d5079.css",revision:"8e22f4be856d5079"},{url:"/icons/dummy-128.png",revision:"cb7739186bf5c992e704519dd818782d"},{url:"/icons/dummy-144.png",revision:"d579e408f4834b6a45e3b820e349f016"},{url:"/icons/dummy-152.png",revision:"4d376e161e68dbac60b5f67d6f5dcc0e"},{url:"/icons/dummy-16.png",revision:"ba4a6396dcee1617727948c2b66c3775"},{url:"/icons/dummy-180.png",revision:"a8c7accb5311f6a7541a1f471f38be2c"},{url:"/icons/dummy-192.png",revision:"99b05cad37cd8a0b8215fdb81da040a5"},{url:"/icons/dummy-256.png",revision:"aa7832c65fdda6d08bd995056b9b895b"},{url:"/icons/dummy-48.png",revision:"37e008158a243f95aaf84fd0bac8fde6"},{url:"/icons/dummy-512.png",revision:"1cd4c20a0f9fdc12fd64228a0f1d8d82"},{url:"/icons/dummy-64.png",revision:"0e2ad2291502ad4b830563acf758e3ed"},{url:"/icons/dummy-72.png",revision:"7151b49243aee720be506524b742d41a"},{url:"/icons/dummy-96.png",revision:"f32857390b3830518c7afebff5e804dd"},{url:"/manifest.json",revision:"4ab2cfbf0e531e75b7ecaab36d62a9f8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
