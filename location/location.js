const axios = require('axios');

const getLocationLatLng = async (dir) => {
    const encodeUrl = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '51207db7c2msh12fe022bbd94faap1ea9a7jsnbc31aa0fc8b7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontro resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lng
    }
}

module.exports = {
    getLocationLatLng
}

