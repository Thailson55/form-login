const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('active');
}

function blurFunc() {
  let parent = this.parentNode.parentNode;
  console.log(this.value);
  if (this.value === '') {
    parent.classList.remove('active');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});
