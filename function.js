function add(num1,num2){
// console.log('Add This',num1,num2);
}

add(10,20);

// return
function add(num1,num2){
    // console.log(num1,num2);
    var sum = num1 + num2;
    return sum; 
    }
    
add(10,20);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money/ singaraPrice;
    return quantity;
}

var taka = 150;
var singaras = bringSingara(taka);
console.log(singaras);

function getAvg(assi1,assi2,assi3){
  const total = assi1 + assi2 + assi3;
  const avg = total/3;
  return avg;
}

const assi1 = 80;
const assi2 = 60;
const assi3 = 50;


function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
 const result1 = add(12,13);
 const result2 = add(16,13);
 const finalReslt = add(result1,result2);