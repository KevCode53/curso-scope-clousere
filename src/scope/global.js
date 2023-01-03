// Variables

var a; // Declarando
var b = "b"; // Declarando y asignamos
b = "bb"; // Reasignado
var a = "aa"; // Redeclaracion

// Global Scope
var fruit = "Apple"; // Global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Guatemala"; // Global
  console.log(country);
}

countries();
console.log(country);
