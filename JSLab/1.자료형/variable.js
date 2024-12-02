let a //변수선언
const b = 1 //상수선언-재정의 불가
// b = 2 : 불가능
a = 2 //가능

let i
//for(const i=1;i<10;i++){} : 불가능 - 변수 i는 상수라서 재할당 불가능
for(let i=1;i<10;i++){ //가능
    console.log(i)//1,2,3,4,5,6,7,8,9
}///// end of for문
console.log(i) //10 