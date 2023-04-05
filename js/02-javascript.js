/* 
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y 
altura, año de nacimiento. Si quieres añadir alguna propiedad extra 
puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico 
de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de 
generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje 
indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un
objeto persona, permitiendo ingresar las propiedades mediante un
formulario, también agregar los botones “mostrar generación”, 
es “mayor de edad” e indicar en un alert el resultado de la función 
correspondiente.


*/

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", crearPersona);

class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
    mostrarGeneracion() {
        let generacion = "";
        if (this.anioNacimiento >= 1928 && this.anioNacimiento <= 1945) {
            generacion = "Silent Generation";
            alert(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la disciplina.`
            );
        } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
            generacion = "Baby Boomer";
            alert(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la ambición.`
            );
        } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            alert(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la independencia.`
            );
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Millennial";
            alert(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la adaptabilidad.`
            );
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            alert(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la tecnología.`
            );
        } else if (this.anioNacimiento > 2010) {
            alert("La persona es demasiado joven para pertenecer a una generación.");
        } else {
            alert("No se pudo determinar la generación de la persona.");
        }
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert("La persona es mayor de edad.");
        } else {
            alert("La persona es menor de edad.");
        }
    }
    mostrarDatos() {
        alert(`Nombre: ${this.nombre}\n
        Edad: ${this.edad}\n
        DNI: ${this.DNI} \n
        Sexo: ${this.sexo} \n
        Peso: ${this.peso} \n
        Altura: ${this.altura} \n
        Año de nacimiento: ${this.anioNacimiento}\n`);
    }
}

function crearPersona(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const DNI = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const anioNacimiento = parseInt(document.getElementById("nacimineto").value);

    const persona = new Persona(nombre, edad, DNI, sexo, peso, altura, anioNacimiento);
    formulario.reset();
    alert("creaste una persona ve sus caracteristicas");
    document.getElementById("mostrar-generacion").addEventListener("click", function () {
        persona.mostrarGeneracion();
    });

    document.getElementById("es-mayor-de-edad").addEventListener("click", function () {
        persona.esMayorDeEdad();
    });

    document.getElementById("mostrar-datos").addEventListener("click", function () {
        persona.mostrarDatos();
    });
}
