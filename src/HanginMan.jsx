import { useContext } from "react";
import "./hanging-man.css";
import { Context } from "./context/context";
const HanginMan = ()=>{
    const {refGameOver,phase,tries,reset}=useContext(Context);
    const imagePath = "/src/assets/el_ahorcado"+phase+".png";
    
    return (
    <div className="hanging-man">
        {
            (tries===phase) &&<><p className="game-over" ref={refGameOver}>GAME OVER</p><button onClick={reset} className="retry-btn">Retry?</button></>
        }
        <img src={imagePath} className="hanging__man-image"/>
    </div>
    );
}
export default HanginMan;