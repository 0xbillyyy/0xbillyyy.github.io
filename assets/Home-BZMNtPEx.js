import{r as v,e as $,j as w,m as X}from"./index-B1sIHEqw.js";import{C as Y}from"./CardNavigation-DwBrcXyX.js";function F(r,o,i,t){return new(i||(i=Promise))(function(e,c){function a(l){try{f(t.next(l))}catch(n){c(n)}}function s(l){try{f(t.throw(l))}catch(n){c(n)}}function f(l){var n;l.done?e(l.value):(n=l.value,n instanceof i?n:new i(function(d){d(n)})).then(a,s)}f((t=t.apply(r,[])).next())})}function S(r,o){var i,t,e,c,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(f){return function(l){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,t&&(e=2&n[0]?t.return:n[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,n[1])).done)return e;switch(t=0,e&&(n=[2&n[0],e.value]),n[0]){case 0:case 1:e=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,t=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(e=a.trys,!((e=e.length>0&&e[e.length-1])||n[0]!==6&&n[0]!==2)){a=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){a.label=n[1];break}if(n[0]===6&&a.label<e[1]){a.label=e[1],e=n;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(n);break}e[2]&&a.ops.pop(),a.trys.pop();continue}n=o.call(r,a)}catch(d){n=[6,d],t=0}finally{i=e=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([f,l])}}}function H(r){var o=typeof Symbol=="function"&&Symbol.iterator,i=o&&r[o],t=0;if(i)return i.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function x(r,o){var i=typeof Symbol=="function"&&r[Symbol.iterator];if(!i)return r;var t,e,c=i.call(r),a=[];try{for(;(o===void 0||o-- >0)&&!(t=c.next()).done;)a.push(t.value)}catch(s){e={error:s}}finally{try{t&&!t.done&&(i=c.return)&&i.call(c)}finally{if(e)throw e.error}}return a}function j(r,o,i){if(arguments.length===2)for(var t,e=0,c=o.length;e<c;e++)!t&&e in o||(t||(t=Array.prototype.slice.call(o,0,e)),t[e]=o[e]);return r.concat(t||Array.prototype.slice.call(o))}function J(r,o,i,t,e){for(var c=[],a=5;a<arguments.length;a++)c[a-5]=arguments[a];return F(this,void 0,void 0,function(){var s,f,l,n,d,p;return S(this,function(h){switch(h.label){case 0:h.trys.push([0,12,13,14]),s=H(c),f=s.next(),h.label=1;case 1:if(f.done)return[3,11];switch(l=f.value,typeof l){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Z(r,o,l,i,t,e)];case 3:return h.sent(),[3,10];case 4:return[4,K(l)];case 5:return h.sent(),[3,10];case 6:return[4,l.apply(void 0,j([r,o,i,t,e],x(c),!1))];case 7:return h.sent(),[3,10];case 8:return[4,l];case 9:h.sent(),h.label=10;case 10:return f=s.next(),[3,1];case 11:return[3,14];case 12:return n=h.sent(),d={error:n},[3,14];case 13:try{f&&!f.done&&(p=s.return)&&p.call(s)}finally{if(d)throw d.error}return[7];case 14:return[2]}})})}function Z(r,o,i,t,e,c){return F(this,void 0,void 0,function(){var a,s;return S(this,function(f){switch(f.label){case 0:return a=r.textContent||"",s=function(l,n){var d=x(n).slice(0);return j(j([],x(l),!1),[NaN],!1).findIndex(function(p,h){return d[h]!==p})}(a,i),[4,ee(r,j(j([],x(re(a,o,s)),!1),x(te(i,o,s)),!1),t,e,c)];case 1:return f.sent(),[2]}})})}function K(r){return F(this,void 0,void 0,function(){return S(this,function(o){switch(o.label){case 0:return[4,new Promise(function(i){return setTimeout(i,r)})];case 1:return o.sent(),[2]}})})}function ee(r,o,i,t,e){return F(this,void 0,void 0,function(){var c,a,s,f,l,n,d,p,h,A,G,T,z;return S(this,function(E){switch(E.label){case 0:if(c=o,e){for(a=0,s=1;s<o.length;s++)if(f=x([o[s-1],o[s]],2),l=f[0],(n=f[1]).length>l.length||n===""){a=s;break}c=o.slice(a,o.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),d=H(function(M){var _,R,N,k,W,P,C;return S(this,function(b){switch(b.label){case 0:_=function(I){return S(this,function(q){switch(q.label){case 0:return[4,{op:function(D){return requestAnimationFrame(function(){return D.textContent=I})},opCode:function(D){var L=D.textContent||"";return I===""||L.length>I.length?"DELETE":"WRITING"}}];case 1:return q.sent(),[2]}})},b.label=1;case 1:b.trys.push([1,6,7,8]),R=H(M),N=R.next(),b.label=2;case 2:return N.done?[3,5]:(k=N.value,[5,_(k)]);case 3:b.sent(),b.label=4;case 4:return N=R.next(),[3,2];case 5:return[3,8];case 6:return W=b.sent(),P={error:W},[3,8];case 7:try{N&&!N.done&&(C=R.return)&&C.call(R)}finally{if(P)throw P.error}return[7];case 8:return[2]}})}(c)),p=d.next(),E.label=2;case 2:return p.done?[3,5]:(h=p.value,A=h.opCode(r)==="WRITING"?i+i*(Math.random()-.5):t+t*(Math.random()-.5),h.op(r),[4,K(A)]);case 3:E.sent(),E.label=4;case 4:return p=d.next(),[3,2];case 5:return[3,8];case 6:return G=E.sent(),T={error:G},[3,8];case 7:try{p&&!p.done&&(z=d.return)&&z.call(d)}finally{if(T)throw T.error}return[7];case 8:return[2]}})})}function te(r,o,i){var t,e;return i===void 0&&(i=0),S(this,function(c){switch(c.label){case 0:t=o(r),e=t.length,c.label=1;case 1:return i<e?[4,t.slice(0,++i).join("")]:[3,3];case 2:return c.sent(),[3,1];case 3:return[2]}})}function re(r,o,i){var t,e;return i===void 0&&(i=0),S(this,function(c){switch(c.label){case 0:t=o(r),e=t.length,c.label=1;case 1:return e>i?[4,t.slice(0,--e).join("")]:[3,3];case 2:return c.sent(),[3,1];case 3:return[2]}})}var ne="index-module_type__E-SaG";(function(r,o){o===void 0&&(o={});var i=o.insertAt;if(typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",i==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var ie=v.memo(v.forwardRef(function(r,o){var i=r.sequence,t=r.repeat,e=r.className,c=r.speed,a=c===void 0?40:c,s=r.deletionSpeed,f=r.omitDeletionAnimation,l=f!==void 0&&f,n=r.preRenderFirstString,d=n!==void 0&&n,p=r.wrapper,h=p===void 0?"span":p,A=r.splitter,G=A===void 0?function(u){return j([],x(u),!1)}:A,T=r.cursor,z=T===void 0||T,E=r.style,M=function(u,m){var g={};for(var y in u)Object.prototype.hasOwnProperty.call(u,y)&&m.indexOf(y)<0&&(g[y]=u[y]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var O=0;for(y=Object.getOwnPropertySymbols(u);O<y.length;O++)m.indexOf(y[O])<0&&Object.prototype.propertyIsEnumerable.call(u,y[O])&&(g[y[O]]=u[y[O]])}return g}(r,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),_=M["aria-label"],R=M["aria-hidden"],N=M.role;s||(s=a);var k=new Array(2).fill(40);[a,s].forEach(function(u,m){switch(typeof u){case"number":k[m]=Math.abs(u-100);break;case"object":var g=u.type,y=u.value;if(typeof y!="number")break;g==="keyStrokeDelayInMs"&&(k[m]=y)}});var W,P,C,b,I,q,D=k[0],L=k[1],B=function(u,m){m===void 0&&(m=null);var g=v.useRef(m);return v.useEffect(function(){u&&(typeof u=="function"?u(g.current):u.current=g.current)},[u]),g}(o),Q=ne;W=e?"".concat(z?Q+" ":"").concat(e):z?Q:"",P=v.useRef(function(){var u,m=i;t===1/0?u=J:typeof t=="number"&&(m=Array(1+t).fill(i).flat());var g=u?j(j([],x(m),!1),[u],!1):j([],x(m),!1);return J.apply(void 0,j([B.current,G,D,L,l],x(g),!1)),function(){B.current}}),C=v.useRef(),b=v.useRef(!1),I=v.useRef(!1),q=x(v.useState(0),2)[1],b.current&&(I.current=!0),v.useEffect(function(){return b.current||(C.current=P.current(),b.current=!0),q(function(u){return u+1}),function(){I.current&&C.current&&C.current()}},[]);var U=h,V=d?i.find(function(u){return typeof u=="string"})||"":null;return $.createElement(U,{"aria-hidden":R,"aria-label":_,role:N,style:E,className:W,children:_?$.createElement("span",{"aria-hidden":"true",ref:B,children:V}):V,ref:_?void 0:B})}),function(r,o){return!0});const oe="/Riset/dist/img/FotoBaru.png";function se(){const[r,o]=v.useState(window.innerWidth<=768),i=v.useRef(null);v.useEffect(()=>{const e=()=>{o(window.innerWidth<=768)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const t=r?{left:-30,right:window.innerWidth-330,top:-110,bottom:170}:{left:-400,right:window.innerWidth-1e3,top:-70,bottom:190};return w.jsxs("div",{className:"min-h-screen bg-custom-bg",children:[w.jsx("div",{className:"absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text",style:{marginTop:"-100px"}}),w.jsx("div",{className:"flex justify-center",children:w.jsx(X.div,{ref:i,dragConstraints:t,dragTransition:{bounceStiffness:600,bounceDamping:10},whileHover:{scale:1.1},drag:!0,style:{backgroundImage:`url(${oe})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",marginTop:"50px"},className:"w-64 h-96 z-50"})}),w.jsxs("div",{className:"flex flex-col justify-center pt-5 items-center",children:[w.jsx("div",{children:w.jsx("h1",{className:"text-2xl font-bold text-custom-headline",children:"Bilhaq Syahbani Sahatmojo"})}),w.jsx("div",{className:"text-custom-paragraph",children:w.jsx(ie,{sequence:["I'm Not Programmer!",1e3,"I'm Not Hacker!",1e3,"I excel at 'Ctrl+C' and 'Ctrl+V'!",1e3],speed:50,style:{fontSize:"20px"},repeat:1/0})})]}),w.jsx(Y,{})]})}export{se as default};
