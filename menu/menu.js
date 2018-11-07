function min(a,b){return(a<b?a:b);}
function addt(e,t){var n=document.createElement(t);e.appendChild(n);return n;}
function setlink(e,d){e.href=(d.hasOwnProperty("link")?d.link:"#");e.innerHTML=d.ime;}
function setmenu(e,d){var f=e.children.length;for(var j=0;j<min(f,d.menu.length);j++) bm(e.children[j], d.menu[j]);for(var k=f-1;k>=j;k--) e.children[k].remove();for(var k=j;k<d.menu.length;k++){var z=addt(e,"li");bm(z,d.menu[k]);}}
function bm(e,d){var l=0,m=0;for(var i=0;i<e.children.length;i++){switch(e.children[i].tagName.toLowerCase()){case "a":setlink(e.children[i],d);l=1;break;case "ul":(d.hasOwnProperty("menu")?setmenu(e.children[i],d):e.children[i].remove());m=1;break;}}if(!l && d.hasOwnProperty("ime")){var a=addt(e,"a");setlink(a,d);}if(!m && d.hasOwnProperty("menu")){var ul=addt(e,"ul");setmenu(ul,d);}}
function loadmenu(rootmenu){if(typeof(rootmenu)=="undefined")return;var xml=(window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"));xml.onreadystatechange=function(){if(xml.readyState!=4)return;if(xml.status==200){bm(rootmenu,JSON.parse(xml.responseText));}};xml.open("GET","menu.xml",true);xml.send();}
var wol=(typeof(window.onload)=="function"?window.onload:function(){});
window.onload=function(){wol();loadmenu();}
