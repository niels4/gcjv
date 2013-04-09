function e(a) {
  throw a;
}
var g = void 0, j = !0, k = null, m = !1;
function aa() {
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
var r, ba = this;
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
  var c = a.split("."), d = ba;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && t(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
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
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, l, q, w, v, A) {
    if("%" == w) {
      return"%"
    }
    var C = c.shift();
    "undefined" == typeof C && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = C;
    return ka.ia[w].apply(k, arguments)
  })
}
ka.ia = {};
ka.ia.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ka.ia.f = function(a, b, c, d, f) {
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
ka.ia.d = function(a, b, c, d, f, h, i, l) {
  return ka.ia.f(parseInt(a, 10), b, c, d, 0, h, i, l)
};
ka.ia.i = ka.ia.d;
ka.ia.u = ka.ia.d;
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
function x(a) {
  return a != k && a !== m
}
function na(a) {
  return x(a) ? m : j
}
function y(a, b) {
  return a[s(b == k ? k : b)] ? j : a._ ? j : m
}
function z(a, b) {
  return Error(["No protocol method ", a, " defined for type ", s(b), ": ", b].join(""))
}
function oa(a) {
  return Array.prototype.slice.call(arguments)
}
var pa, qa = k, qa = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return qa.a(b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qa.a = function(a) {
  return Array(a)
};
qa.b = function(a, b) {
  return qa.a(b)
};
pa = qa;
var B = g, ra = g, sa = {};
function ta(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  var c = ta[s(a == k ? k : a)];
  c ? b = c : (c = ta._) ? b = c : e(z("ICounted.-count", a));
  return b.call(k, a)
}
function ua(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  var c = ua[s(a == k ? k : a)];
  c ? b = c : (c = ua._) ? b = c : e(z("IEmptyableCollection.-empty", a));
  return b.call(k, a)
}
var va = {};
function wa(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = wa[s(a == k ? k : a)];
  d ? c = d : (d = wa._) ? c = d : e(z("ICollection.-conj", a));
  return c.call(k, a, b)
}
var xa = {}, D, za = k;
function Aa(a, b) {
  if(a ? a.W : a) {
    return a.W(a, b)
  }
  var c;
  var d = D[s(a == k ? k : a)];
  d ? c = d : (d = D._) ? c = d : e(z("IIndexed.-nth", a));
  return c.call(k, a, b)
}
function Ca(a, b, c) {
  if(a ? a.R : a) {
    return a.R(a, b, c)
  }
  var d;
  var f = D[s(a == k ? k : a)];
  f ? d = f : (f = D._) ? d = f : e(z("IIndexed.-nth", a));
  return d.call(k, a, b, c)
}
za = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Aa.call(this, a, b);
    case 3:
      return Ca.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
za.b = Aa;
za.c = Ca;
D = za;
var Da = {}, Ea = {};
function E(a) {
  if(a ? a.X : a) {
    return a.X(a)
  }
  var b;
  var c = E[s(a == k ? k : a)];
  c ? b = c : (c = E._) ? b = c : e(z("ISeq.-first", a));
  return b.call(k, a)
}
function F(a) {
  if(a ? a.U : a) {
    return a.U(a)
  }
  var b;
  var c = F[s(a == k ? k : a)];
  c ? b = c : (c = F._) ? b = c : e(z("ISeq.-rest", a));
  return b.call(k, a)
}
var Fa = {};
function Ga(a) {
  if(a ? a.pa : a) {
    return a.pa(a)
  }
  var b;
  var c = Ga[s(a == k ? k : a)];
  c ? b = c : (c = Ga._) ? b = c : e(z("INext.-next", a));
  return b.call(k, a)
}
var G, Ha = k;
function Ia(a, b) {
  if(a ? a.N : a) {
    return a.N(a, b)
  }
  var c;
  var d = G[s(a == k ? k : a)];
  d ? c = d : (d = G._) ? c = d : e(z("ILookup.-lookup", a));
  return c.call(k, a, b)
}
function Ja(a, b, c) {
  if(a ? a.w : a) {
    return a.w(a, b, c)
  }
  var d;
  var f = G[s(a == k ? k : a)];
  f ? d = f : (f = G._) ? d = f : e(z("ILookup.-lookup", a));
  return d.call(k, a, b, c)
}
Ha = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ia.call(this, a, b);
    case 3:
      return Ja.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ha.b = Ia;
Ha.c = Ja;
G = Ha;
function Ka(a, b, c) {
  if(a ? a.V : a) {
    return a.V(a, b, c)
  }
  var d;
  var f = Ka[s(a == k ? k : a)];
  f ? d = f : (f = Ka._) ? d = f : e(z("IAssociative.-assoc", a));
  return d.call(k, a, b, c)
}
var La = {}, Ma = {};
function Na(a) {
  if(a ? a.Ja : a) {
    return a.Ja(a)
  }
  var b;
  var c = Na[s(a == k ? k : a)];
  c ? b = c : (c = Na._) ? b = c : e(z("IMapEntry.-key", a));
  return b.call(k, a)
}
function Oa(a) {
  if(a ? a.Ka : a) {
    return a.Ka(a)
  }
  var b;
  var c = Oa[s(a == k ? k : a)];
  c ? b = c : (c = Oa._) ? b = c : e(z("IMapEntry.-val", a));
  return b.call(k, a)
}
function Pa(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = Pa[s(a == k ? k : a)];
  c ? b = c : (c = Pa._) ? b = c : e(z("IStack.-peek", a));
  return b.call(k, a)
}
var Qa = {};
function Ra(a) {
  if(a ? a.Sa : a) {
    return a.Sa(a)
  }
  var b;
  var c = Ra[s(a == k ? k : a)];
  c ? b = c : (c = Ra._) ? b = c : e(z("IDeref.-deref", a));
  return b.call(k, a)
}
var Sa = {};
function Ta(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Ta[s(a == k ? k : a)];
  c ? b = c : (c = Ta._) ? b = c : e(z("IMeta.-meta", a));
  return b.call(k, a)
}
function Ua(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Ua[s(a == k ? k : a)];
  d ? c = d : (d = Ua._) ? c = d : e(z("IWithMeta.-with-meta", a));
  return c.call(k, a, b)
}
var Va = {}, Wa, Xa = k;
function Ya(a, b) {
  if(a ? a.ta : a) {
    return a.ta(a, b)
  }
  var c;
  var d = Wa[s(a == k ? k : a)];
  d ? c = d : (d = Wa._) ? c = d : e(z("IReduce.-reduce", a));
  return c.call(k, a, b)
}
function Za(a, b, c) {
  if(a ? a.ua : a) {
    return a.ua(a, b, c)
  }
  var d;
  var f = Wa[s(a == k ? k : a)];
  f ? d = f : (f = Wa._) ? d = f : e(z("IReduce.-reduce", a));
  return d.call(k, a, b, c)
}
Xa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ya.call(this, a, b);
    case 3:
      return Za.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xa.b = Ya;
Xa.c = Za;
Wa = Xa;
function $a(a, b) {
  if(a ? a.z : a) {
    return a.z(a, b)
  }
  var c;
  var d = $a[s(a == k ? k : a)];
  d ? c = d : (d = $a._) ? c = d : e(z("IEquiv.-equiv", a));
  return c.call(k, a, b)
}
function ab(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  var c = ab[s(a == k ? k : a)];
  c ? b = c : (c = ab._) ? b = c : e(z("IHash.-hash", a));
  return b.call(k, a)
}
function bb(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = bb[s(a == k ? k : a)];
  c ? b = c : (c = bb._) ? b = c : e(z("ISeqable.-seq", a));
  return b.call(k, a)
}
var cb = {}, db = {};
function eb(a) {
  if(a ? a.La : a) {
    return a.La(a)
  }
  var b;
  var c = eb[s(a == k ? k : a)];
  c ? b = c : (c = eb._) ? b = c : e(z("IReversible.-rseq", a));
  return b.call(k, a)
}
var fb = {};
function gb(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = gb[s(a == k ? k : a)];
  d ? c = d : (d = gb._) ? c = d : e(z("IPrintable.-pr-seq", a));
  return c.call(k, a, b)
}
function H(a, b) {
  if(a ? a.ub : a) {
    return a.ub(0, b)
  }
  var c;
  var d = H[s(a == k ? k : a)];
  d ? c = d : (d = H._) ? c = d : e(z("IWriter.-write", a));
  return c.call(k, a, b)
}
function ib(a) {
  if(a ? a.Cb : a) {
    return k
  }
  var b;
  var c = ib[s(a == k ? k : a)];
  c ? b = c : (c = ib._) ? b = c : e(z("IWriter.-flush", a));
  return b.call(k, a)
}
var jb = {};
function kb(a, b, c) {
  if(a ? a.A : a) {
    return a.A(a, b, c)
  }
  var d;
  var f = kb[s(a == k ? k : a)];
  f ? d = f : (f = kb._) ? d = f : e(z("IPrintWithWriter.-pr-writer", a));
  return d.call(k, a, b, c)
}
function lb(a, b, c) {
  if(a ? a.tb : a) {
    return a.tb(a, b, c)
  }
  var d;
  var f = lb[s(a == k ? k : a)];
  f ? d = f : (f = lb._) ? d = f : e(z("IWatchable.-notify-watches", a));
  return d.call(k, a, b, c)
}
var mb = {};
function nb(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = nb[s(a == k ? k : a)];
  c ? b = c : (c = nb._) ? b = c : e(z("IEditableCollection.-as-transient", a));
  return b.call(k, a)
}
function ob(a, b) {
  if(a ? a.Ea : a) {
    return a.Ea(a, b)
  }
  var c;
  var d = ob[s(a == k ? k : a)];
  d ? c = d : (d = ob._) ? c = d : e(z("ITransientCollection.-conj!", a));
  return c.call(k, a, b)
}
function pb(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var b;
  var c = pb[s(a == k ? k : a)];
  c ? b = c : (c = pb._) ? b = c : e(z("ITransientCollection.-persistent!", a));
  return b.call(k, a)
}
function qb(a, b, c) {
  if(a ? a.wa : a) {
    return a.wa(a, b, c)
  }
  var d;
  var f = qb[s(a == k ? k : a)];
  f ? d = f : (f = qb._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
  return d.call(k, a, b, c)
}
var rb = {};
function sb(a, b) {
  if(a ? a.qb : a) {
    return a.qb(a, b)
  }
  var c;
  var d = sb[s(a == k ? k : a)];
  d ? c = d : (d = sb._) ? c = d : e(z("IComparable.-compare", a));
  return c.call(k, a, b)
}
function tb(a) {
  if(a ? a.ob : a) {
    return a.ob()
  }
  var b;
  var c = tb[s(a == k ? k : a)];
  c ? b = c : (c = tb._) ? b = c : e(z("IChunk.-drop-first", a));
  return b.call(k, a)
}
var ub = {};
function vb(a) {
  if(a ? a.Ra : a) {
    return a.Ra(a)
  }
  var b;
  var c = vb[s(a == k ? k : a)];
  c ? b = c : (c = vb._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
  return b.call(k, a)
}
function wb(a) {
  if(a ? a.Ia : a) {
    return a.Ia(a)
  }
  var b;
  var c = wb[s(a == k ? k : a)];
  c ? b = c : (c = wb._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
  return b.call(k, a)
}
function I(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 32, b = x(b ? b : a.Gb) ? j : a.j ? m : y(Da, a)) : b = y(Da, a);
    a = x(b) ? a : bb(a)
  }
  return a
}
function J(a) {
  if(a == k) {
    return k
  }
  var b;
  a ? (b = a.j & 64, b = x(b ? b : a.Ta) ? j : a.j ? m : y(Ea, a)) : b = y(Ea, a);
  if(x(b)) {
    return E(a)
  }
  a = I(a);
  return a == k ? k : E(a)
}
function K(a) {
  if(a != k) {
    var b;
    a ? (b = a.j & 64, b = x(b ? b : a.Ta) ? j : a.j ? m : y(Ea, a)) : b = y(Ea, a);
    if(x(b)) {
      return F(a)
    }
    a = I(a);
    return a != k ? F(a) : M
  }
  return M
}
function N(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 128, b = x(b ? b : a.Mb) ? j : a.j ? m : y(Fa, a)) : b = y(Fa, a);
    a = x(b) ? Ga(a) : I(K(a))
  }
  return a
}
var xb, yb = k;
function zb(a, b) {
  var c = a === b;
  return c ? c : $a(a, b)
}
function Ab(a, b, c) {
  for(;;) {
    if(x(yb.b(a, b))) {
      if(N(c)) {
        a = b, b = J(c), c = N(c)
      }else {
        return yb.b(b, J(c))
      }
    }else {
      return m
    }
  }
}
function Bb(a, b, c) {
  var d = k;
  t(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return Ab.call(this, a, b, d)
}
Bb.n = 2;
Bb.k = function(a) {
  var b = J(a), c = J(N(a)), a = K(N(a));
  return Ab(b, c, a)
};
Bb.g = Ab;
yb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return zb.call(this, a, b);
    default:
      return Bb.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
yb.n = 2;
yb.k = Bb.k;
yb.a = p(j);
yb.b = zb;
yb.g = Bb.g;
xb = yb;
function Cb(a, b) {
  return b instanceof a
}
var Db = g, Q = g, Eb = g;
ab["null"] = p(0);
var Fb = k, Fb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
G["null"] = Fb;
Ka["null"] = function(a, b, c) {
  return Db.b ? Db.b(b, c) : Db.call(k, b, c)
};
Fa["null"] = j;
Ga["null"] = p(k);
jb["null"] = j;
kb["null"] = function(a, b) {
  return H(b, "nil")
};
va["null"] = j;
wa["null"] = function(a, b) {
  return Q.a ? Q.a(b) : Q.call(k, b)
};
Va["null"] = j;
var Gb = k, Gb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.t ? b.t() : b.call(k);
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wa["null"] = Gb;
fb["null"] = j;
gb["null"] = function() {
  return Q.a ? Q.a("nil") : Q.call(k, "nil")
};
sa["null"] = j;
ta["null"] = p(0);
Pa["null"] = p(k);
Ea["null"] = j;
E["null"] = p(k);
F["null"] = function() {
  return Q.t ? Q.t() : Q.call(k)
};
$a["null"] = function(a, b) {
  return b == k
};
Ua["null"] = p(k);
Sa["null"] = j;
Ta["null"] = p(k);
xa["null"] = j;
var Hb = k, Hb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D["null"] = Hb;
ua["null"] = p(k);
La["null"] = j;
Date.prototype.z = function(a, b) {
  var c = Cb(Date, b);
  return c ? a.toString() === b.toString() : c
};
ab.number = function(a) {
  return Math.floor(a) % 2147483647
};
$a.number = function(a, b) {
  return a === b
};
ab["boolean"] = function(a) {
  return a === j ? 1 : 0
};
var R = g;
Ua["function"] = function(a, b) {
  return R.b ? R.b(function() {
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
        return Q.a ? Q.a("cljs.core/t3155") : Q.call(k, "cljs.core/t3155")
      };
      u.ga = function(a, b) {
        return H(b, "cljs.core/t3155")
      };
      var c = function(a, b) {
        return B.b ? B.b(a.qa, b) : B.call(k, a.qa, b)
      }, d = function(a, b) {
        var a = this, d = k;
        t(b) && (d = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.n = 1;
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
  }(), b) : R.call(k, function() {
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
        return Q.a ? Q.a("cljs.core/t3155") : Q.call(k, "cljs.core/t3155")
      };
      u.ga = function(a, b) {
        return H(b, "cljs.core/t3155")
      };
      var c = function(a, b) {
        return B.b ? B.b(a.qa, b) : B.call(k, a.qa, b)
      }, d = function(a, b) {
        var a = this, d = k;
        t(b) && (d = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.n = 1;
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
Sa["function"] = j;
Ta["function"] = p(k);
ab._ = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
var S = g;
function Ib(a) {
  this.o = a;
  this.r = 0;
  this.j = 32768
}
Ib.prototype.Sa = n("o");
var Jb, Kb = k;
function Lb(a, b) {
  var c = ta(a);
  if(0 === c) {
    return b.t ? b.t() : b.call(k)
  }
  for(var d = D.b(a, 0), f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, D.b(a, f)) : b.call(k, d, D.b(a, f));
      if(Cb(Ib, d)) {
        return S.a ? S.a(d) : S.call(k, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Mb(a, b, c) {
  for(var d = ta(a), f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, D.b(a, f)) : b.call(k, c, D.b(a, f));
      if(Cb(Ib, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Nb(a, b, c, d) {
  for(var f = ta(a);;) {
    if(d < f) {
      c = b.b ? b.b(c, D.b(a, d)) : b.call(k, c, D.b(a, d));
      if(Cb(Ib, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Kb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Lb.call(this, a, b);
    case 3:
      return Mb.call(this, a, b, c);
    case 4:
      return Nb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kb.b = Lb;
Kb.c = Mb;
Kb.p = Nb;
Jb = Kb;
var Ob, Pb = k;
function Qb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.t ? b.t() : b.call(k)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, a[f]) : b.call(k, d, a[f]);
      if(Cb(Ib, d)) {
        return S.a ? S.a(d) : S.call(k, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Rb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, a[f]) : b.call(k, c, a[f]);
      if(Cb(Ib, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Sb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.b ? b.b(c, a[d]) : b.call(k, c, a[d]);
      if(Cb(Ib, c)) {
        return S.a ? S.a(c) : S.call(k, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Pb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Qb.call(this, a, b);
    case 3:
      return Rb.call(this, a, b, c);
    case 4:
      return Sb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pb.b = Qb;
Pb.c = Rb;
Pb.p = Sb;
Ob = Pb;
var Tb = g, T = g, U = g, Ub = g;
function Vb(a) {
  if(a) {
    var b = a.j & 2, a = x(b ? b : a.Jb) ? j : a.j ? m : y(sa, a)
  }else {
    a = y(sa, a)
  }
  return a
}
function Wb(a) {
  if(a) {
    var b = a.j & 16, a = x(b ? b : a.rb) ? j : a.j ? m : y(xa, a)
  }else {
    a = y(xa, a)
  }
  return a
}
function Xb(a, b) {
  this.Q = a;
  this.q = b;
  this.r = 0;
  this.j = 166199550
}
r = Xb.prototype;
r.F = function(a) {
  return Tb.a ? Tb.a(a) : Tb.call(k, a)
};
r.pa = function() {
  return this.q + 1 < this.Q.length ? new Xb(this.Q, this.q + 1) : k
};
r.D = function(a, b) {
  return T.b ? T.b(b, a) : T.call(k, b, a)
};
r.La = function(a) {
  var b = a.L(a);
  return 0 < b ? new Ub(a, b - 1, k) : M
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.ta = function(a, b) {
  return Vb(this.Q) ? Jb.p(this.Q, b, this.Q[this.q], this.q + 1) : Jb.p(a, b, this.Q[this.q], 0)
};
r.ua = function(a, b, c) {
  return Vb(this.Q) ? Jb.p(this.Q, b, c, this.q) : Jb.p(a, b, c, 0)
};
r.P = aa();
r.L = function() {
  return this.Q.length - this.q
};
r.X = function() {
  return this.Q[this.q]
};
r.U = function() {
  return this.q + 1 < this.Q.length ? new Xb(this.Q, this.q + 1) : Q.t ? Q.t() : Q.call(k)
};
r.z = function(a, b) {
  return Eb.b ? Eb.b(a, b) : Eb.call(k, a, b)
};
r.W = function(a, b) {
  var c = b + this.q;
  return c < this.Q.length ? this.Q[c] : k
};
r.R = function(a, b, c) {
  a = b + this.q;
  return a < this.Q.length ? this.Q[a] : c
};
r.M = function() {
  return M
};
var Yb, Zb = k;
function $b(a) {
  return Zb.b(a, 0)
}
function ac(a, b) {
  return b < a.length ? new Xb(a, b) : k
}
Zb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return $b.call(this, a);
    case 2:
      return ac.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zb.a = $b;
Zb.b = ac;
Yb = Zb;
var O, bc = k;
function cc(a) {
  return Yb.b(a, 0)
}
function dc(a, b) {
  return Yb.b(a, b)
}
bc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return cc.call(this, a);
    case 2:
      return dc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bc.a = cc;
bc.b = dc;
O = bc;
Va.array = j;
var ec = k, ec = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Jb.b(a, b);
    case 3:
      return Jb.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wa.array = ec;
var fc = k, fc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return D.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
G.array = fc;
xa.array = j;
var gc = k, gc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : k;
    case 3:
      return b < a.length ? a[b] : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.array = gc;
sa.array = j;
ta.array = function(a) {
  return a.length
};
bb.array = function(a) {
  return O.b(a, 0)
};
R = g;
Ub = function(a, b, c) {
  this.Pa = a;
  this.q = b;
  this.l = c;
  this.r = 0;
  this.j = 31850574
};
Ub.aa = j;
Ub.fa = function() {
  return Q.a ? Q.a("cljs.core/RSeq") : Q.call(k, "cljs.core/RSeq")
};
Ub.ga = function(a, b) {
  return H(b, "cljs.core/RSeq")
};
r = Ub.prototype;
r.F = function(a) {
  return Tb.a ? Tb.a(a) : Tb.call(k, a)
};
r.D = function(a, b) {
  return T.b ? T.b(b, a) : T.call(k, b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = aa();
r.L = function() {
  return this.q + 1
};
r.X = function() {
  return D.b(this.Pa, this.q)
};
r.U = function() {
  return 0 < this.q ? new Ub(this.Pa, this.q - 1, k) : M
};
r.z = function(a, b) {
  return Eb.b ? Eb.b(a, b) : Eb.call(k, a, b)
};
r.I = function(a, b) {
  return new Ub(this.Pa, this.q, b)
};
r.G = n("l");
r.M = function() {
  return R.b ? R.b(M, this.l) : R.call(k, M, this.l)
};
$a._ = function(a, b) {
  return a === b
};
var hc, ic = k;
function jc(a, b, c) {
  for(;;) {
    if(x(c)) {
      a = ic.b(a, b), b = J(c), c = N(c)
    }else {
      return ic.b(a, b)
    }
  }
}
function kc(a, b, c) {
  var d = k;
  t(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return jc.call(this, a, b, d)
}
kc.n = 2;
kc.k = function(a) {
  var b = J(a), c = J(N(a)), a = K(N(a));
  return jc(b, c, a)
};
kc.g = jc;
ic = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wa(a, b);
    default:
      return kc.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ic.n = 2;
ic.k = kc.k;
ic.b = function(a, b) {
  return wa(a, b)
};
ic.g = kc.g;
hc = ic;
function lc(a) {
  if(Vb(a)) {
    a = ta(a)
  }else {
    a: {
      for(var a = I(a), b = 0;;) {
        if(Vb(a)) {
          a = b + ta(a);
          break a
        }
        a = N(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var mc, nc = k;
function oc(a, b) {
  for(;;) {
    a == k && e(Error("Index out of bounds"));
    if(0 === b) {
      if(I(a)) {
        return J(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Wb(a)) {
      return D.b(a, b)
    }
    if(I(a)) {
      var c = N(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function pc(a, b, c) {
  for(;;) {
    if(a == k) {
      return c
    }
    if(0 === b) {
      return I(a) ? J(a) : c
    }
    if(Wb(a)) {
      return D.c(a, b, c)
    }
    if(I(a)) {
      a = N(a), b -= 1
    }else {
      return c
    }
  }
}
nc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return oc.call(this, a, b);
    case 3:
      return pc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nc.b = oc;
nc.c = pc;
mc = nc;
var qc, rc = k;
function sc(a, b) {
  var c;
  a == k ? c = k : (a ? (c = a.j & 16, c = x(c ? c : a.rb) ? j : a.j ? m : y(xa, a)) : c = y(xa, a), c = x(c) ? D.b(a, Math.floor(b)) : mc.b(a, Math.floor(b)));
  return c
}
function tc(a, b, c) {
  if(a != k) {
    var d;
    a ? (d = a.j & 16, d = x(d ? d : a.rb) ? j : a.j ? m : y(xa, a)) : d = y(xa, a);
    a = x(d) ? D.c(a, Math.floor(b), c) : mc.c(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
rc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return sc.call(this, a, b);
    case 3:
      return tc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rc.b = sc;
rc.c = tc;
qc = rc;
var uc, vc = k;
function wc(a, b, c, d) {
  for(;;) {
    if(a = vc.c(a, b, c), x(d)) {
      b = J(d), c = J(N(d)), d = N(N(d))
    }else {
      return a
    }
  }
}
function xc(a, b, c, d) {
  var f = k;
  t(d) && (f = O(Array.prototype.slice.call(arguments, 3), 0));
  return wc.call(this, a, b, c, f)
}
xc.n = 3;
xc.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), a = K(N(N(a)));
  return wc(b, c, d, a)
};
xc.g = wc;
vc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return Ka(a, b, c);
    default:
      return xc.g(a, b, c, O(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
vc.n = 3;
vc.k = xc.k;
vc.c = function(a, b, c) {
  return Ka(a, b, c)
};
vc.g = xc.g;
uc = vc;
R = function(a, b) {
  return Ua(a, b)
};
function yc(a) {
  var b;
  a ? (b = a.j & 131072, b = x(b ? b : a.sb) ? j : a.j ? m : y(Sa, a)) : b = y(Sa, a);
  return x(b) ? Ta(a) : k
}
var zc = {}, Ac = 0, Bc, Cc = k;
function Dc(a) {
  return Cc.b(a, j)
}
function Ec(a, b) {
  var c;
  c = da(a);
  x(c ? b : c) ? (255 < Ac && (zc = {}, Ac = 0), c = zc[a], c == k && (c = ha(a), zc[a] = c, Ac += 1)) : c = ab(a);
  return c
}
Cc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Dc.call(this, a);
    case 2:
      return Ec.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cc.a = Dc;
Cc.b = Ec;
Bc = Cc;
function Fc(a) {
  if(a == k) {
    a = m
  }else {
    if(a) {
      var b = a.j & 8, a = x(b ? b : a.Ib) ? j : a.j ? m : y(va, a)
    }else {
      a = y(va, a)
    }
  }
  return a
}
function Gc(a) {
  if(a == k) {
    a = m
  }else {
    if(a) {
      var b = a.j & 1024, a = x(b ? b : a.Lb) ? j : a.j ? m : y(La, a)
    }else {
      a = y(La, a)
    }
  }
  return a
}
function Hc(a) {
  if(a) {
    var b = a.j & 16384, a = x(b ? b : a.Pb) ? j : a.j ? m : y(Qa, a)
  }else {
    a = y(Qa, a)
  }
  return a
}
function Ic(a) {
  if(a) {
    var b = a.r & 512, a = x(b ? b : a.Hb) ? j : a.r ? m : y(ub, a)
  }else {
    a = y(ub, a)
  }
  return a
}
function Jc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Kc = {};
function Lc(a) {
  if(a == k) {
    a = m
  }else {
    if(a) {
      var b = a.j & 64, a = x(b ? b : a.Ta) ? j : a.j ? m : y(Ea, a)
    }else {
      a = y(Ea, a)
    }
  }
  return a
}
function Mc(a) {
  var b = da(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = na(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Nc(a) {
  var b = da(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Oc(a) {
  var b = da(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Pc(a, b) {
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
    a ? (c = a.r & 2048, c = x(c ? c : a.vb) ? j : a.r ? m : y(rb, a)) : c = y(rb, a);
    return x(c) ? sb(a, b) : ja(a, b)
  }
  e(Error("compare on non-nil objects of different types"))
}
var Qc, Rc = k;
function Sc(a, b) {
  var c = lc(a), d = lc(b);
  return c < d ? -1 : c > d ? 1 : Rc.p(a, b, c, 0)
}
function Tc(a, b, c, d) {
  for(;;) {
    var f = Pc(qc.b(a, d), qc.b(b, d)), h = 0 === f;
    if(x(h ? d + 1 < c : h)) {
      d += 1
    }else {
      return f
    }
  }
}
Rc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Sc.call(this, a, b);
    case 4:
      return Tc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rc.b = Sc;
Rc.p = Tc;
Qc = Rc;
var Uc = g, Vc, Wc = k;
function Xc(a) {
  return Wc.b(Pc, a)
}
function Yc(a, b) {
  if(I(b)) {
    var c = Uc.a ? Uc.a(b) : Uc.call(k, b), d;
    d = xb.b(a, Pc) ? Pc : function(b, c) {
      var d = a.b ? a.b(b, c) : a.call(k, b, c);
      return"number" == typeof d ? d : x(d) ? -1 : x(a.b ? a.b(c, b) : a.call(k, c, b)) ? 1 : 0
    };
    for(var f = 0;f < c.length;f++) {
      c[f] = {index:f, value:c[f]}
    }
    var h = d || ja;
    ia.sort.call(c, function(a, b) {
      return h(a.value, b.value) || a.index - b.index
    } || ja);
    for(f = 0;f < c.length;f++) {
      c[f] = c[f].value
    }
    return I(c)
  }
  return M
}
Wc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Xc.call(this, a);
    case 2:
      return Yc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wc.a = Xc;
Wc.b = Yc;
Vc = Wc;
var Zc, $c = k;
function bd(a, b) {
  var c = I(b);
  return c ? ra.c ? ra.c(a, J(c), N(c)) : ra.call(k, a, J(c), N(c)) : a.t ? a.t() : a.call(k)
}
function cd(a, b, c) {
  for(c = I(c);;) {
    if(c) {
      b = a.b ? a.b(b, J(c)) : a.call(k, b, J(c));
      if(Cb(Ib, b)) {
        return S.a ? S.a(b) : S.call(k, b)
      }
      c = N(c)
    }else {
      return b
    }
  }
}
$c = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return bd.call(this, a, b);
    case 3:
      return cd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$c.b = bd;
$c.c = cd;
Zc = $c;
var dd = g, ed = k;
function fd(a, b) {
  var c;
  b ? (c = b.j & 524288, c = x(c ? c : b.Bb) ? j : b.j ? m : y(Va, b)) : c = y(Va, b);
  return x(c) ? Wa.b(b, a) : Zc.b(a, b)
}
function gd(a, b, c) {
  var d;
  c ? (d = c.j & 524288, d = x(d ? d : c.Bb) ? j : c.j ? m : y(Va, c)) : d = y(Va, c);
  return x(d) ? Wa.c(c, a, b) : Zc.c(a, b, c)
}
ed = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return fd.call(this, a, b);
    case 3:
      return gd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ed.b = fd;
ed.c = gd;
ra = ed;
function hd(a, b) {
  return 0 <= (a - a % b) / b ? Math.floor.a ? Math.floor.a((a - a % b) / b) : Math.floor.call(k, (a - a % b) / b) : Math.ceil.a ? Math.ceil.a((a - a % b) / b) : Math.ceil.call(k, (a - a % b) / b)
}
function id(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var jd, kd = k;
function ld(a) {
  return a == k ? "" : a.toString()
}
function md(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(kd.a(J(b))), h = N(b), a = f, b = h
      }else {
        return kd.a(a)
      }
    }
  }.call(k, new ma(kd.a(a)), b)
}
function nd(a, b) {
  var c = k;
  t(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return md.call(this, a, c)
}
nd.n = 1;
nd.k = function(a) {
  var b = J(a), a = K(a);
  return md(b, a)
};
nd.g = md;
kd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ld.call(this, a);
    default:
      return nd.g(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
kd.n = 1;
kd.k = nd.k;
kd.t = p("");
kd.a = ld;
kd.g = nd.g;
jd = kd;
var V, od = k;
function pd(a) {
  return Oc(a) ? a.substring(2, a.length) : Nc(a) ? jd.g(":", O([a.substring(2, a.length)], 0)) : a == k ? "" : a.toString()
}
function qd(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(od.a(J(b))), h = N(b), a = f, b = h
      }else {
        return jd.a(a)
      }
    }
  }.call(k, new ma(od.a(a)), b)
}
function rd(a, b) {
  var c = k;
  t(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return qd.call(this, a, c)
}
rd.n = 1;
rd.k = function(a) {
  var b = J(a), a = K(a);
  return qd(b, a)
};
rd.g = qd;
od = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return pd.call(this, a);
    default:
      return rd.g(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
od.n = 1;
od.k = rd.k;
od.t = p("");
od.a = pd;
od.g = rd.g;
V = od;
var sd, td = k, td = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
td.b = function(a, b) {
  return a.substring(b)
};
td.c = function(a, b, c) {
  return a.substring(b, c)
};
sd = td;
var ud = g, vd, wd = k;
function xd(a) {
  return Nc(a) ? a : Oc(a) ? jd.g("\ufdd0", O([":", sd.b(a, 2)], 0)) : jd.g("\ufdd0", O([":", a], 0))
}
function yd(a, b) {
  return wd.a(jd.g(a, O(["/", b], 0)))
}
wd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return xd.call(this, a);
    case 2:
      return yd.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wd.a = xd;
wd.b = yd;
vd = wd;
var Eb = function(a, b) {
  var c;
  b ? (c = b.j & 16777216, c = x(c ? c : b.Ob) || (b.j ? 0 : y(cb, b))) : c = y(cb, b);
  if(c) {
    a: {
      c = I(a);
      for(var d = I(b);;) {
        if(c == k) {
          c = d == k;
          break a
        }
        if(d != k && xb.b(J(c), J(d))) {
          c = N(c), d = N(d)
        }else {
          c = m;
          break a
        }
      }
      c = g
    }
  }else {
    c = k
  }
  return x(c) ? j : m
}, Tb = function(a) {
  return ra.c(function(a, c) {
    var d = Bc.b(c, m);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Bc.b(J(a), m), N(a))
}, zd = g, Ad = g;
function Bd(a) {
  for(var b = 0, a = I(a);;) {
    if(a) {
      var c = J(a), b = (b + (Bc.a(zd.a ? zd.a(c) : zd.call(k, c)) ^ Bc.a(Ad.a ? Ad.a(c) : Ad.call(k, c)))) % 4503599627370496, a = N(a)
    }else {
      return b
    }
  }
}
var Cd = g;
function Dd(a, b, c, d, f) {
  this.l = a;
  this.Aa = b;
  this.ja = c;
  this.count = d;
  this.m = f;
  this.r = 0;
  this.j = 65413358
}
r = Dd.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.pa = function() {
  return 1 === this.count ? k : this.ja
};
r.D = function(a, b) {
  return new Dd(this.l, b, a, this.count + 1, k)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = aa();
r.L = n("count");
r.va = n("Aa");
r.X = n("Aa");
r.U = function() {
  return 1 === this.count ? M : this.ja
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new Dd(b, this.Aa, this.ja, this.count, this.m)
};
r.G = n("l");
r.M = function() {
  return M
};
function Ed(a) {
  this.l = a;
  this.r = 0;
  this.j = 65413326
}
r = Ed.prototype;
r.F = p(0);
r.pa = p(k);
r.D = function(a, b) {
  return new Dd(this.l, b, k, 1, k)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = p(k);
r.L = p(0);
r.va = p(k);
r.X = p(k);
r.U = function() {
  return M
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new Ed(b)
};
r.G = n("l");
r.M = aa();
var M = new Ed(k);
function Fd(a) {
  var b;
  a ? (b = a.j & 134217728, b = x(b ? b : a.Nb) || (a.j ? 0 : y(db, a))) : b = y(db, a);
  return b ? eb(a) : ra.c(hc, M, a)
}
var Gd = k;
function Hd(a) {
  return hc.b(M, a)
}
function Id(a, b) {
  return hc.b(Gd.a(b), a)
}
function Jd(a, b, c) {
  return hc.b(Gd.b(b, c), a)
}
function Kd(a, b, c, d) {
  return hc.b(hc.b(hc.b(ra.c(hc, M, Fd(d)), c), b), a)
}
function Ld(a, b, c, d) {
  var f = k;
  t(d) && (f = O(Array.prototype.slice.call(arguments, 3), 0));
  return Kd.call(this, a, b, c, f)
}
Ld.n = 3;
Ld.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), a = K(N(N(a)));
  return Kd(b, c, d, a)
};
Ld.g = Kd;
Gd = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return M;
    case 1:
      return Hd.call(this, a);
    case 2:
      return Id.call(this, a, b);
    case 3:
      return Jd.call(this, a, b, c);
    default:
      return Ld.g(a, b, c, O(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gd.n = 3;
Gd.k = Ld.k;
Gd.t = function() {
  return M
};
Gd.a = Hd;
Gd.b = Id;
Gd.c = Jd;
Gd.g = Ld.g;
Q = Gd;
function Md(a, b, c, d) {
  this.l = a;
  this.Aa = b;
  this.ja = c;
  this.m = d;
  this.r = 0;
  this.j = 65405164
}
r = Md.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.pa = function() {
  return this.ja == k ? k : bb(this.ja)
};
r.D = function(a, b) {
  return new Md(k, b, a, this.m)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = aa();
r.X = n("Aa");
r.U = function() {
  return this.ja == k ? M : this.ja
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new Md(b, this.Aa, this.ja, this.m)
};
r.G = n("l");
r.M = function() {
  return R(M, this.l)
};
T = function(a, b) {
  var c = b == k;
  c || (b ? (c = b.j & 64, c = x(c ? c : b.Ta) ? j : b.j ? m : y(Ea, b)) : c = y(Ea, b));
  return x(c) ? new Md(k, a, b, k) : new Md(k, a, I(b), k)
};
Va.string = j;
var Nd = k, Nd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Jb.b(a, b);
    case 3:
      return Jb.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wa.string = Nd;
var Od = k, Od = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.b(a, b);
    case 3:
      return D.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
G.string = Od;
xa.string = j;
var Pd = k, Pd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < ta(a) ? a.charAt(b) : k;
    case 3:
      return b < ta(a) ? a.charAt(b) : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.string = Pd;
sa.string = j;
ta.string = function(a) {
  return a.length
};
bb.string = function(a) {
  return Yb.b(a, 0)
};
ab.string = function(a) {
  return ha(a)
};
function Qd(a) {
  this.hb = a;
  this.r = 0;
  this.j = 1
}
var Rd = k, Rd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == k) {
        d = k
      }else {
        var f = b.sa;
        d = f == k ? G.c(b, d.hb, k) : f[d.hb]
      }
      return d;
    case 3:
      return b == k ? c : G.c(b, this.hb, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qd.prototype.call = Rd;
Qd.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Sd = k, Sd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return G.c(b, this.toString(), k);
    case 3:
      return G.c(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Sd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > lc(b) ? G.c(b[0], a, k) : G.c(b[0], a, b[1])
};
function Td(a) {
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
  return b != k ? b : this.m = a = Tb(a)
};
r.pa = function(a) {
  return bb(a.U(a))
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = function(a) {
  return I(Td(a))
};
r.X = function(a) {
  return J(Td(a))
};
r.U = function(a) {
  return K(Td(a))
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new W(b, this.jb, this.x, this.m)
};
r.G = n("l");
r.M = function() {
  return R(M, this.l)
};
var Ud = g;
function Vd(a, b) {
  this.Oa = a;
  this.end = b;
  this.r = 0;
  this.j = 2
}
Vd.prototype.L = n("end");
Vd.prototype.add = function(a) {
  this.Oa[this.end] = a;
  return this.end += 1
};
Vd.prototype.ka = function() {
  var a = new Ud(this.Oa, 0, this.end);
  this.Oa = k;
  return a
};
Ud = function(a, b, c) {
  this.e = a;
  this.K = b;
  this.end = c;
  this.r = 0;
  this.j = 524306
};
Ud.aa = j;
Ud.fa = function() {
  return Q.a("cljs.core/ArrayChunk")
};
Ud.ga = function(a, b) {
  return H(b, "cljs.core/ArrayChunk")
};
r = Ud.prototype;
r.ta = function(a, b) {
  return Ob.p(this.e, b, this.e[this.K], this.K + 1)
};
r.ua = function(a, b, c) {
  return Ob.p(this.e, b, c, this.K)
};
r.ob = function() {
  this.K === this.end && e(Error("-drop-first of empty chunk"));
  return new Ud(this.e, this.K + 1, this.end)
};
r.W = function(a, b) {
  return this.e[this.K + b]
};
r.R = function(a, b, c) {
  a = 0 <= b;
  return x(a ? b < this.end - this.K : a) ? this.e[this.K + b] : c
};
r.L = function() {
  return this.end - this.K
};
var Wd, Xd = k;
function Yd(a) {
  return Xd.c(a, 0, a.length)
}
function Zd(a, b) {
  return Xd.c(a, b, a.length)
}
function $d(a, b, c) {
  return new Ud(a, b, c)
}
Xd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Yd.call(this, a);
    case 2:
      return Zd.call(this, a, b);
    case 3:
      return $d.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xd.a = Yd;
Xd.b = Zd;
Xd.c = $d;
Wd = Xd;
function ae(a, b, c, d) {
  this.ka = a;
  this.oa = b;
  this.l = c;
  this.m = d;
  this.j = 31850604;
  this.r = 1536
}
r = ae.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.P = aa();
r.X = function() {
  return D.b(this.ka, 0)
};
r.U = function() {
  return 1 < ta(this.ka) ? new ae(tb(this.ka), this.oa, this.l, k) : this.oa == k ? M : this.oa
};
r.pb = function() {
  return this.oa == k ? k : this.oa
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new ae(this.ka, this.oa, b, this.m)
};
r.G = n("l");
r.M = function() {
  return R(M, this.l)
};
r.Ra = n("ka");
r.Ia = function() {
  return this.oa == k ? M : this.oa
};
function be(a, b) {
  return 0 === ta(a) ? b : new ae(a, b, k, k)
}
Uc = function(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(J(a)), a = N(a)
    }else {
      return b
    }
  }
};
function ce(a, b) {
  if(Vb(a)) {
    return lc(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? I(c) : h;
    if(x(h)) {
      c = N(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var ee = function de(b) {
  return b == k ? k : N(b) == k ? I(J(b)) : T(J(b), de(N(b)))
}, fe, ge = k;
function he() {
  return new W(k, m, p(k), k)
}
function ie(a) {
  return new W(k, m, function() {
    return a
  }, k)
}
function je(a, b) {
  return new W(k, m, function() {
    var c = I(a);
    return c ? Ic(c) ? be(vb(c), ge.b(wb(c), b)) : T(J(c), ge.b(K(c), b)) : b
  }, k)
}
function ke(a, b, c) {
  return function f(a, b) {
    return new W(k, m, function() {
      var c = I(a);
      return c ? Ic(c) ? be(vb(c), f(wb(c), b)) : T(J(c), f(K(c), b)) : x(b) ? f(J(b), N(b)) : k
    }, k)
  }(ge.b(a, b), c)
}
function le(a, b, c) {
  var d = k;
  t(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return ke.call(this, a, b, d)
}
le.n = 2;
le.k = function(a) {
  var b = J(a), c = J(N(a)), a = K(N(a));
  return ke(b, c, a)
};
le.g = ke;
ge = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return he.call(this);
    case 1:
      return ie.call(this, a);
    case 2:
      return je.call(this, a, b);
    default:
      return le.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ge.n = 2;
ge.k = le.k;
ge.t = he;
ge.a = ie;
ge.b = je;
ge.g = le.g;
fe = ge;
var me, ne = k;
function oe(a, b, c) {
  return T(a, T(b, c))
}
function pe(a, b, c, d) {
  return T(a, T(b, T(c, d)))
}
function qe(a, b, c, d, f) {
  return T(a, T(b, T(c, T(d, ee(f)))))
}
function re(a, b, c, d, f) {
  var h = k;
  t(f) && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return qe.call(this, a, b, c, d, h)
}
re.n = 4;
re.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), f = J(N(N(N(a)))), a = K(N(N(N(a))));
  return qe(b, c, d, f, a)
};
re.g = qe;
ne = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return I(a);
    case 2:
      return T(a, b);
    case 3:
      return oe.call(this, a, b, c);
    case 4:
      return pe.call(this, a, b, c, d);
    default:
      return re.g(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ne.n = 4;
ne.k = re.k;
ne.a = function(a) {
  return I(a)
};
ne.b = function(a, b) {
  return T(a, b)
};
ne.c = oe;
ne.p = pe;
ne.g = re.g;
me = ne;
function se(a, b, c) {
  var d = I(c);
  if(0 === b) {
    return a.t ? a.t() : a.call(k)
  }
  var c = E(d), f = F(d);
  if(1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(k, c)
  }
  var d = E(f), h = F(f);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(k, c, d)
  }
  var f = E(h), i = F(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(k, c, d, f)
  }
  var h = E(i), l = F(i);
  if(4 === b) {
    return a.p ? a.p(c, d, f, h) : a.p ? a.p(c, d, f, h) : a.call(k, c, d, f, h)
  }
  i = E(l);
  l = F(l);
  if(5 === b) {
    return a.J ? a.J(c, d, f, h, i) : a.J ? a.J(c, d, f, h, i) : a.call(k, c, d, f, h, i)
  }
  var a = E(l), q = F(l);
  if(6 === b) {
    return a.ha ? a.ha(c, d, f, h, i, a) : a.ha ? a.ha(c, d, f, h, i, a) : a.call(k, c, d, f, h, i, a)
  }
  var l = E(q), w = F(q);
  if(7 === b) {
    return a.xa ? a.xa(c, d, f, h, i, a, l) : a.xa ? a.xa(c, d, f, h, i, a, l) : a.call(k, c, d, f, h, i, a, l)
  }
  var q = E(w), v = F(w);
  if(8 === b) {
    return a.fb ? a.fb(c, d, f, h, i, a, l, q) : a.fb ? a.fb(c, d, f, h, i, a, l, q) : a.call(k, c, d, f, h, i, a, l, q)
  }
  var w = E(v), A = F(v);
  if(9 === b) {
    return a.gb ? a.gb(c, d, f, h, i, a, l, q, w) : a.gb ? a.gb(c, d, f, h, i, a, l, q, w) : a.call(k, c, d, f, h, i, a, l, q, w)
  }
  var v = E(A), C = F(A);
  if(10 === b) {
    return a.Ua ? a.Ua(c, d, f, h, i, a, l, q, w, v) : a.Ua ? a.Ua(c, d, f, h, i, a, l, q, w, v) : a.call(k, c, d, f, h, i, a, l, q, w, v)
  }
  var A = E(C), L = F(C);
  if(11 === b) {
    return a.Va ? a.Va(c, d, f, h, i, a, l, q, w, v, A) : a.Va ? a.Va(c, d, f, h, i, a, l, q, w, v, A) : a.call(k, c, d, f, h, i, a, l, q, w, v, A)
  }
  var C = E(L), P = F(L);
  if(12 === b) {
    return a.Wa ? a.Wa(c, d, f, h, i, a, l, q, w, v, A, C) : a.Wa ? a.Wa(c, d, f, h, i, a, l, q, w, v, A, C) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C)
  }
  var L = E(P), ca = F(P);
  if(13 === b) {
    return a.Xa ? a.Xa(c, d, f, h, i, a, l, q, w, v, A, C, L) : a.Xa ? a.Xa(c, d, f, h, i, a, l, q, w, v, A, C, L) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L)
  }
  var P = E(ca), la = F(ca);
  if(14 === b) {
    return a.Ya ? a.Ya(c, d, f, h, i, a, l, q, w, v, A, C, L, P) : a.Ya ? a.Ya(c, d, f, h, i, a, l, q, w, v, A, C, L, P) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P)
  }
  var ca = E(la), ya = F(la);
  if(15 === b) {
    return a.Za ? a.Za(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca) : a.Za ? a.Za(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca)
  }
  var la = E(ya), Ba = F(ya);
  if(16 === b) {
    return a.$a ? a.$a(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la) : a.$a ? a.$a(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la)
  }
  var ya = E(Ba), hb = F(Ba);
  if(17 === b) {
    return a.ab ? a.ab(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya) : a.ab ? a.ab(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya)
  }
  var Ba = E(hb), ad = F(hb);
  if(18 === b) {
    return a.bb ? a.bb(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba) : a.bb ? a.bb(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba)
  }
  hb = E(ad);
  ad = F(ad);
  if(19 === b) {
    return a.cb ? a.cb(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba, hb) : a.cb ? a.cb(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba, hb) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba, hb)
  }
  var Ee = E(ad);
  F(ad);
  if(20 === b) {
    return a.eb ? a.eb(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba, hb, Ee) : a.eb ? a.eb(c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba, hb, Ee) : a.call(k, c, d, f, h, i, a, l, q, w, v, A, C, L, P, ca, la, ya, Ba, hb, Ee)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var te = k;
function ue(a, b) {
  var c = a.n;
  if(a.k) {
    var d = ce(b, c + 1);
    return d <= c ? se(a, d, b) : a.k(b)
  }
  return a.apply(a, Uc(b))
}
function ve(a, b, c) {
  b = me.b(b, c);
  c = a.n;
  if(a.k) {
    var d = ce(b, c + 1);
    return d <= c ? se(a, d, b) : a.k(b)
  }
  return a.apply(a, Uc(b))
}
function we(a, b, c, d) {
  b = me.c(b, c, d);
  c = a.n;
  return a.k ? (d = ce(b, c + 1), d <= c ? se(a, d, b) : a.k(b)) : a.apply(a, Uc(b))
}
function xe(a, b, c, d, f) {
  b = me.p(b, c, d, f);
  c = a.n;
  return a.k ? (d = ce(b, c + 1), d <= c ? se(a, d, b) : a.k(b)) : a.apply(a, Uc(b))
}
function ye(a, b, c, d, f, h) {
  b = T(b, T(c, T(d, T(f, ee(h)))));
  c = a.n;
  return a.k ? (d = ce(b, c + 1), d <= c ? se(a, d, b) : a.k(b)) : a.apply(a, Uc(b))
}
function ze(a, b, c, d, f, h) {
  var i = k;
  t(h) && (i = O(Array.prototype.slice.call(arguments, 5), 0));
  return ye.call(this, a, b, c, d, f, i)
}
ze.n = 5;
ze.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), f = J(N(N(N(a)))), h = J(N(N(N(N(a))))), a = K(N(N(N(N(a)))));
  return ye(b, c, d, f, h, a)
};
ze.g = ye;
te = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return ue.call(this, a, b);
    case 3:
      return ve.call(this, a, b, c);
    case 4:
      return we.call(this, a, b, c, d);
    case 5:
      return xe.call(this, a, b, c, d, f);
    default:
      return ze.g(a, b, c, d, f, O(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
te.n = 5;
te.k = ze.k;
te.b = ue;
te.c = ve;
te.p = we;
te.J = xe;
te.g = ze.g;
var B = te, Ae, Be = k;
function Ce(a, b) {
  return!xb.b(a, b)
}
function De(a, b, c) {
  return na(B.p(xb, a, b, c))
}
function Fe(a, b, c) {
  var d = k;
  t(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return De.call(this, a, b, d)
}
Fe.n = 2;
Fe.k = function(a) {
  var b = J(a), c = J(N(a)), a = K(N(a));
  return De(b, c, a)
};
Fe.g = De;
Be = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return m;
    case 2:
      return Ce.call(this, a, b);
    default:
      return Fe.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Be.n = 2;
Be.k = Fe.k;
Be.a = p(m);
Be.b = Ce;
Be.g = Fe.g;
Ae = Be;
function Ge(a, b) {
  for(;;) {
    if(I(b) == k) {
      return j
    }
    if(x(a.a ? a.a(J(b)) : a.call(k, J(b)))) {
      var c = a, d = N(b), a = c, b = d
    }else {
      return m
    }
  }
}
function He(a) {
  return a
}
var Ie, Je = k;
function Ke(a, b) {
  function c(a, b, c, f) {
    var w = k;
    t(f) && (w = O(Array.prototype.slice.call(arguments, 3), 0));
    return d.call(this, a, b, c, w)
  }
  function d(c, d, f, q) {
    return a.a ? a.a(B.J(b, c, d, f, q)) : a.call(k, B.J(b, c, d, f, q))
  }
  var f = k;
  c.n = 3;
  c.k = function(a) {
    var b = J(a), c = J(N(a)), f = J(N(N(a))), a = K(N(N(a)));
    return d(b, c, f, a)
  };
  c.g = d;
  f = function(d, f, l, q) {
    switch(arguments.length) {
      case 0:
        return a.a ? a.a(b.t ? b.t() : b.call(k)) : a.call(k, b.t ? b.t() : b.call(k));
      case 1:
        return a.a ? a.a(b.a ? b.a(d) : b.call(k, d)) : a.call(k, b.a ? b.a(d) : b.call(k, d));
      case 2:
        return a.a ? a.a(b.b ? b.b(d, f) : b.call(k, d, f)) : a.call(k, b.b ? b.b(d, f) : b.call(k, d, f));
      case 3:
        return a.a ? a.a(b.c ? b.c(d, f, l) : b.call(k, d, f, l)) : a.call(k, b.c ? b.c(d, f, l) : b.call(k, d, f, l));
      default:
        return c.g(d, f, l, O(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  f.n = 3;
  f.k = c.k;
  return f
}
function Le(a, b, c) {
  function d(a, b, c, d) {
    var h = k;
    t(d) && (h = O(Array.prototype.slice.call(arguments, 3), 0));
    return f.call(this, a, b, c, h)
  }
  function f(d, f, h, w) {
    return a.a ? a.a(b.a ? b.a(B.J(c, d, f, h, w)) : b.call(k, B.J(c, d, f, h, w))) : a.call(k, b.a ? b.a(B.J(c, d, f, h, w)) : b.call(k, B.J(c, d, f, h, w)))
  }
  var h = k;
  d.n = 3;
  d.k = function(a) {
    var b = J(a), c = J(N(a)), d = J(N(N(a))), a = K(N(N(a)));
    return f(b, c, d, a)
  };
  d.g = f;
  h = function(f, h, q, w) {
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
  h.n = 3;
  h.k = d.k;
  return h
}
function Me(a, b, c, d) {
  function f(a) {
    var b = k;
    t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(a) {
    for(var a = B.b(J(i), a), b = N(i);;) {
      if(b) {
        a = J(b).call(k, a), b = N(b)
      }else {
        return a
      }
    }
  }
  var i = Fd(me.p(a, b, c, d));
  f.n = 0;
  f.k = function(a) {
    a = I(a);
    return h(a)
  };
  f.g = h;
  return f
}
function Ne(a, b, c, d) {
  var f = k;
  t(d) && (f = O(Array.prototype.slice.call(arguments, 3), 0));
  return Me.call(this, a, b, c, f)
}
Ne.n = 3;
Ne.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), a = K(N(N(a)));
  return Me(b, c, d, a)
};
Ne.g = Me;
Je = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return He;
    case 1:
      return a;
    case 2:
      return Ke.call(this, a, b);
    case 3:
      return Le.call(this, a, b, c);
    default:
      return Ne.g(a, b, c, O(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Je.n = 3;
Je.k = Ne.k;
Je.t = function() {
  return He
};
Je.a = aa();
Je.b = Ke;
Je.c = Le;
Je.g = Ne.g;
Ie = Je;
var Oe, Pe = k;
function Qe(a, b) {
  function c(a) {
    var b = k;
    t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, b)
  }
  function d(c) {
    return B.c(a, b, c)
  }
  c.n = 0;
  c.k = function(a) {
    a = I(a);
    return d(a)
  };
  c.g = d;
  return c
}
function Re(a, b, c) {
  function d(a) {
    var b = k;
    t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(d) {
    return B.p(a, b, c, d)
  }
  d.n = 0;
  d.k = function(a) {
    a = I(a);
    return f(a)
  };
  d.g = f;
  return d
}
function Se(a, b, c, d) {
  function f(a) {
    var b = k;
    t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(f) {
    return B.J(a, b, c, d, f)
  }
  f.n = 0;
  f.k = function(a) {
    a = I(a);
    return h(a)
  };
  f.g = h;
  return f
}
function Te(a, b, c, d, f) {
  function h(a) {
    var b = k;
    t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(h) {
    return B.J(a, b, c, d, fe.b(f, h))
  }
  h.n = 0;
  h.k = function(a) {
    a = I(a);
    return i(a)
  };
  h.g = i;
  return h
}
function Ue(a, b, c, d, f) {
  var h = k;
  t(f) && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Te.call(this, a, b, c, d, h)
}
Ue.n = 4;
Ue.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), f = J(N(N(N(a)))), a = K(N(N(N(a))));
  return Te(b, c, d, f, a)
};
Ue.g = Te;
Pe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Qe.call(this, a, b);
    case 3:
      return Re.call(this, a, b, c);
    case 4:
      return Se.call(this, a, b, c, d);
    default:
      return Ue.g(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pe.n = 4;
Pe.k = Ue.k;
Pe.b = Qe;
Pe.c = Re;
Pe.p = Se;
Pe.g = Ue.g;
Oe = Pe;
var Ve = k;
function We(a, b) {
  return new W(k, m, function() {
    var c = I(b);
    if(c) {
      if(Ic(c)) {
        for(var d = vb(c), f = lc(d), h = new Vd(pa.a(f), 0), i = 0;;) {
          if(i < f) {
            var l = a.a ? a.a(D.b(d, i)) : a.call(k, D.b(d, i));
            h.add(l);
            i += 1
          }else {
            break
          }
        }
        return be(h.ka(), Ve.b(a, wb(c)))
      }
      return T(a.a ? a.a(J(c)) : a.call(k, J(c)), Ve.b(a, K(c)))
    }
    return k
  }, k)
}
function Xe(a, b, c) {
  return new W(k, m, function() {
    var d = I(b), f = I(c);
    return x(d ? f : d) ? T(a.b ? a.b(J(d), J(f)) : a.call(k, J(d), J(f)), Ve.c(a, K(d), K(f))) : k
  }, k)
}
function Ye(a, b, c, d) {
  return new W(k, m, function() {
    var f = I(b), h = I(c), i = I(d);
    return x(f ? h ? i : h : f) ? T(a.c ? a.c(J(f), J(h), J(i)) : a.call(k, J(f), J(h), J(i)), Ve.p(a, K(f), K(h), K(i))) : k
  }, k)
}
function Ze(a, b, c, d, f) {
  return Ve.b(function(b) {
    return B.b(a, b)
  }, function i(a) {
    return new W(k, m, function() {
      var b = Ve.b(I, a);
      return Ge(He, b) ? T(Ve.b(J, b), i(Ve.b(K, b))) : k
    }, k)
  }(hc.g(f, d, O([c, b], 0))))
}
function $e(a, b, c, d, f) {
  var h = k;
  t(f) && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Ze.call(this, a, b, c, d, h)
}
$e.n = 4;
$e.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), f = J(N(N(N(a)))), a = K(N(N(N(a))));
  return Ze(b, c, d, f, a)
};
$e.g = Ze;
Ve = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return We.call(this, a, b);
    case 3:
      return Xe.call(this, a, b, c);
    case 4:
      return Ye.call(this, a, b, c, d);
    default:
      return $e.g(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ve.n = 4;
Ve.k = $e.k;
Ve.b = We;
Ve.c = Xe;
Ve.p = Ye;
Ve.g = $e.g;
var ud = Ve, bf = function af(b, c) {
  return new W(k, m, function() {
    if(0 < b) {
      var d = I(c);
      return d ? T(J(d), af(b - 1, K(d))) : k
    }
    return k
  }, k)
};
function cf(a, b) {
  return new W(k, m, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = I(d), f = 0 < c;
        if(x(f ? d : f)) {
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
var df, ef = k;
function ff(a) {
  return new W(k, m, function() {
    return T(a, ef.a(a))
  }, k)
}
function gf(a, b) {
  return bf(a, ef.a(b))
}
ef = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ff.call(this, a);
    case 2:
      return gf.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ef.a = ff;
ef.b = gf;
df = ef;
var hf, jf = k;
function kf(a, b) {
  return new W(k, m, function() {
    var c = I(a), d = I(b);
    return x(c ? d : c) ? T(J(c), T(J(d), jf.b(K(c), K(d)))) : k
  }, k)
}
function lf(a, b, c) {
  return new W(k, m, function() {
    var d = ud.b(I, hc.g(c, b, O([a], 0)));
    return Ge(He, d) ? fe.b(ud.b(J, d), B.b(jf, ud.b(K, d))) : k
  }, k)
}
function mf(a, b, c) {
  var d = k;
  t(c) && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return lf.call(this, a, b, d)
}
mf.n = 2;
mf.k = function(a) {
  var b = J(a), c = J(N(a)), a = K(N(a));
  return lf(b, c, a)
};
mf.g = lf;
jf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return kf.call(this, a, b);
    default:
      return mf.g(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
jf.n = 2;
jf.k = mf.k;
jf.b = kf;
jf.g = mf.g;
hf = jf;
function nf(a, b) {
  return cf(1, hf.b(df.a(a), b))
}
function of(a) {
  return function c(a, f) {
    return new W(k, m, function() {
      var h = I(a);
      return h ? T(J(h), c(K(h), f)) : I(f) ? c(J(f), K(f)) : k
    }, k)
  }(k, a)
}
var qf = function pf(b, c) {
  return new W(k, m, function() {
    var d = I(c);
    if(d) {
      if(Ic(d)) {
        for(var f = vb(d), h = lc(f), i = new Vd(pa.a(h), 0), l = 0;;) {
          if(l < h) {
            if(x(b.a ? b.a(D.b(f, l)) : b.call(k, D.b(f, l)))) {
              var q = D.b(f, l);
              i.add(q)
            }
            l += 1
          }else {
            break
          }
        }
        return be(i.ka(), pf(b, wb(d)))
      }
      f = J(d);
      d = K(d);
      return x(b.a ? b.a(f) : b.call(k, f)) ? T(f, pf(b, d)) : pf(b, d)
    }
    return k
  }, k)
};
function rf(a, b) {
  var c;
  a ? (c = a.r & 4, c = x(c ? c : a.Kb) ? j : a.r ? m : y(mb, a)) : c = y(mb, a);
  x(c) ? (c = ra.c(ob, nb(a), b), c = pb(c)) : c = ra.c(wa, a, b);
  return c
}
var sf, tf = k;
function uf(a, b) {
  return tf.c(a, a, b)
}
function vf(a, b, c) {
  return new W(k, m, function() {
    var d = I(c);
    if(d) {
      var f = bf(a, d);
      return a === lc(f) ? T(f, tf.c(a, b, cf(b, d))) : k
    }
    return k
  }, k)
}
function wf(a, b, c, d) {
  return new W(k, m, function() {
    var f = I(d);
    if(f) {
      var h = bf(a, f);
      return a === lc(h) ? T(h, tf.p(a, b, c, cf(b, f))) : Q.a(bf(a, fe.b(h, c)))
    }
    return k
  }, k)
}
tf = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return uf.call(this, a, b);
    case 3:
      return vf.call(this, a, b, c);
    case 4:
      return wf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
tf.b = uf;
tf.c = vf;
tf.p = wf;
sf = tf;
function xf(a, b) {
  this.v = a;
  this.e = b
}
function yf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function zf(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new xf(a, pa.a(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var Bf = function Af(b, c, d, f) {
  var h = new xf(d.v, d.e.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? h.e[i] = f : (d = d.e[i], b = d != k ? Af(b, c - 5, d, f) : zf(k, c - 5, f), h.e[i] = b);
  return h
};
function Cf(a, b) {
  var c = 0 <= b;
  if(x(c ? b < a.h : c)) {
    if(b >= yf(a)) {
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
var Ef = function Df(b, c, d, f, h) {
  var i = new xf(d.v, d.e.slice());
  if(0 === c) {
    i.e[f & 31] = h
  }else {
    var l = f >>> c & 31, b = Df(b, c - 5, d.e[l], f, h);
    i.e[l] = b
  }
  return i
}, Ff = g, Gf = g, Hf = g, X = S = g, Y = g, If = g, Jf = g;
function Kf(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.S = f;
  this.m = h;
  this.r = 4;
  this.j = 167668511
}
r = Kf.prototype;
r.Da = function() {
  return new Hf(this.h, this.shift, Ff.a ? Ff.a(this.root) : Ff.call(k, this.root), Gf.a ? Gf.a(this.S) : Gf.call(k, this.S))
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.N = function(a, b) {
  return a.R(a, b, k)
};
r.w = function(a, b, c) {
  return a.R(a, b, c)
};
r.V = function(a, b, c) {
  var d = 0 <= b;
  if(x(d ? b < this.h : d)) {
    return yf(a) <= b ? (a = this.S.slice(), a[b & 31] = c, new Kf(this.l, this.h, this.shift, this.root, a, k)) : new Kf(this.l, this.h, this.shift, Ef(a, this.shift, this.root, b, c), this.S, k)
  }
  if(b === this.h) {
    return a.D(a, c)
  }
  e(Error([V("Index "), V(b), V(" out of bounds  [0,"), V(this.h), V("]")].join("")))
};
var Lf = k, Lf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Kf.prototype;
r.call = Lf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  if(32 > this.h - yf(a)) {
    var c = this.S.slice();
    c.push(b);
    return new Kf(this.l, this.h + 1, this.shift, this.root, c, k)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new xf(k, pa.a(32));
    d.e[0] = this.root;
    var f = zf(k, this.shift, new xf(k, this.S));
    d.e[1] = f
  }else {
    d = Bf(a, this.shift, this.root, new xf(k, this.S))
  }
  return new Kf(this.l, this.h + 1, c, d, [b], k)
};
r.La = function(a) {
  return 0 < this.h ? new Ub(a, this.h - 1, k) : M
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
  return Jb.b(a, b)
};
r.ua = function(a, b, c) {
  return Jb.c(a, b, c)
};
r.P = function(a) {
  return 0 === this.h ? k : Jf.c ? Jf.c(a, 0, 0) : Jf.call(k, a, 0, 0)
};
r.L = n("h");
r.va = function(a) {
  return 0 < this.h ? a.W(a, this.h - 1) : k
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new Kf(b, this.h, this.shift, this.root, this.S, this.m)
};
r.G = n("l");
r.W = function(a, b) {
  return Cf(a, b)[b & 31]
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return x(d ? b < this.h : d) ? a.W(a, b) : c
};
r.M = function() {
  return R(Mf, this.l)
};
var Nf = new xf(k, pa.a(32)), Mf = new Kf(k, 0, 5, Nf, [], 0);
function Of(a) {
  var b = a.length;
  if(32 > b) {
    return new Kf(k, b, 5, Nf, a, k)
  }
  for(var c = a.slice(0, 32), d = 32, f = nb(new Kf(k, 32, 5, Nf, c, k));;) {
    if(d < b) {
      c = d + 1, f = ob(f, a[d]), d = c
    }else {
      return pb(f)
    }
  }
}
dd = function(a) {
  return pb(ra.c(ob, nb(Mf), a))
};
function Pf(a) {
  var b = k;
  t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return dd(b)
}
Pf.n = 0;
Pf.k = function(a) {
  a = I(a);
  return dd(a)
};
Pf.g = function(a) {
  return dd(a)
};
function Qf(a, b, c, d, f, h) {
  this.$ = a;
  this.Z = b;
  this.q = c;
  this.K = d;
  this.l = f;
  this.m = h;
  this.j = 31719660;
  this.r = 1536
}
r = Qf.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.pa = function(a) {
  return this.K + 1 < this.Z.length ? (a = Jf.p ? Jf.p(this.$, this.Z, this.q, this.K + 1) : Jf.call(k, this.$, this.Z, this.q, this.K + 1), a == k ? k : a) : a.pb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.P = aa();
r.X = function() {
  return this.Z[this.K]
};
r.U = function(a) {
  return this.K + 1 < this.Z.length ? (a = Jf.p ? Jf.p(this.$, this.Z, this.q, this.K + 1) : Jf.call(k, this.$, this.Z, this.q, this.K + 1), a == k ? M : a) : a.Ia(a)
};
r.pb = function() {
  var a = this.Z.length, a = this.q + a < ta(this.$) ? Jf.c ? Jf.c(this.$, this.q + a, 0) : Jf.call(k, this.$, this.q + a, 0) : k;
  return a == k ? k : a
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return Jf.J ? Jf.J(this.$, this.Z, this.q, this.K, b) : Jf.call(k, this.$, this.Z, this.q, this.K, b)
};
r.M = function() {
  return R(Mf, this.l)
};
r.Ra = function() {
  return Wd.b(this.Z, this.K)
};
r.Ia = function() {
  var a = this.Z.length, a = this.q + a < ta(this.$) ? Jf.c ? Jf.c(this.$, this.q + a, 0) : Jf.call(k, this.$, this.q + a, 0) : k;
  return a == k ? M : a
};
var Rf = k;
function Sf(a, b, c) {
  return Rf.J(a, Cf(a, b), b, c, k)
}
function Tf(a, b, c, d) {
  return Rf.J(a, b, c, d, k)
}
function Uf(a, b, c, d, f) {
  return new Qf(a, b, c, d, f, k)
}
Rf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Sf.call(this, a, b, c);
    case 4:
      return Tf.call(this, a, b, c, d);
    case 5:
      return Uf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rf.c = Sf;
Rf.p = Tf;
Rf.J = Uf;
var Jf = Rf, Ff = function(a) {
  return new xf({}, a.e.slice())
}, Gf = function(a) {
  var b = pa.a(32);
  Jc(a, 0, b, 0, a.length);
  return b
}, Wf = function Vf(b, c, d, f) {
  var d = b.root.v === d.v ? d : new xf(b.root.v, d.e.slice()), h = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.e[h], b = i != k ? Vf(b, c - 5, i, f) : zf(b.root.v, c - 5, f)
  }
  d.e[h] = b;
  return d
}, Hf = function(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.S = d;
  this.j = 275;
  this.r = 88
};
Hf.aa = j;
Hf.fa = function() {
  return Q.a("cljs.core/TransientVector")
};
Hf.ga = function(a, b) {
  return H(b, "cljs.core/TransientVector")
};
var Xf = k, Xf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Hf.prototype;
r.call = Xf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.N = function(a, b) {
  return a.R(a, b, k)
};
r.w = function(a, b, c) {
  return a.R(a, b, c)
};
r.W = function(a, b) {
  if(this.root.v) {
    return Cf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return x(d ? b < this.h : d) ? a.W(a, b) : c
};
r.L = function() {
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
      if(x(f ? b < a.h : f)) {
        yf(a) <= b ? a.S[b & 31] = c : (d = function i(d, f) {
          var w = a.root.v === f.v ? f : new xf(a.root.v, f.e.slice());
          if(0 === d) {
            w.e[b & 31] = c
          }else {
            var v = b >>> d & 31, A = i(d - 5, w.e[v]);
            w.e[v] = A
          }
          return w
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
    if(32 > this.h - yf(a)) {
      this.S[this.h & 31] = b
    }else {
      var c = new xf(this.root.v, this.S), d = pa.a(32);
      d[0] = b;
      this.S = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = pa.a(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = zf(this.root.v, this.shift, c);
        this.root = new xf(this.root.v, d);
        this.shift = f
      }else {
        this.root = Wf(a, this.shift, this.root, c)
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
    var a = this.h - yf(a), b = pa.a(a);
    Jc(this.S, 0, b, 0, a);
    return new Kf(k, this.h, this.shift, this.root, b, k)
  }
  e(Error("persistent! called twice"))
};
function Yf() {
  this.r = 0;
  this.j = 2097152
}
Yf.prototype.z = p(m);
var Zf = new Yf;
function $f(a, b) {
  var c = Gc(b) ? lc(a) === lc(b) ? Ge(He, ud.b(function(a) {
    return xb.b(G.c(b, J(a), Zf), J(N(a)))
  }, a)) : k : k;
  return x(c) ? j : m
}
function ag(a, b) {
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
function bg(a, b) {
  var c = Bc.a(a), d = Bc.a(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function cg(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.sa, a = yc(a), i = 0, l = nb(dg);;) {
    if(i < f) {
      var q = d[i], i = i + 1, l = qb(l, q, h[q])
    }else {
      return d = R, b = qb(l, b, c), b = pb(b), d(b, a)
    }
  }
}
function eg(a, b) {
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
function fg(a, b, c, d, f) {
  this.l = a;
  this.keys = b;
  this.sa = c;
  this.Na = d;
  this.m = f;
  this.r = 4;
  this.j = 16123663
}
r = fg.prototype;
r.Da = function(a) {
  a = rf(Db.t ? Db.t() : Db.call(k), a);
  return nb(a)
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Bd(a)
};
r.N = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  a = da(b);
  return x(a ? ag(b, this.keys) != k : a) ? this.sa[b] : c
};
r.V = function(a, b, c) {
  if(da(b)) {
    var d = this.Na > gg;
    if(x(d ? d : this.keys.length >= gg)) {
      return cg(a, b, c)
    }
    if(ag(b, this.keys) != k) {
      return a = eg(this.sa, this.keys), a[b] = c, new fg(this.l, this.keys, a, this.Na + 1, k)
    }
    a = eg(this.sa, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new fg(this.l, d, a, this.Na + 1, k)
  }
  return cg(a, b, c)
};
r.Qa = function(a, b) {
  var c = da(b);
  return x(c ? ag(b, this.keys) != k : c) ? j : m
};
var hg = k, hg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
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
  return Hc(b) ? a.V(a, D.b(b, 0), D.b(b, 1)) : ra.c(wa, a, b)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = function() {
  var a = this;
  return 0 < a.keys.length ? ud.b(function(b) {
    return Pf.g(O([b, a.sa[b]], 0))
  }, a.keys.sort(bg)) : k
};
r.L = function() {
  return this.keys.length
};
r.z = function(a, b) {
  return $f(a, b)
};
r.I = function(a, b) {
  return new fg(b, this.keys, this.sa, this.Na, this.m)
};
r.G = n("l");
r.M = function() {
  return R(ig, this.l)
};
var ig = new fg(k, [], {}, 0, 0), gg = 32;
function jg(a, b) {
  return new fg(k, a, b, 0, k)
}
function kg(a, b) {
  for(var c = a.e, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(xb.b(c[f], b)) {
      return f
    }
    f += 2
  }
}
var lg = g;
function mg(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.e = c;
  this.m = d;
  this.r = 4;
  this.j = 16123663
}
r = mg.prototype;
r.Da = function() {
  return new lg({}, this.e.length, this.e.slice())
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Bd(a)
};
r.N = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  a = kg(a, b);
  return-1 === a ? c : this.e[a + 1]
};
r.V = function(a, b, c) {
  var d = kg(a, b);
  if(-1 === d) {
    if(this.h < ng) {
      var d = this.l, a = this.h + 1, f = this.e.slice();
      f.push(b);
      f.push(c);
      c = new mg(d, a, f, k)
    }else {
      c = R(uc.c(rf(dg, a), b, c), this.l)
    }
  }else {
    c === this.e[d + 1] ? c = a : (b = this.l, a = this.h, f = this.e.slice(), f[d + 1] = c, c = new mg(b, a, f, k))
  }
  return c
};
r.Qa = function(a, b) {
  return-1 !== kg(a, b)
};
var og = k, og = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = mg.prototype;
r.call = og;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Hc(b) ? a.V(a, D.b(b, 0), D.b(b, 1)) : ra.c(wa, a, b)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.e.length;
    b = function f(b) {
      return new W(k, m, function() {
        return b < c ? T(Of([a.e[b], a.e[b + 1]]), f(b + 2)) : k
      }, k)
    }(0)
  }else {
    b = k
  }
  return b
};
r.L = n("h");
r.z = function(a, b) {
  return $f(a, b)
};
r.I = function(a, b) {
  return new mg(b, this.h, this.e, this.m)
};
r.G = n("l");
r.M = function() {
  return Ua(pg, this.l)
};
var pg = new mg(k, 0, [], k), ng = 16, qg = g, lg = function(a, b, c) {
  this.ya = a;
  this.ra = b;
  this.e = c;
  this.r = 56;
  this.j = 258
};
lg.aa = j;
lg.fa = function() {
  return Q.a("cljs.core/TransientArrayMap")
};
lg.ga = function(a, b) {
  return H(b, "cljs.core/TransientArrayMap")
};
r = lg.prototype;
r.wa = function(a, b, c) {
  if(x(this.ya)) {
    var d = kg(a, b);
    if(-1 === d) {
      if(this.ra + 2 <= 2 * ng) {
        return this.ra += 2, this.e.push(b), this.e.push(c), a
      }
      a = qg.b ? qg.b(this.ra, this.e) : qg.call(k, this.ra, this.e);
      return qb(a, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.Ea = function(a, b) {
  if(x(this.ya)) {
    var c;
    b ? (c = b.j & 2048, c = x(c ? c : b.Ab) ? j : b.j ? m : y(Ma, b)) : c = y(Ma, b);
    if(x(c)) {
      return a.wa(a, zd.a ? zd.a(b) : zd.call(k, b), Ad.a ? Ad.a(b) : Ad.call(k, b))
    }
    c = I(b);
    for(var d = a;;) {
      var f = J(c);
      if(x(f)) {
        c = N(c), d = d.wa(d, zd.a ? zd.a(f) : zd.call(k, f), Ad.a ? Ad.a(f) : Ad.call(k, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Ma = function() {
  if(x(this.ya)) {
    return this.ya = m, new mg(k, hd(this.ra, 2), this.e, k)
  }
  e(Error("persistent! called twice"))
};
r.N = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  if(x(this.ya)) {
    return a = kg(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.L = function() {
  if(x(this.ya)) {
    return hd(this.ra, 2)
  }
  e(Error("count after persistent!"))
};
var rg = g, qg = function(a, b) {
  for(var c = nb(ig), d = 0;;) {
    if(d < a) {
      c = qb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
};
function sg() {
  this.o = m
}
var tg = g, ug = g, vg = g, wg = g, xg = g, S = g;
function yg(a, b) {
  return da(a) ? a === b : xb.b(a, b)
}
var zg, Ag = k;
function Bg(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Cg(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Ag = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Bg.call(this, a, b, c);
    case 5:
      return Cg.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ag.c = Bg;
Ag.J = Cg;
zg = Ag;
var Dg, Eg = k;
function Fg(a, b, c, d) {
  a = a.za(b);
  a.e[c] = d;
  return a
}
function Gg(a, b, c, d, f, h) {
  a = a.za(b);
  a.e[c] = d;
  a.e[f] = h;
  return a
}
Eg = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return Fg.call(this, a, b, c, d);
    case 6:
      return Gg.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eg.p = Fg;
Eg.ha = Gg;
Dg = Eg;
var Hg = g;
function Ig(a, b, c) {
  this.v = a;
  this.C = b;
  this.e = c
}
r = Ig.prototype;
r.ca = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), l = id(this.C & i - 1);
  if(0 === (this.C & i)) {
    var q = id(this.C);
    if(2 * q < this.e.length) {
      a = this.za(a);
      b = a.e;
      h.o = j;
      a: {
        c = 2 * (q - l);
        h = 2 * l + (c - 1);
        for(q = 2 * (l + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[q] = b[h];
          q -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * l] = d;
      b[2 * l + 1] = f;
      a.C |= i;
      return a
    }
    if(16 <= q) {
      l = pa.a(32);
      l[c >>> b & 31] = Jg.ca(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.C >>> d & 1) && (l[d] = this.e[f] != k ? Jg.ca(a, b + 5, Bc.a(this.e[f]), this.e[f], this.e[f + 1], h) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Hg(a, q + 1, l)
    }
    b = pa.a(2 * (q + 4));
    Jc(this.e, 0, b, 0, 2 * l);
    b[2 * l] = d;
    b[2 * l + 1] = f;
    Jc(this.e, 2 * l, b, 2 * (l + 1), 2 * (q - l));
    h.o = j;
    a = this.za(a);
    a.e = b;
    a.C |= i;
    return a
  }
  q = this.e[2 * l];
  i = this.e[2 * l + 1];
  if(q == k) {
    return q = i.ca(a, b + 5, c, d, f, h), q === i ? this : Dg.p(this, a, 2 * l + 1, q)
  }
  if(yg(d, q)) {
    return f === i ? this : Dg.p(this, a, 2 * l + 1, f)
  }
  h.o = j;
  return Dg.ha(this, a, 2 * l, k, 2 * l + 1, wg.xa ? wg.xa(a, b + 5, q, i, c, d, f) : wg.call(k, a, b + 5, q, i, c, d, f))
};
r.Fa = function() {
  return tg.a ? tg.a(this.e) : tg.call(k, this.e)
};
r.za = function(a) {
  if(a === this.v) {
    return this
  }
  var b = id(this.C), c = pa.a(0 > b ? 4 : 2 * (b + 1));
  Jc(this.e, 0, c, 0, 2 * b);
  return new Ig(a, this.C, c)
};
r.ba = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = id(this.C & h - 1);
  if(0 === (this.C & h)) {
    var l = id(this.C);
    if(16 <= l) {
      i = pa.a(32);
      i[b >>> a & 31] = Jg.ba(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.C >>> c & 1) && (i[c] = this.e[d] != k ? Jg.ba(a + 5, Bc.a(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Hg(k, l + 1, i)
    }
    a = pa.a(2 * (l + 1));
    Jc(this.e, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Jc(this.e, 2 * i, a, 2 * (i + 1), 2 * (l - i));
    f.o = j;
    return new Ig(k, this.C | h, a)
  }
  l = this.e[2 * i];
  h = this.e[2 * i + 1];
  if(l == k) {
    return l = h.ba(a + 5, b, c, d, f), l === h ? this : new Ig(k, this.C, zg.c(this.e, 2 * i + 1, l))
  }
  if(yg(c, l)) {
    return d === h ? this : new Ig(k, this.C, zg.c(this.e, 2 * i + 1, d))
  }
  f.o = j;
  return new Ig(k, this.C, zg.J(this.e, 2 * i, k, 2 * i + 1, wg.ha ? wg.ha(a + 5, l, h, b, c, d) : wg.call(k, a + 5, l, h, b, c, d)))
};
r.na = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.C & f)) {
    return d
  }
  var h = id(this.C & f - 1), f = this.e[2 * h], h = this.e[2 * h + 1];
  return f == k ? h.na(a + 5, b, c, d) : yg(c, f) ? h : d
};
var Jg = new Ig(k, 0, pa.a(0)), Hg = function(a, b, c) {
  this.v = a;
  this.h = b;
  this.e = c
};
Hg.aa = j;
Hg.fa = function() {
  return Q.a("cljs.core/ArrayNode")
};
Hg.ga = function(a, b) {
  return H(b, "cljs.core/ArrayNode")
};
r = Hg.prototype;
r.ca = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, l = this.e[i];
  if(l == k) {
    return a = Dg.p(this, a, i, Jg.ca(a, b + 5, c, d, f, h)), a.h += 1, a
  }
  b = l.ca(a, b + 5, c, d, f, h);
  return b === l ? this : Dg.p(this, a, i, b)
};
r.Fa = function() {
  return ug.a ? ug.a(this.e) : ug.call(k, this.e)
};
r.za = function(a) {
  return a === this.v ? this : new Hg(a, this.h, this.e.slice())
};
r.ba = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.e[h];
  if(i == k) {
    return new Hg(k, this.h + 1, zg.c(this.e, h, Jg.ba(a + 5, b, c, d, f)))
  }
  a = i.ba(a + 5, b, c, d, f);
  return a === i ? this : new Hg(k, this.h, zg.c(this.e, h, a))
};
r.na = function(a, b, c, d) {
  var f = this.e[b >>> a & 31];
  return f != k ? f.na(a + 5, b, c, d) : d
};
function Kg(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(yg(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Lg(a, b, c, d) {
  this.v = a;
  this.la = b;
  this.h = c;
  this.e = d
}
r = Lg.prototype;
r.ca = function(a, b, c, d, f, h) {
  if(c === this.la) {
    b = Kg(this.e, this.h, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.h) {
        return a = Dg.ha(this, a, 2 * this.h, d, 2 * this.h + 1, f), h.o = j, a.h += 1, a
      }
      c = this.e.length;
      b = pa.a(c + 2);
      Jc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.o = j;
      h = this.h + 1;
      a === this.v ? (this.e = b, this.h = h, a = this) : a = new Lg(this.v, this.la, h, b);
      return a
    }
    return this.e[b + 1] === f ? this : Dg.p(this, a, b + 1, f)
  }
  return(new Ig(a, 1 << (this.la >>> b & 31), [k, this, k, k])).ca(a, b, c, d, f, h)
};
r.Fa = function() {
  return tg.a ? tg.a(this.e) : tg.call(k, this.e)
};
r.za = function(a) {
  if(a === this.v) {
    return this
  }
  var b = pa.a(2 * (this.h + 1));
  Jc(this.e, 0, b, 0, 2 * this.h);
  return new Lg(a, this.la, this.h, b)
};
r.ba = function(a, b, c, d, f) {
  return b === this.la ? (a = Kg(this.e, this.h, c), -1 === a ? (a = this.e.length, b = pa.a(a + 2), Jc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.o = j, new Lg(k, this.la, this.h + 1, b)) : xb.b(this.e[a], d) ? this : new Lg(k, this.la, this.h, zg.c(this.e, a + 1, d))) : (new Ig(k, 1 << (this.la >>> a & 31), [k, this])).ba(a, b, c, d, f)
};
r.na = function(a, b, c, d) {
  a = Kg(this.e, this.h, c);
  return 0 > a ? d : yg(c, this.e[a]) ? this.e[a + 1] : d
};
var Mg = k;
function Ng(a, b, c, d, f, h) {
  var i = Bc.a(b);
  if(i === d) {
    return new Lg(k, i, 2, [b, c, f, h])
  }
  var l = new sg;
  return Jg.ba(a, i, b, c, l).ba(a, d, f, h, l)
}
function Og(a, b, c, d, f, h, i) {
  var l = Bc.a(c);
  if(l === f) {
    return new Lg(k, l, 2, [c, d, h, i])
  }
  var q = new sg;
  return Jg.ca(a, b, l, c, d, q).ca(a, b, f, h, i, q)
}
Mg = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Ng.call(this, a, b, c, d, f, h);
    case 7:
      return Og.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mg.ha = Ng;
Mg.xa = Og;
wg = Mg;
function Pg(a, b, c, d, f) {
  this.l = a;
  this.da = b;
  this.q = c;
  this.ea = d;
  this.m = f;
  this.r = 0;
  this.j = 31850572
}
r = Pg.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = aa();
r.X = function() {
  return this.ea == k ? Of([this.da[this.q], this.da[this.q + 1]]) : J(this.ea)
};
r.U = function() {
  return this.ea == k ? tg.c ? tg.c(this.da, this.q + 2, k) : tg.call(k, this.da, this.q + 2, k) : tg.c ? tg.c(this.da, this.q, N(this.ea)) : tg.call(k, this.da, this.q, N(this.ea))
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new Pg(b, this.da, this.q, this.ea, this.m)
};
r.G = n("l");
r.M = function() {
  return R(M, this.l)
};
var Qg = k;
function Rg(a) {
  return Qg.c(a, 0, k)
}
function Sg(a, b, c) {
  if(c == k) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != k) {
          return new Pg(k, a, b, k, k)
        }
        var d = a[b + 1];
        if(x(d) && (d = d.Fa(), x(d))) {
          return new Pg(k, a, b + 2, d, k)
        }
        b += 2
      }else {
        return k
      }
    }
  }else {
    return new Pg(k, a, b, c, k)
  }
}
Qg = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Rg.call(this, a);
    case 3:
      return Sg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qg.a = Rg;
Qg.c = Sg;
tg = Qg;
function Tg(a, b, c, d, f) {
  this.l = a;
  this.da = b;
  this.q = c;
  this.ea = d;
  this.m = f;
  this.r = 0;
  this.j = 31850572
}
r = Tg.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = aa();
r.X = function() {
  return J(this.ea)
};
r.U = function() {
  return ug.p ? ug.p(k, this.da, this.q, N(this.ea)) : ug.call(k, k, this.da, this.q, N(this.ea))
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new Tg(b, this.da, this.q, this.ea, this.m)
};
r.G = n("l");
r.M = function() {
  return R(M, this.l)
};
var Ug = k;
function Vg(a) {
  return Ug.p(k, a, 0, k)
}
function Wg(a, b, c, d) {
  if(d == k) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(x(f) && (f = f.Fa(), x(f))) {
          return new Tg(a, b, c + 1, f, k)
        }
        c += 1
      }else {
        return k
      }
    }
  }else {
    return new Tg(a, b, c, d, k)
  }
}
Ug = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Vg.call(this, a);
    case 4:
      return Wg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ug.a = Vg;
Ug.p = Wg;
ug = Ug;
rg = g;
function Xg(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.T = d;
  this.Y = f;
  this.m = h;
  this.r = 4;
  this.j = 16123663
}
r = Xg.prototype;
r.Da = function() {
  return new rg({}, this.root, this.h, this.T, this.Y)
};
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Bd(a)
};
r.N = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  return b == k ? this.T ? this.Y : c : this.root == k ? c : this.root.na(0, Bc.a(b), b, c)
};
r.V = function(a, b, c) {
  if(b == k) {
    var d = this.T;
    return x(d ? c === this.Y : d) ? a : new Xg(this.l, this.T ? this.h : this.h + 1, this.root, j, c, k)
  }
  d = new sg;
  c = (this.root == k ? Jg : this.root).ba(0, Bc.a(b), b, c, d);
  return c === this.root ? a : new Xg(this.l, d.o ? this.h + 1 : this.h, c, this.T, this.Y, k)
};
r.Qa = function(a, b) {
  return b == k ? this.T : this.root == k ? m : this.root.na(0, Bc.a(b), b, Kc) !== Kc
};
var Yg = k, Yg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Xg.prototype;
r.call = Yg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Hc(b) ? a.V(a, D.b(b, 0), D.b(b, 1)) : ra.c(wa, a, b)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = function() {
  if(0 < this.h) {
    var a = this.root != k ? this.root.Fa() : k;
    return this.T ? T(Of([k, this.Y]), a) : a
  }
  return k
};
r.L = n("h");
r.z = function(a, b) {
  return $f(a, b)
};
r.I = function(a, b) {
  return new Xg(b, this.h, this.root, this.T, this.Y, this.m)
};
r.G = n("l");
r.M = function() {
  return Ua(dg, this.l)
};
var dg = new Xg(k, 0, k, m, k, 0), rg = function(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.Y = f;
  this.r = 56;
  this.j = 258
};
rg.aa = j;
rg.fa = function() {
  return Q.a("cljs.core/TransientHashMap")
};
rg.ga = function(a, b) {
  return H(b, "cljs.core/TransientHashMap")
};
r = rg.prototype;
r.wa = function(a, b, c) {
  return Zg(a, b, c)
};
r.Ea = function(a, b) {
  var c;
  a: {
    if(a.v) {
      b ? (c = b.j & 2048, c = x(c ? c : b.Ab) ? j : b.j ? m : y(Ma, b)) : c = y(Ma, b);
      if(x(c)) {
        c = Zg(a, zd.a ? zd.a(b) : zd.call(k, b), Ad.a ? Ad.a(b) : Ad.call(k, b));
        break a
      }
      c = I(b);
      for(var d = a;;) {
        var f = J(c);
        if(x(f)) {
          c = N(c), d = Zg(d, zd.a ? zd.a(f) : zd.call(k, f), Ad.a ? Ad.a(f) : Ad.call(k, f))
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
  a.v ? (a.v = k, b = new Xg(k, a.count, a.root, a.T, a.Y, k)) : e(Error("persistent! called twice"));
  return b
};
r.N = function(a, b) {
  return b == k ? this.T ? this.Y : k : this.root == k ? k : this.root.na(0, Bc.a(b), b)
};
r.w = function(a, b, c) {
  return b == k ? this.T ? this.Y : c : this.root == k ? c : this.root.na(0, Bc.a(b), b, c)
};
r.L = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Zg(a, b, c) {
  if(a.v) {
    if(b == k) {
      a.Y !== c && (a.Y = c), a.T || (a.count += 1, a.T = j)
    }else {
      var d = new sg, b = (a.root == k ? Jg : a.root).ca(a.v, 0, Bc.a(b), b, c, d);
      b !== a.root && (a.root = b);
      d.o && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function $g(a, b, c) {
  for(var d = b;;) {
    if(a != k) {
      b = c ? a.left : a.right, d = hc.b(d, a), a = b
    }else {
      return d
    }
  }
}
function ah(a, b, c, d, f) {
  this.l = a;
  this.stack = b;
  this.Ga = c;
  this.h = d;
  this.m = f;
  this.r = 0;
  this.j = 31850574
}
r = ah.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
r.D = function(a, b) {
  return T(b, a)
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
r.P = aa();
r.L = function(a) {
  return 0 > this.h ? lc(N(a)) + 1 : this.h
};
r.X = function() {
  return Pa(this.stack)
};
r.U = function() {
  var a = J(this.stack), a = $g(this.Ga ? a.right : a.left, N(this.stack), this.Ga);
  return a != k ? new ah(k, a, this.Ga, this.h - 1, k) : M
};
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return new ah(b, this.stack, this.Ga, this.h, this.m)
};
r.G = n("l");
r.M = function() {
  return R(M, this.l)
};
var Z = g, $ = g, $ = function(a, b, c, d, f) {
  this.key = a;
  this.o = b;
  this.left = c;
  this.right = d;
  this.m = f;
  this.r = 0;
  this.j = 32402207
};
$.aa = j;
$.fa = function() {
  return Q.a("cljs.core/BlackNode")
};
$.ga = function(a, b) {
  return H(b, "cljs.core/BlackNode")
};
$.prototype.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
$.prototype.N = function(a, b) {
  return a.R(a, b, k)
};
$.prototype.w = function(a, b, c) {
  return a.R(a, b, c)
};
$.prototype.V = function(a, b, c) {
  return uc.c(Of([this.key, this.o]), b, c)
};
var bh = k, bh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.call = bh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Of([this.key, this.o, b])
};
r.Ja = n("key");
r.Ka = n("o");
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
  return new $(a.key, a.o, this, a.right, k)
};
var ch = k, ch = function() {
  switch(arguments.length) {
    case 0:
      return U.a ? U.a(this) : U.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.toString = ch;
r.nb = function(a) {
  return new $(a.key, a.o, a.left, this, k)
};
r.Ha = function() {
  return this
};
r.ta = function(a, b) {
  return Jb.b(a, b)
};
r.ua = function(a, b, c) {
  return Jb.c(a, b, c)
};
r.P = function() {
  return Q.b(this.key, this.o)
};
r.L = p(2);
r.va = n("o");
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return R(Of([this.key, this.o]), b)
};
r.G = p(k);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.o : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.o : c
};
r.M = function() {
  return Mf
};
Z = function(a, b, c, d, f) {
  this.key = a;
  this.o = b;
  this.left = c;
  this.right = d;
  this.m = f;
  this.r = 0;
  this.j = 32402207
};
Z.aa = j;
Z.fa = function() {
  return Q.a("cljs.core/RedNode")
};
Z.ga = function(a, b) {
  return H(b, "cljs.core/RedNode")
};
Z.prototype.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Tb(a)
};
Z.prototype.N = function(a, b) {
  return a.R(a, b, k)
};
Z.prototype.w = function(a, b, c) {
  return a.R(a, b, c)
};
Z.prototype.V = function(a, b, c) {
  return uc.c(Of([this.key, this.o]), b, c)
};
var dh = k, dh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.call = dh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Of([this.key, this.o, b])
};
r.Ja = n("key");
r.Ka = n("o");
r.lb = function(a) {
  return new Z(this.key, this.o, this.left, a, k)
};
r.replace = function(a, b, c, d) {
  return new Z(a, b, c, d, k)
};
r.kb = function(a) {
  return new Z(this.key, this.o, a, this.right, k)
};
r.mb = function(a) {
  return Cb(Z, this.left) ? new Z(this.key, this.o, this.left.Ha(), new $(a.key, a.o, this.right, a.right, k), k) : Cb(Z, this.right) ? new Z(this.right.key, this.right.o, new $(this.key, this.o, this.left, this.right.left, k), new $(a.key, a.o, this.right.right, a.right, k), k) : new $(a.key, a.o, this, a.right, k)
};
var eh = k, eh = function() {
  switch(arguments.length) {
    case 0:
      return U.a ? U.a(this) : U.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.toString = eh;
r.nb = function(a) {
  return Cb(Z, this.right) ? new Z(this.key, this.o, new $(a.key, a.o, a.left, this.left, k), this.right.Ha(), k) : Cb(Z, this.left) ? new Z(this.left.key, this.left.o, new $(a.key, a.o, a.left, this.left.left, k), new $(this.key, this.o, this.left.right, this.right, k), k) : new $(a.key, a.o, a.left, this, k)
};
r.Ha = function() {
  return new $(this.key, this.o, this.left, this.right, k)
};
r.ta = function(a, b) {
  return Jb.b(a, b)
};
r.ua = function(a, b, c) {
  return Jb.c(a, b, c)
};
r.P = function() {
  return Q.b(this.key, this.o)
};
r.L = p(2);
r.va = n("o");
r.z = function(a, b) {
  return Eb(a, b)
};
r.I = function(a, b) {
  return R(Of([this.key, this.o]), b)
};
r.G = p(k);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.o : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.o : c
};
r.M = function() {
  return Mf
};
var gh = function fh(b, c, d, f, h) {
  if(c == k) {
    return new Z(d, f, k, k, k)
  }
  var i = b.b ? b.b(d, c.key) : b.call(k, d, c.key);
  if(0 === i) {
    return h[0] = c, k
  }
  if(0 > i) {
    return b = fh(b, c.left, d, f, h), b != k ? c.kb(b) : k
  }
  b = fh(b, c.right, d, f, h);
  return b != k ? c.lb(b) : k
}, ih = function hh(b, c, d, f) {
  var h = c.key, i = b.b ? b.b(d, h) : b.call(k, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.o, hh(b, c.left, d, f), c.right) : c.replace(h, c.o, c.left, hh(b, c.right, d, f))
}, zd = g;
function jh(a, b, c, d, f) {
  this.ma = a;
  this.Ba = b;
  this.h = c;
  this.l = d;
  this.m = f;
  this.r = 0;
  this.j = 418776847
}
r = jh.prototype;
r.F = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Bd(a)
};
r.N = function(a, b) {
  return a.w(a, b, k)
};
r.w = function(a, b, c) {
  a = kh(a, b);
  return a != k ? a.o : c
};
r.V = function(a, b, c) {
  var d = [k], f = gh(this.ma, this.Ba, b, c, d);
  return f == k ? (d = qc.b(d, 0), xb.b(c, d.o) ? a : new jh(this.ma, ih(this.ma, this.Ba, b, c), this.h, this.l, k)) : new jh(this.ma, f.Ha(), this.h + 1, this.l, k)
};
r.Qa = function(a, b) {
  return kh(a, b) != k
};
var lh = k, lh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.N(this, b);
    case 3:
      return this.w(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = jh.prototype;
r.call = lh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.D = function(a, b) {
  return Hc(b) ? a.V(a, D.b(b, 0), D.b(b, 1)) : ra.c(wa, a, b)
};
r.La = function() {
  return 0 < this.h ? new ah(k, $g(this.Ba, k, m), m, this.h, k) : k
};
r.toString = function() {
  return U.a ? U.a(this) : U.call(k, this)
};
function kh(a, b) {
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
r.P = function() {
  return 0 < this.h ? new ah(k, $g(this.Ba, k, j), j, this.h, k) : k
};
r.L = n("h");
r.z = function(a, b) {
  return $f(a, b)
};
r.I = function(a, b) {
  return new jh(this.ma, this.Ba, this.h, b, this.m)
};
r.G = n("l");
r.M = function() {
  return R(mh, this.l)
};
var mh = new jh(Pc, k, 0, k, 0);
function nh(a) {
  for(var b = I(a), c = nb(dg);;) {
    if(b) {
      var a = N(N(b)), d = J(b), b = J(N(b)), c = qb(c, d, b), b = a
    }else {
      return pb(c)
    }
  }
}
function oh(a) {
  var b = k;
  t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return nh.call(this, b)
}
oh.n = 0;
oh.k = function(a) {
  a = I(a);
  return nh(a)
};
oh.g = nh;
Db = oh;
function ph(a) {
  return new mg(k, hd(lc(a), 2), B.b(oa, a), k)
}
function qh(a) {
  var b = k;
  t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return ph.call(this, b)
}
qh.n = 0;
qh.k = function(a) {
  a = I(a);
  return ph(a)
};
qh.g = ph;
function rh(a) {
  for(var a = I(a), b = mh;;) {
    if(a) {
      var c = N(N(a)), b = uc.c(b, J(a), J(N(a))), a = c
    }else {
      return b
    }
  }
}
function sh(a) {
  var b = k;
  t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return rh.call(this, b)
}
sh.n = 0;
sh.k = function(a) {
  a = I(a);
  return rh(a)
};
sh.g = rh;
zd = function(a) {
  return Na(a)
};
Ad = function(a) {
  return Oa(a)
};
Db();
sh();
Cd = function(a) {
  if(Mc(a)) {
    return a
  }
  var b = Nc(a);
  if(x(b ? b : Oc(a))) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? sd.b(a, 2) : sd.b(a, b + 1)
  }
  e(Error([V("Doesn't support name: "), V(a)].join("")))
};
function th(a) {
  var b = Nc(a);
  if(x(b ? b : Oc(a))) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? sd.c(a, 2, b) : k
  }
  e(Error([V("Doesn't support namespace: "), V(a)].join("")))
}
var uh, vh = k;
function wh(a) {
  for(;;) {
    if(I(a)) {
      a = N(a)
    }else {
      return k
    }
  }
}
function xh(a, b) {
  for(;;) {
    var c = I(b);
    if(x(c ? 0 < a : c)) {
      var c = a - 1, d = N(b), a = c, b = d
    }else {
      return k
    }
  }
}
vh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return wh.call(this, a);
    case 2:
      return xh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vh.a = wh;
vh.b = xh;
uh = vh;
var yh, zh = k;
function Ah(a) {
  uh.a(a);
  return a
}
function Bh(a, b) {
  uh.b(a, b);
  return b
}
zh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ah.call(this, a);
    case 2:
      return Bh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zh.a = Ah;
zh.b = Bh;
yh = zh;
X = function(a, b, c, d, f, h) {
  return fe.g(Of([b]), of(nf(Of([c]), ud.b(function(b) {
    return a.b ? a.b(b, f) : a.call(k, b, f)
  }, h))), O([Of([d])], 0))
};
Y = function(a, b, c, d, f, h, i) {
  H(a, c);
  I(i) && (b.c ? b.c(J(i), a, h) : b.call(k, J(i), a, h));
  for(c = I(N(i));;) {
    if(c) {
      i = J(c), H(a, d), b.c ? b.c(i, a, h) : b.call(k, i, a, h), c = N(c)
    }else {
      break
    }
  }
  return H(a, f)
};
function Ch(a, b) {
  for(var c = I(b);;) {
    if(c) {
      var d = J(c);
      H(a, d);
      c = N(c)
    }else {
      return k
    }
  }
}
function Dh(a, b) {
  var c = k;
  t(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Ch.call(this, a, c)
}
Dh.n = 1;
Dh.k = function(a) {
  var b = J(a), a = K(a);
  return Ch(b, a)
};
Dh.g = Ch;
function Eh(a) {
  this.Db = a;
  this.r = 0;
  this.j = 1073741824
}
Eh.prototype.ub = function(a, b) {
  return this.Db.append(b)
};
Eh.prototype.Cb = p(k);
var Gh = function Fh(b, c) {
  return b == k ? Q.a("nil") : g === b ? Q.a("#<undefined>") : fe.b(x(function() {
    var d = G.c(c, "\ufdd0:meta", k);
    return x(d) ? (b ? (d = b.j & 131072, d = x(d ? d : b.sb) ? j : b.j ? m : y(Sa, b)) : d = y(Sa, b), x(d) ? yc(b) : d) : d
  }()) ? fe.g(Of(["^"]), Fh(yc(b), c), O([Of([" "])], 0)) : k, x(function() {
    var c = b != k;
    return c ? b.aa : c
  }()) ? b.fa(b) : x(b ? x(function() {
    var c = b.j & 536870912;
    return c ? c : b.H
  }()) ? j : b.j ? m : y(fb, b) : y(fb, b)) ? gb(b, c) : x(b instanceof RegExp) ? Q.c('#"', b.source, '"') : Q.c("#<", "" + V(b), ">"))
}, If = function Hh(b, c, d) {
  if(b == k) {
    return H(c, "nil")
  }
  if(g === b) {
    return H(c, "#<undefined>")
  }
  var f;
  f = G.c(d, "\ufdd0:meta", k);
  x(f) && (b ? (f = b.j & 131072, f = x(f ? f : b.sb) ? j : b.j ? m : y(Sa, b)) : f = y(Sa, b), f = x(f) ? yc(b) : f);
  x(f) && (H(c, "^"), Hh(yc(b), c, d), H(c, " "));
  f = b != k;
  x(f ? b.aa : f) ? b = b.ga(b, c, d) : (b ? (f = b.j & 2147483648, f = x(f ? f : b.O) ? j : b.j ? m : y(jb, b)) : f = y(jb, b), x(f) ? b = kb(b, c, d) : (b ? (f = b.j & 536870912, f = x(f ? f : b.H) ? j : b.j ? m : y(fb, b)) : f = y(fb, b), b = x(f) ? B.c(Dh, c, gb(b, d)) : x(b instanceof RegExp) ? Dh.g(c, O(['#"', b.source, '"'], 0)) : Dh.g(c, O(["#<", "" + V(b), ">"], 0))));
  return b
};
function Ih(a) {
  var b = jg(["\ufdd0:flush-on-newline", "\ufdd0:readably", "\ufdd0:meta", "\ufdd0:dup"], {"\ufdd0:flush-on-newline":j, "\ufdd0:readably":j, "\ufdd0:meta":m, "\ufdd0:dup":m}), c = a == k;
  if(c ? c : na(I(a))) {
    b = ""
  }else {
    var c = new ma, d = new Eh(c);
    a: {
      If(J(a), d, b);
      for(a = I(N(a));;) {
        if(a) {
          var f = J(a);
          H(d, " ");
          If(f, d, b);
          a = N(a)
        }else {
          break a
        }
      }
    }
    ib(d);
    b = "" + V(c)
  }
  return b
}
function Jh(a) {
  var b = k;
  t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Ih(b)
}
Jh.n = 0;
Jh.k = function(a) {
  a = I(a);
  return Ih(a)
};
Jh.g = function(a) {
  return Ih(a)
};
var U = Jh, Kh = jg('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function Lh(a) {
  return[V('"'), V(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return G.c(Kh, a, k)
  })), V('"')].join("")
}
fb.number = j;
gb.number = function(a) {
  return Q.a("" + V(a))
};
Xb.prototype.H = j;
Xb.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
ae.prototype.H = j;
ae.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
jh.prototype.H = j;
jh.prototype.B = function(a, b) {
  return X(function(a) {
    return X(Gh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
mg.prototype.H = j;
mg.prototype.B = function(a, b) {
  return X(function(a) {
    return X(Gh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
W.prototype.H = j;
W.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
Ub.prototype.H = j;
Ub.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
fb["boolean"] = j;
gb["boolean"] = function(a) {
  return Q.a("" + V(a))
};
fb.string = j;
gb.string = function(a, b) {
  return Nc(a) ? Q.a([V(":"), V(function() {
    var b = th(a);
    return x(b) ? [V(b), V("/")].join("") : k
  }()), V(Cd(a))].join("")) : Oc(a) ? Q.a([V(function() {
    var b = th(a);
    return x(b) ? [V(b), V("/")].join("") : k
  }()), V(Cd(a))].join("")) : Q.a(x((new Qd("\ufdd0:readably")).call(k, b)) ? Lh(a) : a)
};
Pg.prototype.H = j;
Pg.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
Z.prototype.H = j;
Z.prototype.B = function(a, b) {
  return X(Gh, "[", " ", "]", b, a)
};
Qf.prototype.H = j;
Qf.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
Xg.prototype.H = j;
Xg.prototype.B = function(a, b) {
  return X(function(a) {
    return X(Gh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Kf.prototype.H = j;
Kf.prototype.B = function(a, b) {
  return X(Gh, "[", " ", "]", b, a)
};
Dd.prototype.H = j;
Dd.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
fb.array = j;
gb.array = function(a, b) {
  return X(Gh, "#<Array [", ", ", "]>", b, a)
};
fb["function"] = j;
gb["function"] = function(a) {
  return Q.c("#<", "" + V(a), ">")
};
Ed.prototype.H = j;
Ed.prototype.B = function() {
  return Q.a("()")
};
$.prototype.H = j;
$.prototype.B = function(a, b) {
  return X(Gh, "[", " ", "]", b, a)
};
Date.prototype.H = j;
Date.prototype.B = function(a) {
  function b(a, b) {
    for(var f = "" + V(a);;) {
      if(lc(f) < b) {
        f = [V("0"), V(f)].join("")
      }else {
        return f
      }
    }
  }
  return Q.a([V('#inst "'), V(a.getUTCFullYear()), V("-"), V(b(a.getUTCMonth() + 1, 2)), V("-"), V(b(a.getUTCDate(), 2)), V("T"), V(b(a.getUTCHours(), 2)), V(":"), V(b(a.getUTCMinutes(), 2)), V(":"), V(b(a.getUTCSeconds(), 2)), V("."), V(b(a.getUTCMilliseconds(), 3)), V("-"), V('00:00"')].join(""))
};
Md.prototype.H = j;
Md.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
Tg.prototype.H = j;
Tg.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
fg.prototype.H = j;
fg.prototype.B = function(a, b) {
  return X(function(a) {
    return X(Gh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ah.prototype.H = j;
ah.prototype.B = function(a, b) {
  return X(Gh, "(", " ", ")", b, a)
};
jb.number = j;
kb.number = function(a, b) {
  1 / 0;
  return H(b, "" + V(a))
};
Xb.prototype.O = j;
Xb.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
ae.prototype.O = j;
ae.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
jh.prototype.O = j;
jh.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, If, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
mg.prototype.O = j;
mg.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, If, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.O = j;
W.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
Ub.prototype.O = j;
Ub.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
jb["boolean"] = j;
kb["boolean"] = function(a, b) {
  return H(b, "" + V(a))
};
jb.string = j;
kb.string = function(a, b, c) {
  return Nc(a) ? (H(b, ":"), c = th(a), x(c) && Dh.g(b, O(["" + V(c), "/"], 0)), H(b, Cd(a))) : Oc(a) ? (c = th(a), x(c) && Dh.g(b, O(["" + V(c), "/"], 0)), H(b, Cd(a))) : x((new Qd("\ufdd0:readably")).call(k, c)) ? H(b, Lh(a)) : H(b, a)
};
Pg.prototype.O = j;
Pg.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
Z.prototype.O = j;
Z.prototype.A = function(a, b, c) {
  return Y(b, If, "[", " ", "]", c, a)
};
Qf.prototype.O = j;
Qf.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
Xg.prototype.O = j;
Xg.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, If, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Kf.prototype.O = j;
Kf.prototype.A = function(a, b, c) {
  return Y(b, If, "[", " ", "]", c, a)
};
Dd.prototype.O = j;
Dd.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
jb.array = j;
kb.array = function(a, b, c) {
  return Y(b, If, "#<Array [", ", ", "]>", c, a)
};
jb["function"] = j;
kb["function"] = function(a, b) {
  return Dh.g(b, O(["#<", "" + V(a), ">"], 0))
};
Ed.prototype.O = j;
Ed.prototype.A = function(a, b) {
  return H(b, "()")
};
$.prototype.O = j;
$.prototype.A = function(a, b, c) {
  return Y(b, If, "[", " ", "]", c, a)
};
Date.prototype.O = j;
Date.prototype.A = function(a, b) {
  function c(a, b) {
    for(var c = "" + V(a);;) {
      if(lc(c) < b) {
        c = [V("0"), V(c)].join("")
      }else {
        return c
      }
    }
  }
  return Dh.g(b, O(['#inst "', "" + V(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
Md.prototype.O = j;
Md.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
Tg.prototype.O = j;
Tg.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
fg.prototype.O = j;
fg.prototype.A = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, If, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ah.prototype.O = j;
ah.prototype.A = function(a, b, c) {
  return Y(b, If, "(", " ", ")", c, a)
};
Kf.prototype.vb = j;
Kf.prototype.qb = function(a, b) {
  return Qc.b(a, b)
};
function Mh(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Eb = c;
  this.Fb = d;
  this.j = 2690809856;
  this.r = 2
}
r = Mh.prototype;
r.F = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
r.tb = function(a, b, c) {
  for(var d = I(this.Fb);;) {
    if(d) {
      var f = J(d), h = qc.c(f, 0, k), f = qc.c(f, 1, k);
      f.p ? f.p(h, a, b, c) : f.call(k, h, a, b, c);
      d = N(d)
    }else {
      return k
    }
  }
};
r.A = function(a, b, c) {
  H(b, "#<Atom: ");
  kb(this.state, b, c);
  return H(b, ">")
};
r.B = function(a, b) {
  return fe.g(Of(["#<Atom: "]), gb(this.state, b), O([">"], 0))
};
r.G = n("l");
r.Sa = n("state");
r.z = function(a, b) {
  return a === b
};
var Nh = k;
function Oh(a) {
  return new Mh(a, k, k, k)
}
function Ph(a, b) {
  var c = Lc(b) ? B.b(Db, b) : b, d = G.c(c, "\ufdd0:validator", k), c = G.c(c, "\ufdd0:meta", k);
  return new Mh(a, c, d, k)
}
function Qh(a, b) {
  var c = k;
  t(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Ph.call(this, a, c)
}
Qh.n = 1;
Qh.k = function(a) {
  var b = J(a), a = K(a);
  return Ph(b, a)
};
Qh.g = Ph;
Nh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Oh.call(this, a);
    default:
      return Qh.g(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nh.n = 1;
Nh.k = Qh.k;
Nh.a = Oh;
Nh.g = Qh.g;
var xg = Nh, vg = function(a, b) {
  var c = a.Eb;
  x(c) && !x(c.a ? c.a(b) : c.call(k, b)) && e(Error([V("Assert failed: "), V("Validator rejected reference state"), V("\n"), V(U.g(O([R(Q("\ufdd1'validate", "\ufdd1'new-value"), Db("\ufdd0:line", 6752, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  lb(a, c, b);
  return b
}, Rh, Sh = k;
function Th(a, b) {
  return vg(a, b.a ? b.a(a.state) : b.call(k, a.state))
}
function Uh(a, b, c) {
  return vg(a, b.b ? b.b(a.state, c) : b.call(k, a.state, c))
}
function Vh(a, b, c, d) {
  return vg(a, b.c ? b.c(a.state, c, d) : b.call(k, a.state, c, d))
}
function Wh(a, b, c, d, f) {
  return vg(a, b.p ? b.p(a.state, c, d, f) : b.call(k, a.state, c, d, f))
}
function Xh(a, b, c, d, f, h) {
  return vg(a, B.g(b, a.state, c, d, f, O([h], 0)))
}
function Yh(a, b, c, d, f, h) {
  var i = k;
  t(h) && (i = O(Array.prototype.slice.call(arguments, 5), 0));
  return Xh.call(this, a, b, c, d, f, i)
}
Yh.n = 5;
Yh.k = function(a) {
  var b = J(a), c = J(N(a)), d = J(N(N(a))), f = J(N(N(N(a)))), h = J(N(N(N(N(a))))), a = K(N(N(N(N(a)))));
  return Xh(b, c, d, f, h, a)
};
Yh.g = Xh;
Sh = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return Th.call(this, a, b);
    case 3:
      return Uh.call(this, a, b, c);
    case 4:
      return Vh.call(this, a, b, c, d);
    case 5:
      return Wh.call(this, a, b, c, d, f);
    default:
      return Yh.g(a, b, c, d, f, O(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sh.n = 5;
Sh.k = Yh.k;
Sh.b = Th;
Sh.c = Uh;
Sh.p = Vh;
Sh.J = Wh;
Sh.g = Yh.g;
Rh = Sh;
S = function(a) {
  return Ra(a)
};
function Zh(a) {
  if(a ? a.yb : a) {
    return a.yb(a)
  }
  var b;
  var c = Zh[s(a == k ? k : a)];
  c ? b = c : (c = Zh._) ? b = c : e(z("IEncodeJS.-clj->js", a));
  return b.call(k, a)
}
function $h(a) {
  if(a ? a.zb : a) {
    return a.zb(a)
  }
  var b;
  var c = $h[s(a == k ? k : a)];
  c ? b = c : (c = $h._) ? b = c : e(z("IEncodeJS.-key->js", a));
  return b.call(k, a)
}
Zh["null"] = p(k);
$h._ = function(a) {
  return x(function() {
    var b = Mc(a);
    return b || (b = "number" == typeof a) ? b : (b = Nc(a)) ? b : Oc(a)
  }()) ? Zh(a) : U.g(O([a], 0))
};
Zh._ = function(a) {
  if(Nc(a)) {
    return Cd(a)
  }
  if(Oc(a)) {
    return"" + V(a)
  }
  if(Gc(a)) {
    for(var b = {}, a = I(a);;) {
      if(a) {
        var c = J(a), d = qc.c(c, 0, k), c = qc.c(c, 1, k);
        b[$h(d)] = Zh(c);
        a = N(a)
      }else {
        break
      }
    }
    return b
  }
  return Fc(a) ? B.b(oa, ud.b(Zh, a)) : a
};
function ai(a) {
  return Zh(a)
}
var bi, ci = k;
function di(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var b;
  var c = bi[s(a == k ? k : a)];
  c ? b = c : (c = bi._) ? b = c : e(z("IEncodeClojure.-js->clj", a));
  return b.call(k, a)
}
function ei(a, b) {
  if(a ? a.xb : a) {
    return a.xb(a, b)
  }
  var c;
  var d = bi[s(a == k ? k : a)];
  d ? c = d : (d = bi._) ? c = d : e(z("IEncodeClojure.-js->clj", a));
  return c.call(k, a, b)
}
ci = function(a, b) {
  switch(arguments.length) {
    case 1:
      return di.call(this, a);
    case 2:
      return ei.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ci.a = di;
ci.b = ei;
bi = ci;
var fi = k, fi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bi.b(a, jg(["\ufdd0:keywordize-keys"], {"\ufdd0:keywordize-keys":m}));
    case 2:
      var c = Lc(b) ? B.b(Db, b) : b, c = G.c(c, "\ufdd0:keywordize-keys", k), d = x(c) ? vd : V;
      return function h(a) {
        var b;
        if(Lc(a)) {
          b = yh.a(ud.b(h, a))
        }else {
          if(Fc(a)) {
            b = rf(ua(a), ud.b(h, a))
          }else {
            if(x("array" == s(a))) {
              b = dd(ud.b(h, a))
            }else {
              if((a == k ? k : a.constructor) === Object) {
                b = ig;
                var c = [], w = function(a, b) {
                  return c.push(b)
                }, v;
                for(v in a) {
                  w.call(g, 0, v)
                }
                b = rf(b, function C(b) {
                  return new W(k, m, function() {
                    for(;;) {
                      var c = I(b);
                      return c ? (c = J(c), T(Of([d.a ? d.a(c) : d.call(k, c), h(a[c])]), C(K(b)))) : k
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
bi._ = fi;
function gi(a, b) {
  return bi.b(a, B.b(qh, b))
}
function hi(a, b) {
  var c = k;
  t(b) && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return gi.call(this, a, c)
}
hi.n = 1;
hi.k = function(a) {
  var b = J(a), a = K(a);
  return gi(b, a)
};
hi.g = gi;
xg.a(jg(["\ufdd0:parents", "\ufdd0:descendants", "\ufdd0:ancestors"], {"\ufdd0:parents":ig, "\ufdd0:descendants":ig, "\ufdd0:ancestors":ig}));
var ii, ji = k;
function ki(a) {
  return B.b(V, a)
}
function li(a, b) {
  return B.b(V, nf(a, b))
}
ji = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ki.call(this, a);
    case 2:
      return li.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ji.a = ki;
ji.b = li;
ii = ji;
var mi, ni = k;
function oi(a, b) {
  return dd(("" + V(a)).split(b))
}
function pi(a, b, c) {
  if(1 > c) {
    return dd(("" + V(a)).split(b))
  }
  for(var d = Mf;;) {
    if(xb.b(c, 1)) {
      return hc.b(d, a)
    }
    var f;
    f = b.exec(a);
    f = f == k ? k : 1 === lc(f) ? J(f) : dd(f);
    if(x(f)) {
      var h = f;
      f = a.indexOf(h);
      h = a.substring(f + lc(h));
      c -= 1;
      d = hc.b(d, a.substring(0, f));
      a = h
    }else {
      return hc.b(d, a)
    }
  }
}
ni = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return oi.call(this, a, b);
    case 3:
      return pi.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ni.b = oi;
ni.c = pi;
mi = ni;
function qi(a) {
  for(var b = a.length;;) {
    if(0 === b) {
      return""
    }
    var c = G.c(a, b - 1, k), d = xb.b(c, "\n"), c = d ? d : xb.b(c, "\r");
    if(x(c)) {
      b -= 1
    }else {
      return a.substring(0, b)
    }
  }
}
;function ri(a) {
  postMessage(Zh(jg(["\ufdd0:status", "\ufdd0:message"], {"\ufdd0:status":"running", "\ufdd0:message":a})))
}
function si(a) {
  return parseInt(a)
}
var ti = Ie.b("\ufdd0:acc", Oe.c(ra, function(a, b) {
  var c = Lc(a) ? B.b(Db, a) : a, d = G.c(c, "\ufdd0:acc", k), c = G.c(c, "\ufdd0:index", k);
  return jg(["\ufdd0:index", "\ufdd0:acc"], {"\ufdd0:index":c + 1, "\ufdd0:acc":hc.b(d, jg(["\ufdd0:index", "\ufdd0:value"], {"\ufdd0:index":c, "\ufdd0:value":b}))})
}, jg(["\ufdd0:index", "\ufdd0:acc"], {"\ufdd0:index":1, "\ufdd0:acc":Mf})));
function ui(a, b) {
  return sf.b(a, b)
}
function vi(a, b, c) {
  var d = mi.b(qi(c), /\n/), c = si(J(d)), b = ti.a ? ti.a(ui(b, K(d))) : ti.call(k, ui(b, K(d)));
  (d = xb.b(c, lc(b))) || e(Error([V("Assert failed: "), V(U.g(O(["\ufdd1'isCountValid"], 0)))].join("")));
  return ud.b(a, (new Qd("\ufdd0:rawCases")).call(k, jg(["\ufdd0:count", "\ufdd0:rawCases", "\ufdd0:isCountValid"], {"\ufdd0:count":c, "\ufdd0:rawCases":b, "\ufdd0:isCountValid":d})))
}
;function wi(a) {
  var b = Lc(a) ? B.b(Db, a) : a, a = G.c(b, "\ufdd0:result", k), b = G.c(b, "\ufdd0:caseNumber", k);
  return[V("Case #"), V(b), V(": "), V(a)].join("")
}
function xi(a, b, c) {
  a = a.a ? a.a(c) : a.call(k, c);
  b = ud.b(b, a);
  return B.b(V, ii.b("\n", ud.b(wi, b)))
}
;var yi = Oe.c(vi, function(a) {
  var a = Lc(a) ? B.b(Db, a) : a, b = G.c(a, "\ufdd0:value", k), a = G.c(a, "\ufdd0:index", k), c = qc.c(b, 0, k), b = qc.c(b, 1, k), d = ud.b(si, mi.b(c, /\s/)), c = qc.c(d, 0, k), f = qc.c(d, 1, k), d = qc.c(d, 2, k), b = dd(ud.b(si, mi.b(b, /\s/)));
  return jg(["\ufdd0:caseNumber", "\ufdd0:times-run", "\ufdd0:capacity", "\ufdd0:num-groups", "\ufdd0:groups"], {"\ufdd0:caseNumber":a, "\ufdd0:times-run":c, "\ufdd0:capacity":f, "\ufdd0:num-groups":d, "\ufdd0:groups":b})
}, 2);
function zi(a, b, c, d) {
  for(;;) {
    var f = G.c(a, d, k), f = b - f, h = d + 1 >= lc(a) ? 0 : d + 1, i = 0 > f;
    if(x(i ? i : 0 === c)) {
      return Of([b, d])
    }
    c -= 1;
    d = h;
    b = f
  }
}
function Ai(a) {
  var b = Lc(a) ? B.b(Db, a) : a;
  G.c(b, "\ufdd0:num-groups", k);
  var c = G.c(b, "\ufdd0:groups", k), a = G.c(b, "\ufdd0:capacity", k), d = G.c(b, "\ufdd0:times-run", k), b = G.c(b, "\ufdd0:caseNumber", k), f = Oe.p(zi, c, a, lc(c)), h = xg.a(ig);
  a: {
    var i = function(a) {
      var b = G.c(S(h), a, k);
      if(x(b)) {
        return b
      }
      b = B.b(f, a);
      Rh.p(h, uc, a, b);
      return b
    }, c = function(a) {
      var b = k;
      t(a) && (b = O(Array.prototype.slice.call(arguments, 0), 0));
      return i.call(this, b)
    };
    c.n = 0;
    c.k = function(a) {
      a = I(a);
      return i(a)
    };
    c.g = i;
    for(var l = d, q = d = 0, w = ig;;) {
      if(0 === l) {
        a = d;
        break a
      }
      var v;
      var A = w, C = q;
      v = l;
      var L = d, C = A.a ? A.a(C) : A.call(k, C);
      if(x(C)) {
        var A = (new Qd("\ufdd0:times-to-run")).call(k, C) - v, L = L - (new Qd("\ufdd0:money-made")).call(k, C), C = hd(v, A), P = hd(v, A);
        v = jg(["\ufdd0:loop-length", "\ufdd0:loop-money", "\ufdd0:loop-times", "\ufdd0:times-left", "\ufdd0:total-loop-money"], {"\ufdd0:loop-length":A, "\ufdd0:loop-money":L, "\ufdd0:loop-times":C, "\ufdd0:times-left":v - A * P, "\ufdd0:total-loop-money":L * C})
      }else {
        v = k
      }
      A = v;
      A = x(A) ? Ae.b(0, (new Qd("\ufdd0:loop-times")).call(k, v)) : A;
      x(A) ? (l = v, v = Lc(l) ? B.b(Db, l) : l, A = G.c(v, "\ufdd0:total-loop-money", k), l = G.c(v, "\ufdd0:times-left", k), G.c(v, "\ufdd0:loop-times", k), G.c(v, "\ufdd0:loop-money", k), G.c(v, "\ufdd0:loop-length", k), d = A + d) : (w = uc.c(w, q, jg(["\ufdd0:money-made", "\ufdd0:times-to-run"], {"\ufdd0:money-made":d, "\ufdd0:times-to-run":l})), v = c.a ? c.a(q) : c.call(k, q), q = qc.c(v, 0, k), v = qc.c(v, 1, k), d = a - q + d, q = v, l -= 1)
    }
    a = g
  }
  return jg(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":"" + V(a)})
}
ga("problems.theme_park.main.solve_for_input", function(a) {
  return"" + V(xi(yi, Ai, a))
});
var Bi = Oe.c(vi, function(a) {
  var a = Lc(a) ? B.b(Db, a) : a, b = G.c(a, "\ufdd0:value", k), a = G.c(a, "\ufdd0:index", k), c = qc.c(b, 0, k);
  qc.c(b, 1, k);
  b = qc.c(b, 2, k);
  c = parseInt(c);
  b = ti.a ? ti.a(ud.b(si, mi.b(b, /\s/))) : ti.call(k, ud.b(si, mi.b(b, /\s/)));
  return jg(["\ufdd0:caseNumber", "\ufdd0:credit", "\ufdd0:items"], {"\ufdd0:caseNumber":a, "\ufdd0:credit":c, "\ufdd0:items":b})
}, 3);
function Ci(a) {
  var a = Lc(a) ? B.b(Db, a) : a, b = G.c(a, "\ufdd0:items", k), c = G.c(a, "\ufdd0:credit", k), a = G.c(a, "\ufdd0:caseNumber", k), d = qf(function(a) {
    return(new Qd("\ufdd0:value")).call(k, a) < c
  }, b), f = c / 2, h = qf(function(a) {
    return(new Qd("\ufdd0:value")).call(k, a) > f
  }, d), i = qf(function(a) {
    return(new Qd("\ufdd0:value")).call(k, a) < f
  }, d), l = qf(function(a) {
    return xb.b((new Qd("\ufdd0:value")).call(k, a), f)
  }, d), b = xb.b(2, lc(l)) ? l : J(function w(a) {
    return new W(k, m, function() {
      for(var b = a;;) {
        var C = I(b);
        if(C) {
          var L = C, P = J(L);
          if(C = I(function(a, b) {
            return function Ba(a) {
              return new W(k, m, function() {
                for(var d = a;;) {
                  var f = I(d);
                  if(f) {
                    f = J(f);
                    if(xb.b(c, (new Qd("\ufdd0:value")).call(k, b) + (new Qd("\ufdd0:value")).call(k, f))) {
                      return T(Of([b, f]), Ba(K(d)))
                    }
                    d = K(d)
                  }else {
                    return k
                  }
                }
              }, k)
            }
          }(b, P, L, C, d, f, h, i, l)(i))) {
            return fe.b(C, w(K(b)))
          }
          b = K(b)
        }else {
          return k
        }
      }
    }, k)
  }(h)), b = ii.b(" ", Vc.a(ud.b("\ufdd0:index", b)));
  ri([V("Completed Case #"), V(a)].join(""));
  return jg(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":b})
}
ga("problems.store_credit.main.solve_for_input", function(a) {
  return"" + V(xi(Bi, Ci, a))
});
var Di = Oe.c(vi, function(a) {
  var a = Lc(a) ? B.b(Db, a) : a, b = G.c(a, "\ufdd0:value", k), a = G.c(a, "\ufdd0:index", k), b = qc.c(b, 0, k), c = ud.b(si, mi.b(b, /\s/)), b = qc.c(c, 0, k), c = qc.c(c, 1, k);
  return jg(["\ufdd0:caseNumber", "\ufdd0:num-snappers", "\ufdd0:times-snapped"], {"\ufdd0:caseNumber":a, "\ufdd0:num-snappers":b, "\ufdd0:times-snapped":c})
}, 1);
function Ei(a) {
  var a = Lc(a) ? B.b(Db, a) : a, b = G.c(a, "\ufdd0:times-snapped", k), c = G.c(a, "\ufdd0:num-snappers", k), a = G.c(a, "\ufdd0:caseNumber", k);
  a: {
    for(var d = 0;;) {
      if(0 === c) {
        c = d;
        break a
      }
      d = 2 * d + 1;
      c -= 1
    }
    c = g
  }
  b = (b + 1) / (c + 1);
  b = (c = "number" == typeof b) ? (c = !isNaN(b)) ? (c = Infinity !== b) ? parseFloat(b) === parseInt(b, 10) : c : c : c;
  b = x(b) ? "ON" : "OFF";
  ri([V("Completed Case #"), V(a)].join(""));
  return jg(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":a, "\ufdd0:result":b})
}
ga("problems.snapper_chain.main.solve_for_input", function(a) {
  return"" + V(xi(Di, Ei, a))
});
self.addEventListener("message", function(a) {
  var b = hi(a.data), a = b.a ? b.a("problemName") : b.call(k, "problemName"), b = b.a ? b.a("input") : b.call(k, "input"), a = self.problems[a].main.solve_for_input;
  return self.postMessage(ai(jg(["\ufdd0:status", "\ufdd0:message"], {"\ufdd0:status":"completed", "\ufdd0:message":a.a ? a.a(b) : a.call(k, b)})))
});
var Fi = Oe.c(vi, function(a) {
  var b = Lc(a) ? B.b(Db, a) : a, a = G.c(b, "\ufdd0:value", k), b = G.c(b, "\ufdd0:index", k), a = qc.c(a, 0, k);
  return jg(["\ufdd0:caseNumber", "\ufdd0:words"], {"\ufdd0:caseNumber":b, "\ufdd0:words":mi.b(a, /\s/)})
}, 1);
function Gi(a) {
  var b = Lc(a) ? B.b(Db, a) : a, a = G.c(b, "\ufdd0:words", k), b = G.c(b, "\ufdd0:caseNumber", k), a = ii.b(" ", Fd(a));
  return jg(["\ufdd0:caseNumber", "\ufdd0:result"], {"\ufdd0:caseNumber":b, "\ufdd0:result":a})
}
ga("problems.reverse_words.main.solve_for_input", function(a) {
  return"" + V(xi(Fi, Gi, a))
});
