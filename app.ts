const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button");

function printResult(result: any): void {
  console.log(result);
}

buttonElement.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  printResult(result);
});

// const result = add(5, 3);
// let isDone = false;

// console.log(result);
