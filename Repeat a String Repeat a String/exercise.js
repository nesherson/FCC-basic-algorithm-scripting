function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  if (num > 0) {
    return str.concat(repeatStringNumTimes(str, num - 1));
  }
}

// TESTS
// repeatStringNumTimes('abc', 3);
// repeatStringNumTimes("*", 3)  ***.
// repeatStringNumTimes("abc", 3)  abcabcabc.
// repeatStringNumTimes("abc", 4)  abcabcabcabc.
// repeatStringNumTimes("abc", 1)  abc.
// repeatStringNumTimes("*", 8)  ********.
// repeatStringNumTimes("abc", -2) should return an empty string ("").
// repeatStringNumTimes("abc", 0) should return "".
// The built-in repeat() method should not be used.
