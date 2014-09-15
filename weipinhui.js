<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

<title>???</title>
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
//??o?¡ê???¨®-¨¤¡ä¦Ì?
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
   
   
   //¨¦¨¬?¡¤¡¤?¨¤¨¤
  
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
 
 
 //ppt2?¡¤?
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

	

	  
	//??¨¤-¨¢D¡À¨ª
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
	var datetime="????:"+day+"?"+hour+"?"+minute+"?"+second+"?";
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
   //ppt22?¡¤?
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
<!--?????-->
<div id="cebianlan"></div>
<img src="1.png" style="width:1300px" id="p1">

<div id="first">
<!--????-->
<div id="f-f"></div>
<!--????-->
<div id="f-t"  >
<ul>
 <li id="show1" ><a href="#"><span style="color:#FF0066">???</span></a></li>
  <li id="show2"><a href="#" id="weipintuan">???</a></li>
   <li id="show3" ><a href="#" id="shoujiban">???</a></li>
 </ul>
</div>
<!--??????-->
<div id="f-th">
<ul>
<li><img src="2.png"><span  style="font-weight:bold">400-6789-888</span></li>
<li><img src="3.png"><span style="font-size:12px;"><a href="#">????</a></span></li>
<li onmouseover="huiyuan()" onmouseout="huiyuan1()" id="huiyuan"><img src="4.png"><span style="font-size:12px;"><a href="#">????
<div id="caidan">
   <ul>
     <li><a href="#">????</a></li>
	 <li><a href="#">????</a></li>
	  <li><a href="#">?????</a></li>
   </ul>
</div>
</a></li>
</ul>
</div>
</div>
<!--????-->
<div id="four">
<ul>
<li><span style="padding-left:360px">??,???????!</span>?<a href="#"><span style="color:#FF0000">??</span></a></li>
<li><a href="#"><span style="color:#FF0066">????</span></a></li>
<li><a href="#">???</a></li>
<li onmouseover="shoucang()"  onmouseout="shoucang1()"><a href="#">??????
  <div id="shoucang">
       <ul >
	   <li><a href="#">??????</a></li>
	   </ul>
   </div>
</a></li>
<li onmouseover="dingdan()" onmouseout="dingdan1()"><a href="#">????
      <div id="dingdan">
       <ul >
	   <li><a href="#">????</a></li>
	   </ul>
      </div>
</a></li>
<li><a href="#">???</a></li>
<li><a href="#">????</a></li>
<li onmouseover="shishang()" onmouseout="shishang1()"><a href="#">???
      <div id="shishang">
       <ul >
	   <li><a href="#">????</a></li>
	   </ul>
      </div>
</a></li>
<li><a href="#">????</a></li>
<li><a href="#">??</a></li>
<li><a href="#">??</a></li>
</ul>
</div>




<!--???-->
<div id="wph">
<ul>
<li id="wph-first"><a href="#"><span style="color:#666666;font-size:16px;padding-left:50px;font-weight:bold;"><img src="5.png">??????????</span></a></li>
<li id="wph-second"><span style="font-size:14px;padding-left:650px;"><span style="font-weight:bold;color:#000000;padding-right:15px;">??</span>
<a href="#"><span id="qiehuan" style="color:#666666;" >????</span>
      <div id="shengfen">
	      <table width:400px;height:400px;cellspacing="0">
		<caption>???????</caption>
	
		  <tr class="tr">
		  <td class='leftside'> ????</td>
		  <td class='rightside'>?? ?? ?? ?? ???</td>
		  </tr>
		  <tr>
		  <td class='leftside'> ????</td>
		   <td class='rightside'>?? ?? ?? ?? ?? ??</td>
		  </tr >
		  <tr class="tr">
		  <td class='leftside'> ????</td>
		  <td class='rightside'>?? ?? ?? ?? ?? ?? ??</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> ????</td>
		  <td class='rightside'>?? ?? ?? ?? ??</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> ????</td>
		  <td class='rightside'>?? ?? ???</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> ????</td>
		  <td class='rightside'>?? ?? ?? ?? ??</td>
		  </tr>
		  <tr class="tr">
		  <td class='leftside'> ?????</td>
		  <td class='rightside'>?? ?? ??</td>
		  </tr>
		  <tr class="tr">
		  <td  colspan='8' style='line-height:26px;text-align:left;text-indent:2em;color:#343434;'">*??:????????,??????????????</td>
		  <td></td>
		  </tr>
		  </table>
	  </div>
</a></span></li>
	<li id="wph-third" style="padding-left:20px;"><a href="#"><img src="6.jpg">
    <div id="tupian">
	     <ul>
		     <li><span >??????????<br/>?????~</span></li>
		 </ul>
	</div>

</a></li>
</ul>

</div>
	
<div id="shouye">
    <ul>
	   
	   <li id="shouye1"><a href="#">&nbsp;&nbsp;??</a></li>
	   <li id="shouye2"><a href="#">????</a></li>
	    <li id="shouye3"><a href="#">????</a></li>
		 <li id="shouye4"><a href="#">????</a></li>
		 <li id="shouye5"><a href="#">????</a></li>
		 <li><span style="color:#FF0099">women</span></li>
		  <li><span style="color:#FF0099">women</span></li>
		 <li id="shouye6"><a href="#"><span style="font-size:12px;">??????
	<div id="fenlei">
	      <div id="fenlei1">
			    <ul>
				  <a href="#"><li id="fenlei-first"><img src="7.png"><span style="color:#000000;font-size:12px;">??</span></li></a>
				  <a href="#"><li id="fenlei-second"><img src="8.png"><span style="color:#000000;font-size:12px;">??</span></li></a>
				  <a href="#"><li id="fenlei-third"><img src="10.png"><span style="color:#000000;font-size:12px;">??</span></li></a>
				  <a href="#"><li id="fenlei-fourth"><img src="12.png"><span style="color:#000000;font-size:12px;">??</span></li></a>
				  <a href="#"><li id="fenlei-fifth"><img src="14.png"><span style="color:#000000;font-size:12px;">???</span></li></a>
				  <a href="#"><li id="fenlei-sixth"><img src="16.png"><span style="color:#000000;font-size:12px;">3C??</span></li></a>
				  <a href="#"><li id="fenlei-seventh"><img src="18.png"><span style="color:#000000;font-size:12px;">????</span></li></a>
				  <a href="#"><li id="fenlei-eighth"><img src="20.png"><span style="color:#000000;font-size:12px;">????</span></li></a>
				</ul>
			</div>
			<div id="fenlei2">
				 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>T? Polo ?? ?? ???</br>&nbsp;&nbsp;?? ?????? ???</br>&nbsp;&nbsp;??? ??(??) ??</p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>T? Polo ??? ?? ??</br> &nbsp;&nbsp;?? ??? ??? ???</br>&nbsp; ?? ?? ??</p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>???? ??T? ?????</br> &nbsp;&nbsp;????? ??? ????</br> &nbsp;&nbsp;??T? ??
                  ??? ????</br>&nbsp;&nbsp;???? ???</p>
           </div>  
		   <div id="fenlei3">
				 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>??? ?? ?? ?? ??</br>&nbsp;&nbsp;?? ??? ??? ???</br>&nbsp;&nbsp;???</p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>??? ?? ??? ??</br> &nbsp;&nbsp;??? ? ??</br></p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>???? ???? ????</br> &nbsp;&nbsp;????? ???? ????</br> &nbsp;&nbsp;???? ????? ?????
                </br>&nbsp;&nbsp;???? ????</p>
           </div>  
		   <div id="fenlei4">
				 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>?? ??? ?? ?? ??</p>
				  <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>?? ??/?? ??</p>
                 <span style="color:#FF0066;font-weight:bold;">???</span>
                  <p>???</p>
				 <span style="color:#FF0066;font-weight:bold;">??/???</span>
				 <p>??? ???</p>
           </div>  
		     <div id="fenlei5">
				 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>?? ??/??/?? ????</br> &nbsp;&nbsp;??/?? ?? ?? ??</p>
				  <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>??</p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>?? ???</p>
				 <span style="color:#FF0066;font-weight:bold;">??</span>
				 <p> ????</p>
				 <span style="color:#FF0066;font-weight:bold;">????</span>
				 <p>???? ????</p> 
           </div>  
		   <div id="fenlei6">
				 <span style="color:#FF0066;font-weight:bold;">???</span>
                 <p>??/?? ??? ???? ?? ?? ??/?? ?? ???/?? ???/? ???? ??? ???</p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>?? ??/?? ??/?? BB? ?? ?? ??? ??/?? ?? ?? ?? ????</p>
				 <span style="color:#FF0066;font-weight:bold;">??</span>
				 <p> ??? ?? ?? ????? ????? ???? ???</p>
				 <span style="color:#FF0066;font-weight:bold;">??</span>
				 <p>??? ?? ????</p> 
				  <span style="color:#FF0066;font-weight:bold;">??/????</span>
				 <p>???? ???? ???? ??? ???? ????</p> 
           </div>  
		   <div id="fenlei7">
				 <span style="color:#FF0066;font-weight:bold;">????</span>
                 <p>???? ????</p>
                 <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>???? ??? ??? </br> &nbsp;&nbsp;????? ??? ????? </br> &nbsp;&nbsp;??? ??? ??? ???</br>  &nbsp;&nbsp;??? ???</p>
           </div>  
		   <div id="fenlei8">
				 <span style="color:#FF0066;font-weight:bold;">??/??</span>
                 <p>?? ???? ???? ????</br>  &nbsp;&nbsp;???? ???</p>
                 <span style="color:#FF0066;font-weight:bold;">??/??</span>
                  <p>???? ??/?? ?? </br> &nbsp;&nbsp;???? ??</p>
				  <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>???? ????</p>
				  <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>??</p>
           </div>  
		   <div id="fenlei9">
				 <span style="color:#FF0066;font-weight:bold;">??</span>
                 <p>?? ???/?? ????</p>
                 <span style="color:#FF0066;font-weight:bold;">????</span>
                  <p>???? ????</p>
				  <span style="color:#FF0066;font-weight:bold;">??</span>
                  <p>????</p>
           </div>  
	</div>
		 </span></a></li>
	</ul>
</div>
    
	
<!--PPt??-->
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
   <span id="picture22"><a href="#">???? <???????></a></span>
   </div>
     <!--????-->
	 </br>
	 <div id="XIALA">
	 <div id="XIALA1">
	 <div id="xiala">
	      <div>
		     <span id="span1">
			    <ul>
				    <li><a href="#"><img src="p6.jpg"></a></li>
				     <li><a href="#" title="CLASS ROBERTO CAVALLI????"><img src="p7.jpg"></a></li>
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
				     <li><a href="#" title="??JC COLLEZIONE????"><img src="pp2.jpg"></a></li>
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
				     <li><a href="#" title="??JC COLLEZIONE????"><img src="pp6.jpg"></a></li>
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
				     <li><span style="padding-left:30px;"><a href="#" title="??JC COLLEZIONE????"><img src="pp10.jpg"></span></a></li>
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
				     <li><span style="padding-left:30px;"><a href="#" title="??JC COLLEZIONE????"><img src="pp14.jpg"></span></a></li>
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
	      &nbsp;&nbsp;&nbsp;????
            <ul class="weibu" id="weibubu">
			     <li>????</li>
				  <li>7????????</li>
				   <li>?????</li>
				    <li>7X15??????</li>
			</ul>
      </span>
	   <span >
	   ????
            <ul class="weibu">
			     <li>????</li>
				  <li>????</li>
				   <li>????</li>
				    <li>????</li>
					 <li>????</li>
					  <li>????</li>
			</ul>
      </span>
	   <span >
	   ????
            <ul class="weibu">
			     <li>23???????</li>
				  <li>????</li>
				   <li>?????????</li>
				    <li>?????</li>
					 <li>??????</li>
			</ul>
      </span>
	   <span>
	   ????
            <ul class="weibu">
			     <li>???288????</li>
				  <li>???????</li>
				   <li>?????</li>
				   
			</ul>
      </span>
	   <span>
	   ????
            <ul class="weibu">
			     <li>????</li>
				  <li>????</li>
				   <li>???????</li>
			</ul>
      </span>
	   <span style="padding-left:35px;">
	   ?????????
            <ul class="weibu3">
				   <li><img src="w8.jpg"></li>
			</ul>
			??????????
      </span>
   </div>
    <span style="padding-left:10px;">
	         ????????
            <ul class="weibu4">
				   <li> &nbsp;&nbsp;<img src="w9.jpg"> </li>  
			</ul>
			&nbsp;&nbsp;?????????
      </span>
	  <div id="end"><span>???? |</span><span>About us |</span><span>Investor Relations |</span>
	  <span>???? |</span><span>???? |</span><span>???? |</span><span>???? |</span><span>???? |</span>
	  <span>365???? |</span><span>??? |</span><span>???????? |</span> <span>???? |</span>
	  <span>???? |</span><span>????</span></div>
	  <div class="end">
	  <p>Copyright © 2008-2014 vip.com,All Rights Reserved ?ICP?08114786? ???:?B2-20080329 ??????????????????</p>
	  <p>???? ?????????????</p>
	  </div>
</body>
</html>



























