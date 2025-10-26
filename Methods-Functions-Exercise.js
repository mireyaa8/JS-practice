function smallestNumber(first, second, third) {
  let smallestN = Math.min(first, second, third);
  console.log(smallestN);
}
function addAndSubtract(first, second, third) {
  function add(first, second) {
    let a = +first + +second;
    return a;
  }
  function sub(third) {
    let a = add(first, second);
    let result = a - +third;
    return result;
  }
  console.log(sub(third));
}

function charactersInRange(firstChar, secondChar) {
  let first;
  let last;
  if (firstChar.charCodeAt(0) < secondChar.charCodeAt(0)) {
    first = firstChar.charCodeAt(0);
    last = secondChar.charCodeAt(0);
  } else {
    last = firstChar.charCodeAt(0);
    first = secondChar.charCodeAt(0);
  }
  let arr = [];
  for (let i = first; i < last; i++) {
    if (i + 1 !== last) {
      arr.push(String.fromCharCode(i + 1));
    }
  }
  console.log(arr.join(" "));
}

function oddAndEvenSum(number) {
  let stringNum = number.toString();
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < stringNum.length; i++) {
    if (+stringNum[i] % 2 == 0) {
      evenSum += +stringNum[i];
    } else {
      oddSum += +stringNum[i];
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

function palindromeIntegers(array) {
  for (let i = 0; i < array.length; i++) {
    let firstStr = array[i].toString();
    let secondStr = array[i].toString().split("").reverse().join("");
    if (firstStr === secondStr) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

function passwordValidator(password) {
  let isValid = false;
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }
}
