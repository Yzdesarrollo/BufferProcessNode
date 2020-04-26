/*MANEJO DE DATOS DINAMICOS*/
var nombre = "Jose"; // Se ejecutara de forma automatizada desde el packages.json
nombre = 10;
nombre = true;
console.log(nombre); // npm run automatizar => Automatizar tareas.

/*MANEJO DE DATOS COMPUESTOS*/
let lista = ["Uno", "dos", "tres"];
console.log(lista);

let curso = {
    tema: "Nodejs",
    leccion: "Datos compuestos"
};

console.log(curso.leccion);

/*FUNCIONES Y METODOS*/ 
// funcion si esta dentro de una clase.
// metodo si esta dentro de un objeto.

//funcion simple
function saludo(){
    return "Hola";
}
console.log(saludo());

// metodo o seudoclase
let calculo = {
    duplicar: function(num) {
        return num * 2;
    },
    dividir: function(num) {
        return num / 2;
    }
}

console.log(calculo.duplicar(30), calculo.dividir(60));



 