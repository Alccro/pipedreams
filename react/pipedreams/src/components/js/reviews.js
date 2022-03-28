import React from 'react';


export const reviews = [
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

 export const images = [
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

export const RandomImage = () => {
    const random = images[Math.floor(Math.random() * images.length)];
    return (
        random
    )
}
