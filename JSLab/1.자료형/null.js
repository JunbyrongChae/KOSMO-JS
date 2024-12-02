// null : 값이 없음
let age = null
console.log(age) //null

//타임라인을 변경할 때 사용
setTimeout(()=> {
    age = 30
    console.log(age)
},3000/* =3초(ms단위) */)

/* 
권장 안함.
setTimeout(function(){})
*/