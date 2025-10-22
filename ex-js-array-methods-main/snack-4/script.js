const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
const name_author = posts.map((authors) => {
  return `Author: ${authors.author}`
})
console.log(name_author);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const author_name = posts.filter((authors) =>{
  return authors.author
})
console.log(author_name);

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  console.log(post.author);
}

