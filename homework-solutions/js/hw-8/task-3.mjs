/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  let sortedBuf = numbers.toSorted((a, b) => a - b);
  let buf = 0;
  sortedBuf.some((el) => {
    if(el - buf === 2) {
      buf +=1
      return true ;
    }
    else buf = el;
  //  console.log(buf)
  })
  if ( buf ===sortedBuf[sortedBuf.length - 1] ) buf++;
  return buf;
  }

export { findMissingNumber };
