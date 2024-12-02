/*
    배열 : Array
    연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조
*/
const fruits = ["🍉","🍎","🥝"]
console.log("좋아하는 과일은 " , fruits)
fruits.forEach((item) => console.log(item))
//내장 함수 빈도 
//toString() - 배열을 문자로 변환함
const result = fruits.toString();
console.log(result)
//join() :파라미터에 준 구분자를 활용해 문자열로 이어붙이기
//const result2 = fruits.join("+")
const result2 = fruits.join("-")
console.log(result2)

fruits.push("🍅")
console.log(fruits)