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



let name = 'Anis'

let arrUser = ['Ansi', 'Nehal', 'Hasan', 'Abdullah']

// name.fi
let returnVal= arrUser.find((items) => {
    // console.log();
    if (items == 'Nehal') {
        return items;
    } else {
        // console.log('false user',false);

    }

})

console.log(returnVal);


// let checkValue = arrUser.filter(function (elemt) {
//     if (elemt > 5 && elemt < 9){
//         return elemt; 
//     }
// })

// console.log(checkValue);


let arrUser = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arrUser.filter((items)=>{
    if(items > 2){
        console.log(items);
        
    }

})

// reduce arry ke saare element ko mila kar ek ho value bana deta ha

let st = ['nehal','coder','ali','imrankhan']

let result = st.reduce((accumulator,srting)=>{
    // console.log(srting);
   return accumulator + ' ' + srting
},)

console.log(result);



let string = 'asdfghjkl'


let res  = string.split().map((items)=>{
    console.log('ad',items);
    return items
})

console.log(res.join());



// let arr1 = ['Nehal','Ali','Sufyan','Abdullah','Subhan']

// let arryResult = arr1.map((itemName)=>{
    // return `MR ${itemName}`
    
// })

// console.log(arryResult);
// // console.log(arr1
// // );
