

const num1 = 5
const num2 = 5

function multiply(a, b){
    a= 6
    return a*b;
}

const total = multiply (num1, num2)
console.log(total)
// console.log(num2)

// -----------------------------


const student1 = {name: 'Ayesha', age: 22}
const student2 = {name: 'Alex', age: 22}

function passByReference(p, q)

{


p.name= 'Bristi';
q.age= 30
return console.log(p,q)

}
console.log(student2)
const person = passByReference(student1, student2)
console.log(person)
// console.log(student1)
