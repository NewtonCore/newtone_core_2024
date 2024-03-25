"use strict";(self.webpackChunknewton_recruitment=self.webpackChunknewton_recruitment||[]).push([[3890],{78633:function(n,e,t){t.d(e,{h:function(){return i}});var r=t(72791).createContext(null),i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=n?String(n):e||null};e.Z=r},90165:function(n,e,t){var r=t(72791).createContext(null);e.Z=r},40551:function(n,e,t){t.d(e,{W:function(){return f}});var r=t(29439),i=t(72791),a=t(90165),o=t(78633),u=t(25666),l=t(80184),s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],d=["as"];function v(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function f(n){var e=n.active,t=n.eventKey,r=n.mountOnEnter,u=n.transition,l=n.unmountOnExit,d=n.role,f=void 0===d?"tabpanel":d,b=n.onEnter,x=n.onEntering,m=n.onEntered,p=n.onExit,y=n.onExiting,E=n.onExited,h=v(n,s),g=(0,i.useContext)(a.Z);if(!g)return[Object.assign({},h,{role:f}),{eventKey:t,isActive:e,mountOnEnter:r,transition:u,unmountOnExit:l,onEnter:b,onEntering:x,onEntered:m,onExit:p,onExiting:y,onExited:E}];var Z=g.activeKey,O=g.getControlledId,C=g.getControllerId,j=v(g,c),w=(0,o.h)(t);return[Object.assign({},h,{role:f,id:O(t),"aria-labelledby":C(t)}),{eventKey:t,isActive:null==e&&null!=w?(0,o.h)(Z)===w:e,transition:u||j.transition,mountOnEnter:null!=r?r:j.mountOnEnter,unmountOnExit:null!=l?l:j.unmountOnExit,onEnter:b,onEntering:x,onEntered:m,onExit:p,onExiting:y,onExited:E}]}var b=i.forwardRef((function(n,e){var t=n.as,i=void 0===t?"div":t,s=f(v(n,d)),c=(0,r.Z)(s,2),b=c[0],x=c[1],m=x.isActive,p=x.onEnter,y=x.onEntering,E=x.onEntered,h=x.onExit,g=x.onExiting,Z=x.onExited,O=x.mountOnEnter,C=x.unmountOnExit,j=x.transition,w=void 0===j?u.Z:j;return(0,l.jsx)(a.Z.Provider,{value:null,children:(0,l.jsx)(o.Z.Provider,{value:null,children:(0,l.jsx)(w,{in:m,onEnter:p,onEntering:y,onEntered:E,onExit:h,onExiting:g,onExited:Z,mountOnEnter:O,unmountOnExit:C,children:(0,l.jsx)(i,Object.assign({},b,{ref:e,hidden:!m,"aria-hidden":!m}))})})})}));b.displayName="TabPanel",e.Z=b},72032:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(29439),i=t(72791),a=t(80239),o={prefix:String(Math.round(1e10*Math.random())),current:0,isSSR:!1},u=i.createContext(o);var l=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),s=new WeakMap;function c(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,i.useContext)(u),t=(0,i.useRef)(null);if(null===t.current&&!n){var r,a,o=null===(r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===r||null===(a=r.ReactCurrentOwner)||void 0===a?void 0:a.current;if(o){var l=s.get(o);null==l?s.set(o,{id:e.current,state:o.memoizedState}):o.memoizedState!==l.state&&(e.current=l.id,s.delete(o))}t.current=++e.current}return t.current}var d=t(90165),v=t(78633),f=t(40551),b=t(80184),x=function(n){var e=n.id,t=n.generateChildId,s=n.onSelect,f=n.activeKey,x=n.defaultActiveKey,m=n.transition,p=n.mountOnEnter,y=n.unmountOnExit,E=n.children,h=(0,a.$c)(f,x,s),g=(0,r.Z)(h,2),Z=g[0],O=g[1],C=function(n){var e=(0,i.useContext)(u);e!==o||l||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");var t=c(!!n);return n||"react-aria".concat(e.prefix,"-").concat(t)}(e),j=(0,i.useMemo)((function(){return t||function(n,e){return C?"".concat(C,"-").concat(e,"-").concat(n):null}}),[C,t]),w=(0,i.useMemo)((function(){return{onSelect:O,activeKey:Z,transition:m,mountOnEnter:p||!1,unmountOnExit:y||!1,getControlledId:function(n){return j(n,"tabpane")},getControllerId:function(n){return j(n,"tab")}}}),[O,Z,m,p,y,j]);return(0,b.jsx)(d.Z.Provider,{value:w,children:(0,b.jsx)(v.Z.Provider,{value:O||null,children:E})})};x.Panel=f.Z;var m=x},92176:function(n){n.exports=function(n,e,t,r,i,a,o,u){if(!n){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,r,i,a,o,u],c=0;(l=new Error(e.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},33573:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,a.default)((function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];var i=null;return e.forEach((function(n){if(null==i){var e=n.apply(void 0,t);null!=e&&(i=e)}})),i}))};var r,i=t(46054),a=(r=i)&&r.__esModule?r:{default:r};n.exports=e.default},46054:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){function e(e,t,r,i,a,o){var u=i||"<<anonymous>>",l=o||r;if(null==t[r])return e?new Error("Required "+a+" `"+l+"` was not specified in `"+u+"`."):null;for(var s=arguments.length,c=Array(s>6?s-6:0),d=6;d<s;d++)c[d-6]=arguments[d];return n.apply(void 0,[t,r,u,a,l].concat(c))}var t=e.bind(null,!1);return t.isRequired=e.bind(null,!0),t},n.exports=e.default},61734:function(n,e,t){t.d(e,{Z:function(){return p}});var r=t(52007),i=t.n(r),a=(t(72791),t(1413)),o=t(45987),u=t(72032),l=t(3507),s=t(80184),c=["transition"],d=function(n){var e=n.transition,t=(0,o.Z)(n,c);return(0,s.jsx)(u.Z,(0,a.Z)((0,a.Z)({},t),{},{transition:(0,l.Z)(e)}))};d.displayName="TabContainer";var v=d,f=t(34886),b=t(84504),x={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},m=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=x;var p=Object.assign(m,{Container:v,Content:f.Z,Pane:b.Z})},34886:function(n,e,t){var r=t(66543);e.Z=(0,r.Z)("tab-content")},84504:function(n,e,t){var r=t(1413),i=t(29439),a=t(45987),o=t(81694),u=t.n(o),l=t(72791),s=t(78633),c=t(90165),d=t(40551),v=t(10162),f=t(72709),b=t(3507),x=t(80184),m=["bsPrefix","transition"],p=["className","as"],y=l.forwardRef((function(n,e){var t=n.bsPrefix,o=n.transition,l=(0,a.Z)(n,m),y=(0,d.W)((0,r.Z)((0,r.Z)({},l),{},{transition:(0,b.Z)(o)})),E=(0,i.Z)(y,2),h=E[0],g=h.className,Z=h.as,O=void 0===Z?"div":Z,C=(0,a.Z)(h,p),j=E[1],w=j.isActive,N=j.onEnter,K=j.onEntering,S=j.onEntered,P=j.onExit,k=j.onExiting,I=j.onExited,_=j.mountOnEnter,R=j.unmountOnExit,A=j.transition,D=void 0===A?f.Z:A,T=(0,v.vE)(t,"tab-pane");return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(s.Z.Provider,{value:null,children:(0,x.jsx)(D,{in:w,onEnter:N,onEntering:K,onEntered:S,onExit:P,onExiting:k,onExited:I,mountOnEnter:_,unmountOnExit:R,children:(0,x.jsx)(O,(0,r.Z)((0,r.Z)({},C),{},{ref:e,className:u()(g,T,w&&"active")}))})})})}));y.displayName="TabPane",e.Z=y},57617:function(n,e,t){t.d(e,{Z:function(){return tn}});var r=t(45987),i=t(1413),a=t(72791),o=t(80239),u=t(72032),l=t(4942),s=t(81694),c=t.n(s),d=(t(33573),t(13808));var v=t(73201),f=a.createContext(null);f.displayName="NavContext";var b=f,x=t(78633),m=t(90165),p=t(71306),y=t(29439),E=t(39007),h=t(80184),g=["as","disabled"];function Z(n){var e=n.tagName,t=n.disabled,r=n.href,i=n.target,a=n.rel,o=n.role,u=n.onClick,l=n.tabIndex,s=void 0===l?0:l,c=n.type;e||(e=null!=r||null!=i||null!=a?"a":"button");var d={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},d];var v=function(n){(t||"a"===e&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==u||u(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:s,href:r,target:"a"===e?i:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:v,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),v(n))}},d]}var O=a.forwardRef((function(n,e){var t=n.as,r=n.disabled,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,g),a=Z(Object.assign({tagName:t,disabled:r},i)),o=(0,y.Z)(a,2),u=o[0],l=o[1].tagName;return(0,h.jsx)(l,Object.assign({},i,u,{ref:e}))}));O.displayName="Button";var C=O,j=["as","active","eventKey"];function w(n){var e=n.key,t=n.onClick,r=n.active,i=n.id,o=n.role,u=n.disabled,l=(0,a.useContext)(x.Z),s=(0,a.useContext)(b),c=(0,a.useContext)(m.Z),d=r,v={role:o};if(s){o||"tablist"!==s.role||(v.role="tab");var f=s.getControllerId(null!=e?e:null),y=s.getControlledId(null!=e?e:null);v[(0,p.PB)("event-key")]=e,v.id=f||i,!(d=null==r&&null!=e?s.activeKey===e:r)&&(null!=c&&c.unmountOnExit||null!=c&&c.mountOnEnter)||(v["aria-controls"]=y)}return"tab"===v.role&&(v["aria-selected"]=d,d||(v.tabIndex=-1),u&&(v.tabIndex=-1,v["aria-disabled"]=!0)),v.onClick=(0,E.Z)((function(n){u||(null==t||t(n),null!=e&&l&&!n.isPropagationStopped()&&l(e,n))})),[v,{isActive:d}]}var N=a.forwardRef((function(n,e){var t=n.as,r=void 0===t?C:t,i=n.active,a=n.eventKey,o=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,j),u=w(Object.assign({key:(0,x.h)(a,o.href),active:i},o)),l=(0,y.Z)(u,2),s=l[0],c=l[1];return s[(0,p.PB)("active")]=c.isActive,(0,h.jsx)(r,Object.assign({},o,s,{ref:e}))}));N.displayName="NavItem";var K=N,S=["as","onSelect","activeKey","role","onKeyDown"];var P=function(){},k=(0,p.PB)("event-key"),I=a.forwardRef((function(n,e){var t,r,i=n.as,o=void 0===i?"div":i,u=n.onSelect,l=n.activeKey,s=n.role,c=n.onKeyDown,f=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,S),y=(0,a.useReducer)((function(n){return!n}),!1)[1],E=(0,a.useRef)(!1),g=(0,a.useContext)(x.Z),Z=(0,a.useContext)(m.Z);Z&&(s=s||"tablist",l=Z.activeKey,t=Z.getControlledId,r=Z.getControllerId);var O=(0,a.useRef)(null),C=function(n){var e=O.current;if(!e)return null;var t=(0,d.Z)(e,"[".concat(k,"]:not([aria-disabled=true])")),r=e.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;var i=t.indexOf(r);if(-1===i)return null;var a=i+n;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},j=function(n,e){null!=n&&(null==u||u(n,e),null==g||g(n,e))};(0,a.useEffect)((function(){if(O.current&&E.current){var n=O.current.querySelector("[".concat(k,"][aria-selected=true]"));null==n||n.focus()}E.current=!1}));var w=(0,v.Z)(e,O);return(0,h.jsx)(x.Z.Provider,{value:j,children:(0,h.jsx)(b.Provider,{value:{role:s,activeKey:(0,x.h)(l),getControlledId:t||P,getControllerId:r||P},children:(0,h.jsx)(o,Object.assign({},f,{onKeyDown:function(n){if(null==c||c(n),Z){var e;switch(n.key){case"ArrowLeft":case"ArrowUp":e=C(-1);break;case"ArrowRight":case"ArrowDown":e=C(1);break;default:return}e&&(n.preventDefault(),j(e.dataset[(0,p.$F)("EventKey")]||null,n),E.current=!0,y())}},ref:w,role:s}))})})}));I.displayName="Nav";var _=Object.assign(I,{Item:K}),R=t(10162),A=a.createContext(null);A.displayName="NavbarContext";var D=A,T=a.createContext(null);T.displayName="CardHeaderContext";var M=T,B=(0,t(66543).Z)("nav-item");t(28633),t(47904);t(55746),t(52803);t(49815),new WeakMap;var W=["onKeyDown"];var U=a.forwardRef((function(n,e){var t,r=n.onKeyDown,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,W),a=Z(Object.assign({tagName:"a"},i)),o=(0,y.Z)(a,1)[0],u=(0,E.Z)((function(n){o.onKeyDown(n),null==r||r(n)}));return(t=i.href)&&"#"!==t.trim()&&"button"!==i.role?(0,h.jsx)("a",Object.assign({ref:e},i,{onKeyDown:r})):(0,h.jsx)("a",Object.assign({ref:e},i,o,{onKeyDown:u}))}));U.displayName="Anchor";var F=U,L=["bsPrefix","className","as","active","eventKey","disabled"],q=a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.className,o=n.as,u=void 0===o?F:o,l=n.active,s=n.eventKey,d=n.disabled,v=void 0!==d&&d,f=(0,r.Z)(n,L);t=(0,R.vE)(t,"nav-link");var b=w((0,i.Z)({key:(0,x.h)(s,f.href),active:l,disabled:v},f)),m=(0,y.Z)(b,2),p=m[0],E=m[1];return(0,h.jsx)(u,(0,i.Z)((0,i.Z)((0,i.Z)({},f),p),{},{ref:e,disabled:v,className:c()(a,t,v&&"disabled",E.isActive&&"active")}))}));q.displayName="NavLink";var $=q,z=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],H=a.forwardRef((function(n,e){var t,u,s,d=(0,o.Ch)(n,{activeKey:"onSelect"}),v=d.as,f=void 0===v?"div":v,b=d.bsPrefix,x=d.variant,m=d.fill,p=void 0!==m&&m,y=d.justify,E=void 0!==y&&y,g=d.navbar,Z=d.navbarScroll,O=d.className,C=d.activeKey,j=(0,r.Z)(d,z),w=(0,R.vE)(b,"nav"),N=!1,K=(0,a.useContext)(D),S=(0,a.useContext)(M);return K?(u=K.bsPrefix,N=null==g||g):S&&(s=S.cardHeaderBsPrefix),(0,h.jsx)(_,(0,i.Z)({as:f,ref:e,activeKey:C,className:c()(O,(t={},(0,l.Z)(t,w,!N),(0,l.Z)(t,"".concat(u,"-nav"),N),(0,l.Z)(t,"".concat(u,"-nav-scroll"),N&&Z),(0,l.Z)(t,"".concat(s,"-").concat(x),!!s),(0,l.Z)(t,"".concat(w,"-").concat(x),!!x),(0,l.Z)(t,"".concat(w,"-fill"),p),(0,l.Z)(t,"".concat(w,"-justified"),E),t))},j))}));H.displayName="Nav";var V=Object.assign(H,{Item:B,Link:$}),Y=t(34886),G=t(84504),J=t(11701),Q=t(3507),X=["id","onSelect","transition","mountOnEnter","unmountOnExit","variant","children","activeKey"];function nn(n){var e=n.props,t=e.title,r=e.eventKey,a=e.disabled,o=e.tabClassName,u=e.tabAttrs,l=e.id;return null==t?null:(0,h.jsx)(B,{as:"li",role:"presentation",children:(0,h.jsx)($,(0,i.Z)((0,i.Z)({as:"button",type:"button",eventKey:r,disabled:a,id:l,className:o},u),{},{children:t}))})}var en=function(n){var e=(0,o.Ch)(n,{activeKey:"onSelect"}),t=e.id,a=e.onSelect,l=e.transition,s=e.mountOnEnter,c=void 0!==s&&s,d=e.unmountOnExit,v=void 0!==d&&d,f=e.variant,b=void 0===f?"tabs":f,x=e.children,m=e.activeKey,p=void 0===m?function(n){var e;return(0,J.Ed)(n,(function(n){null==e&&(e=n.props.eventKey)})),e}(x):m,y=(0,r.Z)(e,X);return(0,h.jsxs)(u.Z,{id:t,activeKey:p,onSelect:a,transition:(0,Q.Z)(l),mountOnEnter:c,unmountOnExit:v,children:[(0,h.jsx)(V,(0,i.Z)((0,i.Z)({},y),{},{role:"tablist",as:"ul",variant:b,children:(0,J.UI)(x,nn)})),(0,h.jsx)(Y.Z,{children:(0,J.UI)(x,(function(n){var e=(0,i.Z)({},n.props);return delete e.title,delete e.disabled,delete e.tabClassName,delete e.tabAttrs,(0,h.jsx)(G.Z,(0,i.Z)({},e))}))})]})};en.displayName="Tabs";var tn=en},3507:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(25666),i=t(72709);function a(n){return"boolean"===typeof n?n?i.Z:r.Z:n}},80239:function(n,e,t){t.d(e,{Ch:function(){return s},$c:function(){return l}});var r=t(87462),i=t(63366),a=t(72791);t(92176);function o(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function u(n){var e=function(n,e){if("object"!==typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===typeof e?e:String(e)}function l(n,e,t){var r=(0,a.useRef)(void 0!==n),i=(0,a.useState)(e),o=i[0],u=i[1],l=void 0!==n,s=r.current;return r.current=l,!l&&s&&o!==e&&u(e),[l?n:o,(0,a.useCallback)((function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];t&&t.apply(void 0,[n].concat(r)),u(n)}),[t])]}function s(n,e){return Object.keys(e).reduce((function(t,a){var s,c=t,d=c[o(a)],v=c[a],f=(0,i.Z)(c,[o(a),a].map(u)),b=e[a],x=l(v,d,n[b]),m=x[0],p=x[1];return(0,r.Z)({},f,((s={})[a]=m,s[b]=p,s))}),n)}function c(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==n&&void 0!==n&&this.setState(n)}function d(n){this.setState(function(e){var t=this.constructor.getDerivedStateFromProps(n,e);return null!==t&&void 0!==t?t:null}.bind(this))}function v(n,e){try{var t=this.props,r=this.state;this.props=n,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}c.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=3890.8912edf9.chunk.js.map