<?php
$bg_url = 'https://img08.mifile.cn/v1/MI_542ED8B1722DC/e00139dc17e7a5ebab9dc0be563eaea6.png'; // 将 /path/to/your/image/ 替换为实际的图片存放路径
// 加载背景图片
$bg_img = imagecreatefrompng($bg_url);

$textFile = 'tiangou.txt';
//文件或网站
$font = 'NiXiangShiWoDeAiQing-2.ttf';
//字体样式
$fontSize = 40;

//$text=$_GET['text'];
$text = "";
//文本
// 打开文本文件，读取内容并随机选择一条
if ($handle = fopen($textFile, 'r')) {
    $lines = file($textFile);
    $text = $lines[rand(0, count($lines) - 1)];
    fclose($handle);
}

$w=date('w'); 
$week=array( 
    "0"=>"星期日", 
    "1"=>"星期一", 
    "2"=>"星期二", 
    "3"=>"星期三", 
    "4"=>"星期四", 
    "5"=>"星期五", 
    "6"=>"星期六" 
); 
$dayInfo = date("m月d日 $week[$w]"); // 获取当前日期和星期几，并转换为大写
// 将日期信息和文本信息作为两行分别传入自动换行算法中进行换行处理
$dayLines = autoSplitText($dayInfo, $fontSize, $font, imagesx($bg_img) - 40, 18);
$textLines = autoSplitText($text, $fontSize, $font, imagesx($bg_img) - 40, 18);
$lines = array_merge($dayLines, $textLines);

$startY = 99;
foreach ($lines as $line) {
    //$color = imagecolorallocate($bg_img, rand(0, 255), rand(0, 255), rand(0, 255));
    //随机颜色
    imagettftext($bg_img, $fontSize, -0.5, 70, $startY, $color, $font, $line);
    $startY += 50;
}

// 自动换行算法
function autoSplitText($str, $fontSize, $fontFile, $maxWidth, $maxCharsPerLine) {
    $lines = array('');
    $i = 0;
    $len = 0;

    $chars = preg_split('/(?<!^)(?!$)/u', $str);
    foreach ($chars as $char) {
        if ($char === '　' || $char === ' ') { // 处理空格的情况
            $box = imagettfbbox($fontSize, 0, $fontFile, '　');
        } else {
            $box = imagettfbbox($fontSize, 0, $fontFile, $char);
        }
        $charWidth = $box[2] - $box[0];
        $len += $charWidth;

        if ($char === "\n" || $len > $maxWidth || mb_strlen($lines[$i]) >= $maxCharsPerLine) {
            $i++;
            $lines[$i] = '';
            $len = $charWidth;
        }

        if ($char !== "\n") {
            $lines[$i] .= $char;
        }
    }

    return $lines;
}

ob_clean();
header('Content-Type: image/png');
imagejpeg($bg_img, null, 100);
imagedestroy($bg_img);
?>