var url = "9438.github.io";  //要打开的网页地址
var features = "height=500, width=800, top=100, left=100, toolbar=no, menubar=no,
    scrollbars=no,resizable=no, location=no, status=no";  //设置新窗口的特性
//动态生成一个超链接
document.write('<a href="29438.github.io" target="newW">官网</a>');
var me = window.open(url, "newW", featrues);  //打开新窗口
setTimeout (function () {  //定时器
    if (me.closed) {
        console.log("创建的窗口已经关闭。");
    } else {
        me.close();
    }
}, 5000);  //半秒钟之后关闭该窗口
