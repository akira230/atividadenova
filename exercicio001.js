const readline = require("readline");
const entrada = readline.createInterface({
     
    input: process.stdin,
    output: process.stdout 
})
entrada.question("Digite o valor da sua:",(Compra)=>{
    Compra = Number(Compra)


if (Compra >= 100) {
    console.log("Você ganhou frete  grátis!");
} else {
    console.log("O frete será cobrado.");
}
});
