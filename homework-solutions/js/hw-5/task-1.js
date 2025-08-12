/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for( let i = 10; i>= 0; i-=2 ){
    evenNumbersResult = `${evenNumbersResult}-${i}`;
}
evenNumbersResult = evenNumbersResult.slice(1);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
let smilePatternResultBbuffer = '';
for (let i = 0; i<5; i++){
    smilePatternResultBbuffer = `${smilePatternResultBbuffer}:)`
    smilePatternResult = `${smilePatternResult}${smilePatternResultBbuffer}\n`;
}
smilePatternResult = smilePatternResult.slice(0,smilePatternResult.length -1);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
for(let i =0; i< text.length; i++){
    if (text[i] != " "){
     replaceSpacesWithOneResult += text[i];
    }
    else{
        replaceSpacesWithOneResult += "1";
    }
}

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
