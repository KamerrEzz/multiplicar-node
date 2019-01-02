const opts = {
    base: {
        demand: true, //para que sea obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la cosola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo de tabla del multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}