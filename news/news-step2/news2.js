//Web API에는 비동기 또는 동기를 지원하는 API가 있다. - XMLHttpRequest이다.
//웹서비스의 시작은 요청으로 부터 시작된다.
//오라클 서버 대신에  해커뉴스 서버에서 뉴스정보를 제공받는다. 그러기 위해 요청한다.
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
//비동기와 동기를 지원하는 객체 - XMLHttpRequest
const ajax = new XMLHttpRequest();
//어떻게 클릭했는지 알 수 있을까? - > a태그 - 링크 - 
ajax.open("GET", NEWS_URL, false);
ajax.send(); //실제 요청이 진행된다.

//console.log(ajax.response);

window.addEventListener('hashchange', () => {
    console.log(location.hash.substring(1))
})

const newsList = JSON.parse(ajax.response);
const ul = document.createElement("ul");
for(let i = 0;i<5;i++){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${newsList[i].id}`;
    a.innerHTML = `${newsList[i].title}(✨${newsList[i].comments_count})`;
    li.appendChild(a);
    ul.appendChild(li);
}

document.querySelector("#root").appendChild(ul);