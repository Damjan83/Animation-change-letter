// varijable
var buttonElement = document.querySelector('.colorClick');

console.log(buttonElement)

function changeColor() {
    document.querySelector('.color').style.backgroundColor = 'blue';
};


// dogadjaj
buttonElement.addEventListener('click', changeColor);