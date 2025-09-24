//1
function is_array(input){
    return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//2
function array_Clone(arr) {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone[i] = arr[i];
  }
  return clone;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//3
function first(arr,n){
    if(arr.Length===0) return[];
     if (n === undefined) return arr[0];
  if (n <= 0) return [];
  let result = [];
  for (let i = 0; i < n && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(first([7, 9, 0, -2]));     
console.log(first([], 3));              
console.log(first([7, 9, 0, -2], 3));   
console.log(first([7, 9, 0, -2], 6));   
console.log(first([7, 9, 0, -2], -3));  

//4
function last(arr, n) {
  if (arr.length === 0) return [];
  if (n === undefined) return arr[arr.length - 1];
  if (n <= 0) return [];
  let result = [];
  let startIndex = arr.length - n;
  if (startIndex < 0) startIndex = 0;
  for (let i = startIndex; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(last([7, 9, 0, -2]));      
console.log(last([7, 9, 0, -2], 3));    
console.log(last([7, 9, 0, -2], 6));    


//5
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));  
console.log(myColor.toString()); 
console.log(myColor.join("+"));  

//6
function insertDashes(num){
    let str = num.toString();
    let result =str[0];
    for(let i =0;i<str.Length;i++){
        if (parseInt(str[i - 1]) % 2 === 0 && parseInt(str[i]) % 2 === 0) {
      result += "-" + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(insertDashes(25468));
    
//7
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArray([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

//8
function mostFrequent(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentItem;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (frequency[item] === undefined) {
      frequency[item] = 1;
    } else {
      frequency[item]++;
    }
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  console.log(mostFrequentItem + " (" + maxCount + " times)");
}
mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

// 9
function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(swapCase('The Quick Brown Fox')); 



// 10
let a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
for (let i = 0; i < a.length; i++) {
  console.log("row " + i);
  for (let j = 0; j < a[i].length; j++) {
    console.log(" " + a[i][j]);
  }
}
