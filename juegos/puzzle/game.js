// game.js

// Configuración del juego
const config = {
    type: Phaser.AUTO, // Usar WebGL si está disponible, si no, usar Canvas
    width: 1000,       // Ancho del canvas
    height: 800,       // Alto del canvas
    backgroundColor: '#00ff00', // Fondo verde
    scene: {
      preload: preload, // Función para cargar recursos
      create: create,   // Función que se ejecutará al crear la escena
      update: update    // Función que se ejecutará en cada fotograma
    }
  };
  
  // Inicializar el juego
  const game = new Phaser.Game(config);
  
  // Variables globales
  let imagenes;
  let contenedores;
  
  // Función preload: Cargar las imágenes
  function preload() {
    this.load.image('imagen1', '../../enciclopedia/img/amor.png');
    this.load.image('imagen2', '../../enciclopedia/img/DesarrolloP.png');
    this.load.image('imagen3', '../../enciclopedia/img/familia.png');
    this.load.image('imagen4', '../../enciclopedia/img/lider.png');
  }
  
  // Función create
  function create() {
    console.log('¡Canvas creado con éxito!');
  
    // Añadir un panel horizontal
    const panelWidth = this.sys.game.config.width * 0.8; // 80% del ancho del canvas
    const panelHeight = 100; // Alto del panel
    const panelX = (this.sys.game.config.width - panelWidth) / 2; // Centrar horizontalmente
    const panelY = 0; // Colocar en la parte superior
  
    // Crear el panel usando un rectángulo
    const panel = this.add.rectangle(panelX, panelY, panelWidth, panelHeight, 0x000000); // Color negro
    panel.setOrigin(0, 0); // Alinear el panel desde la esquina superior izquierda
  
    console.log('Panel horizontal creado con éxito!');
  
    // Añadir 4 imágenes dentro del panel
    const numImagenes = 4; // Número de imágenes
    const espacioEntreImagenes = 20; // Espacio entre las imágenes (en píxeles)
    const anchoImagen = (panelWidth - (numImagenes - 1) * espacioEntreImagenes) / numImagenes; // Ancho de cada imagen
    const altoImagen = panelHeight; // Alto de cada imagen (100% del panel)
  
    // Posición inicial de la primera imagen
    let imagenX = panelX;
  
    // Crear las imágenes
    imagenes = [];
    for (let i = 1; i <= numImagenes; i++) {
      const imagen = this.add.image(imagenX + anchoImagen / 2, panelY + altoImagen / 2, `imagen${i}`);
      imagen.setDisplaySize(anchoImagen, altoImagen); // Ajustar el tamaño de la imagen
      imagen.setInteractive(); // Hacer la imagen interactiva
      this.input.setDraggable(imagen); // Hacer que la imagen sea arrastrable
      imagenes.push(imagen); // Guardar la imagen en el array
  
      // Actualizar la posición X para la siguiente imagen
      imagenX += anchoImagen + espacioEntreImagenes;
    }
  
    console.log('Imágenes añadidas con éxito!');
  
    // Crear los contenedores
    const contenedorWidth = 150; // Ancho del contenedor
    const contenedorHeight = 150; // Alto del contenedor
    const espacioEntreContenedores = 50; // Espacio entre los contenedores
    const contenedorY = 600; // Posición Y de los contenedores
  
    contenedores = [];
    for (let i = 0; i < 3; i++) {
      const contenedorX = (this.sys.game.config.width - (3 * contenedorWidth + 2 * espacioEntreContenedores)) / 2 + i * (contenedorWidth + espacioEntreContenedores);
      const contenedor = this.add.image(contenedorX, contenedorY, 'contenedor').setInteractive();
      contenedor.setDisplaySize(contenedorWidth, contenedorHeight); // Ajustar el tamaño del contenedor
      contenedores.push(contenedor); // Guardar el contenedor en el array
    }
  
    console.log('Contenedores creados con éxito!');
  
    // Evento para manejar el arrastre
    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX; // Actualizar la posición X de la imagen
      gameObject.y = dragY; // Actualizar la posición Y de la imagen
    });
  
    // Evento para manejar el soltar una imagen en un contenedor
    this.input.on('drop', (pointer, imagen, contenedor) => {
      if (contenedor.getBounds().contains(imagen.x, imagen.y)) {
        imagen.x = contenedor.x; // Centrar la imagen en el contenedor
        imagen.y = contenedor.y;
        console.log('Imagen colocada en el contenedor correcto');
      }
    });
  }
  
  // Función update
  function update() {
    // Lógica de actualización (opcional)
  }


