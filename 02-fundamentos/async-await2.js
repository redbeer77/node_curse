let empleados =[
    {id:1,nombre:'Fernando'},
    {id:2,nombre:'Elisa'},
    {id:3,nombre:'Francesc'}
]

let salarios = [
    {id:1,salario:2000},
    {id:2,salario:1000}
]

let getEmpleado = async(id) =>{

  
        let empleadoDB = empleados.find( empleado => empleado.id === id)
    
        if (!empleadoDB){
           throw new Error (`No existe empleado con ID:${id}`)
        }else{
            return empleadoDB;
        }
}

let getSalario =  async (empleado) =>{

            let salarioDB = salarios.find( salario => salario.id === empleado.id)
            if (!salarioDB){
                throw new Error(`No se encontro salario para el usuario ${empleado.nombre}`)
            }else{
                return{ nombre:empleado.nombre, salario:salarioDB.salario,id:salarioDB.id}
            }

}

let getInformacion =async (id) =>{

    let empleado = await getEmpleado(id)
    let respuesta = await getSalario(empleado)
    //console.log(respuesta)
    //throw new Error('Error al obtener mierdas')

    return `${respuesta.nombre} tiene un salario de ${respuesta.salario}`
}

// getInformacion(3).then(
//     resp=>{
//         console.log(resp)
//     },
//     err =>{
//         console.log(err)
//     }
// );
getInformacion(1)
    .then( resp=>  console.log(resp))
    .catch(err=> console.log(err))