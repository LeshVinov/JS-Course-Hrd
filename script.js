const button = document.getElementById('btn');
const square = document.getElementById('square');
const inputText = document.querySelector('[type="text"]')
const inputRange = document.querySelector('[type="range"]')
const e_button = document.getElementById('e_btn')
const circle = document.getElementById('circle')

// console.log(input)

button.addEventListener('click', function() {
    // console.dir(square)
    square.style.backgroundColor = inputText.value
});

const displayNone = function() {
    // console.dir(e_button)
    e_button.style.display = 'none'
} 

// displayNone()

inputRange.addEventListener('input', function(event) {
    
    // circle.clientHeight = inputRange.value
    circle.style.width = inputRange.value
});

