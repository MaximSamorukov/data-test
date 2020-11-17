(()=>{var e={171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n  font-family: 'Boogaloo', cursive;\n}\nbody {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n}\n.game-container {\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  height: 100%;\n  background-color: white;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  flex-wrap: wrap;\n  /* border: 1px solid black; */\n  flex-direction: column;\n}\n\n.menu-container {\n  width: 255px;\n  min-width: 255px;\n  max-width: 255px;\n  height: 80px;\n  min-height: 80px;\n  max-height: 80px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px, solid black;\n  display: flex;\n  justify-content: start;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  /* background-color: turquoise; */\n}\n\nselect {\n  margin-right: auto;\n  margin-left: auto;\n  width: 70px;\n  height: 22px;\n  margin: 0;\n  margin-right: 3px;\n\n\n}\n\n.select-btn, .save-btn {\n  margin-right: 16px;\n}\n.load-btn {\n  margin: 0;\n}\n\n.game-area {\n  width: 255px;\n  min-width: 255px;\n  max-width: 255px;\n  height: 255px;\n  min-height: 255px;\n  max-height: 255px;\n  background-color: rgb(255, 255, 255);\n  border: 3px solid rgb(255, 201, 101);\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  padding: 2px;\n}\n.four-on-four {\n\n}\n\n.three-on-three {\n\n}\n\n.eight-on-eight {\n\n}\n\n.blue {\n  background-color: rgb(255, 255, 255);\n  border: 3px solid rgb(255, 201, 101);\n}\n\n\n.item-62 {\n  width: 60px;\n  height: 60px;\n  background-color: rgb(255, 218, 149);\n  border-radius: 10px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 28px;\n  cursor: pointer;\n  /* animation: animation 2s 1 reverse; */\n}\n\n.item-50 {\n  width: 46px;\n  height: 46px;\n  background-color: rgb(255, 218, 149);\n  border-radius: 10px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 26px;\n  cursor: pointer;\n}\n\n.item-41 {\n  width: 39px;\n  height: 39px;\n  background-color: rgb(255, 218, 149);\n  border-radius: 8px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 8px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.item-35 {\n  width: 33px;\n  height: 33px;\n  background-color: rgb(255, 218, 149);\n  border-radius: 8px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 2px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.item-83 {\n  width: 80px;\n  height: 80px;\n  background-color: rgb(255, 218, 149);\n  border-radius: 15px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 12px;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.item-31 {\n  width: 29px;\n  height: 29px;\n  background-color: rgb(255, 218, 149);\n  border-radius: 3px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 3px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.item-zero {\n  background-color: rgb(255, 255, 255);\n  border: 0;\n  color: white;\n  animation: animation 1s ease-out 1;\n}\n\n\n\n.green {\n  background-color: rgb(89, 226, 43);\n}\n\n.win {\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.best {\n  /* border: 1px solid black; */\n  cursor: pointer;\n}\n\n.table-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-width:  100%;\n  max-width: 100%;\n  height: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: blanchedalmond;\n  opacity: 1;\n}\n\n.table {\n  margin-top: 100px;\n  width: 310px;\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: stretch;\n  margin-right: auto;\n  margin-left: auto;\n\n\n}\n\n.table-item {\n  color: black;\n  height: 30px;\n  background-color:white;\n  width: 100%;\n  font-size: 22px;\n  margin-top: 10px;\n  opacity: 0.7;\n\n\n}\n\nspan {\n  width: 200px;\n  margin-right: 30px;\n}\n\n.table-noitem {\n  text-align: center;\n}\n\n.background {\n  /* background-color: violet; */\n}\n\n.main {\n  /* background-color: turquoise; */\n}\n\n.item-opacity {\n  opacity: 0;\n}\n\n.click-zone {\n  /* border: 1px solid violet; */\n\n}\n\n.time-zone {\n  /* border: 1px solid violet; */\n  margin-left: 15px;\n  margin-right: 25px;\n}\n\n@keyframes animation {\n  from { background-color: rgb(255, 218, 149); border: 3px solid rgb(255, 201, 101); }\n  10% { background-color: rgb(255, 221, 160); border: 3px solid rgb(255, 207, 116); }\n  20% { background-color: rgb(255, 224, 170); border: 3px solid rgb(255, 215, 135); }\n  30% { background-color: rgb(255, 227, 180); border: 3px solid rgb(255, 220, 150); }\n  40% { background-color: rgb(255, 230, 193); border: 3px solid rgb(255, 225, 165); }\n  50% { background-color: rgb(255, 234, 205); border: 3px solid rgb(255, 230, 180); }\n  60% { background-color: rgb(255, 238, 218); border: 3px solid rgb(255, 235, 195); }\n  70% { background-color: rgb(255, 242, 230); border: 3px solid rgb(255, 240, 210); }\n  80% { background-color: rgb(255, 246, 240); border: 3px solid rgb(255, 245, 225); }\n  90% { background-color: rgb(255, 250, 247); border: 3px solid rgb(255, 250, 240); }\n  to { background-color: rgb(255, 255, 255); border: 3px solid rgb(255, 255, 255); }\n}",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},536:e=>{e.exports=function(e,t){const n=t,o=t.getBoundingClientRect().left,r=t.getBoundingClientRect().top,i=document.createElement("div"),a=e.target.textContent;i.textContent=a;const s=e.target.className;i.className=`${s} main`,e.target.className=`${s} item-zero`;const c=e.clientX-e.target.getBoundingClientRect().left,l=e.clientY-e.target.getBoundingClientRect().top;function d(e,t){i.style.left=e-c+"px",i.style.top=t-l+"px"}function u(e){e.preventDefault(),d(e.pageX,e.pageY)}document.addEventListener("mousemove",u),i.style.position="absolute",i.style.zIndex=1e3,document.body.append(i),d(e.pageX,e.pageY),i.addEventListener("mouseup",(function(e){const t=e;t.preventDefault();const i=t.target.className;t.target.className="item-opacity",t.target.style.left=`${o}px`,t.target.style.top=`${r}px`,document.removeEventListener("mousemove",u),t.target.onmouseup=null,n.className=i,n.textContent=t.target.textContent,t.target.remove()}))}},527:e=>{e.exports=function(){const e=document.querySelector("body"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("div");t.appendChild(n),n.className="table",t.className="table-container";const o=window.localStorage,r=JSON.parse(o.getItem("results"));let i=[];r.length>0&&(i=r.map(((e,t)=>`<div class="table-item"><span>${t<9?`0${t+1}`:`${t+1}`}.</span><span>Time: ${e.time}</span> <span>Steps:${e.clicks}</span></div>`)));const a=r.length>0?i.join(""):'<div class="table-item table-noitem">No results yet</div>';n.innerHTML=a,t.addEventListener("click",(()=>{e.removeChild(t)}))}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:d,updater:h(m,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,g=0;function h(e,t){var n,o,r;if(t.singleton){var i=g++;n=p||(p=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";var e=n(379),t=n.n(e),o=n(171);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=n.p+"97feba23a2c79ed802610c1aed594ad4.wav",i=n(536),a=n(527),s={iftime:!1,delta:0,key:!1,timeOrigin:0,verdict:!1,steps:0,soundfile:"",randomArray(e){let t=[];for(let n=0;n<e;n+=1)t.push(n);const n=[];for(let o=0;o<e;o+=1){const e=t[Math.floor(Math.random()*t.length)];t=t.filter((t=>t!==e)),n.push(e)}return n},myFunc(){const e=document.querySelector(".time-zone");this.timeOrigin=0===this.timeOrigin?new Date:this.timeOrigin;const t=new Date,n=new Date(t.valueOf()-this.timeOrigin.valueOf()+this.delta),o=[n.getUTCHours()<10?`0${n.getUTCHours()}`:`${n.getUTCHours()}`,n.getMinutes()<10?`0${n.getMinutes()}`:`${n.getMinutes()}`,n.getSeconds()<10?`0${n.getSeconds()}`:`${n.getSeconds()}`];e.textContent=e.textContent.split(":").map(((e,t)=>o[t])).join(":")},fnTime(){const e=document.querySelector(".game-area");if(!1!==this.iftime){if(this.iftime=!1,this.myFunc(),!1===this.key){const e=window.setInterval(this.myFunc.bind(this),1e3);this.key=e}e.removeEventListener("mousedown",this.fnTime)}},canMove(e,t=16){const{children:n}=e.target.parentNode,o=Array.from(n);let r=0;o.map(((e,t)=>(""===e.textContent&&(r=t+1),e.textContent)));const i=t**.5,a=Math.ceil(r/i),s=r%i==0?i:r%i;return r={row:a,column:s},0!==[{row:a-1,column:s},{row:a+1,column:s},{row:a,column:s+1},{row:a,column:s-1}].filter((e=>((e,t)=>{let n=Object.values(e);return n=n.filter((e=>e<t+1&&e>0)),2===n.length&&e})(e,t**.5))).map((e=>(({row:e,column:t},n)=>n[(e-1)*n.length**.5+(t-1)])(e,n))).filter((t=>t===e.target)).length},move(e){if(this.verdict=!1,this.canMove(e,this.n**2)){this.steps+=1,this.iftime=!0,this.soundfile.play(),document.querySelector(".click-zone").textContent=`Clicks: ${this.steps}`;const t=e.target,{children:n}=e.target.parentNode,o=Array.from(n).filter((e=>""===e.textContent))[0];i(e,o),t.textContent=""}},items(e=4,t){const n=document.querySelector(".game-area");this.randomArray({3:9,4:16,5:25,6:36,7:49,8:64}[`${e}`]).map((o=>{const r=document.createElement("div");return r.className=`item-${t} blue`,n.appendChild(r),0===o?(r.className=`item-${t} item-zero`,r.textContent=""):r.textContent=`${o}`,this.n=e,r.addEventListener("mousedown",(e=>{this.move(e),this.verdict})),r.addEventListener("mouseup",(()=>{this.verdict,this.verdict=!1})),o}))},createItemsOnLoad(e){const t=e.split(":").length**.5,n=Math.floor(25/t*10),o=document.querySelector(".game-area");e.split(":").map((e=>{const r=document.createElement("div");return r.className=`item-${n} blue`,o.appendChild(r),""===e?(r.className=`item-${n} item-zero`,r.textContent=""):r.textContent=`${e}`,this.n=t,r.addEventListener("mousedown",(e=>{this.move(e)})),r.addEventListener("mouseup",(()=>{})),e}))},makeSelected(e,t){e[{3:0,4:1,5:2,6:3,7:4,8:5}[t]].selected=!0},gameAreaConstruct(e){const t=Math.floor(25/e*10),n={3:"three-on-three",4:"four-on-four",5:"five-on-five",6:"six-on-six",7:"seven-on-seven",8:"eight-on-eight"},o=document.body,r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("select"),c=document.createElement("option"),l=document.createElement("option"),d=document.createElement("option"),u=document.createElement("option"),m=document.createElement("option"),p=document.createElement("option"),g=document.createElement("button");g.name="save-btn",g.textContent="Save",g.className="save-btn",g.addEventListener("click",(()=>{const e=document.querySelector(".game-area").childNodes,t=this.steps,n=document.querySelector(".time-zone").textContent;let o="";e.forEach((e=>(o=`${o}:${e.textContent}`,e))),o=o.slice(1),o=`${t};${n};${o}`,window.localStorage.setItem("data",o)}));const h=document.createElement("button");h.name="load-btn",h.textContent="Load",h.className="load-btn",h.addEventListener("click",(()=>{this.steps=0,window.clearInterval(this.key),this.key=!1;const e=window.localStorage.getItem("data"),[t,n,o]=e.split(";"),r=new Date(n.split(":").map((e=>parseInt(e,10))).reduce((function(e,t,n){return 0===n?e+60*t*60*1e3:1===n?e+60*t*1e3:2===n?e+1e3*t:t}),0));this.delta=r.valueOf(),this.steps=parseInt(t,10),this.timeOrigin=0;const i=document.querySelector(".click-zone");document.querySelector(".time-zone").textContent=n,i.textContent=`Clicks: ${t}`;const a=document.querySelector(".game-area");a.innerHTML="",this.createItemsOnLoad(o),this.makeSelected(s,o.split(":").length**.5),a.addEventListener("mousedown",this.fnTime.bind(this))}));const b=document.createElement("button");b.type="submit",b.name="select-btn",b.textContent="New game",b.className="select-btn",b.addEventListener("click",(e=>{const t=parseInt(e.target.parentNode.children[0].value[0],10);o.removeChild(r),this.init(t)})),c.textContent="3 x 3",l.textContent="4 x 4",d.textContent="5 x 5",u.textContent="6 x 6",m.textContent="7 x 7",p.textContent="8 x 8",s.name="gameOptions",c.value="3 x 3",l.value="4 x 4",d.value="5 x 5",u.value="6 x 6",m.value="7 x 7",p.value="8 x 8",s.appendChild(c),s.appendChild(l),s.appendChild(d),s.appendChild(u),s.appendChild(m),s.appendChild(p),this.makeSelected(s,e);const x=document.createElement("div");x.textContent="Clicks: 0",x.className="click-zone";const f=document.createElement("div");f.className="time-zone",f.textContent="00:00:00";const v=document.createElement("div");v.className="best",v.addEventListener("click",this.getBest.bind(this)),v.textContent="Show best results";const w=document.createElement("div");w.className="win",w.addEventListener("click",this.ifwin.bind(this)),w.textContent="Win",r.appendChild(a),a.appendChild(s),a.appendChild(b),a.appendChild(g),a.appendChild(h),a.appendChild(x),a.appendChild(f),a.appendChild(v),a.className="menu-container",r.appendChild(i),r.className=`game-container ${n[`${e}`]}-container`,i.className=`game-area ${n[`${e}`]}-game-area`,o.appendChild(r),this.items(e,t)},getBest(){a()},ifwin(){const e=this.steps,t={time:document.querySelector(".time-zone").textContent,clicks:e},n=window.localStorage;let o=JSON.parse(n.getItem("results"));o.push(t),o.sort(((e,t)=>e.clicks-t.clicks)),o=o.slice(0,10);const r=JSON.stringify(o);n.setItem("results",r)},init(e){this.key&&window.clearInterval(this.key),this.key=!1,this.soundfile=new Audio(r),this.delta=0,this.timeOrigin=0,this.steps=0,this.gameAreaConstruct(e);const t=window.localStorage;t.getItem("results")||t.setItem("results",JSON.stringify([])),document.querySelector(".game-area").addEventListener("mousedown",this.fnTime.bind(this))}};window.addEventListener("DOMContentLoaded",(()=>{s.init(4)}))})()})();