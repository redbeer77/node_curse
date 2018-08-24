let empleados =[
    {id:1,nombre:'Fernando'},
    {id:2,nombre:'Elisa'},
    {id:3,nombre:'Francesc'}
]

let salarios = [
    {id:1,salario:2000},
    {id:2,salario:1000}
]

let getEmpleado= (id,callback) =>{
    let empleadoDB = empleados.find( empleado => empleado.id === id)
    
    if (!empleadoDB){
        callback(`No existe empleado con ID:${id}`)
    }else{
        callback(null,empleadoDB)
      //  callback(null,empleadoDB)
    }
}

let getSalario = (empleado,callback)=>{
    let salarioDB = salarios.find( salario => salario.id === empleado.id)
    if (!salarioDB){
        callback(`No se encontro salario para el usuario ${empleado.nombre}`)
    }else{
        callback(null,{
            nombre:empleado.nombre,
            salario:salarioDB.salario,
            id:salarioDB.id
        })
    }
    
}

getEmpleado(3,(err,empleado)=>{
     if(err){
         return console.log(err)
     }

    // console.log(empleado)
    getSalario(empleado,(err,salario)=>{
        if(err){
            console.log(err)
        }else{
            console.log(salario)
        }
    })
    }
)