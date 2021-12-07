//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue','black', 'yellow', 'pink', 'purple']

body.style.backgroundColor = "silver"
button.addEventListener('click', fridge)

function fridge(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
