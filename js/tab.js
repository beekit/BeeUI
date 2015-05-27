/**
 * Created by woojoy on 15/3/29.
 */


//标签页切换效果；
function $ (id){
    return typeof id=="string" ? document.getElementById(id) : id;
}

window.onload = function(){
    var titleName = $("tab-title").getElementsByTagName("li");
    var tabContent = $("tab-content").getElementsByTagName("span");

    if( titleName.length != tabContent.length){
        return;
    }
    for(var i = 0; i<titleName.length; i++ ){
        titleName[i].id = i;
        titleName[i].onmousemove = function(){
            for(var j = 0; j<titleName.length; j++){

                titleName[j].className = "title-cell";
                tabContent[j].style.display = "none";
            }
            this.className = "title-cell tab-active";
            tabContent[this.id].style.display = "block";

        }
    }
}

//
//$(function(){
//    $("#tab-title li").each(function(){
//        this.onmousemove = function(){
//            this.removeClass().addClass("title-cell active");
//        }
//
//    };
//
//});