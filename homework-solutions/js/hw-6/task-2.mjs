/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function findUniquePizzas(myPizzas, competitorPizzas) {
  const uniquePizzas = [];
  
  for (const myPizza of myPizzas) {
    let isFound = false;
    for (const competitorPizza of competitorPizzas) {
      if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      uniquePizzas.push(myPizza);
    }
  }

  if (uniquePizzas.length > 0) {
    return uniquePizzas;
  } else {
    return null;
  }
}

const resultT1 = findUniquePizzas(myPizzasT1, competitorPizzas);
const resultT2 = findUniquePizzas(myPizzasT2, competitorPizzas);

resultUnique = findUniquePizzas(myPizzasT1, competitorPizzas);
resultNull = findUniquePizzas(myPizzasT2, competitorPizzas);

//console.log('Результат для T1:', resultT1); // ['Margherita', 'Vegetarian']
//console.log('Результат для T2:', resultT2); // null

export { resultNull, resultUnique };