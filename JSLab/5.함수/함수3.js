// 함수는 하나의 데이터 이다.

const getNumber = function(){
    return 123
}
const getNumber2 = () => {
    return 5
}

console.log(typeof getNumber)
console.log(typeof getNumber()) //number출력. 왜냐면 타입을 묻는 거니까
console.log(getNumber()) //123출력. 왜냐면 값을 묻는 거니까
console.log(typeof getNumber2()) //number출력
console.log(getNumber2()) //5가출력. 왜냐면 값을 묻는 거니까. 타입을 묻는것이 아니라