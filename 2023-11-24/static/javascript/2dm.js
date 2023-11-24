let image = ["귤.jpg","망고.jpg","멜론.jpg","바나나.jpg",
"사과.jpg","수박.jpg","감.jpg","체리.jpg"];

let board = new Array(); //게임판

let box =0;
let num = [[1,2,3],[4,5,6]];
let bos = 0;
let clk =0; //클릭 횟수
let click_image=0; //첫번째 클릭한 이미지
let pic = [-1,-1]; // 서로다른이미지 선택한경우


$(function(){
    box=$(".pic").length
    //box에 숫자가 들어간만큼

    for(var i =1; i<=parseInt(box/2);i++){
        var tmp = new Array();
        for(var k=1; k<= parseInt(box/2); k++){
            var t = Math.floor(Math.random()*parseInt(box/2));
            if(tmp.indexOf(t)==-1)
                tmp.push(t);
            else
            k--;
        }
        board.push(tmp);
        console.log(tmp);
       
    }
    for(var i=0; i<board.length;i++){
        for(var k=0; k<board[i].length;k++){
            $(".pic").eq(i*board[i].length + k ).
                find("img").attr("src","./static/images/"+image[board[i][k]]);
                
                // $(".pic").eq(i*board[i].length + k ).
                //     find("img").hide();
        }     
    }


    $(".pic").on("click",function(){
        $(this).find("img").show();
        clk++;
        var th = $(".pic").index($(this));  //내가 클릭한 이미지가 몇번째 div이냐?
        if(clk==1) click_img = board[parseInt(th/parseInt(box/2))][th%parseInt(box/2)];
                    pic = th;
        if(clk==2){
            var sec = board[parseInt(th/parseInt(box/2))][th/parseInt(box/2)];
            if(click_img ==sec)
            alert("같은 이미지 찾음");
            else{
                $(".pic").eq(th).find("img").hide();
                $(".pic").eq(pic).find("img").hide();
            }
            clk=0;
            click_img=0;
        }
    })
});