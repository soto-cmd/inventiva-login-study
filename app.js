const password = document.querySelector('#password');
const toggle = document.querySelector('#toggle-password');
const form = document.querySelector('#login-form');
const message = document.querySelector('#demo-message');

toggle.addEventListener('click', () => {
  password.type = password.type === 'password' ? 'text' : 'password';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.hidden = false;
});
