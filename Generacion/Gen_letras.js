const fs = require('fs');

let crearArchiletra = (extencion, secuencia,mayus) =>{
   return new Promise((resolve, reject)=>{

      let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      let letraal="";

       if(!Number(extencion)){
        reject('Inserta una extencion valida... osea un numero pues');
        return;
        }

        if(extencion <= 0){
          reject('pus que me crees buey... pon un numero positivo! ¡ORALE!');
          return;
          }

        if (secuencia != "Numero" && secuencia != "Letra"){
        reject('Porfavor de colocar una secuencia valida... pus que no les el menu??');
        return;
        }

        if(secuencia=="Letra"){
           for(let i=1; i<=extencion; i++){
         letraal= letraal + " " + abecedario[Math.round(Math.random()*26)];

           }
           if (mayus = true){
             letraal= letraal.toLocaleUpperCase();
           }
           fs.writeFile(`Archivos_Letras/El archivo con ${extencion} letras.txt`, String(letraal), (err)=>{
            if(err) reject(err)
            else
            resolve(`El archivo con ${extencion} letra.txt`);
          });
        }
       
  });
};

let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let letraal="";
let imprimirletras=(extencion, secuencia, mayus) =>{
  return new Promise((resolve, reject)=>{
      
      if(!Number(extencion)){
          reject('Inserta una extencion valida... osea un numero pues');
          return;
          }
  
          if (secuencia != "Numero" && secuencia != "Letra"){
          reject('Porfavor de colocar una secuencia valida... pus que no les el menu??');
          return;
          }
  
          if(secuencia=="Letra"){
             for(let i=1; i<=extencion; i++){
              letraal= letraal+console.log(abecedario[Math.round(Math.random()*26)]); 
             }

             if (mayus = true){
              letraal= letraal.toLocaleUpperCase();
            }
             
          }
  });
};

module.exports={
  crearArchiletra, imprimirletras
};
