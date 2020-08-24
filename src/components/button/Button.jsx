import React from 'react'

const Button = ({ text, className = 'btn' }) => {
    return <button className={className}>{text}</button>
}

export default Button
