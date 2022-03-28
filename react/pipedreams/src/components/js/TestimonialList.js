import React from "react";
import Testimonial from './Testimonial';

const TestimonialList = ({reviews}) => {
    return (
        <>
            <Testimonial text={reviews[0].text} name={reviews[0].name} />
            <Testimonial text={reviews[2].text} name={reviews[2].name} />
        </>
    )
}

export default TestimonialList;