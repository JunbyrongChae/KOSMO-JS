//Web API에는 비동기 또는 동기를 지원하는 API가 있다. - XMLHttpRequest이다.
//웹서비스의 시작은 요청으로 부터 시작된다.
//오라클 서버 대신에  해커뉴스 서버에서 뉴스정보를 제공받는다. 그러기 위해 요청한다.
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
//비동기와 동기를 지원하는 객체 - XMLHttpRequest
const ajax = new XMLHttpRequest();

ajax.open("GET", NEWS_URL, false);
ajax.send(); //실제 요청이 진행된다.

console.log(ajax.response);
//XMLHttpRequest가 제공하는 속성이다 - response
const newsList = JSON.parse(ajax.response);
const ul = document.createElement("ul");
for(let i = 0;i<5;i++){
    const li = document.createElement("li");
    li.innerHTML = newsList[i].title;
    ul.appendChild(li);
}

document.querySelector("#root").appendChild(ul);