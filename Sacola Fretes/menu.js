window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburgerIcon = document.getElementById("hamburgerIcon");

    // Alternar a exibição do menu
    navLinks.classList.toggle("show");

    // Alternar a animação do ícone de hambúrguer
    hamburgerIcon.classList.toggle("open");
}

function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburgerIcon = document.getElementById("hamburgerIcon");

    // Fechar o menu
    navLinks.classList.remove("show");

    // Reverter a animação do ícone de hambúrguer
    hamburgerIcon.classList.remove("open");
}