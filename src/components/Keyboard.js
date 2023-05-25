import React from 'react';

// Keyboard component receives onLetterClick and guessedLetters as props
const Keyboard = ({ onLetterClick, guessedLetters }) => {
  // Define the alphabet as a string
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    // Render a div with the "keyboard" class
    <div className="keyboard">
      {/* Split the alphabet string into an array and map through each letter */}
      {alphabet.split('').map((letter) => (
        // Render a button for each letter
        <button
          key={letter} // Set a unique key for each button using the letter itself
          onClick={() => onLetterClick(letter)} // Call the onLetterClick function with the current letter when the button is clicked
          disabled={guessedLetters.includes(letter)} // Disable the button if the letter has already been guessed
        >

        {/* Display the letter on the button*/}
          {letter} 
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
