// 배열
// 배열 - 변수를 연속적으로 나열되어 있는 공간
//      변수는 단하나의 값만 저장할 수 있지만
//      배열은 다수의 값을 저장할 수 있다.
//      많은 데이터를 저장하고 관리하기에 가장
//      쉬운 방법이다.

// var arr1=[];             //참조변수
// var arr2 = [11,23,34,45];//arr2 는 11의 주소를 기억
// var arr3 = new Array();  //표준

// arr3.push(45);      //45라는 데이터를 추가로 넣는다
// arr3.push(23);
// arr3.push("이민재");
// arr3.push("노재홍");
// arr3.push(3.14);

// //alert(arr3);
// document.write(arr3[3]);

// for(var i=0 ;i<arr3.length; i++){
//         document.write(arr3[i] +" ");
// }

// let name=["이순신","강감찬","장보고","장영실","이성계"]; //배열을 만들때 var 가 아닌 let 을 사용

// document.write("<br>"+name);
// name[2] = "김춘추";
// document.write("<br>"+name);
// // 배열의 새로운 데이터 저장 - push
// //push는 배열의 마지막에 데이터를 저장한다.

// // 배열에 저장된 데이터 삭제 - pop(마지막에 저장된 데이터 삭제)
// document.write("삭제된 데이터"+name.pop());  //삭제된 데이터 확인가능
// document.write("<be>"+name);

// //배열의 맨앞쪽에 저장 -unshift()
// name.unshift("정도전");
// document.write("<br>"+name);
// //배열의 맨앞쪽 삭제 - shift()
// name.shift();
// document.write("<br>"+name);

// // 배열의 특정위치에 추가하거나 삭제 - splice
// name.splice(2,0,"정약욕","김유식","문익점");
// // 2번째 인덱스에서 0개 삭제하고 3개 데이터 추가
// document.write("<br>");
// document.write("<br>"+name);
// name.splice(2,2);
// //2번째 인덱스부터 2개 삭제
// document.write("<br>");
// document.write("<br>"+ name);

// //배열에서 특정위치의 데이터를 가져오기 - slice
// let name2 = name.slice(1,3);
// document.write("<br>"+name2);
// document.write("<br>"+ name);

// // 다수의 배열을 하나로 합치기 - concat
// let name3 = name.concat(name2);
// document.write("<br>concat:"+name3);

// //배열에 저장된 데이터들을 사전적순으로 정렬 -sort
// name3.sort();
// document.write("<br>sort-"+name3);

// //배열에 역순으로 정렬 - reverse
// name3.reverse();
// document.write("<br>reverse-"+name3);

// //배열의 모든 데이터를 지정된 문자로 열결하여
// // 하나의 문자열 변환 - join

// var str = name3.join("-");
// document.write("<br>join-"+str);

// document.write("<br>"+(str.split("-")));

// let num = new Array();

// for(var i=1;i<=10;i++){
//     num.push(Math.floor(Math.random()*50)+1);
// }
// document.write(num+"<br>");

// var a =0; 나중에 해보자
// for( var i=0;i<num.length;i++){
//     if(num[i]%5!=0){
//        num.splice(i-a,1);
//        a++;
//     }
// }
// document.write(num);

// const subject=["국어","수학","영어","과학"];

// for(var i=0; i<subject.length; i++){
//     var score = prompt(subject[i]+"점수 입력");
// }

// const subject=["국어","수학","영어","과학"];
// let idx=0; // subject 배열의 인덱스 표현 변수
// let score = new Array(); //변수가 저장될 배열
// //window.onload=function(){}
// $(function(){
//     //documemt.getElementById("subject")
//     $("#subject").text(subject[idx]);
// });

// function save(){
//     score.push( Number($("#score").val()));
//     if( idx==subject.length-1){
//         // 1.document.getElementById("result").innerHTML=
//         // var total =0 ;
//         // for(var i=0; i<score.length;i++)
//         //      total += score[i]
//         //2.
//         var total = score[0]+score[1]+score[2]+score[3];
//         var avg = total/score.length;

//         var out ="<ul>"; //ul문자열
//         for(var i=0;i<subject.length;i++){
//             out += "<li>"+subject[i]+" : "+score[i]+"</li>";
//         }
//         out+="</ul>";
//         out += "총점 :"+total+"점 평균 : "+avg+"점"; 
//         $("#result").html(out);
//     }
//     $("#subject").text(subject[++idx]);
//     $("#score").val(" "); // input 태그의 value비우기
//     $("#score").focus();// input 태그에 커서표시
// }

//5명의 사람들이 있다.
//5명이 놀다가 문득 궁금해졌다.
//우리들의 평균 키는 얼마일까.
//이 사람들의 궁금증을 해결 해주세요.
// member = ["김유신","김민수","송재열","남기정","서종순"]

const member = ["김유신","김민수","송재열","남기정","서종순"];
let idx=0;  //member배열의 인덱스
let height = new Array(); //키 저장 배열
let total = 0; // 전체 키의 합
let avg_below = new Array();//평균키보다 작은 사람들이 누구냐
$(function(){  //처음 첫번째 사람 이름이 뜨는
    $("#member").text(member[idx]); //?
})
function save(){
height.push(Number($("#height").val())); // html 데이터-> javascript 데이터
total += height[idx];
if(idx==member.length-1){
   var avg = total/member.length;

   var out = "<ul>";
   for(var i=0; i<height.length;i++){
        out += "<li>"+member[i]+" "+height[i]+"cm</li>";
        if(avg>height[i])
        avg_below.push(member[i]);
   }
   out += "</ul>";
   out += "평균키 : "+avg+"cm";
   out +="<div> 평균키 미만"+avg_below+"</div>"
   $("#result").html(out);

}

$("#member").text(member[++idx]); // 입력후 그다음 사람 이름이 나타나도록
$("#height").val(""); //숫자를 입력한후 입력한 숫자가 입력란에 없어지도록
$("#height").focus();  //숫자를 입력한후 커서가 입력란에 남아있도록
console.log(idx);

}
