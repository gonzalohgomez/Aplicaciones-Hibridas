function esParImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'impar';
}

module.exports = {esParImpar};

// const multiplicacion = require("./node.mjs");

import("./node.mjs").then(({tablaMultiplicar}) => {
    console.log(tablaMultiplicar(2));
})