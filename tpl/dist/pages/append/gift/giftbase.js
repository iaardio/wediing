define("pages/append/gift/giftbase",["lib/utils/comUtils","lib/utils/wxUtils","lib/zepto-plugin/touch","lib/swiper/swiper.min"],function(i){var e=i("lib/utils/comUtils"),t=(i("lib/utils/wxUtils"),i("lib/zepto-plugin/touch")),n=(i("lib/swiper/swiper.min"),function(i){this.evtType=(e.isMobile(),"click"),this.renderGiftRankingFun="",this.$container="",this.giftTpl="",n._init.call(this,i)});return n.fn=n.prototype,n._init=function(i){i=t.extend({sitecode:"",schemecode:"",pageSize:8,imghost:"",sitetype:"0"},i),this.sitecode=i.sitecode,this.schemecode=i.schemecode,this.pageSize=i.pageSize,this.imghost=i.imghost,this.giftPlayIntervalId="",this.sitetype=i.sitetype,this.giftArray=n._giftList.call(this)},n._giftList=function(){var i=new Array,e=0,t=0;return i.put=function(t){i.push(t),e++},i.first=function(t){i.unshift(t),e++},i.rightPut=function(n){i.splice(t,0,n),e++},i.getDif=function(){if(e>0){var n=i[t];return t<e-1?t++:t=0,n}return null},i.init=function(){i.length=0},i},n.fn.playGifts=function(){var i=this;if(!i.giftPlayIntervalId){var n=i.giftArray.getDif(),a=e.simpleTemplate(n,i.giftTpl),o=t(a).appendTo(i.$container),r=Math.floor(241*Math.random());o.css("top",r),o[0].addEventListener("webkitAnimationEnd",function(){o.remove()},!1),this.giftPlayIntervalId=setInterval(function(){var n=i.giftArray.getDif(),a=n.giftcode,o=i.$container.find("#gift_"+a);if(o.length<=0){var r=e.simpleTemplate(n,i.giftTpl),s=t(r).appendTo(i.$container),f=Math.floor(241*Math.random());s.css("top",f),s[0].addEventListener("webkitAnimationEnd",function(){s.remove()},!1)}},2500)}},n.fn.stopPlayGifts=function(){this.giftPlayIntervalId&&clearInterval(this.giftPlayIntervalId),this.giftPlayIntervalId=""},n.fn.getSenderSort=function(){var i=this.giftArray||[],e=new Array;for(var t in i){var n=i[t];if("a1"!=n.giftcode&&n.giftPrice){var a="";for(var o in e){var r=e[o];if(r.guestcode==n.guestcode){a=r;break}}if(a){var s=parseFloat(n.giftPrice)+parseFloat(a.money);a.money=Math.floor(100*s)/100}else a={guestcode:n.guestcode,sender:n.sender,money:parseFloat(n.giftPrice)},e.push(a)}}e.sort(function(i,e){return i.money<e.money?1:i.money>e.money?-1:0});var f=new Array,c=e[0]||{nickname:"",money:"0"},d=e[1]||{nickname:"",money:"0"},g=e[2]||{nickname:"",money:"0"};return f.push(c),f.push(d),f.push(g),f},n.fn.addGift=function(i){var e=this;if(i.imghost=this.imghost,this.giftArray.first(i),e.renderGiftRankingFun){var t=e.getSenderSort();e.renderGiftRankingFun(t)}},n.fn.firstAddGift=function(){if("1001"==this.schemecode){var i={giftcode:"a1",giftName:"百合花",giftType:"VIRTUAL_GIFT",iconImg:"gift-cloud/gifts/baihe.png",sender:"微请柬"};i.imghost=this.imghost,this.giftArray.put(i)}else{var i={giftcode:"a1",giftName:"祝福",giftType:"VIRTUAL_GIFT",iconImg:"gift-cloud/gifts/fuwa.png",sender:"微请柬"};i.imghost=this.imghost,this.giftArray.put(i)}},n.fn.initShowGifts=function(i,t,n){i.empty();var a=this;this.giftArray.init(),a.$container=i,a.giftTpl=t;var o={sitecode:a.sitecode};"1"==a.sitetype&&(o={sitecode:a.sitecode,schemecode:a.schemecode}),e.ajax.getJSON("/ci/gift/show/queryGifts",o,function(i){if(200==i.ecode){var e=i.data;e.length<=0&&a.firstAddGift();for(var t=0;t<e.length;t++){var o=e[t];o.imghost=a.imghost,a.giftArray.put(o)}if(!(a.giftArray.length<=0)&&(a.playGifts(),n)){a.renderGiftRankingFun=n;var r=a.getSenderSort();a.renderGiftRankingFun(r)}}})},n.fn.initGiftCommods=function(i,n){var a=i.find(".swiper-wrapper").empty(),o=this;e.ajax.getJSON("/ci/gift/pay/queryCommods",{schemecode:o.schemecode},function(r){if(200==r.ecode){var s=r.data,f=new Array,c=0;f[0]=new Array;for(var d=0;d<s.length;d++)d>0&&d%o.pageSize==0?(c++,f[c]=new Array,f[c].push(s[d])):f[c].push(s[d]);for(var g in f){var p=t('<li class="swiper-slide"/>');for(var d in f[g]){var h=f[g][d];h.imghost=o.imghost;var l=e.simpleTemplate(h,n);t(l).appendTo(p)}a.append(p)}var m=i.find(".pagination").get(0),y=i.find(".swiper-container");new Swiper(y,{pagination:m})}})},n.fn.giftToPay=function(i,n){var a=this;e.isWeixin()?(e.Loading.show("支付加载中"),e.ajax.postJSON("/ci/gift/pay/toWechatPay",{ordercode:i,paywaycode:n},function(i){if(e.Loading.hide(),200===i.ecode){var n=i.data;wx.ready(function(){wx.chooseWXPay({timestamp:n.timeStamp,nonceStr:n.nonceStr,package:n.prepay,signType:"MD5",paySign:n.sign,success:function(i){e.ajax.getJSON("/ci/gift/pay/result",{paydetailcode:n.paydetailcode},function(i){if(200==i.ecode){var n=i.data;"VIRTUAL_GIFT"==n.giftType?a.addGift(n):"CASH_GIFT"==n.giftType&&(t(".send-redpack").hide(),e.Toast.show("info","恭喜，红包发送成功！"))}})},fail:function(i){console.info(i)}})})}else e.Toast.show("info",i.msg)})):e.Toast.show("info",a.notWechatTip)},n.fn.createGiftOrder=function(i,t,n){var a=this;e.Loading.show(),e.ajax.postJSON("/ci/gift/pay/createOrder",{commonditycode:t,sitecode:i,sender:n},function(i){if(e.Loading.hide(),200===i.ecode){var t=i.data;if(console.info(t),t.certify.certifycode){var n=t.certify,o="<div class='pay-confirm'>请确认微信<span class='headicon'><img src='{{weHeadIcon}}'/></span>为您真实亲友，礼品金额可由其提现至其微信零钱</div>";n.certifyName&&(o="<div class='pay-confirm'>请确认微信<span class='headicon'><img src='{{weHeadIcon}}'/></span>({{certifyName}})为您亲友，礼品金额可由其提现至其微信零钱</div>");var r=e.simpleTemplate(n,o),s=function(){a.giftToPay(t.ordercode,"2082")};e.ConfirmDialog.show({content:r,okFun:s})}else e.ConfirmDialog.show({content:"当前请柬暂未进行实名认证，请确认请柬是由邀请人直接发送给您，邀请人实名认证以后，礼品金额可提现至其微信零钱",okFun:s})}else e.Toptips.show("warn",i.msg)})},n.fn.createCashOrder=function(i,t,n){var a=this;e.Loading.show(),e.ajax.postJSON("/ci/gift/pay/createRedPackageOrder",{money:t,sitecode:i,sender:n},function(i){if(e.Loading.hide(),console.info(i),200===i.ecode){var t=i.data;if(console.info(t),t.certify.certifycode){var n=t.certify,o="<div class='pay-confirm'>请确认微信<span class='headicon'><img src='{{weHeadIcon}}'/></span>为您真实亲友，礼品金额可由其提现至其微信零钱</div>";n.certifyName&&(o="<div class='pay-confirm'>请确认微信<span class='headicon'><img src='{{weHeadIcon}}'/></span>({{certifyName}})为您亲友，礼品金额可由其提现至其微信零钱</div>");var r=e.simpleTemplate(n,o),s=function(){a.giftToPay(t.ordercode,"2082")};e.ConfirmDialog.show({content:r,okFun:s})}else e.ConfirmDialog.show({content:"当前请柬暂未进行实名认证，请确认请柬是由邀请人直接发送给您，邀请人实名认证以后，礼品金额可提现至其微信零钱",okFun:s})}else e.Toptips.show("warn",i.msg)})},n});