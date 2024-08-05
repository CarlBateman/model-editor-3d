(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var bs={exports:{}};bs.exports;(function(i,e){(function(t,n){i.exports=n()})(Vu,function(){function t(o,s){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);s&&(h=h.filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable})),c.push.apply(c,h)}return c}function n(o){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?t(Object(c),!0).forEach(function(h){d(o,h,c[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(h){Object.defineProperty(o,h,Object.getOwnPropertyDescriptor(c,h))})}return o}function r(o){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},r(o)}function a(o,s){if(!(o instanceof s))throw new TypeError("Cannot call a class as a function")}function l(o,s){for(var c=0;c<s.length;c++){var h=s[c];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(o,T(h.key),h)}}function u(o,s,c){return s&&l(o.prototype,s),Object.defineProperty(o,"prototype",{writable:!1}),o}function d(o,s,c){return(s=T(s))in o?Object.defineProperty(o,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[s]=c,o}function f(o,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(s&&s.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),s&&y(o,s)}function g(o){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},g(o)}function y(o,s){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,h){return c.__proto__=h,c},y(o,s)}function v(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function x(o){var s=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var c,h=g(o);if(s){var p=g(this).constructor;c=Reflect.construct(h,arguments,p)}else c=h.apply(this,arguments);return function(M,b){if(b&&(typeof b=="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(M)}(this,c)}}function E(){return E=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(o,s,c){var h=function(M,b){for(;!Object.prototype.hasOwnProperty.call(M,b)&&(M=g(M))!==null;);return M}(o,s);if(h){var p=Object.getOwnPropertyDescriptor(h,s);return p.get?p.get.call(arguments.length<3?o:c):p.value}},E.apply(this,arguments)}function T(o){var s=function(c,h){if(typeof c!="object"||c===null)return c;var p=c[Symbol.toPrimitive];if(p!==void 0){var M=p.call(c,h);if(typeof M!="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o,"string");return typeof s=="symbol"?s:s+""}var _=function(o){return!(!o||!o.Window)&&o instanceof o.Window},m=void 0,L=void 0;function D(o){m=o;var s=o.document.createTextNode("");s.ownerDocument!==o.document&&typeof o.wrap=="function"&&o.wrap(s)===s&&(o=o.wrap(o)),L=o}function U(o){return _(o)?o:(o.ownerDocument||o).defaultView||L.window}typeof window<"u"&&window&&D(window);var G=function(o){return!!o&&r(o)==="object"},F=function(o){return typeof o=="function"},w={window:function(o){return o===L||_(o)},docFrag:function(o){return G(o)&&o.nodeType===11},object:G,func:F,number:function(o){return typeof o=="number"},bool:function(o){return typeof o=="boolean"},string:function(o){return typeof o=="string"},element:function(o){if(!o||r(o)!=="object")return!1;var s=U(o)||L;return/object|function/.test(typeof Element>"u"?"undefined":r(Element))?o instanceof Element||o instanceof s.Element:o.nodeType===1&&typeof o.nodeName=="string"},plainObject:function(o){return G(o)&&!!o.constructor&&/function Object\b/.test(o.constructor.toString())},array:function(o){return G(o)&&o.length!==void 0&&F(o.splice)}};function W(o){var s=o.interaction;if(s.prepared.name==="drag"){var c=s.prepared.axis;c==="x"?(s.coords.cur.page.y=s.coords.start.page.y,s.coords.cur.client.y=s.coords.start.client.y,s.coords.velocity.client.y=0,s.coords.velocity.page.y=0):c==="y"&&(s.coords.cur.page.x=s.coords.start.page.x,s.coords.cur.client.x=s.coords.start.client.x,s.coords.velocity.client.x=0,s.coords.velocity.page.x=0)}}function I(o){var s=o.iEvent,c=o.interaction;if(c.prepared.name==="drag"){var h=c.prepared.axis;if(h==="x"||h==="y"){var p=h==="x"?"y":"x";s.page[p]=c.coords.start.page[p],s.client[p]=c.coords.start.client[p],s.delta[p]=0}}}var A={id:"actions/drag",install:function(o){var s=o.actions,c=o.Interactable,h=o.defaults;c.prototype.draggable=A.draggable,s.map.drag=A,s.methodDict.drag="draggable",h.actions.drag=A.defaults},listeners:{"interactions:before-action-move":W,"interactions:action-resume":W,"interactions:action-move":I,"auto-start:check":function(o){var s=o.interaction,c=o.interactable,h=o.buttons,p=c.options.drag;if(p&&p.enabled&&(!s.pointerIsDown||!/mouse|pointer/.test(s.pointerType)||h&c.options.drag.mouseButtons))return o.action={name:"drag",axis:p.lockAxis==="start"?p.startAxis:p.lockAxis},!1}},draggable:function(o){return w.object(o)?(this.options.drag.enabled=o.enabled!==!1,this.setPerAction("drag",o),this.setOnEvents("drag",o),/^(xy|x|y|start)$/.test(o.lockAxis)&&(this.options.drag.lockAxis=o.lockAxis),/^(xy|x|y)$/.test(o.startAxis)&&(this.options.drag.startAxis=o.startAxis),this):w.bool(o)?(this.options.drag.enabled=o,this):this.options.drag},beforeMove:W,move:I,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(o){return o.search("drag")===0}},Y=A,$={init:function(o){var s=o;$.document=s.document,$.DocumentFragment=s.DocumentFragment||H,$.SVGElement=s.SVGElement||H,$.SVGSVGElement=s.SVGSVGElement||H,$.SVGElementInstance=s.SVGElementInstance||H,$.Element=s.Element||H,$.HTMLElement=s.HTMLElement||$.Element,$.Event=s.Event,$.Touch=s.Touch||H,$.PointerEvent=s.PointerEvent||s.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function H(){}var Q=$,te={init:function(o){var s=Q.Element,c=o.navigator||{};te.supportsTouch="ontouchstart"in o||w.func(o.DocumentTouch)&&Q.document instanceof o.DocumentTouch,te.supportsPointerEvent=c.pointerEnabled!==!1&&!!Q.PointerEvent,te.isIOS=/iP(hone|od|ad)/.test(c.platform),te.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),te.isIe9=/MSIE 9/.test(c.userAgent),te.isOperaMobile=c.appName==="Opera"&&te.supportsTouch&&/Presto/.test(c.userAgent),te.prefixedMatchesSelector="matches"in s.prototype?"matches":"webkitMatchesSelector"in s.prototype?"webkitMatchesSelector":"mozMatchesSelector"in s.prototype?"mozMatchesSelector":"oMatchesSelector"in s.prototype?"oMatchesSelector":"msMatchesSelector",te.pEventTypes=te.supportsPointerEvent?Q.PointerEvent===o.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,te.wheelEvent=Q.document&&"onmousewheel"in Q.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},q=te;function oe(o,s){if(o.contains)return o.contains(s);for(;s;){if(s===o)return!0;s=s.parentNode}return!1}function ne(o,s){for(;w.element(o);){if(he(o,s))return o;o=le(o)}return null}function le(o){var s=o.parentNode;if(w.docFrag(s)){for(;(s=s.host)&&w.docFrag(s););return s}return s}function he(o,s){return L!==m&&(s=s.replace(/\/deep\//g," ")),o[q.prefixedMatchesSelector](s)}var Pe=function(o){return o.parentNode||o.host};function Xe(o,s){for(var c,h=[],p=o;(c=Pe(p))&&p!==s&&c!==p.ownerDocument;)h.unshift(p),p=c;return h}function ht(o,s,c){for(;w.element(o);){if(he(o,s))return!0;if((o=le(o))===c)return he(o,s)}return!1}function ae(o){return o.correspondingUseElement||o}function _e(o){var s=o instanceof Q.SVGElement?o.getBoundingClientRect():o.getClientRects()[0];return s&&{left:s.left,right:s.right,top:s.top,bottom:s.bottom,width:s.width||s.right-s.left,height:s.height||s.bottom-s.top}}function De(o){var s,c=_e(o);if(!q.isIOS7&&c){var h={x:(s=(s=U(o))||L).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop};c.left+=h.x,c.right+=h.x,c.top+=h.y,c.bottom+=h.y}return c}function Se(o){for(var s=[];o;)s.push(o),o=le(o);return s}function it(o){return!!w.string(o)&&(Q.document.querySelector(o),!0)}function ge(o,s){for(var c in s)o[c]=s[c];return o}function Z(o,s,c){return o==="parent"?le(c):o==="self"?s.getRect(c):ne(c,o)}function ft(o,s,c,h){var p=o;return w.string(p)?p=Z(p,s,c):w.func(p)&&(p=p.apply(void 0,h)),w.element(p)&&(p=De(p)),p}function Be(o){return o&&{x:"x"in o?o.x:o.left,y:"y"in o?o.y:o.top}}function mt(o){return!o||"x"in o&&"y"in o||((o=ge({},o)).x=o.left||0,o.y=o.top||0,o.width=o.width||(o.right||0)-o.x,o.height=o.height||(o.bottom||0)-o.y),o}function ze(o,s,c){o.left&&(s.left+=c.x),o.right&&(s.right+=c.x),o.top&&(s.top+=c.y),o.bottom&&(s.bottom+=c.y),s.width=s.right-s.left,s.height=s.bottom-s.top}function Ke(o,s,c){var h=c&&o.options[c];return Be(ft(h&&h.origin||o.options.origin,o,s,[o&&s]))||{x:0,y:0}}function Ge(o,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(N){return!0},h=arguments.length>3?arguments[3]:void 0;if(h=h||{},w.string(o)&&o.search(" ")!==-1&&(o=ct(o)),w.array(o))return o.forEach(function(N){return Ge(N,s,c,h)}),h;if(w.object(o)&&(s=o,o=""),w.func(s)&&c(o))h[o]=h[o]||[],h[o].push(s);else if(w.array(s))for(var p=0,M=s;p<M.length;p++){var b=M[p];Ge(o,b,c,h)}else if(w.object(s))for(var C in s)Ge(ct(C).map(function(N){return"".concat(o).concat(N)}),s[C],c,h);return h}function ct(o){return o.trim().split(/ +/)}var vt=function(o,s){return Math.sqrt(o*o+s*s)},B=["webkit","moz"];function P(o,s){o.__set||(o.__set={});var c=function(p){if(B.some(function(M){return p.indexOf(M)===0}))return 1;typeof o[p]!="function"&&p!=="__set"&&Object.defineProperty(o,p,{get:function(){return p in o.__set?o.__set[p]:o.__set[p]=s[p]},set:function(M){o.__set[p]=M},configurable:!0})};for(var h in s)c(h);return o}function ie(o,s){o.page=o.page||{},o.page.x=s.page.x,o.page.y=s.page.y,o.client=o.client||{},o.client.x=s.client.x,o.client.y=s.client.y,o.timeStamp=s.timeStamp}function ce(o){o.page.x=0,o.page.y=0,o.client.x=0,o.client.y=0}function pe(o){return o instanceof Q.Event||o instanceof Q.Touch}function fe(o,s,c){return o=o||"page",(c=c||{}).x=s[o+"X"],c.y=s[o+"Y"],c}function Fe(o,s){return s=s||{x:0,y:0},q.isOperaMobile&&pe(o)?(fe("screen",o,s),s.x+=window.scrollX,s.y+=window.scrollY):fe("page",o,s),s}function Me(o){return w.number(o.pointerId)?o.pointerId:o.identifier}function be(o,s,c){var h=s.length>1?ye(s):s[0];Fe(h,o.page),function(p,M){M=M||{},q.isOperaMobile&&pe(p)?fe("screen",p,M):fe("client",p,M)}(h,o.client),o.timeStamp=c}function We(o){var s=[];return w.array(o)?(s[0]=o[0],s[1]=o[1]):o.type==="touchend"?o.touches.length===1?(s[0]=o.touches[0],s[1]=o.changedTouches[0]):o.touches.length===0&&(s[0]=o.changedTouches[0],s[1]=o.changedTouches[1]):(s[0]=o.touches[0],s[1]=o.touches[1]),s}function ye(o){for(var s={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<o.length;c++){var h=o[c];for(var p in s)s[p]+=h[p]}for(var M in s)s[M]/=o.length;return s}function Ue(o){if(!o.length)return null;var s=We(o),c=Math.min(s[0].pageX,s[1].pageX),h=Math.min(s[0].pageY,s[1].pageY),p=Math.max(s[0].pageX,s[1].pageX),M=Math.max(s[0].pageY,s[1].pageY);return{x:c,y:h,left:c,top:h,right:p,bottom:M,width:p-c,height:M-h}}function rt(o,s){var c=s+"X",h=s+"Y",p=We(o),M=p[0][c]-p[1][c],b=p[0][h]-p[1][h];return vt(M,b)}function ke(o,s){var c=s+"X",h=s+"Y",p=We(o),M=p[1][c]-p[0][c],b=p[1][h]-p[0][h];return 180*Math.atan2(b,M)/Math.PI}function Re(o){return w.string(o.pointerType)?o.pointerType:w.number(o.pointerType)?[void 0,void 0,"touch","pen","mouse"][o.pointerType]:/touch/.test(o.type||"")||o instanceof Q.Touch?"touch":"mouse"}function je(o){var s=w.func(o.composedPath)?o.composedPath():o.path;return[ae(s?s[0]:o.target),ae(o.currentTarget)]}var $e=function(){function o(s){a(this,o),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=s}return u(o,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),o}();Object.defineProperty($e.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var gt=function(o,s){for(var c=0;c<s.length;c++){var h=s[c];o.push(h)}return o},Qe=function(o){return gt([],o)},S=function(o,s){for(var c=0;c<o.length;c++)if(s(o[c],c,o))return c;return-1},X=function(o,s){return o[S(o,s)]},K=function(o){f(c,o);var s=x(c);function c(h,p,M){var b;a(this,c),(b=s.call(this,p._interaction)).dropzone=void 0,b.dragEvent=void 0,b.relatedTarget=void 0,b.draggable=void 0,b.propagationStopped=!1,b.immediatePropagationStopped=!1;var C=M==="dragleave"?h.prev:h.cur,N=C.element,z=C.dropzone;return b.type=M,b.target=N,b.currentTarget=N,b.dropzone=z,b.dragEvent=p,b.relatedTarget=p.target,b.draggable=p.interactable,b.timeStamp=p.timeStamp,b}return u(c,[{key:"reject",value:function(){var h=this,p=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&p.cur.dropzone===this.dropzone&&p.cur.element===this.target)if(p.prev.dropzone=this.dropzone,p.prev.element=this.target,p.rejected=!0,p.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var M=p.activeDrops,b=S(M,function(N){var z=N.dropzone,O=N.element;return z===h.dropzone&&O===h.target});p.activeDrops.splice(b,1);var C=new c(p,this.dragEvent,"dropdeactivate");C.dropzone=this.dropzone,C.target=this.target,this.dropzone.fire(C)}else this.dropzone.fire(new c(p,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),c}($e);function ue(o,s){for(var c=0,h=o.slice();c<h.length;c++){var p=h[c],M=p.dropzone,b=p.element;s.dropzone=M,s.target=b,M.fire(s),s.propagationStopped=s.immediatePropagationStopped=!1}}function xe(o,s){for(var c=function(M,b){for(var C=[],N=0,z=M.interactables.list;N<z.length;N++){var O=z[N];if(O.options.drop.enabled){var V=O.options.drop.accept;if(!(w.element(V)&&V!==b||w.string(V)&&!he(b,V)||w.func(V)&&!V({dropzone:O,draggableElement:b})))for(var se=0,me=O.getAllElements();se<me.length;se++){var de=me[se];de!==b&&C.push({dropzone:O,element:de,rect:O.getRect(de)})}}}return C}(o,s),h=0;h<c.length;h++){var p=c[h];p.rect=p.dropzone.getRect(p.element)}return c}function qe(o,s,c){for(var h=o.dropState,p=o.interactable,M=o.element,b=[],C=0,N=h.activeDrops;C<N.length;C++){var z=N[C],O=z.dropzone,V=z.element,se=z.rect,me=O.dropCheck(s,c,p,M,V,se);b.push(me?V:null)}var de=function(ve){for(var Ce,we,Oe,tt=[],ut=0;ut<ve.length;ut++){var Ve=ve[ut],nt=ve[Ce];if(Ve&&ut!==Ce)if(nt){var Qt=Pe(Ve),wt=Pe(nt);if(Qt!==Ve.ownerDocument)if(wt!==Ve.ownerDocument)if(Qt!==wt){tt=tt.length?tt:Xe(nt);var on=void 0;if(nt instanceof Q.HTMLElement&&Ve instanceof Q.SVGElement&&!(Ve instanceof Q.SVGSVGElement)){if(Ve===wt)continue;on=Ve.ownerSVGElement}else on=Ve;for(var xn=Xe(on,nt.ownerDocument),Bn=0;xn[Bn]&&xn[Bn]===tt[Bn];)Bn++;var Yr=[xn[Bn-1],xn[Bn],tt[Bn]];if(Yr[0])for(var xr=Yr[0].lastChild;xr;){if(xr===Yr[1]){Ce=ut,tt=xn;break}if(xr===Yr[2])break;xr=xr.previousSibling}}else Oe=nt,(parseInt(U(we=Ve).getComputedStyle(we).zIndex,10)||0)>=(parseInt(U(Oe).getComputedStyle(Oe).zIndex,10)||0)&&(Ce=ut);else Ce=ut}else Ce=ut}return Ce}(b);return h.activeDrops[de]||null}function et(o,s,c){var h=o.dropState,p={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(p.activate=new K(h,c,"dropactivate"),p.activate.target=null,p.activate.dropzone=null),c.type==="dragend"&&(p.deactivate=new K(h,c,"dropdeactivate"),p.deactivate.target=null,p.deactivate.dropzone=null),h.rejected||(h.cur.element!==h.prev.element&&(h.prev.dropzone&&(p.leave=new K(h,c,"dragleave"),c.dragLeave=p.leave.target=h.prev.element,c.prevDropzone=p.leave.dropzone=h.prev.dropzone),h.cur.dropzone&&(p.enter=new K(h,c,"dragenter"),c.dragEnter=h.cur.element,c.dropzone=h.cur.dropzone)),c.type==="dragend"&&h.cur.dropzone&&(p.drop=new K(h,c,"drop"),c.dropzone=h.cur.dropzone,c.relatedTarget=h.cur.element),c.type==="dragmove"&&h.cur.dropzone&&(p.move=new K(h,c,"dropmove"),c.dropzone=h.cur.dropzone)),p}function Mt(o,s){var c=o.dropState,h=c.activeDrops,p=c.cur,M=c.prev;s.leave&&M.dropzone.fire(s.leave),s.enter&&p.dropzone.fire(s.enter),s.move&&p.dropzone.fire(s.move),s.drop&&p.dropzone.fire(s.drop),s.deactivate&&ue(h,s.deactivate),c.prev.dropzone=p.dropzone,c.prev.element=p.element}function Pt(o,s){var c=o.interaction,h=o.iEvent,p=o.event;if(h.type==="dragmove"||h.type==="dragend"){var M=c.dropState;s.dynamicDrop&&(M.activeDrops=xe(s,c.element));var b=h,C=qe(c,b,p);M.rejected=M.rejected&&!!C&&C.dropzone===M.cur.dropzone&&C.element===M.cur.element,M.cur.dropzone=C&&C.dropzone,M.cur.element=C&&C.element,M.events=et(c,0,b)}}var dt={id:"actions/drop",install:function(o){var s=o.actions,c=o.interactStatic,h=o.Interactable,p=o.defaults;o.usePlugin(Y),h.prototype.dropzone=function(M){return function(b,C){if(w.object(C)){if(b.options.drop.enabled=C.enabled!==!1,C.listeners){var N=Ge(C.listeners),z=Object.keys(N).reduce(function(V,se){return V[/^(enter|leave)/.test(se)?"drag".concat(se):/^(activate|deactivate|move)/.test(se)?"drop".concat(se):se]=N[se],V},{}),O=b.options.drop.listeners;O&&b.off(O),b.on(z),b.options.drop.listeners=z}return w.func(C.ondrop)&&b.on("drop",C.ondrop),w.func(C.ondropactivate)&&b.on("dropactivate",C.ondropactivate),w.func(C.ondropdeactivate)&&b.on("dropdeactivate",C.ondropdeactivate),w.func(C.ondragenter)&&b.on("dragenter",C.ondragenter),w.func(C.ondragleave)&&b.on("dragleave",C.ondragleave),w.func(C.ondropmove)&&b.on("dropmove",C.ondropmove),/^(pointer|center)$/.test(C.overlap)?b.options.drop.overlap=C.overlap:w.number(C.overlap)&&(b.options.drop.overlap=Math.max(Math.min(1,C.overlap),0)),"accept"in C&&(b.options.drop.accept=C.accept),"checker"in C&&(b.options.drop.checker=C.checker),b}return w.bool(C)?(b.options.drop.enabled=C,b):b.options.drop}(this,M)},h.prototype.dropCheck=function(M,b,C,N,z,O){return function(V,se,me,de,ve,Ce,we){var Oe=!1;if(!(we=we||V.getRect(Ce)))return!!V.options.drop.checker&&V.options.drop.checker(se,me,Oe,V,Ce,de,ve);var tt=V.options.drop.overlap;if(tt==="pointer"){var ut=Ke(de,ve,"drag"),Ve=Fe(se);Ve.x+=ut.x,Ve.y+=ut.y;var nt=Ve.x>we.left&&Ve.x<we.right,Qt=Ve.y>we.top&&Ve.y<we.bottom;Oe=nt&&Qt}var wt=de.getRect(ve);if(wt&&tt==="center"){var on=wt.left+wt.width/2,xn=wt.top+wt.height/2;Oe=on>=we.left&&on<=we.right&&xn>=we.top&&xn<=we.bottom}return wt&&w.number(tt)&&(Oe=Math.max(0,Math.min(we.right,wt.right)-Math.max(we.left,wt.left))*Math.max(0,Math.min(we.bottom,wt.bottom)-Math.max(we.top,wt.top))/(wt.width*wt.height)>=tt),V.options.drop.checker&&(Oe=V.options.drop.checker(se,me,Oe,V,Ce,de,ve)),Oe}(this,M,b,C,N,z,O)},c.dynamicDrop=function(M){return w.bool(M)?(o.dynamicDrop=M,c):o.dynamicDrop},ge(s.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),s.methodDict.drop="dropzone",o.dynamicDrop=!1,p.actions.drop=dt.defaults},listeners:{"interactions:before-action-start":function(o){var s=o.interaction;s.prepared.name==="drag"&&(s.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(o,s){var c=o.interaction,h=(o.event,o.iEvent);if(c.prepared.name==="drag"){var p=c.dropState;p.activeDrops=[],p.events={},p.activeDrops=xe(s,c.element),p.events=et(c,0,h),p.events.activate&&(ue(p.activeDrops,p.events.activate),s.fire("actions/drop:start",{interaction:c,dragEvent:h}))}},"interactions:action-move":Pt,"interactions:after-action-move":function(o,s){var c=o.interaction,h=o.iEvent;if(c.prepared.name==="drag"){var p=c.dropState;Mt(c,p.events),s.fire("actions/drop:move",{interaction:c,dragEvent:h}),p.events={}}},"interactions:action-end":function(o,s){if(o.interaction.prepared.name==="drag"){var c=o.interaction,h=o.iEvent;Pt(o,s),Mt(c,c.dropState.events),s.fire("actions/drop:end",{interaction:c,dragEvent:h})}},"interactions:stop":function(o){var s=o.interaction;if(s.prepared.name==="drag"){var c=s.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:xe,getDrop:qe,getDropEvents:et,fireDropEvents:Mt,filterEventType:function(o){return o.search("drag")===0||o.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ct=dt;function _t(o){var s=o.interaction,c=o.iEvent,h=o.phase;if(s.prepared.name==="gesture"){var p=s.pointers.map(function(z){return z.pointer}),M=h==="start",b=h==="end",C=s.interactable.options.deltaSource;if(c.touches=[p[0],p[1]],M)c.distance=rt(p,C),c.box=Ue(p),c.scale=1,c.ds=0,c.angle=ke(p,C),c.da=0,s.gesture.startDistance=c.distance,s.gesture.startAngle=c.angle;else if(b||s.pointers.length<2){var N=s.prevEvent;c.distance=N.distance,c.box=N.box,c.scale=N.scale,c.ds=0,c.angle=N.angle,c.da=0}else c.distance=rt(p,C),c.box=Ue(p),c.scale=c.distance/s.gesture.startDistance,c.angle=ke(p,C),c.ds=c.scale-s.gesture.scale,c.da=c.angle-s.gesture.angle;s.gesture.distance=c.distance,s.gesture.angle=c.angle,w.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(s.gesture.scale=c.scale)}}var un={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(o){var s=o.actions,c=o.Interactable,h=o.defaults;c.prototype.gesturable=function(p){return w.object(p)?(this.options.gesture.enabled=p.enabled!==!1,this.setPerAction("gesture",p),this.setOnEvents("gesture",p),this):w.bool(p)?(this.options.gesture.enabled=p,this):this.options.gesture},s.map.gesture=un,s.methodDict.gesture="gesturable",h.actions.gesture=un.defaults},listeners:{"interactions:action-start":_t,"interactions:action-move":_t,"interactions:action-end":_t,"interactions:new":function(o){o.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(o){if(!(o.interaction.pointers.length<2)){var s=o.interactable.options.gesture;if(s&&s.enabled)return o.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(o){return o.search("gesture")===0}},nn=un;function Rn(o,s,c,h,p,M,b){if(!s)return!1;if(s===!0){var C=w.number(M.width)?M.width:M.right-M.left,N=w.number(M.height)?M.height:M.bottom-M.top;if(b=Math.min(b,Math.abs((o==="left"||o==="right"?C:N)/2)),C<0&&(o==="left"?o="right":o==="right"&&(o="left")),N<0&&(o==="top"?o="bottom":o==="bottom"&&(o="top")),o==="left"){var z=C>=0?M.left:M.right;return c.x<z+b}if(o==="top"){var O=N>=0?M.top:M.bottom;return c.y<O+b}if(o==="right")return c.x>(C>=0?M.right:M.left)-b;if(o==="bottom")return c.y>(N>=0?M.bottom:M.top)-b}return!!w.element(h)&&(w.element(s)?s===h:ht(h,s,p))}function hn(o){var s=o.iEvent,c=o.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var h=s;c.interactable.options.resize.square?(c.resizeAxes==="y"?h.delta.x=h.delta.y:h.delta.y=h.delta.x,h.axes="xy"):(h.axes=c.resizeAxes,c.resizeAxes==="x"?h.delta.y=0:c.resizeAxes==="y"&&(h.delta.x=0))}}var Zt,dn,fn={id:"actions/resize",before:["actions/drag"],install:function(o){var s=o.actions,c=o.browser,h=o.Interactable,p=o.defaults;fn.cursors=function(M){return M.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),fn.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,h.prototype.resizable=function(M){return function(b,C,N){return w.object(C)?(b.options.resize.enabled=C.enabled!==!1,b.setPerAction("resize",C),b.setOnEvents("resize",C),w.string(C.axis)&&/^x$|^y$|^xy$/.test(C.axis)?b.options.resize.axis=C.axis:C.axis===null&&(b.options.resize.axis=N.defaults.actions.resize.axis),w.bool(C.preserveAspectRatio)?b.options.resize.preserveAspectRatio=C.preserveAspectRatio:w.bool(C.square)&&(b.options.resize.square=C.square),b):w.bool(C)?(b.options.resize.enabled=C,b):b.options.resize}(this,M,o)},s.map.resize=fn,s.methodDict.resize="resizable",p.actions.resize=fn.defaults},listeners:{"interactions:new":function(o){o.interaction.resizeAxes="xy"},"interactions:action-start":function(o){(function(s){var c=s.iEvent,h=s.interaction;if(h.prepared.name==="resize"&&h.prepared.edges){var p=c,M=h.rect;h._rects={start:ge({},M),corrected:ge({},M),previous:ge({},M),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},p.edges=h.prepared.edges,p.rect=h._rects.corrected,p.deltaRect=h._rects.delta}})(o),hn(o)},"interactions:action-move":function(o){(function(s){var c=s.iEvent,h=s.interaction;if(h.prepared.name==="resize"&&h.prepared.edges){var p=c,M=h.interactable.options.resize.invert,b=M==="reposition"||M==="negate",C=h.rect,N=h._rects,z=N.start,O=N.corrected,V=N.delta,se=N.previous;if(ge(se,O),b){if(ge(O,C),M==="reposition"){if(O.top>O.bottom){var me=O.top;O.top=O.bottom,O.bottom=me}if(O.left>O.right){var de=O.left;O.left=O.right,O.right=de}}}else O.top=Math.min(C.top,z.bottom),O.bottom=Math.max(C.bottom,z.top),O.left=Math.min(C.left,z.right),O.right=Math.max(C.right,z.left);for(var ve in O.width=O.right-O.left,O.height=O.bottom-O.top,O)V[ve]=O[ve]-se[ve];p.edges=h.prepared.edges,p.rect=O,p.deltaRect=V}})(o),hn(o)},"interactions:action-end":function(o){var s=o.iEvent,c=o.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var h=s;h.edges=c.prepared.edges,h.rect=c._rects.corrected,h.deltaRect=c._rects.delta}},"auto-start:check":function(o){var s=o.interaction,c=o.interactable,h=o.element,p=o.rect,M=o.buttons;if(p){var b=ge({},s.coords.cur.page),C=c.options.resize;if(C&&C.enabled&&(!s.pointerIsDown||!/mouse|pointer/.test(s.pointerType)||M&C.mouseButtons)){if(w.object(C.edges)){var N={left:!1,right:!1,top:!1,bottom:!1};for(var z in N)N[z]=Rn(z,C.edges[z],b,s._latestPointer.eventTarget,h,p,C.margin||fn.defaultMargin);N.left=N.left&&!N.right,N.top=N.top&&!N.bottom,(N.left||N.right||N.top||N.bottom)&&(o.action={name:"resize",edges:N})}else{var O=C.axis!=="y"&&b.x>p.right-fn.defaultMargin,V=C.axis!=="x"&&b.y>p.bottom-fn.defaultMargin;(O||V)&&(o.action={name:"resize",axes:(O?"x":"")+(V?"y":"")})}return!o.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(o){var s=o.edges,c=o.axis,h=o.name,p=fn.cursors,M=null;if(c)M=p[h+c];else if(s){for(var b="",C=0,N=["top","bottom","left","right"];C<N.length;C++){var z=N[C];s[z]&&(b+=z)}M=p[b]}return M},filterEventType:function(o){return o.search("resize")===0},defaultMargin:null},Br=fn,Gs={id:"actions",install:function(o){o.usePlugin(nn),o.usePlugin(Br),o.usePlugin(Y),o.usePlugin(Ct)}},zr=0,Cn={request:function(o){return Zt(o)},cancel:function(o){return dn(o)},init:function(o){if(Zt=o.requestAnimationFrame,dn=o.cancelAnimationFrame,!Zt)for(var s=["ms","moz","webkit","o"],c=0;c<s.length;c++){var h=s[c];Zt=o["".concat(h,"RequestAnimationFrame")],dn=o["".concat(h,"CancelAnimationFrame")]||o["".concat(h,"CancelRequestAnimationFrame")]}Zt=Zt&&Zt.bind(o),dn=dn&&dn.bind(o),Zt||(Zt=function(p){var M=Date.now(),b=Math.max(0,16-(M-zr)),C=o.setTimeout(function(){p(M+b)},b);return zr=M+b,C},dn=function(p){return clearTimeout(p)})}},R={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(o){R.isScrolling=!0,Cn.cancel(R.i),o.autoScroll=R,R.interaction=o,R.prevTime=R.now(),R.i=Cn.request(R.scroll)},stop:function(){R.isScrolling=!1,R.interaction&&(R.interaction.autoScroll=null),Cn.cancel(R.i)},scroll:function(){var o=R.interaction,s=o.interactable,c=o.element,h=o.prepared.name,p=s.options[h].autoScroll,M=j(p.container,s,c),b=R.now(),C=(b-R.prevTime)/1e3,N=p.speed*C;if(N>=1){var z={x:R.x*N,y:R.y*N};if(z.x||z.y){var O=re(M);w.window(M)?M.scrollBy(z.x,z.y):M&&(M.scrollLeft+=z.x,M.scrollTop+=z.y);var V=re(M),se={x:V.x-O.x,y:V.y-O.y};(se.x||se.y)&&s.fire({type:"autoscroll",target:c,interactable:s,delta:se,interaction:o,container:M})}R.prevTime=b}R.isScrolling&&(Cn.cancel(R.i),R.i=Cn.request(R.scroll))},check:function(o,s){var c;return(c=o.options[s].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(o){var s=o.interaction,c=o.pointer;if(s.interacting()&&R.check(s.interactable,s.prepared.name))if(s.simulation)R.x=R.y=0;else{var h,p,M,b,C=s.interactable,N=s.element,z=s.prepared.name,O=C.options[z].autoScroll,V=j(O.container,C,N);if(w.window(V))b=c.clientX<R.margin,h=c.clientY<R.margin,p=c.clientX>V.innerWidth-R.margin,M=c.clientY>V.innerHeight-R.margin;else{var se=_e(V);b=c.clientX<se.left+R.margin,h=c.clientY<se.top+R.margin,p=c.clientX>se.right-R.margin,M=c.clientY>se.bottom-R.margin}R.x=p?1:b?-1:0,R.y=M?1:h?-1:0,R.isScrolling||(R.margin=O.margin,R.speed=O.speed,R.start(s))}}};function j(o,s,c){return(w.string(o)?Z(o,s,c):o)||U(c)}function re(o){return w.window(o)&&(o=window.document.body),{x:o.scrollLeft,y:o.scrollTop}}var J={id:"auto-scroll",install:function(o){var s=o.defaults,c=o.actions;o.autoScroll=R,R.now=function(){return o.now()},c.phaselessTypes.autoscroll=!0,s.perAction.autoScroll=R.defaults},listeners:{"interactions:new":function(o){o.interaction.autoScroll=null},"interactions:destroy":function(o){o.interaction.autoScroll=null,R.stop(),R.interaction&&(R.interaction=null)},"interactions:stop":R.stop,"interactions:action-move":function(o){return R.onInteractionMove(o)}}},ee=J;function Ee(o,s){var c=!1;return function(){return c||(L.console.warn(s),c=!0),o.apply(this,arguments)}}function Le(o,s){return o.name=s.name,o.axis=s.axis,o.edges=s.edges,o}function Ne(o){return w.bool(o)?(this.options.styleCursor=o,this):o===null?(delete this.options.styleCursor,this):this.options.styleCursor}function He(o){return w.func(o)?(this.options.actionChecker=o,this):o===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Ze={id:"auto-start/interactableMethods",install:function(o){var s=o.Interactable;s.prototype.getAction=function(c,h,p,M){var b=function(C,N,z,O,V){var se=C.getRect(O),me=N.buttons||{0:1,1:4,3:8,4:16}[N.button],de={action:null,interactable:C,interaction:z,element:O,rect:se,buttons:me};return V.fire("auto-start:check",de),de.action}(this,h,p,M,o);return this.options.actionChecker?this.options.actionChecker(c,h,b,this,M,p):b},s.prototype.ignoreFrom=Ee(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),s.prototype.allowFrom=Ee(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),s.prototype.actionChecker=He,s.prototype.styleCursor=Ne}};function Je(o,s,c,h,p){return s.testIgnoreAllow(s.options[o.name],c,h)&&s.options[o.name].enabled&&Ft(s,c,o,p)?o:null}function st(o,s,c,h,p,M,b){for(var C=0,N=h.length;C<N;C++){var z=h[C],O=p[C],V=z.getAction(s,c,o,O);if(V){var se=Je(V,z,O,M,b);if(se)return{action:se,interactable:z,element:O}}}return{action:null,interactable:null,element:null}}function Rt(o,s,c,h,p){var M=[],b=[],C=h;function N(O){M.push(O),b.push(C)}for(;w.element(C);){M=[],b=[],p.interactables.forEachMatch(C,N);var z=st(o,s,c,M,b,h,p);if(z.action&&!z.interactable.options[z.action.name].manualStart)return z;C=le(C)}return{action:null,interactable:null,element:null}}function Ut(o,s,c){var h=s.action,p=s.interactable,M=s.element;h=h||{name:null},o.interactable=p,o.element=M,Le(o.prepared,h),o.rect=p&&h.name?p.getRect(M):null,Ye(o,c),c.fire("autoStart:prepared",{interaction:o})}function Ft(o,s,c,h){var p=o.options,M=p[c.name].max,b=p[c.name].maxPerElement,C=h.autoStart.maxInteractions,N=0,z=0,O=0;if(!(M&&b&&C))return!1;for(var V=0,se=h.interactions.list;V<se.length;V++){var me=se[V],de=me.prepared.name;if(me.interacting()&&(++N>=C||me.interactable===o&&((z+=de===c.name?1:0)>=M||me.element===s&&(O++,de===c.name&&O>=b))))return!1}return C>0}function pn(o,s){return w.number(o)?(s.autoStart.maxInteractions=o,this):s.autoStart.maxInteractions}function pt(o,s,c){var h=c.autoStart.cursorElement;h&&h!==o&&(h.style.cursor=""),o.ownerDocument.documentElement.style.cursor=s,o.style.cursor=s,c.autoStart.cursorElement=s?o:null}function Ye(o,s){var c=o.interactable,h=o.element,p=o.prepared;if(o.pointerType==="mouse"&&c&&c.options.styleCursor){var M="";if(p.name){var b=c.options[p.name].cursorChecker;M=w.func(b)?b(p,c,h,o._interacting):s.actions.map[p.name].getCursor(p)}pt(o.element,M||"",s)}else s.autoStart.cursorElement&&pt(s.autoStart.cursorElement,"",s)}var pi={id:"auto-start/base",before:["actions"],install:function(o){var s=o.interactStatic,c=o.defaults;o.usePlugin(Ze),c.base.actionChecker=null,c.base.styleCursor=!0,ge(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),s.maxInteractions=function(h){return pn(h,o)},o.autoStart={maxInteractions:1/0,withinInteractionLimit:Ft,cursorElement:null}},listeners:{"interactions:down":function(o,s){var c=o.interaction,h=o.pointer,p=o.event,M=o.eventTarget;c.interacting()||Ut(c,Rt(c,h,p,M,s),s)},"interactions:move":function(o,s){(function(c,h){var p=c.interaction,M=c.pointer,b=c.event,C=c.eventTarget;p.pointerType!=="mouse"||p.pointerIsDown||p.interacting()||Ut(p,Rt(p,M,b,C,h),h)})(o,s),function(c,h){var p=c.interaction;if(p.pointerIsDown&&!p.interacting()&&p.pointerWasMoved&&p.prepared.name){h.fire("autoStart:before-start",c);var M=p.interactable,b=p.prepared.name;b&&M&&(M.options[b].manualStart||!Ft(M,p.element,p.prepared,h)?p.stop():(p.start(p.prepared,M,p.element),Ye(p,h)))}}(o,s)},"interactions:stop":function(o,s){var c=o.interaction,h=c.interactable;h&&h.options.styleCursor&&pt(c.element,"",s)}},maxInteractions:pn,withinInteractionLimit:Ft,validateAction:Je},yt=pi,Fn={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(o,s){var c=o.interaction,h=o.eventTarget,p=o.dx,M=o.dy;if(c.prepared.name==="drag"){var b=Math.abs(p),C=Math.abs(M),N=c.interactable.options.drag,z=N.startAxis,O=b>C?"x":b<C?"y":"xy";if(c.prepared.axis=N.lockAxis==="start"?O[0]:N.lockAxis,O!=="xy"&&z!=="xy"&&z!==O){c.prepared.name=null;for(var V=h,se=function(de){if(de!==c.interactable){var ve=c.interactable.options.drag;if(!ve.manualStart&&de.testIgnoreAllow(ve,V,h)){var Ce=de.getAction(c.downPointer,c.downEvent,c,V);if(Ce&&Ce.name==="drag"&&function(we,Oe){if(!Oe)return!1;var tt=Oe.options.drag.startAxis;return we==="xy"||tt==="xy"||tt===we}(O,de)&&yt.validateAction(Ce,de,V,h,s))return de}}};w.element(V);){var me=s.interactables.forEachMatch(V,se);if(me){c.prepared.name="drag",c.interactable=me,c.element=V;break}V=le(V)}}}}}};function Li(o){var s=o.prepared&&o.prepared.name;if(!s)return null;var c=o.interactable.options;return c[s].hold||c[s].delay}var mi={id:"auto-start/hold",install:function(o){var s=o.defaults;o.usePlugin(yt),s.perAction.hold=0,s.perAction.delay=0},listeners:{"interactions:new":function(o){o.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(o){var s=o.interaction,c=Li(s);c>0&&(s.autoStartHoldTimer=setTimeout(function(){s.start(s.prepared,s.interactable,s.element)},c))},"interactions:move":function(o){var s=o.interaction,c=o.duplicate;s.autoStartHoldTimer&&s.pointerWasMoved&&!c&&(clearTimeout(s.autoStartHoldTimer),s.autoStartHoldTimer=null)},"autoStart:before-start":function(o){var s=o.interaction;Li(s)>0&&(s.prepared.name=null)}},getHoldDuration:Li},fr=mi,Bt={id:"auto-start",install:function(o){o.usePlugin(yt),o.usePlugin(fr),o.usePlugin(Fn)}},Pn=function(o){return/^(always|never|auto)$/.test(o)?(this.options.preventDefault=o,this):w.bool(o)?(this.options.preventDefault=o?"always":"never",this):this.options.preventDefault};function pr(o){var s=o.interaction,c=o.event;s.interactable&&s.interactable.checkAndPreventDefault(c)}var Kt={id:"core/interactablePreventDefault",install:function(o){var s=o.Interactable;s.prototype.preventDefault=Pn,s.prototype.checkAndPreventDefault=function(c){return function(h,p,M){var b=h.options.preventDefault;if(b!=="never")if(b!=="always"){if(p.events.supportsPassive&&/^touch(start|move)$/.test(M.type)){var C=U(M.target).document,N=p.getDocOptions(C);if(!N||!N.events||N.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(M.type)||w.element(M.target)&&he(M.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||M.preventDefault()}else M.preventDefault()}(this,o,c)},o.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var h=0,p=o.interactions.list;h<p.length;h++){var M=p[h];if(M.element&&(M.element===c.target||oe(M.element,c.target)))return void M.interactable.checkAndPreventDefault(c)}}})},listeners:["down","move","up","cancel"].reduce(function(o,s){return o["interactions:".concat(s)]=pr,o},{})};function qn(o,s){if(s.phaselessTypes[o])return!0;for(var c in s.map)if(o.indexOf(c)===0&&o.substr(c.length)in s.phases)return!0;return!1}function Zn(o){var s={};for(var c in o){var h=o[c];w.plainObject(h)?s[c]=Zn(h):w.array(h)?s[c]=Qe(h):s[c]=h}return s}var Ii=function(){function o(s){a(this,o),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=s,this.result=kr(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return u(o,[{key:"start",value:function(s,c){var h,p,M=s.phase,b=this.interaction,C=function(z){var O=z.interactable.options[z.prepared.name],V=O.modifiers;return V&&V.length?V:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(se){var me=O[se];return me&&me.enabled&&{options:me,methods:me._methods}}).filter(function(se){return!!se})}(b);this.prepareStates(C),this.startEdges=ge({},b.edges),this.edges=ge({},this.startEdges),this.startOffset=(h=b.rect,p=c,h?{left:p.x-h.left,top:p.y-h.top,right:h.right-p.x,bottom:h.bottom-p.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var N=this.fillArg({phase:M,pageCoords:c,preEnd:!1});return this.result=kr(),this.startAll(N),this.result=this.setAll(N)}},{key:"fillArg",value:function(s){var c=this.interaction;return s.interaction=c,s.interactable=c.interactable,s.element=c.element,s.rect||(s.rect=c.rect),s.edges||(s.edges=this.startEdges),s.startOffset=this.startOffset,s}},{key:"startAll",value:function(s){for(var c=0,h=this.states;c<h.length;c++){var p=h[c];p.methods.start&&(s.state=p,p.methods.start(s))}}},{key:"setAll",value:function(s){var c=s.phase,h=s.preEnd,p=s.skipModifiers,M=s.rect,b=s.edges;s.coords=ge({},s.pageCoords),s.rect=ge({},M),s.edges=ge({},b);for(var C=p?this.states.slice(p):this.states,N=kr(s.coords,s.rect),z=0;z<C.length;z++){var O,V=C[z],se=V.options,me=ge({},s.coords),de=null;(O=V.methods)!=null&&O.set&&this.shouldDo(se,h,c)&&(s.state=V,de=V.methods.set(s),ze(s.edges,s.rect,{x:s.coords.x-me.x,y:s.coords.y-me.y})),N.eventProps.push(de)}ge(this.edges,s.edges),N.delta.x=s.coords.x-s.pageCoords.x,N.delta.y=s.coords.y-s.pageCoords.y,N.rectDelta.left=s.rect.left-M.left,N.rectDelta.right=s.rect.right-M.right,N.rectDelta.top=s.rect.top-M.top,N.rectDelta.bottom=s.rect.bottom-M.bottom;var ve=this.result.coords,Ce=this.result.rect;if(ve&&Ce){var we=N.rect.left!==Ce.left||N.rect.right!==Ce.right||N.rect.top!==Ce.top||N.rect.bottom!==Ce.bottom;N.changed=we||ve.x!==N.coords.x||ve.y!==N.coords.y}return N}},{key:"applyToInteraction",value:function(s){var c=this.interaction,h=s.phase,p=c.coords.cur,M=c.coords.start,b=this.result,C=this.startDelta,N=b.delta;h==="start"&&ge(this.startDelta,b.delta);for(var z=0,O=[[M,C],[p,N]];z<O.length;z++){var V=O[z],se=V[0],me=V[1];se.page.x+=me.x,se.page.y+=me.y,se.client.x+=me.x,se.client.y+=me.y}var de=this.result.rectDelta,ve=s.rect||c.rect;ve.left+=de.left,ve.right+=de.right,ve.top+=de.top,ve.bottom+=de.bottom,ve.width=ve.right-ve.left,ve.height=ve.bottom-ve.top}},{key:"setAndApply",value:function(s){var c=this.interaction,h=s.phase,p=s.preEnd,M=s.skipModifiers,b=this.setAll(this.fillArg({preEnd:p,phase:h,pageCoords:s.modifiedCoords||c.coords.cur.page}));if(this.result=b,!b.changed&&(!M||M<this.states.length)&&c.interacting())return!1;if(s.modifiedCoords){var C=c.coords.cur.page,N={x:s.modifiedCoords.x-C.x,y:s.modifiedCoords.y-C.y};b.coords.x+=N.x,b.coords.y+=N.y,b.delta.x+=N.x,b.delta.y+=N.y}this.applyToInteraction(s)}},{key:"beforeEnd",value:function(s){var c=s.interaction,h=s.event,p=this.states;if(p&&p.length){for(var M=!1,b=0;b<p.length;b++){var C=p[b];s.state=C;var N=C.options,z=C.methods,O=z.beforeEnd&&z.beforeEnd(s);if(O)return this.endResult=O,!1;M=M||!M&&this.shouldDo(N,!0,s.phase,!0)}M&&c.move({event:h,preEnd:!0})}}},{key:"stop",value:function(s){var c=s.interaction;if(this.states&&this.states.length){var h=ge({states:this.states,interactable:c.interactable,element:c.element,rect:null},s);this.fillArg(h);for(var p=0,M=this.states;p<M.length;p++){var b=M[p];h.state=b,b.methods.stop&&b.methods.stop(h)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(s){this.states=[];for(var c=0;c<s.length;c++){var h=s[c],p=h.options,M=h.methods,b=h.name;this.states.push({options:p,methods:M,index:c,name:b})}return this.states}},{key:"restoreInteractionCoords",value:function(s){var c=s.interaction,h=c.coords,p=c.rect,M=c.modification;if(M.result){for(var b=M.startDelta,C=M.result,N=C.delta,z=C.rectDelta,O=0,V=[[h.start,b],[h.cur,N]];O<V.length;O++){var se=V[O],me=se[0],de=se[1];me.page.x-=de.x,me.page.y-=de.y,me.client.x-=de.x,me.client.y-=de.y}p.left-=z.left,p.right-=z.right,p.top-=z.top,p.bottom-=z.bottom}}},{key:"shouldDo",value:function(s,c,h,p){return!(!s||s.enabled===!1||p&&!s.endOnly||s.endOnly&&!c||h==="start"&&!s.setStart)}},{key:"copyFrom",value:function(s){this.startOffset=s.startOffset,this.startDelta=s.startDelta,this.startEdges=s.startEdges,this.edges=s.edges,this.states=s.states.map(function(c){return Zn(c)}),this.result=kr(ge({},s.result.coords),ge({},s.result.rect))}},{key:"destroy",value:function(){for(var s in this)this[s]=null}}]),o}();function kr(o,s){return{rect:s,coords:o,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Kn(o,s){var c=o.defaults,h={start:o.start,set:o.set,beforeEnd:o.beforeEnd,stop:o.stop},p=function(M){var b=M||{};for(var C in b.enabled=b.enabled!==!1,c)C in b||(b[C]=c[C]);var N={options:b,methods:h,name:s,enable:function(){return b.enabled=!0,N},disable:function(){return b.enabled=!1,N}};return N};return s&&typeof s=="string"&&(p._defaults=c,p._methods=h),p}function mr(o){var s=o.iEvent,c=o.interaction.modification.result;c&&(s.modifiers=c.eventProps)}var Kc={id:"modifiers/base",before:["actions"],install:function(o){o.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(o){var s=o.interaction;s.modification=new Ii(s)},"interactions:before-action-start":function(o){var s=o.interaction,c=o.interaction.modification;c.start(o,s.coords.start.page),s.edges=c.edges,c.applyToInteraction(o)},"interactions:before-action-move":function(o){var s=o.interaction,c=s.modification,h=c.setAndApply(o);return s.edges=c.edges,h},"interactions:before-action-end":function(o){var s=o.interaction,c=s.modification,h=c.beforeEnd(o);return s.edges=c.startEdges,h},"interactions:action-start":mr,"interactions:action-move":mr,"interactions:action-end":mr,"interactions:after-action-start":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:after-action-move":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:stop":function(o){return o.interaction.modification.stop(o)}}},ta=Kc,na={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},Vs=function(o){f(c,o);var s=x(c);function c(h,p,M,b,C,N,z){var O;a(this,c),(O=s.call(this,h)).relatedTarget=null,O.screenX=void 0,O.screenY=void 0,O.button=void 0,O.buttons=void 0,O.ctrlKey=void 0,O.shiftKey=void 0,O.altKey=void 0,O.metaKey=void 0,O.page=void 0,O.client=void 0,O.delta=void 0,O.rect=void 0,O.x0=void 0,O.y0=void 0,O.t0=void 0,O.dt=void 0,O.duration=void 0,O.clientX0=void 0,O.clientY0=void 0,O.velocity=void 0,O.speed=void 0,O.swipe=void 0,O.axes=void 0,O.preEnd=void 0,C=C||h.element;var V=h.interactable,se=(V&&V.options||na).deltaSource,me=Ke(V,C,M),de=b==="start",ve=b==="end",Ce=de?v(O):h.prevEvent,we=de?h.coords.start:ve?{page:Ce.page,client:Ce.client,timeStamp:h.coords.cur.timeStamp}:h.coords.cur;return O.page=ge({},we.page),O.client=ge({},we.client),O.rect=ge({},h.rect),O.timeStamp=we.timeStamp,ve||(O.page.x-=me.x,O.page.y-=me.y,O.client.x-=me.x,O.client.y-=me.y),O.ctrlKey=p.ctrlKey,O.altKey=p.altKey,O.shiftKey=p.shiftKey,O.metaKey=p.metaKey,O.button=p.button,O.buttons=p.buttons,O.target=C,O.currentTarget=C,O.preEnd=N,O.type=z||M+(b||""),O.interactable=V,O.t0=de?h.pointers[h.pointers.length-1].downTime:Ce.t0,O.x0=h.coords.start.page.x-me.x,O.y0=h.coords.start.page.y-me.y,O.clientX0=h.coords.start.client.x-me.x,O.clientY0=h.coords.start.client.y-me.y,O.delta=de||ve?{x:0,y:0}:{x:O[se].x-Ce[se].x,y:O[se].y-Ce[se].y},O.dt=h.coords.delta.timeStamp,O.duration=O.timeStamp-O.t0,O.velocity=ge({},h.coords.velocity[se]),O.speed=vt(O.velocity.x,O.velocity.y),O.swipe=ve||b==="inertiastart"?O.getSwipe():null,O}return u(c,[{key:"getSwipe",value:function(){var h=this._interaction;if(h.prevEvent.speed<600||this.timeStamp-h.prevEvent.timeStamp>150)return null;var p=180*Math.atan2(h.prevEvent.velocityY,h.prevEvent.velocityX)/Math.PI;p<0&&(p+=360);var M=112.5<=p&&p<247.5,b=202.5<=p&&p<337.5;return{up:b,down:!b&&22.5<=p&&p<157.5,left:M,right:!M&&(292.5<=p||p<67.5),angle:p,speed:h.prevEvent.speed,velocity:{x:h.prevEvent.velocityX,y:h.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),c}($e);Object.defineProperties(Vs.prototype,{pageX:{get:function(){return this.page.x},set:function(o){this.page.x=o}},pageY:{get:function(){return this.page.y},set:function(o){this.page.y=o}},clientX:{get:function(){return this.client.x},set:function(o){this.client.x=o}},clientY:{get:function(){return this.client.y},set:function(o){this.client.y=o}},dx:{get:function(){return this.delta.x},set:function(o){this.delta.x=o}},dy:{get:function(){return this.delta.y},set:function(o){this.delta.y=o}},velocityX:{get:function(){return this.velocity.x},set:function(o){this.velocity.x=o}},velocityY:{get:function(){return this.velocity.y},set:function(o){this.velocity.y=o}}});var $c=u(function o(s,c,h,p,M){a(this,o),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=s,this.pointer=c,this.event=h,this.downTime=p,this.downTarget=M}),Qc=function(o){return o.interactable="",o.element="",o.prepared="",o.pointerIsDown="",o.pointerWasMoved="",o._proxy="",o}({}),ia=function(o){return o.start="",o.move="",o.end="",o.stop="",o.interacting="",o}({}),Jc=0,eu=function(){function o(s){var c=this,h=s.pointerType,p=s.scopeFire;a(this,o),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=Ee(function(O){this.move(O)},"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Jc++,this._scopeFire=p,this.pointerType=h;var M=this;this._proxy={};var b=function(O){Object.defineProperty(c._proxy,O,{get:function(){return M[O]}})};for(var C in Qc)b(C);var N=function(O){Object.defineProperty(c._proxy,O,{value:function(){return M[O].apply(M,arguments)}})};for(var z in ia)N(z);this._scopeFire("interactions:new",{interaction:this})}return u(o,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(s,c,h){var p=this.updatePointer(s,c,h,!0),M=this.pointers[p];this._scopeFire("interactions:down",{pointer:s,event:c,eventTarget:h,pointerIndex:p,pointerInfo:M,type:"down",interaction:this})}},{key:"start",value:function(s,c,h){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(s.name==="gesture"?2:1)||!c.options[s.name].enabled)&&(Le(this.prepared,s),this.interactable=c,this.element=h,this.rect=c.getRect(h),this.edges=this.prepared.edges?ge({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(s,c,h){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(s,c,h,!1);var p,M,b=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(p=this.coords.cur.client.x-this.coords.start.client.x,M=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=vt(p,M)>this.pointerMoveTolerance);var C,N,z,O=this.getPointerIndex(s),V={pointer:s,pointerIndex:O,pointerInfo:this.pointers[O],event:c,type:"move",eventTarget:h,dx:p,dy:M,duplicate:b,interaction:this};b||(C=this.coords.velocity,N=this.coords.delta,z=Math.max(N.timeStamp/1e3,.001),C.page.x=N.page.x/z,C.page.y=N.page.y/z,C.client.x=N.client.x/z,C.client.y=N.client.y/z,C.timeStamp=z),this._scopeFire("interactions:move",V),b||this.simulation||(this.interacting()&&(V.type=null,this.move(V)),this.pointerWasMoved&&ie(this.coords.prev,this.coords.cur))}},{key:"move",value:function(s){s&&s.event||ce(this.coords.delta),(s=ge({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},s||{})).phase="move",this._doPhase(s)}},{key:"pointerUp",value:function(s,c,h,p){var M=this.getPointerIndex(s);M===-1&&(M=this.updatePointer(s,c,h,!1));var b=/cancel$/i.test(c.type)?"cancel":"up";this._scopeFire("interactions:".concat(b),{pointer:s,pointerIndex:M,pointerInfo:this.pointers[M],event:c,eventTarget:h,type:b,curEventTarget:p,interaction:this}),this.simulation||this.end(c),this.removePointer(s,c)}},{key:"documentBlur",value:function(s){this.end(s),this._scopeFire("interactions:blur",{event:s,type:"blur",interaction:this})}},{key:"end",value:function(s){var c;this._ending=!0,s=s||this._latestPointer.event,this.interacting()&&(c=this._doPhase({event:s,interaction:this,phase:"end"})),this._ending=!1,c===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(s){var c=Me(s);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:S(this.pointers,function(h){return h.id===c})}},{key:"getPointerInfo",value:function(s){return this.pointers[this.getPointerIndex(s)]}},{key:"updatePointer",value:function(s,c,h,p){var M,b,C,N=Me(s),z=this.getPointerIndex(s),O=this.pointers[z];return p=p!==!1&&(p||/(down|start)$/i.test(c.type)),O?O.pointer=s:(O=new $c(N,s,c,null,null),z=this.pointers.length,this.pointers.push(O)),be(this.coords.cur,this.pointers.map(function(V){return V.pointer}),this._now()),M=this.coords.delta,b=this.coords.prev,C=this.coords.cur,M.page.x=C.page.x-b.page.x,M.page.y=C.page.y-b.page.y,M.client.x=C.client.x-b.client.x,M.client.y=C.client.y-b.client.y,M.timeStamp=C.timeStamp-b.timeStamp,p&&(this.pointerIsDown=!0,O.downTime=this.coords.cur.timeStamp,O.downTarget=h,P(this.downPointer,s),this.interacting()||(ie(this.coords.start,this.coords.cur),ie(this.coords.prev,this.coords.cur),this.downEvent=c,this.pointerWasMoved=!1)),this._updateLatestPointer(s,c,h),this._scopeFire("interactions:update-pointer",{pointer:s,event:c,eventTarget:h,down:p,pointerInfo:O,pointerIndex:z,interaction:this}),z}},{key:"removePointer",value:function(s,c){var h=this.getPointerIndex(s);if(h!==-1){var p=this.pointers[h];this._scopeFire("interactions:remove-pointer",{pointer:s,event:c,eventTarget:null,pointerIndex:h,pointerInfo:p,interaction:this}),this.pointers.splice(h,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(s,c,h){this._latestPointer.pointer=s,this._latestPointer.event=c,this._latestPointer.eventTarget=h}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(s,c,h,p){return new Vs(this,s,this.prepared.name,c,this.element,h,p)}},{key:"_fireEvent",value:function(s){var c;(c=this.interactable)==null||c.fire(s),(!this.prevEvent||s.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=s)}},{key:"_doPhase",value:function(s){var c=s.event,h=s.phase,p=s.preEnd,M=s.type,b=this.rect;if(b&&h==="move"&&(ze(this.edges,b,this.coords.delta[this.interactable.options.deltaSource]),b.width=b.right-b.left,b.height=b.bottom-b.top),this._scopeFire("interactions:before-action-".concat(h),s)===!1)return!1;var C=s.iEvent=this._createPreparedEvent(c,h,p,M);return this._scopeFire("interactions:action-".concat(h),s),h==="start"&&(this.prevEvent=C),this._fireEvent(C),this._scopeFire("interactions:after-action-".concat(h),s),!0}},{key:"_now",value:function(){return Date.now()}}]),o}();function ra(o){sa(o.interaction)}function sa(o){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(o))return!1;var s=o.offset.pending;return Ws(o.coords.cur,s),Ws(o.coords.delta,s),ze(o.edges,o.rect,s),s.x=0,s.y=0,!0}function tu(o){var s=o.x,c=o.y;this.offset.pending.x+=s,this.offset.pending.y+=c,this.offset.total.x+=s,this.offset.total.y+=c}function Ws(o,s){var c=o.page,h=o.client,p=s.x,M=s.y;c.x+=p,c.y+=M,h.x+=p,h.y+=M}ia.offsetBy="";var nu={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(o){o.Interaction.prototype.offsetBy=tu},listeners:{"interactions:new":function(o){o.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(o){return function(s){s.pointerIsDown&&(Ws(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}(o.interaction)},"interactions:before-action-start":ra,"interactions:before-action-move":ra,"interactions:before-action-end":function(o){var s=o.interaction;if(sa(s))return s.move({offset:!0}),s.end(),!1},"interactions:stop":function(o){var s=o.interaction;s.offset.total.x=0,s.offset.total.y=0,s.offset.pending.x=0,s.offset.pending.y=0}}},oa=nu,iu=function(){function o(s){a(this,o),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=s}return u(o,[{key:"start",value:function(s){var c=this.interaction,h=Hr(c);if(!h||!h.enabled)return!1;var p=c.coords.velocity.client,M=vt(p.x,p.y),b=this.modification||(this.modification=new Ii(c));if(b.copyFrom(c.modification),this.t0=c._now(),this.allowResume=h.allowResume,this.v0=M,this.currentOffset={x:0,y:0},this.startCoords=c.coords.cur.page,this.modifierArg=b.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-c.coords.cur.timeStamp<50&&M>h.minSpeed&&M>h.endSpeed)this.startInertia();else{if(b.result=b.setAll(this.modifierArg),!b.result.changed)return!1;this.startSmoothEnd()}return c.modification.result.rect=null,c.offsetBy(this.targetOffset),c._doPhase({interaction:c,event:s,phase:"inertiastart"}),c.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),c.modification.result.rect=null,this.active=!0,c.simulation=this,!0}},{key:"startInertia",value:function(){var s=this,c=this.interaction.coords.velocity.client,h=Hr(this.interaction),p=h.resistance,M=-Math.log(h.endSpeed/this.v0)/p;this.targetOffset={x:(c.x-M)/p,y:(c.y-M)/p},this.te=M,this.lambda_v0=p/this.v0,this.one_ve_v0=1-h.endSpeed/this.v0;var b=this.modification,C=this.modifierArg;C.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},b.result=b.setAll(C),b.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+b.result.delta.x,y:this.targetOffset.y+b.result.delta.y}),this.onNextFrame(function(){return s.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var s=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return s.smoothEndTick()})}},{key:"onNextFrame",value:function(s){var c=this;this.timeout=Cn.request(function(){c.active&&s()})}},{key:"inertiaTick",value:function(){var s,c,h,p,M,b,C,N=this,z=this.interaction,O=Hr(z).resistance,V=(z._now()-this.t0)/1e3;if(V<this.te){var se,me=1-(Math.exp(-O*V)-this.lambda_v0)/this.one_ve_v0;this.isModified?(s=0,c=0,h=this.targetOffset.x,p=this.targetOffset.y,M=this.modifiedOffset.x,b=this.modifiedOffset.y,se={x:aa(C=me,s,h,M),y:aa(C,c,p,b)}):se={x:this.targetOffset.x*me,y:this.targetOffset.y*me};var de={x:se.x-this.currentOffset.x,y:se.y-this.currentOffset.y};this.currentOffset.x+=de.x,this.currentOffset.y+=de.y,z.offsetBy(de),z.move(),this.onNextFrame(function(){return N.inertiaTick()})}else z.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var s=this,c=this.interaction,h=c._now()-this.t0,p=Hr(c).smoothEndDuration;if(h<p){var M={x:la(h,0,this.targetOffset.x,p),y:la(h,0,this.targetOffset.y,p)},b={x:M.x-this.currentOffset.x,y:M.y-this.currentOffset.y};this.currentOffset.x+=b.x,this.currentOffset.y+=b.y,c.offsetBy(b),c.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return s.smoothEndTick()})}else c.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(s){var c=s.pointer,h=s.event,p=s.eventTarget,M=this.interaction;M.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),M.updatePointer(c,h,p,!0),M._doPhase({interaction:M,event:h,phase:"resume"}),ie(M.coords.prev,M.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Cn.cancel(this.timeout)}}]),o}();function Hr(o){var s=o.interactable,c=o.prepared;return s&&s.options&&c.name&&s.options[c.name].inertia}var ru={id:"inertia",before:["modifiers","actions"],install:function(o){var s=o.defaults;o.usePlugin(oa),o.usePlugin(ta),o.actions.phases.inertiastart=!0,o.actions.phases.resume=!0,s.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(o){var s=o.interaction;s.inertia=new iu(s)},"interactions:before-action-end":function(o){var s=o.interaction,c=o.event;return(!s._interacting||s.simulation||!s.inertia.start(c))&&null},"interactions:down":function(o){var s=o.interaction,c=o.eventTarget,h=s.inertia;if(h.active)for(var p=c;w.element(p);){if(p===s.element){h.resume(o);break}p=le(p)}},"interactions:stop":function(o){var s=o.interaction.inertia;s.active&&s.stop()},"interactions:before-action-resume":function(o){var s=o.interaction.modification;s.stop(o),s.start(o,o.interaction.coords.cur.page),s.applyToInteraction(o)},"interactions:before-action-inertiastart":function(o){return o.interaction.modification.setAndApply(o)},"interactions:action-resume":mr,"interactions:action-inertiastart":mr,"interactions:after-action-inertiastart":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:after-action-resume":function(o){return o.interaction.modification.restoreInteractionCoords(o)}}};function aa(o,s,c,h){var p=1-o;return p*p*s+2*p*o*c+o*o*h}function la(o,s,c,h){return-c*(o/=h)*(o-2)+s}var su=ru;function ca(o,s){for(var c=0;c<s.length;c++){var h=s[c];if(o.immediatePropagationStopped)break;h(o)}}var ua=function(){function o(s){a(this,o),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ge({},s||{})}return u(o,[{key:"fire",value:function(s){var c,h=this.global;(c=this.types[s.type])&&ca(s,c),!s.propagationStopped&&h&&(c=h[s.type])&&ca(s,c)}},{key:"on",value:function(s,c){var h=Ge(s,c);for(s in h)this.types[s]=gt(this.types[s]||[],h[s])}},{key:"off",value:function(s,c){var h=Ge(s,c);for(s in h){var p=this.types[s];if(p&&p.length)for(var M=0,b=h[s];M<b.length;M++){var C=b[M],N=p.indexOf(C);N!==-1&&p.splice(N,1)}}}},{key:"getRect",value:function(s){return null}}]),o}(),ou=function(){function o(s){a(this,o),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=s,P(this,s)}return u(o,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),o}();function gr(o){return w.object(o)?{capture:!!o.capture,passive:!!o.passive}:{capture:!!o,passive:!1}}function Gr(o,s){return o===s||(typeof o=="boolean"?!!s.capture===o&&!s.passive:!!o.capture==!!s.capture&&!!o.passive==!!s.passive)}var au={id:"events",install:function(o){var s,c=[],h={},p=[],M={add:b,remove:C,addDelegate:function(O,V,se,me,de){var ve=gr(de);if(!h[se]){h[se]=[];for(var Ce=0;Ce<p.length;Ce++){var we=p[Ce];b(we,se,N),b(we,se,z,!0)}}var Oe=h[se],tt=X(Oe,function(ut){return ut.selector===O&&ut.context===V});tt||(tt={selector:O,context:V,listeners:[]},Oe.push(tt)),tt.listeners.push({func:me,options:ve})},removeDelegate:function(O,V,se,me,de){var ve,Ce=gr(de),we=h[se],Oe=!1;if(we)for(ve=we.length-1;ve>=0;ve--){var tt=we[ve];if(tt.selector===O&&tt.context===V){for(var ut=tt.listeners,Ve=ut.length-1;Ve>=0;Ve--){var nt=ut[Ve];if(nt.func===me&&Gr(nt.options,Ce)){ut.splice(Ve,1),ut.length||(we.splice(ve,1),C(V,se,N),C(V,se,z,!0)),Oe=!0;break}}if(Oe)break}}},delegateListener:N,delegateUseCapture:z,delegatedEvents:h,documents:p,targets:c,supportsOptions:!1,supportsPassive:!1};function b(O,V,se,me){if(O.addEventListener){var de=gr(me),ve=X(c,function(Ce){return Ce.eventTarget===O});ve||(ve={eventTarget:O,events:{}},c.push(ve)),ve.events[V]||(ve.events[V]=[]),X(ve.events[V],function(Ce){return Ce.func===se&&Gr(Ce.options,de)})||(O.addEventListener(V,se,M.supportsOptions?de:de.capture),ve.events[V].push({func:se,options:de}))}}function C(O,V,se,me){if(O.addEventListener&&O.removeEventListener){var de=S(c,function(Qt){return Qt.eventTarget===O}),ve=c[de];if(ve&&ve.events)if(V!=="all"){var Ce=!1,we=ve.events[V];if(we){if(se==="all"){for(var Oe=we.length-1;Oe>=0;Oe--){var tt=we[Oe];C(O,V,tt.func,tt.options)}return}for(var ut=gr(me),Ve=0;Ve<we.length;Ve++){var nt=we[Ve];if(nt.func===se&&Gr(nt.options,ut)){O.removeEventListener(V,se,M.supportsOptions?ut:ut.capture),we.splice(Ve,1),we.length===0&&(delete ve.events[V],Ce=!0);break}}}Ce&&!Object.keys(ve.events).length&&c.splice(de,1)}else for(V in ve.events)ve.events.hasOwnProperty(V)&&C(O,V,"all")}}function N(O,V){for(var se=gr(V),me=new ou(O),de=h[O.type],ve=je(O)[0],Ce=ve;w.element(Ce);){for(var we=0;we<de.length;we++){var Oe=de[we],tt=Oe.selector,ut=Oe.context;if(he(Ce,tt)&&oe(ut,ve)&&oe(ut,Ce)){var Ve=Oe.listeners;me.currentTarget=Ce;for(var nt=0;nt<Ve.length;nt++){var Qt=Ve[nt];Gr(Qt.options,se)&&Qt.func(me)}}}Ce=le(Ce)}}function z(O){return N(O,!0)}return(s=o.document)==null||s.createElement("div").addEventListener("test",null,{get capture(){return M.supportsOptions=!0},get passive(){return M.supportsPassive=!0}}),o.events=M,M}},Xs={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(o){for(var s=0,c=Xs.methodOrder;s<c.length;s++){var h=c[s],p=Xs[h](o);if(p)return p}return null},simulationResume:function(o){var s=o.pointerType,c=o.eventType,h=o.eventTarget,p=o.scope;if(!/down|start/i.test(c))return null;for(var M=0,b=p.interactions.list;M<b.length;M++){var C=b[M],N=h;if(C.simulation&&C.simulation.allowResume&&C.pointerType===s)for(;N;){if(N===C.element)return C;N=le(N)}}return null},mouseOrPen:function(o){var s,c=o.pointerId,h=o.pointerType,p=o.eventType,M=o.scope;if(h!=="mouse"&&h!=="pen")return null;for(var b=0,C=M.interactions.list;b<C.length;b++){var N=C[b];if(N.pointerType===h){if(N.simulation&&!ha(N,c))continue;if(N.interacting())return N;s||(s=N)}}if(s)return s;for(var z=0,O=M.interactions.list;z<O.length;z++){var V=O[z];if(!(V.pointerType!==h||/down/i.test(p)&&V.simulation))return V}return null},hasPointer:function(o){for(var s=o.pointerId,c=0,h=o.scope.interactions.list;c<h.length;c++){var p=h[c];if(ha(p,s))return p}return null},idle:function(o){for(var s=o.pointerType,c=0,h=o.scope.interactions.list;c<h.length;c++){var p=h[c];if(p.pointers.length===1){var M=p.interactable;if(M&&(!M.options.gesture||!M.options.gesture.enabled))continue}else if(p.pointers.length>=2)continue;if(!p.interacting()&&s===p.pointerType)return p}return null}};function ha(o,s){return o.pointers.some(function(c){return c.id===s})}var lu=Xs,Ys=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function da(o,s){return function(c){var h=s.interactions.list,p=Re(c),M=je(c),b=M[0],C=M[1],N=[];if(/^touch/.test(c.type)){s.prevTouchTime=s.now();for(var z=0,O=c.changedTouches;z<O.length;z++){var V=O[z],se={pointer:V,pointerId:Me(V),pointerType:p,eventType:c.type,eventTarget:b,curEventTarget:C,scope:s},me=fa(se);N.push([se.pointer,se.eventTarget,se.curEventTarget,me])}}else{var de=!1;if(!q.supportsPointerEvent&&/mouse/.test(c.type)){for(var ve=0;ve<h.length&&!de;ve++)de=h[ve].pointerType!=="mouse"&&h[ve].pointerIsDown;de=de||s.now()-s.prevTouchTime<500||c.timeStamp===0}if(!de){var Ce={pointer:c,pointerId:Me(c),pointerType:p,eventType:c.type,curEventTarget:C,eventTarget:b,scope:s},we=fa(Ce);N.push([Ce.pointer,Ce.eventTarget,Ce.curEventTarget,we])}}for(var Oe=0;Oe<N.length;Oe++){var tt=N[Oe],ut=tt[0],Ve=tt[1],nt=tt[2];tt[3][o](ut,c,Ve,nt)}}}function fa(o){var s=o.pointerType,c=o.scope,h={interaction:lu.search(o),searchDetails:o};return c.fire("interactions:find",h),h.interaction||c.interactions.new({pointerType:s})}function js(o,s){var c=o.doc,h=o.scope,p=o.options,M=h.interactions.docEvents,b=h.events,C=b[s];for(var N in h.browser.isIOS&&!p.events&&(p.events={passive:!1}),b.delegatedEvents)C(c,N,b.delegateListener),C(c,N,b.delegateUseCapture,!0);for(var z=p&&p.events,O=0;O<M.length;O++){var V=M[O];C(c,V.type,V.listener,z)}}var cu={id:"core/interactions",install:function(o){for(var s={},c=0;c<Ys.length;c++){var h=Ys[c];s[h]=da(h,o)}var p,M=q.pEventTypes;function b(){for(var C=0,N=o.interactions.list;C<N.length;C++){var z=N[C];if(z.pointerIsDown&&z.pointerType==="touch"&&!z._interacting)for(var O=function(){var me=se[V];o.documents.some(function(de){return oe(de.doc,me.downTarget)})||z.removePointer(me.pointer,me.event)},V=0,se=z.pointers;V<se.length;V++)O()}}(p=Q.PointerEvent?[{type:M.down,listener:b},{type:M.down,listener:s.pointerDown},{type:M.move,listener:s.pointerMove},{type:M.up,listener:s.pointerUp},{type:M.cancel,listener:s.pointerUp}]:[{type:"mousedown",listener:s.pointerDown},{type:"mousemove",listener:s.pointerMove},{type:"mouseup",listener:s.pointerUp},{type:"touchstart",listener:b},{type:"touchstart",listener:s.pointerDown},{type:"touchmove",listener:s.pointerMove},{type:"touchend",listener:s.pointerUp},{type:"touchcancel",listener:s.pointerUp}]).push({type:"blur",listener:function(C){for(var N=0,z=o.interactions.list;N<z.length;N++)z[N].documentBlur(C)}}),o.prevTouchTime=0,o.Interaction=function(C){f(z,C);var N=x(z);function z(){return a(this,z),N.apply(this,arguments)}return u(z,[{key:"pointerMoveTolerance",get:function(){return o.interactions.pointerMoveTolerance},set:function(O){o.interactions.pointerMoveTolerance=O}},{key:"_now",value:function(){return o.now()}}]),z}(eu),o.interactions={list:[],new:function(C){C.scopeFire=function(z,O){return o.fire(z,O)};var N=new o.Interaction(C);return o.interactions.list.push(N),N},listeners:s,docEvents:p,pointerMoveTolerance:1},o.usePlugin(Kt)},listeners:{"scope:add-document":function(o){return js(o,"add")},"scope:remove-document":function(o){return js(o,"remove")},"interactable:unset":function(o,s){for(var c=o.interactable,h=s.interactions.list.length-1;h>=0;h--){var p=s.interactions.list[h];p.interactable===c&&(p.stop(),s.fire("interactions:destroy",{interaction:p}),p.destroy(),s.interactions.list.length>2&&s.interactions.list.splice(h,1))}}},onDocSignal:js,doOnInteractions:da,methodNames:Ys},uu=cu,$n=function(o){return o[o.On=0]="On",o[o.Off=1]="Off",o}($n||{}),hu=function(){function o(s,c,h,p){a(this,o),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new ua,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=c.actions,this.target=s,this._context=c.context||h,this._win=U(it(s)?this._context:s),this._doc=this._win.document,this._scopeEvents=p,this.set(c)}return u(o,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(s,c){return w.func(c.onstart)&&this.on("".concat(s,"start"),c.onstart),w.func(c.onmove)&&this.on("".concat(s,"move"),c.onmove),w.func(c.onend)&&this.on("".concat(s,"end"),c.onend),w.func(c.oninertiastart)&&this.on("".concat(s,"inertiastart"),c.oninertiastart),this}},{key:"updatePerActionListeners",value:function(s,c,h){var p,M=this,b=(p=this._actions.map[s])==null?void 0:p.filterEventType,C=function(N){return(b==null||b(N))&&qn(N,M._actions)};(w.array(c)||w.object(c))&&this._onOff($n.Off,s,c,void 0,C),(w.array(h)||w.object(h))&&this._onOff($n.On,s,h,void 0,C)}},{key:"setPerAction",value:function(s,c){var h=this._defaults;for(var p in c){var M=p,b=this.options[s],C=c[M];M==="listeners"&&this.updatePerActionListeners(s,b.listeners,C),w.array(C)?b[M]=Qe(C):w.plainObject(C)?(b[M]=ge(b[M]||{},Zn(C)),w.object(h.perAction[M])&&"enabled"in h.perAction[M]&&(b[M].enabled=C.enabled!==!1)):w.bool(C)&&w.object(h.perAction[M])?b[M].enabled=C:b[M]=C}}},{key:"getRect",value:function(s){return s=s||(w.element(this.target)?this.target:null),w.string(this.target)&&(s=s||this._context.querySelector(this.target)),De(s)}},{key:"rectChecker",value:function(s){var c=this;return w.func(s)?(this.getRect=function(h){var p=ge({},s.apply(c,h));return"width"in p||(p.width=p.right-p.left,p.height=p.bottom-p.top),p},this):s===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(s,c){if(it(c)||w.object(c)){for(var h in this.options[s]=c,this._actions.map)this.options[h][s]=c;return this}return this.options[s]}},{key:"origin",value:function(s){return this._backCompatOption("origin",s)}},{key:"deltaSource",value:function(s){return s==="page"||s==="client"?(this.options.deltaSource=s,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var s=this.target;return w.string(s)?Array.from(this._context.querySelectorAll(s)):w.func(s)&&s.getAllElements?s.getAllElements():w.element(s)?[s]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(s){return this._context===s.ownerDocument||oe(this._context,s)}},{key:"testIgnoreAllow",value:function(s,c,h){return!this.testIgnore(s.ignoreFrom,c,h)&&this.testAllow(s.allowFrom,c,h)}},{key:"testAllow",value:function(s,c,h){return!s||!!w.element(h)&&(w.string(s)?ht(h,s,c):!!w.element(s)&&oe(s,h))}},{key:"testIgnore",value:function(s,c,h){return!(!s||!w.element(h))&&(w.string(s)?ht(h,s,c):!!w.element(s)&&oe(s,h))}},{key:"fire",value:function(s){return this.events.fire(s),this}},{key:"_onOff",value:function(s,c,h,p,M){w.object(c)&&!w.array(c)&&(p=h,h=null);var b=Ge(c,h,M);for(var C in b){C==="wheel"&&(C=q.wheelEvent);for(var N=0,z=b[C];N<z.length;N++){var O=z[N];qn(C,this._actions)?this.events[s===$n.On?"on":"off"](C,O):w.string(this.target)?this._scopeEvents[s===$n.On?"addDelegate":"removeDelegate"](this.target,this._context,C,O,p):this._scopeEvents[s===$n.On?"add":"remove"](this.target,C,O,p)}}return this}},{key:"on",value:function(s,c,h){return this._onOff($n.On,s,c,h)}},{key:"off",value:function(s,c,h){return this._onOff($n.Off,s,c,h)}},{key:"set",value:function(s){var c=this._defaults;for(var h in w.object(s)||(s={}),this.options=Zn(c.base),this._actions.methodDict){var p=h,M=this._actions.methodDict[p];this.options[p]={},this.setPerAction(p,ge(ge({},c.perAction),c.actions[p])),this[M](s[p])}for(var b in s)b!=="getRect"?w.func(this[b])&&this[b](s[b]):this.rectChecker(s.getRect);return this}},{key:"unset",value:function(){if(w.string(this.target))for(var s in this._scopeEvents.delegatedEvents)for(var c=this._scopeEvents.delegatedEvents[s],h=c.length-1;h>=0;h--){var p=c[h],M=p.selector,b=p.context,C=p.listeners;M===this.target&&b===this._context&&c.splice(h,1);for(var N=C.length-1;N>=0;N--)this._scopeEvents.removeDelegate(this.target,this._context,s,C[N][0],C[N][1])}else this._scopeEvents.remove(this.target,"all")}}]),o}(),du=function(){function o(s){var c=this;a(this,o),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=s,s.addListeners({"interactable:unset":function(h){var p=h.interactable,M=p.target,b=w.string(M)?c.selectorMap[M]:M[c.scope.id],C=S(b,function(N){return N===p});b.splice(C,1)}})}return u(o,[{key:"new",value:function(s,c){c=ge(c||{},{actions:this.scope.actions});var h=new this.scope.Interactable(s,c,this.scope.document,this.scope.events);return this.scope.addDocument(h._doc),this.list.push(h),w.string(s)?(this.selectorMap[s]||(this.selectorMap[s]=[]),this.selectorMap[s].push(h)):(h.target[this.scope.id]||Object.defineProperty(s,this.scope.id,{value:[],configurable:!0}),s[this.scope.id].push(h)),this.scope.fire("interactable:new",{target:s,options:c,interactable:h,win:this.scope._win}),h}},{key:"getExisting",value:function(s,c){var h=c&&c.context||this.scope.document,p=w.string(s),M=p?this.selectorMap[s]:s[this.scope.id];if(M)return X(M,function(b){return b._context===h&&(p||b.inContext(s))})}},{key:"forEachMatch",value:function(s,c){for(var h=0,p=this.list;h<p.length;h++){var M=p[h],b=void 0;if((w.string(M.target)?w.element(s)&&he(s,M.target):s===M.target)&&M.inContext(s)&&(b=c(M)),b!==void 0)return b}}}]),o}(),fu=function(){function o(){var s=this;a(this,o),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=q,this.defaults=Zn(na),this.Eventable=ua,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=function(h){var p=function M(b,C){var N=h.interactables.getExisting(b,C);return N||((N=h.interactables.new(b,C)).events.global=M.globalEvents),N};return p.getPointerAverage=ye,p.getTouchBBox=Ue,p.getTouchDistance=rt,p.getTouchAngle=ke,p.getElementRect=De,p.getElementClientRect=_e,p.matchesSelector=he,p.closest=ne,p.globalEvents={},p.version="1.10.27",p.scope=h,p.use=function(M,b){return this.scope.usePlugin(M,b),this},p.isSet=function(M,b){return!!this.scope.interactables.get(M,b&&b.context)},p.on=Ee(function(M,b,C){if(w.string(M)&&M.search(" ")!==-1&&(M=M.trim().split(/ +/)),w.array(M)){for(var N=0,z=M;N<z.length;N++){var O=z[N];this.on(O,b,C)}return this}if(w.object(M)){for(var V in M)this.on(V,M[V],b);return this}return qn(M,this.scope.actions)?this.globalEvents[M]?this.globalEvents[M].push(b):this.globalEvents[M]=[b]:this.scope.events.add(this.scope.document,M,b,{options:C}),this},"The interact.on() method is being deprecated"),p.off=Ee(function(M,b,C){if(w.string(M)&&M.search(" ")!==-1&&(M=M.trim().split(/ +/)),w.array(M)){for(var N=0,z=M;N<z.length;N++){var O=z[N];this.off(O,b,C)}return this}if(w.object(M)){for(var V in M)this.off(V,M[V],b);return this}var se;return qn(M,this.scope.actions)?M in this.globalEvents&&(se=this.globalEvents[M].indexOf(b))!==-1&&this.globalEvents[M].splice(se,1):this.scope.events.remove(this.scope.document,M,b,C),this},"The interact.off() method is being deprecated"),p.debug=function(){return this.scope},p.supportsTouch=function(){return q.supportsTouch},p.supportsPointerEvent=function(){return q.supportsPointerEvent},p.stop=function(){for(var M=0,b=this.scope.interactions.list;M<b.length;M++)b[M].stop();return this},p.pointerMoveTolerance=function(M){return w.number(M)?(this.scope.interactions.pointerMoveTolerance=M,this):this.scope.interactions.pointerMoveTolerance},p.addDocument=function(M,b){this.scope.addDocument(M,b)},p.removeDocument=function(M){this.scope.removeDocument(M)},p}(this),this.InteractEvent=Vs,this.Interactable=void 0,this.interactables=new du(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(h){return s.removeDocument(h.target)};var c=this;this.Interactable=function(h){f(M,h);var p=x(M);function M(){return a(this,M),p.apply(this,arguments)}return u(M,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(b){return E(g(M.prototype),"set",this).call(this,b),c.fire("interactable:set",{options:b,interactable:this}),this}},{key:"unset",value:function(){E(g(M.prototype),"unset",this).call(this);var b=c.interactables.list.indexOf(this);b<0||(c.interactables.list.splice(b,1),c.fire("interactable:unset",{interactable:this}))}}]),M}(hu)}return u(o,[{key:"addListeners",value:function(s,c){this.listenerMaps.push({id:c,map:s})}},{key:"fire",value:function(s,c){for(var h=0,p=this.listenerMaps;h<p.length;h++){var M=p[h].map[s];if(M&&M(c,this,s)===!1)return!1}}},{key:"init",value:function(s){return this.isInitialized?this:function(c,h){return c.isInitialized=!0,w.window(h)&&D(h),Q.init(h),q.init(h),Cn.init(h),c.window=h,c.document=h.document,c.usePlugin(uu),c.usePlugin(au),c}(this,s)}},{key:"pluginIsInstalled",value:function(s){var c=s.id;return c?!!this._plugins.map[c]:this._plugins.list.indexOf(s)!==-1}},{key:"usePlugin",value:function(s,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(s))return this;if(s.id&&(this._plugins.map[s.id]=s),this._plugins.list.push(s),s.install&&s.install(this,c),s.listeners&&s.before){for(var h=0,p=this.listenerMaps.length,M=s.before.reduce(function(C,N){return C[N]=!0,C[pa(N)]=!0,C},{});h<p;h++){var b=this.listenerMaps[h].id;if(b&&(M[b]||M[pa(b)]))break}this.listenerMaps.splice(h,0,{id:s.id,map:s.listeners})}else s.listeners&&this.listenerMaps.push({id:s.id,map:s.listeners});return this}},{key:"addDocument",value:function(s,c){if(this.getDocIndex(s)!==-1)return!1;var h=U(s);c=c?ge({},c):{},this.documents.push({doc:s,options:c}),this.events.documents.push(s),s!==this.document&&this.events.add(h,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:s,window:h,scope:this,options:c})}},{key:"removeDocument",value:function(s){var c=this.getDocIndex(s),h=U(s),p=this.documents[c].options;this.events.remove(h,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:s,window:h,scope:this,options:p})}},{key:"getDocIndex",value:function(s){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===s)return c;return-1}},{key:"getDocOptions",value:function(s){var c=this.getDocIndex(s);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),o}();function pa(o){return o&&o.replace(/\/.*$/,"")}var ma=new fu,$t=ma.interactStatic,pu=typeof globalThis<"u"?globalThis:window;ma.init(pu);var mu=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(o){var s=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(h){var p=h[0],M=h[1];return p in o||M in o}),c=function(h,p){for(var M=o.range,b=o.limits,C=b===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:b,N=o.offset,z=N===void 0?{x:0,y:0}:N,O={range:M,grid:o,x:null,y:null},V=0;V<s.length;V++){var se=s[V],me=se[0],de=se[1],ve=Math.round((h-z.x)/o[me]),Ce=Math.round((p-z.y)/o[de]);O[me]=Math.max(C.left,Math.min(C.right,ve*o[me]+z.x)),O[de]=Math.max(C.top,Math.min(C.bottom,Ce*o[de]+z.y))}return O};return c.grid=o,c.coordFields=s,c}}),gu={id:"snappers",install:function(o){var s=o.interactStatic;s.snappers=ge(s.snappers||{},mu),s.createSnapGrid=s.snappers.grid}},vu=gu,_u={start:function(o){var s=o.state,c=o.rect,h=o.edges,p=o.pageCoords,M=s.options,b=M.ratio,C=M.enabled,N=s.options,z=N.equalDelta,O=N.modifiers;b==="preserve"&&(b=c.width/c.height),s.startCoords=ge({},p),s.startRect=ge({},c),s.ratio=b,s.equalDelta=z;var V=s.linkedEdges={top:h.top||h.left&&!h.bottom,left:h.left||h.top&&!h.right,bottom:h.bottom||h.right&&!h.top,right:h.right||h.bottom&&!h.left};if(s.xIsPrimaryAxis=!(!h.left&&!h.right),s.equalDelta){var se=(V.left?1:-1)*(V.top?1:-1);s.edgeSign={x:se,y:se}}else s.edgeSign={x:V.left?-1:1,y:V.top?-1:1};if(C!==!1&&ge(h,V),O!=null&&O.length){var me=new Ii(o.interaction);me.copyFrom(o.interaction.modification),me.prepareStates(O),s.subModification=me,me.startAll(n({},o))}},set:function(o){var s=o.state,c=o.rect,h=o.coords,p=s.linkedEdges,M=ge({},h),b=s.equalDelta?xu:yu;if(ge(o.edges,p),b(s,s.xIsPrimaryAxis,h,c),!s.subModification)return null;var C=ge({},c);ze(p,C,{x:h.x-M.x,y:h.y-M.y});var N=s.subModification.setAll(n(n({},o),{},{rect:C,edges:p,pageCoords:h,prevCoords:h,prevRect:C})),z=N.delta;return N.changed&&(b(s,Math.abs(z.x)>Math.abs(z.y),N.coords,N.rect),ge(h,N.coords)),N.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function xu(o,s,c){var h=o.startCoords,p=o.edgeSign;s?c.y=h.y+(c.x-h.x)*p.y:c.x=h.x+(c.y-h.y)*p.x}function yu(o,s,c,h){var p=o.startRect,M=o.startCoords,b=o.ratio,C=o.edgeSign;if(s){var N=h.width/b;c.y=M.y+(N-p.height)*C.y}else{var z=h.height*b;c.x=M.x+(z-p.width)*C.x}}var Mu=Kn(_u,"aspectRatio"),ga=function(){};ga._defaults={};var Vr=ga;function gi(o,s,c){return w.func(o)?ft(o,s.interactable,s.element,[c.x,c.y,s]):ft(o,s.interactable,s.element)}var Wr={start:function(o){var s=o.rect,c=o.startOffset,h=o.state,p=o.interaction,M=o.pageCoords,b=h.options,C=b.elementRect,N=ge({left:0,top:0,right:0,bottom:0},b.offset||{});if(s&&C){var z=gi(b.restriction,p,M);if(z){var O=z.right-z.left-s.width,V=z.bottom-z.top-s.height;O<0&&(N.left+=O,N.right+=O),V<0&&(N.top+=V,N.bottom+=V)}N.left+=c.left-s.width*C.left,N.top+=c.top-s.height*C.top,N.right+=c.right-s.width*(1-C.right),N.bottom+=c.bottom-s.height*(1-C.bottom)}h.offset=N},set:function(o){var s=o.coords,c=o.interaction,h=o.state,p=h.options,M=h.offset,b=gi(p.restriction,c,s);if(b){var C=function(N){return!N||"left"in N&&"top"in N||((N=ge({},N)).left=N.x||0,N.top=N.y||0,N.right=N.right||N.left+N.width,N.bottom=N.bottom||N.top+N.height),N}(b);s.x=Math.max(Math.min(C.right-M.right,s.x),C.left+M.left),s.y=Math.max(Math.min(C.bottom-M.bottom,s.y),C.top+M.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},Su=Kn(Wr,"restrict"),va={top:1/0,left:1/0,bottom:-1/0,right:-1/0},_a={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function xa(o,s){for(var c=0,h=["top","left","bottom","right"];c<h.length;c++){var p=h[c];p in o||(o[p]=s[p])}return o}var vr={noInner:va,noOuter:_a,start:function(o){var s,c=o.interaction,h=o.startOffset,p=o.state,M=p.options;M&&(s=Be(gi(M.offset,c,c.coords.start.page))),s=s||{x:0,y:0},p.offset={top:s.y+h.top,left:s.x+h.left,bottom:s.y-h.bottom,right:s.x-h.right}},set:function(o){var s=o.coords,c=o.edges,h=o.interaction,p=o.state,M=p.offset,b=p.options;if(c){var C=ge({},s),N=gi(b.inner,h,C)||{},z=gi(b.outer,h,C)||{};xa(N,va),xa(z,_a),c.top?s.y=Math.min(Math.max(z.top+M.top,C.y),N.top+M.top):c.bottom&&(s.y=Math.max(Math.min(z.bottom+M.bottom,C.y),N.bottom+M.bottom)),c.left?s.x=Math.min(Math.max(z.left+M.left,C.x),N.left+M.left):c.right&&(s.x=Math.max(Math.min(z.right+M.right,C.x),N.right+M.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},Eu=Kn(vr,"restrictEdges"),bu=ge({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(o){}},Wr.defaults),Tu=Kn({start:Wr.start,set:Wr.set,defaults:bu},"restrictRect"),wu={width:-1/0,height:-1/0},Au={width:1/0,height:1/0},Ru=Kn({start:function(o){return vr.start(o)},set:function(o){var s=o.interaction,c=o.state,h=o.rect,p=o.edges,M=c.options;if(p){var b=mt(gi(M.min,s,o.coords))||wu,C=mt(gi(M.max,s,o.coords))||Au;c.options={endOnly:M.endOnly,inner:ge({},vr.noInner),outer:ge({},vr.noOuter)},p.top?(c.options.inner.top=h.bottom-b.height,c.options.outer.top=h.bottom-C.height):p.bottom&&(c.options.inner.bottom=h.top+b.height,c.options.outer.bottom=h.top+C.height),p.left?(c.options.inner.left=h.right-b.width,c.options.outer.left=h.right-C.width):p.right&&(c.options.inner.right=h.left+b.width,c.options.outer.right=h.left+C.width),vr.set(o),c.options=M}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),qs={start:function(o){var s,c=o.interaction,h=o.interactable,p=o.element,M=o.rect,b=o.state,C=o.startOffset,N=b.options,z=N.offsetWithOrigin?function(se){var me=se.interaction.element,de=Be(ft(se.state.options.origin,null,null,[me])),ve=de||Ke(se.interactable,me,se.interaction.prepared.name);return ve}(o):{x:0,y:0};if(N.offset==="startCoords")s={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var O=ft(N.offset,h,p,[c]);(s=Be(O)||{x:0,y:0}).x+=z.x,s.y+=z.y}var V=N.relativePoints;b.offsets=M&&V&&V.length?V.map(function(se,me){return{index:me,relativePoint:se,x:C.left-M.width*se.x+s.x,y:C.top-M.height*se.y+s.y}}):[{index:0,relativePoint:null,x:s.x,y:s.y}]},set:function(o){var s=o.interaction,c=o.coords,h=o.state,p=h.options,M=h.offsets,b=Ke(s.interactable,s.element,s.prepared.name),C=ge({},c),N=[];p.offsetWithOrigin||(C.x-=b.x,C.y-=b.y);for(var z=0,O=M;z<O.length;z++)for(var V=O[z],se=C.x-V.x,me=C.y-V.y,de=0,ve=p.targets.length;de<ve;de++){var Ce=p.targets[de],we=void 0;(we=w.func(Ce)?Ce(se,me,s._proxy,V,de):Ce)&&N.push({x:(w.number(we.x)?we.x:se)+V.x,y:(w.number(we.y)?we.y:me)+V.y,range:w.number(we.range)?we.range:p.range,source:Ce,index:de,offset:V})}for(var Oe={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},tt=0;tt<N.length;tt++){var ut=N[tt],Ve=ut.range,nt=ut.x-C.x,Qt=ut.y-C.y,wt=vt(nt,Qt),on=wt<=Ve;Ve===1/0&&Oe.inRange&&Oe.range!==1/0&&(on=!1),Oe.target&&!(on?Oe.inRange&&Ve!==1/0?wt/Ve<Oe.distance/Oe.range:Ve===1/0&&Oe.range!==1/0||wt<Oe.distance:!Oe.inRange&&wt<Oe.distance)||(Oe.target=ut,Oe.distance=wt,Oe.range=Ve,Oe.inRange=on,Oe.delta.x=nt,Oe.delta.y=Qt)}return Oe.inRange&&(c.x=Oe.target.x,c.y=Oe.target.y),h.closest=Oe,Oe},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},Cu=Kn(qs,"snap"),Xr={start:function(o){var s=o.state,c=o.edges,h=s.options;if(!c)return null;o.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:h.offset||"self",origin:{x:0,y:0},range:h.range}},s.targetFields=s.targetFields||[["width","height"],["x","y"]],qs.start(o),s.offsets=o.state.offsets,o.state=s},set:function(o){var s=o.interaction,c=o.state,h=o.coords,p=c.options,M=c.offsets,b={x:h.x-M[0].x,y:h.y-M[0].y};c.options=ge({},p),c.options.targets=[];for(var C=0,N=p.targets||[];C<N.length;C++){var z=N[C],O=void 0;if(O=w.func(z)?z(b.x,b.y,s):z){for(var V=0,se=c.targetFields;V<se.length;V++){var me=se[V],de=me[0],ve=me[1];if(de in O||ve in O){O.x=O[de],O.y=O[ve];break}}c.options.targets.push(O)}}var Ce=qs.set(o);return c.options=p,Ce},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},Pu=Kn(Xr,"snapSize"),Zs={aspectRatio:Mu,restrictEdges:Eu,restrict:Su,restrictRect:Tu,restrictSize:Ru,snapEdges:Kn({start:function(o){var s=o.edges;return s?(o.state.targetFields=o.state.targetFields||[[s.left?"left":"right",s.top?"top":"bottom"]],Xr.start(o)):null},set:Xr.set,defaults:ge(Zn(Xr.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:Cu,snapSize:Pu,spring:Vr,avoid:Vr,transform:Vr,rubberband:Vr},Du={id:"modifiers",install:function(o){var s=o.interactStatic;for(var c in o.usePlugin(ta),o.usePlugin(vu),s.modifiers=Zs,Zs){var h=Zs[c],p=h._defaults,M=h._methods;p._methods=M,o.defaults.perAction[c]=p}}},Lu=Du,ya=function(o){f(c,o);var s=x(c);function c(h,p,M,b,C,N){var z;if(a(this,c),P(v(z=s.call(this,C)),M),M!==p&&P(v(z),p),z.timeStamp=N,z.originalEvent=M,z.type=h,z.pointerId=Me(p),z.pointerType=Re(p),z.target=b,z.currentTarget=null,h==="tap"){var O=C.getPointerIndex(p);z.dt=z.timeStamp-C.pointers[O].downTime;var V=z.timeStamp-C.tapTime;z.double=!!C.prevTap&&C.prevTap.type!=="doubletap"&&C.prevTap.target===z.target&&V<500}else h==="doubletap"&&(z.dt=p.timeStamp-C.tapTime,z.double=!0);return z}return u(c,[{key:"_subtractOrigin",value:function(h){var p=h.x,M=h.y;return this.pageX-=p,this.pageY-=M,this.clientX-=p,this.clientY-=M,this}},{key:"_addOrigin",value:function(h){var p=h.x,M=h.y;return this.pageX+=p,this.pageY+=M,this.clientX+=p,this.clientY+=M,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),c}($e),_r={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(o){o.pointerEvents=_r,o.defaults.actions.pointerEvents=_r.defaults,ge(o.actions.phaselessTypes,_r.types)},listeners:{"interactions:new":function(o){var s=o.interaction;s.prevTap=null,s.tapTime=0},"interactions:update-pointer":function(o){var s=o.down,c=o.pointerInfo;!s&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(o,s){var c=o.interaction,h=o.pointer,p=o.event,M=o.eventTarget;o.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Ks(o),Qn({interaction:c,pointer:h,event:p,eventTarget:M,type:"move"},s))},"interactions:down":function(o,s){(function(c,h){for(var p=c.interaction,M=c.pointer,b=c.event,C=c.eventTarget,N=c.pointerIndex,z=p.pointers[N].hold,O=Se(C),V={interaction:p,pointer:M,event:b,eventTarget:C,type:"hold",targets:[],path:O,node:null},se=0;se<O.length;se++){var me=O[se];V.node=me,h.fire("pointerEvents:collect-targets",V)}if(V.targets.length){for(var de=1/0,ve=0,Ce=V.targets;ve<Ce.length;ve++){var we=Ce[ve].eventable.options.holdDuration;we<de&&(de=we)}z.duration=de,z.timeout=setTimeout(function(){Qn({interaction:p,eventTarget:C,pointer:M,event:b,type:"hold"},h)},de)}})(o,s),Qn(o,s)},"interactions:up":function(o,s){Ks(o),Qn(o,s),function(c,h){var p=c.interaction,M=c.pointer,b=c.event,C=c.eventTarget;p.pointerWasMoved||Qn({interaction:p,eventTarget:C,pointer:M,event:b,type:"tap"},h)}(o,s)},"interactions:cancel":function(o,s){Ks(o),Qn(o,s)}},PointerEvent:ya,fire:Qn,collectEventTargets:Ma,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Qn(o,s){var c=o.interaction,h=o.pointer,p=o.event,M=o.eventTarget,b=o.type,C=o.targets,N=C===void 0?Ma(o,s):C,z=new ya(b,h,p,M,c,s.now());s.fire("pointerEvents:new",{pointerEvent:z});for(var O={interaction:c,pointer:h,event:p,eventTarget:M,targets:N,type:b,pointerEvent:z},V=0;V<N.length;V++){var se=N[V];for(var me in se.props||{})z[me]=se.props[me];var de=Ke(se.eventable,se.node);if(z._subtractOrigin(de),z.eventable=se.eventable,z.currentTarget=se.node,se.eventable.fire(z),z._addOrigin(de),z.immediatePropagationStopped||z.propagationStopped&&V+1<N.length&&N[V+1].node!==z.currentTarget)break}if(s.fire("pointerEvents:fired",O),b==="tap"){var ve=z.double?Qn({interaction:c,pointer:h,event:p,eventTarget:M,type:"doubletap"},s):z;c.prevTap=ve,c.tapTime=ve.timeStamp}return z}function Ma(o,s){var c=o.interaction,h=o.pointer,p=o.event,M=o.eventTarget,b=o.type,C=c.getPointerIndex(h),N=c.pointers[C];if(b==="tap"&&(c.pointerWasMoved||!N||N.downTarget!==M))return[];for(var z=Se(M),O={interaction:c,pointer:h,event:p,eventTarget:M,type:b,path:z,targets:[],node:null},V=0;V<z.length;V++){var se=z[V];O.node=se,s.fire("pointerEvents:collect-targets",O)}return b==="hold"&&(O.targets=O.targets.filter(function(me){var de,ve;return me.eventable.options.holdDuration===((de=c.pointers[C])==null||(ve=de.hold)==null?void 0:ve.duration)})),O.targets}function Ks(o){var s=o.interaction,c=o.pointerIndex,h=s.pointers[c].hold;h&&h.timeout&&(clearTimeout(h.timeout),h.timeout=null)}var Iu=Object.freeze({__proto__:null,default:_r});function Uu(o){var s=o.interaction;s.holdIntervalHandle&&(clearInterval(s.holdIntervalHandle),s.holdIntervalHandle=null)}var Nu={id:"pointer-events/holdRepeat",install:function(o){o.usePlugin(_r);var s=o.pointerEvents;s.defaults.holdRepeatInterval=0,s.types.holdrepeat=o.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(o,s){return o["pointerEvents:".concat(s)]=Uu,o},{"pointerEvents:new":function(o){var s=o.pointerEvent;s.type==="hold"&&(s.count=(s.count||0)+1)},"pointerEvents:fired":function(o,s){var c=o.interaction,h=o.pointerEvent,p=o.eventTarget,M=o.targets;if(h.type==="hold"&&M.length){var b=M[0].eventable.options.holdRepeatInterval;b<=0||(c.holdIntervalHandle=setTimeout(function(){s.pointerEvents.fire({interaction:c,eventTarget:p,type:"hold",pointer:h,event:h},s)},b))}}})},Ou=Nu,Fu={id:"pointer-events/interactableTargets",install:function(o){var s=o.Interactable;s.prototype.pointerEvents=function(h){return ge(this.events.options,h),this};var c=s.prototype._backCompatOption;s.prototype._backCompatOption=function(h,p){var M=c.call(this,h,p);return M===this&&(this.events.options[h]=p),M}},listeners:{"pointerEvents:collect-targets":function(o,s){var c=o.targets,h=o.node,p=o.type,M=o.eventTarget;s.interactables.forEachMatch(h,function(b){var C=b.events,N=C.options;C.types[p]&&C.types[p].length&&b.testIgnoreAllow(N,h,M)&&c.push({node:h,eventable:C,props:{interactable:b}})})},"interactable:new":function(o){var s=o.interactable;s.events.getRect=function(c){return s.getRect(c)}},"interactable:set":function(o,s){var c=o.interactable,h=o.options;ge(c.events.options,s.pointerEvents.defaults),ge(c.events.options,h.pointerEvents||{})}}},Bu=Fu,zu={id:"pointer-events",install:function(o){o.usePlugin(Iu),o.usePlugin(Ou),o.usePlugin(Bu)}},ku=zu,Hu={id:"reflow",install:function(o){var s=o.Interactable;o.actions.phases.reflow=!0,s.prototype.reflow=function(c){return function(h,p,M){for(var b=h.getAllElements(),C=M.window.Promise,N=C?[]:null,z=function(){var V=b[O],se=h.getRect(V);if(!se)return 1;var me,de=X(M.interactions.list,function(we){return we.interacting()&&we.interactable===h&&we.element===V&&we.prepared.name===p.name});if(de)de.move(),N&&(me=de._reflowPromise||new C(function(we){de._reflowResolve=we}));else{var ve=mt(se),Ce=function(we){return{coords:we,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}}({page:{x:ve.x,y:ve.y},client:{x:ve.x,y:ve.y},timeStamp:M.now()});me=function(we,Oe,tt,ut,Ve){var nt=we.interactions.new({pointerType:"reflow"}),Qt={interaction:nt,event:Ve,pointer:Ve,eventTarget:tt,phase:"reflow"};nt.interactable=Oe,nt.element=tt,nt.prevEvent=Ve,nt.updatePointer(Ve,Ve,tt,!0),ce(nt.coords.delta),Le(nt.prepared,ut),nt._doPhase(Qt);var wt=we.window,on=wt.Promise,xn=on?new on(function(Bn){nt._reflowResolve=Bn}):void 0;return nt._reflowPromise=xn,nt.start(ut,Oe,tt),nt._interacting?(nt.move(Qt),nt.end(Ve)):(nt.stop(),nt._reflowResolve()),nt.removePointer(Ve,Ve),xn}(M,h,V,p,Ce)}N&&N.push(me)},O=0;O<b.length&&!z();O++);return N&&C.all(N).then(function(){return h})}(this,c,o)}},listeners:{"interactions:stop":function(o,s){var c=o.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),function(h,p){h.splice(h.indexOf(p),1)}(s.interactions.list,c))}}},Gu=Hu;if($t.use(Kt),$t.use(oa),$t.use(ku),$t.use(su),$t.use(Lu),$t.use(Bt),$t.use(Gs),$t.use(ee),$t.use(Gu),$t.default=$t,r(i)==="object"&&i)try{i.exports=$t}catch{}return $t.default=$t,$t})})(bs,bs.exports);var Xu=bs.exports;const yr=Wu(Xu);function Yu(i){var e=i.target,t=(parseFloat(e.getAttribute("data-x"))||0)+i.dx,n=(parseFloat(e.getAttribute("data-y"))||0)+i.dy;e.style.transform="translate("+t+"px, "+n+"px)",e.setAttribute("data-x",t),e.setAttribute("data-y",n)}function ju(i){var e=i.target,t=parseFloat(e.getAttribute("data-x"))||0,n=parseFloat(e.getAttribute("data-y"))||0;e.style.width=i.rect.width+"px",e.style.height=i.rect.height+"px",t+=i.deltaRect.left,n+=i.deltaRect.top,e.style.transform="translate("+t+"px,"+n+"px)",e.setAttribute("data-x",t),e.setAttribute("data-y",n)}function qu(){window.dragMoveListener=Yu,window.dragResizeListener=ju,yr(".movable-box").draggable({listeners:{move:window.dragMoveListener},allowFrom:".drag-handle"}).pointerEvents({allowFrom:"*"}),yr(".resize-drag").resizable({edges:{left:!0,right:!0,bottom:!0,top:!1},listeners:{move:window.dragResizeListener},modifiers:[yr.modifiers.restrictEdges({restriction:"parent",endOnly:!0}),yr.modifiers.restrictSize({min:{width:100,height:50}})],inertia:!0}).draggable({edges:{left:!1,right:!1,bottom:!1,top:!0},listeners:{move:window.dragMoveListener},inertia:!0,modifiers:[yr.modifiers.restrictRect({restriction:"parent",endOnly:!0})]})}let Zu={setup:qu};function Ku(i){var e=0,t=0,n=0,r=0;document.getElementById(i.id+"header")?document.getElementById(i.id+"header").onmousedown=a:i.onmousedown=a;function a(d){d.preventDefault(),n=d.clientX,r=d.clientY,document.onmouseup=u,document.onmousemove=l}function l(d){d.preventDefault(),e=n-d.clientX,t=r-d.clientY,n=d.clientX,r=d.clientY,i.style.top=i.offsetTop-t+"px",i.style.left=i.offsetLeft-e+"px"}function u(){document.onmouseup=null,document.onmousemove=null}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="164",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$u=0,Sa=1,Qu=2,hc=1,Ju=2,Wn=3,hi=0,rn=1,vn=2,wn=0,nr=1,Uo=2,Ea=3,ba=4,eh=5,wi=100,th=101,nh=102,ih=103,rh=104,sh=200,oh=201,ah=202,lh=203,No=204,Oo=205,ch=206,uh=207,hh=208,dh=209,fh=210,ph=211,mh=212,gh=213,vh=214,_h=0,xh=1,yh=2,Ts=3,Mh=4,Sh=5,Eh=6,bh=7,Wo=0,Th=1,wh=2,ui=0,dc=1,fc=2,pc=3,mc=4,Ah=5,gc=6,vc=7,_c=300,sr=301,or=302,Fo=303,Bo=304,Us=306,zo=1e3,Ci=1001,ko=1002,_n=1003,Rh=1004,jr=1005,Tn=1006,$s=1007,Pi=1008,di=1009,Ch=1010,Ph=1011,xc=1012,yc=1013,ar=1014,li=1015,En=1016,Mc=1017,Sc=1018,Nr=1020,Dh=35902,Lh=1021,Ih=1022,Nn=1023,Uh=1024,Nh=1025,ir=1026,Ir=1027,Oh=1028,Ec=1029,Fh=1030,bc=1031,Tc=1033,Qs=33776,Js=33777,eo=33778,to=33779,Ta=35840,wa=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,Da=37496,La=37808,Ia=37809,Ua=37810,Na=37811,Oa=37812,Fa=37813,Ba=37814,za=37815,ka=37816,Ha=37817,Ga=37818,Va=37819,Wa=37820,Xa=37821,no=36492,Ya=36494,ja=36495,Bh=36283,qa=36284,Za=36285,Ka=36286,zh=3200,wc=3201,Ac=0,kh=1,oi="",Ln="srgb",fi="srgb-linear",Xo="display-p3",Ns="display-p3-linear",ws="linear",bt="srgb",As="rec709",Rs="p3",Oi=7680,$a=519,Hh=512,Gh=513,Vh=514,Rc=515,Wh=516,Xh=517,Yh=518,jh=519,Qa=35044,Ja="300 es",jn=2e3,Cs=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const Dr=Math.PI/180,Ur=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function Yo(i,e){return(i%e+e)%e}function qh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Zh(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function Kh(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function $h(i,e=1){return e-Math.abs(Yo(i,e*2)-e)}function Qh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ed(i,e){return i+Math.floor(Math.random()*(e-i+1))}function td(i,e){return i+Math.random()*(e-i)}function nd(i){return i*(.5-Math.random())}function id(i){i!==void 0&&(el=i);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(i){return i*Dr}function sd(i){return i*Ur}function od(i){return(i&i-1)===0&&i!==0}function ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cd(i,e,t,n,r){const a=Math.cos,l=Math.sin,u=a(t/2),d=l(t/2),f=a((e+n)/2),g=l((e+n)/2),y=a((e-n)/2),v=l((e-n)/2),x=a((n-e)/2),E=l((n-e)/2);switch(r){case"XYX":i.set(u*g,d*y,d*v,u*f);break;case"YZY":i.set(d*v,u*g,d*y,u*f);break;case"ZXZ":i.set(d*y,d*v,u*g,u*f);break;case"XZX":i.set(u*g,d*E,d*x,u*f);break;case"YXY":i.set(d*x,u*g,d*E,u*f);break;case"ZYZ":i.set(d*E,d*x,u*g,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ud={DEG2RAD:Dr,RAD2DEG:Ur,generateUUID:cr,clamp:Yt,euclideanModulo:Yo,mapLinear:qh,inverseLerp:Zh,lerp:Lr,damp:Kh,pingpong:$h,smoothstep:Qh,smootherstep:Jh,randInt:ed,randFloat:td,randFloatSpread:nd,seededRandom:id,degToRad:rd,radToDeg:sd,isPowerOfTwo:od,ceilPowerOfTwo:ad,floorPowerOfTwo:ld,setQuaternionFromProperEuler:cd,normalize:Jt,denormalize:Ji};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,r,a,l,u,d,f){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,u,d,f)}set(e,t,n,r,a,l,u,d,f){const g=this.elements;return g[0]=e,g[1]=r,g[2]=u,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],g=n[4],y=n[7],v=n[2],x=n[5],E=n[8],T=r[0],_=r[3],m=r[6],L=r[1],D=r[4],U=r[7],G=r[2],F=r[5],w=r[8];return a[0]=l*T+u*L+d*G,a[3]=l*_+u*D+d*F,a[6]=l*m+u*U+d*w,a[1]=f*T+g*L+y*G,a[4]=f*_+g*D+y*F,a[7]=f*m+g*U+y*w,a[2]=v*T+x*L+E*G,a[5]=v*_+x*D+E*F,a[8]=v*m+x*U+E*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],g=e[8];return t*l*g-t*u*f-n*a*g+n*u*d+r*a*f-r*l*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],g=e[8],y=g*l-u*f,v=u*d-g*a,x=f*a-l*d,E=t*y+n*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(r*f-g*n)*T,e[2]=(u*n-r*l)*T,e[3]=v*T,e[4]=(g*t-r*d)*T,e[5]=(r*a-u*t)*T,e[6]=x*T,e[7]=(n*d-f*t)*T,e[8]=(l*t-n*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,u){const d=Math.cos(a),f=Math.sin(a);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-r*f,r*d,-r*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new at;function Cc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=Ps("canvas");return i.style.display="block",i}const tl={};function dd(i){i in tl||(tl[i]=!0,console.warn(i))}const nl=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[fi]:{transfer:ws,primaries:As,toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:bt,primaries:As,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ns]:{transfer:ws,primaries:Rs,toReference:i=>i.applyMatrix3(il),fromReference:i=>i.applyMatrix3(nl)},[Xo]:{transfer:bt,primaries:Rs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(il),fromReference:i=>i.applyMatrix3(nl).convertLinearToSRGB()}},fd=new Set([fi,Ns]),xt={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=qr[e].toReference,r=qr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return qr[i].primaries},getTransfer:function(i){return i===oi?ws:qr[i].transfer}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Ps("canvas")),Fi.width=e.width,Fi.height=e.height;const n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=rr(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?a.push(so(r[l].image)):a.push(so(r[l]))}else a=so(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class sn extends Di{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=Ci,r=Ci,a=Tn,l=Pi,u=Nn,d=di,f=sn.DEFAULT_ANISOTROPY,g=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=cr(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=_c;sn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,f=d[0],g=d[4],y=d[8],v=d[1],x=d[5],E=d[9],T=d[2],_=d[6],m=d[10];if(Math.abs(g-v)<.01&&Math.abs(y-T)<.01&&Math.abs(E-_)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+T)<.1&&Math.abs(E+_)<.1&&Math.abs(f+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(f+1)/2,U=(x+1)/2,G=(m+1)/2,F=(g+v)/4,w=(y+T)/4,W=(E+_)/4;return D>U&&D>G?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=F/n,a=w/n):U>G?U<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(U),n=F/r,a=W/r):G<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(G),n=w/a,r=W/a),this.set(n,r,a,t),this}let L=Math.sqrt((_-E)*(_-E)+(y-T)*(y-T)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(_-E)/L,this.y=(y-T)/L,this.z=(v-g)/L,this.w=Math.acos((f+x+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends vd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dc extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _d extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,u){let d=n[r+0],f=n[r+1],g=n[r+2],y=n[r+3];const v=a[l+0],x=a[l+1],E=a[l+2],T=a[l+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=T;return}if(y!==T||d!==v||f!==x||g!==E){let _=1-u;const m=d*v+f*x+g*E+y*T,L=m>=0?1:-1,D=1-m*m;if(D>Number.EPSILON){const G=Math.sqrt(D),F=Math.atan2(G,m*L);_=Math.sin(_*F)/G,u=Math.sin(u*F)/G}const U=u*L;if(d=d*_+v*U,f=f*_+x*U,g=g*_+E*U,y=y*_+T*U,_===1-u){const G=1/Math.sqrt(d*d+f*f+g*g+y*y);d*=G,f*=G,g*=G,y*=G}}e[t]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,n,r,a,l){const u=n[r],d=n[r+1],f=n[r+2],g=n[r+3],y=a[l],v=a[l+1],x=a[l+2],E=a[l+3];return e[t]=u*E+g*y+d*x-f*v,e[t+1]=d*E+g*v+f*y-u*x,e[t+2]=f*E+g*x+u*v-d*y,e[t+3]=g*E-u*y-d*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),g=u(r/2),y=u(a/2),v=d(n/2),x=d(r/2),E=d(a/2);switch(l){case"XYZ":this._x=v*g*y+f*x*E,this._y=f*x*y-v*g*E,this._z=f*g*E+v*x*y,this._w=f*g*y-v*x*E;break;case"YXZ":this._x=v*g*y+f*x*E,this._y=f*x*y-v*g*E,this._z=f*g*E-v*x*y,this._w=f*g*y+v*x*E;break;case"ZXY":this._x=v*g*y-f*x*E,this._y=f*x*y+v*g*E,this._z=f*g*E+v*x*y,this._w=f*g*y-v*x*E;break;case"ZYX":this._x=v*g*y-f*x*E,this._y=f*x*y+v*g*E,this._z=f*g*E-v*x*y,this._w=f*g*y+v*x*E;break;case"YZX":this._x=v*g*y+f*x*E,this._y=f*x*y+v*g*E,this._z=f*g*E-v*x*y,this._w=f*g*y-v*x*E;break;case"XZY":this._x=v*g*y-f*x*E,this._y=f*x*y-v*g*E,this._z=f*g*E+v*x*y,this._w=f*g*y+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],u=t[5],d=t[9],f=t[2],g=t[6],y=t[10],v=n+u+y;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-d)*x,this._y=(a-f)*x,this._z=(l-r)*x}else if(n>u&&n>y){const x=2*Math.sqrt(1+n-u-y);this._w=(g-d)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(a+f)/x}else if(u>y){const x=2*Math.sqrt(1+u-n-y);this._w=(a-f)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+y-n-u);this._w=(l-r)/x,this._x=(a+f)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,u=t._x,d=t._y,f=t._z,g=t._w;return this._x=n*g+l*u+r*f-a*d,this._y=r*g+l*d+a*u-n*f,this._z=a*g+l*f+n*d-r*u,this._w=l*g-n*u-r*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let u=l*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-t;return this._w=x*l+t*this._w,this._x=x*n+t*this._x,this._y=x*r+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),g=Math.atan2(f,u),y=Math.sin((1-t)*g)/f,v=Math.sin(t*g)/f;return this._w=l*y+this._w*v,this._x=n*y+this._x*v,this._y=r*y+this._y*v,this._z=a*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*r-u*n),g=2*(u*t-a*r),y=2*(a*n-l*t);return this.x=t+d*f+l*y-u*g,this.y=n+d*g+u*f-a*y,this.z=r+d*y+a*g-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,u=t.y,d=t.z;return this.x=r*d-a*u,this.y=a*l-n*d,this.z=n*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new k,rl=new Ht;class Or{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,yn):yn.fromBufferAttribute(a,l),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Kr.subVectors(this.max,Mr),Bi.subVectors(e.a,Mr),zi.subVectors(e.b,Mr),ki.subVectors(e.c,Mr),Jn.subVectors(zi,Bi),ei.subVectors(ki,zi),vi.subVectors(Bi,ki);let t=[0,-Jn.z,Jn.y,0,-ei.z,ei.y,0,-vi.z,vi.y,Jn.z,0,-Jn.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-Jn.y,Jn.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!ao(t,Bi,zi,ki,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,Bi,zi,ki,Kr))?!1:($r.crossVectors(Jn,ei),t=[$r.x,$r.y,$r.z],ao(t,Bi,zi,ki,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new k,new k,new k,new k,new k,new k,new k,new k],yn=new k,Zr=new Or,Bi=new k,zi=new k,ki=new k,Jn=new k,ei=new k,vi=new k,Mr=new k,Kr=new k,$r=new k,_i=new k;function ao(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){_i.fromArray(i,a);const u=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),d=e.dot(_i),f=t.dot(_i),g=n.dot(_i);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>u)return!1}return!0}const xd=new Or,Sr=new k,lo=new k;class Os{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(lo)),this.expandByPoint(Sr.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new k,co=new k,Qr=new k,ti=new k,uo=new k,Jr=new k,ho=new k;class Fs{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){co.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(co);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Qr),u=ti.dot(this.direction),d=-ti.dot(Qr),f=ti.lengthSq(),g=Math.abs(1-l*l);let y,v,x,E;if(g>0)if(y=l*d-u,v=l*u-d,E=a*g,y>=0)if(v>=-E)if(v<=E){const T=1/g;y*=T,v*=T,x=y*(y+l*v+2*u)+v*(l*y+v+2*d)+f}else v=a,y=Math.max(0,-(l*v+u)),x=-y*y+v*(v+2*d)+f;else v=-a,y=Math.max(0,-(l*v+u)),x=-y*y+v*(v+2*d)+f;else v<=-E?(y=Math.max(0,-(-l*a+u)),v=y>0?-a:Math.min(Math.max(-a,-d),a),x=-y*y+v*(v+2*d)+f):v<=E?(y=0,v=Math.min(Math.max(-a,-d),a),x=v*(v+2*d)+f):(y=Math.max(0,-(l*a+u)),v=y>0?a:Math.min(Math.max(-a,-d),a),x=-y*y+v*(v+2*d)+f);else v=l>0?-a:a,y=Math.max(0,-(l*v+u)),x=-y*y+v*(v+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,y),r&&r.copy(co).addScaledVector(Qr,v),x}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,u,d;const f=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,r=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,r=(e.min.x-v.x)*f),g>=0?(a=(e.min.y-v.y)*g,l=(e.max.y-v.y)*g):(a=(e.max.y-v.y)*g,l=(e.min.y-v.y)*g),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),y>=0?(u=(e.min.z-v.z)*y,d=(e.max.z-v.z)*y):(u=(e.max.z-v.z)*y,d=(e.min.z-v.z)*y),n>d||u>r)||((u>n||n!==n)&&(n=u),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,a){uo.subVectors(t,e),Jr.subVectors(n,e),ho.crossVectors(uo,Jr);let l=this.direction.dot(ho),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;ti.subVectors(this.origin,e);const d=u*this.direction.dot(Jr.crossVectors(ti,Jr));if(d<0)return null;const f=u*this.direction.dot(uo.cross(ti));if(f<0||d+f>l)return null;const g=-u*ti.dot(ho);return g<0?null:this.at(g/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,a,l,u,d,f,g,y,v,x,E,T,_){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,u,d,f,g,y,v,x,E,T,_)}set(e,t,n,r,a,l,u,d,f,g,y,v,x,E,T,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=u,m[13]=d,m[2]=f,m[6]=g,m[10]=y,m[14]=v,m[3]=x,m[7]=E,m[11]=T,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),a=1/Hi.setFromMatrixColumn(e,1).length(),l=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(r),f=Math.sin(r),g=Math.cos(a),y=Math.sin(a);if(e.order==="XYZ"){const v=l*g,x=l*y,E=u*g,T=u*y;t[0]=d*g,t[4]=-d*y,t[8]=f,t[1]=x+E*f,t[5]=v-T*f,t[9]=-u*d,t[2]=T-v*f,t[6]=E+x*f,t[10]=l*d}else if(e.order==="YXZ"){const v=d*g,x=d*y,E=f*g,T=f*y;t[0]=v+T*u,t[4]=E*u-x,t[8]=l*f,t[1]=l*y,t[5]=l*g,t[9]=-u,t[2]=x*u-E,t[6]=T+v*u,t[10]=l*d}else if(e.order==="ZXY"){const v=d*g,x=d*y,E=f*g,T=f*y;t[0]=v-T*u,t[4]=-l*y,t[8]=E+x*u,t[1]=x+E*u,t[5]=l*g,t[9]=T-v*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const v=l*g,x=l*y,E=u*g,T=u*y;t[0]=d*g,t[4]=E*f-x,t[8]=v*f+T,t[1]=d*y,t[5]=T*f+v,t[9]=x*f-E,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const v=l*d,x=l*f,E=u*d,T=u*f;t[0]=d*g,t[4]=T-v*y,t[8]=E*y+x,t[1]=y,t[5]=l*g,t[9]=-u*g,t[2]=-f*g,t[6]=x*y+E,t[10]=v-T*y}else if(e.order==="XZY"){const v=l*d,x=l*f,E=u*d,T=u*f;t[0]=d*g,t[4]=-y,t[8]=f*g,t[1]=v*y+T,t[5]=l*g,t[9]=x*y-E,t[2]=E*y-x,t[6]=u*g,t[10]=T*y+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,Md)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ni.crossVectors(n,an),ni.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ni.crossVectors(n,an)),ni.normalize(),es.crossVectors(an,ni),r[0]=ni.x,r[4]=es.x,r[8]=an.x,r[1]=ni.y,r[5]=es.y,r[9]=an.y,r[2]=ni.z,r[6]=es.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],g=n[1],y=n[5],v=n[9],x=n[13],E=n[2],T=n[6],_=n[10],m=n[14],L=n[3],D=n[7],U=n[11],G=n[15],F=r[0],w=r[4],W=r[8],I=r[12],A=r[1],Y=r[5],$=r[9],H=r[13],Q=r[2],te=r[6],q=r[10],oe=r[14],ne=r[3],le=r[7],he=r[11],Pe=r[15];return a[0]=l*F+u*A+d*Q+f*ne,a[4]=l*w+u*Y+d*te+f*le,a[8]=l*W+u*$+d*q+f*he,a[12]=l*I+u*H+d*oe+f*Pe,a[1]=g*F+y*A+v*Q+x*ne,a[5]=g*w+y*Y+v*te+x*le,a[9]=g*W+y*$+v*q+x*he,a[13]=g*I+y*H+v*oe+x*Pe,a[2]=E*F+T*A+_*Q+m*ne,a[6]=E*w+T*Y+_*te+m*le,a[10]=E*W+T*$+_*q+m*he,a[14]=E*I+T*H+_*oe+m*Pe,a[3]=L*F+D*A+U*Q+G*ne,a[7]=L*w+D*Y+U*te+G*le,a[11]=L*W+D*$+U*q+G*he,a[15]=L*I+D*H+U*oe+G*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],u=e[5],d=e[9],f=e[13],g=e[2],y=e[6],v=e[10],x=e[14],E=e[3],T=e[7],_=e[11],m=e[15];return E*(+a*d*y-r*f*y-a*u*v+n*f*v+r*u*x-n*d*x)+T*(+t*d*x-t*f*v+a*l*v-r*l*x+r*f*g-a*d*g)+_*(+t*f*y-t*u*x-a*l*y+n*l*x+a*u*g-n*f*g)+m*(-r*u*g-t*d*y+t*u*v+r*l*y-n*l*v+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],g=e[8],y=e[9],v=e[10],x=e[11],E=e[12],T=e[13],_=e[14],m=e[15],L=y*_*f-T*v*f+T*d*x-u*_*x-y*d*m+u*v*m,D=E*v*f-g*_*f-E*d*x+l*_*x+g*d*m-l*v*m,U=g*T*f-E*y*f+E*u*x-l*T*x-g*u*m+l*y*m,G=E*y*d-g*T*d-E*u*v+l*T*v+g*u*_-l*y*_,F=t*L+n*D+r*U+a*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/F;return e[0]=L*w,e[1]=(T*v*a-y*_*a-T*r*x+n*_*x+y*r*m-n*v*m)*w,e[2]=(u*_*a-T*d*a+T*r*f-n*_*f-u*r*m+n*d*m)*w,e[3]=(y*d*a-u*v*a-y*r*f+n*v*f+u*r*x-n*d*x)*w,e[4]=D*w,e[5]=(g*_*a-E*v*a+E*r*x-t*_*x-g*r*m+t*v*m)*w,e[6]=(E*d*a-l*_*a-E*r*f+t*_*f+l*r*m-t*d*m)*w,e[7]=(l*v*a-g*d*a+g*r*f-t*v*f-l*r*x+t*d*x)*w,e[8]=U*w,e[9]=(E*y*a-g*T*a-E*n*x+t*T*x+g*n*m-t*y*m)*w,e[10]=(l*T*a-E*u*a+E*n*f-t*T*f-l*n*m+t*u*m)*w,e[11]=(g*u*a-l*y*a-g*n*f+t*y*f+l*n*x-t*u*x)*w,e[12]=G*w,e[13]=(g*T*r-E*y*r+E*n*v-t*T*v-g*n*_+t*y*_)*w,e[14]=(E*u*r-l*T*r-E*n*d+t*T*d+l*n*_-t*u*_)*w,e[15]=(l*y*r-g*u*r+g*n*d-t*y*d-l*n*v+t*u*v)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,u=e.y,d=e.z,f=a*l,g=a*u;return this.set(f*l+n,f*u-r*d,f*d+r*u,0,f*u+r*d,g*u+n,g*d-r*l,0,f*d-r*u,g*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,u=t._z,d=t._w,f=a+a,g=l+l,y=u+u,v=a*f,x=a*g,E=a*y,T=l*g,_=l*y,m=u*y,L=d*f,D=d*g,U=d*y,G=n.x,F=n.y,w=n.z;return r[0]=(1-(T+m))*G,r[1]=(x+U)*G,r[2]=(E-D)*G,r[3]=0,r[4]=(x-U)*F,r[5]=(1-(v+m))*F,r[6]=(_+L)*F,r[7]=0,r[8]=(E+D)*w,r[9]=(_-L)*w,r[10]=(1-(v+T))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Hi.set(r[0],r[1],r[2]).length();const l=Hi.set(r[4],r[5],r[6]).length(),u=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const f=1/a,g=1/l,y=1/u;return Mn.elements[0]*=f,Mn.elements[1]*=f,Mn.elements[2]*=f,Mn.elements[4]*=g,Mn.elements[5]*=g,Mn.elements[6]*=g,Mn.elements[8]*=y,Mn.elements[9]*=y,Mn.elements[10]*=y,t.setFromRotationMatrix(Mn),n.x=a,n.y=l,n.z=u,this}makePerspective(e,t,n,r,a,l,u=jn){const d=this.elements,f=2*a/(t-e),g=2*a/(n-r),y=(t+e)/(t-e),v=(n+r)/(n-r);let x,E;if(u===jn)x=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(u===Cs)x=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=y,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,l,u=jn){const d=this.elements,f=1/(t-e),g=1/(n-r),y=1/(l-a),v=(t+e)*f,x=(n+r)*g;let E,T;if(u===jn)E=(l+a)*y,T=-2*y;else if(u===Cs)E=a*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=T,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new k,Mn=new Tt,yd=new k(0,0,0),Md=new k(1,1,1),ni=new k,es=new k,an=new k,sl=new Tt,ol=new Ht;class An{constructor(e=0,t=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],u=r[8],d=r[1],f=r[5],g=r[9],y=r[2],v=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-y,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Yt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-y,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const al=new k,Gi=new Ht,Hn=new Tt,ts=new k,Er=new k,Ed=new k,bd=new Ht,ll=new k(1,0,0),cl=new k(0,1,0),ul=new k(0,0,1),hl={type:"added"},Td={type:"removed"},Vi={type:"childadded",child:null},fo={type:"childremoved",child:null};class It extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new An,n=new Ht,r=new k(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new at}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Er,ts,this.up):Hn.lookAt(ts,Er,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const u=r[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const y=d[f];a(e.shapes,y)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];r.animations.push(a(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),g=l(e.images),y=l(e.shapes),v=l(e.skeletons),x=l(e.animations),E=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),g.length>0&&(n.images=g),y.length>0&&(n.shapes=y),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=r,n;function l(u){const d=[];for(const f in u){const g=u[f];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new k,Gn=new k,po=new k,Vn=new k,Wi=new k,Xi=new k,dl=new k,mo=new k,go=new k,vo=new k;class Un{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Sn.subVectors(r,t),Gn.subVectors(n,t),po.subVectors(e,t);const l=Sn.dot(Sn),u=Sn.dot(Gn),d=Sn.dot(po),f=Gn.dot(Gn),g=Gn.dot(po),y=l*f-u*u;if(y===0)return a.set(0,0,0),null;const v=1/y,x=(f*d-u*g)*v,E=(l*g-u*d)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,a,l,u,d){return this.getBarycoord(e,t,n,r,Vn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Vn.x),d.addScaledVector(l,Vn.y),d.addScaledVector(u,Vn.z),d)}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Gn.subVectors(e,t),Sn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Sn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,u;Wi.subVectors(r,n),Xi.subVectors(a,n),mo.subVectors(e,n);const d=Wi.dot(mo),f=Xi.dot(mo);if(d<=0&&f<=0)return t.copy(n);go.subVectors(e,r);const g=Wi.dot(go),y=Xi.dot(go);if(g>=0&&y<=g)return t.copy(r);const v=d*y-g*f;if(v<=0&&d>=0&&g<=0)return l=d/(d-g),t.copy(n).addScaledVector(Wi,l);vo.subVectors(e,a);const x=Wi.dot(vo),E=Xi.dot(vo);if(E>=0&&x<=E)return t.copy(a);const T=x*f-d*E;if(T<=0&&f>=0&&E<=0)return u=f/(f-E),t.copy(n).addScaledVector(Xi,u);const _=g*E-x*y;if(_<=0&&y-g>=0&&x-E>=0)return dl.subVectors(a,r),u=(y-g)/(y-g+(x-E)),t.copy(r).addScaledVector(dl,u);const m=1/(_+T+v);return l=T*m,u=v*m,t.copy(n).addScaledVector(Wi,l).addScaledVector(Xi,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ns={h:0,s:0,l:0};function _o(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=Yo(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=_o(l,a,e+1/3),this.g=_o(l,a,e),this.b=_o(l,a,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ln){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=Lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return xt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Yt(Vt.r*255,0,255))*65536+Math.round(Yt(Vt.g*255,0,255))*256+Math.round(Yt(Vt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,a=Vt.b,l=Math.max(n,r,a),u=Math.min(n,r,a);let d,f;const g=(u+l)/2;if(u===l)d=0,f=0;else{const y=l-u;switch(f=g<=.5?y/(l+u):y/(2-l-u),l){case n:d=(r-a)/y+(r<a?6:0);break;case r:d=(a-n)/y+2;break;case a:d=(n-r)/y+4;break}d/=6}return e.h=d,e.s=f,e.l=g,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ln){xt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ns);const n=Lr(ii.h,ns.h,t),r=Lr(ii.s,ns.s,t),a=Lr(ii.l,ns.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new lt;lt.NAMES=Lc;let wd=0;class ur extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=nr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Oo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bs extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new k,is=new Ie;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array),a=Jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}}class Ic extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ad=0;const mn=new Tt,xo=new It,Yi=new k,ln=new Or,br=new Or,zt=new k;class qt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?Uc:Ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new at().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];br.setFromBufferAttribute(u),this.morphTargetsRelative?(zt.addVectors(ln.min,br.min),ln.expandByPoint(zt),zt.addVectors(ln.max,br.max),ln.expandByPoint(zt)):(ln.expandByPoint(br.min),ln.expandByPoint(br.max))}ln.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)zt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(zt));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,g=u.count;f<g;f++)zt.fromBufferAttribute(u,f),d&&(Yi.fromBufferAttribute(e,f),zt.add(Yi)),r=Math.max(r,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let W=0;W<n.count;W++)u[W]=new k,d[W]=new k;const f=new k,g=new k,y=new k,v=new Ie,x=new Ie,E=new Ie,T=new k,_=new k;function m(W,I,A){f.fromBufferAttribute(n,W),g.fromBufferAttribute(n,I),y.fromBufferAttribute(n,A),v.fromBufferAttribute(a,W),x.fromBufferAttribute(a,I),E.fromBufferAttribute(a,A),g.sub(f),y.sub(f),x.sub(v),E.sub(v);const Y=1/(x.x*E.y-E.x*x.y);isFinite(Y)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(y,-x.y).multiplyScalar(Y),_.copy(y).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(Y),u[W].add(T),u[I].add(T),u[A].add(T),d[W].add(_),d[I].add(_),d[A].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,I=L.length;W<I;++W){const A=L[W],Y=A.start,$=A.count;for(let H=Y,Q=Y+$;H<Q;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const D=new k,U=new k,G=new k,F=new k;function w(W){G.fromBufferAttribute(r,W),F.copy(G);const I=u[W];D.copy(I),D.sub(G.multiplyScalar(G.dot(I))).normalize(),U.crossVectors(F,I);const Y=U.dot(d[W])<0?-1:1;l.setXYZW(W,D.x,D.y,D.z,Y)}for(let W=0,I=L.length;W<I;++W){const A=L[W],Y=A.start,$=A.count;for(let H=Y,Q=Y+$;H<Q;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const r=new k,a=new k,l=new k,u=new k,d=new k,f=new k,g=new k,y=new k;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),_=e.getX(v+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,_),g.subVectors(l,a),y.subVectors(r,a),g.cross(y),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),u.add(g),d.add(g),f.add(g),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(T,d.x,d.y,d.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)r.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),g.subVectors(l,a),y.subVectors(r,a),g.cross(y),n.setXYZ(v+0,g.x,g.y,g.z),n.setXYZ(v+1,g.x,g.y,g.z),n.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(u,d){const f=u.array,g=u.itemSize,y=u.normalized,v=new f.constructor(d.length*g);let x=0,E=0;for(let T=0,_=d.length;T<_;T++){u.isInterleavedBufferAttribute?x=d[T]*u.data.stride+u.offset:x=d[T]*g;for(let m=0;m<g;m++)v[E++]=f[x++]}return new On(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,r=this.attributes;for(const u in r){const d=r[u],f=e(d,n);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let g=0,y=f.length;g<y;g++){const v=f[g],x=e(v,n);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let y=0,v=f.length;y<v;y++){const x=f[y];g.push(x.toJSON(e.data))}g.length>0&&(r[d]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const g=r[f];this.setAttribute(f,g.clone(t))}const a=e.morphAttributes;for(const f in a){const g=[],y=a[f];for(let v=0,x=y.length;v<x;v++)g.push(y[v].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,g=l.length;f<g;f++){const y=l[f];this.addGroup(y.start,y.count,y.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new Tt,xi=new Fs,rs=new Os,pl=new k,ji=new k,qi=new k,Zi=new k,yo=new k,ss=new k,os=new Ie,as=new Ie,ls=new Ie,ml=new k,gl=new k,vl=new k,cs=new k,us=new k;class Ae extends It{constructor(e=new qt,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){ss.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const g=u[d],y=a[d];g!==0&&(yo.fromBufferAttribute(y,e),l?ss.addScaledVector(yo,g):ss.addScaledVector(yo.sub(t),g))}t.add(ss)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(a),xi.copy(e.ray).recast(e.near),!(rs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(rs,pl)===null||xi.origin.distanceToSquared(pl)>(e.far-e.near)**2))&&(fl.copy(a).invert(),xi.copy(e.ray).applyMatrix4(fl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,g=a.attributes.uv1,y=a.attributes.normal,v=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,T=v.length;E<T;E++){const _=v[E],m=l[_.materialIndex],L=Math.max(_.start,x.start),D=Math.min(u.count,Math.min(_.start+_.count,x.start+x.count));for(let U=L,G=D;U<G;U+=3){const F=u.getX(U),w=u.getX(U+1),W=u.getX(U+2);r=hs(this,m,e,n,f,g,y,F,w,W),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const E=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let _=E,m=T;_<m;_+=3){const L=u.getX(_),D=u.getX(_+1),U=u.getX(_+2);r=hs(this,l,e,n,f,g,y,L,D,U),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let E=0,T=v.length;E<T;E++){const _=v[E],m=l[_.materialIndex],L=Math.max(_.start,x.start),D=Math.min(d.count,Math.min(_.start+_.count,x.start+x.count));for(let U=L,G=D;U<G;U+=3){const F=U,w=U+1,W=U+2;r=hs(this,m,e,n,f,g,y,F,w,W),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let _=E,m=T;_<m;_+=3){const L=_,D=_+1,U=_+2;r=hs(this,l,e,n,f,g,y,L,D,U),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Rd(i,e,t,n,r,a,l,u){let d;if(e.side===rn?d=n.intersectTriangle(l,a,r,!0,u):d=n.intersectTriangle(r,a,l,e.side===hi,u),d===null)return null;us.copy(u),us.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(us);return f<t.near||f>t.far?null:{distance:f,point:us.clone(),object:i}}function hs(i,e,t,n,r,a,l,u,d,f){i.getVertexPosition(u,ji),i.getVertexPosition(d,qi),i.getVertexPosition(f,Zi);const g=Rd(i,e,t,n,ji,qi,Zi,cs);if(g){r&&(os.fromBufferAttribute(r,u),as.fromBufferAttribute(r,d),ls.fromBufferAttribute(r,f),g.uv=Un.getInterpolation(cs,ji,qi,Zi,os,as,ls,new Ie)),a&&(os.fromBufferAttribute(a,u),as.fromBufferAttribute(a,d),ls.fromBufferAttribute(a,f),g.uv1=Un.getInterpolation(cs,ji,qi,Zi,os,as,ls,new Ie)),l&&(ml.fromBufferAttribute(l,u),gl.fromBufferAttribute(l,d),vl.fromBufferAttribute(l,f),g.normal=Un.getInterpolation(cs,ji,qi,Zi,ml,gl,vl,new k),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const y={a:u,b:d,c:f,normal:new k,materialIndex:0};Un.getNormal(ji,qi,Zi,y.normal),g.face=y}return g}class Dt extends qt{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const u=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const d=[],f=[],g=[],y=[];let v=0,x=0;E("z","y","x",-1,-1,n,t,e,l,a,0),E("z","y","x",1,-1,n,t,-e,l,a,1),E("x","z","y",1,1,e,n,t,r,l,2),E("x","z","y",1,-1,e,n,-t,r,l,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(y,2));function E(T,_,m,L,D,U,G,F,w,W,I){const A=U/w,Y=G/W,$=U/2,H=G/2,Q=F/2,te=w+1,q=W+1;let oe=0,ne=0;const le=new k;for(let he=0;he<q;he++){const Pe=he*Y-H;for(let Xe=0;Xe<te;Xe++){const ht=Xe*A-$;le[T]=ht*L,le[_]=Pe*D,le[m]=Q,f.push(le.x,le.y,le.z),le[T]=0,le[_]=0,le[m]=F>0?1:-1,g.push(le.x,le.y,le.z),y.push(Xe/w),y.push(1-he/W),oe+=1}}for(let he=0;he<W;he++)for(let Pe=0;Pe<w;Pe++){const Xe=v+Pe+te*he,ht=v+Pe+te*(he+1),ae=v+(Pe+1)+te*(he+1),_e=v+(Pe+1)+te*he;d.push(Xe,ht,_e),d.push(ht,ae,_e),ne+=6}u.addGroup(x,ne,I),x+=ne,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Cd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const zs={clone:lr,merge:en};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new k,_l=new Ie,xl=new Ie;class gn extends Oc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,_l,xl),t.subVectors(xl,_l)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/d,t-=l.offsetY*n/f,r*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,$i=1;class Ld extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Ki,$i,e,t);r.layers=this.layers,this.add(r);const a=new gn(Ki,$i,e,t);a.layers=this.layers,this.add(a);const l=new gn(Ki,$i,e,t);l.layers=this.layers,this.add(l);const u=new gn(Ki,$i,e,t);u.layers=this.layers,this.add(u);const d=new gn(Ki,$i,e,t);d.layers=this.layers,this.add(d);const f=new gn(Ki,$i,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,u,d]=t;for(const f of t)this.remove(f);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,d,f,g]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(y,v,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Fc extends sn{constructor(e,t,n,r,a,l,u,d,f,g){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,r,a,l,u,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dt(5,5,5),a=new jt({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:wn});a.uniforms.tEquirect.value=t;const l=new Ae(r,a),u=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Tn),new Ld(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const Mo=new k,Ud=new k,Nd=new at;class Yn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Mo.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nd.getNormalMatrix(e),r=this.coplanarPoint(Mo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Os,ds=new k;class qo{constructor(e=new Yn,t=new Yn,n=new Yn,r=new Yn,a=new Yn,l=new Yn){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,r=e.elements,a=r[0],l=r[1],u=r[2],d=r[3],f=r[4],g=r[5],y=r[6],v=r[7],x=r[8],E=r[9],T=r[10],_=r[11],m=r[12],L=r[13],D=r[14],U=r[15];if(n[0].setComponents(d-a,v-f,_-x,U-m).normalize(),n[1].setComponents(d+a,v+f,_+x,U+m).normalize(),n[2].setComponents(d+l,v+g,_+E,U+L).normalize(),n[3].setComponents(d-l,v-g,_-E,U-L).normalize(),n[4].setComponents(d-u,v-y,_-T,U-D).normalize(),t===jn)n[5].setComponents(d+u,v+y,_+T,U+D).normalize();else if(t===Cs)n[5].setComponents(u,y,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bc(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Od(i){const e=new WeakMap;function t(u,d){const f=u.array,g=u.usage,y=f.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,f,g),u.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:y}}function n(u,d,f){const g=d.array,y=d._updateRange,v=d.updateRanges;if(i.bindBuffer(f,u),y.count===-1&&v.length===0&&i.bufferSubData(f,0,g),v.length!==0){for(let x=0,E=v.length;x<E;x++){const T=v[x];i.bufferSubData(f,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}y.count!==-1&&(i.bufferSubData(f,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),d.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:r,remove:a,update:l}}class Fr extends qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,u=Math.floor(n),d=Math.floor(r),f=u+1,g=d+1,y=e/u,v=t/d,x=[],E=[],T=[],_=[];for(let m=0;m<g;m++){const L=m*v-l;for(let D=0;D<f;D++){const U=D*y-a;E.push(U,-L,0),T.push(0,0,1),_.push(D/u),_.push(1-m/d)}}for(let m=0;m<d;m++)for(let L=0;L<u;L++){const D=L+f*m,U=L+f*(m+1),G=L+1+f*(m+1),F=L+1+f*m;x.push(D,U,F),x.push(U,G,F)}this.setIndex(x),this.setAttribute("position",new Et(E,3)),this.setAttribute("normal",new Et(T,3)),this.setAttribute("uv",new Et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Fd,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:Yd,begin_vertex:jd,beginnormal_vertex:qd,bsdfs:Zd,iridescence_fragment:Kd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:rf,color_pars_vertex:sf,color_vertex:of,common:af,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:uf,displacementmap_vertex:hf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:vf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:Sf,fog_fragment:Ef,fog_pars_fragment:bf,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:wf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Rf,lights_pars_begin:Cf,lights_toon_fragment:Df,lights_toon_pars_fragment:Lf,lights_phong_fragment:If,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Of,lights_fragment_begin:Ff,lights_fragment_maps:Bf,lights_fragment_end:zf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Vf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:Yf,map_particle_pars_fragment:jf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Kf,morphcolor_vertex:$f,morphnormal_vertex:Qf,morphtarget_pars_vertex:Jf,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,opaque_fragment:hp,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:Ep,skinning_pars_vertex:bp,skinning_vertex:Tp,skinnormal_vertex:wp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Dp,transmission_pars_fragment:Lp,uv_pars_fragment:Ip,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Op,background_vert:Fp,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:kp,cube_vert:Hp,cube_frag:Gp,depth_vert:Vp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:Yp,equirect_vert:jp,equirect_frag:qp,linedashed_vert:Zp,linedashed_frag:Kp,meshbasic_vert:$p,meshbasic_frag:Qp,meshlambert_vert:Jp,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:rm,meshphong_vert:sm,meshphong_frag:om,meshphysical_vert:am,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:um,points_vert:hm,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},Te={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},In={basic:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:en([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:en([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:en([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:en([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:en([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:en([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:en([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:en([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:en([Te.common,Te.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:en([Te.lights,Te.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};In.physical={uniforms:en([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const fs={r:0,b:0,g:0},Mi=new An,vm=new Tt;function _m(i,e,t,n,r,a,l){const u=new lt(0);let d=a===!0?0:1,f,g,y=null,v=0,x=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?t:e).get(D)),D}function T(L){let D=!1;const U=E(L);U===null?m(u,d):U&&U.isColor&&(m(U,1),D=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,l):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function _(L,D){const U=E(D);U&&(U.isCubeTexture||U.mapping===Us)?(g===void 0&&(g=new Ae(new Dt(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:lr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,F,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Mi.copy(D.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(Mi)),g.material.toneMapped=xt.getTransfer(U.colorSpace)!==bt,(y!==U||v!==U.version||x!==i.toneMapping)&&(g.material.needsUpdate=!0,y=U,v=U.version,x=i.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(f===void 0&&(f=new Ae(new Fr(2,2),new jt({name:"BackgroundMaterial",uniforms:lr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=U,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=xt.getTransfer(U.colorSpace)!==bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),f.material.uniforms.uvTransform.value.copy(U.matrix),(y!==U||v!==U.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,y=U,v=U.version,x=i.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function m(L,D){L.getRGB(fs,Nc(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,D,l)}return{getClearColor:function(){return u},setClearColor:function(L,D=1){u.set(L),d=D,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,m(u,d)},render:T,addToRenderList:_}}function xm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=v(null);let a=r,l=!1;function u(A,Y,$,H,Q){let te=!1;const q=y(H,$,Y);a!==q&&(a=q,f(a.object)),te=x(A,H,$,Q),te&&E(A,H,$,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(te||l)&&(l=!1,U(A,Y,$,H),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return i.createVertexArray()}function f(A){return i.bindVertexArray(A)}function g(A){return i.deleteVertexArray(A)}function y(A,Y,$){const H=$.wireframe===!0;let Q=n[A.id];Q===void 0&&(Q={},n[A.id]=Q);let te=Q[Y.id];te===void 0&&(te={},Q[Y.id]=te);let q=te[H];return q===void 0&&(q=v(d()),te[H]=q),q}function v(A){const Y=[],$=[],H=[];for(let Q=0;Q<t;Q++)Y[Q]=0,$[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:$,attributeDivisors:H,object:A,attributes:{},index:null}}function x(A,Y,$,H){const Q=a.attributes,te=Y.attributes;let q=0;const oe=$.getAttributes();for(const ne in oe)if(oe[ne].location>=0){const he=Q[ne];let Pe=te[ne];if(Pe===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(Pe=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(Pe=A.instanceColor)),he===void 0||he.attribute!==Pe||Pe&&he.data!==Pe.data)return!0;q++}return a.attributesNum!==q||a.index!==H}function E(A,Y,$,H){const Q={},te=Y.attributes;let q=0;const oe=$.getAttributes();for(const ne in oe)if(oe[ne].location>=0){let he=te[ne];he===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(he=A.instanceColor));const Pe={};Pe.attribute=he,he&&he.data&&(Pe.data=he.data),Q[ne]=Pe,q++}a.attributes=Q,a.attributesNum=q,a.index=H}function T(){const A=a.newAttributes;for(let Y=0,$=A.length;Y<$;Y++)A[Y]=0}function _(A){m(A,0)}function m(A,Y){const $=a.newAttributes,H=a.enabledAttributes,Q=a.attributeDivisors;$[A]=1,H[A]===0&&(i.enableVertexAttribArray(A),H[A]=1),Q[A]!==Y&&(i.vertexAttribDivisor(A,Y),Q[A]=Y)}function L(){const A=a.newAttributes,Y=a.enabledAttributes;for(let $=0,H=Y.length;$<H;$++)Y[$]!==A[$]&&(i.disableVertexAttribArray($),Y[$]=0)}function D(A,Y,$,H,Q,te,q){q===!0?i.vertexAttribIPointer(A,Y,$,Q,te):i.vertexAttribPointer(A,Y,$,H,Q,te)}function U(A,Y,$,H){T();const Q=H.attributes,te=$.getAttributes(),q=Y.defaultAttributeValues;for(const oe in te){const ne=te[oe];if(ne.location>=0){let le=Q[oe];if(le===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const he=le.normalized,Pe=le.itemSize,Xe=e.get(le);if(Xe===void 0)continue;const ht=Xe.buffer,ae=Xe.type,_e=Xe.bytesPerElement,De=ae===i.INT||ae===i.UNSIGNED_INT||le.gpuType===yc;if(le.isInterleavedBufferAttribute){const Se=le.data,it=Se.stride,ge=le.offset;if(Se.isInstancedInterleavedBuffer){for(let Z=0;Z<ne.locationSize;Z++)m(ne.location+Z,Se.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Z=0;Z<ne.locationSize;Z++)_(ne.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Z=0;Z<ne.locationSize;Z++)D(ne.location+Z,Pe/ne.locationSize,ae,he,it*_e,(ge+Pe/ne.locationSize*Z)*_e,De)}else{if(le.isInstancedBufferAttribute){for(let Se=0;Se<ne.locationSize;Se++)m(ne.location+Se,le.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<ne.locationSize;Se++)_(ne.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Se=0;Se<ne.locationSize;Se++)D(ne.location+Se,Pe/ne.locationSize,ae,he,Pe*_e,Pe/ne.locationSize*Se*_e,De)}}else if(q!==void 0){const he=q[oe];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(ne.location,he);break;case 3:i.vertexAttrib3fv(ne.location,he);break;case 4:i.vertexAttrib4fv(ne.location,he);break;default:i.vertexAttrib1fv(ne.location,he)}}}}L()}function G(){W();for(const A in n){const Y=n[A];for(const $ in Y){const H=Y[$];for(const Q in H)g(H[Q].object),delete H[Q];delete Y[$]}delete n[A]}}function F(A){if(n[A.id]===void 0)return;const Y=n[A.id];for(const $ in Y){const H=Y[$];for(const Q in H)g(H[Q].object),delete H[Q];delete Y[$]}delete n[A.id]}function w(A){for(const Y in n){const $=n[Y];if($[A.id]===void 0)continue;const H=$[A.id];for(const Q in H)g(H[Q].object),delete H[Q];delete $[A.id]}}function W(){I(),l=!0,a!==r&&(a=r,f(a.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:W,resetDefaultState:I,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:_,disableUnusedAttributes:L}}function ym(i,e,t){let n;function r(f){n=f}function a(f,g){i.drawArrays(n,f,g),t.update(g,n,1)}function l(f,g,y){y!==0&&(i.drawArraysInstanced(n,f,g,y),t.update(g,n,y))}function u(f,g,y){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<y;x++)this.render(f[x],g[x]);else{v.multiDrawArraysWEBGL(n,f,0,g,0,y);let x=0;for(let E=0;E<y;E++)x+=g[E];t.update(x,n,1)}}function d(f,g,y,v){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<f.length;E++)l(f[E],g[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,g,0,v,0,y);let E=0;for(let T=0;T<y;T++)E+=g[T];for(let T=0;T<v.length;T++)t.update(E,n,v[T])}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Mm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(F){return!(F!==Nn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const w=F===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==di&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==li&&!w)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const y=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),T=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,G=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:y,maxTextures:v,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:m,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:U,maxSamples:G}}function Sm(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Yn,u=new at,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const x=y.length!==0||v||n!==0||r;return r=v,n=y.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(y,v){t=g(y,v,0)},this.setState=function(y,v,x){const E=y.clippingPlanes,T=y.clipIntersection,_=y.clipShadows,m=i.get(y);if(!r||E===null||E.length===0||a&&!_)a?g(null):f();else{const L=a?0:n,D=L*4;let U=m.clippingState||null;d.value=U,U=g(E,v,D,x);for(let G=0;G!==D;++G)U[G]=t[G];m.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(y,v,x,E){const T=y!==null?y.length:0;let _=null;if(T!==0){if(_=d.value,E!==!0||_===null){const m=x+T*4,L=v.matrixWorldInverse;u.getNormalMatrix(L),(_===null||_.length<m)&&(_=new Float32Array(m));for(let D=0,U=x;D!==T;++D,U+=4)l.copy(y[D]).applyMatrix4(L,u),l.normal.toArray(_,U),_[U+3]=l.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function Em(i){let e=new WeakMap;function t(l,u){return u===Fo?l.mapping=sr:u===Bo&&(l.mapping=or),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===Fo||u===Bo)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new Id(d.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Zo extends Oc{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,u=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,yl=[.125,.215,.35,.446,.526,.582],Ai=20,So=new Zo,Ml=new lt;let Eo=null,bo=0,To=0,wo=!1;const bi=(1+Math.sqrt(5))/2,Qi=1/bi,Sl=[new k(-bi,Qi,0),new k(bi,Qi,0),new k(-Qi,0,bi),new k(Qi,0,bi),new k(0,bi,-Qi),new k(0,bi,Qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,bo,To),this._renderer.xr.enabled=wo,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:En,format:Nn,colorSpace:fi,depthBuffer:!1},r=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(a)),this._blurMaterial=Tm(a,e,t)}return r}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,r){const u=new gn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,v=g.toneMapping;g.getClearColor(Ml),g.toneMapping=ui,g.autoClear=!1;const x=new Bs({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),E=new Ae(new Dt,x);let T=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,T=!0):(x.color.copy(Ml),T=!0);for(let m=0;m<6;m++){const L=m%3;L===0?(u.up.set(0,d[m],0),u.lookAt(f[m],0,0)):L===1?(u.up.set(0,0,d[m]),u.lookAt(0,f[m],0)):(u.up.set(0,d[m],0),u.lookAt(0,0,f[m]));const D=this._cubeSize;ps(r,L*D,m>2?D:0,D,D),g.setRenderTarget(r),T&&g.render(E,u),g.render(e,u)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=y,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Ae(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;ps(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Sl[(r-a-1)%Sl.length];this._blur(e,a-1,a,l,u)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Ae(this._lodPlanes[r],f),v=f.uniforms,x=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ai-1),T=a/E,_=isFinite(a)?1+Math.floor(g*T):Ai;_>Ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ai}`);const m=[];let L=0;for(let w=0;w<Ai;++w){const W=w/T,I=Math.exp(-W*W/2);m.push(I),w===0?L+=I:w<_&&(L+=2*I)}for(let w=0;w<m.length;w++)m[w]=m[w]/L;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=m,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-n;const U=this._sizeLods[r],G=3*U*(r>D-er?r-D+er:0),F=4*(this._cubeSize-U);ps(t,G,F,3*U,2*U),d.setRenderTarget(t),d.render(y,So)}}function bm(i){const e=[],t=[],n=[];let r=i;const a=i-er+1+yl.length;for(let l=0;l<a;l++){const u=Math.pow(2,r);t.push(u);let d=1/u;l>i-er?d=yl[l-i+er-1]:l===0&&(d=0),n.push(d);const f=1/(u-2),g=-f,y=1+f,v=[g,g,y,g,y,y,g,g,y,y,g,y],x=6,E=6,T=3,_=2,m=1,L=new Float32Array(T*E*x),D=new Float32Array(_*E*x),U=new Float32Array(m*E*x);for(let F=0;F<x;F++){const w=F%3*2/3-1,W=F>2?0:-1,I=[w,W,0,w+2/3,W,0,w+2/3,W+1,0,w,W,0,w+2/3,W+1,0,w,W+1,0];L.set(I,T*E*F),D.set(v,_*E*F);const A=[F,F,F,F,F,F];U.set(A,m*E*F)}const G=new qt;G.setAttribute("position",new On(L,T)),G.setAttribute("uv",new On(D,_)),G.setAttribute("faceIndex",new On(U,m)),e.push(G),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tm(i,e,t){const n=new Float32Array(Ai),r=new k(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Tl(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function wl(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wm(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===Fo||d===Bo,g=d===sr||d===or;if(f||g){let y=e.get(u);const v=y!==void 0?y.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new El(i)),y=f?t.fromEquirectangular(u,y):t.fromCubemap(u,y),y.texture.pmremVersion=u.pmremVersion,e.set(u,y),y.texture;if(y!==void 0)return y.texture;{const x=u.image;return f&&x&&x.height>0||g&&x&&r(x)?(t===null&&(t=new El(i)),y=f?t.fromEquirectangular(u):t.fromCubemap(u),y.texture.pmremVersion=u.pmremVersion,e.set(u,y),u.addEventListener("dispose",a),y.texture):null}}}return u}function r(u){let d=0;const f=6;for(let g=0;g<f;g++)u[g]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rm(i,e,t,n){const r={},a=new WeakMap;function l(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const T=v.morphAttributes[E];for(let _=0,m=T.length;_<m;_++)e.remove(T[_])}v.removeEventListener("dispose",l),delete r[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(y,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,t.memory.geometries++),v}function d(y){const v=y.attributes;for(const E in v)e.update(v[E],i.ARRAY_BUFFER);const x=y.morphAttributes;for(const E in x){const T=x[E];for(let _=0,m=T.length;_<m;_++)e.update(T[_],i.ARRAY_BUFFER)}}function f(y){const v=[],x=y.index,E=y.attributes.position;let T=0;if(x!==null){const L=x.array;T=x.version;for(let D=0,U=L.length;D<U;D+=3){const G=L[D+0],F=L[D+1],w=L[D+2];v.push(G,F,F,w,w,G)}}else if(E!==void 0){const L=E.array;T=E.version;for(let D=0,U=L.length/3-1;D<U;D+=3){const G=D+0,F=D+1,w=D+2;v.push(G,F,F,w,w,G)}}else return;const _=new(Cc(v)?Uc:Ic)(v,1);_.version=T;const m=a.get(y);m&&e.remove(m),a.set(y,_)}function g(y){const v=a.get(y);if(v){const x=y.index;x!==null&&v.version<x.version&&f(y)}else f(y);return a.get(y)}return{get:u,update:d,getWireframeAttribute:g}}function Cm(i,e,t){let n;function r(v){n=v}let a,l;function u(v){a=v.type,l=v.bytesPerElement}function d(v,x){i.drawElements(n,x,a,v*l),t.update(x,n,1)}function f(v,x,E){E!==0&&(i.drawElementsInstanced(n,x,a,v*l,E),t.update(x,n,E))}function g(v,x,E){if(E===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let _=0;_<E;_++)this.render(v[_]/l,x[_]);else{T.multiDrawElementsWEBGL(n,x,0,a,v,0,E);let _=0;for(let m=0;m<E;m++)_+=x[m];t.update(_,n,1)}}function y(v,x,E,T){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<v.length;m++)f(v[m]/l,x[m],T[m]);else{_.multiDrawElementsInstancedWEBGL(n,x,0,a,v,0,T,0,E);let m=0;for(let L=0;L<E;L++)m+=x[L];for(let L=0;L<T.length;L++)t.update(m,n,T[L])}}this.setMode=r,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function Pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Dm(i,e,t){const n=new WeakMap,r=new kt;function a(l,u,d){const f=l.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let v=n.get(u);if(v===void 0||v.count!==y){let A=function(){W.dispose(),n.delete(u),u.removeEventListener("dispose",A)};var x=A;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let U=0;E===!0&&(U=1),T===!0&&(U=2),_===!0&&(U=3);let G=u.attributes.position.count*U,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const w=new Float32Array(G*F*4*y),W=new Dc(w,G,F,y);W.type=li,W.needsUpdate=!0;const I=U*4;for(let Y=0;Y<y;Y++){const $=m[Y],H=L[Y],Q=D[Y],te=G*F*4*Y;for(let q=0;q<$.count;q++){const oe=q*I;E===!0&&(r.fromBufferAttribute($,q),w[te+oe+0]=r.x,w[te+oe+1]=r.y,w[te+oe+2]=r.z,w[te+oe+3]=0),T===!0&&(r.fromBufferAttribute(H,q),w[te+oe+4]=r.x,w[te+oe+5]=r.y,w[te+oe+6]=r.z,w[te+oe+7]=0),_===!0&&(r.fromBufferAttribute(Q,q),w[te+oe+8]=r.x,w[te+oe+9]=r.y,w[te+oe+10]=r.z,w[te+oe+11]=Q.itemSize===4?r.w:1)}}v={count:y,texture:W,size:new Ie(G,F)},n.set(u,v),u.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let E=0;for(let _=0;_<f.length;_++)E+=f[_];const T=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function Lm(i,e,t,n){let r=new WeakMap;function a(d){const f=n.render.frame,g=d.geometry,y=e.get(d,g);if(r.get(y)!==f&&(e.update(y),r.set(y,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),r.get(d)!==f&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==f&&(v.update(),r.set(v,f))}return y}function l(){r=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}class zc extends sn{constructor(e,t,n,r,a,l,u,d,f,g){if(g=g!==void 0?g:ir,g!==ir&&g!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===ir&&(n=ar),n===void 0&&g===Ir&&(n=Nr),super(null,r,a,l,u,d,g,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:_n,this.minFilter=d!==void 0?d:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kc=new sn,Hc=new zc(1,1);Hc.compareFunction=Rc;const Gc=new Dc,Vc=new _d,Wc=new Fc,Al=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Al[r];if(a===void 0&&(a=new Float32Array(r),Al[r]=a),e!==0){n.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(a,u)}return a}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ks(i,e){let t=Rl[e];t===void 0&&(t=new Int32Array(e),Rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),Ot(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Ot(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),Ot(t,n)}}function km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?Hc:kc;t.setTexture2D(e||a,r)}function Zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vc,r)}function Km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wc,r)}function $m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gc,r)}function Qm(i){switch(i){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Om;case 35674:return Fm;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return Ym;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return $m}}function Jm(i,e){i.uniform1fv(this.addr,e)}function eg(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function tg(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function ng(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function ig(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rg(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sg(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function og(i,e){i.uniform1iv(this.addr,e)}function ag(i,e){i.uniform2iv(this.addr,e)}function lg(i,e){i.uniform3iv(this.addr,e)}function cg(i,e){i.uniform4iv(this.addr,e)}function ug(i,e){i.uniform1uiv(this.addr,e)}function hg(i,e){i.uniform2uiv(this.addr,e)}function dg(i,e){i.uniform3uiv(this.addr,e)}function fg(i,e){i.uniform4uiv(this.addr,e)}function pg(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||kc,a[l])}function mg(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Vc,a[l])}function gg(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Wc,a[l])}function vg(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Gc,a[l])}function _g(i){switch(i){case 5126:return Jm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return hg;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return vg}}class xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}}class yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_g(t.type)}}class Mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function Sg(i,e,t){const n=i.name,r=n.length;for(Ao.lastIndex=0;;){const a=Ao.exec(n),l=Ao.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===r){Ll(t,f===void 0?new xg(u,i,e):new yg(u,i,e));break}else{let y=t.map[u];y===void 0&&(y=new Mg(u),Ll(t,y)),t=y}}}class Ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);Sg(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Il(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Eg=37297;let bg=0;function Tg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}function wg(i){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(i);let n;switch(e===t?n="":e===Rs&&t===As?n="LinearDisplayP3ToLinearSRGB":e===As&&t===Rs&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case Ns:return[n,"LinearTransferOETF"];case Ln:case Xo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tg(i.getShaderSource(e),l)}else return r}function Ag(i,e){const t=wg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rg(i,e){let t;switch(e){case dc:t="Linear";break;case fc:t="Reinhard";break;case pc:t="OptimizedCineon";break;case mc:t="ACESFilmic";break;case gc:t="AgX";break;case vc:t="Neutral";break;case Ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Pg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function Rr(i){return i!==""}function Nl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(Lg,Ug)}const Ig=new Map;function Ug(i,e){let t=ot[e];if(t===void 0){const n=Ig.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(Ng,Og)}function Og(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Bl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case Us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function kg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function Hg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gg(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=Fg(t),f=Bg(t),g=zg(t),y=kg(t),v=Hg(t),x=Cg(t),E=Pg(a),T=r.createProgram();let _,m,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Rr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Rr).join(`
`),m.length>0&&(m+=`
`)):(_=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),m=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?ot.tonemapping_pars_fragment:"",t.toneMapping!==ui?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Ag("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),l=Ho(l),l=Nl(l,t),l=Ol(l,t),u=Ho(u),u=Nl(u,t),u=Ol(u,t),l=Fl(l),u=Fl(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const D=L+_+l,U=L+m+u,G=Il(r,r.VERTEX_SHADER,D),F=Il(r,r.FRAGMENT_SHADER,U);r.attachShader(T,G),r.attachShader(T,F),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function w(Y){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(T).trim(),H=r.getShaderInfoLog(G).trim(),Q=r.getShaderInfoLog(F).trim();let te=!0,q=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,G,F);else{const oe=Ul(r,G,"vertex"),ne=Ul(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+$+`
`+oe+`
`+ne)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(H===""||Q==="")&&(q=!1);q&&(Y.diagnostics={runnable:te,programLog:$,vertexShader:{log:H,prefix:_},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(G),r.deleteShader(F),W=new Ss(r,T),I=Dg(r,T)}let W;this.getUniforms=function(){return W===void 0&&w(this),W};let I;this.getAttributes=function(){return I===void 0&&w(this),I};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,Eg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=F,this}let Vg=0;class Wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xg(e),t.set(e,n)),n}}class Xg{constructor(e){this.id=Vg++,this.code=e,this.usedTimes=0}}function Yg(i,e,t,n,r,a,l){const u=new jo,d=new Wg,f=new Set,g=[],y=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(I){return f.add(I),I===0?"uv":`uv${I}`}function _(I,A,Y,$,H){const Q=$.fog,te=H.geometry,q=I.isMeshStandardMaterial?$.environment:null,oe=(I.isMeshStandardMaterial?t:e).get(I.envMap||q),ne=oe&&oe.mapping===Us?oe.image.height:null,le=E[I.type];I.precision!==null&&(x=r.getMaxPrecision(I.precision),x!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",x,"instead."));const he=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Pe=he!==void 0?he.length:0;let Xe=0;te.morphAttributes.position!==void 0&&(Xe=1),te.morphAttributes.normal!==void 0&&(Xe=2),te.morphAttributes.color!==void 0&&(Xe=3);let ht,ae,_e,De;if(le){const dt=In[le];ht=dt.vertexShader,ae=dt.fragmentShader}else ht=I.vertexShader,ae=I.fragmentShader,d.update(I),_e=d.getVertexShaderID(I),De=d.getFragmentShaderID(I);const Se=i.getRenderTarget(),it=H.isInstancedMesh===!0,ge=H.isBatchedMesh===!0,Z=!!I.map,ft=!!I.matcap,Be=!!oe,mt=!!I.aoMap,ze=!!I.lightMap,Ke=!!I.bumpMap,Ge=!!I.normalMap,ct=!!I.displacementMap,vt=!!I.emissiveMap,B=!!I.metalnessMap,P=!!I.roughnessMap,ie=I.anisotropy>0,ce=I.clearcoat>0,pe=I.dispersion>0,fe=I.iridescence>0,Fe=I.sheen>0,Me=I.transmission>0,be=ie&&!!I.anisotropyMap,We=ce&&!!I.clearcoatMap,ye=ce&&!!I.clearcoatNormalMap,Ue=ce&&!!I.clearcoatRoughnessMap,rt=fe&&!!I.iridescenceMap,ke=fe&&!!I.iridescenceThicknessMap,Re=Fe&&!!I.sheenColorMap,je=Fe&&!!I.sheenRoughnessMap,$e=!!I.specularMap,gt=!!I.specularColorMap,Qe=!!I.specularIntensityMap,S=Me&&!!I.transmissionMap,X=Me&&!!I.thicknessMap,K=!!I.gradientMap,ue=!!I.alphaMap,xe=I.alphaTest>0,qe=!!I.alphaHash,et=!!I.extensions;let Mt=ui;I.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Pt={shaderID:le,shaderType:I.type,shaderName:I.name,vertexShader:ht,fragmentShader:ae,defines:I.defines,customVertexShaderID:_e,customFragmentShaderID:De,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:x,batching:ge,instancing:it,instancingColor:it&&H.instanceColor!==null,instancingMorph:it&&H.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:fi,alphaToCoverage:!!I.alphaToCoverage,map:Z,matcap:ft,envMap:Be,envMapMode:Be&&oe.mapping,envMapCubeUVHeight:ne,aoMap:mt,lightMap:ze,bumpMap:Ke,normalMap:Ge,displacementMap:v&&ct,emissiveMap:vt,normalMapObjectSpace:Ge&&I.normalMapType===kh,normalMapTangentSpace:Ge&&I.normalMapType===Ac,metalnessMap:B,roughnessMap:P,anisotropy:ie,anisotropyMap:be,clearcoat:ce,clearcoatMap:We,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ue,dispersion:pe,iridescence:fe,iridescenceMap:rt,iridescenceThicknessMap:ke,sheen:Fe,sheenColorMap:Re,sheenRoughnessMap:je,specularMap:$e,specularColorMap:gt,specularIntensityMap:Qe,transmission:Me,transmissionMap:S,thicknessMap:X,gradientMap:K,opaque:I.transparent===!1&&I.blending===nr&&I.alphaToCoverage===!1,alphaMap:ue,alphaTest:xe,alphaHash:qe,combine:I.combine,mapUv:Z&&T(I.map.channel),aoMapUv:mt&&T(I.aoMap.channel),lightMapUv:ze&&T(I.lightMap.channel),bumpMapUv:Ke&&T(I.bumpMap.channel),normalMapUv:Ge&&T(I.normalMap.channel),displacementMapUv:ct&&T(I.displacementMap.channel),emissiveMapUv:vt&&T(I.emissiveMap.channel),metalnessMapUv:B&&T(I.metalnessMap.channel),roughnessMapUv:P&&T(I.roughnessMap.channel),anisotropyMapUv:be&&T(I.anisotropyMap.channel),clearcoatMapUv:We&&T(I.clearcoatMap.channel),clearcoatNormalMapUv:ye&&T(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(I.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&T(I.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&T(I.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(I.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(I.sheenRoughnessMap.channel),specularMapUv:$e&&T(I.specularMap.channel),specularColorMapUv:gt&&T(I.specularColorMap.channel),specularIntensityMapUv:Qe&&T(I.specularIntensityMap.channel),transmissionMapUv:S&&T(I.transmissionMap.channel),thicknessMapUv:X&&T(I.thicknessMap.channel),alphaMapUv:ue&&T(I.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ge||ie),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!te.attributes.uv&&(Z||ue),fog:!!Q,useFog:I.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:H.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Z&&I.map.isVideoTexture===!0&&xt.getTransfer(I.map.colorSpace)===bt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===vn,flipSided:I.side===rn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:et&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:et&&I.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Pt.vertexUv1s=f.has(1),Pt.vertexUv2s=f.has(2),Pt.vertexUv3s=f.has(3),f.clear(),Pt}function m(I){const A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(const Y in I.defines)A.push(Y),A.push(I.defines[Y]);return I.isRawShaderMaterial===!1&&(L(A,I),D(A,I),A.push(i.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function L(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function D(I,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),I.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.skinning&&u.enable(4),A.morphTargets&&u.enable(5),A.morphNormals&&u.enable(6),A.morphColors&&u.enable(7),A.premultipliedAlpha&&u.enable(8),A.shadowMapEnabled&&u.enable(9),A.useLegacyLights&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.alphaToCoverage&&u.enable(20),I.push(u.mask)}function U(I){const A=E[I.type];let Y;if(A){const $=In[A];Y=zs.clone($.uniforms)}else Y=I.uniforms;return Y}function G(I,A){let Y;for(let $=0,H=g.length;$<H;$++){const Q=g[$];if(Q.cacheKey===A){Y=Q,++Y.usedTimes;break}}return Y===void 0&&(Y=new Gg(i,A,I,a),g.push(Y)),Y}function F(I){if(--I.usedTimes===0){const A=g.indexOf(I);g[A]=g[g.length-1],g.pop(),I.destroy()}}function w(I){d.remove(I)}function W(){d.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:U,acquireProgram:G,releaseProgram:F,releaseShaderCache:w,programs:g,dispose:W}}function jg(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,u){i.get(a)[l]=u}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(y,v,x,E,T,_){let m=i[e];return m===void 0?(m={id:y.id,object:y,geometry:v,material:x,groupOrder:E,renderOrder:y.renderOrder,z:T,group:_},i[e]=m):(m.id=y.id,m.object=y,m.geometry=v,m.material=x,m.groupOrder=E,m.renderOrder=y.renderOrder,m.z=T,m.group=_),e++,m}function u(y,v,x,E,T,_){const m=l(y,v,x,E,T,_);x.transmission>0?n.push(m):x.transparent===!0?r.push(m):t.push(m)}function d(y,v,x,E,T,_){const m=l(y,v,x,E,T,_);x.transmission>0?n.unshift(m):x.transparent===!0?r.unshift(m):t.unshift(m)}function f(y,v){t.length>1&&t.sort(y||qg),n.length>1&&n.sort(v||zl),r.length>1&&r.sort(v||zl)}function g(){for(let y=e,v=i.length;y<v;y++){const x=i[y];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:d,finish:g,sort:f}}function Zg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new kl,i.set(n,[l])):r>=a.length?(l=new kl,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new lt};break;case"SpotLight":t={position:new k,direction:new k,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function $g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qg=0;function Jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ev(i){const e=new Kg,t=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new k);const r=new k,a=new Tt,l=new Tt;function u(f,g){let y=0,v=0,x=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let E=0,T=0,_=0,m=0,L=0,D=0,U=0,G=0,F=0,w=0,W=0;f.sort(Jg);const I=g===!0?Math.PI:1;for(let Y=0,$=f.length;Y<$;Y++){const H=f[Y],Q=H.color,te=H.intensity,q=H.distance,oe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)y+=Q.r*te*I,v+=Q.g*te*I,x+=Q.b*te*I;else if(H.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(H.sh.coefficients[ne],te);W++}else if(H.isDirectionalLight){const ne=e.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity*I),H.castShadow){const le=H.shadow,he=t.get(H);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,n.directionalShadow[E]=he,n.directionalShadowMap[E]=oe,n.directionalShadowMatrix[E]=H.shadow.matrix,D++}n.directional[E]=ne,E++}else if(H.isSpotLight){const ne=e.get(H);ne.position.setFromMatrixPosition(H.matrixWorld),ne.color.copy(Q).multiplyScalar(te*I),ne.distance=q,ne.coneCos=Math.cos(H.angle),ne.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ne.decay=H.decay,n.spot[_]=ne;const le=H.shadow;if(H.map&&(n.spotLightMap[F]=H.map,F++,le.updateMatrices(H),H.castShadow&&w++),n.spotLightMatrix[_]=le.matrix,H.castShadow){const he=t.get(H);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,n.spotShadow[_]=he,n.spotShadowMap[_]=oe,G++}_++}else if(H.isRectAreaLight){const ne=e.get(H);ne.color.copy(Q).multiplyScalar(te),ne.halfWidth.set(H.width*.5,0,0),ne.halfHeight.set(0,H.height*.5,0),n.rectArea[m]=ne,m++}else if(H.isPointLight){const ne=e.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity*I),ne.distance=H.distance,ne.decay=H.decay,H.castShadow){const le=H.shadow,he=t.get(H);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,he.shadowCameraNear=le.camera.near,he.shadowCameraFar=le.camera.far,n.pointShadow[T]=he,n.pointShadowMap[T]=oe,n.pointShadowMatrix[T]=H.shadow.matrix,U++}n.point[T]=ne,T++}else if(H.isHemisphereLight){const ne=e.get(H);ne.skyColor.copy(H.color).multiplyScalar(te*I),ne.groundColor.copy(H.groundColor).multiplyScalar(te*I),n.hemi[L]=ne,L++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=y,n.ambient[1]=v,n.ambient[2]=x;const A=n.hash;(A.directionalLength!==E||A.pointLength!==T||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==L||A.numDirectionalShadows!==D||A.numPointShadows!==U||A.numSpotShadows!==G||A.numSpotMaps!==F||A.numLightProbes!==W)&&(n.directional.length=E,n.spot.length=_,n.rectArea.length=m,n.point.length=T,n.hemi.length=L,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=G,n.spotShadowMap.length=G,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=G+F-w,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=W,A.directionalLength=E,A.pointLength=T,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=L,A.numDirectionalShadows=D,A.numPointShadows=U,A.numSpotShadows=G,A.numSpotMaps=F,A.numLightProbes=W,n.version=Qg++)}function d(f,g){let y=0,v=0,x=0,E=0,T=0;const _=g.matrixWorldInverse;for(let m=0,L=f.length;m<L;m++){const D=f[m];if(D.isDirectionalLight){const U=n.directional[y];U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(_),y++}else if(D.isSpotLight){const U=n.spot[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(_),x++}else if(D.isRectAreaLight){const U=n.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),l.identity(),a.copy(D.matrixWorld),a.premultiply(_),l.extractRotation(a),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(l),U.halfHeight.applyMatrix4(l),E++}else if(D.isPointLight){const U=n.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),v++}else if(D.isHemisphereLight){const U=n.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(_),T++}}}return{setup:u,setupView:d,state:n}}function Hl(i){const e=new ev(i),t=[],n=[];function r(g){f.camera=g,t.length=0,n.length=0}function a(g){t.push(g)}function l(g){n.push(g)}function u(g){e.setup(t,g)}function d(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l}}function tv(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let u;return l===void 0?(u=new Hl(i),e.set(r,[u])):a>=l.length?(u=new Hl(i),l.push(u)):u=l[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class Xc extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nv extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sv(i,e,t){let n=new qo;const r=new Ie,a=new Ie,l=new kt,u=new Xc({depthPacking:wc}),d=new nv,f={},g=t.maxTextureSize,y={[hi]:rn,[rn]:hi,[vn]:vn},v=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:iv,fragmentShader:rv}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new qt;E.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ae(E,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let m=this.type;this.render=function(F,w,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;const I=i.getRenderTarget(),A=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),$=i.state;$.setBlending(wn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const H=m!==Wn&&this.type===Wn,Q=m===Wn&&this.type!==Wn;for(let te=0,q=F.length;te<q;te++){const oe=F[te],ne=oe.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const le=ne.getFrameExtents();if(r.multiply(le),a.copy(ne.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/le.x),r.x=a.x*le.x,ne.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/le.y),r.y=a.y*le.y,ne.mapSize.y=a.y)),ne.map===null||H===!0||Q===!0){const Pe=this.type!==Wn?{minFilter:_n,magFilter:_n}:{};ne.map!==null&&ne.map.dispose(),ne.map=new tn(r.x,r.y,Pe),ne.map.texture.name=oe.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const he=ne.getViewportCount();for(let Pe=0;Pe<he;Pe++){const Xe=ne.getViewport(Pe);l.set(a.x*Xe.x,a.y*Xe.y,a.x*Xe.z,a.y*Xe.w),$.viewport(l),ne.updateMatrices(oe,Pe),n=ne.getFrustum(),U(w,W,ne.camera,oe,this.type)}ne.isPointLightShadow!==!0&&this.type===Wn&&L(ne,W),ne.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(I,A,Y)};function L(F,w){const W=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new tn(r.x,r.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(w,null,W,v,T,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(w,null,W,x,T,null)}function D(F,w,W,I){let A=null;const Y=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(Y!==void 0)A=Y;else if(A=W.isPointLight===!0?d:u,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=A.uuid,H=w.uuid;let Q=f[$];Q===void 0&&(Q={},f[$]=Q);let te=Q[H];te===void 0&&(te=A.clone(),Q[H]=te,w.addEventListener("dispose",G)),A=te}if(A.visible=w.visible,A.wireframe=w.wireframe,I===Wn?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:y[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const $=i.properties.get(A);$.light=W}return A}function U(F,w,W,I,A){if(F.visible===!1)return;if(F.layers.test(w.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Wn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const H=e.update(F),Q=F.material;if(Array.isArray(Q)){const te=H.groups;for(let q=0,oe=te.length;q<oe;q++){const ne=te[q],le=Q[ne.materialIndex];if(le&&le.visible){const he=D(F,le,I,A);F.onBeforeShadow(i,F,w,W,H,he,ne),i.renderBufferDirect(W,null,H,he,F,ne),F.onAfterShadow(i,F,w,W,H,he,ne)}}}else if(Q.visible){const te=D(F,Q,I,A);F.onBeforeShadow(i,F,w,W,H,te,null),i.renderBufferDirect(W,null,H,te,F,null),F.onAfterShadow(i,F,w,W,H,te,null)}}const $=F.children;for(let H=0,Q=$.length;H<Q;H++)U($[H],w,W,I,A)}function G(F){F.target.removeEventListener("dispose",G);for(const W in f){const I=f[W],A=F.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function ov(i){function e(){let S=!1;const X=new kt;let K=null;const ue=new kt(0,0,0,0);return{setMask:function(xe){K!==xe&&!S&&(i.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){S=xe},setClear:function(xe,qe,et,Mt,Pt){Pt===!0&&(xe*=Mt,qe*=Mt,et*=Mt),X.set(xe,qe,et,Mt),ue.equals(X)===!1&&(i.clearColor(xe,qe,et,Mt),ue.copy(X))},reset:function(){S=!1,K=null,ue.set(-1,0,0,0)}}}function t(){let S=!1,X=null,K=null,ue=null;return{setTest:function(xe){xe?De(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(xe){X!==xe&&!S&&(i.depthMask(xe),X=xe)},setFunc:function(xe){if(K!==xe){switch(xe){case _h:i.depthFunc(i.NEVER);break;case xh:i.depthFunc(i.ALWAYS);break;case yh:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Mh:i.depthFunc(i.EQUAL);break;case Sh:i.depthFunc(i.GEQUAL);break;case Eh:i.depthFunc(i.GREATER);break;case bh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=xe}},setLocked:function(xe){S=xe},setClear:function(xe){ue!==xe&&(i.clearDepth(xe),ue=xe)},reset:function(){S=!1,X=null,K=null,ue=null}}}function n(){let S=!1,X=null,K=null,ue=null,xe=null,qe=null,et=null,Mt=null,Pt=null;return{setTest:function(dt){S||(dt?De(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(dt){X!==dt&&!S&&(i.stencilMask(dt),X=dt)},setFunc:function(dt,Ct,_t){(K!==dt||ue!==Ct||xe!==_t)&&(i.stencilFunc(dt,Ct,_t),K=dt,ue=Ct,xe=_t)},setOp:function(dt,Ct,_t){(qe!==dt||et!==Ct||Mt!==_t)&&(i.stencilOp(dt,Ct,_t),qe=dt,et=Ct,Mt=_t)},setLocked:function(dt){S=dt},setClear:function(dt){Pt!==dt&&(i.clearStencil(dt),Pt=dt)},reset:function(){S=!1,X=null,K=null,ue=null,xe=null,qe=null,et=null,Mt=null,Pt=null}}}const r=new e,a=new t,l=new n,u=new WeakMap,d=new WeakMap;let f={},g={},y=new WeakMap,v=[],x=null,E=!1,T=null,_=null,m=null,L=null,D=null,U=null,G=null,F=new lt(0,0,0),w=0,W=!1,I=null,A=null,Y=null,$=null,H=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,q=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(oe)[1]),te=q>=1):oe.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),te=q>=2);let ne=null,le={};const he=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Xe=new kt().fromArray(he),ht=new kt().fromArray(Pe);function ae(S,X,K,ue){const xe=new Uint8Array(4),qe=i.createTexture();i.bindTexture(S,qe),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<K;et++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(X+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return qe}const _e={};_e[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),De(i.DEPTH_TEST),a.setFunc(Ts),Ke(!1),Ge(Sa),De(i.CULL_FACE),mt(wn);function De(S){f[S]!==!0&&(i.enable(S),f[S]=!0)}function Se(S){f[S]!==!1&&(i.disable(S),f[S]=!1)}function it(S,X){return g[S]!==X?(i.bindFramebuffer(S,X),g[S]=X,S===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=X),S===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=X),!0):!1}function ge(S,X){let K=v,ue=!1;if(S){K=y.get(X),K===void 0&&(K=[],y.set(X,K));const xe=S.textures;if(K.length!==xe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,et=xe.length;qe<et;qe++)K[qe]=i.COLOR_ATTACHMENT0+qe;K.length=xe.length,ue=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ue=!0);ue&&i.drawBuffers(K)}function Z(S){return x!==S?(i.useProgram(S),x=S,!0):!1}const ft={[wi]:i.FUNC_ADD,[th]:i.FUNC_SUBTRACT,[nh]:i.FUNC_REVERSE_SUBTRACT};ft[ih]=i.MIN,ft[rh]=i.MAX;const Be={[sh]:i.ZERO,[oh]:i.ONE,[ah]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[fh]:i.SRC_ALPHA_SATURATE,[hh]:i.DST_COLOR,[ch]:i.DST_ALPHA,[lh]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[dh]:i.ONE_MINUS_DST_COLOR,[uh]:i.ONE_MINUS_DST_ALPHA,[ph]:i.CONSTANT_COLOR,[mh]:i.ONE_MINUS_CONSTANT_COLOR,[gh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(S,X,K,ue,xe,qe,et,Mt,Pt,dt){if(S===wn){E===!0&&(Se(i.BLEND),E=!1);return}if(E===!1&&(De(i.BLEND),E=!0),S!==eh){if(S!==T||dt!==W){if((_!==wi||D!==wi)&&(i.blendEquation(i.FUNC_ADD),_=wi,D=wi),dt)switch(S){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}m=null,L=null,U=null,G=null,F.set(0,0,0),w=0,T=S,W=dt}return}xe=xe||X,qe=qe||K,et=et||ue,(X!==_||xe!==D)&&(i.blendEquationSeparate(ft[X],ft[xe]),_=X,D=xe),(K!==m||ue!==L||qe!==U||et!==G)&&(i.blendFuncSeparate(Be[K],Be[ue],Be[qe],Be[et]),m=K,L=ue,U=qe,G=et),(Mt.equals(F)===!1||Pt!==w)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Pt),F.copy(Mt),w=Pt),T=S,W=!1}function ze(S,X){S.side===vn?Se(i.CULL_FACE):De(i.CULL_FACE);let K=S.side===rn;X&&(K=!K),Ke(K),S.blending===nr&&S.transparent===!1?mt(wn):mt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),r.setMask(S.colorWrite);const ue=S.stencilWrite;l.setTest(ue),ue&&(l.setMask(S.stencilWriteMask),l.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),l.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),vt(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(S){I!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),I=S)}function Ge(S){S!==$u?(De(i.CULL_FACE),S!==A&&(S===Sa?i.cullFace(i.BACK):S===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),A=S}function ct(S){S!==Y&&(te&&i.lineWidth(S),Y=S)}function vt(S,X,K){S?(De(i.POLYGON_OFFSET_FILL),($!==X||H!==K)&&(i.polygonOffset(X,K),$=X,H=K)):Se(i.POLYGON_OFFSET_FILL)}function B(S){S?De(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function P(S){S===void 0&&(S=i.TEXTURE0+Q-1),ne!==S&&(i.activeTexture(S),ne=S)}function ie(S,X,K){K===void 0&&(ne===null?K=i.TEXTURE0+Q-1:K=ne);let ue=le[K];ue===void 0&&(ue={type:void 0,texture:void 0},le[K]=ue),(ue.type!==S||ue.texture!==X)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(S,X||_e[S]),ue.type=S,ue.texture=X)}function ce(){const S=le[ne];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Fe(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ye(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function rt(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Re(S){Xe.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Xe.copy(S))}function je(S){ht.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ht.copy(S))}function $e(S,X){let K=d.get(X);K===void 0&&(K=new WeakMap,d.set(X,K));let ue=K.get(S);ue===void 0&&(ue=i.getUniformBlockIndex(X,S.name),K.set(S,ue))}function gt(S,X){const ue=d.get(X).get(S);u.get(X)!==ue&&(i.uniformBlockBinding(X,ue,S.__bindingPointIndex),u.set(X,ue))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,le={},g={},y=new WeakMap,v=[],x=null,E=!1,T=null,_=null,m=null,L=null,D=null,U=null,G=null,F=new lt(0,0,0),w=0,W=!1,I=null,A=null,Y=null,$=null,H=null,Xe.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:De,disable:Se,bindFramebuffer:it,drawBuffers:ge,useProgram:Z,setBlending:mt,setMaterial:ze,setFlipSided:Ke,setCullFace:Ge,setLineWidth:ct,setPolygonOffset:vt,setScissorTest:B,activeTexture:P,bindTexture:ie,unbindTexture:ce,compressedTexImage2D:pe,compressedTexImage3D:fe,texImage2D:rt,texImage3D:ke,updateUBOMapping:$e,uniformBlockBinding:gt,texStorage2D:ye,texStorage3D:Ue,texSubImage2D:Fe,texSubImage3D:Me,compressedTexSubImage2D:be,compressedTexSubImage3D:We,scissor:Re,viewport:je,reset:Qe}}function av(i,e,t,n,r,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ie,g=new WeakMap;let y;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,P){return x?new OffscreenCanvas(B,P):Ps("canvas")}function T(B,P,ie){let ce=1;const pe=vt(B);if((pe.width>ie||pe.height>ie)&&(ce=ie/Math.max(pe.width,pe.height)),ce<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const fe=Math.floor(ce*pe.width),Fe=Math.floor(ce*pe.height);y===void 0&&(y=E(fe,Fe));const Me=P?E(fe,Fe):y;return Me.width=fe,Me.height=Fe,Me.getContext("2d").drawImage(B,0,0,fe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+fe+"x"+Fe+")."),Me}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),B;return B}function _(B){return B.generateMipmaps&&B.minFilter!==_n&&B.minFilter!==Tn}function m(B){i.generateMipmap(B)}function L(B,P,ie,ce,pe=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let fe=P;if(P===i.RED&&(ie===i.FLOAT&&(fe=i.R32F),ie===i.HALF_FLOAT&&(fe=i.R16F),ie===i.UNSIGNED_BYTE&&(fe=i.R8)),P===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(fe=i.R8UI),ie===i.UNSIGNED_SHORT&&(fe=i.R16UI),ie===i.UNSIGNED_INT&&(fe=i.R32UI),ie===i.BYTE&&(fe=i.R8I),ie===i.SHORT&&(fe=i.R16I),ie===i.INT&&(fe=i.R32I)),P===i.RG&&(ie===i.FLOAT&&(fe=i.RG32F),ie===i.HALF_FLOAT&&(fe=i.RG16F),ie===i.UNSIGNED_BYTE&&(fe=i.RG8)),P===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(fe=i.RG8UI),ie===i.UNSIGNED_SHORT&&(fe=i.RG16UI),ie===i.UNSIGNED_INT&&(fe=i.RG32UI),ie===i.BYTE&&(fe=i.RG8I),ie===i.SHORT&&(fe=i.RG16I),ie===i.INT&&(fe=i.RG32I)),P===i.RGB&&ie===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),P===i.RGBA){const Fe=pe?ws:xt.getTransfer(ce);ie===i.FLOAT&&(fe=i.RGBA32F),ie===i.HALF_FLOAT&&(fe=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(fe=Fe===bt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(B,P){return _(B)===!0||B.isFramebufferTexture&&B.minFilter!==_n&&B.minFilter!==Tn?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function U(B){const P=B.target;P.removeEventListener("dispose",U),F(P),P.isVideoTexture&&g.delete(P)}function G(B){const P=B.target;P.removeEventListener("dispose",G),W(P)}function F(B){const P=n.get(B);if(P.__webglInit===void 0)return;const ie=B.source,ce=v.get(ie);if(ce){const pe=ce[P.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(B),Object.keys(ce).length===0&&v.delete(ie)}n.remove(B)}function w(B){const P=n.get(B);i.deleteTexture(P.__webglTexture);const ie=B.source,ce=v.get(ie);delete ce[P.__cacheKey],l.memory.textures--}function W(B){const P=n.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(P.__webglFramebuffer[ce]))for(let pe=0;pe<P.__webglFramebuffer[ce].length;pe++)i.deleteFramebuffer(P.__webglFramebuffer[ce][pe]);else i.deleteFramebuffer(P.__webglFramebuffer[ce]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ce])}else{if(Array.isArray(P.__webglFramebuffer))for(let ce=0;ce<P.__webglFramebuffer.length;ce++)i.deleteFramebuffer(P.__webglFramebuffer[ce]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ce=0;ce<P.__webglColorRenderbuffer.length;ce++)P.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ce]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ie=B.textures;for(let ce=0,pe=ie.length;ce<pe;ce++){const fe=n.get(ie[ce]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),n.remove(ie[ce])}n.remove(B)}let I=0;function A(){I=0}function Y(){const B=I;return B>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),I+=1,B}function $(B){const P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function H(B,P){const ie=n.get(B);if(B.isVideoTexture&&Ge(B),B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){const ce=B.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(ie,B,P);return}}t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+P)}function Q(B,P){const ie=n.get(B);if(B.version>0&&ie.__version!==B.version){Xe(ie,B,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+P)}function te(B,P){const ie=n.get(B);if(B.version>0&&ie.__version!==B.version){Xe(ie,B,P);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+P)}function q(B,P){const ie=n.get(B);if(B.version>0&&ie.__version!==B.version){ht(ie,B,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+P)}const oe={[zo]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},ne={[_n]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},le={[Hh]:i.NEVER,[jh]:i.ALWAYS,[Gh]:i.LESS,[Rc]:i.LEQUAL,[Vh]:i.EQUAL,[Yh]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function he(B,P){if(P.type===li&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Tn||P.magFilter===$s||P.magFilter===jr||P.magFilter===Pi||P.minFilter===Tn||P.minFilter===$s||P.minFilter===jr||P.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,oe[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,oe[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,oe[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,ne[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,ne[P.minFilter]),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,le[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===_n||P.minFilter!==jr&&P.minFilter!==Pi||P.type===li&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Pe(B,P){let ie=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",U));const ce=P.source;let pe=v.get(ce);pe===void 0&&(pe={},v.set(ce,pe));const fe=$(P);if(fe!==B.__cacheKey){pe[fe]===void 0&&(pe[fe]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,ie=!0),pe[fe].usedTimes++;const Fe=pe[B.__cacheKey];Fe!==void 0&&(pe[B.__cacheKey].usedTimes--,Fe.usedTimes===0&&w(P)),B.__cacheKey=fe,B.__webglTexture=pe[fe].texture}return ie}function Xe(B,P,ie){let ce=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ce=i.TEXTURE_3D);const pe=Pe(B,P),fe=P.source;t.bindTexture(ce,B.__webglTexture,i.TEXTURE0+ie);const Fe=n.get(fe);if(fe.version!==Fe.__version||pe===!0){t.activeTexture(i.TEXTURE0+ie);const Me=xt.getPrimaries(xt.workingColorSpace),be=P.colorSpace===oi?null:xt.getPrimaries(P.colorSpace),We=P.colorSpace===oi||Me===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ye=T(P.image,!1,r.maxTextureSize);ye=ct(P,ye);const Ue=a.convert(P.format,P.colorSpace),rt=a.convert(P.type);let ke=L(P.internalFormat,Ue,rt,P.colorSpace,P.isVideoTexture);he(ce,P);let Re;const je=P.mipmaps,$e=P.isVideoTexture!==!0,gt=Fe.__version===void 0||pe===!0,Qe=fe.dataReady,S=D(P,ye);if(P.isDepthTexture)ke=i.DEPTH_COMPONENT16,P.type===li?ke=i.DEPTH_COMPONENT32F:P.type===ar?ke=i.DEPTH_COMPONENT24:P.type===Nr&&(ke=i.DEPTH24_STENCIL8),gt&&($e?t.texStorage2D(i.TEXTURE_2D,1,ke,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,ke,ye.width,ye.height,0,Ue,rt,null));else if(P.isDataTexture)if(je.length>0){$e&&gt&&t.texStorage2D(i.TEXTURE_2D,S,ke,je[0].width,je[0].height);for(let X=0,K=je.length;X<K;X++)Re=je[X],$e?Qe&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Re.width,Re.height,Ue,rt,Re.data):t.texImage2D(i.TEXTURE_2D,X,ke,Re.width,Re.height,0,Ue,rt,Re.data);P.generateMipmaps=!1}else $e?(gt&&t.texStorage2D(i.TEXTURE_2D,S,ke,ye.width,ye.height),Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Ue,rt,ye.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ye.width,ye.height,0,Ue,rt,ye.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){$e&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,S,ke,je[0].width,je[0].height,ye.depth);for(let X=0,K=je.length;X<K;X++)Re=je[X],P.format!==Nn?Ue!==null?$e?Qe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Re.width,Re.height,ye.depth,Ue,Re.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ke,Re.width,Re.height,ye.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Re.width,Re.height,ye.depth,Ue,rt,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ke,Re.width,Re.height,ye.depth,0,Ue,rt,Re.data)}else{$e&&gt&&t.texStorage2D(i.TEXTURE_2D,S,ke,je[0].width,je[0].height);for(let X=0,K=je.length;X<K;X++)Re=je[X],P.format!==Nn?Ue!==null?$e?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Qe&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Re.width,Re.height,Ue,rt,Re.data):t.texImage2D(i.TEXTURE_2D,X,ke,Re.width,Re.height,0,Ue,rt,Re.data)}else if(P.isDataArrayTexture)$e?(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,S,ke,ye.width,ye.height,ye.depth),Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ue,rt,ye.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ye.width,ye.height,ye.depth,0,Ue,rt,ye.data);else if(P.isData3DTexture)$e?(gt&&t.texStorage3D(i.TEXTURE_3D,S,ke,ye.width,ye.height,ye.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ue,rt,ye.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ye.width,ye.height,ye.depth,0,Ue,rt,ye.data);else if(P.isFramebufferTexture){if(gt)if($e)t.texStorage2D(i.TEXTURE_2D,S,ke,ye.width,ye.height);else{let X=ye.width,K=ye.height;for(let ue=0;ue<S;ue++)t.texImage2D(i.TEXTURE_2D,ue,ke,X,K,0,Ue,rt,null),X>>=1,K>>=1}}else if(je.length>0){if($e&&gt){const X=vt(je[0]);t.texStorage2D(i.TEXTURE_2D,S,ke,X.width,X.height)}for(let X=0,K=je.length;X<K;X++)Re=je[X],$e?Qe&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ue,rt,Re):t.texImage2D(i.TEXTURE_2D,X,ke,Ue,rt,Re);P.generateMipmaps=!1}else if($e){if(gt){const X=vt(ye);t.texStorage2D(i.TEXTURE_2D,S,ke,X.width,X.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,rt,ye)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ue,rt,ye);_(P)&&m(ce),Fe.__version=fe.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function ht(B,P,ie){if(P.image.length!==6)return;const ce=Pe(B,P),pe=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+ie);const fe=n.get(pe);if(pe.version!==fe.__version||ce===!0){t.activeTexture(i.TEXTURE0+ie);const Fe=xt.getPrimaries(xt.workingColorSpace),Me=P.colorSpace===oi?null:xt.getPrimaries(P.colorSpace),be=P.colorSpace===oi||Fe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const We=P.isCompressedTexture||P.image[0].isCompressedTexture,ye=P.image[0]&&P.image[0].isDataTexture,Ue=[];for(let K=0;K<6;K++)!We&&!ye?Ue[K]=T(P.image[K],!0,r.maxCubemapSize):Ue[K]=ye?P.image[K].image:P.image[K],Ue[K]=ct(P,Ue[K]);const rt=Ue[0],ke=a.convert(P.format,P.colorSpace),Re=a.convert(P.type),je=L(P.internalFormat,ke,Re,P.colorSpace),$e=P.isVideoTexture!==!0,gt=fe.__version===void 0||ce===!0,Qe=pe.dataReady;let S=D(P,rt);he(i.TEXTURE_CUBE_MAP,P);let X;if(We){$e&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,S,je,rt.width,rt.height);for(let K=0;K<6;K++){X=Ue[K].mipmaps;for(let ue=0;ue<X.length;ue++){const xe=X[ue];P.format!==Nn?ke!==null?$e?Qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,xe.width,xe.height,ke,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,xe.width,xe.height,ke,Re,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,je,xe.width,xe.height,0,ke,Re,xe.data)}}}else{if(X=P.mipmaps,$e&&gt){X.length>0&&S++;const K=vt(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,S,je,K.width,K.height)}for(let K=0;K<6;K++)if(ye){$e?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue[K].width,Ue[K].height,ke,Re,Ue[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,Ue[K].width,Ue[K].height,0,ke,Re,Ue[K].data);for(let ue=0;ue<X.length;ue++){const qe=X[ue].image[K].image;$e?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,qe.width,qe.height,ke,Re,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,je,qe.width,qe.height,0,ke,Re,qe.data)}}else{$e?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ke,Re,Ue[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,ke,Re,Ue[K]);for(let ue=0;ue<X.length;ue++){const xe=X[ue];$e?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,ke,Re,xe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,je,ke,Re,xe.image[K])}}}_(P)&&m(i.TEXTURE_CUBE_MAP),fe.__version=pe.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function ae(B,P,ie,ce,pe,fe){const Fe=a.convert(ie.format,ie.colorSpace),Me=a.convert(ie.type),be=L(ie.internalFormat,Fe,Me,ie.colorSpace);if(!n.get(P).__hasExternalTextures){const ye=Math.max(1,P.width>>fe),Ue=Math.max(1,P.height>>fe);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,fe,be,ye,Ue,P.depth,0,Fe,Me,null):t.texImage2D(pe,fe,be,ye,Ue,0,Fe,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),Ke(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,pe,n.get(ie).__webglTexture,0,ze(P)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,pe,n.get(ie).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(B,P,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer&&!P.stencilBuffer){let ce=i.DEPTH_COMPONENT24;if(ie||Ke(P)){const pe=P.depthTexture;pe&&pe.isDepthTexture&&(pe.type===li?ce=i.DEPTH_COMPONENT32F:pe.type===ar&&(ce=i.DEPTH_COMPONENT24));const fe=ze(P);Ke(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ce,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ce,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,B)}else if(P.depthBuffer&&P.stencilBuffer){const ce=ze(P);ie&&Ke(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,P.width,P.height):Ke(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,B)}else{const ce=P.textures;for(let pe=0;pe<ce.length;pe++){const fe=ce[pe],Fe=a.convert(fe.format,fe.colorSpace),Me=a.convert(fe.type),be=L(fe.internalFormat,Fe,Me,fe.colorSpace),We=ze(P);ie&&Ke(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,be,P.width,P.height):Ke(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,be,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,be,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const ce=n.get(P.depthTexture).__webglTexture,pe=ze(P);if(P.depthTexture.format===ir)Ke(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(P.depthTexture.format===Ir)Ke(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Se(B){const P=n.get(B),ie=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");De(P.__webglFramebuffer,B)}else if(ie){P.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ce]),P.__webglDepthbuffer[ce]=i.createRenderbuffer(),_e(P.__webglDepthbuffer[ce],B,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),_e(P.__webglDepthbuffer,B,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(B,P,ie){const ce=n.get(B);P!==void 0&&ae(ce.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&Se(B)}function ge(B){const P=B.texture,ie=n.get(B),ce=n.get(P);B.addEventListener("dispose",G);const pe=B.textures,fe=B.isWebGLCubeRenderTarget===!0,Fe=pe.length>1;if(Fe||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=P.version,l.memory.textures++),fe){ie.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer[Me]=[];for(let be=0;be<P.mipmaps.length;be++)ie.__webglFramebuffer[Me][be]=i.createFramebuffer()}else ie.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Me=0;Me<P.mipmaps.length;Me++)ie.__webglFramebuffer[Me]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let Me=0,be=pe.length;Me<be;Me++){const We=n.get(pe[Me]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),l.memory.textures++)}if(B.samples>0&&Ke(B)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Me=0;Me<pe.length;Me++){const be=pe[Me];ie.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]);const We=a.convert(be.format,be.colorSpace),ye=a.convert(be.type),Ue=L(be.internalFormat,We,ye,be.colorSpace,B.isXRRenderTarget===!0),rt=ze(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ue,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ie.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(ie.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),he(i.TEXTURE_CUBE_MAP,P);for(let Me=0;Me<6;Me++)if(P.mipmaps&&P.mipmaps.length>0)for(let be=0;be<P.mipmaps.length;be++)ae(ie.__webglFramebuffer[Me][be],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,be);else ae(ie.__webglFramebuffer[Me],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);_(P)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Me=0,be=pe.length;Me<be;Me++){const We=pe[Me],ye=n.get(We);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),he(i.TEXTURE_2D,We),ae(ie.__webglFramebuffer,B,We,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),_(We)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Me=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ce.__webglTexture),he(Me,P),P.mipmaps&&P.mipmaps.length>0)for(let be=0;be<P.mipmaps.length;be++)ae(ie.__webglFramebuffer[be],B,P,i.COLOR_ATTACHMENT0,Me,be);else ae(ie.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,Me,0);_(P)&&m(Me),t.unbindTexture()}B.depthBuffer&&Se(B)}function Z(B){const P=B.textures;for(let ie=0,ce=P.length;ie<ce;ie++){const pe=P[ie];if(_(pe)){const fe=B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(pe).__webglTexture;t.bindTexture(fe,Fe),m(fe),t.unbindTexture()}}}const ft=[],Be=[];function mt(B){if(B.samples>0){if(Ke(B)===!1){const P=B.textures,ie=B.width,ce=B.height;let pe=i.COLOR_BUFFER_BIT;const fe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(B),Me=P.length>1;if(Me)for(let be=0;be<P.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let be=0;be<P.length;be++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[be]);const We=n.get(P[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,ie,ce,0,0,ie,ce,pe,i.NEAREST),d===!0&&(ft.length=0,Be.length=0,ft.push(i.COLOR_ATTACHMENT0+be),B.depthBuffer&&B.resolveDepthBuffer===!1&&(ft.push(fe),Be.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let be=0;be<P.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[be]);const We=n.get(P[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&d){const P=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ze(B){return Math.min(r.maxSamples,B.samples)}function Ke(B){const P=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ge(B){const P=l.render.frame;g.get(B)!==P&&(g.set(B,P),B.update())}function ct(B,P){const ie=B.colorSpace,ce=B.format,pe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ie!==fi&&ie!==oi&&(xt.getTransfer(ie)===bt?(ce!==Nn||pe!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),P}function vt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(f.width=B.naturalWidth||B.width,f.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(f.width=B.displayWidth,f.height=B.displayHeight):(f.width=B.width,f.height=B.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=A,this.setTexture2D=H,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=it,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ke}function lv(i,e){function t(n,r=oi){let a;const l=xt.getTransfer(r);if(n===di)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===xc)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===ar)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Nn)return i.RGBA;if(n===Uh)return i.LUMINANCE;if(n===Nh)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===Oh)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===Qs||n===Js||n===eo||n===to)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===wa||n===Aa||n===Ra)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ta)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Da)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ca||n===Pa)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Da)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Ua||n===Na||n===Oa||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===La)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===Ya||n===ja)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===no)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===qa||n===Za||n===Ka)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===no)return a.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class cv extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ms extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const T of e.hand.values()){const _=t.getJointPose(T,n),m=this._getHandJoint(f,T);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const g=f.joints["index-finger-tip"],y=f.joints["thumb-tip"],v=g.position.distanceTo(y.position),x=.02,E=.005;f.inputState.pinching&&v>x+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return u!==null&&(u.visible=r!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new jt({vertexShader:hv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ae(new Fr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class pv extends Di{constructor(e,t){super();const n=this;let r=null,a=1,l=null,u="local-floor",d=1,f=null,g=null,y=null,v=null,x=null,E=null;const T=new fv,_=t.getContextAttributes();let m=null,L=null;const D=[],U=[],G=new Ie;let F=null;const w=new gn;w.layers.enable(1),w.viewport=new kt;const W=new gn;W.layers.enable(2),W.viewport=new kt;const I=[w,W],A=new cv;A.layers.enable(1),A.layers.enable(2);let Y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let _e=D[ae];return _e===void 0&&(_e=new Ro,D[ae]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ae){let _e=D[ae];return _e===void 0&&(_e=new Ro,D[ae]=_e),_e.getGripSpace()},this.getHand=function(ae){let _e=D[ae];return _e===void 0&&(_e=new Ro,D[ae]=_e),_e.getHandSpace()};function H(ae){const _e=U.indexOf(ae.inputSource);if(_e===-1)return;const De=D[_e];De!==void 0&&(De.update(ae.inputSource,ae.frame,f||l),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",te);for(let ae=0;ae<D.length;ae++){const _e=U[ae];_e!==null&&(U[ae]=null,D[ae].disconnect(_e))}Y=null,$=null,T.reset(),e.setRenderTarget(m),x=null,v=null,y=null,r=null,L=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){u=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ae){f=ae},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new tn(x.framebufferWidth,x.framebufferHeight,{format:Nn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let _e=null,De=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=_.stencil?Ir:ir,De=_.stencil?Nr:ar);const it={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};y=new XRWebGLBinding(r,t),v=y.createProjectionLayer(it),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new tn(v.textureWidth,v.textureHeight,{format:Nn,type:di,depthTexture:new zc(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await r.requestReferenceSpace(u),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(ae){for(let _e=0;_e<ae.removed.length;_e++){const De=ae.removed[_e],Se=U.indexOf(De);Se>=0&&(U[Se]=null,D[Se].disconnect(De))}for(let _e=0;_e<ae.added.length;_e++){const De=ae.added[_e];let Se=U.indexOf(De);if(Se===-1){for(let ge=0;ge<D.length;ge++)if(ge>=U.length){U.push(De),Se=ge;break}else if(U[ge]===null){U[ge]=De,Se=ge;break}if(Se===-1)break}const it=D[Se];it&&it.connect(De)}}const q=new k,oe=new k;function ne(ae,_e,De){q.setFromMatrixPosition(_e.matrixWorld),oe.setFromMatrixPosition(De.matrixWorld);const Se=q.distanceTo(oe),it=_e.projectionMatrix.elements,ge=De.projectionMatrix.elements,Z=it[14]/(it[10]-1),ft=it[14]/(it[10]+1),Be=(it[9]+1)/it[5],mt=(it[9]-1)/it[5],ze=(it[8]-1)/it[0],Ke=(ge[8]+1)/ge[0],Ge=Z*ze,ct=Z*Ke,vt=Se/(-ze+Ke),B=vt*-ze;_e.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(B),ae.translateZ(vt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert();const P=Z+vt,ie=ft+vt,ce=Ge-B,pe=ct+(Se-B),fe=Be*ft/ie*P,Fe=mt*ft/ie*P;ae.projectionMatrix.makePerspective(ce,pe,fe,Fe,P,ie),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}function le(ae,_e){_e===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(_e.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;T.texture!==null&&(ae.near=T.depthNear,ae.far=T.depthFar),A.near=W.near=w.near=ae.near,A.far=W.far=w.far=ae.far,(Y!==A.near||$!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),Y=A.near,$=A.far,w.near=Y,w.far=$,W.near=Y,W.far=$,w.updateProjectionMatrix(),W.updateProjectionMatrix(),ae.updateProjectionMatrix());const _e=ae.parent,De=A.cameras;le(A,_e);for(let Se=0;Se<De.length;Se++)le(De[Se],_e);De.length===2?ne(A,w,W):A.projectionMatrix.copy(w.projectionMatrix),he(ae,A,_e)};function he(ae,_e,De){De===null?ae.matrix.copy(_e.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(_e.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ur*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(ae){d=ae,v!==null&&(v.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return T.texture!==null};let Pe=null;function Xe(ae,_e){if(g=_e.getViewerPose(f||l),E=_e,g!==null){const De=g.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Se=!1;De.length!==A.cameras.length&&(A.cameras.length=0,Se=!0);for(let ge=0;ge<De.length;ge++){const Z=De[ge];let ft=null;if(x!==null)ft=x.getViewport(Z);else{const mt=y.getViewSubImage(v,Z);ft=mt.viewport,ge===0&&(e.setRenderTargetTextures(L,mt.colorTexture,v.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(L))}let Be=I[ge];Be===void 0&&(Be=new gn,Be.layers.enable(ge),Be.viewport=new kt,I[ge]=Be),Be.matrix.fromArray(Z.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Z.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ft.x,ft.y,ft.width,ft.height),ge===0&&(A.matrix.copy(Be.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Se===!0&&A.cameras.push(Be)}const it=r.enabledFeatures;if(it&&it.includes("depth-sensing")){const ge=y.getDepthInformation(De[0]);ge&&ge.isValid&&ge.texture&&T.init(e,ge,r.renderState)}}for(let De=0;De<D.length;De++){const Se=U[De],it=D[De];Se!==null&&it!==void 0&&it.update(Se,_e,f||l)}T.render(e,A),Pe&&Pe(ae,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),E=null}const ht=new Bc;ht.setAnimationLoop(Xe),this.setAnimationLoop=function(ae){Pe=ae},this.dispose=function(){}}}const Si=new An,mv=new Tt;function gv(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Nc(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,L,D,U){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(_,m):m.isMeshToonMaterial?(a(_,m),y(_,m)):m.isMeshPhongMaterial?(a(_,m),g(_,m)):m.isMeshStandardMaterial?(a(_,m),v(_,m),m.isMeshPhysicalMaterial&&x(_,m,U)):m.isMeshMatcapMaterial?(a(_,m),E(_,m)):m.isMeshDepthMaterial?a(_,m):m.isMeshDistanceMaterial?(a(_,m),T(_,m)):m.isMeshNormalMaterial?a(_,m):m.isLineBasicMaterial?(l(_,m),m.isLineDashedMaterial&&u(_,m)):m.isPointsMaterial?d(_,m,L,D):m.isSpriteMaterial?f(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===rn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===rn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const L=e.get(m),D=L.envMap,U=L.envMapRotation;if(D&&(_.envMap.value=D,Si.copy(U),Si.x*=-1,Si.y*=-1,Si.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),_.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Si)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;const G=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*G,t(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function u(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function d(_,m,L,D){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*L,_.scale.value=D*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function f(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function g(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function y(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function v(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function x(_,m,L){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,m){m.matcap&&(_.matcap.value=m.matcap)}function T(_,m){const L=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vv(i,e,t,n){let r={},a={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,D){const U=D.program;n.uniformBlockBinding(L,U)}function f(L,D){let U=r[L.id];U===void 0&&(E(L),U=g(L),r[L.id]=U,L.addEventListener("dispose",_));const G=D.program;n.updateUBOMapping(L,G);const F=e.render.frame;a[L.id]!==F&&(v(L),a[L.id]=F)}function g(L){const D=y();L.__bindingPointIndex=D;const U=i.createBuffer(),G=L.__size,F=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,G,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,U),U}function y(){for(let L=0;L<u;L++)if(l.indexOf(L)===-1)return l.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const D=r[L.id],U=L.uniforms,G=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,w=U.length;F<w;F++){const W=Array.isArray(U[F])?U[F]:[U[F]];for(let I=0,A=W.length;I<A;I++){const Y=W[I];if(x(Y,F,I,G)===!0){const $=Y.__offset,H=Array.isArray(Y.value)?Y.value:[Y.value];let Q=0;for(let te=0;te<H.length;te++){const q=H[te],oe=T(q);typeof q=="number"||typeof q=="boolean"?(Y.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,Y.__data)):q.isMatrix3?(Y.__data[0]=q.elements[0],Y.__data[1]=q.elements[1],Y.__data[2]=q.elements[2],Y.__data[3]=0,Y.__data[4]=q.elements[3],Y.__data[5]=q.elements[4],Y.__data[6]=q.elements[5],Y.__data[7]=0,Y.__data[8]=q.elements[6],Y.__data[9]=q.elements[7],Y.__data[10]=q.elements[8],Y.__data[11]=0):(q.toArray(Y.__data,Q),Q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,D,U,G){const F=L.value,w=D+"_"+U;if(G[w]===void 0)return typeof F=="number"||typeof F=="boolean"?G[w]=F:G[w]=F.clone(),!0;{const W=G[w];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return G[w]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function E(L){const D=L.uniforms;let U=0;const G=16;for(let w=0,W=D.length;w<W;w++){const I=Array.isArray(D[w])?D[w]:[D[w]];for(let A=0,Y=I.length;A<Y;A++){const $=I[A],H=Array.isArray($.value)?$.value:[$.value];for(let Q=0,te=H.length;Q<te;Q++){const q=H[Q],oe=T(q),ne=U%G;ne!==0&&G-ne<oe.boundary&&(U+=G-ne),$.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=oe.storage}}}const F=U%G;return F>0&&(U+=G-F),L.__size=U,L.__cache={},this}function T(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function _(L){const D=L.target;D.removeEventListener("dispose",_);const U=l.indexOf(D.__bindingPointIndex);l.splice(U,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function m(){for(const L in r)i.deleteBuffer(r[L]);l=[],r={},a={}}return{bind:d,update:f,dispose:m}}class _v{constructor(e={}){const{canvas:t=hd(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const x=new Uint32Array(4),E=new Int32Array(4);let T=null,_=null;const m=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const D=this;let U=!1,G=0,F=0,w=null,W=-1,I=null;const A=new kt,Y=new kt;let $=null;const H=new lt(0);let Q=0,te=t.width,q=t.height,oe=1,ne=null,le=null;const he=new kt(0,0,te,q),Pe=new kt(0,0,te,q);let Xe=!1;const ht=new qo;let ae=!1,_e=!1;const De=new Tt,Se=new k,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return w===null?oe:1}let Z=n;function ft(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",K,!1),Z===null){const j="webgl2";if(Z=ft(j,R),Z===null)throw ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,mt,ze,Ke,Ge,ct,vt,B,P,ie,ce,pe,fe,Fe,Me,be,We,ye,Ue,rt,ke,Re,je,$e;function gt(){Be=new Am(Z),Be.init(),Re=new lv(Z,Be),mt=new Mm(Z,Be,e,Re),ze=new ov(Z),Ke=new Pm(Z),Ge=new jg,ct=new av(Z,Be,ze,Ge,mt,Re,Ke),vt=new Em(D),B=new wm(D),P=new Od(Z),je=new xm(Z,P),ie=new Rm(Z,P,Ke,je),ce=new Lm(Z,ie,P,Ke),Ue=new Dm(Z,mt,ct),be=new Sm(Ge),pe=new Yg(D,vt,B,Be,mt,je,be),fe=new gv(D,Ge),Fe=new Zg,Me=new tv(Be),ye=new _m(D,vt,B,ze,ce,v,d),We=new sv(D,ce,mt),$e=new vv(Z,Ke,mt,ze),rt=new ym(Z,Be,Ke),ke=new Cm(Z,Be,Ke),Ke.programs=pe.programs,D.capabilities=mt,D.extensions=Be,D.properties=Ge,D.renderLists=Fe,D.shadowMap=We,D.state=ze,D.info=Ke}gt();const Qe=new pv(D,Z);this.xr=Qe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(R){R!==void 0&&(oe=R,this.setSize(te,q,!1))},this.getSize=function(R){return R.set(te,q)},this.setSize=function(R,j,re=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,q=j,t.width=Math.floor(R*oe),t.height=Math.floor(j*oe),re===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(te*oe,q*oe).floor()},this.setDrawingBufferSize=function(R,j,re){te=R,q=j,oe=re,t.width=Math.floor(R*re),t.height=Math.floor(j*re),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,j,re,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,j,re,J),ze.viewport(A.copy(he).multiplyScalar(oe).round())},this.getScissor=function(R){return R.copy(Pe)},this.setScissor=function(R,j,re,J){R.isVector4?Pe.set(R.x,R.y,R.z,R.w):Pe.set(R,j,re,J),ze.scissor(Y.copy(Pe).multiplyScalar(oe).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(R){ze.setScissorTest(Xe=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(R=!0,j=!0,re=!0){let J=0;if(R){let ee=!1;if(w!==null){const Ee=w.texture.format;ee=Ee===Tc||Ee===bc||Ee===Ec}if(ee){const Ee=w.texture.type,Le=Ee===di||Ee===ar||Ee===xc||Ee===Nr||Ee===Mc||Ee===Sc,Ne=ye.getClearColor(),He=ye.getClearAlpha(),Ze=Ne.r,Je=Ne.g,st=Ne.b;Le?(x[0]=Ze,x[1]=Je,x[2]=st,x[3]=He,Z.clearBufferuiv(Z.COLOR,0,x)):(E[0]=Ze,E[1]=Je,E[2]=st,E[3]=He,Z.clearBufferiv(Z.COLOR,0,E))}else J|=Z.COLOR_BUFFER_BIT}j&&(J|=Z.DEPTH_BUFFER_BIT),re&&(J|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Fe.dispose(),Me.dispose(),Ge.dispose(),vt.dispose(),B.dispose(),ce.dispose(),je.dispose(),$e.dispose(),pe.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",dt),Qe.removeEventListener("sessionend",Ct),_t.stop()};function S(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=Ke.autoReset,j=We.enabled,re=We.autoUpdate,J=We.needsUpdate,ee=We.type;gt(),Ke.autoReset=R,We.enabled=j,We.autoUpdate=re,We.needsUpdate=J,We.type=ee}function K(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const j=R.target;j.removeEventListener("dispose",ue),xe(j)}function xe(R){qe(R),Ge.remove(R)}function qe(R){const j=Ge.get(R).programs;j!==void 0&&(j.forEach(function(re){pe.releaseProgram(re)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,re,J,ee,Ee){j===null&&(j=it);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=Gs(R,j,re,J,ee);ze.setMaterial(J,Le);let He=re.index,Ze=1;if(J.wireframe===!0){if(He=ie.getWireframeAttribute(re),He===void 0)return;Ze=2}const Je=re.drawRange,st=re.attributes.position;let Rt=Je.start*Ze,Ut=(Je.start+Je.count)*Ze;Ee!==null&&(Rt=Math.max(Rt,Ee.start*Ze),Ut=Math.min(Ut,(Ee.start+Ee.count)*Ze)),He!==null?(Rt=Math.max(Rt,0),Ut=Math.min(Ut,He.count)):st!=null&&(Rt=Math.max(Rt,0),Ut=Math.min(Ut,st.count));const Ft=Ut-Rt;if(Ft<0||Ft===1/0)return;je.setup(ee,J,Ne,re,He);let pn,pt=rt;if(He!==null&&(pn=P.get(He),pt=ke,pt.setIndex(pn)),ee.isMesh)J.wireframe===!0?(ze.setLineWidth(J.wireframeLinewidth*ge()),pt.setMode(Z.LINES)):pt.setMode(Z.TRIANGLES);else if(ee.isLine){let Ye=J.linewidth;Ye===void 0&&(Ye=1),ze.setLineWidth(Ye*ge()),ee.isLineSegments?pt.setMode(Z.LINES):ee.isLineLoop?pt.setMode(Z.LINE_LOOP):pt.setMode(Z.LINE_STRIP)}else ee.isPoints?pt.setMode(Z.POINTS):ee.isSprite&&pt.setMode(Z.TRIANGLES);if(ee.isBatchedMesh)ee._multiDrawInstances!==null?pt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances):pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)pt.renderInstances(Rt,Ft,ee.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,pi=Math.min(re.instanceCount,Ye);pt.renderInstances(Rt,Ft,pi)}else pt.render(Rt,Ft)};function et(R,j,re){R.transparent===!0&&R.side===vn&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,dn(R,j,re),R.side=hi,R.needsUpdate=!0,dn(R,j,re),R.side=vn):dn(R,j,re)}this.compile=function(R,j,re=null){re===null&&(re=R),_=Me.get(re),_.init(j),L.push(_),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),R!==re&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights(D._useLegacyLights);const J=new Set;return R.traverse(function(ee){const Ee=ee.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Ne=Ee[Le];et(Ne,re,ee),J.add(Ne)}else et(Ee,re,ee),J.add(Ee)}),L.pop(),_=null,J},this.compileAsync=function(R,j,re=null){const J=this.compile(R,j,re);return new Promise(ee=>{function Ee(){if(J.forEach(function(Le){Ge.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){ee(R);return}setTimeout(Ee,10)}Be.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Mt=null;function Pt(R){Mt&&Mt(R)}function dt(){_t.stop()}function Ct(){_t.start()}const _t=new Bc;_t.setAnimationLoop(Pt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(R){Mt=R,Qe.setAnimationLoop(R),R===null?_t.stop():_t.start()},Qe.addEventListener("sessionstart",dt),Qe.addEventListener("sessionend",Ct),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(j),j=Qe.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,j,w),_=Me.get(R,L.length),_.init(j),L.push(_),De.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ht.setFromProjectionMatrix(De),_e=this.localClippingEnabled,ae=be.init(this.clippingPlanes,_e),T=Fe.get(R,m.length),T.init(),m.push(T),un(R,j,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(ne,le);const re=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1;re&&ye.addToRenderList(T,R),this.info.render.frame++,ae===!0&&be.beginShadows();const J=_.state.shadowsArray;We.render(J,R,j),ae===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=T.opaque,Ee=T.transmissive;if(_.setupLights(D._useLegacyLights),j.isArrayCamera){const Le=j.cameras;if(Ee.length>0)for(let Ne=0,He=Le.length;Ne<He;Ne++){const Ze=Le[Ne];Rn(ee,Ee,R,Ze)}re&&ye.render(R);for(let Ne=0,He=Le.length;Ne<He;Ne++){const Ze=Le[Ne];nn(T,R,Ze,Ze.viewport)}}else Ee.length>0&&Rn(ee,Ee,R,j),re&&ye.render(R),nn(T,R,j);w!==null&&(ct.updateMultisampleRenderTarget(w),ct.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(D,R,j),je.resetDefaultState(),W=-1,I=null,L.pop(),L.length>0?(_=L[L.length-1],ae===!0&&be.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,m.pop(),m.length>0?T=m[m.length-1]:T=null};function un(R,j,re,J){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){J&&Se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);const Le=ce.update(R),Ne=R.material;Ne.visible&&T.push(R,Le,Ne,re,Se.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const Le=ce.update(R),Ne=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Se.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Se.copy(Le.boundingSphere.center)),Se.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(Ne)){const He=Le.groups;for(let Ze=0,Je=He.length;Ze<Je;Ze++){const st=He[Ze],Rt=Ne[st.materialIndex];Rt&&Rt.visible&&T.push(R,Le,Rt,re,Se.z,st)}}else Ne.visible&&T.push(R,Le,Ne,re,Se.z,null)}}const Ee=R.children;for(let Le=0,Ne=Ee.length;Le<Ne;Le++)un(Ee[Le],j,re,J)}function nn(R,j,re,J){const ee=R.opaque,Ee=R.transmissive,Le=R.transparent;_.setupLightsView(re),ae===!0&&be.setGlobalState(D.clippingPlanes,re),J&&ze.viewport(A.copy(J)),ee.length>0&&hn(ee,j,re),Ee.length>0&&hn(Ee,j,re),Le.length>0&&hn(Le,j,re),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Rn(R,j,re,J){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new tn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?En:di,minFilter:Pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ee=_.state.transmissionRenderTarget[J.id],Le=J.viewport||A;Ee.setSize(Le.z,Le.w);const Ne=D.getRenderTarget();D.setRenderTarget(Ee),D.getClearColor(H),Q=D.getClearAlpha(),Q<1&&D.setClearColor(16777215,.5),D.clear();const He=D.toneMapping;D.toneMapping=ui;const Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),ae===!0&&be.setGlobalState(D.clippingPlanes,J),hn(R,re,J),ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let st=0,Rt=j.length;st<Rt;st++){const Ut=j[st],Ft=Ut.object,pn=Ut.geometry,pt=Ut.material,Ye=Ut.group;if(pt.side===vn&&Ft.layers.test(J.layers)){const pi=pt.side;pt.side=rn,pt.needsUpdate=!0,Zt(Ft,re,J,pn,pt,Ye),pt.side=pi,pt.needsUpdate=!0,Je=!0}}Je===!0&&(ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee))}D.setRenderTarget(Ne),D.setClearColor(H,Q),Ze!==void 0&&(J.viewport=Ze),D.toneMapping=He}function hn(R,j,re){const J=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Ee=R.length;ee<Ee;ee++){const Le=R[ee],Ne=Le.object,He=Le.geometry,Ze=J===null?Le.material:J,Je=Le.group;Ne.layers.test(re.layers)&&Zt(Ne,j,re,He,Ze,Je)}}function Zt(R,j,re,J,ee,Ee){R.onBeforeRender(D,j,re,J,ee,Ee),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(D,j,re,J,R,Ee),ee.transparent===!0&&ee.side===vn&&ee.forceSinglePass===!1?(ee.side=rn,ee.needsUpdate=!0,D.renderBufferDirect(re,j,J,ee,R,Ee),ee.side=hi,ee.needsUpdate=!0,D.renderBufferDirect(re,j,J,ee,R,Ee),ee.side=vn):D.renderBufferDirect(re,j,J,ee,R,Ee),R.onAfterRender(D,j,re,J,ee,Ee)}function dn(R,j,re){j.isScene!==!0&&(j=it);const J=Ge.get(R),ee=_.state.lights,Ee=_.state.shadowsArray,Le=ee.state.version,Ne=pe.getParameters(R,ee.state,Ee,j,re),He=pe.getProgramCacheKey(Ne);let Ze=J.programs;J.environment=R.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(R.isMeshStandardMaterial?B:vt).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",ue),Ze=new Map,J.programs=Ze);let Je=Ze.get(He);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===Le)return Br(R,Ne),Je}else Ne.uniforms=pe.getUniforms(R),R.onBuild(re,Ne,D),R.onBeforeCompile(Ne,D),Je=pe.acquireProgram(Ne,He),Ze.set(He,Je),J.uniforms=Ne.uniforms;const st=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=be.uniform),Br(R,Ne),J.needsLights=Cn(R),J.lightsStateVersion=Le,J.needsLights&&(st.ambientLightColor.value=ee.state.ambient,st.lightProbe.value=ee.state.probe,st.directionalLights.value=ee.state.directional,st.directionalLightShadows.value=ee.state.directionalShadow,st.spotLights.value=ee.state.spot,st.spotLightShadows.value=ee.state.spotShadow,st.rectAreaLights.value=ee.state.rectArea,st.ltc_1.value=ee.state.rectAreaLTC1,st.ltc_2.value=ee.state.rectAreaLTC2,st.pointLights.value=ee.state.point,st.pointLightShadows.value=ee.state.pointShadow,st.hemisphereLights.value=ee.state.hemi,st.directionalShadowMap.value=ee.state.directionalShadowMap,st.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,st.spotShadowMap.value=ee.state.spotShadowMap,st.spotLightMatrix.value=ee.state.spotLightMatrix,st.spotLightMap.value=ee.state.spotLightMap,st.pointShadowMap.value=ee.state.pointShadowMap,st.pointShadowMatrix.value=ee.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function fn(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ss.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Br(R,j){const re=Ge.get(R);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function Gs(R,j,re,J,ee){j.isScene!==!0&&(j=it),ct.resetTextureUnits();const Ee=j.fog,Le=J.isMeshStandardMaterial?j.environment:null,Ne=w===null?D.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fi,He=(J.isMeshStandardMaterial?B:vt).get(J.envMap||Le),Ze=J.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),st=!!re.morphAttributes.position,Rt=!!re.morphAttributes.normal,Ut=!!re.morphAttributes.color;let Ft=ui;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ft=D.toneMapping);const pn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pt=pn!==void 0?pn.length:0,Ye=Ge.get(J),pi=_.state.lights;if(ae===!0&&(_e===!0||R!==I)){const Kt=R===I&&J.id===W;be.setState(J,R,Kt)}let yt=!1;J.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==pi.state.version||Ye.outputColorSpace!==Ne||ee.isBatchedMesh&&Ye.batching===!1||!ee.isBatchedMesh&&Ye.batching===!0||ee.isInstancedMesh&&Ye.instancing===!1||!ee.isInstancedMesh&&Ye.instancing===!0||ee.isSkinnedMesh&&Ye.skinning===!1||!ee.isSkinnedMesh&&Ye.skinning===!0||ee.isInstancedMesh&&Ye.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ye.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ye.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ye.instancingMorph===!1&&ee.morphTexture!==null||Ye.envMap!==He||J.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==Je||Ye.morphTargets!==st||Ye.morphNormals!==Rt||Ye.morphColors!==Ut||Ye.toneMapping!==Ft||Ye.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,Ye.__version=J.version);let Fn=Ye.currentProgram;yt===!0&&(Fn=dn(J,j,ee));let Li=!1,mi=!1,fr=!1;const Bt=Fn.getUniforms(),Pn=Ye.uniforms;if(ze.useProgram(Fn.program)&&(Li=!0,mi=!0,fr=!0),J.id!==W&&(W=J.id,mi=!0),Li||I!==R){Bt.setValue(Z,"projectionMatrix",R.projectionMatrix),Bt.setValue(Z,"viewMatrix",R.matrixWorldInverse);const Kt=Bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(Z,Se.setFromMatrixPosition(R.matrixWorld)),mt.logarithmicDepthBuffer&&Bt.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Bt.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,mi=!0,fr=!0)}if(ee.isSkinnedMesh){Bt.setOptional(Z,ee,"bindMatrix"),Bt.setOptional(Z,ee,"bindMatrixInverse");const Kt=ee.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Bt.setValue(Z,"boneTexture",Kt.boneTexture,ct))}ee.isBatchedMesh&&(Bt.setOptional(Z,ee,"batchingTexture"),Bt.setValue(Z,"batchingTexture",ee._matricesTexture,ct));const pr=re.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Ue.update(ee,re,Fn),(mi||Ye.receiveShadow!==ee.receiveShadow)&&(Ye.receiveShadow=ee.receiveShadow,Bt.setValue(Z,"receiveShadow",ee.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Pn.envMap.value=He,Pn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),mi&&(Bt.setValue(Z,"toneMappingExposure",D.toneMappingExposure),Ye.needsLights&&zr(Pn,fr),Ee&&J.fog===!0&&fe.refreshFogUniforms(Pn,Ee),fe.refreshMaterialUniforms(Pn,J,oe,q,_.state.transmissionRenderTarget[R.id]),Ss.upload(Z,fn(Ye),Pn,ct)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ss.upload(Z,fn(Ye),Pn,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Bt.setValue(Z,"center",ee.center),Bt.setValue(Z,"modelViewMatrix",ee.modelViewMatrix),Bt.setValue(Z,"normalMatrix",ee.normalMatrix),Bt.setValue(Z,"modelMatrix",ee.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Kt=J.uniformsGroups;for(let qn=0,Zn=Kt.length;qn<Zn;qn++){const Ii=Kt[qn];$e.update(Ii,Fn),$e.bind(Ii,Fn)}}return Fn}function zr(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Cn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,j,re){Ge.get(R.texture).__webglTexture=j,Ge.get(R.depthTexture).__webglTexture=re;const J=Ge.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=re===void 0,J.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const re=Ge.get(R);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,re=0){w=R,G=j,F=re;let J=!0,ee=null,Ee=!1,Le=!1;if(R){const He=Ge.get(R);He.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(Z.FRAMEBUFFER,null),J=!1):He.__webglFramebuffer===void 0?ct.setupRenderTarget(R):He.__hasExternalTextures&&ct.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Le=!0);const Je=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?ee=Je[j][re]:ee=Je[j],Ee=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?ee=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ee=Je[re]:ee=Je,A.copy(R.viewport),Y.copy(R.scissor),$=R.scissorTest}else A.copy(he).multiplyScalar(oe).floor(),Y.copy(Pe).multiplyScalar(oe).floor(),$=Xe;if(ze.bindFramebuffer(Z.FRAMEBUFFER,ee)&&J&&ze.drawBuffers(R,ee),ze.viewport(A),ze.scissor(Y),ze.setScissorTest($),Ee){const He=Ge.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,He.__webglTexture,re)}else if(Le){const He=Ge.get(R.texture),Ze=j||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,He.__webglTexture,re||0,Ze)}W=-1},this.readRenderTargetPixels=function(R,j,re,J,ee,Ee,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){ze.bindFramebuffer(Z.FRAMEBUFFER,Ne);try{const He=R.texture,Ze=He.format,Je=He.type;if(!mt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-J&&re>=0&&re<=R.height-ee&&Z.readPixels(j,re,J,ee,Re.convert(Ze),Re.convert(Je),Ee)}finally{const He=w!==null?Ge.get(w).__webglFramebuffer:null;ze.bindFramebuffer(Z.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(R,j,re=0){const J=Math.pow(2,-re),ee=Math.floor(j.image.width*J),Ee=Math.floor(j.image.height*J);ct.setTexture2D(j,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,re,0,0,R.x,R.y,ee,Ee),ze.unbindTexture()},this.copyTextureToTexture=function(R,j,re,J=0){const ee=j.image.width,Ee=j.image.height,Le=Re.convert(re.format),Ne=Re.convert(re.type);ct.setTexture2D(re,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,re.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,re.unpackAlignment),j.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,J,R.x,R.y,ee,Ee,Le,Ne,j.image.data):j.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,J,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,Le,j.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,J,R.x,R.y,Le,Ne,j.image),J===0&&re.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(R,j,re,J,ee=0){const Ee=R.max.x-R.min.x,Le=R.max.y-R.min.y,Ne=R.max.z-R.min.z,He=Re.convert(J.format),Ze=Re.convert(J.type);let Je;if(J.isData3DTexture)ct.setTexture3D(J,0),Je=Z.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ct.setTexture2DArray(J,0),Je=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment);const st=Z.getParameter(Z.UNPACK_ROW_LENGTH),Rt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ut=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Ft=Z.getParameter(Z.UNPACK_SKIP_ROWS),pn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),pt=re.isCompressedTexture?re.mipmaps[ee]:re.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,pt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,pt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,R.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,R.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?Z.texSubImage3D(Je,ee,j.x,j.y,j.z,Ee,Le,Ne,He,Ze,pt.data):J.isCompressedArrayTexture?Z.compressedTexSubImage3D(Je,ee,j.x,j.y,j.z,Ee,Le,Ne,He,pt.data):Z.texSubImage3D(Je,ee,j.x,j.y,j.z,Ee,Le,Ne,He,Ze,pt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,st),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Rt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ut),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ft),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,pn),ee===0&&J.generateMipmaps&&Z.generateMipmap(Je),ze.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),ze.unbindTexture()},this.resetState=function(){G=0,F=0,w=null,ze.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xo?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Ns?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xv extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $o extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ds=new k,Ls=new k,Gl=new Tt,Tr=new Fs,gs=new Os,Co=new k,Vl=new k;class Xn extends It{constructor(e=new qt,t=new $o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ds.fromBufferAttribute(t,r-1),Ls.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ds.distanceTo(Ls);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),gs.radius+=a,e.ray.intersectsSphere(gs)===!1)return;Gl.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Gl);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,g=n.index,v=n.attributes.position;if(g!==null){const x=Math.max(0,l.start),E=Math.min(g.count,l.start+l.count);for(let T=x,_=E-1;T<_;T+=f){const m=g.getX(T),L=g.getX(T+1),D=vs(this,e,Tr,d,m,L);D&&t.push(D)}if(this.isLineLoop){const T=g.getX(E-1),_=g.getX(x),m=vs(this,e,Tr,d,T,_);m&&t.push(m)}}else{const x=Math.max(0,l.start),E=Math.min(v.count,l.start+l.count);for(let T=x,_=E-1;T<_;T+=f){const m=vs(this,e,Tr,d,T,T+1);m&&t.push(m)}if(this.isLineLoop){const T=vs(this,e,Tr,d,E-1,x);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function vs(i,e,t,n,r,a){const l=i.geometry.attributes.position;if(Ds.fromBufferAttribute(l,r),Ls.fromBufferAttribute(l,a),t.distanceSqToSegment(Ds,Ls,Co,Vl)>n)return;Co.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Co);if(!(d<e.near||d>e.far))return{distance:d,point:Vl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Wl=new k,Xl=new k;class yv extends Xn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Wl.fromBufferAttribute(t,r),Xl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wt extends qt{constructor(e=1,t=1,n=1,r=32,a=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:d};const f=this;r=Math.floor(r),a=Math.floor(a);const g=[],y=[],v=[],x=[];let E=0;const T=[],_=n/2;let m=0;L(),l===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new Et(y,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(x,2));function L(){const U=new k,G=new k;let F=0;const w=(t-e)/n;for(let W=0;W<=a;W++){const I=[],A=W/a,Y=A*(t-e)+e;for(let $=0;$<=r;$++){const H=$/r,Q=H*d+u,te=Math.sin(Q),q=Math.cos(Q);G.x=Y*te,G.y=-A*n+_,G.z=Y*q,y.push(G.x,G.y,G.z),U.set(te,w,q).normalize(),v.push(U.x,U.y,U.z),x.push(H,1-A),I.push(E++)}T.push(I)}for(let W=0;W<r;W++)for(let I=0;I<a;I++){const A=T[I][W],Y=T[I+1][W],$=T[I+1][W+1],H=T[I][W+1];g.push(A,Y,H),g.push(Y,$,H),F+=6}f.addGroup(m,F,0),m+=F}function D(U){const G=E,F=new Ie,w=new k;let W=0;const I=U===!0?e:t,A=U===!0?1:-1;for(let $=1;$<=r;$++)y.push(0,_*A,0),v.push(0,A,0),x.push(.5,.5),E++;const Y=E;for(let $=0;$<=r;$++){const Q=$/r*d+u,te=Math.cos(Q),q=Math.sin(Q);w.x=I*q,w.y=_*A,w.z=I*te,y.push(w.x,w.y,w.z),v.push(0,A,0),F.x=te*.5+.5,F.y=q*.5*A+.5,x.push(F.x,F.y),E++}for(let $=0;$<r;$++){const H=G+$,Q=Y+$;U===!0?g.push(Q,Q+1,H):g.push(Q+1,Q,H),W+=3}f.addGroup(m,W,U===!0?1:2),m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends qt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],l=[];u(r),f(n),g(),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(a.slice(),3)),this.setAttribute("uv",new Et(l,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function u(L){const D=new k,U=new k,G=new k;for(let F=0;F<t.length;F+=3)x(t[F+0],D),x(t[F+1],U),x(t[F+2],G),d(D,U,G,L)}function d(L,D,U,G){const F=G+1,w=[];for(let W=0;W<=F;W++){w[W]=[];const I=L.clone().lerp(U,W/F),A=D.clone().lerp(U,W/F),Y=F-W;for(let $=0;$<=Y;$++)$===0&&W===F?w[W][$]=I:w[W][$]=I.clone().lerp(A,$/Y)}for(let W=0;W<F;W++)for(let I=0;I<2*(F-W)-1;I++){const A=Math.floor(I/2);I%2===0?(v(w[W][A+1]),v(w[W+1][A]),v(w[W][A])):(v(w[W][A+1]),v(w[W+1][A+1]),v(w[W+1][A]))}}function f(L){const D=new k;for(let U=0;U<a.length;U+=3)D.x=a[U+0],D.y=a[U+1],D.z=a[U+2],D.normalize().multiplyScalar(L),a[U+0]=D.x,a[U+1]=D.y,a[U+2]=D.z}function g(){const L=new k;for(let D=0;D<a.length;D+=3){L.x=a[D+0],L.y=a[D+1],L.z=a[D+2];const U=_(L)/2/Math.PI+.5,G=m(L)/Math.PI+.5;l.push(U,1-G)}E(),y()}function y(){for(let L=0;L<l.length;L+=6){const D=l[L+0],U=l[L+2],G=l[L+4],F=Math.max(D,U,G),w=Math.min(D,U,G);F>.9&&w<.1&&(D<.2&&(l[L+0]+=1),U<.2&&(l[L+2]+=1),G<.2&&(l[L+4]+=1))}}function v(L){a.push(L.x,L.y,L.z)}function x(L,D){const U=L*3;D.x=e[U+0],D.y=e[U+1],D.z=e[U+2]}function E(){const L=new k,D=new k,U=new k,G=new k,F=new Ie,w=new Ie,W=new Ie;for(let I=0,A=0;I<a.length;I+=9,A+=6){L.set(a[I+0],a[I+1],a[I+2]),D.set(a[I+3],a[I+4],a[I+5]),U.set(a[I+6],a[I+7],a[I+8]),F.set(l[A+0],l[A+1]),w.set(l[A+2],l[A+3]),W.set(l[A+4],l[A+5]),G.copy(L).add(D).add(U).divideScalar(3);const Y=_(G);T(F,A+0,L,Y),T(w,A+2,D,Y),T(W,A+4,U,Y)}}function T(L,D,U,G){G<0&&L.x===1&&(l[D]=L.x-1),U.x===0&&U.z===0&&(l[D]=G/2/Math.PI+.5)}function _(L){return Math.atan2(L.z,-L.x)}function m(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.vertices,e.indices,e.radius,e.details)}}class tr extends Qo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tr(e.radius,e.detail)}}class Hs extends qt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let f=0;const g=[],y=new k,v=new k,x=[],E=[],T=[],_=[];for(let m=0;m<=n;m++){const L=[],D=m/n;let U=0;m===0&&l===0?U=.5/t:m===n&&d===Math.PI&&(U=-.5/t);for(let G=0;G<=t;G++){const F=G/t;y.x=-e*Math.cos(r+F*a)*Math.sin(l+D*u),y.y=e*Math.cos(l+D*u),y.z=e*Math.sin(r+F*a)*Math.sin(l+D*u),E.push(y.x,y.y,y.z),v.copy(y).normalize(),T.push(v.x,v.y,v.z),_.push(F+U,1-D),L.push(f++)}g.push(L)}for(let m=0;m<n;m++)for(let L=0;L<t;L++){const D=g[m][L+1],U=g[m][L],G=g[m+1][L],F=g[m+1][L+1];(m!==0||l>0)&&x.push(D,U,F),(m!==n-1||d<Math.PI)&&x.push(U,G,F)}this.setIndex(x),this.setAttribute("position",new Et(E,3)),this.setAttribute("normal",new Et(T,3)),this.setAttribute("uv",new Et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends qt{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const l=[],u=[],d=[],f=[],g=new k,y=new k,v=new k;for(let x=0;x<=n;x++)for(let E=0;E<=r;E++){const T=E/r*a,_=x/n*Math.PI*2;y.x=(e+t*Math.cos(_))*Math.cos(T),y.y=(e+t*Math.cos(_))*Math.sin(T),y.z=t*Math.sin(_),u.push(y.x,y.y,y.z),g.x=e*Math.cos(T),g.y=e*Math.sin(T),v.subVectors(y,g).normalize(),d.push(v.x,v.y,v.z),f.push(E/r),f.push(x/n)}for(let x=1;x<=n;x++)for(let E=1;E<=r;E++){const T=(r+1)*x+E-1,_=(r+1)*(x-1)+E-1,m=(r+1)*(x-1)+E,L=(r+1)*x+E;l.push(T,_,L),l.push(_,m,L)}this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mv extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yl extends ur{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sv extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Po=new Tt,jl=new k,ql=new k;class Ev{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bv extends Ev{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tv extends Sv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new bv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zl(){return(typeof performance>"u"?Date:performance).now()}const Kl=new Tt;class Yc{constructor(e,t,n=0,r=1/0){this.ray=new Fs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,n=[]){return Go(e,this,n,t),n.sort($l),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Go(e[r],this,n,t);return n.sort($l),n}}function $l(i,e){return i.distance-e.distance}function Go(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let a=0,l=r.length;a<l;a++)Go(r[a],e,t,!0)}}class Ql{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Av extends yv{constructor(e=10,t=10,n=4473924,r=8947848){n=new lt(n),r=new lt(r);const a=t/2,l=e/t,u=e/2,d=[],f=[];for(let v=0,x=0,E=-u;v<=t;v++,E+=l){d.push(-u,0,E,u,0,E),d.push(E,0,-u,E,0,u);const T=v===a?n:r;T.toArray(f,x),x+=3,T.toArray(f,x),x+=3,T.toArray(f,x),x+=3,T.toArray(f,x),x+=3}const g=new qt;g.setAttribute("position",new Et(d,3)),g.setAttribute("color",new Et(f,3));const y=new $o({vertexColors:!0,toneMapped:!1});super(g,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);const jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rv=new Zo(-1,1,1,-1,0,1);class Cv extends qt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const Pv=new Cv;class Jo{constructor(e){this._mesh=new Ae(Pv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qc extends dr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zs.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Jl extends dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,u;this.inverse?(l=0,u=1):(l=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Dv extends dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Lv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qc(jc),this.copyPass.material.blending=wn,this.clock=new wv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const u=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Jl!==void 0&&(l instanceof Jl?n=!0:l instanceof Dv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iv extends dr{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new lt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}class ci extends dr{constructor(e,t,n,r){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=r!==void 0?r:[],this.visibleEdgeColor=new lt(1,1,1),this.hiddenEdgeColor=new lt(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256);const a=Math.round(this.resolution.x/this.downSampleRatio),l=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new tn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Xc,this.depthMaterial.side=vn,this.depthMaterial.depthPacking=wc,this.depthMaterial.blending=wn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=vn,this.prepareMaskMaterial.fragmentShader=g(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new tn(this.resolution.x,this.resolution.y,{type:En}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new tn(a,l,{type:En}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new tn(a,l,{type:En}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new tn(Math.round(a/2),Math.round(l/2),{type:En}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new tn(a,l,{type:En}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new tn(Math.round(a/2),Math.round(l/2),{type:En}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const u=4,d=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(u),this.separableBlurMaterial1.uniforms.texSize.value.set(a,l),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(d),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(a/2),Math.round(l/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=d,this.overlayMaterial=this.getOverlayMaterial();const f=jc;this.copyUniforms=zs.clone(f.uniforms),this.materialCopy=new jt({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new lt,this.oldClearAlpha=1,this.fsQuad=new Jo(null),this.tempPulseColor1=new lt,this.tempPulseColor2=new lt,this.textureMatrix=new Tt;function g(y,v){const x=v.isPerspectiveCamera?"perspective":"orthographic";return y.replace(/DEPTH_TO_VIEW_Z/g,x+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,r),this.renderTargetBlurBuffer1.setSize(n,r),this.renderTargetEdgeBuffer1.setSize(n,r),this.separableBlurMaterial1.uniforms.texSize.value.set(n,r),n=Math.round(n/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(n,r),this.renderTargetEdgeBuffer2.setSize(n,r),this.separableBlurMaterial2.uniforms.texSize.value.set(n,r)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(r){r.isMesh&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}for(let r=0;r<this.selectedObjects.length;r++)this.selectedObjects[r].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function r(l){l.isMesh&&n.push(l)}for(let l=0;l<this.selectedObjects.length;l++)this.selectedObjects[l].traverse(r);function a(l){if(l.isMesh||l.isSprite){let u=!1;for(let d=0;d<n.length;d++)if(n[d].id===l.id){u=!0;break}if(u===!1){const d=l.visible;(e===!1||t.get(l)===!0)&&(l.visible=e),t.set(l,d)}}else(l.isPoints||l.isLine)&&(e===!0?l.visible=t.get(l):(t.set(l,l.visible),l.visible=e))}this.renderScene.traverse(a)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,r,a){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,a&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const u=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=u,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const d=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(d),this.tempPulseColor2.multiplyScalar(d)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ci.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ci.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ci.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ci.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new jt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ie(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new jt({uniforms:{maskTexture:{value:null},texSize:{value:new Ie(.5,.5)},visibleEdgeColor:{value:new k(1,1,1)},hiddenEdgeColor:{value:new k(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new jt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new jt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Uo,depthTest:!1,depthWrite:!1,transparent:!0})}}ci.BlurDirectionX=new Ie(1,0);ci.BlurDirectionY=new Ie(0,1);const Uv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Nv extends dr{constructor(){super();const e=Uv;this.uniforms=zs.clone(e.uniforms),this.material=new Mv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Jo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ov={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ie(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};function Fv(i,e,t){let n=null,r=null,a=null;(function(){n=new Lv(i);const d=new Iv(e,t);n.addPass(d),r=new ci(new Ie(window.innerWidth,window.innerHeight),e,t),r.edgeStrength=1,r.edgeGlow=4,r.edgeThickness=1,n.addPass(r),a=new qc(Ov),a.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),n.addPass(a);const f=new Nv;n.addPass(f),addEventListener("objectSelected",l,!1)})();function l(u){if(u.detail.mesh){if(r.selectedObjects&&r.selectedObjects[0]!==u.detail.mesh){let d=u.detail.mesh;r.selectedObjects=[d]}}else r.selectedObjects=[]}return{resize(u,d){n.setSize(u,d),a.uniforms.resolution.value.set(1/u,1/d)},render(){n&&n.render()}}}let cn,ai,bn,Is=[],ea;function Bv(){cn=new gn(70,window.innerWidth/window.innerHeight,.01,100),cn.position.set(0,2,2.1),cn.lookAt(new k(0,0,0))}function zv(){ai=new xv;let i=new Dt(1,1,1),e=new Yl({color:34816}),t=new Ae(i,e);t.position.x=1,ai.add(t),Is.push(t),e=new Yl({color:8912896}),i=new Hs(.71),t=new Ae(i,e),t.position.x=-1,ai.add(t),Is.push(t);const n=new Av(100,100);ai.add(n);const r=new Tv(16777215,3);r.position.set(-1,2,4),ai.add(r)}function kv(){bn=new _v({antialias:!0}),bn.setClearColor(64,1),bn.setSize(window.innerWidth,window.innerHeight),bn.setAnimationLoop(Gv),bn.domElement.id="editor-view",document.body.appendChild(bn.domElement)}function Hv(){document.getElementById("1").style.display="none",Bv(),zv(),kv(),ea=Fv(bn,ai,cn)}function Gv(){bn.render(ai,cn),ea.render()}function Vv(){cn.aspect=window.innerWidth/window.innerHeight,cn.updateProjectionMatrix(),bn.setSize(window.innerWidth,window.innerHeight),ea.resize(window.innerWidth,window.innerHeight)}const Zc={setup:Hv,onWindowResize:Vv},Ei=new Yc,Xt=new k,si=new k,At=new Ht,ec={X:new k(1,0,0),Y:new k(0,1,0),Z:new k(0,0,1)},Do={type:"change"},tc={type:"mouseDown"},nc={type:"mouseUp",mode:null},ic={type:"objectChange"};class Wv extends It{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Kv;this._gizmo=n,this.add(n);const r=new $v;this._plane=r,this.add(r);const a=this;function l(L,D){let U=D;Object.defineProperty(a,L,{get:function(){return U!==void 0?U:D},set:function(G){U!==G&&(U=G,r[L]=G,n[L]=G,a.dispatchEvent({type:L+"-changed",value:G}),a.dispatchEvent(Do))}}),a[L]=D,r[L]=D,n[L]=D}l("camera",e),l("object",void 0),l("enabled",!0),l("axis",null),l("mode","translate"),l("translationSnap",null),l("rotationSnap",null),l("scaleSnap",null),l("space","world"),l("size",1),l("dragging",!1),l("showX",!0),l("showY",!0),l("showZ",!0);const u=new k,d=new k,f=new Ht,g=new Ht,y=new k,v=new Ht,x=new k,E=new k,T=new k,_=0,m=new k;l("worldPosition",u),l("worldPositionStart",d),l("worldQuaternion",f),l("worldQuaternionStart",g),l("cameraPosition",y),l("cameraQuaternion",v),l("pointStart",x),l("pointEnd",E),l("rotationAxis",T),l("rotationAngle",_),l("eye",m),this._offset=new k,this._startNorm=new k,this._endNorm=new k,this._cameraScale=new k,this._parentPosition=new k,this._parentQuaternion=new Ht,this._parentQuaternionInv=new Ht,this._parentScale=new k,this._worldScaleStart=new k,this._worldQuaternionInv=new Ht,this._worldScale=new k,this._positionStart=new k,this._quaternionStart=new Ht,this._scaleStart=new k,this._getPointer=Xv.bind(this),this._onPointerDown=jv.bind(this),this._onPointerHover=Yv.bind(this),this._onPointerMove=qv.bind(this),this._onPointerUp=Zv.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Ei.setFromCamera(e,this.camera);const t=Lo(this._gizmo.picker[this.mode],Ei);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Ei.setFromCamera(e,this.camera);const t=Lo(this._plane,Ei,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,tc.mode=this.mode,this.dispatchEvent(tc)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let a=this.space;if(n==="scale"?a="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(a="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Ei.setFromCamera(e,this.camera);const l=Lo(this._plane,Ei,!0);if(l){if(this.pointEnd.copy(l.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),a==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),a==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(a==="local"&&(r.position.applyQuaternion(At.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),a==="world"&&(r.parent&&r.position.add(Xt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Xt.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let u=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(u*=-1),si.set(u,u,u)}else Xt.copy(this.pointStart),si.copy(this.pointEnd),Xt.applyQuaternion(this._worldQuaternionInv),si.applyQuaternion(this._worldQuaternionInv),si.divide(Xt),t.search("X")===-1&&(si.x=1),t.search("Y")===-1&&(si.y=1),t.search("Z")===-1&&(si.z=1);r.scale.copy(this._scaleStart).multiply(si),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const u=20/this.worldPosition.distanceTo(Xt.setFromMatrixPosition(this.camera.matrixWorld));let d=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xt.copy(this.rotationAxis).cross(this.eye))*u):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(ec[t]),Xt.copy(ec[t]),a==="local"&&Xt.applyQuaternion(this.worldQuaternion),Xt.cross(this.eye),Xt.length()===0?d=!0:this.rotationAngle=this._offset.dot(Xt.normalize())*u),(t==="E"||d)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),a==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(At.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(At.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Do),this.dispatchEvent(ic)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(nc.mode=this.mode,this.dispatchEvent(nc)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Do),this.dispatchEvent(ic),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ei}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Xv(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Yv(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function jv(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function qv(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Zv(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Lo(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const _s=new An,St=new k(0,1,0),rc=new k(0,0,0),sc=new Tt,xs=new Ht,Es=new Ht,Dn=new k,oc=new Tt,Cr=new k(1,0,0),Ti=new k(0,1,0),Pr=new k(0,0,1),ys=new k,wr=new k,Ar=new k;class Kv extends It{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Bs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new $o({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const a=e.clone();a.color.setHex(16711680);const l=e.clone();l.color.setHex(65280);const u=e.clone();u.color.setHex(255);const d=e.clone();d.color.setHex(16711680),d.opacity=.5;const f=e.clone();f.color.setHex(65280),f.opacity=.5;const g=e.clone();g.color.setHex(255),g.opacity=.5;const y=e.clone();y.opacity=.25;const v=e.clone();v.color.setHex(16776960),v.opacity=.25,e.clone().color.setHex(16776960);const E=e.clone();E.color.setHex(7895160);const T=new Wt(0,.04,.1,12);T.translate(0,.05,0);const _=new Dt(.08,.08,.08);_.translate(0,.04,0);const m=new qt;m.setAttribute("position",new Et([0,0,0,1,0,0],3));const L=new Wt(.0075,.0075,.5,3);L.translate(0,.25,0);function D(te,q){const oe=new Ri(te,.0075,3,64,q*Math.PI*2);return oe.rotateY(Math.PI/2),oe.rotateX(Math.PI/2),oe}function U(){const te=new qt;return te.setAttribute("position",new Et([0,0,0,1,1,1],3)),te}const G={X:[[new Ae(T,a),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(T,a),[-.5,0,0],[0,0,Math.PI/2]],[new Ae(L,a),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ae(T,l),[0,.5,0]],[new Ae(T,l),[0,-.5,0],[Math.PI,0,0]],[new Ae(L,l)]],Z:[[new Ae(T,u),[0,0,.5],[Math.PI/2,0,0]],[new Ae(T,u),[0,0,-.5],[-Math.PI/2,0,0]],[new Ae(L,u),null,[Math.PI/2,0,0]]],XYZ:[[new Ae(new tr(.1,0),y.clone()),[0,0,0]]],XY:[[new Ae(new Dt(.15,.15,.01),g.clone()),[.15,.15,0]]],YZ:[[new Ae(new Dt(.15,.15,.01),d.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Dt(.15,.15,.01),f.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},F={X:[[new Ae(new Wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Wt(.2,0,.6,4),n),[0,.3,0]],[new Ae(new Wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new tr(.2,0),n)]],XY:[[new Ae(new Dt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ae(new Dt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Dt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new Ae(new tr(.01,2),r),null,null,null,"helper"]],END:[[new Ae(new tr(.01,2),r),null,null,null,"helper"]],DELTA:[[new Xn(U(),r),null,null,null,"helper"]],X:[[new Xn(m,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(m,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(m,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},W={XYZE:[[new Ae(D(.5,1),E),null,[0,Math.PI/2,0]]],X:[[new Ae(D(.5,.5),a)]],Y:[[new Ae(D(.5,.5),l),null,[0,0,-Math.PI/2]]],Z:[[new Ae(D(.5,.5),u),null,[0,Math.PI/2,0]]],E:[[new Ae(D(.75,1),v),null,[0,Math.PI/2,0]]]},I={AXIS:[[new Xn(m,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},A={XYZE:[[new Ae(new Hs(.25,10,8),n)]],X:[[new Ae(new Ri(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ae(new Ri(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ae(new Ri(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ae(new Ri(.75,.1,2,24),n)]]},Y={X:[[new Ae(_,a),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(L,a),[0,0,0],[0,0,-Math.PI/2]],[new Ae(_,a),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(_,l),[0,.5,0]],[new Ae(L,l)],[new Ae(_,l),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ae(_,u),[0,0,.5],[Math.PI/2,0,0]],[new Ae(L,u),[0,0,0],[Math.PI/2,0,0]],[new Ae(_,u),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ae(new Dt(.15,.15,.01),g),[.15,.15,0]]],YZ:[[new Ae(new Dt(.15,.15,.01),d),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Dt(.15,.15,.01),f),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new Dt(.1,.1,.1),y.clone())]]},$={X:[[new Ae(new Wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Wt(.2,0,.6,4),n),[0,.3,0]],[new Ae(new Wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ae(new Dt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ae(new Dt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Dt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new Dt(.2,.2,.2),n),[0,0,0]]]},H={X:[[new Xn(m,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(m,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(m,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function Q(te){const q=new It;for(const oe in te)for(let ne=te[oe].length;ne--;){const le=te[oe][ne][0].clone(),he=te[oe][ne][1],Pe=te[oe][ne][2],Xe=te[oe][ne][3],ht=te[oe][ne][4];le.name=oe,le.tag=ht,he&&le.position.set(he[0],he[1],he[2]),Pe&&le.rotation.set(Pe[0],Pe[1],Pe[2]),Xe&&le.scale.set(Xe[0],Xe[1],Xe[2]),le.updateMatrix();const ae=le.geometry.clone();ae.applyMatrix4(le.matrix),le.geometry=ae,le.renderOrder=1/0,le.position.set(0,0,0),le.rotation.set(0,0,0),le.scale.set(1,1,1),q.add(le)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=Q(G)),this.add(this.gizmo.rotate=Q(W)),this.add(this.gizmo.scale=Q(Y)),this.add(this.picker.translate=Q(F)),this.add(this.picker.rotate=Q(A)),this.add(this.picker.scale=Q($)),this.add(this.helper.translate=Q(w)),this.add(this.helper.rotate=Q(I)),this.add(this.helper.scale=Q(H)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Es;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let a=0;a<r.length;a++){const l=r[a];l.visible=!0,l.rotation.set(0,0,0),l.position.copy(this.worldPosition);let u;if(this.camera.isOrthographicCamera?u=(this.camera.top-this.camera.bottom)/this.camera.zoom:u=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),l.scale.set(1,1,1).multiplyScalar(u*this.size/4),l.tag==="helper"){l.visible=!1,l.name==="AXIS"?(l.visible=!!this.axis,this.axis==="X"&&(At.setFromEuler(_s.set(0,0,0)),l.quaternion.copy(n).multiply(At),Math.abs(St.copy(Cr).applyQuaternion(n).dot(this.eye))>.9&&(l.visible=!1)),this.axis==="Y"&&(At.setFromEuler(_s.set(0,0,Math.PI/2)),l.quaternion.copy(n).multiply(At),Math.abs(St.copy(Ti).applyQuaternion(n).dot(this.eye))>.9&&(l.visible=!1)),this.axis==="Z"&&(At.setFromEuler(_s.set(0,Math.PI/2,0)),l.quaternion.copy(n).multiply(At),Math.abs(St.copy(Pr).applyQuaternion(n).dot(this.eye))>.9&&(l.visible=!1)),this.axis==="XYZE"&&(At.setFromEuler(_s.set(0,Math.PI/2,0)),St.copy(this.rotationAxis),l.quaternion.setFromRotationMatrix(sc.lookAt(rc,St,Ti)),l.quaternion.multiply(At),l.visible=this.dragging),this.axis==="E"&&(l.visible=!1)):l.name==="START"?(l.position.copy(this.worldPositionStart),l.visible=this.dragging):l.name==="END"?(l.position.copy(this.worldPosition),l.visible=this.dragging):l.name==="DELTA"?(l.position.copy(this.worldPositionStart),l.quaternion.copy(this.worldQuaternionStart),Xt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xt.applyQuaternion(this.worldQuaternionStart.clone().invert()),l.scale.copy(Xt),l.visible=this.dragging):(l.quaternion.copy(n),this.dragging?l.position.copy(this.worldPositionStart):l.position.copy(this.worldPosition),this.axis&&(l.visible=this.axis.search(l.name)!==-1));continue}l.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(l.name==="X"&&Math.abs(St.copy(Cr).applyQuaternion(n).dot(this.eye))>.99&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="Y"&&Math.abs(St.copy(Ti).applyQuaternion(n).dot(this.eye))>.99&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="Z"&&Math.abs(St.copy(Pr).applyQuaternion(n).dot(this.eye))>.99&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="XY"&&Math.abs(St.copy(Pr).applyQuaternion(n).dot(this.eye))<.2&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="YZ"&&Math.abs(St.copy(Cr).applyQuaternion(n).dot(this.eye))<.2&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="XZ"&&Math.abs(St.copy(Ti).applyQuaternion(n).dot(this.eye))<.2&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1)):this.mode==="rotate"&&(xs.copy(n),St.copy(this.eye).applyQuaternion(At.copy(n).invert()),l.name.search("E")!==-1&&l.quaternion.setFromRotationMatrix(sc.lookAt(this.eye,rc,Ti)),l.name==="X"&&(At.setFromAxisAngle(Cr,Math.atan2(-St.y,St.z)),At.multiplyQuaternions(xs,At),l.quaternion.copy(At)),l.name==="Y"&&(At.setFromAxisAngle(Ti,Math.atan2(St.x,St.z)),At.multiplyQuaternions(xs,At),l.quaternion.copy(At)),l.name==="Z"&&(At.setFromAxisAngle(Pr,Math.atan2(St.y,St.x)),At.multiplyQuaternions(xs,At),l.quaternion.copy(At))),l.visible=l.visible&&(l.name.indexOf("X")===-1||this.showX),l.visible=l.visible&&(l.name.indexOf("Y")===-1||this.showY),l.visible=l.visible&&(l.name.indexOf("Z")===-1||this.showZ),l.visible=l.visible&&(l.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),l.material._color=l.material._color||l.material.color.clone(),l.material._opacity=l.material._opacity||l.material.opacity,l.material.color.copy(l.material._color),l.material.opacity=l.material._opacity,this.enabled&&this.axis&&(l.name===this.axis||this.axis.split("").some(function(d){return l.name===d}))&&(l.material.color.setHex(16776960),l.material.opacity=1)}super.updateMatrixWorld(e)}}class $v extends Ae{constructor(){super(new Fr(1e5,1e5,2,2),new Bs({visible:!1,wireframe:!0,side:vn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ys.copy(Cr).applyQuaternion(t==="local"?this.worldQuaternion:Es),wr.copy(Ti).applyQuaternion(t==="local"?this.worldQuaternion:Es),Ar.copy(Pr).applyQuaternion(t==="local"?this.worldQuaternion:Es),St.copy(wr),this.mode){case"translate":case"scale":switch(this.axis){case"X":St.copy(this.eye).cross(ys),Dn.copy(ys).cross(St);break;case"Y":St.copy(this.eye).cross(wr),Dn.copy(wr).cross(St);break;case"Z":St.copy(this.eye).cross(Ar),Dn.copy(Ar).cross(St);break;case"XY":Dn.copy(Ar);break;case"YZ":Dn.copy(ys);break;case"XZ":St.copy(Ar),Dn.copy(wr);break;case"XYZ":case"E":Dn.set(0,0,0);break}break;case"rotate":default:Dn.set(0,0,0)}Dn.length()===0?this.quaternion.copy(this.cameraQuaternion):(oc.lookAt(Xt.set(0,0,0),Dn,St),this.quaternion.setFromRotationMatrix(oc)),super.updateMatrixWorld(e)}}const ac={type:"change"},Io={type:"start"},lc={type:"end"},Ms=new Fs,cc=new Yn,Qv=Math.cos(70*ud.DEG2RAD);class Jv extends Di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",We),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",We),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ac),n.update(),a=r.NONE},this.update=function(){const S=new k,X=new Ht().setFromUnitVectors(e.up,new k(0,1,0)),K=X.clone().invert(),ue=new k,xe=new Ht,qe=new k,et=2*Math.PI;return function(Pt=null){const dt=n.object.position;S.copy(dt).sub(n.target),S.applyQuaternion(X),u.setFromVector3(S),n.autoRotate&&a===r.NONE&&$(A(Pt)),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let Ct=n.minAzimuthAngle,_t=n.maxAzimuthAngle;isFinite(Ct)&&isFinite(_t)&&(Ct<-Math.PI?Ct+=et:Ct>Math.PI&&(Ct-=et),_t<-Math.PI?_t+=et:_t>Math.PI&&(_t-=et),Ct<=_t?u.theta=Math.max(Ct,Math.min(_t,u.theta)):u.theta=u.theta>(Ct+_t)/2?Math.max(Ct,u.theta):Math.min(_t,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let un=!1;if(n.zoomToCursor&&F||n.object.isOrthographicCamera)u.radius=he(u.radius);else{const nn=u.radius;u.radius=he(u.radius*f),un=nn!=u.radius}if(S.setFromSpherical(u),S.applyQuaternion(K),dt.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),g.set(0,0,0)),n.zoomToCursor&&F){let nn=null;if(n.object.isPerspectiveCamera){const Rn=S.length();nn=he(Rn*f);const hn=Rn-nn;n.object.position.addScaledVector(U,hn),n.object.updateMatrixWorld(),un=!!hn}else if(n.object.isOrthographicCamera){const Rn=new k(G.x,G.y,0);Rn.unproject(n.object);const hn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),un=hn!==n.object.zoom;const Zt=new k(G.x,G.y,0);Zt.unproject(n.object),n.object.position.sub(Zt).add(Rn),n.object.updateMatrixWorld(),nn=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nn).add(n.object.position):(Ms.origin.copy(n.object.position),Ms.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ms.direction))<Qv?e.lookAt(n.target):(cc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ms.intersectPlane(cc,n.target))))}else if(n.object.isOrthographicCamera){const nn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),nn!==n.object.zoom&&(n.object.updateProjectionMatrix(),un=!0)}return f=1,F=!1,un||ue.distanceToSquared(n.object.position)>l||8*(1-xe.dot(n.object.quaternion))>l||qe.distanceToSquared(n.target)>l?(n.dispatchEvent(ac),ue.copy(n.object.position),xe.copy(n.object.quaternion),qe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",rt),n.domElement.removeEventListener("pointerdown",B),n.domElement.removeEventListener("pointercancel",ie),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",ie),n.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",We),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,u=new Ql,d=new Ql;let f=1;const g=new k,y=new Ie,v=new Ie,x=new Ie,E=new Ie,T=new Ie,_=new Ie,m=new Ie,L=new Ie,D=new Ie,U=new k,G=new Ie;let F=!1;const w=[],W={};let I=!1;function A(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function Y(S){const X=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*X)}function $(S){d.theta-=S}function H(S){d.phi-=S}const Q=function(){const S=new k;return function(K,ue){S.setFromMatrixColumn(ue,0),S.multiplyScalar(-K),g.add(S)}}(),te=function(){const S=new k;return function(K,ue){n.screenSpacePanning===!0?S.setFromMatrixColumn(ue,1):(S.setFromMatrixColumn(ue,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(K),g.add(S)}}(),q=function(){const S=new k;return function(K,ue){const xe=n.domElement;if(n.object.isPerspectiveCamera){const qe=n.object.position;S.copy(qe).sub(n.target);let et=S.length();et*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*K*et/xe.clientHeight,n.object.matrix),te(2*ue*et/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Q(K*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),te(ue*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function oe(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(S,X){if(!n.zoomToCursor)return;F=!0;const K=n.domElement.getBoundingClientRect(),ue=S-K.left,xe=X-K.top,qe=K.width,et=K.height;G.x=ue/qe*2-1,G.y=-(xe/et)*2+1,U.set(G.x,G.y,1).unproject(n.object).sub(n.object.position).normalize()}function he(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function Pe(S){y.set(S.clientX,S.clientY)}function Xe(S){le(S.clientX,S.clientX),m.set(S.clientX,S.clientY)}function ht(S){E.set(S.clientX,S.clientY)}function ae(S){v.set(S.clientX,S.clientY),x.subVectors(v,y).multiplyScalar(n.rotateSpeed);const X=n.domElement;$(2*Math.PI*x.x/X.clientHeight),H(2*Math.PI*x.y/X.clientHeight),y.copy(v),n.update()}function _e(S){L.set(S.clientX,S.clientY),D.subVectors(L,m),D.y>0?oe(Y(D.y)):D.y<0&&ne(Y(D.y)),m.copy(L),n.update()}function De(S){T.set(S.clientX,S.clientY),_.subVectors(T,E).multiplyScalar(n.panSpeed),q(_.x,_.y),E.copy(T),n.update()}function Se(S){le(S.clientX,S.clientY),S.deltaY<0?ne(Y(S.deltaY)):S.deltaY>0&&oe(Y(S.deltaY)),n.update()}function it(S){let X=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),X=!0;break}X&&(S.preventDefault(),n.update())}function ge(S){if(w.length===1)y.set(S.pageX,S.pageY);else{const X=gt(S),K=.5*(S.pageX+X.x),ue=.5*(S.pageY+X.y);y.set(K,ue)}}function Z(S){if(w.length===1)E.set(S.pageX,S.pageY);else{const X=gt(S),K=.5*(S.pageX+X.x),ue=.5*(S.pageY+X.y);E.set(K,ue)}}function ft(S){const X=gt(S),K=S.pageX-X.x,ue=S.pageY-X.y,xe=Math.sqrt(K*K+ue*ue);m.set(0,xe)}function Be(S){n.enableZoom&&ft(S),n.enablePan&&Z(S)}function mt(S){n.enableZoom&&ft(S),n.enableRotate&&ge(S)}function ze(S){if(w.length==1)v.set(S.pageX,S.pageY);else{const K=gt(S),ue=.5*(S.pageX+K.x),xe=.5*(S.pageY+K.y);v.set(ue,xe)}x.subVectors(v,y).multiplyScalar(n.rotateSpeed);const X=n.domElement;$(2*Math.PI*x.x/X.clientHeight),H(2*Math.PI*x.y/X.clientHeight),y.copy(v)}function Ke(S){if(w.length===1)T.set(S.pageX,S.pageY);else{const X=gt(S),K=.5*(S.pageX+X.x),ue=.5*(S.pageY+X.y);T.set(K,ue)}_.subVectors(T,E).multiplyScalar(n.panSpeed),q(_.x,_.y),E.copy(T)}function Ge(S){const X=gt(S),K=S.pageX-X.x,ue=S.pageY-X.y,xe=Math.sqrt(K*K+ue*ue);L.set(0,xe),D.set(0,Math.pow(L.y/m.y,n.zoomSpeed)),oe(D.y),m.copy(L);const qe=(S.pageX+X.x)*.5,et=(S.pageY+X.y)*.5;le(qe,et)}function ct(S){n.enableZoom&&Ge(S),n.enablePan&&Ke(S)}function vt(S){n.enableZoom&&Ge(S),n.enableRotate&&ze(S)}function B(S){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",ie)),!je(S)&&(ke(S),S.pointerType==="touch"?ye(S):ce(S)))}function P(S){n.enabled!==!1&&(S.pointerType==="touch"?Ue(S):pe(S))}function ie(S){switch(Re(S),w.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",ie),n.dispatchEvent(lc),a=r.NONE;break;case 1:const X=w[0],K=W[X];ye({pointerId:X,pageX:K.x,pageY:K.y});break}}function ce(S){let X;switch(S.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Ui.DOLLY:if(n.enableZoom===!1)return;Xe(S),a=r.DOLLY;break;case Ui.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;ht(S),a=r.PAN}else{if(n.enableRotate===!1)return;Pe(S),a=r.ROTATE}break;case Ui.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;Pe(S),a=r.ROTATE}else{if(n.enablePan===!1)return;ht(S),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Io)}function pe(S){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;ae(S);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(S);break;case r.PAN:if(n.enablePan===!1)return;De(S);break}}function fe(S){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(S.preventDefault(),n.dispatchEvent(Io),Se(Fe(S)),n.dispatchEvent(lc))}function Fe(S){const X=S.deltaMode,K={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(X){case 1:K.deltaY*=16;break;case 2:K.deltaY*=100;break}return S.ctrlKey&&!I&&(K.deltaY*=10),K}function Me(S){S.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(S){S.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function We(S){n.enabled===!1||n.enablePan===!1||it(S)}function ye(S){switch($e(S),w.length){case 1:switch(n.touches.ONE){case Ni.ROTATE:if(n.enableRotate===!1)return;ge(S),a=r.TOUCH_ROTATE;break;case Ni.PAN:if(n.enablePan===!1)return;Z(S),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(S),a=r.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(S),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Io)}function Ue(S){switch($e(S),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ze(S),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ke(S),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(S),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;vt(S),n.update();break;default:a=r.NONE}}function rt(S){n.enabled!==!1&&S.preventDefault()}function ke(S){w.push(S.pointerId)}function Re(S){delete W[S.pointerId];for(let X=0;X<w.length;X++)if(w[X]==S.pointerId){w.splice(X,1);return}}function je(S){for(let X=0;X<w.length;X++)if(w[X]==S.pointerId)return!0;return!1}function $e(S){let X=W[S.pointerId];X===void 0&&(X=new Ie,W[S.pointerId]=X),X.set(S.pageX,S.pageY)}function gt(S){const X=S.pointerId===w[0]?w[1]:w[0];return W[X]}n.domElement.addEventListener("contextmenu",rt),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",ie),n.domElement.addEventListener("wheel",fe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}function e_(){const i=new Ie;let e=null,t=null,n=!1,r=!1,a=!1;const l=new Yn;let u=null,d=null;const f=new Yc,g=$(),y=H(),v=Q(),x=te();let E=g;function T(q){E=q}function _(){d=new Jv(cn,bn.domElement),u=new Wv(cn,bn.domElement),u.addEventListener("change",D),u.addEventListener("dragging-changed",U),u.setMode("scale"),u.enabled=!1,ai.add(u),G()}function m(q){q.shiftKey,q.ctrlKey,q.altKey}function L(q){q.shiftKey,q.ctrlKey,q.altKey}function D(q){const oe=u.object?u.object:e,ne=new CustomEvent("objectMoved",{detail:{mesh:oe}});dispatchEvent(ne)}function U(q){d.enabled=!q.value,a=q.value}function G(){document.addEventListener("pointermove",F),document.addEventListener("mousedown",w),document.addEventListener("mouseup",W),document.addEventListener("keyup",L),document.addEventListener("keydown",m),document.addEventListener("dblclick",I)}function F(q){i.x=q.clientX/window.innerWidth*2-1,i.y=-(q.clientY/window.innerHeight)*2+1,r=n,E.onPointerMove(q)}function w(q){q.target.id==="editor-view"&&(n=!0,E.onMouseDown(q))}function W(q){n=!1,d.enabled=!0,E.onMouseUp(q)}function I(q){E.onDoubleClick(q)}function A(q){if(e!==q){e=q;const oe=new CustomEvent("objectSelected",{detail:{mesh:q}});dispatchEvent(oe),u.enabled=!1,u.detach(),u.setMode("scale")}}function Y(){const q=new k;cn.getWorldDirection(q);const oe=e.position.clone();oe.negate(),oe.projectOnVector(q);const ne=oe.dot(q);l.set(q,ne);const le=new k;f.ray.intersectPlane(l,le),t=le}function $(){return{name:"BaseState",onMouseDown(q){n=!0,f.setFromCamera(i,cn);const oe=f.intersectObjects(Is);oe.length>0?(A(oe[0].object),Y(),d.enabled=!1,T(v)):T(y)},onPointerMove(q){},onMouseUp(q){},onDoubleClick(q){e&&(u.attach(e),u.setMode("translate"),u.enabled=!0,T(x))}}}function H(){return{name:"OrbitState",onPointerMove(q){r=n},onMouseDown(q){n=!0},onMouseUp(q){r||(u.detach(),A(null)),T(g)},onDoubleClick(q){}}}function Q(){return{name:"DragState",onPointerMove(q){const oe=new k;f.setFromCamera(i,cn),f.ray.intersectPlane(l,oe);const ne=t.clone().sub(oe);e.position.sub(ne),t=oe;const le=new CustomEvent("objectMoved",{detail:{mesh:e}});dispatchEvent(le)},onMouseDown(q){},onMouseUp(q){T(g)},onDoubleClick(q){T(x)}}}function te(){return{name:"TransformState",onMouseDown(q){n=!0,f.setFromCamera(i,cn);const oe=f.intersectObjects(Is);oe.length>0?(d.enabled=!1,e!==oe[0].object&&(A(oe[0].object),Y(),T(v))):a||T(y)},onPointerMove(q){},onMouseUp(q){},onDoubleClick(q){if(e){switch(u.attach(e),u.mode){case"translate":u.setMode("rotate");break;case"rotate":u.setMode("scale");break;case"scale":u.setMode("translate"),u.detach(),u.enabled=!1,T(g);break}u.enabled=!0}}}}return{setup:_}}const t_=e_();function n_(){const i=document.getElementById("info");function e(v){g(v.detail.mesh),removeEventListener("objectSelected",e),addEventListener("objectSelected",y,!1)}addEventListener("objectSelected",e,!1),addEventListener("objectMoved",y,!1);let t;function n(v){return{position:v.position,rotation:v.rotation,scale:v.scale,materialColor:v.material.color,geometryType:v.geometry.type}}function r(v,x,E){return function(T){v[x][E]=parseFloat(T.target.value)}}function a(v){return function(x){v.color.set(x.target.value)}}function l(){document.querySelectorAll("input[data-prop]").forEach(v=>{const[x,E]=v.getAttribute("data-prop").split("-");x==="color"?v.addEventListener("input",a(t.material)):v.addEventListener("input",r(t,x,E))})}function u(v,x,E){let T=`<tr><td class="propertyName">${v}</td>`;return E.forEach(_=>{const m=_.toLowerCase(),L=x[m]!==void 0?x[m].toFixed(2):0;T+=`<td><label for="${v}-${m}">${_}: </label><input type="number" id="${v}-${m}" data-prop="${v}-${m}" value="${L}"></td>`}),T+="</tr>",T}function d(v,x,E){E.forEach(T=>{const _=T.toLowerCase(),m=document.getElementById(`${v}-${_}`);m&&(m.value=x[_]!==void 0?x[_].toFixed(2):0)})}function f(v){const x=document.getElementById("color");x&&(x.value=`#${v.getHexString()}`)}function g(v){t=v;const x=n(t);let E="";x.position&&(E+=u("position",x.position,["X","Y","Z"])),x.rotation&&(E+=u("rotation",x.rotation,["X","Y","Z"])),x.scale&&(E+=u("scale",x.scale,["X","Y","Z"])),x.materialColor&&(E+=`
                  <tr>
                      <td>Material Color</td>
                      <td colspan="3"><label for="color">Color: </label><input type="color" id="color" data-prop="color" value="#${x.materialColor.getHexString()}"></td>
                  </tr>
              `),x.geometryType&&(E+=`
                  <tr>
                      <td>Geometry Type</td>
                      <td colspan="3">${x.geometryType}</td>
                  </tr>
              `),i.innerHTML=`<strong>Properties</strong><table class="blueTable">${E}</table>`,document.getElementById("1").style.display="block",l()}function y(v){if(v.detail.mesh){t=v.detail.mesh;const x=n(t);x.position&&d("position",x.position,["X","Y","Z"]),x.rotation&&d("rotation",x.rotation,["X","Y","Z"]),x.scale&&d("scale",x.scale,["X","Y","Z"]),x.materialColor&&f(x.materialColor),document.getElementById("1").style.display="block"}else document.getElementById("1").style.display="none"}return{updateInfoDiv:y,initializeInfoDiv:g}}n_();let uc=document.getElementById("myDiv");uc&&Ku(uc);Zu.setup();Zc.setup();t_.setup();window.addEventListener("resize",Zc.onWindowResize);
//# sourceMappingURL=index-CHCP3M3Y.js.map
