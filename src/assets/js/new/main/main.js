//슬라이드 관련
$(document).ready(function(){
    //메인 슬라이드
    if($('.main-slide-ul').length >0){
        $('.main-slide-ul').slick({
            infinite: true,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            // arrows: true,
            prevArrow: $(".main-slide-control .btn-slide-prev"),
            nextArrow: $(".main-slide-control .btn-slide-next"),
            // responsive: [
            // {
            //     breakpoint: 721,
            //     settings: {
            
            //     }
            // }],

            customPaging : function(slider, index) { 
                return "<button type='button'></button>";
            }
        });

        let totalIndex = $('.main-slide-ul').slick("getSlick").slideCount;
        let totalNum = totalIndex.toString().padStart(2,'0');
        $(".main-slide-control .num-box .num-total").text(totalNum);
        

        $('.main-slide-control .btn-slide-pause').on('click',function(){
            $('.main-slide-ul').slick('slickPause');
        });

        $('.main-slide-ul').on("afterChange",function(){
            let index = $('.main-slide-ul').slick('slickCurrentSlide') + 1;
            // let total = $('.main-slide-ul').slick().slideCount;
            
            let currentNum = index.toString().padStart(2,'0');
            // num.padStart(2,"0");
            $(".main-slide-control .num-box .num-current").text(currentNum);
            // $(".slide-contents .title-main").text("sfddfdf")
            // index.padStart(2,"0");
            // var xx = "5";
            // xx.padStart(2,"0");
            // console.log(xx);
            
        })
    }

    //뉴스
    if($('.news-info-ul').length >0){
        $('.news-info-ul').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            vertical: true,
            // verticalSwiping: true,
            draggable: false,
            // variableWidth: true,
            arrows: true,
            prevArrow: $(".news-info-area .btn-arrow-up"),
            nextArrow: $(".news-info-area .btn-arrow-down"),
            // responsive: [
            // {
            //     breakpoint: 721,
            //     settings: {
            //         // initialSlide
            //     }
            // }],

            customPaging : function(slider, index) { 
                return "<button type='button'></button>";
            }

        });
    }

    //리뷰
    $('.review-ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        prevArrow: $(".reivew-slide-area .btn-slide-prev"),
        nextArrow: $(".reivew-slide-area .btn-slide-next"),
        responsive: [
        {
            breakpoint: 1261,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 721,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
                appendDots: $(".reivew-slide-control"),
                // slidesToScroll: 3,
                centerMode: true,
            }
        }],

        customPaging : function(slider, index) { 
            return "<button type='button'></button>";
        }
    });

    //배너
    $('.banner-ul').slick({
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $(".banner-slide-area .btn-slide-prev"),
        nextArrow: $(".banner-slide-area .btn-slide-next"),
        responsive: [
        {
            breakpoint: 721,
            settings: {
                arrows: false,
                
            }
        }],

        // customPaging : function(slider, index) { 
        //     return "<button type='button'></button>";
        // }
    });

});

