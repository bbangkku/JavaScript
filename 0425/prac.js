const p = new Promise((resolve)=>{
  console.log('Promise 내부 resolve 전');
  resolve('resolve 값')
})

const continue_p = p.then((res)=>{
  console.log(res);
  console.log('첫번째 then');
})
.then(console.log('두번째 then(콜백함수 아님)'))

console.log('\n다른작업수행중\n');

continue_p.then(()=>{
  console.log('세번째 then')
})
