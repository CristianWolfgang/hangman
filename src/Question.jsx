import {useContext, useEffect} from "react";
import "./question.css";
import { Context } from "./context/context";
import { PALABROS } from "./questions";
const Question = ()=>{
    // debugger;
    const {randomNumber,hiddenLetters} = useContext(Context),
    {pregunta} = PALABROS[randomNumber],
    myHiddenLetters = hiddenLetters.map((letter,index)=>{
        return (<div className="hidden__letter" key={index} >{letter}</div>);
    });
    
    return(
        <div className="question__container">
            <p>{pregunta}</p>
            <div className="hidden__letters-container">
                {myHiddenLetters}
            </div>
        </div>
    );
};
export default Question;