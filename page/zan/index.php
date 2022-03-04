

<!DOCTYPE html>
<html>
	<head> 
		<meta charset="utf-8" /> 
		<meta content="width=device-width,initial-scale=1,user-scalable=no" name="viewport" /> 
		<title>免费名片赞</title> 
		<meta content="TransparentLC" name="Colin" /> 
		<meta content="no-siteapp" http-equiv="Cache-Control" /> 
		<meta content="no-transform" http-equiv="Cache-Control" /> 
		<link href="https://cdn.jsdelivr.net/npm/mdui/dist/css/mdui.min.css" rel="stylesheet" /> 
		<link href="https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/style.min.css" rel="stylesheet" /> 
		<link rel="stylesheet" type="text/css" href="http://lib.baomitu.com/font-awesome/4.7.0/css/font-awesome.min.css" />
		<link rel="stylesheet" href="/layui/css/layui.css"  media="all">
	</head> 
	<body class="mdui-appbar-with-toolbar mdui-theme-accent-pink mdui-theme-primary-indigo"> 
		<header class="mdui-appbar mdui-appbar-fixed"> 
			<div class="mdui-color-theme mdui-toolbar"> 
				<span class="mdui-typo-title">领赞宝V3.0</span>
			<center>	<a  href="http://api.2021fafa.com/hz/jc.html"><i class="mdui-icon material-icons">教程</i></a></center>
				<div class="mdui-toolbar-spacer"></div> 
				<a class="mdui-btn mdui-btn-icon" mdui-tooltip="{content: '首页'}" href="http://zan.2021fafa.com"><i class="mdui-icon material-icons"></i></a>
			</div>
		</header>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Layui</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="/layui/css/layui.css"  media="all">
 
</head>
<body>
    <div class="layui-col-md6">
      <div class="layui-card">
       <center> <div class="layui-card-body">
     <blockquote class="layui-elem-quote">名片赞接口1【有效】固定100名片赞</blockquote>
     <blockquote class="layui-elem-quote">名片赞接口2【有效】固定500名片赞</blockquote>
     <blockquote class="layui-elem-quote">名片赞接口3【维护ing】固定1000名片赞</blockquote>
     <blockquote class="layui-elem-quote">接口已更新，输入QQ一键食用即可！</blockquote>
     <blockquote class="layui-elem-quote">接口长期维护更新！禁止盗卖！且用且珍惜！</blockquote>
   
     <blockquote class="layui-elem-quote">源码已解密，新增黑名单功能以及对QQ长度进行识别，防止有人乱提交QQ</blockquote>
     
     </center> 
        </div>
      </div>
    </div>		<div class="mdui-container" style="margin-top:5px"> 
			<div class="mdui-row"> 
				<div class="mdui-col-md-6 mdui-col-offset-md-3">
					<form id="fire">
						<div class="mdui-textfield mdui-textfield-floating-label">
							<label class="mdui-textfield-label">QQ号</label>
							<input class="mdui-textfield-input" name="hm" id="hm" type="number"/>
						</div>
					
					
			 <input class="mdui-btn mdui-ripple mdui-btn-block mdui-color-theme-accent mdui-m-t-2" name="ok" type="submit" value="点击开始" id="send"> 
				</form>
<?php
error_reporting(0);
$v=$_GET['c'];
$a=$v+1;
$e=$a;
$qq=$_GET['hm'];
?>
<div class="tip">
<?php

$hmd=12345678;   //黑名单程序，在此处添加黑名单QQ
if ($hmd==$qq) 
{
    echo"   <br /><div class='progress progress-striped active'><div class='progress-bar progress-bar-success' style='width: 100%'>您以列入黑名单</div></div><div id='ajax_thread_msg'><div class='alert alert-success' style='margin-bottom: 0px;'><strong>$hmd</strong>以列入黑名单,请联系站长解除！</div></div>";
}//黑名单程序
elseif ($hmd!=$qq and $qq>1000000)
{
    echo"   <br /><div class='progress progress-striped active'><div class='progress-bar progress-bar-success' style='width: 100%'>刷QQ赞进行中</div></div><div id='ajax_thread_msg'><div class='alert alert-success' style='margin-bottom: 0px;'>领赞助手已启动,  对<strong>$qq</strong>,已经开始刷赞中,请静静的等待1分钟查看效果！</div></div><div style='display:none'>";
    echo"1号接口返回信息：<iframe src='https://api.xmdpay.cn/API/mpz/api.php?qq=$qq' height='50' width='100%' frameborder='0'></iframe><br>";
     echo"<meta http-equiv=refresh content='9999999999; url=index.php?hm=$qq&amp;c=$a'>";
   
}?>	
	


		<script src="http://lib.baomitu.com/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/mdui/dist/js/mdui.min.js"></script> 
		<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"></script> 
		<script src="assets/js/core.js"></script> 
		<script src="assets/layer/layer.js"></script> 
		<script src="assets/js/copy.js"></script> 
		<script src="assets/js/ajax.js"></script> 
		
	</body>
</html>