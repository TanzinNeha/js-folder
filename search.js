const lyrics = 'Tomato is red';
const searchString = 'red';
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console,log(doesExist);
console,log(doesExistOneLine);

// index of
console.log(lyrics.indexOf('kala'));
// stratWith
console.log(lyrics.startsWith('Tomato'));
// endWith
console.log(lyrics.endsWith('Tomato'));

const fileName = 'biodata.pdf';
const otherfile = 'img.png';

fileName.endsWith('.pdf');