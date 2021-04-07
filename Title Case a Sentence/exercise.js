function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  const titledStr = splitStr.map((word) => {
    const titledWord = word.replace(word[0], word[0].toUpperCase());
    return titledWord;
  });
  return titledStr.join(' ');
}

titleCase("I'm a little tea pot");

//TESTS
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
