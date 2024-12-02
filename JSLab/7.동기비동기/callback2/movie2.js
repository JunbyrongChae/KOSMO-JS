const getList = (query,callback) => {
    fetch(`https://omdbapi.com/?apikey=93ea17b5&s=${query}`)
    .then(res => res.json())//promise인스턴스
    .then(res => {
        console.log(res)
        callback()
    })
}

getList("avengers", () => {
    console.log("어벤져스");
    getList("frozen", () => {
        console.log("겨울왕국")
        getList("starwars", () => {
            console.log("스타워즈")
        })
    })
})
