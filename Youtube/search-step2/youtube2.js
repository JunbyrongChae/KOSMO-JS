const keyword = document.querySelector('#keyword');

//input textfield에 입력 한 후 엔터 쳤을 때
keyword.addEventListener('keypress', (event) => {
    //엔터키코드값은 13
    console.log("onkeypress is enter"+event.keyCode);
    //검색 함수 호출
    handleSearch();
})

const handleSearch = () => {
    const user = document.querySelector('#keyword').value;
    console.log("handleSearch : "+user);
    search(user);
}

const search = (user) => {
    //비동기 통신 하여 결과 얻음
    const videoList = []
    const ajax = new XMLHttpRequest();
    const key = "AIzaSyCWU2V-R-yjCOI1rREd1FTmhVm1bXSmZik"
    const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${user}&key=${key}`;
    
    ajax.open("GET", SEARCH_URL, false);
    ajax.send();

    const result = JSON.parse(ajax.response);
    const items = result.items;

    videoList.push('<ul class="videos">')
    items.map((item) => `
        <li class="container">
            <div class="video">
                <img class="thumbnail" src="${item.snippet.thumbnails.medium.url}"></img>
            </div>
            <div>
                <p class="title">${item.snippet.title}</p>
                <p class="channelTitle">${item.snippet.channelTitle}</p>
            </div>
        </li>
    `);
    videoList.push('</ul>')


    document.querySelector("#root").innerHTML = videoList.join("");
}