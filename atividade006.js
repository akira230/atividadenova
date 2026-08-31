const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entrada.question("Digiti o nome do jogador: ", (nome)=>{

    entrada.question("Digite os pontos da primeira partida: ", (pontos1)=>{
    entrada.question("Digite o pontos da segunda partida: ", (pontos2)=>{
        pontos1 = Number(pontos1)
        pontos2 = Number(pontos2)

        const total = pontos1 + pontos2

        console.log("jogador ",nome)
        console.log("pontuação total ", total)

        console.log("pontuação é maior ou igual a 100?", total>=100)
        console.log("As duas partidas tiveram pelo menos 30 pontos ", pontos1 >= 30 && pontos2 >= 30)

        entrada.close()


})
})
})
