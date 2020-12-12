!function (n) {
    "use strict";
    function t(n, t) {
        n.className += " " + t
    }
    function r(n, t) {
        for (var u, i = n.className.split(" "), f = t.split(" "), r = 0; r < f.length; r += 1)
            u = i.indexOf(f[r]), u > -1 && i.splice(u, 1);
        n.className = i.join(" ")
    }
    function w() {
        return"rtl" === n.getComputedStyle(document.body).direction
    }
    function y() {
        return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
    }
    function p() {
        return document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft
    }
    function l(n) {
        for (; n.lastChild; )
            n.removeChild(n.lastChild)
    }
    function v(n) {
        var t, i, r;
        if (null === n)
            return n;
        if (Array.isArray(n)) {
            for (t = [], i = 0; i < n.length; i += 1)
                t.push(v(n[i]));
            return t
        }
        if (n instanceof Date)
            return new Date(n.getTime());
        if (n instanceof RegExp)
            return t = new RegExp(n.source), t.global = n.global, t.ignoreCase = n.ignoreCase, t.multiline = n.multiline, t.lastIndex = n.lastIndex, t;
        if ("object" == typeof n) {
            t = {};
            for (r in n)
                n.hasOwnProperty(r) && (t[r] = v(n[r]));
            return t
        }
        return n
    }
    function b(n, t) {
        var i = n.elements.root;
        i.parentNode.removeChild(i);
        delete n.elements;
        n.settings = v(n.__settings);
        n.__init = t;
        delete n.__internal
    }
    function s(n, t) {
        return function () {
            if (arguments.length > 0) {
                for (var i = [], r = 0; r < arguments.length; r += 1)
                    i.push(arguments[r]);
                return i.push(n), t.apply(n, i)
            }
            return t.apply(n, [null, n])
        }
    }
    function k(n, t) {
        return{index: n, button: t, cancel: !1}
    }
    function o(n, t) {
        if ("function" == typeof t.get(n))
            return t.get(n).call(t)
    }
    function g() {
        function n(n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function i(n) {
            var i = t[n].dialog;
            return i && "function" == typeof i.__init && i.__init(i), i
        }
        function r(i, r, u, f) {
            var e = {dialog: null, factory: r};
            return void 0 !== f && (e.factory = function () {
                return n(new t[f].factory, new r)
            }), u || (e.dialog = n(new e.factory, d)), t[i] = e
        }
        var t = {};
        return{defaults: nt, dialog: function (t, u, f, e) {
                if ("function" != typeof u)
                    return i(t);
                if (this.hasOwnProperty(t))
                    throw new Error("alertify.dialog: name already exists");
                var o = r(t, u, f, e);
                this[t] = f ? function () {
                    if (0 === arguments.length)
                        return o.dialog;
                    var t = n(new o.factory, d);
                    return t && "function" == typeof t.__init && t.__init(t), t.main.apply(t, arguments), t.show.apply(t)
                } : function () {
                    if (o.dialog && "function" == typeof o.dialog.__init && o.dialog.__init(o.dialog), 0 === arguments.length)
                        return o.dialog;
                    var n = o.dialog;
                    return n.main.apply(o.dialog, arguments), n.show.apply(o.dialog)
                }
            }, closeAll: function (n) {
                for (var r, i = f.slice(0), t = 0; t < i.length; t += 1)
                    r = i[t], void 0 !== n && n === r || r.close()
            }, setting: function (n, t, r) {
                if ("notifier" === n)
                    return c.setting(t, r);
                var u = i(n);
                if (u)
                    return u.setting(t, r)
            }, set: function (n, t, i) {
                return this.setting(n, t, i)
            }, get: function (n, t) {
                return this.setting(n, t)
            }, notify: function (n, t, i, r) {
                return c.create(t, r).push(n, i)
            }, message: function (n, t, i) {
                return c.create(null, i).push(n, t)
            }, success: function (n, t, i) {
                return c.create("success", i).push(n, t)
            }, error: function (n, t, i) {
                return c.create("error", i).push(n, t)
            }, warning: function (n, t, i) {
                return c.create("warning", i).push(n, t)
            }, dismissAll: function () {
                c.dismissAll()
            }}
    }
    var h = {ENTER: 13, ESC: 27, F1: 112, F12: 123, LEFT: 37, RIGHT: 39}, nt = {autoReset: !0, basic: !1, closable: !0, closableByDimmer: !0, frameless: !1, maintainFocus: !0, maximizable: !0, modal: !0, movable: !0, moveBounded: !1, overflow: !0, padding: !0, pinnable: !0, pinned: !0, preventBodyShift: !1, resizable: !0, startMaximized: !1, transition: "pulse", notifier: {delay: 5, position: "bottom-right", closeButton: !1}, glossary: {title: "AlertifyJS", ok: "OK", cancel: "Cancel", acccpt: "Accept", deny: "Deny", confirm: "Confirm", decline: "Decline", close: "Close", maximize: "Maximize", restore: "Restore"}, theme: {input: "ajs-input", ok: "ajs-ok", cancel: "ajs-cancel"}}, f = [], u = function () {
        return document.addEventListener ? function (n, t, i, r) {
            n.addEventListener(t, i, !0 === r)
        } : document.attachEvent ? function (n, t, i) {
            n.attachEvent("on" + t, i)
        } : void 0
    }(), e = function () {
        return document.removeEventListener ? function (n, t, i, r) {
            n.removeEventListener(t, i, !0 === r)
        } : document.detachEvent ? function (n, t, i) {
            n.detachEvent("on" + t, i)
        } : void 0
    }(), a = function () {
        var n, t, i = !1, r = {animation: "animationend", OAnimation: "oAnimationEnd oanimationend", msAnimation: "MSAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd"};
        for (n in r)
            if (void 0 !== document.documentElement.style[n]) {
                t = r[n];
                i = !0;
                break
            }
        return{type: t, supported: i}
    }(), d = function () {
        function ot(n) {
            var f, w, l, a, b, y, e, r, p, u, h, o;
            if (!n.__internal) {
                if (delete n.__init, n.__settings || (n.__settings = v(n.settings)), "function" == typeof n.setup ? (f = n.setup(), f.options = f.options || {}, f.focus = f.focus || {}) : f = {buttons: [], focus: {element: null, select: !1}, options: {}}, "object" != typeof n.hooks && (n.hooks = {}), w = [], Array.isArray(f.buttons))
                    for (l = 0; l < f.buttons.length; l += 1) {
                        a = f.buttons[l];
                        b = {};
                        for (y in a)
                            a.hasOwnProperty(y) && (b[y] = a[y]);
                        w.push(b)
                    }
                for (e = n.__internal = {isOpen: !1, activeElement: document.body, timerIn: void 0, timerOut: void 0, buttons: w, focus: f.focus, options: {title: void 0, modal: void 0, basic: void 0, frameless: void 0, pinned: void 0, movable: void 0, moveBounded: void 0, resizable: void 0, autoReset: void 0, closable: void 0, closableByDimmer: void 0, maximizable: void 0, startMaximized: void 0, pinnable: void 0, transition: void 0, padding: void 0, overflow: void 0, onshow: void 0, onclosing: void 0, onclose: void 0, onfocus: void 0, onmove: void 0, onmoved: void 0, onresize: void 0, onresized: void 0, onmaximize: void 0, onmaximized: void 0, onrestore: void 0, onrestored: void 0}, resetHandler: void 0, beginMoveHandler: void 0, beginResizeHandler: void 0, bringToFrontHandler: void 0, modalClickHandler: void 0, buttonsClickHandler: void 0, commandsClickHandler: void 0, transitionInHandler: void 0, transitionOutHandler: void 0, destroy: void 0}, r = {}, r.root = document.createElement("div"), r.root.className = c.base + " " + c.hidden + " ", r.root.innerHTML = d.dimmer + d.modal, r.dimmer = r.root.firstChild, r.modal = r.root.lastChild, r.modal.innerHTML = d.dialog, r.dialog = r.modal.firstChild, r.dialog.innerHTML = d.reset + d.commands + d.header + d.body + d.footer + d.resizeHandle + d.reset, r.reset = [], r.reset.push(r.dialog.firstChild), r.reset.push(r.dialog.lastChild), r.commands = {}, r.commands.container = r.reset[0].nextSibling, r.commands.pin = r.commands.container.firstChild, r.commands.maximize = r.commands.pin.nextSibling, r.commands.close = r.commands.maximize.nextSibling, r.header = r.commands.container.nextSibling, r.body = r.header.nextSibling, r.body.innerHTML = d.content, r.content = r.body.firstChild, r.footer = r.body.nextSibling, r.footer.innerHTML = d.buttons.auxiliary + d.buttons.primary, r.resizeHandle = r.footer.nextSibling, r.buttons = {}, r.buttons.auxiliary = r.footer.firstChild, r.buttons.primary = r.buttons.auxiliary.nextSibling, r.buttons.primary.innerHTML = d.button, r.buttonTemplate = r.buttons.primary.firstChild, r.buttons.primary.removeChild(r.buttonTemplate), p = 0; p < n.__internal.buttons.length; p += 1) {
                    u = n.__internal.buttons[p];
                    at.indexOf(u.key) < 0 && at.push(u.key);
                    u.element = r.buttonTemplate.cloneNode();
                    u.element.innerHTML = u.text;
                    "string" == typeof u.className && "" !== u.className && t(u.element, u.className);
                    for (h in u.attrs)
                        "className" !== h && u.attrs.hasOwnProperty(h) && u.element.setAttribute(h, u.attrs[h]);
                    "auxiliary" === u.scope ? r.buttons.auxiliary.appendChild(u.element) : r.buttons.primary.appendChild(u.element)
                }
                n.elements = r;
                e.resetHandler = s(n, ri);
                e.beginMoveHandler = s(n, ou);
                e.beginResizeHandler = s(n, cu);
                e.bringToFrontHandler = s(n, vi);
                e.modalClickHandler = s(n, tu);
                e.buttonsClickHandler = s(n, iu);
                e.commandsClickHandler = s(n, br);
                e.transitionInHandler = s(n, ru);
                e.transitionOutHandler = s(n, uu);
                for (o in e.options)
                    void 0 !== f.options[o] ? n.set(o, f.options[o]) : i.defaults.hasOwnProperty(o) ? n.set(o, i.defaults[o]) : "title" === o && n.set(o, i.defaults.glossary[o]);
                "function" == typeof n.build && n.build()
            }
            document.body.appendChild(n.elements.root)
        }
        function lr() {
            or = p();
            ut = y()
        }
        function li() {
            n.scrollTo(or, ut)
        }
        function it() {
            for (var u, n = 0, i = 0; i < f.length; i += 1)
                u = f[i], (u.isModal() || u.isMaximized()) && (n += 1);
            0 === n && document.body.className.indexOf(c.noOverflow) >= 0 ? (r(document.body, c.noOverflow), ai(!1)) : n > 0 && document.body.className.indexOf(c.noOverflow) < 0 && (ai(!0), t(document.body, c.noOverflow))
        }
        function ai(u) {
            i.defaults.preventBodyShift && document.documentElement.scrollHeight > document.documentElement.clientHeight && (u ? (cr = ut, hr = n.getComputedStyle(document.body).top, t(document.body, c.fixed), document.body.style.top = -ut + "px") : (ut = cr, document.body.style.top = hr, r(document.body, c.fixed), li()))
        }
        function ar(n, i, u) {
            "string" == typeof u && r(n.elements.root, c.prefix + u);
            t(n.elements.root, c.prefix + i);
            si = n.elements.root.offsetWidth
        }
        function vr(n) {
            n.get("modal") ? (r(n.elements.root, c.modeless), n.isOpen() && (ir(n), ti(n), it())) : (t(n.elements.root, c.modeless), n.isOpen() && (tr(n), ti(n), it()))
        }
        function yr(n) {
            n.get("basic") ? t(n.elements.root, c.basic) : r(n.elements.root, c.basic)
        }
        function pr(n) {
            n.get("frameless") ? t(n.elements.root, c.frameless) : r(n.elements.root, c.frameless)
        }
        function vi(n, t) {
            for (var r = f.indexOf(t), i = r + 1; i < f.length; i += 1)
                if (f[i].isModal())
                    return;
            return document.body.lastChild !== t.elements.root && (document.body.appendChild(t.elements.root), f.splice(f.indexOf(t), 1), f.push(t), ii(t)), !1
        }
        function wr(n, i, u, f) {
            switch (i) {
                case"title":
                    n.setHeader(f);
                    break;
                case"modal":
                    vr(n);
                    break;
                case"basic":
                    yr(n);
                    break;
                case"frameless":
                    pr(n);
                    break;
                case"pinned":
                    dr(n);
                    break;
                case"closable":
                    nu(n);
                    break;
                case"maximizable":
                    gr(n);
                    break;
                case"pinnable":
                    kr(n);
                    break;
                case"movable":
                    su(n);
                    break;
                case"resizable":
                    lu(n);
                    break;
                case"padding":
                    f ? r(n.elements.root, c.noPadding) : n.elements.root.className.indexOf(c.noPadding) < 0 && t(n.elements.root, c.noPadding);
                    break;
                case"overflow":
                    f ? r(n.elements.root, c.noOverflow) : n.elements.root.className.indexOf(c.noOverflow) < 0 && t(n.elements.root, c.noOverflow);
                    break;
                case"transition":
                    ar(n, f, u)
            }
            "function" == typeof n.hooks.onupdate && n.hooks.onupdate.call(n, i, u, f)
        }
        function gt(n, t, i, r, u) {
            var e = {op: void 0, items: []}, s, o, f;
            if (void 0 === u && "string" == typeof r)
                e.op = "get", t.hasOwnProperty(r) ? (e.found = !0, e.value = t[r]) : (e.found = !1, e.value = void 0);
            else if (e.op = "set", "object" == typeof r) {
                o = r;
                for (f in o)
                    t.hasOwnProperty(f) ? (t[f] !== o[f] && (s = t[f], t[f] = o[f], i.call(n, f, s, o[f])), e.items.push({key: f, value: o[f], found: !0})) : e.items.push({key: f, value: o[f], found: !1})
            } else {
                if ("string" != typeof r)
                    throw new Error("args must be a string or object");
                t.hasOwnProperty(r) ? (t[r] !== u && (s = t[r], t[r] = u, i.call(n, r, s, u)), e.items.push({key: r, value: u, found: !0})) : e.items.push({key: r, value: u, found: !1})
            }
            return e
        }
        function ni(n) {
            var t;
            ht(n, function (n) {
                return t = !0 === n.invokeOnClose
            });
            !t && n.isOpen() && n.close()
        }
        function br(n, t) {
            switch (n.srcElement || n.target) {
                case t.elements.commands.pin:
                    t.isPinned() ? pi(t) : yi(t);
                    break;
                case t.elements.commands.maximize:
                    t.isMaximized() ? st(t) : wi(t);
                    break;
                case t.elements.commands.close:
                    ni(t)
            }
            return!1
        }
        function yi(n) {
            n.set("pinned", !0)
        }
        function pi(n) {
            n.set("pinned", !1)
        }
        function wi(n) {
            o("onmaximize", n);
            t(n.elements.root, c.maximized);
            n.isOpen() && it();
            o("onmaximized", n)
        }
        function st(n) {
            o("onrestore", n);
            r(n.elements.root, c.maximized);
            n.isOpen() && it();
            o("onrestored", n)
        }
        function kr(n) {
            n.get("pinnable") ? t(n.elements.root, c.pinnable) : r(n.elements.root, c.pinnable)
        }
        function bi(n) {
            var t = p();
            n.elements.modal.style.marginTop = y() + "px";
            n.elements.modal.style.marginLeft = t + "px";
            n.elements.modal.style.marginRight = -t + "px"
        }
        function ki(n) {
            var r = parseInt(n.elements.modal.style.marginTop, 10), u = parseInt(n.elements.modal.style.marginLeft, 10), t, i;
            (n.elements.modal.style.marginTop = "", n.elements.modal.style.marginLeft = "", n.elements.modal.style.marginRight = "", n.isOpen()) && (t = 0, i = 0, "" !== n.elements.dialog.style.top && (t = parseInt(n.elements.dialog.style.top, 10)), n.elements.dialog.style.top = t + (r - y()) + "px", "" !== n.elements.dialog.style.left && (i = parseInt(n.elements.dialog.style.left, 10)), n.elements.dialog.style.left = i + (u - p()) + "px")
        }
        function ti(n) {
            n.get("modal") || n.get("pinned") ? ki(n) : bi(n)
        }
        function dr(n) {
            n.get("pinned") ? (r(n.elements.root, c.unpinned), n.isOpen() && ki(n)) : (t(n.elements.root, c.unpinned), n.isOpen() && !n.isModal() && bi(n))
        }
        function gr(n) {
            n.get("maximizable") ? t(n.elements.root, c.maximizable) : r(n.elements.root, c.maximizable)
        }
        function nu(n) {
            n.get("closable") ? (t(n.elements.root, c.closable), yu(n)) : (r(n.elements.root, c.closable), pu(n))
        }
        function tu(n, t) {
            var i = n.srcElement || n.target;
            return hi || i !== t.elements.modal || !0 !== t.get("closableByDimmer") || ni(t), hi = !1, !1
        }
        function ht(n, t) {
            for (var r, u, i = 0; i < n.__internal.buttons.length; i += 1)
                if (r = n.__internal.buttons[i], !r.element.disabled && t(r)) {
                    u = k(i, r);
                    "function" == typeof n.callback && n.callback.apply(n, [u]);
                    !1 === u.cancel && n.close();
                    break
                }
        }
        function iu(n, t) {
            var i = n.srcElement || n.target;
            ht(t, function (n) {
                return n.element === i && (ft = !0)
            })
        }
        function di(n) {
            if (ft)
                return void(ft = !1);
            var t = f[f.length - 1], i = n.keyCode;
            return 0 === t.__internal.buttons.length && i === h.ESC && !0 === t.get("closable") ? (ni(t), !1) : at.indexOf(i) > -1 ? (ht(t, function (n) {
                return n.key === i
            }), !1) : void 0
        }
        function gi(n) {
            var u = f[f.length - 1], t = n.keyCode, i, r;
            if (t === h.LEFT || t === h.RIGHT) {
                for (i = u.__internal.buttons, r = 0; r < i.length; r += 1)
                    if (document.activeElement === i[r].element)
                        switch (t) {
                            case h.LEFT:
                                return void i[(r || i.length) - 1].element.focus();
                            case h.RIGHT:
                                return void i[(r + 1) % i.length].element.focus()
                        }
            } else if (t < h.F12 + 1 && t > h.F1 - 1 && at.indexOf(t) > -1)
                return n.preventDefault(), n.stopPropagation(), ht(u, function (n) {
                    return n.key === t
                }), !1
        }
        function ii(n, t) {
            if (t)
                t.focus();
            else {
                var r = n.__internal.focus, i = r.element;
                switch (typeof r.element) {
                    case"number":
                        n.__internal.buttons.length > r.element && (i = !0 === n.get("basic") ? n.elements.reset[0] : n.__internal.buttons[r.element].element);
                        break;
                    case"string":
                        i = n.elements.body.querySelector(r.element);
                        break;
                    case"function":
                        i = r.element.call(n)
                }
                void 0 !== i && null !== i || 0 !== n.__internal.buttons.length || (i = n.elements.reset[0]);
                i && i.focus && (i.focus(), r.select && i.select && i.select())
            }
        }
        function ri(n, t) {
            var r, i, u, e;
            if (!t)
                for (r = f.length - 1; r > - 1; r -= 1)
                    if (f[r].isModal()) {
                        t = f[r];
                        break
                    }
            t && t.isModal() && (u = n.srcElement || n.target, e = u === t.elements.reset[1] || 0 === t.__internal.buttons.length && u === document.body, e && (t.get("maximizable") ? i = t.elements.commands.maximize : t.get("closable") && (i = t.elements.commands.close)), void 0 === i && ("number" == typeof t.__internal.focus.element ? u === t.elements.reset[0] ? i = t.elements.buttons.auxiliary.firstChild || t.elements.buttons.primary.firstChild : e && (i = t.elements.reset[0]) : u === t.elements.reset[0] && (i = t.elements.buttons.primary.lastChild || t.elements.buttons.auxiliary.lastChild)), ii(t, i))
        }
        function ru(n, t) {
            clearTimeout(t.__internal.timerIn);
            ii(t);
            li();
            ft = !1;
            o("onfocus", t);
            e(t.elements.dialog, a.type, t.__internal.transitionInHandler);
            r(t.elements.root, c.animationIn)
        }
        function uu(n, t) {
            clearTimeout(t.__internal.timerOut);
            e(t.elements.dialog, a.type, t.__internal.transitionOutHandler);
            ct(t);
            lt(t);
            t.isMaximized() && !t.get("startMaximized") && st(t);
            i.defaults.maintainFocus && t.__internal.activeElement && (t.__internal.activeElement.focus(), t.__internal.activeElement = null);
            "function" == typeof t.__internal.destroy && t.__internal.destroy.apply(t)
        }
        function fu(n, t) {
            var r = n[vt] - ci, i = n[yt] - et;
            pt && (i -= document.body.scrollTop);
            t.style.left = r + "px";
            t.style.top = i + "px"
        }
        function eu(n, t) {
            var r = n[vt] - ci, i = n[yt] - et;
            pt && (i -= document.body.scrollTop);
            t.style.left = Math.min(nt.maxLeft, Math.max(nt.minLeft, r)) + "px";
            t.style.top = pt ? Math.min(nt.maxTop, Math.max(nt.minTop, i)) + "px" : Math.max(nt.minTop, i) + "px"
        }
        function ou(n, i) {
            var u, f, e, r;
            if (null === g && !i.isMaximized() && i.get("movable") && (f = 0, e = 0, "touchstart" === n.type ? (n.preventDefault(), u = n.targetTouches[0], vt = "clientX", yt = "clientY") : 0 === n.button && (u = n), u)) {
                if (r = i.elements.dialog, t(r, c.capture), r.style.left && (f = parseInt(r.style.left, 10)), r.style.top && (e = parseInt(r.style.top, 10)), ci = u[vt] - f, et = u[yt] - e, i.isModal() ? et += i.elements.modal.scrollTop : i.isPinned() && (et -= document.body.scrollTop), i.get("moveBounded")) {
                    var s = r, h = -f, l = -e;
                    do
                        h += s.offsetLeft, l += s.offsetTop;
                    while (s = s.offsetParent);
                    nt = {maxLeft: h, minLeft: -h, maxTop: document.documentElement.clientHeight - r.clientHeight - l, minTop: -l};
                    wt = eu
                } else
                    nt = null, wt = fu;
                return o("onmove", i), pt = !i.isModal() && i.isPinned(), tt = i, wt(u, r), t(document.body, c.noSelection), !1
            }
        }
        function ui(n) {
            if (tt) {
                var t;
                "touchmove" === n.type ? (n.preventDefault(), t = n.targetTouches[0]) : 0 === n.button && (t = n);
                t && wt(t, tt.elements.dialog)
            }
        }
        function fi() {
            if (tt) {
                var n = tt;
                tt = nt = null;
                r(document.body, c.noSelection);
                r(n.elements.dialog, c.capture);
                o("onmoved", n)
            }
        }
        function ct(n) {
            tt = null;
            var t = n.elements.dialog;
            t.style.left = t.style.top = ""
        }
        function su(n) {
            n.get("movable") ? (t(n.elements.root, c.movable), n.isOpen() && rr(n)) : (ct(n), r(n.elements.root, c.movable), n.isOpen() && ur(n))
        }
        function hu(n, t, i) {
            var u = t, f = 0, h = 0, r, o, s, e;
            do
                f += u.offsetLeft, h += u.offsetTop;
            while (u = u.offsetParent);
            !0 === i ? (r = n.pageX, o = n.pageY) : (r = n.clientX, o = n.clientY);
            s = w();
            (s && (r = document.body.offsetWidth - r, isNaN(rt) || (f = document.body.offsetWidth - f - t.offsetWidth)), t.style.height = o - h + dt + "px", t.style.width = r - f + dt + "px", isNaN(rt)) || (e = .5 * Math.abs(t.offsetWidth - bt), s && (e *= -1), t.offsetWidth > bt ? t.style.left = rt + e + "px" : t.offsetWidth >= kt && (t.style.left = rt - e + "px"))
        }
        function cu(n, i) {
            var u, r;
            if (!i.isMaximized() && ("touchstart" === n.type ? (n.preventDefault(), u = n.targetTouches[0]) : 0 === n.button && (u = n), u))
                return o("onresize", i), g = i, dt = i.elements.resizeHandle.offsetHeight / 2, r = i.elements.dialog, t(r, c.capture), rt = parseInt(r.style.left, 10), r.style.height = r.offsetHeight + "px", r.style.minHeight = i.elements.header.offsetHeight + i.elements.footer.offsetHeight + "px", r.style.width = (bt = r.offsetWidth) + "px", "none" !== r.style.maxWidth && (r.style.minWidth = (kt = r.offsetWidth) + "px"), r.style.maxWidth = "none", t(document.body, c.noSelection), !1
        }
        function ei(n) {
            if (g) {
                var t;
                "touchmove" === n.type ? (n.preventDefault(), t = n.targetTouches[0]) : 0 === n.button && (t = n);
                t && hu(t, g.elements.dialog, !g.get("modal") && !g.get("pinned"))
            }
        }
        function oi() {
            if (g) {
                var n = g;
                g = null;
                r(document.body, c.noSelection);
                r(n.elements.dialog, c.capture);
                hi = !0;
                o("onresized", n)
            }
        }
        function lt(n) {
            g = null;
            var t = n.elements.dialog;
            "none" === t.style.maxWidth && (t.style.maxWidth = t.style.minWidth = t.style.width = t.style.height = t.style.minHeight = t.style.left = "", rt = Number.Nan, bt = kt = dt = 0)
        }
        function lu(n) {
            n.get("resizable") ? (t(n.elements.root, c.resizable), n.isOpen() && fr(n)) : (lt(n), r(n.elements.root, c.resizable), n.isOpen() && er(n))
        }
        function nr() {
            for (var t, n = 0; n < f.length; n += 1)
                t = f[n], t.get("autoReset") && (ct(t), lt(t))
        }
        function au(t) {
            1 === f.length && (u(n, "resize", nr), u(document.body, "keyup", di), u(document.body, "keydown", gi), u(document.body, "focus", ri), u(document.documentElement, "mousemove", ui), u(document.documentElement, "touchmove", ui), u(document.documentElement, "mouseup", fi), u(document.documentElement, "touchend", fi), u(document.documentElement, "mousemove", ei), u(document.documentElement, "touchmove", ei), u(document.documentElement, "mouseup", oi), u(document.documentElement, "touchend", oi));
            u(t.elements.commands.container, "click", t.__internal.commandsClickHandler);
            u(t.elements.footer, "click", t.__internal.buttonsClickHandler);
            u(t.elements.reset[0], "focus", t.__internal.resetHandler);
            u(t.elements.reset[1], "focus", t.__internal.resetHandler);
            ft = !0;
            u(t.elements.dialog, a.type, t.__internal.transitionInHandler);
            t.get("modal") || tr(t);
            t.get("resizable") && fr(t);
            t.get("movable") && rr(t)
        }
        function vu(t) {
            1 === f.length && (e(n, "resize", nr), e(document.body, "keyup", di), e(document.body, "keydown", gi), e(document.body, "focus", ri), e(document.documentElement, "mousemove", ui), e(document.documentElement, "mouseup", fi), e(document.documentElement, "mousemove", ei), e(document.documentElement, "mouseup", oi));
            e(t.elements.commands.container, "click", t.__internal.commandsClickHandler);
            e(t.elements.footer, "click", t.__internal.buttonsClickHandler);
            e(t.elements.reset[0], "focus", t.__internal.resetHandler);
            e(t.elements.reset[1], "focus", t.__internal.resetHandler);
            u(t.elements.dialog, a.type, t.__internal.transitionOutHandler);
            t.get("modal") || ir(t);
            t.get("movable") && ur(t);
            t.get("resizable") && er(t)
        }
        function tr(n) {
            u(n.elements.dialog, "focus", n.__internal.bringToFrontHandler, !0)
        }
        function ir(n) {
            e(n.elements.dialog, "focus", n.__internal.bringToFrontHandler, !0)
        }
        function rr(n) {
            u(n.elements.header, "mousedown", n.__internal.beginMoveHandler);
            u(n.elements.header, "touchstart", n.__internal.beginMoveHandler)
        }
        function ur(n) {
            e(n.elements.header, "mousedown", n.__internal.beginMoveHandler);
            e(n.elements.header, "touchstart", n.__internal.beginMoveHandler)
        }
        function fr(n) {
            u(n.elements.resizeHandle, "mousedown", n.__internal.beginResizeHandler);
            u(n.elements.resizeHandle, "touchstart", n.__internal.beginResizeHandler)
        }
        function er(n) {
            e(n.elements.resizeHandle, "mousedown", n.__internal.beginResizeHandler);
            e(n.elements.resizeHandle, "touchstart", n.__internal.beginResizeHandler)
        }
        function yu(n) {
            u(n.elements.modal, "click", n.__internal.modalClickHandler)
        }
        function pu(n) {
            e(n.elements.modal, "click", n.__internal.modalClickHandler)
        }
        var or, ut, at = [], si = null, sr = !1, wu = n.navigator.userAgent.indexOf("Safari") > -1 && n.navigator.userAgent.indexOf("Chrome") < 0, d = {dimmer: '<div class="ajs-dimmer"><\/div>', modal: '<div class="ajs-modal" tabindex="0"><\/div>', dialog: '<div class="ajs-dialog" tabindex="0"><\/div>', reset: '<button class="ajs-reset"><\/button>', commands: '<div class="ajs-commands"><button class="ajs-pin"><\/button><button class="ajs-maximize"><\/button><button class="ajs-close"><\/button><\/div>', header: '<div class="ajs-header"><\/div>', body: '<div class="ajs-body"><\/div>', content: '<div class="ajs-content"><\/div>', footer: '<div class="ajs-footer"><\/div>', buttons: {primary: '<div class="ajs-primary ajs-buttons"><\/div>', auxiliary: '<div class="ajs-auxiliary ajs-buttons"><\/div>'}, button: '<button class="ajs-button"><\/button>', resizeHandle: '<div class="ajs-handle"><\/div>'}, c = {animationIn: "ajs-in", animationOut: "ajs-out", base: "alertify", basic: "ajs-basic", capture: "ajs-capture", closable: "ajs-closable", fixed: "ajs-fixed", frameless: "ajs-frameless", hidden: "ajs-hidden", maximize: "ajs-maximize", maximized: "ajs-maximized", maximizable: "ajs-maximizable", modeless: "ajs-modeless", movable: "ajs-movable", noSelection: "ajs-no-selection", noOverflow: "ajs-no-overflow", noPadding: "ajs-no-padding", pin: "ajs-pin", pinnable: "ajs-pinnable", prefix: "ajs-", resizable: "ajs-resizable", restore: "ajs-restore", shake: "ajs-shake", unpinned: "ajs-unpinned"}, hr = "", cr = 0, hi = !1, ft = !1, tt = null, ci = 0, et = 0, vt = "pageX", yt = "pageY", nt = null, pt = !1, wt = null, g = null, rt = Number.Nan, bt = 0, kt = 0, dt = 0;
        return{__init: ot, isOpen: function () {
                return this.__internal.isOpen
            }, isModal: function () {
                return this.elements.root.className.indexOf(c.modeless) < 0
            }, isMaximized: function () {
                return this.elements.root.className.indexOf(c.maximized) > -1
            }, isPinned: function () {
                return this.elements.root.className.indexOf(c.unpinned) < 0
            }, maximize: function () {
                return this.isMaximized() || wi(this), this
            }, restore: function () {
                return this.isMaximized() && st(this), this
            }, pin: function () {
                return this.isPinned() || yi(this), this
            }, unpin: function () {
                return this.isPinned() && pi(this), this
            }, bringToFront: function () {
                return vi(null, this), this
            }, moveTo: function (n, t) {
                var e, s;
                if (!isNaN(n) && !isNaN(t)) {
                    o("onmove", this);
                    var i = this.elements.dialog, r = i, u = 0, f = 0;
                    i.style.left && (u -= parseInt(i.style.left, 10));
                    i.style.top && (f -= parseInt(i.style.top, 10));
                    do
                        u += r.offsetLeft, f += r.offsetTop;
                    while (r = r.offsetParent);
                    e = n - u;
                    s = t - f;
                    w() && (e *= -1);
                    i.style.left = e + "px";
                    i.style.top = s + "px";
                    o("onmoved", this)
                }
                return this
            }, resizeTo: function (n, t) {
                var r = parseFloat(n), u = parseFloat(t), f = /(\d*\.\d+|\d+)%/, i;
                return isNaN(r) || isNaN(u) || !0 !== this.get("resizable") || (o("onresize", this), ("" + n).match(f) && (r = r / 100 * document.documentElement.clientWidth), ("" + t).match(f) && (u = u / 100 * document.documentElement.clientHeight), i = this.elements.dialog, "none" !== i.style.maxWidth && (i.style.minWidth = (kt = i.offsetWidth) + "px"), i.style.maxWidth = "none", i.style.minHeight = this.elements.header.offsetHeight + this.elements.footer.offsetHeight + "px", i.style.width = r + "px", i.style.height = u + "px", o("onresized", this)), this
            }, setting: function (n, t) {
                var e = this, i = gt(this, this.__internal.options, function (n, t, i) {
                    wr(e, n, t, i)
                }, n, t), f, r, u;
                if ("get" === i.op)
                    return i.found ? i.value : void 0 !== this.settings ? gt(this, this.settings, this.settingUpdated || function () {
                    }, n, t).value : void 0;
                if ("set" === i.op) {
                    if (i.items.length > 0)
                        for (f = this.settingUpdated || function () {
                        }, r = 0; r < i.items.length; r += 1)
                            u = i.items[r], u.found || void 0 === this.settings || gt(this, this.settings, f, u.key, u.value);
                    return this
                }
            }, set: function (n, t) {
                return this.setting(n, t), this
            }, get: function (n) {
                return this.setting(n)
            }, setHeader: function (t) {
                return"string" == typeof t ? (l(this.elements.header), this.elements.header.innerHTML = t) : t instanceof n.HTMLElement && this.elements.header.firstChild !== t && (l(this.elements.header), this.elements.header.appendChild(t)), this
            }, setContent: function (t) {
                return"string" == typeof t ? (l(this.elements.content), this.elements.content.innerHTML = t) : t instanceof n.HTMLElement && this.elements.content.firstChild !== t && (l(this.elements.content), this.elements.content.appendChild(t)), this
            }, showModal: function (n) {
                return this.show(!0, n)
            }, show: function (n, u) {
                var s, e;
                return(ot(this), this.__internal.isOpen) ? (ct(this), lt(this), t(this.elements.dialog, c.shake), s = this, setTimeout(function () {
                    r(s.elements.dialog, c.shake)
                }, 200)) : ((this.__internal.isOpen = !0, f.push(this), i.defaults.maintainFocus && (this.__internal.activeElement = document.activeElement), document.body.hasAttribute("tabindex") || document.body.setAttribute("tabindex", sr = "0"), "function" == typeof this.prepare && this.prepare(), au(this), void 0 !== n && this.set("modal", n), lr(), it(), "string" == typeof u && "" !== u && (this.__internal.className = u, t(this.elements.root, u)), this.get("startMaximized") ? this.maximize() : this.isMaximized() && st(this), ti(this), r(this.elements.root, c.animationOut), t(this.elements.root, c.animationIn), clearTimeout(this.__internal.timerIn), this.__internal.timerIn = setTimeout(this.__internal.transitionInHandler, a.supported ? 1e3 : 100), wu) && (e = this.elements.root, e.style.display = "none", setTimeout(function () {
                    e.style.display = "block"
                }, 0)), si = this.elements.root.offsetWidth, r(this.elements.root, c.hidden), "function" == typeof this.hooks.onshow && this.hooks.onshow.call(this), o("onshow", this)), this
            }, close: function () {
                return this.__internal.isOpen && !1 !== o("onclosing", this) && (vu(this), r(this.elements.root, c.animationIn), t(this.elements.root, c.animationOut), clearTimeout(this.__internal.timerOut), this.__internal.timerOut = setTimeout(this.__internal.transitionOutHandler, a.supported ? 1e3 : 100), t(this.elements.root, c.hidden), si = this.elements.modal.offsetWidth, void 0 !== this.__internal.className && "" !== this.__internal.className && r(this.elements.root, this.__internal.className), "function" == typeof this.hooks.onclose && this.hooks.onclose.call(this), o("onclose", this), f.splice(f.indexOf(this), 1), this.__internal.isOpen = !1, it()), f.length || "0" !== sr || document.body.removeAttribute("tabindex"), this
            }, closeOthers: function () {
                return i.closeAll(this), this
            }, destroy: function () {
                return this.__internal.isOpen ? (this.__internal.destroy = function () {
                    b(this, ot)
                }, this.close()) : b(this, ot), this
            }}
    }(), c = function () {
        function v(n) {
            n.__internal || (n.__internal = {position: i.defaults.notifier.position, delay: i.defaults.notifier.delay}, o = document.createElement("DIV"), y(n));
            o.parentNode !== document.body && document.body.appendChild(o)
        }
        function p(n) {
            n.__internal.pushed = !0;
            h.push(n)
        }
        function w(n) {
            h.splice(h.indexOf(n), 1);
            n.__internal.pushed = !1
        }
        function y(n) {
            switch (o.className = f.base, n.__internal.position) {
                case"top-right":
                    t(o, f.top + " " + f.right);
                    break;
                case"top-left":
                    t(o, f.top + " " + f.left);
                    break;
                case"top-center":
                    t(o, f.top + " " + f.center);
                    break;
                case"bottom-left":
                    t(o, f.bottom + " " + f.left);
                    break;
                case"bottom-center":
                    t(o, f.bottom + " " + f.center);
                    break;
                default:
                case"bottom-right":
                    t(o, f.bottom + " " + f.right)
            }
        }
        function b(h, v) {
            function d(n, t) {
                t.__internal.closeButton && "true" !== n.target.getAttribute("data-close") || t.dismiss(!0)
            }
            function b(n, t) {
                e(t.element, a.type, b);
                o.removeChild(t.element)
            }
            function g(n) {
                return n.__internal || (n.__internal = {pushed: !1, delay: void 0, timer: void 0, clickHandler: void 0, transitionEndHandler: void 0, transitionTimeout: void 0}, n.__internal.clickHandler = s(n, d), n.__internal.transitionEndHandler = s(n, b)), n
            }
            function y(n) {
                clearTimeout(n.__internal.timer);
                clearTimeout(n.__internal.transitionTimeout)
            }
            return g({element: h, push: function (n, r) {
                    if (!this.__internal.pushed) {
                        p(this);
                        y(this);
                        var s, e;
                        switch (arguments.length) {
                            case 0:
                                e = this.__internal.delay;
                                break;
                            case 1:
                                "number" == typeof n ? e = n : (s = n, e = this.__internal.delay);
                                break;
                            case 2:
                                s = n;
                                e = r
                        }
                        return this.__internal.closeButton = i.defaults.notifier.closeButton, void 0 !== s && this.setContent(s), c.__internal.position.indexOf("top") < 0 ? o.appendChild(this.element) : o.insertBefore(this.element, o.firstChild), k = this.element.offsetWidth, t(this.element, f.visible), u(this.element, "click", this.__internal.clickHandler), this.delay(e)
                    }
                    return this
                }, ondismiss: function () {
                }, callback: v, dismiss: function (n) {
                    return this.__internal.pushed && (y(this), "function" == typeof this.ondismiss && !1 === this.ondismiss.call(this) || (e(this.element, "click", this.__internal.clickHandler), void 0 !== this.element && this.element.parentNode === o && (this.__internal.transitionTimeout = setTimeout(this.__internal.transitionEndHandler, a.supported ? 1e3 : 100), r(this.element, f.visible), "function" == typeof this.callback && this.callback.call(this, n)), w(this))), this
                }, delay: function (n) {
                    if (y(this), this.__internal.delay = void 0 === n || isNaN(+n) ? c.__internal.delay : +n, this.__internal.delay > 0) {
                        var t = this;
                        this.__internal.timer = setTimeout(function () {
                            t.dismiss()
                        }, 1e3 * this.__internal.delay)
                    }
                    return this
                }, setContent: function (i) {
                    if ("string" == typeof i ? (l(this.element), this.element.innerHTML = i) : i instanceof n.HTMLElement && this.element.firstChild !== i && (l(this.element), this.element.appendChild(i)), this.__internal.closeButton) {
                        var r = document.createElement("span");
                        t(r, f.close);
                        r.setAttribute("data-close", !0);
                        this.element.appendChild(r)
                    }
                    return this
                }, dismissOthers: function () {
                    return c.dismissAll(this), this
                }})
        }
        var k, o, h = [], f = {base: "alertify-notifier", message: "ajs-message", top: "ajs-top", right: "ajs-right", bottom: "ajs-bottom", left: "ajs-left", center: "ajs-center", visible: "ajs-visible", hidden: "ajs-hidden", close: "ajs-close"};
        return{setting: function (n, t) {
                if (v(this), void 0 === t)
                    return this.__internal[n];
                switch (n) {
                    case"position":
                        this.__internal.position = t;
                        y(this);
                        break;
                    case"delay":
                        this.__internal.delay = t
                }
                return this
            }, set: function (n, t) {
                return this.setting(n, t), this
            }, get: function (n) {
                return this.setting(n)
            }, create: function (n, t) {
                v(this);
                var i = document.createElement("div");
                return i.className = f.message + ("string" == typeof n && "" !== n ? " ajs-" + n : ""), b(i, t)
            }, dismissAll: function (n) {
                for (var r, i = h.slice(0), t = 0; t < i.length; t += 1)
                    r = i[t], void 0 !== n && n === r || r.dismiss()
            }}
    }(), i = new g;
    i.dialog("alert", function () {
        return{main: function (n, t, i) {
                var u, r, f;
                switch (arguments.length) {
                    case 1:
                        r = n;
                        break;
                    case 2:
                        "function" == typeof t ? (r = n, f = t) : (u = n, r = t);
                        break;
                    case 3:
                        u = n;
                        r = t;
                        f = i
                }
                return this.set("title", u), this.set("message", r), this.set("onok", f), this
            }, setup: function () {
                return{buttons: [{text: i.defaults.glossary.ok, key: h.ESC, invokeOnClose: !0, className: i.defaults.theme.ok}], focus: {element: 0, select: !1}, options: {maximizable: !1, resizable: !1}}
            }, build: function () {
            }, prepare: function () {
            }, setMessage: function (n) {
                this.setContent(n)
            }, settings: {message: void 0, onok: void 0, label: void 0}, settingUpdated: function (n, t, i) {
                switch (n) {
                    case"message":
                        this.setMessage(i);
                        break;
                    case"label":
                        this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = i)
                }
            }, callback: function (n) {
                if ("function" == typeof this.get("onok")) {
                    var t = this.get("onok").call(this, n);
                    void 0 !== t && (n.cancel = !t)
                }
            }}
    });
    i.dialog("confirm", function () {
        function t(t) {
            null !== n.timer && (clearInterval(n.timer), n.timer = null, t.__internal.buttons[n.index].element.innerHTML = n.text)
        }
        function r(i, r, u) {
            t(i);
            n.duration = u;
            n.index = r;
            n.text = i.__internal.buttons[r].element.innerHTML;
            n.timer = setInterval(s(i, n.task), 1e3);
            n.task(null, i)
        }
        var n = {timer: null, index: null, text: null, duration: null, task: function (i, r) {
                if (r.isOpen()) {
                    if (r.__internal.buttons[n.index].element.innerHTML = n.text + " (&#8207;" + n.duration + "&#8207;) ", n.duration -= 1, -1 === n.duration) {
                        t(r);
                        var f = r.__internal.buttons[n.index], u = k(n.index, f);
                        "function" == typeof r.callback && r.callback.apply(r, [u]);
                        !1 !== u.close && r.close()
                    }
                } else
                    t(r)
            }};
        return{main: function (n, t, i, r) {
                var o, u, f, e;
                switch (arguments.length) {
                    case 1:
                        u = n;
                        break;
                    case 2:
                        u = n;
                        f = t;
                        break;
                    case 3:
                        u = n;
                        f = t;
                        e = i;
                        break;
                    case 4:
                        o = n;
                        u = t;
                        f = i;
                        e = r
                }
                return this.set("title", o), this.set("message", u), this.set("onok", f), this.set("oncancel", e), this
            }, setup: function () {
                return{buttons: [{text: i.defaults.glossary.ok, key: h.ENTER, className: i.defaults.theme.ok}, {text: i.defaults.glossary.cancel, key: h.ESC, invokeOnClose: !0, className: i.defaults.theme.cancel}], focus: {element: 0, select: !1}, options: {maximizable: !1, resizable: !1}}
            }, build: function () {
            }, prepare: function () {
            }, setMessage: function (n) {
                this.setContent(n)
            }, settings: {message: null, labels: null, onok: null, oncancel: null, defaultFocus: null, reverseButtons: null}, settingUpdated: function (n, t, i) {
                switch (n) {
                    case"message":
                        this.setMessage(i);
                        break;
                    case"labels":
                        "ok"in i && this.__internal.buttons[0].element && (this.__internal.buttons[0].text = i.ok, this.__internal.buttons[0].element.innerHTML = i.ok);
                        "cancel"in i && this.__internal.buttons[1].element && (this.__internal.buttons[1].text = i.cancel, this.__internal.buttons[1].element.innerHTML = i.cancel);
                        break;
                    case"reverseButtons":
                        !0 === i ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);
                        break;
                    case"defaultFocus":
                        this.__internal.focus.element = "ok" === i ? 0 : 1
                }
            }, callback: function (n) {
                t(this);
                var i;
                switch (n.index) {
                    case 0:
                        "function" == typeof this.get("onok") && void 0 !== (i = this.get("onok").call(this, n)) && (n.cancel = !i);
                        break;
                    case 1:
                        "function" == typeof this.get("oncancel") && void 0 !== (i = this.get("oncancel").call(this, n)) && (n.cancel = !i)
                }
            }, autoOk: function (n) {
                return r(this, 0, n), this
            }, autoCancel: function (n) {
                return r(this, 1, n), this
            }}
    });
    i.dialog("prompt", function () {
        var t = document.createElement("INPUT"), r = document.createElement("P");
        return{main: function (n, t, i, r, u) {
                var h, f, e, o, s;
                switch (arguments.length) {
                    case 1:
                        f = n;
                        break;
                    case 2:
                        f = n;
                        e = t;
                        break;
                    case 3:
                        f = n;
                        e = t;
                        o = i;
                        break;
                    case 4:
                        f = n;
                        e = t;
                        o = i;
                        s = r;
                        break;
                    case 5:
                        h = n;
                        f = t;
                        e = i;
                        o = r;
                        s = u
                }
                return this.set("title", h), this.set("message", f), this.set("value", e), this.set("onok", o), this.set("oncancel", s), this
            }, setup: function () {
                return{buttons: [{text: i.defaults.glossary.ok, key: h.ENTER, className: i.defaults.theme.ok}, {text: i.defaults.glossary.cancel, key: h.ESC, invokeOnClose: !0, className: i.defaults.theme.cancel}], focus: {element: t, select: !0}, options: {maximizable: !1, resizable: !1}}
            }, build: function () {
                t.className = i.defaults.theme.input;
                t.setAttribute("type", "text");
                t.value = this.get("value");
                this.elements.content.appendChild(r);
                this.elements.content.appendChild(t)
            }, prepare: function () {
            }, setMessage: function (t) {
                "string" == typeof t ? (l(r), r.innerHTML = t) : t instanceof n.HTMLElement && r.firstChild !== t && (l(r), r.appendChild(t))
            }, settings: {message: void 0, labels: void 0, onok: void 0, oncancel: void 0, value: "", type: "text", reverseButtons: void 0}, settingUpdated: function (n, i, r) {
                switch (n) {
                    case"message":
                        this.setMessage(r);
                        break;
                    case"value":
                        t.value = r;
                        break;
                    case"type":
                        switch (r) {
                            case"text":
                            case"color":
                            case"date":
                            case"datetime-local":
                            case"email":
                            case"month":
                            case"number":
                            case"password":
                            case"search":
                            case"tel":
                            case"time":
                            case"week":
                                t.type = r;
                                break;
                            default:
                                t.type = "text"
                        }
                        break;
                    case"labels":
                        r.ok && this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = r.ok);
                        r.cancel && this.__internal.buttons[1].element && (this.__internal.buttons[1].element.innerHTML = r.cancel);
                        break;
                    case"reverseButtons":
                        !0 === r ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)
                }
            }, callback: function (n) {
                var i;
                switch (n.index) {
                    case 0:
                        this.settings.value = t.value;
                        "function" == typeof this.get("onok") && void 0 !== (i = this.get("onok").call(this, n, this.settings.value)) && (n.cancel = !i);
                        break;
                    case 1:
                        "function" == typeof this.get("oncancel") && void 0 !== (i = this.get("oncancel").call(this, n)) && (n.cancel = !i);
                        n.cancel || (t.value = this.settings.value)
                }
            }}
    });
    "object" == typeof module && "object" == typeof module.exports ? module.exports = i : "function" == typeof define && define.amd ? define([], function () {
        return i
    }) : n.alertify || (n.alertify = i)
}("undefined" != typeof window ? window : this)