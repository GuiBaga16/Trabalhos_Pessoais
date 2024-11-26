// Estrutura de dados para armazenar as ferramentas dos projetos
const projectTools = {
  "Sacola Fretes": [
    { icon: "fa-brands fa-html5", name: "HTML" },
    { icon: "fa-brands fa-css3-alt", name: "CSS" },
    { icon: "fa-brands fa-js", name: "JavaScript" },
    { icon: "fa-brands fa-whatsapp", name: "Integração com API do WhatsApp" },
    { icon: "fa-solid fa-truck", name: "Ferramentas usadas no Sacola Fretes" }
  ],
  "Projeto 2": [
    { icon: "", name: "" },
    { icon: "", name: "" },
    { icon: "", name: "" },
    { icon: "fa-solid fa-cogs", name: "Ferramentas usadas no Projeto 2" }
  ],
  "Projeto 3": [
    { icon: "", name: "" },
    { icon: "", name: "" },
    { icon: "", name: "" },
    { icon: "fa-solid fa-cogs", name: "Ferramentas usadas no Projeto 3" }
  ]

};

// Função para destacar o nome do projeto selecionado e exibir as ferramentas
function highlightProject(name) {
  const details = document.getElementById("project-details");

  // Limpar o conteúdo anterior
  details.innerHTML = `Você selecionou: <strong>${name}</strong><br>`;

  // Verifica se o projeto existe na estrutura de dados
  if (projectTools[name]) {
    // Adicionando a lista de ferramentas do projeto
    let toolsHtml = "<ul>";

    // Iterar sobre as ferramentas do projeto e adicionar ao HTML
    projectTools[name].forEach(tool => {
      toolsHtml += `
        <li><i class="${tool.icon}"></i> ${tool.name}</li>
      `;
    });

    toolsHtml += "</ul>";

    // Adicionar as ferramentas ao conteúdo
    details.innerHTML += toolsHtml;
  } else {
    details.innerHTML += "<p>Sem ferramentas disponíveis para este projeto.</p>";
  }

  // Exibir o conteúdo
  details.classList.add("show");
}
