
function  reversestring(text){
    let reversed ="";
for(let i=text.length-1;i>= 0;i--){
    const element = text[i];
    reversed=reversed+element;
}
return reversed;
}
const myString='I am a good girl';
const reversed=reversestring(myString);
console.log('reversed output:',reversed);

///word reverse
function  reverseWord(str){
const Words =str.split('');
const result =[];
for(let i=Words.length-1;i>= 0;i--){
    const element = Words[i];
    result.push(element);

}
console.log(result);
}
