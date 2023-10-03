const myString = "I am learning JavaScript and it is cool!";
var  newString = myString.substring(0,10);
console.log(newString);
//If we don’t set an ending index, then we get a substring starting from the given index number until the end of the original string:
var sliceString = myString.slice(14);
console.log(sliceString);