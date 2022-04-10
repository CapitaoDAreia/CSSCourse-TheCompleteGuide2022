let mainDiv = document.querySelector('section div')
let circle = document.querySelector('input[value="Circulo!"]')
let defaultdiv = document.querySelector('input[value="Quadrado!"]')
let triangle = document.querySelector('input[value="Triângulo!"]')

function circulo(){
    if(mainDiv.className == 'default' || mainDiv.className == 'triangle'){
        mainDiv.className = 'circle'
    }
}
function quadrado(){
    if(mainDiv.className == 'circle' || mainDiv.className == 'triangle'){
        mainDiv.className = 'default'
    }
}
function triangulo(){
    if(mainDiv.className == 'default' || mainDiv.className == 'circle'){
        mainDiv.className = 'triangle'
    }
}