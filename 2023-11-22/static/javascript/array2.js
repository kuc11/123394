
// let num =[10,20,30,40,50,];

// // num 배열에 10단위로 100까지 숫자를 추가로 저장하세요
// // num.push(60,70,80,90,100); 밑에와 결과는 같음
// for(i=6;i<=10;i++){
//     num.push(i*10);
// }


// //num배열에 저장된 숫자를 한줄 씩 출력하세요.
// //for(var i = 0;i<num.length;i++){
// //      document.write(nump[i]+"<br>");
// //} 결과는 아래와 비슷????
// var out = "";
// var ou = "";
// for(i=0;i<num.length;i++){
//     out+=num[i]+"<br>";
//     console.log(out);
// }

// // $(function(){
// //     $("#result").html(out);
// // })

// //num배열에 저장된 숫자들에게 +3을 해주고 출력하시오
// // for(var i=0; i<num.length;i++){
// //     num[i]=num[i]+3;
// //     document.write(num[i]+"<br>");
// // }

// // for(i=0;i<num.length;i++){
// //     ou+= num[i]+3 +"<br>";
// // }
// // $(function(){$("#result").html(ou);
// // })

// // num배열에서 55보다 큰 숫자들만 출력하세요.
// for(var i=0; i<num.length; i++){
//     if(num[i]>55){
//         document.write(num[i]+"<br>");
//     }
// }

let num1=[1,2,3];
let num2=[4,5,6];
// 두 배열에 같은 인덱스위치에 있는 숫자들끼리의 합을 출력하세요.
// 결과 -> 5 7 9
// for(var i=0;i<num1.length;i++)
// {
//     document.write(num1[i]+num2[i]);
// }
//num1과 num2 배열에서 짝수에 해당하는 숫자만 num3 이라는 배열에 저장하고 출력
let num3 = new Array();
for(var i= 0; i<num1.length; i++){
    if(num1[i]%2==0){
        num3.push(num1[i]);
    }
}
for(var i=0;i<num2.length;i++){
    if(num2[i]%2==0){
        num3.push(num2[i]);
    }
}
document.write(num3);















