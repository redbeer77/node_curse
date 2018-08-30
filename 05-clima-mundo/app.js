
const axios = require('axios')
const argv = require('./config/yargs').argv;
const fs = require('fs')

console.log(argv.direccion)

let encodeUrl = encodeURI(argv.direccion);

axios.get(`https://nominatim.openstreetmap.org/search/street/${encodeUrl}?format=json&limit=1&polygon=1&addressdetails=1`)
    .then(
        obj =>{
            let data = JSON.stringify(obj.data[0])
            //console.log(data)
            let latitud = obj.data[0].lat
            let longintud = obj.data[0].lon
            let name = obj.data[0].display_name
            console.log(latitud,longintud,name)

            fs.writeFile(`data.json`, data, (err) => {
                if (err) throw new Error("Ha ocurrido un error al almacenar los datos",err)
            });
        }
    )
    .catch(
        err=> console.log(err)
    )