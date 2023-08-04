
import { useContext } from 'react';
import './App.css'
import Keyboard from './Keyboard'
import HanginMan from './HanginMan'
import Question from './Question';
import { PALABROS } from './questions';
import { Context } from './context/context';

function App() {
  const {random} = useContext(Context);
  return (
    <>
      <Question questionOBJ={PALABROS[random]}/>
      <Keyboard/>
      <HanginMan/>
      <div className='header'>Created by Cristian Wolfgang</div>

    </>
  )
}

export default App
