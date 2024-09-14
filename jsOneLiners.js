// Check if an Object is empty or not
const isEmptyObject = (obj) => Object.keys(obj).length === 0;
// if true then object is empty, if false then object contains some key-values

// Convert first latter of a string to Upper Case
const ConvertUpperCase = (string) =>
  string.replace(/\b\w/g, (match) => match.toUpperCase());

// Replace all occurances of a string in another string
const replacedStr = (string, existingWord, newWord) =>
  string.split(existingWord).join(newWord);

// Get last element of an Array
const lastElement = (arr) => arr.slice(-1)[0];

// Check if number is Odd or Even
const checkOddEven = (num) => num % 2 === 0;
// if return true then Even else Odd
const checkEven = (num) => num % 2 === 0;
// if true then Even
const checkOdd = (num) => num % 2 === 1;
// if true then Odd
