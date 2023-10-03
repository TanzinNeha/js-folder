function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

const result = sum(number);

// display the result
console.log(`The sum is ${result}`);


// calculating sum of numbers using recursion
function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i - 1);
}
const result1 = sum(5);
console.log(result);