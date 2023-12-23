let expr = "";
function appendToDisplay(value) {
  const display = document.getElementById("display");
  const cursorPosition = display.selectionStart;
  const currentValue = display.value;

  if (value === "^") {
    // Insert the exponentiation symbol (^) at the cursor position
    const newValue =
      currentValue.substring(0, cursorPosition) +
      "^" +
      currentValue.substring(cursorPosition);

    display.value = newValue;
    display.setSelectionRange(cursorPosition + 1, cursorPosition + 1); // Move the cursor after the inserted "^"
  } else {
    // Handle other values as usual
    const newValue =
      currentValue.substring(0, cursorPosition) +
      value +
      currentValue.substring(cursorPosition);

    display.value = newValue;
    display.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }

  expr = display.value; // Update the expr variable with the current display value
}

function clearDisplay() {
  document.getElementById("display").value = "";
  expr = "";
}

function deleteLastChar() {
  const display = document.getElementById("display");
  const currentValue = display.value;

  if (currentValue.length > 0) {
    display.value = currentValue.substring(0, currentValue.length - 1);
    expr = currentValue.substring(0, currentValue.length - 1);
  }
}

function calculateResult() {
  let expression = expr.replace(/\^/g, "**"); //convert ^ to exponential
  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const validKeys = /[0-9+\-*/.=]|Backspace|Enter/i;

  if (validKeys.test(key)) {
    event.preventDefault();

    if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      deleteLastChar();
    } else if (key === "^") {
      appendToDisplay("**");
    }
  }
});
