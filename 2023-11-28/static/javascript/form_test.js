$(function(){
$("#allchk").on("click",function(){
    // if($(this).prop(checked))
   let isCheck = $(this).is(":checked");
   console.log(isCheck);
    if(isCheck){
    $(".agree").prop("checked",true);
    }
    else
    $(".agree").prop("checked",false);

    $(".agree").on("click",function(){
        var chk_count= $(".agree:checked").length;  //능력 체크박스에 체크된 갯수
        var all_check= $(".agree").length;    //능력 체크박스 총 갯수
        if(chk_count == all_check)
            $("#allchk").prop("checked",true)
        else 
            $("#allchk").prop("checked",false);
            
       
            
    });

});

    


$("#pass").on("click",function(){
    console.log("1");
});



});