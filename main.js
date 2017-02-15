(function () {

  var MAX_INPUT_VALUE = 10000;
  var LABEL_MESSAGE = 'Enter a number';
  var LABEL_ERROR_MESSAGE = 'Number can\'t be more than ' + MAX_INPUT_VALUE;

  var label, input, button;

  function onBtnClick() {
    var finalOutput = ''.concat(input.value, ' bee', (input.value > 1 ? 's' : ''), ' in the honeypot');
    for (var i = 0; i < input.value; i++) {
      writeOutput(i, i)
    }
    writeOutput(finalOutput, input.value)
  }

  function onNumberInput() {
    // validate the input value and show an appropriate message
    var isValid = input.value <= MAX_INPUT_VALUE;
    if (isValid) {
      label.innerText = LABEL_MESSAGE;
      label.classList.remove('error');
    }
    else {
      label.innerText = LABEL_ERROR_MESSAGE;
      label.classList.add('error');
    }
    button.disabled = !isValid;
  }

  function writeOutput(message, count) {
    // log `message` in `count` * 20ms time
    setTimeout(function () {
     console.log(message);
    }, count * 20)
  }

  (function init() {
    var container = document.querySelector('.honeypot');

    // set up the label
    label = document.createElement('label');
    label.classList.add('label');
    label.innerText = LABEL_MESSAGE;

    // set up the number input
    input = document.createElement('input');
    input.addEventListener('keyup', onNumberInput);
    input.type = 'number';
    input.classList.add('input');

    // set up the button
    button = document.createElement('button');
    button.addEventListener('click', onBtnClick);
    button.classList.add('button');
    button.innerText = 'Click me';
    button.disabled = true;

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);
  })()
})();