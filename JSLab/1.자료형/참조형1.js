//json형식으로 설정 파일 -> npm init -y엔터 ->  package.json -> 설정, 의존성관계, 설치된 라이브러리, 단축 명령어 등록 
const user = {
    name: "이순신",
    age: 45,
    email: null,
}

console.log(user.name)
console.log(user.age)
console.log(user.email)
//없는 속성을 출력하려고 하면 undefined출력됨
console.log(user.myCar)
//아래 처럼 관리하는 것보다는 위 처럼 관리하는 것이 연관된 데이터라는 것을
//알아볼 수 있지 않을까???
const userName = "이순신"
const userAge = 45
const email = null

//원시형은 stack을 사용, 참조형은 heap을 사용함(객체도 포함)