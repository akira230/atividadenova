const readline = require("readline");
const entrada = readline.createInterface({
     
    input: process.stdin,
    output: process.stdout 
})
entrada.question("Digite sua idade: ", (idade)=>{
    idade = Number (idade);
    console.log( idade + 666);
    entrada.close();
})
