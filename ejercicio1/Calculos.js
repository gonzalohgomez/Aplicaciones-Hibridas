const suma = (num1, num2) => {
    return num1 + num2;
}

const division = (num1, num2) => {
    return num1 / num2;
}

const numeros = [2,8,9,7,5,6];
let mayorValor = 0;

const arrayMayor = (numeros) => {
    numeros.forEach(numero => {
        if (numero > mayorValor) {
          mayorValor = numero;
        }
    });
    return mayorValor;
}

console.log('La suma de 5 + 10 es ' + suma(5,10));
console.log('La Division de 20 y 2 es ' + division(20,2));
console.log('La Division de 20 y 0 es ' + division(20,0));
console.log('El mayor número del array es ' + arrayMayor(numeros));
