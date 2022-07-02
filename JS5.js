//functions

// simple function
function hello(){
    console.log('Hello world')
}

hello()


//return function
function name() {
    return 'Irfan'
}

console.log(name())

//parameterize function 

function add(x,y) {
    return x+y
}

console.log(add(10,15))

//defaute parameterize function
function sub(x,y=5){
    return x-y
}
console.log(sub(10))

//multple paramenter functions
function multpleparams(...params){
    console.log(params)
    return params.length
}
console.log(multpleparams(10,12,13,14,15,16))
