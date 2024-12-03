/*
    만일 네트워크에서 10초 동안  받아오는 이름이 있다고 가정해 본다.
    자바스크립트는 동기적으로 처리하므로 10초가 걸릴 경우 다음으로 진행하지 못하고
    기다리게 되는데 이 때 화면에는 10초 동안 아무것도 출력되지 않은 상태에 놓이게 된다.
    이것은 문제가 된다.
    해결 방법은 오래 거리는 일들은 비동기적으로 처리할 수 있도록 해주어야 한다.
    이럴 때 Promise사용한다.
*/
/*
    상태변화 시각화
    1) Pending상태로 시작됨
    2) 작업이 성공하면 fullfilled상태로 변경되고, 실패하면 Rejected상태로 변경
    3) 한 번 fullfilled 또는 Rejected상태로 변경되면 다시 상태가 바뀌지 않음.(불변객체)
*/
function getUser() {
    return new Promise((resolve, reject) => {
        //Rejected(거부됨) - Promise실패하여 에러 또는 이유를 반환한 상태
        //reject함수가 호출되면 Pending에서 Rejected상태 전환
        //catch()메소드에 전달된 콜백이 실행이 된다.
        //resolve('scott')//fulfilled(이행됨)- promise가 성공적으로 완료됨. 반환한 상태
        //return 'scott' Promise 상태가 pending상태
        //resolve나 reject호출되지 않은 상태
    })
}

const userName = getUser()
userName.then(console.log)
console.log(userName)