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
    getList('avengers', () => {
        console.log('어벤져스')
        getList('avatar', () => {
            console.log('아바타')
        })
    })
})

/*
출력되는 순서가 보장되지 않는 다는 점을 문제 삼아야 한다.
이러한 비동기 코드는 새로고침을 할 때 마다 검색되는 영화정보의 순서가 달라진다.
우리가 정확하게 서버로 갔다 오는 시간을 알 수 없기 때문에 동작하는 순서를 
보장할 수 없다.

왜 그러냐면 getList함수를 통해서 fetch함수로 서버로 요청이 전송되고 
그 서버에서 내용을 처리한 다름에 응답을 해주게 될 텐데 
예를 들어 겨울왕국은 서버에서 처리할 양이 많아서 시간이 오래 걸리고
어벤져스는 처리할 양이 적어서 시간이 적게 걸린다고 하면 일단 서버로
요청이 들어가는 출발은 겨울왕국이 먼저 되긴 했지만 어벤져스가 먼저
도착이 될 수도 있다는 것이다.

이때 꼭 겨울왕국이 먼저 그리고 어벤져스, 아바타 순서를 보장받고 싶다면 어떡하지?
*/