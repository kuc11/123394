let name=["하지원","전지현","남기현",
"이다희","이가림","김정환"];
let score = [//[국어,수학,영어, 총점, 평균]
[78,87,54,219,73],      //하지원 점수
[80,70,60,210,70],      // 전지현 점수
[88,99,65,252,84],      //남기현 점수
[94,34,87,215,71],      //이다희 점수
[10,20,30,  60,20],     //이가림 점수
[1,2,3, 6,2]        //김정환 점수
];
$(function(){
function over(){
let na = $("#name");
let sc = new Array();
let rs="";
for(var i=0; i<=name.length;i++){
if(na==name[i]){
for(var k=0;k<=score[i].length;k++){
    if(k==4)
    a=0;
    else
    na+=score[i][k];
}
}
}
rs=`국어:${na[0]}점  수학:${na[1]}점  영어:${na[2]}점 평균:${na[3]}`;
$("#result").html(rs);
}
})