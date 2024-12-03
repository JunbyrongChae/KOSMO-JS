// 기본 내보내기
// 주의 : 하나의 모듈에서는 하나의 default export만 가능합니다.
// default import할 때 좌중괄호와 우중괄호는 필요없음
export default 123
//export default 'abc' 에러 발생

export const arr = [1,2,3]
export const hamsu = () => console.log('hamsu호출')
export function add(a, b) {
    return a+b
}