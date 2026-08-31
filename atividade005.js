const readline = require("readline");
const entrada = readline.createInterface({
     
    input: process.stdin,
    output: process.stdout

})
    //modulo de entrada de dados 

    entrada.question("Digite o  seu nome: ", (nome)=>{
     entrada.question("Digite quanto você ja tem guardado: ", (guardado)=>{
    entrada.question("Digite quanto pretende guardar: ", (guardar)=>{
        guardado = Number(guardado);
        guardar = Number(guardar);

        const valorfinal = guardado + guardar;

        console.log("nome: ", nome);
        console.log("valor final: ", valorfinal );
        entrada.close();


})
})
})
