const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => {
        console.log('TODO BIEN!')
        console.log(msg.rainbow)
    })
    .catch(err => {
        console.log('TODO MAL!')
        console.log(err)
    });