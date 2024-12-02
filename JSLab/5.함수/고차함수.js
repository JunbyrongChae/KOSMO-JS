/* 
함수를 반환하는 함수
리덕스 컨셉을 재현 할 때 필요
구독발행 모델
쿼리함수
*/

const sayHello = ()=>{
    return function(){
        console.log('hello')
    }
}

const myFunc = sayHello()
myFunc()