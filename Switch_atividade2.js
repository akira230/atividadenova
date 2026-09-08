const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("1 Pequena")
console.log("2 Média")
console.log("3 Grande")

entrada.question("Escolha o tamanho da pizza: ", (opcao)=>{
    opcao = Number(opcao)

    switch(opcao){
        case 1:
            console.log("PAGAMENTO SELECIONADO, PEQUENA")
            break;

        case 2:
              console.log("PAGAMENTO SELECIONADO,MÉDIA")
              break;
        case 3:
              console.log("PAGAMENTO SELECIONADO, GRANDE")
              break;
              default:

              console.log("opção invalida") 
    }
})
