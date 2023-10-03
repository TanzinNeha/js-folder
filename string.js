const userName = 'Me';
const userInput = 'me';
console.log(userName.toLowerCase());
if(userName.toLowerCase()== userInput.toLowerCase()){
 console.log('valid');
}
else{
    console.log('invalid');
}

// reversed a string
function reverseString(text){
    let reversed = '';
    for(i = text.length-1; i>= 0; i++){
        const element = text[i];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log(reversed);