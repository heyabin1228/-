$(function() {

    huoquxinxi()
    $("#remove1").on("click", function(e) {
        e.preventDefault();
        layer.confirm('确定要退出么?', { icon: 3, title: '提示' }, function(index) {
            localStorage.removeItem("token")
            location.assign("/logo.html")
            layer.close(index);
        });
    })

})
var layer = layui.layer;

function huoquxinxi() {
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        success: function(src) {
            console.log(src);
            if (src.status == 1 && src.message == "身份认证失败！") {
                localStorage.removeItem("token")
                location.assign("/logo.html")
                layer.msg('登陆失败');
                return;
            }


            if (src.data.nickname == "") {
                $("#welcome").html("欢迎&nbsp&nbsp" + src.data.username);
            } else { $("#welcome").html(src.data.nickname); }
            if (src.data.user_pic != null) {
                $(".layui-nav-img").src(src.data.user_pic)
                    // $(".text-avatar").css("display", "none");
                $(".text-avatar").hide()
            } else {
                $(".text-avatar").text(src.data.username[0].toUpperCase())
                $(".layui-nav-img").hide()
            }

        }
    })



}