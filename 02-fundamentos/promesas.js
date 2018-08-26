let empleados =[
    {id:1,nombre:'Fernando'},
    {id:2,nombre:'Elisa'},
    {id:3,nombre:'Francesc'}
]

let salarios = [
    {id:1,salario:2000},
    {id:2,salario:1000}
]

let getEmpleado = (id) =>{

    return new Promise((resolve,reject)=>{
        let empleadoDB = empleados.find( empleado => empleado.id === id)
    
        if (!empleadoDB){
            reject(`No existe empleado con ID:${id}`)
        }else{
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) =>{
    return new Promise((
        resolve,reject) =>{
            let salarioDB = salarios.find( salario => salario.id === empleado.id)
            if (!salarioDB){
                reject(`No se encontro salario para el usuario ${empleado.nombre}`)
            }else{
                resolve({
                    nombre:empleado.nombre,
                    salario:salarioDB.salario,
                    id:salarioDB.id
                })
            }

        }
    );

}

// getEmpleado(2).then(
//     empleado =>{
//         //console.log('EmpleadoBDD',empleado)
//         getSalario(empleado).then(
//             salario=> console.log(salario),
//             err=> console.log(err) )
//     },
//     err =>{
//         console.log(err)
//     }
// )

getEmpleado(3).then( empleado =>{

    return getSalario(empleado);

    })
    .then(resp =>{
        console.log(resp)

    })
    .catch( err =>{
        console.log(err)
    })

