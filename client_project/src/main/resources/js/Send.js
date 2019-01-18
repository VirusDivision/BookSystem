var num = 0;

function btnifm(){

    num = 10;

    $("#btnSend").attr({"disabled": "disabled"});

    var time = setInterval(function () {
        if(num<1) {
            clearInterval(time);
            $("#btnSend").removeAttr("disabled");
            document.getElementById("btnSend").innerHTML = "获取验证码";
        }else {
            document.getElementById("btnSend").innerHTML = num + "秒重发";
            num--;
        }
    }, 1000)
}



window.onload = function  a() {
    setInterval(function () {
        var smalls = document.getElementById("div1").querySelector("i");
            smalls.style.marginRight += 110+"px";
    },1)
    setInterval(function () {
        if ($ ( '#ty' ).is ( ':checked' )) {
            $ ( "#zc" ).removeAttr ( "disabled" );//恢复
        } else {
            $ ( "#zc" ).attr ( "disabled", "disabled" );//失效
        }
    },1);
};
