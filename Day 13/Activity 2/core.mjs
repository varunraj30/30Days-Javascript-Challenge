function subTwo(num1, num2) {
  return num1 - num2;
}

function mulTwo(num1, num2) {
  return num1 * num2;
}

function divTwo(num1, num2) {
  return num1 / num2;
}

export { subTwo, mulTwo, divTwo };

export default function evenOrOdd(num1) {
  if (num1 % 2 == 0) return "even";
  return "odd";
}
