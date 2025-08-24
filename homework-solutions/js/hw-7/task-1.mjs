/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(... arrays) {
  let mergedArray = [];
  for (const ar of arrays){  
   mergedArray = [...mergedArray, ...ar];
 // Ваш код
}
return mergedArray;
}


/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Ваш код
  if (sentence === "") return sentence;
  let buff = [(sentence[0].toLowerCase())];
  for(let i =1; i< sentence.length; i++ ){
     if (sentence[i]=== ' ' && sentence[i -1]=== ' ') continue;
    else if(sentence[i]=== ' ') buff.push("_");
    else if(sentence[i -1]=== " ") buff.push(sentence[i].toUpperCase());
    else buff.push(sentence[i].toLowerCase());
  }
  return buff.join("");
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 1 || n === 0){
    return n;
  }
    let first = 0;
    let second = 1; 
  for( let i = 2; i <= n; i++){
    const buf = first + second;
    first = second;
    second = buf;
  }
return second;
}

export { mergeArrays, fibonacci, devideBy };
