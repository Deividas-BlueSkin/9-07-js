
function create(HTMLelement = 'div', parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) { parent.append(element) } 
    else {document.body.append(element)}
    if (classes) { element.className = classes }
    if (id) { element.id = id }
    return element
}

// console.log(null == undefined) // is true
// console.log(null === undefined) // is false


let container = document.querySelector('div')

let title = document.createElement('h1')
title.textContent = 'Find Us'
container.append(title)

function card(name, phone, email, address) {

    let card = create('div', container, 'c1 c2 c3')

    let title = document.createElement('span')
    let textPhone = document.createElement('span')
    let textEmail = document.createElement('span')
    let textAddress = document.createElement('span')
    let linkPhone = document.createElement('a')
    let linkEmail = document.createElement('a')
    let linkAddress = document.createElement('a')

    title.textContent = name
    textPhone.textContent = 'Phone'
    textEmail.textContent = 'Email'
    textAddress.textContent = 'Address'
    linkPhone.textContent = phone
    linkEmail.textContent = email
    linkAddress.textContent = address

    container.append(card)
    card.append(title, textPhone, textEmail, textAddress)
    textPhone.append(linkPhone)
    textEmail.append(linkEmail)
    textAddress.append(linkAddress)

    //flex???
    card.style.flex = '1'
    card.style.flexDirection = 'column'
    // card.style.flexDirection = 'row'

    // container.style.grid ='auto'

    card.style.padding = '10px'
    card.style.margin = '10px'
    card.style.border = 'solid'
    card.style.width = '50%'
    // card.style.
    // card.style.

}

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

let map = create('div')
map.innerHTML = `<iframe
src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4085142.4829502567!2d32.93890100000001!3d-0.83271!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1692877370573!5m2!1sen!2slt"
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
referrerpolicy="no-referrer-when-downgrade"></iframe>`

container.append(map)

// let map = document.createElement('iframe')
// map.setAttribute('src',  )