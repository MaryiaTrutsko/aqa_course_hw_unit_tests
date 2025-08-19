/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

//export { vowelsAndConsonantsResult };

let vowelsCount = 0;
let consonantsCount = 0;
const vowels = 'aeiouy'; // Можно добавить 'y' в зависимости от правил

for (let i = 0; i < word.length; i++) {
  const char = word[i].toLowerCase(); // Приводим к нижнему регистру для удобства

  // Проверяем, является ли символ буквой
  if (char >= 'a' && char <= 'z') {
    // Если символ - гласная
    if (vowels.includes(char)) {
      vowelsCount++;
    } else {
      // Иначе - согласная
      consonantsCount++;
    }
  }
}

const result = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
console.log(result); // Ожидаемый результат: "hello contains 2 vowels and 3 consonants"