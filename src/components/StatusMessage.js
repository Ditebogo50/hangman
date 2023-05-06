import React from 'react';
import { Button } from 'react-bootstrap';

// StatusMessage component receives status and onRestart as props
const StatusMessage = ({ status, onRestart }) => {
  // Function to determine the appropriate message based on the game status
  const getMessage = () => {
    switch (status) {
      case 'won':
        return 'Congratulations! You won!';
      case 'lost':
        return 'Sorry, you lost!';
      default:
        return '';
    }
  };

  return (
    // Render a div with the "status-message" class
    <div className="status-message">
      {/* Display the message based on the game status */}
      <p>{getMessage()}</p>
      {/* Render a "Restart" button only if the game is won or lost */}
      {(status === 'won' || status === 'lost') && (
        <Button onClick={onRestart}>Restart</Button>
      )}
    </div>
  );
};

export default StatusMessage;
