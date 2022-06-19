const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

//Getting Users Input for each function
function getUserInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);

  console.log(logEntries);
}
function add() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteOutput("+", initialResult, enteredNum);
  writeToLog("Add", initialResult, enteredNum, currentResult);
}
function subtract() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createAndWriteOutput("-", initialResult, enteredNum);
  writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
}
function multiply() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  createAndWriteOutput("*", initialResult, enteredNum);
  writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
}
function divide() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  createAndWriteOutput("/", initialResult, enteredNum);
  writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
