export const winner = (move1, move2, moves, names) => {
  console.log(moves);
  console.log(names);
  console.log(move1);
  const playerOneMove = moves.find((move) => move.value === move1);
  console.log(playerOneMove);
  if (playerOneMove.beats === move2) {
    return names[0];
  } else if (playerOneMove.value === move2) {
    return "it's a tie!!!";
  } else {
    return names[1];
  }
};
