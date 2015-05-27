/**
 * Created by woojoy on 15/4/11.
 */
$(function(){
    //标签切换
    window.onload = function()
    {
        var $li = $('.tab-title li');
        var $ul = $('.tab-content span');

        $li.mouseover(function(){
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass().addClass("title-cell");
            $this.addClass('tab-active');
            $ul.css('display','none');
            $ul.eq($t).css('display','block');
        });
    }


    //================================ 色板操作开始============================
    $("#box ul li > div").addClass("a-block");//色板li标签后的整体div添加容器样式；
    //$("#box ul li  div div > p").addClass("c-name");//设置色彩名字/及色值样式；

    $(".a-block").each(function(){

        $(this).children("div").first().addClass("top-blcok");//为色板的每块色显示颜色；
        $(this).children("div:not(.top-blcok)").addClass("hidden-block");//设置色板的注释文字块；

        //鼠标进入事件
        $(this).mouseover(function(){
            $(this).addClass("active-block");
            $(this).children("div").first().addClass("top-block-active");

            var colorId = $(this).children("div").first().attr("id");//获取当前色块id
            var colorValue = $(this).children("div").first().css("background-color");//获取当前色块色值

            $(this).children("div > p").eq(0).addClass("c-name");
            $(this).children("div > p").eq(1).addClass("rgb-name");
            $(this).children("div > p").eq(0).text("#"+colorId);
            $(this).children("div > p").eq(1).text(colorValue);

        });
        //鼠标移出事件
        $(this).mouseout(function(){
            $(this).children("div").first().removeClass("top-block-active");
            $(this).removeClass("active-block").addClass("a-block");

        });
        //鼠标点击事件
        $(this).click(function(){
            $("li div .top-blcok").each(function() {
                if (  $(this).prop("className") != "top-blcok"){
                    $(this).removeClass().addClass("top-blcok");
                }
            });
            $(this).children("div").first().removeClass().addClass("top-blcok active").addClass("top-block-active");
        });

    });
    //色板操作结束=====================================================


//高级灰操作开始
    //$(".color-box ul li > div").addClass("a-block");



//    自选颜色显示
    var colorValue=$("#myclor").val("value")
    //alert(colorValue);
    $("#mycolorValue").text($("#mycolor").value);

});