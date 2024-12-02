const container = document.querySelector("#root");
const content = document.createElement('div');
const NEWS_URL="https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL="https://api.hnpwa.com/v0/item/@id.json";

const  getData = (url) => {
    ajax.open("GET", url, false); 
    ajax.send(); 
    return JSON.parse(ajax.response); 
}

const ajax = new XMLHttpRequest();
const newsList = getData(NEWS_URL);
//디폴트 목록 가져오기
//n건 처리 - 배열필요
const getnewsList = () =>{
    const news = []
    news.push('<ul>')
    for(let i = 0; i < newsList.length; i++){
        news.push(`
            <li>
                <a href="#${newsList[i].id}">
                ${newsList[i].title}(✨${newsList[i].comments_count})
                </a>
            </li>
        `);    
    }
    news.push('</ul>')
    container.innerHTML = news.join('');//빈 문자열을 넣어서 배열을 구분자 없는 문자열로 묶음
};
//상세목록 가져오기
//배열 필요 없음
//목록으로 돌아갈 버튼 추가
const newsDetail = () =>{
    const id = location.hash.substring(1)
    const newsContent = getData(CONTENT_URL.replace('@id', id));
    container.innerHTML =`
        <h2>${newsContent.title}</h2>
        <div>
            <a href="javascript:history.back();">Back to List</a>
        </div>
        `
}

//뉴스목록 배열

const router =()=>{
    const routerPath = location.hash;
    if (routerPath ==='') {
        getnewsList()
    }else{
        newsDetail()
    }
}
window.addEventListener('hashchange',router)
router()