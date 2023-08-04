import { useContext } from "react";
import KeyboardKey from "./KeyboardKey";
import "./keyboard.css";
import { Context } from "./context/context";
import { PALABROS } from "./questions";
const Keyboard = ()=>{
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    keys = alphabet.map(key=><KeyboardKey key={key} myKey={key}/>);
    const {hiddenLetters,randomNumber, reset}= useContext(Context),
    myPalabro = hiddenLetters.join("");
    
    return(
    <>
    <div className="keyboard" style={
        {
            opacity:(PALABROS[randomNumber].palabro===myPalabro)&& .8
        }
    }>
        {keys}
    </div>
    {
        (PALABROS[randomNumber].palabro===myPalabro) &&<><div className="you-won"> You won!</div> <button onClick={reset} className="play-again">Play again?</button></>
    }
    </>);
}
export default Keyboard;