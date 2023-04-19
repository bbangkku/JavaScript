// 변수를 선언 > 사용
// 내가 num 이라는 변수를 쓸거다 라는 선언 과정 없이 사용
// num = 3 // 에러가 나야 정상,,
// console.log(num)
// 
// 

// 내가 검사를 원하는 스코프 상단에 'use strict' 입력
// 'use strict'
// num = 3

// exports 객체에 add 와 multiply를 추가해줌
// 덧셈
exports.add = function(a,b){
    return a+b
}
// 곱셈
exports.multiply = function(a,b){
    return a*b
}
//offclass 모듈 내에서만 사용하는 함수
const mySub = function(a, b){
    return a + 10
}

// sub는 a에 10을 더해주고, b 를 뺀 결과를 반환하는 함수
exports.sub = function(a, b){
    return mySub(a) - b
}

// 따로 js 만들지말고 안에서 쓰고싶다면 ..?

const innerSub = function(a,b){
    return mySub(a) - b
}
// exports.sub = innerSub
// console.log(innerSub(3,5))


// 이렇게도 가능.,,
// console.log(this) // add,multiply, sub 다 갖고 있음
// console.log(this.sub(3,5))
