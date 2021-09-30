define("/tpl/dist/components/image/singleimage/front/singleimage", ["coms/frontbase", "coms/constants"], function(a, e, i) {
    "use strict";
    var n = a("coms/frontbase")
      , t = a("coms/constants");
    return {
        init: function(a, e) {
            var i = a.attrs.bindScreen;
            if (!i) {
                var r = a.attrs.bindAttr;
                i = r ? "ratioScaleHeight" : "scaleHeight"
            }
            a.attrs.bindScreen = i;
            var g = new n(a.attrs,e)
              , o = a.data || {}
              , d = function(a) {
                if ("none" !== a.data.backgroundImage && 'url("none")' !== a.data.backgroundImage || (a.data.backgroundImage = ""),
                a.data.backgroundType && a.data.backgroundType !== t.BACKGROUND_TYPE.IMAGE || (/url\(/.test(a.data.backgroundImage) ? a.data.dom.style.backgroundImage = a.data.backgroundImage : a.data.dom.style.backgroundImage = a.data.backgroundImage ? "url(" + a.data.backgroundImage + ")" : "",
                a.data.innerHTML && a.data.innerHTML.indexOf("url(" + a.data.backgroundImage + ")") != -1 && (a.data.backgroundImage = "",
                a.data.dom.style.backgroundImage = ""),
                o.backgroundImage && o.insideBackgroundImage && o.backgroundImage == o.insideBackgroundImage && (a.data.backgroundImage = "",
                a.data.dom.style.backgroundImage = "")),
                /create-by-mobile/i.test(document.body.className))
                    try {
                        if (!/<img/.test(a.data.dom.innerHTML)) {
                            var e = new Image;
                            e.src = a.data.backgroundImage.replace(/^url\(/, "").replace(/\)$/, ""),
                            a.data.dom.appendChild(e),
                            a.data.dom.style.backgroundImage = "",
                            a.data.innerHTML || (a.data.innerHTML = a.data.dom.innerHTML)
                        }
                    } catch (a) {
                        console.error("singleImage-->mobile-->add image error!! %o", a)
                    }
            }
              , m = function(a, e, i) {
                if (!i.newImg) {
                    var n = i.scale || .6;
                    i.marginLeft = i.marginLeft / n,
                    i.marginTop = i.marginTop / n
                }
                var t = i.imageH
                  , r = i.imageW
                  , g = i.marginLeft
                  , o = i.marginTop;
                if ("scaleHeight" === e ? i.imageH = t * window.pageRatio : "ratioScaleHeight" === e ? (i.imageH = t * window.pageRatio,
                i.imageW = r * window.pageRatio,
                i.marginLeft = g * window.pageRatio + (r - i.imageW) / 2,
                i.marginTop = o * window.pageRatio) : "ratioScaleAll" === e && (i.imageH = t * window.pageRatio,
                i.imageW = r * window.pageRatio,
                i.marginLeft = g * window.pageRatio,
                i.marginTop = o * window.pageRatio),
                0 != g || 0 != o || "ratioScaleHeight" !== e && "ratioScaleAll" !== e)
                    a.find(".jcrop-preview").css({
                        width: i.imageW + "px",
                        height: i.imageH + "px",
                        marginLeft: i.marginLeft + "px",
                        marginTop: i.marginTop + "px"
                    });
                else {
                    var d = $('<div class="jcrop-preview"/>').css({
                        width: "100%",
                        height: "100%",
                        "background-repeat": "no-repeat",
                        "background-size": "auto 100%",
                        "background-position": "center center",
                        "background-image": "url(" + i.insideBackgroundImage + ")"
                    });
                    if (i.video) {
                        d.append('<video src="static/videos/wedding.mp4" loop width="100%" height="100%"/>')
                    }
                    a.empty().append(d)
                }
            };
            g.init(a, {
                setBackgroundImage: d
            });
            var c = $(g.curDom);
            if (window.pageRatio > 1) {
                var s = c.find(".preview-container");
                m(s, i, o)
            } else if (!o.newImg) {
                var p = c.find(".jcrop-preview")
                  , u = o.scale || .6;
                p.css({
                    marginLeft: o.marginLeft / u,
                    marginTop: o.marginTop / u
                })
            }
            if (o.customCss) {
                var p = c.find(".jcrop-preview")
                  , l = p.attr("style") + o.customCss;
                p.attr("style", l)
            }
            return g
        }
    }
});
