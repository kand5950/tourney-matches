import Player from "./Player";
import matchData from "../data/matchData";
import playerData from "../data/playerData";

function PlayerList(){
    return(
    	<section className="PlayerList">
    		<h1>Current participating players</h1>
    		<Player />
  		</section>

    );
}

export default PlayerList;