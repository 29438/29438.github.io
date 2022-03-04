
//爸爸
	function _Fulei(id,onK,onJ,paY,paX,_color,_color1){	
		constructor:_Fulei,
		this.id=id,
		this.paY=paY,
		this.paX=paX,
		this.onK=onK,
		this.onJ=onJ,
		this._color=_color,
		this._color1=_color1
		if(typeof this.FangFa!="function"){
		_Fulei.prototype.FangFa=function(){
			var Quan=document.getElementById(this.id);
			var thisa=this;
			function ZhiXing(){
			document.onmousemove=function(e){
				var _top=e.pageY-thisa.paY+"px";
				var _left=e.pageX-thisa.paX+"px";
				Quan.style.top=_top;
				Quan.style.left=_left;
				Quan.style.zIndex="999";
			    Quan.style.backgroundColor=thisa._color;		
			}
			}
			Quan.addEventListener(this.onK,ZhiXing);
			function ZanTing(){
			document.onmousemove=function(){
			Quan.style.top=Quan.style.top;
			Quan.style.left=Quan.style.left;
			Quan.style.zIndex="0";
			Quan.style.backgroundColor=thisa._color1;
		    document.cookie=thisa.id+"width"+"="+Quan.style.top;//这里是利用cookie储存，当然这种本地储存属于一种笨方法，其余写法自行构造，至于读取我就不详细写了！
			document.cookie=thisa.id+"height"+"="+Quan.style.left;
			}
			}
		Quan.addEventListener(this.onJ,ZanTing);
		}
		}
	}
	//初始实例化，第一个参数为ID，第二个参数为事件开始，第三个参数为事件结束，第四个参数当进行拖动的时候鼠标top的高度（这里可自行修改代码，实现鼠标拖动时所在位置，可以在单独封装一个返回函数实现自动化！），第五个参数当进行拖动的时候鼠标左边的距离（这里可自行修改代码，实现鼠标拖动时所在位置，可以在单独封装一个返回函数实现自动化！），第六个参数是拖动时的颜色，第七个参数是放下后的颜色，可自行修改！



	var ShiLiHua1=new _Fulei("YiDong1","mousedown","mouseup",50,50,"#F08080","cadetblue").FangFa();
	var ShiLiHua2=new _Fulei("YiDong2","mousedown","mouseup",50,50,"#F08080","cadetblue").FangFa();
	var ShiLiHua3=new _Fulei("YiDong3","mousedown","mouseup",50,50,"#F08080","cadetblue").FangFa();
	var ShiLiHua4=new _Fulei("YiDong4","mousedown","mouseup",50,50,"#F08080","cadetblue").FangFa();
	var ShiLiHua5=new _Fulei("YiDong5","mousedown","mouseup",50,50,"#F08080","cadetblue").FangFa();
	

	
	//儿子(作为扩展时可在此进行代码扩展！)
			function _ZiLei(id,onK,onJ,paY,paX){
				constructor:_ZiLei,
				_Fulei.call(this,id,onK,onJ,paY,paX)
				/*xxxxxxxxxxxxxxxxx*自己如果需要，可自行扩展属性*/
				_ZiLei.prototype=new _Fulei()/*这里如果写在儿子方法下边就会被覆盖*/
				if(typeof this.FangFa!="function"){
				_ZiLei.prototype.ZiLei_F=function(){
					
					/*请自行修改扩展*/
					
				}
				}
			}