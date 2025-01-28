import { generateWordSearchPuzzle } from './puzzle-generator.js';
import { createGameBoard } from './board-renderer.js';
import { handleCellSelection } from './game-logic.js';

class WordSearchGame {
    constructor() {
        this.gameBoard = document.getElementById('game-board');
        this.wordListContainer = document.getElementById('word-list');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.timerDisplay = document.getElementById('time');
        
        this.wordList = [];
        this.selectedCells = [];
        this.foundWords = new Set();
        
        this.newGameBtn.addEventListener('click', () => this.startNewGame());
        this.startNewGame();
    }
    
    startNewGame() {
        // Reset game state
        this.selectedCells = [];
        this.foundWords.clear();
        
        // Generate new puzzle
        const { board, words } = generateWordSearchPuzzle();
        this.wordList = words;
        
        // Render board and word list
        createGameBoard(this.gameBoard, board, this.onCellSelect.bind(this));
        this.renderWordList();
        
        this.startTimer();
    }
    
    onCellSelect(cell, row, col) {
        const result = handleCellSelection(
            cell, 
            row, 
            col, 
            this.selectedCells, 
            this.wordList,
            this.foundWords
        );
        
        if (result.wordFound) {
            this.markWordAsFound(result.word);
        }
        
        if (this.foundWords.size === this.wordList.length) {
            this.gameWon();
        }
    }
    
    markWordAsFound(word) {
        const wordElement = Array.from(this.wordListContainer.children)
            .find(el => el.textContent === word);
        
        if (wordElement) {
            wordElement.classList.add('found');
        }
    }
    
    renderWordList() {
        this.wordListContainer.innerHTML = '';
        this.wordList.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.textContent = word;
            wordElement.classList.add('word-item');
            this.wordListContainer.appendChild(wordElement);
        });
    }
    
    startTimer() {
        let seconds = 0;
        this.timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            this.timerDisplay.textContent = 
                `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
    
    gameWon() {
        clearInterval(this.timer);
        alert('¡Felicidades! Has encontrado todas las palabras ');
    }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new WordSearchGame();
});