// 1. Largest of Two Integers
function largestOfTwo(a, b) {
  if (a > b) {
    alert("The largest number is " + a);
  } else {
    alert("The largest number is " + b);
  }
}


largestOfTwo(10, 20);


// 2. Sign of Product of Three Numbers
function productSign(x, y, z) {
  let product = x * y * z;

  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is -");
  } else {
    alert("The product is 0, so no sign.");
  }
}


productSign(3, -7, 2);


// 3. Sort Three Numbers
function sortThree(n1, n2, n3) {
  let numbers = [n1, n2, n3];

  // Sorting in descending order
  numbers.sort(function(a, b) {
    return b - a;
  });

  alert("Sorted numbers: " + numbers.join(", "));
}


sortThree(0, -1, 4);


// 4. Largest of Five Numbers
function largestOfFive(nums) {
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  alert("The largest number is " + largest);
}


largestOfFive([-5, -2, -6, 0, -1]);


// 5. Odd or Even Loop
function oddEvenLoop(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}


oddEvenLoop(15);
