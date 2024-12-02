//우리가 필요로 하는 DOM요소 선언
//ul
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_plus");
const shopList = []


//사용자가 입력한 텍스트를 받아서 li태그에 추가함
const onAdd = () => {
    const text = input.value  
    //console.log(text)
    if(text === ''){
        input.focus()
        return //onAdd함수 탈출 - 처음부터 똑바로 사용하기
    }
    //뭔가를 입력했다면 item객체를 추가하기
    //새로운 아이템을 만듦(상품명 문자열 + 삭제버튼)
    const item = createItem(text) //사용자 입력한 상품명
    //items(ul)안에 새로 만든 아이템을 추가한다.
    shopList.push(item)
    //인풋을 초기화 한다.
    input.value=""
    input.focus()
}//end of onAdd
//onAdd함수에서 호출하는 함수 입니다.
//onAdd에서는 사용자가 입력한 상품을 파라미터 넘김
const createItem = (text) => {
    const itemRow = `
        <li class="item_row">
            <div class="item">
                <span class="item_name">${text}</span>
                <button class="item_delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="item_divider"></div>
        </li>
    `
    return itemRow
}//end of createItem

addBtn.addEventListener("click", (event) => {
    onAdd()
    items.innerHTML = shopList.join("")
})

input.addEventListener("keyup", (event) => {
    //이벤트 발동한 이벤트 소스값 확인하려면 아래 코드 출력해 보세요.
    console.log("key ====> " + event.key)   
    if(event.key === "Enter"){
        onAdd()
        items.innerHTML = shopList.join("")
    }
})