import React from 'react';
import { Button } from 'react-bootstrap';

const StatusMessage = ({ status, onRestart }) => {
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
    <div className="status-message">
      <p>{getMessage()}</p>
      {(status === 'won' || status === 'lost') && (
        <Button onClick={onRestart}>Restart</Button>
      )}
    </div>
  );
};

export default StatusMessage;
