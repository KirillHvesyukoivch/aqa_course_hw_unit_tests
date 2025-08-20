/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;
const testArrauy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
for( let i=0; i< testArrauy.length; i++ ){
let count = testArrauy.reduce((acc,el) =>{
   if (el === testArrauy[i]) {
    acc++;
   }
  return acc;
   },0)
  if (count > 1){
    testArrauy.splice(i,1)
    i--;
  }
  }
  testArrauy.sort((a,b) => a-b) 
unique = testArrauy
export { unique };
