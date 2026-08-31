const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("Digite seu nome: ", (nome)=>{
    entrada.question("Digite sua idade",(idade)=>{
     entrada.question("Digite sua cidade",(cidade)=>{
        console.log("Olá " + nome + "!");
        console.log("Você tem ", idade, "e mora em "  ,cidade);
        entrada.close();
     })
    })
})
