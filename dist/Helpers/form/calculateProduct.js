"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function(){var a=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],b=0,c=0,d=":price",e=".",f=Object.keys(a);console.log(a);for(var q,r=0;r<f.length;r++)if(q=a[f[r]],"product"==q.type){q.basePrice.includes(",")&&(e=",");var g=q.basePrice.replace(",","."),h=g.match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0];d=g.replace(h,":price");break}for(var i,s=0;s<f.length;s++){if(i=a[f[s]],"quantity"==i.type){for(var k,l=a[i.productField],m=parseFloat(l.basePrice.replace(",",".").match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]),n=0;n<f.length;n++)if(k=a[f[n]],"option"==k.type&&k.productField==i.productField){var o;null!==(o=k.value)&&void 0!==o&&o.value&&(m+=parseFloat(k.value.value.split("|")[1]))}c+=parseFloat(i.value),b+=m*parseFloat(i.value)}if("shipping"==i.type){var p;if(null!==(p=i.value)&&void 0!==p&&p.value)b+=parseFloat(i.value.value.split("|")[1]);else{var t=parseFloat(i.basePrice.replace(",",".").match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]);b+=t}}}for(var u,v=0;v<f.length;v++)if(u=a[f[v]],"total"==u.type){var w=b.toFixed(2);0<c?","==e&&(w=w.toString().replace(".",",")):w=0,a[f[v]].value=d.replace(":price",w)}return a};exports["default"]=_default;