const container = document.querySelector("#root");
const content = document.createElement('div');
const NEWS_URL="https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL="https://api.hnpwa.com/v0/item/@id.json";

//페이지 처리를 위해 상태값 추가
const store = {
    currentPage: 1, //현재 바라보는 페이지
}

const  getData = (url) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", url, false); 
    ajax.send(); 
    return JSON.parse(ajax.response); 
}

//디폴트 목록 가져오기
//n건 처리 - 배열필요
const getnewsList = () =>{
    const newsList = getData(NEWS_URL);
    const news = []
    news.push('<ul>')
    for(let i = (store.currentPage - 1) * 10; i < store.currentPage * 10 && i < newsList.length; i++){
        news.push(`
            <li>
                <a href="#/show/${newsList[i].id}">
                ${newsList[i].title}(✨${newsList[i].comments_count})
                </a>
            </li>
        `);    
    }
    news.push('</ul>')
    news.push(`
        <div>
            <a href="#/page/${store.currentPage>1?store.currentPage-1:1}">이전페이지</a>
            <a href="#/page/${store.currentPage+1}">다음페이지</a>
        </div>
    `)
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
            <a href="#/page/${store.currentPage}">Back to List</a>
        </div>
        `
}

//뉴스목록 배열

const router =()=>{
    const routerPath = location.hash;
    if (routerPath ==='') {
        getnewsList()
    }else if(routerPath.indexOf('#/page/')>=0){
        store.currentPage = Number(routerPath.substring(7))
        getnewsList()
    }else {
        newsDetail()
    }
}
window.addEventListener('hashchange',router)
router()