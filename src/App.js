import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "Apple", "Banana", "World", "Nintendo", "Sony", "Android"," GOOGLE", "Fackbook", "twitter", "keyborad", "controller","headphone"];

function App() {
  
const rand = word[Math.floor(Math.random() * word.length)]; // rand word

const NewGame = () => {
  window.location.reload(false);
}

 return (
  <div className ="App">
    <h1>! Welcome to Card Game !</h1>
    <h2> Let Guess </h2>
    <WordCard value={rand}/>
    <button id = "Newgame" className="button" onClick={NewGame}> New Game </button>
     <h2 id="inputAnswer"></h2>
     <h2 id="result"></h2>
     <h2 id="attempt"></h2>
  </div>
  
 );
}

export default App;