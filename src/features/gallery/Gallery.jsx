import React from 'react'

import image1 from '../../files/images/portfolio-1.jpg'
import image2 from '../../files/images/portfolio-2.jpg'
import image3 from '../../files/images/portfolio-3.jpg'
import image4 from '../../files/images/portfolio-4.jpg'

const Gallery = ({ heading }) => {
    const headline = heading ? (
        <div className='gallery__heading'>
            <h3>{heading}</h3>
        </div>
    ) : null

    return (
        <div className='gallery'>
            {headline}
            <div className='gallery__images'>
                <div className='gallery__img-wrapper'>
                    <img src={image1} alt='obr' />
                </div>
                <div className='gallery__img-wrapper'>
                    <img src={image2} alt='obr' />
                </div>
                <div className='gallery__img-wrapper'>
                    <img src={image3} alt='obr' />
                </div>
                <div className='gallery__img-wrapper'>
                    <img src={image4} alt='obr' />
                </div>
            </div>
            <div className='gallery__btn'>
                <a href='#' className='link__btn-red'>
                    View more items
                </a>
            </div>
        </div>
    )
}

export default Gallery
