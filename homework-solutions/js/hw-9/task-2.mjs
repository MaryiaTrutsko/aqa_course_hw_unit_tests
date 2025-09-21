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
      // Проверка на корректность входных данных
      if (!character || typeof character.name !== 'string' || typeof character.age !== 'number') {
          throw new Error('Invalid input: character must have a name (string) and age (number).');
      }
      characters.push(character);
  }
    
  function getCharacter(name) {
      // Проверка на корректность входных данных
      if (typeof name !== 'string' || !name) {
          throw new Error('Invalid input: name must be a non-empty string.');
      }
      return characters.find(char => char.name === name);
  }
  
  function getCharactersByAge(minAge) {
      // Проверка на корректность входных данных
      if (typeof minAge !== 'number' || minAge < 0) {
          throw new Error('Invalid input: minAge must be a positive number.');
      }
      return characters.filter(char => char.age >= minAge);
  }
  
  function updateCharacter(name, newCharacter) {
      // Проверка на корректность входных данных
      if (typeof name !== 'string' || !name || !newCharacter) {
          throw new Error('Invalid input.');
      }
      const existingCharacter = getCharacter(name);
      // Проверка, найден ли персонаж
      if (!existingCharacter) {
          throw new Error('Character not found.');
      }
      Object.assign(existingCharacter, newCharacter);
  }
  
  function removeCharacter(name) {
      // Проверка на корректность входных данных
      if (typeof name !== 'string' || !name) {
          throw new Error('Invalid input: name must be a non-empty string.');
      }
      const index = characters.findIndex(char => char.name === name);
      // Проверка, найден ли персонаж
      if (index === -1) {
          throw new Error('Character not found.');
      }
      characters.splice(index, 1);
  }
    
  
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
  
   export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };