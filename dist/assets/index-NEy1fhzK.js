var r_ = Object.defineProperty;
var u_ = (a, r, l) =>
  r in a
    ? r_(a, r, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (a[r] = l);
var Ee = (a, r, l) => u_(a, typeof r != "symbol" ? r + "" : r, l);
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) u(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function u(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = l(o);
    fetch(o.href, f);
  }
})();
var gf = { exports: {} },
  hr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp;
function s_() {
  if (mp) return hr;
  mp = 1;
  var a = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function l(u, o, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      o.key !== void 0 && (d = "" + o.key),
      "key" in o)
    ) {
      f = {};
      for (var h in o) h !== "key" && (f[h] = o[h]);
    } else f = o;
    return (
      (o = f.ref),
      { $$typeof: a, type: u, key: d, ref: o !== void 0 ? o : null, props: f }
    );
  }
  return ((hr.Fragment = r), (hr.jsx = l), (hr.jsxs = l), hr);
}
var pp;
function o_() {
  return (pp || ((pp = 1), (gf.exports = s_())), gf.exports);
}
var et = o_(),
  yf = { exports: {} },
  _t = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp;
function c_() {
  if (gp) return _t;
  gp = 1;
  var a = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function O(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (b && S[b]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    G = {};
  function X(S, U, K) {
    ((this.props = S),
      (this.context = U),
      (this.refs = G),
      (this.updater = K || C));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (S, U) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, U, "setState");
    }),
    (X.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    }));
  function Z() {}
  Z.prototype = X.prototype;
  function rt(S, U, K) {
    ((this.props = S),
      (this.context = U),
      (this.refs = G),
      (this.updater = K || C));
  }
  var tt = (rt.prototype = new Z());
  ((tt.constructor = rt), N(tt, X.prototype), (tt.isPureReactComponent = !0));
  var st = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    Y = Object.prototype.hasOwnProperty;
  function W(S, U, K, V, Q, ft) {
    return (
      (K = ft.ref),
      { $$typeof: a, type: S, key: U, ref: K !== void 0 ? K : null, props: ft }
    );
  }
  function T(S, U) {
    return W(S.type, U, void 0, void 0, void 0, S.props);
  }
  function z(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function F(S) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (K) {
        return U[K];
      })
    );
  }
  var J = /\/+/g;
  function k(S, U) {
    return typeof S == "object" && S !== null && S.key != null
      ? F("" + S.key)
      : U.toString(36);
  }
  function I() {}
  function St(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(I, I)
            : ((S.status = "pending"),
              S.then(
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = U));
                },
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = U));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function ut(S, U, K, V, Q) {
    var ft = typeof S;
    (ft === "undefined" || ft === "boolean") && (S = null);
    var nt = !1;
    if (S === null) nt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case r:
              nt = !0;
              break;
            case g:
              return ((nt = S._init), ut(nt(S._payload), U, K, V, Q));
          }
      }
    if (nt)
      return (
        (Q = Q(S)),
        (nt = V === "" ? "." + k(S, 0) : V),
        st(Q)
          ? ((K = ""),
            nt != null && (K = nt.replace(J, "$&/") + "/"),
            ut(Q, U, K, "", function (zt) {
              return zt;
            }))
          : Q != null &&
            (z(Q) &&
              (Q = T(
                Q,
                K +
                  (Q.key == null || (S && S.key === Q.key)
                    ? ""
                    : ("" + Q.key).replace(J, "$&/") + "/") +
                  nt,
              )),
            U.push(Q)),
        1
      );
    nt = 0;
    var dt = V === "" ? "." : V + ":";
    if (st(S))
      for (var ct = 0; ct < S.length; ct++)
        ((V = S[ct]), (ft = dt + k(V, ct)), (nt += ut(V, U, K, ft, Q)));
    else if (((ct = O(S)), typeof ct == "function"))
      for (S = ct.call(S), ct = 0; !(V = S.next()).done; )
        ((V = V.value), (ft = dt + k(V, ct++)), (nt += ut(V, U, K, ft, Q)));
    else if (ft === "object") {
      if (typeof S.then == "function") return ut(St(S), U, K, V, Q);
      throw (
        (U = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return nt;
  }
  function x(S, U, K) {
    if (S == null) return S;
    var V = [],
      Q = 0;
    return (
      ut(S, V, "", "", function (ft) {
        return U.call(K, ft, Q++);
      }),
      V
    );
  }
  function q(S) {
    if (S._status === -1) {
      var U = S._result;
      ((U = U()),
        U.then(
          function (K) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = K));
          },
          function (K) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = K));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = U)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var B =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function gt() {}
  return (
    (_t.Children = {
      map: x,
      forEach: function (S, U, K) {
        x(
          S,
          function () {
            U.apply(this, arguments);
          },
          K,
        );
      },
      count: function (S) {
        var U = 0;
        return (
          x(S, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (S) {
        return (
          x(S, function (U) {
            return U;
          }) || []
        );
      },
      only: function (S) {
        if (!z(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    }),
    (_t.Component = X),
    (_t.Fragment = l),
    (_t.Profiler = o),
    (_t.PureComponent = rt),
    (_t.StrictMode = u),
    (_t.Suspense = v),
    (_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (_t.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return P.H.useMemoCache(S);
      },
    }),
    (_t.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (_t.cloneElement = function (S, U, K) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + ".",
        );
      var V = N({}, S.props),
        Q = S.key,
        ft = void 0;
      if (U != null)
        for (nt in (U.ref !== void 0 && (ft = void 0),
        U.key !== void 0 && (Q = "" + U.key),
        U))
          !Y.call(U, nt) ||
            nt === "key" ||
            nt === "__self" ||
            nt === "__source" ||
            (nt === "ref" && U.ref === void 0) ||
            (V[nt] = U[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) V.children = K;
      else if (1 < nt) {
        for (var dt = Array(nt), ct = 0; ct < nt; ct++)
          dt[ct] = arguments[ct + 2];
        V.children = dt;
      }
      return W(S.type, Q, void 0, void 0, ft, V);
    }),
    (_t.createContext = function (S) {
      return (
        (S = {
          $$typeof: d,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: f, _context: S }),
        S
      );
    }),
    (_t.createElement = function (S, U, K) {
      var V,
        Q = {},
        ft = null;
      if (U != null)
        for (V in (U.key !== void 0 && (ft = "" + U.key), U))
          Y.call(U, V) &&
            V !== "key" &&
            V !== "__self" &&
            V !== "__source" &&
            (Q[V] = U[V]);
      var nt = arguments.length - 2;
      if (nt === 1) Q.children = K;
      else if (1 < nt) {
        for (var dt = Array(nt), ct = 0; ct < nt; ct++)
          dt[ct] = arguments[ct + 2];
        Q.children = dt;
      }
      if (S && S.defaultProps)
        for (V in ((nt = S.defaultProps), nt))
          Q[V] === void 0 && (Q[V] = nt[V]);
      return W(S, ft, void 0, void 0, null, Q);
    }),
    (_t.createRef = function () {
      return { current: null };
    }),
    (_t.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (_t.isValidElement = z),
    (_t.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: q };
    }),
    (_t.memo = function (S, U) {
      return { $$typeof: p, type: S, compare: U === void 0 ? null : U };
    }),
    (_t.startTransition = function (S) {
      var U = P.T,
        K = {};
      P.T = K;
      try {
        var V = S(),
          Q = P.S;
        (Q !== null && Q(K, V),
          typeof V == "object" &&
            V !== null &&
            typeof V.then == "function" &&
            V.then(gt, B));
      } catch (ft) {
        B(ft);
      } finally {
        P.T = U;
      }
    }),
    (_t.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (_t.use = function (S) {
      return P.H.use(S);
    }),
    (_t.useActionState = function (S, U, K) {
      return P.H.useActionState(S, U, K);
    }),
    (_t.useCallback = function (S, U) {
      return P.H.useCallback(S, U);
    }),
    (_t.useContext = function (S) {
      return P.H.useContext(S);
    }),
    (_t.useDebugValue = function () {}),
    (_t.useDeferredValue = function (S, U) {
      return P.H.useDeferredValue(S, U);
    }),
    (_t.useEffect = function (S, U, K) {
      var V = P.H;
      if (typeof K == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return V.useEffect(S, U);
    }),
    (_t.useId = function () {
      return P.H.useId();
    }),
    (_t.useImperativeHandle = function (S, U, K) {
      return P.H.useImperativeHandle(S, U, K);
    }),
    (_t.useInsertionEffect = function (S, U) {
      return P.H.useInsertionEffect(S, U);
    }),
    (_t.useLayoutEffect = function (S, U) {
      return P.H.useLayoutEffect(S, U);
    }),
    (_t.useMemo = function (S, U) {
      return P.H.useMemo(S, U);
    }),
    (_t.useOptimistic = function (S, U) {
      return P.H.useOptimistic(S, U);
    }),
    (_t.useReducer = function (S, U, K) {
      return P.H.useReducer(S, U, K);
    }),
    (_t.useRef = function (S) {
      return P.H.useRef(S);
    }),
    (_t.useState = function (S) {
      return P.H.useState(S);
    }),
    (_t.useSyncExternalStore = function (S, U, K) {
      return P.H.useSyncExternalStore(S, U, K);
    }),
    (_t.useTransition = function () {
      return P.H.useTransition();
    }),
    (_t.version = "19.1.0"),
    _t
  );
}
var yp;
function jr() {
  return (yp || ((yp = 1), (yf.exports = c_())), yf.exports);
}
var mt = jr();
function Rt(a) {
  for (
    var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), u = 1;
    u < r;
    u++
  )
    l[u - 1] = arguments[u];
  throw new Error(
    typeof a == "number"
      ? "[MobX] minified error nr: " +
        a +
        (l.length ? " " + l.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + a,
  );
}
var f_ = {};
function qs() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : f_;
}
var hg = Object.assign,
  Ss = Object.getOwnPropertyDescriptor,
  An = Object.defineProperty,
  ks = Object.prototype,
  kf = [];
Object.freeze(kf);
var vg = {};
Object.freeze(vg);
var d_ = typeof Proxy < "u",
  h_ = Object.toString();
function mg() {
  d_ || Rt("Proxy not available");
}
function pg(a) {
  var r = !1;
  return function () {
    if (!r) return ((r = !0), a.apply(this, arguments));
  };
}
var nl = function () {};
function cn(a) {
  return typeof a == "function";
}
function ei(a) {
  var r = typeof a;
  switch (r) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ys(a) {
  return a !== null && typeof a == "object";
}
function Ma(a) {
  if (!Ys(a)) return !1;
  var r = Object.getPrototypeOf(a);
  if (r == null) return !0;
  var l = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return typeof l == "function" && l.toString() === h_;
}
function gg(a) {
  var r = a == null ? void 0 : a.constructor;
  return r
    ? r.name === "GeneratorFunction" || r.displayName === "GeneratorFunction"
    : !1;
}
function Xs(a, r, l) {
  An(a, r, { enumerable: !1, writable: !0, configurable: !0, value: l });
}
function yg(a, r, l) {
  An(a, r, { enumerable: !1, writable: !1, configurable: !0, value: l });
}
function li(a, r) {
  var l = "isMobX" + a;
  return (
    (r.prototype[l] = !0),
    function (u) {
      return Ys(u) && u[l] === !0;
    }
  );
}
function cl(a) {
  return a != null && Object.prototype.toString.call(a) === "[object Map]";
}
function v_(a) {
  var r = Object.getPrototypeOf(a),
    l = Object.getPrototypeOf(r),
    u = Object.getPrototypeOf(l);
  return u === null;
}
function Yn(a) {
  return a != null && Object.prototype.toString.call(a) === "[object Set]";
}
var bg = typeof Object.getOwnPropertySymbols < "u";
function m_(a) {
  var r = Object.keys(a);
  if (!bg) return r;
  var l = Object.getOwnPropertySymbols(a);
  return l.length
    ? [].concat(
        r,
        l.filter(function (u) {
          return ks.propertyIsEnumerable.call(a, u);
        }),
      )
    : r;
}
var Ks =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : bg
      ? function (a) {
          return Object.getOwnPropertyNames(a).concat(
            Object.getOwnPropertySymbols(a),
          );
        }
      : Object.getOwnPropertyNames;
function _g(a) {
  return a === null ? null : typeof a == "object" ? "" + a : a;
}
function Qn(a, r) {
  return ks.hasOwnProperty.call(a, r);
}
var p_ =
  Object.getOwnPropertyDescriptors ||
  function (r) {
    var l = {};
    return (
      Ks(r).forEach(function (u) {
        l[u] = Ss(r, u);
      }),
      l
    );
  };
function Le(a, r) {
  return !!(a & r);
}
function Be(a, r, l) {
  return (l ? (a |= r) : (a &= ~r), a);
}
function bp(a, r) {
  (r == null || r > a.length) && (r = a.length);
  for (var l = 0, u = Array(r); l < r; l++) u[l] = a[l];
  return u;
}
function g_(a, r) {
  for (var l = 0; l < r.length; l++) {
    var u = r[l];
    ((u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      "value" in u && (u.writable = !0),
      Object.defineProperty(a, b_(u.key), u));
  }
}
function fl(a, r, l) {
  return (
    r && g_(a.prototype, r),
    Object.defineProperty(a, "prototype", { writable: !1 }),
    a
  );
}
function al(a, r) {
  var l = (typeof Symbol < "u" && a[Symbol.iterator]) || a["@@iterator"];
  if (l) return (l = l.call(a)).next.bind(l);
  if (Array.isArray(a) || (l = __(a)) || r) {
    l && (a = l);
    var u = 0;
    return function () {
      return u >= a.length ? { done: !0 } : { done: !1, value: a[u++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var r = 1; r < arguments.length; r++) {
            var l = arguments[r];
            for (var u in l) ({}).hasOwnProperty.call(l, u) && (a[u] = l[u]);
          }
          return a;
        }),
    ni.apply(null, arguments)
  );
}
function Sg(a, r) {
  ((a.prototype = Object.create(r.prototype)),
    (a.prototype.constructor = a),
    Yf(a, r));
}
function Yf(a, r) {
  return (
    (Yf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, u) {
          return ((l.__proto__ = u), l);
        }),
    Yf(a, r)
  );
}
function y_(a, r) {
  if (typeof a != "object" || !a) return a;
  var l = a[Symbol.toPrimitive];
  if (l !== void 0) {
    var u = l.call(a, r);
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
function b_(a) {
  var r = y_(a, "string");
  return typeof r == "symbol" ? r : r + "";
}
function __(a, r) {
  if (a) {
    if (typeof a == "string") return bp(a, r);
    var l = {}.toString.call(a).slice(8, -1);
    return (
      l === "Object" && a.constructor && (l = a.constructor.name),
      l === "Map" || l === "Set"
        ? Array.from(a)
        : l === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          ? bp(a, r)
          : void 0
    );
  }
}
var Sn = Symbol("mobx-stored-annotations");
function En(a) {
  function r(l, u) {
    if (Br(u)) return a.decorate_20223_(l, u);
    Lr(l, u, a);
  }
  return Object.assign(r, a);
}
function Lr(a, r, l) {
  (Qn(a, Sn) || Xs(a, Sn, ni({}, a[Sn])), T_(l) || (a[Sn][r] = l));
}
function S_(a) {
  return (Qn(a, Sn) || Xs(a, Sn, ni({}, a[Sn])), a[Sn]);
}
function Br(a) {
  return typeof a == "object" && typeof a.kind == "string";
}
var yt = Symbol("mobx administration"),
  Da = (function () {
    function a(l) {
      (l === void 0 && (l = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Dt.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = l));
    }
    var r = a.prototype;
    return (
      (r.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (u) {
            return u();
          });
      }),
      (r.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (u) {
            return u();
          });
      }),
      (r.reportObserved = function () {
        return Bg(this);
      }),
      (r.reportChanged = function () {
        (Ie(), Vg(this), tn());
      }),
      (r.toString = function () {
        return this.name_;
      }),
      fl(a, [
        {
          key: "isBeingObserved",
          get: function () {
            return Le(this.flags_, a.isBeingObservedMask_);
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.isBeingObservedMask_, u);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Le(this.flags_, a.isPendingUnobservationMask_);
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.isPendingUnobservationMask_, u);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Le(this.flags_, a.diffValueMask_) ? 1 : 0;
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.diffValueMask_, u === 1);
          },
        },
      ])
    );
  })();
Da.isBeingObservedMask_ = 1;
Da.isPendingUnobservationMask_ = 2;
Da.diffValueMask_ = 4;
var dd = li("Atom", Da);
function Og(a, r, l) {
  (r === void 0 && (r = nl), l === void 0 && (l = nl));
  var u = new Da(a);
  return (r !== nl && CS(u, r), l !== nl && Yg(u, l), u);
}
function O_(a, r) {
  return ty(a, r);
}
function A_(a, r) {
  return Object.is
    ? Object.is(a, r)
    : a === r
      ? a !== 0 || 1 / a === 1 / r
      : a !== a && r !== r;
}
var Os = { structural: O_, default: A_ };
function ai(a, r, l) {
  return Qg(a)
    ? a
    : Array.isArray(a)
      ? Qt.array(a, { name: l })
      : Ma(a)
        ? Qt.object(a, void 0, { name: l })
        : cl(a)
          ? Qt.map(a, { name: l })
          : Yn(a)
            ? Qt.set(a, { name: l })
            : typeof a == "function" && !Dr(a) && !Cr(a)
              ? gg(a)
                ? sl(a)
                : wr(l, a)
              : a;
}
function E_(a, r, l) {
  if (a == null || Fs(a) || $s(a) || ui(a) || _n(a)) return a;
  if (Array.isArray(a)) return Qt.array(a, { name: l, deep: !1 });
  if (Ma(a)) return Qt.object(a, void 0, { name: l, deep: !1 });
  if (cl(a)) return Qt.map(a, { name: l, deep: !1 });
  if (Yn(a)) return Qt.set(a, { name: l, deep: !1 });
}
function Qs(a) {
  return a;
}
function x_(a, r) {
  return ty(a, r) ? r : a;
}
var M_ = "override";
function T_(a) {
  return a.annotationType_ === M_;
}
function Vr(a, r) {
  return {
    annotationType_: a,
    options_: r,
    make_: R_,
    extend_: w_,
    decorate_20223_: D_,
  };
}
function R_(a, r, l, u) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(a, r, l, !1) === null ? 0 : 1;
  if (u === a.target_) return this.extend_(a, r, l, !1) === null ? 0 : 2;
  if (Dr(l.value)) return 1;
  var f = Ag(a, this, r, l, !1);
  return (An(u, r, f), 2);
}
function w_(a, r, l, u) {
  var o = Ag(a, this, r, l);
  return a.defineProperty_(r, o, u);
}
function D_(a, r) {
  var l = r.kind,
    u = r.name,
    o = r.addInitializer,
    f = this,
    d = function (p) {
      var g, b, O, C;
      return ii(
        (g = (b = f.options_) == null ? void 0 : b.name) != null
          ? g
          : u.toString(),
        p,
        (O = (C = f.options_) == null ? void 0 : C.autoAction) != null ? O : !1,
      );
    };
  if (l == "field")
    return function (v) {
      var p,
        g = v;
      return (
        Dr(g) || (g = d(g)),
        (p = f.options_) != null &&
          p.bound &&
          ((g = g.bind(this)), (g.isMobxAction = !0)),
        g
      );
    };
  if (l == "method") {
    var h;
    return (
      Dr(a) || (a = d(a)),
      (h = this.options_) != null &&
        h.bound &&
        o(function () {
          var v = this,
            p = v[u].bind(v);
          ((p.isMobxAction = !0), (v[u] = p));
        }),
      a
    );
  }
  Rt(
    "Cannot apply '" +
      f.annotationType_ +
      "' to '" +
      String(u) +
      "' (kind: " +
      l +
      "):" +
      (`
'` +
        f.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function C_(a, r, l, u) {
  (r.annotationType_, u.value);
}
function Ag(a, r, l, u, o) {
  var f, d, h, v, p, g, b;
  (o === void 0 && (o = $.safeDescriptors), C_(a, r, l, u));
  var O = u.value;
  if ((f = r.options_) != null && f.bound) {
    var C;
    O = O.bind((C = a.proxy_) != null ? C : a.target_);
  }
  return {
    value: ii(
      (d = (h = r.options_) == null ? void 0 : h.name) != null
        ? d
        : l.toString(),
      O,
      (v = (p = r.options_) == null ? void 0 : p.autoAction) != null ? v : !1,
      (g = r.options_) != null && g.bound
        ? (b = a.proxy_) != null
          ? b
          : a.target_
        : void 0,
    ),
    configurable: o ? a.isPlainObject_ : !0,
    enumerable: !1,
    writable: !o,
  };
}
function Eg(a, r) {
  return {
    annotationType_: a,
    options_: r,
    make_: z_,
    extend_: N_,
    decorate_20223_: U_,
  };
}
function z_(a, r, l, u) {
  var o;
  if (u === a.target_) return this.extend_(a, r, l, !1) === null ? 0 : 2;
  if (
    (o = this.options_) != null &&
    o.bound &&
    (!Qn(a.target_, r) || !Cr(a.target_[r])) &&
    this.extend_(a, r, l, !1) === null
  )
    return 0;
  if (Cr(l.value)) return 1;
  var f = xg(a, this, r, l, !1, !1);
  return (An(u, r, f), 2);
}
function N_(a, r, l, u) {
  var o,
    f = xg(a, this, r, l, (o = this.options_) == null ? void 0 : o.bound);
  return a.defineProperty_(r, f, u);
}
function U_(a, r) {
  var l,
    u = r.name,
    o = r.addInitializer;
  return (
    Cr(a) || (a = sl(a)),
    (l = this.options_) != null &&
      l.bound &&
      o(function () {
        var f = this,
          d = f[u].bind(f);
        ((d.isMobXFlow = !0), (f[u] = d));
      }),
    a
  );
}
function j_(a, r, l, u) {
  (r.annotationType_, u.value);
}
function xg(a, r, l, u, o, f) {
  (f === void 0 && (f = $.safeDescriptors), j_(a, r, l, u));
  var d = u.value;
  if ((Cr(d) || (d = sl(d)), o)) {
    var h;
    ((d = d.bind((h = a.proxy_) != null ? h : a.target_)), (d.isMobXFlow = !0));
  }
  return {
    value: d,
    configurable: f ? a.isPlainObject_ : !0,
    enumerable: !1,
    writable: !f,
  };
}
function hd(a, r) {
  return {
    annotationType_: a,
    options_: r,
    make_: L_,
    extend_: B_,
    decorate_20223_: V_,
  };
}
function L_(a, r, l) {
  return this.extend_(a, r, l, !1) === null ? 0 : 1;
}
function B_(a, r, l, u) {
  return (
    H_(a, this, r, l),
    a.defineComputedProperty_(
      r,
      ni({}, this.options_, { get: l.get, set: l.set }),
      u,
    )
  );
}
function V_(a, r) {
  var l = this,
    u = r.name,
    o = r.addInitializer;
  return (
    o(function () {
      var f = dl(this)[yt],
        d = ni({}, l.options_, { get: a, context: this });
      (d.name || (d.name = "ObservableObject." + u.toString()),
        f.values_.set(u, new fn(d)));
    }),
    function () {
      return this[yt].getObservablePropValue_(u);
    }
  );
}
function H_(a, r, l, u) {
  (r.annotationType_, u.get);
}
function Zs(a, r) {
  return {
    annotationType_: a,
    options_: r,
    make_: G_,
    extend_: q_,
    decorate_20223_: k_,
  };
}
function G_(a, r, l) {
  return this.extend_(a, r, l, !1) === null ? 0 : 1;
}
function q_(a, r, l, u) {
  var o, f;
  return (
    Y_(a, this),
    a.defineObservableProperty_(
      r,
      l.value,
      (o = (f = this.options_) == null ? void 0 : f.enhancer) != null ? o : ai,
      u,
    )
  );
}
function k_(a, r) {
  var l = this,
    u = r.kind,
    o = r.name,
    f = new WeakSet();
  function d(h, v) {
    var p,
      g,
      b = dl(h)[yt],
      O = new Wa(
        v,
        (p = (g = l.options_) == null ? void 0 : g.enhancer) != null ? p : ai,
        "ObservableObject." + o.toString(),
        !1,
      );
    (b.values_.set(o, O), f.add(h));
  }
  if (u == "accessor")
    return {
      get: function () {
        return (
          f.has(this) || d(this, a.get.call(this)),
          this[yt].getObservablePropValue_(o)
        );
      },
      set: function (v) {
        return (
          f.has(this) || d(this, v),
          this[yt].setObservablePropValue_(o, v)
        );
      },
      init: function (v) {
        return (f.has(this) || d(this, v), v);
      },
    };
}
function Y_(a, r, l, u) {
  r.annotationType_;
}
var X_ = "true",
  K_ = Mg();
function Mg(a) {
  return {
    annotationType_: X_,
    options_: a,
    make_: Q_,
    extend_: Z_,
    decorate_20223_: P_,
  };
}
function Q_(a, r, l, u) {
  var o, f;
  if (l.get) return Ps.make_(a, r, l, u);
  if (l.set) {
    var d = ii(r.toString(), l.set);
    return u === a.target_
      ? a.defineProperty_(r, {
          configurable: $.safeDescriptors ? a.isPlainObject_ : !0,
          set: d,
        }) === null
        ? 0
        : 2
      : (An(u, r, { configurable: !0, set: d }), 2);
  }
  if (u !== a.target_ && typeof l.value == "function") {
    var h;
    if (gg(l.value)) {
      var v,
        p = (v = this.options_) != null && v.autoBind ? sl.bound : sl;
      return p.make_(a, r, l, u);
    }
    var g = (h = this.options_) != null && h.autoBind ? wr.bound : wr;
    return g.make_(a, r, l, u);
  }
  var b = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Qt.ref : Qt;
  if (
    typeof l.value == "function" &&
    (f = this.options_) != null &&
    f.autoBind
  ) {
    var O;
    l.value = l.value.bind((O = a.proxy_) != null ? O : a.target_);
  }
  return b.make_(a, r, l, u);
}
function Z_(a, r, l, u) {
  var o, f;
  if (l.get) return Ps.extend_(a, r, l, u);
  if (l.set)
    return a.defineProperty_(
      r,
      {
        configurable: $.safeDescriptors ? a.isPlainObject_ : !0,
        set: ii(r.toString(), l.set),
      },
      u,
    );
  if (
    typeof l.value == "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var d;
    l.value = l.value.bind((d = a.proxy_) != null ? d : a.target_);
  }
  var h = ((f = this.options_) == null ? void 0 : f.deep) === !1 ? Qt.ref : Qt;
  return h.extend_(a, r, l, u);
}
function P_(a, r) {
  Rt("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var J_ = "observable",
  $_ = "observable.ref",
  F_ = "observable.shallow",
  W_ = "observable.struct",
  Tg = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Tg);
function as(a) {
  return a || Tg;
}
var Xf = Zs(J_),
  I_ = Zs($_, { enhancer: Qs }),
  tS = Zs(F_, { enhancer: E_ }),
  eS = Zs(W_, { enhancer: x_ }),
  Rg = En(Xf);
function is(a) {
  return a.deep === !0 ? ai : a.deep === !1 ? Qs : aS(a.defaultDecorator);
}
function nS(a) {
  var r;
  return a ? ((r = a.defaultDecorator) != null ? r : Mg(a)) : void 0;
}
function aS(a) {
  var r, l;
  return a && (r = (l = a.options_) == null ? void 0 : l.enhancer) != null
    ? r
    : ai;
}
function wg(a, r, l) {
  if (Br(r)) return Xf.decorate_20223_(a, r);
  if (ei(r)) {
    Lr(a, r, Xf);
    return;
  }
  return Qg(a)
    ? a
    : Ma(a)
      ? Qt.object(a, r, l)
      : Array.isArray(a)
        ? Qt.array(a, r)
        : cl(a)
          ? Qt.map(a, r)
          : Yn(a)
            ? Qt.set(a, r)
            : typeof a == "object" && a !== null
              ? a
              : Qt.box(a, r);
}
hg(wg, Rg);
var iS = {
    box: function (r, l) {
      var u = as(l);
      return new Wa(r, is(u), u.name, !0, u.equals);
    },
    array: function (r, l) {
      var u = as(l);
      return ($.useProxies === !1 || u.proxy === !1 ? t1 : XS)(
        r,
        is(u),
        u.name,
      );
    },
    map: function (r, l) {
      var u = as(l);
      return new Pg(r, is(u), u.name);
    },
    set: function (r, l) {
      var u = as(l);
      return new Jg(r, is(u), u.name);
    },
    object: function (r, l, u) {
      return si(function () {
        return jS(
          $.useProxies === !1 || (u == null ? void 0 : u.proxy) === !1
            ? dl({}, u)
            : GS({}, u),
          r,
          l,
        );
      });
    },
    ref: En(I_),
    shallow: En(tS),
    deep: Rg,
    struct: En(eS),
  },
  Qt = hg(wg, iS),
  Dg = "computed",
  lS = "computed.struct",
  Kf = hd(Dg),
  rS = hd(lS, { equals: Os.structural }),
  Ps = function (r, l) {
    if (Br(l)) return Kf.decorate_20223_(r, l);
    if (ei(l)) return Lr(r, l, Kf);
    if (Ma(r)) return En(hd(Dg, r));
    var u = Ma(l) ? l : {};
    return ((u.get = r), u.name || (u.name = r.name || ""), new fn(u));
  };
Object.assign(Ps, Kf);
Ps.struct = En(rS);
var _p,
  Sp,
  As = 0,
  uS = 1,
  sS =
    (_p =
      (Sp = Ss(function () {}, "name")) == null ? void 0 : Sp.configurable) !=
    null
      ? _p
      : !1,
  Op = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function ii(a, r, l, u) {
  l === void 0 && (l = !1);
  function o() {
    return oS(a, l, r, u || this, arguments);
  }
  return (
    (o.isMobxAction = !0),
    (o.toString = function () {
      return r.toString();
    }),
    sS && ((Op.value = a), An(o, "name", Op)),
    o
  );
}
function oS(a, r, l, u, o) {
  var f = cS(a, r);
  try {
    return l.apply(u, o);
  } catch (d) {
    throw ((f.error_ = d), d);
  } finally {
    fS(f);
  }
}
function cS(a, r, l, u) {
  var o = !1,
    f = 0,
    d = $.trackingDerivation,
    h = !r || !d;
  Ie();
  var v = $.allowStateChanges;
  h && (ri(), (v = vd(!0)));
  var p = pd(!0),
    g = {
      runAsAction_: h,
      prevDerivation_: d,
      prevAllowStateChanges_: v,
      prevAllowStateReads_: p,
      notifySpy_: o,
      startTime_: f,
      actionId_: uS++,
      parentActionId_: As,
    };
  return ((As = g.actionId_), g);
}
function fS(a) {
  (As !== a.actionId_ && Rt(30),
    (As = a.parentActionId_),
    a.error_ !== void 0 && ($.suppressReactionErrors = !0),
    md(a.prevAllowStateChanges_),
    xr(a.prevAllowStateReads_),
    tn(),
    a.runAsAction_ && Zn(a.prevDerivation_),
    ($.suppressReactionErrors = !1));
}
function vd(a) {
  var r = $.allowStateChanges;
  return (($.allowStateChanges = a), r);
}
function md(a) {
  $.allowStateChanges = a;
}
var Wa = (function (a) {
    function r(u, o, f, d, h) {
      var v;
      return (
        f === void 0 && (f = "ObservableValue"),
        h === void 0 && (h = Os.default),
        (v = a.call(this, f) || this),
        (v.enhancer = void 0),
        (v.name_ = void 0),
        (v.equals = void 0),
        (v.hasUnreportedChange_ = !1),
        (v.interceptors_ = void 0),
        (v.changeListeners_ = void 0),
        (v.value_ = void 0),
        (v.dehancer = void 0),
        (v.enhancer = o),
        (v.name_ = f),
        (v.equals = h),
        (v.value_ = o(u, void 0, f)),
        v
      );
    }
    Sg(r, a);
    var l = r.prototype;
    return (
      (l.dehanceValue = function (o) {
        return this.dehancer !== void 0 ? this.dehancer(o) : o;
      }),
      (l.set = function (o) {
        (this.value_,
          (o = this.prepareNewValue_(o)),
          o !== $.UNCHANGED && this.setNewValue_(o));
      }),
      (l.prepareNewValue_ = function (o) {
        if (Fe(this)) {
          var f = We(this, { object: this, type: xn, newValue: o });
          if (!f) return $.UNCHANGED;
          o = f.newValue;
        }
        return (
          (o = this.enhancer(o, this.value_, this.name_)),
          this.equals(this.value_, o) ? $.UNCHANGED : o
        );
      }),
      (l.setNewValue_ = function (o) {
        var f = this.value_;
        ((this.value_ = o),
          this.reportChanged(),
          un(this) &&
            sn(this, { type: xn, object: this, newValue: o, oldValue: f }));
      }),
      (l.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (l.intercept_ = function (o) {
        return Hr(this, o);
      }),
      (l.observe_ = function (o, f) {
        return (
          f &&
            o({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: xn,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Gr(this, o)
        );
      }),
      (l.raw = function () {
        return this.value_;
      }),
      (l.toJSON = function () {
        return this.get();
      }),
      (l.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (l.valueOf = function () {
        return _g(this.get());
      }),
      (l[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      r
    );
  })(Da),
  fn = (function () {
    function a(l) {
      ((this.dependenciesState_ = Dt.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Dt.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new xs(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Es.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        l.get || Rt(31),
        (this.derivation = l.get),
        (this.name_ = l.name || "ComputedValue"),
        l.set && (this.setter_ = ii("ComputedValue-setter", l.set)),
        (this.equals_ =
          l.equals ||
          (l.compareStructural || l.struct ? Os.structural : Os.default)),
        (this.scope_ = l.context),
        (this.requiresReaction_ = l.requiresReaction),
        (this.keepAlive_ = !!l.keepAlive));
    }
    var r = a.prototype;
    return (
      (r.onBecomeStale_ = function () {
        pS(this);
      }),
      (r.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (u) {
            return u();
          });
      }),
      (r.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (u) {
            return u();
          });
      }),
      (r.get = function () {
        if (
          (this.isComputing && Rt(32, this.name_, this.derivation),
          $.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Qf(this) &&
            (this.warnAboutUntrackedRead_(),
            Ie(),
            (this.value_ = this.computeValue_(!1)),
            tn());
        else if ((Bg(this), Qf(this))) {
          var u = $.trackingContext;
          (this.keepAlive_ && !u && ($.trackingContext = this),
            this.trackAndCompute() && mS(this),
            ($.trackingContext = u));
        }
        var o = this.value_;
        if (ds(o)) throw o.cause;
        return o;
      }),
      (r.set = function (u) {
        if (this.setter_) {
          (this.isRunningSetter && Rt(33, this.name_),
            (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, u);
          } finally {
            this.isRunningSetter = !1;
          }
        } else Rt(34, this.name_);
      }),
      (r.trackAndCompute = function () {
        var u = this.value_,
          o = this.dependenciesState_ === Dt.NOT_TRACKING_,
          f = this.computeValue_(!0),
          d = o || ds(u) || ds(f) || !this.equals_(u, f);
        return (d && (this.value_ = f), d);
      }),
      (r.computeValue_ = function (u) {
        this.isComputing = !0;
        var o = vd(!1),
          f;
        if (u) f = Cg(this, this.derivation, this.scope_);
        else if ($.disableErrorBoundaries === !0)
          f = this.derivation.call(this.scope_);
        else
          try {
            f = this.derivation.call(this.scope_);
          } catch (d) {
            f = new xs(d);
          }
        return (md(o), (this.isComputing = !1), f);
      }),
      (r.suspend_ = function () {
        this.keepAlive_ || (Zf(this), (this.value_ = void 0));
      }),
      (r.observe_ = function (u, o) {
        var f = this,
          d = !0,
          h = void 0;
        return MS(function () {
          var v = f.get();
          if (!d || o) {
            var p = ri();
            (u({
              observableKind: "computed",
              debugObjectName: f.name_,
              type: xn,
              object: f,
              newValue: v,
              oldValue: h,
            }),
              Zn(p));
          }
          ((d = !1), (h = v));
        });
      }),
      (r.warnAboutUntrackedRead_ = function () {}),
      (r.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (r.valueOf = function () {
        return _g(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      fl(a, [
        {
          key: "isComputing",
          get: function () {
            return Le(this.flags_, a.isComputingMask_);
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.isComputingMask_, u);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Le(this.flags_, a.isRunningSetterMask_);
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.isRunningSetterMask_, u);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Le(this.flags_, a.isBeingObservedMask_);
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.isBeingObservedMask_, u);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Le(this.flags_, a.isPendingUnobservationMask_);
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.isPendingUnobservationMask_, u);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Le(this.flags_, a.diffValueMask_) ? 1 : 0;
          },
          set: function (u) {
            this.flags_ = Be(this.flags_, a.diffValueMask_, u === 1);
          },
        },
      ])
    );
  })();
fn.isComputingMask_ = 1;
fn.isRunningSetterMask_ = 2;
fn.isBeingObservedMask_ = 4;
fn.isPendingUnobservationMask_ = 8;
fn.diffValueMask_ = 16;
var Js = li("ComputedValue", fn),
  Dt;
(function (a) {
  ((a[(a.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (a[(a.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (a[(a.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (a[(a.STALE_ = 2)] = "STALE_"));
})(Dt || (Dt = {}));
var Es;
(function (a) {
  ((a[(a.NONE = 0)] = "NONE"),
    (a[(a.LOG = 1)] = "LOG"),
    (a[(a.BREAK = 2)] = "BREAK"));
})(Es || (Es = {}));
var xs = function (r) {
  ((this.cause = void 0), (this.cause = r));
};
function ds(a) {
  return a instanceof xs;
}
function Qf(a) {
  switch (a.dependenciesState_) {
    case Dt.UP_TO_DATE_:
      return !1;
    case Dt.NOT_TRACKING_:
    case Dt.STALE_:
      return !0;
    case Dt.POSSIBLY_STALE_: {
      for (
        var r = pd(!0), l = ri(), u = a.observing_, o = u.length, f = 0;
        f < o;
        f++
      ) {
        var d = u[f];
        if (Js(d)) {
          if ($.disableErrorBoundaries) d.get();
          else
            try {
              d.get();
            } catch {
              return (Zn(l), xr(r), !0);
            }
          if (a.dependenciesState_ === Dt.STALE_) return (Zn(l), xr(r), !0);
        }
      }
      return (Ng(a), Zn(l), xr(r), !1);
    }
  }
}
function Cg(a, r, l) {
  var u = pd(!0);
  (Ng(a),
    (a.newObserving_ = new Array(a.runId_ === 0 ? 100 : a.observing_.length)),
    (a.unboundDepsCount_ = 0),
    (a.runId_ = ++$.runId));
  var o = $.trackingDerivation;
  (($.trackingDerivation = a), $.inBatch++);
  var f;
  if ($.disableErrorBoundaries === !0) f = r.call(l);
  else
    try {
      f = r.call(l);
    } catch (d) {
      f = new xs(d);
    }
  return ($.inBatch--, ($.trackingDerivation = o), dS(a), xr(u), f);
}
function dS(a) {
  for (
    var r = a.observing_,
      l = (a.observing_ = a.newObserving_),
      u = Dt.UP_TO_DATE_,
      o = 0,
      f = a.unboundDepsCount_,
      d = 0;
    d < f;
    d++
  ) {
    var h = l[d];
    (h.diffValue === 0 && ((h.diffValue = 1), o !== d && (l[o] = h), o++),
      h.dependenciesState_ > u && (u = h.dependenciesState_));
  }
  for (l.length = o, a.newObserving_ = null, f = r.length; f--; ) {
    var v = r[f];
    (v.diffValue === 0 && jg(v, a), (v.diffValue = 0));
  }
  for (; o--; ) {
    var p = l[o];
    p.diffValue === 1 && ((p.diffValue = 0), vS(p, a));
  }
  u !== Dt.UP_TO_DATE_ && ((a.dependenciesState_ = u), a.onBecomeStale_());
}
function Zf(a) {
  var r = a.observing_;
  a.observing_ = [];
  for (var l = r.length; l--; ) jg(r[l], a);
  a.dependenciesState_ = Dt.NOT_TRACKING_;
}
function zg(a) {
  var r = ri();
  try {
    return a();
  } finally {
    Zn(r);
  }
}
function ri() {
  var a = $.trackingDerivation;
  return (($.trackingDerivation = null), a);
}
function Zn(a) {
  $.trackingDerivation = a;
}
function pd(a) {
  var r = $.allowStateReads;
  return (($.allowStateReads = a), r);
}
function xr(a) {
  $.allowStateReads = a;
}
function Ng(a) {
  if (a.dependenciesState_ !== Dt.UP_TO_DATE_) {
    a.dependenciesState_ = Dt.UP_TO_DATE_;
    for (var r = a.observing_, l = r.length; l--; )
      r[l].lowestObserverState_ = Dt.UP_TO_DATE_;
  }
}
var hs = function () {
    ((this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0));
  },
  vs = !0,
  Ug = !1,
  $ = (function () {
    var a = qs();
    return (
      a.__mobxInstanceCount > 0 && !a.__mobxGlobals && (vs = !1),
      a.__mobxGlobals &&
        a.__mobxGlobals.version !== new hs().version &&
        (vs = !1),
      vs
        ? a.__mobxGlobals
          ? ((a.__mobxInstanceCount += 1),
            a.__mobxGlobals.UNCHANGED || (a.__mobxGlobals.UNCHANGED = {}),
            a.__mobxGlobals)
          : ((a.__mobxInstanceCount = 1), (a.__mobxGlobals = new hs()))
        : (setTimeout(function () {
            Ug || Rt(35);
          }, 1),
          new hs())
    );
  })();
function hS() {
  if (
    (($.pendingReactions.length || $.inBatch || $.isRunningReactions) && Rt(36),
    (Ug = !0),
    vs)
  ) {
    var a = qs();
    (--a.__mobxInstanceCount === 0 && (a.__mobxGlobals = void 0),
      ($ = new hs()));
  }
}
function vS(a, r) {
  (a.observers_.add(r),
    a.lowestObserverState_ > r.dependenciesState_ &&
      (a.lowestObserverState_ = r.dependenciesState_));
}
function jg(a, r) {
  (a.observers_.delete(r), a.observers_.size === 0 && Lg(a));
}
function Lg(a) {
  a.isPendingUnobservation === !1 &&
    ((a.isPendingUnobservation = !0), $.pendingUnobservations.push(a));
}
function Ie() {
  $.inBatch++;
}
function tn() {
  if (--$.inBatch === 0) {
    Hg();
    for (var a = $.pendingUnobservations, r = 0; r < a.length; r++) {
      var l = a[r];
      ((l.isPendingUnobservation = !1),
        l.observers_.size === 0 &&
          (l.isBeingObserved && ((l.isBeingObserved = !1), l.onBUO()),
          l instanceof fn && l.suspend_()));
    }
    $.pendingUnobservations = [];
  }
}
function Bg(a) {
  var r = $.trackingDerivation;
  return r !== null
    ? (r.runId_ !== a.lastAccessedBy_ &&
        ((a.lastAccessedBy_ = r.runId_),
        (r.newObserving_[r.unboundDepsCount_++] = a),
        !a.isBeingObserved &&
          $.trackingContext &&
          ((a.isBeingObserved = !0), a.onBO())),
      a.isBeingObserved)
    : (a.observers_.size === 0 && $.inBatch > 0 && Lg(a), !1);
}
function Vg(a) {
  a.lowestObserverState_ !== Dt.STALE_ &&
    ((a.lowestObserverState_ = Dt.STALE_),
    a.observers_.forEach(function (r) {
      (r.dependenciesState_ === Dt.UP_TO_DATE_ && r.onBecomeStale_(),
        (r.dependenciesState_ = Dt.STALE_));
    }));
}
function mS(a) {
  a.lowestObserverState_ !== Dt.STALE_ &&
    ((a.lowestObserverState_ = Dt.STALE_),
    a.observers_.forEach(function (r) {
      r.dependenciesState_ === Dt.POSSIBLY_STALE_
        ? (r.dependenciesState_ = Dt.STALE_)
        : r.dependenciesState_ === Dt.UP_TO_DATE_ &&
          (a.lowestObserverState_ = Dt.UP_TO_DATE_);
    }));
}
function pS(a) {
  a.lowestObserverState_ === Dt.UP_TO_DATE_ &&
    ((a.lowestObserverState_ = Dt.POSSIBLY_STALE_),
    a.observers_.forEach(function (r) {
      r.dependenciesState_ === Dt.UP_TO_DATE_ &&
        ((r.dependenciesState_ = Dt.POSSIBLY_STALE_), r.onBecomeStale_());
    }));
}
var Ta = (function () {
  function a(l, u, o, f) {
    (l === void 0 && (l = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = Dt.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Es.NONE),
      (this.name_ = l),
      (this.onInvalidate_ = u),
      (this.errorHandler_ = o),
      (this.requiresObservable_ = f));
  }
  var r = a.prototype;
  return (
    (r.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (r.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0), $.pendingReactions.push(this), Hg());
    }),
    (r.runReaction_ = function () {
      if (!this.isDisposed) {
        (Ie(), (this.isScheduled = !1));
        var u = $.trackingContext;
        if ((($.trackingContext = this), Qf(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (o) {
            this.reportExceptionInDerivation_(o);
          }
        }
        (($.trackingContext = u), tn());
      }
    }),
    (r.track = function (u) {
      if (!this.isDisposed) {
        (Ie(), (this.isRunning = !0));
        var o = $.trackingContext;
        $.trackingContext = this;
        var f = Cg(this, u, void 0);
        (($.trackingContext = o),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Zf(this),
          ds(f) && this.reportExceptionInDerivation_(f.cause),
          tn());
      }
    }),
    (r.reportExceptionInDerivation_ = function (u) {
      var o = this;
      if (this.errorHandler_) {
        this.errorHandler_(u, this);
        return;
      }
      if ($.disableErrorBoundaries) throw u;
      var f = "[mobx] uncaught error in '" + this + "'";
      ($.suppressReactionErrors || console.error(f, u),
        $.globalReactionErrorHandlers.forEach(function (d) {
          return d(u, o);
        }));
    }),
    (r.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0), this.isRunning || (Ie(), Zf(this), tn()));
    }),
    (r.getDisposer_ = function (u) {
      var o = this,
        f = function d() {
          (o.dispose(),
            u == null ||
              u.removeEventListener == null ||
              u.removeEventListener("abort", d));
        };
      return (
        u == null ||
          u.addEventListener == null ||
          u.addEventListener("abort", f),
        (f[yt] = this),
        f
      );
    }),
    (r.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (r.trace = function (u) {}),
    fl(a, [
      {
        key: "isDisposed",
        get: function () {
          return Le(this.flags_, a.isDisposedMask_);
        },
        set: function (u) {
          this.flags_ = Be(this.flags_, a.isDisposedMask_, u);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Le(this.flags_, a.isScheduledMask_);
        },
        set: function (u) {
          this.flags_ = Be(this.flags_, a.isScheduledMask_, u);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Le(this.flags_, a.isTrackPendingMask_);
        },
        set: function (u) {
          this.flags_ = Be(this.flags_, a.isTrackPendingMask_, u);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Le(this.flags_, a.isRunningMask_);
        },
        set: function (u) {
          this.flags_ = Be(this.flags_, a.isRunningMask_, u);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Le(this.flags_, a.diffValueMask_) ? 1 : 0;
        },
        set: function (u) {
          this.flags_ = Be(this.flags_, a.diffValueMask_, u === 1);
        },
      },
    ])
  );
})();
Ta.isDisposedMask_ = 1;
Ta.isScheduledMask_ = 2;
Ta.isTrackPendingMask_ = 4;
Ta.isRunningMask_ = 8;
Ta.diffValueMask_ = 16;
var gS = 100,
  Pf = function (r) {
    return r();
  };
function Hg() {
  $.inBatch > 0 || $.isRunningReactions || Pf(yS);
}
function yS() {
  $.isRunningReactions = !0;
  for (var a = $.pendingReactions, r = 0; a.length > 0; ) {
    ++r === gS &&
      (console.error("[mobx] cycle in reaction: " + a[0]), a.splice(0));
    for (var l = a.splice(0), u = 0, o = l.length; u < o; u++)
      l[u].runReaction_();
  }
  $.isRunningReactions = !1;
}
var Ms = li("Reaction", Ta);
function bS(a) {
  var r = Pf;
  Pf = function (u) {
    return a(function () {
      return r(u);
    });
  };
}
function Mr() {
  return !1;
}
function _S(a) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"),
    function () {}
  );
}
var Gg = "action",
  SS = "action.bound",
  qg = "autoAction",
  OS = "autoAction.bound",
  AS = "<unnamed action>",
  Jf = Vr(Gg),
  ES = Vr(SS, { bound: !0 }),
  $f = Vr(qg, { autoAction: !0 }),
  xS = Vr(OS, { autoAction: !0, bound: !0 });
function kg(a) {
  var r = function (u, o) {
    if (cn(u)) return ii(u.name || AS, u, a);
    if (cn(o)) return ii(u, o, a);
    if (Br(o)) return (a ? $f : Jf).decorate_20223_(u, o);
    if (ei(o)) return Lr(u, o, a ? $f : Jf);
    if (ei(u)) return En(Vr(a ? qg : Gg, { name: u, autoAction: a }));
  };
  return r;
}
var On = kg(!1);
Object.assign(On, Jf);
var wr = kg(!0);
Object.assign(wr, $f);
On.bound = En(ES);
wr.bound = En(xS);
function Dr(a) {
  return cn(a) && a.isMobxAction === !0;
}
function MS(a, r) {
  var l, u, o, f;
  r === void 0 && (r = vg);
  var d = (l = (u = r) == null ? void 0 : u.name) != null ? l : "Autorun",
    h = !r.scheduler && !r.delay,
    v;
  if (h)
    v = new Ta(
      d,
      function () {
        this.track(b);
      },
      r.onError,
      r.requiresObservable,
    );
  else {
    var p = RS(r),
      g = !1;
    v = new Ta(
      d,
      function () {
        g ||
          ((g = !0),
          p(function () {
            ((g = !1), v.isDisposed || v.track(b));
          }));
      },
      r.onError,
      r.requiresObservable,
    );
  }
  function b() {
    a(v);
  }
  return (
    ((o = r) != null && (o = o.signal) != null && o.aborted) || v.schedule_(),
    v.getDisposer_((f = r) == null ? void 0 : f.signal)
  );
}
var TS = function (r) {
  return r();
};
function RS(a) {
  return a.scheduler
    ? a.scheduler
    : a.delay
      ? function (r) {
          return setTimeout(r, a.delay);
        }
      : TS;
}
var wS = "onBO",
  DS = "onBUO";
function CS(a, r, l) {
  return Xg(wS, a, r, l);
}
function Yg(a, r, l) {
  return Xg(DS, a, r, l);
}
function Xg(a, r, l, u) {
  var o = Ff(r),
    f = cn(u) ? u : l,
    d = a + "L";
  return (
    o[d] ? o[d].add(f) : (o[d] = new Set([f])),
    function () {
      var h = o[d];
      h && (h.delete(f), h.size === 0 && delete o[d]);
    }
  );
}
var zS = "never",
  Ap = "always",
  NS = "observed";
function US(a) {
  a.isolateGlobalState === !0 && hS();
  var r = a.useProxies,
    l = a.enforceActions;
  (r !== void 0 &&
    ($.useProxies = r === Ap ? !0 : r === zS ? !1 : typeof Proxy < "u"),
    r === "ifavailable" && ($.verifyProxies = !0));
  {
    var u = l === NS;
    (($.enforceActions = u), ($.allowStateChanges = !(u === !0 || u === Ap)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (o) {
    o in a && ($[o] = !!a[o]);
  }),
    ($.allowStateReads = !$.observableRequiresReaction),
    a.reactionScheduler && bS(a.reactionScheduler));
}
function jS(a, r, l, u) {
  var o = p_(r);
  return (
    si(function () {
      var f = dl(a, u)[yt];
      Ks(o).forEach(function (d) {
        f.extend_(d, o[d], l && d in l ? l[d] : !0);
      });
    }),
    a
  );
}
var LS = 0;
function Kg() {
  this.message = "FLOW_CANCELLED";
}
Kg.prototype = Object.create(Error.prototype);
var bf = Eg("flow"),
  BS = Eg("flow.bound", { bound: !0 }),
  sl = Object.assign(function (r, l) {
    if (Br(l)) return bf.decorate_20223_(r, l);
    if (ei(l)) return Lr(r, l, bf);
    var u = r,
      o = u.name || "<unnamed flow>",
      f = function () {
        var h = this,
          v = arguments,
          p = ++LS,
          g = On(o + " - runid: " + p + " - init", u).apply(h, v),
          b,
          O = void 0,
          C = new Promise(function (N, G) {
            var X = 0;
            b = G;
            function Z(st) {
              O = void 0;
              var P;
              try {
                P = On(o + " - runid: " + p + " - yield " + X++, g.next).call(
                  g,
                  st,
                );
              } catch (Y) {
                return G(Y);
              }
              tt(P);
            }
            function rt(st) {
              O = void 0;
              var P;
              try {
                P = On(o + " - runid: " + p + " - yield " + X++, g.throw).call(
                  g,
                  st,
                );
              } catch (Y) {
                return G(Y);
              }
              tt(P);
            }
            function tt(st) {
              if (cn(st == null ? void 0 : st.then)) {
                st.then(tt, G);
                return;
              }
              return st.done
                ? N(st.value)
                : ((O = Promise.resolve(st.value)), O.then(Z, rt));
            }
            Z(void 0);
          });
        return (
          (C.cancel = On(o + " - runid: " + p + " - cancel", function () {
            try {
              O && Ep(O);
              var N = g.return(void 0),
                G = Promise.resolve(N.value);
              (G.then(nl, nl), Ep(G), b(new Kg()));
            } catch (X) {
              b(X);
            }
          })),
          C
        );
      };
    return ((f.isMobXFlow = !0), f);
  }, bf);
sl.bound = En(BS);
function Ep(a) {
  cn(a.cancel) && a.cancel();
}
function Cr(a) {
  return (a == null ? void 0 : a.isMobXFlow) === !0;
}
function VS(a, r) {
  return a ? Fs(a) || !!a[yt] || dd(a) || Ms(a) || Js(a) : !1;
}
function Qg(a) {
  return VS(a);
}
function Xn(a, r) {
  (r === void 0 && (r = void 0), Ie());
  try {
    return a.apply(r);
  } finally {
    tn();
  }
}
function Fi(a) {
  return a[yt];
}
var HS = {
  has: function (r, l) {
    return Fi(r).has_(l);
  },
  get: function (r, l) {
    return Fi(r).get_(l);
  },
  set: function (r, l, u) {
    var o;
    return ei(l) ? ((o = Fi(r).set_(l, u, !0)) != null ? o : !0) : !1;
  },
  deleteProperty: function (r, l) {
    var u;
    return ei(l) ? ((u = Fi(r).delete_(l, !0)) != null ? u : !0) : !1;
  },
  defineProperty: function (r, l, u) {
    var o;
    return (o = Fi(r).defineProperty_(l, u)) != null ? o : !0;
  },
  ownKeys: function (r) {
    return Fi(r).ownKeys_();
  },
  preventExtensions: function (r) {
    Rt(13);
  },
};
function GS(a, r) {
  var l, u;
  return (
    mg(),
    (a = dl(a, r)),
    (u = (l = a[yt]).proxy_) != null ? u : (l.proxy_ = new Proxy(a, HS))
  );
}
function Fe(a) {
  return a.interceptors_ !== void 0 && a.interceptors_.length > 0;
}
function Hr(a, r) {
  var l = a.interceptors_ || (a.interceptors_ = []);
  return (
    l.push(r),
    pg(function () {
      var u = l.indexOf(r);
      u !== -1 && l.splice(u, 1);
    })
  );
}
function We(a, r) {
  var l = ri();
  try {
    for (
      var u = [].concat(a.interceptors_ || []), o = 0, f = u.length;
      o < f && ((r = u[o](r)), r && !r.type && Rt(14), !!r);
      o++
    );
    return r;
  } finally {
    Zn(l);
  }
}
function un(a) {
  return a.changeListeners_ !== void 0 && a.changeListeners_.length > 0;
}
function Gr(a, r) {
  var l = a.changeListeners_ || (a.changeListeners_ = []);
  return (
    l.push(r),
    pg(function () {
      var u = l.indexOf(r);
      u !== -1 && l.splice(u, 1);
    })
  );
}
function sn(a, r) {
  var l = ri(),
    u = a.changeListeners_;
  if (u) {
    u = u.slice();
    for (var o = 0, f = u.length; o < f; o++) u[o](r);
    Zn(l);
  }
}
function qS(a, r, l) {
  return (
    si(function () {
      var u,
        o = dl(a, l)[yt];
      ((u = r) != null || (r = S_(a)),
        Ks(r).forEach(function (f) {
          return o.make_(f, r[f]);
        }));
    }),
    a
  );
}
var xp = "splice",
  xn = "update",
  kS = 1e4,
  YS = {
    get: function (r, l) {
      var u = r[yt];
      return l === yt
        ? u
        : l === "length"
          ? u.getArrayLength_()
          : typeof l == "string" && !isNaN(l)
            ? u.get_(parseInt(l))
            : Qn(Ts, l)
              ? Ts[l]
              : r[l];
    },
    set: function (r, l, u) {
      var o = r[yt];
      return (
        l === "length" && o.setArrayLength_(u),
        typeof l == "symbol" || isNaN(l) ? (r[l] = u) : o.set_(parseInt(l), u),
        !0
      );
    },
    preventExtensions: function () {
      Rt(15);
    },
  },
  gd = (function () {
    function a(l, u, o, f) {
      (l === void 0 && (l = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = o),
        (this.legacyMode_ = f),
        (this.atom_ = new Da(l)),
        (this.enhancer_ = function (d, h) {
          return u(d, h, "ObservableArray[..]");
        }));
    }
    var r = a.prototype;
    return (
      (r.dehanceValue_ = function (u) {
        return this.dehancer !== void 0 ? this.dehancer(u) : u;
      }),
      (r.dehanceValues_ = function (u) {
        return this.dehancer !== void 0 && u.length > 0
          ? u.map(this.dehancer)
          : u;
      }),
      (r.intercept_ = function (u) {
        return Hr(this, u);
      }),
      (r.observe_ = function (u, o) {
        return (
          o === void 0 && (o = !1),
          o &&
            u({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Gr(this, u)
        );
      }),
      (r.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (r.setArrayLength_ = function (u) {
        (typeof u != "number" || isNaN(u) || u < 0) && Rt("Out of range: " + u);
        var o = this.values_.length;
        if (u !== o)
          if (u > o) {
            for (var f = new Array(u - o), d = 0; d < u - o; d++) f[d] = void 0;
            this.spliceWithArray_(o, 0, f);
          } else this.spliceWithArray_(u, o - u);
      }),
      (r.updateArrayLength_ = function (u, o) {
        (u !== this.lastKnownLength_ && Rt(16),
          (this.lastKnownLength_ += o),
          this.legacyMode_ && o > 0 && Ig(u + o + 1));
      }),
      (r.spliceWithArray_ = function (u, o, f) {
        var d = this;
        this.atom_;
        var h = this.values_.length;
        if (
          (u === void 0
            ? (u = 0)
            : u > h
              ? (u = h)
              : u < 0 && (u = Math.max(0, h + u)),
          arguments.length === 1
            ? (o = h - u)
            : o == null
              ? (o = 0)
              : (o = Math.max(0, Math.min(o, h - u))),
          f === void 0 && (f = kf),
          Fe(this))
        ) {
          var v = We(this, {
            object: this.proxy_,
            type: xp,
            index: u,
            removedCount: o,
            added: f,
          });
          if (!v) return kf;
          ((o = v.removedCount), (f = v.added));
        }
        if (
          ((f =
            f.length === 0
              ? f
              : f.map(function (b) {
                  return d.enhancer_(b, void 0);
                })),
          this.legacyMode_)
        ) {
          var p = f.length - o;
          this.updateArrayLength_(h, p);
        }
        var g = this.spliceItemsIntoValues_(u, o, f);
        return (
          (o !== 0 || f.length !== 0) && this.notifyArraySplice_(u, f, g),
          this.dehanceValues_(g)
        );
      }),
      (r.spliceItemsIntoValues_ = function (u, o, f) {
        if (f.length < kS) {
          var d;
          return (d = this.values_).splice.apply(d, [u, o].concat(f));
        } else {
          var h = this.values_.slice(u, u + o),
            v = this.values_.slice(u + o);
          this.values_.length += f.length - o;
          for (var p = 0; p < f.length; p++) this.values_[u + p] = f[p];
          for (var g = 0; g < v.length; g++)
            this.values_[u + f.length + g] = v[g];
          return h;
        }
      }),
      (r.notifyArrayChildUpdate_ = function (u, o, f) {
        var d = !this.owned_ && Mr(),
          h = un(this),
          v =
            h || d
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: xn,
                  debugObjectName: this.atom_.name_,
                  index: u,
                  newValue: o,
                  oldValue: f,
                }
              : null;
        (this.atom_.reportChanged(), h && sn(this, v));
      }),
      (r.notifyArraySplice_ = function (u, o, f) {
        var d = !this.owned_ && Mr(),
          h = un(this),
          v =
            h || d
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: xp,
                  index: u,
                  removed: f,
                  added: o,
                  removedCount: f.length,
                  addedCount: o.length,
                }
              : null;
        (this.atom_.reportChanged(), h && sn(this, v));
      }),
      (r.get_ = function (u) {
        if (this.legacyMode_ && u >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + u);
          return;
        }
        return (
          this.atom_.reportObserved(),
          this.dehanceValue_(this.values_[u])
        );
      }),
      (r.set_ = function (u, o) {
        var f = this.values_;
        if (
          (this.legacyMode_ && u > f.length && Rt(17, u, f.length),
          u < f.length)
        ) {
          this.atom_;
          var d = f[u];
          if (Fe(this)) {
            var h = We(this, {
              type: xn,
              object: this.proxy_,
              index: u,
              newValue: o,
            });
            if (!h) return;
            o = h.newValue;
          }
          o = this.enhancer_(o, d);
          var v = o !== d;
          v && ((f[u] = o), this.notifyArrayChildUpdate_(u, o, d));
        } else {
          for (
            var p = new Array(u + 1 - f.length), g = 0;
            g < p.length - 1;
            g++
          )
            p[g] = void 0;
          ((p[p.length - 1] = o), this.spliceWithArray_(f.length, 0, p));
        }
      }),
      a
    );
  })();
function XS(a, r, l, u) {
  return (
    l === void 0 && (l = "ObservableArray"),
    u === void 0 && (u = !1),
    mg(),
    si(function () {
      var o = new gd(l, r, u, !1);
      yg(o.values_, yt, o);
      var f = new Proxy(o.values_, YS);
      return ((o.proxy_ = f), a && a.length && o.spliceWithArray_(0, 0, a), f);
    })
  );
}
var Ts = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (r) {
    var l = this[yt];
    return l.spliceWithArray_(0, l.values_.length, r);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (r, l) {
    for (
      var u = arguments.length, o = new Array(u > 2 ? u - 2 : 0), f = 2;
      f < u;
      f++
    )
      o[f - 2] = arguments[f];
    var d = this[yt];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return d.spliceWithArray_(r);
      case 2:
        return d.spliceWithArray_(r, l);
    }
    return d.spliceWithArray_(r, l, o);
  },
  spliceWithArray: function (r, l, u) {
    return this[yt].spliceWithArray_(r, l, u);
  },
  push: function () {
    for (
      var r = this[yt], l = arguments.length, u = new Array(l), o = 0;
      o < l;
      o++
    )
      u[o] = arguments[o];
    return (r.spliceWithArray_(r.values_.length, 0, u), r.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[yt].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var r = this[yt], l = arguments.length, u = new Array(l), o = 0;
      o < l;
      o++
    )
      u[o] = arguments[o];
    return (r.spliceWithArray_(0, 0, u), r.values_.length);
  },
  reverse: function () {
    return (
      $.trackingDerivation && Rt(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    $.trackingDerivation && Rt(37, "sort");
    var r = this.slice();
    return (r.sort.apply(r, arguments), this.replace(r), this);
  },
  remove: function (r) {
    var l = this[yt],
      u = l.dehanceValues_(l.values_).indexOf(r);
    return u > -1 ? (this.splice(u, 1), !0) : !1;
  },
};
Gt("at", Ve);
Gt("concat", Ve);
Gt("flat", Ve);
Gt("includes", Ve);
Gt("indexOf", Ve);
Gt("join", Ve);
Gt("lastIndexOf", Ve);
Gt("slice", Ve);
Gt("toString", Ve);
Gt("toLocaleString", Ve);
Gt("toSorted", Ve);
Gt("toSpliced", Ve);
Gt("with", Ve);
Gt("every", hn);
Gt("filter", hn);
Gt("find", hn);
Gt("findIndex", hn);
Gt("findLast", hn);
Gt("findLastIndex", hn);
Gt("flatMap", hn);
Gt("forEach", hn);
Gt("map", hn);
Gt("some", hn);
Gt("toReversed", hn);
Gt("reduce", Zg);
Gt("reduceRight", Zg);
function Gt(a, r) {
  typeof Array.prototype[a] == "function" && (Ts[a] = r(a));
}
function Ve(a) {
  return function () {
    var r = this[yt];
    r.atom_.reportObserved();
    var l = r.dehanceValues_(r.values_);
    return l[a].apply(l, arguments);
  };
}
function hn(a) {
  return function (r, l) {
    var u = this,
      o = this[yt];
    o.atom_.reportObserved();
    var f = o.dehanceValues_(o.values_);
    return f[a](function (d, h) {
      return r.call(l, d, h, u);
    });
  };
}
function Zg(a) {
  return function () {
    var r = this,
      l = this[yt];
    l.atom_.reportObserved();
    var u = l.dehanceValues_(l.values_),
      o = arguments[0];
    return (
      (arguments[0] = function (f, d, h) {
        return o(f, d, h, r);
      }),
      u[a].apply(u, arguments)
    );
  };
}
var KS = li("ObservableArrayAdministration", gd);
function $s(a) {
  return Ys(a) && KS(a[yt]);
}
var QS = {},
  Aa = "add",
  Rs = "delete",
  Pg = (function () {
    function a(l, u, o) {
      var f = this;
      (u === void 0 && (u = ai),
        o === void 0 && (o = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[yt] = QS),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = u),
        (this.name_ = o),
        cn(Map) || Rt(18),
        si(function () {
          ((f.keysAtom_ = Og("ObservableMap.keys()")),
            (f.data_ = new Map()),
            (f.hasMap_ = new Map()),
            l && f.merge(l));
        }));
    }
    var r = a.prototype;
    return (
      (r.has_ = function (u) {
        return this.data_.has(u);
      }),
      (r.has = function (u) {
        var o = this;
        if (!$.trackingDerivation) return this.has_(u);
        var f = this.hasMap_.get(u);
        if (!f) {
          var d = (f = new Wa(this.has_(u), Qs, "ObservableMap.key?", !1));
          (this.hasMap_.set(u, d),
            Yg(d, function () {
              return o.hasMap_.delete(u);
            }));
        }
        return f.get();
      }),
      (r.set = function (u, o) {
        var f = this.has_(u);
        if (Fe(this)) {
          var d = We(this, {
            type: f ? xn : Aa,
            object: this,
            newValue: o,
            name: u,
          });
          if (!d) return this;
          o = d.newValue;
        }
        return (f ? this.updateValue_(u, o) : this.addValue_(u, o), this);
      }),
      (r.delete = function (u) {
        var o = this;
        if ((this.keysAtom_, Fe(this))) {
          var f = We(this, { type: Rs, object: this, name: u });
          if (!f) return !1;
        }
        if (this.has_(u)) {
          var d = Mr(),
            h = un(this),
            v =
              h || d
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Rs,
                    object: this,
                    oldValue: this.data_.get(u).value_,
                    name: u,
                  }
                : null;
          return (
            Xn(function () {
              var p;
              (o.keysAtom_.reportChanged(),
                (p = o.hasMap_.get(u)) == null || p.setNewValue_(!1));
              var g = o.data_.get(u);
              (g.setNewValue_(void 0), o.data_.delete(u));
            }),
            h && sn(this, v),
            !0
          );
        }
        return !1;
      }),
      (r.updateValue_ = function (u, o) {
        var f = this.data_.get(u);
        if (((o = f.prepareNewValue_(o)), o !== $.UNCHANGED)) {
          var d = Mr(),
            h = un(this),
            v =
              h || d
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: xn,
                    object: this,
                    oldValue: f.value_,
                    name: u,
                    newValue: o,
                  }
                : null;
          (f.setNewValue_(o), h && sn(this, v));
        }
      }),
      (r.addValue_ = function (u, o) {
        var f = this;
        (this.keysAtom_,
          Xn(function () {
            var p,
              g = new Wa(o, f.enhancer_, "ObservableMap.key", !1);
            (f.data_.set(u, g),
              (o = g.value_),
              (p = f.hasMap_.get(u)) == null || p.setNewValue_(!0),
              f.keysAtom_.reportChanged());
          }));
        var d = Mr(),
          h = un(this),
          v =
            h || d
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Aa,
                  object: this,
                  name: u,
                  newValue: o,
                }
              : null;
        h && sn(this, v);
      }),
      (r.get = function (u) {
        return this.has(u)
          ? this.dehanceValue_(this.data_.get(u).get())
          : this.dehanceValue_(void 0);
      }),
      (r.dehanceValue_ = function (u) {
        return this.dehancer !== void 0 ? this.dehancer(u) : u;
      }),
      (r.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (r.values = function () {
        var u = this,
          o = this.keys();
        return Mp({
          next: function () {
            var d = o.next(),
              h = d.done,
              v = d.value;
            return { done: h, value: h ? void 0 : u.get(v) };
          },
        });
      }),
      (r.entries = function () {
        var u = this,
          o = this.keys();
        return Mp({
          next: function () {
            var d = o.next(),
              h = d.done,
              v = d.value;
            return { done: h, value: h ? void 0 : [v, u.get(v)] };
          },
        });
      }),
      (r[Symbol.iterator] = function () {
        return this.entries();
      }),
      (r.forEach = function (u, o) {
        for (var f = al(this), d; !(d = f()).done; ) {
          var h = d.value,
            v = h[0],
            p = h[1];
          u.call(o, p, v, this);
        }
      }),
      (r.merge = function (u) {
        var o = this;
        return (
          ui(u) && (u = new Map(u)),
          Xn(function () {
            Ma(u)
              ? m_(u).forEach(function (f) {
                  return o.set(f, u[f]);
                })
              : Array.isArray(u)
                ? u.forEach(function (f) {
                    var d = f[0],
                      h = f[1];
                    return o.set(d, h);
                  })
                : cl(u)
                  ? (v_(u) || Rt(19, u),
                    u.forEach(function (f, d) {
                      return o.set(d, f);
                    }))
                  : u != null && Rt(20, u);
          }),
          this
        );
      }),
      (r.clear = function () {
        var u = this;
        Xn(function () {
          zg(function () {
            for (var o = al(u.keys()), f; !(f = o()).done; ) {
              var d = f.value;
              u.delete(d);
            }
          });
        });
      }),
      (r.replace = function (u) {
        var o = this;
        return (
          Xn(function () {
            for (
              var f = ZS(u), d = new Map(), h = !1, v = al(o.data_.keys()), p;
              !(p = v()).done;

            ) {
              var g = p.value;
              if (!f.has(g)) {
                var b = o.delete(g);
                if (b) h = !0;
                else {
                  var O = o.data_.get(g);
                  d.set(g, O);
                }
              }
            }
            for (var C = al(f.entries()), N; !(N = C()).done; ) {
              var G = N.value,
                X = G[0],
                Z = G[1],
                rt = o.data_.has(X);
              if ((o.set(X, Z), o.data_.has(X))) {
                var tt = o.data_.get(X);
                (d.set(X, tt), rt || (h = !0));
              }
            }
            if (!h)
              if (o.data_.size !== d.size) o.keysAtom_.reportChanged();
              else
                for (
                  var st = o.data_.keys(),
                    P = d.keys(),
                    Y = st.next(),
                    W = P.next();
                  !Y.done;

                ) {
                  if (Y.value !== W.value) {
                    o.keysAtom_.reportChanged();
                    break;
                  }
                  ((Y = st.next()), (W = P.next()));
                }
            o.data_ = d;
          }),
          this
        );
      }),
      (r.toString = function () {
        return "[object ObservableMap]";
      }),
      (r.toJSON = function () {
        return Array.from(this);
      }),
      (r.observe_ = function (u, o) {
        return Gr(this, u);
      }),
      (r.intercept_ = function (u) {
        return Hr(this, u);
      }),
      fl(a, [
        {
          key: "size",
          get: function () {
            return (this.keysAtom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  ui = li("ObservableMap", Pg);
function Mp(a) {
  return ((a[Symbol.toStringTag] = "MapIterator"), bd(a));
}
function ZS(a) {
  if (cl(a) || ui(a)) return a;
  if (Array.isArray(a)) return new Map(a);
  if (Ma(a)) {
    var r = new Map();
    for (var l in a) r.set(l, a[l]);
    return r;
  } else return Rt(21, a);
}
var PS = {},
  Jg = (function () {
    function a(l, u, o) {
      var f = this;
      (u === void 0 && (u = ai),
        o === void 0 && (o = "ObservableSet"),
        (this.name_ = void 0),
        (this[yt] = PS),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = o),
        cn(Set) || Rt(22),
        (this.enhancer_ = function (d, h) {
          return u(d, h, o);
        }),
        si(function () {
          ((f.atom_ = Og(f.name_)), l && f.replace(l));
        }));
    }
    var r = a.prototype;
    return (
      (r.dehanceValue_ = function (u) {
        return this.dehancer !== void 0 ? this.dehancer(u) : u;
      }),
      (r.clear = function () {
        var u = this;
        Xn(function () {
          zg(function () {
            for (var o = al(u.data_.values()), f; !(f = o()).done; ) {
              var d = f.value;
              u.delete(d);
            }
          });
        });
      }),
      (r.forEach = function (u, o) {
        for (var f = al(this), d; !(d = f()).done; ) {
          var h = d.value;
          u.call(o, h, h, this);
        }
      }),
      (r.add = function (u) {
        var o = this;
        if ((this.atom_, Fe(this))) {
          var f = We(this, { type: Aa, object: this, newValue: u });
          if (!f) return this;
          u = f.newValue;
        }
        if (!this.has(u)) {
          Xn(function () {
            (o.data_.add(o.enhancer_(u, void 0)), o.atom_.reportChanged());
          });
          var d = !1,
            h = un(this),
            v =
              h || d
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Aa,
                    object: this,
                    newValue: u,
                  }
                : null;
          h && sn(this, v);
        }
        return this;
      }),
      (r.delete = function (u) {
        var o = this;
        if (Fe(this)) {
          var f = We(this, { type: Rs, object: this, oldValue: u });
          if (!f) return !1;
        }
        if (this.has(u)) {
          var d = !1,
            h = un(this),
            v =
              h || d
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Rs,
                    object: this,
                    oldValue: u,
                  }
                : null;
          return (
            Xn(function () {
              (o.atom_.reportChanged(), o.data_.delete(u));
            }),
            h && sn(this, v),
            !0
          );
        }
        return !1;
      }),
      (r.has = function (u) {
        return (
          this.atom_.reportObserved(),
          this.data_.has(this.dehanceValue_(u))
        );
      }),
      (r.entries = function () {
        var u = this.values();
        return Tp({
          next: function () {
            var f = u.next(),
              d = f.value,
              h = f.done;
            return h ? { value: void 0, done: h } : { value: [d, d], done: h };
          },
        });
      }),
      (r.keys = function () {
        return this.values();
      }),
      (r.values = function () {
        this.atom_.reportObserved();
        var u = this,
          o = this.data_.values();
        return Tp({
          next: function () {
            var d = o.next(),
              h = d.value,
              v = d.done;
            return v
              ? { value: void 0, done: v }
              : { value: u.dehanceValue_(h), done: v };
          },
        });
      }),
      (r.intersection = function (u) {
        if (Yn(u) && !_n(u)) return u.intersection(this);
        var o = new Set(this);
        return o.intersection(u);
      }),
      (r.union = function (u) {
        if (Yn(u) && !_n(u)) return u.union(this);
        var o = new Set(this);
        return o.union(u);
      }),
      (r.difference = function (u) {
        return new Set(this).difference(u);
      }),
      (r.symmetricDifference = function (u) {
        if (Yn(u) && !_n(u)) return u.symmetricDifference(this);
        var o = new Set(this);
        return o.symmetricDifference(u);
      }),
      (r.isSubsetOf = function (u) {
        return new Set(this).isSubsetOf(u);
      }),
      (r.isSupersetOf = function (u) {
        return new Set(this).isSupersetOf(u);
      }),
      (r.isDisjointFrom = function (u) {
        if (Yn(u) && !_n(u)) return u.isDisjointFrom(this);
        var o = new Set(this);
        return o.isDisjointFrom(u);
      }),
      (r.replace = function (u) {
        var o = this;
        return (
          _n(u) && (u = new Set(u)),
          Xn(function () {
            Array.isArray(u)
              ? (o.clear(),
                u.forEach(function (f) {
                  return o.add(f);
                }))
              : Yn(u)
                ? (o.clear(),
                  u.forEach(function (f) {
                    return o.add(f);
                  }))
                : u != null && Rt("Cannot initialize set from " + u);
          }),
          this
        );
      }),
      (r.observe_ = function (u, o) {
        return Gr(this, u);
      }),
      (r.intercept_ = function (u) {
        return Hr(this, u);
      }),
      (r.toJSON = function () {
        return Array.from(this);
      }),
      (r.toString = function () {
        return "[object ObservableSet]";
      }),
      (r[Symbol.iterator] = function () {
        return this.values();
      }),
      fl(a, [
        {
          key: "size",
          get: function () {
            return (this.atom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  _n = li("ObservableSet", Jg);
function Tp(a) {
  return ((a[Symbol.toStringTag] = "SetIterator"), bd(a));
}
var Rp = Object.create(null),
  wp = "remove",
  $g = (function () {
    function a(l, u, o, f) {
      (u === void 0 && (u = new Map()),
        f === void 0 && (f = K_),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = l),
        (this.values_ = u),
        (this.name_ = o),
        (this.defaultAnnotation_ = f),
        (this.keysAtom_ = new Da("ObservableObject.keys")),
        (this.isPlainObject_ = Ma(this.target_)));
    }
    var r = a.prototype;
    return (
      (r.getObservablePropValue_ = function (u) {
        return this.values_.get(u).get();
      }),
      (r.setObservablePropValue_ = function (u, o) {
        var f = this.values_.get(u);
        if (f instanceof fn) return (f.set(o), !0);
        if (Fe(this)) {
          var d = We(this, {
            type: xn,
            object: this.proxy_ || this.target_,
            name: u,
            newValue: o,
          });
          if (!d) return null;
          o = d.newValue;
        }
        if (((o = f.prepareNewValue_(o)), o !== $.UNCHANGED)) {
          var h = un(this),
            v = !1,
            p =
              h || v
                ? {
                    type: xn,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: f.value_,
                    name: u,
                    newValue: o,
                  }
                : null;
          (f.setNewValue_(o), h && sn(this, p));
        }
        return !0;
      }),
      (r.get_ = function (u) {
        return (
          $.trackingDerivation && !Qn(this.target_, u) && this.has_(u),
          this.target_[u]
        );
      }),
      (r.set_ = function (u, o, f) {
        return (
          f === void 0 && (f = !1),
          Qn(this.target_, u)
            ? this.values_.has(u)
              ? this.setObservablePropValue_(u, o)
              : f
                ? Reflect.set(this.target_, u, o)
                : ((this.target_[u] = o), !0)
            : this.extend_(
                u,
                { value: o, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                f,
              )
        );
      }),
      (r.has_ = function (u) {
        if (!$.trackingDerivation) return u in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var o = this.pendingKeys_.get(u);
        return (
          o ||
            ((o = new Wa(u in this.target_, Qs, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(u, o)),
          o.get()
        );
      }),
      (r.make_ = function (u, o) {
        if ((o === !0 && (o = this.defaultAnnotation_), o !== !1)) {
          if (!(u in this.target_)) {
            var f;
            if ((f = this.target_[Sn]) != null && f[u]) return;
            Rt(1, o.annotationType_, this.name_ + "." + u.toString());
          }
          for (var d = this.target_; d && d !== ks; ) {
            var h = Ss(d, u);
            if (h) {
              var v = o.make_(this, u, h, d);
              if (v === 0) return;
              if (v === 1) break;
            }
            d = Object.getPrototypeOf(d);
          }
          Cp(this, o, u);
        }
      }),
      (r.extend_ = function (u, o, f, d) {
        if (
          (d === void 0 && (d = !1),
          f === !0 && (f = this.defaultAnnotation_),
          f === !1)
        )
          return this.defineProperty_(u, o, d);
        var h = f.extend_(this, u, o, d);
        return (h && Cp(this, f, u), h);
      }),
      (r.defineProperty_ = function (u, o, f) {
        (f === void 0 && (f = !1), this.keysAtom_);
        try {
          Ie();
          var d = this.delete_(u);
          if (!d) return d;
          if (Fe(this)) {
            var h = We(this, {
              object: this.proxy_ || this.target_,
              name: u,
              type: Aa,
              newValue: o.value,
            });
            if (!h) return null;
            var v = h.newValue;
            o.value !== v && (o = ni({}, o, { value: v }));
          }
          if (f) {
            if (!Reflect.defineProperty(this.target_, u, o)) return !1;
          } else An(this.target_, u, o);
          this.notifyPropertyAddition_(u, o.value);
        } finally {
          tn();
        }
        return !0;
      }),
      (r.defineObservableProperty_ = function (u, o, f, d) {
        (d === void 0 && (d = !1), this.keysAtom_);
        try {
          Ie();
          var h = this.delete_(u);
          if (!h) return h;
          if (Fe(this)) {
            var v = We(this, {
              object: this.proxy_ || this.target_,
              name: u,
              type: Aa,
              newValue: o,
            });
            if (!v) return null;
            o = v.newValue;
          }
          var p = Dp(u),
            g = {
              configurable: $.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: p.get,
              set: p.set,
            };
          if (d) {
            if (!Reflect.defineProperty(this.target_, u, g)) return !1;
          } else An(this.target_, u, g);
          var b = new Wa(o, f, "ObservableObject.key", !1);
          (this.values_.set(u, b), this.notifyPropertyAddition_(u, b.value_));
        } finally {
          tn();
        }
        return !0;
      }),
      (r.defineComputedProperty_ = function (u, o, f) {
        (f === void 0 && (f = !1), this.keysAtom_);
        try {
          Ie();
          var d = this.delete_(u);
          if (!d) return d;
          if (Fe(this)) {
            var h = We(this, {
              object: this.proxy_ || this.target_,
              name: u,
              type: Aa,
              newValue: void 0,
            });
            if (!h) return null;
          }
          (o.name || (o.name = "ObservableObject.key"),
            (o.context = this.proxy_ || this.target_));
          var v = Dp(u),
            p = {
              configurable: $.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: v.get,
              set: v.set,
            };
          if (f) {
            if (!Reflect.defineProperty(this.target_, u, p)) return !1;
          } else An(this.target_, u, p);
          (this.values_.set(u, new fn(o)),
            this.notifyPropertyAddition_(u, void 0));
        } finally {
          tn();
        }
        return !0;
      }),
      (r.delete_ = function (u, o) {
        if ((o === void 0 && (o = !1), this.keysAtom_, !Qn(this.target_, u)))
          return !0;
        if (Fe(this)) {
          var f = We(this, {
            object: this.proxy_ || this.target_,
            name: u,
            type: wp,
          });
          if (!f) return null;
        }
        try {
          var d;
          Ie();
          var h = un(this),
            v = !1,
            p = this.values_.get(u),
            g = void 0;
          if (!p && (h || v)) {
            var b;
            g = (b = Ss(this.target_, u)) == null ? void 0 : b.value;
          }
          if (o) {
            if (!Reflect.deleteProperty(this.target_, u)) return !1;
          } else delete this.target_[u];
          if (
            (p &&
              (this.values_.delete(u),
              p instanceof Wa && (g = p.value_),
              Vg(p)),
            this.keysAtom_.reportChanged(),
            (d = this.pendingKeys_) == null ||
              (d = d.get(u)) == null ||
              d.set(u in this.target_),
            h || v)
          ) {
            var O = {
              type: wp,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: g,
              name: u,
            };
            h && sn(this, O);
          }
        } finally {
          tn();
        }
        return !0;
      }),
      (r.observe_ = function (u, o) {
        return Gr(this, u);
      }),
      (r.intercept_ = function (u) {
        return Hr(this, u);
      }),
      (r.notifyPropertyAddition_ = function (u, o) {
        var f,
          d = un(this),
          h = !1;
        if (d || h) {
          var v =
            d || h
              ? {
                  type: Aa,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: u,
                  newValue: o,
                }
              : null;
          d && sn(this, v);
        }
        ((f = this.pendingKeys_) == null || (f = f.get(u)) == null || f.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (r.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Ks(this.target_));
      }),
      (r.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      a
    );
  })();
function dl(a, r) {
  var l;
  if (Qn(a, yt)) return a;
  var u = (l = r == null ? void 0 : r.name) != null ? l : "ObservableObject",
    o = new $g(a, new Map(), String(u), nS(r));
  return (Xs(a, yt, o), a);
}
var JS = li("ObservableObjectAdministration", $g);
function Dp(a) {
  return (
    Rp[a] ||
    (Rp[a] = {
      get: function () {
        return this[yt].getObservablePropValue_(a);
      },
      set: function (l) {
        return this[yt].setObservablePropValue_(a, l);
      },
    })
  );
}
function Fs(a) {
  return Ys(a) ? JS(a[yt]) : !1;
}
function Cp(a, r, l) {
  var u;
  (u = a.target_[Sn]) == null || delete u[l];
}
var $S = Wg(0),
  FS = (function () {
    var a = !1,
      r = {};
    return (
      Object.defineProperty(r, "0", {
        set: function () {
          a = !0;
        },
      }),
      (Object.create(r)[0] = 1),
      a === !1
    );
  })(),
  _f = 0,
  Fg = function () {};
function WS(a, r) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(a.prototype, r)
    : a.prototype.__proto__ !== void 0
      ? (a.prototype.__proto__ = r)
      : (a.prototype = r);
}
WS(Fg, Array.prototype);
var yd = (function (a) {
  function r(u, o, f, d) {
    var h;
    return (
      f === void 0 && (f = "ObservableArray"),
      d === void 0 && (d = !1),
      (h = a.call(this) || this),
      si(function () {
        var v = new gd(f, o, d, !0);
        ((v.proxy_ = h),
          yg(h, yt, v),
          u && u.length && h.spliceWithArray(0, 0, u),
          FS && Object.defineProperty(h, "0", $S));
      }),
      h
    );
  }
  Sg(r, a);
  var l = r.prototype;
  return (
    (l.concat = function () {
      this[yt].atom_.reportObserved();
      for (var o = arguments.length, f = new Array(o), d = 0; d < o; d++)
        f[d] = arguments[d];
      return Array.prototype.concat.apply(
        this.slice(),
        f.map(function (h) {
          return $s(h) ? h.slice() : h;
        }),
      );
    }),
    (l[Symbol.iterator] = function () {
      var u = this,
        o = 0;
      return bd({
        next: function () {
          return o < u.length
            ? { value: u[o++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    fl(r, [
      {
        key: "length",
        get: function () {
          return this[yt].getArrayLength_();
        },
        set: function (o) {
          this[yt].setArrayLength_(o);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(Fg);
Object.entries(Ts).forEach(function (a) {
  var r = a[0],
    l = a[1];
  r !== "concat" && Xs(yd.prototype, r, l);
});
function Wg(a) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[yt].get_(a);
    },
    set: function (l) {
      this[yt].set_(a, l);
    },
  };
}
function IS(a) {
  An(yd.prototype, "" + a, Wg(a));
}
function Ig(a) {
  if (a > _f) {
    for (var r = _f; r < a + 100; r++) IS(r);
    _f = a;
  }
}
Ig(1e3);
function t1(a, r, l) {
  return new yd(a, r, l);
}
function Ff(a, r) {
  if (typeof a == "object" && a !== null) {
    if ($s(a)) return (r !== void 0 && Rt(23), a[yt].atom_);
    if (_n(a)) return a.atom_;
    if (ui(a)) {
      if (r === void 0) return a.keysAtom_;
      var l = a.data_.get(r) || a.hasMap_.get(r);
      return (l || Rt(25, r, Wf(a)), l);
    }
    if (Fs(a)) {
      if (!r) return Rt(26);
      var u = a[yt].values_.get(r);
      return (u || Rt(27, r, Wf(a)), u);
    }
    if (dd(a) || Js(a) || Ms(a)) return a;
  } else if (cn(a) && Ms(a[yt])) return a[yt];
  Rt(28);
}
function e1(a, r) {
  if ((a || Rt(29), dd(a) || Js(a) || Ms(a) || ui(a) || _n(a))) return a;
  if (a[yt]) return a[yt];
  Rt(24, a);
}
function Wf(a, r) {
  var l;
  if (r !== void 0) l = Ff(a, r);
  else {
    if (Dr(a)) return a.name;
    Fs(a) || ui(a) || _n(a) ? (l = e1(a)) : (l = Ff(a));
  }
  return l.name_;
}
function si(a) {
  var r = ri(),
    l = vd(!0);
  Ie();
  try {
    return a();
  } finally {
    (tn(), md(l), Zn(r));
  }
}
var zp = ks.toString;
function ty(a, r, l) {
  return (l === void 0 && (l = -1), If(a, r, l));
}
function If(a, r, l, u, o) {
  if (a === r) return a !== 0 || 1 / a === 1 / r;
  if (a == null || r == null) return !1;
  if (a !== a) return r !== r;
  var f = typeof a;
  if (f !== "function" && f !== "object" && typeof r != "object") return !1;
  var d = zp.call(a);
  if (d !== zp.call(r)) return !1;
  switch (d) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a == "" + r;
    case "[object Number]":
      return +a != +a ? +r != +r : +a == 0 ? 1 / +a === 1 / r : +a == +r;
    case "[object Date]":
    case "[object Boolean]":
      return +a == +r;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(a) === Symbol.valueOf.call(r)
      );
    case "[object Map]":
    case "[object Set]":
      l >= 0 && l++;
      break;
  }
  ((a = Np(a)), (r = Np(r)));
  var h = d === "[object Array]";
  if (!h) {
    if (typeof a != "object" || typeof r != "object") return !1;
    var v = a.constructor,
      p = r.constructor;
    if (
      v !== p &&
      !(cn(v) && v instanceof v && cn(p) && p instanceof p) &&
      "constructor" in a &&
      "constructor" in r
    )
      return !1;
  }
  if (l === 0) return !1;
  (l < 0 && (l = -1), (u = u || []), (o = o || []));
  for (var g = u.length; g--; ) if (u[g] === a) return o[g] === r;
  if ((u.push(a), o.push(r), h)) {
    if (((g = a.length), g !== r.length)) return !1;
    for (; g--; ) if (!If(a[g], r[g], l - 1, u, o)) return !1;
  } else {
    var b = Object.keys(a),
      O = b.length;
    if (Object.keys(r).length !== O) return !1;
    for (var C = 0; C < O; C++) {
      var N = b[C];
      if (!(Qn(r, N) && If(a[N], r[N], l - 1, u, o))) return !1;
    }
  }
  return (u.pop(), o.pop(), !0);
}
function Np(a) {
  return $s(a)
    ? a.slice()
    : cl(a) || ui(a) || Yn(a) || _n(a)
      ? Array.from(a.entries())
      : a;
}
var Up,
  n1 = ((Up = qs().Iterator) == null ? void 0 : Up.prototype) || {};
function bd(a) {
  return ((a[Symbol.iterator] = a1), Object.assign(Object.create(n1), a));
}
function a1() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (a) {
  var r = qs();
  typeof r[a] > "u" &&
    Rt("MobX requires global '" + a + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: _S,
    extras: { getDebugName: Wf },
    $mobx: yt,
  });
const i1 = (a, r) => Object.keys(a).reduce((l, u) => ((l[u] = r), l), {});
var ws = ((a) => ((a.DONE = "DONE"), (a.LOG_OUT_MODAL = "LOG_OUT_MODAL"), a))(
  ws || {},
);
const jp = i1(ws, !1);
class l1 {
  constructor(r) {
    Ee(this, "appQueryLimit", 1e3);
    Ee(this, "isSideNavOpen", !1);
    Ee(this, "isActivityOpen", !1);
    Ee(this, "rootStore");
    Ee(this, "nonce", 0);
    Ee(this, "doneModal", {
      text: "",
      subText: "",
      ctaText: "",
      showClose: !0,
    });
    Ee(this, "isOpen", { ...jp });
    (qS(this, {
      appQueryLimit: Qt,
      isSideNavOpen: Qt,
      isActivityOpen: Qt,
      isOpen: Qt,
      nonce: Qt,
      doneModal: Qt,
      openSideNav: On.bound,
      openActivityNav: On.bound,
      toggleModals: On.bound,
      setModalOpenState: On.bound,
    }),
      (this.rootStore = r));
  }
  openSideNav(r) {
    this.isSideNavOpen = typeof r > "u" ? !this.isSideNavOpen : r;
  }
  openActivityNav(r) {
    this.isActivityOpen = typeof r > "u" ? !this.isActivityOpen : r;
  }
  setModalOpenState(r, l) {
    this.isOpen[r] = typeof l > "u" ? !this.isOpen[r] : l;
  }
  toggleModals(r = {}) {
    switch (r.name) {
      case "":
        break;
      case ws.DONE:
        r.open &&
          (this.doneModal = {
            text: r.text,
            subText: r.subText,
            ctaText: r.ctaText ?? "Got it",
            showClose: r.showClose ?? !0,
          });
        break;
      default:
        this.isOpen = { ...jp };
        break;
    }
    (r.name && ws[r.name] !== void 0 && this.setModalOpenState(r.name, r.open),
      (this.nonce = Date.now() + Math.random()));
  }
}
US({ enforceActions: "observed", computedRequiresReaction: !0 });
class r1 {
  constructor() {
    Ee(this, "AppConfigStore");
    this.AppConfigStore = new l1(this);
  }
}
const ey = new r1(),
  u1 = mt.createContext(ey),
  s1 = ({ children: a }) => et.jsx(u1.Provider, { value: ey, children: a });
var Sf = { exports: {} },
  vr = {},
  Of = { exports: {} },
  Af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lp;
function o1() {
  return (
    Lp ||
      ((Lp = 1),
      (function (a) {
        function r(x, q) {
          var B = x.length;
          x.push(q);
          t: for (; 0 < B; ) {
            var gt = (B - 1) >>> 1,
              S = x[gt];
            if (0 < o(S, q)) ((x[gt] = q), (x[B] = S), (B = gt));
            else break t;
          }
        }
        function l(x) {
          return x.length === 0 ? null : x[0];
        }
        function u(x) {
          if (x.length === 0) return null;
          var q = x[0],
            B = x.pop();
          if (B !== q) {
            x[0] = B;
            t: for (var gt = 0, S = x.length, U = S >>> 1; gt < U; ) {
              var K = 2 * (gt + 1) - 1,
                V = x[K],
                Q = K + 1,
                ft = x[Q];
              if (0 > o(V, B))
                Q < S && 0 > o(ft, V)
                  ? ((x[gt] = ft), (x[Q] = B), (gt = Q))
                  : ((x[gt] = V), (x[K] = B), (gt = K));
              else if (Q < S && 0 > o(ft, B))
                ((x[gt] = ft), (x[Q] = B), (gt = Q));
              else break t;
            }
          }
          return q;
        }
        function o(x, q) {
          var B = x.sortIndex - q.sortIndex;
          return B !== 0 ? B : x.id - q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          a.unstable_now = function () {
            return d.now() - h;
          };
        }
        var v = [],
          p = [],
          g = 1,
          b = null,
          O = 3,
          C = !1,
          N = !1,
          G = !1,
          X = !1,
          Z = typeof setTimeout == "function" ? setTimeout : null,
          rt = typeof clearTimeout == "function" ? clearTimeout : null,
          tt = typeof setImmediate < "u" ? setImmediate : null;
        function st(x) {
          for (var q = l(p); q !== null; ) {
            if (q.callback === null) u(p);
            else if (q.startTime <= x)
              (u(p), (q.sortIndex = q.expirationTime), r(v, q));
            else break;
            q = l(p);
          }
        }
        function P(x) {
          if (((G = !1), st(x), !N))
            if (l(v) !== null) ((N = !0), Y || ((Y = !0), k()));
            else {
              var q = l(p);
              q !== null && ut(P, q.startTime - x);
            }
        }
        var Y = !1,
          W = -1,
          T = 5,
          z = -1;
        function F() {
          return X ? !0 : !(a.unstable_now() - z < T);
        }
        function J() {
          if (((X = !1), Y)) {
            var x = a.unstable_now();
            z = x;
            var q = !0;
            try {
              t: {
                ((N = !1), G && ((G = !1), rt(W), (W = -1)), (C = !0));
                var B = O;
                try {
                  e: {
                    for (
                      st(x), b = l(v);
                      b !== null && !(b.expirationTime > x && F());

                    ) {
                      var gt = b.callback;
                      if (typeof gt == "function") {
                        ((b.callback = null), (O = b.priorityLevel));
                        var S = gt(b.expirationTime <= x);
                        if (((x = a.unstable_now()), typeof S == "function")) {
                          ((b.callback = S), st(x), (q = !0));
                          break e;
                        }
                        (b === l(v) && u(v), st(x));
                      } else u(v);
                      b = l(v);
                    }
                    if (b !== null) q = !0;
                    else {
                      var U = l(p);
                      (U !== null && ut(P, U.startTime - x), (q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (O = B), (C = !1));
                }
                q = void 0;
              }
            } finally {
              q ? k() : (Y = !1);
            }
          }
        }
        var k;
        if (typeof tt == "function")
          k = function () {
            tt(J);
          };
        else if (typeof MessageChannel < "u") {
          var I = new MessageChannel(),
            St = I.port2;
          ((I.port1.onmessage = J),
            (k = function () {
              St.postMessage(null);
            }));
        } else
          k = function () {
            Z(J, 0);
          };
        function ut(x, q) {
          W = Z(function () {
            x(a.unstable_now());
          }, q);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (a.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (T = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (a.unstable_next = function (x) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = O;
            }
            var B = O;
            O = q;
            try {
              return x();
            } finally {
              O = B;
            }
          }),
          (a.unstable_requestPaint = function () {
            X = !0;
          }),
          (a.unstable_runWithPriority = function (x, q) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var B = O;
            O = x;
            try {
              return q();
            } finally {
              O = B;
            }
          }),
          (a.unstable_scheduleCallback = function (x, q, B) {
            var gt = a.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? gt + B : gt))
                : (B = gt),
              x)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = B + S),
              (x = {
                id: g++,
                callback: q,
                priorityLevel: x,
                startTime: B,
                expirationTime: S,
                sortIndex: -1,
              }),
              B > gt
                ? ((x.sortIndex = B),
                  r(p, x),
                  l(v) === null &&
                    x === l(p) &&
                    (G ? (rt(W), (W = -1)) : (G = !0), ut(P, B - gt)))
                : ((x.sortIndex = S),
                  r(v, x),
                  N || C || ((N = !0), Y || ((Y = !0), k()))),
              x
            );
          }),
          (a.unstable_shouldYield = F),
          (a.unstable_wrapCallback = function (x) {
            var q = O;
            return function () {
              var B = O;
              O = q;
              try {
                return x.apply(this, arguments);
              } finally {
                O = B;
              }
            };
          }));
      })(Af)),
    Af
  );
}
var Bp;
function c1() {
  return (Bp || ((Bp = 1), (Of.exports = o1())), Of.exports);
}
var Ef = { exports: {} },
  he = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp;
function f1() {
  if (Vp) return he;
  Vp = 1;
  var a = jr();
  function r(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var u = {
      d: {
        f: l,
        r: function () {
          throw Error(r(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function f(v, p, g) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: p,
      implementation: g,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(v, p) {
    if (v === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (he.createPortal = function (v, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(r(299));
      return f(v, p, null, g);
    }),
    (he.flushSync = function (v) {
      var p = d.T,
        g = u.p;
      try {
        if (((d.T = null), (u.p = 2), v)) return v();
      } finally {
        ((d.T = p), (u.p = g), u.d.f());
      }
    }),
    (he.preconnect = function (v, p) {
      typeof v == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(v, p));
    }),
    (he.prefetchDNS = function (v) {
      typeof v == "string" && u.d.D(v);
    }),
    (he.preinit = function (v, p) {
      if (typeof v == "string" && p && typeof p.as == "string") {
        var g = p.as,
          b = h(g, p.crossOrigin),
          O = typeof p.integrity == "string" ? p.integrity : void 0,
          C = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        g === "style"
          ? u.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: O,
              fetchPriority: C,
            })
          : g === "script" &&
            u.d.X(v, {
              crossOrigin: b,
              integrity: O,
              fetchPriority: C,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (he.preinitModule = function (v, p) {
      if (typeof v == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = h(p.as, p.crossOrigin);
            u.d.M(v, {
              crossOrigin: g,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(v);
    }),
    (he.preload = function (v, p) {
      if (
        typeof v == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var g = p.as,
          b = h(g, p.crossOrigin);
        u.d.L(v, g, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (he.preloadModule = function (v, p) {
      if (typeof v == "string")
        if (p) {
          var g = h(p.as, p.crossOrigin);
          u.d.m(v, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(v);
    }),
    (he.requestFormReset = function (v) {
      u.d.r(v);
    }),
    (he.unstable_batchedUpdates = function (v, p) {
      return v(p);
    }),
    (he.useFormState = function (v, p, g) {
      return d.H.useFormState(v, p, g);
    }),
    (he.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (he.version = "19.1.0"),
    he
  );
}
var Hp;
function d1() {
  if (Hp) return Ef.exports;
  Hp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return (a(), (Ef.exports = f1()), Ef.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gp;
function h1() {
  if (Gp) return vr;
  Gp = 1;
  var a = c1(),
    r = jr(),
    l = d1();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (f(t) !== t) throw Error(u(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === n) return (h(s), t);
          if (c === i) return (h(s), e);
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) ((n = s), (i = c));
      else {
        for (var m = !1, y = s.child; y; ) {
          if (y === n) {
            ((m = !0), (n = s), (i = c));
            break;
          }
          if (y === i) {
            ((m = !0), (i = s), (n = c));
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = c.child; y; ) {
            if (y === n) {
              ((m = !0), (n = c), (i = s));
              break;
            }
            if (y === i) {
              ((m = !0), (i = c), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    G = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    Z = Symbol.for("react.provider"),
    rt = Symbol.for("react.consumer"),
    tt = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    z = Symbol.for("react.activity"),
    F = Symbol.for("react.memo_cache_sentinel"),
    J = Symbol.iterator;
  function k(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (J && t[J]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var I = Symbol.for("react.client.reference");
  function St(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === I ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case N:
        return "Fragment";
      case X:
        return "Profiler";
      case G:
        return "StrictMode";
      case P:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case z:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return "Portal";
        case tt:
          return (t.displayName || "Context") + ".Provider";
        case rt:
          return (t._context.displayName || "Context") + ".Consumer";
        case st:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case W:
          return (
            (e = t.displayName || null),
            e !== null ? e : St(t.type) || "Memo"
          );
        case T:
          ((e = t._payload), (t = t._init));
          try {
            return St(t(e));
          } catch {}
      }
    return null;
  }
  var ut = Array.isArray,
    x = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    gt = [],
    S = -1;
  function U(t) {
    return { current: t };
  }
  function K(t) {
    0 > S || ((t.current = gt[S]), (gt[S] = null), S--);
  }
  function V(t, e) {
    (S++, (gt[S] = t.current), (t.current = e));
  }
  var Q = U(null),
    ft = U(null),
    nt = U(null),
    dt = U(null);
  function ct(t, e) {
    switch ((V(nt, e), V(ft, t), V(Q, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ym(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Ym(e)), (t = Xm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (K(Q), V(Q, t));
  }
  function zt() {
    (K(Q), K(ft), K(nt));
  }
  function ye(t) {
    t.memoizedState !== null && V(dt, t);
    var e = Q.current,
      n = Xm(e, t.type);
    e !== n && (V(ft, t), V(Q, n));
  }
  function ce(t) {
    (ft.current === t && (K(Q), K(ft)),
      dt.current === t && (K(dt), (sr._currentValue = B)));
  }
  var Me = Object.prototype.hasOwnProperty,
    Fn = a.unstable_scheduleCallback,
    He = a.unstable_cancelCallback,
    ne = a.unstable_shouldYield,
    vn = a.unstable_requestPaint,
    Yt = a.unstable_now,
    qr = a.unstable_getCurrentPriorityLevel,
    kr = a.unstable_ImmediatePriority,
    Yr = a.unstable_UserBlockingPriority,
    ci = a.unstable_NormalPriority,
    ao = a.unstable_LowPriority,
    fi = a.unstable_IdlePriority,
    ky = a.log,
    Yy = a.unstable_setDisableYieldValue,
    pl = null,
    Te = null;
  function Wn(t) {
    if (
      (typeof ky == "function" && Yy(t),
      Te && typeof Te.setStrictMode == "function")
    )
      try {
        Te.setStrictMode(pl, t);
      } catch {}
  }
  var Re = Math.clz32 ? Math.clz32 : Qy,
    Xy = Math.log,
    Ky = Math.LN2;
  function Qy(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Xy(t) / Ky) | 0)) | 0);
  }
  var Xr = 256,
    Kr = 4194304;
  function Ca(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Qr(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      c = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~c),
          i !== 0
            ? (s = Ca(i))
            : ((m &= y),
              m !== 0
                ? (s = Ca(m))
                : n || ((n = y & ~t), n !== 0 && (s = Ca(n)))))
        : ((y = i & ~c),
          y !== 0
            ? (s = Ca(y))
            : m !== 0
              ? (s = Ca(m))
              : n || ((n = i & ~t), n !== 0 && (s = Ca(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & c) === 0 &&
            ((c = s & -s),
            (n = e & -e),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function gl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Zy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Md() {
    var t = Xr;
    return ((Xr <<= 1), (Xr & 4194048) === 0 && (Xr = 256), t);
  }
  function Td() {
    var t = Kr;
    return ((Kr <<= 1), (Kr & 62914560) === 0 && (Kr = 4194304), t);
  }
  function io(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function yl(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Py(t, e, n, i, s, c) {
    var m = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var y = t.entanglements,
      _ = t.expirationTimes,
      R = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var j = 31 - Re(n),
        H = 1 << j;
      ((y[j] = 0), (_[j] = -1));
      var w = R[j];
      if (w !== null)
        for (R[j] = null, j = 0; j < w.length; j++) {
          var D = w[j];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~H;
    }
    (i !== 0 && Rd(t, i, 0),
      c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e)));
  }
  function Rd(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - Re(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194090)));
  }
  function wd(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - Re(n),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s));
    }
  }
  function lo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ro(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Dd() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : op(t.type));
  }
  function Jy(t, e) {
    var n = q.p;
    try {
      return ((q.p = t), e());
    } finally {
      q.p = n;
    }
  }
  var In = Math.random().toString(36).slice(2),
    fe = "__reactFiber$" + In,
    be = "__reactProps$" + In,
    di = "__reactContainer$" + In,
    uo = "__reactEvents$" + In,
    $y = "__reactListeners$" + In,
    Fy = "__reactHandles$" + In,
    Cd = "__reactResources$" + In,
    bl = "__reactMarker$" + In;
  function so(t) {
    (delete t[fe], delete t[be], delete t[uo], delete t[$y], delete t[Fy]);
  }
  function hi(t) {
    var e = t[fe];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[di] || n[fe])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Pm(t); t !== null; ) {
            if ((n = t[fe])) return n;
            t = Pm(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function vi(t) {
    if ((t = t[fe] || t[di])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function _l(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function mi(t) {
    var e = t[Cd];
    return (
      e ||
        (e = t[Cd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ae(t) {
    t[bl] = !0;
  }
  var zd = new Set(),
    Nd = {};
  function za(t, e) {
    (pi(t, e), pi(t + "Capture", e));
  }
  function pi(t, e) {
    for (Nd[t] = e, t = 0; t < e.length; t++) zd.add(e[t]);
  }
  var Wy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ud = {},
    jd = {};
  function Iy(t) {
    return Me.call(jd, t)
      ? !0
      : Me.call(Ud, t)
        ? !1
        : Wy.test(t)
          ? (jd[t] = !0)
          : ((Ud[t] = !0), !1);
  }
  function Zr(t, e, n) {
    if (Iy(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Pr(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Tn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  var oo, Ld;
  function gi(t) {
    if (oo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((oo = (e && e[1]) || ""),
          (Ld =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      oo +
      t +
      Ld
    );
  }
  var co = !1;
  function fo(t, e) {
    if (!t || co) return "";
    co = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (D) {
                  var w = D;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (D) {
                  w = D;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                w = D;
              }
              (H = t()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (D) {
            if (D && w && typeof D.stack == "string") return [D.stack, w.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = i.DetermineComponentFrameRoot(),
        m = c[0],
        y = c[1];
      if (m && y) {
        var _ = m.split(`
`),
          R = y.split(`
`);
        for (
          s = i = 0;
          i < _.length && !_[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < R.length && !R[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === _.length || s === R.length)
          for (
            i = _.length - 1, s = R.length - 1;
            1 <= i && 0 <= s && _[i] !== R[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (_[i] !== R[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || _[i] !== R[s])) {
                  var j =
                    `
` + _[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((co = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? gi(n) : "";
  }
  function t0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return gi(t.type);
      case 16:
        return gi("Lazy");
      case 13:
        return gi("Suspense");
      case 19:
        return gi("SuspenseList");
      case 0:
      case 15:
        return fo(t.type, !1);
      case 11:
        return fo(t.type.render, !1);
      case 1:
        return fo(t.type, !0);
      case 31:
        return gi("Activity");
      default:
        return "";
    }
  }
  function Bd(t) {
    try {
      var e = "";
      do ((e += t0(t)), (t = t.return));
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ge(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Vd(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function e0(t) {
    var e = Vd(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        c = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            ((i = "" + m), c.call(this, m));
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (m) {
            i = "" + m;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Jr(t) {
    t._valueTracker || (t._valueTracker = e0(t));
  }
  function Hd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Vd(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function $r(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var n0 = /[\n"\\]/g;
  function qe(t) {
    return t.replace(n0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function ho(t, e, n, i, s, c, m, y) {
    ((t.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.type = m)
        : t.removeAttribute("type"),
      e != null
        ? m === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ge(e))
          : t.value !== "" + Ge(e) && (t.value = "" + Ge(e))
        : (m !== "submit" && m !== "reset") || t.removeAttribute("value"),
      e != null
        ? vo(t, m, Ge(e))
        : n != null
          ? vo(t, m, Ge(n))
          : i != null && t.removeAttribute("value"),
      s == null && c != null && (t.defaultChecked = !!c),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + Ge(y))
        : t.removeAttribute("name"));
  }
  function Gd(t, e, n, i, s, c, m, y) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) return;
      ((n = n != null ? "" + Ge(n) : ""),
        (e = e != null ? "" + Ge(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = y ? t.checked : !!i),
      (t.defaultChecked = !!i),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (t.name = m));
  }
  function vo(t, e, n) {
    (e === "number" && $r(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function yi(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Ge(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function qd(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ge(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ge(n) : "";
  }
  function kd(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(u(92));
        if (ut(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Ge(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i));
  }
  function bi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var a0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Yd(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || a0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Xd(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var s in e)
        ((i = e[s]), e.hasOwnProperty(s) && n[s] !== i && Yd(t, s, i));
    } else for (var c in e) e.hasOwnProperty(c) && Yd(t, c, e[c]);
  }
  function mo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var i0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    l0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fr(t) {
    return l0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var po = null;
  function go(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var _i = null,
    Si = null;
  function Kd(t) {
    var e = vi(t);
    if (e && (t = e.stateNode)) {
      var n = t[be] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (ho(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + qe("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[be] || null;
                if (!s) throw Error(u(90));
                ho(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((i = n[e]), i.form === t.form && Hd(i));
          }
          break t;
        case "textarea":
          qd(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && yi(t, !!n.multiple, e, !1));
      }
    }
  }
  var yo = !1;
  function Qd(t, e, n) {
    if (yo) return t(e, n);
    yo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((yo = !1),
        (_i !== null || Si !== null) &&
          (Lu(), _i && ((e = _i), (t = Si), (Si = _i = null), Kd(e), t)))
      )
        for (e = 0; e < t.length; e++) Kd(t[e]);
    }
  }
  function Sl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[be] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var Rn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    bo = !1;
  if (Rn)
    try {
      var Ol = {};
      (Object.defineProperty(Ol, "passive", {
        get: function () {
          bo = !0;
        },
      }),
        window.addEventListener("test", Ol, Ol),
        window.removeEventListener("test", Ol, Ol));
    } catch {
      bo = !1;
    }
  var ta = null,
    _o = null,
    Wr = null;
  function Zd() {
    if (Wr) return Wr;
    var t,
      e = _o,
      n = e.length,
      i,
      s = "value" in ta ? ta.value : ta.textContent,
      c = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var m = n - t;
    for (i = 1; i <= m && e[n - i] === s[c - i]; i++);
    return (Wr = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Ir(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function tu() {
    return !0;
  }
  function Pd() {
    return !1;
  }
  function _e(t) {
    function e(n, i, s, c, m) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = m),
        (this.currentTarget = null));
      for (var y in t)
        t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(c) : c[y]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? tu
          : Pd),
        (this.isPropagationStopped = Pd),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = tu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = tu));
        },
        persist: function () {},
        isPersistent: tu,
      }),
      e
    );
  }
  var Na = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eu = _e(Na),
    Al = g({}, Na, { view: 0, detail: 0 }),
    r0 = _e(Al),
    So,
    Oo,
    El,
    nu = g({}, Al, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Eo,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== El &&
              (El && t.type === "mousemove"
                ? ((So = t.screenX - El.screenX), (Oo = t.screenY - El.screenY))
                : (Oo = So = 0),
              (El = t)),
            So);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Oo;
      },
    }),
    Jd = _e(nu),
    u0 = g({}, nu, { dataTransfer: 0 }),
    s0 = _e(u0),
    o0 = g({}, Al, { relatedTarget: 0 }),
    Ao = _e(o0),
    c0 = g({}, Na, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f0 = _e(c0),
    d0 = g({}, Na, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    h0 = _e(d0),
    v0 = g({}, Na, { data: 0 }),
    $d = _e(v0),
    m0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    p0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    g0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function y0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = g0[t])
        ? !!e[t]
        : !1;
  }
  function Eo() {
    return y0;
  }
  var b0 = g({}, Al, {
      key: function (t) {
        if (t.key) {
          var e = m0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ir(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? p0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Eo,
      charCode: function (t) {
        return t.type === "keypress" ? Ir(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ir(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    _0 = _e(b0),
    S0 = g({}, nu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Fd = _e(S0),
    O0 = g({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Eo,
    }),
    A0 = _e(O0),
    E0 = g({}, Na, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    x0 = _e(E0),
    M0 = g({}, nu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    T0 = _e(M0),
    R0 = g({}, Na, { newState: 0, oldState: 0 }),
    w0 = _e(R0),
    D0 = [9, 13, 27, 32],
    xo = Rn && "CompositionEvent" in window,
    xl = null;
  Rn && "documentMode" in document && (xl = document.documentMode);
  var C0 = Rn && "TextEvent" in window && !xl,
    Wd = Rn && (!xo || (xl && 8 < xl && 11 >= xl)),
    Id = " ",
    th = !1;
  function eh(t, e) {
    switch (t) {
      case "keyup":
        return D0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nh(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Oi = !1;
  function z0(t, e) {
    switch (t) {
      case "compositionend":
        return nh(e);
      case "keypress":
        return e.which !== 32 ? null : ((th = !0), Id);
      case "textInput":
        return ((t = e.data), t === Id && th ? null : t);
      default:
        return null;
    }
  }
  function N0(t, e) {
    if (Oi)
      return t === "compositionend" || (!xo && eh(t, e))
        ? ((t = Zd()), (Wr = _o = ta = null), (Oi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Wd && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var U0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ah(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!U0[t.type] : e === "textarea";
  }
  function ih(t, e, n, i) {
    (_i ? (Si ? Si.push(i) : (Si = [i])) : (_i = i),
      (e = ku(e, "onChange")),
      0 < e.length &&
        ((n = new eu("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e })));
  }
  var Ml = null,
    Tl = null;
  function j0(t) {
    Vm(t, 0);
  }
  function au(t) {
    var e = _l(t);
    if (Hd(e)) return t;
  }
  function lh(t, e) {
    if (t === "change") return e;
  }
  var rh = !1;
  if (Rn) {
    var Mo;
    if (Rn) {
      var To = "oninput" in document;
      if (!To) {
        var uh = document.createElement("div");
        (uh.setAttribute("oninput", "return;"),
          (To = typeof uh.oninput == "function"));
      }
      Mo = To;
    } else Mo = !1;
    rh = Mo && (!document.documentMode || 9 < document.documentMode);
  }
  function sh() {
    Ml && (Ml.detachEvent("onpropertychange", oh), (Tl = Ml = null));
  }
  function oh(t) {
    if (t.propertyName === "value" && au(Tl)) {
      var e = [];
      (ih(e, Tl, t, go(t)), Qd(j0, e));
    }
  }
  function L0(t, e, n) {
    t === "focusin"
      ? (sh(), (Ml = e), (Tl = n), Ml.attachEvent("onpropertychange", oh))
      : t === "focusout" && sh();
  }
  function B0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return au(Tl);
  }
  function V0(t, e) {
    if (t === "click") return au(e);
  }
  function H0(t, e) {
    if (t === "input" || t === "change") return au(e);
  }
  function G0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var we = typeof Object.is == "function" ? Object.is : G0;
  function Rl(t, e) {
    if (we(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!Me.call(e, s) || !we(t[s], e[s])) return !1;
    }
    return !0;
  }
  function ch(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function fh(t, e) {
    var n = ch(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ch(n);
    }
  }
  function dh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? dh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function hh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = $r(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = $r(t.document);
    }
    return e;
  }
  function Ro(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var q0 = Rn && "documentMode" in document && 11 >= document.documentMode,
    Ai = null,
    wo = null,
    wl = null,
    Do = !1;
  function vh(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Do ||
      Ai == null ||
      Ai !== $r(i) ||
      ((i = Ai),
      "selectionStart" in i && Ro(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (wl && Rl(wl, i)) ||
        ((wl = i),
        (i = ku(wo, "onSelect")),
        0 < i.length &&
          ((e = new eu("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Ai))));
  }
  function Ua(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ei = {
      animationend: Ua("Animation", "AnimationEnd"),
      animationiteration: Ua("Animation", "AnimationIteration"),
      animationstart: Ua("Animation", "AnimationStart"),
      transitionrun: Ua("Transition", "TransitionRun"),
      transitionstart: Ua("Transition", "TransitionStart"),
      transitioncancel: Ua("Transition", "TransitionCancel"),
      transitionend: Ua("Transition", "TransitionEnd"),
    },
    Co = {},
    mh = {};
  Rn &&
    ((mh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ei.animationend.animation,
      delete Ei.animationiteration.animation,
      delete Ei.animationstart.animation),
    "TransitionEvent" in window || delete Ei.transitionend.transition);
  function ja(t) {
    if (Co[t]) return Co[t];
    if (!Ei[t]) return t;
    var e = Ei[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in mh) return (Co[t] = e[n]);
    return t;
  }
  var ph = ja("animationend"),
    gh = ja("animationiteration"),
    yh = ja("animationstart"),
    k0 = ja("transitionrun"),
    Y0 = ja("transitionstart"),
    X0 = ja("transitioncancel"),
    bh = ja("transitionend"),
    _h = new Map(),
    zo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  zo.push("scrollEnd");
  function en(t, e) {
    (_h.set(t, e), za(e, [t]));
  }
  var Sh = new WeakMap();
  function ke(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Sh.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Bd(e) }), Sh.set(t, e), e);
    }
    return { value: t, source: e, stack: Bd(e) };
  }
  var Ye = [],
    xi = 0,
    No = 0;
  function iu() {
    for (var t = xi, e = (No = xi = 0); e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var i = Ye[e];
      Ye[e++] = null;
      var s = Ye[e];
      Ye[e++] = null;
      var c = Ye[e];
      if (((Ye[e++] = null), i !== null && s !== null)) {
        var m = i.pending;
        (m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (i.pending = s));
      }
      c !== 0 && Oh(n, s, c);
    }
  }
  function lu(t, e, n, i) {
    ((Ye[xi++] = t),
      (Ye[xi++] = e),
      (Ye[xi++] = n),
      (Ye[xi++] = i),
      (No |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function Uo(t, e, n, i) {
    return (lu(t, e, n, i), ru(t));
  }
  function Mi(t, e) {
    return (lu(t, null, null, e), ru(t));
  }
  function Oh(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, c = t.return; c !== null; )
      ((c.childLanes |= n),
        (i = c.alternate),
        i !== null && (i.childLanes |= n),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = c),
        (c = c.return));
    return t.tag === 3
      ? ((c = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Re(n)),
          (t = c.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        c)
      : null;
  }
  function ru(t) {
    if (50 < tr) throw ((tr = 0), (Gc = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ti = {};
  function K0(t, e, n, i) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function De(t, e, n, i) {
    return new K0(t, e, n, i);
  }
  function jo(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function wn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = De(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Ah(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function uu(t, e, n, i, s, c) {
    var m = 0;
    if (((i = t), typeof t == "function")) jo(t) && (m = 1);
    else if (typeof t == "string")
      m = Zb(t, n, Q.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case z:
          return ((t = De(31, n, e, s)), (t.elementType = z), (t.lanes = c), t);
        case N:
          return La(n.children, s, c, e);
        case G:
          ((m = 8), (s |= 24));
          break;
        case X:
          return (
            (t = De(12, n, e, s | 2)),
            (t.elementType = X),
            (t.lanes = c),
            t
          );
        case P:
          return ((t = De(13, n, e, s)), (t.elementType = P), (t.lanes = c), t);
        case Y:
          return ((t = De(19, n, e, s)), (t.elementType = Y), (t.lanes = c), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Z:
              case tt:
                m = 10;
                break t;
              case rt:
                m = 9;
                break t;
              case st:
                m = 11;
                break t;
              case W:
                m = 14;
                break t;
              case T:
                ((m = 16), (i = null));
                break t;
            }
          ((m = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (i = null));
      }
    return (
      (e = De(m, n, e, s)),
      (e.elementType = t),
      (e.type = i),
      (e.lanes = c),
      e
    );
  }
  function La(t, e, n, i) {
    return ((t = De(7, t, i, e)), (t.lanes = n), t);
  }
  function Lo(t, e, n) {
    return ((t = De(6, t, null, e)), (t.lanes = n), t);
  }
  function Bo(t, e, n) {
    return (
      (e = De(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ri = [],
    wi = 0,
    su = null,
    ou = 0,
    Xe = [],
    Ke = 0,
    Ba = null,
    Dn = 1,
    Cn = "";
  function Va(t, e) {
    ((Ri[wi++] = ou), (Ri[wi++] = su), (su = t), (ou = e));
  }
  function Eh(t, e, n) {
    ((Xe[Ke++] = Dn), (Xe[Ke++] = Cn), (Xe[Ke++] = Ba), (Ba = t));
    var i = Dn;
    t = Cn;
    var s = 32 - Re(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var c = 32 - Re(e) + s;
    if (30 < c) {
      var m = s - (s % 5);
      ((c = (i & ((1 << m) - 1)).toString(32)),
        (i >>= m),
        (s -= m),
        (Dn = (1 << (32 - Re(e) + s)) | (n << s) | i),
        (Cn = c + t));
    } else ((Dn = (1 << c) | (n << s) | i), (Cn = t));
  }
  function Vo(t) {
    t.return !== null && (Va(t, 1), Eh(t, 1, 0));
  }
  function Ho(t) {
    for (; t === su; )
      ((su = Ri[--wi]), (Ri[wi] = null), (ou = Ri[--wi]), (Ri[wi] = null));
    for (; t === Ba; )
      ((Ba = Xe[--Ke]),
        (Xe[Ke] = null),
        (Cn = Xe[--Ke]),
        (Xe[Ke] = null),
        (Dn = Xe[--Ke]),
        (Xe[Ke] = null));
  }
  var me = null,
    Zt = null,
    Ct = !1,
    Ha = null,
    mn = !1,
    Go = Error(u(519));
  function Ga(t) {
    var e = Error(u(418, ""));
    throw (zl(ke(e, t)), Go);
  }
  function xh(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[fe] = t), (e[be] = i), n)) {
      case "dialog":
        (Mt("cancel", e), Mt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Mt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < nr.length; n++) Mt(nr[n], e);
        break;
      case "source":
        Mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Mt("error", e), Mt("load", e));
        break;
      case "details":
        Mt("toggle", e);
        break;
      case "input":
        (Mt("invalid", e),
          Gd(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ),
          Jr(e));
        break;
      case "select":
        Mt("invalid", e);
        break;
      case "textarea":
        (Mt("invalid", e), kd(e, i.value, i.defaultValue, i.children), Jr(e));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      km(e.textContent, n)
        ? (i.popover != null && (Mt("beforetoggle", e), Mt("toggle", e)),
          i.onScroll != null && Mt("scroll", e),
          i.onScrollEnd != null && Mt("scrollend", e),
          i.onClick != null && (e.onclick = Yu),
          (e = !0))
        : (e = !1),
      e || Ga(t));
  }
  function Mh(t) {
    for (me = t.return; me; )
      switch (me.tag) {
        case 5:
        case 13:
          mn = !1;
          return;
        case 27:
        case 3:
          mn = !0;
          return;
        default:
          me = me.return;
      }
  }
  function Dl(t) {
    if (t !== me) return !1;
    if (!Ct) return (Mh(t), (Ct = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || nf(t.type, t.memoizedProps))),
        (n = !n)),
      n && Zt && Ga(t),
      Mh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Zt = an(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Zt = null;
      }
    } else
      e === 27
        ? ((e = Zt), pa(t.type) ? ((t = uf), (uf = null), (Zt = t)) : (Zt = e))
        : (Zt = me ? an(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Cl() {
    ((Zt = me = null), (Ct = !1));
  }
  function Th() {
    var t = Ha;
    return (
      t !== null &&
        (Ae === null ? (Ae = t) : Ae.push.apply(Ae, t), (Ha = null)),
      t
    );
  }
  function zl(t) {
    Ha === null ? (Ha = [t]) : Ha.push(t);
  }
  var qo = U(null),
    qa = null,
    zn = null;
  function ea(t, e, n) {
    (V(qo, e._currentValue), (e._currentValue = n));
  }
  function Nn(t) {
    ((t._currentValue = qo.current), K(qo));
  }
  function ko(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Yo(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var m = s.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var y = c;
          c = s;
          for (var _ = 0; _ < e.length; _++)
            if (y.context === e[_]) {
              ((c.lanes |= n),
                (y = c.alternate),
                y !== null && (y.lanes |= n),
                ko(c.return, n, t),
                i || (m = null));
              break t;
            }
          c = y.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(u(341));
        ((m.lanes |= n),
          (c = m.alternate),
          c !== null && (c.lanes |= n),
          ko(m, n, t),
          (m = null));
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            ((s.return = m.return), (m = s));
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Nl(t, e, n, i) {
    t = null;
    for (var s = e, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(u(387));
        if (((m = m.memoizedProps), m !== null)) {
          var y = s.type;
          we(s.pendingProps.value, m.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === dt.current) {
        if (((m = s.alternate), m === null)) throw Error(u(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(sr) : (t = [sr]));
      }
      s = s.return;
    }
    (t !== null && Yo(e, t, n, i), (e.flags |= 262144));
  }
  function cu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!we(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ka(t) {
    ((qa = t),
      (zn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function de(t) {
    return Rh(qa, t);
  }
  function fu(t, e) {
    return (qa === null && ka(t), Rh(t, e));
  }
  function Rh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), zn === null)) {
      if (t === null) throw Error(u(308));
      ((zn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else zn = zn.next = e;
    return n;
  }
  var Q0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Z0 = a.unstable_scheduleCallback,
    P0 = a.unstable_NormalPriority,
    It = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xo() {
    return { controller: new Q0(), data: new Map(), refCount: 0 };
  }
  function Ul(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Z0(P0, function () {
          t.controller.abort();
        }));
  }
  var jl = null,
    Ko = 0,
    Di = 0,
    Ci = null;
  function J0(t, e) {
    if (jl === null) {
      var n = (jl = []);
      ((Ko = 0),
        (Di = Zc()),
        (Ci = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (Ko++, e.then(wh, wh), e);
  }
  function wh() {
    if (--Ko === 0 && jl !== null) {
      Ci !== null && (Ci.status = "fulfilled");
      var t = jl;
      ((jl = null), (Di = 0), (Ci = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function $0(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      i
    );
  }
  var Dh = x.S;
  x.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      J0(t, e),
      Dh !== null && Dh(t, e));
  };
  var Ya = U(null);
  function Qo() {
    var t = Ya.current;
    return t !== null ? t : Ht.pooledCache;
  }
  function du(t, e) {
    e === null ? V(Ya, Ya.current) : V(Ya, e.pool);
  }
  function Ch() {
    var t = Qo();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var Ll = Error(u(460)),
    zh = Error(u(474)),
    hu = Error(u(542)),
    Zo = { then: function () {} };
  function Nh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function vu() {}
  function Uh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(vu, vu), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Lh(t), t);
      default:
        if (typeof e.status == "string") e.then(vu, vu);
        else {
          if (((t = Ht), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Lh(t), t);
        }
        throw ((Bl = e), Ll);
    }
  }
  var Bl = null;
  function jh() {
    if (Bl === null) throw Error(u(459));
    var t = Bl;
    return ((Bl = null), t);
  }
  function Lh(t) {
    if (t === Ll || t === hu) throw Error(u(483));
  }
  var na = !1;
  function Po(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Jo(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function aa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ia(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Nt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = ru(t)),
        Oh(t, null, n),
        e
      );
    }
    return (lu(t, i, e, n), ru(t));
  }
  function Vl(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), wd(t, n));
    }
  }
  function $o(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = m) : (c = c.next = m), (n = n.next));
        } while (n !== null);
        c === null ? (s = c = e) : (c = c.next = e);
      } else s = c = e;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var Fo = !1;
  function Hl() {
    if (Fo) {
      var t = Ci;
      if (t !== null) throw t;
    }
  }
  function Gl(t, e, n, i) {
    Fo = !1;
    var s = t.updateQueue;
    na = !1;
    var c = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var _ = y,
        R = _.next;
      ((_.next = null), m === null ? (c = R) : (m.next = R), (m = _));
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (y = j.lastBaseUpdate),
        y !== m &&
          (y === null ? (j.firstBaseUpdate = R) : (y.next = R),
          (j.lastBaseUpdate = _)));
    }
    if (c !== null) {
      var H = s.baseState;
      ((m = 0), (j = R = _ = null), (y = c));
      do {
        var w = y.lane & -536870913,
          D = w !== y.lane;
        if (D ? (Tt & w) === w : (i & w) === w) {
          (w !== 0 && w === Di && (Fo = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var pt = t,
              ht = y;
            w = e;
            var Bt = n;
            switch (ht.tag) {
              case 1:
                if (((pt = ht.payload), typeof pt == "function")) {
                  H = pt.call(Bt, H, w);
                  break t;
                }
                H = pt;
                break t;
              case 3:
                pt.flags = (pt.flags & -65537) | 128;
              case 0:
                if (
                  ((pt = ht.payload),
                  (w = typeof pt == "function" ? pt.call(Bt, H, w) : pt),
                  w == null)
                )
                  break t;
                H = g({}, H, w);
                break t;
              case 2:
                na = !0;
            }
          }
          ((w = y.callback),
            w !== null &&
              ((t.flags |= 64),
              D && (t.flags |= 8192),
              (D = s.callbacks),
              D === null ? (s.callbacks = [w]) : D.push(w)));
        } else
          ((D = {
            lane: w,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            j === null ? ((R = j = D), (_ = H)) : (j = j.next = D),
            (m |= w));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((D = y),
            (y = D.next),
            (D.next = null),
            (s.lastBaseUpdate = D),
            (s.shared.pending = null));
        }
      } while (!0);
      (j === null && (_ = H),
        (s.baseState = _),
        (s.firstBaseUpdate = R),
        (s.lastBaseUpdate = j),
        c === null && (s.shared.lanes = 0),
        (da |= m),
        (t.lanes = m),
        (t.memoizedState = H));
    }
  }
  function Bh(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function Vh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Bh(n[t], e);
  }
  var zi = U(null),
    mu = U(0);
  function Hh(t, e) {
    ((t = Gn), V(mu, t), V(zi, e), (Gn = t | e.baseLanes));
  }
  function Wo() {
    (V(mu, Gn), V(zi, zi.current));
  }
  function Io() {
    ((Gn = mu.current), K(zi), K(mu));
  }
  var la = 0,
    Ot = null,
    jt = null,
    Ft = null,
    pu = !1,
    Ni = !1,
    Xa = !1,
    gu = 0,
    ql = 0,
    Ui = null,
    F0 = 0;
  function Jt() {
    throw Error(u(321));
  }
  function tc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!we(t[n], e[n])) return !1;
    return !0;
  }
  function ec(t, e, n, i, s, c) {
    return (
      (la = c),
      (Ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (x.H = t === null || t.memoizedState === null ? Ov : Av),
      (Xa = !1),
      (c = n(i, s)),
      (Xa = !1),
      Ni && (c = qh(e, n, i, s)),
      Gh(t),
      c
    );
  }
  function Gh(t) {
    x.H = Au;
    var e = jt !== null && jt.next !== null;
    if (((la = 0), (Ft = jt = Ot = null), (pu = !1), (ql = 0), (Ui = null), e))
      throw Error(u(300));
    t === null ||
      ie ||
      ((t = t.dependencies), t !== null && cu(t) && (ie = !0));
  }
  function qh(t, e, n, i) {
    Ot = t;
    var s = 0;
    do {
      if ((Ni && (Ui = null), (ql = 0), (Ni = !1), 25 <= s))
        throw Error(u(301));
      if (((s += 1), (Ft = jt = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((x.H = ib), (c = e(n, i)));
    } while (Ni);
    return c;
  }
  function W0() {
    var t = x.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? kl(e) : e),
      (t = t.useState()[0]),
      (jt !== null ? jt.memoizedState : null) !== t && (Ot.flags |= 1024),
      e
    );
  }
  function nc() {
    var t = gu !== 0;
    return ((gu = 0), t);
  }
  function ac(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function ic(t) {
    if (pu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      pu = !1;
    }
    ((la = 0), (Ft = jt = Ot = null), (Ni = !1), (ql = gu = 0), (Ui = null));
  }
  function Se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ft === null ? (Ot.memoizedState = Ft = t) : (Ft = Ft.next = t), Ft);
  }
  function Wt() {
    if (jt === null) {
      var t = Ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = jt.next;
    var e = Ft === null ? Ot.memoizedState : Ft.next;
    if (e !== null) ((Ft = e), (jt = t));
    else {
      if (t === null)
        throw Ot.alternate === null ? Error(u(467)) : Error(u(310));
      ((jt = t),
        (t = {
          memoizedState: jt.memoizedState,
          baseState: jt.baseState,
          baseQueue: jt.baseQueue,
          queue: jt.queue,
          next: null,
        }),
        Ft === null ? (Ot.memoizedState = Ft = t) : (Ft = Ft.next = t));
    }
    return Ft;
  }
  function lc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function kl(t) {
    var e = ql;
    return (
      (ql += 1),
      Ui === null && (Ui = []),
      (t = Uh(Ui, t, e)),
      (e = Ot),
      (Ft === null ? e.memoizedState : Ft.next) === null &&
        ((e = e.alternate),
        (x.H = e === null || e.memoizedState === null ? Ov : Av)),
      t
    );
  }
  function yu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return kl(t);
      if (t.$$typeof === tt) return de(t);
    }
    throw Error(u(438, String(t)));
  }
  function rc(t) {
    var e = null,
      n = Ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = Ot.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = lc()), (Ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = F;
    return (e.index++, n);
  }
  function Un(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function bu(t) {
    var e = Wt();
    return uc(e, jt, t);
  }
  function uc(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (s !== null) {
        var m = s.next;
        ((s.next = c.next), (c.next = m));
      }
      ((e.baseQueue = s = c), (i.pending = null));
    }
    if (((c = t.baseState), s === null)) t.memoizedState = c;
    else {
      e = s.next;
      var y = (m = null),
        _ = null,
        R = e,
        j = !1;
      do {
        var H = R.lane & -536870913;
        if (H !== R.lane ? (Tt & H) === H : (la & H) === H) {
          var w = R.revertLane;
          if (w === 0)
            (_ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              H === Di && (j = !0));
          else if ((la & w) === w) {
            ((R = R.next), w === Di && (j = !0));
            continue;
          } else
            ((H = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              _ === null ? ((y = _ = H), (m = c)) : (_ = _.next = H),
              (Ot.lanes |= w),
              (da |= w));
          ((H = R.action),
            Xa && n(c, H),
            (c = R.hasEagerState ? R.eagerState : n(c, H)));
        } else
          ((w = {
            lane: H,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            _ === null ? ((y = _ = w), (m = c)) : (_ = _.next = w),
            (Ot.lanes |= H),
            (da |= H));
        R = R.next;
      } while (R !== null && R !== e);
      if (
        (_ === null ? (m = c) : (_.next = y),
        !we(c, t.memoizedState) && ((ie = !0), j && ((n = Ci), n !== null)))
      )
        throw n;
      ((t.memoizedState = c),
        (t.baseState = m),
        (t.baseQueue = _),
        (i.lastRenderedState = c));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function sc(t) {
    var e = Wt(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      c = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var m = (s = s.next);
      do ((c = t(c, m.action)), (m = m.next));
      while (m !== s);
      (we(c, e.memoizedState) || (ie = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, i];
  }
  function kh(t, e, n) {
    var i = Ot,
      s = Wt(),
      c = Ct;
    if (c) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var m = !we((jt || s).memoizedState, n);
    (m && ((s.memoizedState = n), (ie = !0)), (s = s.queue));
    var y = Kh.bind(null, i, s, t);
    if (
      (Yl(2048, 8, y, [t]),
      s.getSnapshot !== e || m || (Ft !== null && Ft.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ji(9, _u(), Xh.bind(null, i, s, n, e), null),
        Ht === null)
      )
        throw Error(u(349));
      c || (la & 124) !== 0 || Yh(i, e, n);
    }
    return n;
  }
  function Yh(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = Ot.updateQueue),
      e === null
        ? ((e = lc()), (Ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Xh(t, e, n, i) {
    ((e.value = n), (e.getSnapshot = i), Qh(e) && Zh(t));
  }
  function Kh(t, e, n) {
    return n(function () {
      Qh(e) && Zh(t);
    });
  }
  function Qh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !we(t, n);
    } catch {
      return !0;
    }
  }
  function Zh(t) {
    var e = Mi(t, 2);
    e !== null && je(e, t, 2);
  }
  function oc(t) {
    var e = Se();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Xa)) {
        Wn(!0);
        try {
          n();
        } finally {
          Wn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ph(t, e, n, i) {
    return ((t.baseState = n), uc(t, jt, typeof i == "function" ? i : Un));
  }
  function I0(t, e, n, i, s) {
    if (Ou(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          c.listeners.push(m);
        },
      };
      (x.T !== null ? n(!0) : (c.isTransition = !1),
        i(c),
        (n = e.pending),
        n === null
          ? ((c.next = e.pending = c), Jh(e, c))
          : ((c.next = n.next), (e.pending = n.next = c)));
    }
  }
  function Jh(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var c = x.T,
        m = {};
      x.T = m;
      try {
        var y = n(s, i),
          _ = x.S;
        (_ !== null && _(m, y), $h(t, e, y));
      } catch (R) {
        cc(t, e, R);
      } finally {
        x.T = c;
      }
    } else
      try {
        ((c = n(s, i)), $h(t, e, c));
      } catch (R) {
        cc(t, e, R);
      }
  }
  function $h(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Fh(t, e, i);
          },
          function (i) {
            return cc(t, e, i);
          },
        )
      : Fh(t, e, n);
  }
  function Fh(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      Wh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Jh(t, n))));
  }
  function cc(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = n), Wh(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function Wh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ih(t, e) {
    return e;
  }
  function tv(t, e) {
    if (Ct) {
      var n = Ht.formState;
      if (n !== null) {
        t: {
          var i = Ot;
          if (Ct) {
            if (Zt) {
              e: {
                for (var s = Zt, c = mn; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break e;
                  }
                  if (((s = an(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((Zt = an(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            Ga(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = Se()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ih,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = bv.bind(null, Ot, i)),
      (i.dispatch = n),
      (i = oc(!1)),
      (c = mc.bind(null, Ot, !1, i.queue)),
      (i = Se()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = I0.bind(null, Ot, s, c, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function ev(t) {
    var e = Wt();
    return nv(e, jt, t);
  }
  function nv(t, e, n) {
    if (
      ((e = uc(t, e, Ih)[0]),
      (t = bu(Un)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = kl(e);
      } catch (m) {
        throw m === Ll ? hu : m;
      }
    else i = e;
    e = Wt();
    var s = e.queue,
      c = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((Ot.flags |= 2048), ji(9, _u(), tb.bind(null, s, n), null)),
      [i, c, t]
    );
  }
  function tb(t, e) {
    t.action = e;
  }
  function av(t) {
    var e = Wt(),
      n = jt;
    if (n !== null) return nv(e, n, t);
    (Wt(), (e = e.memoizedState), (n = Wt()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = t), [e, i, !1]);
  }
  function ji(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = Ot.updateQueue),
      e === null && ((e = lc()), (Ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function _u() {
    return { destroy: void 0, resource: void 0 };
  }
  function iv() {
    return Wt().memoizedState;
  }
  function Su(t, e, n, i) {
    var s = Se();
    ((i = i === void 0 ? null : i),
      (Ot.flags |= t),
      (s.memoizedState = ji(1 | e, _u(), n, i)));
  }
  function Yl(t, e, n, i) {
    var s = Wt();
    i = i === void 0 ? null : i;
    var c = s.memoizedState.inst;
    jt !== null && i !== null && tc(i, jt.memoizedState.deps)
      ? (s.memoizedState = ji(e, c, n, i))
      : ((Ot.flags |= t), (s.memoizedState = ji(1 | e, c, n, i)));
  }
  function lv(t, e) {
    Su(8390656, 8, t, e);
  }
  function rv(t, e) {
    Yl(2048, 8, t, e);
  }
  function uv(t, e) {
    return Yl(4, 2, t, e);
  }
  function sv(t, e) {
    return Yl(4, 4, t, e);
  }
  function ov(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function cv(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), Yl(4, 4, ov.bind(null, e, t), n));
  }
  function fc() {}
  function fv(t, e) {
    var n = Wt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && tc(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function dv(t, e) {
    var n = Wt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && tc(e, i[1])) return i[0];
    if (((i = t()), Xa)) {
      Wn(!0);
      try {
        t();
      } finally {
        Wn(!1);
      }
    }
    return ((n.memoizedState = [i, e]), i);
  }
  function dc(t, e, n) {
    return n === void 0 || (la & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = mm()), (Ot.lanes |= t), (da |= t), n);
  }
  function hv(t, e, n, i) {
    return we(n, e)
      ? n
      : zi.current !== null
        ? ((t = dc(t, n, i)), we(t, e) || (ie = !0), t)
        : (la & 42) === 0
          ? ((ie = !0), (t.memoizedState = n))
          : ((t = mm()), (Ot.lanes |= t), (da |= t), e);
  }
  function vv(t, e, n, i, s) {
    var c = q.p;
    q.p = c !== 0 && 8 > c ? c : 8;
    var m = x.T,
      y = {};
    ((x.T = y), mc(t, !1, e, n));
    try {
      var _ = s(),
        R = x.S;
      if (
        (R !== null && R(y, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var j = $0(_, i);
        Xl(t, e, j, Ue(t));
      } else Xl(t, e, i, Ue(t));
    } catch (H) {
      Xl(t, e, { then: function () {}, status: "rejected", reason: H }, Ue());
    } finally {
      ((q.p = c), (x.T = m));
    }
  }
  function eb() {}
  function hc(t, e, n, i) {
    if (t.tag !== 5) throw Error(u(476));
    var s = mv(t).queue;
    vv(
      t,
      s,
      e,
      B,
      n === null
        ? eb
        : function () {
            return (pv(t), n(i));
          },
    );
  }
  function mv(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: B,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Un,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function pv(t) {
    var e = mv(t).next.queue;
    Xl(t, e, {}, Ue());
  }
  function vc() {
    return de(sr);
  }
  function gv() {
    return Wt().memoizedState;
  }
  function yv() {
    return Wt().memoizedState;
  }
  function nb(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ue();
          t = aa(n);
          var i = ia(e, t, n);
          (i !== null && (je(i, e, n), Vl(i, e, n)),
            (e = { cache: Xo() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function ab(t, e, n) {
    var i = Ue();
    ((n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ou(t)
        ? _v(e, n)
        : ((n = Uo(t, e, n, i)), n !== null && (je(n, t, i), Sv(n, e, i))));
  }
  function bv(t, e, n) {
    var i = Ue();
    Xl(t, e, n, i);
  }
  function Xl(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ou(t)) _v(e, s);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var m = e.lastRenderedState,
            y = c(m, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), we(y, m)))
            return (lu(t, e, s, 0), Ht === null && iu(), !1);
        } catch {
        } finally {
        }
      if (((n = Uo(t, e, s, i)), n !== null))
        return (je(n, t, i), Sv(n, e, i), !0);
    }
    return !1;
  }
  function mc(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Zc(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ou(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = Uo(t, n, i, 2)), e !== null && je(e, t, 2));
  }
  function Ou(t) {
    var e = t.alternate;
    return t === Ot || (e !== null && e === Ot);
  }
  function _v(t, e) {
    Ni = pu = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function Sv(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), wd(t, n));
    }
  }
  var Au = {
      readContext: de,
      use: yu,
      useCallback: Jt,
      useContext: Jt,
      useEffect: Jt,
      useImperativeHandle: Jt,
      useLayoutEffect: Jt,
      useInsertionEffect: Jt,
      useMemo: Jt,
      useReducer: Jt,
      useRef: Jt,
      useState: Jt,
      useDebugValue: Jt,
      useDeferredValue: Jt,
      useTransition: Jt,
      useSyncExternalStore: Jt,
      useId: Jt,
      useHostTransitionStatus: Jt,
      useFormState: Jt,
      useActionState: Jt,
      useOptimistic: Jt,
      useMemoCache: Jt,
      useCacheRefresh: Jt,
    },
    Ov = {
      readContext: de,
      use: yu,
      useCallback: function (t, e) {
        return ((Se().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: de,
      useEffect: lv,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          Su(4194308, 4, ov.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return Su(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Su(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = Se();
        e = e === void 0 ? null : e;
        var i = t();
        if (Xa) {
          Wn(!0);
          try {
            t();
          } finally {
            Wn(!1);
          }
        }
        return ((n.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, n) {
        var i = Se();
        if (n !== void 0) {
          var s = n(e);
          if (Xa) {
            Wn(!0);
            try {
              n(e);
            } finally {
              Wn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = ab.bind(null, Ot, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Se();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = oc(t);
        var e = t.queue,
          n = bv.bind(null, Ot, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: fc,
      useDeferredValue: function (t, e) {
        var n = Se();
        return dc(n, t, e);
      },
      useTransition: function () {
        var t = oc(!1);
        return (
          (t = vv.bind(null, Ot, t.queue, !0, !1)),
          (Se().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = Ot,
          s = Se();
        if (Ct) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Ht === null)) throw Error(u(349));
          (Tt & 124) !== 0 || Yh(i, e, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: e };
        return (
          (s.queue = c),
          lv(Kh.bind(null, i, c, t), [t]),
          (i.flags |= 2048),
          ji(9, _u(), Xh.bind(null, i, c, n, e), null),
          n
        );
      },
      useId: function () {
        var t = Se(),
          e = Ht.identifierPrefix;
        if (Ct) {
          var n = Cn,
            i = Dn;
          ((n = (i & ~(1 << (32 - Re(i) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = gu++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»"));
        } else ((n = F0++), (e = "«" + e + "r" + n.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: vc,
      useFormState: tv,
      useActionState: tv,
      useOptimistic: function (t) {
        var e = Se();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = mc.bind(null, Ot, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: rc,
      useCacheRefresh: function () {
        return (Se().memoizedState = nb.bind(null, Ot));
      },
    },
    Av = {
      readContext: de,
      use: yu,
      useCallback: fv,
      useContext: de,
      useEffect: rv,
      useImperativeHandle: cv,
      useInsertionEffect: uv,
      useLayoutEffect: sv,
      useMemo: dv,
      useReducer: bu,
      useRef: iv,
      useState: function () {
        return bu(Un);
      },
      useDebugValue: fc,
      useDeferredValue: function (t, e) {
        var n = Wt();
        return hv(n, jt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = bu(Un)[0],
          e = Wt().memoizedState;
        return [typeof t == "boolean" ? t : kl(t), e];
      },
      useSyncExternalStore: kh,
      useId: gv,
      useHostTransitionStatus: vc,
      useFormState: ev,
      useActionState: ev,
      useOptimistic: function (t, e) {
        var n = Wt();
        return Ph(n, jt, t, e);
      },
      useMemoCache: rc,
      useCacheRefresh: yv,
    },
    ib = {
      readContext: de,
      use: yu,
      useCallback: fv,
      useContext: de,
      useEffect: rv,
      useImperativeHandle: cv,
      useInsertionEffect: uv,
      useLayoutEffect: sv,
      useMemo: dv,
      useReducer: sc,
      useRef: iv,
      useState: function () {
        return sc(Un);
      },
      useDebugValue: fc,
      useDeferredValue: function (t, e) {
        var n = Wt();
        return jt === null ? dc(n, t, e) : hv(n, jt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = sc(Un)[0],
          e = Wt().memoizedState;
        return [typeof t == "boolean" ? t : kl(t), e];
      },
      useSyncExternalStore: kh,
      useId: gv,
      useHostTransitionStatus: vc,
      useFormState: av,
      useActionState: av,
      useOptimistic: function (t, e) {
        var n = Wt();
        return jt !== null
          ? Ph(n, jt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: rc,
      useCacheRefresh: yv,
    },
    Li = null,
    Kl = 0;
  function Eu(t) {
    var e = Kl;
    return ((Kl += 1), Li === null && (Li = []), Uh(Li, t, e));
  }
  function Ql(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function xu(t, e) {
    throw e.$$typeof === b
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Ev(t) {
    var e = t._init;
    return e(t._payload);
  }
  function xv(t) {
    function e(E, A) {
      if (t) {
        var M = E.deletions;
        M === null ? ((E.deletions = [A]), (E.flags |= 16)) : M.push(A);
      }
    }
    function n(E, A) {
      if (!t) return null;
      for (; A !== null; ) (e(E, A), (A = A.sibling));
      return null;
    }
    function i(E) {
      for (var A = new Map(); E !== null; )
        (E.key !== null ? A.set(E.key, E) : A.set(E.index, E), (E = E.sibling));
      return A;
    }
    function s(E, A) {
      return ((E = wn(E, A)), (E.index = 0), (E.sibling = null), E);
    }
    function c(E, A, M) {
      return (
        (E.index = M),
        t
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((E.flags |= 67108866), A) : M)
              : ((E.flags |= 67108866), A))
          : ((E.flags |= 1048576), A)
      );
    }
    function m(E) {
      return (t && E.alternate === null && (E.flags |= 67108866), E);
    }
    function y(E, A, M, L) {
      return A === null || A.tag !== 6
        ? ((A = Lo(M, E.mode, L)), (A.return = E), A)
        : ((A = s(A, M)), (A.return = E), A);
    }
    function _(E, A, M, L) {
      var at = M.type;
      return at === N
        ? j(E, A, M.props.children, L, M.key)
        : A !== null &&
            (A.elementType === at ||
              (typeof at == "object" &&
                at !== null &&
                at.$$typeof === T &&
                Ev(at) === A.type))
          ? ((A = s(A, M.props)), Ql(A, M), (A.return = E), A)
          : ((A = uu(M.type, M.key, M.props, null, E.mode, L)),
            Ql(A, M),
            (A.return = E),
            A);
    }
    function R(E, A, M, L) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = Bo(M, E.mode, L)), (A.return = E), A)
        : ((A = s(A, M.children || [])), (A.return = E), A);
    }
    function j(E, A, M, L, at) {
      return A === null || A.tag !== 7
        ? ((A = La(M, E.mode, L, at)), (A.return = E), A)
        : ((A = s(A, M)), (A.return = E), A);
    }
    function H(E, A, M) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = Lo("" + A, E.mode, M)), (A.return = E), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case O:
            return (
              (M = uu(A.type, A.key, A.props, null, E.mode, M)),
              Ql(M, A),
              (M.return = E),
              M
            );
          case C:
            return ((A = Bo(A, E.mode, M)), (A.return = E), A);
          case T:
            var L = A._init;
            return ((A = L(A._payload)), H(E, A, M));
        }
        if (ut(A) || k(A))
          return ((A = La(A, E.mode, M, null)), (A.return = E), A);
        if (typeof A.then == "function") return H(E, Eu(A), M);
        if (A.$$typeof === tt) return H(E, fu(E, A), M);
        xu(E, A);
      }
      return null;
    }
    function w(E, A, M, L) {
      var at = A !== null ? A.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return at !== null ? null : y(E, A, "" + M, L);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case O:
            return M.key === at ? _(E, A, M, L) : null;
          case C:
            return M.key === at ? R(E, A, M, L) : null;
          case T:
            return ((at = M._init), (M = at(M._payload)), w(E, A, M, L));
        }
        if (ut(M) || k(M)) return at !== null ? null : j(E, A, M, L, null);
        if (typeof M.then == "function") return w(E, A, Eu(M), L);
        if (M.$$typeof === tt) return w(E, A, fu(E, M), L);
        xu(E, M);
      }
      return null;
    }
    function D(E, A, M, L, at) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((E = E.get(M) || null), y(A, E, "" + L, at));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case O:
            return (
              (E = E.get(L.key === null ? M : L.key) || null),
              _(A, E, L, at)
            );
          case C:
            return (
              (E = E.get(L.key === null ? M : L.key) || null),
              R(A, E, L, at)
            );
          case T:
            var Et = L._init;
            return ((L = Et(L._payload)), D(E, A, M, L, at));
        }
        if (ut(L) || k(L))
          return ((E = E.get(M) || null), j(A, E, L, at, null));
        if (typeof L.then == "function") return D(E, A, M, Eu(L), at);
        if (L.$$typeof === tt) return D(E, A, M, fu(A, L), at);
        xu(A, L);
      }
      return null;
    }
    function pt(E, A, M, L) {
      for (
        var at = null, Et = null, ot = A, vt = (A = 0), re = null;
        ot !== null && vt < M.length;
        vt++
      ) {
        ot.index > vt ? ((re = ot), (ot = null)) : (re = ot.sibling);
        var wt = w(E, ot, M[vt], L);
        if (wt === null) {
          ot === null && (ot = re);
          break;
        }
        (t && ot && wt.alternate === null && e(E, ot),
          (A = c(wt, A, vt)),
          Et === null ? (at = wt) : (Et.sibling = wt),
          (Et = wt),
          (ot = re));
      }
      if (vt === M.length) return (n(E, ot), Ct && Va(E, vt), at);
      if (ot === null) {
        for (; vt < M.length; vt++)
          ((ot = H(E, M[vt], L)),
            ot !== null &&
              ((A = c(ot, A, vt)),
              Et === null ? (at = ot) : (Et.sibling = ot),
              (Et = ot)));
        return (Ct && Va(E, vt), at);
      }
      for (ot = i(ot); vt < M.length; vt++)
        ((re = D(ot, E, vt, M[vt], L)),
          re !== null &&
            (t &&
              re.alternate !== null &&
              ot.delete(re.key === null ? vt : re.key),
            (A = c(re, A, vt)),
            Et === null ? (at = re) : (Et.sibling = re),
            (Et = re)));
      return (
        t &&
          ot.forEach(function (Sa) {
            return e(E, Sa);
          }),
        Ct && Va(E, vt),
        at
      );
    }
    function ht(E, A, M, L) {
      if (M == null) throw Error(u(151));
      for (
        var at = null,
          Et = null,
          ot = A,
          vt = (A = 0),
          re = null,
          wt = M.next();
        ot !== null && !wt.done;
        vt++, wt = M.next()
      ) {
        ot.index > vt ? ((re = ot), (ot = null)) : (re = ot.sibling);
        var Sa = w(E, ot, wt.value, L);
        if (Sa === null) {
          ot === null && (ot = re);
          break;
        }
        (t && ot && Sa.alternate === null && e(E, ot),
          (A = c(Sa, A, vt)),
          Et === null ? (at = Sa) : (Et.sibling = Sa),
          (Et = Sa),
          (ot = re));
      }
      if (wt.done) return (n(E, ot), Ct && Va(E, vt), at);
      if (ot === null) {
        for (; !wt.done; vt++, wt = M.next())
          ((wt = H(E, wt.value, L)),
            wt !== null &&
              ((A = c(wt, A, vt)),
              Et === null ? (at = wt) : (Et.sibling = wt),
              (Et = wt)));
        return (Ct && Va(E, vt), at);
      }
      for (ot = i(ot); !wt.done; vt++, wt = M.next())
        ((wt = D(ot, E, vt, wt.value, L)),
          wt !== null &&
            (t &&
              wt.alternate !== null &&
              ot.delete(wt.key === null ? vt : wt.key),
            (A = c(wt, A, vt)),
            Et === null ? (at = wt) : (Et.sibling = wt),
            (Et = wt)));
      return (
        t &&
          ot.forEach(function (l_) {
            return e(E, l_);
          }),
        Ct && Va(E, vt),
        at
      );
    }
    function Bt(E, A, M, L) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === N &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case O:
            t: {
              for (var at = M.key; A !== null; ) {
                if (A.key === at) {
                  if (((at = M.type), at === N)) {
                    if (A.tag === 7) {
                      (n(E, A.sibling),
                        (L = s(A, M.props.children)),
                        (L.return = E),
                        (E = L));
                      break t;
                    }
                  } else if (
                    A.elementType === at ||
                    (typeof at == "object" &&
                      at !== null &&
                      at.$$typeof === T &&
                      Ev(at) === A.type)
                  ) {
                    (n(E, A.sibling),
                      (L = s(A, M.props)),
                      Ql(L, M),
                      (L.return = E),
                      (E = L));
                    break t;
                  }
                  n(E, A);
                  break;
                } else e(E, A);
                A = A.sibling;
              }
              M.type === N
                ? ((L = La(M.props.children, E.mode, L, M.key)),
                  (L.return = E),
                  (E = L))
                : ((L = uu(M.type, M.key, M.props, null, E.mode, L)),
                  Ql(L, M),
                  (L.return = E),
                  (E = L));
            }
            return m(E);
          case C:
            t: {
              for (at = M.key; A !== null; ) {
                if (A.key === at)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    (n(E, A.sibling),
                      (L = s(A, M.children || [])),
                      (L.return = E),
                      (E = L));
                    break t;
                  } else {
                    n(E, A);
                    break;
                  }
                else e(E, A);
                A = A.sibling;
              }
              ((L = Bo(M, E.mode, L)), (L.return = E), (E = L));
            }
            return m(E);
          case T:
            return ((at = M._init), (M = at(M._payload)), Bt(E, A, M, L));
        }
        if (ut(M)) return pt(E, A, M, L);
        if (k(M)) {
          if (((at = k(M)), typeof at != "function")) throw Error(u(150));
          return ((M = at.call(M)), ht(E, A, M, L));
        }
        if (typeof M.then == "function") return Bt(E, A, Eu(M), L);
        if (M.$$typeof === tt) return Bt(E, A, fu(E, M), L);
        xu(E, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          A !== null && A.tag === 6
            ? (n(E, A.sibling), (L = s(A, M)), (L.return = E), (E = L))
            : (n(E, A), (L = Lo(M, E.mode, L)), (L.return = E), (E = L)),
          m(E))
        : n(E, A);
    }
    return function (E, A, M, L) {
      try {
        Kl = 0;
        var at = Bt(E, A, M, L);
        return ((Li = null), at);
      } catch (ot) {
        if (ot === Ll || ot === hu) throw ot;
        var Et = De(29, ot, null, E.mode);
        return ((Et.lanes = L), (Et.return = E), Et);
      } finally {
      }
    };
  }
  var Bi = xv(!0),
    Mv = xv(!1),
    Qe = U(null),
    pn = null;
  function ra(t) {
    var e = t.alternate;
    (V(te, te.current & 1),
      V(Qe, t),
      pn === null &&
        (e === null || zi.current !== null || e.memoizedState !== null) &&
        (pn = t));
  }
  function Tv(t) {
    if (t.tag === 22) {
      if ((V(te, te.current), V(Qe, t), pn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (pn = t);
      }
    } else ua();
  }
  function ua() {
    (V(te, te.current), V(Qe, Qe.current));
  }
  function jn(t) {
    (K(Qe), pn === t && (pn = null), K(te));
  }
  var te = U(0);
  function Mu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || rf(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function pc(t, e, n, i) {
    ((e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var gc = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Ue(),
        s = aa(i);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = ia(t, s, i)),
        e !== null && (je(e, t, i), Vl(e, t, i)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Ue(),
        s = aa(i);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = ia(t, s, i)),
        e !== null && (je(e, t, i), Vl(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ue(),
        i = aa(n);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = ia(t, i, n)),
        e !== null && (je(e, t, n), Vl(e, t, n)));
    },
  };
  function Rv(t, e, n, i, s, c, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, c, m)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Rl(n, i) || !Rl(s, c)
          : !0
    );
  }
  function wv(t, e, n, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && gc.enqueueReplaceState(e, e.state, null));
  }
  function Ka(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var Tu =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Dv(t) {
    Tu(t);
  }
  function Cv(t) {
    console.error(t);
  }
  function zv(t) {
    Tu(t);
  }
  function Ru(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Nv(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function yc(t, e, n) {
    return (
      (n = aa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ru(t, e);
      }),
      n
    );
  }
  function Uv(t) {
    return ((t = aa(t)), (t.tag = 3), t);
  }
  function jv(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = i.value;
      ((t.payload = function () {
        return s(c);
      }),
        (t.callback = function () {
          Nv(e, n, i);
        }));
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        (Nv(e, n, i),
          typeof s != "function" &&
            (ha === null ? (ha = new Set([this])) : ha.add(this)));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function lb(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Nl(e, n, s, !0),
        (n = Qe.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              pn === null ? kc() : n.alternate === null && Pt === 0 && (Pt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === Zo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  Xc(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === Zo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  Xc(t, i, s)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (Xc(t, i, s), kc(), !1);
    }
    if (Ct)
      return (
        (e = Qe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Go && ((t = Error(u(422), { cause: i })), zl(ke(t, n))))
          : (i !== Go && ((e = Error(u(423), { cause: i })), zl(ke(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = ke(i, n)),
            (s = yc(t.stateNode, i, s)),
            $o(t, s),
            Pt !== 4 && (Pt = 2)),
        !1
      );
    var c = Error(u(520), { cause: i });
    if (
      ((c = ke(c, n)),
      Il === null ? (Il = [c]) : Il.push(c),
      Pt !== 4 && (Pt = 2),
      e === null)
    )
      return !0;
    ((i = ke(i, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = yc(n.stateNode, i, t)),
            $o(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (ha === null || !ha.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Uv(s)),
              jv(s, t, n, i),
              $o(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Lv = Error(u(461)),
    ie = !1;
  function ue(t, e, n, i) {
    e.child = t === null ? Mv(e, null, n, i) : Bi(e, t.child, n, i);
  }
  function Bv(t, e, n, i, s) {
    n = n.render;
    var c = e.ref;
    if ("ref" in i) {
      var m = {};
      for (var y in i) y !== "ref" && (m[y] = i[y]);
    } else m = i;
    return (
      ka(e),
      (i = ec(t, e, n, m, c, s)),
      (y = nc()),
      t !== null && !ie
        ? (ac(t, e, s), Ln(t, e, s))
        : (Ct && y && Vo(e), (e.flags |= 1), ue(t, e, i, s), e.child)
    );
  }
  function Vv(t, e, n, i, s) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" &&
        !jo(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = c), Hv(t, e, c, i, s))
        : ((t = uu(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Mc(t, s))) {
      var m = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Rl), n(m, i) && t.ref === e.ref)
      )
        return Ln(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = wn(c, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hv(t, e, n, i, s) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Rl(c, i) && t.ref === e.ref)
        if (((ie = !1), (e.pendingProps = i = c), Mc(t, s)))
          (t.flags & 131072) !== 0 && (ie = !0);
        else return ((e.lanes = t.lanes), Ln(t, e, s));
    }
    return bc(t, e, n, i, s);
  }
  function Gv(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      c = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((i = c !== null ? c.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, c = 0; s !== null; )
            ((c = c | s.lanes | s.childLanes), (s = s.sibling));
          e.childLanes = c & ~i;
        } else ((e.childLanes = 0), (e.child = null));
        return qv(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && du(e, c !== null ? c.cachePool : null),
          c !== null ? Hh(e, c) : Wo(),
          Tv(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          qv(t, e, c !== null ? c.baseLanes | n : n, n)
        );
    } else
      c !== null
        ? (du(e, c.cachePool), Hh(e, c), ua(), (e.memoizedState = null))
        : (t !== null && du(e, null), Wo(), ua());
    return (ue(t, e, s, n), e.child);
  }
  function qv(t, e, n, i) {
    var s = Qo();
    return (
      (s = s === null ? null : { parent: It._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && du(e, null),
      Wo(),
      Tv(e),
      t !== null && Nl(t, e, i, !0),
      null
    );
  }
  function wu(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function bc(t, e, n, i, s) {
    return (
      ka(e),
      (n = ec(t, e, n, i, void 0, s)),
      (i = nc()),
      t !== null && !ie
        ? (ac(t, e, s), Ln(t, e, s))
        : (Ct && i && Vo(e), (e.flags |= 1), ue(t, e, n, s), e.child)
    );
  }
  function kv(t, e, n, i, s, c) {
    return (
      ka(e),
      (e.updateQueue = null),
      (n = qh(e, i, n, s)),
      Gh(t),
      (i = nc()),
      t !== null && !ie
        ? (ac(t, e, c), Ln(t, e, c))
        : (Ct && i && Vo(e), (e.flags |= 1), ue(t, e, n, c), e.child)
    );
  }
  function Yv(t, e, n, i, s) {
    if ((ka(e), e.stateNode === null)) {
      var c = Ti,
        m = n.contextType;
      (typeof m == "object" && m !== null && (c = de(m)),
        (c = new n(i, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = gc),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = i),
        (c.state = e.memoizedState),
        (c.refs = {}),
        Po(e),
        (m = n.contextType),
        (c.context = typeof m == "object" && m !== null ? de(m) : Ti),
        (c.state = e.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (pc(e, n, m, i), (c.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((m = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          m !== c.state && gc.enqueueReplaceState(c, c.state, null),
          Gl(e, i, c, s),
          Hl(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      c = e.stateNode;
      var y = e.memoizedProps,
        _ = Ka(n, y);
      c.props = _;
      var R = c.context,
        j = n.contextType;
      ((m = Ti), typeof j == "object" && j !== null && (m = de(j)));
      var H = n.getDerivedStateFromProps;
      ((j =
        typeof H == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        j ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((y || R !== m) && wv(e, c, i, m)),
        (na = !1));
      var w = e.memoizedState;
      ((c.state = w),
        Gl(e, i, c, s),
        Hl(),
        (R = e.memoizedState),
        y || w !== R || na
          ? (typeof H == "function" && (pc(e, n, H, i), (R = e.memoizedState)),
            (_ = na || Rv(e, n, _, i, w, R, m))
              ? (j ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = R)),
            (c.props = i),
            (c.state = R),
            (c.context = m),
            (i = _))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1)));
    } else {
      ((c = e.stateNode),
        Jo(t, e),
        (m = e.memoizedProps),
        (j = Ka(n, m)),
        (c.props = j),
        (H = e.pendingProps),
        (w = c.context),
        (R = n.contextType),
        (_ = Ti),
        typeof R == "object" && R !== null && (_ = de(R)),
        (y = n.getDerivedStateFromProps),
        (R =
          typeof y == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m !== H || w !== _) && wv(e, c, i, _)),
        (na = !1),
        (w = e.memoizedState),
        (c.state = w),
        Gl(e, i, c, s),
        Hl());
      var D = e.memoizedState;
      m !== H ||
      w !== D ||
      na ||
      (t !== null && t.dependencies !== null && cu(t.dependencies))
        ? (typeof y == "function" && (pc(e, n, y, i), (D = e.memoizedState)),
          (j =
            na ||
            Rv(e, n, j, i, w, D, _) ||
            (t !== null && t.dependencies !== null && cu(t.dependencies)))
            ? (R ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(i, D, _),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(i, D, _)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (m === t.memoizedProps && w === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (m === t.memoizedProps && w === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = D)),
          (c.props = i),
          (c.state = D),
          (c.context = _),
          (i = j))
        : (typeof c.componentDidUpdate != "function" ||
            (m === t.memoizedProps && w === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (m === t.memoizedProps && w === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (c = i),
      wu(t, e),
      (i = (e.flags & 128) !== 0),
      c || i
        ? ((c = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = Bi(e, t.child, null, s)),
              (e.child = Bi(e, null, n, s)))
            : ue(t, e, n, s),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = Ln(t, e, s)),
      t
    );
  }
  function Xv(t, e, n, i) {
    return (Cl(), (e.flags |= 256), ue(t, e, n, i), e.child);
  }
  var _c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Sc(t) {
    return { baseLanes: t, cachePool: Ch() };
  }
  function Oc(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ze), t);
  }
  function Kv(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      c = (e.flags & 128) !== 0,
      m;
    if (
      ((m = c) ||
        (m =
          t !== null && t.memoizedState === null ? !1 : (te.current & 2) !== 0),
      m && ((s = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ct) {
        if ((s ? ra(e) : ua(), Ct)) {
          var y = Zt,
            _;
          if ((_ = y)) {
            t: {
              for (_ = y, y = mn; _.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (((_ = an(_.nextSibling)), _ === null)) {
                  y = null;
                  break t;
                }
              }
              y = _;
            }
            y !== null
              ? ((e.memoizedState = {
                  dehydrated: y,
                  treeContext: Ba !== null ? { id: Dn, overflow: Cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (_ = De(18, null, null, 0)),
                (_.stateNode = y),
                (_.return = e),
                (e.child = _),
                (me = e),
                (Zt = null),
                (_ = !0))
              : (_ = !1);
          }
          _ || Ga(e);
        }
        if (
          ((y = e.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return (rf(y) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        jn(e);
      }
      return (
        (y = i.children),
        (i = i.fallback),
        s
          ? (ua(),
            (s = e.mode),
            (y = Du({ mode: "hidden", children: y }, s)),
            (i = La(i, s, n, null)),
            (y.return = e),
            (i.return = e),
            (y.sibling = i),
            (e.child = y),
            (s = e.child),
            (s.memoizedState = Sc(n)),
            (s.childLanes = Oc(t, m, n)),
            (e.memoizedState = _c),
            i)
          : (ra(e), Ac(e, y))
      );
    }
    if (
      ((_ = t.memoizedState), _ !== null && ((y = _.dehydrated), y !== null))
    ) {
      if (c)
        e.flags & 256
          ? (ra(e), (e.flags &= -257), (e = Ec(t, e, n)))
          : e.memoizedState !== null
            ? (ua(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (ua(),
              (s = i.fallback),
              (y = e.mode),
              (i = Du({ mode: "visible", children: i.children }, y)),
              (s = La(s, y, n, null)),
              (s.flags |= 2),
              (i.return = e),
              (s.return = e),
              (i.sibling = s),
              (e.child = i),
              Bi(e, t.child, null, n),
              (i = e.child),
              (i.memoizedState = Sc(n)),
              (i.childLanes = Oc(t, m, n)),
              (e.memoizedState = _c),
              (e = s));
      else if ((ra(e), rf(y))) {
        if (((m = y.nextSibling && y.nextSibling.dataset), m)) var R = m.dgst;
        ((m = R),
          (i = Error(u(419))),
          (i.stack = ""),
          (i.digest = m),
          zl({ value: i, source: null, stack: null }),
          (e = Ec(t, e, n)));
      } else if (
        (ie || Nl(t, e, n, !1), (m = (n & t.childLanes) !== 0), ie || m)
      ) {
        if (
          ((m = Ht),
          m !== null &&
            ((i = n & -n),
            (i = (i & 42) !== 0 ? 1 : lo(i)),
            (i = (i & (m.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== _.retryLane))
        )
          throw ((_.retryLane = i), Mi(t, i), je(m, t, i), Lv);
        (y.data === "$?" || kc(), (e = Ec(t, e, n)));
      } else
        y.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = _.treeContext),
            (Zt = an(y.nextSibling)),
            (me = e),
            (Ct = !0),
            (Ha = null),
            (mn = !1),
            t !== null &&
              ((Xe[Ke++] = Dn),
              (Xe[Ke++] = Cn),
              (Xe[Ke++] = Ba),
              (Dn = t.id),
              (Cn = t.overflow),
              (Ba = e)),
            (e = Ac(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (ua(),
        (s = i.fallback),
        (y = e.mode),
        (_ = t.child),
        (R = _.sibling),
        (i = wn(_, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = _.subtreeFlags & 65011712),
        R !== null ? (s = wn(R, s)) : ((s = La(s, y, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Sc(n))
          : ((_ = y.cachePool),
            _ !== null
              ? ((R = It._currentValue),
                (_ = _.parent !== R ? { parent: R, pool: R } : _))
              : (_ = Ch()),
            (y = { baseLanes: y.baseLanes | n, cachePool: _ })),
        (s.memoizedState = y),
        (s.childLanes = Oc(t, m, n)),
        (e.memoizedState = _c),
        i)
      : (ra(e),
        (n = t.child),
        (t = n.sibling),
        (n = wn(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((m = e.deletions),
          m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Ac(t, e) {
    return (
      (e = Du({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Du(t, e) {
    return (
      (t = De(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Ec(t, e, n) {
    return (
      Bi(e, t.child, null, n),
      (t = Ac(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Qv(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), ko(t.return, e, n));
  }
  function xc(t, e, n, i, s) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = n),
        (c.tailMode = s));
  }
  function Zv(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      c = i.tail;
    if ((ue(t, e, i.children, n), (i = te.current), (i & 2) !== 0))
      ((i = (i & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Qv(t, n, e);
          else if (t.tag === 19) Qv(t, n, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      i &= 1;
    }
    switch ((V(te, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && Mu(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          xc(e, !1, s, n, c));
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Mu(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        xc(e, !0, n, null, c);
        break;
      case "together":
        xc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ln(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (da |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Nl(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = wn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        ((t = t.sibling),
          (n = n.sibling = wn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Mc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && cu(t)));
  }
  function rb(t, e, n) {
    switch (e.tag) {
      case 3:
        (ct(e, e.stateNode.containerInfo),
          ea(e, It, t.memoizedState.cache),
          Cl());
        break;
      case 27:
      case 5:
        ye(e);
        break;
      case 4:
        ct(e, e.stateNode.containerInfo);
        break;
      case 10:
        ea(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (ra(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Kv(t, e, n)
              : (ra(e), (t = Ln(t, e, n)), t !== null ? t.sibling : null);
        ra(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Nl(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Zv(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          V(te, te.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Gv(t, e, n));
      case 24:
        ea(e, It, t.memoizedState.cache);
    }
    return Ln(t, e, n);
  }
  function Pv(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) ie = !0;
      else {
        if (!Mc(t, n) && (e.flags & 128) === 0) return ((ie = !1), rb(t, e, n));
        ie = (t.flags & 131072) !== 0;
      }
    else ((ie = !1), Ct && (e.flags & 1048576) !== 0 && Eh(e, ou, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            jo(i)
              ? ((t = Ka(i, t)), (e.tag = 1), (e = Yv(null, e, i, t, n)))
              : ((e.tag = 0), (e = bc(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === st)) {
                ((e.tag = 11), (e = Bv(null, e, i, t, n)));
                break t;
              } else if (s === W) {
                ((e.tag = 14), (e = Vv(null, e, i, t, n)));
                break t;
              }
            }
            throw ((e = St(i) || i), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return bc(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((i = e.type), (s = Ka(i, e.pendingProps)), Yv(t, e, i, s, n));
      case 3:
        t: {
          if ((ct(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          i = e.pendingProps;
          var c = e.memoizedState;
          ((s = c.element), Jo(t, e), Gl(e, i, null, n));
          var m = e.memoizedState;
          if (
            ((i = m.cache),
            ea(e, It, i),
            i !== c.cache && Yo(e, [It], n, !0),
            Hl(),
            (i = m.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: i, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = Xv(t, e, i, n);
              break t;
            } else if (i !== s) {
              ((s = ke(Error(u(424)), e)), zl(s), (e = Xv(t, e, i, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Zt = an(t.firstChild),
                  me = e,
                  Ct = !0,
                  Ha = null,
                  mn = !0,
                  n = Mv(e, null, i, n),
                  e.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Cl(), i === s)) {
              e = Ln(t, e, n);
              break t;
            }
            ue(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          wu(t, e),
          t === null
            ? (n = Wm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ct ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Xu(nt.current).createElement(n)),
                (i[fe] = e),
                (i[be] = t),
                oe(i, n, t),
                ae(i),
                (e.stateNode = i))
            : (e.memoizedState = Wm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ye(e),
          t === null &&
            Ct &&
            ((i = e.stateNode = Jm(e.type, e.pendingProps, nt.current)),
            (me = e),
            (mn = !0),
            (s = Zt),
            pa(e.type) ? ((uf = s), (Zt = an(i.firstChild))) : (Zt = s)),
          ue(t, e, e.pendingProps.children, n),
          wu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ct &&
            ((s = i = Zt) &&
              ((i = Ub(i, e.type, e.pendingProps, mn)),
              i !== null
                ? ((e.stateNode = i),
                  (me = e),
                  (Zt = an(i.firstChild)),
                  (mn = !1),
                  (s = !0))
                : (s = !1)),
            s || Ga(e)),
          ye(e),
          (s = e.type),
          (c = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (i = c.children),
          nf(s, c) ? (i = null) : m !== null && nf(s, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = ec(t, e, W0, null, null, n)), (sr._currentValue = s)),
          wu(t, e),
          ue(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ct &&
            ((t = n = Zt) &&
              ((n = jb(n, e.pendingProps, mn)),
              n !== null
                ? ((e.stateNode = n), (me = e), (Zt = null), (t = !0))
                : (t = !1)),
            t || Ga(e)),
          null
        );
      case 13:
        return Kv(t, e, n);
      case 4:
        return (
          ct(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = Bi(e, null, i, n)) : ue(t, e, i, n),
          e.child
        );
      case 11:
        return Bv(t, e, e.type, e.pendingProps, n);
      case 7:
        return (ue(t, e, e.pendingProps, n), e.child);
      case 8:
        return (ue(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (ue(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (i = e.pendingProps),
          ea(e, e.type, i.value),
          ue(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          ka(e),
          (s = de(s)),
          (i = i(s)),
          (e.flags |= 1),
          ue(t, e, i, n),
          e.child
        );
      case 14:
        return Vv(t, e, e.type, e.pendingProps, n);
      case 15:
        return Hv(t, e, e.type, e.pendingProps, n);
      case 19:
        return Zv(t, e, n);
      case 31:
        return (
          (i = e.pendingProps),
          (n = e.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((n = Du(i, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = wn(t.child, i)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Gv(t, e, n);
      case 24:
        return (
          ka(e),
          (i = de(It)),
          t === null
            ? ((s = Qo()),
              s === null &&
                ((s = Ht),
                (c = Xo()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= n),
                (s = c)),
              (e.memoizedState = { parent: i, cache: s }),
              Po(e),
              ea(e, It, s))
            : ((t.lanes & n) !== 0 && (Jo(t, e), Gl(e, null, null, n), Hl()),
              (s = t.memoizedState),
              (c = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  ea(e, It, i))
                : ((i = c.cache),
                  ea(e, It, i),
                  i !== s.cache && Yo(e, [It], n, !0))),
          ue(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function Bn(t) {
    t.flags |= 4;
  }
  function Jv(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ap(e))) {
      if (
        ((e = Qe.current),
        e !== null &&
          ((Tt & 4194048) === Tt
            ? pn !== null
            : ((Tt & 62914560) !== Tt && (Tt & 536870912) === 0) || e !== pn))
      )
        throw ((Bl = Zo), zh);
      t.flags |= 8192;
    }
  }
  function Cu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Td() : 536870912), (t.lanes |= e), (qi |= e)));
  }
  function Zl(t, e) {
    if (!Ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = n), e);
  }
  function ub(t, e, n) {
    var i = e.pendingProps;
    switch ((Ho(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Kt(e), null);
      case 1:
        return (Kt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          Nn(It),
          zt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Dl(e)
              ? Bn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Th())),
          Kt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (Bn(e),
              n !== null ? (Kt(e), Jv(e, n)) : (Kt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (Bn(e), Kt(e), Jv(e, n))
                : (Kt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== i && Bn(e), Kt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (ce(e), (n = nt.current));
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && Bn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(u(166));
            return (Kt(e), null);
          }
          ((t = Q.current),
            Dl(e) ? xh(e) : ((t = Jm(s, i, n)), (e.stateNode = t), Bn(e)));
        }
        return (Kt(e), null);
      case 5:
        if ((ce(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && Bn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(u(166));
            return (Kt(e), null);
          }
          if (((t = Q.current), Dl(e))) xh(e);
          else {
            switch (((s = Xu(nt.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((t = s.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size));
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            ((t[fe] = e), (t[be] = i));
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                ((s.child.return = s), (s = s.child));
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              ((s.sibling.return = s.return), (s = s.sibling));
            }
            e.stateNode = t;
            t: switch ((oe(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Bn(e);
          }
        }
        return (Kt(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && Bn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = nt.current), Dl(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = me),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[fe] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                km(t.nodeValue, n)
              )),
              t || Ga(e));
          } else
            ((t = Xu(t).createTextNode(i)), (t[fe] = e), (e.stateNode = t));
        }
        return (Kt(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Dl(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(u(317));
              s[fe] = e;
            } else
              (Cl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Kt(e), (s = !1));
          } else
            ((s = Th()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (jn(e), e) : (jn(e), null);
        }
        if ((jn(e), (e.flags & 128) !== 0)) return ((e.lanes = n), e);
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          ((i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool));
          var c = null;
          (i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (c = i.memoizedState.cachePool.pool),
            c !== s && (i.flags |= 2048));
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Cu(e, e.updateQueue),
          Kt(e),
          null
        );
      case 4:
        return (zt(), t === null && Fc(e.stateNode.containerInfo), Kt(e), null);
      case 10:
        return (Nn(e.type), Kt(e), null);
      case 19:
        if ((K(te), (s = e.memoizedState), s === null)) return (Kt(e), null);
        if (((i = (e.flags & 128) !== 0), (c = s.rendering), c === null))
          if (i) Zl(s, !1);
          else {
            if (Pt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Mu(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      Zl(s, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      Cu(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    (Ah(n, t), (n = n.sibling));
                  return (V(te, (te.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Yt() > Uu &&
              ((e.flags |= 128), (i = !0), Zl(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = Mu(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Cu(e, t),
                Zl(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ct)
              )
                return (Kt(e), null);
            } else
              2 * Yt() - s.renderingStartTime > Uu &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), Zl(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = s.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (s.last = c));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Yt()),
            (e.sibling = null),
            (t = te.current),
            V(te, i ? (t & 1) | 2 : t & 1),
            e)
          : (Kt(e), null);
      case 22:
      case 23:
        return (
          jn(e),
          Io(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Kt(e),
          (n = e.updateQueue),
          n !== null && Cu(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && K(Ya),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Nn(It),
          Kt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function sb(t, e) {
    switch ((Ho(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Nn(It),
          zt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ce(e), null);
      case 13:
        if (
          (jn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          Cl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (K(te), null);
      case 4:
        return (zt(), null);
      case 10:
        return (Nn(e.type), null);
      case 22:
      case 23:
        return (
          jn(e),
          Io(),
          t !== null && K(Ya),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Nn(It), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $v(t, e) {
    switch ((Ho(e), e.tag)) {
      case 3:
        (Nn(It), zt());
        break;
      case 26:
      case 27:
      case 5:
        ce(e);
        break;
      case 4:
        zt();
        break;
      case 13:
        jn(e);
        break;
      case 19:
        K(te);
        break;
      case 10:
        Nn(e.type);
        break;
      case 22:
      case 23:
        (jn(e), Io(), t !== null && K(Ya));
        break;
      case 24:
        Nn(It);
    }
  }
  function Pl(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var c = n.create,
              m = n.inst;
            ((i = c()), (m.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Vt(e, e.return, y);
    }
  }
  function sa(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        i = c;
        do {
          if ((i.tag & t) === t) {
            var m = i.inst,
              y = m.destroy;
            if (y !== void 0) {
              ((m.destroy = void 0), (s = e));
              var _ = n,
                R = y;
              try {
                R();
              } catch (j) {
                Vt(s, _, j);
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (j) {
      Vt(e, e.return, j);
    }
  }
  function Fv(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Vh(e, n);
      } catch (i) {
        Vt(t, t.return, i);
      }
    }
  }
  function Wv(t, e, n) {
    ((n.props = Ka(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      Vt(t, e, i);
    }
  }
  function Jl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Vt(t, e, s);
    }
  }
  function gn(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Vt(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Vt(t, e, s);
        }
      else n.current = null;
  }
  function Iv(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Vt(t, t.return, s);
    }
  }
  function Tc(t, e, n) {
    try {
      var i = t.stateNode;
      (wb(i, t.type, n, e), (i[be] = e));
    } catch (s) {
      Vt(t, t.return, s);
    }
  }
  function tm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && pa(t.type)) ||
      t.tag === 4
    );
  }
  function Rc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || tm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && pa(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function wc(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Yu)));
    else if (
      i !== 4 &&
      (i === 27 && pa(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (wc(t, e, n), t = t.sibling; t !== null; )
        (wc(t, e, n), (t = t.sibling));
  }
  function zu(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      i !== 4 &&
      (i === 27 && pa(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (zu(t, e, n), t = t.sibling; t !== null; )
        (zu(t, e, n), (t = t.sibling));
  }
  function em(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (oe(e, i, n), (e[fe] = t), (e[be] = n));
    } catch (c) {
      Vt(t, t.return, c);
    }
  }
  var Vn = !1,
    $t = !1,
    Dc = !1,
    nm = typeof WeakSet == "function" ? WeakSet : Set,
    le = null;
  function ob(t, e) {
    if (((t = t.containerInfo), (tf = $u), (t = hh(t)), Ro(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, c.nodeType);
            } catch {
              n = null;
              break t;
            }
            var m = 0,
              y = -1,
              _ = -1,
              R = 0,
              j = 0,
              H = t,
              w = null;
            e: for (;;) {
              for (
                var D;
                H !== n || (s !== 0 && H.nodeType !== 3) || (y = m + s),
                  H !== c || (i !== 0 && H.nodeType !== 3) || (_ = m + i),
                  H.nodeType === 3 && (m += H.nodeValue.length),
                  (D = H.firstChild) !== null;

              )
                ((w = H), (H = D));
              for (;;) {
                if (H === t) break e;
                if (
                  (w === n && ++R === s && (y = m),
                  w === c && ++j === i && (_ = m),
                  (D = H.nextSibling) !== null)
                )
                  break;
                ((H = w), (w = H.parentNode));
              }
              H = D;
            }
            n = y === -1 || _ === -1 ? null : { start: y, end: _ };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ef = { focusedElem: t, selectionRange: n }, $u = !1, le = e;
      le !== null;

    )
      if (
        ((e = le), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (le = t));
      else
        for (; le !== null; ) {
          switch (((e = le), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                ((t = void 0),
                  (n = e),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (i = n.stateNode));
                try {
                  var pt = Ka(n.type, s, n.elementType === n.type);
                  ((t = i.getSnapshotBeforeUpdate(pt, c)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (ht) {
                  Vt(n, n.return, ht);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  lf(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (le = t));
            break;
          }
          le = e.return;
        }
  }
  function am(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (oa(t, n), i & 4 && Pl(5, n));
        break;
      case 1:
        if ((oa(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              Vt(n, n.return, m);
            }
          else {
            var s = Ka(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Vt(n, n.return, m);
            }
          }
        (i & 64 && Fv(n), i & 512 && Jl(n, n.return));
        break;
      case 3:
        if ((oa(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Vh(t, e);
          } catch (m) {
            Vt(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && i & 4 && em(n);
      case 26:
      case 5:
        (oa(t, n), e === null && i & 4 && Iv(n), i & 512 && Jl(n, n.return));
        break;
      case 12:
        oa(t, n);
        break;
      case 13:
        (oa(t, n),
          i & 4 && rm(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = yb.bind(null, n)), Lb(t, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || Vn), !i)) {
          ((e = (e !== null && e.memoizedState !== null) || $t), (s = Vn));
          var c = $t;
          ((Vn = i),
            ($t = e) && !c ? ca(t, n, (n.subtreeFlags & 8772) !== 0) : oa(t, n),
            (Vn = s),
            ($t = c));
        }
        break;
      case 30:
        break;
      default:
        oa(t, n);
    }
  }
  function im(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), im(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && so(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Xt = null,
    Oe = !1;
  function Hn(t, e, n) {
    for (n = n.child; n !== null; ) (lm(t, e, n), (n = n.sibling));
  }
  function lm(t, e, n) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(pl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        ($t || gn(n, e),
          Hn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        $t || gn(n, e);
        var i = Xt,
          s = Oe;
        (pa(n.type) && ((Xt = n.stateNode), (Oe = !1)),
          Hn(t, e, n),
          ir(n.stateNode),
          (Xt = i),
          (Oe = s));
        break;
      case 5:
        $t || gn(n, e);
      case 6:
        if (
          ((i = Xt),
          (s = Oe),
          (Xt = null),
          Hn(t, e, n),
          (Xt = i),
          (Oe = s),
          Xt !== null)
        )
          if (Oe)
            try {
              (Xt.nodeType === 9
                ? Xt.body
                : Xt.nodeName === "HTML"
                  ? Xt.ownerDocument.body
                  : Xt
              ).removeChild(n.stateNode);
            } catch (c) {
              Vt(n, e, c);
            }
          else
            try {
              Xt.removeChild(n.stateNode);
            } catch (c) {
              Vt(n, e, c);
            }
        break;
      case 18:
        Xt !== null &&
          (Oe
            ? ((t = Xt),
              Zm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              dr(t))
            : Zm(Xt, n.stateNode));
        break;
      case 4:
        ((i = Xt),
          (s = Oe),
          (Xt = n.stateNode.containerInfo),
          (Oe = !0),
          Hn(t, e, n),
          (Xt = i),
          (Oe = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ($t || sa(2, n, e), $t || sa(4, n, e), Hn(t, e, n));
        break;
      case 1:
        ($t ||
          (gn(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Wv(n, e, i)),
          Hn(t, e, n));
        break;
      case 21:
        Hn(t, e, n);
        break;
      case 22:
        (($t = (i = $t) || n.memoizedState !== null), Hn(t, e, n), ($t = i));
        break;
      default:
        Hn(t, e, n);
    }
  }
  function rm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        dr(t);
      } catch (n) {
        Vt(e, e.return, n);
      }
  }
  function cb(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new nm()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new nm()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Cc(t, e) {
    var n = cb(t);
    e.forEach(function (i) {
      var s = bb.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function Ce(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          c = t,
          m = e,
          y = m;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (pa(y.type)) {
                ((Xt = y.stateNode), (Oe = !1));
                break t;
              }
              break;
            case 5:
              ((Xt = y.stateNode), (Oe = !1));
              break t;
            case 3:
            case 4:
              ((Xt = y.stateNode.containerInfo), (Oe = !0));
              break t;
          }
          y = y.return;
        }
        if (Xt === null) throw Error(u(160));
        (lm(c, m, s),
          (Xt = null),
          (Oe = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (um(e, t), (e = e.sibling));
  }
  var nn = null;
  function um(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ce(e, t),
          ze(t),
          i & 4 && (sa(3, t, t.return), Pl(3, t), sa(5, t, t.return)));
        break;
      case 1:
        (Ce(e, t),
          ze(t),
          i & 512 && ($t || n === null || gn(n, n.return)),
          i & 64 &&
            Vn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var s = nn;
        if (
          (Ce(e, t),
          ze(t),
          i & 512 && ($t || n === null || gn(n, n.return)),
          i & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  ((i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (i) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[bl] ||
                          c[fe] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(i)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title"),
                          )),
                        oe(c, i, n),
                        (c[fe] = t),
                        ae(c),
                        (i = c));
                      break t;
                    case "link":
                      var m = ep("link", "href", s).get(i + (n.href || ""));
                      if (m) {
                        for (var y = 0; y < m.length; y++)
                          if (
                            ((c = m[y]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(y, 1);
                            break e;
                          }
                      }
                      ((c = s.createElement(i)),
                        oe(c, i, n),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (m = ep("meta", "content", s).get(
                          i + (n.content || ""),
                        ))
                      ) {
                        for (y = 0; y < m.length; y++)
                          if (
                            ((c = m[y]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(y, 1);
                            break e;
                          }
                      }
                      ((c = s.createElement(i)),
                        oe(c, i, n),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  ((c[fe] = t), ae(c), (i = c));
                }
                t.stateNode = i;
              } else np(s, t.type, t.stateNode);
            else t.stateNode = tp(s, i, t.memoizedProps);
          else
            c !== i
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                i === null
                  ? np(s, t.type, t.stateNode)
                  : tp(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Tc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ce(e, t),
          ze(t),
          i & 512 && ($t || n === null || gn(n, n.return)),
          n !== null && i & 4 && Tc(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Ce(e, t),
          ze(t),
          i & 512 && ($t || n === null || gn(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            bi(s, "");
          } catch (D) {
            Vt(t, t.return, D);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Tc(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Dc = !0));
        break;
      case 6:
        if ((Ce(e, t), ze(t), i & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((i = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = i;
          } catch (D) {
            Vt(t, t.return, D);
          }
        }
        break;
      case 3:
        if (
          ((Zu = null),
          (s = nn),
          (nn = Ku(e.containerInfo)),
          Ce(e, t),
          (nn = s),
          ze(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            dr(e.containerInfo);
          } catch (D) {
            Vt(t, t.return, D);
          }
        Dc && ((Dc = !1), sm(t));
        break;
      case 4:
        ((i = nn),
          (nn = Ku(t.stateNode.containerInfo)),
          Ce(e, t),
          ze(t),
          (nn = i));
        break;
      case 12:
        (Ce(e, t), ze(t));
        break;
      case 13:
        (Ce(e, t),
          ze(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Bc = Yt()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Cc(t, i))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var _ = n !== null && n.memoizedState !== null,
          R = Vn,
          j = $t;
        if (
          ((Vn = R || s),
          ($t = j || _),
          Ce(e, t),
          ($t = j),
          (Vn = R),
          ze(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || _ || Vn || $t || Qa(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                _ = n = e;
                try {
                  if (((c = _.stateNode), s))
                    ((m = c.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none"));
                  else {
                    y = _.stateNode;
                    var H = _.memoizedProps.style,
                      w =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    y.style.display =
                      w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (D) {
                  Vt(_, _.return, D);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                _ = e;
                try {
                  _.stateNode.nodeValue = s ? "" : _.memoizedProps;
                } catch (D) {
                  Vt(_, _.return, D);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Cc(t, n))));
        break;
      case 19:
        (Ce(e, t),
          ze(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Cc(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ce(e, t), ze(t));
    }
  }
  function ze(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (tm(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              c = Rc(t);
            zu(t, c, s);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (bi(m, ""), (n.flags &= -33));
            var y = Rc(t);
            zu(t, y, m);
            break;
          case 3:
          case 4:
            var _ = n.stateNode.containerInfo,
              R = Rc(t);
            wc(t, R, _);
            break;
          default:
            throw Error(u(161));
        }
      } catch (j) {
        Vt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function sm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (sm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function oa(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (am(t, e.alternate, e), (e = e.sibling));
  }
  function Qa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (sa(4, e, e.return), Qa(e));
          break;
        case 1:
          gn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Wv(e, e.return, n),
            Qa(e));
          break;
        case 27:
          ir(e.stateNode);
        case 26:
        case 5:
          (gn(e, e.return), Qa(e));
          break;
        case 22:
          e.memoizedState === null && Qa(e);
          break;
        case 30:
          Qa(e);
          break;
        default:
          Qa(e);
      }
      t = t.sibling;
    }
  }
  function ca(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        c = e,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (ca(s, c, n), Pl(4, c));
          break;
        case 1:
          if (
            (ca(s, c, n),
            (i = c),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (R) {
              Vt(i, i.return, R);
            }
          if (((i = c), (s = i.updateQueue), s !== null)) {
            var y = i.stateNode;
            try {
              var _ = s.shared.hiddenCallbacks;
              if (_ !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < _.length; s++)
                  Bh(_[s], y);
            } catch (R) {
              Vt(i, i.return, R);
            }
          }
          (n && m & 64 && Fv(c), Jl(c, c.return));
          break;
        case 27:
          em(c);
        case 26:
        case 5:
          (ca(s, c, n), n && i === null && m & 4 && Iv(c), Jl(c, c.return));
          break;
        case 12:
          ca(s, c, n);
          break;
        case 13:
          (ca(s, c, n), n && m & 4 && rm(s, c));
          break;
        case 22:
          (c.memoizedState === null && ca(s, c, n), Jl(c, c.return));
          break;
        case 30:
          break;
        default:
          ca(s, c, n);
      }
      e = e.sibling;
    }
  }
  function zc(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ul(n)));
  }
  function Nc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ul(t)));
  }
  function yn(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (om(t, e, n, i), (e = e.sibling));
  }
  function om(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (yn(t, e, n, i), s & 2048 && Pl(9, e));
        break;
      case 1:
        yn(t, e, n, i);
        break;
      case 3:
        (yn(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ul(t))));
        break;
      case 12:
        if (s & 2048) {
          (yn(t, e, n, i), (t = e.stateNode));
          try {
            var c = e.memoizedProps,
              m = c.id,
              y = c.onPostCommit;
            typeof y == "function" &&
              y(
                m,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (_) {
            Vt(e, e.return, _);
          }
        } else yn(t, e, n, i);
        break;
      case 13:
        yn(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        ((c = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? yn(t, e, n, i)
              : $l(t, e)
            : c._visibility & 2
              ? yn(t, e, n, i)
              : ((c._visibility |= 2),
                Vi(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && zc(m, e));
        break;
      case 24:
        (yn(t, e, n, i), s & 2048 && Nc(e.alternate, e));
        break;
      default:
        yn(t, e, n, i);
    }
  }
  function Vi(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t,
        m = e,
        y = n,
        _ = i,
        R = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Vi(c, m, y, _, s), Pl(8, m));
          break;
        case 23:
          break;
        case 22:
          var j = m.stateNode;
          (m.memoizedState !== null
            ? j._visibility & 2
              ? Vi(c, m, y, _, s)
              : $l(c, m)
            : ((j._visibility |= 2), Vi(c, m, y, _, s)),
            s && R & 2048 && zc(m.alternate, m));
          break;
        case 24:
          (Vi(c, m, y, _, s), s && R & 2048 && Nc(m.alternate, m));
          break;
        default:
          Vi(c, m, y, _, s);
      }
      e = e.sibling;
    }
  }
  function $l(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            ($l(n, i), s & 2048 && zc(i.alternate, i));
            break;
          case 24:
            ($l(n, i), s & 2048 && Nc(i.alternate, i));
            break;
          default:
            $l(n, i);
        }
        e = e.sibling;
      }
  }
  var Fl = 8192;
  function Hi(t) {
    if (t.subtreeFlags & Fl)
      for (t = t.child; t !== null; ) (cm(t), (t = t.sibling));
  }
  function cm(t) {
    switch (t.tag) {
      case 26:
        (Hi(t),
          t.flags & Fl &&
            t.memoizedState !== null &&
            Jb(nn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Hi(t);
        break;
      case 3:
      case 4:
        var e = nn;
        ((nn = Ku(t.stateNode.containerInfo)), Hi(t), (nn = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Fl), (Fl = 16777216), Hi(t), (Fl = e))
            : Hi(t));
        break;
      default:
        Hi(t);
    }
  }
  function fm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Wl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((le = i), hm(i, t));
        }
      fm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (dm(t), (t = t.sibling));
  }
  function dm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Wl(t), t.flags & 2048 && sa(9, t, t.return));
        break;
      case 3:
        Wl(t);
        break;
      case 12:
        Wl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Nu(t))
          : Wl(t);
        break;
      default:
        Wl(t);
    }
  }
  function Nu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((le = i), hm(i, t));
        }
      fm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (sa(8, e, e.return), Nu(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Nu(e)));
          break;
        default:
          Nu(e);
      }
      t = t.sibling;
    }
  }
  function hm(t, e) {
    for (; le !== null; ) {
      var n = le;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ul(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (le = i));
      else
        t: for (n = t; le !== null; ) {
          i = le;
          var s = i.sibling,
            c = i.return;
          if ((im(i), i === n)) {
            le = null;
            break t;
          }
          if (s !== null) {
            ((s.return = c), (le = s));
            break t;
          }
          le = c;
        }
    }
  }
  var fb = {
      getCacheForType: function (t) {
        var e = de(It),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
    },
    db = typeof WeakMap == "function" ? WeakMap : Map,
    Nt = 0,
    Ht = null,
    xt = null,
    Tt = 0,
    Ut = 0,
    Ne = null,
    fa = !1,
    Gi = !1,
    Uc = !1,
    Gn = 0,
    Pt = 0,
    da = 0,
    Za = 0,
    jc = 0,
    Ze = 0,
    qi = 0,
    Il = null,
    Ae = null,
    Lc = !1,
    Bc = 0,
    Uu = 1 / 0,
    ju = null,
    ha = null,
    se = 0,
    va = null,
    ki = null,
    Yi = 0,
    Vc = 0,
    Hc = null,
    vm = null,
    tr = 0,
    Gc = null;
  function Ue() {
    if ((Nt & 2) !== 0 && Tt !== 0) return Tt & -Tt;
    if (x.T !== null) {
      var t = Di;
      return t !== 0 ? t : Zc();
    }
    return Dd();
  }
  function mm() {
    Ze === 0 && (Ze = (Tt & 536870912) === 0 || Ct ? Md() : 536870912);
    var t = Qe.current;
    return (t !== null && (t.flags |= 32), Ze);
  }
  function je(t, e, n) {
    (((t === Ht && (Ut === 2 || Ut === 9)) || t.cancelPendingCommit !== null) &&
      (Xi(t, 0), ma(t, Tt, Ze, !1)),
      yl(t, n),
      ((Nt & 2) === 0 || t !== Ht) &&
        (t === Ht &&
          ((Nt & 2) === 0 && (Za |= n), Pt === 4 && ma(t, Tt, Ze, !1)),
        bn(t)));
  }
  function pm(t, e, n) {
    if ((Nt & 6) !== 0) throw Error(u(327));
    var i = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || gl(t, e),
      s = i ? mb(t, e) : Yc(t, e, !0),
      c = i;
    do {
      if (s === 0) {
        Gi && !i && ma(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), c && !hb(n))) {
          ((s = Yc(t, e, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var m = 0;
          else
            ((m = t.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            e = m;
            t: {
              var y = t;
              s = Il;
              var _ = y.current.memoizedState.isDehydrated;
              if ((_ && (Xi(y, m).flags |= 256), (m = Yc(y, m, !1)), m !== 2)) {
                if (Uc && !_) {
                  ((y.errorRecoveryDisabledLanes |= c), (Za |= c), (s = 4));
                  break t;
                }
                ((c = Ae),
                  (Ae = s),
                  c !== null &&
                    (Ae === null ? (Ae = c) : Ae.push.apply(Ae, c)));
              }
              s = m;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Xi(t, 0), ma(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (c = s), c)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ma(i, e, Ze, !fa);
              break t;
            case 2:
              Ae = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((s = Bc + 300 - Yt()), 10 < s)) {
            if ((ma(i, e, Ze, !fa), Qr(i, 0, !0) !== 0)) break t;
            i.timeoutHandle = Km(
              gm.bind(null, i, n, Ae, ju, Lc, e, Ze, Za, qi, fa, c, 2, -0, 0),
              s,
            );
            break t;
          }
          gm(i, n, Ae, ju, Lc, e, Ze, Za, qi, fa, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    bn(t);
  }
  function gm(t, e, n, i, s, c, m, y, _, R, j, H, w, D) {
    if (
      ((t.timeoutHandle = -1),
      (H = e.subtreeFlags),
      (H & 8192 || (H & 16785408) === 16785408) &&
        ((ur = { stylesheets: null, count: 0, unsuspend: Pb }),
        cm(e),
        (H = $b()),
        H !== null))
    ) {
      ((t.cancelPendingCommit = H(
        Em.bind(null, t, e, c, n, i, s, m, y, _, j, 1, w, D),
      )),
        ma(t, c, m, !R));
      return;
    }
    Em(t, e, c, n, i, s, m, y, _);
  }
  function hb(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!we(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function ma(t, e, n, i) {
    ((e &= ~jc),
      (e &= ~Za),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var c = 31 - Re(s),
        m = 1 << c;
      ((i[c] = -1), (s &= ~m));
    }
    n !== 0 && Rd(t, n, e);
  }
  function Lu() {
    return (Nt & 6) === 0 ? (er(0), !1) : !0;
  }
  function qc() {
    if (xt !== null) {
      if (Ut === 0) var t = xt.return;
      else ((t = xt), (zn = qa = null), ic(t), (Li = null), (Kl = 0), (t = xt));
      for (; t !== null; ) ($v(t.alternate, t), (t = t.return));
      xt = null;
    }
  }
  function Xi(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Cb(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      qc(),
      (Ht = t),
      (xt = n = wn(t.current, null)),
      (Tt = e),
      (Ut = 0),
      (Ne = null),
      (fa = !1),
      (Gi = gl(t, e)),
      (Uc = !1),
      (qi = Ze = jc = Za = da = Pt = 0),
      (Ae = Il = null),
      (Lc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - Re(i),
          c = 1 << s;
        ((e |= t[s]), (i &= ~c));
      }
    return ((Gn = e), iu(), n);
  }
  function ym(t, e) {
    ((Ot = null),
      (x.H = Au),
      e === Ll || e === hu
        ? ((e = jh()), (Ut = 3))
        : e === zh
          ? ((e = jh()), (Ut = 4))
          : (Ut =
              e === Lv
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ne = e),
      xt === null && ((Pt = 1), Ru(t, ke(e, t.current))));
  }
  function bm() {
    var t = x.H;
    return ((x.H = Au), t === null ? Au : t);
  }
  function _m() {
    var t = x.A;
    return ((x.A = fb), t);
  }
  function kc() {
    ((Pt = 4),
      fa || ((Tt & 4194048) !== Tt && Qe.current !== null) || (Gi = !0),
      ((da & 134217727) === 0 && (Za & 134217727) === 0) ||
        Ht === null ||
        ma(Ht, Tt, Ze, !1));
  }
  function Yc(t, e, n) {
    var i = Nt;
    Nt |= 2;
    var s = bm(),
      c = _m();
    ((Ht !== t || Tt !== e) && ((ju = null), Xi(t, e)), (e = !1));
    var m = Pt;
    t: do
      try {
        if (Ut !== 0 && xt !== null) {
          var y = xt,
            _ = Ne;
          switch (Ut) {
            case 8:
              (qc(), (m = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Qe.current === null && (e = !0);
              var R = Ut;
              if (((Ut = 0), (Ne = null), Ki(t, y, _, R), n && Gi)) {
                m = 0;
                break t;
              }
              break;
            default:
              ((R = Ut), (Ut = 0), (Ne = null), Ki(t, y, _, R));
          }
        }
        (vb(), (m = Pt));
        break;
      } catch (j) {
        ym(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (zn = qa = null),
      (Nt = i),
      (x.H = s),
      (x.A = c),
      xt === null && ((Ht = null), (Tt = 0), iu()),
      m
    );
  }
  function vb() {
    for (; xt !== null; ) Sm(xt);
  }
  function mb(t, e) {
    var n = Nt;
    Nt |= 2;
    var i = bm(),
      s = _m();
    Ht !== t || Tt !== e
      ? ((ju = null), (Uu = Yt() + 500), Xi(t, e))
      : (Gi = gl(t, e));
    t: do
      try {
        if (Ut !== 0 && xt !== null) {
          e = xt;
          var c = Ne;
          e: switch (Ut) {
            case 1:
              ((Ut = 0), (Ne = null), Ki(t, e, c, 1));
              break;
            case 2:
            case 9:
              if (Nh(c)) {
                ((Ut = 0), (Ne = null), Om(e));
                break;
              }
              ((e = function () {
                ((Ut !== 2 && Ut !== 9) || Ht !== t || (Ut = 7), bn(t));
              }),
                c.then(e, e));
              break t;
            case 3:
              Ut = 7;
              break t;
            case 4:
              Ut = 5;
              break t;
            case 7:
              Nh(c)
                ? ((Ut = 0), (Ne = null), Om(e))
                : ((Ut = 0), (Ne = null), Ki(t, e, c, 7));
              break;
            case 5:
              var m = null;
              switch (xt.tag) {
                case 26:
                  m = xt.memoizedState;
                case 5:
                case 27:
                  var y = xt;
                  if (!m || ap(m)) {
                    ((Ut = 0), (Ne = null));
                    var _ = y.sibling;
                    if (_ !== null) xt = _;
                    else {
                      var R = y.return;
                      R !== null ? ((xt = R), Bu(R)) : (xt = null);
                    }
                    break e;
                  }
              }
              ((Ut = 0), (Ne = null), Ki(t, e, c, 5));
              break;
            case 6:
              ((Ut = 0), (Ne = null), Ki(t, e, c, 6));
              break;
            case 8:
              (qc(), (Pt = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        pb();
        break;
      } catch (j) {
        ym(t, j);
      }
    while (!0);
    return (
      (zn = qa = null),
      (x.H = i),
      (x.A = s),
      (Nt = n),
      xt !== null ? 0 : ((Ht = null), (Tt = 0), iu(), Pt)
    );
  }
  function pb() {
    for (; xt !== null && !ne(); ) Sm(xt);
  }
  function Sm(t) {
    var e = Pv(t.alternate, t, Gn);
    ((t.memoizedProps = t.pendingProps), e === null ? Bu(t) : (xt = e));
  }
  function Om(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = kv(n, e, e.pendingProps, e.type, void 0, Tt);
        break;
      case 11:
        e = kv(n, e, e.pendingProps, e.type.render, e.ref, Tt);
        break;
      case 5:
        ic(e);
      default:
        ($v(n, e), (e = xt = Ah(e, Gn)), (e = Pv(n, e, Gn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Bu(t) : (xt = e));
  }
  function Ki(t, e, n, i) {
    ((zn = qa = null), ic(e), (Li = null), (Kl = 0));
    var s = e.return;
    try {
      if (lb(t, s, e, n, Tt)) {
        ((Pt = 1), Ru(t, ke(n, t.current)), (xt = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((xt = s), c);
      ((Pt = 1), Ru(t, ke(n, t.current)), (xt = null));
      return;
    }
    e.flags & 32768
      ? (Ct || i === 1
          ? (t = !0)
          : Gi || (Tt & 536870912) !== 0
            ? (t = !1)
            : ((fa = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = Qe.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        Am(e, t))
      : Bu(e);
  }
  function Bu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Am(e, fa);
        return;
      }
      t = e.return;
      var n = ub(e.alternate, e, Gn);
      if (n !== null) {
        xt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        xt = e;
        return;
      }
      xt = e = t;
    } while (e !== null);
    Pt === 0 && (Pt = 5);
  }
  function Am(t, e) {
    do {
      var n = sb(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (xt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        xt = t;
        return;
      }
      xt = t = n;
    } while (t !== null);
    ((Pt = 6), (xt = null));
  }
  function Em(t, e, n, i, s, c, m, y, _) {
    t.cancelPendingCommit = null;
    do Vu();
    while (se !== 0);
    if ((Nt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= No),
        Py(t, n, c, m, y, _),
        t === Ht && ((xt = Ht = null), (Tt = 0)),
        (ki = e),
        (va = t),
        (Yi = n),
        (Vc = c),
        (Hc = s),
        (vm = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            _b(ci, function () {
              return (wm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = x.T), (x.T = null), (s = q.p), (q.p = 2), (m = Nt), (Nt |= 4));
        try {
          ob(t, e, n);
        } finally {
          ((Nt = m), (q.p = s), (x.T = i));
        }
      }
      ((se = 1), xm(), Mm(), Tm());
    }
  }
  function xm() {
    if (se === 1) {
      se = 0;
      var t = va,
        e = ki,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = x.T), (x.T = null));
        var i = q.p;
        q.p = 2;
        var s = Nt;
        Nt |= 4;
        try {
          um(e, t);
          var c = ef,
            m = hh(t.containerInfo),
            y = c.focusedElem,
            _ = c.selectionRange;
          if (
            m !== y &&
            y &&
            y.ownerDocument &&
            dh(y.ownerDocument.documentElement, y)
          ) {
            if (_ !== null && Ro(y)) {
              var R = _.start,
                j = _.end;
              if ((j === void 0 && (j = R), "selectionStart" in y))
                ((y.selectionStart = R),
                  (y.selectionEnd = Math.min(j, y.value.length)));
              else {
                var H = y.ownerDocument || document,
                  w = (H && H.defaultView) || window;
                if (w.getSelection) {
                  var D = w.getSelection(),
                    pt = y.textContent.length,
                    ht = Math.min(_.start, pt),
                    Bt = _.end === void 0 ? ht : Math.min(_.end, pt);
                  !D.extend && ht > Bt && ((m = Bt), (Bt = ht), (ht = m));
                  var E = fh(y, ht),
                    A = fh(y, Bt);
                  if (
                    E &&
                    A &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== E.node ||
                      D.anchorOffset !== E.offset ||
                      D.focusNode !== A.node ||
                      D.focusOffset !== A.offset)
                  ) {
                    var M = H.createRange();
                    (M.setStart(E.node, E.offset),
                      D.removeAllRanges(),
                      ht > Bt
                        ? (D.addRange(M), D.extend(A.node, A.offset))
                        : (M.setEnd(A.node, A.offset), D.addRange(M)));
                  }
                }
              }
            }
            for (H = [], D = y; (D = D.parentNode); )
              D.nodeType === 1 &&
                H.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < H.length;
              y++
            ) {
              var L = H[y];
              ((L.element.scrollLeft = L.left), (L.element.scrollTop = L.top));
            }
          }
          (($u = !!tf), (ef = tf = null));
        } finally {
          ((Nt = s), (q.p = i), (x.T = n));
        }
      }
      ((t.current = e), (se = 2));
    }
  }
  function Mm() {
    if (se === 2) {
      se = 0;
      var t = va,
        e = ki,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = x.T), (x.T = null));
        var i = q.p;
        q.p = 2;
        var s = Nt;
        Nt |= 4;
        try {
          am(t, e.alternate, e);
        } finally {
          ((Nt = s), (q.p = i), (x.T = n));
        }
      }
      se = 3;
    }
  }
  function Tm() {
    if (se === 4 || se === 3) {
      ((se = 0), vn());
      var t = va,
        e = ki,
        n = Yi,
        i = vm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (se = 5)
        : ((se = 0), (ki = va = null), Rm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (ha = null),
        ro(n),
        (e = e.stateNode),
        Te && typeof Te.onCommitFiberRoot == "function")
      )
        try {
          Te.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((e = x.T), (s = q.p), (q.p = 2), (x.T = null));
        try {
          for (var c = t.onRecoverableError, m = 0; m < i.length; m++) {
            var y = i[m];
            c(y.value, { componentStack: y.stack });
          }
        } finally {
          ((x.T = e), (q.p = s));
        }
      }
      ((Yi & 3) !== 0 && Vu(),
        bn(t),
        (s = t.pendingLanes),
        (n & 4194090) !== 0 && (s & 42) !== 0
          ? t === Gc
            ? tr++
            : ((tr = 0), (Gc = t))
          : (tr = 0),
        er(0));
    }
  }
  function Rm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ul(e)));
  }
  function Vu(t) {
    return (xm(), Mm(), Tm(), wm());
  }
  function wm() {
    if (se !== 5) return !1;
    var t = va,
      e = Vc;
    Vc = 0;
    var n = ro(Yi),
      i = x.T,
      s = q.p;
    try {
      ((q.p = 32 > n ? 32 : n), (x.T = null), (n = Hc), (Hc = null));
      var c = va,
        m = Yi;
      if (((se = 0), (ki = va = null), (Yi = 0), (Nt & 6) !== 0))
        throw Error(u(331));
      var y = Nt;
      if (
        ((Nt |= 4),
        dm(c.current),
        om(c, c.current, m, n),
        (Nt = y),
        er(0, !1),
        Te && typeof Te.onPostCommitFiberRoot == "function")
      )
        try {
          Te.onPostCommitFiberRoot(pl, c);
        } catch {}
      return !0;
    } finally {
      ((q.p = s), (x.T = i), Rm(t, e));
    }
  }
  function Dm(t, e, n) {
    ((e = ke(n, e)),
      (e = yc(t.stateNode, e, 2)),
      (t = ia(t, e, 2)),
      t !== null && (yl(t, 2), bn(t)));
  }
  function Vt(t, e, n) {
    if (t.tag === 3) Dm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Dm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (ha === null || !ha.has(i)))
          ) {
            ((t = ke(n, t)),
              (n = Uv(2)),
              (i = ia(e, n, 2)),
              i !== null && (jv(n, i, e, t), yl(i, 2), bn(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Xc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new db();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(n) ||
      ((Uc = !0), s.add(n), (t = gb.bind(null, t, e, n)), e.then(t, t));
  }
  function gb(t, e, n) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ht === t &&
        (Tt & n) === n &&
        (Pt === 4 || (Pt === 3 && (Tt & 62914560) === Tt && 300 > Yt() - Bc)
          ? (Nt & 2) === 0 && Xi(t, 0)
          : (jc |= n),
        qi === Tt && (qi = 0)),
      bn(t));
  }
  function Cm(t, e) {
    (e === 0 && (e = Td()), (t = Mi(t, e)), t !== null && (yl(t, e), bn(t)));
  }
  function yb(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Cm(t, n));
  }
  function bb(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (i !== null && i.delete(e), Cm(t, n));
  }
  function _b(t, e) {
    return Fn(t, e);
  }
  var Hu = null,
    Qi = null,
    Kc = !1,
    Gu = !1,
    Qc = !1,
    Pa = 0;
  function bn(t) {
    (t !== Qi &&
      t.next === null &&
      (Qi === null ? (Hu = Qi = t) : (Qi = Qi.next = t)),
      (Gu = !0),
      Kc || ((Kc = !0), Ob()));
  }
  function er(t, e) {
    if (!Qc && Gu) {
      Qc = !0;
      do
        for (var n = !1, i = Hu; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var m = i.suspendedLanes,
                y = i.pingedLanes;
              ((c = (1 << (31 - Re(42 | t) + 1)) - 1),
                (c &= s & ~(m & ~y)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), jm(i, c));
          } else
            ((c = Tt),
              (c = Qr(
                i,
                i === Ht ? c : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || gl(i, c) || ((n = !0), jm(i, c)));
          i = i.next;
        }
      while (n);
      Qc = !1;
    }
  }
  function Sb() {
    zm();
  }
  function zm() {
    Gu = Kc = !1;
    var t = 0;
    Pa !== 0 && (Db() && (t = Pa), (Pa = 0));
    for (var e = Yt(), n = null, i = Hu; i !== null; ) {
      var s = i.next,
        c = Nm(i, e);
      (c === 0
        ? ((i.next = null),
          n === null ? (Hu = s) : (n.next = s),
          s === null && (Qi = n))
        : ((n = i), (t !== 0 || (c & 3) !== 0) && (Gu = !0)),
        (i = s));
    }
    er(t);
  }
  function Nm(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var m = 31 - Re(c),
        y = 1 << m,
        _ = s[m];
      (_ === -1
        ? ((y & n) === 0 || (y & i) !== 0) && (s[m] = Zy(y, e))
        : _ <= e && (t.expiredLanes |= y),
        (c &= ~y));
    }
    if (
      ((e = Ht),
      (n = Tt),
      (n = Qr(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (Ut === 2 || Ut === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && He(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || gl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && He(i), ro(n))) {
        case 2:
        case 8:
          n = Yr;
          break;
        case 32:
          n = ci;
          break;
        case 268435456:
          n = fi;
          break;
        default:
          n = ci;
      }
      return (
        (i = Um.bind(null, t)),
        (n = Fn(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && He(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Um(t, e) {
    if (se !== 0 && se !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Vu() && t.callbackNode !== n) return null;
    var i = Tt;
    return (
      (i = Qr(
        t,
        t === Ht ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (pm(t, i, e),
          Nm(t, Yt()),
          t.callbackNode != null && t.callbackNode === n
            ? Um.bind(null, t)
            : null)
    );
  }
  function jm(t, e) {
    if (Vu()) return null;
    pm(t, e, !0);
  }
  function Ob() {
    zb(function () {
      (Nt & 6) !== 0 ? Fn(kr, Sb) : zm();
    });
  }
  function Zc() {
    return (Pa === 0 && (Pa = Md()), Pa);
  }
  function Lm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Fr("" + t);
  }
  function Bm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Ab(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var c = Lm((s[be] || null).action),
        m = i.submitter;
      m &&
        ((e = (e = m[be] || null)
          ? Lm(e.formAction)
          : m.getAttribute("formAction")),
        e !== null && ((c = e), (m = null)));
      var y = new eu("action", "action", null, i, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Pa !== 0) {
                  var _ = m ? Bm(s, m) : new FormData(s);
                  hc(
                    n,
                    { pending: !0, data: _, method: s.method, action: c },
                    null,
                    _,
                  );
                }
              } else
                typeof c == "function" &&
                  (y.preventDefault(),
                  (_ = m ? Bm(s, m) : new FormData(s)),
                  hc(
                    n,
                    { pending: !0, data: _, method: s.method, action: c },
                    c,
                    _,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Pc = 0; Pc < zo.length; Pc++) {
    var Jc = zo[Pc],
      Eb = Jc.toLowerCase(),
      xb = Jc[0].toUpperCase() + Jc.slice(1);
    en(Eb, "on" + xb);
  }
  (en(ph, "onAnimationEnd"),
    en(gh, "onAnimationIteration"),
    en(yh, "onAnimationStart"),
    en("dblclick", "onDoubleClick"),
    en("focusin", "onFocus"),
    en("focusout", "onBlur"),
    en(k0, "onTransitionRun"),
    en(Y0, "onTransitionStart"),
    en(X0, "onTransitionCancel"),
    en(bh, "onTransitionEnd"),
    pi("onMouseEnter", ["mouseout", "mouseover"]),
    pi("onMouseLeave", ["mouseout", "mouseover"]),
    pi("onPointerEnter", ["pointerout", "pointerover"]),
    pi("onPointerLeave", ["pointerout", "pointerover"]),
    za(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    za(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    za("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    za(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    za(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    za(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Mb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(nr),
    );
  function Vm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var m = i.length - 1; 0 <= m; m--) {
            var y = i[m],
              _ = y.instance,
              R = y.currentTarget;
            if (((y = y.listener), _ !== c && s.isPropagationStopped()))
              break t;
            ((c = y), (s.currentTarget = R));
            try {
              c(s);
            } catch (j) {
              Tu(j);
            }
            ((s.currentTarget = null), (c = _));
          }
        else
          for (m = 0; m < i.length; m++) {
            if (
              ((y = i[m]),
              (_ = y.instance),
              (R = y.currentTarget),
              (y = y.listener),
              _ !== c && s.isPropagationStopped())
            )
              break t;
            ((c = y), (s.currentTarget = R));
            try {
              c(s);
            } catch (j) {
              Tu(j);
            }
            ((s.currentTarget = null), (c = _));
          }
      }
    }
  }
  function Mt(t, e) {
    var n = e[uo];
    n === void 0 && (n = e[uo] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Hm(e, t, 2, !1), n.add(i));
  }
  function $c(t, e, n) {
    var i = 0;
    (e && (i |= 4), Hm(n, t, i, e));
  }
  var qu = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(t) {
    if (!t[qu]) {
      ((t[qu] = !0),
        zd.forEach(function (n) {
          n !== "selectionchange" && (Mb.has(n) || $c(n, !1, t), $c(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qu] || ((e[qu] = !0), $c("selectionchange", !1, e));
    }
  }
  function Hm(t, e, n, i) {
    switch (op(e)) {
      case 2:
        var s = Ib;
        break;
      case 8:
        s = t_;
        break;
      default:
        s = df;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !bo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function Wc(t, e, n, i, s) {
    var c = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var y = i.stateNode.containerInfo;
          if (y === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var _ = m.tag;
              if ((_ === 3 || _ === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (((m = hi(y)), m === null)) return;
            if (((_ = m.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              i = c = m;
              continue t;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    Qd(function () {
      var R = c,
        j = go(n),
        H = [];
      t: {
        var w = _h.get(t);
        if (w !== void 0) {
          var D = eu,
            pt = t;
          switch (t) {
            case "keypress":
              if (Ir(n) === 0) break t;
            case "keydown":
            case "keyup":
              D = _0;
              break;
            case "focusin":
              ((pt = "focus"), (D = Ao));
              break;
            case "focusout":
              ((pt = "blur"), (D = Ao));
              break;
            case "beforeblur":
            case "afterblur":
              D = Ao;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Jd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = s0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = A0;
              break;
            case ph:
            case gh:
            case yh:
              D = f0;
              break;
            case bh:
              D = x0;
              break;
            case "scroll":
            case "scrollend":
              D = r0;
              break;
            case "wheel":
              D = T0;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = h0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Fd;
              break;
            case "toggle":
            case "beforetoggle":
              D = w0;
          }
          var ht = (e & 4) !== 0,
            Bt = !ht && (t === "scroll" || t === "scrollend"),
            E = ht ? (w !== null ? w + "Capture" : null) : w;
          ht = [];
          for (var A = R, M; A !== null; ) {
            var L = A;
            if (
              ((M = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                M === null ||
                E === null ||
                ((L = Sl(A, E)), L != null && ht.push(ar(A, L, M))),
              Bt)
            )
              break;
            A = A.return;
          }
          0 < ht.length &&
            ((w = new D(w, pt, null, n, j)),
            H.push({ event: w, listeners: ht }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((w = t === "mouseover" || t === "pointerover"),
            (D = t === "mouseout" || t === "pointerout"),
            w &&
              n !== po &&
              (pt = n.relatedTarget || n.fromElement) &&
              (hi(pt) || pt[di]))
          )
            break t;
          if (
            (D || w) &&
            ((w =
              j.window === j
                ? j
                : (w = j.ownerDocument)
                  ? w.defaultView || w.parentWindow
                  : window),
            D
              ? ((pt = n.relatedTarget || n.toElement),
                (D = R),
                (pt = pt ? hi(pt) : null),
                pt !== null &&
                  ((Bt = f(pt)),
                  (ht = pt.tag),
                  pt !== Bt || (ht !== 5 && ht !== 27 && ht !== 6)) &&
                  (pt = null))
              : ((D = null), (pt = R)),
            D !== pt)
          ) {
            if (
              ((ht = Jd),
              (L = "onMouseLeave"),
              (E = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ht = Fd),
                (L = "onPointerLeave"),
                (E = "onPointerEnter"),
                (A = "pointer")),
              (Bt = D == null ? w : _l(D)),
              (M = pt == null ? w : _l(pt)),
              (w = new ht(L, A + "leave", D, n, j)),
              (w.target = Bt),
              (w.relatedTarget = M),
              (L = null),
              hi(j) === R &&
                ((ht = new ht(E, A + "enter", pt, n, j)),
                (ht.target = M),
                (ht.relatedTarget = Bt),
                (L = ht)),
              (Bt = L),
              D && pt)
            )
              e: {
                for (ht = D, E = pt, A = 0, M = ht; M; M = Zi(M)) A++;
                for (M = 0, L = E; L; L = Zi(L)) M++;
                for (; 0 < A - M; ) ((ht = Zi(ht)), A--);
                for (; 0 < M - A; ) ((E = Zi(E)), M--);
                for (; A--; ) {
                  if (ht === E || (E !== null && ht === E.alternate)) break e;
                  ((ht = Zi(ht)), (E = Zi(E)));
                }
                ht = null;
              }
            else ht = null;
            (D !== null && Gm(H, w, D, ht, !1),
              pt !== null && Bt !== null && Gm(H, Bt, pt, ht, !0));
          }
        }
        t: {
          if (
            ((w = R ? _l(R) : window),
            (D = w.nodeName && w.nodeName.toLowerCase()),
            D === "select" || (D === "input" && w.type === "file"))
          )
            var at = lh;
          else if (ah(w))
            if (rh) at = H0;
            else {
              at = B0;
              var Et = L0;
            }
          else
            ((D = w.nodeName),
              !D ||
              D.toLowerCase() !== "input" ||
              (w.type !== "checkbox" && w.type !== "radio")
                ? R && mo(R.elementType) && (at = lh)
                : (at = V0));
          if (at && (at = at(t, R))) {
            ih(H, at, n, j);
            break t;
          }
          (Et && Et(t, w, R),
            t === "focusout" &&
              R &&
              w.type === "number" &&
              R.memoizedProps.value != null &&
              vo(w, "number", w.value));
        }
        switch (((Et = R ? _l(R) : window), t)) {
          case "focusin":
            (ah(Et) || Et.contentEditable === "true") &&
              ((Ai = Et), (wo = R), (wl = null));
            break;
          case "focusout":
            wl = wo = Ai = null;
            break;
          case "mousedown":
            Do = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Do = !1), vh(H, n, j));
            break;
          case "selectionchange":
            if (q0) break;
          case "keydown":
          case "keyup":
            vh(H, n, j);
        }
        var ot;
        if (xo)
          t: {
            switch (t) {
              case "compositionstart":
                var vt = "onCompositionStart";
                break t;
              case "compositionend":
                vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                vt = "onCompositionUpdate";
                break t;
            }
            vt = void 0;
          }
        else
          Oi
            ? eh(t, n) && (vt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (vt = "onCompositionStart");
        (vt &&
          (Wd &&
            n.locale !== "ko" &&
            (Oi || vt !== "onCompositionStart"
              ? vt === "onCompositionEnd" && Oi && (ot = Zd())
              : ((ta = j),
                (_o = "value" in ta ? ta.value : ta.textContent),
                (Oi = !0))),
          (Et = ku(R, vt)),
          0 < Et.length &&
            ((vt = new $d(vt, t, null, n, j)),
            H.push({ event: vt, listeners: Et }),
            ot
              ? (vt.data = ot)
              : ((ot = nh(n)), ot !== null && (vt.data = ot)))),
          (ot = C0 ? z0(t, n) : N0(t, n)) &&
            ((vt = ku(R, "onBeforeInput")),
            0 < vt.length &&
              ((Et = new $d("onBeforeInput", "beforeinput", null, n, j)),
              H.push({ event: Et, listeners: vt }),
              (Et.data = ot))),
          Ab(H, t, R, n, j));
      }
      Vm(H, e);
    });
  }
  function ar(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function ku(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = Sl(t, n)),
          s != null && i.unshift(ar(t, s, c)),
          (s = Sl(t, e)),
          s != null && i.push(ar(t, s, c))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function Zi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gm(t, e, n, i, s) {
    for (var c = e._reactName, m = []; n !== null && n !== i; ) {
      var y = n,
        _ = y.alternate,
        R = y.stateNode;
      if (((y = y.tag), _ !== null && _ === i)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        R === null ||
        ((_ = R),
        s
          ? ((R = Sl(n, c)), R != null && m.unshift(ar(n, R, _)))
          : s || ((R = Sl(n, c)), R != null && m.push(ar(n, R, _)))),
        (n = n.return));
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var Tb = /\r\n?/g,
    Rb = /\u0000|\uFFFD/g;
  function qm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Tb,
        `
`,
      )
      .replace(Rb, "");
  }
  function km(t, e) {
    return ((e = qm(e)), qm(t) === e);
  }
  function Yu() {}
  function Lt(t, e, n, i, s, c) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || bi(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            bi(t, "" + i);
        break;
      case "className":
        Pr(t, "class", i);
        break;
      case "tabIndex":
        Pr(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pr(t, n, i);
        break;
      case "style":
        Xd(t, i, c);
        break;
      case "data":
        if (e !== "object") {
          Pr(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((i = Fr("" + i)), t.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (e !== "input" && Lt(t, e, "name", s.name, s, null),
                Lt(t, e, "formEncType", s.formEncType, s, null),
                Lt(t, e, "formMethod", s.formMethod, s, null),
                Lt(t, e, "formTarget", s.formTarget, s, null))
              : (Lt(t, e, "encType", s.encType, s, null),
                Lt(t, e, "method", s.method, s, null),
                Lt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = Fr("" + i)), t.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (t.onclick = Yu);
        break;
      case "onScroll":
        i != null && Mt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Fr("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? t.setAttribute(n, i)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        (Mt("beforetoggle", t), Mt("toggle", t), Zr(t, "popover", i));
        break;
      case "xlinkActuate":
        Tn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Tn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Tn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Tn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Tn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Tn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Tn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Tn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Tn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Zr(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = i0.get(n) || n), Zr(t, n, i));
    }
  }
  function Ic(t, e, n, i, s, c) {
    switch (n) {
      case "style":
        Xd(t, i, c);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? bi(t, i)
          : (typeof i == "number" || typeof i == "bigint") && bi(t, "" + i);
        break;
      case "onScroll":
        i != null && Mt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Mt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Yu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Nd.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (c = t[be] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && t.removeEventListener(e, c, s),
              typeof i == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s));
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
                ? t.setAttribute(n, "")
                : Zr(t, n, i);
          }
    }
  }
  function oe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Mt("error", t), Mt("load", t));
        var i = !1,
          s = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var m = n[c];
            if (m != null)
              switch (c) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Lt(t, e, c, m, n, null);
              }
          }
        (s && Lt(t, e, "srcSet", n.srcSet, n, null),
          i && Lt(t, e, "src", n.src, n, null));
        return;
      case "input":
        Mt("invalid", t);
        var y = (c = m = s = null),
          _ = null,
          R = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var j = n[i];
            if (j != null)
              switch (i) {
                case "name":
                  s = j;
                  break;
                case "type":
                  m = j;
                  break;
                case "checked":
                  _ = j;
                  break;
                case "defaultChecked":
                  R = j;
                  break;
                case "value":
                  c = j;
                  break;
                case "defaultValue":
                  y = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(u(137, e));
                  break;
                default:
                  Lt(t, e, i, j, n, null);
              }
          }
        (Gd(t, c, y, _, R, m, s, !1), Jr(t));
        return;
      case "select":
        (Mt("invalid", t), (i = m = c = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                m = y;
                break;
              case "multiple":
                i = y;
              default:
                Lt(t, e, s, y, n, null);
            }
        ((e = c),
          (n = m),
          (t.multiple = !!i),
          e != null ? yi(t, !!i, e, !1) : n != null && yi(t, !!i, n, !0));
        return;
      case "textarea":
        (Mt("invalid", t), (c = s = i = null));
        for (m in n)
          if (n.hasOwnProperty(m) && ((y = n[m]), y != null))
            switch (m) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(u(91));
                break;
              default:
                Lt(t, e, m, y, n, null);
            }
        (kd(t, i, s, c), Jr(t));
        return;
      case "option":
        for (_ in n)
          if (n.hasOwnProperty(_) && ((i = n[_]), i != null))
            switch (_) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Lt(t, e, _, i, n, null);
            }
        return;
      case "dialog":
        (Mt("beforetoggle", t),
          Mt("toggle", t),
          Mt("cancel", t),
          Mt("close", t));
        break;
      case "iframe":
      case "object":
        Mt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < nr.length; i++) Mt(nr[i], t);
        break;
      case "image":
        (Mt("error", t), Mt("load", t));
        break;
      case "details":
        Mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Mt("error", t), Mt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && ((i = n[R]), i != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Lt(t, e, R, i, n, null);
            }
        return;
      default:
        if (mo(e)) {
          for (j in n)
            n.hasOwnProperty(j) &&
              ((i = n[j]), i !== void 0 && Ic(t, e, j, i, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((i = n[y]), i != null && Lt(t, e, y, i, n, null));
  }
  function wb(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          m = null,
          y = null,
          _ = null,
          R = null,
          j = null;
        for (D in n) {
          var H = n[D];
          if (n.hasOwnProperty(D) && H != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = H;
              default:
                i.hasOwnProperty(D) || Lt(t, e, D, null, i, H);
            }
        }
        for (var w in i) {
          var D = i[w];
          if (((H = n[w]), i.hasOwnProperty(w) && (D != null || H != null)))
            switch (w) {
              case "type":
                c = D;
                break;
              case "name":
                s = D;
                break;
              case "checked":
                R = D;
                break;
              case "defaultChecked":
                j = D;
                break;
              case "value":
                m = D;
                break;
              case "defaultValue":
                y = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(u(137, e));
                break;
              default:
                D !== H && Lt(t, e, w, D, i, H);
            }
        }
        ho(t, m, y, _, R, j, c, s);
        return;
      case "select":
        D = m = y = w = null;
        for (c in n)
          if (((_ = n[c]), n.hasOwnProperty(c) && _ != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                D = _;
              default:
                i.hasOwnProperty(c) || Lt(t, e, c, null, i, _);
            }
        for (s in i)
          if (
            ((c = i[s]),
            (_ = n[s]),
            i.hasOwnProperty(s) && (c != null || _ != null))
          )
            switch (s) {
              case "value":
                w = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== _ && Lt(t, e, s, c, i, _);
            }
        ((e = y),
          (n = m),
          (i = D),
          w != null
            ? yi(t, !!n, w, !1)
            : !!i != !!n &&
              (e != null ? yi(t, !!n, e, !0) : yi(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        D = w = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Lt(t, e, y, null, i, s);
            }
        for (m in i)
          if (
            ((s = i[m]),
            (c = n[m]),
            i.hasOwnProperty(m) && (s != null || c != null))
          )
            switch (m) {
              case "value":
                w = s;
                break;
              case "defaultValue":
                D = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== c && Lt(t, e, m, s, i, c);
            }
        qd(t, w, D);
        return;
      case "option":
        for (var pt in n)
          if (
            ((w = n[pt]),
            n.hasOwnProperty(pt) && w != null && !i.hasOwnProperty(pt))
          )
            switch (pt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Lt(t, e, pt, null, i, w);
            }
        for (_ in i)
          if (
            ((w = i[_]),
            (D = n[_]),
            i.hasOwnProperty(_) && w !== D && (w != null || D != null))
          )
            switch (_) {
              case "selected":
                t.selected =
                  w && typeof w != "function" && typeof w != "symbol";
                break;
              default:
                Lt(t, e, _, w, i, D);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ht in n)
          ((w = n[ht]),
            n.hasOwnProperty(ht) &&
              w != null &&
              !i.hasOwnProperty(ht) &&
              Lt(t, e, ht, null, i, w));
        for (R in i)
          if (
            ((w = i[R]),
            (D = n[R]),
            i.hasOwnProperty(R) && w !== D && (w != null || D != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(u(137, e));
                break;
              default:
                Lt(t, e, R, w, i, D);
            }
        return;
      default:
        if (mo(e)) {
          for (var Bt in n)
            ((w = n[Bt]),
              n.hasOwnProperty(Bt) &&
                w !== void 0 &&
                !i.hasOwnProperty(Bt) &&
                Ic(t, e, Bt, void 0, i, w));
          for (j in i)
            ((w = i[j]),
              (D = n[j]),
              !i.hasOwnProperty(j) ||
                w === D ||
                (w === void 0 && D === void 0) ||
                Ic(t, e, j, w, i, D));
          return;
        }
    }
    for (var E in n)
      ((w = n[E]),
        n.hasOwnProperty(E) &&
          w != null &&
          !i.hasOwnProperty(E) &&
          Lt(t, e, E, null, i, w));
    for (H in i)
      ((w = i[H]),
        (D = n[H]),
        !i.hasOwnProperty(H) ||
          w === D ||
          (w == null && D == null) ||
          Lt(t, e, H, w, i, D));
  }
  var tf = null,
    ef = null;
  function Xu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ym(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function nf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var af = null;
  function Db() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === af
        ? !1
        : ((af = t), !0)
      : ((af = null), !1);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0,
    Cb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qm = typeof Promise == "function" ? Promise : void 0,
    zb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qm < "u"
          ? function (t) {
              return Qm.resolve(null).then(t).catch(Nb);
            }
          : Km;
  function Nb(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function pa(t) {
    return t === "head";
  }
  function Zm(t, e) {
    var n = e,
      i = 0,
      s = 0;
    do {
      var c = n.nextSibling;
      if ((t.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$")) {
          if (0 < i && 8 > i) {
            n = i;
            var m = t.ownerDocument;
            if ((n & 1 && ir(m.documentElement), n & 2 && ir(m.body), n & 4))
              for (n = m.head, ir(n), m = n.firstChild; m; ) {
                var y = m.nextSibling,
                  _ = m.nodeName;
                (m[bl] ||
                  _ === "SCRIPT" ||
                  _ === "STYLE" ||
                  (_ === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(m),
                  (m = y));
              }
          }
          if (s === 0) {
            (t.removeChild(c), dr(e));
            return;
          }
          s--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? s++
            : (i = n.charCodeAt(0) - 48);
      else i = 0;
      n = c;
    } while (n);
    dr(e);
  }
  function lf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (lf(n), so(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Ub(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[bl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = an(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function jb(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = an(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function rf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Lb(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var i = function () {
        (e(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function an(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var uf = null;
  function Pm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Jm(t, e, n) {
    switch (((e = Xu(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function ir(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    so(t);
  }
  var Pe = new Map(),
    $m = new Set();
  function Ku(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var qn = q.d;
  q.d = { f: Bb, r: Vb, D: Hb, C: Gb, L: qb, m: kb, X: Xb, S: Yb, M: Kb };
  function Bb() {
    var t = qn.f(),
      e = Lu();
    return t || e;
  }
  function Vb(t) {
    var e = vi(t);
    e !== null && e.tag === 5 && e.type === "form" ? pv(e) : qn.r(t);
  }
  var Pi = typeof document > "u" ? null : document;
  function Fm(t, e, n) {
    var i = Pi;
    if (i && typeof e == "string" && e) {
      var s = qe(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        $m.has(s) ||
          ($m.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            oe(e, "link", t),
            ae(e),
            i.head.appendChild(e))));
    }
  }
  function Hb(t) {
    (qn.D(t), Fm("dns-prefetch", t, null));
  }
  function Gb(t, e) {
    (qn.C(t, e), Fm("preconnect", t, e));
  }
  function qb(t, e, n) {
    qn.L(t, e, n);
    var i = Pi;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + qe(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + qe(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + qe(n.imageSizes) + '"]'))
        : (s += '[href="' + qe(t) + '"]');
      var c = s;
      switch (e) {
        case "style":
          c = Ji(t);
          break;
        case "script":
          c = $i(t);
      }
      Pe.has(c) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Pe.set(c, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(lr(c))) ||
          (e === "script" && i.querySelector(rr(c))) ||
          ((e = i.createElement("link")),
          oe(e, "link", t),
          ae(e),
          i.head.appendChild(e)));
    }
  }
  function kb(t, e) {
    qn.m(t, e);
    var n = Pi;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + qe(i) + '"][href="' + qe(t) + '"]',
        c = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = $i(t);
      }
      if (
        !Pe.has(c) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        Pe.set(c, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(rr(c))) return;
        }
        ((i = n.createElement("link")),
          oe(i, "link", t),
          ae(i),
          n.head.appendChild(i));
      }
    }
  }
  function Yb(t, e, n) {
    qn.S(t, e, n);
    var i = Pi;
    if (i && t) {
      var s = mi(i).hoistableStyles,
        c = Ji(t);
      e = e || "default";
      var m = s.get(c);
      if (!m) {
        var y = { loading: 0, preload: null };
        if ((m = i.querySelector(lr(c)))) y.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Pe.get(c)) && sf(t, n));
          var _ = (m = i.createElement("link"));
          (ae(_),
            oe(_, "link", t),
            (_._p = new Promise(function (R, j) {
              ((_.onload = R), (_.onerror = j));
            })),
            _.addEventListener("load", function () {
              y.loading |= 1;
            }),
            _.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Qu(m, e, i));
        }
        ((m = { type: "stylesheet", instance: m, count: 1, state: y }),
          s.set(c, m));
      }
    }
  }
  function Xb(t, e) {
    qn.X(t, e);
    var n = Pi;
    if (n && t) {
      var i = mi(n).hoistableScripts,
        s = $i(t),
        c = i.get(s);
      c ||
        ((c = n.querySelector(rr(s))),
        c ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = Pe.get(s)) && of(t, e),
          (c = n.createElement("script")),
          ae(c),
          oe(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        i.set(s, c));
    }
  }
  function Kb(t, e) {
    qn.M(t, e);
    var n = Pi;
    if (n && t) {
      var i = mi(n).hoistableScripts,
        s = $i(t),
        c = i.get(s);
      c ||
        ((c = n.querySelector(rr(s))),
        c ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = Pe.get(s)) && of(t, e),
          (c = n.createElement("script")),
          ae(c),
          oe(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        i.set(s, c));
    }
  }
  function Wm(t, e, n, i) {
    var s = (s = nt.current) ? Ku(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Ji(n.href)),
            (n = mi(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Ji(n.href);
          var c = mi(s).hoistableStyles,
            m = c.get(t);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, m),
              (c = s.querySelector(lr(t))) &&
                !c._p &&
                ((m.instance = c), (m.state.loading = 5)),
              Pe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Pe.set(t, n),
                c || Qb(s, t, n, m.state))),
            e && i === null)
          )
            throw Error(u(528, ""));
          return m;
        }
        if (e && i !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = $i(n)),
              (n = mi(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function Ji(t) {
    return 'href="' + qe(t) + '"';
  }
  function lr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Im(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Qb(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        oe(e, "link", n),
        ae(e),
        t.head.appendChild(e));
  }
  function $i(t) {
    return '[src="' + qe(t) + '"]';
  }
  function rr(t) {
    return "script[async]" + t;
  }
  function tp(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + qe(n.href) + '"]');
          if (i) return ((e.instance = i), ae(i), i);
          var s = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            ae(i),
            oe(i, "style", s),
            Qu(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Ji(n.href);
          var c = t.querySelector(lr(s));
          if (c) return ((e.state.loading |= 4), (e.instance = c), ae(c), c);
          ((i = Im(n)),
            (s = Pe.get(s)) && sf(i, s),
            (c = (t.ownerDocument || t).createElement("link")),
            ae(c));
          var m = c;
          return (
            (m._p = new Promise(function (y, _) {
              ((m.onload = y), (m.onerror = _));
            })),
            oe(c, "link", i),
            (e.state.loading |= 4),
            Qu(c, n.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = $i(n.src)),
            (s = t.querySelector(rr(c)))
              ? ((e.instance = s), ae(s), s)
              : ((i = n),
                (s = Pe.get(c)) && ((i = g({}, n)), of(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                ae(s),
                oe(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Qu(i, n.precedence, t));
    return e.instance;
  }
  function Qu(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = i.length ? i[i.length - 1] : null,
        c = s,
        m = 0;
      m < i.length;
      m++
    ) {
      var y = i[m];
      if (y.dataset.precedence === e) c = y;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function sf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function of(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Zu = null;
  function ep(t, e, n) {
    if (Zu === null) {
      var i = new Map(),
        s = (Zu = new Map());
      s.set(n, i);
    } else ((s = Zu), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var c = n[s];
      if (
        !(
          c[bl] ||
          c[fe] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = c.getAttribute(e) || "";
        m = t + m;
        var y = i.get(m);
        y ? y.push(c) : i.set(m, [c]);
      }
    }
    return i;
  }
  function np(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Zb(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ap(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ur = null;
  function Pb() {}
  function Jb(t, e, n) {
    if (ur === null) throw Error(u(475));
    var i = ur;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Ji(n.href),
          c = t.querySelector(lr(s));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Pu.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = c),
            ae(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (n = Im(n)),
          (s = Pe.get(s)) && sf(n, s),
          (c = c.createElement("link")),
          ae(c));
        var m = c;
        ((m._p = new Promise(function (y, _) {
          ((m.onload = y), (m.onerror = _));
        })),
          oe(c, "link", n),
          (e.instance = c));
      }
      (i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Pu.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function $b() {
    if (ur === null) throw Error(u(475));
    var t = ur;
    return (
      t.stylesheets && t.count === 0 && cf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && cf(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                ((t.unsuspend = null), i());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Pu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) cf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Ju = null;
  function cf(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ju = new Map()),
        e.forEach(Fb, t),
        (Ju = null),
        Pu.call(t)));
  }
  function Fb(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ju.get(t);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Ju.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var m = s[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (i = m));
        }
        i && n.set(null, i);
      }
      ((s = e.instance),
        (m = s.getAttribute("data-precedence")),
        (c = n.get(m) || i),
        c === i && n.set(null, s),
        n.set(m, s),
        this.count++,
        (i = Pu.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var sr = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function Wb(t, e, n, i, s, c, m, y) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = io(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = io(0)),
      (this.hiddenUpdates = io(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function ip(t, e, n, i, s, c, m, y, _, R, j, H) {
    return (
      (t = new Wb(t, e, n, m, y, _, R, H)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = De(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Xo()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: i, isDehydrated: n, cache: e }),
      Po(c),
      t
    );
  }
  function lp(t) {
    return t ? ((t = Ti), t) : Ti;
  }
  function rp(t, e, n, i, s, c) {
    ((s = lp(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = aa(e)),
      (i.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (i.callback = c),
      (n = ia(t, i, e)),
      n !== null && (je(n, t, e), Vl(n, t, e)));
  }
  function up(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function ff(t, e) {
    (up(t, e), (t = t.alternate) && up(t, e));
  }
  function sp(t) {
    if (t.tag === 13) {
      var e = Mi(t, 67108864);
      (e !== null && je(e, t, 67108864), ff(t, 67108864));
    }
  }
  var $u = !0;
  function Ib(t, e, n, i) {
    var s = x.T;
    x.T = null;
    var c = q.p;
    try {
      ((q.p = 2), df(t, e, n, i));
    } finally {
      ((q.p = c), (x.T = s));
    }
  }
  function t_(t, e, n, i) {
    var s = x.T;
    x.T = null;
    var c = q.p;
    try {
      ((q.p = 8), df(t, e, n, i));
    } finally {
      ((q.p = c), (x.T = s));
    }
  }
  function df(t, e, n, i) {
    if ($u) {
      var s = hf(i);
      if (s === null) (Wc(t, e, i, Fu, n), cp(t, i));
      else if (n_(s, t, e, n, i)) i.stopPropagation();
      else if ((cp(t, i), e & 4 && -1 < e_.indexOf(t))) {
        for (; s !== null; ) {
          var c = vi(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var m = Ca(c.pendingLanes);
                  if (m !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var _ = 1 << (31 - Re(m));
                      ((y.entanglements[1] |= _), (m &= ~_));
                    }
                    (bn(c), (Nt & 6) === 0 && ((Uu = Yt() + 500), er(0)));
                  }
                }
                break;
              case 13:
                ((y = Mi(c, 2)), y !== null && je(y, c, 2), Lu(), ff(c, 2));
            }
          if (((c = hf(i)), c === null && Wc(t, e, i, Fu, n), c === s)) break;
          s = c;
        }
        s !== null && i.stopPropagation();
      } else Wc(t, e, i, null, n);
    }
  }
  function hf(t) {
    return ((t = go(t)), vf(t));
  }
  var Fu = null;
  function vf(t) {
    if (((Fu = null), (t = hi(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Fu = t), null);
  }
  function op(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qr()) {
          case kr:
            return 2;
          case Yr:
            return 8;
          case ci:
          case ao:
            return 32;
          case fi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mf = !1,
    ga = null,
    ya = null,
    ba = null,
    or = new Map(),
    cr = new Map(),
    _a = [],
    e_ =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function cp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ga = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        ba = null;
        break;
      case "pointerover":
      case "pointerout":
        or.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cr.delete(e.pointerId);
    }
  }
  function fr(t, e, n, i, s, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [s],
        }),
        e !== null && ((e = vi(e)), e !== null && sp(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function n_(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return ((ga = fr(ga, t, e, n, i, s)), !0);
      case "dragenter":
        return ((ya = fr(ya, t, e, n, i, s)), !0);
      case "mouseover":
        return ((ba = fr(ba, t, e, n, i, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (or.set(c, fr(or.get(c) || null, t, e, n, i, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          cr.set(c, fr(cr.get(c) || null, t, e, n, i, s)),
          !0
        );
    }
    return !1;
  }
  function fp(t) {
    var e = hi(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            ((t.blockedOn = e),
              Jy(t.priority, function () {
                if (n.tag === 13) {
                  var i = Ue();
                  i = lo(i);
                  var s = Mi(n, i);
                  (s !== null && je(s, n, i), ff(n, i));
                }
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = hf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((po = i), n.target.dispatchEvent(i), (po = null));
      } else return ((e = vi(n)), e !== null && sp(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function dp(t, e, n) {
    Wu(t) && n.delete(e);
  }
  function a_() {
    ((mf = !1),
      ga !== null && Wu(ga) && (ga = null),
      ya !== null && Wu(ya) && (ya = null),
      ba !== null && Wu(ba) && (ba = null),
      or.forEach(dp),
      cr.forEach(dp));
  }
  function Iu(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      mf ||
        ((mf = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, a_)));
  }
  var ts = null;
  function hp(t) {
    ts !== t &&
      ((ts = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        ts === t && (ts = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (vf(i || n) === null) continue;
            break;
          }
          var c = vi(n);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            hc(c, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function dr(t) {
    function e(_) {
      return Iu(_, t);
    }
    (ga !== null && Iu(ga, t),
      ya !== null && Iu(ya, t),
      ba !== null && Iu(ba, t),
      or.forEach(e),
      cr.forEach(e));
    for (var n = 0; n < _a.length; n++) {
      var i = _a[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < _a.length && ((n = _a[0]), n.blockedOn === null); )
      (fp(n), n.blockedOn === null && _a.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          c = n[i + 1],
          m = s[be] || null;
        if (typeof c == "function") m || hp(n);
        else if (m) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (m = c[be] || null))) y = m.formAction;
            else if (vf(s) !== null) continue;
          } else y = m.action;
          (typeof y == "function" ? (n[i + 1] = y) : (n.splice(i, 3), (i -= 3)),
            hp(n));
        }
      }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  ((es.prototype.render = pf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        i = Ue();
      rp(n, i, t, e, null, null);
    }),
    (es.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (rp(t.current, 2, null, t, null, null), Lu(), (e[di] = null));
        }
      }));
  function es(t) {
    this._internalRoot = t;
  }
  es.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Dd();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < _a.length && e !== 0 && e < _a[n].priority; n++);
      (_a.splice(n, 0, t), n === 0 && fp(t));
    }
  };
  var vp = r.version;
  if (vp !== "19.1.0") throw Error(u(527, vp, "19.1.0"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var i_ = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ns.isDisabled && ns.supportsFiber)
      try {
        ((pl = ns.inject(i_)), (Te = ns));
      } catch {}
  }
  return (
    (vr.createRoot = function (t, e) {
      if (!o(t)) throw Error(u(299));
      var n = !1,
        i = "",
        s = Dv,
        c = Cv,
        m = zv,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (y = e.unstable_transitionCallbacks)),
        (e = ip(t, 1, !1, null, null, n, i, s, c, m, y, null)),
        (t[di] = e.current),
        Fc(t),
        new pf(e)
      );
    }),
    (vr.hydrateRoot = function (t, e, n) {
      if (!o(t)) throw Error(u(299));
      var i = !1,
        s = "",
        c = Dv,
        m = Cv,
        y = zv,
        _ = null,
        R = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (_ = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (R = n.formState)),
        (e = ip(t, 1, !0, e, n ?? null, i, s, c, m, y, _, R)),
        (e.context = lp(null)),
        (n = e.current),
        (i = Ue()),
        (i = lo(i)),
        (s = aa(i)),
        (s.callback = null),
        ia(n, s, i),
        (n = i),
        (e.current.lanes = n),
        yl(e, n),
        bn(e),
        (t[di] = e.current),
        Fc(t),
        new es(e)
      );
    }),
    (vr.version = "19.1.0"),
    vr
  );
}
var qp;
function v1() {
  if (qp) return Sf.exports;
  qp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return (a(), (Sf.exports = h1()), Sf.exports);
}
var m1 = v1(),
  p1 = "Invariant failed";
function Kn(a, r) {
  if (!a) throw new Error(p1);
}
const rl = new WeakMap(),
  ms = new WeakMap(),
  Ds = { current: [] };
let xf = !1,
  Tr = 0;
const pr = new Set(),
  ls = new Map();
function ny(a) {
  const r = Array.from(a).sort((l, u) =>
    l instanceof ul && l.options.deps.includes(u)
      ? 1
      : u instanceof ul && u.options.deps.includes(l)
        ? -1
        : 0,
  );
  for (const l of r) {
    if (Ds.current.includes(l)) continue;
    (Ds.current.push(l), l.recompute());
    const u = ms.get(l);
    if (u)
      for (const o of u) {
        const f = rl.get(o);
        f && ny(f);
      }
  }
}
function g1(a) {
  a.listeners.forEach((r) => r({ prevVal: a.prevState, currentVal: a.state }));
}
function y1(a) {
  a.listeners.forEach((r) => r({ prevVal: a.prevState, currentVal: a.state }));
}
function ay(a) {
  if (
    (Tr > 0 && !ls.has(a) && ls.set(a, a.prevState),
    pr.add(a),
    !(Tr > 0) && !xf)
  )
    try {
      for (xf = !0; pr.size > 0; ) {
        const r = Array.from(pr);
        pr.clear();
        for (const l of r) {
          const u = ls.get(l) ?? l.prevState;
          ((l.prevState = u), g1(l));
        }
        for (const l of r) {
          const u = rl.get(l);
          u && (Ds.current.push(l), ny(u));
        }
        for (const l of r) {
          const u = rl.get(l);
          if (u) for (const o of u) y1(o);
        }
      }
    } finally {
      ((xf = !1), (Ds.current = []), ls.clear());
    }
}
function Mf(a) {
  Tr++;
  try {
    a();
  } finally {
    if ((Tr--, Tr === 0)) {
      const r = Array.from(pr)[0];
      r && ay(r);
    }
  }
}
class td {
  constructor(r, l) {
    ((this.listeners = new Set()),
      (this.subscribe = (u) => {
        var o, f;
        this.listeners.add(u);
        const d =
          (f = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : f.call(o, u, this);
        return () => {
          (this.listeners.delete(u), d == null || d());
        };
      }),
      (this.setState = (u) => {
        var o, f, d;
        ((this.prevState = this.state),
          (this.state =
            (o = this.options) != null && o.updateFn
              ? this.options.updateFn(this.prevState)(u)
              : u(this.prevState)),
          (d = (f = this.options) == null ? void 0 : f.onUpdate) == null ||
            d.call(f),
          ay(this));
      }),
      (this.prevState = r),
      (this.state = r),
      (this.options = l));
  }
}
class ul {
  constructor(r) {
    ((this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const l = [],
          u = [];
        for (const o of this.options.deps)
          (l.push(o.prevState), u.push(o.state));
        return (
          (this.lastSeenDepValues = u),
          { prevDepVals: l, currDepVals: u, prevVal: this.prevState ?? void 0 }
        );
      }),
      (this.recompute = () => {
        var l, u;
        this.prevState = this.state;
        const {
          prevDepVals: o,
          currDepVals: f,
          prevVal: d,
        } = this.getDepVals();
        ((this.state = this.options.fn({
          prevDepVals: o,
          currDepVals: f,
          prevVal: d,
        })),
          (u = (l = this.options).onUpdate) == null || u.call(l));
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const f of this.options.deps)
          f instanceof ul && f.checkIfRecalculationNeededDeeply();
        let l = !1;
        const u = this.lastSeenDepValues,
          { currDepVals: o } = this.getDepVals();
        for (let f = 0; f < o.length; f++)
          if (o[f] !== u[f]) {
            l = !0;
            break;
          }
        l && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const l of this._subscriptions) l();
        }
      )),
      (this.subscribe = (l) => {
        var u, o;
        this.listeners.add(l);
        const f =
          (o = (u = this.options).onSubscribe) == null
            ? void 0
            : o.call(u, l, this);
        return () => {
          (this.listeners.delete(l), f == null || f());
        };
      }),
      (this.options = r),
      (this.state = r.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      })));
  }
  registerOnGraph(r = this.options.deps) {
    for (const l of r)
      if (l instanceof ul)
        (l.registerOnGraph(), this.registerOnGraph(l.options.deps));
      else if (l instanceof td) {
        let u = rl.get(l);
        (u || ((u = new Set()), rl.set(l, u)), u.add(this));
        let o = ms.get(this);
        (o || ((o = new Set()), ms.set(this, o)), o.add(l));
      }
  }
  unregisterFromGraph(r = this.options.deps) {
    for (const l of r)
      if (l instanceof ul) this.unregisterFromGraph(l.options.deps);
      else if (l instanceof td) {
        const u = rl.get(l);
        u && u.delete(this);
        const o = ms.get(this);
        o && o.delete(l);
      }
  }
}
const xa = "__TSR_index",
  kp = "popstate",
  Yp = "beforeunload";
function iy(a) {
  let r = a.getLocation();
  const l = new Set(),
    u = (d) => {
      ((r = a.getLocation()), l.forEach((h) => h({ location: r, action: d })));
    },
    o = (d) => {
      (a.notifyOnIndexChange ?? !0) ? u(d) : (r = a.getLocation());
    },
    f = async ({ task: d, navigateOpts: h, ...v }) => {
      var p, g;
      if ((h == null ? void 0 : h.ignoreBlocker) ?? !1) {
        d();
        return;
      }
      const O = ((p = a.getBlockers) == null ? void 0 : p.call(a)) ?? [],
        C = v.type === "PUSH" || v.type === "REPLACE";
      if (typeof document < "u" && O.length && C)
        for (const N of O) {
          const G = zr(v.path, v.state);
          if (
            await N.blockerFn({
              currentLocation: r,
              nextLocation: G,
              action: v.type,
            })
          ) {
            (g = a.onBlocked) == null || g.call(a);
            return;
          }
        }
      d();
    };
  return {
    get location() {
      return r;
    },
    get length() {
      return a.getLength();
    },
    subscribers: l,
    subscribe: (d) => (
      l.add(d),
      () => {
        l.delete(d);
      }
    ),
    push: (d, h, v) => {
      const p = r.state[xa];
      ((h = ed(p + 1, h)),
        f({
          task: () => {
            (a.pushState(d, h), u({ type: "PUSH" }));
          },
          navigateOpts: v,
          type: "PUSH",
          path: d,
          state: h,
        }));
    },
    replace: (d, h, v) => {
      const p = r.state[xa];
      ((h = ed(p, h)),
        f({
          task: () => {
            (a.replaceState(d, h), u({ type: "REPLACE" }));
          },
          navigateOpts: v,
          type: "REPLACE",
          path: d,
          state: h,
        }));
    },
    go: (d, h) => {
      f({
        task: () => {
          (a.go(d), o({ type: "GO", index: d }));
        },
        navigateOpts: h,
        type: "GO",
      });
    },
    back: (d) => {
      f({
        task: () => {
          (a.back((d == null ? void 0 : d.ignoreBlocker) ?? !1),
            o({ type: "BACK" }));
        },
        navigateOpts: d,
        type: "BACK",
      });
    },
    forward: (d) => {
      f({
        task: () => {
          (a.forward((d == null ? void 0 : d.ignoreBlocker) ?? !1),
            o({ type: "FORWARD" }));
        },
        navigateOpts: d,
        type: "FORWARD",
      });
    },
    canGoBack: () => r.state[xa] !== 0,
    createHref: (d) => a.createHref(d),
    block: (d) => {
      var h;
      if (!a.setBlockers) return () => {};
      const v = ((h = a.getBlockers) == null ? void 0 : h.call(a)) ?? [];
      return (
        a.setBlockers([...v, d]),
        () => {
          var p, g;
          const b = ((p = a.getBlockers) == null ? void 0 : p.call(a)) ?? [];
          (g = a.setBlockers) == null ||
            g.call(
              a,
              b.filter((O) => O !== d),
            );
        }
      );
    },
    flush: () => {
      var d;
      return (d = a.flush) == null ? void 0 : d.call(a);
    },
    destroy: () => {
      var d;
      return (d = a.destroy) == null ? void 0 : d.call(a);
    },
    notify: u,
  };
}
function ed(a, r) {
  return (r || (r = {}), { ...r, key: _d(), [xa]: a });
}
function b1(a) {
  var r;
  const l = typeof document < "u" ? window : void 0,
    u = l.history.pushState,
    o = l.history.replaceState;
  let f = [];
  const d = () => f,
    h = (z) => (f = z),
    v = (z) => z,
    p = () =>
      zr(
        `${l.location.pathname}${l.location.search}${l.location.hash}`,
        l.history.state,
      );
  ((r = l.history.state) != null && r.key) ||
    l.history.replaceState({ [xa]: 0, key: _d() }, "");
  let g = p(),
    b,
    O = !1,
    C = !1,
    N = !1,
    G = !1;
  const X = () => g;
  let Z, rt;
  const tt = () => {
      Z &&
        ((T._ignoreSubscribers = !0),
        (Z.isPush ? l.history.pushState : l.history.replaceState)(
          Z.state,
          "",
          Z.href,
        ),
        (T._ignoreSubscribers = !1),
        (Z = void 0),
        (rt = void 0),
        (b = void 0));
    },
    st = (z, F, J) => {
      const k = v(F);
      (rt || (b = g),
        (g = zr(F, J)),
        (Z = {
          href: k,
          state: J,
          isPush: (Z == null ? void 0 : Z.isPush) || z === "push",
        }),
        rt || (rt = Promise.resolve().then(() => tt())));
    },
    P = (z) => {
      ((g = p()), T.notify({ type: z }));
    },
    Y = async () => {
      if (C) {
        C = !1;
        return;
      }
      const z = p(),
        F = z.state[xa] - g.state[xa],
        J = F === 1,
        k = F === -1,
        I = (!J && !k) || O;
      O = !1;
      const St = I ? "GO" : k ? "BACK" : "FORWARD",
        ut = I ? { type: "GO", index: F } : { type: k ? "BACK" : "FORWARD" };
      if (N) N = !1;
      else {
        const x = d();
        if (typeof document < "u" && x.length) {
          for (const q of x)
            if (
              await q.blockerFn({
                currentLocation: g,
                nextLocation: z,
                action: St,
              })
            ) {
              ((C = !0), l.history.go(1), T.notify(ut));
              return;
            }
        }
      }
      ((g = p()), T.notify(ut));
    },
    W = (z) => {
      if (G) {
        G = !1;
        return;
      }
      let F = !1;
      const J = d();
      if (typeof document < "u" && J.length)
        for (const k of J) {
          const I = k.enableBeforeUnload ?? !0;
          if (I === !0) {
            F = !0;
            break;
          }
          if (typeof I == "function" && I() === !0) {
            F = !0;
            break;
          }
        }
      if (F) return (z.preventDefault(), (z.returnValue = ""));
    },
    T = iy({
      getLocation: X,
      getLength: () => l.history.length,
      pushState: (z, F) => st("push", z, F),
      replaceState: (z, F) => st("replace", z, F),
      back: (z) => (z && (N = !0), (G = !0), l.history.back()),
      forward: (z) => {
        (z && (N = !0), (G = !0), l.history.forward());
      },
      go: (z) => {
        ((O = !0), l.history.go(z));
      },
      createHref: (z) => v(z),
      flush: tt,
      destroy: () => {
        ((l.history.pushState = u),
          (l.history.replaceState = o),
          l.removeEventListener(Yp, W, { capture: !0 }),
          l.removeEventListener(kp, Y));
      },
      onBlocked: () => {
        b && g !== b && (g = b);
      },
      getBlockers: d,
      setBlockers: h,
      notifyOnIndexChange: !1,
    });
  return (
    l.addEventListener(Yp, W, { capture: !0 }),
    l.addEventListener(kp, Y),
    (l.history.pushState = function (...z) {
      const F = u.apply(l.history, z);
      return (T._ignoreSubscribers || P("PUSH"), F);
    }),
    (l.history.replaceState = function (...z) {
      const F = o.apply(l.history, z);
      return (T._ignoreSubscribers || P("REPLACE"), F);
    }),
    T
  );
}
function _1(a = { initialEntries: ["/"] }) {
  const r = a.initialEntries;
  let l = a.initialIndex
    ? Math.min(Math.max(a.initialIndex, 0), r.length - 1)
    : r.length - 1;
  const u = r.map((f, d) => ed(d, void 0));
  return iy({
    getLocation: () => zr(r[l], u[l]),
    getLength: () => r.length,
    pushState: (f, d) => {
      (l < r.length - 1 && (r.splice(l + 1), u.splice(l + 1)),
        u.push(d),
        r.push(f),
        (l = Math.max(r.length - 1, 0)));
    },
    replaceState: (f, d) => {
      ((u[l] = d), (r[l] = f));
    },
    back: () => {
      l = Math.max(l - 1, 0);
    },
    forward: () => {
      l = Math.min(l + 1, r.length - 1);
    },
    go: (f) => {
      l = Math.min(Math.max(l + f, 0), r.length - 1);
    },
    createHref: (f) => f,
  });
}
function zr(a, r) {
  const l = a.indexOf("#"),
    u = a.indexOf("?");
  return {
    href: a,
    pathname: a.substring(
      0,
      l > 0 ? (u > 0 ? Math.min(l, u) : l) : u > 0 ? u : a.length,
    ),
    hash: l > -1 ? a.substring(l) : "",
    search: u > -1 ? a.slice(u, l === -1 ? void 0 : l) : "",
    state: r || { [xa]: 0, key: _d() },
  };
}
function _d() {
  return (Math.random() + 1).toString(36).substring(7);
}
function il(a) {
  return a[a.length - 1];
}
function S1(a) {
  return typeof a == "function";
}
function gr(a, r) {
  return S1(a) ? a(r) : a;
}
function nd(a, r) {
  return r.reduce((l, u) => ((l[u] = a[u]), l), {});
}
function Je(a, r) {
  if (a === r) return a;
  const l = r,
    u = Kp(a) && Kp(l);
  if (u || (Cs(a) && Cs(l))) {
    const o = u ? a : Object.keys(a),
      f = o.length,
      d = u ? l : Object.keys(l),
      h = d.length,
      v = u ? [] : {};
    let p = 0;
    for (let g = 0; g < h; g++) {
      const b = u ? g : d[g];
      ((!u && o.includes(b)) || u) && a[b] === void 0 && l[b] === void 0
        ? ((v[b] = void 0), p++)
        : ((v[b] = Je(a[b], l[b])), v[b] === a[b] && a[b] !== void 0 && p++);
    }
    return f === h && p === f ? a : v;
  }
  return l;
}
function Cs(a) {
  if (!Xp(a)) return !1;
  const r = a.constructor;
  if (typeof r > "u") return !0;
  const l = r.prototype;
  return !(!Xp(l) || !l.hasOwnProperty("isPrototypeOf"));
}
function Xp(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Kp(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function Qp(a, r) {
  let l = Object.keys(a);
  return (r && (l = l.filter((u) => a[u] !== void 0)), l);
}
function Rr(a, r, l) {
  if (a === r) return !0;
  if (typeof a != typeof r) return !1;
  if (Cs(a) && Cs(r)) {
    const u = (l == null ? void 0 : l.ignoreUndefined) ?? !0,
      o = Qp(a, u),
      f = Qp(r, u);
    return !(l != null && l.partial) && o.length !== f.length
      ? !1
      : f.every((d) => Rr(a[d], r[d], l));
  }
  return Array.isArray(a) && Array.isArray(r)
    ? a.length !== r.length
      ? !1
      : !a.some((u, o) => !Rr(u, r[o], l))
    : !1;
}
function tl(a) {
  let r, l;
  const u = new Promise((o, f) => {
    ((r = o), (l = f));
  });
  return (
    (u.status = "pending"),
    (u.resolve = (o) => {
      ((u.status = "resolved"), (u.value = o), r(o), a == null || a(o));
    }),
    (u.reject = (o) => {
      ((u.status = "rejected"), l(o));
    }),
    u
  );
}
function O1(a) {
  return /%[0-9A-Fa-f]{2}/.test(a);
}
function Pn(a) {
  return Ws(a.filter((r) => r !== void 0).join("/"));
}
function Ws(a) {
  return a.replace(/\/{2,}/g, "/");
}
function Sd(a) {
  return a === "/" ? a : a.replace(/^\/{1,}/, "");
}
function Fa(a) {
  return a === "/" ? a : a.replace(/\/{1,}$/, "");
}
function A1(a) {
  return Fa(Sd(a));
}
function E1({
  basepath: a,
  base: r,
  to: l,
  trailingSlash: u = "never",
  caseSensitive: o,
}) {
  var f, d;
  ((r = zs(a, r, o)), (l = zs(a, l, o)));
  let h = ol(r);
  const v = ol(l);
  (h.length > 1 && ((f = il(h)) == null ? void 0 : f.value) === "/" && h.pop(),
    v.forEach((g, b) => {
      g.value === "/"
        ? b
          ? b === v.length - 1 && h.push(g)
          : (h = [g])
        : g.value === ".."
          ? h.pop()
          : g.value === "." || h.push(g);
    }),
    h.length > 1 &&
      (((d = il(h)) == null ? void 0 : d.value) === "/"
        ? u === "never" && h.pop()
        : u === "always" && h.push({ type: "pathname", value: "/" })));
  const p = Pn([a, ...h.map((g) => g.value)]);
  return Ws(p);
}
function ol(a) {
  if (!a) return [];
  a = Ws(a);
  const r = [];
  if (
    (a.slice(0, 1) === "/" &&
      ((a = a.substring(1)), r.push({ type: "pathname", value: "/" })),
    !a)
  )
    return r;
  const l = a.split("/").filter(Boolean);
  return (
    r.push(
      ...l.map((u) =>
        u === "$" || u === "*"
          ? { type: "wildcard", value: u }
          : u.charAt(0) === "$"
            ? { type: "param", value: u }
            : {
                type: "pathname",
                value: u.includes("%25")
                  ? u
                      .split("%25")
                      .map((o) => decodeURI(o))
                      .join("%25")
                  : decodeURI(u),
              },
      ),
    ),
    a.slice(-1) === "/" &&
      ((a = a.substring(1)), r.push({ type: "pathname", value: "/" })),
    r
  );
}
function rs({
  path: a,
  params: r,
  leaveWildcards: l,
  leaveParams: u,
  decodeCharMap: o,
}) {
  const f = ol(a);
  function d(g) {
    const b = r[g],
      O = typeof b == "string";
    return ["*", "_splat"].includes(g)
      ? O
        ? encodeURI(b)
        : b
      : O
        ? x1(b, o)
        : b;
  }
  let h = !1;
  const v = {},
    p = Pn(
      f.map((g) => {
        if (g.type === "wildcard") {
          v._splat = r._splat;
          const b = d("_splat");
          return l ? `${g.value}${b ?? ""}` : b;
        }
        if (g.type === "param") {
          const b = g.value.substring(1);
          if ((!h && !(b in r) && (h = !0), (v[b] = r[b]), u)) {
            const O = d(g.value);
            return `${g.value}${O ?? ""}`;
          }
          return d(b) ?? "undefined";
        }
        return g.value;
      }),
    );
  return { usedParams: v, interpolatedPath: p, isMissingParams: h };
}
function x1(a, r) {
  let l = encodeURIComponent(a);
  if (r) for (const [u, o] of r) l = l.replaceAll(u, o);
  return l;
}
function us(a, r, l) {
  const u = M1(a, r, l);
  if (!(l.to && !u)) return u ?? {};
}
function zs(a, r, l = !1) {
  const u = l ? a : a.toLowerCase(),
    o = l ? r : r.toLowerCase();
  switch (!0) {
    case u === "/":
      return r;
    case o === u:
      return "";
    case r.length < a.length:
      return r;
    case o[u.length] !== "/":
      return r;
    case o.startsWith(u):
      return r.slice(a.length);
    default:
      return r;
  }
}
function M1(a, r, l) {
  if (a !== "/" && !r.startsWith(a)) return;
  r = zs(a, r, l.caseSensitive);
  const u = zs(a, `${l.to ?? "$"}`, l.caseSensitive),
    o = ol(r),
    f = ol(u);
  (r.startsWith("/") || o.unshift({ type: "pathname", value: "/" }),
    u.startsWith("/") || f.unshift({ type: "pathname", value: "/" }));
  const d = {};
  return (() => {
    for (let v = 0; v < Math.max(o.length, f.length); v++) {
      const p = o[v],
        g = f[v],
        b = v >= o.length - 1,
        O = v >= f.length - 1;
      if (g) {
        if (g.type === "wildcard") {
          const C = decodeURI(Pn(o.slice(v).map((N) => N.value)));
          return ((d["*"] = C), (d._splat = C), !0);
        }
        if (g.type === "pathname") {
          if (g.value === "/" && !(p != null && p.value)) return !0;
          if (p) {
            if (l.caseSensitive) {
              if (g.value !== p.value) return !1;
            } else if (g.value.toLowerCase() !== p.value.toLowerCase())
              return !1;
          }
        }
        if (!p) return !1;
        if (g.type === "param") {
          if (p.value === "/") return !1;
          p.value.charAt(0) !== "$" &&
            (d[g.value.substring(1)] = decodeURIComponent(p.value));
        }
      }
      if (!b && O)
        return (
          (d["**"] = Pn(o.slice(v + 1).map((C) => C.value))),
          !!l.fuzzy && (g == null ? void 0 : g.value) !== "/"
        );
    }
    return !0;
  })()
    ? d
    : void 0;
}
function $e(a) {
  return !!(a != null && a.isNotFound);
}
const Ns = "tsr-scroll-restoration-v1_3";
let ly = !1;
try {
  ly = typeof window < "u" && typeof window.sessionStorage == "object";
} catch {}
const T1 = (a, r) => {
    let l;
    return (...u) => {
      l ||
        (l = setTimeout(() => {
          (a(...u), (l = null));
        }, r));
    };
  },
  ll = ly
    ? {
        state: JSON.parse(window.sessionStorage.getItem(Ns) || "null") || {},
        set: (r) => (
          (ll.state = gr(r, ll.state) || ll.state),
          window.sessionStorage.setItem(Ns, JSON.stringify(ll.state))
        ),
      }
    : void 0,
  ad = (a) => a.state.key || a.href;
function R1(a) {
  const r = [];
  let l;
  for (; (l = a.parentNode); )
    (r.unshift(`${a.tagName}:nth-child(${[].indexOf.call(l.children, a) + 1})`),
      (a = l));
  return `${r.join(" > ")}`.toLowerCase();
}
let Us = !1;
function ry(a, r, l, u, o) {
  var f;
  let d;
  try {
    d = JSON.parse(sessionStorage.getItem(a) || "{}");
  } catch (p) {
    console.error(p);
    return;
  }
  const h = r || ((f = window.history.state) == null ? void 0 : f.key),
    v = d[h];
  ((Us = !0),
    (() => {
      if (u && v) {
        for (const g in v) {
          const b = v[g];
          if (g === "window")
            window.scrollTo({ top: b.scrollY, left: b.scrollX, behavior: l });
          else if (g) {
            const O = document.querySelector(g);
            O && ((O.scrollLeft = b.scrollX), (O.scrollTop = b.scrollY));
          }
        }
        return;
      }
      const p = window.location.hash.split("#")[1];
      if (p) {
        const g =
          (window.history.state || {}).__hashScrollIntoViewOptions ?? !0;
        if (g) {
          const b = document.getElementById(p);
          b && b.scrollIntoView(g);
        }
        return;
      }
      [
        "window",
        ...((o == null ? void 0 : o.filter((g) => g !== "window")) ?? []),
      ].forEach((g) => {
        const b = g === "window" ? window : document.querySelector(g);
        b && b.scrollTo({ top: 0, left: 0, behavior: l });
      });
    })(),
    (Us = !1));
}
function w1(a, r) {
  if (
    ((a.options.scrollRestoration ?? !1) && (a.isScrollRestoring = !0),
    typeof document > "u" || a.isScrollRestorationSetup)
  )
    return;
  ((a.isScrollRestorationSetup = !0), (Us = !1));
  const u = a.options.getScrollRestorationKey || ad;
  window.history.scrollRestoration = "manual";
  const o = (f) => {
    if (Us || !a.isScrollRestoring) return;
    let d = "";
    if (f.target === document || f.target === window) d = "window";
    else {
      const v = f.target.getAttribute("data-scroll-restoration-id");
      v ? (d = `[data-scroll-restoration-id="${v}"]`) : (d = R1(f.target));
    }
    const h = u(a.state.location);
    ll.set((v) => {
      const p = (v[h] = v[h] || {}),
        g = (p[d] = p[d] || {});
      if (d === "window")
        ((g.scrollX = window.scrollX || 0), (g.scrollY = window.scrollY || 0));
      else if (d) {
        const b = document.querySelector(d);
        b && ((g.scrollX = b.scrollLeft || 0), (g.scrollY = b.scrollTop || 0));
      }
      return v;
    });
  };
  (typeof document < "u" && document.addEventListener("scroll", T1(o, 100), !0),
    a.subscribe("onRendered", (f) => {
      const d = u(f.toLocation);
      if (!a.resetNextScroll) {
        a.resetNextScroll = !0;
        return;
      }
      (ry(
        Ns,
        d,
        a.options.scrollRestorationBehavior || void 0,
        a.isScrollRestoring || void 0,
        a.options.scrollToTopSelectors || void 0,
      ),
        a.isScrollRestoring && ll.set((h) => ((h[d] = h[d] || {}), h)));
    }));
}
function D1(a) {
  if (typeof document < "u" && document.querySelector) {
    const r = a.state.location.state.__hashScrollIntoViewOptions ?? !0;
    if (r && a.state.location.hash !== "") {
      const l = document.getElementById(a.state.location.hash);
      l && l.scrollIntoView(r);
    }
  }
}
function C1(a, r) {
  const l = Object.entries(a).flatMap(([o, f]) =>
    Array.isArray(f) ? f.map((d) => [o, String(d)]) : [[o, String(f)]],
  );
  return "" + new URLSearchParams(l).toString();
}
function Tf(a) {
  if (!a) return "";
  const r = O1(a)
    ? decodeURIComponent(a)
    : decodeURIComponent(encodeURIComponent(a));
  return r === "false"
    ? !1
    : r === "true"
      ? !0
      : +r * 0 === 0 && +r + "" === r
        ? +r
        : r;
}
function z1(a, r) {
  const l = a;
  return [...new URLSearchParams(l).entries()].reduce((f, [d, h]) => {
    const v = f[d];
    return (
      v == null
        ? (f[d] = Tf(h))
        : (f[d] = Array.isArray(v) ? [...v, Tf(h)] : [v, Tf(h)]),
      f
    );
  }, {});
}
const N1 = j1(JSON.parse),
  U1 = L1(JSON.stringify, JSON.parse);
function j1(a) {
  return (r) => {
    r.substring(0, 1) === "?" && (r = r.substring(1));
    const l = z1(r);
    for (const u in l) {
      const o = l[u];
      if (typeof o == "string")
        try {
          l[u] = a(o);
        } catch {}
    }
    return l;
  };
}
function L1(a, r) {
  function l(u) {
    if (typeof u == "object" && u !== null)
      try {
        return a(u);
      } catch {}
    else if (typeof u == "string" && typeof r == "function")
      try {
        return (r(u), a(u));
      } catch {}
    return u;
  }
  return (u) => {
    ((u = { ...u }),
      Object.keys(u).forEach((f) => {
        const d = u[f];
        typeof d > "u" || d === void 0 ? delete u[f] : (u[f] = l(d));
      }));
    const o = C1(u).toString();
    return o ? `?${o}` : "";
  };
}
const rn = "__root__";
function $a(a) {
  return !!(a != null && a.isRedirect);
}
function Rf(a) {
  return !!(a != null && a.isRedirect) && a.href;
}
function Ia(a) {
  const r = a.resolvedLocation,
    l = a.location,
    u = (r == null ? void 0 : r.pathname) !== l.pathname,
    o = (r == null ? void 0 : r.href) !== l.href,
    f = (r == null ? void 0 : r.hash) !== l.hash;
  return {
    fromLocation: r,
    toLocation: l,
    pathChanged: u,
    hrefChanged: o,
    hashChanged: f,
  };
}
class B1 {
  constructor(r) {
    ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.isScrollRestoring = !1),
      (this.isScrollRestorationSetup = !1),
      (this.startTransition = (l) => l()),
      (this.update = (l) => {
        var u;
        l.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.",
          );
        const o = this.options;
        ((this.options = { ...this.options, ...l }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options
            .pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((f) => [
                  encodeURIComponent(f),
                  f,
                ]),
              )
            : void 0),
          (!this.basepath || (l.basepath && l.basepath !== o.basepath)) &&
            (l.basepath === void 0 || l.basepath === "" || l.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${A1(l.basepath)}`)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer
                ? _1({ initialEntries: [this.basepath || "/"] })
                : b1())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            ((this.__store = new td(H1(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (f) => !["redirected"].includes(f.status),
                  ),
                };
              },
            })),
            w1(this)),
          typeof window < "u" &&
            "CSS" in window &&
            typeof ((u = window.CSS) == null ? void 0 : u.supports) ==
              "function" &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              "selector(:active-view-transition-type(a)",
            )));
      }),
      (this.buildRouteTree = () => {
        ((this.routesById = {}), (this.routesByPath = {}));
        const l = this.options.notFoundRoute;
        l &&
          (l.init({
            originalIndex: 99999999999,
            defaultSsr: this.options.defaultSsr,
          }),
          (this.routesById[l.id] = l));
        const u = (d) => {
          d.forEach((h, v) => {
            h.init({ originalIndex: v, defaultSsr: this.options.defaultSsr });
            const p = this.routesById[h.id];
            if (
              (Kn(!p, `Duplicate routes found with id: ${String(h.id)}`),
              (this.routesById[h.id] = h),
              !h.isRoot && h.path)
            ) {
              const b = Fa(h.fullPath);
              (!this.routesByPath[b] || h.fullPath.endsWith("/")) &&
                (this.routesByPath[b] = h);
            }
            const g = h.children;
            g != null && g.length && u(g);
          });
        };
        u([this.routeTree]);
        const o = [];
        (Object.values(this.routesById).forEach((d, h) => {
          var v;
          if (d.isRoot || !d.path) return;
          const p = Sd(d.fullPath),
            g = ol(p);
          for (
            ;
            g.length > 1 && ((v = g[0]) == null ? void 0 : v.value) === "/";

          )
            g.shift();
          const b = g.map((O) =>
            O.value === "/"
              ? 0.75
              : O.type === "param"
                ? 0.5
                : O.type === "wildcard"
                  ? 0.25
                  : 1,
          );
          o.push({ child: d, trimmed: p, parsed: g, index: h, scores: b });
        }),
          (this.flatRoutes = o
            .sort((d, h) => {
              const v = Math.min(d.scores.length, h.scores.length);
              for (let p = 0; p < v; p++)
                if (d.scores[p] !== h.scores[p])
                  return h.scores[p] - d.scores[p];
              if (d.scores.length !== h.scores.length)
                return h.scores.length - d.scores.length;
              for (let p = 0; p < v; p++)
                if (d.parsed[p].value !== h.parsed[p].value)
                  return d.parsed[p].value > h.parsed[p].value ? 1 : -1;
              return d.index - h.index;
            })
            .map((d, h) => ((d.child.rank = h), d.child))));
      }),
      (this.subscribe = (l, u) => {
        const o = { eventType: l, fn: u };
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o);
          }
        );
      }),
      (this.emit = (l) => {
        this.subscribers.forEach((u) => {
          u.eventType === l.type && u.fn(l);
        });
      }),
      (this.parseLocation = (l, u) => {
        const o = ({ pathname: v, search: p, hash: g, state: b }) => {
            const O = this.options.parseSearch(p),
              C = this.options.stringifySearch(O);
            return {
              pathname: v,
              searchStr: C,
              search: Je(l == null ? void 0 : l.search, O),
              hash: g.split("#").reverse()[0] ?? "",
              href: `${v}${C}${g}`,
              state: Je(l == null ? void 0 : l.state, b),
            };
          },
          f = o(u ?? this.history.location),
          { __tempLocation: d, __tempKey: h } = f.state;
        if (d && (!h || h === this.tempLocationKey)) {
          const v = o(d);
          return (
            (v.state.key = f.state.key),
            delete v.state.__tempLocation,
            { ...v, maskedLocation: f }
          );
        }
        return f;
      }),
      (this.resolvePathWithBase = (l, u) =>
        E1({
          basepath: this.basepath,
          base: l,
          to: Ws(u),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.matchRoutes = (l, u, o) =>
        typeof l == "string"
          ? this.matchRoutesInternal({ pathname: l, search: u }, o)
          : this.matchRoutesInternal(l, u)),
      (this.getMatchedRoutes = (l, u) => {
        let o = {};
        const f = Fa(l.pathname),
          d = (g) =>
            us(this.basepath, f, {
              to: g.fullPath,
              caseSensitive:
                g.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let h =
          (u == null ? void 0 : u.to) !== void 0
            ? this.routesByPath[u.to]
            : void 0;
        h
          ? (o = d(h))
          : (h = this.flatRoutes.find((g) => {
              const b = d(g);
              return b ? ((o = b), !0) : !1;
            }));
        let v = h || this.routesById[rn];
        const p = [v];
        for (; v.parentRoute; ) ((v = v.parentRoute), p.unshift(v));
        return { matchedRoutes: p, routeParams: o, foundRoute: h };
      }),
      (this.cancelMatch = (l) => {
        const u = this.getMatch(l);
        u && (u.abortController.abort(), clearTimeout(u.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var l;
        (l = this.state.pendingMatches) == null ||
          l.forEach((u) => {
            this.cancelMatch(u.id);
          });
      }),
      (this.buildLocation = (l) => {
        const u = (f = {}, d) => {
            var h, v, p, g, b, O, C;
            const N = f._fromLocation
                ? this.matchRoutes(f._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              G =
                f.from != null
                  ? N.find((k) =>
                      us(this.basepath, Fa(k.pathname), {
                        to: f.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      }),
                    )
                  : void 0,
              X =
                (G == null ? void 0 : G.pathname) ||
                this.latestLocation.pathname;
            Kn(
              f.from == null || G != null,
              "Could not find match for from: " + f.from,
            );
            const Z =
                (h = this.state.pendingMatches) != null && h.length
                  ? (v = il(this.state.pendingMatches)) == null
                    ? void 0
                    : v.search
                  : ((p = il(N)) == null ? void 0 : p.search) ||
                    this.latestLocation.search,
              rt =
                d == null
                  ? void 0
                  : d.matchedRoutes.filter((k) =>
                      N.find((I) => I.routeId === k.id),
                    );
            let tt;
            if (f.to) {
              const k =
                (G == null ? void 0 : G.fullPath) ||
                ((g = il(N)) == null ? void 0 : g.fullPath) ||
                this.latestLocation.pathname;
              tt = this.resolvePathWithBase(k, `${f.to}`);
            } else {
              const k =
                this.routesById[
                  (b =
                    rt == null
                      ? void 0
                      : rt.find((I) => {
                          const St = rs({
                            path: I.fullPath,
                            params: (d == null ? void 0 : d.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          }).interpolatedPath;
                          return Pn([this.basepath, St]) === X;
                        })) == null
                    ? void 0
                    : b.id
                ];
              tt = this.resolvePathWithBase(
                X,
                (k == null ? void 0 : k.to) ?? X,
              );
            }
            const st = { ...((O = il(N)) == null ? void 0 : O.params) };
            let P =
              (f.params ?? !0) === !0 ? st : { ...st, ...gr(f.params, st) };
            (Object.keys(P).length > 0 &&
              (d == null ||
                d.matchedRoutes
                  .map((k) => {
                    var I;
                    return (
                      ((I = k.options.params) == null ? void 0 : I.stringify) ??
                      k.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((k) => {
                    P = { ...P, ...k(P) };
                  })),
              (tt = rs({
                path: tt,
                params: P ?? {},
                leaveWildcards: !1,
                leaveParams: l.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }).interpolatedPath));
            let Y = Z;
            if (
              l._includeValidateSearch &&
              (C = this.options.search) != null &&
              C.strict
            ) {
              let k = {};
              (d == null ||
                d.matchedRoutes.forEach((I) => {
                  try {
                    I.options.validateSearch &&
                      (k = {
                        ...k,
                        ...(wf(I.options.validateSearch, { ...k, ...Y }) ?? {}),
                      });
                  } catch {}
                }),
                (Y = k));
            }
            ((Y = ((k) => {
              const I =
                  (d == null
                    ? void 0
                    : d.matchedRoutes.reduce((x, q) => {
                        var B;
                        const gt = [];
                        if ("search" in q.options)
                          (B = q.options.search) != null &&
                            B.middlewares &&
                            gt.push(...q.options.search.middlewares);
                        else if (
                          q.options.preSearchFilters ||
                          q.options.postSearchFilters
                        ) {
                          const S = ({ search: U, next: K }) => {
                            let V = U;
                            "preSearchFilters" in q.options &&
                              q.options.preSearchFilters &&
                              (V = q.options.preSearchFilters.reduce(
                                (ft, nt) => nt(ft),
                                U,
                              ));
                            const Q = K(V);
                            return "postSearchFilters" in q.options &&
                              q.options.postSearchFilters
                              ? q.options.postSearchFilters.reduce(
                                  (ft, nt) => nt(ft),
                                  Q,
                                )
                              : Q;
                          };
                          gt.push(S);
                        }
                        if (
                          l._includeValidateSearch &&
                          q.options.validateSearch
                        ) {
                          const S = ({ search: U, next: K }) => {
                            const V = K(U);
                            try {
                              return {
                                ...V,
                                ...(wf(q.options.validateSearch, V) ?? {}),
                              };
                            } catch {
                              return V;
                            }
                          };
                          gt.push(S);
                        }
                        return x.concat(gt);
                      }, [])) ?? [],
                St = ({ search: x }) =>
                  f.search ? (f.search === !0 ? x : gr(f.search, x)) : {};
              I.push(St);
              const ut = (x, q) => {
                if (x >= I.length) return q;
                const B = I[x];
                return B({ search: q, next: (S) => ut(x + 1, S) });
              };
              return ut(0, k);
            })(Y)),
              (Y = Je(Z, Y)));
            const T = this.options.stringifySearch(Y),
              z =
                f.hash === !0
                  ? this.latestLocation.hash
                  : f.hash
                    ? gr(f.hash, this.latestLocation.hash)
                    : void 0,
              F = z ? `#${z}` : "";
            let J =
              f.state === !0
                ? this.latestLocation.state
                : f.state
                  ? gr(f.state, this.latestLocation.state)
                  : {};
            return (
              (J = Je(this.latestLocation.state, J)),
              {
                pathname: tt,
                search: Y,
                searchStr: T,
                state: J,
                hash: z ?? "",
                href: `${tt}${T}${F}`,
                unmaskOnReload: f.unmaskOnReload,
              }
            );
          },
          o = (f = {}, d) => {
            var h;
            const v = u(f);
            let p = d ? u(d) : void 0;
            if (!p) {
              let O = {};
              const C =
                (h = this.options.routeMasks) == null
                  ? void 0
                  : h.find((N) => {
                      const G = us(this.basepath, v.pathname, {
                        to: N.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return G ? ((O = G), !0) : !1;
                    });
              if (C) {
                const { from: N, ...G } = C;
                ((d = { ...nd(l, ["from"]), ...G, params: O }), (p = u(d)));
              }
            }
            const g = this.getMatchedRoutes(v, f),
              b = u(f, g);
            if (p) {
              const O = this.getMatchedRoutes(p, d),
                C = u(d, O);
              b.maskedLocation = C;
            }
            return b;
          };
        return l.mask ? o(l, { ...nd(l, ["from"]), ...l.mask }) : o(l);
      }),
      (this.commitLocation = ({
        viewTransition: l,
        ignoreBlocker: u,
        ...o
      }) => {
        const f = () => {
            const v = ["key", "__TSR_index", "__hashScrollIntoViewOptions"];
            v.forEach((g) => {
              o.state[g] = this.latestLocation.state[g];
            });
            const p = Rr(o.state, this.latestLocation.state);
            return (
              v.forEach((g) => {
                delete o.state[g];
              }),
              p
            );
          },
          d = this.latestLocation.href === o.href,
          h = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = tl(() => {
            h == null || h.resolve();
          })),
          d && f())
        )
          this.load();
        else {
          let { maskedLocation: v, hashScrollIntoView: p, ...g } = o;
          (v &&
            ((g = {
              ...v,
              state: {
                ...v.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...g,
                  search: g.searchStr,
                  state: {
                    ...g.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (g.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (g.state.__tempKey = this.tempLocationKey)),
            (g.state.__hashScrollIntoViewOptions =
              p ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = l),
            this.history[o.replace ? "replace" : "push"](g.href, g.state, {
              ignoreBlocker: u,
            }));
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: l,
        resetScroll: u,
        hashScrollIntoView: o,
        viewTransition: f,
        ignoreBlocker: d,
        href: h,
        ...v
      } = {}) => {
        if (h) {
          const g = this.history.location.state.__TSR_index,
            b = zr(h, { __TSR_index: l ? g : g + 1 });
          ((v.to = b.pathname),
            (v.search = this.options.parseSearch(b.search)),
            (v.hash = b.hash.slice(1)));
        }
        const p = this.buildLocation({ ...v, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...p,
          viewTransition: f,
          replace: l,
          resetScroll: u,
          hashScrollIntoView: o,
          ignoreBlocker: d,
        });
      }),
      (this.navigate = ({ to: l, reloadDocument: u, href: o, ...f }) => {
        if (u) {
          if (!o) {
            const d = this.buildLocation({ to: l, ...f });
            o = this.history.createHref(d.href);
          }
          f.replace ? window.location.replace(o) : (window.location.href = o);
          return;
        }
        return this.buildAndCommitLocation({ ...f, href: o, to: l });
      }),
      (this.load = async (l) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let u, o, f;
        for (
          f = new Promise((d) => {
            this.startTransition(async () => {
              var h;
              try {
                const v = this.latestLocation,
                  p = this.state.resolvedLocation;
                this.cancelMatches();
                let g;
                (Mf(() => {
                  ((g = this.matchRoutes(v)),
                    this.__store.setState((b) => ({
                      ...b,
                      status: "pending",
                      isLoading: !0,
                      location: v,
                      pendingMatches: g,
                      cachedMatches: b.cachedMatches.filter(
                        (O) => !g.find((C) => C.id === O.id),
                      ),
                    })));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: "onBeforeNavigate",
                      ...Ia({ resolvedLocation: p, location: v }),
                    }),
                  this.emit({
                    type: "onBeforeLoad",
                    ...Ia({ resolvedLocation: p, location: v }),
                  }),
                  await this.loadMatches({
                    sync: l == null ? void 0 : l.sync,
                    matches: g,
                    location: v,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let b, O, C;
                        (Mf(() => {
                          (this.__store.setState((N) => {
                            const G = N.matches,
                              X = N.pendingMatches || N.matches;
                            return (
                              (b = G.filter(
                                (Z) => !X.find((rt) => rt.id === Z.id),
                              )),
                              (O = X.filter(
                                (Z) => !G.find((rt) => rt.id === Z.id),
                              )),
                              (C = G.filter((Z) =>
                                X.find((rt) => rt.id === Z.id),
                              )),
                              {
                                ...N,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: X,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...N.cachedMatches,
                                  ...b.filter((Z) => Z.status !== "error"),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache());
                        }),
                          [
                            [b, "onLeave"],
                            [O, "onEnter"],
                            [C, "onStay"],
                          ].forEach(([N, G]) => {
                            N.forEach((X) => {
                              var Z, rt;
                              (rt = (Z =
                                this.looseRoutesById[X.routeId].options)[G]) ==
                                null || rt.call(Z, X);
                            });
                          }));
                      });
                    },
                  }));
              } catch (v) {
                (Rf(v)
                  ? ((u = v),
                    this.isServer ||
                      this.navigate({ ...u, replace: !0, ignoreBlocker: !0 }))
                  : $e(v) && (o = v),
                  this.__store.setState((p) => ({
                    ...p,
                    statusCode: u
                      ? u.statusCode
                      : o
                        ? 404
                        : p.matches.some((g) => g.status === "error")
                          ? 500
                          : 200,
                    redirect: u,
                  })));
              }
              (this.latestLoadPromise === f &&
                ((h = this.commitLocationPromise) == null || h.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                d());
            });
          }),
            this.latestLoadPromise = f,
            await f;
          this.latestLoadPromise && f !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
        this.hasNotFoundMatch() &&
          this.__store.setState((d) => ({ ...d, statusCode: 404 }));
      }),
      (this.startViewTransition = (l) => {
        const u =
          this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          u &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            typeof document.startViewTransition == "function")
        ) {
          let o;
          if (typeof u == "object" && this.isViewTransitionTypesSupported) {
            const f = this.latestLocation,
              d = this.state.resolvedLocation,
              h =
                typeof u.types == "function"
                  ? u.types(Ia({ resolvedLocation: d, location: f }))
                  : u.types;
            o = { update: l, types: h };
          } else o = l;
          document.startViewTransition(o);
        } else l();
      }),
      (this.updateMatch = (l, u) => {
        var o;
        let f;
        const d =
            (o = this.state.pendingMatches) == null
              ? void 0
              : o.find((g) => g.id === l),
          h = this.state.matches.find((g) => g.id === l),
          v = this.state.cachedMatches.find((g) => g.id === l),
          p = d ? "pendingMatches" : h ? "matches" : v ? "cachedMatches" : "";
        return (
          p &&
            this.__store.setState((g) => {
              var b;
              return {
                ...g,
                [p]:
                  (b = g[p]) == null
                    ? void 0
                    : b.map((O) => (O.id === l ? (f = u(O)) : O)),
              };
            }),
          f
        );
      }),
      (this.getMatch = (l) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((u) => u.id === l)),
      (this.loadMatches = async ({
        location: l,
        matches: u,
        preload: o,
        onReady: f,
        updateMatch: d = this.updateMatch,
        sync: h,
      }) => {
        let v,
          p = !1;
        const g = async () => {
            p || ((p = !0), await (f == null ? void 0 : f()));
          },
          b = (C) => !!(o && !this.state.matches.find((N) => N.id === C)),
          O = (C, N) => {
            var G, X, Z, rt;
            if (Rf(N) && !N.reloadDocument) throw N;
            if ($a(N) || $e(N)) {
              if (
                (d(C.id, (tt) => ({
                  ...tt,
                  status: $a(N) ? "redirected" : $e(N) ? "notFound" : "error",
                  isFetching: !1,
                  error: N,
                  beforeLoadPromise: void 0,
                  loaderPromise: void 0,
                })),
                N.routeId || (N.routeId = C.routeId),
                (G = C.beforeLoadPromise) == null || G.resolve(),
                (X = C.loaderPromise) == null || X.resolve(),
                (Z = C.loadPromise) == null || Z.resolve(),
                $a(N))
              )
                throw (
                  (p = !0),
                  (N = this.resolveRedirect({ ...N, _fromLocation: l })),
                  N
                );
              if ($e(N))
                throw (
                  this._handleNotFound(u, N, { updateMatch: d }),
                  (rt = this.serverSsr) == null ||
                    rt.onMatchSettled({
                      router: this,
                      match: this.getMatch(C.id),
                    }),
                  N
                );
            }
          };
        try {
          (await new Promise((C, N) => {
            (async () => {
              var G, X, Z, rt;
              try {
                const tt = (Y, W, T) => {
                  var z, F;
                  const { id: J, routeId: k } = u[Y],
                    I = this.looseRoutesById[k];
                  if (W instanceof Promise) throw W;
                  ((W.routerCode = T), (v = v ?? Y), O(this.getMatch(J), W));
                  try {
                    (F = (z = I.options).onError) == null || F.call(z, W);
                  } catch (St) {
                    ((W = St), O(this.getMatch(J), W));
                  }
                  d(J, (St) => {
                    var ut, x;
                    return (
                      (ut = St.beforeLoadPromise) == null || ut.resolve(),
                      (x = St.loadPromise) == null || x.resolve(),
                      {
                        ...St,
                        error: W,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [Y, { id: W, routeId: T }] of u.entries()) {
                  const z = this.getMatch(W),
                    F = (G = u[Y - 1]) == null ? void 0 : G.id,
                    J = this.looseRoutesById[T],
                    k = J.options.pendingMs ?? this.options.defaultPendingMs,
                    I = !!(
                      f &&
                      !this.isServer &&
                      !b(W) &&
                      (J.options.loader || J.options.beforeLoad || Zp(J)) &&
                      typeof k == "number" &&
                      k !== 1 / 0 &&
                      (J.options.pendingComponent ??
                        ((X = this.options) == null
                          ? void 0
                          : X.defaultPendingComponent))
                    );
                  let St = !0;
                  if (
                    ((z.beforeLoadPromise || z.loaderPromise) &&
                      (I &&
                        setTimeout(() => {
                          try {
                            g();
                          } catch {}
                        }, k),
                      await z.beforeLoadPromise,
                      (St = this.getMatch(W).status !== "success")),
                    St)
                  ) {
                    try {
                      d(W, (dt) => {
                        const ct = dt.loadPromise;
                        return {
                          ...dt,
                          loadPromise: tl(() => {
                            ct == null || ct.resolve();
                          }),
                          beforeLoadPromise: tl(),
                        };
                      });
                      const ut = new AbortController();
                      let x;
                      I &&
                        (x = setTimeout(() => {
                          try {
                            g();
                          } catch {}
                        }, k));
                      const { paramsError: q, searchError: B } =
                        this.getMatch(W);
                      (q && tt(Y, q, "PARSE_PARAMS"),
                        B && tt(Y, B, "VALIDATE_SEARCH"));
                      const gt = () =>
                        F
                          ? this.getMatch(F).context
                          : (this.options.context ?? {});
                      d(W, (dt) => ({
                        ...dt,
                        isFetching: "beforeLoad",
                        fetchCount: dt.fetchCount + 1,
                        abortController: ut,
                        pendingTimeout: x,
                        context: { ...gt(), ...dt.__routeContext },
                      }));
                      const {
                          search: S,
                          params: U,
                          context: K,
                          cause: V,
                        } = this.getMatch(W),
                        Q = b(W),
                        ft = {
                          search: S,
                          abortController: ut,
                          params: U,
                          preload: Q,
                          context: K,
                          location: l,
                          navigate: (dt) =>
                            this.navigate({ ...dt, _fromLocation: l }),
                          buildLocation: this.buildLocation,
                          cause: Q ? "preload" : V,
                          matches: u,
                        },
                        nt =
                          (await ((rt = (Z = J.options).beforeLoad) == null
                            ? void 0
                            : rt.call(Z, ft))) ?? {};
                      (($a(nt) || $e(nt)) && tt(Y, nt, "BEFORE_LOAD"),
                        d(W, (dt) => ({
                          ...dt,
                          __beforeLoadContext: nt,
                          context: { ...gt(), ...dt.__routeContext, ...nt },
                          abortController: ut,
                        })));
                    } catch (ut) {
                      tt(Y, ut, "BEFORE_LOAD");
                    }
                    d(W, (ut) => {
                      var x;
                      return (
                        (x = ut.beforeLoadPromise) == null || x.resolve(),
                        { ...ut, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const st = u.slice(0, v),
                  P = [];
                (st.forEach(({ id: Y, routeId: W }, T) => {
                  P.push(
                    (async () => {
                      const { loaderPromise: z } = this.getMatch(Y);
                      let F = !1,
                        J = !1;
                      if (z) {
                        await z;
                        const k = this.getMatch(Y);
                        k.error && O(k, k.error);
                      } else {
                        const k = P[T - 1],
                          I = this.looseRoutesById[W],
                          St = () => {
                            const {
                                params: V,
                                loaderDeps: Q,
                                abortController: ft,
                                context: nt,
                                cause: dt,
                              } = this.getMatch(Y),
                              ct = b(Y);
                            return {
                              params: V,
                              deps: Q,
                              preload: !!ct,
                              parentMatchPromise: k,
                              abortController: ft,
                              context: nt,
                              location: l,
                              navigate: (zt) =>
                                this.navigate({ ...zt, _fromLocation: l }),
                              cause: ct ? "preload" : dt,
                              route: I,
                            };
                          },
                          ut = Date.now() - this.getMatch(Y).updatedAt,
                          x = b(Y),
                          q = x
                            ? (I.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (I.options.staleTime ??
                              this.options.defaultStaleTime ??
                              0),
                          B = I.options.shouldReload,
                          gt = typeof B == "function" ? B(St()) : B;
                        d(Y, (V) => ({
                          ...V,
                          loaderPromise: tl(),
                          preload:
                            !!x && !this.state.matches.find((Q) => Q.id === Y),
                        }));
                        const S = async () => {
                            var V, Q, ft, nt, dt, ct, zt, ye, ce, Me, Fn;
                            try {
                              const He = async () => {
                                const ne = this.getMatch(Y);
                                ne.minPendingPromise &&
                                  (await ne.minPendingPromise);
                              };
                              try {
                                (this.loadRouteChunk(I),
                                  d(Y, (fi) => ({
                                    ...fi,
                                    isFetching: "loader",
                                  })));
                                const ne = await ((Q = (V = I.options)
                                  .loader) == null
                                  ? void 0
                                  : Q.call(V, St()));
                                (O(this.getMatch(Y), ne),
                                  await I._lazyPromise,
                                  await He());
                                const vn = {
                                    matches: u,
                                    match: this.getMatch(Y),
                                    params: this.getMatch(Y).params,
                                    loaderData: ne,
                                  },
                                  Yt =
                                    (nt = (ft = I.options).head) == null
                                      ? void 0
                                      : nt.call(ft, vn),
                                  qr = Yt == null ? void 0 : Yt.meta,
                                  kr = Yt == null ? void 0 : Yt.links,
                                  Yr = Yt == null ? void 0 : Yt.scripts,
                                  ci =
                                    (ct = (dt = I.options).scripts) == null
                                      ? void 0
                                      : ct.call(dt, vn),
                                  ao =
                                    (ye = (zt = I.options).headers) == null
                                      ? void 0
                                      : ye.call(zt, { loaderData: ne });
                                (await I._componentsPromise,
                                  d(Y, (fi) => ({
                                    ...fi,
                                    error: void 0,
                                    status: "success",
                                    isFetching: !1,
                                    updatedAt: Date.now(),
                                    loaderData: ne,
                                    meta: qr,
                                    links: kr,
                                    headScripts: Yr,
                                    headers: ao,
                                    scripts: ci,
                                  })));
                              } catch (ne) {
                                let vn = ne;
                                (await He(), O(this.getMatch(Y), ne));
                                try {
                                  (Me = (ce = I.options).onError) == null ||
                                    Me.call(ce, ne);
                                } catch (Yt) {
                                  ((vn = Yt), O(this.getMatch(Y), Yt));
                                }
                                d(Y, (Yt) => ({
                                  ...Yt,
                                  error: vn,
                                  status: "error",
                                  isFetching: !1,
                                }));
                              }
                              (Fn = this.serverSsr) == null ||
                                Fn.onMatchSettled({
                                  router: this,
                                  match: this.getMatch(Y),
                                });
                            } catch (He) {
                              (d(Y, (ne) => ({ ...ne, loaderPromise: void 0 })),
                                O(this.getMatch(Y), He));
                            }
                          },
                          { status: U, invalid: K } = this.getMatch(Y);
                        ((F = U === "success" && (K || (gt ?? ut > q))),
                          (x && I.options.preload === !1) ||
                            (F && !h
                              ? ((J = !0),
                                (async () => {
                                  try {
                                    await S();
                                    const { loaderPromise: V, loadPromise: Q } =
                                      this.getMatch(Y);
                                    (V == null || V.resolve(),
                                      Q == null || Q.resolve(),
                                      d(Y, (ft) => ({
                                        ...ft,
                                        loaderPromise: void 0,
                                      })));
                                  } catch (V) {
                                    Rf(V) && (await this.navigate(V));
                                  }
                                })())
                              : (U !== "success" || (F && h)) && (await S())));
                      }
                      if (!J) {
                        const { loaderPromise: k, loadPromise: I } =
                          this.getMatch(Y);
                        (k == null || k.resolve(), I == null || I.resolve());
                      }
                      return (
                        d(Y, (k) => ({
                          ...k,
                          isFetching: J ? k.isFetching : !1,
                          loaderPromise: J ? k.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(Y)
                      );
                    })(),
                  );
                }),
                  await Promise.all(P),
                  C());
              } catch (tt) {
                N(tt);
              }
            })();
          }),
            await g());
        } catch (C) {
          if ($a(C) || $e(C)) throw ($e(C) && !o && (await g()), C);
        }
        return u;
      }),
      (this.invalidate = (l) => {
        const u = (o) => {
          var f;
          return (((f = l == null ? void 0 : l.filter) == null
            ? void 0
            : f.call(l, o)) ?? !0)
            ? {
                ...o,
                invalid: !0,
                ...(o.status === "error"
                  ? { status: "pending", error: void 0 }
                  : {}),
              }
            : o;
        };
        return (
          this.__store.setState((o) => {
            var f;
            return {
              ...o,
              matches: o.matches.map(u),
              cachedMatches: o.cachedMatches.map(u),
              pendingMatches:
                (f = o.pendingMatches) == null ? void 0 : f.map(u),
            };
          }),
          this.load({ sync: l == null ? void 0 : l.sync })
        );
      }),
      (this.resolveRedirect = (l) => {
        const u = l;
        return (u.href || (u.href = this.buildLocation(u).href), u);
      }),
      (this.clearCache = (l) => {
        const u = l == null ? void 0 : l.filter;
        u !== void 0
          ? this.__store.setState((o) => ({
              ...o,
              cachedMatches: o.cachedMatches.filter((f) => !u(f)),
            }))
          : this.__store.setState((o) => ({ ...o, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const l = (u) => {
          const o = this.looseRoutesById[u.routeId];
          if (!o.options.loader) return !0;
          const f =
            (u.preload
              ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (o.options.gcTime ?? this.options.defaultGcTime)) ??
            5 * 60 * 1e3;
          return !(u.status !== "error" && Date.now() - u.updatedAt < f);
        };
        this.clearCache({ filter: l });
      }),
      (this.loadRouteChunk = (l) => (
        l._lazyPromise === void 0 &&
          (l.lazyFn
            ? (l._lazyPromise = l.lazyFn().then((u) => {
                const { id: o, ...f } = u.options;
                Object.assign(l.options, f);
              }))
            : (l._lazyPromise = Promise.resolve())),
        l._componentsPromise === void 0 &&
          (l._componentsPromise = l._lazyPromise.then(() =>
            Promise.all(
              uy.map(async (u) => {
                const o = l.options[u];
                o != null && o.preload && (await o.preload());
              }),
            ),
          )),
        l._componentsPromise
      )),
      (this.preloadRoute = async (l) => {
        const u = this.buildLocation(l);
        let o = this.matchRoutes(u, { throwOnError: !0, preload: !0, dest: l });
        const f = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
              (h) => h.id,
            ),
          ),
          d = new Set([...f, ...this.state.cachedMatches.map((h) => h.id)]);
        Mf(() => {
          o.forEach((h) => {
            d.has(h.id) ||
              this.__store.setState((v) => ({
                ...v,
                cachedMatches: [...v.cachedMatches, h],
              }));
          });
        });
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: u,
              preload: !0,
              updateMatch: (h, v) => {
                f.has(h)
                  ? (o = o.map((p) => (p.id === h ? v(p) : p)))
                  : this.updateMatch(h, v);
              },
            })),
            o
          );
        } catch (h) {
          if ($a(h))
            return h.reloadDocument
              ? void 0
              : await this.preloadRoute({ ...h, _fromLocation: u });
          $e(h) || console.error(h);
          return;
        }
      }),
      (this.matchRoute = (l, u) => {
        const o = {
            ...l,
            to: l.to ? this.resolvePathWithBase(l.from || "", l.to) : void 0,
            params: l.params || {},
            leaveParams: !0,
          },
          f = this.buildLocation(o);
        if (u != null && u.pending && this.state.status !== "pending")
          return !1;
        const h = (
            (u == null ? void 0 : u.pending) === void 0
              ? !this.state.isLoading
              : u.pending
          )
            ? this.latestLocation
            : this.state.resolvedLocation || this.state.location,
          v = us(this.basepath, h.pathname, { ...u, to: f.pathname });
        return !v || (l.params && !Rr(v, l.params, { partial: !0 }))
          ? !1
          : v && ((u == null ? void 0 : u.includeSearch) ?? !0)
            ? Rr(h.search, f.search, { partial: !0 })
              ? v
              : !1
            : v;
      }),
      (this._handleNotFound = (
        l,
        u,
        { updateMatch: o = this.updateMatch } = {},
      ) => {
        var f;
        const d = this.routesById[u.routeId ?? ""] ?? this.routeTree,
          h = {};
        for (const p of l) h[p.routeId] = p;
        (!d.options.notFoundComponent &&
          (f = this.options) != null &&
          f.defaultNotFoundComponent &&
          (d.options.notFoundComponent = this.options.defaultNotFoundComponent),
          Kn(d.options.notFoundComponent));
        const v = h[d.id];
        (Kn(v, "Could not find match for route: " + d.id),
          o(v.id, (p) => ({
            ...p,
            status: "notFound",
            error: u,
            isFetching: !1,
          })),
          u.routerCode === "BEFORE_LOAD" &&
            d.parentRoute &&
            ((u.routeId = d.parentRoute.id),
            this._handleNotFound(l, u, { updateMatch: o })));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(
          (l) => l.status === "notFound" || l.globalNotFound,
        )),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...r,
        caseSensitive: r.caseSensitive ?? !1,
        notFoundMode: r.notFoundMode ?? "fuzzy",
        stringifySearch: r.stringifySearch ?? U1,
        parseSearch: r.parseSearch ?? N1,
      }),
      typeof document < "u" && (window.__TSR_ROUTER__ = this));
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(r, l) {
    const {
      foundRoute: u,
      matchedRoutes: o,
      routeParams: f,
    } = this.getMatchedRoutes(r, l == null ? void 0 : l.dest);
    let d = !1;
    (u ? u.path !== "/" && f["**"] : Fa(r.pathname)) &&
      (this.options.notFoundRoute
        ? o.push(this.options.notFoundRoute)
        : (d = !0));
    const h = (() => {
        if (d) {
          if (this.options.notFoundMode !== "root")
            for (let b = o.length - 1; b >= 0; b--) {
              const O = o[b];
              if (O.children) return O.id;
            }
          return rn;
        }
      })(),
      v = o.map((b) => {
        var O;
        let C;
        const N =
          ((O = b.options.params) == null ? void 0 : O.parse) ??
          b.options.parseParams;
        if (N)
          try {
            const G = N(f);
            Object.assign(f, G);
          } catch (G) {
            if (
              ((C = new V1(G.message, { cause: G })),
              l != null && l.throwOnError)
            )
              throw C;
            return C;
          }
      }),
      p = [],
      g = (b) =>
        (b == null ? void 0 : b.id)
          ? (b.context ?? this.options.context ?? {})
          : (this.options.context ?? {});
    return (
      o.forEach((b, O) => {
        var C, N;
        const G = p[O - 1],
          [X, Z, rt] = (() => {
            const I = (G == null ? void 0 : G.search) ?? r.search,
              St = (G == null ? void 0 : G._strictSearch) ?? {};
            try {
              const ut = wf(b.options.validateSearch, { ...I }) ?? {};
              return [{ ...I, ...ut }, { ...St, ...ut }, void 0];
            } catch (ut) {
              let x = ut;
              if (
                (ut instanceof js || (x = new js(ut.message, { cause: ut })),
                l != null && l.throwOnError)
              )
                throw x;
              return [I, {}, x];
            }
          })(),
          tt =
            ((N = (C = b.options).loaderDeps) == null
              ? void 0
              : N.call(C, { search: X })) ?? "",
          st = tt ? JSON.stringify(tt) : "",
          { usedParams: P, interpolatedPath: Y } = rs({
            path: b.fullPath,
            params: f,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          W =
            rs({
              path: b.id,
              params: f,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }).interpolatedPath + st,
          T = this.getMatch(W),
          z = this.state.matches.find((I) => I.routeId === b.id),
          F = z ? "stay" : "enter";
        let J;
        if (T)
          J = {
            ...T,
            cause: F,
            params: z ? Je(z.params, f) : f,
            _strictParams: P,
            search: Je(z ? z.search : T.search, X),
            _strictSearch: Z,
          };
        else {
          const I =
            b.options.loader || b.options.beforeLoad || b.lazyFn || Zp(b)
              ? "pending"
              : "success";
          J = {
            id: W,
            index: O,
            routeId: b.id,
            params: z ? Je(z.params, f) : f,
            _strictParams: P,
            pathname: Pn([this.basepath, Y]),
            updatedAt: Date.now(),
            search: z ? Je(z.search, X) : X,
            _strictSearch: Z,
            searchError: void 0,
            status: I,
            isFetching: !1,
            error: void 0,
            paramsError: v[O],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: F,
            loaderDeps: z ? Je(z.loaderDeps, tt) : tt,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: b.options.staticData || {},
            loadPromise: tl(),
            fullPath: b.fullPath,
          };
        }
        ((l != null && l.preload) || (J.globalNotFound = h === b.id),
          (J.searchError = rt));
        const k = g(G);
        ((J.context = { ...k, ...J.__routeContext, ...J.__beforeLoadContext }),
          p.push(J));
      }),
      p.forEach((b, O) => {
        var C, N, G, X, Z, rt, tt, st;
        const P = this.looseRoutesById[b.routeId];
        if (
          !this.getMatch(b.id) &&
          (l == null ? void 0 : l._buildLocation) !== !0
        ) {
          const W = p[O - 1],
            T = g(W),
            z = {
              deps: b.loaderDeps,
              params: b.params,
              context: T,
              location: r,
              navigate: (F) => this.navigate({ ...F, _fromLocation: r }),
              buildLocation: this.buildLocation,
              cause: b.cause,
              abortController: b.abortController,
              preload: !!b.preload,
              matches: p,
            };
          ((b.__routeContext =
            ((N = (C = P.options).context) == null ? void 0 : N.call(C, z)) ??
            {}),
            (b.context = {
              ...T,
              ...b.__routeContext,
              ...b.__beforeLoadContext,
            }));
        }
        if (b.status === "success") {
          b.headers =
            (X = (G = P.options).headers) == null
              ? void 0
              : X.call(G, { loaderData: b.loaderData });
          const W = {
              matches: p,
              match: b,
              params: b.params,
              loaderData: b.loaderData,
            },
            T = (rt = (Z = P.options).head) == null ? void 0 : rt.call(Z, W);
          ((b.links = T == null ? void 0 : T.links),
            (b.headScripts = T == null ? void 0 : T.scripts),
            (b.meta = T == null ? void 0 : T.meta),
            (b.scripts =
              (st = (tt = P.options).scripts) == null
                ? void 0
                : st.call(tt, W)));
        }
      }),
      p
    );
  }
}
class js extends Error {}
class V1 extends Error {}
function H1(a) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: a,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function wf(a, r) {
  if (a == null) return {};
  if ("~standard" in a) {
    const l = a["~standard"].validate(r);
    if (l instanceof Promise) throw new js("Async validation not supported");
    if (l.issues)
      throw new js(JSON.stringify(l.issues, void 0, 2), { cause: l });
    return l.value;
  }
  return "parse" in a ? a.parse(r) : typeof a == "function" ? a(r) : {};
}
const uy = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent",
];
function Zp(a) {
  var r;
  for (const l of uy) if ((r = a.options[l]) != null && r.preload) return !0;
  return !1;
}
class sy {
  constructor(r) {
    if (
      ((this.init = (l) => {
        var u, o;
        this.originalIndex = l.originalIndex;
        const f = this.options,
          d = !(f != null && f.path) && !(f != null && f.id);
        if (
          ((this.parentRoute =
            (o = (u = this.options).getParentRoute) == null
              ? void 0
              : o.call(u)),
          d)
        )
          this._path = rn;
        else if (!this.parentRoute)
          throw new Error(
            "Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.",
          );
        let h = d ? rn : f == null ? void 0 : f.path;
        h && h !== "/" && (h = Sd(h));
        const v = (f == null ? void 0 : f.id) || h;
        let p = d
          ? rn
          : Pn([this.parentRoute.id === rn ? "" : this.parentRoute.id, v]);
        (h === rn && (h = "/"), p !== rn && (p = Pn(["/", p])));
        const g = p === rn ? "/" : Pn([this.parentRoute.fullPath, h]);
        ((this._path = h),
          (this._id = p),
          (this._fullPath = g),
          (this._to = g),
          (this._ssr = (f == null ? void 0 : f.ssr) ?? l.defaultSsr ?? !0));
      }),
      (this.addChildren = (l) => this._addFileChildren(l)),
      (this._addFileChildren = (l) => (
        Array.isArray(l) && (this.children = l),
        typeof l == "object" &&
          l !== null &&
          (this.children = Object.values(l)),
        this
      )),
      (this._addFileTypes = () => this),
      (this.updateLoader = (l) => (Object.assign(this.options, l), this)),
      (this.update = (l) => (Object.assign(this.options, l), this)),
      (this.lazy = (l) => ((this.lazyFn = l), this)),
      (this.options = r || {}),
      (this.isRoot = !(r != null && r.getParentRoute)),
      r != null && r.id && r != null && r.path)
    )
      throw new Error("Route cannot have both an 'id' and a 'path' option.");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
}
class G1 extends sy {
  constructor(r) {
    super(r);
  }
}
function Od(a) {
  const r = a.errorComponent ?? Is;
  return et.jsx(q1, {
    getResetKey: a.getResetKey,
    onCatch: a.onCatch,
    children: ({ error: l, reset: u }) =>
      l ? mt.createElement(r, { error: l, reset: u }) : a.children,
  });
}
class q1 extends mt.Component {
  constructor() {
    (super(...arguments), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(r) {
    return { resetKey: r.getResetKey() };
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(r, l) {
    l.error && l.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(r, l) {
    this.props.onCatch && this.props.onCatch(r, l);
  }
  render() {
    return this.props.children({
      error:
        this.state.resetKey !== this.props.getResetKey()
          ? null
          : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function Is({ error: a }) {
  const [r, l] = mt.useState(!1);
  return et.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      et.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          et.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          et.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => l((u) => !u),
            children: r ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      et.jsx("div", { style: { height: ".25rem" } }),
      r
        ? et.jsx("div", {
            children: et.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: a.message
                ? et.jsx("code", { children: a.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
var Df = { exports: {} },
  Cf = {},
  zf = { exports: {} },
  Nf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp;
function k1() {
  if (Pp) return Nf;
  Pp = 1;
  var a = jr();
  function r(b, O) {
    return (b === O && (b !== 0 || 1 / b === 1 / O)) || (b !== b && O !== O);
  }
  var l = typeof Object.is == "function" ? Object.is : r,
    u = a.useState,
    o = a.useEffect,
    f = a.useLayoutEffect,
    d = a.useDebugValue;
  function h(b, O) {
    var C = O(),
      N = u({ inst: { value: C, getSnapshot: O } }),
      G = N[0].inst,
      X = N[1];
    return (
      f(
        function () {
          ((G.value = C), (G.getSnapshot = O), v(G) && X({ inst: G }));
        },
        [b, C, O],
      ),
      o(
        function () {
          return (
            v(G) && X({ inst: G }),
            b(function () {
              v(G) && X({ inst: G });
            })
          );
        },
        [b],
      ),
      d(C),
      C
    );
  }
  function v(b) {
    var O = b.getSnapshot;
    b = b.value;
    try {
      var C = O();
      return !l(b, C);
    } catch {
      return !0;
    }
  }
  function p(b, O) {
    return O();
  }
  var g =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : h;
  return (
    (Nf.useSyncExternalStore =
      a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : g),
    Nf
  );
}
var Jp;
function Y1() {
  return (Jp || ((Jp = 1), (zf.exports = k1())), zf.exports);
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p;
function X1() {
  if ($p) return Cf;
  $p = 1;
  var a = jr(),
    r = Y1();
  function l(p, g) {
    return (p === g && (p !== 0 || 1 / p === 1 / g)) || (p !== p && g !== g);
  }
  var u = typeof Object.is == "function" ? Object.is : l,
    o = r.useSyncExternalStore,
    f = a.useRef,
    d = a.useEffect,
    h = a.useMemo,
    v = a.useDebugValue;
  return (
    (Cf.useSyncExternalStoreWithSelector = function (p, g, b, O, C) {
      var N = f(null);
      if (N.current === null) {
        var G = { hasValue: !1, value: null };
        N.current = G;
      } else G = N.current;
      N = h(
        function () {
          function Z(Y) {
            if (!rt) {
              if (
                ((rt = !0), (tt = Y), (Y = O(Y)), C !== void 0 && G.hasValue)
              ) {
                var W = G.value;
                if (C(W, Y)) return (st = W);
              }
              return (st = Y);
            }
            if (((W = st), u(tt, Y))) return W;
            var T = O(Y);
            return C !== void 0 && C(W, T)
              ? ((tt = Y), W)
              : ((tt = Y), (st = T));
          }
          var rt = !1,
            tt,
            st,
            P = b === void 0 ? null : b;
          return [
            function () {
              return Z(g());
            },
            P === null
              ? void 0
              : function () {
                  return Z(P());
                },
          ];
        },
        [g, b, O, C],
      );
      var X = o(p, N[0], N[1]);
      return (
        d(
          function () {
            ((G.hasValue = !0), (G.value = X));
          },
          [X],
        ),
        v(X),
        X
      );
    }),
    Cf
  );
}
var Fp;
function K1() {
  return (Fp || ((Fp = 1), (Df.exports = X1())), Df.exports);
}
var Q1 = K1();
function Z1(a, r = (l) => l) {
  return Q1.useSyncExternalStoreWithSelector(
    a.subscribe,
    () => a.state,
    () => a.state,
    r,
    P1,
  );
}
function P1(a, r) {
  if (Object.is(a, r)) return !0;
  if (typeof a != "object" || a === null || typeof r != "object" || r === null)
    return !1;
  if (a instanceof Map && r instanceof Map) {
    if (a.size !== r.size) return !1;
    for (const [u, o] of a) if (!r.has(u) || !Object.is(o, r.get(u))) return !1;
    return !0;
  }
  if (a instanceof Set && r instanceof Set) {
    if (a.size !== r.size) return !1;
    for (const u of a) if (!r.has(u)) return !1;
    return !0;
  }
  const l = Object.keys(a);
  if (l.length !== Object.keys(r).length) return !1;
  for (let u = 0; u < l.length; u++)
    if (
      !Object.prototype.hasOwnProperty.call(r, l[u]) ||
      !Object.is(a[l[u]], r[l[u]])
    )
      return !1;
  return !0;
}
const Uf = mt.createContext(null);
function oy() {
  return typeof document > "u"
    ? Uf
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = Uf), Uf);
}
function Mn(a) {
  const r = mt.useContext(oy());
  return (a == null || a.warn, r);
}
function xe(a) {
  const r = Mn({ warn: (a == null ? void 0 : a.router) === void 0 }),
    l = (a == null ? void 0 : a.router) || r,
    u = mt.useRef(void 0);
  return Z1(l.__store, (o) => {
    if (a != null && a.select) {
      if (a.structuralSharing ?? l.options.defaultStructuralSharing) {
        const f = Je(u.current, a.select(o));
        return ((u.current = f), f);
      }
      return a.select(o);
    }
    return o;
  });
}
const to = mt.createContext(void 0),
  J1 = mt.createContext(void 0);
function Ra(a) {
  const r = mt.useContext(a.from ? J1 : to);
  return xe({
    select: (u) => {
      const o = u.matches.find((f) =>
        a.from ? a.from === f.routeId : f.id === r,
      );
      if (
        (Kn(
          !((a.shouldThrow ?? !0) && !o),
          `Could not find ${a.from ? `an active match from "${a.from}"` : "a nearest match!"}`,
        ),
        o !== void 0)
      )
        return a.select ? a.select(o) : o;
    },
    structuralSharing: a.structuralSharing,
  });
}
function cy(a) {
  return Ra({
    from: a.from,
    strict: a.strict,
    structuralSharing: a.structuralSharing,
    select: (r) => (a.select ? a.select(r.loaderData) : r.loaderData),
  });
}
function fy(a) {
  const { select: r, ...l } = a;
  return Ra({ ...l, select: (u) => (r ? r(u.loaderDeps) : u.loaderDeps) });
}
function dy(a) {
  return Ra({
    from: a.from,
    strict: a.strict,
    shouldThrow: a.shouldThrow,
    structuralSharing: a.structuralSharing,
    select: (r) => (a.select ? a.select(r.params) : r.params),
  });
}
function hy(a) {
  return Ra({
    from: a.from,
    strict: a.strict,
    shouldThrow: a.shouldThrow,
    structuralSharing: a.structuralSharing,
    select: (r) => (a.select ? a.select(r.search) : r.search),
  });
}
function vy(a) {
  const { navigate: r } = Mn();
  return mt.useCallback(
    (l) => r({ from: a == null ? void 0 : a.from, ...l }),
    [a == null ? void 0 : a.from, r],
  );
}
let $1 = class extends sy {
  constructor(r) {
    (super(r),
      (this.useMatch = (l) =>
        Ra({
          select: l == null ? void 0 : l.select,
          from: this.id,
          structuralSharing: l == null ? void 0 : l.structuralSharing,
        })),
      (this.useRouteContext = (l) =>
        Ra({
          ...l,
          from: this.id,
          select: (u) =>
            l != null && l.select ? l.select(u.context) : u.context,
        })),
      (this.useSearch = (l) =>
        hy({
          select: l == null ? void 0 : l.select,
          structuralSharing: l == null ? void 0 : l.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (l) =>
        dy({
          select: l == null ? void 0 : l.select,
          structuralSharing: l == null ? void 0 : l.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (l) => fy({ ...l, from: this.id })),
      (this.useLoaderData = (l) => cy({ ...l, from: this.id })),
      (this.useNavigate = () => vy({ from: this.fullPath })),
      (this.$$typeof = Symbol.for("react.memo")));
  }
};
function F1(a) {
  return new $1(a);
}
class W1 extends G1 {
  constructor(r) {
    (super(r),
      (this.useMatch = (l) =>
        Ra({
          select: l == null ? void 0 : l.select,
          from: this.id,
          structuralSharing: l == null ? void 0 : l.structuralSharing,
        })),
      (this.useRouteContext = (l) =>
        Ra({
          ...l,
          from: this.id,
          select: (u) =>
            l != null && l.select ? l.select(u.context) : u.context,
        })),
      (this.useSearch = (l) =>
        hy({
          select: l == null ? void 0 : l.select,
          structuralSharing: l == null ? void 0 : l.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (l) =>
        dy({
          select: l == null ? void 0 : l.select,
          structuralSharing: l == null ? void 0 : l.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (l) => fy({ ...l, from: this.id })),
      (this.useLoaderData = (l) => cy({ ...l, from: this.id })),
      (this.useNavigate = () => vy({ from: this.fullPath })),
      (this.$$typeof = Symbol.for("react.memo")));
  }
}
function I1(a) {
  return new W1(a);
}
function my(a) {
  return new tO(a, { silent: !0 }).createRoute;
}
class tO {
  constructor(r, l) {
    ((this.path = r),
      (this.createRoute = (u) => {
        this.silent;
        const o = F1(u);
        return ((o.isRoot = !1), o);
      }),
      (this.silent = l == null ? void 0 : l.silent));
  }
}
function eO(a) {
  const r = xe({
    select: (l) => `not-found-${l.location.pathname}-${l.status}`,
  });
  return et.jsx(Od, {
    getResetKey: () => r,
    onCatch: (l, u) => {
      var o;
      if ($e(l)) (o = a.onCatch) == null || o.call(a, l, u);
      else throw l;
    },
    errorComponent: ({ error: l }) => {
      var u;
      if ($e(l)) return (u = a.fallback) == null ? void 0 : u.call(a, l);
      throw l;
    },
    children: a.children,
  });
}
function nO() {
  return et.jsx("p", { children: "Not Found" });
}
function ps(a) {
  return et.jsx(et.Fragment, { children: a.children });
}
function py(a, r, l) {
  return r.options.notFoundComponent
    ? et.jsx(r.options.notFoundComponent, { data: l })
    : a.options.defaultNotFoundComponent
      ? et.jsx(a.options.defaultNotFoundComponent, { data: l })
      : et.jsx(nO, {});
}
var jf, Wp;
function aO() {
  if (Wp) return jf;
  Wp = 1;
  const a = {},
    r = a.hasOwnProperty,
    l = (T, z) => {
      for (const F in T) r.call(T, F) && z(F, T[F]);
    },
    u = (T, z) => (
      z &&
        l(z, (F, J) => {
          T[F] = J;
        }),
      T
    ),
    o = (T, z) => {
      const F = T.length;
      let J = -1;
      for (; ++J < F; ) z(T[J]);
    },
    f = (T) => "\\u" + ("0000" + T).slice(-4),
    d = (T, z) => {
      let F = T.toString(16);
      return z ? F : F.toUpperCase();
    },
    h = a.toString,
    v = Array.isArray,
    p = (T) => typeof Buffer == "function" && Buffer.isBuffer(T),
    g = (T) => h.call(T) == "[object Object]",
    b = (T) => typeof T == "string" || h.call(T) == "[object String]",
    O = (T) => typeof T == "number" || h.call(T) == "[object Number]",
    C = (T) => typeof T == "bigint",
    N = (T) => typeof T == "function",
    G = (T) => h.call(T) == "[object Map]",
    X = (T) => h.call(T) == "[object Set]",
    Z = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
    },
    rt = /[\\\b\f\n\r\t]/,
    tt = /[0-9]/,
    st = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    P = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
    Y =
      /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
    W = (T, z) => {
      const F = () => {
          ((q = x), ++z.indentLevel, (x = z.indent.repeat(z.indentLevel)));
        },
        J = {
          escapeEverything: !1,
          minimal: !1,
          isScriptContext: !1,
          quotes: "single",
          wrap: !1,
          es6: !1,
          json: !1,
          compact: !0,
          lowercaseHex: !1,
          numbers: "decimal",
          indent: "	",
          indentLevel: 0,
          __inline1__: !1,
          __inline2__: !1,
        },
        k = z && z.json;
      (k && ((J.quotes = "double"), (J.wrap = !0)),
        (z = u(J, z)),
        z.quotes != "single" &&
          z.quotes != "double" &&
          z.quotes != "backtick" &&
          (z.quotes = "single"));
      const I = z.quotes == "double" ? '"' : z.quotes == "backtick" ? "`" : "'",
        St = z.compact,
        ut = z.lowercaseHex;
      let x = z.indent.repeat(z.indentLevel),
        q = "";
      const B = z.__inline1__,
        gt = z.__inline2__,
        S = St
          ? ""
          : `
`;
      let U,
        K = !0;
      const V = z.numbers == "binary",
        Q = z.numbers == "octal",
        ft = z.numbers == "decimal",
        nt = z.numbers == "hexadecimal";
      if ((k && T && N(T.toJSON) && (T = T.toJSON()), !b(T))) {
        if (G(T))
          return T.size == 0
            ? "new Map()"
            : (St || ((z.__inline1__ = !0), (z.__inline2__ = !1)),
              "new Map(" + W(Array.from(T), z) + ")");
        if (X(T))
          return T.size == 0
            ? "new Set()"
            : "new Set(" + W(Array.from(T), z) + ")";
        if (p(T))
          return T.length == 0
            ? "Buffer.from([])"
            : "Buffer.from(" + W(Array.from(T), z) + ")";
        if (v(T))
          return (
            (U = []),
            (z.wrap = !0),
            B && ((z.__inline1__ = !1), (z.__inline2__ = !0)),
            gt || F(),
            o(T, (ct) => {
              ((K = !1),
                gt && (z.__inline2__ = !1),
                U.push((St || gt ? "" : x) + W(ct, z)));
            }),
            K
              ? "[]"
              : gt
                ? "[" + U.join(", ") + "]"
                : "[" + S + U.join("," + S) + S + (St ? "" : q) + "]"
          );
        if (O(T) || C(T)) {
          if (k) return JSON.stringify(Number(T));
          let ct;
          if (ft) ct = String(T);
          else if (nt) {
            let zt = T.toString(16);
            (ut || (zt = zt.toUpperCase()), (ct = "0x" + zt));
          } else
            V ? (ct = "0b" + T.toString(2)) : Q && (ct = "0o" + T.toString(8));
          return C(T) ? ct + "n" : ct;
        } else
          return C(T)
            ? k
              ? JSON.stringify(Number(T))
              : T + "n"
            : g(T)
              ? ((U = []),
                (z.wrap = !0),
                F(),
                l(T, (ct, zt) => {
                  ((K = !1),
                    U.push(
                      (St ? "" : x) +
                        W(ct, z) +
                        ":" +
                        (St ? "" : " ") +
                        W(zt, z),
                    ));
                }),
                K ? "{}" : "{" + S + U.join("," + S) + S + (St ? "" : q) + "}")
              : k
                ? JSON.stringify(T) || "null"
                : String(T);
      }
      const dt = z.escapeEverything ? P : Y;
      return (
        (U = T.replace(dt, (ct, zt, ye, ce, Me, Fn) => {
          if (zt) {
            if (z.minimal) return zt;
            const ne = zt.charCodeAt(0),
              vn = zt.charCodeAt(1);
            if (z.es6) {
              const Yt = (ne - 55296) * 1024 + vn - 56320 + 65536;
              return "\\u{" + d(Yt, ut) + "}";
            }
            return f(d(ne, ut)) + f(d(vn, ut));
          }
          if (ye) return f(d(ye.charCodeAt(0), ut));
          if (ct == "\0" && !k && !tt.test(Fn.charAt(Me + 1))) return "\\0";
          if (ce) return ce == I || z.escapeEverything ? "\\" + ce : ce;
          if (rt.test(ct)) return Z[ct];
          if (z.minimal && !st.test(ct)) return ct;
          const He = d(ct.charCodeAt(0), ut);
          return k || He.length > 2 ? f(He) : "\\x" + ("00" + He).slice(-2);
        })),
        I == "`" && (U = U.replace(/\$\{/g, "\\${")),
        z.isScriptContext &&
          (U = U.replace(/<\/(script|style)/gi, "<\\/$1").replace(
            /<!--/g,
            k ? "\\u003C!--" : "\\x3C!--",
          )),
        z.wrap && (U = I + U + I),
        U
      );
    };
  return ((W.version = "3.0.2"), (jf = W), jf);
}
aO();
function iO({ children: a, log: r }) {
  return typeof document < "u"
    ? null
    : et.jsx("script", {
        className: "tsr-once",
        dangerouslySetInnerHTML: {
          __html: [
            a,
            "",
            'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()',
          ].filter(Boolean).join(`
`),
        },
      });
}
function lO() {
  const a = Mn(),
    l = (a.options.getScrollRestorationKey || ad)(a.latestLocation),
    u = l !== ad(a.latestLocation) ? l : null;
  return !a.isScrollRestoring || !a.isServer
    ? null
    : et.jsx(iO, {
        children: `(${ry.toString()})(${JSON.stringify(Ns)},${JSON.stringify(u)}, undefined, true)`,
        log: !1,
      });
}
const gy = mt.memo(function ({ matchId: r }) {
  var l, u;
  const o = Mn(),
    f = xe({
      select: (Z) => {
        var rt;
        return (rt = Z.matches.find((tt) => tt.id === r)) == null
          ? void 0
          : rt.routeId;
      },
    });
  Kn(f);
  const d = o.routesById[f],
    h = d.options.pendingComponent ?? o.options.defaultPendingComponent,
    v = h ? et.jsx(h, {}) : null,
    p = d.options.errorComponent ?? o.options.defaultErrorComponent,
    g = d.options.onCatch ?? o.options.defaultOnCatch,
    b = d.isRoot
      ? (d.options.notFoundComponent ??
        ((l = o.options.notFoundRoute) == null ? void 0 : l.options.component))
      : d.options.notFoundComponent,
    O =
      (!d.isRoot || d.options.wrapInSuspense) &&
      (d.options.wrapInSuspense ??
        h ??
        ((u = d.options.errorComponent) == null ? void 0 : u.preload))
        ? mt.Suspense
        : ps,
    C = p ? Od : ps,
    N = b ? eO : ps,
    G = xe({ select: (Z) => Z.loadedAt }),
    X = xe({
      select: (Z) => {
        var rt;
        const tt = Z.matches.findIndex((st) => st.id === r);
        return (rt = Z.matches[tt - 1]) == null ? void 0 : rt.routeId;
      },
    });
  return et.jsxs(et.Fragment, {
    children: [
      et.jsx(to.Provider, {
        value: r,
        children: et.jsx(O, {
          fallback: v,
          children: et.jsx(C, {
            getResetKey: () => G,
            errorComponent: p || Is,
            onCatch: (Z, rt) => {
              if ($e(Z)) throw Z;
              g == null || g(Z, rt);
            },
            children: et.jsx(N, {
              fallback: (Z) => {
                if (
                  !b ||
                  (Z.routeId && Z.routeId !== f) ||
                  (!Z.routeId && !d.isRoot)
                )
                  throw Z;
                return mt.createElement(b, Z);
              },
              children: et.jsx(uO, { matchId: r }),
            }),
          }),
        }),
      }),
      X === rn && o.options.scrollRestoration
        ? et.jsxs(et.Fragment, { children: [et.jsx(rO, {}), et.jsx(lO, {})] })
        : null,
    ],
  });
});
function rO() {
  const a = Mn(),
    r = mt.useRef(void 0);
  return et.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      ref: (l) => {
        l &&
          (r.current === void 0 || r.current.href !== a.latestLocation.href) &&
          (a.emit({ type: "onRendered", ...Ia(a.state) }),
          (r.current = a.latestLocation));
      },
    },
    a.latestLocation.state.key,
  );
}
const uO = mt.memo(function ({ matchId: r }) {
    var l, u, o;
    const f = Mn(),
      {
        match: d,
        key: h,
        routeId: v,
      } = xe({
        select: (O) => {
          const C = O.matches.findIndex((tt) => tt.id === r),
            N = O.matches[C],
            G = N.routeId,
            X =
              f.routesById[G].options.remountDeps ??
              f.options.defaultRemountDeps,
            Z =
              X == null
                ? void 0
                : X({
                    routeId: G,
                    loaderDeps: N.loaderDeps,
                    params: N._strictParams,
                    search: N._strictSearch,
                  });
          return {
            key: Z ? JSON.stringify(Z) : void 0,
            routeId: G,
            match: nd(N, ["id", "status", "error"]),
          };
        },
        structuralSharing: !0,
      }),
      p = f.routesById[v],
      g = mt.useMemo(() => {
        const O = p.options.component ?? f.options.defaultComponent;
        return O ? et.jsx(O, {}, h) : et.jsx(yy, {});
      }, [h, p.options.component, f.options.defaultComponent]),
      b = (p.options.errorComponent ?? f.options.defaultErrorComponent) || Is;
    if (d.status === "notFound") return (Kn($e(d.error)), py(f, p, d.error));
    if (d.status === "redirected")
      throw (
        Kn($a(d.error)),
        (l = f.getMatch(d.id)) == null ? void 0 : l.loadPromise
      );
    if (d.status === "error") {
      if (f.isServer)
        return et.jsx(b, {
          error: d.error,
          reset: void 0,
          info: { componentStack: "" },
        });
      throw d.error;
    }
    if (d.status === "pending") {
      const O = p.options.pendingMinMs ?? f.options.defaultPendingMinMs;
      if (
        O &&
        !((u = f.getMatch(d.id)) != null && u.minPendingPromise) &&
        !f.isServer
      ) {
        const C = tl();
        (Promise.resolve().then(() => {
          f.updateMatch(d.id, (N) => ({ ...N, minPendingPromise: C }));
        }),
          setTimeout(() => {
            (C.resolve(),
              f.updateMatch(d.id, (N) => ({
                ...N,
                minPendingPromise: void 0,
              })));
          }, O));
      }
      throw (o = f.getMatch(d.id)) == null ? void 0 : o.loadPromise;
    }
    return g;
  }),
  yy = mt.memo(function () {
    const r = Mn(),
      l = mt.useContext(to),
      u = xe({
        select: (p) => {
          var g;
          return (g = p.matches.find((b) => b.id === l)) == null
            ? void 0
            : g.routeId;
        },
      }),
      o = r.routesById[u],
      f = xe({
        select: (p) => {
          const b = p.matches.find((O) => O.id === l);
          return (Kn(b), b.globalNotFound);
        },
      }),
      d = xe({
        select: (p) => {
          var g;
          const b = p.matches,
            O = b.findIndex((C) => C.id === l);
          return (g = b[O + 1]) == null ? void 0 : g.id;
        },
      });
    if (f) return py(r, o, void 0);
    if (!d) return null;
    const h = et.jsx(gy, { matchId: d }),
      v = r.options.defaultPendingComponent
        ? et.jsx(r.options.defaultPendingComponent, {})
        : null;
    return l === rn ? et.jsx(mt.Suspense, { fallback: v, children: h }) : h;
  }),
  ss = typeof window < "u" ? mt.useLayoutEffect : mt.useEffect;
function Lf(a) {
  const r = mt.useRef({ value: a, prev: null }),
    l = r.current.value;
  return (a !== l && (r.current = { value: a, prev: l }), r.current.prev);
}
function sO() {
  const a = Mn(),
    r = mt.useRef({ router: a, mounted: !1 }),
    l = xe({ select: ({ isLoading: b }) => b }),
    [u, o] = mt.useState(!1),
    f = xe({
      select: (b) => b.matches.some((O) => O.status === "pending"),
      structuralSharing: !0,
    }),
    d = Lf(l),
    h = l || u || f,
    v = Lf(h),
    p = l || f,
    g = Lf(p);
  return (
    a.isServer ||
      (a.startTransition = (b) => {
        (o(!0),
          mt.startTransition(() => {
            (b(), o(!1));
          }));
      }),
    mt.useEffect(() => {
      const b = a.history.subscribe(a.load),
        O = a.buildLocation({
          to: a.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Fa(a.latestLocation.href) !== Fa(O.href) &&
          a.commitLocation({ ...O, replace: !0 }),
        () => {
          b();
        }
      );
    }, [a, a.history]),
    ss(() => {
      if (
        (typeof window < "u" && a.clientSsr) ||
        (r.current.router === a && r.current.mounted)
      )
        return;
      ((r.current = { router: a, mounted: !0 }),
        (async () => {
          try {
            await a.load();
          } catch (O) {
            console.error(O);
          }
        })());
    }, [a]),
    ss(() => {
      d && !l && a.emit({ type: "onLoad", ...Ia(a.state) });
    }, [d, a, l]),
    ss(() => {
      g && !p && a.emit({ type: "onBeforeRouteMount", ...Ia(a.state) });
    }, [p, g, a]),
    ss(() => {
      v &&
        !h &&
        (a.emit({ type: "onResolved", ...Ia(a.state) }),
        a.__store.setState((b) => ({
          ...b,
          status: "idle",
          resolvedLocation: b.location,
        })),
        D1(a));
    }, [h, v, a]),
    null
  );
}
function oO() {
  const a = Mn(),
    r = a.options.defaultPendingComponent
      ? et.jsx(a.options.defaultPendingComponent, {})
      : null,
    l = a.isServer || (typeof document < "u" && a.clientSsr) ? ps : mt.Suspense,
    u = et.jsxs(l, { fallback: r, children: [et.jsx(sO, {}), et.jsx(cO, {})] });
  return a.options.InnerWrap ? et.jsx(a.options.InnerWrap, { children: u }) : u;
}
function cO() {
  const a = xe({
      select: (l) => {
        var u;
        return (u = l.matches[0]) == null ? void 0 : u.id;
      },
    }),
    r = xe({ select: (l) => l.loadedAt });
  return et.jsx(to.Provider, {
    value: a,
    children: et.jsx(Od, {
      getResetKey: () => r,
      errorComponent: Is,
      onCatch: (l) => {
        l.message || l.toString();
      },
      children: a ? et.jsx(gy, { matchId: a }) : null,
    }),
  });
}
const fO = (a) => new dO(a);
class dO extends B1 {
  constructor(r) {
    super(r);
  }
}
function hO({ router: a, children: r, ...l }) {
  a.update({
    ...a.options,
    ...l,
    context: { ...a.options.context, ...l.context },
  });
  const u = oy(),
    o = et.jsx(u.Provider, { value: a, children: r });
  return a.options.Wrap ? et.jsx(a.options.Wrap, { children: o }) : o;
}
function vO({ router: a, ...r }) {
  return et.jsx(hO, { router: a, ...r, children: et.jsx(oO, {}) });
}
const mO = "modulepreload",
  pO = function (a) {
    return "/" + a;
  },
  Ip = {},
  gO = function (r, l, u) {
    let o = Promise.resolve();
    if (l && l.length > 0) {
      let d = function (p) {
        return Promise.all(
          p.map((g) =>
            Promise.resolve(g).then(
              (b) => ({ status: "fulfilled", value: b }),
              (b) => ({ status: "rejected", reason: b }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        v =
          (h == null ? void 0 : h.nonce) ||
          (h == null ? void 0 : h.getAttribute("nonce"));
      o = d(
        l.map((p) => {
          if (((p = pO(p)), p in Ip)) return;
          Ip[p] = !0;
          const g = p.endsWith(".css"),
            b = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${p}"]${b}`)) return;
          const O = document.createElement("link");
          if (
            ((O.rel = g ? "stylesheet" : mO),
            g || (O.as = "script"),
            (O.crossOrigin = ""),
            (O.href = p),
            v && O.setAttribute("nonce", v),
            document.head.appendChild(O),
            g)
          )
            return new Promise((C, N) => {
              (O.addEventListener("load", C),
                O.addEventListener("error", () =>
                  N(new Error(`Unable to preload CSS for ${p}`)),
                ));
            });
        }),
      );
    }
    function f(d) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = d), window.dispatchEvent(h), !h.defaultPrevented))
        throw d;
    }
    return o.then((d) => {
      for (const h of d || []) h.status === "rejected" && f(h.reason);
      return r().catch(f);
    });
  },
  bt = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: !1,
    getContextId() {
      return tg(this.context.count);
    },
    getNextContextId() {
      return tg(this.context.count++);
    },
  };
function tg(a) {
  const r = String(a),
    l = r.length - 1;
  return bt.context.id + (l ? String.fromCharCode(96 + l) : "") + r;
}
function yr(a) {
  bt.context = a;
}
const by = !1,
  yO = (a, r) => a === r,
  Ls = Symbol("solid-proxy"),
  _y = typeof Proxy == "function",
  Bs = { equals: yO };
let Sy = xy;
const $n = 1,
  Vs = 2,
  Oy = { owned: null, cleanups: null, context: null, owner: null },
  Bf = {};
var kt = null;
let Vf = null,
  bO = null,
  qt = null,
  ve = null,
  Jn = null,
  eo = 0;
function _O(a, r) {
  const l = qt,
    u = kt,
    o = a.length === 0,
    f = r === void 0 ? u : r,
    d = o
      ? Oy
      : {
          owned: null,
          cleanups: null,
          context: f ? f.context : null,
          owner: f,
        },
    h = o ? a : () => a(() => dn(() => Nr(d)));
  ((kt = d), (qt = null));
  try {
    return wa(h, !0);
  } finally {
    ((qt = l), (kt = u));
  }
}
function Ea(a, r) {
  r = r ? Object.assign({}, Bs, r) : Bs;
  const l = {
      value: a,
      observers: null,
      observerSlots: null,
      comparator: r.equals || void 0,
    },
    u = (o) => (typeof o == "function" && (o = o(l.value)), Ey(l, o));
  return [Ay.bind(l), u];
}
function SO(a, r, l) {
  const u = no(a, r, !0, $n);
  hl(u);
}
function ti(a, r, l) {
  const u = no(a, r, !1, $n);
  hl(u);
}
function _E(a, r, l) {
  Sy = wO;
  const u = no(a, r, !1, $n);
  ((!l || !l.render) && (u.user = !0), Jn ? Jn.push(u) : hl(u));
}
function on(a, r, l) {
  l = l ? Object.assign({}, Bs, l) : Bs;
  const u = no(a, r, !0, 0);
  return (
    (u.observers = null),
    (u.observerSlots = null),
    (u.comparator = l.equals || void 0),
    hl(u),
    Ay.bind(u)
  );
}
function OO(a) {
  return a && typeof a == "object" && "then" in a;
}
function AO(a, r, l) {
  let u, o, f;
  ((u = !0), (o = a), (f = {}));
  let d = null,
    h = Bf,
    v = null,
    p = !1,
    g = "initialValue" in f,
    b = typeof u == "function" && on(u);
  const O = new Set(),
    [C, N] = (f.storage || Ea)(f.initialValue),
    [G, X] = Ea(void 0),
    [Z, rt] = Ea(void 0, { equals: !1 }),
    [tt, st] = Ea(g ? "ready" : "unresolved");
  bt.context &&
    ((v = bt.getNextContextId()),
    f.ssrLoadFrom === "initial"
      ? (h = f.initialValue)
      : bt.load && bt.has(v) && (h = bt.load(v)));
  function P(F, J, k, I) {
    return (
      d === F &&
        ((d = null),
        I !== void 0 && (g = !0),
        (F === h || J === h) &&
          f.onHydrated &&
          queueMicrotask(() => f.onHydrated(I, { value: J })),
        (h = Bf),
        Y(J, k)),
      J
    );
  }
  function Y(F, J) {
    wa(() => {
      (J === void 0 && N(() => F),
        st(J !== void 0 ? "errored" : g ? "ready" : "unresolved"),
        X(J));
      for (const k of O.keys()) k.decrement();
      O.clear();
    }, !1);
  }
  function W() {
    const F = MO,
      J = C(),
      k = G();
    if (k !== void 0 && !d) throw k;
    return (qt && qt.user, J);
  }
  function T(F = !0) {
    if (F !== !1 && p) return;
    p = !1;
    const J = b ? b() : u;
    if (J == null || J === !1) {
      P(d, dn(C));
      return;
    }
    const k = h !== Bf ? h : dn(() => o(J, { value: C(), refetching: F }));
    return OO(k)
      ? ((d = k),
        "value" in k
          ? (k.status === "success"
              ? P(d, k.value, void 0, J)
              : P(d, void 0, id(k.value), J),
            k)
          : ((p = !0),
            queueMicrotask(() => (p = !1)),
            wa(() => {
              (st(g ? "refreshing" : "pending"), rt());
            }, !1),
            k.then(
              (I) => P(k, I, void 0, J),
              (I) => P(k, void 0, id(I), J),
            )))
      : (P(d, k, void 0, J), k);
  }
  Object.defineProperties(W, {
    state: { get: () => tt() },
    error: { get: () => G() },
    loading: {
      get() {
        const F = tt();
        return F === "pending" || F === "refreshing";
      },
    },
    latest: {
      get() {
        if (!g) return W();
        const F = G();
        if (F && !d) throw F;
        return C();
      },
    },
  });
  let z = kt;
  return (
    b ? SO(() => ((z = kt), T(!1))) : T(!1),
    [W, { refetch: (F) => EO(z, () => T(F)), mutate: N }]
  );
}
function dn(a) {
  if (qt === null) return a();
  const r = qt;
  qt = null;
  try {
    return a();
  } finally {
    qt = r;
  }
}
function EO(a, r) {
  const l = kt,
    u = qt;
  ((kt = a), (qt = null));
  try {
    return wa(r, !0);
  } catch (o) {
    Ad(o);
  } finally {
    ((kt = l), (qt = u));
  }
}
const [SE, OE] = Ea(!1);
function AE(a, r) {
  const l = Symbol("context");
  return { id: l, Provider: DO(l), defaultValue: a };
}
function EE(a) {
  let r;
  return kt && kt.context && (r = kt.context[a.id]) !== void 0
    ? r
    : a.defaultValue;
}
function xO(a) {
  const r = on(a),
    l = on(() => ld(r()));
  return (
    (l.toArray = () => {
      const u = l();
      return Array.isArray(u) ? u : u != null ? [u] : [];
    }),
    l
  );
}
let MO;
function Ay() {
  if (this.sources && this.state)
    if (this.state === $n) hl(this);
    else {
      const a = ve;
      ((ve = null), wa(() => Gs(this), !1), (ve = a));
    }
  if (qt) {
    const a = this.observers ? this.observers.length : 0;
    (qt.sources
      ? (qt.sources.push(this), qt.sourceSlots.push(a))
      : ((qt.sources = [this]), (qt.sourceSlots = [a])),
      this.observers
        ? (this.observers.push(qt),
          this.observerSlots.push(qt.sources.length - 1))
        : ((this.observers = [qt]),
          (this.observerSlots = [qt.sources.length - 1])));
  }
  return this.value;
}
function Ey(a, r, l) {
  let u = a.value;
  return (
    (!a.comparator || !a.comparator(u, r)) &&
      ((a.value = r),
      a.observers &&
        a.observers.length &&
        wa(() => {
          for (let o = 0; o < a.observers.length; o += 1) {
            const f = a.observers[o],
              d = Vf && Vf.running;
            (d && Vf.disposed.has(f),
              (d ? !f.tState : !f.state) &&
                (f.pure ? ve.push(f) : Jn.push(f), f.observers && My(f)),
              d || (f.state = $n));
          }
          if (ve.length > 1e6) throw ((ve = []), new Error());
        }, !1)),
    r
  );
}
function hl(a) {
  if (!a.fn) return;
  Nr(a);
  const r = eo;
  TO(a, a.value, r);
}
function TO(a, r, l) {
  let u;
  const o = kt,
    f = qt;
  qt = kt = a;
  try {
    u = a.fn(r);
  } catch (d) {
    return (
      a.pure &&
        ((a.state = $n), a.owned && a.owned.forEach(Nr), (a.owned = null)),
      (a.updatedAt = l + 1),
      Ad(d)
    );
  } finally {
    ((qt = f), (kt = o));
  }
  (!a.updatedAt || a.updatedAt <= l) &&
    (a.updatedAt != null && "observers" in a ? Ey(a, u) : (a.value = u),
    (a.updatedAt = l));
}
function no(a, r, l, u = $n, o) {
  const f = {
    fn: a,
    state: u,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: r,
    owner: kt,
    context: kt ? kt.context : null,
    pure: l,
  };
  return (
    kt === null ||
      (kt !== Oy && (kt.owned ? kt.owned.push(f) : (kt.owned = [f]))),
    f
  );
}
function Hs(a) {
  if (a.state === 0) return;
  if (a.state === Vs) return Gs(a);
  if (a.suspense && dn(a.suspense.inFallback))
    return a.suspense.effects.push(a);
  const r = [a];
  for (; (a = a.owner) && (!a.updatedAt || a.updatedAt < eo); )
    a.state && r.push(a);
  for (let l = r.length - 1; l >= 0; l--)
    if (((a = r[l]), a.state === $n)) hl(a);
    else if (a.state === Vs) {
      const u = ve;
      ((ve = null), wa(() => Gs(a, r[0]), !1), (ve = u));
    }
}
function wa(a, r) {
  if (ve) return a();
  let l = !1;
  (r || (ve = []), Jn ? (l = !0) : (Jn = []), eo++);
  try {
    const u = a();
    return (RO(l), u);
  } catch (u) {
    (l || (Jn = null), (ve = null), Ad(u));
  }
}
function RO(a) {
  if ((ve && (xy(ve), (ve = null)), a)) return;
  const r = Jn;
  ((Jn = null), r.length && wa(() => Sy(r), !1));
}
function xy(a) {
  for (let r = 0; r < a.length; r++) Hs(a[r]);
}
function wO(a) {
  let r,
    l = 0;
  for (r = 0; r < a.length; r++) {
    const u = a[r];
    u.user ? (a[l++] = u) : Hs(u);
  }
  if (bt.context) {
    if (bt.count) {
      (bt.effects || (bt.effects = []), bt.effects.push(...a.slice(0, l)));
      return;
    }
    yr();
  }
  for (
    bt.effects &&
      (bt.done || !bt.count) &&
      ((a = [...bt.effects, ...a]),
      (l += bt.effects.length),
      delete bt.effects),
      r = 0;
    r < l;
    r++
  )
    Hs(a[r]);
}
function Gs(a, r) {
  a.state = 0;
  for (let l = 0; l < a.sources.length; l += 1) {
    const u = a.sources[l];
    if (u.sources) {
      const o = u.state;
      o === $n
        ? u !== r && (!u.updatedAt || u.updatedAt < eo) && Hs(u)
        : o === Vs && Gs(u, r);
    }
  }
}
function My(a) {
  for (let r = 0; r < a.observers.length; r += 1) {
    const l = a.observers[r];
    l.state ||
      ((l.state = Vs), l.pure ? ve.push(l) : Jn.push(l), l.observers && My(l));
  }
}
function Nr(a) {
  let r;
  if (a.sources)
    for (; a.sources.length; ) {
      const l = a.sources.pop(),
        u = a.sourceSlots.pop(),
        o = l.observers;
      if (o && o.length) {
        const f = o.pop(),
          d = l.observerSlots.pop();
        u < o.length &&
          ((f.sourceSlots[d] = u), (o[u] = f), (l.observerSlots[u] = d));
      }
    }
  if (a.tOwned) {
    for (r = a.tOwned.length - 1; r >= 0; r--) Nr(a.tOwned[r]);
    delete a.tOwned;
  }
  if (a.owned) {
    for (r = a.owned.length - 1; r >= 0; r--) Nr(a.owned[r]);
    a.owned = null;
  }
  if (a.cleanups) {
    for (r = a.cleanups.length - 1; r >= 0; r--) a.cleanups[r]();
    a.cleanups = null;
  }
  a.state = 0;
}
function id(a) {
  return a instanceof Error
    ? a
    : new Error(typeof a == "string" ? a : "Unknown error", { cause: a });
}
function Ad(a, r = kt) {
  throw id(a);
}
function ld(a) {
  if (typeof a == "function" && !a.length) return ld(a());
  if (Array.isArray(a)) {
    const r = [];
    for (let l = 0; l < a.length; l++) {
      const u = ld(a[l]);
      Array.isArray(u) ? r.push.apply(r, u) : r.push(u);
    }
    return r;
  }
  return a;
}
function DO(a, r) {
  return function (u) {
    let o;
    return (
      ti(
        () =>
          (o = dn(
            () => (
              (kt.context = { ...kt.context, [a]: u.value }),
              xO(() => u.children)
            ),
          )),
        void 0,
      ),
      o
    );
  };
}
function CO(a, r) {
  return dn(() => a(r || {}));
}
function os() {
  return !0;
}
const rd = {
  get(a, r, l) {
    return r === Ls ? l : a.get(r);
  },
  has(a, r) {
    return r === Ls ? !0 : a.has(r);
  },
  set: os,
  deleteProperty: os,
  getOwnPropertyDescriptor(a, r) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return a.get(r);
      },
      set: os,
      deleteProperty: os,
    };
  },
  ownKeys(a) {
    return a.keys();
  },
};
function Hf(a) {
  return (a = typeof a == "function" ? a() : a) ? a : {};
}
function zO() {
  for (let a = 0, r = this.length; a < r; ++a) {
    const l = this[a]();
    if (l !== void 0) return l;
  }
}
function xE(...a) {
  let r = !1;
  for (let d = 0; d < a.length; d++) {
    const h = a[d];
    ((r = r || (!!h && Ls in h)),
      (a[d] = typeof h == "function" ? ((r = !0), on(h)) : h));
  }
  if (_y && r)
    return new Proxy(
      {
        get(d) {
          for (let h = a.length - 1; h >= 0; h--) {
            const v = Hf(a[h])[d];
            if (v !== void 0) return v;
          }
        },
        has(d) {
          for (let h = a.length - 1; h >= 0; h--) if (d in Hf(a[h])) return !0;
          return !1;
        },
        keys() {
          const d = [];
          for (let h = 0; h < a.length; h++) d.push(...Object.keys(Hf(a[h])));
          return [...new Set(d)];
        },
      },
      rd,
    );
  const l = {},
    u = Object.create(null);
  for (let d = a.length - 1; d >= 0; d--) {
    const h = a[d];
    if (!h) continue;
    const v = Object.getOwnPropertyNames(h);
    for (let p = v.length - 1; p >= 0; p--) {
      const g = v[p];
      if (g === "__proto__" || g === "constructor") continue;
      const b = Object.getOwnPropertyDescriptor(h, g);
      if (!u[g])
        u[g] = b.get
          ? {
              enumerable: !0,
              configurable: !0,
              get: zO.bind((l[g] = [b.get.bind(h)])),
            }
          : b.value !== void 0
            ? b
            : void 0;
      else {
        const O = l[g];
        O &&
          (b.get
            ? O.push(b.get.bind(h))
            : b.value !== void 0 && O.push(() => b.value));
      }
    }
  }
  const o = {},
    f = Object.keys(u);
  for (let d = f.length - 1; d >= 0; d--) {
    const h = f[d],
      v = u[h];
    v && v.get ? Object.defineProperty(o, h, v) : (o[h] = v ? v.value : void 0);
  }
  return o;
}
function NO(a, ...r) {
  if (_y && Ls in a) {
    const o = new Set(r.length > 1 ? r.flat() : r[0]),
      f = r.map(
        (d) =>
          new Proxy(
            {
              get(h) {
                return d.includes(h) ? a[h] : void 0;
              },
              has(h) {
                return d.includes(h) && h in a;
              },
              keys() {
                return d.filter((h) => h in a);
              },
            },
            rd,
          ),
      );
    return (
      f.push(
        new Proxy(
          {
            get(d) {
              return o.has(d) ? void 0 : a[d];
            },
            has(d) {
              return o.has(d) ? !1 : d in a;
            },
            keys() {
              return Object.keys(a).filter((d) => !o.has(d));
            },
          },
          rd,
        ),
      ),
      f
    );
  }
  const l = {},
    u = r.map(() => ({}));
  for (const o of Object.getOwnPropertyNames(a)) {
    const f = Object.getOwnPropertyDescriptor(a, o),
      d = !f.get && !f.set && f.enumerable && f.writable && f.configurable;
    let h = !1,
      v = 0;
    for (const p of r)
      (p.includes(o) &&
        ((h = !0), d ? (u[v][o] = f.value) : Object.defineProperty(u[v], o, f)),
        ++v);
    h || (d ? (l[o] = f.value) : Object.defineProperty(l, o, f));
  }
  return [...u, l];
}
function UO(a) {
  let r, l;
  const u = (o) => {
    const f = bt.context;
    if (f) {
      const [h, v] = Ea();
      (bt.count || (bt.count = 0),
        bt.count++,
        (l || (l = a())).then((p) => {
          (!bt.done && yr(f), bt.count--, v(() => p.default), yr());
        }),
        (r = h));
    } else if (!r) {
      const [h] = AO(() => (l || (l = a())).then((v) => v.default));
      r = h;
    }
    let d;
    return on(() =>
      (d = r())
        ? dn(() => {
            if (!f || bt.done) return d(o);
            const h = bt.context;
            yr(f);
            const v = d(o);
            return (yr(h), v);
          })
        : "",
    );
  };
  return (
    (u.preload = () => l || ((l = a()).then((o) => (r = () => o.default)), l)),
    u
  );
}
let jO = 0;
function ME() {
  return bt.context ? bt.getNextContextId() : `cl-${jO++}`;
}
const LO = (a) => `Stale read from <${a}>.`;
function TE(a) {
  const r = a.keyed,
    l = on(() => a.when, void 0, void 0),
    u = r ? l : on(l, void 0, { equals: (o, f) => !o == !f });
  return on(
    () => {
      const o = u();
      if (o) {
        const f = a.children;
        return typeof f == "function" && f.length > 0
          ? dn(() =>
              f(
                r
                  ? o
                  : () => {
                      if (!dn(u)) throw LO("Show");
                      return l();
                    },
              ),
            )
          : f;
      }
      return a.fallback;
    },
    void 0,
    void 0,
  );
}
const BO = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ],
  VO = new Set([
    "className",
    "value",
    "readOnly",
    "noValidate",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...BO,
  ]),
  HO = new Set(["innerHTML", "textContent", "innerText", "children"]),
  GO = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for",
  }),
  qO = Object.assign(Object.create(null), {
    class: "className",
    novalidate: { $: "noValidate", FORM: 1 },
    formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
    ismap: { $: "isMap", IMG: 1 },
    nomodule: { $: "noModule", SCRIPT: 1 },
    playsinline: { $: "playsInline", VIDEO: 1 },
    readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
  });
function kO(a, r) {
  const l = qO[a];
  return typeof l == "object" ? (l[r] ? l.$ : void 0) : l;
}
const YO = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  XO = new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ]),
  KO = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
  },
  RE = (a) => on(() => a());
function QO(a, r, l) {
  let u = l.length,
    o = r.length,
    f = u,
    d = 0,
    h = 0,
    v = r[o - 1].nextSibling,
    p = null;
  for (; d < o || h < f; ) {
    if (r[d] === l[h]) {
      (d++, h++);
      continue;
    }
    for (; r[o - 1] === l[f - 1]; ) (o--, f--);
    if (o === d) {
      const g = f < u ? (h ? l[h - 1].nextSibling : l[f - h]) : v;
      for (; h < f; ) a.insertBefore(l[h++], g);
    } else if (f === h)
      for (; d < o; ) ((!p || !p.has(r[d])) && r[d].remove(), d++);
    else if (r[d] === l[f - 1] && l[h] === r[o - 1]) {
      const g = r[--o].nextSibling;
      (a.insertBefore(l[h++], r[d++].nextSibling),
        a.insertBefore(l[--f], g),
        (r[o] = l[f]));
    } else {
      if (!p) {
        p = new Map();
        let b = h;
        for (; b < f; ) p.set(l[b], b++);
      }
      const g = p.get(r[d]);
      if (g != null)
        if (h < g && g < f) {
          let b = d,
            O = 1,
            C;
          for (
            ;
            ++b < o && b < f && !((C = p.get(r[b])) == null || C !== g + O);

          )
            O++;
          if (O > g - h) {
            const N = r[d];
            for (; h < g; ) a.insertBefore(l[h++], N);
          } else a.replaceChild(l[h++], r[d++]);
        } else d++;
      else r[d++].remove();
    }
  }
}
const eg = "_$DX_DELEGATE";
function ZO(a, r, l, u = {}) {
  let o;
  return (
    _O((f) => {
      ((o = f),
        r === document ? a() : aA(r, a(), r.firstChild ? null : void 0, l));
    }, u.owner),
    () => {
      (o(), (r.textContent = ""));
    }
  );
}
function wE(a, r, l, u) {
  let o;
  const f = () => {
      const h = document.createElement("template");
      return ((h.innerHTML = a), h.content.firstChild);
    },
    d = () => (o || (o = f())).cloneNode(!0);
  return ((d.cloneNode = d), d);
}
function PO(a, r = window.document) {
  const l = r[eg] || (r[eg] = new Set());
  for (let u = 0, o = a.length; u < o; u++) {
    const f = a[u];
    l.has(f) || (l.add(f), r.addEventListener(f, uA));
  }
}
function ud(a, r, l) {
  oi(a) || (l == null ? a.removeAttribute(r) : a.setAttribute(r, l));
}
function JO(a, r, l, u) {
  oi(a) || (u == null ? a.removeAttributeNS(r, l) : a.setAttributeNS(r, l, u));
}
function $O(a, r, l) {
  oi(a) || (l ? a.setAttribute(r, "") : a.removeAttribute(r));
}
function FO(a, r) {
  oi(a) || (r == null ? a.removeAttribute("class") : (a.className = r));
}
function WO(a, r, l, u) {
  if (u)
    Array.isArray(l)
      ? ((a[`$$${r}`] = l[0]), (a[`$$${r}Data`] = l[1]))
      : (a[`$$${r}`] = l);
  else if (Array.isArray(l)) {
    const o = l[0];
    a.addEventListener(r, (l[0] = (f) => o.call(a, l[1], f)));
  } else a.addEventListener(r, l, typeof l != "function" && l);
}
function IO(a, r, l = {}) {
  const u = Object.keys(r || {}),
    o = Object.keys(l);
  let f, d;
  for (f = 0, d = o.length; f < d; f++) {
    const h = o[f];
    !h || h === "undefined" || r[h] || (ng(a, h, !1), delete l[h]);
  }
  for (f = 0, d = u.length; f < d; f++) {
    const h = u[f],
      v = !!r[h];
    !h || h === "undefined" || l[h] === v || !v || (ng(a, h, !0), (l[h] = v));
  }
  return l;
}
function tA(a, r, l) {
  if (!r) return l ? ud(a, "style") : r;
  const u = a.style;
  if (typeof r == "string") return (u.cssText = r);
  (typeof l == "string" && (u.cssText = l = void 0),
    l || (l = {}),
    r || (r = {}));
  let o, f;
  for (f in l) (r[f] == null && u.removeProperty(f), delete l[f]);
  for (f in r) ((o = r[f]), o !== l[f] && (u.setProperty(f, o), (l[f] = o)));
  return l;
}
function eA(a, r = {}, l, u) {
  const o = {};
  return (
    u || ti(() => (o.children = Ur(a, r.children, o.children))),
    ti(() => typeof r.ref == "function" && nA(r.ref, a)),
    ti(() => iA(a, r, l, !0, o, !0)),
    o
  );
}
function nA(a, r, l) {
  return dn(() => a(r, l));
}
function aA(a, r, l, u) {
  if ((l !== void 0 && !u && (u = []), typeof r != "function"))
    return Ur(a, r, u, l);
  ti((o) => Ur(a, r(), o, l), u);
}
function iA(a, r, l, u, o = {}, f = !1) {
  r || (r = {});
  for (const d in o)
    if (!(d in r)) {
      if (d === "children") continue;
      o[d] = ag(a, d, null, o[d], l, f, r);
    }
  for (const d in r) {
    if (d === "children") continue;
    const h = r[d];
    o[d] = ag(a, d, h, o[d], l, f, r);
  }
}
function lA(a) {
  let r, l;
  return !oi() || !(r = bt.registry.get((l = sA())))
    ? a()
    : (bt.completed && bt.completed.add(r), bt.registry.delete(l), r);
}
function oi(a) {
  return !!bt.context && !bt.done && (!a || a.isConnected);
}
function rA(a) {
  return a.toLowerCase().replace(/-([a-z])/g, (r, l) => l.toUpperCase());
}
function ng(a, r, l) {
  const u = r.trim().split(/\s+/);
  for (let o = 0, f = u.length; o < f; o++) a.classList.toggle(u[o], l);
}
function ag(a, r, l, u, o, f, d) {
  let h, v, p, g, b;
  if (r === "style") return tA(a, l, u);
  if (r === "classList") return IO(a, l, u);
  if (l === u) return u;
  if (r === "ref") f || l(a);
  else if (r.slice(0, 3) === "on:") {
    const O = r.slice(3);
    (u && a.removeEventListener(O, u, typeof u != "function" && u),
      l && a.addEventListener(O, l, typeof l != "function" && l));
  } else if (r.slice(0, 10) === "oncapture:") {
    const O = r.slice(10);
    (u && a.removeEventListener(O, u, !0), l && a.addEventListener(O, l, !0));
  } else if (r.slice(0, 2) === "on") {
    const O = r.slice(2).toLowerCase(),
      C = YO.has(O);
    if (!C && u) {
      const N = Array.isArray(u) ? u[0] : u;
      a.removeEventListener(O, N);
    }
    (C || l) && (WO(a, O, l, C), C && PO([O]));
  } else if (r.slice(0, 5) === "attr:") ud(a, r.slice(5), l);
  else if (r.slice(0, 5) === "bool:") $O(a, r.slice(5), l);
  else if (
    (b = r.slice(0, 5) === "prop:") ||
    (p = HO.has(r)) ||
    (!o && ((g = kO(r, a.tagName)) || (v = VO.has(r)))) ||
    (h = a.nodeName.includes("-") || "is" in d)
  ) {
    if (b) ((r = r.slice(5)), (v = !0));
    else if (oi(a)) return l;
    r === "class" || r === "className"
      ? FO(a, l)
      : h && !v && !p
        ? (a[rA(r)] = l)
        : (a[g || r] = l);
  } else {
    const O = o && r.indexOf(":") > -1 && KO[r.split(":")[0]];
    O ? JO(a, O, r, l) : ud(a, GO[r] || r, l);
  }
  return l;
}
function uA(a) {
  if (bt.registry && bt.events && bt.events.find(([v, p]) => p === a)) return;
  let r = a.target;
  const l = `$$${a.type}`,
    u = a.target,
    o = a.currentTarget,
    f = (v) =>
      Object.defineProperty(a, "target", { configurable: !0, value: v }),
    d = () => {
      const v = r[l];
      if (v && !r.disabled) {
        const p = r[`${l}Data`];
        if ((p !== void 0 ? v.call(r, p, a) : v.call(r, a), a.cancelBubble))
          return;
      }
      return (
        r.host &&
          typeof r.host != "string" &&
          !r.host._$host &&
          r.contains(a.target) &&
          f(r.host),
        !0
      );
    },
    h = () => {
      for (; d() && (r = r._$host || r.parentNode || r.host); );
    };
  if (
    (Object.defineProperty(a, "currentTarget", {
      configurable: !0,
      get() {
        return r || document;
      },
    }),
    bt.registry && !bt.done && (bt.done = _$HY.done = !0),
    a.composedPath)
  ) {
    const v = a.composedPath();
    f(v[0]);
    for (let p = 0; p < v.length - 2 && ((r = v[p]), !!d()); p++) {
      if (r._$host) {
        ((r = r._$host), h());
        break;
      }
      if (r.parentNode === o) break;
    }
  } else h();
  f(u);
}
function Ur(a, r, l, u, o) {
  const f = oi(a);
  if (f) {
    !l && (l = [...a.childNodes]);
    let v = [];
    for (let p = 0; p < l.length; p++) {
      const g = l[p];
      g.nodeType === 8 && g.data.slice(0, 2) === "!$" ? g.remove() : v.push(g);
    }
    l = v;
  }
  for (; typeof l == "function"; ) l = l();
  if (r === l) return l;
  const d = typeof r,
    h = u !== void 0;
  if (
    ((a = (h && l[0] && l[0].parentNode) || a),
    d === "string" || d === "number")
  ) {
    if (f || (d === "number" && ((r = r.toString()), r === l))) return l;
    if (h) {
      let v = l[0];
      (v && v.nodeType === 3
        ? v.data !== r && (v.data = r)
        : (v = document.createTextNode(r)),
        (l = Wi(a, l, u, v)));
    } else
      l !== "" && typeof l == "string"
        ? (l = a.firstChild.data = r)
        : (l = a.textContent = r);
  } else if (r == null || d === "boolean") {
    if (f) return l;
    l = Wi(a, l, u);
  } else {
    if (d === "function")
      return (
        ti(() => {
          let v = r();
          for (; typeof v == "function"; ) v = v();
          l = Ur(a, v, l, u);
        }),
        () => l
      );
    if (Array.isArray(r)) {
      const v = [],
        p = l && Array.isArray(l);
      if (sd(v, r, l, o)) return (ti(() => (l = Ur(a, v, l, u, !0))), () => l);
      if (f) {
        if (!v.length) return l;
        if (u === void 0) return (l = [...a.childNodes]);
        let g = v[0];
        if (g.parentNode !== a) return l;
        const b = [g];
        for (; (g = g.nextSibling) !== u; ) b.push(g);
        return (l = b);
      }
      if (v.length === 0) {
        if (((l = Wi(a, l, u)), h)) return l;
      } else
        p
          ? l.length === 0
            ? ig(a, v, u)
            : QO(a, l, v)
          : (l && Wi(a), ig(a, v));
      l = v;
    } else if (r.nodeType) {
      if (f && r.parentNode) return (l = h ? [r] : r);
      if (Array.isArray(l)) {
        if (h) return (l = Wi(a, l, u, r));
        Wi(a, l, null, r);
      } else
        l == null || l === "" || !a.firstChild
          ? a.appendChild(r)
          : a.replaceChild(r, a.firstChild);
      l = r;
    }
  }
  return l;
}
function sd(a, r, l, u) {
  let o = !1;
  for (let f = 0, d = r.length; f < d; f++) {
    let h = r[f],
      v = l && l[a.length],
      p;
    if (!(h == null || h === !0 || h === !1))
      if ((p = typeof h) == "object" && h.nodeType) a.push(h);
      else if (Array.isArray(h)) o = sd(a, h, v) || o;
      else if (p === "function")
        if (u) {
          for (; typeof h == "function"; ) h = h();
          o =
            sd(a, Array.isArray(h) ? h : [h], Array.isArray(v) ? v : [v]) || o;
        } else (a.push(h), (o = !0));
      else {
        const g = String(h);
        v && v.nodeType === 3 && v.data === g
          ? a.push(v)
          : a.push(document.createTextNode(g));
      }
  }
  return o;
}
function ig(a, r, l = null) {
  for (let u = 0, o = r.length; u < o; u++) a.insertBefore(r[u], l);
}
function Wi(a, r, l, u) {
  if (l === void 0) return (a.textContent = "");
  const o = u || document.createTextNode("");
  if (r.length) {
    let f = !1;
    for (let d = r.length - 1; d >= 0; d--) {
      const h = r[d];
      if (o !== h) {
        const v = h.parentNode === a;
        !f && !d
          ? v
            ? a.replaceChild(o, h)
            : a.insertBefore(o, l)
          : v && h.remove();
      } else f = !0;
    }
  } else a.insertBefore(o, l);
  return [o];
}
function sA() {
  return bt.getNextContextId();
}
const oA = "http://www.w3.org/2000/svg";
function cA(a, r = !1) {
  return r ? document.createElementNS(oA, a) : document.createElement(a);
}
function fA(a, r) {
  const l = on(a);
  return on(() => {
    const u = l();
    switch (typeof u) {
      case "function":
        return dn(() => u(r));
      case "string":
        const o = XO.has(u),
          f = bt.context ? lA() : cA(u, o);
        return (eA(f, r, o), f);
    }
  });
}
function DE(a) {
  const [, r] = NO(a, ["component"]);
  return fA(() => a.component, r);
}
var Ty = (a) => {
    throw TypeError(a);
  },
  Ry = (a, r, l) => r.has(a) || Ty("Cannot " + l),
  pe = (a, r, l) => (Ry(a, r, "read from private field"), r.get(a)),
  ln = (a, r, l) =>
    r.has(a)
      ? Ty("Cannot add the same private member more than once")
      : r instanceof WeakSet
        ? r.add(a)
        : r.set(a, l),
  ge = (a, r, l, u) => (Ry(a, r, "write to private field"), r.set(a, l), l),
  br,
  _r,
  Sr,
  Or,
  Ar,
  gs,
  ys,
  bs,
  el,
  Er,
  _s;
class dA {
  constructor(r) {
    (ln(this, br),
      ln(this, _r),
      ln(this, Sr),
      ln(this, Or),
      ln(this, Ar),
      ln(this, gs),
      ln(this, ys),
      ln(this, bs),
      ln(this, el, !1),
      ln(this, Er),
      ln(this, _s),
      ge(this, br, Ea(r.router)),
      ge(this, _r, Ea(r.routerState)),
      ge(this, Sr, r.position ?? "bottom-left"),
      ge(this, Or, r.initialIsOpen ?? !1),
      ge(this, Ar, r.shadowDOMTarget),
      ge(this, gs, r.panelProps),
      ge(this, ys, r.closeButtonProps),
      ge(this, bs, r.toggleButtonProps));
  }
  mount(r) {
    if (pe(this, el)) throw new Error("Devtools is already mounted");
    const l = ZO(() => {
      const [u] = pe(this, br),
        [o] = pe(this, _r),
        f = pe(this, Sr),
        d = pe(this, Or),
        h = pe(this, Ar),
        v = pe(this, gs),
        p = pe(this, ys),
        g = pe(this, bs);
      let b;
      return (
        pe(this, Er)
          ? (b = pe(this, Er))
          : ((b = UO(() =>
              gO(
                () => import("./FloatingTanStackRouterDevtools-DX_S9Tbj.js"),
                [],
              ),
            )),
            ge(this, Er, b)),
        CO(b, {
          position: f,
          initialIsOpen: d,
          shadowDOMTarget: h,
          router: u,
          routerState: o,
          panelProps: v,
          closeButtonProps: p,
          toggleButtonProps: g,
        })
      );
    }, r);
    (ge(this, el, !0), ge(this, _s, l));
  }
  unmount() {
    var r;
    if (!pe(this, el)) throw new Error("Devtools is not mounted");
    ((r = pe(this, _s)) == null || r.call(this), ge(this, el, !1));
  }
  setRouter(r) {
    pe(this, br)[1](r);
  }
  setRouterState(r) {
    pe(this, _r)[1](r);
  }
  setOptions(r) {
    (r.position !== void 0 && ge(this, Sr, r.position),
      r.initialIsOpen !== void 0 && ge(this, Or, r.initialIsOpen),
      r.shadowDOMTarget !== void 0 && ge(this, Ar, r.shadowDOMTarget));
  }
}
br = new WeakMap();
_r = new WeakMap();
Sr = new WeakMap();
Or = new WeakMap();
Ar = new WeakMap();
gs = new WeakMap();
ys = new WeakMap();
bs = new WeakMap();
el = new WeakMap();
Er = new WeakMap();
_s = new WeakMap();
function hA(a) {
  const {
      initialIsOpen: r,
      panelProps: l,
      closeButtonProps: u,
      toggleButtonProps: o,
      position: f,
      containerElement: d,
      shadowDOMTarget: h,
      router: v,
    } = a,
    p = Mn({ warn: !1 }),
    g = v ?? p,
    b = xe({ router: g }),
    O = mt.useRef(null),
    [C] = mt.useState(
      () =>
        new dA({
          initialIsOpen: r,
          panelProps: l,
          closeButtonProps: u,
          toggleButtonProps: o,
          position: f,
          containerElement: d,
          shadowDOMTarget: h,
          router: g,
          routerState: b,
        }),
    );
  return (
    mt.useEffect(() => {
      C.setRouter(g);
    }, [C, g]),
    mt.useEffect(() => {
      C.setRouterState(b);
    }, [C, b]),
    mt.useEffect(() => {
      C.setOptions({
        initialIsOpen: r,
        panelProps: l,
        closeButtonProps: u,
        toggleButtonProps: o,
        position: f,
        containerElement: d,
        shadowDOMTarget: h,
      });
    }, [C, r, l, u, o, f, d, h]),
    mt.useEffect(
      () => (
        O.current && C.mount(O.current),
        () => {
          C.unmount();
        }
      ),
      [C],
    ),
    et.jsx(mt.Fragment, { children: et.jsx("div", { ref: O }) })
  );
}
const vA = hA;
console.warn(
  "[@tanstack/router-devtools] This package has moved to @tanstack/react-router-devtools. Please switch to the new package at your earliest convenience, as this package will be dropped in the next major version release.",
);
const Ed = I1({
  component: () =>
    et.jsxs(et.Fragment, { children: [et.jsx(yy, {}), et.jsx(vA, {})] }),
});
let lg = class {
  constructor(r, l, u) {
    Ee(this, "path");
    Ee(this, "title");
    Ee(this, "description");
    ((this.path = r), (this.title = l), (this.description = u));
  }
};
class mA {
  constructor() {
    Ee(this, "HOME", new lg("/", "Home", "Home page."));
    Ee(this, "ABOUT", new lg("/about", "About", "About page."));
  }
}
const wy = new mA(),
  pA = my(wy.ABOUT.path)({ component: gA });
function gA() {
  return et.jsx("div", { className: "p-2", children: "Hello from About!" });
}
function rg(a, r) {
  if (typeof a == "function") return a(r);
  a != null && (a.current = r);
}
function yA(...a) {
  return (r) => {
    let l = !1;
    const u = a.map((o) => {
      const f = rg(o, r);
      return (!l && typeof f == "function" && (l = !0), f);
    });
    if (l)
      return () => {
        for (let o = 0; o < u.length; o++) {
          const f = u[o];
          typeof f == "function" ? f() : rg(a[o], null);
        }
      };
  };
}
function bA(a) {
  const r = SA(a),
    l = mt.forwardRef((u, o) => {
      const { children: f, ...d } = u,
        h = mt.Children.toArray(f),
        v = h.find(AA);
      if (v) {
        const p = v.props.children,
          g = h.map((b) =>
            b === v
              ? mt.Children.count(p) > 1
                ? mt.Children.only(null)
                : mt.isValidElement(p)
                  ? p.props.children
                  : null
              : b,
          );
        return et.jsx(r, {
          ...d,
          ref: o,
          children: mt.isValidElement(p) ? mt.cloneElement(p, void 0, g) : null,
        });
      }
      return et.jsx(r, { ...d, ref: o, children: f });
    });
  return ((l.displayName = `${a}.Slot`), l);
}
var _A = bA("Slot");
function SA(a) {
  const r = mt.forwardRef((l, u) => {
    const { children: o, ...f } = l;
    if (mt.isValidElement(o)) {
      const d = xA(o),
        h = EA(f, o.props);
      return (
        o.type !== mt.Fragment && (h.ref = u ? yA(u, d) : d),
        mt.cloneElement(o, h)
      );
    }
    return mt.Children.count(o) > 1 ? mt.Children.only(null) : null;
  });
  return ((r.displayName = `${a}.SlotClone`), r);
}
var OA = Symbol("radix.slottable");
function AA(a) {
  return (
    mt.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === OA
  );
}
function EA(a, r) {
  const l = { ...r };
  for (const u in r) {
    const o = a[u],
      f = r[u];
    /^on[A-Z]/.test(u)
      ? o && f
        ? (l[u] = (...h) => {
            const v = f(...h);
            return (o(...h), v);
          })
        : o && (l[u] = o)
      : u === "style"
        ? (l[u] = { ...o, ...f })
        : u === "className" && (l[u] = [o, f].filter(Boolean).join(" "));
  }
  return { ...a, ...l };
}
function xA(a) {
  var u, o;
  let r =
      (u = Object.getOwnPropertyDescriptor(a.props, "ref")) == null
        ? void 0
        : u.get,
    l = r && "isReactWarning" in r && r.isReactWarning;
  return l
    ? a.ref
    : ((r =
        (o = Object.getOwnPropertyDescriptor(a, "ref")) == null
          ? void 0
          : o.get),
      (l = r && "isReactWarning" in r && r.isReactWarning),
      l ? a.props.ref : a.props.ref || a.ref);
}
function Dy(a) {
  var r,
    l,
    u = "";
  if (typeof a == "string" || typeof a == "number") u += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var o = a.length;
      for (r = 0; r < o; r++)
        a[r] && (l = Dy(a[r])) && (u && (u += " "), (u += l));
    } else for (l in a) a[l] && (u && (u += " "), (u += l));
  return u;
}
function Cy() {
  for (var a, r, l = 0, u = "", o = arguments.length; l < o; l++)
    (a = arguments[l]) && (r = Dy(a)) && (u && (u += " "), (u += r));
  return u;
}
const ug = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  sg = Cy,
  MA = (a, r) => (l) => {
    var u;
    if ((r == null ? void 0 : r.variants) == null)
      return sg(
        a,
        l == null ? void 0 : l.class,
        l == null ? void 0 : l.className,
      );
    const { variants: o, defaultVariants: f } = r,
      d = Object.keys(o).map((p) => {
        const g = l == null ? void 0 : l[p],
          b = f == null ? void 0 : f[p];
        if (g === null) return null;
        const O = ug(g) || ug(b);
        return o[p][O];
      }),
      h =
        l &&
        Object.entries(l).reduce((p, g) => {
          let [b, O] = g;
          return (O === void 0 || (p[b] = O), p);
        }, {}),
      v =
        r == null || (u = r.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((p, g) => {
              let { class: b, className: O, ...C } = g;
              return Object.entries(C).every((N) => {
                let [G, X] = N;
                return Array.isArray(X)
                  ? X.includes({ ...f, ...h }[G])
                  : { ...f, ...h }[G] === X;
              })
                ? [...p, b, O]
                : p;
            }, []);
    return sg(
      a,
      d,
      v,
      l == null ? void 0 : l.class,
      l == null ? void 0 : l.className,
    );
  },
  xd = "-",
  TA = (a) => {
    const r = wA(a),
      { conflictingClassGroups: l, conflictingClassGroupModifiers: u } = a;
    return {
      getClassGroupId: (d) => {
        const h = d.split(xd);
        return (h[0] === "" && h.length !== 1 && h.shift(), zy(h, r) || RA(d));
      },
      getConflictingClassGroupIds: (d, h) => {
        const v = l[d] || [];
        return h && u[d] ? [...v, ...u[d]] : v;
      },
    };
  },
  zy = (a, r) => {
    var d;
    if (a.length === 0) return r.classGroupId;
    const l = a[0],
      u = r.nextPart.get(l),
      o = u ? zy(a.slice(1), u) : void 0;
    if (o) return o;
    if (r.validators.length === 0) return;
    const f = a.join(xd);
    return (d = r.validators.find(({ validator: h }) => h(f))) == null
      ? void 0
      : d.classGroupId;
  },
  og = /^\[(.+)\]$/,
  RA = (a) => {
    if (og.test(a)) {
      const r = og.exec(a)[1],
        l = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (l) return "arbitrary.." + l;
    }
  },
  wA = (a) => {
    const { theme: r, classGroups: l } = a,
      u = { nextPart: new Map(), validators: [] };
    for (const o in l) od(l[o], u, o, r);
    return u;
  },
  od = (a, r, l, u) => {
    a.forEach((o) => {
      if (typeof o == "string") {
        const f = o === "" ? r : cg(r, o);
        f.classGroupId = l;
        return;
      }
      if (typeof o == "function") {
        if (DA(o)) {
          od(o(u), r, l, u);
          return;
        }
        r.validators.push({ validator: o, classGroupId: l });
        return;
      }
      Object.entries(o).forEach(([f, d]) => {
        od(d, cg(r, f), l, u);
      });
    });
  },
  cg = (a, r) => {
    let l = a;
    return (
      r.split(xd).forEach((u) => {
        (l.nextPart.has(u) ||
          l.nextPart.set(u, { nextPart: new Map(), validators: [] }),
          (l = l.nextPart.get(u)));
      }),
      l
    );
  },
  DA = (a) => a.isThemeGetter,
  CA = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      l = new Map(),
      u = new Map();
    const o = (f, d) => {
      (l.set(f, d), r++, r > a && ((r = 0), (u = l), (l = new Map())));
    };
    return {
      get(f) {
        let d = l.get(f);
        if (d !== void 0) return d;
        if ((d = u.get(f)) !== void 0) return (o(f, d), d);
      },
      set(f, d) {
        l.has(f) ? l.set(f, d) : o(f, d);
      },
    };
  },
  cd = "!",
  fd = ":",
  zA = fd.length,
  NA = (a) => {
    const { prefix: r, experimentalParseClassName: l } = a;
    let u = (o) => {
      const f = [];
      let d = 0,
        h = 0,
        v = 0,
        p;
      for (let N = 0; N < o.length; N++) {
        let G = o[N];
        if (d === 0 && h === 0) {
          if (G === fd) {
            (f.push(o.slice(v, N)), (v = N + zA));
            continue;
          }
          if (G === "/") {
            p = N;
            continue;
          }
        }
        G === "[" ? d++ : G === "]" ? d-- : G === "(" ? h++ : G === ")" && h--;
      }
      const g = f.length === 0 ? o : o.substring(v),
        b = UA(g),
        O = b !== g,
        C = p && p > v ? p - v : void 0;
      return {
        modifiers: f,
        hasImportantModifier: O,
        baseClassName: b,
        maybePostfixModifierPosition: C,
      };
    };
    if (r) {
      const o = r + fd,
        f = u;
      u = (d) =>
        d.startsWith(o)
          ? f(d.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: d,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (l) {
      const o = u;
      u = (f) => l({ className: f, parseClassName: o });
    }
    return u;
  },
  UA = (a) =>
    a.endsWith(cd)
      ? a.substring(0, a.length - 1)
      : a.startsWith(cd)
        ? a.substring(1)
        : a,
  jA = (a) => {
    const r = Object.fromEntries(a.orderSensitiveModifiers.map((u) => [u, !0]));
    return (u) => {
      if (u.length <= 1) return u;
      const o = [];
      let f = [];
      return (
        u.forEach((d) => {
          d[0] === "[" || r[d] ? (o.push(...f.sort(), d), (f = [])) : f.push(d);
        }),
        o.push(...f.sort()),
        o
      );
    };
  },
  LA = (a) => ({
    cache: CA(a.cacheSize),
    parseClassName: NA(a),
    sortModifiers: jA(a),
    ...TA(a),
  }),
  BA = /\s+/,
  VA = (a, r) => {
    const {
        parseClassName: l,
        getClassGroupId: u,
        getConflictingClassGroupIds: o,
        sortModifiers: f,
      } = r,
      d = [],
      h = a.trim().split(BA);
    let v = "";
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const g = h[p],
        {
          isExternal: b,
          modifiers: O,
          hasImportantModifier: C,
          baseClassName: N,
          maybePostfixModifierPosition: G,
        } = l(g);
      if (b) {
        v = g + (v.length > 0 ? " " + v : v);
        continue;
      }
      let X = !!G,
        Z = u(X ? N.substring(0, G) : N);
      if (!Z) {
        if (!X) {
          v = g + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((Z = u(N)), !Z)) {
          v = g + (v.length > 0 ? " " + v : v);
          continue;
        }
        X = !1;
      }
      const rt = f(O).join(":"),
        tt = C ? rt + cd : rt,
        st = tt + Z;
      if (d.includes(st)) continue;
      d.push(st);
      const P = o(Z, X);
      for (let Y = 0; Y < P.length; ++Y) {
        const W = P[Y];
        d.push(tt + W);
      }
      v = g + (v.length > 0 ? " " + v : v);
    }
    return v;
  };
function HA() {
  let a = 0,
    r,
    l,
    u = "";
  for (; a < arguments.length; )
    (r = arguments[a++]) && (l = Ny(r)) && (u && (u += " "), (u += l));
  return u;
}
const Ny = (a) => {
  if (typeof a == "string") return a;
  let r,
    l = "";
  for (let u = 0; u < a.length; u++)
    a[u] && (r = Ny(a[u])) && (l && (l += " "), (l += r));
  return l;
};
function GA(a, ...r) {
  let l,
    u,
    o,
    f = d;
  function d(v) {
    const p = r.reduce((g, b) => b(g), a());
    return ((l = LA(p)), (u = l.cache.get), (o = l.cache.set), (f = h), h(v));
  }
  function h(v) {
    const p = u(v);
    if (p) return p;
    const g = VA(v, l);
    return (o(v, g), g);
  }
  return function () {
    return f(HA.apply(null, arguments));
  };
}
const ee = (a) => {
    const r = (l) => l[a] || [];
    return ((r.isThemeGetter = !0), r);
  },
  Uy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  jy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  qA = /^\d+\/\d+$/,
  kA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  YA =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  XA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  KA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  QA =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ii = (a) => qA.test(a),
  At = (a) => !!a && !Number.isNaN(Number(a)),
  Oa = (a) => !!a && Number.isInteger(Number(a)),
  Gf = (a) => a.endsWith("%") && At(a.slice(0, -1)),
  kn = (a) => kA.test(a),
  ZA = () => !0,
  PA = (a) => YA.test(a) && !XA.test(a),
  Ly = () => !1,
  JA = (a) => KA.test(a),
  $A = (a) => QA.test(a),
  FA = (a) => !it(a) && !lt(a),
  WA = (a) => vl(a, Hy, Ly),
  it = (a) => Uy.test(a),
  Ja = (a) => vl(a, Gy, PA),
  qf = (a) => vl(a, aE, At),
  fg = (a) => vl(a, By, Ly),
  IA = (a) => vl(a, Vy, $A),
  cs = (a) => vl(a, qy, JA),
  lt = (a) => jy.test(a),
  mr = (a) => ml(a, Gy),
  tE = (a) => ml(a, iE),
  dg = (a) => ml(a, By),
  eE = (a) => ml(a, Hy),
  nE = (a) => ml(a, Vy),
  fs = (a) => ml(a, qy, !0),
  vl = (a, r, l) => {
    const u = Uy.exec(a);
    return u ? (u[1] ? r(u[1]) : l(u[2])) : !1;
  },
  ml = (a, r, l = !1) => {
    const u = jy.exec(a);
    return u ? (u[1] ? r(u[1]) : l) : !1;
  },
  By = (a) => a === "position" || a === "percentage",
  Vy = (a) => a === "image" || a === "url",
  Hy = (a) => a === "length" || a === "size" || a === "bg-size",
  Gy = (a) => a === "length",
  aE = (a) => a === "number",
  iE = (a) => a === "family-name",
  qy = (a) => a === "shadow",
  lE = () => {
    const a = ee("color"),
      r = ee("font"),
      l = ee("text"),
      u = ee("font-weight"),
      o = ee("tracking"),
      f = ee("leading"),
      d = ee("breakpoint"),
      h = ee("container"),
      v = ee("spacing"),
      p = ee("radius"),
      g = ee("shadow"),
      b = ee("inset-shadow"),
      O = ee("text-shadow"),
      C = ee("drop-shadow"),
      N = ee("blur"),
      G = ee("perspective"),
      X = ee("aspect"),
      Z = ee("ease"),
      rt = ee("animate"),
      tt = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      st = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      P = () => [...st(), lt, it],
      Y = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", "contain", "none"],
      T = () => [lt, it, v],
      z = () => [Ii, "full", "auto", ...T()],
      F = () => [Oa, "none", "subgrid", lt, it],
      J = () => ["auto", { span: ["full", Oa, lt, it] }, Oa, lt, it],
      k = () => [Oa, "auto", lt, it],
      I = () => ["auto", "min", "max", "fr", lt, it],
      St = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ut = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      x = () => ["auto", ...T()],
      q = () => [
        Ii,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...T(),
      ],
      B = () => [a, lt, it],
      gt = () => [...st(), dg, fg, { position: [lt, it] }],
      S = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      U = () => ["auto", "cover", "contain", eE, WA, { size: [lt, it] }],
      K = () => [Gf, mr, Ja],
      V = () => ["", "none", "full", p, lt, it],
      Q = () => ["", At, mr, Ja],
      ft = () => ["solid", "dashed", "dotted", "double"],
      nt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      dt = () => [At, Gf, dg, fg],
      ct = () => ["", "none", N, lt, it],
      zt = () => ["none", At, lt, it],
      ye = () => ["none", At, lt, it],
      ce = () => [At, lt, it],
      Me = () => [Ii, "full", ...T()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [kn],
        breakpoint: [kn],
        color: [ZA],
        container: [kn],
        "drop-shadow": [kn],
        ease: ["in", "out", "in-out"],
        font: [FA],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [kn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [kn],
        shadow: [kn],
        spacing: ["px", At],
        text: [kn],
        "text-shadow": [kn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ii, it, lt, X] }],
        container: ["container"],
        columns: [{ columns: [At, it, lt, h] }],
        "break-after": [{ "break-after": tt() }],
        "break-before": [{ "break-before": tt() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: P() }],
        overflow: [{ overflow: Y() }],
        "overflow-x": [{ "overflow-x": Y() }],
        "overflow-y": [{ "overflow-y": Y() }],
        overscroll: [{ overscroll: W() }],
        "overscroll-x": [{ "overscroll-x": W() }],
        "overscroll-y": [{ "overscroll-y": W() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: z() }],
        "inset-x": [{ "inset-x": z() }],
        "inset-y": [{ "inset-y": z() }],
        start: [{ start: z() }],
        end: [{ end: z() }],
        top: [{ top: z() }],
        right: [{ right: z() }],
        bottom: [{ bottom: z() }],
        left: [{ left: z() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Oa, "auto", lt, it] }],
        basis: [{ basis: [Ii, "full", "auto", h, ...T()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [At, Ii, "auto", "initial", "none", it] }],
        grow: [{ grow: ["", At, lt, it] }],
        shrink: [{ shrink: ["", At, lt, it] }],
        order: [{ order: [Oa, "first", "last", "none", lt, it] }],
        "grid-cols": [{ "grid-cols": F() }],
        "col-start-end": [{ col: J() }],
        "col-start": [{ "col-start": k() }],
        "col-end": [{ "col-end": k() }],
        "grid-rows": [{ "grid-rows": F() }],
        "row-start-end": [{ row: J() }],
        "row-start": [{ "row-start": k() }],
        "row-end": [{ "row-end": k() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": I() }],
        "auto-rows": [{ "auto-rows": I() }],
        gap: [{ gap: T() }],
        "gap-x": [{ "gap-x": T() }],
        "gap-y": [{ "gap-y": T() }],
        "justify-content": [{ justify: [...St(), "normal"] }],
        "justify-items": [{ "justify-items": [...ut(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ut()] }],
        "align-content": [{ content: ["normal", ...St()] }],
        "align-items": [{ items: [...ut(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ut(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": St() }],
        "place-items": [{ "place-items": [...ut(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ut()] }],
        p: [{ p: T() }],
        px: [{ px: T() }],
        py: [{ py: T() }],
        ps: [{ ps: T() }],
        pe: [{ pe: T() }],
        pt: [{ pt: T() }],
        pr: [{ pr: T() }],
        pb: [{ pb: T() }],
        pl: [{ pl: T() }],
        m: [{ m: x() }],
        mx: [{ mx: x() }],
        my: [{ my: x() }],
        ms: [{ ms: x() }],
        me: [{ me: x() }],
        mt: [{ mt: x() }],
        mr: [{ mr: x() }],
        mb: [{ mb: x() }],
        ml: [{ ml: x() }],
        "space-x": [{ "space-x": T() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": T() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: q() }],
        w: [{ w: [h, "screen", ...q()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...q()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [d] }, ...q()] },
        ],
        h: [{ h: ["screen", ...q()] }],
        "min-h": [{ "min-h": ["screen", "none", ...q()] }],
        "max-h": [{ "max-h": ["screen", ...q()] }],
        "font-size": [{ text: ["base", l, mr, Ja] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [u, lt, qf] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Gf,
              it,
            ],
          },
        ],
        "font-family": [{ font: [tE, it, r] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, lt, it] }],
        "line-clamp": [{ "line-clamp": [At, "none", lt, qf] }],
        leading: [{ leading: [f, ...T()] }],
        "list-image": [{ "list-image": ["none", lt, it] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", lt, it] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: B() }],
        "text-color": [{ text: B() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ft(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [At, "from-font", "auto", lt, Ja] },
        ],
        "text-decoration-color": [{ decoration: B() }],
        "underline-offset": [{ "underline-offset": [At, "auto", lt, it] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: T() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              lt,
              it,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", lt, it] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: gt() }],
        "bg-repeat": [{ bg: S() }],
        "bg-size": [{ bg: U() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Oa,
                  lt,
                  it,
                ],
                radial: ["", lt, it],
                conic: [Oa, lt, it],
              },
              nE,
              IA,
            ],
          },
        ],
        "bg-color": [{ bg: B() }],
        "gradient-from-pos": [{ from: K() }],
        "gradient-via-pos": [{ via: K() }],
        "gradient-to-pos": [{ to: K() }],
        "gradient-from": [{ from: B() }],
        "gradient-via": [{ via: B() }],
        "gradient-to": [{ to: B() }],
        rounded: [{ rounded: V() }],
        "rounded-s": [{ "rounded-s": V() }],
        "rounded-e": [{ "rounded-e": V() }],
        "rounded-t": [{ "rounded-t": V() }],
        "rounded-r": [{ "rounded-r": V() }],
        "rounded-b": [{ "rounded-b": V() }],
        "rounded-l": [{ "rounded-l": V() }],
        "rounded-ss": [{ "rounded-ss": V() }],
        "rounded-se": [{ "rounded-se": V() }],
        "rounded-ee": [{ "rounded-ee": V() }],
        "rounded-es": [{ "rounded-es": V() }],
        "rounded-tl": [{ "rounded-tl": V() }],
        "rounded-tr": [{ "rounded-tr": V() }],
        "rounded-br": [{ "rounded-br": V() }],
        "rounded-bl": [{ "rounded-bl": V() }],
        "border-w": [{ border: Q() }],
        "border-w-x": [{ "border-x": Q() }],
        "border-w-y": [{ "border-y": Q() }],
        "border-w-s": [{ "border-s": Q() }],
        "border-w-e": [{ "border-e": Q() }],
        "border-w-t": [{ "border-t": Q() }],
        "border-w-r": [{ "border-r": Q() }],
        "border-w-b": [{ "border-b": Q() }],
        "border-w-l": [{ "border-l": Q() }],
        "divide-x": [{ "divide-x": Q() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Q() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ft(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ft(), "hidden", "none"] }],
        "border-color": [{ border: B() }],
        "border-color-x": [{ "border-x": B() }],
        "border-color-y": [{ "border-y": B() }],
        "border-color-s": [{ "border-s": B() }],
        "border-color-e": [{ "border-e": B() }],
        "border-color-t": [{ "border-t": B() }],
        "border-color-r": [{ "border-r": B() }],
        "border-color-b": [{ "border-b": B() }],
        "border-color-l": [{ "border-l": B() }],
        "divide-color": [{ divide: B() }],
        "outline-style": [{ outline: [...ft(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [At, lt, it] }],
        "outline-w": [{ outline: ["", At, mr, Ja] }],
        "outline-color": [{ outline: B() }],
        shadow: [{ shadow: ["", "none", g, fs, cs] }],
        "shadow-color": [{ shadow: B() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, fs, cs] }],
        "inset-shadow-color": [{ "inset-shadow": B() }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: B() }],
        "ring-offset-w": [{ "ring-offset": [At, Ja] }],
        "ring-offset-color": [{ "ring-offset": B() }],
        "inset-ring-w": [{ "inset-ring": Q() }],
        "inset-ring-color": [{ "inset-ring": B() }],
        "text-shadow": [{ "text-shadow": ["none", O, fs, cs] }],
        "text-shadow-color": [{ "text-shadow": B() }],
        opacity: [{ opacity: [At, lt, it] }],
        "mix-blend": [
          { "mix-blend": [...nt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": nt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [At] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": dt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": dt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": B() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": B() }],
        "mask-image-t-from-pos": [{ "mask-t-from": dt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": dt() }],
        "mask-image-t-from-color": [{ "mask-t-from": B() }],
        "mask-image-t-to-color": [{ "mask-t-to": B() }],
        "mask-image-r-from-pos": [{ "mask-r-from": dt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": dt() }],
        "mask-image-r-from-color": [{ "mask-r-from": B() }],
        "mask-image-r-to-color": [{ "mask-r-to": B() }],
        "mask-image-b-from-pos": [{ "mask-b-from": dt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": dt() }],
        "mask-image-b-from-color": [{ "mask-b-from": B() }],
        "mask-image-b-to-color": [{ "mask-b-to": B() }],
        "mask-image-l-from-pos": [{ "mask-l-from": dt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": dt() }],
        "mask-image-l-from-color": [{ "mask-l-from": B() }],
        "mask-image-l-to-color": [{ "mask-l-to": B() }],
        "mask-image-x-from-pos": [{ "mask-x-from": dt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": dt() }],
        "mask-image-x-from-color": [{ "mask-x-from": B() }],
        "mask-image-x-to-color": [{ "mask-x-to": B() }],
        "mask-image-y-from-pos": [{ "mask-y-from": dt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": dt() }],
        "mask-image-y-from-color": [{ "mask-y-from": B() }],
        "mask-image-y-to-color": [{ "mask-y-to": B() }],
        "mask-image-radial": [{ "mask-radial": [lt, it] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": dt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": dt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": B() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": B() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": st() }],
        "mask-image-conic-pos": [{ "mask-conic": [At] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": dt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": dt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": B() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": B() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: gt() }],
        "mask-repeat": [{ mask: S() }],
        "mask-size": [{ mask: U() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", lt, it] }],
        filter: [{ filter: ["", "none", lt, it] }],
        blur: [{ blur: ct() }],
        brightness: [{ brightness: [At, lt, it] }],
        contrast: [{ contrast: [At, lt, it] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", C, fs, cs] }],
        "drop-shadow-color": [{ "drop-shadow": B() }],
        grayscale: [{ grayscale: ["", At, lt, it] }],
        "hue-rotate": [{ "hue-rotate": [At, lt, it] }],
        invert: [{ invert: ["", At, lt, it] }],
        saturate: [{ saturate: [At, lt, it] }],
        sepia: [{ sepia: ["", At, lt, it] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", lt, it] }],
        "backdrop-blur": [{ "backdrop-blur": ct() }],
        "backdrop-brightness": [{ "backdrop-brightness": [At, lt, it] }],
        "backdrop-contrast": [{ "backdrop-contrast": [At, lt, it] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", At, lt, it] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [At, lt, it] }],
        "backdrop-invert": [{ "backdrop-invert": ["", At, lt, it] }],
        "backdrop-opacity": [{ "backdrop-opacity": [At, lt, it] }],
        "backdrop-saturate": [{ "backdrop-saturate": [At, lt, it] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", At, lt, it] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": T() }],
        "border-spacing-x": [{ "border-spacing-x": T() }],
        "border-spacing-y": [{ "border-spacing-y": T() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              lt,
              it,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [At, "initial", lt, it] }],
        ease: [{ ease: ["linear", "initial", Z, lt, it] }],
        delay: [{ delay: [At, lt, it] }],
        animate: [{ animate: ["none", rt, lt, it] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [G, lt, it] }],
        "perspective-origin": [{ "perspective-origin": P() }],
        rotate: [{ rotate: zt() }],
        "rotate-x": [{ "rotate-x": zt() }],
        "rotate-y": [{ "rotate-y": zt() }],
        "rotate-z": [{ "rotate-z": zt() }],
        scale: [{ scale: ye() }],
        "scale-x": [{ "scale-x": ye() }],
        "scale-y": [{ "scale-y": ye() }],
        "scale-z": [{ "scale-z": ye() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ce() }],
        "skew-x": [{ "skew-x": ce() }],
        "skew-y": [{ "skew-y": ce() }],
        transform: [{ transform: [lt, it, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: P() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Me() }],
        "translate-x": [{ "translate-x": Me() }],
        "translate-y": [{ "translate-y": Me() }],
        "translate-z": [{ "translate-z": Me() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: B() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: B() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              lt,
              it,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": T() }],
        "scroll-mx": [{ "scroll-mx": T() }],
        "scroll-my": [{ "scroll-my": T() }],
        "scroll-ms": [{ "scroll-ms": T() }],
        "scroll-me": [{ "scroll-me": T() }],
        "scroll-mt": [{ "scroll-mt": T() }],
        "scroll-mr": [{ "scroll-mr": T() }],
        "scroll-mb": [{ "scroll-mb": T() }],
        "scroll-ml": [{ "scroll-ml": T() }],
        "scroll-p": [{ "scroll-p": T() }],
        "scroll-px": [{ "scroll-px": T() }],
        "scroll-py": [{ "scroll-py": T() }],
        "scroll-ps": [{ "scroll-ps": T() }],
        "scroll-pe": [{ "scroll-pe": T() }],
        "scroll-pt": [{ "scroll-pt": T() }],
        "scroll-pr": [{ "scroll-pr": T() }],
        "scroll-pb": [{ "scroll-pb": T() }],
        "scroll-pl": [{ "scroll-pl": T() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", lt, it],
          },
        ],
        fill: [{ fill: ["none", ...B()] }],
        "stroke-w": [{ stroke: [At, mr, Ja, qf] }],
        stroke: [{ stroke: ["none", ...B()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  rE = GA(lE);
function uE(...a) {
  return rE(Cy(a));
}
const sE = MA(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function oE({ className: a, variant: r, size: l, asChild: u = !1, ...o }) {
  const f = u ? _A : "button";
  return et.jsx(f, {
    "data-slot": "button",
    className: uE(sE({ variant: r, size: l, className: a })),
    ...o,
  });
}
const cE = my(wy.HOME.path)({ component: fE });
function fE() {
  return et.jsx("div", {
    className: "flex min-h-svh flex-col items-center justify-center",
    children: et.jsx(oE, {
      onClick: () => alert("Hello, world!"),
      children: "Click me",
    }),
  });
}
const dE = pA.update({
    id: "/about",
    path: "/about",
    getParentRoute: () => Ed,
  }),
  hE = cE.update({ id: "/", path: "/", getParentRoute: () => Ed }),
  vE = { IndexRoute: hE, AboutRoute: dE },
  mE = Ed._addFileChildren(vE)._addFileTypes(),
  pE = fO({ routeTree: mE });
function gE() {
  return et.jsx(vO, { router: pE });
}
m1.createRoot(document.getElementById("root")).render(
  et.jsx(mt.StrictMode, { children: et.jsx(s1, { children: et.jsx(gE, {}) }) }),
);
export {
  DE as D,
  TE as S,
  Ea as a,
  _E as b,
  AE as c,
  ti as d,
  on as e,
  CO as f,
  FO as g,
  Cy as h,
  aA as i,
  PO as j,
  xE as k,
  Kn as l,
  RE as m,
  eA as n,
  WO as o,
  A1 as p,
  rs as q,
  rn as r,
  ud as s,
  wE as t,
  EE as u,
  ME as v,
};
