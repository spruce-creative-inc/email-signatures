(self.webpackChunkspruce_email_signatures=self.webpackChunkspruce_email_signatures||[]).push([[678],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var c,u=r(t),l=i(u),s=o(a,l);if(e&&n!=n){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((e||s in u)&&u[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112)("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),a))?n:u?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t,n){for(var c=o(t),u=a.f,l=i.f,s=0;s<c.length;s++){var f=c[s];r(e,f)||n&&r(n,f)||u(e,f,l(t,f))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);e.exports=function(e,t,n,c){c||(c={});var u=c.enumerable,l=void 0!==c.name?c.name:t;if(r(n)&&i(n,l,c),c.global)u?e[t]=n:a(t,n);else{try{c.unsafe?e[t]&&(u=!0):delete e[t]}catch(s){}u?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),c=i.process,u=i.Deno,l=c&&c.versions||u&&u.version,s=l&&l.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),c=n(3072),u=n(9920),l=n(4705);e.exports=function(e,t){var n,s,f,p,m,h=e.target,v=e.global,d=e.stat;if(n=v?r:d?r[h]||c(h,{}):(r[h]||{}).prototype)for(s in t){if(p=t[s],f=e.dontCallGetSet?(m=o(n,s))&&m.value:n[s],!l(v?s:h+(d?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&i(p,"sham",!0),a(n,s,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,l=c&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:c,PROPER:u,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},647:function(e,t,n){var r=n(1702),o=n(7908),i=Math.floor,a=r("".charAt),c=r("".replace),u=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,p){var m=n+e.length,h=r.length,v=s;return void 0!==f&&(f=o(f),v=l),c(p,v,(function(o,c){var l;switch(a(c,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,n);case"'":return u(t,m);case"<":l=f[u(c,1,-1)];break;default:var s=+c;if(0===s)return o;if(s>h){var p=i(s/10);return 0===p?o:p<=h?void 0===r[p-1]?a(c,1):r[p-1]+a(c,1):o}l=r[s-1]}return void 0===l?"":l}))}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,c=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?c(e,""):a(e)}:a},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,a=n(4811),c=n(7854),u=n(111),l=n(8880),s=n(2597),f=n(5465),p=n(6200),m=n(3501),h="Object already initialized",v=c.TypeError,d=c.WeakMap;if(a||f.state){var g=f.state||(f.state=new d);g.get=g.get,g.has=g.has,g.set=g.set,r=function(e,t){if(g.has(e))throw v(h);return t.facade=e,g.set(e,t),t},o=function(e){return g.get(e)||{}},i=function(e){return g.has(e)}}else{var y=p("state");m[y]=!0,r=function(e,t){if(s(e,y))throw v(h);return t.facade=e,l(e,y,t),t},o=function(e){return s(e,y)?e[y]:{}},i=function(e){return s(e,y)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}}}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=u[c(e)];return n==s||n!=l&&(o(t)?r(t):!!t)},c=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},u=a.data={},l=a.NATIVE="N",s=a.POLYFILL="P";e.exports=a},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},7850:function(e,t,n){var r=n(111),o=n(4326),i=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),c=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),a=n(2597),c=n(9781),u=n(6530).CONFIGURABLE,l=n(2788),s=n(9909),f=s.enforce,p=s.get,m=String,h=Object.defineProperty,v=r("".slice),d=r("".replace),g=r([].join),y=c&&!o((function(){return 8!==h((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===v(m(t),0,7)&&(t="["+d(m(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!a(e,"name")||u&&e.name!==t)&&(c?h(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&a(n,"arity")&&e.length!==n.arity&&h(e,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?c&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=f(e);return a(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return i(this)&&p(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),c=n(4948),u=TypeError,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",m="writable";t.f=r?i?function(e,t,n){if(a(e),t=c(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&m in n&&!n[m]){var r=s(e,t);r&&r[m]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),c=n(5656),u=n(4948),l=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=c(e),t=u(t),s)try{return f(e,t)}catch(n){}if(l(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,c=n(3501),u=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,s=[];for(n in r)!o(c,n)&&o(r,n)&&u(s,n);for(;t.length>l;)o(r,n=t[l++])&&(~a(s,n)||u(s,n));return s}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!i(c=r(n,e)))return c;if(o(n=e.valueOf)&&!i(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!i(c=r(n,e)))return c;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),c=n(9670),u=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(c(e)),n=a.f;return n?u(t,n(e)):t}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4706:function(e,t,n){var r=n(6916),o=n(2597),i=n(7976),a=n(7066),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||o(e,"flags")||!i(c,e)?t:r(a,e)}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293),i=n(7854).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),c=n(2140),u=n(5112),l=TypeError,s=u("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,u=a(e,s);if(u){if(void 0===t&&(t="default"),n=r(u,e,t),!o(n)||i(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),c=n(6293),u=n(3307),l=r.Symbol,s=o("wks"),f=u?l.for||l:l&&l.withoutSetter||a;e.exports=function(e){return i(s,e)||(s[e]=c&&i(l,e)?l[e]:f("Symbol."+e)),s[e]}},8757:function(e,t,n){"use strict";var r=n(2109),o=n(6916),i=n(1702),a=n(4488),c=n(614),u=n(8554),l=n(7850),s=n(1340),f=n(8173),p=n(4706),m=n(647),h=n(5112),v=n(1913),d=h("replace"),g=TypeError,y=i("".indexOf),b=i("".replace),w=i("".slice),x=Math.max,S=function(e,t,n){return n>e.length?-1:""===t?n:y(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,i,h,E,k,O,N,j,C=a(this),I=0,P=0,D="";if(!u(e)){if((n=l(e))&&(r=s(a(p(e))),!~y(r,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(i=f(e,d))return o(i,e,C,t);if(v&&n)return b(s(C),e,t)}for(h=s(C),E=s(e),(k=c(t))||(t=s(t)),O=E.length,N=x(1,O),I=S(h,E,0);-1!==I;)j=k?s(t(E,I,h)):m(E,h,I,[],void 0,t),D+=w(h,P,I)+j,P=I+O,I=S(h,E,I+N);return P<h.length&&(D+=w(h,P)),D}})},7207:function(e,t,n){n(8757)},6558:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return d}});n(7207);var r=n(7294);const o=[{fName:"Adam",lName:"Robillard",pronouns:"he/him",title:"Web Designer & Developer",icon:1,linkedIn:"https://www.linkedin.com/in/adam-robillard/"},{fName:"Amanda",lName:"McMillan",pronouns:"she/her",title:"Director of Brand Development",icon:2,linkedIn:"https://www.linkedin.com/in/amanda-mcmillan-07339522/"},{fName:"Andrew",lName:"Vincent",pronouns:"he/him",title:"Partner & Content Director",icon:3,linkedIn:"https://www.linkedin.com/in/andrew-vincent-a8bb7814/"},{fName:"Christopher",lName:"McCluskey",pronouns:"he/him",title:"Art Director",icon:4},{fName:"Cindy",lName:"MacBride",pronouns:"she/her",title:"Director of Client Experience",icon:5,linkedIn:"https://www.linkedin.com/in/cindy-macbride-4a156226/"},{fName:"Danielle",lName:"Galacio",pronouns:"she/her",title:"Graphic Designer",icon:6,linkedIn:"https://www.linkedin.com/in/danielle-galacio/"},{fName:"Guy",lName:"Freedman",pronouns:"he/him",title:"Partner & Advisor",icon:7,linkedIn:"https://www.linkedin.com/in/guy-freedman-26979062/"},{fName:"Janik",lName:"Bastide",pronouns:"she/her",title:"Account Manager",icon:1,linkedIn:"https://www.linkedin.com/in/janikbastide/"},{fName:"Joseph",lName:"Mathieu",pronouns:"he/him",title:"Writer & Project Manager",icon:2,linkedIn:"https://www.linkedin.com/in/josephrmathieu/"},{fName:"Nadia",lName:"Collins",pronouns:"she/her",title:"Art Director",icon:3,linkedIn:"https://www.linkedin.com/in/nadia-collins-00b66412/"},{fName:"Nina",lName:"Jane Drystek",pronouns:"she/her",title:"Manager of Digital Communications",icon:4,linkedIn:"https://www.linkedin.com/in/nina-jane-drystek-2211108b/"},{fName:"Paul",lName:"Marconi",pronouns:"he/him",title:"Partner & Creative Director",icon:5,linkedIn:"https://www.linkedin.com/in/paulmarconi/"},{fName:"Pascal",lName:"Huot",pronouns:"he/him",title:"Creative Producer",icon:6},{fName:"Rose",lName:"Seto",pronouns:"she/her",title:"Web Developer",icon:7,linkedIn:"https://www.linkedin.com/in/roseseto/"},{fName:"Sho",lName:"Sengupta",pronouns:"he/him",title:"Communications & Account Strategist ",icon:1,linkedIn:"https://www.linkedin.com/in/shohini-sho-sengupta/"}],i="Athletics, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",a={fontFamily:i},c={borderBottom:"0.0625rem solid #ccc",marginTop:"2em"},u={color:"#e4526d",fontSize:"1.5rem",fontFamily:"'Lust Text', Georgia, 'Times New Roman', Times, serif",fontWeight:400},l={fontSize:"1.375rem",fontWeight:"400",fontFamily:i},s={fontSize:"1.25rem",fontWeight:"400",fontFamily:i,margin:"0 0 1rem"},f={width:"3.25rem",display:"block",marginBottom:"1rem"},p={color:"inherit",textDecoration:"none",display:"block",fontSize:"1.125rem",marginBottom:"0.25rem",fontFamily:i},m={textDecoration:"underline"},h={marginBottom:"1rem"},v={width:"7.8125rem",marginBottom:"1.5rem"};t.default=()=>r.createElement("main",{style:a},r.createElement("h1",null,"Spruce Email Signatures"),r.createElement("section",{id:"introduction"},r.createElement("h2",{style:c},"Instructions"),r.createElement("h3",null,"Gmail (in browsers)"),r.createElement("ol",null,r.createElement("li",null,"Go to settings gear icon ",">"," ",r.createElement("strong",null,"See all settings")," ","button"),r.createElement("li",null,"Scroll down to ",r.createElement("strong",null,"Signature")),r.createElement("li",null,"On this website, highlight all content from your signature from name through logo."),r.createElement("li",null,"Copy paste into signature edit box. All styling should copy over properly.")),r.createElement("h3",null,"HTML Signature"),r.createElement("p",null,"Some email clients need the actual html to style properly. Follow these easy steps"),r.createElement("ol",null,r.createElement("li",null,"Click the ",r.createElement("strong",null,"Copy as Code")," button for your signature, it will add the html code to your clipboard"),r.createElement("li",null,"Find the signature settings in your client"),r.createElement("li",null,"Paste it in code signature box if it exists")),r.createElement("p",null,"If you are not sure how to set it up for your specific email client, check in with Adam and he will get you sorted.")),r.createElement("section",{id:"signatures"},r.createElement("h2",{style:c},"Signatures"),o.map((e=>{let{fName:t,lName:n,pronouns:o,title:i,icon:a,linkedIn:c}=e;return r.createElement("div",{key:n},r.createElement("div",{id:n},r.createElement("div",null,r.createElement("strong",{style:u},t+" "+n," ",r.createElement("span",{style:l},"(",o,")")),r.createElement("p",{style:s},i)),r.createElement("img",{src:"https://sprucecreative.ca/wp-content/uploads/2023/05/icon-"+a+".png",style:f}),r.createElement("div",null,r.createElement("a",{style:p,href:"mailto:"+t.toLowerCase()+"@sprucecreative.ca"},t.toLowerCase(),"@sprucecreative.ca")),c&&r.createElement("div",null,r.createElement("a",{style:{...p,...m},href:c},"Connect with me on LinkedIn")),r.createElement("div",null,r.createElement("a",{style:{...p,...h},href:"https://sprucecreative.ca"},"sprucecreative.ca")),r.createElement("div",null,r.createElement("a",{href:"https://sprucecreative.ca"},r.createElement("img",{style:v,src:"https://sprucecreative.ca/wp-content/uploads/2023/05/spruce-logo-radish.png",alt:"Spruce Creative"})))),r.createElement("div",{style:{height:"20px"}}),r.createElement("button",{onClick:e=>function(e,t){const n=e.target;n.textContent="Copied!",setTimeout((()=>{n.textContent="Copy as Code"}),2e3);const r=document.getElementById(t).innerHTML.replaceAll("&quot;","'");navigator.clipboard.writeText(r).then((()=>{console.log("success")}),(()=>{console.log("fail")}))}(e,n)},"Copy as Code"),r.createElement("div",{style:{height:"100px"}}))}))));const d=()=>r.createElement("title",null,"Spruce Email Signatures")}}]);
//# sourceMappingURL=component---src-pages-index-js-bd4deb66153bb6d28b36.js.map