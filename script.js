const iconoMenu = document.querySelector('#btn-menu'),
menu = document.querySelector('#menu');
icono = document.querySelector('#btn-menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    icono.classList.toggle('voltear');
    document.body.classList.toggle('opacity');
    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == 'img/icon-menu.png'){
        e.target.setAttribute('src','img/icon-menu.png');
    }else{
        e.target.setAttribute('src','img/icon-menu.png');
    }
});