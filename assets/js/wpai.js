$(function() {
    $.ajaxPrefilter(function(ss) {
        ss.url = "http://ajax.frontend.itheima.net" + ss.url
        console.log(ss.url.indexOf("/my/") != -1);
        if (ss.url.indexOf("/my/") != -1) {
            ss.headers = {
                Authorization: localStorage.getItem("token") || ""
            }
        }
    })
})