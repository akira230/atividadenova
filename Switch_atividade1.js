const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("1 Manhã")
console.log("2 Tarde")
console.log("3 Noite")

entrada.question("Escolha o turno : ", (opcao)=>{
    opcao = Number(opcao)

    switch(opcao){
        case 1:
            console.log("PAGAMENTO SELECIONADO, MANHÃ")
            break;

        case 2:
              console.log("PAGAMENTO SELECIONADO,TARDE")
              break;
        case 3:
              console.log("PAGAMENTO SELECIONADO, NOITE")
              break;
              default:

              console.log("opção invalida") 
    }
})
