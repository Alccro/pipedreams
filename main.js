// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

// Testimonials 
const testimonials = [
    {
    id: 1,
    name: 'Mr Smith',
    text: 'Jamie and the team did a fantastic job. Highly recommended'
    },
    {
    id: 2,
    name: 'Mrs Jones',
    text: "I can't get enough of my new bathroom. We even eat in there now!"
    },
    {
    id: 3,
    name: 'Dr Who',
    text: "The old bathroom in the Tardis felt small and dingy. The Pipedreams crew have totally transformed it. Time flies when I'm in my new bathroom"
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
    document.getElementById('customer').innerHTML = `***** "${customerName[i]}" *****`;
    setTimeout('rotate()', 3000);
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

const randomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
}

const urlImage = "url('" + randomImage() + "')";
const sourceImage = randomImage();

// document.getElementById('header').style.backgroundImage = urlImage;
document.getElementById('image1').src = randomImage();
document.getElementById('image2').src = randomImage();
document.getElementById('image3').src = randomImage();