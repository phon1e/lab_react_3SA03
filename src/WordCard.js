import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
   let word = given_word.toUpperCase()
   let chars = _.shuffle(Array.from(word))
   return {
      word,
      chars,
      attempt: 1,
      guess: '',
      completed: false
   }
  }

export default function WordCard(props){
    
   const [state, setState] = useState(prepareStateFromWord(props.value))
   const lose = [" Try again huh?", "You can do this man", "Cmon man you can do this!", "Try again"]
   const win = ["YOU WIN !", "YOU WIN NICE!", "Correct ! ", "Good job! "]

   const randL = lose[Math.floor(Math.random() * lose.length)];
   const randW = win[Math.floor(Math.random() * win.length)];

   const activationHandler = (c) => {
      console.log(`${c} has been activated.`)
   
      let guess = state.guess + c
      setState({...state, guess})
   
      if(guess.length == state.word.length){
         if(guess == state.word){
            console.log('yeah!')
            setState({...state, guess: '', completed: true, attempt: state.attempt + 1})
            document.getElementById("result").innerHTML = '' + randW;
            document.getElementById("attempt").innerHTML = `Attempt: ${state.attempt}`;
         }else{
            console.log('reset')
            setState({...state, guess: '', attempt: state.attempt + 1})
            document.getElementById("result").innerHTML = ' ' + randL;
            document.getElementById("attempt").innerHTML = `Attempt: ${state.attempt}`;
         }
      }
      //console.log(guess)
   }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler = {activationHandler} attempt={state.attempt}/>)
            }
        </div>
    );
}
