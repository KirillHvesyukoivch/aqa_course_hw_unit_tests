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
  if (typeof character['name'] === 'string'  && typeof character['age'] ==='number') characters.push(character);
  else throw Error;

}

function getCharacter(name) {
for (const person of characters ){
  if (person['name'] === name) return person
}
}

function getCharactersByAge(minAge) {
 const bufArray = [];
 if (typeof minAge !== 'number') throw Error
 for (const person of characters ){
  if (person['age'] >= minAge) bufArray.push(person)
}
return bufArray
}

function updateCharacter(name, newCharacter) {
  let modifedPerson = getCharacter(name);
  modifedPerson['name'] = newCharacter['name'];
  modifedPerson['age'] = newCharacter['age'];
}

function removeCharacter(name) {
  if (getCharacter(name) === undefined) throw Error;
  const indexForDel = characters.findIndex(el => el === getCharacter(name) );
  characters.splice(indexForDel, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
