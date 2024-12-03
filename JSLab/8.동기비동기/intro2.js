console.log(1)
//1초가 지나면 우리가 전달한 함수가 실행됨
//setTimeout함수의 파라미터 2가지
//첫번째 파라미터에 함수가 온다. - 일급함수, 고차함수
setTimeout(() => {//비동기라고 말한다.
    console.log(2)
}, 1000) // 두번째 파라미터에는 지연시간을 설정함.
console.log(3)

//파라미터를 함수로 하는 예제를 만들어 본다.
function hamsu1(print){
    print()// 파라미터로 함수를 받을 수 있어서 호출이 가능하다.
}
console.log(hamsu1)

hamsu1(() => console.log('hello'))

hamsu1(function (){//함수의 이름이 없다. 익명함수. 외부에서 호출이 불가
    console.log('hello2')
})

function hamsu1(print, timeout){
    setTimeout(print, timeout)
}

//insert here
hamsu1(() => console.log('test'),2000)