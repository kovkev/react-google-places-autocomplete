(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(73)),c={id:"get-lat-lng",title:"Get Latitude and Longitude",sidebar_label:"Get Latitude and Longitude"},l={unversionedId:"get-lat-lng",id:"get-lat-lng",isDocsHomePage:!1,title:"Get Latitude and Longitude",description:"This functions allows to get the latitude and longitude of a geocoder result.",source:"@site/docs/get-lat-long.md",permalink:"/react-google-places-autocomplete/docs/get-lat-lng",editUrl:"https://github.com/tintef/react-google-places-autocomplete/edit/master/docs/docs/get-lat-long.md",sidebar_label:"Get Latitude and Longitude",sidebar:"docs",previous:{title:"Geocode by Address",permalink:"/react-google-places-autocomplete/docs/geocode-by-address"},next:{title:"How to contribute?",permalink:"/react-google-places-autocomplete/docs/how-to-contribute"}},i=[{value:"Firm",id:"firm",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This functions allows to get the latitude and longitude of a geocoder result."),Object(a.b)("h2",{id:"firm"},"Firm"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const getLatLng = (result: google.maps.GeocoderResult): Promise<any>;\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';\n\ngeocodeByAddress('Montevideo, Uruguay')\n  .then(results => getLatLng(results[0]))\n  .then(({ lat, lng }) =>\n    console.log('Successfully got latitude and longitude', { lat, lng })\n  );\n")))}s.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);