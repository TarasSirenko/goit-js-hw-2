const numberInputRef = document.querySelector(".add-number");
// const degreeInputRef = document.querySelector(".add-degree");
let buttonRef = document.querySelector(".button");
const numbers = [0];
let totalBtRef = document.querySelector('.calc')
let total

buttonRef.addEventListener('click', function () {
    let value = Number(numberInputRef.value)

    numbers.push(value)
    numberInputRef.value = '';

    
} )
console.log(numbers);

totalBtRef.addEventListener('click', function () {
    for (const number of numbers) {
        console.log(number);
        total += number
    }
    console.log(total);
} )

// totalBtRef.addEventListener('click', function () {
//     for (const number of numbers) {
//         console.log(number);
//         total += number
//     }
//  })
//     for (const number of numbers) {
//         console.log(number);
//         total += number
//     }
//     console.log(total);
// })
