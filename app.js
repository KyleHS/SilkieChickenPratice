const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


//for (let link of allLinks) {
//   link.style.color = 'rgb(0, 108, 134)';
//   link.style.textDecorationColor = 'magenta';
//  link.style.textDecorationStyle = 'wavy'
// }

const allImages= document.getElementsByTagName('img');  //this selects all of our img objects

for (let img of allImages) {
    img.src = 'https://cdn.shopify.com/s/files/1/0014/1962/products/product_DR_spamton_plush_main.png?v=1650408119'
}  //this loop manipulates the page and replaces all silkie chicken images with spamton images :0