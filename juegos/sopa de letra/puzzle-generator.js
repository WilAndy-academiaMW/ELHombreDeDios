export function generateWordSearchPuzzle() {
    const words = [
        'PERRO', 'GATO', 'CASA', 'LIBRO', 'ÁRBOL', 
        'SOL', 'LUZ', 'MAR', 'LUNA', 'FLOR','AMAZON'
    ];
    
    const boardSize = 10;
    const board = Array.from({ length: boardSize }, () => 
        Array.from({ length: boardSize }, () => 
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        )
    );
    
    // Place words in the board (simplified placement)
    words.forEach(word => {
        const directions = [
            [0, 1],   // Horizontal
            [1, 0],   // Vertical
            [1, 1],   // Diagonal
            [-1, 1]   // Anti-diagonal
        ];
        
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const startRow = Math.floor(Math.random() * boardSize);
        const startCol = Math.floor(Math.random() * boardSize);
        
        for (let i = 0; i < word.length; i++) {
            const row = startRow + i * direction[0];
            const col = startCol + i * direction[1];
            
            if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
                board[row][col] = word[i];
            }
        }
    });
    
    return { board, words };
}