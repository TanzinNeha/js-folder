// split
const lyrics = 'Tomato is red red.';
const parts = lyrics.split(' ');
const sentance = lyrics.split('.');
const chars = lyrics.split('');
console.log(parts,sentance,chars);

// slice
const partial = lyrics.slice(5, 8);
console.log(partial);

// substring
const partial1 = lyrics.substring(5, 8);
console.log(partial1);

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"