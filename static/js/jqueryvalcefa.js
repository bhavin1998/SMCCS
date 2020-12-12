function initDigitOnly(n) {
    $.inArray(n.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 || n.keyCode === 65 && (n.ctrlKey === !0 || n.metaKey === !0) || n.keyCode >= 35 && n.keyCode <= 40 || n.keyCode == 116 || n.keyCode == 116 && n.ctrlKey || (n.shiftKey || n.keyCode < 48 || n.keyCode > 57) && (n.keyCode < 96 || n.keyCode > 105) && n.preventDefault()
}
function allowOnlyDigits() {
    $("[onlydigit]").keydown(initDigitOnly);
    $("[onlydigit]").on("paste", function (n) {
        n.preventDefault()
    })
}
function ToJavaScriptDate(n) {
    var i = /Date\(([^)]+)\)/.exec(n), t = new Date(parseFloat(i[1]));
    return t.getMonth() + 1 + "/" + t.getDate() + "/" + t.getFullYear()
}
function replaceTag(n) {
    return tagsToReplace[n] || n
}
function preventDevelpoerTools() {
    if (window.location.href.indexOf("localhost") < 0 && window.location.href.indexOf("mmgy") < 0) {
        $(document).keydown(function (n) {
            return n.keyCode == 123 ? !1 : n.ctrlKey && n.shiftKey && n.keyCode == 73 || n.ctrlKey && n.keyCode == 85 ? !1 : void 0
        });
        $(document).on("contextmenu", function (n) {
            n.preventDefault()
        })
    }
}
var tagsToReplace, _validationDefaults, dateFormat;
(function (n) {
    function i(n, t) {
        for (var i = window, r = (n || "").split("."); i && r.length; )
            i = i[r.shift()];
        return typeof i == "function" ? i : (t.push(n), Function.constructor.apply(null, t))
    }
    function r(n) {
        return n === "GET" || n === "POST"
    }
    function e(n, t) {
        r(t) || n.setRequestHeader("X-HTTP-Method-Override", t)
    }
    function o(t, i, r) {
        var u;
        r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(), n(t.getAttribute("data-ajax-update")).each(function (t, r) {
            var f;
            switch (u) {
                case"BEFORE":
                    f = r.firstChild;
                    n("<div />").html(i).contents().each(function () {
                        r.insertBefore(this, f)
                    });
                    break;
                case"AFTER":
                    n("<div />").html(i).contents().each(function () {
                        r.appendChild(this)
                    });
                    break;
                default:
                    n(r).html(i)
            }
        }))
    }
    function u(t, u) {
        var s, h, f, c;
        (s = t.getAttribute("data-ajax-confirm"), !s || window.confirm(s)) && (h = n(t.getAttribute("data-ajax-loading")), c = t.getAttribute("data-ajax-loading-duration") || 0, n.extend(u, {type: t.getAttribute("data-ajax-method") || undefined, url: t.getAttribute("data-ajax-url") || undefined, beforeSend: function (n) {
                var r;
                return e(n, f), r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(this, arguments), r !== !1 && h.show(c), r
            }, complete: function () {
                h.hide(c);
                i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(this, arguments)
            }, success: function (n, r, u) {
                o(t, n, u.getResponseHeader("Content-Type") || "text/html");
                i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(this, arguments)
            }, error: i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"])}), u.data.push({name: "X-Requested-With", value: "XMLHttpRequest"}), f = u.type.toUpperCase(), r(f) || (u.type = "POST", u.data.push({name: "X-HTTP-Method-Override", value: f})), n.ajax(u))
    }
    function s(t) {
        var i = n(t).data(f);
        return!i || !i.validate || i.validate()
    }
    var t = "unobtrusiveAjaxClick", f = "unobtrusiveValidation";
    n(document).on("click", "a[data-ajax=true]", function (n) {
        n.preventDefault();
        u(this, {url: this.href, type: "GET", data: []})
    });
    n(document).on("click", "form[data-ajax=true] input[type=image]", function (i) {
        var r = i.target.name, u = n(i.target), f = u.parents("form")[0], e = u.offset();
        n(f).data(t, [{name: r + ".x", value: Math.round(i.pageX - e.left)}, {name: r + ".y", value: Math.round(i.pageY - e.top)}]);
        setTimeout(function () {
            n(f).removeData(t)
        }, 0)
    });
    n(document).on("click", "form[data-ajax=true] :submit", function (i) {
        var r = i.target.name, u = n(i.target).parents("form")[0];
        n(u).data(t, r ? [{name: r, value: i.target.value}] : []);
        setTimeout(function () {
            n(u).removeData(t)
        }, 0)
    });
    n(document).on("submit", "form[data-ajax=true]", function (i) {
        var r = n(this).data(t) || [];
        (i.preventDefault(), s(this)) && u(this, {url: this.action, type: this.method || "GET", data: r.concat(n(this).serializeArray())})
    })
})(jQuery), function (n) {
    n.extend(n.fn, {validate: function (t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return
            }
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0)
            }), this.submit(function (t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            if (n(this[0]).is("form"))
                return this.validate().form();
            var t = !0, i = n(this[0].form).validate();
            return this.each(function () {
                t &= i.element(this)
            }), t
        }, removeAttrs: function (t) {
            var i = {}, r = this;
            return n.each(t.split(/\s/), function (n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }), i
        }, rules: function (t, i) {
            var r = this[0], o, u, h;
            if (t) {
                var e = n.data(r.form, "validator").settings, s = e.rules, f = n.validator.staticRules(r);
                switch (t) {
                    case"add":
                        n.extend(f, n.validator.normalizeRule(i));
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case"remove":
                        return i ? (o = {}, n.each(i.split(/\s/), function (n, t) {
                            o[t] = f[t];
                            delete f[t]
                        }), o) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({required: h}, u)), u
        }});
    n.extend(n.expr[":"], {blank: function (t) {
            return!n.trim("" + t.value)
        }, filled: function (t) {
            return!!n.trim("" + t.value)
        }, unchecked: function (n) {
            return!n.checked
        }});
    n.validator = function (t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function (t, i) {
        return arguments.length === 1 ? function () {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function (n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), i)
        }), t)
    };
    n.extend(n.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: n([]), errorLabelContainer: n([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            }, onfocusout: function (n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            }, onkeyup: function (n, t) {
                (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastActive) && this.element(n)
            }, onclick: function (n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            }, highlight: function (t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            }, unhighlight: function (t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }}, setDefaults: function (t) {
            n.extend(n.validator.defaults, t)
        }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: n.validator.format("Please do not enter more than {0} characters."), minlength: n.validator.format("Please enter at least {0} characters."), rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."), range: n.validator.format("Please enter a value between {0} and {1}."), max: n.validator.format("Please enter a value less than or equal to {0}."), min: n.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function () {
                function i(t) {
                    var i = n.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var r, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                r = this.groups = {};
                n.each(this.settings.groups, function (t, i) {
                    n.each(i.split(/\s/), function (n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function (i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            }, element: function (t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            }, showErrors: function (t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t)
                        this.errorList.push({message: t[i], element: this.findByName(i)[0]});
                    this.successList = n.grep(this.successList, function (n) {
                        return!(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (n) {
                var t = 0;
                for (var i in n)
                    t++;
                return t
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return this.size() === 0
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {
                    }
            }, findLastActive: function () {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function (n) {
                    return n.element.name === t.name
                }).length === 1 && t
            }, elements: function () {
                var t = this, i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            }, clean: function (t) {
                return n(t)[0]
            }, errors: function () {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            }, reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            }, prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            }, elementValue: function (t) {
                var r = n(t).attr("type"), i = n(t).val();
                return r === "radio" || r === "checkbox" ? n('input[name="' + n(t).attr("name") + '"]:checked').val() : typeof i == "string" ? i.replace(/\r/g, "") : i
            }, check: function (t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var f = n(t).rules(), e = !1, s = this.elementValue(t), i;
                for (r in f) {
                    u = {method: r, parameters: f[r]};
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), i === "dependency-mismatch") {
                            e = !0;
                            continue
                        }
                        if (e = !1, i === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!i)
                            return this.formatAndAdd(t, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + u.method + "' method", o), o;
                    }
                }
                if (!e)
                    return this.objectLength(f) && this.successList.push(t), !0
            }, customMetaMessage: function (t, i) {
                if (n.metadata) {
                    var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
                    return r && r.messages && r.messages[i]
                }
            }, customDataMessage: function (t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            }, customMessage: function (n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            }, findDefined: function () {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined)
                        return arguments[n];
                return undefined
            }, defaultMessage: function (t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            }, formatAndAdd: function (t, i) {
                var r = this.defaultMessage(t, i.method), u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({message: r, element: t});
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            }, addWrapper: function (n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            }, defaultShowErrors: function () {
                for (var i, t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++)
                        this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return n(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({"for": this.idOrName(t), generated: !0}).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            }, errorsFor: function (t) {
                var i = this.idOrName(t);
                return this.errors().filter(function () {
                    return n(this).attr("for") === i
                })
            }, idOrName: function (n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            }, validationTargetFor: function (n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            }, checkable: function (n) {
                return/radio|checkbox/i.test(n.type)
            }, findByName: function (t) {
                return n(this.currentForm).find('[name="' + t + '"]')
            }, getLength: function (t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return n("option:selected", i).length;
                    case"input":
                        if (this.checkable(i))
                            return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            }, depend: function (n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            }, dependTypes: {boolean: function (n) {
                    return n
                }, string: function (t, i) {
                    return!!n(t, i.form).length
                }, "function": function (n, t) {
                    return n(t)
                }}, optional: function (t) {
                var i = this.elementValue(t);
                return!n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            }, startRequest: function (n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            }, stopRequest: function (t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {old: null, valid: !0, message: this.defaultMessage(t, "remote")})
            }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        }, classRules: function (t) {
            var i = {}, r = n(t).attr("class");
            return r && n.each(r.split(" "), function () {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        }, attributeRules: function (t) {
            var u = {}, f = n(t), r, i;
            for (r in n.validator.methods)
                r === "required" ? (i = f.get(0).getAttribute(r), i === "" && (i = !0), i = !!i) : i = f.attr(r), i ? u[r] = i : f[0].getAttribute("type") === r && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        }, metadataRules: function (t) {
            if (!n.metadata)
                return{};
            var i = n.data(t.form, "validator").settings.meta;
            return i ? n(t).metadata()[i] : n(t).metadata()
        }, staticRules: function (t) {
            var i = {}, r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        }, normalizeRules: function (t, i) {
            return n.each(t, function (r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case"string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case"function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function (r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength", "min", "max"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function () {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
        }, normalizeRule: function (t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function () {
                    i[this] = !0
                });
                t = i
            }
            return t
        }, addMethod: function (t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        }, methods: {required: function (t, i, r) {
                if (!this.depend(r, i))
                    return"dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            }, remote: function (t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {url: r} || r, this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {url: r, mode: "abort", port: "validate" + i.name, dataType: "json", data: e, success: function (r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || r === "true";
                        e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }}, r)), "pending")
            }, minlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            }, maxlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u <= r
            }, rangelength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            }, min: function (n, t, i) {
                return this.optional(t) || n >= i
            }, max: function (n, t, i) {
                return this.optional(t) || n <= i
            }, range: function (n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            }, email: function (n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            }, url: function (n, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            }, date: function (n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
            }, dateISO: function (n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            }, number: function (n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            }, digits: function (n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            }, creditcard: function (n, t) {
                var r, e;
                if (this.optional(t))
                    return"dependency-mismatch";
                if (/[^0-9 \-]+/.test(n))
                    return!1;
                var f = 0, i = 0, u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--)
                    e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return f % 10 == 0
            }, equalTo: function (t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    n(i).valid()
                }), t === u.val()
            }}});
    n.format = n.validator.format
}(jQuery), function (n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function (n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function (r) {
        var f = ("mode"in r ? r : n.ajaxSettings).mode, u = ("port"in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    })
}(jQuery), function (n) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || n.each({focus: "focusin", blur: "focusout"}, function (t, i) {
        function r(t) {
            return t = n.event.fix(t), t.type = i, n.event.handle.call(this, t)
        }
        n.event.special[i] = {setup: function () {
                this.addEventListener(t, r, !0)
            }, teardown: function () {
                this.removeEventListener(t, r, !0)
            }, handler: function (t) {
                var r = arguments;
                return r[0] = n.event.fix(t), r[0].type = i, n.event.handle.apply(this, r)
            }}
    });
    n.extend(n.fn, {validateDelegate: function (t, i, r) {
            return this.bind(i, function (i) {
                var u = n(i.target);
                if (u.is(t))
                    return r.apply(u, arguments)
            })
        }})
}(jQuery), function (n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }
    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }
    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }
    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
    }
    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"), u = r.attr("data-valmsg-replace"), e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"), r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function () {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function a(t) {
        var i = t.data("unobtrusiveContainer"), r = i.attr("data-valmsg-replace"), u = r ? n.parseJSON(r) : null;
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
    }
    function v() {
        var t = n(this);
        t.data("validator").resetForm();
        t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }
    function s(t) {
        var i = n(t), r = i.data(u), f = n.proxy(v, t);
        return r || (r = {options: {errorClass: "input-validation-error", errorElement: "span", errorPlacement: n.proxy(c, t), invalidHandler: n.proxy(l, t), messages: {}, rules: {}, success: n.proxy(a, t)}, attachValidation: function () {
                i.unbind("reset." + u, f).bind("reset." + u, f).validate(this.options)
            }, validate: function () {
                return i.validate(), i.valid()
            }}, i.data(u, r)), r
    }
    var r = n.validator, t, u = "unobtrusiveValidation";
    r.unobtrusive = {adapters: [], parseElement: function (t, i) {
            var u = n(t), f = u.parents("form")[0], r, e, o;
            f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function () {
                var i = "data-val-" + this.name, r = u.attr(i), s = {};
                r !== undefined && (i += "-", n.each(this.params, function () {
                    s[this] = u.attr(i + this)
                }), this.adapt({element: t, form: f, message: r, params: s, rules: e, messages: o}))
            }), n.extend(e, {__dummy__: !0}), i || r.attachValidation())
        }, parse: function (t) {
            var i = n(t).parents("form").andSelf().add(n(t).find("form")).filter("form");
            n(t).find(":input[data-val=true]").each(function () {
                r.unobtrusive.parseElement(this, !0)
            });
            i.each(function () {
                var n = s(this);
                n && n.attachValidation()
            })
        }};
    t = r.unobtrusive.adapters;
    t.add = function (n, t, i) {
        return i || (i = t, t = []), this.push({name: n, params: t, adapt: i}), this
    };
    t.addBool = function (n, t) {
        return this.add(n, function (r) {
            i(r, t || n, !0)
        })
    };
    t.addMinMax = function (n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function (n) {
            var f = n.params.min, e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    };
    t.addSingleVal = function (n, t, r) {
        return this.add(n, [t || "val"], function (u) {
            i(u, r || n, u.params[t])
        })
    };
    r.addMethod("__dummy__", function () {
        return!0
    });
    r.addMethod("regex", function (n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    });
    r.addMethod("nonalphamin", function (n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i), r
    });
    t.addSingleVal("accept", "exts").addSingleVal("regex", "pattern");
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    t.add("equalto", ["other"], function (t) {
        var r = e(t.element.name), u = t.params.other, s = o(u, r), h = n(t.form).find(":input[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    });
    t.add("required", function (n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    });
    t.add("remote", ["url", "type", "additionalfields"], function (t) {
        var r = {url: t.params.url, type: t.params.type || "GET", data: {}}, u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function (i, e) {
            var s = o(e, u);
            r.data[s] = function () {
                return n(t.form).find(":input[name='" + f(s) + "']").val()
            }
        });
        i(t, "remote", r)
    });
    t.add("password", ["min", "nonalphamin", "regex"], function (n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    });
    n(function () {
        r.unobtrusive.parse(document)
    })
}(jQuery), function (n) {
    typeof define == "function" && define.amd ? define(["jquery", "./jquery.validate"], n) : n(jQuery)
}(function (n) {
    (function () {
        function t(n) {
            return n.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
        }
        n.validator.addMethod("maxWords", function (n, i, r) {
            return this.optional(i) || t(n).match(/\b\w+\b/g).length <= r
        }, n.validator.format("Please enter {0} words or less."));
        n.validator.addMethod("minWords", function (n, i, r) {
            return this.optional(i) || t(n).match(/\b\w+\b/g).length >= r
        }, n.validator.format("Please enter at least {0} words."));
        n.validator.addMethod("rangeWords", function (n, i, r) {
            var u = t(n), f = /\b\w+\b/g;
            return this.optional(i) || u.match(f).length >= r[0] && u.match(f).length <= r[1]
        }, n.validator.format("Please enter between {0} and {1} words."))
    })();
    n.validator.addMethod("accept", function (t, i, r) {
        var f = typeof r == "string" ? r.replace(/\s/g, "").replace(/,/g, "|") : "image/*", e = this.optional(i), u, o;
        if (e)
            return e;
        if (n(i).attr("type") === "file" && (f = f.replace(/\*/g, ".*"), i.files && i.files.length))
            for (u = 0; u < i.files.length; u++)
                if (o = i.files[u], !o.type.match(new RegExp(".?(" + f + ")$", "i")))
                    return!1;
        return!0
    }, n.validator.format("Please enter a value with a valid mimetype."));
    n.validator.addMethod("alphanumeric", function (n, t) {
        return this.optional(t) || /^\w+$/i.test(n)
    }, "Letters, numbers, and underscores only please");
    n.validator.addMethod("bankaccountNL", function (n, t) {
        if (this.optional(t))
            return!0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(n))
            return!1;
        for (var u = n.replace(/ /g, ""), r = 0, f = u.length, e, o, i = 0; i < f; i++)
            e = f - i, o = u.substring(i, i + 1), r = r + e * o;
        return r % 11 == 0
    }, "Please specify a valid bank account number");
    n.validator.addMethod("bankorgiroaccountNL", function (t, i) {
        return this.optional(i) || n.validator.methods.bankaccountNL.call(this, t, i) || n.validator.methods.giroaccountNL.call(this, t, i)
    }, "Please specify a valid bank or giro account number");
    n.validator.addMethod("bic", function (n, t) {
        return this.optional(t) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(n)
    }, "Please specify a valid BIC code");
    n.validator.addMethod("cifES", function (n) {
        "use strict";
        var t = [], f, i, r, u, e, o;
        if (n = n.toUpperCase(), !n.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))
            return!1;
        for (r = 0; r < 9; r++)
            t[r] = parseInt(n.charAt(r), 10);
        for (i = t[2] + t[4] + t[6], u = 1; u < 8; u += 2)
            e = (2 * t[u]).toString(), o = e.charAt(1), i += parseInt(e.charAt(0), 10) + (o === "" ? 0 : parseInt(o, 10));
        return/^[ABCDEFGHJNPQRSUVW]{1}/.test(n) ? (i += "", f = 10 - parseInt(i.charAt(i.length - 1), 10), n += f, t[8].toString() === String.fromCharCode(64 + f) || t[8].toString() === n.charAt(n.length - 1)) : !1
    }, "Please specify a valid CIF number.");
    n.validator.addMethod("creditcardtypes", function (n, t, i) {
        if (/[^0-9\-]+/.test(n))
            return!1;
        n = n.replace(/\D/g, "");
        var r = 0;
        return(i.mastercard && (r |= 1), i.visa && (r |= 2), i.amex && (r |= 4), i.dinersclub && (r |= 8), i.enroute && (r |= 16), i.discover && (r |= 32), i.jcb && (r |= 64), i.unknown && (r |= 128), i.all && (r = 255), r & 1 && /^(5[12345])/.test(n)) ? n.length === 16 : r & 2 && /^(4)/.test(n) ? n.length === 16 : r & 4 && /^(3[47])/.test(n) ? n.length === 15 : r & 8 && /^(3(0[012345]|[68]))/.test(n) ? n.length === 14 : r & 16 && /^(2(014|149))/.test(n) ? n.length === 15 : r & 32 && /^(6011)/.test(n) ? n.length === 16 : r & 64 && /^(3)/.test(n) ? n.length === 16 : r & 64 && /^(2131|1800)/.test(n) ? n.length === 15 : r & 128 ? !0 : !1
    }, "Please enter a valid credit card number.");
    n.validator.addMethod("currency", function (n, t, i) {
        var f = typeof i == "string", r = f ? i : i[0], e = f ? !0 : i[1], u;
        return r = r.replace(/,/g, ""), r = e ? r + "]" : r + "]?", u = "^[" + r + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", u = new RegExp(u), this.optional(t) || u.test(n)
    }, "Please specify a valid currency");
    n.validator.addMethod("dateFA", function (n, t) {
        return this.optional(t) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(n)
    }, "Please enter a correct date");
    n.validator.addMethod("dateITA", function (n, t) {
        var u = !1, i, f, e, o, r;
        return/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(n) ? (i = n.split("/"), f = parseInt(i[0], 10), e = parseInt(i[1], 10), o = parseInt(i[2], 10), r = new Date(o, e - 1, f, 12, 0, 0, 0), u = r.getUTCFullYear() === o && r.getUTCMonth() === e - 1 && r.getUTCDate() === f ? !0 : !1) : u = !1, this.optional(t) || u
    }, "Please enter a correct date");
    n.validator.addMethod("dateNL", function (n, t) {
        return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(n)
    }, "Please enter a correct date");
    n.validator.addMethod("extension", function (n, t, i) {
        return i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || n.match(new RegExp(".(" + i + ")$", "i"))
    }, n.validator.format("Please enter a value with a valid extension."));
    n.validator.addMethod("giroaccountNL", function (n, t) {
        return this.optional(t) || /^[0-9]{1,7}$/.test(n)
    }, "Please specify a valid giro account number");
    n.validator.addMethod("iban", function (n, t) {
        if (this.optional(t))
            return!0;
        var i = n.replace(/ /g, "").toUpperCase(), f = "", c = !0, e = "", l = "", a, o, s, v, h, y, p, r, u;
        if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(i) || (a = i.substring(0, 2), y = {AL: "\\d{8}[\\dA-Z]{16}", AD: "\\d{8}[\\dA-Z]{12}", AT: "\\d{16}", AZ: "[\\dA-Z]{4}\\d{20}", BE: "\\d{12}", BH: "[A-Z]{4}[\\dA-Z]{14}", BA: "\\d{16}", BR: "\\d{23}[A-Z][\\dA-Z]", BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}", CR: "\\d{17}", HR: "\\d{17}", CY: "\\d{8}[\\dA-Z]{16}", CZ: "\\d{20}", DK: "\\d{14}", DO: "[A-Z]{4}\\d{20}", EE: "\\d{16}", FO: "\\d{14}", FI: "\\d{14}", FR: "\\d{10}[\\dA-Z]{11}\\d{2}", GE: "[\\dA-Z]{2}\\d{16}", DE: "\\d{18}", GI: "[A-Z]{4}[\\dA-Z]{15}", GR: "\\d{7}[\\dA-Z]{16}", GL: "\\d{14}", GT: "[\\dA-Z]{4}[\\dA-Z]{20}", HU: "\\d{24}", IS: "\\d{22}", IE: "[\\dA-Z]{4}\\d{14}", IL: "\\d{19}", IT: "[A-Z]\\d{10}[\\dA-Z]{12}", KZ: "\\d{3}[\\dA-Z]{13}", KW: "[A-Z]{4}[\\dA-Z]{22}", LV: "[A-Z]{4}[\\dA-Z]{13}", LB: "\\d{4}[\\dA-Z]{20}", LI: "\\d{5}[\\dA-Z]{12}", LT: "\\d{16}", LU: "\\d{3}[\\dA-Z]{13}", MK: "\\d{3}[\\dA-Z]{10}\\d{2}", MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}", MR: "\\d{23}", MU: "[A-Z]{4}\\d{19}[A-Z]{3}", MC: "\\d{10}[\\dA-Z]{11}\\d{2}", MD: "[\\dA-Z]{2}\\d{18}", ME: "\\d{18}", NL: "[A-Z]{4}\\d{10}", NO: "\\d{11}", PK: "[\\dA-Z]{4}\\d{16}", PS: "[\\dA-Z]{4}\\d{21}", PL: "\\d{24}", PT: "\\d{21}", RO: "[A-Z]{4}[\\dA-Z]{16}", SM: "[A-Z]\\d{10}[\\dA-Z]{12}", SA: "\\d{2}[\\dA-Z]{18}", RS: "\\d{18}", SK: "\\d{20}", SI: "\\d{15}", ES: "\\d{20}", SE: "\\d{20}", CH: "\\d{5}[\\dA-Z]{12}", TN: "\\d{20}", TR: "\\d{5}[\\dA-Z]{17}", AE: "\\d{3}\\d{16}", GB: "[A-Z]{4}\\d{14}", VG: "[\\dA-Z]{4}\\d{16}"}, h = y[a], typeof h != "undefined" && (p = new RegExp("^[A-Z]{2}\\d{2}" + h + "$", ""), !p.test(i))))
            return!1;
        for (o = i.substring(4, i.length) + i.substring(0, 4), r = 0; r < o.length; r++)
            s = o.charAt(r), s !== "0" && (c = !1), c || (f += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(s));
        for (u = 0; u < f.length; u++)
            v = f.charAt(u), l = "" + e + "" + v, e = l % 97;
        return e === 1
    }, "Please specify a valid IBAN");
    n.validator.addMethod("integer", function (n, t) {
        return this.optional(t) || /^-?\d+$/.test(n)
    }, "A positive or negative non-decimal number please");
    n.validator.addMethod("ipv4", function (n, t) {
        return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(n)
    }, "Please enter a valid IP v4 address.");
    n.validator.addMethod("ipv6", function (n, t) {
        return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(n)
    }, "Please enter a valid IP v6 address.");
    n.validator.addMethod("lettersonly", function (n, t) {
        return this.optional(t) || /^[a-z]+$/i.test(n)
    }, "Letters only please");
    n.validator.addMethod("letterswithbasicpunc", function (n, t) {
        return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(n)
    }, "Letters or punctuation only please");
    n.validator.addMethod("mobileNL", function (n, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(n)
    }, "Please specify a valid mobile number");
    n.validator.addMethod("numberwithmaxdecimal", function (n, t, i) {
        return i = new RegExp("^[0-9]{0," + i + "}([.][0-9]*)?$"), this.optional(t) || i.test(n)
    }, "Number is not proper format");
    n.validator.addMethod("notallowhtml", function (n, t) {
        var i = new RegExp("^[^<>,<|>]+$");
        return this.optional(t) || i.test(n)
    }, "Html tag is not allow");
    n.validator.addMethod("mobileUK", function (n, t) {
        return n = n.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || n.length > 9 && n.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number");
    n.validator.addMethod("nieES", function (n) {
        "use strict";
        return(n = n.toUpperCase(), !n.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) ? !1 : /^[T]{1}/.test(n) ? n[8] === /^[T]{1}[A-Z0-9]{8}$/.test(n) : /^[XYZ]{1}/.test(n) ? n[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(n.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) : !1
    }, "Please specify a valid NIE number.");
    n.validator.addMethod("nifES", function (n) {
        "use strict";
        return(n = n.toUpperCase(), !n.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) ? !1 : /^[0-9]{8}[A-Z]{1}$/.test(n) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(n.substring(8, 0) % 23) === n.charAt(8) : /^[KLM]{1}/.test(n) ? n[8] === String.fromCharCode(64) : !1
    }, "Please specify a valid NIF number.");
    n.validator.addMethod("nowhitespace", function (n, t) {
        return this.optional(t) || /^\S+$/i.test(n)
    }, "No white space please");
    n.validator.addMethod("pattern", function (n, t, i) {
        return this.optional(t) ? !0 : (typeof i == "string" && (i = new RegExp("^(?:" + i + ")$")), i.test(n))
    }, "Invalid format.");
    n.validator.addMethod("phoneNL", function (n, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(n)
    }, "Please specify a valid phone number.");
    n.validator.addMethod("phoneUK", function (n, t) {
        return n = n.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || n.length > 9 && n.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number");
    n.validator.addMethod("phoneUS", function (n, t) {
        return n = n.replace(/\s+/g, ""), this.optional(t) || n.length > 9 && n.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number");
    n.validator.addMethod("phonesUK", function (n, t) {
        return n = n.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || n.length > 9 && n.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number");
    n.validator.addMethod("postalCodeCA", function (n, t) {
        return this.optional(t) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(n)
    }, "Please specify a valid postal code");
    n.validator.addMethod("postalcodeBR", function (n, t) {
        return this.optional(t) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(n)
    }, "Informe um CEP válido.");
    n.validator.addMethod("postalcodeIT", function (n, t) {
        return this.optional(t) || /^\d{5}$/.test(n)
    }, "Please specify a valid postal code");
    n.validator.addMethod("postalcodeNL", function (n, t) {
        return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(n)
    }, "Please specify a valid postal code");
    n.validator.addMethod("postcodeUK", function (n, t) {
        return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(n)
    }, "Please specify a valid UK postcode");
    n.validator.addMethod("require_from_group", function (t, i, r) {
        var u = n(r[1], i.form), f = u.eq(0), e = f.data("valid_req_grp") ? f.data("valid_req_grp") : n.extend({}, this), o = u.filter(function () {
            return e.elementValue(this)
        }).length >= r[0];
        return f.data("valid_req_grp", e), n(i).data("being_validated") || (u.data("being_validated", !0), u.each(function () {
            e.element(this)
        }), u.data("being_validated", !1)), o
    }, n.validator.format("Please fill at least {0} of these fields."));
    n.validator.addMethod("require_from_groupdata", function (t, i, r) {
        var e = this, f = r[1], o = n(f, i.form).filter(function () {
            return e.elementValue(this)
        }).length >= r[0], u;
        return n(i).data("being_validated") || (u = n(f, i.form), u.data("being_validated", !0), u.valid(), u.data("being_validated", !1)), o
    }, jQuery.format("Please fil11l at least {0} of these fields."));
    jQuery.validator.addMethod("require_from_groupslist", function (t, i, r) {
        return n(r[1], i.form).filter(function () {
            return n(this).val()
        }).length >= r[0]
    }, jQuery.format("Please fill12 out at least {0} of these three fields."));
    n.validator.addMethod("skip_or_fill_minimum", function (t, i, r) {
        var u = n(r[1], i.form), f = u.eq(0), e = f.data("valid_skip") ? f.data("valid_skip") : n.extend({}, this), o = u.filter(function () {
            return e.elementValue(this)
        }).length, s = o === 0 || o >= r[0];
        return f.data("valid_skip", e), n(i).data("being_validated") || (u.data("being_validated", !0), u.each(function () {
            e.element(this)
        }), u.data("being_validated", !1)), s
    }, n.validator.format("Please either skip these fields or fill at least {0} of them."));
    jQuery.validator.addMethod("stateUS", function (n, t, i) {
        var u = typeof i == "undefined", o = u || typeof i.caseSensitive == "undefined" ? !1 : i.caseSensitive, f = u || typeof i.includeTerritories == "undefined" ? !1 : i.includeTerritories, e = u || typeof i.includeMilitary == "undefined" ? !1 : i.includeMilitary, r;
        return r = f || e ? f && e ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : f ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", r = o ? new RegExp(r) : new RegExp(r, "i"), this.optional(t) || r.test(n)
    }, "Please specify a valid state");
    n.validator.addMethod("strippedminlength", function (t, i, r) {
        return n(t).text().length >= r
    }, n.validator.format("Please enter at least {0} characters"));
    n.validator.addMethod("time", function (n, t) {
        return this.optional(t) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(n)
    }, "Please enter a valid time, between 00:00 and 23:59");
    n.validator.addMethod("time12h", function (n, t) {
        return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(n)
    }, "Please enter a valid time in 12-hour am/pm format");
    n.validator.addMethod("url2", function (n, t) {
        return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
    }, n.validator.messages.url);
    n.validator.addMethod("vinUS", function (n) {
        if (n.length !== 17)
            return!1;
        for (var e = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], h = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9], c = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], s = 0, r, t, o, u, f, i = 0; i < 17; i++) {
            if (o = c[i], t = n.slice(i, i + 1), i === 8 && (f = t), isNaN(t)) {
                for (r = 0; r < e.length; r++)
                    if (t.toUpperCase() === e[r]) {
                        t = h[r];
                        t *= o;
                        isNaN(f) && r === 8 && (f = e[r]);
                        break
                    }
            } else
                t *= o;
            s += t
        }
        return(u = s % 11, u === 10 && (u = "X"), u === f) ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid.");
    n.validator.addMethod("zipcodeUS", function (n, t) {
        return this.optional(t) || /^\d{5}(-\d{4})?$/.test(n)
    }, "The specified US ZIP Code is invalid");
    n.validator.addMethod("ziprange", function (n, t) {
        return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(n)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
});
$.SMC = {textType: {warning: "text-warning", error: "text-danger", success: "text-success", muted: "text-muted", info: "text-info"}, alertStyle: {warning: "warning", error: "error", danger: "error", success: "success", info: "custom"}, alertPosition: {topRight: "top-right", topCenter: "top-center", topLeft: "top-left", bottomRight: "bottom-right", bottomCenter: "bottom-center", bottomLeft: "bottom-left"}, notify: function (n, t, i) {
        alertify.set("notifier", "position", "top-center");
        alertify.dismissAll();
        var r = alertify.notify(n, t == "danger" ? "error" : t, i == !0 ? 20 : 0, function () {
        });
        window.innerWidth > 480 ? $(r.element).attr("style", "width:480px") : $(r.element).attr("style", "width:300px")
    }, alert: function (n, t, i, r, u) {
        r = r || "alertify-warning";
        i = i === undefined ? !0 : i;
        var f = alertify.alert(n, t, function () {
            var n, t, i;
            u != undefined && u != null && u != "" && (n = u.split("=>"), n.length > 1 ? (t = u.split("=>")[0], i = u.split("=>")[1], window[t](i)) : window[u]())
        }).set({movable: i, closableByDimmer: !1});
        $(f.elements.dialog).addClass(r)
    }, confirm: function (n, t, i, r, u, f) {
        f = f || "alertify-confirm";
        i = i === undefined ? !0 : i;
        var e = alertify.confirm(n, t, function () {
            var n, t, i;
            if (r != undefined && r != null && r != "")
                n = r.split("=>"), n.length > 1 ? (t = r.split("=>")[0], i = r.split("=>")[1], window[t](i)) : window[r]();
            else
                return alertify.confirm().close(), !0
        }, function () {
            if (u != undefined && u != null && u != "")
                window[u]();
            else
                return alertify.confirm().close(), !1
        }).set({movable: i, closableByDimmer: !1});
        return $(e.elements.dialog).addClass(f), !1
    }, notifyPrompt: function (n) {
        n.autoHide = n.autoHide || 0;
        n.position = n.position || "top-center";
        n.dismissAll = n.dismissAll || !0;
        alertify.set("notifier", "position", n.position);
        n.dismissAll && alertify.dismissAll();
        var t = alertify.notify(n.message, n.alertStyle, n.autoHide, function () {
        });
        window.innerWidth > 480 ? $(t.element).attr("style", "width:480px") : $(t.element).attr("style", "width:300px")
    }, alertPrompt: function (n) {
        n.alertClass = n.alertClass || "alertify-warning";
        n.isMovable = n.isMovable === undefined ? !0 : n.isMovable;
        n.title = n.faIcon === undefined || n.faIcon == "" || n.faIcon == null ? n.title : '<i class="pad-r5 fa fa-' + n.faIcon + " " + n.iconColor + '"><\/i>' + n.title;
        var t = alertify.alert(n.title, n.message, function () {
            $.isEmptyObject(n.onOKFunction) || n.onOKFunction.functionName == "" || ($.isEmptyObject(n.onOKFunction.options) ? n.onOKFunction.functionName() : n.onOKFunction.functionName(n.onOKFunction.options))
        }).set({movable: n.isMovable, closableByDimmer: !1});
        $(t.elements.dialog).addClass(n.alertClass)
    }, confirmPrompt: function (n) {
        n.confirmClass = n.confirmClass || "alertify-warning";
        n.closableByDimmer = n.closableByDimmer || !1;
        n.isMovable = n.isMovable === undefined ? !0 : n.isMovable;
        n.title = n.faIcon === undefined || n.faIcon == "" || n.faIcon == null ? n.title : '<i class="pad-r5 fa fa-' + n.faIcon + " " + n.iconColor + '"><\/i>' + n.title;
        var t = alertify.confirm(n.title, n.message, function () {
            $.isEmptyObject(n.onOKFunction) || n.onOKFunction.functionName == "" || ($.isEmptyObject(n.onOKFunction.options) ? n.onOKFunction.functionName() : n.onOKFunction.functionName(n.onOKFunction.options))
        }, function () {
            $.isEmptyObject(n.onCancelFunction) || n.onCancelFunction.functionName == "" || ($.isEmptyObject(n.onCancelFunction.options) ? n.onCancelFunction.functionName() : n.onCancelFunction.functionName(n.onCancelFunction.options))
        }).set({movable: n.isMovable, closableByDimmer: n.closableByDimmer});
        $(t.elements.dialog).addClass(n.confirmClass)
    }};
String.prototype.toDate = function () {
    var n = /Date\(([^)]+)\)/.exec(this);
    return new Date(parseFloat(n[1]))
};
String.prototype.toDateTime = function () {
    var n = new Date(parseInt(this.substr(6)));
    return n.format("dd/mm/yyyy HH:MM:ss")
};
Date.prototype.toFormatDateString = function (n) {
    for (var r, i = n.split(/[\s-/:]+/), u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], t = 0; t < i.length; t++)
        switch (i[t]) {
            case"dd":
                n = n.replace("dd", (this.getDate().toString().length == 1 ? "0" : "") + this.getDate());
                break;
            case"MM":
                n = n.replace("MM", ((this.getMonth() + 1).toString().length == 1 ? "0" : "") + (this.getMonth() + 1));
                break;
            case"MMM":
                n = n.replace("MMM", u[this.getMonth()]);
                break;
            case"MMMM":
                n = n.replace("MMMM", f[this.getMonth()]);
                break;
            case"yy":
                n = n.replace("yy", this.getFullYear().toString().substr(2, 2));
                break;
            case"yyyy":
                n = n.replace("yyyy", this.getFullYear());
                break;
            case"mm":
                n = n.replace("mm", (this.getMinutes().toString().length == 1 ? "0" : "") + this.getMinutes());
                break;
            case"hh":
                n.indexOf("tt") == -1 ? n = n.replace("hh", (this.getHours().toString().length == 1 ? "0" : "") + this.getHours()) : (r = ((this.getHours() - (this.getHours() > 12 ? 12 : 0)).toString().length == 1 ? "0" : "") + (this.getHours() - (this.getHours() > 12 ? 12 : 0)), n = n.replace("hh", r == 0 ? 12 : r));
                break;
            case"ss":
                n = n.replace("ss", (this.getSeconds().toString().length == 1 ? "0" : "") + this.getSeconds());
                break;
            case"tt":
                n = this.getHours() >= 12 ? n.replace("tt", "PM") : n.replace("tt", "AM");
                break;
            default:
                return'"' + i[t] + '" is invalid format.'
        }
    return n
};
String.prototype.removeLastChar = function () {
    return this.substring(0, this.length - 1)
};
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
};
Date.prototype.getFinancialYear = function (n) {
    var i = this, t, r;
    return n = n || 0, t = i.getFullYear(), r = i.getMonth(), r > 2 ? t + "-" + (t + 1).toString().slice(n) : t - 1 + "-" + t.toString().slice(n)
};
tagsToReplace = {"&": "&amp;", "<": "&lt;", ">": "&gt;"};
String.prototype.escapeHTMLTags = function () {
    return this.replace(/[&<>]/g, replaceTag)
};
_validationDefaults = {errorElement: "span", errorClass: "input-validation-error", focusInvalid: !0, highlight: function (n) {
        $(n).closest(".form-group .form-control").addClass("input-validation-error")
    }, unhighlight: function (n) {
        $(n).closest(".form-group .form-control").removeClass("input-validation-error")
    }, success: function (n) {
        n.closest(".form-group .form-control");
        n.remove()
    }, errorPlacement: function (n, t) {
        t.closest(".form-group") != null && t.closest(".form-group").length > 0 ? n.addClass("field-validation-error").insertAfter(t.closest(".form-group .form-control")) : n.addClass("field-validation-error").insertAfter(t.closest(".form-group .form-control"))
    }, submitHandler: function (n) {
        n.submit()
    }};
$(document).ready(function () {
    allowOnlyDigits();
    preventDevelpoerTools()
}), function (n) {
    "use strict";
    var t = {i18n: {ar: {months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"], dayOfWeek: ["ن", "ث", "ع", "خ", "ج", "س", "ح"]}, ro: {months: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"], dayOfWeek: ["l", "ma", "mi", "j", "v", "s", "d"]}, id: {months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], dayOfWeek: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]}, bg: {months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"], dayOfWeek: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]}, fa: {months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"], dayOfWeek: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]}, ru: {months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], dayOfWeek: ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]}, uk: {months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], dayOfWeek: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"]}, en: {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}, el: {months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], dayOfWeek: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"]}, de: {months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], dayOfWeek: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]}, nl: {months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], dayOfWeek: ["zo", "ma", "di", "wo", "do", "vr", "za"]}, tr: {months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], dayOfWeek: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"]}, fr: {months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], dayOfWeek: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]}, es: {months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], dayOfWeek: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]}, th: {months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], dayOfWeek: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]}, pl: {months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"], dayOfWeek: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"]}, pt: {months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}, ch: {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]}, se: {months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], dayOfWeek: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]}, kr: {months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"]}, it: {months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]}, da: {months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"], dayOfWeek: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]}, no: {months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], dayOfWeek: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]}, ja: {months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], dayOfWeek: ["日", "月", "火", "水", "木", "金", "土"]}, vi: {months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], dayOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]}, sl: {months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], dayOfWeek: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]}, cs: {months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], dayOfWeek: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]}, hu: {months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], dayOfWeek: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"]}, az: {months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], dayOfWeek: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"]}, bs: {months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], dayOfWeek: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]}, ca: {months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], dayOfWeek: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"]}, "en-GB": {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}, et: {months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"], dayOfWeek: ["P", "E", "T", "K", "N", "R", "L"]}, eu: {months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"], dayOfWeek: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."]}, fi: {months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"], dayOfWeek: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"]}, gl: {months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"], dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"]}, hr: {months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], dayOfWeek: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]}, ko: {months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"]}, lt: {months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"], dayOfWeek: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"]}, lv: {months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"], dayOfWeek: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"]}, mk: {months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"], dayOfWeek: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"]}, mn: {months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], dayOfWeek: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"]}, "pt-BR": {months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]}, sk: {months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"], dayOfWeek: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"]}, sq: {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}, "sr-YU": {months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], dayOfWeek: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"]}, sr: {months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], dayOfWeek: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"]}, sv: {months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], dayOfWeek: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]}, "zh-TW": {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]}, zh: {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]}, he: {months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], dayOfWeek: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"]}, hy: {months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"], dayOfWeek: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"]}, kg: {months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"], dayOfWeek: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"]}}, value: "", lang: "en", format: "Y/m/d H:i", formatTime: "H:i", formatDate: "Y/m/d", startDate: !1, step: 60, monthChangeSpinner: !0, closeOnDateSelect: !1, closeOnTimeSelect: !1, closeOnWithoutClick: !0, closeOnInputClick: !0, timepicker: !0, datepicker: !0, weeks: !1, defaultTime: !1, defaultDate: !1, minDate: !1, maxDate: !1, minTime: !1, maxTime: !1, allowTimes: [], opened: !1, initTime: !0, inline: !1, theme: "", onSelectDate: function () {
        }, onSelectTime: function () {
        }, onChangeMonth: function () {
        }, onChangeYear: function () {
        }, onChangeDateTime: function () {
        }, onShow: function () {
        }, onClose: function () {
        }, onGenerate: function () {
        }, withoutCopyright: !0, inverseButton: !1, hours12: !1, next: "xdsoft_next", prev: "xdsoft_prev", dayOfWeekStart: 0, parentID: "body", timeHeightInTimePicker: 25, timepickerScrollbar: !0, todayButton: !0, prevButton: !0, nextButton: !0, defaultSelect: !0, scrollMonth: !0, scrollTime: !0, scrollInput: !0, lazyInit: !1, mask: !1, validateOnBlur: !0, allowBlank: !0, yearStart: 1900, yearEnd: (new Date).getFullYear(), monthStart: 0, monthEnd: 11, style: "", id: "", fixed: !1, roundTime: "round", className: "", weekends: [], disabledDates: [], yearOffset: 0, beforeShowDay: null, enterLikeTab: !0, showApplyButton: !1};
    Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
        for (var i = t || 0, r = this.length; i < r; i += 1)
            if (this[i] === n)
                return i;
        return-1
    });
    Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    };
    n.fn.xdsoftScroller = function (t) {
        return this.each(function () {
            var i = n(this), s = function (n) {
                var t = {x: 0, y: 0}, i;
                return n.type === "touchstart" || n.type === "touchmove" || n.type === "touchend" || n.type === "touchcancel" ? (i = n.originalEvent.touches[0] || n.originalEvent.changedTouches[0], t.x = i.clientX, t.y = i.clientY) : (n.type === "mousedown" || n.type === "mouseup" || n.type === "mousemove" || n.type === "mouseover" || n.type === "mouseout" || n.type === "mouseenter" || n.type === "mouseleave") && (t.x = n.clientX, t.y = n.clientY), t
            }, f, u, e, o, r, h = 100, c = !1, w = 0, a = 0, v = 0, y = !1, p = 0, l = function () {
            };
            if (t === "hide") {
                i.find(".xdsoft_scrollbar").hide();
                return
            }
            if (!n(this).hasClass("xdsoft_scroller_box")) {
                f = i.children().eq(0);
                u = i[0].clientHeight;
                e = f[0].offsetHeight;
                o = n('<div class="xdsoft_scrollbar"><\/div>');
                r = n('<div class="xdsoft_scroller"><\/div>');
                o.append(r);
                i.addClass("xdsoft_scroller_box").append(o);
                l = function (n) {
                    var t = s(n).y - w + p;
                    t < 0 && (t = 0);
                    t + r[0].offsetHeight > v && (t = v - r[0].offsetHeight);
                    i.trigger("scroll_element.xdsoft_scroller", [h ? t / h : 0])
                };
                r.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function (f) {
                    if (u || i.trigger("resize_scroll.xdsoft_scroller", [t]), w = s(f).y, p = parseInt(r.css("margin-top"), 10), v = o[0].offsetHeight, f.type === "mousedown") {
                        document && n(document.body).addClass("xdsoft_noselect");
                        n([document.body, window]).on("mouseup.xdsoft_scroller", function e() {
                            n([document.body, window]).off("mouseup.xdsoft_scroller", e).off("mousemove.xdsoft_scroller", l).removeClass("xdsoft_noselect")
                        });
                        n(document.body).on("mousemove.xdsoft_scroller", l)
                    } else
                        y = !0, f.stopPropagation(), f.preventDefault()
                }).on("touchmove", function (n) {
                    y && (n.preventDefault(), l(n))
                }).on("touchend touchcancel", function () {
                    y = !1;
                    p = 0
                });
                i.on("scroll_element.xdsoft_scroller", function (n, t) {
                    u || i.trigger("resize_scroll.xdsoft_scroller", [t, !0]);
                    t = t > 1 ? 1 : t < 0 || isNaN(t) ? 0 : t;
                    r.css("margin-top", h * t);
                    setTimeout(function () {
                        f.css("marginTop", -parseInt((f[0].offsetHeight - u) * t, 10))
                    }, 10)
                }).on("resize_scroll.xdsoft_scroller", function (n, t, s) {
                    var c, l;
                    u = i[0].clientHeight;
                    e = f[0].offsetHeight;
                    c = u / e;
                    l = c * o[0].offsetHeight;
                    c > 1 ? r.hide() : (r.show(), r.css("height", parseInt(l > 10 ? l : 10, 10)), h = o[0].offsetHeight - r[0].offsetHeight, s !== !0 && i.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(f.css("marginTop"), 10)) / (e - u)]))
                });
                i.on("mousewheel", function (n) {
                    var t = Math.abs(parseInt(f.css("marginTop"), 10));
                    return t = t - n.deltaY * 20, t < 0 && (t = 0), i.trigger("scroll_element.xdsoft_scroller", [t / (e - u)]), n.stopPropagation(), !1
                });
                i.on("touchstart", function (n) {
                    c = s(n);
                    a = Math.abs(parseInt(f.css("marginTop"), 10))
                });
                i.on("touchmove", function (n) {
                    if (c) {
                        n.preventDefault();
                        var t = s(n);
                        i.trigger("scroll_element.xdsoft_scroller", [(a - (t.y - c.y)) / (e - u)])
                    }
                });
                i.on("touchend touchcancel", function () {
                    c = !1;
                    a = 0
                })
            }
            i.trigger("resize_scroll.xdsoft_scroller", [t])
        })
    };
    n.fn.datetimepicker = function (i) {
        var h = 48, w = 57, c = 96, l = 105, e = 17, u = 46, a = 13, b = 27, f = 8, k = 37, d = 38, g = 39, nt = 40, v = 9, tt = 116, it = 65, rt = 67, ut = 86, ft = 90, et = 89, o = !1, r = n.isPlainObject(i) || !i ? n.extend(!0, {}, t, i) : n.extend(!0, {}, t), y = 0, s, p, ot = function (n) {
            n.on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function t() {
                n.is(":disabled") || n.data("xdsoft_datetimepicker") || (clearTimeout(y), y = setTimeout(function () {
                    n.data("xdsoft_datetimepicker") || s(n);
                    n.off("open.xdsoft focusin.xdsoft mousedown.xdsoft", t).trigger("open.xdsoft")
                }, 100))
            })
        };
        s = function (t) {
            function ni() {
                var n = !1, i;
                return r.startDate ? n = y.strToDate(r.startDate) : (n = r.value || (t && t.val && t.val() ? t.val() : ""), n ? n = y.strToDateTime(n) : r.defaultDate && (n = y.strToDate(r.defaultDate), r.defaultTime && (i = y.strtotime(r.defaultTime), n.setHours(i.getHours()), n.setMinutes(i.getMinutes())))), n && y.isValidDate(n) ? s.data("changed", !0) : n = "", n || 0
            }
            var s = n("<div " + (r.id ? 'id="' + r.id + '"' : "") + " " + (r.style ? 'style="' + r.style + '"' : "") + ' class="xdsoft_datetimepicker xdsoft_' + r.theme + " xdsoft_noselect " + (r.weeks ? " xdsoft_showweeks" : "") + r.className + '"><\/div>'), ii = n('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net<\/a><\/div>'), ct = n('<div class="xdsoft_datepicker active"><\/div>'), ot = n('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"><\/button><button type="button" class="xdsoft_today_button"><\/button><div class="xdsoft_label xdsoft_month"><span><\/span><i><\/i><\/div><div class="xdsoft_label xdsoft_year"><span><\/span><i><\/i><\/div><button type="button" class="xdsoft_next"><\/button><\/div>'), pt = n('<div class="xdsoft_calendar"><\/div>'), lt = n('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"><\/button><div class="xdsoft_time_box"><\/div><button type="button" class="xdsoft_next"><\/button><\/div>'), st = lt.find(".xdsoft_time_box").eq(0), p = n('<div class="xdsoft_time_variant"><\/div>'), wt = n('<button class="xdsoft_save_selected blue-gradient-button">Save Selected<\/button>'), bt = n('<div class="xdsoft_select xdsoft_monthselect"><div><\/div><\/div>'), kt = n('<div class="xdsoft_select xdsoft_yearselect"><div><\/div><\/div>'), at = !1, ti, dt, vt, ht, yt, gt = 0, ri = 0, y;
            ot.find(".xdsoft_month span").after(bt);
            ot.find(".xdsoft_year span").after(kt);
            ot.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft", function (t) {
                var i = n(this).find(".xdsoft_select").eq(0), f = 0, e = 0, o = i.is(":visible"), r, u;
                for (ot.find(".xdsoft_select").hide(), y.currentTime && (f = y.currentTime[n(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()), i[o?"hide":"show"](), r = i.find("div.xdsoft_option"), u = 0; u < r.length; u += 1)
                    if (r.eq(u).data("value") === f)
                        break;
                    else
                        e += r[0].offsetHeight;
                return i.xdsoftScroller(e / (i.children()[0].offsetHeight - i[0].clientHeight)), t.stopPropagation(), !1
            });
            ot.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft", function (n) {
                n.stopPropagation();
                n.preventDefault()
            }).on("mousedown.xdsoft", ".xdsoft_option", function () {
                (y.currentTime === undefined || y.currentTime === null) && (y.currentTime = y.now());
                var t = y.currentTime.getFullYear();
                y && y.currentTime && y.currentTime[n(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](n(this).data("value"));
                n(this).parent().parent().hide();
                s.trigger("xchange.xdsoft");
                r.onChangeMonth && n.isFunction(r.onChangeMonth) && r.onChangeMonth.call(s, y.currentTime, s.data("input"));
                t !== y.currentTime.getFullYear() && n.isFunction(r.onChangeYear) && r.onChangeYear.call(s, y.currentTime, s.data("input"))
            });
            s.setOptions = function (i) {
                if (r = n.extend(!0, {}, r, i), i.allowTimes && n.isArray(i.allowTimes) && i.allowTimes.length && (r.allowTimes = n.extend(!0, [], i.allowTimes)), i.weekends && n.isArray(i.weekends) && i.weekends.length && (r.weekends = n.extend(!0, [], i.weekends)), i.disabledDates && n.isArray(i.disabledDates) && i.disabledDates.length && (r.disabledDates = n.extend(!0, [], i.disabledDates)), (r.open || r.opened) && !r.inline && t.trigger("open.xdsoft"), r.inline && (at = !0, s.addClass("xdsoft_inline"), t.after(s).hide()), r.inverseButton && (r.next = "xdsoft_prev", r.prev = "xdsoft_next"), r.datepicker ? ct.addClass("active") : ct.removeClass("active"), r.timepicker ? lt.addClass("active") : lt.removeClass("active"), r.value && (y.setCurrentTime(r.value), t && t.val && t.val(y.str)), r.dayOfWeekStart = isNaN(r.dayOfWeekStart) ? 0 : parseInt(r.dayOfWeekStart, 10) % 7, r.timepickerScrollbar || st.xdsoftScroller("hide"), r.minDate && /^-(.*)$/.test(r.minDate) && (r.minDate = y.strToDateTime(r.minDate).dateFormat(r.formatDate)), r.maxDate && /^\+(.*)$/.test(r.maxDate) && (r.maxDate = y.strToDateTime(r.maxDate).dateFormat(r.formatDate)), wt.toggle(r.showApplyButton), ot.find(".xdsoft_today_button").css("visibility", r.todayButton ? "visible" : "hidden"), ot.find("." + r.prev).css("visibility", r.prevButton ? "visible" : "hidden"), ot.find("." + r.next).css("visibility", r.nextButton ? "visible" : "hidden"), r.mask) {
                    var ht = function (n) {
                        try {
                            if (document.selection && document.selection.createRange) {
                                var t = document.selection.createRange();
                                return t.getBookmark().charCodeAt(2) - 2
                            }
                            if (n.setSelectionRange)
                                return n.selectionStart
                        } catch (i) {
                            return 0
                        }
                    }, vt = function (n, t) {
                        if (n = typeof n == "string" || n instanceof String ? document.getElementById(n) : n, !n)
                            return!1;
                        if (n.createTextRange) {
                            var i = n.createTextRange();
                            return i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select(), !0
                        }
                        return n.setSelectionRange ? (n.setSelectionRange(t, t), !0) : !1
                    }, p = function (n, t) {
                        var i = n.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return new RegExp(i).test(t)
                    };
                    if (t.off("keydown.xdsoft"), r.mask === !0 && (r.mask = r.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), n.type(r.mask) === "string") {
                        p(r.mask, t.val()) || t.val(r.mask.replace(/[0-9]/g, "_"));
                        t.on("keydown.xdsoft", function (i) {
                            var ot = this.value, s = i.which, y, st;
                            if (s >= h && s <= w || s >= c && s <= l || s === f || s === u) {
                                for (y = ht(this), st = s !== f && s !== u?String.fromCharCode(c <= s && s <= l?s - h:s):"_", (s === f || s === u) && y && (y -= 1, st = "_"); /[^0-9_]/.test(r.mask.substr(y, 1)) && y < r.mask.length && y > 0; )
                                    y += s === f || s === u ? -1 : 1;
                                if (ot = ot.substr(0, y) + st + ot.substr(y + 1), n.trim(ot) === "")
                                    ot = r.mask.replace(/[0-9]/g, "_");
                                else if (y === r.mask.length)
                                    return i.preventDefault(), !1;
                                for (y += s === f || s === u?0:1; /[^0-9_]/.test(r.mask.substr(y, 1)) && y < r.mask.length && y > 0; )
                                    y += s === f || s === u ? -1 : 1;
                                p(r.mask, ot) ? (this.value = ot, vt(this, y)) : n.trim(ot) === "" ? this.value = r.mask.replace(/[0-9]/g, "_") : t.trigger("error_input.xdsoft")
                            } else if ([it, rt, ut, ft, et].indexOf(s) !== -1 && o || [b, d, nt, k, g, tt, e, v, a].indexOf(s) !== -1)
                                return!0;
                            return i.preventDefault(), !1
                        })
                    }
                }
                if (r.validateOnBlur)
                    t.off("blur.xdsoft").on("blur.xdsoft", function () {
                        if (r.allowBlank && !n.trim(n(this).val()).length)
                            n(this).val(null), s.data("xdsoft_datetime").empty();
                        else if (Date.parseDate(n(this).val(), r.format))
                            s.data("xdsoft_datetime").setCurrentTime(n(this).val());
                        else {
                            var t = +[n(this).val()[0], n(this).val()[1]].join(""), i = +[n(this).val()[2], n(this).val()[3]].join("");
                            !r.datepicker && r.timepicker && t >= 0 && t < 24 && i >= 0 && i < 60 ? n(this).val([t, i].map(function (n) {
                                return n > 9 ? n : "0" + n
                            }).join(":")) : n(this).val(y.now().dateFormat(r.format));
                            s.data("xdsoft_datetime").setCurrentTime(n(this).val())
                        }
                        s.trigger("changedatetime.xdsoft")
                    });
                r.dayOfWeekStartPrev = r.dayOfWeekStart === 0 ? 6 : r.dayOfWeekStart - 1;
                s.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            };
            s.data("options", r).on("mousedown.xdsoft", function (n) {
                return n.stopPropagation(), n.preventDefault(), kt.hide(), bt.hide(), !1
            });
            st.append(p);
            st.xdsoftScroller();
            s.on("afterOpen.xdsoft", function () {
                st.xdsoftScroller()
            });
            s.append(ct).append(lt);
            r.withoutCopyright !== !0 && s.append(ii);
            ct.append(ot).append(pt).append(wt);
            n(r.parentID).append(s);
            ti = function () {
                var t = this;
                t.now = function (n) {
                    var i = new Date, u, f;
                    return!n && r.defaultDate && (u = t.strToDate(r.defaultDate), i.setFullYear(u.getFullYear()), i.setMonth(u.getMonth()), i.setDate(u.getDate())), r.yearOffset && i.setFullYear(i.getFullYear() + r.yearOffset), !n && r.defaultTime && (f = t.strtotime(r.defaultTime), i.setHours(f.getHours()), i.setMinutes(f.getMinutes())), i
                };
                t.isValidDate = function (n) {
                    return Object.prototype.toString.call(n) !== "[object Date]" ? !1 : !isNaN(n.getTime())
                };
                t.setCurrentTime = function (n) {
                    t.currentTime = typeof n == "string" ? t.strToDateTime(n) : t.isValidDate(n) ? n : t.now();
                    s.trigger("xchange.xdsoft")
                };
                t.empty = function () {
                    t.currentTime = null
                };
                t.getCurrentTime = function () {
                    return t.currentTime
                };
                t.nextMonth = function () {
                    (t.currentTime === undefined || t.currentTime === null) && (t.currentTime = t.now());
                    var i = t.currentTime.getMonth() + 1, u;
                    return i === 12 && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), i = 0), u = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), i + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(i), r.onChangeMonth && n.isFunction(r.onChangeMonth) && r.onChangeMonth.call(s, y.currentTime, s.data("input")), u !== t.currentTime.getFullYear() && n.isFunction(r.onChangeYear) && r.onChangeYear.call(s, y.currentTime, s.data("input")), s.trigger("xchange.xdsoft"), i
                };
                t.prevMonth = function () {
                    (t.currentTime === undefined || t.currentTime === null) && (t.currentTime = t.now());
                    var i = t.currentTime.getMonth() - 1;
                    return i === -1 && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), i = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), i + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(i), r.onChangeMonth && n.isFunction(r.onChangeMonth) && r.onChangeMonth.call(s, y.currentTime, s.data("input")), s.trigger("xchange.xdsoft"), i
                };
                t.getWeekOfYear = function (n) {
                    var t = new Date(n.getFullYear(), 0, 1);
                    return Math.ceil(((n - t) / 864e5 + t.getDay() + 1) / 7)
                };
                t.strToDateTime = function (n) {
                    var i = [], f, u;
                    return n && n instanceof Date && t.isValidDate(n) ? n : (i = /^(\+|\-)(.*)$/.exec(n), i && (i[2] = Date.parseDate(i[2], r.formatDate)), i && i[2] ? (f = i[2].getTime() - i[2].getTimezoneOffset() * 6e4, u = new Date(y.now().getTime() + parseInt(i[1] + "1", 10) * f)) : u = n ? Date.parseDate(n, r.format) : t.now(), t.isValidDate(u) || (u = t.now()), u)
                };
                t.strToDate = function (n) {
                    if (n && n instanceof Date && t.isValidDate(n))
                        return n;
                    var i = n ? Date.parseDate(n, r.formatDate) : t.now(!0);
                    return t.isValidDate(i) || (i = t.now(!0)), i
                };
                t.strtotime = function (n) {
                    if (n && n instanceof Date && t.isValidDate(n))
                        return n;
                    var i = n ? Date.parseDate(n, r.formatTime) : t.now(!0);
                    return t.isValidDate(i) || (i = t.now(!0)), i
                };
                t.str = function () {
                    return t.currentTime.dateFormat(r.format)
                };
                t.currentTime = this.now()
            };
            y = new ti;
            wt.on("click", function (n) {
                n.preventDefault();
                s.data("changed", !0);
                y.setCurrentTime(ni());
                t.val(y.str());
                s.trigger("close.xdsoft")
            });
            ot.find(".xdsoft_today_button").on("mousedown.xdsoft", function () {
                s.data("changed", !0);
                y.setCurrentTime(0);
                s.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function () {
                t.val(y.str());
                s.trigger("close.xdsoft")
            });
            ot.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                var t = n(this), i = 0, u = !1;
                (function f(n) {
                    t.hasClass(r.next) ? y.nextMonth() : t.hasClass(r.prev) && y.prevMonth();
                    r.monthChangeSpinner && (u || (i = setTimeout(f, n || 100)))
                })(500);
                n([document.body, window]).on("mouseup.xdsoft", function e() {
                    clearTimeout(i);
                    u = !0;
                    n([document.body, window]).off("mouseup.xdsoft", e)
                })
            });
            lt.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                var i = n(this), u = 0, f = !1, t = 110;
                (function e(n) {
                    var s = st[0].clientHeight, h = p[0].offsetHeight, o = Math.abs(parseInt(p.css("marginTop"), 10));
                    i.hasClass(r.next) && h - s - r.timeHeightInTimePicker >= o ? p.css("marginTop", "-" + (o + r.timeHeightInTimePicker) + "px") : i.hasClass(r.prev) && o - r.timeHeightInTimePicker >= 0 && p.css("marginTop", "-" + (o - r.timeHeightInTimePicker) + "px");
                    st.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(p.css("marginTop"), 10) / (h - s))]);
                    t = t > 10 ? 10 : t - 10;
                    f || (u = setTimeout(e, n || t))
                })(500);
                n([document.body, window]).on("mouseup.xdsoft", function o() {
                    clearTimeout(u);
                    f = !0;
                    n([document.body, window]).off("mouseup.xdsoft", o)
                })
            });
            dt = 0;
            s.on("xchange.xdsoft", function (t) {
                clearTimeout(dt);
                dt = setTimeout(function () {
                    (y.currentTime === undefined || y.currentTime === null) && (y.currentTime = y.now());
                    for (var e = "", u = new Date(y.currentTime.getFullYear(), y.currentTime.getMonth(), 1, 12, 0, 0), t = 0, o, b = y.now(), c = !1, l = !1, w, nt, h, tt, f = [], a, k = !0, d = "", v = "", g; u.getDay() !== r.dayOfWeekStart; )
                        u.setDate(u.getDate() - 1);
                    for (e += "<table><thead><tr>", r.weeks && (e += "<th><\/th>"), o = 0; o < 7; o += 1)
                        e += "<th>" + r.i18n[r.lang].dayOfWeek[(o + r.dayOfWeekStart) % 7] + "<\/th>";
                    for (e += "<\/tr><\/thead>", e += "<tbody>", r.maxDate !== !1 && (c = y.strToDate(r.maxDate), c = new Date(c.getFullYear(), c.getMonth(), c.getDate(), 23, 59, 59, 999)), r.minDate !== !1 && (l = y.strToDate(r.minDate), l = new Date(l.getFullYear(), l.getMonth(), l.getDate())); t < y.currentTime.countDaysInMonth() || u.getDay() !== r.dayOfWeekStart || y.currentTime.getMonth() === u.getMonth(); )
                        f = [], t += 1, w = u.getDate(), nt = u.getFullYear(), h = u.getMonth(), tt = y.getWeekOfYear(u), f.push("xdsoft_date"), a = r.beforeShowDay && n.isFunction(r.beforeShowDay.call) ? r.beforeShowDay.call(s, u) : null, c !== !1 && u > c || l !== !1 && u < l || a && a[0] === !1 ? f.push("xdsoft_disabled") : r.disabledDates.indexOf(u.dateFormat(r.formatDate)) !== -1 && f.push("xdsoft_disabled"), a && a[1] !== "" && f.push(a[1]), y.currentTime.getMonth() !== h && f.push("xdsoft_other_month"), (r.defaultSelect || s.data("changed")) && y.currentTime.dateFormat(r.formatDate) === u.dateFormat(r.formatDate) && f.push("xdsoft_current"), b.dateFormat(r.formatDate) === u.dateFormat(r.formatDate) && f.push("xdsoft_today"), (u.getDay() === 0 || u.getDay() === 6 || ~r.weekends.indexOf(u.dateFormat(r.formatDate))) && f.push("xdsoft_weekend"), r.beforeShowDay && n.isFunction(r.beforeShowDay) && f.push(r.beforeShowDay(u)), k && (e += "<tr>", k = !1, r.weeks && (e += "<th>" + tt + "<\/th>")), e += '<td data-date="' + w + '" data-month="' + h + '" data-year="' + nt + '" class="xdsoft_date xdsoft_day_of_week' + u.getDay() + " " + f.join(" ") + '"><div>' + w + "<\/div><\/td>", u.getDay() === r.dayOfWeekStartPrev && (e += "<\/tr>", k = !0), u.setDate(w + 1);
                    if (e += "<\/tbody><\/table>", pt.html(e), ot.find(".xdsoft_label span").eq(0).text(r.i18n[r.lang].months[y.currentTime.getMonth()]), ot.find(".xdsoft_label span").eq(1).text(y.currentTime.getFullYear()), d = "", v = "", h = "", g = function (n, t) {
                        var i = y.now(), e, u;
                        i.setHours(n);
                        n = parseInt(i.getHours(), 10);
                        i.setMinutes(t);
                        t = parseInt(i.getMinutes(), 10);
                        e = new Date(y.currentTime);
                        e.setHours(n);
                        e.setMinutes(t);
                        f = [];
                        (r.minDateTime !== !1 && r.minDateTime > e || r.maxTime !== !1 && y.strtotime(r.maxTime).getTime() < i.getTime() || r.minTime !== !1 && y.strtotime(r.minTime).getTime() > i.getTime()) && f.push("xdsoft_disabled");
                        u = new Date(y.currentTime);
                        u.setHours(parseInt(y.currentTime.getHours(), 10));
                        u.setMinutes(Math[r.roundTime](y.currentTime.getMinutes() / r.step) * r.step);
                        (r.initTime || r.defaultSelect || s.data("changed")) && u.getHours() === parseInt(n, 10) && (r.step > 59 || u.getMinutes() === parseInt(t, 10)) && (r.defaultSelect || s.data("changed") ? f.push("xdsoft_current") : r.initTime && f.push("xdsoft_init_time"));
                        parseInt(b.getHours(), 10) === parseInt(n, 10) && parseInt(b.getMinutes(), 10) === parseInt(t, 10) && f.push("xdsoft_today");
                        d += '<div class="xdsoft_time ' + f.join(" ") + '" data-hour="' + n + '" data-minute="' + t + '">' + i.dateFormat(r.formatTime) + "<\/div>"
                    }, r.allowTimes && n.isArray(r.allowTimes) && r.allowTimes.length)
                        for (t = 0; t < r.allowTimes.length; t += 1)
                            v = y.strtotime(r.allowTimes[t]).getHours(), h = y.strtotime(r.allowTimes[t]).getMinutes(), g(v, h);
                    else
                        for (t = 0, o = 0; t < (r.hours12?12:24); t += 1)
                            for (o = 0; o < 60; o += r.step)
                                v = (t < 10 ? "0" : "") + t, h = (o < 10 ? "0" : "") + o, g(v, h);
                    for (p.html(d), i = "", t = 0, t = parseInt(r.yearStart, 10) + r.yearOffset; t <= parseInt(r.yearEnd, 10) + r.yearOffset; t += 1)
                        i += '<div class="xdsoft_option ' + (y.currentTime.getFullYear() === t ? "xdsoft_current" : "") + '" data-value="' + t + '">' + t + "<\/div>";
                    for (kt.children().eq(0).html(i), t = parseInt(r.monthStart), i = ""; t <= parseInt(r.monthEnd); t += 1)
                        i += '<div class="xdsoft_option ' + (y.currentTime.getMonth() === t ? "xdsoft_current" : "") + '" data-value="' + t + '">' + r.i18n[r.lang].months[t] + "<\/div>";
                    bt.children().eq(0).html(i);
                    n(s).trigger("generate.xdsoft")
                }, 10);
                t.stopPropagation()
            }).on("afterOpen.xdsoft", function () {
                if (r.timepicker) {
                    var n, t, i, u;
                    p.find(".xdsoft_current").length ? n = ".xdsoft_current" : p.find(".xdsoft_init_time").length && (n = ".xdsoft_init_time");
                    n ? (t = st[0].clientHeight, i = p[0].offsetHeight, u = p.find(n).index() * r.timeHeightInTimePicker + 1, i - t < u && (u = i - t), st.trigger("scroll_element.xdsoft_scroller", [parseInt(u, 10) / (i - t)])) : st.trigger("scroll_element.xdsoft_scroller", [0])
                }
            });
            vt = 0;
            pt.on("click.xdsoft", "td", function (i) {
                i.stopPropagation();
                vt += 1;
                var f = n(this), u = y.currentTime;
                if ((u === undefined || u === null) && (y.currentTime = y.now(), u = y.currentTime), f.hasClass("xdsoft_disabled"))
                    return!1;
                u.setDate(1);
                u.setFullYear(f.data("year"));
                u.setMonth(f.data("month"));
                u.setDate(f.data("date"));
                s.trigger("select.xdsoft", [u]);
                t.val(y.str());
                (vt > 1 || r.closeOnDateSelect === !0 || r.closeOnDateSelect === 0 && !r.timepicker) && !r.inline && s.trigger("close.xdsoft");
                r.onSelectDate && n.isFunction(r.onSelectDate) && r.onSelectDate.call(s, y.currentTime, s.data("input"), i);
                s.data("changed", !0);
                s.trigger("xchange.xdsoft");
                s.trigger("changedatetime.xdsoft");
                setTimeout(function () {
                    vt = 0
                }, 200)
            });
            p.on("click.xdsoft", "div", function (t) {
                t.stopPropagation();
                var u = n(this), i = y.currentTime;
                if ((i === undefined || i === null) && (y.currentTime = y.now(), i = y.currentTime), u.hasClass("xdsoft_disabled"))
                    return!1;
                i.setHours(u.data("hour"));
                i.setMinutes(u.data("minute"));
                s.trigger("select.xdsoft", [i]);
                s.data("input").val(y.str());
                r.inline !== !0 && r.closeOnTimeSelect === !0 && s.trigger("close.xdsoft");
                r.onSelectTime && n.isFunction(r.onSelectTime) && r.onSelectTime.call(s, y.currentTime, s.data("input"), t);
                s.data("changed", !0);
                s.trigger("xchange.xdsoft");
                s.trigger("changedatetime.xdsoft")
            });
            ct.on("mousewheel.xdsoft", function (n) {
                return r.scrollMonth ? (n.deltaY < 0 ? y.nextMonth() : y.prevMonth(), !1) : !0
            });
            t.on("mousewheel.xdsoft", function (n) {
                return r.scrollInput ? !r.datepicker && r.timepicker ? (ht = p.find(".xdsoft_current").length ? p.find(".xdsoft_current").eq(0).index() : 0, ht + n.deltaY >= 0 && ht + n.deltaY < p.children().length && (ht += n.deltaY), p.children().eq(ht).length && p.children().eq(ht).trigger("mousedown"), !1) : r.datepicker && !r.timepicker ? (ct.trigger(n, [n.deltaY, n.deltaX, n.deltaY]), t.val && t.val(y.str()), s.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            });
            s.on("changedatetime.xdsoft", function (t) {
                if (r.onChangeDateTime && n.isFunction(r.onChangeDateTime)) {
                    var i = s.data("input");
                    r.onChangeDateTime.call(s, y.currentTime, i, t);
                    delete r.value;
                    i.trigger("change")
                }
            }).on("generate.xdsoft", function () {
                r.onGenerate && n.isFunction(r.onGenerate) && r.onGenerate.call(s, y.currentTime, s.data("input"));
                at && (s.trigger("afterOpen.xdsoft"), at = !1)
            }).on("click.xdsoft", function (n) {
                n.stopPropagation()
            });
            ht = 0;
            yt = function () {
                var u = s.data("input").offset(), t = u.top + s.data("input")[0].offsetHeight - 1, i = u.left, f = "absolute";
                r.fixed ? (t -= n(window).scrollTop(), i -= n(window).scrollLeft(), f = "fixed") : (t + s[0].offsetHeight > n(window).height() + n(window).scrollTop() && (t = u.top - s[0].offsetHeight + 1), t < 0 && (t = 0), i + s[0].offsetWidth > n(window).width() && (i = n(window).width() - s[0].offsetWidth));
                s.css({left: i, top: t, position: f})
            };
            s.on("open.xdsoft", function (t) {
                var i = !0;
                if (r.onShow && n.isFunction(r.onShow) && (i = r.onShow.call(s, y.currentTime, s.data("input"), t)), i !== !1) {
                    s.show();
                    yt();
                    n(window).off("resize.xdsoft", yt).on("resize.xdsoft", yt);
                    if (r.closeOnWithoutClick)
                        n([document.body, window]).on("mousedown.xdsoft", function u() {
                            s.trigger("close.xdsoft");
                            n([document.body, window]).off("mousedown.xdsoft", u)
                        })
                }
            }).on("close.xdsoft", function (t) {
                var i = !0;
                ot.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide();
                r.onClose && n.isFunction(r.onClose) && (i = r.onClose.call(s, y.currentTime, s.data("input"), t));
                i === !1 || r.opened || r.inline || s.hide();
                t.stopPropagation()
            }).on("toggle.xdsoft", function () {
                s.is(":visible") ? s.trigger("close.xdsoft") : s.trigger("open.xdsoft")
            }).data("input", t);
            gt = 0;
            ri = 0;
            s.data("xdsoft_datetime", y);
            s.setOptions(r);
            y.setCurrentTime(ni());
            t.data("xdsoft_datetimepicker", s).on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function () {
                t.is(":disabled") || t.data("xdsoft_datetimepicker").is(":visible") && r.closeOnInputClick || (clearTimeout(gt), gt = setTimeout(function () {
                    t.is(":disabled") || (at = !0, y.setCurrentTime(ni()), s.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function (t) {
                var f = this.value, i, u = t.which;
                return[a].indexOf(u) !== -1 && r.enterLikeTab ? (i = n("input:visible,textarea:visible"), s.trigger("close.xdsoft"), i.eq(i.index(this) + 1).focus(), !1) : [v].indexOf(u) !== -1 ? (s.trigger("close.xdsoft"), !0) : void 0
            })
        };
        p = function (t) {
            var i = t.data("xdsoft_datetimepicker");
            i && (i.data("xdsoft_datetime", null), i.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), n(window).off("resize.xdsoft"), n([window, document.body]).off("mousedown.xdsoft"), t.unmousewheel && t.unmousewheel())
        };
        n(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (n) {
            n.keyCode === e && (o = !0)
        }).on("keyup.xdsoftctrl", function (n) {
            n.keyCode === e && (o = !1)
        });
        return this.each(function () {
            var t = n(this).data("xdsoft_datetimepicker"), u;
            if (t) {
                if (n.type(i) === "string")
                    switch (i) {
                        case"show":
                            n(this).select().focus();
                            t.trigger("open.xdsoft");
                            break;
                        case"hide":
                            t.trigger("close.xdsoft");
                            break;
                        case"toggle":
                            t.trigger("toggle.xdsoft");
                            break;
                        case"destroy":
                            p(n(this));
                            break;
                        case"reset":
                            this.value = this.defaultValue;
                            this.value && t.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value, r.format)) || t.data("changed", !1);
                            t.data("xdsoft_datetime").setCurrentTime(this.value);
                            break;
                        case"validate":
                            u = t.data("input");
                            u.trigger("blur.xdsoft")
                    }
                else
                    t.setOptions(i);
                return 0
            }
            n.type(i) !== "string" && (!r.lazyInit || r.open || r.inline ? s(n(this)) : ot(n(this)))
        })
    };
    n.fn.datetimepicker.defaults = t
}(jQuery), function () {
    !function (n) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n : n(jQuery)
    }(function (n) {
        function u(r) {
            var u = r || window.event, w = c.call(arguments, 1), l = 0, s = 0, e = 0, a = 0, b = 0, k = 0, v, y, p;
            if (r = n.event.fix(u), r.type = "mousewheel", "detail"in u && (e = -1 * u.detail), "wheelDelta"in u && (e = u.wheelDelta), "wheelDeltaY"in u && (e = u.wheelDeltaY), "wheelDeltaX"in u && (s = -1 * u.wheelDeltaX), "axis"in u && u.axis === u.HORIZONTAL_AXIS && (s = -1 * e, e = 0), l = 0 === e ? s : e, "deltaY"in u && (e = -1 * u.deltaY, l = e), "deltaX"in u && (s = u.deltaX, 0 === e && (l = -1 * s)), 0 !== e || 0 !== s)
                return 1 === u.deltaMode ? (v = n.data(this, "mousewheel-line-height"), l *= v, e *= v, s *= v) : 2 === u.deltaMode && (y = n.data(this, "mousewheel-page-height"), l *= y, e *= y, s *= y), (a = Math.max(Math.abs(e), Math.abs(s)), (!t || t > a) && (t = a, o(u, a) && (t /= 40)), o(u, a) && (l /= 40, s /= 40, e /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / t), s = Math[s >= 1 ? "floor" : "ceil"](s / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), i.settings.normalizeOffset && this.getBoundingClientRect) && (p = this.getBoundingClientRect(), b = r.clientX - p.left, k = r.clientY - p.top), r.deltaX = s, r.deltaY = e, r.deltaFactor = t, r.offsetX = b, r.offsetY = k, r.deltaMode = 0, w.unshift(r, l, s, e), f && clearTimeout(f), f = setTimeout(h, 200), (n.event.dispatch || n.event.handle).apply(this, w)
        }
        function h() {
            t = null
        }
        function o(n, t) {
            return i.settings.adjustOldDeltas && "mousewheel" === n.type && t % 120 == 0
        }
        var f, t, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], r = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice, e, i;
        if (n.event.fixHooks)
            for (e = s.length; e; )
                n.event.fixHooks[s[--e]] = n.event.mouseHooks;
        i = n.event.special.mousewheel = {version: "3.1.12", setup: function () {
                if (this.addEventListener)
                    for (var t = r.length; t; )
                        this.addEventListener(r[--t], u, !1);
                else
                    this.onmousewheel = u;
                n.data(this, "mousewheel-line-height", i.getLineHeight(this));
                n.data(this, "mousewheel-page-height", i.getPageHeight(this))
            }, teardown: function () {
                if (this.removeEventListener)
                    for (var t = r.length; t; )
                        this.removeEventListener(r[--t], u, !1);
                else
                    this.onmousewheel = null;
                n.removeData(this, "mousewheel-line-height");
                n.removeData(this, "mousewheel-page-height")
            }, getLineHeight: function (t) {
                var r = n(t), i = r["offsetParent"in n.fn ? "offsetParent" : "parent"]();
                return i.length || (i = n("body")), parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
            }, getPageHeight: function (t) {
                return n(t).height()
            }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}};
        n.fn.extend({mousewheel: function (n) {
                return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
            }, unmousewheel: function (n) {
                return this.unbind("mousewheel", n)
            }})
    });
    Date.parseFunctions = {count: 0};
    Date.parseRegexes = [];
    Date.formatFunctions = {count: 0};
    Date.prototype.dateFormat = function (n) {
        if (n == "unixtime")
            return parseInt(this.getTime() / 1e3);
        Date.formatFunctions[n] == null && Date.createNewFormat(n);
        var t = Date.formatFunctions[n];
        return this[t]()
    };
    Date.createNewFormat = function (format) {
        var funcName = "format" + Date.formatFunctions.count++, i;
        Date.formatFunctions[format] = funcName;
        var codePrefix = "Date.prototype." + funcName + " = function() {return ", code = "", special = !1, ch = "";
        for (i = 0; i < format.length; ++i)
            ch = format.charAt(i), special || ch != "\\" ? special ? (special = !1, code += "'" + String.escape(ch) + "' + ") : code += Date.getFormatCode(ch) : special = !0;
        code = code.length == 0 ? '""' : code.substring(0, code.length - 3);
        eval(codePrefix + code + ";}")
    };
    Date.getFormatCode = function (n) {
        switch (n) {
            case"d":
                return"String.leftPad(this.getDate(), 2, '0') + ";
            case"D":
                return"Date.dayNames[this.getDay()].substring(0, 3) + ";
            case"j":
                return"this.getDate() + ";
            case"l":
                return"Date.dayNames[this.getDay()] + ";
            case"S":
                return"this.getSuffix() + ";
            case"w":
                return"this.getDay() + ";
            case"z":
                return"this.getDayOfYear() + ";
            case"W":
                return"this.getWeekOfYear() + ";
            case"F":
                return"Date.monthNames[this.getMonth()] + ";
            case"m":
                return"String.leftPad(this.getMonth() + 1, 2, '0') + ";
            case"M":
                return"Date.monthNames[this.getMonth()].substring(0, 3) + ";
            case"n":
                return"(this.getMonth() + 1) + ";
            case"t":
                return"this.getDaysInMonth() + ";
            case"L":
                return"(this.isLeapYear() ? 1 : 0) + ";
            case"Y":
                return"this.getFullYear() + ";
            case"y":
                return"('' + this.getFullYear()).substring(2, 4) + ";
            case"a":
                return"(this.getHours() < 12 ? 'am' : 'pm') + ";
            case"A":
                return"(this.getHours() < 12 ? 'AM' : 'PM') + ";
            case"g":
                return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
            case"G":
                return"this.getHours() + ";
            case"h":
                return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
            case"H":
                return"String.leftPad(this.getHours(), 2, '0') + ";
            case"i":
                return"String.leftPad(this.getMinutes(), 2, '0') + ";
            case"s":
                return"String.leftPad(this.getSeconds(), 2, '0') + ";
            case"O":
                return"this.getGMTOffset() + ";
            case"T":
                return"this.getTimezone() + ";
            case"Z":
                return"(this.getTimezoneOffset() * -60) + ";
            default:
                return"'" + String.escape(n) + "' + "
        }
    };
    Date.parseDate = function (n, t) {
        if (t == "unixtime")
            return new Date(isNaN(parseInt(n)) ? 0 : parseInt(n) * 1e3);
        Date.parseFunctions[t] == null && Date.createParser(t);
        var i = Date.parseFunctions[t];
        return Date[i](n)
    };
    Date.createParser = function (format) {
        var funcName = "parse" + Date.parseFunctions.count++, regexNum = Date.parseRegexes.length, currentGroup = 1, i;
        Date.parseFunctions[format] = funcName;
        var code = "Date." + funcName + " = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes[" + regexNum + "]);\nif (results && results.length > 0) {", regex = "", special = !1, ch = "";
        for (i = 0; i < format.length; ++i)
            ch = format.charAt(i), special || ch != "\\" ? special ? (special = !1, regex += String.escape(ch)) : (obj = Date.formatCodeToRegex(ch, currentGroup), currentGroup += obj.g, regex += obj.s, obj.g && obj.c && (code += obj.c)) : special = !0;
        code += "if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";
        code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";
        Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$", "i");
        eval(code)
    };
    Date.formatCodeToRegex = function (n, t) {
        switch (n) {
            case"D":
                return{g: 0, c: null, s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};
            case"j":
            case"d":
                return{g: 1, c: "d = parseInt(results[" + t + "], 10);\n", s: "(\\d{1,2})"};
            case"l":
                return{g: 0, c: null, s: "(?:" + Date.dayNames.join("|") + ")"};
            case"S":
                return{g: 0, c: null, s: "(?:st|nd|rd|th)"};
            case"w":
                return{g: 0, c: null, s: "\\d"};
            case"z":
                return{g: 1, c: "z = parseInt(results[" + t + "], 10);\n", s: "(\\d{1,3})"};
            case"W":
                return{g: 0, c: null, s: "(?:\\d{2})"};
            case"F":
                return{g: 1, c: "m = parseInt(Date.monthNumbers[results[" + t + "].substring(0, 3)], 10);\n", s: "(" + Date.monthNames.join("|") + ")"};
            case"M":
                return{g: 1, c: "m = parseInt(Date.monthNumbers[results[" + t + "]], 10);\n", s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};
            case"n":
            case"m":
                return{g: 1, c: "m = parseInt(results[" + t + "], 10) - 1;\n", s: "(\\d{1,2})"};
            case"t":
                return{g: 0, c: null, s: "\\d{1,2}"};
            case"L":
                return{g: 0, c: null, s: "(?:1|0)"};
            case"Y":
                return{g: 1, c: "y = parseInt(results[" + t + "], 10);\n", s: "(\\d{4})"};
            case"y":
                return{g: 1, c: "var ty = parseInt(results[" + t + "], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n", s: "(\\d{1,2})"};
            case"a":
                return{g: 1, c: "if (results[" + t + "] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}", s: "(am|pm)"};
            case"A":
                return{g: 1, c: "if (results[" + t + "] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}", s: "(AM|PM)"};
            case"g":
            case"G":
            case"h":
            case"H":
                return{g: 1, c: "h = parseInt(results[" + t + "], 10);\n", s: "(\\d{1,2})"};
            case"i":
                return{g: 1, c: "i = parseInt(results[" + t + "], 10);\n", s: "(\\d{2})"};
            case"s":
                return{g: 1, c: "s = parseInt(results[" + t + "], 10);\n", s: "(\\d{2})"};
            case"O":
                return{g: 0, c: null, s: "[+-]\\d{4}"};
            case"T":
                return{g: 0, c: null, s: "[A-Z]{3}"};
            case"Z":
                return{g: 0, c: null, s: "[+-]\\d{1,5}"};
            default:
                return{g: 0, c: null, s: String.escape(n)}
        }
    };
    Date.prototype.getTimezone = function () {
        return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3")
    };
    Date.prototype.getGMTOffset = function () {
        return(this.getTimezoneOffset() > 0 ? "-" : "+") + String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset()) / 60), 2, "0") + String.leftPad(Math.abs(this.getTimezoneOffset()) % 60, 2, "0")
    };
    Date.prototype.getDayOfYear = function () {
        var t = 0, n;
        for (Date.daysInMonth[1] = this.isLeapYear()?29:28, n = 0; n < this.getMonth(); ++n)
            t += Date.daysInMonth[n];
        return t + this.getDate()
    };
    Date.prototype.getWeekOfYear = function () {
        var n = this.getDayOfYear() + (4 - this.getDay()), t = new Date(this.getFullYear(), 0, 1), i = 11 - t.getDay();
        return String.leftPad(Math.ceil((n - i) / 7) + 1, 2, "0")
    };
    Date.prototype.isLeapYear = function () {
        var n = this.getFullYear();
        return(n & 3) == 0 && (n % 100 || n % 400 == 0 && n)
    };
    Date.prototype.getFirstDayOfMonth = function () {
        var n = (this.getDay() - (this.getDate() - 1)) % 7;
        return n < 0 ? n + 7 : n
    };
    Date.prototype.getLastDayOfMonth = function () {
        var n = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
        return n < 0 ? n + 7 : n
    };
    Date.prototype.getDaysInMonth = function () {
        return Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28, Date.daysInMonth[this.getMonth()]
    };
    Date.prototype.getSuffix = function () {
        switch (this.getDate()) {
            case 1:
            case 21:
            case 31:
                return"st";
            case 2:
            case 22:
                return"nd";
            case 3:
            case 23:
                return"rd";
            default:
                return"th"
        }
    };
    String.escape = function (n) {
        return n.replace(/('|\\)/g, "\\$1")
    };
    String.leftPad = function (n, t, i) {
        var r = new String(n);
        for (i == null && (i = " "); r.length < t; )
            r = i + r;
        return r
    };
    Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Date.y2kYear = 50;
    Date.monthNumbers = {Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11};
    Date.patterns = {ISO8601LongPattern: "Y-m-d H:i:s", ISO8601ShortPattern: "Y-m-d", ShortDatePattern: "n/j/Y", LongDatePattern: "l, F d, Y", FullDateTimePattern: "l, F d, Y g:i:s A", MonthDayPattern: "F d", ShortTimePattern: "g:i A", LongTimePattern: "g:i:s A", SortableDateTimePattern: "Y-m-d\\TH:i:s", UniversalSortableDateTimePattern: "Y-m-d H:i:sO", YearMonthPattern: "F, Y"}
}();
dateFormat = function () {
    var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, i = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, r = /[^-+\dA-Z]/g, n = function (n, t) {
        for (n = String(n), t = t || 2; n.length < t; )
            n = "0" + n;
        return n
    };
    return function (u, f, e) {
        var h = dateFormat;
        if (arguments.length != 1 || Object.prototype.toString.call(u) != "[object String]" || /\d/.test(u) || (f = u, u = undefined), u = u ? new Date(u) : new Date, isNaN(u))
            throw SyntaxError("invalid date");
        f = String(h.masks[f] || f || h.masks["default"]);
        f.slice(0, 4) == "UTC:" && (f = f.slice(4), e = !0);
        var o = e ? "getUTC" : "get", c = u[o + "Date"](), y = u[o + "Day"](), l = u[o + "Month"](), p = u[o + "FullYear"](), s = u[o + "Hours"](), w = u[o + "Minutes"](), b = u[o + "Seconds"](), a = u[o + "Milliseconds"](), v = e ? 0 : u.getTimezoneOffset(), k = {d: c, dd: n(c), ddd: h.i18n.dayNames[y], dddd: h.i18n.dayNames[y + 7], m: l + 1, mm: n(l + 1), mmm: h.i18n.monthNames[l], mmmm: h.i18n.monthNames[l + 12], yy: String(p).slice(2), yyyy: p, h: s % 12 || 12, hh: n(s % 12 || 12), H: s, HH: n(s), M: w, MM: n(w), s: b, ss: n(b), l: n(a, 3), L: n(a > 99 ? Math.round(a / 10) : a), t: s < 12 ? "a" : "p", tt: s < 12 ? "am" : "pm", T: s < 12 ? "A" : "P", TT: s < 12 ? "AM" : "PM", Z: e ? "UTC" : (String(u).match(i) || [""]).pop().replace(r, ""), o: (v > 0 ? "-" : "+") + n(Math.floor(Math.abs(v) / 60) * 100 + Math.abs(v) % 60, 4), S: ["th", "st", "nd", "rd"][c % 10 > 3 ? 0 : (c % 100 - c % 10 != 10) * c % 10]};
        return f.replace(t, function (n) {
            return n in k ? k[n] : n.slice(1, n.length - 1)
        })
    }
}();
dateFormat.masks = {"default": "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:ss", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};
dateFormat.i18n = {dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]};
Date.prototype.format = function (n, t) {
    return dateFormat(this, n, t)
}, function (n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(typeof jQuery != "undefined" ? jQuery : window.Zepto)
}(function (n) {
    "use strict";
    function u(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), n(t.target).ajaxSubmit(i))
    }
    function f(t) {
        var r = t.target, u = n(r), f, i, e;
        if (!u.is("[type=submit],[type=image]")) {
            if (f = u.closest("[type=submit]"), f.length === 0)
                return;
            r = f[0]
        }
        i = this;
        i.clk = r;
        r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop));
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }
    function t() {
        if (n.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {}, r;
    i.fileapi = n("<input type='file'/>").get(0).files !== undefined;
    i.formdata = window.FormData !== undefined;
    r = !!n.fn.prop;
    n.fn.attr2 = function () {
        if (!r)
            return this.attr.apply(this, arguments);
        var n = this.prop.apply(this, arguments);
        return n && n.jquery || typeof n == "string" ? n : this.attr.apply(this, arguments)
    };
    n.fn.ajaxSubmit = function (u) {
        function ot(t) {
            for (var r = n.param(t, u.traditional).split("&"), o = r.length, e = [], f, i = 0; i < o; i++)
                r[i] = r[i].replace(/\+/g, " "), f = r[i].split("="), e.push([decodeURIComponent(f[0]), decodeURIComponent(f[1])]);
            return e
        }
        function st(t) {
            for (var f, r, s, o = new FormData, i = 0; i < t.length; i++)
                o.append(t[i].name, t[i].value);
            if (u.extraData)
                for (f = ot(u.extraData), i = 0; i < f.length; i++)
                    f[i] && o.append(f[i][0], f[i][1]);
            return u.data = null, r = n.extend(!0, {}, n.ajaxSettings, u, {contentType: !1, processData: !1, cache: !1, type: e || "POST"}), u.uploadProgress && (r.xhr = function () {
                var t = n.ajaxSettings.xhr();
                return t.upload && t.upload.addEventListener("progress", function (n) {
                    var t = 0, i = n.loaded || n.position, r = n.total;
                    n.lengthComputable && (t = Math.ceil(i / r * 100));
                    u.uploadProgress(n, i, r, t)
                }, !1), t
            }), r.data = null, s = r.beforeSend, r.beforeSend = function (n, t) {
                t.data = u.formData ? u.formData : o;
                s && s.call(this, n, t)
            }, n.ajax(r)
        }
        function ft(i) {
            function ot(n) {
                var i = null;
                try {
                    n.contentWindow && (i = n.contentWindow.document)
                } catch (r) {
                    t("cannot get iframe.contentWindow document: " + r)
                }
                if (i)
                    return i;
                try {
                    i = n.contentDocument ? n.contentDocument : n.document
                } catch (r) {
                    t("cannot get iframe.contentDocument: " + r);
                    i = n.document
                }
                return i
            }
            function st() {
                function h() {
                    try {
                        var n = ot(a).readyState;
                        t("state = " + n);
                        n && n.toLowerCase() == "uninitialized" && setTimeout(h, 50)
                    } catch (i) {
                        t("Server abort: ", i, " (", i.name, ")");
                        b(tt);
                        g && clearTimeout(g);
                        g = undefined
                    }
                }
                var u = f.attr2("target"), s = f.attr2("action"), y = f.attr("enctype") || f.attr("encoding") || "multipart/form-data", r, i, c;
                l.setAttribute("target", d);
                (!e || /post/i.test(e)) && l.setAttribute("method", "POST");
                s != o.url && l.setAttribute("action", o.url);
                o.skipEncodingOverride || e && !/post/i.test(e) || f.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"});
                o.timeout && (g = setTimeout(function () {
                    rt = !0;
                    b(ut)
                }, o.timeout));
                r = [];
                try {
                    if (o.extraData)
                        for (i in o.extraData)
                            o.extraData.hasOwnProperty(i) && (n.isPlainObject(o.extraData[i]) && o.extraData[i].hasOwnProperty("name") && o.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + o.extraData[i].name + '">').val(o.extraData[i].value).appendTo(l)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(o.extraData[i]).appendTo(l)[0]));
                    o.iframeTarget || v.appendTo("body");
                    a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener("load", b, !1);
                    setTimeout(h, 15);
                    try {
                        l.submit()
                    } catch (p) {
                        c = document.createElement("form").submit;
                        c.apply(l)
                    }
                } finally {
                    l.setAttribute("action", s);
                    l.setAttribute("enctype", y);
                    u ? l.setAttribute("target", u) : f.removeAttr("target");
                    n(r).remove()
                }
            }
            function b(i) {
                var r, u, w, f, k, d, e, c, l;
                if (!s.aborted && !lt) {
                    if (h = ot(a), h || (t("cannot access response document"), i = tt), i === ut && s) {
                        s.abort("timeout");
                        y.reject(s, "timeout");
                        return
                    }
                    if (i == tt && s) {
                        s.abort("server abort");
                        y.reject(s, "error", "server abort");
                        return
                    }
                    if (h && h.location.href != o.iframeSrc || rt) {
                        a.detachEvent ? a.detachEvent("onload", b) : a.removeEventListener("load", b, !1);
                        r = "success";
                        try {
                            if (rt)
                                throw"timeout";
                            if (w = o.dataType == "xml" || h.XMLDocument || n.isXMLDoc(h), t("isXml=" + w), !w && window.opera && (h.body === null || !h.body.innerHTML) && --ct) {
                                t("requeing onLoad callback, DOM not available");
                                setTimeout(b, 250);
                                return
                            }
                            f = h.body ? h.body : h.documentElement;
                            s.responseText = f ? f.innerHTML : null;
                            s.responseXML = h.XMLDocument ? h.XMLDocument : h;
                            w && (o.dataType = "xml");
                            s.getResponseHeader = function (n) {
                                var t = {"content-type": o.dataType};
                                return t[n.toLowerCase()]
                            };
                            f && (s.status = Number(f.getAttribute("status")) || s.status, s.statusText = f.getAttribute("statusText") || s.statusText);
                            k = (o.dataType || "").toLowerCase();
                            d = /(json|script|text)/.test(k);
                            d || o.textarea ? (e = h.getElementsByTagName("textarea")[0], e ? (s.responseText = e.value, s.status = Number(e.getAttribute("status")) || s.status, s.statusText = e.getAttribute("statusText") || s.statusText) : d && (c = h.getElementsByTagName("pre")[0], l = h.getElementsByTagName("body")[0], c ? s.responseText = c.textContent ? c.textContent : c.innerText : l && (s.responseText = l.textContent ? l.textContent : l.innerText))) : k == "xml" && !s.responseXML && s.responseText && (s.responseXML = at(s.responseText));
                            try {
                                ht = yt(s, k, o)
                            } catch (nt) {
                                r = "parsererror";
                                s.error = u = nt || r
                            }
                        } catch (nt) {
                            t("error caught: ", nt);
                            r = "error";
                            s.error = u = nt || r
                        }
                        s.aborted && (t("upload aborted"), r = null);
                        s.status && (r = s.status >= 200 && s.status < 300 || s.status === 304 ? "success" : "error");
                        r === "success" ? (o.success && o.success.call(o.context, ht, "success", s), y.resolve(s.responseText, "success", s), p && n.event.trigger("ajaxSuccess", [s, o])) : r && (u === undefined && (u = s.statusText), o.error && o.error.call(o.context, s, r, u), y.reject(s, "error", u), p && n.event.trigger("ajaxError", [s, o, u]));
                        p && n.event.trigger("ajaxComplete", [s, o]);
                        p && !--n.active && n.event.trigger("ajaxStop");
                        o.complete && o.complete.call(o.context, s, r);
                        lt = !0;
                        o.timeout && clearTimeout(g);
                        setTimeout(function () {
                            o.iframeTarget ? v.attr("src", o.iframeSrc) : v.remove();
                            s.responseXML = null
                        }, 100)
                    }
                }
            }
            var l = f[0], it, nt, o, p, d, v, a, s, k, w, rt, g, y = n.Deferred(), ut, tt, ft, et, ht, h, ct, lt;
            if (y.abort = function (n) {
                s.abort(n)
            }, i)
                for (nt = 0; nt < c.length; nt++)
                    it = n(c[nt]), r ? it.prop("disabled", !1) : it.removeAttr("disabled");
            if (o = n.extend(!0, {}, n.ajaxSettings, u), o.context = o.context || o, d = "jqFormIO" + (new Date).getTime(), o.iframeTarget ? (v = n(o.iframeTarget), w = v.attr2("name"), w ? d = w : v.attr2("name", d)) : (v = n('<iframe name="' + d + '" src="' + o.iframeSrc + '" />'), v.css({position: "absolute", top: "-1000px", left: "-1000px"})), a = v[0], s = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () {
                }, getResponseHeader: function () {
                }, setRequestHeader: function () {
                }, abort: function (i) {
                    var r = i === "timeout" ? "timeout" : "aborted";
                    t("aborting upload... " + r);
                    this.aborted = 1;
                    try {
                        a.contentWindow.document.execCommand && a.contentWindow.document.execCommand("Stop")
                    } catch (u) {
                    }
                    v.attr("src", o.iframeSrc);
                    s.error = r;
                    o.error && o.error.call(o.context, s, r, i);
                    p && n.event.trigger("ajaxError", [s, o, r]);
                    o.complete && o.complete.call(o.context, s, r)
                }}, p = o.global, p && 0 == n.active++ && n.event.trigger("ajaxStart"), p && n.event.trigger("ajaxSend", [s, o]), o.beforeSend && o.beforeSend.call(o.context, s, o) === !1)
                return o.global && n.active--, y.reject(), y;
            if (s.aborted)
                return y.reject(), y;
            k = l.clk;
            k && (w = k.name, w && !k.disabled && (o.extraData = o.extraData || {}, o.extraData[w] = k.value, k.type == "image" && (o.extraData[w + ".x"] = l.clk_x, o.extraData[w + ".y"] = l.clk_y)));
            ut = 1;
            tt = 2;
            ft = n("meta[name=csrf-token]").attr("content");
            et = n("meta[name=csrf-param]").attr("content");
            et && ft && (o.extraData = o.extraData || {}, o.extraData[et] = ft);
            o.forceSync ? st() : setTimeout(st, 10);
            ct = 50;
            var at = n.parseXML || function (n, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
            }, vt = n.parseJSON || function (s) {
                return window.eval("(" + s + ")")
            }, yt = function (t, i, r) {
                var f = t.getResponseHeader("content-type") || "", e = i === "xml" || !i && f.indexOf("xml") >= 0, u = e ? t.responseXML : t.responseText;
                return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = vt(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u
            };
            return y
        }
        var e, b, o, f, a, v, c, y, s, l, h, d, g, nt, ut, p, w;
        if (!this.length)
            return t("ajaxSubmit: skipping submit process - no element selected"), this;
        if (f = this, typeof u == "function" ? u = {success: u} : u === undefined && (u = {}), e = u.type || this.attr2("method"), b = u.url || this.attr2("action"), o = typeof b == "string" ? n.trim(b) : "", o = o || window.location.href || "", o && (o = (o.match(/^([^#]+)/) || [])[1]), u = n.extend(!0, {url: o, success: n.ajaxSettings.success, type: e || n.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, u), a = {}, this.trigger("form-pre-serialize", [this, u, a]), a.veto)
            return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (u.beforeSerialize && u.beforeSerialize(this, u) === !1)
            return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        if (v = u.traditional, v === undefined && (v = n.ajaxSettings.traditional), c = [], s = this.formToArray(u.semantic, c), u.data && (u.extraData = u.data, y = n.param(u.data, v)), u.beforeSubmit && u.beforeSubmit(s, this, u) === !1)
            return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [s, this, u, a]), a.veto)
            return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        l = n.param(s, v);
        y && (l = l ? l + "&" + y : y);
        u.type.toUpperCase() == "GET" ? (u.url += (u.url.indexOf("?") >= 0 ? "&" : "?") + l, u.data = null) : u.data = l;
        h = [];
        u.resetForm && h.push(function () {
            f.resetForm()
        });
        u.clearForm && h.push(function () {
            f.clearForm(u.includeHidden)
        });
        !u.dataType && u.target ? (d = u.success || function () {
        }, h.push(function (t) {
            var i = u.replaceTarget ? "replaceWith" : "html";
            n(u.target)[i](t).each(d, arguments)
        })) : u.success && h.push(u.success);
        u.success = function (n, t, i) {
            for (var e = u.context || this, r = 0, o = h.length; r < o; r++)
                h[r].apply(e, [n, t, i || f, f])
        };
        u.error && (g = u.error, u.error = function (n, t, i) {
            var r = u.context || this;
            g.apply(r, [n, t, i, f])
        });
        u.complete && (nt = u.complete, u.complete = function (n, t) {
            var i = u.context || this;
            nt.apply(i, [n, t, f])
        });
        var et = n("input[type=file]:enabled", this).filter(function () {
            return n(this).val() !== ""
        }), tt = et.length > 0, it = "multipart/form-data", rt = f.attr("enctype") == it || f.attr("encoding") == it, k = i.fileapi && i.formdata;
        for (t("fileAPI :" + k), ut = (tt || rt) && !k, u.iframe !== !1 && (u.iframe || ut)?u.closeKeepAlive?n.get(u.closeKeepAlive, function () {
            p = ft(s)
        }):p = ft(s):p = (tt || rt) && k?st(s):n.ajax(u), f.removeData("jqxhr").data("jqxhr", p), w = 0; w < c.length; w++)
            c[w] = null;
        return this.trigger("form-submit-notify", [this, u]), this
    };
    n.fn.ajaxForm = function (i) {
        if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && this.length === 0) {
            var r = {s: this.selector, c: this.context};
            return!n.isReady && r.s ? (t("DOM not ready, queuing ajaxForm"), n(function () {
                n(r.s, r.c).ajaxForm(i)
            }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this)
        }
        if (i.delegation) {
            n(document).off("submit.form-plugin", this.selector, u).off("click.form-plugin", this.selector, f).on("submit.form-plugin", this.selector, i, u).on("click.form-plugin", this.selector, i, f);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", i, u).bind("click.form-plugin", i, f)
    };
    n.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    n.fn.formToArray = function (t, r) {
        var e = [], l, h, f, c, u, b, k, a, p, v;
        if (this.length === 0)
            return e;
        var o = this[0], w = this.attr("id"), s = t ? o.getElementsByTagName("*") : o.elements, y;
        if (s && !/MSIE [678]/.test(navigator.userAgent) && (s = n(s).get()), w && (y = n(':input[form="' + w + '"]').get(), y.length && (s = (s || []).concat(y))), !s || !s.length)
            return e;
        for (l = 0, b = s.length; l < b; l++)
            if (u = s[l], f = u.name, f && !u.disabled) {
                if (t && o.clk && u.type == "image") {
                    o.clk == u && (e.push({name: f, value: n(u).val(), type: u.type}), e.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}));
                    continue
                }
                if (c = n.fieldValue(u, !0), c && c.constructor == Array)
                    for (r && r.push(u), h = 0, k = c.length; h < k; h++)
                        e.push({name: f, value: c[h]});
                else if (i.fileapi && u.type == "file")
                    if (r && r.push(u), a = u.files, a.length)
                        for (h = 0; h < a.length; h++)
                            e.push({name: f, value: a[h], type: u.type});
                    else
                        e.push({name: f, value: "", type: u.type});
                else
                    c !== null && typeof c != "undefined" && (r && r.push(u), e.push({name: f, value: c, type: u.type, required: u.required}))
            }
        return!t && o.clk && (p = n(o.clk), v = p[0], f = v.name, f && !v.disabled && v.type == "image" && (e.push({name: f, value: p.val()}), e.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))), e
    };
    n.fn.formSerialize = function (t) {
        return n.param(this.formToArray(t))
    };
    n.fn.fieldSerialize = function (t) {
        var i = [];
        return this.each(function () {
            var f = this.name, r, u, e;
            if (f)
                if (r = n.fieldValue(this, t), r && r.constructor == Array)
                    for (u = 0, e = r.length; u < e; u++)
                        i.push({name: f, value: r[u]});
                else
                    r !== null && typeof r != "undefined" && i.push({name: this.name, value: r})
        }), n.param(i)
    };
    n.fn.fieldValue = function (t) {
        for (var f, i, r = [], u = 0, e = this.length; u < e; u++)
            (f = this[u], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
        return r
    };
    n.fieldValue = function (t, i) {
        var a = t.name, u = t.type, h = t.tagName.toLowerCase(), e, o, r, f;
        if (i === undefined && (i = !0), i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1))
            return null;
        if (h == "select") {
            if (e = t.selectedIndex, e < 0)
                return null;
            var c = [], l = t.options, s = u == "select-one", v = s ? e + 1 : l.length;
            for (o = s?e:0; o < v; o++)
                if (r = l[o], r.selected) {
                    if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), s)
                        return f;
                    c.push(f)
                }
            return c
        }
        return n(t).val()
    };
    n.fn.clearForm = function (t) {
        return this.each(function () {
            n("input,select,textarea", this).clearFields(t)
        })
    };
    n.fn.clearFields = n.fn.clearInputs = function (t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var r = this.type, u = this.tagName.toLowerCase();
            i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : r == "file" ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone(!0)) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "")
        })
    };
    n.fn.resetForm = function () {
        return this.each(function () {
            typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
        })
    };
    n.fn.enable = function (n) {
        return n === undefined && (n = !0), this.each(function () {
            this.disabled = !n
        })
    };
    n.fn.selected = function (t) {
        return t === undefined && (t = !0), this.each(function () {
            var r = this.type, i;
            r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"), t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1), this.selected = t)
        })
    };
    n.fn.ajaxSubmit.debug = !1
})