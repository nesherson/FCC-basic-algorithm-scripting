function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0, n);
  arr3 = arr3.concat(arr1);
  arr3 = arr3.concat(arr2.slice(n));
  return arr3;
}

// TESTS
// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.
