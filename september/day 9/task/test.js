function calculate(parts) {
  let result = 0;
  let currentOperation = "add"; // default operation

  for (const part of parts) {
    if (["add", "sub", "multip", "div"].includes(part)) {
      currentOperation = part;
      continue;
    }

    if (isNaN(part)) continue; // skip non-numbers

    const num = Number(part);

    switch (currentOperation) {
      case "add":
        result += num;
        break;
      case "sub":
        result -= num;
        break;
      case "multip":
        result *= num;
        break;
      case "div":
        result /= num;
        break;
    }
  }

  return result;
}

const input = ["div", "4", "2"];

console.log(calculate(input));
