/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  arr = numbers[0]
  return arr; // complete this statement
}

function last(arr) {
  arr = arr.slice(-1)[0]
  return arr; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/