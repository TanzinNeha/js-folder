var number = 0;
while(number < 10){
    //console.log('Hello');
    number++;
    if(number > 4){
        break;
    }
}

var numbers = [45,67,89,09,54,24,89];
for(var i = 0; i<7; i++){ //i<7 => numbers.length
    var number = numbers[i];
    if(number>50){
        continue; //array er vitor less then 50 gula print hobay
    }
    console.log(number);
}