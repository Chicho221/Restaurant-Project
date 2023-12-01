(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),d=t(667),c=t.n(d),s=new URL(t(70),t.b),l=new URL(t(978),t.b),p=a()(r()),m=c()(s),u=c()(l);p.push([n.id,`@font-face{\n    font-family: 'myFont';\n    src: url(${m});\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background:none;\n\n    font-family: 'myFont';\n    font-weight: 100;\n    color: white;\n}\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    background-image: url(${u});\n    background-size: cover;\n    /* background-color: rgb(36, 36, 36); */\n    width: 100vw;\n    height: 100vh;\n    padding: 37px 0 37px 37px;\n    gap: 1em;\n}\n\n#content_container{\n    display: flex;\n    justify-content: space-between;\n    margin-left: 7em;\n    \n}\n\n#main{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 590px;\n    width: 590px;\n    height: 850px;\n}\n.logo{\n    width: 190px;\n    height: 245px;\n}\n#site-name{\n    align-items: center;\n    font-size: 64px;\n}\n#lines{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 10px;\n}\n    #line-one{\n        border: 2px solid white;\n        border-radius: 2px;\n        width: 300px;\n    }\n    #line-two{\n        border: 2px solid white;\n        border-radius: 2px;\n        width: 150px;\n    }\n    #line-three{\n        border: 2px solid white;\n        border-radius: 2px;\n        width: 15px;\n    }\n#news-container{\n    margin-top: 1rem;\n    width: 100%;\n    height: 100%;\n    gap: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 32px;\n}\n\n.news-content{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 20px;\n}\n.news-bigtab{\n    display: flex;\n    align-items: flex-end;\n\n    background-size: cover;\n    border-radius: 30px;\n    grid-area: 1 / 1 / 2 / 3;\n    width: 100%;\n    height: 100%;\n}\n.news-smalltab{\n    display: flex;\n    align-items: flex-end;\n\n    background-position: center;\n    background-size: cover;\n    border-radius: 30px;\n}\n.news-tab-text{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color:rgba(30, 30, 30, 60%);\n    border-radius: 0 0 29px 29px;\n    width: 100%;\n}\n.news-tab-text h1{\n    font-size: 24px;\n}\n.news-tab-text h2{\n    font-size: 16px;\n    \n}\n`,""]);const h=p},911:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"#main_about{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3fr 2fr;\n    background-color: rgba(30,30,30, 0.6);\n    height: 482px;\n    width: 795px;\n    margin-top: auto;\n    padding: 1em;\n    border-radius: 30px;\n    text-align: center;\n}\n\n#about-content{\n    grid-area: 1 / 1 / 2 / 3;\n    border-bottom: 3px solid white;\n    border-radius: 3px;\n    padding: 5px;\n}\n#about-contact{\n    border-right: 1.5px solid white;\n    padding: 5px;\n}\n#about-location{\n    border-left: 1.5px solid white;\n    padding: 5px;\n}\n\n",""]);const d=a},417:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"#main_menu{\n    height: 725px;\n    margin-top: auto;\n    display: flex;\n    flex-direction: column;\n    /* background-color:rgba(30, 30, 30, 1); */\n    padding: 1em 1em 0 1em;\n}\n\n.title {\n    text-align: center;\n    grid-area: 1 / 1 / 2 / 4;\n    font-size: 64px;\n}\n#dishes-container{\n    padding-right: 5px;\n    overflow-x: hidden;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 200px;\n    gap: 1em;\n}\n.dish{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4fr 1fr 1fr;\n    height: 100%;\n    width: 250px;\n    background-color:rgb(20, 20, 20);\n\n    border-radius: 16px;\n}\n\n#dishes-container::-webkit-scrollbar{\n    width: 0.5em;\n}\n#dishes-container::-webkit-scrollbar-track{\n    background-color:rgba(30, 30, 30, 100%);\n    border-radius: 0.25em;\n}\n#dishes-container::-webkit-scrollbar-thumb{\n    background-color:rgba(60, 60, 60, 1);\n    border-radius: 0.25em;\n}\n#dishes-container::-webkit-scrollbar-thumb:hover{\n    background-color:rgba(70, 70, 70, 1);\n    border-radius: 0.25em;\n}\n\n.dish > h2,h3{\n    text-align: center;\n}\n.dish > h2{\n\n}\n.dish > h2{\n\n}\n.z-icon{\n    width: 24px;\n    height: 24px;\n}\n.dish > img{\n    height: 100%;\n    width: 100%;\n    border-radius: 5% 5% 0 0 ;\n}\n.center{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n",""]);const d=a},754:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"#menu{\n    display: flex;\n    flex-direction: column;\n    width: 46px;\n    gap: 8px;\n    cursor: pointer;\n}\n.menu-line{\n    border:3px solid white; /*Change to white after adding background*/\n    border-radius: 28px;\n    width: 40px;\n}\n\n#nav-bar{\n    display: flex;\n    flex-direction: column;\n    gap: 5em;\n\n    box-sizing: border-box;\n    position:absolute;\n    top: 0;\n    left: 0;\n    width: 330px;\n    height: 100vh;\n    padding: 37px;\n    background-color:rgba(30, 30, 30, 60%);\n}\n#nav-bar > img{\n    width: 35px;\n    align-self: flex-end;\n    cursor: pointer;\n}\n\n#nav-container{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1em;\n    \n    width: 100%;\n}\n#nav-container > button{\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\n",""]);const d=a},792:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"#socials-container{\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    margin-top: auto;\n    width: 50px;\n    height: 252px;\n\n}\n.social-squere{\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    border-left: 4px solid #1E1E1E;\n    padding: 10px 10px 10px 6px;\n    background-color: #1E1E1E;\n    position: relative;\n    left: 10px;\n    transition: \n    left 0.2s,\n    border 0.1s;\n}\n.social-squere:hover{\n    left: 0px;\n    border-color:#25AAE1 ;\n}\n\n",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],d=0;d<n.length;d++){var c=n[d],s=i.base?c[0]+i.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=r(u,i);i.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var d=t(o[a]);e[d].references--}for(var c=i(n,r),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},978:(n,e,t)=>{n.exports=t.p+"148e43e5e386b33ab6e7.png"},70:(n,e,t)=>{n.exports=t.p+"3eeb672805f1b8adae1d.ttf"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!n;)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"32069fb7b3946e8759a6.png",e=t.p+"2f8dbbd38b04b77b3a38.jpg",i=t.p+"605d8f6ed1968e12fbaf.jpg",r=t.p+"c00e16d3391f21d59ecb.png",o=function(){const t=document.createElement("div");t.id="main";const o=document.createElement("img");o.classList.add("logo"),o.src=n;const a=document.createElement("div");a.id="site-name",a.textContent="Hunter's Inn";const d=document.createElement("div");d.id="lines";const c=document.createElement("div");c.id="line-one";const s=document.createElement("div");s.id="line-two",d.appendChild(c),d.appendChild(s);const l=document.createElement("div");l.id="news-container",l.textContent="News";const p=document.createElement("div");p.id="line-three",l.appendChild(p);const m=document.createElement("div");m.classList.add("news-content");const u=document.createElement("div");u.classList.add("news-bigtab"),u.style.backgroundImage="url('"+e+"')";const h=document.createElement("div");h.classList.add("news-tab-text");const f=document.createElement("h1");f.textContent="Grammewster Chef is back! ";const g=document.createElement("h2");g.textContent="New delicous dishes are available now!",h.appendChild(f),h.appendChild(g),u.appendChild(h),m.appendChild(u);const b=document.createElement("div");b.classList.add("news-smalltab"),b.style.backgroundImage="url('"+i+"')";const x=document.createElement("div");x.classList.add("news-tab-text");const v=document.createElement("h1");v.textContent="New tasty dish coming?!";const y=document.createElement("h2");y.textContent="We’ve got a really amazing dish coming for you.",x.appendChild(v),x.appendChild(y),b.appendChild(x);const w=document.createElement("div");w.classList.add("news-smalltab"),w.style.backgroundImage="url('"+r+"')";const C=document.createElement("div");C.classList.add("news-tab-text");const E=document.createElement("h1");E.textContent="Summer Special is back!";const k=document.createElement("h2");return k.innerHTML="Everyone’s favorite is back for<br /> limited time.",C.appendChild(E),C.appendChild(k),w.appendChild(C),m.appendChild(b),m.appendChild(w),l.appendChild(m),t.appendChild(o),t.appendChild(a),t.appendChild(d),t.appendChild(l),content_container.appendChild(t),content};var a=t(379),d=t.n(a),c=t(795),s=t.n(c),l=t(569),p=t.n(l),m=t(565),u=t.n(m),h=t(216),f=t.n(h),g=t(589),b=t.n(g),x=t(754),v={};v.styleTagTransform=b(),v.setAttributes=u(),v.insert=p().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),d()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;const y=t.p+"d3b10a9cedb47ef0e5b5.png";var w=t(417),C={};C.styleTagTransform=b(),C.setAttributes=u(),C.insert=p().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=f(),d()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;var E=t(911),k={};k.styleTagTransform=b(),k.setAttributes=u(),k.insert=p().bind(null,"head"),k.domAPI=s(),k.insertStyleElement=f(),d()(E.Z,k),E.Z&&E.Z.locals&&E.Z.locals;const L=t.p+"f836a7caeae4a03e522d.png",Z=t.p+"c476ebce2062b8017267.png",T=t.p+"292e463cf874e431930d.png",A=t.p+"ed938c009256c31848d0.png";var I=t(792),S={};S.styleTagTransform=b(),S.setAttributes=u(),S.insert=p().bind(null,"head"),S.domAPI=s(),S.insertStyleElement=f(),d()(I.Z,S),I.Z&&I.Z.locals&&I.Z.locals;const N=function(){console.log("Socials work");const n=document.getElementById("content_container"),e=[{name:"Discord",path:L,link:"#"},{name:"Instagram",path:Z,link:"#"},{name:"GitHub",path:T,link:"https://github.com/Chicho221"},{name:"Twitter",path:A,link:"#"}],t=document.createElement("div");t.id="socials-container";for(let n=0;n<e.length;n++){const i=document.createElement("a");i.href=e[n].link,i.target="_blank";const r=document.createElement("img");""==e[n].path&&(i.style.backgroundColor="transparent",i.style.border="none"),r.src=e[n].path,i.appendChild(r),i.classList.add("social-squere"),t.appendChild(i)}return n.appendChild(t),n},_=function(){const n=document.querySelector("body");n.innerHTML="";const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.id="content_container";const i=document.createElement("div");i.id="content_header",n.appendChild(e),e.appendChild(i),e.appendChild(t)},z=function(){document.getElementById("nav0").addEventListener("click",(()=>{_(),j(),o(),N()})),document.getElementById("nav1").addEventListener("click",(()=>{_(),j(),o(),function(){const n=[{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"},{name:"Name",pic:e,price:"price"}],t=document.createElement("div");t.id="main_menu";const i=document.createElement("div"),r=document.createElement("div");r.id="dishes-container",t.appendChild(i),t.appendChild(r);const o=document.createElement("div");o.classList="title",o.textContent="Menu",i.appendChild(o);for(let e=0;e<n.length;e++){const t=document.createElement("div");t.classList.add("dish"),t.setAttribute=[e];const i=document.createElement("img");i.src=n[e].pic;const o=document.createElement("h2");o.textContent=n[e].name;const a=document.createElement("div");a.classList.add("center");const d=document.createElement("img");d.classList.add("z-icon"),d.src=y,a.textContent=n[e].price,a.appendChild(d),t.appendChild(i),t.appendChild(o),t.appendChild(a),r.appendChild(t)}content_container.appendChild(t),content}(),N()})),document.getElementById("nav2").addEventListener("click",(()=>{_(),j(),o(),function(){const n=document.createElement("div");n.id="main_about";const e=document.createElement("div"),t=document.createElement("h1");t.textContent="About Us",e.appendChild(t);const i=document.createElement("div");i.textContent="About us goes here!",e.appendChild(i),e.id="about-content";const r=document.createElement("div"),o=document.createElement("h1");o.textContent="Contact",r.appendChild(o);const a=document.createElement("div");a.textContent="Contact info goes here!",r.appendChild(a),r.id="about-contact";const d=document.createElement("div"),c=document.createElement("h1");c.textContent="Location",d.appendChild(c);const s=document.createElement("div");s.textContent="Location info goes here",d.appendChild(s),d.id="about-location",n.appendChild(e),n.appendChild(r),n.appendChild(d),content_container.appendChild(n),content}(),N()}))},M=t.p+"9117b2e8bee94da7b6a4.png",j=function(){const n=document.getElementById("content_header"),e=document.createElement("button");e.id="menu";for(let n=0;n<3;n++){const n=document.createElement("div");n.classList.add("menu-line"),e.appendChild(n)}n.appendChild(e);const t=[{name:"Home"},{name:"Menu"},{name:"About"}],i=document.createElement("div");i.id="nav-bar",i.style.display="none";const r=document.createElement("img");r.src=M,i.appendChild(r);const o=document.createElement("div");o.id="nav-container";for(let n=0;n<t.length;n++){const e=document.createElement("button");e.textContent=t[n].name,e.setAttribute("id","nav"+n),o.appendChild(e)}i.appendChild(o);const a=()=>{let n=i.style.display;"none"==n&&(i.style.display="flex"),"flex"==n&&(i.style.display="none")};r.addEventListener("click",a),e.addEventListener("click",a),content.appendChild(i),z()};var P=t(426),H={};H.styleTagTransform=b(),H.setAttributes=u(),H.insert=p().bind(null,"head"),H.domAPI=s(),H.insertStyleElement=f(),d()(P.Z,H),P.Z&&P.Z.locals&&P.Z.locals,_(),j(),document.body.appendChild(o()),N()})()})();