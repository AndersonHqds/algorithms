const { createGrade } = require("./grades");
const { search } = require("./binary");

const grades = [
  createGrade("Jonas", 3),
  createGrade("Andre", 4),
  createGrade("Mariana", 5),
  createGrade("Juliana", 6.7),
  createGrade("Anderson", 7),
  createGrade("Carlos", 8.5),
  createGrade("Paulo", 9),
  createGrade("Lucia", 9.3),
  createGrade("Ana", 10),
];

const found = search(grades, 0, grades.length, 9);
console.log(found);
