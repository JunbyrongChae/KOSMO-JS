const getList = (query, callback) => {
    return new Promise(resolve => {
        fetch(`https://omdbapi.com/?apikey=b361af58&s=${query}`)
            .then(res =>  res.json())//Promise 인스턴스
            .then(res => {
                console.log(res)
                resolve()
            })
    })
}

//insert here
// wrap()에러 발생 - 호이스팅이 화살표함수에서는 없다.
const wrap = async() => {
    await getList("frozen")
    console.log('겨울왕국')
    await getList("avengers")
    console.log('어벤져스')
    await getList("avata")
    console.log('아바타')
}
//선언한 후에 호출이 가능하다.
wrap()