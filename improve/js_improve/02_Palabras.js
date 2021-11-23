/* 5) Programa una función que invierta las palabras de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */ 
//Pude usar el metodo reverse de arreglos
const invertirTexto = texto => {
   let textoInvertido =''
   
   for (let i = texto.length-1; i >= 0; i--) textoInvertido += texto[i]
   
   return (!texto)
   ? console.warn("No se ha ingresado ningún texto")
   :console.log(textoInvertido)
}

let texto = 'Mi nombre es Daniel Esteban Alcantara'
invertirTexto(texto)

/*6 Programa una función para contar el número de veces que se repite una palabra en un
texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/ 

const palabraRepetida = (texto, palabra) =>{
   let arrTexto = texto.split(" "), veces = 0
   
   for (let elemento of arrTexto) if (palabra === elemento) veces +=1/*Busqueda lineal para ver cuantas 
                                                                           veces se repite la palabra*/
   
   return (!texto || !palabra)
   ? console.warn("No se ha ingresado ningún texto a evaluar")
   :(veces != 0)
   ? console.log(`La palabra "${palabra}" se encuentra ${veces} veces en el texto: \n "${texto}"`) 
   : console.log(`"${palabra}" no se encuentra dentro del siguinte texto: \n "${texto}"`)
}

let texto2 = 'hola mundo adios mundo'
palabraRepetida(texto2, "hola")


/* 7) Programa una función que valide si una palabra o frase dada, es un
palíndromo (que se lee igual en un sentido que en otro), pe.
mifuncion("Salas") devolverá true.  */

const palindromo = palabra =>{
   //declaro una variable vacía para llenarla con la frase o palabra invertida
   //invertir una palabra rápido palabraInvertida = palabra.split("").reverse().join("")
   let palabraInvertida ='',
      //Con las funciones toLowerCase y replace hago que todo se compara en minúsculas y sin espacios
       palabraAnilzar = palabra.toLowerCase().replace(/ /g, '')
       
   for (let i = palabraAnilzar.length-1; i >= 0; i--) palabraInvertida += palabraAnilzar[i]
   
   return (!palabraAnilzar)//Si se introdujo una cadena vacía 
   ? console.warn("No se ha ingresado ningúna frase o palabra")
   :(palabraInvertida === palabraAnilzar) /*Si no se ingrosó una cadena vacía prueba que la frase o palabra 
                                             invertida sea igual a la palabra o frase que se ingresó*/
   ? console.log(`La palabra o frase "${palabra}" es un palindromo`) 
   : console.log(`La palabra "${palabra}" no es un palindromo`)
}

let palabra = "Dabale arroz a la zorra el abad"
palindromo(palabra)

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2,
xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
*/

const eliminarPatron = (cadena, patron)=> {//recibe una cadena de caracteres y el patron a eliminar
   let patronExpReg = new RegExp(patron, "ig") //Creo una expreson regular del patron con la bandera global

   return (!cadena)//Si se ingresó una cadena vacía
   ? console.warn("No se ha ingresado ningún texto")
   :(!patron)
   ?console.warn("No se ha ingresado ningún patron a buscar")
   :console.log(patronEnCadena.replace(patronExpReg, ""))/*función replace para remplzar la 
                                                               expresión regular por nada*/
}

let patronEnCadena = "xyz1, xyz2, xyz3, xyz4 y xyz5"
eliminarPatron(patronEnCadena, 'xyz')




