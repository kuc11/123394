
$(function(){
    $("#size").attr("disabled",true);
    $("#color").attr("disabled",true);

    
    $("#make").on("click",function(){
        openPage("make");
    });

    $("#size").on("click",function(){
        openPage("size");
    } );

    $("#color").on("click",function(){
        openPage("color");
    } );
})

function openPage(page){

    var sheight = screen.availHeight;
    var swidth = screen.availWidth;

    //window.open( 주소, 대상, 옵션): 새로운 창을 띄운다.  ()문자열에 형태로 넣어야 한다
    // 대상(target) - _black , _self , _parent(자식페이지가 있어야 한다.)
   child= window.open(page+".html","",
                "width=500,height=300,top="+(sheight/2-150)+",left="+(swidth/2-250));    
    
    
}

// 브라우저 에는 Dom 이라는 구조를 사용하여 페이지를 표시한다.
// document object model - html 문서를 객체화
// html 문서의 내용이 브라우저 화면에 표시되는 과정
// 파싱 - 렌더링 - 표시