let a = 1;
let b = 2;
[a, b] = [b, a];
a; // => 2
b; // => 1

// Temporary variable
let a1 = 1;
let b1 = 2;
let temp;
temp = a1;
a1 = b1;
b1 = temp;
a1; // => 2
b1; // => 1

// Addition and difference
let a2 = 1;
let b2 = 2;
a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;
a2; // => 2
b2; // => 1
// Swapping Variables With Destructuring
let oscar = 'La La Land';
let nominee = 'Moonlight';

[oscar, nominee] = [nominee, oscar];

console.log(oscar); // Moonlight
console.log(nominee); // La La Land