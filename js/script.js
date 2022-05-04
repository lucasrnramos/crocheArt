const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const navBar = document.querySelector('#nav-bar');
    navBar.classList.toggle('active');
    const active = navBar.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);