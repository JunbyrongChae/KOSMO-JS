// 할당 연산자
// 재할당 하려면 let으로 선언 할 것.

let a = 3
console.log(a)
a = a + 2 //5
console.log(a)
a+= 2; //먼저 +하고 그리고 대입한다. -> 7
console.log(a)
a*=3 //21 먼저 곱하고 그리고 대입한다.
console.log(a)
a%=3 //0
console.log(a)

//증감 연산자

console.log(a++)//후위 연산자이니까 먼저 출력하고 나중에 1을 증가 시킨다.
console.log(a)
console.log(--a) //전위 연산자 이니까 먼저 -1을 하고 그리고 출력을 한다.

console.log(1+a)
console.log(a-500)
console.log(a*5000)
console.log(a/2)
console.log(a%2)
console.log(1%2) //몫은 0이고 나머지는 1이다. - 분모가 작으니까
console.log(3%2) //몫은 1이고 나머지는 1이다.











