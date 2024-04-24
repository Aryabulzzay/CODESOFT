let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function squareRoot() {
    let inputValue = display.value;
    if (inputValue) {
      display.value = Math.sqrt(parseFloat(inputValue));
    }
  }
  
  function calculatePercentage() {
    let inputValue = display.value;
    if (inputValue) {
      display.value = parseFloat(inputValue) / 100;
    }
  }
  
  function clearLast() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
  }
  
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keyCode = event.keyCode;
    const shiftPressed = event.shiftKey;
  
    if ((key.match(/[0-9.]/) && shiftPressed) || key.match(/[0-9+\-*\/.=()]/) || keyCode === 13) {
      event.preventDefault(); // Prevent default action for keys like arrow keys
      if (keyCode === 13) {
        calculate();
      } else {
        appendToDisplay(shiftPressed && key === '9' ? '(' : (shiftPressed && key === '0' ? ')' : key));
      }
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (key === 'Backspace') {
      clearLast();
    }
  });
  
  
  function exponentiation(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function calculate() {
    try {
      let inputValue = display.value;
      // Replace ^ with ** for exponentiation
      inputValue = inputValue.replace(/\^/g, '**');
      // Replace ! with factorial calculation
      inputValue = inputValue.replace(/(\d+)!/g, function(match, num) {
        return factorial(parseInt(num));
      });
      display.value = eval(inputValue);
    } catch (error) {
      display.value = 'Error';
    }
  }
  

  