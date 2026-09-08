const readline = require("readline");
const entrada = readline.createInterface({
     
    input: process.stdin,
    output: process.stdout
    });

    entrada.question("Digite sua Nota: ", (nota)=>{
    nota = Number (nota);
     nota >= 6 ? console.log("Maior") : 
     console.log("Menor") 
})
