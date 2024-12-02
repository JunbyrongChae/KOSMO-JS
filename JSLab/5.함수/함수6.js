/* 
함수형 프로그래밍 유행 중...ㅅㅂ
함수의 종류
1. 선언적 함수 : 이름을 붙혀서 정의한 형태
- 자바스크립트파일을 읽을 때 선언적 함수를 우선적으로 읽어줌
- 호출 위치가 자유롭다.
2. 익명함수 : 함수에 이름이 없이 정의하는 형태
- 익명함수 자체로는 호출 불가.
- 변수에 함수를 대입하거나 특정 이벤트객체에 대입하는 식으로 호출이 가능함
3. 대입형 함수 : 변수에 익명함수가 대입된 형태
4. 즉시 실행 함수 : 함수가 자기자신을 정의 하자마자 바로 자신을 호출
*/

//5. 생성자 함수
function Counter(){
    this.sum = 0;
    this.count = 0;
}

const obj = new Counter();
console.log(obj.count)
obj.sum+=1
console.log(obj.sum);

//1. 선언적 함수
function methodA(){
    const a =1
    const b = 2
    console.log(a+b)
    return a+b
}
methodA()

const z = methodA()
console.log(z)
console.log(methodA())
//z()
const x = methodA
x()