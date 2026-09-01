const readline = require("readline");


const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite o nome do cliente:", (nome)=>{
    entrada.question("digite o saldo disponivel:", (saldo)=>{
        entrada.question("digite seu saque:", (saque)=>{
            saldo = Number (saldo)
            saque = Number (saque)
            if(saque > saldo){
                console.log("saldo insuficiente")
            }else{ 
                const novosaldo = saldo - saque 
                console.log("saque concluido")
                console.log("saldo depois do saque: R$ ", novosaldo)
            }
        })
    })
})
