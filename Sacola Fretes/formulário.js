document.getElementById('orçamentoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const mensagem = document.getElementById('mensagem').value;

    const telefone = '+5551981733525';
    const texto = `Olá, acessei seu site e gostaria de fazer um orçamento.
    %0A➞ Meu nome é ${encodeURIComponent(nome)}
    %0A➞ Meu estado é ${encodeURIComponent(estado)}
    %0A➞ Minha cidade é ${encodeURIComponent(cidade)}
    %0A%0A➞ ${encodeURIComponent(mensagem)}`;

    // Detectar se o usuário está em mobile ou pc
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let whatsappURL;
    if (isMobile) {
        // Abre o WhatsApp App
        whatsappURL = `https://api.whatsapp.com/send?phone=${telefone}&text=${texto}`;
    } else {
        // Abre o WhatsApp Web
        whatsappURL = `https://web.whatsapp.com/send?phone=${telefone}&text=${texto}`;
    }

    window.location.href = whatsappURL;
});