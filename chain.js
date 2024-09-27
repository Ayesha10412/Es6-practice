
const data = [{id: 1, name: 'alex', address:'USA'}]
console.log(data[0].address)

const products = {
    count: 5000,
    data: [

        { id:1, name: 'Samsung', price: 65000},
        { id: 2, name: 'Apple', price: 100000}
    ]
}

console.log(products.data[1].name)


const user2 ={
    id: 5002, 
    name: 'alex',
    address:{
        city: 'gopalganj',
        country: 'Bangladesh',
    }
}
console.log(user2.address.city)
console.log(user2.address.city.street?.village)
