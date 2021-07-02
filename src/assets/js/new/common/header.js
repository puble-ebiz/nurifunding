//헤더 관련
$(document).ready(function(){
    screenSizeCheck();
    let overMenu = null;
    let subMenuBG = $(".over-on .sub-menu-bg");
    // $(".menu-area-ul>li:first>a").addClass("over");
    $(".over-on .main-menu-ul>li .main-btn").hover(function(e){
        //서브메뉴가 있으면
        // let sizeWidth 
        if($(this).siblings(".sub-menu-ul").length > 0){
            $(this).addClass("over");
            subMenuBG.show();
        }
        else{
            subMenuBG.hide();
        }

    }, function(e){ //나가면
        overMenu = $(this);
        // console.log(overMenu);
        $(this).removeClass("over");

        let startY = subMenuBG.offset().top -1;            
        let endY = startY + subMenuBG.outerHeight();
        
        // console.log("마우스: "+e.pageY);
        if(e.pageY < startY || e.pageY > endY ){
            // subMenuBG.show();
            subMenuBG.hide();
        }
    });

    
    //서브메뉴 배경
    subMenuBG.hover(function(){
        overMenu.addClass("over");
        
    },function(){ //나가면
        overMenu.removeClass("over");
        subMenuBG.hide();
    });

    
    $(".over-on .main-menu-ul .sub-menu-ul").hover(function(){ 
        $(this).siblings("a").addClass("over");
        subMenuBG.show();
    }, function(e){ //나가면
        $(this).siblings(".over").removeClass("over");

        let startY = subMenuBG.offset().top -1;            
        let endY = startY + subMenuBG.outerHeight();
        // console.log(startY);
        // console.log("마우스: "+e.pageY);
        if(e.pageY < startY || e.pageY > endY ){
            // subMenuBG.show();
            subMenuBG.hide();
        }
    });

    
    //모바일쪽
    let menuArea = $(".nav-area .menu-area");

    $(".nav-area .btn-open-menu").on("touchstart",function(e){
        e.preventDefault();
        $("html, body").addClass('menu-overflow-hidden');
        menuArea.animate({
            'left': "0"
        },100)
    });
    $(".nav-area .btn-close-menu").on("touchstart",function(e){
        e.preventDefault();
        $("html, body").removeClass('menu-overflow-hidden');
        menuArea.animate({
            'left': "-101%"
        },100)
    });

    $(".menu-area .main-menu-ul>li").on("touchstart",function(){
        $(".menu-area .main-menu-ul>li").removeClass("active")
        $(".menu-area .main-menu-ul>li").removeClass("line-none")
        $(this).addClass("active");
        $(this).prev().addClass("line-none");
    });


    $(window).resize(function(){
        // let sizeWidth = $(window).outerWidth();
        // console.log(sizeWidth);
        // if(sizeWidth > 720){
        //     menuArea.removeAttr("style");
        // }
        // else if(sizeWidth <= 720){
        //     $(".nav-white").removeClass("nav-white");
        // }
        screenSizeCheck();
    });

    subMenuCenter();

    setTouchNone();

});

let screenSizeCheck = function(){
    let screenWidth = $(window).outerWidth();
    $(".over-on .main-menu-ul>li .main-btn").removeClass("over");
    $(".over-on .sub-menu-bg").hide();
    if(screenWidth > 720){
        // $(".nav-area .menu-area").removeAttr("style");
        $(".nav-sect").addClass("over-on");
    }
    else if(screenWidth <= 720){
        $(".over-on").removeClass("over-on");
        // $(".nav-white").removeClass("nav-white");
        
    }
}


let subMenuCenter = function(){
    let subObj = $(".header-new .over-on .sub-center");
    // subObj.css("padding","10.0rem");
    let mainW = subObj.find(".main-btn").outerWidth();
    let subW = subObj.find(".sub-menu-ul").outerWidth();

    let resultW = (mainW/2);
    // console.log(resultW);
    subObj.find(".sub-menu-ul").css({
        "margin-left": String(resultW*0.1)+"rem"
    });
}

let setTouchNone = function(){
    let screenWidth = $(window).outerWidth();
    
    if(screenWidth <= 720){
        $(".header-new .main-btn").on("click", function(e){
            if($(this).siblings('.sub-menu-ul').length > 0){
                e.preventDefault();
                // console.log("작동");
            }
            if($(this).siblings('.temp-sub-menu-ul').length > 0){
                e.preventDefault();
                // console.log("작동");
            }
        });
    }
}