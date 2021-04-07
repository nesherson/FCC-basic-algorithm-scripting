function mutation(arr) {
  const tempStr = arr[0].toLowerCase().slice();
  const conditionalStr = arr[1].toLowerCase().split('');
  let containsAll = false;
  containsAll = conditionalStr.every((letter) => tempStr.includes(letter));

  return containsAll;
}

mutation(['hello', 'hey']);
