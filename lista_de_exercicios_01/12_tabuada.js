const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número para ver a tabuada: "));

console.log("Escolha a operação:");
console.log("1 - Multiplicação");
console.log("2 - Adição");
console.log("3 - Subtração");
console.log("4 - Divisão");

let opcao = prompt("Digite o número da operação desejada: ");

switch (opcao) {
  case "1":
    console.log(`\nTabuada de multiplicação do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    break;

  case "2":
    console.log(`\nTabuada de adição do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} + ${i} = ${numero + i}`);
    }
    break;

  case "3":
    console.log(`\nTabuada de subtração do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} - ${i} = ${numero - i}`);
    }
    break;

  case "4":
    console.log(`\nTabuada de divisão do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} ÷ ${i} = ${(numero / i).toFixed(2)}`);
    }
    break;

  default:
    console.log("Opção inválida.");
}
