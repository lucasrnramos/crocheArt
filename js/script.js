const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(){
    const navBar = document.querySelector('#nav-bar');
    navBar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);