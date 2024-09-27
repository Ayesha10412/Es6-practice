
const numbers = [4, 5, 2, 10, 45]

function doubleIt(num){
    return num*2;
}
const result = numbers.map(doubleIt)
console.log(result)

// arrow function

const doubles = n => n*2;
console.log(numbers.map(doubles))

// another way 

const output = numbers.map(n => n*2)
console.log(output)

// 

const friends = ['ayesha', 'bristi', 'borsha', 'alex']
console.log(friends.map(frnd => frnd.length))

console.log(friends.map(frnd => frnd[0]))