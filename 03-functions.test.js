import {describe, it} from 'node:test';
import assert from 'node:assert/strict';

///////////////////////////////////////
// NOTAS GENERALES FUNCIONAMIENTO TEST: 
// 1.Inicio con la función it, que se usa para definir un caso de prueba (para comprobar que el código funciona como se espera). La función it tiene dos parámetros: una cadena que describe el caso de prueba y una función que contiene el código a probar.

// 2. La cadena es "Las funciones pueden tener 1 parámetro" (primer caso), que indica lo que se quiere probar. La función que contiene el código a probar es la que empieza con () => { y termina con }. Es una arrow function (forma abreviada de escribir funciones en JavaScript). Dentro de la arrow function, se declara una variable llamada name y se le asigna el valor "Rosa". Una variable es un contenedor que almacena un valor que se puede usar en el código. Para declarar una variable en JavaScript, se usa la palabra clave let/const, seguida del nombre de la variable y el signo =. El valor que se quiere asignar a la variable se escribe después del signo =
///////////////////////////////////////

// SEGUNDA PARTE: Las funciones en JavaScript. Lee bien los tests para averiguar qué se pide en cada momento, y crea una función que haga pasar el test.

describe("Funciones en JavaScript", () => {
    it("Las funciones pueden tener 1 parámetro", () => {
        let name = "Rosa";

        // Escribe aquí tu funcion "saludar"
        function saludar(name) {
            return `Hola, ${name}`
        }

        assert.strictEqual(saludar(name),"Hola, Rosa");
    })
})


    it("Las funciones pueden tener 2 parámetros", () => {
        let num1 = 17;
        let num2 = 10;

        // Escribe aquí tu función "suma"
        function suma(num1, num2) {
            return num1 + num2;
        }

        assert.strictEqual(suma(num1, num2),27);
    })


    it("Las funciones pueden tener múltiples parámetros", () => {
        let userName = "ada89";
        let name = "Ada Martín";
        let city = "Las Vegas";
        let weather = "soleado";
        let rainProbability = "10%";

        // Escribe aquí tu función "weatherReport" (fíjate en la aserción para saber qué debe retornar esta función).
        function weatherReport(userName, name, city, weather, rainProbability) {
            return `Hola ${name} (${userName}), hoy en ${city} el tiempo es ${weather} y las probabilidades de lluvia son del ${rainProbability}.`;
        }
        assert.strictEqual(weatherReport(userName, name, city, weather, rainProbability),"Hola Ada Martín (ada89), hoy en Las Vegas el tiempo es soleado y las probabilidades de lluvia son del 10%.");
    })


    // BONUS: Crea un test que te permita testear la función que verás a continuación. Para ello, también te hemos proporcionado las variables que necesitarás (y alguna más que no necesitarás, para confundir :P).
    // Recuerda quitar la puntuación de comentario (/* ... */) para que este código a continuación sea legible, e inclúyelo dentro de tu test.


    it("bonus", () => {
        let userName = "Ariana28";
        let userAge = 38;
        let userEmail = "ariana_28@gmail.com";
        let userLocation = "Barcelona"
        let userIsRegistered = true;
        let password = "p4s$w0rDs3guR0";

        function userAuth(userName, userEmail, password) {
            return `Welcome ${userName}, your email is ${userEmail} and your password is ${password}.`;
        }
        assert.strictEqual(userAuth(userName, userEmail, password),"Welcome Ariana28, your email is ariana_28@gmail.com and your password is p4s$w0rDs3guR0.");
    })