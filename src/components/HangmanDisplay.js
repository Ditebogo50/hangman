import React from 'react';
import hangmanSteps from '../assets/hangmanSteps';

// HangmanDisplay component receives the remaining attempts as a prop
const HangmanDisplay = ({ attempts }) => {
  // Determine the index for the hangmanSteps array by subtracting the remaining attempts from 10
  const stepIndex = 10 - attempts;

  return (
    // Render a div with the "hangman-display" class
    <div className="hangman-display">
      {/*Display the image corresponding to the current step of the hangman, based on the remaining attempts*/}
      <img src={hangmanSteps[stepIndex]} alt="Hangman" />
    </div>
  );
};

export default HangmanDisplay;
