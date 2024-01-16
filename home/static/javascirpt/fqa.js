// let i=1;
// function detail(){
//      if(i%2==1)
//     $("#answer").css("height","100px");
    
//      if(i%2==0)
//      $("#answer").css("height","0px");
    
//      i++;
//      console.log(i);
// }

 


window.onload = () => {
     // panel-faq-container
     const panelFaqContainer = document.querySelectorAll(".container"); // NodeList 객체
     
     // panel-faq-answer
     let panelFaqAnswer = document.querySelectorAll(".answer");
   
     
     // 반복문 순회하면서 해당 FAQ제목 클릭시 콜백 처리
     for( let i=0; i < panelFaqContainer.length; i++ ) {
       panelFaqContainer[i].addEventListener('click', function() { // 클릭시 처리할 일
         // FAQ 제목 클릭시 -> 본문이 보이게끔 -> active 클래스 추가
         panelFaqAnswer[i].classList.toggle('active');
       });
     };
     
   }
   
//    const sort = [배송,반품/교환,상품/주문/결제/취소,회원/사이트/기타];

function show(){
     $('.del div').css("display","block");
     $('.chg div').css("display","block");
     $('.cal div').css("display","block");
     $('.etc div').css("display","block");
}
function show1(){
     $('.del div').css("display","none");
     $('.chg div').css("display","none");
     $('.cal div').css("display","none");
     $('.etc div').css("display","block");
}
function show2(){
     $('.del div').css("display","none");
     $('.chg div').css("display","none");
     $('.cal div').css("display","block");
     $('.etc div').css("display","none");
}
function show3(){
     $('.del div').css("display","none");
     $('.chg div').css("display","block");
     $('.cal div').css("display","none");
     $('.etc div').css("display","none");
}
function show4(){
     $('.del div').css("display","block");
     $('.chg div').css("display","none");
     $('.cal div').css("display","none");
     $('.etc div').css("display","none");
}
