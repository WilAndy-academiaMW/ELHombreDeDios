const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: [
            { texto: "A: Madrid", correcta: false },
            { texto: "B: Roma", correcta: false },
            { texto: "C: París", correcta: true },
            { texto: "D: Berlín", correcta: false }
        ],
        plataformaID: 'platformRed1'
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        respuestas: [
            { texto: "A: Valencia", correcta: false },
            { texto: "B: Barquisimeto", correcta: false },
            { texto: "C: Maracay", correcta: false },
            { texto: "D: Caracas", correcta: true }
        ],
        plataformaID: 'platformRed2'
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        respuestas: [
            { texto: "A: Valencia", correcta: false },
            { texto: "B: Barquisimeto", correcta: false },
            { texto: "C: Maracay", correcta: false },
            { texto: "D: Caracas", correcta: true }
        ],
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        respuestas: [
            { texto: "A: Valencia", correcta: false },
            { texto: "B: Barquisimeto", correcta: false },
            { texto: "C: Maracay", correcta: false },
            { texto: "D: Caracas", correcta: true }
        ],
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        respuestas: [
            { texto: "A: Valencia", correcta: false },
            { texto: "B: Barquisimeto", correcta: false },
            { texto: "C: Maracay", correcta: false },
            { texto: "D: Caracas", correcta: true }
        ],
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        respuestas: [
            { texto: "A: Valencia", correcta: false },
            { texto: "B: Barquisimeto", correcta: false },
            { texto: "C: Maracay", correcta: false },
            { texto: "D: Caracas", correcta: true }
        ],
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        respuestas: [
            { texto: "A: Valencia", correcta: false },
            { texto: "B: Barquisimeto", correcta: false },
            { texto: "C: Maracay", correcta: false },
            { texto: "D: Caracas", correcta: true }
        ],
    },
    // Agrega más preguntas según necesites
];

export function crearCofres(scene) {
    const posicionesCofres = [
         { x: 190, y: 50, plataformaID: 'platformRedv1' },
          { x: 360, y: 50, plataformaID: 'platformRed1' },
          { x: 440, y: 210, plataformaID: 'platformRed2' },
          { x: 340, y: 355, plataformaID: 'platformRedv2' },
          { x: 190, y: 210, plataformaID: 'platformRed3' },      
          { x: 190, y: 210, plataformaID: 'platformRed4' },
          { x: 125, y: 295, plataformaID: 'platformRed4' },
          { x: 55, y: 395, plataformaID: 'platformRed4' },
          { x: 240, y:430, plataformaID: '' },
          { x: 525, y:290, plataformaID: '' },
          { x: 605, y:470, plataformaID: '' },
          { x: 665, y:380, plataformaID: '' },
          { x: 740, y:290, plataformaID: '' },
          { x: 720, y:210, plataformaID: '' },
          { x: 530, y:50, plataformaID: '' },
        // Agrega más posiciones según necesites
    ];

    const cofres = posicionesCofres.map(posicion => {
        const cofre = scene.physics.add.staticSprite(posicion.x, posicion.y, 'cofre');
        cofre.mostrarPregunta = false; // Agregar una propiedad para verificar si la pregunta ya se mostró
        cofre.plataformaID = posicion.plataformaID; // Asignar el ID de la plataforma al cofre
        
      

        // Animación de giro
        scene.tweens.add({
            targets: cofre,
            angle: { from: -5, to: 5 }, // Ajusta los valores para la rotación
            duration: 2000, // Duración en milisegundos
            yoyo: true, // Va y viene
            repeat: -1, // Repetir indefinidamente
            ease: 'Sine.easeInOut'
        });

        // Animación de movimiento vertical
        scene.tweens.add({
            targets: cofre,
            y: { from: posicion.y - 1, to: posicion.y + 1 }, // Ajusta los valores para el movimiento vertical
            duration: 1000, // Duración en milisegundos
            yoyo: true, // Va y viene
            repeat: -1, // Repetir indefinidamente
            ease: 'Sine.easeInOut'
        });  
     
        return cofre;
    });
    return cofres;
}

function mostrarPregunta(scene, preguntaIndex, cofre) {
    const { pregunta, respuestas, plataformaID } = preguntas[preguntaIndex];
    let preguntaMostrada = true;

    console.log(`Mostrando pregunta: ${pregunta}`);

    // Mostrar la pregunta en pantalla
    const textoPregunta = scene.add.text(400, 200, pregunta, { fontSize: '32px', fill: '#fff', fontStyle: 'bold' }).setOrigin(0.5);

    // Mostrar las respuestas y configurar eventos
    const respuestaTexts = respuestas.map((respuesta, index) => {
        const textoRespuesta = scene.add.text(400, 250 + index * 40, respuesta.texto, { fontSize: '24px', fill: '#fff' }).setOrigin(0.5).setInteractive();

        textoRespuesta.on('pointerdown', () => {
            if (preguntaMostrada) {
                console.log(`Respuesta seleccionada: ${respuesta.texto}`);
                if (respuesta.correcta) {
                    // Respuesta correcta
                    textoRespuesta.setColor('#00ff00'); // Cambiar color a verde
                    console.log(`Respuesta correcta: ${respuesta.texto}`);

                    // Destruir la pregunta y las respuestas
                    textoPregunta.destroy();
                    respuestaTexts.forEach(texto => texto.destroy());

                    preguntaMostrada = false; // Evitar interacciones adicionales

                    // Eliminar el cofre después de manejar la pregunta
                    cofre.destroy();

                    // Eliminar la plataforma correspondiente al cofre
                    const plataforma = scene.physics.world.staticBodies.entries.find(body => body.gameObject.name === cofre.plataformaID);
                    if (plataforma) {
                        plataforma.gameObject.destroy();
                        console.log(`Plataforma eliminada: ${cofre.plataformaID}`);
                    } else {
                        console.log(`Plataforma no encontrada: ${cofre.plataformaID}`);
                    }
                } else {
                    // Respuesta incorrecta
                    textoRespuesta.setColor('#ff0000'); // Cambiar color a rojo
                    console.log(`Respuesta incorrecta: ${respuesta.texto}`);
                }
            }
        });

        return textoRespuesta;
    });
}

export function configurarColisionesCofres(scene, player, cofres) {
    cofres.forEach((cofre, index) => {
        scene.physics.add.collider(player, cofre, () => {
            if (!cofre.mostrarPregunta) {
                console.log(`Colisión con cofre en: (${cofre.x}, ${cofre.y})`);
                // Mostrar la pregunta correspondiente al cofre
                mostrarPregunta(scene, index, cofre);
                cofre.mostrarPregunta = true; // Evitar que la pregunta se muestre múltiples veces
            }
        });
    });
}
