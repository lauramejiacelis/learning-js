var playerName = document.getElementById("playerName");
var addPlayer = document.getElementById("addPlayer");
var inputMessage = document.getElementById("inputMessage");
var setup = document.getElementById("setup");
var board = document.getElementById("board");

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
  board.classList.remove("hide");

  players.forEach(function (player) {
    var playerContent = document.createElement("div");
    playerContent.classList.add("player-content");

    var playerStatus = document.createElement("div");
    playerStatus.classList.add("player-status");

    var playerName = document.createElement("h1");
    playerName.innerText = player.name;

    var playerRoundIndicator = document.createElement("input");
    playerRoundIndicator.type = "radio";
    playerRoundIndicator.name = "indicator";

    if (player.id === "player1") {
      playerRoundIndicator.checked = true;
    }

    playerContent.appendChild(playerStatus);

    playerStatus.appendChild(playerRoundIndicator);
    playerStatus.appendChild(playerName);

    board.appendChild(playerContent);
  });
}
