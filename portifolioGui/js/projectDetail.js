// Estrutura de dados para armazenar as ferramentas dos projetos
const projectTools = {
  "Sacola Fretes": [
    { icon: "fa-solid fa-screwdriver-wrench", name: "Ferramentas usadas:" },
    { icon: "fa-brands fa-html5", name: "HTML" },
    { icon: "fa-brands fa-css3-alt", name: "CSS" },
    { icon: "fa-brands fa-js", name: "JavaScript" },
    { icon: "fa-brands fa-whatsapp", name: "API do WhatsApp" },
    { class:"linkArryProjeto", name: "Clique aqui para ver o site!!", link: "https://sacolafretes.netlify.app"}
  ],
  "Projeto 2": [
    { icon: "fa-solid fa-screwdriver-wrench", name: "Ferramentas usadas:" },
    { icon: "", name: "" },
    { icon: "", name: "" },
    { icon: "", name: "" }
    
  ],
  "Projeto 3": [
    { icon: "fa-solid fa-screwdriver-wrench", name: "Ferramentas usadas:" },
    { icon: "", name: "" },
    { icon: "", name: "" },
    { icon: "", name: "" }
    
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
      if (tool.link) {
        toolsHtml += `
          <li>
            <a href="${tool.link}" target="_blank" class="${tool.class || ''}">
              ${tool.name}
            </a>
          </li>
        `;
      } else {
        toolsHtml += `
          <li>
            <i class="${tool.icon || ''}"></i> ${tool.name}
          </li>
        `;
      }
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
