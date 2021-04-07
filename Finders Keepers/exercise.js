function findElement(arr, func) {
  let num = arr.find((el) => func(el));
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
