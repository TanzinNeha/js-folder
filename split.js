// Splitting the strings into words example
let str = 'JavaScript String split()';
let substrings = str.split(' ');

console.log(substrings);
//Returning a limited number of substrings example
let stri = 'JavaScript String split()';
let substring = stri.split(' ',2);

console.log(substring);
//Splitting a string using a regular expression example
let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences);
//If the regular expression contains capturing parentheses (), the split() method also includes the matched results in the array:
// let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
// let sentences = paragraph.split(/([!,?,.])/);
// console.log(sentences);