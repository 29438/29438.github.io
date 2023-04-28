<script>  
// 浏览器标题切换  
var OriginTitile = document.title;    // 保存之前页面标题  
var titleTime;  
document.addEventListener('visibilitychange', function(){  
    if (document.hidden){  
        document.title = '不要走呀Σ(っ °Д °;)っ';  
        clearTimeout(titleTime);  
    }else{  
        document.title = 'o(*￣▽￣*)ブ';  
        titleTime = setTimeout(function() {  
            document.title = OriginTitile;  
        }, 2000); // 2秒后恢复原标题  
    }  
});  
</script>  