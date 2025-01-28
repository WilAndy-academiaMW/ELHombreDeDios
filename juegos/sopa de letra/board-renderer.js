export function createGameBoard(gameBoard, board, onCellSelect) {
    gameBoard.innerHTML = '';
    
    board.forEach((row, rowIndex) => {
        row.forEach((letter, colIndex) => {
            const cell = document.createElement('div');
            cell.textContent = letter;
            cell.classList.add('letter-cell');
            
            cell.addEventListener('click', () => {
                cell.classList.toggle('selected');
                onCellSelect(cell, rowIndex, colIndex);
            });
            
            gameBoard.appendChild(cell);
        });
    });
}