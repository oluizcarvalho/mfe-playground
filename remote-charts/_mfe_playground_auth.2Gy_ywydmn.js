import { a as l, b as m, d as u } from "@nf-internal/chunk-4CLCTAJ7";
import { signal as o, computed as h } from "@angular/core";
import { Subject as p, BehaviorSubject as v } from "rxjs";
var c = "__mfeAuthService", T = "__mfeSharedState", g = { "admin@demo.com": { password: "admin", user: { id: "1", name: "Admin User", email: "admin@demo.com", roles: ["admin", "user"], avatar: "A" } }, "user@demo.com": { password: "user", user: { id: "2", name: "Regular User", email: "user@demo.com", roles: ["user"], avatar: "U" } } };
function d() { return `mfe_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`; }
function r(a, t) { globalThis[T]?.set(a, t); }
var n = class a {
    currentUser = o(null);
    token = o(null);
    isLoading = o(!1);
    error = o(null);
    isAuthenticated = h(() => this.currentUser() !== null);
    userDisplayName = h(() => this.currentUser()?.name ?? "Guest");
    isAdmin = h(() => this.currentUser()?.roles.includes("admin") ?? !1);
    authEvents$ = new p;
    authState$ = new v(null);
    refreshTimer = null;
    constructor() { this.startTokenRefreshTimer(); }
    static getInstance() { let t = globalThis[c]; if (t)
        return t; let e = new a; return globalThis[c] = e, e; }
    login(t) { return u(this, null, function* () { this.isLoading.set(!0), this.error.set(null); try {
        yield new Promise(i => setTimeout(i, 800 + Math.random() * 700));
        let e = g[t.email];
        if (!e || e.password !== t.password)
            throw new Error("Invalid email or password");
        let s = d();
        this.currentUser.set(e.user), this.token.set(s), this.authState$.next(e.user), this.emitEvent({ type: "login", user: e.user }), r("auth:user", e.user.name), r("auth:status", "authenticated"), r("auth:roles", e.user.roles.join(", "));
    }
    catch (e) {
        let s = e instanceof Error ? e.message : "Login failed";
        throw this.error.set(s), this.emitEvent({ type: "error", error: s }), e;
    }
    finally {
        this.isLoading.set(!1);
    } }); }
    logout() { let t = this.currentUser(); this.currentUser.set(null), this.token.set(null), this.error.set(null), this.authState$.next(null), this.emitEvent({ type: "logout", user: t ?? void 0 }), r("auth:user", null), r("auth:status", "guest"), r("auth:roles", null); }
    refreshToken() { return u(this, null, function* () { if (!this.isAuthenticated())
        return; let t = d(); this.token.set(t), this.emitEvent({ type: "token-refresh", user: this.currentUser() ?? void 0 }); }); }
    hasRole(t) { return this.currentUser()?.roles.includes(t) ?? !1; }
    emitEvent(t) { let e = m(l({}, t), { timestamp: Date.now() }); this.authEvents$.next(e); let s = globalThis.__mfeMetricsStore; if (s) {
        let i = { source: "auth", name: e.type, value: 1, timestamp: e.timestamp };
        s.push(i), window.dispatchEvent(new CustomEvent("mfe:metric", { detail: i }));
    } }
    startTokenRefreshTimer() { this.refreshTimer = setInterval(() => { this.isAuthenticated() && this.refreshToken(); }, 6e4); }
    destroy() { this.refreshTimer && (clearInterval(this.refreshTimer), this.refreshTimer = null), this.authEvents$.complete(), this.authState$.complete(); }
};
import { InjectionToken as E, makeEnvironmentProviders as S } from "@angular/core";
var f = new E("AuthService");
function w() { return S([{ provide: f, useFactory: () => n.getInstance() }]); }
export { f as AUTH_SERVICE, n as AuthService, w as provideAuth };
