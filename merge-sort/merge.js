const merge = (array, start, mid, end, sortBy) => {
  const result = new Array(end - start);

  let current = 0;
  let startIndex = start;
  let endIndex = mid;

  while (startIndex < mid && endIndex < end) {
    const startValue = array[startIndex];
    const endValue = array[endIndex];

    if (startValue[sortBy] < endValue[sortBy]) {
      result[current] = startValue;
      startIndex++;
    } else {
      result[current] = endValue;
      endIndex++;
    }

    current++;
  }

  while (startIndex < mid) {
    result[current++] = array[startIndex++];
  }

  while (endIndex < end) {
    result[current++] = array[endIndex++];
  }

  for (let count = 0; count < current; count++) {
    array[start + count] = result[count];
  }
};

const mergeSort = (grades, start, end, sortBy, reqType) => {
  const quantity = end - start;
  if (quantity > 1) {
    const mid = Math.floor((start + end) / 2);
    console.log({ start, mid, end, reqType });

    mergeSort(grades, start, mid, sortBy, "A");
    mergeSort(grades, mid, end, sortBy, "B");
    merge(grades, start, mid, end, sortBy);
  }
};

module.exports = { merge, mergeSort };
