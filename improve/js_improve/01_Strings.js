

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres (cadena){
    try{
        if(typeof cadena === 'string' ){
            return cadena.length;
        }else{
            throw new Error("El valor ingresado no es una cadena")
        }
        
    }catch(error){
        console.log(error)
    }
}

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function textoRecortado (texto, recortar){
    try{
        if(typeof texto === 'string'  && typeof recortar === 'number'){
            return texto.slice(0, recortar);
        }else{
            throw new Error("El valor ingresado no es un número")
        }
        
    }catch(error){
        console.log(error)
    }
}

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function textInArray (cadena, caracter){
    try{
        if(typeof cadena === 'string'  && typeof caracter === 'string' ){
            return cadena.split(caracter);
        }else{
            throw new Error("El valor ingresado no es una cadena de caracteres");
        }
        
    }catch(error){
        console.log(error);
    }
}

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetirTexto(texto, vecesRepetir) {
    try{
        let textoRepetido = "";
        if(typeof texto === 'string'  && typeof vecesRepetir === 'number'){
            for (let i = 0; i < vecesRepetir; i++) {
                textoRepetido += texto + " ";
            }
            return textoRepetido.trimEnd();
        }else{
            throw new Error("Valor invalido")
        }
        
    }catch(error){
        console.log(error)
    }
}

// let cadena = prompt("Ingrese una de cadena de caracteres a contar: ")
 let cadena = "Ejercicios de Lógica de Programación con JS"


let numeroCaracteres = contarCaracteres(cadena);
console.log(`El numero de caracteres en la cadena ${cadena} es de ${numeroCaracteres}`)


// let aRecortar = Number(prompt("Hasta qué numero desea recortar la cadena Ingresada?"))
let aRecortar = 7;
let textoCortado = textoRecortado(cadena, aRecortar);
console.log(`El texto recortado a ${aRecortar} caracteres es "${textoCortado}"`)

// let caracter = prompt("Con que caracter quiere dividir el text")
let caracter = " "
let arregloTextoRecortado = textInArray(cadena, caracter)
console.log(arregloTextoRecortado)

// let vecesARepeti = Number(prompt("Cuantas veces desea repetir el texto?"))
let vecesARepeti = 4;
let textosRepetido = repetirTexto(cadena, vecesARepeti);
console.log(textosRepetido)

