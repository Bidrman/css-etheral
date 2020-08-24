import React from 'react'

import Carousel from '../../components/swiper'

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div className='testimonial__heading'>
                <h3>Our Testimonials</h3>
            </div>
            <div className='testimonial__carousel'>
                <Carousel />
            </div>
        </div>
    )
}

export default Testimonial
