System.register("chunks:///_virtual/HelloWorld.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,r,n;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,r=o._decorator,n=o.Component}],execute:function(){var l;e._RF.push({},"f89a1UR1X1A/qSgS7ESPpxe","HelloWorld",void 0);var c=r.ccclass;r.property,o("HelloWorld",c("HelloWorld")(l=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var r=e.prototype;return r.start=function(){console.info("Hello World")},r.update=function(o){},e}(n))||l);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./HelloWorld.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});