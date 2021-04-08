let getBigger = (numbers) => numbers.sort((x, y) => x - y).pop();

let numbers = [];

while (numbers.length < 3) {
    const value = Number(prompt('Digite um numero:'));

    if (!isNaN(value)) {
        numbers.push(value);
    }
}

alert('O maior numero é ' + getBigger(numbers));