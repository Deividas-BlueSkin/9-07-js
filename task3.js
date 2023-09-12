let body = document.body

let container = document.querySelector('div')

function create(HTMLelement = 'div', parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) { parent.append(element) }
    else { document.body.append(element) }
    if (classes) { element.className = classes }
    if (id) { element.id = id }
    return element
}

let calculator = create('div', container)
calculator.id = 'numbers'

let input = create('input', calculator)
input.type = 'number'
input.max = 10
input.min = 1

let h3 = create('h3', calculator)
let num = 5
let numTemp
h3.textContent = num
//TODO fix
input.addEventListener('input', function () {
    numTemp = Number(input.value)
    if (numTemp <= 10 && numTemp >= 1) {
        num = numTemp
        h3.textContent = num
    }
    colorChange(h3)
})
input.value = num

function newButton(text) {
    let newb = create('button', calculator)
    newb.textContent = text
    return newb
}

let buttonMinus5 = newButton('-5')
let buttonMinus2 = newButton('-2')
let buttonMinus = newButton('-')
let buttonReset = newButton('reset')
let buttonPlus = newButton('+')
let buttonPlus2 = newButton('+2')
let buttonPlus5 = newButton('+5')

colorChange(h3)

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// multi functions

function buttonEnable(type, enable) {

    if (type == '-') {
        if (enable) {
            buttonMinus.removeAttribute('disabled')
            buttonMinus2.removeAttribute('disabled')
            buttonMinus5.removeAttribute('disabled')
            // console.log('- enable')
        }
        else {
            buttonMinus.setAttribute('disabled', true)
            buttonMinus2.setAttribute('disabled', true)
            buttonMinus5.setAttribute('disabled', true)
            // console.log('- disable')
        }
    }
    else if (type == '+') {
        if (enable) {
            buttonPlus.removeAttribute('disabled')
            buttonPlus2.removeAttribute('disabled')
            buttonPlus5.removeAttribute('disabled')
            // console.log('+ enable')
        }
        else {
            buttonPlus.setAttribute('disabled', true)
            buttonPlus2.setAttribute('disabled', true)
            buttonPlus5.setAttribute('disabled', true)
            // console.log('+ disable')
        }
    }
    //input value sync
    input.value = num
}

function colorChange(colorElement) {

    if (num < 5) {
        colorElement.style.color = "red"
    }
    else if (num >= 5) {
        colorElement.style.color = "green"
    }
}

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

function buttonEvent(button, increment) {
    button.addEventListener('click', function () {
        num = num + increment
        if (increment < 0) {
            if (num < 1) { num = 1 }
            h3.textContent = num
            if (num > 1) { buttonEnable('+', true) }
            else { buttonEnable('-', false) }
        }
        else if (increment > 0) {
            if (num > 10) { num = 10 }
            h3.textContent = num
            if (num < 10) { buttonEnable('-', true) }
            else { buttonEnable('+', false) }
        }
        //---
        colorChange(h3)
    })
}

buttonEvent(buttonMinus, -1)
buttonEvent(buttonMinus2, -2)
buttonEvent(buttonMinus5, -5)

buttonEvent(buttonPlus, +1)
buttonEvent(buttonPlus2, +2)
buttonEvent(buttonPlus5, +5)

buttonReset.addEventListener('click', function () {
    num = 5
    h3.textContent = num
    buttonEnable('-', true)
    buttonEnable('+', true)
    //---
    colorChange(h3)
})

let h4 = create('h4', calculator)
h4.textContent = 'Balai:'

let buttonAddScore = create('button', calculator)
buttonAddScore.textContent = 'Irasyti Bala'

buttonAddScore.addEventListener('click', function () {
    let li = create('li', ul)
    li.textContent = num
    colorChange(li)

    let button = create('button', li)
    button.textContent = 'remove'

    button.addEventListener('click', function () {
        li.remove()
    })
})

let ul = create('ul', calculator)
ul.style.listStyle = 'none'


