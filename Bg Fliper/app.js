let button = document.getElementById('btn');
function backgroundChanger() {
    let randomColors = `rgb(${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)})`;

    document.body.style.backgroundColor = randomColors;
    button.innerHTML = `Background Color Is : ${randomColors}`;

}