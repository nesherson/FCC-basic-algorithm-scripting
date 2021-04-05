function confirmEnding(str, target) {
  const splitStr = str.split('');
  const location = splitStr.length - target.length;
  const tempStr = splitStr.slice(location, splitStr.length).join('');
  return tempStr === target ? true : false;
}
