let getEventList = function(){
    return eventList;
}


let eventList = [
    {
        sectClassName:"sect-main",
        eventFunc:function(){
            setCounter('.fn-counter', 1200);
        }
    },
    // {
    //     sectClassName:"sect-invest",
    //     eventFunc:function(){
    //         setMoveUpAni('.sect-invest .title-area *',-500, 500, 250);
    //         setMoveUpAni('.sect-invest .invest-ul li',150, 500, 100);
    //         setMoveUpAni('.sect-invest .btn-go-invest',400, 800);
    //     }
    // },
    // {
    //     sectClassName:"sect-service",
    //     eventFunc:function(){
    //         setMoveUpAni('.sect-service .title-area *',-800, 700, 150);
    //         setMoveUpAni('.sect-service .service-ul>li', -120, 600, 100);
    //         setMoveUpAni('.sect-service .btn-go-guide',400, 800);
    //     }
    // },
    // {
    //     sectClassName:"sect-advantage",
    //     eventFunc:function(){
    //         setMoveUpAni('.sect-advantage .title-area *',-300, 500, 150);
    //         setMoveUpAni('.sect-advantage .contents-area', -180, 600, 200);
    //         // setMoveUpAni('.sect-advantage .btn-go-guide',400, 800);
    //     }
    // }
];



let setMoveUpAni = function(name, start, delay, oderDelay = 0){
    $(name).each(function(index,item){    

        //초기세팅
        let box = $(this);
        box.css({"transform":"translateY("+(start)+"%)"});

        box.css({'opacity':0.2})
        box.fadeTo(delay,1.0,function(){});

        $({boxPos: start}).animate({
            boxPos: 0
        },
        {
            duration: delay + (index*oderDelay),
            easing:'swing',
            step: function() {
                box.css({"transform":"translateY(" + this.boxPos+"%)"});

                    // console.log("이벤트");
            },
            complete: function() {
                box.css({"transform":"translateY("+(0)+"%)"});
            }
        });


    });
}






//카운트 이벤트
let setCounter = function(name, time, startNum = 1000){

    $(name).each(function(index,item) {
        let countStr = $(item).text();
        let countInt = extractStrToInt(countStr);

        let el = $(item);
        el.text(startNum)            
        let countTo = countInt;

        el.css({'opacity':0.2})
        el.fadeTo(time/2,1.0,function(){});
        
        $({ countNum: el.text()}).animate({
            countNum: countTo
        },
        {
            duration: time,
            easing:'swing',
            step: function() {
                let currentCount = CountNumToStr(this.countNum)
                el.text(currentCount);
            },
            complete: function() {
                let lastCount = CountNumToStr(this.countNum)
                el.text(lastCount);
            //alert('finished');
            }

        });  
    });
}

let CountNumToStr = function(countNum){

    let num = Math.floor(countNum);
    let str = num.toString();
    str = str.replace(/(\d)(?=\d{4}$)/,'$1억 ');
    str = str.replace(/(\d)(?=(\d{3})$)/,'$1,');

    // console.log(str);

    return str;
}


let extractStrToInt = function(str){

    let result = str.replace(/[^0-9]/g,"");
    result = parseInt(result);
    
    return result;
}