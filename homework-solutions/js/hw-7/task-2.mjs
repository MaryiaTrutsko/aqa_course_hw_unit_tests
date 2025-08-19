/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/
export function isPalindrom(word) {
    if (typeof word !== 'string') {
    return false;
  }
  
    if (word === '') {
    return true;
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  let cleanedWord = '';

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (alphabet.includes(char)) {
      cleanedWord += char;
    }
  }
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
}
//console.log(isPalindrom("mumu"));          
//console.log(isPalindrom("kazak"));        

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/
export function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }

  // 1. Используем регулярное выражение для разделения по одному или нескольким пробелам
  const words = sentence.split(/\s+/).filter(word => word !== '');

  // 2. Обрабатываем случай, если на входе была пустая строка или только пробелы
  if (words.length === 0) {
    return [];
  }

  // 3. Находим длину самого длинного слова
  let maxLength = 0;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  // 4. Собираем все слова с такой длиной
  const longestWords = [];
  for (const word of words) {
    if (word.length === maxLength) {
      longestWords.push(word);
    }
  }
  
  // 5. Всегда возвращаем массив, как требует тест
  return longestWords;
}
// одно слово
//console.log(findLongestWords("The fox jumps over the me")); 

//массив слов
//console.log(findLongestWords("JavaScript is a bogoscript language")); // ["JavaScript", "language"]
