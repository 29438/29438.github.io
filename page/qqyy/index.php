<!DOCTYPE html>
<html lang="zh">
 <head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>QQ音乐听歌时长提交</title>
  <meta name="Description" content="QQ音乐听歌时长提交"/>
  <meta name="Keywords" content="QQ音乐听歌时长提交"/>
    <link rel="stylesheet" href="layui/css/layui.css">
</head>
<body style="background-color: #F2F2F2">
  <div class="layui-container">
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
      <legend>QQ音乐听歌时长提交</legend>
    </fieldset>
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">使用说明：</div>
          <div class="layui-card-body">免密提交 查今日听歌时长 <a href="https://y.qq.com/m/client/vipexchange/index.html" target="_blank">https://y.qq.com/m/client/vipexchange/index.html</a>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">在线提交</div>
          <div class="layui-card-body">
            <div class="layui-tab layui-tab-brief" lay-filter="tab">
              <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                  <div class="layui-form">
                    <div class="layui-form-pane">
                      <div class="layui-form-item">
                        <label class="layui-form-label">Q Q</label>
                        <div class="layui-input-block">
                          <input id="uid" type="text" class="layui-input" placeholder="输入提交Q Q">
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="layui-btn layui-btn-fluid" id="query">立即提交</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<script src="//cdn.bootcss.com/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>
<script src="//cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.js" type="text/javascript"></script>
<script src="./layui/layui.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function(){
	$('#query').click(function (){
		var uid = $('#uid').val();
		if (uid == '') {
        layer.alert('QQ不能为空', {icon: 5});
		return false;
		}
        layer.msg('正在加载，加载时间过长属于正常', {
        icon: 16
        ,shade: 0.01
        });
        //此处演示关闭http://qq.shanhe.red/api/qy/music.php?uin=
        layer.closeAll('loading');
		$.ajax({
			url: "https://api.kit9.cn/api/qq_music/api.php",
			type: "POST", 
			dataType: "json",
	       	data: "qq=" + $.trim($("#uid").val()),
			success:function(data){
            if(data.data.state==0){
            layer.alert(''+ data.data.result +'', {icon: 6});
            }else if(data.data.state==1){
			layer.alert(''+ data.data.result +'', {icon: 5});
            }else if(data.code==-0){
            layer.alert(''+ data.warning +'', {icon: 5});
            }else if(data.code==-1){
            layer.alert(''+ data.warning +'', {icon: 5});
            }
			},
            error: function(error) {
            layer.alert('网络异常', {icon: 5});
            }
       });
   });
});
</script>
</body>
</html>