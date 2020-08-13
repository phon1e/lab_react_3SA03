import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "Apple", "Banana", "World", "Nintendo", "Sony", "Android"];

function App() {

const rand = word[Math.floor(Math.random() * word.length)];

 return (
  <div>
    <h1>! Welcome to Card Game !</h1>
    <h2> Let Guess </h2>
    <WordCard value={rand}/>
  </div>
 );
}

export default App;