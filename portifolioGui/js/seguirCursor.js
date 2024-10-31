function moveWithCursor(event, projectItem) {
    const viewButton = projectItem.querySelector('.view-button');
    const projectImage = projectItem.querySelector('.project-image');
    const rect = projectItem.getBoundingClientRect();

    // Calcula a posição relativa do cursor dentro do projectItem
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Atualiza a posição da imagem e do botão usando um loop de animação
    requestAnimationFrame(() => {
        // Suavização do movimento da imagem
        projectImage.style.left = `${x}px`;
        projectImage.style.top = `${y}px`;
        projectImage.style.transition = 'left 0.3s ease, top 0.3s ease'; // Transição suave para a imagem
        projectImage.style.transform = 'translate(-50%, -50%)';
        projectImage.style.position = 'absolute';

        // Suavização do movimento do botão
        viewButton.style.left = `${x}px`;
        viewButton.style.top = `${y}px`;
        viewButton.style.transition = 'left 0.2s ease, top 0.2s ease'; // Transição suave para o botão
        viewButton.style.transform = 'translate(-50%, -50%)';
        viewButton.style.position = 'absolute'; 
    });

    const limitedX = Math.min(Math.max(x, buttonWidth / 2), rect.width - buttonWidth / 2);
    const limitedY = Math.min(Math.max(y, buttonHeight / 2), rect.height - buttonHeight / 2);

    // Atualiza a posição da imagem para seguir o cursor dentro dos limites
    projectImage.style.left = `${limitedX}px`;
    projectImage.style.top = `${limitedY}px`;
    projectImage.style.transform = 'translate(-50%, -50%)';
    projectImage.style.position = 'absolute';

    // Posiciona a view-button no centro do cursor dentro dos limites
    viewButton.style.left = `${limitedX}px`;
    viewButton.style.top = `${limitedY}px`;
    viewButton.style.transform = 'translate(-50%, -50%)';
    viewButton.style.position = 'absolute'; 

}

function resetPosition(projectItem) {
    const viewButton = projectItem.querySelector('.view-button');
    const projectImage = projectItem.querySelector('.project-image');

    // Reseta a posição da imagem e centraliza o botão
    projectImage.style.left = '50%';
    projectImage.style.top = '50%';
    projectImage.style.transform = 'translate(-50%, -50%)';

    viewButton.style.left = '50%';
    viewButton.style.top = '50%';
    viewButton.style.transform = 'translate(-50%, -50%)';
}
