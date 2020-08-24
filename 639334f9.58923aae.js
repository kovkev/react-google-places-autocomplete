(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var o=r(2),n=r(6),c=(r(0),r(73)),a={id:"geocode-by-place-id",title:"Geocode by Place ID",sidebar_label:"Geocode by Place ID"},l={unversionedId:"geocode-by-place-id",id:"geocode-by-place-id",isDocsHomePage:!1,title:"Geocode by Place ID",description:"This functions allows to get result by a place id using Google Maps Geocoder.",source:"@site/docs/geocode-by-place-id.md",permalink:"/react-google-places-autocomplete/docs/geocode-by-place-id",editUrl:"https://github.com/tintef/react-google-places-autocomplete/edit/master/docs/docs/geocode-by-place-id.md",sidebar_label:"Geocode by Place ID",sidebar:"docs",previous:{title:"Migrate to v3",permalink:"/react-google-places-autocomplete/docs/v2-to-v3"},next:{title:"Geocode by Address",permalink:"/react-google-places-autocomplete/docs/geocode-by-address"}},i=[{value:"Firm",id:"firm",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:i};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This functions allows to get result by a place id using ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/maps/documentation/javascript/geocoding"}),"Google Maps Geocoder"),"."),Object(c.b)("h2",{id:"firm"},"Firm"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"const geocodeByPlaceId = (placeId: string): Promise<google.maps.GeocoderResult[]>;\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { geocodeByPlaceId } from 'react-google-places-autocomplete';\n\ngeocodeByPlaceId('ChIJH_imbZDuDzkR2AjlbPGYKVE')\n  .then(results => console.log(results))\n  .catch(error => console.error(error));\n")))}s.isMDXComponent=!0},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return g}));var o=r(0),n=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,g=d["".concat(a,".").concat(b)]||d[b]||u[b]||c;return r?n.a.createElement(g,l(l({ref:t},p),{},{components:r})):n.a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=r[p];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);