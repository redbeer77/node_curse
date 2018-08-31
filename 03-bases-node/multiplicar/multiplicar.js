//requireds
const fs = require('fs');



//module.exports.crearArchivo = (base) =>{
crearArchivo = (base) =>{



    return new Promise((resolve,reject)=>{

        let data = '';
    
        if(!Number(base)){
            reject(`base: ${base} no es un número`);
            return;
        }
    
        for(let i = 1;i <=10; i++){
            data+=(`${base} * ${i} = ${base * i}\n`)
         }
         
         fs.writeFile(`tablas/multiplicacion-${base}.txt`, data, (err) => {
             if (err) { 
                reject(err)
            }else{
             resolve(`multiplicacion: ${base}`);
            }
           });
         
    });
}

 module.exports ={
     crearArchivo:crearArchivo
 }




