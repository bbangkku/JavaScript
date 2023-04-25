// Promise : 자바스크립트 객체
// resolve : 성공적인 로직 이행 시 결과값 전달하는 함수
// reject : 로직 이행에 실패 시 결과값 전달 함수

const myPromise = new Promise((resolve, reject) => {
  console.log('Promise 생성됨')
  let num = 0
  if (num == 0){
    resolve('로직 수행 성공!')
  } else {
    reject('로직 수행 실패!')
  } 
    
})

// Promise {<pending>}
// pending : 대기상태
console.log(myPromise)

// Promise 로직 성공 시 then / 실패 시 catch
myPromise
  .then((result) => {
    console.log('로직 성공 ! :', result)
  }).catch((error)=> {
    console.log('로직 실패 ! :', error)
  })
