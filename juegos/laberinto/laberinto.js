import { createPlatforms } from "./laberinto/plataforma.js";
import { crearBomba, configurarColisionesBomba } from "./laberinto/bombas.js";
import { crearPersonaje, actualizarPersonaje } from "./laberinto/avatar.js";
import { crearCofres,configurarColisionesCofres} from "./laberinto/cofre.js";


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 530,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var player;
var platforms;
var cursors;
var bombas;
var cofre;

function preload() {
    this.load.spritesheet('dude', 'img/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('platform', 'img/platform.png');
    this.load.image('platformV', 'img/platformV.png');
    this.load.image('platformROJA', 'img/platformDos.png');
    this.load.image('rojo', 'img/platformVDOS.png');
    this.load.image('cofre', 'img/cofre.png');
    this.load.image('bomba', 'img/bomb.png'); // Asegúrate de que el nombre es correcto
}

function create() {
    player = crearPersonaje(this);
    cursors = this.input.keyboard.createCursorKeys();

    // Crear las plataformas usando la función importada
    platforms = createPlatforms(this);

    // Posiciones específicas para las bombas
   const posicionesBombas = [
        { x: 150, y: 530 },
    //    { x: 300, y: 500 },
      //  { x: 300, y: 500 }
    ];

    // Crear las bombas usando la función importada
    bombas = crearBomba(this, posicionesBombas);

    //Crear y configurar el cofre
    cofre = crearCofres(this);
    configurarColisionesCofres(this, player, cofre);

    // Configurar las colisiones para las bombas
    configurarColisionesBomba(this, player, bombas, platforms);

    // Detectar colisiones entre el jugador y las plataformas
    this.physics.add.collider(player, platforms);
}



function update() {
    actualizarPersonaje(player, cursors);
}