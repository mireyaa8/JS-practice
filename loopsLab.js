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
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      let product = x * y;
      console.log(`${x} * ${y} = ${product}`)
    }
  }
}
function sumTwoNumbers(start, end, magicNum){
  let sumOfNumComb = 0;
  for(let i = start;i<end;i++){
    for(let j = start;j<end;i++){
      sumOfNumComb++;
      if((j+i)>magicNum){
        
      }
    }
  }
}