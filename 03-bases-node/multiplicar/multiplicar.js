const fs = require('fs');



let listarTabla=(base, limite)=>{
    for (let i=1;i<=limite;i++){
        console.log(`${base} * ${i} = ${base * i}`)
    }
}


  let crearArchivo = (base,limite) => {
      
    return new Promise((resolve, reject)=>{

        let data = '';

        if(!Number(base)){
            reject(`${base}: no es un número.`)
            return
        }

        for(let i=1; i <= limite; i++){
        
                data += (`${i} * ${base} = ${i*base}\n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject( err);
            resolve(`tabla-${base} se ha creado correctamente.`);
          });
    })
  }
  module.exports = {
      crearArchivo:crearArchivo,
      listarTabla:listarTabla
  }