// let userObj = {
//     age : 23,
//     name : "jaani",
//     address : {
//         city : "lahore"
//     }
// }

// // let user = userObj

// // shallow copy -->

// // spread operator
// // let user = {...userObj}

// // object.assign
// // let user = Object.assign({}, userObj)


// // user.age = 13;
// // user.name= "hasan"
// // user.address.city = "karachi";


// // console.log("user object -->", userObj);
// // console.log("user 2 object -->",user);


// // deepCopy ==>

//     // structuredClone 
//     // JSON.parse(JSON.stringify(obj ))


// // let deepCopy = JSON.parse(JSON.stringify(userObj))
// // let deepCopy = structuredClone(userObj)


// // deepCopy.age = 25;
// // deepCopy.address.city = "Multan"

// // console.log(deepCopy);
// // console.log(userObj);



let obj1 = {
    name: 'nehalcoder200',
    email: 'nehalcoder200@gmail.com'
}

let obj2 = {
    name: 'alicoder200',
    email: 'alicoder200@gmail.com'
}

function xyz(kuch) {

    console.log(this.name, kuch);

}

// xyz.call(obj1,'kj')
// xyz.apply(obj1,['kj'])
let result = xyz.bind(obj1, ['a'])

// console.log(result());
