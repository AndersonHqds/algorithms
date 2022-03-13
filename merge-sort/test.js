const { mergeSort } = require("./merge");
const { createGrade } = require("./grades");

const grades = [
  createGrade("Andre", 4),
  createGrade("Carlos", 8.5),
  createGrade("Ana", 10),
  createGrade("Jonas", 3),
  createGrade("Juliana", 6.7),
  createGrade("Guilherme", 7),
  createGrade("Paulo", 9),
  createGrade("Mariana", 5),
  createGrade("Lucia", 9.3),
];

mergeSort(grades, 0, grades.length, "grade");

grades.forEach((student) => console.log(student));
