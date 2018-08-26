/*
Async Await
*/

// //funcion de ejemplo sin async ni away
// let getNombre=()=>'Fernando';

// console.log(getNombre());

// //funcion de ejemplo  async 

// let getNombre= async()=>{
//     //throw new Error('No existe un nombre para ese usuario');
//     return'Fernando'  
// };
let getNombre = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Fernando')
        }, 3000);

    })
}


let saludo = async() =>{

    let nombre = await getNombre();

    return `Hola ${nombre}`
}

// console.log(getNombre());

saludo().then(
    mensaje => console.log(mensaje)
)
.catch(
    e=> console.log(e)
)
