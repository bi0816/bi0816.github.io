const greeting = document.querySelector('.login-area .greeting');
const form = document.querySelector('.form');
const nameInput = form.querySelector('.input');

const CLASS_HIDE = 'is-hide';
const USERNAME = 'username';

function checkUserData() {
  const savedUser = localStorage.getItem(USERNAME);
  if (savedUser === null) {
    form.classList.remove(CLASS_HIDE);
    form.addEventListener('submit', onSubmit);
  } else {
    setName(savedUser);
  }
}

function setName(value) {
  greeting.innerText = `Hello, ${value}`;
  greeting.classList.remove(CLASS_HIDE);
}

function onSubmit(e) {
  e.preventDefault();
  const value = nameInput.value;
  setName(value);
  form.classList.add(CLASS_HIDE);
  localStorage.setItem(USERNAME, value);
}

checkUserData();
