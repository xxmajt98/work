var dtaSearchForum = null;
P_intPageIndex = 1;
P_intPageSize = 20;
P_intRecordCount = 0;
var P_Cat = 0;
var P_Sort = "";
var P_KwType = "";
var P_bool = true;
var P_isFrist = true;
var P_KeyWord = "";

function ForumList() {
    if (P_bool) {
        P_bool = false;
        var datTime = new Date();
        var strUrl = "";
        strUrl += "&PageIndex=" + P_intPageIndex;
        strUrl += "&PageSize=" + P_intPageSize;
        strUrl += "&KeyWord=" + P_KeyWord;
        strUrl += "&Cat=" + P_Cat;
        strUrl += "&Sort=" + P_Sort;
        strUrl += "&KwType=" + P_KwType;
        strUrl += "&Url=" + encodeURIComponent((window.location.href).split('#')[0]);
        var strOpenid = QueryStringUrl("openid");
        var strSubscribe = QueryStringUrl("subscribe");

        if (strOpenid != "") {
            strUrl += "&openid=" + strOpenid;
        }
        if (strSubscribe != "") {
            strUrl += "&subscribe=" + strSubscribe;
        }

        var shareid = QueryStringUrl("shareid");
        if (shareid != "") {
            strUrl += "&shareid=" + shareid;
        }
        strUrl = strWebPath + "AspxWeb/List.aspx?CommandType=list&Time=" + datTime.getTime() + strUrl;

        var strFuntionName = "ForumListComplete(xmlHttp)";
        RequestJson(strUrl, null, strFuntionName);
    }
}

function ForumListComplete(xmlHttp) {
    P_bool = true;
    var jsoResult = eval('(' + xmlHttp.responseText + ')');
    if (typeof (jsoResult.Value) != "undefined") {
        if (jsoResult.Value[0] == "17") {
            alert("系统繁忙，请重新打开该页面");
            return;
        }
    }
    else {
        var dtaResult = jsoResult.Tables[0];
        P_intRecordCount = dtaResult.Rows[0][1];
        dtaSearchForum = jsoResult.Tables[1];
        var dtRecommend = jsoResult.Tables[2];
        var dtShare = jsoResult.Tables[3];
        if (P_isFrist) {
            if (typeof (dtRecommend) != "undefined") {
                Recommend(dtRecommend);
            }
            P_isFrist = false;
        }
        NewList();
    }
}

function Recommend(dtRecommend) {
    var strSearch = "";
    var strID = dtRecommend.Rows[0][0];
    var strName = dtRecommend.Rows[0][1];
    var strRecID = dtRecommend.Rows[0][2];
    var strTitle = dtRecommend.Rows[0][3];
    var strImage = dtRecommend.Rows[0][4];
    var strInfo = dtRecommend.Rows[0][5];
    var strKeyWord = dtRecommend.Rows[0][6];
    var strStartTime = dtRecommend.Rows[0][7];
    var strSeeCount = dtRecommend.Rows[0][8];
    var strScore = (dtRecommend.Rows[0][11] * 1).toFixed(2);
    var strAuditT = dtRecommend.Rows[0][10];
    //var strUrl = "name=" + encodeURIComponent(strName) + "&info=" + encodeURIComponent(strInfo) + "&image=" + encodeURIComponent(strImage) + "&title=" + encodeURIComponent(strTitle) + "&key=" + encodeURIComponent(strKeyWord) + "&see=" + strSeeCount + "&score=" + strScore + "&recID=" + strRecID + "&tId=" + strID;
    //<a href=\"TeacherFocus.html?id=" + strID + "\">
    strName = strName.length > 4 ? strName.substring(0, 4) + "..." : strName;
    strTitle = strTitle.length > 28 ? strTitle.substring(0, 28) + "..." : strTitle;
    strSearch += "<a href=\"TeacherZone.html?tId=" + strID + "\"><img src=\"http://121.41.81.51:100" + strImage + "\"></a><div class=\"box\">";
    strSearch += "<div class=\"mark\"><i class=\"fa fa-volume-up\"></i> 每日推荐</div><div class=\"name\"><p>" + strName + "</p></div>"; //<a  href=\"TeacherZone.html?id=" + strID + "\">导师空间>></a>
    strSearch += "<a href=\"Details.html?recID=" + strRecID + "&tId=" + strID + "\"><p>" + strTitle + "</p><div class=\"box-1\"><p><i class=\"fa fa-clock-o\"></i>" + strAuditT.substring(0, 20) + "</p>";
    strSearch += "<p><span><i class=\"fa fa-headphones\"></i><i>" + strSeeCount + " </i>人听过</span><span><i class=\"fa fa-star-o\"></i><i>" + strScore + "</i> 分</span></p></a></div></div>";
    $("#div_Recommend").html(strSearch);
}

function NewList() {
    var strSearch = "";
    for (var i = 0; i < dtaSearchForum.Rows.length; i++) {
        var strID = dtaSearchForum.Rows[i][1];
        var strName = dtaSearchForum.Rows[i][2];
        var strRecID = dtaSearchForum.Rows[i][3];
        var strTitle = dtaSearchForum.Rows[i][4];
        var strImage = dtaSearchForum.Rows[i][5];
        var strInfo = dtaSearchForum.Rows[i][6];
        var strKeyWord = dtaSearchForum.Rows[i][7];
        var strStartTime = dtaSearchForum.Rows[i][8];
        var strSeeCount = dtaSearchForum.Rows[i][9];
        var strScore = (dtaSearchForum.Rows[i][10] * 1).toFixed(2);
        var strAuditT = dtaSearchForum.Rows[i][11];
        //var strUrl = "name=" + encodeURIComponent(strName) + "&info=" + encodeURIComponent(strInfo) + "&image=" + encodeURIComponent(strImage) + "&title=" + encodeURIComponent(strTitle) + "&key=" + encodeURIComponent(strKeyWord) + "&see=" + strSeeCount + "&score=" + strScore + "&recID=" + strRecID + "&tId=" + strID;
        //strSearch += "<tr><td><a href=\"TeacherZone.html?id=" + strID + "\"><img src=\"http://121.41.81.51:100" + strImage + "\"> " + strName + "</a></td><td><a href=\"Details.html?" + strUrl + "\">" + strTitle + "</a></td></tr>";
        strName = strName.length > 4 ? strName.substring(0, 4) + "..." : strName;
        strTitle = strTitle.length > 28 ? strTitle.substring(0, 28) + "..." : strTitle;
        strSearch += "<tr><td><a href=\"TeacherZone.html?tId=" + strID + "\"><img src=\"http://121.41.81.51:100" + strImage + "\"></a> <p>" + strName + "</p><a href=\"TeacherZone.html?tId=" + strID + "\">导师空间</a></td>";
        strSearch += "<td><div class=\"box\"><a href=\"Details.html?recID=" + strRecID + "&tId=" + strID + "\"><p>" + strTitle + "</p>";
        strSearch += "<div><p><i class=\"fa fa-clock-o\"></i>" + strAuditT.substring(0, 20) + "</p><p><span><i class=\"fa fa-headphones\"></i><i>" + strSeeCount + " </i>人听过</span>";
        strSearch += "<span><i class=\"fa fa-star-o\"></i><i>" + strScore + "</i> 分</span></p></a></div></div></td></tr>";
    }
    /***页码处理***/
    //var strPageList = P_PageList("SelectPage");
    //strSearch += "<br />" + strPageList;
    if (strSearch != "") {
        $("#ForumList").html(strSearch);
    }
    else {
        $("#ForumList").html("暂无信息");
    }
}

function ShowMore() {
    P_intPageSize = P_intPageSize + 20;
    ForumList();
}

function ShowBtnMore() {
    if (P_intRecordCount > P_intPageSize) {
        $("#btnMore").css("display", "block");
    }
    else {
        $("#btnMore").css("display", "none");
    }
}

function CatList() {
    var datTime = new Date();
    var strUrl = strWebPath + "AspxWeb/List.aspx?CommandType=cat&Time=" + datTime.getTime();
    var strFuntionName = "CatListComplete(xmlHttp)";
    RequestJson1(strUrl, null, strFuntionName);
}

function CatListComplete(xmlHttp) {
    var jsoResult = eval('(' + xmlHttp.responseText + ')');
    if (jsoResult.Value == "12") {

    }
    else {
        var dtaResult = jsoResult.Tables[0];
        var dtaHotWord = jsoResult.Tables[1];
        NewCat(dtaResult);
        //HotWord(dtaHotWord);
    }
}

function NewCat(dtaResult) {
    var strSearch = "<li onclick=\"CatSearh(0)\"><a href=\"javascript:CatSearh(0)\">全部</a> </li>";
    for (var i = 0; i < dtaResult.Rows.length; i++) {
        var strID = dtaResult.Rows[i][0];
        var strName = dtaResult.Rows[i][1];
        strSearch += "<li onclick=\"CatSearh(" + strID + ")\"><a href=\"javascript:CatSearh(" + strID + ")\">" + strName + "</a> </li>";
    }
    $("#ulCatList").html(strSearch);
}

function HotWord(dtaHotWord) {
    var strSearch = "<li onclick=\"HotSearh('')\"><a href=\"javascript:HotSearh('')\">全部</a> </li>";
    for (var i = 0; i < dtaHotWord.Rows.length; i++) {
        var strName = dtaHotWord.Rows[i][0];
        strSearch += "<li onclick=\"HotSearh(" + strName + ")\"><a href=\"javascript:HotSearh(" + strName + ")\">" + strName + "</a> </li>";
    }
    $("#ulHotWord").html(strSearch);
}

function CatSearh(type) {
    P_intPageIndex = 1;
    P_Cat = type;
    ForumList();
}

function SortSearh(sort) {
    P_intPageIndex = 1;
    P_Sort = sort;
    ForumList();
}


function More() {
    var SumIndex = (P_intRecordCount % P_intPageSize) == 0 ? parseInt(P_intRecordCount / P_intPageSize) : parseInt(P_intRecordCount / P_intPageSize) + 1;
    if (SumIndex > P_intPageIndex) {
        P_intPageIndex++;
        ScrollList();
    }
}

function ScrollList() {
    if (P_bool) {
        $("#onLoad").fadeIn();
        P_bool = false;
        var datTime = new Date();
        var strUrl = "";
        strUrl += "&PageIndex=" + P_intPageIndex;
        strUrl += "&PageSize=" + P_intPageSize;
        strUrl += "&KeyWord=" + encodeURIComponent($("#txtKeyWord").val());
        strUrl += "&Cat=" + P_Cat;
        strUrl += "&Sort=" + P_Sort;
        strUrl += "&KwType=" + P_KwType;
        strUrl += "&Url=" + encodeURIComponent((window.location.href).split('#')[0]);
        strUrl = strWebPath + "AspxWeb/List.aspx?CommandType=list&Time=" + datTime.getTime() + strUrl;
        var strFuntionName = "ScrollListComplete(xmlHttp)";
        RequestJson(strUrl, null, strFuntionName);
    }
}

function ScrollListComplete(xmlHttp) {
    P_bool = true;
    var jsoResult = eval('(' + xmlHttp.responseText + ')');
    if (typeof (jsoResult.Value) != "undefined") {
        if (jsoResult.Value[0] == "17") {
            alert("系统繁忙，请重新打开该页面");
            return;
        }
    }
    else {
        var dtaResult = jsoResult.Tables[0];
        P_intRecordCount = dtaResult.Rows[0][1];
        dtaSearchForum = jsoResult.Tables[1];
        var dtRecommend = jsoResult.Tables[2];
        NewScrollList();
    }
}

function NewScrollList() {
    var strSearch = "";
    for (var i = 0; i < dtaSearchForum.Rows.length; i++) {
        var strID = dtaSearchForum.Rows[i][1];
        var strName = dtaSearchForum.Rows[i][2];
        var strRecID = dtaSearchForum.Rows[i][3];
        var strTitle = dtaSearchForum.Rows[i][4];
        var strImage = dtaSearchForum.Rows[i][5];
        var strInfo = dtaSearchForum.Rows[i][6];
        var strKeyWord = dtaSearchForum.Rows[i][7];
        var strStartTime = dtaSearchForum.Rows[i][8];
        var strSeeCount = dtaSearchForum.Rows[i][9];
        var strScore = (dtaSearchForum.Rows[i][10] * 1).toFixed(2);
        var strAuditT = dtaSearchForum.Rows[i][11];
        strName = strName.length > 4 ? strName.substring(0, 4) + "..." : strName;
        strTitle = strTitle.length > 28 ? strTitle.substring(0, 28) + "..." : strTitle;
        strSearch += "<tr><td><a href=\"TeacherZone.html?tId=" + strID + "\"><img src=\"http://121.41.81.51:100" + strImage + "\"></a> <p>" + strName + "</p><a href=\"TeacherZone.html?tId=" + strID + "\">导师空间</a></td>";
        strSearch += "<td><div class=\"box\"><a href=\"Details.html?recID=" + strRecID + "&tId=" + strID + "\" ><p>" + strTitle + "</p>";
        strSearch += "<div><p><i class=\"fa fa-clock-o\"></i>" + strAuditT.substring(0, 20) + "</p><p><span><i class=\"fa fa-headphones\"></i><i>" + strSeeCount + " </i>人听过</span>";
        strSearch += "<span><i class=\"fa fa-star-o\"></i><i>" + strScore + "</i> 分</span></p></a></div></div></td></tr>";
    }
    if (strSearch != "") {
        var data = $("#ForumList").html();
        strSearch = data + strSearch;
        $("#ForumList").html(strSearch);
        sessionStorage.Recommend = $("#div_Recommend").html();
        sessionStorage.data1 = strSearch;
        sessionStorage.PageIndex1 = P_intPageIndex;
    }
    else {
    }
    //$("#onLoad").css("display", "none");
    $("#onLoad").fadeOut();
}

function KeyWordType(type) {
    P_KwType = type;
}

function BtnSearch() {
    P_KeyWord = encodeURIComponent($("#txtKeyWord").val());
    ForumList();
}

function HotSearh(keyW) {
    P_KeyWord = encodeURIComponent(keyW);
    ForumList();
}

function GoHistory() {
    P_intPageIndex = sessionStorage.PageIndex1;
    $("#ForumList").html(sessionStorage.data1);
    $("#div_Recommend").html(sessionStorage.Recommend);
    sessionStorage.clear();
}

/*启动函数*/
function StartJs() {
    $("#divSort").css("display", "");
    strWebPath = CheckPath();
    CatList();
    if (typeof (sessionStorage.data1) == "undefined") {
        ForumList();
    }
    else {
        GoHistory();
    }
}
StartJs();
