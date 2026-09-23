const session = sessionStorage.getItem('inventiva-demo-session');
if (session !== 'active') {
  window.location.replace('index.html');
}

const displayUser = sessionStorage.getItem('inventiva-demo-display-user') || 'Usuario';
document.querySelector('#user-label').textContent = displayUser;

const sidebar = document.querySelector('#sidebar');
const content = document.querySelector('#main-content');
const menuButton = document.querySelector('#menu-button');
const logoutButton = document.querySelector('#logout-button');

menuButton.addEventListener('click', () => {
  if (window.innerWidth <= 700) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('expanded');
  }
});

logoutButton.addEventListener('click', () => {
  sessionStorage.removeItem('inventiva-demo-session');
  sessionStorage.removeItem('inventiva-demo-display-user');
  window.location.href = 'index.html';
});

document.querySelectorAll('.sidebar a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.sidebar a').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    const title = link.querySelector('span')?.textContent || 'Inicio';
    document.querySelector('.page-heading h1').textContent = title;
    document.querySelector('.page-heading p').textContent = `Módulo de demostración: ${title}.`;
    if (window.innerWidth <= 700) sidebar.classList.remove('mobile-open');
  });
});
