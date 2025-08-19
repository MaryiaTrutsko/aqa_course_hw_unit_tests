/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
const result = mergeArrays([1, 2], [3, 4], [5, 6]);
//console.log(result); // [1, 2, 3, 4, 5, 6]
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
    function devideBy(sentence) {
            const wordsWithEmpty = sentence.split(' ');
                const words = wordsWithEmpty.filter(word => word !== '');
    
            if (words.length === 0) {
        return '';
      }
    
            const firstWord = words[0].toLowerCase();
      const otherWords = words.slice(1);
    
      const capitalizedWords = otherWords.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
    
            return [firstWord, ...capitalizedWords].join('_');
    }
//console.log(devideBy('I am super engineer'));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
    function fibonacci(n) {
      // 1. Базовые случаи
      if (n <= 1) {
        return n;
      }
    
      // 2. Инициализация переменных
      let a = 0; // f(0)
      let b = 1; // f(1)
    
      // 3. Запуск цикла
      for (let i = 2; i <= n; i++) {
        // 4. Вычисление и обновление
        const next = a + b;
        a = b;
        b = next;
      }
    
      // 5. Возвращение результата
      return b;
    }
    //console.log(fibonacci(8)); // 21

export { mergeArrays, fibonacci, devideBy };
