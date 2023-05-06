import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanDisplay from './components/HangmanDisplay';
import HelpModal from './components/HelpModal';
import StatusMessage from './components/StatusMessage';
import './App.css';
import dictionary from './dictionary.json';

function App() {
  // State variables
  const [word, setWord] = useState('');                // The word to be guessed
  const [guessedLetters, setGuessedLetters] = useState([]); // Array of guessed letters
  const [attempts, setAttempts] = useState(10);        // Number of attempts remaining
  const [gameStatus, setGameStatus] = useState('');    // Game status: '' (ongoing), 'won', or 'lost'

  // Function to pick a random word from the dictionary
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex].trim().toUpperCase();
  };

  // Set the initial word when the component mounts
  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  // Function to handle a letter guess
  const handleLetterGuess = (letter) => {
    // Do nothing if the game is over or the letter was already guessed
    if (gameStatus !== '' || guessedLetters.includes(letter)) return;

    const updatedGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessedLetters);

    if (!word.includes(letter)) {
      // Decrement the attempts if the guessed letter is not in the word
      setAttempts((prevAttempts) => prevAttempts - 1);
    } else {
      // Check if the player has won by revealing all the letters in the word
      const revealedWord = word
        .split('')
        .map((char) => (updatedGuessedLetters.includes(char) ? char : null))
        .join('');
      if (revealedWord === word) setGameStatus('won');
    }

    // Check if the player has lost by running out of attempts
    if (attempts - 1 === 0) setGameStatus('lost');
  };

  // Function to restart the game
  const restartGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setAttempts(10);
    setGameStatus('');
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <HangmanDisplay attempts={attempts} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onLetterClick={handleLetterGuess} guessedLetters={guessedLetters} />
      <StatusMessage status={gameStatus} onRestart={restartGame} />
      <HelpModal />
    </div>
  );
}

export default App;
