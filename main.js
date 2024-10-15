function getSum(a, b){
    return a + b
}

function isSquare(number){
    return Number.isInteger(Math.sqrt(number))
}

function greeting(name, surname, age){
    return "Hello, my name is " + name + surname + " and I am " + age  + " years old"
}

function main(){
    console.log(getSum(2, 5))
    console.log(isSquare(9))
    console.log(isSquare(3))
    console.log(greeting("Yernur", "Kazhyakpar", 19))
}