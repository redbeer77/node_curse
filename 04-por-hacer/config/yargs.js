
const descripcion = {
    demand:true,
    alias:'d',
    desc:'descripcción de la tarea'
}

const completado = {
    alias:'c',
    default:true,
    desc:'Completada o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear','Crea una nueva acción',{
        descripcion
    })
    .command('actualizar','Actualiza una acción',{
        descripcion,
        completado
    })
    .command('borrar','Eliminar tarea',{
        descripcion
    })
    .command('listar','Listar tareas',{
        completado
    })
    .help()
    .argv;

module.exports = {
    argv:argv
}