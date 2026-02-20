let expression = "";

function append(value) {
  expression += value;
  document.getElementById("expression").innerText = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("expression").innerText = "";
  document.getElementById("result").innerText = "0";
}

function del() {
  expression = expression.slice(0, -1);
  document.getElementById("expression").innerText = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("result").innerText = result;
  } catch {
    document.getElementById("result").innerText = "Error";
  }
}