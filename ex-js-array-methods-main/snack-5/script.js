const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const is_even = nums.filter((even) => {
    if (even % 2 === 0) {
        return true
    } return false
})
console.log(is_even);

let even = []

for (let i = 0; i < nums.length; i++) {
    const numb = nums[i];
    if (numb % 2 === 0) {
        even.push(numb)
    }
}
console.log(even);

const nuMb = []
nums.forEach((numb) =>{
    if (numb % 2 === 0) {
        nuMb.push(numb)
    }
})
console.log(nuMb);

