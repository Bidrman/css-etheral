import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Card = ({ heading, text, icon, className = 'card' }) => {
    return (
        <div className={className}>
            <div className='card__icon-wrapper'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='card__text'>
                <h4>{heading}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card
