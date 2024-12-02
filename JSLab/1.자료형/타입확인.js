const a = 123
console.log(typeof a)

console.log(typeof '이순신' == 'string')
console.log(typeof '이순신' == 'String')
console.log(typeof undefined == 'undefined')
console.log(typeof null == 'object')
console.log(typeof [] == 'object')
console.log(typeof {} == 'object')
console.log(typeof function(){} == 'object')
console.log(typeof function(){} == 'function')

console.log([].constructor === Array)
console.log({}.constructor === Object)