// console.log('run js📌 Array Destructuring (7 Questions)


// Question 1
// Destructure the first and second values.



// const fruits = ["Apple", "Banana", "Orange"];


// Expected



// Apple

// Banana

// ANS ==> 1

// let [first, second] = fruits

// console.log(first, second);


// Question 2
// Skip the second element.



// const colors = ["Red", "Green", "Blue"];



// Output



// Red

// Blue

// ANS ==> 2

// let [color1, ,color3 ] = colors


// console.log(color1, color3);


// Question 3
// Store the remaining values in another array.



// const numbers = [10, 20, 30, 40, 50];



// Expected



// 10

// [20,30,40,50]

// ANS ==> 3

// let [ firstNum, ...rest ] = numbers

// console.log(rest);

// Question 4
// Swap two variables using destructuring.


// let a = 5;

// let b = 10;


// Expected

// a = 10

// b = 5

// ANS ==> 4

// [a, b] = [b ,a]


// console.log(a ,b);


// Question 5
// Give default values.



// const names = ["Ali"];



// Expected



// Ali

// Ahmed

// ANS ==> 5

// const names = ["Ali",'Ahmed'];

// console.log(names);



// Question 6
// Nested array destructuring.



// const data = ["HTML", ["CSS", "JavaScript"]];



// Expected



// HTML

// CSS

// JavaScript

// ANS ==> 6

// let [lang1, [lang2,lang3]] = data

// console.log(lang1,lang2,lang3);



// Question 7
// Destructure all values.





// const marks = [80, 90, 95];



// // Print all three.

// ANS ==> 7

// let [value1, value2,value3] = marks

// console.log(value1,value2,value3);


// 📌 Object Destructuring (7 Questions)
// Question 8
// Destructure name and age.





// const user = {

// name: "Hasan",

// age: 23,

// city: "Lahore"

// };



// Expected



// Hasan

// 23

// ANS ==> 8

// let {name,age} = user

// console.log(name,age);


// Question 9 
// Rename variables.





// const student = {

//     name: "Ayesha",

//     class: "10th"

// };



// Expected variables



// studentName

// studentClass

// ANS ==> 9

// let { name: studentName, class: studentClass} = student

// console.log(studentName,studentClass);



// Question 10
// Use default value.





// const employee = {

//     name: "Ahmed"

// };



// Expected



// Ahmed

// 50000

// ANS ==> 10

// let { name, salary = 50000 } = employee

// console.log(name, slary);


// Question 11
// Nested object destructuring.





// const person = {

// name: "Ali",

// address: {

// city: "Karachi",

// country: "Pakistan"

// }

// };



// Expected



// Karachi

// Pakistan

// ANS ==> 11

// let {address:{city,country}} = person

// console.log(city,country);


// Question 12
// Destructure everything.





// const product = {

// title: "Laptop",

// price: 80000,

// brand: "Dell"

// };

// // Print all values.

// ANS ==> 12

// let {title,price,brand} = product

// console.log(title,price,brand);




// Question 13
// Extract only email.


// const account = {

// username: "coder123",

// email: "nehalcoder200@gmail.com",

// password: "12345"

// };

// ANS ==> 13

// let {email} = account

// console.log(email);


// Question 14
// Combine object and array destructuring.





// const company = {

//     employees: ["Ali", "Ahmed", "Sara"]

// };



// // Expected



// // Ali

// // Ahmed

// // Sara

// ANS ==> 14

// let { employees: [name1, name2, name3] } = compname

// console.log(name1, name2, name3);


// 📌 Rest Operator (3 Questions)
// Question 15
// Collect remaining values.





// const numbers = [1, 2, 3, 4, 5];



// // Expected



// // 1

// // 2

// // [3,4,5]

// ANS ==> 15

// let [value1, value2, ...remainingValue] = numbers

// console.log(value1, value2, remainingValue);



// Question 16
// Collect remaining object properties.


// const user = {

// name: "Hasan",

// age: 22,

// city: "Lahore",

// country: "Pakistan"

// };



// Expected



// name

// remaining object

// ANS ==> 16

// let {name, ...remainingProperties} = user

// console.log(remainingProperties);


// Question 17
// Create a function using Rest Parameters.

// Example


// Expected Output



// 100




// Hint:
// ANS ==> 17

// function sum(...rest) {
//     console.log(rest);

// }





// Use

// sum(10, 20, 30, 40);



// 📌 Spread Operator (3 Questions)
// Question 18
// Merge two arrays.





// const frontend = ["HTML", "CSS"];

// const backend = ["Node", "MongoDB"];



// // Expected



// // ["HTML","CSS","Node","MongoDB"]

// ANS ==> 18

// let mergeArry = [...frontend,...backend]

// console.log(mergeArry);


// Question 19
// Copy an array.


// Create a new copy using the spread operator.

// ANS ==> 19

// const fruits = ["Apple","Banana","Orange"];

// let cpy = [...fruits]

// console.log(cpy);




// Question 20
// Merge two objects.





// const user = {

// name: "Hasan"

// };



// const details = {

// age: 22,

// city: "Lahore"

// };


// Expected





// {

// name: "Hasan",

// age: 22,

// city: "Lahore"

// }

// ');


// Ans20

// let mergeObj = {
//     ...user,
//     ...details
// }

// console.log(mergeObj);
