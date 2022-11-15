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
