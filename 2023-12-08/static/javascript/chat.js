function send(){
    var send_data={writer:$("#writer").val() , content:$("#content").val()};
    send_data= JSON.stringify(send_data);       // 자바스크립트를 json 으로 변환

    var xml = new XMLHttpRequest();
    xml.onload=function(){
        var date = JSON.parse(this.response);       //파일이 아니라서 response로
        chat_show(data);
    };
    xml.open("POST","http://krdrive.ipdisk.co.kr:8000/test/data.php");
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
    xml.send( "x="+send_data);
          // server 에게 지금보내는 데이터의 유형을 알림
}


function chat_show(data){
    var out="";
    $.each(data, function( i , msg){                                 //msg 에 객체를
        out += `<li class='chat'><div class='write_info'>
        <b class='name'>${msg.writer}</b>
        <span class='date'>${msg.date}</span></div>
        <div class='content'>${msg.content}</div></li>
        `;
    });
    $("#chat_list").html(out);
    $("#content").val('').focus();
}