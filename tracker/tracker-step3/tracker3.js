//운동리스트 수 업데이트
const updateNavbarCount = () => {
    navbarCount.textContent = items.length;
}
//운동추가
/*  
Arrow Function 기본형식
    hello = () => {
        return "Hello World!";
    }
*/
const handleAdd = (name) => {
    const newItem = {id: items.length + 1,name: name,count: 0};
    items.push(newItem);
    getWorkoutList(); // 화면 업데이트
    updateNavbarCount();
}
//증가 
function handleIncrement(id){//{id,name,count}
    //count++
    const item = items.find(item => item.id === id);
    if (item) {
        item.count++;
        getWorkoutList(); // 화면 업데이트
    }
}
//감소
function handleDecrement(id){
    //count--
    const item = items.find(item => item.id === id);
    if (item && item.count > 0) {
        item.count--;
        getWorkoutList(); // 화면 업데이트
    }
}
//삭제 - 휴지통 이모지
function handleDelete(id){
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        getWorkoutList(); // 화면 업데이트
        updateNavbarCount();
    }
}
//목록 처리
function getWorkoutList(){
    console.log("getWorkoutList");
    const workoutList = document.querySelector('.workout-list');
    workoutList.innerHTML = '';//렌더링 전에 목록 지우기
    items.forEach((item) => {
        //console.log(item);
        const listItem = document.createElement('li');
        listItem.className = 'workout'
            
        const workoutName = document.createElement('span');
        workoutName.className = 'workout-name';
        workoutName.textContent = item.name;

        const workoutCount = document.createElement('span');
        workoutCount.className = 'workout-count';
        workoutCount.textContent = item.count;
            
        const btnIncrease = document.createElement('button');
        btnIncrease.className = 'workout-button workout-increase';
        btnIncrease.innerHTML = '<i class="fas fa-plus-square"></i>';
            
        const btnDecrease = document.createElement('button');
        btnDecrease.className = 'workout-button workout-decrease';
        btnDecrease.innerHTML = '<i class="fas fa-minus-square"></i>';
            
        const btnDelete = document.createElement('button');
        btnDelete.className = 'workout-button workout-delete';
        btnDelete.innerHTML = '<i class="fas fa-trash"></i>';

        // 버튼 클릭 시 이벤트 핸들러 추가
        btnIncrease.addEventListener('click', () => handleIncrement(item.id));
        btnDecrease.addEventListener('click', () => handleDecrement(item.id));
        btnDelete.addEventListener('click', () => handleDelete(item.id));

        listItem.appendChild(workoutName)
        listItem.appendChild(workoutCount);
        listItem.appendChild(btnIncrease);
        listItem.appendChild(btnDecrease);
        listItem.appendChild(btnDelete);

        workoutList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getWorkoutList();
});