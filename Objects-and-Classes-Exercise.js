function employees(namesArray) {
  let employees = [];
  for (let currentPerson of namesArray) {
    employees.currentPerson = currentPerson;
    employees["Personal Number"] = currentPerson.lenght;
    employees.push(currentPerson);
  }
  for (let currentPerson in employees) {
    console.log(
      `Name: ${currentPerson.name} -- Personal Number: ${currentPerson["Personal Number"]}`
    );
  }
}
