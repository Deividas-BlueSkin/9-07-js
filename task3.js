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
// input.setAttribute('type', 'textfield')

let h3 = create('h3', calculator)
let num = 5
let numTemp
h3.textContent = num
//TODO fix
input.addEventListener('input', function () {
    console.log(input.value)
    numTemp = input.value
    if (numTemp <= 10 && numTemp >= 1) {
        num = numTemp
        h3.textContent = num
    }
    colorChange(h3)
})

// -2
let buttonMinus2 = create('button', calculator)
buttonMinus2.textContent = '-2'
// -1
let buttonMinus = create('button', calculator)
buttonMinus.textContent = '-'
// Reset
let buttonReset = create('button', calculator)
buttonReset.textContent = 'Reset'
// +1
let buttonPlus = create('button', calculator)
buttonPlus.textContent = '+'
// +2
let buttonPlus2 = create('button', calculator)
buttonPlus2.textContent = '+2'

colorChange(h3)

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// multi functions

function buttonEnable(type, enable) {

    if (type == '-') {
        if (enable) {
            buttonMinus.removeAttribute('disabled')
            buttonMinus2.removeAttribute('disabled')
            // console.log('- enable')
        }
        else {
            buttonMinus.setAttribute('disabled', true)
            buttonMinus2.setAttribute('disabled', true)
            // console.log('- disable')
        }
    }
    else if (type == '+') {
        if (enable) {
            buttonPlus.removeAttribute('disabled')
            buttonPlus2.removeAttribute('disabled')
            // console.log('+ enable')
        }
        else {
            buttonPlus.setAttribute('disabled', true)
            buttonPlus2.setAttribute('disabled', true)
            // console.log('+ disable')
        }
    }
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

buttonMinus.addEventListener('click', function () {
    num--
    h3.textContent = num
    if (num > 1) { buttonEnable('+', true) }
    else { buttonEnable('-', false) }
    //---
    colorChange(h3)
})

buttonMinus2.addEventListener('click', function () {
    num -= 2
    if (num < 1) { num = 1 }
    h3.textContent = num
    if (num > 1) { buttonEnable('+', true) }
    else { buttonEnable('-', false) }
    //---
    colorChange(h3)
})

buttonPlus.addEventListener('click', function () {
    num++
    h3.textContent = num
    if (num < 10) { buttonEnable('-', true) }
    else { buttonEnable('+', false) }
    //---
    colorChange(h3)
})

buttonPlus2.addEventListener('click', function () {
    num += 2
    if (num > 10) { num = 10 }
    h3.textContent = num
    if (num < 10) { buttonEnable('-', true) }
    else { buttonEnable('+', false) }
    //---
    colorChange(h3)
})

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


