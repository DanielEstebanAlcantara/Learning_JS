
/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const cuadrado = (arreglo = undefined) => {
    if(!arreglo) return console.warn('No se han ingresado valores')
    if(!(arreglo instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado NO es un arreglo de numeros`)
    if (arreglo.length === 0) return console.error("El arreglo esta vacío ")
    
    let arregloCuadrado = [],  
    i = 0
    
    // Se pudo resolver con:
        //const newArr = arreglo.map(el => el * el)
    
    for (numero of arreglo){
        if (typeof numero !== 'number')return console.warn('Debe ingresar un número valido')
        else
            arregloCuadrado[i] = Math.pow(numero, 2)
        i++
    }
    return console.log(arregloCuadrado);
}

cuadrado([1, 2, 5, 9])

/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const altoBajo = (arreglo = undefined)=>{
    if(!arreglo) return console.warn('No se han ingresado valores')
    if(!(arreglo instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado NO es un arreglo de numeros`)
    if (arreglo.length === 0) return console.error("El arreglo esta vacío ")
    for (n of arreglo) if (typeof n !== 'number')return console.warn('Debe ingresar un número valido')
    
    //Se pudo resolver con:}
    // Math.max(...arreglo)
    // Math.min(...arreglo)

    arreglo = arreglo.sort()
    
    let arregloAltoBajo = []
    arregloAltoBajo[0] = arreglo[arreglo.length - 1]
    arregloAltoBajo[1] = arreglo[0]
    console.log(arregloAltoBajo);
}


let A = [1, 4, 5, 99, -60]
altoBajo(A)


/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena 
    los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
    devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const paresImpares = ( arreglo = undefined) =>{
    if(!arreglo) return console.warn('No se han ingresado valores')
    if(!(arreglo instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado NO es un arreglo de numeros`)
    if (arreglo.length === 0) return console.error("El arreglo esta vacío ")

    let par=[],
        impar = [],
        i = 0,
        j = 0
    
    for (n of arreglo){
         if (typeof n !== 'number')return console.warn('Debe ingresar un número valido')

         if((n % 2) === 0){
             par[i] = n
            i++}
         else {impar[j] = n
        j++}
    }
    console.log(`pares: ${par} , impares: ${impar}`)

    //Se pudo hacer:
    /*
    return console.log({
     pares: arreglo.filter(num => num%2 === 0),
     impares : arreglo.filter(num => num%2 === 1)
    })
    
    */
}

paresImpares([1,2,3,4,5,6,7,8,9,0])