const str1 = 'world'
console.log(str1)
//world자체도 문자열 상수라고 합니다.
//만일 문자열 상수에 변수를 같이 쓰고 싶을 땐 템플릿 리터럴(ECMAScript6- 2015년 표준 - ES6)
//var는 ES5에서 let과 const ES6발표 
const str2 = `Hello ${str1}`
console.log(str2)
// null과 undefined는 다르다...
let str3
console.log(str3)
//널인가? 아니면 undefined