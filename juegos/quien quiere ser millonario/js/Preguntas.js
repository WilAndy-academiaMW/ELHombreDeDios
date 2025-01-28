document.addEventListener('DOMContentLoaded', () => {
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Francia?",
            respuestas: ["París", "Londres", "Berlín", "Madrid"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el río más largo del mundo?",
            respuestas: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el planeta más grande del sistema solar?",
            respuestas: ["Tierra", "Marte", "Júpiter", "Saturno"],
            correcta: 2
        },
        {
            pregunta: "¿Quién pintó la Mona Lisa?",
            respuestas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el metal más abundante en la Tierra?",
            respuestas: ["Hierro", "Aluminio", "Cobre", "Plata"],
            correcta: 1
        },
        {
            pregunta: "¿En qué año llegó el hombre a la Luna?",
            respuestas: ["1965", "1969", "1972", "1975"],
            correcta: 1
        },
        {
            pregunta: "¿Cuál es el océano más grande del mundo?",
            respuestas: ["Atlántico", "Índico", "Ártico", "Pacífico"],
            correcta: 3
        },
        {
            pregunta: "¿Quién escribió 'Cien años de soledad'?",
            respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Jorge Luis Borges"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el país más grande del mundo?",
            respuestas: ["Canadá", "China", "Estados Unidos", "Rusia"],
            correcta: 3
        },
        {
            pregunta: "¿Cuál es el idioma más hablado en el mundo?",
            respuestas: ["Inglés", "Español", "Chino mandarín", "Hindú"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el animal terrestre más rápido?",
            respuestas: ["León", "Guepardo", "Tigre", "Leopardo"],
            correcta: 1
        },
        {
            pregunta: "¿Cuál es el elemento químico con el símbolo 'O'?",
            respuestas: ["Oro", "Oxígeno", "Osmio", "Oganesón"],
            correcta: 1
        },
        {
            pregunta: "¿En qué continente se encuentra Egipto?",
            respuestas: ["Asia", "África", "Europa", "América"],
            correcta: 1
        }
    ];

    let preguntaActual = 0;
    let puntos = 0;

    let please = document.getElementById('ayuda');

    
   
    function mostrarPregunta() {
        if (preguntaActual < preguntas.length) {
            const quiz = preguntas[preguntaActual];
            const preguntaElement = document.querySelector('.pregunta');
            
            if (preguntaElement && quiz) {
                preguntaElement.textContent = quiz.pregunta;
            } else {
                console.error("No se pudo encontrar el elemento de la pregunta o quiz no está definido.");
            }

            quiz.respuestas.forEach((respuesta, index) => {
                const respuestaElement = document.getElementById(`respuesta${index + 1}`);
                if (respuestaElement) {
                    respuestaElement.textContent = respuesta;
                    respuestaElement.onclick = () => verificarRespuesta(index);
                }
            });
        } else {
            console.error("El índice preguntaActual está fuera de los límites del array preguntas.");
        }
    }

    function actualizarPuntuacion() {
        const puntuacionElement = document.getElementById('puntuacion');
        if (puntuacionElement) {
            puntuacionElement.textContent = `Puntuación: ${puntos}`;
        }
    }

    let timeouts = []; // Array para almacenar los temporizadores

    function Pista() {
        const quiz = preguntas[preguntaActual];
        const incorrectas = quiz.respuestas
            .map((respuesta, index) => ({ respuesta, index }))
            .filter(item => item.index !== quiz.correcta);
    
        const respuestasIncorrectas = incorrectas.sort(() => 0.5 - Math.random()).slice(0, 2);
    
        // Cancelar todos los temporizadores activos
        timeouts.forEach(clearTimeout);
        timeouts = [];
    
        respuestasIncorrectas.forEach(item => {
            const respuestaElement = document.getElementById(`respuesta${item.index + 1}`);
            respuestaElement.onclick = null;
            respuestaElement.style.backgroundColor = '';
            respuestaElement.classList.add('fondo-rojo');
    
            // Agregar un temporizador para eliminar el estilo después de 3 segundos
            const timeout = setTimeout(() => {
                respuestaElement.classList.remove('fondo-rojo');
            }, 3000);
            timeouts.push(timeout); // Agregar el temporizador al array
        });
    }
    
    please.addEventListener('click', function() {
        Pista(); // Llama a la función Pista cuando se hace clic en el botón
      });


    function verificarRespuesta(index) {
        if (index === preguntas[preguntaActual].correcta) {
            puntos++;

            const respuestaCorrectaElement = document.getElementById(`respuesta${index + 1}`); // Definir el elemento
            respuestaCorrectaElement.style.color = 'blue'; // Cambiar color del texto a azul
            respuestaCorrectaElement.style.fontSize = '30px'; 

            actualizarPuntuacion();
            preguntaActual++;
            if (preguntaActual < preguntas.length) {
                setTimeout(() => {
                    respuestaCorrectaElement.style.color = ''; // Restaurar color original del texto
                    respuestaCorrectaElement.style.fontSize = '';
                    mostrarPregunta();
                }, 3000); // 3000 milisegundos = 3 segundos
            } else {
                alert("¡Felicidades! Has completado el quiz.");
            }
        } else {
            const respuestaIncorrectaElement = document.getElementById(`respuesta${index + 1}`);
            respuestaIncorrectaElement.style.color = 'red'; // Cambiar color del texto a rojo
            respuestaIncorrectaElement.style.fontSize = '30px'; // Cambiar tamaño de fuente a 30px
            
            setTimeout(() => {
                respuestaIncorrectaElement.style.color = ''; // Restaurar color original
                respuestaIncorrectaElement.style.fontSize = ''; // Restaurar tamaño de fuente original
            }, 1000); // 1000 milisegundos = 1 segundo
        }
    }

   

    mostrarPregunta();
    actualizarPuntuacion();
});

