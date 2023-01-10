import throttle from 'lodash.throttle';

const button = document.querySelector('button[type="submit"]');
const formElement = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

window.addEventListener('load', () => {
  const { email, message } = formElement.elements;
  let feedback = {
    email: email.value,
    message: message.value,
  };
  if (LOCALSTORAGE_KEY) {
    const prevVal = localStorage.getItem(LOCALSTORAGE_KEY);

    email.value = JSON.parse(prevVal).email;
    message.value = JSON.parse(prevVal).message;
  }
});

const currentValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

button.addEventListener('click', e => {
  console.log(currentValues);
  formElement.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
  const { email, message } = formElement.elements;
  let feedback = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
});

formElement.addEventListener(
  'input',
  throttle(e => {
    const { email, message } = formElement.elements;
    let feedback = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
  }, 5000)
);
