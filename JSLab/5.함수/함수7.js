a()//함수 호이스팅
function a(){
    console.log('a')
}

b()//Arow Function은 호이스팅 불가.
const b = () =>{
    console.log('b')
}