const sum = (x, y) => x+y;
const sub = (x, y) => x-y;
const mult = (x, y) => x*y;
const div = (x, y) => x/y;
const mod = (x, y) => x%y;

let numero1 = parseInt(prompt('Digite um número'));
let numero2 = parseInt(prompt('Digite outro número'));

if (numero1 && numero2) {
	document.write(`
		<b>Operações com num1 = ${numero1} e num2 = ${numero2}:</b>
		<li>Soma (num1 + num2) -> ${sum(numero1, numero2)}</li>
		<li>Subtração (num1 - num2) -> ${sub(numero1, numero2)}</li>
		<li>Multiplicação (num1 * num2) -> ${mult(numero1, numero2)}</li>
		<li>Divisão inteira (num1 / num2) -> ${div(numero1, numero2).toFixed(2)}</li>
		<li>Resto da divisão (num1 % num2)-> ${mod(numero1, numero2)}</li>
	`);
}
