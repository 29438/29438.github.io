/**
* 接口配置文件
*
* ！！!视频能否正常播放和播放有无广告的关键在于使用稳定有效的解析接口
*
* 如何获取解析接口请自行百度,开放使用的很多,也可以看下其他影视网站使用什么接口
* 如希望播放时不呈现广告请自行寻找并使用无广告解析接口
*
* 接口不配置时会前往视频源站播放,如腾讯视频、爱奇艺等
下方链接是解析接口从上往下依次排列失效可以更换，自助添加接口！
**/

jsApiConfig([
        "https://www.administratorw.com/video.php?url=",
	"https://jx.youyitv.com/?url=",
	"https://jsap.attakids.com/?url=",
	"https://okjx.cc/?url=",
	"https://2.08bk.com/?url=",
	"https://www.administratorw.com/admin.php?url=",
]);