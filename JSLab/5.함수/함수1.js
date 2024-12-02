/*
    함수란 특정한 일을 수행하는 코드의 집합
    장점: 묶어두면 재사용이 가능하고 높은 가독성을 가지면서 유지보수에 좋다.
    언제 선언하지?
    : 똑같은 일을 계속 반복하는게 아니라 함수로 만들어서 필요할 때 마다 재사용이 가능함.

    자스에서 함수는 객체이다.
    자스에서는 리턴타입을 선언하는 자리가 없다. - 컴파일을 하지 않아서 그런가???
    자스에서는 런타임에 타입이 결정된다.
    return을 쓰지 않으면 undefined가 반환됨 - 디폴트
*/
// ES6 - arrow function
// function hello(){}

const hello = () => {
    console.log('hello')
    return 'world'
}

//hello()

// 질문 - 자바스크립트에서는 함수도 파라미터로 넘길 수 있다.
//그렇다면 hello() 와 hello는 다른가? 아님 같은 걸까?
console.log(hello)
//hello함수에 반환값이 없으니까 undefined가 출력된다.
//만일 return뒤에 값을 주면 그 값이 출력된다.
console.log(hello())

let a
console.log(a)