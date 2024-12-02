add = (a, b) => {
    return a+b
}

//두 수의 합을 구하고 싶다면 어떻게 호출해야 하나요?
console.log(add(1,2)) // 3출력된다
console.log(add) //[Function: add]

/*
자스에서는 함수도 객체이니까 치환이 가능하다.
hap변수가 add의 주소번지와 같다. - 얕은복사
함수의 이름은 함수를 참조하고 있다.
그러니까 함수도 객체다 - 콜백함수 중요한 컨벤션이다.
*/
const hap = add
console.log(hap == add)
console.log(hap === add)
console.log(typeof add)
console.log(typeof hap)

//확인할 것들....
//자바에서처럼 메소드 오버로딩과 오버라이딩이 없다.
//자스에서는 파라미터가 달라도 이름이 같으면 호출된다.
//결론 : 같은 이름의 함수를 가질 수 없다.
console.log(hap())
console.log(hap(1,2))
console.log(hap(1))
console.log(hap(1,null))
console.log(hap(1,undefined))
console.log(hap(1,{}))
console.log(hap(1,[]))

hap1 = () => {
    return undefined
}

console.log(hap1())