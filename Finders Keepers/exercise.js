function findElement(arr, func) {
  let num = arr.find((el) => func(el));
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//TESTS
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined
