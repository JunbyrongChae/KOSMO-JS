let items = [
    { id: 1, name: "Bench Press", count: 10 }
    , { id: 2, name: "Squat", count: 5 }
    , { id: 3, name: "Deadlift", count: 15 }
]
console.log(items.length)
let x = [...items]
console.log(x.length)

//filter()메서드 활용
x = items.filter(item => item.id !== 1)
console.log(x)
x=[...x,{id:1,name:"Lat Pulldown",count:10}]
console.log(x)