
/*
truthy: 

1. true
2. Any number (+ve, -ve) will be truthy other than 0
3. Any string will be truthy other than empty string
4. '0', 'false'
5. {}, []

falsy:

1. false
2. 0
3. empty string ('')
4. undefined
5. null

*/



const x = [] ;
if(x){
    console.log('Value of x is truthy')
}

else {
    console.log('Value of x is falsy')
}

// optional; check falsy

const y= ''
if(!!y === false){

console.log('Value is falsy')
}
else{
    console.log('Value is not falsy')

}