/*
구조분해할당(destructuring assignment)
배열 데이터와 객체데이터에서 사용 가능
*/

const obj={
    a:1,b:2,c:3,x:7,y:100
}

console.log(obj.a)
const i  = obj.a
const j = obj.b

const{...rest}=obj
console.log(rest)

//rest1에 출력이 {}이면 object
const{c,...rest1}=obj
console.log(c,rest1)
console.log(c,rest1,rest['a'],rest.x)