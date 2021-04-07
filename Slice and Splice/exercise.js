function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0, n);
  arr3 = arr3.concat(arr1);
  arr3 = arr3.concat(arr2.slice(n));
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
