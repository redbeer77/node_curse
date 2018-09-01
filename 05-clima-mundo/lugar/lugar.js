const fs = require('fs')
const axios = require('axios')

const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let obj = await axios.get(`https://nominatim.openstreetmap.org/search/street/${encodeUrl}?format=json&limit=1&polygon=1&addressdetails=1`)
    
    if (obj.data[0]){
        let lat = obj.data[0].lat
        let lon = obj.data[0].lon
        let name = obj.data[0].display_name
    
        fs.writeFile(`bd/data.json`, JSON.stringify(obj.data[0]), (err) => {
            if (err) throw new Error("Ha ocurrido un error al almacenar los datos",err)
        });
    
        return { name,lat,lon }
        
    }

    throw new Error(`no hay resultados para ${direccion}`)
}
module.exports = {
    getLugarLatLng
}