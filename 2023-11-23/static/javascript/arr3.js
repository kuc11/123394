const store = ["슈펜","니꼴밀라","피에를가르뎅 ","엘칸토 ",
"미쏘","치크","뉴발란스","애슐리","자연별고","코코몽키즈랜드"];

const floor = [1,1,1,4,3,5,2,7,8,10];
const  zone = ["D", "B", "C", "A", "D", "A", "C", "A", "A", "A"];

//store - 매장명, floor - 층수, zone-총별구역

//매장명을 입력하면 매장의 위치를 출력

//window.onload=function(){}
$(function(){                    //Enter키를 누르면 검색되는
    //document.getElementById("store")
    //발생순서 1.keydown:키를 누르면, 3.keyup:키를 누르고 있던 손가락을 때는, 2.keypress: 키를 누르고 있는

    $("#store").keyup(function(key){
        if(key.keyCode==13){   //Enter 코드값은 13이다. 
            store_search();
        }
        
    })
});

function store_search(){
    var brand =$("#store").val();      //input에 입력한 브랜드명 불러오기
    //배열에서 데이터 존재유무 확인
    var idx = store.indexOf(brand);
    if(idx==-1){
        $("#result").text("존재하지않는 브랜드입니다.");
    }
    else{
        var res = `<b>${floor[idx]}</b>층 , ${zone[idx]}구역`;
        res += `<h3>${floor[idx]} 층 매장`;
        let same_floor = new Array();
        for(var i=0; i<floor.length; i++){
            if(floor[i]==floor[idx] && i!=idx){
                same_floor.push(store[i]);
            }
        }
            res += same_floor;
        $("#result").html(res);
    }
}
    // 위와 결과가 같다. 
    //for(var i=0; i<store.length;i++){
    //     if(store[i] == brand)
    //     alert("찾았다"+i+"번째인덱스");
    // }
    //}