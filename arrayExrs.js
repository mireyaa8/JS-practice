function addAndSubstract(array) {
  for (let i = 0; i < array.length; i++) {
    let modifiedArray = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < array.length; i++) {
      let current = array[i];
      originalSum += current;

      if (current % 2 === 0) {
        current += i;
      } else {
        current -= i;
      }

      modifiedArray.push(current);
      modifiedSum += current;
    }

    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);
  }
}
function commonElements(arrOne, arrTwo) {
  let commonElements = [];
}

function houseParty(commands) {
  let array = [];
  for (let i = 0; i < commands.length; i++) {
    let [name, ...splittedArray] = commands[i].split(` `);

    if (array.includes(name) && splittedArray.length == 2) {
      console.log(`${name} is already in the list!`);
    }
    if (splittedArray.length == 2) {
      array.push(name);
    }
    if (splittedArray.length == 3 && array.includes(name)) {
      let index = array.indexOf(name);
      array.slice(index, 1);
    } else if (splittedArray.length == 3 && !array.includes(name)) {
      console.log(`${name} is not in the list!`);
    }
  }
  console.log(array.join(`\n`));
}
function sortArray(array) {
  let sortedArray = array.sort((a, b) => a.length - b.length);
  let sortedArray1 = sortedArray.sort((a, b) => a.localeCompare(b));
  console.log(sortedArray1.join(`\n`));
}
function bombNumbers(numbers, bombPower) {
  let boom = bombPower[0];
  let bombExp = bombPower[1];
  let index = numbers.indexOf(boom);
  let output = numbers.slice(index - bombExp, bombExp * 2 + 1);
  console.log(output.reduce((a, cv) => a + cv, 0));
}
