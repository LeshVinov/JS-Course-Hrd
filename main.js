'use strict'

// 1

// let arr = ['12345', '23412', '32312', '44561', '22344', '67888', '455'];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
//         console.log(arr[i]);
//     } else {
//         console.log('Число не начинается с числа 2 или 4');
//     }
// }

// 2


nextPrime:
for (let i = 2; i <= 100; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i, '  - простое число, ', 'делится на 1 и на: ', i)
}
