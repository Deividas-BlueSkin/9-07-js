let body = document.body

let container = document.querySelector('div')

function create(HTMLelement = 'div', parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) { parent.append(element) } 
    else {document.body.append(element)}
    if (classes) { element.className = classes }
    if (id) { element.id = id }
    return element
}

let button = create('button', container)
button.textContent = 'click: 0'

let num = 0
button.addEventListener('click', function () {
    //function on click
    num++
    button.textContent = `click: ${num}`
})

// body.classList.add('dark-mode')

let buttonToggle = create('button', container)
buttonToggle.textContent = 'Toggle'

buttonToggle.addEventListener('click', function(){
    console.log('Dark-Mode Toggle')
    body.classList.toggle('dark-mode')
})