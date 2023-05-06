# Hangman Game

A simple Hangman game built using React.

## Rules of the Game

1. The game chooses a random word from a dictionary.
2. The player tries to guess the word by suggesting individual letters.
3. If the suggested letter is in the word, all occurrences of the letter are revealed.
4. If the suggested letter is not in the word, the player loses an attempt.
5. The player has a total of 11 attempts to guess the word correctly.
6. If the player guesses the word before running out of attempts, they win.
7. If the player runs out of attempts, they lose.

## Installation and Running the App

To install and run the Hangman game on your local machine, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Ditebogo50/hangman
   ```

3. Navigate to the project directory:
   ```bash
   cd hangman
   ```

4. Install dependencies
    ```bash
    npm install
    ```

5. Start development server
    ```bash
    npm start
    ```
This command will open the Hangman game in your default web browser. If the browser does not open automatically, visit http://localhost:3000 to play the game.
