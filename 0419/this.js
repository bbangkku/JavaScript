
// console.log(this) // 이건 전역객체인가?.. 아님. {} 가 나옴

// - 일반적인 함수 내부에서의 this
const normalFunc = function(){
    console.log(this) // this : 전역 객체(global)
}
// normalFunc()


// - 객체의 메서드 내부에서의 this
const obj = {
    name:'test',
    myFunc: function() {
        console.log(this.name) // this : 함수가 정의된 객체
    } ``
}
obj.myFunc() // { name: 'test', myFunc: [Function: myFunc] }




// - 생성자 함수 내부에서의 this
function Person(name) {
    this.name = name
    this.greeting = function(){
        console.log(this) // this : 생성된 인스턴스
    }
    this.xx = function(){
        console.log('dddd')
        return 'a'
    }
}
const me = new Person("병국")
// console.log(typeof me) // object
// me.greeting() // Person { name: '병국', greeting: [Function (anonymous)] }
// me.xx()
// console.log(me.xx())




// - 화살표 함수 내부에서의 this
const person_obj = {
    name: "병국",
    greeting: () => {
        // 자신만의 this를 가지지 않고
        // 외부 스코프의 this를 그대로 참조
        console.log(this) 
    }
}
// person_obj.greeting() // {} 가 뜸


// - 화살표 함수 내부에서의 this 2 
const person_obj2 = {
    name: "병국",
    greeting: function(){
        // 여기의 this를 참조한거임.. 한단계 상위니까..
        // object 의 메서드가 가리키는 this : 메서드가 정의된 객체
        const arrowFunc = () => {
            // 화살표 함수는 한 단계 상위가 가지는 스코프를 가리키기 때문에..
            console.log(this)   // person_obj2를 가리킴 // { name: '병국', greeting: [Function: greeting] }
        }
        arrowFunc()
    }
}
// person_obj2.greeting() //  { name: '병국', greeting: [Function: greeting] }

// name ='lee'
// const obj1 = {
//     name : 'test',
//     myFunc : function(){
//         console.log(this.name) // 'test

//         const myFunc2 = function(){
//             console.log(this.name) // '
//         }
//         myFunc2()
//         const myFunc3 = () => {
//             console.log(this.name) // 
//         }
//         myFunc3()
//     }
// }

// obj1.myFunc()




// - 객체의 메서드 내부에서의 this

name = 'lee'
const obj3 = {
    name:'test',
    myFunc3 : function() {
        console.log(this.name) // this : 함수가 정의된 객체
        const myFunc2 = () => {
            console.log(this.name) //
        }
        myFunc2()

    } 
}
obj3.myFunc3() // { name: 'test', myFunc: [Function: myFunc] }
