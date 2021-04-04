function reverseString(str) {
  let tempArr = str.split('');
  let newStr = [];

  for (let i = tempArr.length - 1; i >= 0; i--) {
    newStr.push(tempArr[i]);
  }

  return newStr.join('');
}

reverseString('hello');
