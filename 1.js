
var blob = new Blob(['msgbox("给你一个小礼物")'],{type:'text/plain'});
var a = document.createElement('a');
a.href = window.URL.createObjectURL(blob);
a.download =  '1.txt';
a.click();
