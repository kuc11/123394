
$(function(){
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
    //window.open( 주소, 대상, 옵션): 새로운 창을 띄운다.  ()문자열에 형태로 넣어야 한다
    // 대상(target) - _black , _self , _parent(자식페이지가 있어야 한다.)
    window.open(page+".html","","width=500,height=500");                              
}