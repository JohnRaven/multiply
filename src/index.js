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
