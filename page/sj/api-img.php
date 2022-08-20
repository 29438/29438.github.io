<?php
$content = file_get_contents("http://api.xiao-xin.top/API/kuaishou_png.php?type=json");
if($_GET['type']!="image"){
echo $content;
}else{
if($_GET['type']=="image"){
 $json = json_decode($content,true);
 header("Location: {$json['png_url']}");
}
}
?>