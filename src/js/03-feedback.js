import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextArea();

function onFormSubmit(evt) {
      evt.preventDefault();
      evt.currentTarget.reset();
      localStorage.removeItem(STORAGE_KEY);
}


function onTextareaInput(evt) {
      const message = evt.target.value;
      localStorage.setItem(STORAGE_KEY,
            JSON.stringify({
      email: form.email.value,
      message: form.message.value,
    }));
}



function populateTextArea(evt) {
      const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
      
      if (savedMessage) {
            input.value = savedMessage.email.trim();
    textarea.value = savedMessage.message.trim();
      }
}