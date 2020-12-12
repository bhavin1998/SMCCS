(function(n, t) {
    function i(t, i) {
        var u = t.nodeName.toLowerCase(),
            f, e, o;
        return "area" === u ? (f = t.parentNode, e = f.name, !t.href || !e || f.nodeName.toLowerCase() !== "map" ? !1 : (o = n("img[usemap=#" + e + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" == u ? t.href || i : i) && r(t)
    }

    function r(t) {
        return !n(t).parents().andSelf().filter(function() {
            return n.curCSS(this, "visibility") === "hidden" || n.expr.filters.hidden(this)
        }).length
    }(n.ui = n.ui || {}, n.ui.version) || (n.extend(n.ui, {
        version: "1.8.24",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), n.fn.extend({
        propAttr: n.fn.prop || n.fn.attr,
        _focus: n.fn.focus,
        focus: function(t, i) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    n(r).focus();
                    i && i.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = n.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(n.curCSS(this, "position", 1)) && /(auto|scroll)/.test(n.curCSS(this, "overflow", 1) + n.curCSS(this, "overflow-y", 1) + n.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(n.curCSS(this, "overflow", 1) + n.curCSS(this, "overflow-y", 1) + n.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var r = n(this[0]), u, f; r.length && r[0] !== document;) {
                    if (u = r.css("position"), (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && f !== 0)) return f;
                    r = r.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                n.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
        function u(t, i, r, u) {
            return n.each(o, function() {
                i -= parseFloat(n.curCSS(t, "padding" + this, !0)) || 0;
                r && (i -= parseFloat(n.curCSS(t, "border" + this + "Width", !0)) || 0);
                u && (i -= parseFloat(n.curCSS(t, "margin" + this, !0)) || 0)
            }), i
        }
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            f = r.toLowerCase(),
            e = {
                innerWidth: n.fn.innerWidth,
                innerHeight: n.fn.innerHeight,
                outerWidth: n.fn.outerWidth,
                outerHeight: n.fn.outerHeight
            };
        n.fn["inner" + r] = function(i) {
            return i === t ? e["inner" + r].call(this) : this.each(function() {
                n(this).css(f, u(this, i) + "px")
            })
        };
        n.fn["outer" + r] = function(t, i) {
            return typeof t != "number" ? e["outer" + r].call(this, t) : this.each(function() {
                n(this).css(f, u(this, t, !0, i) + "px")
            })
        }
    }), n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var r = n.attr(t, "tabindex"),
                u = isNaN(r);
            return (u || r >= 0) && i(t, !u)
        }
    }), n(function() {
        var i = document.body,
            t = i.appendChild(t = document.createElement("div"));
        t.offsetHeight;
        n.extend(t.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        n.support.minHeight = t.offsetHeight === 100;
        n.support.selectstart = "onselectstart" in t;
        i.removeChild(t).style.display = "none"
    }), n.curCSS || (n.curCSS = n.css), n.extend(n.ui, {
        plugin: {
            add: function(t, i, r) {
                var f = n.ui[t].prototype;
                for (var u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i) {
                var u = n.plugins[t],
                    r;
                if (u && n.element[0].parentNode)
                    for (r = 0; r < u.length; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        contains: function(n, t) {
            return document.compareDocumentPosition ? n.compareDocumentPosition(t) & 16 : n !== t && n.contains(t)
        },
        hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden") return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop",
                u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        },
        isOverAxis: function(n, t, i) {
            return n > t && n < t + i
        },
        isOver: function(t, i, r, u, f, e) {
            return n.ui.isOverAxis(t, r, f) && n.ui.isOverAxis(i, u, e)
        }
    }))
})(jQuery),
function(n, t) {
    var i, r;
    n.cleanData ? (i = n.cleanData, n.cleanData = function(t) {
        for (var r = 0, u;
            (u = t[r]) != null; r++) try {
            n(u).triggerHandler("remove")
        } catch (f) {}
        i(t)
    }) : (r = n.fn.remove, n.fn.remove = function(t, i) {
        return this.each(function() {
            return i || (!t || n.filter(t, [this]).length) && n("*", this).add([this]).each(function() {
                try {
                    n(this).triggerHandler("remove")
                } catch (t) {}
            }), r.call(n(this), t, i)
        })
    });
    n.widget = function(t, i, r) {
        var u = t.split(".")[0],
            e, f;
        t = t.split(".")[1];
        e = u + "-" + t;
        r || (r = i, i = n.Widget);
        n.expr[":"][e] = function(i) {
            return !!n.data(i, t)
        };
        n[u] = n[u] || {};
        n[u][t] = function(n, t) {
            arguments.length && this._createWidget(n, t)
        };
        f = new i;
        f.options = n.extend(!0, {}, f.options);
        n[u][t].prototype = n.extend(!0, f, {
            namespace: u,
            widgetName: t,
            widgetEventPrefix: n[u][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: e
        }, r);
        n.widget.bridge(t, n[u][t])
    };
    n.widget.bridge = function(i, r) {
        n.fn[i] = function(u) {
            var f = typeof u == "string",
                e = Array.prototype.slice.call(arguments, 1),
                o = this;
            return u = !f && e.length ? n.extend.apply(null, [!0, u].concat(e)) : u, f && u.charAt(0) === "_" ? o : (f ? this.each(function() {
                var r = n.data(this, i),
                    f = r && n.isFunction(r[u]) ? r[u].apply(r, e) : r;
                if (f !== r && f !== t) return o = f, !1
            }) : this.each(function() {
                var t = n.data(this, i);
                t ? t.option(u || {})._init() : n.data(this, i, new r(u, this))
            }), o)
        }
    };
    n.Widget = function(n, t) {
        arguments.length && this._createWidget(n, t)
    };
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, i) {
            n.data(i, this.widgetName, this);
            this.element = n(i);
            this.options = n.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function() {
                r.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return n.metadata && n.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(i, r) {
            var u = i;
            if (arguments.length === 0) return n.extend({}, this.options);
            if (typeof i == "string") {
                if (r === t) return this.options[i];
                u = {};
                u[i] = r
            }
            return this._setOptions(u), this
        },
        _setOptions: function(t) {
            var i = this;
            return n.each(t, function(n, t) {
                i._setOption(n, t)
            }), this
        },
        _setOption: function(n, t) {
            return this.options[n] = t, n === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
                for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r), !(n.isFunction(e) && e.call(this.element[0], i, r) === !1 || i.isDefaultPrevented())
        }
    }
}(jQuery),
function(n) {
    var t = !1;
    n(document).mouseup(function() {
        t = !1
    });
    n.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i);
                this._mouseDownEvent = i;
                var r = this,
                    u = i.which == 1,
                    f = typeof this.options.cancel == "string" && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
                return !u || f || !this._mouseCapture(i) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted)) ? (i.preventDefault(), !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                }, this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                }, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)
            }
        },
        _mouseMove: function(t) {
            return !n.browser.msie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.draggable", n.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper != "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (i.iframeFix && n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                n('<div class="ui-draggable-iframeFix" style="background: #fff;"><\/div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i = !1,
                r, u, f;
            for (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), r = this.element[0], u = !1; r && (r = r.parentNode);) r == document && (u = !0);
            return !u && this.options.helper === "original" ? !1 : (this.options.revert == "invalid" && !i || this.options.revert == "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? (f = this, n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                f._trigger("stop", t) !== !1 && f._clear()
            })) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function(t) {
            return n("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var i = !this.options.handle || !n(this.options.handle, this.element).length ? !0 : !1;
            return n(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (i = !0)
            }), i
        },
        _createHelper: function(t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo == "parent" ? this.element[0].parentNode : r.appendTo), i[0] != this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"), i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options,
                r, t, f, u;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode), (i.containment == "document" || i.containment == "window") && (this.containment = [i.containment == "document" ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment == "document" ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment == "document" ? 0 : n(window).scrollLeft()) + n(i.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment == "document" ? 0 : n(window).scrollTop()) + (n(i.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || i.containment.constructor == Array) i.containment.constructor == Array && (this.containment = i.containment);
            else {
                if (r = n(i.containment), t = r[0], !t) return;
                f = r.offset();
                u = n(t).css("overflow") != "hidden";
                this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = r
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1,
                e = this.options,
                u = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r),
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r)
            }
        },
        _generatePosition: function(t) {
            var r = this.options,
                h = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                c = /(html|body)/i.test(h[0].tagName),
                e = t.pageX,
                o = t.pageY,
                i, s, u, f;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top < i[1] || u - this.offset.click.top > i[3] ? u - this.offset.click.top < i[1] ? u + r.grid[1] : u - r.grid[1] : u : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left < i[0] || f - this.offset.click.left > i[2] ? f - this.offset.click.left < i[0] ? f + r.grid[0] : f - r.grid[0] : f : f)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.extend(n.ui.draggable, {
        version: "1.8.24"
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var r = n(this).data("draggable"),
                u = r.options,
                f = n.extend({}, i, {
                    item: r.element
                });
            r.sortables = [];
            n(u.connectToSortable).each(function() {
                var i = n.data(this, "sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, f))
            })
        },
        stop: function(t, i) {
            var r = n(this).data("draggable"),
                u = n.extend({}, i, {
                    item: r.element
                });
            n.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i) {
            var r = n(this).data("draggable"),
                u = this,
                f = function(t) {
                    var i = this.offset.click.top,
                        r = this.offset.click.left,
                        u = this.positionAbs.top,
                        f = this.positionAbs.left,
                        e = t.height,
                        o = t.width,
                        s = t.top,
                        h = t.left;
                    return n.ui.isOver(u + i, f + r, s, h, e, o)
                };
            n.each(r.sortables, function() {
                this.instance.positionAbs = r.positionAbs;
                this.instance.helperProportions = r.helperProportions;
                this.instance.offset.click = r.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = n("body"),
                i = n(this).data("draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor"));
            t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = n(this).data("draggable").options;
            t._cursor && n("body").css("cursor", t._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var r = n(i.helper),
                u = n(this).data("draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity"));
            r.css("opacity", u.opacity)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = n(this).data("draggable");
            t.scrollParent[0] != document && t.scrollParent[0].tagName != "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var r = n(this).data("draggable"),
                i = r.options,
                u = !1;
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" ? (i.axis && i.axis == "x" || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && i.axis == "y" || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && i.axis == "x" || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))), i.axis && i.axis == "y" || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))));
            u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = n(this).data("draggable"),
                i = t.options;
            t.snapElements = [];
            n(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var i = n(this),
                    r = i.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, i) {
            for (var d, r = n(this).data("draggable"), k = r.options, u = k.snapTolerance, c = i.offset.left, a = c + r.helperProportions.width, l = i.offset.top, v = l + r.helperProportions.height, f = r.snapElements.length - 1; f >= 0; f--) {
                var e = r.snapElements[f].left,
                    s = e + r.snapElements[f].width,
                    o = r.snapElements[f].top,
                    h = o + r.snapElements[f].height;
                if (!(e - u < c && c < s + u && o - u < l && l < h + u || e - u < c && c < s + u && o - u < v && v < h + u || e - u < a && a < s + u && o - u < l && l < h + u || e - u < a && a < s + u && o - u < v && v < h + u)) {
                    r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[f].item
                    }));
                    r.snapElements[f].snapping = !1;
                    continue
                }
                if (k.snapMode != "inner") {
                    var y = Math.abs(o - v) <= u,
                        p = Math.abs(h - l) <= u,
                        w = Math.abs(e - a) <= u,
                        b = Math.abs(s - c) <= u;
                    y && (i.position.top = r._convertPositionTo("relative", {
                        top: o - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top);
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: h,
                        left: 0
                    }).top - r.margins.top);
                    w && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e - r.helperProportions.width
                    }).left - r.margins.left);
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s
                    }).left - r.margins.left)
                }
                if (d = y || p || w || b, k.snapMode != "outer") {
                    var y = Math.abs(o - l) <= u,
                        p = Math.abs(h - v) <= u,
                        w = Math.abs(e - c) <= u,
                        b = Math.abs(s - a) <= u;
                    y && (i.position.top = r._convertPositionTo("relative", {
                        top: o,
                        left: 0
                    }).top - r.margins.top);
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: h - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top);
                    w && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e
                    }).left - r.margins.left);
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s - r.helperProportions.width
                    }).left - r.margins.left)
                }!r.snapElements[f].snapping && (y || p || w || b || d) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                }));
                r.snapElements[f].snapping = y || p || w || b || d
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function() {
            var r = n(this).data("draggable").options,
                t = n.makeArray(n(r.stack)).sort(function(t, i) {
                    return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                }),
                i;
            t.length && (i = parseInt(t[0].style.zIndex) || 0, n(t).each(function(n) {
                this.style.zIndex = i + n
            }), this[0].style.zIndex = i + t.length)
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var r = n(i.helper),
                u = n(this).data("draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex"));
            r.css("zIndex", u.zIndex)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options,
                i = t.accept;
            this.isover = 0;
            this.isout = 1;
            this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            };
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [];
            n.ui.ddmanager.droppables[t.scope].push(this);
            t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var i = n.ui.ddmanager.droppables[this.options.scope], t = 0; t < i.length; t++) i[t] == this && i.splice(t, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function(t, i) {
            t == "accept" && (this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            });
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current,
                u;
            return !r || (r.currentItem || r.element)[0] == this.element[0] ? !1 : (u = !1, this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = n.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                        offset: t.element.offset()
                    }), t.options.tolerance)) return u = !0, !1
            }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1)
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    });
    n.extend(n.ui.droppable, {
        version: "1.8.24"
    });
    n.ui.intersect = function(t, i, r) {
        if (!i.offset) return !1;
        var e = (t.positionAbs || t.position.absolute).left,
            s = e + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            h = o + t.helperProportions.height,
            u = i.offset.left,
            c = u + i.proportions.width,
            f = i.offset.top,
            l = f + i.proportions.height;
        switch (r) {
            case "fit":
                return u <= e && s <= c && f <= o && h <= l;
            case "intersect":
                return u < e + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < c && f < o + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < l;
            case "pointer":
                var a = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                    v = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top;
                return n.ui.isOver(v, a, f, u, i.proportions.height, i.proportions.width);
            case "touch":
                return (o >= f && o <= l || h >= f && h <= l || o < f && h > l) && (e >= u && e <= c || s >= u && s <= c || e < u && s > c);
            default:
                return !1
        }
    };
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var u = n.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                e = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
                r, f;
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] == u[r].element[0]) {
                            u[r].proportions.height = 0;
                            continue n
                        }(u[r].visible = u[r].element.css("display") != "none", u[r].visible) && (o == "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions = {
                            width: u[r].element[0].offsetWidth,
                            height: u[r].element[0].offsetHeight
                        })
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }), r
        },
        dragStart: function(t, i) {
            t.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                var f, u, r, o, e;
                this.options.disabled || this.greedyChild || !this.visible || (f = n.ui.intersect(t, this, this.options.tolerance), u = !f && this.isover == 1 ? "isout" : f && this.isover == 0 ? "isover" : null, u) && (this.options.greedy && (o = this.options.scope, e = this.element.parents(":data(droppable)").filter(function() {
                    return n.data(this, "droppable").options.scope === o
                }), e.length && (r = n.data(e[0], "droppable"), r.greedyChild = u == "isover" ? 1 : 0)), r && u == "isover" && (r.isover = 0, r.isout = 1, r._out.call(r, i)), this[u] = 1, this[u == "isout" ? "isover" : "isout"] = 0, this[u == "isover" ? "_over" : "_out"].call(this, i), r && u == "isout" && (r.isout = 0, r.isover = 1, r._over.call(r, i)))
            })
        },
        dragStop: function(t, i) {
            t.element.parents(":not(body,html)").unbind("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery),
function(n) {
    n.widget("ui.resizable", n.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var i = this,
                t = this.options,
                f, r;
            if (this.element.addClass("ui-resizable"), n.extend(this, {
                    _aspectRatio: !!t.aspectRatio,
                    aspectRatio: t.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n('<div class="ui-wrapper" style="overflow: hidden;"><\/div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String)
                for (this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), f = this.handles.split(","), this.handles = {}, r = 0; r < f.length; r++) {
                    var u = n.trim(f[r]),
                        o = "ui-resizable-" + u,
                        e = n('<div class="ui-resizable-handle ' + o + '"><\/div>');
                    e.css({
                        zIndex: t.zIndex
                    });
                    "se" == u && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    this.handles[u] = ".ui-resizable-" + u;
                    this.element.append(e)
                }
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor == String && (this.handles[i] = n(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), u = 0, u = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(f, u), this._proportionallyResize()), !n(this.handles[i]).length
            };
            this._renderAxis(this.element);
            this._handles = n(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!i.resizing) {
                    if (this.className) var n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    i.axis = n && n[1] ? n[1] : "se"
                }
            });
            t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").hover(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"), i._handles.show())
            }, function() {
                t.disabled || i.resizing || (n(this).addClass("ui-resizable-autohide"), i._handles.hide())
            }));
            this._mouseInit()
        },
        destroy: function() {
            var i, t;
            return this._mouseDestroy(), i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            }, this.elementIsWrapper && (i(this.element), t = this.element, t.after(this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            })).remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var i = !1;
            for (var r in this.handles) n(this.handles[r])[0] == t.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function(t) {
            var u = this.options,
                s = this.element.position(),
                r = this.element,
                f, e, o;
            return this.resizing = !0, this.documentScroll = {
                top: n(document).scrollTop(),
                left: n(document).scrollLeft()
            }, (r.is(".ui-draggable") || /absolute/.test(r.css("position"))) && r.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }), this._renderProxy(), f = i(this.helper.css("left")), e = i(this.helper.css("top")), u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: f,
                top: e
            }, this.size = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            }, this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            }, this.originalPosition = {
                left: f,
                top: e
            }, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", o == "auto" ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var f = this.helper,
                h = this.options,
                c = this,
                r = this.originalMousePosition,
                e = this.axis,
                o = t.pageX - r.left || 0,
                s = t.pageY - r.top || 0,
                u = this._change[e];
            if (!u) return !1;
            var i = u.apply(this, [t, o, s]),
                l = n.browser.msie && n.browser.version < 7,
                a = this.sizeDiff;
            return this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._propagate("resize", t), f.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(i), this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function(t) {
            var r, i;
            if (this.resizing = !1, r = this.options, i = this, this._helper) {
                var u = this._proportionallyResizeElements,
                    f = u.length && /textarea/i.test(u[0].nodeName),
                    e = f && n.ui.hasScroll(u[0], "left") ? 0 : i.sizeDiff.height,
                    o = f ? 0 : i.sizeDiff.width,
                    s = {
                        width: i.helper.width() - o,
                        height: i.helper.height() - e
                    },
                    h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                r.animate || this.element.css(n.extend(s, {
                    top: c,
                    left: h
                }));
                i.helper.height(i.size.height);
                i.helper.width(i.size.width);
                this._helper && !r.animate && this._proportionallyResize()
            }
            return n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(n) {
            var r = this.options,
                u, f, e, o, i;
            i = {
                minWidth: t(r.minWidth) ? r.minWidth : 0,
                maxWidth: t(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: t(r.minHeight) ? r.minHeight : 0,
                maxHeight: t(r.maxHeight) ? r.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio, e = i.minWidth / this.aspectRatio, f = i.maxHeight * this.aspectRatio, o = i.maxWidth / this.aspectRatio, u > i.minWidth && (i.minWidth = u), e > i.minHeight && (i.minHeight = e), f < i.maxWidth && (i.maxWidth = f), o < i.maxHeight && (i.maxHeight = o));
            this._vBoundaries = i
        },
        _updateCache: function(n) {
            var i = this.options;
            this.offset = this.helper.offset();
            t(n.left) && (this.position.left = n.left);
            t(n.top) && (this.position.top = n.top);
            t(n.height) && (this.size.height = n.height);
            t(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var f = this.options,
                i = this.position,
                r = this.size,
                u = this.axis;
            return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio), u == "sw" && (n.left = i.left + (r.width - n.width), n.top = null), u == "nw" && (n.top = i.top + (r.height - n.height), n.left = i.left + (r.width - n.width)), n
        },
        _respectSize: function(n, i) {
            var y = this.helper,
                r = this._vBoundaries,
                p = this._aspectRatio || i.shiftKey,
                f = this.axis,
                e = t(n.width) && r.maxWidth && r.maxWidth < n.width,
                o = t(n.height) && r.maxHeight && r.maxHeight < n.height,
                s = t(n.width) && r.minWidth && r.minWidth > n.width,
                h = t(n.height) && r.minHeight && r.minHeight > n.height,
                u;
            s && (n.width = r.minWidth);
            h && (n.height = r.minHeight);
            e && (n.width = r.maxWidth);
            o && (n.height = r.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                a = /sw|nw|w/.test(f),
                v = /nw|ne|n/.test(f);
            return s && a && (n.left = c - r.minWidth), e && a && (n.left = c - r.maxWidth), h && v && (n.top = l - r.minHeight), o && v && (n.top = l - r.maxHeight), u = !n.width && !n.height, u && !n.left && n.top ? n.top = null : u && !n.top && n.left && (n.left = null), n
        },
        _proportionallyResize: function() {
            var e = this.options,
                i, r, t, u, f;
            if (this._proportionallyResizeElements.length)
                for (i = this.helper || this.element, r = 0; r < this._proportionallyResizeElements.length; r++)
                    if (t = this._proportionallyResizeElements[r], this.borderDif || (u = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], f = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")], this.borderDif = n.map(u, function(n, t) {
                            var i = parseInt(n, 10) || 0,
                                r = parseInt(f[t], 10) || 0;
                            return i + r
                        })), n.browser.msie && (n(i).is(":hidden") || n(i).parents(":hidden").length)) continue;
                    else t.css({
                        height: i.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: i.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
        },
        _renderProxy: function() {
            var u = this.element,
                f = this.options;
            if (this.elementOffset = u.offset(), this._helper) {
                this.helper = this.helper || n('<div style="overflow:hidden;"><\/div>');
                var t = n.browser.msie && n.browser.version < 7,
                    i = t ? 1 : 0,
                    r = t ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + r,
                    height: this.element.outerHeight() + r,
                    position: "absolute",
                    left: this.elementOffset.left - i + "px",
                    top: this.elementOffset.top - i + "px",
                    zIndex: ++f.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var u = this.options,
                    i = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var f = this.options,
                    r = this.originalSize,
                    u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t != "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.extend(n.ui.resizable, {
        version: "1.8.24"
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var r = n(this).data("resizable"),
                t = r.options,
                i = function(t) {
                    n(t).each(function() {
                        var t = n(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.parentNode ? t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                i(n)
            }) : i(t.alsoResize)
        },
        resize: function(t, i) {
            var r = n(this).data("resizable"),
                u = r.options,
                f = r.originalSize,
                e = r.originalPosition,
                s = {
                    height: r.size.height - f.height || 0,
                    width: r.size.width - f.width || 0,
                    top: r.position.top - e.top || 0,
                    left: r.position.left - e.left || 0
                },
                o = function(t, r) {
                    n(t).each(function() {
                        var t = n(this),
                            f = n(this).data("resizable-alsoresize"),
                            u = {},
                            e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        n.each(e, function(n, t) {
                            var i = (f[t] || 0) + (s[t] || 0);
                            i && i >= 0 && (u[t] = i || null)
                        });
                        t.css(u)
                    })
                };
            typeof u.alsoResize == "object" && !u.alsoResize.nodeType ? n.each(u.alsoResize, function(n, t) {
                o(n, t)
            }) : o(u.alsoResize)
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).data("resizable"),
                u = i.options,
                r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                h = f ? 0 : i.sizeDiff.width,
                c = {
                    width: i.size.width - h,
                    height: i.size.height - s
                },
                e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t = n(this).data("resizable"),
                s = t.options,
                h = t.element,
                u = s.containment,
                r = u instanceof n ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u,
                f, e;
            if (r)
                if (t.containerElement = n(r), /document/.test(u) || u == document) t.containerOffset = {
                    left: 0,
                    top: 0
                }, t.containerPosition = {
                    left: 0,
                    top: 0
                }, t.parentData = {
                    element: n(document),
                    left: 0,
                    top: 0,
                    width: n(document).width(),
                    height: n(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    f = n(r);
                    e = [];
                    n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                        e[n] = i(f.css("padding" + t))
                    });
                    t.containerOffset = f.offset();
                    t.containerPosition = f.position();
                    t.containerSize = {
                        height: f.innerHeight() - e[3],
                        width: f.innerWidth() - e[1]
                    };
                    var o = t.containerOffset,
                        c = t.containerSize.height,
                        l = t.containerSize.width,
                        a = n.ui.hasScroll(r, "left") ? r.scrollWidth : l,
                        v = n.ui.hasScroll(r) ? r.scrollHeight : c;
                    t.parentData = {
                        element: r,
                        left: o.left,
                        top: o.top,
                        width: a,
                        height: v
                    }
                }
        },
        resize: function(t) {
            var i = n(this).data("resizable"),
                c = i.options,
                v = i.containerSize,
                r = i.containerOffset,
                y = i.size,
                o = i.position,
                f = i._aspectRatio || t.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                s = i.containerElement;
            s[0] != document && /static/.test(s.css("position")) && (u = r);
            o.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left), f && (i.size.height = i.size.width / i.aspectRatio), i.position.left = c.helper ? r.left : 0);
            o.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? r.top : 0);
            i.offset.left = i.parentData.left + i.position.left;
            i.offset.top = i.parentData.top + i.position.top;
            var e = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width),
                h = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height),
                l = i.containerElement.get(0) == i.element.parent().get(0),
                a = /relative|absolute/.test(i.containerElement.css("position"));
            l && a && (e -= i.parentData.left);
            e + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - e, f && (i.size.height = i.size.width / i.aspectRatio));
            h + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - h, f && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function() {
            var t = n(this).data("resizable"),
                r = t.options,
                c = t.position,
                u = t.containerOffset,
                f = t.containerPosition,
                e = t.containerElement,
                i = n(t.helper),
                o = i.offset(),
                s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).data("resizable"),
                i = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).data("resizable"),
                i = t.options;
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).data("resizable"),
                i = t.options;
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function(t) {
            var i = n(this).data("resizable"),
                r = i.options,
                h = i.size,
                u = i.originalSize,
                o = i.originalPosition,
                s = i.axis,
                c = r._aspectRatio || t.shiftKey,
                f, e;
            r.grid = typeof r.grid == "number" ? [r.grid, r.grid] : r.grid;
            f = Math.round((h.width - u.width) / (r.grid[0] || 1)) * (r.grid[0] || 1);
            e = Math.round((h.height - u.height) / (r.grid[1] || 1)) * (r.grid[1] || 1);
            /^(se|s|e)$/.test(s) ? (i.size.width = u.width + f, i.size.height = u.height + e) : /^(ne)$/.test(s) ? (i.size.width = u.width + f, i.size.height = u.height + e, i.position.top = o.top - e) : /^(sw)$/.test(s) ? (i.size.width = u.width + f, i.size.height = u.height + e, i.position.left = o.left - f) : (i.size.width = u.width + f, i.size.height = u.height + e, i.position.top = o.top - e, i.position.left = o.left - f)
        }
    });
    var i = function(n) {
            return parseInt(n, 10) || 0
        },
        t = function(n) {
            return !isNaN(parseInt(n, 10))
        }
}(jQuery),
function(n) {
    n.widget("ui.selectable", n.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var i = this,
                t;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                t = n(i.options.filter, i.element[0]);
                t.addClass("ui-selectee");
                t.each(function() {
                    var t = n(this),
                        i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = t.addClass("ui-selectee");
            this._mouseInit();
            this.helper = n("<div class='ui-selectable-helper'><\/div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function(t) {
            var r = this,
                i;
            (this.opos = [t.pageX, t.pageY], this.options.disabled) || (i = this.options, this.selectees = n(i.filter, this.element[0]), this._trigger("start", t), n(i.appendTo).append(this.helper), this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var i = n.data(this, "selectable-item");
                i.startselected = !0;
                t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, r._trigger("unselecting", t, {
                    unselecting: i.element
                }))
            }), n(t.target).parents().andSelf().each(function() {
                var i = n.data(this, "selectable-item"),
                    u;
                if (i) return u = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"), i.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), i.unselecting = !u, i.selecting = u, i.selected = u, u ? r._trigger("selecting", t, {
                    selecting: i.element
                }) : r._trigger("unselecting", t, {
                    unselecting: i.element
                }), !1
            }))
        },
        _mouseDrag: function(t) {
            var e = this,
                o;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options,
                    i = this.opos[0],
                    r = this.opos[1],
                    u = t.pageX,
                    f = t.pageY;
                return i > u && (o = u, u = i, i = o), r > f && (o = f, f = r, r = o), this.helper.css({
                    left: i,
                    top: r,
                    width: u - i,
                    height: f - r
                }), this.selectees.each(function() {
                    var o = n.data(this, "selectable-item"),
                        h;
                    o && o.element != e.element[0] && (h = !1, s.tolerance == "touch" ? h = !(o.left > u || o.right < i || o.top > f || o.bottom < r) : s.tolerance == "fit" && (h = o.left > i && o.right < u && o.top > r && o.bottom < f), h ? (o.selected && (o.$element.removeClass("ui-selected"), o.selected = !1), o.unselecting && (o.$element.removeClass("ui-unselecting"), o.unselecting = !1), o.selecting || (o.$element.addClass("ui-selecting"), o.selecting = !0, e._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (o.$element.removeClass("ui-selecting"), o.selecting = !1, o.$element.addClass("ui-selected"), o.selected = !0) : (o.$element.removeClass("ui-selecting"), o.selecting = !1, o.startselected && (o.$element.addClass("ui-unselecting"), o.unselecting = !0), e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))), o.selected && !t.metaKey && !t.ctrlKey && !o.startselected && (o.$element.removeClass("ui-selected"), o.selected = !1, o.$element.addClass("ui-unselecting"), o.unselecting = !0, e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this,
                r;
            return this.dragged = !1, r = this.options, n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }), n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    });
    n.extend(n.ui.selectable, {
        version: "1.8.24"
    })
}(jQuery),
function(n) {
    n.widget("ui.sortable", n.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var n = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? n.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = !0
        },
        destroy: function() {
            n.Widget.prototype.destroy.call(this);
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            t === "disabled" ? (this.options[t] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : n.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var f = this,
                u;
            if (this.reverting || this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var r = null,
                e = this,
                o = n(t.target).parents().each(function() {
                    if (n.data(this, f.widgetName + "-item") == e) return r = n(this), !1
                });
            return (n.data(t.target, f.widgetName + "-item") == e && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (u = !1, n(this.options.handle, r).find("*").andSelf().each(function() {
                this == t.target && (u = !0)
            }), !u) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
        },
        _mouseStart: function(t, i, r) {
            var u = this.options,
                e = this,
                f;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, n.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && (n("body").css("cursor") && (this._storedCursor = n("body").css("cursor")), n("body").css("cursor", u.cursor)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, e._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var i, r, f;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (i = this.options, r = !1, this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"), f = this.items.length - 1; f >= 0; f--) {
                var u = this.items[f],
                    e = u.item[0],
                    o = this._intersectsWithPointer(u);
                if (o && u.instance === this.currentContainer && e != this.currentItem[0] && this.placeholder[o == 1 ? "next" : "prev"]()[0] != e && !n.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !n.ui.contains(this.element[0], e) : !0)) {
                    if (this.direction = o == 1 ? "down" : "up", this.options.tolerance == "pointer" || this._intersectsWithSides(u)) this._rearrange(t, u);
                    else break;
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                    var r = this,
                        u = r.placeholder.offset();
                    r.reverting = !0;
                    n(this.helper).animate({
                        left: u.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: u.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        r._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            var i = this,
                t;
            if (this.dragging)
                for (this._mouseUp({
                        target: null
                    }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(), t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, i._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, i._uiHash(this)), this.containers[t].containerCache.over = 0);
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left,
                h = t + this.helperProportions.width,
                i = this.positionAbs.top,
                c = i + this.helperProportions.height,
                r = n.left,
                f = r + n.width,
                u = n.top,
                e = u + n.height,
                o = this.offset.click.top,
                s = this.offset.click.left,
                l = i + o > u && i + o < e && t + s > r && t + s < f;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? l : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(t) {
            var u = this.options.axis === "x" || n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                f = this.options.axis === "y" || n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                e = u && f,
                i = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return e ? this.floating ? r && r == "right" || i == "down" ? 2 : 1 : i && (i == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var u = n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                f = n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                i = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return this.floating && r ? r == "right" && f || r == "left" && !f : i && (i == "down" && u || i == "up" && !u)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n != 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n != 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n), this.refreshPositions(), this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor == String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var h = this,
                s = [],
                u = [],
                e = this._connectWith(),
                o, f, i, r;
            if (e && t)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]), f = o.length - 1; f >= 0; f--) i = n.data(o[f], this.widgetName), i && i != this && !i.options.disabled && u.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (u.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = u.length - 1; r >= 0; r--) u[r][0].each(function() {
                s.push(this)
            });
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            for (var t, i = this.currentItem.find(":data(" + this.widgetName + "-item)"), n = 0; n < this.items.length; n++)
                for (t = 0; t < i.length; t++) i[t] == this.items[n].item[0] && this.items.splice(n, 1)
        },
        _refreshItems: function(t) {
            var o, i, r, s, h, u, l, c;
            this.items = [];
            this.containers = [this];
            var a = this.items,
                v = this,
                f = [
                    [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : n(this.options.items, this.element), this]
                ],
                e = this._connectWith();
            if (e && this.ready)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]), u = o.length - 1; u >= 0; u--) i = n.data(o[u], this.widgetName), i && i != this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                        item: this.currentItem
                    }) : n(i.options.items, i.element), i]), this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (s = f[r][1], h = f[r][0], u = 0, l = h.length; u < l; u++) c = n(h[u]), c.data(this.widgetName + "-item", s), a.push({
                    item: c,
                    instance: s,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            var r, f, i, u;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var i = t || this,
                r = i.options,
                u;
            r.placeholder && r.placeholder.constructor != String || (u = r.placeholder, r.placeholder = {
                element: function() {
                    var t = n(document.createElement(i.currentItem[0].nodeName)).addClass(u || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return u || (t.style.visibility = "hidden"), t
                },
                update: function(n, t) {
                    (!u || r.forcePlaceholderSize) && (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            i.placeholder = n(r.placeholder.element.call(i.element, i.currentItem));
            i.currentItem.after(i.placeholder);
            r.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function(t) {
            for (var u, o, f = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.ui.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (f && n.ui.contains(this.containers[r].element[0], f.element[0])) continue;
                        f = this.containers[r];
                        i = r
                    } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
            if (f)
                if (this.containers.length === 1) this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1;
                else if (this.currentContainer != this.containers[i]) {
                var h = 1e4,
                    e = null,
                    s = this.positionAbs[this.containers[i].floating ? "left" : "top"];
                for (u = this.items.length - 1; u >= 0; u--) n.ui.contains(this.containers[i].element[0], this.items[u].item[0]) && (o = this.containers[i].floating ? this.items[u].item.offset().left : this.items[u].item.offset().top, Math.abs(o - s) < h && (h = Math.abs(o - s), e = this.items[u], this.direction = o - s > 0 ? "down" : "up"));
                if (!e && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[i];
                e ? this._rearrange(t, e, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                this._trigger("change", t, this._uiHash());
                this.containers[i]._trigger("change", t, this._uiHash(this));
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[i]._trigger("over", t, this._uiHash(this));
                this.containers[i].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo != "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (i[0].style.width == "" || r.forceHelperSize) && i.width(this.currentItem.width()), (i[0].style.height == "" || r.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode), (i.containment == "document" || i.containment == "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(i.containment)) {
                var t = n(i.containment)[0],
                    r = n(i.containment).offset(),
                    u = n(t).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1,
                e = this.options,
                u = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (n.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r),
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (n.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r)
            }
        },
        _generatePosition: function(t) {
            var i = this.options,
                o = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                s = /(html|body)/i.test(o[0].tagName),
                f, e, r, u;
            return this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), f = t.pageX, e = t.pageY, this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3] ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left < this.containment[0] || u - this.offset.click.left > this.containment[2] ? u - this.offset.click.left < this.containment[0] ? u + i.grid[0] : u - i.grid[0] : u : u)), {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (n.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (n.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this,
                f = this.counter;
            window.setTimeout(function() {
                f == u.counter && u.refreshPositions(!r)
            }, 0)
        },
        _clear: function(t, i) {
            var u, f, r;
            if (this.reverting = !1, u = [], f = this, !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (r in this._storedCSS)(this._storedCSS[r] == "auto" || this._storedCSS[r] == "static") && (this._storedCSS[r] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !i && u.push(function(n) {
                    this._trigger("receive", n, this._uiHash(this.fromOutside))
                }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && u.push(function(n) {
                    this._trigger("update", n, this._uiHash())
                }), this !== this.currentContainer && (i || (u.push(function(n) {
                    this._trigger("remove", n, this._uiHash())
                }), u.push(function(n) {
                    return function(t) {
                        n._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), u.push(function(n) {
                    return function(t) {
                        n._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), r = this.containers.length - 1; r >= 0; r--) i || u.push(function(n) {
                return function(t) {
                    n._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over && (u.push(function(n) {
                return function(t) {
                    n._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
            if (this._storedCursor && n("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    for (this._trigger("beforeStop", t, this._uiHash()), r = 0; r < u.length; r++) u[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (r = 0; r < u.length; r++) u[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    n.extend(n.ui.sortable, {
        version: "1.8.24"
    })
}(jQuery);
jQuery.effects || function(n, t) {
        function f(t) {
            var i;
            return t && t.constructor == Array && t.length == 3 ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(i[1]) * 2.55, parseFloat(i[2]) * 2.55, parseFloat(i[3]) * 2.55] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(t)) ? s.transparent : s[n.trim(t).toLowerCase()]
        }

        function c(t, i) {
            var r;
            do {
                if (r = (n.curCSS || n.css)(t, i), r != "" && r != "transparent" || n.nodeName(t, "body")) break;
                i = "backgroundColor"
            } while (t = t.parentNode);
            return f(r)
        }

        function e() {
            var n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                i = {},
                t, u, r;
            if (n && n.length && n[0] && n[n[0]])
                for (r = n.length; r--;) t = n[r], typeof n[t] == "string" && (u = t.replace(/\-(\w)/g, function(n, t) {
                    return t.toUpperCase()
                }), i[u] = n[t]);
            else
                for (t in n) typeof n[t] == "string" && (i[t] = n[t]);
            return i
        }

        function o(t) {
            var i, r;
            for (i in t) r = t[i], (r == null || n.isFunction(r) || i in a || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(r))) && delete t[i];
            return t
        }

        function l(n, t) {
            var r = {
                _: 0
            };
            for (var i in t) n[i] != t[i] && (r[i] = t[i]);
            return r
        }

        function i(t, i, r, u) {
            return typeof t == "object" && (u = i, r = null, i = t, t = i.effect), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i = i || {}, r = r || i.duration, r = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, u = u || i.complete, [t, i, r, u]
        }

        function u(t) {
            return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects[t] ? !0 : !1
        }
        var r;
        n.effects = {};
        n.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, i) {
            n.fx.step[i] = function(n) {
                n.colorInit || (n.start = c(n.elem, i), n.end = f(n.end), n.colorInit = !0);
                n.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(n.pos * (n.end[0] - n.start[0]) + n.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[1] - n.start[1]) + n.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[2] - n.start[2]) + n.start[2], 10), 255), 0) + ")"
            }
        });
        var s = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0],
                transparent: [255, 255, 255]
            },
            h = ["add", "remove", "toggle"],
            a = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        n.effects.animateClass = function(t, i, r, u) {
            return n.isFunction(r) && (u = r, r = null), this.queue(function() {
                var f = n(this),
                    s = f.attr("style") || " ",
                    a = o(e.call(this)),
                    c, v = f.attr("class") || "";
                n.each(h, function(n, i) {
                    t[i] && f[i + "Class"](t[i])
                });
                c = o(e.call(this));
                f.attr("class", v);
                f.animate(l(a, c), {
                    queue: !1,
                    duration: i,
                    easing: r,
                    complete: function() {
                        n.each(h, function(n, i) {
                            t[i] && f[i + "Class"](t[i])
                        });
                        typeof f.attr("style") == "object" ? (f.attr("style").cssText = "", f.attr("style").cssText = s) : f.attr("style", s);
                        u && u.apply(this, arguments);
                        n.dequeue(this)
                    }
                })
            })
        };
        n.fn.extend({
            _addClass: n.fn.addClass,
            addClass: function(t, i, r, u) {
                return i ? n.effects.animateClass.apply(this, [{
                    add: t
                }, i, r, u]) : this._addClass(t)
            },
            _removeClass: n.fn.removeClass,
            removeClass: function(t, i, r, u) {
                return i ? n.effects.animateClass.apply(this, [{
                    remove: t
                }, i, r, u]) : this._removeClass(t)
            },
            _toggleClass: n.fn.toggleClass,
            toggleClass: function(i, r, u, f, e) {
                return typeof r == "boolean" || r === t ? u ? n.effects.animateClass.apply(this, [r ? {
                    add: i
                } : {
                    remove: i
                }, u, f, e]) : this._toggleClass(i, r) : n.effects.animateClass.apply(this, [{
                    toggle: i
                }, r, u, f])
            },
            switchClass: function(t, i, r, u, f) {
                return n.effects.animateClass.apply(this, [{
                    add: i,
                    remove: t
                }, r, u, f])
            }
        });
        n.extend(n.effects, {
            version: "1.8.24",
            save: function(n, t) {
                for (var i = 0; i < t.length; i++) t[i] !== null && n.data("ec.storage." + t[i], n[0].style[t[i]])
            },
            restore: function(n, t) {
                for (var i = 0; i < t.length; i++) t[i] !== null && n.css(t[i], n.data("ec.storage." + t[i]))
            },
            setMode: function(n, t) {
                return t == "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function(n, t) {
                var i, r;
                switch (n[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = n[0] / t.height
                }
                switch (n[1]) {
                    case "left":
                        r = 0;
                        break;
                    case "center":
                        r = .5;
                        break;
                    case "right":
                        r = 1;
                        break;
                    default:
                        r = n[1] / t.width
                }
                return {
                    x: r,
                    y: i
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        float: t.css("float")
                    },
                    u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    r = document.activeElement;
                try {
                    r.id
                } catch (f) {
                    r = document.body
                }
                return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") == "static" ? (u.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (n.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                    i[r] = t.css(r);
                    isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), u.css(i).show()
            },
            removeWrapper: function(t) {
                var r, i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") ? (r = t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus(), r) : t
            },
            setTransition: function(t, i, r, u) {
                return u = u || {}, n.each(i, function(n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }), u
            }
        });
        n.fn.extend({
            effect: function(t) {
                var u = i.apply(this, arguments),
                    r = {
                        options: u[1],
                        duration: u[2],
                        callback: u[3]
                    },
                    f = r.options.mode,
                    e = n.effects[t];
                return n.fx.off || !e ? f ? this[f](r.duration, r.callback) : this.each(function() {
                    r.callback && r.callback.call(this)
                }) : e.call(this, r)
            },
            _show: n.fn.show,
            show: function(n) {
                if (u(n)) return this._show.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t[1].mode = "show", this.effect.apply(this, t)
            },
            _hide: n.fn.hide,
            hide: function(n) {
                if (u(n)) return this._hide.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t[1].mode = "hide", this.effect.apply(this, t)
            },
            __toggle: n.fn.toggle,
            toggle: function(t) {
                if (u(t) || typeof t == "boolean" || n.isFunction(t)) return this.__toggle.apply(this, arguments);
                var r = i.apply(this, arguments);
                return r[1].mode = "toggle", this.effect.apply(this, r)
            },
            cssUnit: function(t) {
                var i = this.css(t),
                    r = [];
                return n.each(["em", "px", "%", "pt"], function(n, t) {
                    i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                }), r
            }
        });
        r = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, t) {
            r[t] = function(t) {
                return Math.pow(t, n + 2)
            }
        });
        n.extend(r, {
            Sine: function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function(n) {
                return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function(n) {
                return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(n) {
                return n * n * (3 * n - 2)
            },
            Bounce: function(n) {
                for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
            }
        });
        n.each(r, function(t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function(n) {
                return 1 - i(1 - n)
            };
            n.easing["easeInOut" + t] = function(n) {
                return n < .5 ? i(n * 2) / 2 : i(n * -2 + 2) / -2 + 1
            }
        })
    }(jQuery),
    function(n) {
        n.effects.blind = function(t) {
            return this.queue(function() {
                var i = n(this),
                    e = ["position", "top", "bottom", "left", "right"],
                    u = n.effects.setMode(i, t.options.mode || "hide"),
                    o = t.options.direction || "vertical",
                    f;
                n.effects.save(i, e);
                i.show();
                var r = n.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    s = o == "vertical" ? "height" : "width",
                    h = o == "vertical" ? r.height() : r.width();
                u == "show" && r.css(s, 0);
                f = {};
                f[s] = u == "show" ? h : 0;
                r.animate(f, t.duration, t.options.easing, function() {
                    u == "hide" && i.hide();
                    n.effects.restore(i, e);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(i[0], arguments);
                    i.dequeue()
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.bounce = function(t) {
            return this.queue(function() {
                var i = n(this),
                    l = ["position", "top", "bottom", "left", "right"],
                    f = n.effects.setMode(i, t.options.mode || "effect"),
                    a = t.options.direction || "up",
                    r = t.options.distance || 20,
                    v = t.options.times || 5,
                    o = t.duration || 250,
                    y, s, h, c;
                /show|hide/.test(f) && l.push("opacity");
                n.effects.save(i, l);
                i.show();
                n.effects.createWrapper(i);
                var u = a == "up" || a == "down" ? "top" : "left",
                    e = a == "up" || a == "left" ? "pos" : "neg",
                    r = t.options.distance || (u == "top" ? i.outerHeight(!0) / 3 : i.outerWidth(!0) / 3);
                for (f == "show" && i.css("opacity", 0).css(u, e == "pos" ? -r : r), f == "hide" && (r = r / (v * 2)), f != "hide" && v--, f == "show" && (s = {
                        opacity: 1
                    }, s[u] = (e == "pos" ? "+=" : "-=") + r, i.animate(s, o / 2, t.options.easing), r = r / 2, v--), y = 0; y < v; y++) h = {}, c = {}, h[u] = (e == "pos" ? "-=" : "+=") + r, c[u] = (e == "pos" ? "+=" : "-=") + r, i.animate(h, o / 2, t.options.easing).animate(c, o / 2, t.options.easing), r = f == "hide" ? r * 2 : r / 2;
                f == "hide" ? (s = {
                    opacity: 0
                }, s[u] = (e == "pos" ? "-=" : "+=") + r, i.animate(s, o / 2, t.options.easing, function() {
                    i.hide();
                    n.effects.restore(i, l);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(this, arguments)
                })) : (h = {}, c = {}, h[u] = (e == "pos" ? "-=" : "+=") + r, c[u] = (e == "pos" ? "+=" : "-=") + r, i.animate(h, o / 2, t.options.easing).animate(c, o / 2, t.options.easing, function() {
                    n.effects.restore(i, l);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(this, arguments)
                }));
                i.queue("fx", function() {
                    i.dequeue()
                });
                i.dequeue()
            })
        }
    }(jQuery),
    function(n) {
        n.effects.clip = function(t) {
            return this.queue(function() {
                var i = n(this),
                    h = ["position", "top", "bottom", "left", "right", "height", "width"],
                    u = n.effects.setMode(i, t.options.mode || "hide"),
                    o = t.options.direction || "vertical",
                    e;
                n.effects.save(i, h);
                i.show();
                var c = n.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    r = i[0].tagName == "IMG" ? c : i,
                    f = {
                        size: o == "vertical" ? "height" : "width",
                        position: o == "vertical" ? "top" : "left"
                    },
                    s = o == "vertical" ? r.height() : r.width();
                u == "show" && (r.css(f.size, 0), r.css(f.position, s / 2));
                e = {};
                e[f.size] = u == "show" ? s : 0;
                e[f.position] = u == "show" ? 0 : s / 2;
                r.animate(e, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        u == "hide" && i.hide();
                        n.effects.restore(i, h);
                        n.effects.removeWrapper(i);
                        t.callback && t.callback.apply(i[0], arguments);
                        i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.drop = function(t) {
            return this.queue(function() {
                var i = n(this),
                    h = ["position", "top", "bottom", "left", "right", "opacity"],
                    r = n.effects.setMode(i, t.options.mode || "hide"),
                    u = t.options.direction || "left",
                    s;
                n.effects.save(i, h);
                i.show();
                n.effects.createWrapper(i);
                var f = u == "up" || u == "down" ? "top" : "left",
                    e = u == "up" || u == "left" ? "pos" : "neg",
                    o = t.options.distance || (f == "top" ? i.outerHeight(!0) / 2 : i.outerWidth(!0) / 2);
                r == "show" && i.css("opacity", 0).css(f, e == "pos" ? -o : o);
                s = {
                    opacity: r == "show" ? 1 : 0
                };
                s[f] = (r == "show" ? e == "pos" ? "+=" : "-=" : e == "pos" ? "-=" : "+=") + o;
                i.animate(s, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        r == "hide" && i.hide();
                        n.effects.restore(i, h);
                        n.effects.removeWrapper(i);
                        t.callback && t.callback.apply(this, arguments);
                        i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.explode = function(t) {
            return this.queue(function() {
                var r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                    u = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                    i, o, s, h, f, e;
                for (t.options.mode = t.options.mode == "toggle" ? n(this).is(":visible") ? "hide" : "show" : t.options.mode, i = n(this).show().css("visibility", "hidden"), o = i.offset(), o.top -= parseInt(i.css("marginTop"), 10) || 0, o.left -= parseInt(i.css("marginLeft"), 10) || 0, s = i.outerWidth(!0), h = i.outerHeight(!0), f = 0; f < r; f++)
                    for (e = 0; e < u; e++) i.clone().appendTo("body").wrap("<div><\/div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -e * (s / u),
                        top: -f * (h / r)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: s / u,
                        height: h / r,
                        left: o.left + e * (s / u) + (t.options.mode == "show" ? (e - Math.floor(u / 2)) * (s / u) : 0),
                        top: o.top + f * (h / r) + (t.options.mode == "show" ? (f - Math.floor(r / 2)) * (h / r) : 0),
                        opacity: t.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: o.left + e * (s / u) + (t.options.mode == "show" ? 0 : (e - Math.floor(u / 2)) * (s / u)),
                        top: o.top + f * (h / r) + (t.options.mode == "show" ? 0 : (f - Math.floor(r / 2)) * (h / r)),
                        opacity: t.options.mode == "show" ? 1 : 0
                    }, t.duration || 500);
                setTimeout(function() {
                    t.options.mode == "show" ? i.css({
                        visibility: "visible"
                    }) : i.css({
                        visibility: "visible"
                    }).hide();
                    t.callback && t.callback.apply(i[0]);
                    i.dequeue();
                    n("div.ui-effects-explode").remove()
                }, t.duration || 500)
            })
        }
    }(jQuery),
    function(n) {
        n.effects.fade = function(t) {
            return this.queue(function() {
                var i = n(this),
                    r = n.effects.setMode(i, t.options.mode || "hide");
                i.animate({
                    opacity: r
                }, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        t.callback && t.callback.apply(this, arguments);
                        i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.fold = function(t) {
            return this.queue(function() {
                var i = n(this),
                    h = ["position", "top", "bottom", "left", "right"],
                    r = n.effects.setMode(i, t.options.mode || "hide"),
                    f = t.options.size || 15,
                    c = !!t.options.horizFirst,
                    l = t.duration ? t.duration / 2 : n.fx.speeds._default / 2,
                    o, s;
                n.effects.save(i, h);
                i.show();
                var u = n.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    a = r == "show" != c,
                    v = a ? ["width", "height"] : ["height", "width"],
                    e = a ? [u.width(), u.height()] : [u.height(), u.width()],
                    y = /([0-9]+)%/.exec(f);
                y && (f = parseInt(y[1], 10) / 100 * e[r == "hide" ? 0 : 1]);
                r == "show" && u.css(c ? {
                    height: 0,
                    width: f
                } : {
                    height: f,
                    width: 0
                });
                o = {};
                s = {};
                o[v[0]] = r == "show" ? e[0] : f;
                s[v[1]] = r == "show" ? e[1] : 0;
                u.animate(o, l, t.options.easing).animate(s, l, t.options.easing, function() {
                    r == "hide" && i.hide();
                    n.effects.restore(i, h);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(i[0], arguments);
                    i.dequeue()
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.highlight = function(t) {
            return this.queue(function() {
                var i = n(this),
                    u = ["backgroundImage", "backgroundColor", "opacity"],
                    r = n.effects.setMode(i, t.options.mode || "show"),
                    f = {
                        backgroundColor: i.css("backgroundColor")
                    };
                r == "hide" && (f.opacity = 0);
                n.effects.save(i, u);
                i.show().css({
                    backgroundImage: "none",
                    backgroundColor: t.options.color || "#ffff99"
                }).animate(f, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        r == "hide" && i.hide();
                        n.effects.restore(i, u);
                        r == "show" && !n.support.opacity && this.style.removeAttribute("filter");
                        t.callback && t.callback.apply(this, arguments);
                        i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.pulsate = function(t) {
            return this.queue(function() {
                var i = n(this),
                    e = n.effects.setMode(i, t.options.mode || "show"),
                    o = (t.options.times || 5) * 2 - 1,
                    s = t.duration ? t.duration / 2 : n.fx.speeds._default / 2,
                    u = i.is(":visible"),
                    r = 0,
                    f;
                for (u || (i.css("opacity", 0).show(), r = 1), (e == "hide" && u || e == "show" && !u) && o--, f = 0; f < o; f++) i.animate({
                    opacity: r
                }, s, t.options.easing), r = (r + 1) % 2;
                i.animate({
                    opacity: r
                }, s, t.options.easing, function() {
                    r == 0 && i.hide();
                    t.callback && t.callback.apply(this, arguments)
                });
                i.queue("fx", function() {
                    i.dequeue()
                }).dequeue()
            })
        }
    }(jQuery),
    function(n) {
        n.effects.puff = function(t) {
            return this.queue(function() {
                var i = n(this),
                    r = n.effects.setMode(i, t.options.mode || "hide"),
                    f = parseInt(t.options.percent, 10) || 150,
                    e = f / 100,
                    u = {
                        height: i.height(),
                        width: i.width()
                    };
                n.extend(t.options, {
                    fade: !0,
                    mode: r,
                    percent: r == "hide" ? f : 100,
                    from: r == "hide" ? u : {
                        height: u.height * e,
                        width: u.width * e
                    }
                });
                i.effect("scale", t.options, t.duration, t.callback);
                i.dequeue()
            })
        };
        n.effects.scale = function(t) {
            return this.queue(function() {
                var i = n(this),
                    r = n.extend(!0, {}, t.options),
                    u = n.effects.setMode(i, t.options.mode || "effect"),
                    o = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : u == "hide" ? 0 : 100),
                    s = t.options.direction || "both",
                    h = t.options.origin,
                    f, e;
                u != "effect" && (r.origin = h || ["middle", "center"], r.restore = !0);
                f = {
                    height: i.height(),
                    width: i.width()
                };
                i.from = t.options.from || (u == "show" ? {
                    height: 0,
                    width: 0
                } : f);
                e = {
                    y: s != "horizontal" ? o / 100 : 1,
                    x: s != "vertical" ? o / 100 : 1
                };
                i.to = {
                    height: f.height * e.y,
                    width: f.width * e.x
                };
                t.options.fade && (u == "show" && (i.from.opacity = 0, i.to.opacity = 1), u == "hide" && (i.from.opacity = 1, i.to.opacity = 0));
                r.from = i.from;
                r.to = i.to;
                r.mode = u;
                i.effect("size", r, t.duration, t.callback);
                i.dequeue()
            })
        };
        n.effects.size = function(t) {
            return this.queue(function() {
                var i = n(this),
                    f = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    v = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    a = ["width", "height", "overflow"],
                    c = ["fontSize"],
                    e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    p = n.effects.setMode(i, t.options.mode || "effect"),
                    l = t.options.restore || !1,
                    s = t.options.scale || "both",
                    y = t.options.origin,
                    u = {
                        height: i.height(),
                        width: i.width()
                    },
                    h, r;
                i.from = t.options.from || u;
                i.to = t.options.to || u;
                y && (h = n.effects.getBaseline(y, u), i.from.top = (u.height - i.from.height) * h.y, i.from.left = (u.width - i.from.width) * h.x, i.to.top = (u.height - i.to.height) * h.y, i.to.left = (u.width - i.to.width) * h.x);
                r = {
                    from: {
                        y: i.from.height / u.height,
                        x: i.from.width / u.width
                    },
                    to: {
                        y: i.to.height / u.height,
                        x: i.to.width / u.width
                    }
                };
                (s == "box" || s == "both") && (r.from.y != r.to.y && (f = f.concat(e), i.from = n.effects.setTransition(i, e, r.from.y, i.from), i.to = n.effects.setTransition(i, e, r.to.y, i.to)), r.from.x != r.to.x && (f = f.concat(o), i.from = n.effects.setTransition(i, o, r.from.x, i.from), i.to = n.effects.setTransition(i, o, r.to.x, i.to)));
                (s == "content" || s == "both") && r.from.y != r.to.y && (f = f.concat(c), i.from = n.effects.setTransition(i, c, r.from.y, i.from), i.to = n.effects.setTransition(i, c, r.to.y, i.to));
                n.effects.save(i, l ? f : v);
                i.show();
                n.effects.createWrapper(i);
                i.css("overflow", "hidden").css(i.from);
                (s == "content" || s == "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(c), o = o.concat(["marginLeft", "marginRight"]), a = f.concat(e).concat(o), i.find("*[width]").each(function() {
                    var i = n(this),
                        u;
                    l && n.effects.save(i, a);
                    u = {
                        height: i.height(),
                        width: i.width()
                    };
                    i.from = {
                        height: u.height * r.from.y,
                        width: u.width * r.from.x
                    };
                    i.to = {
                        height: u.height * r.to.y,
                        width: u.width * r.to.x
                    };
                    r.from.y != r.to.y && (i.from = n.effects.setTransition(i, e, r.from.y, i.from), i.to = n.effects.setTransition(i, e, r.to.y, i.to));
                    r.from.x != r.to.x && (i.from = n.effects.setTransition(i, o, r.from.x, i.from), i.to = n.effects.setTransition(i, o, r.to.x, i.to));
                    i.css(i.from);
                    i.animate(i.to, t.duration, t.options.easing, function() {
                        l && n.effects.restore(i, a)
                    })
                }));
                i.animate(i.to, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        i.to.opacity === 0 && i.css("opacity", i.from.opacity);
                        p == "hide" && i.hide();
                        n.effects.restore(i, l ? f : v);
                        n.effects.removeWrapper(i);
                        t.callback && t.callback.apply(this, arguments);
                        i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.shake = function(t) {
            return this.queue(function() {
                var i = n(this),
                    l = ["position", "top", "bottom", "left", "right"],
                    y = n.effects.setMode(i, t.options.mode || "effect"),
                    u = t.options.direction || "left",
                    f = t.options.distance || 20,
                    v = t.options.times || 3,
                    r = t.duration || t.options.duration || 140,
                    c;
                n.effects.save(i, l);
                i.show();
                n.effects.createWrapper(i);
                var e = u == "up" || u == "down" ? "top" : "left",
                    o = u == "up" || u == "left" ? "pos" : "neg",
                    s = {},
                    h = {},
                    a = {};
                for (s[e] = (o == "pos" ? "-=" : "+=") + f, h[e] = (o == "pos" ? "+=" : "-=") + f * 2, a[e] = (o == "pos" ? "-=" : "+=") + f * 2, i.animate(s, r, t.options.easing), c = 1; c < v; c++) i.animate(h, r, t.options.easing).animate(a, r, t.options.easing);
                i.animate(h, r, t.options.easing).animate(s, r / 2, t.options.easing, function() {
                    n.effects.restore(i, l);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(this, arguments)
                });
                i.queue("fx", function() {
                    i.dequeue()
                });
                i.dequeue()
            })
        }
    }(jQuery),
    function(n) {
        n.effects.slide = function(t) {
            return this.queue(function() {
                var i = n(this),
                    h = ["position", "top", "bottom", "left", "right"],
                    f = n.effects.setMode(i, t.options.mode || "show"),
                    u = t.options.direction || "left",
                    s;
                n.effects.save(i, h);
                i.show();
                n.effects.createWrapper(i).css({
                    overflow: "hidden"
                });
                var e = u == "up" || u == "down" ? "top" : "left",
                    o = u == "up" || u == "left" ? "pos" : "neg",
                    r = t.options.distance || (e == "top" ? i.outerHeight(!0) : i.outerWidth(!0));
                f == "show" && i.css(e, o == "pos" ? isNaN(r) ? "-" + r : -r : r);
                s = {};
                s[e] = (f == "show" ? o == "pos" ? "+=" : "-=" : o == "pos" ? "-=" : "+=") + r;
                i.animate(s, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.options.easing,
                    complete: function() {
                        f == "hide" && i.hide();
                        n.effects.restore(i, h);
                        n.effects.removeWrapper(i);
                        t.callback && t.callback.apply(this, arguments);
                        i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(n) {
        n.effects.transfer = function(t) {
            return this.queue(function() {
                var i = n(this),
                    r = n(t.options.to),
                    u = r.offset(),
                    e = {
                        top: u.top,
                        left: u.left,
                        height: r.innerHeight(),
                        width: r.innerWidth()
                    },
                    f = i.offset(),
                    o = n('<div class="ui-effects-transfer"><\/div>').appendTo(document.body).addClass(t.options.className).css({
                        top: f.top,
                        left: f.left,
                        height: i.innerHeight(),
                        width: i.innerWidth(),
                        position: "absolute"
                    }).animate(e, t.duration, t.options.easing, function() {
                        o.remove();
                        t.callback && t.callback.apply(i[0], arguments);
                        i.dequeue()
                    })
            })
        }
    }(jQuery),
    function(n) {
        n.widget("ui.accordion", {
            options: {
                active: 0,
                animated: "slide",
                autoHeight: !0,
                clearStyle: !1,
                collapsible: !1,
                event: "click",
                fillSpace: !1,
                header: "> li > :first-child,> :not(li):even",
                icons: {
                    header: "ui-icon-triangle-1-e",
                    headerSelected: "ui-icon-triangle-1-s"
                },
                navigation: !1,
                navigationFilter: function() {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            },
            _create: function() {
                var t = this,
                    i = t.options,
                    r, u;
                t.running = 0;
                t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
                t.headers = t.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                    i.disabled || n(this).addClass("ui-state-hover")
                }).bind("mouseleave.accordion", function() {
                    i.disabled || n(this).removeClass("ui-state-hover")
                }).bind("focus.accordion", function() {
                    i.disabled || n(this).addClass("ui-state-focus")
                }).bind("blur.accordion", function() {
                    i.disabled || n(this).removeClass("ui-state-focus")
                });
                t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
                i.navigation && (r = t.element.find("a").filter(i.navigationFilter).eq(0), r.length && (u = r.closest(".ui-accordion-header"), t.active = u.length ? u : r.closest(".ui-accordion-content").prev()));
                t.active = t._findActive(t.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
                t.active.next().addClass("ui-accordion-content-active");
                t._createIcons();
                t.resize();
                t.element.attr("role", "tablist");
                t.headers.attr("role", "tab").bind("keydown.accordion", function(n) {
                    return t._keydown(n)
                }).next().attr("role", "tabpanel");
                t.headers.not(t.active || "").attr({
                    "aria-expanded": "false",
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().hide();
                t.active.length ? t.active.attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                }) : t.headers.eq(0).attr("tabIndex", 0);
                n.browser.safari || t.headers.find("a").attr("tabIndex", -1);
                i.event && t.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function(n) {
                    t._clickHandler.call(t, n, this);
                    n.preventDefault()
                })
            },
            _createIcons: function() {
                var t = this.options;
                t.icons && (n("<span><\/span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.children(".ui-icon").remove();
                this.element.removeClass("ui-accordion-icons")
            },
            destroy: function() {
                var t = this.options,
                    i;
                return this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons(), i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"), (t.autoHeight || t.fillHeight) && i.css("height", ""), n.Widget.prototype.destroy.call(this)
            },
            _setOption: function(t, i) {
                n.Widget.prototype._setOption.apply(this, arguments);
                t == "active" && this.activate(i);
                t == "icons" && (this._destroyIcons(), i && this._createIcons());
                t == "disabled" && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
            },
            _keydown: function(t) {
                if (!this.options.disabled && !t.altKey && !t.ctrlKey) {
                    var i = n.ui.keyCode,
                        u = this.headers.length,
                        f = this.headers.index(t.target),
                        r = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            r = this.headers[(f + 1) % u];
                            break;
                        case i.LEFT:
                        case i.UP:
                            r = this.headers[(f - 1 + u) % u];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._clickHandler({
                                target: t.target
                            }, t.target);
                            t.preventDefault()
                    }
                    return r ? (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), !1) : !0
                }
            },
            resize: function() {
                var i = this.options,
                    t, r;
                return i.fillSpace ? (n.browser.msie && (r = this.element.parent().css("overflow"), this.element.parent().css("overflow", "hidden")), t = this.element.parent().height(), n.browser.msie && this.element.parent().css("overflow", r), this.headers.each(function() {
                    t -= n(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : i.autoHeight && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, n(this).height("").height())
                }).height(t)), this
            },
            activate: function(n) {
                this.options.active = n;
                var t = this._findActive(n)[0];
                return this._clickHandler({
                    target: t
                }, t), this
            },
            _findActive: function(t) {
                return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? n([]) : this.headers.filter(":eq(0)")
            },
            _clickHandler: function(t, i) {
                var r = this.options,
                    u, f;
                if (!r.disabled) {
                    if (!t.target) {
                        if (!r.collapsible) return;
                        this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header);
                        this.active.next().addClass("ui-accordion-content-active");
                        var e = this.active.next(),
                            s = {
                                options: r,
                                newHeader: n([]),
                                oldHeader: r.active,
                                newContent: n([]),
                                oldContent: e
                            },
                            o = this.active = n([]);
                        this._toggle(o, e, s);
                        return
                    }
                    if (u = n(t.currentTarget || i), f = u[0] === this.active[0], r.active = r.collapsible && f ? !1 : this.headers.index(u), !this.running && (r.collapsible || !f)) {
                        var h = this.active,
                            o = u.next(),
                            e = this.active.next(),
                            s = {
                                options: r,
                                newHeader: f && r.collapsible ? n([]) : u,
                                oldHeader: this.active,
                                newContent: f && r.collapsible ? n([]) : o,
                                oldContent: e
                            },
                            c = this.headers.index(this.active[0]) > this.headers.index(u[0]);
                        this.active = f ? n([]) : u;
                        this._toggle(o, e, s, f, c);
                        h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header);
                        f || (u.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected), u.next().addClass("ui-accordion-content-active"));
                        return
                    }
                }
            },
            _toggle: function(t, i, r, u, f) {
                var o = this,
                    e = o.options,
                    c, h;
                if (o.toShow = t, o.toHide = i, o.data = r, c = function() {
                        if (o) return o._completed.apply(o, arguments)
                    }, o._trigger("changestart", null, o.data), o.running = i.size() === 0 ? t.size() : i.size(), e.animated) {
                    h = {};
                    h = e.collapsible && u ? {
                        toShow: n([]),
                        toHide: i,
                        complete: c,
                        down: f,
                        autoHeight: e.autoHeight || e.fillSpace
                    } : {
                        toShow: t,
                        toHide: i,
                        complete: c,
                        down: f,
                        autoHeight: e.autoHeight || e.fillSpace
                    };
                    e.proxied || (e.proxied = e.animated);
                    e.proxiedDuration || (e.proxiedDuration = e.duration);
                    e.animated = n.isFunction(e.proxied) ? e.proxied(h) : e.proxied;
                    e.duration = n.isFunction(e.proxiedDuration) ? e.proxiedDuration(h) : e.proxiedDuration;
                    var l = n.ui.accordion.animations,
                        a = e.duration,
                        s = e.animated;
                    !s || l[s] || n.easing[s] || (s = "slide");
                    l[s] || (l[s] = function(n) {
                        this.slide(n, {
                            easing: s,
                            duration: a || 700
                        })
                    });
                    l[s](h)
                } else e.collapsible && u ? t.toggle() : (i.hide(), t.show()), c(!0);
                i.prev().attr({
                    "aria-expanded": "false",
                    "aria-selected": "false",
                    tabIndex: -1
                }).blur();
                t.prev().attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                }).focus()
            },
            _completed: function(n) {
                (this.running = n ? 0 : --this.running, this.running) || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
            }
        });
        n.extend(n.ui.accordion, {
            version: "1.8.24",
            animations: {
                slide: function(t, i) {
                    if (t = n.extend({
                            easing: "swing",
                            duration: 300
                        }, t, i), !t.toHide.size()) {
                        t.toShow.animate({
                            height: "show",
                            paddingTop: "show",
                            paddingBottom: "show"
                        }, t);
                        return
                    }
                    if (!t.toShow.size()) {
                        t.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, t);
                        return
                    }
                    var s = t.toShow.css("overflow"),
                        f = 0,
                        u = {},
                        e = {},
                        o, r = t.toShow;
                    o = r[0].style.width;
                    r.width(r.parent().width() - parseFloat(r.css("paddingLeft")) - parseFloat(r.css("paddingRight")) - (parseFloat(r.css("borderLeftWidth")) || 0) - (parseFloat(r.css("borderRightWidth")) || 0));
                    n.each(["height", "paddingTop", "paddingBottom"], function(i, r) {
                        e[r] = "hide";
                        var f = ("" + n.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/);
                        u[r] = {
                            value: f[1],
                            unit: f[2] || "px"
                        }
                    });
                    t.toShow.css({
                        height: 0,
                        overflow: "hidden"
                    }).show();
                    t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(e, {
                        step: function(n, i) {
                            i.prop == "height" && (f = i.end - i.start == 0 ? 0 : (i.now - i.start) / (i.end - i.start));
                            t.toShow[0].style[i.prop] = f * u[i.prop].value + u[i.prop].unit
                        },
                        duration: t.duration,
                        easing: t.easing,
                        complete: function() {
                            t.autoHeight || t.toShow.css("height", "");
                            t.toShow.css({
                                width: o,
                                overflow: s
                            });
                            t.complete()
                        }
                    })
                },
                bounceslide: function(n) {
                    this.slide(n, {
                        easing: n.down ? "easeOutBounce" : "swing",
                        duration: n.down ? 1e3 : 200
                    })
                }
            }
        })
    }(jQuery),
    function(n) {
        var t = 0;
        n.widget("ui.autocomplete", {
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null
            },
            pending: 0,
            _create: function() {
                var t = this,
                    r = this.element[0].ownerDocument,
                    i;
                this.isMultiLine = this.element.is("textarea");
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                    role: "textbox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "true"
                }).bind("keydown.autocomplete", function(r) {
                    if (!t.options.disabled && !t.element.propAttr("readOnly")) {
                        i = !1;
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                            case u.PAGE_UP:
                                t._move("previousPage", r);
                                break;
                            case u.PAGE_DOWN:
                                t._move("nextPage", r);
                                break;
                            case u.UP:
                                t._keyEvent("previous", r);
                                break;
                            case u.DOWN:
                                t._keyEvent("next", r);
                                break;
                            case u.ENTER:
                            case u.NUMPAD_ENTER:
                                t.menu.active && (i = !0, r.preventDefault());
                            case u.TAB:
                                if (!t.menu.active) return;
                                t.menu.select(r);
                                break;
                            case u.ESCAPE:
                                t.element.val(t.term);
                                t.close(r);
                                break;
                            default:
                                clearTimeout(t.searching);
                                t.searching = setTimeout(function() {
                                    t.term != t.element.val() && (t.selectedItem = null, t.search(null, r))
                                }, t.options.delay)
                        }
                    }
                }).bind("keypress.autocomplete", function(n) {
                    i && (i = !1, n.preventDefault())
                }).bind("focus.autocomplete", function() {
                    t.options.disabled || (t.selectedItem = null, t.previous = t.element.val())
                }).bind("blur.autocomplete", function(n) {
                    t.options.disabled || (clearTimeout(t.searching), t.closing = setTimeout(function() {
                        t.close(n);
                        t._change(n)
                    }, 150))
                });
                this._initSource();
                this.menu = n("<ul><\/ul>").addClass("ui-autocomplete").appendTo(n(this.options.appendTo || "body", r)[0]).mousedown(function(i) {
                    var r = t.menu.element[0];
                    n(i.target).closest(".ui-menu-item").length || setTimeout(function() {
                        n(document).one("mousedown", function(i) {
                            i.target === t.element[0] || i.target === r || n.ui.contains(r, i.target) || t.close()
                        })
                    }, 1);
                    setTimeout(function() {
                        clearTimeout(t.closing)
                    }, 13)
                }).menu({
                    focus: function(n, i) {
                        var r = i.item.data("item.autocomplete");
                        !1 !== t._trigger("focus", n, {
                            item: r
                        }) && /^key/.test(n.originalEvent.type) && t.element.val(r.value)
                    },
                    selected: function(n, i) {
                        var u = i.item.data("item.autocomplete"),
                            f = t.previous;
                        t.element[0] !== r.activeElement && (t.element.focus(), t.previous = f, setTimeout(function() {
                            t.previous = f;
                            t.selectedItem = u
                        }, 1));
                        !1 !== t._trigger("select", n, {
                            item: u
                        }) && t.element.val(u.value);
                        t.term = t.element.val();
                        t.close(n);
                        t.selectedItem = u
                    },
                    blur: function() {
                        t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                    }
                }).zIndex(this.element.zIndex() + 1).css({
                    top: 0,
                    left: 0
                }).hide().data("menu");
                n.fn.bgiframe && this.menu.element.bgiframe();
                t.beforeunloadHandler = function() {
                    t.element.removeAttr("autocomplete")
                };
                n(window).bind("beforeunload", t.beforeunloadHandler)
            },
            destroy: function() {
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
                this.menu.element.remove();
                n(window).unbind("beforeunload", this.beforeunloadHandler);
                n.Widget.prototype.destroy.call(this)
            },
            _setOption: function(t, i) {
                n.Widget.prototype._setOption.apply(this, arguments);
                t === "source" && this._initSource();
                t === "appendTo" && this.menu.element.appendTo(n(i || "body", this.element[0].ownerDocument)[0]);
                t === "disabled" && i && this.xhr && this.xhr.abort()
            },
            _initSource: function() {
                var t = this,
                    i, r;
                n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(i, u) {
                    t.xhr && t.xhr.abort();
                    t.xhr = n.ajax({
                        url: r,
                        data: i,
                        dataType: "json",
                        success: function(n) {
                            u(n)
                        },
                        error: function() {
                            u([])
                        }
                    })
                }) : this.source = this.options.source
            },
            search: function(n, t) {
                return (n = n != null ? n : this.element.val(), this.term = this.element.val(), n.length < this.options.minLength) ? this.close(t) : (clearTimeout(this.closing), this._trigger("search", t) === !1) ? void 0 : this._search(n)
            },
            _search: function(n) {
                this.pending++;
                this.element.addClass("ui-autocomplete-loading");
                this.source({
                    term: n
                }, this._response())
            },
            _response: function() {
                var n = this,
                    i = ++t;
                return function(r) {
                    i === t && n.__response(r);
                    n.pending--;
                    n.pending || n.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(n) {
                !this.options.disabled && n && n.length ? (n = this._normalize(n), this._suggest(n), this._trigger("open")) : this.close()
            },
            close: function(n) {
                clearTimeout(this.closing);
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", n))
            },
            _change: function(n) {
                this.previous !== this.element.val() && this._trigger("change", n, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                    return typeof t == "string" ? {
                        label: t,
                        value: t
                    } : n.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(i, t);
                this.menu.deactivate();
                this.menu.refresh();
                i.show();
                this._resizeMenu();
                i.position(n.extend({
                    of: this.element
                }, this.options.position));
                this.options.autoFocus && this.menu.next(new n.Event("mouseover"))
            },
            _resizeMenu: function() {
                var n = this.menu.element;
                n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var r = this;
                n.each(i, function(n, i) {
                    r._renderItem(t, i)
                })
            },
            _renderItem: function(t, i) {
                return n("<li><\/li>").data("item.autocomplete", i).append(n("<a><\/a>").text(i.label)).appendTo(t)
            },
            _move: function(n, t) {
                if (!this.menu.element.is(":visible")) {
                    this.search(null, t);
                    return
                }
                if (this.menu.first() && /^previous/.test(n) || this.menu.last() && /^next/.test(n)) {
                    this.element.val(this.term);
                    this.menu.deactivate();
                    return
                }
                this.menu[n](t)
            },
            widget: function() {
                return this.menu.element
            },
            _keyEvent: function(n, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
            }
        });
        n.extend(n.ui.autocomplete, {
            escapeRegex: function(n) {
                return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
                return n.grep(t, function(n) {
                    return r.test(n.label || n.value || n)
                })
            }
        })
    }(jQuery),
    function(n) {
        n.widget("ui.menu", {
            _create: function() {
                var t = this;
                this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                    role: "listbox",
                    "aria-activedescendant": "ui-active-menuitem"
                }).click(function(i) {
                    n(i.target).closest(".ui-menu-item a").length && (i.preventDefault(), t.select(i))
                });
                this.refresh()
            },
            refresh: function() {
                var t = this,
                    i = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
                i.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(i) {
                    t.activate(i, n(this).parent())
                }).mouseleave(function() {
                    t.deactivate()
                })
            },
            activate: function(n, t) {
                if (this.deactivate(), this.hasScroll()) {
                    var i = t.offset().top - this.element.offset().top,
                        r = this.element.scrollTop(),
                        u = this.element.height();
                    i < 0 ? this.element.scrollTop(r + i) : i >= u && this.element.scrollTop(r + i - u + t.height())
                }
                this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
                this._trigger("focus", n, {
                    item: t
                })
            },
            deactivate: function() {
                this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
            },
            next: function(n) {
                this.move("next", ".ui-menu-item:first", n)
            },
            previous: function(n) {
                this.move("prev", ".ui-menu-item:last", n)
            },
            first: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            last: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            move: function(n, t, i) {
                if (!this.active) {
                    this.activate(i, this.element.children(t));
                    return
                }
                var r = this.active[n + "All"](".ui-menu-item").eq(0);
                r.length ? this.activate(i, r) : this.activate(i, this.element.children(t))
            },
            nextPage: function(t) {
                if (this.hasScroll()) {
                    if (!this.active || this.last()) {
                        this.activate(t, this.element.children(".ui-menu-item:first"));
                        return
                    }
                    var r = this.active.offset().top,
                        u = this.element.height(),
                        i = this.element.children(".ui-menu-item").filter(function() {
                            var t = n(this).offset().top - r - u + n(this).height();
                            return t < 10 && t > -10
                        });
                    i.length || (i = this.element.children(".ui-menu-item:last"));
                    this.activate(t, i)
                } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
            },
            previousPage: function(t) {
                if (this.hasScroll()) {
                    if (!this.active || this.first()) {
                        this.activate(t, this.element.children(".ui-menu-item:last"));
                        return
                    }
                    var r = this.active.offset().top,
                        u = this.element.height(),
                        i = this.element.children(".ui-menu-item").filter(function() {
                            var t = n(this).offset().top - r + u - n(this).height();
                            return t < 10 && t > -10
                        });
                    i.length || (i = this.element.children(".ui-menu-item:first"));
                    this.activate(t, i)
                } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
            },
            hasScroll: function() {
                return this.element.height() < this.element[n.fn.prop ? "prop" : "attr"]("scrollHeight")
            },
            select: function(n) {
                this._trigger("selected", n, {
                    item: this.active
                })
            }
        })
    }(jQuery),
    function(n) {
        var i, r, u, t, f = "ui-button ui-widget ui-state-default ui-corner-all",
            s = "ui-state-hover ui-state-active ",
            e = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            h = function() {
                var t = n(this).find(":ui-button");
                setTimeout(function() {
                    t.button("refresh")
                }, 1)
            },
            o = function(t) {
                var i = t.name,
                    r = t.form,
                    u = n([]);
                return i && (u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
                    return !this.form
                })), u
            };
        n.widget("ui.button", {
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset.button").bind("reset.button", h);
                typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled);
                this._determineButtonType();
                this.hasTitle = !!this.buttonElement.attr("title");
                var s = this,
                    e = this.options,
                    c = this.type === "checkbox" || this.type === "radio",
                    a = "ui-state-hover" + (c ? "" : " ui-state-active"),
                    l = "ui-state-focus";
                e.label === null && (e.label = this.buttonElement.html());
                this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter.button", function() {
                    e.disabled || (n(this).addClass("ui-state-hover"), this === i && n(this).addClass("ui-state-active"))
                }).bind("mouseleave.button", function() {
                    e.disabled || n(this).removeClass(a)
                }).bind("click.button", function(n) {
                    e.disabled && (n.preventDefault(), n.stopImmediatePropagation())
                });
                this.element.bind("focus.button", function() {
                    s.buttonElement.addClass(l)
                }).bind("blur.button", function() {
                    s.buttonElement.removeClass(l)
                });
                c && (this.element.bind("change.button", function() {
                    t || s.refresh()
                }), this.buttonElement.bind("mousedown.button", function(n) {
                    e.disabled || (t = !1, r = n.pageX, u = n.pageY)
                }).bind("mouseup.button", function(n) {
                    e.disabled || (r !== n.pageX || u !== n.pageY) && (t = !0)
                }));
                this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
                    if (e.disabled || t) return !1;
                    n(this).toggleClass("ui-state-active");
                    s.buttonElement.attr("aria-pressed", s.element[0].checked)
                }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
                    if (e.disabled || t) return !1;
                    n(this).addClass("ui-state-active");
                    s.buttonElement.attr("aria-pressed", "true");
                    var i = s.element[0];
                    o(i).not(i).map(function() {
                        return n(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown.button", function() {
                    if (e.disabled) return !1;
                    n(this).addClass("ui-state-active");
                    i = this;
                    n(document).one("mouseup", function() {
                        i = null
                    })
                }).bind("mouseup.button", function() {
                    if (e.disabled) return !1;
                    n(this).removeClass("ui-state-active")
                }).bind("keydown.button", function(t) {
                    if (e.disabled) return !1;
                    (t.keyCode == n.ui.keyCode.SPACE || t.keyCode == n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
                }).bind("keyup.button", function() {
                    n(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === n.ui.keyCode.SPACE && n(this).click()
                }));
                this._setOption("disabled", e.disabled);
                this._resetButton()
            },
            _determineButtonType: function() {
                var n, t, i;
                this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
                this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().filter(":last"), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible");
                this.buttonElement.removeClass(f + " " + s + " " + e).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
                this.hasTitle || this.buttonElement.removeAttr("title");
                n.Widget.prototype.destroy.call(this)
            },
            _setOption: function(t, i) {
                if (n.Widget.prototype._setOption.apply(this, arguments), t === "disabled") {
                    i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
                    return
                }
                this._resetButton()
            },
            refresh: function() {
                var t = this.element.is(":disabled");
                t !== this.options.disabled && this._setOption("disabled", t);
                this.type === "radio" ? o(this.element[0]).each(function() {
                    n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if (this.type === "input") {
                    this.options.label && this.element.val(this.options.label);
                    return
                }
                var i = this.buttonElement.removeClass(e),
                    f = n("<span><\/span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                    t = this.options.icons,
                    u = t.primary && t.secondary,
                    r = [];
                t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", f))) : r.push("ui-button-text-only");
                i.addClass(r.join(" "))
            }
        });
        n.widget("ui.buttonset", {
            options: {
                items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(t, i) {
                t === "disabled" && this.buttons.button("option", t, i);
                n.Widget.prototype._setOption.apply(this, arguments)
            },
            refresh: function() {
                var t = this.element.css("direction") === "rtl";
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            destroy: function() {
                this.element.removeClass("ui-buttonset");
                this.buttons.map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
                n.Widget.prototype.destroy.call(this)
            }
        })
    }(jQuery),
    function(n, t) {
        function e() {
            this.debug = !1;
            this._curInst = null;
            this._keyEvent = !1;
            this._disabledInputs = [];
            this._datepickerShowing = !1;
            this._inDialog = !1;
            this._mainDivId = "ui-datepicker-div";
            this._inlineClass = "ui-datepicker-inline";
            this._appendClass = "ui-datepicker-append";
            this._triggerClass = "ui-datepicker-trigger";
            this._dialogClass = "ui-datepicker-dialog";
            this._disableClass = "ui-datepicker-disabled";
            this._unselectableClass = "ui-datepicker-unselectable";
            this._currentClass = "ui-datepicker-current-day";
            this._dayOverClass = "ui-datepicker-days-cell-over";
            this.regional = [];
            this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            };
            n.extend(this._defaults, this.regional[""]);
            this.dpDiv = o(n('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"><\/div>'))
        }

        function o(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.bind("mouseout", function(t) {
                var r = n(t.target).closest(i);
                r.length && r.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
            }).bind("mouseover", function(r) {
                var u = n(r.target).closest(i);
                !n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) && u.length && (u.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), u.addClass("ui-state-hover"), u.hasClass("ui-datepicker-prev") && u.addClass("ui-datepicker-prev-hover"), u.hasClass("ui-datepicker-next") && u.addClass("ui-datepicker-next-hover"))
            })
        }

        function u(i, r) {
            n.extend(i, r);
            for (var u in r)(r[u] == null || r[u] == t) && (i[u] = r[u]);
            return i
        }
        n.extend(n.ui, {
            datepicker: {
                version: "1.8.24"
            }
        });
        var i = "datepicker",
            r = (new Date).getTime(),
            f;
        n.extend(e.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(n) {
                return u(this._defaults, n || {}), this
            },
            _attachDatepicker: function(target, settings) {
                var inlineSettings = null,
                    attrName, attrValue, nodeName, inline, inst;
                for (attrName in this._defaults)
                    if (attrValue = target.getAttribute("date:" + attrName), attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                nodeName = target.nodeName.toLowerCase();
                inline = nodeName == "div" || nodeName == "span";
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                inst = this._newInst(n(target), inline);
                inst.settings = n.extend({}, settings || {}, inlineSettings || {});
                nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function(t, i) {
                var r = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? o(n('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"><\/div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, r) {
                var u = n(t);
                (r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName)) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(n, t, i) {
                    r.settings[t] = i
                }).bind("getData.datepicker", function(n, t) {
                    return this._get(r, t)
                }), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, i) {
                var e = this._get(i, "appendText"),
                    o = this._get(i, "isRTL"),
                    u, r, f;
                i.append && i.append.remove();
                e && (i.append = n('<span class="' + this._appendClass + '">' + e + "<\/span>"), t[o ? "before" : "after"](i.append));
                t.unbind("focus", this._showDatepicker);
                i.trigger && i.trigger.remove();
                u = this._get(i, "showOn");
                (u == "focus" || u == "both") && t.focus(this._showDatepicker);
                (u == "button" || u == "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : n('<button type="button"><\/button>').addClass(this._triggerClass).html(f == "" ? r : n("<img/>").attr({
                    src: f,
                    alt: r,
                    title: r
                }))), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput == t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput != t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(n) {
                var t, i, r;
                this._get(n, "autoSize") && !n.inline && (t = new Date(2009, 11, 20), i = this._get(n, "dateFormat"), i.match(/[DM]/) && (r = function(n) {
                    for (var i = 0, r = 0, t = 0; t < n.length; t++) n[t].length > i && (i = n[t].length, r = t);
                    return r
                }, t.setMonth(r(this._get(n, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(n, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())), n.input.attr("size", this._formatDate(n, t).length))
            },
            _inlineDatepicker: function(t, r) {
                var u = n(t);
                u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv).bind("setData.datepicker", function(n, t, i) {
                    r.settings[t] = i
                }).bind("getData.datepicker", function(n, t) {
                    return this._get(r, t)
                }), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, r, f, e, o) {
                var s = this._dialogInst,
                    h;
                if (s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n('<input type="text" id="' + h + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, n.data(this._dialogInput[0], i, s)), u(s.settings, e || {}), r = r && r.constructor == Date ? this._formatDate(s, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, !this._pos) {
                    var c = document.documentElement.clientWidth,
                        l = document.documentElement.clientHeight,
                        a = document.documentElement.scrollLeft || document.body.scrollLeft,
                        v = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = f, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], i, s), this
            },
            _destroyDatepicker: function(t) {
                var u = n(t),
                    f = n.data(t, i),
                    r;
                u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), r == "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && u.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(t) {
                var f = n(t),
                    e = n.data(t, i),
                    r, u;
                f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r == "input" ? (t.disabled = !1, e.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n == t ? null : n
                }))
            },
            _disableDatepicker: function(t) {
                var f = n(t),
                    e = n.data(t, i),
                    r, u;
                f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r == "input" ? (t.disabled = !0, e.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n == t ? null : n
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(n) {
                if (!n) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] == n) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return n.data(t, i)
                } catch (r) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(i, r, f) {
                var e = this._getInst(i),
                    o;
                if (arguments.length == 2 && typeof r == "string") return r == "defaults" ? n.extend({}, n.datepicker._defaults) : e ? r == "all" ? n.extend({}, e.settings) : this._get(e, r) : null;
                if (o = r || {}, typeof r == "string" && (o = {}, o[r] = f), e) {
                    this._curInst == e && this._hideDatepicker();
                    var c = this._getDateDatepicker(i, !0),
                        s = this._getMinMaxDate(e, "min"),
                        h = this._getMinMaxDate(e, "max");
                    u(e.settings, o);
                    s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s));
                    h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h));
                    this._attachments(n(i), e);
                    this._autoSize(e);
                    this._setDate(e, c);
                    this._updateAlternate(e);
                    this._updateDatepicker(e)
                }
            },
            _changeDatepicker: function(n, t, i) {
                this._optionDatepicker(n, t, i)
            },
            _refreshDatepicker: function(n) {
                var t = this._getInst(n);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var i = n.datepicker._getInst(t.target),
                    r = !0,
                    e = i.dpDiv.is(".ui-datepicker-rtl"),
                    u, f, o;
                if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        n.datepicker._hideDatepicker();
                        r = !1;
                        break;
                    case 13:
                        return u = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), u[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, u[0]), f = n.datepicker._get(i, "onSelect"), f ? (o = n.datepicker._formatDate(i), f.apply(i.input ? i.input[0] : null, [o, i])) : n.datepicker._hideDatepicker(), !1;
                    case 27:
                        n.datepicker._hideDatepicker();
                        break;
                    case 33:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 34:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? 1 : -1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? -1 : 1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                } else t.keyCode == 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
                r && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(i) {
                var f = n.datepicker._getInst(i.target),
                    r, u;
                if (n.datepicker._get(f, "constrainInput")) return r = n.datepicker._possibleChars(n.datepicker._get(f, "dateFormat")), u = String.fromCharCode(i.charCode == t ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || u < " " || !r || r.indexOf(u) > -1
            },
            _doKeyUp: function(t) {
                var i = n.datepicker._getInst(t.target),
                    r;
                if (i.input.val() != i.lastVal) try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
                } catch (u) {
                    n.datepicker.log(u)
                }
                return !0
            },
            _showDatepicker: function(t) {
                var i, o, s, r, f;
                if ((t = t.target || t, t.nodeName.toLowerCase() != "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput != t) && (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst != i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function() {
                        return r |= n(this).css("position") == "fixed", !r
                    }), r && n.browser.opera && (n.datepicker._pos[0] -= document.documentElement.scrollLeft, n.datepicker._pos[1] -= document.documentElement.scrollTop), f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }), !i.inline)) {
                    var e = n.datepicker._get(i, "showAnim"),
                        h = n.datepicker._get(i, "duration"),
                        c = function() {
                            var r = i.dpDiv.find("iframe.ui-datepicker-cover"),
                                t;
                            !r.length || (t = n.datepicker._getBorders(i.dpDiv), r.css({
                                left: -t[0],
                                top: -t[1],
                                width: i.dpDiv.outerWidth(),
                                height: i.dpDiv.outerHeight()
                            }))
                        };
                    i.dpDiv.zIndex(n(t).zIndex() + 1);
                    n.datepicker._datepickerShowing = !0;
                    n.effects && n.effects[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h, c) : i.dpDiv[e || "show"](e ? h : null, c);
                    (!e || !h) && c();
                    i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus();
                    n.datepicker._curInst = i
                }
            },
            _updateDatepicker: function(t) {
                var s = this,
                    i, r, o;
                s.maxRows = 4;
                i = n.datepicker._getBorders(t.dpDiv);
                f = t;
                t.dpDiv.empty().append(this._generateHTML(t));
                this._attachHandlers(t);
                r = t.dpDiv.find("iframe.ui-datepicker-cover");
                r.length && r.css({
                    left: -i[0],
                    top: -i[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight()
                });
                t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var u = this._getNumberOfMonths(t),
                    e = u[1];
                t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                e > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
                t.dpDiv[(u[0] != 1 || u[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
                t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
                t == n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus();
                t.yearshtml && (o = t.yearshtml, setTimeout(function() {
                    o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                    o = t.yearshtml = null
                }, 0))
            },
            _getBorders: function(n) {
                var t = function(n) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[n] || n
                };
                return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
            },
            _checkOffset: function(t, i, r) {
                var u = t.dpDiv.outerWidth(),
                    f = t.dpDiv.outerHeight(),
                    h = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                    s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left == t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top == t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
            },
            _findPos: function(t) {
                for (var r = this._getInst(t), u = this._get(r, "isRTL"), i; t && (t.type == "hidden" || t.nodeType != 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
                return i = n(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(t) {
                var r = this._curInst,
                    e;
                if (r && (!t || r == n.data(t, i)) && this._datepickerShowing) {
                    var u = this._get(r, "showAnim"),
                        o = this._get(r, "duration"),
                        f = function() {
                            n.datepicker._tidyDialog(r)
                        };
                    n.effects && n.effects[u] ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), o, f) : r.dpDiv[u == "slideDown" ? "slideUp" : u == "fadeIn" ? "fadeOut" : "hide"](u ? o : null, f);
                    u || f();
                    this._datepickerShowing = !1;
                    e = this._get(r, "onClose");
                    e && e.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]);
                    this._lastInput = null;
                    this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv)));
                    this._inDialog = !1
                }
            },
            _tidyDialog: function(n) {
                n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (n.datepicker._curInst) {
                    var i = n(t.target),
                        r = n.datepicker._getInst(i[0]);
                    (i[0].id == n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length != 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst == r) || n.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r == "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
            },
            _gotoToday: function(t) {
                var u = n(t),
                    i = this._getInst(u[0]),
                    r;
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
                this._notifyChange(i);
                this._adjustDate(u)
            },
            _selectMonthYear: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                u["selected" + (r == "M" ? "Month" : "Year")] = u["draw" + (r == "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
                this._notifyChange(u);
                this._adjustDate(f)
            },
            _selectDay: function(t, i, r, u) {
                var e = n(t),
                    f;
                n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(t) {
                var i = n(t),
                    r = this._getInst(i[0]);
                this._selectDate(i, "")
            },
            _selectDate: function(t, i) {
                var f = n(t),
                    r = this._getInst(f[0]),
                    u;
                i = i != null ? i : this._formatDate(r);
                r.input && r.input.val(i);
                this._updateAlternate(r);
                u = this._get(r, "onSelect");
                u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
                r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var i = this._get(t, "altField");
                if (i) {
                    var r = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        u = this._getDate(t),
                        f = this.formatDate(r, u, this._getFormatConfig(t));
                    n(i).each(function() {
                        n(this).val(f)
                    })
                }
            },
            noWeekends: function(n) {
                var t = n.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function(n) {
                var t = new Date(n.getTime()),
                    i;
                return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
            },
            parseDate: function(t, i, r) {
                var c, s, w, u;
                if (t == null || i == null) throw "Invalid arguments";
                if (i = typeof i == "object" ? i.toString() : i + "", i == "") return null;
                c = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                c = typeof c != "string" ? c : (new Date).getFullYear() % 100 + parseInt(c, 10);
                var k = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (r ? r.dayNames : null) || this._defaults.dayNames,
                    g = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                    nt = (r ? r.monthNames : null) || this._defaults.monthNames,
                    f = -1,
                    o = -1,
                    h = -1,
                    v = -1,
                    y = !1,
                    a = function(n) {
                        var i = s + 1 < t.length && t.charAt(s + 1) == n;
                        return i && s++, i
                    },
                    l = function(n) {
                        var r = a(n),
                            u = n == "@" ? 14 : n == "!" ? 20 : n == "y" && r ? 4 : n == "o" ? 3 : 2,
                            f = new RegExp("^\\d{1," + u + "}"),
                            t = i.substring(e).match(f);
                        if (!t) throw "Missing number at position " + e;
                        return e += t[0].length, parseInt(t[0], 10)
                    },
                    b = function(t, r, u) {
                        var o = n.map(a(t) ? u : r, function(n, t) {
                                return [
                                    [t, n]
                                ]
                            }).sort(function(n, t) {
                                return -(n[1].length - t[1].length)
                            }),
                            f = -1;
                        if (n.each(o, function(n, t) {
                                var r = t[1];
                                if (i.substr(e, r.length).toLowerCase() == r.toLowerCase()) return f = t[0], e += r.length, !1
                            }), f != -1) return f + 1;
                        throw "Unknown name at position " + e;
                    },
                    p = function() {
                        if (i.charAt(e) != t.charAt(s)) throw "Unexpected literal at position " + e;
                        e++
                    },
                    e = 0;
                for (s = 0; s < t.length; s++)
                    if (y) t.charAt(s) == "'" && !a("'") ? y = !1 : p();
                    else switch (t.charAt(s)) {
                        case "d":
                            h = l("d");
                            break;
                        case "D":
                            b("D", k, d);
                            break;
                        case "o":
                            v = l("o");
                            break;
                        case "m":
                            o = l("m");
                            break;
                        case "M":
                            o = b("M", g, nt);
                            break;
                        case "y":
                            f = l("y");
                            break;
                        case "@":
                            u = new Date(l("@"));
                            f = u.getFullYear();
                            o = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "!":
                            u = new Date((l("!") - this._ticksTo1970) / 1e4);
                            f = u.getFullYear();
                            o = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "'":
                            a("'") ? p() : y = !0;
                            break;
                        default:
                            p()
                    }
                    if (e < i.length) throw "Extra/unparsed characters found in date: " + i.substring(e);
                if (f == -1 ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= c ? 0 : -100)), v > -1) {
                    o = 1;
                    h = v;
                    do {
                        if (w = this._getDaysInMonth(f, o - 1), h <= w) break;
                        o++;
                        h -= w
                    } while (1)
                }
                if (u = this._daylightSavingAdjust(new Date(f, o - 1, h)), u.getFullYear() != f || u.getMonth() + 1 != o || u.getDate() != h) throw "Invalid date";
                return u
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
            formatDate: function(n, t, i) {
                var u;
                if (!t) return "";
                var h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    f = function(t) {
                        var i = u + 1 < n.length && n.charAt(u + 1) == t;
                        return i && u++, i
                    },
                    e = function(n, t, i) {
                        var r = "" + t;
                        if (f(n))
                            while (r.length < i) r = "0" + r;
                        return r
                    },
                    s = function(n, t, i, r) {
                        return f(n) ? r[t] : i[t]
                    },
                    r = "",
                    o = !1;
                if (t)
                    for (u = 0; u < n.length; u++)
                        if (o) n.charAt(u) == "'" && !f("'") ? o = !1 : r += n.charAt(u);
                        else switch (n.charAt(u)) {
                            case "d":
                                r += e("d", t.getDate(), 2);
                                break;
                            case "D":
                                r += s("D", t.getDay(), h, c);
                                break;
                            case "o":
                                r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                r += e("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                r += s("M", t.getMonth(), l, a);
                                break;
                            case "y":
                                r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                r += t.getTime();
                                break;
                            case "!":
                                r += t.getTime() * 1e4 + this._ticksTo1970;
                                break;
                            case "'":
                                f("'") ? r += "'" : o = !0;
                                break;
                            default:
                                r += n.charAt(u)
                        }
                        return r
            },
            _possibleChars: function(n) {
                for (var i = "", r = !1, u = function(i) {
                        var r = t + 1 < n.length && n.charAt(t + 1) == i;
                        return r && t++, r
                    }, t = 0; t < n.length; t++)
                    if (r) n.charAt(t) == "'" && !u("'") ? r = !1 : i += n.charAt(t);
                    else switch (n.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            u("'") ? i += "'" : r = !0;
                            break;
                        default:
                            i += n.charAt(t)
                    }
                    return i
            },
            _get: function(n, i) {
                return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
            },
            _setDateFromField: function(n, t) {
                var u, r, i, f, e;
                if (n.input.val() != n.lastVal) {
                    u = this._get(n, "dateFormat");
                    r = n.lastVal = n.input ? n.input.val() : null;
                    i = f = this._getDefaultDate(n);
                    e = this._getFormatConfig(n);
                    try {
                        i = this.parseDate(u, r, e) || f
                    } catch (o) {
                        this.log(o);
                        r = t ? "" : r
                    }
                    n.selectedDay = i.getDate();
                    n.drawMonth = n.selectedMonth = i.getMonth();
                    n.drawYear = n.selectedYear = i.getFullYear();
                    n.currentDay = r ? i.getDate() : 0;
                    n.currentMonth = r ? i.getMonth() : 0;
                    n.currentYear = r ? i.getFullYear() : 0;
                    this._adjustInstDate(n)
                }
            },
            _getDefaultDate: function(n) {
                return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
            },
            _determineDate: function(t, i, r) {
                var f = function(n) {
                        var t = new Date;
                        return t.setDate(t.getDate() + n), t
                    },
                    e = function(i) {
                        try {
                            return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                        } catch (h) {}
                        for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                            switch (u[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(u[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += parseInt(u[1], 10) * 7;
                                    break;
                                case "m":
                                case "M":
                                    e += parseInt(u[1], 10);
                                    r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                    break;
                                case "y":
                                case "Y":
                                    f += parseInt(u[1], 10);
                                    r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                            }
                            u = s.exec(i)
                        }
                        return new Date(f, e, r)
                    },
                    u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
                return u = u && u.toString() == "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
            },
            _daylightSavingAdjust: function(n) {
                return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
            },
            _setDate: function(n, t, i) {
                var u = !t,
                    f = n.selectedMonth,
                    e = n.selectedYear,
                    r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
                n.selectedDay = n.currentDay = r.getDate();
                n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
                n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
                (f != n.selectedMonth || e != n.selectedYear) && !i && this._notifyChange(n);
                this._adjustInstDate(n);
                n.input && n.input.val(u ? "" : this._formatDate(n))
            },
            _getDate: function(n) {
                return !n.currentYear || n.input && n.input.val() == "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
            },
            _attachHandlers: function(t) {
                var u = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            window["DP_jQuery_" + r].datepicker._adjustDate(i, -u, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + r].datepicker._adjustDate(i, +u, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + r].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + r].datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var l = new Date,
                    d, h, ut, c, p, ot, w, st, ht, ct, r, at, vt, s;
                l = this._daylightSavingAdjust(new Date(l.getFullYear(), l.getMonth(), l.getDate()));
                var e = this._get(t, "isRTL"),
                    fi = this._get(t, "showButtonPanel"),
                    pt = this._get(t, "hideIfNoPrevNext"),
                    tt = this._get(t, "navigationAsDateFormat"),
                    o = this._getNumberOfMonths(t),
                    ei = this._get(t, "showCurrentAtPos"),
                    wt = this._get(t, "stepMonths"),
                    it = o[0] != 1 || o[1] != 1,
                    rt = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    y = this._getMinMaxDate(t, "min"),
                    a = this._getMinMaxDate(t, "max"),
                    i = t.drawMonth - ei,
                    u = t.drawYear;
                if (i < 0 && (i += 12, u--), a)
                    for (d = this._daylightSavingAdjust(new Date(a.getFullYear(), a.getMonth() - o[0] * o[1] + 1, a.getDate())), d = y && d < y ? y : d; this._daylightSavingAdjust(new Date(u, i, 1)) > d;) i--, i < 0 && (i = 11, u--);
                t.drawMonth = i;
                t.drawYear = u;
                h = this._get(t, "prevText");
                h = tt ? this.formatDate(h, this._daylightSavingAdjust(new Date(u, i - wt, 1)), this._getFormatConfig(t)) : h;
                ut = this._canAdjustMonth(t, -1, u, i) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + h + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "e" : "w") + '">' + h + "<\/span><\/a>" : pt ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + h + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "e" : "w") + '">' + h + "<\/span><\/a>";
                c = this._get(t, "nextText");
                c = tt ? this.formatDate(c, this._daylightSavingAdjust(new Date(u, i + wt, 1)), this._getFormatConfig(t)) : c;
                var bt = this._canAdjustMonth(t, 1, u, i) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "w" : "e") + '">' + c + "<\/span><\/a>" : pt ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "w" : "e") + '">' + c + "<\/span><\/a>",
                    g = this._get(t, "currentText"),
                    kt = this._get(t, "gotoCurrent") && t.currentDay ? rt : l;
                g = tt ? this.formatDate(g, kt, this._getFormatConfig(t)) : g;
                var dt = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "<\/button>",
                    oi = fi ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (e ? dt : "") + (this._isInRange(t, kt) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + g + "<\/button>" : "") + (e ? "" : dt) + "<\/div>" : "",
                    v = parseInt(this._get(t, "firstDay"), 10);
                v = isNaN(v) ? 0 : v;
                var gt = this._get(t, "showWeek"),
                    si = this._get(t, "dayNames"),
                    vi = this._get(t, "dayNamesShort"),
                    hi = this._get(t, "dayNamesMin"),
                    ci = this._get(t, "monthNames"),
                    li = this._get(t, "monthNamesShort"),
                    ni = this._get(t, "beforeShowDay"),
                    ft = this._get(t, "showOtherMonths"),
                    ai = this._get(t, "selectOtherMonths"),
                    yi = this._get(t, "calculateWeek") || this.iso8601Week,
                    ti = this._getDefaultDate(t),
                    et = "";
                for (p = 0; p < o[0]; p++) {
                    for (ot = "", this.maxRows = 4, w = 0; w < o[1]; w++) {
                        var ii = this._daylightSavingAdjust(new Date(u, i, t.selectedDay)),
                            b = " ui-corner-all",
                            f = "";
                        if (it) {
                            if (f += '<div class="ui-datepicker-group', o[1] > 1) switch (w) {
                                case 0:
                                    f += " ui-datepicker-group-first";
                                    b = " ui-corner-" + (e ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    f += " ui-datepicker-group-last";
                                    b = " ui-corner-" + (e ? "left" : "right");
                                    break;
                                default:
                                    f += " ui-datepicker-group-middle";
                                    b = ""
                            }
                            f += '">'
                        }
                        for (f += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + b + '">' + (/all|left/.test(b) && p == 0 ? e ? bt : ut : "") + (/all|right/.test(b) && p == 0 ? e ? ut : bt : "") + this._generateMonthYearHeader(t, i, u, y, a, p > 0 || w > 0, ci, li) + '<\/div><table class="ui-datepicker-calendar"><thead><tr>', st = gt ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "<\/th>" : "", s = 0; s < 7; s++) ht = (s + v) % 7, st += "<th" + ((s + v + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + si[ht] + '">' + hi[ht] + "<\/span><\/th>";
                        f += st + "<\/tr><\/thead><tbody>";
                        ct = this._getDaysInMonth(u, i);
                        u == t.selectedYear && i == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, ct));
                        var ri = (this._getFirstDayOfMonth(u, i) - v + 7) % 7,
                            lt = Math.ceil((ri + ct) / 7),
                            ui = it ? this.maxRows > lt ? this.maxRows : lt : lt;
                        for (this.maxRows = ui, r = this._daylightSavingAdjust(new Date(u, i, 1 - ri)), at = 0; at < ui; at++) {
                            for (f += "<tr>", vt = gt ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(r) + "<\/td>" : "", s = 0; s < 7; s++) {
                                var nt = ni ? ni.apply(t.input ? t.input[0] : null, [r]) : [!0, ""],
                                    k = r.getMonth() != i,
                                    yt = k && !ai || !nt[0] || y && r < y || a && r > a;
                                vt += '<td class="' + ((s + v + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (k ? " ui-datepicker-other-month" : "") + (r.getTime() == ii.getTime() && i == t.selectedMonth && t._keyEvent || ti.getTime() == r.getTime() && ti.getTime() == ii.getTime() ? " " + this._dayOverClass : "") + (yt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (k && !ft ? "" : " " + nt[1] + (r.getTime() == rt.getTime() ? " " + this._currentClass : "") + (r.getTime() == l.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!k || ft) && nt[2] ? ' title="' + nt[2] + '"' : "") + (yt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + r.getMonth() + '" data-year="' + r.getFullYear() + '"') + ">" + (k && !ft ? "&#xa0;" : yt ? '<span class="ui-state-default">' + r.getDate() + "<\/span>" : '<a class="ui-state-default' + (r.getTime() == l.getTime() ? " ui-state-highlight" : "") + (r.getTime() == rt.getTime() ? " ui-state-active" : "") + (k ? " ui-priority-secondary" : "") + '" href="#">' + r.getDate() + "<\/a>") + "<\/td>";
                                r.setDate(r.getDate() + 1);
                                r = this._daylightSavingAdjust(r)
                            }
                            f += vt + "<\/tr>"
                        }
                        i++;
                        i > 11 && (i = 0, u++);
                        f += "<\/tbody><\/table>" + (it ? "<\/div>" + (o[0] > 0 && w == o[1] - 1 ? '<div class="ui-datepicker-row-break"><\/div>' : "") : "");
                        ot += f
                    }
                    et += ot
                }
                return et += oi + (n.browser.msie && parseInt(n.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"><\/iframe>' : ""), t._keyEvent = !1, et
            },
            _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
                var v = this._get(n, "changeMonth"),
                    y = this._get(n, "changeYear"),
                    p = this._get(n, "showMonthAfterYear"),
                    c = '<div class="ui-datepicker-title">',
                    l = "",
                    w, b, h;
                if (f || !v) l += '<span class="ui-datepicker-month">' + e[t] + "<\/span>";
                else {
                    for (w = r && r.getFullYear() == i, b = u && u.getFullYear() == i, l += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">', h = 0; h < 12; h++)(!w || h >= r.getMonth()) && (!b || h <= u.getMonth()) && (l += '<option value="' + h + '"' + (h == t ? ' selected="selected"' : "") + ">" + o[h] + "<\/option>");
                    l += "<\/select>"
                }
                if (p || (c += l + (f || !v || !y ? "&#xa0;" : "")), !n.yearshtml)
                    if (n.yearshtml = "", f || !y) c += '<span class="ui-datepicker-year">' + i + "<\/span>";
                    else {
                        var k = this._get(n, "yearRange").split(":"),
                            d = (new Date).getFullYear(),
                            g = function(n) {
                                var t = n.match(/c[+-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+-].*/) ? d + parseInt(n, 10) : parseInt(n, 10);
                                return isNaN(t) ? d : t
                            },
                            s = g(k[0]),
                            a = Math.max(s, g(k[1] || ""));
                        for (s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; s <= a; s++) n.yearshtml += '<option value="' + s + '"' + (s == i ? ' selected="selected"' : "") + ">" + s + "<\/option>";
                        n.yearshtml += "<\/select>";
                        c += n.yearshtml;
                        n.yearshtml = null
                    }
                return c += this._get(n, "yearSuffix"), p && (c += (f || !v || !y ? "&#xa0;" : "") + l), c += "<\/div>", c
            },
            _adjustInstDate: function(n, t, i) {
                var u = n.drawYear + (i == "Y" ? t : 0),
                    f = n.drawMonth + (i == "M" ? t : 0),
                    e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i == "D" ? t : 0),
                    r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
                n.selectedDay = r.getDate();
                n.drawMonth = n.selectedMonth = r.getMonth();
                n.drawYear = n.selectedYear = r.getFullYear();
                (i == "M" || i == "Y") && this._notifyChange(n)
            },
            _restrictMinMax: function(n, t) {
                var r = this._getMinMaxDate(n, "min"),
                    u = this._getMinMaxDate(n, "max"),
                    i = r && t < r ? r : t;
                return i = u && i > u ? u : i, i
            },
            _notifyChange: function(n) {
                var t = this._get(n, "onChangeMonthYear");
                t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
            },
            _getNumberOfMonths: function(n) {
                var t = this._get(n, "numberOfMonths");
                return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
            },
            _getMinMaxDate: function(n, t) {
                return this._determineDate(n, this._get(n, t + "Date"), null)
            },
            _getDaysInMonth: function(n, t) {
                return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(n, t) {
                return new Date(n, t, 1).getDay()
            },
            _canAdjustMonth: function(n, t, i, r) {
                var f = this._getNumberOfMonths(n),
                    u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
                return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
            },
            _isInRange: function(n, t) {
                var i = this._getMinMaxDate(n, "min"),
                    r = this._getMinMaxDate(n, "max");
                return (!i || t.getTime() >= i.getTime()) && (!r || t.getTime() <= r.getTime())
            },
            _getFormatConfig: function(n) {
                var t = this._get(n, "shortYearCutoff");
                return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(n, "dayNamesShort"),
                    dayNames: this._get(n, "dayNames"),
                    monthNamesShort: this._get(n, "monthNamesShort"),
                    monthNames: this._get(n, "monthNames")
                }
            },
            _formatDate: function(n, t, i, r) {
                t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
                var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
                return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
            }
        });
        n.fn.datepicker = function(t) {
            if (!this.length) return this;
            n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick).find("body").append(n.datepicker.dpDiv), n.datepicker.initialized = !0);
            var i = Array.prototype.slice.call(arguments, 1);
            return typeof t != "string" || t != "isDisabled" && t != "getDate" && t != "widget" ? t == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
                typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
            }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
        };
        n.datepicker = new e;
        n.datepicker.initialized = !1;
        n.datepicker.uuid = (new Date).getTime();
        n.datepicker.version = "1.8.24";
        window["DP_jQuery_" + r] = n
    }(jQuery),
    function(n, t) {
        var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
            r = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            u = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        n.widget("ui.dialog", {
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    collision: "fit",
                    using: function(t) {
                        var i = n(this).css(t).offset().top;
                        i < 0 && n(this).css("top", t.top - i)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function() {
                this.originalTitle = this.element.attr("title");
                typeof this.originalTitle != "string" && (this.originalTitle = "");
                this.options.title = this.options.title || this.originalTitle;
                var t = this,
                    r = t.options,
                    s = r.title || "&#160;",
                    o = n.ui.dialog.getTitleId(t.element),
                    e = (t.uiDialog = n("<div><\/div>")).appendTo(document.body).hide().addClass(i + r.dialogClass).css({
                        zIndex: r.zIndex
                    }).attr("tabIndex", -1).css("outline", 0).keydown(function(i) {
                        r.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (t.close(i), i.preventDefault())
                    }).attr({
                        role: "dialog",
                        "aria-labelledby": o
                    }).mousedown(function(n) {
                        t.moveToTop(!1, n)
                    }),
                    h = t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(e),
                    f = (t.uiDialogTitlebar = n("<div><\/div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(e),
                    u = n('<a href="#"><\/a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                        u.addClass("ui-state-hover")
                    }, function() {
                        u.removeClass("ui-state-hover")
                    }).focus(function() {
                        u.addClass("ui-state-focus")
                    }).blur(function() {
                        u.removeClass("ui-state-focus")
                    }).click(function(n) {
                        return t.close(n), !1
                    }).appendTo(f),
                    c = (t.uiDialogTitlebarCloseText = n("<span><\/span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),
                    l = n("<span><\/span>").addClass("ui-dialog-title").attr("id", o).html(s).prependTo(f);
                n.isFunction(r.beforeclose) && !n.isFunction(r.beforeClose) && (r.beforeClose = r.beforeclose);
                f.find("*").add(f).disableSelection();
                r.draggable && n.fn.draggable && t._makeDraggable();
                r.resizable && n.fn.resizable && t._makeResizable();
                t._createButtons(r.buttons);
                t._isOpen = !1;
                n.fn.bgiframe && e.bgiframe()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            destroy: function() {
                var n = this;
                return n.overlay && n.overlay.destroy(), n.uiDialog.hide(), n.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), n.uiDialog.remove(), n.originalTitle && n.element.attr("title", n.originalTitle), n
            },
            widget: function() {
                return this.uiDialog
            },
            close: function(t) {
                var i = this,
                    r, u;
                if (!1 !== i._trigger("beforeClose", t)) return i.overlay && i.overlay.destroy(), i.uiDialog.unbind("keypress.ui-dialog"), i._isOpen = !1, i.options.hide ? i.uiDialog.hide(i.options.hide, function() {
                    i._trigger("close", t)
                }) : (i.uiDialog.hide(), i._trigger("close", t)), n.ui.dialog.overlay.resize(), i.options.modal && (r = 0, n(".ui-dialog").each(function() {
                    this !== i.uiDialog[0] && (u = n(this).css("z-index"), isNaN(u) || (r = Math.max(r, u)))
                }), n.ui.dialog.maxZ = r), i
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function(t, i) {
                var r = this,
                    u = r.options,
                    f;
                return u.modal && !t || !u.stack && !u.modal ? r._trigger("focus", i) : (u.zIndex > n.ui.dialog.maxZ && (n.ui.dialog.maxZ = u.zIndex), r.overlay && (n.ui.dialog.maxZ += 1, r.overlay.$el.css("z-index", n.ui.dialog.overlay.maxZ = n.ui.dialog.maxZ)), f = {
                    scrollTop: r.element.scrollTop(),
                    scrollLeft: r.element.scrollLeft()
                }, n.ui.dialog.maxZ += 1, r.uiDialog.css("z-index", n.ui.dialog.maxZ), r.element.attr(f), r._trigger("focus", i), r)
            },
            open: function() {
                if (!this._isOpen) {
                    var t = this,
                        i = t.options,
                        r = t.uiDialog;
                    return t.overlay = i.modal ? new n.ui.dialog.overlay(t) : null, t._size(), t._position(i.position), r.show(i.show), t.moveToTop(!0), i.modal && r.bind("keydown.ui-dialog", function(t) {
                        if (t.keyCode === n.ui.keyCode.TAB) {
                            var i = n(":tabbable", this),
                                r = i.filter(":first"),
                                u = i.filter(":last");
                            return t.target === u[0] && !t.shiftKey ? (r.focus(1), !1) : t.target === r[0] && t.shiftKey ? (u.focus(1), !1) : void 0
                        }
                    }), n(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
                }
            },
            _createButtons: function(t) {
                var i = this,
                    r = !1,
                    u = n("<div><\/div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                    f = n("<div><\/div>").addClass("ui-dialog-buttonset").appendTo(u);
                i.uiDialog.find(".ui-dialog-buttonpane").remove();
                typeof t == "object" && t !== null && n.each(t, function() {
                    return !(r = !0)
                });
                r && (n.each(t, function(t, r) {
                    r = n.isFunction(r) ? {
                        click: r,
                        text: t
                    } : r;
                    var u = n('<button type="button"><\/button>').click(function() {
                        r.click.apply(i.element[0], arguments)
                    }).appendTo(f);
                    n.each(r, function(n, t) {
                        n !== "click" && (n in u ? u[n](t) : u.attr(n, t))
                    });
                    n.fn.button && u.button()
                }), u.appendTo(i.uiDialog))
            },
            _makeDraggable: function() {
                function i(n) {
                    return {
                        position: n.position,
                        offset: n.offset
                    }
                }
                var t = this,
                    r = t.options,
                    u = n(document),
                    f;
                t.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(u, e) {
                        f = r.height === "auto" ? "auto" : n(this).height();
                        n(this).height(n(this).height()).addClass("ui-dialog-dragging");
                        t._trigger("dragStart", u, i(e))
                    },
                    drag: function(n, r) {
                        t._trigger("drag", n, i(r))
                    },
                    stop: function(e, o) {
                        r.position = [o.position.left - u.scrollLeft(), o.position.top - u.scrollTop()];
                        n(this).removeClass("ui-dialog-dragging").height(f);
                        t._trigger("dragStop", e, i(o));
                        n.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function(i) {
                function f(n) {
                    return {
                        originalPosition: n.originalPosition,
                        originalSize: n.originalSize,
                        position: n.position,
                        size: n.size
                    }
                }
                i = i === t ? this.options.resizable : i;
                var r = this,
                    u = r.options,
                    e = r.uiDialog.css("position"),
                    o = typeof i == "string" ? i : "n,e,s,w,se,sw,ne,nw";
                r.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: r.element,
                    maxWidth: u.maxWidth,
                    maxHeight: u.maxHeight,
                    minWidth: u.minWidth,
                    minHeight: r._minHeight(),
                    handles: o,
                    start: function(t, i) {
                        n(this).addClass("ui-dialog-resizing");
                        r._trigger("resizeStart", t, f(i))
                    },
                    resize: function(n, t) {
                        r._trigger("resize", n, f(t))
                    },
                    stop: function(t, i) {
                        n(this).removeClass("ui-dialog-resizing");
                        u.height = n(this).height();
                        u.width = n(this).width();
                        r._trigger("resizeStop", t, f(i));
                        n.ui.dialog.overlay.resize()
                    }
                }).css("position", e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function() {
                var n = this.options;
                return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
            },
            _position: function(t) {
                var i = [],
                    u = [0, 0],
                    r;
                t ? ((typeof t == "string" || typeof t == "object" && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], i.length === 1 && (i[1] = i[0]), n.each(["left", "top"], function(n, t) {
                    +i[n] === i[n] && (u[n] = i[n], i[n] = t)
                }), t = {
                    my: i.join(" "),
                    at: i.join(" "),
                    offset: u.join(" ")
                }), t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position;
                r = this.uiDialog.is(":visible");
                r || this.uiDialog.show();
                this.uiDialog.css({
                    top: 0,
                    left: 0
                }).position(n.extend({
                    of: window
                }, t));
                r || this.uiDialog.hide()
            },
            _setOptions: function(t) {
                var e = this,
                    i = {},
                    f = !1;
                n.each(t, function(n, t) {
                    e._setOption(n, t);
                    n in r && (f = !0);
                    n in u && (i[n] = t)
                });
                f && this._size();
                this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", i)
            },
            _setOption: function(t, r) {
                var u = this,
                    f = u.uiDialog,
                    o, e;
                switch (t) {
                    case "beforeclose":
                        t = "beforeClose";
                        break;
                    case "buttons":
                        u._createButtons(r);
                        break;
                    case "closeText":
                        u.uiDialogTitlebarCloseText.text("" + r);
                        break;
                    case "dialogClass":
                        f.removeClass(u.options.dialogClass).addClass(i + r);
                        break;
                    case "disabled":
                        r ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        o = f.is(":data(draggable)");
                        o && !r && f.draggable("destroy");
                        !o && r && u._makeDraggable();
                        break;
                    case "position":
                        u._position(r);
                        break;
                    case "resizable":
                        e = f.is(":data(resizable)");
                        e && !r && f.resizable("destroy");
                        e && typeof r == "string" && f.resizable("option", "handles", r);
                        !e && r !== !1 && u._makeResizable(r);
                        break;
                    case "title":
                        n(".ui-dialog-title", u.uiDialogTitlebar).html("" + (r || "&#160;"))
                }
                n.Widget.prototype._setOption.apply(u, arguments)
            },
            _size: function() {
                var t = this.options,
                    i, r, f = this.uiDialog.is(":visible"),
                    u;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                });
                t.minWidth > t.width && (t.width = t.minWidth);
                i = this.uiDialog.css({
                    height: "auto",
                    width: t.width
                }).height();
                r = Math.max(0, t.minHeight - i);
                t.height === "auto" ? n.support.minHeight ? this.element.css({
                    minHeight: r,
                    height: "auto"
                }) : (this.uiDialog.show(), u = this.element.css("height", "auto").height(), f || this.uiDialog.hide(), this.element.height(Math.max(u, r))) : this.element.height(Math.max(t.height - i, 0));
                this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        });
        n.extend(n.ui.dialog, {
            version: "1.8.24",
            uuid: 0,
            maxZ: 0,
            getTitleId: function(n) {
                var t = n.attr("id");
                return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
            },
            overlay: function(t) {
                this.$el = n.ui.dialog.overlay.create(t)
            }
        });
        n.extend(n.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: n.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(n) {
                return n + ".dialog-overlay"
            }).join(" "),
            create: function(t) {
                this.instances.length === 0 && (setTimeout(function() {
                    n.ui.dialog.overlay.instances.length && n(document).bind(n.ui.dialog.overlay.events, function(t) {
                        if (n(t.target).zIndex() < n.ui.dialog.overlay.maxZ) return !1
                    })
                }, 1), n(document).bind("keydown.dialog-overlay", function(i) {
                    t.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (t.close(i), i.preventDefault())
                }), n(window).bind("resize.dialog-overlay", n.ui.dialog.overlay.resize));
                var i = (this.oldInstances.pop() || n("<div><\/div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                });
                return n.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
            },
            destroy: function(t) {
                var r = n.inArray(t, this.instances),
                    i;
                r != -1 && this.oldInstances.push(this.instances.splice(r, 1)[0]);
                this.instances.length === 0 && n([document, window]).unbind(".dialog-overlay");
                t.remove();
                i = 0;
                n.each(this.instances, function() {
                    i = Math.max(i, this.css("z-index"))
                });
                this.maxZ = i
            },
            height: function() {
                var t, i;
                return n.browser.msie && n.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < i ? n(window).height() + "px" : t + "px") : n(document).height() + "px"
            },
            width: function() {
                var t, i;
                return n.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < i ? n(window).width() + "px" : t + "px") : n(document).width() + "px"
            },
            resize: function() {
                var t = n([]);
                n.each(n.ui.dialog.overlay.instances, function() {
                    t = t.add(this)
                });
                t.css({
                    width: 0,
                    height: 0
                }).css({
                    width: n.ui.dialog.overlay.width(),
                    height: n.ui.dialog.overlay.height()
                })
            }
        });
        n.extend(n.ui.dialog.overlay.prototype, {
            destroy: function() {
                n.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery),
    function(n) {
        n.ui = n.ui || {};
        var i = /left|center|right/,
            r = /top|center|bottom/,
            t = "center",
            u = {},
            f = n.fn.position,
            e = n.fn.offset;
        n.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = n.extend({}, e);
            var s = n(e.of),
                v = s[0],
                a = (e.collision || "flip").split(" "),
                h = e.offset ? e.offset.split(" ") : [0, 0],
                c, l, o;
            return v.nodeType === 9 ? (c = s.width(), l = s.height(), o = {
                top: 0,
                left: 0
            }) : v.setTimeout ? (c = s.width(), l = s.height(), o = {
                top: s.scrollTop(),
                left: s.scrollLeft()
            }) : v.preventDefault ? (e.at = "left top", c = l = 0, o = {
                top: e.of.pageY,
                left: e.of.pageX
            }) : (c = s.outerWidth(), l = s.outerHeight(), o = s.offset()), n.each(["my", "at"], function() {
                var n = (e[this] || "").split(" ");
                n.length === 1 && (n = i.test(n[0]) ? n.concat([t]) : r.test(n[0]) ? [t].concat(n) : [t, t]);
                n[0] = i.test(n[0]) ? n[0] : t;
                n[1] = r.test(n[1]) ? n[1] : t;
                e[this] = n
            }), a.length === 1 && (a[1] = a[0]), h[0] = parseInt(h[0], 10) || 0, h.length === 1 && (h[1] = h[0]), h[1] = parseInt(h[1], 10) || 0, e.at[0] === "right" ? o.left += c : e.at[0] === t && (o.left += c / 2), e.at[1] === "bottom" ? o.top += l : e.at[1] === t && (o.top += l / 2), o.left += h[0], o.top += h[1], this.each(function() {
                var r = n(this),
                    f = r.outerWidth(),
                    s = r.outerHeight(),
                    v = parseInt(n.curCSS(this, "marginLeft", !0)) || 0,
                    y = parseInt(n.curCSS(this, "marginTop", !0)) || 0,
                    w = f + v + (parseInt(n.curCSS(this, "marginRight", !0)) || 0),
                    b = s + y + (parseInt(n.curCSS(this, "marginBottom", !0)) || 0),
                    i = n.extend({}, o),
                    p;
                e.my[0] === "right" ? i.left -= f : e.my[0] === t && (i.left -= f / 2);
                e.my[1] === "bottom" ? i.top -= s : e.my[1] === t && (i.top -= s / 2);
                u.fractions || (i.left = Math.round(i.left), i.top = Math.round(i.top));
                p = {
                    left: i.left - v,
                    top: i.top - y
                };
                n.each(["left", "top"], function(t, r) {
                    n.ui.position[a[t]] && n.ui.position[a[t]][r](i, {
                        targetWidth: c,
                        targetHeight: l,
                        elemWidth: f,
                        elemHeight: s,
                        collisionPosition: p,
                        collisionWidth: w,
                        collisionHeight: b,
                        offset: h,
                        my: e.my,
                        at: e.at
                    })
                });
                n.fn.bgiframe && r.bgiframe();
                r.offset(n.extend(i, {
                    using: e.using
                }))
            })
        };
        n.ui.position = {
            fit: {
                left: function(t, i) {
                    var r = n(window),
                        u = i.collisionPosition.left + i.collisionWidth - r.width() - r.scrollLeft();
                    t.left = u > 0 ? t.left - u : Math.max(t.left - i.collisionPosition.left, t.left)
                },
                top: function(t, i) {
                    var r = n(window),
                        u = i.collisionPosition.top + i.collisionHeight - r.height() - r.scrollTop();
                    t.top = u > 0 ? t.top - u : Math.max(t.top - i.collisionPosition.top, t.top)
                }
            },
            flip: {
                left: function(i, r) {
                    if (r.at[0] !== t) {
                        var u = n(window),
                            s = r.collisionPosition.left + r.collisionWidth - u.width() - u.scrollLeft(),
                            f = r.my[0] === "left" ? -r.elemWidth : r.my[0] === "right" ? r.elemWidth : 0,
                            e = r.at[0] === "left" ? r.targetWidth : -r.targetWidth,
                            o = -2 * r.offset[0];
                        i.left += r.collisionPosition.left < 0 ? f + e + o : s > 0 ? f + e + o : 0
                    }
                },
                top: function(i, r) {
                    if (r.at[1] !== t) {
                        var u = n(window),
                            s = r.collisionPosition.top + r.collisionHeight - u.height() - u.scrollTop(),
                            f = r.my[1] === "top" ? -r.elemHeight : r.my[1] === "bottom" ? r.elemHeight : 0,
                            e = r.at[1] === "top" ? r.targetHeight : -r.targetHeight,
                            o = -2 * r.offset[1];
                        i.top += r.collisionPosition.top < 0 ? f + e + o : s > 0 ? f + e + o : 0
                    }
                }
            }
        };
        n.offset.setOffset || (n.offset.setOffset = function(t, i) {
            /static/.test(n.curCSS(t, "position")) && (t.style.position = "relative");
            var r = n(t),
                u = r.offset(),
                e = parseInt(n.curCSS(t, "top", !0), 10) || 0,
                o = parseInt(n.curCSS(t, "left", !0), 10) || 0,
                f = {
                    top: i.top - u.top + e,
                    left: i.left - u.left + o
                };
            "using" in i ? i.using.call(t, f) : r.css(f)
        }, n.fn.offset = function(t) {
            var i = this[0];
            return !i || !i.ownerDocument ? null : t ? n.isFunction(t) ? this.each(function(i) {
                n(this).offset(t.call(this, i, n(this).offset()))
            }) : this.each(function() {
                n.offset.setOffset(this, t)
            }) : e.call(this)
        });
        n.curCSS || (n.curCSS = n.css),
            function() {
                var i = document.getElementsByTagName("body")[0],
                    e = document.createElement("div"),
                    t, r, f, o, s, h;
                t = document.createElement(i ? "div" : "body");
                f = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                };
                i && n.extend(f, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (h in f) t.style[h] = f[h];
                t.appendChild(e);
                r = i || document.documentElement;
                r.insertBefore(t, r.firstChild);
                e.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
                o = n(e).offset(function(n, t) {
                    return t
                }).offset();
                t.innerHTML = "";
                r.removeChild(t);
                s = o.top + o.left + (i ? 2e3 : 0);
                u.fractions = s > 21 && s < 22
            }()
    }(jQuery),
    function(n, t) {
        n.widget("ui.progressbar", {
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function() {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                });
                this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
                this.oldValue = this._value();
                this._refreshValue()
            },
            destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.valueDiv.remove();
                n.Widget.prototype.destroy.apply(this, arguments)
            },
            value: function(n) {
                return n === t ? this._value() : (this._setOption("value", n), this)
            },
            _setOption: function(t, i) {
                t === "value" && (this.options.value = i, this._refreshValue(), this._value() === this.options.max && this._trigger("complete"));
                n.Widget.prototype._setOption.apply(this, arguments)
            },
            _value: function() {
                var n = this.options.value;
                return typeof n != "number" && (n = 0), Math.min(this.options.max, Math.max(this.min, n))
            },
            _percentage: function() {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function() {
                var n = this.value(),
                    t = this._percentage();
                this.oldValue !== n && (this.oldValue = n, this._trigger("change"));
                this.valueDiv.toggle(n > this.min).toggleClass("ui-corner-right", n === this.options.max).width(t.toFixed(0) + "%");
                this.element.attr("aria-valuenow", n)
            }
        });
        n.extend(n.ui.progressbar, {
            version: "1.8.24"
        })
    }(jQuery),
    function(n) {
        var t = 5;
        n.widget("ui.slider", n.ui.mouse, {
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var i = this,
                    r = this.options,
                    f = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    o = r.values && r.values.length || 1,
                    e = [],
                    u;
                for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (r.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = n([]), r.range && (r.range === !0 && (r.values || (r.values = [this._valueMin(), this._valueMin()]), r.values.length && r.values.length !== 2 && (r.values = [r.values[0], r.values[0]])), this.range = n("<div><\/div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : ""))), u = f.length; u < o; u += 1) e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");
                this.handles = f.add(n(e.join("")).appendTo(i.element));
                this.handle = this.handles.eq(0);
                this.handles.add(this.range).filter("a").click(function(n) {
                    n.preventDefault()
                }).hover(function() {
                    r.disabled || n(this).addClass("ui-state-hover")
                }, function() {
                    n(this).removeClass("ui-state-hover")
                }).focus(function() {
                    r.disabled ? n(this).blur() : (n(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), n(this).addClass("ui-state-focus"))
                }).blur(function() {
                    n(this).removeClass("ui-state-focus")
                });
                this.handles.each(function(t) {
                    n(this).data("index.ui-slider-handle", t)
                });
                this.handles.keydown(function(r) {
                    var e = n(this).data("index.ui-slider-handle"),
                        s, f, u, o;
                    if (!i.options.disabled) {
                        switch (r.keyCode) {
                            case n.ui.keyCode.HOME:
                            case n.ui.keyCode.END:
                            case n.ui.keyCode.PAGE_UP:
                            case n.ui.keyCode.PAGE_DOWN:
                            case n.ui.keyCode.UP:
                            case n.ui.keyCode.RIGHT:
                            case n.ui.keyCode.DOWN:
                            case n.ui.keyCode.LEFT:
                                if (r.preventDefault(), !i._keySliding && (i._keySliding = !0, n(this).addClass("ui-state-active"), s = i._start(r, e), s === !1)) return
                        }
                        o = i.options.step;
                        f = i.options.values && i.options.values.length ? u = i.values(e) : u = i.value();
                        switch (r.keyCode) {
                            case n.ui.keyCode.HOME:
                                u = i._valueMin();
                                break;
                            case n.ui.keyCode.END:
                                u = i._valueMax();
                                break;
                            case n.ui.keyCode.PAGE_UP:
                                u = i._trimAlignValue(f + (i._valueMax() - i._valueMin()) / t);
                                break;
                            case n.ui.keyCode.PAGE_DOWN:
                                u = i._trimAlignValue(f - (i._valueMax() - i._valueMin()) / t);
                                break;
                            case n.ui.keyCode.UP:
                            case n.ui.keyCode.RIGHT:
                                if (f === i._valueMax()) return;
                                u = i._trimAlignValue(f + o);
                                break;
                            case n.ui.keyCode.DOWN:
                            case n.ui.keyCode.LEFT:
                                if (f === i._valueMin()) return;
                                u = i._trimAlignValue(f - o)
                        }
                        i._slide(r, e, u)
                    }
                }).keyup(function(t) {
                    var r = n(this).data("index.ui-slider-handle");
                    i._keySliding && (i._keySliding = !1, i._stop(t, r), i._change(t, r), n(this).removeClass("ui-state-active"))
                });
                this._refreshValue();
                this._animateOff = !1
            },
            destroy: function() {
                return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
            },
            _mouseCapture: function(t) {
                var u = this.options,
                    h, f, e, i, o, r, c, s, l;
                return u.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), h = {
                    x: t.pageX,
                    y: t.pageY
                }, f = this._normValueFromMouse(h), e = this._valueMax() - this._valueMin() + 1, o = this, this.handles.each(function(t) {
                    var u = Math.abs(f - o.values(t));
                    e > u && (e = u, i = n(this), r = t)
                }), u.range === !0 && this.values(1) === u.min && (r += 1, i = n(this.handles[r])), c = this._start(t, r), c === !1 ? !1 : (this._mouseSliding = !0, o._handleIndex = r, i.addClass("ui-state-active").focus(), s = i.offset(), l = !n(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - s.left - i.width() / 2,
                    top: t.pageY - s.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, f), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(n) {
                var t = {
                        x: n.pageX,
                        y: n.pageY
                    },
                    i = this._normValueFromMouse(t);
                return this._slide(n, this._handleIndex, i), !1
            },
            _mouseStop: function(n) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(n) {
                var i, r, t, u, f;
                return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
            },
            _start: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
            },
            _slide: function(n, t, i) {
                var r, f, u;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i,
                    values: f
                }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i
                }), u !== !1 && this.value(i))
            },
            _stop: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                this._trigger("stop", n, i)
            },
            _change: function(n, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                    this._trigger("change", n, i)
                }
            },
            value: function(n) {
                if (arguments.length) {
                    this.options.value = this._trimAlignValue(n);
                    this._refreshValue();
                    this._change(null, 0);
                    return
                }
                return this._value()
            },
            values: function(t, i) {
                var u, f, r;
                if (arguments.length > 1) {
                    this.options.values[t] = this._trimAlignValue(i);
                    this._refreshValue();
                    this._change(null, t);
                    return
                }
                if (!arguments.length) return this._values();
                if (!n.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                this._refreshValue()
            },
            _setOption: function(t, i) {
                var r, u = 0;
                n.isArray(this.options.values) && (u = this.options.values.length);
                n.Widget.prototype._setOption.apply(this, arguments);
                switch (t) {
                    case "disabled":
                        i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation();
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                        this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._change(null, 0);
                        this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                        this._animateOff = !1
                }
            },
            _value: function() {
                var n = this.options.value;
                return n = this._trimAlignValue(n), n
            },
            _values: function(n) {
                var r, t, i;
                if (arguments.length) return r = this.options.values[n], r = this._trimAlignValue(r), r;
                for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                return t
            },
            _trimAlignValue: function(n) {
                if (n <= this._valueMin()) return this._valueMin();
                if (n >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (n - this._valueMin()) % t,
                    r = n - i;
                return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var f = this.options.range,
                    r = this.options,
                    i = this,
                    u = this._animateOff ? !1 : r.animate,
                    t, e = {},
                    s, c, o, h;
                this.options.values && this.options.values.length ? this.handles.each(function(f) {
                    t = (i.values(f) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100;
                    e[i.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                    n(this).stop(1, 1)[u ? "animate" : "css"](e, r.animate);
                    i.options.range === !0 && (i.orientation === "horizontal" ? (f === 0 && i.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: t + "%"
                    }, r.animate), f === 1 && i.range[u ? "animate" : "css"]({
                        width: t - s + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (f === 0 && i.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: t + "%"
                    }, r.animate), f === 1 && i.range[u ? "animate" : "css"]({
                        height: t - s + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })));
                    s = t
                }) : (c = this.value(), o = this._valueMin(), h = this._valueMax(), t = h !== o ? (c - o) / (h - o) * 100 : 0, e[i.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](e, r.animate), f === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: t + "%"
                }, r.animate), f === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }), f === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: t + "%"
                }, r.animate), f === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))
            }
        });
        n.extend(n.ui.slider, {
            version: "1.8.24"
        })
    }(jQuery),
    function(n, t) {
        function i() {
            return ++u
        }

        function r() {
            return ++f
        }
        var u = 0,
            f = 0;
        n.widget("ui.tabs", {
            options: {
                add: null,
                ajaxOptions: null,
                cache: !1,
                cookie: null,
                collapsible: !1,
                disable: null,
                disabled: [],
                enable: null,
                event: "click",
                fx: null,
                idPrefix: "ui-tabs-",
                load: null,
                panelTemplate: "<div><\/div>",
                remove: null,
                select: null,
                show: null,
                spinner: "<em>Loading&#8230;<\/em>",
                tabTemplate: "<li><a href='#{href}'><span>#{label}<\/span><\/a><\/li>"
            },
            _create: function() {
                this._tabify(!0)
            },
            _setOption: function(n, t) {
                if (n == "selected") {
                    if (this.options.collapsible && t == this.options.selected) return;
                    this.select(t)
                } else this.options[n] = t, this._tabify()
            },
            _tabId: function(n) {
                return n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + i()
            },
            _sanitizeSelector: function(n) {
                return n.replace(/:/g, "\\:")
            },
            _cookie: function() {
                var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + r());
                return n.cookie.apply(null, [t].concat(n.makeArray(arguments)))
            },
            _ui: function(n, t) {
                return {
                    tab: n,
                    panel: t,
                    index: this.anchors.index(n)
                }
            },
            _cleanup: function() {
                this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                    var t = n(this);
                    t.html(t.data("label.tabs")).removeData("label.tabs")
                })
            },
            _tabify: function(i) {
                function v(t, i) {
                    t.css("display", "");
                    !n.support.opacity && i.opacity && t[0].style.removeAttribute("filter")
                }
                var u = this,
                    r = this.options,
                    y = /^#.+/,
                    o, s, h, c, f, e, l, a;
                for (this.list = this.element.find("ol,ul").eq(0), this.lis = n(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
                        return n("a", this)[0]
                    }), this.panels = n([]), this.anchors.each(function(t, i) {
                        var f = n(i).attr("href"),
                            s = f.split("#")[0],
                            h, o, e;
                        s && (s === location.toString().split("#")[0] || (h = n("base")[0]) && s === h.href) && (f = i.hash, i.href = f);
                        y.test(f) ? u.panels = u.panels.add(u.element.find(u._sanitizeSelector(f))) : f && f !== "#" ? (n.data(i, "href.tabs", f), n.data(i, "load.tabs", f.replace(/#.*$/, "")), o = u._tabId(i), i.href = "#" + o, e = u.element.find("#" + o), e.length || (e = n(r.panelTemplate).attr("id", o).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(u.panels[t - 1] || u.list), e.data("destroy.tabs", !0)), u.panels = u.panels.add(e)) : r.disabled.push(t)
                    }), i ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), r.selected === t ? (location.hash && this.anchors.each(function(n, t) {
                        if (t.hash == location.hash) return r.selected = n, !1
                    }), typeof r.selected != "number" && r.cookie && (r.selected = parseInt(u._cookie(), 10)), typeof r.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), r.selected = r.selected || (this.lis.length ? 0 : -1)) : r.selected === null && (r.selected = -1), r.selected = r.selected >= 0 && this.anchors[r.selected] || r.selected < 0 ? r.selected : 0, r.disabled = n.unique(r.disabled.concat(n.map(this.lis.filter(".ui-state-disabled"), function(n) {
                        return u.lis.index(n)
                    }))).sort(), n.inArray(r.selected, r.disabled) != -1 && r.disabled.splice(n.inArray(r.selected, r.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), r.selected >= 0 && this.anchors.length && (u.element.find(u._sanitizeSelector(u.anchors[r.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(r.selected).addClass("ui-tabs-selected ui-state-active"), u.element.queue("tabs", function() {
                        u._trigger("show", null, u._ui(u.anchors[r.selected], u.element.find(u._sanitizeSelector(u.anchors[r.selected].hash))[0]))
                    }), this.load(r.selected)), n(window).bind("unload", function() {
                        u.lis.add(u.anchors).unbind(".tabs");
                        u.lis = u.anchors = u.panels = null
                    })) : r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[r.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), r.cookie && this._cookie(r.selected, r.cookie), o = 0; s = this.lis[o]; o++) n(s)[n.inArray(o, r.disabled) != -1 && !n(s).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
                r.cache === !1 && this.anchors.removeData("cache.tabs");
                this.lis.add(this.anchors).unbind(".tabs");
                r.event !== "mouseover" && (h = function(n, t) {
                    t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + n)
                }, c = function(n, t) {
                    t.removeClass("ui-state-" + n)
                }, this.lis.bind("mouseover.tabs", function() {
                    h("hover", n(this))
                }), this.lis.bind("mouseout.tabs", function() {
                    c("hover", n(this))
                }), this.anchors.bind("focus.tabs", function() {
                    h("focus", n(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function() {
                    c("focus", n(this).closest("li"))
                }));
                r.fx && (n.isArray(r.fx) ? (f = r.fx[0], e = r.fx[1]) : f = e = r.fx);
                l = e ? function(t, i) {
                    n(t).closest("li").addClass("ui-tabs-selected ui-state-active");
                    i.hide().removeClass("ui-tabs-hide").animate(e, e.duration || "normal", function() {
                        v(i, e);
                        u._trigger("show", null, u._ui(t, i[0]))
                    })
                } : function(t, i) {
                    n(t).closest("li").addClass("ui-tabs-selected ui-state-active");
                    i.removeClass("ui-tabs-hide");
                    u._trigger("show", null, u._ui(t, i[0]))
                };
                a = f ? function(n, t) {
                    t.animate(f, f.duration || "normal", function() {
                        u.lis.removeClass("ui-tabs-selected ui-state-active");
                        t.addClass("ui-tabs-hide");
                        v(t, f);
                        u.element.dequeue("tabs")
                    })
                } : function(n, t) {
                    u.lis.removeClass("ui-tabs-selected ui-state-active");
                    t.addClass("ui-tabs-hide");
                    u.element.dequeue("tabs")
                };
                this.anchors.bind(r.event + ".tabs", function() {
                    var t = this,
                        i = n(t).closest("li"),
                        f = u.panels.filter(":not(.ui-tabs-hide)"),
                        e = u.element.find(u._sanitizeSelector(t.hash));
                    if (i.hasClass("ui-tabs-selected") && !r.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || u.panels.filter(":animated").length || u._trigger("select", null, u._ui(this, e[0])) === !1) return this.blur(), !1;
                    if (r.selected = u.anchors.index(this), u.abort(), r.collapsible) {
                        if (i.hasClass("ui-tabs-selected")) return r.selected = -1, r.cookie && u._cookie(r.selected, r.cookie), u.element.queue("tabs", function() {
                            a(t, f)
                        }).dequeue("tabs"), this.blur(), !1;
                        if (!f.length) return r.cookie && u._cookie(r.selected, r.cookie), u.element.queue("tabs", function() {
                            l(t, e)
                        }), u.load(u.anchors.index(this)), this.blur(), !1
                    }
                    if (r.cookie && u._cookie(r.selected, r.cookie), e.length) f.length && u.element.queue("tabs", function() {
                        a(t, f)
                    }), u.element.queue("tabs", function() {
                        l(t, e)
                    }), u.load(u.anchors.index(this));
                    else throw "jQuery UI Tabs: Mismatching fragment identifier.";
                    n.browser.msie && this.blur()
                });
                this.anchors.bind("click.tabs", function() {
                    return !1
                })
            },
            _getIndex: function(n) {
                return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
            },
            destroy: function() {
                var t = this.options;
                return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
                    var t = n.data(this, "href.tabs"),
                        i;
                    t && (this.href = t);
                    i = n(this).unbind(".tabs");
                    n.each(["href", "load", "cache"], function(n, t) {
                        i.removeData(t + ".tabs")
                    })
                }), this.lis.unbind(".tabs").add(this.panels).each(function() {
                    n.data(this, "destroy.tabs") ? n(this).remove() : n(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
                }), t.cookie && this._cookie(null, t.cookie), this
            },
            add: function(i, r, u) {
                var f;
                u === t && (u = this.anchors.length);
                var e = this,
                    o = this.options,
                    s = n(o.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, r)),
                    h = i.indexOf("#") ? this._tabId(n("a", s)[0]) : i.replace("#", "");
                return s.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0), f = e.element.find("#" + h), f.length || (f = n(o.panelTemplate).attr("id", h).data("destroy.tabs", !0)), f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), u >= this.lis.length ? (s.appendTo(this.list), f.appendTo(this.list[0].parentNode)) : (s.insertBefore(this.lis[u]), f.insertBefore(this.panels[u])), o.disabled = n.map(o.disabled, function(n) {
                    return n >= u ? ++n : n
                }), this._tabify(), this.anchors.length == 1 && (o.selected = 0, s.addClass("ui-tabs-selected ui-state-active"), f.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
                    e._trigger("show", null, e._ui(e.anchors[0], e.panels[0]))
                }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[u], this.panels[u])), this
            },
            remove: function(t) {
                t = this._getIndex(t);
                var i = this.options,
                    r = this.lis.eq(t).remove(),
                    u = this.panels.eq(t).remove();
                return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), i.disabled = n.map(n.grep(i.disabled, function(n) {
                    return n != t
                }), function(n) {
                    return n >= t ? --n : n
                }), this._tabify(), this._trigger("remove", null, this._ui(r.find("a")[0], u[0])), this
            },
            enable: function(t) {
                t = this._getIndex(t);
                var i = this.options;
                if (n.inArray(t, i.disabled) != -1) return this.lis.eq(t).removeClass("ui-state-disabled"), i.disabled = n.grep(i.disabled, function(n) {
                    return n != t
                }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
            },
            disable: function(n) {
                n = this._getIndex(n);
                var i = this,
                    t = this.options;
                return n != t.selected && (this.lis.eq(n).addClass("ui-state-disabled"), t.disabled.push(n), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[n], this.panels[n]))), this
            },
            select: function(n) {
                if (n = this._getIndex(n), n == -1)
                    if (this.options.collapsible && this.options.selected != -1) n = this.options.selected;
                    else return this;
                return this.anchors.eq(n).trigger(this.options.event + ".tabs"), this
            },
            load: function(t) {
                var f;
                t = this._getIndex(t);
                var i = this,
                    r = this.options,
                    u = this.anchors.eq(t)[0],
                    e = n.data(u, "load.tabs");
                if (this.abort(), !e || this.element.queue("tabs").length !== 0 && n.data(u, "cache.tabs")) {
                    this.element.dequeue("tabs");
                    return
                }
                return this.lis.eq(t).addClass("ui-state-processing"), r.spinner && (f = n("span", u), f.data("label.tabs", f.html()).html(r.spinner)), this.xhr = n.ajax(n.extend({}, r.ajaxOptions, {
                    url: e,
                    success: function(f, e) {
                        i.element.find(i._sanitizeSelector(u.hash)).html(f);
                        i._cleanup();
                        r.cache && n.data(u, "cache.tabs", !0);
                        i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                        try {
                            r.ajaxOptions.success(f, e)
                        } catch (o) {}
                    },
                    error: function(n, f) {
                        i._cleanup();
                        i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                        try {
                            r.ajaxOptions.error(n, f, t, u)
                        } catch (g) {}
                    }
                })), i.element.dequeue("tabs"), this
            },
            abort: function() {
                return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
            },
            url: function(n, t) {
                return this.anchors.eq(n).removeData("cache.tabs").data("load.tabs", t), this
            },
            length: function() {
                return this.anchors.length
            }
        });
        n.extend(n.ui.tabs, {
            version: "1.8.24"
        });
        n.extend(n.ui.tabs.prototype, {
            rotation: null,
            rotate: function(n, t) {
                var i = this,
                    u = this.options,
                    r = i._rotate || (i._rotate = function(t) {
                        clearTimeout(i.rotation);
                        i.rotation = setTimeout(function() {
                            var n = u.selected;
                            i.select(++n < i.anchors.length ? n : 0)
                        }, n);
                        t && t.stopPropagation()
                    }),
                    f = i._unrotate || (i._unrotate = t ? function() {
                        r()
                    } : function(n) {
                        n.clientX && i.rotate(null)
                    });
                return n ? (this.element.bind("tabsshow", r), this.anchors.bind(u.event + ".tabs", f), r()) : (clearTimeout(i.rotation), this.element.unbind("tabsshow", r), this.anchors.unbind(u.event + ".tabs", f), delete this._rotate, delete this._unrotate), this
            }
        })
    }(jQuery),
    function() {
        "use strict";

        function n(n) {
            function s(s, h) {
                var rt, ut, p = s == window,
                    l = h && h.message !== undefined ? h.message : undefined,
                    g, k, d, tt, nt, w, b, it, ft, et, at;
                if (h = n.extend({}, n.blockUI.defaults, h || {}), !h.ignoreIfBlocked || !n(s).data("blockUI.isBlocked")) {
                    if (h.overlayCSS = n.extend({}, n.blockUI.defaults.overlayCSS, h.overlayCSS || {}), rt = n.extend({}, n.blockUI.defaults.css, h.css || {}), h.onOverlayClick && (h.overlayCSS.cursor = "pointer"), ut = n.extend({}, n.blockUI.defaults.themedCSS, h.themedCSS || {}), l = l === undefined ? h.message : l, p && t && e(window, {
                            fadeOut: 0
                        }), l && typeof l != "string" && (l.parentNode || l.jquery) && (g = l.jquery ? l[0] : l, k = {}, n(s).data("blockUI.history", k), k.el = g, k.parent = g.parentNode, k.display = g.style.display, k.position = g.style.position, k.parent && k.parent.removeChild(g)), n(s).data("blockUI.onUnblock", h.onUnblock), d = h.baseZ, tt = f || h.forceIframe ? n('<iframe class="blockUI" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + h.iframeSrc + '"><\/iframe>') : n('<div class="blockUI" style="display:none"><\/div>'), nt = h.theme ? n('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + d++ + ';display:none"><\/div>') : n('<div class="blockUI blockOverlay" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"><\/div>'), h.theme && p ? (b = '<div class="blockUI ' + h.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:fixed">', h.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (h.title || "&nbsp;") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : h.theme ? (b = '<div class="blockUI ' + h.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:absolute">', h.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (h.title || "&nbsp;") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : b = p ? '<div class="blockUI ' + h.blockMsgClass + ' blockPage" style="z-index:' + (d + 10) + ';display:none;position:fixed"><\/div>' : '<div class="blockUI ' + h.blockMsgClass + ' blockElement" style="z-index:' + (d + 10) + ';display:none;position:absolute"><\/div>', w = n(b), l && (h.theme ? (w.css(ut), w.addClass("ui-widget-content")) : w.css(rt)), h.theme || nt.css(h.overlayCSS), nt.css("position", p ? "fixed" : "absolute"), (f || h.forceIframe) && tt.css("opacity", 0), it = [tt, nt, w], ft = p ? n("body") : n(s), n.each(it, function() {
                            this.appendTo(ft)
                        }), h.theme && h.draggable && n.fn.draggable && w.draggable({
                            handle: ".ui-dialog-titlebar",
                            cancel: "li"
                        }), et = v && (!n.support.boxModel || n("object,embed", p ? null : s).length > 0), o || et) {
                        if (p && h.allowBodyStretch && n.support.boxModel && n("html,body").css("height", "100%"), (o || !n.support.boxModel) && !p) var ot = r(s, "borderTopWidth"),
                            st = r(s, "borderLeftWidth"),
                            ht = ot ? "(0 - " + ot + ")" : 0,
                            ct = st ? "(0 - " + st + ")" : 0;
                        n.each(it, function(n, t) {
                            var i = t[0].style,
                                r, u;
                            i.position = "absolute";
                            n < 2 ? (p ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + h.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), p ? i.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), ct && i.setExpression("left", ct), ht && i.setExpression("top", ht)) : h.centerY ? (p && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0) : !h.centerY && p && (r = h.css && h.css.top ? parseInt(h.css.top, 10) : 0, u = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"', i.setExpression("top", u))
                        })
                    }
                    if (l && (h.theme ? w.find(".ui-widget-content").append(l) : w.append(l), (l.jquery || l.nodeType) && n(l).show()), (f || h.forceIframe) && h.showOverlay && tt.show(), h.fadeIn) {
                        var lt = h.onBlock ? h.onBlock : u,
                            vt = h.showOverlay && !l ? lt : u,
                            yt = l ? lt : u;
                        h.showOverlay && nt._fadeIn(h.fadeIn, vt);
                        l && w._fadeIn(h.fadeIn, yt)
                    } else h.showOverlay && nt.show(), l && w.show(), h.onBlock && h.onBlock();
                    c(1, s, h);
                    p ? (t = w[0], i = n(":input:enabled:visible", t), h.focusInput && setTimeout(a, 20)) : y(w[0], h.centerX, h.centerY);
                    h.timeout && (at = setTimeout(function() {
                        p ? n.unblockUI(h) : n(s).unblock(h)
                    }, h.timeout), n(s).data("blockUI.timeout", at))
                }
            }

            function e(r, u) {
                var o = r == window,
                    e = n(r),
                    s = e.data("blockUI.history"),
                    l = e.data("blockUI.timeout"),
                    f;
                l && (clearTimeout(l), e.removeData("blockUI.timeout"));
                u = n.extend({}, n.blockUI.defaults, u || {});
                c(0, r, u);
                u.onUnblock === null && (u.onUnblock = e.data("blockUI.onUnblock"), e.removeData("blockUI.onUnblock"));
                f = o ? n("body").children().filter(".blockUI").add("body > .blockUI") : e.find(">.blockUI");
                u.cursorReset && (f.length > 1 && (f[1].style.cursor = u.cursorReset), f.length > 2 && (f[2].style.cursor = u.cursorReset));
                o && (t = i = null);
                u.fadeOut ? (f.fadeOut(u.fadeOut), setTimeout(function() {
                    h(f, s, u, r)
                }, u.fadeOut)) : h(f, s, u, r)
            }

            function h(t, i, r, u) {
                var e = n(u);
                if (t.each(function() {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.parent && i.parent.appendChild(i.el), e.removeData("blockUI.history")), e.data("blockUI.static") && e.css("position", "static"), typeof r.onUnblock == "function") r.onUnblock(u, r);
                var f = n(document.body),
                    o = f.width(),
                    s = f[0].style.width;
                f.width(o - 1).width(o);
                f[0].style.width = s
            }

            function c(i, r, u) {
                var e = r == window,
                    o = n(r),
                    f;
                (i || (!e || t) && (e || o.data("blockUI.isBlocked"))) && (o.data("blockUI.isBlocked", i), u.bindEvents && (!i || u.showOverlay)) && (f = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", i ? n(document).bind(f, u, l) : n(document).unbind(f, l))
            }

            function l(r) {
                var u, f;
                if (r.keyCode && r.keyCode == 9 && t && r.data.constrainTabKey) {
                    var e = i,
                        s = !r.shiftKey && r.target === e[e.length - 1],
                        o = r.shiftKey && r.target === e[0];
                    if (s || o) return setTimeout(function() {
                        a(o)
                    }, 10), !1
                }
                return (u = r.data, f = n(r.target), f.hasClass("blockOverlay") && u.onOverlayClick && u.onOverlayClick(), f.parents("div." + u.blockMsgClass).length > 0) ? !0 : f.parents().children().filter("div.blockUI").length === 0
            }

            function a(n) {
                if (i) {
                    var t = i[n === !0 ? i.length - 1 : 0];
                    t && t.focus()
                }
            }

            function y(n, t, i) {
                var u = n.parentNode,
                    f = n.style,
                    e = (u.offsetWidth - n.offsetWidth) / 2 - r(u, "borderLeftWidth"),
                    o = (u.offsetHeight - n.offsetHeight) / 2 - r(u, "borderTopWidth");
                t && (f.left = e > 0 ? e + "px" : "0");
                i && (f.top = o > 0 ? o + "px" : "0")
            }

            function r(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }
            var t, i;
            n.fn._fadeIn = n.fn.fadeIn;
            var u = n.noop || function() {},
                f = /MSIE/.test(navigator.userAgent),
                o = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
                p = document.documentMode || 0,
                v = n.isFunction(document.createElement("div").style.setExpression);
            n.blockUI = function(n) {
                s(window, n)
            };
            n.unblockUI = function(n) {
                    e(window, n)
                },
                function() {
                    var i = {
                            getInstance: function(i) {
                                var r = n("#" + t.dockId);
                                return (r.length < 1 || i === !0) && (r = n(t.dockTemplate).attr("id", t.dockId).css(t.dockCss).addClass(t.dockClass), t.defaultStylesheet && n("head").appendTo('<link rel="stylesheet" type="text/css" href="' + t.defaultStylesheet + '" />'), n(t.dockContainerSelector).append(r)), r
                            },
                            notify: function(i, r, u, f) {
                                var s = this.getInstance(),
                                    e, o;
                                f && (s.css(t.dockAlertCss), s.addClass("notification-area"));
                                e = f ? n(t.alertTemplate).hide().css(t.alertCss).addClass(t.noticeClass) : n(t.noticeTemplate).hide().css(t.noticeCss).addClass(t.noticeClass);
                                o = f ? "alert" : "panel";
                                u || (u = "primary");
                                switch (u) {
                                    case "info":
                                        e.addClass(o + "-info");
                                        break;
                                    case "success":
                                        e.addClass(o + "-success");
                                        break;
                                    case "warning":
                                        e.addClass(o + "-warning");
                                        break;
                                    case "danger":
                                        e.addClass(o + "-danger");
                                        break;
                                    default:
                                        e.addClass(o + "-info")
                                }
                                n(".title", e).css(t.noticeTitleCss).html(i);
                                n(".close", e).click(function(t) {
                                    t.preventDefault();
                                    f ? n(this).closest(".alert").remove() : n(this).closest(".notice").remove()
                                });
                                n(".message", e).html(r);
                                f ? (n("#" + t.dockId + " div").hasClass("container") == !0 && t.noticeRemove(e, function() {
                                    e.remove()
                                }), s.append(t.alertContainer), n("#" + t.dockId + " .container").append(t.noticeDisplay(e))) : s.append(t.noticeDisplay(e));
                                t.displayTimeout > 0 && t.doNotClose.indexOf(u) < 0 && setTimeout(function() {
                                    t.noticeRemove(e, function() {
                                        e.remove()
                                    })
                                }, t.displayTimeout)
                            },
                            r: function(n, t, i) {
                                while (t.test(n)) n = n.replace(t, i);
                                return n
                            }
                        },
                        t = {
                            dockId: "jqueryGrowlDock",
                            dockClass: "growl",
                            dockTemplate: "<div><\/div>",
                            dockContainerSelector: "body",
                            dockCss: {
                                position: "fixed",
                                top: "10px",
                                right: "10px",
                                width: "200px",
                                zIndex: 5e4
                            },
                            dockAlertCss: {
                                textAlign: "left",
                                position: "fixed",
                                top: "70px",
                                left: "0",
                                zIndex: "9999",
                                width: "100%"
                            },
                            alertContainer: '<div class="container"><\/div>',
                            alertTemplate: '<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;<\/button><span class="message">%message%<\/span><\/div>',
                            alertCss: {},
                            noticeTemplate: '<div class="notice panel"><div class="panel-heading "><h3><a class="title"><\/a><button type="button" class="close">&times;<\/button><\/h3><\/div><div class="message panel-body">%message%<\/div><\/div>',
                            noticeCss: {},
                            noticeTitleCss: {
                                color: "#fff",
                                textDecoration: "none"
                            },
                            noticeDisplay: function(n) {
                                return n.fadeIn(t.noticeFadeTimeout)
                            },
                            noticeRemove: function(n, i) {
                                return n.animate({
                                    opacity: "0",
                                    height: "0px"
                                }, {
                                    duration: t.noticeFadeTimeout,
                                    complete: i
                                })
                            },
                            doNotClose: ["danger", ],
                            noticeFadeTimeout: "slow",
                            displayTimeout: 3500,
                            defaultStylesheet: null,
                            noticeElement: function(t) {
                                this.noticeTemplate = n(t)
                            }
                        };
                    n.growlUI = function(r, u, f) {
                        if (typeof f == "object") {
                            "settings" in f && (t = n.extend(t, f.settings));
                            var e = "primary",
                                o = !0;
                            "title" in f && (r = f.title);
                            "message" in f && (u = f.message);
                            "priority" in f && (e = f.priority);
                            "isalert" in f && (o = f.isalert);
                            u != null && i.notify(r, u, e, o)
                        } else u != null && i.notify(r, u, "danger", !0)
                    }
                }();
            n.fn.block = function(t) {
                var i = n.extend({}, n.blockUI.defaults, t || {});
                return this.each(function() {
                    var t = n(this);
                    i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                        fadeOut: 0
                    })
                }), this.each(function() {
                    n.css(this, "position") == "static" && (this.style.position = "relative", n(this).data("blockUI.static", !0));
                    this.style.zoom = 1;
                    s(this, t)
                })
            };
            n.fn.unblock = function(n) {
                return this.each(function() {
                    e(this, n)
                })
            };
            n.blockUI.version = 2.57;
            n.blockUI.defaults = {
                message: "<h1>Please wait...<\/h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: {
                    padding: 0,
                    margin: 0,
                    width: "30%",
                    top: "40%",
                    left: "35%",
                    textAlign: "center",
                    color: "#000",
                    border: "3px solid #aaa",
                    backgroundColor: "#fff",
                    cursor: "wait"
                },
                themedCSS: {
                    width: "30%",
                    top: "40%",
                    left: "35%"
                },
                overlayCSS: {
                    backgroundColor: "#000",
                    opacity: .6,
                    cursor: "wait"
                },
                cursorReset: "default",
                growlCSS: {
                    "text-align": "left",
                    "background-color": "transperant",
                    position: "fixed",
                    top: "70px",
                    left: "0",
                    "z-index": "9999",
                    width: "100%"
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1e3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                onBlock: null,
                onUnblock: null,
                onOverlayClick: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1
            };
            t = null;
            i = []
        }
        typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
    }()