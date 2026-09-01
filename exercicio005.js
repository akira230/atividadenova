const readline = require("readline");


const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite a temperatura: ", (temperatura)=>{
    temperatura = Number(temperatura)
     if(temperatura <= 15){
         console.log("Muito frio")
     }else if(temperatura >= 15 && temperatura<=24 ){
         console.log("Frio")
     }else if(temperatura >=25 && temperatura <= 30){
        console.log("Agradável")
     }else if (temperatura >=30 ){
        console.log("Muito quente")

        
     }
})
