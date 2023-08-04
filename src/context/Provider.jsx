import { useEffect, useRef, useState } from "react";
import { Context } from "./context";
import { PALABROS } from "../questions";
const useRandomNumber = (n)=>{
    const [randomNumber,setrandomNumber]=useState(Math.round(Math.random()*n)),
    reset = ()=>setrandomNumber(Math.round(Math.random()*n));
    return {randomNumber,reset};
},
usePhase = ()=>{
    const [phase,setPhase] = useState(1),
    nextPhase = ()=>setPhase(phase+1),
    reset = ()=>setPhase(1)
    return {phase,nextPhase,reset}
},
useHiddenLetters=(arr)=>{
    const [letters,mySetLetter] = useState(arr),
    reset = (arr)=>mySetLetter(arr),
    setLetter = (arr)=>mySetLetter(arr);
    return {letters,reset, setLetter};
};
const Provider = ({children})=>{
    const tries = 6,
    random = useRandomNumber(10),
    phaseOBJ=usePhase(),
    refGameOver=useRef(null),
    hiddenLetters = useHiddenLetters( (Array(PALABROS[random.randomNumber].palabro.length)).fill("")  );

    const reset = ()=>{
        location.reload();
    };
    
    return (<Context.Provider value={{
        tries,
        randomNumber:random.randomNumber,
        phase:phaseOBJ.phase,
        nextPhase:phaseOBJ.nextPhase,
        hiddenLetters:hiddenLetters.letters,
        refGameOver,
        setLetter:hiddenLetters.setLetter,
        reset
    }}>
        {children}
    </Context.Provider>);
};
export default Provider;