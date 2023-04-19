
// exports 객체에서 math를 가져오겠다는 뜻인데..
// offclass에 있는 add, multiply 함수를 모르잖아..

const math = require('./offclass.js')

const sum = math.add(2,5)
const mul = math.multiply(2,5)

console.log(`두수의 합: ${sum}`)
console.log(`두수의 곱: ${mul}`)
