const a = () => {
    return  new Promise((resolve) => {
        setTimeout(() => {
          console.log(1)
          resolve()
        }, 1000);
      });
}
//b함수도 일정한 시간이 지나서야 특정한 코드를 실행할 수 있는
//비동기 코드로 만들졌다.
//파라미터로 함수를 넘길 수 있다. - 일급함수
const b = () => {
    return  new Promise((resolve) => {
        setTimeout(() => {
          console.log(2)
          resolve()
        }, 1000);
      });
}
const c = () => {
    return  new Promise((resolve) => {
        setTimeout(() => {
          console.log(3)
          resolve()
        }, 1000);
      });
}
const d = () => console.log(4)

/*
아직도 여전히 들여쓰기와 반복되는 패턴이 존재하고 있다.  - promise, asyn/await
매개변수로 함수가 들어가서 실행되고 나 다음에 또 다음부분에서 함수가 실행되고 그 다음에 또 실행되고....반복
그래서 우리가 이해해야 하는 하나의 개념이 존재한다.
만약 then이라는 함수가 제공되는 callback부분에서 promise인스턴스를 반환하게 되면
그 then함수의 체이닝으로 이어서 then함수를 한 번 더 쓸 수가 있다.
이 코드를 좀 더 단순하게 실행 순서를 보장하면서 코드를 작성할 수 있다.
call7.js에서 확인해 본다.
*/

a()
    .then(b)
    .then(c)
    .then(d)
    .then(() => console.log('done!!!'))

//문제 : 2가 먼저 출력되고 1이 출력되도록 변경하시오.
//setTimeout함수가 1초후 1을 출력하도록 한다.
