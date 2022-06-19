const defaultResult = 0;
let currentResult = defaultResult;

//Getting Users Input for each function
function getUserInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function add() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteOutput("+", initialResult, enteredNum);
}
function subtract() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
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
