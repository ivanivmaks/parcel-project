import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('input[type="email"]');
const formMessage = document.querySelector('textarea[name="message"]');

function onInput() {
  const formData = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttle(onInput, 500));

function onLoadPage() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parseData = JSON.parse(savedData);
  if (savedData) {
    formEmail.value = parseData.email;
    formMessage.value = parseData.message;
  } else {
    formEmail.value = '';
    formMessage.value = '';
  }
}

window.addEventListener('load', onLoadPage);

function onSubmitForm(event) {
  event.preventDefault();
  const formData = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    console.log(formData);
}

form.addEventListener('submit', onSubmitForm);
