!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,u,a=[],i=!0,o=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){o=!0,u=c}finally{try{i||null==e.return||e.return()}finally{if(o)throw u}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.da7328dc.js","./index-legacy.68b4cd46.js","./index-legacy.5a7ed7b0.js","./Layout-legacy.b55d2a6e.js"],(function(r){"use strict";var e,n,u,a,i,o,c,l,s,f,y,d,p,b,g,m,O,E,x;return{setters:[function(t){e=t.q,n=t.r,u=t.s,a=t.t,i=t.v,o=t.w,c=t.x,l=t.y,s=t.z,f=t.A,y=t.C,d=t.D,p=t.E},function(t){b=t.g,g=t.h,m=t.j},function(t){O=t.bF,E=t.bG},function(t){x=t.I}],execute:function(){var A=r("O",function(t){return t[t.UNKNOWN=0]="UNKNOWN",t[t.FOLDER=1]="FOLDER",t[t.VIDEO=2]="VIDEO",t[t.AUDIO=3]="AUDIO",t[t.TEXT=4]="TEXT",t[t.IMAGE=5]="IMAGE",t}(A||{})),I={"dmg,ipa,plist,tipa":o,"exe,msi":c,"zip,gz,rar,7z,tar,jar,xz":l,apk:x,db:b,md:s,epub:g,iso:m,m3u8:i,"doc,docx":f,"xls,xlsx":y,"ppt,pptx":d,pdf:p};r("g",(function(r){return function(r,o){if(r!==A.FOLDER)for(var c=0,l=Object.entries(I);c<l.length;c++){var s=t(l[c],2),f=s[0],y=s[1];if(f.split(",").includes(o.toLowerCase()))return y}switch(r){case A.FOLDER:return E;case A.VIDEO:return i;case A.AUDIO:return a;case A.TEXT:return u;case A.IMAGE:return n;default:return e}}(r.type,O(r.name))}))}}}))}();