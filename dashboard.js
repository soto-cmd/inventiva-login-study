const session = sessionStorage.getItem('inventiva-demo-session');
if (session !== 'active') {
  window.location.replace('index.html');
}

const sidebar = document.querySelector('#sidebar');
const content = document.querySelector('#main-content');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  if (window.innerWidth > 760) {
    content.classList.toggle('shifted', open);
  }
  menuButton.textContent = open ? '✕' : '☰';
});

document.querySelectorAll('.expanded-nav a,.icon-nav a').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 760) {
    content.classList.remove('shifted');
  } else if (sidebar.classList.contains('open')) {
    content.classList.add('shifted');
  }
});
