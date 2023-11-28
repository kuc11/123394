
//html body 태그안에 있는것들이 화면에 로드가 다된다음에 가져오기위해
$(function(){
    

});

$(function(){

    //select 선택 값 변경하기
    $("#route option").eq(2).prop("selected",true);


    //전부체크 체크박스에 체크시 전체 체크로 변하게 또는 반대 상황
         $("#all").on("click",function(){
            let isCheck= $(this).is(":checked"); //check 인지 checked 인지 판별
            if(isCheck){
                $(".ability_list").prop('checked',true);       
                    }
            else
                $(".ability_list").prop('checked',false);            
            });

        $(".ability_list").on("click",function(){
            var chk_count= $(".ability_list:checked").length;  //능력 체크박스에 체크된 갯수
            var all_check= $(".ability_list").length;    //능력 체크박스 총 갯수
            if(chk_count == all_check)                  //체크된 갯수와 총 갯수를 비교
                $("#all").prop("checked",true);         //체크갯수와 총 갯수가 같다면 전체 체크박스에 체크
            else
                $("#all").prop("checked",false);        //체크갯수와 총 개숫가 다르면 전체 체크박스에 체크해제
        })
   


    $("#mypw").on("keyup",function(){
        if($(this).val().length < 6 || $(this).val().length>12)
            $(".pwvaild").text("비밀번호 6~12자 입니다.")
    });

    // $("#mypw").on("keyup"),fuction(){

    //}

    $("#myphone").on("keyup",function(){
        var num = $(this).val();
        // 정규표현식
        // 1. num=num.replace(/[^0-9]/g,'').replace(/^(\d{3})(\d{4})(\d{4})$/,`$1-$2-$3`);
        num=num.replace(/[^0-9]/g,'').                                  //숫자이외에 문자를 제거
                replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,`$1-$2-$3`).  //최소1자리부터 최대 11자리 사이에 하이폰(-)을 넣음
                replace(/(\-{1,2})$/g,"");        
        $(this).val(num);


        //문자열은 기본구조가 배열의 구조이지만 자바스크립트에서 문자열 객체로 사용되기
        //때문에 객체전용 함수가 따로 존재한다.
        // if(num.length==4){
        //     num=num.slice(0,3)+"-"+num.slice(3);        //문자열은 splice가 3번째에 대입은 안되고 앞에 2번째까진 된다. ex)num.splice(3,0)
        //     $(this).val(num);
        // }
        // if(num.length==9){
        //     num= num.slice(0,8)+"-"+num.slice(8);
        //     $(this).val(num);
        // }

    });
    $("#join").on("click",function(){
        
        //파일업로드 확장자 검증
        console.log( $("#myface")[0].files[0].name);
        var fname =$("#myface")[0].files[0].name;
        if( !fname.toLowerCase().includes(".png")){
            alert("png 형식의 이미지만 가능합니다.");
        }

        //select 값 가져오기
        var v=$("#route").val();  //select 안에 option 에 value 값을 가져온다
                                  //$("#route option:selected").val(); 로 대체가능
        alert(v);



        // var chk = $(".ability_list").eq(0).is(":checked");
        var len = $(".ability_list:checked").length;
        alert(len);

        let chk =''; // 체크박스에 체크된 값들 저장 변수
        $.each($(".ability_list:checked"), function(){
            chk += $(this).val()+ " ";
        });
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