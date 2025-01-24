document.addEventListener('DOMContentLoaded', () => {
const indices = [
    {
        pregunta: "¿Quien fue el primer rey de israel?",
        respuestas: ["David", "Josias", "Esau", "Aca"],
        correcta: 2
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
    
    
  ];
  
 
  
      
  
              let preguntaActual = 0;
              let puntos = 0;
  
              function mostrarPregunta() {
                  const pregunta = indices[preguntaActual];
                  document.getElementById('preguntaONE').textContent = pregunta.pregunta;
  
                  pregunta.respuestas.forEach((respuesta, index) => {
                      const respuestaElement = document.getElementById(`respuesta${index + 1}`);
                      respuestaElement.textContent = respuesta;
                      respuestaElement.style.background = ''; // Restablecer el fondo antes de asignar onclick
                      respuestaElement.style.visibility = 'visible'; // Restablecer la visibilidad
                      respuestaElement.onclick = () => verificarRespuesta(index);
                  });
              }
  
              function verificarRespuesta(index) {
                  const respuestaElement = document.getElementById(`respuesta${index + 1}`);
                  
                  if (index === indices[preguntaActual].correcta) {
                      puntos++;
                      // Cambiar el fondo de la respuesta correcta
                      respuestaElement.style.background = 'green';
                      
                      // Mover la clase active a la siguiente caja
                      const currentActive = document.querySelector('.prize-step.active');
                      if (currentActive) {
                          currentActive.classList.remove('active');
                          const nextActive = currentActive.previousElementSibling;
                          if (nextActive) {
                              nextActive.classList.add('active');
                          }
                      }
  
                      preguntaActual++;
                      if (preguntaActual < indices.length) {
                          setTimeout(() => {
                              mostrarPregunta();
                          }, 1000); // 1000 milisegundos = 1 segundo
                      } else {
                          alert("¡Felicidades! Has completado el quiz.");
                      }
                  } else {
                      // Cambiar el fondo de la respuesta incorrecta
                      respuestaElement.style.background = 'red';
                      setTimeout(() => {
                          respuestaElement.style.background = ''; // Restablecer el fondo después de un breve período
                      }, 1000); // 1000 milisegundos = 1 segundo
                  }
              }
  
              // Añadir el evento click al botón de ayuda
              let ayudaUsada = false; // Variable de estado para controlar el uso de la ayuda

              document.getElementById('help-button').addEventListener('click', usarAyuda);
              
              function usarAyuda() {
                  if (ayudaUsada) return; // Si la ayuda ya fue usada, no hacer nada
              
                  const pregunta = indices[preguntaActual];
                  const incorrectas = [];
              
                  // Recopilar índices de respuestas incorrectas
                  pregunta.respuestas.forEach((respuesta, index) => {
                      if (index !== pregunta.correcta) {
                          incorrectas.push(index);
                      }
                  });
              
                  // Mezclar las respuestas incorrectas y eliminar dos
                  while (incorrectas.length > 2) {
                      const eliminar = Math.floor(Math.random() * incorrectas.length);
                      incorrectas.splice(eliminar, 1);
                  }
              
                  // Ocultar dos respuestas incorrectas
                  incorrectas.forEach(index => {
                      const respuestaElement = document.getElementById(`respuesta${index + 1}`);
                      respuestaElement.style.visibility = 'hidden';
                  });
              
                  // Desactivar el botón de ayuda después de usarlo
                  document.getElementById('help-button').disabled = true;
                  
                  // Establecer que la ayuda ha sido usada
                  ayudaUsada = true;
              }
              



            
  
              mostrarPregunta();
              
          });
      
  
  