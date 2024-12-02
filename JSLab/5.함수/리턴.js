//return은 명시적이지 않으면 undefined
//함수 중간에 사용하면 함수 종료 - ***중요!***

function hap1(a,b){
    console.log(a+b)
}
let imsi = hap1(2,3)
console.log(imsi) //undefined

function hap2(a,b){
    return a+b
}
imsi = hap2(2,3)
console.log(imsi) //5

function hap3(a){
    if (a<0){
        return console.log('...')
    }
    console.log("이게 출력...?")
}
hap3(-1) //...
hap3(1) //'이게 출력...?'