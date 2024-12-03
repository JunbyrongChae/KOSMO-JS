//동기  Synchronous와 비동기 Asynchronous
// 동기 : 순차적으로 코드 실행함
// 비동기 : 순차적으로 코드 실행 안됨

console.log(1)
setTimeout(()=> {
    console.log(2)
}, 1000)
console.log(3)

//1 3 2 출력