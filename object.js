// object is such variable that can hole more than one value
 var student = {
    id: 113, 
    name:'Salman',
    class: 9,
    marks: 89
}
// geting object specific property
student.marks = 90;
console.log(student.class);
console.log(student);


// when you know the specific property name, 
// 1. use dot notation
var studentDetails = student.name;
// 2. like array
var studentDetails1 = student['id'];
// object.key for getting all object properties 
var studentDetails2keys = Object.keys(student);
var studentDetails2Value = Object.values(student);
console.log(studentDetails2keys);
console.log(studentDetails2Value);

var studentName = 'books';
var studentValue = student[studentName];
console.log(studentName,studentValue);

// set property values
student.id = 114;




var shoppingCart = {
    books: 3,
    sunglass : 1,
    keyboard : 5,
    mouse : 1,
    pen : 25
}

// if you know the specific property name , use dot notation to get the property value
 var penCount = shoppingCart.pen;

//  alternative
var penCount2 = shoppingCart['pen'];

// another system
var properties = Object.keys(shoppingCart);
var propertiesVlaues = Object.values(shoppingCart);

// property name with value
var propertyName = 'mouse';
var propertiesVlaues1 = shoppingCart[propertyName];

// set property value
shoppingCart.mouse = 15;

// 
shoppingCart['mouse'] = 29;
// 
shoppingCart[propertyName]=89;
console.log(properties);
console.log(propertiesVlaues);
console.log(propertiesVlaues1);
console.log(shoppingCart);



for(var i = 0; i< keys.length; i++){
    var propertyName = keys[i];
    var propertiesVlaues = shoppingCart[propertyName];
    console.log(propertyName,propertiesVlaues);
}



// for in loop

for(var propertyName in shoppingCart)
{
    const value = shoppingCart[propertyName];
    console.log(propertyName,propertiesVlaues);
}