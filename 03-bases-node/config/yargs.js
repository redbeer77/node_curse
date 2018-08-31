
const opts = {
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }

}

const argv = require('yargs')
    .command('Listar','Imprime en consola la tabla de multiplicar', opts)
    .command('Crear','Crea un fichero en el directorio tablas',opts )
    .help()
    .argv;

    module.exports={
        argv:argv
    }
