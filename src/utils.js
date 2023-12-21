export function uppercase(str) {
  let words = str.split(' ');

  let titleCaseWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  let uppercasestring = titleCaseWords.join(' ');

  return uppercasestring;
}
