/**
 * 1. Crear todas las cartas
 * 2. Agregar el evento del click carta
 * 3. Logica para seleccionar 2 cartas
 * 4. Comparar las cartas
 *    4.1 Iguales -> dejarlas volteadas y agregarlas a la la lista de cartas resueltas
 *    4.2 Diferentes -> volver a ocultar y volver al paso 3
 * 5. Se gana el juego cuando esten volteadas en la lista de resueltas
 */

var startButton = document.getElementById("startButton");
var cardsContainer = document.getElementById("cardsContainer");

//var CARDSQTY = 8;
var cards = [];

function createCards(CARDSQTY) {
    cards.length = CARDSQTY;

    for (let i = 0; i < (CARDSQTY/2); i++) {
        cards[i] = (i+1);
        cards[(CARDSQTY/2)+i] = (i+1);
    }
    cards = cards.sort(function(){return Math.random() - 0.5});
    console.log(cards);
    return cards;
}

startButton.addEventListener("click", function () {
    createCards(8);
    cards.forEach(function (element) {
        var card = document.createElement("div");
        card.classList.add("card");
        card.innerText = element;

        cardsContainer.appendChild(card);
    });
    
})

cardsContainer.addEventListener("click", function (event) {
    console.log(event.target.innerText);
})



//Necesito crear las cartas según un número par
//y necesito escribir el texto pero de forma aleatoria de la cantidad dividido 2, la clase va a ser card
//DAFSFD
