function e(a) {
  throw a;
}
var g = void 0, j = !0, k = null, l = !1;
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
function da(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && s(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function t(a) {
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
function s(a) {
  return a !== g
}
function ea(a) {
  return"string" == typeof a
}
var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ha = 0;
function ia(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var ja = Array.prototype;
function ka(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function la(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, m, q, v, C, I) {
    if("%" == v) {
      return"%"
    }
    var E = c.shift();
    "undefined" == typeof E && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = E;
    return la.ia[v].apply(k, arguments)
  })
}
la.ia = {};
la.ia.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
la.ia.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
la.ia.d = function(a, b, c, d, f, h, i, m) {
  return la.ia.f(parseInt(a, 10), b, c, d, 0, h, i, m)
};
la.ia.i = la.ia.d;
la.ia.u = la.ia.d;
function ma(a, b) {
  a != k && this.append.apply(this, arguments)
}
ma.prototype.Ca = "";
ma.prototype.append = function(a, b, c) {
  this.Ca += a;
  if(b != k) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ca += arguments[d]
    }
  }
  return this
};
ma.prototype.toString = n("Ca");
var u;
function w(a) {
  return a != k && a !== l
}
function x(a, b) {
  return a[t(b == k ? k : b)] ? j : a._ ? j : l
}
function y(a, b) {
  return Error(["No protocol method ", a, " defined for type ", t(b), ": ", b].join(""))
}
function na(a) {
  return Array.prototype.slice.call(arguments)
}
var oa, pa = k, pa = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return pa.a(b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
pa.a = function(a) {
  return Array(a)
};
pa.b = function(a, b) {
  return pa.a(b)
};
oa = pa;
var z = g, qa = g, ra = {};
function sa(a) {
  if(a ? a.K : a) {
    return a.K(a)
  }
  var b;
  var c = sa[t(a == k ? k : a)];
  c ? b = c : (c = sa._) ? b = c : e(y("ICounted.-count", a));
  return b.call(k, a)
}
function ta(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  var c = ta[t(a == k ? k : a)];
  c ? b = c : (c = ta._) ? b = c : e(y("IEmptyableCollection.-empty", a));
  return b.call(k, a)
}
var ua = {};
function wa(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = wa[t(a == k ? k : a)];
  d ? c = d : (d = wa._) ? c = d : e(y("ICollection.-conj", a));
  return c.call(k, a, b)
}
var ya = {}, A, za = k;
function Aa(a, b) {
  if(a ? a.W : a) {
    return a.W(a, b)
  }
  var c;
  var d = A[t(a == k ? k : a)];
  d ? c = d : (d = A._) ? c = d : e(y("IIndexed.-nth", a));
  return c.call(k, a, b)
}
function Ba(a, b, c) {
  if(a ? a.R : a) {
    return a.R(a, b, c)
  }
  var d;
  var f = A[t(a == k ? k : a)];
  f ? d = f : (f = A._) ? d = f : e(y("IIndexed.-nth", a));
  return d.call(k, a, b, c)
}
za = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Aa.call(this, a, b);
    case 3:
      return Ba.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
za.b = Aa;
za.c = Ba;
A = za;
var Ca = {}, Da = {};
function B(a) {
  if(a ? a.X : a) {
    return a.X(a)
  }
  var b;
  var c = B[t(a == k ? k : a)];
  c ? b = c : (c = B._) ? b = c : e(y("ISeq.-first", a));
  return b.call(k, a)
}
function D(a) {
  if(a ? a.U : a) {
    return a.U(a)
  }
  var b;
  var c = D[t(a == k ? k : a)];
  c ? b = c : (c = D._) ? b = c : e(y("ISeq.-rest", a));
  return b.call(k, a)
}
var Ea = {};
function Fa(a) {
  if(a ? a.pa : a) {
    return a.pa(a)
  }
  var b;
  var c = Fa[t(a == k ? k : a)];
  c ? b = c : (c = Fa._) ? b = c : e(y("INext.-next", a));
  return b.call(k, a)
}
var F, Ga = k;
function Ha(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  var d = F[t(a == k ? k : a)];
  d ? c = d : (d = F._) ? c = d : e(y("ILookup.-lookup", a));
  return c.call(k, a, b)
}
function Ia(a, b, c) {
  if(a ? a.w : a) {
    return a.w(a, b, c)
  }
  var d;
  var f = F[t(a == k ? k : a)];
  f ? d = f : (f = F._) ? d = f : e(y("ILookup.-lookup", a));
  return d.call(k, a, b, c)
}
Ga = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ha.call(this, a, b);
    case 3:
      return Ia.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ga.b = Ha;
Ga.c = Ia;
F = Ga;
function Ja(a, b, c) {
  if(a ? a.V : a) {
    return a.V(a, b, c)
  }
  var d;
  var f = Ja[t(a == k ? k : a)];
  f ? d = f : (f = Ja._) ? d = f : e(y("IAssociative.-assoc", a));
  return d.call(k, a, b, c)
}
var Ka = {}, La = {};
function Ma(a) {
  if(a ? a.Ja : a) {
    return a.Ja(a)
  }
  var b;
  var c = Ma[t(a == k ? k : a)];
  c ? b = c : (c = Ma._) ? b = c : e(y("IMapEntry.-key", a));
  return b.call(k, a)
}
function Na(a) {
  if(a ? a.Ka : a) {
    return a.Ka(a)
  }
  var b;
  var c = Na[t(a == k ? k : a)];
  c ? b = c : (c = Na._) ? b = c : e(y("IMapEntry.-val", a));
  return b.call(k, a)
}
function Oa(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = Oa[t(a == k ? k : a)];
  c ? b = c : (c = Oa._) ? b = c : e(y("IStack.-peek", a));
  return b.call(k, a)
}
var Pa = {};
function Qa(a) {
  if(a ? a.Sa : a) {
    return a.Sa(a)
  }
  var b;
  var c = Qa[t(a == k ? k : a)];
  c ? b = c : (c = Qa._) ? b = c : e(y("IDeref.-deref", a));
  return b.call(k, a)
}
var Ra = {};
function Sa(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Sa[t(a == k ? k : a)];
  c ? b = c : (c = Sa._) ? b = c : e(y("IMeta.-meta", a));
  return b.call(k, a)
}
function Ta(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Ta[t(a == k ? k : a)];
  d ? c = d : (d = Ta._) ? c = d : e(y("IWithMeta.-with-meta", a));
  return c.call(k, a, b)
}
var Ua = {}, Va, Wa = k;
function Xa(a, b) {
  if(a ? a.ta : a) {
    return a.ta(a, b)
  }
  var c;
  var d = Va[t(a == k ? k : a)];
  d ? c = d : (d = Va._) ? c = d : e(y("IReduce.-reduce", a));
  return c.call(k, a, b)
}
function Ya(a, b, c) {
  if(a ? a.ua : a) {
    return a.ua(a, b, c)
  }
  var d;
  var f = Va[t(a == k ? k : a)];
  f ? d = f : (f = Va._) ? d = f : e(y("IReduce.-reduce", a));
  return d.call(k, a, b, c)
}
Wa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Xa.call(this, a, b);
    case 3:
      return Ya.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wa.b = Xa;
Wa.c = Ya;
Va = Wa;
function Za(a, b) {
  if(a ? a.z : a) {
    return a.z(a, b)
  }
  var c;
  var d = Za[t(a == k ? k : a)];
  d ? c = d : (d = Za._) ? c = d : e(y("IEquiv.-equiv", a));
  return c.call(k, a, b)
}
function $a(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  var c = $a[t(a == k ? k : a)];
  c ? b = c : (c = $a._) ? b = c : e(y("IHash.-hash", a));
  return b.call(k, a)
}
function ab(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = ab[t(a == k ? k : a)];
  c ? b = c : (c = ab._) ? b = c : e(y("ISeqable.-seq", a));
  return b.call(k, a)
}
var bb = {}, cb = {};
function db(a) {
  if(a ? a.La : a) {
    return a.La(a)
  }
  var b;
  var c = db[t(a == k ? k : a)];
  c ? b = c : (c = db._) ? b = c : e(y("IReversible.-rseq", a));
  return b.call(k, a)
}
var eb = {};
function fb(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = fb[t(a == k ? k : a)];
  d ? c = d : (d = fb._) ? c = d : e(y("IPrintable.-pr-seq", a));
  return c.call(k, a, b)
}
function G(a, b) {
  if(a ? a.tb : a) {
    return a.tb(0, b)
  }
  var c;
  var d = G[t(a == k ? k : a)];
  d ? c = d : (d = G._) ? c = d : e(y("IWriter.-write", a));
  return c.call(k, a, b)
}
function hb(a) {
  if(a ? a.Bb : a) {
    return k
  }
  var b;
  var c = hb[t(a == k ? k : a)];
  c ? b = c : (c = hb._) ? b = c : e(y("IWriter.-flush", a));
  return b.call(k, a)
}
var ib = {};
function jb(a, b, c) {
  if(a ? a.A : a) {
    return a.A(a, b, c)
  }
  var d;
  var f = jb[t(a == k ? k : a)];
  f ? d = f : (f = jb._) ? d = f : e(y("IPrintWithWriter.-pr-writer", a));
  return d.call(k, a, b, c)
}
var kb = {};
function lb(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = lb[t(a == k ? k : a)];
  c ? b = c : (c = lb._) ? b = c : e(y("IEditableCollection.-as-transient", a));
  return b.call(k, a)
}
function mb(a, b) {
  if(a ? a.Ea : a) {
    return a.Ea(a, b)
  }
  var c;
  var d = mb[t(a == k ? k : a)];
  d ? c = d : (d = mb._) ? c = d : e(y("ITransientCollection.-conj!", a));
  return c.call(k, a, b)
}
function nb(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var b;
  var c = nb[t(a == k ? k : a)];
  c ? b = c : (c = nb._) ? b = c : e(y("ITransientCollection.-persistent!", a));
  return b.call(k, a)
}
function ob(a, b, c) {
  if(a ? a.wa : a) {
    return a.wa(a, b, c)
  }
  var d;
  var f = ob[t(a == k ? k : a)];
  f ? d = f : (f = ob._) ? d = f : e(y("ITransientAssociative.-assoc!", a));
  return d.call(k, a, b, c)
}
var pb = {};
function qb(a, b) {
  if(a ? a.qb : a) {
    return a.qb(a, b)
  }
  var c;
  var d = qb[t(a == k ? k : a)];
  d ? c = d : (d = qb._) ? c = d : e(y("IComparable.-compare", a));
  return c.call(k, a, b)
}
function rb(a) {
  if(a ? a.ob : a) {
    return a.ob()
  }
  var b;
  var c = rb[t(a == k ? k : a)];
  c ? b = c : (c = rb._) ? b = c : e(y("IChunk.-drop-first", a));
  return b.call(k, a)
}
var sb = {};
function tb(a) {
  if(a ? a.Ra : a) {
    return a.Ra(a)
  }
  var b;
  var c = tb[t(a == k ? k : a)];
  c ? b = c : (c = tb._) ? b = c : e(y("IChunkedSeq.-chunked-first", a));
  return b.call(k, a)
}
function ub(a) {
  if(a ? a.Ia : a) {
    return a.Ia(a)
  }
  var b;
  var c = ub[t(a == k ? k : a)];
  c ? b = c : (c = ub._) ? b = c : e(y("IChunkedSeq.-chunked-rest", a));
  return b.call(k, a)
}
function H(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 32, b = w(b ? b : a.Db) ? j : a.j ? l : x(Ca, a)) : b = x(Ca, a);
    a = w(b) ? a : ab(a)
  }
  return a
}
function J(a) {
  if(a == k) {
    return k
  }
  var b;
  a ? (b = a.j & 64, b = w(b ? b : a.Ta) ? j : a.j ? l : x(Da, a)) : b = x(Da, a);
  if(w(b)) {
    return B(a)
  }
  a = H(a);
  return a == k ? k : B(a)
}
function K(a) {
  if(a != k) {
    var b;
    a ? (b = a.j & 64, b = w(b ? b : a.Ta) ? j : a.j ? l : x(Da, a)) : b = x(Da, a);
    if(w(b)) {
      return D(a)
    }
    a = H(a);
    return a != k ? D(a) : L
  }
  return L
}
function M(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 128, b = w(b ? b : a.Jb) ? j : a.j ? l : x(Ea, a)) : b = x(Ea, a);
    a = w(b) ? Fa(a) : H(K(a))
  }
  return a
}
var vb, wb = k;
function xb(a, b) {
  var c = a === b;
  return c ? c : Za(a, b)
}
function yb(a, b, c) {
  for(;;) {
    if(w(wb.b(a, b))) {
      if(M(c)) {
        a = b, b = J(c), c = M(c)
      }else {
        return wb.b(b, J(c))
      }
    }else {
      return l
    }
  }
}
function zb(a, b, c) {
  var d = k;
  s(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return yb.call(this, a, b, d)
}
zb.o = 2;
zb.k = function(a) {
  var b = J(a), c = J(M(a)), a = K(M(a));
  return yb(b, c, a)
};
zb.g = yb;
wb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return xb.call(this, a, b);
    default:
      return zb.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
wb.o = 2;
wb.k = zb.k;
wb.a = p(j);
wb.b = xb;
wb.g = zb.g;
vb = wb;
function Ab(a, b) {
  return b instanceof a
}
var Bb = g, P = g, Cb = g;
$a["null"] = p(0);
var Db = k, Db = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
F["null"] = Db;
Ja["null"] = function(a, b, c) {
  return Bb.b ? Bb.b(b, c) : Bb.call(k, b, c)
};
Ea["null"] = j;
Fa["null"] = p(k);
ib["null"] = j;
jb["null"] = function(a, b) {
  return G(b, "nil")
};
ua["null"] = j;
wa["null"] = function(a, b) {
  return P.a ? P.a(b) : P.call(k, b)
};
Ua["null"] = j;
var Eb = k, Eb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.t ? b.t() : b.call(k);
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
Va["null"] = Eb;
eb["null"] = j;
fb["null"] = function() {
  return P.a ? P.a("nil") : P.call(k, "nil")
};
ra["null"] = j;
sa["null"] = p(0);
Oa["null"] = p(k);
Da["null"] = j;
B["null"] = p(k);
D["null"] = function() {
  return P.t ? P.t() : P.call(k)
};
Za["null"] = function(a, b) {
  return b == k
};
Ta["null"] = p(k);
Ra["null"] = j;
Sa["null"] = p(k);
ya["null"] = j;
var Fb = k, Fb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
A["null"] = Fb;
ta["null"] = p(k);
Ka["null"] = j;
Date.prototype.z = function(a, b) {
  var c = Ab(Date, b);
  return c ? a.toString() === b.toString() : c
};
$a.number = function(a) {
  return Math.floor(a) % 2147483647
};
Za.number = function(a, b) {
  return a === b
};
$a["boolean"] = function(a) {
  return a === j ? 1 : 0
};
var Q = g;
Ta["function"] = function(a, b) {
  return Q.b ? Q.b(function() {
    if(g === u) {
      u = {};
      u = function(a, b, c) {
        this.l = a;
        this.qa = b;
        this.ib = c;
        this.r = 0;
        this.j = 393217
      };
      u.aa = j;
      u.fa = function() {
        return P.a ? P.a("cljs.core/t3155") : P.call(k, "cljs.core/t3155")
      };
      u.ga = function(a, b) {
        return G(b, "cljs.core/t3155")
      };
      var c = function(a, b) {
        return z.b ? z.b(a.qa, b) : z.call(k, a.qa, b)
      }, d = function(a, b) {
        var a = this, d = k;
        s(b) && (d = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.k = function(a) {
        var b = J(a), a = K(a);
        return c(b, a)
      };
      d.g = c;
      u.prototype.call = d;
      u.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      u.prototype.G = n("ib");
      u.prototype.I = function(a, b) {
        return new u(this.l, this.qa, b)
      }
    }
    return new u(b, a, k)
  }(), b) : Q.call(k, function() {
    if(g === u) {
      u = function(a, b, c) {
        this.l = a;
        this.qa = b;
        this.ib = c;
        this.r = 0;
        this.j = 393217
      };
      u.aa = j;
      u.fa = function() {
        return P.a ? P.a("cljs.core/t3155") : P.call(k, "cljs.core/t3155")
      };
      u.ga = function(a, b) {
        return G(b, "cljs.core/t3155")
      };
      var c = function(a, b) {
        return z.b ? z.b(a.qa, b) : z.call(k, a.qa, b)
      }, d = function(a, b) {
        var a = this, d = k;
        s(b) && (d = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.k = function(a) {
        var b = J(a), a = K(a);
        return c(b, a)
      };
      d.g = c;
      u.prototype.call = d;
      u.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      u.prototype.G = n("ib");
      u.prototype.I = function(a, b) {
        return new u(this.l, this.qa, b)
      }
    }
    return new u(b, a, k)
  }(), b)
};
Ra["function"] = j;
Sa["function"] = p(k);
$a._ = function(a) {
  return a[fa] || (a[fa] = ++ha)
};
var S = g;
function Gb(a) {
  this.n = a;
  this.r = 0;
  this.j = 32768
}
Gb.prototype.Sa = n("n");
var Hb, Ib = k;
function Jb(a, b) {
  var c = sa(a);
  if(0 === c) {
    return b.t ? b.t() : b.call(k)
  }
  for(var d = A.b(a, 0), f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, A.b(a, f)) : b.call(k, d, A.b(a, f));
      if(Ab(Gb, d)) {
        return S.a ? S.a(d) : S.call(k, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Kb(a, b, c) {
  for(var d = sa(a), f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, A.b(a, f)) : b.call(k, c, A.b(a, f));
      if(Ab(Gb, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Lb(a, b, c, d) {
  for(var f = sa(a);;) {
    if(d < f) {
      c = b.b ? b.b(c, A.b(a, d)) : b.call(k, c, A.b(a, d));
      if(Ab(Gb, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Ib = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Jb.call(this, a, b);
    case 3:
      return Kb.call(this, a, b, c);
    case 4:
      return Lb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ib.b = Jb;
Ib.c = Kb;
Ib.q = Lb;
Hb = Ib;
var Mb, Nb = k;
function Ob(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.t ? b.t() : b.call(k)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, a[f]) : b.call(k, d, a[f]);
      if(Ab(Gb, d)) {
        return S.a ? S.a(d) : S.call(k, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Pb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, a[f]) : b.call(k, c, a[f]);
      if(Ab(Gb, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Qb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.b ? b.b(c, a[d]) : b.call(k, c, a[d]);
      if(Ab(Gb, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Nb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Ob.call(this, a, b);
    case 3:
      return Pb.call(this, a, b, c);
    case 4:
      return Qb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nb.b = Ob;
Nb.c = Pb;
Nb.q = Qb;
Mb = Nb;
var Rb = g, T = g, U = g, Sb = g;
function Tb(a) {
  if(a) {
    var b = a.j & 2, a = w(b ? b : a.Gb) ? j : a.j ? l : x(ra, a)
  }else {
    a = x(ra, a)
  }
  return a
}
function Ub(a) {
  if(a) {
    var b = a.j & 16, a = w(b ? b : a.rb) ? j : a.j ? l : x(ya, a)
  }else {
    a = x(ya, a)
  }
  return a
}
function Vb(a, b) {
  this.Q = a;
  this.p = b;
  this.r = 0;
  this.j = 166199550
}
r = Vb.prototype;
r.F = function(a) {
  return Rb.a ? Rb.a(a) : Rb.call(k, a)
};
r.pa = function() {
  return this.p + 1 < this.Q.length ? new Vb(this.Q, this.p + 1) : k
};
r.D = function(a, b) {
  return T.b ? T.b(b, a) : T.call(k, b, a)
};
r.La = function(a) {
  var b = a.K(a);
  return 0 < b ? new Sb(a, b - 1, k) : L
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.ta = function(a, b) {
  return Tb(this.Q) ? Hb.q(this.Q, b, this.Q[this.p], this.p + 1) : Hb.q(a, b, this.Q[this.p], 0)
};
r.ua = function(a, b, c) {
  return Tb(this.Q) ? Hb.q(this.Q, b, c, this.p) : Hb.q(a, b, c, 0)
};
r.O = ba();
r.K = function() {
  return this.Q.length - this.p
};
r.X = function() {
  return this.Q[this.p]
};
r.U = function() {
  return this.p + 1 < this.Q.length ? new Vb(this.Q, this.p + 1) : P.t ? P.t() : P.call(k)
};
r.z = function(a, b) {
  return Cb.b ? Cb.b(a, b) : Cb.call(k, a, b)
};
r.W = function(a, b) {
  var c = b + this.p;
  return c < this.Q.length ? this.Q[c] : k
};
r.R = function(a, b, c) {
  a = b + this.p;
  return a < this.Q.length ? this.Q[a] : c
};
r.L = function() {
  return L
};
var Wb, Xb = k;
function Yb(a) {
  return Xb.b(a, 0)
}
function Zb(a, b) {
  return b < a.length ? new Vb(a, b) : k
}
Xb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Yb.call(this, a);
    case 2:
      return Zb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xb.a = Yb;
Xb.b = Zb;
Wb = Xb;
var O, $b = k;
function ac(a) {
  return Wb.b(a, 0)
}
function bc(a, b) {
  return Wb.b(a, b)
}
$b = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ac.call(this, a);
    case 2:
      return bc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$b.a = ac;
$b.b = bc;
O = $b;
Ua.array = j;
var cc = k, cc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Hb.b(a, b);
    case 3:
      return Hb.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Va.array = cc;
var dc = k, dc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return A.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
F.array = dc;
ya.array = j;
var ec = k, ec = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : k;
    case 3:
      return b < a.length ? a[b] : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
A.array = ec;
ra.array = j;
sa.array = function(a) {
  return a.length
};
ab.array = function(a) {
  return O.b(a, 0)
};
Q = g;
Sb = function(a, b, c) {
  this.Pa = a;
  this.p = b;
  this.l = c;
  this.r = 0;
  this.j = 31850574
};
Sb.aa = j;
Sb.fa = function() {
  return P.a ? P.a("cljs.core/RSeq") : P.call(k, "cljs.core/RSeq")
};
Sb.ga = function(a, b) {
  return G(b, "cljs.core/RSeq")
};
r = Sb.prototype;
r.F = function(a) {
  return Rb.a ? Rb.a(a) : Rb.call(k, a)
};
r.D = function(a, b) {
  return T.b ? T.b(b, a) : T.call(k, b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = ba();
r.K = function() {
  return this.p + 1
};
r.X = function() {
  return A.b(this.Pa, this.p)
};
r.U = function() {
  return 0 < this.p ? new Sb(this.Pa, this.p - 1, k) : L
};
r.z = function(a, b) {
  return Cb.b ? Cb.b(a, b) : Cb.call(k, a, b)
};
r.I = function(a, b) {
  return new Sb(this.Pa, this.p, b)
};
r.G = n("l");
r.L = function() {
  return Q.b ? Q.b(L, this.l) : Q.call(k, L, this.l)
};
Za._ = function(a, b) {
  return a === b
};
var fc, gc = k;
function hc(a, b, c) {
  for(;;) {
    if(w(c)) {
      a = gc.b(a, b), b = J(c), c = M(c)
    }else {
      return gc.b(a, b)
    }
  }
}
function ic(a, b, c) {
  var d = k;
  s(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return hc.call(this, a, b, d)
}
ic.o = 2;
ic.k = function(a) {
  var b = J(a), c = J(M(a)), a = K(M(a));
  return hc(b, c, a)
};
ic.g = hc;
gc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wa(a, b);
    default:
      return ic.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
gc.o = 2;
gc.k = ic.k;
gc.b = function(a, b) {
  return wa(a, b)
};
gc.g = ic.g;
fc = gc;
function jc(a) {
  if(Tb(a)) {
    a = sa(a)
  }else {
    a: {
      for(var a = H(a), b = 0;;) {
        if(Tb(a)) {
          a = b + sa(a);
          break a
        }
        a = M(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var kc, lc = k;
function mc(a, b) {
  for(;;) {
    a == k && e(Error("Index out of bounds"));
    if(0 === b) {
      if(H(a)) {
        return J(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Ub(a)) {
      return A.b(a, b)
    }
    if(H(a)) {
      var c = M(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function nc(a, b, c) {
  for(;;) {
    if(a == k) {
      return c
    }
    if(0 === b) {
      return H(a) ? J(a) : c
    }
    if(Ub(a)) {
      return A.c(a, b, c)
    }
    if(H(a)) {
      a = M(a), b -= 1
    }else {
      return c
    }
  }
}
lc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return mc.call(this, a, b);
    case 3:
      return nc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lc.b = mc;
lc.c = nc;
kc = lc;
var oc, pc = k;
function qc(a, b) {
  var c;
  a == k ? c = k : (a ? (c = a.j & 16, c = w(c ? c : a.rb) ? j : a.j ? l : x(ya, a)) : c = x(ya, a), c = w(c) ? A.b(a, Math.floor(b)) : kc.b(a, Math.floor(b)));
  return c
}
function rc(a, b, c) {
  if(a != k) {
    var d;
    a ? (d = a.j & 16, d = w(d ? d : a.rb) ? j : a.j ? l : x(ya, a)) : d = x(ya, a);
    a = w(d) ? A.c(a, Math.floor(b), c) : kc.c(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
pc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return qc.call(this, a, b);
    case 3:
      return rc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
pc.b = qc;
pc.c = rc;
oc = pc;
var sc, tc = k;
function uc(a, b, c, d) {
  for(;;) {
    if(a = tc.c(a, b, c), w(d)) {
      b = J(d), c = J(M(d)), d = M(M(d))
    }else {
      return a
    }
  }
}
function vc(a, b, c, d) {
  var f = k;
  s(d) && (f = O(Array.prototype.slice.call(arguments, 3), 0));
  return uc.call(this, a, b, c, f)
}
vc.o = 3;
vc.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), a = K(M(M(a)));
  return uc(b, c, d, a)
};
vc.g = uc;
tc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return Ja(a, b, c);
    default:
      return vc.g(a, b, c, O(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
tc.o = 3;
tc.k = vc.k;
tc.c = function(a, b, c) {
  return Ja(a, b, c)
};
tc.g = vc.g;
sc = tc;
Q = function(a, b) {
  return Ta(a, b)
};
function wc(a) {
  var b;
  a ? (b = a.j & 131072, b = w(b ? b : a.sb) ? j : a.j ? l : x(Ra, a)) : b = x(Ra, a);
  return w(b) ? Sa(a) : k
}
var xc = {}, yc = 0, zc, Ac = k;
function Bc(a) {
  return Ac.b(a, j)
}
function Cc(a, b) {
  var c;
  c = ea(a);
  w(c ? b : c) ? (255 < yc && (xc = {}, yc = 0), c = xc[a], c == k && (c = ia(a), xc[a] = c, yc += 1)) : c = $a(a);
  return c
}
Ac = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Bc.call(this, a);
    case 2:
      return Cc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ac.a = Bc;
Ac.b = Cc;
zc = Ac;
function Dc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 8, a = w(b ? b : a.Fb) ? j : a.j ? l : x(ua, a)
    }else {
      a = x(ua, a)
    }
  }
  return a
}
function Ec(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 1024, a = w(b ? b : a.Ib) ? j : a.j ? l : x(Ka, a)
    }else {
      a = x(Ka, a)
    }
  }
  return a
}
function Fc(a) {
  if(a) {
    var b = a.j & 16384, a = w(b ? b : a.Mb) ? j : a.j ? l : x(Pa, a)
  }else {
    a = x(Pa, a)
  }
  return a
}
function Gc(a) {
  if(a) {
    var b = a.r & 512, a = w(b ? b : a.Eb) ? j : a.r ? l : x(sb, a)
  }else {
    a = x(sb, a)
  }
  return a
}
function Hc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Ic = {};
function Jc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 64, a = w(b ? b : a.Ta) ? j : a.j ? l : x(Da, a)
    }else {
      a = x(Da, a)
    }
  }
  return a
}
function Kc(a) {
  var b = ea(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = w(b ? b : "\ufdd1" === a.charAt(0)) ? l : j) : a = b;
  return a
}
function Lc(a) {
  var b = ea(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Mc(a) {
  var b = ea(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Nc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == k) {
    return-1
  }
  if(b == k) {
    return 1
  }
  if((a == k ? k : a.constructor) === (b == k ? k : b.constructor)) {
    var c;
    a ? (c = a.r & 2048, c = w(c ? c : a.ub) ? j : a.r ? l : x(pb, a)) : c = x(pb, a);
    return w(c) ? qb(a, b) : ka(a, b)
  }
  e(Error("compare on non-nil objects of different types"))
}
var Oc, Pc = k;
function Qc(a, b) {
  var c = jc(a), d = jc(b);
  return c < d ? -1 : c > d ? 1 : Pc.q(a, b, c, 0)
}
function Rc(a, b, c, d) {
  for(;;) {
    var f = Nc(oc.b(a, d), oc.b(b, d)), h = 0 === f;
    if(w(h ? d + 1 < c : h)) {
      d += 1
    }else {
      return f
    }
  }
}
Pc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Qc.call(this, a, b);
    case 4:
      return Rc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pc.b = Qc;
Pc.q = Rc;
Oc = Pc;
var Sc = g, Tc, Vc = k;
function Wc(a) {
  return Vc.b(Nc, a)
}
function Xc(a, b) {
  if(H(b)) {
    var c = Sc.a ? Sc.a(b) : Sc.call(k, b), d;
    d = vb.b(a, Nc) ? Nc : function(b, c) {
      var d = a.b ? a.b(b, c) : a.call(k, b, c);
      return"number" == typeof d ? d : w(d) ? -1 : w(a.b ? a.b(c, b) : a.call(k, c, b)) ? 1 : 0
    };
    for(var f = 0;f < c.length;f++) {
      c[f] = {index:f, value:c[f]}
    }
    var h = d || ka;
    ja.sort.call(c, function(a, b) {
      return h(a.value, b.value) || a.index - b.index
    } || ka);
    for(f = 0;f < c.length;f++) {
      c[f] = c[f].value
    }
    return H(c)
  }
  return L
}
Vc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Wc.call(this, a);
    case 2:
      return Xc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vc.a = Wc;
Vc.b = Xc;
Tc = Vc;
var Yc, Zc = k;
function $c(a, b) {
  var c = H(b);
  return c ? qa.c ? qa.c(a, J(c), M(c)) : qa.call(k, a, J(c), M(c)) : a.t ? a.t() : a.call(k)
}
function ad(a, b, c) {
  for(c = H(c);;) {
    if(c) {
      b = a.b ? a.b(b, J(c)) : a.call(k, b, J(c));
      if(Ab(Gb, b)) {
        return S.a ? S.a(b) : S.call(k, b)
      }
      c = M(c)
    }else {
      return b
    }
  }
}
Zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return $c.call(this, a, b);
    case 3:
      return ad.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zc.b = $c;
Zc.c = ad;
Yc = Zc;
var bd = g, cd = k;
function dd(a, b) {
  var c;
  b ? (c = b.j & 524288, c = w(c ? c : b.Ab) ? j : b.j ? l : x(Ua, b)) : c = x(Ua, b);
  return w(c) ? Va.b(b, a) : Yc.b(a, b)
}
function ed(a, b, c) {
  var d;
  c ? (d = c.j & 524288, d = w(d ? d : c.Ab) ? j : c.j ? l : x(Ua, c)) : d = x(Ua, c);
  return w(d) ? Va.c(c, a, b) : Yc.c(a, b, c)
}
cd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return dd.call(this, a, b);
    case 3:
      return ed.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cd.b = dd;
cd.c = ed;
qa = cd;
function fd(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.a ? Math.floor.a((a - a % 2) / 2) : Math.floor.call(k, (a - a % 2) / 2) : Math.ceil.a ? Math.ceil.a((a - a % 2) / 2) : Math.ceil.call(k, (a - a % 2) / 2)
}
function gd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var hd, id = k;
function jd(a) {
  return a == k ? "" : a.toString()
}
function kd(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(id.a(J(b))), h = M(b), a = f, b = h
      }else {
        return id.a(a)
      }
    }
  }.call(k, new ma(id.a(a)), b)
}
function ld(a, b) {
  var c = k;
  s(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return kd.call(this, a, c)
}
ld.o = 1;
ld.k = function(a) {
  var b = J(a), a = K(a);
  return kd(b, a)
};
ld.g = kd;
id = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return jd.call(this, a);
    default:
      return ld.g(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
id.o = 1;
id.k = ld.k;
id.t = p("");
id.a = jd;
id.g = ld.g;
hd = id;
var V, md = k;
function nd(a) {
  return Mc(a) ? a.substring(2, a.length) : Lc(a) ? hd.g(":", O([a.substring(2, a.length)], 0)) : a == k ? "" : a.toString()
}
function od(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(md.a(J(b))), h = M(b), a = f, b = h
      }else {
        return hd.a(a)
      }
    }
  }.call(k, new ma(md.a(a)), b)
}
function pd(a, b) {
  var c = k;
  s(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return od.call(this, a, c)
}
pd.o = 1;
pd.k = function(a) {
  var b = J(a), a = K(a);
  return od(b, a)
};
pd.g = od;
md = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return nd.call(this, a);
    default:
      return pd.g(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
md.o = 1;
md.k = pd.k;
md.t = p("");
md.a = nd;
md.g = pd.g;
V = md;
var qd, rd = k, rd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rd.b = function(a, b) {
  return a.substring(b)
};
rd.c = function(a, b, c) {
  return a.substring(b, c)
};
qd = rd;
var sd = g, td, ud = k;
function vd(a) {
  return Lc(a) ? a : Mc(a) ? hd.g("\ufdd0", O([":", qd.b(a, 2)], 0)) : hd.g("\ufdd0", O([":", a], 0))
}
function wd(a, b) {
  return ud.a(hd.g(a, O(["/", b], 0)))
}
ud = function(a, b) {
  switch(arguments.length) {
    case 1:
      return vd.call(this, a);
    case 2:
      return wd.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ud.a = vd;
ud.b = wd;
td = ud;
var Cb = function(a, b) {
  var c;
  b ? (c = b.j & 16777216, c = w(c ? c : b.Lb) || (b.j ? 0 : x(bb, b))) : c = x(bb, b);
  if(c) {
    a: {
      c = H(a);
      for(var d = H(b);;) {
        if(c == k) {
          c = d == k;
          break a
        }
        if(d != k && vb.b(J(c), J(d))) {
          c = M(c), d = M(d)
        }else {
          c = l;
          break a
        }
      }
      c = g
    }
  }else {
    c = k
  }
  return w(c) ? j : l
}, Rb = function(a) {
  return qa.c(function(a, c) {
    var d = zc.b(c, l);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, zc.b(J(a), l), M(a))
}, xd = g, yd = g;
function zd(a) {
  for(var b = 0, a = H(a);;) {
    if(a) {
      var c = J(a), b = (b + (zc.a(xd.a ? xd.a(c) : xd.call(k, c)) ^ zc.a(yd.a ? yd.a(c) : yd.call(k, c)))) % 4503599627370496, a = M(a)
    }else {
      return b
    }
  }
}
var Ad = g;
function Bd(a, b, c, d, f) {
  this.l = a;
  this.Aa = b;
  this.ja = c;
  this.count = d;
  this.m = f;
  this.r = 0;
  this.j = 65413358
}
r = Bd.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.pa = function() {
  return 1 === this.count ? k : this.ja
};
r.D = function(a, b) {
  return new Bd(this.l, b, a, this.count + 1, k)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = ba();
r.K = n("count");
r.va = n("Aa");
r.X = n("Aa");
r.U = function() {
  return 1 === this.count ? L : this.ja
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Bd(b, this.Aa, this.ja, this.count, this.m)
};
r.G = n("l");
r.L = function() {
  return L
};
function Cd(a) {
  this.l = a;
  this.r = 0;
  this.j = 65413326
}
r = Cd.prototype;
r.F = p(0);
r.pa = p(k);
r.D = function(a, b) {
  return new Bd(this.l, b, k, 1, k)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = p(k);
r.K = p(0);
r.va = p(k);
r.X = p(k);
r.U = function() {
  return L
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Cd(b)
};
r.G = n("l");
r.L = ba();
var L = new Cd(k);
function Dd(a) {
  var b;
  a ? (b = a.j & 134217728, b = w(b ? b : a.Kb) || (a.j ? 0 : x(cb, a))) : b = x(cb, a);
  return b ? db(a) : qa.c(fc, L, a)
}
var Ed = k;
function Fd(a) {
  return fc.b(L, a)
}
function Gd(a, b) {
  return fc.b(Ed.a(b), a)
}
function Hd(a, b, c) {
  return fc.b(Ed.b(b, c), a)
}
function Id(a, b, c, d) {
  return fc.b(fc.b(fc.b(qa.c(fc, L, Dd(d)), c), b), a)
}
function Jd(a, b, c, d) {
  var f = k;
  s(d) && (f = O(Array.prototype.slice.call(arguments, 3), 0));
  return Id.call(this, a, b, c, f)
}
Jd.o = 3;
Jd.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), a = K(M(M(a)));
  return Id(b, c, d, a)
};
Jd.g = Id;
Ed = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return L;
    case 1:
      return Fd.call(this, a);
    case 2:
      return Gd.call(this, a, b);
    case 3:
      return Hd.call(this, a, b, c);
    default:
      return Jd.g(a, b, c, O(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ed.o = 3;
Ed.k = Jd.k;
Ed.t = function() {
  return L
};
Ed.a = Fd;
Ed.b = Gd;
Ed.c = Hd;
Ed.g = Jd.g;
P = Ed;
function Kd(a, b, c, d) {
  this.l = a;
  this.Aa = b;
  this.ja = c;
  this.m = d;
  this.r = 0;
  this.j = 65405164
}
r = Kd.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.pa = function() {
  return this.ja == k ? k : ab(this.ja)
};
r.D = function(a, b) {
  return new Kd(k, b, a, this.m)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = ba();
r.X = n("Aa");
r.U = function() {
  return this.ja == k ? L : this.ja
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Kd(b, this.Aa, this.ja, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(L, this.l)
};
T = function(a, b) {
  var c = b == k;
  c || (b ? (c = b.j & 64, c = w(c ? c : b.Ta) ? j : b.j ? l : x(Da, b)) : c = x(Da, b));
  return w(c) ? new Kd(k, a, b, k) : new Kd(k, a, H(b), k)
};
Ua.string = j;
var Ld = k, Ld = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Hb.b(a, b);
    case 3:
      return Hb.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Va.string = Ld;
var Md = k, Md = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return A.b(a, b);
    case 3:
      return A.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
F.string = Md;
ya.string = j;
var Nd = k, Nd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < sa(a) ? a.charAt(b) : k;
    case 3:
      return b < sa(a) ? a.charAt(b) : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
A.string = Nd;
ra.string = j;
sa.string = function(a) {
  return a.length
};
ab.string = function(a) {
  return Wb.b(a, 0)
};
$a.string = function(a) {
  return ia(a)
};
function Od(a) {
  this.hb = a;
  this.r = 0;
  this.j = 1
}
var Pd = k, Pd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == k) {
        d = k
      }else {
        var f = b.sa;
        d = f == k ? F.c(b, d.hb, k) : f[d.hb]
      }
      return d;
    case 3:
      return b == k ? c : F.c(b, this.hb, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Od.prototype.call = Pd;
Od.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Qd = k, Qd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return F.c(b, this.toString(), k);
    case 3:
      return F.c(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Qd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > jc(b) ? F.c(b[0], a, k) : F.c(b[0], a, b[1])
};
function Rd(a) {
  var b = a.x;
  if(a.jb) {
    return b
  }
  a.x = b.t ? b.t() : b.call(k);
  a.jb = j;
  return a.x
}
function W(a, b, c, d) {
  this.l = a;
  this.jb = b;
  this.x = c;
  this.m = d;
  this.r = 0;
  this.j = 31850700
}
r = W.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.pa = function(a) {
  return ab(a.U(a))
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = function(a) {
  return H(Rd(a))
};
r.X = function(a) {
  return J(Rd(a))
};
r.U = function(a) {
  return K(Rd(a))
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new W(b, this.jb, this.x, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(L, this.l)
};
var Sd = g;
function Td(a, b) {
  this.Oa = a;
  this.end = b;
  this.r = 0;
  this.j = 2
}
Td.prototype.K = n("end");
Td.prototype.add = function(a) {
  this.Oa[this.end] = a;
  return this.end += 1
};
Td.prototype.ka = function() {
  var a = new Sd(this.Oa, 0, this.end);
  this.Oa = k;
  return a
};
Sd = function(a, b, c) {
  this.e = a;
  this.J = b;
  this.end = c;
  this.r = 0;
  this.j = 524306
};
Sd.aa = j;
Sd.fa = function() {
  return P.a("cljs.core/ArrayChunk")
};
Sd.ga = function(a, b) {
  return G(b, "cljs.core/ArrayChunk")
};
r = Sd.prototype;
r.ta = function(a, b) {
  return Mb.q(this.e, b, this.e[this.J], this.J + 1)
};
r.ua = function(a, b, c) {
  return Mb.q(this.e, b, c, this.J)
};
r.ob = function() {
  this.J === this.end && e(Error("-drop-first of empty chunk"));
  return new Sd(this.e, this.J + 1, this.end)
};
r.W = function(a, b) {
  return this.e[this.J + b]
};
r.R = function(a, b, c) {
  a = 0 <= b;
  return w(a ? b < this.end - this.J : a) ? this.e[this.J + b] : c
};
r.K = function() {
  return this.end - this.J
};
var Ud, Vd = k;
function Wd(a) {
  return Vd.c(a, 0, a.length)
}
function Xd(a, b) {
  return Vd.c(a, b, a.length)
}
function Yd(a, b, c) {
  return new Sd(a, b, c)
}
Vd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Wd.call(this, a);
    case 2:
      return Xd.call(this, a, b);
    case 3:
      return Yd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vd.a = Wd;
Vd.b = Xd;
Vd.c = Yd;
Ud = Vd;
function Zd(a, b, c, d) {
  this.ka = a;
  this.oa = b;
  this.l = c;
  this.m = d;
  this.j = 31850604;
  this.r = 1536
}
r = Zd.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.O = ba();
r.X = function() {
  return A.b(this.ka, 0)
};
r.U = function() {
  return 1 < sa(this.ka) ? new Zd(rb(this.ka), this.oa, this.l, k) : this.oa == k ? L : this.oa
};
r.pb = function() {
  return this.oa == k ? k : this.oa
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Zd(this.ka, this.oa, b, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(L, this.l)
};
r.Ra = n("ka");
r.Ia = function() {
  return this.oa == k ? L : this.oa
};
function $d(a, b) {
  return 0 === sa(a) ? b : new Zd(a, b, k, k)
}
Sc = function(a) {
  for(var b = [];;) {
    if(H(a)) {
      b.push(J(a)), a = M(a)
    }else {
      return b
    }
  }
};
function ae(a, b) {
  if(Tb(a)) {
    return jc(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? H(c) : h;
    if(w(h)) {
      c = M(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var ce = function be(b) {
  return b == k ? k : M(b) == k ? H(J(b)) : T(J(b), be(M(b)))
}, de, ee = k;
function fe() {
  return new W(k, l, p(k), k)
}
function ge(a) {
  return new W(k, l, function() {
    return a
  }, k)
}
function he(a, b) {
  return new W(k, l, function() {
    var c = H(a);
    return c ? Gc(c) ? $d(tb(c), ee.b(ub(c), b)) : T(J(c), ee.b(K(c), b)) : b
  }, k)
}
function ie(a, b, c) {
  return function f(a, b) {
    return new W(k, l, function() {
      var c = H(a);
      return c ? Gc(c) ? $d(tb(c), f(ub(c), b)) : T(J(c), f(K(c), b)) : w(b) ? f(J(b), M(b)) : k
    }, k)
  }(ee.b(a, b), c)
}
function je(a, b, c) {
  var d = k;
  s(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return ie.call(this, a, b, d)
}
je.o = 2;
je.k = function(a) {
  var b = J(a), c = J(M(a)), a = K(M(a));
  return ie(b, c, a)
};
je.g = ie;
ee = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return fe.call(this);
    case 1:
      return ge.call(this, a);
    case 2:
      return he.call(this, a, b);
    default:
      return je.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ee.o = 2;
ee.k = je.k;
ee.t = fe;
ee.a = ge;
ee.b = he;
ee.g = je.g;
de = ee;
var ke, le = k;
function me(a, b, c) {
  return T(a, T(b, c))
}
function ne(a, b, c, d) {
  return T(a, T(b, T(c, d)))
}
function oe(a, b, c, d, f) {
  return T(a, T(b, T(c, T(d, ce(f)))))
}
function pe(a, b, c, d, f) {
  var h = k;
  s(f) && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return oe.call(this, a, b, c, d, h)
}
pe.o = 4;
pe.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), f = J(M(M(M(a)))), a = K(M(M(M(a))));
  return oe(b, c, d, f, a)
};
pe.g = oe;
le = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return H(a);
    case 2:
      return T(a, b);
    case 3:
      return me.call(this, a, b, c);
    case 4:
      return ne.call(this, a, b, c, d);
    default:
      return pe.g(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
le.o = 4;
le.k = pe.k;
le.a = function(a) {
  return H(a)
};
le.b = function(a, b) {
  return T(a, b)
};
le.c = me;
le.q = ne;
le.g = pe.g;
ke = le;
function qe(a, b, c) {
  var d = H(c);
  if(0 === b) {
    return a.t ? a.t() : a.call(k)
  }
  var c = B(d), f = D(d);
  if(1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(k, c)
  }
  var d = B(f), h = D(f);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(k, c, d)
  }
  var f = B(h), i = D(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(k, c, d, f)
  }
  var h = B(i), m = D(i);
  if(4 === b) {
    return a.q ? a.q(c, d, f, h) : a.q ? a.q(c, d, f, h) : a.call(k, c, d, f, h)
  }
  i = B(m);
  m = D(m);
  if(5 === b) {
    return a.P ? a.P(c, d, f, h, i) : a.P ? a.P(c, d, f, h, i) : a.call(k, c, d, f, h, i)
  }
  var a = B(m), q = D(m);
  if(6 === b) {
    return a.ha ? a.ha(c, d, f, h, i, a) : a.ha ? a.ha(c, d, f, h, i, a) : a.call(k, c, d, f, h, i, a)
  }
  var m = B(q), v = D(q);
  if(7 === b) {
    return a.xa ? a.xa(c, d, f, h, i, a, m) : a.xa ? a.xa(c, d, f, h, i, a, m) : a.call(k, c, d, f, h, i, a, m)
  }
  var q = B(v), C = D(v);
  if(8 === b) {
    return a.fb ? a.fb(c, d, f, h, i, a, m, q) : a.fb ? a.fb(c, d, f, h, i, a, m, q) : a.call(k, c, d, f, h, i, a, m, q)
  }
  var v = B(C), I = D(C);
  if(9 === b) {
    return a.gb ? a.gb(c, d, f, h, i, a, m, q, v) : a.gb ? a.gb(c, d, f, h, i, a, m, q, v) : a.call(k, c, d, f, h, i, a, m, q, v)
  }
  var C = B(I), E = D(I);
  if(10 === b) {
    return a.Ua ? a.Ua(c, d, f, h, i, a, m, q, v, C) : a.Ua ? a.Ua(c, d, f, h, i, a, m, q, v, C) : a.call(k, c, d, f, h, i, a, m, q, v, C)
  }
  var I = B(E), N = D(E);
  if(11 === b) {
    return a.Va ? a.Va(c, d, f, h, i, a, m, q, v, C, I) : a.Va ? a.Va(c, d, f, h, i, a, m, q, v, C, I) : a.call(k, c, d, f, h, i, a, m, q, v, C, I)
  }
  var E = B(N), R = D(N);
  if(12 === b) {
    return a.Wa ? a.Wa(c, d, f, h, i, a, m, q, v, C, I, E) : a.Wa ? a.Wa(c, d, f, h, i, a, m, q, v, C, I, E) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E)
  }
  var N = B(R), aa = D(R);
  if(13 === b) {
    return a.Xa ? a.Xa(c, d, f, h, i, a, m, q, v, C, I, E, N) : a.Xa ? a.Xa(c, d, f, h, i, a, m, q, v, C, I, E, N) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N)
  }
  var R = B(aa), ga = D(aa);
  if(14 === b) {
    return a.Ya ? a.Ya(c, d, f, h, i, a, m, q, v, C, I, E, N, R) : a.Ya ? a.Ya(c, d, f, h, i, a, m, q, v, C, I, E, N, R) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R)
  }
  var aa = B(ga), va = D(ga);
  if(15 === b) {
    return a.Za ? a.Za(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa) : a.Za ? a.Za(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa)
  }
  var ga = B(va), xa = D(va);
  if(16 === b) {
    return a.$a ? a.$a(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga) : a.$a ? a.$a(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga)
  }
  var va = B(xa), gb = D(xa);
  if(17 === b) {
    return a.ab ? a.ab(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va) : a.ab ? a.ab(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va)
  }
  var xa = B(gb), Uc = D(gb);
  if(18 === b) {
    return a.bb ? a.bb(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa) : a.bb ? a.bb(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa)
  }
  gb = B(Uc);
  Uc = D(Uc);
  if(19 === b) {
    return a.cb ? a.cb(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa, gb) : a.cb ? a.cb(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa, gb) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa, gb)
  }
  var ve = B(Uc);
  D(Uc);
  if(20 === b) {
    return a.eb ? a.eb(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa, gb, ve) : a.eb ? a.eb(c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa, gb, ve) : a.call(k, c, d, f, h, i, a, m, q, v, C, I, E, N, R, aa, ga, va, xa, gb, ve)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var re = k;
function se(a, b) {
  var c = a.o;
  if(a.k) {
    var d = ae(b, c + 1);
    return d <= c ? qe(a, d, b) : a.k(b)
  }
  return a.apply(a, Sc(b))
}
function te(a, b, c) {
  b = ke.b(b, c);
  c = a.o;
  if(a.k) {
    var d = ae(b, c + 1);
    return d <= c ? qe(a, d, b) : a.k(b)
  }
  return a.apply(a, Sc(b))
}
function ue(a, b, c, d) {
  b = ke.c(b, c, d);
  c = a.o;
  return a.k ? (d = ae(b, c + 1), d <= c ? qe(a, d, b) : a.k(b)) : a.apply(a, Sc(b))
}
function we(a, b, c, d, f) {
  b = ke.q(b, c, d, f);
  c = a.o;
  return a.k ? (d = ae(b, c + 1), d <= c ? qe(a, d, b) : a.k(b)) : a.apply(a, Sc(b))
}
function xe(a, b, c, d, f, h) {
  b = T(b, T(c, T(d, T(f, ce(h)))));
  c = a.o;
  return a.k ? (d = ae(b, c + 1), d <= c ? qe(a, d, b) : a.k(b)) : a.apply(a, Sc(b))
}
function ye(a, b, c, d, f, h) {
  var i = k;
  s(h) && (i = O(Array.prototype.slice.call(arguments, 5), 0));
  return xe.call(this, a, b, c, d, f, i)
}
ye.o = 5;
ye.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), f = J(M(M(M(a)))), h = J(M(M(M(M(a))))), a = K(M(M(M(M(a)))));
  return xe(b, c, d, f, h, a)
};
ye.g = xe;
re = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return se.call(this, a, b);
    case 3:
      return te.call(this, a, b, c);
    case 4:
      return ue.call(this, a, b, c, d);
    case 5:
      return we.call(this, a, b, c, d, f);
    default:
      return ye.g(a, b, c, d, f, O(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
re.o = 5;
re.k = ye.k;
re.b = se;
re.c = te;
re.q = ue;
re.P = we;
re.g = ye.g;
z = re;
function ze(a, b) {
  for(;;) {
    if(H(b) == k) {
      return j
    }
    if(w(a.a ? a.a(J(b)) : a.call(k, J(b)))) {
      var c = a, d = M(b), a = c, b = d
    }else {
      return l
    }
  }
}
function Ae(a) {
  return a
}
var Be, Ce = k;
function De(a, b) {
  function c(a, b, c, f) {
    var v = k;
    s(f) && (v = O(Array.prototype.slice.call(arguments, 3), 0));
    return d.call(this, a, b, c, v)
  }
  function d(c, d, f, q) {
    return a.a ? a.a(z.P(b, c, d, f, q)) : a.call(k, z.P(b, c, d, f, q))
  }
  var f = k;
  c.o = 3;
  c.k = function(a) {
    var b = J(a), c = J(M(a)), f = J(M(M(a))), a = K(M(M(a)));
    return d(b, c, f, a)
  };
  c.g = d;
  f = function(d, f, m, q) {
    switch(arguments.length) {
      case 0:
        return a.a ? a.a(b.t ? b.t() : b.call(k)) : a.call(k, b.t ? b.t() : b.call(k));
      case 1:
        return a.a ? a.a(b.a ? b.a(d) : b.call(k, d)) : a.call(k, b.a ? b.a(d) : b.call(k, d));
      case 2:
        return a.a ? a.a(b.b ? b.b(d, f) : b.call(k, d, f)) : a.call(k, b.b ? b.b(d, f) : b.call(k, d, f));
      case 3:
        return a.a ? a.a(b.c ? b.c(d, f, m) : b.call(k, d, f, m)) : a.call(k, b.c ? b.c(d, f, m) : b.call(k, d, f, m));
      default:
        return c.g(d, f, m, O(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  f.o = 3;
  f.k = c.k;
  return f
}
function Ee(a, b, c) {
  function d(a, b, c, d) {
    var h = k;
    s(d) && (h = O(Array.prototype.slice.call(arguments, 3), 0));
    return f.call(this, a, b, c, h)
  }
  function f(d, f, h, v) {
    return a.a ? a.a(b.a ? b.a(z.P(c, d, f, h, v)) : b.call(k, z.P(c, d, f, h, v))) : a.call(k, b.a ? b.a(z.P(c, d, f, h, v)) : b.call(k, z.P(c, d, f, h, v)))
  }
  var h = k;
  d.o = 3;
  d.k = function(a) {
    var b = J(a), c = J(M(a)), d = J(M(M(a))), a = K(M(M(a)));
    return f(b, c, d, a)
  };
  d.g = f;
  h = function(f, h, q, v) {
    switch(arguments.length) {
      case 0:
        return a.a ? a.a(b.a ? b.a(c.t ? c.t() : c.call(k)) : b.call(k, c.t ? c.t() : c.call(k))) : a.call(k, b.a ? b.a(c.t ? c.t() : c.call(k)) : b.call(k, c.t ? c.t() : c.call(k)));
      case 1:
        return a.a ? a.a(b.a ? b.a(c.a ? c.a(f) : c.call(k, f)) : b.call(k, c.a ? c.a(f) : c.call(k, f))) : a.call(k, b.a ? b.a(c.a ? c.a(f) : c.call(k, f)) : b.call(k, c.a ? c.a(f) : c.call(k, f)));
      case 2:
        return a.a ? a.a(b.a ? b.a(c.b ? c.b(f, h) : c.call(k, f, h)) : b.call(k, c.b ? c.b(f, h) : c.call(k, f, h))) : a.call(k, b.a ? b.a(c.b ? c.b(f, h) : c.call(k, f, h)) : b.call(k, c.b ? c.b(f, h) : c.call(k, f, h)));
      case 3:
        return a.a ? a.a(b.a ? b.a(c.c ? c.c(f, h, q) : c.call(k, f, h, q)) : b.call(k, c.c ? c.c(f, h, q) : c.call(k, f, h, q))) : a.call(k, b.a ? b.a(c.c ? c.c(f, h, q) : c.call(k, f, h, q)) : b.call(k, c.c ? c.c(f, h, q) : c.call(k, f, h, q)));
      default:
        return d.g(f, h, q, O(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  h.o = 3;
  h.k = d.k;
  return h
}
function Fe(a, b, c, d) {
  function f(a) {
    var b = k;
    s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(a) {
    for(var a = z.b(J(i), a), b = M(i);;) {
      if(b) {
        a = J(b).call(k, a), b = M(b)
      }else {
        return a
      }
    }
  }
  var i = Dd(ke.q(a, b, c, d));
  f.o = 0;
  f.k = function(a) {
    a = H(a);
    return h(a)
  };
  f.g = h;
  return f
}
function Ge(a, b, c, d) {
  var f = k;
  s(d) && (f = O(Array.prototype.slice.call(arguments, 3), 0));
  return Fe.call(this, a, b, c, f)
}
Ge.o = 3;
Ge.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), a = K(M(M(a)));
  return Fe(b, c, d, a)
};
Ge.g = Fe;
Ce = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return Ae;
    case 1:
      return a;
    case 2:
      return De.call(this, a, b);
    case 3:
      return Ee.call(this, a, b, c);
    default:
      return Ge.g(a, b, c, O(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ce.o = 3;
Ce.k = Ge.k;
Ce.t = function() {
  return Ae
};
Ce.a = ba();
Ce.b = De;
Ce.c = Ee;
Ce.g = Ge.g;
Be = Ce;
var He, Ie = k;
function Je(a, b) {
  function c(a) {
    var b = k;
    s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, b)
  }
  function d(c) {
    return z.c(a, b, c)
  }
  c.o = 0;
  c.k = function(a) {
    a = H(a);
    return d(a)
  };
  c.g = d;
  return c
}
function Ke(a, b, c) {
  function d(a) {
    var b = k;
    s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(d) {
    return z.q(a, b, c, d)
  }
  d.o = 0;
  d.k = function(a) {
    a = H(a);
    return f(a)
  };
  d.g = f;
  return d
}
function Le(a, b, c, d) {
  function f(a) {
    var b = k;
    s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(f) {
    return z.P(a, b, c, d, f)
  }
  f.o = 0;
  f.k = function(a) {
    a = H(a);
    return h(a)
  };
  f.g = h;
  return f
}
function Me(a, b, c, d, f) {
  function h(a) {
    var b = k;
    s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(h) {
    return z.P(a, b, c, d, de.b(f, h))
  }
  h.o = 0;
  h.k = function(a) {
    a = H(a);
    return i(a)
  };
  h.g = i;
  return h
}
function Ne(a, b, c, d, f) {
  var h = k;
  s(f) && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Me.call(this, a, b, c, d, h)
}
Ne.o = 4;
Ne.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), f = J(M(M(M(a)))), a = K(M(M(M(a))));
  return Me(b, c, d, f, a)
};
Ne.g = Me;
Ie = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Je.call(this, a, b);
    case 3:
      return Ke.call(this, a, b, c);
    case 4:
      return Le.call(this, a, b, c, d);
    default:
      return Ne.g(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ie.o = 4;
Ie.k = Ne.k;
Ie.b = Je;
Ie.c = Ke;
Ie.q = Le;
Ie.g = Ne.g;
He = Ie;
var Oe = k;
function Pe(a, b) {
  return new W(k, l, function() {
    var c = H(b);
    if(c) {
      if(Gc(c)) {
        for(var d = tb(c), f = jc(d), h = new Td(oa.a(f), 0), i = 0;;) {
          if(i < f) {
            var m = a.a ? a.a(A.b(d, i)) : a.call(k, A.b(d, i));
            h.add(m);
            i += 1
          }else {
            break
          }
        }
        return $d(h.ka(), Oe.b(a, ub(c)))
      }
      return T(a.a ? a.a(J(c)) : a.call(k, J(c)), Oe.b(a, K(c)))
    }
    return k
  }, k)
}
function Qe(a, b, c) {
  return new W(k, l, function() {
    var d = H(b), f = H(c);
    return w(d ? f : d) ? T(a.b ? a.b(J(d), J(f)) : a.call(k, J(d), J(f)), Oe.c(a, K(d), K(f))) : k
  }, k)
}
function Re(a, b, c, d) {
  return new W(k, l, function() {
    var f = H(b), h = H(c), i = H(d);
    return w(f ? h ? i : h : f) ? T(a.c ? a.c(J(f), J(h), J(i)) : a.call(k, J(f), J(h), J(i)), Oe.q(a, K(f), K(h), K(i))) : k
  }, k)
}
function Se(a, b, c, d, f) {
  return Oe.b(function(b) {
    return z.b(a, b)
  }, function i(a) {
    return new W(k, l, function() {
      var b = Oe.b(H, a);
      return ze(Ae, b) ? T(Oe.b(J, b), i(Oe.b(K, b))) : k
    }, k)
  }(fc.g(f, d, O([c, b], 0))))
}
function Te(a, b, c, d, f) {
  var h = k;
  s(f) && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Se.call(this, a, b, c, d, h)
}
Te.o = 4;
Te.k = function(a) {
  var b = J(a), c = J(M(a)), d = J(M(M(a))), f = J(M(M(M(a)))), a = K(M(M(M(a))));
  return Se(b, c, d, f, a)
};
Te.g = Se;
Oe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Pe.call(this, a, b);
    case 3:
      return Qe.call(this, a, b, c);
    case 4:
      return Re.call(this, a, b, c, d);
    default:
      return Te.g(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oe.o = 4;
Oe.k = Te.k;
Oe.b = Pe;
Oe.c = Qe;
Oe.q = Re;
Oe.g = Te.g;
var sd = Oe, Ve = function Ue(b, c) {
  return new W(k, l, function() {
    if(0 < b) {
      var d = H(c);
      return d ? T(J(d), Ue(b - 1, K(d))) : k
    }
    return k
  }, k)
};
function We(a, b) {
  return new W(k, l, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = H(d), f = 0 < c;
        if(w(f ? d : f)) {
          c -= 1, d = K(d)
        }else {
          c = d;
          break a
        }
      }
      c = g
    }
    return c
  }, k)
}
var Xe, Ye = k;
function Ze(a) {
  return new W(k, l, function() {
    return T(a, Ye.a(a))
  }, k)
}
function $e(a, b) {
  return Ve(a, Ye.a(b))
}
Ye = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ze.call(this, a);
    case 2:
      return $e.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ye.a = Ze;
Ye.b = $e;
Xe = Ye;
var af, bf = k;
function cf(a, b) {
  return new W(k, l, function() {
    var c = H(a), d = H(b);
    return w(c ? d : c) ? T(J(c), T(J(d), bf.b(K(c), K(d)))) : k
  }, k)
}
function df(a, b, c) {
  return new W(k, l, function() {
    var d = sd.b(H, fc.g(c, b, O([a], 0)));
    return ze(Ae, d) ? de.b(sd.b(J, d), z.b(bf, sd.b(K, d))) : k
  }, k)
}
function ef(a, b, c) {
  var d = k;
  s(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return df.call(this, a, b, d)
}
ef.o = 2;
ef.k = function(a) {
  var b = J(a), c = J(M(a)), a = K(M(a));
  return df(b, c, a)
};
ef.g = df;
bf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return cf.call(this, a, b);
    default:
      return ef.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
bf.o = 2;
bf.k = ef.k;
bf.b = cf;
bf.g = ef.g;
af = bf;
function ff(a, b) {
  return We(1, af.b(Xe.a(a), b))
}
function gf(a) {
  return function c(a, f) {
    return new W(k, l, function() {
      var h = H(a);
      return h ? T(J(h), c(K(h), f)) : H(f) ? c(J(f), K(f)) : k
    }, k)
  }(k, a)
}
var jf = function hf(b, c) {
  return new W(k, l, function() {
    var d = H(c);
    if(d) {
      if(Gc(d)) {
        for(var f = tb(d), h = jc(f), i = new Td(oa.a(h), 0), m = 0;;) {
          if(m < h) {
            if(w(b.a ? b.a(A.b(f, m)) : b.call(k, A.b(f, m)))) {
              var q = A.b(f, m);
              i.add(q)
            }
            m += 1
          }else {
            break
          }
        }
        return $d(i.ka(), hf(b, ub(d)))
      }
      f = J(d);
      d = K(d);
      return w(b.a ? b.a(f) : b.call(k, f)) ? T(f, hf(b, d)) : hf(b, d)
    }
    return k
  }, k)
};
function kf(a, b) {
  var c;
  a ? (c = a.r & 4, c = w(c ? c : a.Hb) ? j : a.r ? l : x(kb, a)) : c = x(kb, a);
  w(c) ? (c = qa.c(mb, lb(a), b), c = nb(c)) : c = qa.c(wa, a, b);
  return c
}
var lf, mf = k;
function nf(a, b) {
  return mf.c(a, a, b)
}
function of(a, b, c) {
  return new W(k, l, function() {
    var d = H(c);
    if(d) {
      var f = Ve(a, d);
      return a === jc(f) ? T(f, mf.c(a, b, We(b, d))) : k
    }
    return k
  }, k)
}
function pf(a, b, c, d) {
  return new W(k, l, function() {
    var f = H(d);
    if(f) {
      var h = Ve(a, f);
      return a === jc(h) ? T(h, mf.q(a, b, c, We(b, f))) : P.a(Ve(a, de.b(h, c)))
    }
    return k
  }, k)
}
mf = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return nf.call(this, a, b);
    case 3:
      return of.call(this, a, b, c);
    case 4:
      return pf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
mf.b = nf;
mf.c = of;
mf.q = pf;
lf = mf;
function qf(a, b) {
  this.v = a;
  this.e = b
}
function rf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function sf(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new qf(a, oa.a(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var uf = function tf(b, c, d, f) {
  var h = new qf(d.v, d.e.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? h.e[i] = f : (d = d.e[i], b = d != k ? tf(b, c - 5, d, f) : sf(k, c - 5, f), h.e[i] = b);
  return h
};
function vf(a, b) {
  var c = 0 <= b;
  if(w(c ? b < a.h : c)) {
    if(b >= rf(a)) {
      return a.S
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.e[b >>> d & 31], d = f
      }else {
        return c.e
      }
    }
  }else {
    e(Error([V("No item "), V(b), V(" in vector of length "), V(a.h)].join("")))
  }
}
var xf = function wf(b, c, d, f, h) {
  var i = new qf(d.v, d.e.slice());
  if(0 === c) {
    i.e[f & 31] = h
  }else {
    var m = f >>> c & 31, b = wf(b, c - 5, d.e[m], f, h);
    i.e[m] = b
  }
  return i
}, yf = g, zf = g, Af = g, X = S = g, Y = g, Bf = g, Cf = g;
function Df(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.S = f;
  this.m = h;
  this.r = 4;
  this.j = 167668511
}
r = Df.prototype;
r.Da = function() {
  return new Af(this.h, this.shift, yf.a ? yf.a(this.root) : yf.call(k, this.root), zf.a ? zf.a(this.S) : zf.call(k, this.S))
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.M = function(a, b) {
  return a.R(a, b, k)
};
r.w = function(a, b, c) {
  return a.R(a, b, c)
};
r.V = function(a, b, c) {
  var d = 0 <= b;
  if(w(d ? b < this.h : d)) {
    return rf(a) <= b ? (a = this.S.slice(), a[b & 31] = c, new Df(this.l, this.h, this.shift, this.root, a, k)) : new Df(this.l, this.h, this.shift, xf(a, this.shift, this.root, b, c), this.S, k)
  }
  if(b === this.h) {
    return a.D(a, c)
  }
  e(Error([V("Index "), V(b), V(" out of bounds  [0,"), V(this.h), V("]")].join("")))
};
var Ef = k, Ef = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Df.prototype;
r.call = Ef;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  if(32 > this.h - rf(a)) {
    var c = this.S.slice();
    c.push(b);
    return new Df(this.l, this.h + 1, this.shift, this.root, c, k)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new qf(k, oa.a(32));
    d.e[0] = this.root;
    var f = sf(k, this.shift, new qf(k, this.S));
    d.e[1] = f
  }else {
    d = uf(a, this.shift, this.root, new qf(k, this.S))
  }
  return new Df(this.l, this.h + 1, c, d, [b], k)
};
r.La = function(a) {
  return 0 < this.h ? new Sb(a, this.h - 1, k) : L
};
r.Ja = function(a) {
  return a.W(a, 0)
};
r.Ka = function(a) {
  return a.W(a, 1)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.ta = function(a, b) {
  return Hb.b(a, b)
};
r.ua = function(a, b, c) {
  return Hb.c(a, b, c)
};
r.O = function(a) {
  return 0 === this.h ? k : Cf.c ? Cf.c(a, 0, 0) : Cf.call(k, a, 0, 0)
};
r.K = n("h");
r.va = function(a) {
  return 0 < this.h ? a.W(a, this.h - 1) : k
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Df(b, this.h, this.shift, this.root, this.S, this.m)
};
r.G = n("l");
r.W = function(a, b) {
  return vf(a, b)[b & 31]
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return w(d ? b < this.h : d) ? a.W(a, b) : c
};
r.L = function() {
  return Q(Ff, this.l)
};
var Gf = new qf(k, oa.a(32)), Ff = new Df(k, 0, 5, Gf, [], 0);
function Hf(a) {
  var b = a.length;
  if(32 > b) {
    return new Df(k, b, 5, Gf, a, k)
  }
  for(var c = a.slice(0, 32), d = 32, f = lb(new Df(k, 32, 5, Gf, c, k));;) {
    if(d < b) {
      c = d + 1, f = mb(f, a[d]), d = c
    }else {
      return nb(f)
    }
  }
}
bd = function(a) {
  return nb(qa.c(mb, lb(Ff), a))
};
function If(a) {
  var b = k;
  s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return bd(b)
}
If.o = 0;
If.k = function(a) {
  a = H(a);
  return bd(a)
};
If.g = function(a) {
  return bd(a)
};
function Jf(a, b, c, d, f, h) {
  this.$ = a;
  this.Z = b;
  this.p = c;
  this.J = d;
  this.l = f;
  this.m = h;
  this.j = 31719660;
  this.r = 1536
}
r = Jf.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.pa = function(a) {
  return this.J + 1 < this.Z.length ? (a = Cf.q ? Cf.q(this.$, this.Z, this.p, this.J + 1) : Cf.call(k, this.$, this.Z, this.p, this.J + 1), a == k ? k : a) : a.pb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.O = ba();
r.X = function() {
  return this.Z[this.J]
};
r.U = function(a) {
  return this.J + 1 < this.Z.length ? (a = Cf.q ? Cf.q(this.$, this.Z, this.p, this.J + 1) : Cf.call(k, this.$, this.Z, this.p, this.J + 1), a == k ? L : a) : a.Ia(a)
};
r.pb = function() {
  var a = this.Z.length, a = this.p + a < sa(this.$) ? Cf.c ? Cf.c(this.$, this.p + a, 0) : Cf.call(k, this.$, this.p + a, 0) : k;
  return a == k ? k : a
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return Cf.P ? Cf.P(this.$, this.Z, this.p, this.J, b) : Cf.call(k, this.$, this.Z, this.p, this.J, b)
};
r.L = function() {
  return Q(Ff, this.l)
};
r.Ra = function() {
  return Ud.b(this.Z, this.J)
};
r.Ia = function() {
  var a = this.Z.length, a = this.p + a < sa(this.$) ? Cf.c ? Cf.c(this.$, this.p + a, 0) : Cf.call(k, this.$, this.p + a, 0) : k;
  return a == k ? L : a
};
var Kf = k;
function Lf(a, b, c) {
  return Kf.P(a, vf(a, b), b, c, k)
}
function Mf(a, b, c, d) {
  return Kf.P(a, b, c, d, k)
}
function Nf(a, b, c, d, f) {
  return new Jf(a, b, c, d, f, k)
}
Kf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Lf.call(this, a, b, c);
    case 4:
      return Mf.call(this, a, b, c, d);
    case 5:
      return Nf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kf.c = Lf;
Kf.q = Mf;
Kf.P = Nf;
var Cf = Kf, yf = function(a) {
  return new qf({}, a.e.slice())
}, zf = function(a) {
  var b = oa.a(32);
  Hc(a, 0, b, 0, a.length);
  return b
}, Pf = function Of(b, c, d, f) {
  var d = b.root.v === d.v ? d : new qf(b.root.v, d.e.slice()), h = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.e[h], b = i != k ? Of(b, c - 5, i, f) : sf(b.root.v, c - 5, f)
  }
  d.e[h] = b;
  return d
}, Af = function(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.S = d;
  this.j = 275;
  this.r = 88
};
Af.aa = j;
Af.fa = function() {
  return P.a("cljs.core/TransientVector")
};
Af.ga = function(a, b) {
  return G(b, "cljs.core/TransientVector")
};
var Qf = k, Qf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Af.prototype;
r.call = Qf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.M = function(a, b) {
  return a.R(a, b, k)
};
r.w = function(a, b, c) {
  return a.R(a, b, c)
};
r.W = function(a, b) {
  if(this.root.v) {
    return vf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return w(d ? b < this.h : d) ? a.W(a, b) : c
};
r.K = function() {
  if(this.root.v) {
    return this.h
  }
  e(Error("count after persistent!"))
};
r.wa = function(a, b, c) {
  var d;
  a: {
    if(a.root.v) {
      var f = 0 <= b;
      if(w(f ? b < a.h : f)) {
        rf(a) <= b ? a.S[b & 31] = c : (d = function i(d, f) {
          var v = a.root.v === f.v ? f : new qf(a.root.v, f.e.slice());
          if(0 === d) {
            v.e[b & 31] = c
          }else {
            var C = b >>> d & 31, I = i(d - 5, v.e[C]);
            v.e[C] = I
          }
          return v
        }.call(k, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.h) {
        d = a.Ea(a, c);
        break a
      }
      e(Error([V("Index "), V(b), V(" out of bounds for TransientVector of length"), V(a.h)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.Ea = function(a, b) {
  if(this.root.v) {
    if(32 > this.h - rf(a)) {
      this.S[this.h & 31] = b
    }else {
      var c = new qf(this.root.v, this.S), d = oa.a(32);
      d[0] = b;
      this.S = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = oa.a(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = sf(this.root.v, this.shift, c);
        this.root = new qf(this.root.v, d);
        this.shift = f
      }else {
        this.root = Pf(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Ma = function(a) {
  if(this.root.v) {
    this.root.v = k;
    var a = this.h - rf(a), b = oa.a(a);
    Hc(this.S, 0, b, 0, a);
    return new Df(k, this.h, this.shift, this.root, b, k)
  }
  e(Error("persistent! called twice"))
};
function Rf() {
  this.r = 0;
  this.j = 2097152
}
Rf.prototype.z = p(l);
var Sf = new Rf;
function Tf(a, b) {
  var c = Ec(b) ? jc(a) === jc(b) ? ze(Ae, sd.b(function(a) {
    return vb.b(F.c(b, J(a), Sf), J(M(a)))
  }, a)) : k : k;
  return w(c) ? j : l
}
function Uf(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return k
    }
  }
}
function Vf(a, b) {
  var c = zc.a(a), d = zc.a(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Wf(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.sa, a = wc(a), i = 0, m = lb(Xf);;) {
    if(i < f) {
      var q = d[i], i = i + 1, m = ob(m, q, h[q])
    }else {
      return d = Q, b = ob(m, b, c), b = nb(b), d(b, a)
    }
  }
}
function Yf(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Zf(a, b, c, d, f) {
  this.l = a;
  this.keys = b;
  this.sa = c;
  this.Na = d;
  this.m = f;
  this.r = 4;
  this.j = 16123663
}
r = Zf.prototype;
r.Da = function(a) {
  a = kf(Bb.t ? Bb.t() : Bb.call(k), a);
  return lb(a)
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = zd(a)
};
r.M = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  a = ea(b);
  return w(a ? Uf(b, this.keys) != k : a) ? this.sa[b] : c
};
r.V = function(a, b, c) {
  if(ea(b)) {
    var d = this.Na > $f;
    if(w(d ? d : this.keys.length >= $f)) {
      return Wf(a, b, c)
    }
    if(Uf(b, this.keys) != k) {
      return a = Yf(this.sa, this.keys), a[b] = c, new Zf(this.l, this.keys, a, this.Na + 1, k)
    }
    a = Yf(this.sa, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Zf(this.l, d, a, this.Na + 1, k)
  }
  return Wf(a, b, c)
};
r.Qa = function(a, b) {
  var c = ea(b);
  return w(c ? Uf(b, this.keys) != k : c) ? j : l
};
var ag = k, ag = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Zf.prototype;
r.call = ag;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Fc(b) ? a.V(a, A.b(b, 0), A.b(b, 1)) : qa.c(wa, a, b)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = function() {
  var a = this;
  return 0 < a.keys.length ? sd.b(function(b) {
    return If.g(O([b, a.sa[b]], 0))
  }, a.keys.sort(Vf)) : k
};
r.K = function() {
  return this.keys.length
};
r.z = function(a, b) {
  return Tf(a, b)
};
r.I = function(a, b) {
  return new Zf(b, this.keys, this.sa, this.Na, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(bg, this.l)
};
var bg = new Zf(k, [], {}, 0, 0), $f = 32;
function cg(a, b) {
  return new Zf(k, a, b, 0, k)
}
function dg(a, b) {
  for(var c = a.e, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(vb.b(c[f], b)) {
      return f
    }
    f += 2
  }
}
var eg = g;
function fg(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.e = c;
  this.m = d;
  this.r = 4;
  this.j = 16123663
}
r = fg.prototype;
r.Da = function() {
  return new eg({}, this.e.length, this.e.slice())
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = zd(a)
};
r.M = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  a = dg(a, b);
  return-1 === a ? c : this.e[a + 1]
};
r.V = function(a, b, c) {
  var d = dg(a, b);
  if(-1 === d) {
    if(this.h < gg) {
      var d = this.l, a = this.h + 1, f = this.e.slice();
      f.push(b);
      f.push(c);
      c = new fg(d, a, f, k)
    }else {
      c = Q(sc.c(kf(Xf, a), b, c), this.l)
    }
  }else {
    c === this.e[d + 1] ? c = a : (b = this.l, a = this.h, f = this.e.slice(), f[d + 1] = c, c = new fg(b, a, f, k))
  }
  return c
};
r.Qa = function(a, b) {
  return-1 !== dg(a, b)
};
var hg = k, hg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = fg.prototype;
r.call = hg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Fc(b) ? a.V(a, A.b(b, 0), A.b(b, 1)) : qa.c(wa, a, b)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.e.length;
    b = function f(b) {
      return new W(k, l, function() {
        return b < c ? T(Hf([a.e[b], a.e[b + 1]]), f(b + 2)) : k
      }, k)
    }(0)
  }else {
    b = k
  }
  return b
};
r.K = n("h");
r.z = function(a, b) {
  return Tf(a, b)
};
r.I = function(a, b) {
  return new fg(b, this.h, this.e, this.m)
};
r.G = n("l");
r.L = function() {
  return Ta(ig, this.l)
};
var ig = new fg(k, 0, [], k), gg = 16, jg = g, eg = function(a, b, c) {
  this.ya = a;
  this.ra = b;
  this.e = c;
  this.r = 56;
  this.j = 258
};
eg.aa = j;
eg.fa = function() {
  return P.a("cljs.core/TransientArrayMap")
};
eg.ga = function(a, b) {
  return G(b, "cljs.core/TransientArrayMap")
};
r = eg.prototype;
r.wa = function(a, b, c) {
  if(w(this.ya)) {
    var d = dg(a, b);
    if(-1 === d) {
      if(this.ra + 2 <= 2 * gg) {
        return this.ra += 2, this.e.push(b), this.e.push(c), a
      }
      a = jg.b ? jg.b(this.ra, this.e) : jg.call(k, this.ra, this.e);
      return ob(a, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.Ea = function(a, b) {
  if(w(this.ya)) {
    var c;
    b ? (c = b.j & 2048, c = w(c ? c : b.zb) ? j : b.j ? l : x(La, b)) : c = x(La, b);
    if(w(c)) {
      return a.wa(a, xd.a ? xd.a(b) : xd.call(k, b), yd.a ? yd.a(b) : yd.call(k, b))
    }
    c = H(b);
    for(var d = a;;) {
      var f = J(c);
      if(w(f)) {
        c = M(c), d = d.wa(d, xd.a ? xd.a(f) : xd.call(k, f), yd.a ? yd.a(f) : yd.call(k, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Ma = function() {
  if(w(this.ya)) {
    return this.ya = l, new fg(k, fd(this.ra), this.e, k)
  }
  e(Error("persistent! called twice"))
};
r.M = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  if(w(this.ya)) {
    return a = dg(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.K = function() {
  if(w(this.ya)) {
    return fd(this.ra)
  }
  e(Error("count after persistent!"))
};
var kg = g, jg = function(a, b) {
  for(var c = lb(bg), d = 0;;) {
    if(d < a) {
      c = ob(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
};
function lg() {
  this.n = l
}
var mg = g, ng = g, og = g, pg = g, S = g;
function qg(a, b) {
  return ea(a) ? a === b : vb.b(a, b)
}
var rg, sg = k;
function tg(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function ug(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
sg = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return tg.call(this, a, b, c);
    case 5:
      return ug.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sg.c = tg;
sg.P = ug;
rg = sg;
var vg, wg = k;
function xg(a, b, c, d) {
  a = a.za(b);
  a.e[c] = d;
  return a
}
function yg(a, b, c, d, f, h) {
  a = a.za(b);
  a.e[c] = d;
  a.e[f] = h;
  return a
}
wg = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return xg.call(this, a, b, c, d);
    case 6:
      return yg.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wg.q = xg;
wg.ha = yg;
vg = wg;
var zg = g;
function Ag(a, b, c) {
  this.v = a;
  this.C = b;
  this.e = c
}
r = Ag.prototype;
r.ca = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), m = gd(this.C & i - 1);
  if(0 === (this.C & i)) {
    var q = gd(this.C);
    if(2 * q < this.e.length) {
      a = this.za(a);
      b = a.e;
      h.n = j;
      a: {
        c = 2 * (q - m);
        h = 2 * m + (c - 1);
        for(q = 2 * (m + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[q] = b[h];
          q -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * m] = d;
      b[2 * m + 1] = f;
      a.C |= i;
      return a
    }
    if(16 <= q) {
      m = oa.a(32);
      m[c >>> b & 31] = Bg.ca(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.C >>> d & 1) && (m[d] = this.e[f] != k ? Bg.ca(a, b + 5, zc.a(this.e[f]), this.e[f], this.e[f + 1], h) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new zg(a, q + 1, m)
    }
    b = oa.a(2 * (q + 4));
    Hc(this.e, 0, b, 0, 2 * m);
    b[2 * m] = d;
    b[2 * m + 1] = f;
    Hc(this.e, 2 * m, b, 2 * (m + 1), 2 * (q - m));
    h.n = j;
    a = this.za(a);
    a.e = b;
    a.C |= i;
    return a
  }
  q = this.e[2 * m];
  i = this.e[2 * m + 1];
  if(q == k) {
    return q = i.ca(a, b + 5, c, d, f, h), q === i ? this : vg.q(this, a, 2 * m + 1, q)
  }
  if(qg(d, q)) {
    return f === i ? this : vg.q(this, a, 2 * m + 1, f)
  }
  h.n = j;
  return vg.ha(this, a, 2 * m, k, 2 * m + 1, og.xa ? og.xa(a, b + 5, q, i, c, d, f) : og.call(k, a, b + 5, q, i, c, d, f))
};
r.Fa = function() {
  return mg.a ? mg.a(this.e) : mg.call(k, this.e)
};
r.za = function(a) {
  if(a === this.v) {
    return this
  }
  var b = gd(this.C), c = oa.a(0 > b ? 4 : 2 * (b + 1));
  Hc(this.e, 0, c, 0, 2 * b);
  return new Ag(a, this.C, c)
};
r.ba = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = gd(this.C & h - 1);
  if(0 === (this.C & h)) {
    var m = gd(this.C);
    if(16 <= m) {
      i = oa.a(32);
      i[b >>> a & 31] = Bg.ba(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.C >>> c & 1) && (i[c] = this.e[d] != k ? Bg.ba(a + 5, zc.a(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new zg(k, m + 1, i)
    }
    a = oa.a(2 * (m + 1));
    Hc(this.e, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Hc(this.e, 2 * i, a, 2 * (i + 1), 2 * (m - i));
    f.n = j;
    return new Ag(k, this.C | h, a)
  }
  m = this.e[2 * i];
  h = this.e[2 * i + 1];
  if(m == k) {
    return m = h.ba(a + 5, b, c, d, f), m === h ? this : new Ag(k, this.C, rg.c(this.e, 2 * i + 1, m))
  }
  if(qg(c, m)) {
    return d === h ? this : new Ag(k, this.C, rg.c(this.e, 2 * i + 1, d))
  }
  f.n = j;
  return new Ag(k, this.C, rg.P(this.e, 2 * i, k, 2 * i + 1, og.ha ? og.ha(a + 5, m, h, b, c, d) : og.call(k, a + 5, m, h, b, c, d)))
};
r.na = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.C & f)) {
    return d
  }
  var h = gd(this.C & f - 1), f = this.e[2 * h], h = this.e[2 * h + 1];
  return f == k ? h.na(a + 5, b, c, d) : qg(c, f) ? h : d
};
var Bg = new Ag(k, 0, oa.a(0)), zg = function(a, b, c) {
  this.v = a;
  this.h = b;
  this.e = c
};
zg.aa = j;
zg.fa = function() {
  return P.a("cljs.core/ArrayNode")
};
zg.ga = function(a, b) {
  return G(b, "cljs.core/ArrayNode")
};
r = zg.prototype;
r.ca = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, m = this.e[i];
  if(m == k) {
    return a = vg.q(this, a, i, Bg.ca(a, b + 5, c, d, f, h)), a.h += 1, a
  }
  b = m.ca(a, b + 5, c, d, f, h);
  return b === m ? this : vg.q(this, a, i, b)
};
r.Fa = function() {
  return ng.a ? ng.a(this.e) : ng.call(k, this.e)
};
r.za = function(a) {
  return a === this.v ? this : new zg(a, this.h, this.e.slice())
};
r.ba = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.e[h];
  if(i == k) {
    return new zg(k, this.h + 1, rg.c(this.e, h, Bg.ba(a + 5, b, c, d, f)))
  }
  a = i.ba(a + 5, b, c, d, f);
  return a === i ? this : new zg(k, this.h, rg.c(this.e, h, a))
};
r.na = function(a, b, c, d) {
  var f = this.e[b >>> a & 31];
  return f != k ? f.na(a + 5, b, c, d) : d
};
function Cg(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(qg(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Dg(a, b, c, d) {
  this.v = a;
  this.la = b;
  this.h = c;
  this.e = d
}
r = Dg.prototype;
r.ca = function(a, b, c, d, f, h) {
  if(c === this.la) {
    b = Cg(this.e, this.h, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.h) {
        return a = vg.ha(this, a, 2 * this.h, d, 2 * this.h + 1, f), h.n = j, a.h += 1, a
      }
      c = this.e.length;
      b = oa.a(c + 2);
      Hc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.n = j;
      h = this.h + 1;
      a === this.v ? (this.e = b, this.h = h, a = this) : a = new Dg(this.v, this.la, h, b);
      return a
    }
    return this.e[b + 1] === f ? this : vg.q(this, a, b + 1, f)
  }
  return(new Ag(a, 1 << (this.la >>> b & 31), [k, this, k, k])).ca(a, b, c, d, f, h)
};
r.Fa = function() {
  return mg.a ? mg.a(this.e) : mg.call(k, this.e)
};
r.za = function(a) {
  if(a === this.v) {
    return this
  }
  var b = oa.a(2 * (this.h + 1));
  Hc(this.e, 0, b, 0, 2 * this.h);
  return new Dg(a, this.la, this.h, b)
};
r.ba = function(a, b, c, d, f) {
  return b === this.la ? (a = Cg(this.e, this.h, c), -1 === a ? (a = this.e.length, b = oa.a(a + 2), Hc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.n = j, new Dg(k, this.la, this.h + 1, b)) : vb.b(this.e[a], d) ? this : new Dg(k, this.la, this.h, rg.c(this.e, a + 1, d))) : (new Ag(k, 1 << (this.la >>> a & 31), [k, this])).ba(a, b, c, d, f)
};
r.na = function(a, b, c, d) {
  a = Cg(this.e, this.h, c);
  return 0 > a ? d : qg(c, this.e[a]) ? this.e[a + 1] : d
};
var Eg = k;
function Fg(a, b, c, d, f, h) {
  var i = zc.a(b);
  if(i === d) {
    return new Dg(k, i, 2, [b, c, f, h])
  }
  var m = new lg;
  return Bg.ba(a, i, b, c, m).ba(a, d, f, h, m)
}
function Gg(a, b, c, d, f, h, i) {
  var m = zc.a(c);
  if(m === f) {
    return new Dg(k, m, 2, [c, d, h, i])
  }
  var q = new lg;
  return Bg.ca(a, b, m, c, d, q).ca(a, b, f, h, i, q)
}
Eg = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Fg.call(this, a, b, c, d, f, h);
    case 7:
      return Gg.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eg.ha = Fg;
Eg.xa = Gg;
og = Eg;
function Hg(a, b, c, d, f) {
  this.l = a;
  this.da = b;
  this.p = c;
  this.ea = d;
  this.m = f;
  this.r = 0;
  this.j = 31850572
}
r = Hg.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = ba();
r.X = function() {
  return this.ea == k ? Hf([this.da[this.p], this.da[this.p + 1]]) : J(this.ea)
};
r.U = function() {
  return this.ea == k ? mg.c ? mg.c(this.da, this.p + 2, k) : mg.call(k, this.da, this.p + 2, k) : mg.c ? mg.c(this.da, this.p, M(this.ea)) : mg.call(k, this.da, this.p, M(this.ea))
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Hg(b, this.da, this.p, this.ea, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(L, this.l)
};
var Ig = k;
function Jg(a) {
  return Ig.c(a, 0, k)
}
function Kg(a, b, c) {
  if(c == k) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != k) {
          return new Hg(k, a, b, k, k)
        }
        var d = a[b + 1];
        if(w(d) && (d = d.Fa(), w(d))) {
          return new Hg(k, a, b + 2, d, k)
        }
        b += 2
      }else {
        return k
      }
    }
  }else {
    return new Hg(k, a, b, c, k)
  }
}
Ig = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Jg.call(this, a);
    case 3:
      return Kg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ig.a = Jg;
Ig.c = Kg;
mg = Ig;
function Lg(a, b, c, d, f) {
  this.l = a;
  this.da = b;
  this.p = c;
  this.ea = d;
  this.m = f;
  this.r = 0;
  this.j = 31850572
}
r = Lg.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = ba();
r.X = function() {
  return J(this.ea)
};
r.U = function() {
  return ng.q ? ng.q(k, this.da, this.p, M(this.ea)) : ng.call(k, k, this.da, this.p, M(this.ea))
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Lg(b, this.da, this.p, this.ea, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(L, this.l)
};
var Mg = k;
function Ng(a) {
  return Mg.q(k, a, 0, k)
}
function Og(a, b, c, d) {
  if(d == k) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(w(f) && (f = f.Fa(), w(f))) {
          return new Lg(a, b, c + 1, f, k)
        }
        c += 1
      }else {
        return k
      }
    }
  }else {
    return new Lg(a, b, c, d, k)
  }
}
Mg = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Ng.call(this, a);
    case 4:
      return Og.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mg.a = Ng;
Mg.q = Og;
ng = Mg;
kg = g;
function Pg(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.T = d;
  this.Y = f;
  this.m = h;
  this.r = 4;
  this.j = 16123663
}
r = Pg.prototype;
r.Da = function() {
  return new kg({}, this.root, this.h, this.T, this.Y)
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = zd(a)
};
r.M = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  return b == k ? this.T ? this.Y : c : this.root == k ? c : this.root.na(0, zc.a(b), b, c)
};
r.V = function(a, b, c) {
  if(b == k) {
    var d = this.T;
    return w(d ? c === this.Y : d) ? a : new Pg(this.l, this.T ? this.h : this.h + 1, this.root, j, c, k)
  }
  d = new lg;
  c = (this.root == k ? Bg : this.root).ba(0, zc.a(b), b, c, d);
  return c === this.root ? a : new Pg(this.l, d.n ? this.h + 1 : this.h, c, this.T, this.Y, k)
};
r.Qa = function(a, b) {
  return b == k ? this.T : this.root == k ? l : this.root.na(0, zc.a(b), b, Ic) !== Ic
};
var Qg = k, Qg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Pg.prototype;
r.call = Qg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Fc(b) ? a.V(a, A.b(b, 0), A.b(b, 1)) : qa.c(wa, a, b)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = function() {
  if(0 < this.h) {
    var a = this.root != k ? this.root.Fa() : k;
    return this.T ? T(Hf([k, this.Y]), a) : a
  }
  return k
};
r.K = n("h");
r.z = function(a, b) {
  return Tf(a, b)
};
r.I = function(a, b) {
  return new Pg(b, this.h, this.root, this.T, this.Y, this.m)
};
r.G = n("l");
r.L = function() {
  return Ta(Xf, this.l)
};
var Xf = new Pg(k, 0, k, l, k, 0), kg = function(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.Y = f;
  this.r = 56;
  this.j = 258
};
kg.aa = j;
kg.fa = function() {
  return P.a("cljs.core/TransientHashMap")
};
kg.ga = function(a, b) {
  return G(b, "cljs.core/TransientHashMap")
};
r = kg.prototype;
r.wa = function(a, b, c) {
  return Rg(a, b, c)
};
r.Ea = function(a, b) {
  var c;
  a: {
    if(a.v) {
      b ? (c = b.j & 2048, c = w(c ? c : b.zb) ? j : b.j ? l : x(La, b)) : c = x(La, b);
      if(w(c)) {
        c = Rg(a, xd.a ? xd.a(b) : xd.call(k, b), yd.a ? yd.a(b) : yd.call(k, b));
        break a
      }
      c = H(b);
      for(var d = a;;) {
        var f = J(c);
        if(w(f)) {
          c = M(c), d = Rg(d, xd.a ? xd.a(f) : xd.call(k, f), yd.a ? yd.a(f) : yd.call(k, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = g
  }
  return c
};
r.Ma = function(a) {
  var b;
  a.v ? (a.v = k, b = new Pg(k, a.count, a.root, a.T, a.Y, k)) : e(Error("persistent! called twice"));
  return b
};
r.M = function(a, b) {
  return b == k ? this.T ? this.Y : k : this.root == k ? k : this.root.na(0, zc.a(b), b)
};
r.w = function(a, b, c) {
  return b == k ? this.T ? this.Y : c : this.root == k ? c : this.root.na(0, zc.a(b), b, c)
};
r.K = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Rg(a, b, c) {
  if(a.v) {
    if(b == k) {
      a.Y !== c && (a.Y = c), a.T || (a.count += 1, a.T = j)
    }else {
      var d = new lg, b = (a.root == k ? Bg : a.root).ca(a.v, 0, zc.a(b), b, c, d);
      b !== a.root && (a.root = b);
      d.n && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function Sg(a, b, c) {
  for(var d = b;;) {
    if(a != k) {
      b = c ? a.left : a.right, d = fc.b(d, a), a = b
    }else {
      return d
    }
  }
}
function Tg(a, b, c, d, f) {
  this.l = a;
  this.stack = b;
  this.Ga = c;
  this.h = d;
  this.m = f;
  this.r = 0;
  this.j = 31850574
}
r = Tg.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.O = ba();
r.K = function(a) {
  return 0 > this.h ? jc(M(a)) + 1 : this.h
};
r.X = function() {
  return Oa(this.stack)
};
r.U = function() {
  var a = J(this.stack), a = Sg(this.Ga ? a.right : a.left, M(this.stack), this.Ga);
  return a != k ? new Tg(k, a, this.Ga, this.h - 1, k) : L
};
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return new Tg(b, this.stack, this.Ga, this.h, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(L, this.l)
};
var Z = g, $ = g, $ = function(a, b, c, d, f) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.m = f;
  this.r = 0;
  this.j = 32402207
};
$.aa = j;
$.fa = function() {
  return P.a("cljs.core/BlackNode")
};
$.ga = function(a, b) {
  return G(b, "cljs.core/BlackNode")
};
$.prototype.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
$.prototype.M = function(a, b) {
  return a.R(a, b, k)
};
$.prototype.w = function(a, b, c) {
  return a.R(a, b, c)
};
$.prototype.V = function(a, b, c) {
  return sc.c(Hf([this.key, this.n]), b, c)
};
var Ug = k, Ug = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.call = Ug;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Hf([this.key, this.n, b])
};
r.Ja = n("key");
r.Ka = n("n");
r.lb = function(a) {
  return a.nb(this)
};
r.replace = function(a, b, c, d) {
  return new $(a, b, c, d, k)
};
r.kb = function(a) {
  return a.mb(this)
};
r.mb = function(a) {
  return new $(a.key, a.n, this, a.right, k)
};
var Vg = k, Vg = function() {
  switch(arguments.length) {
    case 0:
      return U.a ? U.a(this) : U.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.toString = Vg;
r.nb = function(a) {
  return new $(a.key, a.n, a.left, this, k)
};
r.Ha = function() {
  return this
};
r.ta = function(a, b) {
  return Hb.b(a, b)
};
r.ua = function(a, b, c) {
  return Hb.c(a, b, c)
};
r.O = function() {
  return P.b(this.key, this.n)
};
r.K = p(2);
r.va = n("n");
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return Q(Hf([this.key, this.n]), b)
};
r.G = p(k);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c
};
r.L = function() {
  return Ff
};
Z = function(a, b, c, d, f) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.m = f;
  this.r = 0;
  this.j = 32402207
};
Z.aa = j;
Z.fa = function() {
  return P.a("cljs.core/RedNode")
};
Z.ga = function(a, b) {
  return G(b, "cljs.core/RedNode")
};
Z.prototype.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Rb(a)
};
Z.prototype.M = function(a, b) {
  return a.R(a, b, k)
};
Z.prototype.w = function(a, b, c) {
  return a.R(a, b, c)
};
Z.prototype.V = function(a, b, c) {
  return sc.c(Hf([this.key, this.n]), b, c)
};
var Wg = k, Wg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.call = Wg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Hf([this.key, this.n, b])
};
r.Ja = n("key");
r.Ka = n("n");
r.lb = function(a) {
  return new Z(this.key, this.n, this.left, a, k)
};
r.replace = function(a, b, c, d) {
  return new Z(a, b, c, d, k)
};
r.kb = function(a) {
  return new Z(this.key, this.n, a, this.right, k)
};
r.mb = function(a) {
  return Ab(Z, this.left) ? new Z(this.key, this.n, this.left.Ha(), new $(a.key, a.n, this.right, a.right, k), k) : Ab(Z, this.right) ? new Z(this.right.key, this.right.n, new $(this.key, this.n, this.left, this.right.left, k), new $(a.key, a.n, this.right.right, a.right, k), k) : new $(a.key, a.n, this, a.right, k)
};
var Xg = k, Xg = function() {
  switch(arguments.length) {
    case 0:
      return U.a ? U.a(this) : U.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.toString = Xg;
r.nb = function(a) {
  return Ab(Z, this.right) ? new Z(this.key, this.n, new $(a.key, a.n, a.left, this.left, k), this.right.Ha(), k) : Ab(Z, this.left) ? new Z(this.left.key, this.left.n, new $(a.key, a.n, a.left, this.left.left, k), new $(this.key, this.n, this.left.right, this.right, k), k) : new $(a.key, a.n, a.left, this, k)
};
r.Ha = function() {
  return new $(this.key, this.n, this.left, this.right, k)
};
r.ta = function(a, b) {
  return Hb.b(a, b)
};
r.ua = function(a, b, c) {
  return Hb.c(a, b, c)
};
r.O = function() {
  return P.b(this.key, this.n)
};
r.K = p(2);
r.va = n("n");
r.z = function(a, b) {
  return Cb(a, b)
};
r.I = function(a, b) {
  return Q(Hf([this.key, this.n]), b)
};
r.G = p(k);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c
};
r.L = function() {
  return Ff
};
var Zg = function Yg(b, c, d, f, h) {
  if(c == k) {
    return new Z(d, f, k, k, k)
  }
  var i = b.b ? b.b(d, c.key) : b.call(k, d, c.key);
  if(0 === i) {
    return h[0] = c, k
  }
  if(0 > i) {
    return b = Yg(b, c.left, d, f, h), b != k ? c.kb(b) : k
  }
  b = Yg(b, c.right, d, f, h);
  return b != k ? c.lb(b) : k
}, ah = function $g(b, c, d, f) {
  var h = c.key, i = b.b ? b.b(d, h) : b.call(k, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.n, $g(b, c.left, d, f), c.right) : c.replace(h, c.n, c.left, $g(b, c.right, d, f))
}, xd = g;
function bh(a, b, c, d, f) {
  this.ma = a;
  this.Ba = b;
  this.h = c;
  this.l = d;
  this.m = f;
  this.r = 0;
  this.j = 418776847
}
r = bh.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = zd(a)
};
r.M = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  a = ch(a, b);
  return a != k ? a.n : c
};
r.V = function(a, b, c) {
  var d = [k], f = Zg(this.ma, this.Ba, b, c, d);
  return f == k ? (d = oc.b(d, 0), vb.b(c, d.n) ? a : new bh(this.ma, ah(this.ma, this.Ba, b, c), this.h, this.l, k)) : new bh(this.ma, f.Ha(), this.h + 1, this.l, k)
};
r.Qa = function(a, b) {
  return ch(a, b) != k
};
var dh = k, dh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = bh.prototype;
r.call = dh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Fc(b) ? a.V(a, A.b(b, 0), A.b(b, 1)) : qa.c(wa, a, b)
};
r.La = function() {
  return 0 < this.h ? new Tg(k, Sg(this.Ba, k, l), l, this.h, k) : k
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
function ch(a, b) {
  for(var c = a.Ba;;) {
    if(c != k) {
      var d = a.ma.b ? a.ma.b(b, c.key) : a.ma.call(k, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return k
    }
  }
}
r.O = function() {
  return 0 < this.h ? new Tg(k, Sg(this.Ba, k, j), j, this.h, k) : k
};
r.K = n("h");
r.z = function(a, b) {
  return Tf(a, b)
};
r.I = function(a, b) {
  return new bh(this.ma, this.Ba, this.h, b, this.m)
};
r.G = n("l");
r.L = function() {
  return Q(eh, this.l)
};
var eh = new bh(Nc, k, 0, k, 0);
function fh(a) {
  for(var b = H(a), c = lb(Xf);;) {
    if(b) {
      var a = M(M(b)), d = J(b), b = J(M(b)), c = ob(c, d, b), b = a
    }else {
      return nb(c)
    }
  }
}
function gh(a) {
  var b = k;
  s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return fh.call(this, b)
}
gh.o = 0;
gh.k = function(a) {
  a = H(a);
  return fh(a)
};
gh.g = fh;
Bb = gh;
function hh(a) {
  return new fg(k, fd(jc(a)), z.b(na, a), k)
}
function ih(a) {
  var b = k;
  s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return hh.call(this, b)
}
ih.o = 0;
ih.k = function(a) {
  a = H(a);
  return hh(a)
};
ih.g = hh;
function jh(a) {
  for(var a = H(a), b = eh;;) {
    if(a) {
      var c = M(M(a)), b = sc.c(b, J(a), J(M(a))), a = c
    }else {
      return b
    }
  }
}
function kh(a) {
  var b = k;
  s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return jh.call(this, b)
}
kh.o = 0;
kh.k = function(a) {
  a = H(a);
  return jh(a)
};
kh.g = jh;
xd = function(a) {
  return Ma(a)
};
yd = function(a) {
  return Na(a)
};
Bb();
kh();
Ad = function(a) {
  if(Kc(a)) {
    return a
  }
  var b = Lc(a);
  if(w(b ? b : Mc(a))) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? qd.b(a, 2) : qd.b(a, b + 1)
  }
  e(Error([V("Doesn't support name: "), V(a)].join("")))
};
function lh(a) {
  var b = Lc(a);
  if(w(b ? b : Mc(a))) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? qd.c(a, 2, b) : k
  }
  e(Error([V("Doesn't support namespace: "), V(a)].join("")))
}
var mh, nh = k;
function oh(a) {
  for(;;) {
    if(H(a)) {
      a = M(a)
    }else {
      return k
    }
  }
}
function ph(a, b) {
  for(;;) {
    var c = H(b);
    if(w(c ? 0 < a : c)) {
      var c = a - 1, d = M(b), a = c, b = d
    }else {
      return k
    }
  }
}
nh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return oh.call(this, a);
    case 2:
      return ph.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nh.a = oh;
nh.b = ph;
mh = nh;
var qh, rh = k;
function sh(a) {
  mh.a(a);
  return a
}
function th(a, b) {
  mh.b(a, b);
  return b
}
rh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return sh.call(this, a);
    case 2:
      return th.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rh.a = sh;
rh.b = th;
qh = rh;
X = function(a, b, c, d, f, h) {
  return de.g(Hf([b]), gf(ff(Hf([c]), sd.b(function(b) {
    return a.b ? a.b(b, f) : a.call(k, b, f)
  }, h))), O([Hf([d])], 0))
};
Y = function(a, b, c, d, f, h, i) {
  G(a, c);
  H(i) && (b.c ? b.c(J(i), a, h) : b.call(k, J(i), a, h));
  for(c = H(M(i));;) {
    if(c) {
      i = J(c), G(a, d), b.c ? b.c(i, a, h) : b.call(k, i, a, h), c = M(c)
    }else {
      break
    }
  }
  return G(a, f)
};
function uh(a, b) {
  for(var c = H(b);;) {
    if(c) {
      var d = J(c);
      G(a, d);
      c = M(c)
    }else {
      return k
    }
  }
}
function vh(a, b) {
  var c = k;
  s(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return uh.call(this, a, c)
}
vh.o = 1;
vh.k = function(a) {
  var b = J(a), a = K(a);
  return uh(b, a)
};
vh.g = uh;
function wh(a) {
  this.Cb = a;
  this.r = 0;
  this.j = 1073741824
}
wh.prototype.tb = function(a, b) {
  return this.Cb.append(b)
};
wh.prototype.Bb = p(k);
var yh = function xh(b, c) {
  return b == k ? P.a("nil") : g === b ? P.a("#<undefined>") : de.b(w(function() {
    var d = F.c(c, "\ufdd0:meta", k);
    return w(d) ? (b ? (d = b.j & 131072, d = w(d ? d : b.sb) ? j : b.j ? l : x(Ra, b)) : d = x(Ra, b), w(d) ? wc(b) : d) : d
  }()) ? de.g(Hf(["^"]), xh(wc(b), c), O([Hf([" "])], 0)) : k, w(function() {
    var c = b != k;
    return c ? b.aa : c
  }()) ? b.fa(b) : w(b ? w(function() {
    var c = b.j & 536870912;
    return c ? c : b.H
  }()) ? j : b.j ? l : x(eb, b) : x(eb, b)) ? fb(b, c) : w(b instanceof RegExp) ? P.c('#"', b.source, '"') : P.c("#<", "" + V(b), ">"))
}, Bf = function zh(b, c, d) {
  if(b == k) {
    return G(c, "nil")
  }
  if(g === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = F.c(d, "\ufdd0:meta", k);
  w(f) && (b ? (f = b.j & 131072, f = w(f ? f : b.sb) ? j : b.j ? l : x(Ra, b)) : f = x(Ra, b), f = w(f) ? wc(b) : f);
  w(f) && (G(c, "^"), zh(wc(b), c, d), G(c, " "));
  f = b != k;
  w(f ? b.aa : f) ? b = b.ga(b, c, d) : (b ? (f = b.j & 2147483648, f = w(f ? f : b.N) ? j : b.j ? l : x(ib, b)) : f = x(ib, b), w(f) ? b = jb(b, c, d) : (b ? (f = b.j & 536870912, f = w(f ? f : b.H) ? j : b.j ? l : x(eb, b)) : f = x(eb, b), b = w(f) ? z.c(vh, c, fb(b, d)) : w(b instanceof RegExp) ? vh.g(c, O(['#"', b.source, '"'], 0)) : vh.g(c, O(["#<", "" + V(b), ">"], 0))));
  return b
};
function Ah(a) {
  var b = cg(["\ufdd0:flush-on-newline", "\ufdd0:readably", "\ufdd0:meta", "\ufdd0:dup"], {"\ufdd0:flush-on-newline":j, "\ufdd0:readably":j, "\ufdd0:meta":l, "\ufdd0:dup":l}), c = a == k;
  c || (c = H(a), c = w(c) ? l : j);
  if(c) {
    b = ""
  }else {
    var c = new ma, d = new wh(c);
    a: {
      Bf(J(a), d, b);
      for(a = H(M(a));;) {
        if(a) {
          var f = J(a);
          G(d, " ");
          Bf(f, d, b);
          a = M(a)
        }else {
          break a
        }
      }
    }
    hb(d);
    b = "" + V(c)
  }
  return b
}
function Bh(a) {
  var b = k;
  s(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Ah(b)
}
Bh.o = 0;
Bh.k = function(a) {
  a = H(a);
  return Ah(a)
};
Bh.g = function(a) {
  return Ah(a)
};
var U = Bh, Ch = cg('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function Dh(a) {
  return[V('"'), V(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return F.c(Ch, a, k)
  })), V('"')].join("")
}
eb.number = j;
fb.number = function(a) {
  return P.a("" + V(a))
};
Vb.prototype.H = j;
Vb.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
Zd.prototype.H = j;
Zd.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
bh.prototype.H = j;
bh.prototype.B = function(a, b) {
  return X(function(a) {
    return X(yh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
fg.prototype.H = j;
fg.prototype.B = function(a, b) {
  return X(function(a) {
    return X(yh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
W.prototype.H = j;
W.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
Sb.prototype.H = j;
Sb.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
eb["boolean"] = j;
fb["boolean"] = function(a) {
  return P.a("" + V(a))
};
eb.string = j;
fb.string = function(a, b) {
  return Lc(a) ? P.a([V(":"), V(function() {
    var b = lh(a);
    return w(b) ? [V(b), V("/")].join("") : k
  }()), V(Ad(a))].join("")) : Mc(a) ? P.a([V(function() {
    var b = lh(a);
    return w(b) ? [V(b), V("/")].join("") : k
  }()), V(Ad(a))].join("")) : P.a(w((new Od("\ufdd0:readably")).call(k, b)) ? Dh(a) : a)
};
Hg.prototype.H = j;
Hg.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
Z.prototype.H = j;
Z.prototype.B = function(a, b) {
  return X(yh, "[", " ", "]", b, a)
};
Jf.prototype.H = j;
Jf.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
Pg.prototype.H = j;
Pg.prototype.B = function(a, b) {
  return X(function(a) {
    return X(yh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Df.prototype.H = j;
Df.prototype.B = function(a, b) {
  return X(yh, "[", " ", "]", b, a)
};
Bd.prototype.H = j;
Bd.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
eb.array = j;
fb.array = function(a, b) {
  return X(yh, "#<Array [", ", ", "]>", b, a)
};
eb["function"] = j;
fb["function"] = function(a) {
  return P.c("#<", "" + V(a), ">")
};
Cd.prototype.H = j;
Cd.prototype.B = function() {
  return P.a("()")
};
$.prototype.H = j;
$.prototype.B = function(a, b) {
  return X(yh, "[", " ", "]", b, a)
};
Date.prototype.H = j;
Date.prototype.B = function(a) {
  function b(a, b) {
    for(var f = "" + V(a);;) {
      if(jc(f) < b) {
        f = [V("0"), V(f)].join("")
      }else {
        return f
      }
    }
  }
  return P.a([V('#inst "'), V(a.getUTCFullYear()), V("-"), V(b(a.getUTCMonth() + 1, 2)), V("-"), V(b(a.getUTCDate(), 2)), V("T"), V(b(a.getUTCHours(), 2)), V(":"), V(b(a.getUTCMinutes(), 2)), V(":"), V(b(a.getUTCSeconds(), 2)), V("."), V(b(a.getUTCMilliseconds(), 3)), V("-"), V('00:00"')].join(""))
};
Kd.prototype.H = j;
Kd.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
Lg.prototype.H = j;
Lg.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
Zf.prototype.H = j;
Zf.prototype.B = function(a, b) {
  return X(function(a) {
    return X(yh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Tg.prototype.H = j;
Tg.prototype.B = function(a, b) {
  return X(yh, "(", " ", ")", b, a)
};
ib.number = j;
jb.number = function(a, b) {
  1 / 0;
  return G(b, "" + V(a))
};
Vb.prototype.N = j;
Vb.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Zd.prototype.N = j;
Zd.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
bh.prototype.N = j;
bh.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Bf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
fg.prototype.N = j;
fg.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Bf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.N = j;
W.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Sb.prototype.N = j;
Sb.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
ib["boolean"] = j;
jb["boolean"] = function(a, b) {
  return G(b, "" + V(a))
};
ib.string = j;
jb.string = function(a, b, c) {
  return Lc(a) ? (G(b, ":"), c = lh(a), w(c) && vh.g(b, O(["" + V(c), "/"], 0)), G(b, Ad(a))) : Mc(a) ? (c = lh(a), w(c) && vh.g(b, O(["" + V(c), "/"], 0)), G(b, Ad(a))) : w((new Od("\ufdd0:readably")).call(k, c)) ? G(b, Dh(a)) : G(b, a)
};
Hg.prototype.N = j;
Hg.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Z.prototype.N = j;
Z.prototype.A = function(a, b, c) {
  return Y(b, Bf, "[", " ", "]", c, a)
};
Jf.prototype.N = j;
Jf.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Pg.prototype.N = j;
Pg.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Bf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Df.prototype.N = j;
Df.prototype.A = function(a, b, c) {
  return Y(b, Bf, "[", " ", "]", c, a)
};
Bd.prototype.N = j;
Bd.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
ib.array = j;
jb.array = function(a, b, c) {
  return Y(b, Bf, "#<Array [", ", ", "]>", c, a)
};
ib["function"] = j;
jb["function"] = function(a, b) {
  return vh.g(b, O(["#<", "" + V(a), ">"], 0))
};
Cd.prototype.N = j;
Cd.prototype.A = function(a, b) {
  return G(b, "()")
};
$.prototype.N = j;
$.prototype.A = function(a, b, c) {
  return Y(b, Bf, "[", " ", "]", c, a)
};
Date.prototype.N = j;
Date.prototype.A = function(a, b) {
  function c(a, b) {
    for(var c = "" + V(a);;) {
      if(jc(c) < b) {
        c = [V("0"), V(c)].join("")
      }else {
        return c
      }
    }
  }
  return vh.g(b, O(['#inst "', "" + V(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
Kd.prototype.N = j;
Kd.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Lg.prototype.N = j;
Lg.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Zf.prototype.N = j;
Zf.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Bf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Tg.prototype.N = j;
Tg.prototype.A = function(a, b, c) {
  return Y(b, Bf, "(", " ", ")", c, a)
};
Df.prototype.ub = j;
Df.prototype.qb = function(a, b) {
  return Oc.b(a, b)
};
function Eh(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Nb = c;
  this.Ob = d;
  this.j = 2690809856;
  this.r = 2
}
r = Eh.prototype;
r.F = function(a) {
  return a[fa] || (a[fa] = ++ha)
};
r.A = function(a, b, c) {
  G(b, "#<Atom: ");
  jb(this.state, b, c);
  return G(b, ">")
};
r.B = function(a, b) {
  return de.g(Hf(["#<Atom: "]), fb(this.state, b), O([">"], 0))
};
r.G = n("l");
r.Sa = n("state");
r.z = function(a, b) {
  return a === b
};
var Fh = k;
function Gh(a) {
  return new Eh(a, k, k, k)
}
function Hh(a, b) {
  var c = Jc(b) ? z.b(Bb, b) : b, d = F.c(c, "\ufdd0:validator", k), c = F.c(c, "\ufdd0:meta", k);
  return new Eh(a, c, d, k)
}
function Ih(a, b) {
  var c = k;
  s(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Hh.call(this, a, c)
}
Ih.o = 1;
Ih.k = function(a) {
  var b = J(a), a = K(a);
  return Hh(b, a)
};
Ih.g = Hh;
Fh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Gh.call(this, a);
    default:
      return Ih.g(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fh.o = 1;
Fh.k = Ih.k;
Fh.a = Gh;
Fh.g = Ih.g;
pg = Fh;
S = function(a) {
  return Qa(a)
};
function Jh(a) {
  if(a ? a.xb : a) {
    return a.xb(a)
  }
  var b;
  var c = Jh[t(a == k ? k : a)];
  c ? b = c : (c = Jh._) ? b = c : e(y("IEncodeJS.-clj->js", a));
  return b.call(k, a)
}
function Kh(a) {
  if(a ? a.yb : a) {
    return a.yb(a)
  }
  var b;
  var c = Kh[t(a == k ? k : a)];
  c ? b = c : (c = Kh._) ? b = c : e(y("IEncodeJS.-key->js", a));
  return b.call(k, a)
}
Jh["null"] = p(k);
Kh._ = function(a) {
  return w(function() {
    var b = Kc(a);
    return b || (b = "number" == typeof a) ? b : (b = Lc(a)) ? b : Mc(a)
  }()) ? Jh(a) : U.g(O([a], 0))
};
Jh._ = function(a) {
  if(Lc(a)) {
    return Ad(a)
  }
  if(Mc(a)) {
    return"" + V(a)
  }
  if(Ec(a)) {
    for(var b = {}, a = H(a);;) {
      if(a) {
        var c = J(a), d = oc.c(c, 0, k), c = oc.c(c, 1, k);
        b[Kh(d)] = Jh(c);
        a = M(a)
      }else {
        break
      }
    }
    return b
  }
  return Dc(a) ? z.b(na, sd.b(Jh, a)) : a
};
function Lh(a) {
  return Jh(a)
}
var Mh, Nh = k;
function Oh(a) {
  if(a ? a.vb : a) {
    return a.vb(a)
  }
  var b;
  var c = Mh[t(a == k ? k : a)];
  c ? b = c : (c = Mh._) ? b = c : e(y("IEncodeClojure.-js->clj", a));
  return b.call(k, a)
}
function Ph(a, b) {
  if(a ? a.wb : a) {
    return a.wb(a, b)
  }
  var c;
  var d = Mh[t(a == k ? k : a)];
  d ? c = d : (d = Mh._) ? c = d : e(y("IEncodeClojure.-js->clj", a));
  return c.call(k, a, b)
}
Nh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Oh.call(this, a);
    case 2:
      return Ph.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nh.a = Oh;
Nh.b = Ph;
Mh = Nh;
var Qh = k, Qh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Mh.b(a, cg(["\ufdd0:keywordize-keys"], {"\ufdd0:keywordize-keys":l}));
    case 2:
      var c = Jc(b) ? z.b(Bb, b) : b, c = F.c(c, "\ufdd0:keywordize-keys", k), d = w(c) ? td : V;
      return function h(a) {
        var b;
        if(Jc(a)) {
          b = qh.a(sd.b(h, a))
        }else {
          if(Dc(a)) {
            b = kf(ta(a), sd.b(h, a))
          }else {
            if(w("array" == t(a))) {
              b = bd(sd.b(h, a))
            }else {
              if((a == k ? k : a.constructor) === Object) {
                b = bg;
                var c = [], v = function(a, b) {
                  return c.push(b)
                }, C;
                for(C in a) {
                  v.call(g, 0, C)
                }
                b = kf(b, function E(b) {
                  return new W(k, l, function() {
                    for(;;) {
                      var c = H(b);
                      return c ? (c = J(c), T(Hf([d.a ? d.a(c) : d.call(k, c), h(a[c])]), E(K(b)))) : k
                    }
                  }, k)
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
  e(Error("Invalid arity: " + arguments.length))
};
Mh._ = Qh;
function Rh(a, b) {
  return Mh.b(a, z.b(ih, b))
}
function Sh(a, b) {
  var c = k;
  s(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Rh.call(this, a, c)
}
Sh.o = 1;
Sh.k = function(a) {
  var b = J(a), a = K(a);
  return Rh(b, a)
};
Sh.g = Rh;
pg.a(cg(["\ufdd0:parents", "\ufdd0:descendants", "\ufdd0:ancestors"], {"\ufdd0:parents":bg, "\ufdd0:descendants":bg, "\ufdd0:ancestors":bg}));
var Th, Uh = k;
function Vh(a) {
  return z.b(V, a)
}
function Wh(a, b) {
  return z.b(V, ff(a, b))
}
Uh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Vh.call(this, a);
    case 2:
      return Wh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uh.a = Vh;
Uh.b = Wh;
Th = Uh;
var Xh, Yh = k;
function Zh(a, b) {
  return bd(("" + V(a)).split(b))
}
function $h(a, b, c) {
  if(1 > c) {
    return bd(("" + V(a)).split(b))
  }
  for(var d = Ff;;) {
    if(vb.b(c, 1)) {
      return fc.b(d, a)
    }
    var f;
    f = b.exec(a);
    f = f == k ? k : 1 === jc(f) ? J(f) : bd(f);
    if(w(f)) {
      var h = f;
      f = a.indexOf(h);
      h = a.substring(f + jc(h));
      c -= 1;
      d = fc.b(d, a.substring(0, f));
      a = h
    }else {
      return fc.b(d, a)
    }
  }
}
Yh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Zh.call(this, a, b);
    case 3:
      return $h.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yh.b = Zh;
Yh.c = $h;
Xh = Yh;
function ai(a) {
  for(var b = a.length;;) {
    if(0 === b) {
      return""
    }
    var c = F.c(a, b - 1, k), d = vb.b(c, "\n"), c = d ? d : vb.b(c, "\r");
    if(w(c)) {
      b -= 1
    }else {
      return a.substring(0, b)
    }
  }
}
;function bi(a) {
  return parseInt(a)
}
var ci = Be.b("\ufdd0:acc", He.c(qa, function(a, b) {
  var c = Jc(a) ? z.b(Bb, a) : a, d = F.c(c, "\ufdd0:acc", k), c = F.c(c, "\ufdd0:index", k);
  return cg(["\ufdd0:index", "\ufdd0:acc"], {"\ufdd0:index":c + 1, "\ufdd0:acc":fc.b(d, cg(["\ufdd0:index", "\ufdd0:value"], {"\ufdd0:index":c, "\ufdd0:value":b}))})
}, cg(["\ufdd0:index", "\ufdd0:acc"], {"\ufdd0:index":1, "\ufdd0:acc":Ff})));
function di(a, b) {
  return lf.b(a, b)
}
function ei(a, b, c) {
  var d = Xh.b(ai(c), /\n/), c = bi.a ? bi.a(J(d)) : bi.call(k, J(d)), b = ci.a ? ci.a(di(b, K(d))) : ci.call(k, di(b, K(d)));
  (d = vb.b(c, jc(b))) || e(Error([V("Assert failed: "), V(U.g(O(["\ufdd1'isCountValid"], 0)))].join("")));
  return sd.b(a, (new Od("\ufdd0:rawCases")).call(k, cg(["\ufdd0:count", "\ufdd0:rawCases", "\ufdd0:isCountValid"], {"\ufdd0:count":c, "\ufdd0:rawCases":b, "\ufdd0:isCountValid":d})))
}
;function fi(a) {
  var b = Jc(a) ? z.b(Bb, a) : a, a = F.c(b, "\ufdd0:result", k), b = F.c(b, "\ufdd0:caseNumber", k);
  return[V("Case #"), V(b), V(": "), V(a)].join("")
}
function gi(a, b, c) {
  a = a.a ? a.a(c) : a.call(k, c);
  b = sd.b(b, a);
  return z.b(V, Th.b("\n", sd.b(fi, b)))
}
;var hi = He.c(ei, function(a) {
  var a = Jc(a) ? z.b(Bb, a) : a, b = F.c(a, "\ufdd0:value", k), a = F.c(a, "\ufdd0:index", k), b = oc.c(b, 0, k), b = Xh.b(b, /\s/);
  return cg(["\ufdd0:caseNumber", "\ufdd0:words"], {"\ufdd0:caseNumber":a, "\ufdd0:words":b})
}, 1);
function ii(a) {
  var b = Jc(a) ? z.b(Bb, a) : a, a = F.c(b, "\ufdd0:words", k), b = F.c(b, "\ufdd0:caseNumber", k), a = Th.b(" ", Dd(a));
  return cg(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":a})
}
da("problems.reverse_words.main.solve_for_input", function(a) {
  return"" + V(gi.c ? gi.c(hi, ii, a) : gi.call(k, hi, ii, a))
});
var ji = He.c(ei, function(a) {
  var a = Jc(a) ? z.b(Bb, a) : a, b = F.c(a, "\ufdd0:value", k), a = F.c(a, "\ufdd0:index", k), c = oc.c(b, 0, k);
  oc.c(b, 1, k);
  b = oc.c(b, 2, k);
  c = bi.a ? bi.a(c) : bi.call(k, c);
  b = ci.a ? ci.a(sd.b(bi, Xh.b(b, /\s/))) : ci.call(k, sd.b(bi, Xh.b(b, /\s/)));
  return cg(["\ufdd0:caseNumber", "\ufdd0:credit", "\ufdd0:items"], {"\ufdd0:caseNumber":a, "\ufdd0:credit":c, "\ufdd0:items":b})
}, 3);
function ki(a) {
  var a = Jc(a) ? z.b(Bb, a) : a, b = F.c(a, "\ufdd0:items", k), c = F.c(a, "\ufdd0:credit", k), a = F.c(a, "\ufdd0:caseNumber", k), d = jf(function(a) {
    return(new Od("\ufdd0:value")).call(k, a) < c
  }, b), f = c / 2, h = jf(function(a) {
    return(new Od("\ufdd0:value")).call(k, a) > f
  }, d), i = jf(function(a) {
    return(new Od("\ufdd0:value")).call(k, a) < f
  }, d), m = jf(function(a) {
    return vb.b((new Od("\ufdd0:value")).call(k, a), f)
  }, d), b = w(J(M(m))) ? m : J(function v(a) {
    return new W(k, l, function() {
      for(var b = a;;) {
        var E = H(b);
        if(E) {
          var N = E, R = J(N);
          if(E = H(function(a, b) {
            return function xa(a) {
              return new W(k, l, function() {
                for(var d = a;;) {
                  var f = H(d);
                  if(f) {
                    f = J(f);
                    if(vb.b(c, (new Od("\ufdd0:value")).call(k, b) + (new Od("\ufdd0:value")).call(k, f))) {
                      return T(Hf([b, f]), xa(K(d)))
                    }
                    d = K(d)
                  }else {
                    return k
                  }
                }
              }, k)
            }
          }(b, R, N, E, d, f, h, i, m)(i))) {
            return de.b(E, v(K(b)))
          }
          b = K(b)
        }else {
          return k
        }
      }
    }, k)
  }(h)), b = Th.b(" ", Tc.a(sd.b("\ufdd0:index", b)));
  return cg(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":b})
}
da("problems.store_credit.main.solve_for_input", function(a) {
  return"" + V(gi.c ? gi.c(ji, ki, a) : gi.call(k, ji, ki, a))
});
self.addEventListener("message", function(a) {
  var b = Sh(a.data), a = b.a ? b.a("problemName") : b.call(k, "problemName"), b = b.a ? b.a("input") : b.call(k, "input"), a = self.problems[a].main.solve_for_input;
  return self.postMessage(Lh(cg(["\ufdd0:status", "\ufdd0:message"], {"\ufdd0:status":"completed", "\ufdd0:message":a.a ? a.a(b) : a.call(k, b)})))
});
