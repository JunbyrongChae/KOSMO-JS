console.log(1)
console.log(2)
console.log(3)

/* 
출력결과
123순으로 출력 -동기적

비동기적으로 만들어보자
132순으로
*/

setTimeout(() => {
    console.log(1)
}, 1000)
setTimeout(() => {
    console.log(2)
}, 3000)
setTimeout(() => {
    console.log(3)
}, 2000)

/* 
함수 선언시 function을 사용하면 호이스팅이 일어나서
먼저 호출하더라고 정상 출력
*/
hamsu1()
function hamsu1(){
    console.log("hamsu1")
}
//arrow function은 호이스팅 일어나지 않음
wrap1()
const wrap1 = () => {
    console.log("wrap1")
}