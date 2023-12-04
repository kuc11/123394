$(function(){
$("#search").on("keyup",function(){

    var word =$(this).val();        //여기서 this 는 search를 의미

    $(".detail>tr").filter(
        function(){
            $(this).toggle(  $(this).text().includes(word));
             console.log($(this).text().includes(word));  //여기서 this 는 tr을 의미
        }
    );
    // $(".detail>tr").eq(1).toggle(true);
});


});