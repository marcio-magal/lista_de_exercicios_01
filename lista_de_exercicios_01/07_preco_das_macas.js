const prompt = require("prompt-sync")();

let qtd = parseInt(prompt("Quantas maçãs? "));
let preco = qtd < 12 ? 0.30 : 0.25;
let total = qtd * preco;

console.log("Total: R$ " + total.toFixed(2));
