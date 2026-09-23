const session = sessionStorage.getItem('inventiva-demo-session');
if (session !== 'active') {
  window.location.replace('index.html');
}

const displayUser = sessionStorage.getItem('inventiva-demo-display-user') || 'Usuario';
const userLabel = document.querySelector('#user-label');
if (userLabel) userLabel.textContent = displayUser;

const sidebar = document.querySelector('#sidebar');
const content = document.querySelector('#main-content');
const menuButton = document.querySelector('#menu-button');
const logoutButton = document.querySelector('#logout-button');

menuButton?.addEventListener('click', () => {
  sidebar?.classList.toggle('expanded');
  content?.classList.toggle('expanded');
});

logoutButton?.addEventListener('click', () => {
  sessionStorage.removeItem('inventiva-demo-session');
  sessionStorage.removeItem('inventiva-demo-display-user');
  window.location.href = 'index.html';
});

document.querySelectorAll('.sidebar a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});
