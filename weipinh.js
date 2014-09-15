<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

<title>唯品会</title>
<link rel="stylesheet" href="weipinhui.css">
<script >
  
function huiyuan()
{
document.getElementById("caidan").style.display="block";
}
function huiyuan1()
{
document.getElementById("caidan").style.display="none";
}
//??o??ê???¨?-¨¤??|ì?
function shoucang()
{
document.getElementById("shoucang").style.display="block";
}
function shoucang1()
{
document.getElementById("shoucang").style.display="none";
}
function dingdan()
{
document.getElementById("dingdan").style.display="block";
}
function dingdan1()
{
document.getElementById("dingdan").style.display="none";
}
function shishang()
{
document.getElementById("shishang").style.display="block";
}
function shishang1()
{
document.getElementById("shishang").style.display="none";
}
function shishang()
{
document.getElementById("shishang").style.display="block";
}
function shishang1()
{
document.getElementById("shishang").style.display="none";
}

 


window.onload=function()
{

  function $(id){
   var object=document.getElementById(id);
   return object;
   }
   //???  ??? ???
   var show2=$("show2")
    var show3=$("show3")
    var weipintuan=$("weipintuan")
	 var shoujiban=$("shoujiban")
   show2.onmouseover=function()
   {
    show2.style.backgroundColor="white"; 
	weipintuan.style.color="#FF0066";
   }
   show2.onmouseout=function()
   {
    show2.style.backgroundColor="#EAE9E8"; 
  weipintuan.style.color="black";
   }
   show3.onmouseover=function()
   {
    show3.style.backgroundColor="white"; 
	shoujiban.style.color="#FF0066";
   }
   show3.onmouseout=function()
   {
    show3.style.backgroundColor="#EAE9E8"; 
    shoujiban.style.color="black";
   }
   
   
   
   
  var third=document.getElementById("wph-third");
   var tupian=document.getElementById("tupian");
  third.onmouseover=function()
  {
     tupian.style.display="block";  
  }
   third.onmouseout=function()
  {
     tupian.style.display="none";  
  }
  
  var second=document.getElementById("wph-second");
   var shengfen=document.getElementById("shengfen");
   var qiehuan=document.getElementById("qiehuan");
   var TIME=null;
    
	qiehuan.onmouseover=function()
	 { 
	   clearTimeout(TIME);
	 shengfen.style.display="block";
	 }
	 qiehuan.onmouseout=function()
	 { 
	 TIME=setTimeout(function(){shengfen.style.display="none";},1000);
      }
	  shengfen.onmouseover=function()
	  {
	  //alert("11!");
	  clearTimeout(TIME);
	  shengfen.style.display="block";
	  }
	  shengfen.onmouseout=function()
	  {
	   timer=setTimeout(function(){shengfen.style.display="none";},500);
	  }
	  
 
  
  
  var shouye2=document.getElementById("shouye2");
shouye2.onmouseover=function()
  {
   shouye2.style.backgroundColor="#EE88C0";  
   shouye2.style.fontWeight="bold";
   }
   shouye2.onmouseout=function()
  {
      shouye2.style.backgroundColor="#FF0099";  
	  shouye2.style.fontWeight="normal";
  }
  var shouye3=document.getElementById("shouye3");
shouye3.onmouseover=function()
  {
    shouye3.style.fontWeight="bold";
   shouye3.style.backgroundColor="#EE88C0";  
   }
   shouye3.onmouseout=function()
  {
      shouye3.style.backgroundColor="#FF0099";  
	  shouye3.style.fontWeight="normal";
  }
  var shouye4=document.getElementById("shouye4");
shouye4.onmouseover=function()
  {
    shouye4.style.fontWeight="bold";
   shouye4.style.backgroundColor="#EE88C0";  
   }
   shouye4.onmouseout=function()
  {
      shouye4.style.backgroundColor="#FF0099";  
	  shouye4.style.fontWeight="normal";
  }
  var shouye5=document.getElementById("shouye5");
shouye5.onmouseover=function()
  {
    shouye5.style.fontWeight="bold";
   shouye5.style.backgroundColor="#EE88C0";  
   }
   shouye5.onmouseout=function()
  {
      shouye5.style.backgroundColor="#FF0099";
	  shouye5.style.fontWeight="normal";  
  }
   
   
   //¨|¨???¤?¤?¨¤¨¤
  
   var first=$("fenlei-first");
   var second=$("fenlei-second");
    var third=$("fenlei-third");
   var four=$("fenlei-fourth");
    var five=$("fenlei-fifth");
   var six=$("fenlei-sixth");
    var seven=$("fenlei-seventh");
   var eight=$("fenlei-eighth");
   var fenlei2=$("fenlei2");
   var fenlei3=$("fenlei3");
   var fenlei4=$("fenlei4");
   var fenlei5=$("fenlei5");
   var fenlei6=$("fenlei6");
   var fenlei7=$("fenlei7");
   var fenlei8=$("fenlei8");
   var fenlei9=$("fenlei9");
   var shouye6=$("shouye6");
   var fenleiobject=$("fenlei");
  shouye6.onmouseover=function()
  {
   fenleiobject.style.display="block"; 
   }
   shouye6.onmouseout=function()
  {
      fenleiobject.style.display="none";  
  }
   
   
  first.onmouseover=function()
  {
     fenlei(fenlei2,fenlei3,fenlei4,fenlei5,fenlei6,fenlei7,fenlei8,fenlei9,first,second,third,four,five,six,seven,eight);
   }
  second.onmouseover=function()
  {
    fenlei(fenlei3,fenlei4,fenlei5,fenlei2,fenlei6,fenlei7,fenlei8,fenlei9,second,third,four,first,five,six,seven,eight);
   }
   third.onmouseover=function()
  {
     fenlei(fenlei4,fenlei5,fenlei3,fenlei2,fenlei6,fenlei7,fenlei8,fenlei9,third,four,first,second,five,six,seven,eight);
   }
   four.onmouseover=function()
  {
    fenlei(fenlei5,fenlei3,fenlei2,fenlei4,fenlei6,fenlei7,fenlei8,fenlei9,four,third,first,second,five,six,seven,eight);
   }
   five.onmouseover=function()
  {
    fenlei(fenlei6,fenlei3,fenlei2,fenlei4,fenlei5,fenlei7,fenlei8,fenlei9,five,third,first,second,four,six,seven,eight);
   }
   six.onmouseover=function()
  {
    fenlei(fenlei7,fenlei3,fenlei2,fenlei4,fenlei6,fenlei5,fenlei8,fenlei9,six,third,first,second,five,four,seven,eight);
   }
   seven.onmouseover=function()
  {
    fenlei(fenlei8,fenlei3,fenlei2,fenlei4,fenlei6,fenlei7,fenlei5,fenlei9,seven,third,first,second,five,six,four,eight);
   }
   eight.onmouseover=function()
  {
    fenlei(fenlei9,fenlei3,fenlei2,fenlei4,fenlei6,fenlei7,fenlei8,fenlei5,eight,third,first,second,five,six,seven,four);
   }
  function fenlei(one,two,three,four,five,six,seven,eight,fenleione,fenleitwo,fenleithree,fenleifour,fenleifive,fenleisix,fenleiseven,fenleieight)
  {
    one.style.display="block";
	two.style.display="none";
	three.style.display="none";
	four.style.display="none";
	five.style.display="none";
	six.style.display="none";
	seven.style.display="none";
	eight.style.display="none";
	fenleione.style.backgroundColor="white";
    fenleitwo.style.backgroundColor="#F0F0F0";
    fenleithree.style.backgroundColor="#F0F0F0";  
    fenleifour.style.backgroundColor="#F0F0F0";
	fenleifive.style.backgroundColor="#F0F0F0";
    fenleisix.style.backgroundColor="#F0F0F0";
    fenleiseven.style.backgroundColor="#F0F0F0";  
    fenleieight.style.backgroundColor="#F0F0F0";
  } 
 
 
 //ppt2??¤?
 var oDiv=document.getElementById('container');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var timer=null;
	var maintimer=null;
	var arg=0;
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	
	
	function move(){
		clearInterval(timer);
		timer=setInterval(function(){
			var speed=-parseInt(oUl.offsetLeft+arg)/6.5;
			speed=speed>0? Math.ceil(speed):Math.floor(speed);
				
			if(oUl.offsetLeft<-3900){
				oUl.style.left=oUl.offsetLeft+3900+speed+'px';
				arg=1300;
			}

			oUl.style.left=oUl.offsetLeft+speed+'px';
		},30);
	}		
	function startMove(){
		clearInterval(maintimer);
		maintimer=setInterval(function(){
			move();
			arg=arg+1300;
		},2000);
	}
			
	startMove();
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			clearInterval(maintimer);
		};
		aLi[i].onmouseout=function(){
			startMove();
		}
	}

	

	  
	//??¨¤-¨￠D?à¨a
    var xiala=$("xiala");
	  var span1=$("span1");
	    var span2=$("span2");
		var oli=$("oli");
		var oli1=$("oli1");
		var oli2=$("oli2");
		var xiala1=$("xiala1");
		var xiala2=$("xiala2");
		var xiala3=$("xiala3");
		var xiala4=$("xiala4");
	function time()
	{
	var date=new Date();
	var day=10-date.getDay();
	var hour=24-date.getHours();
	var minute=60-date.getMinutes();
	var second=60-date.getSeconds();
	var datetime="剩余时间:"+day+"天"+hour+"时"+minute+"分"+second+"秒";
	oli.innerHTML=datetime;
    oli1.innerHTML=datetime;
	oli2.innerHTML=datetime;
	oli3.innerHTML=datetime;
	oli4.innerHTML=datetime;
    }
    time();
   setInterval(function(){time();},1000);
    function spanover(one,two)
	{
	   one.style.border="2px #FF0099 solid"; 
	   two.style.border="2px #FF0099 solid";
	   one.style.borderRight="none"; 
	   two.style.borderLeft="none"; 
	}
	function spanout(one,two)
	{
	   one.style.border="2px #ccc solid"; 
	   two.style.border="2px #ccc solid";
	   one.style.borderRight="none"; 
	   two.style.borderLeft="none"; 
	}
      xiala.onmouseover=function()
	  {
	   spanover(span1,span2);
	  }
	  xiala.onmouseout=function()
	  {
	   spanout(span1,span2);
	  }
	  xiala1.onmouseover=function()
	  {
	   spanover(span21,span22);
	  }
	  xiala1.onmouseout=function()
	  {
	   spanout(span21,span22);
	  }
	   xiala2.onmouseover=function()
	  {
	   spanover(span31,span32);
	  }
	  xiala2.onmouseout=function()
	  {
	   spanout(span31,span32);
	  }
	  xiala3.onmouseover=function()
	  {
	   spanover(span41,span42);
	  }
	  xiala3.onmouseout=function()
	  {
	   spanout(span41,span42);
	  }
	  xiala4.onmouseover=function()
	  {
	   spanover(span51,span52);
	  }
	  xiala4.onmouseout=function()
	  {
	   spanout(span51,span52);
	  }
   //ppt22??¤?
   var XIALA2first=$("XIALA2-first");
    var XIALA2second=$("XIALA2-second");
   function ppt2(oneone,twotwo)
   {
   oneone.style.display="none";
  twotwo.style.display="block";  
   }
   for(var i=0;i<1000;i++)
   {
      setTimeout(function(){
	 // ppt2(XIALA2first,XIALA2second);
	 XIALA2first.style.display="block";
	 XIALA2second.style.display="none";
	  },i*2000+1000);
   }
   for(var j=0;j<1000;j++)
   {
      setTimeout(function(){
	  //ppt2(XIALA2second,XIALA2first);
	 XIALA2first.style.display="none";
	 XIALA2second.style.display="block";
	  },j*2000+2000);
   }
}


</script>
</head>

<body>
<!--侧边栏部分-->
<div id="cebianlan"></div>
<img src="1.png" style="width:1300px" id="p1">

<div id="first">
<!--第一部分-->
<div id="f-f"></div>
<!--第二部分-->
<div id="f-t"  >
<ul>
 <li id="show1" ><a href="#"><span style="color:#FF0066">特卖会</span></a></li>
  <li id="show2"><a href="#" id="weipintuan">唯品团</a></li>
   <li id="show3" ><a href="#" id="shoujiban">手机版</a></li>
 </ul>
</div>
<!--会员服务部分-->
<div id="f-th">
<ul>
<li><img src="2.png"><span  style="font-weight:bold">400-6789-888</span></li>
<li><img src="3.png"><span style="font-size:12px;"><a href="#">联系客服</a></span></li>
<li onmouseover="huiyuan()" onmouseout="huiyuan1()" id="huiyuan"><img src="4.png"><span style="font-size:12px;"><a href="#">会员服务
<div id="caidan">
   <ul>
     <li><a href="#">帮助中心</a></li>
	 <li><a href="#">会员反馈</a></li>
	  <li><a href="#">会员俱乐部</a></li>
   </ul>
</div>
</a></li>
</ul>
</div>
</div>
<!--第四部分-->
<div id="four">
<ul>
<li><span style="padding-left:360px">你好，欢迎来到唯品会！</span>请<a href="#"><span style="color:#FF0000">登录</span></a></li>
<li><a href="#"><span style="color:#FF0066">免费注册</span></a></li>
<li><a href="#">购物袋</a></li>
<li onmouseover="shoucang()"  onmouseout="shoucang1()"><a href="#">我收藏的品牌
  <div id="shoucang">
       <ul >
	   <li><a href="#">我收藏的商品</a></li>
	   </ul>
   </div>
</a></li>
<li onmouseover="dingdan()" onmouseout="dingdan1()"><a href="#">我的订单
      <div id="dingdan">
       <ul >
	   <li><a href="#">自助退货</a></li>
	   </ul>
      </div>
</a></li>
<li><a href="#">唯品卡</a></li>
<li><a href="#">几分兑换</a></li>
<li onmouseover="shishang()" onmouseout="shishang1()"><a href="#">时尚会
      <div id="shishang">
       <ul >
	   <li><a href="#">自助退货</a></li>
	   </ul>
      </div>
</a></li>
<li><a href="#">爱心基金</a></li>
<li><a href="#">关注</a></li>
<li><a href="#">收藏</a></li>
</ul>
</div>




<!--唯品会-->
<div id="wph">
<ul>
<li id="wph-first"><a href="#"><span style="color:#666666;font-size:16px;padding-left:50px;font-weight:bold;"><img src="5.png">一家专门做特卖的网站</span></a></li>
<li id="wph-second"><span style="font-size:14px;padding-left:650px;"><span style="font-weight:bold;color:#000000;padding-right:15px;">江西</span>
<a href="#"><span id="qiehuan" style="color:#666666;" >切换省份</span>
      <div id="shengfen">
	      <table width:400px;height:400px;cellspacing="0">
		<caption>请选择收货地区</caption>
	
		  <tr class="tr">
		  <td class='leftside'> 华北地区</td>
		  <td class='rightside'>北京 天津 河北 山西 内蒙古</td>
		  </tr>
		  <tr>
		  <td class='leftside'> 华南地区</td>
		   <td class='rightside'>广东 广西 河南 湖北 湖南 海南</td>
		  </tr >
		  <tr class="tr">
		  <td class='leftside'> 华东地区</td>
		  <td class='rightside'>上海 江苏 浙江 安徽 福建 江西 山东</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> 西南地区</td>
		  <td class='rightside'>重庆 贵州 四川 云南 西藏</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> 东北地区</td>
		  <td class='rightside'>辽宁 吉林 黑龙江</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> 西北地区</td>
		  <td class='rightside'>陕西 甘肃 青海 宁夏 山东</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> 港澳台地区</td>
		  <td class='rightside'>香港 澳门 台湾</td>
		  </tr>
		  <tr class="tr">
		  <td  colspan='8' style='line-height:26px;text-align:left;text-indent:2em;color:#343434;'">*提示：根据你选择的省份，我们将为你切换至该地区的首页</td>
		  <td></td>
		  </tr>
		  </table>
	  </div>
</a></span></li>
	<li id="wph-third" style="padding-left:20px;"><a href="#"><img src="6.jpg">
    <div id="tupian">
	     <ul>
		     <li><span >你的购物袋还没有商品<br/>快去逛逛吧~</span></li>
		 </ul>
	</div>

</a></li>
</ul>

</div>
	
<div id="shouye">
    <ul>
	   
	   <li id="shouye1"><a href="#">&nbsp;&nbsp;首页</a></li>
	   <li id="shouye2"><a href="#">美妆特卖</a></li>
	    <li id="shouye3"><a href="#">亲子特卖</a></li>
		 <li id="shouye4"><a href="#">居家特卖</a></li>
		 <li id="shouye5"><a href="#">明天上线</a></li>
		 <li><span style="color:#FF0099">women</span></li>
		  <li><span style="color:#FF0099">women</span></li>
		 <li id="shouye6"><a href="#"><span style="font-size:12px;">在售商品分类
	<div id="fenlei">
	      <div id="fenlei1">
			    <ul>
				  <a href="#"><li id="fenlei-first"><img src="7.png"><span style="color:#000000;font-size:12px;">服饰</span></li></a>
				  <a href="#"><li id="fenlei-second"><img src="8.png"><span style="color:#000000;font-size:12px;">鞋类</span></li></a>
				  <a href="#"><li id="fenlei-third"><img src="10.png"><span style="color:#000000;font-size:12px;">箱包</span></li></a>
				  <a href="#"><li id="fenlei-fourth"><img src="12.png"><span style="color:#000000;font-size:12px;">配饰</span></li></a>
				  <a href="#"><li id="fenlei-fifth"><img src="14.png"><span style="color:#000000;font-size:12px;">化妆品</span></li></a>
				  <a href="#"><li id="fenlei-sixth"><img src="16.png"><span style="color:#000000;font-size:12px;">3C产品</span></li></a>
				  <a href="#"><li id="fenlei-seventh"><img src="18.png"><span style="color:#000000;font-size:12px;">家具百货</span></li></a>
				  <a href="#"><li id="fenlei-eighth"><img src="20.png"><span style="color:#000000;font-size:12px;">文体用品</span></li></a>
				</ul>
			</div>
			<div id="fenlei2">
				 <span style="color:#FF0066;font-weight:bold;">女装</span>
                 <p>T恤 Polo 外套 毛衣 针织衫</br>&nbsp;&nbsp;衬衫 连身裙半截裙 休闲裤</br>&nbsp;&nbsp;牛仔裤 内衣(抹胸) 内裤</p>
                 <span style="color:#FF0066;font-weight:bold;">男装</span>
                 <p>T恤 Polo 针织衫 衬衫 卫衣</br> &nbsp;&nbsp;外套 休闲裤 牛仔裤 家居服</br>&nbsp; 袜子 皮带 背心</p>
                 <span style="color:#FF0066;font-weight:bold;">童装</span>
                  <p>女童背心 女童T恤 女童针织衫</br> &nbsp;&nbsp;女童连身裙 女童裤 男童背心</br> &nbsp;&nbsp;男童T恤 男童
                  针织衫 男童衬衫</br>&nbsp;&nbsp;男童外套 男童裤</p>
           </div>  
		   <div id="fenlei3">
				 <span style="color:#FF0066;font-weight:bold;">男鞋</span>
                 <p>休闲鞋 皮鞋 凉鞋 跑鞋 靴子</br>&nbsp;&nbsp;拖鞋 篮球鞋 足球鞋 网球鞋</br>&nbsp;&nbsp;登山鞋</p>
                 <span style="color:#FF0066;font-weight:bold;">女鞋</span>
                 <p>高跟鞋 凉鞋 休闲鞋 皮鞋</br> &nbsp;&nbsp;运动鞋 靴 拖鞋</br></p>
                 <span style="color:#FF0066;font-weight:bold;">童鞋</span>
                  <p>女童凉鞋 女童单鞋 女童皮鞋</br> &nbsp;&nbsp;女童运动鞋 男童凉鞋 男童单鞋</br> &nbsp;&nbsp;男童皮鞋 男童休闲鞋 男童运动鞋
                </br>&nbsp;&nbsp;女童拖鞋 男童拖鞋</p>
           </div>  
		   <div id="fenlei4">
				 <span style="color:#FF0066;font-weight:bold;">女包</span>
                 <p>钱包 手提包 手袋 背包 腰包</p>
				  <span style="color:#FF0066;font-weight:bold;">男包</span>
                 <p>钱包 提包/挎包 背包</p>
                 <span style="color:#FF0066;font-weight:bold;">商务包</span>
                  <p>商务包</p>
				 <span style="color:#FF0066;font-weight:bold;">运动/旅行包</span>
				 <p>运动包 拉杆箱</p>
           </div>  
		     <div id="fenlei5">
				 <span style="color:#FF0066;font-weight:bold;">饰品</span>
                 <p>戒指 项链/吊坠/胸针 耳环耳钉</br> &nbsp;&nbsp;手链/手镯 脚链 发夹 套装</p>
				  <span style="color:#FF0066;font-weight:bold;">手表</span>
                 <p>手表</p>
                 <span style="color:#FF0066;font-weight:bold;">眼镜</span>
                  <p>眼镜 太阳镜</p>
				 <span style="color:#FF0066;font-weight:bold;">烟具</span>
				 <p> 烟具配件</p>
				 <span style="color:#FF0066;font-weight:bold;">珠宝玉具</span>
				 <p>珠宝挂饰 珠宝摆件</p> 
           </div>  
		   <div id="fenlei6">
				 <span style="color:#FF0066;font-weight:bold;">护肤品</span>
                 <p>洗面/洁面 化妆水 面部喷雾 精油 面膜 眼霜/眼膜 卸妆 去角质/磨砂 隔离霜/乳 套装组合 鼻贴膜 精华素</p>
                 <span style="color:#FF0066;font-weight:bold;">彩妆</span>
                  <p>眼影 散粉/蜜粉 眉笔/眉粉 BB霜 唇彩 护甲 睫毛膏 腮红/胭脂 遮瑕 粉底 眼线 彩妆组合</p>
				 <span style="color:#FF0066;font-weight:bold;">美体</span>
				 <p> 沐浴乳 美体 其它 足手部护理 身体润肤乳 口腔护理 磨砂膏</p>
				 <span style="color:#FF0066;font-weight:bold;">美发</span>
				 <p>洗头水 护发 头发造型</p> 
				  <span style="color:#FF0066;font-weight:bold;">香水/香卉系列</span>
				 <p>女性香水 香水套装 男性香水 香体膏 中性香水 身体香氛</p> 
           </div>  
		   <div id="fenlei7">
				 <span style="color:#FF0066;font-weight:bold;">数码电子</span>
                 <p>手机配件 数码配件</p>
                 <span style="color:#FF0066;font-weight:bold;">电子</span>
                  <p>电热水壶 电饭煲 加湿器 </br> &nbsp;&nbsp;电动剃须刀 搅拌机 电子按摩器 </br> &nbsp;&nbsp;咖啡机 电磁炉 电吹风 灭蚊器</br>  &nbsp;&nbsp;多士炉 豆浆机</p>
           </div>  
		   <div id="fenlei8">
				 <span style="color:#FF0066;font-weight:bold;">厨具/餐具</span>
                 <p>杯具 厨房刀具 烹饪锅具 厨房容器</br>  &nbsp;&nbsp;收纳用品 保鲜盒</p>
                 <span style="color:#FF0066;font-weight:bold;">寝具/浴具</span>
                  <p>床上用品 靠枕/抱枕 毛毯 </br> &nbsp;&nbsp;淋浴容器 卫浴</p>
				  <span style="color:#FF0066;font-weight:bold;">食品</span>
                  <p>保健食品 其他食品</p>
				  <span style="color:#FF0066;font-weight:bold;">刀具</span>
                  <p>军刀</p>
           </div>  
		   <div id="fenlei9">
				 <span style="color:#FF0066;font-weight:bold;">文具</span>
                 <p>笔类 文具盒/笔袋 学生书包</p>
                 <span style="color:#FF0066;font-weight:bold;">运动用品</span>
                  <p>户外用品 健身产品</p>
				  <span style="color:#FF0066;font-weight:bold;">玩具</span>
                  <p>益智玩具</p>
           </div>  
	</div>
		 </span></a></li>
	</ul>
</div>
    
	
<!--PPt部分-->
<div id="container">
		<ul class="container">
			<li class="OUL"><a href="#"><img src="ppt1%20(1).png" alt="" id="IMG"></a></li>
			<li class="OUL"><a href="#"><img src="ppt1%20(2).png" alt="" id="IMG"></a></li>
			<li class="OUL"><a href="#"><img src="ppt1%20(3).png" alt="" id="IMG"></a></li>
		</ul>
	</div>



	<div id="picture">
	   <span><a><img src="p1.jpg"></a></span>
	   <span><a><img src="p2.jpg"></a></span>
	   <span><a><img src="p3.jpg"></a></span>
	   <span><a><img src="p4.jpg"></a></span>
	</div>
	</br>
   <div id="picture2">
   </br>
   <span id="picture21"><a><img src="p5.jpg"></a></span>
   <span id="picture22"><a href="#">新鲜出炉 <唯品会抢购秘籍></a></span>
   </div>
     <!--下拉部分-->
	 </br>
	 <div id="XIALA">
	 <div id="XIALA1">
	 <div id="xiala">
	      <div>
		     <span id="span1">
			    <ul>
				    <li><a href="#"><img src="p6.jpg"></a></li>
				     <li><a href="#" title="CLASS ROBERTO CAVALLI女装特场"><img src="p7.jpg"></a></li>
				     <li><a href="#"><span style="padding-left:90px;"><img src="p8.jpg"></span></a></li>
				    <li><span id="oli"></span></li>
				</ul>
			 </span>
			    <span id="span2"><a href="#"><img src="p9.jpg"></a></span>
		  </div>
		  </div>
		
		<div id="xiala1">
		</br>
	      <div>
		     <span id="span21">
			    <ul>
				    <li><a href="#"><img src="pp1.jpg"></a></li>
				     <li><a href="#" title="捷曦JC COLLEZIONE女鞋专场"><img src="pp2.jpg"></a></li>
				     <li><a href="#"><span style="padding-left:90px;"><img src="pp3.jpg"></span></a></li>
				    <li><span id="oli1"></span></li>
				</ul>
				</span>
			<span id="span22"><a href="#"><img src="pp4.jpg"></a></span>
		 </div>
	 </div>

	 
	 <div id="xiala2">
		</br>
	      <div>
		     <span id="span31">
			    <ul>
				    <li><a href="#"><span style="padding-left:60px;"><img src="pp5.jpg"></span></a></li>
				     <li><a href="#" title="捷曦JC COLLEZIONE女鞋专场"><img src="pp6.jpg"></a></li>
				     <li><a href="#"><span style="padding-left:70px;"><img src="pp7.jpg"></span></a></li>
				    <li><span id="oli2"></span></li>
				</ul>
				</span>
			<span id="span32"><a href="#"><img src="pp8.jpg"></a></span>
		 </div>
	 </div>
	 
	 <div id="xiala3">
		</br>
	      <div>
		     <span id="span41">
			    <ul>
				    <li><a href="#"><img src="pp9.jpg"></a></li>
				     <li><span style="padding-left:30px;"><a href="#" title="捷曦JC COLLEZIONE女鞋专场"><img src="pp10.jpg"></span></a></li>
				     <li><a href="#"><span style="padding-left:70px;"><img src="pp11.jpg"> </br></span></a></li>
				     <li><span id="oli3"></span></li>
				</ul>
				</span>
			<span id="span42"><a href="#"><img src="pp12.jpg"></a></span>
		 </div>
	 </div>
	
	   <div id="xiala4">
		</br>
	      <div>
		     <span id="span51">
			    <ul>
				    <li><a href="#"><img src="pp13.jpg"></a></li>
				     <li><span style="padding-left:30px;"><a href="#" title="捷曦JC COLLEZIONE女鞋专场"><img src="pp14.jpg"></span></a></li>
				     <li><a href="#"><span style="padding-left:70px;"><img src="pp15.jpg"> </br></span></a></li>
				     <li><span id="oli4"></span></li>
				</ul>
				</span>
			<span id="span52"><a href="#"><img src="pp16.jpg"></a></span>
		 </div>
	 </div>
	 </div>
	 
	 <div id="XIALA2">
	   <ul>
	     <li id="XIALA2-first"><a href="#"><img src="ppt4.jpg"></a></li>
		  <li  id="XIALA2-second"><a href="#"><img src="ppt5.jpg"></a></li>
	   </ul>
	 </div>
	 </div>
	 
    <div id="weibu"><span><img src="w1.jpg"</span><span><img src="w2.jpg"</span><span><img src="w3.jpg"</span><span><img src="w4.jpg"</span><span>
   <img src="w5.jpg"</span><span><img src="w6.jpg"</span><span><img src="w7.jpg"</span></div>
   
   <div id="weibu2">
      <span>
	      &nbsp;&nbsp;&nbsp;服务保障
            <ul class="weibu" id="weibubu">
			     <li>正品保证</li>
				  <li>7天无理由放心退货</li>
				   <li>退货返运费</li>
				    <li>7X15小时客户服务</li>
			</ul>
      </span>
	   <span >
	   购物指南
            <ul class="weibu">
			     <li>导购演示</li>
				  <li>订单操作</li>
				   <li>会员注册</li>
				    <li>账户管理</li>
					 <li>收货样品</li>
					  <li>会员等级</li>
			</ul>
      </span>
	   <span >
	   支付方式
            <ul class="weibu">
			     <li>23家主流网银支付</li>
				  <li>货到付款</li>
				   <li>支付宝、银联等支付</li>
				    <li>信用卡支付</li>
					 <li>唯品钱包支付</li>
			</ul>
      </span>
	   <span>
	   配送方式
            <ul class="weibu">
			     <li>全场满288元免运费</li>
				  <li>配送范围及运费</li>
				   <li>验货与签收</li>
				   
			</ul>
      </span>
	   <span>
	   售后服务
            <ul class="weibu">
			     <li>退货政策</li>
				  <li>退货流程</li>
				   <li>退款方式和时效</li>
			</ul>
      </span>
	   <span style="padding-left:35px;">
	   唯品会客户端二维码
            <ul class="weibu3">
				   <li><img src="w8.jpg"></li>
			</ul>
			下载唯品会移动客户端
      </span>
   </div>
    <span style="padding-left:10px;">
	         唯品会微信二维码
            <ul class="weibu4">
				   <li> &nbsp;&nbsp;<img src="w9.jpg"> </li>  
			</ul>
			&nbsp;&nbsp;加唯品会为微信好友
      </span>
	  <div id="end"><span>关于我们 |</span><span>About us |</span><span>Investor Relations |</span>
	  <span>媒体报道 |</span><span>品牌招商 |</span><span>隐私条款 |</span><span>友情链接 |</span><span>唯品诚聘 |</span>
	  <span>365爱心基金 |</span><span>唯品卡 |</span><span>用户体验提示计划 |</span> <span>唯品地图 |</span>
	  <span>品牌大全 |</span><span>联系我们</span></div>
	  <div class="end">
	  <p>Copyright ? 2008-2014 vip.com，All Rights Reserved 粤ICP备08114786号 许可证：粤B2-20080329 使用本网站即表示接受唯品会用户协议。</p>
	  <p>版权所有 广州唯品会信息科技有限公司</p>
	  </div>
</body>
</html>



























