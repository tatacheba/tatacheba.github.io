const __vite__fileDeps = [
    'assets/QaPageIUNokian-CEWSUfmW.js',
    'assets/Jenkins-BAGaP4D1.js',
    'assets/QaPageIUNokian-C-XGvxtS.css',
    'assets/QaPageAPINokian-SpaTW-lR.js',
    'assets/Telegram-C3yoU4zT.js',
    'assets/QaPageAPINokian-CV_oS14I.css',
    'assets/QaPageMobileWiki-DNtXJIPF.js',
    'assets/QaPageMobileWiki-x3WEG9wx.css'
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l)
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && a(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const i = {}
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function a(l) {
    if (l.ep) return
    l.ep = !0
    const i = n(l)
    fetch(l.href, i)
  }
})()
/**
 * @vue/shared v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ys(e, t) {
  const n = new Set(e.split(','))
  return (a) => n.has(a)
}
const Ge = {},
  Fa = [],
  Wt = () => {},
  Xg = () => !1,
  Qi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  bs = (e) => e.startsWith('onUpdate:'),
  lt = Object.assign,
  Ss = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Zg = Object.prototype.hasOwnProperty,
  $e = (e, t) => Zg.call(e, t),
  we = Array.isArray,
  Na = (e) => Ji(e) === '[object Map]',
  rf = (e) => Ji(e) === '[object Set]',
  Ve = (e) => typeof e == 'function',
  tt = (e) => typeof e == 'string',
  ka = (e) => typeof e == 'symbol',
  je = (e) => e !== null && typeof e == 'object',
  sf = (e) => (je(e) || Ve(e)) && Ve(e.then) && Ve(e.catch),
  uf = Object.prototype.toString,
  Ji = (e) => uf.call(e),
  Qg = (e) => Ji(e).slice(8, -1),
  cf = (e) => Ji(e) === '[object Object]',
  ps = (e) => tt(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  bl = ys(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  eo = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Jg = /-(\w)/g,
  Kt = eo((e) => e.replace(Jg, (t, n) => (n ? n.toUpperCase() : ''))),
  ey = /\B([A-Z])/g,
  el = eo((e) => e.replace(ey, '-$1').toLowerCase()),
  bn = eo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Go = eo((e) => (e ? `on${bn(e)}` : '')),
  Yn = (e, t) => !Object.is(e, t),
  Ii = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  df = (e, t, n, a = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: a, value: n })
  },
  yr = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  ff = (e) => {
    const t = tt(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Yu
const vf = () =>
  Yu ||
  (Yu =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function to(e) {
  if (we(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const a = e[n],
        l = tt(a) ? ly(a) : to(a)
      if (l) for (const i in l) t[i] = l[i]
    }
    return t
  } else if (tt(e) || je(e)) return e
}
const ty = /;(?![^(]*\))/g,
  ny = /:([^]+)/,
  ay = /\/\*[^]*?\*\//g
function ly(e) {
  const t = {}
  return (
    e
      .replace(ay, '')
      .split(ty)
      .forEach((n) => {
        if (n) {
          const a = n.split(ny)
          a.length > 1 && (t[a[0].trim()] = a[1].trim())
        }
      }),
    t
  )
}
function no(e) {
  let t = ''
  if (tt(e)) t = e
  else if (we(e))
    for (let n = 0; n < e.length; n++) {
      const a = no(e[n])
      a && (t += a + ' ')
    }
  else if (je(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const iy = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  oy = ys(iy)
function mf(e) {
  return !!e || e === ''
}
const Ot = (e) =>
    tt(e)
      ? e
      : e == null
        ? ''
        : we(e) || (je(e) && (e.toString === uf || !Ve(e.toString)))
          ? JSON.stringify(e, hf, 2)
          : String(e),
  hf = (e, t) =>
    t && t.__v_isRef
      ? hf(e, t.value)
      : Na(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [a, l], i) => ((n[Yo(a, i) + ' =>'] = l), n),
              {}
            )
          }
        : rf(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Yo(n)) }
          : ka(t)
            ? Yo(t)
            : je(t) && !we(t) && !cf(t)
              ? String(t)
              : t,
  Yo = (e, t = '') => {
    var n
    return ka(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let $t
class gf {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = $t),
      !t && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = $t
      try {
        return ($t = this), t()
      } finally {
        $t = n
      }
    }
  }
  on() {
    $t = this
  }
  off() {
    $t = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, a
      for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop()
      for (n = 0, a = this.cleanups.length; n < a; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop()
        l && l !== this && ((this.parent.scopes[this.index] = l), (l.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function ao(e) {
  return new gf(e)
}
function ry(e, t = $t) {
  t && t.active && t.effects.push(e)
}
function sy() {
  return $t
}
function _t(e) {
  $t && $t.cleanups.push(e)
}
let sa
class ks {
  constructor(t, n, a, l) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = a),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      ry(this, l)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), Kn()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (uy(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), qn()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Un,
      n = sa
    try {
      return (Un = !0), (sa = this), this._runnings++, Ku(this), this.fn()
    } finally {
      qu(this), this._runnings--, (sa = n), (Un = t)
    }
  }
  stop() {
    this.active && (Ku(this), qu(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function uy(e) {
  return e.value
}
function Ku(e) {
  e._trackId++, (e._depsLength = 0)
}
function qu(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) yf(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function yf(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Un = !0,
  br = 0
const bf = []
function Kn() {
  bf.push(Un), (Un = !1)
}
function qn() {
  const e = bf.pop()
  Un = e === void 0 ? !0 : e
}
function ws() {
  br++
}
function xs() {
  for (br--; !br && Sr.length; ) Sr.shift()()
}
function Sf(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const a = e.deps[e._depsLength]
    a !== t ? (a && yf(a, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Sr = []
function pf(e, t, n) {
  ws()
  for (const a of e.keys()) {
    let l
    a._dirtyLevel < t &&
      (l ?? (l = e.get(a) === a._trackId)) &&
      (a._shouldSchedule || (a._shouldSchedule = a._dirtyLevel === 0), (a._dirtyLevel = t)),
      a._shouldSchedule &&
        (l ?? (l = e.get(a) === a._trackId)) &&
        (a.trigger(),
        (!a._runnings || a.allowRecurse) &&
          a._dirtyLevel !== 2 &&
          ((a._shouldSchedule = !1), a.scheduler && Sr.push(a.scheduler)))
  }
  xs()
}
const kf = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Li = new WeakMap(),
  ua = Symbol(''),
  pr = Symbol('')
function Mt(e, t, n) {
  if (Un && sa) {
    let a = Li.get(e)
    a || Li.set(e, (a = new Map()))
    let l = a.get(n)
    l || a.set(n, (l = kf(() => a.delete(n)))), Sf(sa, l)
  }
}
function _n(e, t, n, a, l, i) {
  const o = Li.get(e)
  if (!o) return
  let r = []
  if (t === 'clear') r = [...o.values()]
  else if (n === 'length' && we(e)) {
    const s = Number(a)
    o.forEach((u, c) => {
      ;(c === 'length' || (!ka(c) && c >= s)) && r.push(u)
    })
  } else
    switch ((n !== void 0 && r.push(o.get(n)), t)) {
      case 'add':
        we(e) ? ps(n) && r.push(o.get('length')) : (r.push(o.get(ua)), Na(e) && r.push(o.get(pr)))
        break
      case 'delete':
        we(e) || (r.push(o.get(ua)), Na(e) && r.push(o.get(pr)))
        break
      case 'set':
        Na(e) && r.push(o.get(ua))
        break
    }
  ws()
  for (const s of r) s && pf(s, 4)
  xs()
}
function cy(e, t) {
  const n = Li.get(e)
  return n && n.get(t)
}
const dy = ys('__proto__,__v_isRef,__isVue'),
  wf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(ka)
  ),
  Xu = fy()
function fy() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const a = Ce(this)
        for (let i = 0, o = this.length; i < o; i++) Mt(a, 'get', i + '')
        const l = a[t](...n)
        return l === -1 || l === !1 ? a[t](...n.map(Ce)) : l
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Kn(), ws()
        const a = Ce(this)[t].apply(this, n)
        return xs(), qn(), a
      }
    }),
    e
  )
}
function vy(e) {
  ka(e) || (e = String(e))
  const t = Ce(this)
  return Mt(t, 'has', e), t.hasOwnProperty(e)
}
class xf {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, a) {
    const l = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !l
    if (n === '__v_isReadonly') return l
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return a === (l ? (i ? Vy : Pf) : i ? Vf : _f).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(a)
        ? t
        : void 0
    const o = we(t)
    if (!l) {
      if (o && $e(Xu, n)) return Reflect.get(Xu, n, a)
      if (n === 'hasOwnProperty') return vy
    }
    const r = Reflect.get(t, n, a)
    return (ka(n) ? wf.has(n) : dy(n)) || (l || Mt(t, 'get', n), i)
      ? r
      : nt(r)
        ? o && ps(n)
          ? r
          : r.value
        : je(r)
          ? l
            ? tl(r)
            : kt(r)
          : r
  }
}
class Cf extends xf {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, a, l) {
    let i = t[n]
    if (!this._isShallow) {
      const s = Pl(i)
      if ((!Fi(a) && !Pl(a) && ((i = Ce(i)), (a = Ce(a))), !we(t) && nt(i) && !nt(a)))
        return s ? !1 : ((i.value = a), !0)
    }
    const o = we(t) && ps(n) ? Number(n) < t.length : $e(t, n),
      r = Reflect.set(t, n, a, l)
    return t === Ce(l) && (o ? Yn(a, i) && _n(t, 'set', n, a) : _n(t, 'add', n, a)), r
  }
  deleteProperty(t, n) {
    const a = $e(t, n)
    t[n]
    const l = Reflect.deleteProperty(t, n)
    return l && a && _n(t, 'delete', n, void 0), l
  }
  has(t, n) {
    const a = Reflect.has(t, n)
    return (!ka(n) || !wf.has(n)) && Mt(t, 'has', n), a
  }
  ownKeys(t) {
    return Mt(t, 'iterate', we(t) ? 'length' : ua), Reflect.ownKeys(t)
  }
}
class my extends xf {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const hy = new Cf(),
  gy = new my(),
  yy = new Cf(!0)
const Cs = (e) => e,
  lo = (e) => Reflect.getPrototypeOf(e)
function mi(e, t, n = !1, a = !1) {
  e = e.__v_raw
  const l = Ce(e),
    i = Ce(t)
  n || (Yn(t, i) && Mt(l, 'get', t), Mt(l, 'get', i))
  const { has: o } = lo(l),
    r = a ? Cs : n ? Is : Il
  if (o.call(l, t)) return r(e.get(t))
  if (o.call(l, i)) return r(e.get(i))
  e !== l && e.get(t)
}
function hi(e, t = !1) {
  const n = this.__v_raw,
    a = Ce(n),
    l = Ce(e)
  return (
    t || (Yn(e, l) && Mt(a, 'has', e), Mt(a, 'has', l)), e === l ? n.has(e) : n.has(e) || n.has(l)
  )
}
function gi(e, t = !1) {
  return (e = e.__v_raw), !t && Mt(Ce(e), 'iterate', ua), Reflect.get(e, 'size', e)
}
function Zu(e) {
  e = Ce(e)
  const t = Ce(this)
  return lo(t).has.call(t, e) || (t.add(e), _n(t, 'add', e, e)), this
}
function Qu(e, t) {
  t = Ce(t)
  const n = Ce(this),
    { has: a, get: l } = lo(n)
  let i = a.call(n, e)
  i || ((e = Ce(e)), (i = a.call(n, e)))
  const o = l.call(n, e)
  return n.set(e, t), i ? Yn(t, o) && _n(n, 'set', e, t) : _n(n, 'add', e, t), this
}
function Ju(e) {
  const t = Ce(this),
    { has: n, get: a } = lo(t)
  let l = n.call(t, e)
  l || ((e = Ce(e)), (l = n.call(t, e))), a && a.call(t, e)
  const i = t.delete(e)
  return l && _n(t, 'delete', e, void 0), i
}
function ec() {
  const e = Ce(this),
    t = e.size !== 0,
    n = e.clear()
  return t && _n(e, 'clear', void 0, void 0), n
}
function yi(e, t) {
  return function (a, l) {
    const i = this,
      o = i.__v_raw,
      r = Ce(o),
      s = t ? Cs : e ? Is : Il
    return !e && Mt(r, 'iterate', ua), o.forEach((u, c) => a.call(l, s(u), s(c), i))
  }
}
function bi(e, t, n) {
  return function (...a) {
    const l = this.__v_raw,
      i = Ce(l),
      o = Na(i),
      r = e === 'entries' || (e === Symbol.iterator && o),
      s = e === 'keys' && o,
      u = l[e](...a),
      c = n ? Cs : t ? Is : Il
    return (
      !t && Mt(i, 'iterate', s ? pr : ua),
      {
        next() {
          const { value: f, done: v } = u.next()
          return v ? { value: f, done: v } : { value: r ? [c(f[0]), c(f[1])] : c(f), done: v }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Rn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function by() {
  const e = {
      get(i) {
        return mi(this, i)
      },
      get size() {
        return gi(this)
      },
      has: hi,
      add: Zu,
      set: Qu,
      delete: Ju,
      clear: ec,
      forEach: yi(!1, !1)
    },
    t = {
      get(i) {
        return mi(this, i, !1, !0)
      },
      get size() {
        return gi(this)
      },
      has: hi,
      add: Zu,
      set: Qu,
      delete: Ju,
      clear: ec,
      forEach: yi(!1, !0)
    },
    n = {
      get(i) {
        return mi(this, i, !0)
      },
      get size() {
        return gi(this, !0)
      },
      has(i) {
        return hi.call(this, i, !0)
      },
      add: Rn('add'),
      set: Rn('set'),
      delete: Rn('delete'),
      clear: Rn('clear'),
      forEach: yi(!0, !1)
    },
    a = {
      get(i) {
        return mi(this, i, !0, !0)
      },
      get size() {
        return gi(this, !0)
      },
      has(i) {
        return hi.call(this, i, !0)
      },
      add: Rn('add'),
      set: Rn('set'),
      delete: Rn('delete'),
      clear: Rn('clear'),
      forEach: yi(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = bi(i, !1, !1)),
        (n[i] = bi(i, !0, !1)),
        (t[i] = bi(i, !1, !0)),
        (a[i] = bi(i, !0, !0))
    }),
    [e, n, t, a]
  )
}
const [Sy, py, ky, wy] = by()
function _s(e, t) {
  const n = t ? (e ? wy : ky) : e ? py : Sy
  return (a, l, i) =>
    l === '__v_isReactive'
      ? !e
      : l === '__v_isReadonly'
        ? e
        : l === '__v_raw'
          ? a
          : Reflect.get($e(n, l) && l in a ? n : a, l, i)
}
const xy = { get: _s(!1, !1) },
  Cy = { get: _s(!1, !0) },
  _y = { get: _s(!0, !1) }
const _f = new WeakMap(),
  Vf = new WeakMap(),
  Pf = new WeakMap(),
  Vy = new WeakMap()
function Py(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Iy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Py(Qg(e))
}
function kt(e) {
  return Pl(e) ? e : Vs(e, !1, hy, xy, _f)
}
function If(e) {
  return Vs(e, !1, yy, Cy, Vf)
}
function tl(e) {
  return Vs(e, !0, gy, _y, Pf)
}
function Vs(e, t, n, a, l) {
  if (!je(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = l.get(e)
  if (i) return i
  const o = Iy(e)
  if (o === 0) return e
  const r = new Proxy(e, o === 2 ? a : n)
  return l.set(e, r), r
}
function Sl(e) {
  return Pl(e) ? Sl(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Pl(e) {
  return !!(e && e.__v_isReadonly)
}
function Fi(e) {
  return !!(e && e.__v_isShallow)
}
function Af(e) {
  return e ? !!e.__v_raw : !1
}
function Ce(e) {
  const t = e && e.__v_raw
  return t ? Ce(t) : e
}
function Ps(e) {
  return Object.isExtensible(e) && df(e, '__v_skip', !0), e
}
const Il = (e) => (je(e) ? kt(e) : e),
  Is = (e) => (je(e) ? tl(e) : e)
class Tf {
  constructor(t, n, a, l) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ks(
        () => t(this._value),
        () => Ai(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !l),
      (this.__v_isReadonly = a)
  }
  get value() {
    const t = Ce(this)
    return (
      (!t._cacheable || t.effect.dirty) && Yn(t._value, (t._value = t.effect.run())) && Ai(t, 4),
      Ef(t),
      t.effect._dirtyLevel >= 2 && Ai(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function Ay(e, t, n = !1) {
  let a, l
  const i = Ve(e)
  return i ? ((a = e), (l = Wt)) : ((a = e.get), (l = e.set)), new Tf(a, l, i || !l, n)
}
function Ef(e) {
  var t
  Un &&
    sa &&
    ((e = Ce(e)),
    Sf(
      sa,
      (t = e.dep) != null ? t : (e.dep = kf(() => (e.dep = void 0), e instanceof Tf ? e : void 0))
    ))
}
function Ai(e, t = 4, n) {
  e = Ce(e)
  const a = e.dep
  a && pf(a, t)
}
function nt(e) {
  return !!(e && e.__v_isRef === !0)
}
function J(e) {
  return Bf(e, !1)
}
function se(e) {
  return Bf(e, !0)
}
function Bf(e, t) {
  return nt(e) ? e : new Ty(e, t)
}
class Ty {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Ce(t)),
      (this._value = n ? t : Il(t))
  }
  get value() {
    return Ef(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Fi(t) || Pl(t)
    ;(t = n ? t : Ce(t)),
      Yn(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Il(t)), Ai(this, 4))
  }
}
function at(e) {
  return nt(e) ? e.value : e
}
const Ey = {
  get: (e, t, n) => at(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t]
    return nt(l) && !nt(n) ? ((l.value = n), !0) : Reflect.set(e, t, n, a)
  }
}
function Df(e) {
  return Sl(e) ? e : new Proxy(e, Ey)
}
function io(e) {
  const t = we(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Mf(e, n)
  return t
}
class By {
  constructor(t, n, a) {
    ;(this._object = t), (this._key = n), (this._defaultValue = a), (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return cy(Ce(this._object), this._key)
  }
}
class Dy {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function N(e, t, n) {
  return nt(e) ? e : Ve(e) ? new Dy(e) : je(e) && arguments.length > 1 ? Mf(e, t, n) : J(e)
}
function Mf(e, t, n) {
  const a = e[t]
  return nt(a) ? a : new By(e, t, n)
}
/**
 * @vue/runtime-core v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Gn(e, t, n, a) {
  try {
    return a ? e(...a) : e()
  } catch (l) {
    Ql(l, t, n)
  }
}
function Yt(e, t, n, a) {
  if (Ve(e)) {
    const l = Gn(e, t, n, a)
    return (
      l &&
        sf(l) &&
        l.catch((i) => {
          Ql(i, t, n)
        }),
      l
    )
  }
  if (we(e)) {
    const l = []
    for (let i = 0; i < e.length; i++) l.push(Yt(e[i], t, n, a))
    return l
  }
}
function Ql(e, t, n, a = !0) {
  const l = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      r = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; i; ) {
      const u = i.ec
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, o, r) === !1) return
      }
      i = i.parent
    }
    const s = t.appContext.config.errorHandler
    if (s) {
      Kn(), Gn(s, null, 10, [e, o, r]), qn()
      return
    }
  }
  My(e, n, l, a)
}
function My(e, t, n, a = !0) {
  console.error(e)
}
let Al = !1,
  kr = !1
const wt = []
let vn = 0
const Ha = []
let Fn = null,
  la = 0
const Rf = Promise.resolve()
let As = null
function Te(e) {
  const t = As || Rf
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ry(e) {
  let t = vn + 1,
    n = wt.length
  for (; t < n; ) {
    const a = (t + n) >>> 1,
      l = wt[a],
      i = Tl(l)
    i < e || (i === e && l.pre) ? (t = a + 1) : (n = a)
  }
  return t
}
function Ts(e) {
  ;(!wt.length || !wt.includes(e, Al && e.allowRecurse ? vn + 1 : vn)) &&
    (e.id == null ? wt.push(e) : wt.splice(Ry(e.id), 0, e), $f())
}
function $f() {
  !Al && !kr && ((kr = !0), (As = Rf.then(Lf)))
}
function $y(e) {
  const t = wt.indexOf(e)
  t > vn && wt.splice(t, 1)
}
function wr(e) {
  we(e) ? Ha.push(...e) : (!Fn || !Fn.includes(e, e.allowRecurse ? la + 1 : la)) && Ha.push(e), $f()
}
function tc(e, t, n = Al ? vn + 1 : 0) {
  for (; n < wt.length; n++) {
    const a = wt[n]
    if (a && a.pre) {
      if (e && a.id !== e.uid) continue
      wt.splice(n, 1), n--, a()
    }
  }
}
function Of(e) {
  if (Ha.length) {
    const t = [...new Set(Ha)].sort((n, a) => Tl(n) - Tl(a))
    if (((Ha.length = 0), Fn)) {
      Fn.push(...t)
      return
    }
    for (Fn = t, la = 0; la < Fn.length; la++) Fn[la]()
    ;(Fn = null), (la = 0)
  }
}
const Tl = (e) => (e.id == null ? 1 / 0 : e.id),
  Oy = (e, t) => {
    const n = Tl(e) - Tl(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Lf(e) {
  ;(kr = !1), (Al = !0), wt.sort(Oy)
  try {
    for (vn = 0; vn < wt.length; vn++) {
      const t = wt[vn]
      t && t.active !== !1 && Gn(t, null, 14)
    }
  } finally {
    ;(vn = 0), (wt.length = 0), Of(), (Al = !1), (As = null), (wt.length || Ha.length) && Lf()
  }
}
function Ly(e, t, ...n) {
  if (e.isUnmounted) return
  const a = e.vnode.props || Ge
  let l = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in a) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: f, trim: v } = a[c] || Ge
    v && (l = n.map((m) => (tt(m) ? m.trim() : m))), f && (l = n.map(yr))
  }
  let r,
    s = a[(r = Go(t))] || a[(r = Go(Kt(t)))]
  !s && i && (s = a[(r = Go(el(t)))]), s && Yt(s, e, 6, l)
  const u = a[r + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[r]) return
    ;(e.emitted[r] = !0), Yt(u, e, 6, l)
  }
}
function Ff(e, t, n = !1) {
  const a = t.emitsCache,
    l = a.get(e)
  if (l !== void 0) return l
  const i = e.emits
  let o = {},
    r = !1
  if (!Ve(e)) {
    const s = (u) => {
      const c = Ff(u, t, !0)
      c && ((r = !0), lt(o, c))
    }
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s)
  }
  return !i && !r
    ? (je(e) && a.set(e, null), null)
    : (we(i) ? i.forEach((s) => (o[s] = null)) : lt(o, i), je(e) && a.set(e, o), o)
}
function oo(e, t) {
  return !e || !Qi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      $e(e, t[0].toLowerCase() + t.slice(1)) || $e(e, el(t)) || $e(e, t))
}
let It = null,
  ro = null
function Ni(e) {
  const t = It
  return (It = e), (ro = (e && e.type.__scopeId) || null), t
}
function Es(e) {
  ro = e
}
function Bs() {
  ro = null
}
function nn(e, t = It, n) {
  if (!t || e._n) return e
  const a = (...l) => {
    a._d && gc(-1)
    const i = Ni(t)
    let o
    try {
      o = e(...l)
    } finally {
      Ni(i), a._d && gc(1)
    }
    return o
  }
  return (a._n = !0), (a._c = !0), (a._d = !0), a
}
function Ko(e) {
  const {
      type: t,
      vnode: n,
      proxy: a,
      withProxy: l,
      propsOptions: [i],
      slots: o,
      attrs: r,
      emit: s,
      render: u,
      renderCache: c,
      props: f,
      data: v,
      setupState: m,
      ctx: g,
      inheritAttrs: h
    } = e,
    y = Ni(e)
  let S, p
  try {
    if (n.shapeFlag & 4) {
      const T = l || a,
        w = T
      ;(S = an(u.call(w, T, c, f, m, v, g))), (p = r)
    } else {
      const T = t
      ;(S = an(T.length > 1 ? T(f, { attrs: r, slots: o, emit: s }) : T(f, null))),
        (p = t.props ? r : Ny(r))
    }
  } catch (T) {
    ;(xl.length = 0), Ql(T, e, 1), (S = d(At))
  }
  let A = S
  if (p && h !== !1) {
    const T = Object.keys(p),
      { shapeFlag: w } = A
    T.length && w & 7 && (i && T.some(bs) && (p = Hy(p, i)), (A = Vn(A, p, !1, !0)))
  }
  return (
    n.dirs && ((A = Vn(A, null, !1, !0)), (A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (A.transition = n.transition),
    (S = A),
    Ni(y),
    S
  )
}
function Fy(e, t = !0) {
  let n
  for (let a = 0; a < e.length; a++) {
    const l = e[a]
    if (Ml(l)) {
      if (l.type !== At || l.children === 'v-if') {
        if (n) return
        n = l
      }
    } else return
  }
  return n
}
const Ny = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Qi(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Hy = (e, t) => {
    const n = {}
    for (const a in e) (!bs(a) || !(a.slice(9) in t)) && (n[a] = e[a])
    return n
  }
function zy(e, t, n) {
  const { props: a, children: l, component: i } = e,
    { props: o, children: r, patchFlag: s } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && s >= 0) {
    if (s & 1024) return !0
    if (s & 16) return a ? nc(a, o, u) : !!o
    if (s & 8) {
      const c = t.dynamicProps
      for (let f = 0; f < c.length; f++) {
        const v = c[f]
        if (o[v] !== a[v] && !oo(u, v)) return !0
      }
    }
  } else
    return (l || r) && (!r || !r.$stable) ? !0 : a === o ? !1 : a ? (o ? nc(a, o, u) : !0) : !!o
  return !1
}
function nc(e, t, n) {
  const a = Object.keys(t)
  if (a.length !== Object.keys(e).length) return !0
  for (let l = 0; l < a.length; l++) {
    const i = a[l]
    if (t[i] !== e[i] && !oo(n, i)) return !0
  }
  return !1
}
function Ds({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree
    if ((a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ms = 'components',
  jy = 'directives'
function ln(e, t) {
  return Rs(Ms, e, !0, t) || e
}
const Wy = Symbol.for('v-ndc')
function Uy(e) {
  return (tt(e) && Rs(Ms, e, !1)) || e
}
function Ft(e) {
  return Rs(jy, e)
}
function Rs(e, t, n = !0, a = !1) {
  const l = It || gt
  if (l) {
    const i = l.type
    if (e === Ms) {
      const r = Hb(i, !1)
      if (r && (r === t || r === Kt(t) || r === bn(Kt(t)))) return i
    }
    const o = ac(l[e] || i[e], t) || ac(l.appContext[e], t)
    return !o && a ? i : o
  }
}
function ac(e, t) {
  return e && (e[t] || e[Kt(t)] || e[bn(Kt(t))])
}
const Gy = (e) => e.__isSuspense
let xr = 0
const Yy = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, a, l, i, o, r, s, u) {
      if (e == null) Ky(t, n, a, l, i, o, r, s, u)
      else {
        if (i && i.deps > 0 && !e.suspense.isInFallback) {
          ;(t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el)
          return
        }
        qy(e, t, n, a, l, o, r, s, u)
      }
    },
    hydrate: Xy,
    create: $s,
    normalize: Zy
  },
  Nf = Yy
function El(e, t) {
  const n = e.props && e.props[t]
  Ve(n) && n()
}
function Ky(e, t, n, a, l, i, o, r, s) {
  const {
      p: u,
      o: { createElement: c }
    } = s,
    f = c('div'),
    v = (e.suspense = $s(e, l, a, t, f, n, i, o, r, s))
  u(null, (v.pendingBranch = e.ssContent), f, null, a, v, i, o),
    v.deps > 0
      ? (El(e, 'onPending'),
        El(e, 'onFallback'),
        u(null, e.ssFallback, t, n, a, null, i, o),
        za(v, e.ssFallback))
      : v.resolve(!1, !0)
}
function qy(e, t, n, a, l, i, o, r, { p: s, um: u, o: { createElement: c } }) {
  const f = (t.suspense = e.suspense)
  ;(f.vnode = t), (t.el = e.el)
  const v = t.ssContent,
    m = t.ssFallback,
    { activeBranch: g, pendingBranch: h, isInFallback: y, isHydrating: S } = f
  if (h)
    (f.pendingBranch = v),
      mn(v, h)
        ? (s(h, v, f.hiddenContainer, null, l, f, i, o, r),
          f.deps <= 0 ? f.resolve() : y && (S || (s(g, m, n, a, l, null, i, o, r), za(f, m))))
        : ((f.pendingId = xr++),
          S ? ((f.isHydrating = !1), (f.activeBranch = h)) : u(h, l, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = c('div')),
          y
            ? (s(null, v, f.hiddenContainer, null, l, f, i, o, r),
              f.deps <= 0 ? f.resolve() : (s(g, m, n, a, l, null, i, o, r), za(f, m)))
            : g && mn(v, g)
              ? (s(g, v, n, a, l, f, i, o, r), f.resolve(!0))
              : (s(null, v, f.hiddenContainer, null, l, f, i, o, r), f.deps <= 0 && f.resolve()))
  else if (g && mn(v, g)) s(g, v, n, a, l, f, i, o, r), za(f, v)
  else if (
    (El(t, 'onPending'),
    (f.pendingBranch = v),
    v.shapeFlag & 512 ? (f.pendingId = v.component.suspenseId) : (f.pendingId = xr++),
    s(null, v, f.hiddenContainer, null, l, f, i, o, r),
    f.deps <= 0)
  )
    f.resolve()
  else {
    const { timeout: p, pendingId: A } = f
    p > 0
      ? setTimeout(() => {
          f.pendingId === A && f.fallback(m)
        }, p)
      : p === 0 && f.fallback(m)
  }
}
function $s(e, t, n, a, l, i, o, r, s, u, c = !1) {
  const {
    p: f,
    m: v,
    um: m,
    n: g,
    o: { parentNode: h, remove: y }
  } = u
  let S
  const p = Jy(e)
  p && t && t.pendingBranch && ((S = t.pendingId), t.deps++)
  const A = e.props ? ff(e.props.timeout) : void 0,
    T = i,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: a,
      hiddenContainer: l,
      deps: 0,
      pendingId: xr++,
      timeout: typeof A == 'number' ? A : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(x = !1, V = !1) {
        const {
          vnode: _,
          activeBranch: k,
          pendingBranch: P,
          pendingId: E,
          effects: I,
          parentComponent: D,
          container: L
        } = w
        let W = !1
        w.isHydrating
          ? (w.isHydrating = !1)
          : x ||
            ((W = k && P.transition && P.transition.mode === 'out-in'),
            W &&
              (k.transition.afterLeave = () => {
                E === w.pendingId && (v(P, L, i === T ? g(k) : i, 0), wr(I))
              }),
            k && (h(k.el) !== w.hiddenContainer && (i = g(k)), m(k, D, w, !0)),
            W || v(P, L, i, 0)),
          za(w, P),
          (w.pendingBranch = null),
          (w.isInFallback = !1)
        let Y = w.parent,
          te = !1
        for (; Y; ) {
          if (Y.pendingBranch) {
            Y.effects.push(...I), (te = !0)
            break
          }
          Y = Y.parent
        }
        !te && !W && wr(I),
          (w.effects = []),
          p &&
            t &&
            t.pendingBranch &&
            S === t.pendingId &&
            (t.deps--, t.deps === 0 && !V && t.resolve()),
          El(_, 'onResolve')
      },
      fallback(x) {
        if (!w.pendingBranch) return
        const { vnode: V, activeBranch: _, parentComponent: k, container: P, namespace: E } = w
        El(V, 'onFallback')
        const I = g(_),
          D = () => {
            w.isInFallback && (f(null, x, P, I, k, null, E, r, s), za(w, x))
          },
          L = x.transition && x.transition.mode === 'out-in'
        L && (_.transition.afterLeave = D), (w.isInFallback = !0), m(_, k, null, !0), L || D()
      },
      move(x, V, _) {
        w.activeBranch && v(w.activeBranch, x, V, _), (w.container = x)
      },
      next() {
        return w.activeBranch && g(w.activeBranch)
      },
      registerDep(x, V) {
        const _ = !!w.pendingBranch
        _ && w.deps++
        const k = x.vnode.el
        x.asyncDep
          .catch((P) => {
            Ql(P, x, 0)
          })
          .then((P) => {
            if (x.isUnmounted || w.isUnmounted || w.pendingId !== x.suspenseId) return
            x.asyncResolved = !0
            const { vnode: E } = x
            Br(x, P, !1), k && (E.el = k)
            const I = !k && x.subTree.el
            V(x, E, h(k || x.subTree.el), k ? null : g(x.subTree), w, o, s),
              I && y(I),
              Ds(x, E.el),
              _ && --w.deps === 0 && w.resolve()
          })
      },
      unmount(x, V) {
        ;(w.isUnmounted = !0),
          w.activeBranch && m(w.activeBranch, n, x, V),
          w.pendingBranch && m(w.pendingBranch, n, x, V)
      }
    }
  return w
}
function Xy(e, t, n, a, l, i, o, r, s) {
  const u = (t.suspense = $s(
      t,
      a,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      l,
      i,
      o,
      r,
      !0
    )),
    c = s(e, (u.pendingBranch = t.ssContent), n, u, i, o)
  return u.deps === 0 && u.resolve(!1, !0), c
}
function Zy(e) {
  const { shapeFlag: t, children: n } = e,
    a = t & 32
  ;(e.ssContent = lc(a ? n.default : n)), (e.ssFallback = a ? lc(n.fallback) : d(At))
}
function lc(e) {
  let t
  if (Ve(e)) {
    const n = ja && e._c
    n && ((e._d = !1), st()), (e = e()), n && ((e._d = !0), (t = Ut), rv())
  }
  return (
    we(e) && (e = Fy(e)),
    (e = an(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  )
}
function Qy(e, t) {
  t && t.pendingBranch ? (we(e) ? t.effects.push(...e) : t.effects.push(e)) : wr(e)
}
function za(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: a } = e
  let l = t.el
  for (; !l && t.component; ) (t = t.component.subTree), (l = t.el)
  ;(n.el = l), a && a.subTree === n && ((a.vnode.el = l), Ds(a, l))
}
function Jy(e) {
  const t = e.props && e.props.suspensible
  return t != null && t !== !1
}
const eb = Symbol.for('v-scx'),
  tb = () => Pe(eb)
function Ze(e, t) {
  return Os(e, null, t)
}
const Si = {}
function de(e, t, n) {
  return Os(e, t, n)
}
function Os(e, t, { immediate: n, deep: a, flush: l, once: i, onTrack: o, onTrigger: r } = Ge) {
  if (t && i) {
    const x = t
    t = (...V) => {
      x(...V), w()
    }
  }
  const s = gt,
    u = (x) => (a === !0 ? x : ia(x, a === !1 ? 1 : void 0))
  let c,
    f = !1,
    v = !1
  if (
    (nt(e)
      ? ((c = () => e.value), (f = Fi(e)))
      : Sl(e)
        ? ((c = () => u(e)), (f = !0))
        : we(e)
          ? ((v = !0),
            (f = e.some((x) => Sl(x) || Fi(x))),
            (c = () =>
              e.map((x) => {
                if (nt(x)) return x.value
                if (Sl(x)) return u(x)
                if (Ve(x)) return Gn(x, s, 2)
              })))
          : Ve(e)
            ? t
              ? (c = () => Gn(e, s, 2))
              : (c = () => (m && m(), Yt(e, s, 3, [g])))
            : (c = Wt),
    t && a)
  ) {
    const x = c
    c = () => ia(x())
  }
  let m,
    g = (x) => {
      m = A.onStop = () => {
        Gn(x, s, 4), (m = A.onStop = void 0)
      }
    },
    h
  if (co)
    if (((g = Wt), t ? n && Yt(t, s, 3, [c(), v ? [] : void 0, g]) : c(), l === 'sync')) {
      const x = tb()
      h = x.__watcherHandles || (x.__watcherHandles = [])
    } else return Wt
  let y = v ? new Array(e.length).fill(Si) : Si
  const S = () => {
    if (!(!A.active || !A.dirty))
      if (t) {
        const x = A.run()
        ;(a || f || (v ? x.some((V, _) => Yn(V, y[_])) : Yn(x, y))) &&
          (m && m(), Yt(t, s, 3, [x, y === Si ? void 0 : v && y[0] === Si ? [] : y, g]), (y = x))
      } else A.run()
  }
  S.allowRecurse = !!t
  let p
  l === 'sync'
    ? (p = S)
    : l === 'post'
      ? (p = () => Et(S, s && s.suspense))
      : ((S.pre = !0), s && (S.id = s.uid), (p = () => Ts(S)))
  const A = new ks(c, Wt, p),
    T = sy(),
    w = () => {
      A.stop(), T && Ss(T.effects, A)
    }
  return (
    t ? (n ? S() : (y = A.run())) : l === 'post' ? Et(A.run.bind(A), s && s.suspense) : A.run(),
    h && h.push(w),
    w
  )
}
function nb(e, t, n) {
  const a = this.proxy,
    l = tt(e) ? (e.includes('.') ? Hf(a, e) : () => a[e]) : e.bind(a, a)
  let i
  Ve(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = ti(this),
    r = Os(l, i.bind(a), n)
  return o(), r
}
function Hf(e, t) {
  const n = t.split('.')
  return () => {
    let a = e
    for (let l = 0; l < n.length && a; l++) a = a[n[l]]
    return a
  }
}
function ia(e, t = 1 / 0, n) {
  if (t <= 0 || !je(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, nt(e))) ia(e.value, t, n)
  else if (we(e)) for (let a = 0; a < e.length; a++) ia(e[a], t, n)
  else if (rf(e) || Na(e))
    e.forEach((a) => {
      ia(a, t, n)
    })
  else if (cf(e)) for (const a in e) ia(e[a], t, n)
  return e
}
function We(e, t) {
  if (It === null) return e
  const n = fo(It) || It.proxy,
    a = e.dirs || (e.dirs = [])
  for (let l = 0; l < t.length; l++) {
    let [i, o, r, s = Ge] = t[l]
    i &&
      (Ve(i) && (i = { mounted: i, updated: i }),
      i.deep && ia(o),
      a.push({ dir: i, instance: n, value: o, oldValue: void 0, arg: r, modifiers: s }))
  }
  return e
}
function Jn(e, t, n, a) {
  const l = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < l.length; o++) {
    const r = l[o]
    i && (r.oldValue = i[o].value)
    let s = r.dir[a]
    s && (Kn(), Yt(s, n, 8, [e.el, r, e, t]), qn())
  }
}
const Nn = Symbol('_leaveCb'),
  pi = Symbol('_enterCb')
function zf() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    St(() => {
      e.isMounted = !0
    }),
    pt(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const jt = [Function, Array],
  jf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: jt,
    onEnter: jt,
    onAfterEnter: jt,
    onEnterCancelled: jt,
    onBeforeLeave: jt,
    onLeave: jt,
    onAfterLeave: jt,
    onLeaveCancelled: jt,
    onBeforeAppear: jt,
    onAppear: jt,
    onAfterAppear: jt,
    onAppearCancelled: jt
  },
  ab = {
    name: 'BaseTransition',
    props: jf,
    setup(e, { slots: t }) {
      const n = Gs(),
        a = zf()
      return () => {
        const l = t.default && Ls(t.default(), !0)
        if (!l || !l.length) return
        let i = l[0]
        if (l.length > 1) {
          for (const v of l)
            if (v.type !== At) {
              i = v
              break
            }
        }
        const o = Ce(e),
          { mode: r } = o
        if (a.isLeaving) return qo(i)
        const s = ic(i)
        if (!s) return qo(i)
        const u = Bl(s, o, a, n)
        Dl(s, u)
        const c = n.subTree,
          f = c && ic(c)
        if (f && f.type !== At && !mn(s, f)) {
          const v = Bl(f, o, a, n)
          if ((Dl(f, v), r === 'out-in' && s.type !== At))
            return (
              (a.isLeaving = !0),
              (v.afterLeave = () => {
                ;(a.isLeaving = !1), n.update.active !== !1 && ((n.effect.dirty = !0), n.update())
              }),
              qo(i)
            )
          r === 'in-out' &&
            s.type !== At &&
            (v.delayLeave = (m, g, h) => {
              const y = Wf(a, f)
              ;(y[String(f.key)] = f),
                (m[Nn] = () => {
                  g(), (m[Nn] = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = h)
            })
        }
        return i
      }
    }
  },
  lb = ab
function Wf(e, t) {
  const { leavingVNodes: n } = e
  let a = n.get(t.type)
  return a || ((a = Object.create(null)), n.set(t.type, a)), a
}
function Bl(e, t, n, a) {
  const {
      appear: l,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: r,
      onEnter: s,
      onAfterEnter: u,
      onEnterCancelled: c,
      onBeforeLeave: f,
      onLeave: v,
      onAfterLeave: m,
      onLeaveCancelled: g,
      onBeforeAppear: h,
      onAppear: y,
      onAfterAppear: S,
      onAppearCancelled: p
    } = t,
    A = String(e.key),
    T = Wf(n, e),
    w = (_, k) => {
      _ && Yt(_, a, 9, k)
    },
    x = (_, k) => {
      const P = k[1]
      w(_, k), we(_) ? _.every((E) => E.length <= 1) && P() : _.length <= 1 && P()
    },
    V = {
      mode: i,
      persisted: o,
      beforeEnter(_) {
        let k = r
        if (!n.isMounted)
          if (l) k = h || r
          else return
        _[Nn] && _[Nn](!0)
        const P = T[A]
        P && mn(e, P) && P.el[Nn] && P.el[Nn](), w(k, [_])
      },
      enter(_) {
        let k = s,
          P = u,
          E = c
        if (!n.isMounted)
          if (l) (k = y || s), (P = S || u), (E = p || c)
          else return
        let I = !1
        const D = (_[pi] = (L) => {
          I ||
            ((I = !0),
            L ? w(E, [_]) : w(P, [_]),
            V.delayedLeave && V.delayedLeave(),
            (_[pi] = void 0))
        })
        k ? x(k, [_, D]) : D()
      },
      leave(_, k) {
        const P = String(e.key)
        if ((_[pi] && _[pi](!0), n.isUnmounting)) return k()
        w(f, [_])
        let E = !1
        const I = (_[Nn] = (D) => {
          E ||
            ((E = !0), k(), D ? w(g, [_]) : w(m, [_]), (_[Nn] = void 0), T[P] === e && delete T[P])
        })
        ;(T[P] = e), v ? x(v, [_, I]) : I()
      },
      clone(_) {
        return Bl(_, t, n, a)
      }
    }
  return V
}
function qo(e) {
  if (so(e)) return (e = Vn(e)), (e.children = null), e
}
function ic(e) {
  if (!so(e)) return e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && Ve(n.default)) return n.default()
  }
}
function Dl(e, t) {
  e.shapeFlag & 6 && e.component
    ? Dl(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Ls(e, t = !1, n) {
  let a = [],
    l = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const r = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === me
      ? (o.patchFlag & 128 && l++, (a = a.concat(Ls(o.children, t, r))))
      : (t || o.type !== At) && a.push(r != null ? Vn(o, { key: r }) : o)
  }
  if (l > 1) for (let i = 0; i < a.length; i++) a[i].patchFlag = -2
  return a
}
/*! #__NO_SIDE_EFFECTS__ */ function Jl(e, t) {
  return Ve(e) ? lt({ name: e.name }, t, { setup: e }) : e
}
const Ti = (e) => !!e.type.__asyncLoader,
  so = (e) => e.type.__isKeepAlive
function Uf(e, t) {
  Yf(e, 'a', t)
}
function Gf(e, t) {
  Yf(e, 'da', t)
}
function Yf(e, t, n = gt) {
  const a =
    e.__wdc ||
    (e.__wdc = () => {
      let l = n
      for (; l; ) {
        if (l.isDeactivated) return
        l = l.parent
      }
      return e()
    })
  if ((uo(t, a, n), n)) {
    let l = n.parent
    for (; l && l.parent; ) so(l.parent.vnode) && ib(a, t, n, l), (l = l.parent)
  }
}
function ib(e, t, n, a) {
  const l = uo(t, e, a, !0)
  Hs(() => {
    Ss(a[t], l)
  }, n)
}
function uo(e, t, n = gt, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          Kn()
          const r = ti(n),
            s = Yt(t, n, e, o)
          return r(), qn(), s
        })
    return a ? l.unshift(i) : l.push(i), i
  }
}
const En =
    (e) =>
    (t, n = gt) =>
      (!co || e === 'sp') && uo(e, (...a) => t(...a), n),
  Fs = En('bm'),
  St = En('m'),
  Kf = En('bu'),
  Ns = En('u'),
  pt = En('bum'),
  Hs = En('um'),
  ob = En('sp'),
  rb = En('rtg'),
  sb = En('rtc')
function ub(e, t = gt) {
  uo('ec', e, t)
}
function Cr(e, t, n, a) {
  let l
  const i = n
  if (we(e) || tt(e)) {
    l = new Array(e.length)
    for (let o = 0, r = e.length; o < r; o++) l[o] = t(e[o], o, void 0, i)
  } else if (typeof e == 'number') {
    l = new Array(e)
    for (let o = 0; o < e; o++) l[o] = t(o + 1, o, void 0, i)
  } else if (je(e))
    if (e[Symbol.iterator]) l = Array.from(e, (o, r) => t(o, r, void 0, i))
    else {
      const o = Object.keys(e)
      l = new Array(o.length)
      for (let r = 0, s = o.length; r < s; r++) {
        const u = o[r]
        l[r] = t(e[u], u, r, i)
      }
    }
  else l = []
  return l
}
const _r = (e) => (e ? (cv(e) ? fo(e) || e.proxy : _r(e.parent)) : null),
  pl = lt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _r(e.parent),
    $root: (e) => _r(e.root),
    $emit: (e) => e.emit,
    $options: (e) => zs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ts(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Te.bind(e.proxy)),
    $watch: (e) => nb.bind(e)
  }),
  Xo = (e, t) => e !== Ge && !e.__isScriptSetup && $e(e, t),
  cb = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: a, data: l, props: i, accessCache: o, type: r, appContext: s } = e
      let u
      if (t[0] !== '$') {
        const m = o[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return a[t]
            case 2:
              return l[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Xo(a, t)) return (o[t] = 1), a[t]
          if (l !== Ge && $e(l, t)) return (o[t] = 2), l[t]
          if ((u = e.propsOptions[0]) && $e(u, t)) return (o[t] = 3), i[t]
          if (n !== Ge && $e(n, t)) return (o[t] = 4), n[t]
          Vr && (o[t] = 0)
        }
      }
      const c = pl[t]
      let f, v
      if (c) return t === '$attrs' && Mt(e.attrs, 'get', ''), c(e)
      if ((f = r.__cssModules) && (f = f[t])) return f
      if (n !== Ge && $e(n, t)) return (o[t] = 4), n[t]
      if (((v = s.config.globalProperties), $e(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: a, setupState: l, ctx: i } = e
      return Xo(l, t)
        ? ((l[t] = n), !0)
        : a !== Ge && $e(a, t)
          ? ((a[t] = n), !0)
          : $e(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, propsOptions: i } },
      o
    ) {
      let r
      return (
        !!n[o] ||
        (e !== Ge && $e(e, o)) ||
        Xo(t, o) ||
        ((r = i[0]) && $e(r, o)) ||
        $e(a, o) ||
        $e(pl, o) ||
        $e(l.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : $e(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function oc(e) {
  return we(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Vr = !0
function db(e) {
  const t = zs(e),
    n = e.proxy,
    a = e.ctx
  ;(Vr = !1), t.beforeCreate && rc(t.beforeCreate, e, 'bc')
  const {
    data: l,
    computed: i,
    methods: o,
    watch: r,
    provide: s,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: v,
    beforeUpdate: m,
    updated: g,
    activated: h,
    deactivated: y,
    beforeDestroy: S,
    beforeUnmount: p,
    destroyed: A,
    unmounted: T,
    render: w,
    renderTracked: x,
    renderTriggered: V,
    errorCaptured: _,
    serverPrefetch: k,
    expose: P,
    inheritAttrs: E,
    components: I,
    directives: D,
    filters: L
  } = t
  if ((u && fb(u, a, null), o))
    for (const te in o) {
      const F = o[te]
      Ve(F) && (a[te] = F.bind(n))
    }
  if (l) {
    const te = l.call(n, n)
    je(te) && (e.data = kt(te))
  }
  if (((Vr = !0), i))
    for (const te in i) {
      const F = i[te],
        q = Ve(F) ? F.bind(n, n) : Ve(F.get) ? F.get.bind(n, n) : Wt,
        O = !Ve(F) && Ve(F.set) ? F.set.bind(n) : Wt,
        z = b({ get: q, set: O })
      Object.defineProperty(a, te, {
        enumerable: !0,
        configurable: !0,
        get: () => z.value,
        set: (ee) => (z.value = ee)
      })
    }
  if (r) for (const te in r) qf(r[te], a, n, te)
  if (s) {
    const te = Ve(s) ? s.call(n) : s
    Reflect.ownKeys(te).forEach((F) => {
      Fe(F, te[F])
    })
  }
  c && rc(c, e, 'c')
  function Y(te, F) {
    we(F) ? F.forEach((q) => te(q.bind(n))) : F && te(F.bind(n))
  }
  if (
    (Y(Fs, f),
    Y(St, v),
    Y(Kf, m),
    Y(Ns, g),
    Y(Uf, h),
    Y(Gf, y),
    Y(ub, _),
    Y(sb, x),
    Y(rb, V),
    Y(pt, p),
    Y(Hs, T),
    Y(ob, k),
    we(P))
  )
    if (P.length) {
      const te = e.exposed || (e.exposed = {})
      P.forEach((F) => {
        Object.defineProperty(te, F, { get: () => n[F], set: (q) => (n[F] = q) })
      })
    } else e.exposed || (e.exposed = {})
  w && e.render === Wt && (e.render = w),
    E != null && (e.inheritAttrs = E),
    I && (e.components = I),
    D && (e.directives = D)
}
function fb(e, t, n = Wt) {
  we(e) && (e = Pr(e))
  for (const a in e) {
    const l = e[a]
    let i
    je(l)
      ? 'default' in l
        ? (i = Pe(l.from || a, l.default, !0))
        : (i = Pe(l.from || a))
      : (i = Pe(l)),
      nt(i)
        ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o)
          })
        : (t[a] = i)
  }
}
function rc(e, t, n) {
  Yt(we(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function qf(e, t, n, a) {
  const l = a.includes('.') ? Hf(n, a) : () => n[a]
  if (tt(e)) {
    const i = t[e]
    Ve(i) && de(l, i)
  } else if (Ve(e)) de(l, e.bind(n))
  else if (je(e))
    if (we(e)) e.forEach((i) => qf(i, t, n, a))
    else {
      const i = Ve(e.handler) ? e.handler.bind(n) : t[e.handler]
      Ve(i) && de(l, i, e)
    }
}
function zs(e) {
  const t = e.type,
    { mixins: n, extends: a } = t,
    {
      mixins: l,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    r = i.get(t)
  let s
  return (
    r
      ? (s = r)
      : !l.length && !n && !a
        ? (s = t)
        : ((s = {}), l.length && l.forEach((u) => Hi(s, u, o, !0)), Hi(s, t, o)),
    je(t) && i.set(t, s),
    s
  )
}
function Hi(e, t, n, a = !1) {
  const { mixins: l, extends: i } = t
  i && Hi(e, i, n, !0), l && l.forEach((o) => Hi(e, o, n, !0))
  for (const o in t)
    if (!(a && o === 'expose')) {
      const r = vb[o] || (n && n[o])
      e[o] = r ? r(e[o], t[o]) : t[o]
    }
  return e
}
const vb = {
  data: sc,
  props: uc,
  emits: uc,
  methods: gl,
  computed: gl,
  beforeCreate: Pt,
  created: Pt,
  beforeMount: Pt,
  mounted: Pt,
  beforeUpdate: Pt,
  updated: Pt,
  beforeDestroy: Pt,
  beforeUnmount: Pt,
  destroyed: Pt,
  unmounted: Pt,
  activated: Pt,
  deactivated: Pt,
  errorCaptured: Pt,
  serverPrefetch: Pt,
  components: gl,
  directives: gl,
  watch: hb,
  provide: sc,
  inject: mb
}
function sc(e, t) {
  return t
    ? e
      ? function () {
          return lt(Ve(e) ? e.call(this, this) : e, Ve(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function mb(e, t) {
  return gl(Pr(e), Pr(t))
}
function Pr(e) {
  if (we(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Pt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function gl(e, t) {
  return e ? lt(Object.create(null), e, t) : t
}
function uc(e, t) {
  return e
    ? we(e) && we(t)
      ? [...new Set([...e, ...t])]
      : lt(Object.create(null), oc(e), oc(t ?? {}))
    : t
}
function hb(e, t) {
  if (!e) return t
  if (!t) return e
  const n = lt(Object.create(null), e)
  for (const a in t) n[a] = Pt(e[a], t[a])
  return n
}
function Xf() {
  return {
    app: null,
    config: {
      isNativeTag: Xg,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let gb = 0
function yb(e, t) {
  return function (a, l = null) {
    Ve(a) || (a = lt({}, a)), l != null && !je(l) && (l = null)
    const i = Xf(),
      o = new WeakSet()
    let r = !1
    const s = (i.app = {
      _uid: gb++,
      _component: a,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: jb,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...c) {
        return (
          o.has(u) ||
            (u && Ve(u.install) ? (o.add(u), u.install(s, ...c)) : Ve(u) && (o.add(u), u(s, ...c))),
          s
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), s
      },
      component(u, c) {
        return c ? ((i.components[u] = c), s) : i.components[u]
      },
      directive(u, c) {
        return c ? ((i.directives[u] = c), s) : i.directives[u]
      },
      mount(u, c, f) {
        if (!r) {
          const v = d(a, l)
          return (
            (v.appContext = i),
            f === !0 ? (f = 'svg') : f === !1 && (f = void 0),
            c && t ? t(v, u) : e(v, u, f),
            (r = !0),
            (s._container = u),
            (u.__vue_app__ = s),
            fo(v.component) || v.component.proxy
          )
        }
      },
      unmount() {
        r && (e(null, s._container), delete s._container.__vue_app__)
      },
      provide(u, c) {
        return (i.provides[u] = c), s
      },
      runWithContext(u) {
        const c = kl
        kl = s
        try {
          return u()
        } finally {
          kl = c
        }
      }
    })
    return s
  }
}
let kl = null
function Fe(e, t) {
  if (gt) {
    let n = gt.provides
    const a = gt.parent && gt.parent.provides
    a === n && (n = gt.provides = Object.create(a)), (n[e] = t)
  }
}
function Pe(e, t, n = !1) {
  const a = gt || It
  if (a || kl) {
    const l = a
      ? a.parent == null
        ? a.vnode.appContext && a.vnode.appContext.provides
        : a.parent.provides
      : kl._context.provides
    if (l && e in l) return l[e]
    if (arguments.length > 1) return n && Ve(t) ? t.call(a && a.proxy) : t
  }
}
const Zf = {},
  Qf = () => Object.create(Zf),
  Jf = (e) => Object.getPrototypeOf(e) === Zf
function bb(e, t, n, a = !1) {
  const l = {},
    i = Qf()
  ;(e.propsDefaults = Object.create(null)), ev(e, t, l, i)
  for (const o in e.propsOptions[0]) o in l || (l[o] = void 0)
  n ? (e.props = a ? l : If(l)) : e.type.props ? (e.props = l) : (e.props = i), (e.attrs = i)
}
function Sb(e, t, n, a) {
  const {
      props: l,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    r = Ce(l),
    [s] = e.propsOptions
  let u = !1
  if ((a || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps
      for (let f = 0; f < c.length; f++) {
        let v = c[f]
        if (oo(e.emitsOptions, v)) continue
        const m = t[v]
        if (s)
          if ($e(i, v)) m !== i[v] && ((i[v] = m), (u = !0))
          else {
            const g = Kt(v)
            l[g] = Ir(s, r, g, m, e, !1)
          }
        else m !== i[v] && ((i[v] = m), (u = !0))
      }
    }
  } else {
    ev(e, t, l, i) && (u = !0)
    let c
    for (const f in r)
      (!t || (!$e(t, f) && ((c = el(f)) === f || !$e(t, c)))) &&
        (s
          ? n && (n[f] !== void 0 || n[c] !== void 0) && (l[f] = Ir(s, r, f, void 0, e, !0))
          : delete l[f])
    if (i !== r) for (const f in i) (!t || !$e(t, f)) && (delete i[f], (u = !0))
  }
  u && _n(e.attrs, 'set', '')
}
function ev(e, t, n, a) {
  const [l, i] = e.propsOptions
  let o = !1,
    r
  if (t)
    for (let s in t) {
      if (bl(s)) continue
      const u = t[s]
      let c
      l && $e(l, (c = Kt(s)))
        ? !i || !i.includes(c)
          ? (n[c] = u)
          : ((r || (r = {}))[c] = u)
        : oo(e.emitsOptions, s) || ((!(s in a) || u !== a[s]) && ((a[s] = u), (o = !0)))
    }
  if (i) {
    const s = Ce(n),
      u = r || Ge
    for (let c = 0; c < i.length; c++) {
      const f = i[c]
      n[f] = Ir(l, s, f, u[f], e, !$e(u, f))
    }
  }
  return o
}
function Ir(e, t, n, a, l, i) {
  const o = e[n]
  if (o != null) {
    const r = $e(o, 'default')
    if (r && a === void 0) {
      const s = o.default
      if (o.type !== Function && !o.skipFactory && Ve(s)) {
        const { propsDefaults: u } = l
        if (n in u) a = u[n]
        else {
          const c = ti(l)
          ;(a = u[n] = s.call(null, t)), c()
        }
      } else a = s
    }
    o[0] && (i && !r ? (a = !1) : o[1] && (a === '' || a === el(n)) && (a = !0))
  }
  return a
}
function tv(e, t, n = !1) {
  const a = t.propsCache,
    l = a.get(e)
  if (l) return l
  const i = e.props,
    o = {},
    r = []
  let s = !1
  if (!Ve(e)) {
    const c = (f) => {
      s = !0
      const [v, m] = tv(f, t, !0)
      lt(o, v), m && r.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!i && !s) return je(e) && a.set(e, Fa), Fa
  if (we(i))
    for (let c = 0; c < i.length; c++) {
      const f = Kt(i[c])
      cc(f) && (o[f] = Ge)
    }
  else if (i)
    for (const c in i) {
      const f = Kt(c)
      if (cc(f)) {
        const v = i[c],
          m = (o[f] = we(v) || Ve(v) ? { type: v } : lt({}, v))
        if (m) {
          const g = vc(Boolean, m.type),
            h = vc(String, m.type)
          ;(m[0] = g > -1), (m[1] = h < 0 || g < h), (g > -1 || $e(m, 'default')) && r.push(f)
        }
      }
    }
  const u = [o, r]
  return je(e) && a.set(e, u), u
}
function cc(e) {
  return e[0] !== '$' && !bl(e)
}
function dc(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function fc(e, t) {
  return dc(e) === dc(t)
}
function vc(e, t) {
  return we(t) ? t.findIndex((n) => fc(n, e)) : Ve(t) && fc(t, e) ? 0 : -1
}
const nv = (e) => e[0] === '_' || e === '$stable',
  js = (e) => (we(e) ? e.map(an) : [an(e)]),
  pb = (e, t, n) => {
    if (t._n) return t
    const a = nn((...l) => js(t(...l)), n)
    return (a._c = !1), a
  },
  av = (e, t, n) => {
    const a = e._ctx
    for (const l in e) {
      if (nv(l)) continue
      const i = e[l]
      if (Ve(i)) t[l] = pb(l, i, a)
      else if (i != null) {
        const o = js(i)
        t[l] = () => o
      }
    }
  },
  lv = (e, t) => {
    const n = js(t)
    e.slots.default = () => n
  },
  kb = (e, t) => {
    const n = (e.slots = Qf())
    if (e.vnode.shapeFlag & 32) {
      const a = t._
      a ? (lt(n, t), df(n, '_', a, !0)) : av(t, n)
    } else t && lv(e, t)
  },
  wb = (e, t, n) => {
    const { vnode: a, slots: l } = e
    let i = !0,
      o = Ge
    if (a.shapeFlag & 32) {
      const r = t._
      r
        ? n && r === 1
          ? (i = !1)
          : (lt(l, t), !n && r === 1 && delete l._)
        : ((i = !t.$stable), av(t, l)),
        (o = t)
    } else t && (lv(e, t), (o = { default: 1 }))
    if (i) for (const r in l) !nv(r) && o[r] == null && delete l[r]
  }
function Ar(e, t, n, a, l = !1) {
  if (we(e)) {
    e.forEach((v, m) => Ar(v, t && (we(t) ? t[m] : t), n, a, l))
    return
  }
  if (Ti(a) && !l) return
  const i = a.shapeFlag & 4 ? fo(a.component) || a.component.proxy : a.el,
    o = l ? null : i,
    { i: r, r: s } = e,
    u = t && t.r,
    c = r.refs === Ge ? (r.refs = {}) : r.refs,
    f = r.setupState
  if (
    (u != null &&
      u !== s &&
      (tt(u) ? ((c[u] = null), $e(f, u) && (f[u] = null)) : nt(u) && (u.value = null)),
    Ve(s))
  )
    Gn(s, r, 12, [o, c])
  else {
    const v = tt(s),
      m = nt(s)
    if (v || m) {
      const g = () => {
        if (e.f) {
          const h = v ? ($e(f, s) ? f[s] : c[s]) : s.value
          l
            ? we(h) && Ss(h, i)
            : we(h)
              ? h.includes(i) || h.push(i)
              : v
                ? ((c[s] = [i]), $e(f, s) && (f[s] = c[s]))
                : ((s.value = [i]), e.k && (c[e.k] = s.value))
        } else v ? ((c[s] = o), $e(f, s) && (f[s] = o)) : m && ((s.value = o), e.k && (c[e.k] = o))
      }
      o ? ((g.id = -1), Et(g, n)) : g()
    }
  }
}
const Et = Qy
function xb(e) {
  return Cb(e)
}
function Cb(e, t) {
  const n = vf()
  n.__VUE__ = !0
  const {
      insert: a,
      remove: l,
      patchProp: i,
      createElement: o,
      createText: r,
      createComment: s,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: v,
      setScopeId: m = Wt,
      insertStaticContent: g
    } = e,
    h = (
      C,
      B,
      M,
      H = null,
      G = null,
      ie = null,
      le = void 0,
      re = null,
      ce = !!B.dynamicChildren
    ) => {
      if (C === B) return
      C && !mn(C, B) && ((H = R(C)), ee(C, G, ie, !0), (C = null)),
        B.patchFlag === -2 && ((ce = !1), (B.dynamicChildren = null))
      const { type: ae, ref: ye, shapeFlag: ke } = B
      switch (ae) {
        case ei:
          y(C, B, M, H)
          break
        case At:
          S(C, B, M, H)
          break
        case Ei:
          C == null && p(B, M, H, le)
          break
        case me:
          I(C, B, M, H, G, ie, le, re, ce)
          break
        default:
          ke & 1
            ? w(C, B, M, H, G, ie, le, re, ce)
            : ke & 6
              ? D(C, B, M, H, G, ie, le, re, ce)
              : (ke & 64 || ke & 128) && ae.process(C, B, M, H, G, ie, le, re, ce, U)
      }
      ye != null && G && Ar(ye, C && C.ref, ie, B || C, !B)
    },
    y = (C, B, M, H) => {
      if (C == null) a((B.el = r(B.children)), M, H)
      else {
        const G = (B.el = C.el)
        B.children !== C.children && u(G, B.children)
      }
    },
    S = (C, B, M, H) => {
      C == null ? a((B.el = s(B.children || '')), M, H) : (B.el = C.el)
    },
    p = (C, B, M, H) => {
      ;[C.el, C.anchor] = g(C.children, B, M, H, C.el, C.anchor)
    },
    A = ({ el: C, anchor: B }, M, H) => {
      let G
      for (; C && C !== B; ) (G = v(C)), a(C, M, H), (C = G)
      a(B, M, H)
    },
    T = ({ el: C, anchor: B }) => {
      let M
      for (; C && C !== B; ) (M = v(C)), l(C), (C = M)
      l(B)
    },
    w = (C, B, M, H, G, ie, le, re, ce) => {
      B.type === 'svg' ? (le = 'svg') : B.type === 'math' && (le = 'mathml'),
        C == null ? x(B, M, H, G, ie, le, re, ce) : k(C, B, G, ie, le, re, ce)
    },
    x = (C, B, M, H, G, ie, le, re) => {
      let ce, ae
      const { props: ye, shapeFlag: ke, transition: pe, dirs: Ie } = C
      if (
        ((ce = C.el = o(C.type, ie, ye && ye.is, ye)),
        ke & 8 ? c(ce, C.children) : ke & 16 && _(C.children, ce, null, H, G, Zo(C, ie), le, re),
        Ie && Jn(C, null, H, 'created'),
        V(ce, C, C.scopeId, le, H),
        ye)
      ) {
        for (const ze in ye)
          ze !== 'value' && !bl(ze) && i(ce, ze, null, ye[ze], ie, C.children, H, G, Q)
        'value' in ye && i(ce, 'value', null, ye.value, ie),
          (ae = ye.onVnodeBeforeMount) && fn(ae, H, C)
      }
      Ie && Jn(C, null, H, 'beforeMount')
      const Be = _b(G, pe)
      Be && pe.beforeEnter(ce),
        a(ce, B, M),
        ((ae = ye && ye.onVnodeMounted) || Be || Ie) &&
          Et(() => {
            ae && fn(ae, H, C), Be && pe.enter(ce), Ie && Jn(C, null, H, 'mounted')
          }, G)
    },
    V = (C, B, M, H, G) => {
      if ((M && m(C, M), H)) for (let ie = 0; ie < H.length; ie++) m(C, H[ie])
      if (G) {
        let ie = G.subTree
        if (B === ie) {
          const le = G.vnode
          V(C, le, le.scopeId, le.slotScopeIds, G.parent)
        }
      }
    },
    _ = (C, B, M, H, G, ie, le, re, ce = 0) => {
      for (let ae = ce; ae < C.length; ae++) {
        const ye = (C[ae] = re ? Hn(C[ae]) : an(C[ae]))
        h(null, ye, B, M, H, G, ie, le, re)
      }
    },
    k = (C, B, M, H, G, ie, le) => {
      const re = (B.el = C.el)
      let { patchFlag: ce, dynamicChildren: ae, dirs: ye } = B
      ce |= C.patchFlag & 16
      const ke = C.props || Ge,
        pe = B.props || Ge
      let Ie
      if (
        (M && ea(M, !1),
        (Ie = pe.onVnodeBeforeUpdate) && fn(Ie, M, B, C),
        ye && Jn(B, C, M, 'beforeUpdate'),
        M && ea(M, !0),
        ae
          ? P(C.dynamicChildren, ae, re, M, H, Zo(B, G), ie)
          : le || F(C, B, re, null, M, H, Zo(B, G), ie, !1),
        ce > 0)
      ) {
        if (ce & 16) E(re, B, ke, pe, M, H, G)
        else if (
          (ce & 2 && ke.class !== pe.class && i(re, 'class', null, pe.class, G),
          ce & 4 && i(re, 'style', ke.style, pe.style, G),
          ce & 8)
        ) {
          const Be = B.dynamicProps
          for (let ze = 0; ze < Be.length; ze++) {
            const Ye = Be[ze],
              vt = ke[Ye],
              tn = pe[Ye]
            ;(tn !== vt || Ye === 'value') && i(re, Ye, vt, tn, G, C.children, M, H, Q)
          }
        }
        ce & 1 && C.children !== B.children && c(re, B.children)
      } else !le && ae == null && E(re, B, ke, pe, M, H, G)
      ;((Ie = pe.onVnodeUpdated) || ye) &&
        Et(() => {
          Ie && fn(Ie, M, B, C), ye && Jn(B, C, M, 'updated')
        }, H)
    },
    P = (C, B, M, H, G, ie, le) => {
      for (let re = 0; re < B.length; re++) {
        const ce = C[re],
          ae = B[re],
          ye = ce.el && (ce.type === me || !mn(ce, ae) || ce.shapeFlag & 70) ? f(ce.el) : M
        h(ce, ae, ye, null, H, G, ie, le, !0)
      }
    },
    E = (C, B, M, H, G, ie, le) => {
      if (M !== H) {
        if (M !== Ge)
          for (const re in M)
            !bl(re) && !(re in H) && i(C, re, M[re], null, le, B.children, G, ie, Q)
        for (const re in H) {
          if (bl(re)) continue
          const ce = H[re],
            ae = M[re]
          ce !== ae && re !== 'value' && i(C, re, ae, ce, le, B.children, G, ie, Q)
        }
        'value' in H && i(C, 'value', M.value, H.value, le)
      }
    },
    I = (C, B, M, H, G, ie, le, re, ce) => {
      const ae = (B.el = C ? C.el : r('')),
        ye = (B.anchor = C ? C.anchor : r(''))
      let { patchFlag: ke, dynamicChildren: pe, slotScopeIds: Ie } = B
      Ie && (re = re ? re.concat(Ie) : Ie),
        C == null
          ? (a(ae, M, H), a(ye, M, H), _(B.children || [], M, ye, G, ie, le, re, ce))
          : ke > 0 && ke & 64 && pe && C.dynamicChildren
            ? (P(C.dynamicChildren, pe, M, G, ie, le, re),
              (B.key != null || (G && B === G.subTree)) && Ws(C, B, !0))
            : F(C, B, M, ye, G, ie, le, re, ce)
    },
    D = (C, B, M, H, G, ie, le, re, ce) => {
      ;(B.slotScopeIds = re),
        C == null
          ? B.shapeFlag & 512
            ? G.ctx.activate(B, M, H, le, ce)
            : L(B, M, H, G, ie, le, ce)
          : W(C, B, ce)
    },
    L = (C, B, M, H, G, ie, le) => {
      const re = (C.component = $b(C, H, G))
      if ((so(C) && (re.ctx.renderer = U), Ob(re), re.asyncDep)) {
        if ((G && G.registerDep(re, Y), !C.el)) {
          const ce = (re.subTree = d(At))
          S(null, ce, B, M)
        }
      } else Y(re, C, B, M, G, ie, le)
    },
    W = (C, B, M) => {
      const H = (B.component = C.component)
      if (zy(C, B, M))
        if (H.asyncDep && !H.asyncResolved) {
          te(H, B, M)
          return
        } else (H.next = B), $y(H.update), (H.effect.dirty = !0), H.update()
      else (B.el = C.el), (H.vnode = B)
    },
    Y = (C, B, M, H, G, ie, le) => {
      const re = () => {
          if (C.isMounted) {
            let { next: ye, bu: ke, u: pe, parent: Ie, vnode: Be } = C
            {
              const Ea = iv(C)
              if (Ea) {
                ye && ((ye.el = Be.el), te(C, ye, le)),
                  Ea.asyncDep.then(() => {
                    C.isUnmounted || re()
                  })
                return
              }
            }
            let ze = ye,
              Ye
            ea(C, !1),
              ye ? ((ye.el = Be.el), te(C, ye, le)) : (ye = Be),
              ke && Ii(ke),
              (Ye = ye.props && ye.props.onVnodeBeforeUpdate) && fn(Ye, Ie, ye, Be),
              ea(C, !0)
            const vt = Ko(C),
              tn = C.subTree
            ;(C.subTree = vt),
              h(tn, vt, f(tn.el), R(tn), C, G, ie),
              (ye.el = vt.el),
              ze === null && Ds(C, vt.el),
              pe && Et(pe, G),
              (Ye = ye.props && ye.props.onVnodeUpdated) && Et(() => fn(Ye, Ie, ye, Be), G)
          } else {
            let ye
            const { el: ke, props: pe } = B,
              { bm: Ie, m: Be, parent: ze } = C,
              Ye = Ti(B)
            if (
              (ea(C, !1),
              Ie && Ii(Ie),
              !Ye && (ye = pe && pe.onVnodeBeforeMount) && fn(ye, ze, B),
              ea(C, !0),
              ke && Z)
            ) {
              const vt = () => {
                ;(C.subTree = Ko(C)), Z(ke, C.subTree, C, G, null)
              }
              Ye ? B.type.__asyncLoader().then(() => !C.isUnmounted && vt()) : vt()
            } else {
              const vt = (C.subTree = Ko(C))
              h(null, vt, M, H, C, G, ie), (B.el = vt.el)
            }
            if ((Be && Et(Be, G), !Ye && (ye = pe && pe.onVnodeMounted))) {
              const vt = B
              Et(() => fn(ye, ze, vt), G)
            }
            ;(B.shapeFlag & 256 || (ze && Ti(ze.vnode) && ze.vnode.shapeFlag & 256)) &&
              C.a &&
              Et(C.a, G),
              (C.isMounted = !0),
              (B = M = H = null)
          }
        },
        ce = (C.effect = new ks(re, Wt, () => Ts(ae), C.scope)),
        ae = (C.update = () => {
          ce.dirty && ce.run()
        })
      ;(ae.id = C.uid), ea(C, !0), ae()
    },
    te = (C, B, M) => {
      B.component = C
      const H = C.vnode.props
      ;(C.vnode = B), (C.next = null), Sb(C, B.props, H, M), wb(C, B.children, M), Kn(), tc(C), qn()
    },
    F = (C, B, M, H, G, ie, le, re, ce = !1) => {
      const ae = C && C.children,
        ye = C ? C.shapeFlag : 0,
        ke = B.children,
        { patchFlag: pe, shapeFlag: Ie } = B
      if (pe > 0) {
        if (pe & 128) {
          O(ae, ke, M, H, G, ie, le, re, ce)
          return
        } else if (pe & 256) {
          q(ae, ke, M, H, G, ie, le, re, ce)
          return
        }
      }
      Ie & 8
        ? (ye & 16 && Q(ae, G, ie), ke !== ae && c(M, ke))
        : ye & 16
          ? Ie & 16
            ? O(ae, ke, M, H, G, ie, le, re, ce)
            : Q(ae, G, ie, !0)
          : (ye & 8 && c(M, ''), Ie & 16 && _(ke, M, H, G, ie, le, re, ce))
    },
    q = (C, B, M, H, G, ie, le, re, ce) => {
      ;(C = C || Fa), (B = B || Fa)
      const ae = C.length,
        ye = B.length,
        ke = Math.min(ae, ye)
      let pe
      for (pe = 0; pe < ke; pe++) {
        const Ie = (B[pe] = ce ? Hn(B[pe]) : an(B[pe]))
        h(C[pe], Ie, M, null, G, ie, le, re, ce)
      }
      ae > ye ? Q(C, G, ie, !0, !1, ke) : _(B, M, H, G, ie, le, re, ce, ke)
    },
    O = (C, B, M, H, G, ie, le, re, ce) => {
      let ae = 0
      const ye = B.length
      let ke = C.length - 1,
        pe = ye - 1
      for (; ae <= ke && ae <= pe; ) {
        const Ie = C[ae],
          Be = (B[ae] = ce ? Hn(B[ae]) : an(B[ae]))
        if (mn(Ie, Be)) h(Ie, Be, M, null, G, ie, le, re, ce)
        else break
        ae++
      }
      for (; ae <= ke && ae <= pe; ) {
        const Ie = C[ke],
          Be = (B[pe] = ce ? Hn(B[pe]) : an(B[pe]))
        if (mn(Ie, Be)) h(Ie, Be, M, null, G, ie, le, re, ce)
        else break
        ke--, pe--
      }
      if (ae > ke) {
        if (ae <= pe) {
          const Ie = pe + 1,
            Be = Ie < ye ? B[Ie].el : H
          for (; ae <= pe; )
            h(null, (B[ae] = ce ? Hn(B[ae]) : an(B[ae])), M, Be, G, ie, le, re, ce), ae++
        }
      } else if (ae > pe) for (; ae <= ke; ) ee(C[ae], G, ie, !0), ae++
      else {
        const Ie = ae,
          Be = ae,
          ze = new Map()
        for (ae = Be; ae <= pe; ae++) {
          const Rt = (B[ae] = ce ? Hn(B[ae]) : an(B[ae]))
          Rt.key != null && ze.set(Rt.key, ae)
        }
        let Ye,
          vt = 0
        const tn = pe - Be + 1
        let Ea = !1,
          Wu = 0
        const dl = new Array(tn)
        for (ae = 0; ae < tn; ae++) dl[ae] = 0
        for (ae = Ie; ae <= ke; ae++) {
          const Rt = C[ae]
          if (vt >= tn) {
            ee(Rt, G, ie, !0)
            continue
          }
          let dn
          if (Rt.key != null) dn = ze.get(Rt.key)
          else
            for (Ye = Be; Ye <= pe; Ye++)
              if (dl[Ye - Be] === 0 && mn(Rt, B[Ye])) {
                dn = Ye
                break
              }
          dn === void 0
            ? ee(Rt, G, ie, !0)
            : ((dl[dn - Be] = ae + 1),
              dn >= Wu ? (Wu = dn) : (Ea = !0),
              h(Rt, B[dn], M, null, G, ie, le, re, ce),
              vt++)
        }
        const Uu = Ea ? Vb(dl) : Fa
        for (Ye = Uu.length - 1, ae = tn - 1; ae >= 0; ae--) {
          const Rt = Be + ae,
            dn = B[Rt],
            Gu = Rt + 1 < ye ? B[Rt + 1].el : H
          dl[ae] === 0
            ? h(null, dn, M, Gu, G, ie, le, re, ce)
            : Ea && (Ye < 0 || ae !== Uu[Ye] ? z(dn, M, Gu, 2) : Ye--)
        }
      }
    },
    z = (C, B, M, H, G = null) => {
      const { el: ie, type: le, transition: re, children: ce, shapeFlag: ae } = C
      if (ae & 6) {
        z(C.component.subTree, B, M, H)
        return
      }
      if (ae & 128) {
        C.suspense.move(B, M, H)
        return
      }
      if (ae & 64) {
        le.move(C, B, M, U)
        return
      }
      if (le === me) {
        a(ie, B, M)
        for (let ke = 0; ke < ce.length; ke++) z(ce[ke], B, M, H)
        a(C.anchor, B, M)
        return
      }
      if (le === Ei) {
        A(C, B, M)
        return
      }
      if (H !== 2 && ae & 1 && re)
        if (H === 0) re.beforeEnter(ie), a(ie, B, M), Et(() => re.enter(ie), G)
        else {
          const { leave: ke, delayLeave: pe, afterLeave: Ie } = re,
            Be = () => a(ie, B, M),
            ze = () => {
              ke(ie, () => {
                Be(), Ie && Ie()
              })
            }
          pe ? pe(ie, Be, ze) : ze()
        }
      else a(ie, B, M)
    },
    ee = (C, B, M, H = !1, G = !1) => {
      const {
        type: ie,
        props: le,
        ref: re,
        children: ce,
        dynamicChildren: ae,
        shapeFlag: ye,
        patchFlag: ke,
        dirs: pe
      } = C
      if ((re != null && Ar(re, null, M, C, !0), ye & 256)) {
        B.ctx.deactivate(C)
        return
      }
      const Ie = ye & 1 && pe,
        Be = !Ti(C)
      let ze
      if ((Be && (ze = le && le.onVnodeBeforeUnmount) && fn(ze, B, C), ye & 6))
        ue(C.component, M, H)
      else {
        if (ye & 128) {
          C.suspense.unmount(M, H)
          return
        }
        Ie && Jn(C, null, B, 'beforeUnmount'),
          ye & 64
            ? C.type.remove(C, B, M, G, U, H)
            : ae && (ie !== me || (ke > 0 && ke & 64))
              ? Q(ae, B, M, !1, !0)
              : ((ie === me && ke & 384) || (!G && ye & 16)) && Q(ce, B, M),
          H && he(C)
      }
      ;((Be && (ze = le && le.onVnodeUnmounted)) || Ie) &&
        Et(() => {
          ze && fn(ze, B, C), Ie && Jn(C, null, B, 'unmounted')
        }, M)
    },
    he = (C) => {
      const { type: B, el: M, anchor: H, transition: G } = C
      if (B === me) {
        Se(M, H)
        return
      }
      if (B === Ei) {
        T(C)
        return
      }
      const ie = () => {
        l(M), G && !G.persisted && G.afterLeave && G.afterLeave()
      }
      if (C.shapeFlag & 1 && G && !G.persisted) {
        const { leave: le, delayLeave: re } = G,
          ce = () => le(M, ie)
        re ? re(C.el, ie, ce) : ce()
      } else ie()
    },
    Se = (C, B) => {
      let M
      for (; C !== B; ) (M = v(C)), l(C), (C = M)
      l(B)
    },
    ue = (C, B, M) => {
      const { bum: H, scope: G, update: ie, subTree: le, um: re } = C
      H && Ii(H),
        G.stop(),
        ie && ((ie.active = !1), ee(le, C, B, M)),
        re && Et(re, B),
        Et(() => {
          C.isUnmounted = !0
        }, B),
        B &&
          B.pendingBranch &&
          !B.isUnmounted &&
          C.asyncDep &&
          !C.asyncResolved &&
          C.suspenseId === B.pendingId &&
          (B.deps--, B.deps === 0 && B.resolve())
    },
    Q = (C, B, M, H = !1, G = !1, ie = 0) => {
      for (let le = ie; le < C.length; le++) ee(C[le], B, M, H, G)
    },
    R = (C) =>
      C.shapeFlag & 6
        ? R(C.component.subTree)
        : C.shapeFlag & 128
          ? C.suspense.next()
          : v(C.anchor || C.el)
  let oe = !1
  const ne = (C, B, M) => {
      C == null
        ? B._vnode && ee(B._vnode, null, null, !0)
        : h(B._vnode || null, C, B, null, null, null, M),
        oe || ((oe = !0), tc(), Of(), (oe = !1)),
        (B._vnode = C)
    },
    U = { p: h, um: ee, m: z, r: he, mt: L, mc: _, pc: F, pbc: P, n: R, o: e }
  let ge, Z
  return { render: ne, hydrate: ge, createApp: yb(ne, ge) }
}
function Zo({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function ea({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function _b(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ws(e, t, n = !1) {
  const a = e.children,
    l = t.children
  if (we(a) && we(l))
    for (let i = 0; i < a.length; i++) {
      const o = a[i]
      let r = l[i]
      r.shapeFlag & 1 &&
        !r.dynamicChildren &&
        ((r.patchFlag <= 0 || r.patchFlag === 32) && ((r = l[i] = Hn(l[i])), (r.el = o.el)),
        n || Ws(o, r)),
        r.type === ei && (r.el = o.el)
    }
}
function Vb(e) {
  const t = e.slice(),
    n = [0]
  let a, l, i, o, r
  const s = e.length
  for (a = 0; a < s; a++) {
    const u = e[a]
    if (u !== 0) {
      if (((l = n[n.length - 1]), e[l] < u)) {
        ;(t[a] = l), n.push(a)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; ) (r = (i + o) >> 1), e[n[r]] < u ? (i = r + 1) : (o = r)
      u < e[n[i]] && (i > 0 && (t[a] = n[i - 1]), (n[i] = a))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function iv(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : iv(t)
}
const Pb = (e) => e.__isTeleport,
  wl = (e) => e && (e.disabled || e.disabled === ''),
  mc = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  hc = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Tr = (e, t) => {
    const n = e && e.to
    return tt(n) ? (t ? t(n) : null) : n
  },
  Ib = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, a, l, i, o, r, s, u) {
      const {
          mc: c,
          pc: f,
          pbc: v,
          o: { insert: m, querySelector: g, createText: h, createComment: y }
        } = u,
        S = wl(t.props)
      let { shapeFlag: p, children: A, dynamicChildren: T } = t
      if (e == null) {
        const w = (t.el = h('')),
          x = (t.anchor = h(''))
        m(w, n, a), m(x, n, a)
        const V = (t.target = Tr(t.props, g)),
          _ = (t.targetAnchor = h(''))
        V &&
          (m(_, V),
          o === 'svg' || mc(V) ? (o = 'svg') : (o === 'mathml' || hc(V)) && (o = 'mathml'))
        const k = (P, E) => {
          p & 16 && c(A, P, E, l, i, o, r, s)
        }
        S ? k(n, x) : V && k(V, _)
      } else {
        t.el = e.el
        const w = (t.anchor = e.anchor),
          x = (t.target = e.target),
          V = (t.targetAnchor = e.targetAnchor),
          _ = wl(e.props),
          k = _ ? n : x,
          P = _ ? w : V
        if (
          (o === 'svg' || mc(x) ? (o = 'svg') : (o === 'mathml' || hc(x)) && (o = 'mathml'),
          T
            ? (v(e.dynamicChildren, T, k, l, i, o, r), Ws(e, t, !0))
            : s || f(e, t, k, P, l, i, o, r, !1),
          S)
        )
          _
            ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to)
            : ki(t, n, w, u, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const E = (t.target = Tr(t.props, g))
          E && ki(t, E, null, u, 0)
        } else _ && ki(t, x, V, u, 1)
      }
      ov(t)
    },
    remove(e, t, n, a, { um: l, o: { remove: i } }, o) {
      const { shapeFlag: r, children: s, anchor: u, targetAnchor: c, target: f, props: v } = e
      if ((f && i(c), o && i(u), r & 16)) {
        const m = o || !wl(v)
        for (let g = 0; g < s.length; g++) {
          const h = s[g]
          l(h, t, n, m, !!h.dynamicChildren)
        }
      }
    },
    move: ki,
    hydrate: Ab
  }
function ki(e, t, n, { o: { insert: a }, m: l }, i = 2) {
  i === 0 && a(e.targetAnchor, t, n)
  const { el: o, anchor: r, shapeFlag: s, children: u, props: c } = e,
    f = i === 2
  if ((f && a(o, t, n), (!f || wl(c)) && s & 16))
    for (let v = 0; v < u.length; v++) l(u[v], t, n, 2)
  f && a(r, t, n)
}
function Ab(e, t, n, a, l, i, { o: { nextSibling: o, parentNode: r, querySelector: s } }, u) {
  const c = (t.target = Tr(t.props, s))
  if (c) {
    const f = c._lpa || c.firstChild
    if (t.shapeFlag & 16)
      if (wl(t.props)) (t.anchor = u(o(e), t, r(e), n, a, l, i)), (t.targetAnchor = f)
      else {
        t.anchor = o(e)
        let v = f
        for (; v; )
          if (((v = o(v)), v && v.nodeType === 8 && v.data === 'teleport anchor')) {
            ;(t.targetAnchor = v), (c._lpa = t.targetAnchor && o(t.targetAnchor))
            break
          }
        u(f, t, c, n, a, l, i)
      }
    ov(t)
  }
  return t.anchor && o(t.anchor)
}
const Tb = Ib
function ov(e) {
  const t = e.ctx
  if (t && t.ut) {
    let n = e.children[0].el
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid), (n = n.nextSibling)
    t.ut()
  }
}
const me = Symbol.for('v-fgt'),
  ei = Symbol.for('v-txt'),
  At = Symbol.for('v-cmt'),
  Ei = Symbol.for('v-stc'),
  xl = []
let Ut = null
function st(e = !1) {
  xl.push((Ut = e ? null : []))
}
function rv() {
  xl.pop(), (Ut = xl[xl.length - 1] || null)
}
let ja = 1
function gc(e) {
  ja += e
}
function sv(e) {
  return (e.dynamicChildren = ja > 0 ? Ut || Fa : null), rv(), ja > 0 && Ut && Ut.push(e), e
}
function Bt(e, t, n, a, l, i) {
  return sv(Oe(e, t, n, a, l, i, !0))
}
function Bi(e, t, n, a, l) {
  return sv(d(e, t, n, a, l, !0))
}
function Ml(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function mn(e, t) {
  return e.type === t.type && e.key === t.key
}
const uv = ({ key: e }) => e ?? null,
  Di = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (tt(e) || nt(e) || Ve(e) ? { i: It, r: e, k: t, f: !!n } : e) : null
  )
function Oe(e, t = null, n = null, a = 0, l = null, i = e === me ? 0 : 1, o = !1, r = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && uv(t),
    ref: t && Di(t),
    scopeId: ro,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: It
  }
  return (
    r ? (Us(s, n), i & 128 && e.normalize(s)) : n && (s.shapeFlag |= tt(n) ? 8 : 16),
    ja > 0 && !o && Ut && (s.patchFlag > 0 || i & 6) && s.patchFlag !== 32 && Ut.push(s),
    s
  )
}
const d = Eb
function Eb(e, t = null, n = null, a = 0, l = null, i = !1) {
  if (((!e || e === Wy) && (e = At), Ml(e))) {
    const r = Vn(e, t, !0)
    return (
      n && Us(r, n),
      ja > 0 && !i && Ut && (r.shapeFlag & 6 ? (Ut[Ut.indexOf(e)] = r) : Ut.push(r)),
      (r.patchFlag |= -2),
      r
    )
  }
  if ((zb(e) && (e = e.__vccOpts), t)) {
    t = Bb(t)
    let { class: r, style: s } = t
    r && !tt(r) && (t.class = no(r)),
      je(s) && (Af(s) && !we(s) && (s = lt({}, s)), (t.style = to(s)))
  }
  const o = tt(e) ? 1 : Gy(e) ? 128 : Pb(e) ? 64 : je(e) ? 4 : Ve(e) ? 2 : 0
  return Oe(e, t, n, a, l, o, i, !0)
}
function Bb(e) {
  return e ? (Af(e) || Jf(e) ? lt({}, e) : e) : null
}
function Vn(e, t, n = !1, a = !1) {
  const { props: l, ref: i, patchFlag: o, children: r, transition: s } = e,
    u = t ? X(l || {}, t) : l,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && uv(u),
      ref: t && t.ref ? (n && i ? (we(i) ? i.concat(Di(t)) : [i, Di(t)]) : Di(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: r,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== me ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: s,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Vn(e.ssContent),
      ssFallback: e.ssFallback && Vn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return s && a && (c.transition = s.clone(c)), c
}
function qt(e = ' ', t = 0) {
  return d(ei, null, e, t)
}
function Db(e, t) {
  const n = d(Ei, null, e)
  return (n.staticCount = t), n
}
function Qo(e = '', t = !1) {
  return t ? (st(), Bi(At, null, e)) : d(At, null, e)
}
function an(e) {
  return e == null || typeof e == 'boolean'
    ? d(At)
    : we(e)
      ? d(me, null, e.slice())
      : typeof e == 'object'
        ? Hn(e)
        : d(ei, null, String(e))
}
function Hn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vn(e)
}
function Us(e, t) {
  let n = 0
  const { shapeFlag: a } = e
  if (t == null) t = null
  else if (we(t)) n = 16
  else if (typeof t == 'object')
    if (a & 65) {
      const l = t.default
      l && (l._c && (l._d = !1), Us(e, l()), l._c && (l._d = !0))
      return
    } else {
      n = 32
      const l = t._
      !l && !Jf(t)
        ? (t._ctx = It)
        : l === 3 && It && (It.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Ve(t)
      ? ((t = { default: t, _ctx: It }), (n = 32))
      : ((t = String(t)), a & 64 ? ((n = 16), (t = [qt(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function X(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const a = e[n]
    for (const l in a)
      if (l === 'class') t.class !== a.class && (t.class = no([t.class, a.class]))
      else if (l === 'style') t.style = to([t.style, a.style])
      else if (Qi(l)) {
        const i = t[l],
          o = a[l]
        o && i !== o && !(we(i) && i.includes(o)) && (t[l] = i ? [].concat(i, o) : o)
      } else l !== '' && (t[l] = a[l])
  }
  return t
}
function fn(e, t, n, a = null) {
  Yt(e, t, 7, [n, a])
}
const Mb = Xf()
let Rb = 0
function $b(e, t, n) {
  const a = e.type,
    l = (t ? t.appContext : e.appContext) || Mb,
    i = {
      uid: Rb++,
      vnode: e,
      type: a,
      parent: t,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new gf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(l.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: tv(a, l),
      emitsOptions: Ff(a, l),
      emit: null,
      emitted: null,
      propsDefaults: Ge,
      inheritAttrs: a.inheritAttrs,
      ctx: Ge,
      data: Ge,
      props: Ge,
      attrs: Ge,
      slots: Ge,
      refs: Ge,
      setupState: Ge,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = Ly.bind(null, i)), e.ce && e.ce(i), i
  )
}
let gt = null
const Gs = () => gt || It
let zi, Er
{
  const e = vf(),
    t = (n, a) => {
      let l
      return (
        (l = e[n]) || (l = e[n] = []),
        l.push(a),
        (i) => {
          l.length > 1 ? l.forEach((o) => o(i)) : l[0](i)
        }
      )
    }
  ;(zi = t('__VUE_INSTANCE_SETTERS__', (n) => (gt = n))),
    (Er = t('__VUE_SSR_SETTERS__', (n) => (co = n)))
}
const ti = (e) => {
    const t = gt
    return (
      zi(e),
      e.scope.on(),
      () => {
        e.scope.off(), zi(t)
      }
    )
  },
  yc = () => {
    gt && gt.scope.off(), zi(null)
  }
function cv(e) {
  return e.vnode.shapeFlag & 4
}
let co = !1
function Ob(e, t = !1) {
  t && Er(t)
  const { props: n, children: a } = e.vnode,
    l = cv(e)
  bb(e, n, l, t), kb(e, a)
  const i = l ? Lb(e, t) : void 0
  return t && Er(!1), i
}
function Lb(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, cb))
  const { setup: a } = n
  if (a) {
    const l = (e.setupContext = a.length > 1 ? Nb(e) : null),
      i = ti(e)
    Kn()
    const o = Gn(a, e, 0, [e.props, l])
    if ((qn(), i(), sf(o))) {
      if ((o.then(yc, yc), t))
        return o
          .then((r) => {
            Br(e, r, t)
          })
          .catch((r) => {
            Ql(r, e, 0)
          })
      e.asyncDep = o
    } else Br(e, o, t)
  } else dv(e, t)
}
function Br(e, t, n) {
  Ve(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : je(t) && (e.setupState = Df(t)),
    dv(e, n)
}
let bc
function dv(e, t, n) {
  const a = e.type
  if (!e.render) {
    if (!t && bc && !a.render) {
      const l = a.template || zs(e).template
      if (l) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: r, compilerOptions: s } = a,
          u = lt(lt({ isCustomElement: i, delimiters: r }, o), s)
        a.render = bc(l, u)
      }
    }
    e.render = a.render || Wt
  }
  {
    const l = ti(e)
    Kn()
    try {
      db(e)
    } finally {
      qn(), l()
    }
  }
}
const Fb = {
  get(e, t) {
    return Mt(e, 'get', ''), e[t]
  }
}
function Nb(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Fb), slots: e.slots, emit: e.emit, expose: t }
}
function fo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Df(Ps(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in pl) return pl[n](e)
        },
        has(t, n) {
          return n in t || n in pl
        }
      }))
    )
}
function Hb(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function zb(e) {
  return Ve(e) && '__vccOpts' in e
}
const b = (e, t) => Ay(e, t, co)
function sn(e, t, n) {
  const a = arguments.length
  return a === 2
    ? je(t) && !we(t)
      ? Ml(t)
        ? d(e, null, [t])
        : d(e, t)
      : d(e, null, t)
    : (a > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : a === 3 && Ml(n) && (n = [n]),
      d(e, t, n))
}
const jb = '3.4.26'
/**
 * @vue/runtime-dom v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Wb = 'http://www.w3.org/2000/svg',
  Ub = 'http://www.w3.org/1998/Math/MathML',
  zn = typeof document < 'u' ? document : null,
  Sc = zn && zn.createElement('template'),
  Gb = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, a) => {
      const l =
        t === 'svg'
          ? zn.createElementNS(Wb, e)
          : t === 'mathml'
            ? zn.createElementNS(Ub, e)
            : zn.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && a && a.multiple != null && l.setAttribute('multiple', a.multiple), l
    },
    createText: (e) => zn.createTextNode(e),
    createComment: (e) => zn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => zn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, a, l, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (l && (l === i || l.nextSibling))
        for (; t.insertBefore(l.cloneNode(!0), n), !(l === i || !(l = l.nextSibling)); );
      else {
        Sc.innerHTML = a === 'svg' ? `<svg>${e}</svg>` : a === 'mathml' ? `<math>${e}</math>` : e
        const r = Sc.content
        if (a === 'svg' || a === 'mathml') {
          const s = r.firstChild
          for (; s.firstChild; ) r.appendChild(s.firstChild)
          r.removeChild(s)
        }
        t.insertBefore(r, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  $n = 'transition',
  fl = 'animation',
  Wa = Symbol('_vtc'),
  gn = (e, { slots: t }) => sn(lb, vv(e), t)
gn.displayName = 'Transition'
const fv = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Yb = (gn.props = lt({}, jf, fv)),
  ta = (e, t = []) => {
    we(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  pc = (e) => (e ? (we(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function vv(e) {
  const t = {}
  for (const I in e) I in fv || (t[I] = e[I])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: a,
      duration: l,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: r = `${n}-enter-to`,
      appearFromClass: s = i,
      appearActiveClass: u = o,
      appearToClass: c = r,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`
    } = e,
    g = Kb(l),
    h = g && g[0],
    y = g && g[1],
    {
      onBeforeEnter: S,
      onEnter: p,
      onEnterCancelled: A,
      onLeave: T,
      onLeaveCancelled: w,
      onBeforeAppear: x = S,
      onAppear: V = p,
      onAppearCancelled: _ = A
    } = t,
    k = (I, D, L) => {
      Ln(I, D ? c : r), Ln(I, D ? u : o), L && L()
    },
    P = (I, D) => {
      ;(I._isLeaving = !1), Ln(I, f), Ln(I, m), Ln(I, v), D && D()
    },
    E = (I) => (D, L) => {
      const W = I ? V : p,
        Y = () => k(D, I, L)
      ta(W, [D, Y]),
        kc(() => {
          Ln(D, I ? s : i), Cn(D, I ? c : r), pc(W) || wc(D, a, h, Y)
        })
    }
  return lt(t, {
    onBeforeEnter(I) {
      ta(S, [I]), Cn(I, i), Cn(I, o)
    },
    onBeforeAppear(I) {
      ta(x, [I]), Cn(I, s), Cn(I, u)
    },
    onEnter: E(!1),
    onAppear: E(!0),
    onLeave(I, D) {
      I._isLeaving = !0
      const L = () => P(I, D)
      Cn(I, f),
        Cn(I, v),
        hv(),
        kc(() => {
          I._isLeaving && (Ln(I, f), Cn(I, m), pc(T) || wc(I, a, y, L))
        }),
        ta(T, [I, L])
    },
    onEnterCancelled(I) {
      k(I, !1), ta(A, [I])
    },
    onAppearCancelled(I) {
      k(I, !0), ta(_, [I])
    },
    onLeaveCancelled(I) {
      P(I), ta(w, [I])
    }
  })
}
function Kb(e) {
  if (e == null) return null
  if (je(e)) return [Jo(e.enter), Jo(e.leave)]
  {
    const t = Jo(e)
    return [t, t]
  }
}
function Jo(e) {
  return ff(e)
}
function Cn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Wa] || (e[Wa] = new Set())).add(t)
}
function Ln(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a))
  const n = e[Wa]
  n && (n.delete(t), n.size || (e[Wa] = void 0))
}
function kc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let qb = 0
function wc(e, t, n, a) {
  const l = (e._endId = ++qb),
    i = () => {
      l === e._endId && a()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: r, propCount: s } = mv(e, t)
  if (!o) return a()
  const u = o + 'end'
  let c = 0
  const f = () => {
      e.removeEventListener(u, v), i()
    },
    v = (m) => {
      m.target === e && ++c >= s && f()
    }
  setTimeout(() => {
    c < s && f()
  }, r + 1),
    e.addEventListener(u, v)
}
function mv(e, t) {
  const n = window.getComputedStyle(e),
    a = (g) => (n[g] || '').split(', '),
    l = a(`${$n}Delay`),
    i = a(`${$n}Duration`),
    o = xc(l, i),
    r = a(`${fl}Delay`),
    s = a(`${fl}Duration`),
    u = xc(r, s)
  let c = null,
    f = 0,
    v = 0
  t === $n
    ? o > 0 && ((c = $n), (f = o), (v = i.length))
    : t === fl
      ? u > 0 && ((c = fl), (f = u), (v = s.length))
      : ((f = Math.max(o, u)),
        (c = f > 0 ? (o > u ? $n : fl) : null),
        (v = c ? (c === $n ? i.length : s.length) : 0))
  const m = c === $n && /\b(transform|all)(,|$)/.test(a(`${$n}Property`).toString())
  return { type: c, timeout: f, propCount: v, hasTransform: m }
}
function xc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, a) => Cc(n) + Cc(e[a])))
}
function Cc(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function hv() {
  return document.body.offsetHeight
}
function Xb(e, t, n) {
  const a = e[Wa]
  a && (t = (t ? [t, ...a] : [...a]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const ji = Symbol('_vod'),
  gv = Symbol('_vsh'),
  Zt = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[ji] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : vl(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: a }) {
      !t != !n &&
        (a
          ? t
            ? (a.beforeEnter(e), vl(e, !0), a.enter(e))
            : a.leave(e, () => {
                vl(e, !1)
              })
          : vl(e, t))
    },
    beforeUnmount(e, { value: t }) {
      vl(e, t)
    }
  }
function vl(e, t) {
  ;(e.style.display = t ? e[ji] : 'none'), (e[gv] = !t)
}
const Zb = Symbol(''),
  Qb = /(^|;)\s*display\s*:/
function Jb(e, t, n) {
  const a = e.style,
    l = tt(n)
  let i = !1
  if (n && !l) {
    if (t)
      if (tt(t))
        for (const o of t.split(';')) {
          const r = o.slice(0, o.indexOf(':')).trim()
          n[r] == null && Mi(a, r, '')
        }
      else for (const o in t) n[o] == null && Mi(a, o, '')
    for (const o in n) o === 'display' && (i = !0), Mi(a, o, n[o])
  } else if (l) {
    if (t !== n) {
      const o = a[Zb]
      o && (n += ';' + o), (a.cssText = n), (i = Qb.test(n))
    }
  } else t && e.removeAttribute('style')
  ji in e && ((e[ji] = i ? a.display : ''), e[gv] && (a.display = 'none'))
}
const _c = /\s*!important$/
function Mi(e, t, n) {
  if (we(n)) n.forEach((a) => Mi(e, t, a))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const a = e0(e, t)
    _c.test(n) ? e.setProperty(el(a), n.replace(_c, ''), 'important') : (e[a] = n)
  }
}
const Vc = ['Webkit', 'Moz', 'ms'],
  er = {}
function e0(e, t) {
  const n = er[t]
  if (n) return n
  let a = Kt(t)
  if (a !== 'filter' && a in e) return (er[t] = a)
  a = bn(a)
  for (let l = 0; l < Vc.length; l++) {
    const i = Vc[l] + a
    if (i in e) return (er[t] = i)
  }
  return t
}
const Pc = 'http://www.w3.org/1999/xlink'
function t0(e, t, n, a, l) {
  if (a && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(Pc, t.slice(6, t.length)) : e.setAttributeNS(Pc, t, n)
  else {
    const i = oy(t)
    n == null || (i && !mf(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : n)
  }
}
function n0(e, t, n, a, l, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    a && o(a, l, i), (e[t] = n ?? '')
    return
  }
  const r = e.tagName
  if (t === 'value' && r !== 'PROGRESS' && !r.includes('-')) {
    const u = r === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n ?? ''
    ;(u !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let s = !1
  if (n === '' || n == null) {
    const u = typeof e[t]
    u === 'boolean'
      ? (n = mf(n))
      : n == null && u === 'string'
        ? ((n = ''), (s = !0))
        : u === 'number' && ((n = 0), (s = !0))
  }
  try {
    e[t] = n
  } catch {}
  s && e.removeAttribute(t)
}
function $a(e, t, n, a) {
  e.addEventListener(t, n, a)
}
function a0(e, t, n, a) {
  e.removeEventListener(t, n, a)
}
const Ic = Symbol('_vei')
function l0(e, t, n, a, l = null) {
  const i = e[Ic] || (e[Ic] = {}),
    o = i[t]
  if (a && o) o.value = a
  else {
    const [r, s] = i0(t)
    if (a) {
      const u = (i[t] = s0(a, l))
      $a(e, r, u, s)
    } else o && (a0(e, r, o, s), (i[t] = void 0))
  }
}
const Ac = /(?:Once|Passive|Capture)$/
function i0(e) {
  let t
  if (Ac.test(e)) {
    t = {}
    let a
    for (; (a = e.match(Ac)); )
      (e = e.slice(0, e.length - a[0].length)), (t[a[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : el(e.slice(2)), t]
}
let tr = 0
const o0 = Promise.resolve(),
  r0 = () => tr || (o0.then(() => (tr = 0)), (tr = Date.now()))
function s0(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now()
    else if (a._vts <= n.attached) return
    Yt(u0(a, n.value), t, 5, [a])
  }
  return (n.value = e), (n.attached = r0()), n
}
function u0(e, t) {
  if (we(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((a) => (l) => !l._stopped && a && a(l))
    )
  } else return t
}
const Tc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  c0 = (e, t, n, a, l, i, o, r, s) => {
    const u = l === 'svg'
    t === 'class'
      ? Xb(e, a, u)
      : t === 'style'
        ? Jb(e, n, a)
        : Qi(t)
          ? bs(t) || l0(e, t, n, a, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : d0(e, t, a, u)
              )
            ? n0(e, t, a, i, o, r, s)
            : (t === 'true-value' ? (e._trueValue = a) : t === 'false-value' && (e._falseValue = a),
              t0(e, t, a, u))
  }
function d0(e, t, n, a) {
  if (a) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Tc(t) && Ve(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const l = e.tagName
    if (l === 'IMG' || l === 'VIDEO' || l === 'CANVAS' || l === 'SOURCE') return !1
  }
  return Tc(t) && tt(n) ? !1 : t in e
}
const yv = new WeakMap(),
  bv = new WeakMap(),
  Wi = Symbol('_moveCb'),
  Ec = Symbol('_enterCb'),
  Sv = {
    name: 'TransitionGroup',
    props: lt({}, Yb, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Gs(),
        a = zf()
      let l, i
      return (
        Ns(() => {
          if (!l.length) return
          const o = e.moveClass || `${e.name || 'v'}-move`
          if (!g0(l[0].el, n.vnode.el, o)) return
          l.forEach(v0), l.forEach(m0)
          const r = l.filter(h0)
          hv(),
            r.forEach((s) => {
              const u = s.el,
                c = u.style
              Cn(u, o), (c.transform = c.webkitTransform = c.transitionDuration = '')
              const f = (u[Wi] = (v) => {
                ;(v && v.target !== u) ||
                  ((!v || /transform$/.test(v.propertyName)) &&
                    (u.removeEventListener('transitionend', f), (u[Wi] = null), Ln(u, o)))
              })
              u.addEventListener('transitionend', f)
            })
        }),
        () => {
          const o = Ce(e),
            r = vv(o)
          let s = o.tag || me
          if (((l = []), i))
            for (let u = 0; u < i.length; u++) {
              const c = i[u]
              c.el &&
                c.el instanceof Element &&
                (l.push(c), Dl(c, Bl(c, r, a, n)), yv.set(c, c.el.getBoundingClientRect()))
            }
          i = t.default ? Ls(t.default()) : []
          for (let u = 0; u < i.length; u++) {
            const c = i[u]
            c.key != null && Dl(c, Bl(c, r, a, n))
          }
          return d(s, null, i)
        }
      )
    }
  },
  f0 = (e) => delete e.mode
Sv.props
const Ys = Sv
function v0(e) {
  const t = e.el
  t[Wi] && t[Wi](), t[Ec] && t[Ec]()
}
function m0(e) {
  bv.set(e, e.el.getBoundingClientRect())
}
function h0(e) {
  const t = yv.get(e),
    n = bv.get(e),
    a = t.left - n.left,
    l = t.top - n.top
  if (a || l) {
    const i = e.el.style
    return (
      (i.transform = i.webkitTransform = `translate(${a}px,${l}px)`),
      (i.transitionDuration = '0s'),
      e
    )
  }
}
function g0(e, t, n) {
  const a = e.cloneNode(),
    l = e[Wa]
  l &&
    l.forEach((r) => {
      r.split(/\s+/).forEach((s) => s && a.classList.remove(s))
    }),
    n.split(/\s+/).forEach((r) => r && a.classList.add(r)),
    (a.style.display = 'none')
  const i = t.nodeType === 1 ? t : t.parentNode
  i.appendChild(a)
  const { hasTransform: o } = mv(a)
  return i.removeChild(a), o
}
const Bc = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return we(t) ? (n) => Ii(t, n) : t
}
function y0(e) {
  e.target.composing = !0
}
function Dc(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const nr = Symbol('_assign'),
  b0 = {
    created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
      e[nr] = Bc(l)
      const i = a || (l.props && l.props.type === 'number')
      $a(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return
        let r = e.value
        n && (r = r.trim()), i && (r = yr(r)), e[nr](r)
      }),
        n &&
          $a(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || ($a(e, 'compositionstart', y0), $a(e, 'compositionend', Dc), $a(e, 'change', Dc))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: a, number: l } }, i) {
      if (((e[nr] = Bc(i)), e.composing)) return
      const o = (l || e.type === 'number') && !/^0\d/.test(e.value) ? yr(e.value) : e.value,
        r = t ?? ''
      o !== r &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (a && e.value.trim() === r))) ||
          (e.value = r))
    }
  },
  S0 = ['ctrl', 'shift', 'alt', 'meta'],
  p0 = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => S0.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  Mc = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      a = t.join('.')
    return (
      n[a] ||
      (n[a] = (l, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const r = p0[t[o]]
          if (r && r(l, t)) return
        }
        return e(l, ...i)
      })
    )
  },
  k0 = lt({ patchProp: c0 }, Gb)
let Rc
function pv() {
  return Rc || (Rc = xb(k0))
}
const kv = (...e) => {
    pv().render(...e)
  },
  w0 = (...e) => {
    const t = pv().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (a) => {
        const l = C0(a)
        if (!l) return
        const i = t._component
        !Ve(i) && !i.render && !i.template && (i.template = l.innerHTML), (l.innerHTML = '')
        const o = n(l, !1, x0(l))
        return (
          l instanceof Element && (l.removeAttribute('v-cloak'), l.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  }
function x0(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function C0(e) {
  return tt(e) ? document.querySelector(e) : e
}
var _0 = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const V0 = Symbol()
var $c
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})($c || ($c = {}))
function P0() {
  const e = ao(!0),
    t = e.run(() => J({}))
  let n = [],
    a = []
  const l = Ps({
    install(i) {
      ;(l._a = i),
        i.provide(V0, l),
        (i.config.globalProperties.$pinia = l),
        a.forEach((o) => n.push(o)),
        (a = [])
    },
    use(i) {
      return !this._a && !_0 ? a.push(i) : n.push(i), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return l
}
function Dt(e, t) {
  let n
  function a() {
    ;(n = ao()),
      n.run(() =>
        t.length
          ? t(() => {
              n == null || n.stop(), a()
            })
          : t()
      )
  }
  de(
    e,
    (l) => {
      l && !n ? a() : l || (n == null || n.stop(), (n = void 0))
    },
    { immediate: !0 }
  ),
    _t(() => {
      n == null || n.stop()
    })
}
const Le = typeof window < 'u',
  Ks = Le && 'IntersectionObserver' in window,
  I0 = Le && ('ontouchstart' in window || window.navigator.maxTouchPoints > 0),
  Oc = Le && 'EyeDropper' in window
function Lc(e, t, n) {
  A0(e, t), t.set(e, n)
}
function A0(e, t) {
  if (t.has(e))
    throw new TypeError('Cannot initialize the same private elements twice on an object')
}
function T0(e, t, n) {
  return e.set(wv(e, t), n), n
}
function na(e, t) {
  return e.get(wv(e, t))
}
function wv(e, t, n) {
  if (typeof e == 'function' ? e === t : e.has(t)) return arguments.length < 3 ? t : n
  throw new TypeError('Private element is not present on this object')
}
function xv(e, t, n) {
  const a = t.length - 1
  if (a < 0) return e === void 0 ? n : e
  for (let l = 0; l < a; l++) {
    if (e == null) return n
    e = e[t[l]]
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]]
}
function Sn(e, t) {
  if (e === t) return !0
  if (
    (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) ||
    e !== Object(e) ||
    t !== Object(t)
  )
    return !1
  const n = Object.keys(e)
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => Sn(e[a], t[a]))
}
function Rl(e, t, n) {
  return e == null || !t || typeof t != 'string'
    ? n
    : e[t] !== void 0
      ? e[t]
      : ((t = t.replace(/\[(\w+)\]/g, '.$1')), (t = t.replace(/^\./, '')), xv(e, t.split('.'), n))
}
function ot(e, t, n) {
  if (t === !0) return e === void 0 ? n : e
  if (t == null || typeof t == 'boolean') return n
  if (e !== Object(e)) {
    if (typeof t != 'function') return n
    const l = t(e, n)
    return typeof l > 'u' ? n : l
  }
  if (typeof t == 'string') return Rl(e, t, n)
  if (Array.isArray(t)) return xv(e, t, n)
  if (typeof t != 'function') return n
  const a = t(e, n)
  return typeof a > 'u' ? n : a
}
function hn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
  return Array.from({ length: e }, (n, a) => t + a)
}
function fe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'px'
  if (!(e == null || e === ''))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0
}
function $l(e) {
  return e !== null && typeof e == 'object' && !Array.isArray(e)
}
function Ua(e) {
  if (e && '$el' in e) {
    const t = e.$el
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t
  }
  return e
}
const Fc = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16
  }),
  Dr = Object.freeze({
    enter: 'Enter',
    tab: 'Tab',
    delete: 'Delete',
    esc: 'Escape',
    space: 'Space',
    up: 'ArrowUp',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight',
    end: 'End',
    home: 'Home',
    del: 'Delete',
    backspace: 'Backspace',
    insert: 'Insert',
    pageup: 'PageUp',
    pagedown: 'PageDown',
    shift: 'Shift'
  })
function Cv(e) {
  return Object.keys(e)
}
function oa(e, t) {
  return t.every((n) => e.hasOwnProperty(n))
}
function _v(e, t) {
  const n = {},
    a = new Set(Object.keys(e))
  for (const l of t) a.has(l) && (n[l] = e[l])
  return n
}
function Mr(e, t, n) {
  const a = Object.create(null),
    l = Object.create(null)
  for (const i in e)
    t.some((o) => (o instanceof RegExp ? o.test(i) : o === i)) &&
    !(n != null && n.some((o) => o === i))
      ? (a[i] = e[i])
      : (l[i] = e[i])
  return [a, l]
}
function it(e, t) {
  const n = { ...e }
  return t.forEach((a) => delete n[a]), n
}
function vo(e, t) {
  const n = {}
  return t.forEach((a) => (n[a] = e[a])), n
}
const Vv = /^on[^a-z]/,
  mo = (e) => Vv.test(e),
  E0 = [
    'onAfterscriptexecute',
    'onAnimationcancel',
    'onAnimationend',
    'onAnimationiteration',
    'onAnimationstart',
    'onAuxclick',
    'onBeforeinput',
    'onBeforescriptexecute',
    'onChange',
    'onClick',
    'onCompositionend',
    'onCompositionstart',
    'onCompositionupdate',
    'onContextmenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onFocusin',
    'onFocusout',
    'onFullscreenchange',
    'onFullscreenerror',
    'onGesturechange',
    'onGestureend',
    'onGesturestart',
    'onGotpointercapture',
    'onInput',
    'onKeydown',
    'onKeypress',
    'onKeyup',
    'onLostpointercapture',
    'onMousedown',
    'onMousemove',
    'onMouseout',
    'onMouseover',
    'onMouseup',
    'onMousewheel',
    'onPaste',
    'onPointercancel',
    'onPointerdown',
    'onPointerenter',
    'onPointerleave',
    'onPointermove',
    'onPointerout',
    'onPointerover',
    'onPointerup',
    'onReset',
    'onSelect',
    'onSubmit',
    'onTouchcancel',
    'onTouchend',
    'onTouchmove',
    'onTouchstart',
    'onTransitioncancel',
    'onTransitionend',
    'onTransitionrun',
    'onTransitionstart',
    'onWheel'
  ],
  B0 = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Enter', 'Escape', 'Tab', ' ']
function D0(e) {
  return e.isComposing && B0.includes(e.key)
}
function Xn(e) {
  const [t, n] = Mr(e, [Vv]),
    a = it(t, E0),
    [l, i] = Mr(n, ['class', 'style', 'id', /^data-/])
  return Object.assign(l, t), Object.assign(i, a), [l, i]
}
function Xe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function M0(e, t) {
  let n = 0
  const a = function () {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++) i[o] = arguments[o]
    clearTimeout(n), (n = setTimeout(() => e(...i), at(t)))
  }
  return (
    (a.clear = () => {
      clearTimeout(n)
    }),
    (a.immediate = e),
    a
  )
}
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
  return Math.max(t, Math.min(n, e))
}
function Nc(e) {
  const t = e.toString().trim()
  return t.includes('.') ? t.length - t.indexOf('.') - 1 : 0
}
function Hc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0'
  return e + n.repeat(Math.max(0, t - e.length))
}
function zc(e, t) {
  return (
    (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0').repeat(
      Math.max(0, t - e.length)
    ) + e
  )
}
function R0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  const n = []
  let a = 0
  for (; a < e.length; ) n.push(e.substr(a, t)), (a += t)
  return n
}
function jc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3
  if (e < t) return `${e} B`
  const n = t === 1024 ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G']
  let a = -1
  for (; Math.abs(e) >= t && a < n.length - 1; ) (e /= t), ++a
  return `${e.toFixed(1)} ${n[a]}B`
}
function xt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0
  const a = {}
  for (const l in e) a[l] = e[l]
  for (const l in t) {
    const i = e[l],
      o = t[l]
    if ($l(i) && $l(o)) {
      a[l] = xt(i, o, n)
      continue
    }
    if (Array.isArray(i) && Array.isArray(o) && n) {
      a[l] = n(i, o)
      continue
    }
    a[l] = o
  }
  return a
}
function Pv(e) {
  return e.map((t) => (t.type === me ? Pv(t.children) : t)).flat()
}
function ca() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  if (ca.cache.has(e)) return ca.cache.get(e)
  const t = e
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
  return ca.cache.set(e, t), t
}
ca.cache = new Map()
function Cl(e, t) {
  if (!t || typeof t != 'object') return []
  if (Array.isArray(t)) return t.map((n) => Cl(e, n)).flat(1)
  if (Array.isArray(t.children)) return t.children.map((n) => Cl(e, n)).flat(1)
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e)) return [t.component]
    if (t.component.subTree) return Cl(e, t.component.subTree).flat(1)
  }
  return []
}
var wi = new WeakMap(),
  Ba = new WeakMap()
class $0 {
  constructor(t) {
    Lc(this, wi, []), Lc(this, Ba, 0), (this.size = t)
  }
  push(t) {
    ;(na(wi, this)[na(Ba, this)] = t), T0(Ba, this, (na(Ba, this) + 1) % this.size)
  }
  values() {
    return na(wi, this)
      .slice(na(Ba, this))
      .concat(na(wi, this).slice(0, na(Ba, this)))
  }
}
function O0(e) {
  return 'touches' in e
    ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
    : { clientX: e.clientX, clientY: e.clientY }
}
function qs(e) {
  const t = kt({}),
    n = b(e)
  return (
    Ze(
      () => {
        for (const a in n.value) t[a] = n.value[a]
      },
      { flush: 'sync' }
    ),
    io(t)
  )
}
function Ui(e, t) {
  return e.includes(t)
}
function Iv(e) {
  return e[2].toLowerCase() + e.slice(3)
}
const Tt = () => [Function, Array]
function Wc(e, t) {
  return (
    (t = 'on' + bn(t)),
    !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`])
  )
}
function Xs(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a]
  if (Array.isArray(e)) for (const l of e) l(...n)
  else typeof e == 'function' && e(...n)
}
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  const n = ['button', '[href]', 'input:not([type="hidden"])', 'select', 'textarea', '[tabindex]']
    .map((a) => `${a}${t ? ':not([tabindex="-1"])' : ''}:not([disabled])`)
    .join(', ')
  return [...e.querySelectorAll(n)]
}
function Av(e, t, n) {
  let a,
    l = e.indexOf(document.activeElement)
  const i = t === 'next' ? 1 : -1
  do (l += i), (a = e[l])
  while (
    (!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) &&
    l < e.length &&
    l >= 0
  )
  return a
}
function Ga(e, t) {
  var a, l, i, o
  const n = Ol(e)
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) &&
      ((a = n[0]) == null || a.focus())
  else if (t === 'first') (l = n[0]) == null || l.focus()
  else if (t === 'last') (i = n.at(-1)) == null || i.focus()
  else if (typeof t == 'number') (o = n[t]) == null || o.focus()
  else {
    const r = Av(n, t)
    r ? r.focus() : Ga(e, t === 'next' ? 'first' : 'last')
  }
}
function xi(e) {
  return e == null || (typeof e == 'string' && e.trim() === '')
}
function Tv() {}
function Ya(e, t) {
  if (!(Le && typeof CSS < 'u' && typeof CSS.supports < 'u' && CSS.supports(`selector(${t})`)))
    return null
  try {
    return !!e && e.matches(t)
  } catch {
    return null
  }
}
function ho(e) {
  return e.some((t) => (Ml(t) ? (t.type === At ? !1 : t.type !== me || ho(t.children)) : !0))
    ? e
    : null
}
function L0(e, t) {
  if (!Le || e === 0) return t(), () => {}
  const n = window.setTimeout(t, e)
  return () => window.clearTimeout(n)
}
function Uc(e, t) {
  const n = se()
  return (
    Ze(
      () => {
        n.value = e()
      },
      { flush: 'sync', ...t }
    ),
    tl(n)
  )
}
function F0(e, t) {
  const n = e.clientX,
    a = e.clientY,
    l = t.getBoundingClientRect(),
    i = l.left,
    o = l.top,
    r = l.right,
    s = l.bottom
  return n >= i && n <= r && a >= o && a <= s
}
const Ev = ['top', 'bottom'],
  N0 = ['start', 'end', 'left', 'right']
function Rr(e, t) {
  let [n, a] = e.split(' ')
  return (
    a || (a = Ui(Ev, n) ? 'start' : Ui(N0, n) ? 'top' : 'center'),
    { side: $r(n, t), align: $r(a, t) }
  )
}
function $r(e, t) {
  return e === 'start' ? (t ? 'right' : 'left') : e === 'end' ? (t ? 'left' : 'right') : e
}
function ar(e) {
  return {
    side: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[e.side],
    align: e.align
  }
}
function lr(e) {
  return {
    side: e.side,
    align: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[e.align]
  }
}
function Gc(e) {
  return { side: e.align, align: e.side }
}
function Yc(e) {
  return Ui(Ev, e.side) ? 'y' : 'x'
}
class da {
  constructor(t) {
    let { x: n, y: a, width: l, height: i } = t
    ;(this.x = n), (this.y = a), (this.width = l), (this.height = i)
  }
  get top() {
    return this.y
  }
  get bottom() {
    return this.y + this.height
  }
  get left() {
    return this.x
  }
  get right() {
    return this.x + this.width
  }
}
function Kc(e, t) {
  return {
    x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) },
    y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) }
  }
}
function Bv(e) {
  return Array.isArray(e)
    ? new da({ x: e[0], y: e[1], width: 0, height: 0 })
    : e.getBoundingClientRect()
}
function Zs(e) {
  const t = e.getBoundingClientRect(),
    n = getComputedStyle(e),
    a = n.transform
  if (a) {
    let l, i, o, r, s
    if (a.startsWith('matrix3d('))
      (l = a.slice(9, -1).split(/, /)), (i = +l[0]), (o = +l[5]), (r = +l[12]), (s = +l[13])
    else if (a.startsWith('matrix('))
      (l = a.slice(7, -1).split(/, /)), (i = +l[0]), (o = +l[3]), (r = +l[4]), (s = +l[5])
    else return new da(t)
    const u = n.transformOrigin,
      c = t.x - r - (1 - i) * parseFloat(u),
      f = t.y - s - (1 - o) * parseFloat(u.slice(u.indexOf(' ') + 1)),
      v = i ? t.width / i : e.offsetWidth + 1,
      m = o ? t.height / o : e.offsetHeight + 1
    return new da({ x: c, y: f, width: v, height: m })
  } else return new da(t)
}
function ra(e, t, n) {
  if (typeof e.animate > 'u') return { finished: Promise.resolve() }
  let a
  try {
    a = e.animate(t, n)
  } catch {
    return { finished: Promise.resolve() }
  }
  return (
    typeof a.finished > 'u' &&
      (a.finished = new Promise((l) => {
        a.onfinish = () => {
          l(a)
        }
      })),
    a
  )
}
const Ri = new WeakMap()
function H0(e, t) {
  Object.keys(t).forEach((n) => {
    if (mo(n)) {
      const a = Iv(n),
        l = Ri.get(e)
      if (t[n] == null)
        l == null ||
          l.forEach((i) => {
            const [o, r] = i
            o === a && (e.removeEventListener(a, r), l.delete(i))
          })
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n])
        const i = l || new Set()
        i.add([a, t[n]]), Ri.has(e) || Ri.set(e, i)
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n])
  })
}
function z0(e, t) {
  Object.keys(t).forEach((n) => {
    if (mo(n)) {
      const a = Iv(n),
        l = Ri.get(e)
      l == null ||
        l.forEach((i) => {
          const [o, r] = i
          o === a && (e.removeEventListener(a, r), l.delete(i))
        })
    } else e.removeAttribute(n)
  })
}
const Da = 2.4,
  qc = 0.2126729,
  Xc = 0.7151522,
  Zc = 0.072175,
  j0 = 0.55,
  W0 = 0.58,
  U0 = 0.57,
  G0 = 0.62,
  Ci = 0.03,
  Qc = 1.45,
  Y0 = 5e-4,
  K0 = 1.25,
  q0 = 1.25,
  Jc = 0.078,
  ed = 12.82051282051282,
  _i = 0.06,
  td = 0.001
function nd(e, t) {
  const n = (e.r / 255) ** Da,
    a = (e.g / 255) ** Da,
    l = (e.b / 255) ** Da,
    i = (t.r / 255) ** Da,
    o = (t.g / 255) ** Da,
    r = (t.b / 255) ** Da
  let s = n * qc + a * Xc + l * Zc,
    u = i * qc + o * Xc + r * Zc
  if ((s <= Ci && (s += (Ci - s) ** Qc), u <= Ci && (u += (Ci - u) ** Qc), Math.abs(u - s) < Y0))
    return 0
  let c
  if (u > s) {
    const f = (u ** j0 - s ** W0) * K0
    c = f < td ? 0 : f < Jc ? f - f * ed * _i : f - _i
  } else {
    const f = (u ** G0 - s ** U0) * q0
    c = f > -td ? 0 : f > -Jc ? f - f * ed * _i : f + _i
  }
  return c * 100
}
function X0(e, t) {
  t = Array.isArray(t)
    ? t
        .slice(0, -1)
        .map((n) => `'${n}'`)
        .join(', ') + ` or '${t.at(-1)}'`
    : `'${t}'`
}
const Gi = 0.20689655172413793,
  Z0 = (e) => (e > Gi ** 3 ? Math.cbrt(e) : e / (3 * Gi ** 2) + 4 / 29),
  Q0 = (e) => (e > Gi ? e ** 3 : 3 * Gi ** 2 * (e - 4 / 29))
function Dv(e) {
  const t = Z0,
    n = t(e[1])
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))]
}
function Mv(e) {
  const t = Q0,
    n = (e[0] + 16) / 116
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883]
}
const J0 = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057]
  ],
  eS = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
  tS = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505]
  ],
  nS = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4)
function Rv(e) {
  const t = Array(3),
    n = eS,
    a = J0
  for (let l = 0; l < 3; ++l)
    t[l] = Math.round(et(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255)
  return { r: t[0], g: t[1], b: t[2] }
}
function Qs(e) {
  let { r: t, g: n, b: a } = e
  const l = [0, 0, 0],
    i = nS,
    o = tS
  ;(t = i(t / 255)), (n = i(n / 255)), (a = i(a / 255))
  for (let r = 0; r < 3; ++r) l[r] = o[r][0] * t + o[r][1] * n + o[r][2] * a
  return l
}
function Or(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e)
}
function aS(e) {
  return Or(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e)
}
const ad = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
  lS = {
    rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }),
    rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }),
    hsl: (e, t, n, a) => ld({ h: e, s: t, l: n, a }),
    hsla: (e, t, n, a) => ld({ h: e, s: t, l: n, a }),
    hsv: (e, t, n, a) => Pn({ h: e, s: t, v: n, a }),
    hsva: (e, t, n, a) => Pn({ h: e, s: t, v: n, a })
  }
function Gt(e) {
  if (typeof e == 'number') return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 }
  if (typeof e == 'string' && ad.test(e)) {
    const { groups: t } = e.match(ad),
      { fn: n, values: a } = t,
      l = a
        .split(/,\s*/)
        .map((i) =>
          i.endsWith('%') && ['hsl', 'hsla', 'hsv', 'hsva'].includes(n)
            ? parseFloat(i) / 100
            : parseFloat(i)
        )
    return lS[n](...l)
  } else if (typeof e == 'string') {
    let t = e.startsWith('#') ? e.slice(1) : e
    return (
      [3, 4].includes(t.length)
        ? (t = t
            .split('')
            .map((n) => n + n)
            .join(''))
        : [6, 8].includes(t.length),
      Nv(t)
    )
  } else if (typeof e == 'object') {
    if (oa(e, ['r', 'g', 'b'])) return e
    if (oa(e, ['h', 's', 'l'])) return Pn(Js(e))
    if (oa(e, ['h', 's', 'v'])) return Pn(e)
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)
}
function Pn(e) {
  const { h: t, s: n, v: a, a: l } = e,
    i = (r) => {
      const s = (r + t / 60) % 6
      return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0)
    },
    o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255))
  return { r: o[0], g: o[1], b: o[2], a: l }
}
function ld(e) {
  return Pn(Js(e))
}
function go(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 }
  const t = e.r / 255,
    n = e.g / 255,
    a = e.b / 255,
    l = Math.max(t, n, a),
    i = Math.min(t, n, a)
  let o = 0
  l !== i &&
    (l === t
      ? (o = 60 * (0 + (n - a) / (l - i)))
      : l === n
        ? (o = 60 * (2 + (a - t) / (l - i)))
        : l === a && (o = 60 * (4 + (t - n) / (l - i)))),
    o < 0 && (o = o + 360)
  const r = l === 0 ? 0 : (l - i) / l,
    s = [o, r, l]
  return { h: s[0], s: s[1], v: s[2], a: e.a }
}
function $v(e) {
  const { h: t, s: n, v: a, a: l } = e,
    i = a - (a * n) / 2,
    o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i)
  return { h: t, s: o, l: i, a: l }
}
function Js(e) {
  const { h: t, s: n, l: a, a: l } = e,
    i = a + n * Math.min(a, 1 - a),
    o = i === 0 ? 0 : 2 - (2 * a) / i
  return { h: t, s: o, v: i, a: l }
}
function Ov(e) {
  let { r: t, g: n, b: a, a: l } = e
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`
}
function Lv(e) {
  return Ov(Pn(e))
}
function Vi(e) {
  const t = Math.round(e).toString(16)
  return ('00'.substr(0, 2 - t.length) + t).toUpperCase()
}
function Fv(e) {
  let { r: t, g: n, b: a, a: l } = e
  return `#${[Vi(t), Vi(n), Vi(a), l !== void 0 ? Vi(Math.round(l * 255)) : ''].join('')}`
}
function Nv(e) {
  e = iS(e)
  let [t, n, a, l] = R0(e, 2).map((i) => parseInt(i, 16))
  return (l = l === void 0 ? l : l / 255), { r: t, g: n, b: a, a: l }
}
function Hv(e) {
  const t = Nv(e)
  return go(t)
}
function zv(e) {
  return Fv(Pn(e))
}
function iS(e) {
  return (
    e.startsWith('#') && (e = e.slice(1)),
    (e = e.replace(/([^0-9a-f])/gi, 'F')),
    (e.length === 3 || e.length === 4) &&
      (e = e
        .split('')
        .map((t) => t + t)
        .join('')),
    e.length !== 6 && (e = Hc(Hc(e, 6), 8, 'F')),
    e
  )
}
function oS(e, t) {
  const n = Dv(Qs(e))
  return (n[0] = n[0] + t * 10), Rv(Mv(n))
}
function rS(e, t) {
  const n = Dv(Qs(e))
  return (n[0] = n[0] - t * 10), Rv(Mv(n))
}
function Lr(e) {
  const t = Gt(e)
  return Qs(t)[1]
}
function sS(e, t) {
  const n = Lr(e),
    a = Lr(t),
    l = Math.max(n, a),
    i = Math.min(n, a)
  return (l + 0.05) / (i + 0.05)
}
function jv(e) {
  const t = Math.abs(nd(Gt(0), Gt(e)))
  return Math.abs(nd(Gt(16777215), Gt(e))) > Math.min(t, 50) ? '#fff' : '#000'
}
function $(e, t) {
  return (n) =>
    Object.keys(e).reduce((a, l) => {
      const o =
        typeof e[l] == 'object' && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] }
      return (
        n && l in n ? (a[l] = { ...o, default: n[l] }) : (a[l] = o),
        t && !a[l].source && (a[l].source = t),
        a
      )
    }, {})
}
const ve = $(
    { class: [String, Array], style: { type: [String, Array, Object], default: null } },
    'component'
  ),
  Ka = Symbol.for('vuetify:defaults')
function uS(e) {
  return J(e)
}
function eu() {
  const e = Pe(Ka)
  if (!e) throw new Error('[Vuetify] Could not find defaults instance')
  return e
}
function Ke(e, t) {
  const n = eu(),
    a = J(e),
    l = b(() => {
      if (at(t == null ? void 0 : t.disabled)) return n.value
      const o = at(t == null ? void 0 : t.scoped),
        r = at(t == null ? void 0 : t.reset),
        s = at(t == null ? void 0 : t.root)
      if (a.value == null && !(o || r || s)) return n.value
      let u = xt(a.value, { prev: n.value })
      if (o) return u
      if (r || s) {
        const c = Number(r || 1 / 0)
        for (let f = 0; f <= c && !(!u || !('prev' in u)); f++) u = u.prev
        return u && typeof s == 'string' && s in u && (u = xt(xt(u, { prev: u }), u[s])), u
      }
      return u.prev ? xt(u.prev, u) : u
    })
  return Fe(Ka, l), l
}
function cS(e, t) {
  var n, a
  return (
    typeof ((n = e.props) == null ? void 0 : n[t]) < 'u' ||
    typeof ((a = e.props) == null ? void 0 : a[ca(t)]) < 'u'
  )
}
function dS() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : eu()
  const a = Qe('useDefaults')
  if (((t = t ?? a.type.name ?? a.type.__name), !t))
    throw new Error('[Vuetify] Could not determine component name')
  const l = b(() => {
      var s
      return (s = n.value) == null ? void 0 : s[e._as ?? t]
    }),
    i = new Proxy(e, {
      get(s, u) {
        var f, v, m, g
        const c = Reflect.get(s, u)
        return u === 'class' || u === 'style'
          ? [(f = l.value) == null ? void 0 : f[u], c].filter((h) => h != null)
          : typeof u == 'string' && !cS(a.vnode, u)
            ? ((v = l.value) == null ? void 0 : v[u]) ??
              ((g = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : g[u]) ??
              c
            : c
      }
    }),
    o = se()
  Ze(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u
        return c.startsWith(c[0].toUpperCase())
      })
      o.value = s.length ? Object.fromEntries(s) : void 0
    } else o.value = void 0
  })
  function r() {
    const s = gS(Ka, a)
    Fe(
      Ka,
      b(() =>
        o.value ? xt((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value
      )
    )
  }
  return { props: i, provideSubDefaults: r }
}
function Nt(e) {
  if (((e._setup = e._setup ?? e.setup), !e.name)) return e
  if (e._setup) {
    e.props = $(e.props ?? {}, e.name)()
    const t = Object.keys(e.props).filter((n) => n !== 'class' && n !== 'style')
    ;(e.filterProps = function (a) {
      return _v(a, t)
    }),
      (e.props._as = String),
      (e.setup = function (a, l) {
        const i = eu()
        if (!i.value) return e._setup(a, l)
        const { props: o, provideSubDefaults: r } = dS(a, a._as ?? e.name, i),
          s = e._setup(o, l)
        return r(), s
      })
  }
  return e
}
function j() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
  return (t) => (e ? Nt : Jl)(t)
}
function fS(e, t) {
  return (t.props = e), t
}
function pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'div',
    n = arguments.length > 2 ? arguments[2] : void 0
  return j()({
    name: n ?? bn(Kt(e.replace(/__/g, '-'))),
    props: { tag: { type: String, default: t }, ...ve() },
    setup(a, l) {
      let { slots: i } = l
      return () => {
        var o
        return sn(
          a.tag,
          { class: [e, a.class], style: a.style },
          (o = i.default) == null ? void 0 : o.call(i)
        )
      }
    }
  })
}
function Wv(e) {
  if (typeof e.getRootNode != 'function') {
    for (; e.parentNode; ) e = e.parentNode
    return e !== document ? null : document
  }
  const t = e.getRootNode()
  return t !== document && t.getRootNode({ composed: !0 }) !== document ? null : t
}
const Ll = 'cubic-bezier(0.4, 0, 0.2, 1)',
  vS = 'cubic-bezier(0.0, 0, 0.2, 1)',
  mS = 'cubic-bezier(0.4, 0, 1, 1)'
function id(e, t, n) {
  return Object.keys(e)
    .filter((a) => mo(a) && a.endsWith(t))
    .reduce((a, l) => ((a[l.slice(0, -t.length)] = (i) => e[l](i, n(i))), a), {})
}
function Qe(e, t) {
  const n = Gs()
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`)
  return n
}
function kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'composables'
  const t = Qe(e).type
  return ca((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name))
}
let Uv = 0,
  $i = new WeakMap()
function mt() {
  const e = Qe('getUid')
  if ($i.has(e)) return $i.get(e)
  {
    const t = Uv++
    return $i.set(e, t), t
  }
}
mt.reset = () => {
  ;(Uv = 0), ($i = new WeakMap())
}
function tu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  for (; e; ) {
    if (t ? hS(e) : nu(e)) return e
    e = e.parentElement
  }
  return document.scrollingElement
}
function Yi(e, t) {
  const n = []
  if (t && e && !t.contains(e)) return n
  for (; e && (nu(e) && n.push(e), e !== t); ) e = e.parentElement
  return n
}
function nu(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1
  const t = window.getComputedStyle(e)
  return t.overflowY === 'scroll' || (t.overflowY === 'auto' && e.scrollHeight > e.clientHeight)
}
function hS(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1
  const t = window.getComputedStyle(e)
  return ['scroll', 'auto'].includes(t.overflowY)
}
function gS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qe('injectSelf')
  const { provides: n } = t
  if (n && e in n) return n[e]
}
function yS(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === 'fixed') return !0
    e = e.offsetParent
  }
  return !1
}
function K(e) {
  const t = Qe('useRender')
  t.render = e
}
function be(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f,
    l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f
  const i = Qe('useProxiedModel'),
    o = J(e[t] !== void 0 ? e[t] : n),
    r = ca(t),
    u = b(
      r !== t
        ? () => {
            var f, v, m, g
            return (
              e[t],
              !!(
                (((f = i.vnode.props) != null && f.hasOwnProperty(t)) ||
                  ((v = i.vnode.props) != null && v.hasOwnProperty(r))) &&
                (((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)) ||
                  ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${r}`)))
              )
            )
          }
        : () => {
            var f, v
            return (
              e[t],
              !!(
                (f = i.vnode.props) != null &&
                f.hasOwnProperty(t) &&
                (v = i.vnode.props) != null &&
                v.hasOwnProperty(`onUpdate:${t}`)
              )
            )
          }
    )
  Dt(
    () => !u.value,
    () => {
      de(
        () => e[t],
        (f) => {
          o.value = f
        }
      )
    }
  )
  const c = b({
    get() {
      const f = e[t]
      return a(u.value ? f : o.value)
    },
    set(f) {
      const v = l(f),
        m = Ce(u.value ? e[t] : o.value)
      m === v || a(m) === f || ((o.value = v), i == null || i.emit(`update:${t}`, v))
    }
  })
  return Object.defineProperty(c, 'externalValue', { get: () => (u.value ? e[t] : o.value) }), c
}
const bS = {
    badge: 'Badge',
    open: 'Open',
    close: 'Close',
    dismiss: 'Dismiss',
    confirmEdit: { ok: 'OK', cancel: 'Cancel' },
    dataIterator: { noResultsText: 'No matching records found', loadingText: 'Loading items...' },
    dataTable: {
      itemsPerPageText: 'Rows per page:',
      ariaLabel: {
        sortDescending: 'Sorted descending.',
        sortAscending: 'Sorted ascending.',
        sortNone: 'Not sorted.',
        activateNone: 'Activate to remove sorting.',
        activateDescending: 'Activate to sort descending.',
        activateAscending: 'Activate to sort ascending.'
      },
      sortBy: 'Sort by'
    },
    dataFooter: {
      itemsPerPageText: 'Items per page:',
      itemsPerPageAll: 'All',
      nextPage: 'Next page',
      prevPage: 'Previous page',
      firstPage: 'First page',
      lastPage: 'Last page',
      pageText: '{0}-{1} of {2}'
    },
    dateRangeInput: { divider: 'to' },
    datePicker: {
      itemsSelected: '{0} selected',
      range: { title: 'Select dates', header: 'Enter dates' },
      title: 'Select date',
      header: 'Enter date',
      input: { placeholder: 'Enter date' }
    },
    noDataText: 'No data available',
    carousel: {
      prev: 'Previous visual',
      next: 'Next visual',
      ariaLabel: { delimiter: 'Carousel slide {0} of {1}' }
    },
    calendar: { moreEvents: '{0} more', today: 'Today' },
    input: {
      clear: 'Clear {0}',
      prependAction: '{0} prepended action',
      appendAction: '{0} appended action',
      otp: 'Please enter OTP character {0}'
    },
    fileInput: { counter: '{0} files', counterSize: '{0} files ({1} in total)' },
    timePicker: { am: 'AM', pm: 'PM', title: 'Select Time' },
    pagination: {
      ariaLabel: {
        root: 'Pagination Navigation',
        next: 'Next page',
        previous: 'Previous page',
        page: 'Go to page {0}',
        currentPage: 'Page {0}, Current page',
        first: 'First page',
        last: 'Last page'
      }
    },
    stepper: { next: 'Next', prev: 'Previous' },
    rating: { ariaLabel: { item: 'Rating {0} of {1}' } },
    loading: 'Loading...',
    infiniteScroll: { loadMore: 'Load more', empty: 'No more' }
  },
  od = '$vuetify.',
  rd = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[+a])),
  Gv = (e, t, n) =>
    function (a) {
      for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
        i[o - 1] = arguments[o]
      if (!a.startsWith(od)) return rd(a, i)
      const r = a.replace(od, ''),
        s = e.value && n.value[e.value],
        u = t.value && n.value[t.value]
      let c = Rl(s, r, null)
      return (
        c || (`${a}${e.value}`, (c = Rl(u, r, null))),
        c || (c = a),
        typeof c != 'string' && (c = a),
        rd(c, i)
      )
    }
function Yv(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n)
}
function ir(e, t, n) {
  const a = be(e, t, e[t] ?? n.value)
  return (
    (a.value = e[t] ?? n.value),
    de(n, (l) => {
      e[t] == null && (a.value = n.value)
    }),
    a
  )
}
function Kv(e) {
  return (t) => {
    const n = ir(t, 'locale', e.current),
      a = ir(t, 'fallback', e.fallback),
      l = ir(t, 'messages', e.messages)
    return {
      name: 'vuetify',
      current: n,
      fallback: a,
      messages: l,
      t: Gv(n, a, l),
      n: Yv(n, a),
      provide: Kv({ current: n, fallback: a, messages: l })
    }
  }
}
function SS(e) {
  const t = se((e == null ? void 0 : e.locale) ?? 'en'),
    n = se((e == null ? void 0 : e.fallback) ?? 'en'),
    a = J({ en: bS, ...(e == null ? void 0 : e.messages) })
  return {
    name: 'vuetify',
    current: t,
    fallback: n,
    messages: a,
    t: Gv(t, n, a),
    n: Yv(t, n),
    provide: Kv({ current: t, fallback: n, messages: a })
  }
}
const qa = Symbol.for('vuetify:locale')
function pS(e) {
  return e.name != null
}
function kS(e) {
  const t =
      e != null && e.adapter && pS(e == null ? void 0 : e.adapter)
        ? e == null
          ? void 0
          : e.adapter
        : SS(e),
    n = CS(t, e)
  return { ...t, ...n }
}
function Je() {
  const e = Pe(qa)
  if (!e) throw new Error('[Vuetify] Could not find injected locale instance')
  return e
}
function wS(e) {
  const t = Pe(qa)
  if (!t) throw new Error('[Vuetify] Could not find injected locale instance')
  const n = t.provide(e),
    a = _S(n, t.rtl, e),
    l = { ...n, ...a }
  return Fe(qa, l), l
}
function xS() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  }
}
function CS(e, t) {
  const n = J((t == null ? void 0 : t.rtl) ?? xS()),
    a = b(() => n.value[e.current.value] ?? !1)
  return { isRtl: a, rtl: n, rtlClasses: b(() => `v-locale--is-${a.value ? 'rtl' : 'ltr'}`) }
}
function _S(e, t, n) {
  const a = b(() => n.rtl ?? t.value[e.current.value] ?? !1)
  return { isRtl: a, rtl: t, rtlClasses: b(() => `v-locale--is-${a.value ? 'rtl' : 'ltr'}`) }
}
function ut() {
  const e = Pe(qa)
  if (!e) throw new Error('[Vuetify] Could not find injected rtl instance')
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses }
}
const Fl = {
  '001': 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  'GB-alt-variant': 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
}
function VS(e, t) {
  const n = []
  let a = []
  const l = qv(e),
    i = Xv(e),
    o = (l.getDay() - Fl[t.slice(-2).toUpperCase()] + 7) % 7,
    r = (i.getDay() - Fl[t.slice(-2).toUpperCase()] + 7) % 7
  for (let s = 0; s < o; s++) {
    const u = new Date(l)
    u.setDate(u.getDate() - (o - s)), a.push(u)
  }
  for (let s = 1; s <= i.getDate(); s++) {
    const u = new Date(e.getFullYear(), e.getMonth(), s)
    a.push(u), a.length === 7 && (n.push(a), (a = []))
  }
  for (let s = 1; s < 7 - r; s++) {
    const u = new Date(i)
    u.setDate(u.getDate() + s), a.push(u)
  }
  return a.length > 0 && n.push(a), n
}
function PS(e, t) {
  const n = new Date(e)
  for (; n.getDay() !== (Fl[t.slice(-2).toUpperCase()] ?? 0); ) n.setDate(n.getDate() - 1)
  return n
}
function IS(e, t) {
  const n = new Date(e),
    a = ((Fl[t.slice(-2).toUpperCase()] ?? 0) + 6) % 7
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1)
  return n
}
function qv(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1)
}
function Xv(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0)
}
function AS(e) {
  const t = e.split('-').map(Number)
  return new Date(t[0], t[1] - 1, t[2])
}
const TS = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/
function Zv(e) {
  if (e == null) return new Date()
  if (e instanceof Date) return e
  if (typeof e == 'string') {
    let t
    if (TS.test(e)) return AS(e)
    if (((t = Date.parse(e)), !isNaN(t))) return new Date(t)
  }
  return null
}
const sd = new Date(2e3, 0, 2)
function ES(e) {
  const t = Fl[e.slice(-2).toUpperCase()]
  return hn(7).map((n) => {
    const a = new Date(sd)
    return (
      a.setDate(sd.getDate() + t + n), new Intl.DateTimeFormat(e, { weekday: 'narrow' }).format(a)
    )
  })
}
function BS(e, t, n, a) {
  const l = Zv(e) ?? new Date(),
    i = a == null ? void 0 : a[t]
  if (typeof i == 'function') return i(l, t, n)
  let o = {}
  switch (t) {
    case 'fullDate':
      o = { year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'fullDateWithWeekday':
      o = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'normalDate':
      const r = l.getDate(),
        s = new Intl.DateTimeFormat(n, { month: 'long' }).format(l)
      return `${r} ${s}`
    case 'normalDateWithWeekday':
      o = { weekday: 'short', day: 'numeric', month: 'short' }
      break
    case 'shortDate':
      o = { month: 'short', day: 'numeric' }
      break
    case 'year':
      o = { year: 'numeric' }
      break
    case 'month':
      o = { month: 'long' }
      break
    case 'monthShort':
      o = { month: 'short' }
      break
    case 'monthAndYear':
      o = { month: 'long', year: 'numeric' }
      break
    case 'monthAndDate':
      o = { month: 'long', day: 'numeric' }
      break
    case 'weekday':
      o = { weekday: 'long' }
      break
    case 'weekdayShort':
      o = { weekday: 'short' }
      break
    case 'dayOfMonth':
      return new Intl.NumberFormat(n).format(l.getDate())
    case 'hours12h':
      o = { hour: 'numeric', hour12: !0 }
      break
    case 'hours24h':
      o = { hour: 'numeric', hour12: !1 }
      break
    case 'minutes':
      o = { minute: 'numeric' }
      break
    case 'seconds':
      o = { second: 'numeric' }
      break
    case 'fullTime':
      o = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !0 }
      break
    case 'fullTime12h':
      o = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !0 }
      break
    case 'fullTime24h':
      o = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !1 }
      break
    case 'fullDateTime':
      o = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !0
      }
      break
    case 'fullDateTime12h':
      o = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !0
      }
      break
    case 'fullDateTime24h':
      o = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !1
      }
      break
    case 'keyboardDate':
      o = { year: 'numeric', month: '2-digit', day: '2-digit' }
      break
    case 'keyboardDateTime':
      o = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !1
      }
      break
    case 'keyboardDateTime12h':
      o = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !0
      }
      break
    case 'keyboardDateTime24h':
      o = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !1
      }
      break
    default:
      o = i ?? { timeZone: 'UTC', timeZoneName: 'short' }
  }
  return new Intl.DateTimeFormat(n, o).format(l)
}
function DS(e, t) {
  const n = e.toJsDate(t),
    a = n.getFullYear(),
    l = zc(String(n.getMonth() + 1), 2, '0'),
    i = zc(String(n.getDate()), 2, '0')
  return `${a}-${l}-${i}`
}
function MS(e) {
  const [t, n, a] = e.split('-').map(Number)
  return new Date(t, n - 1, a)
}
function RS(e, t) {
  const n = new Date(e)
  return n.setMinutes(n.getMinutes() + t), n
}
function $S(e, t) {
  const n = new Date(e)
  return n.setHours(n.getHours() + t), n
}
function OS(e, t) {
  const n = new Date(e)
  return n.setDate(n.getDate() + t), n
}
function LS(e, t) {
  const n = new Date(e)
  return n.setDate(n.getDate() + t * 7), n
}
function FS(e, t) {
  const n = new Date(e)
  return n.setDate(1), n.setMonth(n.getMonth() + t), n
}
function NS(e) {
  return e.getFullYear()
}
function HS(e) {
  return e.getMonth()
}
function zS(e) {
  return e.getDate()
}
function jS(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1)
}
function WS(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1)
}
function US(e) {
  return e.getHours()
}
function GS(e) {
  return e.getMinutes()
}
function YS(e) {
  return new Date(e.getFullYear(), 0, 1)
}
function KS(e) {
  return new Date(e.getFullYear(), 11, 31)
}
function qS(e, t) {
  return Ki(e, t[0]) && QS(e, t[1])
}
function XS(e) {
  const t = new Date(e)
  return t instanceof Date && !isNaN(t.getTime())
}
function Ki(e, t) {
  return e.getTime() > t.getTime()
}
function ZS(e, t) {
  return Ki(Fr(e), Fr(t))
}
function QS(e, t) {
  return e.getTime() < t.getTime()
}
function ud(e, t) {
  return e.getTime() === t.getTime()
}
function JS(e, t) {
  return (
    e.getDate() === t.getDate() &&
    e.getMonth() === t.getMonth() &&
    e.getFullYear() === t.getFullYear()
  )
}
function ep(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
}
function tp(e, t) {
  return e.getFullYear() === t.getFullYear()
}
function np(e, t, n) {
  const a = new Date(e),
    l = new Date(t)
  switch (n) {
    case 'years':
      return a.getFullYear() - l.getFullYear()
    case 'quarters':
      return Math.floor(
        (a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4
      )
    case 'months':
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12
    case 'weeks':
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7))
    case 'days':
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24))
    case 'hours':
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60))
    case 'minutes':
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60))
    case 'seconds':
      return Math.floor((a.getTime() - l.getTime()) / 1e3)
    default:
      return a.getTime() - l.getTime()
  }
}
function ap(e, t) {
  const n = new Date(e)
  return n.setHours(t), n
}
function lp(e, t) {
  const n = new Date(e)
  return n.setMinutes(t), n
}
function ip(e, t) {
  const n = new Date(e)
  return n.setMonth(t), n
}
function op(e, t) {
  const n = new Date(e)
  return n.setDate(t), n
}
function rp(e, t) {
  const n = new Date(e)
  return n.setFullYear(t), n
}
function Fr(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0)
}
function sp(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999)
}
class up {
  constructor(t) {
    ;(this.locale = t.locale), (this.formats = t.formats)
  }
  date(t) {
    return Zv(t)
  }
  toJsDate(t) {
    return t
  }
  toISO(t) {
    return DS(this, t)
  }
  parseISO(t) {
    return MS(t)
  }
  addMinutes(t, n) {
    return RS(t, n)
  }
  addHours(t, n) {
    return $S(t, n)
  }
  addDays(t, n) {
    return OS(t, n)
  }
  addWeeks(t, n) {
    return LS(t, n)
  }
  addMonths(t, n) {
    return FS(t, n)
  }
  getWeekArray(t) {
    return VS(t, this.locale)
  }
  startOfWeek(t) {
    return PS(t, this.locale)
  }
  endOfWeek(t) {
    return IS(t, this.locale)
  }
  startOfMonth(t) {
    return qv(t)
  }
  endOfMonth(t) {
    return Xv(t)
  }
  format(t, n) {
    return BS(t, n, this.locale, this.formats)
  }
  isEqual(t, n) {
    return ud(t, n)
  }
  isValid(t) {
    return XS(t)
  }
  isWithinRange(t, n) {
    return qS(t, n)
  }
  isAfter(t, n) {
    return Ki(t, n)
  }
  isAfterDay(t, n) {
    return ZS(t, n)
  }
  isBefore(t, n) {
    return !Ki(t, n) && !ud(t, n)
  }
  isSameDay(t, n) {
    return JS(t, n)
  }
  isSameMonth(t, n) {
    return ep(t, n)
  }
  isSameYear(t, n) {
    return tp(t, n)
  }
  setMinutes(t, n) {
    return lp(t, n)
  }
  setHours(t, n) {
    return ap(t, n)
  }
  setMonth(t, n) {
    return ip(t, n)
  }
  setDate(t, n) {
    return op(t, n)
  }
  setYear(t, n) {
    return rp(t, n)
  }
  getDiff(t, n, a) {
    return np(t, n, a)
  }
  getWeekdays() {
    return ES(this.locale)
  }
  getYear(t) {
    return NS(t)
  }
  getMonth(t) {
    return HS(t)
  }
  getDate(t) {
    return zS(t)
  }
  getNextMonth(t) {
    return jS(t)
  }
  getPreviousMonth(t) {
    return WS(t)
  }
  getHours(t) {
    return US(t)
  }
  getMinutes(t) {
    return GS(t)
  }
  startOfDay(t) {
    return Fr(t)
  }
  endOfDay(t) {
    return sp(t)
  }
  startOfYear(t) {
    return YS(t)
  }
  endOfYear(t) {
    return KS(t)
  }
}
const Qv = Symbol.for('vuetify:date-options'),
  cd = Symbol.for('vuetify:date-adapter')
function cp(e, t) {
  const n = xt(
    {
      adapter: up,
      locale: {
        af: 'af-ZA',
        bg: 'bg-BG',
        ca: 'ca-ES',
        ckb: '',
        cs: 'cs-CZ',
        de: 'de-DE',
        el: 'el-GR',
        en: 'en-US',
        et: 'et-EE',
        fa: 'fa-IR',
        fi: 'fi-FI',
        hr: 'hr-HR',
        hu: 'hu-HU',
        he: 'he-IL',
        id: 'id-ID',
        it: 'it-IT',
        ja: 'ja-JP',
        ko: 'ko-KR',
        lv: 'lv-LV',
        lt: 'lt-LT',
        nl: 'nl-NL',
        no: 'no-NO',
        pl: 'pl-PL',
        pt: 'pt-PT',
        ro: 'ro-RO',
        ru: 'ru-RU',
        sk: 'sk-SK',
        sl: 'sl-SI',
        srCyrl: 'sr-SP',
        srLatn: 'sr-SP',
        sv: 'sv-SE',
        th: 'th-TH',
        tr: 'tr-TR',
        az: 'az-AZ',
        uk: 'uk-UA',
        vi: 'vi-VN',
        zhHans: 'zh-CN',
        zhHant: 'zh-TW'
      }
    },
    e
  )
  return { options: n, instance: Jv(n, t) }
}
function Jv(e, t) {
  const n = kt(
    typeof e.adapter == 'function'
      ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats })
      : e.adapter
  )
  return (
    de(t.current, (a) => {
      n.locale = e.locale[a] ?? a ?? n.locale
    }),
    n
  )
}
function ni() {
  const e = Pe(Qv)
  if (!e) throw new Error('[Vuetify] Could not find injected date options')
  const t = Je()
  return Jv(e, t)
}
function dp(e, t) {
  const n = e.toJsDate(t)
  let a = n.getFullYear(),
    l = new Date(a, 0, 1)
  if (n < l) (a = a - 1), (l = new Date(a, 0, 1))
  else {
    const r = new Date(a + 1, 0, 1)
    n >= r && ((a = a + 1), (l = r))
  }
  const i = Math.abs(n.getTime() - l.getTime()),
    o = Math.ceil(i / (1e3 * 60 * 60 * 24))
  return Math.floor(o / 7) + 1
}
const yo = ['sm', 'md', 'lg', 'xl', 'xxl'],
  Nr = Symbol.for('vuetify:display'),
  dd = {
    mobileBreakpoint: 'lg',
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 }
  },
  fp = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dd
    return xt(dd, e)
  }
function fd(e) {
  return Le && !e ? window.innerWidth : (typeof e == 'object' && e.clientWidth) || 0
}
function vd(e) {
  return Le && !e ? window.innerHeight : (typeof e == 'object' && e.clientHeight) || 0
}
function md(e) {
  const t = Le && !e ? window.navigator.userAgent : 'ssr'
  function n(g) {
    return !!t.match(g)
  }
  const a = n(/android/i),
    l = n(/iphone|ipad|ipod/i),
    i = n(/cordova/i),
    o = n(/electron/i),
    r = n(/chrome/i),
    s = n(/edge/i),
    u = n(/firefox/i),
    c = n(/opera/i),
    f = n(/win/i),
    v = n(/mac/i),
    m = n(/linux/i)
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: s,
    firefox: u,
    opera: c,
    win: f,
    mac: v,
    linux: m,
    touch: I0,
    ssr: t === 'ssr'
  }
}
function vp(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = fp(e),
    l = se(vd(t)),
    i = se(md(t)),
    o = kt({}),
    r = se(fd(t))
  function s() {
    ;(l.value = vd()), (r.value = fd())
  }
  function u() {
    s(), (i.value = md())
  }
  return (
    Ze(() => {
      const c = r.value < n.sm,
        f = r.value < n.md && !c,
        v = r.value < n.lg && !(f || c),
        m = r.value < n.xl && !(v || f || c),
        g = r.value < n.xxl && !(m || v || f || c),
        h = r.value >= n.xxl,
        y = c ? 'xs' : f ? 'sm' : v ? 'md' : m ? 'lg' : g ? 'xl' : 'xxl',
        S = typeof a == 'number' ? a : n[a],
        p = r.value < S
      ;(o.xs = c),
        (o.sm = f),
        (o.md = v),
        (o.lg = m),
        (o.xl = g),
        (o.xxl = h),
        (o.smAndUp = !c),
        (o.mdAndUp = !(c || f)),
        (o.lgAndUp = !(c || f || v)),
        (o.xlAndUp = !(c || f || v || m)),
        (o.smAndDown = !(v || m || g || h)),
        (o.mdAndDown = !(m || g || h)),
        (o.lgAndDown = !(g || h)),
        (o.xlAndDown = !h),
        (o.name = y),
        (o.height = l.value),
        (o.width = r.value),
        (o.mobile = p),
        (o.mobileBreakpoint = a),
        (o.platform = i.value),
        (o.thresholds = n)
    }),
    Le && window.addEventListener('resize', s, { passive: !0 }),
    { ...io(o), update: u, ssr: !!t }
  )
}
const nl = $(
  { mobile: { type: Boolean, default: null }, mobileBreakpoint: [Number, String] },
  'display'
)
function un() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  const n = Pe(Nr)
  if (!n) throw new Error('Could not find Vuetify display injection')
  const a = b(() => {
      if (e.mobile != null) return e.mobile
      if (!e.mobileBreakpoint) return n.mobile.value
      const i =
        typeof e.mobileBreakpoint == 'number'
          ? e.mobileBreakpoint
          : n.thresholds.value[e.mobileBreakpoint]
      return n.width.value < i
    }),
    l = b(() => (t ? { [`${t}--mobile`]: a.value } : {}))
  return { ...n, displayClasses: l, mobile: a }
}
const em = Symbol.for('vuetify:goto')
function tm() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: 'easeInOutCubic',
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => (e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e),
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => (--e) ** 3 + 1,
      easeInOutCubic: (e) => (e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - (--e) ** 4,
      easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * (--e) ** 4),
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + (--e) ** 5,
      easeInOutQuint: (e) => (e < 0.5 ? 16 * e ** 5 : 1 + 16 * (--e) ** 5)
    }
  }
}
function mp(e) {
  return au(e) ?? (document.scrollingElement || document.body)
}
function au(e) {
  return typeof e == 'string' ? document.querySelector(e) : Ua(e)
}
function or(e, t, n) {
  if (typeof e == 'number') return t && n ? -e : e
  let a = au(e),
    l = 0
  for (; a; ) (l += t ? a.offsetLeft : a.offsetTop), (a = a.offsetParent)
  return l
}
function hp(e, t) {
  return { rtl: t.isRtl, options: xt(tm(), e) }
}
async function hd(e, t, n, a) {
  const l = n ? 'scrollLeft' : 'scrollTop',
    i = xt((a == null ? void 0 : a.options) ?? tm(), t),
    o = a == null ? void 0 : a.rtl.value,
    r = (typeof e == 'number' ? e : au(e)) ?? 0,
    s = i.container === 'parent' && r instanceof HTMLElement ? r.parentElement : mp(i.container),
    u = typeof i.easing == 'function' ? i.easing : i.patterns[i.easing]
  if (!u) throw new TypeError(`Easing function "${i.easing}" not found.`)
  let c
  if (typeof r == 'number') c = or(r, n, o)
  else if (((c = or(r, n, o) - or(s, n, o)), i.layout)) {
    const g = window.getComputedStyle(r).getPropertyValue('--v-layout-top')
    g && (c -= parseInt(g, 10))
  }
  ;(c += i.offset), (c = yp(s, c, !!o, !!n))
  const f = s[l] ?? 0
  if (c === f) return Promise.resolve(c)
  const v = performance.now()
  return new Promise((m) =>
    requestAnimationFrame(function g(h) {
      const S = (h - v) / i.duration,
        p = Math.floor(f + (c - f) * u(et(S, 0, 1)))
      if (((s[l] = p), S >= 1 && Math.abs(p - s[l]) < 10)) return m(c)
      if (S > 2) return m(s[l])
      requestAnimationFrame(g)
    })
  )
}
function gp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const t = Pe(em),
    { isRtl: n } = ut()
  if (!t) throw new Error('[Vuetify] Could not find injected goto instance')
  const a = { ...t, rtl: b(() => t.rtl.value || n.value) }
  async function l(i, o) {
    return hd(i, xt(e, o), !1, a)
  }
  return (l.horizontal = async (i, o) => hd(i, xt(e, o), !0, a)), l
}
function yp(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: i } = e,
    [o, r] =
      e === document.scrollingElement
        ? [window.innerWidth, window.innerHeight]
        : [e.offsetWidth, e.offsetHeight]
  let s, u
  return (
    a ? (n ? ((s = -(l - o)), (u = 0)) : ((s = 0), (u = l - o))) : ((s = 0), (u = i + -r)),
    Math.max(Math.min(t, u), s)
  )
}
const bp = {
    collapse: 'mdi-chevron-up',
    complete: 'mdi-check',
    cancel: 'mdi-close-circle',
    close: 'mdi-close',
    delete: 'mdi-close-circle',
    clear: 'mdi-close-circle',
    success: 'mdi-check-circle',
    info: 'mdi-information',
    warning: 'mdi-alert-circle',
    error: 'mdi-close-circle',
    prev: 'mdi-chevron-left',
    next: 'mdi-chevron-right',
    checkboxOn: 'mdi-checkbox-marked',
    checkboxOff: 'mdi-checkbox-blank-outline',
    checkboxIndeterminate: 'mdi-minus-box',
    delimiter: 'mdi-circle',
    sortAsc: 'mdi-arrow-up',
    sortDesc: 'mdi-arrow-down',
    expand: 'mdi-chevron-down',
    menu: 'mdi-menu',
    subgroup: 'mdi-menu-down',
    dropdown: 'mdi-menu-down',
    radioOn: 'mdi-radiobox-marked',
    radioOff: 'mdi-radiobox-blank',
    edit: 'mdi-pencil',
    ratingEmpty: 'mdi-star-outline',
    ratingFull: 'mdi-star',
    ratingHalf: 'mdi-star-half-full',
    loading: 'mdi-cached',
    first: 'mdi-page-first',
    last: 'mdi-page-last',
    unfold: 'mdi-unfold-more-horizontal',
    file: 'mdi-paperclip',
    plus: 'mdi-plus',
    minus: 'mdi-minus',
    calendar: 'mdi-calendar',
    treeviewCollapse: 'mdi-menu-down',
    treeviewExpand: 'mdi-menu-right',
    eyeDropper: 'mdi-eyedropper'
  },
  Sp = { component: (e) => sn(iu, { ...e, class: 'mdi' }) },
  xe = [String, Function, Object, Array],
  Hr = Symbol.for('vuetify:icons'),
  bo = $({ icon: { type: xe }, tag: { type: String, required: !0 } }, 'icon'),
  zr = j()({
    name: 'VComponentIcon',
    props: bo(),
    setup(e, t) {
      let { slots: n } = t
      return () => {
        const a = e.icon
        return d(e.tag, null, {
          default: () => {
            var l
            return [e.icon ? d(a, null, null) : (l = n.default) == null ? void 0 : l.call(n)]
          }
        })
      }
    }
  }),
  lu = Nt({
    name: 'VSvgIcon',
    inheritAttrs: !1,
    props: bo(),
    setup(e, t) {
      let { attrs: n } = t
      return () =>
        d(e.tag, X(n, { style: null }), {
          default: () => [
            d(
              'svg',
              {
                class: 'v-icon__svg',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                role: 'img',
                'aria-hidden': 'true'
              },
              [
                Array.isArray(e.icon)
                  ? e.icon.map((a) =>
                      Array.isArray(a)
                        ? d('path', { d: a[0], 'fill-opacity': a[1] }, null)
                        : d('path', { d: a }, null)
                    )
                  : d('path', { d: e.icon }, null)
              ]
            )
          ]
        })
    }
  }),
  pp = Nt({
    name: 'VLigatureIcon',
    props: bo(),
    setup(e) {
      return () => d(e.tag, null, { default: () => [e.icon] })
    }
  }),
  iu = Nt({
    name: 'VClassIcon',
    props: bo(),
    setup(e) {
      return () => d(e.tag, { class: e.icon }, null)
    }
  })
function kp() {
  return { svg: { component: lu }, class: { component: iu } }
}
function wp(e) {
  const t = kp(),
    n = (e == null ? void 0 : e.defaultSet) ?? 'mdi'
  return (
    n === 'mdi' && !t.mdi && (t.mdi = Sp),
    xt(
      {
        defaultSet: n,
        sets: t,
        aliases: {
          ...bp,
          vuetify: [
            'M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z',
            [
              'M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z',
              0.6
            ]
          ],
          'vuetify-outline':
            'svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z',
          'vuetify-play': [
            'm6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z',
            [
              'M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z',
              0.6
            ]
          ]
        }
      },
      e
    )
  )
}
const xp = (e) => {
    const t = Pe(Hr)
    if (!t) throw new Error('Missing Vuetify Icons provide!')
    return {
      iconData: b(() => {
        var s
        const a = at(e)
        if (!a) return { component: zr }
        let l = a
        if (
          (typeof l == 'string' &&
            ((l = l.trim()),
            l.startsWith('$') && (l = (s = t.aliases) == null ? void 0 : s[l.slice(1)])),
          Array.isArray(l))
        )
          return { component: lu, icon: l }
        if (typeof l != 'string') return { component: zr, icon: l }
        const i = Object.keys(t.sets).find((u) => typeof l == 'string' && l.startsWith(`${u}:`)),
          o = i ? l.slice(i.length + 1) : l
        return { component: t.sets[i ?? t.defaultSet].component, icon: o }
      })
    }
  },
  Nl = Symbol.for('vuetify:theme'),
  Ee = $({ theme: String }, 'theme')
function gd() {
  return {
    defaultTheme: 'light',
    variations: { colors: [], lighten: 0, darken: 0 },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',
          primary: '#1867C0',
          'primary-darken-1': '#1F5592',
          secondary: '#48A9A6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.6,
          'disabled-opacity': 0.38,
          'idle-opacity': 0.04,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.12,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#F5F5F5',
          'theme-on-code': '#000000'
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: '#121212',
          surface: '#212121',
          'surface-bright': '#ccbfd6',
          'surface-light': '#424242',
          'surface-variant': '#a3a3a3',
          'on-surface-variant': '#424242',
          primary: '#2196F3',
          'primary-darken-1': '#277CC1',
          secondary: '#54B6B2',
          'secondary-darken-1': '#48A9A6',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
        variables: {
          'border-color': '#FFFFFF',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 1,
          'medium-emphasis-opacity': 0.7,
          'disabled-opacity': 0.5,
          'idle-opacity': 0.1,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.16,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#343434',
          'theme-on-code': '#CCCCCC'
        }
      }
    }
  }
}
function Cp() {
  var a, l
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gd()
  const t = gd()
  if (!e) return { ...t, isDisabled: !0 }
  const n = {}
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const r =
      o.dark || i === 'dark'
        ? (a = t.themes) == null
          ? void 0
          : a.dark
        : (l = t.themes) == null
          ? void 0
          : l.light
    n[i] = xt(r, o)
  }
  return xt(t, { ...e, themes: n })
}
function _p(e) {
  const t = Cp(e),
    n = J(t.defaultTheme),
    a = J(t.themes),
    l = b(() => {
      const c = {}
      for (const [f, v] of Object.entries(a.value)) {
        const m = (c[f] = { ...v, colors: { ...v.colors } })
        if (t.variations)
          for (const g of t.variations.colors) {
            const h = m.colors[g]
            if (h)
              for (const y of ['lighten', 'darken']) {
                const S = y === 'lighten' ? oS : rS
                for (const p of hn(t.variations[y], 1)) m.colors[`${g}-${y}-${p}`] = Fv(S(Gt(h), p))
              }
          }
        for (const g of Object.keys(m.colors)) {
          if (/^on-[a-z]/.test(g) || m.colors[`on-${g}`]) continue
          const h = `on-${g}`,
            y = Gt(m.colors[g])
          m.colors[h] = jv(y)
        }
      }
      return c
    }),
    i = b(() => l.value[n.value]),
    o = b(() => {
      var g
      const c = []
      ;(g = i.value) != null && g.dark && aa(c, ':root', ['color-scheme: dark']),
        aa(c, ':root', yd(i.value))
      for (const [h, y] of Object.entries(l.value))
        aa(c, `.v-theme--${h}`, [`color-scheme: ${y.dark ? 'dark' : 'normal'}`, ...yd(y)])
      const f = [],
        v = [],
        m = new Set(Object.values(l.value).flatMap((h) => Object.keys(h.colors)))
      for (const h of m)
        /^on-[a-z]/.test(h)
          ? aa(v, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`])
          : (aa(f, `.bg-${h}`, [
              `--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,
              `background-color: rgb(var(--v-theme-${h})) !important`,
              `color: rgb(var(--v-theme-on-${h})) !important`
            ]),
            aa(v, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]),
            aa(v, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]))
      return c.push(...f, ...v), c.map((h, y) => (y === 0 ? h : `    ${h}`)).join('')
    })
  function r() {
    return {
      style: [{ children: o.value, id: 'vuetify-theme-stylesheet', nonce: t.cspNonce || !1 }]
    }
  }
  function s(c) {
    if (t.isDisabled) return
    const f = c._context.provides.usehead
    if (f)
      if (f.push) {
        const v = f.push(r)
        Le &&
          de(o, () => {
            v.patch(r)
          })
      } else Le ? (f.addHeadObjs(b(r)), Ze(() => f.updateDOM())) : f.addHeadObjs(r())
    else {
      let m = function () {
          if (typeof document < 'u' && !v) {
            const g = document.createElement('style')
            ;(g.type = 'text/css'),
              (g.id = 'vuetify-theme-stylesheet'),
              t.cspNonce && g.setAttribute('nonce', t.cspNonce),
              (v = g),
              document.head.appendChild(v)
          }
          v && (v.innerHTML = o.value)
        },
        v = Le ? document.getElementById('vuetify-theme-stylesheet') : null
      Le ? de(o, m, { immediate: !0 }) : m()
    }
  }
  const u = b(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`))
  return {
    install: s,
    isDisabled: t.isDisabled,
    name: n,
    themes: a,
    current: i,
    computedThemes: l,
    themeClasses: u,
    styles: o,
    global: { name: n, current: i }
  }
}
function Re(e) {
  Qe('provideTheme')
  const t = Pe(Nl, null)
  if (!t) throw new Error('Could not find Vuetify theme injection')
  const n = b(() => e.theme ?? t.name.value),
    a = b(() => t.themes.value[n.value]),
    l = b(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`)),
    i = { ...t, name: n, current: a, themeClasses: l }
  return Fe(Nl, i), i
}
function nm() {
  Qe('useTheme')
  const e = Pe(Nl, null)
  if (!e) throw new Error('Could not find Vuetify theme injection')
  return e
}
function aa(e, t, n) {
  e.push(
    `${t} {
`,
    ...n.map(
      (a) => `  ${a};
`
    ),
    `}
`
  )
}
function yd(e) {
  const t = e.dark ? 2 : 1,
    n = e.dark ? 1 : 2,
    a = []
  for (const [l, i] of Object.entries(e.colors)) {
    const o = Gt(i)
    a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`),
      l.startsWith('on-') || a.push(`--v-theme-${l}-overlay-multiplier: ${Lr(i) > 0.18 ? t : n}`)
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const o = typeof i == 'string' && i.startsWith('#') ? Gt(i) : void 0,
      r = o ? `${o.r}, ${o.g}, ${o.b}` : void 0
    a.push(`--v-${l}: ${r ?? i}`)
  }
  return a
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'content'
  const n = J(),
    a = J()
  if (Le) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l),
        i.length &&
          (t === 'content'
            ? (a.value = i[0].contentRect)
            : (a.value = i[0].target.getBoundingClientRect()))
    })
    pt(() => {
      l.disconnect()
    }),
      de(
        n,
        (i, o) => {
          o && (l.unobserve(Ua(o)), (a.value = void 0)), i && l.observe(Ua(i))
        },
        { flush: 'post' }
      )
  }
  return { resizeRef: n, contentRect: tl(a) }
}
const Hl = Symbol.for('vuetify:layout'),
  am = Symbol.for('vuetify:layout-item'),
  bd = 1e3,
  lm = $({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, 'layout'),
  wa = $(
    { name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean },
    'layout-item'
  )
function im() {
  const e = Pe(Hl)
  if (!e) throw new Error('[Vuetify] Could not find injected layout')
  return {
    layoutIsReady: Te(),
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  }
}
function xa(e) {
  const t = Pe(Hl)
  if (!t) throw new Error('[Vuetify] Could not find injected layout')
  const n = e.id ?? `layout-item-${mt()}`,
    a = Qe('useLayoutItem')
  Fe(am, { id: n })
  const l = se(!1)
  Gf(() => (l.value = !0)), Uf(() => (l.value = !1))
  const i = Te(),
    { layoutItemStyles: o, layoutItemScrimStyles: r } = t.register(a, {
      ...e,
      active: b(() => (l.value ? !1 : e.active.value)),
      id: n
    })
  return (
    pt(() => t.unregister(n)),
    { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: r, layoutIsReady: i }
  )
}
const Vp = (e, t, n, a) => {
  let l = { top: 0, left: 0, right: 0, bottom: 0 }
  const i = [{ id: '', layer: { ...l } }]
  for (const o of e) {
    const r = t.get(o),
      s = n.get(o),
      u = a.get(o)
    if (!r || !s || !u) continue
    const c = { ...l, [r.value]: parseInt(l[r.value], 10) + (u.value ? parseInt(s.value, 10) : 0) }
    i.push({ id: o, layer: c }), (l = c)
  }
  return i
}
function om(e) {
  const t = Pe(Hl, null),
    n = b(() => (t ? t.rootZIndex.value - 100 : bd)),
    a = J([]),
    l = kt(new Map()),
    i = kt(new Map()),
    o = kt(new Map()),
    r = kt(new Map()),
    s = kt(new Map()),
    { resizeRef: u, contentRect: c } = on(),
    f = Uc(() => {
      const w = [...new Set([...o.values()].map((V) => V.value))].sort((V, _) => V - _),
        x = []
      for (const V of w) {
        const _ = a.value.filter((k) => {
          var P
          return ((P = o.get(k)) == null ? void 0 : P.value) === V
        })
        x.push(..._)
      }
      return Vp(x, l, i, r)
    }),
    v = b(() => !Array.from(s.values()).some((w) => w.value)),
    m = b(() => f.value[f.value.length - 1].layer),
    g = b(() => ({
      '--v-layout-left': fe(m.value.left),
      '--v-layout-right': fe(m.value.right),
      '--v-layout-top': fe(m.value.top),
      '--v-layout-bottom': fe(m.value.bottom),
      ...(v.value ? void 0 : { transition: 'none' })
    })),
    h = Uc(() =>
      f.value.slice(1).map((w, x) => {
        let { id: V } = w
        const { layer: _ } = f.value[x],
          k = i.get(V),
          P = l.get(V)
        return { id: V, ..._, size: Number(k.value), position: P.value }
      })
    ),
    y = (w) => h.value.find((x) => x.id === w),
    S = Qe('createLayout'),
    p = Te()
  Fe(Hl, {
    register: (w, x) => {
      let {
        id: V,
        order: _,
        position: k,
        layoutSize: P,
        elementSize: E,
        active: I,
        disableTransitions: D,
        absolute: L
      } = x
      o.set(V, _), l.set(V, k), i.set(V, P), r.set(V, I), D && s.set(V, D)
      const Y = Cl(am, S == null ? void 0 : S.vnode).indexOf(w)
      Y > -1 ? a.value.splice(Y, 0, V) : a.value.push(V)
      const te = b(() => h.value.findIndex((z) => z.id === V)),
        F = b(() => n.value + f.value.length * 2 - te.value * 2),
        q = b(() => {
          const z = k.value === 'left' || k.value === 'right',
            ee = k.value === 'right',
            he = k.value === 'bottom',
            Se = E.value ?? P.value,
            ue = Se === 0 ? '%' : 'px',
            Q = {
              [k.value]: 0,
              zIndex: F.value,
              transform: `translate${z ? 'X' : 'Y'}(${(I.value ? 0 : -(Se === 0 ? 100 : Se)) * (ee || he ? -1 : 1)}${ue})`,
              position: L.value || n.value !== bd ? 'absolute' : 'fixed',
              ...(v.value ? void 0 : { transition: 'none' })
            }
          if (te.value < 0) throw new Error(`Layout item "${V}" is missing`)
          const R = h.value[te.value]
          if (!R) throw new Error(`[Vuetify] Could not find layout item "${V}"`)
          return {
            ...Q,
            height: z
              ? `calc(100% - ${R.top}px - ${R.bottom}px)`
              : E.value
                ? `${E.value}px`
                : void 0,
            left: ee ? void 0 : `${R.left}px`,
            right: ee ? `${R.right}px` : void 0,
            top: k.value !== 'bottom' ? `${R.top}px` : void 0,
            bottom: k.value !== 'top' ? `${R.bottom}px` : void 0,
            width: z
              ? E.value
                ? `${E.value}px`
                : void 0
              : `calc(100% - ${R.left}px - ${R.right}px)`
          }
        }),
        O = b(() => ({ zIndex: F.value - 1 }))
      return { layoutItemStyles: q, layoutItemScrimStyles: O, zIndex: F }
    },
    unregister: (w) => {
      o.delete(w),
        l.delete(w),
        i.delete(w),
        r.delete(w),
        s.delete(w),
        (a.value = a.value.filter((x) => x !== w))
    },
    mainRect: m,
    mainStyles: g,
    getLayoutItem: y,
    items: h,
    layoutRect: c,
    rootZIndex: n,
    layoutIsReady: p
  })
  const A = b(() => ['v-layout', { 'v-layout--full-height': e.fullHeight }]),
    T = b(() => ({
      zIndex: t ? n.value : void 0,
      position: t ? 'relative' : void 0,
      overflow: t ? 'hidden' : void 0
    }))
  return {
    layoutClasses: A,
    layoutStyles: T,
    getLayoutItem: y,
    items: h,
    layoutRect: c,
    layoutIsReady: p,
    layoutRef: u
  }
}
function rm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const { blueprint: t, ...n } = e,
    a = xt(t, n),
    { aliases: l = {}, components: i = {}, directives: o = {} } = a,
    r = uS(a.defaults),
    s = vp(a.display, a.ssr),
    u = _p(a.theme),
    c = wp(a.icons),
    f = kS(a.locale),
    v = cp(a.date, f),
    m = hp(a.goTo, f)
  return {
    install: (h) => {
      for (const y in o) h.directive(y, o[y])
      for (const y in i) h.component(y, i[y])
      for (const y in l) h.component(y, Nt({ ...l[y], name: y, aliasName: l[y].name }))
      if (
        (u.install(h),
        h.provide(Ka, r),
        h.provide(Nr, s),
        h.provide(Nl, u),
        h.provide(Hr, c),
        h.provide(qa, f),
        h.provide(Qv, v.options),
        h.provide(cd, v.instance),
        h.provide(em, m),
        Le && a.ssr)
      )
        if (h.$nuxt)
          h.$nuxt.hook('app:suspense:resolve', () => {
            s.update()
          })
        else {
          const { mount: y } = h
          h.mount = function () {
            const S = y(...arguments)
            return Te(() => s.update()), (h.mount = y), S
          }
        }
      mt.reset(),
        h.mixin({
          computed: {
            $vuetify() {
              return kt({
                defaults: Ma.call(this, Ka),
                display: Ma.call(this, Nr),
                theme: Ma.call(this, Nl),
                icons: Ma.call(this, Hr),
                locale: Ma.call(this, qa),
                date: Ma.call(this, cd)
              })
            }
          }
        })
    },
    defaults: r,
    display: s,
    theme: u,
    icons: c,
    locale: f,
    date: v,
    goTo: m
  }
}
const Pp = '3.6.3'
rm.version = Pp
function Ma(e) {
  var a, l
  const t = this.$,
    n =
      ((a = t.parent) == null ? void 0 : a.provides) ??
      ((l = t.vnode.appContext) == null ? void 0 : l.provides)
  if (n && e in n) return n[e]
}
const Ip = $({ ...ve(), ...lm({ fullHeight: !0 }), ...Ee() }, 'VApp'),
  Ap = j()({
    name: 'VApp',
    props: Ip(),
    setup(e, t) {
      let { slots: n } = t
      const a = Re(e),
        { layoutClasses: l, getLayoutItem: i, items: o, layoutRef: r } = om(e),
        { rtlClasses: s } = ut()
      return (
        K(() =>
          d(
            'div',
            {
              ref: r,
              class: ['v-application', a.themeClasses.value, l.value, s.value, e.class],
              style: [e.style]
            },
            [
              d('div', { class: 'v-application__wrap' }, [
                d(Nf, null, {
                  default: () => {
                    var u
                    return [d(me, null, [(u = n.default) == null ? void 0 : u.call(n)])]
                  }
                })
              ])
            ]
          )
        ),
        { getLayoutItem: i, items: o, theme: a }
      )
    }
  }),
  _e = $({ tag: { type: String, default: 'div' } }, 'tag'),
  sm = $({ text: String, ...ve(), ..._e() }, 'VToolbarTitle'),
  ou = j()({
    name: 'VToolbarTitle',
    props: sm(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => {
          const a = !!(n.default || n.text || e.text)
          return d(
            e.tag,
            { class: ['v-toolbar-title', e.class], style: e.style },
            {
              default: () => {
                var l
                return [
                  a &&
                    d('div', { class: 'v-toolbar-title__placeholder' }, [
                      n.text ? n.text() : e.text,
                      (l = n.default) == null ? void 0 : l.call(n)
                    ])
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  Tp = $(
    {
      disabled: Boolean,
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: String,
      origin: String
    },
    'transition'
  )
function Ht(e, t, n) {
  return j()({
    name: e,
    props: Tp({ mode: n, origin: t }),
    setup(a, l) {
      let { slots: i } = l
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin)
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const { offsetTop: s, offsetLeft: u, offsetWidth: c, offsetHeight: f } = r
            ;(r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }),
              (r.style.position = 'absolute'),
              (r.style.top = `${s}px`),
              (r.style.left = `${u}px`),
              (r.style.width = `${c}px`),
              (r.style.height = `${f}px`)
          }
          a.hideOnLeave && r.style.setProperty('display', 'none', 'important')
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && r != null && r._transitionInitialStyles) {
            const { position: s, top: u, left: c, width: f, height: v } = r._transitionInitialStyles
            delete r._transitionInitialStyles,
              (r.style.position = s || ''),
              (r.style.top = u || ''),
              (r.style.left = c || ''),
              (r.style.width = f || ''),
              (r.style.height = v || '')
          }
        }
      }
      return () => {
        const r = a.group ? Ys : gn
        return sn(
          r,
          {
            name: a.disabled ? '' : e,
            css: !a.disabled,
            ...(a.group ? void 0 : { mode: a.mode }),
            ...(a.disabled ? {} : o)
          },
          i.default
        )
      }
    }
  })
}
function um(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'in-out'
  return j()({
    name: e,
    props: { mode: { type: String, default: n }, disabled: Boolean, group: Boolean },
    setup(a, l) {
      let { slots: i } = l
      const o = a.group ? Ys : gn
      return () =>
        sn(o, { name: a.disabled ? '' : e, css: !a.disabled, ...(a.disabled ? {} : t) }, i.default)
    }
  })
}
function cm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1)
      ? 'width'
      : 'height',
    a = Kt(`offset-${n}`)
  return {
    onBeforeEnter(o) {
      ;(o._parent = o.parentNode),
        (o._initialStyle = {
          transition: o.style.transition,
          overflow: o.style.overflow,
          [n]: o.style[n]
        })
    },
    onEnter(o) {
      const r = o._initialStyle
      o.style.setProperty('transition', 'none', 'important'), (o.style.overflow = 'hidden')
      const s = `${o[a]}px`
      ;(o.style[n] = '0'),
        o.offsetHeight,
        (o.style.transition = r.transition),
        e && o._parent && o._parent.classList.add(e),
        requestAnimationFrame(() => {
          o.style[n] = s
        })
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      ;(o._initialStyle = { transition: '', overflow: o.style.overflow, [n]: o.style[n] }),
        (o.style.overflow = 'hidden'),
        (o.style[n] = `${o[a]}px`),
        o.offsetHeight,
        requestAnimationFrame(() => (o.style[n] = '0'))
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  }
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o)
  }
  function i(o) {
    const r = o._initialStyle[n]
    ;(o.style.overflow = o._initialStyle.overflow),
      r != null && (o.style[n] = r),
      delete o._initialStyle
  }
}
const Ep = $({ target: [Object, Array] }, 'v-dialog-transition'),
  So = j()({
    name: 'VDialogTransition',
    props: Ep(),
    setup(e, t) {
      let { slots: n } = t
      const a = {
        onBeforeEnter(l) {
          ;(l.style.pointerEvents = 'none'), (l.style.visibility = 'hidden')
        },
        async onEnter(l, i) {
          var v
          await new Promise((m) => requestAnimationFrame(m)),
            await new Promise((m) => requestAnimationFrame(m)),
            (l.style.visibility = '')
          const { x: o, y: r, sx: s, sy: u, speed: c } = pd(e.target, l),
            f = ra(
              l,
              [{ transform: `translate(${o}px, ${r}px) scale(${s}, ${u})`, opacity: 0 }, {}],
              { duration: 225 * c, easing: vS }
            )
          ;(v = Sd(l)) == null ||
            v.forEach((m) => {
              ra(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], {
                duration: 225 * 2 * c,
                easing: Ll
              })
            }),
            f.finished.then(() => i())
        },
        onAfterEnter(l) {
          l.style.removeProperty('pointer-events')
        },
        onBeforeLeave(l) {
          l.style.pointerEvents = 'none'
        },
        async onLeave(l, i) {
          var v
          await new Promise((m) => requestAnimationFrame(m))
          const { x: o, y: r, sx: s, sy: u, speed: c } = pd(e.target, l)
          ra(l, [{}, { transform: `translate(${o}px, ${r}px) scale(${s}, ${u})`, opacity: 0 }], {
            duration: 125 * c,
            easing: mS
          }).finished.then(() => i()),
            (v = Sd(l)) == null ||
              v.forEach((m) => {
                ra(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], {
                  duration: 125 * 2 * c,
                  easing: Ll
                })
              })
        },
        onAfterLeave(l) {
          l.style.removeProperty('pointer-events')
        }
      }
      return () =>
        e.target
          ? d(gn, X({ name: 'dialog-transition' }, a, { css: !1 }), n)
          : d(gn, { name: 'dialog-transition' }, n)
    }
  })
function Sd(e) {
  var n
  const t =
    (n = e.querySelector(':scope > .v-card, :scope > .v-sheet, :scope > .v-list')) == null
      ? void 0
      : n.children
  return t && [...t]
}
function pd(e, t) {
  const n = Bv(e),
    a = Zs(t),
    [l, i] = getComputedStyle(t)
      .transformOrigin.split(' ')
      .map((S) => parseFloat(S)),
    [o, r] = getComputedStyle(t).getPropertyValue('--v-overlay-anchor-origin').split(' ')
  let s = n.left + n.width / 2
  o === 'left' || r === 'left'
    ? (s -= n.width / 2)
    : (o === 'right' || r === 'right') && (s += n.width / 2)
  let u = n.top + n.height / 2
  o === 'top' || r === 'top'
    ? (u -= n.height / 2)
    : (o === 'bottom' || r === 'bottom') && (u += n.height / 2)
  const c = n.width / a.width,
    f = n.height / a.height,
    v = Math.max(1, c, f),
    m = c / v || 0,
    g = f / v || 0,
    h = (a.width * a.height) / (window.innerWidth * window.innerHeight),
    y = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1
  return { x: s - (l + a.left), y: u - (i + a.top), sx: m, sy: g, speed: y }
}
const Bp = Ht('fab-transition', 'center center', 'out-in'),
  Dp = Ht('dialog-bottom-transition'),
  Mp = Ht('dialog-top-transition'),
  zl = Ht('fade-transition'),
  ru = Ht('scale-transition'),
  Rp = Ht('scroll-x-transition'),
  $p = Ht('scroll-x-reverse-transition'),
  Op = Ht('scroll-y-transition'),
  Lp = Ht('scroll-y-reverse-transition'),
  Fp = Ht('slide-x-transition'),
  Np = Ht('slide-x-reverse-transition'),
  su = Ht('slide-y-transition'),
  Hp = Ht('slide-y-reverse-transition'),
  po = um('expand-transition', cm()),
  uu = um('expand-x-transition', cm('', !0)),
  zp = $(
    {
      defaults: Object,
      disabled: Boolean,
      reset: [Number, String],
      root: [Boolean, String],
      scoped: Boolean
    },
    'VDefaultsProvider'
  ),
  Ae = j(!1)({
    name: 'VDefaultsProvider',
    props: zp(),
    setup(e, t) {
      let { slots: n } = t
      const { defaults: a, disabled: l, reset: i, root: o, scoped: r } = io(e)
      return (
        Ke(a, { reset: i, root: o, scoped: r, disabled: l }),
        () => {
          var s
          return (s = n.default) == null ? void 0 : s.call(n)
        }
      )
    }
  }),
  ct = $(
    {
      height: [Number, String],
      maxHeight: [Number, String],
      maxWidth: [Number, String],
      minHeight: [Number, String],
      minWidth: [Number, String],
      width: [Number, String]
    },
    'dimension'
  )
function dt(e) {
  return {
    dimensionStyles: b(() => ({
      height: fe(e.height),
      maxHeight: fe(e.maxHeight),
      maxWidth: fe(e.maxWidth),
      minHeight: fe(e.minHeight),
      minWidth: fe(e.minWidth),
      width: fe(e.width)
    }))
  }
}
function jp(e) {
  return {
    aspectStyles: b(() => {
      const t = Number(e.aspectRatio)
      return t ? { paddingBottom: String((1 / t) * 100) + '%' } : void 0
    })
  }
}
const dm = $(
    { aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ve(), ...ct() },
    'VResponsive'
  ),
  jr = j()({
    name: 'VResponsive',
    props: dm(),
    setup(e, t) {
      let { slots: n } = t
      const { aspectStyles: a } = jp(e),
        { dimensionStyles: l } = dt(e)
      return (
        K(() => {
          var i
          return d(
            'div',
            {
              class: ['v-responsive', { 'v-responsive--inline': e.inline }, e.class],
              style: [l.value, e.style]
            },
            [
              d('div', { class: 'v-responsive__sizer', style: a.value }, null),
              (i = n.additional) == null ? void 0 : i.call(n),
              n.default &&
                d('div', { class: ['v-responsive__content', e.contentClass] }, [n.default()])
            ]
          )
        }),
        {}
      )
    }
  })
function cu(e) {
  return qs(() => {
    const t = [],
      n = {}
    if (e.value.background)
      if (Or(e.value.background)) {
        if (((n.backgroundColor = e.value.background), !e.value.text && aS(e.value.background))) {
          const a = Gt(e.value.background)
          if (a.a == null || a.a === 1) {
            const l = jv(a)
            ;(n.color = l), (n.caretColor = l)
          }
        }
      } else t.push(`bg-${e.value.background}`)
    return (
      e.value.text &&
        (Or(e.value.text)
          ? ((n.color = e.value.text), (n.caretColor = e.value.text))
          : t.push(`text-${e.value.text}`)),
      { colorClasses: t, colorStyles: n }
    )
  })
}
function yt(e, t) {
  const n = b(() => ({ text: nt(e) ? e.value : t ? e[t] : null })),
    { colorClasses: a, colorStyles: l } = cu(n)
  return { textColorClasses: a, textColorStyles: l }
}
function Ne(e, t) {
  const n = b(() => ({ background: nt(e) ? e.value : t ? e[t] : null })),
    { colorClasses: a, colorStyles: l } = cu(n)
  return { backgroundColorClasses: a, backgroundColorStyles: l }
}
const Ue = $(
  { rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean },
  'rounded'
)
function qe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  return {
    roundedClasses: b(() => {
      const a = nt(e) ? e.value : e.rounded,
        l = nt(e) ? e.value : e.tile,
        i = []
      if (a === !0 || a === '') i.push(`${t}--rounded`)
      else if (typeof a == 'string' || a === 0)
        for (const o of String(a).split(' ')) i.push(`rounded-${o}`)
      else (l || a === !1) && i.push('rounded-0')
      return i
    })
  }
}
const cn = $(
    {
      transition: {
        type: [Boolean, String, Object],
        default: 'fade-transition',
        validator: (e) => e !== !0
      }
    },
    'transition'
  ),
  Ct = (e, t) => {
    let { slots: n } = t
    const { transition: a, disabled: l, group: i, ...o } = e,
      { component: r = i ? Ys : gn, ...s } = typeof a == 'object' ? a : {}
    return sn(
      r,
      X(
        typeof a == 'string' ? { name: l ? '' : a } : s,
        typeof a == 'string'
          ? {}
          : Object.fromEntries(
              Object.entries({ disabled: l, group: i }).filter((u) => {
                let [c, f] = u
                return f !== void 0
              })
            ),
        o
      ),
      n
    )
  }
function Wp(e, t) {
  if (!Ks) return
  const n = t.modifiers || {},
    a = t.value,
    { handler: l, options: i } = typeof a == 'object' ? a : { handler: a, options: {} },
    o = new IntersectionObserver(function () {
      var f
      let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        s = arguments.length > 1 ? arguments[1] : void 0
      const u = (f = e._observe) == null ? void 0 : f[t.instance.$.uid]
      if (!u) return
      const c = r.some((v) => v.isIntersecting)
      l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s),
        c && n.once ? fm(e, t) : (u.init = !0)
    }, i)
  ;(e._observe = Object(e._observe)),
    (e._observe[t.instance.$.uid] = { init: !1, observer: o }),
    o.observe(e)
}
function fm(e, t) {
  var a
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid]
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid])
}
const ai = { mounted: Wp, unmounted: fm },
  vm = $(
    {
      alt: String,
      cover: Boolean,
      color: String,
      draggable: { type: [Boolean, String], default: void 0 },
      eager: Boolean,
      gradient: String,
      lazySrc: String,
      options: {
        type: Object,
        default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 })
      },
      sizes: String,
      src: { type: [String, Object], default: '' },
      crossorigin: String,
      referrerpolicy: String,
      srcset: String,
      position: String,
      ...dm(),
      ...ve(),
      ...Ue(),
      ...cn()
    },
    'VImg'
  ),
  In = j()({
    name: 'VImg',
    directives: { intersect: ai },
    props: vm(),
    emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(N(e, 'color')),
        { roundedClasses: o } = qe(e),
        r = Qe('VImg'),
        s = se(''),
        u = J(),
        c = se(e.eager ? 'loading' : 'idle'),
        f = se(),
        v = se(),
        m = b(() =>
          e.src && typeof e.src == 'object'
            ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect || 0)
              }
            : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0)
              }
        ),
        g = b(() => m.value.aspect || f.value / v.value || 0)
      de(
        () => e.src,
        () => {
          h(c.value !== 'idle')
        }
      ),
        de(g, (I, D) => {
          !I && D && u.value && T(u.value)
        }),
        Fs(() => h())
      function h(I) {
        if (!(e.eager && I) && !(Ks && !I && !e.eager)) {
          if (((c.value = 'loading'), m.value.lazySrc)) {
            const D = new Image()
            ;(D.src = m.value.lazySrc), T(D, null)
          }
          m.value.src &&
            Te(() => {
              var D
              n('loadstart', ((D = u.value) == null ? void 0 : D.currentSrc) || m.value.src),
                setTimeout(() => {
                  var L
                  if (!r.isUnmounted)
                    if ((L = u.value) != null && L.complete) {
                      if ((u.value.naturalWidth || S(), c.value === 'error')) return
                      g.value || T(u.value, null), c.value === 'loading' && y()
                    } else g.value || T(u.value), p()
                })
            })
        }
      }
      function y() {
        var I
        r.isUnmounted ||
          (p(),
          T(u.value),
          (c.value = 'loaded'),
          n('load', ((I = u.value) == null ? void 0 : I.currentSrc) || m.value.src))
      }
      function S() {
        var I
        r.isUnmounted ||
          ((c.value = 'error'),
          n('error', ((I = u.value) == null ? void 0 : I.currentSrc) || m.value.src))
      }
      function p() {
        const I = u.value
        I && (s.value = I.currentSrc || I.src)
      }
      let A = -1
      pt(() => {
        clearTimeout(A)
      })
      function T(I) {
        let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100
        const L = () => {
          if ((clearTimeout(A), r.isUnmounted)) return
          const { naturalHeight: W, naturalWidth: Y } = I
          W || Y
            ? ((f.value = Y), (v.value = W))
            : !I.complete && c.value === 'loading' && D != null
              ? (A = window.setTimeout(L, D))
              : (I.currentSrc.endsWith('.svg') || I.currentSrc.startsWith('data:image/svg+xml')) &&
                ((f.value = 1), (v.value = 1))
        }
        L()
      }
      const w = b(() => ({ 'v-img__img--cover': e.cover, 'v-img__img--contain': !e.cover })),
        x = () => {
          var L
          if (!m.value.src || c.value === 'idle') return null
          const I = d(
              'img',
              {
                class: ['v-img__img', w.value],
                style: { objectPosition: e.position },
                src: m.value.src,
                srcset: m.value.srcset,
                alt: e.alt,
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy,
                draggable: e.draggable,
                sizes: e.sizes,
                ref: u,
                onLoad: y,
                onError: S
              },
              null
            ),
            D = (L = a.sources) == null ? void 0 : L.call(a)
          return d(
            Ct,
            { transition: e.transition, appear: !0 },
            {
              default: () => [
                We(D ? d('picture', { class: 'v-img__picture' }, [D, I]) : I, [
                  [Zt, c.value === 'loaded']
                ])
              ]
            }
          )
        },
        V = () =>
          d(
            Ct,
            { transition: e.transition },
            {
              default: () => [
                m.value.lazySrc &&
                  c.value !== 'loaded' &&
                  d(
                    'img',
                    {
                      class: ['v-img__img', 'v-img__img--preload', w.value],
                      style: { objectPosition: e.position },
                      src: m.value.lazySrc,
                      alt: e.alt,
                      crossorigin: e.crossorigin,
                      referrerpolicy: e.referrerpolicy,
                      draggable: e.draggable
                    },
                    null
                  )
              ]
            }
          ),
        _ = () =>
          a.placeholder
            ? d(
                Ct,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    (c.value === 'loading' || (c.value === 'error' && !a.error)) &&
                      d('div', { class: 'v-img__placeholder' }, [a.placeholder()])
                  ]
                }
              )
            : null,
        k = () =>
          a.error
            ? d(
                Ct,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    c.value === 'error' && d('div', { class: 'v-img__error' }, [a.error()])
                  ]
                }
              )
            : null,
        P = () =>
          e.gradient
            ? d(
                'div',
                {
                  class: 'v-img__gradient',
                  style: { backgroundImage: `linear-gradient(${e.gradient})` }
                },
                null
              )
            : null,
        E = se(!1)
      {
        const I = de(g, (D) => {
          D &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                E.value = !0
              })
            }),
            I())
        })
      }
      return (
        K(() => {
          const I = jr.filterProps(e)
          return We(
            d(
              jr,
              X(
                {
                  class: ['v-img', { 'v-img--booting': !E.value }, l.value, o.value, e.class],
                  style: [{ width: fe(e.width === 'auto' ? f.value : e.width) }, i.value, e.style]
                },
                I,
                { aspectRatio: g.value, 'aria-label': e.alt, role: e.alt ? 'img' : void 0 }
              ),
              {
                additional: () =>
                  d(me, null, [
                    d(x, null, null),
                    d(V, null, null),
                    d(P, null, null),
                    d(_, null, null),
                    d(k, null, null)
                  ]),
                default: a.default
              }
            ),
            [[Ft('intersect'), { handler: h, options: e.options }, null, { once: !0 }]]
          )
        }),
        { currentSrc: s, image: u, state: c, naturalWidth: f, naturalHeight: v }
      )
    }
  }),
  zt = $({ border: [Boolean, Number, String] }, 'border')
function Qt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  return {
    borderClasses: b(() => {
      const a = nt(e) ? e.value : e.border,
        l = []
      if (a === !0 || a === '') l.push(`${t}--border`)
      else if (typeof a == 'string' || a === 0)
        for (const i of String(a).split(' ')) l.push(`border-${i}`)
      return l
    })
  }
}
const rt = $(
  {
    elevation: {
      type: [Number, String],
      validator(e) {
        const t = parseInt(e)
        return !isNaN(t) && t >= 0 && t <= 24
      }
    }
  },
  'elevation'
)
function ht(e) {
  return {
    elevationClasses: b(() => {
      const n = nt(e) ? e.value : e.elevation,
        a = []
      return n == null || a.push(`elevation-${n}`), a
    })
  }
}
const Up = [null, 'prominent', 'default', 'comfortable', 'compact'],
  mm = $(
    {
      absolute: Boolean,
      collapse: Boolean,
      color: String,
      density: { type: String, default: 'default', validator: (e) => Up.includes(e) },
      extended: Boolean,
      extensionHeight: { type: [Number, String], default: 48 },
      flat: Boolean,
      floating: Boolean,
      height: { type: [Number, String], default: 64 },
      image: String,
      title: String,
      ...zt(),
      ...ve(),
      ...rt(),
      ...Ue(),
      ..._e({ tag: 'header' }),
      ...Ee()
    },
    'VToolbar'
  ),
  Wr = j()({
    name: 'VToolbar',
    props: mm(),
    setup(e, t) {
      var m
      let { slots: n } = t
      const { backgroundColorClasses: a, backgroundColorStyles: l } = Ne(N(e, 'color')),
        { borderClasses: i } = Qt(e),
        { elevationClasses: o } = ht(e),
        { roundedClasses: r } = qe(e),
        { themeClasses: s } = Re(e),
        { rtlClasses: u } = ut(),
        c = se(!!(e.extended || ((m = n.extension) != null && m.call(n)))),
        f = b(() =>
          parseInt(
            Number(e.height) +
              (e.density === 'prominent' ? Number(e.height) : 0) -
              (e.density === 'comfortable' ? 8 : 0) -
              (e.density === 'compact' ? 16 : 0),
            10
          )
        ),
        v = b(() =>
          c.value
            ? parseInt(
                Number(e.extensionHeight) +
                  (e.density === 'prominent' ? Number(e.extensionHeight) : 0) -
                  (e.density === 'comfortable' ? 4 : 0) -
                  (e.density === 'compact' ? 8 : 0),
                10
              )
            : 0
        )
      return (
        Ke({ VBtn: { variant: 'text' } }),
        K(() => {
          var S
          const g = !!(e.title || n.title),
            h = !!(n.image || e.image),
            y = (S = n.extension) == null ? void 0 : S.call(n)
          return (
            (c.value = !!(e.extended || y)),
            d(
              e.tag,
              {
                class: [
                  'v-toolbar',
                  {
                    'v-toolbar--absolute': e.absolute,
                    'v-toolbar--collapse': e.collapse,
                    'v-toolbar--flat': e.flat,
                    'v-toolbar--floating': e.floating,
                    [`v-toolbar--density-${e.density}`]: !0
                  },
                  a.value,
                  i.value,
                  o.value,
                  r.value,
                  s.value,
                  u.value,
                  e.class
                ],
                style: [l.value, e.style]
              },
              {
                default: () => [
                  h &&
                    d('div', { key: 'image', class: 'v-toolbar__image' }, [
                      n.image
                        ? d(
                            Ae,
                            {
                              key: 'image-defaults',
                              disabled: !e.image,
                              defaults: { VImg: { cover: !0, src: e.image } }
                            },
                            n.image
                          )
                        : d(In, { key: 'image-img', cover: !0, src: e.image }, null)
                    ]),
                  d(
                    Ae,
                    { defaults: { VTabs: { height: fe(f.value) } } },
                    {
                      default: () => {
                        var p, A, T
                        return [
                          d(
                            'div',
                            { class: 'v-toolbar__content', style: { height: fe(f.value) } },
                            [
                              n.prepend &&
                                d('div', { class: 'v-toolbar__prepend' }, [
                                  (p = n.prepend) == null ? void 0 : p.call(n)
                                ]),
                              g && d(ou, { key: 'title', text: e.title }, { text: n.title }),
                              (A = n.default) == null ? void 0 : A.call(n),
                              n.append &&
                                d('div', { class: 'v-toolbar__append' }, [
                                  (T = n.append) == null ? void 0 : T.call(n)
                                ])
                            ]
                          )
                        ]
                      }
                    }
                  ),
                  d(
                    Ae,
                    { defaults: { VTabs: { height: fe(v.value) } } },
                    {
                      default: () => [
                        d(po, null, {
                          default: () => [
                            c.value &&
                              d(
                                'div',
                                { class: 'v-toolbar__extension', style: { height: fe(v.value) } },
                                [y]
                              )
                          ]
                        })
                      ]
                    }
                  )
                ]
              }
            )
          )
        }),
        { contentHeight: f, extensionHeight: v }
      )
    }
  }),
  Gp = $(
    { scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } },
    'scroll'
  )
function Yp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { canScroll: n } = t
  let a = 0
  const l = J(null),
    i = se(0),
    o = se(0),
    r = se(0),
    s = se(!1),
    u = se(!1),
    c = b(() => Number(e.scrollThreshold)),
    f = b(() => et((c.value - i.value) / c.value || 0)),
    v = () => {
      const m = l.value
      !m ||
        (n && !n.value) ||
        ((a = i.value),
        (i.value = 'window' in m ? m.pageYOffset : m.scrollTop),
        (u.value = i.value < a),
        (r.value = Math.abs(i.value - c.value)))
    }
  return (
    de(u, () => {
      o.value = o.value || i.value
    }),
    de(s, () => {
      o.value = 0
    }),
    St(() => {
      de(
        () => e.scrollTarget,
        (m) => {
          var h
          const g = m ? document.querySelector(m) : window
          g &&
            g !== l.value &&
            ((h = l.value) == null || h.removeEventListener('scroll', v),
            (l.value = g),
            l.value.addEventListener('scroll', v, { passive: !0 }))
        },
        { immediate: !0 }
      )
    }),
    pt(() => {
      var m
      ;(m = l.value) == null || m.removeEventListener('scroll', v)
    }),
    n && de(n, v, { immediate: !0 }),
    {
      scrollThreshold: c,
      currentScroll: i,
      currentThreshold: r,
      isScrollActive: s,
      scrollRatio: f,
      isScrollingUp: u,
      savedScroll: o
    }
  )
}
function Ca() {
  const e = se(!1)
  return (
    St(() => {
      window.requestAnimationFrame(() => {
        e.value = !0
      })
    }),
    {
      ssrBootStyles: b(() => (e.value ? void 0 : { transition: 'none !important' })),
      isBooted: tl(e)
    }
  )
}
const Kp = $(
    {
      scrollBehavior: String,
      modelValue: { type: Boolean, default: !0 },
      location: { type: String, default: 'top', validator: (e) => ['top', 'bottom'].includes(e) },
      ...mm(),
      ...wa(),
      ...Gp(),
      height: { type: [Number, String], default: 64 }
    },
    'VAppBar'
  ),
  qp = j()({
    name: 'VAppBar',
    props: Kp(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = J(),
        l = be(e, 'modelValue'),
        i = b(() => {
          var T
          const A = new Set(((T = e.scrollBehavior) == null ? void 0 : T.split(' ')) ?? [])
          return {
            hide: A.has('hide'),
            fullyHide: A.has('fully-hide'),
            inverted: A.has('inverted'),
            collapse: A.has('collapse'),
            elevate: A.has('elevate'),
            fadeImage: A.has('fade-image')
          }
        }),
        o = b(() => {
          const A = i.value
          return (
            A.hide ||
            A.fullyHide ||
            A.inverted ||
            A.collapse ||
            A.elevate ||
            A.fadeImage ||
            !l.value
          )
        }),
        {
          currentScroll: r,
          scrollThreshold: s,
          isScrollingUp: u,
          scrollRatio: c
        } = Yp(e, { canScroll: o }),
        f = b(() => i.value.hide || i.value.fullyHide),
        v = b(
          () => e.collapse || (i.value.collapse && (i.value.inverted ? c.value > 0 : c.value === 0))
        ),
        m = b(
          () =>
            e.flat ||
            (i.value.fullyHide && !l.value) ||
            (i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0))
        ),
        g = b(() => (i.value.fadeImage ? (i.value.inverted ? 1 - c.value : c.value) : void 0)),
        h = b(() => {
          var w, x
          const A = Number(((w = a.value) == null ? void 0 : w.contentHeight) ?? e.height),
            T = Number(((x = a.value) == null ? void 0 : x.extensionHeight) ?? 0)
          return f.value ? (r.value < s.value || i.value.fullyHide ? A + T : A) : A + T
        })
      Dt(
        b(() => !!e.scrollBehavior),
        () => {
          Ze(() => {
            f.value
              ? i.value.inverted
                ? (l.value = r.value > s.value)
                : (l.value = u.value || r.value < s.value)
              : (l.value = !0)
          })
        }
      )
      const { ssrBootStyles: y } = Ca(),
        { layoutItemStyles: S, layoutIsReady: p } = xa({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: N(e, 'location'),
          layoutSize: h,
          elementSize: se(void 0),
          active: l,
          absolute: N(e, 'absolute')
        })
      return (
        K(() => {
          const A = Wr.filterProps(e)
          return d(
            Wr,
            X(
              {
                ref: a,
                class: ['v-app-bar', { 'v-app-bar--bottom': e.location === 'bottom' }, e.class],
                style: [
                  { ...S.value, '--v-toolbar-image-opacity': g.value, height: void 0, ...y.value },
                  e.style
                ]
              },
              A,
              { collapse: v.value, flat: m.value }
            ),
            n
          )
        }),
        p
      )
    }
  }),
  Xp = [null, 'default', 'comfortable', 'compact'],
  ft = $(
    { density: { type: String, default: 'default', validator: (e) => Xp.includes(e) } },
    'density'
  )
function Vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  return { densityClasses: b(() => `${t}--density-${e.density}`) }
}
const Zp = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain']
function _a(e, t) {
  return d(me, null, [
    e && d('span', { key: 'overlay', class: `${t}__overlay` }, null),
    d('span', { key: 'underlay', class: `${t}__underlay` }, null)
  ])
}
const Jt = $(
  {
    color: String,
    variant: { type: String, default: 'elevated', validator: (e) => Zp.includes(e) }
  },
  'variant'
)
function Va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  const n = b(() => {
      const { variant: i } = at(e)
      return `${t}--variant-${i}`
    }),
    { colorClasses: a, colorStyles: l } = cu(
      b(() => {
        const { variant: i, color: o } = at(e)
        return { [['elevated', 'flat'].includes(i) ? 'background' : 'text']: o }
      })
    )
  return { colorClasses: a, colorStyles: l, variantClasses: n }
}
const hm = $(
    {
      baseColor: String,
      divided: Boolean,
      ...zt(),
      ...ve(),
      ...ft(),
      ...rt(),
      ...Ue(),
      ..._e(),
      ...Ee(),
      ...Jt()
    },
    'VBtnGroup'
  ),
  Ur = j()({
    name: 'VBtnGroup',
    props: hm(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { densityClasses: l } = Vt(e),
        { borderClasses: i } = Qt(e),
        { elevationClasses: o } = ht(e),
        { roundedClasses: r } = qe(e)
      Ke({
        VBtn: {
          height: 'auto',
          baseColor: N(e, 'baseColor'),
          color: N(e, 'color'),
          density: N(e, 'density'),
          flat: !0,
          variant: N(e, 'variant')
        }
      }),
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-btn-group',
                { 'v-btn-group--divided': e.divided },
                a.value,
                i.value,
                l.value,
                o.value,
                r.value,
                e.class
              ],
              style: e.style
            },
            n
          )
        )
    }
  }),
  Pa = $(
    {
      modelValue: { type: null, default: void 0 },
      multiple: Boolean,
      mandatory: [Boolean, String],
      max: Number,
      selectedClass: String,
      disabled: Boolean
    },
    'group'
  ),
  Ia = $({ value: null, disabled: Boolean, selectedClass: String }, 'group-item')
function Aa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
  const a = Qe('useGroupItem')
  if (!a)
    throw new Error(
      '[Vuetify] useGroupItem composable must be used inside a component setup function'
    )
  const l = mt()
  Fe(Symbol.for(`${t.description}:id`), l)
  const i = Pe(t, null)
  if (!i) {
    if (!n) return i
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)
  }
  const o = N(e, 'value'),
    r = b(() => !!(i.disabled.value || e.disabled))
  i.register({ id: l, value: o, disabled: r }, a),
    pt(() => {
      i.unregister(l)
    })
  const s = b(() => i.isSelected(l)),
    u = b(() => s.value && [i.selectedClass.value, e.selectedClass])
  return (
    de(
      s,
      (c) => {
        a.emit('group:selected', { value: c })
      },
      { flush: 'sync' }
    ),
    {
      id: l,
      isSelected: s,
      toggle: () => i.select(l, !s.value),
      select: (c) => i.select(l, c),
      selectedClass: u,
      value: o,
      disabled: r,
      group: i
    }
  )
}
function Zn(e, t) {
  let n = !1
  const a = kt([]),
    l = be(
      e,
      'modelValue',
      [],
      (v) => (v == null ? [] : gm(a, Xe(v))),
      (v) => {
        const m = Jp(a, v)
        return e.multiple ? m : m[0]
      }
    ),
    i = Qe('useGroup')
  function o(v, m) {
    const g = v,
      h = Symbol.for(`${t.description}:id`),
      S = Cl(h, i == null ? void 0 : i.vnode).indexOf(m)
    at(g.value) == null && ((g.value = S), (g.useIndexAsValue = !0)),
      S > -1 ? a.splice(S, 0, g) : a.push(g)
  }
  function r(v) {
    if (n) return
    s()
    const m = a.findIndex((g) => g.id === v)
    a.splice(m, 1)
  }
  function s() {
    const v = a.find((m) => !m.disabled)
    v && e.mandatory === 'force' && !l.value.length && (l.value = [v.id])
  }
  St(() => {
    s()
  }),
    pt(() => {
      n = !0
    }),
    Ns(() => {
      for (let v = 0; v < a.length; v++) a[v].useIndexAsValue && (a[v].value = v)
    })
  function u(v, m) {
    const g = a.find((h) => h.id === v)
    if (!(m && g != null && g.disabled))
      if (e.multiple) {
        const h = l.value.slice(),
          y = h.findIndex((p) => p === v),
          S = ~y
        if (
          ((m = m ?? !S),
          (S && e.mandatory && h.length <= 1) || (!S && e.max != null && h.length + 1 > e.max))
        )
          return
        y < 0 && m ? h.push(v) : y >= 0 && !m && h.splice(y, 1), (l.value = h)
      } else {
        const h = l.value.includes(v)
        if (e.mandatory && h) return
        l.value = m ?? !h ? [v] : []
      }
  }
  function c(v) {
    if ((e.multiple, l.value.length)) {
      const m = l.value[0],
        g = a.findIndex((S) => S.id === m)
      let h = (g + v) % a.length,
        y = a[h]
      for (; y.disabled && h !== g; ) (h = (h + v) % a.length), (y = a[h])
      if (y.disabled) return
      l.value = [a[h].id]
    } else {
      const m = a.find((g) => !g.disabled)
      m && (l.value = [m.id])
    }
  }
  const f = {
    register: o,
    unregister: r,
    selected: l,
    select: u,
    disabled: N(e, 'disabled'),
    prev: () => c(a.length - 1),
    next: () => c(1),
    isSelected: (v) => l.value.includes(v),
    selectedClass: b(() => e.selectedClass),
    items: b(() => a),
    getItemIndex: (v) => Qp(a, v)
  }
  return Fe(t, f), f
}
function Qp(e, t) {
  const n = gm(e, [t])
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1
}
function gm(e, t) {
  const n = []
  return (
    t.forEach((a) => {
      const l = e.find((o) => Sn(a, o.value)),
        i = e[a]
      ;(l == null ? void 0 : l.value) != null ? n.push(l.id) : i != null && n.push(i.id)
    }),
    n
  )
}
function Jp(e, t) {
  const n = []
  return (
    t.forEach((a) => {
      const l = e.findIndex((i) => i.id === a)
      if (~l) {
        const i = e[l]
        n.push(i.value != null ? i.value : l)
      }
    }),
    n
  )
}
const du = Symbol.for('vuetify:v-btn-toggle'),
  ek = $({ ...hm(), ...Pa() }, 'VBtnToggle'),
  tk = j()({
    name: 'VBtnToggle',
    props: ek(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { isSelected: a, next: l, prev: i, select: o, selected: r } = Zn(e, du)
      return (
        K(() => {
          const s = Ur.filterProps(e)
          return d(Ur, X({ class: ['v-btn-toggle', e.class] }, s, { style: e.style }), {
            default: () => {
              var u
              return [
                (u = n.default) == null
                  ? void 0
                  : u.call(n, { isSelected: a, next: l, prev: i, select: o, selected: r })
              ]
            }
          })
        }),
        { next: l, prev: i, select: o }
      )
    }
  }),
  nk = ['x-small', 'small', 'default', 'large', 'x-large'],
  wn = $({ size: { type: [String, Number], default: 'default' } }, 'size')
function al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  return qs(() => {
    let n, a
    return (
      Ui(nk, e.size)
        ? (n = `${t}--size-${e.size}`)
        : e.size && (a = { width: fe(e.size), height: fe(e.size) }),
      { sizeClasses: n, sizeStyles: a }
    )
  })
}
const ak = $(
    {
      color: String,
      disabled: Boolean,
      start: Boolean,
      end: Boolean,
      icon: xe,
      ...ve(),
      ...wn(),
      ..._e({ tag: 'i' }),
      ...Ee()
    },
    'VIcon'
  ),
  Me = j()({
    name: 'VIcon',
    props: ak(),
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const l = J(),
        { themeClasses: i } = Re(e),
        { iconData: o } = xp(b(() => l.value || e.icon)),
        { sizeClasses: r } = al(e),
        { textColorClasses: s, textColorStyles: u } = yt(N(e, 'color'))
      return (
        K(() => {
          var v, m
          const c = (v = a.default) == null ? void 0 : v.call(a)
          c &&
            (l.value =
              (m = Pv(c).filter(
                (g) => g.type === ei && g.children && typeof g.children == 'string'
              )[0]) == null
                ? void 0
                : m.children)
          const f = !!(n.onClick || n.onClickOnce)
          return d(
            o.value.component,
            {
              tag: e.tag,
              icon: o.value.icon,
              class: [
                'v-icon',
                'notranslate',
                i.value,
                r.value,
                s.value,
                {
                  'v-icon--clickable': f,
                  'v-icon--disabled': e.disabled,
                  'v-icon--start': e.start,
                  'v-icon--end': e.end
                },
                e.class
              ],
              style: [
                r.value ? void 0 : { fontSize: fe(e.size), height: fe(e.size), width: fe(e.size) },
                u.value,
                e.style
              ],
              role: f ? 'button' : void 0,
              'aria-hidden': !f,
              tabindex: f ? (e.disabled ? -1 : 0) : void 0
            },
            { default: () => [c] }
          )
        }),
        {}
      )
    }
  })
function ko(e, t) {
  const n = J(),
    a = se(!1)
  if (Ks) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), (a.value = !!i.find((o) => o.isIntersecting))
    }, t)
    pt(() => {
      l.disconnect()
    }),
      de(
        n,
        (i, o) => {
          o && (l.unobserve(o), (a.value = !1)), i && l.observe(i)
        },
        { flush: 'post' }
      )
  }
  return { intersectionRef: n, isIntersecting: a }
}
const lk = $(
    {
      bgColor: String,
      color: String,
      indeterminate: [Boolean, String],
      modelValue: { type: [Number, String], default: 0 },
      rotate: { type: [Number, String], default: 0 },
      width: { type: [Number, String], default: 4 },
      ...ve(),
      ...wn(),
      ..._e({ tag: 'div' }),
      ...Ee()
    },
    'VProgressCircular'
  ),
  Xa = j()({
    name: 'VProgressCircular',
    props: lk(),
    setup(e, t) {
      let { slots: n } = t
      const a = 20,
        l = 2 * Math.PI * a,
        i = J(),
        { themeClasses: o } = Re(e),
        { sizeClasses: r, sizeStyles: s } = al(e),
        { textColorClasses: u, textColorStyles: c } = yt(N(e, 'color')),
        { textColorClasses: f, textColorStyles: v } = yt(N(e, 'bgColor')),
        { intersectionRef: m, isIntersecting: g } = ko(),
        { resizeRef: h, contentRect: y } = on(),
        S = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))),
        p = b(() => Number(e.width)),
        A = b(() => (s.value ? Number(e.size) : y.value ? y.value.width : Math.max(p.value, 32))),
        T = b(() => (a / (1 - p.value / A.value)) * 2),
        w = b(() => (p.value / A.value) * T.value),
        x = b(() => fe(((100 - S.value) / 100) * l))
      return (
        Ze(() => {
          ;(m.value = i.value), (h.value = i.value)
        }),
        K(() =>
          d(
            e.tag,
            {
              ref: i,
              class: [
                'v-progress-circular',
                {
                  'v-progress-circular--indeterminate': !!e.indeterminate,
                  'v-progress-circular--visible': g.value,
                  'v-progress-circular--disable-shrink': e.indeterminate === 'disable-shrink'
                },
                o.value,
                r.value,
                u.value,
                e.class
              ],
              style: [s.value, c.value, e.style],
              role: 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              'aria-valuenow': e.indeterminate ? void 0 : S.value
            },
            {
              default: () => [
                d(
                  'svg',
                  {
                    style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` },
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: `0 0 ${T.value} ${T.value}`
                  },
                  [
                    d(
                      'circle',
                      {
                        class: ['v-progress-circular__underlay', f.value],
                        style: v.value,
                        fill: 'transparent',
                        cx: '50%',
                        cy: '50%',
                        r: a,
                        'stroke-width': w.value,
                        'stroke-dasharray': l,
                        'stroke-dashoffset': 0
                      },
                      null
                    ),
                    d(
                      'circle',
                      {
                        class: 'v-progress-circular__overlay',
                        fill: 'transparent',
                        cx: '50%',
                        cy: '50%',
                        r: a,
                        'stroke-width': w.value,
                        'stroke-dasharray': l,
                        'stroke-dashoffset': x.value
                      },
                      null
                    )
                  ]
                ),
                n.default &&
                  d('div', { class: 'v-progress-circular__content' }, [
                    n.default({ value: S.value })
                  ])
              ]
            }
          )
        ),
        {}
      )
    }
  }),
  kd = { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
  Qn = $({ location: String }, 'location')
function Ta(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 ? arguments[2] : void 0
  const { isRtl: a } = ut()
  return {
    locationStyles: b(() => {
      if (!e.location) return {}
      const { side: i, align: o } = Rr(
        e.location.split(' ').length > 1 ? e.location : `${e.location} center`,
        a.value
      )
      function r(u) {
        return n ? n(u) : 0
      }
      const s = {}
      return (
        i !== 'center' && (t ? (s[kd[i]] = `calc(100% - ${r(i)}px)`) : (s[i] = 0)),
        o !== 'center'
          ? t
            ? (s[kd[o]] = `calc(100% - ${r(o)}px)`)
            : (s[o] = 0)
          : (i === 'center'
              ? (s.top = s.left = '50%')
              : (s[{ top: 'left', bottom: 'left', left: 'top', right: 'top' }[i]] = '50%'),
            (s.transform = {
              top: 'translateX(-50%)',
              bottom: 'translateX(-50%)',
              left: 'translateY(-50%)',
              right: 'translateY(-50%)',
              center: 'translate(-50%, -50%)'
            }[i])),
        s
      )
    })
  }
}
const ik = $(
    {
      absolute: Boolean,
      active: { type: Boolean, default: !0 },
      bgColor: String,
      bgOpacity: [Number, String],
      bufferValue: { type: [Number, String], default: 0 },
      bufferColor: String,
      bufferOpacity: [Number, String],
      clickable: Boolean,
      color: String,
      height: { type: [Number, String], default: 4 },
      indeterminate: Boolean,
      max: { type: [Number, String], default: 100 },
      modelValue: { type: [Number, String], default: 0 },
      opacity: [Number, String],
      reverse: Boolean,
      stream: Boolean,
      striped: Boolean,
      roundedBar: Boolean,
      ...ve(),
      ...Qn({ location: 'top' }),
      ...Ue(),
      ..._e(),
      ...Ee()
    },
    'VProgressLinear'
  ),
  wo = j()({
    name: 'VProgressLinear',
    props: ik(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        { isRtl: l, rtlClasses: i } = ut(),
        { themeClasses: o } = Re(e),
        { locationStyles: r } = Ta(e),
        { textColorClasses: s, textColorStyles: u } = yt(e, 'color'),
        { backgroundColorClasses: c, backgroundColorStyles: f } = Ne(b(() => e.bgColor || e.color)),
        { backgroundColorClasses: v, backgroundColorStyles: m } = Ne(
          b(() => e.bufferColor || e.bgColor || e.color)
        ),
        { backgroundColorClasses: g, backgroundColorStyles: h } = Ne(e, 'color'),
        { roundedClasses: y } = qe(e),
        { intersectionRef: S, isIntersecting: p } = ko(),
        A = b(() => parseFloat(e.max)),
        T = b(() => parseFloat(e.height)),
        w = b(() => et((parseFloat(e.bufferValue) / A.value) * 100, 0, 100)),
        x = b(() => et((parseFloat(a.value) / A.value) * 100, 0, 100)),
        V = b(() => l.value !== e.reverse),
        _ = b(() => (e.indeterminate ? 'fade-transition' : 'slide-x-transition'))
      function k(P) {
        if (!S.value) return
        const { left: E, right: I, width: D } = S.value.getBoundingClientRect(),
          L = V.value ? D - P.clientX + (I - D) : P.clientX - E
        a.value = Math.round((L / D) * A.value)
      }
      return (
        K(() =>
          d(
            e.tag,
            {
              ref: S,
              class: [
                'v-progress-linear',
                {
                  'v-progress-linear--absolute': e.absolute,
                  'v-progress-linear--active': e.active && p.value,
                  'v-progress-linear--reverse': V.value,
                  'v-progress-linear--rounded': e.rounded,
                  'v-progress-linear--rounded-bar': e.roundedBar,
                  'v-progress-linear--striped': e.striped
                },
                y.value,
                o.value,
                i.value,
                e.class
              ],
              style: [
                {
                  bottom: e.location === 'bottom' ? 0 : void 0,
                  top: e.location === 'top' ? 0 : void 0,
                  height: e.active ? fe(T.value) : 0,
                  '--v-progress-linear-height': fe(T.value),
                  ...(e.absolute ? r.value : {})
                },
                e.style
              ],
              role: 'progressbar',
              'aria-hidden': e.active ? 'false' : 'true',
              'aria-valuemin': '0',
              'aria-valuemax': e.max,
              'aria-valuenow': e.indeterminate ? void 0 : x.value,
              onClick: e.clickable && k
            },
            {
              default: () => [
                e.stream &&
                  d(
                    'div',
                    {
                      key: 'stream',
                      class: ['v-progress-linear__stream', s.value],
                      style: {
                        ...u.value,
                        [V.value ? 'left' : 'right']: fe(-T.value),
                        borderTop: `${fe(T.value / 2)} dotted`,
                        opacity: parseFloat(e.bufferOpacity),
                        top: `calc(50% - ${fe(T.value / 4)})`,
                        width: fe(100 - w.value, '%'),
                        '--v-progress-linear-stream-to': fe(T.value * (V.value ? 1 : -1))
                      }
                    },
                    null
                  ),
                d(
                  'div',
                  {
                    class: ['v-progress-linear__background', c.value],
                    style: [
                      f.value,
                      { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }
                    ]
                  },
                  null
                ),
                d(
                  'div',
                  {
                    class: ['v-progress-linear__buffer', v.value],
                    style: [
                      m.value,
                      { opacity: parseFloat(e.bufferOpacity), width: fe(w.value, '%') }
                    ]
                  },
                  null
                ),
                d(
                  gn,
                  { name: _.value },
                  {
                    default: () => [
                      e.indeterminate
                        ? d('div', { class: 'v-progress-linear__indeterminate' }, [
                            ['long', 'short'].map((P) =>
                              d(
                                'div',
                                {
                                  key: P,
                                  class: ['v-progress-linear__indeterminate', P, g.value],
                                  style: h.value
                                },
                                null
                              )
                            )
                          ])
                        : d(
                            'div',
                            {
                              class: ['v-progress-linear__determinate', g.value],
                              style: [h.value, { width: fe(x.value, '%') }]
                            },
                            null
                          )
                    ]
                  }
                ),
                n.default &&
                  d('div', { class: 'v-progress-linear__content' }, [
                    n.default({ value: x.value, buffer: w.value })
                  ])
              ]
            }
          )
        ),
        {}
      )
    }
  }),
  xo = $({ loading: [Boolean, String] }, 'loader')
function li(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  return { loaderClasses: b(() => ({ [`${t}--loading`]: e.loading })) }
}
function ii(e, t) {
  var a
  let { slots: n } = t
  return d('div', { class: `${e.name}__loader` }, [
    ((a = n.default) == null ? void 0 : a.call(n, { color: e.color, isActive: e.active })) ||
      d(
        wo,
        { absolute: e.absolute, active: e.active, color: e.color, height: '2', indeterminate: !0 },
        null
      )
  ])
}
const ok = ['static', 'relative', 'fixed', 'absolute', 'sticky'],
  ll = $({ position: { type: String, validator: (e) => ok.includes(e) } }, 'position')
function il(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  return { positionClasses: b(() => (e.position ? `${t}--${e.position}` : void 0)) }
}
function rk() {
  const e = Qe('useRoute')
  return b(() => {
    var t
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route
  })
}
function ym() {
  var e, t
  return (t = (e = Qe('useRouter')) == null ? void 0 : e.proxy) == null ? void 0 : t.$router
}
function oi(e, t) {
  var u, c
  const n = Uy('RouterLink'),
    a = b(() => !!(e.href || e.to)),
    l = b(() => (a == null ? void 0 : a.value) || Wc(t, 'click') || Wc(e, 'click'))
  if (typeof n == 'string' || !('useLink' in n))
    return { isLink: a, isClickable: l, href: N(e, 'href') }
  const i = b(() => ({ ...e, to: N(() => e.to || '') })),
    o = n.useLink(i.value),
    r = b(() => (e.to ? o : void 0)),
    s = rk()
  return {
    isLink: a,
    isClickable: l,
    route: (u = r.value) == null ? void 0 : u.route,
    navigate: (c = r.value) == null ? void 0 : c.navigate,
    isActive: b(() => {
      var f, v, m
      return r.value
        ? e.exact
          ? s.value
            ? ((m = r.value.isExactActive) == null ? void 0 : m.value) &&
              Sn(r.value.route.value.query, s.value.query)
            : ((v = r.value.isExactActive) == null ? void 0 : v.value) ?? !1
          : ((f = r.value.isActive) == null ? void 0 : f.value) ?? !1
        : !1
    }),
    href: b(() => {
      var f
      return e.to ? ((f = r.value) == null ? void 0 : f.route.value.href) : e.href
    })
  }
}
const ri = $({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, 'router')
let rr = !1
function sk(e, t) {
  let n = !1,
    a,
    l
  Le &&
    (Te(() => {
      window.addEventListener('popstate', i),
        (a =
          e == null
            ? void 0
            : e.beforeEach((o, r, s) => {
                rr ? (n ? t(s) : s()) : setTimeout(() => (n ? t(s) : s())), (rr = !0)
              })),
        (l =
          e == null
            ? void 0
            : e.afterEach(() => {
                rr = !1
              }))
    }),
    _t(() => {
      window.removeEventListener('popstate', i), a == null || a(), l == null || l()
    }))
  function i(o) {
    var r
    ;((r = o.state) != null && r.replaced) || ((n = !0), setTimeout(() => (n = !1)))
  }
}
function uk(e, t) {
  de(
    () => {
      var n
      return (n = e.isActive) == null ? void 0 : n.value
    },
    (n) => {
      e.isLink.value &&
        n &&
        t &&
        Te(() => {
          t(!0)
        })
    },
    { immediate: !0 }
  )
}
const Gr = Symbol('rippleStop'),
  ck = 80
function wd(e, t) {
  ;(e.style.transform = t), (e.style.webkitTransform = t)
}
function Yr(e) {
  return e.constructor.name === 'TouchEvent'
}
function bm(e) {
  return e.constructor.name === 'KeyboardEvent'
}
const dk = function (e, t) {
    var f
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = 0,
      l = 0
    if (!bm(e)) {
      const v = t.getBoundingClientRect(),
        m = Yr(e) ? e.touches[e.touches.length - 1] : e
      ;(a = m.clientX - v.left), (l = m.clientY - v.top)
    }
    let i = 0,
      o = 0.3
    ;(f = t._ripple) != null && f.circle
      ? ((o = 0.15),
        (i = t.clientWidth / 2),
        (i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4))
      : (i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2)
    const r = `${(t.clientWidth - i * 2) / 2}px`,
      s = `${(t.clientHeight - i * 2) / 2}px`,
      u = n.center ? r : `${a - i}px`,
      c = n.center ? s : `${l - i}px`
    return { radius: i, scale: o, x: u, y: c, centerX: r, centerY: s }
  },
  qi = {
    show(e, t) {
      var m
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled)) return
      const a = document.createElement('span'),
        l = document.createElement('span')
      a.appendChild(l),
        (a.className = 'v-ripple__container'),
        n.class && (a.className += ` ${n.class}`)
      const { radius: i, scale: o, x: r, y: s, centerX: u, centerY: c } = dk(e, t, n),
        f = `${i * 2}px`
      ;(l.className = 'v-ripple__animation'),
        (l.style.width = f),
        (l.style.height = f),
        t.appendChild(a)
      const v = window.getComputedStyle(t)
      v &&
        v.position === 'static' &&
        ((t.style.position = 'relative'), (t.dataset.previousPosition = 'static')),
        l.classList.add('v-ripple__animation--enter'),
        l.classList.add('v-ripple__animation--visible'),
        wd(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`),
        (l.dataset.activated = String(performance.now())),
        setTimeout(() => {
          l.classList.remove('v-ripple__animation--enter'),
            l.classList.add('v-ripple__animation--in'),
            wd(l, `translate(${u}, ${c}) scale3d(1,1,1)`)
        }, 0)
    },
    hide(e) {
      var i
      if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return
      const t = e.getElementsByClassName('v-ripple__animation')
      if (t.length === 0) return
      const n = t[t.length - 1]
      if (n.dataset.isHiding) return
      n.dataset.isHiding = 'true'
      const a = performance.now() - Number(n.dataset.activated),
        l = Math.max(250 - a, 0)
      setTimeout(() => {
        n.classList.remove('v-ripple__animation--in'),
          n.classList.add('v-ripple__animation--out'),
          setTimeout(() => {
            var r
            e.getElementsByClassName('v-ripple__animation').length === 1 &&
              e.dataset.previousPosition &&
              ((e.style.position = e.dataset.previousPosition), delete e.dataset.previousPosition),
              ((r = n.parentNode) == null ? void 0 : r.parentNode) === e &&
                e.removeChild(n.parentNode)
          }, 300)
      }, l)
    }
  }
function Sm(e) {
  return typeof e > 'u' || !!e
}
function jl(e) {
  const t = {},
    n = e.currentTarget
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Gr])) {
    if (((e[Gr] = !0), Yr(e))) (n._ripple.touched = !0), (n._ripple.isTouch = !0)
    else if (n._ripple.isTouch) return
    if (
      ((t.center = n._ripple.centered || bm(e)),
      n._ripple.class && (t.class = n._ripple.class),
      Yr(e))
    ) {
      if (n._ripple.showTimerCommit) return
      ;(n._ripple.showTimerCommit = () => {
        qi.show(e, n, t)
      }),
        (n._ripple.showTimer = window.setTimeout(() => {
          var a
          ;(a = n == null ? void 0 : n._ripple) != null &&
            a.showTimerCommit &&
            (n._ripple.showTimerCommit(), (n._ripple.showTimerCommit = null))
        }, ck))
    } else qi.show(e, n, t)
  }
}
function xd(e) {
  e[Gr] = !0
}
function Lt(e) {
  const t = e.currentTarget
  if (t != null && t._ripple) {
    if (
      (window.clearTimeout(t._ripple.showTimer), e.type === 'touchend' && t._ripple.showTimerCommit)
    ) {
      t._ripple.showTimerCommit(),
        (t._ripple.showTimerCommit = null),
        (t._ripple.showTimer = window.setTimeout(() => {
          Lt(e)
        }))
      return
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1)
    }),
      qi.hide(t)
  }
}
function pm(e) {
  const t = e.currentTarget
  t != null &&
    t._ripple &&
    (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
    window.clearTimeout(t._ripple.showTimer))
}
let Wl = !1
function km(e) {
  !Wl && (e.keyCode === Fc.enter || e.keyCode === Fc.space) && ((Wl = !0), jl(e))
}
function wm(e) {
  ;(Wl = !1), Lt(e)
}
function xm(e) {
  Wl && ((Wl = !1), Lt(e))
}
function Cm(e, t, n) {
  const { value: a, modifiers: l } = t,
    i = Sm(a)
  if (
    (i || qi.hide(e),
    (e._ripple = e._ripple ?? {}),
    (e._ripple.enabled = i),
    (e._ripple.centered = l.center),
    (e._ripple.circle = l.circle),
    $l(a) && a.class && (e._ripple.class = a.class),
    i && !n)
  ) {
    if (l.stop) {
      e.addEventListener('touchstart', xd, { passive: !0 }), e.addEventListener('mousedown', xd)
      return
    }
    e.addEventListener('touchstart', jl, { passive: !0 }),
      e.addEventListener('touchend', Lt, { passive: !0 }),
      e.addEventListener('touchmove', pm, { passive: !0 }),
      e.addEventListener('touchcancel', Lt),
      e.addEventListener('mousedown', jl),
      e.addEventListener('mouseup', Lt),
      e.addEventListener('mouseleave', Lt),
      e.addEventListener('keydown', km),
      e.addEventListener('keyup', wm),
      e.addEventListener('blur', xm),
      e.addEventListener('dragstart', Lt, { passive: !0 })
  } else !i && n && _m(e)
}
function _m(e) {
  e.removeEventListener('mousedown', jl),
    e.removeEventListener('touchstart', jl),
    e.removeEventListener('touchend', Lt),
    e.removeEventListener('touchmove', pm),
    e.removeEventListener('touchcancel', Lt),
    e.removeEventListener('mouseup', Lt),
    e.removeEventListener('mouseleave', Lt),
    e.removeEventListener('keydown', km),
    e.removeEventListener('keyup', wm),
    e.removeEventListener('dragstart', Lt),
    e.removeEventListener('blur', xm)
}
function fk(e, t) {
  Cm(e, t, !1)
}
function vk(e) {
  delete e._ripple, _m(e)
}
function mk(e, t) {
  if (t.value === t.oldValue) return
  const n = Sm(t.oldValue)
  Cm(e, t, n)
}
const Bn = { mounted: fk, unmounted: vk, updated: mk },
  Co = $(
    {
      active: { type: Boolean, default: void 0 },
      baseColor: String,
      symbol: { type: null, default: du },
      flat: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: xe,
      appendIcon: xe,
      block: Boolean,
      readonly: Boolean,
      slim: Boolean,
      stacked: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
      text: String,
      ...zt(),
      ...ve(),
      ...ft(),
      ...ct(),
      ...rt(),
      ...Ia(),
      ...xo(),
      ...Qn(),
      ...ll(),
      ...Ue(),
      ...ri(),
      ...wn(),
      ..._e({ tag: 'button' }),
      ...Ee(),
      ...Jt({ variant: 'elevated' })
    },
    'VBtn'
  ),
  De = j()({
    name: 'VBtn',
    props: Co(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { themeClasses: l } = Re(e),
        { borderClasses: i } = Qt(e),
        { densityClasses: o } = Vt(e),
        { dimensionStyles: r } = dt(e),
        { elevationClasses: s } = ht(e),
        { loaderClasses: u } = li(e),
        { locationStyles: c } = Ta(e),
        { positionClasses: f } = il(e),
        { roundedClasses: v } = qe(e),
        { sizeClasses: m, sizeStyles: g } = al(e),
        h = Aa(e, e.symbol, !1),
        y = oi(e, n),
        S = b(() => {
          var P
          return e.active !== void 0
            ? e.active
            : y.isLink.value
              ? (P = y.isActive) == null
                ? void 0
                : P.value
              : h == null
                ? void 0
                : h.isSelected.value
        }),
        p = b(() => {
          var E, I
          return {
            color:
              ((h == null ? void 0 : h.isSelected.value) &&
                (!y.isLink.value || ((E = y.isActive) == null ? void 0 : E.value))) ||
              !h ||
              ((I = y.isActive) == null ? void 0 : I.value)
                ? e.color ?? e.baseColor
                : e.baseColor,
            variant: e.variant
          }
        }),
        { colorClasses: A, colorStyles: T, variantClasses: w } = Va(p),
        x = b(() => (h == null ? void 0 : h.disabled.value) || e.disabled),
        V = b(() => e.variant === 'elevated' && !(e.disabled || e.flat || e.border)),
        _ = b(() => {
          if (!(e.value === void 0 || typeof e.value == 'symbol'))
            return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
        })
      function k(P) {
        var E
        x.value ||
          (y.isLink.value &&
            (P.metaKey || P.ctrlKey || P.shiftKey || P.button !== 0 || n.target === '_blank')) ||
          ((E = y.navigate) == null || E.call(y, P), h == null || h.toggle())
      }
      return (
        uk(y, h == null ? void 0 : h.select),
        K(() => {
          const P = y.isLink.value ? 'a' : e.tag,
            E = !!(e.prependIcon || a.prepend),
            I = !!(e.appendIcon || a.append),
            D = !!(e.icon && e.icon !== !0)
          return We(
            d(
              P,
              {
                type: P === 'a' ? void 0 : 'button',
                class: [
                  'v-btn',
                  h == null ? void 0 : h.selectedClass.value,
                  {
                    'v-btn--active': S.value,
                    'v-btn--block': e.block,
                    'v-btn--disabled': x.value,
                    'v-btn--elevated': V.value,
                    'v-btn--flat': e.flat,
                    'v-btn--icon': !!e.icon,
                    'v-btn--loading': e.loading,
                    'v-btn--readonly': e.readonly,
                    'v-btn--slim': e.slim,
                    'v-btn--stacked': e.stacked
                  },
                  l.value,
                  i.value,
                  A.value,
                  o.value,
                  s.value,
                  u.value,
                  f.value,
                  v.value,
                  m.value,
                  w.value,
                  e.class
                ],
                style: [T.value, r.value, c.value, g.value, e.style],
                'aria-busy': e.loading ? !0 : void 0,
                disabled: x.value || void 0,
                href: y.href.value,
                tabindex: e.loading || e.readonly ? -1 : void 0,
                onClick: k,
                value: _.value
              },
              {
                default: () => {
                  var L
                  return [
                    _a(!0, 'v-btn'),
                    !e.icon &&
                      E &&
                      d('span', { key: 'prepend', class: 'v-btn__prepend' }, [
                        a.prepend
                          ? d(
                              Ae,
                              {
                                key: 'prepend-defaults',
                                disabled: !e.prependIcon,
                                defaults: { VIcon: { icon: e.prependIcon } }
                              },
                              a.prepend
                            )
                          : d(Me, { key: 'prepend-icon', icon: e.prependIcon }, null)
                      ]),
                    d('span', { class: 'v-btn__content', 'data-no-activator': '' }, [
                      !a.default && D
                        ? d(Me, { key: 'content-icon', icon: e.icon }, null)
                        : d(
                            Ae,
                            {
                              key: 'content-defaults',
                              disabled: !D,
                              defaults: { VIcon: { icon: e.icon } }
                            },
                            {
                              default: () => {
                                var W
                                return [((W = a.default) == null ? void 0 : W.call(a)) ?? e.text]
                              }
                            }
                          )
                    ]),
                    !e.icon &&
                      I &&
                      d('span', { key: 'append', class: 'v-btn__append' }, [
                        a.append
                          ? d(
                              Ae,
                              {
                                key: 'append-defaults',
                                disabled: !e.appendIcon,
                                defaults: { VIcon: { icon: e.appendIcon } }
                              },
                              a.append
                            )
                          : d(Me, { key: 'append-icon', icon: e.appendIcon }, null)
                      ]),
                    !!e.loading &&
                      d('span', { key: 'loader', class: 'v-btn__loader' }, [
                        ((L = a.loader) == null ? void 0 : L.call(a)) ??
                          d(
                            Xa,
                            {
                              color: typeof e.loading == 'boolean' ? void 0 : e.loading,
                              indeterminate: !0,
                              width: '2'
                            },
                            null
                          )
                      ])
                  ]
                }
              }
            ),
            [[Bn, !x.value && !!e.ripple, '', { center: !!e.icon }]]
          )
        }),
        { group: h }
      )
    }
  }),
  hk = $({ ...Co({ icon: '$menu', variant: 'text' }) }, 'VAppBarNavIcon'),
  gk = j()({
    name: 'VAppBarNavIcon',
    props: hk(),
    setup(e, t) {
      let { slots: n } = t
      return K(() => d(De, X(e, { class: ['v-app-bar-nav-icon'] }), n)), {}
    }
  }),
  yk = j()({
    name: 'VAppBarTitle',
    props: sm(),
    setup(e, t) {
      let { slots: n } = t
      return K(() => d(ou, X(e, { class: 'v-app-bar-title' }), n)), {}
    }
  }),
  Vm = pn('v-alert-title'),
  bk = ['success', 'info', 'warning', 'error'],
  Sk = $(
    {
      border: {
        type: [Boolean, String],
        validator: (e) => typeof e == 'boolean' || ['top', 'end', 'bottom', 'start'].includes(e)
      },
      borderColor: String,
      closable: Boolean,
      closeIcon: { type: xe, default: '$close' },
      closeLabel: { type: String, default: '$vuetify.close' },
      icon: { type: [Boolean, String, Function, Object], default: null },
      modelValue: { type: Boolean, default: !0 },
      prominent: Boolean,
      title: String,
      text: String,
      type: { type: String, validator: (e) => bk.includes(e) },
      ...ve(),
      ...ft(),
      ...ct(),
      ...rt(),
      ...Qn(),
      ...ll(),
      ...Ue(),
      ..._e(),
      ...Ee(),
      ...Jt({ variant: 'flat' })
    },
    'VAlert'
  ),
  pk = j()({
    name: 'VAlert',
    props: Sk(),
    emits: { 'click:close': (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = be(e, 'modelValue'),
        i = b(() => {
          if (e.icon !== !1) return e.type ? e.icon ?? `$${e.type}` : e.icon
        }),
        o = b(() => ({ color: e.color ?? e.type, variant: e.variant })),
        { themeClasses: r } = Re(e),
        { colorClasses: s, colorStyles: u, variantClasses: c } = Va(o),
        { densityClasses: f } = Vt(e),
        { dimensionStyles: v } = dt(e),
        { elevationClasses: m } = ht(e),
        { locationStyles: g } = Ta(e),
        { positionClasses: h } = il(e),
        { roundedClasses: y } = qe(e),
        { textColorClasses: S, textColorStyles: p } = yt(N(e, 'borderColor')),
        { t: A } = Je(),
        T = b(() => ({
          'aria-label': A(e.closeLabel),
          onClick(w) {
            ;(l.value = !1), n('click:close', w)
          }
        }))
      return () => {
        const w = !!(a.prepend || i.value),
          x = !!(a.title || e.title),
          V = !!(a.close || e.closable)
        return (
          l.value &&
          d(
            e.tag,
            {
              class: [
                'v-alert',
                e.border && {
                  'v-alert--border': !!e.border,
                  [`v-alert--border-${e.border === !0 ? 'start' : e.border}`]: !0
                },
                { 'v-alert--prominent': e.prominent },
                r.value,
                s.value,
                f.value,
                m.value,
                h.value,
                y.value,
                c.value,
                e.class
              ],
              style: [u.value, v.value, g.value, e.style],
              role: 'alert'
            },
            {
              default: () => {
                var _, k
                return [
                  _a(!1, 'v-alert'),
                  e.border &&
                    d(
                      'div',
                      { key: 'border', class: ['v-alert__border', S.value], style: p.value },
                      null
                    ),
                  w &&
                    d('div', { key: 'prepend', class: 'v-alert__prepend' }, [
                      a.prepend
                        ? d(
                            Ae,
                            {
                              key: 'prepend-defaults',
                              disabled: !i.value,
                              defaults: {
                                VIcon: {
                                  density: e.density,
                                  icon: i.value,
                                  size: e.prominent ? 44 : 28
                                }
                              }
                            },
                            a.prepend
                          )
                        : d(
                            Me,
                            {
                              key: 'prepend-icon',
                              density: e.density,
                              icon: i.value,
                              size: e.prominent ? 44 : 28
                            },
                            null
                          )
                    ]),
                  d('div', { class: 'v-alert__content' }, [
                    x &&
                      d(
                        Vm,
                        { key: 'title' },
                        {
                          default: () => {
                            var P
                            return [((P = a.title) == null ? void 0 : P.call(a)) ?? e.title]
                          }
                        }
                      ),
                    ((_ = a.text) == null ? void 0 : _.call(a)) ?? e.text,
                    (k = a.default) == null ? void 0 : k.call(a)
                  ]),
                  a.append && d('div', { key: 'append', class: 'v-alert__append' }, [a.append()]),
                  V &&
                    d('div', { key: 'close', class: 'v-alert__close' }, [
                      a.close
                        ? d(
                            Ae,
                            {
                              key: 'close-defaults',
                              defaults: {
                                VBtn: { icon: e.closeIcon, size: 'x-small', variant: 'text' }
                              }
                            },
                            {
                              default: () => {
                                var P
                                return [
                                  (P = a.close) == null ? void 0 : P.call(a, { props: T.value })
                                ]
                              }
                            }
                          )
                        : d(
                            De,
                            X(
                              {
                                key: 'close-btn',
                                icon: e.closeIcon,
                                size: 'x-small',
                                variant: 'text'
                              },
                              T.value
                            ),
                            null
                          )
                    ])
                ]
              }
            }
          )
        )
      }
    }
  }),
  kk = $(
    {
      start: Boolean,
      end: Boolean,
      icon: xe,
      image: String,
      text: String,
      ...ve(),
      ...ft(),
      ...Ue(),
      ...wn(),
      ..._e(),
      ...Ee(),
      ...Jt({ variant: 'flat' })
    },
    'VAvatar'
  ),
  Xt = j()({
    name: 'VAvatar',
    props: kk(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { colorClasses: l, colorStyles: i, variantClasses: o } = Va(e),
        { densityClasses: r } = Vt(e),
        { roundedClasses: s } = qe(e),
        { sizeClasses: u, sizeStyles: c } = al(e)
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-avatar',
                { 'v-avatar--start': e.start, 'v-avatar--end': e.end },
                a.value,
                l.value,
                r.value,
                s.value,
                u.value,
                o.value,
                e.class
              ],
              style: [i.value, c.value, e.style]
            },
            {
              default: () => [
                n.default
                  ? d(
                      Ae,
                      {
                        key: 'content-defaults',
                        defaults: { VImg: { cover: !0, image: e.image }, VIcon: { icon: e.icon } }
                      },
                      { default: () => [n.default()] }
                    )
                  : e.image
                    ? d(In, { key: 'image', src: e.image, alt: '', cover: !0 }, null)
                    : e.icon
                      ? d(Me, { key: 'icon', icon: e.icon }, null)
                      : e.text,
                _a(!1, 'v-avatar')
              ]
            }
          )
        ),
        {}
      )
    }
  }),
  wk = $({ text: String, onClick: Tt(), ...ve(), ...Ee() }, 'VLabel'),
  ol = j()({
    name: 'VLabel',
    props: wk(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => {
          var a
          return d(
            'label',
            {
              class: ['v-label', { 'v-label--clickable': !!e.onClick }, e.class],
              style: e.style,
              onClick: e.onClick
            },
            [e.text, (a = n.default) == null ? void 0 : a.call(n)]
          )
        }),
        {}
      )
    }
  }),
  Pm = Symbol.for('vuetify:selection-control-group'),
  fu = $(
    {
      color: String,
      disabled: { type: Boolean, default: null },
      defaultsTarget: String,
      error: Boolean,
      id: String,
      inline: Boolean,
      falseIcon: xe,
      trueIcon: xe,
      ripple: { type: [Boolean, Object], default: !0 },
      multiple: { type: Boolean, default: null },
      name: String,
      readonly: { type: Boolean, default: null },
      modelValue: null,
      type: String,
      valueComparator: { type: Function, default: Sn },
      ...ve(),
      ...ft(),
      ...Ee()
    },
    'SelectionControlGroup'
  ),
  xk = $({ ...fu({ defaultsTarget: 'VSelectionControl' }) }, 'VSelectionControlGroup'),
  Im = j()({
    name: 'VSelectionControlGroup',
    props: xk(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        l = mt(),
        i = b(() => e.id || `v-selection-control-group-${l}`),
        o = b(() => e.name || i.value),
        r = new Set()
      return (
        Fe(Pm, {
          modelValue: a,
          forceUpdate: () => {
            r.forEach((s) => s())
          },
          onForceUpdate: (s) => {
            r.add(s),
              _t(() => {
                r.delete(s)
              })
          }
        }),
        Ke({
          [e.defaultsTarget]: {
            color: N(e, 'color'),
            disabled: N(e, 'disabled'),
            density: N(e, 'density'),
            error: N(e, 'error'),
            inline: N(e, 'inline'),
            modelValue: a,
            multiple: b(() => !!e.multiple || (e.multiple == null && Array.isArray(a.value))),
            name: o,
            falseIcon: N(e, 'falseIcon'),
            trueIcon: N(e, 'trueIcon'),
            readonly: N(e, 'readonly'),
            ripple: N(e, 'ripple'),
            type: N(e, 'type'),
            valueComparator: N(e, 'valueComparator')
          }
        }),
        K(() => {
          var s
          return d(
            'div',
            {
              class: [
                'v-selection-control-group',
                { 'v-selection-control-group--inline': e.inline },
                e.class
              ],
              style: e.style,
              role: e.type === 'radio' ? 'radiogroup' : void 0
            },
            [(s = n.default) == null ? void 0 : s.call(n)]
          )
        }),
        {}
      )
    }
  }),
  _o = $(
    {
      label: String,
      baseColor: String,
      trueValue: null,
      falseValue: null,
      value: null,
      ...ve(),
      ...fu()
    },
    'VSelectionControl'
  )
function Ck(e) {
  const t = Pe(Pm, void 0),
    { densityClasses: n } = Vt(e),
    a = be(e, 'modelValue'),
    l = b(() => (e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0)),
    i = b(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
    o = b(() => !!e.multiple || (e.multiple == null && Array.isArray(a.value))),
    r = b({
      get() {
        const m = t ? t.modelValue.value : a.value
        return o.value
          ? Xe(m).some((g) => e.valueComparator(g, l.value))
          : e.valueComparator(m, l.value)
      },
      set(m) {
        if (e.readonly) return
        const g = m ? l.value : i.value
        let h = g
        o.value &&
          (h = m ? [...Xe(a.value), g] : Xe(a.value).filter((y) => !e.valueComparator(y, l.value))),
          t ? (t.modelValue.value = h) : (a.value = h)
      }
    }),
    { textColorClasses: s, textColorStyles: u } = yt(
      b(() => {
        if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor
      })
    ),
    { backgroundColorClasses: c, backgroundColorStyles: f } = Ne(
      b(() => (r.value && !e.error && !e.disabled ? e.color : e.baseColor))
    ),
    v = b(() => (r.value ? e.trueIcon : e.falseIcon))
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: c,
    backgroundColorStyles: f,
    icon: v
  }
}
const va = j()({
    name: 'VSelectionControl',
    directives: { Ripple: Bn },
    inheritAttrs: !1,
    props: _o(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const {
          group: l,
          densityClasses: i,
          icon: o,
          model: r,
          textColorClasses: s,
          textColorStyles: u,
          backgroundColorClasses: c,
          backgroundColorStyles: f,
          trueValue: v
        } = Ck(e),
        m = mt(),
        g = se(!1),
        h = se(!1),
        y = J(),
        S = b(() => e.id || `input-${m}`),
        p = b(() => !e.disabled && !e.readonly)
      l == null ||
        l.onForceUpdate(() => {
          y.value && (y.value.checked = r.value)
        })
      function A(V) {
        p.value && ((g.value = !0), Ya(V.target, ':focus-visible') !== !1 && (h.value = !0))
      }
      function T() {
        ;(g.value = !1), (h.value = !1)
      }
      function w(V) {
        V.stopPropagation()
      }
      function x(V) {
        p.value && (e.readonly && l && Te(() => l.forceUpdate()), (r.value = V.target.checked))
      }
      return (
        K(() => {
          var E, I
          const V = a.label ? a.label({ label: e.label, props: { for: S.value } }) : e.label,
            [_, k] = Xn(n),
            P = d(
              'input',
              X(
                {
                  ref: y,
                  checked: r.value,
                  disabled: !!e.disabled,
                  id: S.value,
                  onBlur: T,
                  onFocus: A,
                  onInput: x,
                  'aria-disabled': !!e.disabled,
                  'aria-label': e.label,
                  type: e.type,
                  value: v.value,
                  name: e.name,
                  'aria-checked': e.type === 'checkbox' ? r.value : void 0
                },
                k
              ),
              null
            )
          return d(
            'div',
            X(
              {
                class: [
                  'v-selection-control',
                  {
                    'v-selection-control--dirty': r.value,
                    'v-selection-control--disabled': e.disabled,
                    'v-selection-control--error': e.error,
                    'v-selection-control--focused': g.value,
                    'v-selection-control--focus-visible': h.value,
                    'v-selection-control--inline': e.inline
                  },
                  i.value,
                  e.class
                ]
              },
              _,
              { style: e.style }
            ),
            [
              d('div', { class: ['v-selection-control__wrapper', s.value], style: u.value }, [
                (E = a.default) == null
                  ? void 0
                  : E.call(a, { backgroundColorClasses: c, backgroundColorStyles: f }),
                We(
                  d('div', { class: ['v-selection-control__input'] }, [
                    ((I = a.input) == null
                      ? void 0
                      : I.call(a, {
                          model: r,
                          textColorClasses: s,
                          textColorStyles: u,
                          backgroundColorClasses: c,
                          backgroundColorStyles: f,
                          inputNode: P,
                          icon: o.value,
                          props: { onFocus: A, onBlur: T, id: S.value }
                        })) ??
                      d(me, null, [o.value && d(Me, { key: 'icon', icon: o.value }, null), P])
                  ]),
                  [
                    [
                      Ft('ripple'),
                      e.ripple && [!e.disabled && !e.readonly, null, ['center', 'circle']]
                    ]
                  ]
                )
              ]),
              V && d(ol, { for: S.value, onClick: w }, { default: () => [V] })
            ]
          )
        }),
        { isFocused: g, input: y }
      )
    }
  }),
  Am = $(
    {
      indeterminate: Boolean,
      indeterminateIcon: { type: xe, default: '$checkboxIndeterminate' },
      ..._o({ falseIcon: '$checkboxOff', trueIcon: '$checkboxOn' })
    },
    'VCheckboxBtn'
  ),
  An = j()({
    name: 'VCheckboxBtn',
    props: Am(),
    emits: { 'update:modelValue': (e) => !0, 'update:indeterminate': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'indeterminate'),
        l = be(e, 'modelValue')
      function i(s) {
        a.value && (a.value = !1)
      }
      const o = b(() => (a.value ? e.indeterminateIcon : e.falseIcon)),
        r = b(() => (a.value ? e.indeterminateIcon : e.trueIcon))
      return (
        K(() => {
          const s = it(va.filterProps(e), ['modelValue'])
          return d(
            va,
            X(s, {
              modelValue: l.value,
              'onUpdate:modelValue': [(u) => (l.value = u), i],
              class: ['v-checkbox-btn', e.class],
              style: e.style,
              type: 'checkbox',
              falseIcon: o.value,
              trueIcon: r.value,
              'aria-checked': a.value ? 'mixed' : void 0
            }),
            n
          )
        }),
        {}
      )
    }
  })
function Tm(e) {
  const { t } = Je()
  function n(a) {
    let { name: l } = a
    const i = {
        prepend: 'prependAction',
        prependInner: 'prependAction',
        append: 'appendAction',
        appendInner: 'appendAction',
        clear: 'clear'
      }[l],
      o = e[`onClick:${l}`],
      r = o && i ? t(`$vuetify.input.${i}`, e.label ?? '') : void 0
    return d(Me, { icon: e[`${l}Icon`], 'aria-label': r, onClick: o }, null)
  }
  return { InputIcon: n }
}
const _k = $(
    {
      active: Boolean,
      color: String,
      messages: { type: [Array, String], default: () => [] },
      ...ve(),
      ...cn({ transition: { component: su, leaveAbsolute: !0, group: !0 } })
    },
    'VMessages'
  ),
  Em = j()({
    name: 'VMessages',
    props: _k(),
    setup(e, t) {
      let { slots: n } = t
      const a = b(() => Xe(e.messages)),
        { textColorClasses: l, textColorStyles: i } = yt(b(() => e.color))
      return (
        K(() =>
          d(
            Ct,
            {
              transition: e.transition,
              tag: 'div',
              class: ['v-messages', l.value, e.class],
              style: [i.value, e.style],
              role: 'alert',
              'aria-live': 'polite'
            },
            {
              default: () => [
                e.active &&
                  a.value.map((o, r) =>
                    d('div', { class: 'v-messages__message', key: `${r}-${a.value}` }, [
                      n.message ? n.message({ message: o }) : o
                    ])
                  )
              ]
            }
          )
        ),
        {}
      )
    }
  }),
  si = $({ focused: Boolean, 'onUpdate:focused': Tt() }, 'focus')
function Dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn()
  const n = be(e, 'focused'),
    a = b(() => ({ [`${t}--focused`]: n.value }))
  function l() {
    n.value = !0
  }
  function i() {
    n.value = !1
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: i }
}
const Bm = Symbol.for('vuetify:form'),
  Vk = $(
    {
      disabled: Boolean,
      fastFail: Boolean,
      readonly: Boolean,
      modelValue: { type: Boolean, default: null },
      validateOn: { type: String, default: 'input' }
    },
    'form'
  )
function Pk(e) {
  const t = be(e, 'modelValue'),
    n = b(() => e.disabled),
    a = b(() => e.readonly),
    l = se(!1),
    i = J([]),
    o = J([])
  async function r() {
    const c = []
    let f = !0
    ;(o.value = []), (l.value = !0)
    for (const v of i.value) {
      const m = await v.validate()
      if ((m.length > 0 && ((f = !1), c.push({ id: v.id, errorMessages: m })), !f && e.fastFail))
        break
    }
    return (o.value = c), (l.value = !1), { valid: f, errors: o.value }
  }
  function s() {
    i.value.forEach((c) => c.reset())
  }
  function u() {
    i.value.forEach((c) => c.resetValidation())
  }
  return (
    de(
      i,
      () => {
        let c = 0,
          f = 0
        const v = []
        for (const m of i.value)
          m.isValid === !1
            ? (f++, v.push({ id: m.id, errorMessages: m.errorMessages }))
            : m.isValid === !0 && c++
        ;(o.value = v), (t.value = f > 0 ? !1 : c === i.value.length ? !0 : null)
      },
      { deep: !0, flush: 'post' }
    ),
    Fe(Bm, {
      register: (c) => {
        let { id: f, vm: v, validate: m, reset: g, resetValidation: h } = c
        i.value.some((y) => y.id === f),
          i.value.push({
            id: f,
            validate: m,
            reset: g,
            resetValidation: h,
            vm: Ps(v),
            isValid: null,
            errorMessages: []
          })
      },
      unregister: (c) => {
        i.value = i.value.filter((f) => f.id !== c)
      },
      update: (c, f, v) => {
        const m = i.value.find((g) => g.id === c)
        m && ((m.isValid = f), (m.errorMessages = v))
      },
      isDisabled: n,
      isReadonly: a,
      isValidating: l,
      isValid: t,
      items: i,
      validateOn: N(e, 'validateOn')
    }),
    {
      errors: o,
      isDisabled: n,
      isReadonly: a,
      isValidating: l,
      isValid: t,
      items: i,
      validate: r,
      reset: s,
      resetValidation: u
    }
  )
}
function Vo() {
  return Pe(Bm, null)
}
const Dm = $(
  {
    disabled: { type: Boolean, default: null },
    error: Boolean,
    errorMessages: { type: [Array, String], default: () => [] },
    maxErrors: { type: [Number, String], default: 1 },
    name: String,
    label: String,
    readonly: { type: Boolean, default: null },
    rules: { type: Array, default: () => [] },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...si()
  },
  'validation'
)
function Mm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn(),
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mt()
  const a = be(e, 'modelValue'),
    l = b(() => (e.validationValue === void 0 ? a.value : e.validationValue)),
    i = Vo(),
    o = J([]),
    r = se(!0),
    s = b(
      () =>
        !!(Xe(a.value === '' ? null : a.value).length || Xe(l.value === '' ? null : l.value).length)
    ),
    u = b(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))),
    c = b(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))),
    f = b(() => {
      var w
      return (w = e.errorMessages) != null && w.length
        ? Xe(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors))
        : o.value
    }),
    v = b(() => {
      let w = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || 'input'
      w === 'lazy' && (w = 'input lazy')
      const x = new Set((w == null ? void 0 : w.split(' ')) ?? [])
      return {
        blur: x.has('blur') || x.has('input'),
        input: x.has('input'),
        submit: x.has('submit'),
        lazy: x.has('lazy')
      }
    }),
    m = b(() => {
      var w
      return e.error || ((w = e.errorMessages) != null && w.length)
        ? !1
        : e.rules.length
          ? r.value
            ? o.value.length || v.value.lazy
              ? null
              : !0
            : !o.value.length
          : !0
    }),
    g = se(!1),
    h = b(() => ({
      [`${t}--error`]: m.value === !1,
      [`${t}--dirty`]: s.value,
      [`${t}--disabled`]: u.value,
      [`${t}--readonly`]: c.value
    })),
    y = Qe('validation'),
    S = b(() => e.name ?? at(n))
  Fs(() => {
    i == null || i.register({ id: S.value, vm: y, validate: T, reset: p, resetValidation: A })
  }),
    pt(() => {
      i == null || i.unregister(S.value)
    }),
    St(async () => {
      v.value.lazy || (await T(!0)), i == null || i.update(S.value, m.value, f.value)
    }),
    Dt(
      () => v.value.input,
      () => {
        de(l, () => {
          if (l.value != null) T()
          else if (e.focused) {
            const w = de(
              () => e.focused,
              (x) => {
                x || T(), w()
              }
            )
          }
        })
      }
    ),
    Dt(
      () => v.value.blur,
      () => {
        de(
          () => e.focused,
          (w) => {
            w || T()
          }
        )
      }
    ),
    de([m, f], () => {
      i == null || i.update(S.value, m.value, f.value)
    })
  async function p() {
    ;(a.value = null), await Te(), await A()
  }
  async function A() {
    ;(r.value = !0), v.value.lazy ? (o.value = []) : await T(!0)
  }
  async function T() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    const x = []
    g.value = !0
    for (const V of e.rules) {
      if (x.length >= +(e.maxErrors ?? 1)) break
      const k = await (typeof V == 'function' ? V : () => V)(l.value)
      if (k !== !0) {
        if (k !== !1 && typeof k != 'string') {
          console.warn(
            `${k} is not a valid value. Rule functions must return boolean true or a string.`
          )
          continue
        }
        x.push(k || '')
      }
    }
    return (o.value = x), (g.value = !1), (r.value = w), o.value
  }
  return {
    errorMessages: f,
    isDirty: s,
    isDisabled: u,
    isReadonly: c,
    isPristine: r,
    isValid: m,
    isValidating: g,
    reset: p,
    resetValidation: A,
    validate: T,
    validationClasses: h
  }
}
const Mn = $(
    {
      id: String,
      appendIcon: xe,
      centerAffix: { type: Boolean, default: !0 },
      prependIcon: xe,
      hideDetails: [Boolean, String],
      hideSpinButtons: Boolean,
      hint: String,
      persistentHint: Boolean,
      messages: { type: [Array, String], default: () => [] },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (e) => ['horizontal', 'vertical'].includes(e)
      },
      'onClick:prepend': Tt(),
      'onClick:append': Tt(),
      ...ve(),
      ...ft(),
      ...vo(ct(), ['maxWidth', 'minWidth', 'width']),
      ...Ee(),
      ...Dm()
    },
    'VInput'
  ),
  bt = j()({
    name: 'VInput',
    props: { ...Mn() },
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a, emit: l } = t
      const { densityClasses: i } = Vt(e),
        { dimensionStyles: o } = dt(e),
        { themeClasses: r } = Re(e),
        { rtlClasses: s } = ut(),
        { InputIcon: u } = Tm(e),
        c = mt(),
        f = b(() => e.id || `input-${c}`),
        v = b(() => `${f.value}-messages`),
        {
          errorMessages: m,
          isDirty: g,
          isDisabled: h,
          isReadonly: y,
          isPristine: S,
          isValid: p,
          isValidating: A,
          reset: T,
          resetValidation: w,
          validate: x,
          validationClasses: V
        } = Mm(e, 'v-input', f),
        _ = b(() => ({
          id: f,
          messagesId: v,
          isDirty: g,
          isDisabled: h,
          isReadonly: y,
          isPristine: S,
          isValid: p,
          isValidating: A,
          reset: T,
          resetValidation: w,
          validate: x
        })),
        k = b(() => {
          var P
          return ((P = e.errorMessages) != null && P.length) || (!S.value && m.value.length)
            ? m.value
            : e.hint && (e.persistentHint || e.focused)
              ? e.hint
              : e.messages
        })
      return (
        K(() => {
          var L, W, Y, te
          const P = !!(a.prepend || e.prependIcon),
            E = !!(a.append || e.appendIcon),
            I = k.value.length > 0,
            D = !e.hideDetails || (e.hideDetails === 'auto' && (I || !!a.details))
          return d(
            'div',
            {
              class: [
                'v-input',
                `v-input--${e.direction}`,
                {
                  'v-input--center-affix': e.centerAffix,
                  'v-input--hide-spin-buttons': e.hideSpinButtons
                },
                i.value,
                r.value,
                s.value,
                V.value,
                e.class
              ],
              style: [o.value, e.style]
            },
            [
              P &&
                d('div', { key: 'prepend', class: 'v-input__prepend' }, [
                  (L = a.prepend) == null ? void 0 : L.call(a, _.value),
                  e.prependIcon && d(u, { key: 'prepend-icon', name: 'prepend' }, null)
                ]),
              a.default &&
                d('div', { class: 'v-input__control' }, [
                  (W = a.default) == null ? void 0 : W.call(a, _.value)
                ]),
              E &&
                d('div', { key: 'append', class: 'v-input__append' }, [
                  e.appendIcon && d(u, { key: 'append-icon', name: 'append' }, null),
                  (Y = a.append) == null ? void 0 : Y.call(a, _.value)
                ]),
              D &&
                d('div', { class: 'v-input__details' }, [
                  d(Em, { id: v.value, active: I, messages: k.value }, { message: a.message }),
                  (te = a.details) == null ? void 0 : te.call(a, _.value)
                ])
            ]
          )
        }),
        { reset: T, resetValidation: w, validate: x, isValid: p, errorMessages: m }
      )
    }
  }),
  Ik = $({ ...Mn(), ...it(Am(), ['inline']) }, 'VCheckbox'),
  Ak = j()({
    name: 'VCheckbox',
    inheritAttrs: !1,
    props: Ik(),
    emits: { 'update:modelValue': (e) => !0, 'update:focused': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const l = be(e, 'modelValue'),
        { isFocused: i, focus: o, blur: r } = Dn(e),
        s = mt(),
        u = b(() => e.id || `checkbox-${s}`)
      return (
        K(() => {
          const [c, f] = Xn(n),
            v = bt.filterProps(e),
            m = An.filterProps(e)
          return d(
            bt,
            X({ class: ['v-checkbox', e.class] }, c, v, {
              modelValue: l.value,
              'onUpdate:modelValue': (g) => (l.value = g),
              id: u.value,
              focused: i.value,
              style: e.style
            }),
            {
              ...a,
              default: (g) => {
                let { id: h, messagesId: y, isDisabled: S, isReadonly: p, isValid: A } = g
                return d(
                  An,
                  X(
                    m,
                    {
                      id: h.value,
                      'aria-describedby': y.value,
                      disabled: S.value,
                      readonly: p.value
                    },
                    f,
                    {
                      error: A.value === !1,
                      modelValue: l.value,
                      'onUpdate:modelValue': (T) => (l.value = T),
                      onFocus: o,
                      onBlur: r
                    }
                  ),
                  a
                )
              }
            }
          )
        }),
        {}
      )
    }
  })
function Tk(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e
  const i = Ul(l, n),
    o = Rm(l, a, n),
    r = Ul(l, t),
    s = $m(l, t),
    u = r * 0.4
  return o > s ? s - u : o + i < s + r ? s - i + r + u : o
}
function Ek(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e
  const l = Ul(a, n),
    i = $m(a, t),
    o = Ul(a, t)
  return i - l / 2 + o / 2
}
function Cd(e, t) {
  const n = e ? 'scrollWidth' : 'scrollHeight'
  return (t == null ? void 0 : t[n]) || 0
}
function Bk(e, t) {
  const n = e ? 'clientWidth' : 'clientHeight'
  return (t == null ? void 0 : t[n]) || 0
}
function Rm(e, t, n) {
  if (!n) return 0
  const { scrollLeft: a, offsetWidth: l, scrollWidth: i } = n
  return e ? (t ? i - l + a : a) : n.scrollTop
}
function Ul(e, t) {
  const n = e ? 'offsetWidth' : 'offsetHeight'
  return (t == null ? void 0 : t[n]) || 0
}
function $m(e, t) {
  const n = e ? 'offsetLeft' : 'offsetTop'
  return (t == null ? void 0 : t[n]) || 0
}
const Om = Symbol.for('vuetify:v-slide-group'),
  vu = $(
    {
      centerActive: Boolean,
      direction: { type: String, default: 'horizontal' },
      symbol: { type: null, default: Om },
      nextIcon: { type: xe, default: '$next' },
      prevIcon: { type: xe, default: '$prev' },
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == 'boolean' || ['always', 'desktop', 'mobile'].includes(e)
      },
      ...ve(),
      ...nl(),
      ..._e(),
      ...Pa({ selectedClass: 'v-slide-group-item--active' })
    },
    'VSlideGroup'
  ),
  Gl = j()({
    name: 'VSlideGroup',
    props: vu(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { isRtl: a } = ut(),
        { displayClasses: l, mobile: i } = un(e),
        o = Zn(e, e.symbol),
        r = se(!1),
        s = se(0),
        u = se(0),
        c = se(0),
        f = b(() => e.direction === 'horizontal'),
        { resizeRef: v, contentRect: m } = on(),
        { resizeRef: g, contentRect: h } = on(),
        y = gp(),
        S = b(() => ({ container: v.value, duration: 200, easing: 'easeOutQuart' })),
        p = b(() =>
          o.selected.value.length
            ? o.items.value.findIndex((O) => O.id === o.selected.value[0])
            : -1
        ),
        A = b(() =>
          o.selected.value.length
            ? o.items.value.findIndex((O) => O.id === o.selected.value[o.selected.value.length - 1])
            : -1
        )
      if (Le) {
        let O = -1
        de(
          () => [o.selected.value, m.value, h.value, f.value],
          () => {
            cancelAnimationFrame(O),
              (O = requestAnimationFrame(() => {
                if (m.value && h.value) {
                  const z = f.value ? 'width' : 'height'
                  ;(u.value = m.value[z]), (c.value = h.value[z]), (r.value = u.value + 1 < c.value)
                }
                if (p.value >= 0 && g.value) {
                  const z = g.value.children[A.value]
                  w(z, e.centerActive)
                }
              }))
          }
        )
      }
      const T = se(!1)
      function w(O, z) {
        let ee = 0
        z
          ? (ee = Ek({ containerElement: v.value, isHorizontal: f.value, selectedElement: O }))
          : (ee = Tk({
              containerElement: v.value,
              isHorizontal: f.value,
              isRtl: a.value,
              selectedElement: O
            })),
          x(ee)
      }
      function x(O) {
        if (!Le || !v.value) return
        const z = Ul(f.value, v.value),
          ee = Rm(f.value, a.value, v.value)
        if (!(Cd(f.value, v.value) <= z || Math.abs(O - ee) < 16)) {
          if (f.value && a.value && v.value) {
            const { scrollWidth: Se, offsetWidth: ue } = v.value
            O = Se - ue - O
          }
          f.value ? y.horizontal(O, S.value) : y(O, S.value)
        }
      }
      function V(O) {
        const { scrollTop: z, scrollLeft: ee } = O.target
        s.value = f.value ? ee : z
      }
      function _(O) {
        if (((T.value = !0), !(!r.value || !g.value))) {
          for (const z of O.composedPath())
            for (const ee of g.value.children)
              if (ee === z) {
                w(ee)
                return
              }
        }
      }
      function k(O) {
        T.value = !1
      }
      let P = !1
      function E(O) {
        var z
        !P &&
          !T.value &&
          !(O.relatedTarget && (z = g.value) != null && z.contains(O.relatedTarget)) &&
          L(),
          (P = !1)
      }
      function I() {
        P = !0
      }
      function D(O) {
        if (!g.value) return
        function z(ee) {
          O.preventDefault(), L(ee)
        }
        f.value
          ? O.key === 'ArrowRight'
            ? z(a.value ? 'prev' : 'next')
            : O.key === 'ArrowLeft' && z(a.value ? 'next' : 'prev')
          : O.key === 'ArrowDown'
            ? z('next')
            : O.key === 'ArrowUp' && z('prev'),
          O.key === 'Home' ? z('first') : O.key === 'End' && z('last')
      }
      function L(O) {
        var ee, he
        if (!g.value) return
        let z
        if (!O) z = Ol(g.value)[0]
        else if (O === 'next') {
          if (
            ((z = (ee = g.value.querySelector(':focus')) == null ? void 0 : ee.nextElementSibling),
            !z)
          )
            return L('first')
        } else if (O === 'prev') {
          if (
            ((z =
              (he = g.value.querySelector(':focus')) == null ? void 0 : he.previousElementSibling),
            !z)
          )
            return L('last')
        } else
          O === 'first'
            ? (z = g.value.firstElementChild)
            : O === 'last' && (z = g.value.lastElementChild)
        z && z.focus({ preventScroll: !0 })
      }
      function W(O) {
        const z = f.value && a.value ? -1 : 1,
          ee = (O === 'prev' ? -z : z) * u.value
        let he = s.value + ee
        if (f.value && a.value && v.value) {
          const { scrollWidth: Se, offsetWidth: ue } = v.value
          he += Se - ue
        }
        x(he)
      }
      const Y = b(() => ({
          next: o.next,
          prev: o.prev,
          select: o.select,
          isSelected: o.isSelected
        })),
        te = b(() => {
          switch (e.showArrows) {
            case 'always':
              return !0
            case 'desktop':
              return !i.value
            case !0:
              return r.value || Math.abs(s.value) > 0
            case 'mobile':
              return i.value || r.value || Math.abs(s.value) > 0
            default:
              return !i.value && (r.value || Math.abs(s.value) > 0)
          }
        }),
        F = b(() => Math.abs(s.value) > 1),
        q = b(() => {
          if (!v.value) return !1
          const O = Cd(f.value, v.value),
            z = Bk(f.value, v.value)
          return O - z - Math.abs(s.value) > 1
        })
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-slide-group',
                {
                  'v-slide-group--vertical': !f.value,
                  'v-slide-group--has-affixes': te.value,
                  'v-slide-group--is-overflowing': r.value
                },
                l.value,
                e.class
              ],
              style: e.style,
              tabindex: T.value || o.selected.value.length ? -1 : 0,
              onFocus: E
            },
            {
              default: () => {
                var O, z, ee
                return [
                  te.value &&
                    d(
                      'div',
                      {
                        key: 'prev',
                        class: [
                          'v-slide-group__prev',
                          { 'v-slide-group__prev--disabled': !F.value }
                        ],
                        onMousedown: I,
                        onClick: () => F.value && W('prev')
                      },
                      [
                        ((O = n.prev) == null ? void 0 : O.call(n, Y.value)) ??
                          d(zl, null, {
                            default: () => [
                              d(Me, { icon: a.value ? e.nextIcon : e.prevIcon }, null)
                            ]
                          })
                      ]
                    ),
                  d(
                    'div',
                    { key: 'container', ref: v, class: 'v-slide-group__container', onScroll: V },
                    [
                      d(
                        'div',
                        {
                          ref: g,
                          class: 'v-slide-group__content',
                          onFocusin: _,
                          onFocusout: k,
                          onKeydown: D
                        },
                        [(z = n.default) == null ? void 0 : z.call(n, Y.value)]
                      )
                    ]
                  ),
                  te.value &&
                    d(
                      'div',
                      {
                        key: 'next',
                        class: [
                          'v-slide-group__next',
                          { 'v-slide-group__next--disabled': !q.value }
                        ],
                        onMousedown: I,
                        onClick: () => q.value && W('next')
                      },
                      [
                        ((ee = n.next) == null ? void 0 : ee.call(n, Y.value)) ??
                          d(zl, null, {
                            default: () => [
                              d(Me, { icon: a.value ? e.prevIcon : e.nextIcon }, null)
                            ]
                          })
                      ]
                    )
                ]
              }
            }
          )
        ),
        { selected: o.selected, scrollTo: W, scrollOffset: s, focus: L }
      )
    }
  }),
  Lm = Symbol.for('vuetify:v-chip-group'),
  Dk = $(
    {
      column: Boolean,
      filter: Boolean,
      valueComparator: { type: Function, default: Sn },
      ...vu(),
      ...ve(),
      ...Pa({ selectedClass: 'v-chip--selected' }),
      ..._e(),
      ...Ee(),
      ...Jt({ variant: 'tonal' })
    },
    'VChipGroup'
  ),
  Mk = j()({
    name: 'VChipGroup',
    props: Dk(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { isSelected: l, select: i, next: o, prev: r, selected: s } = Zn(e, Lm)
      return (
        Ke({
          VChip: {
            color: N(e, 'color'),
            disabled: N(e, 'disabled'),
            filter: N(e, 'filter'),
            variant: N(e, 'variant')
          }
        }),
        K(() => {
          const u = Gl.filterProps(e)
          return d(
            Gl,
            X(u, {
              class: ['v-chip-group', { 'v-chip-group--column': e.column }, a.value, e.class],
              style: e.style
            }),
            {
              default: () => {
                var c
                return [
                  (c = n.default) == null
                    ? void 0
                    : c.call(n, { isSelected: l, select: i, next: o, prev: r, selected: s.value })
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  Rk = $(
    {
      activeClass: String,
      appendAvatar: String,
      appendIcon: xe,
      closable: Boolean,
      closeIcon: { type: xe, default: '$delete' },
      closeLabel: { type: String, default: '$vuetify.close' },
      draggable: Boolean,
      filter: Boolean,
      filterIcon: { type: String, default: '$complete' },
      label: Boolean,
      link: { type: Boolean, default: void 0 },
      pill: Boolean,
      prependAvatar: String,
      prependIcon: xe,
      ripple: { type: [Boolean, Object], default: !0 },
      text: String,
      modelValue: { type: Boolean, default: !0 },
      onClick: Tt(),
      onClickOnce: Tt(),
      ...zt(),
      ...ve(),
      ...ft(),
      ...rt(),
      ...Ia(),
      ...Ue(),
      ...ri(),
      ...wn(),
      ..._e({ tag: 'span' }),
      ...Ee(),
      ...Jt({ variant: 'tonal' })
    },
    'VChip'
  ),
  rl = j()({
    name: 'VChip',
    directives: { Ripple: Bn },
    props: Rk(),
    emits: {
      'click:close': (e) => !0,
      'update:modelValue': (e) => !0,
      'group:selected': (e) => !0,
      click: (e) => !0
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const { t: i } = Je(),
        { borderClasses: o } = Qt(e),
        { colorClasses: r, colorStyles: s, variantClasses: u } = Va(e),
        { densityClasses: c } = Vt(e),
        { elevationClasses: f } = ht(e),
        { roundedClasses: v } = qe(e),
        { sizeClasses: m } = al(e),
        { themeClasses: g } = Re(e),
        h = be(e, 'modelValue'),
        y = Aa(e, Lm, !1),
        S = oi(e, n),
        p = b(() => e.link !== !1 && S.isLink.value),
        A = b(() => !e.disabled && e.link !== !1 && (!!y || e.link || S.isClickable.value)),
        T = b(() => ({
          'aria-label': i(e.closeLabel),
          onClick(V) {
            V.preventDefault(), V.stopPropagation(), (h.value = !1), a('click:close', V)
          }
        }))
      function w(V) {
        var _
        a('click', V),
          A.value && ((_ = S.navigate) == null || _.call(S, V), y == null || y.toggle())
      }
      function x(V) {
        ;(V.key === 'Enter' || V.key === ' ') && (V.preventDefault(), w(V))
      }
      return () => {
        const V = S.isLink.value ? 'a' : e.tag,
          _ = !!(e.appendIcon || e.appendAvatar),
          k = !!(_ || l.append),
          P = !!(l.close || e.closable),
          E = !!(l.filter || e.filter) && y,
          I = !!(e.prependIcon || e.prependAvatar),
          D = !!(I || l.prepend),
          L = !y || y.isSelected.value
        return (
          h.value &&
          We(
            d(
              V,
              {
                class: [
                  'v-chip',
                  {
                    'v-chip--disabled': e.disabled,
                    'v-chip--label': e.label,
                    'v-chip--link': A.value,
                    'v-chip--filter': E,
                    'v-chip--pill': e.pill
                  },
                  g.value,
                  o.value,
                  L ? r.value : void 0,
                  c.value,
                  f.value,
                  v.value,
                  m.value,
                  u.value,
                  y == null ? void 0 : y.selectedClass.value,
                  e.class
                ],
                style: [L ? s.value : void 0, e.style],
                disabled: e.disabled || void 0,
                draggable: e.draggable,
                href: S.href.value,
                tabindex: A.value ? 0 : void 0,
                onClick: w,
                onKeydown: A.value && !p.value && x
              },
              {
                default: () => {
                  var W
                  return [
                    _a(A.value, 'v-chip'),
                    E &&
                      d(
                        uu,
                        { key: 'filter' },
                        {
                          default: () => [
                            We(
                              d('div', { class: 'v-chip__filter' }, [
                                l.filter
                                  ? d(
                                      Ae,
                                      {
                                        key: 'filter-defaults',
                                        disabled: !e.filterIcon,
                                        defaults: { VIcon: { icon: e.filterIcon } }
                                      },
                                      l.filter
                                    )
                                  : d(Me, { key: 'filter-icon', icon: e.filterIcon }, null)
                              ]),
                              [[Zt, y.isSelected.value]]
                            )
                          ]
                        }
                      ),
                    D &&
                      d('div', { key: 'prepend', class: 'v-chip__prepend' }, [
                        l.prepend
                          ? d(
                              Ae,
                              {
                                key: 'prepend-defaults',
                                disabled: !I,
                                defaults: {
                                  VAvatar: { image: e.prependAvatar, start: !0 },
                                  VIcon: { icon: e.prependIcon, start: !0 }
                                }
                              },
                              l.prepend
                            )
                          : d(me, null, [
                              e.prependIcon &&
                                d(
                                  Me,
                                  { key: 'prepend-icon', icon: e.prependIcon, start: !0 },
                                  null
                                ),
                              e.prependAvatar &&
                                d(
                                  Xt,
                                  { key: 'prepend-avatar', image: e.prependAvatar, start: !0 },
                                  null
                                )
                            ])
                      ]),
                    d('div', { class: 'v-chip__content', 'data-no-activator': '' }, [
                      ((W = l.default) == null
                        ? void 0
                        : W.call(l, {
                            isSelected: y == null ? void 0 : y.isSelected.value,
                            selectedClass: y == null ? void 0 : y.selectedClass.value,
                            select: y == null ? void 0 : y.select,
                            toggle: y == null ? void 0 : y.toggle,
                            value: y == null ? void 0 : y.value.value,
                            disabled: e.disabled
                          })) ?? e.text
                    ]),
                    k &&
                      d('div', { key: 'append', class: 'v-chip__append' }, [
                        l.append
                          ? d(
                              Ae,
                              {
                                key: 'append-defaults',
                                disabled: !_,
                                defaults: {
                                  VAvatar: { end: !0, image: e.appendAvatar },
                                  VIcon: { end: !0, icon: e.appendIcon }
                                }
                              },
                              l.append
                            )
                          : d(me, null, [
                              e.appendIcon &&
                                d(Me, { key: 'append-icon', end: !0, icon: e.appendIcon }, null),
                              e.appendAvatar &&
                                d(
                                  Xt,
                                  { key: 'append-avatar', end: !0, image: e.appendAvatar },
                                  null
                                )
                            ])
                      ]),
                    P &&
                      d(
                        'button',
                        X({ key: 'close', class: 'v-chip__close', type: 'button' }, T.value),
                        [
                          l.close
                            ? d(
                                Ae,
                                {
                                  key: 'close-defaults',
                                  defaults: { VIcon: { icon: e.closeIcon, size: 'x-small' } }
                                },
                                l.close
                              )
                            : d(Me, { key: 'close-icon', icon: e.closeIcon, size: 'x-small' }, null)
                        ]
                      )
                  ]
                }
              }
            ),
            [[Ft('ripple'), A.value && e.ripple, null]]
          )
        )
      }
    }
  }),
  Kr = Symbol.for('vuetify:list')
function Fm() {
  const e = Pe(Kr, { hasPrepend: se(!1), updateHasPrepend: () => null }),
    t = {
      hasPrepend: se(!1),
      updateHasPrepend: (n) => {
        n && (t.hasPrepend.value = n)
      }
    }
  return Fe(Kr, t), e
}
function Nm() {
  return Pe(Kr, null)
}
const mu = (e) => {
    const t = {
      activate: (n) => {
        let { id: a, value: l, activated: i } = n
        return (a = Ce(a)), (e && !l && i.size === 1 && i.has(a)) || (l ? i.add(a) : i.delete(a)), i
      },
      in: (n, a, l) => {
        let i = new Set()
        for (const o of n || [])
          i = t.activate({ id: o, value: !0, activated: new Set(i), children: a, parents: l })
        return i
      },
      out: (n) => Array.from(n)
    }
    return t
  },
  Hm = (e) => {
    const t = mu(e)
    return {
      activate: (a) => {
        let { activated: l, id: i, ...o } = a
        i = Ce(i)
        const r = l.has(i) ? new Set([i]) : new Set()
        return t.activate({ ...o, id: i, activated: r })
      },
      in: (a, l, i) => {
        let o = new Set()
        return a != null && a.length && (o = t.in(a.slice(0, 1), l, i)), o
      },
      out: (a, l, i) => t.out(a, l, i)
    }
  },
  $k = (e) => {
    const t = mu(e)
    return {
      activate: (a) => {
        let { id: l, activated: i, children: o, ...r } = a
        return (l = Ce(l)), o.has(l) ? i : t.activate({ id: l, activated: i, children: o, ...r })
      },
      in: t.in,
      out: t.out
    }
  },
  Ok = (e) => {
    const t = Hm(e)
    return {
      activate: (a) => {
        let { id: l, activated: i, children: o, ...r } = a
        return (l = Ce(l)), o.has(l) ? i : t.activate({ id: l, activated: i, children: o, ...r })
      },
      in: t.in,
      out: t.out
    }
  },
  Lk = {
    open: (e) => {
      let { id: t, value: n, opened: a, parents: l } = e
      if (n) {
        const i = new Set()
        i.add(t)
        let o = l.get(t)
        for (; o != null; ) i.add(o), (o = l.get(o))
        return i
      } else return a.delete(t), a
    },
    select: () => null
  },
  zm = {
    open: (e) => {
      let { id: t, value: n, opened: a, parents: l } = e
      if (n) {
        let i = l.get(t)
        for (a.add(t); i != null && i !== t; ) a.add(i), (i = l.get(i))
        return a
      } else a.delete(t)
      return a
    },
    select: () => null
  },
  Fk = {
    open: zm.open,
    select: (e) => {
      let { id: t, value: n, opened: a, parents: l } = e
      if (!n) return a
      const i = []
      let o = l.get(t)
      for (; o != null; ) i.push(o), (o = l.get(o))
      return new Set(i)
    }
  },
  hu = (e) => {
    const t = {
      select: (n) => {
        let { id: a, value: l, selected: i } = n
        if (((a = Ce(a)), e && !l)) {
          const o = Array.from(i.entries()).reduce((r, s) => {
            let [u, c] = s
            return c === 'on' && r.push(u), r
          }, [])
          if (o.length === 1 && o[0] === a) return i
        }
        return i.set(a, l ? 'on' : 'off'), i
      },
      in: (n, a, l) => {
        let i = new Map()
        for (const o of n || [])
          i = t.select({ id: o, value: !0, selected: new Map(i), children: a, parents: l })
        return i
      },
      out: (n) => {
        const a = []
        for (const [l, i] of n.entries()) i === 'on' && a.push(l)
        return a
      }
    }
    return t
  },
  jm = (e) => {
    const t = hu(e)
    return {
      select: (a) => {
        let { selected: l, id: i, ...o } = a
        i = Ce(i)
        const r = l.has(i) ? new Map([[i, l.get(i)]]) : new Map()
        return t.select({ ...o, id: i, selected: r })
      },
      in: (a, l, i) => {
        let o = new Map()
        return a != null && a.length && (o = t.in(a.slice(0, 1), l, i)), o
      },
      out: (a, l, i) => t.out(a, l, i)
    }
  },
  Nk = (e) => {
    const t = hu(e)
    return {
      select: (a) => {
        let { id: l, selected: i, children: o, ...r } = a
        return (l = Ce(l)), o.has(l) ? i : t.select({ id: l, selected: i, children: o, ...r })
      },
      in: t.in,
      out: t.out
    }
  },
  Hk = (e) => {
    const t = jm(e)
    return {
      select: (a) => {
        let { id: l, selected: i, children: o, ...r } = a
        return (l = Ce(l)), o.has(l) ? i : t.select({ id: l, selected: i, children: o, ...r })
      },
      in: t.in,
      out: t.out
    }
  },
  zk = (e) => {
    const t = {
      select: (n) => {
        let { id: a, value: l, selected: i, children: o, parents: r } = n
        a = Ce(a)
        const s = new Map(i),
          u = [a]
        for (; u.length; ) {
          const f = u.shift()
          i.set(f, l ? 'on' : 'off'), o.has(f) && u.push(...o.get(f))
        }
        let c = r.get(a)
        for (; c; ) {
          const f = o.get(c),
            v = f.every((g) => i.get(g) === 'on'),
            m = f.every((g) => !i.has(g) || i.get(g) === 'off')
          i.set(c, v ? 'on' : m ? 'off' : 'indeterminate'), (c = r.get(c))
        }
        return e &&
          !l &&
          Array.from(i.entries()).reduce((v, m) => {
            let [g, h] = m
            return h === 'on' && v.push(g), v
          }, []).length === 0
          ? s
          : i
      },
      in: (n, a, l) => {
        let i = new Map()
        for (const o of n || [])
          i = t.select({ id: o, value: !0, selected: new Map(i), children: a, parents: l })
        return i
      },
      out: (n, a) => {
        const l = []
        for (const [i, o] of n.entries()) o === 'on' && !a.has(i) && l.push(i)
        return l
      }
    }
    return t
  },
  Yl = Symbol.for('vuetify:nested'),
  Wm = {
    id: se(),
    root: {
      register: () => null,
      unregister: () => null,
      parents: J(new Map()),
      children: J(new Map()),
      open: () => null,
      openOnSelect: () => null,
      activate: () => null,
      select: () => null,
      activatable: J(!1),
      selectable: J(!1),
      opened: J(new Set()),
      activated: J(new Set()),
      selected: J(new Map()),
      selectedValues: J([])
    }
  },
  jk = $(
    {
      activatable: Boolean,
      selectable: Boolean,
      activeStrategy: [String, Function],
      selectStrategy: [String, Function],
      openStrategy: [String, Object],
      opened: Array,
      activated: Array,
      selected: Array,
      mandatory: Boolean
    },
    'nested'
  ),
  Wk = (e) => {
    let t = !1
    const n = J(new Map()),
      a = J(new Map()),
      l = be(
        e,
        'opened',
        e.opened,
        (m) => new Set(m),
        (m) => [...m.values()]
      ),
      i = b(() => {
        if (typeof e.activeStrategy == 'object') return e.activeStrategy
        switch (e.activeStrategy) {
          case 'leaf':
            return $k(e.mandatory)
          case 'single-leaf':
            return Ok(e.mandatory)
          case 'independent':
            return mu(e.mandatory)
          case 'single-independent':
          default:
            return Hm(e.mandatory)
        }
      }),
      o = b(() => {
        if (typeof e.selectStrategy == 'object') return e.selectStrategy
        switch (e.selectStrategy) {
          case 'single-leaf':
            return Hk(e.mandatory)
          case 'leaf':
            return Nk(e.mandatory)
          case 'independent':
            return hu(e.mandatory)
          case 'single-independent':
            return jm(e.mandatory)
          case 'classic':
          default:
            return zk(e.mandatory)
        }
      }),
      r = b(() => {
        if (typeof e.openStrategy == 'object') return e.openStrategy
        switch (e.openStrategy) {
          case 'list':
            return Fk
          case 'single':
            return Lk
          case 'multiple':
          default:
            return zm
        }
      }),
      s = be(
        e,
        'activated',
        e.activated,
        (m) => i.value.in(m, n.value, a.value),
        (m) => i.value.out(m, n.value, a.value)
      ),
      u = be(
        e,
        'selected',
        e.selected,
        (m) => o.value.in(m, n.value, a.value),
        (m) => o.value.out(m, n.value, a.value)
      )
    pt(() => {
      t = !0
    })
    function c(m) {
      const g = []
      let h = m
      for (; h != null; ) g.unshift(h), (h = a.value.get(h))
      return g
    }
    const f = Qe('nested'),
      v = {
        id: se(),
        root: {
          opened: l,
          activatable: N(e, 'activatable'),
          selectable: N(e, 'selectable'),
          activated: s,
          selected: u,
          selectedValues: b(() => {
            const m = []
            for (const [g, h] of u.value.entries()) h === 'on' && m.push(g)
            return m
          }),
          register: (m, g, h) => {
            g && m !== g && a.value.set(m, g),
              h && n.value.set(m, []),
              g != null && n.value.set(g, [...(n.value.get(g) || []), m])
          },
          unregister: (m) => {
            if (t) return
            n.value.delete(m)
            const g = a.value.get(m)
            if (g) {
              const h = n.value.get(g) ?? []
              n.value.set(
                g,
                h.filter((y) => y !== m)
              )
            }
            a.value.delete(m), l.value.delete(m)
          },
          open: (m, g, h) => {
            f.emit('click:open', { id: m, value: g, path: c(m), event: h })
            const y = r.value.open({
              id: m,
              value: g,
              opened: new Set(l.value),
              children: n.value,
              parents: a.value,
              event: h
            })
            y && (l.value = y)
          },
          openOnSelect: (m, g, h) => {
            const y = r.value.select({
              id: m,
              value: g,
              selected: new Map(u.value),
              opened: new Set(l.value),
              children: n.value,
              parents: a.value,
              event: h
            })
            y && (l.value = y)
          },
          select: (m, g, h) => {
            f.emit('click:select', { id: m, value: g, path: c(m), event: h })
            const y = o.value.select({
              id: m,
              value: g,
              selected: new Map(u.value),
              children: n.value,
              parents: a.value,
              event: h
            })
            y && (u.value = y), v.root.openOnSelect(m, g, h)
          },
          activate: (m, g, h) => {
            if (!e.activatable) return v.root.select(m, !0, h)
            f.emit('click:activate', { id: m, value: g, path: c(m), event: h })
            const y = i.value.activate({
              id: m,
              value: g,
              activated: new Set(s.value),
              children: n.value,
              parents: a.value,
              event: h
            })
            y && (s.value = y)
          },
          children: n,
          parents: a
        }
      }
    return Fe(Yl, v), v.root
  },
  Um = (e, t) => {
    const n = Pe(Yl, Wm),
      a = Symbol(mt()),
      l = b(() => (e.value !== void 0 ? e.value : a)),
      i = {
        ...n,
        id: l,
        open: (o, r) => n.root.open(l.value, o, r),
        openOnSelect: (o, r) => n.root.openOnSelect(l.value, o, r),
        isOpen: b(() => n.root.opened.value.has(l.value)),
        parent: b(() => n.root.parents.value.get(l.value)),
        activate: (o, r) => n.root.activate(l.value, o, r),
        isActivated: b(() => n.root.activated.value.has(Ce(l.value))),
        select: (o, r) => n.root.select(l.value, o, r),
        isSelected: b(() => n.root.selected.value.get(Ce(l.value)) === 'on'),
        isIndeterminate: b(() => n.root.selected.value.get(l.value) === 'indeterminate'),
        isLeaf: b(() => !n.root.children.value.get(l.value)),
        isGroupActivator: n.isGroupActivator
      }
    return (
      !n.isGroupActivator && n.root.register(l.value, n.id.value, t),
      pt(() => {
        !n.isGroupActivator && n.root.unregister(l.value)
      }),
      t && Fe(Yl, i),
      i
    )
  },
  Uk = () => {
    const e = Pe(Yl, Wm)
    Fe(Yl, { ...e, isGroupActivator: !0 })
  },
  Gk = Nt({
    name: 'VListGroupActivator',
    setup(e, t) {
      let { slots: n } = t
      return (
        Uk(),
        () => {
          var a
          return (a = n.default) == null ? void 0 : a.call(n)
        }
      )
    }
  }),
  Yk = $(
    {
      activeColor: String,
      baseColor: String,
      color: String,
      collapseIcon: { type: xe, default: '$collapse' },
      expandIcon: { type: xe, default: '$expand' },
      prependIcon: xe,
      appendIcon: xe,
      fluid: Boolean,
      subgroup: Boolean,
      title: String,
      value: null,
      ...ve(),
      ..._e()
    },
    'VListGroup'
  ),
  qr = j()({
    name: 'VListGroup',
    props: Yk(),
    setup(e, t) {
      let { slots: n } = t
      const { isOpen: a, open: l, id: i } = Um(N(e, 'value'), !0),
        o = b(() => `v-list-group--id-${String(i.value)}`),
        r = Nm(),
        { isBooted: s } = Ca()
      function u(m) {
        l(!a.value, m)
      }
      const c = b(() => ({ onClick: u, class: 'v-list-group__header', id: o.value })),
        f = b(() => (a.value ? e.collapseIcon : e.expandIcon)),
        v = b(() => ({
          VListItem: {
            active: a.value,
            activeColor: e.activeColor,
            baseColor: e.baseColor,
            color: e.color,
            prependIcon: e.prependIcon || (e.subgroup && f.value),
            appendIcon: e.appendIcon || (!e.subgroup && f.value),
            title: e.title,
            value: e.value
          }
        }))
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-list-group',
                {
                  'v-list-group--prepend': r == null ? void 0 : r.hasPrepend.value,
                  'v-list-group--fluid': e.fluid,
                  'v-list-group--subgroup': e.subgroup,
                  'v-list-group--open': a.value
                },
                e.class
              ],
              style: e.style
            },
            {
              default: () => [
                n.activator &&
                  d(
                    Ae,
                    { defaults: v.value },
                    {
                      default: () => [
                        d(Gk, null, {
                          default: () => [n.activator({ props: c.value, isOpen: a.value })]
                        })
                      ]
                    }
                  ),
                d(
                  Ct,
                  { transition: { component: po }, disabled: !s.value },
                  {
                    default: () => {
                      var m
                      return [
                        We(
                          d(
                            'div',
                            {
                              class: 'v-list-group__items',
                              role: 'group',
                              'aria-labelledby': o.value
                            },
                            [(m = n.default) == null ? void 0 : m.call(n)]
                          ),
                          [[Zt, a.value]]
                        )
                      ]
                    }
                  }
                )
              ]
            }
          )
        ),
        { isOpen: a }
      )
    }
  }),
  Kk = $({ opacity: [Number, String], ...ve(), ..._e() }, 'VListItemSubtitle'),
  Gm = j()({
    name: 'VListItemSubtitle',
    props: Kk(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-list-item-subtitle', e.class],
              style: [{ '--v-list-item-subtitle-opacity': e.opacity }, e.style]
            },
            n
          )
        ),
        {}
      )
    }
  }),
  Ym = pn('v-list-item-title'),
  qk = $(
    {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: xe,
      baseColor: String,
      disabled: Boolean,
      lines: String,
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: xe,
      ripple: { type: [Boolean, Object], default: !0 },
      slim: Boolean,
      subtitle: [String, Number],
      title: [String, Number],
      value: null,
      onClick: Tt(),
      onClickOnce: Tt(),
      ...zt(),
      ...ve(),
      ...ft(),
      ...ct(),
      ...rt(),
      ...Ue(),
      ...ri(),
      ..._e(),
      ...Ee(),
      ...Jt({ variant: 'text' })
    },
    'VListItem'
  ),
  Tn = j()({
    name: 'VListItem',
    directives: { Ripple: Bn },
    props: qk(),
    emits: { click: (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a, emit: l } = t
      const i = oi(e, n),
        o = b(() => (e.value === void 0 ? i.href.value : e.value)),
        {
          activate: r,
          isActivated: s,
          select: u,
          isSelected: c,
          isIndeterminate: f,
          isGroupActivator: v,
          root: m,
          parent: g,
          openOnSelect: h
        } = Um(o, !1),
        y = Nm(),
        S = b(() => {
          var O
          return (
            e.active !== !1 &&
            (e.active ||
              ((O = i.isActive) == null ? void 0 : O.value) ||
              (m.activatable.value ? s.value : c.value))
          )
        }),
        p = b(() => e.link !== !1 && i.isLink.value),
        A = b(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (e.link ||
              i.isClickable.value ||
              (!!y && (m.selectable.value || m.activatable.value || e.value != null)))
        ),
        T = b(() => e.rounded || e.nav),
        w = b(() => e.color ?? e.activeColor),
        x = b(() => ({ color: S.value ? w.value ?? e.baseColor : e.baseColor, variant: e.variant }))
      de(
        () => {
          var O
          return (O = i.isActive) == null ? void 0 : O.value
        },
        (O) => {
          O && g.value != null && m.open(g.value, !0), O && h(O)
        },
        { immediate: !0 }
      )
      const { themeClasses: V } = Re(e),
        { borderClasses: _ } = Qt(e),
        { colorClasses: k, colorStyles: P, variantClasses: E } = Va(x),
        { densityClasses: I } = Vt(e),
        { dimensionStyles: D } = dt(e),
        { elevationClasses: L } = ht(e),
        { roundedClasses: W } = qe(T),
        Y = b(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        te = b(() => ({
          isActive: S.value,
          select: u,
          isSelected: c.value,
          isIndeterminate: f.value
        }))
      function F(O) {
        var z
        l('click', O),
          !(v || !A.value) &&
            ((z = i.navigate) == null || z.call(i, O),
            m.activatable.value
              ? r(!s.value, O)
              : (m.selectable.value || e.value != null) && u(!c.value, O))
      }
      function q(O) {
        ;(O.key === 'Enter' || O.key === ' ') && (O.preventDefault(), F(O))
      }
      return (
        K(() => {
          const O = p.value ? 'a' : e.tag,
            z = a.title || e.title != null,
            ee = a.subtitle || e.subtitle != null,
            he = !!(e.appendAvatar || e.appendIcon),
            Se = !!(he || a.append),
            ue = !!(e.prependAvatar || e.prependIcon),
            Q = !!(ue || a.prepend)
          return (
            y == null || y.updateHasPrepend(Q),
            e.activeColor && X0('active-color', ['color', 'base-color']),
            We(
              d(
                O,
                {
                  class: [
                    'v-list-item',
                    {
                      'v-list-item--active': S.value,
                      'v-list-item--disabled': e.disabled,
                      'v-list-item--link': A.value,
                      'v-list-item--nav': e.nav,
                      'v-list-item--prepend': !Q && (y == null ? void 0 : y.hasPrepend.value),
                      'v-list-item--slim': e.slim,
                      [`${e.activeClass}`]: e.activeClass && S.value
                    },
                    V.value,
                    _.value,
                    k.value,
                    I.value,
                    L.value,
                    Y.value,
                    W.value,
                    E.value,
                    e.class
                  ],
                  style: [P.value, D.value, e.style],
                  href: i.href.value,
                  tabindex: A.value ? (y ? -2 : 0) : void 0,
                  onClick: F,
                  onKeydown: A.value && !p.value && q
                },
                {
                  default: () => {
                    var R
                    return [
                      _a(A.value || S.value, 'v-list-item'),
                      Q &&
                        d('div', { key: 'prepend', class: 'v-list-item__prepend' }, [
                          a.prepend
                            ? d(
                                Ae,
                                {
                                  key: 'prepend-defaults',
                                  disabled: !ue,
                                  defaults: {
                                    VAvatar: { density: e.density, image: e.prependAvatar },
                                    VIcon: { density: e.density, icon: e.prependIcon },
                                    VListItemAction: { start: !0 }
                                  }
                                },
                                {
                                  default: () => {
                                    var oe
                                    return [
                                      (oe = a.prepend) == null ? void 0 : oe.call(a, te.value)
                                    ]
                                  }
                                }
                              )
                            : d(me, null, [
                                e.prependAvatar &&
                                  d(
                                    Xt,
                                    {
                                      key: 'prepend-avatar',
                                      density: e.density,
                                      image: e.prependAvatar
                                    },
                                    null
                                  ),
                                e.prependIcon &&
                                  d(
                                    Me,
                                    {
                                      key: 'prepend-icon',
                                      density: e.density,
                                      icon: e.prependIcon
                                    },
                                    null
                                  )
                              ]),
                          d('div', { class: 'v-list-item__spacer' }, null)
                        ]),
                      d('div', { class: 'v-list-item__content', 'data-no-activator': '' }, [
                        z &&
                          d(
                            Ym,
                            { key: 'title' },
                            {
                              default: () => {
                                var oe
                                return [
                                  ((oe = a.title) == null
                                    ? void 0
                                    : oe.call(a, { title: e.title })) ?? e.title
                                ]
                              }
                            }
                          ),
                        ee &&
                          d(
                            Gm,
                            { key: 'subtitle' },
                            {
                              default: () => {
                                var oe
                                return [
                                  ((oe = a.subtitle) == null
                                    ? void 0
                                    : oe.call(a, { subtitle: e.subtitle })) ?? e.subtitle
                                ]
                              }
                            }
                          ),
                        (R = a.default) == null ? void 0 : R.call(a, te.value)
                      ]),
                      Se &&
                        d('div', { key: 'append', class: 'v-list-item__append' }, [
                          a.append
                            ? d(
                                Ae,
                                {
                                  key: 'append-defaults',
                                  disabled: !he,
                                  defaults: {
                                    VAvatar: { density: e.density, image: e.appendAvatar },
                                    VIcon: { density: e.density, icon: e.appendIcon },
                                    VListItemAction: { end: !0 }
                                  }
                                },
                                {
                                  default: () => {
                                    var oe
                                    return [(oe = a.append) == null ? void 0 : oe.call(a, te.value)]
                                  }
                                }
                              )
                            : d(me, null, [
                                e.appendIcon &&
                                  d(
                                    Me,
                                    { key: 'append-icon', density: e.density, icon: e.appendIcon },
                                    null
                                  ),
                                e.appendAvatar &&
                                  d(
                                    Xt,
                                    {
                                      key: 'append-avatar',
                                      density: e.density,
                                      image: e.appendAvatar
                                    },
                                    null
                                  )
                              ]),
                          d('div', { class: 'v-list-item__spacer' }, null)
                        ])
                    ]
                  }
                }
              ),
              [[Ft('ripple'), A.value && e.ripple]]
            )
          )
        }),
        { isGroupActivator: v, isSelected: c, list: y, select: u }
      )
    }
  }),
  Xk = $(
    { color: String, inset: Boolean, sticky: Boolean, title: String, ...ve(), ..._e() },
    'VListSubheader'
  ),
  Km = j()({
    name: 'VListSubheader',
    props: Xk(),
    setup(e, t) {
      let { slots: n } = t
      const { textColorClasses: a, textColorStyles: l } = yt(N(e, 'color'))
      return (
        K(() => {
          const i = !!(n.default || e.title)
          return d(
            e.tag,
            {
              class: [
                'v-list-subheader',
                { 'v-list-subheader--inset': e.inset, 'v-list-subheader--sticky': e.sticky },
                a.value,
                e.class
              ],
              style: [{ textColorStyles: l }, e.style]
            },
            {
              default: () => {
                var o
                return [
                  i &&
                    d('div', { class: 'v-list-subheader__text' }, [
                      ((o = n.default) == null ? void 0 : o.call(n)) ?? e.title
                    ])
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  Zk = $(
    {
      color: String,
      inset: Boolean,
      length: [Number, String],
      opacity: [Number, String],
      thickness: [Number, String],
      vertical: Boolean,
      ...ve(),
      ...Ee()
    },
    'VDivider'
  ),
  ui = j()({
    name: 'VDivider',
    props: Zk(),
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { themeClasses: l } = Re(e),
        { textColorClasses: i, textColorStyles: o } = yt(N(e, 'color')),
        r = b(() => {
          const s = {}
          return (
            e.length && (s[e.vertical ? 'maxHeight' : 'maxWidth'] = fe(e.length)),
            e.thickness &&
              (s[e.vertical ? 'borderRightWidth' : 'borderTopWidth'] = fe(e.thickness)),
            s
          )
        })
      return (
        K(() => {
          const s = d(
            'hr',
            {
              class: [
                { 'v-divider': !0, 'v-divider--inset': e.inset, 'v-divider--vertical': e.vertical },
                l.value,
                i.value,
                e.class
              ],
              style: [r.value, o.value, { '--v-border-opacity': e.opacity }, e.style],
              'aria-orientation':
                !n.role || n.role === 'separator'
                  ? e.vertical
                    ? 'vertical'
                    : 'horizontal'
                  : void 0,
              role: `${n.role || 'separator'}`
            },
            null
          )
          return a.default
            ? d(
                'div',
                {
                  class: [
                    'v-divider__wrapper',
                    {
                      'v-divider__wrapper--vertical': e.vertical,
                      'v-divider__wrapper--inset': e.inset
                    }
                  ]
                },
                [s, d('div', { class: 'v-divider__content' }, [a.default()]), s]
              )
            : s
        }),
        {}
      )
    }
  }),
  Qk = $({ items: Array, returnObject: Boolean }, 'VListChildren'),
  qm = j()({
    name: 'VListChildren',
    props: Qk(),
    setup(e, t) {
      let { slots: n } = t
      return (
        Fm(),
        () => {
          var a, l
          return (
            ((a = n.default) == null ? void 0 : a.call(n)) ??
            ((l = e.items) == null
              ? void 0
              : l.map((i) => {
                  var v, m
                  let { children: o, props: r, type: s, raw: u } = i
                  if (s === 'divider')
                    return (
                      ((v = n.divider) == null ? void 0 : v.call(n, { props: r })) ?? d(ui, r, null)
                    )
                  if (s === 'subheader')
                    return (
                      ((m = n.subheader) == null ? void 0 : m.call(n, { props: r })) ??
                      d(Km, r, null)
                    )
                  const c = {
                      subtitle: n.subtitle
                        ? (g) => {
                            var h
                            return (h = n.subtitle) == null ? void 0 : h.call(n, { ...g, item: u })
                          }
                        : void 0,
                      prepend: n.prepend
                        ? (g) => {
                            var h
                            return (h = n.prepend) == null ? void 0 : h.call(n, { ...g, item: u })
                          }
                        : void 0,
                      append: n.append
                        ? (g) => {
                            var h
                            return (h = n.append) == null ? void 0 : h.call(n, { ...g, item: u })
                          }
                        : void 0,
                      title: n.title
                        ? (g) => {
                            var h
                            return (h = n.title) == null ? void 0 : h.call(n, { ...g, item: u })
                          }
                        : void 0
                    },
                    f = qr.filterProps(r)
                  return o
                    ? d(qr, X({ value: r == null ? void 0 : r.value }, f), {
                        activator: (g) => {
                          let { props: h } = g
                          const y = { ...r, ...h, value: e.returnObject ? u : r.value }
                          return n.header ? n.header({ props: y }) : d(Tn, y, c)
                        },
                        default: () => d(qm, { items: o }, n)
                      })
                    : n.item
                      ? n.item({ props: r })
                      : d(Tn, X(r, { value: e.returnObject ? u : r.value }), c)
                }))
          )
        }
      )
    }
  }),
  Xm = $(
    {
      items: { type: Array, default: () => [] },
      itemTitle: { type: [String, Array, Function], default: 'title' },
      itemValue: { type: [String, Array, Function], default: 'value' },
      itemChildren: { type: [Boolean, String, Array, Function], default: 'children' },
      itemProps: { type: [Boolean, String, Array, Function], default: 'props' },
      returnObject: Boolean,
      valueComparator: { type: Function, default: Sn }
    },
    'list-items'
  )
function Wn(e, t) {
  const n = ot(t, e.itemTitle, t),
    a = ot(t, e.itemValue, n),
    l = ot(t, e.itemChildren),
    i =
      e.itemProps === !0
        ? typeof t == 'object' && t != null && !Array.isArray(t)
          ? 'children' in t
            ? it(t, ['children'])
            : t
          : void 0
        : ot(t, e.itemProps),
    o = { title: n, value: a, ...i }
  return {
    title: String(o.title ?? ''),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? Zm(e, l) : void 0,
    raw: t
  }
}
function Zm(e, t) {
  const n = []
  for (const a of t) n.push(Wn(e, a))
  return n
}
function gu(e) {
  const t = b(() => Zm(e, e.items)),
    n = b(() => t.value.some((i) => i.value === null))
  function a(i) {
    return (
      n.value || (i = i.filter((o) => o !== null)),
      i.map((o) =>
        e.returnObject && typeof o == 'string'
          ? Wn(e, o)
          : t.value.find((r) => e.valueComparator(o, r.value)) || Wn(e, o)
      )
    )
  }
  function l(i) {
    return e.returnObject
      ? i.map((o) => {
          let { raw: r } = o
          return r
        })
      : i.map((o) => {
          let { value: r } = o
          return r
        })
  }
  return { items: t, transformIn: a, transformOut: l }
}
function Jk(e) {
  return typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean'
}
function ew(e, t) {
  const n = ot(t, e.itemType, 'item'),
    a = Jk(t) ? t : ot(t, e.itemTitle),
    l = ot(t, e.itemValue, void 0),
    i = ot(t, e.itemChildren),
    o = e.itemProps === !0 ? it(t, ['children']) : ot(t, e.itemProps),
    r = { title: a, value: l, ...o }
  return {
    type: n,
    title: r.title,
    value: r.value,
    props: r,
    children: n === 'item' && i ? Qm(e, i) : void 0,
    raw: t
  }
}
function Qm(e, t) {
  const n = []
  for (const a of t) n.push(ew(e, a))
  return n
}
function tw(e) {
  return { items: b(() => Qm(e, e.items)) }
}
const nw = $(
    {
      baseColor: String,
      activeColor: String,
      activeClass: String,
      bgColor: String,
      disabled: Boolean,
      expandIcon: String,
      collapseIcon: String,
      lines: { type: [Boolean, String], default: 'one' },
      slim: Boolean,
      nav: Boolean,
      ...jk({ selectStrategy: 'single-leaf', openStrategy: 'list' }),
      ...zt(),
      ...ve(),
      ...ft(),
      ...ct(),
      ...rt(),
      itemType: { type: String, default: 'type' },
      ...Xm(),
      ...Ue(),
      ..._e(),
      ...Ee(),
      ...Jt({ variant: 'text' })
    },
    'VList'
  ),
  Po = j()({
    name: 'VList',
    props: nw(),
    emits: {
      'update:selected': (e) => !0,
      'update:activated': (e) => !0,
      'update:opened': (e) => !0,
      'click:open': (e) => !0,
      'click:activate': (e) => !0,
      'click:select': (e) => !0
    },
    setup(e, t) {
      let { slots: n } = t
      const { items: a } = tw(e),
        { themeClasses: l } = Re(e),
        { backgroundColorClasses: i, backgroundColorStyles: o } = Ne(N(e, 'bgColor')),
        { borderClasses: r } = Qt(e),
        { densityClasses: s } = Vt(e),
        { dimensionStyles: u } = dt(e),
        { elevationClasses: c } = ht(e),
        { roundedClasses: f } = qe(e),
        { children: v, open: m, parents: g, select: h } = Wk(e),
        y = b(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        S = N(e, 'activeColor'),
        p = N(e, 'baseColor'),
        A = N(e, 'color')
      Fm(),
        Ke({
          VListGroup: {
            activeColor: S,
            baseColor: p,
            color: A,
            expandIcon: N(e, 'expandIcon'),
            collapseIcon: N(e, 'collapseIcon')
          },
          VListItem: {
            activeClass: N(e, 'activeClass'),
            activeColor: S,
            baseColor: p,
            color: A,
            density: N(e, 'density'),
            disabled: N(e, 'disabled'),
            lines: N(e, 'lines'),
            nav: N(e, 'nav'),
            slim: N(e, 'slim'),
            variant: N(e, 'variant')
          }
        })
      const T = se(!1),
        w = J()
      function x(I) {
        T.value = !0
      }
      function V(I) {
        T.value = !1
      }
      function _(I) {
        var D
        !T.value &&
          !(I.relatedTarget && (D = w.value) != null && D.contains(I.relatedTarget)) &&
          E()
      }
      function k(I) {
        const D = I.target
        if (!(!w.value || ['INPUT', 'TEXTAREA'].includes(D.tagName))) {
          if (I.key === 'ArrowDown') E('next')
          else if (I.key === 'ArrowUp') E('prev')
          else if (I.key === 'Home') E('first')
          else if (I.key === 'End') E('last')
          else return
          I.preventDefault()
        }
      }
      function P(I) {
        T.value = !0
      }
      function E(I) {
        if (w.value) return Ga(w.value, I)
      }
      return (
        K(() =>
          d(
            e.tag,
            {
              ref: w,
              class: [
                'v-list',
                { 'v-list--disabled': e.disabled, 'v-list--nav': e.nav, 'v-list--slim': e.slim },
                l.value,
                i.value,
                r.value,
                s.value,
                c.value,
                y.value,
                f.value,
                e.class
              ],
              style: [o.value, u.value, e.style],
              tabindex: e.disabled || T.value ? -1 : 0,
              role: 'listbox',
              'aria-activedescendant': void 0,
              onFocusin: x,
              onFocusout: V,
              onFocus: _,
              onKeydown: k,
              onMousedown: P
            },
            { default: () => [d(qm, { items: a.value, returnObject: e.returnObject }, n)] }
          )
        ),
        { open: m, select: h, focus: E, children: v, parents: g }
      )
    }
  }),
  aw = pn('v-list-img'),
  lw = $({ start: Boolean, end: Boolean, ...ve(), ..._e() }, 'VListItemAction'),
  iw = j()({
    name: 'VListItemAction',
    props: lw(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-list-item-action',
                { 'v-list-item-action--start': e.start, 'v-list-item-action--end': e.end },
                e.class
              ],
              style: e.style
            },
            n
          )
        ),
        {}
      )
    }
  }),
  ow = $({ start: Boolean, end: Boolean, ...ve(), ..._e() }, 'VListItemMedia'),
  rw = j()({
    name: 'VListItemMedia',
    props: ow(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-list-item-media',
                { 'v-list-item-media--start': e.start, 'v-list-item-media--end': e.end },
                e.class
              ],
              style: e.style
            },
            n
          )
        ),
        {}
      )
    }
  })
function sr(e, t) {
  return { x: e.x + t.x, y: e.y + t.y }
}
function sw(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function _d(e, t) {
  if (e.side === 'top' || e.side === 'bottom') {
    const { side: n, align: a } = e,
      l = a === 'left' ? 0 : a === 'center' ? t.width / 2 : a === 'right' ? t.width : a,
      i = n === 'top' ? 0 : n === 'bottom' ? t.height : n
    return sr({ x: l, y: i }, t)
  } else if (e.side === 'left' || e.side === 'right') {
    const { side: n, align: a } = e,
      l = n === 'left' ? 0 : n === 'right' ? t.width : n,
      i = a === 'top' ? 0 : a === 'center' ? t.height / 2 : a === 'bottom' ? t.height : a
    return sr({ x: l, y: i }, t)
  }
  return sr({ x: t.width / 2, y: t.height / 2 }, t)
}
const Jm = { static: dw, connected: vw },
  uw = $(
    {
      locationStrategy: {
        type: [String, Function],
        default: 'static',
        validator: (e) => typeof e == 'function' || e in Jm
      },
      location: { type: String, default: 'bottom' },
      origin: { type: String, default: 'auto' },
      offset: [Number, String, Array]
    },
    'VOverlay-location-strategies'
  )
function cw(e, t) {
  const n = J({}),
    a = J()
  Le &&
    Dt(
      () => !!(t.isActive.value && e.locationStrategy),
      (i) => {
        var o, r
        de(() => e.locationStrategy, i),
          _t(() => {
            window.removeEventListener('resize', l), (a.value = void 0)
          }),
          window.addEventListener('resize', l, { passive: !0 }),
          typeof e.locationStrategy == 'function'
            ? (a.value = (o = e.locationStrategy(t, e, n)) == null ? void 0 : o.updateLocation)
            : (a.value = (r = Jm[e.locationStrategy](t, e, n)) == null ? void 0 : r.updateLocation)
      }
    )
  function l(i) {
    var o
    ;(o = a.value) == null || o.call(a, i)
  }
  return { contentStyles: n, updateLocation: a }
}
function dw() {}
function fw(e, t) {
  t ? e.style.removeProperty('left') : e.style.removeProperty('right')
  const n = Zs(e)
  return (
    t ? (n.x += parseFloat(e.style.right || 0)) : (n.x -= parseFloat(e.style.left || 0)),
    (n.y -= parseFloat(e.style.top || 0)),
    n
  )
}
function vw(e, t, n) {
  ;(Array.isArray(e.target.value) || yS(e.target.value)) &&
    Object.assign(n.value, { position: 'fixed', top: 0, [e.isRtl.value ? 'right' : 'left']: 0 })
  const { preferredAnchor: l, preferredOrigin: i } = qs(() => {
      const g = Rr(t.location, e.isRtl.value),
        h = t.origin === 'overlap' ? g : t.origin === 'auto' ? ar(g) : Rr(t.origin, e.isRtl.value)
      return g.side === h.side && g.align === lr(h).align
        ? { preferredAnchor: Gc(g), preferredOrigin: Gc(h) }
        : { preferredAnchor: g, preferredOrigin: h }
    }),
    [o, r, s, u] = ['minWidth', 'minHeight', 'maxWidth', 'maxHeight'].map((g) =>
      b(() => {
        const h = parseFloat(t[g])
        return isNaN(h) ? 1 / 0 : h
      })
    ),
    c = b(() => {
      if (Array.isArray(t.offset)) return t.offset
      if (typeof t.offset == 'string') {
        const g = t.offset.split(' ').map(parseFloat)
        return g.length < 2 && g.push(0), g
      }
      return typeof t.offset == 'number' ? [t.offset, 0] : [0, 0]
    })
  let f = !1
  const v = new ResizeObserver(() => {
    f && m()
  })
  de(
    [e.target, e.contentEl],
    (g, h) => {
      let [y, S] = g,
        [p, A] = h
      p && !Array.isArray(p) && v.unobserve(p),
        y && !Array.isArray(y) && v.observe(y),
        A && v.unobserve(A),
        S && v.observe(S)
    },
    { immediate: !0 }
  ),
    _t(() => {
      v.disconnect()
    })
  function m() {
    if (((f = !1), requestAnimationFrame(() => (f = !0)), !e.target.value || !e.contentEl.value))
      return
    const g = Bv(e.target.value),
      h = fw(e.contentEl.value, e.isRtl.value),
      y = Yi(e.contentEl.value),
      S = 12
    y.length ||
      (y.push(document.documentElement),
      (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
        ((h.x -= parseFloat(
          document.documentElement.style.getPropertyValue('--v-body-scroll-x') || 0
        )),
        (h.y -= parseFloat(
          document.documentElement.style.getPropertyValue('--v-body-scroll-y') || 0
        ))))
    const p = y.reduce(
      (E, I) => {
        const D = I.getBoundingClientRect(),
          L = new da({
            x: I === document.documentElement ? 0 : D.x,
            y: I === document.documentElement ? 0 : D.y,
            width: I.clientWidth,
            height: I.clientHeight
          })
        return E
          ? new da({
              x: Math.max(E.left, L.left),
              y: Math.max(E.top, L.top),
              width: Math.min(E.right, L.right) - Math.max(E.left, L.left),
              height: Math.min(E.bottom, L.bottom) - Math.max(E.top, L.top)
            })
          : L
      },
      void 0
    )
    ;(p.x += S), (p.y += S), (p.width -= S * 2), (p.height -= S * 2)
    let A = { anchor: l.value, origin: i.value }
    function T(E) {
      const I = new da(h),
        D = _d(E.anchor, g),
        L = _d(E.origin, I)
      let { x: W, y: Y } = sw(D, L)
      switch (E.anchor.side) {
        case 'top':
          Y -= c.value[0]
          break
        case 'bottom':
          Y += c.value[0]
          break
        case 'left':
          W -= c.value[0]
          break
        case 'right':
          W += c.value[0]
          break
      }
      switch (E.anchor.align) {
        case 'top':
          Y -= c.value[1]
          break
        case 'bottom':
          Y += c.value[1]
          break
        case 'left':
          W -= c.value[1]
          break
        case 'right':
          W += c.value[1]
          break
      }
      return (
        (I.x += W),
        (I.y += Y),
        (I.width = Math.min(I.width, s.value)),
        (I.height = Math.min(I.height, u.value)),
        { overflows: Kc(I, p), x: W, y: Y }
      )
    }
    let w = 0,
      x = 0
    const V = { x: 0, y: 0 },
      _ = { x: !1, y: !1 }
    let k = -1
    for (; !(k++ > 10); ) {
      const { x: E, y: I, overflows: D } = T(A)
      ;(w += E), (x += I), (h.x += E), (h.y += I)
      {
        const L = Yc(A.anchor),
          W = D.x.before || D.x.after,
          Y = D.y.before || D.y.after
        let te = !1
        if (
          (['x', 'y'].forEach((F) => {
            if ((F === 'x' && W && !_.x) || (F === 'y' && Y && !_.y)) {
              const q = { anchor: { ...A.anchor }, origin: { ...A.origin } },
                O = F === 'x' ? (L === 'y' ? lr : ar) : L === 'y' ? ar : lr
              ;(q.anchor = O(q.anchor)), (q.origin = O(q.origin))
              const { overflows: z } = T(q)
              ;((z[F].before <= D[F].before && z[F].after <= D[F].after) ||
                z[F].before + z[F].after < (D[F].before + D[F].after) / 2) &&
                ((A = q), (te = _[F] = !0))
            }
          }),
          te)
        )
          continue
      }
      D.x.before && ((w += D.x.before), (h.x += D.x.before)),
        D.x.after && ((w -= D.x.after), (h.x -= D.x.after)),
        D.y.before && ((x += D.y.before), (h.y += D.y.before)),
        D.y.after && ((x -= D.y.after), (h.y -= D.y.after))
      {
        const L = Kc(h, p)
        ;(V.x = p.width - L.x.before - L.x.after),
          (V.y = p.height - L.y.before - L.y.after),
          (w += L.x.before),
          (h.x += L.x.before),
          (x += L.y.before),
          (h.y += L.y.before)
      }
      break
    }
    const P = Yc(A.anchor)
    return (
      Object.assign(n.value, {
        '--v-overlay-anchor-origin': `${A.anchor.side} ${A.anchor.align}`,
        transformOrigin: `${A.origin.side} ${A.origin.align}`,
        top: fe(ur(x)),
        left: e.isRtl.value ? void 0 : fe(ur(w)),
        right: e.isRtl.value ? fe(ur(-w)) : void 0,
        minWidth: fe(P === 'y' ? Math.min(o.value, g.width) : o.value),
        maxWidth: fe(Vd(et(V.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
        maxHeight: fe(Vd(et(V.y, r.value === 1 / 0 ? 0 : r.value, u.value)))
      }),
      { available: V, contentBox: h }
    )
  }
  return (
    de(
      () => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight],
      () => m()
    ),
    Te(() => {
      const g = m()
      if (!g) return
      const { available: h, contentBox: y } = g
      y.height > h.y &&
        requestAnimationFrame(() => {
          m(),
            requestAnimationFrame(() => {
              m()
            })
        })
    }),
    { updateLocation: m }
  )
}
function ur(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio
}
function Vd(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio
}
let Xr = !0
const Xi = []
function mw(e) {
  !Xr || Xi.length ? (Xi.push(e), Zr()) : ((Xr = !1), e(), Zr())
}
let Pd = -1
function Zr() {
  cancelAnimationFrame(Pd),
    (Pd = requestAnimationFrame(() => {
      const e = Xi.shift()
      e && e(), Xi.length ? Zr() : (Xr = !0)
    }))
}
const Oi = { none: null, close: yw, block: bw, reposition: Sw },
  hw = $(
    {
      scrollStrategy: {
        type: [String, Function],
        default: 'block',
        validator: (e) => typeof e == 'function' || e in Oi
      }
    },
    'VOverlay-scroll-strategies'
  )
function gw(e, t) {
  if (!Le) return
  let n
  Ze(async () => {
    n == null || n.stop(),
      t.isActive.value &&
        e.scrollStrategy &&
        ((n = ao()),
        await new Promise((a) => setTimeout(a)),
        n.active &&
          n.run(() => {
            var a
            typeof e.scrollStrategy == 'function'
              ? e.scrollStrategy(t, e, n)
              : (a = Oi[e.scrollStrategy]) == null || a.call(Oi, t, e, n)
          }))
  }),
    _t(() => {
      n == null || n.stop()
    })
}
function yw(e) {
  function t(n) {
    e.isActive.value = !1
  }
  eh(e.targetEl.value ?? e.contentEl.value, t)
}
function bw(e, t) {
  var o
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent,
    a = [
      ...new Set([
        ...Yi(e.targetEl.value, t.contained ? n : void 0),
        ...Yi(e.contentEl.value, t.contained ? n : void 0)
      ])
    ].filter((r) => !r.classList.contains('v-overlay-scroll-blocked')),
    l = window.innerWidth - document.documentElement.offsetWidth,
    i = ((r) => nu(r) && r)(n || document.documentElement)
  i && e.root.value.classList.add('v-overlay--scroll-blocked'),
    a.forEach((r, s) => {
      r.style.setProperty('--v-body-scroll-x', fe(-r.scrollLeft)),
        r.style.setProperty('--v-body-scroll-y', fe(-r.scrollTop)),
        r !== document.documentElement && r.style.setProperty('--v-scrollbar-offset', fe(l)),
        r.classList.add('v-overlay-scroll-blocked')
    }),
    _t(() => {
      a.forEach((r, s) => {
        const u = parseFloat(r.style.getPropertyValue('--v-body-scroll-x')),
          c = parseFloat(r.style.getPropertyValue('--v-body-scroll-y')),
          f = r.style.scrollBehavior
        ;(r.style.scrollBehavior = 'auto'),
          r.style.removeProperty('--v-body-scroll-x'),
          r.style.removeProperty('--v-body-scroll-y'),
          r.style.removeProperty('--v-scrollbar-offset'),
          r.classList.remove('v-overlay-scroll-blocked'),
          (r.scrollLeft = -u),
          (r.scrollTop = -c),
          (r.style.scrollBehavior = f)
      }),
        i && e.root.value.classList.remove('v-overlay--scroll-blocked')
    })
}
function Sw(e, t, n) {
  let a = !1,
    l = -1,
    i = -1
  function o(r) {
    mw(() => {
      var c, f
      const s = performance.now()
      ;(f = (c = e.updateLocation).value) == null || f.call(c, r),
        (a = (performance.now() - s) / (1e3 / 60) > 2)
    })
  }
  ;(i = (typeof requestIdleCallback > 'u' ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      eh(e.targetEl.value ?? e.contentEl.value, (r) => {
        a
          ? (cancelAnimationFrame(l),
            (l = requestAnimationFrame(() => {
              l = requestAnimationFrame(() => {
                o(r)
              })
            })))
          : o(r)
      })
    })
  })),
    _t(() => {
      typeof cancelIdleCallback < 'u' && cancelIdleCallback(i), cancelAnimationFrame(l)
    })
}
function eh(e, t) {
  const n = [document, ...Yi(e)]
  n.forEach((a) => {
    a.addEventListener('scroll', t, { passive: !0 })
  }),
    _t(() => {
      n.forEach((a) => {
        a.removeEventListener('scroll', t)
      })
    })
}
const Qr = Symbol.for('vuetify:v-menu'),
  yu = $({ closeDelay: [Number, String], openDelay: [Number, String] }, 'delay')
function bu(e, t) {
  let n = () => {}
  function a(o) {
    n == null || n()
    const r = Number(o ? e.openDelay : e.closeDelay)
    return new Promise((s) => {
      n = L0(r, () => {
        t == null || t(o), s(o)
      })
    })
  }
  function l() {
    return a(!0)
  }
  function i() {
    return a(!1)
  }
  return { clearDelay: n, runOpenDelay: l, runCloseDelay: i }
}
const pw = $(
  {
    target: [String, Object],
    activator: [String, Object],
    activatorProps: { type: Object, default: () => ({}) },
    openOnClick: { type: Boolean, default: void 0 },
    openOnHover: Boolean,
    openOnFocus: { type: Boolean, default: void 0 },
    closeOnContentClick: Boolean,
    ...yu()
  },
  'VOverlay-activator'
)
function kw(e, t) {
  let { isActive: n, isTop: a } = t
  const l = Qe('useActivator'),
    i = J()
  let o = !1,
    r = !1,
    s = !0
  const u = b(() => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)),
    c = b(() => e.openOnClick || (e.openOnClick == null && !e.openOnHover && !u.value)),
    { runOpenDelay: f, runCloseDelay: v } = bu(e, (V) => {
      V === ((e.openOnHover && o) || (u.value && r)) &&
        !(e.openOnHover && n.value && !a.value) &&
        (n.value !== V && (s = !0), (n.value = V))
    }),
    m = J(),
    g = {
      onClick: (V) => {
        V.stopPropagation(),
          (i.value = V.currentTarget || V.target),
          n.value || (m.value = [V.clientX, V.clientY]),
          (n.value = !n.value)
      },
      onMouseenter: (V) => {
        var _
        ;((_ = V.sourceCapabilities) != null && _.firesTouchEvents) ||
          ((o = !0), (i.value = V.currentTarget || V.target), f())
      },
      onMouseleave: (V) => {
        ;(o = !1), v()
      },
      onFocus: (V) => {
        Ya(V.target, ':focus-visible') !== !1 &&
          ((r = !0), V.stopPropagation(), (i.value = V.currentTarget || V.target), f())
      },
      onBlur: (V) => {
        ;(r = !1), V.stopPropagation(), v()
      }
    },
    h = b(() => {
      const V = {}
      return (
        c.value && (V.onClick = g.onClick),
        e.openOnHover && ((V.onMouseenter = g.onMouseenter), (V.onMouseleave = g.onMouseleave)),
        u.value && ((V.onFocus = g.onFocus), (V.onBlur = g.onBlur)),
        V
      )
    }),
    y = b(() => {
      const V = {}
      if (
        (e.openOnHover &&
          ((V.onMouseenter = () => {
            ;(o = !0), f()
          }),
          (V.onMouseleave = () => {
            ;(o = !1), v()
          })),
        u.value &&
          ((V.onFocusin = () => {
            ;(r = !0), f()
          }),
          (V.onFocusout = () => {
            ;(r = !1), v()
          })),
        e.closeOnContentClick)
      ) {
        const _ = Pe(Qr, null)
        V.onClick = () => {
          ;(n.value = !1), _ == null || _.closeParents()
        }
      }
      return V
    }),
    S = b(() => {
      const V = {}
      return (
        e.openOnHover &&
          ((V.onMouseenter = () => {
            s && ((o = !0), (s = !1), f())
          }),
          (V.onMouseleave = () => {
            ;(o = !1), v()
          })),
        V
      )
    })
  de(a, (V) => {
    V &&
      ((e.openOnHover && !o && (!u.value || !r)) || (u.value && !r && (!e.openOnHover || !o))) &&
      (n.value = !1)
  }),
    de(
      n,
      (V) => {
        V ||
          setTimeout(() => {
            m.value = void 0
          })
      },
      { flush: 'post' }
    )
  const p = J()
  Ze(() => {
    p.value &&
      Te(() => {
        i.value = Ua(p.value)
      })
  })
  const A = J(),
    T = b(() =>
      e.target === 'cursor' && m.value
        ? m.value
        : A.value
          ? Ua(A.value)
          : th(e.target, l) || i.value
    ),
    w = b(() => (Array.isArray(T.value) ? void 0 : T.value))
  let x
  return (
    de(
      () => !!e.activator,
      (V) => {
        V && Le
          ? ((x = ao()),
            x.run(() => {
              ww(e, l, { activatorEl: i, activatorEvents: h })
            }))
          : x && x.stop()
      },
      { flush: 'post', immediate: !0 }
    ),
    _t(() => {
      x == null || x.stop()
    }),
    {
      activatorEl: i,
      activatorRef: p,
      target: T,
      targetEl: w,
      targetRef: A,
      activatorEvents: h,
      contentEvents: y,
      scrimEvents: S
    }
  )
}
function ww(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n
  de(
    () => e.activator,
    (s, u) => {
      if (u && s !== u) {
        const c = r(u)
        c && o(c)
      }
      s && Te(() => i())
    },
    { immediate: !0 }
  ),
    de(
      () => e.activatorProps,
      () => {
        i()
      }
    ),
    _t(() => {
      o()
    })
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(),
      u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps
    s && H0(s, X(l.value, u))
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(),
      u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps
    s && z0(s, X(l.value, u))
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator
    const u = th(s, t)
    return (a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0), a.value
  }
}
function th(e, t) {
  var a, l
  if (!e) return
  let n
  if (e === 'parent') {
    let i =
      (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null
        ? void 0
        : l.parentNode
    for (; i != null && i.hasAttribute('data-no-activator'); ) i = i.parentNode
    n = i
  } else typeof e == 'string' ? (n = document.querySelector(e)) : '$el' in e ? (n = e.$el) : (n = e)
  return n
}
function nh() {
  if (!Le) return se(!1)
  const { ssr: e } = un()
  if (e) {
    const t = se(!1)
    return (
      St(() => {
        t.value = !0
      }),
      t
    )
  } else return se(!0)
}
const Su = $({ eager: Boolean }, 'lazy')
function pu(e, t) {
  const n = se(!1),
    a = b(() => n.value || e.eager || t.value)
  de(t, () => (n.value = !0))
  function l() {
    e.eager || (n.value = !1)
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l }
}
function sl() {
  const t = Qe('useScopeId').vnode.scopeId
  return { scopeId: t ? { [t]: '' } : void 0 }
}
const Id = Symbol.for('vuetify:stack'),
  ml = kt([])
function xw(e, t, n) {
  const a = Qe('useStack'),
    l = !n,
    i = Pe(Id, void 0),
    o = kt({ activeChildren: new Set() })
  Fe(Id, o)
  const r = se(+t.value)
  Dt(e, () => {
    var f
    const c = (f = ml.at(-1)) == null ? void 0 : f[1]
    ;(r.value = c ? c + 10 : +t.value),
      l && ml.push([a.uid, r.value]),
      i == null || i.activeChildren.add(a.uid),
      _t(() => {
        if (l) {
          const v = Ce(ml).findIndex((m) => m[0] === a.uid)
          ml.splice(v, 1)
        }
        i == null || i.activeChildren.delete(a.uid)
      })
  })
  const s = se(!0)
  l &&
    Ze(() => {
      var f
      const c = ((f = ml.at(-1)) == null ? void 0 : f[0]) === a.uid
      setTimeout(() => (s.value = c))
    })
  const u = b(() => !o.activeChildren.size)
  return { globalTop: tl(s), localTop: u, stackStyles: b(() => ({ zIndex: r.value })) }
}
function Cw(e) {
  return {
    teleportTarget: b(() => {
      const n = e.value
      if (n === !0 || !Le) return
      const a = n === !1 ? document.body : typeof n == 'string' ? document.querySelector(n) : n
      if (a == null) return
      let l = a.querySelector(':scope > .v-overlay-container')
      return (
        l ||
          ((l = document.createElement('div')),
          (l.className = 'v-overlay-container'),
          a.appendChild(l)),
        l
      )
    })
  }
}
function _w() {
  return !0
}
function ah(e, t, n) {
  if (!e || lh(e, n) === !1) return !1
  const a = Wv(t)
  if (typeof ShadowRoot < 'u' && a instanceof ShadowRoot && a.host === e.target) return !1
  const l = ((typeof n.value == 'object' && n.value.include) || (() => []))()
  return l.push(t), !l.some((i) => (i == null ? void 0 : i.contains(e.target)))
}
function lh(e, t) {
  return ((typeof t.value == 'object' && t.value.closeConditional) || _w)(e)
}
function Vw(e, t, n) {
  const a = typeof n.value == 'function' ? n.value : n.value.handler
  t._clickOutside.lastMousedownWasOutside &&
    ah(e, t, n) &&
    setTimeout(() => {
      lh(e, n) && a && a(e)
    }, 0)
}
function Ad(e, t) {
  const n = Wv(e)
  t(document), typeof ShadowRoot < 'u' && n instanceof ShadowRoot && t(n)
}
const ih = {
  mounted(e, t) {
    const n = (l) => Vw(l, e, t),
      a = (l) => {
        e._clickOutside.lastMousedownWasOutside = ah(l, e, t)
      }
    Ad(e, (l) => {
      l.addEventListener('click', n, !0), l.addEventListener('mousedown', a, !0)
    }),
      e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }),
      (e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a })
  },
  unmounted(e, t) {
    e._clickOutside &&
      (Ad(e, (n) => {
        var i
        if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid])) return
        const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid]
        n.removeEventListener('click', a, !0), n.removeEventListener('mousedown', l, !0)
      }),
      delete e._clickOutside[t.instance.$.uid])
  }
}
function Pw(e) {
  const { modelValue: t, color: n, ...a } = e
  return d(
    gn,
    { name: 'fade-transition', appear: !0 },
    {
      default: () => [
        e.modelValue &&
          d(
            'div',
            X(
              {
                class: ['v-overlay__scrim', e.color.backgroundColorClasses.value],
                style: e.color.backgroundColorStyles.value
              },
              a
            ),
            null
          )
      ]
    }
  )
}
const ci = $(
    {
      absolute: Boolean,
      attach: [Boolean, String, Object],
      closeOnBack: { type: Boolean, default: !0 },
      contained: Boolean,
      contentClass: null,
      contentProps: null,
      disabled: Boolean,
      opacity: [Number, String],
      noClickAnimation: Boolean,
      modelValue: { type: Boolean, default: null },
      persistent: Boolean,
      scrim: { type: [Boolean, String], default: !0 },
      zIndex: { type: [Number, String], default: 2e3 },
      ...pw(),
      ...ve(),
      ...ct(),
      ...Su(),
      ...uw(),
      ...hw(),
      ...Ee(),
      ...cn()
    },
    'VOverlay'
  ),
  yn = j()({
    name: 'VOverlay',
    directives: { ClickOutside: ih },
    inheritAttrs: !1,
    props: { _disableGlobalStack: Boolean, ...ci() },
    emits: {
      'click:outside': (e) => !0,
      'update:modelValue': (e) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0
    },
    setup(e, t) {
      let { slots: n, attrs: a, emit: l } = t
      const i = be(e, 'modelValue'),
        o = b({
          get: () => !!i.value,
          set: (ue) => {
            ;(ue && e.disabled) || (i.value = ue)
          }
        }),
        { teleportTarget: r } = Cw(b(() => e.attach || e.contained)),
        { themeClasses: s } = Re(e),
        { rtlClasses: u, isRtl: c } = ut(),
        { hasContent: f, onAfterLeave: v } = pu(e, o),
        m = Ne(b(() => (typeof e.scrim == 'string' ? e.scrim : null))),
        {
          globalTop: g,
          localTop: h,
          stackStyles: y
        } = xw(o, N(e, 'zIndex'), e._disableGlobalStack),
        {
          activatorEl: S,
          activatorRef: p,
          target: A,
          targetEl: T,
          targetRef: w,
          activatorEvents: x,
          contentEvents: V,
          scrimEvents: _
        } = kw(e, { isActive: o, isTop: h }),
        { dimensionStyles: k } = dt(e),
        P = nh(),
        { scopeId: E } = sl()
      de(
        () => e.disabled,
        (ue) => {
          ue && (o.value = !1)
        }
      )
      const I = J(),
        D = J(),
        L = J(),
        { contentStyles: W, updateLocation: Y } = cw(e, {
          isRtl: c,
          contentEl: L,
          target: A,
          isActive: o
        })
      gw(e, { root: I, contentEl: L, targetEl: T, isActive: o, updateLocation: Y })
      function te(ue) {
        l('click:outside', ue), e.persistent ? ee() : (o.value = !1)
      }
      function F(ue) {
        return o.value && g.value && (!e.scrim || ue.target === D.value)
      }
      Le &&
        de(
          o,
          (ue) => {
            ue ? window.addEventListener('keydown', q) : window.removeEventListener('keydown', q)
          },
          { immediate: !0 }
        ),
        pt(() => {
          Le && window.removeEventListener('keydown', q)
        })
      function q(ue) {
        var Q, R
        ue.key === 'Escape' &&
          g.value &&
          (e.persistent
            ? ee()
            : ((o.value = !1),
              (Q = L.value) != null &&
                Q.contains(document.activeElement) &&
                ((R = S.value) == null || R.focus())))
      }
      const O = ym()
      Dt(
        () => e.closeOnBack,
        () => {
          sk(O, (ue) => {
            g.value && o.value ? (ue(!1), e.persistent ? ee() : (o.value = !1)) : ue()
          })
        }
      )
      const z = J()
      de(
        () => o.value && (e.absolute || e.contained) && r.value == null,
        (ue) => {
          if (ue) {
            const Q = tu(I.value)
            Q && Q !== document.scrollingElement && (z.value = Q.scrollTop)
          }
        }
      )
      function ee() {
        e.noClickAnimation ||
          (L.value &&
            ra(
              L.value,
              [
                { transformOrigin: 'center' },
                { transform: 'scale(1.03)' },
                { transformOrigin: 'center' }
              ],
              { duration: 150, easing: Ll }
            ))
      }
      function he() {
        l('afterEnter')
      }
      function Se() {
        v(), l('afterLeave')
      }
      return (
        K(() => {
          var ue
          return d(me, null, [
            (ue = n.activator) == null
              ? void 0
              : ue.call(n, {
                  isActive: o.value,
                  targetRef: w,
                  props: X({ ref: p }, x.value, e.activatorProps)
                }),
            P.value &&
              f.value &&
              d(
                Tb,
                { disabled: !r.value, to: r.value },
                {
                  default: () => [
                    d(
                      'div',
                      X(
                        {
                          class: [
                            'v-overlay',
                            {
                              'v-overlay--absolute': e.absolute || e.contained,
                              'v-overlay--active': o.value,
                              'v-overlay--contained': e.contained
                            },
                            s.value,
                            u.value,
                            e.class
                          ],
                          style: [
                            y.value,
                            { '--v-overlay-opacity': e.opacity, top: fe(z.value) },
                            e.style
                          ],
                          ref: I
                        },
                        E,
                        a
                      ),
                      [
                        d(
                          Pw,
                          X({ color: m, modelValue: o.value && !!e.scrim, ref: D }, _.value),
                          null
                        ),
                        d(
                          Ct,
                          {
                            appear: !0,
                            persisted: !0,
                            transition: e.transition,
                            target: A.value,
                            onAfterEnter: he,
                            onAfterLeave: Se
                          },
                          {
                            default: () => {
                              var Q
                              return [
                                We(
                                  d(
                                    'div',
                                    X(
                                      {
                                        ref: L,
                                        class: ['v-overlay__content', e.contentClass],
                                        style: [k.value, W.value]
                                      },
                                      V.value,
                                      e.contentProps
                                    ),
                                    [(Q = n.default) == null ? void 0 : Q.call(n, { isActive: o })]
                                  ),
                                  [
                                    [Zt, o.value],
                                    [
                                      Ft('click-outside'),
                                      { handler: te, closeConditional: F, include: () => [S.value] }
                                    ]
                                  ]
                                )
                              ]
                            }
                          }
                        )
                      ]
                    )
                  ]
                }
              )
          ])
        }),
        {
          activatorEl: S,
          scrimEl: D,
          target: A,
          animateClick: ee,
          contentEl: L,
          globalTop: g,
          localTop: h,
          updateLocation: Y
        }
      )
    }
  }),
  cr = Symbol('Forwarded refs')
function dr(e, t) {
  let n = e
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t)
    if (a) return a
    n = Object.getPrototypeOf(n)
  }
}
function en(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a]
  return (
    (e[cr] = n),
    new Proxy(e, {
      get(l, i) {
        if (Reflect.has(l, i)) return Reflect.get(l, i)
        if (!(typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__'))) {
          for (const o of n)
            if (o.value && Reflect.has(o.value, i)) {
              const r = Reflect.get(o.value, i)
              return typeof r == 'function' ? r.bind(o.value) : r
            }
        }
      },
      has(l, i) {
        if (Reflect.has(l, i)) return !0
        if (typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__')) return !1
        for (const o of n) if (o.value && Reflect.has(o.value, i)) return !0
        return !1
      },
      set(l, i, o) {
        if (Reflect.has(l, i)) return Reflect.set(l, i, o)
        if (typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__')) return !1
        for (const r of n) if (r.value && Reflect.has(r.value, i)) return Reflect.set(r.value, i, o)
        return !1
      },
      getOwnPropertyDescriptor(l, i) {
        var r
        const o = Reflect.getOwnPropertyDescriptor(l, i)
        if (o) return o
        if (!(typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__'))) {
          for (const s of n) {
            if (!s.value) continue
            const u =
              dr(s.value, i) ??
              ('_' in s.value ? dr((r = s.value._) == null ? void 0 : r.setupState, i) : void 0)
            if (u) return u
          }
          for (const s of n) {
            const u = s.value && s.value[cr]
            if (!u) continue
            const c = u.slice()
            for (; c.length; ) {
              const f = c.shift(),
                v = dr(f.value, i)
              if (v) return v
              const m = f.value && f.value[cr]
              m && c.push(...m)
            }
          }
        }
      }
    })
  )
}
const oh = $(
    {
      id: String,
      ...it(
        ci({
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: 'connected',
          openDelay: 300,
          scrim: !1,
          scrollStrategy: 'reposition',
          transition: { component: So }
        }),
        ['absolute']
      )
    },
    'VMenu'
  ),
  Za = j()({
    name: 'VMenu',
    props: oh(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        { scopeId: l } = sl(),
        i = mt(),
        o = b(() => e.id || `v-menu-${i}`),
        r = J(),
        s = Pe(Qr, null),
        u = se(0)
      Fe(Qr, {
        register() {
          ++u.value
        },
        unregister() {
          --u.value
        },
        closeParents(h) {
          setTimeout(() => {
            !u.value &&
              (h == null || (h && !F0(h, r.value.contentEl))) &&
              ((a.value = !1), s == null || s.closeParents())
          }, 40)
        }
      })
      async function c(h) {
        var p, A, T
        const y = h.relatedTarget,
          S = h.target
        await Te(),
          a.value &&
            y !== S &&
            (p = r.value) != null &&
            p.contentEl &&
            (A = r.value) != null &&
            A.globalTop &&
            ![document, r.value.contentEl].includes(S) &&
            !r.value.contentEl.contains(S) &&
            ((T = Ol(r.value.contentEl)[0]) == null || T.focus())
      }
      de(a, (h) => {
        h
          ? (s == null || s.register(), document.addEventListener('focusin', c, { once: !0 }))
          : (s == null || s.unregister(), document.removeEventListener('focusin', c))
      })
      function f(h) {
        s == null || s.closeParents(h)
      }
      function v(h) {
        var y, S, p
        e.disabled ||
          (h.key === 'Tab' || (h.key === 'Enter' && !e.closeOnContentClick)
            ? (h.key === 'Enter' && h.preventDefault(),
              Av(
                Ol((y = r.value) == null ? void 0 : y.contentEl, !1),
                h.shiftKey ? 'prev' : 'next',
                (T) => T.tabIndex >= 0
              ) ||
                ((a.value = !1),
                (p = (S = r.value) == null ? void 0 : S.activatorEl) == null || p.focus()))
            : ['Enter', ' '].includes(h.key) &&
              e.closeOnContentClick &&
              ((a.value = !1), s == null || s.closeParents()))
      }
      function m(h) {
        var S
        if (e.disabled) return
        const y = (S = r.value) == null ? void 0 : S.contentEl
        y && a.value
          ? h.key === 'ArrowDown'
            ? (h.preventDefault(), Ga(y, 'next'))
            : h.key === 'ArrowUp' && (h.preventDefault(), Ga(y, 'prev'))
          : ['ArrowDown', 'ArrowUp'].includes(h.key) &&
            ((a.value = !0), h.preventDefault(), setTimeout(() => setTimeout(() => m(h))))
      }
      const g = b(() =>
        X(
          {
            'aria-haspopup': 'menu',
            'aria-expanded': String(a.value),
            'aria-owns': o.value,
            onKeydown: m
          },
          e.activatorProps
        )
      )
      return (
        K(() => {
          const h = yn.filterProps(e)
          return d(
            yn,
            X(
              { ref: r, id: o.value, class: ['v-menu', e.class], style: e.style },
              h,
              {
                modelValue: a.value,
                'onUpdate:modelValue': (y) => (a.value = y),
                absolute: !0,
                activatorProps: g.value,
                'onClick:outside': f,
                onKeydown: v
              },
              l
            ),
            {
              activator: n.activator,
              default: function () {
                for (var y = arguments.length, S = new Array(y), p = 0; p < y; p++)
                  S[p] = arguments[p]
                return d(
                  Ae,
                  { root: 'VMenu' },
                  {
                    default: () => {
                      var A
                      return [(A = n.default) == null ? void 0 : A.call(n, ...S)]
                    }
                  }
                )
              }
            }
          )
        }),
        en({ id: o, ΨopenChildren: u }, r)
      )
    }
  }),
  Iw = $(
    {
      active: Boolean,
      disabled: Boolean,
      max: [Number, String],
      value: { type: [Number, String], default: 0 },
      ...ve(),
      ...cn({ transition: { component: su } })
    },
    'VCounter'
  ),
  Io = j()({
    name: 'VCounter',
    functional: !0,
    props: Iw(),
    setup(e, t) {
      let { slots: n } = t
      const a = b(() => (e.max ? `${e.value} / ${e.max}` : String(e.value)))
      return (
        K(() =>
          d(
            Ct,
            { transition: e.transition },
            {
              default: () => [
                We(
                  d(
                    'div',
                    {
                      class: [
                        'v-counter',
                        {
                          'text-error':
                            e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
                        },
                        e.class
                      ],
                      style: e.style
                    },
                    [
                      n.default
                        ? n.default({ counter: a.value, max: e.max, value: e.value })
                        : a.value
                    ]
                  ),
                  [[Zt, e.active]]
                )
              ]
            }
          )
        ),
        {}
      )
    }
  }),
  Aw = $({ floating: Boolean, ...ve() }, 'VFieldLabel'),
  yl = j()({
    name: 'VFieldLabel',
    props: Aw(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() =>
          d(
            ol,
            {
              class: ['v-field-label', { 'v-field-label--floating': e.floating }, e.class],
              style: e.style,
              'aria-hidden': e.floating || void 0
            },
            n
          )
        ),
        {}
      )
    }
  }),
  Tw = ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain'],
  di = $(
    {
      appendInnerIcon: xe,
      bgColor: String,
      clearable: Boolean,
      clearIcon: { type: xe, default: '$clear' },
      active: Boolean,
      centerAffix: { type: Boolean, default: void 0 },
      color: String,
      baseColor: String,
      dirty: Boolean,
      disabled: { type: Boolean, default: null },
      error: Boolean,
      flat: Boolean,
      label: String,
      persistentClear: Boolean,
      prependInnerIcon: xe,
      reverse: Boolean,
      singleLine: Boolean,
      variant: { type: String, default: 'filled', validator: (e) => Tw.includes(e) },
      'onClick:clear': Tt(),
      'onClick:appendInner': Tt(),
      'onClick:prependInner': Tt(),
      ...ve(),
      ...xo(),
      ...Ue(),
      ...Ee()
    },
    'VField'
  ),
  ul = j()({
    name: 'VField',
    inheritAttrs: !1,
    props: { id: String, ...si(), ...di() },
    emits: { 'update:focused': (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const { themeClasses: i } = Re(e),
        { loaderClasses: o } = li(e),
        { focusClasses: r, isFocused: s, focus: u, blur: c } = Dn(e),
        { InputIcon: f } = Tm(e),
        { roundedClasses: v } = qe(e),
        { rtlClasses: m } = ut(),
        g = b(() => e.dirty || e.active),
        h = b(() => !e.singleLine && !!(e.label || l.label)),
        y = mt(),
        S = b(() => e.id || `input-${y}`),
        p = b(() => `${S.value}-messages`),
        A = J(),
        T = J(),
        w = J(),
        x = b(() => ['plain', 'underlined'].includes(e.variant)),
        { backgroundColorClasses: V, backgroundColorStyles: _ } = Ne(N(e, 'bgColor')),
        { textColorClasses: k, textColorStyles: P } = yt(
          b(() => (e.error || e.disabled ? void 0 : g.value && s.value ? e.color : e.baseColor))
        )
      de(
        g,
        (L) => {
          if (h.value) {
            const W = A.value.$el,
              Y = T.value.$el
            requestAnimationFrame(() => {
              const te = Zs(W),
                F = Y.getBoundingClientRect(),
                q = F.x - te.x,
                O = F.y - te.y - (te.height / 2 - F.height / 2),
                z = F.width / 0.75,
                ee = Math.abs(z - te.width) > 1 ? { maxWidth: fe(z) } : void 0,
                he = getComputedStyle(W),
                Se = getComputedStyle(Y),
                ue = parseFloat(he.transitionDuration) * 1e3 || 150,
                Q = parseFloat(Se.getPropertyValue('--v-field-label-scale')),
                R = Se.getPropertyValue('color')
              ;(W.style.visibility = 'visible'),
                (Y.style.visibility = 'hidden'),
                ra(
                  W,
                  { transform: `translate(${q}px, ${O}px) scale(${Q})`, color: R, ...ee },
                  { duration: ue, easing: Ll, direction: L ? 'normal' : 'reverse' }
                ).finished.then(() => {
                  W.style.removeProperty('visibility'), Y.style.removeProperty('visibility')
                })
            })
          }
        },
        { flush: 'post' }
      )
      const E = b(() => ({ isActive: g, isFocused: s, controlRef: w, blur: c, focus: u }))
      function I(L) {
        L.target !== document.activeElement && L.preventDefault()
      }
      function D(L) {
        var W
        ;(L.key !== 'Enter' && L.key !== ' ') ||
          (L.preventDefault(),
          L.stopPropagation(),
          (W = e['onClick:clear']) == null || W.call(e, new MouseEvent('click')))
      }
      return (
        K(() => {
          var q, O, z
          const L = e.variant === 'outlined',
            W = !!(l['prepend-inner'] || e.prependInnerIcon),
            Y = !!(e.clearable || l.clear),
            te = !!(l['append-inner'] || e.appendInnerIcon || Y),
            F = () =>
              l.label ? l.label({ ...E.value, label: e.label, props: { for: S.value } }) : e.label
          return d(
            'div',
            X(
              {
                class: [
                  'v-field',
                  {
                    'v-field--active': g.value,
                    'v-field--appended': te,
                    'v-field--center-affix': e.centerAffix ?? !x.value,
                    'v-field--disabled': e.disabled,
                    'v-field--dirty': e.dirty,
                    'v-field--error': e.error,
                    'v-field--flat': e.flat,
                    'v-field--has-background': !!e.bgColor,
                    'v-field--persistent-clear': e.persistentClear,
                    'v-field--prepended': W,
                    'v-field--reverse': e.reverse,
                    'v-field--single-line': e.singleLine,
                    'v-field--no-label': !F(),
                    [`v-field--variant-${e.variant}`]: !0
                  },
                  i.value,
                  V.value,
                  r.value,
                  o.value,
                  v.value,
                  m.value,
                  e.class
                ],
                style: [_.value, e.style],
                onClick: I
              },
              n
            ),
            [
              d('div', { class: 'v-field__overlay' }, null),
              d(
                ii,
                {
                  name: 'v-field',
                  active: !!e.loading,
                  color: e.error ? 'error' : typeof e.loading == 'string' ? e.loading : e.color
                },
                { default: l.loader }
              ),
              W &&
                d('div', { key: 'prepend', class: 'v-field__prepend-inner' }, [
                  e.prependInnerIcon && d(f, { key: 'prepend-icon', name: 'prependInner' }, null),
                  (q = l['prepend-inner']) == null ? void 0 : q.call(l, E.value)
                ]),
              d('div', { class: 'v-field__field', 'data-no-activator': '' }, [
                ['filled', 'solo', 'solo-inverted', 'solo-filled'].includes(e.variant) &&
                  h.value &&
                  d(
                    yl,
                    {
                      key: 'floating-label',
                      ref: T,
                      class: [k.value],
                      floating: !0,
                      for: S.value,
                      style: P.value
                    },
                    { default: () => [F()] }
                  ),
                d(yl, { ref: A, for: S.value }, { default: () => [F()] }),
                (O = l.default) == null
                  ? void 0
                  : O.call(l, {
                      ...E.value,
                      props: { id: S.value, class: 'v-field__input', 'aria-describedby': p.value },
                      focus: u,
                      blur: c
                    })
              ]),
              Y &&
                d(
                  uu,
                  { key: 'clear' },
                  {
                    default: () => [
                      We(
                        d(
                          'div',
                          {
                            class: 'v-field__clearable',
                            onMousedown: (ee) => {
                              ee.preventDefault(), ee.stopPropagation()
                            }
                          },
                          [
                            d(
                              Ae,
                              { defaults: { VIcon: { icon: e.clearIcon } } },
                              {
                                default: () => [
                                  l.clear
                                    ? l.clear({
                                        ...E.value,
                                        props: {
                                          onKeydown: D,
                                          onFocus: u,
                                          onBlur: c,
                                          onClick: e['onClick:clear']
                                        }
                                      })
                                    : d(
                                        f,
                                        { name: 'clear', onKeydown: D, onFocus: u, onBlur: c },
                                        null
                                      )
                                ]
                              }
                            )
                          ]
                        ),
                        [[Zt, e.dirty]]
                      )
                    ]
                  }
                ),
              te &&
                d('div', { key: 'append', class: 'v-field__append-inner' }, [
                  (z = l['append-inner']) == null ? void 0 : z.call(l, E.value),
                  e.appendInnerIcon && d(f, { key: 'append-icon', name: 'appendInner' }, null)
                ]),
              d('div', { class: ['v-field__outline', k.value], style: P.value }, [
                L &&
                  d(me, null, [
                    d('div', { class: 'v-field__outline__start' }, null),
                    h.value &&
                      d('div', { class: 'v-field__outline__notch' }, [
                        d(yl, { ref: T, floating: !0, for: S.value }, { default: () => [F()] })
                      ]),
                    d('div', { class: 'v-field__outline__end' }, null)
                  ]),
                x.value &&
                  h.value &&
                  d(yl, { ref: T, floating: !0, for: S.value }, { default: () => [F()] })
              ])
            ]
          )
        }),
        { controlRef: w }
      )
    }
  })
function ku(e) {
  const t = Object.keys(ul.props).filter((n) => !mo(n) && n !== 'class' && n !== 'style')
  return _v(e, t)
}
const Ew = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'],
  Ao = $(
    {
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: [Number, Function],
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      suffix: String,
      role: String,
      type: { type: String, default: 'text' },
      modelModifiers: Object,
      ...Mn(),
      ...di()
    },
    'VTextField'
  ),
  ma = j()({
    name: 'VTextField',
    directives: { Intersect: ai },
    inheritAttrs: !1,
    props: Ao(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const i = be(e, 'modelValue'),
        { isFocused: o, focus: r, blur: s } = Dn(e),
        u = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(i.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : (i.value ?? '').toString().length
        ),
        c = b(() => {
          if (n.maxlength) return n.maxlength
          if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
            return e.counter
        }),
        f = b(() => ['plain', 'underlined'].includes(e.variant))
      function v(x, V) {
        var _, k
        !e.autofocus ||
          !x ||
          (k = (_ = V[0].target) == null ? void 0 : _.focus) == null ||
          k.call(_)
      }
      const m = J(),
        g = J(),
        h = J(),
        y = b(() => Ew.includes(e.type) || e.persistentPlaceholder || o.value || e.active)
      function S() {
        var x
        h.value !== document.activeElement && ((x = h.value) == null || x.focus()), o.value || r()
      }
      function p(x) {
        a('mousedown:control', x), x.target !== h.value && (S(), x.preventDefault())
      }
      function A(x) {
        S(), a('click:control', x)
      }
      function T(x) {
        x.stopPropagation(),
          S(),
          Te(() => {
            ;(i.value = null), Xs(e['onClick:clear'], x)
          })
      }
      function w(x) {
        var _
        const V = x.target
        if (
          ((i.value = V.value),
          (_ = e.modelModifiers) != null &&
            _.trim &&
            ['text', 'search', 'password', 'tel', 'url'].includes(e.type))
        ) {
          const k = [V.selectionStart, V.selectionEnd]
          Te(() => {
            ;(V.selectionStart = k[0]), (V.selectionEnd = k[1])
          })
        }
      }
      return (
        K(() => {
          const x = !!(l.counter || (e.counter !== !1 && e.counter != null)),
            V = !!(x || l.details),
            [_, k] = Xn(n),
            { modelValue: P, ...E } = bt.filterProps(e),
            I = ku(e)
          return d(
            bt,
            X(
              {
                ref: m,
                modelValue: i.value,
                'onUpdate:modelValue': (D) => (i.value = D),
                class: [
                  'v-text-field',
                  {
                    'v-text-field--prefixed': e.prefix,
                    'v-text-field--suffixed': e.suffix,
                    'v-input--plain-underlined': f.value
                  },
                  e.class
                ],
                style: e.style
              },
              _,
              E,
              { centerAffix: !f.value, focused: o.value }
            ),
            {
              ...l,
              default: (D) => {
                let { id: L, isDisabled: W, isDirty: Y, isReadonly: te, isValid: F } = D
                return d(
                  ul,
                  X(
                    {
                      ref: g,
                      onMousedown: p,
                      onClick: A,
                      'onClick:clear': T,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner'],
                      role: e.role
                    },
                    I,
                    {
                      id: L.value,
                      active: y.value || Y.value,
                      dirty: Y.value || e.dirty,
                      disabled: W.value,
                      focused: o.value,
                      error: F.value === !1
                    }
                  ),
                  {
                    ...l,
                    default: (q) => {
                      let {
                        props: { class: O, ...z }
                      } = q
                      const ee = We(
                        d(
                          'input',
                          X(
                            {
                              ref: h,
                              value: i.value,
                              onInput: w,
                              autofocus: e.autofocus,
                              readonly: te.value,
                              disabled: W.value,
                              name: e.name,
                              placeholder: e.placeholder,
                              size: 1,
                              type: e.type,
                              onFocus: S,
                              onBlur: s
                            },
                            z,
                            k
                          ),
                          null
                        ),
                        [[Ft('intersect'), { handler: v }, null, { once: !0 }]]
                      )
                      return d(me, null, [
                        e.prefix &&
                          d('span', { class: 'v-text-field__prefix' }, [
                            d('span', { class: 'v-text-field__prefix__text' }, [e.prefix])
                          ]),
                        l.default
                          ? d('div', { class: O, 'data-no-activator': '' }, [l.default(), ee])
                          : Vn(ee, { class: O }),
                        e.suffix &&
                          d('span', { class: 'v-text-field__suffix' }, [
                            d('span', { class: 'v-text-field__suffix__text' }, [e.suffix])
                          ])
                      ])
                    }
                  }
                )
              },
              details: V
                ? (D) => {
                    var L
                    return d(me, null, [
                      (L = l.details) == null ? void 0 : L.call(l, D),
                      x &&
                        d(me, null, [
                          d('span', null, null),
                          d(
                            Io,
                            {
                              active: e.persistentCounter || o.value,
                              value: u.value,
                              max: c.value,
                              disabled: e.disabled
                            },
                            l.counter
                          )
                        ])
                    ])
                  }
                : void 0
            }
          )
        }),
        en({}, m, g, h)
      )
    }
  }),
  Bw = $({ renderless: Boolean, ...ve() }, 'VVirtualScrollItem'),
  rh = j()({
    name: 'VVirtualScrollItem',
    inheritAttrs: !1,
    props: Bw(),
    emits: { 'update:height': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const { resizeRef: i, contentRect: o } = on(void 0, 'border')
      de(
        () => {
          var r
          return (r = o.value) == null ? void 0 : r.height
        },
        (r) => {
          r != null && a('update:height', r)
        }
      ),
        K(() => {
          var r, s
          return e.renderless
            ? d(me, null, [(r = l.default) == null ? void 0 : r.call(l, { itemRef: i })])
            : d(
                'div',
                X({ ref: i, class: ['v-virtual-scroll__item', e.class], style: e.style }, n),
                [(s = l.default) == null ? void 0 : s.call(l)]
              )
        })
    }
  }),
  Dw = -1,
  Mw = 1,
  fr = 100,
  sh = $(
    { itemHeight: { type: [Number, String], default: null }, height: [Number, String] },
    'virtual'
  )
function uh(e, t) {
  const n = un(),
    a = se(0)
  Ze(() => {
    a.value = parseFloat(e.itemHeight || 0)
  })
  const l = se(0),
    i = se(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1),
    o = se(0),
    r = se(0),
    s = J(),
    u = J()
  let c = 0
  const { resizeRef: f, contentRect: v } = on()
  Ze(() => {
    f.value = s.value
  })
  const m = b(() => {
      var q
      return s.value === document.documentElement
        ? n.height.value
        : ((q = v.value) == null ? void 0 : q.height) || parseInt(e.height) || 0
    }),
    g = b(() => !!(s.value && u.value && m.value && a.value))
  let h = Array.from({ length: t.value.length }),
    y = Array.from({ length: t.value.length })
  const S = se(0)
  let p = -1
  function A(q) {
    return h[q] || a.value
  }
  const T = M0(() => {
      const q = performance.now()
      y[0] = 0
      const O = t.value.length
      for (let z = 1; z <= O - 1; z++) y[z] = (y[z - 1] || 0) + A(z - 1)
      S.value = Math.max(S.value, performance.now() - q)
    }, S),
    w = de(g, (q) => {
      q &&
        (w(),
        (c = u.value.offsetTop),
        T.immediate(),
        W(),
        ~p &&
          Te(() => {
            Le &&
              window.requestAnimationFrame(() => {
                te(p), (p = -1)
              })
          }))
    })
  _t(() => {
    T.clear()
  })
  function x(q, O) {
    const z = h[q],
      ee = a.value
    ;(a.value = ee ? Math.min(a.value, O) : O), (z !== O || ee !== a.value) && ((h[q] = O), T())
  }
  function V(q) {
    return (q = et(q, 0, t.value.length - 1)), y[q] || 0
  }
  function _(q) {
    return Rw(y, q)
  }
  let k = 0,
    P = 0,
    E = 0
  de(m, (q, O) => {
    O &&
      (W(),
      q < O &&
        requestAnimationFrame(() => {
          ;(P = 0), W()
        }))
  })
  function I() {
    if (!s.value || !u.value) return
    const q = s.value.scrollTop,
      O = performance.now()
    O - E > 500 ? ((P = Math.sign(q - k)), (c = u.value.offsetTop)) : (P = q - k),
      (k = q),
      (E = O),
      W()
  }
  function D() {
    !s.value || !u.value || ((P = 0), (E = 0), W())
  }
  let L = -1
  function W() {
    cancelAnimationFrame(L), (L = requestAnimationFrame(Y))
  }
  function Y() {
    if (!s.value || !m.value) return
    const q = k - c,
      O = Math.sign(P),
      z = Math.max(0, q - fr),
      ee = et(_(z), 0, t.value.length),
      he = q + m.value + fr,
      Se = et(_(he) + 1, ee + 1, t.value.length)
    if ((O !== Dw || ee < l.value) && (O !== Mw || Se > i.value)) {
      const ue = V(l.value) - V(ee),
        Q = V(Se) - V(i.value)
      Math.max(ue, Q) > fr
        ? ((l.value = ee), (i.value = Se))
        : (ee <= 0 && (l.value = ee), Se >= t.value.length && (i.value = Se))
    }
    ;(o.value = V(l.value)), (r.value = V(t.value.length) - V(i.value))
  }
  function te(q) {
    const O = V(q)
    !s.value || (q && !O) ? (p = q) : (s.value.scrollTop = O)
  }
  const F = b(() => t.value.slice(l.value, i.value).map((q, O) => ({ raw: q, index: O + l.value })))
  return (
    de(
      t,
      () => {
        ;(h = Array.from({ length: t.value.length })),
          (y = Array.from({ length: t.value.length })),
          T.immediate(),
          W()
      },
      { deep: !0 }
    ),
    {
      containerRef: s,
      markerRef: u,
      computedItems: F,
      paddingTop: o,
      paddingBottom: r,
      scrollToIndex: te,
      handleScroll: I,
      handleScrollend: D,
      handleItemResize: x
    }
  )
}
function Rw(e, t) {
  let n = e.length - 1,
    a = 0,
    l = 0,
    i = null,
    o = -1
  if (e[n] < t) return n
  for (; a <= n; )
    if (((l = (a + n) >> 1), (i = e[l]), i > t)) n = l - 1
    else if (i < t) (o = l), (a = l + 1)
    else return i === t ? l : a
  return o
}
const $w = $(
    { items: { type: Array, default: () => [] }, renderless: Boolean, ...sh(), ...ve(), ...ct() },
    'VVirtualScroll'
  ),
  To = j()({
    name: 'VVirtualScroll',
    props: $w(),
    setup(e, t) {
      let { slots: n } = t
      const a = Qe('VVirtualScroll'),
        { dimensionStyles: l } = dt(e),
        {
          containerRef: i,
          markerRef: o,
          handleScroll: r,
          handleScrollend: s,
          handleItemResize: u,
          scrollToIndex: c,
          paddingTop: f,
          paddingBottom: v,
          computedItems: m
        } = uh(e, N(e, 'items'))
      return (
        Dt(
          () => e.renderless,
          () => {
            function g() {
              var S, p
              const y = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1)
                ? 'addEventListener'
                : 'removeEventListener'
              i.value === document.documentElement
                ? (document[y]('scroll', r, { passive: !0 }), document[y]('scrollend', s))
                : ((S = i.value) == null || S[y]('scroll', r, { passive: !0 }),
                  (p = i.value) == null || p[y]('scrollend', s))
            }
            St(() => {
              ;(i.value = tu(a.vnode.el, !0)), g(!0)
            }),
              _t(g)
          }
        ),
        K(() => {
          const g = m.value.map((h) =>
            d(
              rh,
              { key: h.index, renderless: e.renderless, 'onUpdate:height': (y) => u(h.index, y) },
              {
                default: (y) => {
                  var S
                  return (S = n.default) == null
                    ? void 0
                    : S.call(n, { item: h.raw, index: h.index, ...y })
                }
              }
            )
          )
          return e.renderless
            ? d(me, null, [
                d(
                  'div',
                  { ref: o, class: 'v-virtual-scroll__spacer', style: { paddingTop: fe(f.value) } },
                  null
                ),
                g,
                d(
                  'div',
                  { class: 'v-virtual-scroll__spacer', style: { paddingBottom: fe(v.value) } },
                  null
                )
              ])
            : d(
                'div',
                {
                  ref: i,
                  class: ['v-virtual-scroll', e.class],
                  onScrollPassive: r,
                  onScrollend: s,
                  style: [l.value, e.style]
                },
                [
                  d(
                    'div',
                    {
                      ref: o,
                      class: 'v-virtual-scroll__container',
                      style: { paddingTop: fe(f.value), paddingBottom: fe(v.value) }
                    },
                    [g]
                  )
                ]
              )
        }),
        { scrollToIndex: c }
      )
    }
  })
function wu(e, t) {
  const n = se(!1)
  let a
  function l(r) {
    cancelAnimationFrame(a),
      (n.value = !0),
      (a = requestAnimationFrame(() => {
        a = requestAnimationFrame(() => {
          n.value = !1
        })
      }))
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => requestAnimationFrame(r)),
      await new Promise((r) => {
        if (n.value) {
          const s = de(n, () => {
            s(), r()
          })
        } else r()
      })
  }
  async function o(r) {
    var c, f
    if (
      (r.key === 'Tab' && ((c = t.value) == null || c.focus()),
      !['PageDown', 'PageUp', 'Home', 'End'].includes(r.key))
    )
      return
    const s = (f = e.value) == null ? void 0 : f.$el
    if (!s) return
    ;(r.key === 'Home' || r.key === 'End') &&
      s.scrollTo({ top: r.key === 'Home' ? 0 : s.scrollHeight, behavior: 'smooth' }),
      await i()
    const u = s.querySelectorAll(':scope > :not(.v-virtual-scroll__spacer)')
    if (r.key === 'PageDown' || r.key === 'Home') {
      const v = s.getBoundingClientRect().top
      for (const m of u)
        if (m.getBoundingClientRect().top >= v) {
          m.focus()
          break
        }
    } else {
      const v = s.getBoundingClientRect().bottom
      for (const m of [...u].reverse())
        if (m.getBoundingClientRect().bottom <= v) {
          m.focus()
          break
        }
    }
  }
  return { onListScroll: l, onListKeydown: o }
}
const xu = $(
    {
      chips: Boolean,
      closableChips: Boolean,
      closeText: { type: String, default: '$vuetify.close' },
      openText: { type: String, default: '$vuetify.open' },
      eager: Boolean,
      hideNoData: Boolean,
      hideSelected: Boolean,
      listProps: { type: Object },
      menu: Boolean,
      menuIcon: { type: xe, default: '$dropdown' },
      menuProps: { type: Object },
      multiple: Boolean,
      noDataText: { type: String, default: '$vuetify.noDataText' },
      openOnClear: Boolean,
      itemColor: String,
      ...Xm({ itemChildren: !1 })
    },
    'Select'
  ),
  Ow = $(
    {
      ...xu(),
      ...it(Ao({ modelValue: null, role: 'combobox' }), [
        'validationValue',
        'dirty',
        'appendInnerIcon'
      ]),
      ...cn({ transition: { component: So } })
    },
    'VSelect'
  ),
  Cu = j()({
    name: 'VSelect',
    props: Ow(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      'update:menu': (e) => !0
    },
    setup(e, t) {
      let { slots: n } = t
      const { t: a } = Je(),
        l = J(),
        i = J(),
        o = J(),
        r = be(e, 'menu'),
        s = b({
          get: () => r.value,
          set: (F) => {
            var q
            ;(r.value && !F && (q = i.value) != null && q.ΨopenChildren) || (r.value = F)
          }
        }),
        { items: u, transformIn: c, transformOut: f } = gu(e),
        v = be(
          e,
          'modelValue',
          [],
          (F) => c(F === null ? [null] : Xe(F)),
          (F) => {
            const q = f(F)
            return e.multiple ? q : q[0] ?? null
          }
        ),
        m = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(v.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : v.value.length
        ),
        g = Vo(),
        h = b(() => v.value.map((F) => F.value)),
        y = se(!1),
        S = b(() => (s.value ? e.closeText : e.openText))
      let p = '',
        A
      const T = b(() =>
          e.hideSelected ? u.value.filter((F) => !v.value.some((q) => q === F)) : u.value
        ),
        w = b(
          () =>
            (e.hideNoData && !T.value.length) ||
            e.readonly ||
            (g == null ? void 0 : g.isReadonly.value)
        ),
        x = b(() => {
          var F
          return {
            ...e.menuProps,
            activatorProps: {
              ...(((F = e.menuProps) == null ? void 0 : F.activatorProps) || {}),
              'aria-haspopup': 'listbox'
            }
          }
        }),
        V = J(),
        { onListScroll: _, onListKeydown: k } = wu(V, l)
      function P(F) {
        e.openOnClear && (s.value = !0)
      }
      function E() {
        w.value || (s.value = !s.value)
      }
      function I(F) {
        var he, Se
        if (!F.key || e.readonly || (g != null && g.isReadonly.value)) return
        ;['Enter', ' ', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(F.key) &&
          F.preventDefault(),
          ['Enter', 'ArrowDown', ' '].includes(F.key) && (s.value = !0),
          ['Escape', 'Tab'].includes(F.key) && (s.value = !1),
          F.key === 'Home'
            ? (he = V.value) == null || he.focus('first')
            : F.key === 'End' && ((Se = V.value) == null || Se.focus('last'))
        const q = 1e3
        function O(ue) {
          const Q = ue.key.length === 1,
            R = !ue.ctrlKey && !ue.metaKey && !ue.altKey
          return Q && R
        }
        if (e.multiple || !O(F)) return
        const z = performance.now()
        z - A > q && (p = ''), (p += F.key.toLowerCase()), (A = z)
        const ee = u.value.find((ue) => ue.title.toLowerCase().startsWith(p))
        if (ee !== void 0) {
          v.value = [ee]
          const ue = T.value.indexOf(ee)
          Le &&
            window.requestAnimationFrame(() => {
              var Q
              ue >= 0 && ((Q = o.value) == null || Q.scrollToIndex(ue))
            })
        }
      }
      function D(F) {
        let q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
        if (!F.props.disabled)
          if (e.multiple) {
            const O = v.value.findIndex((ee) => e.valueComparator(ee.value, F.value)),
              z = q ?? !~O
            if (~O) {
              const ee = z ? [...v.value, F] : [...v.value]
              ee.splice(O, 1), (v.value = ee)
            } else z && (v.value = [...v.value, F])
          } else {
            const O = q !== !1
            ;(v.value = O ? [F] : []),
              Te(() => {
                s.value = !1
              })
          }
      }
      function L(F) {
        var q
        ;((q = V.value) != null && q.$el.contains(F.relatedTarget)) || (s.value = !1)
      }
      function W() {
        var F
        y.value && ((F = l.value) == null || F.focus())
      }
      function Y(F) {
        y.value = !0
      }
      function te(F) {
        if (F == null) v.value = []
        else if (Ya(l.value, ':autofill') || Ya(l.value, ':-webkit-autofill')) {
          const q = u.value.find((O) => O.title === F)
          q && D(q)
        } else l.value && (l.value.value = '')
      }
      return (
        de(s, () => {
          if (!e.hideSelected && s.value && v.value.length) {
            const F = T.value.findIndex((q) =>
              v.value.some((O) => e.valueComparator(O.value, q.value))
            )
            Le &&
              window.requestAnimationFrame(() => {
                var q
                F >= 0 && ((q = o.value) == null || q.scrollToIndex(F))
              })
          }
        }),
        de(
          () => e.items,
          (F, q) => {
            s.value || (y.value && !q.length && F.length && (s.value = !0))
          }
        ),
        K(() => {
          const F = !!(e.chips || n.chip),
            q = !!(
              !e.hideNoData ||
              T.value.length ||
              n['prepend-item'] ||
              n['append-item'] ||
              n['no-data']
            ),
            O = v.value.length > 0,
            z = ma.filterProps(e),
            ee = O || (!y.value && e.label && !e.persistentPlaceholder) ? void 0 : e.placeholder
          return d(
            ma,
            X({ ref: l }, z, {
              modelValue: v.value.map((he) => he.props.value).join(', '),
              'onUpdate:modelValue': te,
              focused: y.value,
              'onUpdate:focused': (he) => (y.value = he),
              validationValue: v.externalValue,
              counterValue: m.value,
              dirty: O,
              class: [
                'v-select',
                {
                  'v-select--active-menu': s.value,
                  'v-select--chips': !!e.chips,
                  [`v-select--${e.multiple ? 'multiple' : 'single'}`]: !0,
                  'v-select--selected': v.value.length,
                  'v-select--selection-slot': !!n.selection
                },
                e.class
              ],
              style: e.style,
              inputmode: 'none',
              placeholder: ee,
              'onClick:clear': P,
              'onMousedown:control': E,
              onBlur: L,
              onKeydown: I,
              'aria-label': a(S.value),
              title: a(S.value)
            }),
            {
              ...n,
              default: () =>
                d(me, null, [
                  d(
                    Za,
                    X(
                      {
                        ref: i,
                        modelValue: s.value,
                        'onUpdate:modelValue': (he) => (s.value = he),
                        activator: 'parent',
                        contentClass: 'v-select__content',
                        disabled: w.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterLeave: W
                      },
                      x.value
                    ),
                    {
                      default: () => [
                        q &&
                          d(
                            Po,
                            X(
                              {
                                ref: V,
                                selected: h.value,
                                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                                onMousedown: (he) => he.preventDefault(),
                                onKeydown: k,
                                onFocusin: Y,
                                onScrollPassive: _,
                                tabindex: '-1',
                                'aria-live': 'polite',
                                color: e.itemColor ?? e.color
                              },
                              e.listProps
                            ),
                            {
                              default: () => {
                                var he, Se, ue
                                return [
                                  (he = n['prepend-item']) == null ? void 0 : he.call(n),
                                  !T.value.length &&
                                    !e.hideNoData &&
                                    (((Se = n['no-data']) == null ? void 0 : Se.call(n)) ??
                                      d(Tn, { title: a(e.noDataText) }, null)),
                                  d(
                                    To,
                                    { ref: o, renderless: !0, items: T.value },
                                    {
                                      default: (Q) => {
                                        var ge
                                        let { item: R, index: oe, itemRef: ne } = Q
                                        const U = X(R.props, {
                                          ref: ne,
                                          key: oe,
                                          onClick: () => D(R, null)
                                        })
                                        return (
                                          ((ge = n.item) == null
                                            ? void 0
                                            : ge.call(n, { item: R, index: oe, props: U })) ??
                                          d(Tn, X(U, { role: 'option' }), {
                                            prepend: (Z) => {
                                              let { isSelected: C } = Z
                                              return d(me, null, [
                                                e.multiple && !e.hideSelected
                                                  ? d(
                                                      An,
                                                      {
                                                        key: R.value,
                                                        modelValue: C,
                                                        ripple: !1,
                                                        tabindex: '-1'
                                                      },
                                                      null
                                                    )
                                                  : void 0,
                                                R.props.prependAvatar &&
                                                  d(Xt, { image: R.props.prependAvatar }, null),
                                                R.props.prependIcon &&
                                                  d(Me, { icon: R.props.prependIcon }, null)
                                              ])
                                            }
                                          })
                                        )
                                      }
                                    }
                                  ),
                                  (ue = n['append-item']) == null ? void 0 : ue.call(n)
                                ]
                              }
                            }
                          )
                      ]
                    }
                  ),
                  v.value.map((he, Se) => {
                    function ue(ne) {
                      ne.stopPropagation(), ne.preventDefault(), D(he, !1)
                    }
                    const Q = {
                        'onClick:close': ue,
                        onKeydown(ne) {
                          ;(ne.key !== 'Enter' && ne.key !== ' ') ||
                            (ne.preventDefault(), ne.stopPropagation(), ue(ne))
                        },
                        onMousedown(ne) {
                          ne.preventDefault(), ne.stopPropagation()
                        },
                        modelValue: !0,
                        'onUpdate:modelValue': void 0
                      },
                      R = F ? !!n.chip : !!n.selection,
                      oe = R
                        ? ho(
                            F
                              ? n.chip({ item: he, index: Se, props: Q })
                              : n.selection({ item: he, index: Se })
                          )
                        : void 0
                    if (!(R && !oe))
                      return d('div', { key: he.value, class: 'v-select__selection' }, [
                        F
                          ? n.chip
                            ? d(
                                Ae,
                                {
                                  key: 'chip-defaults',
                                  defaults: {
                                    VChip: {
                                      closable: e.closableChips,
                                      size: 'small',
                                      text: he.title
                                    }
                                  }
                                },
                                { default: () => [oe] }
                              )
                            : d(
                                rl,
                                X(
                                  {
                                    key: 'chip',
                                    closable: e.closableChips,
                                    size: 'small',
                                    text: he.title,
                                    disabled: he.props.disabled
                                  },
                                  Q
                                ),
                                null
                              )
                          : oe ??
                            d('span', { class: 'v-select__selection-text' }, [
                              he.title,
                              e.multiple &&
                                Se < v.value.length - 1 &&
                                d('span', { class: 'v-select__selection-comma' }, [qt(',')])
                            ])
                      ])
                  })
                ]),
              'append-inner': function () {
                var Q
                for (var he = arguments.length, Se = new Array(he), ue = 0; ue < he; ue++)
                  Se[ue] = arguments[ue]
                return d(me, null, [
                  (Q = n['append-inner']) == null ? void 0 : Q.call(n, ...Se),
                  e.menuIcon
                    ? d(Me, { class: 'v-select__menu-icon', icon: e.menuIcon }, null)
                    : void 0
                ])
              }
            }
          )
        }),
        en({ isFocused: y, menu: s, select: D }, l)
      )
    }
  }),
  Lw = (e, t, n) =>
    e == null || t == null
      ? -1
      : e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),
  fi = $(
    {
      customFilter: Function,
      customKeyFilter: Object,
      filterKeys: [Array, String],
      filterMode: { type: String, default: 'intersection' },
      noFilter: Boolean
    },
    'filter'
  )
function Fw(e, t, n) {
  var r
  const a = [],
    l = (n == null ? void 0 : n.default) ?? Lw,
    i = n != null && n.filterKeys ? Xe(n.filterKeys) : !1,
    o = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length
  if (!(e != null && e.length)) return a
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = Xe(e[s]),
      f = {},
      v = {}
    let m = -1
    if (t && !(n != null && n.noFilter)) {
      if (typeof u == 'object') {
        const y = i || Object.keys(c)
        for (const S of y) {
          const p = ot(c, S),
            A = (r = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : r[S]
          if (((m = A ? A(p, t, u) : l(p, t, u)), m !== -1 && m !== !1)) A ? (f[S] = m) : (v[S] = m)
          else if ((n == null ? void 0 : n.filterMode) === 'every') continue e
        }
      } else (m = l(u, t, u)), m !== -1 && m !== !1 && (v.title = m)
      const g = Object.keys(v).length,
        h = Object.keys(f).length
      if (
        (!g && !h) ||
        ((n == null ? void 0 : n.filterMode) === 'union' && h !== o && !g) ||
        ((n == null ? void 0 : n.filterMode) === 'intersection' && (h !== o || !g))
      )
        continue
    }
    a.push({ index: s, matches: { ...v, ...f } })
  }
  return a
}
function vi(e, t, n, a) {
  const l = J([]),
    i = J(new Map()),
    o = b(() => (a != null && a.transform ? at(t).map((s) => [s, a.transform(s)]) : at(t)))
  Ze(() => {
    const s = typeof n == 'function' ? n() : at(n),
      u = typeof s != 'string' && typeof s != 'number' ? '' : String(s),
      c = Fw(o.value, u, {
        customKeyFilter: { ...e.customKeyFilter, ...at(a == null ? void 0 : a.customKeyFilter) },
        default: e.customFilter,
        filterKeys: e.filterKeys,
        filterMode: e.filterMode,
        noFilter: e.noFilter
      }),
      f = at(t),
      v = [],
      m = new Map()
    c.forEach((g) => {
      let { index: h, matches: y } = g
      const S = f[h]
      v.push(S), m.set(S.value, y)
    }),
      (l.value = v),
      (i.value = m)
  })
  function r(s) {
    return i.value.get(s.value)
  }
  return { filteredItems: l, filteredMatches: i, getMatches: r }
}
function Nw(e, t, n) {
  if (t == null) return e
  if (Array.isArray(t)) throw new Error('Multiple matches is not implemented')
  return typeof t == 'number' && ~t
    ? d(me, null, [
        d('span', { class: 'v-autocomplete__unmask' }, [e.substr(0, t)]),
        d('span', { class: 'v-autocomplete__mask' }, [e.substr(t, n)]),
        d('span', { class: 'v-autocomplete__unmask' }, [e.substr(t + n)])
      ])
    : e
}
const Hw = $(
    {
      autoSelectFirst: { type: [Boolean, String] },
      clearOnSelect: Boolean,
      search: String,
      ...fi({ filterKeys: ['title'] }),
      ...xu(),
      ...it(Ao({ modelValue: null, role: 'combobox' }), [
        'validationValue',
        'dirty',
        'appendInnerIcon'
      ]),
      ...cn({ transition: !1 })
    },
    'VAutocomplete'
  ),
  zw = j()({
    name: 'VAutocomplete',
    props: Hw(),
    emits: {
      'update:focused': (e) => !0,
      'update:search': (e) => !0,
      'update:modelValue': (e) => !0,
      'update:menu': (e) => !0
    },
    setup(e, t) {
      let { slots: n } = t
      const { t: a } = Je(),
        l = J(),
        i = se(!1),
        o = se(!0),
        r = se(!1),
        s = J(),
        u = J(),
        c = be(e, 'menu'),
        f = b({
          get: () => c.value,
          set: (U) => {
            var ge
            ;(c.value && !U && (ge = s.value) != null && ge.ΨopenChildren) || (c.value = U)
          }
        }),
        v = se(-1),
        m = b(() => {
          var U
          return (U = l.value) == null ? void 0 : U.color
        }),
        g = b(() => (f.value ? e.closeText : e.openText)),
        { items: h, transformIn: y, transformOut: S } = gu(e),
        { textColorClasses: p, textColorStyles: A } = yt(m),
        T = be(e, 'search', ''),
        w = be(
          e,
          'modelValue',
          [],
          (U) => y(U === null ? [null] : Xe(U)),
          (U) => {
            const ge = S(U)
            return e.multiple ? ge : ge[0] ?? null
          }
        ),
        x = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(w.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : w.value.length
        ),
        V = Vo(),
        { filteredItems: _, getMatches: k } = vi(e, h, () => (o.value ? '' : T.value)),
        P = b(() =>
          e.hideSelected
            ? _.value.filter((U) => !w.value.some((ge) => ge.value === U.value))
            : _.value
        ),
        E = b(() => !!(e.chips || n.chip)),
        I = b(() => E.value || !!n.selection),
        D = b(() => w.value.map((U) => U.props.value)),
        L = b(() => {
          var ge
          return (
            (e.autoSelectFirst === !0 ||
              (e.autoSelectFirst === 'exact' &&
                T.value === ((ge = P.value[0]) == null ? void 0 : ge.title))) &&
            P.value.length > 0 &&
            !o.value &&
            !r.value
          )
        }),
        W = b(
          () =>
            (e.hideNoData && !P.value.length) ||
            e.readonly ||
            (V == null ? void 0 : V.isReadonly.value)
        ),
        Y = J(),
        { onListScroll: te, onListKeydown: F } = wu(Y, l)
      function q(U) {
        e.openOnClear && (f.value = !0), (T.value = '')
      }
      function O() {
        W.value || (f.value = !0)
      }
      function z(U) {
        W.value || (i.value && (U.preventDefault(), U.stopPropagation()), (f.value = !f.value))
      }
      function ee(U) {
        var C, B, M
        if (e.readonly || (V != null && V.isReadonly.value)) return
        const ge = l.value.selectionStart,
          Z = w.value.length
        if (
          ((v.value > -1 || ['Enter', 'ArrowDown', 'ArrowUp'].includes(U.key)) &&
            U.preventDefault(),
          ['Enter', 'ArrowDown'].includes(U.key) && (f.value = !0),
          ['Escape'].includes(U.key) && (f.value = !1),
          L.value && ['Enter', 'Tab'].includes(U.key) && ne(P.value[0]),
          U.key === 'ArrowDown' && L.value && ((C = Y.value) == null || C.focus('next')),
          ['Backspace', 'Delete'].includes(U.key))
        ) {
          if (!e.multiple && I.value && w.value.length > 0 && !T.value) return ne(w.value[0], !1)
          if (~v.value) {
            const H = v.value
            ne(w.value[v.value], !1), (v.value = H >= Z - 1 ? Z - 2 : H)
          } else U.key === 'Backspace' && !T.value && (v.value = Z - 1)
        }
        if (e.multiple) {
          if (U.key === 'ArrowLeft') {
            if (v.value < 0 && ge > 0) return
            const H = v.value > -1 ? v.value - 1 : Z - 1
            w.value[H]
              ? (v.value = H)
              : ((v.value = -1),
                l.value.setSelectionRange(
                  (B = T.value) == null ? void 0 : B.length,
                  (M = T.value) == null ? void 0 : M.length
                ))
          }
          if (U.key === 'ArrowRight') {
            if (v.value < 0) return
            const H = v.value + 1
            w.value[H] ? (v.value = H) : ((v.value = -1), l.value.setSelectionRange(0, 0))
          }
        }
      }
      function he(U) {
        if (Ya(l.value, ':autofill') || Ya(l.value, ':-webkit-autofill')) {
          const ge = h.value.find((Z) => Z.title === U.target.value)
          ge && ne(ge)
        }
      }
      function Se() {
        var U
        i.value && ((o.value = !0), (U = l.value) == null || U.focus())
      }
      function ue(U) {
        ;(i.value = !0),
          setTimeout(() => {
            r.value = !0
          })
      }
      function Q(U) {
        r.value = !1
      }
      function R(U) {
        ;(U == null || (U === '' && !e.multiple && !I.value)) && (w.value = [])
      }
      const oe = se(!1)
      function ne(U) {
        let ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
        if (!(!U || U.props.disabled))
          if (e.multiple) {
            const Z = w.value.findIndex((B) => e.valueComparator(B.value, U.value)),
              C = ge ?? !~Z
            if (~Z) {
              const B = C ? [...w.value, U] : [...w.value]
              B.splice(Z, 1), (w.value = B)
            } else C && (w.value = [...w.value, U])
            e.clearOnSelect && (T.value = '')
          } else {
            const Z = ge !== !1
            ;(w.value = Z ? [U] : []),
              (T.value = Z && !I.value ? U.title : ''),
              Te(() => {
                ;(f.value = !1), (o.value = !0)
              })
          }
      }
      return (
        de(i, (U, ge) => {
          var Z
          U !== ge &&
            (U
              ? ((oe.value = !0),
                (T.value =
                  e.multiple || I.value
                    ? ''
                    : String(((Z = w.value.at(-1)) == null ? void 0 : Z.props.title) ?? '')),
                (o.value = !0),
                Te(() => (oe.value = !1)))
              : (!e.multiple && T.value == null
                  ? (w.value = [])
                  : L.value &&
                    !r.value &&
                    !w.value.some((C) => {
                      let { value: B } = C
                      return B === P.value[0].value
                    }) &&
                    ne(P.value[0]),
                (f.value = !1),
                (T.value = ''),
                (v.value = -1)))
        }),
        de(T, (U) => {
          !i.value || oe.value || (U && (f.value = !0), (o.value = !U))
        }),
        de(f, () => {
          if (!e.hideSelected && f.value && w.value.length) {
            const U = P.value.findIndex((ge) => w.value.some((Z) => ge.value === Z.value))
            Le &&
              window.requestAnimationFrame(() => {
                var ge
                U >= 0 && ((ge = u.value) == null || ge.scrollToIndex(U))
              })
          }
        }),
        de(
          () => e.items,
          (U, ge) => {
            f.value || (i.value && !ge.length && U.length && (f.value = !0))
          }
        ),
        K(() => {
          const U = !!(
              !e.hideNoData ||
              P.value.length ||
              n['prepend-item'] ||
              n['append-item'] ||
              n['no-data']
            ),
            ge = w.value.length > 0,
            Z = ma.filterProps(e)
          return d(
            ma,
            X({ ref: l }, Z, {
              modelValue: T.value,
              'onUpdate:modelValue': [(C) => (T.value = C), R],
              focused: i.value,
              'onUpdate:focused': (C) => (i.value = C),
              validationValue: w.externalValue,
              counterValue: x.value,
              dirty: ge,
              onChange: he,
              class: [
                'v-autocomplete',
                `v-autocomplete--${e.multiple ? 'multiple' : 'single'}`,
                {
                  'v-autocomplete--active-menu': f.value,
                  'v-autocomplete--chips': !!e.chips,
                  'v-autocomplete--selection-slot': !!I.value,
                  'v-autocomplete--selecting-index': v.value > -1
                },
                e.class
              ],
              style: e.style,
              readonly: e.readonly,
              placeholder: ge ? void 0 : e.placeholder,
              'onClick:clear': q,
              'onMousedown:control': O,
              onKeydown: ee
            }),
            {
              ...n,
              default: () =>
                d(me, null, [
                  d(
                    Za,
                    X(
                      {
                        ref: s,
                        modelValue: f.value,
                        'onUpdate:modelValue': (C) => (f.value = C),
                        activator: 'parent',
                        contentClass: 'v-autocomplete__content',
                        disabled: W.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterLeave: Se
                      },
                      e.menuProps
                    ),
                    {
                      default: () => [
                        U &&
                          d(
                            Po,
                            X(
                              {
                                ref: Y,
                                selected: D.value,
                                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                                onMousedown: (C) => C.preventDefault(),
                                onKeydown: F,
                                onFocusin: ue,
                                onFocusout: Q,
                                onScrollPassive: te,
                                tabindex: '-1',
                                'aria-live': 'polite',
                                color: e.itemColor ?? e.color
                              },
                              e.listProps
                            ),
                            {
                              default: () => {
                                var C, B, M
                                return [
                                  (C = n['prepend-item']) == null ? void 0 : C.call(n),
                                  !P.value.length &&
                                    !e.hideNoData &&
                                    (((B = n['no-data']) == null ? void 0 : B.call(n)) ??
                                      d(Tn, { title: a(e.noDataText) }, null)),
                                  d(
                                    To,
                                    { ref: u, renderless: !0, items: P.value },
                                    {
                                      default: (H) => {
                                        var ce
                                        let { item: G, index: ie, itemRef: le } = H
                                        const re = X(G.props, {
                                          ref: le,
                                          key: ie,
                                          active: L.value && ie === 0 ? !0 : void 0,
                                          onClick: () => ne(G, null)
                                        })
                                        return (
                                          ((ce = n.item) == null
                                            ? void 0
                                            : ce.call(n, { item: G, index: ie, props: re })) ??
                                          d(Tn, X(re, { role: 'option' }), {
                                            prepend: (ae) => {
                                              let { isSelected: ye } = ae
                                              return d(me, null, [
                                                e.multiple && !e.hideSelected
                                                  ? d(
                                                      An,
                                                      {
                                                        key: G.value,
                                                        modelValue: ye,
                                                        ripple: !1,
                                                        tabindex: '-1'
                                                      },
                                                      null
                                                    )
                                                  : void 0,
                                                G.props.prependAvatar &&
                                                  d(Xt, { image: G.props.prependAvatar }, null),
                                                G.props.prependIcon &&
                                                  d(Me, { icon: G.props.prependIcon }, null)
                                              ])
                                            },
                                            title: () => {
                                              var ae, ye
                                              return o.value
                                                ? G.title
                                                : Nw(
                                                    G.title,
                                                    (ae = k(G)) == null ? void 0 : ae.title,
                                                    ((ye = T.value) == null ? void 0 : ye.length) ??
                                                      0
                                                  )
                                            }
                                          })
                                        )
                                      }
                                    }
                                  ),
                                  (M = n['append-item']) == null ? void 0 : M.call(n)
                                ]
                              }
                            }
                          )
                      ]
                    }
                  ),
                  w.value.map((C, B) => {
                    function M(le) {
                      le.stopPropagation(), le.preventDefault(), ne(C, !1)
                    }
                    const H = {
                        'onClick:close': M,
                        onKeydown(le) {
                          ;(le.key !== 'Enter' && le.key !== ' ') ||
                            (le.preventDefault(), le.stopPropagation(), M(le))
                        },
                        onMousedown(le) {
                          le.preventDefault(), le.stopPropagation()
                        },
                        modelValue: !0,
                        'onUpdate:modelValue': void 0
                      },
                      G = E.value ? !!n.chip : !!n.selection,
                      ie = G
                        ? ho(
                            E.value
                              ? n.chip({ item: C, index: B, props: H })
                              : n.selection({ item: C, index: B })
                          )
                        : void 0
                    if (!(G && !ie))
                      return d(
                        'div',
                        {
                          key: C.value,
                          class: [
                            'v-autocomplete__selection',
                            B === v.value && ['v-autocomplete__selection--selected', p.value]
                          ],
                          style: B === v.value ? A.value : {}
                        },
                        [
                          E.value
                            ? n.chip
                              ? d(
                                  Ae,
                                  {
                                    key: 'chip-defaults',
                                    defaults: {
                                      VChip: {
                                        closable: e.closableChips,
                                        size: 'small',
                                        text: C.title
                                      }
                                    }
                                  },
                                  { default: () => [ie] }
                                )
                              : d(
                                  rl,
                                  X(
                                    {
                                      key: 'chip',
                                      closable: e.closableChips,
                                      size: 'small',
                                      text: C.title,
                                      disabled: C.props.disabled
                                    },
                                    H
                                  ),
                                  null
                                )
                            : ie ??
                              d('span', { class: 'v-autocomplete__selection-text' }, [
                                C.title,
                                e.multiple &&
                                  B < w.value.length - 1 &&
                                  d('span', { class: 'v-autocomplete__selection-comma' }, [qt(',')])
                              ])
                        ]
                      )
                  })
                ]),
              'append-inner': function () {
                var H
                for (var C = arguments.length, B = new Array(C), M = 0; M < C; M++)
                  B[M] = arguments[M]
                return d(me, null, [
                  (H = n['append-inner']) == null ? void 0 : H.call(n, ...B),
                  e.menuIcon
                    ? d(
                        Me,
                        {
                          class: 'v-autocomplete__menu-icon',
                          icon: e.menuIcon,
                          onMousedown: z,
                          onClick: Tv,
                          'aria-label': a(g.value),
                          title: a(g.value)
                        },
                        null
                      )
                    : void 0
                ])
              }
            }
          )
        }),
        en({ isFocused: i, isPristine: o, menu: f, search: T, filteredItems: _, select: ne }, l)
      )
    }
  }),
  jw = $(
    {
      bordered: Boolean,
      color: String,
      content: [Number, String],
      dot: Boolean,
      floating: Boolean,
      icon: xe,
      inline: Boolean,
      label: { type: String, default: '$vuetify.badge' },
      max: [Number, String],
      modelValue: { type: Boolean, default: !0 },
      offsetX: [Number, String],
      offsetY: [Number, String],
      textColor: String,
      ...ve(),
      ...Qn({ location: 'top end' }),
      ...Ue(),
      ..._e(),
      ...Ee(),
      ...cn({ transition: 'scale-rotate-transition' })
    },
    'VBadge'
  ),
  Ww = j()({
    name: 'VBadge',
    inheritAttrs: !1,
    props: jw(),
    setup(e, t) {
      const { backgroundColorClasses: n, backgroundColorStyles: a } = Ne(N(e, 'color')),
        { roundedClasses: l } = qe(e),
        { t: i } = Je(),
        { textColorClasses: o, textColorStyles: r } = yt(N(e, 'textColor')),
        { themeClasses: s } = nm(),
        { locationStyles: u } = Ta(
          e,
          !0,
          (c) =>
            (e.floating ? (e.dot ? 2 : 4) : e.dot ? 8 : 12) +
            (['top', 'bottom'].includes(c)
              ? +(e.offsetY ?? 0)
              : ['left', 'right'].includes(c)
                ? +(e.offsetX ?? 0)
                : 0)
        )
      return (
        K(() => {
          const c = Number(e.content),
            f = !e.max || isNaN(c) ? e.content : c <= +e.max ? c : `${e.max}+`,
            [v, m] = Mr(t.attrs, ['aria-atomic', 'aria-label', 'aria-live', 'role', 'title'])
          return d(
            e.tag,
            X(
              {
                class: [
                  'v-badge',
                  {
                    'v-badge--bordered': e.bordered,
                    'v-badge--dot': e.dot,
                    'v-badge--floating': e.floating,
                    'v-badge--inline': e.inline
                  },
                  e.class
                ]
              },
              m,
              { style: e.style }
            ),
            {
              default: () => {
                var g, h
                return [
                  d('div', { class: 'v-badge__wrapper' }, [
                    (h = (g = t.slots).default) == null ? void 0 : h.call(g),
                    d(
                      Ct,
                      { transition: e.transition },
                      {
                        default: () => {
                          var y, S
                          return [
                            We(
                              d(
                                'span',
                                X(
                                  {
                                    class: ['v-badge__badge', s.value, n.value, l.value, o.value],
                                    style: [a.value, r.value, e.inline ? {} : u.value],
                                    'aria-atomic': 'true',
                                    'aria-label': i(e.label, c),
                                    'aria-live': 'polite',
                                    role: 'status'
                                  },
                                  v
                                ),
                                [
                                  e.dot
                                    ? void 0
                                    : t.slots.badge
                                      ? (S = (y = t.slots).badge) == null
                                        ? void 0
                                        : S.call(y)
                                      : e.icon
                                        ? d(Me, { icon: e.icon }, null)
                                        : f
                                ]
                              ),
                              [[Zt, e.modelValue]]
                            )
                          ]
                        }
                      }
                    )
                  ])
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  Uw = $({ color: String, density: String, ...ve() }, 'VBannerActions'),
  ch = j()({
    name: 'VBannerActions',
    props: Uw(),
    setup(e, t) {
      let { slots: n } = t
      return (
        Ke({ VBtn: { color: e.color, density: e.density, slim: !0, variant: 'text' } }),
        K(() => {
          var a
          return d('div', { class: ['v-banner-actions', e.class], style: e.style }, [
            (a = n.default) == null ? void 0 : a.call(n)
          ])
        }),
        {}
      )
    }
  }),
  dh = pn('v-banner-text'),
  Gw = $(
    {
      avatar: String,
      bgColor: String,
      color: String,
      icon: xe,
      lines: String,
      stacked: Boolean,
      sticky: Boolean,
      text: String,
      ...zt(),
      ...ve(),
      ...ft(),
      ...ct(),
      ...nl(),
      ...rt(),
      ...Qn(),
      ...ll(),
      ...Ue(),
      ..._e(),
      ...Ee()
    },
    'VBanner'
  ),
  Yw = j()({
    name: 'VBanner',
    props: Gw(),
    setup(e, t) {
      let { slots: n } = t
      const { backgroundColorClasses: a, backgroundColorStyles: l } = Ne(e, 'bgColor'),
        { borderClasses: i } = Qt(e),
        { densityClasses: o } = Vt(e),
        { displayClasses: r, mobile: s } = un(e),
        { dimensionStyles: u } = dt(e),
        { elevationClasses: c } = ht(e),
        { locationStyles: f } = Ta(e),
        { positionClasses: v } = il(e),
        { roundedClasses: m } = qe(e),
        { themeClasses: g } = Re(e),
        h = N(e, 'color'),
        y = N(e, 'density')
      Ke({ VBannerActions: { color: h, density: y } }),
        K(() => {
          const S = !!(e.text || n.text),
            p = !!(e.avatar || e.icon),
            A = !!(p || n.prepend)
          return d(
            e.tag,
            {
              class: [
                'v-banner',
                {
                  'v-banner--stacked': e.stacked || s.value,
                  'v-banner--sticky': e.sticky,
                  [`v-banner--${e.lines}-line`]: !!e.lines
                },
                g.value,
                a.value,
                i.value,
                o.value,
                r.value,
                c.value,
                v.value,
                m.value,
                e.class
              ],
              style: [l.value, u.value, f.value, e.style],
              role: 'banner'
            },
            {
              default: () => {
                var T
                return [
                  A &&
                    d('div', { key: 'prepend', class: 'v-banner__prepend' }, [
                      n.prepend
                        ? d(
                            Ae,
                            {
                              key: 'prepend-defaults',
                              disabled: !p,
                              defaults: {
                                VAvatar: {
                                  color: h.value,
                                  density: y.value,
                                  icon: e.icon,
                                  image: e.avatar
                                }
                              }
                            },
                            n.prepend
                          )
                        : d(
                            Xt,
                            {
                              key: 'prepend-avatar',
                              color: h.value,
                              density: y.value,
                              icon: e.icon,
                              image: e.avatar
                            },
                            null
                          )
                    ]),
                  d('div', { class: 'v-banner__content' }, [
                    S &&
                      d(
                        dh,
                        { key: 'text' },
                        {
                          default: () => {
                            var w
                            return [((w = n.text) == null ? void 0 : w.call(n)) ?? e.text]
                          }
                        }
                      ),
                    (T = n.default) == null ? void 0 : T.call(n)
                  ]),
                  n.actions && d(ch, { key: 'actions' }, n.actions)
                ]
              }
            }
          )
        })
    }
  }),
  Kw = $(
    {
      baseColor: String,
      bgColor: String,
      color: String,
      grow: Boolean,
      mode: { type: String, validator: (e) => !e || ['horizontal', 'shift'].includes(e) },
      height: { type: [Number, String], default: 56 },
      active: { type: Boolean, default: !0 },
      ...zt(),
      ...ve(),
      ...ft(),
      ...rt(),
      ...Ue(),
      ...wa({ name: 'bottom-navigation' }),
      ..._e({ tag: 'header' }),
      ...Pa({ selectedClass: 'v-btn--selected' }),
      ...Ee()
    },
    'VBottomNavigation'
  ),
  qw = j()({
    name: 'VBottomNavigation',
    props: Kw(),
    emits: { 'update:active': (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = nm(),
        { borderClasses: l } = Qt(e),
        { backgroundColorClasses: i, backgroundColorStyles: o } = Ne(N(e, 'bgColor')),
        { densityClasses: r } = Vt(e),
        { elevationClasses: s } = ht(e),
        { roundedClasses: u } = qe(e),
        { ssrBootStyles: c } = Ca(),
        f = b(
          () =>
            Number(e.height) -
            (e.density === 'comfortable' ? 8 : 0) -
            (e.density === 'compact' ? 16 : 0)
        ),
        v = be(e, 'active', e.active),
        { layoutItemStyles: m, layoutIsReady: g } = xa({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: b(() => 'bottom'),
          layoutSize: b(() => (v.value ? f.value : 0)),
          elementSize: f,
          active: v,
          absolute: N(e, 'absolute')
        })
      return (
        Zn(e, du),
        Ke(
          {
            VBtn: {
              baseColor: N(e, 'baseColor'),
              color: N(e, 'color'),
              density: N(e, 'density'),
              stacked: b(() => e.mode !== 'horizontal'),
              variant: 'text'
            }
          },
          { scoped: !0 }
        ),
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-bottom-navigation',
                {
                  'v-bottom-navigation--active': v.value,
                  'v-bottom-navigation--grow': e.grow,
                  'v-bottom-navigation--shift': e.mode === 'shift'
                },
                a.value,
                i.value,
                l.value,
                r.value,
                s.value,
                u.value,
                e.class
              ],
              style: [o.value, m.value, { height: fe(f.value) }, c.value, e.style]
            },
            {
              default: () => [
                n.default && d('div', { class: 'v-bottom-navigation__content' }, [n.default()])
              ]
            }
          )
        ),
        g
      )
    }
  }),
  fh = $(
    {
      fullscreen: Boolean,
      retainFocus: { type: Boolean, default: !0 },
      scrollable: Boolean,
      ...ci({
        origin: 'center center',
        scrollStrategy: 'block',
        transition: { component: So },
        zIndex: 2400
      })
    },
    'VDialog'
  ),
  Jr = j()({
    name: 'VDialog',
    props: fh(),
    emits: { 'update:modelValue': (e) => !0, afterLeave: () => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = be(e, 'modelValue'),
        { scopeId: i } = sl(),
        o = J()
      function r(c) {
        var m, g
        const f = c.relatedTarget,
          v = c.target
        if (
          f !== v &&
          (m = o.value) != null &&
          m.contentEl &&
          (g = o.value) != null &&
          g.globalTop &&
          ![document, o.value.contentEl].includes(v) &&
          !o.value.contentEl.contains(v)
        ) {
          const h = Ol(o.value.contentEl)
          if (!h.length) return
          const y = h[0],
            S = h[h.length - 1]
          f === y ? S.focus() : y.focus()
        }
      }
      Le &&
        de(
          () => l.value && e.retainFocus,
          (c) => {
            c ? document.addEventListener('focusin', r) : document.removeEventListener('focusin', r)
          },
          { immediate: !0 }
        )
      function s() {
        var c
        ;(c = o.value) != null &&
          c.contentEl &&
          !o.value.contentEl.contains(document.activeElement) &&
          o.value.contentEl.focus({ preventScroll: !0 })
      }
      function u() {
        n('afterLeave')
      }
      return (
        de(l, async (c) => {
          var f
          c || (await Te(), (f = o.value.activatorEl) == null || f.focus({ preventScroll: !0 }))
        }),
        K(() => {
          const c = yn.filterProps(e),
            f = X(
              { 'aria-haspopup': 'dialog', 'aria-expanded': String(l.value) },
              e.activatorProps
            ),
            v = X({ tabindex: -1 }, e.contentProps)
          return d(
            yn,
            X(
              {
                ref: o,
                class: [
                  'v-dialog',
                  { 'v-dialog--fullscreen': e.fullscreen, 'v-dialog--scrollable': e.scrollable },
                  e.class
                ],
                style: e.style
              },
              c,
              {
                modelValue: l.value,
                'onUpdate:modelValue': (m) => (l.value = m),
                'aria-modal': 'true',
                activatorProps: f,
                contentProps: v,
                role: 'dialog',
                onAfterEnter: s,
                onAfterLeave: u
              },
              i
            ),
            {
              activator: a.activator,
              default: function () {
                for (var m = arguments.length, g = new Array(m), h = 0; h < m; h++)
                  g[h] = arguments[h]
                return d(
                  Ae,
                  { root: 'VDialog' },
                  {
                    default: () => {
                      var y
                      return [(y = a.default) == null ? void 0 : y.call(a, ...g)]
                    }
                  }
                )
              }
            }
          )
        }),
        en({}, o)
      )
    }
  }),
  Xw = $({ inset: Boolean, ...fh({ transition: 'bottom-sheet-transition' }) }, 'VBottomSheet'),
  Zw = j()({
    name: 'VBottomSheet',
    props: Xw(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue')
      return (
        K(() => {
          const l = Jr.filterProps(e)
          return d(
            Jr,
            X(l, {
              contentClass: ['v-bottom-sheet__content', e.contentClass],
              modelValue: a.value,
              'onUpdate:modelValue': (i) => (a.value = i),
              class: ['v-bottom-sheet', { 'v-bottom-sheet--inset': e.inset }, e.class],
              style: e.style
            }),
            n
          )
        }),
        {}
      )
    }
  }),
  Qw = $({ divider: [Number, String], ...ve() }, 'VBreadcrumbsDivider'),
  vh = j()({
    name: 'VBreadcrumbsDivider',
    props: Qw(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => {
          var a
          return d('li', { class: ['v-breadcrumbs-divider', e.class], style: e.style }, [
            ((a = n == null ? void 0 : n.default) == null ? void 0 : a.call(n)) ?? e.divider
          ])
        }),
        {}
      )
    }
  }),
  Jw = $(
    {
      active: Boolean,
      activeClass: String,
      activeColor: String,
      color: String,
      disabled: Boolean,
      title: String,
      ...ve(),
      ...ri(),
      ..._e({ tag: 'li' })
    },
    'VBreadcrumbsItem'
  ),
  mh = j()({
    name: 'VBreadcrumbsItem',
    props: Jw(),
    setup(e, t) {
      let { slots: n, attrs: a } = t
      const l = oi(e, a),
        i = b(() => {
          var u
          return e.active || ((u = l.isActive) == null ? void 0 : u.value)
        }),
        o = b(() => (i.value ? e.activeColor : e.color)),
        { textColorClasses: r, textColorStyles: s } = yt(o)
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-breadcrumbs-item',
                {
                  'v-breadcrumbs-item--active': i.value,
                  'v-breadcrumbs-item--disabled': e.disabled,
                  [`${e.activeClass}`]: i.value && e.activeClass
                },
                r.value,
                e.class
              ],
              style: [s.value, e.style],
              'aria-current': i.value ? 'page' : void 0
            },
            {
              default: () => {
                var u, c
                return [
                  l.isLink.value
                    ? d(
                        'a',
                        {
                          class: 'v-breadcrumbs-item--link',
                          href: l.href.value,
                          'aria-current': i.value ? 'page' : void 0,
                          onClick: l.navigate
                        },
                        [((c = n.default) == null ? void 0 : c.call(n)) ?? e.title]
                      )
                    : ((u = n.default) == null ? void 0 : u.call(n)) ?? e.title
                ]
              }
            }
          )
        ),
        {}
      )
    }
  }),
  ex = $(
    {
      activeClass: String,
      activeColor: String,
      bgColor: String,
      color: String,
      disabled: Boolean,
      divider: { type: String, default: '/' },
      icon: xe,
      items: { type: Array, default: () => [] },
      ...ve(),
      ...ft(),
      ...Ue(),
      ..._e({ tag: 'ul' })
    },
    'VBreadcrumbs'
  ),
  tx = j()({
    name: 'VBreadcrumbs',
    props: ex(),
    setup(e, t) {
      let { slots: n } = t
      const { backgroundColorClasses: a, backgroundColorStyles: l } = Ne(N(e, 'bgColor')),
        { densityClasses: i } = Vt(e),
        { roundedClasses: o } = qe(e)
      Ke({
        VBreadcrumbsDivider: { divider: N(e, 'divider') },
        VBreadcrumbsItem: {
          activeClass: N(e, 'activeClass'),
          activeColor: N(e, 'activeColor'),
          color: N(e, 'color'),
          disabled: N(e, 'disabled')
        }
      })
      const r = b(() =>
        e.items.map((s) =>
          typeof s == 'string' ? { item: { title: s }, raw: s } : { item: s, raw: s }
        )
      )
      return (
        K(() => {
          const s = !!(n.prepend || e.icon)
          return d(
            e.tag,
            {
              class: ['v-breadcrumbs', a.value, i.value, o.value, e.class],
              style: [l.value, e.style]
            },
            {
              default: () => {
                var u
                return [
                  s &&
                    d('li', { key: 'prepend', class: 'v-breadcrumbs__prepend' }, [
                      n.prepend
                        ? d(
                            Ae,
                            {
                              key: 'prepend-defaults',
                              disabled: !e.icon,
                              defaults: { VIcon: { icon: e.icon, start: !0 } }
                            },
                            n.prepend
                          )
                        : d(Me, { key: 'prepend-icon', start: !0, icon: e.icon }, null)
                    ]),
                  r.value.map((c, f, v) => {
                    var h
                    let { item: m, raw: g } = c
                    return d(me, null, [
                      ((h = n.item) == null ? void 0 : h.call(n, { item: m, index: f })) ??
                        d(
                          mh,
                          X(
                            { key: f, disabled: f >= v.length - 1 },
                            typeof m == 'string' ? { title: m } : m
                          ),
                          {
                            default: n.title
                              ? () => {
                                  var y
                                  return (y = n.title) == null
                                    ? void 0
                                    : y.call(n, { item: m, index: f })
                                }
                              : void 0
                          }
                        ),
                      f < v.length - 1 &&
                        d(vh, null, {
                          default: n.divider
                            ? () => {
                                var y
                                return (y = n.divider) == null
                                  ? void 0
                                  : y.call(n, { item: g, index: f })
                              }
                            : void 0
                        })
                    ])
                  }),
                  (u = n.default) == null ? void 0 : u.call(n)
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  hh = j()({
    name: 'VCardActions',
    props: ve(),
    setup(e, t) {
      let { slots: n } = t
      return (
        Ke({ VBtn: { slim: !0, variant: 'text' } }),
        K(() => {
          var a
          return d('div', { class: ['v-card-actions', e.class], style: e.style }, [
            (a = n.default) == null ? void 0 : a.call(n)
          ])
        }),
        {}
      )
    }
  }),
  nx = $({ opacity: [Number, String], ...ve(), ..._e() }, 'VCardSubtitle'),
  gh = j()({
    name: 'VCardSubtitle',
    props: nx(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-card-subtitle', e.class],
              style: [{ '--v-card-subtitle-opacity': e.opacity }, e.style]
            },
            n
          )
        ),
        {}
      )
    }
  }),
  yh = pn('v-card-title'),
  ax = $(
    {
      appendAvatar: String,
      appendIcon: xe,
      prependAvatar: String,
      prependIcon: xe,
      subtitle: [String, Number],
      title: [String, Number],
      ...ve(),
      ...ft()
    },
    'VCardItem'
  ),
  bh = j()({
    name: 'VCardItem',
    props: ax(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => {
          var u
          const a = !!(e.prependAvatar || e.prependIcon),
            l = !!(a || n.prepend),
            i = !!(e.appendAvatar || e.appendIcon),
            o = !!(i || n.append),
            r = !!(e.title != null || n.title),
            s = !!(e.subtitle != null || n.subtitle)
          return d('div', { class: ['v-card-item', e.class], style: e.style }, [
            l &&
              d('div', { key: 'prepend', class: 'v-card-item__prepend' }, [
                n.prepend
                  ? d(
                      Ae,
                      {
                        key: 'prepend-defaults',
                        disabled: !a,
                        defaults: {
                          VAvatar: { density: e.density, image: e.prependAvatar },
                          VIcon: { density: e.density, icon: e.prependIcon }
                        }
                      },
                      n.prepend
                    )
                  : d(me, null, [
                      e.prependAvatar &&
                        d(
                          Xt,
                          { key: 'prepend-avatar', density: e.density, image: e.prependAvatar },
                          null
                        ),
                      e.prependIcon &&
                        d(
                          Me,
                          { key: 'prepend-icon', density: e.density, icon: e.prependIcon },
                          null
                        )
                    ])
              ]),
            d('div', { class: 'v-card-item__content' }, [
              r &&
                d(
                  yh,
                  { key: 'title' },
                  {
                    default: () => {
                      var c
                      return [((c = n.title) == null ? void 0 : c.call(n)) ?? e.title]
                    }
                  }
                ),
              s &&
                d(
                  gh,
                  { key: 'subtitle' },
                  {
                    default: () => {
                      var c
                      return [((c = n.subtitle) == null ? void 0 : c.call(n)) ?? e.subtitle]
                    }
                  }
                ),
              (u = n.default) == null ? void 0 : u.call(n)
            ]),
            o &&
              d('div', { key: 'append', class: 'v-card-item__append' }, [
                n.append
                  ? d(
                      Ae,
                      {
                        key: 'append-defaults',
                        disabled: !i,
                        defaults: {
                          VAvatar: { density: e.density, image: e.appendAvatar },
                          VIcon: { density: e.density, icon: e.appendIcon }
                        }
                      },
                      n.append
                    )
                  : d(me, null, [
                      e.appendIcon &&
                        d(Me, { key: 'append-icon', density: e.density, icon: e.appendIcon }, null),
                      e.appendAvatar &&
                        d(
                          Xt,
                          { key: 'append-avatar', density: e.density, image: e.appendAvatar },
                          null
                        )
                    ])
              ])
          ])
        }),
        {}
      )
    }
  }),
  lx = $({ opacity: [Number, String], ...ve(), ..._e() }, 'VCardText'),
  Sh = j()({
    name: 'VCardText',
    props: lx(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-card-text', e.class],
              style: [{ '--v-card-text-opacity': e.opacity }, e.style]
            },
            n
          )
        ),
        {}
      )
    }
  }),
  ix = $(
    {
      appendAvatar: String,
      appendIcon: xe,
      disabled: Boolean,
      flat: Boolean,
      hover: Boolean,
      image: String,
      link: { type: Boolean, default: void 0 },
      prependAvatar: String,
      prependIcon: xe,
      ripple: { type: [Boolean, Object], default: !0 },
      subtitle: [String, Number],
      text: [String, Number],
      title: [String, Number],
      ...zt(),
      ...ve(),
      ...ft(),
      ...ct(),
      ...rt(),
      ...xo(),
      ...Qn(),
      ...ll(),
      ...Ue(),
      ...ri(),
      ..._e(),
      ...Ee(),
      ...Jt({ variant: 'elevated' })
    },
    'VCard'
  ),
  ox = j()({
    name: 'VCard',
    directives: { Ripple: Bn },
    props: ix(),
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { themeClasses: l } = Re(e),
        { borderClasses: i } = Qt(e),
        { colorClasses: o, colorStyles: r, variantClasses: s } = Va(e),
        { densityClasses: u } = Vt(e),
        { dimensionStyles: c } = dt(e),
        { elevationClasses: f } = ht(e),
        { loaderClasses: v } = li(e),
        { locationStyles: m } = Ta(e),
        { positionClasses: g } = il(e),
        { roundedClasses: h } = qe(e),
        y = oi(e, n),
        S = b(() => e.link !== !1 && y.isLink.value),
        p = b(() => !e.disabled && e.link !== !1 && (e.link || y.isClickable.value))
      return (
        K(() => {
          const A = S.value ? 'a' : e.tag,
            T = !!(a.title || e.title != null),
            w = !!(a.subtitle || e.subtitle != null),
            x = T || w,
            V = !!(a.append || e.appendAvatar || e.appendIcon),
            _ = !!(a.prepend || e.prependAvatar || e.prependIcon),
            k = !!(a.image || e.image),
            P = x || _ || V,
            E = !!(a.text || e.text != null)
          return We(
            d(
              A,
              {
                class: [
                  'v-card',
                  {
                    'v-card--disabled': e.disabled,
                    'v-card--flat': e.flat,
                    'v-card--hover': e.hover && !(e.disabled || e.flat),
                    'v-card--link': p.value
                  },
                  l.value,
                  i.value,
                  o.value,
                  u.value,
                  f.value,
                  v.value,
                  g.value,
                  h.value,
                  s.value,
                  e.class
                ],
                style: [r.value, c.value, m.value, e.style],
                href: y.href.value,
                onClick: p.value && y.navigate,
                tabindex: e.disabled ? -1 : void 0
              },
              {
                default: () => {
                  var I
                  return [
                    k &&
                      d('div', { key: 'image', class: 'v-card__image' }, [
                        a.image
                          ? d(
                              Ae,
                              {
                                key: 'image-defaults',
                                disabled: !e.image,
                                defaults: { VImg: { cover: !0, src: e.image } }
                              },
                              a.image
                            )
                          : d(In, { key: 'image-img', cover: !0, src: e.image }, null)
                      ]),
                    d(
                      ii,
                      {
                        name: 'v-card',
                        active: !!e.loading,
                        color: typeof e.loading == 'boolean' ? void 0 : e.loading
                      },
                      { default: a.loader }
                    ),
                    P &&
                      d(
                        bh,
                        {
                          key: 'item',
                          prependAvatar: e.prependAvatar,
                          prependIcon: e.prependIcon,
                          title: e.title,
                          subtitle: e.subtitle,
                          appendAvatar: e.appendAvatar,
                          appendIcon: e.appendIcon
                        },
                        {
                          default: a.item,
                          prepend: a.prepend,
                          title: a.title,
                          subtitle: a.subtitle,
                          append: a.append
                        }
                      ),
                    E &&
                      d(
                        Sh,
                        { key: 'text' },
                        {
                          default: () => {
                            var D
                            return [((D = a.text) == null ? void 0 : D.call(a)) ?? e.text]
                          }
                        }
                      ),
                    (I = a.default) == null ? void 0 : I.call(a),
                    a.actions && d(hh, null, { default: a.actions }),
                    _a(p.value, 'v-card')
                  ]
                }
              }
            ),
            [[Ft('ripple'), p.value && e.ripple]]
          )
        }),
        {}
      )
    }
  }),
  rx = (e) => {
    const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e,
      i = 0.5,
      o = 16
    ;(e.offsetX = n - t),
      (e.offsetY = l - a),
      Math.abs(e.offsetY) < i * Math.abs(e.offsetX) &&
        (e.left && n < t - o && e.left(e), e.right && n > t + o && e.right(e)),
      Math.abs(e.offsetX) < i * Math.abs(e.offsetY) &&
        (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e))
  }
function sx(e, t) {
  var a
  const n = e.changedTouches[0]
  ;(t.touchstartX = n.clientX),
    (t.touchstartY = n.clientY),
    (a = t.start) == null || a.call(t, { originalEvent: e, ...t })
}
function ux(e, t) {
  var a
  const n = e.changedTouches[0]
  ;(t.touchendX = n.clientX),
    (t.touchendY = n.clientY),
    (a = t.end) == null || a.call(t, { originalEvent: e, ...t }),
    rx(t)
}
function cx(e, t) {
  var a
  const n = e.changedTouches[0]
  ;(t.touchmoveX = n.clientX),
    (t.touchmoveY = n.clientY),
    (a = t.move) == null || a.call(t, { originalEvent: e, ...t })
}
function dx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  }
  return { touchstart: (n) => sx(n, t), touchend: (n) => ux(n, t), touchmove: (n) => cx(n, t) }
}
function fx(e, t) {
  var r
  const n = t.value,
    a = n != null && n.parent ? e.parentElement : e,
    l = (n == null ? void 0 : n.options) ?? { passive: !0 },
    i = (r = t.instance) == null ? void 0 : r.$.uid
  if (!a || !i) return
  const o = dx(t.value)
  ;(a._touchHandlers = a._touchHandlers ?? Object.create(null)),
    (a._touchHandlers[i] = o),
    Cv(o).forEach((s) => {
      a.addEventListener(s, o[s], l)
    })
}
function vx(e, t) {
  var i, o
  const n = (i = t.value) != null && i.parent ? e.parentElement : e,
    a = (o = t.instance) == null ? void 0 : o.$.uid
  if (!(n != null && n._touchHandlers) || !a) return
  const l = n._touchHandlers[a]
  Cv(l).forEach((r) => {
    n.removeEventListener(r, l[r])
  }),
    delete n._touchHandlers[a]
}
const _u = { mounted: fx, unmounted: vx },
  ph = Symbol.for('vuetify:v-window'),
  kh = Symbol.for('vuetify:v-window-group'),
  Eo = $(
    {
      continuous: Boolean,
      nextIcon: { type: [Boolean, String, Function, Object], default: '$next' },
      prevIcon: { type: [Boolean, String, Function, Object], default: '$prev' },
      reverse: Boolean,
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == 'boolean' || e === 'hover'
      },
      touch: { type: [Object, Boolean], default: void 0 },
      direction: { type: String, default: 'horizontal' },
      modelValue: null,
      disabled: Boolean,
      selectedClass: { type: String, default: 'v-window-item--active' },
      mandatory: { type: [Boolean, String], default: 'force' },
      ...ve(),
      ..._e(),
      ...Ee()
    },
    'VWindow'
  ),
  ha = j()({
    name: 'VWindow',
    directives: { Touch: _u },
    props: Eo(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { isRtl: l } = ut(),
        { t: i } = Je(),
        o = Zn(e, kh),
        r = J(),
        s = b(() => (l.value ? !e.reverse : e.reverse)),
        u = se(!1),
        c = b(() => {
          const T = e.direction === 'vertical' ? 'y' : 'x',
            x = (s.value ? !u.value : u.value) ? '-reverse' : ''
          return `v-window-${T}${x}-transition`
        }),
        f = se(0),
        v = J(void 0),
        m = b(() => o.items.value.findIndex((T) => o.selected.value.includes(T.id)))
      de(m, (T, w) => {
        const x = o.items.value.length,
          V = x - 1
        x <= 2
          ? (u.value = T < w)
          : T === V && w === 0
            ? (u.value = !0)
            : T === 0 && w === V
              ? (u.value = !1)
              : (u.value = T < w)
      }),
        Fe(ph, {
          transition: c,
          isReversed: u,
          transitionCount: f,
          transitionHeight: v,
          rootRef: r
        })
      const g = b(() => e.continuous || m.value !== 0),
        h = b(() => e.continuous || m.value !== o.items.value.length - 1)
      function y() {
        g.value && o.prev()
      }
      function S() {
        h.value && o.next()
      }
      const p = b(() => {
          const T = [],
            w = {
              icon: l.value ? e.nextIcon : e.prevIcon,
              class: `v-window__${s.value ? 'right' : 'left'}`,
              onClick: o.prev,
              'aria-label': i('$vuetify.carousel.prev')
            }
          T.push(g.value ? (n.prev ? n.prev({ props: w }) : d(De, w, null)) : d('div', null, null))
          const x = {
            icon: l.value ? e.prevIcon : e.nextIcon,
            class: `v-window__${s.value ? 'left' : 'right'}`,
            onClick: o.next,
            'aria-label': i('$vuetify.carousel.next')
          }
          return (
            T.push(
              h.value ? (n.next ? n.next({ props: x }) : d(De, x, null)) : d('div', null, null)
            ),
            T
          )
        }),
        A = b(() =>
          e.touch === !1
            ? e.touch
            : {
                ...{
                  left: () => {
                    s.value ? y() : S()
                  },
                  right: () => {
                    s.value ? S() : y()
                  },
                  start: (w) => {
                    let { originalEvent: x } = w
                    x.stopPropagation()
                  }
                },
                ...(e.touch === !0 ? {} : e.touch)
              }
        )
      return (
        K(() =>
          We(
            d(
              e.tag,
              {
                ref: r,
                class: [
                  'v-window',
                  { 'v-window--show-arrows-on-hover': e.showArrows === 'hover' },
                  a.value,
                  e.class
                ],
                style: e.style
              },
              {
                default: () => {
                  var T, w
                  return [
                    d('div', { class: 'v-window__container', style: { height: v.value } }, [
                      (T = n.default) == null ? void 0 : T.call(n, { group: o }),
                      e.showArrows !== !1 && d('div', { class: 'v-window__controls' }, [p.value])
                    ]),
                    (w = n.additional) == null ? void 0 : w.call(n, { group: o })
                  ]
                }
              }
            ),
            [[Ft('touch'), A.value]]
          )
        ),
        { group: o }
      )
    }
  }),
  mx = $(
    {
      color: String,
      cycle: Boolean,
      delimiterIcon: { type: xe, default: '$delimiter' },
      height: { type: [Number, String], default: 500 },
      hideDelimiters: Boolean,
      hideDelimiterBackground: Boolean,
      interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 },
      progress: [Boolean, String],
      verticalDelimiters: [Boolean, String],
      ...Eo({ continuous: !0, mandatory: 'force', showArrows: !0 })
    },
    'VCarousel'
  ),
  hx = j()({
    name: 'VCarousel',
    props: mx(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        { t: l } = Je(),
        i = J()
      let o = -1
      de(a, s),
        de(() => e.interval, s),
        de(
          () => e.cycle,
          (u) => {
            u ? s() : window.clearTimeout(o)
          }
        ),
        St(r)
      function r() {
        !e.cycle ||
          !i.value ||
          (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3))
      }
      function s() {
        window.clearTimeout(o), window.requestAnimationFrame(r)
      }
      return (
        K(() => {
          const u = ha.filterProps(e)
          return d(
            ha,
            X({ ref: i }, u, {
              modelValue: a.value,
              'onUpdate:modelValue': (c) => (a.value = c),
              class: [
                'v-carousel',
                {
                  'v-carousel--hide-delimiter-background': e.hideDelimiterBackground,
                  'v-carousel--vertical-delimiters': e.verticalDelimiters
                },
                e.class
              ],
              style: [{ height: fe(e.height) }, e.style]
            }),
            {
              default: n.default,
              additional: (c) => {
                let { group: f } = c
                return d(me, null, [
                  !e.hideDelimiters &&
                    d(
                      'div',
                      {
                        class: 'v-carousel__controls',
                        style: {
                          left:
                            e.verticalDelimiters === 'left' && e.verticalDelimiters ? 0 : 'auto',
                          right: e.verticalDelimiters === 'right' ? 0 : 'auto'
                        }
                      },
                      [
                        f.items.value.length > 0 &&
                          d(
                            Ae,
                            {
                              defaults: {
                                VBtn: {
                                  color: e.color,
                                  icon: e.delimiterIcon,
                                  size: 'x-small',
                                  variant: 'text'
                                }
                              },
                              scoped: !0
                            },
                            {
                              default: () => [
                                f.items.value.map((v, m) => {
                                  const g = {
                                    id: `carousel-item-${v.id}`,
                                    'aria-label': l(
                                      '$vuetify.carousel.ariaLabel.delimiter',
                                      m + 1,
                                      f.items.value.length
                                    ),
                                    class: [
                                      'v-carousel__controls__item',
                                      f.isSelected(v.id) && 'v-btn--active'
                                    ],
                                    onClick: () => f.select(v.id, !0)
                                  }
                                  return n.item
                                    ? n.item({ props: g, item: v })
                                    : d(De, X(v, g), null)
                                })
                              ]
                            }
                          )
                      ]
                    ),
                  e.progress &&
                    d(
                      wo,
                      {
                        class: 'v-carousel__progress',
                        color: typeof e.progress == 'string' ? e.progress : void 0,
                        modelValue: ((f.getItemIndex(a.value) + 1) / f.items.value.length) * 100
                      },
                      null
                    )
                ])
              },
              prev: n.prev,
              next: n.next
            }
          )
        }),
        {}
      )
    }
  }),
  Bo = $(
    {
      reverseTransition: { type: [Boolean, String], default: void 0 },
      transition: { type: [Boolean, String], default: void 0 },
      ...ve(),
      ...Ia(),
      ...Su()
    },
    'VWindowItem'
  ),
  ga = j()({
    name: 'VWindowItem',
    directives: { Touch: _u },
    props: Bo(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Pe(ph),
        l = Aa(e, kh),
        { isBooted: i } = Ca()
      if (!a || !l) throw new Error('[Vuetify] VWindowItem must be used inside VWindow')
      const o = se(!1),
        r = b(
          () => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1)
        )
      function s() {
        !o.value ||
          !a ||
          ((o.value = !1),
          a.transitionCount.value > 0 &&
            ((a.transitionCount.value -= 1),
            a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)))
      }
      function u() {
        var g
        o.value ||
          !a ||
          ((o.value = !0),
          a.transitionCount.value === 0 &&
            (a.transitionHeight.value = fe(
              (g = a.rootRef.value) == null ? void 0 : g.clientHeight
            )),
          (a.transitionCount.value += 1))
      }
      function c() {
        s()
      }
      function f(g) {
        o.value &&
          Te(() => {
            !r.value || !o.value || !a || (a.transitionHeight.value = fe(g.clientHeight))
          })
      }
      const v = b(() => {
          const g = a.isReversed.value ? e.reverseTransition : e.transition
          return r.value
            ? {
                name: typeof g != 'string' ? a.transition.value : g,
                onBeforeEnter: u,
                onAfterEnter: s,
                onEnterCancelled: c,
                onBeforeLeave: u,
                onAfterLeave: s,
                onLeaveCancelled: c,
                onEnter: f
              }
            : !1
        }),
        { hasContent: m } = pu(e, l.isSelected)
      return (
        K(() =>
          d(
            Ct,
            { transition: v.value, disabled: !i.value },
            {
              default: () => {
                var g
                return [
                  We(
                    d(
                      'div',
                      { class: ['v-window-item', l.selectedClass.value, e.class], style: e.style },
                      [m.value && ((g = n.default) == null ? void 0 : g.call(n))]
                    ),
                    [[Zt, l.isSelected.value]]
                  )
                ]
              }
            }
          )
        ),
        { groupItem: l }
      )
    }
  }),
  gx = $({ ...vm(), ...Bo() }, 'VCarouselItem'),
  yx = j()({
    name: 'VCarouselItem',
    inheritAttrs: !1,
    props: gx(),
    setup(e, t) {
      let { slots: n, attrs: a } = t
      K(() => {
        const l = In.filterProps(e),
          i = ga.filterProps(e)
        return d(ga, X({ class: ['v-carousel-item', e.class] }, i), {
          default: () => [d(In, X(a, l), n)]
        })
      })
    }
  }),
  bx = pn('v-code'),
  Sx = $(
    {
      color: { type: Object },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      height: { type: [Number, String], default: 150 },
      width: { type: [Number, String], default: 300 },
      ...ve()
    },
    'VColorPickerCanvas'
  ),
  px = Nt({
    name: 'VColorPickerCanvas',
    props: Sx(),
    emits: { 'update:color': (e) => !0, 'update:position': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const a = se(!1),
        l = J(),
        i = se(parseFloat(e.width)),
        o = se(parseFloat(e.height)),
        r = J({ x: 0, y: 0 }),
        s = b({
          get: () => r.value,
          set(y) {
            var A, T
            if (!l.value) return
            const { x: S, y: p } = y
            ;(r.value = y),
              n('update:color', {
                h: ((A = e.color) == null ? void 0 : A.h) ?? 0,
                s: et(S, 0, i.value) / i.value,
                v: 1 - et(p, 0, o.value) / o.value,
                a: ((T = e.color) == null ? void 0 : T.a) ?? 1
              })
          }
        }),
        u = b(() => {
          const { x: y, y: S } = s.value,
            p = parseInt(e.dotSize, 10) / 2
          return {
            width: fe(e.dotSize),
            height: fe(e.dotSize),
            transform: `translate(${fe(y - p)}, ${fe(S - p)})`
          }
        }),
        { resizeRef: c } = on((y) => {
          var A
          if (!((A = c.value) != null && A.offsetParent)) return
          const { width: S, height: p } = y[0].contentRect
          ;(i.value = S), (o.value = p)
        })
      function f(y, S, p) {
        const { left: A, top: T, width: w, height: x } = p
        s.value = { x: et(y - A, 0, w), y: et(S - T, 0, x) }
      }
      function v(y) {
        y.type === 'mousedown' && y.preventDefault(),
          !e.disabled &&
            (m(y),
            window.addEventListener('mousemove', m),
            window.addEventListener('mouseup', g),
            window.addEventListener('touchmove', m),
            window.addEventListener('touchend', g))
      }
      function m(y) {
        if (e.disabled || !l.value) return
        a.value = !0
        const S = O0(y)
        f(S.clientX, S.clientY, l.value.getBoundingClientRect())
      }
      function g() {
        window.removeEventListener('mousemove', m),
          window.removeEventListener('mouseup', g),
          window.removeEventListener('touchmove', m),
          window.removeEventListener('touchend', g)
      }
      function h() {
        var T
        if (!l.value) return
        const y = l.value,
          S = y.getContext('2d')
        if (!S) return
        const p = S.createLinearGradient(0, 0, y.width, 0)
        p.addColorStop(0, 'hsla(0, 0%, 100%, 1)'),
          p.addColorStop(1, `hsla(${((T = e.color) == null ? void 0 : T.h) ?? 0}, 100%, 50%, 1)`),
          (S.fillStyle = p),
          S.fillRect(0, 0, y.width, y.height)
        const A = S.createLinearGradient(0, 0, 0, y.height)
        A.addColorStop(0, 'hsla(0, 0%, 0%, 0)'),
          A.addColorStop(1, 'hsla(0, 0%, 0%, 1)'),
          (S.fillStyle = A),
          S.fillRect(0, 0, y.width, y.height)
      }
      return (
        de(
          () => {
            var y
            return (y = e.color) == null ? void 0 : y.h
          },
          h,
          { immediate: !0 }
        ),
        de(
          () => [i.value, o.value],
          (y, S) => {
            h(), (r.value = { x: (s.value.x * y[0]) / S[0], y: (s.value.y * y[1]) / S[1] })
          },
          { flush: 'post' }
        ),
        de(
          () => e.color,
          () => {
            if (a.value) {
              a.value = !1
              return
            }
            r.value = e.color
              ? { x: e.color.s * i.value, y: (1 - e.color.v) * o.value }
              : { x: 0, y: 0 }
          },
          { deep: !0, immediate: !0 }
        ),
        St(() => h()),
        K(() =>
          d(
            'div',
            {
              ref: c,
              class: ['v-color-picker-canvas', e.class],
              style: e.style,
              onMousedown: v,
              onTouchstartPassive: v
            },
            [
              d('canvas', { ref: l, width: i.value, height: o.value }, null),
              e.color &&
                d(
                  'div',
                  {
                    class: [
                      'v-color-picker-canvas__dot',
                      { 'v-color-picker-canvas__dot--disabled': e.disabled }
                    ],
                    style: u.value
                  },
                  null
                )
            ]
          )
        ),
        {}
      )
    }
  })
function kx(e, t) {
  if (t) {
    const { a: n, ...a } = e
    return a
  }
  return e
}
function wx(e, t) {
  if (t == null || typeof t == 'string') {
    const n = zv(e)
    return e.a === 1 ? n.slice(0, 7) : n
  }
  if (typeof t == 'object') {
    let n
    return (
      oa(t, ['r', 'g', 'b'])
        ? (n = Pn(e))
        : oa(t, ['h', 's', 'l'])
          ? (n = $v(e))
          : oa(t, ['h', 's', 'v']) && (n = e),
      kx(n, !oa(t, ['a']) && e.a === 1)
    )
  }
  return e
}
const La = { h: 0, s: 0, v: 0, a: 1 },
  es = {
    inputProps: { type: 'number', min: 0 },
    inputs: [
      {
        label: 'R',
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.r),
        getColor: (e, t) => ({ ...e, r: Number(t) })
      },
      {
        label: 'G',
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.g),
        getColor: (e, t) => ({ ...e, g: Number(t) })
      },
      {
        label: 'B',
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.b),
        getColor: (e, t) => ({ ...e, b: Number(t) })
      },
      {
        label: 'A',
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e
          return t != null ? Math.round(t * 100) / 100 : 1
        },
        getColor: (e, t) => ({ ...e, a: Number(t) })
      }
    ],
    to: Pn,
    from: go
  }
var of
const xx = { ...es, inputs: (of = es.inputs) == null ? void 0 : of.slice(0, 3) },
  ts = {
    inputProps: { type: 'number', min: 0 },
    inputs: [
      {
        label: 'H',
        max: 360,
        step: 1,
        getValue: (e) => Math.round(e.h),
        getColor: (e, t) => ({ ...e, h: Number(t) })
      },
      {
        label: 'S',
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.s * 100) / 100,
        getColor: (e, t) => ({ ...e, s: Number(t) })
      },
      {
        label: 'L',
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.l * 100) / 100,
        getColor: (e, t) => ({ ...e, l: Number(t) })
      },
      {
        label: 'A',
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e
          return t != null ? Math.round(t * 100) / 100 : 1
        },
        getColor: (e, t) => ({ ...e, a: Number(t) })
      }
    ],
    to: $v,
    from: Js
  },
  Cx = { ...ts, inputs: ts.inputs.slice(0, 3) },
  wh = {
    inputProps: { type: 'text' },
    inputs: [{ label: 'HEXA', getValue: (e) => e, getColor: (e, t) => t }],
    to: zv,
    from: Hv
  },
  _x = { ...wh, inputs: [{ label: 'HEX', getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] },
  fa = { rgb: xx, rgba: es, hsl: Cx, hsla: ts, hex: _x, hexa: wh },
  Vx = (e) => {
    let { label: t, ...n } = e
    return d('div', { class: 'v-color-picker-edit__input' }, [
      d('input', n, null),
      d('span', null, [t])
    ])
  },
  Px = $(
    {
      color: Object,
      disabled: Boolean,
      mode: { type: String, default: 'rgba', validator: (e) => Object.keys(fa).includes(e) },
      modes: {
        type: Array,
        default: () => Object.keys(fa),
        validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(fa).includes(t))
      },
      ...ve()
    },
    'VColorPickerEdit'
  ),
  Ix = Nt({
    name: 'VColorPickerEdit',
    props: Px(),
    emits: { 'update:color': (e) => !0, 'update:mode': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const a = b(() => e.modes.map((i) => ({ ...fa[i], name: i }))),
        l = b(() => {
          var r
          const i = a.value.find((s) => s.name === e.mode)
          if (!i) return []
          const o = e.color ? i.to(e.color) : null
          return (r = i.inputs) == null
            ? void 0
            : r.map((s) => {
                let { getValue: u, getColor: c, ...f } = s
                return {
                  ...i.inputProps,
                  ...f,
                  disabled: e.disabled,
                  value: o && u(o),
                  onChange: (v) => {
                    const m = v.target
                    m && n('update:color', i.from(c(o ?? i.to(La), m.value)))
                  }
                }
              })
        })
      return (
        K(() => {
          var i
          return d('div', { class: ['v-color-picker-edit', e.class], style: e.style }, [
            (i = l.value) == null ? void 0 : i.map((o) => d(Vx, o, null)),
            a.value.length > 1 &&
              d(
                De,
                {
                  icon: '$unfold',
                  size: 'x-small',
                  variant: 'plain',
                  onClick: () => {
                    const o = a.value.findIndex((r) => r.name === e.mode)
                    n('update:mode', a.value[(o + 1) % a.value.length].name)
                  }
                },
                null
              )
          ])
        }),
        {}
      )
    }
  }),
  Vu = Symbol.for('vuetify:v-slider')
function ns(e, t, n) {
  const a = n === 'vertical',
    l = t.getBoundingClientRect(),
    i = 'touches' in e ? e.touches[0] : e
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2)
}
function Ax(e, t) {
  return 'touches' in e && e.touches.length
    ? e.touches[0][t]
    : 'changedTouches' in e && e.changedTouches.length
      ? e.changedTouches[0][t]
      : e[t]
}
const xh = $(
    {
      disabled: { type: Boolean, default: null },
      error: Boolean,
      readonly: { type: Boolean, default: null },
      max: { type: [Number, String], default: 100 },
      min: { type: [Number, String], default: 0 },
      step: { type: [Number, String], default: 0 },
      thumbColor: String,
      thumbLabel: {
        type: [Boolean, String],
        default: void 0,
        validator: (e) => typeof e == 'boolean' || e === 'always'
      },
      thumbSize: { type: [Number, String], default: 20 },
      showTicks: {
        type: [Boolean, String],
        default: !1,
        validator: (e) => typeof e == 'boolean' || e === 'always'
      },
      ticks: { type: [Array, Object] },
      tickSize: { type: [Number, String], default: 2 },
      color: String,
      trackColor: String,
      trackFillColor: String,
      trackSize: { type: [Number, String], default: 4 },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (e) => ['vertical', 'horizontal'].includes(e)
      },
      reverse: Boolean,
      ...Ue(),
      ...rt({ elevation: 2 }),
      ripple: { type: Boolean, default: !0 }
    },
    'Slider'
  ),
  Ch = (e) => {
    const t = b(() => parseFloat(e.min)),
      n = b(() => parseFloat(e.max)),
      a = b(() => (+e.step > 0 ? parseFloat(e.step) : 0)),
      l = b(() => Math.max(Nc(a.value), Nc(t.value)))
    function i(o) {
      if (((o = parseFloat(o)), a.value <= 0)) return o
      const r = et(o, t.value, n.value),
        s = t.value % a.value,
        u = Math.round((r - s) / a.value) * a.value + s
      return parseFloat(Math.min(u, n.value).toFixed(l.value))
    }
    return { min: t, max: n, step: a, decimals: l, roundValue: i }
  },
  _h = (e) => {
    let {
      props: t,
      steps: n,
      onSliderStart: a,
      onSliderMove: l,
      onSliderEnd: i,
      getActiveThumb: o
    } = e
    const { isRtl: r } = ut(),
      s = N(t, 'reverse'),
      u = b(() => t.direction === 'vertical'),
      c = b(() => u.value !== s.value),
      { min: f, max: v, step: m, decimals: g, roundValue: h } = n,
      y = b(() => parseInt(t.thumbSize, 10)),
      S = b(() => parseInt(t.tickSize, 10)),
      p = b(() => parseInt(t.trackSize, 10)),
      A = b(() => (v.value - f.value) / m.value),
      T = N(t, 'disabled'),
      w = b(() => (t.error || t.disabled ? void 0 : t.thumbColor ?? t.color)),
      x = b(() => (t.error || t.disabled ? void 0 : t.trackColor ?? t.color)),
      V = b(() => (t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color)),
      _ = se(!1),
      k = se(0),
      P = J(),
      E = J()
    function I(Q) {
      var M
      const R = t.direction === 'vertical',
        oe = R ? 'top' : 'left',
        ne = R ? 'height' : 'width',
        U = R ? 'clientY' : 'clientX',
        { [oe]: ge, [ne]: Z } = (M = P.value) == null ? void 0 : M.$el.getBoundingClientRect(),
        C = Ax(Q, U)
      let B = Math.min(Math.max((C - ge - k.value) / Z, 0), 1) || 0
      return (
        (R ? c.value : c.value !== r.value) && (B = 1 - B), h(f.value + B * (v.value - f.value))
      )
    }
    const D = (Q) => {
        i({ value: I(Q) }), (_.value = !1), (k.value = 0)
      },
      L = (Q) => {
        ;(E.value = o(Q)),
          E.value &&
            (E.value.focus(),
            (_.value = !0),
            E.value.contains(Q.target)
              ? (k.value = ns(Q, E.value, t.direction))
              : ((k.value = 0), l({ value: I(Q) })),
            a({ value: I(Q) }))
      },
      W = { passive: !0, capture: !0 }
    function Y(Q) {
      l({ value: I(Q) })
    }
    function te(Q) {
      Q.stopPropagation(),
        Q.preventDefault(),
        D(Q),
        window.removeEventListener('mousemove', Y, W),
        window.removeEventListener('mouseup', te)
    }
    function F(Q) {
      var R
      D(Q),
        window.removeEventListener('touchmove', Y, W),
        (R = Q.target) == null || R.removeEventListener('touchend', F)
    }
    function q(Q) {
      var R
      L(Q),
        window.addEventListener('touchmove', Y, W),
        (R = Q.target) == null || R.addEventListener('touchend', F, { passive: !1 })
    }
    function O(Q) {
      Q.preventDefault(),
        L(Q),
        window.addEventListener('mousemove', Y, W),
        window.addEventListener('mouseup', te, { passive: !1 })
    }
    const z = (Q) => {
        const R = ((Q - f.value) / (v.value - f.value)) * 100
        return et(isNaN(R) ? 0 : R, 0, 100)
      },
      ee = N(t, 'showTicks'),
      he = b(() =>
        ee.value
          ? t.ticks
            ? Array.isArray(t.ticks)
              ? t.ticks.map((Q) => ({ value: Q, position: z(Q), label: Q.toString() }))
              : Object.keys(t.ticks).map((Q) => ({
                  value: parseFloat(Q),
                  position: z(parseFloat(Q)),
                  label: t.ticks[Q]
                }))
            : A.value !== 1 / 0
              ? hn(A.value + 1).map((Q) => {
                  const R = f.value + Q * m.value
                  return { value: R, position: z(R) }
                })
              : []
          : []
      ),
      Se = b(() =>
        he.value.some((Q) => {
          let { label: R } = Q
          return !!R
        })
      ),
      ue = {
        activeThumbRef: E,
        color: N(t, 'color'),
        decimals: g,
        disabled: T,
        direction: N(t, 'direction'),
        elevation: N(t, 'elevation'),
        hasLabels: Se,
        isReversed: s,
        indexFromEnd: c,
        min: f,
        max: v,
        mousePressed: _,
        numTicks: A,
        onSliderMousedown: O,
        onSliderTouchstart: q,
        parsedTicks: he,
        parseMouseMove: I,
        position: z,
        readonly: N(t, 'readonly'),
        rounded: N(t, 'rounded'),
        roundValue: h,
        showTicks: ee,
        startOffset: k,
        step: m,
        thumbSize: y,
        thumbColor: w,
        thumbLabel: N(t, 'thumbLabel'),
        ticks: N(t, 'ticks'),
        tickSize: S,
        trackColor: x,
        trackContainerRef: P,
        trackFillColor: V,
        trackSize: p,
        vertical: u
      }
    return Fe(Vu, ue), ue
  },
  Tx = $(
    {
      focused: Boolean,
      max: { type: Number, required: !0 },
      min: { type: Number, required: !0 },
      modelValue: { type: Number, required: !0 },
      position: { type: Number, required: !0 },
      ripple: { type: [Boolean, Object], default: !0 },
      ...ve()
    },
    'VSliderThumb'
  ),
  as = j()({
    name: 'VSliderThumb',
    directives: { Ripple: Bn },
    props: Tx(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: a } = t
      const l = Pe(Vu),
        { isRtl: i, rtlClasses: o } = ut()
      if (!l)
        throw new Error('[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider')
      const {
          thumbColor: r,
          step: s,
          disabled: u,
          thumbSize: c,
          thumbLabel: f,
          direction: v,
          isReversed: m,
          vertical: g,
          readonly: h,
          elevation: y,
          mousePressed: S,
          decimals: p,
          indexFromEnd: A
        } = l,
        T = b(() => (u.value ? void 0 : y.value)),
        { elevationClasses: w } = ht(T),
        { textColorClasses: x, textColorStyles: V } = yt(r),
        { pageup: _, pagedown: k, end: P, home: E, left: I, right: D, down: L, up: W } = Dr,
        Y = [_, k, P, E, I, D, L, W],
        te = b(() => (s.value ? [1, 2, 3] : [1, 5, 10]))
      function F(O, z) {
        if (!Y.includes(O.key)) return
        O.preventDefault()
        const ee = s.value || 0.1,
          he = (e.max - e.min) / ee
        if ([I, D, L, W].includes(O.key)) {
          const ue = (g.value
              ? [i.value ? I : D, m.value ? L : W]
              : A.value !== i.value
                ? [I, W]
                : [D, W]
            ).includes(O.key)
              ? 1
              : -1,
            Q = O.shiftKey ? 2 : O.ctrlKey ? 1 : 0
          z = z + ue * ee * te.value[Q]
        } else if (O.key === E) z = e.min
        else if (O.key === P) z = e.max
        else {
          const Se = O.key === k ? 1 : -1
          z = z - Se * ee * (he > 100 ? he / 10 : 10)
        }
        return Math.max(e.min, Math.min(e.max, z))
      }
      function q(O) {
        const z = F(O, e.modelValue)
        z != null && a('update:modelValue', z)
      }
      return (
        K(() => {
          const O = fe(A.value ? 100 - e.position : e.position, '%')
          return d(
            'div',
            {
              class: [
                'v-slider-thumb',
                {
                  'v-slider-thumb--focused': e.focused,
                  'v-slider-thumb--pressed': e.focused && S.value
                },
                e.class,
                o.value
              ],
              style: [
                { '--v-slider-thumb-position': O, '--v-slider-thumb-size': fe(c.value) },
                e.style
              ],
              role: 'slider',
              tabindex: u.value ? -1 : 0,
              'aria-valuemin': e.min,
              'aria-valuemax': e.max,
              'aria-valuenow': e.modelValue,
              'aria-readonly': !!h.value,
              'aria-orientation': v.value,
              onKeydown: h.value ? void 0 : q
            },
            [
              d(
                'div',
                { class: ['v-slider-thumb__surface', x.value, w.value], style: { ...V.value } },
                null
              ),
              We(d('div', { class: ['v-slider-thumb__ripple', x.value], style: V.value }, null), [
                [Ft('ripple'), e.ripple, null, { circle: !0, center: !0 }]
              ]),
              d(
                ru,
                { origin: 'bottom center' },
                {
                  default: () => {
                    var z
                    return [
                      We(
                        d('div', { class: 'v-slider-thumb__label-container' }, [
                          d('div', { class: ['v-slider-thumb__label'] }, [
                            d('div', null, [
                              ((z = n['thumb-label']) == null
                                ? void 0
                                : z.call(n, { modelValue: e.modelValue })) ??
                                e.modelValue.toFixed(s.value ? p.value : 1)
                            ])
                          ])
                        ]),
                        [[Zt, (f.value && e.focused) || f.value === 'always']]
                      )
                    ]
                  }
                }
              )
            ]
          )
        }),
        {}
      )
    }
  }),
  Ex = $(
    { start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...ve() },
    'VSliderTrack'
  ),
  Vh = j()({
    name: 'VSliderTrack',
    props: Ex(),
    emits: {},
    setup(e, t) {
      let { slots: n } = t
      const a = Pe(Vu)
      if (!a) throw new Error('[Vuetify] v-slider-track must be inside v-slider or v-range-slider')
      const {
          color: l,
          parsedTicks: i,
          rounded: o,
          showTicks: r,
          tickSize: s,
          trackColor: u,
          trackFillColor: c,
          trackSize: f,
          vertical: v,
          min: m,
          max: g,
          indexFromEnd: h
        } = a,
        { roundedClasses: y } = qe(o),
        { backgroundColorClasses: S, backgroundColorStyles: p } = Ne(c),
        { backgroundColorClasses: A, backgroundColorStyles: T } = Ne(u),
        w = b(() => `inset-${v.value ? 'block' : 'inline'}-${h.value ? 'end' : 'start'}`),
        x = b(() => (v.value ? 'height' : 'width')),
        V = b(() => ({ [w.value]: '0%', [x.value]: '100%' })),
        _ = b(() => e.stop - e.start),
        k = b(() => ({ [w.value]: fe(e.start, '%'), [x.value]: fe(_.value, '%') })),
        P = b(() =>
          r.value
            ? (v.value ? i.value.slice().reverse() : i.value).map((I, D) => {
                var W
                const L = I.value !== m.value && I.value !== g.value ? fe(I.position, '%') : void 0
                return d(
                  'div',
                  {
                    key: I.value,
                    class: [
                      'v-slider-track__tick',
                      {
                        'v-slider-track__tick--filled':
                          I.position >= e.start && I.position <= e.stop,
                        'v-slider-track__tick--first': I.value === m.value,
                        'v-slider-track__tick--last': I.value === g.value
                      }
                    ],
                    style: { [w.value]: L }
                  },
                  [
                    (I.label || n['tick-label']) &&
                      d('div', { class: 'v-slider-track__tick-label' }, [
                        ((W = n['tick-label']) == null
                          ? void 0
                          : W.call(n, { tick: I, index: D })) ?? I.label
                      ])
                  ]
                )
              })
            : []
        )
      return (
        K(() =>
          d(
            'div',
            {
              class: ['v-slider-track', y.value, e.class],
              style: [
                { '--v-slider-track-size': fe(f.value), '--v-slider-tick-size': fe(s.value) },
                e.style
              ]
            },
            [
              d(
                'div',
                {
                  class: [
                    'v-slider-track__background',
                    A.value,
                    { 'v-slider-track__background--opacity': !!l.value || !c.value }
                  ],
                  style: { ...V.value, ...T.value }
                },
                null
              ),
              d(
                'div',
                { class: ['v-slider-track__fill', S.value], style: { ...k.value, ...p.value } },
                null
              ),
              r.value &&
                d(
                  'div',
                  {
                    class: [
                      'v-slider-track__ticks',
                      { 'v-slider-track__ticks--always-show': r.value === 'always' }
                    ]
                  },
                  [P.value]
                )
            ]
          )
        ),
        {}
      )
    }
  }),
  Bx = $(
    { ...si(), ...xh(), ...Mn(), modelValue: { type: [Number, String], default: 0 } },
    'VSlider'
  ),
  ls = j()({
    name: 'VSlider',
    props: Bx(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      start: (e) => !0,
      end: (e) => !0
    },
    setup(e, t) {
      let { slots: n, emit: a } = t
      const l = J(),
        { rtlClasses: i } = ut(),
        o = Ch(e),
        r = be(e, 'modelValue', void 0, (x) => o.roundValue(x ?? o.min.value)),
        {
          min: s,
          max: u,
          mousePressed: c,
          roundValue: f,
          onSliderMousedown: v,
          onSliderTouchstart: m,
          trackContainerRef: g,
          position: h,
          hasLabels: y,
          readonly: S
        } = _h({
          props: e,
          steps: o,
          onSliderStart: () => {
            a('start', r.value)
          },
          onSliderEnd: (x) => {
            let { value: V } = x
            const _ = f(V)
            ;(r.value = _), a('end', _)
          },
          onSliderMove: (x) => {
            let { value: V } = x
            return (r.value = f(V))
          },
          getActiveThumb: () => {
            var x
            return (x = l.value) == null ? void 0 : x.$el
          }
        }),
        { isFocused: p, focus: A, blur: T } = Dn(e),
        w = b(() => h(r.value))
      return (
        K(() => {
          const x = bt.filterProps(e),
            V = !!(e.label || n.label || n.prepend)
          return d(
            bt,
            X(
              {
                class: [
                  'v-slider',
                  {
                    'v-slider--has-labels': !!n['tick-label'] || y.value,
                    'v-slider--focused': p.value,
                    'v-slider--pressed': c.value,
                    'v-slider--disabled': e.disabled
                  },
                  i.value,
                  e.class
                ],
                style: e.style
              },
              x,
              { focused: p.value }
            ),
            {
              ...n,
              prepend: V
                ? (_) => {
                    var k, P
                    return d(me, null, [
                      ((k = n.label) == null ? void 0 : k.call(n, _)) ??
                        (e.label
                          ? d(ol, { id: _.id.value, class: 'v-slider__label', text: e.label }, null)
                          : void 0),
                      (P = n.prepend) == null ? void 0 : P.call(n, _)
                    ])
                  }
                : void 0,
              default: (_) => {
                let { id: k, messagesId: P } = _
                return d(
                  'div',
                  {
                    class: 'v-slider__container',
                    onMousedown: S.value ? void 0 : v,
                    onTouchstartPassive: S.value ? void 0 : m
                  },
                  [
                    d(
                      'input',
                      {
                        id: k.value,
                        name: e.name || k.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: '-1',
                        value: r.value
                      },
                      null
                    ),
                    d(Vh, { ref: g, start: 0, stop: w.value }, { 'tick-label': n['tick-label'] }),
                    d(
                      as,
                      {
                        ref: l,
                        'aria-describedby': P.value,
                        focused: p.value,
                        min: s.value,
                        max: u.value,
                        modelValue: r.value,
                        'onUpdate:modelValue': (E) => (r.value = E),
                        position: w.value,
                        elevation: e.elevation,
                        onFocus: A,
                        onBlur: T,
                        ripple: e.ripple
                      },
                      { 'thumb-label': n['thumb-label'] }
                    )
                  ]
                )
              }
            }
          )
        }),
        {}
      )
    }
  }),
  Dx = $(
    { color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...ve() },
    'VColorPickerPreview'
  ),
  Mx = Nt({
    name: 'VColorPickerPreview',
    props: Dx(),
    emits: { 'update:color': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const a = new AbortController()
      Hs(() => a.abort())
      async function l() {
        if (!Oc) return
        const i = new window.EyeDropper()
        try {
          const o = await i.open({ signal: a.signal }),
            r = Hv(o.sRGBHex)
          n('update:color', { ...(e.color ?? La), ...r })
        } catch {}
      }
      return (
        K(() => {
          var i, o
          return d(
            'div',
            {
              class: [
                'v-color-picker-preview',
                { 'v-color-picker-preview--hide-alpha': e.hideAlpha },
                e.class
              ],
              style: e.style
            },
            [
              Oc &&
                d('div', { class: 'v-color-picker-preview__eye-dropper', key: 'eyeDropper' }, [
                  d(
                    De,
                    { onClick: l, icon: '$eyeDropper', variant: 'plain', density: 'comfortable' },
                    null
                  )
                ]),
              d('div', { class: 'v-color-picker-preview__dot' }, [
                d('div', { style: { background: Lv(e.color ?? La) } }, null)
              ]),
              d('div', { class: 'v-color-picker-preview__sliders' }, [
                d(
                  ls,
                  {
                    class: 'v-color-picker-preview__track v-color-picker-preview__hue',
                    modelValue: (i = e.color) == null ? void 0 : i.h,
                    'onUpdate:modelValue': (r) => n('update:color', { ...(e.color ?? La), h: r }),
                    step: 0,
                    min: 0,
                    max: 360,
                    disabled: e.disabled,
                    thumbSize: 14,
                    trackSize: 8,
                    trackFillColor: 'white',
                    hideDetails: !0
                  },
                  null
                ),
                !e.hideAlpha &&
                  d(
                    ls,
                    {
                      class: 'v-color-picker-preview__track v-color-picker-preview__alpha',
                      modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
                      'onUpdate:modelValue': (r) => n('update:color', { ...(e.color ?? La), a: r }),
                      step: 1 / 256,
                      min: 0,
                      max: 1,
                      disabled: e.disabled,
                      thumbSize: 14,
                      trackSize: 8,
                      trackFillColor: 'white',
                      hideDetails: !0
                    },
                    null
                  )
              ])
            ]
          )
        }),
        {}
      )
    }
  }),
  Rx = {
    base: '#f44336',
    lighten5: '#ffebee',
    lighten4: '#ffcdd2',
    lighten3: '#ef9a9a',
    lighten2: '#e57373',
    lighten1: '#ef5350',
    darken1: '#e53935',
    darken2: '#d32f2f',
    darken3: '#c62828',
    darken4: '#b71c1c',
    accent1: '#ff8a80',
    accent2: '#ff5252',
    accent3: '#ff1744',
    accent4: '#d50000'
  },
  $x = {
    base: '#e91e63',
    lighten5: '#fce4ec',
    lighten4: '#f8bbd0',
    lighten3: '#f48fb1',
    lighten2: '#f06292',
    lighten1: '#ec407a',
    darken1: '#d81b60',
    darken2: '#c2185b',
    darken3: '#ad1457',
    darken4: '#880e4f',
    accent1: '#ff80ab',
    accent2: '#ff4081',
    accent3: '#f50057',
    accent4: '#c51162'
  },
  Ox = {
    base: '#9c27b0',
    lighten5: '#f3e5f5',
    lighten4: '#e1bee7',
    lighten3: '#ce93d8',
    lighten2: '#ba68c8',
    lighten1: '#ab47bc',
    darken1: '#8e24aa',
    darken2: '#7b1fa2',
    darken3: '#6a1b9a',
    darken4: '#4a148c',
    accent1: '#ea80fc',
    accent2: '#e040fb',
    accent3: '#d500f9',
    accent4: '#aa00ff'
  },
  Lx = {
    base: '#673ab7',
    lighten5: '#ede7f6',
    lighten4: '#d1c4e9',
    lighten3: '#b39ddb',
    lighten2: '#9575cd',
    lighten1: '#7e57c2',
    darken1: '#5e35b1',
    darken2: '#512da8',
    darken3: '#4527a0',
    darken4: '#311b92',
    accent1: '#b388ff',
    accent2: '#7c4dff',
    accent3: '#651fff',
    accent4: '#6200ea'
  },
  Fx = {
    base: '#3f51b5',
    lighten5: '#e8eaf6',
    lighten4: '#c5cae9',
    lighten3: '#9fa8da',
    lighten2: '#7986cb',
    lighten1: '#5c6bc0',
    darken1: '#3949ab',
    darken2: '#303f9f',
    darken3: '#283593',
    darken4: '#1a237e',
    accent1: '#8c9eff',
    accent2: '#536dfe',
    accent3: '#3d5afe',
    accent4: '#304ffe'
  },
  Nx = {
    base: '#2196f3',
    lighten5: '#e3f2fd',
    lighten4: '#bbdefb',
    lighten3: '#90caf9',
    lighten2: '#64b5f6',
    lighten1: '#42a5f5',
    darken1: '#1e88e5',
    darken2: '#1976d2',
    darken3: '#1565c0',
    darken4: '#0d47a1',
    accent1: '#82b1ff',
    accent2: '#448aff',
    accent3: '#2979ff',
    accent4: '#2962ff'
  },
  Hx = {
    base: '#03a9f4',
    lighten5: '#e1f5fe',
    lighten4: '#b3e5fc',
    lighten3: '#81d4fa',
    lighten2: '#4fc3f7',
    lighten1: '#29b6f6',
    darken1: '#039be5',
    darken2: '#0288d1',
    darken3: '#0277bd',
    darken4: '#01579b',
    accent1: '#80d8ff',
    accent2: '#40c4ff',
    accent3: '#00b0ff',
    accent4: '#0091ea'
  },
  zx = {
    base: '#00bcd4',
    lighten5: '#e0f7fa',
    lighten4: '#b2ebf2',
    lighten3: '#80deea',
    lighten2: '#4dd0e1',
    lighten1: '#26c6da',
    darken1: '#00acc1',
    darken2: '#0097a7',
    darken3: '#00838f',
    darken4: '#006064',
    accent1: '#84ffff',
    accent2: '#18ffff',
    accent3: '#00e5ff',
    accent4: '#00b8d4'
  },
  jx = {
    base: '#009688',
    lighten5: '#e0f2f1',
    lighten4: '#b2dfdb',
    lighten3: '#80cbc4',
    lighten2: '#4db6ac',
    lighten1: '#26a69a',
    darken1: '#00897b',
    darken2: '#00796b',
    darken3: '#00695c',
    darken4: '#004d40',
    accent1: '#a7ffeb',
    accent2: '#64ffda',
    accent3: '#1de9b6',
    accent4: '#00bfa5'
  },
  Wx = {
    base: '#4caf50',
    lighten5: '#e8f5e9',
    lighten4: '#c8e6c9',
    lighten3: '#a5d6a7',
    lighten2: '#81c784',
    lighten1: '#66bb6a',
    darken1: '#43a047',
    darken2: '#388e3c',
    darken3: '#2e7d32',
    darken4: '#1b5e20',
    accent1: '#b9f6ca',
    accent2: '#69f0ae',
    accent3: '#00e676',
    accent4: '#00c853'
  },
  Ux = {
    base: '#8bc34a',
    lighten5: '#f1f8e9',
    lighten4: '#dcedc8',
    lighten3: '#c5e1a5',
    lighten2: '#aed581',
    lighten1: '#9ccc65',
    darken1: '#7cb342',
    darken2: '#689f38',
    darken3: '#558b2f',
    darken4: '#33691e',
    accent1: '#ccff90',
    accent2: '#b2ff59',
    accent3: '#76ff03',
    accent4: '#64dd17'
  },
  Gx = {
    base: '#cddc39',
    lighten5: '#f9fbe7',
    lighten4: '#f0f4c3',
    lighten3: '#e6ee9c',
    lighten2: '#dce775',
    lighten1: '#d4e157',
    darken1: '#c0ca33',
    darken2: '#afb42b',
    darken3: '#9e9d24',
    darken4: '#827717',
    accent1: '#f4ff81',
    accent2: '#eeff41',
    accent3: '#c6ff00',
    accent4: '#aeea00'
  },
  Yx = {
    base: '#ffeb3b',
    lighten5: '#fffde7',
    lighten4: '#fff9c4',
    lighten3: '#fff59d',
    lighten2: '#fff176',
    lighten1: '#ffee58',
    darken1: '#fdd835',
    darken2: '#fbc02d',
    darken3: '#f9a825',
    darken4: '#f57f17',
    accent1: '#ffff8d',
    accent2: '#ffff00',
    accent3: '#ffea00',
    accent4: '#ffd600'
  },
  Kx = {
    base: '#ffc107',
    lighten5: '#fff8e1',
    lighten4: '#ffecb3',
    lighten3: '#ffe082',
    lighten2: '#ffd54f',
    lighten1: '#ffca28',
    darken1: '#ffb300',
    darken2: '#ffa000',
    darken3: '#ff8f00',
    darken4: '#ff6f00',
    accent1: '#ffe57f',
    accent2: '#ffd740',
    accent3: '#ffc400',
    accent4: '#ffab00'
  },
  qx = {
    base: '#ff9800',
    lighten5: '#fff3e0',
    lighten4: '#ffe0b2',
    lighten3: '#ffcc80',
    lighten2: '#ffb74d',
    lighten1: '#ffa726',
    darken1: '#fb8c00',
    darken2: '#f57c00',
    darken3: '#ef6c00',
    darken4: '#e65100',
    accent1: '#ffd180',
    accent2: '#ffab40',
    accent3: '#ff9100',
    accent4: '#ff6d00'
  },
  Xx = {
    base: '#ff5722',
    lighten5: '#fbe9e7',
    lighten4: '#ffccbc',
    lighten3: '#ffab91',
    lighten2: '#ff8a65',
    lighten1: '#ff7043',
    darken1: '#f4511e',
    darken2: '#e64a19',
    darken3: '#d84315',
    darken4: '#bf360c',
    accent1: '#ff9e80',
    accent2: '#ff6e40',
    accent3: '#ff3d00',
    accent4: '#dd2c00'
  },
  Zx = {
    base: '#795548',
    lighten5: '#efebe9',
    lighten4: '#d7ccc8',
    lighten3: '#bcaaa4',
    lighten2: '#a1887f',
    lighten1: '#8d6e63',
    darken1: '#6d4c41',
    darken2: '#5d4037',
    darken3: '#4e342e',
    darken4: '#3e2723'
  },
  Qx = {
    base: '#607d8b',
    lighten5: '#eceff1',
    lighten4: '#cfd8dc',
    lighten3: '#b0bec5',
    lighten2: '#90a4ae',
    lighten1: '#78909c',
    darken1: '#546e7a',
    darken2: '#455a64',
    darken3: '#37474f',
    darken4: '#263238'
  },
  Jx = {
    base: '#9e9e9e',
    lighten5: '#fafafa',
    lighten4: '#f5f5f5',
    lighten3: '#eeeeee',
    lighten2: '#e0e0e0',
    lighten1: '#bdbdbd',
    darken1: '#757575',
    darken2: '#616161',
    darken3: '#424242',
    darken4: '#212121'
  },
  eC = { black: '#000000', white: '#ffffff', transparent: '#ffffff00' },
  tC = {
    red: Rx,
    pink: $x,
    purple: Ox,
    deepPurple: Lx,
    indigo: Fx,
    blue: Nx,
    lightBlue: Hx,
    cyan: zx,
    teal: jx,
    green: Wx,
    lightGreen: Ux,
    lime: Gx,
    yellow: Yx,
    amber: Kx,
    orange: qx,
    deepOrange: Xx,
    brown: Zx,
    blueGrey: Qx,
    grey: Jx,
    shades: eC
  },
  nC = $(
    {
      swatches: { type: Array, default: () => aC(tC) },
      disabled: Boolean,
      color: Object,
      maxHeight: [Number, String],
      ...ve()
    },
    'VColorPickerSwatches'
  )
function aC(e) {
  return Object.keys(e).map((t) => {
    const n = e[t]
    return n.base
      ? [
          n.base,
          n.darken4,
          n.darken3,
          n.darken2,
          n.darken1,
          n.lighten1,
          n.lighten2,
          n.lighten3,
          n.lighten4,
          n.lighten5
        ]
      : [n.black, n.white, n.transparent]
  })
}
const lC = Nt({
    name: 'VColorPickerSwatches',
    props: nC(),
    emits: { 'update:color': (e) => !0 },
    setup(e, t) {
      let { emit: n } = t
      return (
        K(() =>
          d(
            'div',
            {
              class: ['v-color-picker-swatches', e.class],
              style: [{ maxHeight: fe(e.maxHeight) }, e.style]
            },
            [
              d('div', null, [
                e.swatches.map((a) =>
                  d('div', { class: 'v-color-picker-swatches__swatch' }, [
                    a.map((l) => {
                      const i = Gt(l),
                        o = go(i),
                        r = Ov(i)
                      return d(
                        'div',
                        {
                          class: 'v-color-picker-swatches__color',
                          onClick: () => o && n('update:color', o)
                        },
                        [
                          d('div', { style: { background: r } }, [
                            e.color && Sn(e.color, o)
                              ? d(
                                  Me,
                                  {
                                    size: 'x-small',
                                    icon: '$success',
                                    color: sS(l, '#FFFFFF') > 2 ? 'white' : 'black'
                                  },
                                  null
                                )
                              : void 0
                          ])
                        ]
                      )
                    })
                  ])
                )
              ])
            ]
          )
        ),
        {}
      )
    }
  }),
  Do = $(
    {
      color: String,
      ...zt(),
      ...ve(),
      ...ct(),
      ...rt(),
      ...Qn(),
      ...ll(),
      ...Ue(),
      ..._e(),
      ...Ee()
    },
    'VSheet'
  ),
  ya = j()({
    name: 'VSheet',
    props: Do(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(N(e, 'color')),
        { borderClasses: o } = Qt(e),
        { dimensionStyles: r } = dt(e),
        { elevationClasses: s } = ht(e),
        { locationStyles: u } = Ta(e),
        { positionClasses: c } = il(e),
        { roundedClasses: f } = qe(e)
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-sheet', a.value, l.value, o.value, s.value, c.value, f.value, e.class],
              style: [i.value, r.value, u.value, e.style]
            },
            n
          )
        ),
        {}
      )
    }
  }),
  iC = $(
    {
      canvasHeight: { type: [String, Number], default: 150 },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      hideCanvas: Boolean,
      hideSliders: Boolean,
      hideInputs: Boolean,
      mode: { type: String, default: 'rgba', validator: (e) => Object.keys(fa).includes(e) },
      modes: {
        type: Array,
        default: () => Object.keys(fa),
        validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(fa).includes(t))
      },
      showSwatches: Boolean,
      swatches: Array,
      swatchesMaxHeight: { type: [Number, String], default: 150 },
      modelValue: { type: [Object, String] },
      ...it(Do({ width: 300 }), [
        'height',
        'location',
        'minHeight',
        'maxHeight',
        'minWidth',
        'maxWidth'
      ])
    },
    'VColorPicker'
  ),
  oC = Nt({
    name: 'VColorPicker',
    props: iC(),
    emits: { 'update:modelValue': (e) => !0, 'update:mode': (e) => !0 },
    setup(e) {
      const t = be(e, 'mode'),
        n = J(null),
        a = be(
          e,
          'modelValue',
          void 0,
          (s) => {
            if (s == null || s === '') return null
            let u
            try {
              u = go(Gt(s))
            } catch {
              return null
            }
            return u
          },
          (s) => (s ? wx(s, e.modelValue) : null)
        ),
        l = b(() => (a.value ? { ...a.value, h: n.value ?? a.value.h } : null)),
        { rtlClasses: i } = ut()
      let o = !0
      de(
        a,
        (s) => {
          if (!o) {
            o = !0
            return
          }
          s && (n.value = s.h)
        },
        { immediate: !0 }
      )
      const r = (s) => {
        ;(o = !1), (n.value = s.h), (a.value = s)
      }
      return (
        St(() => {
          e.modes.includes(t.value) || (t.value = e.modes[0])
        }),
        Ke({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }),
        K(() => {
          const s = ya.filterProps(e)
          return d(
            ya,
            X(
              {
                rounded: e.rounded,
                elevation: e.elevation,
                theme: e.theme,
                class: ['v-color-picker', i.value, e.class],
                style: [{ '--v-color-picker-color-hsv': Lv({ ...(l.value ?? La), a: 1 }) }, e.style]
              },
              s,
              { maxWidth: e.width }
            ),
            {
              default: () => [
                !e.hideCanvas &&
                  d(
                    px,
                    {
                      key: 'canvas',
                      color: l.value,
                      'onUpdate:color': r,
                      disabled: e.disabled,
                      dotSize: e.dotSize,
                      width: e.width,
                      height: e.canvasHeight
                    },
                    null
                  ),
                (!e.hideSliders || !e.hideInputs) &&
                  d('div', { key: 'controls', class: 'v-color-picker__controls' }, [
                    !e.hideSliders &&
                      d(
                        Mx,
                        {
                          key: 'preview',
                          color: l.value,
                          'onUpdate:color': r,
                          hideAlpha: !t.value.endsWith('a'),
                          disabled: e.disabled
                        },
                        null
                      ),
                    !e.hideInputs &&
                      d(
                        Ix,
                        {
                          key: 'edit',
                          modes: e.modes,
                          mode: t.value,
                          'onUpdate:mode': (u) => (t.value = u),
                          color: l.value,
                          'onUpdate:color': r,
                          disabled: e.disabled
                        },
                        null
                      )
                  ]),
                e.showSwatches &&
                  d(
                    lC,
                    {
                      key: 'swatches',
                      color: l.value,
                      'onUpdate:color': r,
                      maxHeight: e.swatchesMaxHeight,
                      swatches: e.swatches,
                      disabled: e.disabled
                    },
                    null
                  )
              ]
            }
          )
        }),
        {}
      )
    }
  })
function rC(e, t, n) {
  if (t == null) return e
  if (Array.isArray(t)) throw new Error('Multiple matches is not implemented')
  return typeof t == 'number' && ~t
    ? d(me, null, [
        d('span', { class: 'v-combobox__unmask' }, [e.substr(0, t)]),
        d('span', { class: 'v-combobox__mask' }, [e.substr(t, n)]),
        d('span', { class: 'v-combobox__unmask' }, [e.substr(t + n)])
      ])
    : e
}
const sC = $(
    {
      autoSelectFirst: { type: [Boolean, String] },
      clearOnSelect: { type: Boolean, default: !0 },
      delimiters: Array,
      ...fi({ filterKeys: ['title'] }),
      ...xu({ hideNoData: !0, returnObject: !0 }),
      ...it(Ao({ modelValue: null, role: 'combobox' }), [
        'validationValue',
        'dirty',
        'appendInnerIcon'
      ]),
      ...cn({ transition: !1 })
    },
    'VCombobox'
  ),
  uC = j()({
    name: 'VCombobox',
    props: sC(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      'update:search': (e) => !0,
      'update:menu': (e) => !0
    },
    setup(e, t) {
      var ge
      let { emit: n, slots: a } = t
      const { t: l } = Je(),
        i = J(),
        o = se(!1),
        r = se(!0),
        s = se(!1),
        u = J(),
        c = J(),
        f = be(e, 'menu'),
        v = b({
          get: () => f.value,
          set: (Z) => {
            var C
            ;(f.value && !Z && (C = u.value) != null && C.ΨopenChildren) || (f.value = Z)
          }
        }),
        m = se(-1)
      let g = !1
      const h = b(() => {
          var Z
          return (Z = i.value) == null ? void 0 : Z.color
        }),
        y = b(() => (v.value ? e.closeText : e.openText)),
        { items: S, transformIn: p, transformOut: A } = gu(e),
        { textColorClasses: T, textColorStyles: w } = yt(h),
        x = be(
          e,
          'modelValue',
          [],
          (Z) => p(Xe(Z)),
          (Z) => {
            const C = A(Z)
            return e.multiple ? C : C[0] ?? null
          }
        ),
        V = Vo(),
        _ = b(() => !!(e.chips || a.chip)),
        k = b(() => _.value || !!a.selection),
        P = se(
          !e.multiple && !k.value ? ((ge = x.value[0]) == null ? void 0 : ge.title) ?? '' : ''
        ),
        E = b({
          get: () => P.value,
          set: (Z) => {
            var C
            if (
              ((P.value = Z ?? ''),
              !e.multiple && !k.value && (x.value = [Wn(e, Z)]),
              Z && e.multiple && (C = e.delimiters) != null && C.length)
            ) {
              const B = Z.split(new RegExp(`(?:${e.delimiters.join('|')})+`))
              B.length > 1 &&
                (B.forEach((M) => {
                  ;(M = M.trim()), M && R(Wn(e, M))
                }),
                (P.value = ''))
            }
            Z || (m.value = -1), (r.value = !Z)
          }
        }),
        I = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(x.value)
            : typeof e.counterValue == 'number'
              ? e.counterValue
              : e.multiple
                ? x.value.length
                : E.value.length
        )
      de(P, (Z) => {
        g ? Te(() => (g = !1)) : o.value && !v.value && (v.value = !0), n('update:search', Z)
      }),
        de(x, (Z) => {
          var C
          !e.multiple && !k.value && (P.value = ((C = Z[0]) == null ? void 0 : C.title) ?? '')
        })
      const { filteredItems: D, getMatches: L } = vi(e, S, () => (r.value ? '' : E.value)),
        W = b(() =>
          e.hideSelected
            ? D.value.filter((Z) => !x.value.some((C) => C.value === Z.value))
            : D.value
        ),
        Y = b(() => x.value.map((Z) => Z.value)),
        te = b(() => {
          var C
          return (
            (e.autoSelectFirst === !0 ||
              (e.autoSelectFirst === 'exact' &&
                E.value === ((C = W.value[0]) == null ? void 0 : C.title))) &&
            W.value.length > 0 &&
            !r.value &&
            !s.value
          )
        }),
        F = b(
          () =>
            (e.hideNoData && !W.value.length) ||
            e.readonly ||
            (V == null ? void 0 : V.isReadonly.value)
        ),
        q = J(),
        { onListScroll: O, onListKeydown: z } = wu(q, i)
      function ee(Z) {
        ;(g = !0), e.openOnClear && (v.value = !0)
      }
      function he() {
        F.value || (v.value = !0)
      }
      function Se(Z) {
        F.value || (o.value && (Z.preventDefault(), Z.stopPropagation()), (v.value = !v.value))
      }
      function ue(Z) {
        var M
        if (D0(Z) || e.readonly || (V != null && V.isReadonly.value)) return
        const C = i.value.selectionStart,
          B = x.value.length
        if (
          ((m.value > -1 || ['Enter', 'ArrowDown', 'ArrowUp'].includes(Z.key)) &&
            Z.preventDefault(),
          ['Enter', 'ArrowDown'].includes(Z.key) && (v.value = !0),
          ['Escape'].includes(Z.key) && (v.value = !1),
          ['Enter', 'Escape', 'Tab'].includes(Z.key) &&
            (te.value && ['Enter', 'Tab'].includes(Z.key) && R(D.value[0]), (r.value = !0)),
          Z.key === 'ArrowDown' && te.value && ((M = q.value) == null || M.focus('next')),
          Z.key === 'Enter' && E.value && (R(Wn(e, E.value)), k.value && (P.value = '')),
          ['Backspace', 'Delete'].includes(Z.key))
        ) {
          if (!e.multiple && k.value && x.value.length > 0 && !E.value) return R(x.value[0], !1)
          if (~m.value) {
            const H = m.value
            R(x.value[m.value], !1), (m.value = H >= B - 1 ? B - 2 : H)
          } else Z.key === 'Backspace' && !E.value && (m.value = B - 1)
        }
        if (e.multiple) {
          if (Z.key === 'ArrowLeft') {
            if (m.value < 0 && C > 0) return
            const H = m.value > -1 ? m.value - 1 : B - 1
            x.value[H]
              ? (m.value = H)
              : ((m.value = -1), i.value.setSelectionRange(E.value.length, E.value.length))
          }
          if (Z.key === 'ArrowRight') {
            if (m.value < 0) return
            const H = m.value + 1
            x.value[H] ? (m.value = H) : ((m.value = -1), i.value.setSelectionRange(0, 0))
          }
        }
      }
      function Q() {
        var Z
        o.value && ((r.value = !0), (Z = i.value) == null || Z.focus())
      }
      function R(Z) {
        let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
        if (!(!Z || Z.props.disabled))
          if (e.multiple) {
            const B = x.value.findIndex((H) => e.valueComparator(H.value, Z.value)),
              M = C ?? !~B
            if (~B) {
              const H = M ? [...x.value, Z] : [...x.value]
              H.splice(B, 1), (x.value = H)
            } else M && (x.value = [...x.value, Z])
            e.clearOnSelect && (E.value = '')
          } else {
            const B = C !== !1
            ;(x.value = B ? [Z] : []),
              (P.value = B && !k.value ? Z.title : ''),
              Te(() => {
                ;(v.value = !1), (r.value = !0)
              })
          }
      }
      function oe(Z) {
        ;(o.value = !0),
          setTimeout(() => {
            s.value = !0
          })
      }
      function ne(Z) {
        s.value = !1
      }
      function U(Z) {
        ;(Z == null || (Z === '' && !e.multiple && !k.value)) && (x.value = [])
      }
      return (
        de(o, (Z, C) => {
          if (!(Z || Z === C)) {
            if (
              ((m.value = -1),
              (v.value = !1),
              te.value &&
                !s.value &&
                !x.value.some((B) => {
                  let { value: M } = B
                  return M === W.value[0].value
                }))
            ) {
              R(W.value[0])
              return
            }
            if (E.value) {
              if (e.multiple) {
                R(Wn(e, E.value))
                return
              }
              if (!k.value) return
              x.value.some((B) => {
                let { title: M } = B
                return M === E.value
              })
                ? (P.value = '')
                : R(Wn(e, E.value))
            }
          }
        }),
        de(v, () => {
          if (!e.hideSelected && v.value && x.value.length) {
            const Z = W.value.findIndex((C) =>
              x.value.some((B) => e.valueComparator(B.value, C.value))
            )
            Le &&
              window.requestAnimationFrame(() => {
                var C
                Z >= 0 && ((C = c.value) == null || C.scrollToIndex(Z))
              })
          }
        }),
        de(
          () => e.items,
          (Z, C) => {
            v.value || (o.value && !C.length && Z.length && (v.value = !0))
          }
        ),
        K(() => {
          const Z = !!(
              !e.hideNoData ||
              W.value.length ||
              a['prepend-item'] ||
              a['append-item'] ||
              a['no-data']
            ),
            C = x.value.length > 0,
            B = ma.filterProps(e)
          return d(
            ma,
            X({ ref: i }, B, {
              modelValue: E.value,
              'onUpdate:modelValue': [(M) => (E.value = M), U],
              focused: o.value,
              'onUpdate:focused': (M) => (o.value = M),
              validationValue: x.externalValue,
              counterValue: I.value,
              dirty: C,
              class: [
                'v-combobox',
                {
                  'v-combobox--active-menu': v.value,
                  'v-combobox--chips': !!e.chips,
                  'v-combobox--selection-slot': !!k.value,
                  'v-combobox--selecting-index': m.value > -1,
                  [`v-combobox--${e.multiple ? 'multiple' : 'single'}`]: !0
                },
                e.class
              ],
              style: e.style,
              readonly: e.readonly,
              placeholder: C ? void 0 : e.placeholder,
              'onClick:clear': ee,
              'onMousedown:control': he,
              onKeydown: ue
            }),
            {
              ...a,
              default: () =>
                d(me, null, [
                  d(
                    Za,
                    X(
                      {
                        ref: u,
                        modelValue: v.value,
                        'onUpdate:modelValue': (M) => (v.value = M),
                        activator: 'parent',
                        contentClass: 'v-combobox__content',
                        disabled: F.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterLeave: Q
                      },
                      e.menuProps
                    ),
                    {
                      default: () => [
                        Z &&
                          d(
                            Po,
                            X(
                              {
                                ref: q,
                                selected: Y.value,
                                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                                onMousedown: (M) => M.preventDefault(),
                                onKeydown: z,
                                onFocusin: oe,
                                onFocusout: ne,
                                onScrollPassive: O,
                                tabindex: '-1',
                                'aria-live': 'polite',
                                color: e.itemColor ?? e.color
                              },
                              e.listProps
                            ),
                            {
                              default: () => {
                                var M, H, G
                                return [
                                  (M = a['prepend-item']) == null ? void 0 : M.call(a),
                                  !W.value.length &&
                                    !e.hideNoData &&
                                    (((H = a['no-data']) == null ? void 0 : H.call(a)) ??
                                      d(Tn, { title: l(e.noDataText) }, null)),
                                  d(
                                    To,
                                    { ref: c, renderless: !0, items: W.value },
                                    {
                                      default: (ie) => {
                                        var ye
                                        let { item: le, index: re, itemRef: ce } = ie
                                        const ae = X(le.props, {
                                          ref: ce,
                                          key: re,
                                          active: te.value && re === 0 ? !0 : void 0,
                                          onClick: () => R(le, null)
                                        })
                                        return (
                                          ((ye = a.item) == null
                                            ? void 0
                                            : ye.call(a, { item: le, index: re, props: ae })) ??
                                          d(Tn, X(ae, { role: 'option' }), {
                                            prepend: (ke) => {
                                              let { isSelected: pe } = ke
                                              return d(me, null, [
                                                e.multiple && !e.hideSelected
                                                  ? d(
                                                      An,
                                                      {
                                                        key: le.value,
                                                        modelValue: pe,
                                                        ripple: !1,
                                                        tabindex: '-1'
                                                      },
                                                      null
                                                    )
                                                  : void 0,
                                                le.props.prependAvatar &&
                                                  d(Xt, { image: le.props.prependAvatar }, null),
                                                le.props.prependIcon &&
                                                  d(Me, { icon: le.props.prependIcon }, null)
                                              ])
                                            },
                                            title: () => {
                                              var ke, pe
                                              return r.value
                                                ? le.title
                                                : rC(
                                                    le.title,
                                                    (ke = L(le)) == null ? void 0 : ke.title,
                                                    ((pe = E.value) == null ? void 0 : pe.length) ??
                                                      0
                                                  )
                                            }
                                          })
                                        )
                                      }
                                    }
                                  ),
                                  (G = a['append-item']) == null ? void 0 : G.call(a)
                                ]
                              }
                            }
                          )
                      ]
                    }
                  ),
                  x.value.map((M, H) => {
                    function G(ce) {
                      ce.stopPropagation(), ce.preventDefault(), R(M, !1)
                    }
                    const ie = {
                        'onClick:close': G,
                        onKeydown(ce) {
                          ;(ce.key !== 'Enter' && ce.key !== ' ') ||
                            (ce.preventDefault(), ce.stopPropagation(), G(ce))
                        },
                        onMousedown(ce) {
                          ce.preventDefault(), ce.stopPropagation()
                        },
                        modelValue: !0,
                        'onUpdate:modelValue': void 0
                      },
                      le = _.value ? !!a.chip : !!a.selection,
                      re = le
                        ? ho(
                            _.value
                              ? a.chip({ item: M, index: H, props: ie })
                              : a.selection({ item: M, index: H })
                          )
                        : void 0
                    if (!(le && !re))
                      return d(
                        'div',
                        {
                          key: M.value,
                          class: [
                            'v-combobox__selection',
                            H === m.value && ['v-combobox__selection--selected', T.value]
                          ],
                          style: H === m.value ? w.value : {}
                        },
                        [
                          _.value
                            ? a.chip
                              ? d(
                                  Ae,
                                  {
                                    key: 'chip-defaults',
                                    defaults: {
                                      VChip: {
                                        closable: e.closableChips,
                                        size: 'small',
                                        text: M.title
                                      }
                                    }
                                  },
                                  { default: () => [re] }
                                )
                              : d(
                                  rl,
                                  X(
                                    {
                                      key: 'chip',
                                      closable: e.closableChips,
                                      size: 'small',
                                      text: M.title,
                                      disabled: M.props.disabled
                                    },
                                    ie
                                  ),
                                  null
                                )
                            : re ??
                              d('span', { class: 'v-combobox__selection-text' }, [
                                M.title,
                                e.multiple &&
                                  H < x.value.length - 1 &&
                                  d('span', { class: 'v-combobox__selection-comma' }, [qt(',')])
                              ])
                        ]
                      )
                  })
                ]),
              'append-inner': function () {
                var ie
                for (var M = arguments.length, H = new Array(M), G = 0; G < M; G++)
                  H[G] = arguments[G]
                return d(me, null, [
                  (ie = a['append-inner']) == null ? void 0 : ie.call(a, ...H),
                  (!e.hideNoData || e.items.length) && e.menuIcon
                    ? d(
                        Me,
                        {
                          class: 'v-combobox__menu-icon',
                          icon: e.menuIcon,
                          onMousedown: Se,
                          onClick: Tv,
                          'aria-label': l(y.value),
                          title: l(y.value)
                        },
                        null
                      )
                    : void 0
                ])
              }
            }
          )
        }),
        en(
          {
            isFocused: o,
            isPristine: r,
            menu: v,
            search: E,
            selectionIndex: m,
            filteredItems: D,
            select: R
          },
          i
        )
      )
    }
  }),
  cC = $(
    {
      modelValue: null,
      color: String,
      cancelText: { type: String, default: '$vuetify.confirmEdit.cancel' },
      okText: { type: String, default: '$vuetify.confirmEdit.ok' }
    },
    'VConfirmEdit'
  ),
  dC = j()({
    name: 'VConfirmEdit',
    props: cC(),
    emits: { cancel: () => !0, save: (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = be(e, 'modelValue'),
        i = J()
      Ze(() => {
        i.value = structuredClone(Ce(l.value))
      })
      const { t: o } = Je(),
        r = b(() => Sn(l.value, i.value))
      function s() {
        ;(l.value = i.value), n('save', i.value)
      }
      function u() {
        ;(i.value = structuredClone(Ce(l.value))), n('cancel')
      }
      let c = !1
      K(() => {
        var v
        const f = d(me, null, [
          d(
            De,
            {
              disabled: r.value,
              variant: 'text',
              color: e.color,
              onClick: u,
              text: o(e.cancelText)
            },
            null
          ),
          d(
            De,
            { disabled: r.value, variant: 'text', color: e.color, onClick: s, text: o(e.okText) },
            null
          )
        ])
        return d(me, null, [
          (v = a.default) == null
            ? void 0
            : v.call(a, {
                model: i,
                get actions() {
                  return (c = !0), f
                }
              }),
          !c && f
        ])
      })
    }
  }),
  Ph = $(
    { expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } },
    'DataTable-expand'
  ),
  Ih = Symbol.for('vuetify:datatable:expanded')
function Mo(e) {
  const t = N(e, 'expandOnClick'),
    n = be(
      e,
      'expanded',
      e.expanded,
      (r) => new Set(r),
      (r) => [...r.values()]
    )
  function a(r, s) {
    const u = new Set(n.value)
    s ? u.add(r.value) : u.delete(r.value), (n.value = u)
  }
  function l(r) {
    return n.value.has(r.value)
  }
  function i(r) {
    a(r, !l(r))
  }
  const o = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: i }
  return Fe(Ih, o), o
}
function Ah() {
  const e = Pe(Ih)
  if (!e) throw new Error('foo')
  return e
}
const Pu = $({ groupBy: { type: Array, default: () => [] } }, 'DataTable-group'),
  Th = Symbol.for('vuetify:data-table-group')
function Iu(e) {
  return { groupBy: be(e, 'groupBy') }
}
function Ro(e) {
  const { groupBy: t, sortBy: n } = e,
    a = J(new Set()),
    l = b(() => t.value.map((u) => ({ ...u, order: u.order ?? !1 })).concat(n.value))
  function i(u) {
    return a.value.has(u.id)
  }
  function o(u) {
    const c = new Set(a.value)
    i(u) ? c.delete(u.id) : c.add(u.id), (a.value = c)
  }
  function r(u) {
    function c(f) {
      const v = []
      for (const m of f.items) 'type' in m && m.type === 'group' ? v.push(...c(m)) : v.push(m)
      return v
    }
    return c({ type: 'group', items: u, id: 'dummy', key: 'dummy', value: 'dummy', depth: 0 })
  }
  const s = {
    sortByWithGroups: l,
    toggleGroup: o,
    opened: a,
    groupBy: t,
    extractRows: r,
    isGroupOpen: i
  }
  return Fe(Th, s), s
}
function Eh() {
  const e = Pe(Th)
  if (!e) throw new Error('Missing group!')
  return e
}
function fC(e, t) {
  if (!e.length) return []
  const n = new Map()
  for (const a of e) {
    const l = Rl(a.raw, t)
    n.has(l) || n.set(l, []), n.get(l).push(a)
  }
  return n
}
function Bh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'root'
  if (!t.length) return []
  const l = fC(e, t[0]),
    i = [],
    o = t.slice(1)
  return (
    l.forEach((r, s) => {
      const u = t[0],
        c = `${a}_${u}_${s}`
      i.push({
        depth: n,
        id: c,
        key: u,
        value: s,
        items: o.length ? Bh(r, o, n + 1, c) : r,
        type: 'group'
      })
    }),
    i
  )
}
function Dh(e, t) {
  const n = []
  for (const a of e)
    'type' in a && a.type === 'group'
      ? (a.value != null && n.push(a),
        (t.has(a.id) || a.value == null) && n.push(...Dh(a.items, t)))
      : n.push(a)
  return n
}
function $o(e, t, n) {
  return {
    flatItems: b(() => {
      if (!t.value.length) return e.value
      const l = Bh(
        e.value,
        t.value.map((i) => i.key)
      )
      return Dh(l, n.value)
    })
  }
}
function Oo(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: i } = e
  const o = Qe('VDataTable'),
    r = b(() => ({
      page: t.value,
      itemsPerPage: n.value,
      sortBy: a.value,
      groupBy: l.value,
      search: i.value
    }))
  let s = null
  de(
    r,
    () => {
      Sn(s, r.value) ||
        (s && s.search !== r.value.search && (t.value = 1),
        o.emit('update:options', r.value),
        (s = r.value))
    },
    { deep: !0, immediate: !0 }
  )
}
const Au = $(
    {
      page: { type: [Number, String], default: 1 },
      itemsPerPage: { type: [Number, String], default: 10 }
    },
    'DataTable-paginate'
  ),
  Mh = Symbol.for('vuetify:data-table-pagination')
function Tu(e) {
  const t = be(e, 'page', void 0, (a) => +(a ?? 1)),
    n = be(e, 'itemsPerPage', void 0, (a) => +(a ?? 10))
  return { page: t, itemsPerPage: n }
}
function Eu(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e,
    l = b(() => (n.value === -1 ? 0 : n.value * (t.value - 1))),
    i = b(() => (n.value === -1 ? a.value : Math.min(a.value, l.value + n.value))),
    o = b(() => (n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value)))
  Ze(() => {
    t.value > o.value && (t.value = o.value)
  })
  function r(v) {
    ;(n.value = v), (t.value = 1)
  }
  function s() {
    t.value = et(t.value + 1, 1, o.value)
  }
  function u() {
    t.value = et(t.value - 1, 1, o.value)
  }
  function c(v) {
    t.value = et(v, 1, o.value)
  }
  const f = {
    page: t,
    itemsPerPage: n,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: u,
    setPage: c,
    setItemsPerPage: r
  }
  return Fe(Mh, f), f
}
function vC() {
  const e = Pe(Mh)
  if (!e) throw new Error('Missing pagination!')
  return e
}
function Rh(e) {
  const t = Qe('usePaginatedItems'),
    { items: n, startIndex: a, stopIndex: l, itemsPerPage: i } = e,
    o = b(() => (i.value <= 0 ? n.value : n.value.slice(a.value, l.value)))
  return (
    de(o, (r) => {
      t.emit('update:currentItems', r)
    }),
    { paginatedItems: o }
  )
}
const mC = {
    showSelectAll: !1,
    allSelected: () => [],
    select: (e) => {
      var a
      let { items: t, value: n } = e
      return new Set(n ? [(a = t[0]) == null ? void 0 : a.value] : [])
    },
    selectAll: (e) => {
      let { selected: t } = e
      return t
    }
  },
  $h = {
    showSelectAll: !0,
    allSelected: (e) => {
      let { currentPage: t } = e
      return t
    },
    select: (e) => {
      let { items: t, value: n, selected: a } = e
      for (const l of t) n ? a.add(l.value) : a.delete(l.value)
      return a
    },
    selectAll: (e) => {
      let { value: t, currentPage: n, selected: a } = e
      return $h.select({ items: n, value: t, selected: a })
    }
  },
  Oh = {
    showSelectAll: !0,
    allSelected: (e) => {
      let { allItems: t } = e
      return t
    },
    select: (e) => {
      let { items: t, value: n, selected: a } = e
      for (const l of t) n ? a.add(l.value) : a.delete(l.value)
      return a
    },
    selectAll: (e) => {
      let { value: t, allItems: n, selected: a } = e
      return Oh.select({ items: n, value: t, selected: a })
    }
  },
  Lh = $(
    {
      showSelect: Boolean,
      selectStrategy: { type: [String, Object], default: 'page' },
      modelValue: { type: Array, default: () => [] },
      valueComparator: { type: Function, default: Sn }
    },
    'DataTable-select'
  ),
  Fh = Symbol.for('vuetify:data-table-selection')
function Lo(e, t) {
  let { allItems: n, currentPage: a } = t
  const l = be(
      e,
      'modelValue',
      e.modelValue,
      (y) =>
        new Set(
          Xe(y).map((S) => {
            var p
            return (
              ((p = n.value.find((A) => e.valueComparator(S, A.value))) == null
                ? void 0
                : p.value) ?? S
            )
          })
        ),
      (y) => [...y.values()]
    ),
    i = b(() => n.value.filter((y) => y.selectable)),
    o = b(() => a.value.filter((y) => y.selectable)),
    r = b(() => {
      if (typeof e.selectStrategy == 'object') return e.selectStrategy
      switch (e.selectStrategy) {
        case 'single':
          return mC
        case 'all':
          return Oh
        case 'page':
        default:
          return $h
      }
    })
  function s(y) {
    return Xe(y).every((S) => l.value.has(S.value))
  }
  function u(y) {
    return Xe(y).some((S) => l.value.has(S.value))
  }
  function c(y, S) {
    const p = r.value.select({ items: y, value: S, selected: new Set(l.value) })
    l.value = p
  }
  function f(y) {
    c([y], !s([y]))
  }
  function v(y) {
    const S = r.value.selectAll({
      value: y,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    })
    l.value = S
  }
  const m = b(() => l.value.size > 0),
    g = b(() => {
      const y = r.value.allSelected({ allItems: i.value, currentPage: o.value })
      return !!y.length && s(y)
    }),
    h = {
      toggleSelect: f,
      select: c,
      selectAll: v,
      isSelected: s,
      isSomeSelected: u,
      someSelected: m,
      allSelected: g,
      showSelectAll: r.value.showSelectAll
    }
  return Fe(Fh, h), h
}
function Fo() {
  const e = Pe(Fh)
  if (!e) throw new Error('Missing selection!')
  return e
}
const Nh = $(
    {
      sortBy: { type: Array, default: () => [] },
      customKeySort: Object,
      multiSort: Boolean,
      mustSort: Boolean
    },
    'DataTable-sort'
  ),
  Hh = Symbol.for('vuetify:data-table-sort')
function No(e) {
  const t = be(e, 'sortBy'),
    n = N(e, 'mustSort'),
    a = N(e, 'multiSort')
  return { sortBy: t, mustSort: n, multiSort: a }
}
function Ho(e) {
  const { sortBy: t, mustSort: n, multiSort: a, page: l } = e,
    i = (s) => {
      if (s.key == null) return
      let u = t.value.map((f) => ({ ...f })) ?? []
      const c = u.find((f) => f.key === s.key)
      c
        ? c.order === 'desc'
          ? n.value
            ? (c.order = 'asc')
            : (u = u.filter((f) => f.key !== s.key))
          : (c.order = 'desc')
        : a.value
          ? (u = [...u, { key: s.key, order: 'asc' }])
          : (u = [{ key: s.key, order: 'asc' }]),
        (t.value = u),
        l && (l.value = 1)
    }
  function o(s) {
    return !!t.value.find((u) => u.key === s.key)
  }
  const r = { sortBy: t, toggleSort: i, isSorted: o }
  return Fe(Hh, r), r
}
function zh() {
  const e = Pe(Hh)
  if (!e) throw new Error('Missing sort!')
  return e
}
function Bu(e, t, n, a) {
  const l = Je()
  return {
    sortedItems: b(() => {
      var o, r
      return n.value.length
        ? hC(t.value, n.value, l.current.value, {
            transform: a == null ? void 0 : a.transform,
            sortFunctions: {
              ...e.customKeySort,
              ...((o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value)
            },
            sortRawFunctions:
              (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
          })
        : t.value
    })
  }
}
function hC(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: 'accent', usage: 'sort' })
  return e
    .map((o) => [o, a != null && a.transform ? a.transform(o) : o])
    .sort((o, r) => {
      var s, u
      for (let c = 0; c < t.length; c++) {
        let f = !1
        const v = t[c].key,
          m = t[c].order ?? 'asc'
        if (m === !1) continue
        let g = o[1][v],
          h = r[1][v],
          y = o[0].raw,
          S = r[0].raw
        if (
          (m === 'desc' && (([g, h] = [h, g]), ([y, S] = [S, y])),
          (s = a == null ? void 0 : a.sortRawFunctions) != null && s[v])
        ) {
          const p = a.sortRawFunctions[v](y, S)
          if (p == null) continue
          if (((f = !0), p)) return p
        }
        if ((u = a == null ? void 0 : a.sortFunctions) != null && u[v]) {
          const p = a.sortFunctions[v](g, h)
          if (p == null) continue
          if (((f = !0), p)) return p
        }
        if (!f) {
          if (g instanceof Date && h instanceof Date) return g.getTime() - h.getTime()
          if (
            (([g, h] = [g, h].map((p) => (p != null ? p.toString().toLocaleLowerCase() : p))),
            g !== h)
          )
            return xi(g) && xi(h)
              ? 0
              : xi(g)
                ? -1
                : xi(h)
                  ? 1
                  : !isNaN(g) && !isNaN(h)
                    ? Number(g) - Number(h)
                    : l.compare(g, h)
        }
      }
      return 0
    })
    .map((o) => {
      let [r] = o
      return r
    })
}
const gC = $(
  {
    items: { type: Array, default: () => [] },
    itemValue: { type: [String, Array, Function], default: 'id' },
    itemSelectable: { type: [String, Array, Function], default: null },
    returnObject: Boolean
  },
  'DataIterator-items'
)
function yC(e, t) {
  const n = e.returnObject ? t : ot(t, e.itemValue),
    a = ot(t, e.itemSelectable, !0)
  return { type: 'item', value: n, selectable: a, raw: t }
}
function bC(e, t) {
  const n = []
  for (const a of t) n.push(yC(e, a))
  return n
}
function SC(e) {
  return { items: b(() => bC(e, e.items)) }
}
const pC = $(
    {
      search: String,
      loading: Boolean,
      ...ve(),
      ...gC(),
      ...Lh(),
      ...Nh(),
      ...Au({ itemsPerPage: 5 }),
      ...Ph(),
      ...Pu(),
      ...fi(),
      ..._e(),
      ...cn({ transition: { component: zl, hideOnLeave: !0 } })
    },
    'VDataIterator'
  ),
  kC = j()({
    name: 'VDataIterator',
    props: pC(),
    emits: {
      'update:modelValue': (e) => !0,
      'update:groupBy': (e) => !0,
      'update:page': (e) => !0,
      'update:itemsPerPage': (e) => !0,
      'update:sortBy': (e) => !0,
      'update:options': (e) => !0,
      'update:expanded': (e) => !0,
      'update:currentItems': (e) => !0
    },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'groupBy'),
        l = N(e, 'search'),
        { items: i } = SC(e),
        { filteredItems: o } = vi(e, i, l, { transform: (z) => z.raw }),
        { sortBy: r, multiSort: s, mustSort: u } = No(e),
        { page: c, itemsPerPage: f } = Tu(e),
        { toggleSort: v } = Ho({ sortBy: r, multiSort: s, mustSort: u, page: c }),
        {
          sortByWithGroups: m,
          opened: g,
          extractRows: h,
          isGroupOpen: y,
          toggleGroup: S
        } = Ro({ groupBy: a, sortBy: r }),
        { sortedItems: p } = Bu(e, o, m, { transform: (z) => z.raw }),
        { flatItems: A } = $o(p, a, g),
        T = b(() => A.value.length),
        {
          startIndex: w,
          stopIndex: x,
          pageCount: V,
          prevPage: _,
          nextPage: k,
          setItemsPerPage: P,
          setPage: E
        } = Eu({ page: c, itemsPerPage: f, itemsLength: T }),
        { paginatedItems: I } = Rh({ items: A, startIndex: w, stopIndex: x, itemsPerPage: f }),
        D = b(() => h(I.value)),
        {
          isSelected: L,
          select: W,
          selectAll: Y,
          toggleSelect: te
        } = Lo(e, { allItems: i, currentPage: D }),
        { isExpanded: F, toggleExpand: q } = Mo(e)
      Oo({ page: c, itemsPerPage: f, sortBy: r, groupBy: a, search: l })
      const O = b(() => ({
        page: c.value,
        itemsPerPage: f.value,
        sortBy: r.value,
        pageCount: V.value,
        toggleSort: v,
        prevPage: _,
        nextPage: k,
        setPage: E,
        setItemsPerPage: P,
        isSelected: L,
        select: W,
        selectAll: Y,
        toggleSelect: te,
        isExpanded: F,
        toggleExpand: q,
        isGroupOpen: y,
        toggleGroup: S,
        items: D.value,
        groupedItems: I.value
      }))
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-data-iterator', { 'v-data-iterator--loading': e.loading }, e.class],
              style: e.style
            },
            {
              default: () => {
                var z, ee
                return [
                  (z = n.header) == null ? void 0 : z.call(n, O.value),
                  d(
                    Ct,
                    { transition: e.transition },
                    {
                      default: () => {
                        var he, Se
                        return [
                          e.loading
                            ? d(
                                ii,
                                { key: 'loader', name: 'v-data-iterator', active: !0 },
                                {
                                  default: (ue) => {
                                    var Q
                                    return (Q = n.loader) == null ? void 0 : Q.call(n, ue)
                                  }
                                }
                              )
                            : d('div', { key: 'items' }, [
                                I.value.length
                                  ? (Se = n.default) == null
                                    ? void 0
                                    : Se.call(n, O.value)
                                  : (he = n['no-data']) == null
                                    ? void 0
                                    : he.call(n)
                              ])
                        ]
                      }
                    }
                  ),
                  (ee = n.footer) == null ? void 0 : ee.call(n, O.value)
                ]
              }
            }
          )
        ),
        {}
      )
    }
  })
function wC() {
  const e = J([])
  Kf(() => (e.value = []))
  function t(n, a) {
    e.value[a] = n
  }
  return { refs: e, updateRef: t }
}
const xC = $(
    {
      activeColor: String,
      start: { type: [Number, String], default: 1 },
      modelValue: { type: Number, default: (e) => e.start },
      disabled: Boolean,
      length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 },
      totalVisible: [Number, String],
      firstIcon: { type: xe, default: '$first' },
      prevIcon: { type: xe, default: '$prev' },
      nextIcon: { type: xe, default: '$next' },
      lastIcon: { type: xe, default: '$last' },
      ariaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.root' },
      pageAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.page' },
      currentPageAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.currentPage' },
      firstAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.first' },
      previousAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.previous' },
      nextAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.next' },
      lastAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.last' },
      ellipsis: { type: String, default: '...' },
      showFirstLastPage: Boolean,
      ...zt(),
      ...ve(),
      ...ft(),
      ...rt(),
      ...Ue(),
      ...wn(),
      ..._e({ tag: 'nav' }),
      ...Ee(),
      ...Jt({ variant: 'text' })
    },
    'VPagination'
  ),
  is = j()({
    name: 'VPagination',
    props: xC(),
    emits: {
      'update:modelValue': (e) => !0,
      first: (e) => !0,
      prev: (e) => !0,
      next: (e) => !0,
      last: (e) => !0
    },
    setup(e, t) {
      let { slots: n, emit: a } = t
      const l = be(e, 'modelValue'),
        { t: i, n: o } = Je(),
        { isRtl: r } = ut(),
        { themeClasses: s } = Re(e),
        { width: u } = un(),
        c = se(-1)
      Ke(void 0, { scoped: !0 })
      const { resizeRef: f } = on((_) => {
          if (!_.length) return
          const { target: k, contentRect: P } = _[0],
            E = k.querySelector('.v-pagination__list > *')
          if (!E) return
          const I = P.width,
            D = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2
          c.value = h(I, D)
        }),
        v = b(() => parseInt(e.length, 10)),
        m = b(() => parseInt(e.start, 10)),
        g = b(() =>
          e.totalVisible != null
            ? parseInt(e.totalVisible, 10)
            : c.value >= 0
              ? c.value
              : h(u.value, 58)
        )
      function h(_, k) {
        const P = e.showFirstLastPage ? 5 : 3
        return Math.max(0, Math.floor(+((_ - k * P) / k).toFixed(2)))
      }
      const y = b(() => {
        if (v.value <= 0 || isNaN(v.value) || v.value > Number.MAX_SAFE_INTEGER) return []
        if (g.value <= 0) return []
        if (g.value === 1) return [l.value]
        if (v.value <= g.value) return hn(v.value, m.value)
        const _ = g.value % 2 === 0,
          k = _ ? g.value / 2 : Math.floor(g.value / 2),
          P = _ ? k : k + 1,
          E = v.value - k
        if (P - l.value >= 0) return [...hn(Math.max(1, g.value - 1), m.value), e.ellipsis, v.value]
        if (l.value - E >= (_ ? 1 : 0)) {
          const I = g.value - 1,
            D = v.value - I + m.value
          return [m.value, e.ellipsis, ...hn(I, D)]
        } else {
          const I = Math.max(1, g.value - 3),
            D = I === 1 ? l.value : l.value - Math.ceil(I / 2) + m.value
          return [m.value, e.ellipsis, ...hn(I, D), e.ellipsis, v.value]
        }
      })
      function S(_, k, P) {
        _.preventDefault(), (l.value = k), P && a(P, k)
      }
      const { refs: p, updateRef: A } = wC()
      Ke({
        VPaginationBtn: {
          color: N(e, 'color'),
          border: N(e, 'border'),
          density: N(e, 'density'),
          size: N(e, 'size'),
          variant: N(e, 'variant'),
          rounded: N(e, 'rounded'),
          elevation: N(e, 'elevation')
        }
      })
      const T = b(() =>
          y.value.map((_, k) => {
            const P = (E) => A(E, k)
            if (typeof _ == 'string')
              return {
                isActive: !1,
                key: `ellipsis-${k}`,
                page: _,
                props: { ref: P, ellipsis: !0, icon: !0, disabled: !0 }
              }
            {
              const E = _ === l.value
              return {
                isActive: E,
                key: _,
                page: o(_),
                props: {
                  ref: P,
                  ellipsis: !1,
                  icon: !0,
                  disabled: !!e.disabled || +e.length < 2,
                  color: E ? e.activeColor : e.color,
                  'aria-current': E,
                  'aria-label': i(E ? e.currentPageAriaLabel : e.pageAriaLabel, _),
                  onClick: (I) => S(I, _)
                }
              }
            }
          })
        ),
        w = b(() => {
          const _ = !!e.disabled || l.value <= m.value,
            k = !!e.disabled || l.value >= m.value + v.value - 1
          return {
            first: e.showFirstLastPage
              ? {
                  icon: r.value ? e.lastIcon : e.firstIcon,
                  onClick: (P) => S(P, m.value, 'first'),
                  disabled: _,
                  'aria-label': i(e.firstAriaLabel),
                  'aria-disabled': _
                }
              : void 0,
            prev: {
              icon: r.value ? e.nextIcon : e.prevIcon,
              onClick: (P) => S(P, l.value - 1, 'prev'),
              disabled: _,
              'aria-label': i(e.previousAriaLabel),
              'aria-disabled': _
            },
            next: {
              icon: r.value ? e.prevIcon : e.nextIcon,
              onClick: (P) => S(P, l.value + 1, 'next'),
              disabled: k,
              'aria-label': i(e.nextAriaLabel),
              'aria-disabled': k
            },
            last: e.showFirstLastPage
              ? {
                  icon: r.value ? e.firstIcon : e.lastIcon,
                  onClick: (P) => S(P, m.value + v.value - 1, 'last'),
                  disabled: k,
                  'aria-label': i(e.lastAriaLabel),
                  'aria-disabled': k
                }
              : void 0
          }
        })
      function x() {
        var k
        const _ = l.value - m.value
        ;(k = p.value[_]) == null || k.$el.focus()
      }
      function V(_) {
        _.key === Dr.left && !e.disabled && l.value > +e.start
          ? ((l.value = l.value - 1), Te(x))
          : _.key === Dr.right &&
            !e.disabled &&
            l.value < m.value + v.value - 1 &&
            ((l.value = l.value + 1), Te(x))
      }
      return (
        K(() =>
          d(
            e.tag,
            {
              ref: f,
              class: ['v-pagination', s.value, e.class],
              style: e.style,
              role: 'navigation',
              'aria-label': i(e.ariaLabel),
              onKeydown: V,
              'data-test': 'v-pagination-root'
            },
            {
              default: () => [
                d('ul', { class: 'v-pagination__list' }, [
                  e.showFirstLastPage &&
                    d(
                      'li',
                      {
                        key: 'first',
                        class: 'v-pagination__first',
                        'data-test': 'v-pagination-first'
                      },
                      [
                        n.first
                          ? n.first(w.value.first)
                          : d(De, X({ _as: 'VPaginationBtn' }, w.value.first), null)
                      ]
                    ),
                  d(
                    'li',
                    { key: 'prev', class: 'v-pagination__prev', 'data-test': 'v-pagination-prev' },
                    [
                      n.prev
                        ? n.prev(w.value.prev)
                        : d(De, X({ _as: 'VPaginationBtn' }, w.value.prev), null)
                    ]
                  ),
                  T.value.map((_, k) =>
                    d(
                      'li',
                      {
                        key: _.key,
                        class: [
                          'v-pagination__item',
                          { 'v-pagination__item--is-active': _.isActive }
                        ],
                        'data-test': 'v-pagination-item'
                      },
                      [
                        n.item
                          ? n.item(_)
                          : d(De, X({ _as: 'VPaginationBtn' }, _.props), {
                              default: () => [_.page]
                            })
                      ]
                    )
                  ),
                  d(
                    'li',
                    { key: 'next', class: 'v-pagination__next', 'data-test': 'v-pagination-next' },
                    [
                      n.next
                        ? n.next(w.value.next)
                        : d(De, X({ _as: 'VPaginationBtn' }, w.value.next), null)
                    ]
                  ),
                  e.showFirstLastPage &&
                    d(
                      'li',
                      {
                        key: 'last',
                        class: 'v-pagination__last',
                        'data-test': 'v-pagination-last'
                      },
                      [
                        n.last
                          ? n.last(w.value.last)
                          : d(De, X({ _as: 'VPaginationBtn' }, w.value.last), null)
                      ]
                    )
                ])
              ]
            }
          )
        ),
        {}
      )
    }
  }),
  Du = $(
    {
      prevIcon: { type: String, default: '$prev' },
      nextIcon: { type: String, default: '$next' },
      firstIcon: { type: String, default: '$first' },
      lastIcon: { type: String, default: '$last' },
      itemsPerPageText: { type: String, default: '$vuetify.dataFooter.itemsPerPageText' },
      pageText: { type: String, default: '$vuetify.dataFooter.pageText' },
      firstPageLabel: { type: String, default: '$vuetify.dataFooter.firstPage' },
      prevPageLabel: { type: String, default: '$vuetify.dataFooter.prevPage' },
      nextPageLabel: { type: String, default: '$vuetify.dataFooter.nextPage' },
      lastPageLabel: { type: String, default: '$vuetify.dataFooter.lastPage' },
      itemsPerPageOptions: {
        type: Array,
        default: () => [
          { value: 10, title: '10' },
          { value: 25, title: '25' },
          { value: 50, title: '50' },
          { value: 100, title: '100' },
          { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' }
        ]
      },
      showCurrentPage: Boolean
    },
    'VDataTableFooter'
  ),
  Kl = j()({
    name: 'VDataTableFooter',
    props: Du(),
    setup(e, t) {
      let { slots: n } = t
      const { t: a } = Je(),
        {
          page: l,
          pageCount: i,
          startIndex: o,
          stopIndex: r,
          itemsLength: s,
          itemsPerPage: u,
          setItemsPerPage: c
        } = vC(),
        f = b(() =>
          e.itemsPerPageOptions.map((v) =>
            typeof v == 'number'
              ? { value: v, title: v === -1 ? a('$vuetify.dataFooter.itemsPerPageAll') : String(v) }
              : { ...v, title: isNaN(Number(v.title)) ? a(v.title) : v.title }
          )
        )
      return (
        K(() => {
          var m
          const v = is.filterProps(e)
          return d('div', { class: 'v-data-table-footer' }, [
            (m = n.prepend) == null ? void 0 : m.call(n),
            d('div', { class: 'v-data-table-footer__items-per-page' }, [
              d('span', null, [a(e.itemsPerPageText)]),
              d(
                Cu,
                {
                  items: f.value,
                  modelValue: u.value,
                  'onUpdate:modelValue': (g) => c(Number(g)),
                  density: 'compact',
                  variant: 'outlined',
                  'hide-details': !0
                },
                null
              )
            ]),
            d('div', { class: 'v-data-table-footer__info' }, [
              d('div', null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])
            ]),
            d('div', { class: 'v-data-table-footer__pagination' }, [
              d(
                is,
                X(
                  {
                    modelValue: l.value,
                    'onUpdate:modelValue': (g) => (l.value = g),
                    density: 'comfortable',
                    'first-aria-label': e.firstPageLabel,
                    'last-aria-label': e.lastPageLabel,
                    length: i.value,
                    'next-aria-label': e.nextPageLabel,
                    'previous-aria-label': e.prevPageLabel,
                    rounded: !0,
                    'show-first-last-page': !0,
                    'total-visible': e.showCurrentPage ? 1 : 0,
                    variant: 'plain'
                  },
                  v
                ),
                null
              )
            ])
          ])
        }),
        {}
      )
    }
  }),
  Zi = fS(
    {
      align: { type: String, default: 'start' },
      fixed: Boolean,
      fixedOffset: [Number, String],
      height: [Number, String],
      lastFixed: Boolean,
      noPadding: Boolean,
      tag: String,
      width: [Number, String],
      maxWidth: [Number, String],
      nowrap: Boolean
    },
    (e, t) => {
      let { slots: n } = t
      const a = e.tag ?? 'td'
      return d(
        a,
        {
          class: [
            'v-data-table__td',
            {
              'v-data-table-column--fixed': e.fixed,
              'v-data-table-column--last-fixed': e.lastFixed,
              'v-data-table-column--no-padding': e.noPadding,
              'v-data-table-column--nowrap': e.nowrap
            },
            `v-data-table-column--align-${e.align}`
          ],
          style: {
            height: fe(e.height),
            width: fe(e.width),
            maxWidth: fe(e.maxWidth),
            left: fe(e.fixedOffset || null)
          }
        },
        {
          default: () => {
            var l
            return [(l = n.default) == null ? void 0 : l.call(n)]
          }
        }
      )
    }
  ),
  CC = $({ headers: Array }, 'DataTable-header'),
  jh = Symbol.for('vuetify:data-table-headers'),
  Wh = { title: '', sortable: !1 },
  _C = { ...Wh, width: 48 }
function VC() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({
    element: n,
    priority: 0
  }))
  return {
    enqueue: (n, a) => {
      let l = !1
      for (let i = 0; i < t.length; i++)
        if (t[i].priority > a) {
          t.splice(i, 0, { element: n, priority: a }), (l = !0)
          break
        }
      l || t.push({ element: n, priority: a })
    },
    size: () => t.length,
    count: () => {
      let n = 0
      if (!t.length) return 0
      const a = Math.floor(t[0].priority)
      for (let l = 0; l < t.length; l++) Math.floor(t[l].priority) === a && (n += 1)
      return n
    },
    dequeue: () => t.shift()
  }
}
function os(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
  if (!e.children) t.push(e)
  else for (const n of e.children) os(n, t)
  return t
}
function Uh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set()
  for (const n of e) n.key && t.add(n.key), n.children && Uh(n.children, t)
  return t
}
function PC(e) {
  if (e.key) {
    if (e.key === 'data-table-group') return Wh
    if (['data-table-expand', 'data-table-select'].includes(e.key)) return _C
  }
}
function Mu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
  return e.children ? Math.max(t, ...e.children.map((n) => Mu(n, t + 1))) : t
}
function IC(e) {
  let t = !1
  function n(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    if (i)
      if ((o && (i.fixed = !0), i.fixed))
        if (i.children) for (let r = i.children.length - 1; r >= 0; r--) n(i.children[r], !0)
        else t ? isNaN(+i.width) && (`${i.key}`, void 0) : (i.lastFixed = !0), (t = !0)
      else if (i.children) for (let r = i.children.length - 1; r >= 0; r--) n(i.children[r])
      else t = !1
  }
  for (let i = e.length - 1; i >= 0; i--) n(e[i])
  function a(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
    if (!i) return o
    if (i.children) {
      i.fixedOffset = o
      for (const r of i.children) o = a(r, o)
    } else i.fixed && ((i.fixedOffset = o), (o += parseFloat(i.width || '0') || 0))
    return o
  }
  let l = 0
  for (const i of e) l = a(i, l)
}
function AC(e, t) {
  const n = []
  let a = 0
  const l = VC(e)
  for (; l.size() > 0; ) {
    let o = l.count()
    const r = []
    let s = 1
    for (; o > 0; ) {
      const { element: u, priority: c } = l.dequeue(),
        f = t - a - Mu(u)
      if ((r.push({ ...u, rowspan: f ?? 1, colspan: u.children ? os(u).length : 1 }), u.children))
        for (const v of u.children) {
          const m = (c % 1) + s / Math.pow(10, a + 2)
          l.enqueue(v, a + f + m)
        }
      ;(s += 1), (o -= 1)
    }
    ;(a += 1), n.push(r)
  }
  return { columns: e.map((o) => os(o)).flat(), headers: n }
}
function Gh(e) {
  const t = []
  for (const n of e) {
    const a = { ...PC(n), ...n },
      l = a.key ?? (typeof a.value == 'string' ? a.value : null),
      i = a.value ?? l ?? null,
      o = {
        ...a,
        key: l,
        value: i,
        sortable: a.sortable ?? (a.key != null || !!a.sort),
        children: a.children ? Gh(a.children) : void 0
      }
    t.push(o)
  }
  return t
}
function Ru(e, t) {
  const n = J([]),
    a = J([]),
    l = J({}),
    i = J({}),
    o = J({})
  Ze(() => {
    var h, y, S
    const u = (
        e.headers || Object.keys(e.items[0] ?? {}).map((p) => ({ key: p, title: bn(p) }))
      ).slice(),
      c = Uh(u)
    ;(h = t == null ? void 0 : t.groupBy) != null &&
      h.value.length &&
      !c.has('data-table-group') &&
      u.unshift({ key: 'data-table-group', title: 'Group' }),
      (y = t == null ? void 0 : t.showSelect) != null &&
        y.value &&
        !c.has('data-table-select') &&
        u.unshift({ key: 'data-table-select' }),
      (S = t == null ? void 0 : t.showExpand) != null &&
        S.value &&
        !c.has('data-table-expand') &&
        u.push({ key: 'data-table-expand' })
    const f = Gh(u)
    IC(f)
    const v = Math.max(...f.map((p) => Mu(p))) + 1,
      m = AC(f, v)
    ;(n.value = m.headers), (a.value = m.columns)
    const g = m.headers.flat(1)
    for (const p of g)
      p.key &&
        (p.sortable &&
          (p.sort && (l.value[p.key] = p.sort), p.sortRaw && (i.value[p.key] = p.sortRaw)),
        p.filter && (o.value[p.key] = p.filter))
  })
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: i, filterFunctions: o }
  return Fe(jh, r), r
}
function zo() {
  const e = Pe(jh)
  if (!e) throw new Error('Missing headers!')
  return e
}
const Yh = $(
    {
      color: String,
      sticky: Boolean,
      multiSort: Boolean,
      sortAscIcon: { type: xe, default: '$sortAsc' },
      sortDescIcon: { type: xe, default: '$sortDesc' },
      headerProps: { type: Object },
      ...nl(),
      ...xo()
    },
    'VDataTableHeaders'
  ),
  ba = j()({
    name: 'VDataTableHeaders',
    props: Yh(),
    setup(e, t) {
      let { slots: n } = t
      const { t: a } = Je(),
        { toggleSort: l, sortBy: i, isSorted: o } = zh(),
        { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = Fo(),
        { columns: f, headers: v } = zo(),
        { loaderClasses: m } = li(e)
      function g(_, k) {
        if (!(!e.sticky && !_.fixed))
          return {
            position: 'sticky',
            left: _.fixed ? fe(_.fixedOffset) : void 0,
            top: e.sticky ? `calc(var(--v-table-header-height) * ${k})` : void 0
          }
      }
      function h(_) {
        const k = i.value.find((P) => P.key === _.key)
        return k ? (k.order === 'asc' ? e.sortAscIcon : e.sortDescIcon) : e.sortAscIcon
      }
      const { backgroundColorClasses: y, backgroundColorStyles: S } = Ne(e, 'color'),
        { displayClasses: p, mobile: A } = un(e),
        T = b(() => ({
          headers: v.value,
          columns: f.value,
          toggleSort: l,
          isSorted: o,
          sortBy: i.value,
          someSelected: r.value,
          allSelected: s.value,
          selectAll: u,
          getSortIcon: h
        })),
        w = b(() => [
          'v-data-table__th',
          { 'v-data-table__th--sticky': e.sticky },
          p.value,
          m.value
        ]),
        x = (_) => {
          let { column: k, x: P, y: E } = _
          const I = k.key === 'data-table-select' || k.key === 'data-table-expand',
            D = X(e.headerProps ?? {}, k.headerProps ?? {})
          return d(
            Zi,
            X(
              {
                tag: 'th',
                align: k.align,
                class: [
                  {
                    'v-data-table__th--sortable': k.sortable,
                    'v-data-table__th--sorted': o(k),
                    'v-data-table__th--fixed': k.fixed
                  },
                  ...w.value
                ],
                style: {
                  width: fe(k.width),
                  minWidth: fe(k.minWidth),
                  maxWidth: fe(k.maxWidth),
                  ...g(k, E)
                },
                colspan: k.colspan,
                rowspan: k.rowspan,
                onClick: k.sortable ? () => l(k) : void 0,
                fixed: k.fixed,
                nowrap: k.nowrap,
                lastFixed: k.lastFixed,
                noPadding: I
              },
              D
            ),
            {
              default: () => {
                var Y
                const L = `header.${k.key}`,
                  W = {
                    column: k,
                    selectAll: u,
                    isSorted: o,
                    toggleSort: l,
                    sortBy: i.value,
                    someSelected: r.value,
                    allSelected: s.value,
                    getSortIcon: h
                  }
                return n[L]
                  ? n[L](W)
                  : k.key === 'data-table-select'
                    ? ((Y = n['header.data-table-select']) == null ? void 0 : Y.call(n, W)) ??
                      (c &&
                        d(
                          An,
                          {
                            modelValue: s.value,
                            indeterminate: r.value && !s.value,
                            'onUpdate:modelValue': u
                          },
                          null
                        ))
                    : d('div', { class: 'v-data-table-header__content' }, [
                        d('span', null, [k.title]),
                        k.sortable &&
                          d(
                            Me,
                            { key: 'icon', class: 'v-data-table-header__sort-icon', icon: h(k) },
                            null
                          ),
                        e.multiSort &&
                          o(k) &&
                          d(
                            'div',
                            {
                              key: 'badge',
                              class: ['v-data-table-header__sort-badge', ...y.value],
                              style: S.value
                            },
                            [i.value.findIndex((te) => te.key === k.key) + 1]
                          )
                      ])
              }
            }
          )
        },
        V = () => {
          const _ = X(e.headerProps ?? {} ?? {}),
            k = b(() => f.value.filter((E) => (E == null ? void 0 : E.sortable))),
            P = b(() => {
              if (f.value.find((I) => I.key === 'data-table-select') != null)
                return s.value ? '$checkboxOn' : r.value ? '$checkboxIndeterminate' : '$checkboxOff'
            })
          return d(Zi, X({ tag: 'th', class: [...w.value], colspan: v.value.length + 1 }, _), {
            default: () => [
              d('div', { class: 'v-data-table-header__content' }, [
                d(
                  Cu,
                  {
                    chips: !0,
                    class: 'v-data-table__td-sort-select',
                    clearable: !0,
                    density: 'default',
                    items: k.value,
                    label: a('$vuetify.dataTable.sortBy'),
                    multiple: e.multiSort,
                    variant: 'underlined',
                    'onClick:clear': () => (i.value = []),
                    appendIcon: P.value,
                    'onClick:append': () => u(!s.value)
                  },
                  {
                    ...n,
                    chip: (E) => {
                      var I
                      return d(
                        rl,
                        {
                          onClick:
                            (I = E.item.raw) != null && I.sortable ? () => l(E.item.raw) : void 0,
                          onMousedown: (D) => {
                            D.preventDefault(), D.stopPropagation()
                          }
                        },
                        {
                          default: () => [
                            E.item.title,
                            d(
                              Me,
                              {
                                class: [
                                  'v-data-table__td-sort-icon',
                                  o(E.item.raw) && 'v-data-table__td-sort-icon-active'
                                ],
                                icon: h(E.item.raw),
                                size: 'small'
                              },
                              null
                            )
                          ]
                        }
                      )
                    }
                  }
                )
              ])
            ]
          })
        }
      K(() =>
        A.value
          ? d('tr', null, [d(V, null, null)])
          : d(me, null, [
              n.headers
                ? n.headers(T.value)
                : v.value.map((_, k) =>
                    d('tr', null, [_.map((P, E) => d(x, { column: P, x: E, y: k }, null))])
                  ),
              e.loading &&
                d('tr', { class: 'v-data-table-progress' }, [
                  d('th', { colspan: f.value.length }, [
                    d(
                      ii,
                      {
                        name: 'v-data-table-progress',
                        absolute: !0,
                        active: !0,
                        color: typeof e.loading == 'boolean' ? void 0 : e.loading,
                        indeterminate: !0
                      },
                      { default: n.loader }
                    )
                  ])
                ])
            ])
      )
    }
  }),
  TC = $({ item: { type: Object, required: !0 } }, 'VDataTableGroupHeaderRow'),
  EC = j()({
    name: 'VDataTableGroupHeaderRow',
    props: TC(),
    setup(e, t) {
      let { slots: n } = t
      const { isGroupOpen: a, toggleGroup: l, extractRows: i } = Eh(),
        { isSelected: o, isSomeSelected: r, select: s } = Fo(),
        { columns: u } = zo(),
        c = b(() => i([e.item]))
      return () =>
        d(
          'tr',
          {
            class: 'v-data-table-group-header-row',
            style: { '--v-data-table-group-header-row-depth': e.item.depth }
          },
          [
            u.value.map((f) => {
              var v, m
              if (f.key === 'data-table-group') {
                const g = a(e.item) ? '$expand' : '$next',
                  h = () => l(e.item)
                return (
                  ((v = n['data-table-group']) == null
                    ? void 0
                    : v.call(n, {
                        item: e.item,
                        count: c.value.length,
                        props: { icon: g, onClick: h }
                      })) ??
                  d(
                    Zi,
                    { class: 'v-data-table-group-header-row__column' },
                    {
                      default: () => [
                        d(De, { size: 'small', variant: 'text', icon: g, onClick: h }, null),
                        d('span', null, [e.item.value]),
                        d('span', null, [qt('('), c.value.length, qt(')')])
                      ]
                    }
                  )
                )
              }
              if (f.key === 'data-table-select') {
                const g = o(c.value),
                  h = r(c.value) && !g,
                  y = (S) => s(c.value, S)
                return (
                  ((m = n['data-table-select']) == null
                    ? void 0
                    : m.call(n, {
                        props: { modelValue: g, indeterminate: h, 'onUpdate:modelValue': y }
                      })) ??
                  d('td', null, [
                    d(An, { modelValue: g, indeterminate: h, 'onUpdate:modelValue': y }, null)
                  ])
                )
              }
              return d('td', null, null)
            })
          ]
        )
    }
  }),
  BC = $(
    {
      index: Number,
      item: Object,
      cellProps: [Object, Function],
      onClick: Tt(),
      onContextmenu: Tt(),
      onDblclick: Tt(),
      ...nl()
    },
    'VDataTableRow'
  ),
  $u = j()({
    name: 'VDataTableRow',
    props: BC(),
    setup(e, t) {
      let { slots: n } = t
      const { displayClasses: a, mobile: l } = un(e, 'v-data-table__tr'),
        { isSelected: i, toggleSelect: o, someSelected: r, allSelected: s, selectAll: u } = Fo(),
        { isExpanded: c, toggleExpand: f } = Ah(),
        { toggleSort: v, sortBy: m, isSorted: g } = zh(),
        { columns: h } = zo()
      K(() =>
        d(
          'tr',
          {
            class: [
              'v-data-table__tr',
              { 'v-data-table__tr--clickable': !!(e.onClick || e.onContextmenu || e.onDblclick) },
              a.value
            ],
            onClick: e.onClick,
            onContextmenu: e.onContextmenu,
            onDblclick: e.onDblclick
          },
          [
            e.item &&
              h.value.map((y, S) => {
                const p = e.item,
                  A = `item.${y.key}`,
                  T = `header.${y.key}`,
                  w = {
                    index: e.index,
                    item: p.raw,
                    internalItem: p,
                    value: Rl(p.columns, y.key),
                    column: y,
                    isSelected: i,
                    toggleSelect: o,
                    isExpanded: c,
                    toggleExpand: f
                  },
                  x = {
                    column: y,
                    selectAll: u,
                    isSorted: g,
                    toggleSort: v,
                    sortBy: m.value,
                    someSelected: r.value,
                    allSelected: s.value,
                    getSortIcon: () => ''
                  },
                  V =
                    typeof e.cellProps == 'function'
                      ? e.cellProps({
                          index: w.index,
                          item: w.item,
                          internalItem: w.internalItem,
                          value: w.value,
                          column: y
                        })
                      : e.cellProps,
                  _ =
                    typeof y.cellProps == 'function'
                      ? y.cellProps({
                          index: w.index,
                          item: w.item,
                          internalItem: w.internalItem,
                          value: w.value
                        })
                      : y.cellProps
                return d(
                  Zi,
                  X(
                    {
                      align: y.align,
                      class: {
                        'v-data-table__td--expanded-row': y.key === 'data-table-expand',
                        'v-data-table__td--select-row': y.key === 'data-table-select'
                      },
                      fixed: y.fixed,
                      fixedOffset: y.fixedOffset,
                      lastFixed: y.lastFixed,
                      maxWidth: l.value ? void 0 : y.maxWidth,
                      noPadding: y.key === 'data-table-select' || y.key === 'data-table-expand',
                      nowrap: y.nowrap,
                      width: l.value ? void 0 : y.width
                    },
                    V,
                    _
                  ),
                  {
                    default: () => {
                      var P, E, I, D, L
                      if (n[A] && !l.value) return (P = n[A]) == null ? void 0 : P.call(n, w)
                      if (y.key === 'data-table-select')
                        return (
                          ((E = n['item.data-table-select']) == null ? void 0 : E.call(n, w)) ??
                          d(
                            An,
                            {
                              disabled: !p.selectable,
                              modelValue: i([p]),
                              onClick: Mc(() => o(p), ['stop'])
                            },
                            null
                          )
                        )
                      if (y.key === 'data-table-expand')
                        return (
                          ((I = n['item.data-table-expand']) == null ? void 0 : I.call(n, w)) ??
                          d(
                            De,
                            {
                              icon: c(p) ? '$collapse' : '$expand',
                              size: 'small',
                              variant: 'text',
                              onClick: Mc(() => f(p), ['stop'])
                            },
                            null
                          )
                        )
                      const k = Ot(w.value)
                      return l.value
                        ? d(me, null, [
                            d('div', { class: 'v-data-table__td-title' }, [
                              ((D = n[T]) == null ? void 0 : D.call(n, x)) ?? y.title
                            ]),
                            d('div', { class: 'v-data-table__td-value' }, [
                              ((L = n[A]) == null ? void 0 : L.call(n, w)) ?? k
                            ])
                          ])
                        : k
                    }
                  }
                )
              })
          ]
        )
      )
    }
  }),
  Kh = $(
    {
      loading: [Boolean, String],
      loadingText: { type: String, default: '$vuetify.dataIterator.loadingText' },
      hideNoData: Boolean,
      items: { type: Array, default: () => [] },
      noDataText: { type: String, default: '$vuetify.noDataText' },
      rowProps: [Object, Function],
      cellProps: [Object, Function],
      ...nl()
    },
    'VDataTableRows'
  ),
  Sa = j()({
    name: 'VDataTableRows',
    inheritAttrs: !1,
    props: Kh(),
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { columns: l } = zo(),
        { expandOnClick: i, toggleExpand: o, isExpanded: r } = Ah(),
        { isSelected: s, toggleSelect: u } = Fo(),
        { toggleGroup: c, isGroupOpen: f } = Eh(),
        { t: v } = Je(),
        { mobile: m } = un(e)
      return (
        K(() => {
          var g, h
          return e.loading && (!e.items.length || a.loading)
            ? d('tr', { class: 'v-data-table-rows-loading', key: 'loading' }, [
                d('td', { colspan: l.value.length }, [
                  ((g = a.loading) == null ? void 0 : g.call(a)) ?? v(e.loadingText)
                ])
              ])
            : !e.loading && !e.items.length && !e.hideNoData
              ? d('tr', { class: 'v-data-table-rows-no-data', key: 'no-data' }, [
                  d('td', { colspan: l.value.length }, [
                    ((h = a['no-data']) == null ? void 0 : h.call(a)) ?? v(e.noDataText)
                  ])
                ])
              : d(me, null, [
                  e.items.map((y, S) => {
                    var T
                    if (y.type === 'group') {
                      const w = {
                        index: S,
                        item: y,
                        columns: l.value,
                        isExpanded: r,
                        toggleExpand: o,
                        isSelected: s,
                        toggleSelect: u,
                        toggleGroup: c,
                        isGroupOpen: f
                      }
                      return a['group-header']
                        ? a['group-header'](w)
                        : d(
                            EC,
                            X(
                              { key: `group-header_${y.id}`, item: y },
                              id(n, ':group-header', () => w)
                            ),
                            a
                          )
                    }
                    const p = {
                        index: S,
                        item: y.raw,
                        internalItem: y,
                        columns: l.value,
                        isExpanded: r,
                        toggleExpand: o,
                        isSelected: s,
                        toggleSelect: u
                      },
                      A = {
                        ...p,
                        props: X(
                          {
                            key: `item_${y.key ?? y.index}`,
                            onClick: i.value
                              ? () => {
                                  o(y)
                                }
                              : void 0,
                            index: S,
                            item: y,
                            cellProps: e.cellProps,
                            mobile: m.value
                          },
                          id(n, ':row', () => p),
                          typeof e.rowProps == 'function'
                            ? e.rowProps({
                                item: p.item,
                                index: p.index,
                                internalItem: p.internalItem
                              })
                            : e.rowProps
                        )
                      }
                    return d(me, { key: A.props.key }, [
                      a.item ? a.item(A) : d($u, A.props, a),
                      r(y) && ((T = a['expanded-row']) == null ? void 0 : T.call(a, p))
                    ])
                  })
                ])
        }),
        {}
      )
    }
  }),
  qh = $(
    {
      fixedHeader: Boolean,
      fixedFooter: Boolean,
      height: [Number, String],
      hover: Boolean,
      ...ve(),
      ...ft(),
      ..._e(),
      ...Ee()
    },
    'VTable'
  ),
  pa = j()({
    name: 'VTable',
    props: qh(),
    setup(e, t) {
      let { slots: n, emit: a } = t
      const { themeClasses: l } = Re(e),
        { densityClasses: i } = Vt(e)
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-table',
                {
                  'v-table--fixed-height': !!e.height,
                  'v-table--fixed-header': e.fixedHeader,
                  'v-table--fixed-footer': e.fixedFooter,
                  'v-table--has-top': !!n.top,
                  'v-table--has-bottom': !!n.bottom,
                  'v-table--hover': e.hover
                },
                l.value,
                i.value,
                e.class
              ],
              style: e.style
            },
            {
              default: () => {
                var o, r, s
                return [
                  (o = n.top) == null ? void 0 : o.call(n),
                  n.default
                    ? d('div', { class: 'v-table__wrapper', style: { height: fe(e.height) } }, [
                        d('table', null, [n.default()])
                      ])
                    : (r = n.wrapper) == null
                      ? void 0
                      : r.call(n),
                  (s = n.bottom) == null ? void 0 : s.call(n)
                ]
              }
            }
          )
        ),
        {}
      )
    }
  }),
  DC = $(
    {
      items: { type: Array, default: () => [] },
      itemValue: { type: [String, Array, Function], default: 'id' },
      itemSelectable: { type: [String, Array, Function], default: null },
      rowProps: [Object, Function],
      cellProps: [Object, Function],
      returnObject: Boolean
    },
    'DataTable-items'
  )
function MC(e, t, n, a) {
  const l = e.returnObject ? t : ot(t, e.itemValue),
    i = ot(t, e.itemSelectable, !0),
    o = a.reduce((r, s) => (s.key != null && (r[s.key] = ot(t, s.value)), r), {})
  return {
    type: 'item',
    key: e.returnObject ? ot(t, e.itemValue) : l,
    index: n,
    value: l,
    selectable: i,
    columns: o,
    raw: t
  }
}
function RC(e, t, n) {
  return t.map((a, l) => MC(e, a, l, n))
}
function Ou(e, t) {
  return { items: b(() => RC(e, e.items, t.value)) }
}
const Lu = $(
    {
      ...Kh(),
      width: [String, Number],
      search: String,
      ...Ph(),
      ...Pu(),
      ...CC(),
      ...DC(),
      ...Lh(),
      ...Nh(),
      ...Yh(),
      ...qh()
    },
    'DataTable'
  ),
  $C = $({ ...Au(), ...Lu(), ...fi(), ...Du() }, 'VDataTable'),
  OC = j()({
    name: 'VDataTable',
    props: $C(),
    emits: {
      'update:modelValue': (e) => !0,
      'update:page': (e) => !0,
      'update:itemsPerPage': (e) => !0,
      'update:sortBy': (e) => !0,
      'update:options': (e) => !0,
      'update:groupBy': (e) => !0,
      'update:expanded': (e) => !0,
      'update:currentItems': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { groupBy: l } = Iu(e),
        { sortBy: i, multiSort: o, mustSort: r } = No(e),
        { page: s, itemsPerPage: u } = Tu(e),
        {
          columns: c,
          headers: f,
          sortFunctions: v,
          sortRawFunctions: m,
          filterFunctions: g
        } = Ru(e, { groupBy: l, showSelect: N(e, 'showSelect'), showExpand: N(e, 'showExpand') }),
        { items: h } = Ou(e, c),
        y = N(e, 'search'),
        { filteredItems: S } = vi(e, h, y, { transform: (Q) => Q.columns, customKeyFilter: g }),
        { toggleSort: p } = Ho({ sortBy: i, multiSort: o, mustSort: r, page: s }),
        {
          sortByWithGroups: A,
          opened: T,
          extractRows: w,
          isGroupOpen: x,
          toggleGroup: V
        } = Ro({ groupBy: l, sortBy: i }),
        { sortedItems: _ } = Bu(e, S, A, {
          transform: (Q) => Q.columns,
          sortFunctions: v,
          sortRawFunctions: m
        }),
        { flatItems: k } = $o(_, l, T),
        P = b(() => k.value.length),
        {
          startIndex: E,
          stopIndex: I,
          pageCount: D,
          setItemsPerPage: L
        } = Eu({ page: s, itemsPerPage: u, itemsLength: P }),
        { paginatedItems: W } = Rh({ items: k, startIndex: E, stopIndex: I, itemsPerPage: u }),
        Y = b(() => w(W.value)),
        {
          isSelected: te,
          select: F,
          selectAll: q,
          toggleSelect: O,
          someSelected: z,
          allSelected: ee
        } = Lo(e, { allItems: h, currentPage: Y }),
        { isExpanded: he, toggleExpand: Se } = Mo(e)
      Oo({ page: s, itemsPerPage: u, sortBy: i, groupBy: l, search: y }),
        Ke({
          VDataTableRows: {
            hideNoData: N(e, 'hideNoData'),
            noDataText: N(e, 'noDataText'),
            loading: N(e, 'loading'),
            loadingText: N(e, 'loadingText')
          }
        })
      const ue = b(() => ({
        page: s.value,
        itemsPerPage: u.value,
        sortBy: i.value,
        pageCount: D.value,
        toggleSort: p,
        setItemsPerPage: L,
        someSelected: z.value,
        allSelected: ee.value,
        isSelected: te,
        select: F,
        selectAll: q,
        toggleSelect: O,
        isExpanded: he,
        toggleExpand: Se,
        isGroupOpen: x,
        toggleGroup: V,
        items: Y.value.map((Q) => Q.raw),
        internalItems: Y.value,
        groupedItems: W.value,
        columns: c.value,
        headers: f.value
      }))
      return (
        K(() => {
          const Q = Kl.filterProps(e),
            R = ba.filterProps(e),
            oe = Sa.filterProps(e),
            ne = pa.filterProps(e)
          return d(
            pa,
            X(
              {
                class: [
                  'v-data-table',
                  { 'v-data-table--show-select': e.showSelect, 'v-data-table--loading': e.loading },
                  e.class
                ],
                style: e.style
              },
              ne
            ),
            {
              top: () => {
                var U
                return (U = a.top) == null ? void 0 : U.call(a, ue.value)
              },
              default: () => {
                var U, ge, Z, C, B, M
                return a.default
                  ? a.default(ue.value)
                  : d(me, null, [
                      (U = a.colgroup) == null ? void 0 : U.call(a, ue.value),
                      d('thead', null, [d(ba, R, a)]),
                      (ge = a.thead) == null ? void 0 : ge.call(a, ue.value),
                      d('tbody', null, [
                        (Z = a['body.prepend']) == null ? void 0 : Z.call(a, ue.value),
                        a.body ? a.body(ue.value) : d(Sa, X(n, oe, { items: W.value }), a),
                        (C = a['body.append']) == null ? void 0 : C.call(a, ue.value)
                      ]),
                      (B = a.tbody) == null ? void 0 : B.call(a, ue.value),
                      (M = a.tfoot) == null ? void 0 : M.call(a, ue.value)
                    ])
              },
              bottom: () =>
                a.bottom
                  ? a.bottom(ue.value)
                  : d(me, null, [d(ui, null, null), d(Kl, Q, { prepend: a['footer.prepend'] })])
            }
          )
        }),
        {}
      )
    }
  }),
  LC = $({ ...Lu(), ...Pu(), ...sh(), ...fi() }, 'VDataTableVirtual'),
  FC = j()({
    name: 'VDataTableVirtual',
    props: LC(),
    emits: {
      'update:modelValue': (e) => !0,
      'update:sortBy': (e) => !0,
      'update:options': (e) => !0,
      'update:groupBy': (e) => !0,
      'update:expanded': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { groupBy: l } = Iu(e),
        { sortBy: i, multiSort: o, mustSort: r } = No(e),
        {
          columns: s,
          headers: u,
          filterFunctions: c,
          sortFunctions: f,
          sortRawFunctions: v
        } = Ru(e, { groupBy: l, showSelect: N(e, 'showSelect'), showExpand: N(e, 'showExpand') }),
        { items: m } = Ou(e, s),
        g = N(e, 'search'),
        { filteredItems: h } = vi(e, m, g, { transform: (R) => R.columns, customKeyFilter: c }),
        { toggleSort: y } = Ho({ sortBy: i, multiSort: o, mustSort: r }),
        {
          sortByWithGroups: S,
          opened: p,
          extractRows: A,
          isGroupOpen: T,
          toggleGroup: w
        } = Ro({ groupBy: l, sortBy: i }),
        { sortedItems: x } = Bu(e, h, S, {
          transform: (R) => R.columns,
          sortFunctions: f,
          sortRawFunctions: v
        }),
        { flatItems: V } = $o(x, l, p),
        _ = b(() => A(V.value)),
        {
          isSelected: k,
          select: P,
          selectAll: E,
          toggleSelect: I,
          someSelected: D,
          allSelected: L
        } = Lo(e, { allItems: _, currentPage: _ }),
        { isExpanded: W, toggleExpand: Y } = Mo(e),
        {
          containerRef: te,
          markerRef: F,
          paddingTop: q,
          paddingBottom: O,
          computedItems: z,
          handleItemResize: ee,
          handleScroll: he,
          handleScrollend: Se
        } = uh(e, V),
        ue = b(() => z.value.map((R) => R.raw))
      Oo({ sortBy: i, page: se(1), itemsPerPage: se(-1), groupBy: l, search: g }),
        Ke({
          VDataTableRows: {
            hideNoData: N(e, 'hideNoData'),
            noDataText: N(e, 'noDataText'),
            loading: N(e, 'loading'),
            loadingText: N(e, 'loadingText')
          }
        })
      const Q = b(() => ({
        sortBy: i.value,
        toggleSort: y,
        someSelected: D.value,
        allSelected: L.value,
        isSelected: k,
        select: P,
        selectAll: E,
        toggleSelect: I,
        isExpanded: W,
        toggleExpand: Y,
        isGroupOpen: T,
        toggleGroup: w,
        items: _.value.map((R) => R.raw),
        internalItems: _.value,
        groupedItems: V.value,
        columns: s.value,
        headers: u.value
      }))
      K(() => {
        const R = ba.filterProps(e),
          oe = Sa.filterProps(e),
          ne = pa.filterProps(e)
        return d(
          pa,
          X(
            {
              class: ['v-data-table', { 'v-data-table--loading': e.loading }, e.class],
              style: e.style
            },
            ne
          ),
          {
            top: () => {
              var U
              return (U = a.top) == null ? void 0 : U.call(a, Q.value)
            },
            wrapper: () => {
              var U, ge, Z
              return d(
                'div',
                {
                  ref: te,
                  onScrollPassive: he,
                  onScrollend: Se,
                  class: 'v-table__wrapper',
                  style: { height: fe(e.height) }
                },
                [
                  d('table', null, [
                    (U = a.colgroup) == null ? void 0 : U.call(a, Q.value),
                    d('thead', null, [d(ba, X(R, { sticky: e.fixedHeader }), a)]),
                    d('tbody', null, [
                      d('tr', { ref: F, style: { height: fe(q.value), border: 0 } }, [
                        d('td', { colspan: s.value.length, style: { height: 0, border: 0 } }, null)
                      ]),
                      (ge = a['body.prepend']) == null ? void 0 : ge.call(a, Q.value),
                      d(Sa, X(n, oe, { items: ue.value }), {
                        ...a,
                        item: (C) =>
                          d(
                            rh,
                            {
                              key: C.internalItem.index,
                              renderless: !0,
                              'onUpdate:height': (B) => ee(C.internalItem.index, B)
                            },
                            {
                              default: (B) => {
                                var H
                                let { itemRef: M } = B
                                return (
                                  ((H = a.item) == null
                                    ? void 0
                                    : H.call(a, { ...C, itemRef: M })) ??
                                  d(
                                    $u,
                                    X(C.props, {
                                      ref: M,
                                      key: C.internalItem.index,
                                      index: C.internalItem.index
                                    }),
                                    a
                                  )
                                )
                              }
                            }
                          )
                      }),
                      (Z = a['body.append']) == null ? void 0 : Z.call(a, Q.value),
                      d('tr', { style: { height: fe(O.value), border: 0 } }, [
                        d('td', { colspan: s.value.length, style: { height: 0, border: 0 } }, null)
                      ])
                    ])
                  ])
                ]
              )
            },
            bottom: () => {
              var U
              return (U = a.bottom) == null ? void 0 : U.call(a, Q.value)
            }
          }
        )
      })
    }
  }),
  NC = $(
    { itemsLength: { type: [Number, String], required: !0 }, ...Au(), ...Lu(), ...Du() },
    'VDataTableServer'
  ),
  HC = j()({
    name: 'VDataTableServer',
    props: NC(),
    emits: {
      'update:modelValue': (e) => !0,
      'update:page': (e) => !0,
      'update:itemsPerPage': (e) => !0,
      'update:sortBy': (e) => !0,
      'update:options': (e) => !0,
      'update:expanded': (e) => !0,
      'update:groupBy': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const { groupBy: l } = Iu(e),
        { sortBy: i, multiSort: o, mustSort: r } = No(e),
        { page: s, itemsPerPage: u } = Tu(e),
        c = b(() => parseInt(e.itemsLength, 10)),
        { columns: f, headers: v } = Ru(e, {
          groupBy: l,
          showSelect: N(e, 'showSelect'),
          showExpand: N(e, 'showExpand')
        }),
        { items: m } = Ou(e, f),
        { toggleSort: g } = Ho({ sortBy: i, multiSort: o, mustSort: r, page: s }),
        {
          opened: h,
          isGroupOpen: y,
          toggleGroup: S,
          extractRows: p
        } = Ro({ groupBy: l, sortBy: i }),
        { pageCount: A, setItemsPerPage: T } = Eu({ page: s, itemsPerPage: u, itemsLength: c }),
        { flatItems: w } = $o(m, l, h),
        {
          isSelected: x,
          select: V,
          selectAll: _,
          toggleSelect: k,
          someSelected: P,
          allSelected: E
        } = Lo(e, { allItems: m, currentPage: m }),
        { isExpanded: I, toggleExpand: D } = Mo(e),
        L = b(() => p(m.value))
      Oo({ page: s, itemsPerPage: u, sortBy: i, groupBy: l, search: N(e, 'search') }),
        Fe('v-data-table', { toggleSort: g, sortBy: i }),
        Ke({
          VDataTableRows: {
            hideNoData: N(e, 'hideNoData'),
            noDataText: N(e, 'noDataText'),
            loading: N(e, 'loading'),
            loadingText: N(e, 'loadingText')
          }
        })
      const W = b(() => ({
        page: s.value,
        itemsPerPage: u.value,
        sortBy: i.value,
        pageCount: A.value,
        toggleSort: g,
        setItemsPerPage: T,
        someSelected: P.value,
        allSelected: E.value,
        isSelected: x,
        select: V,
        selectAll: _,
        toggleSelect: k,
        isExpanded: I,
        toggleExpand: D,
        isGroupOpen: y,
        toggleGroup: S,
        items: L.value.map((Y) => Y.raw),
        internalItems: L.value,
        groupedItems: w.value,
        columns: f.value,
        headers: v.value
      }))
      K(() => {
        const Y = Kl.filterProps(e),
          te = ba.filterProps(e),
          F = Sa.filterProps(e),
          q = pa.filterProps(e)
        return d(
          pa,
          X(
            {
              class: ['v-data-table', { 'v-data-table--loading': e.loading }, e.class],
              style: e.style
            },
            q
          ),
          {
            top: () => {
              var O
              return (O = a.top) == null ? void 0 : O.call(a, W.value)
            },
            default: () => {
              var O, z, ee, he, Se, ue
              return a.default
                ? a.default(W.value)
                : d(me, null, [
                    (O = a.colgroup) == null ? void 0 : O.call(a, W.value),
                    d('thead', { class: 'v-data-table__thead', role: 'rowgroup' }, [
                      d(ba, X(te, { sticky: e.fixedHeader }), a)
                    ]),
                    (z = a.thead) == null ? void 0 : z.call(a, W.value),
                    d('tbody', { class: 'v-data-table__tbody', role: 'rowgroup' }, [
                      (ee = a['body.prepend']) == null ? void 0 : ee.call(a, W.value),
                      a.body ? a.body(W.value) : d(Sa, X(n, F, { items: w.value }), a),
                      (he = a['body.append']) == null ? void 0 : he.call(a, W.value)
                    ]),
                    (Se = a.tbody) == null ? void 0 : Se.call(a, W.value),
                    (ue = a.tfoot) == null ? void 0 : ue.call(a, W.value)
                  ])
            },
            bottom: () =>
              a.bottom
                ? a.bottom(W.value)
                : d(me, null, [d(ui, null, null), d(Kl, Y, { prepend: a['footer.prepend'] })])
          }
        )
      })
    }
  }),
  zC = $({ fluid: { type: Boolean, default: !1 }, ...ve(), ..._e() }, 'VContainer'),
  jC = j()({
    name: 'VContainer',
    props: zC(),
    setup(e, t) {
      let { slots: n } = t
      const { rtlClasses: a } = ut()
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-container', { 'v-container--fluid': e.fluid }, a.value, e.class],
              style: e.style
            },
            n
          )
        ),
        {}
      )
    }
  }),
  Xh = yo.reduce((e, t) => ((e[t] = { type: [Boolean, String, Number], default: !1 }), e), {}),
  Zh = yo.reduce((e, t) => {
    const n = 'offset' + bn(t)
    return (e[n] = { type: [String, Number], default: null }), e
  }, {}),
  Qh = yo.reduce((e, t) => {
    const n = 'order' + bn(t)
    return (e[n] = { type: [String, Number], default: null }), e
  }, {}),
  Td = { col: Object.keys(Xh), offset: Object.keys(Zh), order: Object.keys(Qh) }
function WC(e, t, n) {
  let a = e
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, '')
      a += `-${l}`
    }
    return (
      e === 'col' && (a = 'v-' + a),
      (e === 'col' && (n === '' || n === !0)) || (a += `-${n}`),
      a.toLowerCase()
    )
  }
}
const UC = ['auto', 'start', 'end', 'center', 'baseline', 'stretch'],
  GC = $(
    {
      cols: { type: [Boolean, String, Number], default: !1 },
      ...Xh,
      offset: { type: [String, Number], default: null },
      ...Zh,
      order: { type: [String, Number], default: null },
      ...Qh,
      alignSelf: { type: String, default: null, validator: (e) => UC.includes(e) },
      ...ve(),
      ..._e()
    },
    'VCol'
  ),
  YC = j()({
    name: 'VCol',
    props: GC(),
    setup(e, t) {
      let { slots: n } = t
      const a = b(() => {
        const l = []
        let i
        for (i in Td)
          Td[i].forEach((r) => {
            const s = e[r],
              u = WC(i, r, s)
            u && l.push(u)
          })
        const o = l.some((r) => r.startsWith('v-col-'))
        return (
          l.push({
            'v-col': !o || !e.cols,
            [`v-col-${e.cols}`]: e.cols,
            [`offset-${e.offset}`]: e.offset,
            [`order-${e.order}`]: e.order,
            [`align-self-${e.alignSelf}`]: e.alignSelf
          }),
          l
        )
      })
      return () => {
        var l
        return sn(
          e.tag,
          { class: [a.value, e.class], style: e.style },
          (l = n.default) == null ? void 0 : l.call(n)
        )
      }
    }
  }),
  Fu = ['start', 'end', 'center'],
  Jh = ['space-between', 'space-around', 'space-evenly']
function Nu(e, t) {
  return yo.reduce((n, a) => {
    const l = e + bn(a)
    return (n[l] = t()), n
  }, {})
}
const KC = [...Fu, 'baseline', 'stretch'],
  eg = (e) => KC.includes(e),
  tg = Nu('align', () => ({ type: String, default: null, validator: eg })),
  qC = [...Fu, ...Jh],
  ng = (e) => qC.includes(e),
  ag = Nu('justify', () => ({ type: String, default: null, validator: ng })),
  XC = [...Fu, ...Jh, 'stretch'],
  lg = (e) => XC.includes(e),
  ig = Nu('alignContent', () => ({ type: String, default: null, validator: lg })),
  Ed = { align: Object.keys(tg), justify: Object.keys(ag), alignContent: Object.keys(ig) },
  ZC = { align: 'align', justify: 'justify', alignContent: 'align-content' }
function QC(e, t, n) {
  let a = ZC[e]
  if (n != null) {
    if (t) {
      const l = t.replace(e, '')
      a += `-${l}`
    }
    return (a += `-${n}`), a.toLowerCase()
  }
}
const JC = $(
    {
      dense: Boolean,
      noGutters: Boolean,
      align: { type: String, default: null, validator: eg },
      ...tg,
      justify: { type: String, default: null, validator: ng },
      ...ag,
      alignContent: { type: String, default: null, validator: lg },
      ...ig,
      ...ve(),
      ..._e()
    },
    'VRow'
  ),
  e1 = j()({
    name: 'VRow',
    props: JC(),
    setup(e, t) {
      let { slots: n } = t
      const a = b(() => {
        const l = []
        let i
        for (i in Ed)
          Ed[i].forEach((o) => {
            const r = e[o],
              s = QC(i, o, r)
            s && l.push(s)
          })
        return (
          l.push({
            'v-row--no-gutters': e.noGutters,
            'v-row--dense': e.dense,
            [`align-${e.align}`]: e.align,
            [`justify-${e.justify}`]: e.justify,
            [`align-content-${e.alignContent}`]: e.alignContent
          }),
          l
        )
      })
      return () => {
        var l
        return sn(
          e.tag,
          { class: ['v-row', a.value, e.class], style: e.style },
          (l = n.default) == null ? void 0 : l.call(n)
        )
      }
    }
  }),
  og = pn('v-spacer', 'div', 'VSpacer'),
  rg = $(
    {
      active: { type: [String, Array], default: void 0 },
      disabled: { type: [Boolean, String, Array], default: !1 },
      nextIcon: { type: [String], default: '$next' },
      prevIcon: { type: [String], default: '$prev' },
      modeIcon: { type: [String], default: '$subgroup' },
      text: String,
      viewMode: { type: String, default: 'month' }
    },
    'VDatePickerControls'
  ),
  rs = j()({
    name: 'VDatePickerControls',
    props: rg(),
    emits: {
      'click:year': () => !0,
      'click:month': () => !0,
      'click:prev': () => !0,
      'click:next': () => !0,
      'click:text': () => !0
    },
    setup(e, t) {
      let { emit: n } = t
      const a = b(() => (Array.isArray(e.disabled) ? e.disabled.includes('text') : !!e.disabled)),
        l = b(() => (Array.isArray(e.disabled) ? e.disabled.includes('mode') : !!e.disabled)),
        i = b(() => (Array.isArray(e.disabled) ? e.disabled.includes('prev') : !!e.disabled)),
        o = b(() => (Array.isArray(e.disabled) ? e.disabled.includes('next') : !!e.disabled))
      function r() {
        n('click:prev')
      }
      function s() {
        n('click:next')
      }
      function u() {
        n('click:year')
      }
      function c() {
        n('click:month')
      }
      return (
        K(() =>
          d('div', { class: ['v-date-picker-controls'] }, [
            d(
              De,
              {
                class: 'v-date-picker-controls__month-btn',
                disabled: a.value,
                text: e.text,
                variant: 'text',
                rounded: !0,
                onClick: c
              },
              null
            ),
            d(
              De,
              {
                key: 'mode-btn',
                class: 'v-date-picker-controls__mode-btn',
                disabled: l.value,
                density: 'comfortable',
                icon: e.modeIcon,
                variant: 'text',
                onClick: u
              },
              null
            ),
            d(og, { key: 'mode-spacer' }, null),
            d('div', { key: 'month-buttons', class: 'v-date-picker-controls__month' }, [
              d(De, { disabled: i.value, icon: e.prevIcon, variant: 'text', onClick: r }, null),
              d(De, { disabled: o.value, icon: e.nextIcon, variant: 'text', onClick: s }, null)
            ])
          ])
        ),
        {}
      )
    }
  }),
  t1 = $(
    { appendIcon: String, color: String, header: String, transition: String, onClick: Tt() },
    'VDatePickerHeader'
  ),
  ss = j()({
    name: 'VDatePickerHeader',
    props: t1(),
    emits: { click: () => !0, 'click:append': () => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(e, 'color')
      function o() {
        n('click')
      }
      function r() {
        n('click:append')
      }
      return (
        K(() => {
          const s = !!(a.default || e.header),
            u = !!(a.append || e.appendIcon)
          return d(
            'div',
            {
              class: [
                'v-date-picker-header',
                { 'v-date-picker-header--clickable': !!e.onClick },
                l.value
              ],
              style: i.value,
              onClick: o
            },
            [
              a.prepend &&
                d('div', { key: 'prepend', class: 'v-date-picker-header__prepend' }, [a.prepend()]),
              s &&
                d(
                  Ct,
                  { key: 'content', name: e.transition },
                  {
                    default: () => {
                      var c
                      return [
                        d('div', { key: e.header, class: 'v-date-picker-header__content' }, [
                          ((c = a.default) == null ? void 0 : c.call(a)) ?? e.header
                        ])
                      ]
                    }
                  }
                ),
              u &&
                d('div', { class: 'v-date-picker-header__append' }, [
                  a.append
                    ? d(
                        Ae,
                        {
                          key: 'append-defaults',
                          disabled: !e.appendIcon,
                          defaults: { VBtn: { icon: e.appendIcon, variant: 'text' } }
                        },
                        {
                          default: () => {
                            var c
                            return [(c = a.append) == null ? void 0 : c.call(a)]
                          }
                        }
                      )
                    : d(
                        De,
                        { key: 'append-btn', icon: e.appendIcon, variant: 'text', onClick: r },
                        null
                      )
                ])
            ]
          )
        }),
        {}
      )
    }
  }),
  n1 = $(
    {
      allowedDates: [Array, Function],
      disabled: Boolean,
      displayValue: null,
      modelValue: Array,
      month: [Number, String],
      max: null,
      min: null,
      showAdjacentMonths: Boolean,
      year: [Number, String],
      weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
      weeksInMonth: { type: String, default: 'dynamic' }
    },
    'calendar'
  )
function a1(e) {
  const t = ni(),
    n = be(e, 'modelValue', [], (v) => Xe(v)),
    a = b(() =>
      e.displayValue
        ? t.date(e.displayValue)
        : n.value.length > 0
          ? t.date(n.value[0])
          : e.min
            ? t.date(e.min)
            : Array.isArray(e.allowedDates)
              ? t.date(e.allowedDates[0])
              : t.date()
    ),
    l = be(
      e,
      'year',
      void 0,
      (v) => {
        const m = v != null ? Number(v) : t.getYear(a.value)
        return t.startOfYear(t.setYear(t.date(), m))
      },
      (v) => t.getYear(v)
    ),
    i = be(
      e,
      'month',
      void 0,
      (v) => {
        const m = v != null ? Number(v) : t.getMonth(a.value),
          g = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value))
        return t.setMonth(g, m)
      },
      (v) => t.getMonth(v)
    ),
    o = b(() => {
      const v = t.getWeekArray(i.value),
        m = v.flat(),
        g = 6 * 7
      if (e.weeksInMonth === 'static' && m.length < g) {
        const h = m[m.length - 1]
        let y = []
        for (let S = 1; S <= g - m.length; S++)
          y.push(t.addDays(h, S)), S % 7 === 0 && (v.push(y), (y = []))
      }
      return v
    })
  function r(v, m) {
    return v
      .filter((g) => e.weekdays.includes(t.toJsDate(g).getDay()))
      .map((g, h) => {
        const y = t.toISO(g),
          S = !t.isSameMonth(g, i.value),
          p = t.isSameDay(g, t.startOfMonth(i.value)),
          A = t.isSameDay(g, t.endOfMonth(i.value)),
          T = t.isSameDay(g, i.value)
        return {
          date: g,
          isoDate: y,
          formatted: t.format(g, 'keyboardDate'),
          year: t.getYear(g),
          month: t.getMonth(g),
          isDisabled: f(g),
          isWeekStart: h % 7 === 0,
          isWeekEnd: h % 7 === 6,
          isToday: t.isSameDay(g, m),
          isAdjacent: S,
          isHidden: S && !e.showAdjacentMonths,
          isStart: p,
          isSelected: n.value.some((w) => t.isSameDay(g, w)),
          isEnd: A,
          isSame: T,
          localized: t.format(g, 'dayOfMonth')
        }
      })
  }
  const s = b(() => {
      const v = t.startOfWeek(a.value),
        m = []
      for (let h = 0; h <= 6; h++) m.push(t.addDays(v, h))
      const g = t.date()
      return r(m, g)
    }),
    u = b(() => {
      const v = o.value.flat(),
        m = t.date()
      return r(v, m)
    }),
    c = b(() => o.value.map((v) => (v.length ? dp(t, v[0]) : null)))
  function f(v) {
    if (e.disabled) return !0
    const m = t.date(v)
    return (e.min && t.isAfter(t.date(e.min), m)) || (e.max && t.isAfter(m, t.date(e.max)))
      ? !0
      : Array.isArray(e.allowedDates) && e.allowedDates.length > 0
        ? !e.allowedDates.some((g) => t.isSameDay(t.date(g), m))
        : typeof e.allowedDates == 'function'
          ? !e.allowedDates(m)
          : !1
  }
  return {
    displayValue: a,
    daysInMonth: u,
    daysInWeek: s,
    genDays: r,
    model: n,
    weeksInMonth: o,
    weekNumbers: c
  }
}
const sg = $(
    {
      color: String,
      hideWeekdays: Boolean,
      multiple: [Boolean, Number, String],
      showWeek: Boolean,
      transition: { type: String, default: 'picker-transition' },
      reverseTransition: { type: String, default: 'picker-reverse-transition' },
      ...n1()
    },
    'VDatePickerMonth'
  ),
  us = j()({
    name: 'VDatePickerMonth',
    props: sg(),
    emits: { 'update:modelValue': (e) => !0, 'update:month': (e) => !0, 'update:year': (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = J(),
        { daysInMonth: i, model: o, weekNumbers: r } = a1(e),
        s = ni(),
        u = se(),
        c = se(),
        f = se(!1),
        v = b(() => (f.value ? e.reverseTransition : e.transition))
      e.multiple === 'range' &&
        o.value.length > 0 &&
        ((u.value = o.value[0]), o.value.length > 1 && (c.value = o.value[o.value.length - 1]))
      const m = b(() => {
        const S = ['number', 'string'].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0
        return o.value.length >= S
      })
      de(i, (S, p) => {
        p && (f.value = s.isBefore(S[0].date, p[0].date))
      })
      function g(S) {
        const p = s.startOfDay(S)
        if (!u.value) (u.value = p), (o.value = [u.value])
        else if (c.value) (u.value = S), (c.value = void 0), (o.value = [u.value])
        else {
          if (s.isSameDay(p, u.value)) {
            ;(u.value = void 0), (o.value = [])
            return
          } else
            s.isBefore(p, u.value)
              ? ((c.value = s.endOfDay(u.value)), (u.value = p))
              : (c.value = s.endOfDay(p))
          const A = s.getDiff(c.value, u.value, 'days'),
            T = [u.value]
          for (let w = 1; w < A; w++) {
            const x = s.addDays(u.value, w)
            T.push(x)
          }
          T.push(c.value), (o.value = T)
        }
      }
      function h(S) {
        const p = o.value.findIndex((A) => s.isSameDay(A, S))
        if (p === -1) o.value = [...o.value, S]
        else {
          const A = [...o.value]
          A.splice(p, 1), (o.value = A)
        }
      }
      function y(S) {
        e.multiple === 'range' ? g(S) : e.multiple ? h(S) : (o.value = [S])
      }
      return () =>
        d('div', { class: 'v-date-picker-month' }, [
          e.showWeek &&
            d('div', { key: 'weeks', class: 'v-date-picker-month__weeks' }, [
              !e.hideWeekdays &&
                d('div', { key: 'hide-week-days', class: 'v-date-picker-month__day' }, [qt(' ')]),
              r.value.map((S) =>
                d(
                  'div',
                  { class: ['v-date-picker-month__day', 'v-date-picker-month__day--adjacent'] },
                  [S]
                )
              )
            ]),
          d(
            Ct,
            { name: v.value },
            {
              default: () => {
                var S
                return [
                  d(
                    'div',
                    {
                      ref: l,
                      key: (S = i.value[0].date) == null ? void 0 : S.toString(),
                      class: 'v-date-picker-month__days'
                    },
                    [
                      !e.hideWeekdays &&
                        s
                          .getWeekdays()
                          .map((p) =>
                            d(
                              'div',
                              {
                                class: ['v-date-picker-month__day', 'v-date-picker-month__weekday']
                              },
                              [p]
                            )
                          ),
                      i.value.map((p, A) => {
                        const T = { props: { onClick: () => y(p.date) }, item: p, i: A }
                        return (
                          m.value && !p.isSelected && (p.isDisabled = !0),
                          d(
                            'div',
                            {
                              class: [
                                'v-date-picker-month__day',
                                {
                                  'v-date-picker-month__day--adjacent': p.isAdjacent,
                                  'v-date-picker-month__day--hide-adjacent': p.isHidden,
                                  'v-date-picker-month__day--selected': p.isSelected,
                                  'v-date-picker-month__day--week-end': p.isWeekEnd,
                                  'v-date-picker-month__day--week-start': p.isWeekStart
                                }
                              ],
                              'data-v-date': p.isDisabled ? void 0 : p.isoDate
                            },
                            [
                              (e.showAdjacentMonths || !p.isAdjacent) &&
                                d(
                                  Ae,
                                  {
                                    defaults: {
                                      VBtn: {
                                        class: 'v-date-picker-month__day-btn',
                                        color:
                                          (p.isSelected || p.isToday) && !p.isDisabled
                                            ? e.color
                                            : void 0,
                                        disabled: p.isDisabled,
                                        icon: !0,
                                        ripple: !1,
                                        text: p.localized,
                                        variant: p.isDisabled
                                          ? p.isToday
                                            ? 'outlined'
                                            : 'text'
                                          : p.isToday && !p.isSelected
                                            ? 'outlined'
                                            : 'flat',
                                        onClick: () => y(p.date)
                                      }
                                    }
                                  },
                                  {
                                    default: () => {
                                      var w
                                      return [
                                        ((w = a.day) == null ? void 0 : w.call(a, T)) ??
                                          d(De, T.props, null)
                                      ]
                                    }
                                  }
                                )
                            ]
                          )
                        )
                      })
                    ]
                  )
                ]
              }
            }
          )
        ])
    }
  }),
  ug = $({ color: String, height: [String, Number], modelValue: Number }, 'VDatePickerMonths'),
  cs = j()({
    name: 'VDatePickerMonths',
    props: ug(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = ni(),
        i = be(e, 'modelValue'),
        o = b(() => {
          let r = l.startOfYear(l.date())
          return hn(12).map((s) => {
            const u = l.format(r, 'monthShort')
            return (r = l.getNextMonth(r)), { text: u, value: s }
          })
        })
      return (
        Ze(() => {
          i.value = i.value ?? l.getMonth(l.date())
        }),
        K(() =>
          d('div', { class: 'v-date-picker-months', style: { height: fe(e.height) } }, [
            d('div', { class: 'v-date-picker-months__content' }, [
              o.value.map((r, s) => {
                var f
                const u = {
                  active: i.value === s,
                  color: i.value === s ? e.color : void 0,
                  rounded: !0,
                  text: r.text,
                  variant: i.value === r.value ? 'flat' : 'text',
                  onClick: () => c(s)
                }
                function c(v) {
                  if (i.value === v) {
                    n('update:modelValue', i.value)
                    return
                  }
                  i.value = v
                }
                return (
                  ((f = a.month) == null ? void 0 : f.call(a, { month: r, i: s, props: u })) ??
                  d(De, X({ key: 'month' }, u), null)
                )
              })
            ])
          ])
        ),
        {}
      )
    }
  }),
  cg = $(
    { color: String, height: [String, Number], min: null, max: null, modelValue: Number },
    'VDatePickerYears'
  ),
  ds = j()({
    name: 'VDatePickerYears',
    props: cg(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = ni(),
        i = be(e, 'modelValue'),
        o = b(() => {
          const s = l.getYear(l.date())
          let u = s - 100,
            c = s + 52
          e.min && (u = l.getYear(l.date(e.min))), e.max && (c = l.getYear(l.date(e.max)))
          let f = l.startOfYear(l.date())
          return (
            (f = l.setYear(f, u)),
            hn(c - u + 1, u).map((v) => {
              const m = l.format(f, 'year')
              return (f = l.setYear(f, l.getYear(f) + 1)), { text: m, value: v }
            })
          )
        })
      Ze(() => {
        i.value = i.value ?? l.getYear(l.date())
      })
      const r = J()
      return (
        St(async () => {
          var s
          await Te(), (s = r.value) == null || s.$el.scrollIntoView({ block: 'center' })
        }),
        K(() =>
          d('div', { class: 'v-date-picker-years', style: { height: fe(e.height) } }, [
            d('div', { class: 'v-date-picker-years__content' }, [
              o.value.map((s, u) => {
                var f
                const c = {
                  ref: i.value === s.value ? r : void 0,
                  active: i.value === s.value,
                  color: i.value === s.value ? e.color : void 0,
                  rounded: !0,
                  text: s.text,
                  variant: i.value === s.value ? 'flat' : 'text',
                  onClick: () => {
                    if (i.value === s.value) {
                      n('update:modelValue', i.value)
                      return
                    }
                    i.value = s.value
                  }
                }
                return (
                  ((f = a.year) == null ? void 0 : f.call(a, { year: s, i: u, props: c })) ??
                  d(De, X({ key: 'month' }, c), null)
                )
              })
            ])
          ])
        ),
        {}
      )
    }
  }),
  l1 = pn('v-picker-title'),
  dg = $(
    { bgColor: String, landscape: Boolean, title: String, hideHeader: Boolean, ...Do() },
    'VPicker'
  ),
  Bd = j()({
    name: 'VPicker',
    props: dg(),
    setup(e, t) {
      let { slots: n } = t
      const { backgroundColorClasses: a, backgroundColorStyles: l } = Ne(N(e, 'color'))
      return (
        K(() => {
          const i = ya.filterProps(e),
            o = !!(e.title || n.title)
          return d(
            ya,
            X(i, {
              color: e.bgColor,
              class: [
                'v-picker',
                { 'v-picker--landscape': e.landscape, 'v-picker--with-actions': !!n.actions },
                e.class
              ],
              style: e.style
            }),
            {
              default: () => {
                var r
                return [
                  !e.hideHeader &&
                    d('div', { key: 'header', class: [a.value], style: [l.value] }, [
                      o &&
                        d(
                          l1,
                          { key: 'picker-title' },
                          {
                            default: () => {
                              var s
                              return [((s = n.title) == null ? void 0 : s.call(n)) ?? e.title]
                            }
                          }
                        ),
                      n.header && d('div', { class: 'v-picker__header' }, [n.header()])
                    ]),
                  d('div', { class: 'v-picker__body' }, [
                    (r = n.default) == null ? void 0 : r.call(n)
                  ]),
                  n.actions &&
                    d(
                      Ae,
                      { defaults: { VBtn: { slim: !0, variant: 'text' } } },
                      { default: () => [d('div', { class: 'v-picker__actions' }, [n.actions()])] }
                    )
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  i1 = $(
    {
      header: { type: String, default: '$vuetify.datePicker.header' },
      ...rg(),
      ...sg({ weeksInMonth: 'static' }),
      ...it(ug(), ['modelValue']),
      ...it(cg(), ['modelValue']),
      ...dg({ title: '$vuetify.datePicker.title' }),
      modelValue: null
    },
    'VDatePicker'
  ),
  o1 = j()({
    name: 'VDatePicker',
    props: i1(),
    emits: {
      'update:modelValue': (e) => !0,
      'update:month': (e) => !0,
      'update:year': (e) => !0,
      'update:viewMode': (e) => !0
    },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const l = ni(),
        { t: i } = Je(),
        o = be(
          e,
          'modelValue',
          void 0,
          (k) => Xe(k),
          (k) => (e.multiple ? k : k[0])
        ),
        r = be(e, 'viewMode'),
        s = b(() => {
          var P
          const k = l.date((P = o.value) == null ? void 0 : P[0])
          return k && l.isValid(k) ? k : l.date()
        }),
        u = J(Number(e.month ?? l.getMonth(l.startOfMonth(s.value)))),
        c = J(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(s.value, u.value))))),
        f = se(!1),
        v = b(() =>
          e.multiple && o.value.length > 1
            ? i('$vuetify.datePicker.itemsSelected', o.value.length)
            : o.value[0] && l.isValid(o.value[0])
              ? l.format(l.date(o.value[0]), 'normalDateWithWeekday')
              : i(e.header)
        ),
        m = b(() => {
          let k = l.date()
          return (
            (k = l.setDate(k, 1)),
            (k = l.setMonth(k, u.value)),
            (k = l.setYear(k, c.value)),
            l.format(k, 'monthAndYear')
          )
        }),
        g = b(() => `date-picker-header${f.value ? '-reverse' : ''}-transition`),
        h = b(() => {
          const k = l.date(e.min)
          return e.min && l.isValid(k) ? k : null
        }),
        y = b(() => {
          const k = l.date(e.max)
          return e.max && l.isValid(k) ? k : null
        }),
        S = b(() => {
          if (e.disabled) return !0
          const k = []
          if (r.value !== 'month') k.push('prev', 'next')
          else {
            let P = l.date()
            if (((P = l.setYear(P, c.value)), (P = l.setMonth(P, u.value)), h.value)) {
              const E = l.addDays(l.startOfMonth(P), -1)
              l.isAfter(h.value, E) && k.push('prev')
            }
            if (y.value) {
              const E = l.addDays(l.endOfMonth(P), 1)
              l.isAfter(E, y.value) && k.push('next')
            }
          }
          return k
        })
      function p() {
        u.value < 11 ? u.value++ : (c.value++, (u.value = 0), _(c.value)), V(u.value)
      }
      function A() {
        u.value > 0 ? u.value-- : (c.value--, (u.value = 11), _(c.value)), V(u.value)
      }
      function T() {
        r.value = 'month'
      }
      function w() {
        r.value = r.value === 'months' ? 'month' : 'months'
      }
      function x() {
        r.value = r.value === 'year' ? 'month' : 'year'
      }
      function V(k) {
        r.value === 'months' && w(), n('update:month', k)
      }
      function _(k) {
        r.value === 'year' && x(), n('update:year', k)
      }
      return (
        de(o, (k, P) => {
          const E = l.date(Xe(P)[P.length - 1]),
            I = l.date(Xe(k)[k.length - 1]),
            D = l.getMonth(I),
            L = l.getYear(I)
          D !== u.value && ((u.value = D), V(u.value)),
            L !== c.value && ((c.value = L), _(c.value)),
            (f.value = l.isBefore(E, I))
        }),
        K(() => {
          const k = Bd.filterProps(e),
            P = rs.filterProps(e),
            E = ss.filterProps(e),
            I = us.filterProps(e),
            D = it(cs.filterProps(e), ['modelValue']),
            L = it(ds.filterProps(e), ['modelValue']),
            W = { header: v.value, transition: g.value }
          return d(
            Bd,
            X(k, {
              class: [
                'v-date-picker',
                `v-date-picker--${r.value}`,
                { 'v-date-picker--show-week': e.showWeek },
                e.class
              ],
              style: e.style
            }),
            {
              title: () => {
                var Y
                return (
                  ((Y = a.title) == null ? void 0 : Y.call(a)) ??
                  d('div', { class: 'v-date-picker__title' }, [i(e.title)])
                )
              },
              header: () =>
                a.header
                  ? d(
                      Ae,
                      { defaults: { VDatePickerHeader: { ...W } } },
                      {
                        default: () => {
                          var Y
                          return [(Y = a.header) == null ? void 0 : Y.call(a, W)]
                        }
                      }
                    )
                  : d(
                      ss,
                      X({ key: 'header' }, E, W, { onClick: r.value !== 'month' ? T : void 0 }),
                      { ...a, default: void 0 }
                    ),
              default: () =>
                d(me, null, [
                  d(
                    rs,
                    X(P, {
                      disabled: S.value,
                      text: m.value,
                      'onClick:next': p,
                      'onClick:prev': A,
                      'onClick:month': w,
                      'onClick:year': x
                    }),
                    null
                  ),
                  d(
                    zl,
                    { hideOnLeave: !0 },
                    {
                      default: () => [
                        r.value === 'months'
                          ? d(
                              cs,
                              X({ key: 'date-picker-months' }, D, {
                                modelValue: u.value,
                                'onUpdate:modelValue': [(Y) => (u.value = Y), V],
                                min: h.value,
                                max: y.value
                              }),
                              null
                            )
                          : r.value === 'year'
                            ? d(
                                ds,
                                X({ key: 'date-picker-years' }, L, {
                                  modelValue: c.value,
                                  'onUpdate:modelValue': [(Y) => (c.value = Y), _],
                                  min: h.value,
                                  max: y.value
                                }),
                                null
                              )
                            : d(
                                us,
                                X({ key: 'date-picker-month' }, I, {
                                  modelValue: o.value,
                                  'onUpdate:modelValue': (Y) => (o.value = Y),
                                  month: u.value,
                                  'onUpdate:month': [(Y) => (u.value = Y), V],
                                  year: c.value,
                                  'onUpdate:year': [(Y) => (c.value = Y), _],
                                  min: h.value,
                                  max: y.value
                                }),
                                null
                              )
                      ]
                    }
                  )
                ]),
              actions: a.actions
            }
          )
        }),
        {}
      )
    }
  }),
  r1 = $(
    {
      actionText: String,
      bgColor: String,
      color: String,
      icon: xe,
      image: String,
      justify: { type: String, default: 'center' },
      headline: String,
      title: String,
      text: String,
      textWidth: { type: [Number, String], default: 500 },
      href: String,
      to: String,
      ...ve(),
      ...ct(),
      ...wn({ size: void 0 }),
      ...Ee()
    },
    'VEmptyState'
  ),
  s1 = j()({
    name: 'VEmptyState',
    props: r1(),
    emits: { 'click:action': (e) => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const { themeClasses: l } = Re(e),
        { backgroundColorClasses: i, backgroundColorStyles: o } = Ne(N(e, 'bgColor')),
        { dimensionStyles: r } = dt(e),
        { displayClasses: s } = un()
      function u(c) {
        n('click:action', c)
      }
      return (
        K(() => {
          var y, S, p
          const c = !!(a.actions || e.actionText),
            f = !!(a.headline || e.headline),
            v = !!(a.title || e.title),
            m = !!(a.text || e.text),
            g = !!(a.media || e.image || e.icon),
            h = e.size || (e.image ? 200 : 96)
          return d(
            'div',
            {
              class: [
                'v-empty-state',
                { [`v-empty-state--${e.justify}`]: !0 },
                l.value,
                i.value,
                s.value,
                e.class
              ],
              style: [o.value, r.value, e.style]
            },
            [
              g &&
                d('div', { key: 'media', class: 'v-empty-state__media' }, [
                  a.media
                    ? d(
                        Ae,
                        {
                          key: 'media-defaults',
                          defaults: {
                            VImg: { src: e.image, height: h },
                            VIcon: { size: h, icon: e.icon }
                          }
                        },
                        { default: () => [a.media()] }
                      )
                    : d(me, null, [
                        e.image
                          ? d(In, { key: 'image', src: e.image, height: h }, null)
                          : e.icon
                            ? d(Me, { key: 'icon', color: e.color, size: h, icon: e.icon }, null)
                            : void 0
                      ])
                ]),
              f &&
                d('div', { key: 'headline', class: 'v-empty-state__headline' }, [
                  ((y = a.headline) == null ? void 0 : y.call(a)) ?? e.headline
                ]),
              v &&
                d('div', { key: 'title', class: 'v-empty-state__title' }, [
                  ((S = a.title) == null ? void 0 : S.call(a)) ?? e.title
                ]),
              m &&
                d(
                  'div',
                  {
                    key: 'text',
                    class: 'v-empty-state__text',
                    style: { maxWidth: fe(e.textWidth) }
                  },
                  [((p = a.text) == null ? void 0 : p.call(a)) ?? e.text]
                ),
              a.default &&
                d('div', { key: 'content', class: 'v-empty-state__content' }, [a.default()]),
              c &&
                d('div', { key: 'actions', class: 'v-empty-state__actions' }, [
                  d(
                    Ae,
                    {
                      defaults: {
                        VBtn: {
                          class: 'v-empty-state__action-btn',
                          color: e.color,
                          text: e.actionText
                        }
                      }
                    },
                    {
                      default: () => {
                        var A
                        return [
                          ((A = a.actions) == null
                            ? void 0
                            : A.call(a, { props: { onClick: u } })) ?? d(De, { onClick: u }, null)
                        ]
                      }
                    }
                  )
                ])
            ]
          )
        }),
        {}
      )
    }
  }),
  fg = $({ ...ve(), ...Su() }, 'VExpansionPanelText'),
  fs = j()({
    name: 'VExpansionPanelText',
    props: fg(),
    setup(e, t) {
      let { slots: n } = t
      const a = Pe(ql)
      if (!a)
        throw new Error(
          '[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel'
        )
      const { hasContent: l, onAfterLeave: i } = pu(e, a.isSelected)
      return (
        K(() =>
          d(
            po,
            { onAfterLeave: i },
            {
              default: () => {
                var o
                return [
                  We(
                    d('div', { class: ['v-expansion-panel-text', e.class], style: e.style }, [
                      n.default &&
                        l.value &&
                        d('div', { class: 'v-expansion-panel-text__wrapper' }, [
                          (o = n.default) == null ? void 0 : o.call(n)
                        ])
                    ]),
                    [[Zt, a.isSelected.value]]
                  )
                ]
              }
            }
          )
        ),
        {}
      )
    }
  }),
  vg = $(
    {
      color: String,
      expandIcon: { type: xe, default: '$expand' },
      collapseIcon: { type: xe, default: '$collapse' },
      hideActions: Boolean,
      focusable: Boolean,
      static: Boolean,
      ripple: { type: [Boolean, Object], default: !1 },
      readonly: Boolean,
      ...ve()
    },
    'VExpansionPanelTitle'
  ),
  vs = j()({
    name: 'VExpansionPanelTitle',
    directives: { Ripple: Bn },
    props: vg(),
    setup(e, t) {
      let { slots: n } = t
      const a = Pe(ql)
      if (!a)
        throw new Error(
          '[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel'
        )
      const { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(e, 'color'),
        o = b(() => ({
          collapseIcon: e.collapseIcon,
          disabled: a.disabled.value,
          expanded: a.isSelected.value,
          expandIcon: e.expandIcon,
          readonly: e.readonly
        }))
      return (
        K(() => {
          var r
          return We(
            d(
              'button',
              {
                class: [
                  'v-expansion-panel-title',
                  {
                    'v-expansion-panel-title--active': a.isSelected.value,
                    'v-expansion-panel-title--focusable': e.focusable,
                    'v-expansion-panel-title--static': e.static
                  },
                  l.value,
                  e.class
                ],
                style: [i.value, e.style],
                type: 'button',
                tabindex: a.disabled.value ? -1 : void 0,
                disabled: a.disabled.value,
                'aria-expanded': a.isSelected.value,
                onClick: e.readonly ? void 0 : a.toggle
              },
              [
                d('span', { class: 'v-expansion-panel-title__overlay' }, null),
                (r = n.default) == null ? void 0 : r.call(n, o.value),
                !e.hideActions &&
                  d('span', { class: 'v-expansion-panel-title__icon' }, [
                    n.actions
                      ? n.actions(o.value)
                      : d(Me, { icon: a.isSelected.value ? e.collapseIcon : e.expandIcon }, null)
                  ])
              ]
            ),
            [[Ft('ripple'), e.ripple]]
          )
        }),
        {}
      )
    }
  }),
  mg = $(
    {
      title: String,
      text: String,
      bgColor: String,
      ...rt(),
      ...Ia(),
      ...Ue(),
      ..._e(),
      ...vg(),
      ...fg()
    },
    'VExpansionPanel'
  ),
  u1 = j()({
    name: 'VExpansionPanel',
    props: mg(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Aa(e, ql),
        { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(e, 'bgColor'),
        { elevationClasses: o } = ht(e),
        { roundedClasses: r } = qe(e),
        s = b(() => (a == null ? void 0 : a.disabled.value) || e.disabled),
        u = b(() =>
          a.group.items.value.reduce(
            (v, m, g) => (a.group.selected.value.includes(m.id) && v.push(g), v),
            []
          )
        ),
        c = b(() => {
          const v = a.group.items.value.findIndex((m) => m.id === a.id)
          return !a.isSelected.value && u.value.some((m) => m - v === 1)
        }),
        f = b(() => {
          const v = a.group.items.value.findIndex((m) => m.id === a.id)
          return !a.isSelected.value && u.value.some((m) => m - v === -1)
        })
      return (
        Fe(ql, a),
        K(() => {
          const v = !!(n.text || e.text),
            m = !!(n.title || e.title),
            g = vs.filterProps(e),
            h = fs.filterProps(e)
          return d(
            e.tag,
            {
              class: [
                'v-expansion-panel',
                {
                  'v-expansion-panel--active': a.isSelected.value,
                  'v-expansion-panel--before-active': c.value,
                  'v-expansion-panel--after-active': f.value,
                  'v-expansion-panel--disabled': s.value
                },
                r.value,
                l.value,
                e.class
              ],
              style: [i.value, e.style]
            },
            {
              default: () => {
                var y
                return [
                  d('div', { class: ['v-expansion-panel__shadow', ...o.value] }, null),
                  m &&
                    d(vs, X({ key: 'title' }, g), {
                      default: () => [n.title ? n.title() : e.title]
                    }),
                  v &&
                    d(fs, X({ key: 'text' }, h), { default: () => [n.text ? n.text() : e.text] }),
                  (y = n.default) == null ? void 0 : y.call(n)
                ]
              }
            }
          )
        }),
        {}
      )
    }
  }),
  ql = Symbol.for('vuetify:v-expansion-panel'),
  c1 = ['default', 'accordion', 'inset', 'popout'],
  d1 = $(
    {
      flat: Boolean,
      ...Pa(),
      ...mg(),
      ...Ee(),
      variant: { type: String, default: 'default', validator: (e) => c1.includes(e) }
    },
    'VExpansionPanels'
  ),
  f1 = j()({
    name: 'VExpansionPanels',
    props: d1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      Zn(e, ql)
      const { themeClasses: a } = Re(e),
        l = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`)
      return (
        Ke({
          VExpansionPanel: {
            bgColor: N(e, 'bgColor'),
            collapseIcon: N(e, 'collapseIcon'),
            color: N(e, 'color'),
            eager: N(e, 'eager'),
            elevation: N(e, 'elevation'),
            expandIcon: N(e, 'expandIcon'),
            focusable: N(e, 'focusable'),
            hideActions: N(e, 'hideActions'),
            readonly: N(e, 'readonly'),
            ripple: N(e, 'ripple'),
            rounded: N(e, 'rounded'),
            static: N(e, 'static')
          }
        }),
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-expansion-panels',
                { 'v-expansion-panels--flat': e.flat, 'v-expansion-panels--tile': e.tile },
                a.value,
                l.value,
                e.class
              ],
              style: e.style
            },
            n
          )
        ),
        {}
      )
    }
  }),
  v1 = $(
    {
      app: Boolean,
      appear: Boolean,
      extended: Boolean,
      layout: Boolean,
      location: { type: String, default: 'bottom end' },
      offset: Boolean,
      modelValue: { type: Boolean, default: !0 },
      ...it(Co({ active: !0 }), ['location']),
      ...wa(),
      ...cn({ transition: 'fab-transition' })
    },
    'VFab'
  ),
  m1 = j()({
    name: 'VFab',
    props: v1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        l = se(56),
        i = J(),
        { resizeRef: o } = on((f) => {
          f.length && (l.value = f[0].target.clientHeight)
        }),
        r = b(() => e.app || e.absolute),
        s = b(() => (r.value ? e.location.split(' ').shift() : !1)),
        u = b(() => (r.value ? e.location.split(' ')[1] ?? 'end' : !1))
      Dt(
        () => e.app,
        () => {
          const f = xa({
            id: e.name,
            order: b(() => parseInt(e.order, 10)),
            position: s,
            layoutSize: b(() => (e.layout ? l.value + 24 : 0)),
            elementSize: b(() => l.value + 24),
            active: b(() => e.app && a.value),
            absolute: N(e, 'absolute')
          })
          Ze(() => {
            i.value = f.layoutItemStyles.value
          })
        }
      )
      const c = J()
      return (
        K(() => {
          const f = De.filterProps(e)
          return d(
            'div',
            {
              ref: c,
              class: [
                'v-fab',
                {
                  'v-fab--absolute': e.absolute,
                  'v-fab--app': !!e.app,
                  'v-fab--extended': e.extended,
                  'v-fab--offset': e.offset,
                  [`v-fab--${s.value}`]: r.value,
                  [`v-fab--${u.value}`]: r.value
                },
                e.class
              ],
              style: [e.app ? { ...i.value } : { height: 'inherit', width: void 0 }, e.style]
            },
            [
              d('div', { class: 'v-fab__container' }, [
                d(
                  Ct,
                  { appear: e.appear, transition: e.transition },
                  {
                    default: () => [
                      We(d(De, X({ ref: o }, f, { active: void 0, location: void 0 }), n), [
                        [Zt, e.active]
                      ])
                    ]
                  }
                )
              ])
            ]
          )
        }),
        {}
      )
    }
  }),
  h1 = $(
    {
      chips: Boolean,
      counter: Boolean,
      counterSizeString: { type: String, default: '$vuetify.fileInput.counterSize' },
      counterString: { type: String, default: '$vuetify.fileInput.counter' },
      hideInput: Boolean,
      multiple: Boolean,
      showSize: {
        type: [Boolean, Number, String],
        default: !1,
        validator: (e) => typeof e == 'boolean' || [1e3, 1024].includes(Number(e))
      },
      ...Mn({ prependIcon: '$file' }),
      modelValue: {
        type: [Array, Object],
        default: (e) => (e.multiple ? [] : null),
        validator: (e) => Xe(e).every((t) => t != null && typeof t == 'object')
      },
      ...di({ clearable: !0 })
    },
    'VFileInput'
  ),
  g1 = j()({
    name: 'VFileInput',
    inheritAttrs: !1,
    props: h1(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const { t: i } = Je(),
        o = be(
          e,
          'modelValue',
          e.modelValue,
          (k) => Xe(k),
          (k) => (e.multiple || Array.isArray(e.modelValue) ? k : k[0])
        ),
        { isFocused: r, focus: s, blur: u } = Dn(e),
        c = b(() => (typeof e.showSize != 'boolean' ? e.showSize : void 0)),
        f = b(() =>
          (o.value ?? []).reduce((k, P) => {
            let { size: E = 0 } = P
            return k + E
          }, 0)
        ),
        v = b(() => jc(f.value, c.value)),
        m = b(() =>
          (o.value ?? []).map((k) => {
            const { name: P = '', size: E = 0 } = k
            return e.showSize ? `${P} (${jc(E, c.value)})` : P
          })
        ),
        g = b(() => {
          var P
          const k = ((P = o.value) == null ? void 0 : P.length) ?? 0
          return e.showSize ? i(e.counterSizeString, k, v.value) : i(e.counterString, k)
        }),
        h = J(),
        y = J(),
        S = J(),
        p = b(() => r.value || e.active),
        A = b(() => ['plain', 'underlined'].includes(e.variant))
      function T() {
        var k
        S.value !== document.activeElement && ((k = S.value) == null || k.focus()), r.value || s()
      }
      function w(k) {
        var P
        ;(P = S.value) == null || P.click()
      }
      function x(k) {
        a('mousedown:control', k)
      }
      function V(k) {
        var P
        ;(P = S.value) == null || P.click(), a('click:control', k)
      }
      function _(k) {
        k.stopPropagation(),
          T(),
          Te(() => {
            ;(o.value = []), Xs(e['onClick:clear'], k)
          })
      }
      return (
        de(o, (k) => {
          ;(!Array.isArray(k) || !k.length) && S.value && (S.value.value = '')
        }),
        K(() => {
          const k = !!(l.counter || e.counter),
            P = !!(k || l.details),
            [E, I] = Xn(n),
            { modelValue: D, ...L } = bt.filterProps(e),
            W = ku(e)
          return d(
            bt,
            X(
              {
                ref: h,
                modelValue: o.value,
                'onUpdate:modelValue': (Y) => (o.value = Y),
                class: [
                  'v-file-input',
                  {
                    'v-file-input--chips': !!e.chips,
                    'v-file-input--hide': e.hideInput,
                    'v-input--plain-underlined': A.value
                  },
                  e.class
                ],
                style: e.style,
                'onClick:prepend': w
              },
              E,
              L,
              { centerAffix: !A.value, focused: r.value }
            ),
            {
              ...l,
              default: (Y) => {
                let { id: te, isDisabled: F, isDirty: q, isReadonly: O, isValid: z } = Y
                return d(
                  ul,
                  X(
                    {
                      ref: y,
                      'prepend-icon': e.prependIcon,
                      onMousedown: x,
                      onClick: V,
                      'onClick:clear': _,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner']
                    },
                    W,
                    {
                      id: te.value,
                      active: p.value || q.value,
                      dirty: q.value,
                      disabled: F.value,
                      focused: r.value,
                      error: z.value === !1
                    }
                  ),
                  {
                    ...l,
                    default: (ee) => {
                      var ue
                      let {
                        props: { class: he, ...Se }
                      } = ee
                      return d(me, null, [
                        d(
                          'input',
                          X(
                            {
                              ref: S,
                              type: 'file',
                              readonly: O.value,
                              disabled: F.value,
                              multiple: e.multiple,
                              name: e.name,
                              onClick: (Q) => {
                                Q.stopPropagation(), O.value && Q.preventDefault(), T()
                              },
                              onChange: (Q) => {
                                if (!Q.target) return
                                const R = Q.target
                                o.value = [...(R.files ?? [])]
                              },
                              onFocus: T,
                              onBlur: u
                            },
                            Se,
                            I
                          ),
                          null
                        ),
                        d('div', { class: he }, [
                          !!((ue = o.value) != null && ue.length) &&
                            !e.hideInput &&
                            (l.selection
                              ? l.selection({
                                  fileNames: m.value,
                                  totalBytes: f.value,
                                  totalBytesReadable: v.value
                                })
                              : e.chips
                                ? m.value.map((Q) =>
                                    d(rl, { key: Q, size: 'small', text: Q }, null)
                                  )
                                : m.value.join(', '))
                        ])
                      ])
                    }
                  }
                )
              },
              details: P
                ? (Y) => {
                    var te, F
                    return d(me, null, [
                      (te = l.details) == null ? void 0 : te.call(l, Y),
                      k &&
                        d(me, null, [
                          d('span', null, null),
                          d(
                            Io,
                            {
                              active: !!((F = o.value) != null && F.length),
                              value: g.value,
                              disabled: e.disabled
                            },
                            l.counter
                          )
                        ])
                    ])
                  }
                : void 0
            }
          )
        }),
        en({}, h, y, S)
      )
    }
  }),
  y1 = $(
    {
      app: Boolean,
      color: String,
      height: { type: [Number, String], default: 'auto' },
      ...zt(),
      ...ve(),
      ...rt(),
      ...wa(),
      ...Ue(),
      ..._e({ tag: 'footer' }),
      ...Ee()
    },
    'VFooter'
  ),
  b1 = j()({
    name: 'VFooter',
    props: y1(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(N(e, 'color')),
        { borderClasses: o } = Qt(e),
        { elevationClasses: r } = ht(e),
        { roundedClasses: s } = qe(e),
        u = se(32),
        { resizeRef: c } = on((g) => {
          g.length && (u.value = g[0].target.clientHeight)
        }),
        f = b(() => (e.height === 'auto' ? u.value : parseInt(e.height, 10))),
        { layoutItemStyles: v, layoutIsReady: m } = xa({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: b(() => 'bottom'),
          layoutSize: f,
          elementSize: b(() => (e.height === 'auto' ? void 0 : f.value)),
          active: b(() => e.app),
          absolute: N(e, 'absolute')
        })
      return (
        K(() =>
          d(
            e.tag,
            {
              ref: c,
              class: ['v-footer', a.value, l.value, o.value, r.value, s.value, e.class],
              style: [i.value, e.app ? v.value : { height: fe(e.height) }, e.style]
            },
            n
          )
        ),
        e.app ? m : {}
      )
    }
  }),
  S1 = $({ ...ve(), ...Vk() }, 'VForm'),
  p1 = j()({
    name: 'VForm',
    props: S1(),
    emits: { 'update:modelValue': (e) => !0, submit: (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: a } = t
      const l = Pk(e),
        i = J()
      function o(s) {
        s.preventDefault(), l.reset()
      }
      function r(s) {
        const u = s,
          c = l.validate()
        ;(u.then = c.then.bind(c)),
          (u.catch = c.catch.bind(c)),
          (u.finally = c.finally.bind(c)),
          a('submit', u),
          u.defaultPrevented ||
            c.then((f) => {
              var m
              let { valid: v } = f
              v && ((m = i.value) == null || m.submit())
            }),
          u.preventDefault()
      }
      return (
        K(() => {
          var s
          return d(
            'form',
            {
              ref: i,
              class: ['v-form', e.class],
              style: e.style,
              novalidate: !0,
              onReset: o,
              onSubmit: r
            },
            [(s = n.default) == null ? void 0 : s.call(n, l)]
          )
        }),
        en(l, i)
      )
    }
  }),
  k1 = $({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...yu() }, 'VHover'),
  w1 = j()({
    name: 'VHover',
    props: k1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        { runOpenDelay: l, runCloseDelay: i } = bu(e, (o) => !e.disabled && (a.value = o))
      return () => {
        var o
        return (o = n.default) == null
          ? void 0
          : o.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: i } })
      }
    }
  }),
  x1 = $(
    {
      color: String,
      direction: {
        type: String,
        default: 'vertical',
        validator: (e) => ['vertical', 'horizontal'].includes(e)
      },
      side: {
        type: String,
        default: 'end',
        validator: (e) => ['start', 'end', 'both'].includes(e)
      },
      mode: {
        type: String,
        default: 'intersect',
        validator: (e) => ['intersect', 'manual'].includes(e)
      },
      margin: [Number, String],
      loadMoreText: { type: String, default: '$vuetify.infiniteScroll.loadMore' },
      emptyText: { type: String, default: '$vuetify.infiniteScroll.empty' },
      ...ct(),
      ..._e()
    },
    'VInfiniteScroll'
  ),
  Dd = Nt({
    name: 'VInfiniteScrollIntersect',
    props: { side: { type: String, required: !0 }, rootRef: null, rootMargin: String },
    emits: { intersect: (e, t) => !0 },
    setup(e, t) {
      let { emit: n } = t
      const { intersectionRef: a, isIntersecting: l } = ko(
        (i) => {},
        e.rootMargin ? { rootMargin: e.rootMargin } : void 0
      )
      return (
        de(l, async (i) => {
          n('intersect', e.side, i)
        }),
        K(() => d('div', { class: 'v-infinite-scroll-intersect', ref: a }, [qt(' ')])),
        {}
      )
    }
  }),
  C1 = j()({
    name: 'VInfiniteScroll',
    props: x1(),
    emits: { load: (e) => !0 },
    setup(e, t) {
      let { slots: n, emit: a } = t
      const l = J(),
        i = se('ok'),
        o = se('ok'),
        r = b(() => fe(e.margin)),
        s = se(!1)
      function u(w) {
        if (!l.value) return
        const x = e.direction === 'vertical' ? 'scrollTop' : 'scrollLeft'
        l.value[x] = w
      }
      function c() {
        if (!l.value) return 0
        const w = e.direction === 'vertical' ? 'scrollTop' : 'scrollLeft'
        return l.value[w]
      }
      function f() {
        if (!l.value) return 0
        const w = e.direction === 'vertical' ? 'scrollHeight' : 'scrollWidth'
        return l.value[w]
      }
      function v() {
        if (!l.value) return 0
        const w = e.direction === 'vertical' ? 'clientHeight' : 'clientWidth'
        return l.value[w]
      }
      St(() => {
        l.value && (e.side === 'start' ? u(f()) : e.side === 'both' && u(f() / 2 - v() / 2))
      })
      function m(w, x) {
        w === 'start' ? (i.value = x) : w === 'end' && (o.value = x)
      }
      function g(w) {
        return w === 'start' ? i.value : o.value
      }
      let h = 0
      function y(w, x) {
        ;(s.value = x), s.value && S(w)
      }
      function S(w) {
        if (e.mode !== 'manual' && !s.value) return
        const x = g(w)
        if (!l.value || x === 'loading') return
        ;(h = f()), m(w, 'loading')
        function V(_) {
          m(w, _),
            Te(() => {
              _ === 'empty' ||
                _ === 'error' ||
                (_ === 'ok' && w === 'start' && u(f() - h + c()),
                e.mode !== 'manual' &&
                  Te(() => {
                    window.requestAnimationFrame(() => {
                      window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                          S(w)
                        })
                      })
                    })
                  }))
            })
        }
        a('load', { side: w, done: V })
      }
      const { t: p } = Je()
      function A(w, x) {
        var k, P, E, I, D
        if (e.side !== w && e.side !== 'both') return
        const V = () => S(w),
          _ = { side: w, props: { onClick: V, color: e.color } }
        return x === 'error'
          ? (k = n.error) == null
            ? void 0
            : k.call(n, _)
          : x === 'empty'
            ? ((P = n.empty) == null ? void 0 : P.call(n, _)) ?? d('div', null, [p(e.emptyText)])
            : e.mode === 'manual'
              ? x === 'loading'
                ? ((E = n.loading) == null ? void 0 : E.call(n, _)) ??
                  d(Xa, { indeterminate: !0, color: e.color }, null)
                : ((I = n['load-more']) == null ? void 0 : I.call(n, _)) ??
                  d(
                    De,
                    { variant: 'outlined', color: e.color, onClick: V },
                    { default: () => [p(e.loadMoreText)] }
                  )
              : ((D = n.loading) == null ? void 0 : D.call(n, _)) ??
                d(Xa, { indeterminate: !0, color: e.color }, null)
      }
      const { dimensionStyles: T } = dt(e)
      K(() => {
        const w = e.tag,
          x = e.side === 'start' || e.side === 'both',
          V = e.side === 'end' || e.side === 'both',
          _ = e.mode === 'intersect'
        return d(
          w,
          {
            ref: l,
            class: [
              'v-infinite-scroll',
              `v-infinite-scroll--${e.direction}`,
              { 'v-infinite-scroll--start': x, 'v-infinite-scroll--end': V }
            ],
            style: T.value
          },
          {
            default: () => {
              var k
              return [
                d('div', { class: 'v-infinite-scroll__side' }, [A('start', i.value)]),
                l.value &&
                  x &&
                  _ &&
                  d(
                    Dd,
                    {
                      key: 'start',
                      side: 'start',
                      onIntersect: y,
                      rootRef: l.value,
                      rootMargin: r.value
                    },
                    null
                  ),
                (k = n.default) == null ? void 0 : k.call(n),
                l.value &&
                  V &&
                  _ &&
                  d(
                    Dd,
                    {
                      key: 'end',
                      side: 'end',
                      onIntersect: y,
                      rootRef: l.value,
                      rootMargin: r.value
                    },
                    null
                  ),
                d('div', { class: 'v-infinite-scroll__side' }, [A('end', o.value)])
              ]
            }
          }
        )
      })
    }
  }),
  hg = Symbol.for('vuetify:v-item-group'),
  _1 = $({ ...ve(), ...Pa({ selectedClass: 'v-item--selected' }), ..._e(), ...Ee() }, 'VItemGroup'),
  V1 = j()({
    name: 'VItemGroup',
    props: _1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { isSelected: l, select: i, next: o, prev: r, selected: s } = Zn(e, hg)
      return () =>
        d(
          e.tag,
          { class: ['v-item-group', a.value, e.class], style: e.style },
          {
            default: () => {
              var u
              return [
                (u = n.default) == null
                  ? void 0
                  : u.call(n, { isSelected: l, select: i, next: o, prev: r, selected: s.value })
              ]
            }
          }
        )
    }
  }),
  P1 = j()({
    name: 'VItem',
    props: Ia(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const {
        isSelected: a,
        select: l,
        toggle: i,
        selectedClass: o,
        value: r,
        disabled: s
      } = Aa(e, hg)
      return () => {
        var u
        return (u = n.default) == null
          ? void 0
          : u.call(n, {
              isSelected: a.value,
              selectedClass: o.value,
              select: l,
              toggle: i,
              value: r.value,
              disabled: s.value
            })
      }
    }
  }),
  I1 = pn('v-kbd'),
  A1 = $({ ...ve(), ...ct(), ...lm() }, 'VLayout'),
  T1 = j()({
    name: 'VLayout',
    props: A1(),
    setup(e, t) {
      let { slots: n } = t
      const { layoutClasses: a, layoutStyles: l, getLayoutItem: i, items: o, layoutRef: r } = om(e),
        { dimensionStyles: s } = dt(e)
      return (
        K(() =>
          d('div', { ref: r, class: [a.value, e.class], style: [s.value, l.value, e.style] }, [
            d(Nf, null, {
              default: () => {
                var u
                return [d(me, null, [(u = n.default) == null ? void 0 : u.call(n)])]
              }
            })
          ])
        ),
        { getLayoutItem: i, items: o }
      )
    }
  }),
  E1 = $(
    {
      position: { type: String, required: !0 },
      size: { type: [Number, String], default: 300 },
      modelValue: Boolean,
      ...ve(),
      ...wa()
    },
    'VLayoutItem'
  ),
  B1 = j()({
    name: 'VLayoutItem',
    props: E1(),
    setup(e, t) {
      let { slots: n } = t
      const { layoutItemStyles: a, layoutIsReady: l } = xa({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: N(e, 'position'),
        elementSize: N(e, 'size'),
        layoutSize: N(e, 'size'),
        active: N(e, 'modelValue'),
        absolute: N(e, 'absolute')
      })
      return (
        K(() => {
          var i
          return d('div', { class: ['v-layout-item', e.class], style: [a.value, e.style] }, [
            (i = n.default) == null ? void 0 : i.call(n)
          ])
        }),
        l
      )
    }
  }),
  D1 = $(
    {
      modelValue: Boolean,
      options: {
        type: Object,
        default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 })
      },
      ...ve(),
      ...ct(),
      ..._e(),
      ...cn({ transition: 'fade-transition' })
    },
    'VLazy'
  ),
  M1 = j()({
    name: 'VLazy',
    directives: { intersect: ai },
    props: D1(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { dimensionStyles: a } = dt(e),
        l = be(e, 'modelValue')
      function i(o) {
        l.value || (l.value = o)
      }
      return (
        K(() =>
          We(
            d(
              e.tag,
              { class: ['v-lazy', e.class], style: [a.value, e.style] },
              {
                default: () => [
                  l.value &&
                    d(
                      Ct,
                      { transition: e.transition, appear: !0 },
                      {
                        default: () => {
                          var o
                          return [(o = n.default) == null ? void 0 : o.call(n)]
                        }
                      }
                    )
                ]
              }
            ),
            [[Ft('intersect'), { handler: i, options: e.options }, null]]
          )
        ),
        {}
      )
    }
  }),
  R1 = $(
    {
      locale: String,
      fallbackLocale: String,
      messages: Object,
      rtl: { type: Boolean, default: void 0 },
      ...ve()
    },
    'VLocaleProvider'
  ),
  $1 = j()({
    name: 'VLocaleProvider',
    props: R1(),
    setup(e, t) {
      let { slots: n } = t
      const { rtlClasses: a } = wS(e)
      return (
        K(() => {
          var l
          return d('div', { class: ['v-locale-provider', a.value, e.class], style: e.style }, [
            (l = n.default) == null ? void 0 : l.call(n)
          ])
        }),
        {}
      )
    }
  }),
  O1 = $({ scrollable: Boolean, ...ve(), ...ct(), ..._e({ tag: 'main' }) }, 'VMain'),
  L1 = j()({
    name: 'VMain',
    props: O1(),
    setup(e, t) {
      let { slots: n } = t
      const { dimensionStyles: a } = dt(e),
        { mainStyles: l, layoutIsReady: i } = im(),
        { ssrBootStyles: o } = Ca()
      return (
        K(() =>
          d(
            e.tag,
            {
              class: ['v-main', { 'v-main--scrollable': e.scrollable }, e.class],
              style: [l.value, o.value, a.value, e.style]
            },
            {
              default: () => {
                var r, s
                return [
                  e.scrollable
                    ? d('div', { class: 'v-main__scroller' }, [
                        (r = n.default) == null ? void 0 : r.call(n)
                      ])
                    : (s = n.default) == null
                      ? void 0
                      : s.call(n)
                ]
              }
            }
          )
        ),
        i
      )
    }
  })
function F1(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e
  const l = se(!1),
    i = se(0),
    o = b(() => {
      const u = typeof l.value == 'boolean' ? 'top' : l.value
      return [
        n.value ? { top: 'auto', bottom: 'auto', height: void 0 } : void 0,
        l.value ? { [u]: fe(i.value) } : { top: a.value.top }
      ]
    })
  St(() => {
    de(
      n,
      (u) => {
        u
          ? window.addEventListener('scroll', s, { passive: !0 })
          : window.removeEventListener('scroll', s)
      },
      { immediate: !0 }
    )
  }),
    pt(() => {
      window.removeEventListener('scroll', s)
    })
  let r = 0
  function s() {
    const u = r > window.scrollY ? 'up' : 'down',
      c = t.value.getBoundingClientRect(),
      f = parseFloat(a.value.top ?? 0),
      v = window.scrollY - Math.max(0, i.value - f),
      m = c.height + Math.max(i.value, f) - window.scrollY - window.innerHeight,
      g = parseFloat(getComputedStyle(t.value).getPropertyValue('--v-body-scroll-y')) || 0
    c.height < window.innerHeight - f
      ? ((l.value = 'top'), (i.value = f))
      : (u === 'up' && l.value === 'bottom') || (u === 'down' && l.value === 'top')
        ? ((i.value = window.scrollY + c.top - g), (l.value = !0))
        : u === 'down' && m <= 0
          ? ((i.value = 0), (l.value = 'bottom'))
          : u === 'up' &&
            v <= 0 &&
            (g
              ? l.value !== 'top' && ((i.value = -v + g + f), (l.value = 'top'))
              : ((i.value = c.top + v), (l.value = 'top'))),
      (r = window.scrollY)
  }
  return { isStuck: l, stickyStyles: o }
}
const N1 = 100,
  H1 = 20
function Md(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237
}
function Rd(e) {
  if (e.length < 2) return 0
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t)
  let t = 0
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue
    const a = Md(t),
      l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t)
    ;(t += (l - a) * Math.abs(l)), n === e.length - 1 && (t *= 0.5)
  }
  return Md(t) * 1e3
}
function z1() {
  const e = {}
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      ;(e[i.identifier] ?? (e[i.identifier] = new $0(H1))).push([l.timeStamp, i])
    })
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier]
    })
  }
  function a(l) {
    var u
    const i = (u = e[l]) == null ? void 0 : u.values().reverse()
    if (!i) throw new Error(`No samples for touch id ${l}`)
    const o = i[0],
      r = [],
      s = []
    for (const c of i) {
      if (o[0] - c[0] > N1) break
      r.push({ t: c[0], d: c[1].clientX }), s.push({ t: c[0], d: c[1].clientY })
    }
    return {
      x: Rd(r),
      y: Rd(s),
      get direction() {
        const { x: c, y: f } = this,
          [v, m] = [Math.abs(c), Math.abs(f)]
        return v > m && c >= 0
          ? 'right'
          : v > m && c <= 0
            ? 'left'
            : m > v && f >= 0
              ? 'down'
              : m > v && f <= 0
                ? 'up'
                : j1()
      }
    }
  }
  return { addMovement: t, endTouch: n, getVelocity: a }
}
function j1() {
  throw new Error()
}
function W1(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: i, position: o } = e
  St(() => {
    window.addEventListener('touchstart', p, { passive: !0 }),
      window.addEventListener('touchmove', A, { passive: !1 }),
      window.addEventListener('touchend', T, { passive: !0 })
  }),
    pt(() => {
      window.removeEventListener('touchstart', p),
        window.removeEventListener('touchmove', A),
        window.removeEventListener('touchend', T)
    })
  const r = b(() => ['left', 'right'].includes(o.value)),
    { addMovement: s, endTouch: u, getVelocity: c } = z1()
  let f = !1
  const v = se(!1),
    m = se(0),
    g = se(0)
  let h
  function y(x, V) {
    return (
      (o.value === 'left'
        ? x
        : o.value === 'right'
          ? document.documentElement.clientWidth - x
          : o.value === 'top'
            ? x
            : o.value === 'bottom'
              ? document.documentElement.clientHeight - x
              : Ra()) - (V ? l.value : 0)
    )
  }
  function S(x) {
    let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
    const _ =
      o.value === 'left'
        ? (x - g.value) / l.value
        : o.value === 'right'
          ? (document.documentElement.clientWidth - x - g.value) / l.value
          : o.value === 'top'
            ? (x - g.value) / l.value
            : o.value === 'bottom'
              ? (document.documentElement.clientHeight - x - g.value) / l.value
              : Ra()
    return V ? Math.max(0, Math.min(1, _)) : _
  }
  function p(x) {
    if (i.value) return
    const V = x.changedTouches[0].clientX,
      _ = x.changedTouches[0].clientY,
      k = 25,
      P =
        o.value === 'left'
          ? V < k
          : o.value === 'right'
            ? V > document.documentElement.clientWidth - k
            : o.value === 'top'
              ? _ < k
              : o.value === 'bottom'
                ? _ > document.documentElement.clientHeight - k
                : Ra(),
      E =
        n.value &&
        (o.value === 'left'
          ? V < l.value
          : o.value === 'right'
            ? V > document.documentElement.clientWidth - l.value
            : o.value === 'top'
              ? _ < l.value
              : o.value === 'bottom'
                ? _ > document.documentElement.clientHeight - l.value
                : Ra())
    ;(P || E || (n.value && a.value)) &&
      ((h = [V, _]),
      (g.value = y(r.value ? V : _, n.value)),
      (m.value = S(r.value ? V : _)),
      (f = g.value > -20 && g.value < 80),
      u(x),
      s(x))
  }
  function A(x) {
    const V = x.changedTouches[0].clientX,
      _ = x.changedTouches[0].clientY
    if (f) {
      if (!x.cancelable) {
        f = !1
        return
      }
      const P = Math.abs(V - h[0]),
        E = Math.abs(_ - h[1])
      ;(r.value ? P > E && P > 3 : E > P && E > 3)
        ? ((v.value = !0), (f = !1))
        : (r.value ? E : P) > 3 && (f = !1)
    }
    if (!v.value) return
    x.preventDefault(), s(x)
    const k = S(r.value ? V : _, !1)
    ;(m.value = Math.max(0, Math.min(1, k))),
      k > 1 ? (g.value = y(r.value ? V : _, !0)) : k < 0 && (g.value = y(r.value ? V : _, !1))
  }
  function T(x) {
    if (((f = !1), !v.value)) return
    s(x), (v.value = !1)
    const V = c(x.changedTouches[0].identifier),
      _ = Math.abs(V.x),
      k = Math.abs(V.y)
    ;(r.value ? _ > k && _ > 400 : k > _ && k > 3)
      ? (n.value =
          V.direction ===
          ({ left: 'right', right: 'left', top: 'down', bottom: 'up' }[o.value] || Ra()))
      : (n.value = m.value > 0.5)
  }
  const w = b(() =>
    v.value
      ? {
          transform:
            o.value === 'left'
              ? `translateX(calc(-100% + ${m.value * l.value}px))`
              : o.value === 'right'
                ? `translateX(calc(100% - ${m.value * l.value}px))`
                : o.value === 'top'
                  ? `translateY(calc(-100% + ${m.value * l.value}px))`
                  : o.value === 'bottom'
                    ? `translateY(calc(100% - ${m.value * l.value}px))`
                    : Ra(),
          transition: 'none'
        }
      : void 0
  )
  return (
    Dt(v, () => {
      var _, k
      const x = ((_ = t.value) == null ? void 0 : _.style.transform) ?? null,
        V = ((k = t.value) == null ? void 0 : k.style.transition) ?? null
      Ze(() => {
        var P, E, I, D
        ;(E = t.value) == null ||
          E.style.setProperty(
            'transform',
            ((P = w.value) == null ? void 0 : P.transform) || 'none'
          ),
          (D = t.value) == null ||
            D.style.setProperty(
              'transition',
              ((I = w.value) == null ? void 0 : I.transition) || null
            )
      }),
        _t(() => {
          var P, E
          ;(P = t.value) == null || P.style.setProperty('transform', x),
            (E = t.value) == null || E.style.setProperty('transition', V)
        })
    }),
    { isDragging: v, dragProgress: m, dragStyles: w }
  )
}
function Ra() {
  throw new Error()
}
const U1 = ['start', 'end', 'left', 'right', 'top', 'bottom'],
  G1 = $(
    {
      color: String,
      disableResizeWatcher: Boolean,
      disableRouteWatcher: Boolean,
      expandOnHover: Boolean,
      floating: Boolean,
      modelValue: { type: Boolean, default: null },
      permanent: Boolean,
      rail: { type: Boolean, default: null },
      railWidth: { type: [Number, String], default: 56 },
      scrim: { type: [Boolean, String], default: !0 },
      image: String,
      temporary: Boolean,
      persistent: Boolean,
      touchless: Boolean,
      width: { type: [Number, String], default: 256 },
      location: { type: String, default: 'start', validator: (e) => U1.includes(e) },
      sticky: Boolean,
      ...zt(),
      ...ve(),
      ...yu(),
      ...nl(),
      ...rt(),
      ...wa(),
      ...Ue(),
      ..._e({ tag: 'nav' }),
      ...Ee()
    },
    'VNavigationDrawer'
  ),
  Y1 = j()({
    name: 'VNavigationDrawer',
    props: G1(),
    emits: { 'update:modelValue': (e) => !0, 'update:rail': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const { isRtl: i } = ut(),
        { themeClasses: o } = Re(e),
        { borderClasses: r } = Qt(e),
        { backgroundColorClasses: s, backgroundColorStyles: u } = Ne(N(e, 'color')),
        { elevationClasses: c } = ht(e),
        { displayClasses: f, mobile: v } = un(e),
        { roundedClasses: m } = qe(e),
        g = ym(),
        h = be(e, 'modelValue', null, (ee) => !!ee),
        { ssrBootStyles: y } = Ca(),
        { scopeId: S } = sl(),
        p = J(),
        A = se(!1),
        { runOpenDelay: T, runCloseDelay: w } = bu(e, (ee) => {
          A.value = ee
        }),
        x = b(() =>
          e.rail && e.expandOnHover && A.value
            ? Number(e.width)
            : Number(e.rail ? e.railWidth : e.width)
        ),
        V = b(() => $r(e.location, i.value)),
        _ = b(() => e.persistent),
        k = b(() => !e.permanent && (v.value || e.temporary)),
        P = b(() => e.sticky && !k.value && V.value !== 'bottom')
      Dt(
        () => e.expandOnHover && e.rail != null,
        () => {
          de(A, (ee) => a('update:rail', !ee))
        }
      ),
        Dt(
          () => !e.disableResizeWatcher,
          () => {
            de(k, (ee) => !e.permanent && Te(() => (h.value = !ee)))
          }
        ),
        Dt(
          () => !e.disableRouteWatcher && !!g,
          () => {
            de(g.currentRoute, () => k.value && (h.value = !1))
          }
        ),
        de(
          () => e.permanent,
          (ee) => {
            ee && (h.value = !0)
          }
        ),
        e.modelValue == null && !k.value && (h.value = e.permanent || !v.value)
      const { isDragging: E, dragProgress: I } = W1({
          el: p,
          isActive: h,
          isTemporary: k,
          width: x,
          touchless: N(e, 'touchless'),
          position: V
        }),
        D = b(() => {
          const ee = k.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : x.value
          return E.value ? ee * I.value : ee
        }),
        L = b(() => (['top', 'bottom'].includes(e.location) ? 0 : x.value)),
        {
          layoutItemStyles: W,
          layoutItemScrimStyles: Y,
          layoutIsReady: te
        } = xa({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: V,
          layoutSize: D,
          elementSize: L,
          active: b(() => h.value || E.value),
          disableTransitions: b(() => E.value),
          absolute: b(() => e.absolute || (P.value && typeof F.value != 'string'))
        }),
        { isStuck: F, stickyStyles: q } = F1({ rootEl: p, isSticky: P, layoutItemStyles: W }),
        O = Ne(b(() => (typeof e.scrim == 'string' ? e.scrim : null))),
        z = b(() => ({
          ...(E.value ? { opacity: I.value * 0.2, transition: 'none' } : void 0),
          ...Y.value
        }))
      return (
        Ke({ VList: { bgColor: 'transparent' } }),
        K(() => {
          const ee = l.image || e.image
          return d(me, null, [
            d(
              e.tag,
              X(
                {
                  ref: p,
                  onMouseenter: T,
                  onMouseleave: w,
                  class: [
                    'v-navigation-drawer',
                    `v-navigation-drawer--${V.value}`,
                    {
                      'v-navigation-drawer--expand-on-hover': e.expandOnHover,
                      'v-navigation-drawer--floating': e.floating,
                      'v-navigation-drawer--is-hovering': A.value,
                      'v-navigation-drawer--rail': e.rail,
                      'v-navigation-drawer--temporary': k.value,
                      'v-navigation-drawer--persistent': _.value,
                      'v-navigation-drawer--active': h.value,
                      'v-navigation-drawer--sticky': P.value
                    },
                    o.value,
                    s.value,
                    r.value,
                    f.value,
                    c.value,
                    m.value,
                    e.class
                  ],
                  style: [
                    u.value,
                    W.value,
                    y.value,
                    q.value,
                    e.style,
                    ['top', 'bottom'].includes(V.value) ? { height: 'auto' } : {}
                  ]
                },
                S,
                n
              ),
              {
                default: () => {
                  var he, Se, ue
                  return [
                    ee &&
                      d('div', { key: 'image', class: 'v-navigation-drawer__img' }, [
                        l.image
                          ? d(
                              Ae,
                              {
                                key: 'image-defaults',
                                disabled: !e.image,
                                defaults: {
                                  VImg: { alt: '', cover: !0, height: 'inherit', src: e.image }
                                }
                              },
                              l.image
                            )
                          : d(
                              In,
                              {
                                key: 'image-img',
                                alt: '',
                                cover: !0,
                                height: 'inherit',
                                src: e.image
                              },
                              null
                            )
                      ]),
                    l.prepend &&
                      d('div', { class: 'v-navigation-drawer__prepend' }, [
                        (he = l.prepend) == null ? void 0 : he.call(l)
                      ]),
                    d('div', { class: 'v-navigation-drawer__content' }, [
                      (Se = l.default) == null ? void 0 : Se.call(l)
                    ]),
                    l.append &&
                      d('div', { class: 'v-navigation-drawer__append' }, [
                        (ue = l.append) == null ? void 0 : ue.call(l)
                      ])
                  ]
                }
              }
            ),
            d(
              gn,
              { name: 'fade-transition' },
              {
                default: () => [
                  k.value &&
                    (E.value || h.value) &&
                    !!e.scrim &&
                    d(
                      'div',
                      X(
                        {
                          class: ['v-navigation-drawer__scrim', O.backgroundColorClasses.value],
                          style: [z.value, O.backgroundColorStyles.value],
                          onClick: () => {
                            _.value || (h.value = !1)
                          }
                        },
                        S
                      ),
                      null
                    )
                ]
              }
            )
          ])
        }),
        te.then(() => ({ isStuck: F }))
      )
    }
  }),
  K1 = Nt({
    name: 'VNoSsr',
    setup(e, t) {
      let { slots: n } = t
      const a = nh()
      return () => {
        var l
        return a.value && ((l = n.default) == null ? void 0 : l.call(n))
      }
    }
  }),
  q1 = $(
    {
      autofocus: Boolean,
      divider: String,
      focusAll: Boolean,
      label: { type: String, default: '$vuetify.input.otp' },
      length: { type: [Number, String], default: 6 },
      modelValue: { type: [Number, String], default: void 0 },
      placeholder: String,
      type: { type: String, default: 'number' },
      ...ct(),
      ...si(),
      ...vo(di({ variant: 'outlined' }), [
        'baseColor',
        'bgColor',
        'class',
        'color',
        'disabled',
        'error',
        'loading',
        'rounded',
        'style',
        'theme',
        'variant'
      ])
    },
    'VOtpInput'
  ),
  X1 = j()({
    name: 'VOtpInput',
    props: q1(),
    emits: { finish: (e) => !0, 'update:focused': (e) => !0, 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const { dimensionStyles: i } = dt(e),
        { isFocused: o, focus: r, blur: s } = Dn(e),
        u = be(
          e,
          'modelValue',
          '',
          (_) => (_ == null ? [] : String(_).split('')),
          (_) => _.join('')
        ),
        { t: c } = Je(),
        f = b(() => Number(e.length)),
        v = b(() => Array(f.value).fill(0)),
        m = J(-1),
        g = J(),
        h = J([]),
        y = b(() => h.value[m.value])
      function S() {
        if (V(y.value.value)) {
          y.value.value = ''
          return
        }
        const _ = u.value.slice(),
          k = y.value.value
        _[m.value] = k
        let P = null
        m.value > u.value.length
          ? (P = u.value.length + 1)
          : m.value + 1 !== f.value && (P = 'next'),
          (u.value = _),
          P && Ga(g.value, P)
      }
      function p(_) {
        const k = u.value.slice(),
          P = m.value
        let E = null
        ;['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(_.key) &&
          (_.preventDefault(),
          _.key === 'ArrowLeft'
            ? (E = 'prev')
            : _.key === 'ArrowRight'
              ? (E = 'next')
              : ['Backspace', 'Delete'].includes(_.key) &&
                ((k[m.value] = ''),
                (u.value = k),
                m.value > 0 && _.key === 'Backspace'
                  ? (E = 'prev')
                  : requestAnimationFrame(() => {
                      var I
                      ;(I = h.value[P]) == null || I.select()
                    })),
          requestAnimationFrame(() => {
            E != null && Ga(g.value, E)
          }))
      }
      function A(_, k) {
        var E, I
        k.preventDefault(), k.stopPropagation()
        const P =
          ((E = k == null ? void 0 : k.clipboardData) == null ? void 0 : E.getData('Text')) ?? ''
        V(P) || ((u.value = P.split('')), (I = h.value) == null || I[_].blur())
      }
      function T() {
        u.value = []
      }
      function w(_, k) {
        r(), (m.value = k)
      }
      function x() {
        s(), (m.value = -1)
      }
      function V(_) {
        return e.type === 'number' && /[^0-9]/g.test(_)
      }
      return (
        Ke(
          {
            VField: {
              color: b(() => e.color),
              bgColor: b(() => e.color),
              baseColor: b(() => e.baseColor),
              disabled: b(() => e.disabled),
              error: b(() => e.error),
              variant: b(() => e.variant)
            }
          },
          { scoped: !0 }
        ),
        de(
          u,
          (_) => {
            _.length === f.value && a('finish', _.join(''))
          },
          { deep: !0 }
        ),
        de(m, (_) => {
          _ < 0 ||
            Te(() => {
              var k
              ;(k = h.value[_]) == null || k.select()
            })
        }),
        K(() => {
          var P
          const [_, k] = Xn(n)
          return d(
            'div',
            X(
              {
                class: ['v-otp-input', { 'v-otp-input--divided': !!e.divider }, e.class],
                style: [e.style]
              },
              _
            ),
            [
              d('div', { ref: g, class: 'v-otp-input__content', style: [i.value] }, [
                v.value.map((E, I) =>
                  d(me, null, [
                    e.divider &&
                      I !== 0 &&
                      d('span', { class: 'v-otp-input__divider' }, [e.divider]),
                    d(
                      ul,
                      { focused: (o.value && e.focusAll) || m.value === I, key: I },
                      {
                        ...l,
                        loader: void 0,
                        default: () =>
                          d(
                            'input',
                            {
                              ref: (D) => (h.value[I] = D),
                              'aria-label': c(e.label, I + 1),
                              autofocus: I === 0 && e.autofocus,
                              autocomplete: 'one-time-code',
                              class: ['v-otp-input__field'],
                              disabled: e.disabled,
                              inputmode: e.type === 'number' ? 'numeric' : 'text',
                              min: e.type === 'number' ? 0 : void 0,
                              maxlength: '1',
                              placeholder: e.placeholder,
                              type: e.type === 'number' ? 'text' : e.type,
                              value: u.value[I],
                              onInput: S,
                              onFocus: (D) => w(D, I),
                              onBlur: x,
                              onKeydown: p,
                              onPaste: (D) => A(I, D)
                            },
                            null
                          )
                      }
                    )
                  ])
                ),
                d(
                  'input',
                  X({ class: 'v-otp-input-input', type: 'hidden' }, k, { value: u.value.join('') }),
                  null
                ),
                d(
                  yn,
                  {
                    contained: !0,
                    'content-class': 'v-otp-input__loader',
                    'model-value': !!e.loading,
                    persistent: !0
                  },
                  {
                    default: () => {
                      var E
                      return [
                        ((E = l.loader) == null ? void 0 : E.call(l)) ??
                          d(
                            Xa,
                            {
                              color: typeof e.loading == 'boolean' ? void 0 : e.loading,
                              indeterminate: !0,
                              size: '24',
                              width: '2'
                            },
                            null
                          )
                      ]
                    }
                  }
                ),
                (P = l.default) == null ? void 0 : P.call(l)
              ])
            ]
          )
        }),
        {
          blur: () => {
            var _
            ;(_ = h.value) == null || _.some((k) => k.blur())
          },
          focus: () => {
            var _
            ;(_ = h.value) == null || _[0].focus()
          },
          reset: T,
          isFocused: o
        }
      )
    }
  })
function Z1(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e)
}
const Q1 = $({ scale: { type: [Number, String], default: 0.5 }, ...ve() }, 'VParallax'),
  J1 = j()({
    name: 'VParallax',
    props: Q1(),
    setup(e, t) {
      let { slots: n } = t
      const { intersectionRef: a, isIntersecting: l } = ko(),
        { resizeRef: i, contentRect: o } = on(),
        { height: r } = un(),
        s = J()
      Ze(() => {
        var m
        a.value = i.value = (m = s.value) == null ? void 0 : m.$el
      })
      let u
      de(l, (m) => {
        m
          ? ((u = tu(a.value)),
            (u = u === document.scrollingElement ? document : u),
            u.addEventListener('scroll', v, { passive: !0 }),
            v())
          : u.removeEventListener('scroll', v)
      }),
        pt(() => {
          u == null || u.removeEventListener('scroll', v)
        }),
        de(r, v),
        de(() => {
          var m
          return (m = o.value) == null ? void 0 : m.height
        }, v)
      const c = b(() => 1 - et(+e.scale))
      let f = -1
      function v() {
        l.value &&
          (cancelAnimationFrame(f),
          (f = requestAnimationFrame(() => {
            var w
            const m = ((w = s.value) == null ? void 0 : w.$el).querySelector('.v-img__img')
            if (!m) return
            const g =
                u instanceof Document ? document.documentElement.clientHeight : u.clientHeight,
              h = u instanceof Document ? window.scrollY : u.scrollTop,
              y = a.value.getBoundingClientRect().top + h,
              S = o.value.height,
              p = y + (S - g) / 2,
              A = Z1((h - p) * c.value),
              T = Math.max(1, (c.value * (g - S) + S) / S)
            m.style.setProperty('transform', `translateY(${A}px) scale(${T})`)
          })))
      }
      return (
        K(() =>
          d(
            In,
            {
              class: ['v-parallax', { 'v-parallax--active': l.value }, e.class],
              style: e.style,
              ref: s,
              cover: !0,
              onLoadstart: v,
              onLoad: v
            },
            n
          )
        ),
        {}
      )
    }
  }),
  e_ = $({ ..._o({ falseIcon: '$radioOff', trueIcon: '$radioOn' }) }, 'VRadio'),
  t_ = j()({
    name: 'VRadio',
    props: e_(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => d(va, X(e, { class: ['v-radio', e.class], style: e.style, type: 'radio' }), n)), {}
      )
    }
  }),
  n_ = $(
    {
      height: { type: [Number, String], default: 'auto' },
      ...Mn(),
      ...it(fu(), ['multiple']),
      trueIcon: { type: xe, default: '$radioOn' },
      falseIcon: { type: xe, default: '$radioOff' },
      type: { type: String, default: 'radio' }
    },
    'VRadioGroup'
  ),
  a_ = j()({
    name: 'VRadioGroup',
    inheritAttrs: !1,
    props: n_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const l = mt(),
        i = b(() => e.id || `radio-group-${l}`),
        o = be(e, 'modelValue')
      return (
        K(() => {
          const [r, s] = Xn(n),
            u = bt.filterProps(e),
            c = va.filterProps(e),
            f = a.label ? a.label({ label: e.label, props: { for: i.value } }) : e.label
          return d(
            bt,
            X({ class: ['v-radio-group', e.class], style: e.style }, r, u, {
              modelValue: o.value,
              'onUpdate:modelValue': (v) => (o.value = v),
              id: i.value
            }),
            {
              ...a,
              default: (v) => {
                let { id: m, messagesId: g, isDisabled: h, isReadonly: y } = v
                return d(me, null, [
                  f && d(ol, { id: m.value }, { default: () => [f] }),
                  d(
                    Im,
                    X(
                      c,
                      {
                        id: m.value,
                        'aria-describedby': g.value,
                        defaultsTarget: 'VRadio',
                        trueIcon: e.trueIcon,
                        falseIcon: e.falseIcon,
                        type: e.type,
                        disabled: h.value,
                        readonly: y.value,
                        'aria-labelledby': f ? m.value : void 0,
                        multiple: !1
                      },
                      s,
                      { modelValue: o.value, 'onUpdate:modelValue': (S) => (o.value = S) }
                    ),
                    a
                  )
                ])
              }
            }
          )
        }),
        {}
      )
    }
  }),
  l_ = $(
    {
      ...si(),
      ...Mn(),
      ...xh(),
      strict: Boolean,
      modelValue: { type: Array, default: () => [0, 0] }
    },
    'VRangeSlider'
  ),
  i_ = j()({
    name: 'VRangeSlider',
    props: l_(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      end: (e) => !0,
      start: (e) => !0
    },
    setup(e, t) {
      let { slots: n, emit: a } = t
      const l = J(),
        i = J(),
        o = J(),
        { rtlClasses: r } = ut()
      function s(P) {
        if (!l.value || !i.value) return
        const E = ns(P, l.value.$el, e.direction),
          I = ns(P, i.value.$el, e.direction),
          D = Math.abs(E),
          L = Math.abs(I)
        return D < L || (D === L && E < 0) ? l.value.$el : i.value.$el
      }
      const u = Ch(e),
        c = be(e, 'modelValue', void 0, (P) =>
          P != null && P.length ? P.map((E) => u.roundValue(E)) : [0, 0]
        ),
        {
          activeThumbRef: f,
          hasLabels: v,
          max: m,
          min: g,
          mousePressed: h,
          onSliderMousedown: y,
          onSliderTouchstart: S,
          position: p,
          trackContainerRef: A,
          readonly: T
        } = _h({
          props: e,
          steps: u,
          onSliderStart: () => {
            a('start', c.value)
          },
          onSliderEnd: (P) => {
            var D
            let { value: E } = P
            const I =
              f.value === ((D = l.value) == null ? void 0 : D.$el)
                ? [E, c.value[1]]
                : [c.value[0], E]
            !e.strict && I[0] < I[1] && (c.value = I), a('end', c.value)
          },
          onSliderMove: (P) => {
            var L, W, Y, te
            let { value: E } = P
            const [I, D] = c.value
            !e.strict &&
              I === D &&
              I !== g.value &&
              ((f.value =
                E > I
                  ? (L = i.value) == null
                    ? void 0
                    : L.$el
                  : (W = l.value) == null
                    ? void 0
                    : W.$el),
              (Y = f.value) == null || Y.focus()),
              f.value === ((te = l.value) == null ? void 0 : te.$el)
                ? (c.value = [Math.min(E, D), D])
                : (c.value = [I, Math.max(I, E)])
          },
          getActiveThumb: s
        }),
        { isFocused: w, focus: x, blur: V } = Dn(e),
        _ = b(() => p(c.value[0])),
        k = b(() => p(c.value[1]))
      return (
        K(() => {
          const P = bt.filterProps(e),
            E = !!(e.label || n.label || n.prepend)
          return d(
            bt,
            X(
              {
                class: [
                  'v-slider',
                  'v-range-slider',
                  {
                    'v-slider--has-labels': !!n['tick-label'] || v.value,
                    'v-slider--focused': w.value,
                    'v-slider--pressed': h.value,
                    'v-slider--disabled': e.disabled
                  },
                  r.value,
                  e.class
                ],
                style: e.style,
                ref: o
              },
              P,
              { focused: w.value }
            ),
            {
              ...n,
              prepend: E
                ? (I) => {
                    var D, L
                    return d(me, null, [
                      ((D = n.label) == null ? void 0 : D.call(n, I)) ??
                        (e.label
                          ? d(ol, { class: 'v-slider__label', text: e.label }, null)
                          : void 0),
                      (L = n.prepend) == null ? void 0 : L.call(n, I)
                    ])
                  }
                : void 0,
              default: (I) => {
                var W, Y
                let { id: D, messagesId: L } = I
                return d(
                  'div',
                  {
                    class: 'v-slider__container',
                    onMousedown: T.value ? void 0 : y,
                    onTouchstartPassive: T.value ? void 0 : S
                  },
                  [
                    d(
                      'input',
                      {
                        id: `${D.value}_start`,
                        name: e.name || D.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: '-1',
                        value: c.value[0]
                      },
                      null
                    ),
                    d(
                      'input',
                      {
                        id: `${D.value}_stop`,
                        name: e.name || D.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: '-1',
                        value: c.value[1]
                      },
                      null
                    ),
                    d(
                      Vh,
                      { ref: A, start: _.value, stop: k.value },
                      { 'tick-label': n['tick-label'] }
                    ),
                    d(
                      as,
                      {
                        ref: l,
                        'aria-describedby': L.value,
                        focused: w && f.value === ((W = l.value) == null ? void 0 : W.$el),
                        modelValue: c.value[0],
                        'onUpdate:modelValue': (te) => (c.value = [te, c.value[1]]),
                        onFocus: (te) => {
                          var F, q, O, z
                          x(),
                            (f.value = (F = l.value) == null ? void 0 : F.$el),
                            c.value[0] === c.value[1] &&
                              c.value[1] === g.value &&
                              te.relatedTarget !== ((q = i.value) == null ? void 0 : q.$el) &&
                              ((O = l.value) == null || O.$el.blur(),
                              (z = i.value) == null || z.$el.focus())
                        },
                        onBlur: () => {
                          V(), (f.value = void 0)
                        },
                        min: g.value,
                        max: c.value[1],
                        position: _.value,
                        ripple: e.ripple
                      },
                      { 'thumb-label': n['thumb-label'] }
                    ),
                    d(
                      as,
                      {
                        ref: i,
                        'aria-describedby': L.value,
                        focused: w && f.value === ((Y = i.value) == null ? void 0 : Y.$el),
                        modelValue: c.value[1],
                        'onUpdate:modelValue': (te) => (c.value = [c.value[0], te]),
                        onFocus: (te) => {
                          var F, q, O, z
                          x(),
                            (f.value = (F = i.value) == null ? void 0 : F.$el),
                            c.value[0] === c.value[1] &&
                              c.value[0] === m.value &&
                              te.relatedTarget !== ((q = l.value) == null ? void 0 : q.$el) &&
                              ((O = i.value) == null || O.$el.blur(),
                              (z = l.value) == null || z.$el.focus())
                        },
                        onBlur: () => {
                          V(), (f.value = void 0)
                        },
                        min: c.value[0],
                        max: m.value,
                        position: k.value,
                        ripple: e.ripple
                      },
                      { 'thumb-label': n['thumb-label'] }
                    )
                  ]
                )
              }
            }
          )
        }),
        {}
      )
    }
  }),
  o_ = $(
    {
      name: String,
      itemAriaLabel: { type: String, default: '$vuetify.rating.ariaLabel.item' },
      activeColor: String,
      color: String,
      clearable: Boolean,
      disabled: Boolean,
      emptyIcon: { type: xe, default: '$ratingEmpty' },
      fullIcon: { type: xe, default: '$ratingFull' },
      halfIncrements: Boolean,
      hover: Boolean,
      length: { type: [Number, String], default: 5 },
      readonly: Boolean,
      modelValue: { type: [Number, String], default: 0 },
      itemLabels: Array,
      itemLabelPosition: {
        type: String,
        default: 'top',
        validator: (e) => ['top', 'bottom'].includes(e)
      },
      ripple: Boolean,
      ...ve(),
      ...ft(),
      ...wn(),
      ..._e(),
      ...Ee()
    },
    'VRating'
  ),
  r_ = j()({
    name: 'VRating',
    props: o_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { t: a } = Je(),
        { themeClasses: l } = Re(e),
        i = be(e, 'modelValue'),
        o = b(() => et(parseFloat(i.value), 0, +e.length)),
        r = b(() => hn(Number(e.length), 1)),
        s = b(() => r.value.flatMap((h) => (e.halfIncrements ? [h - 0.5, h] : [h]))),
        u = se(-1),
        c = b(() =>
          s.value.map((h) => {
            const y = e.hover && u.value > -1,
              S = o.value >= h,
              p = u.value >= h,
              T = (y ? p : S) ? e.fullIcon : e.emptyIcon,
              w = e.activeColor ?? e.color,
              x = S || p ? w : e.color
            return { isFilled: S, isHovered: p, icon: T, color: x }
          })
        ),
        f = b(() =>
          [0, ...s.value].map((h) => {
            function y() {
              u.value = h
            }
            function S() {
              u.value = -1
            }
            function p() {
              e.disabled || e.readonly || (i.value = o.value === h && e.clearable ? 0 : h)
            }
            return {
              onMouseenter: e.hover ? y : void 0,
              onMouseleave: e.hover ? S : void 0,
              onClick: p
            }
          })
        ),
        v = b(() => e.name ?? `v-rating-${mt()}`)
      function m(h) {
        var _, k
        let { value: y, index: S, showStar: p = !0 } = h
        const { onMouseenter: A, onMouseleave: T, onClick: w } = f.value[S + 1],
          x = `${v.value}-${String(y).replace('.', '-')}`,
          V = {
            color: (_ = c.value[S]) == null ? void 0 : _.color,
            density: e.density,
            disabled: e.disabled,
            icon: (k = c.value[S]) == null ? void 0 : k.icon,
            ripple: e.ripple,
            size: e.size,
            variant: 'plain'
          }
        return d(me, null, [
          d(
            'label',
            {
              for: x,
              class: {
                'v-rating__item--half': e.halfIncrements && y % 1 > 0,
                'v-rating__item--full': e.halfIncrements && y % 1 === 0
              },
              onMouseenter: A,
              onMouseleave: T,
              onClick: w
            },
            [
              d('span', { class: 'v-rating__hidden' }, [a(e.itemAriaLabel, y, e.length)]),
              p
                ? n.item
                  ? n.item({ ...c.value[S], props: V, value: y, index: S, rating: o.value })
                  : d(De, X({ 'aria-label': a(e.itemAriaLabel, y, e.length) }, V), null)
                : void 0
            ]
          ),
          d(
            'input',
            {
              class: 'v-rating__hidden',
              name: v.value,
              id: x,
              type: 'radio',
              value: y,
              checked: o.value === y,
              tabindex: -1,
              readonly: e.readonly,
              disabled: e.disabled
            },
            null
          )
        ])
      }
      function g(h) {
        return n['item-label']
          ? n['item-label'](h)
          : h.label
            ? d('span', null, [h.label])
            : d('span', null, [qt(' ')])
      }
      return (
        K(() => {
          var y
          const h = !!((y = e.itemLabels) != null && y.length) || n['item-label']
          return d(
            e.tag,
            {
              class: [
                'v-rating',
                { 'v-rating--hover': e.hover, 'v-rating--readonly': e.readonly },
                l.value,
                e.class
              ],
              style: e.style
            },
            {
              default: () => [
                d(m, { value: 0, index: -1, showStar: !1 }, null),
                r.value.map((S, p) => {
                  var A, T
                  return d('div', { class: 'v-rating__wrapper' }, [
                    h && e.itemLabelPosition === 'top'
                      ? g({ value: S, index: p, label: (A = e.itemLabels) == null ? void 0 : A[p] })
                      : void 0,
                    d('div', { class: 'v-rating__item' }, [
                      e.halfIncrements
                        ? d(me, null, [
                            d(m, { value: S - 0.5, index: p * 2 }, null),
                            d(m, { value: S, index: p * 2 + 1 }, null)
                          ])
                        : d(m, { value: S, index: p }, null)
                    ]),
                    h && e.itemLabelPosition === 'bottom'
                      ? g({ value: S, index: p, label: (T = e.itemLabels) == null ? void 0 : T[p] })
                      : void 0
                  ])
                })
              ]
            }
          )
        }),
        {}
      )
    }
  }),
  s_ = {
    actions: 'button@2',
    article: 'heading, paragraph',
    avatar: 'avatar',
    button: 'button',
    card: 'image, heading',
    'card-avatar': 'image, list-item-avatar',
    chip: 'chip',
    'date-picker': 'list-item, heading, divider, date-picker-options, date-picker-days, actions',
    'date-picker-options': 'text, avatar@2',
    'date-picker-days': 'avatar@28',
    divider: 'divider',
    heading: 'heading',
    image: 'image',
    'list-item': 'text',
    'list-item-avatar': 'avatar, text',
    'list-item-two-line': 'sentences',
    'list-item-avatar-two-line': 'avatar, sentences',
    'list-item-three-line': 'paragraph',
    'list-item-avatar-three-line': 'avatar, paragraph',
    ossein: 'ossein',
    paragraph: 'text@3',
    sentences: 'text@2',
    subtitle: 'text',
    table: 'table-heading, table-thead, table-tbody, table-tfoot',
    'table-heading': 'chip, text',
    'table-thead': 'heading@6',
    'table-tbody': 'table-row-divider@6',
    'table-row-divider': 'table-row, divider',
    'table-row': 'text@6',
    'table-tfoot': 'text@2, avatar@2',
    text: 'text'
  }
function u_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
  return d('div', { class: ['v-skeleton-loader__bone', `v-skeleton-loader__${e}`] }, [t])
}
function $d(e) {
  const [t, n] = e.split('@')
  return Array.from({ length: n }).map(() => jo(t))
}
function jo(e) {
  let t = []
  if (!e) return t
  const n = s_[e]
  if (e !== n) {
    if (e.includes(',')) return Od(e)
    if (e.includes('@')) return $d(e)
    n.includes(',') ? (t = Od(n)) : n.includes('@') ? (t = $d(n)) : n && t.push(jo(n))
  }
  return [u_(e, t)]
}
function Od(e) {
  return e.replace(/\s/g, '').split(',').map(jo)
}
const c_ = $(
    {
      boilerplate: Boolean,
      color: String,
      loading: Boolean,
      loadingText: { type: String, default: '$vuetify.loading' },
      type: { type: [String, Array], default: 'ossein' },
      ...ct(),
      ...rt(),
      ...Ee()
    },
    'VSkeletonLoader'
  ),
  d_ = j()({
    name: 'VSkeletonLoader',
    props: c_(),
    setup(e, t) {
      let { slots: n } = t
      const { backgroundColorClasses: a, backgroundColorStyles: l } = Ne(N(e, 'color')),
        { dimensionStyles: i } = dt(e),
        { elevationClasses: o } = ht(e),
        { themeClasses: r } = Re(e),
        { t: s } = Je(),
        u = b(() => jo(Xe(e.type).join(',')))
      return (
        K(() => {
          var f
          const c = !n.default || e.loading
          return d(
            'div',
            {
              class: [
                'v-skeleton-loader',
                { 'v-skeleton-loader--boilerplate': e.boilerplate },
                r.value,
                a.value,
                o.value
              ],
              style: [l.value, c ? i.value : {}],
              'aria-busy': e.boilerplate ? void 0 : c,
              'aria-live': e.boilerplate ? void 0 : 'polite',
              'aria-label': e.boilerplate ? void 0 : s(e.loadingText),
              role: e.boilerplate ? void 0 : 'alert'
            },
            [c ? u.value : (f = n.default) == null ? void 0 : f.call(n)]
          )
        }),
        {}
      )
    }
  }),
  f_ = j()({
    name: 'VSlideGroupItem',
    props: Ia(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Aa(e, Om)
      return () => {
        var l
        return (l = n.default) == null
          ? void 0
          : l.call(n, {
              isSelected: a.isSelected.value,
              select: a.select,
              toggle: a.toggle,
              selectedClass: a.selectedClass.value
            })
      }
    }
  })
function v_(e) {
  const t = se(e)
  let n = -1
  function a() {
    clearInterval(n)
  }
  function l() {
    a(), Te(() => (t.value = e))
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : { transitionDuration: 0.2 },
      s = parseFloat(r.transitionDuration) * 1e3 || 200
    if ((a(), t.value <= 0)) return
    const u = performance.now()
    n = window.setInterval(() => {
      const c = performance.now() - u + s
      ;(t.value = Math.max(e - c, 0)), t.value <= 0 && a()
    }, s)
  }
  return _t(a), { clear: a, time: t, start: i, reset: l }
}
const m_ = $(
    {
      multiLine: Boolean,
      text: String,
      timer: [Boolean, String],
      timeout: { type: [Number, String], default: 5e3 },
      vertical: Boolean,
      ...Qn({ location: 'bottom' }),
      ...ll(),
      ...Ue(),
      ...Jt(),
      ...Ee(),
      ...it(ci({ transition: 'v-snackbar-transition' }), [
        'persistent',
        'noClickAnimation',
        'scrim',
        'scrollStrategy'
      ])
    },
    'VSnackbar'
  ),
  h_ = j()({
    name: 'VSnackbar',
    props: m_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        { positionClasses: l } = il(e),
        { scopeId: i } = sl(),
        { themeClasses: o } = Re(e),
        { colorClasses: r, colorStyles: s, variantClasses: u } = Va(e),
        { roundedClasses: c } = qe(e),
        f = v_(Number(e.timeout)),
        v = J(),
        m = J(),
        g = se(!1),
        h = se(0),
        y = J(),
        S = Pe(Hl, void 0)
      Dt(
        () => !!S,
        () => {
          const P = im()
          Ze(() => {
            y.value = P.mainStyles.value
          })
        }
      ),
        de(a, A),
        de(() => e.timeout, A),
        St(() => {
          a.value && A()
        })
      let p = -1
      function A() {
        f.reset(), window.clearTimeout(p)
        const P = Number(e.timeout)
        if (!a.value || P === -1) return
        const E = Ua(m.value)
        f.start(E),
          (p = window.setTimeout(() => {
            a.value = !1
          }, P))
      }
      function T() {
        f.reset(), window.clearTimeout(p)
      }
      function w() {
        ;(g.value = !0), T()
      }
      function x() {
        ;(g.value = !1), A()
      }
      function V(P) {
        h.value = P.touches[0].clientY
      }
      function _(P) {
        Math.abs(h.value - P.changedTouches[0].clientY) > 50 && (a.value = !1)
      }
      const k = b(() =>
        e.location.split(' ').reduce((P, E) => ((P[`v-snackbar--${E}`] = !0), P), {})
      )
      return (
        K(() => {
          const P = yn.filterProps(e),
            E = !!(n.default || n.text || e.text)
          return d(
            yn,
            X(
              {
                ref: v,
                class: [
                  'v-snackbar',
                  {
                    'v-snackbar--active': a.value,
                    'v-snackbar--multi-line': e.multiLine && !e.vertical,
                    'v-snackbar--timer': !!e.timer,
                    'v-snackbar--vertical': e.vertical
                  },
                  k.value,
                  l.value,
                  e.class
                ],
                style: [y.value, e.style]
              },
              P,
              {
                modelValue: a.value,
                'onUpdate:modelValue': (I) => (a.value = I),
                contentProps: X(
                  {
                    class: ['v-snackbar__wrapper', o.value, r.value, c.value, u.value],
                    style: [s.value],
                    onPointerenter: w,
                    onPointerleave: x
                  },
                  P.contentProps
                ),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: 'none',
                _disableGlobalStack: !0,
                onTouchstartPassive: V,
                onTouchend: _
              },
              i
            ),
            {
              default: () => {
                var I, D
                return [
                  _a(!1, 'v-snackbar'),
                  e.timer &&
                    !g.value &&
                    d('div', { key: 'timer', class: 'v-snackbar__timer' }, [
                      d(
                        wo,
                        {
                          ref: m,
                          color: typeof e.timer == 'string' ? e.timer : 'info',
                          max: e.timeout,
                          'model-value': f.time.value
                        },
                        null
                      )
                    ]),
                  E &&
                    d(
                      'div',
                      {
                        key: 'content',
                        class: 'v-snackbar__content',
                        role: 'status',
                        'aria-live': 'polite'
                      },
                      [
                        ((I = n.text) == null ? void 0 : I.call(n)) ?? e.text,
                        (D = n.default) == null ? void 0 : D.call(n)
                      ]
                    ),
                  n.actions &&
                    d(
                      Ae,
                      { defaults: { VBtn: { variant: 'text', ripple: !1, slim: !0 } } },
                      {
                        default: () => [
                          d('div', { class: 'v-snackbar__actions' }, [n.actions({ isActive: a })])
                        ]
                      }
                    )
                ]
              },
              activator: n.activator
            }
          )
        }),
        en({}, v)
      )
    }
  }),
  gg = $(
    {
      autoDraw: Boolean,
      autoDrawDuration: [Number, String],
      autoDrawEasing: { type: String, default: 'ease' },
      color: String,
      gradient: { type: Array, default: () => [] },
      gradientDirection: {
        type: String,
        validator: (e) => ['top', 'bottom', 'left', 'right'].includes(e),
        default: 'top'
      },
      height: { type: [String, Number], default: 75 },
      labels: { type: Array, default: () => [] },
      labelSize: { type: [Number, String], default: 7 },
      lineWidth: { type: [String, Number], default: 4 },
      id: String,
      itemValue: { type: String, default: 'value' },
      modelValue: { type: Array, default: () => [] },
      min: [String, Number],
      max: [String, Number],
      padding: { type: [String, Number], default: 8 },
      showLabels: Boolean,
      smooth: Boolean,
      width: { type: [Number, String], default: 300 }
    },
    'Line'
  ),
  yg = $({ autoLineWidth: Boolean, ...gg() }, 'VBarline'),
  Ld = j()({
    name: 'VBarline',
    props: yg(),
    setup(e, t) {
      let { slots: n } = t
      const a = mt(),
        l = b(() => e.id || `barline-${a}`),
        i = b(() => Number(e.autoDrawDuration) || 500),
        o = b(() => !!(e.showLabels || e.labels.length > 0 || (n != null && n.label))),
        r = b(() => parseFloat(e.lineWidth) || 4),
        s = b(() => Math.max(e.modelValue.length * r.value, Number(e.width))),
        u = b(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })),
        c = b(() => e.modelValue.map((h) => ot(h, e.itemValue, h)))
      function f(h, y) {
        const { minX: S, maxX: p, minY: A, maxY: T } = y,
          w = h.length
        let x = e.max != null ? Number(e.max) : Math.max(...h),
          V = e.min != null ? Number(e.min) : Math.min(...h)
        V > 0 && e.min == null && (V = 0), x < 0 && e.max == null && (x = 0)
        const _ = p / w,
          k = (T - A) / (x - V || 1),
          P = T - Math.abs(V * k)
        return h.map((E, I) => {
          const D = Math.abs(k * E)
          return { x: S + I * _, y: P - D + +(E < 0) * D, height: D, value: E }
        })
      }
      const v = b(() => {
          const h = [],
            y = f(c.value, u.value),
            S = y.length
          for (let p = 0; h.length < S; p++) {
            const A = y[p]
            let T = e.labels[p]
            T || (T = typeof A == 'object' ? A.value : A), h.push({ x: A.x, value: String(T) })
          }
          return h
        }),
        m = b(() => f(c.value, u.value)),
        g = b(() => (Math.abs(m.value[0].x - m.value[1].x) - r.value) / 2)
      K(() => {
        const h = e.gradient.slice().length ? e.gradient.slice().reverse() : ['']
        return d('svg', { display: 'block' }, [
          d('defs', null, [
            d(
              'linearGradient',
              {
                id: l.value,
                gradientUnits: 'userSpaceOnUse',
                x1: e.gradientDirection === 'left' ? '100%' : '0',
                y1: e.gradientDirection === 'top' ? '100%' : '0',
                x2: e.gradientDirection === 'right' ? '100%' : '0',
                y2: e.gradientDirection === 'bottom' ? '100%' : '0'
              },
              [
                h.map((y, S) =>
                  d(
                    'stop',
                    { offset: S / Math.max(h.length - 1, 1), 'stop-color': y || 'currentColor' },
                    null
                  )
                )
              ]
            )
          ]),
          d('clipPath', { id: `${l.value}-clip` }, [
            m.value.map((y) =>
              d(
                'rect',
                {
                  x: y.x + g.value,
                  y: y.y,
                  width: r.value,
                  height: y.height,
                  rx: typeof e.smooth == 'number' ? e.smooth : e.smooth ? 2 : 0,
                  ry: typeof e.smooth == 'number' ? e.smooth : e.smooth ? 2 : 0
                },
                [
                  e.autoDraw &&
                    d(me, null, [
                      d(
                        'animate',
                        {
                          attributeName: 'y',
                          from: y.y + y.height,
                          to: y.y,
                          dur: `${i.value}ms`,
                          fill: 'freeze'
                        },
                        null
                      ),
                      d(
                        'animate',
                        {
                          attributeName: 'height',
                          from: '0',
                          to: y.height,
                          dur: `${i.value}ms`,
                          fill: 'freeze'
                        },
                        null
                      )
                    ])
                ]
              )
            )
          ]),
          o.value &&
            d(
              'g',
              {
                key: 'labels',
                style: {
                  textAnchor: 'middle',
                  dominantBaseline: 'mathematical',
                  fill: 'currentColor'
                }
              },
              [
                v.value.map((y, S) => {
                  var p
                  return d(
                    'text',
                    {
                      x: y.x + g.value + r.value / 2,
                      y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
                      'font-size': Number(e.labelSize) || 7
                    },
                    [
                      ((p = n.label) == null ? void 0 : p.call(n, { index: S, value: y.value })) ??
                        y.value
                    ]
                  )
                })
              ]
            ),
          d('g', { 'clip-path': `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [
            d(
              'rect',
              {
                x: 0,
                y: 0,
                width: Math.max(e.modelValue.length * r.value, Number(e.width)),
                height: e.height
              },
              null
            )
          ])
        ])
      })
    }
  })
function g_(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75
  if (e.length === 0) return ''
  const l = e.shift(),
    i = e[e.length - 1]
  return (
    (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) +
    e
      .map((o, r) => {
        const s = e[r + 1],
          u = e[r - 1] || l,
          c = s && y_(s, o, u)
        if (!s || c) return `L${o.x} ${o.y}`
        const f = Math.min(Fd(u, o), Fd(s, o)),
          m = f / 2 < t ? f / 2 : t,
          g = Nd(u, o, m),
          h = Nd(s, o, m)
        return `L${g.x} ${g.y}S${o.x} ${o.y} ${h.x} ${h.y}`
      })
      .join('') +
    (n ? `L${i.x} ${a - l.x + 2} Z` : '')
  )
}
function Pi(e) {
  return parseInt(e, 10)
}
function y_(e, t, n) {
  return Pi(e.x + n.x) === Pi(2 * t.x) && Pi(e.y + n.y) === Pi(2 * t.y)
}
function Fd(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function Nd(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y },
    l = Math.sqrt(a.x * a.x + a.y * a.y),
    i = { x: a.x / l, y: a.y / l }
  return { x: t.x + i.x * n, y: t.y + i.y * n }
}
const bg = $({ fill: Boolean, ...gg() }, 'VTrendline'),
  Hd = j()({
    name: 'VTrendline',
    props: bg(),
    setup(e, t) {
      let { slots: n } = t
      const a = mt(),
        l = b(() => e.id || `trendline-${a}`),
        i = b(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)),
        o = J(0),
        r = J(null)
      function s(y, S) {
        const { minX: p, maxX: A, minY: T, maxY: w } = S,
          x = y.length,
          V = e.max != null ? Number(e.max) : Math.max(...y),
          _ = e.min != null ? Number(e.min) : Math.min(...y),
          k = (A - p) / (x - 1),
          P = (w - T) / (V - _ || 1)
        return y.map((E, I) => ({ x: p + I * k, y: w - (E - _) * P, value: E }))
      }
      const u = b(() => !!(e.showLabels || e.labels.length > 0 || (n != null && n.label))),
        c = b(() => parseFloat(e.lineWidth) || 4),
        f = b(() => Number(e.width)),
        v = b(() => {
          const y = Number(e.padding)
          return { minX: y, maxX: f.value - y, minY: y, maxY: parseInt(e.height, 10) - y }
        }),
        m = b(() => e.modelValue.map((y) => ot(y, e.itemValue, y))),
        g = b(() => {
          const y = [],
            S = s(m.value, v.value),
            p = S.length
          for (let A = 0; y.length < p; A++) {
            const T = S[A]
            let w = e.labels[A]
            w || (w = typeof T == 'object' ? T.value : T), y.push({ x: T.x, value: String(w) })
          }
          return y
        })
      de(
        () => e.modelValue,
        async () => {
          if ((await Te(), !e.autoDraw || !r.value)) return
          const y = r.value,
            S = y.getTotalLength()
          e.fill
            ? ((y.style.transformOrigin = 'bottom center'),
              (y.style.transition = 'none'),
              (y.style.transform = 'scaleY(0)'),
              y.getBoundingClientRect(),
              (y.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`),
              (y.style.transform = 'scaleY(1)'))
            : ((y.style.strokeDasharray = `${S}`),
              (y.style.strokeDashoffset = `${S}`),
              y.getBoundingClientRect(),
              (y.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`),
              (y.style.strokeDashoffset = '0')),
            (o.value = S)
        },
        { immediate: !0 }
      )
      function h(y) {
        return g_(s(m.value, v.value), e.smooth ? 8 : Number(e.smooth), y, parseInt(e.height, 10))
      }
      K(() => {
        var S
        const y = e.gradient.slice().length ? e.gradient.slice().reverse() : ['']
        return d('svg', { display: 'block', 'stroke-width': parseFloat(e.lineWidth) ?? 4 }, [
          d('defs', null, [
            d(
              'linearGradient',
              {
                id: l.value,
                gradientUnits: 'userSpaceOnUse',
                x1: e.gradientDirection === 'left' ? '100%' : '0',
                y1: e.gradientDirection === 'top' ? '100%' : '0',
                x2: e.gradientDirection === 'right' ? '100%' : '0',
                y2: e.gradientDirection === 'bottom' ? '100%' : '0'
              },
              [
                y.map((p, A) =>
                  d(
                    'stop',
                    { offset: A / Math.max(y.length - 1, 1), 'stop-color': p || 'currentColor' },
                    null
                  )
                )
              ]
            )
          ]),
          u.value &&
            d(
              'g',
              {
                key: 'labels',
                style: {
                  textAnchor: 'middle',
                  dominantBaseline: 'mathematical',
                  fill: 'currentColor'
                }
              },
              [
                g.value.map((p, A) => {
                  var T
                  return d(
                    'text',
                    {
                      x: p.x + c.value / 2 + c.value / 2,
                      y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
                      'font-size': Number(e.labelSize) || 7
                    },
                    [
                      ((T = n.label) == null ? void 0 : T.call(n, { index: A, value: p.value })) ??
                        p.value
                    ]
                  )
                })
              ]
            ),
          d(
            'path',
            {
              ref: r,
              d: h(e.fill),
              fill: e.fill ? `url(#${l.value})` : 'none',
              stroke: e.fill ? 'none' : `url(#${l.value})`
            },
            null
          ),
          e.fill &&
            d(
              'path',
              {
                d: h(!1),
                fill: 'none',
                stroke: e.color ?? ((S = e.gradient) == null ? void 0 : S[0])
              },
              null
            )
        ])
      })
    }
  }),
  b_ = $({ type: { type: String, default: 'trend' }, ...yg(), ...bg() }, 'VSparkline'),
  S_ = j()({
    name: 'VSparkline',
    props: b_(),
    setup(e, t) {
      let { slots: n } = t
      const { textColorClasses: a, textColorStyles: l } = yt(N(e, 'color')),
        i = b(() => !!(e.showLabels || e.labels.length > 0 || (n != null && n.label))),
        o = b(() => {
          let r = parseInt(e.height, 10)
          return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r
        })
      K(() => {
        const r = e.type === 'trend' ? Hd : Ld,
          s = e.type === 'trend' ? Hd.filterProps(e) : Ld.filterProps(e)
        return d(
          r,
          X(
            {
              key: e.type,
              class: a.value,
              style: l.value,
              viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
            },
            s
          ),
          n
        )
      })
    }
  }),
  p_ = $(
    {
      ...ve(),
      ...oh({
        offset: 8,
        minWidth: 0,
        openDelay: 0,
        closeDelay: 100,
        location: 'top center',
        transition: 'scale-transition'
      })
    },
    'VSpeedDial'
  ),
  k_ = j()({
    name: 'VSpeedDial',
    props: p_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        l = J(),
        i = b(() => {
          const [r, s = 'center'] = e.location.split(' ')
          return `${r} ${s}`
        }),
        o = b(() => ({ [`v-speed-dial__content--${i.value.replace(' ', '-')}`]: !0 }))
      return (
        K(() => {
          const r = Za.filterProps(e)
          return d(
            Za,
            X(r, {
              modelValue: a.value,
              'onUpdate:modelValue': (s) => (a.value = s),
              class: e.class,
              style: e.style,
              contentClass: ['v-speed-dial__content', o.value],
              location: i.value,
              ref: l,
              transition: 'fade-transition'
            }),
            {
              ...n,
              default: (s) =>
                d(
                  Ae,
                  { defaults: { VBtn: { size: 'small' } } },
                  {
                    default: () => [
                      d(
                        Ct,
                        { appear: !0, group: !0, transition: e.transition },
                        {
                          default: () => {
                            var u
                            return [(u = n.default) == null ? void 0 : u.call(n, s)]
                          }
                        }
                      )
                    ]
                  }
                )
            }
          )
        }),
        {}
      )
    }
  }),
  Sg = $(
    {
      color: String,
      disabled: { type: [Boolean, String], default: !1 },
      prevText: { type: String, default: '$vuetify.stepper.prev' },
      nextText: { type: String, default: '$vuetify.stepper.next' }
    },
    'VStepperActions'
  ),
  pg = j()({
    name: 'VStepperActions',
    props: Sg(),
    emits: { 'click:prev': () => !0, 'click:next': () => !0 },
    setup(e, t) {
      let { emit: n, slots: a } = t
      const { t: l } = Je()
      function i() {
        n('click:prev')
      }
      function o() {
        n('click:next')
      }
      return (
        K(() => {
          const r = { onClick: i },
            s = { onClick: o }
          return d('div', { class: 'v-stepper-actions' }, [
            d(
              Ae,
              {
                defaults: {
                  VBtn: {
                    disabled: ['prev', !0].includes(e.disabled),
                    text: l(e.prevText),
                    variant: 'text'
                  }
                }
              },
              {
                default: () => {
                  var u
                  return [
                    ((u = a.prev) == null ? void 0 : u.call(a, { props: r })) ?? d(De, r, null)
                  ]
                }
              }
            ),
            d(
              Ae,
              {
                defaults: {
                  VBtn: {
                    color: e.color,
                    disabled: ['next', !0].includes(e.disabled),
                    text: l(e.nextText),
                    variant: 'tonal'
                  }
                }
              },
              {
                default: () => {
                  var u
                  return [
                    ((u = a.next) == null ? void 0 : u.call(a, { props: s })) ?? d(De, s, null)
                  ]
                }
              }
            )
          ])
        }),
        {}
      )
    }
  }),
  kg = pn('v-stepper-header'),
  w_ = $(
    {
      color: String,
      title: String,
      subtitle: String,
      complete: Boolean,
      completeIcon: { type: String, default: '$complete' },
      editable: Boolean,
      editIcon: { type: String, default: '$edit' },
      error: Boolean,
      errorIcon: { type: String, default: '$error' },
      icon: String,
      ripple: { type: [Boolean, Object], default: !0 },
      rules: { type: Array, default: () => [] },
      ...Ia()
    },
    'VStepperItem'
  ),
  wg = j()({
    name: 'VStepperItem',
    directives: { Ripple: Bn },
    props: w_(),
    emits: { 'group:selected': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Aa(e, _g, !0),
        l = b(() => (a == null ? void 0 : a.value.value) ?? e.value),
        i = b(() => e.rules.every((f) => f() === !0)),
        o = b(() => !e.disabled && e.editable),
        r = b(() => e.error || !i.value),
        s = b(() => e.complete || (e.rules.length > 0 && i.value)),
        u = b(() =>
          r.value ? e.errorIcon : s.value ? e.completeIcon : e.editable ? e.editIcon : e.icon
        ),
        c = b(() => ({
          canEdit: o.value,
          hasError: r.value,
          hasCompleted: s.value,
          title: e.title,
          subtitle: e.subtitle,
          step: l.value,
          value: e.value
        }))
      return (
        K(() => {
          var h, y, S
          const f = (!a || a.isSelected.value || s.value || o.value) && !r.value && !e.disabled,
            v = !!(e.title != null || n.title),
            m = !!(e.subtitle != null || n.subtitle)
          function g() {
            a == null || a.toggle()
          }
          return We(
            d(
              'button',
              {
                class: [
                  'v-stepper-item',
                  {
                    'v-stepper-item--complete': s.value,
                    'v-stepper-item--disabled': e.disabled,
                    'v-stepper-item--error': r.value
                  },
                  a == null ? void 0 : a.selectedClass.value
                ],
                disabled: !e.editable,
                onClick: g
              },
              [
                d(
                  Xt,
                  {
                    key: 'stepper-avatar',
                    class: 'v-stepper-item__avatar',
                    color: f ? e.color : void 0,
                    size: 24
                  },
                  {
                    default: () => {
                      var p
                      return [
                        ((p = n.icon) == null ? void 0 : p.call(n, c.value)) ??
                          (u.value ? d(Me, { icon: u.value }, null) : l.value)
                      ]
                    }
                  }
                ),
                d('div', { class: 'v-stepper-item__content' }, [
                  v &&
                    d('div', { key: 'title', class: 'v-stepper-item__title' }, [
                      ((h = n.title) == null ? void 0 : h.call(n, c.value)) ?? e.title
                    ]),
                  m &&
                    d('div', { key: 'subtitle', class: 'v-stepper-item__subtitle' }, [
                      ((y = n.subtitle) == null ? void 0 : y.call(n, c.value)) ?? e.subtitle
                    ]),
                  (S = n.default) == null ? void 0 : S.call(n, c.value)
                ])
              ]
            ),
            [[Ft('ripple'), e.ripple && e.editable, null]]
          )
        }),
        {}
      )
    }
  }),
  x_ = Symbol.for('vuetify:v-stepper'),
  C_ = $(
    { ...it(Eo(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory']) },
    'VStepperWindow'
  ),
  xg = j()({
    name: 'VStepperWindow',
    props: C_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Pe(x_, null),
        l = be(e, 'modelValue'),
        i = b({
          get() {
            var o
            return l.value != null || !a
              ? l.value
              : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null
                ? void 0
                : o.value
          },
          set(o) {
            l.value = o
          }
        })
      return (
        K(() => {
          const o = ha.filterProps(e)
          return d(
            ha,
            X({ _as: 'VStepperWindow' }, o, {
              modelValue: i.value,
              'onUpdate:modelValue': (r) => (i.value = r),
              class: 'v-stepper-window',
              mandatory: !1,
              touch: !1
            }),
            n
          )
        }),
        {}
      )
    }
  }),
  __ = $({ ...Bo() }, 'VStepperWindowItem'),
  Cg = j()({
    name: 'VStepperWindowItem',
    props: __(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => {
          const a = ga.filterProps(e)
          return d(ga, X({ _as: 'VStepperWindowItem' }, a, { class: 'v-stepper-window-item' }), n)
        }),
        {}
      )
    }
  }),
  _g = Symbol.for('vuetify:v-stepper'),
  V_ = $(
    {
      altLabels: Boolean,
      bgColor: String,
      editable: Boolean,
      hideActions: Boolean,
      items: { type: Array, default: () => [] },
      itemTitle: { type: String, default: 'title' },
      itemValue: { type: String, default: 'value' },
      mobile: Boolean,
      nonLinear: Boolean,
      flat: Boolean,
      ...Pa({ mandatory: 'force', selectedClass: 'v-stepper-item--selected' }),
      ...Do(),
      ...vo(Sg(), ['prevText', 'nextText'])
    },
    'VStepper'
  ),
  P_ = j()({
    name: 'VStepper',
    props: V_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const { items: a, next: l, prev: i, selected: o } = Zn(e, _g),
        { color: r, editable: s, prevText: u, nextText: c } = io(e),
        f = b(() =>
          e.items.map((g, h) => {
            const y = ot(g, e.itemTitle, g),
              S = ot(g, e.itemValue, h + 1)
            return { title: y, value: S, raw: g }
          })
        ),
        v = b(() => a.value.findIndex((g) => o.value.includes(g.id))),
        m = b(() =>
          e.disabled
            ? e.disabled
            : v.value === 0
              ? 'prev'
              : v.value === a.value.length - 1
                ? 'next'
                : !1
        )
      return (
        Ke({
          VStepperItem: { editable: s, prevText: u, nextText: c },
          VStepperActions: { color: r, disabled: m, prevText: u, nextText: c }
        }),
        K(() => {
          const g = ya.filterProps(e),
            h = !!(n.header || e.items.length),
            y = e.items.length > 0,
            S = !e.hideActions && !!(y || n.actions)
          return d(
            ya,
            X(g, {
              color: e.bgColor,
              class: [
                'v-stepper',
                {
                  'v-stepper--alt-labels': e.altLabels,
                  'v-stepper--flat': e.flat,
                  'v-stepper--non-linear': e.nonLinear,
                  'v-stepper--mobile': e.mobile
                },
                e.class
              ],
              style: e.style
            }),
            {
              default: () => {
                var p, A
                return [
                  h &&
                    d(
                      kg,
                      { key: 'stepper-header' },
                      {
                        default: () => [
                          f.value.map((T, w) =>
                            d(me, null, [
                              !!w && d(ui, null, null),
                              d(wg, T, {
                                default: n[`header-item.${T.value}`] ?? n.header,
                                icon: n.icon,
                                title: n.title,
                                subtitle: n.subtitle
                              })
                            ])
                          )
                        ]
                      }
                    ),
                  y &&
                    d(
                      xg,
                      { key: 'stepper-window' },
                      {
                        default: () => [
                          f.value.map((T) =>
                            d(
                              Cg,
                              { value: T.value },
                              {
                                default: () => {
                                  var w, x
                                  return (
                                    ((w = n[`item.${T.value}`]) == null ? void 0 : w.call(n, T)) ??
                                    ((x = n.item) == null ? void 0 : x.call(n, T))
                                  )
                                }
                              }
                            )
                          )
                        ]
                      }
                    ),
                  (p = n.default) == null ? void 0 : p.call(n, { prev: i, next: l }),
                  S &&
                    (((A = n.actions) == null ? void 0 : A.call(n, { next: l, prev: i })) ??
                      d(pg, { key: 'stepper-actions', 'onClick:prev': i, 'onClick:next': l }, n))
                ]
              }
            }
          )
        }),
        { prev: i, next: l }
      )
    }
  }),
  I_ = $(
    {
      indeterminate: Boolean,
      inset: Boolean,
      flat: Boolean,
      loading: { type: [Boolean, String], default: !1 },
      ...Mn(),
      ..._o()
    },
    'VSwitch'
  ),
  A_ = j()({
    name: 'VSwitch',
    inheritAttrs: !1,
    props: I_(),
    emits: {
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
      'update:indeterminate': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, slots: a } = t
      const l = be(e, 'indeterminate'),
        i = be(e, 'modelValue'),
        { loaderClasses: o } = li(e),
        { isFocused: r, focus: s, blur: u } = Dn(e),
        c = J(),
        f = b(() => (typeof e.loading == 'string' && e.loading !== '' ? e.loading : e.color)),
        v = mt(),
        m = b(() => e.id || `switch-${v}`)
      function g() {
        l.value && (l.value = !1)
      }
      function h(y) {
        var S, p
        y.stopPropagation(),
          y.preventDefault(),
          (p = (S = c.value) == null ? void 0 : S.input) == null || p.click()
      }
      return (
        K(() => {
          const [y, S] = Xn(n),
            p = bt.filterProps(e),
            A = va.filterProps(e)
          return d(
            bt,
            X(
              {
                class: [
                  'v-switch',
                  { 'v-switch--flat': e.flat },
                  { 'v-switch--inset': e.inset },
                  { 'v-switch--indeterminate': l.value },
                  o.value,
                  e.class
                ]
              },
              y,
              p,
              {
                modelValue: i.value,
                'onUpdate:modelValue': (T) => (i.value = T),
                id: m.value,
                focused: r.value,
                style: e.style
              }
            ),
            {
              ...a,
              default: (T) => {
                let { id: w, messagesId: x, isDisabled: V, isReadonly: _, isValid: k } = T
                const P = { model: i, isValid: k }
                return d(
                  va,
                  X(
                    { ref: c },
                    A,
                    {
                      modelValue: i.value,
                      'onUpdate:modelValue': [(E) => (i.value = E), g],
                      id: w.value,
                      'aria-describedby': x.value,
                      type: 'checkbox',
                      'aria-checked': l.value ? 'mixed' : void 0,
                      disabled: V.value,
                      readonly: _.value,
                      onFocus: s,
                      onBlur: u
                    },
                    S
                  ),
                  {
                    ...a,
                    default: (E) => {
                      let { backgroundColorClasses: I, backgroundColorStyles: D } = E
                      return d(
                        'div',
                        { class: ['v-switch__track', ...I.value], style: D.value, onClick: h },
                        [
                          a['track-true'] &&
                            d('div', { key: 'prepend', class: 'v-switch__track-true' }, [
                              a['track-true'](P)
                            ]),
                          a['track-false'] &&
                            d('div', { key: 'append', class: 'v-switch__track-false' }, [
                              a['track-false'](P)
                            ])
                        ]
                      )
                    },
                    input: (E) => {
                      let {
                        inputNode: I,
                        icon: D,
                        backgroundColorClasses: L,
                        backgroundColorStyles: W
                      } = E
                      return d(me, null, [
                        I,
                        d(
                          'div',
                          {
                            class: [
                              'v-switch__thumb',
                              { 'v-switch__thumb--filled': D || e.loading },
                              e.inset ? void 0 : L.value
                            ],
                            style: e.inset ? void 0 : W.value
                          },
                          [
                            a.thumb
                              ? d(
                                  Ae,
                                  { defaults: { VIcon: { icon: D, size: 'x-small' } } },
                                  { default: () => [a.thumb({ ...P, icon: D })] }
                                )
                              : d(ru, null, {
                                  default: () => [
                                    e.loading
                                      ? d(
                                          ii,
                                          {
                                            name: 'v-switch',
                                            active: !0,
                                            color: k.value === !1 ? void 0 : f.value
                                          },
                                          {
                                            default: (Y) =>
                                              a.loader
                                                ? a.loader(Y)
                                                : d(
                                                    Xa,
                                                    {
                                                      active: Y.isActive,
                                                      color: Y.color,
                                                      indeterminate: !0,
                                                      size: '16',
                                                      width: '2'
                                                    },
                                                    null
                                                  )
                                          }
                                        )
                                      : D &&
                                        d(Me, { key: String(D), icon: D, size: 'x-small' }, null)
                                  ]
                                })
                          ]
                        )
                      ])
                    }
                  }
                )
              }
            }
          )
        }),
        {}
      )
    }
  }),
  T_ = $(
    {
      color: String,
      height: [Number, String],
      window: Boolean,
      ...ve(),
      ...rt(),
      ...wa(),
      ...Ue(),
      ..._e(),
      ...Ee()
    },
    'VSystemBar'
  ),
  E_ = j()({
    name: 'VSystemBar',
    props: T_(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { backgroundColorClasses: l, backgroundColorStyles: i } = Ne(N(e, 'color')),
        { elevationClasses: o } = ht(e),
        { roundedClasses: r } = qe(e),
        { ssrBootStyles: s } = Ca(),
        u = b(() => e.height ?? (e.window ? 32 : 24)),
        { layoutItemStyles: c } = xa({
          id: e.name,
          order: b(() => parseInt(e.order, 10)),
          position: se('top'),
          layoutSize: u,
          elementSize: u,
          active: b(() => !0),
          absolute: N(e, 'absolute')
        })
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-system-bar',
                { 'v-system-bar--window': e.window },
                a.value,
                l.value,
                o.value,
                r.value,
                e.class
              ],
              style: [i.value, c.value, s.value, e.style]
            },
            n
          )
        ),
        {}
      )
    }
  }),
  Hu = Symbol.for('vuetify:v-tabs'),
  B_ = $(
    {
      fixed: Boolean,
      sliderColor: String,
      hideSlider: Boolean,
      direction: { type: String, default: 'horizontal' },
      ...it(Co({ selectedClass: 'v-tab--selected', variant: 'text' }), [
        'active',
        'block',
        'flat',
        'location',
        'position',
        'symbol'
      ])
    },
    'VTab'
  ),
  Vg = j()({
    name: 'VTab',
    props: B_(),
    setup(e, t) {
      let { slots: n, attrs: a } = t
      const { textColorClasses: l, textColorStyles: i } = yt(e, 'sliderColor'),
        o = J(),
        r = J(),
        s = b(() => e.direction === 'horizontal'),
        u = b(() => {
          var f, v
          return (
            ((v = (f = o.value) == null ? void 0 : f.group) == null
              ? void 0
              : v.isSelected.value) ?? !1
          )
        })
      function c(f) {
        var m, g
        let { value: v } = f
        if (v) {
          const h =
              (g = (m = o.value) == null ? void 0 : m.$el.parentElement) == null
                ? void 0
                : g.querySelector('.v-tab--selected .v-tab__slider'),
            y = r.value
          if (!h || !y) return
          const S = getComputedStyle(h).color,
            p = h.getBoundingClientRect(),
            A = y.getBoundingClientRect(),
            T = s.value ? 'x' : 'y',
            w = s.value ? 'X' : 'Y',
            x = s.value ? 'right' : 'bottom',
            V = s.value ? 'width' : 'height',
            _ = p[T],
            k = A[T],
            P = _ > k ? p[x] - A[x] : p[T] - A[T],
            E =
              Math.sign(P) > 0
                ? s.value
                  ? 'right'
                  : 'bottom'
                : Math.sign(P) < 0
                  ? s.value
                    ? 'left'
                    : 'top'
                  : 'center',
            D = (Math.abs(P) + (Math.sign(P) < 0 ? p[V] : A[V])) / Math.max(p[V], A[V]) || 0,
            L = p[V] / A[V] || 0,
            W = 1.5
          ra(
            y,
            {
              backgroundColor: [S, 'currentcolor'],
              transform: [
                `translate${w}(${P}px) scale${w}(${L})`,
                `translate${w}(${P / W}px) scale${w}(${(D - 1) / W + 1})`,
                'none'
              ],
              transformOrigin: Array(3).fill(E)
            },
            { duration: 225, easing: Ll }
          )
        }
      }
      return (
        K(() => {
          const f = De.filterProps(e)
          return d(
            De,
            X(
              {
                symbol: Hu,
                ref: o,
                class: ['v-tab', e.class],
                style: e.style,
                tabindex: u.value ? 0 : -1,
                role: 'tab',
                'aria-selected': String(u.value),
                active: !1
              },
              f,
              a,
              { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, 'onGroup:selected': c }
            ),
            {
              ...n,
              default: () => {
                var v
                return d(me, null, [
                  ((v = n.default) == null ? void 0 : v.call(n)) ?? e.text,
                  !e.hideSlider &&
                    d('div', { ref: r, class: ['v-tab__slider', l.value], style: i.value }, null)
                ])
              }
            }
          )
        }),
        en({}, o)
      )
    }
  }),
  D_ = $(
    { ...it(Eo(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory']) },
    'VTabsWindow'
  ),
  Pg = j()({
    name: 'VTabsWindow',
    props: D_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Pe(Hu, null),
        l = be(e, 'modelValue'),
        i = b({
          get() {
            var o
            return l.value != null || !a
              ? l.value
              : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null
                ? void 0
                : o.value
          },
          set(o) {
            l.value = o
          }
        })
      return (
        K(() => {
          const o = ha.filterProps(e)
          return d(
            ha,
            X({ _as: 'VTabsWindow' }, o, {
              modelValue: i.value,
              'onUpdate:modelValue': (r) => (i.value = r),
              class: 'v-tabs-window',
              mandatory: !1,
              touch: !1
            }),
            n
          )
        }),
        {}
      )
    }
  }),
  M_ = $({ ...Bo() }, 'VTabsWindowItem'),
  Ig = j()({
    name: 'VTabsWindowItem',
    props: M_(),
    setup(e, t) {
      let { slots: n } = t
      return (
        K(() => {
          const a = ga.filterProps(e)
          return d(
            ga,
            X({ _as: 'VTabsWindowItem' }, a, {
              class: ['v-tabs-window-item', e.class],
              style: e.style
            }),
            n
          )
        }),
        {}
      )
    }
  })
function R_(e) {
  return e ? e.map((t) => ($l(t) ? t : { text: t, value: t })) : []
}
const $_ = $(
    {
      alignTabs: { type: String, default: 'start' },
      color: String,
      fixedTabs: Boolean,
      items: { type: Array, default: () => [] },
      stacked: Boolean,
      bgColor: String,
      grow: Boolean,
      height: { type: [Number, String], default: void 0 },
      hideSlider: Boolean,
      sliderColor: String,
      ...vu({ mandatory: 'force', selectedClass: 'v-tab-item--selected' }),
      ...ft(),
      ..._e()
    },
    'VTabs'
  ),
  O_ = j()({
    name: 'VTabs',
    props: $_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        l = b(() => R_(e.items)),
        { densityClasses: i } = Vt(e),
        { backgroundColorClasses: o, backgroundColorStyles: r } = Ne(N(e, 'bgColor'))
      return (
        Ke({
          VTab: {
            color: N(e, 'color'),
            direction: N(e, 'direction'),
            stacked: N(e, 'stacked'),
            fixed: N(e, 'fixedTabs'),
            sliderColor: N(e, 'sliderColor'),
            hideSlider: N(e, 'hideSlider')
          }
        }),
        K(() => {
          const s = Gl.filterProps(e),
            u = !!(n.window || e.items.length > 0)
          return d(me, null, [
            d(
              Gl,
              X(s, {
                modelValue: a.value,
                'onUpdate:modelValue': (c) => (a.value = c),
                class: [
                  'v-tabs',
                  `v-tabs--${e.direction}`,
                  `v-tabs--align-tabs-${e.alignTabs}`,
                  {
                    'v-tabs--fixed-tabs': e.fixedTabs,
                    'v-tabs--grow': e.grow,
                    'v-tabs--stacked': e.stacked
                  },
                  i.value,
                  o.value,
                  e.class
                ],
                style: [{ '--v-tabs-height': fe(e.height) }, r.value, e.style],
                role: 'tablist',
                symbol: Hu
              }),
              {
                default: () => {
                  var c
                  return [
                    ((c = n.default) == null ? void 0 : c.call(n)) ??
                      l.value.map((f) => {
                        var v
                        return (
                          ((v = n.tab) == null ? void 0 : v.call(n, { item: f })) ??
                          d(Vg, X(f, { key: f.text, value: f.value }), {
                            default: () => {
                              var m
                              return (m = n[`tab.${f.value}`]) == null
                                ? void 0
                                : m.call(n, { item: f })
                            }
                          })
                        )
                      })
                  ]
                }
              }
            ),
            u &&
              d(
                Pg,
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': (c) => (a.value = c),
                  key: 'tabs-window'
                },
                {
                  default: () => {
                    var c
                    return [
                      l.value.map((f) => {
                        var v
                        return (
                          ((v = n.item) == null ? void 0 : v.call(n, { item: f })) ??
                          d(
                            Ig,
                            { value: f.value },
                            {
                              default: () => {
                                var m
                                return (m = n[`item.${f.value}`]) == null
                                  ? void 0
                                  : m.call(n, { item: f })
                              }
                            }
                          )
                        )
                      }),
                      (c = n.window) == null ? void 0 : c.call(n)
                    ]
                  }
                }
              )
          ])
        }),
        {}
      )
    }
  }),
  L_ = $(
    {
      autoGrow: Boolean,
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: Function,
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      noResize: Boolean,
      rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) },
      maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) },
      suffix: String,
      modelModifiers: Object,
      ...Mn(),
      ...di()
    },
    'VTextarea'
  ),
  F_ = j()({
    name: 'VTextarea',
    directives: { Intersect: ai },
    inheritAttrs: !1,
    props: L_(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0
    },
    setup(e, t) {
      let { attrs: n, emit: a, slots: l } = t
      const i = be(e, 'modelValue'),
        { isFocused: o, focus: r, blur: s } = Dn(e),
        u = b(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(i.value)
            : (i.value || '').toString().length
        ),
        c = b(() => {
          if (n.maxlength) return n.maxlength
          if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
            return e.counter
        })
      function f(E, I) {
        var D, L
        !e.autofocus ||
          !E ||
          (L = (D = I[0].target) == null ? void 0 : D.focus) == null ||
          L.call(D)
      }
      const v = J(),
        m = J(),
        g = se(''),
        h = J(),
        y = b(() => e.persistentPlaceholder || o.value || e.active)
      function S() {
        var E
        h.value !== document.activeElement && ((E = h.value) == null || E.focus()), o.value || r()
      }
      function p(E) {
        S(), a('click:control', E)
      }
      function A(E) {
        a('mousedown:control', E)
      }
      function T(E) {
        E.stopPropagation(),
          S(),
          Te(() => {
            ;(i.value = ''), Xs(e['onClick:clear'], E)
          })
      }
      function w(E) {
        var D
        const I = E.target
        if (((i.value = I.value), (D = e.modelModifiers) != null && D.trim)) {
          const L = [I.selectionStart, I.selectionEnd]
          Te(() => {
            ;(I.selectionStart = L[0]), (I.selectionEnd = L[1])
          })
        }
      }
      const x = J(),
        V = J(+e.rows),
        _ = b(() => ['plain', 'underlined'].includes(e.variant))
      Ze(() => {
        e.autoGrow || (V.value = +e.rows)
      })
      function k() {
        e.autoGrow &&
          Te(() => {
            if (!x.value || !m.value) return
            const E = getComputedStyle(x.value),
              I = getComputedStyle(m.value.$el),
              D =
                parseFloat(E.getPropertyValue('--v-field-padding-top')) +
                parseFloat(E.getPropertyValue('--v-input-padding-top')) +
                parseFloat(E.getPropertyValue('--v-field-padding-bottom')),
              L = x.value.scrollHeight,
              W = parseFloat(E.lineHeight),
              Y = Math.max(
                parseFloat(e.rows) * W + D,
                parseFloat(I.getPropertyValue('--v-input-control-height'))
              ),
              te = parseFloat(e.maxRows) * W + D || 1 / 0,
              F = et(L ?? 0, Y, te)
            ;(V.value = Math.floor((F - D) / W)), (g.value = fe(F))
          })
      }
      St(k), de(i, k), de(() => e.rows, k), de(() => e.maxRows, k), de(() => e.density, k)
      let P
      return (
        de(x, (E) => {
          E ? ((P = new ResizeObserver(k)), P.observe(x.value)) : P == null || P.disconnect()
        }),
        pt(() => {
          P == null || P.disconnect()
        }),
        K(() => {
          const E = !!(l.counter || e.counter || e.counterValue),
            I = !!(E || l.details),
            [D, L] = Xn(n),
            { modelValue: W, ...Y } = bt.filterProps(e),
            te = ku(e)
          return d(
            bt,
            X(
              {
                ref: v,
                modelValue: i.value,
                'onUpdate:modelValue': (F) => (i.value = F),
                class: [
                  'v-textarea v-text-field',
                  {
                    'v-textarea--prefixed': e.prefix,
                    'v-textarea--suffixed': e.suffix,
                    'v-text-field--prefixed': e.prefix,
                    'v-text-field--suffixed': e.suffix,
                    'v-textarea--auto-grow': e.autoGrow,
                    'v-textarea--no-resize': e.noResize || e.autoGrow,
                    'v-input--plain-underlined': _.value
                  },
                  e.class
                ],
                style: e.style
              },
              D,
              Y,
              { centerAffix: V.value === 1 && !_.value, focused: o.value }
            ),
            {
              ...l,
              default: (F) => {
                let { id: q, isDisabled: O, isDirty: z, isReadonly: ee, isValid: he } = F
                return d(
                  ul,
                  X(
                    {
                      ref: m,
                      style: { '--v-textarea-control-height': g.value },
                      onClick: p,
                      onMousedown: A,
                      'onClick:clear': T,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner']
                    },
                    te,
                    {
                      id: q.value,
                      active: y.value || z.value,
                      centerAffix: V.value === 1 && !_.value,
                      dirty: z.value || e.dirty,
                      disabled: O.value,
                      focused: o.value,
                      error: he.value === !1
                    }
                  ),
                  {
                    ...l,
                    default: (Se) => {
                      let {
                        props: { class: ue, ...Q }
                      } = Se
                      return d(me, null, [
                        e.prefix && d('span', { class: 'v-text-field__prefix' }, [e.prefix]),
                        We(
                          d(
                            'textarea',
                            X(
                              {
                                ref: h,
                                class: ue,
                                value: i.value,
                                onInput: w,
                                autofocus: e.autofocus,
                                readonly: ee.value,
                                disabled: O.value,
                                placeholder: e.placeholder,
                                rows: e.rows,
                                name: e.name,
                                onFocus: S,
                                onBlur: s
                              },
                              Q,
                              L
                            ),
                            null
                          ),
                          [[Ft('intersect'), { handler: f }, null, { once: !0 }]]
                        ),
                        e.autoGrow &&
                          We(
                            d(
                              'textarea',
                              {
                                class: [ue, 'v-textarea__sizer'],
                                id: `${Q.id}-sizer`,
                                'onUpdate:modelValue': (R) => (i.value = R),
                                ref: x,
                                readonly: !0,
                                'aria-hidden': 'true'
                              },
                              null
                            ),
                            [[b0, i.value]]
                          ),
                        e.suffix && d('span', { class: 'v-text-field__suffix' }, [e.suffix])
                      ])
                    }
                  }
                )
              },
              details: I
                ? (F) => {
                    var q
                    return d(me, null, [
                      (q = l.details) == null ? void 0 : q.call(l, F),
                      E &&
                        d(me, null, [
                          d('span', null, null),
                          d(
                            Io,
                            {
                              active: e.persistentCounter || o.value,
                              value: u.value,
                              max: c.value,
                              disabled: e.disabled
                            },
                            l.counter
                          )
                        ])
                    ])
                  }
                : void 0
            }
          )
        }),
        en({}, v, m, h)
      )
    }
  }),
  N_ = $({ withBackground: Boolean, ...ve(), ...Ee(), ..._e() }, 'VThemeProvider'),
  H_ = j()({
    name: 'VThemeProvider',
    props: N_(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e)
      return () => {
        var l
        return e.withBackground
          ? d(
              e.tag,
              { class: ['v-theme-provider', a.value, e.class], style: e.style },
              {
                default: () => {
                  var i
                  return [(i = n.default) == null ? void 0 : i.call(n)]
                }
              }
            )
          : (l = n.default) == null
            ? void 0
            : l.call(n)
      }
    }
  }),
  z_ = $(
    {
      dotColor: String,
      fillDot: Boolean,
      hideDot: Boolean,
      icon: xe,
      iconColor: String,
      lineColor: String,
      ...ve(),
      ...Ue(),
      ...wn(),
      ...rt()
    },
    'VTimelineDivider'
  ),
  j_ = j()({
    name: 'VTimelineDivider',
    props: z_(),
    setup(e, t) {
      let { slots: n } = t
      const { sizeClasses: a, sizeStyles: l } = al(e, 'v-timeline-divider__dot'),
        { backgroundColorStyles: i, backgroundColorClasses: o } = Ne(N(e, 'dotColor')),
        { roundedClasses: r } = qe(e, 'v-timeline-divider__dot'),
        { elevationClasses: s } = ht(e),
        { backgroundColorClasses: u, backgroundColorStyles: c } = Ne(N(e, 'lineColor'))
      return (
        K(() =>
          d(
            'div',
            {
              class: ['v-timeline-divider', { 'v-timeline-divider--fill-dot': e.fillDot }, e.class],
              style: e.style
            },
            [
              d('div', { class: ['v-timeline-divider__before', u.value], style: c.value }, null),
              !e.hideDot &&
                d(
                  'div',
                  {
                    key: 'dot',
                    class: ['v-timeline-divider__dot', s.value, r.value, a.value],
                    style: l.value
                  },
                  [
                    d(
                      'div',
                      {
                        class: ['v-timeline-divider__inner-dot', o.value, r.value],
                        style: i.value
                      },
                      [
                        n.default
                          ? d(
                              Ae,
                              {
                                key: 'icon-defaults',
                                disabled: !e.icon,
                                defaults: {
                                  VIcon: { color: e.iconColor, icon: e.icon, size: e.size }
                                }
                              },
                              n.default
                            )
                          : d(
                              Me,
                              { key: 'icon', color: e.iconColor, icon: e.icon, size: e.size },
                              null
                            )
                      ]
                    )
                  ]
                ),
              d('div', { class: ['v-timeline-divider__after', u.value], style: c.value }, null)
            ]
          )
        ),
        {}
      )
    }
  }),
  Ag = $(
    {
      density: String,
      dotColor: String,
      fillDot: Boolean,
      hideDot: Boolean,
      hideOpposite: { type: Boolean, default: void 0 },
      icon: xe,
      iconColor: String,
      lineInset: [Number, String],
      ...ve(),
      ...ct(),
      ...rt(),
      ...Ue(),
      ...wn(),
      ..._e()
    },
    'VTimelineItem'
  ),
  W_ = j()({
    name: 'VTimelineItem',
    props: Ag(),
    setup(e, t) {
      let { slots: n } = t
      const { dimensionStyles: a } = dt(e),
        l = se(0),
        i = J()
      return (
        de(
          i,
          (o) => {
            var r
            o &&
              (l.value =
                ((r = o.$el.querySelector('.v-timeline-divider__dot')) == null
                  ? void 0
                  : r.getBoundingClientRect().width) ?? 0)
          },
          { flush: 'post' }
        ),
        K(() => {
          var o, r
          return d(
            'div',
            {
              class: ['v-timeline-item', { 'v-timeline-item--fill-dot': e.fillDot }, e.class],
              style: [
                {
                  '--v-timeline-dot-size': fe(l.value),
                  '--v-timeline-line-inset': e.lineInset
                    ? `calc(var(--v-timeline-dot-size) / 2 + ${fe(e.lineInset)})`
                    : fe(0)
                },
                e.style
              ]
            },
            [
              d('div', { class: 'v-timeline-item__body', style: a.value }, [
                (o = n.default) == null ? void 0 : o.call(n)
              ]),
              d(
                j_,
                {
                  ref: i,
                  hideDot: e.hideDot,
                  icon: e.icon,
                  iconColor: e.iconColor,
                  size: e.size,
                  elevation: e.elevation,
                  dotColor: e.dotColor,
                  fillDot: e.fillDot,
                  rounded: e.rounded
                },
                { default: n.icon }
              ),
              e.density !== 'compact' &&
                d('div', { class: 'v-timeline-item__opposite' }, [
                  !e.hideOpposite && ((r = n.opposite) == null ? void 0 : r.call(n))
                ])
            ]
          )
        }),
        {}
      )
    }
  }),
  U_ = $(
    {
      align: { type: String, default: 'center', validator: (e) => ['center', 'start'].includes(e) },
      direction: {
        type: String,
        default: 'vertical',
        validator: (e) => ['vertical', 'horizontal'].includes(e)
      },
      justify: { type: String, default: 'auto', validator: (e) => ['auto', 'center'].includes(e) },
      side: { type: String, validator: (e) => e == null || ['start', 'end'].includes(e) },
      lineThickness: { type: [String, Number], default: 2 },
      lineColor: String,
      truncateLine: { type: String, validator: (e) => ['start', 'end', 'both'].includes(e) },
      ...vo(Ag({ lineInset: 0 }), [
        'dotColor',
        'fillDot',
        'hideOpposite',
        'iconColor',
        'lineInset',
        'size'
      ]),
      ...ve(),
      ...ft(),
      ..._e(),
      ...Ee()
    },
    'VTimeline'
  ),
  G_ = j()({
    name: 'VTimeline',
    props: U_(),
    setup(e, t) {
      let { slots: n } = t
      const { themeClasses: a } = Re(e),
        { densityClasses: l } = Vt(e),
        { rtlClasses: i } = ut()
      Ke({
        VTimelineDivider: { lineColor: N(e, 'lineColor') },
        VTimelineItem: {
          density: N(e, 'density'),
          dotColor: N(e, 'dotColor'),
          fillDot: N(e, 'fillDot'),
          hideOpposite: N(e, 'hideOpposite'),
          iconColor: N(e, 'iconColor'),
          lineColor: N(e, 'lineColor'),
          lineInset: N(e, 'lineInset'),
          size: N(e, 'size')
        }
      })
      const o = b(() => {
          const s = e.side ? e.side : e.density !== 'default' ? 'end' : null
          return s && `v-timeline--side-${s}`
        }),
        r = b(() => {
          const s = ['v-timeline--truncate-line-start', 'v-timeline--truncate-line-end']
          switch (e.truncateLine) {
            case 'both':
              return s
            case 'start':
              return s[0]
            case 'end':
              return s[1]
            default:
              return null
          }
        })
      return (
        K(() =>
          d(
            e.tag,
            {
              class: [
                'v-timeline',
                `v-timeline--${e.direction}`,
                `v-timeline--align-${e.align}`,
                `v-timeline--justify-${e.justify}`,
                r.value,
                { 'v-timeline--inset-line': !!e.lineInset },
                a.value,
                l.value,
                o.value,
                i.value,
                e.class
              ],
              style: [{ '--v-timeline-line-thickness': fe(e.lineThickness) }, e.style]
            },
            n
          )
        ),
        {}
      )
    }
  }),
  Y_ = $({ ...ve(), ...Jt({ variant: 'text' }) }, 'VToolbarItems'),
  K_ = j()({
    name: 'VToolbarItems',
    props: Y_(),
    setup(e, t) {
      let { slots: n } = t
      return (
        Ke({ VBtn: { color: N(e, 'color'), height: 'inherit', variant: N(e, 'variant') } }),
        K(() => {
          var a
          return d('div', { class: ['v-toolbar-items', e.class], style: e.style }, [
            (a = n.default) == null ? void 0 : a.call(n)
          ])
        }),
        {}
      )
    }
  }),
  q_ = $(
    {
      id: String,
      text: String,
      ...it(
        ci({
          closeOnBack: !1,
          location: 'end',
          locationStrategy: 'connected',
          eager: !0,
          minWidth: 0,
          offset: 10,
          openOnClick: !1,
          openOnHover: !0,
          origin: 'auto',
          scrim: !1,
          scrollStrategy: 'reposition',
          transition: !1
        }),
        ['absolute', 'persistent']
      )
    },
    'VTooltip'
  ),
  Tg = j()({
    name: 'VTooltip',
    props: q_(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = be(e, 'modelValue'),
        { scopeId: l } = sl(),
        i = mt(),
        o = b(() => e.id || `v-tooltip-${i}`),
        r = J(),
        s = b(() => (e.location.split(' ').length > 1 ? e.location : e.location + ' center')),
        u = b(() =>
          e.origin === 'auto' ||
          e.origin === 'overlap' ||
          e.origin.split(' ').length > 1 ||
          e.location.split(' ').length > 1
            ? e.origin
            : e.origin + ' center'
        ),
        c = b(() =>
          e.transition ? e.transition : a.value ? 'scale-transition' : 'fade-transition'
        ),
        f = b(() => X({ 'aria-describedby': o.value }, e.activatorProps))
      return (
        K(() => {
          const v = yn.filterProps(e)
          return d(
            yn,
            X(
              { ref: r, class: ['v-tooltip', e.class], style: e.style, id: o.value },
              v,
              {
                modelValue: a.value,
                'onUpdate:modelValue': (m) => (a.value = m),
                transition: c.value,
                absolute: !0,
                location: s.value,
                origin: u.value,
                persistent: !0,
                role: 'tooltip',
                activatorProps: f.value,
                _disableGlobalStack: !0
              },
              l
            ),
            {
              activator: n.activator,
              default: function () {
                var y
                for (var m = arguments.length, g = new Array(m), h = 0; h < m; h++)
                  g[h] = arguments[h]
                return ((y = n.default) == null ? void 0 : y.call(n, ...g)) ?? e.text
              }
            }
          )
        }),
        en({}, r)
      )
    }
  }),
  X_ = j()({
    name: 'VValidation',
    props: Dm(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, t) {
      let { slots: n } = t
      const a = Mm(e, 'validation')
      return () => {
        var l
        return (l = n.default) == null ? void 0 : l.call(n, a)
      }
    }
  }),
  Z_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        VAlert: pk,
        VAlertTitle: Vm,
        VApp: Ap,
        VAppBar: qp,
        VAppBarNavIcon: gk,
        VAppBarTitle: yk,
        VAutocomplete: zw,
        VAvatar: Xt,
        VBadge: Ww,
        VBanner: Yw,
        VBannerActions: ch,
        VBannerText: dh,
        VBottomNavigation: qw,
        VBottomSheet: Zw,
        VBreadcrumbs: tx,
        VBreadcrumbsDivider: vh,
        VBreadcrumbsItem: mh,
        VBtn: De,
        VBtnGroup: Ur,
        VBtnToggle: tk,
        VCard: ox,
        VCardActions: hh,
        VCardItem: bh,
        VCardSubtitle: gh,
        VCardText: Sh,
        VCardTitle: yh,
        VCarousel: hx,
        VCarouselItem: yx,
        VCheckbox: Ak,
        VCheckboxBtn: An,
        VChip: rl,
        VChipGroup: Mk,
        VClassIcon: iu,
        VCode: bx,
        VCol: YC,
        VColorPicker: oC,
        VCombobox: uC,
        VComponentIcon: zr,
        VConfirmEdit: dC,
        VContainer: jC,
        VCounter: Io,
        VDataIterator: kC,
        VDataTable: OC,
        VDataTableFooter: Kl,
        VDataTableHeaders: ba,
        VDataTableRow: $u,
        VDataTableRows: Sa,
        VDataTableServer: HC,
        VDataTableVirtual: FC,
        VDatePicker: o1,
        VDatePickerControls: rs,
        VDatePickerHeader: ss,
        VDatePickerMonth: us,
        VDatePickerMonths: cs,
        VDatePickerYears: ds,
        VDefaultsProvider: Ae,
        VDialog: Jr,
        VDialogBottomTransition: Dp,
        VDialogTopTransition: Mp,
        VDialogTransition: So,
        VDivider: ui,
        VEmptyState: s1,
        VExpandTransition: po,
        VExpandXTransition: uu,
        VExpansionPanel: u1,
        VExpansionPanelText: fs,
        VExpansionPanelTitle: vs,
        VExpansionPanels: f1,
        VFab: m1,
        VFabTransition: Bp,
        VFadeTransition: zl,
        VField: ul,
        VFieldLabel: yl,
        VFileInput: g1,
        VFooter: b1,
        VForm: p1,
        VHover: w1,
        VIcon: Me,
        VImg: In,
        VInfiniteScroll: C1,
        VInput: bt,
        VItem: P1,
        VItemGroup: V1,
        VKbd: I1,
        VLabel: ol,
        VLayout: T1,
        VLayoutItem: B1,
        VLazy: M1,
        VLigatureIcon: pp,
        VList: Po,
        VListGroup: qr,
        VListImg: aw,
        VListItem: Tn,
        VListItemAction: iw,
        VListItemMedia: rw,
        VListItemSubtitle: Gm,
        VListItemTitle: Ym,
        VListSubheader: Km,
        VLocaleProvider: $1,
        VMain: L1,
        VMenu: Za,
        VMessages: Em,
        VNavigationDrawer: Y1,
        VNoSsr: K1,
        VOtpInput: X1,
        VOverlay: yn,
        VPagination: is,
        VParallax: J1,
        VProgressCircular: Xa,
        VProgressLinear: wo,
        VRadio: t_,
        VRadioGroup: a_,
        VRangeSlider: i_,
        VRating: r_,
        VResponsive: jr,
        VRow: e1,
        VScaleTransition: ru,
        VScrollXReverseTransition: $p,
        VScrollXTransition: Rp,
        VScrollYReverseTransition: Lp,
        VScrollYTransition: Op,
        VSelect: Cu,
        VSelectionControl: va,
        VSelectionControlGroup: Im,
        VSheet: ya,
        VSkeletonLoader: d_,
        VSlideGroup: Gl,
        VSlideGroupItem: f_,
        VSlideXReverseTransition: Np,
        VSlideXTransition: Fp,
        VSlideYReverseTransition: Hp,
        VSlideYTransition: su,
        VSlider: ls,
        VSnackbar: h_,
        VSpacer: og,
        VSparkline: S_,
        VSpeedDial: k_,
        VStepper: P_,
        VStepperActions: pg,
        VStepperHeader: kg,
        VStepperItem: wg,
        VStepperWindow: xg,
        VStepperWindowItem: Cg,
        VSvgIcon: lu,
        VSwitch: A_,
        VSystemBar: E_,
        VTab: Vg,
        VTable: pa,
        VTabs: O_,
        VTabsWindow: Pg,
        VTabsWindowItem: Ig,
        VTextField: ma,
        VTextarea: F_,
        VThemeProvider: H_,
        VTimeline: G_,
        VTimelineItem: W_,
        VToolbar: Wr,
        VToolbarItems: K_,
        VToolbarTitle: ou,
        VTooltip: Tg,
        VValidation: X_,
        VVirtualScroll: To,
        VWindow: ha,
        VWindowItem: ga
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
function Q_(e, t) {
  const n = t.modifiers || {},
    a = t.value,
    { once: l, immediate: i, ...o } = n,
    r = !Object.keys(o).length,
    { handler: s, options: u } =
      typeof a == 'object'
        ? a
        : {
            handler: a,
            options: {
              attributes: (o == null ? void 0 : o.attr) ?? r,
              characterData: (o == null ? void 0 : o.char) ?? r,
              childList: (o == null ? void 0 : o.child) ?? r,
              subtree: (o == null ? void 0 : o.sub) ?? r
            }
          },
    c = new MutationObserver(function () {
      let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        v = arguments.length > 1 ? arguments[1] : void 0
      s == null || s(f, v), l && Eg(e, t)
    })
  i && (s == null || s([], c)),
    (e._mutate = Object(e._mutate)),
    (e._mutate[t.instance.$.uid] = { observer: c }),
    c.observe(e, u)
}
function Eg(e, t) {
  var n
  ;(n = e._mutate) != null &&
    n[t.instance.$.uid] &&
    (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid])
}
const J_ = { mounted: Q_, unmounted: Eg }
function eV(e, t) {
  var l, i
  const n = t.value,
    a = { passive: !((l = t.modifiers) != null && l.active) }
  window.addEventListener('resize', n, a),
    (e._onResize = Object(e._onResize)),
    (e._onResize[t.instance.$.uid] = { handler: n, options: a }),
    ((i = t.modifiers) != null && i.quiet) || n()
}
function tV(e, t) {
  var l
  if (!((l = e._onResize) != null && l[t.instance.$.uid])) return
  const { handler: n, options: a } = e._onResize[t.instance.$.uid]
  window.removeEventListener('resize', n, a), delete e._onResize[t.instance.$.uid]
}
const nV = { mounted: eV, unmounted: tV }
function Bg(e, t) {
  const { self: n = !1 } = t.modifiers ?? {},
    a = t.value,
    l = (typeof a == 'object' && a.options) || { passive: !0 },
    i = typeof a == 'function' || 'handleEvent' in a ? a : a.handler,
    o = n ? e : t.arg ? document.querySelector(t.arg) : window
  o &&
    (o.addEventListener('scroll', i, l),
    (e._onScroll = Object(e._onScroll)),
    (e._onScroll[t.instance.$.uid] = { handler: i, options: l, target: n ? void 0 : o }))
}
function Dg(e, t) {
  var i
  if (!((i = e._onScroll) != null && i[t.instance.$.uid])) return
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid]
  l.removeEventListener('scroll', n, a), delete e._onScroll[t.instance.$.uid]
}
function aV(e, t) {
  t.value !== t.oldValue && (Dg(e, t), Bg(e, t))
}
const lV = { mounted: Bg, unmounted: Dg, updated: aV }
function iV(e, t) {
  const n = typeof e == 'string' ? ln(e) : e,
    a = oV(n, t)
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      kv(null, l)
    }
  }
}
function oV(e, t) {
  return function (n, a, l) {
    var f, v, m
    const i = typeof t == 'function' ? t(a) : t,
      o = ((f = a.value) == null ? void 0 : f.text) ?? a.value ?? (i == null ? void 0 : i.text),
      r = $l(a.value) ? a.value : {},
      s = () => o ?? n.innerHTML,
      u =
        (l.ctx === a.instance.$
          ? (v = rV(l, a.instance.$)) == null
            ? void 0
            : v.provides
          : (m = l.ctx) == null
            ? void 0
            : m.provides) ?? a.instance.$.provides,
      c = sn(e, X(i, r), s)
    ;(c.appContext = Object.assign(Object.create(null), a.instance.$.appContext, { provides: u })),
      kv(c, n)
  }
}
function rV(e, t) {
  const n = new Set(),
    a = (i) => {
      var o, r
      for (const s of i) {
        if (!s) continue
        if (s === e) return !0
        n.add(s)
        let u
        if (
          (s.suspense
            ? (u = a([s.ssContent]))
            : Array.isArray(s.children)
              ? (u = a(s.children))
              : (o = s.component) != null &&
                o.vnode &&
                (u = a([(r = s.component) == null ? void 0 : r.subTree])),
          u)
        )
          return u
        n.delete(s)
      }
      return !1
    }
  if (!a([t.subTree])) throw new Error('Could not find original vnode')
  const l = Array.from(n).reverse()
  for (const i of l) if (i.component) return i.component
  return t
}
const sV = iV(Tg, (e) => {
    var t
    return {
      activator: 'parent',
      location: ((t = e.arg) == null ? void 0 : t.replace('-', ' ')) ?? 'top',
      text: typeof e.value == 'boolean' ? void 0 : e.value
    }
  }),
  uV = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ClickOutside: ih,
        Intersect: ai,
        Mutate: J_,
        Resize: nV,
        Ripple: Bn,
        Scroll: lV,
        Tooltip: sV,
        Touch: _u
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  cV = '/assets/red-CIzScUz4.jpg',
  dV = '/assets/location-BvWA5GQR.png',
  fV = '/assets/email-gUQA5Cxe.png',
  vV = '/assets/telegram-B0Pd9f_W.png',
  mV = '/assets/github-CoKHXXBj.png',
  cl = (e, t) => {
    const n = e.__vccOpts || e
    for (const [a, l] of t) n[a] = l
    return n
  },
  hV = {
    data() {
      return {
        projects: [
          {
            title: 'QA',
            open: !1,
            subtitle: ['UI-Auto Nokian tyres', 'API-Auto Nokian tyres', 'Autotest Mobile Wiki'],
            torouter: ['/qaiunokian', '/qaapinokian', '/qamobilewiki']
          },
          {
            title: 'Backend',
            open: !1,
            subtitle: ['Us', 'As', 'Ai'],
            torouter: ['/qaiunokian', '/qaapinokian', '/qamobilewiki']
          },
          {
            title: 'Web',
            open: !1,
            subtitle: ['res', 'es', 'ki'],
            torouter: ['/qaiunokian', '/qaapinokian', '/qamobilewiki']
          }
        ]
      }
    },
    methods: {
      toggleAccordion(e) {
        this.projects[e].open = !this.projects[e].open
      }
    }
  },
  Mg = (e) => (Es('data-v-49fd7350'), (e = e()), Bs(), e),
  gV = { class: 'resume-sidebar' },
  yV = Mg(() => Oe('div', { class: 'profile-quote' }, [Oe('img', { src: cV })], -1)),
  bV = Db(
    '<div class="contact-info" data-v-49fd7350><h2 data-v-49fd7350>Contacts</h2><div data-v-49fd7350><img src="' +
      dV +
      '" alt="" srcset="" width="20px" height="20px" data-v-49fd7350> Podgorica, Montenegro </div><div data-v-49fd7350><img src="' +
      fV +
      '" alt="" srcset="" width="20px" height="20px" data-v-49fd7350><a href="mailto:tanya.cheba12@gmail.com" data-v-49fd7350>tanya.cheba12@gmail.com</a></div><div data-v-49fd7350><img src="' +
      vV +
      '" alt="" srcset="" width="20px" height="20px" data-v-49fd7350><a href="tg://resolve?domain=tatianacheb" data-v-49fd7350>@tatianacheb</a></div><div data-v-49fd7350><img src="' +
      mV +
      '" alt="" srcset="" width="20px" height="20px" data-v-49fd7350><a href="https://github.com/tatacheba" data-v-49fd7350>tatacheba</a></div></div><div class="skills" data-v-49fd7350><h2 data-v-49fd7350>Skills</h2><ul data-v-49fd7350><li data-v-49fd7350> AutoQA: Selenium, Cucumber, <br data-v-49fd7350> Postman, Jest, Cypress,<br data-v-49fd7350> Playwright, Gradle, NPM, Git </li><li data-v-49fd7350> Development: HTML, CSS,<br data-v-49fd7350> JS (Vue, React, Node), Java </li><li data-v-49fd7350> Other: Photoshop, Figma,<br data-v-49fd7350> Illustrator, AutoCad,<br data-v-49fd7350> AD Inventor 3D, 3DMaya <br data-v-49fd7350></li></ul></div>',
    2
  ),
  SV = { class: 'project', id: 'project' },
  pV = Mg(() => Oe('h2', null, 'Projects', -1)),
  kV = ['onClick']
function wV(e, t, n, a, l, i) {
  const o = ln('router-link')
  return (
    st(),
    Bt('div', gV, [
      d(o, { to: '/' }, { default: nn(() => [yV]), _: 1 }),
      bV,
      Oe('div', SV, [
        pV,
        (st(!0),
        Bt(
          me,
          null,
          Cr(
            l.projects,
            (r, s) => (
              st(),
              Bt(
                'div',
                { key: s, class: 'arrow-container', onClick: (u) => i.toggleAccordion(s) },
                [
                  qt(Ot(r.title) + ' ', 1),
                  Oe(
                    'div',
                    { class: 'arrow', style: to((r.open, { height: r.open ? '0' : '100%' })) },
                    null,
                    4
                  ),
                  We(
                    Oe(
                      'ul',
                      { class: no(r.title.toLowerCase()) },
                      [
                        d(
                          o,
                          { to: { path: r.torouter[0] } },
                          { default: nn(() => [Oe('li', null, Ot(r.subtitle[0]), 1)]), _: 2 },
                          1032,
                          ['to']
                        ),
                        d(
                          o,
                          { to: { path: r.torouter[1] } },
                          { default: nn(() => [Oe('li', null, Ot(r.subtitle[1]), 1)]), _: 2 },
                          1032,
                          ['to']
                        ),
                        d(
                          o,
                          { to: { path: r.torouter[2] } },
                          { default: nn(() => [Oe('li', null, Ot(r.subtitle[2]), 1)]), _: 2 },
                          1032,
                          ['to']
                        )
                      ],
                      2
                    ),
                    [[Zt, r.open]]
                  )
                ],
                8,
                kV
              )
            )
          ),
          128
        ))
      ])
    ])
  )
}
const xV = cl(hV, [
    ['render', wV],
    ['__scopeId', 'data-v-49fd7350']
  ]),
  CV = { class: 'wrapper' },
  _V = Jl({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const a = ln('router-view')
        return st(), Bt('div', CV, [d(a), d(xV)])
      }
    }
  }),
  VV = cl(_V, [['__scopeId', 'data-v-afc28767']]),
  PV = 'modulepreload',
  IV = function (e) {
    return '/' + e
  },
  zd = {},
  vr = function (t, n, a) {
    let l = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        o = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      l = Promise.all(
        n.map((r) => {
          if (((r = IV(r)), r in zd)) return
          zd[r] = !0
          const s = r.endsWith('.css'),
            u = s ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${r}"]${u}`)) return
          const c = document.createElement('link')
          if (
            ((c.rel = s ? 'stylesheet' : PV),
            s || ((c.as = 'script'), (c.crossOrigin = '')),
            (c.href = r),
            o && c.setAttribute('nonce', o),
            document.head.appendChild(c),
            s)
          )
            return new Promise((f, v) => {
              c.addEventListener('load', f),
                c.addEventListener('error', () => v(new Error(`Unable to preload CSS for ${r}`)))
            })
        })
      )
    }
    return l
      .then(() => t())
      .catch((i) => {
        const o = new Event('vite:preloadError', { cancelable: !0 })
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented)) throw i
      })
  }
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Oa = typeof document < 'u'
function AV(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const He = Object.assign
function mr(e, t) {
  const n = {}
  for (const a in t) {
    const l = t[a]
    n[a] = rn(l) ? l.map(e) : e(l)
  }
  return n
}
const _l = () => {},
  rn = Array.isArray,
  Rg = /#/g,
  TV = /&/g,
  EV = /\//g,
  BV = /=/g,
  DV = /\?/g,
  $g = /\+/g,
  MV = /%5B/g,
  RV = /%5D/g,
  Og = /%5E/g,
  $V = /%60/g,
  Lg = /%7B/g,
  OV = /%7C/g,
  Fg = /%7D/g,
  LV = /%20/g
function zu(e) {
  return encodeURI('' + e)
    .replace(OV, '|')
    .replace(MV, '[')
    .replace(RV, ']')
}
function FV(e) {
  return zu(e).replace(Lg, '{').replace(Fg, '}').replace(Og, '^')
}
function ms(e) {
  return zu(e)
    .replace($g, '%2B')
    .replace(LV, '+')
    .replace(Rg, '%23')
    .replace(TV, '%26')
    .replace($V, '`')
    .replace(Lg, '{')
    .replace(Fg, '}')
    .replace(Og, '^')
}
function NV(e) {
  return ms(e).replace(BV, '%3D')
}
function HV(e) {
  return zu(e).replace(Rg, '%23').replace(DV, '%3F')
}
function zV(e) {
  return e == null ? '' : HV(e).replace(EV, '%2F')
}
function Xl(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const jV = /\/$/,
  WV = (e) => e.replace(jV, '')
function hr(e, t, n = '/') {
  let a,
    l = {},
    i = '',
    o = ''
  const r = t.indexOf('#')
  let s = t.indexOf('?')
  return (
    r < s && r >= 0 && (s = -1),
    s > -1 && ((a = t.slice(0, s)), (i = t.slice(s + 1, r > -1 ? r : t.length)), (l = e(i))),
    r > -1 && ((a = a || t.slice(0, r)), (o = t.slice(r, t.length))),
    (a = KV(a ?? t, n)),
    { fullPath: a + (i && '?') + i + o, path: a, query: l, hash: Xl(o) }
  )
}
function UV(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function jd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function GV(e, t, n) {
  const a = t.matched.length - 1,
    l = n.matched.length - 1
  return (
    a > -1 &&
    a === l &&
    Qa(t.matched[a], n.matched[l]) &&
    Ng(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Qa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ng(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!YV(e[n], t[n])) return !1
  return !0
}
function YV(e, t) {
  return rn(e) ? Wd(e, t) : rn(t) ? Wd(t, e) : e === t
}
function Wd(e, t) {
  return rn(t)
    ? e.length === t.length && e.every((n, a) => n === t[a])
    : e.length === 1 && e[0] === t
}
function KV(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    a = e.split('/'),
    l = a[a.length - 1]
  ;(l === '..' || l === '.') && a.push('')
  let i = n.length - 1,
    o,
    r
  for (o = 0; o < a.length; o++)
    if (((r = a[o]), r !== '.'))
      if (r === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + a.slice(o).join('/')
}
var Zl
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Zl || (Zl = {}))
var Vl
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Vl || (Vl = {}))
function qV(e) {
  if (!e)
    if (Oa) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), WV(e)
}
const XV = /^[^#]+#/
function ZV(e, t) {
  return e.replace(XV, '#') + t
}
function QV(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    a = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: a.left - n.left - (t.left || 0),
    top: a.top - n.top - (t.top || 0)
  }
}
const Wo = () => ({ left: window.scrollX, top: window.scrollY })
function JV(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      a = typeof n == 'string' && n.startsWith('#'),
      l =
        typeof n == 'string'
          ? a
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!l) return
    t = QV(l, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Ud(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const hs = new Map()
function eP(e, t) {
  hs.set(e, t)
}
function tP(e) {
  const t = hs.get(e)
  return hs.delete(e), t
}
let nP = () => location.protocol + '//' + location.host
function Hg(e, t) {
  const { pathname: n, search: a, hash: l } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let r = l.includes(e.slice(i)) ? e.slice(i).length : 1,
      s = l.slice(r)
    return s[0] !== '/' && (s = '/' + s), jd(s, '')
  }
  return jd(n, e) + a + l
}
function aP(e, t, n, a) {
  let l = [],
    i = [],
    o = null
  const r = ({ state: v }) => {
    const m = Hg(e, location),
      g = n.value,
      h = t.value
    let y = 0
    if (v) {
      if (((n.value = m), (t.value = v), o && o === g)) {
        o = null
        return
      }
      y = h ? v.position - h.position : 0
    } else a(m)
    l.forEach((S) => {
      S(n.value, g, {
        delta: y,
        type: Zl.pop,
        direction: y ? (y > 0 ? Vl.forward : Vl.back) : Vl.unknown
      })
    })
  }
  function s() {
    o = n.value
  }
  function u(v) {
    l.push(v)
    const m = () => {
      const g = l.indexOf(v)
      g > -1 && l.splice(g, 1)
    }
    return i.push(m), m
  }
  function c() {
    const { history: v } = window
    v.state && v.replaceState(He({}, v.state, { scroll: Wo() }), '')
  }
  function f() {
    for (const v of i) v()
    ;(i = []),
      window.removeEventListener('popstate', r),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', r),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: s, listen: u, destroy: f }
  )
}
function Gd(e, t, n, a = !1, l = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: a,
    position: window.history.length,
    scroll: l ? Wo() : null
  }
}
function lP(e) {
  const { history: t, location: n } = window,
    a = { value: Hg(e, n) },
    l = { value: t.state }
  l.value ||
    i(
      a.value,
      {
        back: null,
        current: a.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function i(s, u, c) {
    const f = e.indexOf('#'),
      v = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + s : nP() + e + s
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', v), (l.value = u)
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](v)
    }
  }
  function o(s, u) {
    const c = He({}, t.state, Gd(l.value.back, s, l.value.forward, !0), u, {
      position: l.value.position
    })
    i(s, c, !0), (a.value = s)
  }
  function r(s, u) {
    const c = He({}, l.value, t.state, { forward: s, scroll: Wo() })
    i(c.current, c, !0)
    const f = He({}, Gd(a.value, s, null), { position: c.position + 1 }, u)
    i(s, f, !1), (a.value = s)
  }
  return { location: a, state: l, push: r, replace: o }
}
function iP(e) {
  e = qV(e)
  const t = lP(e),
    n = aP(e, t.state, t.location, t.replace)
  function a(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const l = He({ location: '', base: e, go: a, createHref: ZV.bind(null, e) }, t, n)
  return (
    Object.defineProperty(l, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(l, 'state', { enumerable: !0, get: () => t.state.value }),
    l
  )
}
function oP(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function zg(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const On = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  jg = Symbol('')
var Yd
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Yd || (Yd = {}))
function Ja(e, t) {
  return He(new Error(), { type: e, [jg]: !0 }, t)
}
function xn(e, t) {
  return e instanceof Error && jg in e && (t == null || !!(e.type & t))
}
const Kd = '[^/]+?',
  rP = { sensitive: !1, strict: !1, start: !0, end: !0 },
  sP = /[.+*?^${}()[\]/\\]/g
function uP(e, t) {
  const n = He({}, rP, t),
    a = []
  let l = n.start ? '^' : ''
  const i = []
  for (const u of e) {
    const c = u.length ? [] : [90]
    n.strict && !u.length && (l += '/')
    for (let f = 0; f < u.length; f++) {
      const v = u[f]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0) f || (l += '/'), (l += v.value.replace(sP, '\\$&')), (m += 40)
      else if (v.type === 1) {
        const { value: g, repeatable: h, optional: y, regexp: S } = v
        i.push({ name: g, repeatable: h, optional: y })
        const p = S || Kd
        if (p !== Kd) {
          m += 10
          try {
            new RegExp(`(${p})`)
          } catch (T) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + T.message)
          }
        }
        let A = h ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`
        f || (A = y && u.length < 2 ? `(?:/${A})` : '/' + A),
          y && (A += '?'),
          (l += A),
          (m += 20),
          y && (m += -8),
          h && (m += -20),
          p === '.*' && (m += -50)
      }
      c.push(m)
    }
    a.push(c)
  }
  if (n.strict && n.end) {
    const u = a.length - 1
    a[u][a[u].length - 1] += 0.7000000000000001
  }
  n.strict || (l += '/?'), n.end ? (l += '$') : n.strict && (l += '(?:/|$)')
  const o = new RegExp(l, n.sensitive ? '' : 'i')
  function r(u) {
    const c = u.match(o),
      f = {}
    if (!c) return null
    for (let v = 1; v < c.length; v++) {
      const m = c[v] || '',
        g = i[v - 1]
      f[g.name] = m && g.repeatable ? m.split('/') : m
    }
    return f
  }
  function s(u) {
    let c = '',
      f = !1
    for (const v of e) {
      ;(!f || !c.endsWith('/')) && (c += '/'), (f = !1)
      for (const m of v)
        if (m.type === 0) c += m.value
        else if (m.type === 1) {
          const { value: g, repeatable: h, optional: y } = m,
            S = g in u ? u[g] : ''
          if (rn(S) && !h)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            )
          const p = rn(S) ? S.join('/') : S
          if (!p)
            if (y) v.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${g}"`)
          c += p
        }
    }
    return c || '/'
  }
  return { re: o, score: a, keys: i, parse: r, stringify: s }
}
function cP(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const a = t[n] - e[n]
    if (a) return a
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function dP(e, t) {
  let n = 0
  const a = e.score,
    l = t.score
  for (; n < a.length && n < l.length; ) {
    const i = cP(a[n], l[n])
    if (i) return i
    n++
  }
  if (Math.abs(l.length - a.length) === 1) {
    if (qd(a)) return 1
    if (qd(l)) return -1
  }
  return l.length - a.length
}
function qd(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const fP = { type: 0, value: '' },
  vP = /[a-zA-Z0-9_]/
function mP(e) {
  if (!e) return [[]]
  if (e === '/') return [[fP]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`)
  }
  let n = 0,
    a = n
  const l = []
  let i
  function o() {
    i && l.push(i), (i = [])
  }
  let r = 0,
    s,
    u = '',
    c = ''
  function f() {
    u &&
      (n === 0
        ? i.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (s === '*' || s === '+') &&
              t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: s === '*' || s === '+',
              optional: s === '*' || s === '?'
            }))
          : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function v() {
    u += s
  }
  for (; r < e.length; ) {
    if (((s = e[r++]), s === '\\' && n !== 2)) {
      ;(a = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        s === '/' ? (u && f(), o()) : s === ':' ? (f(), (n = 1)) : v()
        break
      case 4:
        v(), (n = a)
        break
      case 1:
        s === '('
          ? (n = 2)
          : vP.test(s)
            ? v()
            : (f(), (n = 0), s !== '*' && s !== '?' && s !== '+' && r--)
        break
      case 2:
        s === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + s) : (n = 3)) : (c += s)
        break
      case 3:
        f(), (n = 0), s !== '*' && s !== '?' && s !== '+' && r--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), l
}
function hP(e, t, n) {
  const a = uP(mP(e.path), n),
    l = He(a, { record: e, parent: t, children: [], alias: [] })
  return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l
}
function gP(e, t) {
  const n = [],
    a = new Map()
  t = Qd({ strict: !1, end: !0, sensitive: !1 }, t)
  function l(c) {
    return a.get(c)
  }
  function i(c, f, v) {
    const m = !v,
      g = yP(c)
    g.aliasOf = v && v.record
    const h = Qd(t, c),
      y = [g]
    if ('alias' in c) {
      const A = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const T of A)
        y.push(
          He({}, g, {
            components: v ? v.record.components : g.components,
            path: T,
            aliasOf: v ? v.record : g
          })
        )
    }
    let S, p
    for (const A of y) {
      const { path: T } = A
      if (f && T[0] !== '/') {
        const w = f.record.path,
          x = w[w.length - 1] === '/' ? '' : '/'
        A.path = f.record.path + (T && x + T)
      }
      if (
        ((S = hP(A, f, h)),
        v
          ? v.alias.push(S)
          : ((p = p || S), p !== S && p.alias.push(S), m && c.name && !Zd(S) && o(c.name)),
        g.children)
      ) {
        const w = g.children
        for (let x = 0; x < w.length; x++) i(w[x], S, v && v.children[x])
      }
      ;(v = v || S),
        ((S.record.components && Object.keys(S.record.components).length) ||
          S.record.name ||
          S.record.redirect) &&
          s(S)
    }
    return p
      ? () => {
          o(p)
        }
      : _l
  }
  function o(c) {
    if (zg(c)) {
      const f = a.get(c)
      f && (a.delete(c), n.splice(n.indexOf(f), 1), f.children.forEach(o), f.alias.forEach(o))
    } else {
      const f = n.indexOf(c)
      f > -1 &&
        (n.splice(f, 1),
        c.record.name && a.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o))
    }
  }
  function r() {
    return n
  }
  function s(c) {
    let f = 0
    for (
      ;
      f < n.length && dP(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !Wg(c, n[f]));

    )
      f++
    n.splice(f, 0, c), c.record.name && !Zd(c) && a.set(c.record.name, c)
  }
  function u(c, f) {
    let v,
      m = {},
      g,
      h
    if ('name' in c && c.name) {
      if (((v = a.get(c.name)), !v)) throw Ja(1, { location: c })
      ;(h = v.record.name),
        (m = He(
          Xd(
            f.params,
            v.keys
              .filter((p) => !p.optional)
              .concat(v.parent ? v.parent.keys.filter((p) => p.optional) : [])
              .map((p) => p.name)
          ),
          c.params &&
            Xd(
              c.params,
              v.keys.map((p) => p.name)
            )
        )),
        (g = v.stringify(m))
    } else if (c.path != null)
      (g = c.path), (v = n.find((p) => p.re.test(g))), v && ((m = v.parse(g)), (h = v.record.name))
    else {
      if (((v = f.name ? a.get(f.name) : n.find((p) => p.re.test(f.path))), !v))
        throw Ja(1, { location: c, currentLocation: f })
      ;(h = v.record.name), (m = He({}, f.params, c.params)), (g = v.stringify(m))
    }
    const y = []
    let S = v
    for (; S; ) y.unshift(S.record), (S = S.parent)
    return { name: h, path: g, params: m, matched: y, meta: SP(y) }
  }
  return (
    e.forEach((c) => i(c)),
    { addRoute: i, resolve: u, removeRoute: o, getRoutes: r, getRecordMatcher: l }
  )
}
function Xd(e, t) {
  const n = {}
  for (const a of t) a in e && (n[a] = e[a])
  return n
}
function yP(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: bP(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function bP(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const a in e.components) t[a] = typeof n == 'object' ? n[a] : n
  return t
}
function Zd(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function SP(e) {
  return e.reduce((t, n) => He(t, n.meta), {})
}
function Qd(e, t) {
  const n = {}
  for (const a in e) n[a] = a in t ? t[a] : e[a]
  return n
}
function Wg(e, t) {
  return t.children.some((n) => n === e || Wg(e, n))
}
function pP(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const a = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let l = 0; l < a.length; ++l) {
    const i = a[l].replace($g, ' '),
      o = i.indexOf('='),
      r = Xl(o < 0 ? i : i.slice(0, o)),
      s = o < 0 ? null : Xl(i.slice(o + 1))
    if (r in t) {
      let u = t[r]
      rn(u) || (u = t[r] = [u]), u.push(s)
    } else t[r] = s
  }
  return t
}
function Jd(e) {
  let t = ''
  for (let n in e) {
    const a = e[n]
    if (((n = NV(n)), a == null)) {
      a !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(rn(a) ? a.map((i) => i && ms(i)) : [a && ms(a)]).forEach((i) => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function kP(e) {
  const t = {}
  for (const n in e) {
    const a = e[n]
    a !== void 0 &&
      (t[n] = rn(a) ? a.map((l) => (l == null ? null : '' + l)) : a == null ? a : '' + a)
  }
  return t
}
const wP = Symbol(''),
  ef = Symbol(''),
  ju = Symbol(''),
  Ug = Symbol(''),
  gs = Symbol('')
function hl() {
  let e = []
  function t(a) {
    return (
      e.push(a),
      () => {
        const l = e.indexOf(a)
        l > -1 && e.splice(l, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function jn(e, t, n, a, l, i = (o) => o()) {
  const o = a && (a.enterCallbacks[l] = a.enterCallbacks[l] || [])
  return () =>
    new Promise((r, s) => {
      const u = (v) => {
          v === !1
            ? s(Ja(4, { from: n, to: t }))
            : v instanceof Error
              ? s(v)
              : oP(v)
                ? s(Ja(2, { from: t, to: v }))
                : (o && a.enterCallbacks[l] === o && typeof v == 'function' && o.push(v), r())
        },
        c = i(() => e.call(a && a.instances[l], t, n, u))
      let f = Promise.resolve(c)
      e.length < 3 && (f = f.then(u)), f.catch((v) => s(v))
    })
}
function gr(e, t, n, a, l = (i) => i()) {
  const i = []
  for (const o of e)
    for (const r in o.components) {
      let s = o.components[r]
      if (!(t !== 'beforeRouteEnter' && !o.instances[r]))
        if (xP(s)) {
          const c = (s.__vccOpts || s)[t]
          c && i.push(jn(c, n, a, o, r, l))
        } else {
          let u = s()
          i.push(() =>
            u.then((c) => {
              if (!c)
                return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`))
              const f = AV(c) ? c.default : c
              o.components[r] = f
              const m = (f.__vccOpts || f)[t]
              return m && jn(m, n, a, o, r, l)()
            })
          )
        }
    }
  return i
}
function xP(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function tf(e) {
  const t = Pe(ju),
    n = Pe(Ug),
    a = b(() => {
      const s = at(e.to)
      return t.resolve(s)
    }),
    l = b(() => {
      const { matched: s } = a.value,
        { length: u } = s,
        c = s[u - 1],
        f = n.matched
      if (!c || !f.length) return -1
      const v = f.findIndex(Qa.bind(null, c))
      if (v > -1) return v
      const m = nf(s[u - 2])
      return u > 1 && nf(c) === m && f[f.length - 1].path !== m
        ? f.findIndex(Qa.bind(null, s[u - 2]))
        : v
    }),
    i = b(() => l.value > -1 && PP(n.params, a.value.params)),
    o = b(() => l.value > -1 && l.value === n.matched.length - 1 && Ng(n.params, a.value.params))
  function r(s = {}) {
    return VP(s) ? t[at(e.replace) ? 'replace' : 'push'](at(e.to)).catch(_l) : Promise.resolve()
  }
  return { route: a, href: b(() => a.value.href), isActive: i, isExactActive: o, navigate: r }
}
const CP = Jl({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: tf,
    setup(e, { slots: t }) {
      const n = kt(tf(e)),
        { options: a } = Pe(ju),
        l = b(() => ({
          [af(e.activeClass, a.linkActiveClass, 'router-link-active')]: n.isActive,
          [af(e.exactActiveClass, a.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : sn(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: l.value
              },
              i
            )
      }
    }
  }),
  _P = CP
function VP(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function PP(e, t) {
  for (const n in t) {
    const a = t[n],
      l = e[n]
    if (typeof a == 'string') {
      if (a !== l) return !1
    } else if (!rn(l) || l.length !== a.length || a.some((i, o) => i !== l[o])) return !1
  }
  return !0
}
function nf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const af = (e, t, n) => e ?? t ?? n,
  IP = Jl({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const a = Pe(gs),
        l = b(() => e.route || a.value),
        i = Pe(ef, 0),
        o = b(() => {
          let u = at(i)
          const { matched: c } = l.value
          let f
          for (; (f = c[u]) && !f.components; ) u++
          return u
        }),
        r = b(() => l.value.matched[o.value])
      Fe(
        ef,
        b(() => o.value + 1)
      ),
        Fe(wP, r),
        Fe(gs, l)
      const s = J()
      return (
        de(
          () => [s.value, r.value, e.name],
          ([u, c, f], [v, m, g]) => {
            c &&
              ((c.instances[f] = u),
              m &&
                m !== c &&
                u &&
                u === v &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              u && c && (!m || !Qa(c, m) || !v) && (c.enterCallbacks[f] || []).forEach((h) => h(u))
          },
          { flush: 'post' }
        ),
        () => {
          const u = l.value,
            c = e.name,
            f = r.value,
            v = f && f.components[c]
          if (!v) return lf(n.default, { Component: v, route: u })
          const m = f.props[c],
            g = m ? (m === !0 ? u.params : typeof m == 'function' ? m(u) : m) : null,
            y = sn(
              v,
              He({}, g, t, {
                onVnodeUnmounted: (S) => {
                  S.component.isUnmounted && (f.instances[c] = null)
                },
                ref: s
              })
            )
          return lf(n.default, { Component: y, route: u }) || y
        }
      )
    }
  })
function lf(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const AP = IP
function TP(e) {
  const t = gP(e.routes, e),
    n = e.parseQuery || pP,
    a = e.stringifyQuery || Jd,
    l = e.history,
    i = hl(),
    o = hl(),
    r = hl(),
    s = se(On)
  let u = On
  Oa && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const c = mr.bind(null, (R) => '' + R),
    f = mr.bind(null, zV),
    v = mr.bind(null, Xl)
  function m(R, oe) {
    let ne, U
    return zg(R) ? ((ne = t.getRecordMatcher(R)), (U = oe)) : (U = R), t.addRoute(U, ne)
  }
  function g(R) {
    const oe = t.getRecordMatcher(R)
    oe && t.removeRoute(oe)
  }
  function h() {
    return t.getRoutes().map((R) => R.record)
  }
  function y(R) {
    return !!t.getRecordMatcher(R)
  }
  function S(R, oe) {
    if (((oe = He({}, oe || s.value)), typeof R == 'string')) {
      const B = hr(n, R, oe.path),
        M = t.resolve({ path: B.path }, oe),
        H = l.createHref(B.fullPath)
      return He(B, M, { params: v(M.params), hash: Xl(B.hash), redirectedFrom: void 0, href: H })
    }
    let ne
    if (R.path != null) ne = He({}, R, { path: hr(n, R.path, oe.path).path })
    else {
      const B = He({}, R.params)
      for (const M in B) B[M] == null && delete B[M]
      ;(ne = He({}, R, { params: f(B) })), (oe.params = f(oe.params))
    }
    const U = t.resolve(ne, oe),
      ge = R.hash || ''
    U.params = c(v(U.params))
    const Z = UV(a, He({}, R, { hash: FV(ge), path: U.path })),
      C = l.createHref(Z)
    return He({ fullPath: Z, hash: ge, query: a === Jd ? kP(R.query) : R.query || {} }, U, {
      redirectedFrom: void 0,
      href: C
    })
  }
  function p(R) {
    return typeof R == 'string' ? hr(n, R, s.value.path) : He({}, R)
  }
  function A(R, oe) {
    if (u !== R) return Ja(8, { from: oe, to: R })
  }
  function T(R) {
    return V(R)
  }
  function w(R) {
    return T(He(p(R), { replace: !0 }))
  }
  function x(R) {
    const oe = R.matched[R.matched.length - 1]
    if (oe && oe.redirect) {
      const { redirect: ne } = oe
      let U = typeof ne == 'function' ? ne(R) : ne
      return (
        typeof U == 'string' &&
          ((U = U.includes('?') || U.includes('#') ? (U = p(U)) : { path: U }), (U.params = {})),
        He({ query: R.query, hash: R.hash, params: U.path != null ? {} : R.params }, U)
      )
    }
  }
  function V(R, oe) {
    const ne = (u = S(R)),
      U = s.value,
      ge = R.state,
      Z = R.force,
      C = R.replace === !0,
      B = x(ne)
    if (B)
      return V(
        He(p(B), { state: typeof B == 'object' ? He({}, ge, B.state) : ge, force: Z, replace: C }),
        oe || ne
      )
    const M = ne
    M.redirectedFrom = oe
    let H
    return (
      !Z && GV(a, U, ne) && ((H = Ja(16, { to: M, from: U })), z(U, U, !0, !1)),
      (H ? Promise.resolve(H) : P(M, U))
        .catch((G) => (xn(G) ? (xn(G, 2) ? G : O(G)) : F(G, M, U)))
        .then((G) => {
          if (G) {
            if (xn(G, 2))
              return V(
                He({ replace: C }, p(G.to), {
                  state: typeof G.to == 'object' ? He({}, ge, G.to.state) : ge,
                  force: Z
                }),
                oe || M
              )
          } else G = I(M, U, !0, C, ge)
          return E(M, U, G), G
        })
    )
  }
  function _(R, oe) {
    const ne = A(R, oe)
    return ne ? Promise.reject(ne) : Promise.resolve()
  }
  function k(R) {
    const oe = Se.values().next().value
    return oe && typeof oe.runWithContext == 'function' ? oe.runWithContext(R) : R()
  }
  function P(R, oe) {
    let ne
    const [U, ge, Z] = EP(R, oe)
    ne = gr(U.reverse(), 'beforeRouteLeave', R, oe)
    for (const B of U)
      B.leaveGuards.forEach((M) => {
        ne.push(jn(M, R, oe))
      })
    const C = _.bind(null, R, oe)
    return (
      ne.push(C),
      Q(ne)
        .then(() => {
          ne = []
          for (const B of i.list()) ne.push(jn(B, R, oe))
          return ne.push(C), Q(ne)
        })
        .then(() => {
          ne = gr(ge, 'beforeRouteUpdate', R, oe)
          for (const B of ge)
            B.updateGuards.forEach((M) => {
              ne.push(jn(M, R, oe))
            })
          return ne.push(C), Q(ne)
        })
        .then(() => {
          ne = []
          for (const B of Z)
            if (B.beforeEnter)
              if (rn(B.beforeEnter)) for (const M of B.beforeEnter) ne.push(jn(M, R, oe))
              else ne.push(jn(B.beforeEnter, R, oe))
          return ne.push(C), Q(ne)
        })
        .then(
          () => (
            R.matched.forEach((B) => (B.enterCallbacks = {})),
            (ne = gr(Z, 'beforeRouteEnter', R, oe, k)),
            ne.push(C),
            Q(ne)
          )
        )
        .then(() => {
          ne = []
          for (const B of o.list()) ne.push(jn(B, R, oe))
          return ne.push(C), Q(ne)
        })
        .catch((B) => (xn(B, 8) ? B : Promise.reject(B)))
    )
  }
  function E(R, oe, ne) {
    r.list().forEach((U) => k(() => U(R, oe, ne)))
  }
  function I(R, oe, ne, U, ge) {
    const Z = A(R, oe)
    if (Z) return Z
    const C = oe === On,
      B = Oa ? history.state : {}
    ne &&
      (U || C
        ? l.replace(R.fullPath, He({ scroll: C && B && B.scroll }, ge))
        : l.push(R.fullPath, ge)),
      (s.value = R),
      z(R, oe, ne, C),
      O()
  }
  let D
  function L() {
    D ||
      (D = l.listen((R, oe, ne) => {
        if (!ue.listening) return
        const U = S(R),
          ge = x(U)
        if (ge) {
          V(He(ge, { replace: !0 }), U).catch(_l)
          return
        }
        u = U
        const Z = s.value
        Oa && eP(Ud(Z.fullPath, ne.delta), Wo()),
          P(U, Z)
            .catch((C) =>
              xn(C, 12)
                ? C
                : xn(C, 2)
                  ? (V(C.to, U)
                      .then((B) => {
                        xn(B, 20) && !ne.delta && ne.type === Zl.pop && l.go(-1, !1)
                      })
                      .catch(_l),
                    Promise.reject())
                  : (ne.delta && l.go(-ne.delta, !1), F(C, U, Z))
            )
            .then((C) => {
              ;(C = C || I(U, Z, !1)),
                C &&
                  (ne.delta && !xn(C, 8)
                    ? l.go(-ne.delta, !1)
                    : ne.type === Zl.pop && xn(C, 20) && l.go(-1, !1)),
                E(U, Z, C)
            })
            .catch(_l)
      }))
  }
  let W = hl(),
    Y = hl(),
    te
  function F(R, oe, ne) {
    O(R)
    const U = Y.list()
    return U.length ? U.forEach((ge) => ge(R, oe, ne)) : console.error(R), Promise.reject(R)
  }
  function q() {
    return te && s.value !== On
      ? Promise.resolve()
      : new Promise((R, oe) => {
          W.add([R, oe])
        })
  }
  function O(R) {
    return te || ((te = !R), L(), W.list().forEach(([oe, ne]) => (R ? ne(R) : oe())), W.reset()), R
  }
  function z(R, oe, ne, U) {
    const { scrollBehavior: ge } = e
    if (!Oa || !ge) return Promise.resolve()
    const Z =
      (!ne && tP(Ud(R.fullPath, 0))) ||
      ((U || !ne) && history.state && history.state.scroll) ||
      null
    return Te()
      .then(() => ge(R, oe, Z))
      .then((C) => C && JV(C))
      .catch((C) => F(C, R, oe))
  }
  const ee = (R) => l.go(R)
  let he
  const Se = new Set(),
    ue = {
      currentRoute: s,
      listening: !0,
      addRoute: m,
      removeRoute: g,
      hasRoute: y,
      getRoutes: h,
      resolve: S,
      options: e,
      push: T,
      replace: w,
      go: ee,
      back: () => ee(-1),
      forward: () => ee(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: r.add,
      onError: Y.add,
      isReady: q,
      install(R) {
        const oe = this
        R.component('RouterLink', _P),
          R.component('RouterView', AP),
          (R.config.globalProperties.$router = oe),
          Object.defineProperty(R.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => at(s)
          }),
          Oa && !he && s.value === On && ((he = !0), T(l.location).catch((ge) => {}))
        const ne = {}
        for (const ge in On)
          Object.defineProperty(ne, ge, { get: () => s.value[ge], enumerable: !0 })
        R.provide(ju, oe), R.provide(Ug, If(ne)), R.provide(gs, s)
        const U = R.unmount
        Se.add(R),
          (R.unmount = function () {
            Se.delete(R),
              Se.size < 1 && ((u = On), D && D(), (D = null), (s.value = On), (he = !1), (te = !1)),
              U()
          })
      }
    }
  function Q(R) {
    return R.reduce((oe, ne) => oe.then(() => k(ne)), Promise.resolve())
  }
  return ue
}
function EP(e, t) {
  const n = [],
    a = [],
    l = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const r = t.matched[o]
    r && (e.matched.find((u) => Qa(u, r)) ? a.push(r) : n.push(r))
    const s = e.matched[o]
    s && (t.matched.find((u) => Qa(u, s)) || l.push(s))
  }
  return [n, a, l]
}
const BP = Jl({
    name: 'CardEducation',
    data() {
      return { cards: [] }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        var e = new XMLHttpRequest()
        e.open('GET', '/data/educationData.json', !0),
          (e.onload = () => {
            e.status >= 200 && e.status < 300
              ? (this.cards = JSON.parse(e.responseText))
              : console.error('Failed to load data:', e.statusText)
          }),
          (e.onerror = () => {
            console.error('Network error occurred')
          }),
          e.send()
      }
    }
  }),
  Gg = '/assets/diploma_3914347-TTcvK4-d.png',
  DP = ['href'],
  MP = { key: 0, class: 'card-list' },
  RP = ['href'],
  $P = { key: 0, src: Gg, alt: '', height: '20px', srcset: '' },
  OP = ['href'],
  LP = { key: 0, src: Gg, alt: '', height: '20px', srcset: '' }
function FP(e, t, n, a, l, i) {
  const o = ln('v-card-title'),
    r = ln('v-card-text'),
    s = ln('v-card'),
    u = ln('v-col'),
    c = ln('v-row')
  return (
    st(),
    Bi(c, null, {
      default: nn(() => [
        (st(!0),
        Bt(
          me,
          null,
          Cr(
            e.cards,
            (f, v) => (
              st(),
              Bi(
                u,
                { key: v, cols: '12', md: '4' },
                {
                  default: nn(() => [
                    d(
                      s,
                      { color: 'surface-variant' },
                      {
                        default: nn(() => [
                          d(
                            o,
                            { class: 'text-center' },
                            {
                              default: nn(() => [
                                Oe('a', { href: f.href, target: '_blank' }, Ot(f.title), 9, DP)
                              ]),
                              _: 2
                            },
                            1024
                          ),
                          d(
                            r,
                            null,
                            {
                              default: nn(() => [
                                Array.isArray(f.qualification)
                                  ? (st(),
                                    Bt('ul', MP, [
                                      (st(!0),
                                      Bt(
                                        me,
                                        null,
                                        Cr(
                                          f.qualification,
                                          (m, g) => (
                                            st(),
                                            Bt('li', { key: g }, [
                                              qt(
                                                Ot(m) +
                                                  ' - ' +
                                                  Ot(
                                                    Array.isArray(f.years) ? f.years[g] : f.years
                                                  ) +
                                                  ' ',
                                                1
                                              ),
                                              Oe(
                                                'a',
                                                {
                                                  href: Array.isArray(f.serthref)
                                                    ? f.serthref[g]
                                                    : f.serthref,
                                                  target: '_blank',
                                                  rel: 'noopener noreferrer'
                                                },
                                                [
                                                  f.serthref !== ''
                                                    ? (st(), Bt('img', $P))
                                                    : Qo('', !0)
                                                ],
                                                8,
                                                RP
                                              )
                                            ])
                                          )
                                        ),
                                        128
                                      ))
                                    ]))
                                  : (st(),
                                    Bt(
                                      me,
                                      { key: 1 },
                                      [
                                        f.qualification
                                          ? (st(),
                                            Bi(
                                              r,
                                              { key: 0, rel: 'noopener noreferrer' },
                                              {
                                                default: nn(() => [
                                                  qt(
                                                    Ot(f.qualification) + ' - ' + Ot(f.years) + ' ',
                                                    1
                                                  ),
                                                  Oe(
                                                    'a',
                                                    {
                                                      href: Array.isArray(f.serthref)
                                                        ? f.serthref[v]
                                                        : f.serthref,
                                                      target: '_blank',
                                                      rel: 'noopener noreferrer'
                                                    },
                                                    [
                                                      f.serthref !== ''
                                                        ? (st(), Bt('img', LP))
                                                        : Qo('', !0)
                                                    ],
                                                    8,
                                                    OP
                                                  )
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            ))
                                          : Qo('', !0)
                                      ],
                                      64
                                    ))
                              ]),
                              _: 2
                            },
                            1024
                          )
                        ]),
                        _: 2
                      },
                      1024
                    )
                  ]),
                  _: 2
                },
                1024
              )
            )
          ),
          128
        ))
      ]),
      _: 1
    })
  )
}
const NP = cl(BP, [
    ['render', FP],
    ['__scopeId', 'data-v-7ccf7fc2']
  ]),
  HP = [
    {
      href: 'https://en.gikit.ru/',
      qualification: 'Instrument Making Engineering',
      serthref: '',
      src: '/public/spbgikit_en_logo_2022.png',
      title: 'SPUFT Russia',
      years: '2005'
    },
    {
      href: 'https://gb.ru/',
      qualification: 'Software testing',
      serthref: '',
      src: '/public/geekbrainst.svg',
      title: 'Geekbrains',
      years: '2019'
    },
    {
      href: 'https://qa.guru/',
      qualification: 'QA Automation Engineer',
      serthref: '',
      src: '/public/qaguru.png',
      title: 'QA.GURU',
      years: '2022'
    },
    {
      href: 'https://www.itgid.info/',
      qualification: ['JavaScript', 'Node.JS', 'React.JS'],
      serthref: [
        'https://itgid.info/ru/certificate/view?Certificate[uid]=6vn1n39qwky1',
        'https://itgid.info/ru/certificate/view?Certificate[uid]=tjp7reqwd1ej',
        'https://itgid.info/ru/certificate/view?Certificate[uid]=1a4k7azy5ts3'
      ],
      src: '/public/itgid.png',
      title: 'ITGID',
      years: ['2021', '2023', '2024']
    },
    {
      href: 'https://stepik.org/',
      qualification: 'SQL Trainer',
      serthref: 'https://stepik.org/cert/1927665?lang=en',
      src: '/public/stepik.svg',
      title: 'Stepik',
      years: '2023'
    }
  ],
  zP = {
    name: 'EducationContent',
    components: { CardEducation: NP },
    data() {
      return { educationData: HP }
    }
  },
  jP = { class: 'education' },
  WP = Oe('h2', null, 'Education', -1)
function UP(e, t, n, a, l, i) {
  const o = ln('CardEducation')
  return st(), Bt('section', jP, [WP, d(o)])
}
const GP = cl(zP, [['render', UP]]),
  YP = {
    name: 'EmploymentContent',
    data() {
      return {
        jobs: {
          href: 'https://www.yandex.ru/',
          qualification: 'Manual QA',
          title: 'Yandex',
          years: '2019-2022'
        }
      }
    }
  },
  Yg = (e) => (Es('data-v-92a356fe'), (e = e()), Bs(), e),
  KP = { class: 'employment' },
  qP = Yg(() => Oe('h2', null, 'Employment', -1)),
  XP = { class: 'employment-entry' },
  ZP = ['href'],
  QP = Yg(() =>
    Oe(
      'ul',
      null,
      [
        Oe(
          'li',
          null,
          'Manual testing of web/desktop/mobile applications according to documentation.'
        ),
        Oe('li', null, 'Backend testing using Fiddler/Charles/DevTools tools.'),
        Oe('li', null, 'Creating bug reports in the bug tracking system.'),
        Oe(
          'li',
          null,
          ' Checking/reproducing reported tickets by assessors-testers on different environments. '
        ),
        Oe('li', null, 'Working with emulators like VirtualOS, Mobile farm, Android Studio.'),
        Oe('li', null, 'Working with tools like ADB, PowerShell, Linux terminal.')
      ],
      -1
    )
  )
function JP(e, t, n, a, l, i) {
  return (
    st(),
    Bt('section', KP, [
      qP,
      Oe('div', XP, [
        Oe('h3', null, [
          Oe(
            'a',
            { href: l.jobs.href, target: '_blank', rel: 'noopener noreferrer' },
            Ot(l.jobs.title),
            9,
            ZP
          )
        ]),
        Oe('h4', null, Ot(l.jobs.qualification), 1),
        Oe('p', null, Ot(l.jobs.years), 1),
        QP
      ])
    ])
  )
}
const eI = cl(YP, [
    ['render', JP],
    ['__scopeId', 'data-v-92a356fe']
  ]),
  tI = { name: 'MainContent', components: { Education: GP, Employment: eI } },
  Kg = (e) => (Es('data-v-38ab7c56'), (e = e()), Bs(), e),
  nI = { class: 'resume-main' },
  aI = Kg(() => Oe('header', { class: 'resume-header' }, [Oe('h1', null, 'Chebotar Tatiana')], -1)),
  lI = Kg(() =>
    Oe(
      'section',
      { class: 'profile' },
      [
        Oe(
          'p',
          null,
          " Hi there! I'm Tatiana, a beginner in automated testing, but I have a passion for frontend development and other technical stuff. I'm confident that my knowledge will help me dive into the world of software testing successfully. "
        )
      ],
      -1
    )
  )
function iI(e, t, n, a, l, i) {
  const o = ln('Employment'),
    r = ln('Education')
  return st(), Bt('main', nI, [aI, lI, d(o), d(r)])
}
const oI = cl(tI, [
    ['render', iI],
    ['__scopeId', 'data-v-38ab7c56']
  ]),
  qg = TP({
    history: iP('/'),
    routes: [
      { path: '/', name: 'MainContent', component: oI },
      {
        path: '/qaiunokian',
        name: 'QaPageIUNokian',
        component: () =>
          vr(() => import('./QaPageIUNokian-CEWSUfmW.js'), __vite__mapDeps([0, 1, 2]))
      },
      {
        path: '/qaapinokian',
        name: 'QaPageAPINokian',
        component: () =>
          vr(() => import('./QaPageAPINokian-SpaTW-lR.js'), __vite__mapDeps([3, 1, 4, 5]))
      },
      {
        path: '/qamobilewiki',
        name: 'QaMobileWiki',
        component: () =>
          vr(() => import('./QaPageMobileWiki-DNtXJIPF.js'), __vite__mapDeps([6, 1, 4, 7]))
      }
    ]
  })
qg.beforeEach((e, t, n) => {
  window.scrollTo(0, 0), n()
})
const Uo = w0(VV),
  rI = rm({ components: Z_, directives: uV })
Uo.use(P0())
Uo.use(qg)
Uo.use(rI)
Uo.mount('#app')
export { cl as _, Db as a, mV as b, Bt as c, st as o }
