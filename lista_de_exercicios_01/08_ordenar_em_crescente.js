const prompt = require("prompt-sync")();

let v1 = parseInt(prompt("Valor 1: "));
let v2 = parseInt(prompt("Valor 2: "));

if (v1 < v2) {
  console.log(v1, v2);
} else {
  console.log(v2, v1);
}
