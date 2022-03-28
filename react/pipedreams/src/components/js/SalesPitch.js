import React from 'react';

import { RandomImage } from './reviews';

import '../css/SalesPitch.css'

function SalesPitch() {
  return (
    <div id='salesContainer'>
        <div className='pitch'>
            <div className='pitchBorder'>
                <img src={<RandomImage />} alt={'A lovely bathroom'}/>
                <div className='pitchText'>  
                    <h2 id='tagline'>The Bathroom Specialists in Wharfedale</h2>
                    <p>Pipe dreams has been designing, and installing bespoke bathrooms for twenty years. With highly-satisfied customers all over the region, you can be sure that the Pipedreams team will give you a bathroom you'll be proud of for years to come.</p>
                </div>
            </div>
        </div>
        <div className='pitch'>
            <div className='pitchBorder'>
                <div className='pitchText'>  
                    <h2 id='tagline'>Quality in everything</h2>
                    <p>Pipe Dreams offers you a wide range of products and services that deliver exceptional value for money without compromising on quality. We provide a comprehensive service from start to finish. Our bathroom installation team will work with your interior designer, architect, or builder to create the perfect bathroom. If required, we can assist you with an entire bathroom build, incorporating a site visit and a complete bathroom design and installation service. We’ll even help you find the best bathroom fittings</p>
                </div>
                <img src={RandomImage} alt={'A lovely bathroom'}/>
            </div>
        </div>
        <div className='pitch'>
            <div className='pitchBorder'>
                <img src={RandomImage} alt={'A lovely bathroom'}/>
                <div className='pitchText'>  
                    <h2 id='tagline'>Family run since 2005</h2>
                    <p>Pipe Dreams is a family owned and operated local business in Guiseley. We work with customers throughout the surrounding areas, including Menston, Ilkley, Otley, Rawdon, Horsforth, Bramhope, Burley in Wharefdale, and Yeadon. Our showroom has on-site parking and is just a short 100m walk from the train station. Visit us today or get in touch to discuss your new bathroom!</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SalesPitch


