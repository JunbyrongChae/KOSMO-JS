const dept = {
    deptno: 10,
    dname: '영업부',
    loc: '부산'
}

console.log(dept.deptno)
console.log(dept['deptno'])
console.log(dept.dname)
console.log(dept['dname'])

if(dept){
    console.log("object도 참이다.")
}else{
    console.log("dept는 참이다.")
}
