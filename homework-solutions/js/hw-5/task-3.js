/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
const vowels =  /[aeiou]/i;
const consonants = /[bcdfghjklmnpqrstvwxyz]/i;
let vowelsCount = 0;
let consonantsCount = 0;
for ( let i =0; i< word.length; i ++){
switch(true){
    case  vowels.test(word[i]):
        vowelsCount++;
        break;
    case consonants.test(word[i]):
        consonantsCount++;
        break;
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

export { vowelsAndConsonantsResult };
