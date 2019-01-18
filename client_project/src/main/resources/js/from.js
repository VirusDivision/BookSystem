$(function () {
    $("#froms").bootstrapValidator({
        live: 'disabled',//验证时机，enabled是内容有变化就验证（默认），disabled和submitted是提交再验证
        excluded: [':disabled', ':hidden', ':not(:visible)'],//排除无需验证的控件，比如被禁用的或者被隐藏的
        submitButtons: '#zc',//指定提交按钮，如果验证失败则变成disabled，但我没试成功，反而加了这句话非submit按钮也会提交到action指定页面
        message: '通用的验证失败消息',//好像从来没出现过
        feedbackIcons: {//根据验证结果显示的各种图标
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {//检测长度
                        min: 6,
                        max: 22,
                        message: '长度必须在6-22之间'
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    regexp : {
                        regexp : /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{8,16}$/,
                        message : '用户确认密码长度为8至16位,并且需要包含数字、小写字母、大写字母、符号(至少三种)'
                    },
                    different: {
                        field: 'username',
                        message: '密码不能和用户名一致！'
                    },
                    stringLength: {
                        min: 8,
                        max: 20,
                        message: '用户确认密码长度在8-20之间'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码'
                    },
                    regexp: {
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message: '请输入正确的手机号码'
                    }
                }
            },
        }
    });
});

function fc() {
    //定义一个校验器
    var bootstrapValidator = $("#froms").data('bootstrapValidator');
    //执行校验
    bootstrapValidator.validate();

            $ ( "#froms" ).bootstrapValidator ( 'validate' );//提交验证

            if ($( "#froms" ).data ( 'bootstrapValidator' ).isValid ()) {//获取验证结果，如果成功，执行下面代码

                var code = {"code": document.getElementById ( "code" ).value}
                alert ( code.toString ())

                          $.ajax( {
                             type: "GET",
                             url: "http://localhost:9001/Sends",
                             contentType: "application/text; charset=utf-8",
                             data: code,
                             dataType: "text",
                             success: function (message) {
                               console.log ( message.valueOf ().toString () );
                             },
                            error: function (message) {
                                 console.log ( message.valueOf ().toString () );
                             }
                         });

                // var options ={
                //     url:'http://localhost:9001/Sends',
                //     type:'GET',
                //     contentType: "application/text; charset=utf-8",
                //     data:code,
                //     dataType: "text",
                //     success: function (message) {
                //                  console.log ( message.valueOf ().toString () );
                //              },
                //              error: function (message) {
                //                  console.log ( message.valueOf ().toString () );
                //             }
                // };
                // var form =$("form[id=froms]");//form1:表单ID  在表单界面只用这一个表单ID
                //
                // form.ajaxSubmit(options);

            }
}
