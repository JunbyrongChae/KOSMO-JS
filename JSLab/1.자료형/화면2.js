//alert("안녕")

const btns = document.querySelectorAll("ul li")
//console.log(btns.length)
/*
호이스팅(hoisting)
:블록안에서 선언된 지역변수가 코드 블록 밖으로 끌어오려지면서 강제로전역변수화 되는 현상

ES6가 지원되기 전에는 즉시 실행함수를 이용해서 이 문제를 해결함.
즉시 실행 함수
괄호가 2개 들어감
첫번째 - 함수의 선언부
두번째 - 함수 호출하는 괄호
익명함수 형태 인데 호출이 되는 이유는 두 번째 괄호가 있기 때문에 가능함.
*/
for(let j=0;j<btns.length;j++){
    btns[j].addEventListener("click", () => {
        console.log(j) // 0 1 2 
    })
}//end of for