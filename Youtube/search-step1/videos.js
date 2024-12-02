const ajax = new XMLHttpRequest();
ajax.open("GET"
    ,"http://127.0.0.1:5500/Youtube/search-step1/videos.json"
    ,false);
ajax.send();

const most = JSON.parse(ajax.response);
console.log(most);

//배열의 수를 출력
const items = most.items;
console.log(items);
console.log(items.length);

/* 
//for문
for(let i=0;i<items.length;i++){
    console.log(items[i].snippet.title);
    console.log(items[i].snippet.descri);
    console.log(items[i].snippet.channelTitle); 
} 
//forEach문
items.forEach(item => {
    console.log(item.snippet.title);
    console.log(item.snippet.description);
    console.log(item.snippet.channelTitle);
})
*/
//map
items.map((item) => {
    console.log(item.snippet.title);
    console.log(item.snippet.description);
    console.log(item.snippet.channelTitle);
})