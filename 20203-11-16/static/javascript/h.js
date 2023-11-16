//과제
// 주차비 정산
// apple주차장의 주차요금표
// 기본 주차비 - 1000원,  기본시간 30분
//(30분 이내 주차시 1000원, 5분 주차해도 1000원, 39분까지 1000원)
// 10분당 100원씩 추가 (40분 주차시 1100원, 54분 주차시 1200원)
//2시간 이상  주차시 기본요금 변경
//          기본요금 - 1500원
//4시간 이상 주차시 기본요금 변경
//          기본요금 - 2500원
//8시간 이상 주차시 기본요금 변경
//      (10시간, 12시간, 9시간43분 전부다 10000원)
//      (2시간1분 주차시 1500원, 2시간 34분주차시 - 1800원)
// 주차시간을 분단위로 입력하여 주차요금이 얼마인지 출력하시오.
var time= parseInt(prompt("주차시간을 입력"))
var cost=1000;
var price = 0;
if(time<120){
    if(time>=30){
        time=time-30;
        price = parseInt(time/10)*100+cost;
        alert("주차요금:"+price);
    }
    else{ alert("주차요금:"+cost);}
}
else if(time<240){
    cost=1500;
    time=time-120;
    price = parseInt(time/10)*100+cost;
    alert("주차요금:"+price);
}
else if(time<480){
    cost=2500;
    time=time-240;
    price = parseInt(time/10)*100+cost;
    alert("주차요금:"+price);
}
else {
    cost=10000;
    time=time-480;
    price = parseInt(time/10)*100+cost;
    alert("주차요금:"+price);
}