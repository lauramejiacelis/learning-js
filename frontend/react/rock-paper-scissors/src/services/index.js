export const winner = (move1, move2, moves, players) => {
  const playerOneMove = moves.find((move) => move.value === move1);

  if (playerOneMove.beats === move2) {
    return players[0].name;
  } else if (playerOneMove.value === move2) {
    return "it's a tie!!!";
  } else {
    return players[1].name;
  }
};
//Actualizar para que en el ganador me retorne el id, no el name

export const updateScore = (players, winner) =>
  players.map((player) => {
    if (player.name === winner) {
      console.log(player.name);
      return {
        ...player,
        score: (player.score += 1),
      };
    }
    return player;
  });
