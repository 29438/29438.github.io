<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html>
<head>
  <meta charset="utf-8">
  <meta content="width=device-width" name="viewport">
  <title>网站缩略图生成</title>
  <meta content="网站缩略图生成" name="keyword">
  <meta content="网站缩略图生成" name="description">
  <link href="./css/ami.css" rel="stylesheet">
  <style>
  .ad {text-align: center; padding: 1em;}
  </style>
  <!-- IE8 BugFixes thanks to @ingozoell details are  https://github.com/justincavery/am-i-responsive/issues/2?utm_source=buffer&utm_campaign=Buffer&utm_content=buffer8b8d6&utm_medium=twitter -->
  <!--[if IE 8]>
<style>

.desktop iframe {
    -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.3181, M12=0, M21=0, M22=0.3181, SizingMethod='auto expand')";
}

.laptop iframe {
    -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.277, M12=0, M21=0, M22=0.277, SizingMethod='auto expand')";
}

.tablet iframe {
    -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.234, M12=0, M21=0, M22=0.234, SizingMethod='auto expand')";
}

.mobile iframe {
    -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.219, M12=0, M21=0, M22=0.219, SizingMethod='auto expand')";
}

</style>
<![endif]-->


<!--[if lte IE 7]>
<style>

.desktop iframe {
    filter: progid:DXImageTransform.Microsoft.Matrix(
    M11=0.3181,
    M12=0,
    M21=0,
    M22=0.3181,
    SizingMethod='auto expand');
}

.laptop iframe {
    filter: progid:DXImageTransform.Microsoft.Matrix(
    M11=0.277,
    M12=0,
    M21=0,
    M22=0.277,
    SizingMethod='auto expand');
}

.tablet iframe {
    filter: progid:DXImageTransform.Microsoft.Matrix(
    M11=0.234,
    M12=0,
    M21=0,
    M22=0.234,
    SizingMethod='auto expand');
}


.mobile iframe {
    filter: progid:DXImageTransform.Microsoft.Matrix(
    M11=0.219,
    M12=0,
    M21=0,
    M22=0.219,
    SizingMethod='auto expand');
}

</style>
<![endif]-->

</head>
<?php 
$t="https://cpddd.tk";
if(isset($_POST["submit"])){
	$t=$_POST['url'];
}
?>
<body class="ami">
<div class="wrapper">
<section class="display">
<div class="mobile ui-draggable">
  <div class="trim">
  <iframe src="<?php echo $t; ?>" id="mobile">
  </iframe>
</div>
</div>

<div class="tablet ui-draggable">
  <div class="trim">
  <iframe src="<?php echo $t; ?>" id="tablet">
  </iframe>
</div>
</div>
<div class="laptop ui-draggable">
  <div class="trim">
  <iframe src="<?php echo $t; ?>" id="laptop">
  </iframe>
</div>
</div>
<div class="desktop ui-draggable">
  <div class="trim">
  <iframe src="<?php echo $t; ?>" id="desktop">
  </iframe>
</div>
</div>

</section>
</div>
<section class="url">
<form id="rwdform" action="./" method="post">
<input type="text" placeholder="https://cpddd.tk" class="button1" value="<?php echo $t; ?>" name="url">
<input class="button2" type="submit" value="生成" name="submit">
</form>
</section>
</div>
<p class="footer">
Powered By <a href="">CP</a>.
</p>
</body>
</html>
