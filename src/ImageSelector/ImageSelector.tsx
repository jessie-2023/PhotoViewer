import { useState } from 'react';
import React from 'react';
import './ImageSelector.css';

// get an array of image urls
const brokenImages = [
    1, 24, 32, 36, 44, 47
];
export function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}
const imageUrls = getImageUrls();

// the component
export default function ImageSelector(props) {
    // const [display, setDisplay] = useState('url');

    return (
        <div className='selector'>
            {imageUrls.map( each => 
                <img className={props.display===each ? 'selected' : 'else'}
                    src={each} 
                    onClick={() => props.setDisplay(each)}
                />
            )}
        </div>
    )
}

