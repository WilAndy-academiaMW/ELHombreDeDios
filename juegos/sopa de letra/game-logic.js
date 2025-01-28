export function handleCellSelection(cell, row, col, selectedCells, wordList, foundWords) {
    const isAlreadySelected = selectedCells.some(
        selected => selected.row === row && selected.col === col
    );
    
    if (isAlreadySelected) {
        // Deselect cell
        selectedCells = selectedCells.filter(
            selected => !(selected.row === row && selected.col === col)
        );
        cell.classList.remove('selected');
        return { wordFound: false };
    }
    
    selectedCells.push({ row, col, cell });
    
    // Check if selected cells form a word
    if (selectedCells.length > 1) {
        const selectedWord = getSelectedWord(selectedCells);
        
        if (wordList.includes(selectedWord) && !foundWords.has(selectedWord)) {
            foundWords.add(selectedWord);
            return { wordFound: true, word: selectedWord };
        }
    }
    
    return { wordFound: false };
}

function getSelectedWord(selectedCells) {
    return selectedCells
        .map(cell => cell.cell.textContent)
        .join('');
}