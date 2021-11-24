/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
o no, pe. miFuncion(7) devolverá true. */

let esPrimo = numero => {
    if(isNaN(numero) || !Number.isInteger(numero) || Math.sign(numero) === -1) 
    return console.warn("Debe ingresar un número entero positivo")
    
    if (numero === 1 || numero === 2 ) return console.log(`El ${numero} es un numero primo`)
    if (numero % 2 === 0 ) return console.log(`El ${numero} NO es un numero primo`)
    
    for (let i = 3; i < Math.trunc(numero/2); i++) 
    if (numero % i === 0) return console.log(`El ${numero} NO es un numero primo`)
    
    return console.log(`El ${numero} es un numero primo`)
    
}

esPrimo(5)

/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const esPar = numero => 
    (!numero || isNaN(numero)) 
    ? console.warn("Debe ingresar algún numero")
    : (numero % 2 === 0) 
        ?console.log(`El numero ${numero} es par`)
        : console.log(`El numero ${numero} No es par`)

esPar(20)

/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
*/

const celciusAFFahrenheit = (grados, unidad) =>{
     if(!grados && grados != 0) return console.warn("Debe ingresar algún numero")
     if(!unidad) return console.warn("Debe ingresar una unidad")
    unidad = unidad.toUpperCase()
    switch (unidad) {
        case 'C':
            console.log(`${grados}°C = ${(grados * (9/5) +32).toFixed(3)}°F`)
	        break;
        case 'F':
            console.log(`${grados}°F = ${((grados - 32)/(9/5)).toFixed(3)}°C`)
            break;
        default:
            console.warn("Debe ingresar una unidad valida");
            break;
    }}

celciusAFFahrenheit(0 ,'c')
