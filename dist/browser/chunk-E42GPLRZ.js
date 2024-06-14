import{m as h1}from"./chunk-BC2EWL22.js";import{$ as l1,Bb as A2,Da as t1,Ka as D,Na as m1,O as w2,P as n1,Ya as H1,Z as y2,_ as f1,fa as o2,jb as z1,ma as o1,ob as v1,pb as V1}from"./chunk-LPK2HR6M.js";function M1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?M1(Object(e),!0).forEach(function(r){C(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):M1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function L2(c){"@babel/helpers - typeof";return L2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L2(c)}function C3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function p1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function u3(c,a,e){return a&&p1(c.prototype,a),e&&p1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function C(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function X2(c,a){return d3(c)||x3(c,a)||W1(c,a)||b3()}function n2(c){return L3(c)||g3(c)||W1(c)||N3()}function L3(c){if(Array.isArray(c))return D2(c)}function d3(c){if(Array.isArray(c))return c}function g3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function x3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,f;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw f}}return r}}function W1(c,a){if(c){if(typeof c=="string")return D2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D2(c,a)}}function D2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function N3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C1=function(){},Y2={},G1={},j1=null,_1={mark:C1,measure:C1};try{typeof window<"u"&&(Y2=window),typeof document<"u"&&(G1=document),typeof MutationObserver<"u"&&(j1=MutationObserver),typeof performance<"u"&&(_1=performance)}catch{}var S3=Y2.navigator||{},u1=S3.userAgent,L1=u1===void 0?"":u1,E=Y2,M=G1,d1=j1,t2=_1,m6=!!E.document,B=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",X1=~L1.indexOf("MSIE")||~L1.indexOf("Trident/"),m2,H2,z2,v2,V2,A="___FONT_AWESOME___",R2=16,Y1="fa",$1="svg-inline--fa",j="data-fa-i2svg",E2="data-fa-pseudo-element",k3="data-fa-pseudo-element-pending",$2="data-prefix",Q2="data-icon",g1="fontawesome-i2svg",w3="async",y3=["HTML","HEAD","STYLE","SCRIPT"],Q1=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",K2=[h,p];function f2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var a2=f2((m2={},C(m2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(m2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),m2)),e2=f2((H2={},C(H2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(H2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),H2)),r2=f2((z2={},C(z2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(z2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),z2)),A3=f2((v2={},C(v2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(v2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),v2)),P3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,K1="fa-layers-text",T3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,B3=f2((V2={},C(V2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(V2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),V2)),J1=[1,2,3,4,5,6,7,8,9,10],F3=J1.concat([11,12,13,14,15,16,17,18,19,20]),D3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s2=new Set;Object.keys(e2[h]).map(s2.add.bind(s2));Object.keys(e2[p]).map(s2.add.bind(s2));var R3=[].concat(K2,n2(s2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(J1.map(function(c){return"".concat(c,"x")})).concat(F3.map(function(c){return"w-".concat(c)})),Z=E.FontAwesomeConfig||{};function E3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function U3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(x1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],x1.forEach(function(c){var a=X2(c,2),e=a[0],r=a[1],s=U3(E3(e));s!=null&&(Z[r]=s)}));var x1,Z1={styleDefault:"solid",familyDefault:"classic",cssPrefix:Y1,replacementClass:$1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var Q=t(t({},Z1),Z);Q.autoReplaceSvg||(Q.observeMutations=!1);var H={};Object.keys(Z1).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(e){Q[c]=e,c2.forEach(function(r){return r(H)})},get:function(){return Q[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,c2.forEach(function(e){return e(H)})},get:function(){return Q.cssPrefix}});E.FontAwesomeConfig=H;var c2=[];function I3(c){return c2.push(c),function(){c2.splice(c2.indexOf(c),1)}}var R=R2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O3(c){if(!(!c||!B)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return M.head.insertBefore(a,r),c}}var q3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i2(){for(var c=12,a="";c-- >0;)a+=q3[Math.random()*62|0];return a}function K(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function J2(c){return c.classList?K(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function c3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(c3(c[e]),'" ')},"").trim()}function x2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function Z2(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function G3(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function j3(c){var a=c.transform,e=c.width,r=e===void 0?R2:e,s=c.height,i=s===void 0?R2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&X1?l+="translate(".concat(a.x/R-r/2,"em, ").concat(a.y/R-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var _3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function a3(){var c=Y1,a=$1,e=H.cssPrefix,r=H.replacementClass,s=_3;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var N1=!1;function P2(){H.autoAddCss&&!N1&&(O3(a3()),N1=!0)}var X3={mixout:function(){return{dom:{css:a3,insertCss:P2}}},hooks:function(){return{beforeDOMElementCreation:function(){P2()},beforeI2svg:function(){P2()}}}},P=E||{};P[A]||(P[A]={});P[A].styles||(P[A].styles={});P[A].hooks||(P[A].hooks={});P[A].shims||(P[A].shims=[]);var S=P[A],e3=[],Y3=function c(){M.removeEventListener("DOMContentLoaded",c),d2=1,e3.map(function(a){return a()})},d2=!1;B&&(d2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),d2||M.addEventListener("DOMContentLoaded",Y3));function $3(c){B&&(d2?setTimeout(c,0):e3.push(c))}function l2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?c3(c):"<".concat(a," ").concat(W3(r),">").concat(i.map(l2).join(""),"</").concat(a,">")}function b1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Q3=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},T2=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=s!==void 0?Q3(e,s):e,l,m,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function K3(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function U2(c){var a=K3(c);return a.length===1?a[0].toString(16):null}function J3(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function S1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function I2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=S1(a);typeof S.hooks.addPack=="function"&&!s?S.hooks.addPack(c,S1(a)):S.styles[c]=t(t({},S.styles[c]||{}),i),c==="fas"&&I2("fa",a)}var h2,M2,p2,X=S.styles,Z3=S.shims,c4=(h2={},C(h2,h,Object.values(r2[h])),C(h2,p,Object.values(r2[p])),h2),c1=null,r3={},s3={},i3={},n3={},f3={},a4=(M2={},C(M2,h,Object.keys(a2[h])),C(M2,p,Object.keys(a2[p])),M2);function e4(c){return~R3.indexOf(c)}function r4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!e4(s)?s:null}var l3=function(){var a=function(i){return T2(X,function(n,f,l){return n[l]=T2(f,i,{}),n},{})};r3=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),s3=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),f3=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in X||H.autoFetchSvg,r=T2(Z3,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});i3=r.names,n3=r.unicodes,c1=N2(H.styleDefault,{family:H.familyDefault})};I3(function(c){c1=N2(c.styleDefault,{family:H.familyDefault})});l3();function a1(c,a){return(r3[c]||{})[a]}function s4(c,a){return(s3[c]||{})[a]}function G(c,a){return(f3[c]||{})[a]}function o3(c){return i3[c]||{prefix:null,iconName:null}}function i4(c){var a=n3[c],e=a1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return c1}var e1=function(){return{prefix:null,iconName:null,rest:[]}};function N2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=a2[r][c],i=e2[r][c]||e2[r][s],n=c in S.styles?c:null;return i||n||null}var k1=(p2={},C(p2,h,Object.keys(r2[h])),C(p2,p,Object.keys(r2[p])),p2);function b2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},C(a,h,"".concat(H.cssPrefix,"-").concat(h)),C(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return k1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return k1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=r4(H.cssPrefix,o);if(X[o]?(o=c4[f].includes(o)?A3[f][o]:o,n=o,m.prefix=o):a4[f].indexOf(o)>-1?(n=o,m.prefix=N2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?o3(m.iconName):{},V=G(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},e1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(X.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=U()||"fas"),l}var n4=function(){function c(){C3(this,c),this.definitions={}}return u3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),n[f]),I2(f,n[f]);var l=r2[h][f];l&&I2(l,n[f]),l3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=m)}),e[f][l]=m}),e}}]),c}(),w1=[],Y={},$={},f4=Object.keys($);function l4(c,a){var e=a.mixoutsTo;return w1=c,Y={},Object.keys($).forEach(function(r){f4.indexOf(r)===-1&&delete $[r]}),w1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),L2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){Y[n]||(Y[n]=[]),Y[n].push(i[n])})}r.provides&&r.provides($)}),e}function O2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=Y[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function _(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=Y[c]||[];s.forEach(function(i){i.apply(null,e)})}function T(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function q2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||U();if(a)return a=G(e,a)||a,b1(t3.definitions,e,a)||b1(S.styles,e,a)}var t3=new n4,o4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,_("noAuto")},t4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(_("beforeI2svg",a),T("pseudoElements2svg",a),T("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,$3(function(){H4({autoReplaceSvgRoot:e}),_("watch",a)})}},m4={icon:function(a){if(a===null)return null;if(L2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:G(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=N2(a[0]);return{prefix:r,iconName:G(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(P3))){var s=b2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||U(),iconName:G(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:G(i,a)||a}}}},x={noAuto:o4,config:H,dom:t4,parse:m4,library:t3,findIconDefinition:q2,toHtml:l2},H4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?M:e;(Object.keys(S.styles).length>0||H.autoFetchSvg)&&B&&H.autoReplaceSvg&&x.dom.i2svg({node:r})};function S2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return l2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var r=M.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function z4(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(Z2(n)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};s.style=x2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function v4(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:r}]}]}function r1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,L=r.found?r:e,N=L.width,b=L.height,k=s==="fak",u=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(F){return z.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(z.classes).join(" "),d={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:u,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},w=k&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(d.attributes[j]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||i2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:s,iconName:i,main:e,mask:r,maskId:m,transform:n,symbol:f,styles:t(t({},w),z.styles)}),O=r.found&&e.found?T("generateAbstractMask",g)||{children:[],attributes:{}}:T("generateAbstractIcon",g)||{children:[],attributes:{}},q=O.children,k2=O.attributes;return g.children=q,g.attributes=k2,f?v4(g):z4(g)}function y1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[j]="");var o=t({},n.styles);Z2(s)&&(o.transform=j3({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=x2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function V4(c){var a=c.content,e=c.title,r=c.extra,s=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=x2(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var B2=S.styles;function W2(c){var a=c[0],e=c[1],r=c.slice(4),s=X2(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var h4={found:!1,width:512,height:512};function M4(c,a){!Q1&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function G2(c,a){var e=a;return a==="fa"&&H.styleDefault!==null&&(a=U()),new Promise(function(r,s){var i={found:!1,width:512,height:512,icon:T("missingIconAbstract")||{}};if(e==="fa"){var n=o3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&B2[a]&&B2[a][c]){var f=B2[a][c];return r(W2(f))}M4(c,a),r(t(t({},h4),{},{icon:H.showMissingIcons&&c?T("missingIconAbstract")||{}:{}}))})}var A1=function(){},j2=H.measurePerformance&&t2&&t2.mark&&t2.measure?t2:{mark:A1,measure:A1},J='FA "6.5.1"',p4=function(a){return j2.mark("".concat(J," ").concat(a," begins")),function(){return m3(a)}},m3=function(a){j2.mark("".concat(J," ").concat(a," ends")),j2.measure("".concat(J," ").concat(a),"".concat(J," ").concat(a," begins"),"".concat(J," ").concat(a," ends"))},s1={begin:p4,end:m3},C2=function(){};function P1(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function C4(c){var a=c.getAttribute?c.getAttribute($2):null,e=c.getAttribute?c.getAttribute(Q2):null;return a&&e}function u4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function L4(){if(H.autoReplaceSvg===!0)return u2.replace;var c=u2[H.autoReplaceSvg];return c||u2.replace}function d4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function g4(c){return M.createElement(c)}function H3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?d4:g4:e;if(typeof c=="string")return M.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(H3(n,{ceFn:r}))}),s}function x4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var u2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(H3(s),e)}),e.getAttribute(j)===null&&H.keepOriginalSource){var r=M.createComment(x4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~J2(e).indexOf(H.replacementClass))return u2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return l2(f)}).join(`
`);e.setAttribute(j,""),e.innerHTML=n}};function T1(c){c()}function z3(c,a){var e=typeof a=="function"?a:C2;if(c.length===0)e();else{var r=T1;H.mutateApproach===w3&&(r=E.requestAnimationFrame||T1),r(function(){var s=L4(),i=s1.begin("mutate");c.map(s),i(),e()})}}var i1=!1;function v3(){i1=!0}function _2(){i1=!1}var g2=null;function B1(c){if(d1&&H.observeMutations){var a=c.treeCallback,e=a===void 0?C2:a,r=c.nodeCallback,s=r===void 0?C2:r,i=c.pseudoElementsCallback,n=i===void 0?C2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;g2=new d1(function(m){if(!i1){var o=U();K(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!P1(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&P1(z.target)&&~D3.indexOf(z.attributeName))if(z.attributeName==="class"&&C4(z.target)){var v=b2(J2(z.target)),V=v.prefix,L=v.iconName;z.target.setAttribute($2,V||o),L&&z.target.setAttribute(Q2,L)}else u4(z.target)&&s(z.target)})}}),B&&g2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function N4(){g2&&g2.disconnect()}function b4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function S4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=b2(J2(c));return s.prefix||(s.prefix=U()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=s4(s.prefix,c.innerText)||a1(s.prefix,U2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function k4(c){var a=K(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return H.autoA11y&&(e?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||i2()):(a["aria-hidden"]="true",a.focusable="false")),a}function w4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function F1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=S4(c),r=e.iconName,s=e.prefix,i=e.rest,n=k4(c),f=O2("parseNodeAttributes",{},c),l=a.styleParser?b4(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var y4=S.styles;function V3(c){var a=H.autoReplaceSvg==="nest"?F1(c,{styleParser:!1}):F1(c);return~a.extra.classes.indexOf(K1)?T("generateLayersText",c,a):T("generateSvgReplacementMutation",c,a)}var I=new Set;K2.map(function(c){I.add("fa-".concat(c))});Object.keys(a2[h]).map(I.add.bind(I));Object.keys(a2[p]).map(I.add.bind(I));I=n2(I);function D1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=M.documentElement.classList,r=function(z){return e.add("".concat(g1,"-").concat(z))},s=function(z){return e.remove("".concat(g1,"-").concat(z))},i=H.autoFetchSvg?I:K2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(y4));i.includes("fa")||i.push("fa");var n=[".".concat(K1,":not([").concat(j,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(j,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=K(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=s1.begin("onTree"),m=f.reduce(function(o,z){try{var v=V3(z);v&&o.push(v)}catch(V){Q1||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){z3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function A4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;V3(c).then(function(e){e&&z3([e],a)})}function P4(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:q2(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:q2(s||{})),c(r,t(t({},e),{},{mask:s}))}}var T4=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?y:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,z=e.title,v=z===void 0?null:z,V=e.titleId,L=V===void 0?null:V,N=e.classes,b=N===void 0?[]:N,k=e.attributes,u=k===void 0?{}:k,d=e.styles,w=d===void 0?{}:d;if(a){var g=a.prefix,O=a.iconName,q=a.icon;return S2(t({type:"icon"},a),function(){return _("beforeDOMElementCreation",{iconDefinition:a,params:e}),H.autoA11y&&(v?u["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(L||i2()):(u["aria-hidden"]="true",u.focusable="false")),r1({icons:{main:W2(q),mask:l?W2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:O,transform:t(t({},y),s),symbol:n,title:v,maskId:o,titleId:L,extra:{attributes:u,styles:w,classes:b}})})}},B4={mixout:function(){return{icon:P4(T4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=D1,e.nodeCallback=A4,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?M:r,i=e.callback,n=i===void 0?function(){}:i;return D1(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,z=r.maskId,v=r.extra;return new Promise(function(V,L){Promise.all([G2(s,f),o.iconName?G2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=X2(N,2),k=b[0],u=b[1];V([e,r1({icons:{main:k,mask:u},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=x2(f);l.length>0&&(s.style=l);var m;return Z2(n)&&(m=T("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(m||i.icon),{children:r,attributes:s}}}},F4={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return S2({type:"layer"},function(){_("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(n2(i)).join(" ")},children:n}]})}}}},D4={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,m=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return S2({type:"counter",content:e},function(){return _("beforeDOMElementCreation",{content:e,params:r}),V4({content:e.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(n2(f))}})})}}}},R4={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?y:s,n=r.title,f=n===void 0?null:n,l=r.classes,m=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,v=r.styles,V=v===void 0?{}:v;return S2({type:"text",content:e},function(){return _("beforeDOMElementCreation",{content:e,params:r}),y1({content:e,transform:t(t({},y),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(n2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if(X1){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,y1({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},E4=new RegExp('"',"ug"),R1=[1105920,1112319];function U4(c){var a=c.replace(E4,""),e=J3(a,0),r=e>=R1[0]&&e<=R1[1],s=a.length===2?a[0]===a[1]:!1;return{value:U2(s?a[0]:a),isSecondary:r||s}}function E1(c,a){var e="".concat(k3).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=K(c.children),n=i.filter(function(q){return q.getAttribute(E2)===a})[0],f=E.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(T3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?e2[v][l[2].toLowerCase()]:B3[v][m],L=U4(z),N=L.value,b=L.isSecondary,k=l[0].startsWith("FontAwesome"),u=a1(V,N),d=u;if(k){var w=i4(N);w.iconName&&w.prefix&&(u=w.iconName,V=w.prefix)}if(u&&!b&&(!n||n.getAttribute($2)!==V||n.getAttribute(Q2)!==d)){c.setAttribute(e,d),n&&c.removeChild(n);var g=w4(),O=g.extra;O.attributes[E2]=a,G2(u,V).then(function(q){var k2=r1(t(t({},g),{},{icons:{main:q,mask:e1()},prefix:V,iconName:d,extra:O,watchable:!0})),F=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(F,c.firstChild):c.appendChild(F),F.outerHTML=k2.map(function(p3){return l2(p3)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function I4(c){return Promise.all([E1(c,"::before"),E1(c,"::after")])}function O4(c){return c.parentNode!==document.head&&!~y3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(E2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function U1(c){if(B)return new Promise(function(a,e){var r=K(c.querySelectorAll("*")).filter(O4).map(I4),s=s1.begin("searchPseudoElements");v3(),Promise.all(r).then(function(){s(),_2(),a()}).catch(function(){s(),_2(),e()})})}var q4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=U1,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?M:r;H.searchPseudoElements&&U1(s)}}},I1=!1,W4={mixout:function(){return{dom:{unwatch:function(){v3(),I1=!0}}}},hooks:function(){return{bootstrap:function(){B1(O2("mutationObserverCallbacks",{}))},noAuto:function(){N4()},watch:function(e){var r=e.observeMutationsRoot;I1?_2():B1(O2("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},O1=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return r.flipX=!0,r;if(n&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(n){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},G4={mixout:function(){return{parse:{transform:function(e){return O1(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=O1(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),V.path)}]}]}}}},F2={x:0,y:0,width:"100%",height:"100%"};function q1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function j4(c){return c.tag==="g"?c.children:[c]}var _4={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?b2(s.split(" ").map(function(n){return n.trim()})):e1();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=G3({transform:l,containerWidth:z,iconWidth:m}),L={tag:"rect",attributes:t(t({},F2),{},{fill:"white"})},N=o.children?{children:o.children.map(q1)}:{},b={tag:"g",attributes:t({},V.inner),children:[q1(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},k={tag:"g",attributes:t({},V.outer),children:[b]},u="mask-".concat(f||i2()),d="clip-".concat(f||i2()),w={tag:"mask",attributes:t(t({},F2),{},{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,k]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:j4(v)},w]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")")},F2)}),{children:r,attributes:s}}}},X4={provides:function(a){var e=!1;E.matchMedia&&(e=E.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Y4={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},$4=[X3,B4,F4,D4,R4,q4,W4,G4,_4,X4,Y4];l4($4,{mixoutsTo:x});var H6=x.noAuto,z6=x.config,v6=x.library,V6=x.dom,h3=x.parse,h6=x.findIconDefinition,M6=x.toHtml,M3=x.icon,p6=x.layer,Q4=x.text,K4=x.counter;var J4=["*"],Z4=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},c6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},a6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},e6=c=>c.prefix!==void 0&&c.iconName!==void 0,r6=(c,a)=>e6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},s6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=w2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),i6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...r){for(let s of r){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...r){for(let s of r){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(r,s){return r in this.definitions&&s in this.definitions[r]?this.definitions[r][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=w2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),n6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(r){if("size"in r)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=l1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[o2]});let c=a;return c})(),f6=(()=>{let a=class a{constructor(r,s){this.renderer=r,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(r){"size"in r&&(r.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${r.size.currentValue}`),r.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${r.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(D(m1),D(o1))},a.\u0275cmp=y2({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[o2,A2],ngContentSelectors:J4,decls:1,vars:0,template:function(s,i){s&1&&(v1(),V1(0))},encapsulation:2});let c=a;return c})(),b6=(()=>{let a=class a{set spin(r){this.animation=r?"spin":void 0}set pulse(r){this.animation=r?"spin-pulse":void 0}constructor(r,s,i,n,f){this.sanitizer=r,this.config=s,this.iconLibrary=i,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(r){if(this.icon==null&&this.config.fallbackIcon==null){c6();return}if(r){let s=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(s);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(r){let s=r6(r,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(Z4(s),null)}buildParams(){let r={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?h3.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:[...a6(r),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(r,s){let i=M3(r,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(s){return new(s||a)(D(h1),D(s6),D(i6),D(n6,8),D(f6,8))},a.\u0275cmp=y2({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(z1("innerHTML",i.renderedIconHTML,t1),H1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[o2,A2],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var S6=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=f1({type:a}),a.\u0275inj=n1({});let c=a;return c})();var w6={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]};var y6={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};var A6={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]};var P6={prefix:"fas",iconName:"lock-open",icon:[576,512,[],"f3c1","M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"]};var T6={prefix:"fas",iconName:"shop",icon:[640,512,["store-alt"],"f54f","M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"]};var B6={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};var l6={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},F6=l6;var D6={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]};var o6={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},R6=o6;var E6={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var U6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};var t6={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},I6=t6;var O6={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var q6={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var W6={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};var G6={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};export{b6 as a,S6 as b,w6 as c,y6 as d,A6 as e,P6 as f,T6 as g,B6 as h,l6 as i,F6 as j,D6 as k,R6 as l,E6 as m,U6 as n,I6 as o,O6 as p,q6 as q,W6 as r,G6 as s};
