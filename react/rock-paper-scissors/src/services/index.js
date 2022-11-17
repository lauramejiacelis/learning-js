export const winner = (move1, move2, moves, names) => {
  const playerOneMove = moves.find((move) => move.value === move1);

  if (playerOneMove.beats === move2) {
    return names[0];
  } else if (playerOneMove.value === move2) {
    return "it's a tie!!!";
  } else {
    return names[1];
  }
};
//Actualizar para que en el ganador me retorne el id, no el name

export const updateScore = (players, winner) =>
  players.map((player) => {
    if (player.id === winner) {
      console.log(player.id);
      return {
        ...player,
        score: (player.score += 1),
      };
    }
    return player;
  });