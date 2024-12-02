const ajax = new XMLHttpRequest(); //비동기통신객체 - 생성
let content = "";
const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=날씨&key=AIzaSyCWU2V-R-yjCOI1rREd1FTmhVm1bXSmZik`;

ajax.open("GET", SEARCH_URL, false);// (방식,url,동기(T)/비동기(F))
ajax.send();

const result = JSON.parse(ajax.response);
const items = result.items;
console.log(items);
console.log(items.length);

content +='<ul class="videos">'
for (let i=0;i<items.length;i++){
    content += `
        <li class="container">
            <div class="video">
                <img src="${items[i].snippet.thumbnails.medium.url}"></img>
            </div>
            <div>
            <p class="title">${items[i].snippet.title}</p>
            <p class="channel">${items[i].snippet.channelTitle}</p>
            </div>
        </li>
    `
}
content +='</ul>'

document.querySelector("#root").innerHTML = content