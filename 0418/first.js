// let a = true
// console.log(a)
// console.log(typeof(a))

// 1. null 과 undefined
let a = '서버로부터 데이터를 받아오는 코드'
// 결과가 undefined 라면
// 서버로부터 데이터를 못 받아온 것
// a 라는 변수

console.log(a)              // undefined
console.log(a == null)      // true
console.log(a == undefined) //  true
console.log(a === null)     //  false
console.log(a == undefined) //  true

// 2. 문자열 형변환

// new: 새로운 객체 할당
let str = 'test'
let str2 = new String('test')

console.log(typeof(str))    // string
console.log(typeof(str2))   // object

// 객체처럼 쓴다? -> 내장 메서드들 활용 가능
// 'test'는 원시값인데, toUpperCase 라는 변수를 어떻게 가질까 ?
// JS 는 내부적으로 원시 타입에 대해 내장 객체를 가지고 있다.
//  -> 원시 타입 사용 시 내장 객체로 해석
console.log("test".toUpperCase())

// 백틱 > 문자열리터럴 쓰는법
console.log(`1 = ${str == str2}`) // true
console.log(`2 = ${str === str2}`) // false
// 객체끼리의 비교 : 주소값이 다르므로 false
console.log(`3 = ${str2 == new String("test")}`) // false
console.log(`4 = ${str2 === new String("test")}`)  // false

console.log([1,2,3] == [1,2,3]) // false


console.log(1+2) // 3
console.log('1'+'2') // 12
console.log('1'+2) // 12
console.log(1+'2') // 12

// 문자열 -> 숫자로 형변환됨
console.log('1'-2) // -1
// 문자열끼리 써도 동일
console.log('1'+'2') // 12

console.log('1'+'2'*6) // 112
console.log('1'+'6'/2) // 13


// 이런 문제 헷갈린다
// 문자열 숫자 연산

let str1 = 'hello'
let bool = true
console.log(str1 + bool)  // hellotrue
// - , * 는 NaN이 나옴 ( Not a Number)


// true:1, false:0으로 형변호나
console.log(3+true)
console.log(3+false)

// 전역 스코프
// let a =10

// 블록 스코프
{
    let a = 10
    console.log(a)
} // 10

if (true) {
    let a = 30
    console.log(a)
} // 30

const fruits = {
    a: 'apple',
    b: 'banana',
}
for (const key in fruits){
    const tmp_key = key
    console.log(key)
}

const tmp = 'test1'
{
    console.log(tmp)
    {
        const tmp = 'test2'
        console.log(tmp)
    }
}

// 함수 스코프



// function myFunction() {
//     // myFunction 의 함수 스코프
//     // innerFunction 의 렉시컬 스코프
//     let num = 10
//     console.log(num)

//     function innerFunction(){
//         console.log(x)
//     }
//     innerFunction()
// }
// myFunction()
// console.log(num)

// 클로저
function myFunction(x){
    //  add 함수 내부의 x = 렉시컬 스코프에서 가져옴
    function add(y){
        console.log(x+y)
    }
    return add
}

let func = myFunction(10)
func(20)
func(30)


// 배열, 객체
// 얕은 복사와 깊은 복사

// 원시 타입 빼고는 다 얕은 복사

function func1(arr) {
    arr[0] = 10
}

let arr1 = [1,2,3]
func1(arr1)
console.log(arr1) // [10,2,3]

// 2. 변수로 복사할 때
let numbers = [1,2,3]
let newnumbers = numbers // 얕은 복사
newnumbers[0] = 10
console.log(numbers) // [10,2,3]
console.log(newnumbers) // [10,2,3]

// 간단한 깊은 복사
{
    let numbers = [1,2,3]
    // ... : 스프레드 연산자 : 객체를 전개하여 각 요소를 개별적인 값으로 분리
    let newnumbers = [...numbers] // 값을 받아와 새로운 배열을 생성
    newnumbers[0] = 10
    console.log(numbers) // [1,2,3]
    console.log(newnumbers) // [10,2,3]

}


{
    let numbers = [
        [1,2,3],
        [4,5,6],
        7
    ]
    let newnumbers = [...numbers] // depth 1 까지만 깊은 복사
    newnumbers[0][1] = 10
    console.log(numbers) // [ [ 1, 10, 3 ], [ 4, 5, 6 ], 7 ]
    console.log(newnumbers) // [ [ 1, 10, 3 ], [ 4, 5, 6 ], 7 ]
    newnumbers[2] = 20
    console.log(numbers) // [ [ 1, 10, 3 ], [ 4, 5, 6 ], 7 ]
    console.log(newnumbers) // [ [ 1, 10, 3 ], [ 4, 5, 6 ], 20 ]
}

// 자바스크립트는 함수 파라미터 개수를 따로 체크하지 않는다.
function myFunction1(x, y){
    console.log(x+y)
}



function myFunction2(x, y){
    console.log(x+y)
    // arguments : 함수에 전달된 argument 들을 가지고 있음
    // 전달된 데이터 정보확인 시 유용하게 활용가능
    // js 파일이 여러 개일 때, 디버깅 시 유용하게 활용가능
    console.log(arguments)
}

myFunction1(10,20)
myFunction1(10,20,30,40) //버그안남
myFunction1(10) // 버그안남

/* 2일차
화살표 함수
array helper methods - > 배열을 순회하는 내장 콜백 함수
콜백함수
new 키워드 (생성자 함수)

3일차
화면조작(이론) + 실습

4일차
event 객체

5일차
비동기

6일차
장고에서 js쓰기