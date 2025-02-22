export function crearBomba(scene, posiciones) {
    const bombas = scene.physics.add.group();

    posiciones.forEach(pos => {
        let bomba = bombas.create(pos.x, pos.y, 'bomba');
        bomba.setCollideWorldBounds(true);
        bomba.setBounce(1, 0); // Rebote solo horizontal
        bomba.setVelocityX(Phaser.Math.Between(-200, 200)); // Velocidad horizontal aleatoria
        bomba.setVelocityY(0); // Sin velocidad vertical
    });

    return bombas;
}

export function configurarColisionesBomba(scene, player, bombas, platforms) {
    scene.physics.add.collider(bombas, platforms);
    scene.physics.add.collider(player, bombas, hitBomba, null, scene);
}

function hitBomba(player, bomba) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    player.setVelocity(0); // Detenemos el movimiento del jugador

    // Mostrar mensaje de "End Game" en el centro del canvas
    const width = this.sys.game.config.width;
    const height = this.sys.game.config.height;
    
    const endGameText = this.add.text(width / 2, height / 2, 'End Game', {
        fontSize: '64px',
        fill: '#ff0000',
        fontStyle: 'bold'
    });
    endGameText.setOrigin(0.5);

    // Añadir botón para reiniciar el juego
    const restartButton = this.add.text(width / 2, height / 2 + 100, 'Restart', {
        fontSize: '32px',
        fill: '#ffffff',
        backgroundColor: '#000000',
        padding: {
            left: 10,
            right: 10,
            top: 5,
            bottom: 5
        }
    }).setInteractive().on('pointerdown', () => {
        document.body.style.cursor = 'url(https://cdnjs.cloudflare.com/ajax/libs/cur/2.0.0/icons/ponies.cur), auto'; // Cambiar el cursor a ponis
        reiniciarJuego(this);
    });
    restartButton.setOrigin(0.5);
}

function reiniciarJuego(scene) {
    scene.scene.restart(); // Reiniciar la escena
}
