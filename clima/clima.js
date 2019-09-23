const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=3cafe3387993c9e416825bf1bbcd5941&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}