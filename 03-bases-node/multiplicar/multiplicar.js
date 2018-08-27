const fs = require('fs');



  let crearArchivo = (base) => {
      
    return new Promise((resolve, reject)=>{

        let data = '';

        if(!Number(base)){
            reject(`${base}: no es un número.`)
            return
        }

        for(let i=1; i <= 10; i++){
        
                data += (`${i} * ${base} = ${i*base}\n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject( err);
            resolve(`tabla-${base} se ha creado correctamente.`);
          });
    })
  }
  module.exports = {
      crearArchivo:crearArchivo
  }