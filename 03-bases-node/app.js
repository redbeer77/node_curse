//const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo} = require('./multiplicar/multiplicar')


let parametro = process.argv[2];
let base = parametro.split('=')[1]

  crearArchivo(base)
  .then(
      archivo => console.log(`archivo creado ${archivo}`)
  )
  .catch(
      e=> console.log(e)
  )