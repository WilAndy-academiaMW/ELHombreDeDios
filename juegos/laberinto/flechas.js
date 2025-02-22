document.getElementById('up').addEventListener('click', () => move('up'));
document.getElementById('down').addEventListener('click', () => move('down'));
document.getElementById('left').addEventListener('click', () => move('left'));
document.getElementById('right').addEventListener('click', () => move('right'));

function move(direction) {
    console.log(`Move ${direction}`);
    // Aquí puedes agregar la lógica para mover los personajes
}
