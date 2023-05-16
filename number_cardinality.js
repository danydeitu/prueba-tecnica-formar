/*La función number_cardinality(number)toma un número entero number y utiliza 
una serie de condicionales if-else para determinar su "cardinalidad". 
En cada condición, se verifica si el número cumple con estas propiedades:
Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
*/
function number_cardinality(number) {
    if (number % 10 === 0) {
      return "zero";
    } else if (number % 10 === 5) {
      return "five";
    } else if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  console.log(number_cardinality(200)); 
  console.log(number_cardinality(98));  
  console.log(number_cardinality(355)); 
  console.log(number_cardinality(199));  