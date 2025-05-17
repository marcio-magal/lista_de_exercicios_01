const prompt = require("prompt-sync")();

let A = parseFloat(prompt("Lado A: "));
let B = parseFloat(prompt("Lado B: "));
let C = parseFloat(prompt("Lado C: "));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo.");
}
