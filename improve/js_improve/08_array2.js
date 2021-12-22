
/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá 
los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]
    devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    */
const ascDesc = (arr = undefined)=>{
       
       if(!arr) return console.warn('No se han ingresado valores')
       if(!(arr instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado NO es un arreglo de numeros`)
       if (arr.length === 0) return console.error("El arreglo esta vacío ")
       for (n of arr) if (typeof n !== 'number')return console.warn('Debe ingresar un número valido')
       
       return console.log({
           arr,
           asc : arr.filter((value, index, self) => self.indexOf(value) === index ).map(elem => elem).sort((a, b) => (a - b)),
           desc : arr.filter((value, index, self) => self.indexOf(value) === index ).map(elem => elem).sort((a, b) => (b - a))
        })
}

let arr = [ 4, 1, 4, 1, 5, 200 ]
ascDesc(arr)
        
/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
       
const duplicados = (arr = undefined)=>{
    if(!arr) return console.warn('No se han ingresado valores')
    if(!(arr instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado NO es un arreglo de numeros`)
    if (arr.length === 0) return console.error("El arreglo esta vacío ")
    if (arr.length === 1) return console.error("El arreglo debe tener más de un elemento")
    
    // return console.log({
    // arr,
    // sinDuplicados : arr.filter((value, index, self) => self.indexOf(value) === index )
    // })

    //Resolviendo con set
    return console.log({
    original : arr,
    sinDuplicados : [... new Set(arr)]
    })
    
}
let arr2 = ["x", 10, "x", 2, "10", 10, true, true]
duplicados(arr2)

/*
26) Programa una función que dado un arreglo de números obtenga el promedio, 
    pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (arr = undefined)=>{
    if(!arr) return console.warn('No se han ingresado valores')
    if(!(arr instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado NO es un arreglo de numeros`)
    if (arr.length === 0) return console.error("El arreglo esta vacío ")
    for (n of arr) if (typeof n !== 'number')return console.warn('Debe ingresar un número valido')


    return console.log(
        arr.reduce((total, num, index, arr) =>{
            total += num
            if(index === arr.length -1){
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`
            }else{
                return total
            }
        }
        )
    )
}

promedio([9,8,7,6,5,4,3,2,1,0])


