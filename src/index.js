/*module.exports = function multiply(first, second) {
  first = parseInt(first, 10);
  second = parseInt(second, 10);
  var z = first * second;
  let str = '' + z;
  return str;
}*/

  var first='345721';
  var second='359';
  var arrX=first.split('').reverse();
  var arrY=second.split('').reverse();
  var arrZ=[0,0,0,0,0,0];

  for (let i=0; i<arrY.length; i++) {
    for (let j=0; j<arrX.length; j++) {
      let z=arrY[i]*arrX[j];
      arrZ[j]=arrZ[j]+z;
      console.log(arrY[i],arrX[j],z,arrZ);

    }
  }
  console.log(arrX,arrY);
  console.log(arrZ);

