
// class product{
//     country='bangladesh';
    
//     speak(talk)
//     {

//         console.log(`talking about ${talk}`);
//     }
// }

// const lenovo= new product();
// lenovo.speak('tom')

class person{
    eat(food){
        console.log(`Human beings are always eat various food like ${food}`)
    }
}

const item = new person();
item.eat('rice and fish');

// 

class teacher{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

const teacher1 = new teacher('Alex', 40)
const teacher2 = new teacher('Akib', 45)

console.log(teacher1)
console.log(teacher2)
