function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  let titledStr = splitStr.map((word) => {
    /*const titledLetter = word[0];
      titledLetter.toUpperCase();*/

    const titledWord = word.replace(word[0], word[0].toUpperCase());
    return titledWord;
  });
  return titledStr.join(' ');
}

titleCase("I'm a little tea pot");
