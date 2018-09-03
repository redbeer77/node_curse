const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

//console.log(argv.direccion)

let getInfo = async(direccion) =>{

    try{
        let coors = await lugar.getLugarLatLng(direccion)
        let temp = await clima.getClima(coors.lat,coors.lon)
        return(`El clima en ${ coors.name} es de ${temp} ºC`)
    }
    catch(e){
        return `no se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(err=> console.log(err))


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => clima.getClima(resp.lat,resp.lon))
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))
