
// Testimonials 
const testimonials = [
    {
    id: 1,
    name: 'Mr A Douglas',
    text: 'Jamie and the team did a fantastic job. Highly recommended.'
},
{
    id: 2,
    name: 'Ms F Cartwright',
    text: "We felt comfortable every step of the way and now we have a bathroom we are really happy with. Pipe Dreams did a great job."
},
{
    id: 3,
    name: 'Ms C Morley',
    text: "Jan in the showroom guided us through all our choices, making sure we were happy with every detail."
},
{
    id: 4,
    name: 'Mr T Burnett',
    text: "Downstairs bathroom refit. On time, on budget. Polite crew who worked hard and produced quality workmanship. We're already planning our new main bathroom with Pipe Dreams."
}
]
const customerNumber = testimonials.map(function (customer) {
    return [customer.id];
});
const customerName = testimonials.map(function (customer) {
    return [customer.name];
});
const customerText = testimonials.map(function (customer) {
    return [customer.text];
});

let number = customerNumber.length
let i = 0

function rotate() {
    if(++i > number - 1) i = 0;
    document.getElementById('testimonials').innerHTML = `"${customerText[i]}"`;
    document.getElementById('customer').innerHTML = `"${customerName[i]}"`;
    setTimeout('rotate()', 6000);
}

window.onload = rotate()

// random images
const images = [
    '../../img/image1.jpg',
    '../../img/image2.jpg',
    '../../img/image3.jpg',
    '../../img/image4.jpg',
    '../../img/image5.jpg',
    '../../img/image6.jpg',
    '../../img/image7.jpg',
    '../../img/image8.jpg',
    '../../img/image9.jpg',
    '../../img/image10.jpg',
    '../../img/image11.jpg',
    '../../img/image12.jpg',
    '../../img/image13.jpg',
    '../../img/image14.jpg',
    '../../img/image15.jpg',
    '../../img/image16.jpg',
    '../../img/image17.jpg',
    '../../img/image18.jpg',
    '../../img/image19.jpg',
    '../../img/image20.jpg',
    '../../img/image21.jpg',
    '../../img/image22.jpg',
    '../../img/image23.jpg',
    '../../img/image24.jpg'
]

// const randomImage = () => {
//     return images[Math.floor(Math.random() * images.length)];
// }

// const urlImage = "url('" + randomImage() + "')";
// const sourceImage = randomImage();

// document.getElementById('header').style.backgroundImage = urlImage;
// document.getElementById('image1').src = randomImage();
// document.getElementById('image2').src = randomImage();
// document.getElementById('image3').src = randomImage();


