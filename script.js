let displayValue = "0";

function append(value) {
  if (displayValue === "0") displayValue = "";
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue || "0";
}

function clearDisplay() {
  displayValue = "0";
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    if (!isFinite(result)) throw new Error("Math Error");
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch {
    document.getElementById("display").value = "Error";
    displayValue = "0";
  }
}