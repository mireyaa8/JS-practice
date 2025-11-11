function tvSeries(movieName, seasons, episodes, durationEpisode) {
  let episodeTime = durationEpisode * 0.2 + durationEpisode;
  let seasonTimeExtra = episodeTime * episodes + 10;
  let totalTime = seasonTimeExtra * seasons;
  console.log(
    `Total time needed to watch the ${movieName} series is ${totalTime} minutes.`
  );
}
function movie(input) {
  let bestMovie = "";
  let bestPoints = 0;
  let movieCount = 0;
  let isFirstMovie = true;
  for (let i = 0; i < input.length; i++) {
    let currentMovie = input[i];
    if (currentMovie === "STOP") {
      break;
    }
    movieCount++;
    if (movieCount > 7) {
      console.log("The title limit has been transferred.");
      break;
    }
    let moviePoints = 0;
    let length = currentMovie.length;
    for (let j = 0; j < currentMovie.length; j++) {
      let char = currentMovie[j];
      let ascii = char.charCodeAt(0);
      moviePoints += ascii;

      if (char === char.toUpperCase()) {
        moviePoints -= length;
      } else if (char === char.toLowerCase()) {
        moviePoints -= length * 2;
      }
    }
    if (isFirstMovie || moviePoints > bestPoints) {
      bestPoints = moviePoints;
      bestMovie = currentMovie;
      isFirstMovie = false;
    }
  }

  console.log(
    `The movie tonight is ${bestMovie} collected points: ${bestPoints}.`
  );
}
// movie(["Amadeus", "The Hurt Locker", "The Godfather", "Se7en", "STOP"]);
function movie(input) {
  let bestMovie = "";
  let bestSum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == "STOP") {
      break;
    }
    if (i == 6) {
      break;
    }

    let currPoints = 0;
    for (let j = 0; j < input[i].length; j++) {
      let currChar = input[i].charCodeAt(j);
      currPoints += currChar;
      if (currChar >= 65 && currChar <= 90) {
        currPoints -= input[i].length;
      } else if (currChar >= 97 && currChar <= 122) {
        currPoints -= input[i].length * 2;
      }
    }
    if (currPoints > bestSum) {
      bestSum = currPoints;
      bestMovie = input[i];
    }
  }

  if (input.length >= 7) {
    console.log("The title limit has been transferred.");
  }
  console.log(
    `The movie tonight is ${bestMovie} collected points: ${bestSum}.`
  );
}
