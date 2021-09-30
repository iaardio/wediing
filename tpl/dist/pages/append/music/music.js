define("pages/append/music/music", ["lib/utils/comUtils", "lib/utils/comUtils", "lib/zepto-plugin/coffee1", "lib/zepto-plugin/touch"], function(i, t, a) {
    var e = i("lib/utils/comUtils")
      , o = i("lib/utils/comUtils")
      , l = (i("lib/zepto-plugin/coffee1"),
    {})
      , s = !1;
    i("lib/zepto-plugin/touch");
    var timer = null;
    var n = function(i) {
        this._$globalAudio = i,
        this.audio = document.getElementById("globalAudioPlayer"),
        this.isAllowManually = !1,
        this.playState = "ready";
        var t = this;
        this._$globalAudio.coffee({
            steams: ['<img src="/tpl//img/globalAudio.png"/>', '<img src="/tpl/img/globalAudio.png"/>', '<img src="/tpl/img/globalAudio.png"/>', '<img src="/tpl/img/globalAudio.png"/>', '<img src="/tpl/img/globalAudio.png"/>', '<img src="/tpl/img/globalAudio.png"/>'],
            steamHeight: 100,
            steamWidth: 50
        }),
        this.audio.autoplay && (t.isAllowManually = !0,
        t.play()),
        this._$globalAudio.on(o.isMobile() ? "tap" : "click", function(i) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                i.preventDefault();
                s = !s;
                t.isAllowManually && (t._$globalAudio.hasClass("z-play") ? t.pause() : t.play())
            }, 100)
        }),
        $(document).one("click", function(i) {
            i.preventDefault();
            t.play()
        })
    };
    n.prototype.play = function() {
        this.audio && this.audio.play();
        this._$globalAudio.removeClass("z-pause").addClass("z-play");
        this._$globalAudio.find(".u-globalAudio-0").addClass("u-globalAudio-1");
        this.playState = "playing";
        $.fn.coffee.start()
    }
    ,
    n.prototype.pause = function() {
        this.audio.pause();
        this._$globalAudio.removeClass("z-play").addClass("z-pause");
        this._$globalAudio.find(".u-globalAudio-0").removeClass("u-globalAudio-1");
        this.playState = "paused";
        $.fn.coffee.stop()
    }
    ,
    n.prototype.getState = function() {
        return this.playState
    }
    ;
    var u = function(i) {
        this.audio = document.getElementById("globalAudioPlayer");
        this.isAllowManually = !1;
        this.audoWrap = i;
        this.playState = "ready";
        var t = i
          , a = this;
        this.audio.autoplay && (a.isAllowManually = !0,
        a.play()),
        i.on(o.isMobile() ? "tap" : "click", function(i) {
            console.log(i)
            i.preventDefault();
            s = !s;
            a.isAllowManually && (t.hasClass("z-show") ? a.pause() : a.play())
        }),
        $(document).one("click", function(i) {
            i.preventDefault(),
            a.play()
        })
    };
    u.prototype = {
        play: function() {
            this.audio && this.audio.play(),
            this.audoWrap.addClass("z-show"),
            this.playState = "playing"
        },
        pause: function() {
            this.audio.pause(),
            this.audoWrap.removeClass("z-show"),
            this.playState = "paused"
        },
        getState: function() {
            return this.playState
        }
    };
    var p = function(i) {
        this.isAllowManually = !1,
        this.audio = document.getElementById("globalAudioPlayer"),
        this.init(i),
        this.playState = "ready"
    };
    p.prototype = {
        init: function(i) {
            var t = this
              , a = i;
            this.audio.autoplay && (t.isAllowManually = !0,
            t.play()),
            $(".music-icon").addClass("animing"),
            document.querySelector(".music-icon").addEventListener("webkitAnimationIteration", function() {
                t.musicNoteAnim()
            }, !1),
            a.on(o.isMobile() ? "tap" : "click", function(i) {
                i.preventDefault(),
                s = !s,
                t.isAllowManually && (a.find(".music-icon").hasClass("animing") ? t.pause() : t.play())
            }),
            $(document).one("click", function(i) {
                i.preventDefault(),
                t.play()
            })
        },
        musicNoteAnim: function() {
            var i = $(".circle-1")
              , t = $(".circle-2")
              , a = $(".circle-3");
            i.show(),
            setTimeout(function() {
                t.show()
            }, 200),
            setTimeout(function() {
                a.show()
            }, 300),
            setTimeout(function() {
                i.hide()
            }, 400),
            setTimeout(function() {
                t.hide()
            }, 500),
            setTimeout(function() {
                a.hide()
            }, 650)
        },
        play: function() {
            $(".music-wrap").find("i.circle").hide(),
            $(".music-icon").addClass("animing"),
            this.musicNoteAnim(),
            this.audio && this.audio.play(),
            this.playState = "playing"
        },
        pause: function() {
            $(".music-icon").removeClass("animing"),
            setTimeout(function() {
                $(".music-wrap").find("i.circle").show()
            }, 500),
            setTimeout(function() {
                $(".music-wrap").find("i.circle").show()
            }, 650),
            setTimeout(function() {
                $(".music-wrap").find("i.circle").show()
            }, 760),
            this.audio.pause(),
            this.playState = "paused"
        },
        getState: function() {
            return this.playState
        }
    };
    var c = function() {};
    return c.prototype = {
        componentLoad: function() {
            if (window.caseData || window.liveApp.caseData) {
                var i = window.caseData || window.liveApp.caseData;
                if (i && i.music && !(i.music.length < 3)) {
                    var t = i.musicStyle || 0
                      , a = {
                        case_id: liveApp.caseData.id
                    };
                    $.get("/tpl/pages/append/music/music" + t + ".css", a, function(i) {
                        var t = i
                          , a = document.createElement("style");
                        a.innerHTML = t,
                        document.querySelector("head").appendChild(a)
                    }),
                    $.get("/tpl/pages/append/music/music" + t + ".html", a, function(t) {
                        var a = t
                          , o = isNaN(parseFloat(window.rlSide)) ? 0 : parseFloat(window.rlSide)
                          , l = ["right: " + (20 + o) + "px; top: 20px;", "right: " + (20 + o) + "px; bottom: 20px;", "left: " + (20 + o) + "px; top: 20px;", "left: " + (20 + o) + "px; bottom: 20px;"]
                          , s = ["right: 0; top: 0;", "right: 0; bottom: 0;", "left: 0; top: 0;", "left: 0; bottom: 0"]
                          , d = {
                            posWarp: s[i.musicPosition],
                            music: i.music,
                            pos: l[i.musicPosition]
                        }
                          , r = document.createElement("div");
                        r.style.position = "relative",
                        r.style.zIndex = "9399",
                        r.innerHTML = e.simpleTemplate(d, a),
                        document.querySelector(".liveApp").appendChild(r);
                        var m = $(".u-globalAudio")
                          , h = {};
                        if (m.length) {
                            switch (i.musicStyle) {
                            case "1":
                                h = new u(m);
                                break;
                            case "2":
                                h = new p(m);
                                break;
                            default:
                                h = new n(m)
                            }
                            c.prototype.play = function() {
                                h.play.call(h)
                            }
                            ,
                            c.prototype.pause = function() {
                                h.pause.call(h)
                            }
                            ,
                            c.prototype.getState = function() {
                                return h.getState.call(h)
                            }
                        }
                    })
                }
            }
        },
        init: function() {
            this.componentLoad()
        }
    },
    window.globalMusic = l = new c
});
