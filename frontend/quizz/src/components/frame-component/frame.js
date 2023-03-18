import Rankingg from "../rankcomponent/rankcomponent";
import Contents from "../contents/contents";
import Question from "../question/Question";
import Game from "../game/game.js";

function Frame(){

    return (
        <div>
        <div style={{backgroundImage: `url('/background.jpg')`, width: '100%', height: '100vh', backgroundSize: 'cover', position: 'inherit'}}>
            <div style={{backgroundImage: `url('/ALTP_LOGO_2021.png')`, width: '447px', height: '447px', marginLeft: '800px'}}>

            </div>
         <Game/>
        </div>
        </div>

    )
}
export default Frame