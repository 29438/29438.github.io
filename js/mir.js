<script>  
if (!mkReaddata("fool")) {  // 如果没有触发过彩蛋  
    document.body.classList.add('mk-fool-egg');     // 给 body 增加彩蛋 class  
    window.setTimeout(function () {     // 定时退出彩蛋  
        mkSavedata("fool", "fool");     // 记录彩蛋已被执行  
        alert("恭喜发现愚人节彩蛋 :)");     // 弹窗（这里可以自己发挥）  
        document.body.classList.remove('mk-fool-egg');  
    }, 5000);   // 这里的 5000 代表 5s，也就是经过 5s 后弹窗，并退出彩蛋  
}  
  
// 写入 Cookie  
function mkSavedata(key, data) {  
    key = 'mk_' + key;  
    data = JSON.stringify(data);  
    if (window.localStorage) {  
        localStorage.setItem(key, data);  
    }  
}  
  
// 读取 Cookie  
function mkReaddata(key) {  
    if (!window.localStorage) return '';  
    key = 'mk_' + key;  
    return JSON.parse(localStorage.getItem(key));  
}  
</script>  
  
<style>  
/* 彩蛋的样式代码 */  
.mk-fool-egg {  
    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);  
    -moz-transform: matrix(-1, 0, 0, 1, 0, 0);  
    transform: matrix(-1, 0, 0, 1, 0, 0);  
    -o-transform: skew(0deg, 180deg) scale(-1, 1);  
    filter:progid: DXImageTransform.Microsoft.BasicImage(mirror=1);  
}  
</style>  