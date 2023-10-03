// 

// const inches = 13;
// const feet = inches/12;
// const incheToFeet = feet.toFixed(2);
// console.log(incheToFeet);

function incheToFeet(inches){
const feet = inches/12;
return feet;
}
const inches = 13;
const result = incheToFeet(inches);
// console.log(result);

//  const miles = 11;
//  const kilometers = miles * 1.6;
//  console.log(kilometers);

function milesToKilometers(miles){
    const kilometers = miles * 1.6;
    return kilometers;
}

const miles = 11;
const result1 = milesToKilometers(miles);
// console.log(result1);


// Check even and odd number using function
function isEven(number){
    const remainder = number % 2;
    if(remainder == 0){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}
 isEven(303);

//  Check whether a year is a Leap Year or not (simplified way)
function isLeapYear(year){
    const remainder1 = year%4;
    if(remainder1 == 0){
        return true;
    }
    else{
        return false;
    }
}

isLeapYear(2023);

//  Calculate Sum of all numbers of an array
 
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++ ){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index,element,sum);
        }
        return sum;

    }

    const numbersArray = [12,23,4,5,6,78,89];
    getSumOfAnArray(numbersArray);


    // Get Odd Numbers of an array and get odd Sum of an array

function getOddNumbersOfAnArray(num){

    const oddNumbers = [];
    let sum = 0;
    for(let i = 0; i< num.length; i++ ){
        const index = i;
        const element = num[index];
       
        if(element % 2 !== 0){
        oddNumbers.push(element);
        sum = sum + element;
        console.log(index,element,sum);
        }
        }
        return oddNumbers;
       
    }
    const numArray = [12,23,4,5,6,78,89];
    const oddNumbers = getOddNumbersOfAnArray(numArray);
    console.log(oddNumbers);