const nums = [1, 2, 3, 4]

const newnums = nums.map(num => num ** 3)

let res = []

for (const i in nums) {
    res[i] = nums[i] ** 3
}

console.log(res)

console.log(newnums)
