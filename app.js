const argv = require('./config/yargs').argv; // ponemos el .argv para llamar lo unico que necesitamos y asignarlo a esta constante

var colors = require('colors'); // colores

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]; // hacer referencias a los comandos

switch(comando) {

    case 'listar': //comando listar
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite) //anteriormente la base ya no esta en un variable, asi que hay que aguntarlo con el argv
        .then(archivo => console.log(`Archivo Creado: ${ archivo.green }`))
        .catch(e => console.log(e))
    break;

    default:
    console.log('Comando no reconocido')
}

// let base = 'abse';

// let argv2 = process.argv;

console.log(argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1]
