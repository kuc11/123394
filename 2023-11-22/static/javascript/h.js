const name = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"];  //const 데이터 변경 방지
const era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38];
var total = 0;
var avg = 0;
let out= new Array();

//평균 약 2.98
for(i=0;i<era.length;i++){
    total += era[i];  //total=total+era[i] // 평균자책점(era) 총점구하기
}
avg = total/era.length; //평균자책점(era) 평균 구하기
for(i=0;i<name.length;i++){
    if(avg<era[i]){  //era의 평균인이상 값 찾기
        out.push(name[i]);  //era 평균이상인 값의 인덱스를 name의 인덱스로 사용
    }
}

document.write("평균이상:"+out.join(","));