function checkType(value){//기본 방식
    return typeof value;
}
checkType2 => (value2) => {//arrow function방식
    return typeof value2;
}
console.log(checkType(function() {}));

const fruits = ['🍅','🍓','🍉']
console.log(typeof fruits)
for(let x=0;x<3;x++){
    console.log(fruits[x])
}

const url = "#42130881";
console.log(url.substring(1));
console.log(url.substring(2));
console.log(url.substring(3));
console.log(url.substring(4));
console.log(url.substring(5));
console.log(url.substring(1,5));