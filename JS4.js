//looping statement

//definit loop

// for loop

var x = 5;
for (let i = x; i >= 1; i--) {
    console.log(i);
    
}

//FOR IN

var obj = {'name':'irfan','age':'28'}
for(let x in obj){
    console.log(x)
    console.log(obj[x])
}

//For of

for(let item of [102,58,78,96,47]){
    console.log(item)
}

//indefinite loop

//while
var y=5
fac=1
while (y>=1) {
    fac*=y
    y--
}
console.log(fac)

//while
var y=5
fac=1
do {
    fac*=y
    y--
}while (y>=1)
console.log(fac)


// if we break a for loop on some condition we use break statement
// if we eleminate one of the iteration we continue