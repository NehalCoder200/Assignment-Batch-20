// // console.log('run');

// Total Questions: 30
// Section 1 – Objects (1–5)

// Q1.
// JavaScript Object kya hota hai? Real-world example ke sath explain karein.




// Q2.
// Dot notation aur Bracket notation me kya difference hai?





// const user = {

// name: "Hasan",

// age: 22

// };



// Dono tarikon se name access karke dikhayein.



// Q3.
// Niche diye object ka output batayein.



// const student = {

// name: "Ali",

// age: 20

// };



// student.city = "Karachi";

// delete student.age;



// console.log(student);



// Q4.
// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?

// Example ke sath explain karein.


// Q5.
// Ek function likhein jo object ke andar total properties count kare.

// Expected:



// countProperties({

// name:"Ali",

// age:20,

// city:"Lahore"

// })



// // Output

// 3



// Section 2 – Arrays (6–10)

// Q6.
// Array aur Object me kya difference hai?


// Q7.
// Output predict karein.





// const arr = [10,20,30];



// arr.push(40);

// arr.pop();



// console.log(arr);



// Q8.
// Array ke first aur last element ko print karne ke 2 methods likhein.


// Q9.
// Ek function likhein jo array ka sum return kare.

// Example





// sum([10,20,30])



// // Output

// 60



// Q10.
// Ek array me duplicate values remove karein.





// [1,2,2,3,4,4,5]



// Expected Output





// // [1,2,3,4,5]



// Section 3 – Destructuring (11–14)

// Q11.
// Destructuring kya hoti hai?

// Array aur Object dono ki syntax likhein.


// Q12.
// Output predict karein.





// const colors = ["red","blue","green"];



// const [a,b,c] = colors;



// console.log(b);



// Q13.
// Output batayein.





// const user = {

// name:"Hasan",

// age:22

// };



// const {name, age} = user;



// console.log(age);



// Q14.
// Nested Object destructuring karein.





// const user = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };



// City ko destructuring se nikalein.


// Section 4 – Shallow Copy & Deep Copy (15–18)

// Q15.
// Shallow Copy aur Deep Copy me kya difference hai?


// Q16.
// Output predict karein.





// const user1 = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };



// const user2 = user1;



// user2.address.city = "Lahore";



// console.log(user1.address.city);



// Q17.
// Spread operator se object copy karne par nested object me kya issue hota hai?

// Explain karein.


// Q18.
// JavaScript me Deep Copy banane ke 3 methods likhein.



// Section 5 – Rest & Spread Operator (19–22)

// Q19.
// Rest Operator aur Spread Operator me kya difference hai?


// Q20.
// Output predict karein.



// const arr = [10,20,30];



// const newArr = [...arr,40];



// console.log(newArr);



// Q21.
// Output batayein.





// function total(...numbers){

// console.log(numbers);

// }



// total(10,20,30,40);



// Q22.
// 2 Objects ko merge karein.





// const obj1 = {

// name:"Ali"

// };



// const obj2 = {

// age:20

// };



// Expected



// {

// name:"Ali",

// age:20

// }



// Section 6 – Array Higher Order Methods (23–26)


// Q23.
// map() aur forEach() me kya difference hai?


// Q24.
// filter() ka use karke sirf even numbers return karein.





// [1,2,3,4,5,6]



// Expected

// [2,4,6]



// Q25.
// reduce() ka use karke array ka total sum nikalein.



// [10,20,30]



// Expected

// 60



// Q26.
// find() aur filter() me kya difference hai?


// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.

// Call() Function ko call karta ha ap argument aise bhej sakte ho 
// Apply() bhi function call karta ha bus argument arry ma bhejta ha 
// Bind() function call karta ha argument bhi bheji sakte ho bus reture karta ha



// Q28.
// Output predict karein.



// const user = {

// name:"Hasan"

// };



// function greet(city){

// console.log(this.name, city);

// }



// greet.call(user,"Karachi");

// ANSWER ==> console log ma Hasan , Karachi


// Q29.
// Output batayein.



// const user = {

// name:"Ali"

// };



// function sayHello(country){

// console.log(this.name, country);

// }



// const result = sayHello.bind(user);



// result("Pakistan");


//  ANSWER ==> console log mai Ali Pakistan


// Final Mixed Question (30)
// Q30.
// Niche diye code ka exact output likhein aur har line explain karein.



// const user = {

//     name: "Hasan",
//     age: 23,
//     address: {
//         city: "lahore"
//     },
//     skills: ["HTML", "CSS"]

// };



// const copy = {

//     ...user

// };



// copy.skills.push("JavaScript");



// console.log(user.skills);
//  ANSWER ==> ["HTML", "CSS", 'JavaScript']


// console.log(copy.skills);
//  ANSWER ==> ["HTML", "CSS", 'JavaScript']


// Is code me Shallow Copy hui hai ya Deep Copy?
// //  ANSWER ==> Shallow Copy

// Is problem ko Deep Copy se kaise solve karenge?
// ANSWER ==> let deepCopy = JSON.parse(JSON.stringify(copy))

// copy.skills.push("JavaScript");
// console.log(copy); //  ANSWER ==> ["HTML", "CSS", 'JavaScript']

// console.log(user); //  ANSWER ==> ["HTML", "CSS", 'JavaScript']

// console.log(deepCopy);//  ANSWER ==> ["HTML", "CSS"]



// Agar structuredClone() use karein to output me kya farq padega?
// ANSWER ==> let deepCopy = structuredClone(copy)

// copy.address.city = 'Karachi'
// console.log(user); 

// console.log(copy); 

// deepCopy.skills.push('Nehal')

// console.log(deepCopy); //  ANSWER ==> ["HTML", "CSS"]












