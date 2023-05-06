import React from 'react';

// WordDisplay component receives word and guessedLetters as props
const WordDisplay = ({ word, guessedLetters }) => {
  return (
    // Render a div to contain the word display
    <div>
      {/* Split the word into an array of letters and map through each letter */}
      {word.split('').map((letter, index) => (
        // Render a span for each letter with a unique key using its index
        <span key={index} className="letter">
          {/* If the letter has been guessed, display the letter; otherwise, display an underscore */}
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
