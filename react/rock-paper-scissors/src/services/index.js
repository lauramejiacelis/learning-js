
export const changeScore = (player, results) => player.map((player)=>{
    if(player.id === results){
      console.log(player.id)
      return {
        ...player,
        score: player.score+=1
      }
    }
    return player
  })
  
  export const changeActivePlayer = (player) => player.map((player) => {
    if (player.active === true) {
      return {
        ...player,
        active: false,
      };
    } else {
      return {
        ...player,
        active: true,
      }
    }
    return player
  });