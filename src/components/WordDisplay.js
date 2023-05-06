import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;