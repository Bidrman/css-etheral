import React from 'react'

const Subscribe = ({ heading, text }) => {
    return (
        <div className='subscribe'>
            <div className='subscribe__text'>
                <h3 className='subscribe__heading'>{heading}</h3>
                <p className='subscribe__paragraph'>{text}</p>
            </div>
            <button className='link__btn-red'>Subscribe now</button>
        </div>
    )
}

export default Subscribe
