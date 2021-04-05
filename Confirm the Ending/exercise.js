function confirmEnding(str, target) {
  const newStr = str.split('');
  if (target.length === 1) {
    const location = newStr.length - 1;
    return newStr[location] === target ? true : false;
  } else {
    const location = newStr.length - target.length;
    const tempStr = newStr.slice(location, newStr.length).join('');
    console.log(tempStr);
    return tempStr === target ? true : false;
  }
}
