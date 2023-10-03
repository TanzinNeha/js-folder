//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

//@param start — The zero-based location in the array from which to start removing elements.

//@param deleteCount — The number of elements to remove.

//@returns — An array containing the elements that were deleted.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
fruits.splice(2, 2,"Lemon", "Kiwi");

console.log(fruits);
