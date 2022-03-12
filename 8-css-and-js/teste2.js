//Creates an array called NODELIST with a group of all div elements in the document.
let buttons = document.querySelectorAll('input')
let divs = document.querySelectorAll('div')

// console.dir(buttons)
// console.dir(divs)

//Ads a listener that listen all the input-buttons in the page
//When the page gets open, this FOR structure beggins to run and ads a event listener to all elements 
//in BUTTONS array. Then, when a click occurs, the ANONYMOUS FUNCTION runs and change the color of the 
//elements in the DIVS array.
for(let cont = 0; cont < buttons.length; cont++){
    buttons[cont].addEventListener('click', function(){
        divs[0].style.backgroundColor = 'orange'
        divs[1].style.backgroundColor = 'green'
        divs[2].style.backgroundColor = 'yellow'
    })
}


