var container = document.getElementById("c1");
/*¿Qué es lo que contiene la variable container? 
Contiene un div
*/
container.innerText = "¡Hola mundo!";
/* ¿Qué visualiza en el navegador? 
En la primera caja naranja se coloco el ¡Hola mundo! 
*/

container.style.backgroundColor = "#000000";

container.style.color = "#1cb723";

container.style.height = "200px";

container.style.width = "200px";

container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

/*¿Qué es lo que se muestra en pantalla? 
Un input para ingresar el texto
*/
/*¿Cuál es la diferencia entre las propiedades innerHtml e innerText? 
La diferencia radica que innerHtml establece la sintaxis de HTML que se escribira en cambio innerText establece el texto que se pondra entre las etiquetas de inicio y fin del objeto
*/

var containers = document.getElementsByClassName("c2");
/*¿Qué almacena containers?
Almacena un arreglo con todas las etiquetas div que tengan la clase 'c2'
*/

var lolito = document.querySelectorAll(".c2");

lolito.forEach(
    (element) => {
        element.style.backgroundColor = "#009999";
        element.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
    });
/*2.¿Qué se mostrará en pantalla? 
Se mostraran los cuadrados superios de ese color excepto el primero pues su id no era 'c2'
*/
/*3.¿Qué se mostrará en pantalla? 
Se agregaran cajas de texto que dicen Escriba su texto en cada cuadrado
*/
/*¿Cuál es la diferencia entre las propiedas innerText e innerHTML? 
La diferencia radica que innerHtml establece la sintaxis de HTML que se escribira en cambio innerText establece el texto que se pondra entre las etiquetas de inicio y fin del objeto
*/

var boton = document.getElementById("btn-click");

boton.onclick = function (evt) { alert("Hola mundo"); }

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function (evt) {
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}
/*¿Qué es lo que sucedera después de darle click al botón? 
Mostrara 
*/
/*¿Cuál es la difernecia entre value e innerText? 
La diferencia es que value setea o retorna el valor del atributo de un campo de texto e innerText estable el texto que se pondra entre las etiquetas de inicio y fin del objeto
*/