/*  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const contarVocalesConsonantes = (cadena = '') =>{
    // let cadena = 'Hola Mundo'
    // console.log(cadena.match(regExpVocales));
    if(!cadena) return console.warn('No ingresaste una cadena de texto')
    if(typeof cadena !== 'string') return console.warn(`El valor "${cadena}" ingresado NO es una cadena de texto`)

    cadena = cadena.toLowerCase()
    
    let vocales = 0,
        consonantes = 0
    for(let letra of cadena){
        if(/[aeiouáéíóúüï]/.test(letra)) vocales++
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
   }
   return console.info({
       cadena,
       vocales,
       consonantes
   })
}

// contarVocalesConsonantes()
// contarVocalesConsonantes(3)
contarVocalesConsonantes("Hola esto es una prueba niño")

/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validarNombre = (nombre ='')=>{
    if(!nombre) return console.warn('No ingresaste una cadena de texto')
    if(typeof nombre !== 'string') return console.warn(`El valor "${nombre}" ingresado NO es una cadena de texto`)

    let expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüÏï\s]+$/g.test(nombre)

    return(expRegNombre)
        ?console.info(`1"${nombre}" es un nombre valido`)
        :console.info(`2"${nombre}" NO es un nombre valido`)
}

// validarNombre()
// validarNombre(12)
// validarNombre("Daniel 12")
validarNombre("Daniel Esteban Alcántara Paleo")


/*
20) Programa una función que valide que un texto sea un email válido, 
    pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

const validarEmail = (email = '')=>{
    // const expRegEmail = /[A-Za-z0-9.]/g
    // let prueba = 'ejemplo.01@gmail.com'
    // console.log(prueba.match(expRegEmail).length===prueba.length);
    if(!email) return console.warn('No ingresaste un email')
    if(typeof email !== 'string') return console.warn(`El valor "${email}" ingresado NO es una cadena de texto`)

    let expRegEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return(expRegEmail)
        ?console.info(`1"${email}" es un email valido`)
        :console.info(`2"${email}" NO es un email valido`)
}
    
validarEmail('esteban.alcantara.paleo@gmail.com')

/* Fusion 19-20 */

const validarPatron = (cadena = '', patron = undefined)=>{
    if(!cadena) return console.warn('No ingresaste una cadena de texto')
    if(typeof cadena !== 'string') return console.warn(`El cadena "${cadena}" ingresado NO es una cadena de texto`)
    if(patron === undefined) return console.warn('No ingresaste un patron a evaluar')
    if(!(patron instanceof RegExp)) return console.warn(`El cadena "${patron}" ingresado NO es una expresion regular`)

    let expRegCadena = patron.test(cadena)

    return(expRegCadena)
        ?console.info(`1"${cadena}" cumple con el patron indicado`)
        :console.info(`2"${cadena}" NO cumple con el patron indicado`)
}

validarPatron()
validarPatron("Daniel Esteban", "Hola")
validarPatron("Daniel Esteban", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüÏï\s]+$/g)
validarPatron("Daniel Esteban", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)

validarPatron("esteban.alcantara.paleo@gmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)
