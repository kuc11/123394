let board = new Array();

// 중복없이 25개 숫자 저장하기
for( var i=1;i<=25;i++){
    var tmp=(Math.floor(Math.random()*100)+1);
    if(board.indexOf(tmp)==-1){             //중복유무확인
        board.push(tmp);}
        else i--;
}
 for(var i=0; i<board.length;i++)
 var v=board[i]; //결과는 아래것과 같다.

$(function(){
    

    $.each(board, function(i,v){   //i-인덱스로 설정, v- 배열값로 설정  //$("#numBox")
        $(".numBox").eq(i).text(v);
    });

    $(".numBox").on("click",function(){
        $(this).css("background","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);
        alert(board);
        board[idx]=0;
        endgame()
    });

});
function endgame(){
    
}

