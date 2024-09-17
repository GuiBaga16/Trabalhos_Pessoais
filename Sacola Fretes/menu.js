window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function clickMenu() {
    const navLinks = document.querySelector('.nav-links');
    
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
}

// Adicionar evento de clique para minimizar o menu quando um link for clicado
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});



