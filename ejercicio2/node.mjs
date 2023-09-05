import {esParImpar} from './node.cjs';

const numero = 2;

const resultado = esParImpar(numero);

// Imprimimos el resultado
console.log(`El número ${numero} es ${resultado}.`);


export function tablaMultiplicar(numero) {
    const tabla = [];
    for (let i = 1; i <= 12; i++) {
      tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabla;
  };
