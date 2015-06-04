/******************/
/***实用JS函数库***/
/******************/
/***获取字符串长度 中文算2 英文算1***/
function GetCharLength(str)
{
    var iLength = 0;
    for(var i = 0;i<str.length;i++)
    {
        if(str.charCodeAt(i) >255)
        {
            iLength += 2;
        }
        else
        {
            iLength += 1;
        }
    }
    return iLength;
}
/***获取网页中的控件***/
//var $ =function(ID){return document.getElementById(ID);};
/***去除字符串两边的空格***/
String.prototype.Trim=function()
{
     return this.replace(/(^\s*)|(\s*$)/g, "");
}
///***重定义精确度函数***/
//Number.prototype.toFixed   =   function(len)   
//{   
//    var a=Math.round(this   *   Math.pow(10,len))/Math.pow(10,len);
//    var b=a+"";
//    var c=b.split(".");
//    var d="0000000000";
//    if(c.length==1)
//    {
//        if(len==0)
//            b=c[0];
//        else
//            b=c[0]+"."+d.substr(0,len);
//    }
//    else
//    {
//        b=c[0]+"."+(c[1]+d).substr(0,len);
//    }
//    return b;
//}
function accAdd(arg1,arg2)
{
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m = Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

function accSub(arg1,arg2)
{
     var r1,r2,m,n;
     try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
     try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
     m=Math.pow(10,Math.max(r1,r2));
     //last modify by deeka
     //动态控制精度长度
     n=(r1>=r2)?r1:r2;
     return ((arg1*m-arg2*m)/m).toFixed(n);
}

function accMul(arg1,arg2) 
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

function accDiv(arg1,arg2)
{
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    with(Math)
    {
        r1=Number(arg1.toString().replace(".",""))
        r2=Number(arg2.toString().replace(".",""))
        return (r1/r2)*pow(10,t2-t1);
    }
} 

function getElementsByName1(name,tag) {
              var returns = document.getElementsByName(name);
              if(returns.length > 0) return returns;
              returns = new Array();
              var e = document.getElementsByTagName(tag);
              for(i = 0; i < e.length; i++) {
                            if(e[i].getAttribute("name") == name) {
                                          returns[returns.length] = e[i];
                            }
              }
              return returns;
}
/***自定义去小数末尾0的方法***/
Number.prototype.Save   =   function(MinLen)   
{   
    var Num1=this.toFixed(5).split(".");
    var Num2=Num1[1]
    var MaxLen=Num2.length;
    var Len=MinLen;
    for(var i=MaxLen;i>=MinLen;i--)
    {
        if(Num2.substr(i-1,1)!="0")
        {
            Len=i;
            break;
        }
    }
    return Num1[0]+"."+Num1[1].substr(0,Len);
} 
/***获取网页地址栏参数***/
function QueryStringUrl(key)
{
	var locString = location.search;
	var reg = new RegExp("(\\?|\\&)" + key + "=([^\\&]*)(\\&?)","i").exec(locString);
	if(reg!=null)
	{
	    return RegExp.$2;
	}
	else
	{
	    return "";
	}
}
/***获取客户浏览器类型***/
function BrowserType()
{
    var IeType="";
	try
	{
		var _Agt = navigator.userAgent.toLowerCase();
		var _bs  = /(firefox|netscape|opera|chrome|msie|safari).?[\d\.]+/.exec(_Agt);
		IeType=_bs[0];
	}
	catch (e)
	{
		IeType="Browser_Error";
	}
	return IeType;
}
/***验证手机号码***/
function RegMobileNo(strMobileNo)
{
    var regMobileNo=/^[0-9]{11}$/;
    if(regMobileNo.test(strMobileNo))
    {
        return true;
    }
    else
    {
        return false;
    }
}

/***验证邮箱***/
function RegEmail(strEmail)
{
    var regEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(regEmail.test(strEmail))
    {
        return true;
    }
    else
    {
        return false;
    }
}
/***验证中文***/
function RegChina(strChina)
{
    var regChina=/[\u0391-\uFFE5]/;
    if(regChina.test(strChina))
    {
        return true;
    }
    else
    {
        return false;
    }
}
/***日期比较***/
function CompareDate(parDate1,parDate2)
{
    var strDate1=parDate1.split("-");
    var strDate2=parDate2.split("-");
    var strYear1=strDate1[0];
    var strMonth1=strDate1[1];
    var strDay1=strDate1[2];
    var strYear2=strDate2[0];
    var strMonth2=strDate2[1];
    var strDay2=strDate2[2];
	var datDate1=new Date(strYear1,strMonth1,strDay1);
	var datDate2=new Date(strYear2,strMonth2,strDay2);  
	if(datDate2<datDate1)
	{
	    return true;
	}
	else
	{
	    return false;
	}
}
/***验证是否为钱单位***/
function RegCurrency(strCurrency)
{
    var regsCurrency= /^\d+(\.\d+)?$/;
    if(regsCurrency.test(strCurrency))
    {
        return true;
    }
    else
    {
        return false;
    }
}

/***验证数字***/
function RegNumber(strNumber)
{
    var regNumber=/^\d+$/;
    if(regNumber.test(strNumber))
    {
        return true;
    }
    else
    {
        return false;
    }
}
/***验证数值***/
function RegDouble(strDouble)
{
    var regDouble=/^[-\+]?\d+(\.\d+)?$/;
    if(regDouble.test(strDouble))
    {
        return true;
    }
    else
    {
        return false;
    }
}
/***验证日期***/
function RegDate(strDate)
{
    var regDate=/^([0-9]{1,2})[./]{1}([0-9]{1,2})[./]{1}([0-9]{4})$/;
    if(regDate.test(strDate))
    {
        return true;
    }
    else
    {
        return false;
    }
}
//清除字符串两头的空格
function Trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g, "");   
}

/***回车事件***/
function EventEnter(evt,para,option)
{
	evt = evt ? evt : (window.event ? window.event : null);
	if(evt.keyCode == 13)
	{
		switch(para)
		{
			case 0:
				document.getElementById(option).focus();
				break;
			case 1:
				eval(option);
				break;
		}
		return false;
	}
}
/***禁用F5按键***/
var booStopF5=true;
/***屏蔽回车和F5***/
function CheckKeyDown(e)
{
    e=e||window.event;
    if((e.which||e.keyCode)==116&&booStopF5)
    {
        if(e.preventDefault)
        {
            e.preventDefault();
        }
        else
        {
            event.keyCode = 0;
            e.returnValue=false;
        } 
    }
    else
    {
        var evtnode=e.srcElement?e.srcElement:e.target;
        if((e.which||e.keyCode)==13&&evtnode.nodeName != "TEXTAREA")
        {
            return false;
        }
    }
}
/***网页路径***/
var strWebPath="";
/***检查路径***/
function CheckPath()
{
    var Path="";
    var CurrentPath=window.location.href.split("&")[0].split("/");
    var len1=5;
    if(document.domain.indexOf("localhost")==-1)
    {
        len1=4;
    }
    var len=CurrentPath.length-len1;
    for(var i=0;i<len;i++)
    {
        Path+="../";
    }
    return Path;
}
/***下拉框初始化***/
function DropInit(ID,Value,Text)
{
    document.getElementById(ID).options.length=0;	
    document.getElementById(ID).options.add(document.createElement("OPTION")); 
    document.getElementById(ID).options[0].text=Text; 
    document.getElementById(ID).options[0].value=Value;
}
/***显示DIV***/
function ShowDiv(ID)
{
    document.getElementById(ID).style.display = "";
}
/***隐藏DIV***/
function HiddenDiv(ID)
{
    document.getElementById(ID).style.display = "none";
}
/***空函数***/
function NullFunction()
{
    ;
}
/***分离鼠标事件***/
function DetachMouseOutEvent(ID)
{
    document.getElementById(ID).onmouseout =
    function()
    { 
        NullFunction();
    }
}
/***用户控件绝对定位***/
function PositionLayer(SourceID,DestID,OffsetTop,OffsetLeft)
{
	var tbMenu=document.getElementById(SourceID);
	var tdId=document.getElementById(DestID);
	var MenuStyle =tbMenu.style; 
	var MeTop = tdId.offsetTop;
	var MeLeft = tdId.offsetLeft;
	while (tdId = tdId.offsetParent)
	{
		MeTop+=tdId.offsetTop;
		MeLeft+=tdId.offsetLeft;
	} 
	MenuStyle.top=Number(MeTop+OffsetTop)+"px";
	MenuStyle.left = Number(MeLeft+OffsetLeft)+"px"; 
}
/***xmlhttpPOST值***/
var strPostValue=null;
/***xmlHttp调用[异步]***/
function RequestXML(strUrl,strIpnComplete,strIpnError)
{
    var xmlHttp;
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHttp");        
    }
    else
    {
        if(window.XMLHttpRequest)
        {
            xmlHttp=new XMLHttpRequest();
        }
    }
    xmlHttp.open("Post",strUrl,true)
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange=function()
    {
        ResponseXML(xmlHttp,strIpnComplete,strIpnError)
    }
    xmlHttp.send(strPostValue);
    strPostValue=null;
}
/***xmlHttp调用[同步]***/
function RequestXML1(strUrl,strIpnComplete,strIpnError)
{
    var xmlHttp;
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHttp");        
    }
    else
    {
        if(window.XMLHttpRequest)
        {
            xmlHttp=new XMLHttpRequest();
        }
    }
    xmlHttp.open("Post",strUrl,false)
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(strPostValue);
    /***结果处理***/
    if(xmlHttp.readyState==4)
    {
	    var intStatus = xmlHttp.status;
	    if(intStatus==200)
	    {
		    eval(strIpnComplete);
	    }
	    else
	    { 
		    eval(strIpnError);
	    }
	}    
}
/***xmlHttp结果***/
function ResponseXML(xmlHttp,strIpnComplete,strIpnError)
{
    if(xmlHttp.readyState==4&&xmlHttp.status==200)
    {
        eval(strIpnComplete);
    }
    else
    {
        if(xmlHttp.readyState==4&&xmlHttp.status==404)
        {
            eval(strIpnError);
        }
    }
}


/*****************/
/***XmlHttp调用***/
/*****************/

/***xmlHttp调用[异步]***/
function RequestJson(strUrl,strPostValue,strFuntionName)
{
    var xmlHttp;
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHttp");        
    }
    else
    {
        if(window.XMLHttpRequest)
        {
            xmlHttp=new XMLHttpRequest();
        }
    }
    xmlHttp.open("Post",strUrl,true)
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange=function()
    {
        ResponseJson(xmlHttp,strFuntionName)
    }
    xmlHttp.send(strPostValue);
}
/***xmlHttp调用[同步]***/
function RequestJson1(strUrl,strPostValue,strFuntionName)
{
    var xmlHttp;
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHttp");        
    }
    else
    {
        if(window.XMLHttpRequest)
        {
            xmlHttp=new XMLHttpRequest();
        }
    }
    xmlHttp.open("Post",strUrl,false)
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(strPostValue);
    /***结果处理***/
    if(xmlHttp.readyState==4)
    {
	    var intStatus = xmlHttp.status;
	    if(intStatus==200)
	    {
		    eval(strFuntionName);
	    }
	    else
	    { 
		    alert("程序异常，找不到被调用的页面。");
	    }
	}    
}
/***xmlHttp结果***/
function ResponseJson(xmlHttp,strFuntionName)
{
    if(xmlHttp.readyState==4&&xmlHttp.status==200)
    {
        eval(strFuntionName);
    }
    else
    {
        if(xmlHttp.readyState==4&&xmlHttp.status==404)
        {
            alert("程序异常，找不到被调用的页面。");
        }
    }
}
function LoadJsFile1(strUrl,strFunction)
{
    var datTime = new Date();
    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = strUrl+"?Time="+datTime.getTime();
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = script.onreadystatechange = (function(script){
    var _this = this;
        return (function(){
            if(script.readyState)
            {
                if(script.readyState.match(/loaded|complete/i))
                {
                    eval(strFunction);
                    _this = script = null;
                }
             }
             else
             {
                   eval(strFunction);
                   _this = script = null;
             }
        });
    }).call(this, script);
}
/***加载JS***/
function LoadJsFile(strUrl)
{
    var datTime = new Date();
    var eleUrl=document.createElement("script");
    eleUrl.setAttribute("type","text/javascript");
    eleUrl.setAttribute("src", strUrl+"?Time="+datTime.getTime());
    document.body.appendChild(eleUrl);
}
/***IFRAME窗口的高度自适应***/
function ReSize(parIframe)
{    
    var ifrFrame = document.getElementById(parIframe);
    try
    {
        var intHeight1 = ifrFrame.contentWindow.document.body.scrollHeight;
        var intHeight2 = ifrFrame.contentWindow.document.documentElement.scrollHeight;
        var intHeight = Math.max(intHeight1, intHeight2);
        ifrFrame.height =  intHeight;
    }
    catch (ex)
    {
        ;
    } 
}
/***DIV对齐***/
function DivAlign(SourceID,DestID,OffsetHeight)
{
    var intSourceHeight=document.getElementById(SourceID).clientHeight;
    var intDestHeight=document.getElementById(DestID).clientHeight;
    if(intDestHeight<=intSourceHeight)
    {
        document.getElementById(DestID).style.height=Number(document.getElementById(SourceID).clientHeight+OffsetHeight)+"px";
    }
    else
    {
        document.getElementById(SourceID).style.height=Number(intDestHeight+OffsetHeight)+"px";
    }
}
/***关闭当前窗口***/
function CloseWindow()
{
    window.opener=null;
    window.self.close();
}
/***关闭父窗口***/
function CloseParentWindow()
{
    top.window.opener=null;
    top.window.self.close();
}
/***当前页号，每页记录数，总记录数***/
var intPageIndex=1;
var intPageSize=20;
var intRecordCount=0;
/***页码列表***/
function PageList(strFunName)
{
    /***总页数***/
    var intPageCount=parseInt((parseInt(intRecordCount)+parseInt(intPageSize)-1)/parseInt(intPageSize));
    if(intPageCount<=1)
    {
        return "";
    }
    /***页码距***/
    var intPageCurrent = 10;
    /***起始页码***/
    var intStartPage= (parseInt((intPageIndex+intPageCurrent-1)/intPageCurrent)-1)*intPageCurrent+1;
    /***结束页码***/
    var intEndPage=intStartPage+intPageCurrent-1;
    if(intPageIndex%intPageCurrent==0)
    {
        intStartPage++;
        intEndPage++;
    }
    if(intPageIndex%intPageCurrent-1==0&&intPageIndex!=1)
    {
        intStartPage--;
        intEndPage--;
    }
    if(intEndPage>=intPageCount)
    {
        intEndPage=intPageCount;
    }
    /***上一页，下一页***/
    var intUpPage=intPageIndex-1;
    var intDownPage=intPageIndex+1;
    var strUpPage="<img style='cursor:pointer;' onclick=\""+strFunName+"("+intUpPage+")\" src=\""+strWebPath+"Images/Icon/PagePre.gif\" />";
    var strDownPage="<img style='cursor:pointer;' onclick=\""+strFunName+"("+intDownPage+")\" src=\""+strWebPath+"Images/Icon/PageNext.gif\" />";
    if(intUpPage<1)
    {
        intUpPage=1;
        strUpPage="";
    }
    if(intDownPage>intPageCount)
    {
        intDownPage=intPageCount;
        strDownPage="";
    }
    /***生成页码列表***/
    var strPageList="<div class=\"pageInde\">"+strUpPage;		
    for(var i=intStartPage;i<=intEndPage;i++)
    {
        if(intPageIndex==i)
        {
            /***当前页码***/
            strPageList+="<span class=\"thisPage\">"+i+"</span>";
        }
        else
        {
            strPageList+="<a href=\"javascript:"+strFunName+"("+i+");\">"+i+"</a>";
        }
    }
    strPageList=strPageList+strDownPage+"</div>";
    strPageList+="总共："+intRecordCount+"&nbsp;条&nbsp;&nbsp;共："+intPageCount+"&nbsp;&nbsp;页&nbsp;当前第："+intPageIndex+"&nbsp;页";
    return strPageList;
}
/***页码列表***/
function PageList1(strFunName,parPageIndex,parPageSize,parRecordCount)
{
    /***总页数***/
    var intPageCount=parseInt((parseInt(parRecordCount)+parseInt(parPageSize)-1)/parseInt(parPageSize));
    if(intPageCount<=1)
    {
        return "";
    }
    /***页码距***/
    var intPageCurrent = 10;
    /***起始页码***/
    var intStartPage= (parseInt((parPageIndex+intPageCurrent-1)/intPageCurrent)-1)*intPageCurrent+1;
    /***结束页码***/
    var intEndPage=intStartPage+intPageCurrent-1;
    if(parPageIndex%intPageCurrent==0)
    {
        intStartPage++;
        intEndPage++;
    }
    if(parPageIndex%intPageCurrent-1==0&&parPageIndex!=1)
    {
        intStartPage--;
        intEndPage--;
    }
    if(intEndPage>=intPageCount)
    {
        intEndPage=intPageCount;
    }
    /***上一页，下一页***/
    var intUpPage=parPageIndex-1;
    var intDownPage=parPageIndex+1;
    var strUpPage="<img style='cursor:pointer;' onclick=\""+strFunName+"("+intUpPage+")\" src=\""+strWebPath+"Images/Icon/PagePre.gif\" />";
    var strDownPage="<img style='cursor:pointer;' onclick=\""+strFunName+"("+intDownPage+")\" src=\""+strWebPath+"Images/Icon/PageNext.gif\" />";
    if(intUpPage<1)
    {
        intUpPage=1;
        strUpPage="";
    }
    if(intDownPage>intPageCount)
    {
        intDownPage=intPageCount;
        strDownPage="";
    }
    /***生成页码列表***/
    var strPageList="<div class=\"pageInde\">"+strUpPage;		
    for(var i=intStartPage;i<=intEndPage;i++)
    {
        if(parPageIndex==i)
        {
            /***当前页码***/
            strPageList+="<span class=\"thisPage\">"+i+"</span>";
        }
        else
        {
            strPageList+="<a href=\"javascript:"+strFunName+"("+i+");\">"+i+"</a>";
        }
    }
    strPageList=strPageList+strDownPage+"</div>";
    strPageList+="总共："+parRecordCount+"&nbsp;条&nbsp;&nbsp;共："+intPageCount+"&nbsp;&nbsp;页&nbsp;当前第："+parPageIndex+"&nbsp;页";
    return strPageList;
}
/****************/
/***图形验证码***/
/****************/

/***验证码Key列表***/
var arrValidateKeyList=new Array();
/***验证码图片ID列表***/
var arrValidateID=new Array();
/***验证码索引号***/
var intValidateIndex=-1;
/***加载验证码***/
function LoadValidateImg(ID)
{
    intValidateIndex=GetValidateIndex(ID);
    var datTime = new Date();    
    var strUrl=strWebPath+"DynamicJs/AspxCommonValidateImg.js?Time="+datTime.getTime();
    LoadJsFile(strUrl);
}
/***注册异步调用***/
function IpnValidateImg(strDynamicKey,strDynamicFormula)
{
    var datTime = new Date();
    var strValidateKey=datTime.getTime();
    var strDynamicUrl=strWebPath+"DynamicAspx/AspxCommonValidateImg"+strDynamicKey+eval(strDynamicFormula)+".aspx?Key="+strValidateKey; 
    arrValidateKeyList[intValidateIndex]=strValidateKey;
    document.getElementById(arrValidateID[intValidateIndex]).src=strDynamicUrl;
}
/***图片地址错误***/
function ErrorValidateImg(ID)
{
    document.getElementById(ID).src=strWebPath+"Images/Icon/null.gif";
    setTimeout("LoadValidateImg(\""+ID+"\")", 1000);
}
/***获取图片索引号***/
function GetValidateIndex(ID)
{
    var intTempValidateIndex=-1;
    var booFind=false;
    for(var i=0;i<arrValidateID.length;i++)
    {
        intTempValidateIndex=i;
        if(arrValidateID[i]==ID)
        {
            booFind=true;
            break;
        }
        else
        {
            booFind=false;
        }
    }
    if(!booFind)
    {
        intTempValidateIndex++;
        arrValidateID[intTempValidateIndex]=ID;
    }
    return intTempValidateIndex;   
}

/***加载验证码***/
function LoadValidateImgV2(ID)
{
    /***验证码对应的索引号***/
    intValidateIndex=GetValidateIndexV2(ID);
    var datTime = new Date();
    var strValidateKey=datTime.getTime();
    var strUrl=strWebPath+"AspxCommon/ValidateImg.aspx?Key="+strValidateKey; 
    arrValidateKeyList[intValidateIndex]=strValidateKey;
    document.getElementById(arrValidateID[intValidateIndex]).src=strUrl;
}
/***图片地址错误***/
function ErrorValidateImgV2(ID)
{
    document.getElementById(ID).src=strWebPath+"Images/Icon/null.gif";
    setTimeout("LoadValidateImgV2(\""+ID+"\")", 1000);
}
/***获取图片索引号***/
function GetValidateIndexV2(ID)
{
    var intTempValidateIndex=-1;
    var booFind=false;
    for(var i=0;i<arrValidateID.length;i++)
    {
        intTempValidateIndex=i;
        if(arrValidateID[i]==ID)
        {
            booFind=true;
            break;
        }
        else
        {
            booFind=false;
        }
    }
    if(!booFind)
    {
        intTempValidateIndex++;
        arrValidateID[intTempValidateIndex]=ID;
    }
    return intTempValidateIndex;   
}


/***清除搜索关键字***/
function ClearInputText(strID,strText)
{
    if(document.getElementById(strID).value==strText)
    {
        document.getElementById(strID).value="";
    }
}
/**************/
/***动态页面***/
/**************/

/***命令队列***/
var arrCommand=new Array();
/***命令锁***/
var booCommandLock=false;
/***命令函数***/
function Command(strCommandType)
{
    /***指令进栈***/
    var booPush=PushCommand(strCommandType);
     
    if(booPush)
    {
        var arrCommandType=strCommandType.split(".");
        
        var datTime = new Date();
        var strUrl=strWebPath+"DynamicJs/"+arrCommandType[0]+".js?Time="+datTime.getTime();
        LoadJsFile(strUrl);
    }
}
/***异步执行命令***/
function IpnCommand(strDynamicKey,strDynamicFormula,strWebPage)
{
    if(strWebPage=="AspxCommonValidateImg")
    {
        IpnValidateImg(strDynamicKey,strDynamicFormula);
    }
    else
    {
        /***指令出栈***/
        var strCommandType=PopCommand(strDynamicKey,strDynamicFormula,strWebPage);
        if(strCommandType!="")
        {
            var arrCommandType=strCommandType.split(".");  
            eval(arrCommandType[1]+"('"+strDynamicKey+"','"+strDynamicFormula+"')");
        }
    }
}

/***命令队列进栈***/
function PushCommand(strCommandType)
{
    var booPush=false;
    if(booCommandLock)
    {
        setTimeout("Command('"+strCommandType+"')",1000);
    }
    else
    {
        booCommandLock=true;
        var arrTempCommand=arrCommand;
        arrCommand=new Array();
        var j=0;
        for(var i=0;i<arrTempCommand.length;i++)
        {
            if(arrTempCommand[i]!="")
            {
                arrCommand[j]=arrTempCommand[i];
                j++;
            }
        }        
        arrCommand[j]=strCommandType;
        booCommandLock=false;
        booPush=true;
    }
    return booPush;
}
/***命令队列出栈***/
function PopCommand(strDynamicKey,strDynamicFormula,strWebPage)
{
    var strCommandType="";
    if(booCommandLock)
    {
        setTimeout("IpnCommand('"+strDynamicKey+"','"+strDynamicFormula+"','"+strWebPage+"')",1000);
    }
    else
    {
        booCommandLock=true;
        var arrTempCommand=arrCommand;
        arrCommand=new Array();
        var j=0;
        for(var i=0;i<arrTempCommand.length;i++)
        {
            if(arrTempCommand[i]!="")
            {
                if(strCommandType=="")
                {
                    strCommandType=arrTempCommand[i];
                }
                else
                {
                    arrCommand[j]=arrTempCommand[i];
                    j++;
                }
            }
        }
        booCommandLock=false;
    }
    return strCommandType;
}
function StringBuffer(){
	this._strings_=new Array;
}
StringBuffer.prototype.append=function(str){
	this._strings_.push(str);
};
StringBuffer.prototype.toString=function(){
	return this._strings_.join("");
};
/***获取随机数***/
function selectFrom(lowerValue,upperValue){
    var choices=upperValue-lowerValue+1;
    return Math.floor(Math.random() * choices+lowerValue);
}
/***分时调用程序***/
function chunk(array,process,context){
    setTimeout(function(){
        var item=array.shift();
        process.call(context,item);
        if(array.length>0){
            setTimeout(arguments.callee,100);
        }
     },100);
}
/***窗口自动适应***/
function IframeReSize(ifName,scrollHeight)
{ 
	var frm = document.getElementById(ifName); 
	if(scrollHeight>800)
	frm.height = scrollHeight;
	else
	frm.height = "800px";
}

/**跳转页面**/
function GoToUrl(url)
{
    window.location = strWebPath + url;
}

/**页面插入样式**/
function include_css(path)   
{       
    var fileref=document.createElement("link")   
    fileref.rel = "stylesheet";  
    fileref.type = "text/css";  
    fileref.href = path;   
}  

/**页面插入脚本**/
function include_js(path)   
{       
      var sobj = document.createElement('script');   
      sobj.type = "text/javascript";   
      sobj.src = path;   
      var headobj = document.getElementsByTagName('head')[0];   
      headobj.appendChild(sobj); 
}

/**页面插入脚本**/
function outclude_js(path)   
{       
      var sobj = document.createElement('script');   
      sobj.type = "text/javascript";   
      sobj.src = path;   
      var headobj = document.getElementsByTagName('head')[0];   
      headobj.removeChild(sobj); 
}

/**过去字符串中的html标签**/
function removeHTMLTag(str) 
{
      str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
      str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
      //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
//      str=str.replace(/&lt;/ig,'');
//      str=str.replace(/&gt;/ig,'');
//      str=str.replace(/[div|\/div]/g,'');
      str=str.replace(/&lt;[ -~]*&gt;/ig,'');//去掉替换后的<>标签
      return str;
}