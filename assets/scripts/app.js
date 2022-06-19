const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + +enteredNum;
  createAndWriteOutput("+", initialResult, enteredNum);
}
function subtract() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNum;
  createAndWriteOutput("-", initialResult, enteredNum);
}
function multiply() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  createAndWriteOutput("*", initialResult, enteredNum);
}
function divide() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  createAndWriteOutput("/", initialResult, enteredNum);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
