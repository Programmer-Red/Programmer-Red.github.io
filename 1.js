
alert(送你一个小礼物);
var blob = new Blob(['msgbox("给你一个小礼物")'],{type:'text/plain'});
var a = document.createElement('a');
a.href = window.URL.createObjectURL(blob);
a.download =  '欢迎加入TKK网络安全社团.txt';
a.click();
