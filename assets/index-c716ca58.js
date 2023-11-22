function mh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function gh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cf = { exports: {} },
  So = {},
  ff = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for("react.element"),
  yh = Symbol.for("react.portal"),
  vh = Symbol.for("react.fragment"),
  wh = Symbol.for("react.strict_mode"),
  xh = Symbol.for("react.profiler"),
  Sh = Symbol.for("react.provider"),
  kh = Symbol.for("react.context"),
  Ch = Symbol.for("react.forward_ref"),
  Eh = Symbol.for("react.suspense"),
  Nh = Symbol.for("react.memo"),
  jh = Symbol.for("react.lazy"),
  du = Symbol.iterator;
function Ph(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (du && e[du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var df = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pf = Object.assign,
  hf = {};
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hf),
    (this.updater = n || df);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mf() {}
mf.prototype = Jn.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hf),
    (this.updater = n || df);
}
var Yl = (Jl.prototype = new mf());
Yl.constructor = Jl;
pf(Yl, Jn.prototype);
Yl.isPureReactComponent = !0;
var pu = Array.isArray,
  gf = Object.prototype.hasOwnProperty,
  Xl = { current: null },
  yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function vf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      gf.call(t, r) && !yf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Xl.current,
  };
}
function Lh(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ql(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function Oh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hu = /\/+/g;
function cs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Oh("" + e.key)
    : t.toString(36);
}
function Si(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gr:
          case yh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + cs(s, 0) : r),
      pu(i)
        ? ((n = ""),
          e != null && (n = e.replace(hu, "$&/") + "/"),
          Si(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ql(i) &&
            (i = Lh(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(hu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), pu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + cs(o, l);
      s += Si(o, t, n, a, i);
    }
  else if (((a = Ph(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + cs(o, l++)), (s += Si(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ri(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Si(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function _h(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null },
  ki = { transition: null },
  $h = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: ki,
    ReactCurrentOwner: Xl,
  };
R.Children = {
  map: ri,
  forEach: function (e, t, n) {
    ri(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ri(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ri(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ql(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = Jn;
R.Fragment = vh;
R.Profiler = xh;
R.PureComponent = Jl;
R.StrictMode = wh;
R.Suspense = Eh;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $h;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = pf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Xl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      gf.call(t, a) &&
        !yf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Gr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: kh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sh, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = vf;
R.createFactory = function (e) {
  var t = vf.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: Ch, render: e };
};
R.isValidElement = ql;
R.lazy = function (e) {
  return { $$typeof: jh, _payload: { _status: -1, _result: e }, _init: _h };
};
R.memo = function (e, t) {
  return { $$typeof: Nh, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = ki.transition;
  ki.transition = {};
  try {
    e();
  } finally {
    ki.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
R.useContext = function (e) {
  return ve.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
R.useId = function () {
  return ve.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return ve.current.useRef(e);
};
R.useState = function (e) {
  return ve.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return ve.current.useTransition();
};
R.version = "18.2.0";
ff.exports = R;
var C = ff.exports;
const wf = gh(C),
  bh = mh({ __proto__: null, default: wf }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rh = C,
  Th = Symbol.for("react.element"),
  Ih = Symbol.for("react.fragment"),
  Mh = Object.prototype.hasOwnProperty,
  zh = Rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fh = { key: !0, ref: !0, __self: !0, __source: !0 };
function xf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Mh.call(t, r) && !Fh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Th,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: zh.current,
  };
}
So.Fragment = Ih;
So.jsx = xf;
So.jsxs = xf;
cf.exports = So;
var h = cf.exports,
  Ks = {},
  Sf = { exports: {} },
  be = {},
  kf = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, $) {
    var b = P.length;
    P.push($);
    e: for (; 0 < b; ) {
      var J = (b - 1) >>> 1,
        te = P[J];
      if (0 < i(te, $)) (P[J] = $), (P[b] = te), (b = J);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var $ = P[0],
      b = P.pop();
    if (b !== $) {
      P[0] = b;
      e: for (var J = 0, te = P.length, ti = te >>> 1; J < ti; ) {
        var Bt = 2 * (J + 1) - 1,
          us = P[Bt],
          Wt = Bt + 1,
          ni = P[Wt];
        if (0 > i(us, b))
          Wt < te && 0 > i(ni, us)
            ? ((P[J] = ni), (P[Wt] = b), (J = Wt))
            : ((P[J] = us), (P[Bt] = b), (J = Bt));
        else if (Wt < te && 0 > i(ni, b)) (P[J] = ni), (P[Wt] = b), (J = Wt);
        else break e;
      }
    }
    return $;
  }
  function i(P, $) {
    var b = P.sortIndex - $.sortIndex;
    return b !== 0 ? b : P.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    v = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(P) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= P)
        r(u), ($.sortIndex = $.expirationTime), t(a, $);
      else break;
      $ = n(u);
    }
  }
  function x(P) {
    if (((w = !1), g(P), !v))
      if (n(a) !== null) (v = !0), dn(S);
      else {
        var $ = n(u);
        $ !== null && oe(x, $.startTime - P);
      }
  }
  function S(P, $) {
    (v = !1), w && ((w = !1), m(L), (L = -1)), (y = !0);
    var b = f;
    try {
      for (
        g($), d = n(a);
        d !== null && (!(d.expirationTime > $) || (P && !D()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var te = J(d.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(a) && r(a),
            g($);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var ti = !0;
      else {
        var Bt = n(u);
        Bt !== null && oe(x, Bt.startTime - $), (ti = !1);
      }
      return ti;
    } finally {
      (d = null), (f = b), (y = !1);
    }
  }
  var j = !1,
    N = null,
    L = -1,
    T = 5,
    _ = -1;
  function D() {
    return !(e.unstable_now() - _ < T);
  }
  function He() {
    if (N !== null) {
      var P = e.unstable_now();
      _ = P;
      var $ = !0;
      try {
        $ = N(!0, P);
      } finally {
        $ ? me() : ((j = !1), (N = null));
      }
    } else j = !1;
  }
  var me;
  if (typeof p == "function")
    me = function () {
      p(He);
    };
  else if (typeof MessageChannel < "u") {
    var Ie = new MessageChannel(),
      vt = Ie.port2;
    (Ie.port1.onmessage = He),
      (me = function () {
        vt.postMessage(null);
      });
  } else
    me = function () {
      k(He, 0);
    };
  function dn(P) {
    (N = P), j || ((j = !0), me());
  }
  function oe(P, $) {
    L = k(function () {
      P(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), dn(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = f;
      }
      var b = f;
      f = $;
      try {
        return P();
      } finally {
        f = b;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, $) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var b = f;
      f = P;
      try {
        return $();
      } finally {
        f = b;
      }
    }),
    (e.unstable_scheduleCallback = function (P, $, b) {
      var J = e.unstable_now();
      switch (
        (typeof b == "object" && b !== null
          ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? J + b : J))
          : (b = J),
        P)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = b + te),
        (P = {
          id: c++,
          callback: $,
          priorityLevel: P,
          startTime: b,
          expirationTime: te,
          sortIndex: -1,
        }),
        b > J
          ? ((P.sortIndex = b),
            t(u, P),
            n(a) === null &&
              P === n(u) &&
              (w ? (m(L), (L = -1)) : (w = !0), oe(x, b - J)))
          : ((P.sortIndex = te), t(a, P), v || y || ((v = !0), dn(S))),
        P
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (P) {
      var $ = f;
      return function () {
        var b = f;
        f = $;
        try {
          return P.apply(this, arguments);
        } finally {
          f = b;
        }
      };
    });
})(Cf);
kf.exports = Cf;
var Dh = kf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ef = C,
  _e = Dh;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Nf = new Set(),
  Nr = {};
function un(e, t) {
  Dn(e, t), Dn(e + "Capture", t);
}
function Dn(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) Nf.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qs = Object.prototype.hasOwnProperty,
  Ah =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mu = {},
  gu = {};
function Uh(e) {
  return Qs.call(gu, e)
    ? !0
    : Qs.call(mu, e)
    ? !1
    : Ah.test(e)
    ? (gu[e] = !0)
    : ((mu[e] = !0), !1);
}
function Vh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hh(e, t, n, r) {
  if (t === null || typeof t > "u" || Vh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zl = /[\-:]([a-z])/g;
function ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zl, ea);
    ae[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zl, ea);
    ae[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zl, ea);
  ae[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ta(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hh(t, n, i, r) && (n = null),
    r || i === null
      ? Uh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ii = Symbol.for("react.element"),
  gn = Symbol.for("react.portal"),
  yn = Symbol.for("react.fragment"),
  na = Symbol.for("react.strict_mode"),
  Gs = Symbol.for("react.profiler"),
  jf = Symbol.for("react.provider"),
  Pf = Symbol.for("react.context"),
  ra = Symbol.for("react.forward_ref"),
  Js = Symbol.for("react.suspense"),
  Ys = Symbol.for("react.suspense_list"),
  ia = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  Lf = Symbol.for("react.offscreen"),
  yu = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yu && e[yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  fs;
function cr(e) {
  if (fs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fs = (t && t[1]) || "";
    }
  return (
    `
` +
    fs +
    e
  );
}
var ds = !1;
function ps(e, t) {
  if (!e || ds) return "";
  ds = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ds = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Bh(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ps(e.type, !1)), e;
    case 11:
      return (e = ps(e.type.render, !1)), e;
    case 1:
      return (e = ps(e.type, !0)), e;
    default:
      return "";
  }
}
function Xs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yn:
      return "Fragment";
    case gn:
      return "Portal";
    case Gs:
      return "Profiler";
    case na:
      return "StrictMode";
    case Js:
      return "Suspense";
    case Ys:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pf:
        return (e.displayName || "Context") + ".Consumer";
      case jf:
        return (e._context.displayName || "Context") + ".Provider";
      case ra:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ia:
        return (
          (t = e.displayName || null), t !== null ? t : Xs(e.type) || "Memo"
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return Xs(e(t));
        } catch {}
    }
  return null;
}
function Wh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xs(t);
    case 8:
      return t === na ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Of(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Kh(e) {
  var t = Of(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oi(e) {
  e._valueTracker || (e._valueTracker = Kh(e));
}
function _f(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Of(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ti(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qs(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $f(e, t) {
  (t = t.checked), t != null && ta(e, "checked", t, !1);
}
function Zs(e, t) {
  $f(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? el(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && el(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function el(e, t, n) {
  (t !== "number" || Ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function tl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function bf(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Rf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var si,
  Tf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Qh = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Qh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function If(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = If(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Gh = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function rl(e, t) {
  if (t) {
    if (Gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function il(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var ol = null;
function oa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sl = null,
  On = null,
  _n = null;
function ku(e) {
  if ((e = Xr(e))) {
    if (typeof sl != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = jo(t)), sl(e.stateNode, e.type, t));
  }
}
function zf(e) {
  On ? (_n ? _n.push(e) : (_n = [e])) : (On = e);
}
function Ff() {
  if (On) {
    var e = On,
      t = _n;
    if (((_n = On = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
  }
}
function Df(e, t) {
  return e(t);
}
function Af() {}
var hs = !1;
function Uf(e, t, n) {
  if (hs) return e(t, n);
  hs = !0;
  try {
    return Df(e, t, n);
  } finally {
    (hs = !1), (On !== null || _n !== null) && (Af(), Ff());
  }
}
function Pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ll = !1;
if (dt)
  try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
      get: function () {
        ll = !0;
      },
    }),
      window.addEventListener("test", nr, nr),
      window.removeEventListener("test", nr, nr);
  } catch {
    ll = !1;
  }
function Jh(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gr = !1,
  Ii = null,
  Mi = !1,
  al = null,
  Yh = {
    onError: function (e) {
      (gr = !0), (Ii = e);
    },
  };
function Xh(e, t, n, r, i, o, s, l, a) {
  (gr = !1), (Ii = null), Jh.apply(Yh, arguments);
}
function qh(e, t, n, r, i, o, s, l, a) {
  if ((Xh.apply(this, arguments), gr)) {
    if (gr) {
      var u = Ii;
      (gr = !1), (Ii = null);
    } else throw Error(E(198));
    Mi || ((Mi = !0), (al = u));
  }
}
function cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cu(e) {
  if (cn(e) !== e) throw Error(E(188));
}
function Zh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Cu(i), e;
        if (o === r) return Cu(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Hf(e) {
  return (e = Zh(e)), e !== null ? Bf(e) : null;
}
function Bf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wf = _e.unstable_scheduleCallback,
  Eu = _e.unstable_cancelCallback,
  em = _e.unstable_shouldYield,
  tm = _e.unstable_requestPaint,
  Y = _e.unstable_now,
  nm = _e.unstable_getCurrentPriorityLevel,
  sa = _e.unstable_ImmediatePriority,
  Kf = _e.unstable_UserBlockingPriority,
  zi = _e.unstable_NormalPriority,
  rm = _e.unstable_LowPriority,
  Qf = _e.unstable_IdlePriority,
  ko = null,
  it = null;
function im(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : lm,
  om = Math.log,
  sm = Math.LN2;
function lm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((om(e) / sm) | 0)) | 0;
}
var li = 64,
  ai = 4194304;
function dr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = dr(l)) : ((o &= s), o !== 0 && (r = dr(o)));
  } else (s = n & ~i), s !== 0 ? (r = dr(s)) : o !== 0 && (r = dr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function am(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function um(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Je(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = am(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ul(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gf() {
  var e = li;
  return (li <<= 1), !(li & 4194240) && (li = 64), e;
}
function ms(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n);
}
function cm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Je(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function la(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var M = 0;
function Jf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yf,
  aa,
  Xf,
  qf,
  Zf,
  cl = !1,
  ui = [],
  Lt = null,
  Ot = null,
  _t = null,
  Lr = new Map(),
  Or = new Map(),
  kt = [],
  fm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      Lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function rr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Xr(t)), t !== null && aa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function dm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Lt = rr(Lt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ot = rr(Ot, e, t, n, r, i)), !0;
    case "mouseover":
      return (_t = rr(_t, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Lr.set(o, rr(Lr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Or.set(o, rr(Or.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ed(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vf(n)), t !== null)) {
          (e.blockedOn = t),
            Zf(e.priority, function () {
              Xf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ol = r), n.target.dispatchEvent(r), (ol = null);
    } else return (t = Xr(n)), t !== null && aa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ju(e, t, n) {
  Ci(e) && n.delete(t);
}
function pm() {
  (cl = !1),
    Lt !== null && Ci(Lt) && (Lt = null),
    Ot !== null && Ci(Ot) && (Ot = null),
    _t !== null && Ci(_t) && (_t = null),
    Lr.forEach(ju),
    Or.forEach(ju);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cl ||
      ((cl = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, pm)));
}
function _r(e) {
  function t(i) {
    return ir(i, e);
  }
  if (0 < ui.length) {
    ir(ui[0], e);
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lt !== null && ir(Lt, e),
      Ot !== null && ir(Ot, e),
      _t !== null && ir(_t, e),
      Lr.forEach(t),
      Or.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    ed(n), n.blockedOn === null && kt.shift();
}
var $n = gt.ReactCurrentBatchConfig,
  Di = !0;
function hm(e, t, n, r) {
  var i = M,
    o = $n.transition;
  $n.transition = null;
  try {
    (M = 1), ua(e, t, n, r);
  } finally {
    (M = i), ($n.transition = o);
  }
}
function mm(e, t, n, r) {
  var i = M,
    o = $n.transition;
  $n.transition = null;
  try {
    (M = 4), ua(e, t, n, r);
  } finally {
    (M = i), ($n.transition = o);
  }
}
function ua(e, t, n, r) {
  if (Di) {
    var i = fl(e, t, n, r);
    if (i === null) Ns(e, t, r, Ai, n), Nu(e, r);
    else if (dm(i, e, t, n, r)) r.stopPropagation();
    else if ((Nu(e, r), t & 4 && -1 < fm.indexOf(e))) {
      for (; i !== null; ) {
        var o = Xr(i);
        if (
          (o !== null && Yf(o),
          (o = fl(e, t, n, r)),
          o === null && Ns(e, t, r, Ai, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ns(e, t, r, null, n);
  }
}
var Ai = null;
function fl(e, t, n, r) {
  if (((Ai = null), (e = oa(r)), (e = Jt(e)), e !== null))
    if (((t = cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ai = e), null;
}
function td(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nm()) {
        case sa:
          return 1;
        case Kf:
          return 4;
        case zi:
        case rm:
          return 16;
        case Qf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null,
  ca = null,
  Ei = null;
function nd() {
  if (Ei) return Ei;
  var e,
    t = ca,
    n = t.length,
    r,
    i = "value" in Nt ? Nt.value : Nt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ei = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ci() {
  return !0;
}
function Pu() {
  return !1;
}
function Re(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ci
        : Pu),
      (this.isPropagationStopped = Pu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ci));
      },
      persist: function () {},
      isPersistent: ci,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fa = Re(Yn),
  Yr = Q({}, Yn, { view: 0, detail: 0 }),
  gm = Re(Yr),
  gs,
  ys,
  or,
  Co = Q({}, Yr, {
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
    getModifierState: da,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((gs = e.screenX - or.screenX), (ys = e.screenY - or.screenY))
              : (ys = gs = 0),
            (or = e)),
          gs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ys;
    },
  }),
  Lu = Re(Co),
  ym = Q({}, Co, { dataTransfer: 0 }),
  vm = Re(ym),
  wm = Q({}, Yr, { relatedTarget: 0 }),
  vs = Re(wm),
  xm = Q({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sm = Re(xm),
  km = Q({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Cm = Re(km),
  Em = Q({}, Yn, { data: 0 }),
  Ou = Re(Em),
  Nm = {
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
  jm = {
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
  Pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pm[e]) ? !!t[e] : !1;
}
function da() {
  return Lm;
}
var Om = Q({}, Yr, {
    key: function (e) {
      if (e.key) {
        var t = Nm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jm[e.keyCode] || "Unidentified"
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
    getModifierState: da,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _m = Re(Om),
  $m = Q({}, Co, {
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
  _u = Re($m),
  bm = Q({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: da,
  }),
  Rm = Re(bm),
  Tm = Q({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Im = Re(Tm),
  Mm = Q({}, Co, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zm = Re(Mm),
  Fm = [9, 13, 27, 32],
  pa = dt && "CompositionEvent" in window,
  yr = null;
dt && "documentMode" in document && (yr = document.documentMode);
var Dm = dt && "TextEvent" in window && !yr,
  rd = dt && (!pa || (yr && 8 < yr && 11 >= yr)),
  $u = String.fromCharCode(32),
  bu = !1;
function id(e, t) {
  switch (e) {
    case "keyup":
      return Fm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function od(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var vn = !1;
function Am(e, t) {
  switch (e) {
    case "compositionend":
      return od(t);
    case "keypress":
      return t.which !== 32 ? null : ((bu = !0), $u);
    case "textInput":
      return (e = t.data), e === $u && bu ? null : e;
    default:
      return null;
  }
}
function Um(e, t) {
  if (vn)
    return e === "compositionend" || (!pa && id(e, t))
      ? ((e = nd()), (Ei = ca = Nt = null), (vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vm = {
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
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vm[e.type] : t === "textarea";
}
function sd(e, t, n, r) {
  zf(r),
    (t = Ui(t, "onChange")),
    0 < t.length &&
      ((n = new fa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vr = null,
  $r = null;
function Hm(e) {
  yd(e, 0);
}
function Eo(e) {
  var t = Sn(e);
  if (_f(t)) return e;
}
function Bm(e, t) {
  if (e === "change") return t;
}
var ld = !1;
if (dt) {
  var ws;
  if (dt) {
    var xs = "oninput" in document;
    if (!xs) {
      var Tu = document.createElement("div");
      Tu.setAttribute("oninput", "return;"),
        (xs = typeof Tu.oninput == "function");
    }
    ws = xs;
  } else ws = !1;
  ld = ws && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  vr && (vr.detachEvent("onpropertychange", ad), ($r = vr = null));
}
function ad(e) {
  if (e.propertyName === "value" && Eo($r)) {
    var t = [];
    sd(t, $r, e, oa(e)), Uf(Hm, t);
  }
}
function Wm(e, t, n) {
  e === "focusin"
    ? (Iu(), (vr = t), ($r = n), vr.attachEvent("onpropertychange", ad))
    : e === "focusout" && Iu();
}
function Km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Eo($r);
}
function Qm(e, t) {
  if (e === "click") return Eo(t);
}
function Gm(e, t) {
  if (e === "input" || e === "change") return Eo(t);
}
function Jm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Jm;
function br(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qs.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Mu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mu(n);
  }
}
function ud(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ud(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cd() {
  for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ti(e.document);
  }
  return t;
}
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ym(e) {
  var t = cd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ud(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ha(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = zu(n, o));
        var s = zu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Xm = dt && "documentMode" in document && 11 >= document.documentMode,
  wn = null,
  dl = null,
  wr = null,
  pl = !1;
function Fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pl ||
    wn == null ||
    wn !== Ti(r) ||
    ((r = wn),
    "selectionStart" in r && ha(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && br(wr, r)) ||
      ((wr = r),
      (r = Ui(dl, "onSelect")),
      0 < r.length &&
        ((t = new fa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wn))));
}
function fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xn = {
    animationend: fi("Animation", "AnimationEnd"),
    animationiteration: fi("Animation", "AnimationIteration"),
    animationstart: fi("Animation", "AnimationStart"),
    transitionend: fi("Transition", "TransitionEnd"),
  },
  Ss = {},
  fd = {};
dt &&
  ((fd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
  "TransitionEvent" in window || delete xn.transitionend.transition);
function No(e) {
  if (Ss[e]) return Ss[e];
  if (!xn[e]) return e;
  var t = xn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fd) return (Ss[e] = t[n]);
  return e;
}
var dd = No("animationend"),
  pd = No("animationiteration"),
  hd = No("animationstart"),
  md = No("transitionend"),
  gd = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function At(e, t) {
  gd.set(e, t), un(t, [e]);
}
for (var ks = 0; ks < Du.length; ks++) {
  var Cs = Du[ks],
    qm = Cs.toLowerCase(),
    Zm = Cs[0].toUpperCase() + Cs.slice(1);
  At(qm, "on" + Zm);
}
At(dd, "onAnimationEnd");
At(pd, "onAnimationIteration");
At(hd, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(md, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  eg = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qh(r, t, void 0, e), (e.currentTarget = null);
}
function yd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Au(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Au(i, l, u), (o = a);
        }
    }
  }
  if (Mi) throw ((e = al), (Mi = !1), (al = null), e);
}
function U(e, t) {
  var n = t[vl];
  n === void 0 && (n = t[vl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vd(t, e, 2, !1), n.add(r));
}
function Es(e, t, n) {
  var r = 0;
  t && (r |= 4), vd(n, e, r, t);
}
var di = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[di]) {
    (e[di] = !0),
      Nf.forEach(function (n) {
        n !== "selectionchange" && (eg.has(n) || Es(n, !1, e), Es(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[di] || ((t[di] = !0), Es("selectionchange", !1, t));
  }
}
function vd(e, t, n, r) {
  switch (td(t)) {
    case 1:
      var i = hm;
      break;
    case 4:
      i = mm;
      break;
    default:
      i = ua;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ll ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ns(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Jt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Uf(function () {
    var u = o,
      c = oa(n),
      d = [];
    e: {
      var f = gd.get(e);
      if (f !== void 0) {
        var y = fa,
          v = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = _m;
            break;
          case "focusin":
            (v = "focus"), (y = vs);
            break;
          case "focusout":
            (v = "blur"), (y = vs);
            break;
          case "beforeblur":
          case "afterblur":
            y = vs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = vm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Rm;
            break;
          case dd:
          case pd:
          case hd:
            y = Sm;
            break;
          case md:
            y = Im;
            break;
          case "scroll":
            y = gm;
            break;
          case "wheel":
            y = zm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Cm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = _u;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          m = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              m !== null && ((x = Pr(p, m)), x != null && w.push(Tr(p, x, g)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((f = new y(f, v, null, n, c)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ol &&
            (v = n.relatedTarget || n.fromElement) &&
            (Jt(v) || v[pt]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Jt(v) : null),
              v !== null &&
                ((k = cn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((w = Lu),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = _u),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (k = y == null ? f : Sn(y)),
            (g = v == null ? f : Sn(v)),
            (f = new w(x, p + "leave", y, n, c)),
            (f.target = k),
            (f.relatedTarget = g),
            (x = null),
            Jt(c) === u &&
              ((w = new w(m, p + "enter", v, n, c)),
              (w.target = g),
              (w.relatedTarget = k),
              (x = w)),
            (k = x),
            y && v)
          )
            t: {
              for (w = y, m = v, p = 0, g = w; g; g = pn(g)) p++;
              for (g = 0, x = m; x; x = pn(x)) g++;
              for (; 0 < p - g; ) (w = pn(w)), p--;
              for (; 0 < g - p; ) (m = pn(m)), g--;
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = pn(w)), (m = pn(m));
              }
              w = null;
            }
          else w = null;
          y !== null && Uu(d, f, y, w, !1),
            v !== null && k !== null && Uu(d, k, v, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Sn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var S = Bm;
        else if (Ru(f))
          if (ld) S = Gm;
          else {
            S = Km;
            var j = Wm;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = Qm);
        if (S && (S = S(e, u))) {
          sd(d, S, n, c);
          break e;
        }
        j && j(e, f, u),
          e === "focusout" &&
            (j = f._wrapperState) &&
            j.controlled &&
            f.type === "number" &&
            el(f, "number", f.value);
      }
      switch (((j = u ? Sn(u) : window), e)) {
        case "focusin":
          (Ru(j) || j.contentEditable === "true") &&
            ((wn = j), (dl = u), (wr = null));
          break;
        case "focusout":
          wr = dl = wn = null;
          break;
        case "mousedown":
          pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pl = !1), Fu(d, n, c);
          break;
        case "selectionchange":
          if (Xm) break;
        case "keydown":
        case "keyup":
          Fu(d, n, c);
      }
      var N;
      if (pa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        vn
          ? id(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (rd &&
          n.locale !== "ko" &&
          (vn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && vn && (N = nd())
            : ((Nt = c),
              (ca = "value" in Nt ? Nt.value : Nt.textContent),
              (vn = !0))),
        (j = Ui(u, L)),
        0 < j.length &&
          ((L = new Ou(L, e, null, n, c)),
          d.push({ event: L, listeners: j }),
          N ? (L.data = N) : ((N = od(n)), N !== null && (L.data = N)))),
        (N = Dm ? Am(e, n) : Um(e, n)) &&
          ((u = Ui(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ou("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    yd(d, t);
  });
}
function Tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ui(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Pr(e, n)),
      o != null && r.unshift(Tr(e, o, i)),
      (o = Pr(e, t)),
      o != null && r.push(Tr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Pr(n, o)), a != null && s.unshift(Tr(n, a, l)))
        : i || ((a = Pr(n, o)), a != null && s.push(Tr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var tg = /\r\n?/g,
  ng = /\u0000|\uFFFD/g;
function Vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tg,
      `
`
    )
    .replace(ng, "");
}
function pi(e, t, n) {
  if (((t = Vu(t)), Vu(e) !== t && n)) throw Error(E(425));
}
function Vi() {}
var hl = null,
  ml = null;
function gl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yl = typeof setTimeout == "function" ? setTimeout : void 0,
  rg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hu = typeof Promise == "function" ? Promise : void 0,
  ig =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hu < "u"
      ? function (e) {
          return Hu.resolve(null).then(e).catch(og);
        }
      : yl;
function og(e) {
  setTimeout(function () {
    throw e;
  });
}
function js(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), _r(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  _r(t);
}
function $t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Bu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + Xn,
  Ir = "__reactProps$" + Xn,
  pt = "__reactContainer$" + Xn,
  vl = "__reactEvents$" + Xn,
  sg = "__reactListeners$" + Xn,
  lg = "__reactHandles$" + Xn;
function Jt(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bu(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = Bu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xr(e) {
  return (
    (e = e[nt] || e[pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function jo(e) {
  return e[Ir] || null;
}
var wl = [],
  kn = -1;
function Ut(e) {
  return { current: e };
}
function V(e) {
  0 > kn || ((e.current = wl[kn]), (wl[kn] = null), kn--);
}
function A(e, t) {
  kn++, (wl[kn] = e.current), (e.current = t);
}
var Ft = {},
  he = Ut(Ft),
  ke = Ut(!1),
  en = Ft;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function Hi() {
  V(ke), V(he);
}
function Wu(e, t, n) {
  if (he.current !== Ft) throw Error(E(168));
  A(he, t), A(ke, n);
}
function wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, Wh(e) || "Unknown", i));
  return Q({}, n, r);
}
function Bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (en = he.current),
    A(he, e),
    A(ke, ke.current),
    !0
  );
}
function Ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = wd(e, t, en)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(ke),
      V(he),
      A(he, e))
    : V(ke),
    A(ke, n);
}
var at = null,
  Po = !1,
  Ps = !1;
function xd(e) {
  at === null ? (at = [e]) : at.push(e);
}
function ag(e) {
  (Po = !0), xd(e);
}
function Vt() {
  if (!Ps && at !== null) {
    Ps = !0;
    var e = 0,
      t = M;
    try {
      var n = at;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (at = null), (Po = !1);
    } catch (i) {
      throw (at !== null && (at = at.slice(e + 1)), Wf(sa, Vt), i);
    } finally {
      (M = t), (Ps = !1);
    }
  }
  return null;
}
var Cn = [],
  En = 0,
  Wi = null,
  Ki = 0,
  Me = [],
  ze = 0,
  tn = null,
  ut = 1,
  ct = "";
function Kt(e, t) {
  (Cn[En++] = Ki), (Cn[En++] = Wi), (Wi = e), (Ki = t);
}
function Sd(e, t, n) {
  (Me[ze++] = ut), (Me[ze++] = ct), (Me[ze++] = tn), (tn = e);
  var r = ut;
  e = ct;
  var i = 32 - Je(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Je(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ut = (1 << (32 - Je(t) + i)) | (n << i) | r),
      (ct = o + e);
  } else (ut = (1 << o) | (n << i) | r), (ct = e);
}
function ma(e) {
  e.return !== null && (Kt(e, 1), Sd(e, 1, 0));
}
function ga(e) {
  for (; e === Wi; )
    (Wi = Cn[--En]), (Cn[En] = null), (Ki = Cn[--En]), (Cn[En] = null);
  for (; e === tn; )
    (tn = Me[--ze]),
      (Me[ze] = null),
      (ct = Me[--ze]),
      (Me[ze] = null),
      (ut = Me[--ze]),
      (Me[ze] = null);
}
var Oe = null,
  Pe = null,
  B = !1,
  Qe = null;
function kd(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Pe = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tn !== null ? { id: ut, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sl(e) {
  if (B) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (xl(e)) throw Error(E(418));
        t = $t(n.nextSibling);
        var r = Oe;
        t && Qu(e, t)
          ? kd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Oe = e));
      }
    } else {
      if (xl(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (Oe = e);
    }
  }
}
function Gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function hi(e) {
  if (e !== Oe) return !1;
  if (!B) return Gu(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gl(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (xl(e)) throw (Cd(), Error(E(418)));
    for (; t; ) kd(e, t), (t = $t(t.nextSibling));
  }
  if ((Gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = Oe ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Cd() {
  for (var e = Pe; e; ) e = $t(e.nextSibling);
}
function Un() {
  (Pe = Oe = null), (B = !1);
}
function ya(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var ug = gt.ReactCurrentBatchConfig;
function We(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Qi = Ut(null),
  Gi = null,
  Nn = null,
  va = null;
function wa() {
  va = Nn = Gi = null;
}
function xa(e) {
  var t = Qi.current;
  V(Qi), (e._currentValue = t);
}
function kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bn(e, t) {
  (Gi = e),
    (va = Nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Se = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (va !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (Gi === null) throw Error(E(308));
      (Nn = e), (Gi.dependencies = { lanes: 0, firstContext: e });
    } else Nn = Nn.next = e;
  return t;
}
var Yt = null;
function Sa(e) {
  Yt === null ? (Yt = [e]) : Yt.push(e);
}
function Ed(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Sa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ht(e, r)
  );
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ht(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Sa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ht(e, n)
  );
}
function ji(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), la(e, n);
  }
}
function Ju(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ji(e, t, n, r) {
  var i = e.updateQueue;
  St = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var f = l.lane,
        y = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            w = l;
          switch (((f = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                d = v.call(y, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (f = typeof v == "function" ? v.call(y, d, f) : v),
                f == null)
              )
                break e;
              d = Q({}, d, f);
              break e;
            case 2:
              St = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (a = d)) : (c = c.next = y),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (rn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Yu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var jd = new Ef.Component().refs;
function Cl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Tt(e),
      o = ft(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = bt(e, o, i)),
      t !== null && (Ye(t, e, i, r), ji(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Tt(e),
      o = ft(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = bt(e, o, i)),
      t !== null && (Ye(t, e, i, r), ji(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Tt(e),
      i = ft(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = bt(e, i, r)),
      t !== null && (Ye(t, e, r, n), ji(t, e, r));
  },
};
function Xu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !br(n, r) || !br(i, o)
      : !0
  );
}
function Pd(e, t, n) {
  var r = !1,
    i = Ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ae(o))
      : ((i = Ce(t) ? en : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? An(e, i) : Ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function qu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function El(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = jd), ka(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ae(o))
    : ((o = Ce(t) ? en : he.current), (i.context = An(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Cl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Lo.enqueueReplaceState(i, i.state, null),
      Ji(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === jd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ld(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = It(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, g, x) {
    return p === null || p.tag !== 6
      ? ((p = Ts(g, m.mode, x)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function a(m, p, g, x) {
    var S = g.type;
    return S === yn
      ? c(m, p, g.props.children, x, g.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === xt &&
            Zu(S) === p.type))
      ? ((x = i(p, g.props)), (x.ref = sr(m, p, g)), (x.return = m), x)
      : ((x = bi(g.type, g.key, g.props, null, m.mode, x)),
        (x.ref = sr(m, p, g)),
        (x.return = m),
        x);
  }
  function u(m, p, g, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Is(g, m.mode, x)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, x, S) {
    return p === null || p.tag !== 7
      ? ((p = Zt(g, m.mode, x, S)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ts("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ii:
          return (
            (g = bi(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = sr(m, null, p)),
            (g.return = m),
            g
          );
        case gn:
          return (p = Is(p, m.mode, g)), (p.return = m), p;
        case xt:
          var x = p._init;
          return d(m, x(p._payload), g);
      }
      if (fr(p) || tr(p))
        return (p = Zt(p, m.mode, g, null)), (p.return = m), p;
      mi(m, p);
    }
    return null;
  }
  function f(m, p, g, x) {
    var S = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : l(m, p, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ii:
          return g.key === S ? a(m, p, g, x) : null;
        case gn:
          return g.key === S ? u(m, p, g, x) : null;
        case xt:
          return (S = g._init), f(m, p, S(g._payload), x);
      }
      if (fr(g) || tr(g)) return S !== null ? null : c(m, p, g, x, null);
      mi(m, g);
    }
    return null;
  }
  function y(m, p, g, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(g) || null), l(p, m, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ii:
          return (m = m.get(x.key === null ? g : x.key) || null), a(p, m, x, S);
        case gn:
          return (m = m.get(x.key === null ? g : x.key) || null), u(p, m, x, S);
        case xt:
          var j = x._init;
          return y(m, p, g, j(x._payload), S);
      }
      if (fr(x) || tr(x)) return (m = m.get(g) || null), c(p, m, x, S, null);
      mi(p, x);
    }
    return null;
  }
  function v(m, p, g, x) {
    for (
      var S = null, j = null, N = p, L = (p = 0), T = null;
      N !== null && L < g.length;
      L++
    ) {
      N.index > L ? ((T = N), (N = null)) : (T = N.sibling);
      var _ = f(m, N, g[L], x);
      if (_ === null) {
        N === null && (N = T);
        break;
      }
      e && N && _.alternate === null && t(m, N),
        (p = o(_, p, L)),
        j === null ? (S = _) : (j.sibling = _),
        (j = _),
        (N = T);
    }
    if (L === g.length) return n(m, N), B && Kt(m, L), S;
    if (N === null) {
      for (; L < g.length; L++)
        (N = d(m, g[L], x)),
          N !== null &&
            ((p = o(N, p, L)), j === null ? (S = N) : (j.sibling = N), (j = N));
      return B && Kt(m, L), S;
    }
    for (N = r(m, N); L < g.length; L++)
      (T = y(N, m, L, g[L], x)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? L : T.key),
          (p = o(T, p, L)),
          j === null ? (S = T) : (j.sibling = T),
          (j = T));
    return (
      e &&
        N.forEach(function (D) {
          return t(m, D);
        }),
      B && Kt(m, L),
      S
    );
  }
  function w(m, p, g, x) {
    var S = tr(g);
    if (typeof S != "function") throw Error(E(150));
    if (((g = S.call(g)), g == null)) throw Error(E(151));
    for (
      var j = (S = null), N = p, L = (p = 0), T = null, _ = g.next();
      N !== null && !_.done;
      L++, _ = g.next()
    ) {
      N.index > L ? ((T = N), (N = null)) : (T = N.sibling);
      var D = f(m, N, _.value, x);
      if (D === null) {
        N === null && (N = T);
        break;
      }
      e && N && D.alternate === null && t(m, N),
        (p = o(D, p, L)),
        j === null ? (S = D) : (j.sibling = D),
        (j = D),
        (N = T);
    }
    if (_.done) return n(m, N), B && Kt(m, L), S;
    if (N === null) {
      for (; !_.done; L++, _ = g.next())
        (_ = d(m, _.value, x)),
          _ !== null &&
            ((p = o(_, p, L)), j === null ? (S = _) : (j.sibling = _), (j = _));
      return B && Kt(m, L), S;
    }
    for (N = r(m, N); !_.done; L++, _ = g.next())
      (_ = y(N, m, L, _.value, x)),
        _ !== null &&
          (e && _.alternate !== null && N.delete(_.key === null ? L : _.key),
          (p = o(_, p, L)),
          j === null ? (S = _) : (j.sibling = _),
          (j = _));
    return (
      e &&
        N.forEach(function (He) {
          return t(m, He);
        }),
      B && Kt(m, L),
      S
    );
  }
  function k(m, p, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === yn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ii:
          e: {
            for (var S = g.key, j = p; j !== null; ) {
              if (j.key === S) {
                if (((S = g.type), S === yn)) {
                  if (j.tag === 7) {
                    n(m, j.sibling),
                      (p = i(j, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  j.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === xt &&
                    Zu(S) === j.type)
                ) {
                  n(m, j.sibling),
                    (p = i(j, g.props)),
                    (p.ref = sr(m, j, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            g.type === yn
              ? ((p = Zt(g.props.children, m.mode, x, g.key)),
                (p.return = m),
                (m = p))
              : ((x = bi(g.type, g.key, g.props, null, m.mode, x)),
                (x.ref = sr(m, p, g)),
                (x.return = m),
                (m = x));
          }
          return s(m);
        case gn:
          e: {
            for (j = g.key; p !== null; ) {
              if (p.key === j)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Is(g, m.mode, x)), (p.return = m), (m = p);
          }
          return s(m);
        case xt:
          return (j = g._init), k(m, p, j(g._payload), x);
      }
      if (fr(g)) return v(m, p, g, x);
      if (tr(g)) return w(m, p, g, x);
      mi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Ts(g, m.mode, x)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return k;
}
var Vn = Ld(!0),
  Od = Ld(!1),
  qr = {},
  ot = Ut(qr),
  Mr = Ut(qr),
  zr = Ut(qr);
function Xt(e) {
  if (e === qr) throw Error(E(174));
  return e;
}
function Ca(e, t) {
  switch ((A(zr, t), A(Mr, e), A(ot, qr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nl(t, e));
  }
  V(ot), A(ot, t);
}
function Hn() {
  V(ot), V(Mr), V(zr);
}
function _d(e) {
  Xt(zr.current);
  var t = Xt(ot.current),
    n = nl(t, e.type);
  t !== n && (A(Mr, e), A(ot, n));
}
function Ea(e) {
  Mr.current === e && (V(ot), V(Mr));
}
var W = Ut(0);
function Yi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ls = [];
function Na() {
  for (var e = 0; e < Ls.length; e++)
    Ls[e]._workInProgressVersionPrimary = null;
  Ls.length = 0;
}
var Pi = gt.ReactCurrentDispatcher,
  Os = gt.ReactCurrentBatchConfig,
  nn = 0,
  K = null,
  Z = null,
  ne = null,
  Xi = !1,
  xr = !1,
  Fr = 0,
  cg = 0;
function ce() {
  throw Error(E(321));
}
function ja(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Pa(e, t, n, r, i, o) {
  if (
    ((nn = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pi.current = e === null || e.memoizedState === null ? hg : mg),
    (e = n(r, i)),
    xr)
  ) {
    o = 0;
    do {
      if (((xr = !1), (Fr = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (ne = Z = null),
        (t.updateQueue = null),
        (Pi.current = gg),
        (e = n(r, i));
    } while (xr);
  }
  if (
    ((Pi.current = qi),
    (t = Z !== null && Z.next !== null),
    (nn = 0),
    (ne = Z = K = null),
    (Xi = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function La() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Ue() {
  if (Z === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ne === null ? K.memoizedState : ne.next;
  if (t !== null) (ne = t), (Z = e);
  else {
    if (e === null) throw Error(E(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _s(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = Z,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((nn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (K.lanes |= c),
          (rn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      qe(r, t.memoizedState) || (Se = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (K.lanes |= o), (rn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $s(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    qe(o, t.memoizedState) || (Se = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function $d() {}
function bd(e, t) {
  var n = K,
    r = Ue(),
    i = t(),
    o = !qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Se = !0)),
    (r = r.queue),
    Oa(Id.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ar(9, Td.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(E(349));
    nn & 30 || Rd(n, t, i);
  }
  return i;
}
function Rd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Td(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Md(t) && zd(e);
}
function Id(e, t, n) {
  return n(function () {
    Md(t) && zd(e);
  });
}
function Md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function zd(e) {
  var t = ht(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function ec(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pg.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fd() {
  return Ue().memoizedState;
}
function Li(e, t, n, r) {
  var i = tt();
  (K.flags |= e),
    (i.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var s = Z.memoizedState;
    if (((o = s.destroy), r !== null && ja(r, s.deps))) {
      i.memoizedState = Ar(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Ar(1 | t, n, o, r));
}
function tc(e, t) {
  return Li(8390656, 8, e, t);
}
function Oa(e, t) {
  return Oo(2048, 8, e, t);
}
function Dd(e, t) {
  return Oo(4, 2, e, t);
}
function Ad(e, t) {
  return Oo(4, 4, e, t);
}
function Ud(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, Ud.bind(null, t, e), n)
  );
}
function _a() {}
function Hd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ja(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Bd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ja(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wd(e, t, n) {
  return nn & 21
    ? (qe(n, t) || ((n = Gf()), (K.lanes |= n), (rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Se = !0)), (e.memoizedState = n));
}
function fg(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Os.transition;
  Os.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Os.transition = r);
  }
}
function Kd() {
  return Ue().memoizedState;
}
function dg(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qd(e))
  )
    Gd(t, n);
  else if (((n = Ed(e, t, n, r)), n !== null)) {
    var i = ye();
    Ye(n, e, r, i), Jd(n, t, r);
  }
}
function pg(e, t, n) {
  var r = Tt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qd(e)) Gd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), qe(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Sa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ed(e, t, i, r)),
      n !== null && ((i = ye()), Ye(n, e, r, i), Jd(n, t, r));
  }
}
function Qd(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Gd(e, t) {
  xr = Xi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), la(e, n);
  }
}
var qi = {
    readContext: Ae,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  hg = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: tc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Li(4194308, 4, Ud.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Li(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Li(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = dg.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ec,
    useDebugValue: _a,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = ec(!1),
        t = e[0];
      return (e = fg.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = tt();
      if (B) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(E(349));
        nn & 30 || Rd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        tc(Id.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ar(9, Td.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = re.identifierPrefix;
      if (B) {
        var n = ct,
          r = ut;
        (n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mg = {
    readContext: Ae,
    useCallback: Hd,
    useContext: Ae,
    useEffect: Oa,
    useImperativeHandle: Vd,
    useInsertionEffect: Dd,
    useLayoutEffect: Ad,
    useMemo: Bd,
    useReducer: _s,
    useRef: Fd,
    useState: function () {
      return _s(Dr);
    },
    useDebugValue: _a,
    useDeferredValue: function (e) {
      var t = Ue();
      return Wd(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = _s(Dr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: $d,
    useSyncExternalStore: bd,
    useId: Kd,
    unstable_isNewReconciler: !1,
  },
  gg = {
    readContext: Ae,
    useCallback: Hd,
    useContext: Ae,
    useEffect: Oa,
    useImperativeHandle: Vd,
    useInsertionEffect: Dd,
    useLayoutEffect: Ad,
    useMemo: Bd,
    useReducer: $s,
    useRef: Fd,
    useState: function () {
      return $s(Dr);
    },
    useDebugValue: _a,
    useDeferredValue: function (e) {
      var t = Ue();
      return Z === null ? (t.memoizedState = e) : Wd(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = $s(Dr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: $d,
    useSyncExternalStore: bd,
    useId: Kd,
    unstable_isNewReconciler: !1,
  };
function Bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function bs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yg = typeof WeakMap == "function" ? WeakMap : Map;
function Yd(e, t, n) {
  (n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      eo || ((eo = !0), (Il = r)), Nl(e, t);
    }),
    n
  );
}
function Xd(e, t, n) {
  (n = ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Nl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Nl(e, t),
          typeof r != "function" &&
            (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function nc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = $g.bind(null, e, t, n)), t.then(e, e));
}
function rc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ic(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ft(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vg = gt.ReactCurrentOwner,
  Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Od(t, null, n, r) : Vn(t, e.child, n, r);
}
function oc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    bn(t, i),
    (r = Pa(e, t, n, r, o, i)),
    (n = La()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : (B && n && ma(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function sc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Fa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qd(e, t, o, r, i))
      : ((e = bi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(s, r) && e.ref === t.ref)
    )
      return mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (br(o, r) && e.ref === t.ref)
      if (((Se = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Se = !0);
      else return (t.lanes = e.lanes), mt(e, t, i);
  }
  return jl(e, t, n, r, i);
}
function Zd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(Pn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(Pn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(Pn, je),
        (je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(Pn, je),
      (je |= r);
  return ge(e, t, i, n), t.child;
}
function ep(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function jl(e, t, n, r, i) {
  var o = Ce(n) ? en : he.current;
  return (
    (o = An(t, o)),
    bn(t, i),
    (n = Pa(e, t, n, r, o, i)),
    (r = La()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : (B && r && ma(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function lc(e, t, n, r, i) {
  if (Ce(n)) {
    var o = !0;
    Bi(t);
  } else o = !1;
  if ((bn(t, i), t.stateNode === null))
    Oi(e, t), Pd(t, n, r), El(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ae(u))
      : ((u = Ce(n) ? en : he.current), (u = An(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && qu(t, s, r, u)),
      (St = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ji(t, r, s, i),
      (a = t.memoizedState),
      l !== r || f !== a || ke.current || St
        ? (typeof c == "function" && (Cl(t, n, c, r), (a = t.memoizedState)),
          (l = St || Xu(t, n, l, r, f, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Nd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : We(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ae(a))
        : ((a = Ce(n) ? en : he.current), (a = An(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && qu(t, s, r, a)),
      (St = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ji(t, r, s, i);
    var v = t.memoizedState;
    l !== d || f !== v || ke.current || St
      ? (typeof y == "function" && (Cl(t, n, y, r), (v = t.memoizedState)),
        (u = St || Xu(t, n, u, r, f, v, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pl(e, t, n, r, o, i);
}
function Pl(e, t, n, r, i, o) {
  ep(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ku(t, n, !1), mt(e, t, o);
  (r = t.stateNode), (vg.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Vn(t, e.child, null, o)), (t.child = Vn(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && Ku(t, n, !0),
    t.child
  );
}
function tp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wu(e, t.context, !1),
    Ca(e, t.containerInfo);
}
function ac(e, t, n, r, i) {
  return Un(), ya(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function np(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    A(W, i & 1),
    e === null)
  )
    return (
      Sl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = bo(s, r, 0, null)),
              (e = Zt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ol(n)),
              (t.memoizedState = Ll),
              e)
            : $a(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return wg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = It(l, o)) : ((o = Zt(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ol(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ll),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $a(e, t) {
  return (
    (t = bo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gi(e, t, n, r) {
  return (
    r !== null && ya(r),
    Vn(t, e.child, null, n),
    (e = $a(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bs(Error(E(422)))), gi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = bo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Zt(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Vn(t, e.child, null, s),
        (t.child.memoizedState = Ol(s)),
        (t.memoizedState = Ll),
        o);
  if (!(t.mode & 1)) return gi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(E(419))), (r = bs(o, r, void 0)), gi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Se || l)) {
    if (((r = re), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ht(e, i), Ye(r, e, i, -1));
    }
    return za(), (r = bs(Error(E(421)))), gi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Pe = $t(i.nextSibling)),
      (Oe = t),
      (B = !0),
      (Qe = null),
      e !== null &&
        ((Me[ze++] = ut),
        (Me[ze++] = ct),
        (Me[ze++] = tn),
        (ut = e.id),
        (ct = e.overflow),
        (tn = t)),
      (t = $a(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), kl(e.return, t, n);
}
function Rs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function rp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uc(e, n, t);
        else if (e.tag === 19) uc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Yi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Rs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Yi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Rs(t, !0, n, null, o);
        break;
      case "together":
        Rs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xg(e, t, n) {
  switch (t.tag) {
    case 3:
      tp(t), Un();
      break;
    case 5:
      _d(t);
      break;
    case 1:
      Ce(t.type) && Bi(t);
      break;
    case 4:
      Ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      A(Qi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? np(e, t, n)
          : (A(W, W.current & 1),
            (e = mt(e, t, n)),
            e !== null ? e.sibling : null);
      A(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        A(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zd(e, t, n);
  }
  return mt(e, t, n);
}
var ip, _l, op, sp;
ip = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
_l = function () {};
op = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Xt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (i = qs(e, i)), (r = qs(e, r)), (o = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = tl(e, i)), (r = tl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vi);
    }
    rl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Nr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Nr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
sp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Sg(e, t, n) {
  var r = t.pendingProps;
  switch ((ga(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return Ce(t.type) && Hi(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Hn(),
        V(ke),
        V(he),
        Na(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (Fl(Qe), (Qe = null)))),
        _l(e, t),
        fe(t),
        null
      );
    case 5:
      Ea(t);
      var i = Xt(zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        op(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return fe(t), null;
        }
        if (((e = Xt(ot.current)), hi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < pr.length; i++) U(pr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              vu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              xu(r, o), U("invalid", r);
          }
          rl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Nr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              oi(r), wu(r, o, !0);
              break;
            case "textarea":
              oi(r), Su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Rf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[Ir] = r),
            ip(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = il(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < pr.length; i++) U(pr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                vu(e, r), (i = qs(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                xu(e, r), (i = tl(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            rl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Mf(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Tf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && jr(e, a)
                    : typeof a == "number" && jr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Nr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && U("scroll", e)
                      : a != null && ta(e, o, a, s));
              }
            switch (n) {
              case "input":
                oi(e), wu(e, r, !1);
                break;
              case "textarea":
                oi(e), Su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Vi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) sp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Xt(zr.current)), Xt(ot.current), hi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                pi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (V(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && Pe !== null && t.mode & 1 && !(t.flags & 128))
          Cd(), Un(), (t.flags |= 98560), (o = !1);
        else if (((o = hi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[nt] = t;
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (o = !1);
        } else Qe !== null && (Fl(Qe), (Qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ee === 0 && (ee = 3) : za())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        Hn(), _l(e, t), e === null && Rr(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return xa(t.type._context), fe(t), null;
    case 17:
      return Ce(t.type) && Hi(), fe(t), null;
    case 19:
      if ((V(W), (o = t.memoizedState), o === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) lr(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Yi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    lr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > Wn &&
            ((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !B)
            )
              return fe(t), null;
          } else
            2 * Y() - o.renderingStartTime > Wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = W.current),
          A(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        Ma(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function kg(e, t) {
  switch ((ga(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && Hi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hn(),
        V(ke),
        V(he),
        Na(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ea(t), null;
    case 13:
      if ((V(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(W), null;
    case 4:
      return Hn(), null;
    case 10:
      return xa(t.type._context), null;
    case 22:
    case 23:
      return Ma(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yi = !1,
  pe = !1,
  Cg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function $l(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var cc = !1;
function Eg(e, t) {
  if (((hl = Di), (e = cd()), ha(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (l = s),
                f === o && ++c === r && (a = s),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ml = { focusedElem: e, selectionRange: n }, Di = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    k = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : We(t.type, w),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (x) {
          G(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (v = cc), (cc = !1), v;
}
function Sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && $l(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function _o(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Ir], delete t[vl], delete t[sg], delete t[lg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ap(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ap(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), (e = e.sibling);
}
var se = null,
  Ke = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) up(e, t, n), (n = n.sibling);
}
function up(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || jn(n, t);
    case 6:
      var r = se,
        i = Ke;
      (se = null),
        wt(e, t, n),
        (se = r),
        (Ke = i),
        se !== null &&
          (Ke
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Ke
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? js(e.parentNode, n)
              : e.nodeType === 1 && js(e, n),
            _r(e))
          : js(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (i = Ke),
        (se = n.stateNode.containerInfo),
        (Ke = !0),
        wt(e, t, n),
        (se = r),
        (Ke = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && $l(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          G(n, t, l);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), wt(e, t, n), (pe = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cg()),
      t.forEach(function (r) {
        var i = Rg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (se = l.stateNode), (Ke = !1);
              break e;
            case 3:
              (se = l.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (se = l.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          l = l.return;
        }
        if (se === null) throw Error(E(160));
        up(o, s, i), (se = null), (Ke = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        G(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cp(t, e), (t = t.sibling);
}
function cp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Be(t, e), Ze(e), r & 4)) {
        try {
          Sr(3, e, e.return), _o(3, e);
        } catch (w) {
          G(e, e.return, w);
        }
        try {
          Sr(5, e, e.return);
        } catch (w) {
          G(e, e.return, w);
        }
      }
      break;
    case 1:
      Be(t, e), Ze(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (Be(t, e),
        Ze(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          jr(i, "");
        } catch (w) {
          G(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && $f(i, o),
              il(l, s);
            var u = il(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? Mf(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Tf(i, d)
                : c === "children"
                ? jr(i, d)
                : ta(i, c, d, u);
            }
            switch (l) {
              case "input":
                Zs(i, o);
                break;
              case "textarea":
                bf(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Ln(i, !!o.multiple, y, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ln(i, !!o.multiple, o.defaultValue, !0)
                      : Ln(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ir] = o;
          } catch (w) {
            G(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Be(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          G(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Be(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _r(t.containerInfo);
        } catch (w) {
          G(e, e.return, w);
        }
      break;
    case 4:
      Be(t, e), Ze(e);
      break;
    case 13:
      Be(t, e),
        Ze(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ta = Y())),
        r & 4 && dc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Be(t, e), (pe = u)) : Be(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((f = O), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Sr(4, f, f.return);
                  break;
                case 1:
                  jn(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      G(r, n, w);
                    }
                  }
                  break;
                case 5:
                  jn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    hc(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (O = y)) : hc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = If("display", s)));
              } catch (w) {
                G(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                G(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Be(t, e), Ze(e), r & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      Be(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ap(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (jr(i, ""), (r.flags &= -33));
          var o = fc(e);
          Tl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = fc(e);
          Rl(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ng(e, t, n) {
  (O = e), fp(e);
}
function fp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || yi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = yi;
        var u = pe;
        if (((yi = s), (pe = a) && !u))
          for (O = i; O !== null; )
            (s = O),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? mc(i)
                : a !== null
                ? ((a.return = s), (O = a))
                : mc(i);
        for (; o !== null; ) (O = o), fp(o), (o = o.sibling);
        (O = i), (yi = l), (pe = u);
      }
      pc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : pc(e);
  }
}
function pc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || _o(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Yu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && _r(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        pe || (t.flags & 512 && bl(t));
      } catch (f) {
        G(t, t.return, f);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function hc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function mc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _o(4, t);
          } catch (a) {
            G(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              G(t, i, a);
            }
          }
          var o = t.return;
          try {
            bl(t);
          } catch (a) {
            G(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bl(t);
          } catch (a) {
            G(t, s, a);
          }
      }
    } catch (a) {
      G(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (O = l);
      break;
    }
    O = t.return;
  }
}
var jg = Math.ceil,
  Zi = gt.ReactCurrentDispatcher,
  ba = gt.ReactCurrentOwner,
  De = gt.ReactCurrentBatchConfig,
  I = 0,
  re = null,
  X = null,
  le = 0,
  je = 0,
  Pn = Ut(0),
  ee = 0,
  Ur = null,
  rn = 0,
  $o = 0,
  Ra = 0,
  kr = null,
  xe = null,
  Ta = 0,
  Wn = 1 / 0,
  lt = null,
  eo = !1,
  Il = null,
  Rt = null,
  vi = !1,
  jt = null,
  to = 0,
  Cr = 0,
  Ml = null,
  _i = -1,
  $i = 0;
function ye() {
  return I & 6 ? Y() : _i !== -1 ? _i : (_i = Y());
}
function Tt(e) {
  return e.mode & 1
    ? I & 2 && le !== 0
      ? le & -le
      : ug.transition !== null
      ? ($i === 0 && ($i = Gf()), $i)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : td(e.type))),
        e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (Ml = null), Error(E(185)));
  Jr(e, n, r),
    (!(I & 2) || e !== re) &&
      (e === re && (!(I & 2) && ($o |= n), ee === 4 && Ct(e, le)),
      Ee(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Wn = Y() + 500), Po && Vt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  um(e, t);
  var r = Fi(e, e === re ? le : 0);
  if (r === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? ag(gc.bind(null, e)) : xd(gc.bind(null, e)),
        ig(function () {
          !(I & 6) && Vt();
        }),
        (n = null);
    else {
      switch (Jf(r)) {
        case 1:
          n = sa;
          break;
        case 4:
          n = Kf;
          break;
        case 16:
          n = zi;
          break;
        case 536870912:
          n = Qf;
          break;
        default:
          n = zi;
      }
      n = wp(n, dp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dp(e, t) {
  if (((_i = -1), ($i = 0), I & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = Fi(e, e === re ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = hp();
    (re !== e || le !== t) && ((lt = null), (Wn = Y() + 500), qt(e, t));
    do
      try {
        Og();
        break;
      } catch (l) {
        pp(e, l);
      }
    while (1);
    wa(),
      (Zi.current = o),
      (I = i),
      X !== null ? (t = 0) : ((re = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ul(e)), i !== 0 && ((r = i), (t = zl(e, i)))), t === 1)
    )
      throw ((n = Ur), qt(e, 0), Ct(e, r), Ee(e, Y()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Pg(i) &&
          ((t = no(e, r)),
          t === 2 && ((o = ul(e)), o !== 0 && ((r = o), (t = zl(e, o)))),
          t === 1))
      )
        throw ((n = Ur), qt(e, 0), Ct(e, r), Ee(e, Y()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Qt(e, xe, lt);
          break;
        case 3:
          if (
            (Ct(e, r), (r & 130023424) === r && ((t = Ta + 500 - Y()), 10 < t))
          ) {
            if (Fi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = yl(Qt.bind(null, e, xe, lt), t);
            break;
          }
          Qt(e, xe, lt);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Je(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * jg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yl(Qt.bind(null, e, xe, lt), r);
            break;
          }
          Qt(e, xe, lt);
          break;
        case 5:
          Qt(e, xe, lt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ee(e, Y()), e.callbackNode === n ? dp.bind(null, e) : null;
}
function zl(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256),
    (e = no(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && Fl(t)),
    e
  );
}
function Fl(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function Pg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ct(e, t) {
  for (
    t &= ~Ra,
      t &= ~$o,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gc(e) {
  if (I & 6) throw Error(E(327));
  Rn();
  var t = Fi(e, 0);
  if (!(t & 1)) return Ee(e, Y()), null;
  var n = no(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ul(e);
    r !== 0 && ((t = r), (n = zl(e, r)));
  }
  if (n === 1) throw ((n = Ur), qt(e, 0), Ct(e, t), Ee(e, Y()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, xe, lt),
    Ee(e, Y()),
    null
  );
}
function Ia(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Wn = Y() + 500), Po && Vt());
  }
}
function on(e) {
  jt !== null && jt.tag === 0 && !(I & 6) && Rn();
  var t = I;
  I |= 1;
  var n = De.transition,
    r = M;
  try {
    if (((De.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (De.transition = n), (I = t), !(I & 6) && Vt();
  }
}
function Ma() {
  (je = Pn.current), V(Pn);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rg(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((ga(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hi();
          break;
        case 3:
          Hn(), V(ke), V(he), Na();
          break;
        case 5:
          Ea(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          V(W);
          break;
        case 19:
          V(W);
          break;
        case 10:
          xa(r.type._context);
          break;
        case 22:
        case 23:
          Ma();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (X = e = It(e.current, null)),
    (le = je = t),
    (ee = 0),
    (Ur = null),
    (Ra = $o = rn = 0),
    (xe = kr = null),
    Yt !== null)
  ) {
    for (t = 0; t < Yt.length; t++)
      if (((n = Yt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Yt = null;
  }
  return e;
}
function pp(e, t) {
  do {
    var n = X;
    try {
      if ((wa(), (Pi.current = qi), Xi)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xi = !1;
      }
      if (
        ((nn = 0),
        (ne = Z = K = null),
        (xr = !1),
        (Fr = 0),
        (ba.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Ur = t), (X = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = le),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = rc(s);
          if (y !== null) {
            (y.flags &= -257),
              ic(y, s, l, o, t),
              y.mode & 1 && nc(o, u, t),
              (t = y),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              nc(o, u, t), za();
              break e;
            }
            a = Error(E(426));
          }
        } else if (B && l.mode & 1) {
          var k = rc(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              ic(k, s, l, o, t),
              ya(Bn(a, l));
            break e;
          }
        }
        (o = a = Bn(a, l)),
          ee !== 4 && (ee = 2),
          kr === null ? (kr = [o]) : kr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Yd(o, a, t);
              Ju(o, m);
              break e;
            case 1:
              l = a;
              var p = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Xd(o, l, t);
                Ju(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      gp(n);
    } catch (S) {
      (t = S), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hp() {
  var e = Zi.current;
  return (Zi.current = qi), e === null ? qi : e;
}
function za() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(rn & 268435455) && !($o & 268435455)) || Ct(re, le);
}
function no(e, t) {
  var n = I;
  I |= 2;
  var r = hp();
  (re !== e || le !== t) && ((lt = null), qt(e, t));
  do
    try {
      Lg();
      break;
    } catch (i) {
      pp(e, i);
    }
  while (1);
  if ((wa(), (I = n), (Zi.current = r), X !== null)) throw Error(E(261));
  return (re = null), (le = 0), ee;
}
function Lg() {
  for (; X !== null; ) mp(X);
}
function Og() {
  for (; X !== null && !em(); ) mp(X);
}
function mp(e) {
  var t = vp(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? gp(e) : (X = t),
    (ba.current = null);
}
function gp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = kg(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (X = null);
        return;
      }
    } else if (((n = Sg(n, t, je)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Qt(e, t, n) {
  var r = M,
    i = De.transition;
  try {
    (De.transition = null), (M = 1), _g(e, t, n, r);
  } finally {
    (De.transition = i), (M = r);
  }
  return null;
}
function _g(e, t, n, r) {
  do Rn();
  while (jt !== null);
  if (I & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (cm(e, o),
    e === re && ((X = re = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vi ||
      ((vi = !0),
      wp(zi, function () {
        return Rn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = De.transition), (De.transition = null);
    var s = M;
    M = 1;
    var l = I;
    (I |= 4),
      (ba.current = null),
      Eg(e, n),
      cp(n, e),
      Ym(ml),
      (Di = !!hl),
      (ml = hl = null),
      (e.current = n),
      Ng(n),
      tm(),
      (I = l),
      (M = s),
      (De.transition = o);
  } else e.current = n;
  if (
    (vi && ((vi = !1), (jt = e), (to = i)),
    (o = e.pendingLanes),
    o === 0 && (Rt = null),
    im(n.stateNode),
    Ee(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (eo) throw ((eo = !1), (e = Il), (Il = null), e);
  return (
    to & 1 && e.tag !== 0 && Rn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ml ? Cr++ : ((Cr = 0), (Ml = e))) : (Cr = 0),
    Vt(),
    null
  );
}
function Rn() {
  if (jt !== null) {
    var e = Jf(to),
      t = De.transition,
      n = M;
    try {
      if (((De.transition = null), (M = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (to = 0), I & 6)) throw Error(E(331));
        var i = I;
        for (I |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child;
          if (O.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sr(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var f = c.sibling,
                        y = c.return;
                      if ((lp(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (O = f);
                        break;
                      }
                      O = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (O = s);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Sr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (O = m);
                break e;
              }
              O = o.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          s = O;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (O = g);
          else
            e: for (s = p; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(9, l);
                  }
                } catch (S) {
                  G(l, l.return, S);
                }
              if (l === s) {
                O = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (O = x);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((I = i), Vt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (De.transition = t);
    }
  }
  return !1;
}
function yc(e, t, n) {
  (t = Bn(n, t)),
    (t = Yd(e, t, 1)),
    (e = bt(e, t, 1)),
    (t = ye()),
    e !== null && (Jr(e, 1, t), Ee(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) yc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(r)))
        ) {
          (e = Bn(n, e)),
            (e = Xd(t, e, 1)),
            (t = bt(t, e, 1)),
            (e = ye()),
            t !== null && (Jr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $g(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > Y() - Ta)
        ? qt(e, 0)
        : (Ra |= n)),
    Ee(e, t);
}
function yp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = ye();
  (e = ht(e, t)), e !== null && (Jr(e, t, n), Ee(e, n));
}
function bg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yp(e, n);
}
function Rg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), yp(e, n);
}
var vp;
vp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Se = !1), xg(e, t, n);
      Se = !!(e.flags & 131072);
    }
  else (Se = !1), B && t.flags & 1048576 && Sd(t, Ki, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Oi(e, t), (e = t.pendingProps);
      var i = An(t, he.current);
      bn(t, n), (i = Pa(null, t, r, e, i, n));
      var o = La();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((o = !0), Bi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ka(t),
            (i.updater = Lo),
            (t.stateNode = i),
            (i._reactInternals = t),
            El(t, r, e, n),
            (t = Pl(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && ma(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Oi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ig(r)),
          (e = We(r, e)),
          i)
        ) {
          case 0:
            t = jl(null, t, r, e, n);
            break e;
          case 1:
            t = lc(null, t, r, e, n);
            break e;
          case 11:
            t = oc(null, t, r, e, n);
            break e;
          case 14:
            t = sc(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        jl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        lc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((tp(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Nd(e, t),
          Ji(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Bn(Error(E(423)), t)), (t = ac(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Bn(Error(E(424)), t)), (t = ac(e, t, r, n, i));
            break e;
          } else
            for (
              Pe = $t(t.stateNode.containerInfo.firstChild),
                Oe = t,
                B = !0,
                Qe = null,
                n = Od(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Un(), r === i)) {
            t = mt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _d(t),
        e === null && Sl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        gl(r, i) ? (s = null) : o !== null && gl(r, o) && (t.flags |= 32),
        ep(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Sl(t), null;
    case 13:
      return np(e, t, n);
    case 4:
      return (
        Ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        oc(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          A(Qi, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (qe(o.value, s)) {
            if (o.children === i.children && !ke.current) {
              t = mt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = ft(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      kl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(E(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  kl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        bn(t, n),
        (i = Ae(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = We(r, t.pendingProps)),
        (i = We(r.type, i)),
        sc(e, t, r, i, n)
      );
    case 15:
      return qd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        Oi(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), Bi(t)) : (e = !1),
        bn(t, n),
        Pd(t, r, i),
        El(t, r, i, n),
        Pl(null, t, r, !0, e, n)
      );
    case 19:
      return rp(e, t, n);
    case 22:
      return Zd(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function wp(e, t) {
  return Wf(e, t);
}
function Tg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new Tg(e, t, n, r);
}
function Fa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ig(e) {
  if (typeof e == "function") return Fa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ra)) return 11;
    if (e === ia) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function bi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Fa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case yn:
        return Zt(n.children, i, o, t);
      case na:
        (s = 8), (i |= 8);
        break;
      case Gs:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = Gs), (e.lanes = o), e
        );
      case Js:
        return (e = Fe(13, n, t, i)), (e.elementType = Js), (e.lanes = o), e;
      case Ys:
        return (e = Fe(19, n, t, i)), (e.elementType = Ys), (e.lanes = o), e;
      case Lf:
        return bo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jf:
              s = 10;
              break e;
            case Pf:
              s = 9;
              break e;
            case ra:
              s = 11;
              break e;
            case ia:
              s = 14;
              break e;
            case xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Zt(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function bo(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Lf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ts(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function Is(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ms(0)),
    (this.expirationTimes = ms(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ms(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Da(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Mg(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Fe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ka(o),
    e
  );
}
function zg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xp(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return wd(e, n, t);
  }
  return t;
}
function Sp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Da(n, r, !0, e, i, o, s, l, a)),
    (e.context = xp(null)),
    (n = e.current),
    (r = ye()),
    (i = Tt(n)),
    (o = ft(r, i)),
    (o.callback = t ?? null),
    bt(n, o, i),
    (e.current.lanes = i),
    Jr(e, i, r),
    Ee(e, r),
    e
  );
}
function Ro(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = Tt(i);
  return (
    (n = xp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ft(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(i, t, s)),
    e !== null && (Ye(e, i, s, o), ji(e, i, s)),
    s
  );
}
function ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Aa(e, t) {
  vc(e, t), (e = e.alternate) && vc(e, t);
}
function Fg() {
  return null;
}
var kp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ua(e) {
  this._internalRoot = e;
}
To.prototype.render = Ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ro(e, t, null, null);
};
To.prototype.unmount = Ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function () {
      Ro(null, e, null, null);
    }),
      (t[pt] = null);
  }
};
function To(e) {
  this._internalRoot = e;
}
To.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && ed(e);
  }
};
function Va(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wc() {}
function Dg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ro(s);
        o.call(u);
      };
    }
    var s = Sp(t, r, e, 0, null, !1, !1, "", wc);
    return (
      (e._reactRootContainer = s),
      (e[pt] = s.current),
      Rr(e.nodeType === 8 ? e.parentNode : e),
      on(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ro(a);
      l.call(u);
    };
  }
  var a = Da(e, 0, !1, null, null, !1, !1, "", wc);
  return (
    (e._reactRootContainer = a),
    (e[pt] = a.current),
    Rr(e.nodeType === 8 ? e.parentNode : e),
    on(function () {
      Ro(t, a, n, r);
    }),
    a
  );
}
function Mo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ro(s);
        l.call(a);
      };
    }
    Ro(t, s, e, i);
  } else s = Dg(n, t, e, i, r);
  return ro(s);
}
Yf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (la(t, n | 1), Ee(t, Y()), !(I & 6) && ((Wn = Y() + 500), Vt()));
      }
      break;
    case 13:
      on(function () {
        var r = ht(e, 1);
        if (r !== null) {
          var i = ye();
          Ye(r, e, 1, i);
        }
      }),
        Aa(e, 1);
  }
};
aa = function (e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ye(t, e, 134217728, n);
    }
    Aa(e, 134217728);
  }
};
Xf = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ht(e, t);
    if (n !== null) {
      var r = ye();
      Ye(n, e, t, r);
    }
    Aa(e, t);
  }
};
qf = function () {
  return M;
};
Zf = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = jo(r);
            if (!i) throw Error(E(90));
            _f(r), Zs(r, i);
          }
        }
      }
      break;
    case "textarea":
      bf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
  }
};
Df = Ia;
Af = on;
var Ag = { usingClientEntryPoint: !1, Events: [Xr, Sn, jo, zf, Ff, Ia] },
  ar = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ug = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || Fg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      (ko = wi.inject(Ug)), (it = wi);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ag;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(t)) throw Error(E(200));
  return zg(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!Va(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = kp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Da(e, 1, !1, null, null, n, !1, r, i)),
    (e[pt] = t.current),
    Rr(e.nodeType === 8 ? e.parentNode : e),
    new Ua(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Hf(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return on(e);
};
be.hydrate = function (e, t, n) {
  if (!Io(t)) throw Error(E(200));
  return Mo(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!Va(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = kp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Sp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[pt] = t.current),
    Rr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new To(t);
};
be.render = function (e, t, n) {
  if (!Io(t)) throw Error(E(200));
  return Mo(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!Io(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (on(function () {
        Mo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pt] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = Ia;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Io(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Mo(e, t, n, !1, r);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
function Cp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cp);
    } catch (e) {
      console.error(e);
    }
}
Cp(), (Sf.exports = be);
var Ha = Sf.exports,
  xc = Ha;
(Ks.createRoot = xc.createRoot), (Ks.hydrateRoot = xc.hydrateRoot);
var Ep = { exports: {} },
  Np = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kn = C;
function Vg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Hg = typeof Object.is == "function" ? Object.is : Vg,
  Bg = Kn.useState,
  Wg = Kn.useEffect,
  Kg = Kn.useLayoutEffect,
  Qg = Kn.useDebugValue;
function Gg(e, t) {
  var n = t(),
    r = Bg({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    Kg(
      function () {
        (i.value = n), (i.getSnapshot = t), Ms(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    Wg(
      function () {
        return (
          Ms(i) && o({ inst: i }),
          e(function () {
            Ms(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    Qg(n),
    n
  );
}
function Ms(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Hg(e, n);
  } catch {
    return !0;
  }
}
function Jg(e, t) {
  return t();
}
var Yg =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Jg
    : Gg;
Np.useSyncExternalStore =
  Kn.useSyncExternalStore !== void 0 ? Kn.useSyncExternalStore : Yg;
Ep.exports = Np;
var Xg = Ep.exports,
  jp = { exports: {} },
  Pp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zo = C,
  qg = Xg;
function Zg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var e0 = typeof Object.is == "function" ? Object.is : Zg,
  t0 = qg.useSyncExternalStore,
  n0 = zo.useRef,
  r0 = zo.useEffect,
  i0 = zo.useMemo,
  o0 = zo.useDebugValue;
Pp.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = n0(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = i0(
    function () {
      function a(y) {
        if (!u) {
          if (((u = !0), (c = y), (y = r(y)), i !== void 0 && s.hasValue)) {
            var v = s.value;
            if (i(v, y)) return (d = v);
          }
          return (d = y);
        }
        if (((v = d), e0(c, y))) return v;
        var w = r(y);
        return i !== void 0 && i(v, w) ? v : ((c = y), (d = w));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = t0(e, o[0], o[1]);
  return (
    r0(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l]
    ),
    o0(l),
    l
  );
};
jp.exports = Pp;
var s0 = jp.exports;
function l0(e) {
  e();
}
let Lp = l0;
const a0 = (e) => (Lp = e),
  u0 = () => Lp,
  Sc = Symbol.for("react-redux-context"),
  kc = typeof globalThis < "u" ? globalThis : {};
function c0() {
  var e;
  if (!C.createContext) return {};
  const t = (e = kc[Sc]) != null ? e : (kc[Sc] = new Map());
  let n = t.get(C.createContext);
  return n || ((n = C.createContext(null)), t.set(C.createContext, n)), n;
}
const Dt = c0();
function Ba(e = Dt) {
  return function () {
    return C.useContext(e);
  };
}
const Op = Ba(),
  f0 = () => {
    throw new Error("uSES not initialized!");
  };
let _p = f0;
const d0 = (e) => {
    _p = e;
  },
  p0 = (e, t) => e === t;
function h0(e = Dt) {
  const t = e === Dt ? Op : Ba(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = p0,
        stabilityCheck: s = void 0,
        noopCheck: l = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: a,
        subscription: u,
        getServerState: c,
        stabilityCheck: d,
        noopCheck: f,
      } = t();
    C.useRef(!0);
    const y = C.useCallback(
        {
          [r.name](w) {
            return r(w);
          },
        }[r.name],
        [r, d, s]
      ),
      v = _p(u.addNestedSub, a.getState, c || a.getState, y, o);
    return C.useDebugValue(v), v;
  };
}
const Ne = h0();
var $p = { exports: {} },
  z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ie = typeof Symbol == "function" && Symbol.for,
  Wa = ie ? Symbol.for("react.element") : 60103,
  Ka = ie ? Symbol.for("react.portal") : 60106,
  Fo = ie ? Symbol.for("react.fragment") : 60107,
  Do = ie ? Symbol.for("react.strict_mode") : 60108,
  Ao = ie ? Symbol.for("react.profiler") : 60114,
  Uo = ie ? Symbol.for("react.provider") : 60109,
  Vo = ie ? Symbol.for("react.context") : 60110,
  Qa = ie ? Symbol.for("react.async_mode") : 60111,
  Ho = ie ? Symbol.for("react.concurrent_mode") : 60111,
  Bo = ie ? Symbol.for("react.forward_ref") : 60112,
  Wo = ie ? Symbol.for("react.suspense") : 60113,
  m0 = ie ? Symbol.for("react.suspense_list") : 60120,
  Ko = ie ? Symbol.for("react.memo") : 60115,
  Qo = ie ? Symbol.for("react.lazy") : 60116,
  g0 = ie ? Symbol.for("react.block") : 60121,
  y0 = ie ? Symbol.for("react.fundamental") : 60117,
  v0 = ie ? Symbol.for("react.responder") : 60118,
  w0 = ie ? Symbol.for("react.scope") : 60119;
function Te(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wa:
        switch (((e = e.type), e)) {
          case Qa:
          case Ho:
          case Fo:
          case Ao:
          case Do:
          case Wo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Vo:
              case Bo:
              case Qo:
              case Ko:
              case Uo:
                return e;
              default:
                return t;
            }
        }
      case Ka:
        return t;
    }
  }
}
function bp(e) {
  return Te(e) === Ho;
}
z.AsyncMode = Qa;
z.ConcurrentMode = Ho;
z.ContextConsumer = Vo;
z.ContextProvider = Uo;
z.Element = Wa;
z.ForwardRef = Bo;
z.Fragment = Fo;
z.Lazy = Qo;
z.Memo = Ko;
z.Portal = Ka;
z.Profiler = Ao;
z.StrictMode = Do;
z.Suspense = Wo;
z.isAsyncMode = function (e) {
  return bp(e) || Te(e) === Qa;
};
z.isConcurrentMode = bp;
z.isContextConsumer = function (e) {
  return Te(e) === Vo;
};
z.isContextProvider = function (e) {
  return Te(e) === Uo;
};
z.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wa;
};
z.isForwardRef = function (e) {
  return Te(e) === Bo;
};
z.isFragment = function (e) {
  return Te(e) === Fo;
};
z.isLazy = function (e) {
  return Te(e) === Qo;
};
z.isMemo = function (e) {
  return Te(e) === Ko;
};
z.isPortal = function (e) {
  return Te(e) === Ka;
};
z.isProfiler = function (e) {
  return Te(e) === Ao;
};
z.isStrictMode = function (e) {
  return Te(e) === Do;
};
z.isSuspense = function (e) {
  return Te(e) === Wo;
};
z.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Fo ||
    e === Ho ||
    e === Ao ||
    e === Do ||
    e === Wo ||
    e === m0 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Qo ||
        e.$$typeof === Ko ||
        e.$$typeof === Uo ||
        e.$$typeof === Vo ||
        e.$$typeof === Bo ||
        e.$$typeof === y0 ||
        e.$$typeof === v0 ||
        e.$$typeof === w0 ||
        e.$$typeof === g0))
  );
};
z.typeOf = Te;
$p.exports = z;
var x0 = $p.exports,
  Rp = x0,
  S0 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  k0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Tp = {};
Tp[Rp.ForwardRef] = S0;
Tp[Rp.Memo] = k0;
var F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ga = Symbol.for("react.element"),
  Ja = Symbol.for("react.portal"),
  Go = Symbol.for("react.fragment"),
  Jo = Symbol.for("react.strict_mode"),
  Yo = Symbol.for("react.profiler"),
  Xo = Symbol.for("react.provider"),
  qo = Symbol.for("react.context"),
  C0 = Symbol.for("react.server_context"),
  Zo = Symbol.for("react.forward_ref"),
  es = Symbol.for("react.suspense"),
  ts = Symbol.for("react.suspense_list"),
  ns = Symbol.for("react.memo"),
  rs = Symbol.for("react.lazy"),
  E0 = Symbol.for("react.offscreen"),
  Ip;
Ip = Symbol.for("react.module.reference");
function Ve(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ga:
        switch (((e = e.type), e)) {
          case Go:
          case Yo:
          case Jo:
          case es:
          case ts:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case C0:
              case qo:
              case Zo:
              case rs:
              case ns:
              case Xo:
                return e;
              default:
                return t;
            }
        }
      case Ja:
        return t;
    }
  }
}
F.ContextConsumer = qo;
F.ContextProvider = Xo;
F.Element = Ga;
F.ForwardRef = Zo;
F.Fragment = Go;
F.Lazy = rs;
F.Memo = ns;
F.Portal = Ja;
F.Profiler = Yo;
F.StrictMode = Jo;
F.Suspense = es;
F.SuspenseList = ts;
F.isAsyncMode = function () {
  return !1;
};
F.isConcurrentMode = function () {
  return !1;
};
F.isContextConsumer = function (e) {
  return Ve(e) === qo;
};
F.isContextProvider = function (e) {
  return Ve(e) === Xo;
};
F.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ga;
};
F.isForwardRef = function (e) {
  return Ve(e) === Zo;
};
F.isFragment = function (e) {
  return Ve(e) === Go;
};
F.isLazy = function (e) {
  return Ve(e) === rs;
};
F.isMemo = function (e) {
  return Ve(e) === ns;
};
F.isPortal = function (e) {
  return Ve(e) === Ja;
};
F.isProfiler = function (e) {
  return Ve(e) === Yo;
};
F.isStrictMode = function (e) {
  return Ve(e) === Jo;
};
F.isSuspense = function (e) {
  return Ve(e) === es;
};
F.isSuspenseList = function (e) {
  return Ve(e) === ts;
};
F.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Go ||
    e === Yo ||
    e === Jo ||
    e === es ||
    e === ts ||
    e === E0 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === rs ||
        e.$$typeof === ns ||
        e.$$typeof === Xo ||
        e.$$typeof === qo ||
        e.$$typeof === Zo ||
        e.$$typeof === Ip ||
        e.getModuleId !== void 0))
  );
};
F.typeOf = Ve;
function N0() {
  const e = u0();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Cc = { notify() {}, get: () => [] };
function j0(e, t) {
  let n,
    r = Cc,
    i = 0,
    o = !1;
  function s(w) {
    c();
    const k = r.subscribe(w);
    let m = !1;
    return () => {
      m || ((m = !0), k(), d());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return o;
  }
  function c() {
    i++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = N0()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Cc));
  }
  function f() {
    o || ((o = !0), c());
  }
  function y() {
    o && ((o = !1), d());
  }
  const v = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return v;
}
const P0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  L0 = P0 ? C.useLayoutEffect : C.useEffect;
function O0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  const s = C.useMemo(() => {
      const u = j0(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    l = C.useMemo(() => e.getState(), [e]);
  L0(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const a = t || Dt;
  return C.createElement(a.Provider, { value: s }, n);
}
function Mp(e = Dt) {
  const t = e === Dt ? Op : Ba(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const _0 = Mp();
function $0(e = Dt) {
  const t = e === Dt ? _0 : Mp(e);
  return function () {
    return t().dispatch;
  };
}
const Zr = $0();
d0(s0.useSyncExternalStoreWithSelector);
a0(Ha.unstable_batchedUpdates);
const b0 = "./assets/Loader-e88dff7d.svg",
  Ya = "./assets/Logo-5c11e8dd.svg",
  R0 = "./assets/bars-solid-f0824c74.svg",
  Ri = "./assets/xmark-solid-655dafb0.svg",
  zp = "./assets/Glass-4568b14d.svg",
  Ec = "./assets/ChevronDown-cd4bcd0e.svg",
  T0 = "./assets/Map-d6de1723.svg",
  Fp = "./assets/Location-13d38479.svg",
  I0 = "./assets/Weigth-cc28fc12.svg",
  M0 = "./assets/Lang-7d3e8654.svg",
  Nc = [
    [
      { id: 1, name: "Language", nombre: "Lenguaje", icon: [Ec, M0] },
      { id: 2, name: "Units", nombre: "Unidades", icon: [Ec, I0] },
    ],
    [
      {
        id: 3,
        name: "My Locations",
        href: "locations",
        nombre: "Localidades",
        icon: [Fp],
      },
      { id: 4, name: "Maps", nombre: "Mapas", href: "maps", icon: [T0] },
    ],
  ],
  z0 = [
    { id: 1, name: "Today", nombre: "Hoy", href: "today" },
    { id: 2, name: "Daily", nombre: "Diario", href: "daily" },
    { id: 3, name: "Hourly", nombre: "A Cada Hora", href: "hourly" },
  ],
  jc = (e) =>
    ({
      1: { means: "Good", significa: "Buena", color: "#67c72f" },
      2: { means: "Moderate", significa: "Moderada", color: "#7dee47" },
      3: {
        means: "Unhealthy for sensitive group",
        significa: "Dañina para grupos sensibles",
        color: "#eed82f",
      },
      4: { means: "Unhealthy", significa: "Dañino", color: "#ee8133" },
      5: { means: "Very Unhealthy", significa: "Muy Dañino", color: "#df4230" },
      6: { means: "Hazardous", significa: "Peligrosa", color: "#bf3228" },
    }[e]),
  Qn = (e) => {
    const t = {
      means: "Extremly High",
      significa: "Extremadamente Alto",
      color: "#D954F71",
    };
    return (
      {
        1: { means: "Low", significa: "bajo", color: "#8DC443" },
        2: { means: "Low", significa: "bajo", color: "#8DC443" },
        3: { means: "Medium", significa: "Moderado", color: "#FCD835" },
        4: { means: "Medium", significa: "Moderado", color: "#FCD835" },
        5: { means: "Medium", significa: "Moderado", color: "#FCD835" },
        6: { means: "High", significa: "Alto", color: "#F5B233" },
        7: { means: "High", significa: "Alto", color: "#F5B233" },
        8: { means: "Very High", significa: "Muy Alto", color: "#D1394A" },
        9: { means: "Very High", significa: "Muy Alto", color: "#D1394A" },
        10: { means: "Very High", significa: "Muy Alto", color: "#D1394A" },
      }[e] || t
    );
  },
  Er = [
    [
      {
        id: "temp_c",
        id_i: "temp_f",
        name: "Temperature",
        nombre: "Temperatura",
        units: "°C",
        units_i: "°F",
      },
    ],
    [
      {
        id: "feelslike_c",
        id_i: "feelslike_f",
        name: "Feels Like",
        nombre: "Sensasión Termica",
        units: "°C",
        units_i: "°F",
      },
      {
        id: "wind_kph",
        id_i: "wind_mph",
        name: "Wind",
        nombre: "Viento",
        units: "km/h",
        units_i: "mi/h",
      },
      {
        id: "gust_kph",
        id_i: "gust_mph",
        name: "Wind Guts",
        nombre: "Rafagas de Viento",
        units: "km/h",
        units_i: "mi/h",
      },
      {
        id: "humidity",
        id_i: "humidity",
        name: "Humidity",
        nombre: "Humedad",
        units: "%",
        units_i: "%",
      },
      {
        id: "cloud",
        id_i: "cloud",
        name: "Cloud Cover",
        nombre: "Nubosidad",
        units: "%",
        units_i: "%",
      },
      {
        id: "vis_km",
        id_i: "vis_miles",
        name: "Visibility",
        nombre: "Visibilidad",
        units: "km",
        units_i: "mi",
      },
    ],
  ],
  Dl = [
    [
      {
        id: "maxtemp_c",
        id_i: "maxtemp_f",
        name: "Average Humidity",
        nombre: "Humedad Promedio",
        units: "°C",
        units_i: "°F",
      },
      {
        id: "mintemp_c",
        id_i: "mintemp_f",
        name: "Average Temperature",
        nombre: "Temperatura Promedio",
        units: "°C",
        units_i: "°F",
      },
    ],
    [
      {
        id: "avghumidity",
        id_i: "avghumidity",
        name: "Average Humidity",
        nombre: "Humedad Promedio",
        units: "%",
        units_i: "%",
      },
      {
        id: "avgtemp_c",
        id_i: "avgtemp_f",
        name: "Average Temperature",
        nombre: "Temperatura Promedio",
        units: "°C",
        units_i: "°F",
      },
      {
        id: "maxwind_kph",
        id_i: "maxwind_mph",
        name: "Max Wind",
        nombre: "Vientos Máximos",
        units: "km/h",
        units_i: "mi/h",
      },
      {
        id: "totalprecip_mm",
        id_i: "totalprecip_in",
        name: "Total Precipitation",
        nombre: "Precipitación Total",
        units: "mm",
        units_i: "in",
      },
      {
        id: "avgvis_km",
        id_i: "avgvis_miles",
        name: "Average Visibility",
        nombre: "Visibilidad Promedio",
        units: "km",
        units_i: "mi",
      },
    ],
  ],
  Dp = [
    {
      id: "temp_c",
      id_i: "temp_f",
      name: "Temperature",
      nombre: "Temperatura",
      units: "°C",
      units_i: "°F",
    },
    [
      {
        id: "humidity",
        id_i: "humidity",
        name: "Humidity",
        nombre: "Humedad",
        units: "%",
        units_i: "%",
      },
      {
        id: "feelslike_c",
        id_i: "feelslike_f",
        name: "Feels Like",
        nombre: "Sensasión Termica",
        units: "°C",
        units_i: "°F",
      },
      {
        id: "wind_kph",
        id_i: "wind_mph",
        name: "Wind",
        nombre: "Viento",
        units: "km/h",
        units_i: "mi/h",
      },
      {
        id: "precip_mm",
        id_i: "precip_in",
        name: "Precipitation",
        nombre: "Precipitación",
        units: "mm",
        units_i: "in",
      },
      {
        id: "vis_km",
        id: "vis_miles",
        name: "Visibility",
        nombre: "Visibilidad",
        units: "km",
        units_i: "mi",
      },
    ],
  ],
  Le = {
    m: { value: "id", unit: "units" },
    i: { value: "id_i", unit: "units_i" },
  };
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vr() {
  return (
    (Vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vr.apply(this, arguments)
  );
}
var Pt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Pt || (Pt = {}));
const Pc = "popstate";
function F0(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: s = "/",
      search: l = "",
      hash: a = "",
    } = fn(i.location.hash.substr(1));
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      Al(
        "",
        { pathname: s, search: l, hash: a },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(i, o) {
    let s = i.document.querySelector("base"),
      l = "";
    if (s && s.getAttribute("href")) {
      let a = i.location.href,
        u = a.indexOf("#");
      l = u === -1 ? a : a.slice(0, u);
    }
    return l + "#" + (typeof o == "string" ? o : io(o));
  }
  function r(i, o) {
    is(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return A0(t, n, r, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function is(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function D0() {
  return Math.random().toString(36).substr(2, 8);
}
function Lc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Al(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? fn(t) : t,
      { state: n, key: (t && t.key) || r || D0() }
    )
  );
}
function io(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function fn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function A0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Pt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Vr({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    l = Pt.Pop;
    let k = c(),
      m = k == null ? null : k - u;
    (u = k), a && a({ action: l, location: w.location, delta: m });
  }
  function f(k, m) {
    l = Pt.Push;
    let p = Al(w.location, k, m);
    n && n(p, k), (u = c() + 1);
    let g = Lc(p, u),
      x = w.createHref(p);
    try {
      s.pushState(g, "", x);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(x);
    }
    o && a && a({ action: l, location: w.location, delta: 1 });
  }
  function y(k, m) {
    l = Pt.Replace;
    let p = Al(w.location, k, m);
    n && n(p, k), (u = c());
    let g = Lc(p, u),
      x = w.createHref(p);
    s.replaceState(g, "", x),
      o && a && a({ action: l, location: w.location, delta: 0 });
  }
  function v(k) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof k == "string" ? k : io(k);
    return (
      q(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let w = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(k) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Pc, d),
        (a = k),
        () => {
          i.removeEventListener(Pc, d), (a = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let m = v(k);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: y,
    go(k) {
      return s.go(k);
    },
  };
  return w;
}
var Oc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Oc || (Oc = {}));
function U0(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? fn(t) : t,
    i = Xa(r.pathname || "/", n);
  if (i == null) return null;
  let o = Ap(e);
  V0(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = X0(o[l], ey(i));
  return s;
}
function Ap(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (q(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Mt([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (q(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Ap(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: J0(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let a of Up(o.path)) i(o, s, a);
    }),
    t
  );
}
function Up(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Up(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function V0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Y0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const H0 = /^:\w+$/,
  B0 = 3,
  W0 = 2,
  K0 = 1,
  Q0 = 10,
  G0 = -2,
  _c = (e) => e === "*";
function J0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(_c) && (r += G0),
    t && (r += W0),
    n
      .filter((i) => !_c(i))
      .reduce((i, o) => i + (H0.test(o) ? B0 : o === "" ? K0 : Q0), r)
  );
}
function Y0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function X0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = q0(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    o.push({
      params: r,
      pathname: Mt([i, c.pathname]),
      pathnameBase: iy(Mt([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Mt([i, c.pathnameBase]));
  }
  return o;
}
function q0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Z0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = l[d] || "";
        s = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = ty(l[d] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Z0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    is(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function ey(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      is(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ty(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      is(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Xa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ny(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? fn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ry(n, t)) : t,
    search: oy(r),
    hash: sy(i),
  };
}
function ry(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function zs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Vp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = fn(e))
    : ((i = Vr({}, e)),
      q(
        !i.pathname || !i.pathname.includes("?"),
        zs("?", "pathname", "search", i)
      ),
      q(
        !i.pathname || !i.pathname.includes("#"),
        zs("#", "pathname", "hash", i)
      ),
      q(!i.search || !i.search.includes("#"), zs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (r || s == null) l = n;
  else {
    let d = t.length - 1;
    if (s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = ny(i, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  iy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  oy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  sy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ly(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bp = ["post", "put", "patch", "delete"];
new Set(Bp);
const ay = ["get", ...Bp];
new Set(ay);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oo.apply(this, arguments)
  );
}
const qa = C.createContext(null),
  uy = C.createContext(null),
  qn = C.createContext(null),
  os = C.createContext(null),
  Ht = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Wp = C.createContext(null);
function cy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ei() || q(!1);
  let { basename: r, navigator: i } = C.useContext(qn),
    { hash: o, pathname: s, search: l } = Qp(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Mt([r, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function ei() {
  return C.useContext(os) != null;
}
function Zn() {
  return ei() || q(!1), C.useContext(os).location;
}
function Kp(e) {
  C.useContext(qn).static || C.useLayoutEffect(e);
}
function ss() {
  let { isDataRoute: e } = C.useContext(Ht);
  return e ? Ny() : fy();
}
function fy() {
  ei() || q(!1);
  let e = C.useContext(qa),
    { basename: t, navigator: n } = C.useContext(qn),
    { matches: r } = C.useContext(Ht),
    { pathname: i } = Zn(),
    o = JSON.stringify(Vp(r).map((a) => a.pathnameBase)),
    s = C.useRef(!1);
  return (
    Kp(() => {
      s.current = !0;
    }),
    C.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Hp(a, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Mt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
const dy = C.createContext(null);
function py(e) {
  let t = C.useContext(Ht).outlet;
  return t && C.createElement(dy.Provider, { value: e }, t);
}
function Qp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(Ht),
    { pathname: i } = Zn(),
    o = JSON.stringify(Vp(r).map((s) => s.pathnameBase));
  return C.useMemo(() => Hp(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function hy(e, t) {
  return my(e, t);
}
function my(e, t, n) {
  ei() || q(!1);
  let { navigator: r } = C.useContext(qn),
    { matches: i } = C.useContext(Ht),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Zn(),
    u;
  if (t) {
    var c;
    let w = typeof t == "string" ? fn(t) : t;
    l === "/" || ((c = w.pathname) != null && c.startsWith(l)) || q(!1),
      (u = w);
  } else u = a;
  let d = u.pathname || "/",
    f = l === "/" ? d : d.slice(l.length) || "/",
    y = U0(e, { pathname: f }),
    v = xy(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: Mt([
              l,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Mt([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && v
    ? C.createElement(
        os.Provider,
        {
          value: {
            location: oo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Pt.Pop,
          },
        },
        v
      )
    : v;
}
function gy() {
  let e = Ey(),
    t = ly(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    o
  );
}
const yy = C.createElement(gy, null);
class vy extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          Ht.Provider,
          { value: this.props.routeContext },
          C.createElement(Wp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function wy(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(qa);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Ht.Provider, { value: t }, r)
  );
}
function xy(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let l = o.findIndex(
      (a) => a.route.id && (s == null ? void 0 : s[a.route.id])
    );
    l >= 0 || q(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, a, u) => {
    let c = a.route.id ? (s == null ? void 0 : s[a.route.id]) : null,
      d = null;
    n && (d = a.route.errorElement || yy);
    let f = t.concat(o.slice(0, u + 1)),
      y = () => {
        let v;
        return (
          c
            ? (v = d)
            : a.route.Component
            ? (v = C.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = l),
          C.createElement(wy, {
            match: a,
            routeContext: { outlet: l, matches: f, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? C.createElement(vy, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: y(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var Gp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Gp || {}),
  so = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(so || {});
function Sy(e) {
  let t = C.useContext(qa);
  return t || q(!1), t;
}
function ky(e) {
  let t = C.useContext(uy);
  return t || q(!1), t;
}
function Cy(e) {
  let t = C.useContext(Ht);
  return t || q(!1), t;
}
function Jp(e) {
  let t = Cy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function Ey() {
  var e;
  let t = C.useContext(Wp),
    n = ky(so.UseRouteError),
    r = Jp(so.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ny() {
  let { router: e } = Sy(Gp.UseNavigateStable),
    t = Jp(so.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Kp(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, oo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function jy(e) {
  return py(e.context);
}
function et(e) {
  q(!1);
}
function Py(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Pt.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  ei() && q(!1);
  let l = t.replace(/^\/*/, "/"),
    a = C.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
  typeof r == "string" && (r = fn(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: y = "default",
    } = r,
    v = C.useMemo(() => {
      let w = Xa(u, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: d, state: f, key: y },
            navigationType: i,
          };
    }, [l, u, c, d, f, y, i]);
  return v == null
    ? null
    : C.createElement(
        qn.Provider,
        { value: a },
        C.createElement(os.Provider, { children: n, value: v })
      );
}
function Ly(e) {
  let { children: t, location: n } = e;
  return hy(Ul(t), n);
}
new Promise(() => {});
function Ul(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, Ul(r.props.children, o));
        return;
      }
      r.type !== et && q(!1), !r.props.index || !r.props.children || q(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Ul(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vl() {
  return (
    (Vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vl.apply(this, arguments)
  );
}
function Oy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function _y(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $y(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_y(e);
}
const by = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Ry = "startTransition",
  $c = bh[Ry];
function Ty(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = C.useRef();
  o.current == null && (o.current = F0({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, a] = C.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (d) => {
        u && $c ? $c(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    C.useLayoutEffect(() => s.listen(c), [s, c]),
    C.createElement(Py, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
    })
  );
}
const Iy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  My = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Za = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = Oy(t, by),
      { basename: y } = C.useContext(qn),
      v,
      w = !1;
    if (typeof u == "string" && My.test(u) && ((v = u), Iy))
      try {
        let g = new URL(window.location.href),
          x = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          S = Xa(x.pathname, y);
        x.origin === g.origin && S != null
          ? (u = S + x.search + x.hash)
          : (w = !0);
      } catch {}
    let k = cy(u, { relative: i }),
      m = zy(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return C.createElement(
      "a",
      Vl({}, f, { href: v || k, onClick: w || o ? r : p, ref: n, target: a })
    );
  });
var bc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(bc || (bc = {}));
var Rc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Rc || (Rc = {}));
function zy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = ss(),
    u = Zn(),
    c = Qp(e, { relative: s });
  return C.useCallback(
    (d) => {
      if ($y(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : io(u) === io(c);
        a(e, {
          replace: f,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, o, s, l]
  );
}
const Fy = () => {
    const e = typeof window < "u",
      t = () => {
        const { innerWidth: i, innerHeight: o } = e ? window : null;
        return { width: i, height: o };
      },
      [n, r] = C.useState(t());
    return (
      C.useEffect(() => {
        if (e) {
          const i = () => {
            r(t());
          };
          return (
            window.addEventListener("resize", i),
            () => window.removeEventListener("resize", i)
          );
        }
      }, [e]),
      n
    );
  },
  Tc = ({ data: e, children: t }) =>
    h.jsx(h.Fragment, {
      children: Ha.createPortal(
        h.jsx("div", {
          className: `${
            e.modal ? "flex" : "hidden"
          } fixed left-0 top-0 w-full h-full bg-primary/50 backdrop-blur-sm  justify-center items-center text-white`,
          children: h.jsxs("div", {
            className:
              "relative sm:w-[400px] w-72 h-64 bg-primary rounded-lg grid place-content-center ",
            children: [
              h.jsx("img", {
                src: e.Cross,
                alt: "escape",
                className:
                  "w-6 h-6 absolute right-2 top-2 pointer-events-auto cursor-pointer hover:bg-cHover  active:bg-cActive rounded-md",
                onClick: (n) => {
                  n.stopPropagation(), e.setModal(!e.modal);
                },
              }),
              t,
            ],
          }),
        }),
        document.body
      ),
    }),
  Yp = "CHANGE_LANGUAGE",
  Dy = "CURRENT_WEATHER",
  Xp = "FORECAST",
  qp = "CHANGE_UNITS",
  Ay = (e) => ({ type: Yp, payload: e }),
  Uy = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class lo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || Uy),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t));
  }
  create(t) {
    return new lo(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new lo(this.logger, t)
    );
  }
}
var rt = new lo();
class ls {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        (this.observers[r] = this.observers[r] || []),
          this.observers[r].push(n);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t] = this.observers[t].filter((r) => r !== n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[t] &&
      [].concat(this.observers[t]).forEach((s) => {
        s(...r);
      }),
      this.observers["*"] &&
        [].concat(this.observers["*"]).forEach((s) => {
          s.apply(s, [t, ...r]);
        });
  }
}
function ur() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function Ic(e) {
  return e == null ? "" : "" + e;
}
function Vy(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function eu(e, t, n) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? [].concat(t) : t.split(".");
  for (; o.length > 1; ) {
    if (i()) return {};
    const s = r(o.shift());
    !e[s] && n && (e[s] = new n()),
      Object.prototype.hasOwnProperty.call(e, s) ? (e = e[s]) : (e = {});
  }
  return i() ? {} : { obj: e, k: r(o.shift()) };
}
function Mc(e, t, n) {
  const { obj: r, k: i } = eu(e, t, Object);
  r[i] = n;
}
function Hy(e, t, n, r) {
  const { obj: i, k: o } = eu(e, t, Object);
  (i[o] = i[o] || []), r && (i[o] = i[o].concat(n)), r || i[o].push(n);
}
function ao(e, t) {
  const { obj: n, k: r } = eu(e, t);
  if (n) return n[r];
}
function By(e, t, n) {
  const r = ao(e, n);
  return r !== void 0 ? r : ao(t, n);
}
function Zp(e, t, n) {
  for (const r in t)
    r !== "__proto__" &&
      r !== "constructor" &&
      (r in e
        ? typeof e[r] == "string" ||
          e[r] instanceof String ||
          typeof t[r] == "string" ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : Zp(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function hn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Wy = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function Ky(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Wy[t]) : e;
}
const Qy = [" ", ",", "?", "!", ";"];
function Gy(e, t, n) {
  (t = t || ""), (n = n || "");
  const r = Qy.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = new RegExp(`(${r.map((s) => (s === "?" ? "\\?" : s)).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function uo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ++o) {
    if (!i || (typeof i[r[o]] == "string" && o + 1 < r.length)) return;
    if (i[r[o]] === void 0) {
      let s = 2,
        l = r.slice(o, o + s).join(n),
        a = i[l];
      for (; a === void 0 && r.length > o + s; )
        s++, (l = r.slice(o, o + s).join(n)), (a = i[l]);
      if (a === void 0) return;
      if (a === null) return null;
      if (t.endsWith(l)) {
        if (typeof a == "string") return a;
        if (l && typeof a[l] == "string") return a[l];
      }
      const u = r.slice(o + s).join(n);
      return u ? uo(a, u, n) : void 0;
    }
    i = i[r[o]];
  }
  return i;
}
function co(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class zc extends ls {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      s =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let l = [t, n];
    r && typeof r != "string" && (l = l.concat(r)),
      r && typeof r == "string" && (l = l.concat(o ? r.split(o) : r)),
      t.indexOf(".") > -1 && (l = t.split("."));
    const a = ao(this.data, l);
    return a || !s || typeof r != "string"
      ? a
      : uo(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = [t, n];
    r && (l = l.concat(s ? r.split(s) : r)),
      t.indexOf(".") > -1 && ((l = t.split(".")), (i = n), (n = l[1])),
      this.addNamespaces(n),
      Mc(this.data, l, i),
      o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in r)
      (typeof r[o] == "string" ||
        Object.prototype.toString.apply(r[o]) === "[object Array]") &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1 },
      l = [t, n];
    t.indexOf(".") > -1 && ((l = t.split(".")), (i = r), (r = n), (n = l[1])),
      this.addNamespaces(n);
    let a = ao(this.data, l) || {};
    i ? Zp(a, r, o) : (a = { ...a, ...r }),
      Mc(this.data, l, a),
      s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var eh = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, i));
      }),
      t
    );
  },
};
const Fc = {};
class fo extends ls {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Vy(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = rt.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      l =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !Gy(t, r, i);
    if (s && !l) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: o };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i));
    }
    return typeof o == "string" && (o = [o]), { key: t, namespaces: o };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: l } = this.extractFromKey(t[t.length - 1], n),
      a = l[l.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const x = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${a}${x}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: u,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${a}${x}${s}`;
      }
      return i
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: u,
            usedNS: a,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const y = (d && d.usedKey) || s,
      v = (d && d.exactUsedKey) || s,
      w = Object.prototype.toString.apply(f),
      k = ["[object Number]", "[object Function]", "[object RegExp]"],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
      f &&
      typeof f != "string" &&
      typeof f != "boolean" &&
      typeof f != "number" &&
      k.indexOf(w) < 0 &&
      !(typeof m == "string" && w === "[object Array]")
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const x = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(y, f, { ...n, ns: l })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return i
          ? ((d.res = x), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : x;
      }
      if (o) {
        const x = w === "[object Array]",
          S = x ? [] : {},
          j = x ? v : y;
        for (const N in f)
          if (Object.prototype.hasOwnProperty.call(f, N)) {
            const L = `${j}${o}${N}`;
            (S[N] = this.translate(L, { ...n, joinArrays: !1, ns: l })),
              S[N] === L && (S[N] = f[N]);
          }
        f = S;
      }
    } else if (p && typeof m == "string" && w === "[object Array]")
      (f = f.join(m)), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let x = !1,
        S = !1;
      const j = n.count !== void 0 && typeof n.count != "string",
        N = fo.hasDefaultValue(n),
        L = j ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        T =
          n.ordinal && j
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        _ = n[`defaultValue${L}`] || n[`defaultValue${T}`] || n.defaultValue;
      !this.isValidLookup(f) && N && ((x = !0), (f = _)),
        this.isValidLookup(f) || ((S = !0), (f = s));
      const He =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          S
            ? void 0
            : f,
        me = N && _ !== f && this.options.updateMissing;
      if (S || x || me) {
        if (
          (this.logger.log(
            me ? "updateKey" : "missingKey",
            u,
            a,
            s,
            me ? _ : f
          ),
          o)
        ) {
          const oe = this.resolve(s, { ...n, keySeparator: !1 });
          oe &&
            oe.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let Ie = [];
        const vt = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && vt && vt[0])
          for (let oe = 0; oe < vt.length; oe++) Ie.push(vt[oe]);
        else
          this.options.saveMissingTo === "all"
            ? (Ie = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Ie.push(n.lng || this.language);
        const dn = (oe, P, $) => {
          const b = N && $ !== f ? $ : He;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(oe, a, P, b, me, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(oe, a, P, b, me, n),
            this.emit("missingKey", oe, a, P, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && j
            ? Ie.forEach((oe) => {
                this.pluralResolver.getSuffixes(oe, n).forEach((P) => {
                  dn([oe], s + P, n[`defaultValue${P}`] || _);
                });
              })
            : dn(Ie, s, _));
      }
      (f = this.extendTranslation(f, t, n, d, r)),
        S &&
          f === s &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${a}:${s}`),
        (S || x) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s,
                x ? f : void 0
              ))
            : (f = this.options.parseMissingKeyHandler(f)));
    }
    return i
      ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : f;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        typeof t == "string" &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (t = this.interpolator.interpolate(t, d, r.lng || this.language, r)),
        u)
      ) {
        const f = t.match(this.interpolator.nestingRegexp),
          y = f && f.length;
        c < y && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (r.lng = i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var f = arguments.length, y = new Array(f), v = 0;
                v < f;
                v++
              )
                y[v] = arguments[v];
              return o && o[0] === y[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...y, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const l = r.postProcess || this.options.postProcess,
      a = typeof l == "string" ? [l] : l;
    return (
      t != null &&
        a &&
        a.length &&
        r.applyPostProcessor !== !1 &&
        (t = eh.handle(
          a,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: i, ...r }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      s,
      l;
    return (
      typeof t == "string" && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          c = u.key;
        i = c;
        let d = u.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && typeof n.count != "string",
          y =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (typeof n.context == "string" || typeof n.context == "number") &&
            n.context !== "",
          w = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        d.forEach((k) => {
          this.isValidLookup(r) ||
            ((l = k),
            !Fc[`${w[0]}-${k}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(l) &&
              ((Fc[`${w[0]}-${k}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${w.join(
                  ", "
                )}" won't get resolved as namespace "${l}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            w.forEach((m) => {
              if (this.isValidLookup(r)) return;
              s = m;
              const p = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, c, m, k, n);
              else {
                let x;
                f && (x = this.pluralResolver.getSuffix(m, n.count, n));
                const S = `${this.options.pluralSeparator}zero`,
                  j = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (p.push(c + x),
                    n.ordinal &&
                      x.indexOf(j) === 0 &&
                      p.push(c + x.replace(j, this.options.pluralSeparator)),
                    y && p.push(c + S)),
                  v)
                ) {
                  const N = `${c}${this.options.contextSeparator}${n.context}`;
                  p.push(N),
                    f &&
                      (p.push(N + x),
                      n.ordinal &&
                        x.indexOf(j) === 0 &&
                        p.push(N + x.replace(j, this.options.pluralSeparator)),
                      y && p.push(N + S));
                }
              }
              let g;
              for (; (g = p.pop()); )
                this.isValidLookup(r) ||
                  ((o = g), (r = this.getResource(m, k, g, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: s, usedNS: l }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const o of n) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
function Fs(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Dc {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = rt.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = co(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = co(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Fs(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Fs(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Fs(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o;
            if (
              !(o.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              o.indexOf(i) === 0
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      typeof t == "string" && (t = [t]),
      Object.prototype.toString.apply(t) === "[object Array]")
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      o = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? i.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(t)))
        : typeof t == "string" && o(this.formatLanguageCode(t)),
      r.forEach((s) => {
        i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
      }),
      i
    );
  }
}
let Jy = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Yy = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (e) {
      return e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11
        ? 0
        : e == 2 || e == 12
        ? 1
        : e > 2 && e < 20
        ? 2
        : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const Xy = ["v1", "v2", "v3"],
  qy = ["v4"],
  Ac = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function Zy() {
  const e = {};
  return (
    Jy.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: Yy[t.fc] };
      });
    }),
    e
  );
}
class ev {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = rt.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        qy.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = Zy());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(co(t), {
          type: n.ordinal ? "ordinal" : "cardinal",
        });
      } catch {
        return;
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => Ac[i] - Ac[o])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
        ? `_plural_${i.toString()}`
        : o()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? o()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !Xy.includes(this.options.compatibilityJSON);
  }
}
function Uc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    o = By(e, t, n);
  return (
    !o &&
      i &&
      typeof n == "string" &&
      ((o = uo(e, n, r)), o === void 0 && (o = uo(t, n, r))),
    o
  );
}
class tv {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = rt.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const n = t.interpolation;
    (this.escape = n.escape !== void 0 ? n.escape : Ky),
      (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
      (this.useRawValueToEscape =
        n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
      (this.prefix = n.prefix ? hn(n.prefix) : n.prefixEscaped || "{{"),
      (this.suffix = n.suffix ? hn(n.suffix) : n.suffixEscaped || "}}"),
      (this.formatSeparator = n.formatSeparator
        ? n.formatSeparator
        : n.formatSeparator || ","),
      (this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || ""),
      (this.nestingPrefix = n.nestingPrefix
        ? hn(n.nestingPrefix)
        : n.nestingPrefixEscaped || hn("$t(")),
      (this.nestingSuffix = n.nestingSuffix
        ? hn(n.nestingSuffix)
        : n.nestingSuffixEscaped || hn(")")),
      (this.nestingOptionsSeparator = n.nestingOptionsSeparator
        ? n.nestingOptionsSeparator
        : n.nestingOptionsSeparator || ","),
      (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
      (this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, "g");
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, "g");
    const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(r, "g");
  }
  interpolate(t, n, r, i) {
    let o, s, l;
    const a =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function u(v) {
      return v.replace(/\$/g, "$$$$");
    }
    const c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const p = Uc(
          n,
          a,
          v,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(p, void 0, r, { ...i, ...n, interpolationkey: v })
          : p;
      }
      const w = v.split(this.formatSeparator),
        k = w.shift().trim(),
        m = w.join(this.formatSeparator).trim();
      return this.format(
        Uc(
          n,
          a,
          k,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        m,
        r,
        { ...i, ...n, interpolationkey: k }
      );
    };
    this.resetRegExp();
    const d =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (v) => u(v) },
        {
          regex: this.regexp,
          safeValue: (v) => (this.escapeValue ? u(this.escape(v)) : u(v)),
        },
      ].forEach((v) => {
        for (l = 0; (o = v.regex.exec(t)); ) {
          const w = o[1].trim();
          if (((s = c(w)), s === void 0))
            if (typeof d == "function") {
              const m = d(t, o, i);
              s = typeof m == "string" ? m : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, w)) s = "";
            else if (f) {
              s = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${w} for interpolating ${t}`
              ),
                (s = "");
          else typeof s != "string" && !this.useRawValueToEscape && (s = Ic(s));
          const k = v.safeValue(s);
          if (
            ((t = t.replace(o[0], k)),
            f
              ? ((v.regex.lastIndex += s.length),
                (v.regex.lastIndex -= o[0].length))
              : (v.regex.lastIndex = 0),
            l++,
            l >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      s;
    function l(a, u) {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const d = a.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      (a = d[0]), (f = this.interpolate(f, s));
      const y = f.match(/'/g),
        v = f.match(/"/g);
      ((y && y.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (s = JSON.parse(f)), u && (s = { ...u, ...s });
      } catch (w) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            w
          ),
          `${a}${c}${f}`
        );
      }
      return delete s.defaultValue, a;
    }
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let a = [];
      (s = { ...r }),
        (s = s.replace && typeof s.replace != "string" ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        (i[1] = c.shift()), (a = c), (u = !0);
      }
      if (
        ((o = n(l.call(this, i[1].trim(), s), s)),
        o && i[0] === t && typeof o != "string")
      )
        return o;
      typeof o != "string" && (o = Ic(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = "")),
        u &&
          (o = a.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function nv(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0
      ? n.currency || (n.currency = i.trim())
      : t === "relativetime" && i.indexOf(":") < 0
      ? n.range || (n.range = i.trim())
      : i.split(";").forEach((s) => {
          if (!s) return;
          const [l, ...a] = s.split(":"),
            u = a
              .join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          n[l.trim()] || (n[l.trim()] = u),
            u === "false" && (n[l.trim()] = !1),
            u === "true" && (n[l.trim()] = !0),
            isNaN(u) || (n[l.trim()] = parseInt(u, 10));
        });
  }
  return { formatName: t, formatOptions: n };
}
function mn(e) {
  const t = {};
  return function (r, i, o) {
    const s = i + JSON.stringify(o);
    let l = t[s];
    return l || ((l = e(co(i), o)), (t[s] = l)), l(r);
  };
}
class rv {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = rt.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: mn((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        currency: mn((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (o) => i.format(o);
        }),
        datetime: mn((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        relativetime: mn((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (o) => i.format(o, r.range || "day");
        }),
        list: mn((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (o) => i.format(o);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = mn(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((l, a) => {
      const { formatName: u, formatOptions: c } = nv(a);
      if (this.formats[u]) {
        let d = l;
        try {
          const f =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            y = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[u](l, y, { ...c, ...i, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, t);
  }
}
function iv(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class ov extends ls {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = rt.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {},
      s = {},
      l = {},
      a = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((d) => {
          const f = `${u}|${d}`;
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? s[f] === void 0 && (s[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  s[f] === void 0 && (s[f] = !0),
                  o[f] === void 0 && (o[f] = !0),
                  a[d] === void 0 && (a[d] = !0)));
        }),
          c || (l[u] = !0);
      }),
      (Object.keys(o).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(l),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split("|"),
      o = i[0],
      s = i[1];
    n && this.emit("failedLoading", o, s, n),
      r && this.store.addResourceBundle(o, s, r),
      (this.state[t] = n ? -1 : 2);
    const l = {};
    this.queue.forEach((a) => {
      Hy(a.loaded, [o], s),
        iv(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            l[u] || (l[u] = {});
            const c = a.loaded[u];
            c.length &&
              c.forEach((d) => {
                l[u][d] === void 0 && (l[u][d] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback());
    }),
      this.emit("loaded", l),
      (this.queue = this.queue.filter((a) => !a.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const l = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, s);
          }, o);
          return;
        }
        s(u, c);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => l(null, c)).catch(l)
          : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return a(t, n, l);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        i && i()
      );
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length) return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      i = r[0],
      o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, l) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          s
        ),
        !s &&
          l &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, l),
        this.loaded(t, s, l);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      l =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = { ...s, isUpdate: o },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, i, a)) : (c = u(t, n, r, i)),
              c && typeof c.then == "function"
                ? c.then((d) => l(null, d)).catch(l)
                : l(null, c);
          } catch (c) {
            l(c);
          }
        else u(t, n, r, i, l, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function Vc() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == "object" && (n = t[1]),
        typeof t[1] == "string" && (n.defaultValue = t[1]),
        typeof t[2] == "string" && (n.tDescription = t[2]),
        typeof t[2] == "object" || typeof t[3] == "object")
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e, t, n, r) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function Hc(e) {
  return (
    typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  );
}
function xi() {}
function sv(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Hr extends ls {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Hc(t)),
      (this.services = {}),
      (this.logger = rt),
      (this.modules = { external: [] }),
      sv(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == "string"
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = Vc();
    (this.options = { ...i, ...this.options, ...Hc(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? (typeof c == "function" ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? rt.init(o(this.modules.logger), this.options)
        : rt.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = rv);
      const d = new Dc(this.options);
      this.store = new zc(this.options.resources, this.options);
      const f = this.services;
      (f.logger = rt),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new ev(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((f.formatter = o(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter
          ))),
        (f.interpolator = new tv(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new ov(
          o(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on("*", function (y) {
          for (
            var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), k = 1;
            k < v;
            k++
          )
            w[k - 1] = arguments[k];
          t.emit(y, ...w);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = o(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = o(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new fo(this.services, this.options)),
        this.translator.on("*", function (y) {
          for (
            var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), k = 1;
            k < v;
            k++
          )
            w[k - 1] = arguments[k];
          t.emit(y, ...w);
        }),
        this.modules.external.forEach((y) => {
          y.init && y.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = xi),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const a = ur(),
      u = () => {
        const c = (d, f) => {
          this.isInitialized &&
            !this.initializedStoreOnce &&
            this.logger.warn(
              "init: i18next is already initialized. You should call init just once!"
            ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            a.resolve(f),
            r(d, f);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      a
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xi;
    const i = typeof t == "string" ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const o = [],
        s = (l) => {
          if (!l || l === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
            u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
          });
        };
      i
        ? s(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => s(a)),
        this.options.preload && this.options.preload.forEach((l) => s(l)),
        this.services.backendConnector.load(o, this.options.ns, (l) => {
          !l &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(l);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = ur();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = xi),
      this.services.backendConnector.reload(t, n, (o) => {
        i.resolve(), r(o);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && eh.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = ur();
    this.emit("languageChanging", t);
    const o = (a) => {
        (this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a);
      },
      s = (a, u) => {
        u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(a, function () {
              return r.t(...arguments);
            });
      },
      l = (a) => {
        !t && !a && this.services.languageDetector && (a = []);
        const u =
          typeof a == "string"
            ? a
            : this.services.languageUtils.getBestMatchFromCodes(a);
        u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            s(c, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? l(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(l)
          : this.services.languageDetector.detect(l)
        : l(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function (s, l) {
      let a;
      if (typeof l != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          c[d - 2] = arguments[d];
        a = i.options.overloadTranslationOptionHandler([s, l].concat(c));
      } else a = { ...l };
      (a.lng = a.lng || o.lng),
        (a.lngs = a.lngs || o.lngs),
        (a.ns = a.ns || o.ns),
        (a.keyPrefix = a.keyPrefix || r || o.keyPrefix);
      const f = i.options.keySeparator || ".";
      let y;
      return (
        a.keyPrefix && Array.isArray(s)
          ? (y = s.map((v) => `${a.keyPrefix}${f}${v}`))
          : (y = a.keyPrefix ? `${a.keyPrefix}${f}${s}` : s),
        i.t(y, a)
      );
    };
    return (
      typeof t == "string" ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (l, a) => {
      const u = this.services.backendConnector.state[`${l}|${a}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const l = n.precheck(this, s);
      if (l !== void 0) return l;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!i || s(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = ur();
    return this.options.ns
      ? (typeof t == "string" && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = ur();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter((s) => i.indexOf(s) < 0);
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new Dc(Vc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Hr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new Hr(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ["store", "services", "language"].forEach((l) => {
        o[l] = this[l];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new zc(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new fo(o.services, i)),
      o.translator.on("*", function (l) {
        for (
          var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), c = 1;
          c < a;
          c++
        )
          u[c - 1] = arguments[c];
        o.emit(l, ...u);
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ue = Hr.createInstance();
ue.createInstance = Hr.createInstance;
ue.createInstance;
ue.dir;
ue.init;
ue.loadResources;
ue.reloadResources;
ue.use;
ue.changeLanguage;
ue.getFixedT;
const Gn = ue.t;
ue.exists;
ue.setDefaultNamespace;
ue.hasLoadedNamespace;
ue.loadNamespaces;
ue.loadLanguages;
const lv = 0,
  av = "en",
  uv = "English",
  cv = "Language",
  fv = "name",
  dv = "means",
  pv = "en-EN",
  hv = "UV Index",
  mv = "Air Quality",
  gv = "Search",
  yv = "Units Of Mesurement",
  vv = {
    id: lv,
    lanName: av,
    language: uv,
    lan: cv,
    name: fv,
    means: dv,
    lang: pv,
    uv: hv,
    aqi: mv,
    search: gv,
    system: yv,
  },
  wv = 1,
  xv = "es",
  Sv = "Español",
  kv = "Lenguaje",
  Cv = "nombre",
  Ev = "significa",
  Nv = "es-ES",
  jv = "Índice UV",
  Pv = "Calidad ",
  Lv = "Buscar",
  Ov = "Unidades de Medida",
  _v = {
    id: wv,
    lanName: xv,
    language: Sv,
    lan: kv,
    name: Cv,
    means: Ev,
    lang: Nv,
    uv: jv,
    aqi: Pv,
    search: Lv,
    system: Ov,
  };
function $v() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`),
      console.warn(...t);
  }
}
const Bc = {};
function Hl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (typeof t[0] == "string" && Bc[t[0]]) ||
    (typeof t[0] == "string" && (Bc[t[0]] = new Date()), $v(...t));
}
const th = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0),
        t();
    };
    e.on("initialized", n);
  }
};
function Wc(e, t, n) {
  e.loadNamespaces(t, th(e, n));
}
function Kc(e, t, n, r) {
  typeof n == "string" && (n = [n]),
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
    e.loadLanguages(t, th(e, r));
}
function bv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    i = t.options ? t.options.fallbackLng : !1,
    o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (l, a) => {
    const u = t.services.backendConnector.state[`${l}|${a}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf("languageChanging") > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !s(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (s(r, e) && (!i || s(o, e)))
      );
}
function Rv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (Hl("i18n.languages were undefined or empty", t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
    ? t.hasLoadedNamespace(e, {
        lng: n.lng,
        precheck: (i, o) => {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            i.services.backendConnector.backend &&
            i.isLanguageChangingTo &&
            !o(i.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : bv(e, t, n);
}
const Tv =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Iv = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Mv = (e) => Iv[e],
  zv = (e) => e.replace(Tv, Mv);
let Bl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: zv,
};
function Fv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Bl = { ...Bl, ...e };
}
function Dv() {
  return Bl;
}
let nh;
function Av(e) {
  nh = e;
}
function Uv() {
  return nh;
}
const Vv = {
    type: "3rdParty",
    init(e) {
      Fv(e.options.react), Av(e);
    },
  },
  Hv = C.createContext();
class Bv {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Wv = (e, t) => {
  const n = C.useRef();
  return (
    C.useEffect(() => {
      n.current = t ? n.current : e;
    }, [e, t]),
    n.current
  );
};
function yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: i } = C.useContext(Hv) || {},
    o = n || r || Uv();
  if ((o && !o.reportNamespaces && (o.reportNamespaces = new Bv()), !o)) {
    Hl(
      "You will need to pass in an i18next instance by using initReactI18next"
    );
    const g = (S, j) =>
        typeof j == "string"
          ? j
          : j && typeof j == "object" && typeof j.defaultValue == "string"
          ? j.defaultValue
          : Array.isArray(S)
          ? S[S.length - 1]
          : S,
      x = [g, {}, !1];
    return (x.t = g), (x.i18n = {}), (x.ready = !1), x;
  }
  o.options.react &&
    o.options.react.wait !== void 0 &&
    Hl(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
    );
  const s = { ...Dv(), ...o.options.react, ...t },
    { useSuspense: l, keyPrefix: a } = s;
  let u = e || i || (o.options && o.options.defaultNS);
  (u = typeof u == "string" ? [u] : u || ["translation"]),
    o.reportNamespaces.addUsedNamespaces &&
      o.reportNamespaces.addUsedNamespaces(u);
  const c =
    (o.isInitialized || o.initializedStoreOnce) && u.every((g) => Rv(g, o, s));
  function d() {
    return o.getFixedT(t.lng || null, s.nsMode === "fallback" ? u : u[0], a);
  }
  const [f, y] = C.useState(d);
  let v = u.join();
  t.lng && (v = `${t.lng}${v}`);
  const w = Wv(v),
    k = C.useRef(!0);
  C.useEffect(() => {
    const { bindI18n: g, bindI18nStore: x } = s;
    (k.current = !0),
      !c &&
        !l &&
        (t.lng
          ? Kc(o, t.lng, u, () => {
              k.current && y(d);
            })
          : Wc(o, u, () => {
              k.current && y(d);
            })),
      c && w && w !== v && k.current && y(d);
    function S() {
      k.current && y(d);
    }
    return (
      g && o && o.on(g, S),
      x && o && o.store.on(x, S),
      () => {
        (k.current = !1),
          g && o && g.split(" ").forEach((j) => o.off(j, S)),
          x && o && x.split(" ").forEach((j) => o.store.off(j, S));
      }
    );
  }, [o, v]);
  const m = C.useRef(!0);
  C.useEffect(() => {
    k.current && !m.current && y(d), (m.current = !1);
  }, [o, a]);
  const p = [f, o, c];
  if (((p.t = f), (p.i18n = o), (p.ready = c), c || (!c && !l))) return p;
  throw new Promise((g) => {
    t.lng ? Kc(o, t.lng, u, () => g()) : Wc(o, u, () => g());
  });
}
ue.use(Vv).init({
  lng: localStorage.getItem("language") || "en",
  resources: { en: { translation: vv }, es: { translation: _v } },
});
const Kv = [
    { id: 0, name: "English", value: "en" },
    { id: 1, name: "Español", value: "es" },
  ],
  Qv = () => {
    const { t: e } = yt(),
      t = Zr(),
      n = ss(),
      r = C.useCallback((i) => {
        ue.changeLanguage(i), t(Ay(i));
      }, []);
    return h.jsxs("div", {
      className:
        "absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-base sm:text-2xl  overflow-y-auto overflow-x-hidden gap-y-1",
      children: [
        h.jsx("div", {
          className: "text-center text-white text-xl",
          children: e("lan").toLocaleUpperCase(),
        }),
        Kv.map((i) =>
          h.jsx(
            "div",
            {
              className:
                "w-full max-h-max py-2 rounded-md self-center flex justify-center items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ",
              id: i.value,
              onClick: (o) => {
                r(i.value),
                  localStorage.getItem("language") !== i.value &&
                    (localStorage.setItem("language", i.value),
                    n(`${i.value}/weather`));
              },
              children: i.name,
            },
            i.id
          )
        ),
      ],
    });
  },
  Tn = () => {
    const e = async (o, s) => {
      const l = { accept: "application/json" },
        a = new AbortController();
      (s.signal = a.signal),
        (s.method = s.method || "GET"),
        (s.headers = s.headers ? { ...l, ...s.headers } : l),
        (s.body = JSON.stringify(s.body) || !1),
        s.body || delete s.body,
        setTimeout(() => a.abort(), 3e3);
      try {
        const u = await fetch(o, s);
        return await (u.ok
          ? u.json()
          : Promise.reject({
              err: !0,
              status: u.status || "00",
              statusText: u.statusText || "Ocurrió un error",
            }));
      } catch (u) {
        return u;
      }
    };
    return {
      get: (o, s = {}) => e(o, s),
      post: (o, s = {}) => ((s.method = "POST"), e(o, s)),
      put: (o, s = {}) => ((s.method = "PUT"), e(o, s)),
      del: (o, s = {}) => ((s.method = "DELETE"), e(o, s)),
    };
  };
function tu() {
  return (tu = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
function Gv(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) t.indexOf((n = o[r])) >= 0 || (i[n] = e[n]);
  return i;
}
var Jv = {
    ac: !0,
    ad: !0,
    ae: !0,
    af: !0,
    afar: !0,
    ag: !0,
    ai: !0,
    al: !0,
    am: !0,
    ao: !0,
    aq: !0,
    ar: !0,
    as: !0,
    at: !0,
    au: !0,
    "au-aboriginal": !0,
    "au-act": !0,
    "au-nsw": !0,
    "au-nt": !0,
    "au-qld": !0,
    "au-tas": !0,
    "au-vic": !0,
    "au-wa": !0,
    aw: !0,
    ax: !0,
    az: !0,
    ba: !0,
    bb: !0,
    bd: !0,
    be: !0,
    bf: !0,
    bg: !0,
    bh: !0,
    bi: !0,
    bj: !0,
    bl: !0,
    bm: !0,
    bn: !0,
    bo: !0,
    "bq-bo": !0,
    "bq-sa": !0,
    "bq-se": !0,
    bq: !0,
    br: !0,
    bs: !0,
    bt: !0,
    bv: !0,
    bw: !0,
    by: !0,
    bz: !0,
    "ca-bc": !0,
    ca: !0,
    cc: !0,
    cd: !0,
    cf: !0,
    cg: !0,
    "ch-gr": !0,
    ch: !0,
    ci: !0,
    ck: !0,
    cl: !0,
    cm: !0,
    "cn-xj": !0,
    cn: !0,
    co: !0,
    cp: !0,
    cq: !0,
    cr: !0,
    cu: !0,
    cv: !0,
    cw: !0,
    cx: !0,
    cy: !0,
    cz: !0,
    de: !0,
    dg: !0,
    dj: !0,
    dk: !0,
    dm: !0,
    do: !0,
    dz: !0,
    ea: !0,
    earth: !0,
    east_african_federation: !0,
    easter_island: !0,
    "ec-w": !0,
    ec: !0,
    ee: !0,
    eg: !0,
    eh: !0,
    er: !0,
    "es-ar": !0,
    "es-ce": !0,
    "es-cn": !0,
    "es-ct": !0,
    "es-ga": !0,
    "es-ib": !0,
    "es-ml": !0,
    "es-pv": !0,
    "es-variant": !0,
    es: !0,
    "et-or": !0,
    "et-ti": !0,
    et: !0,
    eu: !0,
    european_union: !0,
    ewe: !0,
    fi: !0,
    fj: !0,
    fk: !0,
    fm: !0,
    fo: !0,
    "fr-20r": !0,
    "fr-bre": !0,
    "fr-cp": !0,
    fr: !0,
    fx: !0,
    ga: !0,
    "gb-con": !0,
    "gb-eng": !0,
    "gb-nir": !0,
    "gb-ork": !0,
    "gb-sct": !0,
    "gb-wls": !0,
    gb: !0,
    gd: !0,
    "ge-ab": !0,
    ge: !0,
    gf: !0,
    gg: !0,
    gh: !0,
    gi: !0,
    gl: !0,
    gm: !0,
    gn: !0,
    gp: !0,
    gq: !0,
    gr: !0,
    gs: !0,
    gt: !0,
    gu: !0,
    guarani: !0,
    gw: !0,
    gy: !0,
    hausa: !0,
    hk: !0,
    hm: !0,
    hmong: !0,
    hn: !0,
    hr: !0,
    ht: !0,
    hu: !0,
    ic: !0,
    id: !0,
    "id-jb": !0,
    "id-jt": !0,
    ie: !0,
    il: !0,
    im: !0,
    "in-as": !0,
    "in-gj": !0,
    "in-ka": !0,
    "in-or": !0,
    "in-tn": !0,
    in: !0,
    io: !0,
    iq: !0,
    ir: !0,
    is: !0,
    "it-23": !0,
    "it-82": !0,
    "it-88": !0,
    it: !0,
    je: !0,
    jm: !0,
    jo: !0,
    jp: !0,
    kanuri: !0,
    ke: !0,
    kg: !0,
    kh: !0,
    ki: !0,
    kikuyu: !0,
    km: !0,
    kn: !0,
    kongo: !0,
    kp: !0,
    kr: !0,
    kurdistan: !0,
    kw: !0,
    ky: !0,
    kz: !0,
    la: !0,
    lb: !0,
    lc: !0,
    li: !0,
    lk: !0,
    lr: !0,
    ls: !0,
    lt: !0,
    lu: !0,
    lv: !0,
    ly: !0,
    ma: !0,
    malayali: !0,
    manipur: !0,
    maori: !0,
    mc: !0,
    md: !0,
    me: !0,
    mf: !0,
    mg: !0,
    mh: !0,
    mizoram: !0,
    mk: !0,
    ml: !0,
    mm: !0,
    mn: !0,
    mo: !0,
    mp: !0,
    mq: !0,
    mr: !0,
    ms: !0,
    mt: !0,
    mu: !0,
    mv: !0,
    mw: !0,
    mx: !0,
    my: !0,
    mz: !0,
    na: !0,
    nato: !0,
    nc: !0,
    ne: !0,
    nf: !0,
    ng: !0,
    ni: !0,
    "nl-fr": !0,
    nl: !0,
    no: !0,
    northern_cyprus: !0,
    np: !0,
    nr: !0,
    nu: !0,
    nz: !0,
    occitania: !0,
    olympics: !0,
    om: !0,
    otomi: !0,
    pa: !0,
    pe: !0,
    pf: !0,
    pg: !0,
    ph: !0,
    "pk-jk": !0,
    "pk-sd": !0,
    pk: !0,
    pl: !0,
    pm: !0,
    pn: !0,
    pr: !0,
    ps: !0,
    "pt-20": !0,
    "pt-30": !0,
    pt: !0,
    pw: !0,
    py: !0,
    qa: !0,
    quechua: !0,
    re: !0,
    ro: !0,
    rs: !0,
    ru: !0,
    "ru-ba": !0,
    "ru-ce": !0,
    "ru-cu": !0,
    "ru-da": !0,
    "ru-ko": !0,
    "ru-ta": !0,
    "ru-ud": !0,
    rw: !0,
    sa: !0,
    sami: !0,
    sb: !0,
    sc: !0,
    sd: !0,
    se: !0,
    sg: !0,
    "sh-ac": !0,
    "sh-hl": !0,
    "sh-ta": !0,
    sh: !0,
    si: !0,
    sj: !0,
    sk: !0,
    sl: !0,
    sm: !0,
    sn: !0,
    so: !0,
    somaliland: !0,
    south_ossetia: !0,
    soviet_union: !0,
    sr: !0,
    ss: !0,
    st: !0,
    su: !0,
    sv: !0,
    sx: !0,
    sy: !0,
    sz: !0,
    ta: !0,
    tc: !0,
    td: !0,
    tf: !0,
    tg: !0,
    th: !0,
    tibet: !0,
    tj: !0,
    tk: !0,
    tl: !0,
    tm: !0,
    tn: !0,
    to: !0,
    torres_strait_islands: !0,
    tr: !0,
    transnistria: !0,
    tt: !0,
    tv: !0,
    tw: !0,
    tz: !0,
    ua: !0,
    ug: !0,
    uk: !0,
    um: !0,
    un: !0,
    united_nations: !0,
    "us-hi": !0,
    us: !0,
    uy: !0,
    uz: !0,
    va: !0,
    vc: !0,
    ve: !0,
    vg: !0,
    vi: !0,
    vn: !0,
    vu: !0,
    wf: !0,
    wiphala: !0,
    ws: !0,
    xk: !0,
    xx: !0,
    ye: !0,
    yorubaland: !0,
    yt: !0,
    za: !0,
    zm: !0,
    zw: !0,
  },
  Yv = ["countryCode", "cdnUrl"],
  Xv = function (e, t, n, r) {
    return (
      r === void 0 && (r = ""),
      tu({}, n, {
        title: n.title || e,
        height: n.height || 100,
        src:
          "" +
          (t || "https://hatscripts.github.io/circle-flags/flags/") +
          r +
          e +
          ".svg",
      })
    );
  },
  qv = function (e) {
    var t = e.countryCode,
      n = e.cdnUrl,
      r = Gv(e, Yv);
    return wf.createElement(
      "img",
      tu(
        { "data-testid": "circle-country-flag" },
        Xv(
          (function (i) {
            return Jv[i] ? i : "xx";
          })(t).toLowerCase(),
          n,
          r
        )
      )
    );
  };
const Zv = "https://api.weatherapi.com",
  rh = `${Zv}/v1`,
  ih = "0329114cb704414cbc2233320220912",
  e1 = `${rh}/forecast.json?key=${ih}`,
  t1 = `${rh}/astronomy.json?key=${ih}`,
  n1 = "&days=3",
  r1 = "&aqi=yes",
  po = (e, t) => ({ forecast: e1 + t + n1 + r1, astronomy: t1 }[e]),
  ho = (e) => {
    const { lat: t, lon: n } = e,
      r = JSON.parse(localStorage.getItem("recentLocations")),
      i = r.find((s) => s.lat === t && s.lon === n);
    Object.keys(r).length > 2 && r.pop(), i === void 0 && r.unshift(e);
    var o = JSON.stringify(r);
    localStorage.setItem("recentLocations", o);
  },
  mo = (e) => ({ type: Xp, payload: e }),
  nu = ({ data: e, cross: t }) => {
    const [n, r] = C.useState(!1),
      [i, o] = C.useState({}),
      [s, l] = C.useState(!1),
      a = C.useRef(),
      u = C.useRef(),
      { t: c } = yt(),
      d = Zr(),
      f = ss(),
      y = () => {
        r(!0);
      };
    let v;
    const w = (S) => {
        if (S.key === "Enter") {
          o({});
          const j = S.target.value;
          Tn()
            .get(
              `https://geocoding-api.open-meteo.com/v1/search?name=${j}&count=10&language=en&format=json`
            )
            .then((N) => {
              (N == null ? void 0 : N.results) !== void 0 ? o(N) : l(!0);
            })
            .catch((N) => N);
        }
      },
      k = async (S) => {
        const j = { enableHighAccuracy: !0, maximumAge: 0 };
        if (S === void 0)
          navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(m, p, j)
            : console.log("Geolocation not supported");
        else {
          const { lat_: N, lon_: L } = S,
            T = `&q=${N},${L}`,
            _ = po("forecast", T);
          await Tn()
            .get(_)
            .then((D) => {
              d(mo(D)), (v = D.location), console.log(v);
              const { name: He, country: me, lat: Ie, lon: vt } = D.location;
              ho({ name: He, country: me, lat: Ie, lon: vt });
            })
            .catch((D) => console.error(D)),
            f(`/${c("lanName")}/weather`);
        }
      };
    async function m(S) {
      const j = S.coords.latitude,
        N = S.coords.longitude,
        L = `&q=${j},${N}`,
        T = po("forecast", L);
      await Tn()
        .get(T)
        .then((_) => {
          d(mo(_)), (v = _.location);
          const { name: D, country: He, lat: me, lon: Ie } = _.location;
          ho({ name: D, country: He, lat: me, lon: Ie });
        }),
        f(`${c("lanName")}/weather`);
    }
    function p() {
      console.log("Unable to retrieve your location");
    }
    const g = () => {
        (u.current.value = ""), o({}), l(!1);
      },
      x = (S) => {
        a.current && !a.current.contains(S.target) && r(!1);
      };
    return (
      C.useEffect(
        () => (
          document.addEventListener("mousedown", x),
          () => {
            document.removeEventListener("mousedown", x);
          }
        ),
        []
      ),
      h.jsxs("div", {
        className: `${e} border-[1px] rounded-md flex items-center`,
        ref: a,
        children: [
          h.jsx("input", {
            type: "text",
            name: "Search",
            placeholder: c("search"),
            autoComplete: "off",
            className:
              "w-full h-full bg-transparent pl-12 pr-4 rounded-md focus:outline-none block text-white",
            onKeyUp: w,
            onFocus: y,
            ref: u,
          }),
          h.jsx("img", {
            src: `${zp}`,
            alt: "search-icon",
            className: "w-6 h-6  absolute left-4 pointer-events-none",
          }),
          h.jsx("div", {
            className: `absolute right-0 w-[50px] h-full   grid place-content-center cursor-pointer ${t}`,
            onClick: g,
            children: h.jsx("img", {
              src: `${Ri}`,
              alt: "search-icon",
              className: "w-6 h-6 pointer-events-none ",
            }),
          }),
          h.jsxs("div", {
            className: `${
              n ? "grid" : "hidden"
            } absolute  top-14  max-h-[60vh] w-full z-10 rounded-md bg-white border-[1px] border-white overflow-x-hidden overflow-y-auto `,
            children: [
              h.jsxs("div", {
                className:
                  "w-full backdrop-blur-3xl h-14 bg-primary/10 rounded-md hover:bg-cHover/30 duration-500 px-3 py-1 flex items-center justify-between hover:text-black text-primary cursor-pointer",
                onClick: (S) => k(),
                children: [
                  h.jsx("img", {
                    src: Fp,
                    alt: "location",
                    className: "w-6   h-6 ",
                  }),
                  h.jsx("p", {
                    className: "fixed left-12",
                    children: "Use your current location",
                  }),
                ],
              }),
              h.jsx("div", {
                className: `${
                  Object.keys(i).length === 0 ? "hidden" : "block"
                } w-full max-h-max`,
                children:
                  Object.keys(i).length > 0 &&
                  i.results.map((S) =>
                    h.jsxs(
                      "div",
                      {
                        className:
                          "backdrop-blur-3xl h-14 bg-primary/10 rounded-md hover:bg-cHover/30 duration-500 px-3 py-1 flex items-center justify-between hover:text-black text-primary mt-1 cursor-pointer",
                        onClick: (j) =>
                          k({ lat_: S.latitude, lon_: S.longitude }),
                        children: [
                          h.jsxs("p", {
                            children: [
                              S.country,
                              (S == null ? void 0 : S.admin1) !== void 0
                                ? `, ${S.admin1}`
                                : "",
                              (S == null ? void 0 : S.admin2) !== void 0
                                ? `, ${S.admin2}`
                                : "",
                            ],
                          }),
                          h.jsx(qv, {
                            countryCode: `${S.country_code.toLowerCase()}`,
                            height: 20,
                            width: 20,
                          }),
                        ],
                      },
                      S.id
                    )
                  ),
              }),
              s &&
                h.jsx("div", {
                  className:
                    "h-14  rounded-md px-3 py-1 flex items-center justify-center  text-secondary mt-1",
                  children: "No Matches Found",
                }),
            ],
          }),
        ],
      })
    );
  },
  i1 = "relative h-14 w-full border-white",
  o1 = () => {
    const [e, t] = C.useState(!1),
      [n, r] = C.useState("hidden");
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("div", {
          className:
            "sm:hidden hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer",
          onClick: (i) => {
            i.stopPropagation(), t(!e), r("flex");
          },
          children: h.jsx("img", {
            src: `${zp}`,
            className: "scale-50 object-contain pointer-events-none",
          }),
        }),
        h.jsx("div", {
          className: `${n} ${
            e ? "slide-in" : "slide-out"
          } fixed h-[calc(100vh-5rem)] w-full bottom-0 right-0 bg-primary border-t-[1px] border-t-secondary slide py-4 px-3`,
          children: h.jsx(nu, { data: i1 }),
        }),
      ],
    });
  },
  s1 = (e) => ({ type: qp, payload: e }),
  l1 = [
    {
      id: 0,
      name: "Metric",
      nombre: "Métrico",
      units: "°c, km/h, mm",
      value: "m",
    },
    {
      id: 1,
      name: "Imperial",
      nombre: "Imperial",
      units: "°f, mi/h, in",
      value: "i",
    },
  ],
  a1 = ({ data: e }) => {
    const t = Zr();
    return h.jsxs("div", {
      className:
        "absolute w-3/4 h-3/4 inset-0 m-auto grid grid-rows-auto rounded-xl font-roboto text-base sm:text-2xl  overflow-y-auto overflow-x-hidden gap-y-1",
      children: [
        h.jsx("div", {
          className: "text-center text-white text-xl",
          children: Gn("system").toUpperCase(),
        }),
        l1.map((n) =>
          h.jsxs(
            "div",
            {
              className:
                "w-full max-h-max py-2 px-2 rounded-md self-center flex justify-between items-center bg-cHover/40 hover:bg-cHover active:bg-cActive text-white/70 pointer-events-auto cursor-pointer duration-300 ",
              onClick: () => {
                localStorage.setItem("unit", n.value),
                  t(s1(n.value)),
                  e.setModalUnits(!e.modalUnits);
              },
              children: [
                h.jsx("div", { children: n[Gn("name")] }),
                h.jsx("div", { children: n.units }),
              ],
            },
            n.id
          )
        ),
      ],
    });
  },
  u1 = () => {
    const [e, t] = C.useState(!1),
      [n, r] = C.useState("hidden"),
      [i, o] = C.useState(!1),
      [s, l] = C.useState(!1),
      { width: a, height: u } = Fy();
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx(Tc, {
          data: { Cross: Ri, modal: i, setModal: o },
          children: h.jsx(Qv, {}),
        }),
        h.jsx(Tc, {
          data: { Cross: Ri, modal: s, setModal: l },
          children: h.jsx(a1, { data: { setModalUnits: l, modalUnits: s } }),
        }),
        h.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            h.jsx(o1, {}),
            h.jsxs("div", {
              className:
                "hover:bg-cHover active:bg-cActive duration-700 rounded-xl w-12 sm:w-14 sm:h-14 h-12 flex justify-center items-center cursor-pointer",
              onClick: () => {
                t(!e), r("flex");
              },
              children: [
                h.jsx("img", {
                  src: e ? Ri : R0,
                  alt: "Hamburger",
                  className: "scale-50 object-contain pointer-events-none",
                }),
                h.jsx("div", {
                  className: `${n} ${
                    e ? "slide-in" : "slide-out"
                  } fixed h-[calc(100vh-5rem)] w-full bottom-0 right-0 bg-primary border-t-[1px] border-t-secondary slide`,
                  children: h.jsxs("ul", {
                    className:
                      "list-none sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 w-full sm:my-16 sm:mx-32",
                    children: [
                      Nc[0].map((c) =>
                        h.jsx(
                          "li",
                          {
                            className: `font-roboto_condensed w-full p-4 h-20 sm:h-full flex justify-start items-center border-b-[1px] sm:border-[1px] border-b-secondary sm:border-secondary sm:rounded-xl  ${
                              c.id === 6 ? "sm:hidden" : "flex"
                            } cursor-pointer`,
                            children: h.jsxs("div", {
                              className:
                                "h-16 w-full sm:h-full flex sm:flex-col-reverse justify-between items-center sm:justify-center px-4 sm:px-0 hover:bg-cHover active:bg-cActive duration-700 rounded-xl sm:text-xl",
                              onClick: () => {
                                c.id === 1 && o(!i), c.id === 2 && l(!s), t(!e);
                              },
                              children: [
                                c[Gn("name")],
                                h.jsx("img", {
                                  src: `${(a > 768 && c.icon[1]) || c.icon[0]}`,
                                  alt: `${c.name}`,
                                  className: "w-6 h-6 sm:w-32 sm:h-32 mb-4",
                                }),
                              ],
                            }),
                          },
                          c.id
                        )
                      ),
                      Nc[1].map((c) =>
                        h.jsx(
                          "li",
                          {
                            className: `font-roboto_condensed w-full p-4 h-20 sm:h-full flex justify-start items-center border-b-[1px] sm:border-[1px] border-b-secondary sm:border-secondary sm:rounded-xl  ${
                              c.id === 6 ? "sm:hidden" : "flex"
                            } cursor-pointer`,
                            children: h.jsxs(Za, {
                              to: `/${c.href}`,
                              className:
                                "h-16 w-full sm:h-full flex sm:flex-col-reverse justify-between items-center sm:justify-center px-4 sm:px-0 hover:bg-cHover active:bg-cActive duration-700 rounded-xl sm:text-xl",
                              onClick: () => {
                                t(!e);
                              },
                              children: [
                                c[Gn("name")],
                                h.jsx("img", {
                                  src: `${(a > 768 && c.icon[1]) || c.icon[0]}`,
                                  alt: `${c.name}`,
                                  className: "w-6 h-6 sm:w-32 sm:h-32 mb-4",
                                }),
                              ],
                            }),
                          },
                          c.id
                        )
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  c1 = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2:
      "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:
      "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  },
  f1 = "relative h-10  w-2/4 border-secondary sm:flex hidden",
  d1 = () => {
    var o;
    const e = Ne((s) => s.weather),
      t = Ne((s) => s.units),
      n = (o = e == null ? void 0 : e.today) == null ? void 0 : o.cloud,
      r = e.location,
      i = e.today;
    return h.jsxs("div", {
      className:
        "w-full h-20 font-sansation bg-primary fixed top-0 left-0 flex justify-between items-center px-4 text-white",
      children: [
        h.jsxs("div", {
          className: `${c1.flexCenter} sm:gap-2 gap-1`,
          children: [
            h.jsx(Za, {
              to: "/",
              className: "cursor-pointer relative h-18 w-18",
              children: h.jsx("img", {
                src: `${Ya}`,
                alt: "Logo",
                className: "sm:w-full sm:h-full w-14 h-14",
              }),
            }),
            h.jsxs("div", {
              className: "flex flex-col justify-center items-start",
              children: [
                h.jsx("h1", {
                  className: "sm:w-max  text-base  text-secondary leading-4",
                  children: n !== void 0 && r.country,
                }),
                h.jsx("div", {
                  className: "text-xs sm:text-base font-roboto ",
                  children: n !== void 0 && r.name,
                }),
              ],
            }),
            h.jsx("div", {
              className:
                "text-white sm:text-4xl text-2xl sm:ml-3 font-roboto_condensed flex items-end",
              children: h.jsxs("div", {
                children: [
                  n !== void 0 && Math.floor(i[Er[0][0][Le[t].value]]),
                  Er[0][0][Le[t].unit],
                ],
              }),
            }),
          ],
        }),
        h.jsx(nu, {
          data: f1,
          cross: "w-10 h-10 rounded-full active:bg-cHover",
        }),
        h.jsx(u1, {}),
      ],
    });
  };
function Ge(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function sn(e) {
  return !!e && !!e[H];
}
function ln(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === S1)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Zc] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Zc]) ||
      ru(e) ||
      iu(e))
  );
}
function an(e, t, n) {
  n === void 0 && (n = !1),
    er(e) === 0
      ? (n ? Object.keys : Mn)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function er(e) {
  var t = e[H];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : ru(e)
    ? 2
    : iu(e)
    ? 3
    : 0;
}
function In(e, t) {
  return er(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function p1(e, t) {
  return er(e) === 2 ? e.get(t) : e[t];
}
function oh(e, t, n) {
  var r = er(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function sh(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function ru(e) {
  return w1 && e instanceof Map;
}
function iu(e) {
  return x1 && e instanceof Set;
}
function Gt(e) {
  return e.o || e.t;
}
function ou(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = ah(e);
  delete t[H];
  for (var n = Mn(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function su(e, t) {
  return (
    t === void 0 && (t = !1),
    lu(e) ||
      sn(e) ||
      !ln(e) ||
      (er(e) > 1 && (e.set = e.add = e.clear = e.delete = h1),
      Object.freeze(e),
      t &&
        an(
          e,
          function (n, r) {
            return su(r, !0);
          },
          !0
        )),
    e
  );
}
function h1() {
  Ge(2);
}
function lu(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function st(e) {
  var t = Gl[e];
  return t || Ge(18, e), t;
}
function m1(e, t) {
  Gl[e] || (Gl[e] = t);
}
function Wl() {
  return Br;
}
function Ds(e, t) {
  t && (st("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function go(e) {
  Kl(e), e.p.forEach(g1), (e.p = null);
}
function Kl(e) {
  e === Br && (Br = e.l);
}
function Qc(e) {
  return (Br = { p: [], l: Br, h: e, m: !0, _: 0 });
}
function g1(e) {
  var t = e[H];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function As(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || st("ES5").S(t, e, r),
    r
      ? (n[H].P && (go(t), Ge(4)),
        ln(e) && ((e = yo(t, e)), t.l || vo(t, e)),
        t.u && st("Patches").M(n[H].t, e, t.u, t.s))
      : (e = yo(t, n, [])),
    go(t),
    t.u && t.v(t.u, t.s),
    e !== lh ? e : void 0
  );
}
function yo(e, t, n) {
  if (lu(t)) return t;
  var r = t[H];
  if (!r)
    return (
      an(
        t,
        function (l, a) {
          return Gc(e, r, t, l, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return vo(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = ou(r.k)) : r.o,
      o = i,
      s = !1;
    r.i === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
      an(o, function (l, a) {
        return Gc(e, r, i, l, a, n, s);
      }),
      vo(e, i, !1),
      n && e.u && st("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function Gc(e, t, n, r, i, o, s) {
  if (sn(i)) {
    var l = yo(e, i, o && t && t.i !== 3 && !In(t.R, r) ? o.concat(r) : void 0);
    if ((oh(n, r, l), !sn(l))) return;
    e.m = !1;
  } else s && n.add(i);
  if (ln(i) && !lu(i)) {
    if (!e.h.D && e._ < 1) return;
    yo(e, i), (t && t.A.l) || vo(e, i);
  }
}
function vo(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && su(t, n);
}
function Us(e, t) {
  var n = e[H];
  return (n ? Gt(n) : e)[t];
}
function Jc(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Et(e) {
  e.P || ((e.P = !0), e.l && Et(e.l));
}
function Vs(e) {
  e.o || (e.o = ou(e.t));
}
function Ql(e, t, n) {
  var r = ru(t)
    ? st("MapSet").F(t, n)
    : iu(t)
    ? st("MapSet").T(t, n)
    : e.O
    ? (function (i, o) {
        var s = Array.isArray(i),
          l = {
            i: s ? 1 : 0,
            A: o ? o.A : Wl(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = l,
          u = Wr;
        s && ((a = [l]), (u = hr));
        var c = Proxy.revocable(a, u),
          d = c.revoke,
          f = c.proxy;
        return (l.k = f), (l.j = d), f;
      })(t, n)
    : st("ES5").J(t, n);
  return (n ? n.A : Wl()).p.push(r), r;
}
function y1(e) {
  return (
    sn(e) || Ge(22, e),
    (function t(n) {
      if (!ln(n)) return n;
      var r,
        i = n[H],
        o = er(n);
      if (i) {
        if (!i.P && (i.i < 4 || !st("ES5").K(i))) return i.t;
        (i.I = !0), (r = Yc(n, o)), (i.I = !1);
      } else r = Yc(n, o);
      return (
        an(r, function (s, l) {
          (i && p1(i.t, s) === l) || oh(r, s, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Yc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ou(e);
}
function v1() {
  function e(o, s) {
    var l = i[o];
    return (
      l
        ? (l.enumerable = s)
        : (i[o] = l =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var a = this[H];
                return Wr.get(a, o);
              },
              set: function (a) {
                var u = this[H];
                Wr.set(u, o, a);
              },
            }),
      l
    );
  }
  function t(o) {
    for (var s = o.length - 1; s >= 0; s--) {
      var l = o[s][H];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && Et(l);
            break;
          case 4:
            n(l) && Et(l);
        }
    }
  }
  function n(o) {
    for (var s = o.t, l = o.k, a = Mn(l), u = a.length - 1; u >= 0; u--) {
      var c = a[u];
      if (c !== H) {
        var d = s[c];
        if (d === void 0 && !In(s, c)) return !0;
        var f = l[c],
          y = f && f[H];
        if (y ? y.t !== d : !sh(f, d)) return !0;
      }
    }
    var v = !!s[H];
    return a.length !== Mn(s).length + (v ? 0 : 1);
  }
  function r(o) {
    var s = o.k;
    if (s.length !== o.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(s, s.length - 1);
    if (l && !l.get) return !0;
    for (var a = 0; a < s.length; a++) if (!s.hasOwnProperty(a)) return !0;
    return !1;
  }
  var i = {};
  m1("ES5", {
    J: function (o, s) {
      var l = Array.isArray(o),
        a = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), y = 0; y < d.length; y++)
              Object.defineProperty(f, "" + y, e(y, !0));
            return f;
          }
          var v = ah(d);
          delete v[H];
          for (var w = Mn(v), k = 0; k < w.length; k++) {
            var m = w[k];
            v[m] = e(m, c || !!v[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), v);
        })(l, o),
        u = {
          i: l ? 5 : 4,
          A: s ? s.A : Wl(),
          P: !1,
          I: !1,
          R: {},
          l: s,
          t: o,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, H, { value: u, writable: !0 }), a;
    },
    S: function (o, s, l) {
      l
        ? sn(s) && s[H].A === o && t(o.p)
        : (o.u &&
            (function a(u) {
              if (u && typeof u == "object") {
                var c = u[H];
                if (c) {
                  var d = c.t,
                    f = c.k,
                    y = c.R,
                    v = c.i;
                  if (v === 4)
                    an(f, function (g) {
                      g !== H &&
                        (d[g] !== void 0 || In(d, g)
                          ? y[g] || a(f[g])
                          : ((y[g] = !0), Et(c)));
                    }),
                      an(d, function (g) {
                        f[g] !== void 0 || In(f, g) || ((y[g] = !1), Et(c));
                      });
                  else if (v === 5) {
                    if ((r(c) && (Et(c), (y.length = !0)), f.length < d.length))
                      for (var w = f.length; w < d.length; w++) y[w] = !1;
                    else for (var k = d.length; k < f.length; k++) y[k] = !0;
                    for (
                      var m = Math.min(f.length, d.length), p = 0;
                      p < m;
                      p++
                    )
                      f.hasOwnProperty(p) || (y[p] = !0),
                        y[p] === void 0 && a(f[p]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
var Xc,
  Br,
  au = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  w1 = typeof Map < "u",
  x1 = typeof Set < "u",
  qc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  lh = au
    ? Symbol.for("immer-nothing")
    : (((Xc = {})["immer-nothing"] = !0), Xc),
  Zc = au ? Symbol.for("immer-draftable") : "__$immer_draftable",
  H = au ? Symbol.for("immer-state") : "__$immer_state",
  S1 = "" + Object.prototype.constructor,
  Mn =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  ah =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Mn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Gl = {},
  Wr = {
    get: function (e, t) {
      if (t === H) return e;
      var n = Gt(e);
      if (!In(n, t))
        return (function (i, o, s) {
          var l,
            a = Jc(o, s);
          return a
            ? "value" in a
              ? a.value
              : (l = a.get) === null || l === void 0
              ? void 0
              : l.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !ln(r)
        ? r
        : r === Us(e.t, t)
        ? (Vs(e), (e.o[t] = Ql(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Gt(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Gt(e));
    },
    set: function (e, t, n) {
      var r = Jc(Gt(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = Us(Gt(e), t),
          o = i == null ? void 0 : i[H];
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (sh(n, i) && (n !== void 0 || In(e.t, t))) return !0;
        Vs(e), Et(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        Us(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), Vs(e), Et(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Gt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ge(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ge(12);
    },
  },
  hr = {};
an(Wr, function (e, t) {
  hr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (hr.deleteProperty = function (e, t) {
    return hr.set.call(this, e, t, void 0);
  }),
  (hr.set = function (e, t, n) {
    return Wr.set.call(this, e[0], t, n, e[0]);
  });
var k1 = (function () {
    function e(n) {
      var r = this;
      (this.O = qc),
        (this.D = !0),
        (this.produce = function (i, o, s) {
          if (typeof i == "function" && typeof o != "function") {
            var l = o;
            o = i;
            var a = r;
            return function (w) {
              var k = this;
              w === void 0 && (w = l);
              for (
                var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), g = 1;
                g < m;
                g++
              )
                p[g - 1] = arguments[g];
              return a.produce(w, function (x) {
                var S;
                return (S = o).call.apply(S, [k, x].concat(p));
              });
            };
          }
          var u;
          if (
            (typeof o != "function" && Ge(6),
            s !== void 0 && typeof s != "function" && Ge(7),
            ln(i))
          ) {
            var c = Qc(r),
              d = Ql(r, i, void 0),
              f = !0;
            try {
              (u = o(d)), (f = !1);
            } finally {
              f ? go(c) : Kl(c);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (w) {
                    return Ds(c, s), As(w, c);
                  },
                  function (w) {
                    throw (go(c), w);
                  }
                )
              : (Ds(c, s), As(u, c));
          }
          if (!i || typeof i != "object") {
            if (
              ((u = o(i)) === void 0 && (u = i),
              u === lh && (u = void 0),
              r.D && su(u, !0),
              s)
            ) {
              var y = [],
                v = [];
              st("Patches").M(i, u, y, v), s(y, v);
            }
            return u;
          }
          Ge(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == "function")
            return function (u) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1;
                f < c;
                f++
              )
                d[f - 1] = arguments[f];
              return r.produceWithPatches(u, function (y) {
                return i.apply(void 0, [y].concat(d));
              });
            };
          var s,
            l,
            a = r.produce(i, o, function (u, c) {
              (s = u), (l = c);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (u) {
                return [u, s, l];
              })
            : [a, s, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        ln(n) || Ge(8), sn(n) && (n = y1(n));
        var r = Qc(this),
          i = Ql(this, n, void 0);
        return (i[H].C = !0), Kl(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[H],
          o = i.A;
        return Ds(o, r), As(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !qc && Ge(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var s = st("Patches").$;
        return sn(n)
          ? s(n, r)
          : this.produce(n, function (l) {
              return s(l, r);
            });
      }),
      e
    );
  })(),
  $e = new k1();
$e.produce;
$e.produceWithPatches.bind($e);
$e.setAutoFreeze.bind($e);
$e.setUseProxies.bind($e);
$e.applyPatches.bind($e);
$e.createDraft.bind($e);
$e.finishDraft.bind($e);
function Kr(e) {
  "@babel/helpers - typeof";
  return (
    (Kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kr(e)
  );
}
function C1(e, t) {
  if (Kr(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Kr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E1(e) {
  var t = C1(e, "string");
  return Kr(t) === "symbol" ? t : String(t);
}
function N1(e, t, n) {
  return (
    (t = E1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ef(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ef(Object(n), !0).forEach(function (r) {
          N1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ef(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function de(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var nf = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Hs = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  wo = {
    INIT: "@@redux/INIT" + Hs(),
    REPLACE: "@@redux/REPLACE" + Hs(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Hs();
    },
  };
function j1(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function uh(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(de(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(de(1));
    return n(uh)(e, t);
  }
  if (typeof e != "function") throw new Error(de(2));
  var i = e,
    o = t,
    s = [],
    l = s,
    a = !1;
  function u() {
    l === s && (l = s.slice());
  }
  function c() {
    if (a) throw new Error(de(3));
    return o;
  }
  function d(w) {
    if (typeof w != "function") throw new Error(de(4));
    if (a) throw new Error(de(5));
    var k = !0;
    return (
      u(),
      l.push(w),
      function () {
        if (k) {
          if (a) throw new Error(de(6));
          (k = !1), u();
          var p = l.indexOf(w);
          l.splice(p, 1), (s = null);
        }
      }
    );
  }
  function f(w) {
    if (!j1(w)) throw new Error(de(7));
    if (typeof w.type > "u") throw new Error(de(8));
    if (a) throw new Error(de(9));
    try {
      (a = !0), (o = i(o, w));
    } finally {
      a = !1;
    }
    for (var k = (s = l), m = 0; m < k.length; m++) {
      var p = k[m];
      p();
    }
    return w;
  }
  function y(w) {
    if (typeof w != "function") throw new Error(de(10));
    (i = w), f({ type: wo.REPLACE });
  }
  function v() {
    var w,
      k = d;
    return (
      (w = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(de(11));
          function g() {
            p.next && p.next(c());
          }
          g();
          var x = k(g);
          return { unsubscribe: x };
        },
      }),
      (w[nf] = function () {
        return this;
      }),
      w
    );
  }
  return (
    f({ type: wo.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: y }),
    (r[nf] = v),
    r
  );
}
function P1(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: wo.INIT });
    if (typeof r > "u") throw new Error(de(12));
    if (typeof n(void 0, { type: wo.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(de(13));
  });
}
function ch(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    s;
  try {
    P1(n);
  } catch (l) {
    s = l;
  }
  return function (a, u) {
    if ((a === void 0 && (a = {}), s)) throw s;
    for (var c = !1, d = {}, f = 0; f < o.length; f++) {
      var y = o[f],
        v = n[y],
        w = a[y],
        k = v(w, u);
      if (typeof k > "u") throw (u && u.type, new Error(de(14)));
      (d[y] = k), (c = c || k !== w);
    }
    return (c = c || o.length !== Object.keys(a).length), c ? d : a;
  };
}
function xo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function L1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(de(15));
        },
        s = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(s);
        });
      return (
        (o = xo.apply(void 0, l)(i.dispatch)),
        tf(tf({}, i), {}, { dispatch: o })
      );
    };
  };
}
function fh(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (s) {
      return function (l) {
        return typeof l == "function" ? l(i, o, e) : s(l);
      };
    };
  };
  return t;
}
var dh = fh();
dh.withExtraArgument = fh;
const rf = dh;
var ph =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  O1 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        s;
      return (
        (s = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );
      function l(u) {
        return function (c) {
          return a([u, c]);
        };
      }
      function a(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  u[0] & 2
                    ? i.return
                    : u[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, u[1])).done)
            )
              return o;
            switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
              case 0:
              case 1:
                o = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (i = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = u);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(u);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = t.call(e, n);
          } catch (c) {
            (u = [6, c]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  Qr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  _1 = Object.defineProperty,
  $1 = Object.defineProperties,
  b1 = Object.getOwnPropertyDescriptors,
  of = Object.getOwnPropertySymbols,
  R1 = Object.prototype.hasOwnProperty,
  T1 = Object.prototype.propertyIsEnumerable,
  sf = function (e, t, n) {
    return t in e
      ? _1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  zn = function (e, t) {
    for (var n in t || (t = {})) R1.call(t, n) && sf(e, n, t[n]);
    if (of)
      for (var r = 0, i = of(t); r < i.length; r++) {
        var n = i[r];
        T1.call(t, n) && sf(e, n, t[n]);
      }
    return e;
  },
  Bs = function (e, t) {
    return $1(e, b1(t));
  },
  I1 = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (a) {
          try {
            l(n.next(a));
          } catch (u) {
            i(u);
          }
        },
        s = function (a) {
          try {
            l(n.throw(a));
          } catch (u) {
            i(u);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(o, s);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  M1 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? xo
              : xo.apply(null, arguments);
        };
function z1(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Fn(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error("prepareAction did not return an object");
      return zn(
        zn({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
var F1 = (function (e) {
    ph(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Qr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Qr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  D1 = (function (e) {
    ph(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Qr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Qr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function A1(e) {
  return typeof e == "boolean";
}
function U1() {
  return function (t) {
    return V1(t);
  };
}
function V1(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var r = new F1();
  return (
    n && (A1(n) ? r.push(rf) : r.push(rf.withExtraArgument(n.extraArgument))), r
  );
}
var H1 = !0;
function B1(e) {
  var t = U1(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    s = o === void 0 ? t() : o,
    l = n.devTools,
    a = l === void 0 ? !0 : l,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    d = n.enhancers,
    f = d === void 0 ? void 0 : d,
    y;
  if (typeof i == "function") y = i;
  else if (z1(i)) y = ch(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = s;
  typeof v == "function" && (v = v(t));
  var w = L1.apply(void 0, v),
    k = xo;
  a && (k = M1(zn({ trace: !H1 }, typeof a == "object" && a)));
  var m = new D1(w),
    p = m;
  Array.isArray(f) ? (p = Qr([w], f)) : typeof f == "function" && (p = f(m));
  var g = k.apply(void 0, p);
  return uh(y, c, g);
}
var W1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  K1 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += W1[(Math.random() * 64) | 0];
    return t;
  },
  Q1 = ["name", "message", "stack", "code"],
  Ws = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  lf = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  G1 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = Q1; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var i = Fn(t + "/fulfilled", function (u, c, d, f) {
        return {
          payload: u,
          meta: Bs(zn({}, f || {}), {
            arg: d,
            requestId: c,
            requestStatus: "fulfilled",
          }),
        };
      }),
      o = Fn(t + "/pending", function (u, c, d) {
        return {
          payload: void 0,
          meta: Bs(zn({}, d || {}), {
            arg: c,
            requestId: u,
            requestStatus: "pending",
          }),
        };
      }),
      s = Fn(t + "/rejected", function (u, c, d, f, y) {
        return {
          payload: f,
          error: ((r && r.serializeError) || G1)(u || "Rejected"),
          meta: Bs(zn({}, y || {}), {
            arg: d,
            requestId: c,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          }),
        };
      }),
      l =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function u() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (u.prototype.abort = function () {}), u;
            })();
    function a(u) {
      return function (c, d, f) {
        var y = r != null && r.idGenerator ? r.idGenerator(u) : K1(),
          v = new l(),
          w;
        function k(p) {
          (w = p), v.abort();
        }
        var m = (function () {
          return I1(this, null, function () {
            var p, g, x, S, j, N, L;
            return O1(this, function (T) {
              switch (T.label) {
                case 0:
                  return (
                    T.trys.push([0, 4, , 5]),
                    (S =
                      (p = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : p.call(r, u, { getState: d, extra: f })),
                    Y1(S) ? [4, S] : [3, 2]
                  );
                case 1:
                  (S = T.sent()), (T.label = 2);
                case 2:
                  if (S === !1 || v.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (j = new Promise(function (_, D) {
                      return v.signal.addEventListener("abort", function () {
                        return D({
                          name: "AbortError",
                          message: w || "Aborted",
                        });
                      });
                    })),
                    c(
                      o(
                        y,
                        u,
                        (g = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : g.call(
                              r,
                              { requestId: y, arg: u },
                              { getState: d, extra: f }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        j,
                        Promise.resolve(
                          n(u, {
                            dispatch: c,
                            getState: d,
                            extra: f,
                            requestId: y,
                            signal: v.signal,
                            abort: k,
                            rejectWithValue: function (_, D) {
                              return new Ws(_, D);
                            },
                            fulfillWithValue: function (_, D) {
                              return new lf(_, D);
                            },
                          })
                        ).then(function (_) {
                          if (_ instanceof Ws) throw _;
                          return _ instanceof lf
                            ? i(_.payload, y, u, _.meta)
                            : i(_, y, u);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (x = T.sent()), [3, 5];
                case 4:
                  return (
                    (N = T.sent()),
                    (x =
                      N instanceof Ws
                        ? s(null, y, u, N.payload, N.meta)
                        : s(N, y, u)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (L =
                      r &&
                      !r.dispatchConditionRejection &&
                      s.match(x) &&
                      x.meta.condition),
                    L || c(x),
                    [2, x]
                  );
              }
            });
          });
        })();
        return Object.assign(m, {
          abort: k,
          requestId: y,
          arg: u,
          unwrap: function () {
            return m.then(J1);
          },
        });
      };
    }
    return Object.assign(a, {
      pending: o,
      rejected: s,
      fulfilled: i,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function J1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Y1(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var uu = "listenerMiddleware";
Fn(uu + "/add");
Fn(uu + "/removeAll");
Fn(uu + "/remove");
var af;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
v1();
const X1 = localStorage.getItem("language") || "en";
function q1(e = X1, t) {
  switch (t.type) {
    case Yp:
      return (e = t.payload);
    default:
      return e;
  }
}
const Z1 = { today: {}, daily: [], hourly: {}, astronomy: {}, location: {} };
function ew(e = Z1, t) {
  switch (t.type) {
    case Xp:
      return {
        ...e,
        today: t.payload.current,
        daily: t.payload.forecast.forecastday,
        hourly: t.payload.forecast.forecastday[0],
        location: t.payload.location,
      };
    case Dy:
      return { ...e, atronomy: t.payload };
    default:
      return e;
  }
}
const tw = localStorage.getItem("unit") || "m";
function nw(e = tw, t) {
  switch (t.type) {
    case qp:
      return (e = t.payload);
    default:
      return e;
  }
}
const rw = ch({ language: q1, weather: ew, units: nw }),
  iw = B1({ reducer: rw });
const as = ({ children: e, data: t }) =>
    h.jsx("div", {
      className: `absolute top-32 sm:top-36  left-0 w-full  p-4 sm:p-0 sm:px-16 gap-4 sm:mt-3 sm:pb-4 text-white ${t} sm:h-[600px] h-[800px]`,
      children: e,
    }),
  ow = () =>
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className:
          "w-full h-auto border-[1px] border-white rounded-xl p-4 sm:px-6 sm:py-4 flex flex-col gap-5 font-roboto_condensed",
        children: [
          h.jsx("div", {
            className:
              "border-b-white border-b-[1px] text-center text-secondary text-xl",
            children: "BOLIVIA",
          }),
          h.jsxs("div", {
            className: "flex flex-col gap-2 justify-start",
            children: [
              h.jsx("div", {
                className:
                  "border-white border-[1px] rounded-md px-2 h-8 grid place-content-center cursor-pointer hover:bg-secondary hover:text-primary hover:border-none duration-700",
                children: "SantaCruz",
              }),
              h.jsx("div", {
                className:
                  "border-white border-[1px] rounded-md px-2 h-8 grid place-content-center cursor-pointer hover:bg-secondary hover:text-primary hover:border-none duration-700",
                children: "Cochabamba",
              }),
              h.jsx("div", {
                className:
                  "border-white border-[1px] rounded-md px-2 h-8 grid place-content-center cursor-pointer hover:bg-secondary hover:text-primary hover:border-none duration-700",
                children: "La Paz",
              }),
            ],
          }),
        ],
      }),
    }),
  cu = ({ children: e }) =>
    h.jsx("div", {
      className: "absolute w-full top-20 left-0 px-4 sm:px-16 text-white",
      children: e,
    }),
  sw = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-4",
  lw = () =>
    h.jsxs(h.Fragment, {
      children: [
        h.jsx(cu, {
          children: h.jsx("div", {
            className:
              "flex w-full h-11 sm:h-14 justify-center items-center font-roboto_condensed sm:text-2xl text-base border-b-white border-b-[1px]",
            children: "SAVED LOCATIONS",
          }),
        }),
        h.jsx(as, { data: sw, children: h.jsx(ow, {}) }),
      ],
    }),
  aw = () =>
    h.jsx(h.Fragment, {
      children: h.jsx(cu, {
        children: h.jsx("div", {
          className:
            "flex w-full h-11 sm:h-14 justify-center items-center font-roboto_condensed sm:text-2xl text-base border-b-white border-b-[1px]",
          children: "MAPS",
        }),
      }),
    }),
  uw = () => {
    const e = Zn();
    Ne((n) => n.weather);
    let t = e.pathname.slice(1);
    return h.jsx("ul", {
      className:
        "flex  w-full h-11 sm:h-14 justify-around items-center font-roboto_condensed text-base border-b-white border-b-[1px]",
      children: z0.map((n) =>
        h.jsx(
          "li",
          {
            className: `${
              t.includes(n.href) ? "text-secondary" : "text-white"
            } cursor-pointer sm:text-2xl text-base transition-colors duration-500 `,
            children: h.jsx(Za, {
              to: `/${Gn("lanName")}/weather/${n.href}`,
              children: n[Gn("name")],
            }),
          },
          n.id
        )
      ),
    });
  },
  cw = () =>
    h.jsxs(h.Fragment, {
      children: [h.jsx(cu, { children: h.jsx(uw, {}) }), h.jsx(jy, {})],
    }),
  Xe = {
    1e3: {
      day: "wi-day-sunny",
      night: "wi-night-clear",
      es: "Despejado",
      en: "Clear",
    },
    1003: {
      day: "wi-day-sunny-overcast",
      night: "wi-night-partly-cloudy",
      es: "Parcialmente Nublado",
      en: "Partly Cloudy",
    },
    1006: {
      day: "wi-day-cloudy-high",
      night: "wi-night-cloudy-high",
      es: "Nublado",
      en: "Cloudy",
    },
    1009: {
      day: "wi-cloudy",
      night: "wi-cloudy",
      es: "Totalmente Nublado",
      en: "Overcast",
    },
    1030: {
      day: "wi-day-fog",
      night: "wi-night-fog",
      es: "Neblina",
      en: "Mist",
    },
    1063: {
      day: "wi-day-showers",
      night: "wi-night-showers",
      es: "Posibilidad de Lluvia en Parches",
      en: "Patchy Rain Possible",
    },
    1066: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Posibilidad de Nevadas Dispersas",
      en: "Patchy Snow Possible",
    },
    1069: {
      day: "wi-day-sleet",
      night: "wi-night-sleet",
      es: "Posibilidad de Lluvia y Nevadas Dispersas",
      en: "Patchy Sleet Possible",
    },
    1072: {
      day: "wi-day-rain-wind",
      night: "wi-night-rain-wind",
      es: "Posible Llovizna Helada",
      en: "Patchy freezing drizzle possible",
    },
    1087: {
      day: "wi-day-lightning",
      night: "wi-night-lightning",
      es: "Posibilidad de Tormentas Electricas",
      en: "Thundery outbreaks possible",
    },
    1114: {
      day: "wi-day-snow-wind",
      night: "wi-night-snow-wind",
      es: "Nieve con Ventiscas",
      en: "Blowing Snow",
    },
    1117: {
      day: "wi-day-snow-wind",
      night: "wi-night-alt-snow-wind",
      es: "Ventiscas",
      en: "Blizzard",
    },
    1135: { day: "wi-fog", night: "wi-fog", es: "Niebla", en: "Fog" },
    1147: {
      day: "wi-fog",
      night: "wi-fog",
      es: "Niebla Helada",
      en: "Freezing Fog",
    },
    1150: {
      day: "wi-day-sprinkle",
      night: "wi-night-sprinkle",
      es: "Llovizna Ligera Irregular",
      en: "Patchy Light Drizzle",
    },
    1153: {
      day: "wi-day-sprinkle",
      night: "wi-night-sprinkle",
      es: "Llovizna Ligera",
      en: "Light Drizzle",
    },
    1168: {
      day: "wi-showers",
      night: "wi-showers",
      es: "Llovizna Helada",
      en: "Freezing Drizzle",
    },
    1171: {
      day: "wi-hail",
      night: "wi-hail",
      es: "Fuerte Llovizna Helada",
      en: "Heavy Freezing Drizzle",
    },
    1180: {
      day: "wi-day-rain",
      night: "wi-night-rain",
      es: "Lluvia Ligera Dispersa",
      en: "Patchy Light Rain",
    },
    1183: {
      day: "wi-rain",
      night: "wi-rain",
      es: "Lluvia Ligera",
      en: "Ligth Rain",
    },
    1186: {
      day: "wi-day-rain",
      night: "wi-night-rain",
      es: "Lluvia Moderada en Ocasiones",
      en: "Moderate Rain at Times",
    },
    1189: {
      day: "wi-rain",
      night: "wi-rain",
      es: "Lluvia Moderada",
      en: "Moderate Rain",
    },
    1192: {
      day: "wi-day-rain",
      night: "wi-night-rain",
      es: "Lluvia Fuerte en Ocasiones",
      en: "Heavy Rain at Times",
    },
    1195: {
      day: "wi-rain",
      night: "wi-rain",
      es: "Lluvia Fuerte",
      en: "Heavy Rain",
    },
    1198: {
      day: "wi-rain",
      night: "wi-rain",
      es: "Ligera Lluvia Helada",
      en: "Light Freezing Rain",
    },
    1201: {
      day: "wi-rain",
      night: "wi-rain",
      es: "Lluvia Helada Moderada o Fuerte",
      en: "Moderate or heavy freezing rain",
    },
    1204: {
      day: "wi-sleet",
      night: "wi-sleet",
      es: "Aguanieve Ligera",
      en: "Light Sleet",
    },
    1207: {
      day: "wi-sleet",
      night: "wi-sleet",
      es: "Aguanieve Moderada o Fuerte",
      en: "Moderate or Heavy Sleet",
    },
    1210: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Nieve Ligera en Parches",
      en: "Patchy Light Snow",
    },
    1213: {
      day: "wi-snow",
      night: "wi-snow",
      es: "Nieve Ligera",
      en: "Light Snow",
    },
    1216: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Nieve moderada en Parches",
      en: "Patchy Moderate Snow",
    },
    1219: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Nieve Moderada",
      en: "Moderate Snow",
    },
    1222: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Nieve Fuerte en Parches",
      en: "Patchy Heavy Snow",
    },
    1225: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Nieve Fuerte",
      en: "Heavy Snow",
    },
    1237: {
      day: "wi-hail",
      night: "wi-hail",
      es: "Granizo",
      en: "Ice Pellets",
    },
    1240: {
      day: "wi-day-showers",
      night: "wi-night-showers",
      es: "Chubascos Ligeros",
      en: "Light Rain Showers",
    },
    1243: {
      day: "wi-day-showers",
      night: "wi-night-showers",
      es: "Chubascos Moderados o Fuertes",
      en: "Patchy light snow",
    },
    1246: {
      day: "wi-day-showers",
      night: "wi-night-showers",
      es: "Chubascos Torrenciales",
      en: "Torrential Rain Showers",
    },
    1249: {
      day: "wi-day-sleet",
      night: "wi-night-sleet",
      es: "Chubascos de Aguanieve Ligeros",
      en: "Light Sleet Showers",
    },
    1252: {
      day: "wi-day-sleet",
      night: "wi-night-sleet",
      es: "Chubascos de Aguanieve Moderados o Fuertes",
      en: "Moderate or heavy sleet showers",
    },
    1255: {
      day: "wi-day-sleet",
      night: "wi-night-sleet",
      es: "Chubascos de Nieve Ligeros",
      en: "Light snow showers",
    },
    1258: {
      day: "wi-day-snow",
      night: "wi-night-snow",
      es: "Chubascos de Nieve Moderados o Fuertes",
      en: "Moderate or heavy snow showers",
    },
    1261: {
      day: "wi-day-hail",
      night: "wi-night-hail",
      es: "Chubascos Ligeros de Granizo",
      en: "Light showers of ice pellets",
    },
    1264: {
      day: "wi-day-hail",
      night: "wi-night-hail",
      es: "Chubascos de Granizo Moderados o Fuertes",
      en: "Moderate or Heavy showers of ice pellets",
    },
    1273: {
      day: "wi-day-thunderstorm",
      night: "wi-night-thunderstorm",
      es: "Lluvia Ligera Dispersa con Truenos",
      en: "Patchy Light Rain with thunder",
    },
    1276: {
      day: "wi-thunderstorm",
      night: "wi-thunderstorm",
      es: "LLuvia Moderada o Fuerte con Truenos",
      en: "Moderate or heavy rain with thunder",
    },
    1279: {
      day: "wi-day-snow-thunderstorm",
      night: "wi-night-snow-thunderstorm",
      es: "Nieve Ligera en Parches con Truenos",
      en: "Patchy light snow with thunder",
    },
    1282: {
      day: "wi-day-snow-thunderstorm",
      night: "wi-night-snow-thunderstorm",
      es: "Nieve Moderada o Fuerte con Truenos",
      en: "Moderate or heavy snow with thunder",
    },
  },
  fw = () => {
    const { t: e } = yt(),
      t = Ne((l) => l.weather),
      n = Ne((l) => l.units),
      r = t.today,
      i = new Date(Date.now()),
      o = { weekday: "long", month: "long", day: "numeric" },
      s = i.toLocaleDateString("en-En", o);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("div", {
          className: "w-full  border-white border-[1px] rounded-xl ",
          children: h.jsxs("div", {
            className:
              "h-full mx-6 flex flex-col  py-6 sm:py-8 justify-between items-center",
            children: [
              h.jsxs("div", {
                className: "text-center",
                children: [
                  h.jsx("div", {
                    className: "text-2xl sm:text-4xl",
                    children: Xe[`${r.condition.code}`][e("lanName")],
                  }),
                  h.jsx("p", {
                    className: "text-base sm:text-2xl text-white/60",
                    children: s,
                  }),
                ],
              }),
              h.jsx("i", {
                className: `wi ${
                  r.is_day === 0
                    ? Xe[`${r.condition.code}`].night
                    : Xe[`${r.condition.code}`].day
                } text-secondary text-[130px] sm:text-[200px]`,
              }),
              h.jsxs("div", {
                className: "flex items-center justify-center w-full box-border",
                children: [
                  h.jsxs("div", {
                    className: "text-4xl sm:text-6xl relative",
                    children: [
                      Math.floor(r[Er[0][0][Le[n].value]]),
                      " ",
                      "",
                      Er[0][0][Le[n].unit],
                    ],
                  }),
                  h.jsx("div", {
                    className: "text-3xl sm:text-4xl text-center",
                  }),
                ],
              }),
            ],
          }),
        }),
        h.jsxs("div", {
          className:
            "w-full h-full border-white border-[1px] rounded-xl sm:h-[600px] flex flex-col justify-evenly px-4 sm:px-6",
          children: [
            Er[1].map((l, a) =>
              h.jsxs(
                "div",
                {
                  className:
                    "flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ",
                  children: [
                    h.jsx("div", { children: l[e("name")] }),
                    h.jsxs("div", {
                      children: [
                        Math.ceil(r[l[Le[n].value]]),
                        " ",
                        "",
                        " ",
                        l[Le[n].unit],
                      ],
                    }),
                  ],
                },
                a
              )
            ),
            h.jsxs("div", {
              className:
                "flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ",
              children: [
                h.jsx("div", { children: e("aqi") }),
                h.jsxs("div", {
                  className: `text-[${
                    jc(r.air_quality["us-epa-index"]).color
                  }]`,
                  children: [
                    r.air_quality["us-epa-index"],
                    " ",
                    " - ",
                    jc(r.air_quality["us-epa-index"])[e("means")],
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className:
                "flex justify-between items-stretch border-b-[1px] border-b-white text-base sm:text-2xl ",
              children: [
                h.jsx("div", { children: e("uv") }),
                h.jsxs("div", {
                  className: `text-[${Qn(r.uv).color}]`,
                  children: [r.uv, " ", " - ", " ", Qn(r.uv)[e("means")]],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  fu = () =>
    h.jsxs("div", {
      className:
        "h-screen w-full flex justify-center items-center absolute left-0 top-0",
      children: [
        h.jsx("img", {
          src: b0,
          alt: "scale-50 sm:scale-75",
          className: "absolute w-14",
        }),
        h.jsx("img", {
          src: Ya,
          alt: "loader",
          className: "animate-pulse w-14 absolute",
        }),
      ],
    }),
  dw = "grid sm:grid-cols-2 grid-cols-1",
  uf = () => {
    var n;
    const t = (n = Ne((r) => r.weather).today) == null ? void 0 : n.cloud;
    return h.jsx(h.Fragment, {
      children:
        t === void 0
          ? h.jsx(fu, {})
          : h.jsx(as, { data: dw, children: h.jsx(fw, {}) }),
    });
  },
  hh = ({ children: e }) =>
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className:
          "w-full h-[275px] border-[1px] border-white rounded-xl p-4 sm:px-6 sm:py-4 flex flex-col justify-between font-roboto_condensed",
        children: [
          h.jsx("div", {
            className: "flex justify-between items-center",
            children: e[0],
          }),
          h.jsx("div", {
            className: "w-fulrounded-xl flex flex-col justify-around gap-y-1",
          }),
          e[1],
        ],
      }),
    }),
  pw = ({ data: e }) => {
    const { t } = yt(),
      n = Ne((l) => l.units),
      r = e.date,
      i = new Date(r.replace(/-/g, "/").replace(/T.+/, "")),
      o = i.toLocaleDateString(t("lang"), { weekday: "long" }).slice(0, 3),
      s = i.toLocaleDateString(t("lang"), { month: "numeric", day: "numeric" });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs("div", { className: "", children: [o, " ", s] }),
        h.jsxs("div", {
          className: "text-center",
          children: [
            h.jsx("div", {
              children: Xe[`${e.day.condition.code}`][t("lanName")],
            }),
            h.jsxs("div", { children: [e.day.daily_chance_of_rain, "%"] }),
          ],
        }),
        h.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            h.jsxs("div", {
              className: "flex items-end",
              children: [
                h.jsxs("div", {
                  children: [Math.floor(e.day[Dl[0][0][Le[n].value]]), "°/"],
                }),
                h.jsxs("div", {
                  className: "text-white/60 text-xs",
                  children: [Math.floor(e.day[Dl[0][1][Le[n].value]]), "°"],
                }),
              ],
            }),
            h.jsx("i", {
              className: `wi ${
                e.astro.is_sun_up === 0
                  ? Xe[`${e.day.condition.code}`].night
                  : Xe[`${e.day.condition.code}`].day
              }  text-secondary text-2xl`,
            }),
          ],
        }),
      ],
    });
  },
  hw = ({ data: e }) => {
    const t = Ne((r) => r.units),
      { t: n } = yt();
    return h.jsxs(h.Fragment, {
      children: [
        Dl[1].map((r, i) =>
          h.jsxs(
            "div",
            {
              className:
                "flex justify-between border-b-[1px] border-b-white text-base",
              children: [
                h.jsx("div", { children: r[n("name")] }),
                h.jsxs("div", {
                  children: [
                    Math.floor(e.day[r[Le[t].value]]),
                    " ",
                    r[Le[t].unit],
                  ],
                }),
              ],
            },
            i
          )
        ),
        h.jsxs("div", {
          className:
            "flex justify-between border-b-[1px] border-b-white text-base",
          children: [
            h.jsx("div", { children: n("uv") }),
            h.jsxs("div", {
              className: `text-[${Qn(e.day.uv).color}]`,
              children: [e.day.uv, " ", " - ", " ", Qn(e.day.uv).means],
            }),
          ],
        }),
      ],
    });
  },
  mw = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1",
  gw = () => {
    const t = Ne((n) => n.weather).daily;
    return h.jsx(h.Fragment, {
      children:
        t.length === 0
          ? h.jsx(fu, {})
          : h.jsx(as, {
              data: mw,
              children: t.map((n, r) =>
                h.jsxs(
                  hh,
                  {
                    children: [h.jsx(pw, { data: n }), h.jsx(hw, { data: n })],
                  },
                  r
                )
              ),
            }),
    });
  },
  yw = ({ data: e }) => {
    const { t } = yt(),
      n = Ne((l) => l.units),
      r = e.time,
      s = new Date(r.replace(/-/g, "/").replace(/T.+/, ""))
        .toLocaleDateString("en-En", { hour: "numeric" })
        .slice(-5)
        .trim();
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("div", { className: "", children: s }),
        h.jsxs("div", {
          className: "text-center",
          children: [
            h.jsx("div", { children: Xe[`${e.condition.code}`][t("lanName")] }),
            h.jsxs("div", { children: [e.chance_of_rain, "%"] }),
          ],
        }),
        h.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            h.jsxs("div", {
              children: [Math.floor(e[Dp[0][Le[n].value]]), "°"],
            }),
            h.jsx("i", {
              className: `wi ${
                e.is_day === 0
                  ? Xe[`${e.condition.code}`].night
                  : Xe[`${e.condition.code}`].day
              } text-secondary  text-2xl`,
            }),
          ],
        }),
      ],
    });
  },
  vw = ({ data: e }) => {
    const t = Ne((r) => r.units),
      { t: n } = yt();
    return h.jsxs(h.Fragment, {
      children: [
        Dp[1].map((r, i) =>
          h.jsxs(
            "div",
            {
              className:
                "flex justify-between border-b-[1px] border-b-white text-base",
              children: [
                h.jsx("div", { children: r[n("name")] }),
                h.jsxs("div", {
                  children: [Math.floor(e[r[Le[t].value]]), " ", r[Le[t].unit]],
                }),
              ],
            },
            i
          )
        ),
        h.jsxs("div", {
          className:
            "flex justify-between border-b-[1px] border-b-white text-base",
          children: [
            h.jsx("div", { children: n("uv") }),
            h.jsxs("div", {
              className: `text-[${Qn(e.uv).color}]`,
              children: [e.uv, " ", " - ", Qn(e.uv)[n("means")]],
            }),
          ],
        }),
      ],
    });
  },
  ww = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-4",
  xw = () => {
    var n;
    const e = Ne((r) => r.weather),
      t = (n = e == null ? void 0 : e.hourly) == null ? void 0 : n.hour;
    return h.jsx(h.Fragment, {
      children:
        t === void 0
          ? h.jsx(fu, {})
          : h.jsx(as, {
              data: ww,
              children: t.map((r, i) =>
                h.jsxs(
                  hh,
                  {
                    children: [h.jsx(yw, { data: r }), h.jsx(vw, { data: r })],
                  },
                  i
                )
              ),
            }),
    });
  },
  Sw = () =>
    h.jsxs("div", {
      className:
        "grid place-content-center  w-full h-[100vh] font-sansation text-center",
      children: [
        h.jsx("h1", {
          className: "text-white text-9xl sm:text-[256px]",
          children: "404",
        }),
        h.jsx("h2", {
          className: "text-white text-2xl sm:text-6xl",
          children: "Page not found",
        }),
      ],
    }),
  kw = "relative h-14 w-4/5 border-white",
  Cw = () => {
    var u;
    const e = Ne((c) => c.weather),
      t = Zr(),
      n = ss(),
      { t: r } = yt(),
      i = e.today,
      o = e.location;
    let s = JSON.parse(localStorage.getItem("recentLocations"));
    const l = () => {
        n(`${r("lanName")}/weather`);
        const { name: c, country: d, lat: f, lon: y } = e.location;
        ho({ name: c, country: d, lat: f, lon: y });
      },
      a = async (c) => {
        const { lat: d, lon: f } = c,
          y = `&q=${d},${f}`,
          v = po("forecast", y);
        await Tn()
          .get(v)
          .then((w) => {
            t(mo(w)), w.location;
            const { name: k, country: m, lat: p, lon: g } = w.location;
            ho({ name: k, country: m, lat: p, lon: g });
          })
          .catch((w) => console.error(w)),
          n(`/${r("lanName")}/weather`);
      };
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs("div", {
          className: "w-full flex items-center font-sansation pl-2 py-3",
          children: [
            h.jsx("img", {
              src: `${Ya}`,
              alt: "Logo",
              className: "scale-75 sm:scale-105",
            }),
            h.jsx("h1", {
              className:
                "sm:text-xl text-base leading-none text-secondary -ml-1 sm:ml-2",
              children: "CLIMATE",
            }),
          ],
        }),
        h.jsx("div", {
          className: "w-full grid place-content-center sm:my-6 my-0 mb-6",
          children: h.jsxs("div", {
            className:
              "w-[90vw]  sm:w-[80vw] h-[600px]  rounded-xl backdrop-blur-3xl bg-cHover/30 flex flex-col items-center justify-center sm:gap-y-3 gap-y-2",
            children: [
              h.jsx(nu, {
                data: kw,
                cross:
                  "bg-white active:shadow-inner active:shadow-primary/50 rounded-tr-[4px] rounded-br-[4px]",
              }),
              h.jsx("div", {
                className: "text-center text-xs text-white font-roboto",
                children: "RECENT LOCATIONS",
              }),
              h.jsxs("div", {
                className:
                  "w-4/5 h-[75%] grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-4 gap-1 text-white font-roboto",
                children: [
                  h.jsx("div", {
                    className:
                      "backdrop-blur-3xl bg-cHover/10 rounded-md px-4 py-2 sm:p-5 font-roboto grid grid-cols-2 cursor-pointer",
                    onClick: l,
                    children:
                      ((u = e.today) == null ? void 0 : u.cloud) !== void 0 &&
                      h.jsxs(h.Fragment, {
                        children: [
                          h.jsxs("div", {
                            className: "flex flex-col justify-between",
                            children: [
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h1", {
                                    className: "text-base sm:text-xl",
                                    children: o.name,
                                  }),
                                  h.jsx("p", {
                                    className: "text-xs text-white/60",
                                    children: o.country,
                                  }),
                                ],
                              }),
                              h.jsxs("div", {
                                children: [
                                  h.jsxs("div", {
                                    className: "text-base sm:text-xl",
                                    children: [Math.floor(i.temp_c), "°"],
                                  }),
                                  h.jsxs("p", {
                                    className: "text-xs text-white/60",
                                    children: [
                                      "Feels Like",
                                      Math.floor(i.feelslike_c),
                                      "°",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsx("div", {
                            className: "flex justify-end items-center",
                            children: h.jsx("i", {
                              className: `wi ${
                                i.is_day === 0
                                  ? Xe[`${i.condition.code}`].night
                                  : Xe[`${i.condition.code}`].day
                              } text-secondary text-[50px] sm:text-[90px] md:text-[120px] leading-none`,
                            }),
                          }),
                        ],
                      }),
                  }),
                  (s == null ? void 0 : s.length) !== void 0 &&
                    s.map((c, d) =>
                      h.jsx(
                        "div",
                        {
                          className:
                            "backdrop-blur-3xl bg-cHover/10 rounded-md px-4 py-2 sm:p-5 font-roboto grid grid-cols-2 cursor-pointer ",
                          onClick: (f) => a({ lat: c.lat, lon: c.lon }),
                          children: h.jsxs("div", {
                            className: "flex flex-col justify-between",
                            children: [
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h1", {
                                    className: "text-base sm:text-xl",
                                    children: c.name,
                                  }),
                                  h.jsx("p", {
                                    className: "text-xs text-white/60",
                                    children: c.country,
                                  }),
                                ],
                              }),
                              h.jsx("p", {
                                className: "text-xs",
                                children: `${c.lat} , ${c.lon}`,
                              }),
                            ],
                          }),
                        },
                        d
                      )
                    ),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ew = async () => {
    const e =
      "https://ipgeolocation.abstractapi.com/v1/?api_key=3653a4591a364241a25aa6887d2152f7";
    return await Tn()
      .get(e)
      .then((t) => t)
      .catch((t) => t);
  },
  Nw = () => {
    const e = Ne((o) => o.weather),
      t = Zr();
    let n = JSON.parse(localStorage.getItem("recentLocations"));
    const { t: r } = yt(),
      i = async (o) => {
        let s, l;
        if (o === void 0) {
          const c = await Ew();
          (s = c.latitude), (l = c.longitude);
        } else (s = o.lat), (l = o.lon);
        const a = `&q=${s},${l}`,
          u = po("forecast", a);
        await Tn()
          .get(u)
          .then((c) => {
            t(mo(c));
          });
      };
    return (
      C.useEffect(() => {
        var o;
        localStorage.getItem("recentLocations") === null &&
          localStorage.setItem("recentLocations", "[]"),
          localStorage.getItem("language") === null &&
            localStorage.setItem("language", "en"),
          localStorage.getItem("unit") === null &&
            localStorage.setItem("unit", "m"),
          ((o = e.today) == null ? void 0 : o.cloud) === void 0 &&
          JSON.parse(localStorage.getItem("recentLocations")).length === 0
            ? i()
            : i({ lat: n[0].lat, lon: n[0].lon });
      }, []),
      h.jsxs(Ly, {
        children: [
          h.jsx(et, { path: "/", element: h.jsx(Cw, {}) }),
          h.jsxs(et, {
            path: `${r("lanName")}/weather`,
            element: h.jsx(cw, {}),
            children: [
              h.jsx(et, { index: !0, element: h.jsx(uf, {}) }),
              h.jsx(et, { path: "today", element: h.jsx(uf, {}) }),
              h.jsx(et, { path: "daily", element: h.jsx(gw, {}) }),
              h.jsx(et, { path: "hourly", element: h.jsx(xw, {}) }),
            ],
          }),
          h.jsx(et, { path: "locations", element: h.jsx(lw, {}) }),
          h.jsx(et, { path: "maps", element: h.jsx(aw, {}) }),
          h.jsx(et, { path: "*", element: h.jsx(Sw, {}) }),
        ],
      })
    );
  };
function jw() {
  const { pathname: e } = Zn();
  return h.jsxs(O0, {
    store: iw,
    children: [h.jsx(Nw, {}), e !== "/" && h.jsx(d1, {})],
  });
}
Ks.createRoot(document.getElementById("root")).render(
  h.jsx(Ty, { children: h.jsx(jw, {}) })
);
