import Player from "./Player";
import {preparePlayerData, addWinsToPlayers} from '../helpers/playerHelpers';

function PlayerList(props){

	const playerDataArray = preparePlayerData(props.playerData);
	const parsedPlayerData = addWinsToPlayers(playerDataArray, props.matchData);
	const onePlayer = parsedPlayerData[0];
	console.log(playerDataArray)

    return(
    	<section className="PlayerList">
    		<h1>Current participating players</h1>
    		<Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
  		</section>

    );
}

export default PlayerList;