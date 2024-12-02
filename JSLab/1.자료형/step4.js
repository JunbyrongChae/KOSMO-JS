// undefined값이 할당되지 않은 상태 - 기본적으로 갖는 값
let age = undefined
//age = null

console.log(age)

age = 10

console.log(age)

setTimeout(() => {
    age = 100
    console.log(age)
}, 1000);