

function greeting(greetingHandler, name){

    greetingHandler(name)
}

function greetingHandler(name){
    console.log('Good Morning', name)
}

greeting(greetingHandler, 'Tom Cruise')


function greetingEvening(name){
    console.log('Good Evening', name)
}

greeting(greetingEvening, 'Tom Cruise')

// Inside the greeting function, it doesn't matter what the function's name is (it’s just referred to as greetingHandler inside the function), it will call the function you pass to it.