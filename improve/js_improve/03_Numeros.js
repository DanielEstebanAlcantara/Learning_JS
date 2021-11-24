
       
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
const numeroAleatorio = (max, min) => 
    (!max || !min) 
    ? console.warn("No ha ingresado un rango válido") 
    : numAlea = Math.floor(Math.random()*(max-min)+min) 


console.log(numeroAleatorio(501, 600))

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un 
    sentido que en otro), pe. miFuncion(2002) devolverá true.
    */
   
   const capicua = (numero) => {
       
       if(!numero) return console.warn("No ha ingresado ningún numero")

       if (isNaN(numero)) return console.warn("Debe ingresar un número") 
       else numeroString = String(Math.trunc(Math.abs(numero)))
            NumeroInvertido = numeroString.split("").reverse().join("")
       
       return (numeroString === NumeroInvertido) 
       ?console.log(`El numero ${numeroString} es capicua` )
       :console.log(`El numero ${numeroString} no capicua`);
       
    }
    
    capicua ('-2002')


/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo 
     n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
    pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero) =>{
    if(numero === 0)  return 1

    if(!numero) return console.warn("No ha ingresado ningún numero")

    if (isNaN(numero) || !Number.isInteger(numero) || Math.sign(numero) === -1) 
        return console.warn("Debe ingresar un número entero positivo")
      

    let factorial = 1
    for (let i = 1; i <= numero; i++)  factorial *= i
    
    return factorial
    
}

let num = 5
let factorialRes = factorial (num)
console.log(`${num}! = ${factorialRes}`)
    