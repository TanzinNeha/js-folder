function sumOfNumbers(number){
    let sum = 1;
    for(let i = 1; i<= number; i++){
        sum = sum * i;
        // console.log(i,sum);
    }
    return sum;
}

sumOfNumbers(5);


// factorial
function factorial(num){
    let result = 1;
    for(let i = 1; i>= num; i--){
        result= result * i;
         console.log(i);
    }
    return result;
}

const num = 6;
const fact = factorial(num);
console.log('factorial of', num, fact);