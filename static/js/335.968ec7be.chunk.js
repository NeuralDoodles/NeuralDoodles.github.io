(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[335],{2335:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1087),r=n(6842),s=n(7892),a=n.n(s),u=n(184),o=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post_visuals",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("center",{id:e.id,children:(0,u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title,width:e.width})})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},c=[{title:"Investing 101: What? How? Why?",id:"investing-i",subtitle:"",image:"/images/blogs/investing-i.jpeg",date:"2023-06-16",desc:"",link:"/blogs/investing-i",width:"50%"},{title:"How to write a paper I: The Introduction and Related Works",id:"paper-i",subtitle:"",image:"/images/blogs/paper-intro.jpeg",date:"2023-06-07",desc:"",link:"/blogs/paper-i",width:"50%"},{title:"How to write a paper II: Methods and Observations",id:"paper-ii",subtitle:"",image:"/images/visuals/",date:"2023-06-08",desc:"",link:"/blogs/paper-ii",width:"100%"}],h=function(){return(0,u.jsx)(r.Z,{title:"Blogs",description:"My attempts at writing stuff",children:(0,u.jsxs)("article",{className:"post",id:"blogs",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(i.rU,{to:"/blogs",children:"Blogs"})}),(0,u.jsx)("p",{children:"My attempts at writing stuff"})]})}),c.map((function(t){return(0,u.jsx)(o,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",u="day",o="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:u,D:l,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=m;var w=function(t){return t instanceof b},D=function t(e,n,i){var r;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,r=u}return!i&&r&&(M=r),r||!i&&M},S=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},x=v;x.l=D,x.i=w,x.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var p=m.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match($);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return x},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!x.u(e)||e,h=x.p(t),f=function(t,e){var r=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},$=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case c:return i?f(1,m):f(0,m+1);case o:var M=this.$locale().weekStart||0,y=(g<M?g+7:g)-M;return f(i?p-y:p+(6-y),m);case u:case l:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case r:return $(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=x.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[u]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===d){var g=this.clone().set(l,1);g.$d[f]($),g.init(),this.$d=g.set(l,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[x.p(t)]()},p.add=function(i,h){var l,f=this;i=Number(i);var $=x.p(h),g=function(t){var e=S(f);return x.w(e.date(e.date()+Math.round(t*i)),f)};if($===c)return this.set(c,this.$M+i);if($===d)return this.set(d,this.$y+i);if($===u)return g(1);if($===o)return g(7);var m=(l={},l[s]=e,l[a]=n,l[r]=t,l)[$]||1,p=this.$d.getTime()+i*m;return x.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return x.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:x.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:x.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(t,e){return e||$[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,l,f){var $,g=x.p(l),m=S(i),p=(m.utcOffset()-this.utcOffset())*e,v=this-m,M=x.m(this,m);return M=($={},$[d]=M/12,$[c]=M,$[h]=M/3,$[o]=(v-p)/6048e5,$[u]=(v-p)/864e5,$[a]=v/n,$[s]=v/e,$[r]=v/t,$)[g]||v,f?M:x.a(M)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return x.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),j=b.prototype;return S.prototype=j,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",u],["$M",c],["$y",d],["$D",l]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,b,S),t.$i=!0),S},S.locale=D,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=y[M],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=335.968ec7be.chunk.js.map