function bouncer(arr) {
  return arr.filter((item) => item && item);
}

bouncer([7, 'ate', '', false, 9]);
