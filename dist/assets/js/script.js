"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t();
}("undefined" != typeof window ? window : undefined, function () {
    function e() {}var t = e.prototype;return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];return n.indexOf(t) == -1 && n.push(t), this;
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};return n[t] = !0, this;
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];if (i && i.length) {
            var n = i.indexOf(t);return n != -1 && i.splice(n, 1), this;
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];if (i && i.length) {
            i = i.slice(0), t = t || [];for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];s && (this.off(e, r), delete n[r]), r.apply(this, t);
            }return this;
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents;
    }, e;
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return t(e, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
}("undefined" != typeof window ? window : undefined, function (e, t) {
    function i(e, t) {
        for (var i in t) {
            e[i] = t[i];
        }return e;
    }function n(e) {
        if (Array.isArray(e)) return e;var t = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.length;return t ? d.call(e) : [e];
    }function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);var s = e;return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e));
    }function r(e) {
        this.img = e;
    }function s(e, t) {
        this.url = e, this.element = t, this.img = new Image();
    }var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this);
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];this.addImage(o);
            }if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);for (n = 0; n < r.length; n++) {
                    var s = r[n];this.addElementBackgroundImages(s);
                }
            }
        }
    };var u = { 1: !0, 9: !0, 11: !0 };return o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var o = n && n[2];o && this.addBackground(o, e), n = i.exec(t.backgroundImage);
        }
    }, o.prototype.addImage = function (e) {
        var t = new r(e);this.images.push(t);
    }, o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);this.images.push(i);
    }, o.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n);
            });
        }var t = this;return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check();
        }) : void this.complete();
    }, o.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t);
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[t](this);
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
        var e = this.getIsImageComplete();return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
    }, r.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
    }, r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;this[t] && this[t](e);
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;var e = this.getIsImageComplete();e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
            var i = new o(this, e, t);return i.jqDeferred.promise(h(this));
        });
    }, o.makeJQueryPlugin(), o;
});
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o,
                r = "$()." + i + '("' + e + '")';return t.each(function (t, h) {
                var u = a.data(h, i);if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);var d = u[e];if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");var l = d.apply(u, n);o = void 0 === o ? l : o;
            }), void 0 !== o ? o : t;
        }function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
            });
        }a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);return h(this, t, e);
            }return u(this, t), this;
        }, n(a));
    }function n(t) {
        !t || t && t.bridget || (t.bridget = i);
    }var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function () {} : function (t) {
        r.error(t);
    };return n(e || t.jQuery), i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : undefined, function () {
    function t() {}var e = t.prototype;return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];return -1 == n.indexOf(e) && n.push(e), this;
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};return n[e] = !0, this;
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            var n = i.indexOf(e);return -1 != n && i.splice(n, 1), this;
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            i = i.slice(0), e = e || [];for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];s && (this.off(t, r), delete n[r]), r.apply(this, e);
            }return this;
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents;
    }, t;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);return i && e;
    }function e() {}function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; u > e; e++) {
            var i = h[e];t[i] = 0;
        }return t;
    }function n(t) {
        var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
    }function o() {
        if (!d) {
            d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var o = n(e);s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e);
        }
    }function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
            var r = n(e);if ("none" == r.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l],
                    f = r[c],
                    m = parseFloat(f);a[c] = isNaN(m) ? 0 : m;
            }var p = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                E = d && s,
                b = t(r.width);b !== !1 && (a.width = b + (E ? 0 : p + _));var x = t(r.height);return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a;
        }
    }var s,
        a = "undefined" == typeof console ? e : function (t) {
        console.error(t);
    },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = h.length,
        d = !1;return r;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";if (t[o]) return o;
        }
    }();return function (e, i) {
        return e[t](i);
    };
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
    var i = {};i.extend = function (t, e) {
        for (var i in e) {
            t[i] = e[i];
        }return t;
    }, i.modulo = function (t, e) {
        return (t % e + e) % e;
    };var n = Array.prototype.slice;i.makeArray = function (t) {
        if (Array.isArray(t)) return t;if (null === t || void 0 === t) return [];var e = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length;return e ? n.call(t) : [t];
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);-1 != i && t.splice(i, 1);
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) {
            if (t = t.parentNode, e(t, i)) return t;
        }
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);var o = [];return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);e(t, n) && o.push(t);for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) {
                    o.push(i[r]);
                }
            }
        }), o;
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;var n = t.prototype[e],
            o = e + "Timeout";t.prototype[e] = function () {
            var t = this[o];clearTimeout(t);var e = arguments,
                r = this;this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o];
            }, i);
        };
    }, i.docReady = function (t) {
        var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };var o = t.console;return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                l = t.jQuery;u.forEach(function (t) {
                var i,
                    r = t.getAttribute(s) || t.getAttribute(d);try {
                    i = r && JSON.parse(r);
                } catch (a) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a));
                }var h = new e(t, i);l && l.data(t, n, h);
            });
        });
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        for (var e in t) {
            return !1;
        }return e = null, !0;
    }function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
    }function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase();
        });
    }var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
        u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
        d = n.prototype = Object.create(t.prototype);d.constructor = n, d._create = function () {
        this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, d.getSize = function () {
        this.size = e(this.element);
    }, d.css = function (t) {
        var e = this.element.style;for (var i in t) {
            var n = u[i] || i;e[n] = t[i];
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            s = parseFloat(o),
            a = this.layout.size;-1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s;
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];e[r] = this.getXValue(a), e[s] = "";var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[h];e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function (t, e) {
        this.getPosition();var i = this.position.x,
            n = this.position.y,
            o = t == this.position.x && e == this.position.y;if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();var r = t - i,
            s = e - n,
            a = {};a.transform = this.getTranslate(r, s), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e);
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
            t.onTransitionEnd[e].call(this);
        }
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
            e.onEnd[i] = t.onTransitionEnd[i];
        }for (i in t.to) {
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        }if (t.from) {
            this.css(t.from);var n = this.element.offsetHeight;n = null;
        }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };var l = "opacity," + o(a);d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, !1);
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t);
    };var c = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = c[t.propertyName] || t.propertyName;if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];o.call(this), delete e.onEnd[n];
            }this.emitEvent("transitionEnd", [this]);
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function (t) {
        var e = {};for (var i in t) {
            e[i] = "";
        }this.css(e);
    };var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
        this.css(f);
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
    }, d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
            return i;
        }
    }, d.hide = function () {
        this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
    }, d.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
    }, n;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
        return e(t, i, n, o, r);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);var o = ++l;this.element.outlayerGUID = o, c[o] = this, this._create();var r = this._getOption("initLayout");r && this.layout();
    }function s(t) {
        function e() {
            t.apply(this, arguments);
        }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }function a(t) {
        if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];if (!i.length) return 0;i = parseFloat(i);var o = m[n] || 1;return i * o;
    }var h = t.console,
        u = t.jQuery,
        d = function d() {},
        l = 0,
        c = {};r.namespace = "outlayer", r.Item = o, r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var f = r.prototype;n.extend(f, e.prototype), f.option = function (t) {
        n.extend(this.options, t);
    }, f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, f._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
    }, f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
    }, f._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);n.push(s);
        }return n;
    }, f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
    }, f.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element;
        });
    }, f.layout = function () {
        this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, f._init = f.layout, f._resetLayout = function () {
        this.getSize();
    }, f.getSize = function () {
        this.size = i(this.element);
    }, f._getMeasurement = function (t, e) {
        var n,
            o = this.options[t];o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
    }, f.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored;
        });
    }, f._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
            }, this), this._processLayoutQueue(i);
        }
    }, f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
    }, f._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, f.updateStagger = function () {
        var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
    }, f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
    }, f._postLayout = function () {
        this.resizeContainer();
    }, f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");if (t) {
            var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, f._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e]);
        }function n() {
            s++, s == r && i();
        }var o = this,
            r = e.length;if (!e || !r) return void i();var s = 0;e.forEach(function (e) {
            e.once(t, n);
        });
    }, f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), e) {
            var o = u.Event(e);o.type = t, this.$element.trigger(o, i);
        } else this.$element.trigger(t, i);
    }, f.ignore = function (t) {
        var e = this.getItem(t);e && (e.isIgnored = !0);
    }, f.unignore = function (t) {
        var e = this.getItem(t);e && delete e.isIgnored;
    }, f.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, f.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, f._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
    }, f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
    }, f._manageStamp = d, f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };return r;
    }, f.handleEvent = n.handleEvent, f.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, f.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, f.onresize = function () {
        this.resize();
    }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, f.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
    }, f.addItems = function (t) {
        var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
    }, f.appended = function (t) {
        var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, f.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
        }
    }, f.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, f.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, f.revealItemElements = function (t) {
        var e = this.getItems(t);this.reveal(e);
    }, f.hideItemElements = function (t) {
        var e = this.getItems(t);this.hide(e);
    }, f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];if (i.element == t) return i;
        }
    }, f.getItems = function (t) {
        t = n.makeArray(t);var e = [];return t.forEach(function (t) {
            var i = this.getItem(t);i && e.push(i);
        }, this), e;
    }, f.remove = function (t) {
        var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t);
        }, this);
    }, f.destroy = function () {
        var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy();
        }), this.unbindResize();var e = this.element.outlayerGUID;delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
    }, r.data = function (t) {
        t = n.getQueryElement(t);var e = t && t.outlayerGUID;return e && c[e];
    }, r.create = function (t, e) {
        var i = s(r);return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i;
    };var m = { ms: 1, s: 1e3 };return r.Item = o, r;
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
    var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var n = i.prototype;return n._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
            this.colYs.push(0);
        }this.maxY = 0, this.horizontalColIndex = 0;
    }, n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";r = Math[a](r), this.cols = Math.max(r, 1);
    }, n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);this.containerWidth = n && n.innerWidth;
    }, n._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);n = Math.min(n, this.cols);for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = { x: this.columnWidth * r.col, y: r.y }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) {
            this.colYs[u] = a;
        }return s;
    }, n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
    }, n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            e[n] = this._getColGroupY(n, t);
        }return e;
    }, n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
    }, n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            n = t > 1 && i + t > this.cols;i = n ? 0 : i;var o = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
    }, n._manageStamp = function (t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);a = Math.max(0, a);var h = Math.floor(s / this.columnWidth);h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) {
            this.colYs[l] = Math.max(d, this.colYs[l]);
        }
    }, n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
    }, n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
            t++;
        }return (this.cols - t) * this.columnWidth - this.gutter;
    }, n.needsResizeLayout = function () {
        var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
    }, i;
});

var Shared = function Shared() {
    _classCallCheck(this, Shared);
};

var BASE_URL = window.location.origin;

var Slider = function () {
    function Slider(_ref) {
        var currentPageBlockId = _ref.currentPageBlockId,
            pagesBlockId = _ref.pagesBlockId,
            prevPageButtonId = _ref.prevPageButtonId,
            nextPageButtonId = _ref.nextPageButtonId,
            elementsListId = _ref.elementsListId,
            getLink = _ref.getLink,
            parser = _ref.parser,
            filter = _ref.filter,
            sorter = _ref.sorter,
            renderInner = _ref.renderInner,
            elementClass = _ref.elementClass;

        _classCallCheck(this, Slider);

        this.currentPage = 1;
        this.pages = 1;
        this.sliding = false;
        this.pageHasDifferences = null;

        this.currentPageBlock = document.getElementById(currentPageBlockId);
        this.pagesBlock = document.getElementById(pagesBlockId);

        this.prevPageButton = document.getElementById(prevPageButtonId);
        this.nextPageButton = document.getElementById(nextPageButtonId);

        this.elementsList = document.getElementById(elementsListId);

        this.elements = [];
        this.visibleElements = [];

        this.request = null;
        this.url = null;
        this.getLink = getLink;

        this.parser = parser;
        this.filter = filter;
        this.sorter = sorter;

        this.renderInner = renderInner;
        this.elementClass = elementClass;

        this.params = {
            tourId: this.elementsList.getAttribute('data-tour-id')
        };
    }

    _createClass(Slider, [{
        key: "createRequest",
        value: function createRequest() {
            var _this = this;

            this.request = new XMLHttpRequest();
            this.url = BASE_URL + "/" + this.getLink(this.params);
            this.request.open('GET', this.url);
            this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

            this.request.addEventListener("readystatechange", function () {
                if (_this.request.readyState === 4 && _this.request.status === 200) {
                    _this.elements = JSON.parse(_this.request.response);
                    if (_this.parser) {
                        _this.elements = _this.elements.map(_this.parser);
                    };
                    if (_this.filter) {
                        _this.elements = _this.elements.filter(_this.filter);
                    };
                    if (_this.sorter) {
                        _this.elements = _this.elements.sort(_this.sorter);
                    };
                    _this.pages = Math.ceil(_this.elements.length / 3) > 0 ? Math.ceil(_this.elements.length / 3) : 1;
                    if (_this.pagesBlock) {
                        _this.pagesBlock.innerHTML = _this.pages;
                    }
                    if (_this.pages <= 1) {
                        _this.prevPageButton.style.display = 'none';
                        _this.nextPageButton.style.display = 'none';
                    } else {
                        _this.prevPageButton.addEventListener('click', _this.prevPage.bind(_this));
                        _this.nextPageButton.addEventListener('click', _this.nextPage.bind(_this));
                    }
                    if (_this.elements.length < _this.pages * 3) {
                        var elementsLeft = _this.pages * 3 - _this.elements.length;
                        _this.pageHasDifferences = _this.pages;
                        _this.elements = [].concat(_toConsumableArray(_this.elements), _toConsumableArray(Array.from(Array(elementsLeft), function (_) {
                            return {};
                        })));
                    }
                    _this.visibleElements = _this.elements.slice(_this.currentPage * 3 - 3, _this.currentPage * 3);
                    _this.visibleElements.forEach(function (element, index) {
                        return _this.renderElement(element, index, _this.currentPage, _this.pageHasDifferences);
                    });
                };
            });
        }
    }, {
        key: "makeRequest",
        value: function makeRequest() {
            this.request.send();

            if (this.currentPageBlock && this.pagesBlock) {
                this.currentPageBlock.innerHTML = this.currentPage;
                this.pagesBlock.innerHTML = this.pages;
            }
        }
    }, {
        key: "prevPage",
        value: function prevPage() {
            var _this2 = this;

            if (this.currentPage - 1 > 0 && !this.sliding) {
                this.sliding = true;

                var elementBlocks = document.querySelectorAll("." + this.elementClass + ":not([style*=\"display: none\"])");
                elementBlocks.forEach(function (block) {
                    return block.classList.toggle('fading-prev');
                });

                setTimeout(function () {
                    elementBlocks.forEach(function (block) {
                        return block.classList.toggle('fading-prev');
                    });
                    elementBlocks.forEach(function (block) {
                        return block.style.display = 'none';
                    });
                    _this2.currentPage -= 1;
                    if (_this2.currentPageBlock) {
                        _this2.currentPageBlock.innerHTML = _this2.currentPage;
                    }
                    _this2.visibleElements = _this2.elements.slice(_this2.currentPage * 3 - 3, _this2.currentPage * 3);
                    _this2.visibleElements.forEach(function (element, index) {
                        return _this2.renderElement(element, index, _this2.currentPage, _this2.pageHasDifferences);
                    });

                    elementBlocks = document.querySelectorAll("." + _this2.elementClass + ":not([style*=\"display: none\"])");
                    elementBlocks.forEach(function (block) {
                        return block.classList.toggle('appearing-prev');
                    });
                    _this2.sliding = false;
                    setTimeout(function () {
                        elementBlocks.forEach(function (block) {
                            return block.classList.toggle('appearing-prev');
                        });
                    }, 300);
                }, 300);
            };
        }
    }, {
        key: "nextPage",
        value: function nextPage() {
            var _this3 = this;

            if (this.currentPage + 1 <= this.pages && !this.sliding) {
                this.sliding = true;

                var elementBlocks = document.querySelectorAll("." + this.elementClass + ":not([style*=\"display: none\"])");
                elementBlocks.forEach(function (block) {
                    return block.classList.toggle('fading-next');
                });

                setTimeout(function () {
                    elementBlocks.forEach(function (block) {
                        return block.classList.toggle('fading-next');
                    });
                    elementBlocks.forEach(function (block) {
                        return block.style.display = 'none';
                    });
                    _this3.currentPage += 1;
                    if (_this3.currentPageBlock) {
                        _this3.currentPageBlock.innerHTML = _this3.currentPage;
                    }
                    _this3.visibleElements = _this3.elements.slice(_this3.currentPage * 3 - 3, _this3.currentPage * 3);
                    _this3.visibleElements.forEach(function (element, index) {
                        return _this3.renderElement(element, index, _this3.currentPage, _this3.pageHasDifferences);
                    });

                    elementBlocks = document.querySelectorAll("." + _this3.elementClass + ":not([style*=\"display: none\"])");
                    elementBlocks.forEach(function (block) {
                        return block.classList.toggle('appearing-next');
                    });
                    _this3.sliding = false;
                    setTimeout(function () {
                        elementBlocks.forEach(function (block) {
                            return block.classList.toggle('appearing-next');
                        });
                    }, 300);
                }, 300);
            };
        }
    }, {
        key: "renderElement",
        value: function renderElement(element, index, currentPage, pageHasDifferences) {
            var resultInner = this.renderInner(element, index, currentPage, pageHasDifferences);
            this.elementsList.innerHTML += resultInner;
        }
    }]);

    return Slider;
}();

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.indexOf("/tour/") !== -1) {
        createSliders();
        createSectionSliders();
    }

    createCommentsSlider();
});

var masonryGrid = document.querySelector('.grid');

var msnry;

imagesLoaded(masonryGrid, function () {
    msnry = new Masonry(masonryGrid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

function getLink() {
    var URL = window.location.href;
    var URL_Info = URL.split('/');
    var tourId = URL_Info[URL_Info.length - 1];
    return 'tour/plan_photos/' + tourId;
}

function createSliders() {
    var request = new XMLHttpRequest();
    var url = BASE_URL + "/" + getLink();
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.addEventListener("readystatechange", function () {
        if (request.readyState === 4 && request.status === 200) {
            var items = JSON.parse(request.response);

            var dayNumbers = items.map(function (i) {
                return i.day;
            });

            var days = {};

            dayNumbers.map(function (n) {
                if (!days[n]) {
                    days[n] = items.filter(function (item) {
                        return item.day === n;
                    });
                }
            });

            var sliders = Object.assign({}, days);

            Object.keys(days).map(function (day) {
                sliders[day] = new Slider(getSliderProps(day));
            });

            Object.keys(sliders).map(function (sliderId) {
                var slider = sliders[sliderId];
                slider.createRequest();
                slider.makeRequest();
            });
        }
    });

    request.send();
}

function getSliderProps(number) {
    return {
        prevPageButtonId: 'singleTourPlanPrevPage-' + number,
        nextPageButtonId: 'singleTourPlanNextPage-' + number,
        elementsListId: 'singleTourPlanPhotos-' + number,
        getLink: getLink,
        renderInner: function renderInner(element, index) {
            if (!element.image) {
                return '';
            }
            var classes = '';
            if (index > 1) {
                if (classes.length !== 0) classes += ' ';
                classes += 'mobile-hidden';
            };

            var resultInner = "\n                <div class='-single-tour-plan-item__photos-item -single-tour-plan-item__photos-item-" + number + "'>\n                    <img src='" + element.image + "' alt=\"\" class='.-single-tour-plan-item__photo' />\n                </div>\n                ";

            return resultInner;
        },
        filter: function filter(element) {
            return element.day == number;
        },
        elementClass: '-single-tour-plan-item__photos-item-' + number
    };
}

function getSectionLink() {
    var URL = window.location.href;
    var URL_Info = URL.split('/');
    var tourId = URL_Info[URL_Info.length - 1];
    return 'tour/section_photos/' + tourId;
}

function createSectionSliders() {
    var request = new XMLHttpRequest();
    var url = BASE_URL + "/" + getSectionLink();
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.addEventListener("readystatechange", function () {
        if (request.readyState === 4 && request.status === 200) {
            var items = JSON.parse(request.response);

            var sectionSliders = {};

            items.map(function (item) {
                sectionSliders[item.section_id] = new Slider(getSectionSliderProps(item.section_id));
            });

            Object.keys(sectionSliders).map(function (sliderId) {
                var slider = sectionSliders[sliderId];
                slider.createRequest();
                slider.makeRequest();
            });
        }
    });

    request.send();
}

function getSectionSliderProps(number) {
    return {
        prevPageButtonId: 'singleTourSectionPrevPage-' + number,
        nextPageButtonId: 'singleTourSectionNextPage-' + number,
        elementsListId: 'singleTourSectionPhotos-' + number,
        getLink: getSectionLink,
        renderInner: function renderInner(element, index) {
            if (!element.images) {
                return '';
            }
            var classes = '';
            if (index > 1) {
                if (classes.length !== 0) classes += ' ';
                classes += 'mobile-hidden';
            };

            var resultImages = "";
            element.images.map(function (image) {
                resultImages += "\n                    <img src='" + image + "' alt=\"\" class='.-single-tour-section-item__photo' />\n                ";
            });

            var resultInner = "\n                <div class='-single-tour-section-item__photos-item -single-tour-section-item__photos-item-" + number + "'>\n                    " + resultImages + "\n                </div>\n                ";

            return resultInner;
        },
        filter: function filter(element) {
            return element.section_id == number;
        },
        elementClass: '-single-tour-section__photos-item-' + number
    };
}

function renderComment(comment, index, currentPage, pageHasDifferences) {
    if (!comment.name) {
        return '';
    }
    var classes = '';
    if (index % 3 !== 0) {
        if (classes.length !== 0) classes += ' ';
        classes += 'mobile-hidden';
    };
    if (index % 3 !== 1 && currentPage !== pageHasDifferences) {
        if (classes.length !== 0) classes += ' ';
        classes += 'upper';
    };

    var linksInner = '';
    for (var i = 0; i < comment.instagramLinks.length; i++) {
        var link = comment.instagramLinks[i];
        var resultLink = 'https://www.instagram.com/' + link;
        if (index === 0) {
            linksInner += "\n                <a class='comment__link' href=" + resultLink + ">" + link + "</a>\n            ";
        } else linksInner += "\n                <span class='comment__link-breaker'>|</span>\n                <a class='comment__link' href=" + resultLink + ">" + link + "</a>\n            ";
    };

    var resultInner = "\n        <div class='comments-comment " + classes + "'>\n            <div class='comments-comment__border-inside'></div>\n            <div class='comment__main'>\n                <h4 class='comment__name'>" + comment.name + "</h4>\n                <div class='comment__instagram'>\n                    <i class='fa fa-instagram'></i>\n                    " + linksInner + "\n                </div>\n                <p class='comment__text'>\n                    " + comment.text + "\n                </p>\n            </div>\n            <img class='comment__avatar' src=" + comment.avatar + " alt='' />\n        </div>\n    ";

    return resultInner;
}

function createCommentsSlider() {
    var commentsSlider = new Slider({
        currentPageBlockId: 'commentsCurrentPage',
        pagesBlockId: 'commentsPages',
        prevPageButtonId: 'commentsPrevPage',
        nextPageButtonId: 'commentsNextPage',
        elementsListId: 'commentsList',
        getLink: function getLink(params) {
            return "reviews_download?tour_id=" + params.tourId;
        },
        parser: function parser(comment) {
            comment.instagramLinks = comment.instagramLinks.split(', ');
            return comment;
        },
        renderInner: renderComment,
        elementClass: 'comments-comment'
    });

    commentsSlider.createRequest();
    commentsSlider.makeRequest();
}

var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIcon');
var menuList = document.getElementById('menuList');
var menuNav = document.getElementById('headerNavInfo');

var menuIsOpened = false;
var menuListIsOpened = false;

function openList(mode) {
    menuListIsOpened = true;
    menuList.style.display = 'block';
    if (mode) {
        menu.classList.toggle('menu--opened');
        menuIcon.classList.toggle('icon--opened');
    }
}

function closeList(mode) {
    menuListIsOpened = false;
    menuList.style.display = 'none';
    if (mode) {
        menu.classList.toggle('menu--opened');
        menuIcon.classList.toggle('icon--opened');
    }
}

function openMenu() {
    menu.style.display = 'block';
    menuNav.style.display = 'none';
    menuIsOpened = true;
}

function closeMenu(mode) {
    menu.style.display = 'none';
    menuNav.style.display = 'flex';
    menuIsOpened = false;
    closeList(mode);
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 676) {
        closeMenu(false);
    } else {
        menu.style.display = 'block';
        menuNav.style.display = 'none';
        menuIsOpened = true;
        closeList(false);
    }
});

window.addEventListener('resize', function () {
    if (menuIsOpened && window.innerWidth > 676) {
        closeMenu(menuListIsOpened);
    } else if (!menuIsOpened && window.innerWidth <= 676) {
        openMenu();
    }
});

menuIcon.addEventListener('click', function () {
    if (menuListIsOpened) {
        closeList(true);
    } else {
        openList(true);
    }
});

menuList.addEventListener('click', function () {
    closeList(true);
});
//# sourceMappingURL=script.js.map
