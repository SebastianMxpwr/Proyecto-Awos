const fs = require('fs');

let crearArchivonumero = (extencion, secuencia) =>{
   return new Promise((resolve, reject)=>{

      let numeroal = '';
      
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
        

        if(secuencia=="Numero"){
          
           for(let i=1; i<=extencion; i++){
         numeroal= numeroal + " " + Math.floor((Math.random() * 99)*1);

           }
           
            fs.writeFile(`Archivos_Numeros/El archivo con ${extencion} numeros.txt`, String(numeroal), (err)=>{
            if(err) reject(err)
            else
            resolve(`El archivo con ${extencion} numeros.txt`);


          });
        }
       
  });
  
};

let imprimirnumeros=(extencion, secuencia) =>{
    return new Promise((resolve, reject)=>{
        
        if(!Number(extencion)){
            reject('Inserta una extencion valida... osea un numero pues');
            return;
            }
    
            if (secuencia != "Numero" && secuencia != "Letra"){
            reject('Porfavor de colocar una secuencia valida... pus que no les el menu??');
            return;
            }
    
            if(secuencia=="Numero"){
               for(let i=1; i<=extencion; i++){
                console.log(Math.floor((Math.random() * 99)+1)); 
               }
            }
    });
};

module.exports={
    crearArchivonumero, imprimirnumeros
};