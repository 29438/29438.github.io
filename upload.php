<?php
// 允许上传的图片后缀
$allowedExts = array("json", "txt", "html", "gif", "jpeg", "jpg", "png");
$temp = explode(".", $_FILES["file"]["name"]);
echo $_FILES["file"]["size"];
$extension = end($temp);     // 获取文件后缀名
if ((($_FILES["file"]["type"] == "text/html")
|| ($_FILES["file"]["type"] == "text/plain")
|| ($_FILES["file"]["type"] == "text/javascript")
|| ($_FILES["file"]["type"] == "audio/mpeg")
|| ($_FILES["file"]["type"] == "video/mp4")
|| ($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png")
|| ($_FILES["file"]["type"] == "application/json")
|| ($_FILES["file"]["type"] == "application/zip")
|| ($_FILES["file"]["type"] == "application/pdf")
|| ($_FILES["file"]["type"] == "application/msword")
|| ($_FILES["file"]["type"] == "application/vnd.ms-excel")
|| ($_FILES["file"]["type"] == "application/vnd.ms-powerpoint"))
&& ($_FILES["file"]["size"] < 2048000)   // 小于 2000 kb
&& in_array($extension, $allowedExts))
{
	if ($_FILES["file"]["error"] > 0)
	{
		echo "错误：: " . $_FILES["file"]["error"] . "<br>";
	}
	else
	{
		echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
		echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
		echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
		echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"] . "<br>";
		
		// 判断当期目录下的 upload 目录是否存在该文件
		// 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
		if (file_exists("saves/" . $_FILES["file"]["name"]))
		{
			echo $_FILES["file"]["name"] . " 文件已经存在,覆盖上传。 ";
			move_uploaded_file($_FILES["file"]["tmp_name"], "saves/" . $_FILES["file"]["name"]);
			echo "文件存储在: " . "saves/" . $_FILES["file"]["name"];
		}
		else
		{
			// 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
			move_uploaded_file($_FILES["file"]["tmp_name"], "saves/" . $_FILES["file"]["name"]);
			echo "文件存储在: " . "saves/" . $_FILES["file"]["name"];
		}
	}
}
else
{
	echo "非法的文件格式";
}
?>