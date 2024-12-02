//기본 내보내기
//주의 : 하나의 모듈에는 하나의 default export만 가능
//default를 import하는 경우 {}필요 없음.
export default 123
// export default 'abc' - error

export const arr = [1,2,3]
export const hamsu = () => console.log('함수')
export function add(a,b){
    console.log(a+b)
}