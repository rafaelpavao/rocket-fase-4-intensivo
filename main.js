function oi(){
    console.log("Hello World")

    alert("Hello World")
    console.log("\n")
}

let a = 10
let b = 21
let c = false
let d = "abcd"

let arr = [a,b,c,d]

function sum(){
    console.log("SUM FUNCTION\n")

    let x = 10
    let y = 20
    console.log(`A + B = ${x+y}\n`)
    
}

function sub(){
    console.log("SUB FUNCTION\n")

    let x = 20
    let y = 10
    console.log(`A - B = ${x-y}\n`)
    
}

function mult(){
    console.log("MULT FUNCTION\n")

    let x = 20
    let y = 10
    console.log(`A x B = ${x*y}\n`)
    
}

function div(){
    console.log("DIV FUNCTION\n")

    let x = 20
    let y = 10
    console.log(`A / B = ${x/y}\n`)
    
}

oi()
sum()
sub()
mult()
div()

function isNum(x){
    console.log("IS NUMBER FUNCTION\n")

// TESTA NUMBER
    if(typeof x == "number"){
        console.log(`${x} É um numero!\n`)
        
    }
    else{
        console.log(`${x} Não é um numero!\n`)
        
    }
}

function isStr(x){
    console.log("IS STRING FUNCTION\n")

    // TESTA STRING
    if(typeof x == "string"){
        console.log(`${x} É uma string!\n`)
        
    }
    else{
        console.log(`${x} Não é uma string!\n`)
        
    }
}

function isBool(x){
    console.log("IS BOOLEAN FUNCTION\n")

    // TESTA BOOL
    if(typeof x == "boolean"){
        console.log(`${x} É um booleano!\n`)
        
    }
    else{
        console.log(`${x} Não é um booleano!\n`)
        
    }
}

function isEven(x){
    console.log("IS EVEN FUNCTION\n")

    // TESTA BOOL
    if(x % 2 == 0 && typeof x =="number"){
        console.log(`${x} É par!\n`)

    }
    else{
        console.log(`${x} Não é par!\n`)
        
    }
}

function isOdd(x){
    console.log("IS ODD FUNCTION\n")

    // TESTA BOOL
    if(x % 2 != 0 && typeof x =="number"){
        console.log(`${x} É ímpar!\n`)

    }
    else{
        console.log(`${x} Não é ímpar!\n`)
        
    }
}

for (i of arr){
    isNum(i)
    isBool(i)
    isEven(i)
    isOdd(i)
    isStr(i)
}