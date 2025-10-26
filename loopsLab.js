function evenPowers(input) {
  for (let power = 0; i <= power; power += 2) {
    console.log(power ** input);
  }
}
function characterSequence(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
function vowelsSum(input) {
  let value = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      value += 1;
    } else if (input[i] === "e") {
      value += 2;
    } else if (input[i] === "i") {
      value += 3;
    } else if (input[i] === "o") {
      value += 4;
    } else if (input[i] === "u") {
      value += 5;
    }
  }
  console.log(value);
}
function password(input) {
  let name = input[0];
  let pass = input[1];
  let rightPass = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == pass) {
      console.log(`Welcome ${name}!`);
      break;
    }
  }
}
function accountBalance(input) {
  let balance = 0;
  for (let i = 0; i < input.length; i++) {
    current = input[i];
    if (current === "NoMoreMoney") {
      break;
    }
    let amount = Number(current);
    if (amount < 0) {
      console.log("Invalid operation!");
      break;
    }
    balance += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
function bigestNumber(input) {
  let biggestNum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Stop") {
      break;
    }
    let amount = Number(input[i]);
    if (biggestNum < amount) {
      biggestNum = amount;
    }
  }
  console.log(biggestNum);
}
function smallestNumber(input) {
  let smallestNum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Stop") {
      break;
    }
    let amount = Number(input[i]);
    if (smallestNum > amount) {
      smallestNum = amount;
    }
  }
  console.log(smallestNum);
}
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    let product = n * i;
    console.log(`${n} * ${i} = ${product}`);
  }
}
function sumTwoNumbers(start, end, magicNum) {
  let sumOfNumComb = 0;
  let isFound = false;
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      sumOfNumComb++;
      if (i + j === magicNum) {
        console.log(
          `Combination N:${sumOfNumComb} (${i} + ${j} = ${magicNum})`
        );
        isFound = true;
        return;
      }
    }
  }
  if (!isFound) {
    console.log(`${sumOfNumComb} combinations - neither equals ${magicNum}`);
  }
}
sumTwoNumbers(1, 10, 5);

function leapYears(input) {
  for (let year = input[0]; year <= input[1]; year++) {
    if (input[year] % 4 === 0) {
      console.log(year);
    }
  }
}
leapYears(1908, 1919);

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
