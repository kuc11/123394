
//html body 태그안에 있는것들이 화면에 로드가 다된다음에 가져오기위해
$(function(){
    $("#mypw").on("keyup",function(){
        if($(this).val().length < 6 || $(this).val().length>12)
            $(".pwvaild").text("비밀번호 6~12자 입니다.")
    });


    $("#join").on("click",function(){
        if($("#myid").val() =='')     {  //myid 값이 비어있냐
            alert("아이디를 입력하세요");
            $("#myid").focus();
            console.log("asd");
        }
        if($("#mypw").val() != $("#pwre").val()){
            alert("비밀번호가 일치하지않습니다.");
            $("#mypw").val(' ');
            $("#pwre").val(' ');
            $("mypw").focus();
        } 
    });
});