import { a as yi, c as up, d as dp, e as fp, g as pp, h as hp, i as gp, j as mp, l as yp, o as Ec } from "@nf-internal/chunk-RDF3I7Y7";
import { a as qC } from "@nf-internal/chunk-LJJRK7ZG";
import { $ as Pa, $a as Pt, $b as Jf, $c as mc, A as Yr, Aa as ae, Ab as Ua, Ac as Dt, B as ka, Ba as ce, Bb as si, Bc as Ee, C as ht, Ca as oe, Cb as Wf, Cc as cc, D as kt, Da as Ot, Db as _o, Dc as lc, E as pn, Ea as F, Eb as ai, Ec as uc, F as Kr, Fa as R, Fb as ci, Fc as dc, G as W, Ga as Be, Gb as li, Gc as Ao, H as Te, Ha as C, Hb as za, Hc as Fe, I as Ve, Ia as yt, Ib as jt, Ic as OC, J as yo, Ja as Do, Jb as Gf, Jc as op, K as M, Ka as Co, Kb as qf, Kc as De, L as Me, La as Y, Lb as Qf, Lc as Vt, M as Af, Ma as vt, Mb as Zf, Mc as Ro, N as xa, Na as gn, Nb as Yf, Nc as rp, O as xt, Oa as $e, Ob as Wa, Oc as ip, P as Rf, Pa as we, Pb as ui, Pc as Bt, Q as Oe, Qa as ja, Qb as So, Qc as LC, R as Jr, Ra as Va, Rb as Ga, Rc as sp, S as E, Sa as ii, Sb as qa, Sc as ap, T as Oa, Ta as To, Tb as Kf, Tc as fc, U as hn, Ua as _e, Ub as Qa, Uc as B, V as Xr, Va as Lt, Vb as Za, Vc as pc, W as kf, Wa as Ue, Wb as g, Wc as hc, X as Le, Xa as v, Xb as N, Xc as $t, Y as La, Ya as Ie, Yb as Ya, Yc as gc, Z as vo, Za as Pe, Zb as Ka, Zc as PC, _ as Io, _a as Mo, _b as T, _c as FC, a as TC, aa as xf, ab as H, ac as yn, ad as cp, b as MC, ba as Eo, bb as te, bc as We, bd as HC, c as zr, ca as ei, cb as J, cc as Ja, cd as gi, d as w, da as ti, db as Ba, dc as Xa, dd as Ct, e as _f, ea as Ne, eb as he, ec, ed as vn, f as ve, fa as P, fb as mn, fc as tc, fd as jC, g as ba, ga as gt, gb as Se, gc as nc, gd as mi, h as Sf, ha as AC, hb as ze, hc as ue, hd as yc, i as Wr, ia as et, ib as $a, ic as Ge, id as vc, j as Gr, ja as RC, jb as Hf, jc as oc, jd as VC, k as NC, ka as kC, kb as It, kc as fe, kd as Ic, l as Aa, la as Fa, lb as jf, lc as qe, ld as BC, m as z, ma as ni, mb as Vf, mc as Xf, md as $C, n as qr, na as Of, nb as O, nc as rc, nd as Ut, o as bf, oa as Lf, ob as No, oc as ep, od as UC, p as V, pa as oi, pb as Ft, pc as tp, pd as zC, q as mo, qa as mt, qb as re, qc as ic, qd as WC, r as wC, ra as Ha, rb as Bf, rc as di, rd as GC, s as _C, sa as Pf, sb as Ht, sc as fi, sd as lp, t as Qr, ta as ri, tb as Et, tc as bo, u as Ra, ua as Ff, ub as wo, uc as sc, v as _, va as xC, vb as de, vc as pi, w as SC, wa as j, wb as $f, wc as ac, x as bC, xa as m, xb as Uf, xc as hi, y as fn, ya as S, yb as zf, yc as np, z as Zr, za as G, zb as le, zc as ie } from "@nf-internal/chunk-NRVCXPBY";
import { B as _a, E as Sa, a as Xe, b as x, c as Mf, f as wa, g as Br, n as ho, p as $r, r as Ur, s as go, w as Nf, x as wf } from "@nf-internal/chunk-RKEUQMMB";
import { b as CC } from "@nf-internal/chunk-ZNT5HOY3";
import { a as Z, b as Je, d as pt } from "@nf-internal/chunk-4CLCTAJ7";
import { setActiveConsumer as En } from "@angular/core/primitives/signals";
import { Subject as xh, Subscription as QC } from "rxjs";
import { map as ZC } from "rxjs/operators";
function Ze(e) { return { toString: e }.toString(); }
var Dn = "__annotations__", Cn = "__parameters__", Tn = "__prop__metadata__";
function pr(e, t, n, o, r) { return Ze(() => { let i = ql(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Dn) ? u[Dn] : Object.defineProperty(u, Dn, { value: [] })[Dn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function ql(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function zn(e, t, n) { return Ze(() => { let o = ql(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Cn) ? c[Cn] : Object.defineProperty(c, Cn, { value: [] })[Cn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function st(e, t, n, o) { return Ze(() => { let r = ql(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Tn) ? d[Tn] : Object.defineProperty(d, Tn, { value: {} })[Tn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Oh = hn(zn("Inject", e => ({ token: e })), -1), Lh = hn(zn("Optional"), 8), Ph = hn(zn("Self"), 2), Fh = hn(zn("SkipSelf"), 4), Hh = hn(zn("Host"), 1);
function ee(e) { let t = ve.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var vp = { \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: mo, \u0275\u0275inject: Oe, \u0275\u0275invalidFactoryDep: Jr, resolveForwardRef: z }, jh = Function;
function Oo(e) { return typeof e == "function"; }
var YC = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, KC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, JC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, XC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function eT(e) { return YC.test(e) || XC.test(e) || KC.test(e) && !JC.test(e); }
var ji = class {
    _reflect;
    constructor(t) { this._reflect = t || ve.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Io(n.length) : o = Io(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (eT(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Dc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Cn) && t[Cn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Io(t.length); }
    parameters(t) { if (!Oo(t))
        return []; let n = vi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Dc(t.decorators) : t.hasOwnProperty(Dn) ? t[Dn] : null; }
    annotations(t) { if (!Oo(t))
        return []; let n = vi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Dc(o[i]); }), r;
    } return t.hasOwnProperty(Tn) ? t[Tn] : null; }
    propMetadata(t) { if (!Oo(t))
        return {}; let n = vi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Oo(t) ? this._ownPropMetadata(t, vi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof jh && n in t.prototype; }
};
function Dc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function vi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Vh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Vi = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Bh = (() => { let e = () => $h; return e.ngInherit = !0, e; })();
function $h(e) { return e.type.prototype.ngOnChanges && (e.setInput = nT), tT; }
function tT() { let e = zh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Ne)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function nT(e, t, n, o, r) { let i = this.declaredInputs[o], s = zh(e) || oT(e, { previous: Ne, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Vi(l && l.currentValue, n, c === Ne), Vh(e, t, r, n); }
var Uh = "__ngSimpleChanges__";
function zh(e) { return e[Uh] || null; }
function oT(e, t) { return e[Uh] = t; }
var Ip = [];
var k = function (e, t = null, n) { for (let o = 0; o < Ip.length; o++) {
    let r = Ip[o];
    r(e, t, n);
} }, b = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(b || {});
function rT(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = $h(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Wh(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function bi(e, t, n) { Gh(e, t, 3, n); }
function Ai(e, t, n, o) { (e[S] & 3) === n && Gh(e, t, n, o); }
function Cc(e, t) { let n = e[S]; (n & 3) === t && (n &= 16383, n += 1, e[S] = n); }
function Gh(e, t, n, o) { let r = o !== void 0 ? e[gn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[gn] += 65536), (a < i || i == -1) && (iT(e, n, t, c), e[gn] = (e[gn] & 4294901760) + c + 2), c++; }
function Ep(e, t) { k(b.LifecycleHookStart, e, t); let n = x(null); try {
    t.call(e);
}
finally {
    x(n), k(b.LifecycleHookEnd, e, t);
} }
function iT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[S] >> 14 < e[gn] >> 16 && (e[S] & 3) === t && (e[S] += 16384, Ep(a, i)) : Ep(a, i); }
var _n = -1, Yt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function hs(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function qh(e) { return !!(e.type & 128); }
function sT(e) { return (e.flags & 8) !== 0; }
function aT(e) { return (e.flags & 16) !== 0; }
function cT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        lT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Qh(e) { return e === 3 || e === 4 || e === 6; }
function lT(e) { return e.charCodeAt(0) === 64; }
function xn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Dp(e, n, r, null, t[++o]) : Dp(e, n, r, null, null));
        }
    } return e; }
function Dp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Zh(e) { return e !== _n; }
function Bi(e) { return e & 32767; }
function uT(e) { return e >> 16; }
function $i(e, t) { let n = uT(e), o = t; for (; n > 0;)
    o = o[Co], n--; return o; }
var Wc = !0;
function Ui(e) { let t = Wc; return Wc = e, t; }
var dT = 256, Yh = dT - 1, Kh = 5, fT = 0, Qe = {};
function pT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(kt) && (o = n[kt]), o == null && (o = n[kt] = fT++); let r = o & Yh, i = 1 << r; t.data[e + (r >> Kh)] |= i; }
function zi(e, t) { let n = Jh(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Tc(o.data, e), Tc(t, null), Tc(o.blueprint, null)); let r = Ql(e, t), i = e.injectorIndex; if (Zh(r)) {
    let s = Bi(r), a = $i(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Tc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Jh(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Ql(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = rg(r), o === null)
        return _n;
    if (n++, r = r[Co], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return _n; }
function Gc(e, t, n) { pT(e, t, n); }
function hT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Qh(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Xh(e, t, n) { if (n & 8 || e !== void 0)
    return e; xa(t, "NodeInjector"); }
function eg(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[R], i = xt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Rf(t, o, n & 8);
    }
    finally {
        xt(i);
    }
} return Xh(o, t, n); }
function tg(e, t, n, o = 0, r) { if (e !== null) {
    if (t[S] & 2048 && !(o & 2)) {
        let s = vT(e, t, n, o, Qe);
        if (s !== Qe)
            return s;
    }
    let i = ng(e, t, n, o, Qe);
    if (i !== Qe)
        return i;
} return eg(t, n, o, r); }
function ng(e, t, n, o, r) { let i = mT(n); if (typeof i == "function") {
    if (!sc(t, e, o))
        return o & 1 ? Xh(r, n, o) : eg(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            xa(n);
        else
            return s;
    }
    finally {
        ac();
    }
}
else if (typeof i == "number") {
    let s = null, a = Jh(e, t), c = _n, l = o & 1 ? t[Y][ce] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Ql(e, t) : t[a + 8], c === _n || !Tp(o, !1) ? a = -1 : (s = t[m], a = Bi(c), t = $i(c, t))); a !== -1;) {
        let u = t[m];
        if (Cp(i, a, u.data)) {
            let d = gT(a, t, n, s, o, l);
            if (d !== Qe)
                return d;
        }
        c = t[a + 8], c !== _n && Tp(o, t[m].data[a + 8] === l) && Cp(i, a, t) ? (s = u, a = Bi(c), t = $i(c, t)) : a = -1;
    }
} return r; }
function gT(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? he(a) && Wc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Ri(a, s, n, c, l); return u !== null ? qo(t, s, u, a, r) : Qe; }
function Ri(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && Se(p) && p.type === n)
        return c;
} return null; }
function qo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Yt) {
    let a = i;
    if (a.resolving)
        throw Af("");
    let c = Ui(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? xt(a.injectImpl) : null, f = sc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && rT(n, s[n], t);
    }
    finally {
        d !== null && xt(d), Ui(c), a.resolving = !1, ac();
    }
} return i; }
function mT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(kt) ? e[kt] : void 0; return typeof t == "number" ? t >= 0 ? t & Yh : yT : t; }
function Cp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Kh)] & o); }
function Tp(e, t) { return !(e & 2) && !(e & 1 && t); }
var Nt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return tg(this._tNode, this._lView, t, Oa(o), n); }
};
function yT() { return new Nt(T(), g()); }
function og(e) { return Ze(() => { let t = e.prototype.constructor, n = t[ht] || qc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ht] || qc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function qc(e) { return qr(e) ? () => { let t = qc(z(e)); return t && t(); } : Xr(e); }
function vT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[S] & 2048 && !ze(s);) {
    let a = ng(i, s, n, o | 2, Qe);
    if (a !== Qe)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[ja];
        if (l) {
            let u = l.get(n, Qe, o & -5);
            if (u !== Qe)
                return u;
        }
        c = rg(s), s = s[Co];
    }
    i = c;
} return r; }
function rg(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ce] : null; }
function gs(e) { return hT(T(), e); }
var ig = zn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => gs(e) })), Mp = null;
function Zl() { return Mp = Mp || new ji; }
function ms(e) { return sg(Zl().parameters(e)); }
function sg(e) { return e.map(t => IT(t)); }
function IT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Lh || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Fh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Ph || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Hh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Oh)
            t.token = o.token;
        else if (o instanceof ig) {
            if (o.attributeName === void 0)
                throw new w(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function ET(e, t) { let n = null, o = null; e.hasOwnProperty(Qr) || Object.defineProperty(e, Qr, { get: () => (n === null && (n = ee({ usage: 0, kind: "injectable", type: e }).compileInjectable(vp, `ng:///${e.name}/\u0275prov.js`, MT(e, t))), n) }), e.hasOwnProperty(ht) || Object.defineProperty(e, ht, { get: () => { if (o === null) {
        let r = ee({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(vp, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: ms(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var DT = ba({ provide: String, useValue: ba });
function Np(e) { return e.useClass !== void 0; }
function CT(e) { return DT in e; }
function wp(e) { return e.useFactory !== void 0; }
function TT(e) { return e.useExisting !== void 0; }
function MT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Np(n) || wp(n)) && n.deps !== void 0 && (o.deps = sg(n.deps)), Np(n) ? o.useClass = n.useClass : CT(n) ? o.useValue = n.useValue : wp(n) ? o.useFactory = n.useFactory : TT(n) && (o.useExisting = n.useExisting), o; }
var NT = pr("Injectable", void 0, void 0, void 0, (e, t) => ET(e, t));
function wT() { return Wn(T(), g()); }
function Wn(e, t) { return new hr(re(e, t)); }
var hr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = wT;
} return e; })();
function ag(e) { return e instanceof hr ? e.nativeElement : e; }
function _T() { return this._results[Symbol.iterator](); }
var Wi = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new xh; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Le(t); (this._changesDetected = !kf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = _T;
}, Gn = "ngSkipHydration", ST = "ngskiphydration";
function Yl(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === ST)
        return !0;
} return !1; }
function cg(e) { return e.hasAttribute(Gn); }
function Qo(e) { return (e.flags & 128) === 128; }
function qn(e) { if (Qo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Qo(e) || Yl(t))
        return !0;
    t = t.parent;
} return !1; }
function lg(e) { return Qo(e) || Yl(e) || qn(e); }
var ys = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(ys || {}), vs = new Map, bT = 0;
function AT() { return bT++; }
function RT(e) { vs.set(e[we], e); }
function ug(e) { return vs.get(e) || null; }
function Qc(e) { vs.delete(e[we]); }
function kT() { return vs; }
var Gi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return ug(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ye(e) { let t = ki(e); if (t) {
    if (te(t)) {
        let n = t, o, r, i;
        if (dg(e)) {
            if (o = PT(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (OT(e)) {
            if (o = FT(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = fg(o, n);
        }
        else if (o = Sp(n, e), o == -1)
            return null;
        let s = O(n[o]), a = ki(s), c = a && !Array.isArray(a) ? a : _p(n, o, s);
        if (r && c.component === void 0 && (c.component = r, be(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                be(i[l], c);
        }
        be(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = ki(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Sp(i, n);
            if (s >= 0) {
                let a = O(i[s]), c = _p(i, s, a);
                be(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function _p(e, t, n) { return new Gi(e[we], t, n); }
var Zc = "__ngContext__";
function be(e, t) { te(t) ? (e[Zc] = t[we], RT(t)) : e[Zc] = t; }
function ki(e) { let t = e[Zc]; return typeof t == "number" ? ug(t) : t || null; }
function xT(e) { let t = ki(e); return t ? te(t) ? t : t.lView : null; }
function dg(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function OT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Sp(e, t) { let n = e[m]; for (let o = v; o < n.bindingStartIndex; o++)
    if (O(e[o]) === t)
        return o; return -1; }
function LT(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function PT(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (de(r, e)[F] === t)
            return r;
    }
else if (de(v, e)[F] === t)
    return v; return -1; }
function FT(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = LT(n);
} return -1; }
function fg(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return P; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    dg(i) || o.push(i);
} return o; }
function HT(e, t) { let n = t[m].data[e]; return he(n) ? t[n.directiveStart + n.componentOffset] : null; }
function jT(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function pg(e) { return gg(e[yt]); }
function hg(e) { return gg(e[ae]); }
function gg(e) { for (; e !== null && !J(e);)
    e = e[ae]; return e; }
function bp(e) { let t = ye(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = HT(t.nodeIndex, n);
} return t.component; }
function VT(e) { YT(e); let t = ye(e), n = t ? t.lView : null; return n === null ? null : n[F]; }
function BT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = jt(n));)
    n = o; return ze(n) ? null : n[F]; }
function $T(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return De.NULL; let o = n[m].data[t.nodeIndex]; return new Nt(o, n); }
function UT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    ZT(l) && (l = l.type), i.push(l);
} return i; }
function zT(e) { if (e instanceof Text)
    return []; let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = fg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var mg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(mg || {}), yg = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(yg || {});
function WT(e) { let t = ye(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = jT(n, t.nodeIndex);
} return t.localRefs || {}; }
function GT(e) { return ye(e).native; }
function qT(e) { let t = ye(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Ot], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = O(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(QT), s; }
function QT(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function ZT(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function YT(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Yc;
function KT(e) { Yc = e; }
function Is() { if (Yc !== void 0)
    return Yc; if (typeof document < "u")
    return document; throw new w(210, !1); }
var at = new _("", { factory: () => JT }), JT = "ng";
var Kl = new _(""), XT = new _("", { providedIn: "platform", factory: () => "unknown" }), eM = new _(""), tM = new _("", { factory: () => E(Vt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), vg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, nM = new _("", { factory: () => vg });
function oM(e) { return e; }
var Qn = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = Ig(E(Vt), E(at))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function Ig(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Jl = "h", Xl = "b", Eg = "f", Dg = "n", gr = "e", Es = "t", Zn = "c", mr = "x", rt = "r", Ds = "i", yr = "n", Yn = "d", Cs = "l", Ts = "di", vr = "s", eu = "p", Ir = "t", an = new _(""), Cg = !1, tu = new _("", { factory: () => Cg }), nu = new _(""), Ms = new _(""), ou = !1, Tg = new _("", { factory: () => [] }), ru = new _(""), Er = new _("", { factory: () => new Map }), rM = new _(""), qi = { passive: !0, capture: !0 }, Mc = new WeakMap, Nc = new WeakMap, Mt = new WeakMap, Qi = ["click", "keydown"], Zi = ["mouseenter", "mouseover", "focusin"], Ii = new Map, Zo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Mg(e, t) { let n = Nc.get(e); if (!n) {
    n = new Zo, Nc.set(e, n);
    for (let o of Qi)
        e.addEventListener(o, n.listener, qi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Nc.delete(e);
    for (let i of Qi)
        e.removeEventListener(i, r, qi);
} }; }
function Ng(e, t) { let n = Mc.get(e); if (!n) {
    n = new Zo, Mc.set(e, n);
    for (let o of Zi)
        e.addEventListener(o, n.listener, qi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Zi)
        e.removeEventListener(i, r, qi);
    Mc.delete(e);
} }; }
function iM(e) { let t = wg(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Mt.has(o.target) && Mt.get(o.target)?.get(t)?.listener(); }, e); }
function sM(e, t, n, o) { let r = wg(o), i = Mt.get(e)?.get(r); Ii.has(r) || Ii.set(r, { observer: n(o), count: 0 }); let s = Ii.get(r); if (!i) {
    i = new Zo, s.observer.observe(e);
    let a = Mt.get(e);
    a ? a.set(r, i) : (a = new Map, Mt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Mt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Mt.get(e);
        a && (a.delete(r), a.size === 0 && Mt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), Ii.delete(r));
} }; }
function wg(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Kn = "ngb";
function iu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(yi.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(yi.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Kn, i); }
var _g = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, su = (e, t) => { let n = e, o = n.getAttribute(Kn) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function aM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(au);
} }
var au = e => { e.removeAttribute(yi.JSACTION), e.removeAttribute(Kn), e.__jsaction_fns = void 0; }, cu = new _("", { factory: () => ({}) });
function lu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Kc = new Map;
function Sg(e, t) { return Kc.set(e, t), () => Kc.delete(e); }
var Ap = !1, bg = (e, t, n, o) => { };
function cM(e, t, n, o) { bg(e, t, n, o); }
function Ag() { Ap || (bg = (e, t, n, o) => { let r = e[R].get(at); Kc.get(r)?.(t, n, o); }, Ap = !0); }
var ct = new _(""), Rg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(Er);
    contract = E(cu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { aM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = V({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Jn(e) { return (e.flags & 32) === 32; }
var kg = "__nghData__", Ns = kg, xg = "__nghDeferData__", ws = xg;
function lM(e) { return e === kg || e === xg; }
var Sn = "ngh", Og = "nghm", Lg = () => null;
function uM(e, t, n = !1) { let o = e.getAttribute(Sn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Qn, null, { optional: !0 });
    u !== null && (c = u.get(Ns, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, _s(l, 0, e.nextSibling)), a ? e.setAttribute(Sn, a) : e.removeAttribute(Sn), l; }
function Pg() { Lg = uM; }
function Fg(e, t, n = !1) { return Lg(e, t, n); }
function uu(e) { let t = e._lView; return t[m].type === 2 ? null : (ze(t) && (t = t[v]), t); }
function dM(e) { return e.textContent?.replace(/\s/gm, ""); }
function fM(e) { let t = Is(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = dM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Hg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Hg || {}), pM = "__ngDebugHydrationInfo__";
function hM(e) { return e[pM] ?? null; }
function _s(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Jc(e, t) { return e.segmentHeads?.[t] ?? null; }
function Dr(e) { return e.get(ru, !1, { optional: !0 }); }
var gM = !1;
function mM() { gM = !1; }
function jg(e, t) { let n = e.data, o = n[gr]?.[t] ?? null; return o === null && n[Zn]?.[t] && (o = du(e, t)), o; }
function yM(e, t) { return e.data[gr]?.[t] !== void 0; }
function Vg(e, t) { return e.data[Zn]?.[t] ?? null; }
function du(e, t) { let n = Vg(e, t) ?? [], o = 0; for (let r of n)
    o += r[rt] * (r[mr] ?? 1); return o; }
function Bg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Yn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Ss(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Yn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Bg(e)?.has(t); }
function bs(e, t) { let n = e[oe]; return n !== null && !So() && !Jn(t) && !Ss(n, t.index - v); }
function fu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function $g(e) { let t = []; return e !== null && (e.has(4) && t.push(...Zi), e.has(3) && t.push(...Qi)), t; }
function vM(e, t) { let n = t.get(ct), r = t.get(Qn).get(ws, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][eu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function IM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Zi.join(":;"), Qi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Ug(e, t) { let n = IM(e), o = t.get(Er); for (let r of n)
    su(r, o); }
var zg = () => ({});
function EM(e) { let t = e.get(Qn, null, { optional: !0 }); return t !== null ? t.get(ws, {}) : {}; }
function Wg() { zg = EM; }
function DM(e) { return zg(e); }
function CM(e) { return typeof e == "object" && e.trigger === 5; }
function TM(e) { return e[Ir]?.find(n => CM(n))?.delay ?? null; }
function MM(e) { let t = e[Ir]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function Rp(e, t) { return e[Ir]?.includes(t) ?? !1; }
function NM(e) { return { data: e, hydrate: { idle: Rp(e, 0), immediate: Rp(e, 1), timer: TM(e), viewport: MM(e) } }; }
function Gg(e) { let t = DM(e), n = new Map; for (let o in t)
    n.set(o, NM(t[o])); return n; }
function wc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Og; }
function kp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function qg(e) { for (let o of e.body.childNodes)
    if (wc(o))
        return; let t = kp(e.body.previousSibling); if (wc(t))
    return; let n = kp(e.head.lastChild); if (!wc(n))
    throw new w(-507, !1); }
function Qg(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = x(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                bo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        x(o);
    }
} }
function Xc(e, t, n) { bo(0); let o = x(null); try {
    t(e, n);
}
finally {
    x(o);
} }
function pu(e, t, n) { if (Ba(t)) {
    let o = x(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        x(o);
    }
} }
var Ae = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Ae || {}), wM = { name: "custom-elements" }, _M = { name: "no-errors-schema" }, Zg = !1;
function SM(e) { Zg = e; }
function bM() { return Zg; }
var Yg = !1;
function AM(e) { Yg = e; }
function RM() { return Yg; }
var Ei;
function Kg() { if (Ei === void 0 && (Ei = null, ve.trustedTypes))
    try {
        Ei = ve.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ei; }
function Xn(e) { return Kg()?.createHTML(e) || e; }
function kM(e) { return Kg()?.createScriptURL(e) || e; }
var Di;
function hu() { if (Di === void 0 && (Di = null, ve.trustedTypes))
    try {
        Di = ve.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Di; }
function xp(e) { return hu()?.createHTML(e) || e; }
function Op(e) { return hu()?.createScript(e) || e; }
function Lp(e) { return hu()?.createScriptURL(e) || e; }
var it = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${zr})`; }
}, el = class extends it {
    getTypeName() { return "HTML"; }
}, tl = class extends it {
    getTypeName() { return "Style"; }
}, nl = class extends it {
    getTypeName() { return "Script"; }
}, ol = class extends it {
    getTypeName() { return "URL"; }
}, rl = class extends it {
    getTypeName() { return "ResourceURL"; }
};
function lt(e) { return e instanceof it ? e.changingThisBreaksApplicationSecurity : e; }
function eo(e, t) { let n = Jg(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${zr})`);
} return n === t; }
function Jg(e) { return e instanceof it && e.getTypeName() || null; }
function xM(e) { return new el(e); }
function OM(e) { return new tl(e); }
function LM(e) { return new nl(e); }
function PM(e) { return new ol(e); }
function FM(e) { return new rl(e); }
function Xg(e) { let t = new sl(e); return HM() ? new il(t) : t; }
var il = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Xn(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, sl = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Xn(t), n; }
};
function HM() { try {
    return !!new window.DOMParser().parseFromString(Xn(""), "text/html");
}
catch {
    return !1;
} }
var jM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Cr(e) { return e = String(e), e.match(jM) ? e : "unsafe:" + e; }
function Ye(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function to(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var em = Ye("area,br,col,hr,img,wbr"), tm = Ye("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), nm = Ye("rp,rt"), VM = to(nm, tm), BM = to(tm, Ye("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), $M = to(nm, Ye("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), al = to(em, BM, $M, VM), gu = Ye("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), UM = Ye("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), zM = Ye("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), cl = to(gu, UM, zM), WM = Ye("script,style,template"), ll = to(gu, Ye("action,formaction,data,codebase")), ul = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = QM(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = qM(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Pp(t).toLowerCase(); if (!al.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !WM.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!cl.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        gu[a] && (c = Cr(c)), this.buf.push(" ", s, '="', Fp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Pp(t).toLowerCase(); al.hasOwnProperty(n) && !em.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Fp(t)); }
};
function GM(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function qM(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw om(t); return t; }
function QM(e) { let t = e.firstChild; if (t && GM(e, t))
    throw om(t); return t; }
function Pp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function om(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var ZM = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, YM = /([^\#-~ |!])/g;
function Fp(e) { return e.replace(/&/g, "&amp;").replace(ZM, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(YM, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ci;
function rm(e, t) { let n = null; try {
    Ci = Ci || Xg(e);
    let o = t ? String(t) : "";
    n = Ci.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ci.getInertBodyElement(o);
    } while (o !== i);
    let a = new ul().sanitizeChildren(dl(n) || n);
    return Xn(a);
}
finally {
    if (n) {
        let o = dl(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function dl(e) { return "content" in e && KM(e) ? e.content : null; }
function KM(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var JM = /^>|^->|<!--|-->|--!>|<!-$/g, XM = /(<|>)/g, eN = "\u200B$1\u200B";
function tN(e) { return e.replace(JM, t => t.replace(XM, eN)); }
function mu(e, t) { return e.createText(t); }
function im(e, t, n) { e.setValue(t, n); }
function yu(e, t) { return e.createComment(tN(t)); }
function As(e, t, n) { return e.createElement(t, n); }
function Kt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function sm(e, t, n) { e.appendChild(t, n); }
function Hp(e, t, n, o, r) { o !== null ? Kt(e, t, n, o, r) : sm(e, t, n); }
function Tr(e, t, n, o) { e.removeChild(null, t, n, o); }
function am(e) { e.textContent = ""; }
function nN(e, t, n) { e.setAttribute(t, "style", n); }
function oN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function cm(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && cT(e, t, o), r !== null && oN(e, t, r), i !== null && nN(e, t, i); }
function rN(e) { let t = g(); e.src = "", e.srcdoc = Xn(""), Tr(t[C], e); }
var cn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(cn || {});
function lm(e) { let t = Mr(); return t ? xp(t.sanitize(cn.HTML, e) || "") : eo(e, "HTML") ? xp(lt(e)) : rm(Is(), M(e)); }
function um(e) { let t = Mr(); return t ? t.sanitize(cn.STYLE, e) || "" : eo(e, "Style") ? lt(e) : M(e); }
function vu(e) { let t = Mr(); return t ? t.sanitize(cn.URL, e) || "" : eo(e, "URL") ? lt(e) : Cr(M(e)); }
function Iu(e) { let t = Mr(); if (t)
    return Lp(t.sanitize(cn.RESOURCE_URL, e) || ""); if (eo(e, "ResourceURL"))
    return Lp(lt(e)); throw new w(904, !1); }
function dm(e) { let t = Mr(); if (t)
    return Op(t.sanitize(cn.SCRIPT, e) || ""); if (eo(e, "Script"))
    return Op(lt(e)); throw new w(905, !1); }
function fm(e) { return Xn(e[0]); }
function pm(e) { return kM(e[0]); }
var iN = new Set(["embed", "frame", "iframe", "media", "script"]), sN = new Set(["base", "link", "script"]);
function aN(e, t) { return t === "src" && iN.has(e) || t === "href" && sN.has(e) || t === "xlink:href" && e === "script" ? Iu : vu; }
function hm(e, t, n) { return aN(t, n)(e); }
function Mr() { let e = g(); return e && e[Be].sanitizer; }
var Ti = new Set(["attributename"]), cN = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: Ti, set: Ti, animatemotion: Ti, animatetransform: Ti };
function gm(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!cN[o]?.has(r))
    return e; let i = Ee(); if (i.type !== 2)
    return e; let s = g(); if (o === "iframe") {
    let c = re(i, s);
    rN(c);
} let a = !1; throw new w(-910, a); }
function lN() { return et([]); }
function mm(e) { return e.ownerDocument.defaultView; }
function ym(e) { return e.ownerDocument; }
function Eu(e) { return e.ownerDocument.body; }
var uN = "\uFFFD";
function Mn(e) { return e instanceof Function ? e() : e; }
function dN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var vm = "ng-template";
function fN(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && dN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Du(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Du(e) { return e.type === 4 && e.value !== vm; }
function pN(e, t, n) { let o = e.type === 4 && !n ? vm : e.value; return t === o; }
function hN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? yN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !He(o) && !He(c))
            return !1;
        if (s && He(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !pN(e, c, n) || c === "" && t.length === 1) {
                if (He(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !fN(e, r, c, n)) {
                if (He(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = gN(c, r, Du(e), n);
            if (u === -1) {
                if (He(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (He(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return He(o) || s; }
function He(e) { return (e & 1) === 0; }
function gN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return vN(t, e); }
function Im(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (hN(e, t[o], n))
        return !0; return !1; }
function mN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function yN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Qh(n))
        return t;
} return e.length; }
function vN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function IN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function jp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function EN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !He(s) && (t += jp(i, r), r = ""), o = s, i = i || !He(o);
    n++;
} return r !== "" && (t += jp(i, r)), t; }
function DN(e) { return e.map(EN).join(","); }
function CN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!He(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var L = {};
function Cu(e, t, n, o, r, i, s, a, c, l, u) { let d = v + o, f = d + r, p = TN(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function TN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : L); return n; }
function Em(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Cu(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Rs(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[j] = r, d[S] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[S] & 2048) && (d[S] |= 2048), Ua(d), d[G] = d[Co] = e, d[F] = n, d[Be] = s || e && e[Be], d[C] = a || e && e[C], d[R] = c || e && e[R] || null, d[ce] = i, d[we] = AT(), d[oe] = u, d[ja] = l, d[Y] = t.type == 2 ? e[Y] : d, d; }
function MN(e, t, n) { let o = re(t, e), r = Em(n), i = e[Be].rendererFactory, s = Mu(e, Rs(e, r, null, Tu(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Tu(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Nr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Mu(e, t) { return e[yt] ? e[Do][ae] = t : e[yt] = t, e[Do] = t, t; }
function Dm(e = 1) { Cm(N(), g(), ie() + e, !1); }
function Cm(e, t, n, o) { if (!o)
    if ((t[S] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && bi(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ai(t, i, 0, n);
    } Dt(n); }
var ks = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(ks || {});
function wt(e, t, n, o) { let r = x(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & ks.SignalBased) !== 0 && (c = t[i][Xe]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Vh(t, c, i, o);
}
finally {
    x(r);
} }
var Yi = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Yi || {}), fl;
function Nu(e, t) { return fl(e, t); }
function NN(e) { fl === void 0 && (fl = e()); }
var Tm = new _("", { factory: () => !1 }), Mm = new _("", { factory: () => wN }), wN = 4e3, _N = !1, ln = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function xs(e) { return e[R].get(Tm, _N); }
function SN(e, t, n) { let o = On.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    On.set(e, { classList: t, cleanupFns: n }); }
function wu(e) { let t = On.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    On.delete(e);
} Zt.delete(e); }
var bN = () => { }, On = new WeakMap, Zt = new WeakMap, Yo = new WeakMap, Lo = new WeakSet;
function pl(e, t) { let n = Yo.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Yo.delete(e); }
function AN(e, t) { let n = Yo.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Lo.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function _u(e, t) { let n = Yo.get(e); n ? n.includes(t) || n.push(t) : Yo.set(e, [t]); }
function Ki(e) { let t = e[Ue] ??= {}; return t.enter ??= new Map; }
function Jt(e) { let t = e[Ue] ??= {}; return t.leave ??= new Map; }
function Nm(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function RN(e, t) { if (!ln)
    return; let n = On.get(e); if (n && n.classList.length > 0 && kN(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); wu(e); }
function kN(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function Ko(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function Su(e, t) { let n = Zt.get(t); return n === void 0 ? !0 : t === Ko(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function Os(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function hl(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function gl(e, t) { let n = Jt(e).get(t.index); n && (n.resolvers = void 0); }
function Mi(e, t, n, o, r) { pl(t, n), hl(o, r), gl(e, t); }
function Ji(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function qt(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function xN(e) { let t = qt(e, "transition-property"), n = qt(e, "transition-duration"), o = qt(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Ji(o[i]) + Ji(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function ON(e) { let t = qt(e, "animation-name"), n = qt(e, "animation-delay"), o = qt(e, "animation-duration"), r = qt(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = Ji(n[s]) + Ji(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function wm(e, t) { return e !== void 0 && e.duration > t.duration; }
function _m(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function LN(e, t) { let n = getComputedStyle(e), o = ON(n), r = xN(n), i = o.duration > r.duration ? o : r; wm(t.get(e), i) || _m(i) && t.set(e, i); }
function Sm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? LN(e, t) : PN(e, t, o); }
function PN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} wm(t.get(e), o) || _m(o) && t.set(e, o); }
var Xt = new Set, Ls = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ls || {}), un = new _(""), Vp = new Set;
function q(e) { Vp.has(e) || (Vp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Ps = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), bu = [0, 1, 2, 3], Au = (() => { class e {
    ngZone = E(B);
    scheduler = E(Ct);
    errorHandler = E(hc, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(un, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && k(b.AfterRenderHooksStart), this.executing = !0; for (let o of bu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && k(b.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Lt] ??= []).push(n), ci(o), o[S] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Ls.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Jo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Lt]; t && (this.view[Lt] = t.filter(n => n !== this)); }
};
function bm(e, t) { let n = t?.injector ?? E(De); return typeof ngServerMode < "u" && ngServerMode ? Fs : (q("NgAfterRender"), Am(e, n, t, !1)); }
function Ru(e, t) { let n = t?.injector ?? E(De); return typeof ngServerMode < "u" && ngServerMode ? Fs : (q("NgAfterNextRender"), Am(e, n, t, !0)); }
function FN(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Am(e, t, n, o) { let r = t.get(Ps); r.impl ??= t.get(Au); let i = t.get(un, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Ro) : null, a = t.get(gi, null, { optional: !0 }), c = new Jo(r.impl, FN(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Fs = { destroy() { } }, Hs = new _("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: E(mt) }) });
function Rm(e, t, n) { let o = e.get(Hs); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function HN(e, t) { let n = e.get(Hs); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function jN(e) { let t = e.get(Hs); t.isScheduled || (Ru(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function js(e) { let t = e.get(Hs); t.scheduler = jN, t.scheduler(e); }
function ku(e, t) { for (let [n, o] of t)
    Rm(e, o.animateFns); }
function Bp(e, t, n, o) { let r = e?.[Ue]?.enter; t !== null && r && r.has(n.index) && ku(o, r); }
function Nn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    J(r) ? c = r : te(r) && (l = !0, r = r[j]);
    let u = O(r);
    e === 0 && o !== null ? (Bp(a, o, i, n), s == null ? sm(t, o, u) : Kt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Bp(a, o, i, n), Kt(t, o, u, s || null, !0), AN(i, u)) : e === 2 ? (a?.[Ue]?.leave?.has(i.index) && _u(i, u), Lo.delete(u), $p(a, i, n, d => { if (Lo.has(u)) {
        Lo.delete(u);
        return;
    } Tr(t, u, l, d); })) : e === 3 && (Lo.delete(u), $p(a, i, n, () => { t.destroyNode(u); })), c != null && GN(t, e, n, c, i, o, s);
} }
function km(e, t) { xm(e, t), t[j] = null, t[ce] = null; }
function VN(e, t, n, o, r, i) { o[j] = r, o[ce] = t, Vs(e, o, n, 1, r, i); }
function xm(e, t) { t[Be].changeDetectionScheduler?.notify(9), Vs(e, t, t[C], 2, null, null); }
function BN(e) { let t = e[yt]; if (!t)
    return _c(e[m], e); for (; t;) {
    let n = null;
    if (te(t))
        n = t[yt];
    else {
        let o = t[H];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ae] && t !== e;)
            te(t) && _c(t[m], t), t = t[G];
        t === null && (t = e), te(t) && _c(t[m], t), n = t && t[ae];
    }
    t = n;
} }
function xu(e, t) { let n = e[Pt], o = n.indexOf(t); n.splice(o, 1); }
function wr(e, t) { if (It(t))
    return; let n = t[C]; n.destroyNode && Vs(e, t, n, 3, null, null), BN(t); }
function _c(e, t) { if (It(t))
    return; let n = x(null); try {
    t[S] &= -129, t[S] |= 256, t[_e] && go(t[_e]), zN(e, t), UN(e, t), t[m].type === 1 && t[C].destroy();
    let o = t[vt];
    if (o !== null && J(t[G])) {
        o !== t[G] && xu(o, t);
        let r = t[$e];
        r !== null && r.detachView(e);
    }
    Qc(t);
}
finally {
    x(n);
} }
function $p(e, t, n, o) { let r = e?.[Ue]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Xt.add(e[we]), Rm(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), $N(e, o);
}
else
    e && Xt.delete(e[we]), o(!1); }, r); }
function $N(e, t) { let n = e[Ue]?.running; if (n) {
    n.then(() => { e[Ue].running = void 0, Xt.delete(e[we]), t(!0); });
    return;
} t(!1); }
function UN(e, t) { let n = e.cleanup, o = t[Ot]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Ot] = null); let r = t[Va]; if (r !== null) {
    t[Va] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[To]; if (i !== null) {
    t[To] = null;
    for (let s of i)
        s.destroy();
} }
function zN(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Yt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    k(b.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        k(b.LifecycleHookEnd, a, c);
                    }
                }
            else {
                k(b.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    k(b.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function Ou(e, t, n) { return Om(e, t.parent, n); }
function Om(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[j]; if (he(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Ae.None || r === Ae.Emulated)
        return null;
} return re(o, n); }
function Lm(e, t, n) { return Fm(e, t, n); }
function Pm(e, t, n) { return e.type & 40 ? re(e, n) : null; }
var Fm = Pm, ml;
function Hm(e, t) { Fm = e, ml = t; }
function Lu(e, t, n, o) { let r = Ou(e, o, t), i = t[C], s = o.parent || t[ce], a = Lm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Hp(i, r, n[c], a, !1);
    else
        Hp(i, r, n, a, !1); ml !== void 0 && ml(i, o, t, n, r); }
function Qt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return re(t, e);
    if (n & 4)
        return yl(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Qt(e, o);
        {
            let r = e[t.index];
            return J(r) ? yl(-1, r) : O(r);
        }
    }
    else {
        if (n & 128)
            return Qt(e, t.next);
        if (n & 32)
            return Nu(t, e)() || O(e[t.index]);
        {
            let o = jm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = jt(e[Y]);
                return Qt(r, o);
            }
            else
                return Qt(e, t.next);
        }
    }
} return null; }
function jm(e, t) { if (t !== null) {
    let o = e[Y][ce], r = t.projection;
    return o.projection[r];
} return null; }
function yl(e, t) { let n = H + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return Qt(o, r);
} return t[Pe]; }
function Pu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[R];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && be(O(c), o), n.flags |= 2), !Jn(n))
        if (l & 8)
            Pu(e, t, n.child, o, r, i, !1), Nn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Nu(n, o), d;
            for (; d = u();)
                Nn(t, e, a, r, d, n, i, o);
            Nn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Vm(e, t, o, n, r, i) : Nn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Vs(e, t, n, o, r, i) { Pu(n, o, e.firstChild, t, r, i, !1); }
function WN(e, t, n) { let o = t[C], r = Ou(e, n, t), i = n.parent || t[ce], s = Lm(i, n, t); Vm(o, 0, t, n, r, s); }
function Vm(e, t, n, o, r, i) { let s = n[Y], c = s[ce].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Nn(t, e, n[R], r, u, o, i, n);
    }
else {
    let l = c, u = s[G];
    Qo(o) && (l.flags |= 128), Pu(e, t, l, u, r, i, !0);
} }
function GN(e, t, n, o, r, i, s) { let a = o[Pe], c = O(o); a !== c && Nn(t, e, n, i, a, r, s); for (let l = H; l < o.length; l++) {
    let u = o[l];
    Vs(u[m], u, e, t, i, a);
} }
function qN(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Yi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Yi.Important), e.setStyle(n, o, r, i));
} }
function Bm(e, t, n, o, r) { let i = ie(), s = o & 2; try {
    Dt(-1), s && t.length > v && Cm(e, t, v, !1);
    let a = s ? b.TemplateUpdateStart : b.TemplateCreateStart;
    k(a, r, n), n(o, r);
}
finally {
    Dt(i);
    let a = s ? b.TemplateUpdateEnd : b.TemplateCreateEnd;
    k(a, r, n);
} }
function Bs(e, t, n) { JN(e, t, n), (n.flags & 64) === 64 && XN(e, t, n); }
function no(e, t, n = re) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function QN(e, t, n, o) { let i = o.get(tu, Cg) || n === Ae.ShadowDom || n === Ae.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return ZN(s), s; }
function ZN(e) { $m(e); }
var $m = () => null;
function YN(e) { cg(e) ? am(e) : fM(e); }
function Um() { $m = YN; }
function KN(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Fu(e, t, n, o, r, i) { let s = t[m]; if (Ws(e, s, t, n, o)) {
    he(e) && zm(t, e.index);
    return;
} e.type & 3 && (n = KN(n)), Hu(e, t, n, o, r, i); }
function Hu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = re(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function zm(e, t) { let n = de(t, e); n[S] & 16 || (n[S] |= 64); }
function JN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; he(n) && MN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || zi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = qo(t, e, s, n);
    if (be(c, t), i !== null && nw(t, s - o, c, a, n, i), Se(a)) {
        let l = de(n.index, t);
        l[F] = qo(t, e, s, n);
    }
} }
function XN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = tp(); try {
    Dt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        ic(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && ew(c, l);
    }
}
finally {
    Dt(-1), ic(s);
} }
function ew(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function ju(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Im(t, i.selectors, !1) && (o ??= [], Se(i) ? o.unshift(i) : o.push(i));
    } return o; }
function tw(e, t, n, o, r, i) { let s = re(e, t); $s(t[C], s, i, e.value, n, o, r); }
function $s(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? M(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function nw(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        wt(o, n, c, l);
    } }
function Us(e, t, n, o, r) { let i = v + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, We(e, !0); let c = e.type === 2; return c ? (cm(t[C], a, e), (Zf() === 0 || mn(e)) && be(a, t), Yf()) : be(a, t), Ao() && (!c || !Jn(e)) && Lu(s, t, a, e), e; }
function zs(e) { let t = e; return Ja() ? Xa() : (t = t.parent, We(t, !1)), t; }
function Wm(e, t, n) { return (e === null || Se(e)) && (n = No(n[t.index])), n[C]; }
function Vu(e, t) { let n = e[R]; if (!n)
    return; let o; try {
    o = n.get($t, null);
}
catch {
    o = null;
} o?.(t); }
function Ws(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        wt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        wt(u, l, o, r), a = !0;
    } return a; }
function ow(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            wt(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (wt(o, n[s], r, i), l = !0), l; }
function rw(e, t) { let n = de(t, e), o = n[m]; iw(o, n); let r = n[j]; r !== null && n[oe] === null && (n[oe] = Fg(r, n[R])), k(b.ComponentStart); try {
    Gs(o, n, n[F]);
}
finally {
    k(b.ComponentEnd, n[F]);
} }
function iw(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Gs(e, t, n) { pi(t); try {
    let o = e.viewQuery;
    o !== null && Xc(1, o, n);
    let r = e.template;
    r !== null && Bm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[$e]?.finishViewCreation(e), e.staticContentQueries && Qg(e, t), e.staticViewQueries && Xc(2, e.viewQuery, n);
    let i = e.components;
    i !== null && sw(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[S] &= -5, hi();
} }
function sw(e, t) { for (let n = 0; n < t.length; n++)
    rw(e, t[n]); }
function oo(e, t, n, o) { let r = x(null); try {
    let i = t.tView, a = e[S] & 4096 ? 4096 : 16, c = Rs(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[vt] = l;
    let u = e[$e];
    return u !== null && (c[$e] = u.createEmbeddedView(i)), Gs(i, c, n), c;
}
finally {
    x(r);
} }
function en(e, t) { return !t || t.firstChild === null || Qo(e); }
function Ln(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(O(i)), J(i) && qs(i, o);
    let s = n.type;
    if (s & 8)
        Ln(e, t, n.child, o);
    else if (s & 32) {
        let a = Nu(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = jm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = jt(t[Y]);
            Ln(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function qs(e, t) { for (let n = H; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && Ln(o[m], o, r, t);
} e[Pe] !== e[j] && t.push(e[Pe]); }
function Gm(e) { if (e[Lt] !== null) {
    for (let t of e[Lt])
        t.impl.addSequence(t);
    e[Lt].length = 0;
} }
var qm = [];
function aw(e) { return e[_e] ?? cw(e); }
function cw(e) { let t = qm.pop() ?? Object.create(uw); return t.lView = e, t; }
function lw(e) { e.lView[_e] !== e && (e.lView = null, qm.push(e)); }
var uw = Je(Z({}, wa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { ci(e.lView); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function dw(e) { let t = e[_e] ?? Object.create(fw); return t.lView = e, t; }
var fw = Je(Z({}, wa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = jt(e.lView); for (; t && !Qm(t[m]);)
        t = jt(t); t && si(t); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function Qm(e) { return e.type !== 2; }
function Zm(e) { if (e[To] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[To])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[S] & 8192);
} }
var pw = 100;
function Ym(e, t = 0) { let o = e[Be].rendererFactory, r = !1; r || o.begin?.(); try {
    hw(e, t);
}
finally {
    r || o.end?.();
} }
function hw(e, t) { let n = tc(); try {
    nc(!0), vl(e, t);
    let o = 0;
    for (; _o(e);) {
        if (o === pw)
            throw new w(103, !1);
        o++, vl(e, 1);
    }
}
finally {
    nc(n);
} }
function Km(e, t, n, o) { if (It(t))
    return; let r = t[S], i = !1, s = !1; pi(t); let a = !0, c = null, l = null; i || (Qm(e) ? (l = aw(t), c = ho(l)) : Mf() === null ? (a = !1, l = dw(t), c = ho(l)) : t[_e] && (go(t[_e]), t[_e] = null)); try {
    Ua(t), oc(e.bindingStartIndex), n !== null && Bm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && bi(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ai(t, p, 0, null), Cc(t, 0);
        }
    if (s || gw(t), Zm(t), Jm(t, 0), e.contentQueries !== null && Qg(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && bi(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ai(t, p, 1), Cc(t, 1);
        }
    yw(e, t);
    let d = e.components;
    d !== null && ey(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Xc(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && bi(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ai(t, p, 2), Cc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ii]) {
        for (let p of t[ii])
            p();
        t[ii] = null;
    }
    i || (Gm(t), t[S] &= -73);
}
catch (u) {
    throw i || ci(t), u;
}
finally {
    l !== null && ($r(l, c), a && lw(l)), hi();
} }
function Jm(e, t) { for (let n = pg(e); n !== null; n = hg(n))
    for (let o = H; o < n.length; o++) {
        let r = n[o];
        Xm(r, t);
    } }
function gw(e) { for (let t = pg(e); t !== null; t = hg(t)) {
    if (!(t[S] & 2))
        continue;
    let n = t[Pt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        si(r);
    }
} }
function mw(e, t, n) { k(b.ComponentStart); let o = de(t, e); try {
    Xm(o, n);
}
finally {
    k(b.ComponentEnd, o[F]);
} }
function Xm(e, t) { Uf(e) && vl(e, t); }
function vl(e, t) { let o = e[m], r = e[S], i = e[_e], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Ur(i)), s ||= !1, i && (i.dirty = !1), e[S] &= -9217, s)
    Km(o, e, o.template, e[F]);
else if (r & 8192) {
    let a = x(null);
    try {
        Zm(e), Jm(e, 1);
        let c = o.components;
        c !== null && ey(e, c, 1), Gm(e);
    }
    finally {
        x(a);
    }
} }
function ey(e, t, n) { for (let o = 0; o < t.length; o++)
    mw(e, t[o], n); }
function yw(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Dt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                ep(s, i);
                let c = t[i];
                k(b.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    k(b.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Dt(-1);
    } }
function _r(e, t) { let n = tc() ? 64 : 1088; for (e[Be].changeDetectionScheduler?.notify(t); e;) {
    e[S] |= n;
    let o = jt(e);
    if (ze(e) && !o)
        return e;
    e = o;
} return null; }
function ty(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function ny(e, t) { let n = H + t; if (n < e.length)
    return e[n]; }
function ro(e, t, n, o = !0) { let r = t[m]; if (vw(r, t, e, n), o) {
    let s = yl(n, e), a = t[C], c = a.parentNode(e[Pe]);
    c !== null && VN(r, e[ce], a, t, c, s);
} let i = t[oe]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Bu(e, t) { let n = Xo(e, t); return n !== void 0 && wr(n[m], n), n; }
function Xo(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n]; if (o) {
    let r = o[vt];
    r !== null && r !== e && xu(r, o), t > 0 && (e[n - 1][ae] = o[ae]);
    let i = vo(e, H + t);
    km(o[m], o);
    let s = i[$e];
    s !== null && s.detachView(i[m]), o[G] = null, o[ae] = null, o[S] &= -129;
} return o; }
function vw(e, t, n, o) { let r = H + o, i = n.length; o > 0 && (n[r - 1][ae] = t), o < i - H ? (t[ae] = n[r], La(n, H + o, t)) : (n.push(t), t[ae] = null), t[G] = n; let s = t[vt]; s !== null && n !== s && oy(s, t); let a = t[$e]; a !== null && a.insertView(e), ai(t), t[S] |= 128; }
function oy(e, t) { let n = e[Pt], o = t[G]; if (te(o))
    e[S] |= 2;
else {
    let r = o[G][Y];
    t[Y] !== r && (e[S] |= 2);
} n === null ? e[Pt] = [t] : n.push(t); }
var St = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return Ln(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[F]; }
    set context(t) { this._lView[F] = t; }
    get destroyed() { return It(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[G];
        if (J(t)) {
            let n = t[Mo], o = n ? n.indexOf(this) : -1;
            o > -1 && (Xo(t, o), vo(n, o));
        }
        this._attachedToViewContainer = !1;
    } wr(this._lView[m], this._lView); }
    onDestroy(t) { li(this._lView, t); }
    markForCheck() { _r(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[S] &= -129; }
    reattach() { ai(this._lView), this._lView[S] |= 128; }
    detectChanges() { this._lView[S] |= 1024, Ym(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new w(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = ze(this._lView), n = this._lView[vt]; n !== null && !t && xu(n, this._lView), xm(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new w(902, !1); this._appRef = t; let n = ze(this._lView), o = this._lView[vt]; o !== null && !n && oy(o, this._lView), ai(this._lView); }
};
function Iw(e) { return _o(e._lView) || !!(e._lView[S] & 64); }
function Ew(e) { si(e._lView); }
var er = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = Dw;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = oo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new St(i); }
} return e; })();
function Dw() { return Qs(T(), g()); }
function Qs(e, t) { return e.type & 4 ? new er(t, e, Wn(e, t)) : null; }
var Il = "<-- AT THIS LOCATION";
function Cw(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function Tw(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${_w(e, t, !1)}

`, r = bw();
    throw new w(-502, n + o + r);
}
function ry(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${Sw(e)}

`, o = t + n + Aw();
    return new w(-503, o);
}
function Mw(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Xi(r)}"`);
    } return t.join(" "); }
var Nw = new Set(["ngh", "ng-version", "ng-server-context"]);
function ww(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    Nw.has(o.name) || t.push(`${o.name}="${Xi(o.value)}"`);
} return t.join(" "); }
function Sc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = Mw(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${Cw(e.type)})`;
} }
function xi(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = ww(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Xi(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Xi(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function _w(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Sc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Sc(t) + `
`, r += `  <!-- container -->  ${Il}
`) : r += "  " + Sc(t) + `  ${Il}
`, r += `  \u2026
`;
    let i = t.type ? Ou(e[m], t, e) : null;
    return i && (r = xi(i, `
` + r)), r;
}
function Sw(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + xi(o.previousSibling) + `
`), n += "  " + xi(o) + `  ${Il}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = xi(o.parentNode, `
` + n)), n;
}
function bw(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function Aw() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function Rw(e) { return e.replace(/\s+/gm, ""); }
function Xi(e, t = 50) { return e ? (e = Rw(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function iy(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Pm(e, t, n) : O(n[r]); }
function sy(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Kt(e, s, l, a, !1);
        }
} }
function dn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = $u(e, t, n, o, r), Xf() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = yn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return We(i, !0), i; }
function $u(e, t, n, o, r) { let i = Jf(), s = Ja(), a = s ? i : i && i.parent, c = e.data[t] = xw(e, a, n, t, o, r); return kw(e, c, i, s), c; }
function kw(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function xw(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return So() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function ay(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        cy(o) || Ow(o, t) && Lw(o) === null && Pw(o, t.index);
    } }
function cy(e) { return !(e.type & 64); }
function Ow(e, t) { return cy(t) || e.index > t.index; }
function Lw(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function Pw(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Hm(iy, sy), e.insertBeforeIndex = t); }
function Fo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function Fw(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function Hw(e, t) { let n = e.insertBeforeIndex; n === null ? (Hm(iy, sy), n = e.insertBeforeIndex = [null, t]) : (bf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function jw(e, t, n) { let o = $u(e, n, 64, null, null); return ay(t, o), o; }
function Zs(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function Vw(e) { return e >>> 17; }
function Bw(e) { return (e & 131070) >>> 1; }
function $w(e, t, n) { return e | t << 17 | n << 1; }
function ly(e) { return e === -1; }
function Uu(e, t, n) { e.index = 0; let o = Zs(t, n); o !== null ? e.removes = t.remove[o] : e.removes = P; }
function es(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return Uu(e, o, e.lView), es(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), es(e)); }
function Uw() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Uu(e, n.value, o), es.bind(null, e); } return t; }
function zw(e, t) { let n = { stack: [], index: -1, lView: t }; return Uu(n, e, t), es.bind(null, n); }
var Ww = new RegExp(`^(\\d+)*(${Xl}|${Jl})*(.*)`);
function Gw(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function qw(e) { let t = e.match(Ww), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function Qw(e) { return !e.prev && e.parent?.type === 8; }
function bc(e) { return e.index - v; }
function io(e, t) { return !(e.type & 144) && !!t[e.index] && uy(O(t[e.index])); }
function uy(e) { return !!e && !e.isConnected; }
function dy(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function Zw(e, t, n) { let r = e.data[yr]?.[n]; return r ? fy(r, t) : null; }
function Sr(e, t, n, o) { let r = bc(o), i = dy(e, r); if (i === void 0) {
    let s = e.data[yr];
    if (s?.[r])
        i = fy(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (Qw(o)) {
            let l = bc(o.parent);
            i = Jc(e, l);
        }
        else {
            let l = re(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = bc(c), d = Jc(e, u);
                if (c.type === 2 && d) {
                    let p = du(e, u) + 1;
                    i = Ys(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ys(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function Yw(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Eg:
                n = n.firstChild;
                break;
            case Dg:
                n = n.nextSibling;
                break;
        }
} return n; }
function fy(e, t) { let [n, ...o] = qw(e), r; if (n === Jl)
    r = t[Y][j];
else if (n === Xl)
    r = Eu(t[Y][j]);
else {
    let i = Number(n);
    r = O(t[i + v]);
} return Yw(r, o); }
function El(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return Kw(e, t); {
    let n = t.parentElement, o = El(e, n), r = El(n.firstChild, t);
    return !o || !r ? null : [...o, Eg, ...r];
} }
function Kw(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Dg); return o == null ? null : n; }
function Up(e, t, n) { let o = El(e, t); return o === null ? null : Gw(n, o); }
function py(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (io(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Jl, i = t[Y][j]) : (r = o.index, i = O(t[r]), s = M(r - v)); let a = O(t[e.index]); if (e.type & 44) {
    let l = Qt(t, e);
    l && (a = l);
} let c = Up(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Up(l, a, Xl), c === null)
        throw Tw(t, e);
} return c; }
function hy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: Jw }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function Jw(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var gy = !1, my = () => { };
function zu(e) { gy = e; }
function Ks() { return gy; }
function Xw(e, t, n, o) { my(e, t, n, o); }
function yy() { my = r_; }
function vy(e) { return e = e ?? E(De), e.get(nu, !1); }
function Iy(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = e_(e), t.i18nChildren.set(e, n)), n; }
function e_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = v; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Ey(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && lg(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Dl(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Dl(e, t, n, o) { let r = null; for (let i of o) {
    let s = n_(e, t, n, i);
    s && (t_(r, s) && t.disjointNodes.add(i.index - v), r = s);
} return r; }
function t_(e, t) { return e && e.nextSibling !== t; }
function n_(e, t, n, o) { let r = O(e[o.index]); if (!r || uy(r))
    return t.disconnectedNodes.add(o.index - v), null; let i = r; switch (o.kind) {
    case 0: {
        fu(n, i);
        break;
    }
    case 1:
    case 2: {
        Dl(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Dl(e, t, n, o.cases[a]);
        }
        break;
    }
} return o_(e, o); }
function o_(e, t) { let o = e[m].data[t.index]; return hs(o) ? Qt(e, o) : t.kind === 3 ? zw(o, e)() ?? O(e[t.index]) : O(e[t.index]) ?? null; }
function zt(e, t) { e.currentNode = t; }
function ko(e, t, n) { let o = n.index - v, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Ac(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Rc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function r_(e, t, n, o) { let r = e[oe]; if (!r || !Ks() || n && (lg(n) || Ss(r, n.index - v)))
    return; let i = e[m], s = i.data[t]; function a() { if (ly(o)) {
    let p = Sr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Bg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Cs]?.[t - v] ?? [], f = r.dehydratedIcuData ??= new Map; In({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function In(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = Zw(e.hydrationInfo, e.lView, r.index - v);
        i && (o = Rc(t, i)), In(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - v))
        return;
    switch (n.kind) {
        case 0: {
            let o = ko(e, t, n);
            zt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            In(e, Rc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = ko(e, t, n);
            zt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - v, { hydrationInfo: r } = e, i = jg(r, o);
            switch (n.type) {
                case 0: {
                    let s = ko(e, t, n);
                    if (yM(r, o)) {
                        In(e, t, n.children);
                        let a = Ac(t, 1);
                        zt(t, a);
                    }
                    else if (In(e, Rc(t, t.currentNode?.firstChild ?? null), n.children), zt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Ac(t, i + 1);
                        zt(t, a);
                    }
                    break;
                }
                case 1: {
                    ko(e, t, n);
                    let s = Ac(t, i + 1);
                    zt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                In(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = ko(e, t, n);
            zt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Dy = () => { };
function i_(e, t, n) { Dy(e, t, n); }
function Cy() { Dy = s_; }
function s_(e, t, n) { let o = e[oe]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function a_(e) { let t = e[oe]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[C];
        for (let i of o.values())
            c_(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function c_(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - v);
    r && Tr(e, r, !1);
} }
function Js(e) { let t = e[Ie] ?? [], o = e[G][C], r = []; for (let i of t)
    i.data[Ts] !== void 0 ? r.push(i) : Ty(i, o); e[Ie] = r; }
function l_(e) { let { lContainer: t } = e, n = t[Ie]; if (n === null)
    return; let r = t[G][C]; for (let i of n)
    Ty(i, r); }
function Ty(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[rt];
    for (; n < r;) {
        let i = o.nextSibling;
        Tr(t, o, !1), o = i, n++;
    }
} }
function Xs(e) { Js(e); let t = e[j]; te(t) && tr(t); for (let n = H; n < e.length; n++)
    tr(e[n]); }
function tr(e) { a_(e); let t = e[m]; for (let n = v; n < t.bindingStartIndex; n++)
    if (J(e[n])) {
        let o = e[n];
        Xs(o);
    }
    else
        te(e[n]) && tr(e[n]); }
function Wu(e) { let t = e._views; for (let n of t) {
    let o = uu(n);
    o !== null && o[j] !== null && (te(o) ? tr(o) : Xs(o));
} }
function u_(e, t, n, o) { e !== null && (n.cleanup(t), Xs(e.lContainer), Wu(o)); }
function d_(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[mr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[rt] > 0 && (i.firstChild = e, e = Ys(o[rt], e)), n.push(i);
    } return [e, n]; }
var My = () => null, Ny = () => null;
function wy() { My = f_, Ny = p_; }
function f_(e, t) { return Sy(e, t) ? e[Ie].shift() : (Js(e), null); }
function nr(e, t) { return My(e, t); }
function p_(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = nr(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && h_(n, t), o; }
function _y(e, t, n) { return Ny(e, t, n); }
function h_(e, t) { let n = t; for (; n;) {
    if (zp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (zp(e, n))
        return;
    n = n.next;
} }
function Sy(e, t) { let n = e[Ie]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Ds] === t; }
function zp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return J(o) && Sy(o, n) ? (Js(o), !0) : !1; }
var by = class {
}, ea = class {
}, Cl = class {
    resolveComponentFactory(t) { throw new w(917, !1); }
}, br = class {
    static NULL = new Cl;
}, or = class {
}, g_ = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => m_();
} return e; })();
function m_() { let e = g(), t = T(), n = de(t.index, e); return (te(n) ? n : e)[C]; }
var Ay = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Gu(e) { return e.ngModule !== void 0; }
function Wt(e) { return !!pn(e); }
function Ni(e) { return !!Ve(e); }
function Wp(e) { return !!Te(e); }
function Ho(e) { return !!W(e); }
function y_(e) { return W(e) ? "component" : Te(e) ? "directive" : Ve(e) ? "pipe" : "type"; }
function v_(e, t) { if (qr(e) && (e = z(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Me(t)}", to return a standalone entity or NgModule but got "${Me(e) || e}".`); if (pn(e) == null) {
    let n = W(e) || Te(e) || Ve(e);
    if (n != null) {
        if (!n.standalone) {
            let o = y_(e);
            throw new Error(`The "${Me(e)}" ${o}, imported from "${Me(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw Gu(e) ? new Error(`A module with providers was imported from "${Me(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Me(e)}" type, imported from "${Me(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Tl = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = pn(t);
            if (n?.declarations)
                for (let o of Mn(n.declarations))
                    Ho(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Wt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Kr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Mn(n.imports))
        if (Wt(r)) {
            let i = this.getNgModuleScope(r);
            Tt(i.exported.directives, o.compilation.directives), Tt(i.exported.pipes, o.compilation.pipes);
        }
        else if (yo(r))
            if (Wp(r) || Ho(r))
                o.compilation.directives.add(r);
            else if (Ni(r))
                o.compilation.pipes.add(r);
            else
                throw new w(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Mn(n.declarations)) {
            if (Wt(r) || yo(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Ni(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Mn(n.exports))
        if (Wt(r)) {
            let i = this.getNgModuleScope(r);
            Tt(i.exported.directives, o.exported.directives), Tt(i.exported.pipes, o.exported.pipes), Tt(i.exported.directives, o.compilation.directives), Tt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Ni(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Le(n ?? [])) {
        let i = z(r);
        try {
            v_(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Wt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Tt(s.exported.directives, o.compilation.directives), Tt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Ni(i))
            o.compilation.pipes.add(i);
        else if (Wp(i) || Ho(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Tt(e, t) { for (let n of e)
    t.add(n); }
var Pn = new Tl, Oi = {}, bn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Oi, o); return r !== Oi || n === Oi ? r : this.parentInjector.get(t, n, o); }
};
function ts(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Gr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Gr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function so(e, t = 0) { let n = g(); if (n === null)
    return Oe(e, t); let o = T(); return tg(o, n, z(e), t); }
function Ry() { let e = "invalid"; throw new Error(e); }
function ky(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    D_(e, t, n, a, i, c, l);
} i !== null && o !== null && I_(n, o, i); }
function I_(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new w(-301, !1);
    o.push(t[r], i);
} }
function E_(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function D_(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && Se(p) && (c = p, E_(e, n, f)), Gc(zi(n, t), e, p.type);
} __(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Nr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = xn(n.mergedAttrs, p.hostAttrs), T_(e, n, t, d, p), w_(d, p, r), s !== null && s.has(p)) {
        let [y, I] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, I + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} C_(e, n, i); }
function C_(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Gp(0, t, r, o), Gp(1, t, r, o), Qp(t, o, !1);
    else {
        let i = n.get(r);
        qp(0, t, i, o), qp(1, t, i, o), Qp(t, o, !0);
    }
} }
function Gp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), xy(t, i);
    } }
function qp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), xy(t, s);
    } }
function xy(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Qp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Du(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function T_(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Xr(r.type, !0)), s = new Yt(i, Se(r), so, null); e.blueprint[o] = s, n[o] = s, M_(e, t, o, Nr(e, n, r.hostVars, L), r); }
function M_(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    N_(s) != a && s.push(a), s.push(n, o, i);
} }
function N_(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function w_(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    Se(t) && (n[""] = e);
} }
function __(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function qu(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = le(l, s), d = dn(c, e, n, o, u); return i && ky(c, t, d, le(l, a), r), d.mergedAttrs = xn(d.mergedAttrs, d.attrs), d.attrs !== null && ts(d, d.attrs, !1), d.mergedAttrs !== null && ts(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Qu(e, t) { Wh(e, t), Ba(t) && e.queries.elementEnd(t); }
function Oy(e, t, n, o, r, i) { let s = t.consts, a = le(s, r), c = dn(t, e, n, o, a); if (c.mergedAttrs = xn(c.mergedAttrs, c.attrs), i != null) {
    let l = le(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && ts(c, c.attrs, !1), c.mergedAttrs !== null && ts(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function rr(e) { return ta(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function S_(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Ly(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ta(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Py(e, t) { let n = rr(e), o = rr(t); return n && o ? S_(e, t, Py) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function je(e, t, n) { return e[t] = n; }
function ao(e, t) { return e[t]; }
function U(e, t, n) { if (n === L)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function tn(e, t, n, o) { let r = U(e, t, n); return U(e, t + 1, o) || r; }
function na(e, t, n, o, r) { let i = tn(e, t, n, o); return U(e, t + 2, r) || i; }
function Re(e, t, n, o, r, i) { let s = tn(e, t, n, o); return tn(e, t + 2, r, i) || s; }
function _t(e, t, n) { return function o(r) { let i = he(e) ? de(e.index, t) : t; _r(i, 5); let s = t[F], a = Zp(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Zp(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Zp(e, t, n, o) { let r = En(null); try {
    return k(b.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return Vu(e, i), !1;
}
finally {
    k(b.OutputEnd, t, n), En(r);
} }
function Zu(e, t, n, o, r, i, s, a) { let c = mn(e), l = !1, u = null; if (!o && c && (u = A_(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = re(e, n), f = o ? o(d) : d;
    cM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!b_(i)) {
        let h = o ? y => o(O(y[e.index])) : e.index;
        Fy(h, t, n, i, a, p, !1);
    }
} return l; }
function b_(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function A_(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Ot], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Fy(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? qf(t) : null, c = Gf(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function R_(e, t, n, o, r) { let i = _t(e, t, n), s = k_(e, t, o, r, i); }
function k_(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Fn(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Fn(e, t, i, o, o, r)), c; }
function Fn(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); Fy(e.index, a, t, r, i, d, !0); }
function Hy() { jy(); }
function jy() { let e = g(), t = N(), n = T(); if (t.firstCreatePass && x_(t, n), n.controlDirectiveIndex === -1)
    return; q("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new ns(e, t, n)); }
function Vy() { By(); }
function By() { let e = g(), t = N(), n = Ee(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new ns(e, t, n)); }
var ns = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { $y(this.tView.data[this.tNode.customControlIndex], t) && Fn(this.tNode, this.lView, this.tNode.customControlIndex, t, t, _t(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; Fn(this.tNode, this.lView, this.tNode.customControlIndex, n, n, _t(this.tNode, this.lView, t)); }
    listenToDom(t, n) { Zu(this.tNode, this.tView, this.lView, void 0, this.lView[C], t, n, _t(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            wt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            wt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; wt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function x_(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} O_(e, t); }
function O_(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (Yp(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (Yp(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function Yp(e, t) { return L_(e, t) && $y(e, t + "Change"); }
function L_(e, t) { return t in e.inputs; }
function $y(e, t) { return t in e.outputs; }
var ot = Symbol("BINDING"), Kp = { kind: "input", requiredVars: 1 }, P_ = { kind: "output", requiredVars: 0 };
function Jp(e, t, n) { let o = g(), r = fe(); if (U(o, r, n)) {
    let i = o[m], s = Ee(), a = de(s.index, o);
    _r(a, 1);
    let c = i.directiveRegistry[e], l = ow(s, i, o, c, t, n);
} }
function Uy(e, t) { if (e === "formField") {
    let o = { [ot]: Kp, create: () => { jy(); }, update: () => { Jp(o.targetIdx, e, t()), By(); } };
    return o;
} let n = { [ot]: Kp, update: () => Jp(n.targetIdx, e, t()) }; return n; }
function zy(e, t) { let n = { [ot]: P_, create: () => { let o = g(), r = T(), s = o[m].directiveRegistry[n.targetIdx]; R_(r, o, t, s, e); } }; return n; }
function F_(e, t) { let n = Uy(e, t), o = zy(e + "Change", i => t.set(i)); return { [ot]: { kind: "twoWay", requiredVars: n[ot].requiredVars + o[ot].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function H_(e) { let t = e; for (; t;) {
    let n = xT(t);
    if (n !== null)
        for (let o = v; o < n.length; o++) {
            let r = n[o];
            if (!te(r) && !J(r) || r[j] !== t)
                continue;
            let i = n[m], s = Ht(i, o);
            if (he(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = Yu(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function Yu(e) { return e.debugInfo?.className || e.type.name || null; }
var os = class extends br {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new bt(n, this.ngModule); }
};
function j_(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & ks.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function V_(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function B_(e, t, n) { let o = t instanceof mt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new bn(n, o) : n; }
function $_(e) { let t = e.get(or, null); if (t === null)
    throw new w(407, !1); let n = e.get(Ay, null), o = e.get(Ct, null), r = e.get(un, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function U_(e, t) { let n = Wy(e); return As(t, n, n === "svg" ? jf : n === "math" ? Vf : null); }
function Wy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var bt = class extends ea {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= j_(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= V_(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = DN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { k(b.DynamicComponentStart); let a = x(null); try {
        let c = this.componentDef, l = B_(c, r || this.ngModule, t), u = $_(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(Yu(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        x(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = z_(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? QN(l, r, a.encapsulation, n) : U_(a, l), d = s?.some(Xp) || i?.some(h => typeof h != "function" && h.bindings.some(Xp)), f = Rs(null, c, null, 512 | Tu(a), null, null, t, l, n, null, Fg(u, n, !0)); f[v] = u, pi(f); let p = null; try {
        let h = qu(v, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        cm(l, u, h), be(u, f), Bs(c, f, h), pu(c, h, f), Qu(c, h), o !== void 0 && G_(h, this.ngContentSelectors, o), p = de(h.index, f), f[F] = p[F], Gs(c, f, null);
    }
    catch (h) {
        throw p !== null && Qc(p), Qc(f), h;
    }
    finally {
        k(b.DynamicComponentEnd), hi();
    } return new rs(this.componentType, f, !!d); }
};
function z_(e, t, n, o) { let r = e ? ["ng-version", "21.2.6"] : CN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[ot].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[ot].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Te(d);
        c.push(f);
    } return Cu(0, null, W_(i, s), 1, a, c, null, null, null, [r], null); }
function W_(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Xp(e) { let t = e[ot].kind; return t === "input" || t === "twoWay"; }
var rs = class extends by {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Ht(n[m], v), this.location = Wn(this._tNode, n), this.instance = de(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new St(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Ws(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = de(o.index, r); _r(s, 1); }
    get injector() { return new Nt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function G_(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var oa = (() => { class e {
    static __NG_ELEMENT_ID__ = q_;
} return e; })();
function q_() { let e = T(); return Gy(e, g()); }
var Ml = class e extends oa {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Wn(this._hostTNode, this._hostLView); }
    get injector() { return new Nt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Ql(this._hostTNode, this._hostLView); if (Zh(t)) {
        let n = $i(t, this._hostLView), o = Bi(t), r = n[m].data[o + 8];
        return new Nt(r, n);
    }
    else
        return new Nt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = eh(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - H; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = nr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, en(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Oo(t), l; if (c)
        l = n;
    else {
        let I = n || {};
        l = I.index, o = I.injector, r = I.projectableNodes, i = I.environmentInjector || I.ngModuleRef, s = I.directives, a = I.bindings;
    } let u = c ? t : new bt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(mt, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = nr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, en(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (zf(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[G], l = new e(c, c[ce], c[G]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return ro(s, r, i, o), t.attachToViewContainerRef(), La(kc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = eh(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Xo(this._lContainer, n); o && (vo(kc(this._lContainer), n), wr(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Xo(this._lContainer, n); return o && vo(kc(this._lContainer), n) != null ? new St(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function eh(e) { return e[Mo]; }
function kc(e) { return e[Mo] || (e[Mo] = []); }
function Gy(e, t) { let n, o = t[e.index]; return J(o) ? n = o : (n = ty(o, t, null, e), t[e.index] = n, Mu(t, n)), qy(n, t, e, o), new Ml(n, e, t); }
function Q_(e, t) { let n = e[C], o = n.createComment(""), r = re(t, e), i = n.parentNode(r); return Kt(n, i, o, n.nextSibling(r), !1), o; }
var qy = Zy, Ku = () => !1;
function Qy(e, t, n) { return Ku(e, t, n); }
function Zy(e, t, n, o) { if (e[Pe])
    return; let r; n.type & 8 ? r = O(o) : r = Q_(t, n), e[Pe] = r; }
function Z_(e, t, n) { if (e[Pe] && e[Ie])
    return !0; let o = n[oe], r = t.index - v; if (!o || qn(t) || Ss(o, r))
    return !1; let s = Jc(o, r), a = o.data[Zn]?.[r], [c, l] = d_(s, a); return e[Pe] = c, e[Ie] = l, !0; }
function Y_(e, t, n, o) { Ku(e, n, t) || Zy(e, t, n, o); }
function Yy() { qy = Y_, Ku = Z_; }
var Nl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, wl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        Xu(t, n).matches !== null && this.queries[n].setDirty(); }
}, is = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = tS(t) : this.predicate = t; }
}, _l = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Sl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, K_(n, i)), this.matchTNodeWithReadOption(t, n, Ri(n, t, i, !1, !1));
        }
    else
        o === er ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Ri(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === hr || r === oa || r === er && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Ri(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function K_(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function J_(e, t) { return e.type & 11 ? Wn(e, t) : e.type & 4 ? Qs(e, t) : null; }
function X_(e, t, n, o) { return n === -1 ? J_(t, e) : n === -2 ? eS(e, t, o) : qo(e, e[m], n, t); }
function eS(e, t, n) { if (n === hr)
    return Wn(t, e); if (n === er)
    return Qs(t, e); if (n === oa)
    return Gy(t, e); }
function Ky(e, t, n, o) { let r = t[$e].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(X_(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function bl(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = Ky(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = H; d < u.length; d++) {
                let f = u[d];
                f[vt] === f[G] && bl(f[m], f, l, o);
            }
            if (u[Pt] !== null) {
                let d = u[Pt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    bl(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function Ju(e, t) { return e[$e].queries[t].queryList; }
function Jy(e, t, n) { let o = new Wi((n & 4) === 4); return Qf(e, t, o, o.destroy), (t[$e] ??= new wl).queries.push(new Nl(o)) - 1; }
function Xy(e, t, n) { let o = N(); return o.firstCreatePass && (tv(o, new is(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), Jy(o, g(), t); }
function ev(e, t, n, o) { let r = N(); if (r.firstCreatePass) {
    let i = T();
    tv(r, new is(t, n, o), i.index), nS(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return Jy(r, g(), n); }
function tS(e) { return e.split(",").map(t => t.trim()); }
function tv(e, t, n) { e.queries === null && (e.queries = new _l), e.queries.track(new Sl(t, n)); }
function nS(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Xu(e, t) { return e.queries.getByIndex(t); }
function nv(e, t) { let n = e[m], o = Xu(n, t); return o.crossesNgTemplate ? bl(n, e, t, []) : Ky(n, e, o, t); }
function ed(e, t, n) { let o, r = Nf(() => { o._dirtyCounter(); let i = oS(o, e); if (t && i === void 0)
    throw new w(-951, !1); return i; }); return o = r[Xe], o._dirtyCounter = mc(0), o._flatValue = void 0, r; }
function td(e) { return ed(!0, !1, e); }
function nd(e) { return ed(!0, !0, e); }
function od(e) { return ed(!1, !1, e); }
function ov(e, t) { let n = e[Xe]; n._lView = g(), n._queryIndex = t, n._queryList = Ju(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function oS(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[S] & 4)
    return t ? void 0 : P; let r = Ju(n, o), i = nv(n, o); return r.reset(i, ag), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var nn = new Map, ir = new Set;
function rv(e) { return pt(this, null, function* () { let t = nn; nn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => cS(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => pt(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), ir.delete(i); })); yield Promise.all(r); }); }
function rS(e, t) { iv(t) && (nn.set(e, t), ir.add(e)); }
function iS(e) { return ir.has(e); }
function iv(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function sS() { let e = nn; return nn = new Map, e; }
function aS(e) { ir.clear(); for (let t of e.keys())
    ir.add(t); nn = e; }
function sv() { return nn.size === 0; }
function cS(e, t) { return pt(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new w(918, !1); return t.text(); }); }
var Al = new Map, av = !0;
function lS(e, t, n) { if (t && t !== n && av)
    throw new w(921, !1); }
function rd(e, t) { let n = Al.get(t) || null; lS(t, n, e), Al.set(t, e); }
function id(e) { return Al.get(e); }
function uS(e) { av = !e; }
var Hn = class {
}, cv = class {
};
function lv(e, t) { return new jn(e, t ?? null, []); }
var dS = lv, jn = class extends Hn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new os(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = pn(t); this._bootstrapComponents = Mn(i.bootstrap), this._r3Injector = op(t, n, [{ provide: Hn, useValue: this }, { provide: br, useValue: this.componentFactoryResolver }, ...o], Wr(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Vn = class extends cv {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new jn(this.moduleType, t, []); }
};
function uv(e, t, n) { return new jn(e, t, n, !1); }
var sr = class extends Hn {
    injector;
    componentFactoryResolver = new os(this);
    instance = null;
    constructor(t) { super(); let n = new Ha([...t.providers, { provide: Hn, useValue: this }, { provide: br, useValue: this.componentFactoryResolver }], t.parent || oi(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function sd(e, t, n = null) { return new sr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var fS = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Fa(!1, n.type), r = o.length > 0 ? sd([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e(Oe(mt)) });
} return e; })();
function dv(e) { return Ze(() => { let t = gv(e), n = Je(Z({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === ys.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(fS).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Ae.Emulated, styles: e.styles || P, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && q("NgStandalone"), mv(n); let o = e.dependencies; return n.directiveDefs = ss(o, fv), n.pipeDefs = ss(o, Ve), n.id = mS(n), n; }); }
function fv(e) { return W(e) || Te(e); }
function ad(e) { return Ze(() => ({ type: e.type, bootstrap: e.bootstrap || P, declarations: e.declarations || P, imports: e.imports || P, exports: e.exports || P, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function pS(e, t) { if (e == null)
    return Ne; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = ks.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function hS(e) { if (e == null)
    return Ne; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function pv(e) { return Ze(() => { let t = gv(e); return mv(t), t; }); }
function hv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function gv(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Ne, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || P, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: pS(e.inputs, t), outputs: hS(e.outputs), debugInfo: null }; }
function mv(e) { e.features?.forEach(t => t(e)); }
function ss(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var gS = new Map;
function mS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function yv(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function vv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = yS, n.hostDirectives = o ? e.map(Rl) : [e]) : o ? n.hostDirectives.unshift(...e.map(Rl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function yS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, Iv(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && Se(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function Iv(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                th(Rl(i), t, n);
        }
        else
            th(o, t, n); }
function th(e, t, n) { let o = Te(e.directive); vS(o.declaredInputs, e.inputs), Iv(o, t, n), n.set(o, e), t.push(o); }
function Rl(e) { return typeof e == "function" ? { directive: z(e), inputs: Ne, outputs: Ne } : { directive: z(e.directive), inputs: nh(e.inputs), outputs: nh(e.outputs) }; }
function nh(e) { if (e === void 0 || e.length === 0)
    return Ne; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function vS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function IS(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function cd(e) { let t = IS(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (Se(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new w(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = xc(e.inputs), s.declaredInputs = xc(e.declaredInputs), s.outputs = xc(e.outputs);
            let a = r.hostBindings;
            a && MS(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && CS(e, c), l && TS(e, l), ES(e, r), Sf(e.outputs, r.outputs), Se(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === cd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} DS(o); }
function ES(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function DS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = xn(r.hostAttrs, n = xn(n, r.hostAttrs));
} }
function xc(e) { return e === Ne ? {} : e === P ? [] : e; }
function CS(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function TS(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function MS(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function Ev(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = xn(e.mergedAttrs, e.attrs);
    let u = e.tView = Cu(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), We(e, !1); let c = Dv(n, t, e, o); Ao() && Lu(n, t, c, e), be(c, t); let l = ty(c, t, c, e); t[o + v] = l, Mu(t, l), Qy(l, e, t); }
function NS(e, t, n, o, r, i, s, a, c, l, u) { let d = n + v, f; return t.firstCreatePass ? (f = dn(t, d, 4, s || null, a || null), ui() && ky(t, e, f, le(t.consts, l), ju), Wh(t, f)) : f = t.data[d], Ev(f, e, t, n, o, r, i, c), mn(f) && Bs(t, e, f), l != null && no(e, f, u), f; }
function on(e, t, n, o, r, i, s, a, c, l, u) { let d = n + v, f; if (t.firstCreatePass) {
    if (f = dn(t, d, 4, s || null, a || null), l != null) {
        let p = le(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return Ev(f, e, t, n, o, r, i, c), l != null && no(e, f, u), f; }
function ld(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = le(l.consts, i); return NS(c, l, e, t, n, o, r, u, void 0, s, a), ld; }
function ud(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = le(l.consts, i); return on(c, l, e, t, n, o, r, u, void 0, s, a), ud; }
var Dv = Cv;
function Cv(e, t, n, o) { return Fe(!0), t[C].createComment(""); }
function wS(e, t, n, o) { let r = !bs(t, n); Fe(r); let i = t[oe]?.data[Es]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return Cv(e, t); let s = t[oe], a = Sr(s, e, t, n); _s(s, o, a); let c = du(s, o); return Ys(c, a); }
function Tv() { Dv = wS; }
var X = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(X || {}), oh = 0, _S = 1, $ = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })($ || {}), ar = (function (e) { return e[e.Initial = -1] = "Initial", e; })(ar || {}), An = 0, ut = 1, Po = 2, wi = 3, SS = 4, bS = 5, ra = 6, AS = 7, Rn = 8, RS = 9, dd = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(dd || {});
function Ar(e, t, n) { let o = Nv(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Li(e, t) { let n = Nv(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function Mv(e) { Li(1, e), Li(0, e), Li(2, e); }
function Nv(e) { let t = SS; return e === 1 ? t = bS : e === 2 && (t = RS), t; }
function Rr(e) { return e + 1; }
function ge(e, t) { let n = e[m], o = Rr(t.index); return e[o]; }
function kS(e, t, n) { let o = e[m], r = Rr(t); e[r] = n; }
function se(e, t) { let n = Rr(t.index); return e.data[n]; }
function xS(e, t, n) { let o = Rr(t); e.data[o] = n; }
function OS(e, t, n) { let o = t[m], r = se(o, n); switch (e) {
    case $.Complete: return r.primaryTmplIndex;
    case $.Loading: return r.loadingTmplIndex;
    case $.Error: return r.errorTmplIndex;
    case $.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function kl(e, t) { return t === $.Placeholder ? e.placeholderBlockConfig?.[oh] ?? null : t === $.Loading ? e.loadingBlockConfig?.[oh] ?? null : null; }
function wv(e) { return e.loadingBlockConfig?.[_S] ?? null; }
function rh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function LS(e, t) { let n = t.primaryTmplIndex + v; return Ht(e, n); }
function _v(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Sv(e, t) { let n = null, o = Rr(t.index); return v < o && o < e.bindingStartIndex && (n = se(e, t)), !!n && _v(n); }
function fd(e, t, n, o) { let r = n.get(B); return sM(e, () => r.run(t), i => r.runOutsideAngular(() => iM(i)), o); }
function PS(e, t, n) { return n == null ? e : n >= 0 ? Wf(n, e) : e[t.index][H] ?? null; }
function FS(e, t) { return Ft(v + t, e); }
function co(e, t, n, o, r, i, s, a) { let c = e[R], l = c.get(B), u; function d() { if (It(e)) {
    u.destroy();
    return;
} let f = ge(e, t), p = f[ut]; if (p !== ar.Initial && p !== $.Placeholder) {
    u.destroy();
    return;
} let h = PS(e, t, o); if (!h || (u.destroy(), It(h)))
    return; let y = FS(h, n), I = r(y, () => { l.run(() => { e !== h && za(h, I), i(); }); }, c, a); e !== h && li(h, I), Ar(s, f, I); } u = bm({ read: d }, { injector: c }); }
function ia(e, t) { let n = t.get(VS), o = () => n.remove(e); return n.add(e), o; }
var HS = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, jS = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, VS = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(B);
    requestIdleCallbackFn = HS().bind(globalThis);
    cancelIdleCallbackFn = jS().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function sa(e) { return (t, n) => bv(e, t, n); }
function bv(e, t, n) { let o = n.get(Av), r = n.get(B), i = () => o.remove(t); return o.add(e, t, r), i; }
var Av = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } xf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Pa(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Pa(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), BS = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? sd(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), $S = new _("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Rv = new _("");
function Oc(e, t, n) { return e.get(BS).getOrCreateInjector(t, e, n, ""); }
function US(e, t, n) { if (e instanceof bn) {
    let r = e.injector, i = e.parentInjector, s = Oc(i, t, n);
    return new bn(r, s);
} let o = e.get(mt); if (o !== e) {
    let r = Oc(o, t, n);
    return new bn(e, r);
} return Oc(e, t, n); }
function nt(e, t, n, o = !1) { let r = n[G], i = r[m]; if (It(r))
    return; let s = ge(r, t), a = s[ut], c = s[AS]; if (!(c !== null && e < c) && sh(a, e) && sh(s[An] ?? -1, e)) {
    let l = se(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (wv(l) !== null || kl(l, $.Loading) !== null || kl(l, $.Placeholder)) ? xl : kv;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Vu(r, f);
    }
} }
function zS(e, t) { let n = e[Ie]?.findIndex(r => r.data[vr] === t[ut]) ?? -1; return { dehydratedView: n > -1 ? e[Ie][n] : null, dehydratedViewIx: n }; }
function kv(e, t, n, o, r) { k(b.DeferBlockStateStart); let i = OS(e, r, o); if (i !== null) {
    t[ut] = e;
    let s = r[m], a = i + v, c = Ht(s, a), l = 0;
    Bu(n, l);
    let u;
    if (e === $.Complete) {
        let h = se(s, o), y = h.providers;
        y && y.length > 0 && (u = US(r[R], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = zS(n, t), p = oo(r, c, null, { injector: u, dehydratedView: d });
    if (ro(n, p, l, en(c, d)), _r(p, 2), f > -1 && n[Ie]?.splice(f, 1), (e === $.Complete || e === $.Error) && Array.isArray(t[Rn])) {
        for (let h of t[Rn])
            h();
        t[Rn] = null;
    }
} k(b.DeferBlockStateEnd); }
function WS(e, t, n, o, r) { let i = Date.now(), s = r[m], a = se(s, o); if (t[Po] === null || t[Po] <= i) {
    t[Po] = null;
    let c = wv(a), l = t[wi] !== null;
    if (e === $.Loading && c !== null && !l) {
        t[An] = e;
        let u = ih(c, t, o, n, r);
        t[wi] = u;
    }
    else {
        e > $.Loading && l && (t[wi](), t[wi] = null, t[An] = null), kv(e, t, n, o, r);
        let u = kl(a, e);
        u !== null && (t[Po] = i + u, ih(u, t, o, n, r));
    }
}
else
    t[An] = e; }
function ih(e, t, n, o, r) { return bv(e, () => { let s = t[An]; t[Po] = null, t[An] = null, s !== null && nt(s, n, o); }, r[R]); }
function sh(e, t) { return e < t; }
function lo(e, t) { let n = e[t.index]; nt($.Placeholder, t, n); }
function ah(e, t, n) { e.loadingPromise.then(() => { e.loadingState === X.COMPLETE ? nt($.Complete, t, n) : e.loadingState === X.FAILED && nt($.Error, t, n); }); }
var xl = null;
function xv(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = le(r, n)), o != null && (t.loadingBlockConfig = le(r, o)), xl === null && (xl = WS); }
var Pi = "__ngAsyncComponentMetadataFn__";
function GS(e) { return e[Pi] ?? null; }
function Ov(e, t, n) { let o = e; return o[Pi] = () => Promise.all(t()).then(r => (n(...r), o[Pi] = null, r)), o[Pi]; }
function pd(e, t, n, o) { return Ze(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Z(Z({}, r.propDecorators), o) : r.propDecorators = o); }); }
var qS = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function hd(e) { return typeof e == "function" && e[Xe] !== void 0; }
function gd(e) { return hd(e) && typeof e.set == "function"; }
function Fi(e, t) { let n = e[m]; for (let o = v; o < n.bindingStartIndex; o++)
    if (J(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = se(n, s);
            if (_v(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        te(r[j]) && Fi(r[j], t);
        for (let s = H; s < r.length; s++)
            Fi(r[s], t);
    }
    else
        te(e[o]) && Fi(e[o], t); }
function QS() { return q("Chrome DevTools profiling"), () => { }; }
function ZS(e) { let t = e.get(Vt), n = e.get(at), o = Ig(t, n), r = {}; for (let [i, s] of Object.entries(o))
    lM(i) || (r[i] = s); return r; }
var ch = "ng";
function YS(e, t) { KS(e, t); }
function KS(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = ve;
    n[ch] ??= {}, n[ch][e] = t;
} }
var Lv = new _(""), Pv = new _(""), JS = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Ff() && (this._destroyRef = E(Ro, { optional: !0 }) ?? void 0), md || (Hv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { B.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Oe(B), Oe(Fv), Oe(Pv)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac });
} return e; })(), Fv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return md?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Hv(e) { md = e; }
var md;
function yd(e) { return !!e && typeof e.then == "function"; }
function jv(e) { return !!e && typeof e.subscribe == "function"; }
var vd = new _("");
function Vv(e) { return et([{ provide: vd, multi: !0, useValue: e }]); }
var Id = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = E(vd, { optional: !0 }) ?? [];
    injector = E(De);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ri(this.injector, r);
        if (yd(i))
            n.push(i);
        else if (jv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), kr = new _("");
function Ed() { wf(() => { let e = ""; throw new w(600, e); }); }
function Bv(e) { return e.isBoundToModule; }
var XS = 10;
function Dd(e, t) { return Array.isArray(t) ? t.reduce(Dd, e) : Z(Z({}, e), t); }
var ke = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E($t);
    afterRenderManager = E(Ps);
    zonelessEnabled = E(vn);
    rootEffectScheduler = E(vc);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new xh;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(Bt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(ZC(n => !n)); }
    constructor() { E(un, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(mt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = De.NULL) { return this._injector.get(B).run(() => { k(b.BootstrapComponentStart); let s = n instanceof ea; if (!this._injector.get(Id).done) {
        let h = "";
        throw new w(405, h);
    } let c; s ? c = n : c = this._injector.get(br).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Bv(c) ? void 0 : this._injector.get(Hn), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(Lv, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), jo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), k(b.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { k(b.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ls.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw k(b.ChangeDetectionEnd), new w(101, !1); let n = x(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, x(n), this.afterTick.next(), k(b.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(or, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < XS;) {
        k(b.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            k(b.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !_o(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Ym(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => _o(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; jo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(kr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => jo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new w(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function jo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function aa() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function $v(e) { let t = g(), n = T(); if (lo(t, n), !Wv(0, t))
    return; let o = t[R], r = ge(t, n), i = e(() => me(0, t, n), o); Ar(0, r, i); }
function Uv(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[R], o = T(), r = t[m], i = se(r, o); if (i.loadingState === X.NOT_STARTED) {
    let s = ge(t, o), c = e(() => xr(i, t, o), n);
    Ar(1, s, c);
} }
function zv(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[R], r = ge(t, n), i = r[ra], s = e(() => dt(o, i), o); Ar(2, r, s); }
function xr(e, t, n) { ca(e, t, n); }
function ca(e, t, n) { let o = t[R], r = t[m]; if (e.loadingState !== X.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = ge(t, n), s = LS(r, e); e.loadingState = X.IN_PROGRESS, Li(1, i); let a = e.dependencyResolverFn, c = o.get(yc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, y = W(h) || Te(h);
        if (y)
            d.push(y);
        else {
            let I = Ve(h);
            I && f.push(I);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = X.FAILED, e.errorTmplIndex === null) {
        let h = new w(-750, !1);
        Vu(t, h);
    }
}
else {
    e.loadingState = X.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = rh(p.directiveRegistry, d);
        let h = d.map(I => I.type), y = Fa(!1, ...h);
        e.providers = y;
    }
    f.length > 0 && (p.pipeRegistry = rh(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = X.COMPLETE, c(); }), e.loadingPromise); }
function Wv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[R].get(Rv, null, { optional: !0 })?.behavior === dd.Manual); }
function me(e, t, n) { let o = t[m], r = t[n.index]; if (!Wv(e, t))
    return; let i = ge(t, n), s = se(o, n); switch (Mv(i), s.loadingState) {
    case X.NOT_STARTED:
        nt($.Loading, n, r), ca(s, t, n), s.loadingState === X.IN_PROGRESS && ah(s, n, r);
        break;
    case X.IN_PROGRESS:
        nt($.Loading, n, r), ah(s, n, r);
        break;
    case X.COMPLETE:
        nt($.Complete, n, r);
        break;
    case X.FAILED:
        nt($.Error, n, r);
        break;
    default:
} }
function dt(e, t, n) { return pt(this, null, function* () { let o = e.get(ct); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = vM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), nb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield lh(e, s, n) : o.awaitParentBlock(a, () => pt(null, null, function* () { return yield lh(e, s, n); })); }); }
function lh(e, t, n) { return pt(this, null, function* () { let o = e.get(ct), r = o.hydrating, i = e.get(Bt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield rb(u), yield ob(e), eb(u)) {
            l_(u), uh(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        tb(c, t, o), uh(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), u_(o.get(a), t, o, e.get(ke)); }); }
function eb(e) { return ge(e.lView, e.tNode)[ut] === $.Error; }
function tb(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Xs(r.lContainer); }
function uh(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function nb(e, t) { for (let n of t)
    e.hydrating.set(n, aa()); }
function ob(e) { return new Promise(t => Ru(t, { injector: e })); }
function rb(e) { return pt(this, null, function* () { let { tNode: t, lView: n } = e, o = ge(n, t); return new Promise(r => { ib(o, r), me(2, n, t); }); }); }
function ib(e, t) { Array.isArray(e[Rn]) || (e[Rn] = []), e[Rn].push(t); }
function Q(e, t, n) { return e === 0 ? dh(t, n) : e === 2 ? !dh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function sb(e) { return e != null && (e & 1) === 1; }
function dh(e, t) { let n = e[R], o = se(e[m], t), r = Dr(n), i = sb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = ge(e, t)[ra] !== null; return !(i && a && r); }
function At(e, t) { let n = se(e, t); return n.hydrateTriggers ??= new Map; }
function Gv(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[rt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} ab(e, o), ub(e, s), cb(e, i), lb(e, r); }
function ab(e, t) { for (let n of t) {
    let o = e.get(ct), i = ia(() => dt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function cb(e, t) { if (t.length > 0) {
    let n = e.get(ct);
    for (let o of t) {
        let r = fd(o.el, () => dt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function lb(e, t) { for (let n of t) {
    let o = e.get(ct), r = () => dt(e, n.blockName), s = sa(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function ub(e, t) { for (let n of t)
    dt(e, n.blockName); }
function qv(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = N(), f = e + v, p = on(u, d, e, null, 0, 0), h = u[R], y = Dr(h); if (d.firstCreatePass) {
    q("NgDefer");
    let Ke = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: X.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, Ke, a, s), xS(d, f, Ke);
} let I = u[f]; Qy(I, p, u); let D = null, A = null; if (I[Ie]?.length > 0) {
    let Ke = I[Ie][0].data;
    A = Ke[Ts] ?? null, D = Ke[vr];
} let K = [null, ar.Initial, null, null, null, null, A, D, null, null]; kS(u, f, K); let xe = null; A !== null && y && (xe = h.get(ct), xe.add(A, { lView: u, tNode: p, lContainer: I })); let Ce = () => { Mv(K), A !== null && xe?.cleanup([A]); }; Ar(0, K, () => za(u, Ce)), li(u, Ce); }
function Qv(e) { let t = g(), n = Ee(); if (!Q(0, t, n))
    return; let o = fe(); if (U(t, o, e)) {
    let r = x(null);
    try {
        let i = !!e, a = ge(t, n)[ut];
        i === !1 && a === ar.Initial ? lo(t, n) : i === !0 && (a === ar.Initial || a === $.Placeholder) && me(0, t, n);
    }
    finally {
        x(r);
    }
} }
function Zv(e) { let t = g(), n = Ee(); if (!Q(1, t, n))
    return; let o = fe(); if (U(t, o, e)) {
    let r = x(null);
    try {
        let i = !!e, s = t[m], a = se(s, n);
        i === !0 && a.loadingState === X.NOT_STARTED && xr(a, t, n);
    }
    finally {
        x(r);
    }
} }
function Yv(e) { let t = g(), n = Ee(); if (!Q(2, t, n))
    return; let o = fe(), r = N(); if (At(r, n).set(6, null), U(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        me(2, t, n);
    else {
        let s = t[R], a = x(null);
        try {
            if (!!e === !0) {
                let u = ge(t, n)[ra];
                dt(s, u);
            }
        }
        finally {
            x(a);
        }
    } }
function Kv() { let e = g(), t = T(); if (!Q(2, e, t))
    return; At(N(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && me(2, e, t); }
function Jv() { let e = g(), t = T(); Q(0, e, t) && $v(ia); }
function Xv() { let e = g(), t = T(); Q(1, e, t) && Uv(ia); }
function eI() { let e = g(), t = T(); if (!Q(2, e, t))
    return; At(N(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? me(2, e, t) : zv(ia, e, t); }
function tI() { let e = g(), t = T(); if (!Q(0, e, t))
    return; se(e[m], t).loadingTmplIndex === null && lo(e, t), me(0, e, t); }
function nI() { let e = g(), t = T(); if (!Q(1, e, t))
    return; let n = e[m], o = se(n, t); o.loadingState === X.NOT_STARTED && ca(o, e, t); }
function oI() { let e = g(), t = T(); if (!Q(2, e, t))
    return; if (At(N(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    me(2, e, t);
else {
    let o = e[R], i = ge(e, t)[ra];
    dt(o, i);
} }
function rI(e) { let t = g(), n = T(); Q(0, t, n) && $v(sa(e)); }
function iI(e) { let t = g(), n = T(); Q(1, t, n) && Uv(sa(e)); }
function sI(e) { let t = g(), n = T(); if (!Q(2, t, n))
    return; At(N(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? me(2, t, n) : zv(sa(e), t, n); }
function aI(e, t) { let n = g(), o = T(); Q(0, n, o) && (lo(n, o), typeof ngServerMode < "u" && ngServerMode || co(n, o, e, t, Ng, () => me(0, n, o), 0)); }
function cI(e, t) { let n = g(), o = T(); if (!Q(1, n, o))
    return; let r = n[m], i = se(r, o); i.loadingState === X.NOT_STARTED && co(n, o, e, t, Ng, () => xr(i, n, o), 1); }
function lI() { let e = g(), t = T(); if (!Q(2, e, t))
    return; At(N(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && me(2, e, t); }
function uI(e, t) { let n = g(), o = T(); Q(0, n, o) && (lo(n, o), typeof ngServerMode < "u" && ngServerMode || co(n, o, e, t, Mg, () => me(0, n, o), 0)); }
function dI(e, t) { let n = g(), o = T(); if (!Q(1, n, o))
    return; let r = n[m], i = se(r, o); i.loadingState === X.NOT_STARTED && co(n, o, e, t, Mg, () => xr(i, n, o), 1); }
function fI() { let e = g(), t = T(); if (!Q(2, e, t))
    return; At(N(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && me(2, e, t); }
function pI(e, t, n) { let o = g(), r = T(); Q(0, o, r) && (lo(o, r), typeof ngServerMode < "u" && ngServerMode || co(o, r, e, t, fd, () => me(0, o, r), 0, n)); }
function hI(e, t, n) { let o = g(), r = T(); if (!Q(1, o, r))
    return; let i = o[m], s = se(i, r); s.loadingState === X.NOT_STARTED && co(o, r, e, t, fd, () => xr(s, o, r), 1, n); }
function gI(e) { let t = g(), n = T(); if (!Q(2, t, n))
    return; At(N(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && me(2, t, n); }
function Cd(e, t) { let n = g(), o = fe(); if (U(n, o, t)) {
    let r = N(), i = Ee();
    if (Ws(i, r, n, e, t))
        he(i) && zm(n, i.index);
    else {
        let a = re(i, n);
        $s(n[C], a, null, i.value, e, t, null);
    }
} return Cd; }
function Td(e, t, n, o) { let r = g(), i = fe(); if (U(r, i, t)) {
    let s = N(), a = Ee();
    tw(a, r, e, t, n, o);
} return Td; }
function Vo(e) { if (q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return Vo; let t = g(); if (xs(t))
    return Vo; let n = T(), o = t[R].get(B); return Os(Ki(t), n, () => db(t, n, e, o)), js(t[R]), ku(t[R], Ki(t)), Vo; }
function db(e, t, n, o) { let r = re(t, e), i = e[C], s = Nm(n), a = [], c = !1, l = d => { if (Ko(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { Ko(d) === r && (Su(d, r) && (c = !0), fb(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), SN(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (Sm(r, Zt, ln), !Zt.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        wu(r);
    } }); });
} }
function fb(e, t, n) { let o = On.get(t); if (!(Ko(e) !== t || !o) && Su(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    wu(t);
} }
function Bo(e) { if (q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return Bo; let t = g(); if (xs(t))
    return Bo; let n = T(); return Os(Ki(t), n, () => pb(t, n, e)), js(t[R]), ku(t[R], Ki(t)), Bo; }
function pb(e, t, n) { let o = re(t, e); n.call(e[F], { target: o, animationComplete: bN }); }
function $o(e) { if (q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return $o; let t = g(); if (xs(t))
    return $o; let o = T(), r = t[R].get(B); return Os(Jt(t), o, () => hb(t, o, e, r)), js(t[R]), $o; }
function hb(e, t, n, o) { let { promise: r, resolve: i } = aa(), s = re(t, e), a = e[C]; Xt.add(e[we]), (Jt(e).get(t.index).resolvers ??= []).push(i); let c = Nm(n); return c && c.length > 0 ? gb(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function gb(e, t, n, o, r, i) { RN(e, r); let s = [], a = Jt(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(Ko(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || Su(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), Zt.delete(e), pl(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    hl(a, s), gl(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), _u(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; Sm(e, Zt, ln); let d = Zt.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (pl(t, e), hl(a, s), gl(n, t)); }); }); }
function as(e) { if (q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return as; let t = g(), n = T(); Xt.add(t[we]); let o = t[R].get(B), r = t[R].get(Mm); return Os(Jt(t), n, () => mb(t, n, e, o, r)), js(t[R]), as; }
function mb(e, t, n, o, r) { let { promise: i, resolve: s } = aa(), a = re(t, e), c = [], l = e[C], u = xs(e); (Jt(e).get(t.index).resolvers ??= []).push(s); let d = Jt(e).get(t.index)?.resolvers; if (u)
    Mi(e, t, a, d, c);
else {
    let f = setTimeout(() => Mi(e, t, a, d, c), r), p = { target: a, animationComplete: () => { Mi(e, t, a, d, c), clearTimeout(f); } };
    _u(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { Mi(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[F], p);
} return { promise: i, resolve: s }; }
function mI() { return g()[Y][F]; }
var Ol = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Lc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function yb(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    En(o);
    let l = t.length - 1;
    for (En(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = Lc(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = Lc(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let I = n(s, u), D = n(a, p), A = n(s, d);
        if (Object.is(A, D)) {
            let K = n(l, h);
            Object.is(K, I) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new cs, i ??= ph(e, s, a, n), Ll(e, r, s, A))
            e.updateValue(s, d), s++, a++;
        else if (i.has(A))
            r.set(I, e.detach(s)), a--;
        else {
            let K = e.create(s, t[s]);
            e.attach(s, K), s++, a++;
        }
    }
    for (; s <= l;)
        fh(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    En(o);
    let l = t[Symbol.iterator]();
    En(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = Lc(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new cs, i ??= ph(e, s, a, n);
            let h = n(s, f);
            if (Ll(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        fh(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function Ll(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function fh(e, t, n, o, r) { if (Ll(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function ph(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var cs = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function yI(e, t, n, o, r, i, s, a) { q("NgControlFlow"); let c = g(), l = N(), u = le(l.consts, i); return on(c, l, e, t, n, o, r, u, 256, s, a), la; }
function la(e, t, n, o, r, i, s, a) { q("NgControlFlow"); let c = g(), l = N(), u = le(l.consts, i); return on(c, l, e, t, n, o, r, u, 512, s, a), la; }
function vI(e, t) { q("NgControlFlow"); let n = g(), o = fe(), r = n[o] !== L ? n[o] : -1, i = r !== -1 ? ls(n, v + r) : void 0, s = 0; if (U(n, o, e)) {
    let a = x(null);
    try {
        if (i !== void 0 && Bu(i, s), e !== -1) {
            let c = v + e, l = ls(n, c), u = jl(n[m], c), d = _y(l, u, n), f = oo(n, u, t, { dehydratedView: d });
            ro(l, f, s, en(u, d));
        }
    }
    finally {
        x(a);
    }
}
else if (i !== void 0) {
    let a = ny(i, s);
    a !== void 0 && (a[F] = t);
} }
var Pl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - H; }
};
function II(e) { return e; }
function EI(e, t) { return t; }
var Fl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function DI(e, t, n, o, r, i, s, a, c, l, u, d, f) { q("NgControlFlow"); let p = g(), h = N(), y = c !== void 0, I = g(), D = a ? s.bind(I[Y][F]) : s, A = new Fl(y, D); I[v + e] = A, on(p, h, e + 1, t, n, o, r, le(h.consts, i), 256), y && on(p, h, e + 2, c, l, u, d, le(h.consts, f), 512); }
var Hl = class extends Ol {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - H; }
    at(t) { return this.getLView(t)[F].$implicit; }
    attach(t, n) { let o = n[oe]; this.needsIndexUpdate ||= t !== this.length, ro(this.lContainer, n, t, en(this.templateTNode, o)), vb(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, Ib(this.lContainer, t), Eb(this.lContainer, t); }
    create(t, n) { let o = nr(this.lContainer, this.templateTNode.tView.ssrId); return oo(this.hostLView, this.templateTNode, new Pl(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { wr(t[m], t); }
    updateValue(t, n) { this.getLView(t)[F].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[F].$index = t; }
    getLView(t) { return Db(this.lContainer, t); }
};
function CI(e) { let t = x(null), n = ie(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = ls(o, s);
    if (i.liveCollection === void 0) {
        let l = jl(r, s);
        i.liveCollection = new Hl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (yb(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = fe(), u = c.length === 0;
        if (U(o, l, u)) {
            let d = n + 2, f = ls(o, d);
            if (u) {
                let p = jl(r, d), h = _y(f, p, o), y = oo(o, p, void 0, { dehydratedView: h });
                ro(f, y, 0, en(p, h));
            }
            else
                r.firstUpdatePass && Js(f), Bu(f, 0);
        }
    }
}
finally {
    x(t);
} }
function ls(e, t) { return e[t]; }
function vb(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n], r = o ? o[Ue] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[R];
    HN(i, r), Xt.delete(o[we]), r.detachedLeaveAnimationFns = void 0;
} }
function Ib(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n], r = o ? o[Ue] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function Eb(e, t) { return Xo(e, t); }
function Db(e, t) { return ny(e, t); }
function jl(e, t) { return Ht(e, t); }
function Md(e, t, n) { let o = g(), r = fe(); if (U(o, r, t)) {
    let i = N(), s = Ee();
    Fu(s, o, e, t, o[C], n);
} return Md; }
function Vl(e, t, n, o, r) { Ws(t, e, n, r ? "class" : "style", o); }
function cr(e, t, n, o) { let r = g(), i = r[m], s = e + v, a = i.firstCreatePass ? qu(s, r, 2, t, ju, ui(), n, o) : i.data[s]; if (he(a)) {
    let c = r[Be].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(Yu(l), () => (hh(e, t, r, a, o), cr));
    }
} return hh(e, t, r, a, o), cr; }
function hh(e, t, n, o, r) { if (Us(o, n, e, t, _d), mn(o)) {
    let i = n[m];
    Bs(i, n, o), pu(i, o, n);
} r != null && no(n, o); }
function ua() { let e = N(), t = T(), n = zs(t); return e.firstCreatePass && Qu(e, n), Ga(n) && Za(), Wa(), n.classesWithoutHost != null && sT(n) && Vl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && aT(n) && Vl(e, n, g(), n.stylesWithoutHost, !1), ua; }
function Nd(e, t, n, o) { return cr(e, t, n, o), ua(), Nd; }
function da(e, t, n, o) { let r = g(), i = r[m], s = e + v, a = i.firstCreatePass ? Oy(s, i, 2, t, n, o) : i.data[s]; return Us(a, r, e, t, _d), o != null && no(r, a), da; }
function fa() { let e = T(), t = zs(e); return Ga(t) && Za(), Wa(), fa; }
function wd(e, t, n, o) { return da(e, t, n, o), fa(), wd; }
var _d = (e, t, n, o, r) => (Fe(!0), As(t[C], o, dc()));
function Cb(e, t, n, o, r) { let i = !bs(t, n); if (Fe(i), i)
    return As(t[C], o, dc()); let s = t[oe], a = Sr(s, e, t, n); return Vg(s, r) && _s(s, r, a.nextSibling), s && (Yl(n) || cg(a)) && he(n) && (Kf(n), am(a)), a; }
function TI() { _d = Cb; }
function pa(e, t, n) { let o = g(), r = o[m], i = e + v, s = r.firstCreatePass ? qu(i, o, 8, "ng-container", ju, ui(), t, n) : r.data[i]; if (Us(s, o, e, "ng-container", Rd), mn(s)) {
    let a = o[m];
    Bs(a, o, s), pu(a, s, o);
} return n != null && no(o, s), pa; }
function Or() { let e = N(), t = T(), n = zs(t); return e.firstCreatePass && Qu(e, n), Or; }
function Sd(e, t, n) { return pa(e, t, n), Or(), Sd; }
function ha(e, t, n) { let o = g(), r = o[m], i = e + v, s = r.firstCreatePass ? Oy(i, r, 8, "ng-container", t, n) : r.data[i]; return Us(s, o, e, "ng-container", Rd), n != null && no(o, s), ha; }
function bd() { let e = T(), t = zs(e); return Or; }
function Ad(e, t, n) { return ha(e, t, n), bd(), Ad; }
var Rd = (e, t, n, o, r) => (Fe(!0), yu(t[C], ""));
function Tb(e, t, n, o, r) { let i, s = !bs(t, n); if (Fe(s), s)
    return yu(t[C], ""); let a = t[oe], c = Sr(a, e, t, n), l = jg(a, r); return _s(a, r, c), i = Ys(l, c), i; }
function MI() { Rd = Tb; }
function NI() { return g(); }
function kd(e, t, n) { let o = g(), r = fe(); if (U(o, r, t)) {
    let i = N(), s = Ee();
    Hu(s, o, e, t, o[C], n);
} return kd; }
function xd(e, t, n) { let o = g(), r = fe(); if (U(o, r, t)) {
    let i = N(), s = Ee(), a = di(i.data), c = Wm(a, s, o);
    Hu(s, o, e, t, c, n);
} return xd; }
var xo = void 0;
function Mb(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var Nb = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], xo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], xo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", xo, xo, xo], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Mb], kn = {};
function wb(e, t, n) { typeof t != "string" && (n = t, t = e[Bn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), kn[t] = e, n && (kn[t][Bn.ExtraData] = n); }
function Od(e) { let t = bb(e), n = gh(t); if (n)
    return n; let o = t.split("-")[0]; if (n = gh(o), n)
    return n; if (o === "en")
    return Nb; throw new w(701, !1); }
function _b(e) { return Od(e)[Bn.CurrencyCode] || null; }
function wI(e) { return Od(e)[Bn.PluralCase]; }
function gh(e) { return e in kn || (kn[e] = ve.ng && ve.ng.common && ve.ng.common.locales && ve.ng.common.locales[e]), kn[e]; }
function Sb() { kn = {}; }
var Bn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Bn || {});
function bb(e) { return e.toLowerCase().replace(/_/g, "-"); }
var Ab = ["zero", "one", "two", "few", "many"];
function Rb(e, t) { let n = wI(t)(parseInt(e, 10)), o = Ab[n]; return o !== void 0 ? o : "other"; }
var Lr = "en-US", kb = "USD", _I = { marker: "element" }, SI = { marker: "ICU" }, tt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(tt || {}), bI = Lr;
function AI(e) { typeof e == "string" && (bI = e.toLowerCase().replace(/_/g, "-")); }
function xb() { return bI; }
var lr = 0, Uo = 0;
function Ob(e) { e && (lr = lr | 1 << Math.min(Uo, 31)), Uo++; }
function Lb(e, t, n) { if (Uo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Ge() - Uo - 1;
    OI(e, t, r, i, lr);
} lr = 0, Uo = 0; }
function RI(e, t, n) { let o = e[C]; switch (n) {
    case Node.COMMENT_NODE: return yu(o, t);
    case Node.TEXT_NODE: return mu(o, t);
    case Node.ELEMENT_NODE: return As(o, t, null);
} }
var zo = (e, t, n, o) => (Fe(!0), RI(e, n, o));
function Pb(e, t, n, o) { let r = e[oe], i = t - v, s = !Ks() || !r || So() || Ss(r, i); return Fe(s), s ? RI(e, n, o) : dy(r, i); }
function kI() { zo = Pb; }
function Fb(e, t, n, o) { let r = e[C]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & tt.COMMENT) === tt.COMMENT, l = (s & tt.APPEND_EAGERLY) === tt.APPEND_EAGERLY, u = s >>> tt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = zo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Ao()), l && n !== null && f && Kt(r, n, d, o, !1);
} }
function xI(e, t, n, o) { let r = n[C], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = zo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = Vw(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = O(n[l])), d !== null) {
                    let y = Bw(c), I = n[y];
                    Kt(r, d, I, u, !1);
                    let D = Fo(e, y);
                    if (D !== null && typeof D == "object") {
                        let A = Zs(D, n);
                        A !== null && xI(e, D.create[A], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                $s(r, Ft(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case SI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = zo(n, u, l, Node.COMMENT_NODE);
                    be(p, n);
                }
                break;
            case _I:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = zo(n, f, d, Node.ELEMENT_NODE);
                    be(p, n);
                }
                break;
            default:
        }
} }
function OI(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += M(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? $s(t[C], t[d], null, h, f, c, p) : Fu(h, t, f, c, t[C], p);
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && im(t[C], y, c);
                            break;
                        case 2:
                            Hb(e, Fo(e, d), t, c);
                            break;
                        case 3:
                            mh(e, Fo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Fo(e, l);
            t[u.currentCaseLViewIndex] < 0 && mh(e, u, o, t);
        }
    }
    i += a;
} }
function mh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = lr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), OI(e, o, t.update[r], n, i);
} }
function Hb(e, t, n, o) { let r = jb(t, o); if (Zs(t, n) !== r && (LI(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && xI(e, t.create[r], n, s), i_(n, t.anchorIdx, r);
} }
function LI(e, t, n) { let o = Zs(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Ft(s, n);
            a !== null && Tr(n[C], a);
        }
        else
            LI(e, Fo(e, ~s), n);
    }
} }
function jb(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = Rb(t, xb());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var us = /�(\d+):?\d*�/gi, Vb = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, Bb = /�(\d+)�/, PI = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Wo = "\uFFFD", $b = /�\/?\*(\d+:\d+)�/gi, Ub = /�(\/?[#*]\d+):?\d*�/gi, zb = /\uE500/g;
function Wb(e) { return e.replace(zb, " "); }
function Gb(e, t, n, o, r, i) { let s = yn(), a = [], c = [], l = [[]], u = [[]]; r = Yb(r, i); let d = Wb(r).split(Ub); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Bl(p);
        for (let y = 0; y < h.length; y++) {
            let I = h[y];
            if ((y & 1) === 0) {
                let D = I;
                D !== "" && qb(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = I;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let K = FI(e, s, l[0], n, a, "", !0).index;
                jI(u[0], e, n, c, t, D, K);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), I = v + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), We(yn(), !1);
        else {
            let D = jw(e, l[0], I);
            l.unshift([]), We(D, !0);
            let A = { kind: 2, index: I, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(A), u.unshift(A.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function FI(e, t, n, o, r, i, s) { let a = Nr(e, o, 1, null), c = a << tt.SHIFT, l = yn(); t === l && (l = null), l === null && (c |= tt.APPEND_EAGERLY), s && (c |= tt.COMMENT, NN(Uw)), r.push(c, i === null ? "" : i); let u = $u(e, a, s ? 32 : 1, i === null ? "" : i, null); ay(n, u); let d = u.index; return We(u, !1), l !== null && t !== l && Hw(l, d), u; }
function qb(e, t, n, o, r, i, s, a) { let c = a.match(us), u = FI(t, n, o, s, r, c ? null : a, !1).index; c && ds(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function Qb(e, t, n) { let r = T().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (Vb.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            ds(i, c, r, a, Zb(i), ll[a.toLowerCase()] ? Cr : null);
        }
    }
    e.data[t] = i;
} }
function ds(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(us), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | HI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function Zb(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function HI(e) { return 1 << Math.min(e, 31); }
function yh(e) { let t, n = "", o = 0, r = !1, i; for (; (t = $b.exec(e)) !== null;)
    r ? t[0] === `${Wo}/*${i}${Wo}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function Yb(e, t) { if (ly(t))
    return yh(e); {
    let n = e.indexOf(`:${t}${Wo}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Wo}\\/\\*\\d+:${t}${Wo}`));
    return yh(e.substring(n, o));
} }
function jI(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Nr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; eA(o, i, s), Fw(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let I = f[y];
        if (typeof I != "string") {
            let D = p.push(I) - 1;
            f[y] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = Jb(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && tA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function Kb(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(PI, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Bl(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Bl(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Bl(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            PI.test(c) ? o.push(Kb(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function Jb(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Xg(Is()).getInertBodyElement(a), h = dl(p) || p; return h ? VI(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function VI(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Nr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, I = y.tagName.toLowerCase();
            if (al.hasOwnProperty(I)) {
                Pc(i, _I, I, l, h), t.data[h] = I;
                let xe = y.attributes;
                for (let Ke = 0; Ke < xe.length; Ke++) {
                    let Rt = xe.item(Ke), Vr = Rt.name.toLowerCase();
                    !!Rt.value.match(us) ? cl.hasOwnProperty(Vr) && ds(a, Rt.value, h, Rt.name, 0, ll[Vr] ? Cr : null) : cl[Vr] && (ll[Vr] ? Ih(i, h, Rt.name, "unsafe:blocked") : Ih(i, h, Rt.name, Rt.value));
                }
                let Ce = { kind: 1, index: h, children: [] };
                e.push(Ce), f = VI(Ce.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, vh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", A = D.match(us);
            Pc(i, null, A ? "" : D, l, h), vh(s, h, d), A && (f = ds(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let K = Bb.exec(p.textContent || "");
            if (K) {
                let xe = parseInt(K[1], 10), Ce = u[xe];
                Pc(i, SI, "", l, h), jI(e, t, o, r, l, Ce, h), Xb(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function vh(e, t, n) { n === 0 && e.push(t); }
function Xb(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function eA(e, t, n) { e.push(HI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function tA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Pc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, $w(0, o, r)); }
function Ih(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var Eh = 0, nA = /\[(�.+?�?)\]/, oA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, rA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, iA = /{([A-Z0-9_]+)}/g, sA = /�I18N_EXP_(ICU(_\d+)?)�/g, aA = /\/\*/, cA = /\d+\:(\d+)/;
function lA(e, t = {}) { let n = e; if (nA.test(e)) {
    let o = {}, r = [Eh];
    n = n.replace(oA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let I = y.match(cA), D = I ? parseInt(I[1], 10) : Eh, A = aA.test(y); l.push([D, A, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(rA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(iA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(sA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Ld(e, t, n = -1) { let o = N(), r = g(), i = v + e, s = le(o.consts, t), a = yn(); if (o.firstCreatePass && Gb(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Y];
    f[S] |= 32;
}
else
    r[S] |= 32; let c = o.data[i], l = a === r[ce] ? null : a, u = Om(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Xw(r, i, a, n), Fb(r, c.create, u, d), rc(!0); }
function Pd() { rc(!1); }
function BI(e, t, n) { Ld(e, t, n), Pd(); }
function $I(e, t) { let n = N(), o = le(n.consts, t); Qb(n, e + v, o); }
function Fd(e) { let t = g(); return Ob(U(t, fe(), e)), Fd; }
function UI(e) { Lb(N(), g(), e + v); }
function zI(e, t = {}) { return lA(e, t); }
function Hd(e, t, n) { let o = g(), r = N(), i = T(); return Bd(r, o, o[C], i, e, t, n), Hd; }
function jd(e, t) { let n = T(), o = g(), r = N(), i = di(r.data), s = Wm(i, n, o); return Bd(r, o, s, n, e, t), jd; }
function Vd(e, t, n) { let o = g(), r = N(), i = T(); return (i.type & 3 || n) && Zu(i, r, o, n, o[C], e, t, _t(i, o, t)), Vd; }
function Bd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= _t(o, t, i), Zu(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= _t(o, t, i), Fn(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= _t(o, t, i), Fn(o, t, d, r, r, c);
} }
function WI(e = 1) { return np(e); }
function uA(e, t) { let n = null, o = mN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Im(e, i, !0) : IN(o, i))
        return r;
} return n; }
function GI(e) { let t = g()[Y][ce]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Io(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? uA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function qI(e, t = 0, n, o, r, i) { let s = g(), a = N(), c = o ? e + 1 : null; c !== null && on(s, a, c, o, r, i, null, n); let l = dn(a, v + e, 16, null, n || null); l.projection === null && (l.projection = t), Xa(); let d = !s[oe] || So(); s[Y][ce].projection[l.projection] === null && c !== null ? dA(s, a, c) : d && !Jn(l) && WN(a, s, l); }
function dA(e, t, n) { let o = v + n, r = t.data[o], i = e[o], s = nr(i, r.tView.ssrId), a = oo(e, r, void 0, { dehydratedView: s }); ro(i, a, 0, en(r, s)); }
function $d(e, t, n, o) { return ev(e, t, n, o), $d; }
function Ud(e, t, n) { return Xy(e, t, n), Ud; }
function QI(e) { let t = g(), n = N(), o = fi(); bo(o + 1); let r = Xu(n, o); if (e.dirty && $f(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = nv(t, o);
        e.reset(i, ag), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function ZI() { return Ju(g(), fi()); }
function zd(e, t, n, o, r) { return ov(t, ev(e, n, o, r)), zd; }
function Wd(e, t, n, o) { return ov(e, Xy(t, n, o)), Wd; }
function YI(e = 1) { bo(fi() + e); }
function KI(e) { let t = ec(); return Et(t, v + e); }
function _i(e, t) { return e << 17 | t << 2; }
function rn(e) { return e >> 17 & 32767; }
function fA(e) { return (e & 2) == 2; }
function pA(e, t) { return e & 131071 | t << 17; }
function $l(e) { return e | 2; }
function $n(e) { return (e & 131068) >> 2; }
function Fc(e, t) { return e & -131069 | t << 2; }
function hA(e) { return (e & 1) === 1; }
function Ul(e) { return e | 1; }
function gA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = rn(s), c = $n(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || ti(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = rn(e[a + 1]);
        e[o + 1] = _i(f, a), f !== 0 && (e[f + 1] = Fc(e[f + 1], o)), e[a + 1] = pA(e[a + 1], o);
    }
    else
        e[o + 1] = _i(a, 0), a !== 0 && (e[a + 1] = Fc(e[a + 1], o)), a = o;
else
    e[o + 1] = _i(c, 0), a === 0 ? a = o : e[c + 1] = Fc(e[c + 1], o), c = o; l && (e[o + 1] = $l(e[o + 1])), Dh(e, u, o, !0), Dh(e, u, o, !1), mA(t, u, e, o, i), s = _i(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function mA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && ti(i, t) >= 0 && (n[o + 1] = Ul(n[o + 1])); }
function Dh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? rn(r) : $n(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    yA(c, t) && (a = !0, e[s + 1] = o ? Ul(l) : $l(l)), s = o ? rn(l) : $n(l);
} a && (e[n + 1] = o ? $l(r) : Ul(r)); }
function yA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? ti(e, t) >= 0 : !1; }
var ne = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function JI(e) { return e.substring(ne.key, ne.keyEnd); }
function vA(e) { return e.substring(ne.value, ne.valueEnd); }
function IA(e) { return tE(e), XI(e, Un(e, 0, ne.textEnd)); }
function XI(e, t) { let n = ne.textEnd; return n === t ? -1 : (t = ne.keyEnd = DA(e, ne.key = t, n), Un(e, t, n)); }
function EA(e) { return tE(e), eE(e, Un(e, 0, ne.textEnd)); }
function eE(e, t) { let n = ne.textEnd, o = ne.key = Un(e, t, n); return n === o ? -1 : (o = ne.keyEnd = CA(e, o, n), o = Ch(e, o, n, 58), o = ne.value = Un(e, o, n), o = ne.valueEnd = TA(e, o, n), Ch(e, o, n, 59)); }
function tE(e) { ne.key = 0, ne.keyEnd = 0, ne.value = 0, ne.valueEnd = 0, ne.textEnd = e.length; }
function Un(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function DA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function CA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Ch(e, t, n, o) { return t = Un(e, t, n), t < n && t++, t; }
function TA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Th(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Th(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Th(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Gd(e, t, n) { return rE(e, t, n, !1), Gd; }
function qd(e, t) { return rE(e, t, null, !0), qd; }
function nE(e) { iE(cE, MA, e, !1); }
function MA(e, t) { for (let n = EA(t); n >= 0; n = eE(t, n))
    cE(e, JI(t), vA(t)); }
function oE(e) { iE(RA, NA, e, !0); }
function NA(e, t) { for (let n = IA(t); n >= 0; n = XI(t, n))
    Eo(e, JI(t), !0); }
function rE(e, t, n, o) { let r = g(), i = N(), s = qe(2); if (i.firstUpdatePass && aE(i, e, s, o), t !== L && U(r, s, t)) {
    let a = i.data[ie()];
    lE(i, a, r, r[C], e, r[s + 1] = xA(t, n), o, s);
} }
function iE(e, t, n, o) { let r = N(), i = qe(2); r.firstUpdatePass && aE(r, null, i, o); let s = g(); if (n !== L && U(s, i, n)) {
    let a = r.data[ie()];
    if (uE(a, o) && !sE(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Gr(c, n || "")), Vl(r, a, s, n, o);
    }
    else
        kA(r, a, s, s[C], s[i + 1], s[i + 1] = AA(e, t, n), o, i);
} }
function sE(e, t) { return t >= e.expandoStartIndex; }
function aE(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[ie()], s = sE(e, n);
    uE(i, o) && t === null && !s && (t = !1), t = wA(r, i, t, o), gA(r, i, t, n, s, o);
} }
function wA(e, t, n, o) { let r = di(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Hc(null, e, t, n, o), n = ur(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Hc(r, e, t, n, o), i === null) {
            let c = _A(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Hc(null, e, t, c[1], o), c = ur(c, t.attrs, o), SA(e, t, o, c));
        }
        else
            i = bA(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function _A(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if ($n(o) !== 0)
    return e[rn(o)]; }
function SA(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[rn(r)] = o; }
function bA(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = ur(o, s, n);
} return ur(o, t.attrs, n); }
function Hc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = ur(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function ur(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Eo(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function AA(e, t, n) { if (n == null || n === "")
    return P; let o = [], r = lt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function cE(e, t, n) { Eo(e, t, lt(n)); }
function RA(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Eo(e, o, n); }
function kA(e, t, n, o, r, i, s, a) { r === L && (r = P); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && lE(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function lE(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = hA(l) ? Mh(c, t, n, r, $n(l), s) : void 0; if (!fs(u)) {
    fs(i) || fA(l) && (i = Mh(c, null, n, r, a, s));
    let d = Ft(ie(), n);
    qN(o, s, d, r, i);
} }
function Mh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === L && (f = d ? P : void 0);
    let p = d ? ei(f, o) : u === o ? f : void 0;
    if (l && !fs(p) && (p = ei(c, o)), fs(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? rn(h) : $n(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = ei(c, o));
} return a; }
function fs(e) { return e !== void 0; }
function xA(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Wr(lt(e)))), e; }
function uE(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function dE(e, t = "") { let n = g(), o = N(), r = e + v, i = o.firstCreatePass ? dn(o, r, 1, t, null) : o.data[r], s = fE(o, n, i, t); n[r] = s, Ao() && Lu(o, n, s, i), We(i, !1); }
var fE = (e, t, n, o) => (Fe(!0), mu(t[C], o));
function OA(e, t, n, o) { let r = !bs(t, n); if (Fe(r), r)
    return mu(t[C], o); let i = t[oe]; return Sr(i, e, t, n); }
function pE() { fE = OA; }
function hE(e, t) { let n = !1, o = Ge(); for (let i = 1; i < t.length; i += 2)
    n = U(e, o++, t[i]) || n; if (oc(o), !n)
    return L; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += M(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function gE(e, t, n, o = "") { return U(e, fe(), n) ? t + M(n) + o : L; }
function mE(e, t, n, o, r, i = "") { let s = Ge(), a = tn(e, s, n, r); return qe(2), a ? t + M(n) + o + M(r) + i : L; }
function yE(e, t, n, o, r, i, s, a = "") { let c = Ge(), l = na(e, c, n, r, s); return qe(3), l ? t + M(n) + o + M(r) + i + M(s) + a : L; }
function vE(e, t, n, o, r, i, s, a, c, l = "") { let u = Ge(), d = Re(e, u, n, r, s, c); return qe(4), d ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l : L; }
function IE(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Ge(), p = Re(e, f, n, r, s, c); return p = U(e, f + 4, u) || p, qe(5), p ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d : L; }
function EE(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Ge(), y = Re(e, h, n, r, s, c); return y = tn(e, h + 4, u, f) || y, qe(6), y ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p : L; }
function DE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let I = Ge(), D = Re(e, I, n, r, s, c); return D = na(e, I + 4, u, f, h) || D, qe(7), D ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + y : L; }
function CE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, I, D = "") { let A = Ge(), K = Re(e, A, n, r, s, c); return K = Re(e, A + 4, u, f, h, I) || K, qe(8), K ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + y + M(I) + D : L; }
function Qd(e) { return ga("", e), Qd; }
function ga(e, t, n) { let o = g(), r = gE(o, e, t, n); return r !== L && ft(o, ie(), r), ga; }
function Zd(e, t, n, o, r) { let i = g(), s = mE(i, e, t, n, o, r); return s !== L && ft(i, ie(), s), Zd; }
function Yd(e, t, n, o, r, i, s) { let a = g(), c = yE(a, e, t, n, o, r, i, s); return c !== L && ft(a, ie(), c), Yd; }
function Kd(e, t, n, o, r, i, s, a, c) { let l = g(), u = vE(l, e, t, n, o, r, i, s, a, c); return u !== L && ft(l, ie(), u), Kd; }
function Jd(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = IE(d, e, t, n, o, r, i, s, a, c, l, u); return f !== L && ft(d, ie(), f), Jd; }
function Xd(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = EE(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== L && ft(p, ie(), h), Xd; }
function ef(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), I = DE(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return I !== L && ft(y, ie(), I), ef; }
function tf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, I) { let D = g(), A = CE(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, I); return A !== L && ft(D, ie(), A), tf; }
function nf(e) { let t = g(), n = hE(t, e); return n !== L && ft(t, ie(), n), nf; }
function ft(e, t, n) { let o = Ft(t, e); im(e[C], o, n); }
function of(e, t, n) { gd(t) && (t = t()); let o = g(), r = fe(); if (U(o, r, t)) {
    let i = N(), s = Ee();
    Fu(s, o, e, t, o[C], n);
} return of; }
function TE(e, t) { let n = gd(e); return n && e.set(t), n; }
function rf(e, t) { let n = g(), o = N(), r = T(); return Bd(o, n, n[C], r, e, t), rf; }
var ME = {};
function sf(e) { q("NgLet"); let t = N(), n = g(), o = e + v, r = dn(t, o, 128, null, null); return We(r, !1), wo(t, n, o, ME), sf; }
function NE(e) { let t = N(), n = g(), o = ie(); return wo(t, n, o, e), e; }
function wE(e) { let t = ec(), n = Et(t, v + e); if (n === ME)
    throw new w(314, !1); return n; }
function _E(e, t) { let n = N(), o = g(), r = o[C], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Ht(n, s + v), d = Ft(s + v, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function SE(e) { return U(g(), fe(), e) ? M(e) : L; }
function bE(e, t, n = "") { return gE(g(), e, t, n); }
function AE(e, t, n, o, r = "") { return mE(g(), e, t, n, o, r); }
function RE(e, t, n, o, r, i, s = "") { return yE(g(), e, t, n, o, r, i, s); }
function kE(e, t, n, o, r, i, s, a, c = "") { return vE(g(), e, t, n, o, r, i, s, a, c); }
function xE(e, t, n, o, r, i, s, a, c, l, u = "") { return IE(g(), e, t, n, o, r, i, s, a, c, l, u); }
function OE(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return EE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function LE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return DE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function PE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, I = "") { return CE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, I); }
function FE(e) { return hE(g(), e); }
function HE(e, t, n) { let o = ue() + e, r = g(); return r[o] === L ? je(r, o, t(n, r)) : ao(r, o); }
function Nh(e, t, n) { let o = N(); o.firstCreatePass && jE(t, o.data, o.blueprint, Se(e), n); }
function jE(e, t, n, o, r) { if (e = z(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        jE(e[i], t, n, o, r);
else {
    let i = N(), s = g(), a = T(), c = ni(e) ? e : z(e.provide), l = Pf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (ni(e) || !e.multi) {
        let p = new Yt(l, r, so, null), h = Vc(c, t, r ? u : u + f, d);
        h === -1 ? (Gc(zi(a, s), i, c), jc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Vc(c, t, u + f, d), h = Vc(c, t, u, u + f), y = p >= 0 && n[p], I = h >= 0 && n[h];
        if (r && !I || !r && !y) {
            Gc(zi(a, s), i, c);
            let D = FA(r ? PA : LA, n.length, r, o, l, e);
            !r && I && (n[h].providerFactory = D), jc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = VE(n[r ? h : p], l, !r && o);
            jc(i, e, p > -1 ? p : h, D);
        }
        !r && o && I && n[h].componentProviders++;
    }
} }
function jc(e, t, n, o) { let r = ni(t), i = Of(t); if (r || i) {
    let c = (i ? z(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function VE(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Vc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function LA(e, t, n, o, r) { return zl(this.multi, []); }
function PA(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = qo(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), zl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], zl(i, s); return s; }
function zl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function FA(e, t, n, o, r, i) { let s = new Yt(e, n, so, null); return s.multi = [], s.index = t, s.componentProviders = 0, VE(s, r, o && !n), s; }
function BE(e, t) { return n => { n.providersResolver = (o, r) => Nh(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Nh(o, r ? r(t) : t, !0)); }; }
function $E(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function UE(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ss(t, fv), o.pipeDefs = ss(n, Ve); }
function zE(e, t) { return Ze(() => { let n = Kr(e); n.declarations = Si(t.declarations || P), n.imports = Si(t.imports || P), n.exports = Si(t.exports || P), t.bootstrap && (n.bootstrap = Si(t.bootstrap)), Pn.registerNgModule(e, t); }); }
function Si(e) { if (typeof e == "function")
    return e; let t = Le(e); return t.some(qr) ? () => t.map(z).map(wh) : t.map(wh); }
function wh(e) { return Gu(e) ? e.ngModule : e; }
function WE(e, t) { let n = ue() + e, o = g(); return o[n] === L ? je(o, n, t()) : ao(o, n); }
function GE(e, t, n) { return tD(g(), ue(), e, t, n); }
function qE(e, t, n, o) { return nD(g(), ue(), e, t, n, o); }
function QE(e, t, n, o, r) { return oD(g(), ue(), e, t, n, o, r); }
function ZE(e, t, n, o, r, i, s) { return rD(g(), ue(), e, t, n, o, r, i); }
function YE(e, t, n, o, r, i, s) { let a = ue() + e, c = g(), l = Re(c, a, n, o, r, i); return U(c, a + 4, s) || l ? je(c, a + 5, t(n, o, r, i, s)) : ao(c, a + 5); }
function KE(e, t, n, o, r, i, s, a) { let c = ue() + e, l = g(), u = Re(l, c, n, o, r, i); return tn(l, c + 4, s, a) || u ? je(l, c + 6, t(n, o, r, i, s, a)) : ao(l, c + 6); }
function JE(e, t, n, o, r, i, s, a, c) { let l = ue() + e, u = g(), d = Re(u, l, n, o, r, i); return na(u, l + 4, s, a, c) || d ? je(u, l + 7, t(n, o, r, i, s, a, c)) : ao(u, l + 7); }
function XE(e, t, n, o, r, i, s, a, c, l) { let u = ue() + e, d = g(), f = Re(d, u, n, o, r, i); return Re(d, u + 4, s, a, c, l) || f ? je(d, u + 8, t(n, o, r, i, s, a, c, l)) : ao(d, u + 8); }
function eD(e, t, n) { return iD(g(), ue(), e, t, n); }
function Pr(e, t) { let n = e[t]; return n === L ? void 0 : n; }
function tD(e, t, n, o, r, i) { let s = t + n; return U(e, s, r) ? je(e, s + 1, i ? o.call(i, r) : o(r)) : Pr(e, s + 1); }
function nD(e, t, n, o, r, i, s) { let a = t + n; return tn(e, a, r, i) ? je(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Pr(e, a + 2); }
function oD(e, t, n, o, r, i, s, a) { let c = t + n; return na(e, c, r, i, s) ? je(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Pr(e, c + 3); }
function rD(e, t, n, o, r, i, s, a, c) { let l = t + n; return Re(e, l, r, i, s, a) ? je(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Pr(e, l + 4); }
function iD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    U(e, s++, r[c]) && (a = !0); return a ? je(e, s, o.apply(i, r)) : Pr(e, s); }
function sD(e, t) { let n = N(), o, r = e + v; n.firstCreatePass ? (o = HA(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Xr(o.type, !0)), s, a = xt(so); try {
    let c = Ui(!1), l = i();
    return Ui(c), wo(n, g(), r, l), l;
}
finally {
    xt(a);
} }
function HA(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function aD(e, t, n) { let o = e + v, r = g(), i = Et(r, o); return Fr(r, o) ? tD(r, ue(), t, i.transform, n, i) : i.transform(n); }
function cD(e, t, n, o) { let r = e + v, i = g(), s = Et(i, r); return Fr(i, r) ? nD(i, ue(), t, s.transform, n, o, s) : s.transform(n, o); }
function lD(e, t, n, o, r) { let i = e + v, s = g(), a = Et(s, i); return Fr(s, i) ? oD(s, ue(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function uD(e, t, n, o, r, i) { let s = e + v, a = g(), c = Et(a, s); return Fr(a, s) ? rD(a, ue(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function dD(e, t, n) { let o = e + v, r = g(), i = Et(r, o); return Fr(r, o) ? iD(r, ue(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Fr(e, t) { return e[m].data[t].pure; }
function fD(e, t) { return Qs(e, t); }
function pD(e, t) { return () => { try {
    return Pn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function hD(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function gD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function mD(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = jA(s, W(e)); if (e[fn] = a, c.tView) {
    let l = kT().values();
    for (let u of l)
        ze(u) && u[G] === null && Hi(r, i, a, c, u);
} }
function jA(e, t) { let n = Z({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Hi(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    BA(e, t, n, o, r);
    return;
} for (let s = v; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (J(a)) {
        te(a[j]) && Hi(e, t, n, o, a[j]);
        for (let c = H; c < a.length; c++)
            Hi(e, t, n, o, a[c]);
    }
    else
        te(a) && Hi(e, t, n, o, a);
} }
function VA(e, t) { e.componentReplaced?.(t.id); }
function BA(e, t, n, o, r) { let i = r[F], s = r[j], a = r[G], c = r[ce], l = r[R].get(B, null), u = () => { if (o.encapsulation === Ae.ShadowDom || o.encapsulation === Ae.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Em(n), f = Rs(a, d, i, Tu(n), s, c, null, null, null, null, null); $A(a, r, f, c.index), wr(r[m], r), tr(r); let p = r[Be].rendererFactory; VA(p, o), f[C] = p.createRenderer(s, n), km(r[m], r), UA(c), Gs(d, f, i), Km(d, f, d.template, i); }; l === null ? _h(e, t, u) : l.run(() => _h(e, t, u)); }
function _h(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function $A(e, t, n, o) { for (let r = v; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((te(i) || J(i)) && i[ae] === t) {
        i[ae] = n;
        break;
    }
} e[yt] === t && (e[yt] = n), e[Do] === t && (e[Do] = n), n[ae] = t[ae], t[ae] = null, e[o] = n; }
function UA(e) { if (e.projection !== null) {
    for (let t of e.projection)
        hs(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var pe = { \u0275\u0275animateEnter: Vo, \u0275\u0275animateEnterListener: Bo, \u0275\u0275animateLeave: $o, \u0275\u0275animateLeaveListener: as, \u0275\u0275attribute: Td, \u0275\u0275defineComponent: dv, \u0275\u0275defineDirective: pv, \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: mo, \u0275\u0275defineNgModule: ad, \u0275\u0275definePipe: hv, \u0275\u0275directiveInject: so, \u0275\u0275getInheritedFactory: og, \u0275\u0275inject: Oe, \u0275\u0275injectAttribute: gs, \u0275\u0275invalidFactory: Ry, \u0275\u0275invalidFactoryDep: Jr, \u0275\u0275templateRefExtractor: fD, \u0275\u0275resetView: Ka, \u0275\u0275HostDirectivesFeature: vv, \u0275\u0275NgOnChangesFeature: Bh, \u0275\u0275ControlFeature: yv, \u0275\u0275ProvidersFeature: BE, \u0275\u0275InheritDefinitionFeature: cd, \u0275\u0275ExternalStylesFeature: $E, \u0275\u0275nextContext: WI, \u0275\u0275namespaceHTML: uc, \u0275\u0275namespaceMathML: lc, \u0275\u0275namespaceSVG: cc, \u0275\u0275enableBindings: qa, \u0275\u0275disableBindings: Qa, \u0275\u0275elementStart: cr, \u0275\u0275elementEnd: ua, \u0275\u0275element: Nd, \u0275\u0275elementContainerStart: pa, \u0275\u0275elementContainerEnd: Or, \u0275\u0275domElement: wd, \u0275\u0275domElementStart: da, \u0275\u0275domElementEnd: fa, \u0275\u0275domElementContainer: Ad, \u0275\u0275domElementContainerStart: ha, \u0275\u0275domElementContainerEnd: bd, \u0275\u0275domTemplate: ud, \u0275\u0275domListener: Vd, \u0275\u0275elementContainer: Sd, \u0275\u0275pureFunction0: WE, \u0275\u0275pureFunction1: GE, \u0275\u0275pureFunction2: qE, \u0275\u0275pureFunction3: QE, \u0275\u0275pureFunction4: ZE, \u0275\u0275pureFunction5: YE, \u0275\u0275pureFunction6: KE, \u0275\u0275pureFunction7: JE, \u0275\u0275pureFunction8: XE, \u0275\u0275pureFunctionV: eD, \u0275\u0275getCurrentView: NI, \u0275\u0275restoreView: Ya, \u0275\u0275listener: Hd, \u0275\u0275projection: qI, \u0275\u0275syntheticHostProperty: xd, \u0275\u0275syntheticHostListener: jd, \u0275\u0275pipeBind1: aD, \u0275\u0275pipeBind2: cD, \u0275\u0275pipeBind3: lD, \u0275\u0275pipeBind4: uD, \u0275\u0275pipeBindV: dD, \u0275\u0275projectionDef: GI, \u0275\u0275domProperty: kd, \u0275\u0275ariaProperty: Cd, \u0275\u0275property: Md, \u0275\u0275control: Vy, \u0275\u0275controlCreate: Hy, \u0275\u0275pipe: sD, \u0275\u0275queryRefresh: QI, \u0275\u0275queryAdvance: YI, \u0275\u0275viewQuery: Ud, \u0275\u0275viewQuerySignal: Wd, \u0275\u0275loadQuery: ZI, \u0275\u0275contentQuery: $d, \u0275\u0275contentQuerySignal: zd, \u0275\u0275reference: KI, \u0275\u0275classMap: oE, \u0275\u0275styleMap: nE, \u0275\u0275styleProp: Gd, \u0275\u0275classProp: qd, \u0275\u0275advance: Dm, \u0275\u0275template: ld, \u0275\u0275conditional: vI, \u0275\u0275conditionalCreate: yI, \u0275\u0275conditionalBranchCreate: la, \u0275\u0275defer: qv, \u0275\u0275deferWhen: Qv, \u0275\u0275deferOnIdle: Jv, \u0275\u0275deferOnImmediate: tI, \u0275\u0275deferOnTimer: rI, \u0275\u0275deferOnHover: aI, \u0275\u0275deferOnInteraction: uI, \u0275\u0275deferOnViewport: pI, \u0275\u0275deferPrefetchWhen: Zv, \u0275\u0275deferPrefetchOnIdle: Xv, \u0275\u0275deferPrefetchOnImmediate: nI, \u0275\u0275deferPrefetchOnTimer: iI, \u0275\u0275deferPrefetchOnHover: cI, \u0275\u0275deferPrefetchOnInteraction: dI, \u0275\u0275deferPrefetchOnViewport: hI, \u0275\u0275deferHydrateWhen: Yv, \u0275\u0275deferHydrateNever: Kv, \u0275\u0275deferHydrateOnIdle: eI, \u0275\u0275deferHydrateOnImmediate: oI, \u0275\u0275deferHydrateOnTimer: sI, \u0275\u0275deferHydrateOnHover: lI, \u0275\u0275deferHydrateOnInteraction: fI, \u0275\u0275deferHydrateOnViewport: gI, \u0275\u0275deferEnableTimerScheduling: xv, \u0275\u0275repeater: CI, \u0275\u0275repeaterCreate: DI, \u0275\u0275repeaterTrackByIndex: II, \u0275\u0275repeaterTrackByIdentity: EI, \u0275\u0275componentInstance: mI, \u0275\u0275text: dE, \u0275\u0275textInterpolate: Qd, \u0275\u0275textInterpolate1: ga, \u0275\u0275textInterpolate2: Zd, \u0275\u0275textInterpolate3: Yd, \u0275\u0275textInterpolate4: Kd, \u0275\u0275textInterpolate5: Jd, \u0275\u0275textInterpolate6: Xd, \u0275\u0275textInterpolate7: ef, \u0275\u0275textInterpolate8: tf, \u0275\u0275textInterpolateV: nf, \u0275\u0275i18n: BI, \u0275\u0275i18nAttributes: $I, \u0275\u0275i18nExp: Fd, \u0275\u0275i18nStart: Ld, \u0275\u0275i18nEnd: Pd, \u0275\u0275i18nApply: UI, \u0275\u0275i18nPostprocess: zI, \u0275\u0275resolveWindow: mm, \u0275\u0275resolveDocument: ym, \u0275\u0275resolveBody: Eu, \u0275\u0275setComponentScope: UE, \u0275\u0275setNgModuleScope: zE, \u0275\u0275registerNgModuleType: rd, \u0275\u0275getComponentDepsFactory: pD, \u0275setClassDebugInfo: hD, \u0275\u0275declareLet: sf, \u0275\u0275storeLet: NE, \u0275\u0275arrowFunction: HE, \u0275\u0275readContextLet: wE, \u0275\u0275attachSourceLocations: _E, \u0275\u0275interpolate: SE, \u0275\u0275interpolate1: bE, \u0275\u0275interpolate2: AE, \u0275\u0275interpolate3: RE, \u0275\u0275interpolate4: kE, \u0275\u0275interpolate5: xE, \u0275\u0275interpolate6: OE, \u0275\u0275interpolate7: LE, \u0275\u0275interpolate8: PE, \u0275\u0275interpolateV: FE, \u0275\u0275sanitizeHtml: lm, \u0275\u0275sanitizeStyle: um, \u0275\u0275sanitizeResourceUrl: Iu, \u0275\u0275sanitizeScript: dm, \u0275\u0275validateAttribute: gm, \u0275\u0275sanitizeUrl: vu, \u0275\u0275sanitizeUrlOrResourceUrl: hm, \u0275\u0275trustConstantHtml: fm, \u0275\u0275trustConstantResourceUrl: pm, forwardRef: Aa, resolveForwardRef: z, \u0275\u0275twoWayProperty: of, \u0275\u0275twoWayBindingSet: TE, \u0275\u0275twoWayListener: rf, \u0275\u0275replaceMetadata: mD, \u0275\u0275getReplaceMetadataURL: gD }, wn = null;
function yD(e) { wn !== null && (e.defaultEncapsulation !== wn.defaultEncapsulation || e.preserveWhitespaces !== wn.preserveWhitespaces) || (wn = e); }
function zA() { return wn; }
function WA() { wn = null; }
var Go = [];
function GA(e, t) { Go.push({ moduleType: e, ngModule: t }); }
var Bc = !1;
function vD() { if (!Bc) {
    Bc = !0;
    try {
        for (let e = Go.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Go[e];
            n.declarations && n.declarations.every(ID) && (Go.splice(e, 1), KA(t, n));
        }
    }
    finally {
        Bc = !1;
    }
} }
function ID(e) { return Array.isArray(e) ? e.every(ID) : !!z(e); }
function ED(e, t = {}) { DD(e, t), t.id !== void 0 && rd(e, t.id), GA(e, t); }
function DD(e, t, n = !1) { let o = Le(t.declarations || P), r = null; Object.defineProperty(e, ka, { configurable: !0, get: () => (r === null && (r = ee({ usage: 0, kind: "NgModule", type: e }).compileNgModule(pe, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Le(t.bootstrap || P).map(z), declarations: o.map(z), imports: Le(t.imports || P).map(z).map(Sh), exports: Le(t.exports || P).map(z).map(Sh), schemas: t.schemas ? Le(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ht, { get: () => { if (i === null) {
        let a = ee({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(pe, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: ms(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Ra, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || P, imports: [(t.imports || P).map(z), (t.exports || P).map(z)] };
        s = ee({ usage: 0, kind: "NgModule", type: e }).compileInjector(pe, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function qA(e, t) { let n = `Unexpected "${Me(e)}" found in the "declarations" array of the`, o = `"${Me(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var QA = new WeakMap, ZA = new WeakMap;
function YA() { QA = new WeakMap, ZA = new WeakMap, Go.length = 0, gS.clear(); }
function KA(e, t) { let n = Le(t.declarations || P), o = cf(e); n.forEach(r => { if (r = z(r), r.hasOwnProperty(fn)) {
    let s = W(r);
    af(s, o);
}
else
    !r.hasOwnProperty(Zr) && !r.hasOwnProperty(Yr) && (r.ngSelectorScope = e); }); }
function af(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(fn) ? W(n) : Te(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Ve(n)), e.schemas = t.schemas, e.tView = null; }
function cf(e) { if (Wt(e)) {
    let t = Pn.getNgModuleScope(e), n = Kr(e);
    return Z({ schemas: n.schemas || null }, t);
}
else if (yo(e)) {
    if ((W(e) || Te(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Ve(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Sh(e) { return Gu(e) ? e.ngModule : e; }
var $c = 0;
function CD(e, t) {
    let n = null;
    rS(e, t), MD(e, t), Object.defineProperty(e, fn, { get: () => {
            if (n === null) {
                let o = ee({ usage: 0, kind: "component", type: e });
                if (iv(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = zA(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Ae.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = ND(e, t), l = Je(Z({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || P, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                $c++;
                try {
                    if (l.usesInheritance && wD(e), n = o.compileComponent(pe, a, l), l.isStandalone) {
                        let u = Le(t.imports || P), { directiveDefs: d, pipeDefs: f } = JA(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(z);
                    }
                }
                finally {
                    $c--;
                }
                if ($c === 0 && vD(), XA(e)) {
                    let u = cf(e.ngSelectorScope);
                    af(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Me(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function JA(e, t) { return { directiveDefs: () => Ho(e) ? [...Pn.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Te(i)).filter(i => i !== null) : [], pipeDefs: () => Ho(e) ? [...Pn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Ve(i)).filter(i => i !== null) : [] }; }
function XA(e) { return e.ngSelectorScope !== void 0; }
function lf(e, t) { let n = null; MD(e, t || {}), Object.defineProperty(e, Zr, { get: () => { if (n === null) {
        let o = TD(e, t || {});
        n = ee({ usage: 0, kind: "directive", type: e }).compileDirective(pe, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function TD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ee({ usage: 0, kind: "directive", type: e }), i = ND(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && wD(e), { metadata: i, sourceMapUrl: o }; }
function MD(e, t) { let n = null; Object.defineProperty(e, ht, { get: () => { if (n === null) {
        let o = TD(e, t), r = ee({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(pe, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: ms(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function eR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function ND(e, t) { let n = Zl(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Ne, propMetadata: o, inputs: t.inputs || P, outputs: t.outputs || P, queries: bh(e, o, _D), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !eR(e), exportAs: oR(t.exportAs), providers: t.providers || null, viewQueries: bh(e, o, SD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function wD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Te(n) && !W(n) && iR(n) && lf(n, null), n = Object.getPrototypeOf(n); }
function tR(e) { return typeof e == "string" ? AD(e) : z(e); }
function nR(e, t) { return { propertyName: e, predicate: tR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function bh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Me(e)}" since the query selector wasn't defined.`);
            if (i.some(bD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(nR(r, s));
        } });
    } return o; }
function oR(e) { return e === void 0 ? null : AD(e); }
function _D(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function SD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function bD(e) { return e.ngMetadataName === "Input"; }
function AD(e) { return e.split(",").map(t => t.trim()); }
var rR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function iR(e) { let t = Zl(); if (rR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (bD(s) || _D(s) || SD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function RD(e, t) { let n = null, o = null; Object.defineProperty(e, ht, { get: () => { if (o === null) {
        let r = Ah(e, t), i = ee({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(pe, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: ms(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Yr, { get: () => { if (n === null) {
        let r = Ah(e, t);
        n = ee({ usage: 0, kind: "pipe", type: r.type }).compilePipe(pe, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Ah(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var kD = pr("Directive", (e = {}) => e, void 0, void 0, (e, t) => lf(e, t)), sR = pr("Component", (e = {}) => Z({ changeDetection: ys.Eager }, e), kD, void 0, (e, t) => CD(e, t)), aR = pr("Pipe", e => Z({ pure: !0 }, e), void 0, void 0, (e, t) => RD(e, t)), cR = st("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), lR = st("Output", e => ({ alias: e })), uR = st("HostBinding", e => ({ hostPropertyName: e })), dR = st("HostListener", (e, t) => ({ eventName: e, args: t })), fR = pr("NgModule", e => e, void 0, void 0, (e, t) => ED(e, t)), ps = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, pR = (() => { class e {
    compileModuleSync(n) { return new Vn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = pn(n), i = Mn(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new bt(c)), s; }, []); return new ps(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), xD = new _(""), Wl = class {
};
var OD = (() => { class e {
    applicationErrorHandler = E($t);
    appRef = E(ke);
    taskService = E(Bt);
    ngZone = E(B);
    zonelessEnabled = E(vn);
    tracing = E(un, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new QC;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(fc) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(mi, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? ap : sp; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(fc + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function hR() { return q("NgZoneless"), et([...ma(), []]); }
function ma() { return [{ provide: Ct, useExisting: OD }, { provide: B, useClass: pc }, { provide: vn, useValue: !0 }]; }
function gR() { return typeof $localize < "u" && $localize.locale || Lr; }
var uf = new _("", { factory: () => E(uf, { optional: !0, skipSelf: !0 }) || gR() }), mR = new _("", { factory: () => kb }), yR = new _(""), vR = new _(""), LD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(LD || {}), Gl = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function IR(e) { return e.map(t => t.nativeElement); }
var dr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new sn(t) : null; }
    get injector() { return $T(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (bp(t) || BT(t)); }
    get context() { return bp(this.nativeNode) || VT(this.nativeNode); }
    get listeners() { return qT(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return WT(this.nativeNode); }
    get providerTokens() { return UT(this.nativeNode); }
}, sn = class extends dr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ye(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ye(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return ER(this.nativeElement, i), CR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ye(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(fr(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(fr(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Rh(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Rh(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function ER(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                DR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function DR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Rh(e, t, n, o) { let r = ye(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    Gt(s, i, t, n, o, e.nativeNode);
}
else
    df(e.nativeNode, t, n, o); }
function Gt(e, t, n, o, r, i) { let s = Bf(e, t); if (e.type & 11) {
    if (Uc(s, n, o, r, i), he(e)) {
        let c = de(e.index, t);
        c && c[m].firstChild && Gt(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && Gt(e.child, t, n, o, r, i), s && df(s, n, o, r);
    let a = t[e.index];
    J(a) && kh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Uc(a[Pe], n, o, r, i), kh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Y], l = a[ce].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Uc(u, n, o, r, i);
    else if (l) {
        let u = a[G], d = u[m].data[l.index];
        Gt(d, u, n, o, r, i);
    }
}
else
    e.child && Gt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Gt(a, t, n, o, r, i);
} }
function kh(e, t, n, o, r) { for (let i = H; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && Gt(a, s, t, n, o, r);
} }
function Uc(e, t, n, o, r) { if (r !== e) {
    let i = fr(e);
    if (!i)
        return;
    (o && i instanceof sn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function df(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = fr(a);
    c && ((o && c instanceof sn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), df(a, t, n, o));
} }
function CR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(uN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += M(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var zc = "__ng_debug__";
function fr(e) { return e instanceof Node ? (e.hasOwnProperty(zc) || (e[zc] = e.nodeType == Node.ELEMENT_NODE ? new sn(e) : new dr(e)), e[zc]) : null; }
import { Subscription as TR } from "rxjs";
import "@angular/core/primitives/signals";
import "rxjs/operators";
import "@angular/core/primitives/di";
var Ta = Symbol("InputSignalNode#UNSET"), nC = Je(Z({}, Sa), { transformFn: void 0, applyValueToInputSignal(e, t) { _a(e, t); } }), iO = Symbol();
function oC(e, t) { let n = Object.create(nC); n.value = e, n.transformFn = t?.transform; function o() { if (Br(n), n.value === Ta) {
    let r = null;
    throw new w(-950, r);
} return n.value; } return o[Xe] = n, o; }
var uo = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(uo || {});
var MR = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(MR || {}), PD = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => gs(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, sO = (() => { let e = new _(""); return e.__NG_ELEMENT_ID__ = t => { let n = T(); if (n === null)
    throw new w(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new w(-204, !1); }, e; })();
function aO(e) { return new Ic; }
function FD(e, t) { return oC(e, t); }
function NR(e) { return oC(Ta, e); }
var cO = (FD.required = NR, FD);
function HD(e, t) { return td(t); }
function wR(e, t) { return nd(t); }
var lO = (HD.required = wR, HD);
function uO(e, t) { return od(t); }
function jD(e, t) { return td(t); }
function _R(e, t) { return nd(t); }
var dO = (jD.required = _R, jD);
function fO(e, t) { return od(t); }
function rC(e, t) { let n = Object.create(nC), o = new Ic; n.value = e; function r() { return Br(n), VD(n.value), n.value; } return r[Xe] = n, r.asReadonly = cp.bind(r), r.set = i => { n.equal(n.value, i) || (_a(n, i), o.emit(i)); }, r.update = i => { VD(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function VD(e) { if (e === Ta)
    throw new w(952, !1); }
function BD(e, t) { return rC(e, t); }
function SR(e) { return rC(Ta, e); }
var pO = (BD.required = SR, BD), iC = !0, po = class {
}, hO = st("ContentChildren", (e, t = {}) => Z({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: iC }, t), po), gO = st("ContentChild", (e, t = {}) => Z({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), po), mO = st("ViewChildren", (e, t = {}) => Z({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: iC }, t), po), yO = st("ViewChild", (e, t) => Z({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), po);
function bR(e, t, n) { let o = new Vn(n); return Promise.resolve(o); }
function $D(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var AR = (() => { class e {
    zone = E(B);
    changeDetectionScheduler = E(Ct);
    applicationRef = E(ke);
    applicationErrorHandler = E($t);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), RR = new _("", { factory: () => !1 });
function kR({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new B(Je(Z({}, sC()), { scheduleInRootZone: t })), [{ provide: vn, useValue: !1 }, { provide: B, useFactory: e }, { provide: gt, multi: !0, useFactory: () => { let n = E(AR, { optional: !0 }); return () => n.initialize(); } }, { provide: gt, multi: !0, useFactory: () => { let n = E(xR); return () => { n.initialize(); }; } }, { provide: mi, useValue: t ?? rp }]; }
function vO(e) { let t = e?.scheduleInRootZone, n = kR({ ngZoneFactory: () => { let o = sC(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && q("NgZone_CoalesceEvent"), new B(o); }, scheduleInRootZone: t }); return et([{ provide: RR, useValue: !0 }, n]); }
function sC(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var xR = (() => { class e {
    subscription = new TR;
    initialized = !1;
    zone = E(B);
    pendingTasks = E(Bt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { B.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { B.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var va = new _(""), OR = new _("");
function Hr(e) { return !e.moduleRef; }
function aC(e) { let t = Hr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(B); return n.run(() => { Hr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get($t), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Hr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(va);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(va);
    s.add(i), e.moduleRef.onDestroy(() => { jo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return PR(o, n, () => { let i = t.get(Bt), s = i.add(), a = t.get(Id); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(uf, Lr); if (AI(c || Lr), !t.get(OR, !0))
    return Hr(e) ? t.get(ke) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Hr(e)) {
    let u = t.get(ke);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return cC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var cC;
function UD() { cC = LR; }
function LR(e, t) { let n = e.injector.get(ke); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new w(-403, !1); t.push(e); }
function PR(e, t, n) { try {
    let o = n();
    return yd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var lC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [ma(), ...o?.applicationProviders ?? [], gc], i = uv(n.moduleType, this.injector, r); return UD(), aC({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Dd({}, o); return UD(), bR(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new w(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(va, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Oe(De)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), fo = null;
function FR(e) { if (Ma())
    throw new w(400, !1); Ed(), fo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(lC); return dC(e), t; }
function HR(e, t, n = []) { let o = `Platform: ${t}`, r = new _(o); return (i = []) => { let s = Ma(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? FR(uC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : jR(r); }; }
function uC(e = [], t) { return De.create({ name: t, providers: [{ provide: Lf, useValue: "platform" }, { provide: va, useValue: new Set([() => fo = null]) }, ...e] }); }
function jR(e) { let t = Ma(); if (!t)
    throw new w(-401, !1); return t; }
function Ma() { return typeof ngServerMode < "u" && ngServerMode ? null : fo?.get(lC) ?? null; }
function IO() { Ma()?.destroy(); }
function VR(e = []) { if (fo)
    return fo; let t = uC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (fo = t), Ed(), dC(t), t; }
function EO(e) { return { provide: Kl, useValue: e, multi: !0 }; }
function dC(e) { let t = e.get(Kl, null); ri(e, () => { t?.forEach(n => n()); }); }
function DO(e) { return et([]); }
function CO() { return !1; }
function TO() { }
var ya = new WeakSet, zD = "";
function WD(e) { return e.get(Ms, ou); }
function BR() { let e = [{ provide: Ms, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(at);
            t = !!window._ejsas?.[n];
        } return t && q("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: gt, useValue: () => { let t = E(ke), { injector: n } = t; if (!ya.has(t)) {
        let o = E(Er);
        if (WD(n)) {
            Ag();
            let r = n.get(at), i = Sg(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (_g(s, a, c), su(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: kr, useFactory: () => { let t = E(ke), { injector: n } = t; return () => { if (!WD(n) || ya.has(t))
        return; ya.add(t); let o = n.get(at); t.onDestroy(() => { ya.delete(t), typeof ngServerMode < "u" && !ngServerMode && Ec(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(cu); $R(r, n); let i = n.get(Er); i.get(zD)?.forEach(au), i.delete(zD); let s = r.instance; Dr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var $R = (e, t) => { let n = t.get(at), o = window._ejsas[n], r = e.instance = new mp(new fp(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = yp(n); r.replayEarlyEventInfos(i), Ec(n); let s = new hp(a => { zR(t, a, a.currentTarget); }); gp(r, s); };
function UR(e, t, n) { let o = new Map, r = t[Ot], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!dp(l))
        continue;
    up(l) ? n.capture.add(l) : n.regular.add(l);
    let u = O(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function zR(e, t, n) { let o = (n && n.getAttribute(Kn)) ?? ""; /d\d+/.test(o) ? WR(o, e, t, n) : t.eventPhase === pp.REPLAY && lu(t, n); }
function WR(e, t, n, o) { let r = t.get(Tg); r.push({ event: n, currentTarget: o }), dt(t, e, GR(r)); }
function GR(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(Kn);
    n.has(s) ? lu(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var GD = !1, qD = !1, QD = !1, qR = 1e4;
function QR() { GD || (GD = !0, Pg(), TI(), pE(), MI(), Tv(), Yy(), wy(), Um()); }
function ZR() { qD || (qD = !0, kI(), yy(), Cy()); }
function YR() { QD || (QD = !0, Wg()); }
function KR(e) { return e.whenStable(); }
var MO = "ngcm";
function NO() { let e = [{ provide: an, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(Qn, { optional: !0 })?.get(Ns, null)), t && q("NgHydration"), t; } }, { provide: gt, useValue: () => { if (zu(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = E(Vt); E(an) && (qg(t), QR()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: tu, useFactory: () => E(an) }, { provide: kr, useFactory: () => { let t = E(Ct); if (E(an)) {
        let n = E(ke);
        return () => { KR(n).then(() => { n.destroyed || (Wu(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), et(e); }
function wO() { return [{ provide: nu, useFactory: () => E(an) }, { provide: gt, useValue: () => { E(an) && (ZR(), zu(!0), q("NgI18nHydration")); }, multi: !0 }]; }
function _O() { let e = [BR(), { provide: ru, useValue: !0 }, { provide: ct, useClass: Rg }, { provide: gt, useValue: () => { YR(), q("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: kr, useFactory: () => { let t = E(De), n = E(Vt); return () => { let o = Gg(t), r = hy(n, n.body); Gv(t, o, r), Ug(n, t); }; }, multi: !0 }), e; }
var ZD = qR - 1e3, hf = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function SO() { let e = new hf, { openTasks: t } = e; return et([{ provide: ip, useValue: e }, Vv(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = E(B), o = E(ke), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${ZD / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, ZD); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function bO(e) { let t = id(e); if (!t)
    throw fC(e); return new Vn(t); }
function AO(e) { let t = id(e); if (!t)
    throw fC(e); return t; }
function fC(e) { return new w(920, !1); }
var JR = (() => { class e {
    static __NG_ELEMENT_ID__ = XR;
} return e; })();
function XR(e) { return ek(T(), g(), (e & 16) === 16); }
function ek(e, t, n) { if (he(e) && !n) {
    let o = de(e.index, t);
    return new St(o, o);
}
else if (e.type & 175) {
    let o = t[Y];
    return new St(o, t);
} return null; }
var gf = class extends JR {
}, YD = class extends gf {
}, Ia = class {
    supports(t) { return rr(t); }
    create(t) { return new mf(t); }
}, tk = (e, t) => t, mf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || tk; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < KD(o, r, i) ? n : o, a = KD(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !rr(t))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, Ly(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new yf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ea), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Ea), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, yf = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, vf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Ea = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new vf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function KD(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Da = class {
    supports(t) { return t instanceof Map || ta(t); }
    create() { return new If; }
}, If = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ta(t)))
        throw new w(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Ef(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Ef = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function JD() { return new pC([new Ia]); }
var pC = (() => { class e {
    factories;
    static \u0275prov = V({ token: e, providedIn: "root", factory: JD });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || JD()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new w(901, !1); }
} return e; })();
function XD() { return new hC([new Da]); }
var hC = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: XD });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || XD()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new w(901, !1); }
} return e; })(), nk = [new Da], ok = [new Ia], RO = new pC(ok), kO = new hC(nk), xO = HR(null, "core", []), OO = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Oe(ke)); };
    static \u0275mod = ad({ type: e });
    static \u0275inj = mo({});
} return e; })();
function LO(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (k(b.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new w(-401, !1); try {
    let i = r?.injector ?? VR(o), s = [ma(), gc, ...n || []], a = new sr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return aC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    k(b.BootstrapApplicationEnd);
} }
var Df = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, rk = 0;
function gC(e) { return e.ssrId || (e.ssrId = `t${rk++}`), e.ssrId; }
function mC(e, t, n) { let o = []; return Ln(e, t, n, o), o.length; }
function ik(e) { let t = []; return qs(e, t), t.length; }
function yC(e, t) { let n = e[j]; return n && !n.hasAttribute(Gn) ? Ca(n, e, null, t) : null; }
function vC(e, t) { let n = No(e[j]), o = yC(n, t); if (o === null)
    return; let r = O(n[j]), i = e[G], s = Ca(r, i, null, t), a = n[C], c = `${o}|${s}`; a.setAttribute(r, Sn, c); }
function PO(e, t) { let n = e.injector, o = vy(n), r = Dr(n), i = new Df, s = new Map, a = e._views, c = n.get(Ms, ou), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(at); for (let p of a) {
    let h = uu(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        J(h) ? vC(h, y) : yC(h, y), uk(s, t);
    }
} let d = i.getAll(), f = n.get(Qn); if (f.set(Ns, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(ws, p);
} return l; }
function sk(e, t, n, o, r) { let i = [], s = ""; for (let a = H; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (ze(c) && (c = c[v], J(c))) {
        u = ik(c) + 1, vC(c, r);
        let p = No(c[j]);
        d = { [Ds]: p[m].ssrId, [rt]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = gC(p), u = mC(p, c, p.firstChild)), d = { [Ds]: l, [rt]: u };
        let h = !1;
        if (Sv(n[m], t)) {
            let y = ge(n, t), I = se(n[m], t);
            if (r.isIncrementalHydrationEnabled && I.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                I.hydrateTriggers.has(7) && (h = !0);
                let A = [];
                qs(e, A);
                let K = { [rt]: A.length, [vr]: y[ut] }, xe = ak(I.hydrateTriggers);
                xe.length > 0 && (K[Ir] = xe), o !== null && (K[eu] = o), r.deferBlocks.set(D, K);
                let Ce = O(e);
                Ce !== void 0 ? Ce.nodeType === Node.COMMENT_NODE && eC(Ce, D) : eC(Ce, D), h || fk(I, A, D, r), o = D, d[Ts] = D;
            }
            d[vr] = y[ut];
        }
        h || Object.assign(d, IC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[mr] ??= 1, p[mr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function ak(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function jr(e, t, n, o) { let r = t.index - v; e[yr] ??= {}, e[yr][r] ??= py(t, n, o); }
function ff(e, t) { let n = typeof t == "number" ? t : t.index - v; e[Yn] ??= [], e[Yn].includes(n) || e[Yn].push(n); }
function IC(e, t = null, n) { let o = {}, r = e[m], i = Iy(r, n), s = n.shouldReplayEvents ? UR(r, e, n.eventTypesToReplay) : null; for (let a = v; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - v, u = Ey(e, a, n);
    if (u) {
        o[Cs] ??= {}, o[Cs][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            ff(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + v];
            jr(o, f, e, i);
        }
        continue;
    }
    if (hs(c) && !Jn(c)) {
        if (J(e[a]) && c.tView && (o[Es] ??= {}, o[Es][l] = gC(c.tView)), io(c, e) && dk(c)) {
            ff(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !$a(d) && !qn(d) && (io(d, e) ? ff(o, d) : jr(o, d, e, i));
                    else
                        throw ry(O(e[a]));
        }
        if (ck(o, c, e, i), J(e[a])) {
            let d = e[a][j];
            if (Array.isArray(d)) {
                let f = O(d);
                f.hasAttribute(Gn) || Ca(f, d, t, n);
            }
            o[Zn] ??= {}, o[Zn][l] = sk(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !qh(c)) {
            let d = O(e[a][j]);
            d.hasAttribute(Gn) || Ca(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[gr] ??= {}, o[gr][l] = mC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !qn(d) && jr(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = O(e[a]);
            fu(n, d);
        }
        if (s && c.type & 2) {
            let d = O(e[a]);
            s.has(d) && iu(d, s.get(d), t);
        }
    }
} return o; }
function ck(e, t, n, o) { $a(t) || (t.projectionNext && t.projectionNext !== t.next && !qn(t.projectionNext) && jr(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && io(t.parent, n) && !io(t, n) && jr(e, t, n, o)); }
function lk(e) { let t = e[F]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Ae.ShadowDom || n?.encapsulation === Ae.ExperimentalIsolatedShadowDom; }
function Ca(e, t, n, o) { let r = t[C]; if (Hf(t) && !Ks() || lk(t))
    return r.setAttribute(e, Gn, ""), null; {
    let i = IC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, Sn, s.toString()), s;
} }
function eC(e, t) { e.textContent = `ngh=${t}`; }
function uk(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function dk(e) { let t = e; for (; t != null;) {
    if (he(t))
        return !0;
    t = t.parent;
} return !1; }
function fk(e, t, n, o) { let r = $g(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        iu(s, r, n);
} }
function FO(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function HO(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var pk = "\u{1F170}\uFE0F", Na = !1;
function jO(e) { if (!Na)
    return; let { startLabel: t } = EC(e); performance.mark(t); }
function VO(e) { if (!Na)
    return; let { startLabel: t, labelName: n, endLabel: o } = EC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function EC(e) { let t = `${pk}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var tC = !1;
function BO() { if (!tC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    tC = !0, console.warn("Performance API is not supported on this platform");
    return;
} Na = !0; }
function $O() { Na = !1; }
function UO(e) { }
function zO(e) { return ee({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(pe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function WO(e) { pd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function GO(e) { Ov(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); pd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function qO(e) { return ee({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(pe, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function QO(e) { return ee({ usage: 1, kind: hk(e.target), type: e.type }).compileFactoryDeclaration(pe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function hk(e) { switch (e) {
    case uo.Directive: return "directive";
    case uo.Component: return "component";
    case uo.Injectable: return "injectable";
    case uo.Pipe: return "pipe";
    case uo.NgModule: return "NgModule";
} }
function ZO(e) { return ee({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(pe, `ng:///${e.type.name}/\u0275prov.js`, e); }
function YO(e) { return ee({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(pe, `ng:///${e.type.name}/\u0275inj.js`, e); }
function KO(e) { return ee({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(pe, `ng:///${e.type.name}/\u0275mod.js`, e); }
function JO(e) { return ee({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(pe, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var pf = Symbol("NOT_SET"), DC = new Set, gk = Je(Z({}, Sa), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: pf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== pf && !Ur(this))
        return this.signal; try {
        for (let r of this.cleanup ?? DC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = ho(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        $r(this, n);
    } return (this.value === pf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Cf = class extends Jo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Ro), s), this.scheduler = r; for (let a of bu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(gk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Br(l), l.value), l.signal[Xe] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? DC)
                    n();
            }
            finally {
                go(t);
            } }
};
function XO(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Fs; let n = t?.injector ?? E(De), o = n.get(Ct), r = n.get(Ps), i = n.get(un, null, { optional: !0 }); r.impl ??= n.get(Au); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(gi, null, { optional: !0 }), c = new Cf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function eL(e) { return new Tf(hd(e) ? e : Ut(e)); }
var Tf = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = Ut(() => { if (this.state.status === "error")
        throw new lp(this.state.error); return this.state.value; });
    status = Ut(() => this.state.status);
    error = Ut(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = Ut(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = Ut(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function tL(e, t) { let n = W(e), o = t.elementInjector || oi(); return new bt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function nL(e) { let t = W(e); if (!t)
    return null; let n = new bt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function oL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var rL = new _("", { providedIn: "platform", factory: () => null }), iL = new _("", { providedIn: "platform", factory: () => null }), sL = new _("", { providedIn: "platform", factory: () => null });
export { eM as ANIMATION_MODULE_TYPE, kr as APP_BOOTSTRAP_LISTENER, at as APP_ID, vd as APP_INITIALIZER, Id as ApplicationInitStatus, OO as ApplicationModule, ke as ApplicationRef, ig as Attribute, xD as COMPILER_OPTIONS, tM as CSP_NONCE, wM as CUSTOM_ELEMENTS_SCHEMA, ys as ChangeDetectionStrategy, JR as ChangeDetectorRef, pR as Compiler, Wl as CompilerFactory, sR as Component, ea as ComponentFactory, br as ComponentFactoryResolver, by as ComponentRef, gO as ContentChild, hO as ContentChildren, mR as DEFAULT_CURRENCY_CODE, Vt as DOCUMENT, sn as DebugElement, Gl as DebugEventListener, dr as DebugNode, mf as DefaultIterableDiffer, Ro as DestroyRef, kD as Directive, gt as ENVIRONMENT_INITIALIZER, hr as ElementRef, YD as EmbeddedViewRef, mt as EnvironmentInjector, hc as ErrorHandler, LC as EventEmitter, sO as HOST_TAG_NAME, Hh as Host, PD as HostAttributeToken, uR as HostBinding, dR as HostListener, AC as INJECTOR, Oh as Inject, NT as Injectable, _ as InjectionToken, De as Injector, cR as Input, pC as IterableDiffers, hC as KeyValueDiffers, uf as LOCALE_ID, Mm as MAX_ANIMATION_TIMEOUT, LD as MissingTranslationStrategy, ps as ModuleWithComponentFactories, _M as NO_ERRORS_SCHEMA, fR as NgModule, cv as NgModuleFactory, Hn as NgModuleRef, B as NgZone, Lh as Optional, lR as Output, Ic as OutputEmitterRef, XT as PLATFORM_ID, Kl as PLATFORM_INITIALIZER, yc as PendingTasks, aR as Pipe, lC as PlatformRef, po as Query, Wi as QueryList, rL as REQUEST, sL as REQUEST_CONTEXT, iL as RESPONSE_INIT, g_ as Renderer2, or as RendererFactory2, Yi as RendererStyleFlags2, Ay as Sanitizer, cn as SecurityContext, Ph as Self, Vi as SimpleChange, Fh as SkipSelf, yR as TRANSLATIONS, vR as TRANSLATIONS_FORMAT, er as TemplateRef, JS as Testability, Fv as TestabilityRegistry, Qn as TransferState, jh as Type, MC as VERSION, TC as Version, yO as ViewChild, mO as ViewChildren, oa as ViewContainerRef, Ae as ViewEncapsulation, gf as ViewRef, bm as afterEveryRender, Ru as afterNextRender, XO as afterRenderEffect, IR as asNativeElements, xC as assertInInjectionContext, HC as assertNotInReactiveContext, jR as assertPlatform, FO as booleanAttribute, Ut as computed, dO as contentChild, fO as contentChildren, tL as createComponent, sd as createEnvironmentInjector, lv as createNgModule, dS as createNgModuleRef, FR as createPlatform, HR as createPlatformFactory, IO as destroyPlatform, VC as effect, TO as enableProdMode, QS as enableProfiling, Aa as forwardRef, fr as getDebugNode, bO as getModuleFactory, AO as getNgModuleById, Ma as getPlatform, kC as importProvidersFrom, E as inject, cO as input, Uy as inputBinding, CO as isDevMode, hd as isSignal, yo as isStandalone, gd as isWritableSignal, UC as linkedSignal, et as makeEnvironmentProviders, oM as makeStateKey, oL as mergeApplicationConfig, pO as model, HO as numberAttribute, aO as output, zy as outputBinding, xO as platformCore, Vv as provideAppInitializer, PC as provideBrowserGlobalErrorListeners, DO as provideCheckNoChangesConfig, RC as provideEnvironmentInitializer, lN as provideNgReflectAttributes, EO as providePlatformInitializer, SO as provideStabilityDebugging, vO as provideZoneChangeDetection, hR as provideZonelessChangeDetection, nL as reflectComponentType, z as resolveForwardRef, zC as resource, eL as resourceFromSnapshots, ri as runInInjectionContext, Hv as setTestabilityGetter, mc as signal, F_ as twoWayBinding, $C as untracked, lO as viewChild, uO as viewChildren, Tm as \u0275ANIMATIONS_DISABLED, mg as \u0275AcxChangeDetectionStrategy, yg as \u0275AcxViewEncapsulation, Ps as \u0275AfterRenderManager, MO as \u0275CLIENT_RENDER_MODE_FLAG, H as \u0275CONTAINER_HEADER_OFFSET, Ct as \u0275ChangeDetectionScheduler, ea as \u0275ComponentFactory, qS as \u0275Console, Lr as \u0275DEFAULT_LOCALE_ID, Rv as \u0275DEFER_BLOCK_CONFIG, $S as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, ct as \u0275DEHYDRATED_BLOCK_REGISTRY, dd as \u0275DeferBlockBehavior, $ as \u0275DeferBlockState, OR as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Tg as \u0275EVENT_REPLAY_QUEUE, vc as \u0275EffectScheduler, MR as \u0275Framework, Hg as \u0275HydrationStatus, nM as \u0275IMAGE_CONFIG, vg as \u0275IMAGE_CONFIG_DEFAULTS, Lf as \u0275INJECTOR_SCOPE, iO as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, $t as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, rM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, an as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, ru as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Er as \u0275JSACTION_BLOCK_ELEMENT_MAP, cu as \u0275JSACTION_EVENT_CONTRACT, Gi as \u0275LContext, Bn as \u0275LocaleDataIndex, fn as \u0275NG_COMP_DEF, Zr as \u0275NG_DIR_DEF, kt as \u0275NG_ELEMENT_ID, Ra as \u0275NG_INJ_DEF, ka as \u0275NG_MOD_DEF, Yr as \u0275NG_PIPE_DEF, Qr as \u0275NG_PROV_DEF, Oi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, L as \u0275NO_CHANGE, Vn as \u0275NgModuleFactory, pc as \u0275NoopNgZone, pk as \u0275PERFORMANCE_MARK_PREFIX, RR as \u0275PROVIDED_NG_ZONE, jC as \u0275PROVIDED_ZONELESS, Bt as \u0275PendingTasksInternal, b as \u0275ProfilerEvent, Ha as \u0275R3Injector, ji as \u0275ReflectionCapabilities, bt as \u0275Render3ComponentFactory, rs as \u0275Render3ComponentRef, jn as \u0275Render3NgModuleRef, WC as \u0275ResourceImpl, w as \u0275RuntimeError, Xe as \u0275SIGNAL, Og as \u0275SSR_CONTENT_INTEGRITY_MARKER, Lv as \u0275TESTABILITY, Pv as \u0275TESTABILITY_GETTER, Av as \u0275TimerScheduler, Ls as \u0275TracingAction, un as \u0275TracingService, St as \u0275ViewRef, zr as \u0275XSS_SECURITY_URL, vn as \u0275ZONELESS_ENABLED, rm as \u0275_sanitizeHtml, Cr as \u0275_sanitizeUrl, Xt as \u0275allLeavingAnimations, eo as \u0275allowSanitizationBypassAndThrow, PO as \u0275annotateForHydration, UO as \u0275assertType, xM as \u0275bypassSanitizationTrustHtml, FM as \u0275bypassSanitizationTrustResourceUrl, LM as \u0275bypassSanitizationTrustScript, OM as \u0275bypassSanitizationTrustStyle, PM as \u0275bypassSanitizationTrustUrl, sS as \u0275clearResolutionOfComponentResourcesQueue, CD as \u0275compileComponent, lf as \u0275compileDirective, ED as \u0275compileNgModule, DD as \u0275compileNgModuleDefs, bR as \u0275compileNgModuleFactory, RD as \u0275compilePipe, Oa as \u0275convertToBitFlags, OC as \u0275createInjector, VR as \u0275createOrReusePlatformInjector, RO as \u0275defaultIterableDiffers, kO as \u0275defaultKeyValueDiffers, Pn as \u0275depsTracker, Py as \u0275devModeEqual, $O as \u0275disableProfiling, BO as \u0275enableProfiling, GC as \u0275encapsulateResourceError, Od as \u0275findLocaleData, vD as \u0275flushModuleScopingQueueAsMuchAsPossible, _f as \u0275formatRuntimeError, qA as \u0275generateStandaloneInDeclarationsError, GS as \u0275getAsyncClassMetadataFn, H_ as \u0275getClosestComponentName, W as \u0275getComponentDef, Fi as \u0275getDeferBlocks, zT as \u0275getDirectives, Is as \u0275getDocument, GT as \u0275getHostElement, wC as \u0275getInjectableDef, ye as \u0275getLContext, _b as \u0275getLocaleCurrencyCode, wI as \u0275getLocalePluralCase, BC as \u0275getOutputDestroyRef, Jg as \u0275getSanitizationBypassType, ZS as \u0275getTransferState, bM as \u0275getUnknownElementStrictMode, RM as \u0275getUnknownPropertyStrictMode, ve as \u0275global, Wy as \u0275inferTagNameFromDefinition, XR as \u0275injectChangeDetectorRef, LO as \u0275internalCreateApplication, kR as \u0275internalProvideZoneChangeDetection, Bv as \u0275isBoundToModule, iS as \u0275isComponentDefPendingResolution, bC as \u0275isEnvironmentProviders, _C as \u0275isInjectable, Wt as \u0275isNgModule, yd as \u0275isPromise, jv as \u0275isSubscribable, Iw as \u0275isViewDirty, Ew as \u0275markForRefresh, Ze as \u0275noSideEffects, af as \u0275patchComponentDefWithScope, q as \u0275performanceMarkFeature, aa as \u0275promiseWithResolvers, ma as \u0275provideZonelessChangeDetectionInternal, YS as \u0275publishExternalGlobalUtil, hM as \u0275readHydrationInfo, wb as \u0275registerLocaleData, nt as \u0275renderDeferBlockState, YA as \u0275resetCompiledComponents, mM as \u0275resetIncrementalHydrationEnabledWarnedForTests, WA as \u0275resetJitOptions, rv as \u0275resolveComponentResources, aS as \u0275restoreComponentResolutionQueue, uS as \u0275setAllowDuplicateNgModuleIdsForTest, qC as \u0275setAlternateWeakRefImpl, hD as \u0275setClassDebugInfo, pd as \u0275setClassMetadata, Ov as \u0275setClassMetadataAsync, CC as \u0275setCurrentInjector, KT as \u0275setDocument, SC as \u0275setInjectorProfilerContext, AI as \u0275setLocaleId, SM as \u0275setUnknownElementStrictMode, AM as \u0275setUnknownPropertyStrictMode, jO as \u0275startMeasuring, VO as \u0275stopMeasuring, wo as \u0275store, Wr as \u0275stringify, cf as \u0275transitiveScopesFor, ca as \u0275triggerResourceLoading, NC as \u0275truncateMiddle, Sb as \u0275unregisterLocaleData, lt as \u0275unwrapSafeValue, FC as \u0275unwrapWritableSignal, NO as \u0275withDomHydration, BR as \u0275withEventReplay, wO as \u0275withI18nSupport, _O as \u0275withIncrementalHydration, yv as \u0275\u0275ControlFeature, $E as \u0275\u0275ExternalStylesFeature, uo as \u0275\u0275FactoryTarget, vv as \u0275\u0275HostDirectivesFeature, cd as \u0275\u0275InheritDefinitionFeature, Bh as \u0275\u0275NgOnChangesFeature, BE as \u0275\u0275ProvidersFeature, Dm as \u0275\u0275advance, Vo as \u0275\u0275animateEnter, Bo as \u0275\u0275animateEnterListener, $o as \u0275\u0275animateLeave, as as \u0275\u0275animateLeaveListener, Cd as \u0275\u0275ariaProperty, HE as \u0275\u0275arrowFunction, _E as \u0275\u0275attachSourceLocations, Td as \u0275\u0275attribute, oE as \u0275\u0275classMap, qd as \u0275\u0275classProp, mI as \u0275\u0275componentInstance, vI as \u0275\u0275conditional, la as \u0275\u0275conditionalBranchCreate, yI as \u0275\u0275conditionalCreate, $d as \u0275\u0275contentQuery, zd as \u0275\u0275contentQuerySignal, Vy as \u0275\u0275control, Hy as \u0275\u0275controlCreate, sf as \u0275\u0275declareLet, qv as \u0275\u0275defer, xv as \u0275\u0275deferEnableTimerScheduling, Kv as \u0275\u0275deferHydrateNever, lI as \u0275\u0275deferHydrateOnHover, eI as \u0275\u0275deferHydrateOnIdle, oI as \u0275\u0275deferHydrateOnImmediate, fI as \u0275\u0275deferHydrateOnInteraction, sI as \u0275\u0275deferHydrateOnTimer, gI as \u0275\u0275deferHydrateOnViewport, Yv as \u0275\u0275deferHydrateWhen, aI as \u0275\u0275deferOnHover, Jv as \u0275\u0275deferOnIdle, tI as \u0275\u0275deferOnImmediate, uI as \u0275\u0275deferOnInteraction, rI as \u0275\u0275deferOnTimer, pI as \u0275\u0275deferOnViewport, cI as \u0275\u0275deferPrefetchOnHover, Xv as \u0275\u0275deferPrefetchOnIdle, nI as \u0275\u0275deferPrefetchOnImmediate, dI as \u0275\u0275deferPrefetchOnInteraction, iI as \u0275\u0275deferPrefetchOnTimer, hI as \u0275\u0275deferPrefetchOnViewport, Zv as \u0275\u0275deferPrefetchWhen, Qv as \u0275\u0275deferWhen, dv as \u0275\u0275defineComponent, pv as \u0275\u0275defineDirective, V as \u0275\u0275defineInjectable, mo as \u0275\u0275defineInjector, ad as \u0275\u0275defineNgModule, hv as \u0275\u0275definePipe, so as \u0275\u0275directiveInject, Qa as \u0275\u0275disableBindings, wd as \u0275\u0275domElement, Ad as \u0275\u0275domElementContainer, bd as \u0275\u0275domElementContainerEnd, ha as \u0275\u0275domElementContainerStart, fa as \u0275\u0275domElementEnd, da as \u0275\u0275domElementStart, Vd as \u0275\u0275domListener, kd as \u0275\u0275domProperty, ud as \u0275\u0275domTemplate, Nd as \u0275\u0275element, Sd as \u0275\u0275elementContainer, Or as \u0275\u0275elementContainerEnd, pa as \u0275\u0275elementContainerStart, ua as \u0275\u0275elementEnd, cr as \u0275\u0275elementStart, qa as \u0275\u0275enableBindings, pD as \u0275\u0275getComponentDepsFactory, NI as \u0275\u0275getCurrentView, og as \u0275\u0275getInheritedFactory, gD as \u0275\u0275getReplaceMetadataURL, BI as \u0275\u0275i18n, UI as \u0275\u0275i18nApply, $I as \u0275\u0275i18nAttributes, Pd as \u0275\u0275i18nEnd, Fd as \u0275\u0275i18nExp, zI as \u0275\u0275i18nPostprocess, Ld as \u0275\u0275i18nStart, Oe as \u0275\u0275inject, gs as \u0275\u0275injectAttribute, SE as \u0275\u0275interpolate, bE as \u0275\u0275interpolate1, AE as \u0275\u0275interpolate2, RE as \u0275\u0275interpolate3, kE as \u0275\u0275interpolate4, xE as \u0275\u0275interpolate5, OE as \u0275\u0275interpolate6, LE as \u0275\u0275interpolate7, PE as \u0275\u0275interpolate8, FE as \u0275\u0275interpolateV, Ry as \u0275\u0275invalidFactory, Jr as \u0275\u0275invalidFactoryDep, Hd as \u0275\u0275listener, ZI as \u0275\u0275loadQuery, uc as \u0275\u0275namespaceHTML, lc as \u0275\u0275namespaceMathML, cc as \u0275\u0275namespaceSVG, WI as \u0275\u0275nextContext, WO as \u0275\u0275ngDeclareClassMetadata, GO as \u0275\u0275ngDeclareClassMetadataAsync, qO as \u0275\u0275ngDeclareComponent, zO as \u0275\u0275ngDeclareDirective, QO as \u0275\u0275ngDeclareFactory, ZO as \u0275\u0275ngDeclareInjectable, YO as \u0275\u0275ngDeclareInjector, KO as \u0275\u0275ngDeclareNgModule, JO as \u0275\u0275ngDeclarePipe, sD as \u0275\u0275pipe, aD as \u0275\u0275pipeBind1, cD as \u0275\u0275pipeBind2, lD as \u0275\u0275pipeBind3, uD as \u0275\u0275pipeBind4, dD as \u0275\u0275pipeBindV, qI as \u0275\u0275projection, GI as \u0275\u0275projectionDef, Md as \u0275\u0275property, WE as \u0275\u0275pureFunction0, GE as \u0275\u0275pureFunction1, qE as \u0275\u0275pureFunction2, QE as \u0275\u0275pureFunction3, ZE as \u0275\u0275pureFunction4, YE as \u0275\u0275pureFunction5, KE as \u0275\u0275pureFunction6, JE as \u0275\u0275pureFunction7, XE as \u0275\u0275pureFunction8, eD as \u0275\u0275pureFunctionV, YI as \u0275\u0275queryAdvance, QI as \u0275\u0275queryRefresh, wE as \u0275\u0275readContextLet, KI as \u0275\u0275reference, rd as \u0275\u0275registerNgModuleType, CI as \u0275\u0275repeater, DI as \u0275\u0275repeaterCreate, EI as \u0275\u0275repeaterTrackByIdentity, II as \u0275\u0275repeaterTrackByIndex, mD as \u0275\u0275replaceMetadata, Ka as \u0275\u0275resetView, Eu as \u0275\u0275resolveBody, ym as \u0275\u0275resolveDocument, mm as \u0275\u0275resolveWindow, Ya as \u0275\u0275restoreView, lm as \u0275\u0275sanitizeHtml, Iu as \u0275\u0275sanitizeResourceUrl, dm as \u0275\u0275sanitizeScript, um as \u0275\u0275sanitizeStyle, vu as \u0275\u0275sanitizeUrl, hm as \u0275\u0275sanitizeUrlOrResourceUrl, UE as \u0275\u0275setComponentScope, zE as \u0275\u0275setNgModuleScope, NE as \u0275\u0275storeLet, nE as \u0275\u0275styleMap, Gd as \u0275\u0275styleProp, jd as \u0275\u0275syntheticHostListener, xd as \u0275\u0275syntheticHostProperty, ld as \u0275\u0275template, fD as \u0275\u0275templateRefExtractor, dE as \u0275\u0275text, Qd as \u0275\u0275textInterpolate, ga as \u0275\u0275textInterpolate1, Zd as \u0275\u0275textInterpolate2, Yd as \u0275\u0275textInterpolate3, Kd as \u0275\u0275textInterpolate4, Jd as \u0275\u0275textInterpolate5, Xd as \u0275\u0275textInterpolate6, ef as \u0275\u0275textInterpolate7, tf as \u0275\u0275textInterpolate8, nf as \u0275\u0275textInterpolateV, fm as \u0275\u0275trustConstantHtml, pm as \u0275\u0275trustConstantResourceUrl, TE as \u0275\u0275twoWayBindingSet, rf as \u0275\u0275twoWayListener, of as \u0275\u0275twoWayProperty, gm as \u0275\u0275validateAttribute, Ud as \u0275\u0275viewQuery, Wd as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.6
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
