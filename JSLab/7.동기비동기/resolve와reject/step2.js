// Resolve와 Reject 그리고 에러 처리
// resolve는 정상일 때, reject는 에러 일 때
// resolve가 실행되면 reject 실행되지 않고 반대로 reject실행되면 resolve실행안됨
const delayAdd =  user => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(user > 10){
                reject(`${user}는(은) 10보다 클 수 없습니다.`)
                //입력값이 유효하지 않은 값이므로 함수를 종료한다.
                return //if문에서 return을 만나면 함수가 종료된다.
            }
            console.log(user)
            resolve(user+1)
        }, 1000)
    })
}

//insert here
// 테스트 시나라오 - 만일 5를 입력받았으면 에러함수는 호출이 안됨
// 성공일 땐 5에 1을 더한 6이 출력된다.
delayAdd(16)
    .then(res => console.log(res))//10보다 작으면 실행
    .catch(err => console.error(err))//15이면 실행
    .finally(() => console.log('done!!!'))