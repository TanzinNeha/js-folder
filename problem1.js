function radianToDegree(radian)
{
    if( typeof radian != 'number'){
        return 'Please enter a number';
    }
    let degree = radian * (180/Math.PI);
    degree=degree.toFixed(2);
   // console.log(degree + " degree");
    return degree;
   

}

//console.log(radianToDegree('new'));

