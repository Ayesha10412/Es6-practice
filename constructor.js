
class Person{

  constructor  (name, age)
{
    this.name =  name
this.age = age

}

sleep(){
    console.log(`Sleeping now  ${this.name}`)
}

activity(){
    this.sleep()
}

}

const result = new Person('Alex', 24)
result.activity()
// console.log(result)
