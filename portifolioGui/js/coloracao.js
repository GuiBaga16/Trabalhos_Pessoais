let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

trilho.addEventListener('click', ()=>{
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
});

function toggleDarkMode() {
  const body = document.getElementById('pageBody');
  const aboutSection = document.querySelector('.about-section');
  const projectsSection = document.querySelector('.projects-section');
  const contactSection = document.querySelector('.contact-section');

  // Alternar classes de modo escuro
  body.classList.toggle('dark');
  aboutSection.classList.toggle('dark');
  projectsSection.classList.toggle('dark');
  contactSection.classList.toggle('dark');
}
