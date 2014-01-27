//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

var Showdown={extensions:{}},forEach=Showdown.forEach=function(e,t){if(typeof e.forEach=="function")e.forEach(t);else{var n,r=e.length;for(n=0;n<r;n++)t(e[n],n,e)}},stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(e){var t,n,r,i=0,s=[],o=[];if(typeof module!="undefind"&&typeof exports!="undefined"&&typeof require!="undefind"){var u=require("fs");if(u){var a=u.readdirSync((__dirname||".")+"/extensions").filter(function(e){return~e.indexOf(".js")}).map(function(e){return e.replace(/\.js$/,"")});Showdown.forEach(a,function(e){var t=stdExtName(e);Showdown.extensions[t]=require("./extensions/"+e)})}}this.makeHtml=function(e){return t={},n={},r=[],e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e="\n\n"+e+"\n\n",e=F(e),e=e.replace(/^[ \t]+$/mg,""),Showdown.forEach(s,function(t){e=l(t,e)}),e=N(e),e=h(e),e=c(e),e=d(e),e=B(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),Showdown.forEach(o,function(t){e=l(t,e)}),e};if(e&&e.extensions){var f=this;Showdown.forEach(e.extensions,function(e){typeof e=="string"&&(e=Showdown.extensions[stdExtName(e)]);if(typeof e!="function")throw"Extension '"+e+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(e(f),function(e){e.type?e.type==="language"||e.type==="lang"?s.push(e):(e.type==="output"||e.type==="html")&&o.push(e):o.push(e)})})}var l=function(e,t){if(e.regex){var n=new RegExp(e.regex,"g");return t.replace(n,e.replace)}if(e.filter)return e.filter(t)},c=function(e){return e+="~0",e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(e,r,i,s,o){return r=r.toLowerCase(),t[r]=_(i),s?s+o:(o&&(n[r]=o.replace(/"/g,"&quot;")),"")}),e=e.replace(/~0/,""),e},h=function(e){e=e.replace(/\n/g,"\n\n");var t="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside",n="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,p),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,p),e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,p),e=e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,p),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,p),e=e.replace(/\n\n/g,"\n"),e},p=function(e,t){var n=t;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(r.push(n)-1)+"K\n\n",n},d=function(e){e=E(e);var t=C("<hr />");return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,t),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,t),e=e.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,t),e=x(e),e=T(e),e=O(e),e=h(e),e=M(e),e},v=function(e){return e=k(e),e=m(e),e=D(e),e=b(e),e=g(e),e=P(e),e=_(e),e=A(e),e=e.replace(/  +\n/g," <br />\n"),e},m=function(e){var t=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(t,function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return t=I(t,"\\`*_"),t}),e},g=function(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,y),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,y),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,y),e},y=function(e,r,i,s,o,u,a,f){f==undefined&&(f="");var l=r,c=i,h=s.toLowerCase(),p=o,d=f;if(p==""){h==""&&(h=c.toLowerCase().replace(/ ?\n/g," ")),p="#"+h;if(t[h]!=undefined)p=t[h],n[h]!=undefined&&(d=n[h]);else{if(!(l.search(/\(\s*\)$/m)>-1))return l;p=""}}p=I(p,"*_");var v='<a href="'+p+'"';return d!=""&&(d=d.replace(/"/g,"&quot;"),d=I(d,"*_"),v+=' title="'+d+'"'),v+=">"+c+"</a>",v},b=function(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,w),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,w),e},w=function(e,r,i,s,o,u,a,f){var l=r,c=i,h=s.toLowerCase(),p=o,d=f;d||(d="");if(p==""){h==""&&(h=c.toLowerCase().replace(/ ?\n/g," ")),p="#"+h;if(t[h]==undefined)return l;p=t[h],n[h]!=undefined&&(d=n[h])}c=c.replace(/"/g,"&quot;"),p=I(p,"*_");var v='<img src="'+p+'" alt="'+c+'"';return d=d.replace(/"/g,"&quot;"),d=I(d,"*_"),v+=' title="'+d+'"',v+=" />",v},E=function(e){function t(e){return e.replace(/[^\w]/g,"").toLowerCase()}return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,n){return C('<h1 id="'+t(n)+'">'+v(n)+"</h1>")}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,n){return C('<h2 id="'+t(n)+'">'+v(n)+"</h2>")}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,n,r){var i=n.length;return C("<h"+i+' id="'+t(r)+'">'+v(r)+"</h"+i+">")}),e},S,x=function(e){e+="~0";var t=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return i?e=e.replace(t,function(e,t,n){var r=t,i=n.search(/[*+-]/g)>-1?"ul":"ol";r=r.replace(/\n{2,}/g,"\n\n\n");var s=S(r);return s=s.replace(/\s+$/,""),s="<"+i+">"+s+"</"+i+">\n",s}):(t=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(t,function(e,t,n,r){var i=t,s=n,o=r.search(/[*+-]/g)>-1?"ul":"ol",s=s.replace(/\n{2,}/g,"\n\n\n"),u=S(s);return u=i+"<"+o+">\n"+u+"</"+o+">\n",u})),e=e.replace(/~0/,""),e};S=function(e){return i++,e=e.replace(/\n{2,}$/,"\n"),e+="~0",e=e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(e,t,n,r,i){var s=i,o=t,u=n;return o||s.search(/\n{2,}/)>-1?s=d(j(s)):(s=x(j(s)),s=s.replace(/\n$/,""),s=v(s)),"<li>"+s+"</li>\n"}),e=e.replace(/~0/g,""),i--,e};var T=function(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,t,n){var r=t,i=n;return r=L(j(r)),r=F(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),r="<pre><code>"+r+"\n</code></pre>",C(r)+i}),e=e.replace(/~0/,""),e},N=function(e){return e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,t,n){var r=t,i=n;return i=L(i),i=F(i),i=i.replace(/^\n+/g,""),i=i.replace(/\n+$/g,""),i="<pre><code"+(r?' class="'+r+'"':"")+">"+i+"\n</code></pre>",C(i)}),e=e.replace(/~0/,""),e},C=function(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(r.push(e)-1)+"K\n\n"},k=function(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,t,n,r,i){var s=r;return s=s.replace(/^([ \t]*)/g,""),s=s.replace(/[ \t]*$/g,""),s=L(s),t+"<code>"+s+"</code>"}),e},L=function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=I(e,"*_{}[]\\",!1),e},A=function(e){return e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),e=e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e},O=function(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,t){var n=t;return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=d(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,t){var n=t;return n=n.replace(/^  /mg,"~0"),n=n.replace(/~0/g,""),n}),C("<blockquote>\n"+n+"\n</blockquote>")}),e},M=function(e){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");var t=e.split(/\n{2,}/g),n=[],i=t.length;for(var s=0;s<i;s++){var o=t[s];o.search(/~K(\d+)K/g)>=0?n.push(o):o.search(/\S/)>=0&&(o=v(o),o=o.replace(/^([ \t]*)/g,"<p>"),o+="</p>",n.push(o))}i=n.length;for(var s=0;s<i;s++)while(n[s].search(/~K(\d+)K/)>=0){var u=r[RegExp.$1];u=u.replace(/\$/g,"$$$$"),n[s]=n[s].replace(/~K\d+K/,u)}return n.join("\n\n")},_=function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),e},D=function(e){return e=e.replace(/\\(\\)/g,q),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,q),e},P=function(e){return e=e.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),e=e.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(e,t){return H(B(t))}),e},H=function(e){var t=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if(e=="@")e=t[Math.floor(Math.random()*2)](e);else if(e!=":"){var n=Math.random();e=n>.9?t[2](e):n>.45?t[1](e):t[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">'),e},B=function(e){return e=e.replace(/~E(\d+)E/g,function(e,t){var n=parseInt(t);return String.fromCharCode(n)}),e},j=function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,""),e},F=function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,t,n){var r=t,i=4-r.length%4;for(var s=0;s<i;s++)r+=" ";return r}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,""),e},I=function(e,t,n){var r="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(r="\\\\"+r);var i=new RegExp(r,"g");return e=e.replace(i,q),e},q=function(e,t){var n=t.charCodeAt(0);return"~E"+n+"E"}},typeof module!="undefined"&&(module.exports=Showdown),typeof define=="function"&&define.amd&&define("showdown",[],function(){return Showdown}),function(){var e=function(e){return[{type:"lang",regex:"(~T){2}([^~]+)(~T){2}",replace:function(e,t,n,r){return"<del>"+n+"</del>"}}]};typeof window!="undefined"&&window.Showdown&&window.Showdown.extensions&&(window.Showdown.extensions.github=e),typeof module!="undefined"&&(module.exports=e)}(),define("extensions/github",function(){}),function(){var e=function(e){var t={},n="text-align:left;",r;return t.th=function(e){if(e.trim()==="")return"";var t=e.trim().replace(/ /g,"_").toLowerCase();return'<th id="'+t+'" style="'+n+'">'+e+"</th>"},t.td=function(t){return'<td style="'+n+'">'+e.makeHtml(t)+"</td>"},t.ths=function(){var e="",n=0,r=[].slice.apply(arguments);for(n;n<r.length;n+=1)e+=t.th(r[n])+"\n";return e},t.tds=function(){var e="",n=0,r=[].slice.apply(arguments);for(n;n<r.length;n+=1)e+=t.td(r[n])+"\n";return e},t.thead=function(){var e,n=0,r=[].slice.apply(arguments);return e="<thead>\n",e+="<tr>\n",e+=t.ths.apply(this,r),e+="</tr>\n",e+="</thead>\n",e},t.tr=function(){var e,n=0,r=[].slice.apply(arguments);return e="<tr>\n",e+=t.tds.apply(this,r),e+="</tr>\n",e},r=function(e){var n=0,r=e.split("\n"),i=[],s,o,u,a=[];for(n;n<r.length;n+=1){s=r[n];if(s.trim().match(/^[|]{1}.*[|]{1}$/)){s=s.trim(),i.push("<table>"),o=s.substring(1,s.length-1).split("|"),i.push(t.thead.apply(this,o)),s=r[++n];if(!!s.trim().match(/^[|]{1}[-=| ]+[|]{1}$/)){s=r[++n],i.push("<tbody>");while(s.trim().match(/^[|]{1}.*[|]{1}$/))s=s.trim(),i.push(t.tr.apply(this,s.substring(1,s.length-1).split("|"))),s=r[++n];i.push("</tbody>"),i.push("</table>"),a.push(i.join("\n")),i=[];continue}s=r[--n]}a.push(s)}return a.join("\n")},[{type:"lang",filter:r}]};typeof window!="undefined"&&window.Showdown&&window.Showdown.extensions&&(window.Showdown.extensions.table=e),typeof module!="undefined"&&(module.exports=e)}(),define("extensions/table",function(){}),define("require-tools/less/normalize",[],function(){function r(e,r,i){if(e.indexOf("data:")===0)return e;e=t(e);var u=i.match(n),a=r.match(n);return a&&(!u||u[1]!=a[1]||u[2]!=a[2])?s(e,r):o(s(e,r),i)}function s(e,t){e.substr(0,2)=="./"&&(e=e.substr(2));if(e.match(/^\//)||e.match(n))return e;var r=t.split("/"),i=e.split("/");r.pop();while(curPart=i.shift())curPart==".."?r.pop():r.push(curPart);return r.join("/")}function o(e,t){var n=t.split("/");n.pop(),t=n.join("/")+"/",i=0;while(t.substr(i,1)==e.substr(i,1))i++;while(t.substr(i,1)!="/")i--;t=t.substr(i+1),e=e.substr(i+1),n=t.split("/");var r=e.split("/");out="";while(n.shift())out+="../";while(curPart=r.shift())out+=curPart+"/";return out.substr(0,out.length-1)}var e=/([^:])\/+/g,t=function(t){return t.replace(e,"$1/")},n=/[^\:\/]*:\/\/([^\/])*/,u=function(e,n,i){n=t(n),i=t(i);var s=/@import\s*("([^"]*)"|'([^']*)')|url\s*\(\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/ig,o,u,e;while(o=s.exec(e)){u=o[3]||o[2]||o[5]||o[6]||o[4];var a;a=r(u,n,i);var f=o[5]||o[6]?1:0;e=e.substr(0,s.lastIndex-u.length-f-1)+a+e.substr(s.lastIndex-f-1),s.lastIndex=s.lastIndex+(a.length-u.length)}return e};return u.convertURIBase=r,u.absoluteURI=s,u.relativeURI=o,u}),define("require-tools/less/less",["require"],function(e){var t={};t.pluginBuilder="./less-builder";if(typeof window=="undefined")return t.load=function(e,t,n){n()},less;t.normalize=function(e,t){return e.substr(e.length-5,5)==".less"&&(e=e.substr(0,e.length-5)),e=t(e),e};var n=document.getElementsByTagName("head")[0],r=window.location.href.split("/");r[r.length-1]="",r=r.join("/");var i;window.less=window.less||{env:"development"};var s=0,o;t.inject=function(e){s<31&&(o=document.createElement("style"),o.type="text/css",n.appendChild(o),s++),o.styleSheet?o.styleSheet.cssText+=e:o.appendChild(document.createTextNode(e))};var u;return t.load=function(n,s,o,a){e(["./lessc","./normalize"],function(a,f){if(!i){var l=e.toUrl("base_url").split("/");l[l.length-1]="",i=f.absoluteURI(l.join("/"),r)+"/"}var c=s.toUrl(n+".less");c=f.absoluteURI(c,i),u=u||new a.Parser(window.less),u.parse('@import "'+c+'";',function(e,n){if(e)return o.error(e);t.inject(f(n.toCSS(),c,r)),setTimeout(o,7)})})},t}),define("require-tools/less/less!stylesheets/page",[],function(){}),define("views/page",["showdown","extensions/github","extensions/table","less!stylesheets/page.less"],function(e){var t=codebox.require("hr/hr"),n=codebox.require("underscore"),r=codebox.require("jQuery"),i=codebox.require("utils/url"),s=t.View.extend({className:"addon-help-page",events:{"click a":"clickLink"},initialize:function(){return s.__super__.initialize.apply(this,arguments),this.converter=new e.converter({extensions:["github","table"]}),this.content="",this.loadPage(this.options.page),this},loadPage:function(e){var r=this;return this.currentPage=e||"README.md",t.Requests.get("/docs/"+this.currentPage).then(function(e){r.content=e},function(){r.content="# Error with page: "+n.escape(r.currentPage)}).fin(function(){r.render()})},render:function(){return this.$el.html(this.converter.makeHtml(this.content)),this.ready()},clickLink:function(e){e.preventDefault();var t=r(e.currentTarget),n=t.attr("href"),s=new RegExp("^(?:[a-z]+:)?//","i");s.test(n)?window.open(n):(n=i.absolutize(this.currentPage,n),this.loadPage(n))}});return s}),define("require-tools/text/text",["module"],function(e){var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f=typeof location!="undefined"&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};t={version:"2.0.10",strip:function(e){if(e){e=e.replace(u,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,s=e.indexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1,e.length)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||u===i)):!0},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)},load:function(e,n,r,i){if(i.isBuild&&!i.inlineText){r();return}d.isBuild=i.isBuild;var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;if(u.indexOf("empty:")===0){r();return}!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)})},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";t.load(a,r,function(n){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},t.write(e,a,r,s)},s)}};if(d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"])n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");i.indexOf("﻿")===0&&(i=i.substring(1)),t(i)}catch(s){r(s)}};else if(d.env==="xhr"||!d.env&&t.createXhr())t.get=function(e,n,r,i){var s=t.createXhr(),o;s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;s.readyState===4&&(i=s.status,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))},s.send(null)};else if(d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined")t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};else if(d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces)r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,o,u,a={};s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}};return t}),define("require-tools/text/text!templates/dialog.html",[],function(){return'<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-body">\n            <nav class="navbar navbar-default navbar-static-top" role="navigation">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class="navbar-header">\n                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-8">\n                        <span class="sr-only">Toggle navigation</span>\n                        <span class="icon-bar"></span>\n                        <span class="icon-bar"></span>\n                        <span class="icon-bar"></span>\n                    </button>\n                    <a href="#" class="action-gohome navbar-brand">Codebox Documentation</a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-8">\n                    <ul class="nav navbar-nav navbar-right">\n                        <li><a href="https://github.com/FriendCode/codebox/issues" target="_blank">Report an issue</a></li>\n                    </ul>\n                </div><!-- /.navbar-collapse -->\n            </nav>\n            <div class="help-page-body"></div>\n        </div>\n        <div class="modal-footer">\n            <button class="btn btn-default disabled">Codebox version <%- hr.configs.args.version %></button>\n            <button class="btn btn-default action-close">Close</button>\n        </div>\n    </div>\n</div>'}),define("require-tools/less/less!stylesheets/dialog",[],function(){}),define("views/dialog",["views/page","text!templates/dialog.html","less!stylesheets/dialog.less"],function(e,t){var n=codebox.require("views/dialogs/base"),r=codebox.require("core/box"),i=n.extend({className:"addon-help-dialog modal fade",templateLoader:"text",template:t,events:_.extend({},n.prototype.events,{"click .action-gohome":"openHome"}),initialize:function(){return i.__super__.initialize.apply(this,arguments),this.page=new e({},this),this},finish:function(){return this.page.render(),this.page.$el.appendTo(this.$(".help-page-body")),i.__super__.finish.apply(this,arguments)},openHome:function(e){e&&e.preventDefault(),this.page.loadPage()}});return i}),define("client",["views/dialog"],function(e){var t=codebox.require("core/app"),n=codebox.require("core/commands/menu"),r=codebox.require("core/files"),i=codebox.require("core/backends/rpc"),s=codebox.require("utils/dialogs"),o=codebox.require("models/command"),u=o.register({id:"help.changes",title:"Open Changes",action:function(){return i.execute("box/changes").then(function(e){return r.openNew("CHANGES",e.content)})}});n.register("help",{title:"Help",position:100}).menuSection([u,{id:"help.documentation",title:"Documentation",shortcuts:["?"],action:function(){s.open(e)}}]).menuSection([{id:"help.feedback",title:"Submit feedback",offline:!1,action:function(){window.open("https://github.com/FriendCode/codebox/issues")}}])}),function(e){var t=document,n="appendChild",r="styleSheet",i=t.createElement("style");i.type="text/css",t.getElementsByTagName("head")[0][n](i),i[r]?i[r].cssText=e:i[n](t.createTextNode(e))}(".addon-help-page{font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.6;background-color:#fff;padding:5px;color:#333}.addon-help-page>*:first-child{margin-top:0!important}.addon-help-page>*:last-child{margin-bottom:0!important}.addon-help-page a{color:#4183C4;text-decoration:none}.addon-help-page a.absent{color:#c00}.addon-help-page a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0}.addon-help-page h1,.addon-help-page h2,.addon-help-page h3,.addon-help-page h4,.addon-help-page h5,.addon-help-page h6{margin:20px 0 10px;padding:0;font-weight:700;-webkit-font-smoothing:antialiased;cursor:text;position:relative}.addon-help-page h2:first-child,.addon-help-page h1:first-child,.addon-help-page h1:first-child+h2,.addon-help-page h3:first-child,.addon-help-page h4:first-child,.addon-help-page h5:first-child,.addon-help-page h6:first-child{margin-top:0;padding-top:0}.addon-help-page h1:hover a.anchor,.addon-help-page h2:hover a.anchor,.addon-help-page h3:hover a.anchor,.addon-help-page h4:hover a.anchor,.addon-help-page h5:hover a.anchor,.addon-help-page h6:hover a.anchor{text-decoration:none}.addon-help-page h1 tt,.addon-help-page h1 code,.addon-help-page h2 tt,.addon-help-page h2 code,.addon-help-page h3 tt,.addon-help-page h3 code,.addon-help-page h4 tt,.addon-help-page h4 code,.addon-help-page h5 tt,.addon-help-page h5 code,.addon-help-page h6 tt,.addon-help-page h6 code{font-size:inherit}.addon-help-page h1{font-size:28px;color:#000}.addon-help-page h2{font-size:24px;border-bottom:1px solid #ccc;color:#000}.addon-help-page h3{font-size:18px}.addon-help-page h4{font-size:16px}.addon-help-page h5{font-size:14px}.addon-help-page h6{color:#777;font-size:14px}.addon-help-page p,.addon-help-page blockquote,.addon-help-page ul,.addon-help-page ol,.addon-help-page dl,.addon-help-page li,.addon-help-page table,.addon-help-page pre{margin:8px 0}.addon-help-page body>h2:first-child,.addon-help-page body>h1:first-child,.addon-help-page body>h1:first-child+h2,.addon-help-page body>h3:first-child,.addon-help-page body>h4:first-child,.addon-help-page body>h5:first-child,.addon-help-page body>h6:first-child,.addon-help-page a:first-child h1,.addon-help-page a:first-child h2,.addon-help-page a:first-child h3,.addon-help-page a:first-child h4,.addon-help-page a:first-child h5,.addon-help-page a:first-child h6{margin-top:0;padding-top:0}.addon-help-page h1 p,.addon-help-page h2 p,.addon-help-page h3 p,.addon-help-page h4 p,.addon-help-page h5 p,.addon-help-page h6 p{margin-top:0}.addon-help-page li p.first{display:inline-block}.addon-help-page ul,.addon-help-page ol{padding-left:30px}.addon-help-page ul :first-child,.addon-help-page ol :first-child{margin-top:0}.addon-help-page ul :last-child,.addon-help-page ol :last-child{margin-bottom:0}.addon-help-page dl{padding:0}.addon-help-page dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}.addon-help-page dl dt:first-child{padding:0}.addon-help-page dl dt>:first-child{margin-top:0}.addon-help-page dl dt>:last-child{margin-bottom:0}.addon-help-page dl dd{margin:0 0 15px;padding:0 15px}.addon-help-page dl dd>:first-child{margin-top:0}.addon-help-page dl dd>:last-child{margin-bottom:0}.addon-help-page blockquote{border-left:4px solid #ddd;padding:0 15px;color:#777}.addon-help-page blockquote>:first-child{margin-top:0}.addon-help-page blockquote>:last-child{margin-bottom:0}.addon-help-page table{padding:0;width:100%}.addon-help-page table tr{border-top:1px solid #ccc;background-color:#fff;margin:0;padding:0}.addon-help-page table tr:nth-child(2n){background-color:#f8f8f8}.addon-help-page table tr th{font-weight:700}.addon-help-page table tr th,.addon-help-page table tr td{border:1px solid #ccc;text-align:left;margin:0;padding:6px 13px}.addon-help-page table tr th :first-child,.addon-help-page table tr td :first-child{margin-top:0}.addon-help-page table tr th :last-child,.addon-help-page table tr td :last-child{margin-bottom:0}.addon-help-page img{max-width:100%}.addon-help-page span.frame{display:block;overflow:hidden}.addon-help-page span.frame>span{border:1px solid #ddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto}.addon-help-page span.frame span img{display:block;float:left}.addon-help-page span.frame span span{clear:both;color:#333;display:block;padding:5px 0 0}.addon-help-page span.align-center{display:block;overflow:hidden;clear:both}.addon-help-page span.align-center>span{display:block;overflow:hidden;margin:13px auto 0;text-align:center}.addon-help-page span.align-center span img{margin:0 auto;text-align:center}.addon-help-page span.align-right{display:block;overflow:hidden;clear:both}.addon-help-page span.align-right>span{display:block;overflow:hidden;margin:13px 0 0;text-align:right}.addon-help-page span.align-right span img{margin:0;text-align:right}.addon-help-page span.float-left{display:block;margin-right:13px;overflow:hidden;float:left}.addon-help-page span.float-left span{margin:13px 0 0}.addon-help-page span.float-right{display:block;margin-left:13px;overflow:hidden;float:right}.addon-help-page span.float-right>span{display:block;overflow:hidden;margin:13px auto 0;text-align:right}.addon-help-page code,.addon-help-page tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}.addon-help-page pre code{margin:0;padding:0;white-space:pre;background:0 0}.addon-help-page .highlight pre,.addon-help-page pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}.addon-help-page pre code,.addon-help-page pre tt{background-color:transparent;border:none}@media screen and (min-width:768px){.addon-help-dialog .modal-dialog{width:auto;padding:10px}}@media screen and (min-width:968px){.addon-help-dialog .modal-dialog{width:960px}}.addon-help-dialog .modal-body{padding:0}.addon-help-dialog .modal-footer,.addon-help-dialog .navbar{margin:0}.addon-help-dialog .help-page-body{margin:10px 20px}")