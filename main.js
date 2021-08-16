var buttonElement = document.querySelector('.colorClick');

console.log(buttonElement)

function changeColor() {
    document.querySelector('.color').style.backgroundColor = 'blue';
};

buttonElement.addEventListener('click', changeColor);