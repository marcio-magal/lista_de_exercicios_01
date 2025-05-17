const prompt = require("prompt-sync")();

let soma = 0;
let count = 0;
let num;

do {
  num = parseFloat(prompt("Digite um número (0 para sair): "));
  if (num !== 0) {
    soma += num;
    count++;
  }
} while (num !== 0);

if (count > 0) {
  console.log("Média:", soma / count);
} else {
  console.log("Nenhum número válido foi digitado.");
}
