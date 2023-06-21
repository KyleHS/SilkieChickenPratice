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
// classList
// getAttribute()
// setAttribute()
// appendChild()
// append()
// prepend()
// removeChild()
// remove()
// createElement

// innerText = shows text content (does not show hidden).  if we alter this it is treated as a string
const allLinks = document.querySelectorAll('a');
for(let link of allLinks) {
    link.innerText = "I AM A LINK!!!!"   //This example would shift all of the a tags text to say "I AM A LINK"
}

// textContent = shows all text content even if hidden.
// innerHTML = shows all html content (elements and attributes).  if we alter this it treats it as html


// value
// parentElement
// children
// nextSibling
// previousSibling
// style