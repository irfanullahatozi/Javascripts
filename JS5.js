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



// function constructor
let func = new Function("x","y","return x*y;");
console.log(func(5,6))

// recursion

function factorial(num){
    if (num<=0){
        return 1 
    }else
    {
        return num * factorial(num-1)
    }
}

console.log(factorial(6))

// anonymous function
// (function(){
//     console.log("Anonymous function");
// })();

//arrow function 
//variant 1

var food = (x,y,z) => {
    return x+y+z
}

console.log(food(20,30,40));

// vriant 2
var food = (x,y,z) =>  x+y+z


console.log(food(20,30,40));

//variant 3

var food = x => x**3

console.log(food(2));

