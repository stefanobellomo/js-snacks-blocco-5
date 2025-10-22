const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const student = students.find((classes) => {
  return classes.class
})
console.log(student);

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if (student.class === '3C') {
    console.log(student);
  }
}

students.forEach(student => {
  if (student.class === '3C') {
    console.log(student.class);
  }
});


