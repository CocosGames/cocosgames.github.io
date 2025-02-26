System.register("chunks:///_virtual/ad_event.ts",["cc"],(function(E){var _;return{setters:[function(E){_=E.cclegacy}],execute:function(){_._RF.push({},"784c0epcWNLLpmtcHCl46Gk","ad_event",void 0);E("PrerollAdEvent",function(E){return E.AD_BREAK_DONE="H5GA_EVENT_PREROLL_AD_BREAK_DONE",E}({})),E("InterstitialAdEvent",function(E){return E.BEFORE_AD="H5GA_EVENT_INTERSTITIAL_BEFORE_AD",E.AFTER_AD="H5GA_EVENT_INTERSTITIAL_AFTER_AD",E.AD_BREAK_DONE="H5GA_EVENT_INTERSTITIAL_AD_BREAK_DONE",E}({})),E("RewardedVideoAdEvent",function(E){return E.BEFORE_AD="H5GA_EVENT_REWARDED_VIDEO_BEFORE_AD",E.AFTER_AD="H5GA_EVENT_REWARDED_VIDEO_AFTER_AD",E.AD_BREAK_DONE="H5GA_EVENT_REWARDED_VIDEO_AD_BREAK_DONE",E.BEFORE_REWARD="H5GA_EVENT_REWARDED_VIDEO_BEFORE_REWARD",E.AD_DISMISSED="H5GA_EVENT_REWARDED_VIDEO_AD_DISMISSED",E.AD_VIEWED="H5GA_EVENT_REWARDED_VIDEO_AD_VIEWED",E}({}));_._RF.pop()}}}));

System.register("chunks:///_virtual/h5_games_ads.ts",["cc","./ad_event.ts"],(function(e){var t,n,o,i,r;return{setters:[function(e){t=e.cclegacy,n=e.game},function(e){o=e.PrerollAdEvent,i=e.InterstitialAdEvent,r=e.RewardedVideoAdEvent}],execute:function(){e({requestRewardedAd:function(e){try{var t=n;c({type:"reward",name:e,beforeAd:function(){t.emit(r.BEFORE_AD)},afterAd:function(){t.emit(r.AFTER_AD)},adBreakDone:function(e){t.emit(r.AD_BREAK_DONE)},beforeReward:function(e){a=e,t.emit(r.BEFORE_REWARD)},adDismissed:function(){t.emit(r.AD_DISMISSED)},adViewed:function(){t.emit(r.AD_VIEWED)}})}catch(e){console.log(e)}},showInterstitialAd:function(e,t){try{var o=n;c({type:e,name:t,beforeAd:function(){o.emit(i.BEFORE_AD)},afterAd:function(){o.emit(i.AFTER_AD)},adBreakDone:function(e){o.emit(i.AD_BREAK_DONE)}})}catch(e){console.log(e)}},showPrerollAd:function(){try{var e=n;c({type:"preroll",adBreakDone:function(t){e.emit(o.AD_BREAK_DONE)}})}catch(e){console.log(e)}},showRewardedAd:function(){if(!a)return void console.log("No Rewarded Ad available");a(),a=null}}),t._RF.push({},"90557fD3VxKLZVjqrByvLyt","h5_games_ads",void 0);var a,d=window.adsbygoogle,c=function(e){d.push(e)};t._RF.pop()}}}));

System.register("chunks:///_virtual/interstitial_callback.ts",["cc"],(function(){var t;return{setters:[function(c){t=c.cclegacy}],execute:function(){t._RF.push({},"eaf04UKSuVKEouQnm7MERP5","interstitial_callback",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/interstitial_type.ts",["cc"],(function(t){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"f81e3aDmtdC94G4YFIr677I","interstitial_type",void 0);t("InterstitialType",function(t){return t.START="start",t.PAUSE="pause",t.NEXT="next",t.BROWSE="browse",t}({}));e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Test.ts","./ad_event.ts","./h5_games_ads.ts","./interstitial_callback.ts","./interstitial_type.ts","./preroll_callback.ts","./rewarded_callback.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/preroll_callback.ts",["cc"],(function(){var c;return{setters:[function(r){c=r.cclegacy}],execute:function(){c._RF.push({},"0b0f5/UPN5CQoEO8a7Urkur","preroll_callback",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/rewarded_callback.ts",["cc"],(function(){var c;return{setters:[function(e){c=e.cclegacy}],execute:function(){c._RF.push({},"154a1RJ5klEjap+6xZ1Illy","rewarded_callback",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/Test.ts",["./rollupPluginModLoBabelHelpers.js","cc","./h5_games_ads.ts","./interstitial_type.ts"],(function(t){var e,n,r,i,o,a,s,c,l,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,s=t.sp,c=t.Component},function(t){l=t.showInterstitialAd},function(t){p=t.InterstitialType}],execute:function(){var u,f,y,h,d;o._RF.push({},"a9312ay25JAj6bz/qgYIB9C","Test",void 0);var _=a.ccclass,g=a.property;t("Test",(u=_("Test"),f=g({type:s.Skeleton}),u((d=e((h=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,r(e,"a",d,i(e)),e}return n(e,t),e.prototype.onLoad=function(){l(p.NEXT,"placement_name")},e}(c)).prototype,"a",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=h))||y));o._RF.pop()}}}));

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