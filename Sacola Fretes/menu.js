// fundo transparente no menu
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 750) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Função para abrir/fechar o menu hambúrguer
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); // Ativa/desativa o menu

    // Animação do ícone do hambúrguer
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    hamburgerIcon.classList.toggle('open');
}

// Função para fechar o menu ao clicar em um link e rolar suavemente para a seção
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active'); // Fecha o menu

    const hamburgerIcon = document.getElementById('hamburgerIcon');
    hamburgerIcon.classList.remove('open'); // Reseta a animação
}

// Função para remover a âncora da URL e rolar suavemente para a seção correspondente
function smoothScroll(event) {
    event.preventDefault(); // Previne o comportamento padrão
    const targetId = this.getAttribute('href').substring(1); // Remove o # da href
    const targetElement = document.getElementById(targetId);

    // Rola suavemente até o elemento
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });

    // Remove o # da URL imediatamente
    history.pushState(null, null, ' ');
}

// Adiciona o comportamento de rolagem suave e remoção da âncora ao carregar a página
window.onload = function () {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
};
