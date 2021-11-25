/*15) Programa una función para convertir números de base binaria a decimal y viceversa,
pe. miFuncion(100,2) devolverá 4 base 10. */
const binarioDecimal =(numero = 0, base = undefined ) =>{
     /*
     DE BINARIO A DECIMAL
     Se puede realizar con el método parseInt(numero, base)
     parseInt(100, 2) = 4

     DE DECIMAL A BINARIO

     Se puede hacer  con

     numero.toString(2)
     4.tostring(10) = 100
     */
     
     if(!numero) return console.warn("No se ha ingresado algún numero")
     if (base === undefined) return console.warn("No se ha ingresado una base")
     
     
     
     switch (base) {
          case 2:
               let numeroSt = numero.toString().split("").reverse().join(""), 
               numeroBase = 0
               
               for (let n = 0; n < numeroSt.length; n++) {
                    if (numeroSt[n] !== '1' && numeroSt[n] !== '0') return console.warn("Debe ingresar un numero binario")
                    if (numeroSt[n] === '1') numeroBase += Math.pow( 2, n)
               }
               console.log(`${numero} base 2 = ${numeroBase} base 10`)
               break;
               case 10:
                    let division = numero, numeroBase2=''
                    while(division !== 0){
                         (division%2 === 0)
                         ?numeroBase2 += '0'
                         :numeroBase2 += '1'
                         
                         division = Math.trunc(division / 2);
                    }
                    numeroBase2=numeroBase2.split("").reverse().join("")
                    console.log(`${numero} base 10 = ${numeroBase2} base 2`)
                    break;
                    default:
                         console.warn("Debe ingresar si su numero es base 10 o base 2");
                         break;
                    }
                    
                    
                    
               }
               
     binarioDecimal(83, 10)
               
               
/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a ucantidad dada,
pe. miFuncion(1000, 20) devolverá 800. */
               
const aplicrDescuento = (monto = undefined, descuento = 0) => 
     (!monto) 
      ? console.warn("Debe ingresar un monto")
      :(!descuento) 
        ?console.warn("Debe ingresar un descuento")
         : console.log(` $ ${monto} - ${descuento}% = $${monto - (monto * (descuento / 100)) }`)
               
 aplicrDescuento(300, 10)


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
     pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)*/

const anios = (fechaDesde, fechaAsta  ) => {
     (!fechaDesde || !fechaAsta)
     ?console.warn("No se ha ingresado una fecha ")
     :console.log(`Desde ${fechaDesde.getFullYear()} hasta ${fechaAsta.getFullYear()} han pasado ${fechaAsta.getFullYear() - fechaDesde.getFullYear()}`)
}

anios(new Date(1984,4,23), new Date(2020, 04, 23))

let fechaDesde = new Date(1984,4,23)
let fechaAsta = new Date(2020, 04, 23)
console.log(fechaAsta.getFullYear() - fechaDesde.getFullYear())

const calcAnios = (fecha = undefined) =>{
     if (fecha === undefined) return console.warn("No ha ingresado la fecha")
     if(!(fecha instanceof Date)) return console.warn("No es una fecha valida")

     let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
          aniosEnMs = 1000 * 60 * 60 * 24 * 365
          aniosTerranos = Math.floor(hoyMenosFecha / aniosEnMs)
     
     return (Math.sign(aniosTerranos) === -1)
               ?console.log(`Faltan ${Math.abs(aniosTerranos)} años para el ${fecha.getFullYear()}`)
               :(Math.sign(aniosTerranos) === 1)
                    ?console.log(`Han pasado ${aniosTerranos} años, desde ${fecha.getFullYear()}`)
                    :console.log(`Estamos en el año actual ${fecha.getFullYear()}`)

}

calcAnios(new Date (2001, 04, 09))