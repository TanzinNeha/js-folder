var num = [45,67,89,4,5,533,789,22];

//get element by index
// console.log(num[4]); //var element = num[1];

//set new value at particular index
num[1] = 22;
// console.log(num);

//find index of an element
 var positionIndex = num.indexOf(45);
//  console.log(positionIndex);

 //num.indexOf(999); if not present then will give -1
 
var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
// console.log(clothing.length);

//push-insert
var number = [78,90,65,45];
number.push(88);
console.log(number);
//push at a particular index
 var friends = ['shoes', 'shirts', 'socks', 'sweaters'];
 friends.push('salam');
 console.log(friends);
// pop-out
var iteams = [1,2,3,4];
iteams.pop();
console.log(iteams);



const scores = [22, 54, 76, 92, 43, 33];
let i = 0;

while (i < scores.length) {
    console.log(scores[i]);
    i++;
}


// array inclues -  return true or false wheather the element is present in the array or not
// CONCAT - returns a new array containaing the value of the concatenated arrays
// array slice - object selected from start to end (end not included) where start and end represent the index of items in that array.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//  Remove duplicate items from an array

const name = ['abul','babul','cabul','abul','babul'];

function removeDuolicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
console.log(unique);