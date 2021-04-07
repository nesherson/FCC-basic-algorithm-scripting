function bouncer(arr) {
  return arr.filter((item) => item && item);
}

// TESTS
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
