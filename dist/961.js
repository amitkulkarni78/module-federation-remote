/*! For license information please see 961.js.LICENSE.txt */
"use strict";(self.webpackChunkremote=self.webpackChunkremote||[]).push([[961],{221:(e,t,i)=>{var r=i(2);function n(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(n(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal"),c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,t.createPortal=function(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(n(299));return function(e,t,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:f,key:null==r?null:""+r,children:e,containerInfo:t,implementation:i}}(e,t,null,i)},t.flushSync=function(e){var t=c.T,i=s.p;try{if(c.T=null,s.p=2,e)return e()}finally{c.T=t,s.p=i,s.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,s.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&s.d.D(e)},t.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var i=t.as,r=y(i,t.crossOrigin),n="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===i?s.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:n,fetchPriority:o}):"script"===i&&s.d.X(e,{crossOrigin:r,integrity:n,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var i=y(t.as,t.crossOrigin);s.d.M(e,{crossOrigin:i,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&s.d.M(e)},t.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var i=t.as,r=y(i,t.crossOrigin);s.d.L(e,i,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"==typeof e)if(t){var i=y(t.as,t.crossOrigin);s.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:i,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else s.d.m(e)},t.requestFormReset=function(e){s.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,i){return c.H.useFormState(e,t,i)},t.useFormStatus=function(){return c.H.useHostTransitionStatus()},t.version="19.0.0"},961:(e,t,i)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=i(221)}}]);