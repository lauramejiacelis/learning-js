const addName = (obj, str, num) => {
    return {...obj, [str] : num }
}

console.log(addName({piano: 500}, 'brutus', 100))

const possibleBonus = (a,b) => {
    return b-a <= 6 && b-a >= 1
}

console.log(possibleBonus(3, 7))
console.log(possibleBonus(1,9))
console.log(possibleBonus(5,3))
console.log(possibleBonus(3,3))

const sevenBoom = (arr) => {
    return arr.toString().includes('7') ? 'Boom!': "there is no 7 in the array"
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) // "Boom!"
// 7 contains the number seven.

console.log(sevenBoom([8, 6, 33, 100])) // "there is no 7 in the array"
// None of the items contain 7 within them.

console.log(sevenBoom([2, 55, 60, 97, 86])) // "Boom!"
// 97 contains the number seven.

console.log(sevenBoom([997, 1, 2, 3, 4, 5, 6, 7])) 