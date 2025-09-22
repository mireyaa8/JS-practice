function bookForSummer(pages, pagesPerHour, days) {
  let formula1 = pages / pagesPerHour;
  let formula2 = formula1 / days;
  console.log(`${formula2} hours per day.`);
}
function birthdayPart(input) {
  let cake = (20 / 100) * input;
  let drinks = cake - (cake * 45) / 100;
  let animator = (1 / 3) * input;
  console.log(cake + drinks + animator + input);
}
function cinema(type, row, col) {
  let income = 0;
  if (type == "Premiere") {
    income = row * col * 12;
  } else if (type == "Normal") {
    income = row * col * 7.5;
  } else if (type == "Discount") {
    income = row * col * 5;
  }
  console.log(`${income.toFixed(2)} leva`);
}
//summer outfit
function summerOutfit(degrees, period, outfit, shoes) {
  if (degrees >= 10 && degrees <= 18) {
    if (period == "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (period == "Afternoon") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (period == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees >= 18 && degrees <= 24) {
    if (period == "Morning") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (period == "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (period == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees >= 25) {
    if (period == "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (period == "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (period == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(22, "Afternoon");

//fishing boat
function fishingBoat(budget, season, fishermens) {
  let basePrice = 0;
  if (season == "Spring") {
    basePrice = 3000;
  } else if (season == "Summer" || season == "Autumn") {
    basePrice = 4200;
  } else if (season == "Winter") {
    basePrice = 2600;
  }

  if (fishermens <= 6) {
    basePrice *= 0.9;
  } else if (fishermens >= 7 && fishermens <= 11) {
    basePrice *= 0.85;
  } else if (fishermens >= 12) {
    basePrice *= 0.75;
  }
  if (fishermens % 2 == 0 && season != "Autumn") {
    basePrice *= 0.95;
  }
  let moneyLeft = budget - basePrice;
  if (moneyLeft >= 0) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva.`
    );
  }
}

fishingBoat(3000, "Summer", 11);
