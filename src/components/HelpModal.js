import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const HelpModal = () => {
    // State variable to control the visibility of the modal
    const [show, setShow] = useState(false);

    // Functions to handle opening and closing the modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            // Render a "Help" button that opens the modal when clicked
            <Button variant="primary" onClick={handleShow}>
                Help
            </Button>
            // Render the modal with the game rules
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hangman Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Hangman is a classic word-guessing game. The computer will choose a random word, and your goal is to guess
                        the word by suggesting letters one at a time.
                    </p>
                    <p>
                        If you guess a correct letter, that letter will be revealed in the word. If you guess an incorrect letter,
                        a part of the hangman will be drawn, and you will lose one attempt. You have a total of 6 attempts to guess
                        the word before the hangman is completed.
                    </p>
                    <p>If you guess the word before running out of attempts, you win! Otherwise,
                        you lose the game.</p>
                    <p>
                        To guess a letter, simply click on the letter from the on-screen keyboard. The guessed letters will be
                        disabled, and you can't guess the same letter twice.
                    </p>
                    <p>
                        If you'd like to restart the game at any time, click on the "Restart" button after winning or losing the game.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    // Render a "Close" button that closes the modal when clicked
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default HelpModal;
