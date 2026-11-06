//Q1. Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.

const arr = [1, 2, 3, 4, 5];

const squaredArr = arr.map((num) => num * num);
console.log("Question 01 Answer:", squaredArr);

//Q2. Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 22 },
];

const filteredUsers = users.filter((user) => user.age > 18);
console.log("Question 02 Answer:", filteredUsers);

//Q3. Given an array of products with price, use reduce to calculate the total price of all products.

const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];

const totalPrice = products.reduce(
  (accumulator, current) => accumulator + current.price,
  0,
);
console.log("Question 03 Answer:", totalPrice);

//Q4. Create an array of students with marks. Sort the array in descending order based on marks.

const studentsMarks = [
  { name: "John", marks: 85 },
  { name: "Jane", marks: 92 },
  { name: "Jim", marks: 78 },
  { name: "Jill", marks: 95 },
];

const sortedMarks = studentsMarks.sort((a, b) => b.marks - a.marks);
console.log("Question 04 Answer:", sortedMarks);

//Q5. Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.

const arrayOfStrings = ["Apple", "Banana", "Cherry", "Orange", "Guava"];

const findString = arrayOfStrings.find((str) => str.length > 5);
console.log("Question 05 Answer:", findString);

//Q6. Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword.
// Explain how this works in this context.

const person = {
  firstName: "Ali",
  lastName: "Khan",
  fullName: function () {
    return this.firstName + " " + this.lastName; // In this case "this" targets its parent object "person" and access to the firstName and lastName.
  },
};

console.log("Question 06 Answer:", person.fullName());

//Q7. What will be the output of this code and why? Create an example to show the difference between regular function
//  and arrow function when using this inside an object.

const regularFunctionExample = {
  firstName: "Regular",
  lastName: "Function",
  fullName: function () {
    return this.firstName + " " + this.lastName; // "this" refers to the object itself, so it will return "Regular Function"
  },
};

const arrowFunctionExample = {
  firstName: "Arrow",
  lastName: "Function",
  fullName: () => {
    return this.firstName + " " + this.lastName; // "this" does not refer to the object, it refers to the window(global object), so it will return "undefined undefined"
  },
};

console.log(
  "Question 07 Answer (Regular Function):",
  regularFunctionExample.fullName(),
);
console.log(
  "Question 07 Answer (Arrow Function):",
  arrowFunctionExample.fullName(),
);

//Q8. Write a function that takes an array of numbers, filters even numbers, then doubles them using map,
// and finally returns the sum of those doubled numbers using reduce. Do it in a chain.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

const sumOfDoubledEvens = arrayOfNumbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((accumulator, current) => accumulator + current, 0);
console.log("Question 08 Answer:", sumOfDoubledEvens);

//Q9. Create an array of employees with name, department and salary. Write code to:
//  a) Find an employee who works in HR department
//  b) Sort employees by salary in ascending order

const employees = [
  { name: "Alice", department: "HR", salary: 50000 },
  { name: "Bob", department: "Engineering", salary: 70000 },
  { name: "Charlie", department: "HR", salary: 60000 },
  { name: "David", department: "Marketing", salary: 55000 },
];

//  a) Find an employee who works in HR department
const hrEmployee = employees.find((employee) => employee.department === "HR");
console.log("Question 09 Answer (a):", hrEmployee);

//  b) Sort employees by salary in ascending order
const sortedEmployees = employees.sort((a, b) => a.salary - b.salary);
console.log("Question 09 Answer (b):", sortedEmployees);

//Q10. Create a function that takes an object and returns an array of its keys and values separately,
// then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.

function splitObjectEntries(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return { keys, values };
}

const exampleObject = { name: "Alice", age: 30, city: "New York" };
const { keys, values } = splitObjectEntries(exampleObject);
console.log("Question 10 Answer (Keys):", keys);
console.log("Question 10 Answer (Values):", values);

const newObject = Object.fromEntries(
  keys.map((key, index) => [key, values[index]]),
);
console.log("Question 10 Answer (New Object):", newObject);
