define("pages/append/rightbtn3/rightbtn", ["pages/append/rightbtn3/rightbtn.css", "lib/utils/comUtils"], function (require) {
    require("pages/append/rightbtn3/rightbtn.css");
    var html = '<div id="mymap"class="mymap"style="position: fixed; width: 100%; height: 100%; z-index: 9999; display: none; background-color: white; top: 0; left: 0;"><div class="mapdiv"style="background-color: silver; z-index: 1;"></div><div class="closeMap"></div><a href=""target="parent"><img src="https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/rightbtn3/img/toplace.png"style="z-index: 1;"class="gotobaidu"/></a><div id="allmap"style="width: 100%; height: 100%;"></div></div><div id="myvideo"class="myvideo"><div class="closeVideo"></div><div class="play-video"><div class="play-box"></div></div></div><img style="z-index: 9399; display: none;"id="musicButton"src="https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/rightbtn3/img/music1.png"/><table class="dianzhan"border="0"cellspacing="0"style="position: absolute; width: 40px; height: 80px; left: -2px; font-size: 10px;"><tbody><tr><td id="dianzhan"valign="bottom"style="font-size: 10px;"></td></tr><tr><td height="2px"style="font-size: 10px;"></td></tr><tr><td id="asks"valign="bottom"style="font-size: 10px;"></td></tr></tbody></table>'
        , comUtils = require("lib/utils/comUtils")
        , SCREEN_WIDTH = 640
        , MAX_LINE_NUM = 7
        , defaultPng = "https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/comment/img/default.png";
    $("body").append(html);
    var click = (comUtils.isMobile(),
        "click")
        , cache = {}
        , DomUtile = function () {
            this.realSheBeiWidth = 0,
                this.realBili = 0;
            var i = this;
            this.getRealBili = function () {
                return 0 == i.realSheBeiWidth && (i.realSheBeiWidth = $("body").width()),
                    0 == i.realBili && (i.realBili = i.realSheBeiWidth / 300),
                    i.realBili
            }
                ,
                this.getBiliZ = function (i) {
                    var t = this.getRealBili();
                    return Math.round(i * t)
                }
        };
    DomUtile.fn = DomUtile.prototype,
        DomUtile.fn.domPositionUtil = function (i, t, e, n, a, o, s, l) {
            e = this.getBiliZ(e),
                n = this.getBiliZ(n),
                a || (a = 0),
                o || (o = 0),
                a = this.getBiliZ(a),
                o = this.getBiliZ(o);
            var c = $(i).width()
                , d = $(i).height()
                , h = Math.round((c - e) / 2)
                , r = Math.round((d - n) / 2)
                , p = r + a
                , f = h + o;
            0 == s && (p = r + a,
                f = h + o),
                1 == s && (p = a,
                    f = o),
                2 == s && (p = a,
                    f = h + o),
                3 == s && (p = a,
                    f = this.realSheBeiWidth - o - e),
                4 == s && (p = r,
                    f = c - o - e),
                5 == s && (p = d - a - n,
                    f = this.realSheBeiWidth - o - e),
                6 == s && (p = d - a - n,
                    f = h + o),
                7 == s && (p = d - a - n,
                    f = o),
                8 == s && (p = r + a,
                    f = o);
            var g = $(i).find(t);
            g.css("position", "fixed"),
                1 == l ? (g.css("width", "100%"),
                    g.css("height", "100%")) : 2 == l ? (g.css("width", "100%"),
                        g.css("height", n + "px")) : 3 == l ? (g.css("width", e + "px"),
                            g.css("height", "100%")) : (g.css("width", e + "px"),
                                g.css("height", n + "px")),
                "body" == i ? (g.css("top", p),
                    g.css("left", f)) : (g.css("margin-top", p),
                        g.css("margin-left", f))
        }
        ,
        DomUtile.fn.fontCenterUtil = function (i, t, e, n, a, o, s) {
            var l = this;
            l.domPositionUtil(i, t, e, n, a, o, s);
            var c = $(i).find(t).css("fontSize");
            if (null != c && "" != c) {
                var d = this.getBiliZ(parseInt(c.replace("px", "")));
                $(i).find(t).css("fontSize", d + "px"),
                    $(i).find(t).find("td").css("fontSize", d + "px")
            }
            $(i).find(t).find("a").each(function () {
                var i = $(this).css("fontSize");
                if (null != i && "" != i) {
                    var t = this.getBiliZ(parseInt(i.replace("px", "")));
                    $(this).css("fontSize", t + "px")
                }
            }),
                $(i).find(t).find("img").each(function () {
                    $(this).width(this.getBiliZ($(this).width())),
                        $(this).height(this.getBiliZ($(this).height()))
                })
        }
        ;
    var domUtil = new DomUtile
        , RightBtn = function () { };
    RightBtn.fn = RightBtn.prototype,
        RightBtn.fn.closeTheMap = function closeTheMap(obj) {
            wx.miniProgram.navigateTo({
                url: "/pages/ditu/ditu",
            })
        }
        ,
        RightBtn.fn.closeTheMessage = function (i) {
            seajs.use(["pages/append/blessing/wishes"], function (t) {
                var e = liveApp.caseData.type
                    , n = liveApp.caseData.schemecode
                    , a = $.extend({
                        showClose: !0,
                        schemecode: n,
                        sitetype: e
                    }, i)
                    , o = new t;
                o.init(a)
            })
        }
        ,
        RightBtn.fn.closeTheSign = function (i) {
            seajs.use(["pages/append/sign/s1/sign"], function (t) {
                var e = liveApp.caseData.schemecode
                    , n = $.extend({
                        schemecode: e
                    }, i)
                    , a = new t;
                a.init(n)
            })
        }
        ,
        RightBtn.fn.addParise = function () {
            var i = this;
            this.hasAddPraise || (comUtils.ajax.getJSON("/ci/app/addSitePraise", {
                sitecode: i.sitecode
            }, function (t) {
                200 != t.ecode ? comUtils.Toast.show("info", t.msg) : i.praise = i.praise + 1,
                    $("#dianzhan").addClass("hasAdded").html(i.praise)
            }),
                this.hasAddPraise = !0)
        }
        ,
        RightBtn.fn.closeTheDianzhan = function (i) {
            var t = this;
            comUtils.checkAppLogin(function () {
                t.addParise();
                var e = "为我们点赞的人";
                i.desc ? e = i.desc : "1001" == liveApp.caseData.schemecode && (e = "见证我们牵手的人");
                var n = "https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/rightbtn/img/mydianpic.png";
                i.background && (n = i.background);
                var a = '<div id="mydianzhanB"><span class="mydianzhanClose" style="-webkit-border-radius:80px;border:none;color:#333333;font-size:12px;z-index:2;background-color:#ffffff;line-height:68px;text-align: center;" type="button">关闭</span> <img class="mydianzhanimg" src=\'' + n + "'><div class='mydianzhanfont' align='center' style='font-size:16px;color:black;'>您是第<label style='color:#C50440;'>" + t.praise + "</label>位<br>" + e + "<div></div>"
                    , o = $(a);
                o.find(".mydianzhanClose").off(click).on(click, function () {
                    o.remove()
                }),
                    $("body").append(o),
                    domUtil.fontCenterUtil("#mydianzhanB", ".mydianzhanClose", 32, 32, 20, 10, 3),
                    domUtil.domPositionUtil("#mydianzhanB", ".mydianzhanimg", 300, 480),
                    domUtil.fontCenterUtil("#mydianzhanB", ".mydianzhanfont", 300, 0, -16, 0)
            })
        }
        ,
        RightBtn.fn.closeTheInvitation = function (i) {
            var t = '<div id="myInvitationB" style="z-index:2147483643;background-color:rgba(0,0,0,0.8);position:absolute;left:0px;right:0px;width:100%;height:100%;opacity:0.9;"><span class="myInvitationClose" style="-webkit-border-radius:80px;border:none;color:#333333;font-size:12px;z-index:2;background-color:#ffffff;line-height:68px;text-align: center;" type="button">关闭</span> <img style=\'border-radius:10px;\' class="myInvitationimg" src=\'' + i.background + "'></div>"
                , e = $(t);
            e.find(".myInvitationClose").on(click, function () {
                e.remove()
            }),
                $("body").append(e),
                domUtil.fontCenterUtil("#myInvitationB", ".myInvitationClose", 32, 32, 20, 10, 3),
                domUtil.domPositionUtil("#myInvitationB", ".myInvitationimg", 250, 400)
        }
        ,
        RightBtn._getVidByUrl = function (i) {
            var t = i ? t = i.substring(i.indexOf("/id_") + 4, i.indexOf(".html")) : "";
            return t || (t = i.indexOf("embed/") != -1 ? i.split("embed/")[1].split("==")[0] : i.split("id_")[1].split("==")[0]),
                t
        }
        ,
        RightBtn.fn.openVideo = function (i) {
            if (0 == $("#youkujsapi").length) {
                window._console = window.console;
                var t = document.createElement("script");
                t.id = "youkujsapi",
                    t.onload = function () {
                        window.console = window._console
                    }
                    ,
                    t.src = "https://player.youku.com/jsapi",
                    $(document.head).append(t)
            }
            var e = $("#myvideo").css("display", "block")
                , n = e.find(".play-box");
            e.find(".closeVideo").off(click).on(click, function () {
                n.empty(),
                    e.css("display", "none")
            });
            var a = i.playurl;
            if (a) {
                var o = document.createElement("div")
                    , s = $(o).attr("id", "youkuplayerC").css({
                        width: "100%",
                        height: "100%"
                    });
                n.append(s),
                    a = a.replace("http:", "https:");
                var l = a
                    , c = l.substr(0, l.indexOf(".com"));
                switch (c) {
                    case "https://v.youku":
                        setTimeout(function () {
                            var i = RightBtn._getVidByUrl.call(this, l);
                            player = new YKU.Player("youkuplayerC", {
                                styleid: "0",
                                client_id: "93ade447b6dbf757",
                                vid: i,
                                autoplay: 1
                            })
                        }, 500);
                        break;
                    case "https://v.qq":
                        var d = l
                            , h = new RegExp("(^|\\?|&|\\/|=)([a-zA-Z0-9]{9,12})(\\s|&|#|$|\\.)", "i");
                        h.test(d) && (l = RegExp.$2,
                            d = "https://v.qq.com/iframe/player.html?vid=" + l);
                        var r = $("<iframe/>").css({
                            width: "100%",
                            height: "100%",
                            border: "0",
                            margin: "0",
                            padding: "0"
                        });
                        r.attr("src", d),
                            s.append(r);
                        break;
                    default:
                        var r = $("<iframe/>").css({
                            width: "100%",
                            height: "100%",
                            border: "0",
                            margin: "0",
                            padding: "0"
                        });
                        r.attr("src", l),
                            s.append(r)
                }
                globalMusic && globalMusic.pause && globalMusic.pause()
            }
        }
        ,
        RightBtn.fn.openInvcard = function () {
            var i = liveApp.caseIns.pageInsList;
            _.each(i, function (i, t) {
                i._pageData.pagetype && "invcard" == i._pageData.pagetype && liveApp.caseIns.flipPage.go(t, !1)
            })
        }
        ,
        RightBtn.fn.initGifts = function (i) {
            "normal" == i.giftStyle ? seajs.use(["pages/append/gift/normal/normal"], function (t) {
                t.init(i)
            }) : "hlj" == i.giftStyle
        }
        ,
        RightBtn._initBase = function () {
            $("#musicButton");
            if (this.base.font && "sysfont" == this.base.font) {
                var i = $("#base-style");
                if (i.length <= 0) {
                    i = $('<style type="text/css" id="base-style"></style>');
                    var t = "@font-face{font-family:'sysfont';src:url('https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/rightbtn3/img/120.ttf');font-style:normal;font-weight:normal;}.rbtn td{font-family:'sysfont';}";
                    i.append(t),
                        $("body").append(i)
                }
            }
        }
        ,
        RightBtn._initBindEvent = function (i) {
            for (var t = this, e = function (i, e) {
                "map" == e ? window.showMap = function () {
                    t.closeTheMap(i)
                }
                    : "wishes" == e ? window.showWishes = function () {
                        t.closeTheMessage(i)
                    }
                        : "sign" == e ? window.showSign = function () {
                            t.closeTheSign(i)
                        }
                            : "addzhan" == e ? window.showDianzhan = function () {
                                t.closeTheDianzhan(i)
                            }
                                : "video" == e ? window.showVideo = function () {
                                    t.openVideo(i)
                                }
                                    : "invcard" == e ? window.showInvcard = function () {
                                        t.openInvcard(i)
                                    }
                                        : "invitation" == e ? window.showInvitation = function () {
                                            t.closeTheInvitation(i)
                                        }
                                            : "gift" == e && (window.showGifts = function () {
                                                t.initGifts(i)
                                            }
                                            )
            }, n = 0; n < i.length; n++) {
                var a = i[n]
                    , o = this.menufuns[a];
                e(o, a)
            }
        }
        ,
        RightBtn._initAddBtns = function (i) {
            var t = this;
            if (!this.hasShow) {
                this.hasShow = !0;
                for (var e = function (i, e) {
                    var n = $('<img style="z-index:9399;-webkit-animation:menurotate 3s infinite linear;-ms-animation:menurotate 3s infinite linear;" class="' + e + ' rbtn" src="https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/rightbtn/img/round01.png">');
                    $("body").append(n);
                    var a = '<div style="z-index:9399;font-size:12px;text-align:center;color:#666;" class="' + e + 'f rbtn"></div>'
                        , o = $(a);
                    "invcard" == e ? (o.off(click).on(click, function (i) {
                        t.openInvcard(),
                            i.preventDefault()
                    }),
                        title = i.title || "邀请") : "map" == e ? (o.off(click).on(click, function (e) {
                            t.closeTheMap(i),
                                e.preventDefault()
                        }),
                            title = i.title || "地图") : "wishes" == e ? (o.off(click).on(click, function (e) {
                                t.closeTheMessage(i),
                                    e.preventDefault()
                            }),
                                title = i.title || "祝福") : "sign" == e ? (o.off(click).on(click, function (e) {
                                    t.closeTheSign(i),
                                        e.preventDefault()
                                }),
                                    title = i.title || "签到") : "addzhan" == e ? (o.off(click).on(click, function (e) {
                                        t.closeTheDianzhan(i),
                                            e.preventDefault()
                                    }),
                                        title = i.title || "点赞") : "video" == e ? (o.off(click).on(click, function (e) {
                                            t.openVideo(i),
                                                e.preventDefault()
                                        }),
                                            title = i.title || "视频") : "invitation" == e && (o.off(click).on(click, function (e) {
                                                t.closeTheInvitation(i),
                                                    e.preventDefault()
                                            }),
                                                title = i.title || "请柬"),
                        o.append('<table style="width:100%;height:100%;"><tr><td style="color:#666" align="center">' + title + "</td></tr></table>"),
                        $("body").append(o)
                }, n = 0, a = 0; a < i.length; a++) {
                    var o = i[a]
                        , s = this.menufuns[o];
                    if (s)
                        if ("leftzhan" == o)
                            t.initLeftzhan(s);
                        else if ("gift" == o) {
                            if (s.isShow && s.giftType != -1) {
                                if (domUtil.domPositionUtil("body", "#giftButtom", 25, 25, 80, 16, 5),
                                    s.position) {
                                    var l = s.position.split(",");
                                    5 == l.length && domUtil.domPositionUtil("body", "#giftButtom", l[0], l[1], l[2], l[3], l[4])
                                }
                                var c = $("#giftButtom");
                                s.icon && c.attr("src", s.icon);
                                var d = s.iconColor || "#F93247";
                                c.css({
                                    backgroundColor: d
                                }).show(),
                                    c.on(click, function () {
                                        t.initGifts(s)
                                    })
                            }
                        } else
                            s.isShow && (e(s, o),
                                domUtil.domPositionUtil("body", "." + o, 32, 32, 55 * n + 20, 10, 3),
                                domUtil.fontCenterUtil("body", "." + o + "f", 32, 32, 55 * n + 20, 10, 3),
                                n++)
                }
                if (n > 1) {
                    var h = '<img style="z-index:9399;-webkit-animation:linechange 5s infinite;-ms-animation:linechange 5s infinite;opacity:0.2;" class="memuline" src="https://cdn.jsdelivr.net/gh/iaardio/wediing/tpl/pages/append/rightbtn/img/line01.png">';
                    $(h).appendTo($("body"));
                    var r = domUtil.getBiliZ(50 * (n - 1));
                    $("head").append('<style type="text/css">@-webkit-keyframes linechange{0%{height:0;}50%{height:' + r + "px;}100%{height:0;}} @-ms-keyframes linechange{0%{height:0;}50%{height:" + r + "px;}100%{height:0;}}</style>"),
                        domUtil.domPositionUtil("body", ".memuline", 4, 50 * (n - 1), 50, 25, 3)
                }
            }
        }
        ,
        RightBtn.fn.initLeftzhan = function (i) {
            var t = this;
            if (i.isShow) {
                var e = $("#dianzhan")
                    , n = $("#asks");
                if (e.css("background-color", i.baseColor),
                    n.css("background-color", i.baseColor),
                    domUtil.fontCenterUtil("body", ".dianzhan", 32, 65, -50, -2, 8),
                    this.praise > 1e5) {
                    var a = Math.round(this.praise / 1e4);
                    e.html(a + "万")
                } else if (this.praise > 1e4) {
                    var a = Math.round(this.praise / 1e3);
                    e.html(a / 10 + "万")
                } else
                    e.html(this.praise);
                if (this.asks > 1e5) {
                    var a = Math.round(this.asks / 1e4);
                    n.html(a + "万")
                } else if (this.asks > 1e4) {
                    var a = Math.round(this.asks / 1e3);
                    n.html(a / 10 + "万")
                } else
                    n.html(this.asks);
                e.on(click, function () {
                    t.closeTheDianzhan(i)
                }),
                    $(".dianzhan").show()
            }
        }
        ,
        RightBtn.fn.initMenus = function (i) {
            var t = this;
            comUtils.ajax.getJSON("/ci/app/querySiteCount", {
                sitecode: this.sitecode
            }, function (e) {
                200 == e.ecode && (t.praise = e.data.praise,
                    t.asks = e.data.brows,
                    RightBtn._initBindEvent.call(t, i),
                    t.base.showComponent ? RightBtn._initAddBtns.call(t, i) : window.showRightBtn3 = function () {
                        RightBtn._initAddBtns.call(t, i)
                    }
                )
            })
        }
        ,
        RightBtn.fn.init = function () {
            this.sitecode = liveApp.caseData.id,
                this.praise = 0,
                this.asks = 0,
                this.menufuns = liveApp.caseData.menufuns,
                "string" == typeof this.menufuns && (this.menufuns = JSON.parse(this.menufuns)),
                this.base = this.menufuns.base || {},
                RightBtn._initBase.call(this),
                this.initMenus(["invitation", "invcard", "map", "wishes", "sign", "video", "leftzhan", "gift"])
        }
        ;
    var rbtn = new RightBtn;
    return rbtn
});
