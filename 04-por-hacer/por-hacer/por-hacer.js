const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];


const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("Ha ocurrido un error al almacenar los datos",err)
      });
}
const cargarDb = () => {
    
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crearTarea = (descripcion) =>{
    
    cargarDb();

    let porHacer = {
        descripcion,
        completado:false
    }
    
    listadoPorHacer.push(porHacer);
    
    guardarDb();
    
    return porHacer;
}

const listarTareas = () =>{
    cargarDb();
    console.log('Tareas Pendientes'.red)

    listadoPorHacer.forEach(
        tarea =>{
            
            console.log('==================================='.green)
            console.log( `${tarea.descripcion}`.green,`Completado: ${tarea.completado}`)
            console.log('==================================='.green)
        } 
    )

}

const actualizarTarea=(descripcion,completado) =>{
    cargarDb();

    let index = listadoPorHacer.findIndex(
        tarea => {
            return tarea.descripcion === descripcion
        }
    )
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb()
        return true
    }else{
        return false
    }
}
const borrarTarea=(descripcion) =>{
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(
        tarea => {
            return tarea.descripcion !== descripcion
        });

    if (listadoPorHacer.length === nuevoListado.length){
        return false
    }else{
        listadoPorHacer = nuevoListado;
        guardarDb()
        return true;
    }
    // let index = listadoPorHacer.findIndex(
    //     tarea => {
    //         return tarea.descripcion === descripcion
    //     }
    // )
    // if(index >= 0){
    //     listadoPorHacer.splice(index,1)
    //     guardarDb()
    //     return true
    // }else{
    //     return false
    // }
}

module.exports = {
    crearTarea,
    listarTareas,
    actualizarTarea,
    borrarTarea
}