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
