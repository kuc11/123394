let gameImg = ["scissors.png","rock.png","paper.png"];
const path = "./static/images/";
let com = 0; // 컴퓨터 이미지 setInterval 값 저장변수
let comIdx=0;   // 컴퓨터 이미지 인덱스
$(function(){


    $("#comImg").attr("src",path+gameImg[0]);

    $("#start").on("click",start);

    $(".user").on("click",result);  //  유저 가위바위보 클릭시

});



function start(){                                           //컴퓨터 가위바위보 이미지 보이기;

    com = setInterval(imgRoate,300);

    $("#start").text("진행");

    $("#start").attr("disabled",true);

    
}



function imgRoate(){                                        // setInterval 에서 무슨 함수를 반복 할것인지  컴퓨터의 자동 이미지 변환
    if(comIdx==2)  comIdx=-1;                               // comIdx는 컴퓨터 이미지 표현하기위한 인덱스 변수다
    $("#comImg").attr("src",path+gameImg[++comIdx]);        // comIdx 의 값이 2가 될때는 화면에 보자기가 출력된 후이기 때문에
                                                            // comIdx 를 -1로 변경한다.
                                                            // ++comIdx 에 의해 0으로 증가하여 0번 인덱스인 가위이미지가 출력

}

function result(){                                  //user 이미지를 클릭하였을때
    var div = $(this);

    if($("#start").prop("disabled")){               // prop 는 현재 #start 버튼에 상태를 알려준다.
                                                    // prop("disabled") -> 비활성화면 true 활성화면 false;
    div.css("bakcground","pink");

    var my = clickImg(div);

    clearInterval( com );  //seInterval 중단

    var ment = gameResult(my);
    $(".res").text(ment);

    $("#start").attr("disabled",false);
    $("#start").text("시작");
    }
}


function gameResult(my){                            //가위바위보 결과
    var  cu = my - comIdx;
    switch( cu ){
        case 0:
            return "무";
        case 1: case -2:
            return "승";
        default:
            return "패";
    }
}

function clickImg(div){                             // 클릭한 이미지가 무엇인지
    if( div.hasClass("scissors"))
        return 0;
    if( div.hasclass("rock"))
        return 1;
    if( div.hasclass("paper"))
        return 2;
}

