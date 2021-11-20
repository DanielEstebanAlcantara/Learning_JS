import saludar, {Saludar, PI, usuario}from "./constantes.js";
import{aritmetica as calculos}from "./aritmetica.js";

console.log("Archivo Modulos JS");
console.log(PI);
saludar();

console.log(usuario);

console.log(calculos.sumar(5,6))
saludar();
let saludo = new Saludar();
saludo;
