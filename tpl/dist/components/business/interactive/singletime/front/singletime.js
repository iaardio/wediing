define("/tpl/dist/components/business/interactive/singletime/front/singletime",["coms/frontbase","pages/constants","lib/utils/tips","lib/utils/comUtils"],function(t,e,n){"use strict";var i=t("coms/frontbase");t("pages/constants"),t("lib/utils/tips"),t("lib/utils/comUtils");return{init:function(t,e,n){var s=new i(t.attrs,e);s.init(t);var a,o=t.data,r=(o.formID,o.endDateTime),l=$(s.data.dom),f=function(t){var e=t.replace(/-/g,"/"),n=new Date(e),i=new Date,s=n.getTime()-i.getTime(),o=0,r=0,f=0,c=0;if(s>0){var u=parseInt(s/1e3);o=Math.floor(u/86400),r=Math.floor((u-24*o*60*60)/3600),f=Math.floor((u-24*o*60*60-3600*r)/60),c=Math.floor(u-24*o*60*60-3600*r-60*f)}else console.info("到期了..."),clearInterval(a);l.find(".s-date").text(o),l.find(".s-hour").text(r),l.find(".s-minute").text(f),l.find(".s-second").text(c)};f(r);var c=function(){a=setInterval(function(){f(r)},1e3)};return c(),s}}});