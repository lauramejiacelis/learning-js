export const updateScore = (player, results) =>
  player.map((player) => {
    if (player.id === results) {
      console.log(player.id);
      return {
        ...player,
        score: (player.score += 1),
      };
    }
    return player;
  });

export const updateActivePlayer = (player) =>
  player.map((player) => {
    if (player.active === true) {
      return {
        ...player,
        active: false,
      };
    } else {
      return {
        ...player,
        active: true,
      };
    }
    return player;
  });

export const updateMove = (move, player, option) => {
  const data = Object.keys(move).find((key) => key === player);
  if (data === player) {
    return {
      ...move,
      [player]: option,
    };
  }
};

export const updateWon = (move, player) => {
  const won = Object.keys(move).find((key) => key === 'won');
  if (won !== '') {
    return {
      ...move,
      won: player,
    };
  }
};

// 5/11/2022 Creo que de aquí para arriba se usaron en Board, es decir en el primer intento

export const winner = (move1, move2, moves) => {
  console.log(moves);
  console.log(move1);
  const playerOneMove = moves.find((move) => move.value === move1);
  console.log(playerOneMove);
  if (playerOneMove.beats === move2) {
    console.log('player 1 wins');
    return 0;
  } else if (playerOneMove.value === move2) {
    console.log("it's a tie");
    return "it's a tie!!!";
  } else {
    console.log('player 2 wins');
    return 1;
  }
};

export const updateRoundInfo = () => {};
