const apikey = require("./apikey")
const axios = require('axios')



let showApiKey = () => {
    console.log(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apikey.apikey}`)
}

const getClima = async (lat,lon) => {

    let encodeUrl = encodeURI(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apikey.apikey}`);
    let resp = await axios.get(encodeUrl)
    
    if (resp){
         return resp.data.main.temp;
    }

    throw new Error(`no hay resultados del clima`)
}

module.exports = {
   // showApiKey,
    getClima
}
