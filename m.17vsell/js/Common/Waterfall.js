/************************瀑布流**********************************/
/*滚动条在Y轴上的滚动距离*/
function ScrollTop()
{
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body)
    {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement)
    {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
/*文档的总高度*/
function ScrollHeight()
{
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body)
    {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement)
    {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
/*浏览器视口的高度*/
function WindowHeight()
{
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat")
    {
        windowHeight = document.documentElement.clientHeight;
    } else
    {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
window.onscroll = function ()
{
    if (ScrollTop() + WindowHeight() + 5 >= ScrollHeight())
    {
        More();
    }
};
/************************End**********************************/