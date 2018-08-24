// setTimeout(
//      ()=>{console.log('holaMundo'); },3000
//     );

let getUsuarioById= (id,callback) =>{
    let usuario = {
        nombre:'Alberto',
        id
    }

    if (id === 20){
        callback(`Usuario con id: ${id}, no existe en la BD.`,null)
    } else {
    callback(null,usuario);
    }
};

getUsuarioById(10,(err,usuario)=>{
    if(err){
        return console.log(err)
    }
    console.log('UsuarioBBDD',usuario)
});