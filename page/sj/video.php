<?php
if($_GET['lx']=="video"){
$content = file_get_contents("http://api.xiao-xin.top/API/kuaishou.php?type=json");
$json = json_decode($content,true);
header("Location: {$json['video_url']}");}
   if($_GET['lx']!="video"){
   $content = file_get_contents("http://api.xiao-xin.top/API/kuaishou_png.php?type=json");
$json = json_decode($content,true);
header("Location: {$json['png_url']}");}