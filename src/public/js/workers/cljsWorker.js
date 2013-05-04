function d(a) {
  throw a;
}
var g = void 0, j = !0, l = null, m = !1;
function ba() {
  return function(a) {
    return a
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var r, ca = this;
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return a !== g
}
function da(a) {
  return"string" == typeof a
}
var ea = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), fa = 0;
function ga(a, b) {
  var c = a.split("."), e = ca;
  !(c[0] in e) && e.execScript && e.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && t(b) ? e[f] = b : e = e[f] ? e[f] : e[f] = {}
  }
}
;function ha(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var ia = Array.prototype;
function ja(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ka(a, b) {
  var c = Array.prototype.slice.call(arguments), e = c.shift();
  "undefined" == typeof e && d(Error("[goog.string.format] Template required"));
  return e.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, e, k, q, x, y, F) {
    if("%" == x) {
      return"%"
    }
    var I = c.shift();
    "undefined" == typeof I && d(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = I;
    return ka.na[x].apply(l, arguments)
  })
}
ka.na = {};
ka.na.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ka.na.f = function(a, b, c, e, f) {
  e = a.toString();
  isNaN(f) || "" == f || (e = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (e = h + e);
  if(isNaN(c) || e.length >= c) {
    return e
  }
  e = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - e.length - h.length;
  return e = 0 <= b.indexOf("-", 0) ? h + e + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + e
};
ka.na.d = function(a, b, c, e, f, h, i, k) {
  return ka.na.f(parseInt(a, 10), b, c, e, 0, h, i, k)
};
ka.na.i = ka.na.d;
ka.na.u = ka.na.d;
function la(a, b) {
  a != l && this.append.apply(this, arguments)
}
la.prototype.Ja = "";
la.prototype.append = function(a, b, c) {
  this.Ja += a;
  if(b != l) {
    for(var e = 1;e < arguments.length;e++) {
      this.Ja += arguments[e]
    }
  }
  return this
};
la.prototype.toString = n("Ja");
var ma;
function u(a) {
  return a != l && a !== m
}
function oa(a) {
  return u(a) ? m : j
}
function v(a, b) {
  return a[s(b == l ? l : b)] ? j : a._ ? j : m
}
function w(a, b) {
  return Error(["No protocol method ", a, " defined for type ", s(b), ": ", b].join(""))
}
function pa(a) {
  return Array.prototype.slice.call(arguments)
}
var qa, ra = l, ra = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return ra.b(b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
ra.b = function(a) {
  return Array(a)
};
ra.a = function(a, b) {
  return ra.b(b)
};
qa = ra;
var z = g, ta = g, ua = {};
function va(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  var c = va[s(a == l ? l : a)];
  c ? b = c : (c = va._) ? b = c : d(w("ICounted.-count", a));
  return b.call(l, a)
}
function wa(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = wa[s(a == l ? l : a)];
  c ? b = c : (c = wa._) ? b = c : d(w("IEmptyableCollection.-empty", a));
  return b.call(l, a)
}
var xa = {};
function ya(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var e = ya[s(a == l ? l : a)];
  e ? c = e : (e = ya._) ? c = e : d(w("ICollection.-conj", a));
  return c.call(l, a, b)
}
var za = {}, A, Aa = l;
function Ba(a, b) {
  if(a ? a.W : a) {
    return a.W(a, b)
  }
  var c;
  var e = A[s(a == l ? l : a)];
  e ? c = e : (e = A._) ? c = e : d(w("IIndexed.-nth", a));
  return c.call(l, a, b)
}
function Ca(a, b, c) {
  if(a ? a.R : a) {
    return a.R(a, b, c)
  }
  var e;
  var f = A[s(a == l ? l : a)];
  f ? e = f : (f = A._) ? e = f : d(w("IIndexed.-nth", a));
  return e.call(l, a, b, c)
}
Aa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ba.call(this, a, b);
    case 3:
      return Ca.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Aa.a = Ba;
Aa.c = Ca;
A = Aa;
var Da = {}, Ea = {};
function Fa(a) {
  if(a ? a.X : a) {
    return a.X(a)
  }
  var b;
  var c = Fa[s(a == l ? l : a)];
  c ? b = c : (c = Fa._) ? b = c : d(w("ISeq.-first", a));
  return b.call(l, a)
}
function Ga(a) {
  if(a ? a.V : a) {
    return a.V(a)
  }
  var b;
  var c = Ga[s(a == l ? l : a)];
  c ? b = c : (c = Ga._) ? b = c : d(w("ISeq.-rest", a));
  return b.call(l, a)
}
var Ia = {};
function Ja(a) {
  if(a ? a.ra : a) {
    return a.ra(a)
  }
  var b;
  var c = Ja[s(a == l ? l : a)];
  c ? b = c : (c = Ja._) ? b = c : d(w("INext.-next", a));
  return b.call(l, a)
}
var B, Ka = l;
function La(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var e = B[s(a == l ? l : a)];
  e ? c = e : (e = B._) ? c = e : d(w("ILookup.-lookup", a));
  return c.call(l, a, b)
}
function Ma(a, b, c) {
  if(a ? a.w : a) {
    return a.w(a, b, c)
  }
  var e;
  var f = B[s(a == l ? l : a)];
  f ? e = f : (f = B._) ? e = f : d(w("ILookup.-lookup", a));
  return e.call(l, a, b, c)
}
Ka = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return La.call(this, a, b);
    case 3:
      return Ma.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ka.a = La;
Ka.c = Ma;
B = Ka;
function Na(a, b) {
  if(a ? a.Ka : a) {
    return a.Ka(a, b)
  }
  var c;
  var e = Na[s(a == l ? l : a)];
  e ? c = e : (e = Na._) ? c = e : d(w("IAssociative.-contains-key?", a));
  return c.call(l, a, b)
}
function Oa(a, b, c) {
  if(a ? a.Z : a) {
    return a.Z(a, b, c)
  }
  var e;
  var f = Oa[s(a == l ? l : a)];
  f ? e = f : (f = Oa._) ? e = f : d(w("IAssociative.-assoc", a));
  return e.call(l, a, b, c)
}
var Pa = {};
function Qa(a, b) {
  if(a ? a.La : a) {
    return a.La(a, b)
  }
  var c;
  var e = Qa[s(a == l ? l : a)];
  e ? c = e : (e = Qa._) ? c = e : d(w("IMap.-dissoc", a));
  return c.call(l, a, b)
}
var Sa = {};
function Ta(a) {
  if(a ? a.Wa : a) {
    return a.Wa(a)
  }
  var b;
  var c = Ta[s(a == l ? l : a)];
  c ? b = c : (c = Ta._) ? b = c : d(w("IMapEntry.-key", a));
  return b.call(l, a)
}
function Ua(a) {
  if(a ? a.Xa : a) {
    return a.Xa(a)
  }
  var b;
  var c = Ua[s(a == l ? l : a)];
  c ? b = c : (c = Ua._) ? b = c : d(w("IMapEntry.-val", a));
  return b.call(l, a)
}
var Va = {};
function Wa(a, b) {
  if(a ? a.fb : a) {
    return a.fb(a, b)
  }
  var c;
  var e = Wa[s(a == l ? l : a)];
  e ? c = e : (e = Wa._) ? c = e : d(w("ISet.-disjoin", a));
  return c.call(l, a, b)
}
function Xa(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  var c = Xa[s(a == l ? l : a)];
  c ? b = c : (c = Xa._) ? b = c : d(w("IStack.-peek", a));
  return b.call(l, a)
}
var Ya = {};
function Za(a) {
  if(a ? a.cb : a) {
    return a.cb(a)
  }
  var b;
  var c = Za[s(a == l ? l : a)];
  c ? b = c : (c = Za._) ? b = c : d(w("IDeref.-deref", a));
  return b.call(l, a)
}
var $a = {};
function ab(a) {
  if(a ? a.K : a) {
    return a.K(a)
  }
  var b;
  var c = ab[s(a == l ? l : a)];
  c ? b = c : (c = ab._) ? b = c : d(w("IMeta.-meta", a));
  return b.call(l, a)
}
function bb(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  var e = bb[s(a == l ? l : a)];
  e ? c = e : (e = bb._) ? c = e : d(w("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var cb = {}, db, eb = l;
function fb(a, b) {
  if(a ? a.va : a) {
    return a.va(a, b)
  }
  var c;
  var e = db[s(a == l ? l : a)];
  e ? c = e : (e = db._) ? c = e : d(w("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function gb(a, b, c) {
  if(a ? a.wa : a) {
    return a.wa(a, b, c)
  }
  var e;
  var f = db[s(a == l ? l : a)];
  f ? e = f : (f = db._) ? e = f : d(w("IReduce.-reduce", a));
  return e.call(l, a, b, c)
}
eb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return fb.call(this, a, b);
    case 3:
      return gb.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
eb.a = fb;
eb.c = gb;
db = eb;
function hb(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var e = hb[s(a == l ? l : a)];
  e ? c = e : (e = hb._) ? c = e : d(w("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function ib(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = ib[s(a == l ? l : a)];
  c ? b = c : (c = ib._) ? b = c : d(w("IHash.-hash", a));
  return b.call(l, a)
}
function jb(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  var c = jb[s(a == l ? l : a)];
  c ? b = c : (c = jb._) ? b = c : d(w("ISeqable.-seq", a));
  return b.call(l, a)
}
var kb = {}, lb = {};
function mb(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var b;
  var c = mb[s(a == l ? l : a)];
  c ? b = c : (c = mb._) ? b = c : d(w("IReversible.-rseq", a));
  return b.call(l, a)
}
function nb(a, b) {
  if(a ? a.ib : a) {
    return a.ib(a, b)
  }
  var c;
  var e = nb[s(a == l ? l : a)];
  e ? c = e : (e = nb._) ? c = e : d(w("ISorted.-sorted-seq", a));
  return c.call(l, a, b)
}
function ob(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var e;
  var f = ob[s(a == l ? l : a)];
  f ? e = f : (f = ob._) ? e = f : d(w("ISorted.-sorted-seq-from", a));
  return e.call(l, a, b, c)
}
function pb(a, b) {
  if(a ? a.hb : a) {
    return a.hb(a, b)
  }
  var c;
  var e = pb[s(a == l ? l : a)];
  e ? c = e : (e = pb._) ? c = e : d(w("ISorted.-entry-key", a));
  return c.call(l, a, b)
}
function qb(a) {
  if(a ? a.gb : a) {
    return a.gb(a)
  }
  var b;
  var c = qb[s(a == l ? l : a)];
  c ? b = c : (c = qb._) ? b = c : d(w("ISorted.-comparator", a));
  return b.call(l, a)
}
var rb = {};
function sb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var e = sb[s(a == l ? l : a)];
  e ? c = e : (e = sb._) ? c = e : d(w("IPrintable.-pr-seq", a));
  return c.call(l, a, b)
}
function C(a, b) {
  if(a ? a.Nb : a) {
    return a.Nb(0, b)
  }
  var c;
  var e = C[s(a == l ? l : a)];
  e ? c = e : (e = C._) ? c = e : d(w("IWriter.-write", a));
  return c.call(l, a, b)
}
function tb(a) {
  if(a ? a.Vb : a) {
    return l
  }
  var b;
  var c = tb[s(a == l ? l : a)];
  c ? b = c : (c = tb._) ? b = c : d(w("IWriter.-flush", a));
  return b.call(l, a)
}
var ub = {};
function vb(a, b, c) {
  if(a ? a.F : a) {
    return a.F(a, b, c)
  }
  var e;
  var f = vb[s(a == l ? l : a)];
  f ? e = f : (f = vb._) ? e = f : d(w("IPrintWithWriter.-pr-writer", a));
  return e.call(l, a, b, c)
}
function wb(a, b, c) {
  if(a ? a.Mb : a) {
    return a.Mb(a, b, c)
  }
  var e;
  var f = wb[s(a == l ? l : a)];
  f ? e = f : (f = wb._) ? e = f : d(w("IWatchable.-notify-watches", a));
  return e.call(l, a, b, c)
}
var xb = {};
function yb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = yb[s(a == l ? l : a)];
  c ? b = c : (c = yb._) ? b = c : d(w("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function zb(a, b) {
  if(a ? a.Da : a) {
    return a.Da(a, b)
  }
  var c;
  var e = zb[s(a == l ? l : a)];
  e ? c = e : (e = zb._) ? c = e : d(w("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function Ab(a) {
  if(a ? a.Na : a) {
    return a.Na(a)
  }
  var b;
  var c = Ab[s(a == l ? l : a)];
  c ? b = c : (c = Ab._) ? b = c : d(w("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function Bb(a, b, c) {
  if(a ? a.Ca : a) {
    return a.Ca(a, b, c)
  }
  var e;
  var f = Bb[s(a == l ? l : a)];
  f ? e = f : (f = Bb._) ? e = f : d(w("ITransientAssociative.-assoc!", a));
  return e.call(l, a, b, c)
}
var Cb = {};
function Db(a, b) {
  if(a ? a.Gb : a) {
    return a.Gb(a, b)
  }
  var c;
  var e = Db[s(a == l ? l : a)];
  e ? c = e : (e = Db._) ? c = e : d(w("IComparable.-compare", a));
  return c.call(l, a, b)
}
function Eb(a) {
  if(a ? a.Eb : a) {
    return a.Eb()
  }
  var b;
  var c = Eb[s(a == l ? l : a)];
  c ? b = c : (c = Eb._) ? b = c : d(w("IChunk.-drop-first", a));
  return b.call(l, a)
}
var Gb = {};
function Hb(a) {
  if(a ? a.bb : a) {
    return a.bb(a)
  }
  var b;
  var c = Hb[s(a == l ? l : a)];
  c ? b = c : (c = Hb._) ? b = c : d(w("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function Ib(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var b;
  var c = Ib[s(a == l ? l : a)];
  c ? b = c : (c = Ib._) ? b = c : d(w("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
function D(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    a ? (b = a.k & 32, b = u(b ? b : a.bc) ? j : a.k ? m : v(Da, a)) : b = v(Da, a);
    a = u(b) ? a : jb(a)
  }
  return a
}
function E(a) {
  if(a == l) {
    return l
  }
  var b;
  a ? (b = a.k & 64, b = u(b ? b : a.eb) ? j : a.k ? m : v(Ea, a)) : b = v(Ea, a);
  if(u(b)) {
    return Fa(a)
  }
  a = D(a);
  return a == l ? l : Fa(a)
}
function G(a) {
  if(a != l) {
    var b;
    a ? (b = a.k & 64, b = u(b ? b : a.eb) ? j : a.k ? m : v(Ea, a)) : b = v(Ea, a);
    if(u(b)) {
      return Ga(a)
    }
    a = D(a);
    return a != l ? Ga(a) : H
  }
  return H
}
function J(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    a ? (b = a.k & 128, b = u(b ? b : a.hc) ? j : a.k ? m : v(Ia, a)) : b = v(Ia, a);
    a = u(b) ? Ja(a) : D(G(a))
  }
  return a
}
var Jb, Kb = l;
function Lb(a, b) {
  var c = a === b;
  return c ? c : hb(a, b)
}
function Mb(a, b, c) {
  for(;;) {
    if(u(Kb.a(a, b))) {
      if(J(c)) {
        a = b, b = E(c), c = J(c)
      }else {
        return Kb.a(b, E(c))
      }
    }else {
      return m
    }
  }
}
function Nb(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Mb.call(this, a, b, e)
}
Nb.n = 2;
Nb.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Mb(b, c, a)
};
Nb.e = Mb;
Kb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return Lb.call(this, a, b);
    default:
      return Nb.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Kb.n = 2;
Kb.j = Nb.j;
Kb.b = p(j);
Kb.a = Lb;
Kb.e = Nb.e;
Jb = Kb;
function L(a, b) {
  return b instanceof a
}
var M = g, N = g, Ob = g;
ib["null"] = p(0);
var Pb = l, Pb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return l;
    case 3:
      return c
  }
  d(Error("Invalid arity: " + arguments.length))
};
B["null"] = Pb;
Oa["null"] = function(a, b, c) {
  return M.a ? M.a(b, c) : M.call(l, b, c)
};
Ia["null"] = j;
Ja["null"] = p(l);
ub["null"] = j;
vb["null"] = function(a, b) {
  return C(b, "nil")
};
xa["null"] = j;
ya["null"] = function(a, b) {
  return N.b ? N.b(b) : N.call(l, b)
};
cb["null"] = j;
var Qb = l, Qb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.t ? b.t() : b.call(l);
    case 3:
      return c
  }
  d(Error("Invalid arity: " + arguments.length))
};
db["null"] = Qb;
rb["null"] = j;
sb["null"] = function() {
  return N.b ? N.b("nil") : N.call(l, "nil")
};
Va["null"] = j;
Wa["null"] = p(l);
ua["null"] = j;
va["null"] = p(0);
Xa["null"] = p(l);
Ea["null"] = j;
Fa["null"] = p(l);
Ga["null"] = function() {
  return N.t ? N.t() : N.call(l)
};
hb["null"] = function(a, b) {
  return b == l
};
bb["null"] = p(l);
$a["null"] = j;
ab["null"] = p(l);
za["null"] = j;
var Rb = l, Rb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return l;
    case 3:
      return c
  }
  d(Error("Invalid arity: " + arguments.length))
};
A["null"] = Rb;
wa["null"] = p(l);
Pa["null"] = j;
Qa["null"] = p(l);
Date.prototype.B = function(a, b) {
  var c = L(Date, b);
  return c ? a.toString() === b.toString() : c
};
ib.number = function(a) {
  return Math.floor(a) % 2147483647
};
hb.number = function(a, b) {
  return a === b
};
ib["boolean"] = function(a) {
  return a === j ? 1 : 0
};
var Sb = g;
bb["function"] = function(a, b) {
  return Sb.a ? Sb.a(function() {
    if(g === ma) {
      ma = {};
      ma = function(a, b, c) {
        this.l = a;
        this.xa = b;
        this.yb = c;
        this.r = 0;
        this.k = 393217
      };
      ma.$ = j;
      ma.ca = function() {
        return N.b ? N.b("cljs.core/t4716") : N.call(l, "cljs.core/t4716")
      };
      ma.da = function(a, b) {
        return C(b, "cljs.core/t4716")
      };
      var c = function(a, b) {
        return z.a ? z.a(a.xa, b) : z.call(l, a.xa, b)
      }, e = function(a, b) {
        var a = this, e = l;
        t(b) && (e = K(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, e)
      };
      e.n = 1;
      e.j = function(a) {
        var b = E(a), a = G(a);
        return c(b, a)
      };
      e.e = c;
      ma.prototype.call = e;
      ma.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      ma.prototype.K = n("yb");
      ma.prototype.M = function(a, b) {
        return new ma(this.l, this.xa, b)
      }
    }
    return new ma(b, a, l)
  }(), b) : Sb.call(l, function() {
    if(g === ma) {
      ma = function(a, b, c) {
        this.l = a;
        this.xa = b;
        this.yb = c;
        this.r = 0;
        this.k = 393217
      };
      ma.$ = j;
      ma.ca = function() {
        return N.b ? N.b("cljs.core/t4716") : N.call(l, "cljs.core/t4716")
      };
      ma.da = function(a, b) {
        return C(b, "cljs.core/t4716")
      };
      var c = function(a, b) {
        return z.a ? z.a(a.xa, b) : z.call(l, a.xa, b)
      }, e = function(a, b) {
        var a = this, e = l;
        t(b) && (e = K(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, e)
      };
      e.n = 1;
      e.j = function(a) {
        var b = E(a), a = G(a);
        return c(b, a)
      };
      e.e = c;
      ma.prototype.call = e;
      ma.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      ma.prototype.K = n("yb");
      ma.prototype.M = function(a, b) {
        return new ma(this.l, this.xa, b)
      }
    }
    return new ma(b, a, l)
  }(), b)
};
$a["function"] = j;
ab["function"] = p(l);
ib._ = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
var O = g;
function Tb(a) {
  this.m = a;
  this.r = 0;
  this.k = 32768
}
Tb.prototype.cb = n("m");
var Ub, Vb = l;
function Wb(a, b) {
  var c = va(a);
  if(0 === c) {
    return b.t ? b.t() : b.call(l)
  }
  for(var e = A.a(a, 0), f = 1;;) {
    if(f < c) {
      e = b.a ? b.a(e, A.a(a, f)) : b.call(l, e, A.a(a, f));
      if(L(Tb, e)) {
        return O.b ? O.b(e) : O.call(l, e)
      }
      f += 1
    }else {
      return e
    }
  }
}
function Xb(a, b, c) {
  for(var e = va(a), f = 0;;) {
    if(f < e) {
      c = b.a ? b.a(c, A.a(a, f)) : b.call(l, c, A.a(a, f));
      if(L(Tb, c)) {
        return O.b ? O.b(c) : O.call(l, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Yb(a, b, c, e) {
  for(var f = va(a);;) {
    if(e < f) {
      c = b.a ? b.a(c, A.a(a, e)) : b.call(l, c, A.a(a, e));
      if(L(Tb, c)) {
        return O.b ? O.b(c) : O.call(l, c)
      }
      e += 1
    }else {
      return c
    }
  }
}
Vb = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return Wb.call(this, a, b);
    case 3:
      return Xb.call(this, a, b, c);
    case 4:
      return Yb.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Vb.a = Wb;
Vb.c = Xb;
Vb.p = Yb;
Ub = Vb;
var Zb, $b = l;
function ac(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.t ? b.t() : b.call(l)
  }
  for(var e = a[0], f = 1;;) {
    if(f < c) {
      e = b.a ? b.a(e, a[f]) : b.call(l, e, a[f]);
      if(L(Tb, e)) {
        return O.b ? O.b(e) : O.call(l, e)
      }
      f += 1
    }else {
      return e
    }
  }
}
function bc(a, b, c) {
  for(var e = a.length, f = 0;;) {
    if(f < e) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]);
      if(L(Tb, c)) {
        return O.b ? O.b(c) : O.call(l, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function cc(a, b, c, e) {
  for(var f = a.length;;) {
    if(e < f) {
      c = b.a ? b.a(c, a[e]) : b.call(l, c, a[e]);
      if(L(Tb, c)) {
        return O.b ? O.b(c) : O.call(l, c)
      }
      e += 1
    }else {
      return c
    }
  }
}
$b = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return ac.call(this, a, b);
    case 3:
      return bc.call(this, a, b, c);
    case 4:
      return cc.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
$b.a = ac;
$b.c = bc;
$b.p = cc;
Zb = $b;
var dc = g, P = g, Q = g, ec = g;
function fc(a) {
  if(a) {
    var b = a.k & 2, a = u(b ? b : a.ec) ? j : a.k ? m : v(ua, a)
  }else {
    a = v(ua, a)
  }
  return a
}
function gc(a) {
  if(a) {
    var b = a.k & 16, a = u(b ? b : a.Hb) ? j : a.k ? m : v(za, a)
  }else {
    a = v(za, a)
  }
  return a
}
function hc(a, b) {
  this.Q = a;
  this.q = b;
  this.r = 0;
  this.k = 166199550
}
r = hc.prototype;
r.C = function(a) {
  return dc.b ? dc.b(a) : dc.call(l, a)
};
r.ra = function() {
  return this.q + 1 < this.Q.length ? new hc(this.Q, this.q + 1) : l
};
r.I = function(a, b) {
  return P.a ? P.a(b, a) : P.call(l, b, a)
};
r.Ma = function(a) {
  var b = a.A(a);
  return 0 < b ? new ec(a, b - 1, l) : H
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.va = function(a, b) {
  return fc(this.Q) ? Ub.p(this.Q, b, this.Q[this.q], this.q + 1) : Ub.p(a, b, this.Q[this.q], 0)
};
r.wa = function(a, b, c) {
  return fc(this.Q) ? Ub.p(this.Q, b, c, this.q) : Ub.p(a, b, c, 0)
};
r.H = ba();
r.A = function() {
  return this.Q.length - this.q
};
r.X = function() {
  return this.Q[this.q]
};
r.V = function() {
  return this.q + 1 < this.Q.length ? new hc(this.Q, this.q + 1) : N.t ? N.t() : N.call(l)
};
r.B = function(a, b) {
  return Ob.a ? Ob.a(a, b) : Ob.call(l, a, b)
};
r.W = function(a, b) {
  var c = b + this.q;
  return c < this.Q.length ? this.Q[c] : l
};
r.R = function(a, b, c) {
  a = b + this.q;
  return a < this.Q.length ? this.Q[a] : c
};
r.J = function() {
  return H
};
var ic, jc = l;
function kc(a) {
  return jc.a(a, 0)
}
function lc(a, b) {
  return b < a.length ? new hc(a, b) : l
}
jc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return kc.call(this, a);
    case 2:
      return lc.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
jc.b = kc;
jc.a = lc;
ic = jc;
var K, mc = l;
function nc(a) {
  return ic.a(a, 0)
}
function oc(a, b) {
  return ic.a(a, b)
}
mc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return nc.call(this, a);
    case 2:
      return oc.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
mc.b = nc;
mc.a = oc;
K = mc;
cb.array = j;
var pc = l, pc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ub.a(a, b);
    case 3:
      return Ub.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
db.array = pc;
var qc = l, qc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return A.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
B.array = qc;
za.array = j;
var rc = l, rc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : l;
    case 3:
      return b < a.length ? a[b] : c
  }
  d(Error("Invalid arity: " + arguments.length))
};
A.array = rc;
ua.array = j;
va.array = function(a) {
  return a.length
};
jb.array = function(a) {
  return K.a(a, 0)
};
Sb = g;
ec = function(a, b, c) {
  this.ab = a;
  this.q = b;
  this.l = c;
  this.r = 0;
  this.k = 31850574
};
ec.$ = j;
ec.ca = function() {
  return N.b ? N.b("cljs.core/RSeq") : N.call(l, "cljs.core/RSeq")
};
ec.da = function(a, b) {
  return C(b, "cljs.core/RSeq")
};
r = ec.prototype;
r.C = function(a) {
  return dc.b ? dc.b(a) : dc.call(l, a)
};
r.I = function(a, b) {
  return P.a ? P.a(b, a) : P.call(l, b, a)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = ba();
r.A = function() {
  return this.q + 1
};
r.X = function() {
  return A.a(this.ab, this.q)
};
r.V = function() {
  return 0 < this.q ? new ec(this.ab, this.q - 1, l) : H
};
r.B = function(a, b) {
  return Ob.a ? Ob.a(a, b) : Ob.call(l, a, b)
};
r.M = function(a, b) {
  return new ec(this.ab, this.q, b)
};
r.K = n("l");
r.J = function() {
  return Sb.a ? Sb.a(H, this.l) : Sb.call(l, H, this.l)
};
function sc(a) {
  return E(J(a))
}
function tc(a) {
  for(;;) {
    var b = J(a);
    if(b != l) {
      a = b
    }else {
      return E(a)
    }
  }
}
hb._ = function(a, b) {
  return a === b
};
var uc, vc = l;
function wc(a, b, c) {
  for(;;) {
    if(u(c)) {
      a = vc.a(a, b), b = E(c), c = J(c)
    }else {
      return vc.a(a, b)
    }
  }
}
function xc(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return wc.call(this, a, b, e)
}
xc.n = 2;
xc.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return wc(b, c, a)
};
xc.e = wc;
vc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ya(a, b);
    default:
      return xc.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
vc.n = 2;
vc.j = xc.j;
vc.a = function(a, b) {
  return ya(a, b)
};
vc.e = xc.e;
uc = vc;
function R(a) {
  if(fc(a)) {
    a = va(a)
  }else {
    a: {
      for(var a = D(a), b = 0;;) {
        if(fc(a)) {
          a = b + va(a);
          break a
        }
        a = J(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var yc, zc = l;
function Ac(a, b) {
  for(;;) {
    a == l && d(Error("Index out of bounds"));
    if(0 === b) {
      if(D(a)) {
        return E(a)
      }
      d(Error("Index out of bounds"))
    }
    if(gc(a)) {
      return A.a(a, b)
    }
    if(D(a)) {
      var c = J(a), e = b - 1, a = c, b = e
    }else {
      d(Error("Index out of bounds"))
    }
  }
}
function Bc(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return D(a) ? E(a) : c
    }
    if(gc(a)) {
      return A.c(a, b, c)
    }
    if(D(a)) {
      a = J(a), b -= 1
    }else {
      return c
    }
  }
}
zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ac.call(this, a, b);
    case 3:
      return Bc.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
zc.a = Ac;
zc.c = Bc;
yc = zc;
var S, Cc = l;
function Dc(a, b) {
  var c;
  a == l ? c = l : (a ? (c = a.k & 16, c = u(c ? c : a.Hb) ? j : a.k ? m : v(za, a)) : c = v(za, a), c = u(c) ? A.a(a, Math.floor(b)) : yc.a(a, Math.floor(b)));
  return c
}
function Ec(a, b, c) {
  if(a != l) {
    var e;
    a ? (e = a.k & 16, e = u(e ? e : a.Hb) ? j : a.k ? m : v(za, a)) : e = v(za, a);
    a = u(e) ? A.c(a, Math.floor(b), c) : yc.c(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
Cc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Dc.call(this, a, b);
    case 3:
      return Ec.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Cc.a = Dc;
Cc.c = Ec;
S = Cc;
var Fc, Gc = l;
function Hc(a, b, c, e) {
  for(;;) {
    if(a = Gc.c(a, b, c), u(e)) {
      b = E(e), c = sc(e), e = J(J(e))
    }else {
      return a
    }
  }
}
function Ic(a, b, c, e) {
  var f = l;
  t(e) && (f = K(Array.prototype.slice.call(arguments, 3), 0));
  return Hc.call(this, a, b, c, f)
}
Ic.n = 3;
Ic.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), a = G(J(J(a)));
  return Hc(b, c, e, a)
};
Ic.e = Hc;
Gc = function(a, b, c, e) {
  switch(arguments.length) {
    case 3:
      return Oa(a, b, c);
    default:
      return Ic.e(a, b, c, K(arguments, 3))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Gc.n = 3;
Gc.j = Ic.j;
Gc.c = function(a, b, c) {
  return Oa(a, b, c)
};
Gc.e = Ic.e;
Fc = Gc;
var Jc, Kc = l;
function Lc(a, b, c) {
  for(;;) {
    if(a = Kc.a(a, b), u(c)) {
      b = E(c), c = J(c)
    }else {
      return a
    }
  }
}
function Mc(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Lc.call(this, a, b, e)
}
Mc.n = 2;
Mc.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Lc(b, c, a)
};
Mc.e = Lc;
Kc = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Qa(a, b);
    default:
      return Mc.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Kc.n = 2;
Kc.j = Mc.j;
Kc.b = ba();
Kc.a = function(a, b) {
  return Qa(a, b)
};
Kc.e = Mc.e;
Jc = Kc;
Sb = function(a, b) {
  return bb(a, b)
};
function Nc(a) {
  var b;
  a ? (b = a.k & 131072, b = u(b ? b : a.Ib) ? j : a.k ? m : v($a, a)) : b = v($a, a);
  return u(b) ? ab(a) : l
}
var Oc, Pc = l;
function Qc(a, b, c) {
  for(;;) {
    if(a = Pc.a(a, b), u(c)) {
      b = E(c), c = J(c)
    }else {
      return a
    }
  }
}
function Rc(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Qc.call(this, a, b, e)
}
Rc.n = 2;
Rc.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Qc(b, c, a)
};
Rc.e = Qc;
Pc = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Wa(a, b);
    default:
      return Rc.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Pc.n = 2;
Pc.j = Rc.j;
Pc.b = ba();
Pc.a = function(a, b) {
  return Wa(a, b)
};
Pc.e = Rc.e;
Oc = Pc;
var Sc = {}, Tc = 0, Uc, Vc = l;
function Wc(a) {
  return Vc.a(a, j)
}
function Xc(a, b) {
  var c;
  c = da(a);
  u(c ? b : c) ? (255 < Tc && (Sc = {}, Tc = 0), c = Sc[a], c == l && (c = ha(a), Sc[a] = c, Tc += 1)) : c = ib(a);
  return c
}
Vc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Wc.call(this, a);
    case 2:
      return Xc.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Vc.b = Wc;
Vc.a = Xc;
Uc = Vc;
function Yc(a) {
  var b = a == l;
  return b ? b : oa(D(a))
}
function Zc(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 8, a = u(b ? b : a.dc) ? j : a.k ? m : v(xa, a)
    }else {
      a = v(xa, a)
    }
  }
  return a
}
function $c(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 4096, a = u(b ? b : a.kc) ? j : a.k ? m : v(Va, a)
    }else {
      a = v(Va, a)
    }
  }
  return a
}
function ad(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 1024, a = u(b ? b : a.gc) ? j : a.k ? m : v(Pa, a)
    }else {
      a = v(Pa, a)
    }
  }
  return a
}
function bd(a) {
  if(a) {
    var b = a.k & 16384, a = u(b ? b : a.lc) ? j : a.k ? m : v(Ya, a)
  }else {
    a = v(Ya, a)
  }
  return a
}
function cd(a) {
  if(a) {
    var b = a.r & 512, a = u(b ? b : a.cc) ? j : a.r ? m : v(Gb, a)
  }else {
    a = v(Gb, a)
  }
  return a
}
function dd(a, b, c, e, f) {
  for(;0 !== f;) {
    c[e] = a[b], e += 1, f -= 1, b += 1
  }
}
var ed = {};
function T(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 64, a = u(b ? b : a.eb) ? j : a.k ? m : v(Ea, a)
    }else {
      a = v(Ea, a)
    }
  }
  return a
}
function fd(a) {
  var b = da(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = oa(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function gd(a) {
  var b = da(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function hd(a) {
  var b = da(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function id(a) {
  var b = "number" == typeof a;
  return b && (b = !isNaN(a)) ? (b = Infinity !== a) ? parseFloat(a) === parseInt(a, 10) : b : b
}
function jd(a, b) {
  return B.c(a, b, ed) === ed ? m : j
}
function kd(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if((a == l ? l : a.constructor) === (b == l ? l : b.constructor)) {
    var c;
    a ? (c = a.r & 2048, c = u(c ? c : a.Ob) ? j : a.r ? m : v(Cb, a)) : c = v(Cb, a);
    return u(c) ? Db(a, b) : ja(a, b)
  }
  d(Error("compare on non-nil objects of different types"))
}
var ld, md = l;
function nd(a, b) {
  var c = R(a), e = R(b);
  return c < e ? -1 : c > e ? 1 : md.p(a, b, c, 0)
}
function od(a, b, c, e) {
  for(;;) {
    var f = kd(S.a(a, e), S.a(b, e)), h = 0 === f;
    if(u(h ? e + 1 < c : h)) {
      e += 1
    }else {
      return f
    }
  }
}
md = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return nd.call(this, a, b);
    case 4:
      return od.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
md.a = nd;
md.p = od;
ld = md;
function pd(a) {
  return Jb.a(a, kd) ? kd : function(b, c) {
    var e = a.a ? a.a(b, c) : a.call(l, b, c);
    return"number" == typeof e ? e : u(e) ? -1 : u(a.a ? a.a(c, b) : a.call(l, c, b)) ? 1 : 0
  }
}
var qd = g, rd, sd = l;
function td(a) {
  return sd.a(kd, a)
}
function ud(a, b) {
  if(D(b)) {
    for(var c = qd.b ? qd.b(b) : qd.call(l, b), e = pd(a), f = 0;f < c.length;f++) {
      c[f] = {index:f, value:c[f]}
    }
    var h = e || ja;
    ia.sort.call(c, function(a, b) {
      return h(a.value, b.value) || a.index - b.index
    } || ja);
    for(f = 0;f < c.length;f++) {
      c[f] = c[f].value
    }
    return D(c)
  }
  return H
}
sd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return td.call(this, a);
    case 2:
      return ud.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
sd.b = td;
sd.a = ud;
rd = sd;
var vd, wd = l;
function xd(a, b) {
  return wd.c(a, kd, b)
}
function yd(a, b, c) {
  return rd.a(function(c, f) {
    return pd(b).call(l, a.b ? a.b(c) : a.call(l, c), a.b ? a.b(f) : a.call(l, f))
  }, c)
}
wd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return xd.call(this, a, b);
    case 3:
      return yd.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
wd.a = xd;
wd.c = yd;
vd = wd;
var zd, Ad = l;
function Bd(a, b) {
  var c = D(b);
  return c ? ta.c ? ta.c(a, E(c), J(c)) : ta.call(l, a, E(c), J(c)) : a.t ? a.t() : a.call(l)
}
function Cd(a, b, c) {
  for(c = D(c);;) {
    if(c) {
      b = a.a ? a.a(b, E(c)) : a.call(l, b, E(c));
      if(L(Tb, b)) {
        return O.b ? O.b(b) : O.call(l, b)
      }
      c = J(c)
    }else {
      return b
    }
  }
}
Ad = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Bd.call(this, a, b);
    case 3:
      return Cd.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ad.a = Bd;
Ad.c = Cd;
zd = Ad;
var Dd = g, Ed = l;
function Fd(a, b) {
  var c;
  b ? (c = b.k & 524288, c = u(c ? c : b.Ub) ? j : b.k ? m : v(cb, b)) : c = v(cb, b);
  return u(c) ? db.a(b, a) : zd.a(a, b)
}
function Gd(a, b, c) {
  var e;
  c ? (e = c.k & 524288, e = u(e ? e : c.Ub) ? j : c.k ? m : v(cb, c)) : e = v(cb, c);
  return u(e) ? db.c(c, a, b) : zd.c(a, b, c)
}
Ed = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Fd.call(this, a, b);
    case 3:
      return Gd.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ed.a = Fd;
Ed.c = Gd;
var ta = Ed, Hd, Id = l;
function Jd(a, b, c) {
  for(;;) {
    if(a < b) {
      if(J(c)) {
        a = b, b = E(c), c = J(c)
      }else {
        return b < E(c)
      }
    }else {
      return m
    }
  }
}
function Kd(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Jd.call(this, a, b, e)
}
Kd.n = 2;
Kd.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Jd(b, c, a)
};
Kd.e = Jd;
Id = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return a < b;
    default:
      return Kd.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Id.n = 2;
Id.j = Kd.j;
Id.b = p(j);
Id.a = function(a, b) {
  return a < b
};
Id.e = Kd.e;
Hd = Id;
var Ld, Md = l;
function Nd(a, b, c) {
  for(;;) {
    if(a <= b) {
      if(J(c)) {
        a = b, b = E(c), c = J(c)
      }else {
        return b <= E(c)
      }
    }else {
      return m
    }
  }
}
function Od(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Nd.call(this, a, b, e)
}
Od.n = 2;
Od.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Nd(b, c, a)
};
Od.e = Nd;
Md = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return a <= b;
    default:
      return Od.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Md.n = 2;
Md.j = Od.j;
Md.b = p(j);
Md.a = function(a, b) {
  return a <= b
};
Md.e = Od.e;
Ld = Md;
var Pd, Qd = l;
function Rd(a, b) {
  return a > b ? a : b
}
function Sd(a, b, c) {
  return ta.c(Qd, a > b ? a : b, c)
}
function Td(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Sd.call(this, a, b, e)
}
Td.n = 2;
Td.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Sd(b, c, a)
};
Td.e = Sd;
Qd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Rd.call(this, a, b);
    default:
      return Td.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Qd.n = 2;
Qd.j = Td.j;
Qd.b = ba();
Qd.a = Rd;
Qd.e = Td.e;
Pd = Qd;
function Vd(a, b) {
  return 0 <= (a - a % b) / b ? Math.floor.b ? Math.floor.b((a - a % b) / b) : Math.floor.call(l, (a - a % b) / b) : Math.ceil.b ? Math.ceil.b((a - a % b) / b) : Math.ceil.call(l, (a - a % b) / b)
}
function Wd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Xd, Yd = l;
function Zd(a) {
  return a == l ? "" : a.toString()
}
function $d(a, b) {
  return function(a, b) {
    for(;;) {
      if(u(b)) {
        var f = a.append(Yd.b(E(b))), h = J(b), a = f, b = h
      }else {
        return Yd.b(a)
      }
    }
  }.call(l, new la(Yd.b(a)), b)
}
function ae(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return $d.call(this, a, c)
}
ae.n = 1;
ae.j = function(a) {
  var b = E(a), a = G(a);
  return $d(b, a)
};
ae.e = $d;
Yd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Zd.call(this, a);
    default:
      return ae.e(a, K(arguments, 1))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Yd.n = 1;
Yd.j = ae.j;
Yd.t = p("");
Yd.b = Zd;
Yd.e = ae.e;
Xd = Yd;
var U, be = l;
function ce(a) {
  return hd(a) ? a.substring(2, a.length) : gd(a) ? Xd.e(":", K([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function de(a, b) {
  return function(a, b) {
    for(;;) {
      if(u(b)) {
        var f = a.append(be.b(E(b))), h = J(b), a = f, b = h
      }else {
        return Xd.b(a)
      }
    }
  }.call(l, new la(be.b(a)), b)
}
function ee(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return de.call(this, a, c)
}
ee.n = 1;
ee.j = function(a) {
  var b = E(a), a = G(a);
  return de(b, a)
};
ee.e = de;
be = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ce.call(this, a);
    default:
      return ee.e(a, K(arguments, 1))
  }
  d(Error("Invalid arity: " + arguments.length))
};
be.n = 1;
be.j = ee.j;
be.t = p("");
be.b = ce;
be.e = ee.e;
U = be;
var fe, ge = l, ge = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
ge.a = function(a, b) {
  return a.substring(b)
};
ge.c = function(a, b, c) {
  return a.substring(b, c)
};
fe = ge;
var V = g, he, ie = l;
function je(a) {
  return gd(a) ? a : hd(a) ? Xd.e("\ufdd0", K([":", fe.a(a, 2)], 0)) : Xd.e("\ufdd0", K([":", a], 0))
}
function ke(a, b) {
  return ie.b(Xd.e(a, K(["/", b], 0)))
}
ie = function(a, b) {
  switch(arguments.length) {
    case 1:
      return je.call(this, a);
    case 2:
      return ke.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
ie.b = je;
ie.a = ke;
he = ie;
var Ob = function(a, b) {
  var c;
  b ? (c = b.k & 16777216, c = u(c ? c : b.jc) || (b.k ? 0 : v(kb, b))) : c = v(kb, b);
  if(c) {
    a: {
      c = D(a);
      for(var e = D(b);;) {
        if(c == l) {
          c = e == l;
          break a
        }
        if(e != l && Jb.a(E(c), E(e))) {
          c = J(c), e = J(e)
        }else {
          c = m;
          break a
        }
      }
      c = g
    }
  }else {
    c = l
  }
  return u(c) ? j : m
}, dc = function(a) {
  return ta.c(function(a, c) {
    var e = Uc.a(c, m);
    return a ^ e + 2654435769 + (a << 6) + (a >> 2)
  }, Uc.a(E(a), m), J(a))
}, le = g, me = g;
function ne(a) {
  for(var b = 0, a = D(a);;) {
    if(a) {
      var c = E(a), b = (b + (Uc.b(le.b ? le.b(c) : le.call(l, c)) ^ Uc.b(me.b ? me.b(c) : me.call(l, c)))) % 4503599627370496, a = J(a)
    }else {
      return b
    }
  }
}
function oe(a) {
  for(var b = 0, a = D(a);;) {
    if(a) {
      var c = E(a), b = (b + Uc.b(c)) % 4503599627370496, a = J(a)
    }else {
      return b
    }
  }
}
var pe = g;
function qe(a, b, c, e, f) {
  this.l = a;
  this.Ha = b;
  this.oa = c;
  this.count = e;
  this.o = f;
  this.r = 0;
  this.k = 65413358
}
r = qe.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.ra = function() {
  return 1 === this.count ? l : this.oa
};
r.I = function(a, b) {
  return new qe(this.l, b, a, this.count + 1, l)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = ba();
r.A = n("count");
r.Ba = n("Ha");
r.X = n("Ha");
r.V = function() {
  return 1 === this.count ? H : this.oa
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new qe(b, this.Ha, this.oa, this.count, this.o)
};
r.K = n("l");
r.J = function() {
  return H
};
function re(a) {
  this.l = a;
  this.r = 0;
  this.k = 65413326
}
r = re.prototype;
r.C = p(0);
r.ra = p(l);
r.I = function(a, b) {
  return new qe(this.l, b, l, 1, l)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = p(l);
r.A = p(0);
r.Ba = p(l);
r.X = p(l);
r.V = function() {
  return H
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new re(b)
};
r.K = n("l");
r.J = ba();
var H = new re(l);
function se(a) {
  var b;
  a ? (b = a.k & 134217728, b = u(b ? b : a.ic) || (a.k ? 0 : v(lb, a))) : b = v(lb, a);
  return b ? mb(a) : ta.c(uc, H, a)
}
var te = l;
function ue(a) {
  return uc.a(H, a)
}
function ve(a, b) {
  return uc.a(te.b(b), a)
}
function we(a, b, c) {
  return uc.a(te.a(b, c), a)
}
function xe(a, b, c, e) {
  return uc.a(uc.a(uc.a(ta.c(uc, H, se(e)), c), b), a)
}
function ye(a, b, c, e) {
  var f = l;
  t(e) && (f = K(Array.prototype.slice.call(arguments, 3), 0));
  return xe.call(this, a, b, c, f)
}
ye.n = 3;
ye.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), a = G(J(J(a)));
  return xe(b, c, e, a)
};
ye.e = xe;
te = function(a, b, c, e) {
  switch(arguments.length) {
    case 0:
      return H;
    case 1:
      return ue.call(this, a);
    case 2:
      return ve.call(this, a, b);
    case 3:
      return we.call(this, a, b, c);
    default:
      return ye.e(a, b, c, K(arguments, 3))
  }
  d(Error("Invalid arity: " + arguments.length))
};
te.n = 3;
te.j = ye.j;
te.t = function() {
  return H
};
te.b = ue;
te.a = ve;
te.c = we;
te.e = ye.e;
N = te;
function ze(a, b, c, e) {
  this.l = a;
  this.Ha = b;
  this.oa = c;
  this.o = e;
  this.r = 0;
  this.k = 65405164
}
r = ze.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.ra = function() {
  return this.oa == l ? l : jb(this.oa)
};
r.I = function(a, b) {
  return new ze(l, b, a, this.o)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = ba();
r.X = n("Ha");
r.V = function() {
  return this.oa == l ? H : this.oa
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new ze(b, this.Ha, this.oa, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(H, this.l)
};
P = function(a, b) {
  var c = b == l;
  c || (b ? (c = b.k & 64, c = u(c ? c : b.eb) ? j : b.k ? m : v(Ea, b)) : c = v(Ea, b));
  return u(c) ? new ze(l, a, b, l) : new ze(l, a, D(b), l)
};
cb.string = j;
var Ae = l, Ae = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ub.a(a, b);
    case 3:
      return Ub.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
db.string = Ae;
var Be = l, Be = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return A.a(a, b);
    case 3:
      return A.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
B.string = Be;
za.string = j;
var Ce = l, Ce = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < va(a) ? a.charAt(b) : l;
    case 3:
      return b < va(a) ? a.charAt(b) : c
  }
  d(Error("Invalid arity: " + arguments.length))
};
A.string = Ce;
ua.string = j;
va.string = function(a) {
  return a.length
};
jb.string = function(a) {
  return ic.a(a, 0)
};
ib.string = function(a) {
  return ha(a)
};
function De(a) {
  this.xb = a;
  this.r = 0;
  this.k = 1
}
var Ee = l, Ee = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var e;
      e = a;
      e = this;
      if(b == l) {
        e = l
      }else {
        var f = b.ua;
        e = f == l ? B.c(b, e.xb, l) : f[e.xb]
      }
      return e;
    case 3:
      return b == l ? c : B.c(b, this.xb, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
De.prototype.call = Ee;
De.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Fe = l, Fe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return B.c(b, this.toString(), l);
    case 3:
      return B.c(b, this.toString(), c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Fe;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > R(b) ? B.c(b[0], a, l) : B.c(b[0], a, b[1])
};
function Ge(a) {
  var b = a.x;
  if(a.zb) {
    return b
  }
  a.x = b.t ? b.t() : b.call(l);
  a.zb = j;
  return a.x
}
function W(a, b, c, e) {
  this.l = a;
  this.zb = b;
  this.x = c;
  this.o = e;
  this.r = 0;
  this.k = 31850700
}
r = W.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.ra = function(a) {
  return jb(a.V(a))
};
r.I = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = function(a) {
  return D(Ge(a))
};
r.X = function(a) {
  return E(Ge(a))
};
r.V = function(a) {
  return G(Ge(a))
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new W(b, this.zb, this.x, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(H, this.l)
};
var He = g;
function Ie(a, b) {
  this.$a = a;
  this.end = b;
  this.r = 0;
  this.k = 2
}
Ie.prototype.A = n("end");
Ie.prototype.add = function(a) {
  this.$a[this.end] = a;
  return this.end += 1
};
Ie.prototype.qa = function() {
  var a = new He(this.$a, 0, this.end);
  this.$a = l;
  return a
};
He = function(a, b, c) {
  this.g = a;
  this.P = b;
  this.end = c;
  this.r = 0;
  this.k = 524306
};
He.$ = j;
He.ca = function() {
  return N.b("cljs.core/ArrayChunk")
};
He.da = function(a, b) {
  return C(b, "cljs.core/ArrayChunk")
};
r = He.prototype;
r.va = function(a, b) {
  return Zb.p(this.g, b, this.g[this.P], this.P + 1)
};
r.wa = function(a, b, c) {
  return Zb.p(this.g, b, c, this.P)
};
r.Eb = function() {
  this.P === this.end && d(Error("-drop-first of empty chunk"));
  return new He(this.g, this.P + 1, this.end)
};
r.W = function(a, b) {
  return this.g[this.P + b]
};
r.R = function(a, b, c) {
  a = 0 <= b;
  return u(a ? b < this.end - this.P : a) ? this.g[this.P + b] : c
};
r.A = function() {
  return this.end - this.P
};
var Je, Ke = l;
function Le(a) {
  return Ke.c(a, 0, a.length)
}
function Me(a, b) {
  return Ke.c(a, b, a.length)
}
function Ne(a, b, c) {
  return new He(a, b, c)
}
Ke = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Le.call(this, a);
    case 2:
      return Me.call(this, a, b);
    case 3:
      return Ne.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ke.b = Le;
Ke.a = Me;
Ke.c = Ne;
Je = Ke;
function Oe(a, b, c, e) {
  this.qa = a;
  this.ta = b;
  this.l = c;
  this.o = e;
  this.k = 31850604;
  this.r = 1536
}
r = Oe.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.I = function(a, b) {
  return P(b, a)
};
r.H = ba();
r.X = function() {
  return A.a(this.qa, 0)
};
r.V = function() {
  return 1 < va(this.qa) ? new Oe(Eb(this.qa), this.ta, this.l, l) : this.ta == l ? H : this.ta
};
r.Fb = function() {
  return this.ta == l ? l : this.ta
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new Oe(this.qa, this.ta, b, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(H, this.l)
};
r.bb = n("qa");
r.Va = function() {
  return this.ta == l ? H : this.ta
};
function Pe(a, b) {
  return 0 === va(a) ? b : new Oe(a, b, l, l)
}
qd = function(a) {
  for(var b = [];;) {
    if(D(a)) {
      b.push(E(a)), a = J(a)
    }else {
      return b
    }
  }
};
function Qe(a, b) {
  if(fc(a)) {
    return R(a)
  }
  for(var c = a, e = b, f = 0;;) {
    var h;
    h = (h = 0 < e) ? D(c) : h;
    if(u(h)) {
      c = J(c), e -= 1, f += 1
    }else {
      return f
    }
  }
}
var Se = function Re(b) {
  return b == l ? l : J(b) == l ? D(E(b)) : P(E(b), Re(J(b)))
}, Te, Ue = l;
function Ve() {
  return new W(l, m, p(l), l)
}
function We(a) {
  return new W(l, m, function() {
    return a
  }, l)
}
function Xe(a, b) {
  return new W(l, m, function() {
    var c = D(a);
    return c ? cd(c) ? Pe(Hb(c), Ue.a(Ib(c), b)) : P(E(c), Ue.a(G(c), b)) : b
  }, l)
}
function Ye(a, b, c) {
  return function f(a, b) {
    return new W(l, m, function() {
      var c = D(a);
      return c ? cd(c) ? Pe(Hb(c), f(Ib(c), b)) : P(E(c), f(G(c), b)) : u(b) ? f(E(b), J(b)) : l
    }, l)
  }(Ue.a(a, b), c)
}
function Ze(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return Ye.call(this, a, b, e)
}
Ze.n = 2;
Ze.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return Ye(b, c, a)
};
Ze.e = Ye;
Ue = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Ve.call(this);
    case 1:
      return We.call(this, a);
    case 2:
      return Xe.call(this, a, b);
    default:
      return Ze.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ue.n = 2;
Ue.j = Ze.j;
Ue.t = Ve;
Ue.b = We;
Ue.a = Xe;
Ue.e = Ze.e;
Te = Ue;
var $e, af = l;
function bf(a, b, c) {
  return P(a, P(b, c))
}
function cf(a, b, c, e) {
  return P(a, P(b, P(c, e)))
}
function df(a, b, c, e, f) {
  return P(a, P(b, P(c, P(e, Se(f)))))
}
function ef(a, b, c, e, f) {
  var h = l;
  t(f) && (h = K(Array.prototype.slice.call(arguments, 4), 0));
  return df.call(this, a, b, c, e, h)
}
ef.n = 4;
ef.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), f = E(J(J(J(a)))), a = G(J(J(J(a))));
  return df(b, c, e, f, a)
};
ef.e = df;
af = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 1:
      return D(a);
    case 2:
      return P(a, b);
    case 3:
      return bf.call(this, a, b, c);
    case 4:
      return cf.call(this, a, b, c, e);
    default:
      return ef.e(a, b, c, e, K(arguments, 4))
  }
  d(Error("Invalid arity: " + arguments.length))
};
af.n = 4;
af.j = ef.j;
af.b = function(a) {
  return D(a)
};
af.a = function(a, b) {
  return P(a, b)
};
af.c = bf;
af.p = cf;
af.e = ef.e;
$e = af;
function ff(a, b, c) {
  var e = D(c);
  if(0 === b) {
    return a.t ? a.t() : a.call(l)
  }
  var c = Fa(e), f = Ga(e);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(l, c)
  }
  var e = Fa(f), h = Ga(f);
  if(2 === b) {
    return a.a ? a.a(c, e) : a.a ? a.a(c, e) : a.call(l, c, e)
  }
  var f = Fa(h), i = Ga(h);
  if(3 === b) {
    return a.c ? a.c(c, e, f) : a.c ? a.c(c, e, f) : a.call(l, c, e, f)
  }
  var h = Fa(i), k = Ga(i);
  if(4 === b) {
    return a.p ? a.p(c, e, f, h) : a.p ? a.p(c, e, f, h) : a.call(l, c, e, f, h)
  }
  i = Fa(k);
  k = Ga(k);
  if(5 === b) {
    return a.O ? a.O(c, e, f, h, i) : a.O ? a.O(c, e, f, h, i) : a.call(l, c, e, f, h, i)
  }
  var a = Fa(k), q = Ga(k);
  if(6 === b) {
    return a.la ? a.la(c, e, f, h, i, a) : a.la ? a.la(c, e, f, h, i, a) : a.call(l, c, e, f, h, i, a)
  }
  var k = Fa(q), x = Ga(q);
  if(7 === b) {
    return a.Ea ? a.Ea(c, e, f, h, i, a, k) : a.Ea ? a.Ea(c, e, f, h, i, a, k) : a.call(l, c, e, f, h, i, a, k)
  }
  var q = Fa(x), y = Ga(x);
  if(8 === b) {
    return a.vb ? a.vb(c, e, f, h, i, a, k, q) : a.vb ? a.vb(c, e, f, h, i, a, k, q) : a.call(l, c, e, f, h, i, a, k, q)
  }
  var x = Fa(y), F = Ga(y);
  if(9 === b) {
    return a.wb ? a.wb(c, e, f, h, i, a, k, q, x) : a.wb ? a.wb(c, e, f, h, i, a, k, q, x) : a.call(l, c, e, f, h, i, a, k, q, x)
  }
  var y = Fa(F), I = Ga(F);
  if(10 === b) {
    return a.kb ? a.kb(c, e, f, h, i, a, k, q, x, y) : a.kb ? a.kb(c, e, f, h, i, a, k, q, x, y) : a.call(l, c, e, f, h, i, a, k, q, x, y)
  }
  var F = Fa(I), X = Ga(I);
  if(11 === b) {
    return a.lb ? a.lb(c, e, f, h, i, a, k, q, x, y, F) : a.lb ? a.lb(c, e, f, h, i, a, k, q, x, y, F) : a.call(l, c, e, f, h, i, a, k, q, x, y, F)
  }
  var I = Fa(X), aa = Ga(X);
  if(12 === b) {
    return a.mb ? a.mb(c, e, f, h, i, a, k, q, x, y, F, I) : a.mb ? a.mb(c, e, f, h, i, a, k, q, x, y, F, I) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I)
  }
  var X = Fa(aa), na = Ga(aa);
  if(13 === b) {
    return a.nb ? a.nb(c, e, f, h, i, a, k, q, x, y, F, I, X) : a.nb ? a.nb(c, e, f, h, i, a, k, q, x, y, F, I, X) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X)
  }
  var aa = Fa(na), sa = Ga(na);
  if(14 === b) {
    return a.ob ? a.ob(c, e, f, h, i, a, k, q, x, y, F, I, X, aa) : a.ob ? a.ob(c, e, f, h, i, a, k, q, x, y, F, I, X, aa) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa)
  }
  var na = Fa(sa), Ha = Ga(sa);
  if(15 === b) {
    return a.pb ? a.pb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na) : a.pb ? a.pb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na)
  }
  var sa = Fa(Ha), Ra = Ga(Ha);
  if(16 === b) {
    return a.qb ? a.qb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa) : a.qb ? a.qb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa)
  }
  var Ha = Fa(Ra), Fb = Ga(Ra);
  if(17 === b) {
    return a.rb ? a.rb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha) : a.rb ? a.rb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha)
  }
  var Ra = Fa(Fb), Ud = Ga(Fb);
  if(18 === b) {
    return a.sb ? a.sb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra) : a.sb ? a.sb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra)
  }
  Fb = Fa(Ud);
  Ud = Ga(Ud);
  if(19 === b) {
    return a.tb ? a.tb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra, Fb) : a.tb ? a.tb(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra, Fb) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra, Fb)
  }
  var Rf = Fa(Ud);
  Ga(Ud);
  if(20 === b) {
    return a.ub ? a.ub(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra, Fb, Rf) : a.ub ? a.ub(c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra, Fb, Rf) : a.call(l, c, e, f, h, i, a, k, q, x, y, F, I, X, aa, na, sa, Ha, Ra, Fb, Rf)
  }
  d(Error("Only up to 20 arguments supported on functions"))
}
var gf = l;
function hf(a, b) {
  var c = a.n;
  if(a.j) {
    var e = Qe(b, c + 1);
    return e <= c ? ff(a, e, b) : a.j(b)
  }
  return a.apply(a, qd(b))
}
function jf(a, b, c) {
  b = $e.a(b, c);
  c = a.n;
  if(a.j) {
    var e = Qe(b, c + 1);
    return e <= c ? ff(a, e, b) : a.j(b)
  }
  return a.apply(a, qd(b))
}
function kf(a, b, c, e) {
  b = $e.c(b, c, e);
  c = a.n;
  return a.j ? (e = Qe(b, c + 1), e <= c ? ff(a, e, b) : a.j(b)) : a.apply(a, qd(b))
}
function lf(a, b, c, e, f) {
  b = $e.p(b, c, e, f);
  c = a.n;
  return a.j ? (e = Qe(b, c + 1), e <= c ? ff(a, e, b) : a.j(b)) : a.apply(a, qd(b))
}
function mf(a, b, c, e, f, h) {
  b = P(b, P(c, P(e, P(f, Se(h)))));
  c = a.n;
  return a.j ? (e = Qe(b, c + 1), e <= c ? ff(a, e, b) : a.j(b)) : a.apply(a, qd(b))
}
function nf(a, b, c, e, f, h) {
  var i = l;
  t(h) && (i = K(Array.prototype.slice.call(arguments, 5), 0));
  return mf.call(this, a, b, c, e, f, i)
}
nf.n = 5;
nf.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), f = E(J(J(J(a)))), h = E(J(J(J(J(a))))), a = G(J(J(J(J(a)))));
  return mf(b, c, e, f, h, a)
};
nf.e = mf;
gf = function(a, b, c, e, f, h) {
  switch(arguments.length) {
    case 2:
      return hf.call(this, a, b);
    case 3:
      return jf.call(this, a, b, c);
    case 4:
      return kf.call(this, a, b, c, e);
    case 5:
      return lf.call(this, a, b, c, e, f);
    default:
      return nf.e(a, b, c, e, f, K(arguments, 5))
  }
  d(Error("Invalid arity: " + arguments.length))
};
gf.n = 5;
gf.j = nf.j;
gf.a = hf;
gf.c = jf;
gf.p = kf;
gf.O = lf;
gf.e = nf.e;
var z = gf, of, pf = l;
function qf(a, b) {
  return!Jb.a(a, b)
}
function rf(a, b, c) {
  return oa(z.p(Jb, a, b, c))
}
function sf(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return rf.call(this, a, b, e)
}
sf.n = 2;
sf.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return rf(b, c, a)
};
sf.e = rf;
pf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return m;
    case 2:
      return qf.call(this, a, b);
    default:
      return sf.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
pf.n = 2;
pf.j = sf.j;
pf.b = p(m);
pf.a = qf;
pf.e = sf.e;
of = pf;
function tf(a, b) {
  for(;;) {
    if(D(b) == l) {
      return j
    }
    if(u(a.b ? a.b(E(b)) : a.call(l, E(b)))) {
      var c = a, e = J(b), a = c, b = e
    }else {
      return m
    }
  }
}
function uf(a, b) {
  for(;;) {
    if(D(b)) {
      var c = a.b ? a.b(E(b)) : a.call(l, E(b));
      if(u(c)) {
        return c
      }
      var c = a, e = J(b), a = c, b = e
    }else {
      return l
    }
  }
}
function vf(a) {
  return a
}
var wf, xf = l;
function yf(a, b) {
  function c(a, b, c, f) {
    var x = l;
    t(f) && (x = K(Array.prototype.slice.call(arguments, 3), 0));
    return e.call(this, a, b, c, x)
  }
  function e(c, e, f, q) {
    return a.b ? a.b(z.O(b, c, e, f, q)) : a.call(l, z.O(b, c, e, f, q))
  }
  var f = l;
  c.n = 3;
  c.j = function(a) {
    var b = E(a), c = E(J(a)), f = E(J(J(a))), a = G(J(J(a)));
    return e(b, c, f, a)
  };
  c.e = e;
  f = function(e, f, k, q) {
    switch(arguments.length) {
      case 0:
        return a.b ? a.b(b.t ? b.t() : b.call(l)) : a.call(l, b.t ? b.t() : b.call(l));
      case 1:
        return a.b ? a.b(b.b ? b.b(e) : b.call(l, e)) : a.call(l, b.b ? b.b(e) : b.call(l, e));
      case 2:
        return a.b ? a.b(b.a ? b.a(e, f) : b.call(l, e, f)) : a.call(l, b.a ? b.a(e, f) : b.call(l, e, f));
      case 3:
        return a.b ? a.b(b.c ? b.c(e, f, k) : b.call(l, e, f, k)) : a.call(l, b.c ? b.c(e, f, k) : b.call(l, e, f, k));
      default:
        return c.e(e, f, k, K(arguments, 3))
    }
    d(Error("Invalid arity: " + arguments.length))
  };
  f.n = 3;
  f.j = c.j;
  return f
}
function zf(a, b, c) {
  function e(a, b, c, e) {
    var h = l;
    t(e) && (h = K(Array.prototype.slice.call(arguments, 3), 0));
    return f.call(this, a, b, c, h)
  }
  function f(e, f, h, x) {
    return a.b ? a.b(b.b ? b.b(z.O(c, e, f, h, x)) : b.call(l, z.O(c, e, f, h, x))) : a.call(l, b.b ? b.b(z.O(c, e, f, h, x)) : b.call(l, z.O(c, e, f, h, x)))
  }
  var h = l;
  e.n = 3;
  e.j = function(a) {
    var b = E(a), c = E(J(a)), e = E(J(J(a))), a = G(J(J(a)));
    return f(b, c, e, a)
  };
  e.e = f;
  h = function(f, h, q, x) {
    switch(arguments.length) {
      case 0:
        return a.b ? a.b(b.b ? b.b(c.t ? c.t() : c.call(l)) : b.call(l, c.t ? c.t() : c.call(l))) : a.call(l, b.b ? b.b(c.t ? c.t() : c.call(l)) : b.call(l, c.t ? c.t() : c.call(l)));
      case 1:
        return a.b ? a.b(b.b ? b.b(c.b ? c.b(f) : c.call(l, f)) : b.call(l, c.b ? c.b(f) : c.call(l, f))) : a.call(l, b.b ? b.b(c.b ? c.b(f) : c.call(l, f)) : b.call(l, c.b ? c.b(f) : c.call(l, f)));
      case 2:
        return a.b ? a.b(b.b ? b.b(c.a ? c.a(f, h) : c.call(l, f, h)) : b.call(l, c.a ? c.a(f, h) : c.call(l, f, h))) : a.call(l, b.b ? b.b(c.a ? c.a(f, h) : c.call(l, f, h)) : b.call(l, c.a ? c.a(f, h) : c.call(l, f, h)));
      case 3:
        return a.b ? a.b(b.b ? b.b(c.c ? c.c(f, h, q) : c.call(l, f, h, q)) : b.call(l, c.c ? c.c(f, h, q) : c.call(l, f, h, q))) : a.call(l, b.b ? b.b(c.c ? c.c(f, h, q) : c.call(l, f, h, q)) : b.call(l, c.c ? c.c(f, h, q) : c.call(l, f, h, q)));
      default:
        return e.e(f, h, q, K(arguments, 3))
    }
    d(Error("Invalid arity: " + arguments.length))
  };
  h.n = 3;
  h.j = e.j;
  return h
}
function Af(a, b, c, e) {
  function f(a) {
    var b = l;
    t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(a) {
    for(var a = z.a(E(i), a), b = J(i);;) {
      if(b) {
        a = E(b).call(l, a), b = J(b)
      }else {
        return a
      }
    }
  }
  var i = se($e.p(a, b, c, e));
  f.n = 0;
  f.j = function(a) {
    a = D(a);
    return h(a)
  };
  f.e = h;
  return f
}
function Bf(a, b, c, e) {
  var f = l;
  t(e) && (f = K(Array.prototype.slice.call(arguments, 3), 0));
  return Af.call(this, a, b, c, f)
}
Bf.n = 3;
Bf.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), a = G(J(J(a)));
  return Af(b, c, e, a)
};
Bf.e = Af;
xf = function(a, b, c, e) {
  switch(arguments.length) {
    case 0:
      return vf;
    case 1:
      return a;
    case 2:
      return yf.call(this, a, b);
    case 3:
      return zf.call(this, a, b, c);
    default:
      return Bf.e(a, b, c, K(arguments, 3))
  }
  d(Error("Invalid arity: " + arguments.length))
};
xf.n = 3;
xf.j = Bf.j;
xf.t = function() {
  return vf
};
xf.b = ba();
xf.a = yf;
xf.c = zf;
xf.e = Bf.e;
wf = xf;
var Cf, Df = l;
function Ef(a, b) {
  function c(a) {
    var b = l;
    t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
    return e.call(this, b)
  }
  function e(c) {
    return z.c(a, b, c)
  }
  c.n = 0;
  c.j = function(a) {
    a = D(a);
    return e(a)
  };
  c.e = e;
  return c
}
function Ff(a, b, c) {
  function e(a) {
    var b = l;
    t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(e) {
    return z.p(a, b, c, e)
  }
  e.n = 0;
  e.j = function(a) {
    a = D(a);
    return f(a)
  };
  e.e = f;
  return e
}
function Gf(a, b, c, e) {
  function f(a) {
    var b = l;
    t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(f) {
    return z.O(a, b, c, e, f)
  }
  f.n = 0;
  f.j = function(a) {
    a = D(a);
    return h(a)
  };
  f.e = h;
  return f
}
function Hf(a, b, c, e, f) {
  function h(a) {
    var b = l;
    t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(h) {
    return z.O(a, b, c, e, Te.a(f, h))
  }
  h.n = 0;
  h.j = function(a) {
    a = D(a);
    return i(a)
  };
  h.e = i;
  return h
}
function If(a, b, c, e, f) {
  var h = l;
  t(f) && (h = K(Array.prototype.slice.call(arguments, 4), 0));
  return Hf.call(this, a, b, c, e, h)
}
If.n = 4;
If.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), f = E(J(J(J(a)))), a = G(J(J(J(a))));
  return Hf(b, c, e, f, a)
};
If.e = Hf;
Df = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 2:
      return Ef.call(this, a, b);
    case 3:
      return Ff.call(this, a, b, c);
    case 4:
      return Gf.call(this, a, b, c, e);
    default:
      return If.e(a, b, c, e, K(arguments, 4))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Df.n = 4;
Df.j = If.j;
Df.a = Ef;
Df.c = Ff;
Df.p = Gf;
Df.e = If.e;
Cf = Df;
var Jf = l;
function Kf(a, b) {
  return new W(l, m, function() {
    var c = D(b);
    if(c) {
      if(cd(c)) {
        for(var e = Hb(c), f = R(e), h = new Ie(qa.b(f), 0), i = 0;;) {
          if(i < f) {
            var k = a.b ? a.b(A.a(e, i)) : a.call(l, A.a(e, i));
            h.add(k);
            i += 1
          }else {
            break
          }
        }
        return Pe(h.qa(), Jf.a(a, Ib(c)))
      }
      return P(a.b ? a.b(E(c)) : a.call(l, E(c)), Jf.a(a, G(c)))
    }
    return l
  }, l)
}
function Lf(a, b, c) {
  return new W(l, m, function() {
    var e = D(b), f = D(c);
    return u(e ? f : e) ? P(a.a ? a.a(E(e), E(f)) : a.call(l, E(e), E(f)), Jf.c(a, G(e), G(f))) : l
  }, l)
}
function Mf(a, b, c, e) {
  return new W(l, m, function() {
    var f = D(b), h = D(c), i = D(e);
    return u(f ? h ? i : h : f) ? P(a.c ? a.c(E(f), E(h), E(i)) : a.call(l, E(f), E(h), E(i)), Jf.p(a, G(f), G(h), G(i))) : l
  }, l)
}
function Nf(a, b, c, e, f) {
  return Jf.a(function(b) {
    return z.a(a, b)
  }, function i(a) {
    return new W(l, m, function() {
      var b = Jf.a(D, a);
      return tf(vf, b) ? P(Jf.a(E, b), i(Jf.a(G, b))) : l
    }, l)
  }(uc.e(f, e, K([c, b], 0))))
}
function Of(a, b, c, e, f) {
  var h = l;
  t(f) && (h = K(Array.prototype.slice.call(arguments, 4), 0));
  return Nf.call(this, a, b, c, e, h)
}
Of.n = 4;
Of.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), f = E(J(J(J(a)))), a = G(J(J(J(a))));
  return Nf(b, c, e, f, a)
};
Of.e = Nf;
Jf = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 2:
      return Kf.call(this, a, b);
    case 3:
      return Lf.call(this, a, b, c);
    case 4:
      return Mf.call(this, a, b, c, e);
    default:
      return Of.e(a, b, c, e, K(arguments, 4))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Jf.n = 4;
Jf.j = Of.j;
Jf.a = Kf;
Jf.c = Lf;
Jf.p = Mf;
Jf.e = Of.e;
var V = Jf, Qf = function Pf(b, c) {
  return new W(l, m, function() {
    if(0 < b) {
      var e = D(c);
      return e ? P(E(e), Pf(b - 1, G(e))) : l
    }
    return l
  }, l)
};
function Sf(a, b) {
  return new W(l, m, function() {
    var c;
    a: {
      c = a;
      for(var e = b;;) {
        var e = D(e), f = 0 < c;
        if(u(f ? e : f)) {
          c -= 1, e = G(e)
        }else {
          c = e;
          break a
        }
      }
      c = g
    }
    return c
  }, l)
}
var Tf, Uf = l;
function Vf(a) {
  return new W(l, m, function() {
    return P(a, Uf.b(a))
  }, l)
}
function Wf(a, b) {
  return Qf(a, Uf.b(b))
}
Uf = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Vf.call(this, a);
    case 2:
      return Wf.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Uf.b = Vf;
Uf.a = Wf;
Tf = Uf;
var Xf, Yf = l;
function Zf(a, b) {
  return new W(l, m, function() {
    var c = D(a), e = D(b);
    return u(c ? e : c) ? P(E(c), P(E(e), Yf.a(G(c), G(e)))) : l
  }, l)
}
function $f(a, b, c) {
  return new W(l, m, function() {
    var e = V.a(D, uc.e(c, b, K([a], 0)));
    return tf(vf, e) ? Te.a(V.a(E, e), z.a(Yf, V.a(G, e))) : l
  }, l)
}
function ag(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return $f.call(this, a, b, e)
}
ag.n = 2;
ag.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return $f(b, c, a)
};
ag.e = $f;
Yf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Zf.call(this, a, b);
    default:
      return ag.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Yf.n = 2;
Yf.j = ag.j;
Yf.a = Zf;
Yf.e = ag.e;
Xf = Yf;
function bg(a, b) {
  return Sf(1, Xf.a(Tf.b(a), b))
}
function cg(a) {
  return function c(a, f) {
    return new W(l, m, function() {
      var h = D(a);
      return h ? P(E(h), c(G(h), f)) : D(f) ? c(E(f), G(f)) : l
    }, l)
  }(l, a)
}
var dg, eg = l;
function fg(a, b) {
  return cg(V.a(a, b))
}
function gg(a, b, c) {
  return cg(z.p(V, a, b, c))
}
function hg(a, b, c) {
  var e = l;
  t(c) && (e = K(Array.prototype.slice.call(arguments, 2), 0));
  return gg.call(this, a, b, e)
}
hg.n = 2;
hg.j = function(a) {
  var b = E(a), c = E(J(a)), a = G(J(a));
  return gg(b, c, a)
};
hg.e = gg;
eg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return fg.call(this, a, b);
    default:
      return hg.e(a, b, K(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
eg.n = 2;
eg.j = hg.j;
eg.a = fg;
eg.e = hg.e;
dg = eg;
var jg = function ig(b, c) {
  return new W(l, m, function() {
    var e = D(c);
    if(e) {
      if(cd(e)) {
        for(var f = Hb(e), h = R(f), i = new Ie(qa.b(h), 0), k = 0;;) {
          if(k < h) {
            if(u(b.b ? b.b(A.a(f, k)) : b.call(l, A.a(f, k)))) {
              var q = A.a(f, k);
              i.add(q)
            }
            k += 1
          }else {
            break
          }
        }
        return Pe(i.qa(), ig(b, Ib(e)))
      }
      f = E(e);
      e = G(e);
      return u(b.b ? b.b(f) : b.call(l, f)) ? P(f, ig(b, e)) : ig(b, e)
    }
    return l
  }, l)
};
function kg(a, b) {
  var c;
  a ? (c = a.r & 4, c = u(c ? c : a.fc) ? j : a.r ? m : v(xb, a)) : c = v(xb, a);
  u(c) ? (c = ta.c(zb, yb(a), b), c = Ab(c)) : c = ta.c(ya, a, b);
  return c
}
var lg, mg = l;
function ng(a, b) {
  return mg.c(a, a, b)
}
function og(a, b, c) {
  return new W(l, m, function() {
    var e = D(c);
    if(e) {
      var f = Qf(a, e);
      return a === R(f) ? P(f, mg.c(a, b, Sf(b, e))) : l
    }
    return l
  }, l)
}
function pg(a, b, c, e) {
  return new W(l, m, function() {
    var f = D(e);
    if(f) {
      var h = Qf(a, f);
      return a === R(h) ? P(h, mg.p(a, b, c, Sf(b, f))) : N.b(Qf(a, Te.a(h, c)))
    }
    return l
  }, l)
}
mg = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return ng.call(this, a, b);
    case 3:
      return og.call(this, a, b, c);
    case 4:
      return pg.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
mg.a = ng;
mg.c = og;
mg.p = pg;
lg = mg;
function qg(a, b) {
  this.v = a;
  this.g = b
}
function rg(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function sg(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var e = new qg(a, qa.b(32));
    e.g[0] = c;
    c = e;
    b -= 5
  }
}
var ug = function tg(b, c, e, f) {
  var h = new qg(e.v, e.g.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (e = e.g[i], b = e != l ? tg(b, c - 5, e, f) : sg(l, c - 5, f), h.g[i] = b);
  return h
};
function vg(a, b) {
  var c = 0 <= b;
  if(u(c ? b < a.h : c)) {
    if(b >= rg(a)) {
      return a.U
    }
    for(var c = a.root, e = a.shift;;) {
      if(0 < e) {
        var f = e - 5, c = c.g[b >>> e & 31], e = f
      }else {
        return c.g
      }
    }
  }else {
    d(Error([U("No item "), U(b), U(" in vector of length "), U(a.h)].join("")))
  }
}
var xg = function wg(b, c, e, f, h) {
  var i = new qg(e.v, e.g.slice());
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var k = f >>> c & 31, b = wg(b, c - 5, e.g[k], f, h);
    i.g[k] = b
  }
  return i
}, yg = g, zg = g, Ag = g, Bg = O = g, Cg = g, Dg = g, Eg = g;
function Fg(a, b, c, e, f, h) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = e;
  this.U = f;
  this.o = h;
  this.r = 4;
  this.k = 167668511
}
r = Fg.prototype;
r.Aa = function() {
  return new Ag(this.h, this.shift, yg.b ? yg.b(this.root) : yg.call(l, this.root), zg.b ? zg.b(this.U) : zg.call(l, this.U))
};
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.D = function(a, b) {
  return a.R(a, b, l)
};
r.w = function(a, b, c) {
  return a.R(a, b, c)
};
r.Z = function(a, b, c) {
  var e = 0 <= b;
  if(u(e ? b < this.h : e)) {
    return rg(a) <= b ? (a = this.U.slice(), a[b & 31] = c, new Fg(this.l, this.h, this.shift, this.root, a, l)) : new Fg(this.l, this.h, this.shift, xg(a, this.shift, this.root, b, c), this.U, l)
  }
  if(b === this.h) {
    return a.I(a, c)
  }
  d(Error([U("Index "), U(b), U(" out of bounds  [0,"), U(this.h), U("]")].join("")))
};
var Gg = l, Gg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = Fg.prototype;
r.call = Gg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  if(32 > this.h - rg(a)) {
    var c = this.U.slice();
    c.push(b);
    return new Fg(this.l, this.h + 1, this.shift, this.root, c, l)
  }
  var e = this.h >>> 5 > 1 << this.shift, c = e ? this.shift + 5 : this.shift;
  if(e) {
    e = new qg(l, qa.b(32));
    e.g[0] = this.root;
    var f = sg(l, this.shift, new qg(l, this.U));
    e.g[1] = f
  }else {
    e = ug(a, this.shift, this.root, new qg(l, this.U))
  }
  return new Fg(this.l, this.h + 1, c, e, [b], l)
};
r.Ma = function(a) {
  return 0 < this.h ? new ec(a, this.h - 1, l) : H
};
r.Wa = function(a) {
  return a.W(a, 0)
};
r.Xa = function(a) {
  return a.W(a, 1)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.va = function(a, b) {
  return Ub.a(a, b)
};
r.wa = function(a, b, c) {
  return Ub.c(a, b, c)
};
r.H = function(a) {
  return 0 === this.h ? l : Eg.c ? Eg.c(a, 0, 0) : Eg.call(l, a, 0, 0)
};
r.A = n("h");
r.Ba = function(a) {
  return 0 < this.h ? a.W(a, this.h - 1) : l
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new Fg(b, this.h, this.shift, this.root, this.U, this.o)
};
r.K = n("l");
r.W = function(a, b) {
  return vg(a, b)[b & 31]
};
r.R = function(a, b, c) {
  var e = 0 <= b;
  return u(e ? b < this.h : e) ? a.W(a, b) : c
};
r.J = function() {
  return Sb(Hg, this.l)
};
var Ig = new qg(l, qa.b(32)), Hg = new Fg(l, 0, 5, Ig, [], 0);
function Jg(a) {
  var b = a.length;
  if(32 > b) {
    return new Fg(l, b, 5, Ig, a, l)
  }
  for(var c = a.slice(0, 32), e = 32, f = yb(new Fg(l, 32, 5, Ig, c, l));;) {
    if(e < b) {
      c = e + 1, f = zb(f, a[e]), e = c
    }else {
      return Ab(f)
    }
  }
}
Dd = function(a) {
  return Ab(ta.c(zb, yb(Hg), a))
};
function Kg(a) {
  var b = l;
  t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
  return Dd(b)
}
Kg.n = 0;
Kg.j = function(a) {
  a = D(a);
  return Dd(a)
};
Kg.e = function(a) {
  return Dd(a)
};
function Lg(a, b, c, e, f, h) {
  this.ba = a;
  this.aa = b;
  this.q = c;
  this.P = e;
  this.l = f;
  this.o = h;
  this.k = 31719660;
  this.r = 1536
}
r = Lg.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.ra = function(a) {
  return this.P + 1 < this.aa.length ? (a = Eg.p ? Eg.p(this.ba, this.aa, this.q, this.P + 1) : Eg.call(l, this.ba, this.aa, this.q, this.P + 1), a == l ? l : a) : a.Fb(a)
};
r.I = function(a, b) {
  return P(b, a)
};
r.H = ba();
r.X = function() {
  return this.aa[this.P]
};
r.V = function(a) {
  return this.P + 1 < this.aa.length ? (a = Eg.p ? Eg.p(this.ba, this.aa, this.q, this.P + 1) : Eg.call(l, this.ba, this.aa, this.q, this.P + 1), a == l ? H : a) : a.Va(a)
};
r.Fb = function() {
  var a = this.aa.length, a = this.q + a < va(this.ba) ? Eg.c ? Eg.c(this.ba, this.q + a, 0) : Eg.call(l, this.ba, this.q + a, 0) : l;
  return a == l ? l : a
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return Eg.O ? Eg.O(this.ba, this.aa, this.q, this.P, b) : Eg.call(l, this.ba, this.aa, this.q, this.P, b)
};
r.J = function() {
  return Sb(Hg, this.l)
};
r.bb = function() {
  return Je.a(this.aa, this.P)
};
r.Va = function() {
  var a = this.aa.length, a = this.q + a < va(this.ba) ? Eg.c ? Eg.c(this.ba, this.q + a, 0) : Eg.call(l, this.ba, this.q + a, 0) : l;
  return a == l ? H : a
};
var Mg = l;
function Ng(a, b, c) {
  return Mg.O(a, vg(a, b), b, c, l)
}
function Og(a, b, c, e) {
  return Mg.O(a, b, c, e, l)
}
function Pg(a, b, c, e, f) {
  return new Lg(a, b, c, e, f, l)
}
Mg = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 3:
      return Ng.call(this, a, b, c);
    case 4:
      return Og.call(this, a, b, c, e);
    case 5:
      return Pg.call(this, a, b, c, e, f)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Mg.c = Ng;
Mg.p = Og;
Mg.O = Pg;
var Eg = Mg, yg = function(a) {
  return new qg({}, a.g.slice())
}, zg = function(a) {
  var b = qa.b(32);
  dd(a, 0, b, 0, a.length);
  return b
}, Rg = function Qg(b, c, e, f) {
  var e = b.root.v === e.v ? e : new qg(b.root.v, e.g.slice()), h = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = e.g[h], b = i != l ? Qg(b, c - 5, i, f) : sg(b.root.v, c - 5, f)
  }
  e.g[h] = b;
  return e
}, Ag = function(a, b, c, e) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.U = e;
  this.k = 275;
  this.r = 88
};
Ag.$ = j;
Ag.ca = function() {
  return N.b("cljs.core/TransientVector")
};
Ag.da = function(a, b) {
  return C(b, "cljs.core/TransientVector")
};
var Sg = l, Sg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = Ag.prototype;
r.call = Sg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return a.R(a, b, l)
};
r.w = function(a, b, c) {
  return a.R(a, b, c)
};
r.W = function(a, b) {
  if(this.root.v) {
    return vg(a, b)[b & 31]
  }
  d(Error("nth after persistent!"))
};
r.R = function(a, b, c) {
  var e = 0 <= b;
  return u(e ? b < this.h : e) ? a.W(a, b) : c
};
r.A = function() {
  if(this.root.v) {
    return this.h
  }
  d(Error("count after persistent!"))
};
r.Ca = function(a, b, c) {
  var e;
  a: {
    if(a.root.v) {
      var f = 0 <= b;
      if(u(f ? b < a.h : f)) {
        rg(a) <= b ? a.U[b & 31] = c : (e = function i(e, f) {
          var x = a.root.v === f.v ? f : new qg(a.root.v, f.g.slice());
          if(0 === e) {
            x.g[b & 31] = c
          }else {
            var y = b >>> e & 31, F = i(e - 5, x.g[y]);
            x.g[y] = F
          }
          return x
        }.call(l, a.shift, a.root), a.root = e);
        e = a;
        break a
      }
      if(b === a.h) {
        e = a.Da(a, c);
        break a
      }
      d(Error([U("Index "), U(b), U(" out of bounds for TransientVector of length"), U(a.h)].join("")))
    }
    d(Error("assoc! after persistent!"))
  }
  return e
};
r.Da = function(a, b) {
  if(this.root.v) {
    if(32 > this.h - rg(a)) {
      this.U[this.h & 31] = b
    }else {
      var c = new qg(this.root.v, this.U), e = qa.b(32);
      e[0] = b;
      this.U = e;
      if(this.h >>> 5 > 1 << this.shift) {
        var e = qa.b(32), f = this.shift + 5;
        e[0] = this.root;
        e[1] = sg(this.root.v, this.shift, c);
        this.root = new qg(this.root.v, e);
        this.shift = f
      }else {
        this.root = Rg(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  d(Error("conj! after persistent!"))
};
r.Na = function(a) {
  if(this.root.v) {
    this.root.v = l;
    var a = this.h - rg(a), b = qa.b(a);
    dd(this.U, 0, b, 0, a);
    return new Fg(l, this.h, this.shift, this.root, b, l)
  }
  d(Error("persistent! called twice"))
};
function Tg() {
  this.r = 0;
  this.k = 2097152
}
Tg.prototype.B = p(m);
var Ug = new Tg;
function Vg(a, b) {
  var c = ad(b) ? R(a) === R(b) ? tf(vf, V.a(function(a) {
    return Jb.a(B.c(b, E(a), Ug), sc(a))
  }, a)) : l : l;
  return u(c) ? j : m
}
function Wg(a, b) {
  for(var c = b.length, e = 0;;) {
    if(e < c) {
      if(a === b[e]) {
        return e
      }
      e += 1
    }else {
      return l
    }
  }
}
function Xg(a, b) {
  var c = Uc.b(a), e = Uc.b(b);
  return c < e ? -1 : c > e ? 1 : 0
}
function Yg(a, b, c) {
  for(var e = a.keys, f = e.length, h = a.ua, a = Nc(a), i = 0, k = yb(Zg);;) {
    if(i < f) {
      var q = e[i], i = i + 1, k = Bb(k, q, h[q])
    }else {
      return e = Sb, b = Bb(k, b, c), b = Ab(b), e(b, a)
    }
  }
}
function $g(a, b) {
  for(var c = {}, e = b.length, f = 0;;) {
    if(f < e) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function ah(a, b, c, e, f) {
  this.l = a;
  this.keys = b;
  this.ua = c;
  this.Sa = e;
  this.o = f;
  this.r = 4;
  this.k = 16123663
}
r = ah.prototype;
r.Aa = function(a) {
  a = kg(M.t ? M.t() : M.call(l), a);
  return yb(a)
};
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = ne(a)
};
r.D = function(a, b) {
  return a.w(a, b, l)
};
r.w = function(a, b, c) {
  a = da(b);
  return u(a ? Wg(b, this.keys) != l : a) ? this.ua[b] : c
};
r.Z = function(a, b, c) {
  if(da(b)) {
    var e = this.Sa > bh;
    if(u(e ? e : this.keys.length >= bh)) {
      return Yg(a, b, c)
    }
    if(Wg(b, this.keys) != l) {
      return a = $g(this.ua, this.keys), a[b] = c, new ah(this.l, this.keys, a, this.Sa + 1, l)
    }
    a = $g(this.ua, this.keys);
    e = this.keys.slice();
    a[b] = c;
    e.push(b);
    return new ah(this.l, e, a, this.Sa + 1, l)
  }
  return Yg(a, b, c)
};
r.Ka = function(a, b) {
  var c = da(b);
  return u(c ? Wg(b, this.keys) != l : c) ? j : m
};
var ch = l, ch = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = ah.prototype;
r.call = ch;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return bd(b) ? a.Z(a, A.a(b, 0), A.a(b, 1)) : ta.c(ya, a, b)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = function() {
  var a = this;
  return 0 < a.keys.length ? V.a(function(b) {
    return Kg.e(K([b, a.ua[b]], 0))
  }, a.keys.sort(Xg)) : l
};
r.A = function() {
  return this.keys.length
};
r.B = function(a, b) {
  return Vg(a, b)
};
r.M = function(a, b) {
  return new ah(b, this.keys, this.ua, this.Sa, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(dh, this.l)
};
r.La = function(a, b) {
  var c = da(b);
  if(u(c ? Wg(b, this.keys) != l : c)) {
    var c = this.keys.slice(), e = $g(this.ua, this.keys);
    c.splice(Wg(b, c), 1);
    delete e[b];
    return new ah(this.l, c, e, this.Sa + 1, l)
  }
  return a
};
var dh = new ah(l, [], {}, 0, 0), bh = 32;
function Y(a, b) {
  return new ah(l, a, b, 0, l)
}
function eh(a, b) {
  for(var c = a.g, e = c.length, f = 0;;) {
    if(e <= f) {
      return-1
    }
    if(Jb.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
var fh = g;
function gh(a, b, c, e) {
  this.l = a;
  this.h = b;
  this.g = c;
  this.o = e;
  this.r = 4;
  this.k = 16123663
}
r = gh.prototype;
r.Aa = function() {
  return new fh({}, this.g.length, this.g.slice())
};
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = ne(a)
};
r.D = function(a, b) {
  return a.w(a, b, l)
};
r.w = function(a, b, c) {
  a = eh(a, b);
  return-1 === a ? c : this.g[a + 1]
};
r.Z = function(a, b, c) {
  var e = eh(a, b);
  if(-1 === e) {
    if(this.h < hh) {
      var e = this.l, a = this.h + 1, f = this.g.slice();
      f.push(b);
      f.push(c);
      c = new gh(e, a, f, l)
    }else {
      c = Sb(Fc.c(kg(Zg, a), b, c), this.l)
    }
  }else {
    c === this.g[e + 1] ? c = a : (b = this.l, a = this.h, f = this.g.slice(), f[e + 1] = c, c = new gh(b, a, f, l))
  }
  return c
};
r.Ka = function(a, b) {
  return-1 !== eh(a, b)
};
var ih = l, ih = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = gh.prototype;
r.call = ih;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return bd(b) ? a.Z(a, A.a(b, 0), A.a(b, 1)) : ta.c(ya, a, b)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.g.length;
    b = function f(b) {
      return new W(l, m, function() {
        return b < c ? P(Jg([a.g[b], a.g[b + 1]]), f(b + 2)) : l
      }, l)
    }(0)
  }else {
    b = l
  }
  return b
};
r.A = n("h");
r.B = function(a, b) {
  return Vg(a, b)
};
r.M = function(a, b) {
  return new gh(b, this.h, this.g, this.o)
};
r.K = n("l");
r.J = function() {
  return bb(jh, this.l)
};
r.La = function(a, b) {
  if(0 <= eh(a, b)) {
    var c = this.g.length, e = c - 2;
    if(0 === e) {
      return a.J(a)
    }
    for(var e = qa.b(e), f = 0, h = 0;;) {
      if(f >= c) {
        return new gh(this.l, this.h - 1, e, l)
      }
      Jb.a(b, this.g[f]) || (e[h] = this.g[f], e[h + 1] = this.g[f + 1], h += 2);
      f += 2
    }
  }else {
    return a
  }
};
var jh = new gh(l, 0, [], l), hh = 16, kh = g, fh = function(a, b, c) {
  this.Fa = a;
  this.ya = b;
  this.g = c;
  this.r = 56;
  this.k = 258
};
fh.$ = j;
fh.ca = function() {
  return N.b("cljs.core/TransientArrayMap")
};
fh.da = function(a, b) {
  return C(b, "cljs.core/TransientArrayMap")
};
r = fh.prototype;
r.Ca = function(a, b, c) {
  if(u(this.Fa)) {
    var e = eh(a, b);
    if(-1 === e) {
      if(this.ya + 2 <= 2 * hh) {
        return this.ya += 2, this.g.push(b), this.g.push(c), a
      }
      a = kh.a ? kh.a(this.ya, this.g) : kh.call(l, this.ya, this.g);
      return Bb(a, b, c)
    }
    c !== this.g[e + 1] && (this.g[e + 1] = c);
    return a
  }
  d(Error("assoc! after persistent!"))
};
r.Da = function(a, b) {
  if(u(this.Fa)) {
    var c;
    b ? (c = b.k & 2048, c = u(c ? c : b.Tb) ? j : b.k ? m : v(Sa, b)) : c = v(Sa, b);
    if(u(c)) {
      return a.Ca(a, le.b ? le.b(b) : le.call(l, b), me.b ? me.b(b) : me.call(l, b))
    }
    c = D(b);
    for(var e = a;;) {
      var f = E(c);
      if(u(f)) {
        c = J(c), e = e.Ca(e, le.b ? le.b(f) : le.call(l, f), me.b ? me.b(f) : me.call(l, f))
      }else {
        return e
      }
    }
  }else {
    d(Error("conj! after persistent!"))
  }
};
r.Na = function() {
  if(u(this.Fa)) {
    return this.Fa = m, new gh(l, Vd(this.ya, 2), this.g, l)
  }
  d(Error("persistent! called twice"))
};
r.D = function(a, b) {
  return a.w(a, b, l)
};
r.w = function(a, b, c) {
  if(u(this.Fa)) {
    return a = eh(a, b), -1 === a ? c : this.g[a + 1]
  }
  d(Error("lookup after persistent!"))
};
r.A = function() {
  if(u(this.Fa)) {
    return Vd(this.ya, 2)
  }
  d(Error("count after persistent!"))
};
var lh = g, kh = function(a, b) {
  for(var c = yb(dh), e = 0;;) {
    if(e < a) {
      c = Bb(c, b[e], b[e + 1]), e += 2
    }else {
      return c
    }
  }
};
function mh() {
  this.m = m
}
var nh = g, oh = g, ph = g, qh = g, rh = g, O = g;
function sh(a, b) {
  return da(a) ? a === b : Jb.a(a, b)
}
var th, uh = l;
function vh(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function wh(a, b, c, e, f) {
  a = a.slice();
  a[b] = c;
  a[e] = f;
  return a
}
uh = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 3:
      return vh.call(this, a, b, c);
    case 5:
      return wh.call(this, a, b, c, e, f)
  }
  d(Error("Invalid arity: " + arguments.length))
};
uh.c = vh;
uh.O = wh;
th = uh;
function xh(a, b) {
  var c = qa.b(a.length - 2);
  dd(a, 0, c, 0, 2 * b);
  dd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var yh, zh = l;
function Ah(a, b, c, e) {
  a = a.Ga(b);
  a.g[c] = e;
  return a
}
function Bh(a, b, c, e, f, h) {
  a = a.Ga(b);
  a.g[c] = e;
  a.g[f] = h;
  return a
}
zh = function(a, b, c, e, f, h) {
  switch(arguments.length) {
    case 4:
      return Ah.call(this, a, b, c, e);
    case 6:
      return Bh.call(this, a, b, c, e, f, h)
  }
  d(Error("Invalid arity: " + arguments.length))
};
zh.p = Ah;
zh.la = Bh;
yh = zh;
var Ch = g;
function Dh(a, b, c) {
  this.v = a;
  this.z = b;
  this.g = c
}
r = Dh.prototype;
r.fa = function(a, b, c, e, f, h) {
  var i = 1 << (c >>> b & 31), k = Wd(this.z & i - 1);
  if(0 === (this.z & i)) {
    var q = Wd(this.z);
    if(2 * q < this.g.length) {
      a = this.Ga(a);
      b = a.g;
      h.m = j;
      a: {
        c = 2 * (q - k);
        h = 2 * k + (c - 1);
        for(q = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[q] = b[h];
          q -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * k] = e;
      b[2 * k + 1] = f;
      a.z |= i;
      return a
    }
    if(16 <= q) {
      k = qa.b(32);
      k[c >>> b & 31] = Eh.fa(a, b + 5, c, e, f, h);
      for(f = e = 0;;) {
        if(32 > e) {
          0 !== (this.z >>> e & 1) && (k[e] = this.g[f] != l ? Eh.fa(a, b + 5, Uc.b(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), e += 1
        }else {
          break
        }
      }
      return new Ch(a, q + 1, k)
    }
    b = qa.b(2 * (q + 4));
    dd(this.g, 0, b, 0, 2 * k);
    b[2 * k] = e;
    b[2 * k + 1] = f;
    dd(this.g, 2 * k, b, 2 * (k + 1), 2 * (q - k));
    h.m = j;
    a = this.Ga(a);
    a.g = b;
    a.z |= i;
    return a
  }
  q = this.g[2 * k];
  i = this.g[2 * k + 1];
  if(q == l) {
    return q = i.fa(a, b + 5, c, e, f, h), q === i ? this : yh.p(this, a, 2 * k + 1, q)
  }
  if(sh(e, q)) {
    return f === i ? this : yh.p(this, a, 2 * k + 1, f)
  }
  h.m = j;
  return yh.la(this, a, 2 * k, l, 2 * k + 1, qh.Ea ? qh.Ea(a, b + 5, q, i, c, e, f) : qh.call(l, a, b + 5, q, i, c, e, f))
};
r.Oa = function() {
  return nh.b ? nh.b(this.g) : nh.call(l, this.g)
};
r.Ga = function(a) {
  if(a === this.v) {
    return this
  }
  var b = Wd(this.z), c = qa.b(0 > b ? 4 : 2 * (b + 1));
  dd(this.g, 0, c, 0, 2 * b);
  return new Dh(a, this.z, c)
};
r.Pa = function(a, b, c) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.z & e)) {
    return this
  }
  var f = Wd(this.z & e - 1), h = this.g[2 * f], i = this.g[2 * f + 1];
  return h == l ? (a = i.Pa(a + 5, b, c), a === i ? this : a != l ? new Dh(l, this.z, th.c(this.g, 2 * f + 1, a)) : this.z === e ? l : new Dh(l, this.z ^ e, xh(this.g, f))) : sh(c, h) ? new Dh(l, this.z ^ e, xh(this.g, f)) : this
};
r.ea = function(a, b, c, e, f) {
  var h = 1 << (b >>> a & 31), i = Wd(this.z & h - 1);
  if(0 === (this.z & h)) {
    var k = Wd(this.z);
    if(16 <= k) {
      i = qa.b(32);
      i[b >>> a & 31] = Eh.ea(a + 5, b, c, e, f);
      for(e = c = 0;;) {
        if(32 > c) {
          0 !== (this.z >>> c & 1) && (i[c] = this.g[e] != l ? Eh.ea(a + 5, Uc.b(this.g[e]), this.g[e], this.g[e + 1], f) : this.g[e + 1], e += 2), c += 1
        }else {
          break
        }
      }
      return new Ch(l, k + 1, i)
    }
    a = qa.b(2 * (k + 1));
    dd(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = e;
    dd(this.g, 2 * i, a, 2 * (i + 1), 2 * (k - i));
    f.m = j;
    return new Dh(l, this.z | h, a)
  }
  k = this.g[2 * i];
  h = this.g[2 * i + 1];
  if(k == l) {
    return k = h.ea(a + 5, b, c, e, f), k === h ? this : new Dh(l, this.z, th.c(this.g, 2 * i + 1, k))
  }
  if(sh(c, k)) {
    return e === h ? this : new Dh(l, this.z, th.c(this.g, 2 * i + 1, e))
  }
  f.m = j;
  return new Dh(l, this.z, th.O(this.g, 2 * i, l, 2 * i + 1, qh.la ? qh.la(a + 5, k, h, b, c, e) : qh.call(l, a + 5, k, h, b, c, e)))
};
r.sa = function(a, b, c, e) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.z & f)) {
    return e
  }
  var h = Wd(this.z & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1];
  return f == l ? h.sa(a + 5, b, c, e) : sh(c, f) ? h : e
};
var Eh = new Dh(l, 0, qa.b(0)), Ch = function(a, b, c) {
  this.v = a;
  this.h = b;
  this.g = c
};
Ch.$ = j;
Ch.ca = function() {
  return N.b("cljs.core/ArrayNode")
};
Ch.da = function(a, b) {
  return C(b, "cljs.core/ArrayNode")
};
r = Ch.prototype;
r.fa = function(a, b, c, e, f, h) {
  var i = c >>> b & 31, k = this.g[i];
  if(k == l) {
    return a = yh.p(this, a, i, Eh.fa(a, b + 5, c, e, f, h)), a.h += 1, a
  }
  b = k.fa(a, b + 5, c, e, f, h);
  return b === k ? this : yh.p(this, a, i, b)
};
r.Oa = function() {
  return oh.b ? oh.b(this.g) : oh.call(l, this.g)
};
r.Ga = function(a) {
  return a === this.v ? this : new Ch(a, this.h, this.g.slice())
};
r.Pa = function(a, b, c) {
  var e = b >>> a & 31, f = this.g[e];
  if(f != l) {
    a = f.Pa(a + 5, b, c);
    if(a === f) {
      e = this
    }else {
      if(a == l) {
        if(8 >= this.h) {
          a: {
            for(var f = this.g, a = 2 * (this.h - 1), b = qa.b(a), c = 0, h = 1, i = 0;;) {
              if(c < a) {
                var k = c !== e;
                if(u(k ? f[c] != l : k)) {
                  b[h] = f[c], h += 2, i |= 1 << c
                }
                c += 1
              }else {
                e = new Dh(l, i, b);
                break a
              }
            }
            e = g
          }
        }else {
          e = new Ch(l, this.h - 1, th.c(this.g, e, a))
        }
      }else {
        e = new Ch(l, this.h, th.c(this.g, e, a))
      }
    }
    return e
  }
  return this
};
r.ea = function(a, b, c, e, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(i == l) {
    return new Ch(l, this.h + 1, th.c(this.g, h, Eh.ea(a + 5, b, c, e, f)))
  }
  a = i.ea(a + 5, b, c, e, f);
  return a === i ? this : new Ch(l, this.h, th.c(this.g, h, a))
};
r.sa = function(a, b, c, e) {
  var f = this.g[b >>> a & 31];
  return f != l ? f.sa(a + 5, b, c, e) : e
};
function Fh(a, b, c) {
  for(var b = 2 * b, e = 0;;) {
    if(e < b) {
      if(sh(c, a[e])) {
        return e
      }
      e += 2
    }else {
      return-1
    }
  }
}
function Gh(a, b, c, e) {
  this.v = a;
  this.ma = b;
  this.h = c;
  this.g = e
}
r = Gh.prototype;
r.fa = function(a, b, c, e, f, h) {
  if(c === this.ma) {
    b = Fh(this.g, this.h, e);
    if(-1 === b) {
      if(this.g.length > 2 * this.h) {
        return a = yh.la(this, a, 2 * this.h, e, 2 * this.h + 1, f), h.m = j, a.h += 1, a
      }
      c = this.g.length;
      b = qa.b(c + 2);
      dd(this.g, 0, b, 0, c);
      b[c] = e;
      b[c + 1] = f;
      h.m = j;
      h = this.h + 1;
      a === this.v ? (this.g = b, this.h = h, a = this) : a = new Gh(this.v, this.ma, h, b);
      return a
    }
    return this.g[b + 1] === f ? this : yh.p(this, a, b + 1, f)
  }
  return(new Dh(a, 1 << (this.ma >>> b & 31), [l, this, l, l])).fa(a, b, c, e, f, h)
};
r.Oa = function() {
  return nh.b ? nh.b(this.g) : nh.call(l, this.g)
};
r.Ga = function(a) {
  if(a === this.v) {
    return this
  }
  var b = qa.b(2 * (this.h + 1));
  dd(this.g, 0, b, 0, 2 * this.h);
  return new Gh(a, this.ma, this.h, b)
};
r.Pa = function(a, b, c) {
  a = Fh(this.g, this.h, c);
  return-1 === a ? this : 1 === this.h ? l : new Gh(l, this.ma, this.h - 1, xh(this.g, Vd(a, 2)))
};
r.ea = function(a, b, c, e, f) {
  return b === this.ma ? (a = Fh(this.g, this.h, c), -1 === a ? (a = this.g.length, b = qa.b(a + 2), dd(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = e, f.m = j, new Gh(l, this.ma, this.h + 1, b)) : Jb.a(this.g[a], e) ? this : new Gh(l, this.ma, this.h, th.c(this.g, a + 1, e))) : (new Dh(l, 1 << (this.ma >>> a & 31), [l, this])).ea(a, b, c, e, f)
};
r.sa = function(a, b, c, e) {
  a = Fh(this.g, this.h, c);
  return 0 > a ? e : sh(c, this.g[a]) ? this.g[a + 1] : e
};
var Hh = l;
function Ih(a, b, c, e, f, h) {
  var i = Uc.b(b);
  if(i === e) {
    return new Gh(l, i, 2, [b, c, f, h])
  }
  var k = new mh;
  return Eh.ea(a, i, b, c, k).ea(a, e, f, h, k)
}
function Jh(a, b, c, e, f, h, i) {
  var k = Uc.b(c);
  if(k === f) {
    return new Gh(l, k, 2, [c, e, h, i])
  }
  var q = new mh;
  return Eh.fa(a, b, k, c, e, q).fa(a, b, f, h, i, q)
}
Hh = function(a, b, c, e, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Ih.call(this, a, b, c, e, f, h);
    case 7:
      return Jh.call(this, a, b, c, e, f, h, i)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Hh.la = Ih;
Hh.Ea = Jh;
qh = Hh;
function Kh(a, b, c, e, f) {
  this.l = a;
  this.ga = b;
  this.q = c;
  this.ha = e;
  this.o = f;
  this.r = 0;
  this.k = 31850572
}
r = Kh.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.I = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = ba();
r.X = function() {
  return this.ha == l ? Jg([this.ga[this.q], this.ga[this.q + 1]]) : E(this.ha)
};
r.V = function() {
  return this.ha == l ? nh.c ? nh.c(this.ga, this.q + 2, l) : nh.call(l, this.ga, this.q + 2, l) : nh.c ? nh.c(this.ga, this.q, J(this.ha)) : nh.call(l, this.ga, this.q, J(this.ha))
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new Kh(b, this.ga, this.q, this.ha, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(H, this.l)
};
var Lh = l;
function Mh(a) {
  return Lh.c(a, 0, l)
}
function Nh(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new Kh(l, a, b, l, l)
        }
        var e = a[b + 1];
        if(u(e) && (e = e.Oa(), u(e))) {
          return new Kh(l, a, b + 2, e, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new Kh(l, a, b, c, l)
  }
}
Lh = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Mh.call(this, a);
    case 3:
      return Nh.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Lh.b = Mh;
Lh.c = Nh;
nh = Lh;
function Oh(a, b, c, e, f) {
  this.l = a;
  this.ga = b;
  this.q = c;
  this.ha = e;
  this.o = f;
  this.r = 0;
  this.k = 31850572
}
r = Oh.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.I = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = ba();
r.X = function() {
  return E(this.ha)
};
r.V = function() {
  return oh.p ? oh.p(l, this.ga, this.q, J(this.ha)) : oh.call(l, l, this.ga, this.q, J(this.ha))
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new Oh(b, this.ga, this.q, this.ha, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(H, this.l)
};
var Ph = l;
function Qh(a) {
  return Ph.p(l, a, 0, l)
}
function Rh(a, b, c, e) {
  if(e == l) {
    for(e = b.length;;) {
      if(c < e) {
        var f = b[c];
        if(u(f) && (f = f.Oa(), u(f))) {
          return new Oh(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new Oh(a, b, c, e, l)
  }
}
Ph = function(a, b, c, e) {
  switch(arguments.length) {
    case 1:
      return Qh.call(this, a);
    case 4:
      return Rh.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ph.b = Qh;
Ph.p = Rh;
oh = Ph;
lh = g;
function Sh(a, b, c, e, f, h) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.S = e;
  this.Y = f;
  this.o = h;
  this.r = 4;
  this.k = 16123663
}
r = Sh.prototype;
r.Aa = function() {
  return new lh({}, this.root, this.h, this.S, this.Y)
};
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = ne(a)
};
r.D = function(a, b) {
  return a.w(a, b, l)
};
r.w = function(a, b, c) {
  return b == l ? this.S ? this.Y : c : this.root == l ? c : this.root.sa(0, Uc.b(b), b, c)
};
r.Z = function(a, b, c) {
  if(b == l) {
    var e = this.S;
    return u(e ? c === this.Y : e) ? a : new Sh(this.l, this.S ? this.h : this.h + 1, this.root, j, c, l)
  }
  e = new mh;
  c = (this.root == l ? Eh : this.root).ea(0, Uc.b(b), b, c, e);
  return c === this.root ? a : new Sh(this.l, e.m ? this.h + 1 : this.h, c, this.S, this.Y, l)
};
r.Ka = function(a, b) {
  return b == l ? this.S : this.root == l ? m : this.root.sa(0, Uc.b(b), b, ed) !== ed
};
var Th = l, Th = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = Sh.prototype;
r.call = Th;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return bd(b) ? a.Z(a, A.a(b, 0), A.a(b, 1)) : ta.c(ya, a, b)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = function() {
  if(0 < this.h) {
    var a = this.root != l ? this.root.Oa() : l;
    return this.S ? P(Jg([l, this.Y]), a) : a
  }
  return l
};
r.A = n("h");
r.B = function(a, b) {
  return Vg(a, b)
};
r.M = function(a, b) {
  return new Sh(b, this.h, this.root, this.S, this.Y, this.o)
};
r.K = n("l");
r.J = function() {
  return bb(Zg, this.l)
};
r.La = function(a, b) {
  if(b == l) {
    return this.S ? new Sh(this.l, this.h - 1, this.root, m, l, l) : a
  }
  if(this.root == l) {
    return a
  }
  var c = this.root.Pa(0, Uc.b(b), b);
  return c === this.root ? a : new Sh(this.l, this.h - 1, c, this.S, this.Y, l)
};
var Zg = new Sh(l, 0, l, m, l, 0), lh = function(a, b, c, e, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.S = e;
  this.Y = f;
  this.r = 56;
  this.k = 258
};
lh.$ = j;
lh.ca = function() {
  return N.b("cljs.core/TransientHashMap")
};
lh.da = function(a, b) {
  return C(b, "cljs.core/TransientHashMap")
};
r = lh.prototype;
r.Ca = function(a, b, c) {
  return Uh(a, b, c)
};
r.Da = function(a, b) {
  var c;
  a: {
    if(a.v) {
      b ? (c = b.k & 2048, c = u(c ? c : b.Tb) ? j : b.k ? m : v(Sa, b)) : c = v(Sa, b);
      if(u(c)) {
        c = Uh(a, le.b ? le.b(b) : le.call(l, b), me.b ? me.b(b) : me.call(l, b));
        break a
      }
      c = D(b);
      for(var e = a;;) {
        var f = E(c);
        if(u(f)) {
          c = J(c), e = Uh(e, le.b ? le.b(f) : le.call(l, f), me.b ? me.b(f) : me.call(l, f))
        }else {
          c = e;
          break a
        }
      }
    }else {
      d(Error("conj! after persistent"))
    }
    c = g
  }
  return c
};
r.Na = function(a) {
  var b;
  a.v ? (a.v = l, b = new Sh(l, a.count, a.root, a.S, a.Y, l)) : d(Error("persistent! called twice"));
  return b
};
r.D = function(a, b) {
  return b == l ? this.S ? this.Y : l : this.root == l ? l : this.root.sa(0, Uc.b(b), b)
};
r.w = function(a, b, c) {
  return b == l ? this.S ? this.Y : c : this.root == l ? c : this.root.sa(0, Uc.b(b), b, c)
};
r.A = function() {
  if(this.v) {
    return this.count
  }
  d(Error("count after persistent!"))
};
function Uh(a, b, c) {
  if(a.v) {
    if(b == l) {
      a.Y !== c && (a.Y = c), a.S || (a.count += 1, a.S = j)
    }else {
      var e = new mh, b = (a.root == l ? Eh : a.root).fa(a.v, 0, Uc.b(b), b, c, e);
      b !== a.root && (a.root = b);
      e.m && (a.count += 1)
    }
    return a
  }
  d(Error("assoc! after persistent!"))
}
function Vh(a, b, c) {
  for(var e = b;;) {
    if(a != l) {
      b = c ? a.left : a.right, e = uc.a(e, a), a = b
    }else {
      return e
    }
  }
}
function Wh(a, b, c, e, f) {
  this.l = a;
  this.stack = b;
  this.Ta = c;
  this.h = e;
  this.o = f;
  this.r = 0;
  this.k = 31850574
}
r = Wh.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.I = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = ba();
r.A = function(a) {
  return 0 > this.h ? R(J(a)) + 1 : this.h
};
r.X = function() {
  return Xa(this.stack)
};
r.V = function() {
  var a = E(this.stack), a = Vh(this.Ta ? a.right : a.left, J(this.stack), this.Ta);
  return a != l ? new Wh(l, a, this.Ta, this.h - 1, l) : H
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new Wh(b, this.stack, this.Ta, this.h, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(H, this.l)
};
var Z = g, $ = g;
function Xh(a, b, c, e) {
  return L(Z, c) ? L(Z, c.left) ? new Z(c.key, c.m, c.left.ka(), new $(a, b, c.right, e, l), l) : L(Z, c.right) ? new Z(c.right.key, c.right.m, new $(c.key, c.m, c.left, c.right.left, l), new $(a, b, c.right.right, e, l), l) : new $(a, b, c, e, l) : new $(a, b, c, e, l)
}
function Yh(a, b, c, e) {
  return L(Z, e) ? L(Z, e.right) ? new Z(e.key, e.m, new $(a, b, c, e.left, l), e.right.ka(), l) : L(Z, e.left) ? new Z(e.left.key, e.left.m, new $(a, b, c, e.left.left, l), new $(e.key, e.m, e.left.right, e.right, l), l) : new $(a, b, c, e, l) : new $(a, b, c, e, l)
}
function Zh(a, b, c, e) {
  if(L(Z, c)) {
    return new Z(a, b, c.ka(), e, l)
  }
  if(L($, e)) {
    return Yh(a, b, c, e.Ra())
  }
  var f = L(Z, e);
  if(u(f ? L($, e.left) : f)) {
    return new Z(e.left.key, e.left.m, new $(a, b, c, e.left.left, l), Yh(e.key, e.m, e.left.right, e.right.Ra()), l)
  }
  d(Error("red-black tree invariant violation"))
}
$ = function(a, b, c, e, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = e;
  this.o = f;
  this.r = 0;
  this.k = 32402207
};
$.$ = j;
$.ca = function() {
  return N.b("cljs.core/BlackNode")
};
$.da = function(a, b) {
  return C(b, "cljs.core/BlackNode")
};
$.prototype.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
$.prototype.D = function(a, b) {
  return a.R(a, b, l)
};
$.prototype.w = function(a, b, c) {
  return a.R(a, b, c)
};
$.prototype.Z = function(a, b, c) {
  return Fc.c(Jg([this.key, this.m]), b, c)
};
var $h = l, $h = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.call = $h;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return Jg([this.key, this.m, b])
};
r.Wa = n("key");
r.Xa = n("m");
r.Bb = function(a) {
  return a.Db(this)
};
r.Ra = function() {
  return new Z(this.key, this.m, this.left, this.right, l)
};
r.replace = function(a, b, c, e) {
  return new $(a, b, c, e, l)
};
r.Ab = function(a) {
  return a.Cb(this)
};
r.Cb = function(a) {
  return new $(a.key, a.m, this, a.right, l)
};
var ai = l, ai = function() {
  switch(arguments.length) {
    case 0:
      return Q.b ? Q.b(this) : Q.call(l, this)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.toString = ai;
r.Db = function(a) {
  return new $(a.key, a.m, a.left, this, l)
};
r.ka = function() {
  return this
};
r.va = function(a, b) {
  return Ub.a(a, b)
};
r.wa = function(a, b, c) {
  return Ub.c(a, b, c)
};
r.H = function() {
  return N.a(this.key, this.m)
};
r.A = p(2);
r.Ba = n("m");
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return Sb(Jg([this.key, this.m]), b)
};
r.K = p(l);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
r.J = function() {
  return Hg
};
Z = function(a, b, c, e, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = e;
  this.o = f;
  this.r = 0;
  this.k = 32402207
};
Z.$ = j;
Z.ca = function() {
  return N.b("cljs.core/RedNode")
};
Z.da = function(a, b) {
  return C(b, "cljs.core/RedNode")
};
Z.prototype.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
Z.prototype.D = function(a, b) {
  return a.R(a, b, l)
};
Z.prototype.w = function(a, b, c) {
  return a.R(a, b, c)
};
Z.prototype.Z = function(a, b, c) {
  return Fc.c(Jg([this.key, this.m]), b, c)
};
var bi = l, bi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.call = bi;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return Jg([this.key, this.m, b])
};
r.Wa = n("key");
r.Xa = n("m");
r.Bb = function(a) {
  return new Z(this.key, this.m, this.left, a, l)
};
r.Ra = function() {
  d(Error("red-black tree invariant violation"))
};
r.replace = function(a, b, c, e) {
  return new Z(a, b, c, e, l)
};
r.Ab = function(a) {
  return new Z(this.key, this.m, a, this.right, l)
};
r.Cb = function(a) {
  return L(Z, this.left) ? new Z(this.key, this.m, this.left.ka(), new $(a.key, a.m, this.right, a.right, l), l) : L(Z, this.right) ? new Z(this.right.key, this.right.m, new $(this.key, this.m, this.left, this.right.left, l), new $(a.key, a.m, this.right.right, a.right, l), l) : new $(a.key, a.m, this, a.right, l)
};
var ci = l, ci = function() {
  switch(arguments.length) {
    case 0:
      return Q.b ? Q.b(this) : Q.call(l, this)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.toString = ci;
r.Db = function(a) {
  return L(Z, this.right) ? new Z(this.key, this.m, new $(a.key, a.m, a.left, this.left, l), this.right.ka(), l) : L(Z, this.left) ? new Z(this.left.key, this.left.m, new $(a.key, a.m, a.left, this.left.left, l), new $(this.key, this.m, this.left.right, this.right, l), l) : new $(a.key, a.m, a.left, this, l)
};
r.ka = function() {
  return new $(this.key, this.m, this.left, this.right, l)
};
r.va = function(a, b) {
  return Ub.a(a, b)
};
r.wa = function(a, b, c) {
  return Ub.c(a, b, c)
};
r.H = function() {
  return N.a(this.key, this.m)
};
r.A = p(2);
r.Ba = n("m");
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return Sb(Jg([this.key, this.m]), b)
};
r.K = p(l);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
r.J = function() {
  return Hg
};
var ei = function di(b, c, e, f, h) {
  if(c == l) {
    return new Z(e, f, l, l, l)
  }
  var i = b.a ? b.a(e, c.key) : b.call(l, e, c.key);
  if(0 === i) {
    return h[0] = c, l
  }
  if(0 > i) {
    return b = di(b, c.left, e, f, h), b != l ? c.Ab(b) : l
  }
  b = di(b, c.right, e, f, h);
  return b != l ? c.Bb(b) : l
}, gi = function fi(b, c) {
  if(b == l) {
    return c
  }
  if(c == l) {
    return b
  }
  if(L(Z, b)) {
    if(L(Z, c)) {
      var e = fi(b.right, c.left);
      return L(Z, e) ? new Z(e.key, e.m, new Z(b.key, b.m, b.left, e.left, l), new Z(c.key, c.m, e.right, c.right, l), l) : new Z(b.key, b.m, b.left, new Z(c.key, c.m, e, c.right, l), l)
    }
    return new Z(b.key, b.m, b.left, fi(b.right, c), l)
  }
  if(L(Z, c)) {
    return new Z(c.key, c.m, fi(b, c.left), c.right, l)
  }
  e = fi(b.right, c.left);
  return L(Z, e) ? new Z(e.key, e.m, new $(b.key, b.m, b.left, e.left, l), new $(c.key, c.m, e.right, c.right, l), l) : Zh(b.key, b.m, b.left, new $(c.key, c.m, e, c.right, l))
}, ii = function hi(b, c, e, f) {
  if(c != l) {
    var h = b.a ? b.a(e, c.key) : b.call(l, e, c.key);
    if(0 === h) {
      return f[0] = c, gi(c.left, c.right)
    }
    if(0 > h) {
      var b = hi(b, c.left, e, f), i = b != l;
      return u(i ? i : f[0] != l) ? L($, c.left) ? Zh(c.key, c.m, b, c.right) : new Z(c.key, c.m, b, c.right, l) : l
    }
    b = hi(b, c.right, e, f);
    e = b != l;
    u(e ? e : f[0] != l) ? L($, c.right) ? (f = c.key, e = c.m, c = c.left, L(Z, b) ? i = new Z(f, e, c, b.ka(), l) : L($, c) ? i = Xh(f, e, c.Ra(), b) : (h = L(Z, c), u(h ? L($, c.right) : h) ? i = new Z(c.right.key, c.right.m, Xh(c.key, c.m, c.left.Ra(), c.right.left), new $(f, e, c.right.right, b, l), l) : d(Error("red-black tree invariant violation")))) : i = new Z(c.key, c.m, c.left, b, l) : i = l;
    return i
  }
  return l
}, ki = function ji(b, c, e, f) {
  var h = c.key, i = b.a ? b.a(e, h) : b.call(l, e, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.m, ji(b, c.left, e, f), c.right) : c.replace(h, c.m, c.left, ji(b, c.right, e, f))
}, le = g;
function li(a, b, c, e, f) {
  this.T = a;
  this.pa = b;
  this.h = c;
  this.l = e;
  this.o = f;
  this.r = 0;
  this.k = 418776847
}
r = li.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = ne(a)
};
r.D = function(a, b) {
  return a.w(a, b, l)
};
r.w = function(a, b, c) {
  a = mi(a, b);
  return a != l ? a.m : c
};
r.Z = function(a, b, c) {
  var e = [l], f = ei(this.T, this.pa, b, c, e);
  return f == l ? (e = S.a(e, 0), Jb.a(c, e.m) ? a : new li(this.T, ki(this.T, this.pa, b, c), this.h, this.l, l)) : new li(this.T, f.ka(), this.h + 1, this.l, l)
};
r.Ka = function(a, b) {
  return mi(a, b) != l
};
var ni = l, ni = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = li.prototype;
r.call = ni;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return bd(b) ? a.Z(a, A.a(b, 0), A.a(b, 1)) : ta.c(ya, a, b)
};
r.Ma = function() {
  return 0 < this.h ? new Wh(l, Vh(this.pa, l, m), m, this.h, l) : l
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
function mi(a, b) {
  for(var c = a.pa;;) {
    if(c != l) {
      var e = a.T.a ? a.T.a(b, c.key) : a.T.call(l, b, c.key);
      if(0 === e) {
        return c
      }
      c = 0 > e ? c.left : c.right
    }else {
      return l
    }
  }
}
r.ib = function(a, b) {
  return 0 < this.h ? new Wh(l, Vh(this.pa, l, b), b, this.h, l) : l
};
r.jb = function(a, b, c) {
  if(0 < this.h) {
    for(var a = l, e = this.pa;;) {
      if(e != l) {
        var f = this.T.a ? this.T.a(b, e.key) : this.T.call(l, b, e.key);
        if(0 === f) {
          return new Wh(l, uc.a(a, e), c, -1, l)
        }
        u(c) ? 0 > f ? (a = uc.a(a, e), e = e.left) : e = e.right : 0 < f ? (a = uc.a(a, e), e = e.right) : e = e.left
      }else {
        return a == l ? l : new Wh(l, a, c, -1, l)
      }
    }
  }else {
    return l
  }
};
r.hb = function(a, b) {
  return le.b ? le.b(b) : le.call(l, b)
};
r.gb = n("T");
r.H = function() {
  return 0 < this.h ? new Wh(l, Vh(this.pa, l, j), j, this.h, l) : l
};
r.A = n("h");
r.B = function(a, b) {
  return Vg(a, b)
};
r.M = function(a, b) {
  return new li(this.T, this.pa, this.h, b, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(oi, this.l)
};
r.La = function(a, b) {
  var c = [l], e = ii(this.T, this.pa, b, c);
  return e == l ? S.a(c, 0) == l ? a : new li(this.T, l, 0, this.l, l) : new li(this.T, e.ka(), this.h - 1, this.l, l)
};
var oi = new li(kd, l, 0, l, 0);
function pi(a) {
  for(var b = D(a), c = yb(Zg);;) {
    if(b) {
      var a = J(J(b)), e = E(b), b = sc(b), c = Bb(c, e, b), b = a
    }else {
      return Ab(c)
    }
  }
}
function qi(a) {
  var b = l;
  t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
  return pi.call(this, b)
}
qi.n = 0;
qi.j = function(a) {
  a = D(a);
  return pi(a)
};
qi.e = pi;
M = qi;
function ri(a) {
  return new gh(l, Vd(R(a), 2), z.a(pa, a), l)
}
function si(a) {
  var b = l;
  t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
  return ri.call(this, b)
}
si.n = 0;
si.j = function(a) {
  a = D(a);
  return ri(a)
};
si.e = ri;
function ti(a) {
  for(var a = D(a), b = oi;;) {
    if(a) {
      var c = J(J(a)), b = Fc.c(b, E(a), sc(a)), a = c
    }else {
      return b
    }
  }
}
function ui(a) {
  var b = l;
  t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
  return ti.call(this, b)
}
ui.n = 0;
ui.j = function(a) {
  a = D(a);
  return ti(a)
};
ui.e = ti;
function vi(a, b) {
  for(var c = D(b), e = new li(pd(a), l, 0, l, 0);;) {
    if(c) {
      var f = J(J(c)), e = Fc.c(e, E(c), sc(c)), c = f
    }else {
      return e
    }
  }
}
function wi(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return vi.call(this, a, c)
}
wi.n = 1;
wi.j = function(a) {
  var b = E(a), a = G(a);
  return vi(b, a)
};
wi.e = vi;
var le = function(a) {
  return Ta(a)
}, me = function(a) {
  return Ua(a)
}, xi = g;
function yi(a, b, c) {
  this.l = a;
  this.Ia = b;
  this.o = c;
  this.r = 4;
  this.k = 15077647
}
yi.prototype.Aa = function() {
  return new xi(yb(this.Ia))
};
yi.prototype.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = oe(a)
};
yi.prototype.D = function(a, b) {
  return a.w(a, b, l)
};
yi.prototype.w = function(a, b, c) {
  return u(Na(this.Ia, b)) ? b : c
};
var zi = l, zi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = yi.prototype;
r.call = zi;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return new yi(this.l, Fc.c(this.Ia, b, l), l)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.H = function() {
  return D(V.a(E, this.Ia))
};
r.fb = function(a, b) {
  return new yi(this.l, Jc.a(this.Ia, b), l)
};
r.A = function(a) {
  return R(D(a))
};
r.B = function(a, b) {
  var c = $c(b);
  return c ? (c = R(a) === R(b)) ? tf(function(b) {
    return jd(a, b)
  }, b) : c : c
};
r.M = function(a, b) {
  return new yi(b, this.Ia, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(Ai, this.l)
};
var Ai = new yi(l, M(), 0), xi = function(a) {
  this.za = a;
  this.k = 259;
  this.r = 136
};
xi.$ = j;
xi.ca = function() {
  return N.b("cljs.core/TransientHashSet")
};
xi.da = function(a, b) {
  return C(b, "cljs.core/TransientHashSet")
};
var Bi = l, Bi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return B.c(this.za, b, ed) === ed ? l : b;
    case 3:
      return B.c(this.za, b, ed) === ed ? c : b
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = xi.prototype;
r.call = Bi;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return a.w(a, b, l)
};
r.w = function(a, b, c) {
  return B.c(this.za, b, ed) === ed ? c : b
};
r.A = function() {
  return R(this.za)
};
r.Da = function(a, b) {
  this.za = Bb(this.za, b, l);
  return a
};
r.Na = function() {
  return new yi(l, Ab(this.za), l)
};
function Ci(a, b, c) {
  this.l = a;
  this.ja = b;
  this.o = c;
  this.r = 0;
  this.k = 417730831
}
Ci.prototype.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = oe(a)
};
Ci.prototype.D = function(a, b) {
  return a.w(a, b, l)
};
Ci.prototype.w = function(a, b, c) {
  a = mi(this.ja, b);
  return a != l ? a.key : c
};
var Di = l, Di = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.D(this, b);
    case 3:
      return this.w(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
r = Ci.prototype;
r.call = Di;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return new Ci(this.l, Fc.c(this.ja, b, l), l)
};
r.Ma = function() {
  return V.a(le, mb(this.ja))
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.ib = function(a, b) {
  return V.a(le, nb(this.ja, b))
};
r.jb = function(a, b, c) {
  return V.a(le, ob(this.ja, b, c))
};
r.hb = function(a, b) {
  return b
};
r.gb = function() {
  return qb(this.ja)
};
r.H = function() {
  return D(V.a(E, this.ja))
};
r.fb = function(a, b) {
  return new Ci(this.l, Jc.a(this.ja, b), l)
};
r.A = function() {
  return R(this.ja)
};
r.B = function(a, b) {
  var c = $c(b);
  return c ? (c = R(a) === R(b)) ? tf(function(b) {
    return jd(a, b)
  }, b) : c : c
};
r.M = function(a, b) {
  return new Ci(b, this.ja, this.o)
};
r.K = n("l");
r.J = function() {
  return Sb(Ei, this.l)
};
var Ei = new Ci(l, ui(), 0);
function Fi(a, b) {
  return ta.c(ya, new Ci(l, wi(a), 0), b)
}
function Gi(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return Fi.call(this, a, c)
}
Gi.n = 1;
Gi.j = function(a) {
  var b = E(a), a = G(a);
  return Fi(b, a)
};
Gi.e = Fi;
pe = function(a) {
  if(fd(a)) {
    return a
  }
  var b = gd(a);
  if(u(b ? b : hd(a))) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? fe.a(a, 2) : fe.a(a, b + 1)
  }
  d(Error([U("Doesn't support name: "), U(a)].join("")))
};
function Hi(a) {
  var b = gd(a);
  if(u(b ? b : hd(a))) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? fe.c(a, 2, b) : l
  }
  d(Error([U("Doesn't support namespace: "), U(a)].join("")))
}
var Ji = function Ii(b, c) {
  return new W(l, m, function() {
    var e = D(c);
    return e ? u(b.b ? b.b(E(e)) : b.call(l, E(e))) ? P(E(e), Ii(b, G(e))) : l : l
  }, l)
};
function Ki(a, b, c) {
  return function(e) {
    var f = qb(a);
    return b.a ? b.a(f.a ? f.a(pb(a, e), c) : f.call(l, pb(a, e), c), 0) : b.call(l, f.a ? f.a(pb(a, e), c) : f.call(l, pb(a, e), c), 0)
  }
}
var Li, Mi = l;
function Ni(a, b, c) {
  var e = Ki(a, b, c), f;
  a: {
    f = [Hd, Ld];
    for(var h = R(f), i = 0, k = yb(Ai);;) {
      if(i < h) {
        var q = i + 1, k = zb(k, f[i]), i = q
      }else {
        f = Ab(k);
        break a
      }
    }
    f = g
  }
  return u(f.call(l, b)) ? (a = ob(a, c, m), u(a) ? (b = S.c(a, 0, l), u(e.b ? e.b(b) : e.call(l, b)) ? a : J(a)) : l) : Ji(e, nb(a, m))
}
function Oi(a, b, c, e, f) {
  var h = ob(a, f, m);
  if(u(h)) {
    var i = S.c(h, 0, l);
    return Ji(Ki(a, b, c), u(Ki(a, e, f).call(l, i)) ? h : J(h))
  }
  return l
}
Mi = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 3:
      return Ni.call(this, a, b, c);
    case 5:
      return Oi.call(this, a, b, c, e, f)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Mi.c = Ni;
Mi.O = Oi;
Li = Mi;
function Pi(a, b, c, e, f) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = e;
  this.o = f;
  this.r = 0;
  this.k = 32375006
}
r = Pi.prototype;
r.C = function(a) {
  var b = this.o;
  return b != l ? b : this.o = a = dc(a)
};
r.ra = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Pi(this.l, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Pi(this.l, this.start + this.step, this.end, this.step, l) : l
};
r.I = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return Q.b ? Q.b(this) : Q.call(l, this)
};
r.va = function(a, b) {
  return Ub.a(a, b)
};
r.wa = function(a, b, c) {
  return Ub.c(a, b, c)
};
r.H = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
r.A = function(a) {
  return oa(a.H(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.X = n("start");
r.V = function(a) {
  return a.H(a) != l ? new Pi(this.l, this.start + this.step, this.end, this.step, l) : H
};
r.B = function(a, b) {
  return Ob(a, b)
};
r.M = function(a, b) {
  return new Pi(b, this.start, this.end, this.step, this.o)
};
r.K = n("l");
r.W = function(a, b) {
  if(b < a.A(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(u(c ? 0 === this.step : c)) {
    return this.start
  }
  d(Error("Index out of bounds"))
};
r.R = function(a, b, c) {
  b < a.A(a) ? c = this.start + b * this.step : (a = this.start > this.end, c = u(a ? 0 === this.step : a) ? this.start : c);
  return c
};
r.J = function() {
  return Sb(H, this.l)
};
var Qi, Ri = l;
function Si() {
  return Ri.c(0, Number.MAX_VALUE, 1)
}
function Ti(a) {
  return Ri.c(0, a, 1)
}
function Ui(a, b) {
  return Ri.c(a, b, 1)
}
function Vi(a, b, c) {
  return new Pi(l, a, b, c, l)
}
Ri = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Si.call(this);
    case 1:
      return Ti.call(this, a);
    case 2:
      return Ui.call(this, a, b);
    case 3:
      return Vi.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ri.t = Si;
Ri.b = Ti;
Ri.a = Ui;
Ri.c = Vi;
Qi = Ri;
var Wi, Xi = l;
function Yi(a) {
  for(;;) {
    if(D(a)) {
      a = J(a)
    }else {
      return l
    }
  }
}
function Zi(a, b) {
  for(;;) {
    var c = D(b);
    if(u(c ? 0 < a : c)) {
      var c = a - 1, e = J(b), a = c, b = e
    }else {
      return l
    }
  }
}
Xi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Yi.call(this, a);
    case 2:
      return Zi.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Xi.b = Yi;
Xi.a = Zi;
Wi = Xi;
var $i, aj = l;
function bj(a) {
  Wi.b(a);
  return a
}
function cj(a, b) {
  Wi.a(a, b);
  return b
}
aj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bj.call(this, a);
    case 2:
      return cj.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
aj.b = bj;
aj.a = cj;
$i = aj;
Bg = function(a, b, c, e, f, h) {
  return Te.e(Jg([b]), cg(bg(Jg([c]), V.a(function(b) {
    return a.a ? a.a(b, f) : a.call(l, b, f)
  }, h))), K([Jg([e])], 0))
};
Cg = function(a, b, c, e, f, h, i) {
  C(a, c);
  D(i) && (b.c ? b.c(E(i), a, h) : b.call(l, E(i), a, h));
  for(c = D(J(i));;) {
    if(c) {
      i = E(c), C(a, e), b.c ? b.c(i, a, h) : b.call(l, i, a, h), c = J(c)
    }else {
      break
    }
  }
  return C(a, f)
};
function dj(a, b) {
  for(var c = D(b);;) {
    if(c) {
      var e = E(c);
      C(a, e);
      c = J(c)
    }else {
      return l
    }
  }
}
function ej(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return dj.call(this, a, c)
}
ej.n = 1;
ej.j = function(a) {
  var b = E(a), a = G(a);
  return dj(b, a)
};
ej.e = dj;
function fj(a) {
  this.Zb = a;
  this.r = 0;
  this.k = 1073741824
}
fj.prototype.Nb = function(a, b) {
  return this.Zb.append(b)
};
fj.prototype.Vb = p(l);
var hj = function gj(b, c) {
  return b == l ? N.b("nil") : g === b ? N.b("#<undefined>") : Te.a(u(function() {
    var e = B.c(c, "\ufdd0:meta", l);
    return u(e) ? (b ? (e = b.k & 131072, e = u(e ? e : b.Ib) ? j : b.k ? m : v($a, b)) : e = v($a, b), u(e) ? Nc(b) : e) : e
  }()) ? Te.e(Jg(["^"]), gj(Nc(b), c), K([Jg([" "])], 0)) : l, u(function() {
    var c = b != l;
    return c ? b.$ : c
  }()) ? b.ca(b) : u(b ? u(function() {
    var c = b.k & 536870912;
    return c ? c : b.L
  }()) ? j : b.k ? m : v(rb, b) : v(rb, b)) ? sb(b, c) : u(b instanceof RegExp) ? N.c('#"', b.source, '"') : N.c("#<", "" + U(b), ">"))
}, Dg = function ij(b, c, e) {
  if(b == l) {
    return C(c, "nil")
  }
  if(g === b) {
    return C(c, "#<undefined>")
  }
  var f;
  f = B.c(e, "\ufdd0:meta", l);
  u(f) && (b ? (f = b.k & 131072, f = u(f ? f : b.Ib) ? j : b.k ? m : v($a, b)) : f = v($a, b), f = u(f) ? Nc(b) : f);
  u(f) && (C(c, "^"), ij(Nc(b), c, e), C(c, " "));
  f = b != l;
  u(f ? b.$ : f) ? b = b.da(b, c, e) : (b ? (f = b.k & 2147483648, f = u(f ? f : b.N) ? j : b.k ? m : v(ub, b)) : f = v(ub, b), u(f) ? b = vb(b, c, e) : (b ? (f = b.k & 536870912, f = u(f ? f : b.L) ? j : b.k ? m : v(rb, b)) : f = v(rb, b), b = u(f) ? z.c(ej, c, sb(b, e)) : u(b instanceof RegExp) ? ej.e(c, K(['#"', b.source, '"'], 0)) : ej.e(c, K(["#<", "" + U(b), ">"], 0))));
  return b
};
function jj(a) {
  var b = Y(["\ufdd0:flush-on-newline", "\ufdd0:readably", "\ufdd0:meta", "\ufdd0:dup"], {"\ufdd0:flush-on-newline":j, "\ufdd0:readably":j, "\ufdd0:meta":m, "\ufdd0:dup":m});
  if(Yc(a)) {
    b = ""
  }else {
    var c = new la, e = new fj(c);
    a: {
      Dg(E(a), e, b);
      for(a = D(J(a));;) {
        if(a) {
          var f = E(a);
          C(e, " ");
          Dg(f, e, b);
          a = J(a)
        }else {
          break a
        }
      }
    }
    tb(e);
    b = "" + U(c)
  }
  return b
}
function kj(a) {
  var b = l;
  t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
  return jj(b)
}
kj.n = 0;
kj.j = function(a) {
  a = D(a);
  return jj(a)
};
kj.e = function(a) {
  return jj(a)
};
var Q = kj, lj = Y('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function mj(a) {
  return[U('"'), U(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return B.c(lj, a, l)
  })), U('"')].join("")
}
rb.number = j;
sb.number = function(a) {
  return N.b("" + U(a))
};
hc.prototype.L = j;
hc.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
Oe.prototype.L = j;
Oe.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
li.prototype.L = j;
li.prototype.G = function(a, b) {
  return Bg(function(a) {
    return Bg(hj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
gh.prototype.L = j;
gh.prototype.G = function(a, b) {
  return Bg(function(a) {
    return Bg(hj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
W.prototype.L = j;
W.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
ec.prototype.L = j;
ec.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
Ci.prototype.L = j;
Ci.prototype.G = function(a, b) {
  return Bg(hj, "#{", " ", "}", b, a)
};
rb["boolean"] = j;
sb["boolean"] = function(a) {
  return N.b("" + U(a))
};
rb.string = j;
sb.string = function(a, b) {
  return gd(a) ? N.b([U(":"), U(function() {
    var b = Hi(a);
    return u(b) ? [U(b), U("/")].join("") : l
  }()), U(pe(a))].join("")) : hd(a) ? N.b([U(function() {
    var b = Hi(a);
    return u(b) ? [U(b), U("/")].join("") : l
  }()), U(pe(a))].join("")) : N.b(u((new De("\ufdd0:readably")).call(l, b)) ? mj(a) : a)
};
Kh.prototype.L = j;
Kh.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
Z.prototype.L = j;
Z.prototype.G = function(a, b) {
  return Bg(hj, "[", " ", "]", b, a)
};
Lg.prototype.L = j;
Lg.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
Sh.prototype.L = j;
Sh.prototype.G = function(a, b) {
  return Bg(function(a) {
    return Bg(hj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
yi.prototype.L = j;
yi.prototype.G = function(a, b) {
  return Bg(hj, "#{", " ", "}", b, a)
};
Fg.prototype.L = j;
Fg.prototype.G = function(a, b) {
  return Bg(hj, "[", " ", "]", b, a)
};
qe.prototype.L = j;
qe.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
rb.array = j;
sb.array = function(a, b) {
  return Bg(hj, "#<Array [", ", ", "]>", b, a)
};
rb["function"] = j;
sb["function"] = function(a) {
  return N.c("#<", "" + U(a), ">")
};
re.prototype.L = j;
re.prototype.G = function() {
  return N.b("()")
};
$.prototype.L = j;
$.prototype.G = function(a, b) {
  return Bg(hj, "[", " ", "]", b, a)
};
Date.prototype.L = j;
Date.prototype.G = function(a) {
  function b(a, b) {
    for(var f = "" + U(a);;) {
      if(R(f) < b) {
        f = [U("0"), U(f)].join("")
      }else {
        return f
      }
    }
  }
  return N.b([U('#inst "'), U(a.getUTCFullYear()), U("-"), U(b(a.getUTCMonth() + 1, 2)), U("-"), U(b(a.getUTCDate(), 2)), U("T"), U(b(a.getUTCHours(), 2)), U(":"), U(b(a.getUTCMinutes(), 2)), U(":"), U(b(a.getUTCSeconds(), 2)), U("."), U(b(a.getUTCMilliseconds(), 3)), U("-"), U('00:00"')].join(""))
};
ze.prototype.L = j;
ze.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
Pi.prototype.L = j;
Pi.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
Oh.prototype.L = j;
Oh.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
ah.prototype.L = j;
ah.prototype.G = function(a, b) {
  return Bg(function(a) {
    return Bg(hj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Wh.prototype.L = j;
Wh.prototype.G = function(a, b) {
  return Bg(hj, "(", " ", ")", b, a)
};
ub.number = j;
vb.number = function(a, b) {
  1 / 0;
  return C(b, "" + U(a))
};
hc.prototype.N = j;
hc.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Oe.prototype.N = j;
Oe.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
li.prototype.N = j;
li.prototype.F = function(a, b, c) {
  return Cg(b, function(a) {
    return Cg(b, Dg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
gh.prototype.N = j;
gh.prototype.F = function(a, b, c) {
  return Cg(b, function(a) {
    return Cg(b, Dg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.N = j;
W.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
ec.prototype.N = j;
ec.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Ci.prototype.N = j;
Ci.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "#{", " ", "}", c, a)
};
ub["boolean"] = j;
vb["boolean"] = function(a, b) {
  return C(b, "" + U(a))
};
ub.string = j;
vb.string = function(a, b, c) {
  return gd(a) ? (C(b, ":"), c = Hi(a), u(c) && ej.e(b, K(["" + U(c), "/"], 0)), C(b, pe(a))) : hd(a) ? (c = Hi(a), u(c) && ej.e(b, K(["" + U(c), "/"], 0)), C(b, pe(a))) : u((new De("\ufdd0:readably")).call(l, c)) ? C(b, mj(a)) : C(b, a)
};
Kh.prototype.N = j;
Kh.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Z.prototype.N = j;
Z.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "[", " ", "]", c, a)
};
Lg.prototype.N = j;
Lg.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Sh.prototype.N = j;
Sh.prototype.F = function(a, b, c) {
  return Cg(b, function(a) {
    return Cg(b, Dg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
yi.prototype.N = j;
yi.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "#{", " ", "}", c, a)
};
Fg.prototype.N = j;
Fg.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "[", " ", "]", c, a)
};
qe.prototype.N = j;
qe.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
ub.array = j;
vb.array = function(a, b, c) {
  return Cg(b, Dg, "#<Array [", ", ", "]>", c, a)
};
ub["function"] = j;
vb["function"] = function(a, b) {
  return ej.e(b, K(["#<", "" + U(a), ">"], 0))
};
re.prototype.N = j;
re.prototype.F = function(a, b) {
  return C(b, "()")
};
$.prototype.N = j;
$.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "[", " ", "]", c, a)
};
Date.prototype.N = j;
Date.prototype.F = function(a, b) {
  function c(a, b) {
    for(var c = "" + U(a);;) {
      if(R(c) < b) {
        c = [U("0"), U(c)].join("")
      }else {
        return c
      }
    }
  }
  return ej.e(b, K(['#inst "', "" + U(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
ze.prototype.N = j;
ze.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Pi.prototype.N = j;
Pi.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Oh.prototype.N = j;
Oh.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
ah.prototype.N = j;
ah.prototype.F = function(a, b, c) {
  return Cg(b, function(a) {
    return Cg(b, Dg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Wh.prototype.N = j;
Wh.prototype.F = function(a, b, c) {
  return Cg(b, Dg, "(", " ", ")", c, a)
};
Fg.prototype.Ob = j;
Fg.prototype.Gb = function(a, b) {
  return ld.a(a, b)
};
function nj(a, b, c, e) {
  this.state = a;
  this.l = b;
  this.$b = c;
  this.ac = e;
  this.k = 2690809856;
  this.r = 2
}
r = nj.prototype;
r.C = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
r.Mb = function(a, b, c) {
  for(var e = D(this.ac);;) {
    if(e) {
      var f = E(e), h = S.c(f, 0, l), f = S.c(f, 1, l);
      f.p ? f.p(h, a, b, c) : f.call(l, h, a, b, c);
      e = J(e)
    }else {
      return l
    }
  }
};
r.F = function(a, b, c) {
  C(b, "#<Atom: ");
  vb(this.state, b, c);
  return C(b, ">")
};
r.G = function(a, b) {
  return Te.e(Jg(["#<Atom: "]), sb(this.state, b), K([">"], 0))
};
r.K = n("l");
r.cb = n("state");
r.B = function(a, b) {
  return a === b
};
var oj = l;
function pj(a) {
  return new nj(a, l, l, l)
}
function qj(a, b) {
  var c = T(b) ? z.a(M, b) : b, e = B.c(c, "\ufdd0:validator", l), c = B.c(c, "\ufdd0:meta", l);
  return new nj(a, c, e, l)
}
function rj(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return qj.call(this, a, c)
}
rj.n = 1;
rj.j = function(a) {
  var b = E(a), a = G(a);
  return qj(b, a)
};
rj.e = qj;
oj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return pj.call(this, a);
    default:
      return rj.e(a, K(arguments, 1))
  }
  d(Error("Invalid arity: " + arguments.length))
};
oj.n = 1;
oj.j = rj.j;
oj.b = pj;
oj.e = rj.e;
var rh = oj, ph = function(a, b) {
  var c = a.$b;
  u(c) && !u(c.b ? c.b(b) : c.call(l, b)) && d(Error([U("Assert failed: "), U("Validator rejected reference state"), U("\n"), U(Q.e(K([Sb(N("\ufdd1'validate", "\ufdd1'new-value"), M("\ufdd0:line", 6752))], 0)))].join("")));
  c = a.state;
  a.state = b;
  wb(a, c, b);
  return b
}, sj, tj = l;
function uj(a, b) {
  return ph(a, b.b ? b.b(a.state) : b.call(l, a.state))
}
function vj(a, b, c) {
  return ph(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
}
function wj(a, b, c, e) {
  return ph(a, b.c ? b.c(a.state, c, e) : b.call(l, a.state, c, e))
}
function xj(a, b, c, e, f) {
  return ph(a, b.p ? b.p(a.state, c, e, f) : b.call(l, a.state, c, e, f))
}
function yj(a, b, c, e, f, h) {
  return ph(a, z.e(b, a.state, c, e, f, K([h], 0)))
}
function zj(a, b, c, e, f, h) {
  var i = l;
  t(h) && (i = K(Array.prototype.slice.call(arguments, 5), 0));
  return yj.call(this, a, b, c, e, f, i)
}
zj.n = 5;
zj.j = function(a) {
  var b = E(a), c = E(J(a)), e = E(J(J(a))), f = E(J(J(J(a)))), h = E(J(J(J(J(a))))), a = G(J(J(J(J(a)))));
  return yj(b, c, e, f, h, a)
};
zj.e = yj;
tj = function(a, b, c, e, f, h) {
  switch(arguments.length) {
    case 2:
      return uj.call(this, a, b);
    case 3:
      return vj.call(this, a, b, c);
    case 4:
      return wj.call(this, a, b, c, e);
    case 5:
      return xj.call(this, a, b, c, e, f);
    default:
      return zj.e(a, b, c, e, f, K(arguments, 5))
  }
  d(Error("Invalid arity: " + arguments.length))
};
tj.n = 5;
tj.j = zj.j;
tj.a = uj;
tj.c = vj;
tj.p = wj;
tj.O = xj;
tj.e = zj.e;
sj = tj;
O = function(a) {
  return Za(a)
};
function Aj(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  var c = Aj[s(a == l ? l : a)];
  c ? b = c : (c = Aj._) ? b = c : d(w("IEncodeJS.-clj->js", a));
  return b.call(l, a)
}
function Bj(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  var c = Bj[s(a == l ? l : a)];
  c ? b = c : (c = Bj._) ? b = c : d(w("IEncodeJS.-key->js", a));
  return b.call(l, a)
}
Aj["null"] = p(l);
Bj._ = function(a) {
  return u(function() {
    var b = fd(a);
    return b || (b = "number" == typeof a) ? b : (b = gd(a)) ? b : hd(a)
  }()) ? Aj(a) : Q.e(K([a], 0))
};
Aj._ = function(a) {
  if(gd(a)) {
    return pe(a)
  }
  if(hd(a)) {
    return"" + U(a)
  }
  if(ad(a)) {
    for(var b = {}, a = D(a);;) {
      if(a) {
        var c = E(a), e = S.c(c, 0, l), c = S.c(c, 1, l);
        b[Bj(e)] = Aj(c);
        a = J(a)
      }else {
        break
      }
    }
    return b
  }
  return Zc(a) ? z.a(pa, V.a(Aj, a)) : a
};
function Cj(a) {
  return Aj(a)
}
var Dj, Ej = l;
function Fj(a) {
  if(a ? a.Pb : a) {
    return a.Pb(a)
  }
  var b;
  var c = Dj[s(a == l ? l : a)];
  c ? b = c : (c = Dj._) ? b = c : d(w("IEncodeClojure.-js->clj", a));
  return b.call(l, a)
}
function Gj(a, b) {
  if(a ? a.Qb : a) {
    return a.Qb(a, b)
  }
  var c;
  var e = Dj[s(a == l ? l : a)];
  e ? c = e : (e = Dj._) ? c = e : d(w("IEncodeClojure.-js->clj", a));
  return c.call(l, a, b)
}
Ej = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Fj.call(this, a);
    case 2:
      return Gj.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ej.b = Fj;
Ej.a = Gj;
Dj = Ej;
var Hj = l, Hj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Dj.a(a, Y(["\ufdd0:keywordize-keys"], {"\ufdd0:keywordize-keys":m}));
    case 2:
      var c = T(b) ? z.a(M, b) : b, c = B.c(c, "\ufdd0:keywordize-keys", l), e = u(c) ? he : U;
      return function h(a) {
        var b;
        if(T(a)) {
          b = $i.b(V.a(h, a))
        }else {
          if(Zc(a)) {
            b = kg(wa(a), V.a(h, a))
          }else {
            if(u("array" == s(a))) {
              b = Dd(V.a(h, a))
            }else {
              if((a == l ? l : a.constructor) === Object) {
                b = dh;
                var c = [], x = function(a, b) {
                  return c.push(b)
                }, y;
                for(y in a) {
                  x.call(g, 0, y)
                }
                b = kg(b, function I(b) {
                  return new W(l, m, function() {
                    for(;;) {
                      if(D(b)) {
                        var c = E(b);
                        return P(Jg([e.b ? e.b(c) : e.call(l, c), h(a[c])]), I(G(b)))
                      }
                      return l
                    }
                  }, l)
                }(c))
              }else {
                b = a
              }
            }
          }
        }
        return b
      }(a)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Dj._ = Hj;
function Ij(a, b) {
  return Dj.a(a, z.a(si, b))
}
function Jj(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return Ij.call(this, a, c)
}
Jj.n = 1;
Jj.j = function(a) {
  var b = E(a), a = G(a);
  return Ij(b, a)
};
Jj.e = Ij;
var Kj = rh.b(Y(["\ufdd0:parents", "\ufdd0:descendants", "\ufdd0:ancestors"], {"\ufdd0:parents":dh, "\ufdd0:descendants":dh, "\ufdd0:ancestors":dh})), Lj, Mj = l;
function Nj(a, b) {
  return Mj.c(O(Kj), a, b)
}
function Oj(a, b, c) {
  var e = Jb.a(b, c);
  if(!e && !(e = jd((new De("\ufdd0:ancestors")).call(l, a).call(l, b), c)) && (e = bd(c))) {
    if(e = bd(b)) {
      if(e = R(c) === R(b)) {
        for(var e = j, f = 0;;) {
          var h;
          h = (h = oa(e)) ? h : f === R(c);
          if(u(h)) {
            return e
          }
          e = Mj.c(a, b.b ? b.b(f) : b.call(l, f), c.b ? c.b(f) : c.call(l, f));
          f += 1
        }
      }else {
        return e
      }
    }else {
      return e
    }
  }else {
    return e
  }
}
Mj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Nj.call(this, a, b);
    case 3:
      return Oj.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Mj.a = Nj;
Mj.c = Oj;
Lj = Mj;
var Pj, Qj = l;
function Rj(a) {
  return Qj.a(O(Kj), a)
}
function Sj(a, b) {
  var c = B.c((new De("\ufdd0:parents")).call(l, a), b, l);
  return D(c) ? c : l
}
Qj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Rj.call(this, a);
    case 2:
      return Sj.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Qj.b = Rj;
Qj.a = Sj;
Pj = Qj;
function Tj(a, b, c, e) {
  sj.a(a, function() {
    return O(b)
  });
  sj.a(c, function() {
    return O(e)
  })
}
var Vj = function Uj(b, c, e) {
  var f = O(e).call(l, b), f = u(u(f) ? f.b ? f.b(c) : f.call(l, c) : f) ? j : l;
  if(u(f)) {
    return f
  }
  a: {
    for(f = Pj.b(c);;) {
      if(0 < R(f)) {
        Uj(b, E(f), e), f = G(f)
      }else {
        f = l;
        break a
      }
    }
    f = g
  }
  if(u(f)) {
    return f
  }
  a: {
    for(b = Pj.b(b);;) {
      if(0 < R(b)) {
        Uj(E(b), c, e), b = G(b)
      }else {
        c = l;
        break a
      }
    }
    c = g
  }
  return u(c) ? c : m
};
function Wj(a, b, c) {
  c = Vj(a, b, c);
  return u(c) ? c : Lj.a(a, b)
}
var Yj = function Xj(b, c, e, f, h, i, k) {
  var q = ta.c(function(f, i) {
    var k = S.c(i, 0, l);
    S.c(i, 1, l);
    if(Lj.c(O(e), c, k)) {
      var q;
      q = (q = f == l) ? q : Wj(k, E(f), h);
      q = u(q) ? i : f;
      u(Wj(E(q), k, h)) || d(Error([U("Multiple methods in multimethod '"), U(b), U("' match dispatch value: "), U(c), U(" -> "), U(k), U(" and "), U(E(q)), U(", and neither is preferred")].join("")));
      return q
    }
    return f
  }, l, O(f));
  if(u(q)) {
    if(Jb.a(O(k), O(e))) {
      return sj.p(i, Fc, c, sc(q)), sc(q)
    }
    Tj(i, f, k, e);
    return Xj(b, c, e, f, h, i, k)
  }
  return l
};
function Zj(a, b, c) {
  if(a ? a.Jb : a) {
    return a.Jb(a, b, c)
  }
  var e;
  var f = Zj[s(a == l ? l : a)];
  f ? e = f : (f = Zj._) ? e = f : d(w("IMultiFn.-add-method", a));
  return e.call(l, a, b, c)
}
function $j(a, b) {
  if(a ? a.Lb : a) {
    return a.Lb(0, b)
  }
  var c;
  var e = $j[s(a == l ? l : a)];
  e ? c = e : (e = $j._) ? c = e : d(w("IMultiFn.-get-method", a));
  return c.call(l, a, b)
}
function ak(a, b) {
  if(a ? a.Kb : a) {
    return a.Kb(a, b)
  }
  var c;
  var e = ak[s(a == l ? l : a)];
  e ? c = e : (e = ak._) ? c = e : d(w("IMultiFn.-dispatch", a));
  return c.call(l, a, b)
}
function bk(a, b, c, e, f, h, i, k) {
  this.name = a;
  this.Xb = b;
  this.Wb = c;
  this.Ya = e;
  this.Qa = f;
  this.Yb = h;
  this.Za = i;
  this.Ua = k;
  this.k = 4194304;
  this.r = 256
}
bk.prototype.C = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
bk.prototype.Jb = function(a, b, c) {
  sj.p(this.Qa, Fc, b, c);
  Tj(this.Za, this.Qa, this.Ua, this.Ya);
  return a
};
bk.prototype.Lb = function(a, b) {
  Jb.a(O(this.Ua), O(this.Ya)) || Tj(this.Za, this.Qa, this.Ua, this.Ya);
  var c = O(this.Za).call(l, b);
  if(u(c)) {
    return c
  }
  c = Yj(this.name, b, this.Ya, this.Qa, this.Yb, this.Za, this.Ua);
  return u(c) ? c : O(this.Qa).call(l, this.Wb)
};
bk.prototype.Kb = function(a, b) {
  var c = z.a(this.Xb, b), e = $j(a, c);
  u(e) || d(Error([U("No method in multimethod '"), U(pe), U("' for dispatch value: "), U(c)].join("")));
  return z.a(e, b)
};
function ck(a, b) {
  return ak(this, b)
}
function dk(a, b) {
  var c = l;
  t(b) && (c = K(Array.prototype.slice.call(arguments, 1), 0));
  return ak(this, c)
}
dk.n = 1;
dk.j = function(a) {
  E(a);
  a = G(a);
  return ck(0, a)
};
dk.e = ck;
bk.prototype.call = dk;
bk.prototype.apply = function(a, b) {
  return ak(this, b)
};
var ek, fk = l;
function gk(a) {
  return z.a(U, a)
}
function hk(a, b) {
  return z.a(U, bg(a, b))
}
fk = function(a, b) {
  switch(arguments.length) {
    case 1:
      return gk.call(this, a);
    case 2:
      return hk.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
fk.b = gk;
fk.a = hk;
ek = fk;
var ik, jk = l;
function kk(a, b) {
  return Dd(("" + U(a)).split(b))
}
function lk(a, b, c) {
  if(1 > c) {
    return Dd(("" + U(a)).split(b))
  }
  for(var e = Hg;;) {
    if(Jb.a(c, 1)) {
      return uc.a(e, a)
    }
    var f;
    f = b.exec(a);
    f = f == l ? l : 1 === R(f) ? E(f) : Dd(f);
    if(u(f)) {
      var h = f;
      f = a.indexOf(h);
      h = a.substring(f + R(h));
      c -= 1;
      e = uc.a(e, a.substring(0, f));
      a = h
    }else {
      return uc.a(e, a)
    }
  }
}
jk = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return kk.call(this, a, b);
    case 3:
      return lk.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
jk.a = kk;
jk.c = lk;
ik = jk;
function mk(a) {
  for(var b = a.length;;) {
    if(0 === b) {
      return""
    }
    var c = B.c(a, b - 1, l), e = Jb.a(c, "\n"), c = e ? e : Jb.a(c, "\r");
    if(u(c)) {
      b -= 1
    }else {
      return a.substring(0, b)
    }
  }
}
;function nk(a) {
  postMessage(Aj(Y(["\ufdd0:status", "\ufdd0:message"], {"\ufdd0:status":"running", "\ufdd0:message":a})))
}
function ok(a) {
  return parseInt(a)
}
var pk = wf.a("\ufdd0:acc", Cf.c(ta, function(a, b) {
  var c = T(a) ? z.a(M, a) : a, e = B.c(c, "\ufdd0:acc", l), c = B.c(c, "\ufdd0:index", l);
  return Y(["\ufdd0:index", "\ufdd0:acc"], {"\ufdd0:index":c + 1, "\ufdd0:acc":uc.a(e, Y(["\ufdd0:index", "\ufdd0:value"], {"\ufdd0:index":c, "\ufdd0:value":b}))})
}, Y(["\ufdd0:index", "\ufdd0:acc"], {"\ufdd0:index":1, "\ufdd0:acc":Hg})));
function qk(a, b) {
  return ok(a.b ? a.b(function(a) {
    return ik.a(a, /\s/)
  }.call(l, E(b))) : a.call(l, function(a) {
    return ik.a(a, /\s/)
  }.call(l, E(b)))) + 1
}
var rk, sk = rh.b(dh), tk = rh.b(dh), uk = rh.b(dh), vk = rh.b(dh), wk = B.c(dh, "\ufdd0:hierarchy", Kj);
rk = new bk("numLines-from-lines", ba(), "\ufdd0:default", wk, sk, tk, uk, vk);
Zj(rk, "\ufdd0:var", function(a, b) {
  return qk(tc, b)
});
Zj(rk, "\ufdd0:var1", function(a, b) {
  return qk(E, b)
});
Zj(rk, "\ufdd0:var2", function(a, b) {
  return(rk.a ? rk.a("\ufdd0:var", b) : rk.call(l, "\ufdd0:var", b)) + 1
});
var xk, yk = rh.b(dh), zk = rh.b(dh), Ak = rh.b(dh), Bk = rh.b(dh), Ck = B.c(Y(["\ufdd0:default"], {"\ufdd0:default":"\ufdd0:fixed"}), "\ufdd0:hierarchy", Kj);
xk = new bk("cases-from-lines", function(a) {
  return gd(a) ? "\ufdd0:var" : l
}, "\ufdd0:fixed", Ck, yk, zk, Ak, Bk);
Zj(xk, "\ufdd0:fixed", function(a, b) {
  return lg.a(a, b)
});
Zj(xk, "\ufdd0:var", function(a, b) {
  for(var c = Hg, e = b;;) {
    if(Yc(e)) {
      return c
    }
    var f = rk.a ? rk.a(a, e) : rk.call(l, a, e), f = Jg([Qf(f, e), Sf(f, e)]), e = S.c(f, 0, l), f = S.c(f, 1, l), c = uc.a(c, e), e = f
  }
});
function Dk(a, b, c) {
  var e = function(a) {
    return jg(wf.a(oa, Yc), a)
  }.call(l, ik.a(mk(c), /\n/)), c = ok(E(e)), b = pk.b ? pk.b(xk.a ? xk.a(b, G(e)) : xk.call(l, b, G(e))) : pk.call(l, xk.a ? xk.a(b, G(e)) : xk.call(l, b, G(e)));
  (e = Jb.a(c, R(b))) || d(Error([U("Assert failed: "), U(Q.e(K(["\ufdd1'isCountValid"], 0)))].join("")));
  return V.a(a, (new De("\ufdd0:rawCases")).call(l, Y(["\ufdd0:count", "\ufdd0:rawCases", "\ufdd0:isCountValid"], {"\ufdd0:count":c, "\ufdd0:rawCases":b, "\ufdd0:isCountValid":e})))
}
;function Ek(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:result", l), b = B.c(b, "\ufdd0:caseNumber", l);
  return[U("Case #"), U(b), U(": "), U(a)].join("")
}
function Fk(a, b, c) {
  a = a.b ? a.b(c) : a.call(l, c);
  b = V.a(b, a);
  return ek.a("\n", V.a(Ek, b))
}
;var Gk = Cf.c(Dk, function(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:value", l), b = B.c(b, "\ufdd0:index", l), a = Dd(V.a(Dd, a));
  return Y(["\ufdd0:caseNumber", "\ufdd0:rows"], {"\ufdd0:caseNumber":b, "\ufdd0:rows":a})
}, 4);
function Hk(a, b) {
  return tf(function(b) {
    var e = Jb.a(b, a);
    return e ? e : Jb.a(b, "T")
  }, b)
}
function Ik(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:rows", l), a = B.c(a, "\ufdd0:caseNumber", l), c;
  c = Dd(function i(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var c = E(a);
          return P(Dd(function() {
            var a = c;
            return function F(b) {
              return new W(l, m, function() {
                for(;;) {
                  if(D(b)) {
                    var c = E(b);
                    return P(c.b ? c.b(a) : c.call(l, a), F(G(b)))
                  }
                  return l
                }
              }, l)
            }(b)
          }()), i(G(a)))
        }
        return l
      }
    }, l)
  }(Qi.b(4)));
  var e;
  e = Jg([Dd(function k(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var c = E(a);
          return P((b.b ? b.b(c) : b.call(l, c)).call(l, c), k(G(a)))
        }
        return l
      }
    }, l)
  }(Qi.b(4))), Dd(function q(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var c = E(a);
          return P((b.b ? b.b(c) : b.call(l, c)).call(l, 3 - c), q(G(a)))
        }
        return l
      }
    }, l)
  }(Qi.b(4)))]);
  e = Te.e(b, c, K([e], 0));
  c = uf(Cf.a(Hk, "X"), e);
  e = uf(Cf.a(Hk, "O"), e);
  var f;
  f = tf(function(a) {
    return of.a(".", a)
  }, function x(a) {
    return new W(l, m, function() {
      for(var b = a;;) {
        if(D(b)) {
          var c = E(b);
          if(c = D(function() {
            return function aa(a) {
              return new W(l, m, function() {
                for(;;) {
                  if(D(a)) {
                    var b = E(a);
                    return P(b, aa(G(a)))
                  }
                  return l
                }
              }, l)
            }
          }(b, c)(c))) {
            return Te.a(c, x(G(b)))
          }
          b = G(b)
        }else {
          return l
        }
      }
    }, l)
  }(b));
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":u(u(c) ? c : e) ? u(c) ? "X won" : "O won" : u(f) ? "Draw" : "Game has not completed"})
}
ga("problems.tic_tac_toe_tomek.main.solve_for_input", function(a) {
  return"" + U(Fk(Gk, Ik, a))
});
var Jk = {}, Kk = Cf.c(Dk, function(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:value", l), a = B.c(a, "\ufdd0:index", l), b = S.c(b, 0, l), c = V.a(Jk.ia, ik.a(b, /\s/)), b = S.c(c, 0, l), c = S.c(c, 1, l);
  return Y(["\ufdd0:caseNumber", "\ufdd0:start", "\ufdd0:end"], {"\ufdd0:caseNumber":a, "\ufdd0:start":b, "\ufdd0:end":c})
}, 1), Lk;
a: {
  for(var Nk = V.a(function(a) {
    return a * a
  }, jg(function(a) {
    var b = Jb.a(se("" + U(a)), D("" + U(a)));
    return u(b) ? Jb.a(se("" + U(a * a)), D("" + U(a * a))) : b
  }, function Mk(b, c) {
    return P(c, new W(l, m, function() {
      return Mk(b, b.b ? b.b(c) : b.call(l, c))
    }, l))
  }(function(a) {
    return a + 1
  }, 1))), Ok = ui.e(K([0, 0], 0)), Pk = 1;;) {
    var Qk = E(Nk);
    if(1E14 < Qk) {
      Lk = Ok;
      break a
    }
    var Rk = G(Nk), Sk = Fc.c(Ok, Qk, Pk), Tk = Pk + 1, Nk = Rk, Ok = Sk, Pk = Tk
  }
  Lk = g
}
function Uk(a) {
  var b = T(a) ? z.a(M, a) : a, c = B.c(b, "\ufdd0:end", l), a = B.c(b, "\ufdd0:start", l), b = B.c(b, "\ufdd0:caseNumber", l), c = sc(E(Li.c(Lk, Ld, c))), a = sc(E(Li.c(Lk, Hd, a)));
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":c - a})
}
ga("problems.fair_and_square.main.solve_for_input", function(a) {
  return"" + U(Fk(Kk, Uk, a))
});
var Vk = Cf.c(Dk, function(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:value", l), b = B.c(b, "\ufdd0:index", l), a = Dd(function e(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var b = E(a);
          return P(Dd(pk.b ? pk.b(V.a(ok, ik.a(b, /\s/))) : pk.call(l, V.a(ok, ik.a(b, /\s/)))), e(G(a)))
        }
        return l
      }
    }, l)
  }(G(a)));
  return Y(["\ufdd0:caseNumber", "\ufdd0:rows"], {"\ufdd0:caseNumber":b, "\ufdd0:rows":a})
}, "\ufdd0:var1");
function Wk(a, b) {
  var c = T(b) ? z.a(M, b) : b, e = B.c(c, "\ufdd0:value", l), c = B.c(c, "\ufdd0:index", l);
  return tf(function(a) {
    return a <= e
  }, a.b ? a.b(c - 1) : a.call(l, c - 1))
}
function Xk(a, b) {
  var c = z.a(Pd, V.a("\ufdd0:value", b)), e = jg(function(a) {
    return(new De("\ufdd0:value")).call(l, a) < c
  }, b);
  return tf(Cf.a(Wk, a), e)
}
function Yk(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:rows", l), a = B.c(a, "\ufdd0:caseNumber", l), c;
  c = Dd(function f(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var c = E(a);
          return P(Dd(function() {
            var a = c;
            return function x(b) {
              return new W(l, m, function() {
                for(;;) {
                  if(D(b)) {
                    var c = E(b);
                    return P((new De("\ufdd0:value")).call(l, c.b ? c.b(a) : c.call(l, a)), x(G(b)))
                  }
                  return l
                }
              }, l)
            }(b)
          }()), f(G(a)))
        }
        return l
      }
    }, l)
  }(Qi.b(R(b.b ? b.b(0) : b.call(l, 0)))));
  c = tf(Cf.a(Xk, c), b) ? "YES" : "NO";
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":c})
}
ga("problems.lawnmower.main.solve_for_input", function(a) {
  return"" + U(Fk(Vk, Yk, a))
});
var Zk = Cf.c(Dk, function(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:value", l), a = B.c(a, "\ufdd0:index", l), b = S.c(b, 0, l), c = V.a(ok, ik.a(b, /\s/)), b = S.c(c, 0, l), c = S.c(c, 1, l);
  return Y(["\ufdd0:caseNumber", "\ufdd0:num-snappers", "\ufdd0:times-snapped"], {"\ufdd0:caseNumber":a, "\ufdd0:num-snappers":b, "\ufdd0:times-snapped":c})
}, 1);
function $k(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:times-snapped", l), c = B.c(b, "\ufdd0:num-snappers", l), b = B.c(b, "\ufdd0:caseNumber", l);
  a: {
    for(var e = 0;;) {
      if(0 === c) {
        c = e;
        break a
      }
      e = 2 * e + 1;
      c -= 1
    }
    c = g
  }
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":u(id((a + 1) / (c + 1))) ? "ON" : "OFF"})
}
ga("problems.snapper_chain.main.solve_for_input", function(a) {
  return"" + U(Fk(Zk, $k, a))
});
self.addEventListener("message", function(a) {
  var b = Jj(a.data), a = b.b ? b.b("problemName") : b.call(l, "problemName"), b = b.b ? b.b("input") : b.call(l, "input"), a = self.problems[a].main.solve_for_input;
  return self.postMessage(Cj(Y(["\ufdd0:status", "\ufdd0:message"], {"\ufdd0:status":"completed", "\ufdd0:message":a.b ? a.b(b) : a.call(l, b)})))
});
var al = Cf.c(Dk, function(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:value", l), a = B.c(a, "\ufdd0:index", l), c = S.c(b, 0, l), b = S.c(b, 1, l), e = V.a(ok, ik.a(c, /\s/)), c = S.c(e, 0, l), f = S.c(e, 1, l), e = S.c(e, 2, l), b = Dd(V.a(ok, ik.a(b, /\s/)));
  return Y(["\ufdd0:caseNumber", "\ufdd0:times-run", "\ufdd0:capacity", "\ufdd0:num-groups", "\ufdd0:groups"], {"\ufdd0:caseNumber":a, "\ufdd0:times-run":c, "\ufdd0:capacity":f, "\ufdd0:num-groups":e, "\ufdd0:groups":b})
}, 2);
function bl(a, b, c, e) {
  for(;;) {
    var f = B.c(a, e, l), f = b - f, h = e + 1 >= R(a) ? 0 : e + 1, i = 0 > f;
    if(u(i ? i : 0 === c)) {
      return Jg([b, e])
    }
    c -= 1;
    e = h;
    b = f
  }
}
function cl(a) {
  var b = T(a) ? z.a(M, a) : a;
  B.c(b, "\ufdd0:num-groups", l);
  var c = B.c(b, "\ufdd0:groups", l), a = B.c(b, "\ufdd0:capacity", l), e = B.c(b, "\ufdd0:times-run", l), b = B.c(b, "\ufdd0:caseNumber", l), f = Cf.p(bl, c, a, R(c)), h = rh.b(dh);
  a: {
    var i = function(a) {
      var b = B.c(O(h), a, l);
      if(u(b)) {
        return b
      }
      b = z.a(f, a);
      sj.p(h, Fc, a, b);
      return b
    }, c = function(a) {
      var b = l;
      t(a) && (b = K(Array.prototype.slice.call(arguments, 0), 0));
      return i.call(this, b)
    };
    c.n = 0;
    c.j = function(a) {
      a = D(a);
      return i(a)
    };
    c.e = i;
    for(var k = e, q = e = 0, x = dh;;) {
      if(0 === k) {
        a = e;
        break a
      }
      var y;
      var F = x, I = q;
      y = k;
      var X = e, I = F.b ? F.b(I) : F.call(l, I);
      if(u(I)) {
        var F = (new De("\ufdd0:times-to-run")).call(l, I) - y, X = X - (new De("\ufdd0:money-made")).call(l, I), I = Vd(y, F), aa = Vd(y, F);
        y = Y(["\ufdd0:loop-length", "\ufdd0:loop-money", "\ufdd0:loop-times", "\ufdd0:times-left", "\ufdd0:total-loop-money"], {"\ufdd0:loop-length":F, "\ufdd0:loop-money":X, "\ufdd0:loop-times":I, "\ufdd0:times-left":y - F * aa, "\ufdd0:total-loop-money":X * I})
      }else {
        y = l
      }
      F = y;
      F = u(F) ? of.a(0, (new De("\ufdd0:loop-times")).call(l, y)) : F;
      u(F) ? (k = y, y = T(k) ? z.a(M, k) : k, F = B.c(y, "\ufdd0:total-loop-money", l), k = B.c(y, "\ufdd0:times-left", l), B.c(y, "\ufdd0:loop-times", l), B.c(y, "\ufdd0:loop-money", l), B.c(y, "\ufdd0:loop-length", l), e = F + e) : (x = Fc.c(x, q, Y(["\ufdd0:money-made", "\ufdd0:times-to-run"], {"\ufdd0:money-made":e, "\ufdd0:times-to-run":k})), y = c.b ? c.b(q) : c.call(l, q), q = S.c(y, 0, l), y = S.c(y, 1, l), e = a - q + e, q = y, k -= 1)
    }
    a = g
  }
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":"" + U(a)})
}
ga("problems.theme_park.main.solve_for_input", function(a) {
  return"" + U(Fk(al, cl, a))
});
var dl = Cf.c(Dk, function(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:value", l), b = B.c(b, "\ufdd0:index", l), a = function e(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var b = E(a), i = P, k = ik.a(b, /\s/), b = S.c(k, 0, l), k = S.c(k, 1, l);
          return i(Y(["\ufdd0:l", "\ufdd0:r"], {"\ufdd0:l":parseInt(b), "\ufdd0:r":parseInt(k)}), e(G(a)))
        }
        return l
      }
    }, l)
  }(G(a));
  return Y(["\ufdd0:caseNumber", "\ufdd0:wires"], {"\ufdd0:caseNumber":b, "\ufdd0:wires":a})
}, "\ufdd0:var");
function el(a, b) {
  var c = S.c(a, 0, l), e = S.c(a, 1, l);
  return Yc(e) ? c : Jg([c + R(jg(function(a) {
    return(new De("\ufdd0:r")).call(l, a) < (new De("\ufdd0:r")).call(l, b)
  }, e)), G(e)])
}
function fl(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:wires", l), a = B.c(a, "\ufdd0:caseNumber", l), b = vd.a("\ufdd0:l", b), b = ta.c(el, Jg([0, G(b)]), b);
  nk([U("Completed Case #"), U(a)].join(""));
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":b})
}
ga("problems.rope_intranet.main.solve_for_input", function(a) {
  return"" + U(Fk(dl, fl, a))
});
var gl = Cf.c(Dk, function(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:value", l), b = B.c(b, "\ufdd0:index", l), a = S.c(a, 0, l);
  return Y(["\ufdd0:caseNumber", "\ufdd0:words"], {"\ufdd0:caseNumber":b, "\ufdd0:words":ik.a(a, /\s/)})
}, 1);
function hl(a) {
  var b = T(a) ? z.a(M, a) : a, a = B.c(b, "\ufdd0:words", l), b = B.c(b, "\ufdd0:caseNumber", l), a = ek.a(" ", se(a));
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":a})
}
ga("problems.reverse_words.main.solve_for_input", function(a) {
  return"" + U(Fk(gl, hl, a))
});
var il = Cf.c(Dk, function(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:value", l), a = B.c(a, "\ufdd0:index", l), c = S.c(b, 0, l);
  S.c(b, 1, l);
  b = S.c(b, 2, l);
  c = parseInt(c);
  b = pk.b ? pk.b(V.a(ok, ik.a(b, /\s/))) : pk.call(l, V.a(ok, ik.a(b, /\s/)));
  return Y(["\ufdd0:caseNumber", "\ufdd0:credit", "\ufdd0:items"], {"\ufdd0:caseNumber":a, "\ufdd0:credit":c, "\ufdd0:items":b})
}, 3);
function jl(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:items", l), c = B.c(a, "\ufdd0:credit", l), a = B.c(a, "\ufdd0:caseNumber", l), e = jg(function(a) {
    return(new De("\ufdd0:value")).call(l, a) < c
  }, b), f = c / 2, h = jg(function(a) {
    return(new De("\ufdd0:value")).call(l, a) > f
  }, e), i = jg(function(a) {
    return(new De("\ufdd0:value")).call(l, a) < f
  }, e), k = jg(function(a) {
    return Jb.a((new De("\ufdd0:value")).call(l, a), f)
  }, e), b = Jb.a(2, R(k)) ? k : E(function x(a) {
    return new W(l, m, function() {
      for(var b = a;;) {
        if(D(b)) {
          var I = E(b);
          if(I = D(function(a, b) {
            return function sa(a) {
              return new W(l, m, function() {
                for(var e = a;;) {
                  if(D(e)) {
                    var f = E(e);
                    if(Jb.a(c, (new De("\ufdd0:value")).call(l, b) + (new De("\ufdd0:value")).call(l, f))) {
                      return P(Jg([b, f]), sa(G(e)))
                    }
                    e = G(e)
                  }else {
                    return l
                  }
                }
              }, l)
            }
          }(b, I, e, f, h, i, k)(i))) {
            return Te.a(I, x(G(b)))
          }
          b = G(b)
        }else {
          return l
        }
      }
    }, l)
  }(h)), b = ek.a(" ", rd.b(V.a("\ufdd0:index", b)));
  nk([U("Completed Case #"), U(a)].join(""));
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":b})
}
ga("problems.store_credit.main.solve_for_input", function(a) {
  return"" + U(Fk(il, jl, a))
});
var kl = {}, ll = Cf.c(Dk, function(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:value", l), a = B.c(a, "\ufdd0:index", l), b = S.c(b, 0, l), c = V.a(kl.ia, ik.a(b, /\s/)), b = S.c(c, 0, l), c = S.c(c, 1, l);
  return Y(["\ufdd0:caseNumber", "\ufdd0:r", "\ufdd0:t"], {"\ufdd0:caseNumber":a, "\ufdd0:r":b, "\ufdd0:t":c})
}, 1);
function ml(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:t", l), c = B.c(a, "\ufdd0:r", l), a = B.c(a, "\ufdd0:caseNumber", l), e = c * c, f = kl.ia.b ? kl.ia.b((c + 1) / 2) : kl.ia.call(l, (c + 1) / 2);
  id(c) || d(Error([U("Argument must be an integer: "), U(c)].join("")));
  var c = 0 === (c & 1) ? 2 + f : f, b = 2 * b + e + 4 * c, f = Math.sqrt.b ? Math.sqrt.b(b) : Math.sqrt.call(l, b), h = kl.ia.b ? kl.ia.b((f + 1) / 2) : kl.ia.call(l, (f + 1) / 2), e = Y("\ufdd0:n0 \ufdd0:area0 \ufdd0:target-area \ufdd0:max-r \ufdd0:max-n \ufdd0:answer".split(" "), {"\ufdd0:n0":c, "\ufdd0:area0":e, "\ufdd0:target-area":b, "\ufdd0:max-r":f, "\ufdd0:max-n":h, "\ufdd0:answer":"" + U(kl.ia.b ? kl.ia.b(h - c) : kl.ia.call(l, h - c))});
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":(new De("\ufdd0:answer")).call(l, e)})
}
ga("problems.bullseye.main.solve_for_input", function(a) {
  return"" + U(Fk(ll, ml, a))
});
var nl = Cf.c(Dk, function(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:value", l), a = B.c(a, "\ufdd0:index", l), c = G(b), b = V.a(ok, ik.a(E(c), /\s/)), c = function f(a) {
    return new W(l, m, function() {
      for(;;) {
        if(D(a)) {
          var b = E(a), c = P, q = V.a(ok, ik.a(b, /\s/)), b = S.c(q, 0, l);
          S.c(q, 1, l);
          var x;
          a: {
            x = 2;
            for(q = D(q);;) {
              var y = q;
              if(u(y ? 0 < x : y)) {
                x -= 1, q = J(q)
              }else {
                x = q;
                break a
              }
            }
            x = g
          }
          return c(Y(["\ufdd0:lockType", "\ufdd0:keysInside"], {"\ufdd0:lockType":b, "\ufdd0:keysInside":x}), f(G(a)))
        }
        return l
      }
    }, l)
  }(G(c));
  return Y(["\ufdd0:caseNumber", "\ufdd0:keysList", "\ufdd0:chests"], {"\ufdd0:caseNumber":a, "\ufdd0:keysList":b, "\ufdd0:chests":z.c(Gi, function(a, b) {
    return kd((new De("\ufdd0:index")).call(l, a), (new De("\ufdd0:index")).call(l, b))
  }, pk.b ? pk.b(c) : pk.call(l, c))})
}, "\ufdd0:var2"), ol = Cf.a(ta, function(a, b) {
  var c = B.c(a, b, l);
  return u(c) ? Fc.c(a, b, c + 1) : Fc.c(a, b, 1)
}), ql = function pl(b, c) {
  var e;
  e = (e = Yc(b)) ? e : Yc(c);
  return u(e) ? Yc(c) ? new W(l, m, function() {
    return Jg([m])
  }, l) : l : dg.a(function(e) {
    var h = T(e) ? z.a(M, e) : e, i = B.c(h, "\ufdd0:value", l), e = B.c(h, "\ufdd0:index", l), k = T(i) ? z.a(M, i) : i, i = B.c(k, "\ufdd0:keysInside", l), k = B.c(k, "\ufdd0:lockType", l);
    if(u(b.b ? b.b(k) : b.call(l, k))) {
      var q = B.c(b, k, l), k = Jb.a(1, q) ? Jc.a(b, k) : Fc.c(b, k, q - 1), i = ol.a ? ol.a(k, i) : ol.call(l, k, i), h = Oc.a(c, h), k = pl(i, h);
      return D(k) ? P(e, pl(i, h)) : l
    }
    return l
  }, c)
};
function rl(a) {
  var a = T(a) ? z.a(M, a) : a, b = B.c(a, "\ufdd0:chests", l), c = B.c(a, "\ufdd0:keysList", l), a = B.c(a, "\ufdd0:caseNumber", l), c = ol.a ? ol.a(dh, c) : ol.call(l, dh, c), b = ql(c, b), b = Ji(vf, b), b = D(b) ? ek.a(" ", b) : "IMPOSSIBLE";
  return Y(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":b})
}
ga("problems.treasure.main.solve_for_input", function(a) {
  return"" + U(Fk(nl, rl, a))
});
