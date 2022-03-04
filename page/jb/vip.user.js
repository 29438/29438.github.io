// ==UserScript==
// @name              X全网视频会员
// @version           1.9.5.4
// @description       本脚本集合了优酷、爱奇艺、腾讯、芒果、乐视、等全网视频平台免费去广告观看VIP会员视频 哔哩哔哩番剧解锁,B站视频下载、解析，A站视频下载、解析，以及高清普清电视观看，增加对手机支持(手机端现仅支持弹窗播放)，现已添加网易云等平台音乐免费下载，抖音短视频去水印。若播放页不显示此插件或播放失败，请反馈QQ2943871928.♡个人主页: http://app.5luck.cn/id/♡
// @author            程鹏
// @icon              https://tntfiles.com/preview/31c8a98f301329ede30e359d5ffba187381eb397faf33829a77e98dc9d0d7545.jpg
// @namespace         https://greasyfork.org/users/29438
// @updateURL         https://greasyfork.org/zh-CN/scripts/418379-x%E5%85%A8%E7%BD%91%E8%A7%86%E9%A2%91%E4%BC%9A%E5%91%98
// @installURL        https://greasyfork.org/scripts/418379-x%E5%85%A8%E7%BD%91%E8%A7%86%E9%A2%91%E4%BC%9A%E5%91%98/code/X%E5%85%A8%E7%BD%91%E8%A7%86%E9%A2%91%E4%BC%9A%E5%91%98.user.js
// @downloadURL       https://greasyfork.org/scripts/418379-x%E5%85%A8%E7%BD%91%E8%A7%86%E9%A2%91%E4%BC%9A%E5%91%98/code/X%E5%85%A8%E7%BD%91%E8%A7%86%E9%A2%91%E4%BC%9A%E5%91%98.user.js
// @require           https://cdn.bootcss.com/jquery/3.5.1/jquery.min.js
// @match             https://xbeibeix.com/api/bilibili/biliplayer/*
// @match             *://v.qq.com/x/cover/*
// @match             *://m.v.qq.com/x/cover/*
// @match             *://v.qq.com/x/page/*
// @match             *://m.v.qq.com/x/page/*
// @match             *://m.v.qq.com/*
// @match             *://www.iqiyi.com/v*
// @match             *://m.iqiyi.com/*
// @match             *://www.iqiyi.com/*
// @match             *://m.iqiyi.com/kszt/*
// @match             *://www.iqiyi.com/kszt/*
// @match             *://v.youku.com/v_show/*
// @match             *://m.youku.com/alipay_video/*
// @match             *://w.mgtv.com/b/*
// @match             *://m.mgtv.com/b/*
// @match             *://m.mgtv.com/channel/*
// @match             *://www.mgtv.com/b/*
// @match             *://tv.sohu.com/v/*
// @match             *://tv.sohu.com/*
// @match             *://m.tv.sohu.com/v/*
// @match             *://film.sohu.com/album/*
// @match             *://m.film.sohu.com/album/*
// @match             *://www.le.com/ptv/vplay/*
// @match             *://m.le.com/ptv/vplay/*
// @match             *://v.pptv.com/show/*
// @match             *://m.pptv.com/show/*
// @match             *://vip.pptv.com/show/*
// @match             *://www.acfun.cn/v/*
// @match             *://m.acfun.cn/v/*
// @match             *://www.bilibili.com/video/*
// @match             *://m.bilibili.com/video/*
// @match             *://www.bilibili.com/anime/*
// @match             *://m.bilibili.com/anime/*
// @match             *://www.bilibili.com/bangumi/play/*
// @match             *://m.bilibili.com/bangumi/play/*
// @match             *://vip.1905.com/play/*
// @match             *://*.wasu.cn/Play/show/*
// @match        *://music.163.com/*
// @match        *://y.qq.com/*
// @match        *://www.kugou.com/
// @include      *://music.163.com/song*
// @include      *://music.163.com/m/song*
// @include      *://y.qq.com/n/*
// @include      *://*.kugou.com/song*
// @include      *://*.kuwo.cn/yinyue*
// @include      *://*.kuwo.cn/play_detail*
// @include      *://*.xiami.com/*
// @include      *://music.taihe.com/song*
// @include      *://*.1ting.com/player*
// @include      *://music.migu.cn/v*
// @include      *://*.lizhi.fm/*
// @include      *://*.qingting.fm/*
// @include      *://www.iesdouyin.com/share/video/*
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @connect      ixigua.com
// @connect      zhihu.com
// @connect      vzuu.com
// @connect      douyinvod.com
// @connect      aweme.snssdk.com
// @connect      iesdouyin.com
// @connect      app.5luck.cn
// @connect      www.whatbuytoday.com
// @grant        GM_info
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @run-at       document-idle
// @charset		 UTF-8
// @license      GPL License

// ==/UserScript==

(function () {
    'use strict';
    /////***********************
    //true:开启  false:关闭，想关闭某个模块只需把对应的值改为false即可

    var iSOpenDouyinModule = true;     //是否开启抖音功能模块
    var isOpenMusicVipModule = true;   //是否开启音乐解析模块
    //待添加功能
    //var isOpenVideoVipModule = true;   //是否开启视频解析模块
    //var isOpenWenkuModule = true;      //是否开启文库功能模块
    //var isOpenGoodsCouponModule = true;//是否开启优惠券模块
    //var isOpenZhihuModule = true;      //是否开启知乎优化模块
    /////***********************
    var $ = $ || window.$;
    var window_url = window.location.href;
    var website_host = window.location.host;
    var log_count = 1;
    var host = location.host;
    var parseInterfaceList = [];
    var selectedInterfaceList = [];
    //alert('ShaPi');
    var originalInterfaceList = [
         { name:"线路一", type:"1", url:"https://jx.f41.cc/?url="},
        { name:"线路二", type:"1", url:"https://api.lhh.la/vip/?url="},
        { name:"线路三", type:"1", url:"https://vip.parwix.com:4433/player/?url="},
        { name:"线路四", type:"1", url:"https://jiexi.380k.com/?url="},
        { name:"线路五", type:"1", url:"https://api.tv920.com/vip/?url="},
        { name:"线路六", type:"1", url:"https://jx.youyitv.com/?url="},
        { name:"线路七", type:"1", url:"https://jx.618g.com/?url="},
        { name:"线路八", type:"1", url:"https://jx.ivito.cn/?url="},
        { name:"线路九", type:"1", url:"https://jx.youyitv.com/?url="},
        { name:"线路十", type:"1", url:"https://jx.yingxiangbao.cn/vip.php?url="},
        { name:"线路十一", type:"1", url:"https://www.ckmov.vip/api.php?url="},
        { name:"线路十二", type:"1", url:"https://jiexi.380k.com/?url="},
        { name:"线路十三", type:"1", url:"https://vip.ikjiexi.top/?url="},
        { name:"线路十四", type:"1", url:"https://vip.bljiex.com/?v="},
        { name:"线路十五", type:"1", url:"https://z1.m1907.cn/?jx="},
        { name:"线路十六", type:"1", url:"https://jx.yparse.com/index.php?url="},
        { name:"线路十七", type:"1", url:"https://jx.jiubojx.com/vip.php?url="},
        { name:"线路十八", type:"1", url:"https://www.h8jx.com/jiexi.php?url="},
        { name:"线路十九", type:"1", url:"https://jx.youyitv.com/?url="},
        { name:"线路二十", type:"1", url:"https://jx.rdhk.net/?v="},
        //--------------------------------------------------------------------------------------
        { name:"B站解析一", type:"2", url:"https://jiexi.380k.com/?url="},
        { name:"B站解析二", type:"2", url:"https://vip.parwix.com:4433/player/?url="},
        { name:"B站解析三", type:"2", url:"https://api.tv920.com/jx/?url="},
        { name:"B站解析四", type:"2", url:"https://www.h8jx.com/jiexi.php?url="},
        { name:"B站解析五", type:"2", url:"https://vip.ikjiexi.top/?url="},
        { name:"B站解析六", type:"2", url:"https://jsap.attakids.com/?url="},
        { name:"B站解析七", type:"2", url:"https://jx.yparse.com/index.php?url="},
        { name:"B站解析八", type:"2", url:"https://api.sigujx.com/?url="},
        //--------------------------------------------------------------------------------------
        { nme:"B站解析一", type:"0", url:"http://jx.rdhk.net/?v="},
        { nme:"B站解析二", type:"0", url:"https://jsap.attakids.com/?url="},
        { nme:"B站解析三", type:"0", url:"https://jx.yparse.com/index.php?url="},
        { nme:"B站解析四", type:"0", url:"https://jiexi.q-q.wang/?url="},
        { nme:"B站解析五", type:"0", url:"https://www.h8jx.com/jiexi.php?url="},
        { nme:"B站解析六", type:"0", url:"https://api.bingdou.net/?url="},
        { nme:"解析线路一", type:"0", url:"https://jx.youyitv.com/?url="},
        { nme:"解析线路二", type:"0", url:"https://jx.618g.com/?url="},
        { nme:"解析线路三", type:"0", url:"https://z1.m1907.cn/?jx="},
        { nme:"解析线路四", type:"0", url:"https://jx.ivito.cn/?url="},
        { nme:"解析线路五", type:"0", url:"https://api.tv920.com/vip/?url="},
        { nme:"解析线路六", type:"0", url:"https://jx.f41.cc/?url="},
        { nme:"解析线路七", type:"0", url:"https://jx.yingxiangbao.cn/vip.php?url="},
        { nme:"解析线路八", type:"0", url:"https://www.ckmov.vip/api.php?url="},
        { nme:"解析线路九", type:"0", url:"https://jiexi.380k.com/?url="},
        { nme:"解析线路十", type:"0", url:"https://okjx.cc/?url="},
    ];


    function innerParse(url) {
        $("#iframe-player").attr("src", url);
    }


    function GMopenInTab(url, open_in_background) {
        if (typeof GM_openInTab === "function") {
            GM_openInTab(url, open_in_background);
        } else {
            GM.openInTab(url, open_in_background);
        }
    }


    function GMgetValue(name, value) {
        if (typeof GM_getValue === "function") {
            return GM_getValue(name, value);
        } else {
            return GM.getValue(name, value);
        }
    }


    function GMsetValue(name, value) {
        if (typeof GM_setValue === "function") {
            GM_setValue(name, value);
        } else {
            GM.setValue(name, value);
        }
    }


    function GMaddStyle(css) {
        var myStyle = document.createElement('style');
        myStyle.textContent = css;
        var doc = document.head || document.documentElement;
        doc.appendChild(myStyle);
    }

    var node = "";
    var player_nodes = [
        { url:"v.qq.com", node:"#mod_player"},
        { url:"www.iqiyi.com", node:"#flashbox"},
        { url:"v.youku.com", node:"#player"},
        { url:"w.mgtv.com", node:"#mgtv-player-wrap"},
        { url:"www.mgtv.com", node:"#mgtv-player-wrap"},
        { url:"tv.sohu.com", node:"#player"},
        { url:"film.sohu.com", node:"#playerWrap"},
        { url:"www.le.com", node:"#le_playbox"},
        { url:"video.tudou.com", node:".td-playbox"},
        { url:"v.pptv.com", node:"#pptv_playpage_box"},
        { url:"vip.pptv.com", node:".w-video"},
        { url:"www.wasu.cn", node:"#flashContent"},
        { url:"www.acfun.cn", node:"#player"},
        { url:"www.bilibili.com", node:"#player_module"},
        { url:"vip.1905.com", node:"#player"},
    ];
    for(var i in player_nodes) {
        if (player_nodes[i].url == host) {
            node = player_nodes[i].node;
        }
    }

    var videoPlayer = $("<div id='iframe-div' style='width:100%;height:100%;z-index:1000;'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");

    var innerList = [];
    var outerList = [];
    var innerli = "";
    var innerli1 = "";
    var outerli = "";
    originalInterfaceList.forEach((item, index) => {
        if (item.type == "0") {
            innerList.push(item);
            innerli1 += "<li>" + item.nme + "</li>";
        }
        if (item.type == "1") {
            innerList.push(item);
            innerli += "<li>" + item.name + "</li>";
        }
        if (item.type == "2") {
            outerList.push(item);
            outerli += "<li>" + item.name + "</li>";
        }
    });
    parseInterfaceList = innerList.concat(outerList);

    var left = 0;
    var top = 100;
    var Position = GMgetValue("Position_" + host);
    if(!!Position){
        left = Position.left;
        top = Position.top;
    }
    GMaddStyle(`#vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; background-color:#2E9AFE; z-index:2147483647; font-size:20px; text-align:left;}
#vip_movie_box .item_text {width:28px; padding:4px 0px; text-align:center;}
#vip_movie_box .item_text img {width:35px; height:35px; display:inline-block; vertical-align:middle;}
#vip_movie_box .vip_mod_box_action {display:none; position:absolute; left:28px; top:0; text-align:center; background-color:#272930; border:1px solid gray;}
#vip_movie_box .vip_mod_box_action li{font-size:12px; color:#DCDCDC; text-align:center; width:60px; line-height:21px; float:left; border:1px solid gray; padding:0 4px; margin:4px 2px;}
#vip_movie_box .vip_mod_box_action li:hover{color:#FF4500;}
#vip_movie_box .selected_text {width:28px; padding:4px 0px; text-align:center;}
#vip_movie_box .selected_text img {width:35px; height:35px;display:inline-block; vertical-align:middle;}
#vip_movie_box .vip_mod_box_selected {display:none; position:absolute; left:28px; top:0; text-align:center; background-color:#F5F6CE; border:1px solid gray;}
#vip_movie_box .vip_mod_box_selected ul{height:455px; overflow-y: scroll;}
#vip_movie_box .vip_mod_box_selected li{font-size:14px; color:#00FF00; text-align:center; width:120px; line-height:27px; float:left; border:1px dashed gray; padding:0 4px; margin:4px 2px;}
#vip_movie_box .vip_mod_box_selected li:hover{color:#FF4500;}`);

    var html = $(`<div id='vip_movie_box'>
<div class='item_text'>
<img src='https://s1.imagehub.cc/images/2021/03/17/circle-cropped-2.png' title='视频解析'/>
<div class='vip_mod_box_action' style='border:5px solid #ffe474;'>
<div style='display:flex;'>
<div style='width:320px; padding:30px 0;'>

<div style='font-size:20px; text-align:center; color:#ebc834; line-height:21px;'><a style=' color:#ffe474;' href="http://app.5luck.cn/id" target="_blank">☞♡我的主页♡</a></div>
<ul style='margin:0 10px;'>
<div style='clear:both;'></div>
</ul><br/>

<div style='font-size:18px; text-align:center; color:#ffe474; line-height:21px;'>全网VIP视频解析(内嵌播放)</div>
<ul style='margin:0 10px;'>
` + innerli + `
<div style='clear:both;'></div>
</ul>
<div style='font-size:18px; text-align:center; color:#ffe474; line-height:21px;'>全网VIP视频解析(弹窗播放)</div>
<ul style='margin:0 10px;'>
` + innerli1 + `
<div style='clear:both;'></div>
</ul>
<div style='font-size:18px; text-align:center; color:#ffe474; line-height:21px;'>B站番剧解析(内嵌播放)</div>
<ul style='margin:0 10px;'>
` + outerli + `
<div style='clear:both;'></div>
</ul>

<div style='font-size:10px; text-align:center; color:000; line-height:21px;'><a style='Text-decoration:none; color:#ffe474;' onclick="window.open('http://app.5luck.cn/www')">♡官网♡</a> <a style='Text-decoration:none; color:#ffe474;' onclick="window.open('http://app.5luck.cn/lc')">        ♡历程♡ </a><a style='Text-decoration:none; color:#ffe474;' onclick="window.open('http://app.5luck.cn/m')">       ♡全网音乐下载♡</a></div>
<div style='font-size:10px; text-align:center; color:000; line-height:21px;'></div>
<ul style='margin:0 10px;'>
<div style='clear:both;'></div>
</ul>

<div style='font-size:10px; text-align:center; color:000; line-height:21px;'><a style='Text-decoration:none; color:#ffe474;' href="http://wpa.qq.com/msgrd?v=3&uin=2943871928&site=qq&menu=yes">若播放页不显示此插件或播放失败，请点此反馈</a></div>
<ul style='margin:0 10px;'>
<div style='clear:both;'></div>
</ul>

<div style='font-size:10px; text-align:center; color:000; line-height:21px;'><a style='Text-decoration:none; color:#ffe474;' href="http://wpa.qq.com/msgrd?v=3&uin=2943871928&site=qq&menu=yes">CopyRight &copy CP 2020 </a><a style='Text-decoration:none; color:#ffe474;' href="http://app.5luck.cn/jb/vip.js">V_1.9.5.4</a></div>
<ul style='margin:0 10px;'>
<div style='clear:both;'></div>
</ul>

</div>
</div>
</div>
</div>



<div class='selected_text'>
<img src='https://s1.imagehub.cc/images/2021/03/17/circle-cropped.png' title='高清电视'/>
<div class='vip_mod_box_selected' style='border:5px solid #808080;'>
<div style='display:flex;'>
<div style='width:1080px; padding:20px 0;'>
<div style='font-size:20px; text-align:center; color:#088A08; line-height:21px;'>高清电视测试节点(建议网速流畅观看)</div>


<script language="javascript">
function openwin()
{window.open("https://files.catbox.moe/myw7ja.mp4","", "height=2000, width=4000,location=no,status=no")
}
function openwin2()
{window.open("https://files.catbox.moe/m6mr5s.mp4","","width=1500,height=2000")
}
function openwin3()
{window.open("https://jx.yingxiangbao.cn/vip.php?url=https://cdn.czdxhb.com/20200217/jAfoA15S/index.m3u8","55555", "height=2000, width=4000,location=no,status=no")
}
function openwin4()
{window.open("https://jx.yingxiangbao.cn/vip.php?url=https://cdn.czdxhb.com/20200217/pb9XXHzY/index.m3u8","","width=1500,height=2000")
}
function openwin5()
{window.open("https://jx.yingxiangbao.cn/vip.php?url=https://cdn.czdxhb.com/20200408/0snfGHdT/index.m3u8","","width=1500,height=2000")
}
function openwin6()
{window.open("https://jx.yingxiangbao.cn/vip.php?url=https://cdn.czdxhb.com/20200104/qsQuIFJa/index.m3u8","","width=1500,height=2000")
}
function openwin7()
{window.open("https://jx.yingxiangbao.cn/vip.php?url=https://cdn.czdxhb.com/20191218/h8r72KN0/index.m3u8","","width=1500,height=2000")
}
</script>

<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv1hd" target="_blank">CCTV-1高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv2hd" target="_blank">CCTV-2高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv3hd" target="_blank">CCTV-3高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv4hd" target="_blank">CCTV-4高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv5hd" target="_blank">CCTV-5高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv6hd" target="_blank">CCTV-6高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv7hd" target="_blank">CCTV-7高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv8hd" target="_blank">CCTV-8高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv9hd" target="_blank">CCTV-9高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv10hd" target="_blank">CCTV-10高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv12hd" target="_blank">CCTV-12高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv14hd" target="_blank">CCTV-14高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv17hd" target="_blank">CCTV-17高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv1hd" target="_blank">北京卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv2hd" target="_blank">北京文艺高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv4hd" target="_blank">北京影视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv9hd" target="_blank">北京新闻高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv11hd" target="_blank">北京冬奥高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hunanhd" target="_blank">湖南卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=zjhd" target="_blank">浙江卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=jshd" target="_blank">江苏卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=dfhd" target="_blank">东方卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=ahhd" target="_blank">安徽卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hljhd" target="_blank">黑龙江卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=lnhd" target="_blank">辽宁卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=szhd" target="_blank">深圳卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=gdhd" target="_blank">广东卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=tjhd" target="_blank">天津卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hbhd" target="_blank">湖北卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sdhd" target="_blank">山东卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cqhd" target="_blank">重庆卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=dnhd" target="_blank">福建东南高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=schd" target="_blank">四川卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hbhd" target="_blank">河北卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=jxhd" target="_blank">江西卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hnhd" target="_blank">河南卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=gxhd" target="_blank">广西卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=jlhd" target="_blank">吉林卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=lyhd" target="_blank">海南卫视高清</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=gzhd" target="_blank">贵州卫视高清</a></li>

<div style='font-size:20px; text-align:center; color:#088A08; line-height:21px;'>普清电视测试节点(建议网速流畅观看)</div>
<li><a href="#" onclick="openwin()">小姐姐</a></li>
<li><a href="#" onclick="openwin2()">舞小喵</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv1" target="_blank">CCTV-1综合</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv2" target="_blank">CCTV-2财经</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv3" target="_blank">CCTV-3综艺</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv4" target="_blank">CCTV-4国际</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv6" target="_blank">CCTV-6电影</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv7" target="_blank">CCTV-7军事</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv8" target="_blank">CCTV-8电视剧</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv9" target="_blank">CCTV-9纪录</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv10" target="_blank">CCTV-10科教</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv11" target="_blank">CCTV-11戏曲</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv12" target="_blank">CCTV-12社会</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv13" target="_blank">CCTV-13新闻</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv14" target="_blank">CCTV-14少儿</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv15" target="_blank">CCTV-15音乐</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv16" target="_blank">CGTN</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cctv17" target="_blank">CCTV-17农业</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv1" target="_blank">北京卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv2" target="_blank">北京文艺</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv3" target="_blank">北京科教</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv4" target="_blank">北京影视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv5" target="_blank">北京财经</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv7" target="_blank">北京生活</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv8" target="_blank">北京青年</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv9" target="_blank">北京新闻</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv10" target="_blank">北京卡酷少儿</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=btv11" target="_blank">北京冬奥纪实</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=zjtv" target="_blank">浙江卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hunantv" target="_blank">湖南卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=jstv" target="_blank">江苏卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=dftv" target="_blank">东方卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sztv" target="_blank">深圳卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=ahtv" target="_blank">安徽卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hntv" target="_blank">河南卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sxtv" target="_blank">陕西卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=jltv" target="_blank">吉林卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=gdtv" target="_blank">广东卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sdtv" target="_blank">山东卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hbtv" target="_blank">湖北卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hebtv" target="_blank">河北卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=xztv" target="_blank">西藏卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=nmtv" target="_blank">内蒙古卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=qhtv" target="_blank">青海卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sctv" target="_blank">四川卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=tjtv" target="_blank">天津卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sxrtv" target="_blank">山西卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=lntv" target="_blank">辽宁卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=xmtv" target="_blank">厦门卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=xjtv" target="_blank">新疆卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=hljtv" target="_blank">黑龙江卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=yntv" target="_blank">云南卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=jxtv" target="_blank">江西卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=dntv" target="_blank">福建东南卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=gztv" target="_blank">贵州卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=nxtv" target="_blank">宁夏卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=gstv" target="_blank">甘肃卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cqtv" target="_blank">重庆卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=bttv" target="_blank">兵团卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=ybtv" target="_blank">延边卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sstv" target="_blank">三沙卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=lytv" target="_blank">海南卫视</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=sdetv" target="_blank">山东教育</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cetv1" target="_blank">CETV-1</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cetv3" target="_blank">CETV-3</a></li>
<li><a href="http://ivi.bupt.edu.cn/player.html?channel=cetv4" target="_blank">CETV-4</a></li>


</div>
</div>
</div>
</div>
</div>




`);

    $("body").append(html);

    $(".item_text").on("mouseover", () => {
        $(".vip_mod_box_action").show();
    });
    $(".item_text").on("mouseout", () => {
        $(".vip_mod_box_action").hide();
    });

    $(".selected_text").on("mouseover", () => {
        $(".vip_mod_box_selected").show();
    });
    $(".selected_text").on("mouseout", () => {
        $(".vip_mod_box_selected").hide();
    });

    $(".vip_mod_box_action li").each((index, item) => {
        item.addEventListener("click", () => {
            if (parseInterfaceList[index].type == "1","2") {
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[index].url + location.href);
            }
            if (parseInterfaceList[index].type == "0")
            {
                GMopenInTab(parseInterfaceList[index].url + location.href, false);
            }
        });
    });

    var movie_box = $("#vip_movie_box");
    movie_box.mousedown(function(e) {

        if (e.which == 3) {
            e.preventDefault() //
            movie_box.css("cursor", "move");
            var positionDiv = $(this).offset();
            var distenceX = e.pageX - positionDiv.left;
            var distenceY = e.pageY - positionDiv.top;

            $(document).mousemove(function(e) {
                var x = e.pageX - distenceX;
                var y = e.pageY - distenceY;
                if (x < 0) {
                    x = 0;
                } else if (x > $(document).width() - movie_box.outerWidth(true)) {
                    x = $(document).width() - movie_box.outerWidth(true);
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(document).height() - movie_box.outerHeight(true)) {
                    y = $(document).height() - movie_box.outerHeight(true);
                }

                movie_box.css("left", x);
                movie_box.css("top", y);
                GMsetValue("Position_" + host,{ "left":x, "top":y});
            });
            $(document).mouseup(function() {
                $(document).off('mousemove');
                movie_box.css("cursor", "pointer");
            });
            $(document).contextmenu(function(e) {
                e.preventDefault();
            })
        }
    });

    var localurl = location.href;
    function addScript(url){
        var s = document.createElement('script');
        s.setAttribute('src',url);
        document.body.appendChild(s);
    }

    var reg_bili = /www.bilibili.com\/video.*/;
    var reg_xibei = /xbeibeix.com\/api\/bilibili\/biliplayer.*/;
    var reg_acfun = /www.acfun.cn\/v\/.*/;

    function bilibili(){
        var url,data,ele
        if(location.href!=localurl){
            localurl = location.href;
            $('div#dlbtn').remove();
        }
        try{
            if($('div#dlbtn').length==0 && document.querySelectorAll('.duration').length>0 ){
                data = __INITIAL_STATE__||false;
                if(data){
                    if(data.p.length!==0){
                        url = `https://xbeibeix.com/api/bilibili/biliplayer/?url=${data.bvid}?p=${data.p}`;
                    }else{
                        url = `https://xbeibeix.com/api/bilibili/biliplayer/?url=${data.bvid}`;
                    }
                    var videowebsite = '<a></a>'
                    ele = `<div id="dlbtn" style="padding:10px;"><a target="_blank" href="${url}" style="color:white;width:fit-content;background-color:#B4045F;padding:10px;">\u70B9\u51FB\u89E3\u6790\u4E0B\u8F7D\u89C6\u9891</a>${videowebsite}</div>`;
                    $('div#viewbox_report').after(ele);
                }
            }
            else{
            }
        }catch(e){
            console.log('bilibili',e.message);
            if(e.message.search('$')>=0){
            }

        }
    }
    function acfun(){
        var ele,content='',h1,videolist;
        try{
            h1 = $('h1.title');
            videolist = JSON.parse(videoInfo.currentVideoInfo.ksPlayJson).adaptationSet[0].representation;
            if(videolist.length>0 && $('div#downloadlist').length==0){
                for(var i=0;i<videolist.length;i++){
                    content = content + `<div style="margin:5px 0px;"><div style="display:inline-block;font-weight:bold;width:10%;">${videolist[i].qualityLabel}：</div><input type="text" style="color:#5FB404;width:68%" value="${videolist[i].url}"></div>`;
                }
                ele = `<div id="downloadlist" style="margin:15px 0px;color:#DF0174;"><div>\u8BF7\u4F7F\u7528m3u8\u4E0B\u8F7D\u5DE5\u5177（<a target="_blank" href="https://xsyhnb.lanzoui.com/iTA2rg3hfef">\u63A8\u8350\u5DE5\u5177</a>）</div>${content}</div>`;
            }
            h1.after(ele);
        }catch(e){
            console.log('acfun',e.message);
        }
    }

    function xibei(){

        if($('div#videolink').length==0){
            var link = document.querySelector('iframe').contentDocument.querySelector('video').src;
            var ele = `<div id="videolink" style="padding:10px;overflow-wrap: break-word;background-color:white;height:20%;">\u89C6\u9891\u4E0B\u8F7D\u5730\u5740\uFF08MP4\uFF09：<a target="_blank" href="${link}">${link}</a></div>`;
            $('body').append(ele);
            $('iframe').attr('height','80%');
        }
    }

    function xsyhnbrun(){
        if(reg_bili.test(localurl)){bilibili();}
        else if(reg_xibei.test(localurl)){xibei();}
        else if(reg_acfun.test(localurl)){acfun();}
    }
    setInterval(xsyhnbrun,500);

    switch (host) {
        case 'www.iqiyi.com':
            //--------------------------------------------------------------------------------
            unsafeWindow.rate = 0;
            unsafeWindow.Date.now = () => {
                return new unsafeWindow.Date().getTime() + (unsafeWindow.rate += 1000);
            }
            setInterval(() => {
                unsafeWindow.rate = 0;
            }, 600000);
            //--------------------------------------------------------------------------------
            setInterval(() => {
                if (document.getElementsByClassName("cupid-public-time")[0] != null) {
                    $(".skippable-after").css("display", "block");
                    document.getElementsByClassName("skippable-after")[0].click();
                }
                $(".qy-player-vippay-popup").css("display", "none");
                $(".black-screen").css("display", "none");
            }, 500);
            break
        case 'v.qq.com':
            //--------------------------------------------------------------------------------
            setInterval(() => { //视频广告加速
                $(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
                $(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
            }, 1000)
            //--------------------------------------------------------------------------------
            setInterval(() => {
                var txp_btn_volume = $(".txp_btn_volume");
                if (txp_btn_volume.attr("data-status") === "mute") {
                    $(".txp_popup_volume").css("display", "block");
                    txp_btn_volume.click();
                    $(".txp_popup_volume").css("display", "none");
                }
                //$("txpdiv[data-role='hd-ad-adapter-adlayer']").attr("class", "txp_none");
                $(".mod_vip_popup").css("display", "none");
                $(".tvip_layer").css("display", "none");
                $("#mask_layer").css("display", "none");
            }, 500);
            break
        case 'v.youku.com':
            //--------------------------------------------------------------------------------
            window.onload = function () {
                if (!document.querySelectorAll('video')[0]) {
                    setInterval(() => {
                        document.querySelectorAll('video')[1].playbackRate = 16;
                    }, 100)
                }
            }
            //--------------------------------------------------------------------------------
            setInterval(() => {
                var H5 = $(".h5-ext-layer").find("div")
                if(H5.length != 0){
                    $(".h5-ext-layer div").remove();
                    var control_btn_play = $(".control-left-grid .control-play-icon");
                    if (control_btn_play.attr("data-tip") === "播放") {
                        $(".h5player-dashboard").css("display", "block");
                        control_btn_play.click();
                        $(".h5player-dashboard").css("display", "none");
                    }
                }
                $(".information-tips").css("display", "none");
            }, 500);
            break
        case 'www.mgtv.com':
            break
        case 'tv.sohu.com':
            setInterval(() => {
                $(".x-video-adv").css("display", "none");
                $(".x-player-mask").css("display", "none");
                $("#player_vipTips").css("display", "none");
            }, 500);
            break

        case 'www.bilibili.com':
            setInterval(() => {
                $(".player-limit-mask").remove();
            }, 500);
            break
    }









    //音乐下载：无损音乐、封面、歌词
    var musicvip={};
    musicvip.operation=function(){
        var reWY = /163(.*)song/i;
        var reQQ = /QQ(.*)song/i;
        var reKG = /kugou(.*)song/i;

        var ayaMusicWebsite2 = "https://music.liuzhijin.cn/?url=";
        var ayaMusicTitle2 = "https://music.liuzhijin.cn/?name=@name@&type=netease";
        var vipBtn = '<div>';
        vipBtn += '<a target="_blank" id="ayasongurl999" style="margin:5px 10px 5px 0px;display:inline-block;padding:4px 8px;background-color:#FF410F;color:#FFF;vertical-align:bottom;text-decoration:none;font-size:13px;"><b>免费下载</b></a>';
        vipBtn += '<a target="_blank" id="ayasongtitle999" style="margin:5px 0px;display:inline-block;padding:4px 8px;background-color:#FF410F;color:#FFF;vertical-align:bottom;text-decoration:none;font-size:13px;"><b>歌名搜索</b></a>';
        vipBtn += '</div>';
        if(reWY.test(window_url)){
            var $title = $('.u-icn-37');
            $title.parent('.hd').after(vipBtn);
            var titleText = $(".tit").text();
            $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href.replace('://music.163.com', "://music.163.com/#")));
            $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));

        }else if(reQQ.test(window_url)){
            var $title = $('.data__name_txt');
            var titleText = $(".data__name_txt").text();
            $title.parent('.data__name').after(vipBtn);
            $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href));
            $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));

        }else if(reKG.test(window_url)){
            setTimeout(function(){
                var $title = $('.audioName');
                $title.parent('.songName').after(vipBtn);
                var titleText = $(".audioName").text();
                $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href));
                $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
            },1200);
        }
    };
    musicvip.start=function(){
        if(window_url.indexOf("music.163.com")!=-1 || window_url.indexOf("y.qq.com")!=-1 || window_url.indexOf("www.kugou.com")!=-1){
            musicvip.operation();
        }
    };
    if(isOpenMusicVipModule){
        musicvip.start();
    }


    //--抖音解析开始
    var douyingHelper={};
    douyingHelper.anasetinterval=null;
    douyingHelper.generateHtml = function(){
        var topBox = "<div style='position:fixed;z-index:999999;top:40%;left:0px;'>"+
            //"<div style='font-size:12px;padding:8px 2px;width:70px;text-align:center;color:#FFF;background-color:#F93A60;'>"+
            //"<a style='color:#FFFFFF;' href='http://www.tool77.com/video' target='_blank'>网页解析</a></div>"+
            "<div id='douyin_helper_download_btn' style='font-size:12px;padding:8px 2px;width:130px;text-align:center;color:#FFF;background-color:#F93A60;margin-top:20px;'>"+
            "<a style='color:#FFFFFF;' href='javascript:void(0);' target='_blank'>本地解析：准备中</a></div>"+
            "</div>";
        $("body").append(topBox);
    };
    douyingHelper.isDouyin=function(){
        if(window_url.indexOf("www.iesdouyin.com/share/video")!=-1){
            return true;
        }
        return false;
    }
    douyingHelper.getDownloadUrl=function(){

        var times=1;
        this.anasetinterval = setInterval(function(){
            $("#douyin_helper_download_btn").find("a").text("本地解析：准备中("+times+"S)");
            times++;
        },1000);

        var $that = this;
        return new Promise(function(resolve, reject){
            try{
                var windowurl = window.location.href;
                var itemID = windowurl.split("?")[0].replace("https://www.iesdouyin.com/share/video/","").replace("/","");
                var getVisitedUrl = "https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids="+itemID;
                GM_xmlhttpRequest({
                    url: getVisitedUrl,
                    method: "get",
                    headers: {
                        'User-agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
                    },
                    onload: function(response) {
                        var status = response.status;
                        if(status==200||status=='200'){
                            var responseText = response.responseText;
                            if(!!responseText){
                                try{
                                    var jsonObjeect = JSON.parse(responseText);
                                    var item_list = jsonObjeect["item_list"][0]["video"]["play_addr"]["url_list"][0];
                                    resolve({"status":"success", "playerUrl":item_list})
                                }catch(e){}
                            }
                        }
                        reject({"status":"error"});
                    }
                });
            }catch(e){
                reject({"status":"error"});
            }
        });
    };
    douyingHelper.getPlayerUrl=function(){
        this.getDownloadUrl().then((data)=>{
            var playerUrl = data.playerUrl;
            playerUrl = playerUrl.replace("playwm","play");  //新版本需要20200428，改版
            var $a = $("#douyin_helper_download_btn").find("a");
            GM_xmlhttpRequest({
                url: playerUrl,
                method: "get",
                headers: {
                    'User-agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
                },
                onload: function(response) {
                    clearInterval(douyingHelper.anasetinterval);
                    douyingHelper.anasetinterval=null;

                    var status = response.status;
                    if(status==200||status=='200'){
                        var finalUrl = response.finalUrl;
                        if(!!finalUrl){
                            $a.text("本地解析：点我下载");
                            $a.attr("href",finalUrl);
                        }else{
                            $a.text("本地解析：出错了");
                        }
                    }
                }
            });
        }).catch((error)=>{$a.text("本地解析：出错了");});
    };
    douyingHelper.start=function(){
        if(this.isDouyin()){
            this.generateHtml();
            this.getPlayerUrl();
        }
    }
    if(iSOpenDouyinModule){
        douyingHelper.start();
    }


})();