const { createGrade } = require("./grades");
const { quickSort } = require("./quick-sort");

const grades = [
  createGrade("Andre", 4),
  createGrade("Carlos", 8.5),
  createGrade("Ana", 10),
  createGrade("Jonas", 3),
  createGrade("Juliana", 6.7),
  createGrade("Paulo", 9),
  createGrade("Mariana", 5),
  createGrade("Lucia", 9.3),
  createGrade("Anderson", 7),
];

quickSort(grades, 0, grades.length);

console.log(grades);
