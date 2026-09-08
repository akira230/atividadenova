const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("1 Cartão")
console.log("2 Pix")
console.log("3 Dinheiro")

entrada.question("Digite a forma de pagamento: ", (opcao)=>{
    opcao = Number(opcao)

    switch(opcao){
        case 1:
            console.log("PAGAMENTO SELECIONADO, CARTÃO")
            break;

        case 2:
              console.log("PAGAMENTO SELECIONADO, PIX")
              break;
        case 3:
              console.log("PAGAMENTO SELECIONADO, DINHEIRO")
              break;
              default:

              console.log("opção invalida") 
    }
})
