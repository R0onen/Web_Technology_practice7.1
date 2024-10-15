function getMin(a, b, c){
    if (a < b && a < c){
        return a
    }
    else if (b < a && b < c){
        return b
    }
    else{
        return c
    }
}

function evenOrOdd(a, b, c){
    let counteven = 0
    if (a%2 == 0){
        counteven++
    }
    if (b%2 == 0){
        counteven++
    }
    if (c%2 == 0){
        counteven++
    }
    if (counteven == 3){
        return "even"
    }
    else if (counteven == 2){
        return "even/odd"
    }
    else{
        return "odd"
    }
}

function inOrOutRange(a, b, c){
    if (a < c && b > c){
        return "In range"
    }
    else{
        return "Out of range"
    }
}

function maincf(){
    console.log(getMin(5, 9, 7))
    console.log(evenOrOdd(2, 5, 8))
    console.log(inOrOutRange(5, 10, 8))
}
