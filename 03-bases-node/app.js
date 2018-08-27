const {crearArchivo} = require('./multiplicar/multiplicar')


let base = process.argv[2];

base = base.split('=')[1]
crearArchivo(base)
  .then(
      archivo => console.log(`Archivo creado: ${ archivo}`)
  )
  .catch(
      err => console.log(err)
  )