const items = [
    {id:1,name:"Bench Press",count:1}
    ,{id:2,name:"Squat",count:2}
    ,{id:3,name:"Deadlift",count:3}
]

console.log(items)
console.log(items.length)

items.push({id:4,name:"Lat Pulldown",count:4})
console.log(items)
console.log(items.length)

items.splice(0,0,{id:5,name:"Pullup",count:5})
console.log(items)
console.log(items.length)

items.splice(0,1,{id:6,name:"Dips",count:6})
console.log(items)
console.log(items.length)

items.splice(0,1)
console.log(items)
console.log(items.length)

const itemid = 2
const index = items.findIndex(item => item.id === itemid);
console.log(index)
items.splice(index,1)
console.log(items)
console.log(items.length)