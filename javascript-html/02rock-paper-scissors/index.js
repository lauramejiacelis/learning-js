var playerName = document.getElementById("playerName");
var addPlayer = document.getElementById("addPlayer");
var inputMessage = document.getElementById("inputMessage");
var setup = document.getElementById("setup");
var board = document.getElementById("board");
var roundIndicator = document.getElementById("roundIndicator");
var turnIndicator = document.getElementById("turnIndicator");

var round = 0;
var turn = 0;

var game = [];

var players = [
  {
    id: "player1",
    name: "",
    score: 0,
  },
  {
    id: "player2",
    name: "",
    score: 0,
  },
];

var PLAY_OPTIONS = [
  {
    name: "R",
    beats: "S",
  },
  {
    name: "P",
    beats: "R",
  },
  { name: "S", beats: "P" },
];

var step = 0;

addPlayer.addEventListener("click", function () {
  var name = playerName.value;
  players[step].name = name;

  if (step === 0) {
    inputMessage.innerText = "Please enter Player 2 Name";
  } else {
    setup.classList.add("hide");
    prepareBoard();
  }
  step++;
  playerName.value = "";
});

function prepareBoard() {
  var roundStatus = document.getElementById("roundStatus");
  board.classList.remove("hide");
  roundStatus.classList.remove("hide");

  players.forEach(function (player) {
    var playerContent = document.createElement("div");
    playerContent.classList.add("player-content");

    var playerStatus = document.createElement("div");
    playerStatus.classList.add("player-status");

    var playerName = document.createElement("h1");
    playerName.innerText = player.name;

    var playerScore = document.createElement("span");

    playerScore.innerText = 0;

    var cardsContainer = document.createElement("div");
    cardsContainer.classList.add("card-container");

    PLAY_OPTIONS.forEach(function (option) {
      var card = document.createElement("div");
      card.classList.add("card");
      card.innerText = option.name;

      card.addEventListener("click", function () {
        // mire a que carta le dieron y vaya valide
        var playerInTurn = players[turn];
        if (player.id === playerInTurn.id) {
          if (!game[round]) {
            game[round] = {};
          }
          game[round][playerInTurn.id] = card.innerText;
          turn = turn === 0 ? 1 : 0;
          turnIndicator.innerText = turn + 1;

          if (game[round].player1 && game[round].player2) {
            var player1Option = PLAY_OPTIONS.find(function (option) {
              return option.name === game[round].player1;
            });
            console.log(player1Option);
            if (player1Option.beats === game[round].player2) {
              console.log("Gana player 1");
              // darle un punto al ganador
              // aumentar la ronda
              // validar si el juego termino
            } else if (player1Option.name === game[round].player2) {
              console.log("Empate");
            } else {
              console.log("Gana player 2");
            }
          }
        } else {
          console.log("No, wait for your turn");
        }
      });
      cardsContainer.appendChild(card);
    });

    playerContent.appendChild(playerStatus);
    playerContent.appendChild(cardsContainer);

    playerStatus.appendChild(playerName);
    playerStatus.appendChild(playerScore);

    board.appendChild(playerContent);
  });
}
