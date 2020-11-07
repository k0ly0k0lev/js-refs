const testArr = [1, 2, 0.5, 'a', 'b'];

// Version one
function filterNumbersFromArrayVersionOne(arr) {
  return arr.filter((item) => typeof item === 'number');
}

// version two
function filterNumbersFromArrayVersionTwo(arr) {
  let filteredArray = [];
  for (item of arr) {
    typeof item === 'number' ? filteredArray.push(item) : null;
  }
  return filteredArray;
}

filterNumbersFromArrayVersionOne(testArr);
filterNumbersFromArrayVersionTwo(testArr);
