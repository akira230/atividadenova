const readline = require("readline");
const entrada = readline.createInterface({
     
    input: process.stdin,
    output: process.stdout

})
    //modulo de entrada de dados 

    entrada.question("Digite o nome do jogador: ", (nome)=>{
     entrada.question("Digite os pontos e conquistados: ", (pontos)=>{
    entrada.question("Digite os pontos bônus: ", (bônus)=>{
        pontos = Number(pontos);
        bônus = Number(bônus);

        const pontuaçaofinal = pontos +bônus;

        console.log("jogador: ", nome);
        console.log("Pontuação final: ", pontuaçaofinal );
        entrada.close();


})
})
})
