const listItems = document.querySelectorAll('.experiences-section li');
const description = document.getElementById('description');

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        let descriptionText = item.getAttribute('data-description');
        // Atualiza o conteúdo da descrição e permite HTML (com innerHTML)
        description.innerHTML = descriptionText;
        // Torna a descrição visível
        description.style.opacity = 1;
    });

    item.addEventListener('mouseleave', () => {
        // Esconde a descrição quando o mouse sai do item
        description.style.opacity = 0;
    });
});
