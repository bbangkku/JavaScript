// setTimeout: 뒤에 오는 N ms 후에 앞의 함수를 실행해라
// 
// setTimeout(() => console.log('3초 후'),3000 );
// console.log('setTimeout 이후에 사용')

const calculator = function(a,b,mathFunction){
    return mathFunction(a,b)
}

const add = function(a,b){
    return a+b
}

const sub = function(a,b){
    return a-b
}

// console.log(calculator(3,5,add))

/////////////////////////////////////////////////

const numbers = [1,2,3,4,5]
const callback = (element) => {
    // console.log(element)
}

// callback 이라는 함수가 파마리터로 전달
numbers.forEach(callback)

numbers.forEach((element) => {
    // console.log(element)
})

// 1. forEach: 원본배열을 건들지 않고, 내부 요소들에 접근해서 사용하고 싶을 때
// element : 배열의 요소
//  index : 배열 요소의 인덱스
// array : 원본 배열
numbers.forEach((element,index,array) => {
    // console.log(element) // 1,2,3,4,5
})
// 2. map : 원본 배열의 데이터를 기반으로 새로운 배열을 만들고 싶을 때 사용
//          원본 배열의 모든 데이터가 필요할 때 많이 사용
const newNumbers = numbers.map((element,index,array) => {
    return element+3
})
// 원본 배열은 건드리지 않고, 새로운 배열을 생성함
console.log(numbers) // [1,2,3,4,5]
console.log(newNumbers) // [4,5,6,7,8]

// 3. filter : 원본 배열에서 필요한 데이터만 골라서 새로운 배열로 반환
// element : 배열의 요소
// index : 배열 요소의 인덱스
// array : 원본 배열
const filterNumbers = numbers.filter((element,index,array) => {
    return element%2 == 0
})
// console.log(filterNumbers)

// 4. reduce : 원본 배열 데이터를 모두 사용하여 하나의 값을 얻고 싶을 때
//          예시 ) 합계
// total : 누적값
// element : 배열의 요소
// index : 배열 요소의 인덱스
// array : 원본 배열
// initalValue : 초깃값
let initalValue = 0
const sum = numbers.reduce((total,element,index,array) => {
    return total + element
},initalValue)
console.log(sum) // 15

// 10부터 시작해서 numbers 배열 중 짝수만 더해라
const result = numbers.reduce((total,element,index,array) => {
    if (element%2 == 0) return total+element
    else return total
},10)
console.log(sum) // 15
// 삼항 연산자로 고치면 아래와 같다
// 조건문 ? true 일 때 : false 일 때
const result2 = numbers.reduce((total,element,index,array) => {
    return element%2 == 0 ? total+element : total
},10)
console.log(sum) // 15


// 5. find : 배열에서 특정 값을 찾아서 반환, 못찾으면 undefined 반환
const findNumber = numbers.find((element,index,array) => {
    // 조건에 맞는 객체(값)을 반환
    return element == 3
})
console.log(findNumber) // 3


// 6. some : 특정 조건이 하나라도 맞으면 true, 모두 틀리면 false (one of)
const someNumber = numbers.some((element,index,array) => {
    return element < 2
})
console.log(someNumber) // true

// 7. every : 특정 조건이 모두 맞으면 true, 하나라도 틀리면 false (all of)
const everyFlag = numbers.some((element,index,array) => {
    return element < 5
})
console.log(everyFlag) // false


// 가독성 
// 내부적으로 for 문보다 빠르게 동작
// 함수형 프로그래밍 -> 불변성과 
