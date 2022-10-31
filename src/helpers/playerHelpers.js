export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    //calculates the # of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      //adds win if gamertag matches
      if (match.winner === player.gamertage) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
    
  });
    
}
 // output: [{player}, {player}] (each player having a win key and a numerical value)