!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("lodash/lodash.js")):"function"==typeof define&&define.amd?define(["exports","lodash/lodash.js"],b):b(a.jspmCaddy=a.jspmCaddy||{},a._)}(this,function(a,b){"use strict";b="default"in b?b["default"]:b;var c=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,e=function(a){return d.exec(a).slice(1)},f=function(a,b){if(a.filter)return a.filter(b);for(var c=[],d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c},g=function(a,b){for(var c=0,d=a.length-1;d>=0;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a},h=function(){for(var a="",b=!1,c=arguments.length-1;c>=-1&&!b;c--){var d=c>=0?arguments[c]:"/";if("string"!=typeof d)throw new TypeError("Arguments to path.resolve must be strings");d&&(a=d+"/"+a,b="/"===d.charAt(0))}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},i=function(a){var b=e(a),c=b[0],d=b[1];return c||d?(d&&(d=d.substr(0,d.length-1)),c+d):"."},j=window.System,k=!1,l=[],m=function(a){b.endsWith(a,".js")||(a+="!");var c=b.first(b.keys(j.bundles)),d=j.bundles[c],e=a===c||b.startsWith(a,c),f=s(a),g=b.includes(d,f),h=void 0;if(g){var i=o(f);b.each(i,function(a,b){q(b),l.push(b)});var k=b.pullAll(p(f),l);b.each(k,function(a){return q(a)}),b.last(k)&&l.push(b.last(k)),h=Promise.resolve()}else h=t(f);if(e){var m=b.map(l,function(a){return console.debug(a," re-imported."),r(a)});h=Promise.all(m),l=[]}return h},n=function(a){return b.startsWith(a,location.origin+"/jspm_packages")},o=function(a){var c=b.reject(b.keys(j.loads),n);return b.reduce(c,function(c,d){var e=j.loads[d].deps,f=b.some(e,function(b){return s(b,d)===a});return(a===d||f)&&(c[d]=b.map(e,function(a){return s(a,d)})),c},{})},p=function w(a){var c=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],d=o(a),e=b.findKey(d,function(c){return b.some(c,function(b){return b===a})});return e?(c.push(e),w(e,c)):c},q=function(a){if(a&&j.has(a)){var b=j.get(a);return b._unload&&b._unload(),j["delete"](a)}if(k)throw new Error("Failed to delete. because file("+a+") not imported yet.");console.debug("Failed to delete. because file("+a+") not imported yet.")},r=function(a){return j["import"](a).then(function(a){return a._reload&&a._reload(),a},function(b){if(k)throw b;console.warn("Failed to import file:("+a+"), error = ",b)})},s=function(a,c){var d=j.normalizeSync(a);if(j.has(d))return d;if(n(d))return d;var e=d;if(c&&b.endsWith(a,".js"))if(c=c.replace(location.origin,""),b.endsWith(c,".js")&&(c=i(c)),b.startsWith(a,".")){var f=h(c,a);e=""+location.origin+f}else e=""+location.origin+a;return b.endsWith(e,".js")||(e+=".js"),e},t=function(a){return q(a),r(a)},u=!1;console.debug=u?console.debug:b.noop;var v=function(a,d){var e,f=b.trimStart(a,"/");e=d?new WebSocket("ws://"+location.hostname+":"+d+"/"+f):new WebSocket("ws://"+location.host+"/"+f),e.onopen=function(a){console.debug("[watcher] websocket connection opened")},e.onmessage=function(a){if(b.startsWith(a.data,"data:")){var d=a.data.split(":"),e=c(d,3),f=(e[0],e[1]),g=e[2];console.debug("type = "+f+", filePath = "+g);var h=s(g);"changed"===f?m(g):"added"===f?r(h):"deleted"===f&&q(h)}else console.debug(a.data)},e.onclose=function(){console.debug("[watcher] websocket connection closed.")}};a["default"]=v,Object.defineProperty(a,"__esModule",{value:!0})});