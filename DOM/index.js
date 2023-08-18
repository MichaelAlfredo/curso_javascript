/* Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores */
/* console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a")); */
/* 




*/
/* Curso JavaScript: 63. DOM: Atributos y Data-Attributes */
/* console.log("Atributos y Data-Attributes");
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-PA");
console.log(document.documentElement.getAttribute("lang")); */

//VARIABLES
const $linkDOM = document.querySelector(".link-dom");
/* const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento"); */
/* 




*/

/* Curso JavaScript: 64. DOM: Estilos y Variables CSS */
/* console.log("Estilos y Variables CSS");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); */
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
$linkDOM.style.marginBottom = ".5rem";

//variablles-custom Property CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);
//$body.style.backgroundColor = varDarkColor;
//$body.style.color = varYellowColor;

/* Curso JavaScript: 65. DOM: Clases CSS */
const $card = document.querySelector(".card");

/* console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45")); */
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.remove("rotate-45");
//$card.classList.replace("rotate-45", "rotate-135");

/* Curso JavaScript: 66. DOM: Texto y HTML  */
const $whatIsDOM = document.getElementById("que-es");

let text = `<p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
/* Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM  */

const $cards = document.querySelector(".cards");
/* console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.children[3].closest("section")); */

/* Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos  */
/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Programming");

$img.setAttribute("src", "../assets/programming.jpg");
$img.setAttribute("alt", "Programming");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

let hola = "hola";

/* Curso JavaScript: 69. DOM: Templates HTML */
/* const $tamplate = document.getElementById("template-card").content,
  cardContent = [
    {
      title: "Tegnologia",
      img: "../assets/tegnologia.jpg",
    },
    {
      title: "Voleibol",
      img: "../assets/volleybol.jpg",
    },
    {
      title: "Arte",
      img: "../assets/artes.jpg",
    },
    {
      title: "Estudiando",
      img: "../assets/estudiando.jpg",
    },
    {
      title: "Arcoiris",
      img: "../assets/arcoiris.jpg",
    },
  ];

cardContent.forEach((el) => {
  $tamplate.querySelector("img").setAttribute("src", el.img);
  $tamplate.querySelector("img").setAttribute("alt", el.title);
  $tamplate.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($tamplate, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

//70. DOM: Modificando Elementos (Old Style)
/* $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);
 
$newCard.innerHTML = `
<img src="../assets/books.jpg" alt="Any">
 <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
*/
//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//document.body.appendChild($cloneCards);

//71. DOM: Modificando Elementos (Cool Style)
/* insertAdjacent...
    .insertAdjacentElement (position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)
    Posiciones:
    beforebegin (hermano anterior)
    afterbegin(primer hijo)
    beforeend (ultimo hijo)
    afterend (hermano siguiente)
 */
$newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

/* $newCard.innerHTML = `
<img src="../assets/books.jpg" alt="Any">
 <figcaption>Any</figcaption>
`; */
let $contentCard = `
<img src="../assets/books.jpg" alt="Any">
 <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Books");
//$cards.insertAdjacentElement("beforebegin", $newCard)
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard)
//$cards.insertAdjacentElement("afterend", $newCard)

//$cards.append($newCard)
//$cards.before($newCard)
//$cards.after($newCard)
//$cards.prepend($newCard)

/* 72. DOM: Manejadores de Eventos */
function holaMundo() {
  alert("Hola Mundo")
  console.log(event)
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

