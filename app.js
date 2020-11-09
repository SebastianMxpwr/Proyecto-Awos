const argv = require('yargs')
  .command('imprimirn', 'imprime en la consola los numeros/letras generados',{
    extencion:{
        demand:true,
        alias: 'e',
        default: 5
    },
    secuencia: {
        alias: 's'
        
    }  
  })
  .command('crearn', 'Crea un archivo con los numeros/letras generados',{
    extencion:{
        demand:true,
        alias: 'e',
        default: 5
    },
    secuencia: {
        alias: 's',
        
    }  
  })
  .command('imprimirl', 'imprime en la consola los numeros/letras generados',{
    extencion:{
        demand:true,
        alias: 'e',
        default: 5
    },
    secuencia: {
        alias: 's'
        
    },
    mayus:{
      alias:'m',
      default: false
    }
  })
  .command('crearl', 'Crea un archivo con los numeros/letras generados',{
    extencion:{
        demand:true,
        alias: 'e',
        default: 5
    },
    secuencia: {
        alias: 's',
        
    },
    mayus:{
      alias:'m',
      default: false
    } 
  })
  .help()
  .argv;

const { alias }=require('yargs');
const numerosal = require('./Generacion/Gen_numeros');
const letrasal = require('./Generacion/Gen_letras')

let comando = argv._[0];

let extencion = argv.extencion;
let secuencia = argv.secuencia;

switch(comando){

    case 'crearn':
        numerosal
        .crearArchivonumero(extencion,secuencia)
        .then(archivo => console.log(`El archivo ${archivo} se creo con exito` ))
        .catch(error => console.log(`Ocurrio un error ${error}`));
    break;

    case 'imprimirn':
        numerosal
        .imprimirnumeros(extencion,secuencia)
        .then()
        .catch(error => console.log(`Ocurrio un error ${error}` ));
    
    case 'crearl':
        letrasal
        .crearArchiletra(extencion,secuencia)
        .then(archivo => console.log(`El archivo ${archivo} se creo con exito` ))
        .catch(error => console.log(`Ocurrio un error ${error}`));
    break;

    case 'imprimirl':
        letrasal
        .imprimirletras(extencion,secuencia)
        .then()
        .catch(error => console.log(`Ocurrio un error ${error}` ));
        
        
}