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

function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  if (
    calculationType === "ADD" ||
    calculationType === "SUBTRACT" ||
    calculationType === "MULTIPLY" ||
    calculationType === "DIVIDE"
  ) {
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
      currentResult += enteredNum;
      mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNum;
      mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNum;
      mathOperator = "";
    } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNum;
      mathOperator = "/";
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNum);
    writeToLog(calculationType, initialResult, enteredNum, currentResult);
  }
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
