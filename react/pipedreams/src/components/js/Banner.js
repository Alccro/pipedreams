import React from 'react';
import { reviews } from './reviews';
import TestimonialList from './TestimonialList';

import '../css/Banner.css'

function Banner() {
  return (
    <>
        <div id="banner">
            
            <h1 id='name1'>Pipe</h1>
            <h1 id='name2'>Dreams</h1>
            <button id='cta1' type='button' onclick='window.location.href="../pages/contact.html";'>Get in touch today!</button>
            <TestimonialList reviews={reviews}/>
        </div>
    </>
  );
}

export default Banner