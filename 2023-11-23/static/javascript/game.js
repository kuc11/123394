let board = new Array();
let bo = new Array();
// 중복없이 25개 숫자 저장하기
for( var i=1;i<=25;i++){
    var tmp=(Math.floor(Math.random()*100)+1);
    if(board.indexOf(tmp)==-1){             //중복유무확인
        board.push(tmp);}
        else i--;
}
 for(var i=0; i<board.length;i++)
 var v=board[i]; //결과는 아래것과 같다.
    console.log(board);
$(function(){
    

    
    $.each(board, function(i,v){   //i-인덱스로 설정, v- 배열값로 설정  //$("#numBox")
        $(".numBox").eq(i).text(v);
    });

    $(".numBox").on("click",function(){
        var count = 0;
        $(this).css("background","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);
        alert(board);
        board[idx]=0;
        for(var i=0; i<parseInt(board.length/5);i++){
            var tm= new Array();
            for(var k=0; k<parseInt(board.length/5); k++){
                    tm.push(board[i*parseInt(board.length/5)+k]);
            }
            bo.push(tm);
        }console.log(bo);
        
        var count=0;
        for(var i=0; i<parseInt(board.length/5); i++){
            var q=0;
            for(var k=0; k<parseInt(board.length/5);k++){
            if(bo[i][k].indexOf(0) != -1)
                q++;}
                if(q==5)
                count++
        }
        bo=[];
        endgame()
    });

});
function endgame(){
    
}

