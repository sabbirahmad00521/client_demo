(function(e) {
    "use strict";

    function o() {}

    function n(e, o, n) {
        var t, i, l, a = null,
            d = 0;
        n || (n = {});
        var s = function() {
            d = n.leading === !1 ? 0 : (new Date).getTime(), a = null, l = e.apply(t, i), a || (t = i = null)
        };
        return function() {
            var r = (new Date).getTime();
            d || n.leading !== !1 || (d = r);
            var c = o - (r - d);
            return t = this, i = arguments, c <= 0 || c > o ? (clearTimeout(a), a = null, d = r, l = e.apply(t, i), a || (t = i = null)) : a || n.trailing === !1 || (a = setTimeout(s, c)), l
        }
    }

    function t() {
        var e = this.isLabelMode,
            o = this.config.searchable,
            n = o ? '<span class="dropdown-search">' + this.config.input + "</span>" : "";
        return e ? '<div class="dropdown-display-label"><div class="dropdown-chose-list">' + n + '</div></div><div class="dropdown-main">{{ul}}</div>' : '<a href="javascript:;" class="dropdown-display" tabindex="0"><span class="dropdown-chose-list"></span><a href="javascript:;"  class="dropdown-clear-all" tabindex="0">×</a></a><div class="dropdown-main">' + n + "{{ul}}</div>"
    }

    function i() {
        var o = this,
            n = o.config,
            t = o.$el,
            i = t.find(".dropdown-minItem-alert"),
            l = n.minCountErrorMessage;
        clearTimeout(o.itemCountAlertTimer), 0 === i.length && (l || (l = "minimum item " + n.minCount + "个"), i = e('<div class="dropdown-minItem-alert">' + l + "</div>")), t.append(i), o.itemCountAlertTimer = setTimeout(function() {
            t.find(".dropdown-minItem-alert").remove()
        }, f)
    }

    function l() {
        var o = this,
            n = o.config,
            t = o.$el,
            i = t.find(".dropdown-maxItem-alert"),
            l = n.limitCountErrorMessage;
        clearTimeout(o.itemLimitAlertTimer), 0 === i.length && (l || (l = "maximum item" + n.limitCount + "个"), i = e('<div class="dropdown-maxItem-alert">' + l + "</div>")), t.append(i), o.itemLimitAlertTimer = setTimeout(function() {
            t.find(".dropdown-maxItem-alert").remove()
        }, f)
    }

    function a(o) {
        var n = o || "";
        return n = n.replace(/<select[^>]*>/gi, "").replace("</select>", ""), n = n.replace(/<\/optgroup>/gi, ""), n = n.replace(/<optgroup[^>]*>/gi, function(e) {
            var o = /label="(.[^"]*)"(\s|>)/.exec(e),
                n = /data\-group\-id="(.[^"]*)"(\s|>)/.exec(e);
            return '<li class="dropdown-group" data-group-id="' + (n ? n[1] : "") + '">' + (o ? o[1] : "") + "</li>"
        }), n = n.replace(/<option(.*?)<\/option>/gi, function(o) {
            var n = e(o).val(),
                t = />(.*)<\//.exec(o),
                i = o.indexOf("selected") > -1,
                l = o.indexOf("disabled") > -1,
                a = "";
            o.replace(/data-(\w+)="?(.[^"]+)"?/g, function(e) {
                a += e + " "
            });
            return "<li " + (l ? " disabled" : ' tabindex="0"') + ' data-value="' + (n || "") + '" class="dropdown-option ' + (i ? "dropdown-chose" : "") + '" ' + a + ">" + (t ? t[1] : "") + "</li>"
        })
    }

    function d(o) {
        var n = this,
            t = {},
            i = "",
            l = [],
            a = 0,
            d = n.config.extendProps;
        return !(!o || !o.length) && (e.each(o, function(o, n) {
            var i = n.groupId,
                s = n.disabled ? " disabled" : "",
                r = n.selected && !s ? " selected" : "",
                c = "";
            e.each(d, function(e, o) {
                n[o] && (c += "data-" + o + '="' + n[o] + '" ')
            });
            var p = "<option" + s + r + ' value="' + n.id + '" ' + c + ">" + n.name + "</option>";
            r && (l.push('<span class="dropdown-selected">' + n.name + '<i class="del" data-id="' + n.id + '"></i></span>'), a++), i ? t[n.groupId] ? t[n.groupId] += p : t[n.groupId] = n.groupName + "&janking&" + p : t[o] = p
        }), e.each(t, function(e, o) {
            var n = o.split("&janking&");
            if (2 === n.length) {
                var t = n[0],
                    l = n[1];
                i += '<optgroup label="' + t + '" data-group-id="' + e + '">' + l + "</optgroup>"
            } else i += o
        }), [i, l, a])
    }

    function s(o) {
        function n(o, n) {
            var t = e(n);
            this.id = t.prop("value"), this.name = t.text(), this.disabled = t.prop("disabled"), this.selected = t.prop("selected")
        }
        var t = o,
            i = [];
        return e.each(t.children(), function(o, t) {
            var l = {},
                a = {},
                d = e(t);
            "OPTGROUP" === t.nodeName ? (a.groupId = d.data("groupId"), a.groupName = d.attr("label"), e.each(d.children(), e.proxy(n, l)), e.extend(l, a)) : e.each(d, e.proxy(n, l)), i.push(l)
        }), i
    }

    function r(o, n) {
        this.$el = e(n), this.$select = this.$el.find("select"), this.placeholder = this.$select.attr("placeholder"), this.config = o, this.name = [], this.isSingleSelect = !this.$select.prop("multiple"), this.selectAmount = 0, this.itemLimitAlertTimer = null, this.isLabelMode = "label" === this.config.multipleMode, this.init()
    }
    var c = function() {
            var e = navigator.userAgent.toLowerCase();
            if (e.indexOf("safari") !== -1) return !(e.indexOf("chrome") > -1)
        }(),
        p = {
            readonly: !1,
            minCount: 0,
            minCountErrorMessage: "",
            limitCount: 1 / 0,
            limitCountErrorMessage: "",
            input: '<input type="text" maxLength="20" placeholder="Search...">',
            data: [],
            searchable: !0,
            searchNoData: '<li style="color:#333">No search result found</li>',
            init: o,
            choice: o,
            extendProps: []
        },
        u = {
            up: 38,
            down: 40,
            enter: 13
        },
        h = {
            click: "click.iui-dropdown",
            focus: "focus.iui-dropdown",
            keydown: "keydown.iui-dropdown",
            keyup: "keyup.iui-dropdown"
        },
        f = 1e3,
        m = {
            show: function(o) {
                o.stopPropagation();
                var n = this;
                e(document).trigger("click.dropdown"), n.$el.addClass("active")
            },
            search: n(function(o) {
                var n = this,
                    t = n.config,
                    i = n.$el,
                    l = e(o.target),
                    s = l.val(),
                    r = n.config.data,
                    c = [];
                o.keyCode > 36 && o.keyCode < 41 || (e.each(r, function(e, o) {
                    (o.groupName && o.groupName.toLowerCase().indexOf(s.toLowerCase()) > -1 || o.name.toLowerCase().indexOf(s.toLowerCase()) > -1 || "" + o.id == "" + s) && c.push(o)
                }), i.find("ul").html(a(d.call(n, c)[0]) || t.searchNoData))
            }, 300),
            control: function(o) {
                var n, t, i, l = o.keyCode,
                    a = u,
                    d = 0;
                l !== a.down && l !== a.up || (n = l === a.up ? -1 : 1, i = this.$el.find("[tabindex]"), t = i.index(e(document.activeElement)), d = t === -1 ? n + 1 ? -1 : 0 : t, d += n, d === i.length && (d = 0), i.eq(d).focus(), o.preventDefault())
            },
            multiChoose: function(o, n) {
                var t, a = this,
                    d = a.config,
                    s = a.$select,
                    r = e(o.target),
                    c = r.attr("data-value"),
                    p = r.hasClass("dropdown-chose"),
                    u = [];
                if (r.hasClass("dropdown-display")) return !1;
                if (p) r.removeClass("dropdown-chose"), a.selectAmount--;
                else {
                    if (!(a.selectAmount < d.limitCount)) return l.call(a), !1;
                    r.addClass("dropdown-chose"), a.selectAmount++
                }
                a.name = [], e.each(d.data, function(e, o) {
                    "" + o.id == "" + c && (t = o, o.selected = !p), o.selected && (u.push(o.name), a.name.push('<span class="dropdown-selected">' + o.name + '<i class="del" data-id="' + o.id + '"></i></span>'))
                }), s.find('option[value="' + c + '"]').prop("selected", !p), p && a.selectAmount < d.minCount && i.call(a), a.$choseList.find(".dropdown-selected").remove(), a.$choseList.prepend(a.name.join("")), a.$el.find(".dropdown-display").attr("title", u.join(",")), d.choice.call(a, o, t)
            },
            singleChoose: function(o) {
                var n = this,
                    t = n.config,
                    i = n.$el,
                    l = n.$select,
                    a = e(o.target),
                    d = a.attr("data-value"),
                    s = a.hasClass("dropdown-chose");
                return !a.hasClass("dropdown-chose") && !a.hasClass("dropdown-display") && (n.name = [], i.removeClass("active").find("li").not(a).removeClass("dropdown-chose"), a.toggleClass("dropdown-chose"), e.each(t.data, function(e, o) {
                    o.selected = !1, "" + o.id == "" + d && (o.selected = s ? 0 : 1, o.selected && n.name.push('<span class="dropdown-selected">' + o.name + '<i class="del" data-id="' + o.id + '"></i></span>'))
                }), l.find('option[value="' + d + '"]').prop("selected", !0), n.name.push('<span class="placeholder">' + n.placeholder + "</span>"), n.$choseList.html(n.name.join("")), void t.choice.call(n, o))
            },
            del: function(o) {
                var n = this,
                    t = n.config,
                    i = e(o.target),
                    l = i.data("id");
                return e.each(n.name, function(e, o) {
                    if (o.indexOf('data-id="' + l + '"') !== -1) return n.name.splice(e, 1), !1
                }), e.each(n.config.data, function(e, o) {
                    if ("" + o.id == "" + l) return o.selected = !1, !1
                }), n.selectAmount--, n.$el.find('[data-value="' + l + '"]').removeClass("dropdown-chose"), n.$el.find('[value="' + l + '"]').prop("selected", !1).removeAttr("selected"), i.closest(".dropdown-selected").remove(), t.choice.call(n, o), !1
            },
            clearAll: function(o) {
                var n = this,
                    t = n.config;
                return o && o.preventDefault(), console.log(this), this.$choseList.find(".del").each(function(o, n) {
                    e(n).trigger("click")
                }), t.minCount > 0 && i.call(n), this.$el.find(".dropdown-display").removeAttr("title"), !1
            }
        };
    r.prototype = {
        init: function() {
            var e = this,
                o = e.config,
                n = e.$el;
            e.$select.hide(), n.addClass(e.isSingleSelect ? "dropdown-single" : e.isLabelMode ? "dropdown-multiple-label" : "dropdown-multiple"), 0 === o.data.length && (o.data = s(e.$select));
            var t = d.call(e, o.data);
            e.name = t[1], e.selectAmount = t[2], e.$select.html(t[0]), e.renderSelect(), e.changeStatus(o.disabled ? "disabled" : !!o.readonly && "readonly"), e.config.init()
        },
        renderSelect: function(o, n) {
            var i, l = this,
                d = l.$el,
                s = l.$select,
                r = a(s.prop("outerHTML"));
            o ? d.find("ul")[n ? "html" : "append"](r) : (i = t.call(l).replace("{{ul}}", "<ul>" + r + "</ul>"), d.append(i).find("ul").removeAttr("style class")), n && (l.name = [], l.$el.find(".dropdown-selected").remove(), l.$select.val("")), l.$choseList = d.find(".dropdown-chose-list"), l.isLabelMode || l.$choseList.html(e('<span class="placeholder"></span>').text(l.placeholder)), l.$choseList.prepend(l.name ? l.name.join("") : [])
        },
        bindEvent: function() {
            var o = this,
                n = o.$el,
                t = c ? h.click : h.focus;
            n.on(h.click, function(e) {
                e.stopPropagation()
            }), n.on(h.click, ".del", e.proxy(m.del, o)), o.isLabelMode ? (n.on(h.click, ".dropdown-display-label", function() {
                n.find("input").focus()
            }), o.config.searchable ? n.on(h.focus, "input", e.proxy(m.show, o)) : n.on(h.click, e.proxy(m.show, o)), n.on(h.keydown, "input", function(e) {
                8 === e.keyCode && "" === this.value && o.name.length && n.find(".del").eq(-1).trigger("click")
            })) : (n.on(t, ".dropdown-display", e.proxy(m.show, o)), n.on(t, ".dropdown-clear-all", e.proxy(m.clearAll, o))), n.on(h.keyup, "input", e.proxy(m.search, o)), n.on(h.keyup, function(n) {
                var t = n.keyCode,
                    i = u;
                t === i.enter && e.proxy(o.isSingleSelect ? m.singleChoose : m.multiChoose, o, n)()
            }), n.on(h.keydown, e.proxy(m.control, o)), n.on(h.click, "li[tabindex]", e.proxy(o.isSingleSelect ? m.singleChoose : m.multiChoose, o))
        },
        unbindEvent: function() {
            var e = this,
                o = e.$el,
                n = c ? h.click : h.focus;
            o.off(h.click), o.off(h.click, ".del"), e.isLabelMode ? (o.off(h.click, ".dropdown-display-label"), o.off(h.focus, "input"), o.off(h.keydown, "input")) : (o.off(n, ".dropdown-display"), o.off(n, ".dropdown-clear-all")), o.off(h.keyup, "input"), o.off(h.keyup), o.off(h.keydown), o.off(h.click, "[tabindex]")
        },
        changeStatus: function(e) {
            var o = this;
            "readonly" === e ? o.unbindEvent() : "disabled" === e ? (o.$select.prop("disabled", !0), o.unbindEvent()) : (o.$select.prop("disabled", !1), o.bindEvent())
        },
        update: function(e, o) {
            var n = this,
                t = n.config,
                i = (n.$el, o || !1);
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                t.data = i ? e.slice(0) : t.data.concat(e);
                var l = d.call(n, t.data);
                n.name = l[1], n.selectAmount = l[2], n.$select.html(l[0]), n.renderSelect(!0, i)
            }
        },
        destroy: function() {
            this.unbindEvent(), this.$el.children().not("select").remove(), this.$el.removeClass("dropdown-single dropdown-multiple-label dropdown-multiple"), this.$select.show()
        },
        choose: function(o, n) {
            var t = "[object Array]" === Object.prototype.toString.call(o) ? o : [o],
                i = this,
                l = void 0 === n || !!n;
            e.each(t, function(e, o) {
                var t = i.$el.find('[data-value="' + o + '"]'),
                    a = t.hasClass("dropdown-chose");
                a !== l && t.trigger(h.click, n || !0)
            })
        },
        reset: function() {
            m.clearAll.call(this)
        }
    }, e(document).on("click.dropdown", function() {
        e(".dropdown-single,.dropdown-multiple,.dropdown-multiple-label").removeClass("active");
        $('.multiple-select button').children('i').removeClass('fa-angle-up')
        $('.multiple-select button').children('i').addClass('fa-angle-down')
    }), e.fn.multiselectdropdown = function(o) {
        return this.each(function(n, t) {
            e(t).data("dropdown", new r(e.extend(!0, {}, p, o), t))
        }), this
    }
})(jQuery);


$(function() {
    $('<button class="open-close-select"><i class="fa fa-angle-down"></i></button>').appendTo($(".multiple-select"))


    $('.multiple-select .open-close-select').click(function() {
        if ($('.multiple-select').hasClass('active')) {
            $('.multiple-select button').children('i').removeClass('fa-angle-up')
            $('.multiple-select button').children('i').addClass('fa-angle-down')
            $('.multiple-select').removeClass('active')
        } else {
            $('.multiple-select button').children('i').removeClass('fa-angle-down')
            $('.multiple-select button').children('i').addClass('fa-angle-up')
            $('.multiple-select').addClass('active')

        }
    })


});