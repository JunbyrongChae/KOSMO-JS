document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".footer_input");
    const addButton = document.querySelector(".footer_plus");
    const itemList = document.querySelector("ul");

    // 항목 추가 함수
    function addItem() {
        const itemText = inputField.value.trim();
        if (itemText !== "") {
            const newItem = document.createElement("li");
            newItem.innerHTML = `${itemText} <i class="fa-solid fa-trash-can delete"></i>`;
            itemList.appendChild(newItem);
            inputField.value = "";
            inputField.focus();
            scrollToBottom(); // 새 항목이 추가될 때마다 스크롤을 하단으로 이동
        }
    }

    // 삭제 버튼 클릭 시 항목 삭제
    itemList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete")) {
            const listItem = event.target.parentElement;
            itemList.removeChild(listItem);
        }
    });

    // 추가 버튼 클릭 이벤트
    addButton.addEventListener("click", () => {
        addItem();
    });

    // 엔터키로 항목 추가
    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addItem();
        }
    });

    // 스크롤 하단 고정 함수
    function scrollToBottom() {
        itemList.scrollTop = itemList.scrollHeight;
    }
});
