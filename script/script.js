//서브 메뉴
$(document).ready(function(){
    $(".d1").mouseover(function(){
        $(this).find(".sub ul").stop().slideDown();
    });
    $(".d1").mouseout(function(){
        $(this).find(".sub ul").stop().slideUp();
    });
});

//메인 슬라이드
$(document).ready(function(){
    $(".slide_img:gt(0)").hide();

    setInterval(function(){
        $(".slide_img:first").fadeOut(1500).next().fadeIn(1500);
        $(".slide_img:first").appendTo(".slide_list");
        return false;
    },3000);
});

//탭 메뉴
$(document).ready(function(){
    var tabBtn = $(".tab_btn ul li");
    var tabCont = $(".tab_cont div");
    tabCont.hide().eq(0).show();

    $(tabBtn).click(function(){
        var target = $(this);
        var index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");

        tabCont.css("display","none");
        tabCont.eq(index).css("display", "block");
    });
});

//팝업 창
$(document).ready(function(){
    $(".notice li:nth-child(1)").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
});