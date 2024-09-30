

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const watch1 = stopWatch()
const watch2 = stopWatch()
const watch3 = stopWatch()

console.log(watch1);
console.log(watch2);
console.log(watch1);

console.log(watch3);
console.log(watch1);

console.log(watch1);

// do it into browser console 

