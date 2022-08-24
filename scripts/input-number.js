let controlNumberToogles = document.querySelectorAll('.control-number__toogle');
let controlInputFields = document.querySelectorAll('.control-number__input');

controlInputFields.forEach(function(input) {
  input.addEventListener('change', function(e) {
    if(this.validity.valid) {
      this.closest('.control-number').classList.remove('control-number_invalid');
    } else {
      this.closest('.control-number').classList.add('control-number_invalid');
    }
  });
});

controlNumberToogles.forEach(function(button) {
  button.addEventListener('click', function(e) {
    let input = this.closest('.control-number').querySelector('.control-number__input');

    if(this.classList.contains('control-number__toogle_minus')) {
      input.value--;
    }
    if(this.classList.contains('control-number__toogle_plus')) {
      input.value++;
    }

    if(input.validity.valid) {
      this.closest('.control-number').classList.remove('control-number_invalid');
    } else {
      this.closest('.control-number').classList.add('control-number_invalid');
    }
  })
});
