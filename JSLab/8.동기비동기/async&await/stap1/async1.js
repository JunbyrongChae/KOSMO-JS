/*
만일 네트워크에서 10초동안 받아오는 이름이 있다고 가정
자바스크립트는 동기적으로 처리하므로 10초가 걸릴경우 다음으로 진행하지 못하고
기다리게 되는데 이 때 화면에는 10초동안 아무것도 출력되지 않은 상태에 놓이게 된다.
이것은 문제가 됨
해결방법은 오래걸리는 일은 비동기적 처리하도록 함 - 이 때 promise사용.
*/

function getUser(){
    return new Promise((resolve, reject) => {
        resolve('scott')
        //return 'scott'
    })
}

const userName = getUser()
userName.then(res => console.log(res))
userName.then(console.log())
console.log(userName)
