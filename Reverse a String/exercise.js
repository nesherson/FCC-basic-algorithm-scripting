function reverseString(str) {
  const newStr = str.split('').reverse();
  return newStr.join('');
}

reverseString('hello');
