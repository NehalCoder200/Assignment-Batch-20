// console.log('js is runing');

// asa function jo apne arguments ma ek se zada function accept kary 
// ya function reture kery higher order function kehlata ha

function start(cb) {
    // console.log('run',cb);
    cb('NehalCoder200')
}


start(function printName(name) {
    // console.log('PrintName SuccesFul Run ===>', name);
})

let userNameArr = ['NehalCodeer200', 'Hamza', 'Hasan', 'Usaman', 'Shanawaz']


function print(cb) {
    for (var i = 0; i < userNameArr.length; i++){
        // console.log(userNameArr[i]);
        cb(userNameArr[i])
    }
}

print(function dispaly(namePrint){
    console.log(namePrint);
})