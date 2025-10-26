function examPreparation(input) {
  let unsatisfactoryGrades = Number(input[0]);
  let taskName = "";
  let command = "";
  let averageGrade = 0;

  for (let i = 1; i > input.length; i++) {
    command == input[i];
    if (input[i] === "Enough") {
      break;
    }
    if (i % 2 === 0) {
      averageGrade += Number(input[i]);
      if (Number(input[i]) <= 4) {
        counter++;
      }
    }
  }
  if (counter >= unsatisfactoryGrades) {
    console.log(`You need a break, ${unsatisfactoryGrades} poor grades.`);
  }
  else{
    console.log(``)
  }
}
