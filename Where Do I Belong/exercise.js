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

getIndexToIns([40, 60], 50);
