import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

const Carousel = () => {
    SwiperCore.use([Pagination, Autoplay])

    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            init
            autoplay
            onSlideChange={() => console.log('pohlo se to')}
        >
            <SwiperSlide>
                <div className='swiper__quote'>
                    <span className='swiper__quote-mark'>"</span>
                    <p className='swiper__quote-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui ante, ornare eget est
                        in, ultricies rutrum elit.
                    </p>
                    <span className='swiper__quote-mark'>"</span>
                </div>
                <divs className='swiper__person'>
                    <div className='swiper__person__icon-wrapper'></div>
                    <p className='swiper__person-name'>Yogeth Slimpath</p>
                </divs>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper__quote'>
                    <span className='swiper__quote-mark'>"</span>
                    <p className='swiper__quote-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui ante, ornare eget est
                        in, ultricies rutrum elit.
                    </p>
                    <span className='swiper__quote-mark'>"</span>
                </div>
                <divs className='swiper__person'>
                    <div className='swiper__person__icon-wrapper'></div>
                    <p className='swiper__person-name'>John Deo</p>
                </divs>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper__quote'>
                    <span className='swiper__quote-mark'>"</span>
                    <p className='swiper__quote-text'>
                        Morbi velit mauris, hendrerit in convallis vel, laoreet et orci. Integer semper, est
                        vel congue suscipit, nisl nibh convallis lorem, sit amet faucibus purus lacus eu
                        nulla. Sed nec blandit ante, sed semper tellus.
                    </p>
                    <span className='swiper__quote-mark'>"</span>
                </div>
                <div className='swiper__person'>
                    <div className='swiper__person__icon-wrapper'></div>
                    <p className='swiper__person-name'>Larry Vogel</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel
