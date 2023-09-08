
let container = document.querySelector('div')

function card(name, phone, email, address) {

    let card = document.createElement('div')

    let title = document.createElement('span')
    let text1 = document.createElement('span')
    let text2 = document.createElement('span')
    let text3 = document.createElement('span')
    let link1 = document.createElement('a')
    let link2 = document.createElement('a')
    let link3 = document.createElement('a')

    title.textContent = name
    text1.textContent = 'Phone'
    text2.textContent = 'Email'
    text3.textContent = 'Address'
    link1.textContent = phone
    link2.textContent = email
    link3.textContent = address
    // titl.textContent('Parduotuve')

    container.append(card)
    card.append(title, text1, text2, text3)
    text1.append(link1)
    text2.append(link2)
    text3.append(link3)

    //flex???
    card.style.flex = '1'
    card.style.flexDirection = 'column'
}

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

card('Shop', '+37054545454', 'sogo@gmul.soog', 'left form the forge')

let map = document.createElement('div')
map.innerHTML = `<iframe
    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4085142.4829502567!2d32.93890100000001!3d-0.83271!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1692877370573!5m2!1sen!2slt"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>`

container.append(map)
