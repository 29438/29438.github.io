<?php
error_reporting(0);
$网站名='影视大全';
$地址='www.5luck.cn/ys';
$邮箱='cp66666@vip.qq.com';
$统计='';//统计代码
$资源接口='http://bttcj.com/inc/sapi.php'; //资源站接口，若替换，下面分类也要替换
$资源分类='<ty id="0">国产</ty><ty id="2">麻豆</ty><ty id="1">香港伦理</ty><ty id="3">韩国伦理</ty><ty id="4">欧美伦理</ty>';
$资源替换=array('<script>'=>'');

$展示时效='';//展示 &h=24 &h=48 &h=168 或者留空
$倒序='no';//也可以是no，一般资源站资源是倒排的，建议填yes
$解析='https://jx.jiubojx.com/vip/?url='; //仿B站解析https://www.cuan.la/m3u8.php?url=
$数据缓存='0.5';//单位小时
$模板='default';
$标题['list']="yk[网站名]";
$标题['search']="yk[搜索词]的搜索结果 - yk[网站名]";
$标题['info']="yz[name] - yk[网站名]";

$关键词['list']="yk[当前分类名],最新电影,最新电视,最新综艺,最新动漫";
$关键词['search']="yk[搜索词],最新电影,最新电视,最新综艺,最新动漫";
$关键词['info']="yz[name],最新电影,最新电视,最新综艺,最新动漫";

$描述['list']="yk[网站名]提供最新的电影、电视、综艺、动漫在线播放服务";
$描述['search']="yk[网站名]提供yk[搜索词]的在线播放服务";
$描述['info']="yk[网站名]提供yz[name]的在线播放服务";

include 'global.php';

include mb('indexs.html');
