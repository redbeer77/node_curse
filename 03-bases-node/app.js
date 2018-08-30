

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv


// console.log(argv)

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(
            archivo => console.log(`Archivo creado: ${ archivo}`)
        )
        .catch(
            err => console.log(err)
        )
    break;
    default:
    console.log('No existe el comando')
}

// base = base.split('=')[1]
// crearArchivo(base)
//   .then(
//       archivo => console.log(`Archivo creado: ${ archivo}`)
//   )
//   .catch(
//       err => console.log(err)
//   )