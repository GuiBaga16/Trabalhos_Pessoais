document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.getElementById('whatsapp-btn');
    const telefone = '5551995995875'; // Coloque o número do telefone aqui
    const texto = 'Olá, gostaria de mais informações!'; // Mensagem padrão

    whatsappButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o redirecionamento padrão do link

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        let whatsappURL;

        if (isMobile) {
            // Abre o WhatsApp App
            whatsappURL = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(texto)}`;
        } else {
            // Abre o WhatsApp Web
            whatsappURL = `https://web.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(texto)}`;
        }

        // Redireciona para o URL apropriado
        window.location.href = whatsappURL;
    });
});
