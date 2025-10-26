function concentrateNames(fistName, secondName, delimeter) {
  console.log(`${fistName}${delimeter}${secondName}`);
}
function rightPlace(firstString, symbol, secondString) {
  let replacedString = firstString.replace("_", symbol);
  let result = replacedString === secondString ? "Matched" : "Not Matched";
  console.log(result);
}

function integerAndFloat(firstNum, secondNum, thirdNum) {
  let sum = firstNum + secondNum + thirdNum;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
function amazingNumbers(input) {
  let num = input.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  let result = sum.toString().includes("9");
  if (result) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}
function Gramophone(band, album, song) {
  let bandNameLength = band.length;
  let albumLength = album.length;
  let songLength = song.length;
  let songDuration = (albumLength * bandNameLength * songLength) / 2;
  let rotation = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${rotation} times.`);
}
function fuelMoney(inputDistance, inputPassengers, inputPrice) {
  let distance = Number(inputDistance),
    passengers = Number(inputPassengers),
    pricePerLiter = Number(inputPrice);
  let totalFuel = (distance / 100) * 7 + (passengers * 100) / 1000;
  totalSum = totalFuel * pricePerLiter;
  console.log(`Needed money for that trip is ${totalSum} lv.`);
}
function centuriesToMinutes(input) {
  let centuries = Number(input);
  years = centuries * 100;
  days = Math.floor(years * 365.2422);
  hours = days * 24;
  minutes = hours * 60;
  console.log(
    `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}
function specialNumbers(inputNum) {
  //let inputNum = Number(inputNum);
}
function sumOfDigits(number) {
  let sum = 0;
  let num = number.toString();
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }
  console.log(sum);
}
function charToString(a, b, c) {
  word += a;
  word += b;
  word += c;
  console.log(word);
}
function townInfo(town, population, area) {
  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}
function calculator(number, operator, secondNumber) {
  let num1 = Number(number);
  let num2 = Number(secondNumber);
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  console.log(result.toFixed(2));
}
function convertMetersToKilometers(meters) {
  let kilometers = meters / 1000;
  console.log(kilometers.toFixed(2));
}
function poundsToDollars(pounds) {
  let dollars = pounds * 1.31;
  console.log(dollars.toFixed(3));
}
function reversedChars(a, b, c) {
  console.log(`${c} ${b} ${a}`);
}
function lowerOrUpper(char) {
  let check = char.toUpperCase();
  if (check === char) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
function gladiatorExpenses(arg1, arg2, arg3, arg4, arg5) {
  let totalSpentMoney = 0;
  let lostFightCount = Number(arg1);
  let helmetPrice = Number(arg2);
  let swordPrice = Number(arg3);
  let shieldPrice = Number(arg4);
  let armorPrice = Number(arg5);
  let shieldBrokenCount = 0;

  for (let fight = 1; fight <= lostFightCount; fight++) {
    let helmetBroke = false;
    let swordBroke = false;
    if (fight % 2 === 0) {
      totalSpentMoney += helmetPrice;
      helmetBroke = true;
    }
    if (fight % 3 === 0) {
      totalSpentMoney += swordPrice;
      swordBroke = true;
    }
    if (helmetBroke && swordBroke) {
      totalSpentMoney += shieldPrice;
      shieldBrokenCount++;
      if (shieldBrokenCount % 2 === 0) {
        totalSpentMoney += armorPrice;
      }
    }
  }

  console.log(`Gladiator expenses: ${totalSpentMoney.toFixed(2)} aureus`);
}
function spiceMustFlow(number) {
  let initialYeald = number;
  let totalYeald = 0;
  let days = 0;
  for (let i = number; i >= 100; i -= 10) {
    totalYeald += i - 26;
    days++;
  }
  if (totalYeald !== 0) {
    totalYeald -= 26;
  }
  console.log(days);
  console.log(totalYeald);
}
