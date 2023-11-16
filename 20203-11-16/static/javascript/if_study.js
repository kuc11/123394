//브라우저에 html태그가 모두 로드(화면표시) 되면 실행되는 스크립트 코드
window.onload=function(){

    //조건문- if문, switch문   
    // var a=234;
    // switch(a){
    //     case 1:
    //         alert("1");
    //         break;//반복문 안에서만 사용가능
    //     case 1000:
    //         alert("1000");
    //         break;
    //     case 234:
    //         alert("234");
    //         break;
    // }
    // var airjordan = 2;
    // var airmax = 97;
    // var alp ="나이키 에어포스 90재고";
    //  switch(alp.split(" ")[1]){
    //     case "에어조던":
    //         document.write("현재 재고수량은"+airjordan+"개");
    //         break;
    //     case "에어맥스":
    //         document.write("현재 재고수량은"+airmax+"개");
    //         break;
    //     case "a":
    //         document.write("apple");
    //         break;
    //     default:
    //         document.write("죄송합니다. 저희가 판매하는 제품이 아닙니다.")
    //  }
    /*
        if(score>=90)
        else if(score>=80){}
        else if(score>=70){}
        else{}
    */
    var score = 79;
    switch(parseInt(score/10)){
        case 10: case 9:
            document.write("A학점"); break;
            case 8:
            document.write("B학점"); break;
            case 7:
            document.write("C학점"); break;
            default:
            document.write("F학점"); break;

    }
    //주사위 게임 만들기
    //컴퓨터와 주사위 게임을 한다.
    // //각자 주사위 하나씩 던진다. 주사위 값이 큰쪽이 이긴다.
    // var user1 = Math.floor(Math.random()*6)+1;
    // var user2 = Math.floor(Math.random()*6)+1;
    // var com1 = Math.floor(Math.random()*6)+1;
    // var com2 = Math.floor(Math.random()*6)+1;
    // var user = user1+user2;
    // var com = com1+com2;
    // var di= document.getElementById("dice");

    // di.addEventListener("click",function(){ 
    // if(user1==user2 && com1==com2){
    //     if(user==com){
    //         alert("비김"+"   나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    //     }
    //     else if(user>com){
    //         alert("승리"+"  나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    //     }
    //     else{
    //         alert("패배"+"   나:"+user1+"|"+user2+"   컴:"+com1+" | "+com2);
    //     }
    //   }
    // else if(user1==user2){
    //     alert("확정승리"+"   나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    // }
    // else if(com1==com2){
    //     alert("확정패배"+"   나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    // }
    // else if(user>com){
    //     alert("승리"+"   나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    // }
    // else if(user<com){
    //     alert("패배"+"   나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    // }
    // else{
    //     alert("비김"+"   나:"+user1+" | "+user2+"   컴:"+com1+" | "+com2);
    // }
    // user1 = Math.floor(Math.random()*6)+1;
    // user2 = Math.floor(Math.random()*6)+1;
    // com1 = Math.floor(Math.random()*6)+1;
    // com2 = Math.floor(Math.random()*6)+1;
    // user = user1+user2;
    // com = com1+com2;
    // });
    // // di.addEventListener("click",function(){  
    // // 2. if(user>com){
    // //     if((com1==com2)&&(user1!=user2)){
    // //         alert("패배");
    // //     }
    // //     else{
    // //         alert("승리");
    // //     }
    // // }
    // // else if(user<com){
    // //     if((com1!=com2)&&(user1==user2)){
    // //         alert("승리");
    // //     }
    // //     else{
    // //         alert("패배");
    // //     }
    // // }
    // // else{
    // //     if((user1==user2)&&(com1!=com2)){
    // //         alert("승리");
    // //     }
    // //     else if((user1!=user2)&&(com1==com2)){
    // //         alert("패배");
    // //     }
    // //     else{
    // //         alert("무")
    // //     }
    // //     }

    // // });


}