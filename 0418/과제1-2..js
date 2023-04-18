// 1번
const nums = [1,2,3,4,5,6,7,8]

for (let i = 0; i < nums.length; i++) {
  console.log('nums[' + i + ']: ' + nums[i])
}

// for (const i = 0; i < nums.length; i++) {
//                                     ^

/* const i = 0 대신 let i = 0을 사용해야함 
const는 한번 선언되면 값을 변경할 수 없음
*/

// TypeError: Assignment to constant variable.

// 2번

for (num of nums) {
  console.log(num, typeof num)
}

/* for ... of 는 배열의 반복에서 사용되고
for ... in 은 객체의 반복에서 사용된다.
*/

