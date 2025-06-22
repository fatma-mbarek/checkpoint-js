// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log( reverseString()); 

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}
console.log( countCharacters("")); 

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word =>  word.charAt(0).toUpperCase()) ;

}
console.log(capitalizeWords())

// Array Functions

// 1. Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
const sampleArray = [3, 1, 4, 2];
console.log( findMax(sampleArray)); 
console.log( findMin(sampleArray)); 

// 2. Sum of Array
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray());

// 3. Filter Array
function filterArray(arr, conditionFunc) {
  return arr.filter(conditionFunc);
}
console.log(filterArray( num => num % 2 === 0));

// Mathematical Functions

// 1. Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(n));

// 2. Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log( isPrime()); 

// 3. Fibonacci Sequence
function fibonacciSequence(terms) {
  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, terms);
}
console.log( fibonacciSequence());

// Bonus: Fibonacci with Memoization (Expert-level)
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}
console.log( fibonacciMemo()); 