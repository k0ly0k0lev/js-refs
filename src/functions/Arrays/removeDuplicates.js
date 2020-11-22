const testArr = [
  1,
  undefined,
  2,
  'string',
  false,
  1,
  null,
  2,
  3,
  'string',
  true,
  undefined,
  false,
  null,
];

function revomeDuplicates(arr) {
  return Array.from(new Set(arr));
}

revomeDuplicates(testArr);
