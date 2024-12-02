const getList = (query, callback) => {
    fetch(`https://omdbapi.com/?apikey=b361af58&s=${query}`)
        .then(res =>  res.json())//Promise 인스턴스
        .then(res => {
            console.log(res)
            callback()
        })
}

//insert here
getList('frozen', () => {
    console.log('겨울왕국')
})
getList('avengers', () => {
    console.log('어벤져스')
})
getList('avatar', () => {
    console.log('아바타')
})