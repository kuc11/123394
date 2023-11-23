const movie_name = ["서울의밤","프레디의피자가게","사채소년",
"헝거게임","더와일드","더마블스","30일","나폴레옹","빅슬립"];

const grade = [8.7, 7.3, 7.3, 6.7,8.2, 3.9, 6.9, 9.6, 9.0];

const nation = ["한국","미국","한국","미국","미국","미국","한국",
"영국","한국"]

//영화 제목을 검색하여 평점(grade)와 국가(nation)을 출력하세요.



function search(){
    var movie = ($("#movie").val()).replace(/\s/g,' '); //replace 로 공백을 제거해 검색란에 공백이 있는 상태여도 검색에는 문제없음

    let res = "";
    console.log(movie);
    let idx=movie_name.indexOf(movie); //입력한 영화이름이 movie_name 배열에 몇번째로 위치해있는지
    if(idx==-1){
        res=`존재하지않음`
    }
    else{
        res=`평점:`+grade[idx];
        res+=`<br>국가:`+nation[idx]
    }
    // for(i=0; i<movie_name.length; i++)
    // {
    //     if(brand==movie_name[i]){
    //         idx=i;
    //         console.log(i);
    //     }
       
    // }

  
    $("#result").html(res);
    console.log(res);
    $("#movie").val("");
}

// 다차원배열 - 1차원배열에 1차원배열들을 연결하여 만들어지는 배열
//              여러개의 1차원배열들이 존재하는 배열
// let num1 = [1,2,3];   //1차원 배열
let num = [[1,2,3] , [4,5,6] , [11,22,33,44]];  //2차원 배열
// 2차원배열은 인덱스가 2개 이기때문에 반복무노 2번 사용된다.

for(var i=0; i<num.length ; i++ ){
    for(var k=0; k<num[i].length; k++){
        document.write(num[i][k]+" ");
    }
}
