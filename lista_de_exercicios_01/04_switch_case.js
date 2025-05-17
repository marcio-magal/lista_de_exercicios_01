const prompt = require("prompt-sync")();

console.log("1 - Ver horário");
console.log("2 - Dizer olá");
console.log("3 - Sair");

let opcao = prompt("Escolha uma opção: ");

switch (opcao) {
  case "1":
    console.log("Agora são " + new Date().toLocaleTimeString());
    break;
  case "2":
    console.log("Olá, usuário!");
    break;
  case "3":
    console.log("Saindo...");
    break;
  default:
    console.log("Opção inválida.");
}
