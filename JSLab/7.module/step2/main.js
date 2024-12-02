import number from "./module1"//{},확장자(.js) 생략
import xyz from "./module1.js"
import {arr,hamsu} from "./module1.js"
import * as all from "./module1.js"

console.log(number)//123
console.log(xyz)//123
console.log(arr)//[1,2,3]
console.log(hamsu)//함수
hamsu()
console.log(all)
console.log(all.hamsu)
console.log(all.add(2,3))
