var y = { JSACTION: "jsaction" };
var S = { JSACTION: "__jsaction", OWNER: "__owner" }, N = {};
function I(t) { return t[S.JSACTION]; }
function Ne(t) { let e = I(t) ?? {}; return v(t, e), e; }
function v(t, e) { t[S.JSACTION] = e; }
function Q(t) { return N[t]; }
function $(t, e) { N[t] = e; }
var s = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, X = [s.MOUSEENTER, s.MOUSELEAVE, "pointerenter", "pointerleave"], z = [s.CLICK, s.DBLCLICK, s.FOCUSIN, s.FOCUSOUT, s.KEYDOWN, s.KEYUP, s.KEYPRESS, s.MOUSEOVER, s.MOUSEOUT, s.SUBMIT, s.TOUCHSTART, s.TOUCHEND, s.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], U = [s.FOCUS, s.BLUR, s.ERROR, s.LOAD, s.TOGGLE], L = t => U.indexOf(t) >= 0, Z = z.concat(U), Ie = t => Z.indexOf(t) >= 0;
function J(t) { return t === s.MOUSEENTER ? s.MOUSEOVER : t === s.MOUSELEAVE ? s.MOUSEOUT : t === s.POINTERENTER ? s.POINTEROVER : t === s.POINTERLEAVE ? s.POINTEROUT : t; }
function W(t, e, n, r) { let i = !1; L(e) && (i = !0); let o = typeof r == "boolean" ? { capture: i, passive: r } : i; return t.addEventListener(e, n, o), { eventType: e, handler: n, capture: i, passive: r }; }
function ee(t, e) { if (t.removeEventListener) {
    let n = typeof e.passive == "boolean" ? { capture: e.capture } : e.capture;
    t.removeEventListener(e.eventType, e.handler, n);
}
else
    t.detachEvent && t.detachEvent(`on${e.eventType}`, e.handler); }
function te(t) { t.preventDefault ? t.preventDefault() : t.returnValue = !1; }
var P = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function ne(t) { return t.which === 2 || t.which == null && t.button === 4; }
function re(t) { return P && t.metaKey || !P && t.ctrlKey || ne(t) || t.shiftKey; }
function se(t, e, n) { let r = t.relatedTarget; return (t.type === s.MOUSEOVER && e === s.MOUSEENTER || t.type === s.MOUSEOUT && e === s.MOUSELEAVE || t.type === s.POINTEROVER && e === s.POINTERENTER || t.type === s.POINTEROUT && e === s.POINTERLEAVE) && (!r || r !== n && !n.contains(r)); }
function ie(t, e) { let n = {}; for (let r in t) {
    if (r === "srcElement" || r === "target")
        continue;
    let i = r, o = t[i];
    typeof o != "function" && (n[i] = o);
} return t.type === s.MOUSEOVER ? n.type = s.MOUSEENTER : t.type === s.MOUSEOUT ? n.type = s.MOUSELEAVE : t.type === s.POINTEROVER ? n.type = s.POINTERENTER : n.type = s.POINTERLEAVE, n.target = n.srcElement = e, n.bubbles = !1, n._originalEvent = t, n; }
var oe = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), m = class {
    element;
    handlerInfos = [];
    constructor(e) { this.element = e; }
    addEventListener(e, n, r) { oe && (this.element.style.cursor = "pointer"), this.handlerInfos.push(W(this.element, e, n(this.element), r)); }
    cleanUp() { for (let e = 0; e < this.handlerInfos.length; e++)
        ee(this.element, this.handlerInfos[e]); this.handlerInfos = []; }
}, ce = { EVENT_ACTION_SEPARATOR: ":" };
function E(t) { return t.eventType; }
function A(t, e) { t.eventType = e; }
function h(t) { return t.event; }
function w(t, e) { t.event = e; }
function D(t) { return t.targetElement; }
function b(t, e) { t.targetElement = e; }
function k(t) { return t.eic; }
function ae(t, e) { t.eic = e; }
function Ee(t) { return t.timeStamp; }
function ue(t, e) { t.timeStamp = e; }
function d(t) { return t.eia; }
function V(t, e, n) { t.eia = [e, n]; }
function T(t) { t.eia = void 0; }
function l(t) { return t[1]; }
function pe(t) { return t.eirp; }
function F(t, e) { t.eirp = e; }
function K(t) { return t.eir; }
function H(t, e) { t.eir = e; }
function Y(t) { return { eventType: t.eventType, event: t.event, targetElement: t.targetElement, eic: t.eic, eia: t.eia, timeStamp: t.timeStamp, eirp: t.eirp, eiack: t.eiack, eir: t.eir }; }
function B(t, e, n, r, i, o, c, a) { return { eventType: t, event: e, targetElement: n, eic: r, timeStamp: i, eia: o, eirp: c, eiack: a }; }
var O = class t {
    eventInfo;
    constructor(e) { this.eventInfo = e; }
    getEventType() { return E(this.eventInfo); }
    setEventType(e) { A(this.eventInfo, e); }
    getEvent() { return h(this.eventInfo); }
    setEvent(e) { w(this.eventInfo, e); }
    getTargetElement() { return D(this.eventInfo); }
    setTargetElement(e) { b(this.eventInfo, e); }
    getContainer() { return k(this.eventInfo); }
    setContainer(e) { ae(this.eventInfo, e); }
    getTimestamp() { return Ee(this.eventInfo); }
    setTimestamp(e) { ue(this.eventInfo, e); }
    getAction() { let e = d(this.eventInfo); if (e)
        return { name: e[0], element: e[1] }; }
    setAction(e) { if (!e) {
        T(this.eventInfo);
        return;
    } V(this.eventInfo, e.name, e.element); }
    getIsReplay() { return pe(this.eventInfo); }
    setIsReplay(e) { F(this.eventInfo, e); }
    getResolved() { return K(this.eventInfo); }
    setResolved(e) { H(this.eventInfo, e); }
    clone() { return new t(Y(this.eventInfo)); }
}, le = {}, he = /\s*;\s*/, de = s.CLICK, g = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: e = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = e, this.clickModSupport = n; }
    resolveEventType(e) { this.clickModSupport && E(e) === s.CLICK && re(h(e)) ? A(e, s.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(e); }
    resolveAction(e) { K(e) || (this.populateAction(e, D(e)), H(e, !0)); }
    resolveParentAction(e) { let n = d(e), r = n && l(n); T(e); let i = r && this.getParentNode(r); i && this.populateAction(e, i); }
    populateAction(e, n) { let r = n; for (; r && r !== k(e) && (r.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(r, e), !d(e));)
        r = this.getParentNode(r); let i = d(e); if (i && (this.a11yClickSupport && this.preventDefaultForA11yClick(e), this.syntheticMouseEventSupport && (E(e) === s.MOUSEENTER || E(e) === s.MOUSELEAVE || E(e) === s.POINTERENTER || E(e) === s.POINTERLEAVE)))
        if (se(h(e), E(e), l(i))) {
            let o = ie(h(e), l(i));
            w(e, o), b(e, l(i));
        }
        else
            T(e); }
    getParentNode(e) { let n = e[S.OWNER]; if (n)
        return n; let r = e.parentNode; return r?.nodeName === "#document-fragment" ? r?.host ?? null : r; }
    populateActionOnElement(e, n) { let r = this.parseActions(e), i = r[E(n)]; i !== void 0 && V(n, i, e), this.a11yClickSupport && this.populateClickOnlyAction(e, n, r); }
    parseActions(e) { let n = I(e); if (!n) {
        let r = e.getAttribute(y.JSACTION);
        if (!r)
            n = le, v(e, n);
        else {
            if (n = Q(r), !n) {
                n = {};
                let i = r.split(he);
                for (let o = 0; o < i.length; o++) {
                    let c = i[o];
                    if (!c)
                        continue;
                    let a = c.indexOf(ce.EVENT_ACTION_SEPARATOR), p = a !== -1, f = p ? c.substr(0, a).trim() : de, q = p ? c.substr(a + 1).trim() : c;
                    n[f] = q;
                }
                $(r, n);
            }
            v(e, n);
        }
    } return n; }
    addA11yClickSupport(e, n, r) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = e, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = r; }
}, j = (function (t) { return t[t.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", t; })(j || {}), R = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(e, { actionResolver: n, eventReplayer: r } = {}) { this.dispatchDelegate = e, this.actionResolver = n, this.eventReplayer = r; }
    dispatch(e) { let n = new O(e); this.actionResolver?.resolveEventType(e), this.actionResolver?.resolveAction(e); let r = n.getAction(); if (r && fe(r.element, n) && te(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(e) { this.replayEventInfoWrappers.push(e), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function fe(t, e) { return t.tagName === "A" && (e.getEventType() === s.CLICK || e.getEventType() === s.CLICKMOD); }
var x = Symbol.for("propagationStopped"), ve = { REPLAY: 101 };
var Te = "`preventDefault` called during event replay.";
var Oe = "`composedPath` called during event replay.", C = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(e, n = !0) { this.dispatchDelegate = e, this.clickModSupport = n, this.actionResolver = new g({ clickModSupport: n }), this.dispatcher = new R(r => { this.dispatchToDelegate(r); }, { actionResolver: this.actionResolver }); }
    dispatch(e) { this.dispatcher.dispatch(e); }
    dispatchToDelegate(e) { for (e.getIsReplay() && Se(e), ge(e); e.getAction();) {
        if (Ae(e), L(e.getEventType()) && e.getAction().element !== e.getTargetElement() || (this.dispatchDelegate(e.getEvent(), e.getAction().name), Re(e)))
            return;
        this.actionResolver.resolveParentAction(e.eventInfo);
    } }
};
function ge(t) { let e = t.getEvent(), n = t.getEvent().stopPropagation.bind(e), r = () => { e[x] = !0, n(); }; u(e, "stopPropagation", r), u(e, "stopImmediatePropagation", r); }
function Re(t) { return !!t.getEvent()[x]; }
function Se(t) { let e = t.getEvent(), n = t.getTargetElement(), r = e.preventDefault.bind(e); u(e, "target", n), u(e, "eventPhase", ve.REPLAY), u(e, "preventDefault", () => { throw r(), new Error(Te + ""); }), u(e, "composedPath", () => { throw new Error(Oe + ""); }); }
function Ae(t) { let e = t.getEvent(), n = t.getAction()?.element; n && u(e, "currentTarget", n, { configurable: !0 }); }
function u(t, e, n, { configurable: r = !1 } = {}) { Object.defineProperty(t, e, { value: n, configurable: r }); }
function Ue(t, e) { t.ecrd(n => { e.dispatch(n); }, j.I_AM_THE_JSACTION_FRAMEWORK); }
function ye(t) { let e = [], n = i => { e.push(i); }; return { c: t, q: e, et: [], etc: [], d: n, h: i => { n(B(i.type, i, i.target, t, Date.now())); } }; }
function M(t, e, n) { for (let r = 0; r < e.length; r++) {
    let i = e[r];
    (n ? t.etc : t.et).push(i), t.c.addEventListener(i, t.h, n);
} }
function Pe(t) { return t?.q ?? []; }
function me(t, e) { t && (t.d = e); }
function G(t) { t && (_(t.c, t.et, t.h), _(t.c, t.etc, t.h, !0)); }
function _(t, e, n, r) { for (let i = 0; i < e.length; i++)
    t.removeEventListener(e[i], n, r); }
var Ce = !1, Le = (() => { class t {
    static MOUSE_SPECIAL_SUPPORT = Ce;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, r, i) { let o = B(n, r, r.target, i, Date.now()); this.handleEventInfo(o); }
    handleEventInfo(n) { if (!this.dispatcher) {
        F(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, r, i) { if (n in this.eventHandlers || !this.containerManager || !t.MOUSE_SPECIAL_SUPPORT && X.indexOf(n) >= 0)
        return; let o = (a, p, f) => { this.handleEvent(a, p, f); }; this.eventHandlers[n] = o; let c = J(r || n); if (c !== n) {
        let a = this.browserEventTypeToExtraEventTypes[c] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[c] = a;
    } this.containerManager.addEventListener(c, a => p => { o(n, p, a); }, i); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), G(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let r = 0; r < n.length; r++) {
        let i = n[r], o = this.getEventTypesForBrowserEventType(i.eventType);
        for (let c = 0; c < o.length; c++) {
            let a = Y(i);
            A(a, o[c]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let r = []; return this.eventHandlers[n] && r.push(n), this.browserEventTypeToExtraEventTypes[n] && r.push(...this.browserEventTypeToExtraEventTypes[n]), r; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, r) { this.ecrd(n, r); }
    ecrd(n, r) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let i = 0; i < this.queuedEventInfos.length; i++)
            this.handleEventInfo(this.queuedEventInfos[i]);
        this.queuedEventInfos = null;
    } }
} return t; })();
function we(t, e, n, r, i = window) { let o = ye(t); i._ejsas || (i._ejsas = {}), i._ejsas[e] = o, M(o, n), M(o, r, !0); }
function De(t, e = window) { return Pe(e._ejsas?.[t]); }
function be(t, e, n = window) { me(n._ejsas?.[t], e); }
function ke(t, e = window) { G(e._ejsas?.[t]); }
function Ve(t, e = window) { e._ejsas && (e._ejsas[t] = void 0); }
export { y as a, Ne as b, L as c, Ie as d, m as e, O as f, ve as g, C as h, Ue as i, Le as j, we as k, De as l, be as m, ke as n, Ve as o };
/*! Bundled license information:

@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
  (**
   * @license Angular v21.2.6
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
