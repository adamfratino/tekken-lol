if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1534ffffe8fc44dbd242fada463ad07c"},{url:"/_next/static/chunks/162-2f39661527164b87.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/165-4263c5db8836430f.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/289c6330-f57dfdc134f691a1.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/756-578c40fe9ed26125.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/996.b283b27528a8e821.js",revision:"b283b27528a8e821"},{url:"/_next/static/chunks/997.beaaba058878c826.js",revision:"beaaba058878c826"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/heat/page-4020a67c12e0a813.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/layout-8f6caf92e4dd367f.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/loading-aee44ad225a7fc4d.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/page-3326570ed46142a9.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/punishers/page-d1f26d7bd85a4800.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/stances/page-7bc906deccd8d2e0.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/%5Bcharacter%5D/wall/page-4acb23c105a92ebb.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/_not-found/page-359a698b14a5f263.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/layout-6fa846aee951ed89.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/app/page-e91957e6f6cda56f.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/fd9d1056-89fad52f3c8ed27c.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/main-774fca5fb9638f6b.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/main-app-96573cb5563917d3.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/pages/_app-eac407a1dd8ad594.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/pages/_error-af08459ab954c3ec.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-97b2370ef98955df.js",revision:"s8Gjt2Hyw6Hi-YOlFfSrM"},{url:"/_next/static/css/1af3dc14bb908dfd.css",revision:"1af3dc14bb908dfd"},{url:"/_next/static/s8Gjt2Hyw6Hi-YOlFfSrM/_buildManifest.js",revision:"aabe234f3189e0c4822e30a7b6739612"},{url:"/_next/static/s8Gjt2Hyw6Hi-YOlFfSrM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/dummy-128.png",revision:"cb7739186bf5c992e704519dd818782d"},{url:"/icons/dummy-144.png",revision:"d579e408f4834b6a45e3b820e349f016"},{url:"/icons/dummy-152.png",revision:"4d376e161e68dbac60b5f67d6f5dcc0e"},{url:"/icons/dummy-16.png",revision:"ba4a6396dcee1617727948c2b66c3775"},{url:"/icons/dummy-180.png",revision:"a8c7accb5311f6a7541a1f471f38be2c"},{url:"/icons/dummy-192.png",revision:"99b05cad37cd8a0b8215fdb81da040a5"},{url:"/icons/dummy-256.png",revision:"aa7832c65fdda6d08bd995056b9b895b"},{url:"/icons/dummy-48.png",revision:"37e008158a243f95aaf84fd0bac8fde6"},{url:"/icons/dummy-512.png",revision:"1cd4c20a0f9fdc12fd64228a0f1d8d82"},{url:"/icons/dummy-64.png",revision:"0e2ad2291502ad4b830563acf758e3ed"},{url:"/icons/dummy-72.png",revision:"7151b49243aee720be506524b742d41a"},{url:"/icons/dummy-96.png",revision:"f32857390b3830518c7afebff5e804dd"},{url:"/manifest.json",revision:"4ab2cfbf0e531e75b7ecaab36d62a9f8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
