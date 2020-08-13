import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "Apple", "Banana", "World", "Nintendo", "Sony", "Android"];

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
  </div>
  
 );
}

export default App;