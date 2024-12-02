// 콜백(callback) 패턴
// 1을 출력한 다음에 2가 출력되는 것을 보장받고 싶다면 콜백패턴을 사용한다.
// 일급함수 이라서  파라미터에 함수를 넘길 수 있다.
const a = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()//b()
    }, 2000)
}
//b함수도 일정한 시간이 지나서야 특정한 코드를 실행할 수 있는
//비동기 코드로 만들졌다.
//파라미터로 함수를 넘길 수 있다. - 일급함수
const b = (callback) => {
    setTimeout(() => {
        console.log(2)
        callback()
    }, 2000)
}
const c = () => console.log(3)
a(() => {
    b(() => {
        c()
    })
})

//문제 : 2가 먼저 출력되고 1이 출력되도록 변경하시오.
//setTimeout함수가 1초후 1을 출력하도록 한다.
