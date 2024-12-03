const myPromise = new Promise((resolve, reject) => {
    const success = false;
    setTimeout(() => {
        if(success){
            resolve('작업 성공')
        }else{
            reject('작업 실패')
        }
    }, 1000)
})

myPromise
    .then(result => console.log('fullfilled상태'), result)
    .catch(error => console.log('Rejected 상태'), error)
console.log('Pending상태 : 작업이 진행 중입니다.')