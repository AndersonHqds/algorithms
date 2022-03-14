const search = (grades, from, to, searching) => {
  console.log(`Buscando ${searching} entre ${from} e ${to}`);
  const mid = Math.floor((from + to) / 2);
  const grade = grades[mid];

  if (from > to) {
    return -1;
  }

  if (searching === grade.grade) {
    return mid;
  }

  if (searching < grade.grade) {
    return search(grades, from, mid - 1, searching);
  }

  return search(grades, mid + 1, to, searching);
};

module.exports = { search };
