/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word != "string") return false;
  const wordMaxIndex = word.length - 1;
  for(let i = 0; i < word.length/2; i++){
  if(word[i].toLowerCase()!== word[wordMaxIndex - i].toLowerCase()) return false;
  }
  return true;
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let longestWords = []
  if (typeof sentence !== "string") return longestWords;
  if (sentence.trim() === "") return longestWords;
  let longestWordSize = 0;
  let wordBuf = "";
  for(let i = 0; i <= sentence.length; i ++){
    if(sentence[i]!== " " && sentence[i]!== undefined ){
      wordBuf = wordBuf + sentence[i];
    }
    else{
      if (longestWordSize === wordBuf.length ) {
        longestWords.push(wordBuf);
        longestWordSize = wordBuf.length;
        wordBuf = ""
    }
    else if (wordBuf.length > longestWordSize ){
      longestWords.length = 0;
      longestWords.push(wordBuf);
       longestWordSize = wordBuf.length;
       wordBuf = "";
    }
    else if (wordBuf.length < longestWordSize){
       wordBuf = "";
    }

  }
}
return longestWords
}

console.log(findLongestWords("Mamadd mildda rdsadasau"))

export { isPalindrom, findLongestWords };
