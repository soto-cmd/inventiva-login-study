const password = document.querySelector('#password');
const username = document.querySelector('#username');
const remember = document.querySelector('#remember');
const toggle = document.querySelector('#toggle-password');
const form = document.querySelector('#login-form');
const message = document.querySelector('#demo-message');

const savedUsername = localStorage.getItem('inventiva-demo-username');
if (savedUsername) username.value = savedUsername;

toggle.addEventListener('click', () => {
  password.type = password.type === 'password' ? 'text' : 'password';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!username.value.trim() || !password.value) {
    message.textContent = 'Ingresá un usuario y una contraseña de prueba para continuar.';
    message.hidden = false;
    return;
  }

  if (remember.checked) {
    localStorage.setItem('inventiva-demo-username', username.value.trim());
  } else {
    localStorage.removeItem('inventiva-demo-username');
  }

  sessionStorage.setItem('inventiva-demo-session', 'active');
  sessionStorage.setItem('inventiva-demo-display-user', username.value.trim());
  password.value = '';
  window.location.href = 'dashboard.html';
});
