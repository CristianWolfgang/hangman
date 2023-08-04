import { useContext, useEffect, useRef } from "react";
import { Context } from "./context/context";
import { PALABROS } from "./questions";

const KeyboardKey = ({myKey})=>{
    const {randomNumber,nextPhase,tries,phase,hiddenLetters, setLetter} = useContext(Context),
    ref = useRef(null),
    play = function({
        word,
        key        
    }){
        let pos =0,
        index = word.indexOf(key,pos),
        results = JSON.parse(JSON.stringify(hiddenLetters));

        while(index !=-1 ){
            
            results[index]=key;
            pos=index+1;
            index = word.indexOf(key,pos);
        }
        setLetter(results);
    },
    handleClick = ()=>{
        if(!(tries===phase)){
            if(PALABROS[randomNumber].palabro.indexOf(myKey)===-1){
                ref.current.classList.add("bg-red");

                nextPhase();
            }else{
                ref.current.classList.add("bg-green");

                play({
                    word:PALABROS[randomNumber].palabro,
                    key:myKey.toUpperCase()
                });
            }
            ref.current.disabled=true;
        }
    };
    useEffect(()=>{
        if(phase===1){
            ref.current.disabled=false;
        }
    },[phase]);
    useEffect(()=>{
        if(phase===1){
            ref.current.classList.remove("bg-green");
        }
    },[phase]);
    useEffect(()=>{
        if(phase===1){
            ref.current.classList.remove("bg-red");
        }
    },[phase])
    return(<button className="keyboard__key" onClick={handleClick} ref={ref}>{myKey}</button>);
};
export default KeyboardKey;