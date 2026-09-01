const readline = require("readline");
const entrada = readline.createInterface({
     
    input: process.stdin,
    output: process.stdout 
})
entrada.question("Digite sua senha:",(senha)=>{
    senha = Number(senha)


if (senha === 1234) {
    console.log("Acesso permitido!");
} else {
    console.log("Senha incorreta!");
}
});
