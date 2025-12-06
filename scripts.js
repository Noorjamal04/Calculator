const display = document.getElementById('display');
let theme = 'light'; // Default theme

// Function to append characters to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to perform calculations
function calculate() {
  try {
    display.value = eval(display.value.replace('x', '*'));
  } catch (error) {
    display.value = 'Error';
  }
}

// Function to toggle between light and dark themes
function toggleTheme() {
  const calculator = document.getElementById('calculator');
  if (theme === 'light') {
    calculator.classList.remove('light-theme');
    calculator.classList.add('dark-theme');
    theme = 'dark';
  } else {
    calculator.classList.remove('dark-theme');
    calculator.classList.add('light-theme');
    theme = 'light';
  }
}

// Support keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (/^[0-9+\-x/.=]$/.test(key)) {
    event.preventDefault();
    if (key === '=') {
      calculate();
    } else if (key === 'X') {
      appendToDisplay('x');
    } else {
      appendToDisplay(key);
    }
  } else if (key === 'Escape') {
    clearDisplay();
  }
});


// Second cal

