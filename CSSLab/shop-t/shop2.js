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
    const item = createItem(text) //사용자 입력한 상품명
    items.appendChild(item)
    //새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'})
    input.value=""
    input.focus()
}//end of onAdd
//onAdd함수에서 호출하는 함수 입니다.
//onAdd에서는 사용자가 입력한 상품을 파라미터 넘김
function createItem(text){
    // 12
    const itemRow = document.createElement('li');
    // 13
    itemRow.setAttribute('class','item_row');
    // 16
    const item = document.createElement('div');
    // 17
    item.setAttribute('class','item');
    // 18
    const name = document.createElement('span');
    // 19
    name.setAttribute('class','item_name');
    // 20
    name.innerText = text;
    // 21
    const deleteBtn = document.createElement('button');
    // 22
    deleteBtn.setAttribute('class','item_delete');
    // 23
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // 24
    deleteBtn.addEventListener('click', () => {
      items.removeChild(itemRow);
    });
    // 14
    const itemDivider = document.createElement('div');
    // 15
    itemDivider.setAttribute('class','item_divider');
    // 25
    item.appendChild(name);
    // 26
    item.appendChild(deleteBtn);
    // 27
    itemRow.appendChild(item);
    // 28
    itemRow.appendChild(itemDivider);
    // 29
    return itemRow;
  }

addBtn.addEventListener("click", (event) => {
    onAdd()
})

input.addEventListener("keyup", (event) => {
    //이벤트 발동한 이벤트 소스값 확인하려면 아래 코드 출력해 보세요.
    console.log("key ====> " + event.key)   
    if(event.key === "Enter"){
        onAdd()
    }
})