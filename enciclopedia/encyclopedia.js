let item = document.getElementById('Iten');
let item2 = document.getElementById('Iten2');
let central= document.getElementById('centro');


item.addEventListener('click', function() {
    central.classList.add('centro'); 
     central.innerHTML= `
    <a href='articulos/articulos.html' class='articulo'>
       <div class='articuloITEM' > <img src="img/virtud.png" alt="hoy" class='articuloIMG'> virtud</div>
    </a>
    <a href='articulos/articulos.html' class='articulo'>
       <div class='articuloITEM' > <img src="img/virtud.png" alt="hoy" class='articuloIMG'> virtud</div>
    </a>
    <a href='articulos/articulos.html' class='articulo'>
       <div class='articuloITEM' > <img src="img/virtud.png" alt="hoy" class='articuloIMG'> virtud</div>
    </a>
    <a href='articulos/articulos.html' class='articulo'>
       <div class='articuloITEM' > <img src="img/virtud.png" alt="hoy" class='articuloIMG'> virtud</div>
    </a>
    <a href='articulos/articulos.html' class='articulo'>
       <div class='articuloITEM' > <img src="img/virtud.png" alt="hoy" class='articuloIMG'> virtud</div>
    </a>
    
     `
    
});

item2.addEventListener('click', function() {
    central.classList.add('centro'); 
    central.innerHTML= `<div class='articulo'>hablame rata</div>`
   
});