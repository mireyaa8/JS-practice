function dayOfWeek(number) {
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (number <= 7 && number >= 1) {
    console.log(weekDays[number - 1]);
  } else {
    console.log("Invalid day!");
  }
}
function sumFirstAndLast(array) {
  let sum = +array.pop() + +array.shift();
  console.log(sum);
}
function negativeOrPositive(numbers) {
  let negativeArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
      negativeArr.unshift(numbers[i]);
    }
    if (numbers[i] > 0) {
      negativeArr.push(numbers[i]);
    }
  }
  for (let number of negativeArr) {
    console.log(number);
  }
}
function firstAndLastKNumbers(numbers) {
  let k = numbers[0];
  let index = 0;
  let nums = "";
  for (let i = index; i <= k; i++) {
    nums += `${String(numbers[i])}`;
  }
  console.log(nums);
}
function lastKNumbersSequence(n, k) {
  let sequence = [1];
  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let lastK = sequence.slice(start, i);
    let sum = 0;
    for (let num of lastK) {
      sum += num;
    }
    sequence.push(sum);
  }
  console.log(sequence.join(" "));
}
function smallestTwoNumbers(numberArray) {
  let sortedAscending = numberArray.sort((a, b) => {
    return a - b;
  });
  let result = sortedAscending.slice(0, 2);
  console.log(result.join(" "));
}

function processOddNumbers(numberArray) {
  let result = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 !== 0) {
      result.push(numberArray[i] * 2);
    }
  }
  console.log(result.reverse().join(" "));
}

function reverseArray(n, array) {}

function reverseStrings(array) {
  console.log(array.reverse().join(" "));
}
