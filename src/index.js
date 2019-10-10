module.exports = function multiply(first, second) {
  var arrX = first.split('').reverse();
  var arrY = second.split('').reverse();

  var zeroes;
  if (first[0] * second[0] >= 10) {
    zeroes = first.length + second.length;
  } else {
    zeroes = first.length + second.length - 1;
  }
  var arrZ = Array.from(Array(zeroes).fill(0));

  for (let i = 0; i < arrY.length; i++) {
    for (let j = 0; j < arrX.length; j++) {
      arrY[i] = parseInt(arrY[i], 10);
      arrX[j] = parseInt(arrX[j], 10);

      let z = arrY[i] * arrX[j];
      arrZ[j + i] = arrZ[j + i] + z;
    }
  }

  var ost = 0;
  for (let n = 0; n < arrZ.length; n++) {
    arrZ[n] = arrZ[n] + ost;

    ost = Math.trunc(arrZ[n] / 10);

    let p = (arrZ[n] / 10 + '').split(".")[1];
    arrZ[n] = parseInt(p, 10); 
    if (p == undefined) {
      arrZ[n] = 0;
    } 
  }
  arrZ = arrZ.reverse().join(''); 
  return arrZ;

}
/*
  var first = '760954769047694567984358934658793465783';
  var second = '32986584375683268326478346587346582436583456';
  var arrX=first.split('').reverse();
  var arrY=second.split('').reverse();
  var arrZ = Array.from(Array(first.length + second.length).fill(0));
  // console.log(arrX,arrY);

  for (let i=0; i<arrY.length; i++) {
    for (let j=0; j<arrX.length; j++) {
      arrY[i] = parseInt(arrY[i], 10);
      arrX[j] = parseInt(arrX[j], 10);

      let z = arrY[i] * arrX[j];
      arrZ[j+i]=arrZ[j+i]+z;

      // console.log(arrY[i],arrX[j],z,arrZ);

    }
  }
  // console.log(arrX,arrY);
  // console.log(arrZ);
  // var arrZ=[4,19,26,38,49,59,38,20,7]

  // console.log(arrZ);
  var ost=0;
  for (let n = 0; n < arrZ.length; n++) {
    arrZ[n] = arrZ[n] + ost; 

    ost = Math.trunc(arrZ[n] / 10);

    let p = (arrZ[n] / 10 + '').split(".")[1];
    arrZ[n] = parseInt(p, 10);      //перевод строки в цифры
    if (p == undefined) {arrZ[n] = 0;}  //проверка и замена undefined на строку '0'
  }
  // console.log(arrZ);
  arrZ = arrZ.reverse().join(''); //реверс массива и перевод в строку
  console.log(arrZ);
*/

