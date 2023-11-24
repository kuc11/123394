// // 2차원배열

// // let arr=[
// //     [1,2,3,4,5,6,7,8],
// //     [10,20,30,44,55,66,77]
// // ];

// // for(var i=0;i<arr.length;i++){// 2번 반복 - arr에는 저장공간이 2개
// //     for(var k=0;k<arr[i].length;k++){//arr[0]인덱스 length, arr[1]인덱스 length
// //         document.write(arr[i][k] + " ");

// //     }
// //     document.write("<br>");
// // }
// let people = [
//         ["김유신",45,"군인"],
//         ["이순신",38,"군인"],
//         ["서종운",51,"변호사"],
//         ["김민수",32,"편의점알바"],
//         ["송재영",25,"농심연구원"],
//         ["이민재",29,"한화이글스"]

// ];
// for(var i=0; i< people.length; i++){
//     // for(var k=0; k<people[i].length ; k++){
//     //     document.write(people[i][0]+ " ");
//     // // }
//     // console.log("1");
//     // if(people[i][1]>30);
//     // document.write(people[i][0]+"," + people[i][2]+"<br>");

//     if(people[i][0].indexOf("김") !=-1)
//     document.write(people[i][1]+",,"+people[i][2]+"<br>");
// }


const board =[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
let x=0; y=0;
 //div가 실행되기도 전
 function draw(){
for(var i=0; i<board.length;i++)
    {
    for(var k =0; k<board[i].length; k++){
        if(board[i][k]==0)
        $("#box").append("&ensp;&ensp;");  //.html- 기존에 내용을 지운다.

        if(board[i][k]==1)
        $("#box").append("■");

        if(board[i][k]==2){
            $("#box").append("★");
        x=k; y=i;
        console.log(1);
        }
        
    }
    
    $("#box").append("<br>");
    }

 }

 $(function(){
        draw(); //function draw 실행 - draw함수 실행
})
 $(document).on("keyup",function(key){
//     // w-87, a - 65 , s-83 , d-68

//     // w,a,s,d 에 대한 동작 구현, 검은색 벽을 통과하지 못하게 만들기
    board[y][x]=0;
     switch(key.keyCode){// 키보드에서 누른 키 w,a,s,d중 선택하기
        case 87:         //w키 누른경우 , 위    
            y--;
            y = board[y-1][x]==1? y:--y;
           break;
         case 65:        //a키 누른경우 , 왼쪽
            x--;
            x = board[y][x-1]==1?x:x--;
             break;
         case 83:        //s키 누른경운 , 아래
            y++;
            y = board[y+1][x]==1? y:++y;
             break;
         case 68:        //d키 누른경우 , 오른쪽
            x++;
            x = board[y][x+1]==1?x:x++;
             break;
         default:
             console.log(keyCode);   }
             board[y][x]=2;
             $("#box").html("");
             draw();

//     // if(key.keyCode == 87){
//     //     board[y][x]=0;
//     //     board[--y][x]=2;
//          $("#box").html(" ")
//         draw();
//     //       }
    })
