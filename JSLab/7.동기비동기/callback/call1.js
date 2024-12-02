// 콜백(callback) 패턴
// 대표적인 동기적인 코드 이다.
const a = () => console.log(1)
const b = () => console.log(2)

a()
b()

//문제 : 2가 먼저 출력되고 1이 출력되도록 변경하시오.
//setTimeout함수가 1초후 1을 출력하도록 한다.
