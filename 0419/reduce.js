const tests = [90,90,80,77]

const sum = tests.reduce(function(total,x){
    return total + x
},0)

// 화살표 함수
const sum1 = tests.reduce((total,x)=> total+x, 0)
console.log(sum1) // 337

const sum2 = tests.reduce((total,x) => total+x,0) / tests.length
console.log(sum2) // 84.25