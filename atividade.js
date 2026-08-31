const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("Digite seu nome: ", (nome)=>{
    console.log("Olá " +  nome);
entrada.close();
});
