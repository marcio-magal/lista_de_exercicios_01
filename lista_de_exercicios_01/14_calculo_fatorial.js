const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite um número: "));

let fatorial = 1;
for (let i = 1; i <= n; i++) {
  fatorial *= i;
}
console.log(`Fatorial de ${n} é ${fatorial}`);
