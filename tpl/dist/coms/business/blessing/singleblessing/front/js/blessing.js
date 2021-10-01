define("coms/business/blessing/singleblessing/front/js/blessing",["pages/append/blessing/blessing.css","lib/utils/comUtils","lib/weui/picker","pages/append/gift/giftbase"],function(i){var s='<div class="blessing-message tools-bar"><div class="gift-show"></div><div class="ndmlist"><ul class="tab wish-list"></ul><ul class="tab wish-list-copy"></ul></div><!--礼物展示区域1--><div class="lwljzshow"></div><!--祝福展示区域--><div class="wishes-sender"><div class="sender-bar"><div class="ndm-btn"></div><div class="cdmbtn">留下祝福</div></div><div class="gift-btn to-send-gift"><div class="gift-icon"><img src="/tpl/pages/append/blessing/img/gift-icon.png?v=1.2"></div><span class="lwljbtn_anim"style="animation: lwlj_love_animation1 4s both infinite; animation-delay: 0.1s; background-position: -5px -50px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation2 4s both infinite; animation-delay: 0.4s; background-position: -5px 0px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation3 4s both infinite; animation-delay: 0.7s; background-position: -50px -50px"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation5 4s both infinite; animation-delay: 1s; background-position: -5px -100px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation4 4s both infinite; animation-delay: 1.3s; background-position: -50px -100px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation6 4s both infinite; animation-delay: 1.6s; background-position: 0px -50px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation1 4s both infinite; animation-delay: 1.9s; background-position: -50px -50px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation2 4s both infinite; animation-delay: 2.2s; background-position: -50px -100px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation3 4s both infinite; animation-delay: 2.5s; background-position: -5px -100px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation5 4s both infinite; animation-delay: 2.8s; background-position: -50px -100px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation4 4s both infinite; animation-delay: 3.1s; background-position: -5px 0px;"></span><span class="lwljbtn_anim"style="animation: lwlj_love_animation6 4s both infinite; animation-delay: 3.4s; background-position: -5px -100px;"></span></div><div class="gift-btn to-send-redpack"><div class="gift-icon"><img src="/tpl/pages/append/blessing/img/redpack-icon.png"></div></div></div></div><div class="blessing-bg"></div></div>',e='<div class="add-wishes"><div class="weui-mask"></div><div class="weui-picker"><div class="push-wishes"><div class="ac_biaoqing"><div class="biaoqing-bar"><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/1.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/2.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/3.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/4.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/5.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/6.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/huaixiao.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/guzhang.gif"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/aiqing.png"/><img class="biaoqing"src="/tpl/pages/append/blessing/img/biaoqing/dangao.png"/></div></div><div class="ac_wish"><i>祝福：</i><div class="ac_wish_txt"contenteditable="true"></div><div class="add-biaoqing"><img src="/tpl/pages/append/blessing/img/biaoqing/addbiaoqing.png"></div></div><div class="ac_name"><div class="ac_name_bd"><i>姓名：</i><textarea class="ac_name_txt"placeholder="请输入您的姓名"></textarea></div><div class="ac_name_btn"><button type="button"class="sureBtn active">发送</button></div></div></div></div></div>',t='<div class="showwxVoice"><div class="weui-mask"></div><div class="weui-picker"><div class="Voicepanel"><p>长按说话</p><div class="wx_v_btn eqf-voice"><div class="voice-icon"><img src="/tpl/pages/append/blessing/img/voice.png"/><div class="voice-anima"><i class="vol1"></i><i class="vol2"></i><i class="vol3"></i></div></div></div><div class="voice-progress"><div class="weui-progress__bar"><div class="weui-progress__inner-bar js_progress"style="width: 0%;"></div></div></div><div class="record-btn-box">长按录音上传</div></div></div></div>',a='<div class="checkshowwxVoice"><div class="weui-mask"></div><div class="weui-dialog checkVoicepanel"><p>是否发送语音祝福?</p><div class="voice-play-box"><div class="voice"></div></div><div class="voice-name-box"><input class="voiceuname"name="voiceuname"placeholder="请输入您的姓名"/></div><div class="voice-btn-box"><div class="wx_v_btn1 c_w_v_b1"style="float: left;">重新录制</div><div class="wx_v_btn1 c_w_v_b2"style="float: right;">发送</div></div></div></div>',n='<div class="send-gift"><div class="weui-mask"></div><div class="weui-picker"><div class="send-gift-box"><div class="giftTit"><div class="entryName"><em>赠送人：</em><input class="ak"name="sender"placeholder="请输入您的姓名"type="text"value=""></div></div><div class="gift_main"><div class="gift_box swiper-container"><ul class="swiper-wrapper"></ul></div><div class="pageGift pagination"></div><div class="gift_footer"><div class="gift_tishi">☺：礼物金额将全部转至邀请人请柬帐户，邀请人可提现至微信零钱。</div><div class="sendGiftBtn">赠送礼物</div></div></div></div></div></div>',o='<div class="send-redpack"><div class="red_packets_bg"></div><div class="red_packets_form"><div class="container"><div class="flip"><div class="front"><img src="/tpl/pages/append/blessing/img/redpack/package-header2.png"></div><div class="back"><img src="/tpl/pages/append/blessing/img/redpack/package-header.png"></div></div></div><div class="money"></div><div class="red_packets_before"></div><div class="red_packets_wrap"><div class="red_packets_name"><i>赠送人：</i><input name="sender"class="red_packets_name_txt"type="text"value=""placeholder="请输入您的姓名"></div><div class="red_packets_money"><i>礼金金额：</i><input name="money"class="red_packets_money_txt"type="number"pattern="[0-9]*"value=""placeholder="请输入礼金金额"></div><div class="red_packets_tip">☺礼金将转入邀请人微请柬帐户，可由邀请人提现至微信零钱。</div><a class="red_packets_btn"><img src="/tpl/pages/append/blessing/img/redpack/push-cash.png"></a></div><a class="close_red_packets"><img src="/tpl/pages/append/blessing/img/redpack/close.png"></a></div></div>',d='<div class="gift-ratio"><div class="gift-ratio-wrap"><div class="gift-item"code="{{commonditycode}}"title="{{giftName}}"desc="{{description}}"><div><img src="{{imghost}}/{{iconImg}}"alt="一箱红枣"><p>{{giftName}}</p><p class="p2">￥{{salePrice}}</p></div></div></div></div>',c='<div id="gift_{{giftcode}}"class="agetgift"><div class="aget-img"><img src="{{imghost}}/{{iconImg}}"></div><div class="aget-name">{{sender}}送:<br>{{giftName}}</div></div>';i("pages/append/blessing/blessing.css");var l=i("lib/utils/comUtils"),p=i("lib/weui/picker"),r=i("pages/append/gift/giftbase"),g=(l.isMobile(),"click"),v=function(){this.hasInited=!1,this.isShow=!1,this.tpl="",this.$body=$("body"),this.$dom="",this.guest={},this.cache={},this.sitecode="",this.$commodBox="",this.imghost="",this.schemecode="",this.giftBase="",this.commonditycode="",this.wishList=[],this.notWechatTip="该功能需要在微信浏览器中打开！",this.setting={},this.wishisfullscreen=!1};return v.fn=v.prototype,v.fn.init=function(i,e){if(!this.hasInited){this.setting=$.extend({showClose:!0,background:"",showMask:!0,showGift:!1,showCash:!1,blessingBgColor:"",giftBgColor:"",schemecode:"",sitetype:"0"},i);var t=liveApp.caseData.menufuns;if(t){t instanceof Object||(t=JSON.parse(t));var a=t.gift;a?a.giftType==-1?(this.setting.showGift=!1,this.setting.showCash=!1):1==a.giftType?this.setting.showCash=!1:2==a.giftType&&(this.setting.showGift=!1):l.Toast.show("info","设置错误，没有开启收礼组件！")}this.$dom=$(s),e&&(this.$body=$(e));var n=this;n.tpl;if(this.setting.background){var o=$("<img/>").css({width:"640px",height:"100%"}).attr("src",this.setting.background);this.$dom.find(".blessing-bg").append(o)}else this.setting.showMask&&this.$dom.find(".blessing-bg").append('<div class="weui-mask"></div>');this.$dom.find(".sender-bar .cdmbtn").on(g,function(i){return n.showAddCommont(),!1}),this.$dom.find(".theyuyin").on(g,function(i){return l.checkAppLogin(function(){n.showVoice()}),!1}),this.sitecode=liveApp.caseData.id,this.sitetype=liveApp.caseData.type,this.imghost=liveApp.imghost,this.$body.append(this.$dom),this.$commodBox=this.$dom.find(".ndmlist ul"),this.schemecode=liveApp.caseData.schemecode,this.$commodBox.on(g,".icon-delete",function(){var i=this;l.ConfirmDialog.show({title:"确认操作",content:"是否删除操作？",cancelFun:function(){},okFun:function(){var s=$(i).closest("li").attr("code");n.deleteWish(s)}})});var d=document.getElementById("myVoiceAudioPlayer");if(this.$commodBox.on(g,".voice-play",function(){var i=$(this);if(n.$commodBox.find(".voice-play").not(i).removeClass("anim"),i.hasClass("anim"))i.removeClass("anim"),d&&d.pause(),globalMusic&&globalMusic.play&&globalMusic.play();else{var s=i.closest("li");s.siblings().find(".voice-play").removeClass("anim");var e=s.attr("link"),t="http://music.wqingjian.com";d.src=t+"/"+e,i.addClass("anim"),d&&d.play(),globalMusic&&globalMusic.pause&&globalMusic.pause(),d.loop=!1,d.addEventListener("ended",function(){i&&i.removeClass("anim"),globalMusic&&globalMusic.play&&globalMusic.play()})}}),this.setting.showGift){this.$dom.find(".to-send-gift").off(g).on(g,function(i){return n.toSendGift(),!1}),this.giftBase=new r({schemecode:this.schemecode,sitecode:this.sitecode,imghost:this.imghost,sitetype:this.sitetype});var p=this.$dom.find(".gift-show");this.giftBase.initShowGifts(p,c)}else this.wishisfullscreen=!0,this.$dom.find(".to-send-gift").remove(),this.$dom.find(".gift-show").remove();this.setting.showCash?this.$dom.find(".to-send-redpack").off(g).on(g,function(i){return n.toSendRedPackage(),!1}):this.$dom.find(".to-send-redpack").remove(),this.hasInited=!0}},v.fn.resetMarquee=function(){var i=this;!i.wishisfullscreen&&i.tab1.clientHeight<400&&(i.tab.style.height=i.tab1.offsetHeight+"px")},v.fn.marqueeAnima=function(){var i=this;_.each(i.wishList,function(s,e){"TXT"==s.wishType?i.addTextCommond(s):i.addVoiceCommond(s)}),i.wishisfullscreen?$(i.tab).addClass("ndm-scroll2"):($(i.tab).addClass("ndm-scroll"),i.resetMarquee());var s=$(i.tab1).find("li").size();i.tab.scrollTop=80*s;var e=i.wishisfullscreen?15:20;i.marqueeTimer=setInterval(function(){i.tab.scrollTop==i.tab2.offsetTop?i.tab.scrollTop=0:i.tab.scrollTop++},e)},v.fn.showVoice=function(){function i(){clearTimeout(d),l.isAndroid()&&globalMusic&&globalMusic.play&&globalMusic.play(),setTimeout(function(){wx.stopRecord({success:function(i){b&&i.localId&&(e.hide(),s.checkUploadVoice(i.localId))},fail:function(i){}}),u=0,h.css({width:"0%"}),f.hide(),b?m.removeClass("active"):(m.removeClass("active"),l.Toptips.show("warn","对不起，录音长度不能小于5秒！"))},300)}var s=this,e=new p({pickerTpl:t,hideback:function(){}});e.show();var a,n,o=e.getCurDom(),d=void 0,c={},r=o.find(".record-btn-box"),v=o.find(".Voicepanel"),m=v.find(".voice-icon");m.off("click").on("click",function(i){return i.preventDefault(),l.Toast.show("info","^_^请按下面按钮"),!1});var f=v.find(".voice-progress"),h=f.find(".js_progress"),u=0,b=!1;return this.stopRecordVoice=!1,"0"==liveApp.caseData.state?void r.off(g).on(g,function(i){l.Toast.show("info","对不起，体验版不支持语音功能"),i.preventDefault()}):void l.ajax.getJSON("/ci/guest/wish/hasAddWish",{sitecode:s.sitecode,wishType:"VOICE"},function(e){200==e.ecode?r.off("touchstart").on("touchstart",function(e){e.preventDefault(),l.isAndroid()&&globalMusic&&globalMusic.pause&&globalMusic.pause(),s.stopRecordVoice=!1,a=(new Date).getTime(),wx.startRecord({success:function(){c.rainAllowRecord="true",m.addClass("active"),f.show(),h.css({width:"0%"}),u=0,d=setInterval(function(){u+=1,h.css({width:u+"%"}),u>99&&(b=!0,clearTimeout(d),i())},200),r.off("touchend").on("touchend",function(s){s.preventDefault(),n=(new Date).getTime(),n-a<5e3?(n=0,a=0,b=!1,i()):(b=!0,i())})},cancel:function(){l.Toast.show("info","用户拒绝授权录音！")}})}):r.off("touchstart").on("touchstart",function(){l.Toptips.show("warn",e.msg)})})},v.fn.checkUploadVoice=function(i){function s(i,s){wx.uploadVoice({localId:i,isShowProgressTips:1,success:function(i){l.Loading.show();var t=e.sitecode;l.ajax.postJSON("/ci/guest/wish/downloadWx",{mediaId:i.serverId,sitecode:t},function(i){l.Loading.hide(),console.info(i.data);var t=1,a=i.data.voicePath,o=i.data.persistentId;l.Loading.show("音频转码中！");var d=setInterval(function(){t>3?(clearInterval(d),l.Toptips.show("warn","对不起，您上传的文件转码错误！"),l.Loading.hide()):(t++,l.ajax.getJSON("/ci/guest/wish/prefop",{id:o},function(i){var t=i.data;console.info(t),0==t.code&&(setTimeout(function(){var i=a,t={wishType:"VOICE",guestName:s,voiceLink:i},o=$.extend({sitecode:e.sitecode},{wish:t});l.ajax.RESTful("/ci/guest/wish/saveWish","post",o,function(i){if(l.Loading.hide(),200!=i.ecode)return void l.Toptips.show("warn",i.msg);var s=i.data;e.wishList.push(s),e.addVoiceCommond(s),e.$dom.find(".showwxVoice").hide(),n.remove(),l.Toast.show("info","恭喜，语音上传成功！")})},1e3),clearInterval(d))}))},2e3)})}})}if(!this.stopRecordVoice){this.stopRecordVoice=!0,this.localId=i;var e=this,t=new p({pickerTpl:a,hideback:function(){}});t.show();var n=t.getCurDom();n.find(".weui-mask").on(g,function(i){n.remove()});var o=(document.getElementById("myVoiceAudioPlayer"),n.find(".voice"));n.show();var d=function(){o.removeClass("anim"),wx.pauseVoice({localId:e.localId})};o.off(g).on(g,function(){$(this).hasClass("anim")?d():($(this).addClass("anim"),wx.playVoice({localId:e.localId}))}),wx.onVoicePlayEnd({success:function(i){o.removeClass("anim")}}),n.find(".c_w_v_b1").off(g).on(g,function(){d(),n.remove()}),n.find(".c_w_v_b2").off(g).on(g,function(){d();var i=n.find('input[name="voiceuname"]').val();i?s(e.localId,i):l.Toptips.show("warn","邀请人名字不能为空！")})}},v.fn.loadCommont=function(){var i=this;i.tab=i.$dom.find(".ndmlist").get(0),i.tab1=i.$dom.find(".wish-list").get(0),i.tab2=i.$dom.find(".wish-list-copy").get(0);var s={sitecode:i.sitecode};"1"==i.setting.sitetype&&(s={sitecode:i.sitecode,schemecode:i.setting.schemecode}),l.ajax.getJSON("/ci/guest/wish/queryWishes",s,function(s){return 200!=s.ecode?void l.Toast.show("info",data.msg):(i.wishList=s.data.list,s.data.guestcode&&(i.guest.guestcode=s.data.guestcode),i.marqueeAnima(),void 0)})},v.fn.deleteWish=function(i){var s=this;l.Loading.show("处理中..."),l.ajax.getJSON("/ci/guest/wish/deleteWish",{id:i},function(e){l.Loading.hide(),200==e.ecode?(l.Toast.show("info","删除成功！"),s.$commodBox.find('li[code="'+i+'"]').remove(),s.resetMarquee()):l.Toptips.show("warn",e.msg)})},v.fn.addTextCommond=function(i){var s=this,e='<li code="'+i.id+'"><div class="ndmhead"><img src="'+i.headImage+'"></div><div class="ndmbody"><div class="ndmtxt"><div>'+i.guestName+"："+i.wishContent+"</div></div></div></li>",t=$(e);if(s.setting.blessingBgColor&&t.find(".ndmtxt").css("background-color",s.setting.blessingBgColor),s.guest.guestcode==i.guestcode){var a=$('<i class="icon-delete"></i>');t.find(".ndmbody").append(a)}if(i.hostReply){var n='<div class="reply">回复：'+i.hostReply+"</div>";$(n).appendTo(t.find(".ndmtxt"))}s.$commodBox.prepend(t),s.resetMarquee()},v.fn.addVoiceCommond=function(i){var s=this,e='<li code="'+i.id+'" link="'+i.voiceLink+'"><div class="ndmhead"><img src="'+i.headImage+'"/></div><div class="ndmbody"><div class="ndm-voice"><span class="voice-sender">'+i.guestName+'：</span><div class="voice-play"></div></div></div></li>',t=$(e);if(s.setting.blessingBgColor&&t.find(".ndm-voice").css("background-color",s.setting.blessingBgColor),this.guest.guestcode==i.guestcode){var a=$('<i class="icon-delete"></i>');t.find(".ndmbody").append(a)}s.$commodBox.prepend(t),s.resetMarquee()},v.fn.initCommont=function(){var i=this,s=new p({pickerTpl:e,hideback:function(){}});s.show();var t=s.getCurDom(),a=t.find(".ac_biaoqing"),n=t.find(".ac_wish_txt").focus();a.find(".biaoqing").off(g).on(g,function(){n.focus();var s=$(this).attr("src");i.pasteHtmlAtCaret('<img src="'+s+'"/>'),event.stopPropagation()}),t.find(".add-biaoqing").off(g).on(g,function(i){a.show(),i.stopPropagation()}),t.find(".sureBtn").off(g).on(g,function(e){var a=t.find(".ac_name_txt").val(),o=n.html();if(!a)return void l.Toptips.show("warn","请在输入框填写姓名再发送!");if(!o)return void l.Toptips.show("warn","您还没有填写内容哦！");if(o.length>500)return void l.Toptips.show("warn","祝福语的长度超过最长限制啦");if(o===i.cache.lastComment)return l.Toptips.show("warn","相同的评论不要重复提交哦~");i.cache.lastComment=o;var d={guestName:a,wishContent:o||""},c=$.extend({sitecode:i.sitecode},{wish:d});l.Loading.show();l.ajax.RESTful("/ci/guest/wish/saveWish","post",c,function(e){l.Loading.hide();if(200!=e.ecode)return i.cache.lastComment="",void l.Toptips.show("warn",e.msg);var t=e.data;i.wishList.push(t),i.addTextCommond(t),s.hide()})})},v.fn.close=function(){this.stop(),this.$dom.remove()},v.fn.pasteHtmlAtCaret=function(i){var s,e;if(window.getSelection){if(s=window.getSelection(),s.getRangeAt&&s.rangeCount){e=s.getRangeAt(0),e.deleteContents();var t=document.createElement("div");t.innerHTML=i;for(var a,n,o=document.createDocumentFragment();a=t.firstChild;)n=o.appendChild(a);e.insertNode(o),n&&(e=e.cloneRange(),e.setStartAfter(n),e.collapse(!0),s.removeAllRanges(),s.addRange(e))}}else document.selection&&"Control"!=document.selection.type&&document.selection.createRange().pasteHTML(i)},v.fn.showAddCommont=function(){var i=this;l.checkAppLogin(function(){i.initCommont()})},v.fn.toSendGift=function(){var i=this,s=new p({pickerTpl:n,hideback:function(){}});s.show();var e=s.getCurDom(),t=e.find(".gift_main");i.giftBase.initGiftCommods(t,d);var a=t.find(".gift_box");a.on(g,".gift-item",function(){var s=$(this);i.commonditycode=s.attr("code"),a.find(".gift-item").not(s).removeClass("active"),s.addClass("active")});var o=e.find(".sendGiftBtn");o.off(g).on(g,function(){l.checkAppLogin(function(){var s=e.find('input[name="sender"]').val();i.commonditycode?s?i.giftBase.createGiftOrder(i.sitecode,i.commonditycode,s):l.Toptips.show("warn","赠送人姓名不能为空！"):l.Toptips.show("warn","您还没有选择礼物！")})})},v.fn.toSendRedPackage=function(){var i=this,s=new p({pickerTpl:o,hideback:function(){}});s.show();var e=s.getCurDom();e.find(".close_red_packets").off(g).on(g,function(i){e.remove(),i.stopPropagation()});var t=e.find(".red_packets_btn");t.off(g).on(g,function(){l.checkAppLogin(function(){var s=e.find('input[name="sender"]').val(),t=e.find('input[name="money"]').val();s?t?t<1?l.Toptips.show("warn","礼金金额不能小于1元！"):i.giftBase.createCashOrder(i.sitecode,t,s):l.Toptips.show("warn","赠送金额为空或格式错误！"):l.Toptips.show("warn","赠送人姓名不能为空！")})})},v.fn.play=function(){this.wishList.length>0?this.marqueeAnima():this.loadCommont(),this.giftBase&&this.giftBase.playGifts()},v.fn.stop=function(){this.marqueeTimer&&clearInterval(this.marqueeTimer),this.giftBase&&this.giftBase.stopPlayGifts(),this.$commodBox.empty(),this.$dom.find(".gift-show").empty();var i=document.getElementById("myVoiceAudioPlayer");i&&i.pause(),globalMusic&&globalMusic.play&&globalMusic.play()},v});