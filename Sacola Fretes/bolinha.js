// Função para detectar se é um celular ou tablet
function isMobileOrTablet() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Definindo o link correto para o WhatsApp com base no dispositivo
document.addEventListener("DOMContentLoaded", function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const phoneNumber = '+5551981733525';
    const message = 'Olá, acessei o site e estou interessado nos serviços. Gostaria de mais informações, por favor.';
    const encodedMessage = encodeURIComponent(message);

    if (isMobileOrTablet()) {
        // Link para dispositivos móveis (API do WhatsApp)
        whatsappLink.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
        // Link para desktop (WhatsApp Web)
        whatsappLink.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }

    // Adicionando um listener para abrir o link
    whatsappLink.addEventListener('click', function() {
        window.open(whatsappLink.href, '_blank');
    });
});
