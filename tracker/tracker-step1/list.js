const items = [
    {id:1,name:"Bench Press",count:0},
    {id:2,name:"Squat",count:0},
    {id:3,name:"Deadlift",count:0}
]

items.forEach(item => {
    console.log(item);
    console.log(item.id);
    console.log(item.name);
    console.log(item.count);
});
//소나타 Object
const sonata = {
    carName : "2024 LF Sonata",
    speed : 50,
    wheelNum : 4
}

console.log(sonata.carName);
console.log(sonata.speed);
console.log(sonata.wheelNum);