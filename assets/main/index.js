System.register("chunks:///_virtual/DeckScript.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,e,i,o,n,c,a,s,l,d,p;return{setters:[function(t){r=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,c=t._decorator,a=t.Node,s=t.instantiate,l=t.tween,d=t.v3,p=t.Component}],execute:function(){var u,f,h,v,k,y,S;n._RF.push({},"0edddhc2ZVIz4t7dn5M/nXJ","DeckScript",void 0);var g=c.ccclass,w=c.property;t("DeckScript",(u=g("DeckScript"),f=w({type:a}),h=w([a]),u((y=r((k=function(t){function r(){for(var r,e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return(r=t.call.apply(t,[this].concat(n))||this).deck=void 0,i(r,"card",y,o(r)),i(r,"cardStacks",S,o(r)),r}e(r,t);var n=r.prototype;return n.start=function(){this.deck=new Int8Array(52);for(var t=0;t<52;t++)this.deck[t]=t+1;console.info("Hello World "+this.deck[5]),this.nextGame(),console.info("Finished")},n.nextGame=function(){var t;console.log("Started for loops"),t=[];for(var r=0,e=1;e<8;e++)for(var i=e;i<8;i++){var o=s(this.card);o.parent=this.card.parent,o.position=this.card.position,t[r]=l(o).to(.3,{worldPosition:d(this.cardStacks[i-1].worldPosition.x,this.cardStacks[i-1].worldPosition.y-5*(e-1))}),r++}for(var n=t[0],c=1;c<t.length;c++)t[c].start();n.start()},r}(p)).prototype,"card",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=r(k.prototype,"cardStacks",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=k))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameItem.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.director,c=t.Component}],execute:function(){var i;n._RF.push({},"08584K56a5CdIusFBVWlPIP","GameItem",void 0);var u=o.ccclass;o.property,t("GameItem",u("GameItem")(i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){},o.openGame=function(){r.loadScene("solitaire")},n}(c))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,a,i,o,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){i=e.cclegacy,o=e._decorator,c=e.Node,u=e.Component}],execute:function(){var s,l,p,f,y;i._RF.push({},"66f22uKmrtOHo2ZuJMHnE8A","GameManager",void 0);var d=o.ccclass,g=o.property;e("GameManager",(s=d("GameManager"),l=g({type:c}),s((y=t((f=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,n(t,"deckObject",y,a(t)),t}r(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){},i.InitGame=function(){},t}(u)).prototype,"deckObject",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p));i._RF.pop()}}}));

System.register("chunks:///_virtual/HelloWorld.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,r,n;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,r=o._decorator,n=o.Component}],execute:function(){var l;e._RF.push({},"f89a1UR1X1A/qSgS7ESPpxe","HelloWorld",void 0);var c=r.ccclass;r.property,o("HelloWorld",c("HelloWorld")(l=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var r=e.prototype;return r.start=function(){console.info("Hello World")},r.update=function(o){},e}(n))||l);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./DeckScript.ts","./GameItem.ts","./GameManager.ts","./HelloWorld.ts","./TournamentManager.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TournamentManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var a,n,e,r,o;return{setters:[function(t){a=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,r=t.sys,o=t.Component}],execute:function(){var s;n._RF.push({},"2f0a17OeslHiaI2YEYGpPyY","TournamentManager",void 0);var u=e.ccclass;e.property,t("TournamentManager",u("TournamentManager")(s=function(t){function n(){return t.apply(this,arguments)||this}a(n,t);var e=n.prototype;return e.start=function(){r.localStorage.setItem("gameParams","null"),this.InitGameParams(r.localStorage.getItem("gameParams"))},e.update=function(t){},e.InitGameParams=function(t){this.LoadTournamentData(t)},e.LoadTournamentData=function(t){},n}(o))||s);n._RF.pop()}}}));

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