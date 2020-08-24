import React from 'react'

import Button from '../../components/button/'

const Welcome = ({ heading, text }) => {
    return (
        <div className='welcome'>
            <h1>
                Welcome to <span>Etheral</span> World
            </h1>
            <p>{text}</p>
            <a href='#' className='link-btn'>
                Learn-more
            </a>
        </div>
    )
}

export default Welcome
