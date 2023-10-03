function reverseString(string) {
    return string.split(' ').reverse().join(' ');
}

console.log( reverseString('Hello world'));             // world Hello
console.log( reverseString('Reverse words in string')); // string in words Reverse