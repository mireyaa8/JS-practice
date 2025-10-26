function repeatString(str, n) {
  for (i = 0; i < n; i++) {
    console.log(str);
  }
}

function mathPower(number, power) {
  return number ** power;
}

function orders(product, quantity) {
  let price = 0;
  if (product == "coffee") {
    price = 1.5;
    console.log((price * quantity).toFixed(2));
  } else if (product == "water") {
    price = 1;
    console.log((price * quantity).toFixed(2));
  } else if (product == "coke") {
    price = 1.4;
    console.log((price * quantity).toFixed(2));
  } else if (product == "snacks") {
    price = 2;
    console.log((price * quantity).toFixed(2));
  }
}

function simpleCalculator(a, b, operator) {
  switch (operator) {
    case "multiply":
      let multiply = (a, b) => a * b;
      console.log(multiply(a, b));
      break;
    case "divide":
      let divide = (a, b) => a / b;
      console.log(divide(a, b));
      break;
    case "substract":
      let substract = (a, b) => a - b;
      console.log(substract(a, b));
      break;
    case "add":
      let add = (a, b) => a + b;
      console.log(add(a, b));
      break;
  }
}

function signCheck(numOne, numTwo, numThree) {
  if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
    console.log("Positive"); //+++
  } else if (numOne >= 0 && numTwo <= 0 && numThree <= 0) {
    console.log("Positive"); //+--
  } else if (numOne <= 0 && numTwo <= 0 && numThree <= 0) {
    console.log("Negative"); //---
  } else if (numOne >= 0 && numTwo >= 0 && numThree <= 0) {
    console.log("Negative"); //++-
  } else if (numOne <= 0 && numTwo <= 0 && numThree >= 0) {
    console.log("Positive"); //--+
  } else if (numOne <= 0 && numTwo >= 0 && numThree >= 0) {
    console.log("Negative"); //-++
  } else if (numOne >= 0 && numTwo <= 0 && numThree >= 0) {
    console.log("Negative"); //+-+
  }
}
