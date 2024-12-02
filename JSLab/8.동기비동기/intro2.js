console.log(1)
setTimeout(() => {
    console.log(2)
},1000)//1초간 지연 //비동기적
console.log(3)
//1, 3 -> 2

// 파라미터를 함수로 하는 예제
function hamsu1(){
    print()//파라미터로 함수를 받을 수 있어서 호출이 가능
}
console.log(hamsu1)
hamsu1(() => console.log('hello1'))

hamsu1(function(){//함수에 이름이 없다.(익명함수-외부호출 불가)
    console.log('hello2')
})

function hamsu1(print, timeout){
    setTimeout(print, timeout)
}

hamsu1(() => console.log('hello1'), 2000)