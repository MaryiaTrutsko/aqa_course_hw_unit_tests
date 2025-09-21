/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
    { name: 'Barney', age: 35 },
    { name: 'Fred', age: 39 },
    { name: 'Jack', age: 49 },
  ];
  
  function addCharacter(character) {
    // Ваш код
    characters.push(character);
  }
  
  function getCharacter(name) {
    // Ваш код
    return characters.find(char => char.name === name);
  }
  
  function getCharactersByAge(minAge) {
    // Ваш код
    return characters.filter(char => char.age >= minAge);
  }
  
  function updateCharacter(name, newCharacter) {
    // Ваш код
    const existingCharacter = getCharacter(name);
    if (existingCharacter) {
      Object.assign(existingCharacter, newCharacter);
    }
  }
  
  function removeCharacter(name) {
    // Ваш код
    const index = characters.findIndex(char => char.name === name);
    if (index !== -1) {
      characters.splice(index, 1);
    }
  }
  
  
  // Ниже приведены вызовы функций для проверки их работы
  // Для того чтобы увидеть результат, нужно запустить этот файл в Node.js
  console.log('Изначальный массив:', characters);
  
  // 1. Проверка addCharacter
  console.log('\n--- Добавление персонажа ---');
  addCharacter({ name: 'Mary', age: 28 });
  console.log('Массив после добавления Mary:', characters);
  
  // 2. Проверка getCharacter
  console.log('\n--- Поиск персонажа ---');
  const fred = getCharacter('Fred');
  console.log('Найденный персонаж "Fred":', fred);
  const notFound = getCharacter('John');
  console.log('Поиск несуществующего персонажа "John":', notFound); // Должен быть undefined
  
  // 3. Проверка getCharactersByAge
  console.log('\n--- Фильтрация по возрасту ---');
  const olderCharacters = getCharactersByAge
  
   // export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };