function createString(a, b, c){
    let result = ""
    for (let i = a; i <= b; i+=c){
        result += i.toString() + " "
    }
    return result
}

function rangeSum1(a, b){
    let sum = 0
    for (let i = a; i <= b; i++){
        for (let j = a; j <= i; j++){
            sum += j
        }
    }
    return sum
}

function rangeSum2(a, b){
    let sum = 0
    for (let i = a; i <= b; i++){
        sum += i
    }
    return sum
}

function seriesSum(number){
    let sum = 0
    for (let i = 1; i <= number; i++){
        sum += 1/(i*i)
    }
    return (Math.round(sum*100) / 100).toString()
}

function countDigits(number){
    let str = number.toString()
    return str.length
}

function mainloop(){
    console.log(createString(0, 20, 5))
    console.log(rangeSum1(0, 3))
    console.log(rangeSum2(5, 10))
    console.log(seriesSum(5))
    console.log(countDigits(123456789))
}