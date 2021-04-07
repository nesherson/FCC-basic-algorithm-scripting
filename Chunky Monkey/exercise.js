function chunkArrayInGroups(arr, size) {
  const mutatedArr = arr.slice();
  const finalArr = [];

  while (mutatedArr.length !== 0) {
    finalArr.push(mutatedArr.splice(0, size));
  }
  return finalArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
