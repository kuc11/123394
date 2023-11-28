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
        for(var i=0;i<5;i++){
            var count1 =0;
            var count2 =0;
            var count3 =0;
            var count4 =0;
            for(var k=0;k<5;k++){
                
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
                
                if(count1==5)
                    bingo++;
                if(count2==5)
                    bingo++;
                if(count3==5)
                    bingo++;
                if(count4==5)
                    bingo++;
                }
        }
        if(bingo>a && bingo<5){
        console.log(bingo);
        alert(`${bingo}번째 빙고입니다.`);
        a++;
        }
        else if(bingo==5)
        $(function(){
        $("#result_modal").modal(show);});
        endgame()
    });
    
});
function endgame(){
    
}

