const argv = require('./config/yargs').argv;

const location = require('./location/location');
const clima = require('./clima/clima');

// location.getLocationLatLng(argv.direccion)
//     .then(console.log)

// console.log(argv.direccion);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log);

const getInfo = async (direccion) => {

    try {
        const respDir = await location.getLocationLatLng(direccion);
        const resptemp = await clima.getClima(respDir.lat, respDir.lng);
        return `El clima de ${direccion} es de ${resptemp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
