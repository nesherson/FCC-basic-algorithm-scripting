function mutation(arr) {
  const tempStr = arr[0].toLowerCase().slice();
  const conditionalStr = arr[1].toLowerCase().split('');
  let containsAll = false;
  containsAll = conditionalStr.every((letter) => tempStr.includes(letter));

  return containsAll;
}

// TESTS
// mutation(['hello', 'hey']);
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
// mutation(["ate", "date"]) should return false.
// mutation(["Tiger", "Zebra"]) should return false.
// mutation(["Noel", "Ole"]) should return true.
