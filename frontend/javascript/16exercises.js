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


//******************************************************* */

// EJERCICIO EDABIT
// https://edabit.com/challenge/2FF7RKw9RLwc3EBY9
// Ready, Set... Get!

console.log('************Challenge Exercise***************')

class Challenge {
    constructor(id, level){
        this.id = id
        this.level = level
    }
    get points(){ //aquí estaba usando un método normal y funcionaba
        switch (this.level) {
            case 'VE':
                return 5

            case 'EA':
                return 10

            case 'ME':
                return 20

            case 'HA':
                return 40

            case 'VH':
                return 80

            case 'EX':
                return 120

            default:
                break;
        }
    }
}

class User{
    constructor(name, xp, log){
        this.name = name
        this.xp= xp
        this.log = log
    }
//The constructor parameters are name, xp and log. 
//The name will be, trivially, the username. 
//The xp is the accumulator that stores the XP points earned. 
//The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.

    set newSolvedChallenge(challenge){
        console.log(challenge)
        this.xp += challenge.points
        this.log.push(challenge.id)
    }

    //The method must increment the xp of the user and store the challenge id into the array log.
    // newSolvedChallenge(challenge){
    //     console.log(challenge)
    //     this.xp += challenge.points()
    //     this.log.push(challenge.id)
    // }

}

// let user1 = new User('Madam', 0, [])
// console.log(user1)
// user1.newSolvedChallenge(challenge1)
// user1.newSolvedChallenge(challenge4)
// user1.newSolvedChallenge(challenge6)
// console.log(user1)
// let user2 = new User('Steve', 0, [])
// console.log(user2)
// user2.newSolvedChallenge(challenge5)
// user2.newSolvedChallenge(challenge3)
// user2.newSolvedChallenge(challenge2)
// console.log(user2)


let user1 = new User('Madam', 0, [])
console.log(user1)

let user2 = new User('Steve', 0, [])
console.log(user2)

let challenge1 = new Challenge(1, 'VE')
let challenge2 = new Challenge(2, 'EA')
let challenge3 = new Challenge(3, 'ME')
let challenge4 = new Challenge(4, 'HA')
let challenge5 = new Challenge(5, 'VH')
let challenge6 = new Challenge(6, 'EX')
console.log(challenge1)
console.log(challenge1.points)
console.log(challenge1.id)
console.log(challenge2)
console.log(challenge3)
console.log(challenge3.points)
console.log(challenge4)
console.log(challenge5)
console.log(challenge6)
console.log(challenge6.points)


user1.newSolvedChallenge = challenge1
user1.newSolvedChallenge = challenge4
user1.newSolvedChallenge = challenge6
console.log(user1)

user2.newSolvedChallenge = challenge5
user2.newSolvedChallenge = challenge3
user2.newSolvedChallenge = challenge2
console.log(user2)

