console.log(1)
console.log(2)
console.log(3)
hamsu1()
//함수 선언시 function을 사용하면 호이스팅이 일어나서
//먼저 호출하더라도 정상적으로 출력이 된다.
function hamsu1(){
    console.log("hamsu1")
}
//arrow function 은 호이스팅이 일어나지 않음
wrap()
const wrap = () => {
    console.log("wrap")
}
//출력결과
// 1 2 3 순으로 출력됨 - 동기적임

//이것을 비동기적으로 만들어보자.