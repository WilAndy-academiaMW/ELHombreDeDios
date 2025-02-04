let uno = document.getElementById('indice1');
let article = document.getElementById('articulos');

let dos = document.getElementById('indice2');
let article2 = document.getElementById('articulos');

let tres = document.getElementById('indice3');
let article3 = document.getElementById('articulos');

let cuatro = document.getElementById('indice4');
let article4 = document.getElementById('articulos');




uno.addEventListener('click', function() {
    article.classList.add('articleONE'); 
    article.innerHTML=` <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>El Amor</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    
    <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>El Amor</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    `
});

dos.addEventListener('click', function() {
    article.classList.add('articleONE'); 
    article.innerHTML=` <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>la paz</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    
    <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>la paz</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    `
});

tres.addEventListener('click', function() {
    article.classList.add('articleONE'); 
    article.innerHTML=` <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>la compasion</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    
    <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>la alegria</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    `
});

cuatro.addEventListener('click', function() {
    article.classList.add('articleONE'); 
    article.innerHTML=` <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>la paz</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    
    <div class="contatavio">
        <img src="../img/amor.png" alt="Imagen de ejemplo">
        <p>la paz</p>
        <button><i class="fas fa-hand-pointer"></i> Haz clic</button>
    </div>
    `
});