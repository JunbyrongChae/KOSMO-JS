function hap(a,b){
    console.log(`${a+b}`)
}

hap() //NaN
hap(1) //NaN
hap(1,2) //3

function hap2(a=2,b=3){
    console.log(`${a+b}`)
}

hap2() //5
hap2(1) //4
hap2(1,2) //3

function hap3(...numbers){
    console.log(typeof numbers)
    console.log(numbers)
    console.log(numbers[0])
}
hap3(1,2,3,4,5)
/* 
object
[ 1, 2, 3, 4, 5 ]
1
*/

function hap4(a,b,...numbers){
    console.log(typeof numbers)
    console.log(numbers)
    console.log(numbers[0])
}
hap4(1,2,3,4,5,6,7)
/* 
object
[ 3, 4, 5, 6, 7 ]
3
*/