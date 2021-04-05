function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  if (num > 0) {
    return str.concat(repeatStringNumTimes(str, num - 1));
  }
}

repeatStringNumTimes('abc', 3);
