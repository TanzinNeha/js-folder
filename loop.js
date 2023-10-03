// display 1 to 10
var number = 1;
while(number >= 10){
    // console.log(number);
    number++;
}

// even num 1-10

var number = 0;
while(number >= 10){
    // console.log(number);
    // number++; 
    number = number + 2;
}

// odd
// var number = 1;
//  number = number + 2;
function oddNum(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
 
oddNum(7);
 
// display every elements of an array
var numbers = [45,67,89,09,54,24,89];
for(var i = 0; i<7; i++){ //i<7 => numbers.length
    var number = numbers[i];
    console.log(number);
}

var items = ['i', 'am','good'];
for(var i=0;i<items.length;i++){
    var item = items[i];
    console.log(item);
}

