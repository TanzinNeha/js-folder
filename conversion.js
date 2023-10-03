var firstName = 'Jennie';
var lastName = 'Kim';
var fullName = firstName + ' '+ lastName;

 console.log(fullName); 

var price1 = '31';
var price2 = 20;
var totalPrice = price1 + price2;
 console.log(totalPrice); 

 //convert string to number
price1update = parseInt(price1);
console.log(price1update); 
var totalPrice = price1update + price2;
 console.log(totalPrice);

var gpa = '3.70';
var gpa1 = parseFloat(gpa);
console.log(gpa1);


//type of
var price = 100;
console.log(typeof price);

var price = '100';
console.log(typeof price);

var isHappy = true;
console.log(typeof isHappy);

var me;
 console.log(typeof me); //undefind


//toFixed- return as string
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);//work for only 0.1 and 0.2


//reminder
var mangoes = 19;
var person = 7;
var reminder = mangoes % person;
console.log(reminder);