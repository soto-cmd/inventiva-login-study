const password = document.querySelector('#password');
const username = document.querySelector('#username');
const remember = document.querySelector('#remember');
const toggle = document.querySelector('#toggle-password');
const form = document.querySelector('#login-form');
const message = document.querySelector('#demo-message');

const DEMO_USER = 'asoto';
const DEMO_PASSWORD = 'inventiva2026';

const savedUsername = localStorage.getItem('inventiva-demo-username');
if (savedUsername) username.value = savedUsername;

toggle.addEventListener('click', () => {
  password.type = password.type === 'password' ? 'text' : 'password';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredUser = username.value.trim();
  const enteredPassword = password.value;

  if (!enteredUser || !enteredPassword) {
    message.textContent = 'Ingresá tu usuario y contraseña para continuar.';
    message.hidden = false;
    return;
  }

  if (enteredUser !== DEMO_USER || enteredPassword !== DEMO_PASSWORD) {
    message.textContent = 'Usuario o contraseña incorrectos.';
    message.hidden = false;
    password.value = '';
    password.focus();
    return;
  }

  if (remember.checked) {
    localStorage.setItem('inventiva-demo-username', enteredUser);
  } else {
    localStorage.removeItem('inventiva-demo-username');
  }

  message.hidden = true;
  sessionStorage.setItem('inventiva-demo-session', 'active');
  sessionStorage.setItem('inventiva-demo-display-user', enteredUser);
  password.value = '';
  window.location.href = 'dashboard.html';
});
