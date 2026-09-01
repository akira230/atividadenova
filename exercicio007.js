const readline = require("readline");


const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("escolha uma opição:")
console.log("1 para Refrigerante")
console.log("2 para suco")
     entrada.question("escolha uma opição", (opicao)=>{
        if(opicao == 1){
            console.log("você escolheu Refrigerante")
        }else if (opicao == 2){
            console.log(" você escolheu suco")
        }
     })
