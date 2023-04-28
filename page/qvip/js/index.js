var uin = "";
var skey = "";
var pskey = "";

//点击图片加载二维码
$("#imghy").click(function(){
    hyewm();
})
$("#imgkj").click(function(){
    kjewm();
})

//按钮隐藏显示事件
$("#hyxl").click(function () {
    $("#hy").attr("style", "display:block;");
    $("#kj").attr("style", "display:none;");
})
$("#kjxl").click(function () {
    $("#kj").attr("style", "display:block;");
    $("#hy").attr("style", "display:none;");
})

//会员获取二维码
function hyewm() {
    $url = 'http://apibb.rjk66.cn/vipapick/login.php?do=getqrpic'
    //获取base的值
    $.getJSON($url, function (json) {
        var data = json['data'];
        var qrsig = json['qrsig'];
        //获取图片
        $("#imghy").attr("src", "data:image/png;base64," + data);
        //判断图片的实效性
        var myVar = setInterval(function () {
            $url1 = 'http://apibb.rjk66.cn/vipapick/login.php?do=qrlogin&qrsig=' + qrsig;
            $.getJSON($url1, function (json1) {
                if (json1['saveOK'] == 2) {
                    $("#wbhy").html("二维码未失效~");
                } else if (json1['saveOK'] == 3) {
                    $("#wbhy").text("二维码扫取中~");
                } else if (json1['saveOK'] == 0) {
                    clearInterval(myVar);
                    $("#imghy").attr("style", "border-radius: 80px")
                    uin = json1['uin'];
                    skey = json1['skey'];
                    pskey = json1['pskey']
                    $("#wbhy").text("你好【" + json1['uin'] + "】,已经登录成功~");
                    $("#imghy").attr("src", "http://q.qlogo.cn/headimg_dl?dst_uin=" + json1['uin'] + "&spec=640&img_type=jpg");
                }
            });
        }, 3000);
    });
}

//跳转登录
function tzdl() {
    layer.confirm("使用一键登录前，请到浏览器打开本网站~<br/>跳转登录了，请自定返回页面~", {
        btn: ['已在浏览器打开'] //按钮
    }, function (index) {
        $url = 'http://svip.goodz.cc/index/index/qqlogin?do=getqrpic'
        $.getJSON($url, function (json) {
            var qrsig = json['qrsig'];
            var openurl = json['url'];
            //浏览器打开open
            var schemacallback = '';
            var ua = window.navigator.userAgent.toLowerCase();
                var is_ios = ua.indexOf('iphone')>-1 || ua.indexOf('ipad')>-1;
                if(is_ios){
                    schemacallback = 'weixin://';
                }else if(ua.indexOf('ucbrowser')>-1){
                    schemacallback = 'ucweb://';
                }else if(ua.indexOf('meizu')>-1){
                    schemacallback = 'mzbrowser://';
                }else if(ua.indexOf('liebaofast')>-1){
                    schemacallback = 'lb://';
                }else if(ua.indexOf('baidubrowser')>-1){
                    schemacallback = 'bdbrowser://';
                }else if(ua.indexOf('baiduboxapp')>-1){
                    schemacallback = 'bdapp://';
                }else if(ua.indexOf('mqqbrowser')>-1){
                    schemacallback = 'mqqbrowser://';
                }else if(ua.indexOf('qihoobrowser')>-1){
                    schemacallback = 'qihoobrowser://';
                }else if(ua.indexOf('chrome')>-1){
                    schemacallback = 'googlechrome://';
                }else if(ua.indexOf('sogoumobilebrowser')>-1){
                    schemacallback = 'SogouMSE://';
                }else if(ua.indexOf('xiaomi')>-1){
                    schemacallback = 'miuibrowser://';
                }else{
                    schemacallback = 'googlechrome://';
                }
            if(is_ios){
                    window.open('wtloginmqq3://ptlogin/qlogin?qrcode='+encodeURIComponent(openurl)+'&schemacallback='+schemacallback);
                }else{
                    window.open('wtloginmqq://ptlogin/qlogin?qrcode='+encodeURIComponent(openurl)+'&schemacallback='+schemacallback);
                }
            //判断是否登录
            var Var = setInterval(function () {
                $url1 = 'http://svip.goodz.cc/index/index/qqlogin?do=qrlogin&qrsig=' + qrsig;
                $.getJSON($url1, function (json1) {
                  if (json1['saveOK'] == 0) {
                        clearInterval(Var);
                        $("#imghy").attr("style", "border-radius: 80px")
                        uin = json1['uin'];
                        skey = json1['skey'];
                        pskey = json1['pskey']
                        $("#wbhy").text("你好【" + json1['uin'] + "】,已经登录成功~");
                        $("#imghy").attr("src", "http://q.qlogo.cn/headimg_dl?dst_uin=" + json1['uin'] + "&spec=640&img_type=jpg");
                    }
                });
            }, 3000);
        });
    });
}

//空间获取二维码
function kjewm() {
    $url = 'http://zs.jyann.cn/api/api/qq/index.php?jz=1'
    //获取base的值
    $.getJSON($url, function (json) {
        var data = json['data']['url'];
        var qrsig = json['data']['qrsig'];
        //获取图片
        $("#imgkj").attr("src", data);
        //判断图片的实效性
        var mVar = setInterval(function () {
            $url1 = 'http://zs.jyann.cn/api/api/qq/index.php?jz=2&qrsig=' + qrsig;
            $.getJSON($url1, function (json1) {
                if (json1['code'] == -2) {
                    $("#wbkj").html("二维码已经失效~");
                } else if (json1['code'] == 0) {
                    $("#wbkj").html("二维码未失效，请先扫码~");
                } else if (json1['code'] == 3) {
                    $("#wbkj").text("二维码扫取中~");
                } else if (json1['code'] == 1) {
                    console.log(json1)
                    $("#imgkj").attr("style", "border-radius: 80px")
                    clearInterval(mVar); //当sok=0时停止监控
                    uin = json1['data']['uin'];
                    skey = json1['data']['skey'];
                    pskey = json1['data']['p_skey']
                    $("#wbkj").text("你好【" + json1['data']['name'] + "】,已经登录成功~");
                    $("#imgkj").attr("src", "http://q.qlogo.cn/headimg_dl?dst_uin=" + json1['data']['uin'] + "&spec=640&img_type=jpg");
                }
            });
        }, 3000);
    });
}

//会员系列
//0-60天会员
function svip(i) {
    if (uin != "") {
        var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
        $.ajax({
            url: "http://api.goodsc.vip/jk/api/qqcjhy.php",
            type: "GET",
            data: {
                uin: uin,
                skey: skey,
                pskey: pskey,
                type: i
            },
            dataType: "json",
            success: function (data) {
                layer.close(index); //清除加载
                layer.alert(data.msg, { title: "温馨提示" })
            }
        })
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//cf图标
function cftb(i) {
    if (uin != "") {
        var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
        $.ajax({
            url: "http://api.goodsc.vip/jk/api/cf.php",
            type: "GET",
            data: {
                qq: uin,
                skey: skey,
                pskey: pskey,
                type: i
            },
            dataType: "json",
            success: function (data) {
                layer.close(index); //清除加载
                layer.alert(data.msg, { title: "温馨提示" })
            }
        })
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//三天豪华绿
function qqlz() {
    if (uin != "") {
        var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
        $.ajax({
            url: "http://api.goodsc.vip/jk/api/lz.php",
            type: "GET",
            data: {
                uin: uin,
                skey: skey,
                pskey: pskey,
            },
            dataType: "json",
            success: function (data) {
                layer.close(index); //清除加载
                layer.alert(data.msg, { title: "温馨提示" })
            }
        })
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//修改企鹅在线
function qezx() {
    if (uin != "") {
        var a = "链接：https://1105583577.urlshare.cn<br/>复制到QQ中打开链接->点击设备信息<br/>安卓IMEI码为【androidID】的值<br/>iPhone的IMEI码为【msf_identifier】的值<br/>注意事项：企鹅有SVIP会员的可以自定义，没有会员的再设置文本那里，请随机输入1~5"
        layer.confirm(a, {
            btn: ['下一步'] //按钮
        }, function (index) {
            layer.close(index);
            layer.prompt({ title: '请输入你的imie码', formType: 0 }, function (imei, index) {
                layer.close(index);
                layer.prompt({ title: '请输入设置的文本', formType: 0 }, function (desc, index) {
                    layer.close(index);
                    var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
                    $.ajax({
                        url: "http://api.goodsc.vip/jk/api/qqzx2.php",
                        type: "get",
                        dataType: "json",
                        data: { uin:uin,skey:skey,pskey:pskey,imei:imei,text:desc},
                        success: function (data) {
                            layer.close(index); //清除加载
                            layer.alert(data['msg']);
                        }
                    });
                });
            });
        });
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//查业务
function cyw() {
    if (uin != "") {
        var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
        $.ajax({
            url: "http://api.goodsc.vip/jk/api/qqyw.php",
            type: "GET",
            data: { uin: uin, skey: skey },
            dataType: "json",
            success: function (data) {
                layer.close(index); //清除加载
                var daan = "";
                //将值循环取出
                for (var i = 0; i < data['msg'].length; i++) {
                    daan += "<span>业务名称：" + data['msg'][i].name + "<br/>开通时间：" + data['msg'][i].time + "<br/>到期时间：" + data['msg'][i].timedq + "<br/>剩余天数：" + data['msg'][i].timets + "<span/><br/>----------<br/>";
                }
                daan += "<span>总开通 " + data.sum + " 种业务<span>"
                layer.alert(daan, { title: "大佬" + uin + "的业务" })
            }
        })
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//刷听歌
function tgsc() {
    if (uin != "") {
        var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
        $.ajax({
            url: "http://api.goodsc.vip/jk/api/qqyy.php",
            type: "GET",
            data: { uin: uin },
            dataType: "json",
            success: function (data) {
                layer.close(index); //清除加载
                layer.alert(data['msg']);
            }
        })
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//企鹅加速包
function qejsb(i) {
    if (uin != "") {
        if (i == 1) {
            var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
            $.ajax({
                url: "http://api.goodsc.vip/jk/api/jsb.php",
                type: "GET",
                data: { uin: uin, skey: skey, pskey: pskey },
                dataType: "json",
                success: function (data) {
                    layer.close(index); //清除加载
                    layer.alert(data['msg']);
                }
            })
        } else {
            var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
            $.ajax({
                url: "http://api.goodsc.vip/jk/api/jsb2.php",
                type: "GET",
                data: { uin: uin, skey: skey, pskey: pskey },
                dataType: "json",
                success: function (data) {
                    layer.close(index); //清除加载
                    layer.alert(data['msg']);
                }
            })
        }
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//黄钻系列
function qehz(i) {
    if (uin != "") {
        if (i == 1) {
            var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
            $.ajax({
                url: "http://api.goodsc.vip/jk/api/hz.php",
                type: "GET",
                data: { uin: uin, skey: skey, pskey: pskey },
                dataType: "json",
                success: function (data) {
                    layer.close(index); //清除加载
                    layer.alert(data['msg']);
                }
            })
        } else {
            var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
            $.ajax({
                url: "http://api.goodsc.vip/jk/api/huangzuan.php",
                type: "GET",
                data: { uin: uin, skey: skey, pskey: pskey },
                dataType: "json",
                success: function (data) {
                    layer.close(index); //清除加载
                    layer.alert(data['msg']);
                }
            })
        }
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//说说系列
function css(){
    var sszh = $("#sszh").val() //说说账号
    var daan = ""; //装标签
    if (uin != "") {
         if(sszh != ""){
                var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
                $.ajax({
                    url: "http://api.goodsc.vip/jk/api/ssid.php",
                    type: "GET",
                    data: { uin: uin, skey: skey, pskey: pskey, uin2:sszh },
                    dataType: "json",
                    success: function (data) {
                        layer.close(index); //清除加载
                        if(data['code'] == 200){
                            for(var i = 0;i < data['msg'].length;i++){
daan += "<option value=" + data['msg'][i]['lls']+"|"+data['msg'][i]['ssid']+"|"+data['msg'][i]['stat'] +">" +data['msg'][i]['name'] + "</option>";
                            }
                            $("#kjss").html(daan)
                            //获取说说id等信息
                            	var ss = $("#kjss").val();
					         	var arr = ss.split('|');
					         	$("#ssid").val(arr[1]);
					         	$("#ssll").val(arr[0]);
					         	$("#sta").val(arr[2]);
					         	$("#ssbj").show();
                        }else{
                           layer.alert(data['msg']); 
                        }
                    }
                })
         }else{
            layer.alert("请填写查询空间的账号~", { title: "温馨提示" }) 
         }
    }else{
      layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}

//说说信息下拉框事件
$("#kjss").change(function () {
	var ss = $("#kjss").val();
	var arr = ss.split('|');
	$("#ssll").val(arr[0]);
	$("#ssid").val(arr[1]);
	$("#sta").val(arr[2]);
})

//刷说说浏览
function ssll(){
    var sta = $("#sta").val();
     var ii =1;
     if (uin != "") {
         if(sta != ""){
             var a = "温馨提示：刷说说浏览的前提的，扫码登录的企鹅账号和需要刷的企鹅账号不能是同一个，不然数量是不会有变化的，请不要刷太多，也请在刷的时候不要退出网页，刷取次数不能大于100哦~"
        layer.confirm(a, {
            btn: ['明白了，哥哥'] //按钮
        }, function (index) {
            layer.close(index);
            layer.prompt({ title: '需要刷取得次数', formType: 0 }, function (cs, index) {
                layer.close(index);
                if(cs <= 100){
                     var index = layer.load(2, { shade: [0.5, '#fff'] }); //添加加载动画
                     for(var i =0;i<=cs ;i++){
                        $.ajax({
                            url: "http://api.goodsc.vip/jk/api/ssll.php",
                            type: "get",
                            dataType: "json",
                            data: { uin: uin, skey: skey, pskey: pskey, sta:sta },
                            success: function (data) {
                                  layer.close(index); //清除加载
                                  console.log(data);
            				     if(data['code'] == 200){
            				         $("#djks").text("执行进度总"+cs+"/"+(ii++));
            				     }
            				     if(ii==cs){
            				         layer.alert("本次提交刷浏览已经完成~<br/>浏览量有一定的误差</br>可以一直刷，免费的</br>也请不要拿过去圈钱！！</br>查看最新浏览量可以再一次获取说说", { title: "温馨提示" });
            				     }
                            }
                        });
                    }
                } else{
                    layer.alert("怎么这么不听话?都说了不能超过100，服务器要爆了!!!", { title: "温馨提示" })
                }
            });
        });
         }else{
             layer.alert("急了?说说id都没获取，我刷啥?", { title: "温馨提示" })
         }
    } else {
        layer.alert("请先扫码登录~", { title: "温馨提示" })
    }
}