//const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


//for (let link of allLinks) {
//   link.style.color = 'rgb(0, 108, 134)';
//   link.style.textDecorationColor = 'magenta';
//  link.style.textDecorationStyle = 'wavy'
// }

//const allImages= document.getElementsByTagName('img');  //this selects all of our img objects

//for (let img of allImages) {
    //img.src = 'https://cdn.shopify.com/s/files/1/0014/1962/products/product_DR_spamton_plush_main.png?v=1650408119'
// }  //this loop manipulates the page and replaces all silkie chicken images with spamton images :0

//better way of doing this
const allImages = document.querySelectorAll('img');

for(let img of allImages) {
    img.src = 'https://cdn.shopify.com/s/files/1/0014/1962/products/product_DR_spamton_plush_main.png?v=1650408119'
}  //does the same thing as the example above but with a better method of doing it

//Important DOM methods
// classList = way to add classes, remove them, toggle them on or off, and see if an element has one

// h2.classList.add('className')
// classList.remove
// classList.toggle
// classList.conatains



// getAttribute() = gets any attribute and shows the text in between

// setAttribute() = you can set the attribute to something new
//input.setAttribute('type', 'text') 

// appendChild() > this can only pass one at a time
// append() >  how we add changes to the document through javaScript.  This can add multiple elements separated by comma. add to end of element 
// prepend() > This adds to beginning of element.  

//insertAdjacentElement(position, element)  positions include: beforebegin, afterbegin, beforeened, and afterend

//const h2 = document.createElement('h2')
//h2.append("are adorable")
//const h1 = document.querySelecor('h1')
//h1.insertAdjacentElement('afterend', h2)
// IN THIS EXAMPLE: we add the h2 "are adorable" after the h1 "Silkie Chickens"

// removeChild()
// remove()

// createElement
//const newImg = document.createElement('img') =  this for example will create an img tag in html
//to add source we can do newImg.src = 'google.img'
//document.body.appendChild(newImg) > this is how he update it to the page

// innerText = shows text content (does not show hidden).  if we alter this it is treated as a string
const allLinks = document.querySelectorAll('a');
for(let link of allLinks) {
    link.innerText = "I AM A LINK!!!!"   //This example would shift all of the a tags text to say "I AM A LINK"
}

// textContent = shows all text content even if hidden.
// innerHTML = shows all html content (elements and attributes).  if we alter this it treats it as html


// value
// parentElement =  able to traverse element upwards  class.parentElement >  can also continue like  class.parentElement.parentElement

// children =  class.childeren   this will show a list of all the children elements.  you can use [i] to see which one specifically

// nextElementSibling  = both next and previous allow us to go from element to element either forwards or backwards
// previousElementSibling

// style = style can be altered as well through JavaScript (note that these are camelCased) will only include 
//         inline styles when referencing  ex:  h1.style.color = 'green'  or h1.style.fontSize = '3em'

//getComputedStyle(element)  can help you to see which styles have been applied to looked up element ex: window.getComputedStyle(h1).color