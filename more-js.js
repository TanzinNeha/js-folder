// Write foo, bar, foobar if divisible by 3 or 5 or both

// display 1 to 10
// if the num is divisible by 3 then print foo
// if the num is divisible by 5 then print bar
// if both then peint foobar

for(i=1;i<=10;i++){
    if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else{
        console.log(i);
    }
}

// Use add and multiplication to calculate wood requirements

function woodClaculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
   
    const tableWood = tableQuantity * perTableWood;
    
    const bedWood = bedQuantity * perBedWood;
   
   
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodClaculator(2,2,5);
console.log(totalWood);


// Find the cheapest phone from an array of phone objects
const phones = [
  {name: 'samsung', price: 50},
  {name: 'vivo', price: 30},
  {name: 'htc', price: 80},
  {name: 'redmi', price: 90},
  {name: 'oppo', price: 10},
  {name: 'realme', price: 50},
  {name: 'pixel', price: 90}

];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){

            cheapest = phone;
        }

    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);

//  Multi-layer discount price calculation

/*
1. if ticket price numbers is less then 100 , per ticket price 100taka
2. more then 100 but less than 200 . first 100 price will be 100 and rest will be 90
3. more than 200 price : 70
*/

function ticketPrice(number){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuentity <= 100){
        const price = ticketQuentity * first100Rate;
        return price;
    }
    else if(ticketQuentity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuentity = ticketQuentity - 100;
        const restTicketPrice = restTicketQuentity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuentity = ticketQuentity - 200;
        const restTicketPrice = restTicketQuentity * restTicketRate;
        const totalCost = first100Rate + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(120);
console.log(price);