//+ operator
const str = 'Hello' + ' ' + 'World';
str; // 'Hello World'
//let str = 'Hello';
//str += ' ';
//str += 'World';
//str; // 'Hello World'
//If the left hand side of the + operator is a string, 
//JavaScript will coerce the right hand side to a string. 
//That means it is safe to concatenate objects, numbers, null, 
//and undefined.

//let str = 'Values: ';
//str += 42;
//str += ' ';

//str += {};
//str += ' ';

//str += null;

//str; // 'Values: 42 [object Object] null'
//2.Array#join()
['Hello', ' ', 'World'].join(''); // 'Hello World'
//String#concat()
const str1 = 'Hello';
const str2 = str1.concat(' ', 'World');

// 'Hello'. Strings are immutable, so `concat()` does not modify `str1`
str1;
// 'Hello World'
str2;