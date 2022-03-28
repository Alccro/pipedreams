import React from 'react';
import '../css/Testimonial.css'

const Testimonial = ({ name, text }) => {
    return (
        <div id='testimonials'>
            <p className='reviewText'>{text}</p>
            <p className='reviewName'>{name}</p>
        </div> 
    );
}

export default Testimonial