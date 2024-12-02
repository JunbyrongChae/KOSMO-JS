//Web API에는 비동기 또는 동기를 지원하는 API가 있음-XMLHttpRequest
//웹서버의 시작은 요청으로부터 시작
//오라클서버 대신에 해커뉴스 서버에서 뉴스정보를 제공받는다. 그러기위해 요청
const container = document.querySelector("#root");
const NEWS_URL="https://api.hnpwa.com/v0/news/1.json";
//실제로 사용자가 클릭했을 때 그(id값) 값을 넣어주어야 한다.- 일단 @id로 마킹만 해둔다. - 그대로 쓰는 값이 아닌거다
const CONTENT_URL="https://api.hnpwa.com/v0/item/@id.json";

function getData(url){
    //반복되는 ajax코드는 url 즉 호출하는 주소가 다르다. getData를 호출할 때 마다 주소를 새로 받아와야 한다.
    //왜냐면 getData가 그걸 알 수는 없으니까
    //함수를 만들고, 그 함수가 할 일의 코드를 묶어주고 그 코드가 동작하기 위한입력 값을 정의해서
    //사용해 주고 그리고 함수의 처리 결과를 return으로 반환해주고 
    //두 군데의 사용처를 가진다. - NEWS_URL기본처리 -> 두 번째는 선택을 했을 때 호출됨
    ajax.open("GET", url, false); 
    ajax.send(); 
    return JSON.parse(ajax.response); 
}

//비동기와 동기를 지원하는 객체 - XMLHttpRequest
const ajax = new XMLHttpRequest();
//선택한 뉴스의 컨텐츠를 추가 할 div태그 생성하기
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
/*
정리하기
실제로 getData라고 하는 함수를 이렇게 안보이게 해놓고 변경된 코드를 본다.
실제로 네트워크를 통해서 데이터를 가져오고 그것을 자바스크립트 객체로 변환하는 코드
자체가 몽땅 없어지고 getData에게 모두 그일을 위임해 버렸다.(의의)
getData가 동작하는데 필요한 url만 넘겨주는 코드로 대체되었기 때문에
사용하는 코드쪽에서는 단순해짐
네트워크 사용이 많아지더라도 부담없이 코드를 계속 늘려도 양은 늘어나지만 복잡도가
늘어나는 일은 없을 겁니다.
이런 류의 개선 즉 리펙토링이라고 한다.
리펙토링이라는 것은 UI를 개선하는 리펙토링도 있겠지만 UI 즉 최종적인 결과물은
변화가 거의 보이지 않지만 내부적인 개선도 많이 일어날 수 있는 개선활동도 있다는
것을 체험해 보는 시간이었다.
*/

const ul = document.createElement("ul");
for(let i = 0;i<10;i++){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${newsList[i].id}`;
    a.innerHTML = `${newsList[i].title}(✨${newsList[i].comments_count})`;
    li.appendChild(a);
    ul.appendChild(li);
}
//원천이 하나인데 사용하는 곳이 여러 군데 이면 그 사용 갯수에 따라 바꾸어야 하는 문제가 있다.
//예를 들어 root가 아니라 home으로 바뀌면 두 군데 모두를 수정해야 한다.
container.appendChild(ul);
container.appendChild(content);