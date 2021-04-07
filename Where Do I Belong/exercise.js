function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0;
  }
  const sortedArr = arr.sort((a, b) => a - b);

  let index = 0;
  sortedArr.forEach((curr, i, arr) => {
    if (num > curr && num < arr[i + 1]) {
      index = i + 1;
    } else if (num === curr) {
      index = i;
    } else if (num > curr && i === arr.length - 1) {
      index = i + 1;
    }
  });

  return index;
}

// TESTS
// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
// getIndexToIns([40, 60], 50) should return 1.
// getIndexToIns([40, 60], 50) should return a number.
// getIndexToIns([3, 10, 5], 3) should return 0.
// getIndexToIns([3, 10, 5], 3) should return a number.
// getIndexToIns([5, 3, 20, 3], 5) should return 2.
// getIndexToIns([5, 3, 20, 3], 5) should return a number.
// getIndexToIns([2, 20, 10], 19) should return 2.
// getIndexToIns([2, 20, 10], 19) should return a number.
// getIndexToIns([2, 5, 10], 15) should return 3.
// getIndexToIns([2, 5, 10], 15) should return a number.
// getIndexToIns([], 1) should return 0.
// getIndexToIns([], 1) should return a number.
