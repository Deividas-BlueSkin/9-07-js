console.log(window)
console.log(document)
console.dir(document)

let para = document.querySelector('p')
para.textContent = 'Boo '
para.innerHTML += '<span>go</span>'

let span = document.createElement('span')
span.textContent= '!'

para.append(span) //to bottom

para.prepend(span) //to top

para.after(span) //after the element

para.before(span) //before the element

span.remove()

para.className = 'c0'
para.className += ' c1'

para.classList.add("holo")
para.classList.add("byu")

para.classList.remove("byu")

para.classList.replace("byu", 'koko')


para.classList.toggle("byu") //remove
para.classList.toggle("byu") //add


para.classList.contains('koko')

let link = document.createElement('a')
para.after(link)
link.textContent = 'link'
link.href = 'https://www.google.com'
link.target = '_blank'

link.setAttribute('href', '')
link.setAttribute('title', 'long title is here')

link.removeAttribute('href', '')

link.style.border = '2px solid black'