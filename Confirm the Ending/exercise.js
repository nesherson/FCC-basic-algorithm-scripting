function confirmEnding(str, target) {
  const splitStr = str.split('');
  const location = splitStr.length - target.length;
  const tempStr = splitStr.slice(location, splitStr.length).join('');
  return tempStr === target ? true : false;
}

// TESTS
// confirmEnding("Bastian", "n");
// confirmEnding("Congratulation", "on");
// confirmEnding("Connor", "n");
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
// confirmEnding("He has to give me a new name", "name");
// confirmEnding("Open sesame", "same");
// confirmEnding("Open sesame", "sage");
// confirmEnding("Open sesame", "game");
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
// confirmEnding("Abstraction", "action");
// Code doesn't use the built-in method .endsWith() to solve the challenge
