$(function() {
    //正则表达式
    let form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        qrpsw: function(value) {
            if ($(".zhuceyemian [name=password]").val() != value) { return '两次密码不一致' }
        }
    });

    // 点击去注册事件
    $(".qzc-r").on("click", function(e) {
        e.preventDefault();
        $(".zhuceyemian").css("display", "block");
        $(".dengluyem").css("display", "none");

    })

    //点击去登陆事件
    $(".qdl-r").on("click", function(e) {
        // e.preventDefault();
        $(".zhuceyemian").css("display", "none");
        $(".dengluyem").css("display", "block");

    })

    //监听注册账号事件
    $(".zhuceyemian").submit(function(e) {
            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "/api/reguser",
                data: {
                    username: $(".zhuceyemian [name=username ]").val(),
                    password: $(".zhuceyemian [name=password ]").val(),
                },
                success: function(ser) {
                    console.log(ser);
                    if (ser.status != 0) {
                        return layer.msg('注册失败');
                    }
                    layer.msg('注册成功');
                    $(".qdl-r").click()
                }
            })
        })
        //监听登陆账号
    $(".dengluyem").submit(function(e) {

        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/api/login",
            data: $(this).serialize(),
            success: function(ser) {
                if (ser.status !== 0) {
                    return layer.msg(ser.message);
                }
                localStorage.setItem("token", ser.token)
                location.assign("/assets/index/index.html");
            }
        })
    })
})