const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
const name_people = people.filter((names) => {
  console.log(names.name);
})
// Risultato: 'Paolo', 'Giulia', 'Marco'

for (let i = 0; i < people.length; i++) {
  const person = people[i].name;
  console.log(person); 
}

people.forEach(person => {
  console.log(person);
})