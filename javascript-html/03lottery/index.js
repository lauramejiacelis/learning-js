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
var quantity = document.getElementById("quantity");
var body = document.querySelector("body");

var round = 0;
var cards = [];
//var plays = [];

//* 1. Crear todas las cartas
function createCards(cardsQty) {
  // Review: Nunca parametros en mayuscula ya que no son constantes
  //cards.length = cardsQty; //ya no se necesita

  for (let i = 0; i < (cardsQty / 2); i++) {
    // Review: se podría hacer con cards.push(i + 1) dos veces
    cards.push(i+1);
    cards.push(i+1);
    // cards[i] = i + 1;
    // cards[cardsQty / 2 + i] = i + 1;
  }
  cards = cards.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(cards);

  cards.forEach(function (element) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerText = element;
    cardsContainer.appendChild(card);
  });

  return cards;
}

function startGame() {
  cardsContainer.innerHTML = "";
  var plays = [];
  cards = [];
  createCards(quantity.value);
  startButton.disabled = true;

  //* 2. Agregar el evento del click carta
  //* 3. Logica para seleccionar 2 cartas
  cardsContainer.addEventListener("click", function (event) {
    console.log(event.target.innerText);
    var cardPlay = event.target;
    //Para cuando hacemos click en el contenedor
    if (cardPlay === cardsContainer) {
      return;
    }
    console.log(`carta clickeada  ${cardPlay.innerText}`);
    //cardPlay.classList.remove("card"); // Review: no hay necesidad de quitar la clase base
    cardPlay.classList.add("show"); //se cambió 
    plays.push(cardPlay);
    cardPlay.setAttribute("id", `${plays.length}`);
    console.log(cardPlay);
    console.log(`cards-length ${cards.length}`);
    console.log(`plays-length ${plays.length}`);
    var last = plays.length - 1;
    var previous = plays.length - 2;

    //Función para tapar las cartas (la creé para el setTimeOut que NO funcionó)
    /**
     * function hide(element, class){
     *  element.classList.remove(class)
     * }
     *
     * hide(plays[last], 'card-show')
     * hide(plays[previous], 'card-show')
     */
    function hide() {
      plays[last].classList.remove("show");
      plays[previous].classList.remove("show");
    }

    function clear() {
      cardsContainer.innerHTML = "";
      message.innerText = "";
      body.removeChild(clearbutton);
    }

    if (plays.length === cards.length) {
      var message = document.createElement("h1");
      message.innerText = `Congratulations you Won!`;
      body.appendChild(message);
      startButton.disabled = false;
      var clearbutton = document.createElement("button");
      clearbutton.innerText = `Clear`;
      body.appendChild(clearbutton);
      clearbutton.addEventListener("click", clear);

      //* 4. Comparar las cartas
    } else if (plays.length % 2 === 0) {
      if (plays[last].innerText === plays[previous].innerText) {
        console.log("Las cartas son iguales");
        // Bug: se pueden seguir clickeando las cartas luego de hacer match
      } else {
        console.log("Las cartas son diferetes");
        setTimeout(function () {
          hide();
          plays.pop();
          plays.pop();
        }, 2000);
        
      }
    }
  });
}

startButton.addEventListener("click", startGame);

//Revisar el cambio del setTimeOut
