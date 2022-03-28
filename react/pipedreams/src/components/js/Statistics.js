import React from 'react';

import '../css/Statistics.css';

function Statistics() {
  return (
    <>
        <div id='numbersCounter'>
            <div class="numbersRow">
            <div class="numbersColumn">
                <div class="numbersCard">
                <p><i class="fa fa-user"></i></p>
                <h3 class='numbersH3'>1000</h3>
                <p class='numbersP'>Bathrooms</p>
                </div>
            </div>
            <div class="numbersColumn">
                <div class="numbersCard">
                <p><i class="fa fa-check"></i></p>
                <h3 class='numbersH3'>550+</h3>
                <p class='numbersP'>Projects</p>
                </div>
            </div>
            <div class="numbersColumn">
                <div class="numbersCard">
                <p><i class="fa fa-smile-o"></i></p>
                <h3 class='numbersH3'>300+</h3>
                <p class='numbersP'>Happy Clients</p>
                </div>
            </div>
            <div class="numbersColumn">
                <div class="numbersCard">
                <p><i class="fa fa-coffee"></i></p>
                <h3 class='numbersH3'>1 million</h3>
                <p class='numbersP'>Cups of tea</p>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default Statistics

