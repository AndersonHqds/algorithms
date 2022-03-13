const searchLowers = (search, grades) =>
  grades.reduce((prev, current) => {
    if (current.grade < search.grade) {
      return prev + 1;
    }
    return prev;
  }, 0);

const swap = (grades, first, second) => {
  let temp1 = grades[first];
  grades[first] = grades[second];
  grades[second] = temp1;
};

const partition = (grades, end) => {
  const pivot = grades[end - 1];
  let lowersFound = 0;

  for (let checking = 0; checking < end - 1; checking++) {
    const current = grades[checking];

    if (current.grade <= pivot.grade) {
      swap(grades, checking, lowersFound);
      lowersFound++;
    }
  }
  swap(grades, end - 1, lowersFound);
  return lowersFound;
};

const quickSort = (grades, from, to) => {
  const elements = to - from;
  if (elements > 1) {
    const pivotPosition = partition(grades, to);
    quickSort(grades, from, pivotPosition);
    quickSort(grades, pivotPosition + 1, to);
  }
};

module.exports = { quickSort };
