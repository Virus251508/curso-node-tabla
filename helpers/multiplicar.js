const fs = require('fs');
require('colors');

// const crearArchivo = (base = 5) => {

//     let multi;
//     let salida = '';
//     let x = 1;

//     console.log('==================');
//     console.log('Tabla del', base);
//     console.log('==================');


//     for (x = 1; x <= 10; x++) {
//         multi = base * x;
//         salida += `${base} x ${x} = ${multi}\n`
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     console.log(`tabla-${base}.txt creado!`);

// }


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let multi;
        let salida = '';
        let x = 1;

        for (x = 1; x <= hasta; x++) {
            multi = base * x;
            salida += `${base} x ${x} = ${multi}\n`
        }

        if (listar) {
            console.log('=================='.green);
            console.log('   Tabla del', base);
            console.log('=================='.green);

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado!`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}