
const container = document.querySelector("#root");
const NEWS_URL="https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL="https://api.hnpwa.com/v0/item/@id.json";

function getData(url){
    ajax.open("GET", url, false); 
    ajax.send(); 
    return JSON.parse(ajax.response); 
}

const ajax = new XMLHttpRequest();
const content = document.createElement('div');
//바로 이럴 때 전역변수를 사용하는 것이다. - NEWS_URL
const newsList = getData(NEWS_URL);

window.addEventListener('hashchange', () => {
    const id = location.hash.substring(1)
    const newsContent = getData(CONTENT_URL.replace('@id', id));
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title
    content.appendChild(title);
})

const ul = document.createElement('ul');
for(let i = 0; i < newsList.length; i++){
    const div = document.createElement('div');
    div.innerHTML = `
        <li>
            <a href="#${newsList[i].id}">
            ${newsList[i].title}(✨${newsList[i].comments_count})
            </a>
        </li>
    `
    ul.appendChild(div.firstElementChild);
}

//원천이 하나인데 사용하는 곳이 여러 군데 이면 그 사용갯수에 따라 바꾸어야 하는 문제가 잇다.
//예 ) root가 아니라 home으로 바뀌면 두 군데 모두를 수정해야하는 문제가 있다.
container.appendChild(ul);
container.appendChild(content);