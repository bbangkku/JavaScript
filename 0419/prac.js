const threeArgs = function (arg1, arg2, arg3) {
    return [arg1,arg2,arg3]
}

// console.log (threeArgs(1))

const restArgs = function (arg1, arg2, ...restArgs){
    return [arg1, arg2, restArgs]
}

// console.log( restArgs(1,2,3,4,5))

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 화살표 함수
const arrow1 = function(name) {
    return `hello, ${name}`
}
// 1. function 키워드 삭제
const arrow2 = (name) => {return `hello, ${name}`}
// 2. 인자가 1개일 경우에만 () 생략 가능
const arrow3 = name => { return `hello, ${name}`}
// 3. 함수 바디가 return을 포함한 표현식 1개일 경우에 {} & return 삭제 가능
const arrow4 = name => `hello, ${name}`

// console.log(arrow1('kuk'))
// console.log(arrow2('kuk'))
// console.log(arrow3('kuk'))
// console.log(arrow4('kuk'))

// this

// 1. 전역 문맥에서 this
// 
console.log(this) // window

// 2. 함수 문맥에서 this
// 함수를 호출한 방법에ㅇ의해 결정, 즉 어떻게 호출했는데 ???

// const myFunc = function(){
//     console.log(this)
// }
// myFunc() // window

// 2-1. Method(Function in Object)
// const myObj ={
//     data:1,
//     myFunc(){
//         console.log(this) // myObj
//         console.log(this.data) //1
//     }
// }
// (myObj.myFunc()) //myObj

// // 2-2. Nested

// const myObj2 ={
//     numbers: [1],
//     myFunc() {
//         console.log(this) // myObj2
//         this.numbers.forEach(function(num)
// {
//         console.log(num) // 1
//         console.log(this) // window
//         })
//     }
// }

// myObj2.myFunc()



// 콜백 함수 예시

const numbers = [1,2,3]
numbers.forEach(function (num){
    console.log(num ** 2)
})
//1
//4
//9

const callBackFunction = function(num){
    console.log(num**2)
}
const numbers1 = [1,2,3]
numbers1.forEach(callBackFunction)
//1
//4
//9

// 1. forEach

// const colors = ['red','blue','green']
// printFunc = function (color) {
//     console.log(color)
// }
// colors.forEach(printFunc)
// red
// blue
// green


// colors.forEach(function(color, index,array){
//     console.log(color)
//     console.log(index)
//     console.log(array)
// })




// 2. map 사용하기
const numbers6 = [1,2,3]

// 함수 정의(표현식)
const doubleFunc= function(number){
    return number * 2
}

const doubleNumbers = numbers6.map(doubleFunc)
console.log(doubleNumbers)
// [2,4,6]




// 객체관련문법 - 계산된 속성
const key = 'country' // << 이건 수정가능
const value = ['한국','일본','중국']
const myObj = {
    [key] : value,
}
console.log(myObj) //{ country: [ '한국', '일본', '중국' ] }
console.log(myObj.country) // [ '한국', '일본', '중국' ]

// 구조 분해 할당
const userInformation = {
    name : 'Lim',
    userId: 'ssafy123',
    email: 'ssafy@ssafy.com'
}
const name = userInformation.name
const userId = userInformation.userId
const email = userInformation.email

// 수정

const {name1} = userInformation
const {userId1,email1} = userInformation
// 이렇게도 가능하다
console.timeLog(userId1)