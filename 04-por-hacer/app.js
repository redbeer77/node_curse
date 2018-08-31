const argv = require('./config/yargs').argv
//console.log(argv)
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0]

switch(comando){
    case 'crear':
        //console.log('crear')
        let tarea = porHacer.crearTarea(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        porHacer.listarTareas();
        break;
    case 'actualizar':

       let actualizado =  porHacer.actualizarTarea(argv.descripcion,argv.completado)
      
       if (actualizado ){
            console.log('Se ha actualizado correctamente')
       }else{
            console.log('NO ha actualizado correctamente')
       }
       break;
    case 'borrar':
       let borrada = porHacer.borrarTarea(argv.descripcion)
       if (borrada ){
        console.log('Se ha borrado correctamente')
   }else{
        console.log('NO ha borrado correctamente')
   }
       
        break;
    default:
        console.log('comando no reconocido')
}