
let slide_idx=0;
$(function(){

//  $(function(){
//     $(".menuList>.menuItem").on("mouseover",function(){
//           $(this).children(".subMenu").;
//          // show(), hide(), toggle();
//          // fadeIn(), fadeOut(), fadeToggle();
//          // slideDown(), slideUp(), slideToggle();
//      });
    
//      $(".menuList>.menuItem").on("mouseout",function(){
//          $(this).children(".subMenu").hide();
//      });
    
    
    // });
    // 슬라이드이미지 구현
    $(".leftBt").on("click",function(){
        if( slide_idx != $(".slideImg").length-1 ){ //마지막 이미지 일 경우 이동불가
            slide_idx++;
            $(".slideList").css("right",(slide_idx*1200)+"px" );
        }
    });

    $(".rightBt").on("click",function(){
        if(slide_idx!=0){  // 첫번째 이미지 일 경우 이동불가
            slide_idx--;
            $(".slideList").css("right",(slide_idx*1200)+"px" );
        }
    });

    // setInterval(
    //     function(){
    //         if( slide_idx != $(".slideImg").length-1 ){ //마지막 이미지 일 경우 이동불가
    //             slide_idx++;
    //             $(".slideList").css("right",(slide_idx*1200)+"px" );
    //         }else{
    //             slide_idx=0;
    //             $(".slideList").css("right",(slide_idx*1200)+"px" );
    //         }
    //     } , 5000
    // );


});