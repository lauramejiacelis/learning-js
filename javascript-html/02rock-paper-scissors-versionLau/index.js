var playerName = document.getElementById("playerName");
var addPlayer = document.getElementById("addPlayer");
var inputMessage = document.getElementById("inputMessage");
var start = document.getElementById("start");
var board = document.getElementById("board");

var players = [
    {
        id: "player 1",
        name: "",
        score: 0
    },
    {
        id: "player 2",
        name: "",
        score: 0
    }
];

var step=0;

addPlayer.addEventListener("click", function () {
    var name = playerName.value;
    players[step].name = name;

    if (step ===0) {
        inputMessage.innerText = "Please enter Player 2 Name";
    } else {
        start.classList.add("hide");
        prepareBoard();
    }
    console.log(players);
    step++;
    playerName.value = "";
})

function prepareBoard() {
    board.classList.remove("hide");
    
    players.forEach(function (element) {
        console.log(element.name);
    })
}