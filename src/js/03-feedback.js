const form = document.querySelector('form');
const formKey = 'feedback-form-state';
const { email, message } = form.elements;
let currentFormState = JSON.parse(localStorage.getItem(formKey)) || {};
email.value = currentFormState.email || '';
message.value = currentFormState.message || '';
const setFormState = e => {
  currentFormState[e.target.name] = e.target.value;
  localStorage.setItem(formKey, JSON.stringify(currentFormState));
};
const clearForm = e => {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(formKey);
  console.log(currentFormState);
  currentFormState = {};
};
form.addEventListener('input', setFormState);
form.addEventListener('submit', clearForm);


