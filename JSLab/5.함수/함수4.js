// 자스에서는 함수도 객체 취급을 한다.
// 함수를 호출할 때 파라미터 자리에 쓸 수 있다. - 자바는 불가함.

const a = () => {
    console.log('A')
}

const b = (c1) => {
    console.log(c1)
    c1()
}
//b함수를 호출할 때 파라미터로 함수 a를 넘길 수 있다.
b(a)