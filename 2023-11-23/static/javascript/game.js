let board = new Array();
var a =0; 
// 중복없이 25개 숫자 저장하기
for( var i=1;i<=25;i++){
    var tmp=(Math.floor(Math.random()*100)+1);
    if(board.indexOf(tmp)==-1){             //중복유무확인
        board.push(tmp);}
        else i--;
}
 for(var i=0; i<board.length;i++)
 var v=board[i]; //결과는 아래것과 같다.
    // console.log(board);
$(function(){

        $(".modal_bg").on("click",function(){
            $("#result_modal").hide();
        });
    
    $.each(board, function(i,v){   //i-인덱스로 설정, v- 배열값로 설정  //$("#numBox")
        $(".numBox").eq(i).text(v);
    });
    
    $(".numBox").on("click",function(){
        var j= parseInt(board.length/5);
        var count = 0;
        var bingo =0;
        $(this).css("background","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);
        // console.log(board);
        board[idx]=0;
        // for(var i=0;i<5;i++){
        //     var count1 =0;
        //     var count2 =0;
        //     var count3 =0;
        //     var count4 =0;
        //     for(var k=0;k<5;k++){
                
                if(board[i*5+k] == 0)
                    count1++;
                if(board[k*5+i] == 0)
                    count2++;
                if(i==4){
                    if(board[k*6] == 0)
                    count3++;
                    if(board[(k+1)*4] == 0)
                    count4++;
                    console.log(count4);
                    }
                
        //         if(count1==5)
        //             bingo++;
        //         if(count2==5)
        //             bingo++;
        //         if(count3==5)
        //             bingo++;
        //         if(count4==5)
        //             bingo++;
        //         }
        // }
        // if(bingo>a && bingo<5) {
        // console.log(bingo);
        // alert(`${bingo}번째 빙고입니다.`);
        // a++;
        // }

        endgame()
    });
    
});
function endgame(){
    var row=0; col=0; end=0; cross=[0,0];
    
    for(var i =0;i<5 ;i++){
        for(var k =0;k<5 ;k++){     //빙고확인하기
            if(board[i*5+k]==0) row++;  //가로방향으로 5줄 전부확인
            if(board[k*5+i]==0) col++;  //세로방향으로 5줄  전부확인
        }
        if(board[i*6]==0) cross[0]++;   //왼 -> 오 대각선
        if(board[(i+1)*4] ==0) cross[1]++;//오 -> 왼 대각선

        if(cross[1]==5)end++;
        if(cross[0]==5)end++;
        if(row==5) end++;
        if(col==5) end++;

        row=0; //한줄씩 확인 할 때 마다 0개부터 확인해야하므로 초기화
        col=0;  //1열씩 확인 할 때 마다 0개부터 확인해야하므로 초기화
    }
    console.log(end);
    if(end==5){//5줄 빙공 완성
        $("#result_modal").show(); //display:none 처리된거를 풀어준다. $(#"result_modal").css("display","block")
        $(".result").text("5줄 빙고 완성");

      
    }else if(end>=6){// 빙고 실패
        $("#result_modal").show();
        $(".result").text("빙고실패");

    }
}

