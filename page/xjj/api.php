<?php
// 只显示视频

$videoDir = "http://lt.bttq.xyz/mp4/mp4/"; // 注意这里的视频链接已经是完整的URL地址
$videoList = array();
for ($i=1; $i<=600; $i++) { // 需要播放 1.mp4 到 600.mp4 这600个视频
  array_push($videoList, "{$i}.mp4");
}

// 随机获取一个视频文件名
$randomIndex = array_rand($videoList);
$videoFileName = $videoList[$randomIndex];

// 生成视频文件的链接
$videoUrl = $videoDir.$videoFileName;
?>

<!DOCTYPE html>
<html>
<head>
  <title>随机播放视频</title>
  <meta charset="utf-8">
  <style>
    #myVideo {
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <video id="myVideo" controls autoplay>
    <source src="<?php echo $videoUrl; ?>" type="video/mp4">
  </video>
</body>
</html>
