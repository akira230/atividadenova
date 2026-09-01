const readline = require("readline");


const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite sua nota: ", (nota)=>{
     nota = Number(nota)
     if(nota >=9){
         console.log("Exelente")
     }else if(nota >= 7){
         console.log("Bom")
     }else if(nota >=5){
        console.log("regular")
     }else{
        console.log("insulficiente")


     }
     
})
