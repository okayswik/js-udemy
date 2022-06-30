function sumUp(number) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}

// Linear Time Complexity => o, n

const array = [11, 22, 32];

console.log(sumUp(array));
