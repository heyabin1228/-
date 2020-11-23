var layer = layui.layer;
$(function() {
    huoqxinx()
})


function huoqxinx() {
    console.log(111);
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        success: function(res) {
            if (res.status != 0) { return layer.msg('获取失败') }
            console.log(res.data);
            // form.val("form55", res.data);
            form.val("form55", { ID: 123 })
        }
    })
}