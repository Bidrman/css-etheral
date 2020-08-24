import React from 'react'

const AboutUs = ({ heading }) => {
    return (
        <div className='aboutUs'>
            <div className='aboutUs__heading'>
                <h3>{heading}</h3>
            </div>
            <div className='aboutUs__text'>
                <div className='aboutUs__left'>
                    <p>
                        Donec velit ex, faucibus eu mauris in, sodales placerat augue. Phasellus feugiat ex id
                        enim laoreet mattis. Quisque velit quam, pharetra non lorem vel, scelerisque ornare
                        dolor. Etiam id ex justo. Nullam nec ipsum non augue convallis gravida. Praesent
                        mattis placerat sodales. Pellentesque nec egestas neque. Donec velit ex, faucibus eu
                        mauris in, sodales placerat augue. Phasellus feugiat ex id enim laoreet mattis.
                        Quisque velit quam, pharetra non lorem vel, scelerisque ornare dolor. Etiam id ex
                        justo. Nullam nec ipsum non augue convallis gravida. Praesent mattis placerat sodales.
                        Pellentesque nec egestas neque.
                    </p>
                </div>
                <div className='aboutUs__right'>
                    <div className='aboutUs__brag'>
                        <h5>Our clients</h5>
                        <span className='aboutUs__number'>55</span>
                    </div>
                    <div className='aboutUs__brag'>
                        <h5>Projects completed</h5>
                        <span className='aboutUs__number'>88</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
