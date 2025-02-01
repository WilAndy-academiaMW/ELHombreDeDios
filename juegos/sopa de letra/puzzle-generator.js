const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  let grid = [];
  let gridSize = 10; // Tamaño de la cuadrícula (10x10)
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Letras disponibles
  let words = ['HOLA', 'MUNDO', 'JUEGO']; // Palabras ocultas
  let selectedCells = [];
  
  function preload() {
    // Cargar recursos si los hubiera (imágenes, sonidos, etc.)
  }
  
  function create() {
    // Crear una cuadrícula aleatoria con letras
    for (let i = 0; i < gridSize; i++) {
      grid[i] = [];
      for (let j = 0; j < gridSize; j++) {
        let randomLetter = letters[Math.floor(Math.random() * letters.length)];
        grid[i][j] = randomLetter;
  
        // Dibujar las letras en la pantalla
        this.add.text(j * 50 + 25, i * 50 + 25, randomLetter, {
          font: '24px Arial',
          fill: '#000000'
        }).setOrigin(0.5);
      }
    }
  
    // Colocar las palabras ocultas en la cuadrícula
    placeWordsInGrid();
  
    // Detectar clics en las celdas
    this.input.on('pointerdown', handleCellClick);
  }
  
  function update() {
    // Actualización continua del juego (si es necesario)
  }
  
  function placeWordsInGrid() {
    words.forEach(word => {
      let placed = false;
  
      while (!placed) {
        let direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        let row = Math.floor(Math.random() * gridSize);
        let col = Math.floor(Math.random() * gridSize);
  
        if (canPlaceWord(word, row, col, direction)) {
          placeWord(word, row, col, direction);
          placed = true;
        }
      }
    });
  }
  
  function canPlaceWord(word, row, col, direction) {
    if (direction === 'horizontal') {
      if (col + word.length > gridSize) return false;
      for (let i = 0; i < word.length; i++) {
        if (grid[row][col + i] !== '' && grid[row][col + i] !== word[i]) return false;
      }
    } else if (direction === 'vertical') {
      if (row + word.length > gridSize) return false;
      for (let i = 0; i < word.length; i++) {
        if (grid[row + i][col] !== '' && grid[row + i][col] !== word[i]) return false;
      }
    }
    return true;
  }
  
  function placeWord(word, row, col, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < word.length; i++) {
        grid[row][col + i] = word[i];
      }
    } else if (direction === 'vertical') {
      for (let i = 0; i < word.length; i++) {
        grid[row + i][col] = word[i];
      }
    }
  }
  
  function handleCellClick(pointer) {
    let col = Math.floor(pointer.x / 50);
    let row = Math.floor(pointer.y / 50);
  
    if (col >= 0 && col < gridSize && row >= 0 && row < gridSize) {
      let cell = { row, col };
      if (selectedCells.length > 0) {
        let lastCell = selectedCells[selectedCells.length - 1];
        if (Math.abs(lastCell.row - cell.row) + Math.abs(lastCell.col - cell.col) === 1) {
          selectedCells.push(cell);
        }
      } else {
        selectedCells.push(cell);
      }
  
      highlightSelectedCells();
      checkForWord();
    }
  }
  
  function highlightSelectedCells() {
    // Limpiar resaltados anteriores
    this.children.each(child => {
      if (child.type === 'Text') {
        child.setFill('#000000');
      }
    });
  
    // Resaltar las celdas seleccionadas
    selectedCells.forEach(cell => {
      let text = this.children.getChildren().find(child => {
        return child.x === cell.col * 50 + 25 && child.y === cell.row * 50 + 25;
      });
      if (text) text.setFill('#ff0000');
    });
  }
  
  function checkForWord() {
    let selectedWord = '';
    selectedCells.forEach(cell => {
      selectedWord += grid[cell.row][cell.col];
    });
  
    if (words.includes(selectedWord)) {
      alert(`¡Encontraste la palabra "${selectedWord}"!`);
      selectedCells = [];
      highlightSelectedCells();
    }
  }