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
const CustomerName = testimonials.map(function (customer) {
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
    setTimeout('rotate()', 3000);
}

window.onload = rotate()
