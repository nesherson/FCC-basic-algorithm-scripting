function findLongestWordLength(str) {
  const splitStr = str.split(' ');
  let longestWord = splitStr[0];

  for (let i = 0; i < splitStr.length; i++) {
    if (longestWord.length < splitStr[i].length) {
      longestWord = splitStr[i];
    }
  }

  return longestWord.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
