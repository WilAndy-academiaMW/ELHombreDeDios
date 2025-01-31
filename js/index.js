//slider header pricipal

const elementos = [
    {imgSrc: '../articulos/img/salomon.jpg', nombre: 'Nicolas', apellido: 'Tesla', fondo: 'img/rayo.webp'},
    {imgSrc: '../articulos/img/la sulamita.webp', nombre: 'Nombre2', apellido: 'Apellido2', fondo: 'fondo2.jpg'},
    {imgSrc: '../articulos/img/el rey David.jpg', nombre: 'Nombre3', apellido: 'Apellido3', fondo: 'fondo3.jpg'}
];

const estilo = [
    {colorh1: 'red', sombreh1: '1px 1px 1px rgba(41, 41, 41, .9);', colorh2: 'blue', sombreh2: 'orange', colorboton: 'white', fondoboton: 'blue',link:'articulos/la sulamita.html'},
    {colorh1: 'green', sombreh1: '1px 1px 1px rgba(0, 0, 0, .9);', colorh2: 'yellow', sombreh2: 'purple', colorboton: 'black', fondoboton: 'yellow',link:'articulos/la sulamita.html'},
    {colorh1: 'purple', sombreh1: '1px 1px 1px rgba(255, 255, 255, .9);', colorh2: 'orange', sombreh2: 'black', colorboton: 'blue', fondoboton: 'red',link:'historia/historia.html'}
];

let slider = 0;
let style = 0;

function updateContent() {
    document.querySelector('header').innerHTML = `
      <div>
         <img src="${elementos[slider].imgSrc}" alt="Imagen de ${elementos[slider].nombre} ${elementos[slider].apellido}" />
          <!-- <div class='slider'>
           <h3 style='color:${estilo[style].colorh2};'> ¿Que aprendemos de la Biblia?</h3>
<h1 style='color:${estilo[style].colorh1}; teXt-shadow:${estilo[style].sombreh1};'>¡Descubre su sabiduria con nosotros!</h1>
          <a href="${estilo[style].link}"> 
                     <button  class='botonSlider' style='color:${estilo[style].colorboton}; background:${estilo[style].fondoboton}'>Leer más</button>
         </a>
          </div>-->
      </div>
    `;

    
    slider = (slider + 1) % elementos.length;
    style = (style + 1) % estilo.length;
} 
setInterval(updateContent, 3000);
updateContent();


 
     

// carrusel lacras
        function scrollIzquierda() {
            var contenedor = document.getElementById('contenedor');
            contenedor.scrollBy({ left: -200, behavior: 'smooth' });
        }
        
        function scrollDerecha() {
            var contenedor = document.getElementById('contenedor');
            contenedor.scrollBy({ left: 200, behavior: 'smooth' });
        }


        // carrusel lacras 2
        function scrollIzquierda2() {
            var contenedor = document.getElementById('contenedorTWO');
            contenedor.scrollBy({ left: -200, behavior: 'smooth' });
        }
        
        function scrollDerecha2() {
            var contenedor = document.getElementById('contenedorTWO');
            contenedor.scrollBy({ left: 200, behavior: 'smooth' });
        }


         // carrusel lacras 3
         function scrollIzquierdatres() {
            var contenedor = document.getElementById('contenedorTre');
            contenedor.scrollBy({ left: -200, behavior: 'smooth' });
        }
        
        function scrollDerechatres() {
            var contenedor = document.getElementById('contenedorTre');
            contenedor.scrollBy({ left: 200, behavior: 'smooth' });
        }
    


  


 
