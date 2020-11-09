const testDataOne = 'fakjehfksjdfsdnf,msdf';

function countCharInString(str, char) {
  let countedChars = 0;
  const string = String(str);
  for (let i = 0; i < string.length; i++) {
    string[i] === char ? countedChars++ : countedChars;
  }
  return !countedChars
    ? `The chosen ${char} is not present in the given string`
    : `The chosen ${char} is present ${countedChars} times`;
}

countCharInString(testDataOne, 'k');
countCharInString(testDataOne, 1);
