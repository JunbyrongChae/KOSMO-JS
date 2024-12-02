// 콜백(callback) 패턴
// 1을 출력한 다음에 2가 출력되는 것을 보장받고 싶다면 콜백패턴을 사용한다.
// 일급함수 이라서  파라미터에 함수를 넘길 수 있다.
const a = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()//b()
    }, 2000)
}
const b = () => console.log(2)
a(() => {
    b()
})

//문제 : 2가 먼저 출력되고 1이 출력되도록 변경하시오.
//setTimeout함수가 1초후 1을 출력하도록 한다.
