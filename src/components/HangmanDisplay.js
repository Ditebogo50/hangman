import React from 'react';
import hangmanSteps from '../assets/hangmanSteps';

const HangmanDisplay = ({ attempts }) => {
  return (
    <div className="hangman-display">
      <img src={hangmanSteps[10-attempts]} alt="Hangman" />
    </div>
  );
};

export default HangmanDisplay;
