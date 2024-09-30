

function sum(a, b, c){

    console.log([...arguments])
    const result = a +b+ c
    return result
}

const total = sum(34, 24, 12, 22, 45)
console.log(total)
console.log(sum.length)
