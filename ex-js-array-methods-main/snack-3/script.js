const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const number = numbers.map((number) => {
    return number + 1
});
console.log(number);

// Risultato: [3, 9, 5, 8, 3, 88]

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i] + 1;
    console.log(number);
}

numbers.forEach(number => {
    console.log(number + 1);
})