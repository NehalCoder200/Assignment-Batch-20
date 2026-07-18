// // console.log('run');

// Total Questions: 30
// Section 1 – Objects (1–5)

// Q1.
// JavaScript Object kya hota hai? Real-world example ke sath explain karein.

//ANSWER javascript mai object use hota hai data banae keleya is mai ap multi bales save kar sakte
// hai or real world mai object mai datat store kia jata ha



// Q2.
// Dot notation aur Bracket notation me kya difference hai?





// const user = {

// name: "Hasan",

// age: 22

// };



// Dono tarikon se name access karke dikhayein.

// ANSWER
// Dot notation console.log(user.name);
// Bracket console.log(user['name']);



// Q3.
// Niche diye object ka output batayein.



// const student = {

// name: "Ali",

// age: 20

// };



// student.city = "Karachi";

// delete student.age;


// ANSWER {'Ali','Karachi'}

// console.log(student);




// Q4.
// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?

// Example ke sath explain karein.

// ANSWER
//object.keys object ke ander se keys retune karte hai 
//Object.values object ke ander se value retune karte hai
//Object.enteries key or value pura pair return karti hai 


// Q5.
// Ek function likhein jo object ke andar total properties count kare.

// Expected:



// let countProperties = {

// name:"Ali",

// age:20,

// city:"Lahore"

// }

// ANSWER let count = Object.keys(countProperties).length

// console.log(count);


// // Output

// 3



// Section 2 – Arrays (6–10)

// Q6.
// Array aur Object me kya difference hai?

ANSWER
// arry ma sirf values hoti ha
// value ko dircet acces karte ha

// Object property se access karte ha 

// Q7.
// Output predict karein.





// const arr = [10,20,30];



// arr.push(40);

// arr.pop();



// console.log(arr);

// ANSWER [10,20,30]


// Q8.
// Array ke first aur last element ko print karne ke 2 methods likhein.

// ANSWER 
// indexOf
// lastIndexOf

// Q9.
// Ek function likhein jo array ka sum return kare.

// Example

// ANSWER
    

// sum([10,20,30])

// // Output

// 60



// Q10.
// Ek array me duplicate values remove karein.





// let numArry = [1,2,2,3,4,4,5]


// Expected Output

// ANSWER 
// let uniqueArr = [...new Set(numArry)]
// console.log(uniqueArr);




// // [1,2,3,4,5]



// Section 3 – Destructuring (11–14)

// Q11.
// Destructuring kya hoti hai?

// Arry destructuring arry ma se element ko nikalna
// object destructuring object ma se property ko nikalna

// Array aur Object dono ki syntax likhein.

// Array
// let users = ['Rohan','Majid','Atif','Rashid']

// let [name1,name2, ,name4] = users

// // Object 

// let studentObj = {
//     name : 'NehalCoder200',
//     email : 'NehalCoder200@gmail.com',
//     adderss:{
//         city: 'Karachi'
//     }
// }

// let {email, adderss} = studentObj


// Q12.
// Output predict karein.





// const colors = ["red","blue","green"];



// const [a,b,c] = colors;



// console.log(b);

// ANSWER "blue"


// Q13.
// Output batayein.





// const user = {

// name:"Hasan",

// age:22

// };



// const {name, age} = user;



// console.log(age);

// ANSWER console loge mein 22

// Q14.
// Nested Object destructuring karein.

// const user = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };



// City ko destructuring se nikalein.

// ANSWER 
// let {city} = user.address

// console.log(city);


// Section 4 – Shallow Copy & Deep Copy (15–18)

// Q15.
// Shallow Copy aur Deep Copy me kya difference hai?

// ANSWER
// Shallow Copy Object ko upar se copy karta ha nested copy nhi karta
// Deep Copy object ka new reference create karta ha


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

// ANSWER console log mein "Lahore"


// Q17.
// Spread operator se object copy karne par nested object me kya issue hota hai?

// ANSWER ek mein changes karenge dusre mein change automatic ho jayengi

// Explain karein.


// Q18.
// JavaScript me Deep Copy banane ke 3 methods likhein.

// JSON.parse()
// JSON.stringify()
// structuredClone()

// Section 5 – Rest & Spread Operator (19–22)

// Q19.
// Rest Operator aur Spread Operator me kya difference hai?

// ANSWER rest equal se pelhe ho to rest ho ta ha
// ANSWER Spread equal ke baat ho to spread ho ta ha


// Q20.
// Output predict karein.



// const arr = [10,20,30];



// const newArr = [...arr,40];



// console.log(newArr);

// ANSWER
// console mein [10,20,30,40]

// Q21.
// Output batayein.





// function total(...numbers){

// console.log(numbers);

// }



// total(10,20,30,40);

// ANSWER console log ma [10,20,30,40]


// Q22.
// 2 Objects ko merge karein.





// const obj1 = {

// name:"Ali"

// };



// const obj2 = {

// age:20

// };


// ANSWER const obj1 = {

// name:"Ali"

// };



// const obj2 = {
// ...obj1,
// age:20

// };

// console.log(obj2);



// Expected



// {

// name:"Ali",

// age:20

// }



// Section 6 – Array Higher Order Methods (23–26)


// Q23.
// map() aur forEach() me kya difference hai?

//  ANSWER
// forEach() se Attraction or ya jab koe action perform karna ho
// foreach undefind value reture koti ha

// ANSWER
// Map() Naya arry banata ha
// Naya transformed arry reture karta ha
// jab data ko badal na ho to naya arry banata ha 


// Q24.
// filter() ka use karke sirf even numbers return karein.


// let arrNum = [1,2,3,4,5,6]

// ANSWER
// arrNum.filter(num =>{
//     if(num % 2 == 0){
//         console.log(num);

//     }
    
// })

// Expected

// [2,4,6]



// Q25.
// reduce() ka use karke array ka total sum nikalein.



// let arrTotal = [10,20,30]

// ANSWER
// let total = arrTotal.reduce((accumulator,num)=>{

//     return accumulator + num
    
// },0)


// console.log(total);


// Expected

// 60



// Q26.
// find() aur filter() me kya difference hai?

// ANSWER
// find() check karta ha value ko ha to ture nahi ha to false 
// arr ma pehle fisrt element doonodta ha jo condition ko satify kartaho
// ek pelhla matching element reture karta ha
// ek element ya undefind reture karta ha
// single result ke liye

// fillter() jab ap ko multiple data chaheye ho to filter use hota ha
// sab matching element reture karta ha
// hamesha arry reture karta ha
// fileder value arry ma reture karta ha
// multiple result ke liye


// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.

// ANSWER
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

// ANSWER ==> fark parega new reference create hoga code eassy ho jaye ga

//  let deepCopy = structuredClone(copy)

// copy.address.city = 'Karachi'
// console.log(user);

// console.log(copy);

// deepCopy.skills.push('Nehal')

// console.log(deepCopy); //  ANSWER ==> ["HTML", "CSS"]












