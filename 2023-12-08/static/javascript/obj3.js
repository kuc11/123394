//객체 , json


//전연변수
let name="";    // 입력한 이름저장
let age="";     // 입력한 나이저장

let list=[];    // 배열

let info = {
    100:{name:"이순신", job:"군인", 활동지:"여수"},
    101:{name:"김유신", job:"군인", 활동지:"경주"},
    102:{name:"장보고", job:"군인", 활동지:"진도"},
    103:{name:"문익점", job:"산업스파이", 활동지:"원나라"}
//  key:            value
}

// a=[ {c:"가", d:"나"}, {c:"다",d:"라"}];                 //배열안에 객체
// a[1].c

// f = { a:{c:"가" , d:"나"}, b:{c:"다" , d:"라}"}}        //객체 안에 객체
// f.a.c
// f[a].c


//html 태그 로드
$(function(){

    // $("button").on("click",save);
})

function save(){        // 저장 버특 클릭시 동작할 함수
    name = $("#name").val();
    age = $("#age").val();
    console.log(name,age);

    var obj={ 이름:name , 나이:age};
    list.push(obj);

    var out="";
    for(var object of list){        //in 인덱스를 저장 of 인덱스 안에 값을
        out += object.이름 +" "+object.나이+"<br>";
    }
    // $("#res").text(name, age);
    $("#res").html(out);
}


function list_print(){      //객체의 저장된 value(데이터)를 출력하는 함수
    // 객체의 key만 추출 하는 방법  - Object.keys(객체명);
    // 객체의 value만 추출하는 방법 - Object.values(객체명);
    // Object.keys(), Object.values() 의 결과는 배열에 저장된다.


    let info_keys = Object.keys(info);

    for(var key of info_keys){      //key 변수에는 info 객체의 key가 하나씩 저장
        $("#res").append(info[key].name+" "+ info[key].job+" "+info[key].활동지+"<br>");
    }
    let info_values = Object.values(info);
    
     alert(info_keys);


    // alert(info[100].job);       //key 가 숫자이기에 []대괄호 사용
}