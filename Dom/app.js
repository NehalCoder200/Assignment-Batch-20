

// console.log('javascript file chal rahi ha');


let divTage = document.getElementById('prant1')

let length = divTage.childNodes.length - 2

// console.log(length);


console.log(divTage.childNodes);

// console.log(divTage.childNodes[length]);


// pata nhi kya ha ya
// console.log(divTage.childNodes[0].TEXT_NODE);

// nodetype text per 1 de tha ha 
// juckarifacts per 3 de tha ha
// console.log(divTage.childNodes[1].nodeType);
// console.log(divTage.childNodes[0].nodeType);

// nodename elements ko capital kar di tha ha
// console.log(divTage.childNodes[0].nodeName);
// console.log(divTage.childNodes[1].nodeName);


// hasattribute class ya id ha ya nhi ha batata ha ture ya false ma
// let target = divTage.hasAttribute('id')

// console.log(target);

// getattribute id ya class la kar di tha ha jo bi ho
// let target = divTage.getAttribute('class')
// console.log(target);



 divTage.setAttribute("class", "red");

console.log(divTage);


// console.log(divTage.attributes); //nameNodeMape ka object de tha ha