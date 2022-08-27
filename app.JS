//VALIDAR UN IBAN

// Caso 1. Validar que se informa con dos letras, y los números correspondientes.

let iban1 = "ES6600190020961234567890";

const pattern1 = /^[A-Z]{2}\d{22}$/;

console.log(pattern1.test(iban1));

console.log("---------------------");


// Caso 2. Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estas dos cadenas:

// ES6600190020961234567890
// ES6600190020961234567890


let iban2 = ["ES66 0019 0020 9612 3456 7890", "ES6600190020961234567890"];

const pattern2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;

iban2.forEach(value => {
    console.log(pattern2.test(value));
});
console.log("---------------------");
// Caso 3. Vamos a extraer el código de páis y código de control.

//Vamos a extraer el código de páis y el dígito de control.

let iban3 = "ES6600190020961234567890";

const pattern3 = /^([A-Z]{2})(\d{2})\d{20}$/;
console.log(pattern3.exec(iban3));
console.log("---------------------");

//VALIDAR MATRÍCULA DE COCHE

/* Caso 1
Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

2345-GMD
4532BDB
0320-AAA
*/

let matricula = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

const pattern4 = /^\d{4}(\s|-)?[A-Z]{3}$/;

matricula.forEach(value => {
    console.log(pattern4.test(value));
});

console.log("---------------------");
//OPCIONALES - Extraer imágenes de un fichero HTML

//Caso. De una sola línea extraer el contenido de src.


let url = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'

const pattern5 = /["|'](.*?)["|']/;

console.log(pattern5.exec(url));
console.log("---------------------");

//Caso 2. De un HTML extraer todos los src de todos los objetos img:

/*
<html>
 <body>
 <img
 src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
 />
 <h1>ejemplo</h1>
 <img
 src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"
 />
 </body>
</html>
*/


let url2 =
    `<html>
    <body>
        <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
        <h1>ejemplo</h1>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
    </body>
</html>`;
const pattern6 = /<img.*?src=["|'](.*?)["|']/gim;

console.log(pattern6.test(url2));
console.log(url2.match(pattern6));
console.log("---------------------");

// VALIDAR SINTAXIS DE TARJETA DE CRÉDITO

/* En nuestra aplicación tenemos un apartado para que el usuario pueda introducir los datos de su tarjeta de
crédito máster card, para ello vamos a tener en cuenta:
Que una máster card tiene una longitud de 16 caracteres (numeros).
Que tiene que empezar con 50,51,52,53,54,55.
Qué lo normal es que se agrupen en conjuntos de 4 digitos.
Ejemplo:
5299 64000 000 000
*/

//Caso 1. Vamos a validar los siguientes formatos.

let card = ["5299 64000 000 000", "5299-64000-000-000", "529964000000000"];

const pattern7 = /^5[0-5]\d{2}(\s|-)?(\d{5})(\s|-)?(\d{3})(\s|-)(\d{3})(\s|-)?|\d{14}$/;

card.forEach(value => {
    console.log(pattern7.test(value));
});

console.log("---------------------");

//Caso 2. Vamos a extraer cada grupo de cuatro dígitos.
let card1 = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

const pattern8 = /^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/;
const pattern9 = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/;
const pattern9A =/^(\d{4})(\d{4})(\d{4})(\d{4})$/;
card1.forEach(value => {
    console.log(pattern8.exec(value));
    console.log(pattern9.exec(value));
    console.log(pattern9A.exec(value));
})
console.log("---------------------");

//BUSCAR EXPRESIONES REGULARES

// Caso1. Comprobar si una clave es fuerte o no.

let KeyCode = ["Wh32!j/weyQd", "Angel2022!"];                                                                                                                                      

let complicatedPassPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
let EasyPassPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

KeyCode.forEach(value => {
    console.log(complicatedPassPattern.test(value));
    console.log(EasyPassPattern.test(value))
})
console.log("---------------------");

// Caso2.Validar que una URL está bien formada.
let url3 = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];

let Pattern10 = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

url3.forEach(value => {
    console.log(Pattern10.test(value));
})
console.log("---------------------");
// Caso3. Validar que un color en Hexadecimal está bien formado.
let colors = ["-D1DDB0", "-ft823"];

const Pattern11 = /^-([0-9A-Ma-z]{3}){1,3}$/;

colors.forEach(value => {
    console.log(Pattern11.test(value));
});
console.log("---------------------");