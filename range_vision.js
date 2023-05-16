/*la funcion range_vision(number) toma un número entero number e
Inicializa una variable minVisionValuecon un valor muy grande (MAX_SAFE_INTEGER),
 que se actualiza con el valor mínimo de visión encontrado.
Convierte el número en una matriz de dígitos usandoArray.from(String(number),Number) .
Luego, se itera sobre cada dígito del número usando un bucle for .
En cada iteración, se calcula el rango de visión del dígito y devuelve 
un valor booleano dependiendo la condicion que cumpla el numero ingresado */
 
function range_vision(number) {
    let minVisionValue = Number.MAX_SAFE_INTEGER;
 
    // Convierte el número en un arreglo de dígitos
    const digits = Array.from(String(number), Number);
    
    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      
      // Calcula el rango de visión del dígito
      const leftRange = digits.slice(0, i);
      const rightRange = digits.slice(i + 1);
      const visionRange = leftRange.concat(rightRange);
      
      // Calcula el valor de visión del dígito
      const visionValue = visionRange.reduce((sum, curr) => sum + curr, 0);
      
      // Actualiza el valor mínimo de visión
      if (visionValue < minVisionValue) {
        minVisionValue = visionValue;
      }
      
      // Si encontramos un dígito 1 con el valor mínimo de visión, retorna true
      if (digit === 1 && visionValue === minVisionValue) {
        return true;
      }
    }
    
    // Si no se encontró ningún dígito 1 con el valor mínimo de visión, retorna false
    return false;
  }
  
  console.log(range_vision(10523)); 
  /*
  Para este número 10523:

Dígito: 1
Puede ver a la izquierda: -
Puede ver a la derecha: 052
Valor de la visión: 0 + 5 + 2 = 6

Dígito: 0
Se puede ver a la izquierda: 1
Se puede ver a la derecha: 523
Valor de la visión: 1 + 5 + 2 + 3 = 11

Dígito: 5
Puede ver a la izquierda: 10
Puede ver a la derecha: 23
Valor de la visión: 1 + 0 + 2 + 3 = 6

Dígito: 2
Se puede ver a la izquierda: 5
Se puede ver a la derecha: 3
Valor de la visión: 5 + 3 = 8

Dígito: 3
Puede ver a la izquierda: 1052
Puede ver a la derecha: -
valor de la visión: 1 + 0 + 5 + 2 = 8

¿Hay un dígito 1 en el número entero para el 
cual el valor de visión es mínimo?

Sí, el 6 es el valor mínimo de visión, tanto 
para los dígitos 1 y 5. 
Eso satisface los criterios, por lo que la función devuelve true.
  */

  