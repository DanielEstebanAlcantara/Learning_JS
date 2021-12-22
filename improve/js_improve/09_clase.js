/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
  - 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
  - aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  - decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, 
Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, 
Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Movie {
    constructor({id, titulo, director, anioEstreno, paisOrigen, genero, calificacion}){
        this.id = id
        this.titulo = titulo
        this.director = director
        this.anioEstreno = anioEstreno
        this.paisOrigen = paisOrigen
        this.genero = genero
        this.calificacion = calificacion

        this.validarIMDB(this.id)
        this.validarTitulo(this.titulo )
        this.validarDirector(this.director)
        this.validarAnioEstreno(this.anioEstreno)
        this.validarPais(this.paisOrigen)
        this.validarGeneros(this.genero)
        this.validarCalificacion(this.calificacion)
      }
    
    static get listaGeneros(){
      return ['Action', 'Adult', 'Adventure',' Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News','Reality-TV', 'Romance','Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
    }

    static generosAceptados(){
      return console.info(`Los generos aceptados son: ${Movie.listaGeneros.join(", ")}`)
    }

    validarCadenas(propiedad, valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)
      if(typeof valor !== "string") return console.warn(`${propiedad} "${valor}" No es una cadena de texto`)
      if (valor.length === 0) return console.error("El arreglo esta vacío ")

      return true
    }

    validarLongitudCadena(propiedad, valor, longitud){
      if(valor.length > longitud)return console.error(`${propiedad} "${valor}" no es válido. Debe tener menos de ${longitud} caracteres`)

      return true
    }
    
    validarNumero(propiedad, valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)
      if(typeof valor !== "number") return console.warn(`${propiedad} "${valor}" No es un numero`)

      return true
    }

    validarArreglo (propiedad, valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)
      if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" No es un arreglo`)
      if (valor.length === 0) return console.error(`${propiedad} "${valor}" No tiene datos`)

      for (const cadena of valor) if(typeof cadena !== "string") return console.warn(`${propiedad} "${valor}" No es una cadena de texto`)
      
      return true
    }

    validarIMDB(id){
        if(this.validarCadenas("IMDB id", id))
            if(!(/^([a-z]{2}([0-9]{7}))$/.test(id)))
              return console.error(`IMDB id ${id} no es válido. Debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`)
    }

     validarTitulo(titulo){
        if(this.validarCadenas("Titulo", titulo))
          this.validarLongitudCadena("Titulo", titulo, 100)
    }

     validarDirector(director){
        if(this.validarCadenas("Director", director))
          this.validarLongitudCadena("Director", director, 50)
    }

    validarAnioEstreno(anioEstreno){
        if(this.validarNumero("Anio Estreno", anioEstreno))
            if(!(/^([0-9]{4})$/.test(anioEstreno)))
              return console.error(`Anio estreno "${anioEstreno}" no es válido. Debe tener 4 digitos`)
    }

    validarPais(paisOrigen){
      this.validarArreglo("Pais", paisOrigen)
    }

    validarGeneros(generos){
      if(this.validarArreglo("Genero", generos))
        for (const genero of generos) 
          if(!(Movie.listaGeneros.includes(genero))){
            console.log(`Geneo incorrecto "${generos.join(", ")}"`);
            Movie.generosAceptados()
          }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion))
            return (calificacion < 0 || calificacion > 10)
                    ? console.error(`La calificación debe estar en un rango entre 0 y 10`)
                    : this.calificacion = calificacion.toFixed(1)
    }

    fichaTecnica(){
      console.log(`Ficha tecnica;\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAnio: "${this.anioEstreno}"\nPais: "${this.paisOrigen.join("-")}"\nGeneros: "${this.genero.join(", ")}"\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
    }
}

const peliculas =[
  {
  id: "tt0316654",
  titulo: "Spider-Man 2",
  director : "Sam Raimi",
  anioEstreno : 2004,
  paisOrigen : ['USA'],
  genero : ['Action', 'Adventure', 'Sci-Fi'],
  calificacion : 7.3
  },
  {
  id: "tt0948470",
  titulo: "The Amazing Spider-Man",
  director : "Marc Webb",
  anioEstreno : 2012,
  paisOrigen : ['USA'],
  genero : ['Action', 'Adventure', 'Sci-Fi'],
  calificacion : 6.9
  },
  {
  id: "tt1087260",
  titulo: "Spider-Man: No Way Home",
  director : "Jon Watts",
  anioEstreno : 2021,
  paisOrigen : ['USA'],
  genero : ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
  calificacion : 9.0
  }

]

peliculas.forEach(element => new Movie(element).fichaTecnica());



