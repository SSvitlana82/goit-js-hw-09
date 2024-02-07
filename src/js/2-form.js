const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

showSaveData();
form.addEventListener('input', seeInput);
form.addEventListener('submit', onFormSubmit);
function seeInput(event) {
  const element = event.target;
  const onFormData = {};
  onFormData[element.name] = element.value.trim();

  localStorage.setItem(KEY, JSON.stringify(onFormSubmit));
}

function showSaveData() {
  const giveData = JSON.parse(localStorage.getItem(KEY));

  if (giveData) {
    form.elements.email.value = giveData.email;
    form.elements.message.value = giveData.message;
  }
}
function onFormSubmit(event) {
  event.preventDefault();
  const data = {};
  const value = new FormData(event.currentTarget);
  value.forEach((value, name) => {
    data[name] = value.trim();
  });
  if (data.email === '' || data.message === '') {
    alert('All write form');
    return;
  }
  console.dir(data);

  localStorage.removeItem(KEY);
  event.target.reset();
}
