const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
names.forEach(thisame => {
    console.log(thisame);
})
// Risultato: 'Edoardo', 'Simone', 'Francesco'

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
}