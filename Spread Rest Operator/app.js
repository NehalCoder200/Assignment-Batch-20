// console.log('javascript ok');


let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

// let arr3 = arr1.concat(arr2)

let arr3 = [...arr1, ...arr2]

// console.log(arr3);


let user = {
    name: 'nehal',
    lastName: 'Ali',
    email: 'nehal@gmail.com'
}

let obj = {
    location: 'Karachi',
    cotact: '03131536683',
    ...user,
    email: 'ali@gmail.com',
}

// console.log(obj);

let result = { ...user, ...obj }

// console.log(result);


function foo(...rest) {
    console.log('hello',rest[6]);
}

// foo('apple','mango',1,2,3,4,5)


function abc(a,b,c){
    console.log(a,b,c,);
}

abc(...arr1)