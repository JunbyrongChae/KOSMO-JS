import number from './module1'
import xyz from './module1.js'
import { arr, hamsu } from './module1.js'
import * as all from './module1.js'

console.log(number) //123
console.log(xyz)
console.log(arr)
console.log(hamsu)
hamsu()
console.log(all)
console.log(all.hamsu)
console.log(all.add(2,3))