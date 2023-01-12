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
  const prevVal = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (prevVal) {
    email.value = prevVal.email;
    message.value = prevVal.message;
  }
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
  const { email, message } = formElement.elements;
  let feedback = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
  const currentValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  console.log(currentValues);
  formElement.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
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
  }, 500)
);
