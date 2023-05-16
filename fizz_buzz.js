/*La función fizz_buzz recibe un número entero N como parámetro y crea 
una matriz result que almacenará la secuencia de salida.
se utiliza un bucle for para iterar desde 1 hasta N ,en cada
iteración, se verifican las condiciones para determinar si el número es múltiplo
 de 3, de 5 o de ambos y devuelve el resultado segun el numero ingresado ,es su secuencia. */

function fizz_buzz(N) {
    const result = [];

    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

console.log(fizz_buzz(4));
console.log(fizz_buzz(5));
console.log(fizz_buzz(16));
console.log(fizz_buzz(45));
