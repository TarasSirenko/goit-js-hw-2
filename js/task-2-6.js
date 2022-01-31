const numbers = []
let total = 0
while (true) {
    let input = prompt('Введите число')
    if (input === null) {
        break
    }
    input = Number(input)
    let checNumber = Number.isNaN(input);
    if (checNumber) {
        alert('Было введено не число, попробуйте еще раз')
        continue
    }
    numbers.push(input);
    if (numbers.length > 0) {
        for (let number of numbers)
            total += number
    }
}

// console.log(numbers);
console.log(total);

