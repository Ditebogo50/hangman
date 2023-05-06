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
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(10);
  const [gameStatus, setGameStatus] = useState('');

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex].trim().toUpperCase();
  };

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  const handleLetterGuess = (letter) => {
    if (gameStatus !== '' || guessedLetters.includes(letter)) return;

    const updatedGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessedLetters);

    if (!word.includes(letter)) {
      setAttempts((prevAttempts) => prevAttempts - 1);
    } else {
      const revealedWord = word
        .split('')
        .map((char) => (updatedGuessedLetters.includes(char) ? char : null))
        .join('');
      if (revealedWord === word) setGameStatus('won');
    }

    if (attempts - 1 === 0) setGameStatus('lost');
  };

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
