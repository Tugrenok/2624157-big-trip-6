console.log("Привет, это JS");
function setDate(date) {
  const nameWrapper = document.querySelector('.js-date');

  if (nameWrapper) {
    nameWrapper.textContent = date || '29.05.2013';
  }
}

setDate('13.04.23');
