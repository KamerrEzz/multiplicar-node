const fs = require('fs');

var colors = require('colors'); // colores

let listarTabla = (base, limite = 10) => {

    console.log('================='.red)
    console.log(`== Tabla del ${base} ==`.green)
    console.log('================='.red)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`)
    }
}



crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Eso no es un numero ${base}`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base * i}\n`)
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del ${base}-al-${limite}.txt`);
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}